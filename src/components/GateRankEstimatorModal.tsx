"use client";

import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function GateRankEstimatorModal({ isOpen, onClose }: Props) {
  const [marks, setMarks] = useState<number>(55);
  const [category, setCategory] = useState<"General" | "OBC-NCL" | "SC/ST/PwD">("General");
  const [paper, setPaper] = useState<"CS" | "DA" | "EC" | "EE" | "ME">("CS");

  if (!isOpen) return null;

  // Simple historical estimation formula based on GATE CS / Engg statistics
  const estimateRank = (m: number, cat: string) => {
    let effectiveMarks = m;
    if (cat === "OBC-NCL") effectiveMarks = m * 1.12;
    if (cat === "SC/ST/PwD") effectiveMarks = m * 1.35;

    if (effectiveMarks >= 85) return { rank: "1 - 50", score: "920 - 1000", chance: "IIT Bombay / IISc M.Tech CS", status: "Top 0.1%" };
    if (effectiveMarks >= 75) return { rank: "51 - 250", score: "820 - 919", chance: "Top 7 IITs (IITB, IITD, IITK, IITM)", status: "Top 0.5%" };
    if (effectiveMarks >= 65) return { rank: "251 - 800", score: "720 - 819", chance: "IIT Roorkee, IIT Guwahati, BITS, Top PSUs", status: "Top 1.5%" };
    if (effectiveMarks >= 55) return { rank: "801 - 2000", score: "620 - 719", chance: "New IITs, Top NITs (Trichy, Surathkal), PSUs", status: "Top 3.5%" };
    if (effectiveMarks >= 45) return { rank: "2001 - 4500", score: "520 - 619", chance: "NITs, IIITs, State Universities", status: "Qualified (Good)" };
    if (effectiveMarks >= 32) return { rank: "4501 - 9000", score: "400 - 519", chance: "Decent State Govt Colleges / Self-Pointers", status: "Qualified" };
    if (effectiveMarks >= 25) return { rank: "9001 - 15000", score: "320 - 399", chance: "Qualified cutoff cleared", status: "Cutoff Cleared" };
    return { rank: "15000+", score: "< 300", chance: "Need more preparation", status: "Below Cutoff" };
  };

  const est = estimateRank(marks, category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 text-slate-100 shadow-2xl relative">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-xl shadow-lg shadow-amber-500/20">
              📊
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">GATE Rank & Score Predictor</h3>
              <p className="text-[11px] text-slate-400">Based on historical GATE 2020-2024 trends</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 mb-6">
          {/* Inputs */}
          <div>
            <div className="flex justify-between items-center mb-1 text-xs font-bold text-slate-300">
              <span>Expected Marks (out of 100)</span>
              <span className="text-amber-400 font-mono text-base font-black">{marks} / 100</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={marks}
              onChange={(e) => setMarks(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Paper</label>
              <select
                value={paper}
                onChange={(e) => setPaper(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
              >
                <option value="CS">CS (Computer Science)</option>
                <option value="DA">DA (Data Science & AI)</option>
                <option value="EC">EC (Electronics)</option>
                <option value="EE">EE (Electrical)</option>
                <option value="ME">ME (Mechanical)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
              >
                <option value="General">General / EWS</option>
                <option value="OBC-NCL">OBC-NCL</option>
                <option value="SC/ST/PwD">SC / ST / PwD</option>
              </select>
            </div>
          </div>
        </div>

        {/* Prediction Results */}
        <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-4 space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-slate-400">Estimated AIR Rank</span>
            <span className="text-lg font-black text-amber-400">{est.rank}</span>
          </div>

          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-slate-400">Estimated GATE Score</span>
            <span className="text-sm font-bold text-cyan-400">{est.score}</span>
          </div>

          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-slate-400">Percentile Range</span>
            <span className="text-xs font-bold text-emerald-400">{est.status}</span>
          </div>

          <div className="pt-1">
            <div className="text-[11px] font-bold text-slate-400 mb-1">Target Admission / PSU Possibilities:</div>
            <div className="text-xs font-semibold text-slate-200 bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
              🎯 {est.chance}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-3 btn-3d-slate text-xs font-bold rounded-xl cursor-pointer"
        >
          Close Estimator
        </button>
      </div>
    </div>
  );
}
