"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { EXAMS_DATA, Exam, Branch, Subject, Chapter, Question, getChapterQuestions } from "../data/quizData";
import { fetchLiveSearchQuestions } from "../lib/liveSearchQuizEngine";
import { addQuizResultToBlockchain, verifyCertificateOnBlockchain, Block } from "../lib/blockchain";
import BlockchainVerificationModal from "../components/BlockchainVerificationModal";

type Screen = "home" | "branches" | "subjects" | "chapters" | "settings" | "quiz" | "result";
type QuestionMode = "procedural" | "google_live";

interface UserAnswer {
  questionId: string;
  selectedOptionIndex: number | null; // null if skipped
  isMarkedForReview: boolean;
}

export default function Home() {
  // Navigation states
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  // Question Generator Mode
  const [questionMode, setQuestionMode] = useState<QuestionMode>("procedural");
  const [customTopic, setCustomTopic] = useState<string>("");
  const [isFetchingLiveQuestions, setIsFetchingLiveQuestions] = useState<boolean>(false);

  // Settings states
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [durationMinutes, setDurationMinutes] = useState<number>(15);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [userName, setUserName] = useState<string>("Student Aspirant");

  // Active Quiz states
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>({});
  const [timeLeft, setTimeLeft] = useState<number>(0); // in seconds
  const [totalQuizTime, setTotalQuizTime] = useState<number>(0); // total initial time in seconds
  const [quizStartTime, setQuizStartTime] = useState<number>(0); // timestamp
  const [timeTakenSeconds, setTimeTakenSeconds] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Result metrics & Blockchain
  const [score, setScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [skippedCount, setSkippedCount] = useState<number>(0);
  const [minedBlock, setMinedBlock] = useState<Block | null>(null);
  const [isBlockchainModalOpen, setIsBlockchainModalOpen] = useState<boolean>(false);
  const [modalCertId, setModalCertId] = useState<string>("");

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
      setCurrentScreen("branches");
    } else {
      setCurrentScreen("subjects");
    }
  };

  // Handle Branch Selection
  const selectBranch = (branch: Branch) => {
    setSelectedBranch(branch);
    setSelectedSubject(null);
    setSelectedChapter(null);
    setCurrentScreen("subjects");
  };

  // Handle Subject Selection
  const selectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedChapter(null);
    setCurrentScreen("chapters");
  };

  // Handle Chapter Selection
  const selectChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setCurrentScreen("settings");
  };

  // Start the Quiz with either Database questions or Google Live Search questions
  const startQuiz = async () => {
    if (!selectedChapter) return;

    let generated: Question[] = [];

    if (questionMode === "google_live") {
      setIsFetchingLiveQuestions(true);
      try {
        const topicToUse = customTopic.trim() || `${selectedChapter.name} - ${selectedSubject?.name}`;
        generated = await fetchLiveSearchQuestions({
          topic: topicToUse,
          examName: selectedExam?.name || "Competitive Exam",
          subjectName: selectedSubject?.name || "",
          difficulty,
          count: questionCount,
        });
      } catch (err) {
        console.error("Failed to fetch live search questions", err);
        generated = getChapterQuestions(selectedChapter, difficulty, questionCount);
      } finally {
        setIsFetchingLiveQuestions(false);
      }
    } else {
      generated = getChapterQuestions(selectedChapter, difficulty, questionCount);
    }

    if (generated.length === 0) {
      alert("No questions available for this configuration. Switching to default pool.");
      generated = getChapterQuestions(selectedChapter, difficulty, questionCount);
    }

    setActiveQuestions(generated);
    setCurrentQuestionIndex(0);

    // Initialize answers map
    const initialAnswers: Record<string, UserAnswer> = {};
    generated.forEach((q) => {
      initialAnswers[q.id] = {
        questionId: q.id,
        selectedOptionIndex: null,
        isMarkedForReview: false,
      };
    });
    setUserAnswers(initialAnswers);

    // Set timers
    const seconds = durationMinutes * 60;
    setTimeLeft(seconds);
    setTotalQuizTime(seconds);
    setQuizStartTime(Date.now());
    setCurrentScreen("quiz");
  };

  // Option select handler
  const handleSelectOption = (optionIndex: number) => {
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

  // Toggle Mark for Review
  const toggleMarkForReview = () => {
    const activeQ = activeQuestions[currentQuestionIndex];
    if (!activeQ) return;

    setUserAnswers((prev) => ({
      ...prev,
      [activeQ.id]: {
        ...prev[activeQ.id],
        isMarkedForReview: !prev[activeQ.id].isMarkedForReview,
      },
    }));
  };

  // Clear response
  const clearResponse = () => {
    const activeQ = activeQuestions[currentQuestionIndex];
    if (!activeQ) return;

    setUserAnswers((prev) => ({
      ...prev,
      [activeQ.id]: {
        ...prev[activeQ.id],
        selectedOptionIndex: null,
      },
    }));
  };

  // Quiz submission handler with Blockchain Ledger Hashing
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
      if (ans.selectedOptionIndex === null) {
        skipped++;
      } else if (ans.selectedOptionIndex === q.correctAnswerIndex) {
        correct++;
        calculatedScore += 4;
      } else {
        incorrect++;
        calculatedScore -= 1;
      }
    });

    setScore(calculatedScore);
    setCorrectCount(correct);
    setIncorrectCount(incorrect);
    setSkippedCount(skipped);

    const percentage = Math.max(0, Math.round((correct / activeQuestions.length) * 100));
    const certId = `CERT-${(selectedExam?.id || "EXAM").toUpperCase()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Mine and store block in Blockchain Ledger
    try {
      const block = await addQuizResultToBlockchain({
        certificateId: certId,
        userName: userName.trim() || "Student Aspirant",
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
      setMinedBlock(block);
    } catch (e) {
      console.error("Blockchain ledger mine error", e);
    }

    setCurrentScreen("result");
  };

  // Format seconds to MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  // Get status indicators for question navigation grid
  const getQuestionStatusClass = (idx: number) => {
    const qId = activeQuestions[idx]?.id;
    const ans = userAnswers[qId];
    if (!ans) return "bg-gray-800 text-gray-400 border-gray-700";

    const isCurrent = idx === currentQuestionIndex;
    const hasAnswered = ans.selectedOptionIndex !== null;
    const isMarked = ans.isMarkedForReview;

    let baseClass = "";

    if (isMarked) {
      baseClass = "bg-amber-600 text-white border-amber-400";
    } else if (hasAnswered) {
      baseClass = "bg-indigo-600 text-white border-indigo-400";
    } else {
      baseClass = "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700";
    }

    if (isCurrent) {
      return `${baseClass} ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-900 font-bold scale-105`;
    }
    return baseClass;
  };

  // Navigation handlers
  const goBack = () => {
    if (currentScreen === "branches") setCurrentScreen("home");
    else if (currentScreen === "subjects") {
      if (selectedExam?.id === "gate") {
        setCurrentScreen("branches");
      } else {
        setCurrentScreen("home");
      }
    } else if (currentScreen === "chapters") {
      setCurrentScreen("subjects");
    } else if (currentScreen === "settings") {
      setCurrentScreen("chapters");
    } else if (currentScreen === "result") {
      setCurrentScreen("home");
    }
  };

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between max-w-7xl mx-auto w-full text-slate-100 font-sans">
      {/* HEADER SECTION */}
      <header className="flex flex-wrap justify-between items-center mb-8 pb-4 border-b border-slate-800 gap-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentScreen("home")}>
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center text-xl font-black shadow-lg shadow-indigo-500/30">
            EQ
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              ExamiQ <span className="text-[10px] uppercase bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-500/40 font-semibold tracking-wider">PRO AI</span>
            </h1>
            <p className="text-xs text-slate-400">Google Search AI & Blockchain Ledger Testing Platform</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setModalCertId("");
              setIsBlockchainModalOpen(true);
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-indigo-500/30 bg-indigo-950/40 hover:bg-indigo-900/60 text-indigo-300 text-xs font-semibold transition shadow-md shadow-indigo-500/10 cursor-pointer"
          >
            <span>🔗</span> Blockchain Ledger
          </button>

          {currentScreen !== "home" && currentScreen !== "quiz" && (
            <button
              onClick={goBack}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700 transition text-xs font-semibold cursor-pointer"
            >
              ← Back
            </button>
          )}
        </div>
      </header>

      {/* SCREEN ROUTING */}

      {/* 1. HOME SCREEN (EXAM LIST) */}
      {currentScreen === "home" && (
        <section className="flex-1 flex flex-col justify-center py-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
              <span>🚀</span> Google Real-Time AI Search & Blockchain Ledger Integration Active
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Choose Your Targeted <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Competitive Exam</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Select an exam below to access full branch syllabi, chapter-wise questions, real-time Google search question model, and blockchain verified score certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {EXAMS_DATA.map((exam) => (
              <div
                key={exam.id}
                onClick={() => selectExam(exam)}
                className="group relative bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer flex flex-col justify-between"
              >
                <div className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition">
                  {exam.totalSubjects} Subjects
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:scale-110 flex items-center justify-center text-2xl mb-4 transition duration-300">
                    {exam.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition mb-1">
                    {exam.name}
                  </h3>
                  <p className="text-xs text-indigo-300/80 font-medium mb-3">{exam.fullName}</p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{exam.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>Explore Syllabus</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2. BRANCH SELECTION SCREEN (FOR GATE) */}
      {currentScreen === "branches" && selectedExam && (
        <section className="flex-1 flex flex-col justify-center py-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              {selectedExam.name} Branches
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-3 mb-2">Select Engineering Branch</h2>
            <p className="text-xs sm:text-sm text-slate-400">Choose your specific GATE branch to view dedicated subjects & chapter pools.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {selectedExam.branches?.map((branch) => (
              <div
                key={branch.id}
                onClick={() => selectBranch(branch)}
                className="group bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xl font-bold">
                    {branch.icon}
                  </div>
                  <span className="text-[10px] font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                    {branch.subjects.length} Subjects
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition">{branch.name}</h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">{branch.fullName}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. SUBJECT SELECTION SCREEN */}
      {currentScreen === "subjects" && selectedExam && (
        <section className="flex-1 flex flex-col justify-center py-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              {selectedBranch ? `${selectedExam.name} (${selectedBranch.name})` : selectedExam.name}
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-3 mb-2">Select Subject</h2>
            <p className="text-xs sm:text-sm text-slate-400">Pick a subject to explore its chapters and generate tests.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableSubjects.map((subject) => (
              <div
                key={subject.id}
                onClick={() => selectSubject(subject)}
                className="group bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition">
                      {subject.name}
                    </h3>
                    <span className="text-xs font-semibold bg-indigo-950 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-full">
                      {subject.chapters.length} Chapters
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{subject.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>View Chapters</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. CHAPTER SELECTION SCREEN */}
      {currentScreen === "chapters" && selectedSubject && (
        <section className="flex-1 flex flex-col justify-center py-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              {selectedSubject.name}
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-3 mb-2">Select Chapter / Topic</h2>
            <p className="text-xs sm:text-sm text-slate-400">Choose a chapter to configure timer, difficulty, and question model.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableChapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => selectChapter(chapter)}
                className="group bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition mb-2">
                    {chapter.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{chapter.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>Configure Test</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. SETTINGS & MODEL CONFIGURATION SCREEN */}
      {currentScreen === "settings" && selectedChapter && (
        <section className="flex-1 flex flex-col items-center justify-center py-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3.5 py-1 rounded-full border border-indigo-500/20">
                {selectedExam?.name} • {selectedSubject?.name}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">{selectedChapter.name}</h2>
              <p className="text-xs text-slate-400 mt-1">Configure your AI Question Generator & Test parameters</p>
            </div>

            {/* Candidate Name Input */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-300 mb-2">Candidate Name (For Blockchain Certificate)</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Question Generation Model Selection */}
            <div className="mb-6 bg-slate-950/80 p-4 rounded-2xl border border-indigo-500/30">
              <label className="block text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
                🤖 Question Engine Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setQuestionMode("procedural")}
                  className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                    questionMode === "procedural"
                      ? "bg-indigo-600/30 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800"
                  }`}
                >
                  <div className="text-sm font-bold flex items-center gap-2">
                    <span>⚡</span> Procedural Generator
                  </div>
                  <div className="text-[11px] opacity-80 mt-1">Instant dynamic math & formula based questions</div>
                </button>

                <button
                  type="button"
                  onClick={() => setQuestionMode("google_live")}
                  className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                    questionMode === "google_live"
                      ? "bg-gradient-to-r from-pink-600/30 to-purple-600/30 border-pink-500 text-white shadow-lg shadow-pink-500/20"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800"
                  }`}
                >
                  <div className="text-sm font-bold flex items-center gap-2 text-pink-300">
                    <span>🔥</span> Google Real-Time AI Search
                  </div>
                  <div className="text-[11px] opacity-80 mt-1">Live web search queries for fresh questions</div>
                </button>
              </div>

              {/* Custom Topic Input for Google Live Mode */}
              {questionMode === "google_live" && (
                <div className="mt-4 pt-4 border-t border-slate-800 animate-fadeIn">
                  <label className="block text-xs font-medium text-pink-300 mb-1.5">
                    Custom Web Search Query / Topic (Optional)
                  </label>
                  <input
                    type="text"
                    value={customTopic}
                    onChange={(e) => setCustomTopic(e.target.value)}
                    placeholder={`e.g. ${selectedChapter.name} GATE 2026 practice questions...`}
                    className="w-full bg-slate-900 border border-pink-500/40 rounded-xl px-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-pink-400"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Searches Google & academic references live to fetch unique, non-repeating questions.
                  </p>
                </div>
              )}
            </div>

            {/* Difficulty Selection */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-300 mb-2">Difficulty Level</label>
              <div className="grid grid-cols-3 gap-3">
                {(["easy", "medium", "hard"] as const).map((diff) => (
                  <button
                    key={diff}
                    type="button"
                    onClick={() => setDifficulty(diff)}
                    className={`py-2.5 text-xs font-bold capitalize rounded-xl border transition cursor-pointer ${
                      difficulty === diff
                        ? diff === "easy"
                          ? "bg-emerald-600/20 border-emerald-500 text-emerald-300"
                          : diff === "medium"
                          ? "bg-amber-600/20 border-amber-500 text-amber-300"
                          : "bg-rose-600/20 border-rose-500 text-rose-300"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Count & Duration */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Questions Count</label>
                <select
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
                >
                  <option value={5}>5 Questions</option>
                  <option value={10}>10 Questions</option>
                  <option value={15}>15 Questions</option>
                  <option value={20}>20 Questions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Timer Duration</label>
                <select
                  value={durationMinutes}
                  onChange={(e) => setDurationMinutes(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
                >
                  <option value={5}>5 Minutes</option>
                  <option value={10}>10 Minutes</option>
                  <option value={15}>15 Minutes</option>
                  <option value={30}>30 Minutes</option>
                  <option value={60}>60 Minutes</option>
                </select>
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={startQuiz}
              disabled={isFetchingLiveQuestions}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-base rounded-2xl shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isFetchingLiveQuestions ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Searching Google & Generating Questions...</span>
                </>
              ) : (
                <span>🚀 Launch Quiz Session</span>
              )}
            </button>
          </div>
        </section>
      )}

      {/* 6. ACTIVE QUIZ INTERFACE */}
      {currentScreen === "quiz" && activeQuestions.length > 0 && (
        <section className="flex-1 flex flex-col lg:flex-row gap-6 py-2">
          {/* Main Question Panel */}
          <div className="flex-1 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Question Header */}
              <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  Question {currentQuestionIndex + 1} of {activeQuestions.length}
                </span>
                <span className="text-xs font-semibold capitalize text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                  {activeQuestions[currentQuestionIndex]?.difficulty}
                </span>
              </div>

              {/* Question Text */}
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug mb-8">
                {activeQuestions[currentQuestionIndex]?.text}
              </h2>

              {/* Options List */}
              <div className="space-y-3 mb-8">
                {activeQuestions[currentQuestionIndex]?.options.map((option, idx) => {
                  const qId = activeQuestions[currentQuestionIndex].id;
                  const isSelected = userAnswers[qId]?.selectedOptionIndex === idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-2xl border text-left text-sm font-medium transition cursor-pointer flex items-center gap-4 ${
                        isSelected
                          ? "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500"
                          : "bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold border ${
                          isSelected
                            ? "bg-indigo-600 text-white border-indigo-400"
                            : "bg-slate-800 text-slate-400 border-slate-700"
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="flex-1 leading-normal">{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Action Controls */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap justify-between items-center gap-3">
              <div className="flex gap-2">
                <button
                  onClick={toggleMarkForReview}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                    userAnswers[activeQuestions[currentQuestionIndex]?.id]?.isMarkedForReview
                      ? "bg-amber-600 text-white border-amber-500"
                      : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                  }`}
                >
                  {userAnswers[activeQuestions[currentQuestionIndex]?.id]?.isMarkedForReview
                    ? "★ Marked for Review"
                    : "☆ Mark for Review"}
                </button>

                <button
                  onClick={clearResponse}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-700 transition cursor-pointer"
                >
                  Clear Selection
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-40 transition cursor-pointer"
                >
                  ← Previous
                </button>

                {currentQuestionIndex < activeQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition cursor-pointer"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={() => handleQuizSubmit(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition cursor-pointer"
                  >
                    Submit Test ✓
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar Palette */}
          <div className="w-full lg:w-80 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Timer Bar */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Time Remaining</div>
                <div className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                  {formatTime(timeLeft)}
                </div>
              </div>

              {/* Status Legend */}
              <div className="grid grid-cols-2 gap-2 text-[10px] mb-6 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-indigo-600"></span> Answered
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-amber-600"></span> Marked
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></span> Unvisited
                </div>
              </div>

              {/* Question Palette Grid */}
              <h3 className="text-xs font-bold text-slate-300 mb-3">Question Palette</h3>
              <div className="grid grid-cols-5 gap-2 max-h-60 overflow-y-auto pr-1">
                {activeQuestions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-9 rounded-xl border text-xs font-semibold flex items-center justify-center transition cursor-pointer ${getQuestionStatusClass(
                      idx
                    )}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleQuizSubmit(false)}
              className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/20 transition cursor-pointer"
            >
              Submit Test Now
            </button>
          </div>
        </section>
      )}

      {/* 7. RESULT & BLOCKCHAIN CERTIFICATE DASHBOARD */}
      {currentScreen === "result" && (
        <section className="flex-1 py-4 max-w-4xl mx-auto w-full">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl mb-8">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
                Test Completed Successfully
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-3">Performance Overview</h2>
              <p className="text-xs text-slate-400 mt-1">
                {selectedExam?.name} • {selectedSubject?.name} ({selectedChapter?.name})
              </p>
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <div className="text-xs font-semibold text-slate-400 mb-1">Final Score</div>
                <div className="text-2xl font-black text-indigo-400">{score}</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <div className="text-xs font-semibold text-slate-400 mb-1">Correct</div>
                <div className="text-2xl font-black text-emerald-400">{correctCount}</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <div className="text-xs font-semibold text-slate-400 mb-1">Incorrect</div>
                <div className="text-2xl font-black text-rose-400">{incorrectCount}</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <div className="text-xs font-semibold text-slate-400 mb-1">Accuracy</div>
                <div className="text-2xl font-black text-amber-400">
                  {activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0}%
                </div>
              </div>
            </div>

            {/* Blockchain Certificate Card */}
            {minedBlock && (
              <div className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 border border-indigo-500/40 rounded-2xl p-6 mb-8 shadow-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-indigo-500/20 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🔗</span>
                    <div>
                      <h3 className="font-bold text-white text-base">Blockchain Proof-of-Quiz Certificate</h3>
                      <p className="text-xs text-indigo-300">Cryptographically mined on PoQ Ledger</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setModalCertId(minedBlock.data.certificateId);
                      setIsBlockchainModalOpen(true);
                    }}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition cursor-pointer"
                  >
                    Verify on Blockchain Ledger
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-400">Certificate ID:</span>{" "}
                    <span className="text-emerald-300 font-bold">{minedBlock.data.certificateId}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Block Index:</span>{" "}
                    <span className="text-indigo-300 font-bold">#{minedBlock.index}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-400">Block Hash:</span>{" "}
                    <span className="text-cyan-400/90 break-all">{minedBlock.hash}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Detailed Question Review Section */}
            <h3 className="text-lg font-bold text-white mb-4">Detailed Question Review & Explanations</h3>
            <div className="space-y-4">
              {activeQuestions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const selectedIdx = userAns?.selectedOptionIndex;
                const isCorrect = selectedIdx === q.correctAnswerIndex;
                const isSkipped = selectedIdx === null;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border ${
                      isCorrect
                        ? "bg-emerald-950/20 border-emerald-500/30"
                        : isSkipped
                        ? "bg-slate-950 border-slate-800"
                        : "bg-rose-950/20 border-rose-500/30"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold text-slate-300">Question {idx + 1}</span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          isCorrect
                            ? "bg-emerald-500/20 text-emerald-300"
                            : isSkipped
                            ? "bg-slate-800 text-slate-400"
                            : "bg-rose-500/20 text-rose-300"
                        }`}
                      >
                        {isCorrect ? "Correct ✓" : isSkipped ? "Skipped" : "Incorrect ✗"}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-white mb-3">{q.text}</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                      {q.options.map((opt, oIdx) => {
                        let optStyle = "bg-slate-900 border-slate-800 text-slate-400";
                        if (oIdx === q.correctAnswerIndex) {
                          optStyle = "bg-emerald-600/30 border-emerald-500 text-emerald-200 font-bold";
                        } else if (oIdx === selectedIdx && !isCorrect) {
                          optStyle = "bg-rose-600/30 border-rose-500 text-rose-200 line-through";
                        }

                        return (
                          <div key={oIdx} className={`p-2.5 rounded-xl border ${optStyle}`}>
                            {String.fromCharCode(65 + oIdx)}. {opt}
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl text-xs text-slate-300 border border-slate-800/80">
                      <span className="font-bold text-indigo-400">Explanation:</span> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setCurrentScreen("home")}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/20 transition cursor-pointer"
              >
                Back to Exams Home
              </button>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© 2026 ExamiQ Online Quiz Platform. Powered by Google Real-Time AI Search & Blockchain Ledger Security.</p>
      </footer>

      {/* BLOCKCHAIN LEDGER VERIFICATION MODAL */}
      <BlockchainVerificationModal
        isOpen={isBlockchainModalOpen}
        onClose={() => setIsBlockchainModalOpen(false)}
        initialCertificateId={modalCertId}
      />
    </main>
  );
}
