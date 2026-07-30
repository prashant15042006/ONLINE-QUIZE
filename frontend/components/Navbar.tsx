import React, { useState, useEffect } from "react";
import { Sparkles, Key, Calendar, Trophy, Zap, ShieldCheck, HelpCircle } from "lucide-react";

interface NavbarProps {
  onOpenApiKeyModal: () => void;
  onOpenTargetModal: () => void;
  targetExam: { title: string; date: string };
  hasApiKey: boolean;
}

export default function Navbar({
  onOpenApiKeyModal,
  onOpenTargetModal,
  targetExam,
  hasApiKey
}: NavbarProps) {
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
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white">
                Prep<span className="gradient-text">AI</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Mock & Quiz
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              AI Exam & Company Recruitment Prep
            </p>
          </div>
        </div>

        {/* Target Exam Date Countdown Badge */}
        <button
          onClick={onOpenTargetModal}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:border-indigo-500/50 transition-all text-xs font-medium text-slate-300 hover:text-white"
        >
          <Calendar className="w-4 h-4 text-indigo-400" />
          <span>Target: <strong className="text-white">{targetExam.title}</strong></span>
          {daysLeft !== null && (
            <span className="ml-1 px-2 py-0.5 rounded-md bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 font-bold">
              {daysLeft} Days Left
            </span>
          )}
        </button>

        {/* Right Actions: API Key & User Stats */}
        <div className="flex items-center gap-3">
          {/* API Key Modal Button */}
          <button
            onClick={onOpenApiKeyModal}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              hasApiKey
                ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/50"
                : "bg-amber-950/40 border-amber-500/40 text-amber-300 hover:bg-amber-900/50 animate-pulse"
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {hasApiKey ? "AI Key Active" : "Add AI Key"}
            </span>
          </button>

          {/* User XP Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>450 XP</span>
          </div>
        </div>
      </div>
    </header>
  );
}
