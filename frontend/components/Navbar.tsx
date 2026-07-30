import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Trophy, Target, Zap } from "lucide-react";

interface NavbarProps {
  onOpenTargetModal: () => void;
  targetExam: { title: string; date: string };
}

export default function Navbar({ onOpenTargetModal, targetExam }: NavbarProps) {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    if (targetExam.date) {
      const examDate = new Date(targetExam.date).getTime();
      const today = new Date().getTime();
      const diff = Math.ceil((examDate - today) / (1000 * 3600 * 24));
      setDaysLeft(diff > 0 ? diff : 0);
    }
  }, [targetExam.date]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/60 bg-[#05070c]/80 backdrop-blur-xl px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 flex-shrink-0">
            <Sparkles className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white">
                Quizzy<span className="gradient-text">AI</span>
              </span>
              <span className="hidden sm:inline text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                Groq Powered
              </span>
            </div>
            <p className="text-[10px] text-slate-500 hidden sm:block">AI Exam & Recruitment Prep</p>
          </div>
        </div>

        {/* Center: Target Exam */}
        <button
          onClick={onOpenTargetModal}
          className="hidden md:flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-indigo-500/50 hover:bg-slate-900/90 transition-all text-xs font-medium text-slate-300 hover:text-white group"
        >
          <Target className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
          <span>
            Target: <strong className="text-white font-bold">{targetExam.title}</strong>
          </span>
          {daysLeft !== null && (
            <span className={`ml-1 px-2 py-0.5 rounded-md font-bold text-[10px] ${
              daysLeft <= 7
                ? "bg-red-600/20 text-red-300 border border-red-500/30"
                : daysLeft <= 30
                ? "bg-amber-600/20 text-amber-300 border border-amber-500/30"
                : "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
            }`}>
              {daysLeft}d left
            </span>
          )}
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* AI Status badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">AI Live</span>
          </div>

          {/* XP Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-bold text-amber-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>450 XP</span>
          </div>

          {/* Mobile target button */}
          <button
            onClick={onOpenTargetModal}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <Calendar className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
