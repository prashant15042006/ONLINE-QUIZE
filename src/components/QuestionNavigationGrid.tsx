"use client";

import React from "react";

interface Props {
  questions: { id: string }[];
  userAnswers: Record<string, { selectedOptionIndex: number | null; isMarkedForReview?: boolean }>;
  correctAnswers: Record<string, number>; // questionId -> correctAnswerIndex
  currentIndex: number;
  isSubmitted: boolean;
  onJumpTo: (index: number) => void;
}

export default function QuestionNavigationGrid({
  questions,
  userAnswers,
  correctAnswers,
  currentIndex,
  isSubmitted,
  onJumpTo,
}: Props) {
  const getStatus = (idx: number) => {
    const q = questions[idx];
    const ans = userAnswers[q.id];
    if (idx === currentIndex) return "current";
    if (ans?.isMarkedForReview) return "review";
    if (ans?.selectedOptionIndex === null || ans?.selectedOptionIndex === undefined) return "unattempted";
    if (isSubmitted) {
      return ans.selectedOptionIndex === correctAnswers[q.id] ? "correct" : "wrong";
    }
    return "attempted";
  };

  const statusStyles: Record<string, string> = {
    current:     "bg-blue-500 border-blue-300 text-white scale-110 shadow-md shadow-blue-500/40",
    unattempted: "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500",
    attempted:   "bg-blue-900 border-blue-700 text-blue-300",
    correct:     "bg-emerald-700 border-emerald-500 text-white",
    wrong:       "bg-rose-700 border-rose-500 text-white",
    review:      "bg-amber-700 border-amber-500 text-white",
  };

  // Summary counts
  const counts = { unattempted: 0, attempted: 0, correct: 0, wrong: 0, review: 0 };
  questions.forEach((q, i) => {
    if (i === currentIndex) return;
    const s = getStatus(i) as keyof typeof counts;
    if (s in counts) counts[s]++;
  });

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-black text-slate-300 uppercase tracking-wider">Question Palette</h4>
        <span className="text-[10px] text-slate-500">{questions.length} Qs</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-5 gap-1.5">
        {questions.map((_, idx) => {
          const status = getStatus(idx);
          return (
            <button
              key={idx}
              onClick={() => onJumpTo(idx)}
              className={`w-full aspect-square rounded-lg border text-[11px] font-black transition cursor-pointer ${statusStyles[status]}`}
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
          { label: "Attempted", color: "bg-blue-800", count: counts.attempted },
          ...(isSubmitted
            ? [
                { label: "Correct", color: "bg-emerald-700", count: counts.correct },
                { label: "Wrong", color: "bg-rose-700", count: counts.wrong },
              ]
            : [{ label: "For Review", color: "bg-amber-700", count: counts.review }]),
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
