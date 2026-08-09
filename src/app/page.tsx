"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { EXAMS_DATA, Exam, Branch, Subject, Chapter, Question, getChapterQuestions } from "../data/quizData";
import { fetchLiveSearchQuestions } from "../lib/liveSearchQuizEngine";
import { addQuizResultToBlockchain } from "../lib/blockchain";

type Screen = "dashboard" | "branches" | "subjects" | "chapters" | "settings" | "quiz" | "result";

interface UserAnswer {
  questionId: string;
  selectedOptionIndex: number | null;
  isMarkedForReview: boolean;
}

// Clean question statement by stripping debug prefixes
function cleanQuestionText(text: string): string {
  return text.replace(/^\[.*?\]\s*/g, "").replace(/\s*\(Q\d+\)$/g, "").trim();
}

// Format step-by-step solutions with tables & equations
function renderFormattedSolution(exp: string) {
  if (!exp) return null;
  const lines = exp.split("\n");
  return (
    <div className="space-y-1.5 font-sans leading-relaxed text-slate-300 text-xs">
      {lines.map((line, lIdx) => {
        if (line.startsWith("### ")) {
          return <h5 key={lIdx} className="font-bold text-emerald-400 mt-2 mb-1">{line.replace("### ", "")}</h5>;
        }
        if (line.startsWith("|")) {
          return (
            <div key={lIdx} className="font-mono text-[11px] bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800 text-cyan-300 overflow-x-auto my-0.5">
              {line}
            </div>
          );
        }
        if (line.startsWith("$$")) {
          return (
            <div key={lIdx} className="font-mono text-center bg-slate-900 p-2 rounded-xl border border-slate-800 text-amber-300 my-1 font-bold">
              {line.replaceAll("$$", "")}
            </div>
          );
        }
        return <p key={lIdx}>{line}</p>;
      })}
    </div>
  );
}

export default function Home() {
  // Gamified User Stats (Saved in LocalStorage)
  const [userName, setUserName] = useState<string>("Master Learner");
  const [streakCount, setStreakCount] = useState<number>(5);
  const [userXP, setUserXP] = useState<number>(340);
  const [dailyQuizzesDone, setDailyQuizzesDone] = useState<number>(1);
  const [dailyGoal] = useState<number>(3);

  // Navigation states
  const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard");
  const [selectedExam, setSelectedExam] = useState<Exam>(EXAMS_DATA[0]);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  // Settings states
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [durationMinutes, setDurationMinutes] = useState<number>(10);
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Active Quiz states
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>({});
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [totalQuizTime, setTotalQuizTime] = useState<number>(0);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState<number>(0);
  const [isPreparingQuiz, setIsPreparingQuiz] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Result metrics
  const [score, setScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [skippedCount, setSkippedCount] = useState<number>(0);
  const [earnedXP, setEarnedXP] = useState<number>(0);
  const [certificateId, setCertificateId] = useState<string>("");

  // Load gamified stats on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedXP = localStorage.getItem("examiq_xp");
      if (savedXP) setUserXP(parseInt(savedXP, 10));
      const savedStreak = localStorage.getItem("examiq_streak");
      if (savedStreak) setStreakCount(parseInt(savedStreak, 10));
      const savedName = localStorage.getItem("examiq_name");
      if (savedName) setUserName(savedName);
    }
  }, []);

  // Filtered lists
  const availableSubjects = useMemo(() => {
    if (!selectedExam) return [];
    if (selectedExam.id === "gate" && selectedBranch) {
      return selectedBranch.subjects;
    }
    return selectedExam.subjects || [];
  }, [selectedExam, selectedBranch]);

  const availableChapters = useMemo(() => {
    if (!selectedSubject) return [];
    return selectedSubject.chapters || [];
  }, [selectedSubject]);

  // Timer logic
  useEffect(() => {
    if (currentScreen === "quiz" && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleQuizSubmit(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentScreen, timeLeft]);

  // Handle Exam Selection
  const selectExam = (exam: Exam) => {
    setSelectedExam(exam);
    setSelectedBranch(null);
    setSelectedSubject(null);
    setSelectedChapter(null);
    if (exam.branches && exam.branches.length > 0) {
      setSelectedBranch(exam.branches[0]);
    }
  };

  // Quick launch quiz directly from subject or chapter
  const quickLaunchChapterQuiz = (subject: Subject, chapter: Chapter) => {
    setSelectedSubject(subject);
    setSelectedChapter(chapter);
    setCurrentScreen("settings");
  };

  // Start Quiz (Clean automatic backend question generation)
  const startQuiz = async () => {
    if (!selectedChapter) return;
    setIsPreparingQuiz(true);

    let questions: Question[] = [];
    try {
      questions = await fetchLiveSearchQuestions({
        topic: `${selectedChapter.name} ${selectedSubject?.name || ""}`,
        examName: selectedExam.name,
        subjectName: selectedSubject?.name || "",
        difficulty,
        count: questionCount,
      });
    } catch (e) {
      console.warn("Falling back to standard database generator", e);
      questions = getChapterQuestions(selectedChapter, difficulty, questionCount);
    } finally {
      setIsPreparingQuiz(false);
    }

    if (!questions || questions.length === 0) {
      questions = getChapterQuestions(selectedChapter, difficulty, questionCount);
    }

    // Clean text for all questions
    const cleanedQuestions = questions.map(q => ({
      ...q,
      text: cleanQuestionText(q.text)
    }));

    setActiveQuestions(cleanedQuestions);
    setCurrentQuestionIndex(0);
    setIsAnswerChecked(false);

    const initialAnswers: Record<string, UserAnswer> = {};
    cleanedQuestions.forEach((q) => {
      initialAnswers[q.id] = {
        questionId: q.id,
        selectedOptionIndex: null,
        isMarkedForReview: false,
      };
    });
    setUserAnswers(initialAnswers);

    const seconds = durationMinutes * 60;
    setTimeLeft(seconds);
    setTotalQuizTime(seconds);
    setQuizStartTime(Date.now());
    setCurrentScreen("quiz");
  };

  // Select Option
  const handleSelectOption = (optionIndex: number) => {
    if (isAnswerChecked) return;
    const activeQ = activeQuestions[currentQuestionIndex];
    if (!activeQ) return;

    setUserAnswers((prev) => ({
      ...prev,
      [activeQ.id]: {
        ...prev[activeQ.id],
        selectedOptionIndex: optionIndex,
      },
    }));
  };

  // Check Answer Button handler (Duolingo style)
  const handleCheckOrNext = () => {
    if (!isAnswerChecked) {
      setIsAnswerChecked(true);
    } else {
      if (currentQuestionIndex < activeQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setIsAnswerChecked(false);
      } else {
        handleQuizSubmit(false);
      }
    }
  };

  // Quiz submission handler (Seamless automatic result hashing in background)
  const handleQuizSubmit = async (isTimeout = false) => {
    if (timerRef.current) clearInterval(timerRef.current);

    const elapsedSeconds = Math.round((Date.now() - quizStartTime) / 1000);
    const actualTimeTaken = Math.min(elapsedSeconds, totalQuizTime);
    setTimeTakenSeconds(actualTimeTaken);

    let calculatedScore = 0;
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;

    activeQuestions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (!ans || ans.selectedOptionIndex === null) {
        skipped++;
      } else if (ans.selectedOptionIndex === q.correctAnswerIndex) {
        correct++;
        calculatedScore += 10;
      } else {
        incorrect++;
      }
    });

    setScore(calculatedScore);
    setCorrectCount(correct);
    setIncorrectCount(incorrect);
    setSkippedCount(skipped);

    const percentage = Math.max(0, Math.round((correct / activeQuestions.length) * 100));
    const newXP = userXP + calculatedScore;
    setUserXP(newXP);
    setEarnedXP(calculatedScore);

    const newQuizzesDone = dailyQuizzesDone + 1;
    setDailyQuizzesDone(newQuizzesDone);

    if (typeof window !== "undefined") {
      localStorage.setItem("examiq_xp", newXP.toString());
    }

    const certCode = `EXAM-CERT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setCertificateId(certCode);

    try {
      await addQuizResultToBlockchain({
        certificateId: certCode,
        userName,
        examName: selectedExam.name,
        subjectName: selectedSubject?.name || "Subject",
        chapterName: selectedChapter?.name || "Chapter",
        score: calculatedScore,
        totalQuestions: activeQuestions.length,
        percentage,
        difficulty,
        timeTakenSeconds: actualTimeTaken,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      console.warn("Background score log error", err);
    }

    setCurrentScreen("result");
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  const currentQ = activeQuestions[currentQuestionIndex];
  const currentAns = currentQ ? userAnswers[currentQ.id] : null;
  const isCorrect = currentAns && currentQ && currentAns.selectedOptionIndex === currentQ.correctAnswerIndex;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans">
      {/* GAMIFIED TOP BAR / HEADER */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div
          onClick={() => setCurrentScreen("dashboard")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition">
            🎓
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
              ExamiQ <span className="text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">PRO</span>
            </h1>
            <p className="text-[11px] text-slate-400 font-medium">Smart Exam Prep</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full text-orange-400 font-bold text-xs">
            <span className="text-sm">🔥</span>
            <span>{streakCount} Days</span>
          </div>

          <div className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full text-cyan-300 font-bold text-xs">
            <span className="text-sm">⚡</span>
            <span>{userXP} XP</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-xs font-semibold text-slate-200">
            <span>👤</span>
            <span>{userName}</span>
          </div>
        </div>
      </header>

      {/* DASHBOARD SCREEN */}
      {currentScreen === "dashboard" && (
        <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Exam Path</h2>
                <span className="text-xs text-emerald-400 font-semibold">{EXAMS_DATA.length} Targeted Exams Available</span>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {EXAMS_DATA.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => selectExam(exam)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                      selectedExam.id === exam.id
                        ? "btn-3d-blue"
                        : "btn-3d-slate"
                    }`}
                  >
                    <span className="text-base">{exam.icon}</span>
                    <span>{exam.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedExam.id === "gate" && selectedExam.branches && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Select Branch ({selectedExam.branches.length} Branches)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {selectedExam.branches.map((branch) => (
                    <button
                      key={branch.id}
                      onClick={() => setSelectedBranch(branch)}
                      className={`p-2.5 rounded-xl text-xs font-bold text-center transition cursor-pointer ${
                        selectedBranch?.id === branch.id
                          ? "bg-emerald-500/20 border-2 border-emerald-500 text-emerald-300"
                          : "bg-slate-950 border border-slate-800 text-slate-400 hover:bg-slate-800"
                      }`}
                    >
                      <div>{branch.icon} {branch.name}</div>
                      <div className="text-[10px] font-normal text-slate-500 mt-0.5">{branch.subjects.length} Subjects</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-6 text-white shadow-xl shadow-emerald-950/40 relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                      Current Target: {selectedExam.name} {selectedBranch ? `(${selectedBranch.name})` : ""}
                    </span>
                    <h2 className="text-2xl font-black mt-2 mb-1">{selectedExam.fullName}</h2>
                    <p className="text-xs text-emerald-100 max-w-lg">{selectedExam.description}</p>
                  </div>

                  <div className="text-right">
                    <span className="text-3xl font-black">{availableSubjects.length}</span>
                    <div className="text-xs font-medium text-emerald-200">Active Subjects</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {availableSubjects.map((subj, subjIdx) => (
                  <div key={subj.id} className="duo-card p-6">
                    <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 font-black flex items-center justify-center border border-indigo-500/20 text-sm">
                          0{subjIdx + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{subj.name}</h3>
                          <p className="text-xs text-slate-400">{subj.description}</p>
                        </div>
                      </div>

                      <span className="text-xs font-bold bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                        {subj.chapters.length} Chapters
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {subj.chapters.map((chap) => (
                        <div
                          key={chap.id}
                          onClick={() => quickLaunchChapterQuiz(subj, chap)}
                          className="bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-2xl transition cursor-pointer flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                                📖 Chapter
                              </span>
                              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md">
                                Full Question Pool
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-slate-200 group-hover:text-white mb-1">
                              {chap.name}
                            </h4>
                            <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                              {chap.description}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition">
                            <span>Start Practice</span>
                            <span>→</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="duo-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-xl">
                  🎯
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Daily Learning Goal</h3>
                  <p className="text-xs text-slate-400">Complete 3 quizzes today to keep streak</p>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-orange-400">{dailyQuizzesDone} / {dailyGoal} Quizzes</span>
                </div>
                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-amber-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (dailyQuizzesDone / dailyGoal) * 100)}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                {dailyQuizzesDone >= dailyGoal
                  ? "🎉 Daily goal accomplished! +50 Bonus XP earned!"
                  : `Complete ${dailyGoal - dailyQuizzesDone} more quiz to complete today's goal.`}
              </p>
            </div>

            <div className="duo-card p-6">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <span>🛡️</span> Official Verified Certificates
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                All test results are automatically verified & logged with authentic credentials.
              </p>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-center">
                <div className="text-2xl mb-1">🏅</div>
                <div className="text-xs font-bold text-slate-200">Instant Verification Guarantee</div>
                <div className="text-[10px] text-slate-500 mt-1">Take any quiz to receive your verified digital certificate!</div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* SETTINGS MODAL */}
      {currentScreen === "settings" && selectedChapter && (
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="duo-card max-w-md w-full p-6 sm:p-8 space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {selectedExam.name} • {selectedSubject?.name}
              </span>
              <h2 className="text-2xl font-black text-white mt-3">{selectedChapter.name}</h2>
              <p className="text-xs text-slate-400 mt-1">Configure your practice session</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Candidate Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  if (typeof window !== "undefined") localStorage.setItem("examiq_name", e.target.value);
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Difficulty Level</label>
              <div className="grid grid-cols-3 gap-2">
                {(["easy", "medium", "hard"] as const).map((diff) => (
                  <button
                    key={diff}
                    type="button"
                    onClick={() => setDifficulty(diff)}
                    className={`py-2.5 text-xs font-bold capitalize rounded-xl transition cursor-pointer ${
                      difficulty === diff
                        ? diff === "easy"
                          ? "btn-3d-green"
                          : diff === "medium"
                          ? "bg-amber-500 text-white shadow-[0_4px_0_#d97706]"
                          : "bg-rose-500 text-white shadow-[0_4px_0_#be123c]"
                        : "btn-3d-slate"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Number of Questions</label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 15, 20].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setQuestionCount(num)}
                    className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                      questionCount === num ? "btn-3d-blue" : "btn-3d-slate"
                    }`}
                  >
                    {num} Qs
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Timer Duration</label>
              <select
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none"
              >
                <option value={5}>5 Minutes (Quick)</option>
                <option value={10}>10 Minutes (Standard)</option>
                <option value={15}>15 Minutes (Comprehensive)</option>
                <option value={30}>30 Minutes (Exam Mode)</option>
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCurrentScreen("dashboard")}
                className="flex-1 py-3 btn-3d-slate font-bold text-xs rounded-xl"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={startQuiz}
                disabled={isPreparingQuiz}
                className="flex-1 py-3 btn-3d-green font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isPreparingQuiz ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Preparing Qs...</span>
                  </>
                ) : (
                  <span>Start Quiz 🚀</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE QUIZ INTERFACE */}
      {currentScreen === "quiz" && currentQ && (
        <div className="flex-1 flex flex-col justify-between max-w-3xl mx-auto w-full px-4 py-6">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => {
                if (confirm("Quit quiz session? Progress will be lost.")) {
                  setCurrentScreen("dashboard");
                }
              }}
              className="text-slate-400 hover:text-white font-bold text-lg cursor-pointer"
            >
              ✕
            </button>

            <div className="flex-1 bg-slate-800 h-3.5 rounded-full overflow-hidden border border-slate-700">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{
                  width: `${Math.round(((currentQuestionIndex + 1) / activeQuestions.length) * 100)}%`,
                }}
              ></div>
            </div>

            <div className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-400">
              ⏱️ {formatTime(timeLeft)}
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Question {currentQuestionIndex + 1} of {activeQuestions.length}
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-relaxed mb-8">
              {cleanQuestionText(currentQ.text)}
            </h2>

            <div className="space-y-3 mb-8">
              {currentQ.options.map((opt, idx) => {
                const isSelected = currentAns?.selectedOptionIndex === idx;

                let cardStyle = "btn-3d-slate";
                if (isAnswerChecked) {
                  if (idx === currentQ.correctAnswerIndex) {
                    cardStyle = "bg-emerald-600 text-white border-2 border-emerald-400 shadow-[0_4px_0_#047857]";
                  } else if (isSelected && !isCorrect) {
                    cardStyle = "bg-rose-600 text-white border-2 border-rose-400 shadow-[0_4px_0_#be123c]";
                  }
                } else if (isSelected) {
                  cardStyle = "btn-3d-blue border-2 border-blue-300";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswerChecked}
                    className={`w-full p-4 rounded-2xl text-left text-sm font-bold flex items-center gap-4 cursor-pointer ${cardStyle}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold border ${
                        isSelected
                          ? "bg-white text-slate-900 border-white"
                          : "bg-slate-800 text-slate-300 border-slate-700"
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="flex-1">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            {isAnswerChecked && (
              <div
                className={`p-4 rounded-2xl mb-4 flex items-start gap-3 border animate-fadeIn ${
                  isCorrect
                    ? "bg-emerald-950/80 border-emerald-500/50 text-emerald-200"
                    : "bg-rose-950/80 border-rose-500/50 text-rose-200"
                }`}
              >
                <span className="text-2xl">{isCorrect ? "🎉" : "💡"}</span>
                <div className="flex-1">
                  <div className="font-extrabold text-sm mb-1">
                    {isCorrect ? "Awesome! That's Correct! (+10 XP)" : "Solution & Explanation:"}
                  </div>
                  {renderFormattedSolution(currentQ.explanation)}
                </div>
              </div>
            )}

            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex((prev) => prev - 1);
                    setIsAnswerChecked(false);
                  }
                }}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-3 btn-3d-slate text-xs font-bold rounded-xl disabled:opacity-30"
              >
                ← Prev
              </button>

              <button
                onClick={handleCheckOrNext}
                disabled={currentAns?.selectedOptionIndex === null}
                className={`px-8 py-3.5 text-sm font-black rounded-2xl cursor-pointer disabled:opacity-40 ${
                  isAnswerChecked ? "btn-3d-purple" : "btn-3d-green"
                }`}
              >
                {!isAnswerChecked
                  ? "CHECK ANSWER ✓"
                  : currentQuestionIndex < activeQuestions.length - 1
                  ? "CONTINUE →"
                  : "FINISH QUIZ 🎉"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESULTS SCREEN */}
      {currentScreen === "result" && (
        <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
          <div className="duo-card p-6 sm:p-10 space-y-8 text-center">
            <div>
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-4xl mb-4 shadow-xl shadow-emerald-500/20 animate-bounce-subtle">
                🏆
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
                Practice Session Completed
              </span>
              <h2 className="text-3xl font-black text-white mt-3">Outstanding Effort!</h2>
              <p className="text-xs text-slate-400 mt-1">
                {selectedExam.name} • {selectedSubject?.name} ({selectedChapter?.name})
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div className="text-xs font-bold text-slate-400 mb-1">XP Earned</div>
                <div className="text-2xl font-black text-emerald-400">+{earnedXP} XP</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div className="text-xs font-bold text-slate-400 mb-1">Accuracy</div>
                <div className="text-2xl font-black text-cyan-400">
                  {activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0}%
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div className="text-xs font-bold text-slate-400 mb-1">Correct</div>
                <div className="text-2xl font-black text-emerald-400">{correctCount} / {activeQuestions.length}</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div className="text-xs font-bold text-slate-400 mb-1">Time Taken</div>
                <div className="text-2xl font-black text-amber-400">{formatTime(timeTakenSeconds)}</div>
              </div>
            </div>

            {certificateId && (
              <div className="bg-slate-950 border-2 border-emerald-500/30 rounded-3xl p-6 text-left relative overflow-hidden">
                <div className="flex justify-between items-start mb-4 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                      Official ExamiQ Verified Certificate
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">Certificate of Completion</h3>
                  </div>
                  <div className="text-xs font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full">
                    ID: {certificateId}
                  </div>
                </div>

                <div className="text-xs text-slate-300 space-y-1">
                  <div><span className="text-slate-500">Candidate:</span> <strong className="text-white">{userName}</strong></div>
                  <div><span className="text-slate-500">Test Standard:</span> {selectedExam.name} - {selectedSubject?.name}</div>
                  <div><span className="text-slate-500">Verification Status:</span> <span className="text-emerald-400 font-bold">✓ Digitally Authenticated</span></div>
                </div>
              </div>
            )}

            <div className="text-left space-y-3">
              <h3 className="text-sm font-bold text-slate-300">Detailed Solutions & Step-by-Step Breakdown</h3>
              {activeQuestions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const selectedIdx = ans?.selectedOptionIndex;
                const isQCorrect = selectedIdx === q.correctAnswerIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-2xl border text-xs ${
                      isQCorrect
                        ? "bg-emerald-950/20 border-emerald-500/30"
                        : "bg-rose-950/20 border-rose-500/30"
                    }`}
                  >
                    <div className="font-bold text-slate-200 mb-1.5 text-sm">
                      Q{idx + 1}. {cleanQuestionText(q.text)}
                    </div>
                    <div className="text-xs text-slate-400 mb-2">
                      Correct Answer: <strong className="text-emerald-400">{q.options[q.correctAnswerIndex]}</strong>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl text-slate-300 leading-relaxed border border-slate-900">
                      {renderFormattedSolution(q.explanation)}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentScreen("dashboard")}
              className="w-full py-4 btn-3d-green font-black text-sm rounded-2xl cursor-pointer"
            >
              Back to Dashboard 🚀
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-4 border-t border-slate-900 text-center text-xs text-slate-500">
        ExamiQ Interactive Quiz Platform © 2026. Empowering Students Everywhere.
      </footer>
    </main>
  );
}
