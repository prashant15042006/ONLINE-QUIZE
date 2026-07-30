import React from "react";
import { CheckCircle2, Bookmark, HelpCircle, EyeOff } from "lucide-react";

export type QuestionState = "answered" | "marked" | "unanswered" | "not_visited";

interface QuestionPaletteProps {
  totalQuestions: number;
  currentIndex: number;
  questionStates: Record<number, QuestionState>;
  onSelectQuestion: (index: number) => void;
}

export default function QuestionPalette({
  totalQuestions,
  currentIndex,
  questionStates,
  onSelectQuestion
}: QuestionPaletteProps) {
  const getBadgeStyle = (index: number, state: QuestionState) => {
    const isCurrent = currentIndex === index;

    let base = "w-9 h-9 rounded-xl text-xs font-bold flex items-center justify-center transition-all cursor-pointer border ";

    if (isCurrent) {
      base += "ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-950 scale-105 ";
    }

    switch (state) {
      case "answered":
        return base + "bg-emerald-600/30 border-emerald-500/60 text-emerald-300 hover:bg-emerald-600/50";
      case "marked":
        return base + "bg-amber-600/30 border-amber-500/60 text-amber-300 hover:bg-amber-600/50";
      case "unanswered":
        return base + "bg-red-600/30 border-red-500/60 text-red-300 hover:bg-red-600/50";
      default:
        return base + "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200";
    }
  };

  const counts = {
    answered: 0,
    marked: 0,
    unanswered: 0,
    not_visited: 0
  };

  for (let i = 0; i < totalQuestions; i++) {
    const st = questionStates[i] || "not_visited";
    counts[st]++;
  }

  return (
    <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
        Question Palette
      </h4>

      {/* Grid of Question Numbers */}
      <div className="grid grid-cols-5 gap-2 mb-4">
        {Array.from({ length: totalQuestions }).map((_, idx) => {
          const state = questionStates[idx] || "not_visited";
          return (
            <button
              key={idx}
              onClick={() => onSelectQuestion(idx)}
              className={getBadgeStyle(idx, state)}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="space-y-2 pt-3 border-t border-slate-800/80 text-xs">
        <div className="flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-emerald-500/40 border border-emerald-500" />
            <span>Answered</span>
          </div>
          <span className="font-bold text-emerald-400">{counts.answered}</span>
        </div>

        <div className="flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-amber-500/40 border border-amber-500" />
            <span>Marked for Review</span>
          </div>
          <span className="font-bold text-amber-400">{counts.marked}</span>
        </div>

        <div className="flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-red-500/40 border border-red-500" />
            <span>Unanswered</span>
          </div>
          <span className="font-bold text-red-400">{counts.unanswered}</span>
        </div>

        <div className="flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-slate-800 border border-slate-700" />
            <span>Not Visited</span>
          </div>
          <span className="font-bold text-slate-400">{counts.not_visited}</span>
        </div>
      </div>
    </div>
  );
}
