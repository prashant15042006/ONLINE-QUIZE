"use client";

import React, { useState } from "react";
import { GATE_PYQ_PAPERS, GatePaper } from "../data/gatePyqData";
import { Question } from "../data/quizData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onStartPaper: (questions: Question[], paperTitle: string) => void;
}

export default function GatePyqMockModal({ isOpen, onClose, onStartPaper }: Props) {
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>("all");

  if (!isOpen) return null;

  const years = Array.from(new Set(GATE_PYQ_PAPERS.map((p) => p.year))).sort((a, b) => Number(b) - Number(a));

  const filteredPapers = selectedYearFilter === "all"
    ? GATE_PYQ_PAPERS
    : GATE_PYQ_PAPERS.filter((p) => p.year === selectedYearFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-amber-500/20">
              📜
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">GATE CSE Official Year-Wise PYQ Papers</h3>
              <p className="text-[11px] text-slate-400">Official GATE Previous Year Questions from 2015 to 2024</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Year Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-2 shrink-0 scrollbar-none">
          <button
            onClick={() => setSelectedYearFilter("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer border ${
              selectedYearFilter === "all"
                ? "bg-amber-500 border-amber-400 text-slate-950"
                : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
            }`}
          >
            All Papers ({GATE_PYQ_PAPERS.length})
          </button>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setSelectedYearFilter(y)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer border ${
                selectedYearFilter === y
                  ? "bg-amber-500 border-amber-400 text-slate-950"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
              }`}
            >
              GATE {y}
            </button>
          ))}
        </div>

        {/* Paper Grid */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pr-1">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 p-4 rounded-2xl transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    GATE {paper.year} {paper.setTitle}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold">
                    ⏱ {paper.questions.length * 2} mins
                  </span>
                </div>
                <h4 className="font-extrabold text-white text-sm group-hover:text-amber-300 transition mb-1">
                  {paper.title}
                </h4>
                <p className="text-[11px] text-slate-400">
                  {paper.questions.length} Authentic PYQ Questions Loaded
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between">
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-slate-500 hover:text-slate-300 underline flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  GateOverflow Paper 🔗
                </a>

                <button
                  onClick={() => {
                    onStartPaper(paper.questions, paper.title);
                    onClose();
                  }}
                  className="px-3.5 py-1.5 btn-3d-green text-xs font-bold rounded-xl cursor-pointer"
                >
                  Attempt All {paper.questions.length} Qs 🚀
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
