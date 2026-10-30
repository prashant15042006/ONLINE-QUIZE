"use client";

import React, { useState, useMemo } from "react";
import { Question, Subject } from "../data/quizData";
import { MadeEasyPaper, getAllMadeEasyTests } from "../data/madeEasyTestsData";
export type { MadeEasyPaper };

interface Props {
  isOpen: boolean;
  onClose: () => void;
  gateSubjects: Subject[];
  onStartTest: (
    questions: Question[],
    title: string,
    mode: "exam" | "practice",
    durationMinutes?: number
  ) => void;
}

// Subject color system: distinct, pleasant, non-red colors for every subject
const getSubjectColorClasses = (subjectKey: string) => {
  switch (subjectKey) {
    case "mock":
      return {
        badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
        pill: "bg-amber-500/20 text-amber-300",
        borderHover: "hover:border-amber-500/50",
      };
    case "os":
      return {
        badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
        pill: "bg-cyan-500/20 text-cyan-300",
        borderHover: "hover:border-cyan-500/50",
      };
    case "cn":
      return {
        badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
        pill: "bg-indigo-500/20 text-indigo-300",
        borderHover: "hover:border-indigo-500/50",
      };
    case "ds_algo":
      return {
        badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        pill: "bg-emerald-500/20 text-emerald-300",
        borderHover: "hover:border-emerald-500/50",
      };
    case "coa":
      return {
        badge: "bg-sky-500/15 text-sky-300 border-sky-500/30",
        pill: "bg-sky-500/20 text-sky-300",
        borderHover: "hover:border-sky-500/50",
      };
    case "dbms":
      return {
        badge: "bg-teal-500/15 text-teal-300 border-teal-500/30",
        pill: "bg-teal-500/20 text-teal-300",
        borderHover: "hover:border-teal-500/50",
      };
    case "toc":
      return {
        badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
        pill: "bg-purple-500/20 text-purple-300",
        borderHover: "hover:border-purple-500/50",
      };
    case "cd":
      return {
        badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
        pill: "bg-orange-500/20 text-orange-300",
        borderHover: "hover:border-orange-500/50",
      };
    case "dm":
      return {
        badge: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
        pill: "bg-fuchsia-500/20 text-fuchsia-300",
        borderHover: "hover:border-fuchsia-500/50",
      };
    case "ga":
      return {
        badge: "bg-lime-500/15 text-lime-300 border-lime-500/30",
        pill: "bg-lime-500/20 text-lime-300",
        borderHover: "hover:border-lime-500/50",
      };
    case "em":
      return {
        badge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
        pill: "bg-violet-500/20 text-violet-300",
        borderHover: "hover:border-violet-500/50",
      };
    default:
      return {
        badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
        pill: "bg-blue-500/20 text-blue-300",
        borderHover: "hover:border-blue-500/50",
      };
  }
};

export default function MadeEasyTestSeriesModal({
  isOpen,
  onClose,
  gateSubjects,
  onStartTest,
}: Props) {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTest, setSelectedTest] = useState<MadeEasyPaper | null>(null);
  const [chosenMode, setChosenMode] = useState<"exam" | "practice">("exam");

    const allTests: MadeEasyPaper[] = useMemo(() => {
    return getAllMadeEasyTests(gateSubjects);
  }, [gateSubjects]);

  const subjectFilters = [
    { key: "all", label: `All Tests (${allTests.length})`, icon: "📚" },
    { key: "mock", label: "Full Mock", icon: "🏆" },
    { key: "os", label: "Operating Systems", icon: "⚙️" },
    { key: "cn", label: "Computer Networks", icon: "🌐" },
    { key: "ds_algo", label: "Data Structures", icon: "🌲" },
    { key: "coa", label: "COA", icon: "🖥️" },
    { key: "dbms", label: "DBMS", icon: "🗄️" },
    { key: "toc", label: "TOC", icon: "🔤" },
    { key: "cd", label: "Compiler Design", icon: "⚡" },
    { key: "dm", label: "Discrete Math", icon: "📐" },
    { key: "ga", label: "Aptitude", icon: "📊" },
    { key: "em", label: "Engg. Mathematics", icon: "🔢" },
  ];

  const filteredTests = useMemo(() => {
    return allTests.filter((test) => {
      if (selectedSubjectFilter !== "all" && test.subjectKey !== selectedSubjectFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = test.title.toLowerCase().includes(q);
        const matchesSubject = test.subjectName.toLowerCase().includes(q);
        const matchesTopic = test.topics.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSubject && !matchesTopic) return false;
      }
      return true;
    });
  }, [allTests, selectedSubjectFilter, searchQuery]);

  const handleStartExam = (test: MadeEasyPaper, mode: "exam" | "practice") => {
    onStartTest(test.questions, test.title, mode, test.durationMinutes);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 animate-fade-in">
      <div className="bg-[#0b101b] border border-slate-700/80 rounded-3xl max-w-4xl w-full p-4 sm:p-6 text-slate-100 shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* ── Top Header Bar (Clean, Blue/Indigo Aesthetic - Not Red) ── */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-xl shadow-lg shadow-blue-500/25">
              🎯
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-extrabold text-white text-base tracking-tight">
                  MADE EASY Online Test Series
                </h3>
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/25">
                  GATE CS 2027
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Authentic Topic Wise &amp; Full Mock Tests • Real CBT Countdown Timer &amp; Negative Marking
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer text-sm font-bold"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            VIEW 1: DETAILED TEST SYLLABUS & EXAM INFORMATION
        ══════════════════════════════════════════════════════════════════ */}
        {selectedTest ? (
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {/* Prominent Back Button & Test Breadcrumb (High Visibility - Not Red!) */}
            <div className="flex items-center justify-between bg-slate-900/90 px-3.5 py-2.5 rounded-2xl border border-slate-800 shadow-sm gap-2">
              <button
                onClick={() => setSelectedTest(null)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2 border border-slate-700 shadow-md transition cursor-pointer active:scale-95 shrink-0"
              >
                <span className="text-sm font-black">←</span>
                <span>Back to All Tests</span>
              </button>
              
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs font-bold text-white truncate max-w-[180px] sm:max-w-none">
                  {selectedTest.title}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${getSubjectColorClasses(selectedTest.subjectKey).badge}`}>
                  {selectedTest.badge}
                </span>
              </div>
            </div>

            {/* Dual Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              
              {/* LEFT CARD: EXAM INFORMATION */}
              <div className="md:col-span-5 bg-[#0f172a]/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-4">
                    <span className="text-base">ⓘ</span>
                    <span>Test Overview &amp; Format</span>
                  </div>

                  {/* 3 Stat Boxes (Pleasant Colors, Non-Red Timer) */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-[#1e293b]/70 border border-slate-700/60 rounded-xl p-2.5 text-center">
                      <div className="text-lg sm:text-xl font-extrabold text-emerald-400">{selectedTest.totalMarks}</div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Marks</div>
                    </div>

                    <div className="bg-[#1e293b]/70 border border-slate-700/60 rounded-xl p-2.5 text-center">
                      <div className="text-lg sm:text-xl font-extrabold text-white">{selectedTest.totalQuestions}</div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Questions</div>
                    </div>

                    <div className="bg-[#1e293b]/70 border border-cyan-500/40 rounded-xl p-2.5 text-center relative overflow-hidden">
                      <div className="text-lg sm:text-xl font-extrabold text-cyan-400">{selectedTest.durationMinutes}m</div>
                      <div className="text-[9px] font-bold text-cyan-300 uppercase tracking-wider">Duration</div>
                    </div>
                  </div>

                  {/* Mode Selector Tabs (Blue & Emerald - Not Red) */}
                  <div className="mb-4 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
                    <div className="text-[10px] font-bold text-slate-400 mb-1 px-1">Select Attempt Mode:</div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setChosenMode("exam")}
                        className={`py-1.5 px-2 rounded-lg text-xs font-bold transition cursor-pointer border ${
                          chosenMode === "exam"
                            ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30 font-black"
                            : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                        }`}
                      >
                        ⏱ CBT Exam (Timer)
                      </button>
                      <button
                        type="button"
                        onClick={() => setChosenMode("practice")}
                        className={`py-1.5 px-2 rounded-lg text-xs font-bold transition cursor-pointer border ${
                          chosenMode === "practice"
                            ? "bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-600/30 font-black"
                            : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                        }`}
                      >
                        💡 Practice (Answers)
                      </button>
                    </div>
                  </div>

                  {/* Marking Breakdown */}
                  <div className="space-y-2 mb-5 text-xs text-slate-300">
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span>📝</span> Single Choice (SCQ)
                      </span>
                      <span className="font-bold text-blue-400">{selectedTest.scqCount} Qs</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span>☑️</span> Multi-Select (MSQ)
                      </span>
                      <span className="font-bold text-purple-400">{selectedTest.msqCount} Qs</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span>🔢</span> Numerical (NAT)
                      </span>
                      <span className="font-bold text-amber-400">{selectedTest.natCount} Qs</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span>⚖️</span> Negative Marking
                      </span>
                      <span className="font-bold text-slate-200">−0.33 / −0.66 (SCQ)</span>
                    </div>
                  </div>
                </div>

                {/* Left Card Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => handleStartExam(selectedTest, chosenMode)}
                    className="w-full py-3 btn-3d-green font-extrabold text-xs sm:text-sm rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
                  >
                    <span>{chosenMode === "exam" ? `Start CBT Exam (${selectedTest.durationMinutes}m) 🚀` : "Start Practice Session 💡"}</span>
                  </button>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setSelectedTest(null)}
                      className="text-[11px] text-slate-400 hover:text-white font-medium flex items-center gap-1 cursor-pointer transition"
                    >
                      <span>🔍</span> Explore More Tests
                    </button>
                    <span className="text-[11px] text-emerald-400 font-bold">
                      Exact GATE Marking
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD: SYLLABUS TOPICS CHECKLIST (Clean Blue/Indigo Style) */}
              <div className="md:col-span-7 bg-[#0f172a]/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <span className="text-base">⊞</span>
                      <span>Syllabus &amp; Core Concepts</span>
                    </div>
                    <span className="text-[11px] bg-blue-500/15 text-blue-300 border border-blue-500/25 font-bold px-2.5 py-0.5 rounded-full">
                      {selectedTest.topics.length} Key Topics
                    </span>
                  </div>

                  {/* Topics List: Clean, uncluttered checklist */}
                  <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
                    {selectedTest.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl text-xs font-medium transition flex items-center gap-3 bg-[#1e293b]/60 border border-slate-700/60 text-slate-200 hover:border-slate-500"
                      >
                        <span className="w-5 h-5 rounded-lg bg-blue-500/20 text-blue-300 font-black text-[10px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{topic}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tip Callout Box */}
                  <div className="mt-3.5 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                    <div className="text-slate-400 text-[11px] flex items-center justify-between">
                      <span>💡 <strong>Tip:</strong> MSQ (Multi-Select) and NAT questions carry <strong>0 negative penalty</strong>.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Topic Wise Test • SCQ / MSQ / NAT Format</span>
                  <button
                    onClick={() => handleStartExam(selectedTest, chosenMode)}
                    className="text-cyan-400 hover:text-cyan-300 font-bold cursor-pointer transition flex items-center gap-1"
                  >
                    <span>Start Test Now</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* ══════════════════════════════════════════════════════════════════
              VIEW 2: CLEAN TEST CARDS LIST WITH SUBJECT TABS & SEARCH
          ══════════════════════════════════════════════════════════════════ */
          <>
            {/* Search & Subject Tabs Bar */}
            <div className="space-y-2 mb-3 shrink-0">
              {/* Quick Search Input */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by subject or topic (e.g. Paging, TCP, B-Tree, Cache, Grammars)..."
                  className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Subject Filter Pills (Indigo/Blue Active State - Not Harsh Red) */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {subjectFilters.map((f) => {
                  const isSelected = selectedSubjectFilter === f.key;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setSelectedSubjectFilter(f.key)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-400 text-white font-bold shadow-md shadow-blue-600/25"
                          : "bg-slate-800/80 border-slate-700/70 text-slate-300 hover:text-white hover:bg-slate-700/80"
                      }`}
                    >
                      <span>{f.icon}</span>
                      <span>{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tests Grid: Clean 2-column layout (1-column on mobile) */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pr-1">
              {filteredTests.length === 0 ? (
                <div className="col-span-full py-12 text-center text-slate-400 text-xs space-y-2">
                  <div className="text-3xl">🔍</div>
                  <p className="font-semibold text-white">No tests found matching &quot;{searchQuery}&quot;</p>
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedSubjectFilter("all"); }}
                    className="text-blue-400 hover:underline font-bold"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                filteredTests.map((test) => {
                  const colorScheme = getSubjectColorClasses(test.subjectKey);
                  return (
                    <div
                      key={test.id}
                      className={`bg-slate-950/90 border border-slate-800 ${colorScheme.borderHover} p-4 rounded-2xl transition-all duration-200 flex flex-col justify-between group shadow-lg`}
                    >
                      <div>
                        {/* Top Row: Distinct Subject Color Badge + Marks/Timer */}
                        <div className="flex justify-between items-center mb-2.5">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${colorScheme.badge}`}>
                            <span>{test.subjectIcon}</span>
                            <span>{test.badge} • {test.subjectName}</span>
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              {test.totalMarks} Marks
                            </span>
                            <span className="text-[10px] text-cyan-300 font-bold bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                              ⏱ {test.durationMinutes}m
                            </span>
                          </div>
                        </div>

                        {/* Clean Prominent Title */}
                        <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-blue-300 transition mb-2.5 leading-snug">
                          {test.title}
                        </h4>

                        {/* Question Breakdown Chips (SCQ, MSQ, NAT) */}
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/25 px-2 py-0.5 rounded-md">
                            {test.scqCount} SCQ
                          </span>
                          {test.msqCount > 0 && (
                            <span className="text-[10px] font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25 px-2 py-0.5 rounded-md">
                              {test.msqCount} MSQ
                            </span>
                          )}
                          {test.natCount > 0 && (
                            <span className="text-[10px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/25 px-2 py-0.5 rounded-md">
                              {test.natCount} NAT
                            </span>
                          )}
                          <span className="text-[10px] text-slate-400 font-medium ml-auto">
                            {test.totalQuestions} Questions
                          </span>
                        </div>
                      </div>

                      {/* Action Footer */}
                      <div className="mt-3.5 pt-3 border-t border-slate-900 flex items-center justify-between gap-2">
                        <button
                          onClick={() => setSelectedTest(test)}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl cursor-pointer border border-slate-700 transition"
                        >
                          Syllabus 📋
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleStartExam(test, "practice")}
                            className="px-2.5 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-medium rounded-xl cursor-pointer border border-white/10 transition"
                            title="Practice with instant answers"
                          >
                            Practice 💡
                          </button>
                          <button
                            onClick={() => handleStartExam(test, "exam")}
                            className="px-3.5 py-1.5 btn-3d-green text-xs font-bold rounded-xl cursor-pointer shadow-md"
                          >
                            Attempt 🚀
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
