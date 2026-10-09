"use client";

import React, { useState } from "react";
import { HIGHLIGHTED_TOPICS } from "../data/highlightedTopics";
import { Question } from "../data/questionTypes";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onStartTopic: (questions: Question[], title: string) => void;
}

export default function HighlightedTopicsModal({ isOpen, onClose, onStartTopic }: Props) {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string>("All");

  if (!isOpen) return null;

  const subjects = ["All", ...Array.from(new Set(HIGHLIGHTED_TOPICS.map(t => t.subject)))];
  const filtered = HIGHLIGHTED_TOPICS.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.subject.toLowerCase().includes(search.toLowerCase());
    const matchSubject = selectedSubject === "All" || t.subject === selectedSubject;
    return matchSearch && matchSubject;
  });

  const subjectColors: Record<string, string> = {
    "Compiler Design": "bg-violet-500/20 text-violet-300 border-violet-500/30",
    "Theory of Computation": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    "Operating System": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "DBMS": "bg-amber-500/20 text-amber-300 border-amber-500/30",
    "Computer Networks": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Computer Architecture": "bg-rose-500/20 text-rose-300 border-rose-500/30",
    "Algorithms": "bg-teal-500/20 text-teal-300 border-teal-500/30",
    "Data Structures": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Digital Logic": "bg-pink-500/20 text-pink-300 border-pink-500/30",
    "C Programming": "bg-lime-500/20 text-lime-300 border-lime-500/30",
  };

  const totalQs = HIGHLIGHTED_TOPICS.reduce((a, t) => a + t.questions.length, 0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#0a0f1e] border border-slate-700/50 rounded-3xl w-full max-w-4xl my-6 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0a0f1e] border-b border-slate-800 rounded-t-3xl p-5 z-10">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">🔥</span>
                <h2 className="text-xl font-black text-white">Highly Recommended Topics</h2>
              </div>
              <p className="text-xs text-slate-400">27 Must-Know GATE CSE Topics — Don&apos;t Skip These!</p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer text-sm font-bold ml-4 shrink-0"
            >
              ✕
            </button>
          </div>

          {/* Search */}
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="🔍 Search topics..."
              className="flex-1 bg-slate-800/80 border border-slate-700 text-white text-xs rounded-xl px-3 py-2 outline-none focus:border-cyan-500/60 placeholder:text-slate-500"
            />
          </div>

          {/* Subject filter pills */}
          <div className="flex gap-1.5 mt-3 overflow-x-auto pb-1 scrollbar-none">
            {subjects.map(s => (
              <button
                key={s}
                onClick={() => setSelectedSubject(s)}
                className={`px-3 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap border transition cursor-pointer ${
                  selectedSubject === s
                    ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-300"
                    : "bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Topics Grid */}
        <div className="p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filtered.map(topic => {
              const subjColor = subjectColors[topic.subject] || "bg-slate-500/20 text-slate-300 border-slate-500/30";
              return (
                <div
                  key={topic.id}
                  className={`bg-slate-900/80 border ${topic.color} rounded-2xl p-4 flex flex-col gap-3 hover:scale-[1.02] transition group`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-2xl">{topic.icon}</span>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${subjColor} text-center leading-tight`}>
                      {topic.subject}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-white leading-snug group-hover:text-cyan-300 transition">
                      {topic.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 mt-1">{topic.questions.length} practice questions</p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onStartTopic(topic.questions, `🔥 ${topic.name}`);
                    }}
                    className="w-full py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-[11px] font-black rounded-xl transition cursor-pointer"
                  >
                    Practice Now →
                  </button>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500 text-sm">No topics found. Try a different search.</div>
          )}

          {/* Footer: all-topics button */}
          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
            <div className="text-[11px] text-slate-400">
              <span className="font-black text-cyan-400">{totalQs}</span> total questions across{" "}
              <span className="font-black text-white">27</span> topics
            </div>
            <button
              onClick={() => {
                const allQ = HIGHLIGHTED_TOPICS.flatMap(t => t.questions);
                onClose();
                onStartTopic(allQ, "🔥 All Recommended Topics");
              }}
              className="px-4 py-2 bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white text-[11px] font-black rounded-xl transition cursor-pointer"
            >
              🚀 Attempt All {totalQs} Questions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
