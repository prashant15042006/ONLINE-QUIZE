import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Trophy, CheckCircle2, XCircle, HelpCircle, Sparkles, RefreshCw, ArrowRight, BookOpen, Clock, Award } from "lucide-react";
import { QuestionData } from "./MockExamInterface";

interface ScorecardModalProps {
  isOpen: boolean;
  onClose: () => void;
  quizTitle: string;
  targetCompanyOrExam: string;
  questions: QuestionData[];
  userAnswers: Record<number, number>;
  timeSpentSeconds: number;
  onRetry: () => void;
  onNewQuiz: () => void;
  onGetAiExplanation: (questionIndex: number) => Promise<string>;
}

export default function ScorecardModal({
  isOpen,
  onClose,
  quizTitle,
  targetCompanyOrExam,
  questions,
  userAnswers,
  timeSpentSeconds,
  onRetry,
  onNewQuiz,
  onGetAiExplanation
}: ScorecardModalProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "review">("summary");
  const [selectedReviewQuestion, setSelectedReviewQuestion] = useState(0);
  const [aiExplanationMap, setAiExplanationMap] = useState<Record<number, string>>({});
  const [loadingAiMap, setLoadingAiMap] = useState<Record<number, boolean>>({});

  if (!isOpen) return null;

  // Trigger celebration confetti
  React.useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  // Calculate scores
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  questions.forEach((q, idx) => {
    const userChoice = userAnswers[idx];
    if (userChoice === undefined || userChoice === null || userChoice < 0) {
      skippedCount++;
    } else if (userChoice === q.correctAnswer) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const total = questions.length;
  const scorePercent = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const isPass = scorePercent >= 60;

  const handleFetchAiExp = async (idx: number) => {
    if (aiExplanationMap[idx]) return;
    setLoadingAiMap((prev) => ({ ...prev, [idx]: true }));
    try {
      const exp = await onGetAiExplanation(idx);
      setAiExplanationMap((prev) => ({ ...prev, [idx]: exp }));
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingAiMap((prev) => ({ ...prev, [idx]: false }));
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-lg overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-2xl my-8">
        
        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-2">
              <Award className="w-4 h-4 text-indigo-400" />
              Official Test Performance Report
            </div>
            <h2 className="text-xl lg:text-2xl font-extrabold text-white">
              {quizTitle}
            </h2>
            <p className="text-xs text-slate-400">Target: {targetCompanyOrExam}</p>
          </div>

          {/* Pass/Fail Badge */}
          <div
            className={`px-6 py-3 rounded-2xl border text-center font-bold ${
              isPass
                ? "bg-emerald-950/50 border-emerald-500/50 text-emerald-300"
                : "bg-amber-950/50 border-amber-500/50 text-amber-300"
            }`}
          >
            <div className="text-2xl">{scorePercent}%</div>
            <div className="text-[11px] uppercase tracking-wider">
              {isPass ? "Passed Exam" : "Needs Improvement"}
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 my-6 border-b border-slate-800/80 pb-3">
          <button
            onClick={() => setActiveTab("summary")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "summary"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Summary & Analytics
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "review"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Review Solutions ({questions.length})
          </button>
        </div>

        {/* Content Body */}
        {activeTab === "summary" ? (
          <div className="space-y-6">
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
                <div className="text-xl font-bold text-white">{correctCount}</div>
                <div className="text-[11px] text-slate-400">Correct Answers</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <XCircle className="w-6 h-6 text-red-400 mx-auto mb-1" />
                <div className="text-xl font-bold text-white">{wrongCount}</div>
                <div className="text-[11px] text-slate-400">Incorrect Answers</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <HelpCircle className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                <div className="text-xl font-bold text-white">{skippedCount}</div>
                <div className="text-[11px] text-slate-400">Skipped</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <Clock className="w-6 h-6 text-indigo-400 mx-auto mb-1" />
                <div className="text-xl font-bold text-white">{formatTime(timeSpentSeconds)}</div>
                <div className="text-[11px] text-slate-400">Time Taken</div>
              </div>
            </div>

            {/* AI Diagnosis Report Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-slate-900 border border-indigo-500/30">
              <div className="flex items-center gap-2 font-bold text-sm text-indigo-300 mb-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                AI Preparation Assessment
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {scorePercent >= 80
                  ? `Outstanding result for ${targetCompanyOrExam}! You demonstrated high mastery across quantitative logic and technical problem-solving. Maintain your speed and review edge cases to score top 1% percentile.`
                  : scorePercent >= 60
                  ? `Good effort! You passed the baseline threshold for ${targetCompanyOrExam}. To boost your accuracy above 85%, focus on reviewing weak areas and practice step-by-step AI solutions in the Review Solutions tab.`
                  : `Needs structured practice. Revisit fundamental concepts for ${targetCompanyOrExam}, practice speed management, and utilize AI hints to build confidence before retaking the mock.`}
              </p>
            </div>
          </div>
        ) : (
          /* Review Tab */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Question Selector List */}
            <div className="lg:col-span-4 space-y-2 max-h-[350px] overflow-y-auto pr-2">
              {questions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correctAnswer;
                const isSkipped = userAns === undefined || userAns === null || userAns < 0;

                return (
                  <button
                    key={q.id || idx}
                    onClick={() => {
                      setSelectedReviewQuestion(idx);
                      handleFetchAiExp(idx);
                    }}
                    className={`w-full p-3 rounded-xl border text-left transition-all text-xs flex items-center justify-between ${
                      selectedReviewQuestion === idx
                        ? "bg-indigo-600/30 border-indigo-500 text-white font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <span>Q{idx + 1}. {q.question.substring(0, 28)}...</span>
                    {isSkipped ? (
                      <span className="text-amber-400 font-semibold">Skipped</span>
                    ) : isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Question Detailed Solution Pane */}
            <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              {questions[selectedReviewQuestion] && (
                <>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Question {selectedReviewQuestion + 1} of {questions.length}</span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                      Difficulty: {questions[selectedReviewQuestion].difficulty || "Medium"}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white">
                    {questions[selectedReviewQuestion].question}
                  </h4>

                  {/* Options */}
                  <div className="space-y-2">
                    {questions[selectedReviewQuestion].options.map((opt, oIdx) => {
                      const isCorrect = oIdx === questions[selectedReviewQuestion].correctAnswer;
                      const isUserChoice = userAnswers[selectedReviewQuestion] === oIdx;

                      let style = "bg-slate-950 border-slate-800 text-slate-300";
                      if (isCorrect) style = "bg-emerald-950/60 border-emerald-500/80 text-emerald-300 font-bold";
                      else if (isUserChoice) style = "bg-red-950/60 border-red-500/80 text-red-300 font-bold";

                      return (
                        <div key={oIdx} className={`p-3 rounded-xl border text-xs flex items-center justify-between ${style}`}>
                          <span>
                            <strong>{String.fromCharCode(65 + oIdx)}.</strong> {opt}
                          </span>
                          {isCorrect && <span className="text-[10px] text-emerald-400 font-bold uppercase">Correct Answer</span>}
                          {isUserChoice && !isCorrect && <span className="text-[10px] text-red-400 font-bold uppercase">Your Choice</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Static Explanation */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                    <strong className="text-indigo-400 block mb-1">Standard Solution:</strong>
                    {questions[selectedReviewQuestion].explanation}
                  </div>

                  {/* AI Step-by-Step Tutor Explanation */}
                  <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-indigo-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        AI Step-by-Step Solution Breakdown
                      </span>
                    </div>

                    {loadingAiMap[selectedReviewQuestion] ? (
                      <p className="text-slate-400 animate-pulse">Generating AI solution step-by-step...</p>
                    ) : aiExplanationMap[selectedReviewQuestion] ? (
                      <p className="text-slate-200 whitespace-pre-line leading-relaxed">
                        {aiExplanationMap[selectedReviewQuestion]}
                      </p>
                    ) : (
                      <button
                        onClick={() => handleFetchAiExp(selectedReviewQuestion)}
                        className="text-indigo-400 hover:text-indigo-300 underline font-semibold mt-1 inline-block"
                      >
                        Click to generate deep AI explanation for this question
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-800 mt-6">
          <button
            onClick={onRetry}
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Re-take Test
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onNewQuiz}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 flex items-center gap-2"
            >
              Start New Test
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
