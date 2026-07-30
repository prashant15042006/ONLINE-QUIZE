import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Bookmark, RotateCcw, Send, HelpCircle, Sparkles, Layers, ShieldAlert, CheckCircle2 } from "lucide-react";
import ExamTimer from "./ExamTimer";
import QuestionPalette, { QuestionState } from "./QuestionPalette";

export interface QuestionData {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint?: string;
  topic?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
}

interface MockExamInterfaceProps {
  quizTitle: string;
  targetCompanyOrExam: string;
  timeLimitMinutes: number;
  questions: QuestionData[];
  onSubmitExam: (answers: Record<number, number>, timeSpentSeconds: number) => void;
  onExit: () => void;
}

export default function MockExamInterface({
  quizTitle,
  targetCompanyOrExam,
  timeLimitMinutes,
  questions,
  onSubmitExam,
  onExit
}: MockExamInterfaceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Record<number, boolean>>({ 0: true });
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);
  const [showAiHint, setShowAiHint] = useState(false);
  const [showPaletteDrawer, setShowPaletteDrawer] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const handleClearResponse = () => {
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  const handleToggleMark = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const handleNavigate = (newIdx: number) => {
    if (newIdx >= 0 && newIdx < questions.length) {
      setCurrentIndex(newIdx);
      setShowAiHint(false);
      setVisitedQuestions((prev) => ({ ...prev, [newIdx]: true }));
    }
  };

  // Derive Question States for Palette
  const questionStates: Record<number, QuestionState> = {};
  questions.forEach((_, idx) => {
    const isAns = userAnswers[idx] !== undefined;
    const isMarked = markedForReview[idx];
    const isVisited = visitedQuestions[idx];

    if (isMarked) questionStates[idx] = "marked";
    else if (isAns) questionStates[idx] = "answered";
    else if (isVisited) questionStates[idx] = "unanswered";
    else questionStates[idx] = "not_visited";
  });

  const handleSubmit = () => {
    onSubmitExam(userAnswers, timeSpentSeconds);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 glass-panel border-b border-slate-800 px-4 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Exam Title & Company */}
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
            title="Exit Test"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm lg:text-base text-white">
                {quizTitle}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {targetCompanyOrExam}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Question {currentIndex + 1} of {questions.length}
            </p>
          </div>
        </div>

        {/* Timer & Controls */}
        <div className="flex items-center gap-3">
          <ExamTimer
            initialMinutes={timeLimitMinutes}
            onTimeUp={handleSubmit}
            onTimeUpdate={(secs) => setTimeSpentSeconds(secs)}
          />

          {/* Toggle Palette for Mobile */}
          <button
            onClick={() => setShowPaletteDrawer(!showPaletteDrawer)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold"
          >
            Palette
          </button>

          {/* Submit Exam Button */}
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 flex items-center gap-1.5 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Test</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left/Main Question Section */}
        <div className="lg:col-span-8 space-y-6">
          {/* Question Card */}
          <div className="glass-panel rounded-3xl p-6 lg:p-8 border border-slate-800/80 shadow-2xl relative">
            {/* Question Meta Badge Bar */}
            <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/80 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-bold border border-indigo-500/20">
                  Q{currentIndex + 1}
                </span>
                {currentQ?.topic && (
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-400 font-medium">
                    Topic: {currentQ.topic}
                  </span>
                )}
                {currentQ?.difficulty && (
                  <span className="px-2 py-0.5 rounded-md bg-purple-950 text-purple-300 text-[10px] font-bold">
                    {currentQ.difficulty}
                  </span>
                )}
              </div>

              {/* Instant AI Hint Toggle */}
              {currentQ?.hint && (
                <button
                  onClick={() => setShowAiHint(!showAiHint)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/60 text-xs font-semibold transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{showAiHint ? "Hide AI Hint" : "Ask AI Hint"}</span>
                </button>
              )}
            </div>

            {/* AI Hint Drawer */}
            {showAiHint && currentQ?.hint && (
              <div className="mb-5 p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 animate-fade-in flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold text-indigo-300 mb-0.5">AI Practice Hint:</strong>
                  {currentQ.hint}
                </div>
              </div>
            )}

            {/* Question Text */}
            <h3 className="text-base lg:text-lg font-bold text-white leading-relaxed mb-6">
              {currentQ?.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ?.options?.map((optionText, oIdx) => {
                const isSelected = userAnswers[currentIndex] === oIdx;
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all text-xs lg:text-sm font-medium flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-indigo-600/25 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 font-bold"
                        : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold border transition-all ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-400 text-white"
                            : "bg-slate-950 border-slate-800 text-slate-400"
                        }`}
                      >
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{optionText}</span>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
            {/* Mark for Review & Clear Response */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleMark}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                  markedForReview[currentIndex]
                    ? "bg-amber-600/30 border-amber-500 text-amber-300"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{markedForReview[currentIndex] ? "Marked" : "Mark for Review"}</span>
              </button>

              {userAnswers[currentIndex] !== undefined && (
                <button
                  onClick={handleClearResponse}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-950 border border-slate-800 text-slate-400 hover:text-red-400 transition-all flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear Selection</span>
                </button>
              )}
            </div>

            {/* Previous & Next / Save & Next */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavigate(currentIndex - 1)}
                disabled={currentIndex === 0}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-40 flex items-center gap-1.5 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => handleNavigate(currentIndex + 1)}
                disabled={currentIndex === questions.length - 1}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 disabled:opacity-40 flex items-center gap-1.5 transition-all"
              >
                <span>Save & Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Pane: Question Palette */}
        <div className={`lg:col-span-4 ${showPaletteDrawer ? "block" : "hidden lg:block"}`}>
          <QuestionPalette
            totalQuestions={questions.length}
            currentIndex={currentIndex}
            questionStates={questionStates}
            onSelectQuestion={(idx) => handleNavigate(idx)}
          />
        </div>
      </div>
    </div>
  );
}
