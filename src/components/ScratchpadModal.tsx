"use client";

import React, { useState, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScratchpadModal({ isOpen, onClose }: Props) {
  const [notes, setNotes] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("examiq_scratchpad") || "";
      setNotes(saved);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
    if (typeof window !== "undefined") {
      localStorage.setItem("examiq_scratchpad", e.target.value);
    }
  };

  const handleClear = () => {
    if (confirm("Clear rough sheet notes?")) {
      setNotes("");
      if (typeof window !== "undefined") {
        localStorage.removeItem("examiq_scratchpad");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-[#0f172a] border border-slate-700 rounded-3xl max-w-lg w-full p-5 text-slate-100 shadow-2xl relative flex flex-col h-[480px]">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">📝</span>
            <div>
              <h3 className="font-extrabold text-white text-sm">Exam Rough Sheet / Scratchpad</h3>
              <p className="text-[10px] text-slate-400">Jot calculations, formulas, or interim notes (auto-saved)</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleClear}
              className="text-[10px] font-bold text-rose-400 hover:text-rose-300 px-2 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 cursor-pointer"
            >
              Clear
            </button>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer text-xs"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          value={notes}
          onChange={handleChange}
          placeholder="Use this space for rough work:
- Matrix multiplication steps...
- Eigenvalues: det(A - λI) = 0...
- Dijkstra priority queue trace..."
          className="flex-1 w-full bg-slate-950/90 border border-slate-800 rounded-2xl p-4 text-xs sm:text-sm font-mono text-cyan-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 resize-none leading-relaxed"
        />

        {/* Footer */}
        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 shrink-0">
          <span>🔒 Persisted locally in your browser</span>
          <span className="font-mono text-cyan-400">{notes.length} characters</span>
        </div>
      </div>
    </div>
  );
}
