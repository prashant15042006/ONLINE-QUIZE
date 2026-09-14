"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { EXAMS_DATA, Exam, Branch, Subject, Chapter, Question, getChapterQuestions } from "../data/quizData";
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

function renderTextWithMath(text: string): React.ReactNode {
  if (!text) return null;
  const blockParts = text.split(/(\$\$[^$]+\$\$)/g);
  return blockParts.map((part, i) => {
    if (part.startsWith("\$\$") && part.endsWith("\$\$")) {
      return <MathRenderer key={i} math={part.slice(2, -2)} block={true} />;
    }
    const inlineParts = part.split(/(\$[^$]+\$)/g);
    return inlineParts.map((ip, j) => {
      if (ip.startsWith("\$") && ip.endsWith("\$") && ip.length > 2) {
        return <MathRenderer key={`${i}-${j}`} math={ip.slice(1, -1)} block={false} />;
      }
      return <span key={`${i}-${j}`}>{ip}</span>;
    });
  });
}

function renderFormattedSolution(exp: string) {
  if (!exp) return null;
  const lines = exp.split("\n");
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
      } else if (line.startsWith("\$\$") && line.endsWith("\$\$")) {
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

// Compute total question count across all exams
function getTotalQuestionCount(): number {
  let total = 0;
  EXAMS_DATA.forEach(e => {
    const subs = e.branches ? e.branches.flatMap(b => b.subjects) : (e.subjects || []);
    subs.forEach(s => s.chapters.forEach(c => { total += c.questions.length; }));
  });
  return total;
}
function getTotalChapterCount(): number {
  let total = 0;
  EXAMS_DATA.forEach(e => {
    const subs = e.branches ? e.branches.flatMap(b => b.subjects) : (e.subjects || []);
    subs.forEach(s => { total += s.chapters.length; });
  });
  return total;
}

export default function Home() {
  const [userName, setUserName] = useState<string>("Master Learner");
  const [streakCount, setStreakCount] = useState<number>(5);
  const [userXP, setUserXP] = useState<number>(340);
  const [dailyQuizzesDone, setDailyQuizzesDone] = useState<number>(1);
  const [dailyGoal] = useState<number>(3);

  const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard");
  const [selectedExam, setSelectedExam] = useState<Exam>(EXAMS_DATA[0]);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(
    EXAMS_DATA[0].branches && EXAMS_DATA[0].branches.length > 0 ? EXAMS_DATA[0].branches[0] : null
  );
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const [quizMode, setQuizMode] = useState<QuizMode>("practice");
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [durationMinutes, setDurationMinutes] = useState<number>(10);
  const [questionCount, setQuestionCount] = useState<number>(10);

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

  const [score, setScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [skippedCount, setSkippedCount] = useState<number>(0);
  const [earnedXP, setEarnedXP] = useState<number>(0);
  const [certificateId, setCertificateId] = useState<string>("");
  const [isRetrySession, setIsRetrySession] = useState<boolean>(false);
  const [firstAttemptAccuracy, setFirstAttemptAccuracy] = useState<number | undefined>(undefined);

  const [isMistakesModalOpen, setIsMistakesModalOpen] = useState(false);
  const [isBookmarksModalOpen, setIsBookmarksModalOpen] = useState(false);
  const [isAIExplainModalOpen, setIsAIExplainModalOpen] = useState(false);
  const [isAIQuizGenModalOpen, setIsAIQuizGenModalOpen] = useState(false);
  const [isRankEstimatorOpen, setIsRankEstimatorOpen] = useState(false);
  const [isQuestionSearchOpen, setIsQuestionSearchOpen] = useState(false);
  const [isResultReviewModalOpen, setIsResultReviewModalOpen] = useState(false);
  const [isGatePyqModalOpen, setIsGatePyqModalOpen] = useState(false);
  const [showAnalyticsView, setShowAnalyticsView] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isCurrentQBookmarked, setIsCurrentQBookmarked] = useState(false);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [bookmarksCount, setBookmarksCount] = useState(0);

  const totalQs = useMemo(() => getTotalQuestionCount(), []);
  const totalChapters = useMemo(() => getTotalChapterCount(), []);

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
    if (selectedExam.id === "gate" && selectedBranch) return selectedBranch.subjects;
    return selectedExam.subjects || [];
  }, [selectedExam, selectedBranch]);

  const availableChapters = useMemo(() => {
    if (!selectedSubject) return [];
    return selectedSubject.chapters || [];
  }, [selectedSubject]);

  const correctAnswersMap = useMemo(() => {
    const map: Record<string, number> = {};
    activeQuestions.forEach(q => { map[q.id] = q.correctAnswerIndex; });
    return map;
  }, [activeQuestions]);

  const dailyChallengeQuestion = useMemo(() => {
    const allQs: Question[] = [];
    EXAMS_DATA.forEach(e => {
      const subs = e.branches ? e.branches.flatMap(b => b.subjects) : e.subjects || [];
      subs.forEach(s => s.chapters.forEach(c => allQs.push(...c.questions)));
    });
    if (allQs.length === 0) return null;
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return allQs[dayOfYear % allQs.length];
  }, []);

  useEffect(() => {
    if (currentScreen === "quiz" && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) { clearInterval(timerRef.current!); handleQuizSubmit(true); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [currentScreen, timeLeft]);

  useEffect(() => {
    if (activeQuestions[currentQuestionIndex]) {
      setIsCurrentQBookmarked(isBookmarked(activeQuestions[currentQuestionIndex].id));
    }
  }, [currentQuestionIndex, activeQuestions]);

  const selectExam = (exam: Exam) => {
    setSelectedExam(exam);
    setSelectedBranch(null);
    setSelectedSubject(null);
    setSelectedChapter(null);
    if (exam.branches && exam.branches.length > 0) setSelectedBranch(exam.branches[0]);
  };

  const quickLaunchChapterQuiz = (subject: Subject, chapter: Chapter) => {
    setSelectedSubject(subject);
    setSelectedChapter(chapter);
    setCurrentScreen("settings");
  };

  const launchCustomQuestionPool = (questions: Question[], title: string) => {
    if (questions.length === 0) return;
    const cleaned = questions.map(q => ({ ...q, text: cleanQuestionText(q.text) }));
    setActiveQuestions(cleaned);
    setCurrentQuestionIndex(0);
    setIsAnswerChecked(false);
    const initialAnswers: Record<string, UserAnswer> = {};
    cleaned.forEach(q => { initialAnswers[q.id] = { questionId: q.id, selectedOptionIndex: null, isMarkedForReview: false }; });
    setUserAnswers(initialAnswers);
    const seconds = durationMinutes * 60;
    setTimeLeft(seconds);
    setTotalQuizTime(seconds);
    setQuizStartTime(Date.now());
    setCurrentScreen("quiz");
  };

  const startQuiz = async () => {
    if (!selectedChapter) return;
    setIsPreparingQuiz(true);
    setIsRetrySession(false);
    setFirstAttemptAccuracy(undefined);
    const questions: Question[] = getChapterQuestions(selectedChapter, difficulty, questionCount);
    setIsPreparingQuiz(false);
    const cleaned = questions.map(q => ({ ...q, text: cleanQuestionText(q.text) }));
    setActiveQuestions(cleaned);
    setCurrentQuestionIndex(0);
    setIsAnswerChecked(false);
    const initialAnswers: Record<string, UserAnswer> = {};
    cleaned.forEach(q => { initialAnswers[q.id] = { questionId: q.id, selectedOptionIndex: null, isMarkedForReview: false }; });
    setUserAnswers(initialAnswers);
    const seconds = durationMinutes * 60;
    setTimeLeft(seconds);
    setTotalQuizTime(seconds);
    setQuizStartTime(Date.now());
    setCurrentScreen("quiz");
  };

  const handleSelectOption = (optionIndex: number) => {
    if (quizMode === "practice" && isAnswerChecked) return;
    const activeQ = activeQuestions[currentQuestionIndex];
    if (!activeQ) return;
    setUserAnswers(prev => ({ ...prev, [activeQ.id]: { ...prev[activeQ.id], selectedOptionIndex: optionIndex } }));
  };

  const handleToggleBookmarkCurrent = () => {
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    const bookmarked = toggleBookmark(q, selectedExam?.name || "Exam", selectedSubject?.name || "Subject", selectedChapter?.name || "Chapter");
    setIsCurrentQBookmarked(bookmarked);
    setBookmarksCount(getBookmarks().length);
  };

  const toggleMarkForReview = () => {
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    setUserAnswers(prev => ({ ...prev, [q.id]: { ...prev[q.id], isMarkedForReview: !prev[q.id].isMarkedForReview } }));
  };

  const clearResponse = () => {
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    setUserAnswers(prev => ({ ...prev, [q.id]: { ...prev[q.id], selectedOptionIndex: null } }));
  };

  const handleCheckOrNext = () => {
    if (quizMode === "practice" && !isAnswerChecked) {
      setIsAnswerChecked(true);
    } else {
      if (currentQuestionIndex < activeQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsAnswerChecked(false);
      } else {
        handleQuizSubmit(false);
      }
    }
  };

  const handleQuizSubmit = async (isTimeout = false) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const elapsedSeconds = Math.round((Date.now() - quizStartTime) / 1000);
    const actualTimeTaken = Math.min(elapsedSeconds, totalQuizTime);
    setTimeTakenSeconds(actualTimeTaken);

    let calculatedScore = 0, correct = 0, incorrect = 0, skipped = 0;
    activeQuestions.forEach(q => {
      const ans = userAnswers[q.id];
      if (!ans || ans.selectedOptionIndex === null) { skipped++; }
      else if (ans.selectedOptionIndex === q.correctAnswerIndex) { correct++; calculatedScore += quizMode === "exam" ? 4 : 10; }
      else { incorrect++; if (quizMode === "exam") calculatedScore -= 1; }
    });

    setScore(calculatedScore);
    setCorrectCount(correct);
    setIncorrectCount(incorrect);
    setSkippedCount(skipped);

    const percentage = Math.max(0, Math.round((correct / activeQuestions.length) * 100));
    const newXP = userXP + calculatedScore;
    setUserXP(newXP);
    setEarnedXP(calculatedScore);
    setDailyQuizzesDone(prev => prev + 1);
    if (typeof window !== "undefined") localStorage.setItem("examiq_xp", newXP.toString());

    const certCode = `EXAM-CERT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setCertificateId(certCode);

    const attemptRecord: QuizAttemptRecord = {
      id: `att-${Date.now()}`,
      examName: selectedExam?.name || "Exam",
      subjectName: selectedSubject?.name || "Subject",
      chapterName: selectedChapter?.name || "Chapter",
      mode: quizMode, difficulty, score: calculatedScore,
      totalQuestions: activeQuestions.length,
      correctCount: correct, incorrectCount: incorrect, skippedCount: skipped,
      accuracy: percentage, timeTakenSeconds: actualTimeTaken,
      avgTimePerQuestionSeconds: activeQuestions.length > 0 ? Math.round(actualTimeTaken / activeQuestions.length) : 0,
      timestamp: new Date().toISOString(),
      questions: activeQuestions, userAnswers,
      isRetryAttempt: isRetrySession, firstAttemptAccuracy,
    };
    recordQuizAttempt(attemptRecord);
    setMistakesCount(getMistakes().length);

    try {
      await addQuizResultToBlockchain({ certificateId: certCode, userName, examName: selectedExam?.name || "Quiz", subjectName: selectedSubject?.name || "Subject", chapterName: selectedChapter?.name || "Chapter", score: calculatedScore, totalQuestions: activeQuestions.length, percentage, difficulty, timeTakenSeconds: actualTimeTaken, timestamp: new Date().toISOString() });
    } catch (err) {}
    setCurrentScreen("result");
  };

  const retryIncorrectQuestions = () => {
    const missedQuestions = activeQuestions.filter(q => {
      const ans = userAnswers[q.id];
      return ans && ans.selectedOptionIndex !== null && ans.selectedOptionIndex !== q.correctAnswerIndex;
    });
    if (missedQuestions.length === 0) return;
    const currentAcc = Math.round((correctCount / activeQuestions.length) * 100);
    setFirstAttemptAccuracy(currentAcc);
    setIsRetrySession(true);
    launchCustomQuestionPool(missedQuestions, `Retry Missed Questions (${missedQuestions.length})`);
  };

  const trySimilarQuestion = (currentQ: Question) => {
    const similarQs = getChapterQuestions(selectedChapter || availableChapters[0], currentQ.difficulty, 5);
    const filtered = similarQs.filter(q => q.id !== currentQ.id);
    if (filtered.length > 0) launchCustomQuestionPool([filtered[0]], `Similar Question: ${currentQ.concept || "Concept Test"}`);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const currentQ = activeQuestions[currentQuestionIndex];
  const currentAns = currentQ ? userAnswers[currentQ.id] : null;
  const isCorrect = currentAns && currentQ && currentAns.selectedOptionIndex === currentQ.correctAnswerIndex;

  // Subject icon helper
  const subjIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("math") || n.includes("engineering math")) return "∑";
    if (n.includes("digital")) return "⊕";
    if (n.includes("os") || n.includes("operating")) return "⚙";
    if (n.includes("network") || n.includes("cn")) return "🌐";
    if (n.includes("database") || n.includes("dbms")) return "🗄";
    if (n.includes("algorithm") || n.includes("algo")) return "⟳";
    if (n.includes("toc") || n.includes("automata") || n.includes("compiler")) return "🔣";
    if (n.includes("coa") || n.includes("computer org")) return "🖥";
    if (n.includes("data struct")) return "🌲";
    if (n.includes("physics")) return "⚛";
    if (n.includes("chem")) return "🧪";
    if (n.includes("bot")) return "🌿";
    if (n.includes("zoo")) return "🦁";
    if (n.includes("software")) return "💻";
    if (n.includes("quant") || n.includes("aptitude")) return "🔢";
    return "📖";
  };

  return (
    <main className="min-h-screen bg-[#07090f] text-slate-100 flex flex-col font-sans safe-bottom-padding">

      {/* ═══════════════ HEADER ═══════════════ */}
      <header className="sticky top-0 z-40 bg-[#07090f]/80 backdrop-blur-xl border-b border-white/[0.06] px-4 sm:px-8 py-3 flex items-center justify-between">
        <div onClick={() => setCurrentScreen("dashboard")} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/25 group-hover:scale-105 transition border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="ExamiQ Logo" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
              <span className="gradient-text">ExamiQ</span>
              <span className="text-[9px] font-black uppercase bg-cyan-500/15 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/30">PRO</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-medium hidden sm:block">Smart Competitive Exam Prep · GATE · JEE · NEET · SSC</p>
          </div>
        </div>

        {/* Desktop action bar */}
        <div className="hidden md:flex items-center gap-2">
          <button onClick={() => setIsGatePyqModalOpen(true)} className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 text-[11px] font-bold transition cursor-pointer">
            📜 GATE PYQ Mocks
          </button>
          <button onClick={() => setIsQuestionSearchOpen(true)} className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 text-[11px] font-bold transition cursor-pointer">
            🔍 Search Qs
          </button>
          <button onClick={() => setIsRankEstimatorOpen(true)} className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 text-[11px] font-bold transition cursor-pointer">
            📊 Rank Predictor
          </button>
          <button onClick={() => setIsMistakesModalOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 text-[11px] font-bold transition cursor-pointer">
            📕 Mistakes ({mistakesCount})
          </button>
          <button onClick={() => setIsBookmarksModalOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 text-[11px] font-bold transition cursor-pointer">
            🔖 Saves ({bookmarksCount})
          </button>
          <button onClick={() => setIsAIQuizGenModalOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 text-[11px] font-bold transition cursor-pointer">
            ✨ AI Quiz
          </button>
          <div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full text-orange-400 font-bold text-[11px]">🔥 {streakCount}d</div>
          <div className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full text-cyan-300 font-bold text-[11px]">⚡ {userXP} XP</div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full text-orange-400 font-bold text-[11px]">🔥 {streakCount}d</div>
          <div className="flex items-center gap-1 bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded-full text-cyan-300 font-bold text-[11px]">⚡ {userXP}</div>
          <button onClick={() => setIsMobileDrawerOpen(true)} className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 text-lg hover:bg-white/10 transition cursor-pointer" aria-label="Open menu">☰</button>
        </div>
      </header>

      {/* ═══════════════ MOBILE DRAWER ═══════════════ */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm md:hidden animate-fadeIn">
          <div className="w-4/5 max-w-xs bg-[#0d1117] h-full border-l border-white/[0.08] p-5 flex flex-col justify-between shadow-2xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="font-extrabold text-white text-base">ExamiQ Menu</span>
                <button onClick={() => setIsMobileDrawerOpen(false)} className="w-8 h-8 rounded-xl bg-white/5 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold cursor-pointer">✕</button>
              </div>
              <div className="space-y-2">
                {[
                  { label: "🗺️ Learning Pathway", action: () => { setCurrentScreen("dashboard"); setShowAnalyticsView(false); setIsMobileDrawerOpen(false); }, active: !showAnalyticsView },
                  { label: "📊 Performance Analytics", action: () => { setCurrentScreen("dashboard"); setShowAnalyticsView(true); setIsMobileDrawerOpen(false); }, active: showAnalyticsView },
                  { label: "📜 GATE PYQ Papers (2015-2024)", action: () => { setIsGatePyqModalOpen(true); setIsMobileDrawerOpen(false); } },
                  { label: "📊 GATE Rank Estimator", action: () => { setIsRankEstimatorOpen(true); setIsMobileDrawerOpen(false); } },
                  { label: `📕 Mistakes Notebook (${mistakesCount})`, action: () => { setIsMistakesModalOpen(true); setIsMobileDrawerOpen(false); } },
                  { label: `🔖 Bookmarked Questions (${bookmarksCount})`, action: () => { setIsBookmarksModalOpen(true); setIsMobileDrawerOpen(false); } },
                  { label: "✨ AI Quiz Generator", action: () => { setIsAIQuizGenModalOpen(true); setIsMobileDrawerOpen(false); } },
                ].map((item, i) => (
                  <button key={i} onClick={item.action} className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold cursor-pointer transition ${item.active ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20" : "bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:bg-white/[0.07]"}`}>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-center text-[11px] text-slate-500 font-medium">
              Streak: <span className="text-orange-400 font-bold">{streakCount} Days</span> · XP: <span className="text-cyan-300 font-bold">{userXP}</span>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ DASHBOARD ═══════════════ */}
      {currentScreen === "dashboard" && (
        <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">

          {/* ── Question Bank Stats Hub ── */}
          <div className="glass-card p-5 sm:p-6 border-white/[0.07]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-1">📚 Question Bank Explorer</p>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  <span className="neon-text-green">{totalQs.toLocaleString()}</span> Curated Questions Ready
                </h2>
                <p className="text-xs text-slate-400 mt-1">Covering GATE · JEE · NEET · SSC · All Subjects — deduplicated &amp; verified</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setIsQuestionSearchOpen(true)} className="px-4 py-2 btn-3d-blue rounded-xl text-[11px] font-bold cursor-pointer flex items-center gap-1.5">
                  🔍 Browse All Questions
                </button>
                <button onClick={() => setIsGatePyqModalOpen(true)} className="px-4 py-2 btn-3d-amber rounded-xl text-[11px] font-bold cursor-pointer flex items-center gap-1.5">
                  📜 PYQ Papers
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: totalQs.toLocaleString(), label: "Total Questions", cls: "stat-badge-green", icon: "🎯" },
                { value: String(totalChapters), label: "Chapters Covered", cls: "stat-badge-blue", icon: "📖" },
                { value: "16", label: "Official GATE Papers", cls: "stat-badge-amber", icon: "📜" },
                { value: "5", label: "Exam Categories", cls: "stat-badge-purple", icon: "🏆" },
              ].map((s, i) => (
                <div key={i} className={`stat-badge ${s.cls}`}>
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div className="text-xl sm:text-2xl font-black text-white">{s.value}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Top Action Bar ── */}
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={() => setIsGatePyqModalOpen(true)} className="px-4 py-2 btn-3d-amber rounded-xl text-xs font-black cursor-pointer flex items-center gap-1.5 shadow-lg">
              📜 GATE Year-Wise PYQ (2015-2024)
            </button>
            <button onClick={() => setShowAnalyticsView(false)} className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${!showAnalyticsView ? "btn-3d-blue" : "btn-3d-slate"}`}>
              🗺️ Learning Pathway
            </button>
            <button onClick={() => setShowAnalyticsView(true)} className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${showAnalyticsView ? "btn-3d-blue" : "btn-3d-slate"}`}>
              📊 Analytics
            </button>
            <button onClick={() => setIsRankEstimatorOpen(true)} className="px-4 py-2 btn-3d-slate rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5">
              📊 Rank Estimator
            </button>
          </div>

          {showAnalyticsView ? (
            <PerformanceAnalyticsView
              onStartTargetedPractice={(topic, subject) => {
                const foundSubj = availableSubjects.find(s => s.name.includes(subject)) || availableSubjects[0];
                const foundChap = foundSubj?.chapters.find(c => c.name.includes(topic)) || foundSubj?.chapters[0];
                if (foundSubj && foundChap) quickLaunchChapterQuiz(foundSubj, foundChap);
              }}
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 space-y-6">

                {/* Exam Selector */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Select Exam Target</h2>
                    <span className="text-[11px] text-cyan-400 font-semibold">{EXAMS_DATA.length} Exams Available</span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {EXAMS_DATA.map(exam => (
                      <button key={exam.id} onClick={() => selectExam(exam)} className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${selectedExam.id === exam.id ? "btn-3d-blue" : "btn-3d-slate"}`}>
                        <span className="text-base">{exam.icon}</span>
                        <span>{exam.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Branch Selector (GATE) */}
                {selectedExam.id === "gate" && selectedExam.branches && (
                  <div className="glass-card p-4 border-white/[0.06]">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-3">Select Branch ({selectedExam.branches.length} Available)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {selectedExam.branches.map(branch => (
                        <button key={branch.id} onClick={() => setSelectedBranch(branch)} className={`p-2.5 rounded-xl text-xs font-bold text-center transition cursor-pointer ${selectedBranch?.id === branch.id ? "bg-cyan-500/15 border-2 border-cyan-400/60 text-cyan-300" : "bg-white/[0.03] border border-white/[0.07] text-slate-400 hover:bg-white/[0.06]"}`}>
                          <div>{branch.icon} {branch.name}</div>
                          <div className="text-[10px] font-normal text-slate-500 mt-0.5">{branch.subjects.length} Subjects</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hero Banner */}
                <div className="relative overflow-hidden rounded-3xl p-6 text-white" style={{background: "linear-gradient(135deg, #003d2e 0%, #004d4d 50%, #001a3d 100%)", border: "1px solid rgba(0,230,118,0.15)"}}>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10">
                        📌 Current Target: {selectedExam.name} {selectedBranch ? `(${selectedBranch.name})` : ""}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black mt-2 mb-1">{selectedExam.fullName}</h2>
                      <p className="text-xs text-white/60 max-w-lg leading-relaxed">{selectedExam.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-4xl font-black neon-text-green">{availableSubjects.length}</span>
                      <div className="text-xs font-medium text-white/50 mt-0.5">Active Subjects</div>
                    </div>
                  </div>
                </div>

                {/* Subjects & Chapters */}
                <div className="space-y-5">
                  {availableSubjects.map((subj, subjIdx) => (
                    <div key={subj.id} className="glass-card p-5">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl font-black" style={{background: "rgba(0,176,255,0.1)", border: "1px solid rgba(0,176,255,0.2)", color: "#00b0ff"}}>
                            {subjIcon(subj.name)}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white">{subj.name}</h3>
                            <p className="text-[11px] text-slate-500">{subj.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black bg-white/[0.05] text-slate-300 px-3 py-1 rounded-full border border-white/[0.08]">
                            {subj.chapters.reduce((acc, c) => acc + c.questions.length, 0)} Qs
                          </span>
                          <span className="text-[10px] font-bold bg-white/[0.04] text-slate-400 px-2.5 py-1 rounded-full">
                            {subj.chapters.length} Chapters
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                        {subj.chapters.map(chap => (
                          <div key={chap.id} onClick={() => quickLaunchChapterQuiz(subj, chap)} className="chapter-card p-4 flex flex-col justify-between group">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-black text-cyan-400 group-hover:text-cyan-300 uppercase tracking-wide">Chapter</span>
                                <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-md font-bold">{chap.questions.length} Qs</span>
                              </div>
                              <h4 className="text-sm font-bold text-slate-200 group-hover:text-white mb-1 leading-snug">{chap.name}</h4>
                              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{chap.description}</p>
                            </div>
                            <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition">
                              <span>Start Practice</span><span>→</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* ── Sidebar ── */}
              <div className="lg:col-span-4 space-y-4">

                {/* GATE PYQ Banner */}
                <div className="glass-card glass-card-amber p-5 space-y-3" style={{background: "rgba(30,15,0,0.6)", borderColor: "rgba(255,171,0,0.15)"}}>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-full border border-amber-400/20">📜 Official GATE PYQs</span>
                    <span className="text-xs font-bold text-amber-400">2015 – 2024</span>
                  </div>
                  <h4 className="font-extrabold text-white text-sm leading-snug">GATE CSE Official Year-Wise Papers</h4>
                  <p className="text-[11px] text-amber-100/60 leading-relaxed">16 complete original GATE papers with step-by-step solutions. 1040+ authentic questions.</p>
                  <button onClick={() => setIsGatePyqModalOpen(true)} className="w-full py-3 btn-3d-amber font-black text-xs rounded-xl cursor-pointer">
                    Explore All Year Papers 🚀
                  </button>
                </div>

                {/* Daily Challenge */}
                {dailyChallengeQuestion && (
                  <div className="glass-card glass-card-purple p-5 space-y-3" style={{background: "rgba(20,0,30,0.6)", borderColor: "rgba(213,0,249,0.15)"}}>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-wider text-purple-300 bg-purple-500/15 px-2.5 py-1 rounded-full border border-purple-400/20">⚡ Daily Challenge</span>
                      <span className="text-xs font-bold text-amber-400">+20 XP</span>
                    </div>
                    <div className="text-xs font-semibold text-white leading-relaxed line-clamp-3">
                      {renderTextWithMath(cleanQuestionText(dailyChallengeQuestion.text))}
                    </div>
                    <button onClick={() => launchCustomQuestionPool([dailyChallengeQuestion], "Daily Challenge Question")} className="w-full py-2.5 btn-3d-purple font-bold text-xs rounded-xl cursor-pointer">
                      Solve Daily Question 🚀
                    </button>
                  </div>
                )}

                {/* Rank Estimator */}
                <div className="glass-card p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 text-xl flex items-center justify-center border border-amber-500/20">📊</div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm">GATE Rank Predictor</h4>
                      <p className="text-[11px] text-slate-500">Estimate your AIR from expected marks</p>
                    </div>
                  </div>
                  <button onClick={() => setIsRankEstimatorOpen(true)} className="w-full py-2.5 btn-3d-blue font-bold text-xs rounded-xl cursor-pointer">Open Rank Estimator →</button>
                </div>

                {/* AI Quiz */}
                <div className="glass-card p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 text-xl flex items-center justify-center border border-cyan-500/20">✨</div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm">AI Quiz Generator</h4>
                      <p className="text-[11px] text-slate-500">Generate custom quiz from any topic</p>
                    </div>
                  </div>
                  <button onClick={() => setIsAIQuizGenModalOpen(true)} className="w-full py-2.5 btn-3d-purple font-bold text-xs rounded-xl cursor-pointer">Generate AI Quiz →</button>
                </div>

              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══════════════ SETTINGS SCREEN ═══════════════ */}
      {currentScreen === "settings" && selectedSubject && selectedChapter && (
        <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 flex flex-col justify-center">
          <div className="glass-card p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div className="pb-4 border-b border-white/[0.07]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">{selectedExam.name}</span>
                <span className="text-slate-600">•</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{selectedSubject.name}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">{selectedChapter.name}</h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{selectedChapter.description}</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full font-bold">
                  📚 {selectedChapter.questions.length} Questions Available
                </span>
              </div>
            </div>

            {/* Quiz Mode */}
            <div>
              <label className="block text-xs font-black text-slate-300 mb-2 uppercase tracking-wider">Quiz Mode</label>
              <div className="grid grid-cols-3 gap-2">
                {(["practice", "test", "exam"] as const).map(m => (
                  <button key={m} type="button" onClick={() => setQuizMode(m)} className={`py-3 rounded-xl text-xs font-bold capitalize transition cursor-pointer ${quizMode === m ? "btn-3d-blue" : "btn-3d-slate"}`}>
                    {m === "practice" ? "🎯 Practice" : m === "test" ? "📝 Test" : "🏆 Exam"}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-slate-500 mt-1.5">{quizMode === "practice" ? "Instant feedback after each answer" : quizMode === "test" ? "No feedback, review at end" : "Negative marking, timed, like real GATE"}</p>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-xs font-black text-slate-300 mb-2 uppercase tracking-wider">Difficulty Level</label>
              <div className="grid grid-cols-3 gap-2">
                {(["easy", "medium", "hard"] as const).map(d => (
                  <button key={d} type="button" onClick={() => setDifficulty(d)} className={`py-3 rounded-xl text-xs font-bold capitalize transition cursor-pointer ${difficulty === d ? d === "easy" ? "btn-3d-green" : d === "medium" ? "btn-3d-amber" : "btn-3d-purple" : "btn-3d-slate"}`}>
                    {d === "easy" ? "🟢 Easy" : d === "medium" ? "🟡 Medium" : "🔴 Hard"}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Count */}
            <div>
              <label className="block text-xs font-black text-slate-300 mb-2 uppercase tracking-wider">Number of Questions</label>
              <div className="grid grid-cols-5 gap-2">
                {[5, 10, 15, 20, 25].map(num => (
                  <button key={num} type="button" onClick={() => setQuestionCount(num)} className={`py-3 rounded-xl text-xs font-bold transition cursor-pointer ${questionCount === num ? "btn-3d-blue" : "btn-3d-slate"}`}>
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Timer */}
            <div>
              <label className="block text-xs font-black text-slate-300 mb-2 uppercase tracking-wider">Timer Duration</label>
              <select value={durationMinutes} onChange={e => setDurationMinutes(Number(e.target.value))} className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50">
                <option value={5}>5 Minutes (Quick)</option>
                <option value={10}>10 Minutes (Standard)</option>
                <option value={15}>15 Minutes (Comprehensive)</option>
                <option value={30}>30 Minutes (Exam Mode)</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setCurrentScreen("dashboard")} className="flex-1 py-3 btn-3d-slate font-bold text-xs rounded-xl cursor-pointer">← Back</button>
              <button type="button" onClick={startQuiz} disabled={isPreparingQuiz} className="flex-1 py-3 btn-3d-green font-black text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50">
                {isPreparingQuiz ? (<><div className="w-4 h-4 border-2 border-[#07090f] border-t-transparent rounded-full animate-spin"></div><span>Preparing...</span></>) : (<span>Start Quiz 🚀</span>)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ QUIZ INTERFACE ═══════════════ */}
      {currentScreen === "quiz" && currentQ && (
        <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-5">
          {timeLeft > 0 && timeLeft < 60 && (
            <div className="bg-rose-600/90 text-white font-bold text-xs text-center py-2 rounded-xl mb-3 animate-pulse">
              ⚠️ Less than {timeLeft}s remaining — quiz will auto-submit!
            </div>
          )}

          {/* Quiz Top Bar */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <button onClick={() => { if (confirm("Quit session? Progress will be lost.")) setCurrentScreen("dashboard"); }} className="text-slate-500 hover:text-white font-bold text-xl cursor-pointer transition">✕</button>

            {/* Progress Bar */}
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                <span>Question {currentQuestionIndex + 1} of {activeQuestions.length}</span>
                <span>{Math.round(((currentQuestionIndex + 1) / activeQuestions.length) * 100)}%</span>
              </div>
              <div className="bg-white/[0.06] h-2.5 rounded-full overflow-hidden">
                <div className="quiz-progress-fill h-full rounded-full" style={{ width: `${Math.round(((currentQuestionIndex + 1) / activeQuestions.length) * 100)}%` }} />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={handleToggleBookmarkCurrent} className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition cursor-pointer ${isCurrentQBookmarked ? "bg-amber-500 text-white border-amber-400" : "bg-white/[0.04] border-white/[0.09] text-slate-400 hover:text-white"}`}>
                {isCurrentQBookmarked ? "★" : "☆"}
              </button>
              <button onClick={() => setIsAIExplainModalOpen(true)} className="px-3 py-1.5 rounded-full text-[11px] font-bold btn-3d-purple cursor-pointer">🤖 AI</button>
              <div className={`px-3 py-1.5 rounded-full text-[11px] font-mono font-black border ${timeLeft > 0 && timeLeft <= 30 ? "bg-rose-950/80 border-rose-500/60 timer-danger" : timeLeft > 0 && timeLeft <= 120 ? "bg-amber-950/80 border-amber-500/60 timer-warning" : "bg-white/[0.04] border-white/[0.08] timer-normal"}`}>
                ⏱ {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Question Column */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="glass-card p-5 sm:p-7 flex flex-col gap-5">
                {/* Q meta */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-white bg-white/[0.08] px-3 py-1 rounded-full">Q {currentQuestionIndex + 1}</span>
                    {currentQ.concept && (
                      <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-0.5 rounded-full font-bold">{currentQ.concept}</span>
                    )}
                    {currentQ.year && (
                      <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-bold">GATE {currentQ.year}</span>
                    )}
                  </div>
                  <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full border ${currentQ.difficulty === "easy" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : currentQ.difficulty === "medium" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-rose-500/10 text-rose-400 border-rose-500/20"}`}>
                    {currentQ.difficulty}
                  </span>
                </div>

                {/* Question text — large, readable */}
                <div className="text-[16px] sm:text-[18px] font-semibold text-white leading-[1.75] tracking-[0.01em]">
                  {renderTextWithMath(cleanQuestionText(currentQ.text))}
                </div>

                {/* Diagram/image */}
                {currentQ.imageUrl && (
                  <div className="flex justify-center">
                    <div className="bg-white rounded-2xl p-3 border-2 border-cyan-500/30 shadow-lg shadow-cyan-950/30 max-w-full overflow-x-auto">
                      {currentQ.imageUrl.trim().startsWith("<svg") ? (
                        <div className="w-full" dangerouslySetInnerHTML={{ __html: currentQ.imageUrl }} aria-label={currentQ.imageAlt ?? "Question diagram"} />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={currentQ.imageUrl} alt={currentQ.imageAlt ?? "Question diagram"} className="max-w-full max-h-72 object-contain mx-auto" />
                      )}
                    </div>
                    {currentQ.imageAlt && <p className="text-[10px] text-slate-500 text-center mt-1">{currentQ.imageAlt}</p>}
                  </div>
                )}

                {/* Options */}
                <div className="space-y-3">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = currentAns?.selectedOptionIndex === idx;
                    const isRevealed = quizMode === "practice" && isAnswerChecked;
                    const isOptCorrect = idx === currentQ.correctAnswerIndex;
                    const isOptWrong = isSelected && !isOptCorrect && isRevealed;

                    let optClass = "option-default";
                    let badgeBg = "bg-white/[0.07] text-slate-300 border-white/[0.1]";
                    let badgeContent: React.ReactNode = String.fromCharCode(65 + idx);
                    if (isRevealed) {
                      if (isOptCorrect) { optClass = "option-correct"; badgeBg = "bg-white/20 text-white border-white/30"; badgeContent = "✓"; }
                      else if (isOptWrong) { optClass = "option-wrong"; badgeBg = "bg-white/20 text-white border-white/30"; badgeContent = "✗"; }
                      else { optClass = "option-default opacity-40"; }
                    } else if (isSelected) {
                      optClass = "option-selected";
                      badgeBg = "bg-white text-blue-700 border-white";
                    }

                    return (
                      <button key={idx} onClick={() => handleSelectOption(idx)} disabled={isRevealed} className={`w-full p-4 sm:p-5 rounded-2xl text-left flex items-start gap-4 cursor-pointer disabled:cursor-default ${optClass}`}>
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black border shrink-0 ${badgeBg}`}>
                          {badgeContent}
                        </div>
                        <span className="flex-1 text-sm sm:text-base leading-relaxed font-medium">{renderTextWithMath(opt)}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation panel (practice mode) */}
                {quizMode === "practice" && isAnswerChecked && (
                  <div className={`p-5 rounded-2xl flex items-start gap-4 border animate-slide-up ${isCorrect ? "bg-emerald-950/60 border-emerald-500/30 text-emerald-200" : "bg-rose-950/60 border-rose-500/30 text-rose-200"}`}>
                    <span className="text-2xl shrink-0">{isCorrect ? "🎉" : "💡"}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-sm mb-2">{isCorrect ? "Correct! Well done! (+10 XP)" : "Explanation:"}</div>
                      <div className="text-xs leading-relaxed">{renderFormattedSolution(currentQ.explanation)}</div>
                    </div>
                  </div>
                )}

                {/* Bottom controls */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap justify-between items-center gap-3">
                  <div className="flex gap-2">
                    <button onClick={toggleMarkForReview} className={`px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${currentAns?.isMarkedForReview ? "bg-amber-600 text-white border-amber-500" : "bg-white/[0.04] text-slate-400 border-white/[0.08] hover:bg-white/[0.08]"}`}>
                      {currentAns?.isMarkedForReview ? "★ Marked" : "☆ Mark"}
                    </button>
                    <button onClick={clearResponse} className="px-3 py-2 rounded-xl text-xs font-bold bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 border border-white/[0.08] cursor-pointer">Clear</button>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => { if (currentQuestionIndex > 0) { setCurrentQuestionIndex(prev => prev - 1); setIsAnswerChecked(false); } }} disabled={currentQuestionIndex === 0} className="px-4 py-2.5 btn-3d-slate text-xs font-bold rounded-xl disabled:opacity-30 cursor-pointer">← Prev</button>
                    <button onClick={handleCheckOrNext} disabled={currentAns?.selectedOptionIndex === null} className={`px-6 py-2.5 text-xs font-black rounded-xl cursor-pointer disabled:opacity-40 ${quizMode === "practice" && !isAnswerChecked ? "btn-3d-green" : "btn-3d-blue"}`}>
                      {quizMode === "practice" && !isAnswerChecked ? "CHECK ✓" : currentQuestionIndex < activeQuestions.length - 1 ? "NEXT →" : "FINISH 🎉"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Sidebar */}
            <div className="lg:col-span-4 space-y-3">
              <QuestionNavigationGrid questions={activeQuestions} userAnswers={userAnswers} correctAnswers={correctAnswersMap} currentIndex={currentQuestionIndex} isSubmitted={false} onJumpTo={idx => { setCurrentQuestionIndex(idx); setIsAnswerChecked(false); }} />
              <button onClick={() => handleQuizSubmit(false)} className="w-full py-3 btn-3d-green font-black text-xs rounded-xl cursor-pointer">Submit Quiz ✓</button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ RESULT SCREEN ═══════════════ */}
      {currentScreen === "result" && (
        <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
          <div className="glass-card p-6 sm:p-10 space-y-8 text-center">
            {/* Score Circle */}
            <div className="flex flex-col items-center gap-3">
              {(() => {
                const pct = activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0;
                const r = 54, circ = 2 * Math.PI * r;
                const offset = circ - (pct / 100) * circ;
                const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "🎯" : pct >= 40 ? "📚" : "💪";
                const color = pct >= 80 ? "#00e676" : pct >= 60 ? "#ffab00" : pct >= 40 ? "#00b0ff" : "#ff5252";
                return (
                  <div className="relative w-40 h-40">
                    <svg width="160" height="160" viewBox="0 0 160 160">
                      <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
                      <circle cx="80" cy="80" r={r} fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} transform="rotate(-90 80 80)" className="score-ring" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl">{emoji}</span>
                      <span className="text-2xl font-black" style={{color}}>{pct}%</span>
                    </div>
                  </div>
                );
              })()}
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">Session Complete</span>
                <h2 className="text-2xl font-black text-white mt-2">
                  {activeQuestions.length > 0 && Math.round((correctCount / activeQuestions.length) * 100) >= 80 ? "Outstanding! 🚀" : Math.round((correctCount / activeQuestions.length) * 100) >= 60 ? "Good Work! 🎯" : "Keep Practicing! 💪"}
                </h2>
                <p className="text-xs text-slate-500 mt-1">{selectedExam?.name} • {selectedSubject?.name}{selectedChapter ? ` • ${selectedChapter.name}` : ""}</p>
              </div>
            </div>

            {/* Retry banner */}
            {isRetrySession && firstAttemptAccuracy !== undefined && (
              <div className="glass-card p-4 text-xs font-bold flex justify-between items-center" style={{borderColor: "rgba(0,176,255,0.2)"}}>
                <span className="text-slate-400">First Attempt: <span className="text-white">{firstAttemptAccuracy}%</span></span>
                <span className="text-cyan-400 text-sm">Retry: {Math.round((correctCount / activeQuestions.length) * 100)}% 🚀</span>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "XP Earned", value: `+${earnedXP}`, color: "#00e676", bg: "bg-emerald-500/[0.07]", border: "border-emerald-500/20" },
                { label: "Accuracy", value: `${activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0}%`, color: "#00b0ff", bg: "bg-cyan-500/[0.07]", border: "border-cyan-500/20" },
                { label: "Correct", value: `${correctCount}/${activeQuestions.length}`, color: "#00e676", bg: "bg-emerald-500/[0.07]", border: "border-emerald-500/20" },
                { label: "Time", value: formatTime(timeTakenSeconds), color: "#ffab00", bg: "bg-amber-500/[0.07]", border: "border-amber-500/20" },
              ].map((s, i) => (
                <div key={i} className={`rounded-2xl p-4 border text-center ${s.bg} ${s.border}`}>
                  <div className="text-[10px] font-bold text-slate-400 mb-1">{s.label}</div>
                  <div className="text-xl font-black" style={{color: s.color}}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button onClick={() => setIsResultReviewModalOpen(true)} className="px-6 py-3 btn-3d-blue font-bold text-xs rounded-xl cursor-pointer flex items-center gap-2">📋 Full Question Review</button>
              {incorrectCount > 0 && (
                <button onClick={retryIncorrectQuestions} className="px-6 py-3 btn-3d-purple font-bold text-xs rounded-xl cursor-pointer">🔁 Retry {incorrectCount} Incorrect</button>
              )}
              {activeQuestions.length > 0 && (
                <button onClick={() => trySimilarQuestion(activeQuestions[0])} className="px-6 py-3 btn-3d-slate font-bold text-xs rounded-xl cursor-pointer">🔄 Try Similar</button>
              )}
            </div>

            {/* Certificate */}
            {certificateId && (
              <div className="glass-card p-6 text-left" style={{borderColor: "rgba(0,230,118,0.2)"}}>
                <div className="flex justify-between items-start mb-4 border-b border-white/[0.06] pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">ExamiQ Verified Certificate</span>
                    <h3 className="text-lg font-bold text-white mt-1">Certificate of Completion</h3>
                  </div>
                  <div className="text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-3 py-1 rounded-full">ID: {certificateId}</div>
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div><span className="text-slate-500">Candidate:</span> <strong className="text-white">{userName}</strong></div>
                  <div><span className="text-slate-500">Test:</span> {selectedExam.name} - {selectedSubject?.name}</div>
                  <div><span className="text-slate-500">Status:</span> <span className="text-cyan-400 font-bold">✓ Digitally Authenticated</span></div>
                </div>
              </div>
            )}

            {/* Detailed Solution Review */}
            <div className="text-left space-y-3">
              <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-cyan-400 inline-block" />
                Detailed Solutions &amp; Step-by-Step Breakdown
              </h3>
              {activeQuestions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const selectedIdx = ans?.selectedOptionIndex;
                const isQCorrect = selectedIdx === q.correctAnswerIndex;
                const isSkipped = selectedIdx === null || selectedIdx === undefined;

                return (
                  <div key={q.id} className={`p-5 rounded-2xl border text-xs ${isSkipped ? "bg-white/[0.02] border-white/[0.07]" : isQCorrect ? "bg-emerald-950/20 border-emerald-500/20" : "bg-rose-950/20 border-rose-500/20"}`}>
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <div className="flex items-start gap-2">
                        <span className={`w-6 h-6 rounded-full text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5 ${isSkipped ? "bg-white/10 text-slate-400" : isQCorrect ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"}`}>{isSkipped ? "–" : isQCorrect ? "✓" : "✗"}</span>
                        <div className="font-semibold text-slate-200 text-sm leading-relaxed">{cleanQuestionText(q.text)}</div>
                      </div>
                      <button onClick={() => trySimilarQuestion(q)} className="text-[11px] text-cyan-400 hover:underline font-bold whitespace-nowrap shrink-0">Try Similar →</button>
                    </div>
                    <div className="ml-8">
                      <div className="text-[11px] text-slate-400 mb-2">
                        {!isSkipped && selectedIdx !== q.correctAnswerIndex && <span>Your answer: <strong className="text-rose-400">{q.options[selectedIdx!]}</strong> · </span>}
                        Correct: <strong className="text-emerald-400">{q.options[q.correctAnswerIndex]}</strong>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                        {renderFormattedSolution(q.explanation)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button onClick={() => setCurrentScreen("dashboard")} className="w-full py-4 btn-3d-green font-black text-sm rounded-2xl cursor-pointer">Back to Dashboard 🚀</button>
          </div>
        </div>
      )}

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-4 border-t border-white/[0.04] text-center text-[11px] text-slate-600">
        ExamiQ Interactive Quiz Platform © 2026 · <span className="gradient-text font-bold">Empowering Students Everywhere</span>
      </footer>

      {/* ═══════════════ MODALS ═══════════════ */}
      <MistakesNotebookModal isOpen={isMistakesModalOpen} onClose={() => setIsMistakesModalOpen(false)} onStartMistakesQuiz={questions => launchCustomQuestionPool(questions, "Mistakes Notebook Practice")} />
      <BookmarksModal isOpen={isBookmarksModalOpen} onClose={() => setIsBookmarksModalOpen(false)} onStartBookmarkQuiz={questions => launchCustomQuestionPool(questions, "Bookmarked Questions Practice")} />
      <AIExplainModal isOpen={isAIExplainModalOpen} onClose={() => setIsAIExplainModalOpen(false)} question={activeQuestions[currentQuestionIndex] || null} userSelectedIndex={userAnswers[activeQuestions[currentQuestionIndex]?.id]?.selectedOptionIndex ?? null} examName={selectedExam?.name} subjectName={selectedSubject?.name} chapterName={selectedChapter?.name} />
      <AIQuizGeneratorModal isOpen={isAIQuizGenModalOpen} onClose={() => setIsAIQuizGenModalOpen(false)} onStartGeneratedQuiz={(questions, title) => launchCustomQuestionPool(questions, title)} />
      <GateRankEstimatorModal isOpen={isRankEstimatorOpen} onClose={() => setIsRankEstimatorOpen(false)} />
      <QuestionSearchModal isOpen={isQuestionSearchOpen} onClose={() => setIsQuestionSearchOpen(false)} onSelectQuestion={(q, subjectName) => launchCustomQuestionPool([q], `Practice: ${subjectName}`)} />
      <GatePyqMockModal isOpen={isGatePyqModalOpen} onClose={() => setIsGatePyqModalOpen(false)} onStartPaper={(questions, paperTitle) => launchCustomQuestionPool(questions, paperTitle)} />
      {isResultReviewModalOpen && (
        <ResultReviewModal questions={activeQuestions} userAnswers={userAnswers} onClose={() => setIsResultReviewModalOpen(false)} />
      )}
    </main>
  );
}
