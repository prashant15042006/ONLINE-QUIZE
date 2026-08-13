"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { EXAMS_DATA, Exam, Branch, Subject, Chapter, Question, getChapterQuestions } from "../data/quizData";
import { fetchLiveSearchQuestions } from "../lib/liveSearchQuizEngine";
import { addQuizResultToBlockchain } from "../lib/blockchain";
import {
  recordQuizAttempt,
  toggleBookmark,
  isBookmarked,
  getMistakes,
  getBookmarks,
  QuizAttemptRecord,
} from "../lib/userStore";
import MathRenderer from "../components/MathRenderer";
import AIExplainModal from "../components/AIExplainModal";
import MistakesNotebookModal from "../components/MistakesNotebookModal";
import BookmarksModal from "../components/BookmarksModal";
import AIQuizGeneratorModal from "../components/AIQuizGeneratorModal";
import PerformanceAnalyticsView from "../components/PerformanceAnalyticsView";
import QuestionNavigationGrid from "../components/QuestionNavigationGrid";
import ResultReviewModal from "../components/ResultReviewModal";
import GateRankEstimatorModal from "../components/GateRankEstimatorModal";
import QuestionSearchModal from "../components/QuestionSearchModal";
import GatePyqMockModal from "../components/GatePyqMockModal";

type Screen = "dashboard" | "branches" | "subjects" | "chapters" | "settings" | "quiz" | "result";
type QuizMode = "practice" | "test" | "exam";

interface UserAnswer {
  questionId: string;
  selectedOptionIndex: number | null;
  isMarkedForReview: boolean;
}

function cleanQuestionText(text: string): string {
  return text.replace(/^\[.*?\]\s*/g, "").replace(/\s*\(Q\d+\)$/g, "").trim();
}

// Parse inline math ($...$) and block math ($$...$$) in text
function renderTextWithMath(text: string): React.ReactNode {
  if (!text) return null;
  // Split on block math first
  const blockParts = text.split(/(\$\$[^$]+\$\$)/g);
  return blockParts.map((part, i) => {
    if (part.startsWith("$$") && part.endsWith("$$")) {
      return <MathRenderer key={i} math={part.slice(2, -2)} block={true} />;
    }
    // Split on inline math
    const inlineParts = part.split(/(\$[^$]+\$)/g);
    return inlineParts.map((ip, j) => {
      if (ip.startsWith("$") && ip.endsWith("$") && ip.length > 2) {
        return <MathRenderer key={`${i}-${j}`} math={ip.slice(1, -1)} block={false} />;
      }
      return <span key={`${i}-${j}`}>{ip}</span>;
    });
  });
}

function renderFormattedSolution(exp: string) {
  if (!exp) return null;
  const lines = exp.split("\n");
  // Build table rows if consecutive pipe lines
  const elements: React.ReactNode[] = [];
  let tableRows: string[] = [];

  const flushTable = (key: string) => {
    if (tableRows.length < 2) {
      tableRows.forEach((r, ri) => elements.push(<div key={`${key}-tr-${ri}`} className="font-mono text-[11px] text-cyan-300">{r}</div>));
      tableRows = [];
      return;
    }
    const headers = tableRows[0].split("|").filter(Boolean).map(h => h.trim());
    const dataRows = tableRows.slice(2).filter(r => !r.match(/^[|\s-]+$/));
    elements.push(
      <div key={key} className="overflow-x-auto my-2">
        <table className="solution-table">
          <thead><tr>{headers.map((h,i) => <th key={i}>{h}</th>)}</tr></thead>
          <tbody>{dataRows.map((row, ri) => {
            const cells = row.split("|").filter(Boolean).map(c => c.trim());
            return <tr key={ri}>{cells.map((c, ci) => <td key={ci}>{renderTextWithMath(c)}</td>)}</tr>;
          })}</tbody>
        </table>
      </div>
    );
    tableRows = [];
  };

  lines.forEach((line, lIdx) => {
    if (line.startsWith("|")) {
      tableRows.push(line);
    } else {
      if (tableRows.length > 0) flushTable(`tbl-${lIdx}`);
      if (line.startsWith("### ")) {
        elements.push(<h5 key={lIdx} className="font-bold text-emerald-400 mt-3 mb-1 text-sm">{line.replace("### ", "")}</h5>);
      } else if (line.startsWith("## ")) {
        elements.push(<h4 key={lIdx} className="font-bold text-cyan-400 mt-3 mb-1">{line.replace("## ", "")}</h4>);
      } else if (line.startsWith("$$") && line.endsWith("$$")) {
        elements.push(<MathRenderer key={lIdx} math={line.slice(2, -2)} block={true} />);
      } else if (line.startsWith("- ") || line.startsWith("* ")) {
        elements.push(<li key={lIdx} className="ml-4 list-disc text-slate-300">{renderTextWithMath(line.slice(2))}</li>);
      } else if (line.trim() === "") {
        elements.push(<br key={lIdx} />);
      } else {
        elements.push(<p key={lIdx} className="text-slate-300 leading-relaxed">{renderTextWithMath(line)}</p>);
      }
    }
  });
  if (tableRows.length > 0) flushTable("tbl-end");

  return <div className="space-y-1 text-xs">{elements}</div>;
}

export default function Home() {
  // User Profile & Stats
  const [userName, setUserName] = useState<string>("Master Learner");
  const [streakCount, setStreakCount] = useState<number>(5);
  const [userXP, setUserXP] = useState<number>(340);
  const [dailyQuizzesDone, setDailyQuizzesDone] = useState<number>(1);
  const [dailyGoal] = useState<number>(3);

  // Navigation states
  const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard");
  const [selectedExam, setSelectedExam] = useState<Exam>(EXAMS_DATA[0]);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(
    EXAMS_DATA[0].branches && EXAMS_DATA[0].branches.length > 0 ? EXAMS_DATA[0].branches[0] : null
  );
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  // Settings & Quiz Mode
  const [quizMode, setQuizMode] = useState<QuizMode>("practice");
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
  const [isRetrySession, setIsRetrySession] = useState<boolean>(false);
  const [firstAttemptAccuracy, setFirstAttemptAccuracy] = useState<number | undefined>(undefined);

  // Modals state
  const [isMistakesModalOpen, setIsMistakesModalOpen] = useState(false);
  const [isBookmarksModalOpen, setIsBookmarksModalOpen] = useState(false);
  const [isAIExplainModalOpen, setIsAIExplainModalOpen] = useState(false);
  const [isAIQuizGenModalOpen, setIsAIQuizGenModalOpen] = useState(false);
  const [isRankEstimatorOpen, setIsRankEstimatorOpen] = useState(false);
  const [isQuestionSearchOpen, setIsQuestionSearchOpen] = useState(false);
  const [isResultReviewModalOpen, setIsResultReviewModalOpen] = useState(false);
  const [isGatePyqModalOpen, setIsGatePyqModalOpen] = useState(false);
  const [showAnalyticsView, setShowAnalyticsView] = useState(false);

  // Bookmark status toggle
  const [isCurrentQBookmarked, setIsCurrentQBookmarked] = useState(false);

  // Counts for header badges
  const [mistakesCount, setMistakesCount] = useState(0);
  const [bookmarksCount, setBookmarksCount] = useState(0);

  // Load saved data on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedXP = localStorage.getItem("examiq_xp");
      if (savedXP) setUserXP(parseInt(savedXP, 10));
      const savedStreak = localStorage.getItem("examiq_streak");
      if (savedStreak) setStreakCount(parseInt(savedStreak, 10));
      const savedName = localStorage.getItem("examiq_name");
      if (savedName) setUserName(savedName);
      setMistakesCount(getMistakes().length);
      setBookmarksCount(getBookmarks().length);
    }
  }, []);

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

  // Map for correct answers for Navigation Grid
  const correctAnswersMap = useMemo(() => {
    const map: Record<string, number> = {};
    activeQuestions.forEach((q) => {
      map[q.id] = q.correctAnswerIndex;
    });
    return map;
  }, [activeQuestions]);

  // Daily Challenge Question Picker
  const dailyChallengeQuestion = useMemo(() => {
    const allQs: Question[] = [];
    EXAMS_DATA.forEach((e) => {
      const subs = e.branches ? e.branches.flatMap((b) => b.subjects) : e.subjects || [];
      subs.forEach((s) => s.chapters.forEach((c) => allQs.push(...c.questions)));
    });
    if (allQs.length === 0) return null;
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return allQs[dayOfYear % allQs.length];
  }, []);

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

  // Update current question bookmark status
  useEffect(() => {
    if (activeQuestions[currentQuestionIndex]) {
      setIsCurrentQBookmarked(isBookmarked(activeQuestions[currentQuestionIndex].id));
    }
  }, [currentQuestionIndex, activeQuestions]);

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

  const quickLaunchChapterQuiz = (subject: Subject, chapter: Chapter) => {
    setSelectedSubject(subject);
    setSelectedChapter(chapter);
    setCurrentScreen("settings");
  };

  // Launch custom quiz from Mistakes / Bookmarks / AI / PYQ Papers
  const launchCustomQuestionPool = (questions: Question[], title: string) => {
    if (questions.length === 0) return;
    const cleaned = questions.map((q) => ({ ...q, text: cleanQuestionText(q.text) }));
    setActiveQuestions(cleaned);
    setCurrentQuestionIndex(0);
    setIsAnswerChecked(false);

    const initialAnswers: Record<string, UserAnswer> = {};
    cleaned.forEach((q) => {
      initialAnswers[q.id] = { questionId: q.id, selectedOptionIndex: null, isMarkedForReview: false };
    });
    setUserAnswers(initialAnswers);

    const seconds = durationMinutes * 60;
    setTimeLeft(seconds);
    setTotalQuizTime(seconds);
    setQuizStartTime(Date.now());
    setCurrentScreen("quiz");
  };

  // Start Standard Quiz
  const startQuiz = async () => {
    if (!selectedChapter) return;
    setIsPreparingQuiz(true);
    setIsRetrySession(false);
    setFirstAttemptAccuracy(undefined);

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
      questions = getChapterQuestions(selectedChapter, difficulty, questionCount);
    } finally {
      setIsPreparingQuiz(false);
    }

    if (!questions || questions.length === 0) {
      questions = getChapterQuestions(selectedChapter, difficulty, questionCount);
    }

    const cleaned = questions.map((q) => ({ ...q, text: cleanQuestionText(q.text) }));
    setActiveQuestions(cleaned);
    setCurrentQuestionIndex(0);
    setIsAnswerChecked(false);

    const initialAnswers: Record<string, UserAnswer> = {};
    cleaned.forEach((q) => {
      initialAnswers[q.id] = { questionId: q.id, selectedOptionIndex: null, isMarkedForReview: false };
    });
    setUserAnswers(initialAnswers);

    const seconds = durationMinutes * 60;
    setTimeLeft(seconds);
    setTotalQuizTime(seconds);
    setQuizStartTime(Date.now());
    setCurrentScreen("quiz");
  };

  // Option Select
  const handleSelectOption = (optionIndex: number) => {
    if (quizMode === "practice" && isAnswerChecked) return;
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

  // Bookmark Toggle Handler
  const handleToggleBookmarkCurrent = () => {
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    const bookmarked = toggleBookmark(
      q,
      selectedExam?.name || "Exam",
      selectedSubject?.name || "Subject",
      selectedChapter?.name || "Chapter"
    );
    setIsCurrentQBookmarked(bookmarked);
    setBookmarksCount(getBookmarks().length);
  };

  // Mark for review toggle
  const toggleMarkForReview = () => {
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    setUserAnswers((prev) => ({
      ...prev,
      [q.id]: {
        ...prev[q.id],
        isMarkedForReview: !prev[q.id].isMarkedForReview,
      },
    }));
  };

  // Clear choice
  const clearResponse = () => {
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    setUserAnswers((prev) => ({
      ...prev,
      [q.id]: {
        ...prev[q.id],
        selectedOptionIndex: null,
      },
    }));
  };

  // Check / Next Action
  const handleCheckOrNext = () => {
    if (quizMode === "practice" && !isAnswerChecked) {
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

  // Submit Handler
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
        calculatedScore += quizMode === "exam" ? 4 : 10;
      } else {
        incorrect++;
        if (quizMode === "exam") calculatedScore -= 1; // Negative marking in exam simulation
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

    // Save attempt record
    const attemptRecord: QuizAttemptRecord = {
      id: `att-${Date.now()}`,
      examName: selectedExam?.name || "Exam",
      subjectName: selectedSubject?.name || "Subject",
      chapterName: selectedChapter?.name || "Chapter",
      mode: quizMode,
      difficulty,
      score: calculatedScore,
      totalQuestions: activeQuestions.length,
      correctCount: correct,
      incorrectCount: incorrect,
      skippedCount: skipped,
      accuracy: percentage,
      timeTakenSeconds: actualTimeTaken,
      avgTimePerQuestionSeconds: activeQuestions.length > 0 ? Math.round(actualTimeTaken / activeQuestions.length) : 0,
      timestamp: new Date().toISOString(),
      questions: activeQuestions,
      userAnswers,
      isRetryAttempt: isRetrySession,
      firstAttemptAccuracy: firstAttemptAccuracy,
    };

    recordQuizAttempt(attemptRecord);
    setMistakesCount(getMistakes().length);

    try {
      await addQuizResultToBlockchain({
        certificateId: certCode,
        userName,
        examName: selectedExam?.name || "Quiz",
        subjectName: selectedSubject?.name || "Subject",
        chapterName: selectedChapter?.name || "Chapter",
        score: calculatedScore,
        totalQuestions: activeQuestions.length,
        percentage,
        difficulty,
        timeTakenSeconds: actualTimeTaken,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {}

    setCurrentScreen("result");
  };

  // Retry Incorrect Questions Handler
  const retryIncorrectQuestions = () => {
    const missedQuestions = activeQuestions.filter((q) => {
      const ans = userAnswers[q.id];
      return ans && ans.selectedOptionIndex !== null && ans.selectedOptionIndex !== q.correctAnswerIndex;
    });

    if (missedQuestions.length === 0) return;

    const currentAcc = Math.round((correctCount / activeQuestions.length) * 100);
    setFirstAttemptAccuracy(currentAcc);
    setIsRetrySession(true);
    launchCustomQuestionPool(missedQuestions, `Retry Missed Questions (${missedQuestions.length})`);
  };

  // Try Similar Question Handler
  const trySimilarQuestion = (currentQ: Question) => {
    const similarQs = getChapterQuestions(selectedChapter || availableChapters[0], currentQ.difficulty, 5);
    const filtered = similarQs.filter((q) => q.id !== currentQ.id);

    if (filtered.length > 0) {
      launchCustomQuestionPool([filtered[0]], `Similar Question: ${currentQ.concept || "Concept Test"}`);
    }
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
      {/* GAMIFIED TOP BAR */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div onClick={() => setCurrentScreen("dashboard")} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition">
            🎓
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
              ExamiQ <span className="text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">PRO</span>
            </h1>
            <p className="text-[11px] text-slate-400 font-medium">Smart Competitive Exam Prep</p>
          </div>
        </div>

        {/* Action Header & Badges */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsGatePyqModalOpen(true)}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 text-xs font-bold transition cursor-pointer"
          >
            <span>📜</span> GATE PYQ Mocks
          </button>

          <button
            onClick={() => setIsQuestionSearchOpen(true)}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 text-xs font-bold transition cursor-pointer"
          >
            <span>🔍</span> Search Qs
          </button>

          <button
            onClick={() => setIsRankEstimatorOpen(true)}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 text-xs font-bold transition cursor-pointer"
          >
            <span>📊</span> Rank Predictor
          </button>

          <button
            onClick={() => setIsMistakesModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 text-xs font-bold transition cursor-pointer"
          >
            <span>📕</span> Mistakes ({mistakesCount})
          </button>

          <button
            onClick={() => setIsBookmarksModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 text-xs font-bold transition cursor-pointer"
          >
            <span>🔖</span> Bookmarks ({bookmarksCount})
          </button>

          <button
            onClick={() => setIsAIQuizGenModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 text-xs font-bold transition cursor-pointer"
          >
            <span>✨</span> AI Quiz
          </button>

          <div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full text-orange-400 font-bold text-xs">
            <span>🔥</span> {streakCount}d
          </div>

          <div className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full text-cyan-300 font-bold text-xs">
            <span>⚡</span> {userXP} XP
          </div>
        </div>
      </header>

      {/* DASHBOARD SCREEN */}
      {currentScreen === "dashboard" && (
        <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">

          {/* Quick Action Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-2xl">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setIsGatePyqModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 rounded-xl text-xs font-black transition cursor-pointer shadow-lg shadow-amber-500/20 flex items-center gap-1.5"
              >
                <span>📜</span> GATE Year-Wise PYQ Papers (2015-2024)
              </button>

              <button
                onClick={() => setShowAnalyticsView(false)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  !showAnalyticsView ? "btn-3d-blue" : "btn-3d-slate"
                }`}
              >
                🗺️ Learning Pathway
              </button>

              <button
                onClick={() => setShowAnalyticsView(true)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  showAnalyticsView ? "btn-3d-blue" : "btn-3d-slate"
                }`}
              >
                📊 Performance Analytics
              </button>

              <button
                onClick={() => setIsQuestionSearchOpen(true)}
                className="px-4 py-2 btn-3d-slate rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
              >
                <span>🔍</span> Search Question Bank
              </button>

              <button
                onClick={() => setIsRankEstimatorOpen(true)}
                className="px-4 py-2 btn-3d-slate rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
              >
                <span>📊</span> GATE Rank Estimator
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <span>Target Exam:</span>
              <span className="text-white bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                {selectedExam.name}
              </span>
            </div>
          </div>

          {showAnalyticsView ? (
            <PerformanceAnalyticsView
              onStartTargetedPractice={(topic, subject) => {
                const foundSubj = availableSubjects.find((s) => s.name.includes(subject)) || availableSubjects[0];
                const foundChap = foundSubj?.chapters.find((c) => c.name.includes(topic)) || foundSubj?.chapters[0];
                if (foundSubj && foundChap) {
                  quickLaunchChapterQuiz(foundSubj, foundChap);
                }
              }}
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-6">

                {/* Exam Path Selector */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Exam Target</h2>
                    <span className="text-xs text-emerald-400 font-semibold">{EXAMS_DATA.length} Major Exams</span>
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {EXAMS_DATA.map((exam) => (
                      <button
                        key={exam.id}
                        onClick={() => selectExam(exam)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                          selectedExam.id === exam.id ? "btn-3d-blue" : "btn-3d-slate"
                        }`}
                      >
                        <span className="text-base">{exam.icon}</span>
                        <span>{exam.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Branch selector if GATE */}
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

                {/* Hero Target Banner */}
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

                {/* Subjects & Chapters List */}
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
                                  {chap.questions.length} Qs
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

              {/* Sidebar Cards */}
              <div className="lg:col-span-4 space-y-6">

                {/* GATE PYQ Year-Wise Paper Banner */}
                <div className="bg-gradient-to-br from-amber-900/60 to-orange-900/60 border border-amber-500/40 rounded-3xl p-5 space-y-3 shadow-xl relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded-full border border-amber-400/30">
                      📜 Official GATE PYQs
                    </span>
                    <span className="text-xs font-bold text-amber-300">2015 – 2024</span>
                  </div>

                  <h4 className="font-extrabold text-white text-base leading-snug">
                    GATE CSE Official Year-Wise Papers
                  </h4>
                  <p className="text-xs text-amber-100/80 leading-relaxed">
                    Practice complete original GATE papers (2024 Set 1/2, 2023, 2022, 2021 Set 1/2, 2020 down to 2015) with step-by-step solutions!
                  </p>

                  <button
                    onClick={() => setIsGatePyqModalOpen(true)}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs rounded-xl cursor-pointer shadow-lg"
                  >
                    Explore All Year Papers (2015-2024) 🚀
                  </button>
                </div>

                {/* Daily Challenge Card */}
                {dailyChallengeQuestion && (
                  <div className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border border-purple-500/40 rounded-3xl p-5 space-y-3 shadow-xl relative overflow-hidden">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-wider text-purple-300 bg-purple-500/20 px-2.5 py-1 rounded-full border border-purple-400/30">
                        ⚡ Daily Challenge
                      </span>
                      <span className="text-xs font-bold text-amber-400">+20 XP</span>
                    </div>

                    <div className="text-xs font-bold text-white leading-snug">
                      {renderTextWithMath(cleanQuestionText(dailyChallengeQuestion.text))}
                    </div>

                    <button
                      onClick={() => launchCustomQuestionPool([dailyChallengeQuestion], "Daily Challenge Question")}
                      className="w-full py-2.5 btn-3d-purple font-bold text-xs rounded-xl cursor-pointer"
                    >
                      Solve Daily Question 🚀
                    </button>
                  </div>
                )}

                {/* Rank Estimator Promotion */}
                <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 text-xl font-bold flex items-center justify-center border border-amber-500/20">
                      📊
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm">GATE Rank Predictor</h4>
                      <p className="text-[11px] text-slate-400">Estimate your AIR rank based on expected marks</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsRankEstimatorOpen(true)}
                    className="w-full py-2.5 btn-3d-blue font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Open Rank Estimator →
                  </button>
                </div>

                {/* AI Quiz Generator Banner */}
                <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 text-xl font-bold flex items-center justify-center border border-cyan-500/20">
                      ✨
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm">AI Quiz Generator</h4>
                      <p className="text-[11px] text-slate-400">Generate custom quiz from topic or notes</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsAIQuizGenModalOpen(true)}
                    className="w-full py-2.5 btn-3d-purple font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Generate AI Quiz →
                  </button>
                </div>

              </div>
            </div>
          )}
        </div>
      )}

      {/* SETTINGS SCREEN */}
      {currentScreen === "settings" && selectedSubject && selectedChapter && (
        <div className="flex-1 max-w-xl mx-auto w-full px-4 py-8 flex flex-col justify-center">
          <div className="duo-card p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {selectedExam.name} • {selectedSubject.name}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                {selectedChapter.name}
              </h2>
              <p className="text-xs text-slate-400 mt-1">{selectedChapter.description}</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Quiz Mode</label>
              <div className="grid grid-cols-3 gap-2">
                {(["practice", "test", "exam"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setQuizMode(m)}
                    className={`py-2.5 rounded-xl text-xs font-bold capitalize transition cursor-pointer ${
                      quizMode === m ? "btn-3d-blue" : "btn-3d-slate"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Difficulty</label>
              <div className="grid grid-cols-3 gap-2">
                {(["easy", "medium", "hard"] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDifficulty(d)}
                    className={`py-2.5 rounded-xl text-xs font-bold capitalize transition cursor-pointer ${
                      difficulty === d ? "btn-3d-blue" : "btn-3d-slate"
                    }`}
                  >
                    {d}
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

      {/* QUIZ INTERFACE */}
      {currentScreen === "quiz" && currentQ && (
        <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
          {/* Low Time Warning Banner */}
          {timeLeft > 0 && timeLeft < 60 && (
            <div className="bg-rose-600 text-white font-bold text-xs text-center py-2 rounded-xl mb-3 animate-pulse">
              ⚠️ Less than {timeLeft}s remaining! Quiz will auto-submit.
            </div>
          )}

          {/* Top Header Controls */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <button
              onClick={() => {
                if (confirm("Quit session? Progress will be lost.")) {
                  setCurrentScreen("dashboard");
                }
              }}
              className="text-slate-400 hover:text-white font-bold text-lg cursor-pointer"
            >
              ✕
            </button>

            <div className="flex-1 bg-slate-800 h-3 rounded-full overflow-hidden border border-slate-700">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.round(((currentQuestionIndex + 1) / activeQuestions.length) * 100)}%` }}
              ></div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleBookmarkCurrent}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border transition cursor-pointer ${
                  isCurrentQBookmarked
                    ? "bg-amber-500 text-white border-amber-400 shadow-[0_2px_0_#d97706]"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {isCurrentQBookmarked ? "★ Bookmarked" : "☆ Bookmark"}
              </button>

              <button
                onClick={() => setIsAIExplainModalOpen(true)}
                className="px-3 py-1.5 rounded-full text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white border border-purple-400 shadow-[0_2px_0_#9333ea] cursor-pointer"
              >
                🤖 AI Explain
              </button>

              <div className={`px-3 py-1.5 rounded-full text-xs font-mono font-black border ${
                timeLeft > 0 && timeLeft <= 30
                  ? "bg-rose-950 border-rose-500 timer-danger"
                  : timeLeft > 0 && timeLeft <= 120
                  ? "bg-amber-950 border-amber-500 timer-warning"
                  : "bg-slate-900 border-slate-700 timer-normal"
              }`}>
                ⏱ {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Main Question Column */}
            <div className="lg:col-span-8 flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-400">Q {currentQuestionIndex + 1}</span>
                    <span className="text-slate-700">/</span>
                    <span className="text-xs font-bold text-slate-600">{activeQuestions.length}</span>
                    {currentQ.concept && (
                      <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full font-bold">
                        {currentQ.concept}
                      </span>
                    )}
                  </div>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                    currentQ.difficulty === "easy" ? "bg-emerald-500/10 text-emerald-400" :
                    currentQ.difficulty === "medium" ? "bg-amber-500/10 text-amber-400" :
                    "bg-rose-500/10 text-rose-400"
                  }`}>{currentQ.difficulty}</span>
                </div>

                <div className="text-base sm:text-lg font-extrabold text-white leading-relaxed mb-6">
                  {renderTextWithMath(cleanQuestionText(currentQ.text))}
                </div>

                <div className="space-y-3 mb-6">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = currentAns?.selectedOptionIndex === idx;
                    const isRevealed = quizMode === "practice" && isAnswerChecked;
                    const isOptCorrect = idx === currentQ.correctAnswerIndex;
                    const isOptWrong = isSelected && !isOptCorrect && isRevealed;

                    let optClass = "option-default";
                    let icon = null;
                    if (isRevealed) {
                      if (isOptCorrect) {
                        optClass = "option-correct";
                        icon = <span className="text-base">✓</span>;
                      } else if (isOptWrong) {
                        optClass = "option-wrong";
                        icon = <span className="text-base">✗</span>;
                      } else {
                        optClass = "option-default opacity-50";
                      }
                    } else if (isSelected) {
                      optClass = "option-selected";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isRevealed}
                        className={`w-full p-4 rounded-2xl text-left text-sm font-semibold flex items-center gap-4 cursor-pointer disabled:cursor-default ${optClass}`}
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black border shrink-0 ${
                          isRevealed && isOptCorrect ? "bg-white/20 border-white/40" :
                          isRevealed && isOptWrong ? "bg-white/20 border-white/40" :
                          isSelected ? "bg-white text-blue-700 border-white" :
                          "bg-slate-800 text-slate-300 border-slate-700"
                        }`}>
                          {icon || String.fromCharCode(65 + idx)}
                        </div>
                        <span className="flex-1 leading-snug">{renderTextWithMath(opt)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800">
                {quizMode === "practice" && isAnswerChecked && (
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

                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div className="flex gap-2">
                    <button
                      onClick={toggleMarkForReview}
                      className={`px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                        currentAns?.isMarkedForReview
                          ? "bg-amber-600 text-white border-amber-500"
                          : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700"
                      }`}
                    >
                      {currentAns?.isMarkedForReview ? "★ Marked" : "☆ Mark"}
                    </button>

                    <button
                      onClick={clearResponse}
                      className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-700"
                    >
                      Clear
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (currentQuestionIndex > 0) {
                          setCurrentQuestionIndex((prev) => prev - 1);
                          setIsAnswerChecked(false);
                        }
                      }}
                      disabled={currentQuestionIndex === 0}
                      className="px-4 py-2.5 btn-3d-slate text-xs font-bold rounded-xl disabled:opacity-30"
                    >
                      ← Prev
                    </button>

                    <button
                      onClick={handleCheckOrNext}
                      disabled={currentAns?.selectedOptionIndex === null}
                      className={`px-6 py-2.5 text-xs font-black rounded-xl cursor-pointer disabled:opacity-40 ${
                        quizMode === "practice" && !isAnswerChecked ? "btn-3d-green" : "btn-3d-blue"
                      }`}
                    >
                      {quizMode === "practice" && !isAnswerChecked
                        ? "CHECK ANSWER ✓"
                        : currentQuestionIndex < activeQuestions.length - 1
                        ? "NEXT QUESTION →"
                        : "FINISH QUIZ 🎉"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* GATE-Style Question Navigation Palette Sidebar */}
            <div className="lg:col-span-4 space-y-4">
              <QuestionNavigationGrid
                questions={activeQuestions}
                userAnswers={userAnswers}
                correctAnswers={correctAnswersMap}
                currentIndex={currentQuestionIndex}
                isSubmitted={false}
                onJumpTo={(idx) => {
                  setCurrentQuestionIndex(idx);
                  setIsAnswerChecked(false);
                }}
              />

              <button
                onClick={() => handleQuizSubmit(false)}
                className="w-full py-3 btn-3d-green font-black text-xs rounded-xl cursor-pointer"
              >
                Submit Quiz Session ✓
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESULTS SCREEN */}
      {currentScreen === "result" && (
        <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
          <div className="duo-card p-6 sm:p-10 space-y-8 text-center">
            {/* Score Circle */}
            <div className="flex flex-col items-center gap-3">
              {(() => {
                const pct = activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0;
                const r = 52, circ = 2 * Math.PI * r;
                const offset = circ - (pct / 100) * circ;
                const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "🎯" : pct >= 40 ? "📚" : "💪";
                const color = pct >= 80 ? "#4ade80" : pct >= 60 ? "#fbbf24" : pct >= 40 ? "#60a5fa" : "#f87171";
                return (
                  <div className="relative w-36 h-36">
                    <svg width="144" height="144" viewBox="0 0 144 144">
                      <circle cx="72" cy="72" r={r} fill="none" stroke="#1e293b" strokeWidth="12" />
                      <circle cx="72" cy="72" r={r} fill="none" stroke={color} strokeWidth="12"
                        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
                        transform="rotate(-90 72 72)" className="score-ring" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl">{emoji}</span>
                      <span className="text-2xl font-black" style={{color}}>{pct}%</span>
                    </div>
                  </div>
                );
              })()}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
                  Session Completed
                </span>
                <h2 className="text-2xl font-black text-white mt-2">
                  {activeQuestions.length > 0 && Math.round((correctCount / activeQuestions.length) * 100) >= 80
                    ? "Outstanding! 🚀" : Math.round((correctCount / activeQuestions.length) * 100) >= 60
                    ? "Good Work! 🎯" : "Keep Practicing! 💪"}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  {selectedExam?.name} • {selectedSubject?.name}{selectedChapter ? ` • ${selectedChapter.name}` : ""}
                </p>
              </div>
            </div>

            {/* Retry Accuracy Comparison Banner */}
            {isRetrySession && firstAttemptAccuracy !== undefined && (
              <div className="bg-gradient-to-r from-indigo-950 to-purple-950 border border-indigo-500/40 p-4 rounded-2xl text-xs font-bold flex justify-between items-center">
                <span>First Attempt Accuracy: {firstAttemptAccuracy}%</span>
                <span className="text-emerald-400 text-sm">
                  Retry Accuracy: {Math.round((correctCount / activeQuestions.length) * 100)}% (Improved! 🚀)
                </span>
              </div>
            )}

            {/* XP & Score Summary */}
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

            {/* Special Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setIsResultReviewModalOpen(true)}
                className="px-6 py-3 btn-3d-blue font-bold text-xs rounded-xl cursor-pointer flex items-center gap-2"
              >
                <span>📋</span> Open Full Question Review Grid
              </button>

              {incorrectCount > 0 && (
                <button
                  onClick={retryIncorrectQuestions}
                  className="px-6 py-3 btn-3d-purple font-bold text-xs rounded-xl cursor-pointer"
                >
                  🔁 Retry {incorrectCount} Incorrect Questions
                </button>
              )}

              {activeQuestions.length > 0 && (
                <button
                  onClick={() => trySimilarQuestion(activeQuestions[0])}
                  className="px-6 py-3 btn-3d-slate font-bold text-xs rounded-xl cursor-pointer"
                >
                  🔄 Try Similar Question
                </button>
              )}
            </div>

            {/* Official Certificate Card */}
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

            {/* Detailed Question Review */}
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
                      isQCorrect ? "bg-emerald-950/20 border-emerald-500/30" : "bg-rose-950/20 border-rose-500/30"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-bold text-slate-200 text-sm">
                        Q{idx + 1}. {cleanQuestionText(q.text)}
                      </div>
                      <button
                        onClick={() => trySimilarQuestion(q)}
                        className="text-[11px] text-cyan-400 hover:underline font-bold whitespace-nowrap"
                      >
                        Try Similar →
                      </button>
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

      {/* MODAL DIALOGS */}
      <MistakesNotebookModal
        isOpen={isMistakesModalOpen}
        onClose={() => setIsMistakesModalOpen(false)}
        onStartMistakesQuiz={(questions) => launchCustomQuestionPool(questions, "Mistakes Notebook Practice")}
      />

      <BookmarksModal
        isOpen={isBookmarksModalOpen}
        onClose={() => setIsBookmarksModalOpen(false)}
        onStartBookmarkQuiz={(questions) => launchCustomQuestionPool(questions, "Bookmarked Questions Practice")}
      />

      <AIExplainModal
        isOpen={isAIExplainModalOpen}
        onClose={() => setIsAIExplainModalOpen(false)}
        question={activeQuestions[currentQuestionIndex] || null}
        userSelectedIndex={userAnswers[activeQuestions[currentQuestionIndex]?.id]?.selectedOptionIndex ?? null}
        examName={selectedExam?.name}
        subjectName={selectedSubject?.name}
        chapterName={selectedChapter?.name}
      />

      <AIQuizGeneratorModal
        isOpen={isAIQuizGenModalOpen}
        onClose={() => setIsAIQuizGenModalOpen(false)}
        onStartGeneratedQuiz={(questions, title) => launchCustomQuestionPool(questions, title)}
      />

      <GateRankEstimatorModal
        isOpen={isRankEstimatorOpen}
        onClose={() => setIsRankEstimatorOpen(false)}
      />

      <QuestionSearchModal
        isOpen={isQuestionSearchOpen}
        onClose={() => setIsQuestionSearchOpen(false)}
        onSelectQuestion={(q, subjectName) => launchCustomQuestionPool([q], `Practice: ${subjectName}`)}
      />

      <GatePyqMockModal
        isOpen={isGatePyqModalOpen}
        onClose={() => setIsGatePyqModalOpen(false)}
        onStartPaper={(questions, paperTitle) => launchCustomQuestionPool(questions, paperTitle)}
      />

      {isResultReviewModalOpen && (
        <ResultReviewModal
          questions={activeQuestions}
          userAnswers={userAnswers}
          onClose={() => setIsResultReviewModalOpen(false)}
        />
      )}
    </main>
  );
}
