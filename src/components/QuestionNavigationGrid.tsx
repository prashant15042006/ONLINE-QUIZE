"use client";

import React from "react";

interface Props {
  questions: { id: string }[];
  userAnswers: Record<string, { selectedOptionIndex: number | null; isMarkedForReview?: boolean }>;
  correctAnswers: Record<string, number>;
  currentIndex: number;
  isSubmitted: boolean;
  onJumpTo: (index: number) => void;
  quizMode?: string;
}

export default function QuestionNavigationGrid({
  questions,
  userAnswers,
  correctAnswers,
  currentIndex,
  isSubmitted,
  onJumpTo,
  quizMode,
}: Props) {
  const [filter, setFilter] = React.useState<"all" | "attempted" | "unattempted" | "review">("all");

  const getStatus = (idx: number) => {
    const q = questions[idx];
    const ans = userAnswers[q.id];
    if (idx === currentIndex) return "current";
    if (ans?.isMarkedForReview) return "review";
    if (ans?.selectedOptionIndex === null || ans?.selectedOptionIndex === undefined) return "unattempted";
    if (isSubmitted) {
      return ans.selectedOptionIndex === correctAnswers[q.id] ? "correct" : "wrong";
    }
    // Live correct/wrong colors in practice mode
    if (quizMode === "practice") {
      return ans.selectedOptionIndex === correctAnswers[q.id] ? "correct" : "wrong";
    }
    return "attempted";
  };

  const statusStyles: Record<string, string> = {
    current:     "bg-blue-500 border-blue-300 text-white scale-110 shadow-md shadow-blue-500/40 font-black",
    unattempted: "bg-slate-800/90 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white",
    attempted:   "bg-emerald-600 border-emerald-400 text-white shadow-sm",
    correct:     "bg-emerald-600 border-emerald-400 text-white shadow-sm shadow-emerald-500/30",
    wrong:       "bg-rose-600 border-rose-400 text-white shadow-sm shadow-rose-500/30",
    review:      "bg-amber-600 border-amber-400 text-white shadow-sm",
  };

  const counts = { unattempted: 0, attempted: 0, correct: 0, wrong: 0, review: 0 };
  questions.forEach((q, i) => {
    const s = getStatus(i) as keyof typeof counts;
    if (s in counts) counts[s]++;
  });

  const showResults = isSubmitted || quizMode === "practice";
  const answeredCount = counts.attempted + counts.correct + counts.wrong;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-cyan-400 text-xs">⊞</span>
          <h4 className="text-xs font-black text-slate-300 uppercase tracking-wider">Question Links</h4>
        </div>
        <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-bold border border-blue-500/30">
          {questions.length} Qs
        </span>
      </div>

      {/* CBT Filter Pills */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[10px] font-bold scrollbar-none">
        <button
          onClick={() => setFilter("all")}
          className={`px-2 py-0.5 rounded-md border transition cursor-pointer whitespace-nowrap ${
            filter === "all" ? "bg-blue-600 border-blue-400 text-white font-black" : "bg-slate-800/80 border-slate-700 text-slate-400"
          }`}
        >
          All ({questions.length})
        </button>
        <button
          onClick={() => setFilter("attempted")}
          className={`px-2 py-0.5 rounded-md border transition cursor-pointer whitespace-nowrap ${
            filter === "attempted" ? "bg-emerald-600 border-emerald-400 text-white font-black" : "bg-slate-800/80 border-slate-700 text-emerald-400"
          }`}
        >
          Ans ({answeredCount})
        </button>
        <button
          onClick={() => setFilter("review")}
          className={`px-2 py-0.5 rounded-md border transition cursor-pointer whitespace-nowrap ${
            filter === "review" ? "bg-amber-600 border-amber-400 text-white font-black" : "bg-slate-800/80 border-slate-700 text-amber-400"
          }`}
        >
          Review ({counts.review})
        </button>
        <button
          onClick={() => setFilter("unattempted")}
          className={`px-2 py-0.5 rounded-md border transition cursor-pointer whitespace-nowrap ${
            filter === "unattempted" ? "bg-slate-700 border-slate-500 text-white font-black" : "bg-slate-800/80 border-slate-700 text-slate-400"
          }`}
        >
          Left ({counts.unattempted})
        </button>
      </div>

      {/* Grid */}
      <div className={`grid ${questions.length > 25 ? "grid-cols-8" : "grid-cols-5"} gap-1.5 max-h-[360px] overflow-y-auto pr-1`}>
        {questions.map((_, idx) => {
          const status = getStatus(idx);
          const isMatch =
            filter === "all" ||
            (filter === "attempted" && (status === "attempted" || status === "correct" || status === "wrong")) ||
            (filter === "review" && status === "review") ||
            (filter === "unattempted" && status === "unattempted");

          return (
            <button
              key={idx}
              onClick={() => onJumpTo(idx)}
              title={status === "correct" ? "✓ Correct" : status === "wrong" ? "✗ Wrong" : status}
              className={`w-full aspect-square rounded-lg border text-[11px] font-black transition cursor-pointer flex items-center justify-center ${
                statusStyles[status]
              } ${!isMatch ? "opacity-25 scale-90" : ""}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-1 pt-2 border-t border-slate-800">
        {[
          { label: "Unattempted", color: "bg-slate-700", count: counts.unattempted },
          ...(showResults
            ? [
                { label: "Correct ✓", color: "bg-emerald-600", count: counts.correct },
                { label: "Wrong ✗", color: "bg-rose-600", count: counts.wrong },
              ]
            : [
                { label: "Answered", color: "bg-emerald-600", count: counts.attempted },
                { label: "For Review", color: "bg-amber-700", count: counts.review },
              ]),
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded ${item.color} shrink-0`} />
            <span className="text-[10px] text-slate-400">{item.label} ({item.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
