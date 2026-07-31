"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { EXAMS_DATA, Exam, Branch, Subject, Question } from "../data/quizData";

type Screen = "home" | "branches" | "subjects" | "settings" | "quiz" | "result";

interface UserQuizConfig {
  exam: Exam;
  branch?: Branch;
  subject: Subject;
  difficulty: "easy" | "medium" | "hard";
  durationMinutes: number;
  questionCount: number;
}

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

  // Settings states
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [durationMinutes, setDurationMinutes] = useState<number>(15);
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Active Quiz states
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>({});
  const [timeLeft, setTimeLeft] = useState<number>(0); // in seconds
  const [totalQuizTime, setTotalQuizTime] = useState<number>(0); // total initial time in seconds
  const [quizStartTime, setQuizStartTime] = useState<number>(0); // timestamp
  const [timeTakenSeconds, setTimeTakenSeconds] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Result metrics
  const [score, setScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [skippedCount, setSkippedCount] = useState<number>(0);

  // Filtered list of subjects based on exam/branch choice
  const availableSubjects = useMemo(() => {
    if (!selectedExam) return [];
    if (selectedExam.id === "gate" && selectedBranch) {
      return selectedBranch.subjects;
    }
    return selectedExam.subjects || [];
  }, [selectedExam, selectedBranch]);

  // Total questions in selected subject matching difficulty
  const questionsForSelection = useMemo(() => {
    if (!selectedSubject) return [];
    return selectedSubject.questions.filter((q) => q.difficulty === difficulty);
  }, [selectedSubject, difficulty]);

  // Adjust requested question count based on actual pool size
  useEffect(() => {
    if (questionsForSelection.length > 0) {
      if (questionCount > questionsForSelection.length) {
        setQuestionCount(questionsForSelection.length);
      }
    } else {
      setQuestionCount(5);
    }
  }, [questionsForSelection, questionCount]);

  // Timer logic
  useEffect(() => {
    if (currentScreen === "quiz" && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleQuizSubmit(true); // force submit on timeout
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
    if (exam.branches && exam.branches.length > 0) {
      setCurrentScreen("branches");
    } else {
      setCurrentScreen("subjects");
    }
  };

  // Handle Branch Selection (for GATE)
  const selectBranch = (branch: Branch) => {
    setSelectedBranch(branch);
    setSelectedSubject(null);
    setCurrentScreen("subjects");
  };

  // Handle Subject Selection
  const selectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    // Reset defaults for this subject
    const subjectQuestions = subject.questions;
    // Set first available difficulty that has questions
    const diffs: ("easy" | "medium" | "hard")[] = ["easy", "medium", "hard"];
    const validDiff = diffs.find((d) => subjectQuestions.some((q) => q.difficulty === d)) || "easy";
    setDifficulty(validDiff);
    setCurrentScreen("settings");
  };

  // Start the Quiz
  const startQuiz = () => {
    if (!selectedSubject) return;

    // Filter questions by difficulty
    let filteredQuestions = selectedSubject.questions.filter(
      (q) => q.difficulty === difficulty
    );

    // If no questions in this difficulty, fallback to any available
    if (filteredQuestions.length === 0) {
      filteredQuestions = selectedSubject.questions;
    }

    // Shuffle questions
    const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    setActiveQuestions(selected);
    setCurrentQuestionIndex(0);

    // Initialize answers map
    const initialAnswers: Record<string, UserAnswer> = {};
    selected.forEach((q) => {
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

  // Clear current response
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

  // Quiz submission handler
  const handleQuizSubmit = (isTimeout = false) => {
    if (timerRef.current) clearInterval(timerRef.current);

    // Calculate time taken
    const elapsedSeconds = Math.round((Date.now() - quizStartTime) / 1000);
    setTimeTakenSeconds(Math.min(elapsedSeconds, totalQuizTime));

    // Calculate score & statistics
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
        // Give +4 for correct (JEE/NEET style) or generic points
        calculatedScore += 4;
      } else {
        incorrect++;
        // -1 negative marking
        calculatedScore -= 1;
      }
    });

    setScore(calculatedScore);
    setCorrectCount(correct);
    setIncorrectCount(incorrect);
    setSkippedCount(skipped);

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
    } else if (currentScreen === "settings") setCurrentScreen("subjects");
    else if (currentScreen === "result") setCurrentScreen("home");
  };

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between max-w-7xl mx-auto w-full">
      {/* HEADER SECTION */}
      <header className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentScreen("home")}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-indigo-500/20">
            EQ
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
              ExamiQ <span className="text-[10px] uppercase bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full border border-indigo-500/30">PRO</span>
            </h1>
            <p className="text-xs text-slate-400">Advanced Quiz & Real-time Exam Prep</p>
          </div>
        </div>

        {currentScreen !== "home" && currentScreen !== "quiz" && (
          <button
            onClick={goBack}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/40 text-slate-300 hover:bg-slate-800 transition text-sm cursor-pointer"
          >
            ← Back
          </button>
        )}
      </header>

      {/* SCREEN ROUTING */}

      {/* 1. HOME SCREEN (EXAM LIST) */}
      {currentScreen === "home" && (
        <section className="flex-1 flex flex-col justify-center py-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-4">
              Select Your Target Exam
            </h2>
            <p className="text-slate-400 text-lg">
              Start preparing with real-time test settings, branch selection, customized difficulty, and in-depth performance analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
            {EXAMS_DATA.map((exam) => (
              <div
                key={exam.id}
                onClick={() => selectExam(exam)}
                className="glass-panel p-6 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/10 transition-all duration-300" />
                
                <div>
                  <div className="text-4xl mb-4 p-2 bg-slate-800/50 rounded-xl w-14 h-14 flex items-center justify-center border border-slate-700/50">
                    {exam.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {exam.name}
                  </h3>
                  <p className="text-xs text-slate-400 uppercase font-semibold mb-3 tracking-wider">
                    {exam.fullName}
                  </p>
                  <p className="text-sm text-slate-300 line-clamp-3">
                    {exam.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-end text-sm font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
                  Configure Test →
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2. GATE BRANCH SELECTION */}
      {currentScreen === "branches" && selectedExam && (
        <section className="flex-1 py-6">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-2">Select Your GATE Branch</h2>
            <p className="text-slate-400 text-sm">Choose your specialized branch to view the syllabus and subject list.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedExam.branches?.map((branch) => (
              <div
                key={branch.id}
                onClick={() => selectBranch(branch)}
                className="glass-panel p-6 cursor-pointer flex flex-col justify-between group h-44"
              >
                <div>
                  <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
                    GATE Core Branch
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3">{branch.description}</p>
                </div>
                <div className="text-xs text-right font-medium text-slate-500 group-hover:text-indigo-400 transition">
                  {branch.subjects.length} Subjects Available
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. SUBJECT SELECTION */}
      {currentScreen === "subjects" && selectedExam && (
        <section className="flex-1 py-6">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-2">
                {selectedExam.name} {selectedBranch ? `(${selectedBranch.name})` : ""} - Subjects
              </h2>
              <p className="text-slate-400 text-sm">
                Select a subject from the official syllabus to customize and launch your quiz.
              </p>
            </div>
            {selectedExam.id === "gate" && (
              <button
                onClick={() => setCurrentScreen("branches")}
                className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/40 text-slate-300 hover:bg-slate-800 text-xs self-start"
              >
                Change Branch
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableSubjects.map((subject) => (
              <div
                key={subject.id}
                onClick={() => selectSubject(subject)}
                className="glass-panel p-6 cursor-pointer flex items-center justify-between group gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition mb-1">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-slate-400">{subject.description}</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition">
                  ➔
                </div>
              </div>
            ))}

            {availableSubjects.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500">
                No subjects configured yet for this category.
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. QUIZ SETTINGS */}
      {currentScreen === "settings" && selectedSubject && (
        <section className="flex-1 py-6 max-w-2xl mx-auto w-full">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-2">Configure Practice Test</h2>
            <p className="text-slate-400 text-sm">
              Target: <span className="text-indigo-400 font-semibold">{selectedSubject.name}</span>
            </p>
          </div>

          <div className="glass-panel p-8 space-y-8 bg-slate-900/40 border-slate-800">
            {/* DIFFICULTY */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-300">Select Difficulty Level</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "easy", label: "Easy", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5", activeColor: "bg-emerald-500 text-slate-950 border-emerald-400 font-bold" },
                  { id: "medium", label: "Medium", color: "border-amber-500/30 text-amber-400 bg-amber-500/5", activeColor: "bg-amber-500 text-slate-950 border-amber-400 font-bold" },
                  { id: "hard", label: "Hard", color: "border-rose-500/30 text-rose-400 bg-rose-500/5", activeColor: "bg-rose-500 text-slate-950 border-rose-400 font-bold" }
                ].map((level) => {
                  const isSelected = difficulty === level.id;
                  const count = selectedSubject.questions.filter((q) => q.difficulty === level.id).length;
                  const isDisabled = count === 0;

                  return (
                    <button
                      key={level.id}
                      disabled={isDisabled}
                      onClick={() => setDifficulty(level.id as any)}
                      className={`py-3 px-4 rounded-xl border text-center transition flex flex-col items-center justify-center gap-1 cursor-pointer ${
                        isDisabled
                          ? "opacity-30 cursor-not-allowed border-slate-800 text-slate-600 bg-transparent"
                          : isSelected
                          ? level.activeColor
                          : `${level.color} hover:bg-opacity-20`
                      }`}
                    >
                      <span className="text-sm">{level.label}</span>
                      <span className="text-[10px] opacity-80">({count} Questions)</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DURATION SLIDER */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-300">Set Timer Duration</label>
                <span className="text-indigo-400 font-bold">{durationMinutes} Minutes</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>5m</span>
                <span>15m</span>
                <span>30m</span>
                <span>45m</span>
                <span>60m</span>
              </div>
            </div>

            {/* QUESTIONS COUNT */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-300 block">Number of Questions</label>
              <div className="flex gap-3">
                {[5, 10, 15, 20].map((num) => {
                  const isAvailable = questionsForSelection.length >= num;
                  const isSelected = questionCount === num;

                  return (
                    <button
                      key={num}
                      disabled={questionsForSelection.length === 0}
                      onClick={() => setQuestionCount(num)}
                      className={`flex-1 py-2 px-3 rounded-lg border text-center text-sm transition cursor-pointer ${
                        isSelected
                          ? "bg-indigo-600 border-indigo-400 text-white font-semibold shadow-md"
                          : "border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300"
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-500">
                * Maximum questions available for this setting: {questionsForSelection.length}
              </p>
            </div>

            {/* ACTION BUTTON */}
            <button
              onClick={startQuiz}
              disabled={questionsForSelection.length === 0}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl transition shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              Launch Exam Now ➔
            </button>
          </div>
        </section>
      )}

      {/* 5. LIVE QUIZ SCREEN */}
      {currentScreen === "quiz" && activeQuestions.length > 0 && (
        <section className="flex-1 flex flex-col lg:flex-row gap-6 py-6">
          {/* Main Question Panel */}
          <div className="flex-1 flex flex-col justify-between glass-panel p-6 sm:p-8 bg-slate-900/25">
            {/* Header / Info */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">
                  {selectedExam?.name} {selectedBranch ? `· ${selectedBranch.name}` : ""}
                </span>
                <h3 className="text-sm font-semibold text-slate-300">{selectedSubject?.name}</h3>
              </div>

              {/* Real-time countdown clock */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-slate-400 uppercase tracking-widest">Time Remaining</div>
                  <div className={`text-xl font-bold font-mono tracking-wider ${timeLeft < 60 ? "text-rose-500 pulse-active" : "text-white"}`}>
                    {formatTime(timeLeft)}
                  </div>
                </div>
                {/* Visual Timer Progress Circle (Simple border indicator) */}
                <div className="w-10 h-10 rounded-full border-2 border-slate-800 flex items-center justify-center relative">
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-indigo-500 transition-all duration-1000"
                    style={{
                      clipPath: `inset(0 0 0 0)`,
                      opacity: timeLeft / totalQuizTime
                    }}
                  />
                  <span className="text-xs">⏱️</span>
                </div>
              </div>
            </div>

            {/* Question Panel */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>QUESTION {currentQuestionIndex + 1} OF {activeQuestions.length}</span>
                <span className="capitalize px-2 py-0.5 bg-slate-800 rounded text-slate-300 border border-slate-700">
                  {difficulty}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
                {activeQuestions[currentQuestionIndex].text}
              </h4>

              {/* Options Grid */}
              <div className="space-y-3">
                {activeQuestions[currentQuestionIndex].options.map((option, idx) => {
                  const isSelected = userAnswers[activeQuestions[currentQuestionIndex].id]?.selectedOptionIndex === idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition flex items-center gap-4 group cursor-pointer ${
                        isSelected
                          ? "bg-indigo-600/20 border-indigo-500 text-white font-medium shadow-md shadow-indigo-500/5"
                          : "border-slate-800 bg-slate-900/40 hover:bg-slate-850 hover:border-slate-700 text-slate-300"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition ${
                        isSelected
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="flex-1 text-sm sm:text-base">{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer / Control Actions */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={toggleMarkForReview}
                  className={`px-4 py-2 rounded-lg border text-xs font-semibold transition cursor-pointer ${
                    userAnswers[activeQuestions[currentQuestionIndex].id]?.isMarkedForReview
                      ? "bg-amber-600 text-white border-amber-400"
                      : "border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {userAnswers[activeQuestions[currentQuestionIndex].id]?.isMarkedForReview
                    ? "✓ Marked for Review"
                    : "★ Mark for Review"}
                </button>

                <button
                  onClick={clearResponse}
                  disabled={userAnswers[activeQuestions[currentQuestionIndex].id]?.selectedOptionIndex === null}
                  className="px-4 py-2 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent rounded-lg text-xs font-semibold transition cursor-pointer"
                >
                  Clear Response
                </button>
              </div>

              <div className="flex gap-2 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                  className="px-4 py-2 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-30 rounded-lg text-xs font-semibold transition cursor-pointer"
                >
                  ◀ Previous
                </button>

                {currentQuestionIndex < activeQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                    className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
                  >
                    Next ▶
                  </button>
                ) : (
                  <button
                    onClick={() => handleQuizSubmit()}
                    className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-lg text-xs tracking-wider uppercase transition shadow-md shadow-emerald-600/20 cursor-pointer"
                  >
                    Submit Exam
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Question Palette Sidebar */}
          <div className="w-full lg:w-80 glass-panel p-6 bg-slate-900/10 flex flex-col justify-between gap-6 h-fit">
            <div>
              <h3 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Question Palette</h3>
              
              <div className="grid grid-cols-5 gap-2.5">
                {activeQuestions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-10 rounded-lg border text-xs font-semibold flex items-center justify-center transition cursor-pointer ${getQuestionStatusClass(idx)}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Legend */}
            <div className="border-t border-slate-800 pt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-3.5 h-3.5 rounded bg-indigo-650 border border-indigo-400 block" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-3.5 h-3.5 rounded bg-amber-600 border border-amber-400 block" />
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-3.5 h-3.5 rounded bg-slate-800 border border-slate-700 block" />
                <span>Unvisited / Unanswered</span>
              </div>
            </div>

            {/* Quick Submit Block */}
            <div className="pt-2">
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to submit the exam?")) {
                    handleQuizSubmit();
                  }
                }}
                className="w-full py-2.5 border border-rose-500/30 bg-rose-500/5 hover:bg-rose-500 hover:text-slate-950 text-rose-400 font-bold rounded-lg text-xs tracking-wider uppercase transition cursor-pointer"
              >
                Submit Entire Test
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 6. RESULT & DETAILED PERFORMANCE ANALYSIS */}
      {currentScreen === "result" && (
        <section className="flex-1 py-6 max-w-4xl mx-auto w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-1 text-gradient-success">Performance Dashboard</h2>
            <p className="text-slate-400 text-xs uppercase tracking-widest">
              Subject: {selectedSubject?.name} ({difficulty} mode)
            </p>
          </div>

          {/* Results Score Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-panel p-5 bg-slate-900/30 border-indigo-500/20 text-center">
              <div className="text-xs text-slate-400 uppercase font-semibold mb-1">Final Score</div>
              <div className="text-3xl font-extrabold text-indigo-400 font-mono">
                {score} <span className="text-xs text-slate-500">pts</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-2">* +4 for Correct, -1 for Incorrect</p>
            </div>

            <div className="glass-panel p-5 bg-slate-900/30 border-emerald-500/20 text-center">
              <div className="text-xs text-slate-400 uppercase font-semibold mb-1">Accuracy</div>
              <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                {correctCount + incorrectCount > 0
                  ? Math.round((correctCount / (correctCount + incorrectCount)) * 100)
                  : 0}
                %
              </div>
              <p className="text-[10px] text-slate-500 mt-2">Correct vs Attempted</p>
            </div>

            <div className="glass-panel p-5 bg-slate-900/30 text-center">
              <div className="text-xs text-slate-400 uppercase font-semibold mb-1">Questions Breakdown</div>
              <div className="flex justify-center gap-3 items-baseline mt-2">
                <span className="text-emerald-400 font-bold text-xl">{correctCount} <span className="text-[10px] font-normal text-slate-400">✓</span></span>
                <span className="text-rose-400 font-bold text-xl">{incorrectCount} <span className="text-[10px] font-normal text-slate-400">✗</span></span>
                <span className="text-slate-400 font-bold text-xl">{skippedCount} <span className="text-[10px] font-normal text-slate-400">∅</span></span>
              </div>
              <p className="text-[10px] text-slate-500 mt-2">Correct / Wrong / Skipped</p>
            </div>

            <div className="glass-panel p-5 bg-slate-900/30 text-center">
              <div className="text-xs text-slate-400 uppercase font-semibold mb-1">Time Elapsed</div>
              <div className="text-3xl font-extrabold text-amber-400 font-mono">
                {formatTime(timeTakenSeconds)}
              </div>
              <p className="text-[10px] text-slate-500 mt-2">Out of {formatTime(totalQuizTime)}</p>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="glass-panel p-6 bg-slate-900/20 border-slate-800 text-center">
            <h3 className="text-lg font-bold text-white mb-2">
              {correctCount / activeQuestions.length >= 0.8
                ? "🏆 Exceptional Performance!"
                : correctCount / activeQuestions.length >= 0.5
                ? "💡 Good Attempt! Keep practicing."
                : "📈 Scope for Improvement."}
            </h3>
            <p className="text-sm text-slate-350 max-w-2xl mx-auto">
              Analyze the question-by-question explanations below to study correct logic, formulas, and methods. Reviewing wrong attempts is vital to boost scores in competitive exams.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                setCurrentScreen("settings");
              }}
              className="py-2.5 px-6 border border-slate-800 text-slate-300 hover:bg-slate-800 rounded-lg text-sm font-semibold transition cursor-pointer"
            >
              Re-attempt Quiz
            </button>
            <button
              onClick={() => {
                setCurrentScreen("home");
              }}
              className="py-2.5 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg text-sm font-bold shadow-md shadow-indigo-600/10 transition cursor-pointer"
            >
              Choose New Subject
            </button>
          </div>

          {/* Detailed Solutions Review */}
          <div className="space-y-6 pt-4 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              🔍 Question Explanations &amp; Review
            </h3>

            {activeQuestions.map((q, idx) => {
              const ans = userAnswers[q.id];
              const isCorrect = ans?.selectedOptionIndex === q.correctAnswerIndex;
              const isSkipped = ans?.selectedOptionIndex === null;

              return (
                <div
                  key={q.id}
                  className={`glass-panel p-6 border ${
                    isCorrect
                      ? "border-emerald-500/20 bg-emerald-500/2"
                      : isSkipped
                      ? "border-slate-800 bg-slate-900/10"
                      : "border-rose-500/20 bg-rose-500/2"
                  }`}
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400">QUESTION {idx + 1}</span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border uppercase ${
                      isCorrect
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : isSkipped
                        ? "bg-slate-800 text-slate-400 border-slate-700"
                        : "bg-rose-500/10 text-rose-400 border-rose-500/30"
                    }`}>
                      {isCorrect ? "Correct" : isSkipped ? "Skipped" : "Incorrect"}
                    </span>
                  </div>

                  <p className="text-base font-semibold text-white mb-4 leading-relaxed">{q.text}</p>

                  {/* Options List */}
                  <div className="space-y-2 mb-4">
                    {q.options.map((option, oIdx) => {
                      const isOptionSelected = ans?.selectedOptionIndex === oIdx;
                      const isOptionCorrect = q.correctAnswerIndex === oIdx;

                      let optClass = "border-slate-800 bg-slate-900/20 text-slate-400";
                      if (isOptionCorrect) {
                        optClass = "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium";
                      } else if (isOptionSelected && !isCorrect) {
                        optClass = "border-rose-500/30 bg-rose-500/10 text-rose-300 font-medium";
                      }

                      return (
                        <div key={oIdx} className={`p-3 rounded-lg border text-sm flex items-center gap-3 ${optClass}`}>
                          <span className={`w-6 h-6 rounded flex items-center justify-center text-[11px] font-bold ${
                            isOptionCorrect
                              ? "bg-emerald-500 text-slate-950"
                              : isOptionSelected
                              ? "bg-rose-500 text-white"
                              : "bg-slate-800 text-slate-400"
                          }`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{option}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Step-by-Step Explanation Block */}
                  <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-850 mt-4">
                    <h5 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      💡 Detailed Solution &amp; Explanation
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© 2026 ExamiQ Online Testing. Designed for premium preparation.</p>
      </footer>
    </main>
  );
}
