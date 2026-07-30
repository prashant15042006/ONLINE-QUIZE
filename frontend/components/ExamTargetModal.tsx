import React, { useState } from "react";
import { X, Calendar, Target, CheckCircle2 } from "lucide-react";

interface ExamTargetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveTarget: (target: { title: string; date: string }) => void;
  currentTarget: { title: string; date: string };
}

const PRESET_EXAMS = [
  "TCS NQT 2026",
  "Infosys Specialist Test",
  "Amazon SDE Online Assessment",
  "Wipro NLTH",
  "GATE CS & IT 2026",
  "SSC CGL 2026",
  "UPSC CSAT",
  "Custom AI Practice"
];

export default function ExamTargetModal({
  isOpen,
  onClose,
  onSaveTarget,
  currentTarget
}: ExamTargetModalProps) {
  const [title, setTitle] = useState(currentTarget.title || "TCS NQT 2026");
  const [date, setDate] = useState(currentTarget.date || "2026-08-15");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveTarget({ title, date });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md glass-panel rounded-2xl p-6 border border-slate-800 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Set Target Exam & Date</h3>
            <p className="text-xs text-slate-400">
              Track your preparation timeline and daily study countdown.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Select Exam / Company
            </label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {PRESET_EXAMS.map((exam) => (
                <button
                  key={exam}
                  type="button"
                  onClick={() => setTitle(exam)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition-all ${
                    title === exam
                      ? "bg-purple-600/20 border-purple-500 text-white font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  {exam}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Or enter custom exam name..."
              className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Target Test Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-purple-500 text-xs font-mono"
              />
              <Calendar className="w-4 h-4 text-slate-400 absolute right-4 top-3 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30 flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              Save Target
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
