"use client";

import React, { useState, useEffect } from "react";
import { Question } from "../data/quizData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onStartGeneratedQuiz: (questions: Question[], title: string) => void;
}

const EXAM_OPTIONS = [
  { value: "GATE CS", label: "GATE CS", icon: "💻" },
  { value: "GATE ECE", label: "GATE ECE", icon: "⚡" },
  { value: "JEE Advanced", label: "JEE Advanced", icon: "📐" },
  { value: "JEE Mains", label: "JEE Mains", icon: "🧪" },
  { value: "NEET", label: "NEET", icon: "🧬" },
  { value: "SSC CGL", label: "SSC CGL", icon: "📊" },
  { value: "UPSC CSAT", label: "UPSC CSAT", icon: "🏛️" },
];

const TOPIC_EXAMPLES: Record<string, string[]> = {
  "GATE CS": [
    "CPU Scheduling & Banker's Algorithm",
    "LR(0), SLR(1), LALR(1) Parsing",
    "B-Trees, AVL Trees & Hashing",
    "Dijkstra, Kruskal & Bellman-Ford",
    "Database Normalization & BCNF",
    "TCP Congestion Control & Subnetting",
    "Paging, Virtual Memory & TLB",
  ],
  "GATE ECE": [
    "Op-Amps & Active Filters",
    "Fourier & Laplace Transforms",
    "MOSFET & BJT Small Signal Analysis",
    "Digital Modulation Schemes",
  ],
  "JEE Advanced": [
    "Rotational Mechanics & Moment of Inertia",
    "Electrochemistry & Nernst Equation",
    "Definite Integrals & Area Under Curves",
    "Thermodynamics & Kinetic Theory of Gases",
  ],
  "JEE Mains": [
    "Chemical Equilibrium & Le Chatelier's",
    "Current Electricity & Kirchhoff's Laws",
    "Quadratic Equations & Complex Numbers",
    "Coordinate Geometry — Conic Sections",
  ],
  "NEET": [
    "Mendelian Genetics & Inheritance",
    "Photosynthesis in Higher Plants",
    "Human Circulatory & Excretory System",
    "Biomolecules — Proteins & Nucleic Acids",
  ],
  "SSC CGL": [
    "Profit, Loss & Successive Discount",
    "Time, Speed & Distance — Trains",
    "Compound Interest vs Simple Interest",
    "Syllogisms & Logical Venn Diagrams",
  ],
  "UPSC CSAT": [
    "Reading Comprehension & Critical Inferences",
    "Permutations, Combinations & Probability",
    "Data Sufficiency & Analytical Reasoning",
  ],
};

export default function AIQuizGeneratorModal({ isOpen, onClose, onStartGeneratedQuiz }: Props) {
  const [activeTab, setActiveTab] = useState<'topic' | 'notes'>('topic');
  const [topic, setTopic] = useState("");
  const [notesContent, setNotesContent] = useState("");
  const [questionCount, setQuestionCount] = useState(5);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [examName, setExamName] = useState("GATE CS");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [sourceInfo, setSourceInfo] = useState<string | null>(null);

  // Custom API key state (optional)
  const [showKeyConfig, setShowKeyConfig] = useState(false);
  const [customKey, setCustomKey] = useState("");
  const [keyProvider, setKeyProvider] = useState<"gemini" | "groq">("gemini");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedKey = localStorage.getItem("examiq_custom_ai_key") || "";
      const savedProvider = (localStorage.getItem("examiq_custom_ai_provider") as "gemini" | "groq") || "gemini";
      setCustomKey(savedKey);
      setKeyProvider(savedProvider);
    }
  }, []);

  const saveCustomKey = (key: string, prov: "gemini" | "groq") => {
    setCustomKey(key);
    setKeyProvider(prov);
    if (typeof window !== "undefined") {
      localStorage.setItem("examiq_custom_ai_key", key.trim());
      localStorage.setItem("examiq_custom_ai_provider", prov);
    }
  };

  if (!isOpen) return null;

  const examples = TOPIC_EXAMPLES[examName] || TOPIC_EXAMPLES["GATE CS"];

  const handleGenerate = async () => {
    if (activeTab === 'topic' && !topic.trim()) {
      setError("Please enter a topic or concept to generate questions.");
      return;
    }
    if (activeTab === 'notes' && !notesContent.trim()) {
      setError("Please paste study notes or reference text.");
      return;
    }
    setError("");
    setSourceInfo(null);
    setIsGenerating(true);

    try {
      const res = await fetch("/api/ai-generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topic.trim(),
          notes: notesContent.trim(),
          examName,
          count: questionCount,
          difficulty,
          apiKey: customKey.trim(),
          provider: keyProvider,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server status ${res.status}`);
      }

      const data = await res.json();

      if (data.error && (!data.questions || data.questions.length === 0)) {
        setError(data.error);
        setIsGenerating(false);
        return;
      }

      if (!data.questions || data.questions.length === 0) {
        setError("Could not generate questions. Try another specific topic.");
        setIsGenerating(false);
        return;
      }

      setSourceInfo(
        data.source === "ai"
          ? "Generated directly with AI"
          : "Matched with Curated Official Question Bank"
      );

      // Brief delay to show user confirmation then launch
      setTimeout(() => {
        const title =
          activeTab === 'topic'
            ? `AI Quiz: ${topic.trim()} (${examName})`
            : `AI Quiz from Notes (${examName})`;
        onStartGeneratedQuiz(data.questions, title);
        onClose();
      }, 700);

    } catch (e) {
      console.error("AI quiz generation error:", e);
      setError("Network or server connection issue. Please check your internet and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-md p-0 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border-t sm:border border-slate-700/80 rounded-t-3xl sm:rounded-3xl max-w-xl w-full p-5 sm:p-6 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 bg-slate-700/80 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-xl shadow-lg">
              ✨
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base flex items-center gap-2">
                AI Smart Quiz Generator
                <span className="text-[10px] font-black uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-full">
                  PRO
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Instant customized MCQs with step-by-step solutions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer text-xs font-bold"
          >
            ✕
          </button>
        </div>

        {/* Exam Type Selector */}
        <div className="mb-4">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
            1. Select Target Exam
          </label>
          <div className="flex flex-wrap gap-1.5">
            {EXAM_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setExamName(opt.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center gap-1.5 ${
                  examName === opt.value
                    ? "bg-violet-600 border-violet-400 text-white shadow-md shadow-violet-600/30 font-black"
                    : "bg-slate-800/80 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                }`}
              >
                <span>{opt.icon}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mode Tabs */}
        <div className="flex gap-1.5 p-1 bg-slate-950 rounded-2xl border border-slate-800 mb-4">
          <button
            onClick={() => { setActiveTab('topic'); setError(""); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'topic' ? 'bg-violet-600 text-white font-black shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🎯</span>
            <span>By Topic / Concept</span>
          </button>
          <button
            onClick={() => { setActiveTab('notes'); setError(""); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'notes' ? 'bg-violet-600 text-white font-black shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>📄</span>
            <span>From Notes / Text</span>
          </button>
        </div>

        {/* Input Body */}
        {activeTab === 'topic' ? (
          <div className="mb-4">
            <label className="block text-[11px] font-bold text-slate-300 mb-1.5">
              Topic or Syllabus Keyword:
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder={`e.g. ${examples[0]}`}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-violet-500 placeholder:text-slate-600"
            />
            {/* Quick Topic Chips */}
            <div className="mt-2">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">
                ⚡ Quick Select Suggestions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {examples.slice(0, 4).map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => setTopic(ex)}
                    className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700/80 transition cursor-pointer hover:border-violet-400 text-left"
                  >
                    + {ex}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <label className="block text-[11px] font-bold text-slate-300 mb-1.5">
              Paste Notes or Textbook Summary:
            </label>
            <textarea
              rows={5}
              value={notesContent}
              onChange={(e) => setNotesContent(e.target.value)}
              placeholder="Paste your classroom notes, formulas, or study material here. AI will craft specialized questions from this text..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-slate-100 focus:outline-none focus:border-violet-500 resize-none placeholder:text-slate-600"
            />
            <p className="text-[10px] text-slate-500 mt-1">
              {notesContent.length} characters entered · Supports up to 4,500 characters
            </p>
          </div>
        )}

        {/* Count & Difficulty */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
              Difficulty
            </label>
            <div className="flex gap-1">
              {(["easy", "medium", "hard"] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`flex-1 py-1.5 rounded-xl text-[11px] font-bold border transition cursor-pointer capitalize ${
                    difficulty === d
                      ? d === "easy"
                        ? "bg-emerald-600 border-emerald-400 text-white font-black"
                        : d === "medium"
                        ? "bg-amber-600 border-amber-400 text-white font-black"
                        : "bg-rose-600 border-rose-400 text-white font-black"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
              Number of Questions
            </label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-100 focus:outline-none cursor-pointer"
            >
              <option value={3}>3 Questions (Quick Practice)</option>
              <option value={5}>5 Questions (Standard)</option>
              <option value={8}>8 Questions (In-Depth)</option>
              <option value={10}>10 Questions (Complete Test)</option>
              <option value={15}>15 Questions (Mastery Drill)</option>
            </select>
          </div>
        </div>

        {/* Optional Custom API Key accordion */}
        <div className="mb-4 pt-2 border-t border-slate-800/80">
          <button
            type="button"
            onClick={() => setShowKeyConfig(!showKeyConfig)}
            className="text-[10px] font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1.5 cursor-pointer"
          >
            <span>⚙️ {showKeyConfig ? "Hide" : "Optional:"} Use your own free API Key (Gemini / Groq)</span>
          </button>

          {showKeyConfig && (
            <div className="mt-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => saveCustomKey(customKey, "gemini")}
                  className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold ${
                    keyProvider === "gemini" ? "bg-blue-600/30 border-blue-400 text-blue-300" : "border-slate-700 text-slate-400"
                  }`}
                >
                  Google Gemini (Free)
                </button>
                <button
                  type="button"
                  onClick={() => saveCustomKey(customKey, "groq")}
                  className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold ${
                    keyProvider === "groq" ? "bg-orange-600/30 border-orange-400 text-orange-300" : "border-slate-700 text-slate-400"
                  }`}
                >
                  Groq Cloud (Free)
                </button>
              </div>
              <input
                type="password"
                value={customKey}
                onChange={(e) => saveCustomKey(e.target.value, keyProvider)}
                placeholder={`Paste your ${keyProvider === "gemini" ? "Gemini" : "Groq"} API key here`}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none placeholder:text-slate-600"
              />
              <p className="text-[9px] text-slate-500">
                Key is stored only in your local browser storage. If left blank, server defaults and the curated question bank will be used.
              </p>
            </div>
          )}
        </div>

        {/* Error Notification */}
        {error && (
          <div className="mb-3 bg-rose-500/10 border border-rose-500/30 rounded-xl px-3.5 py-2.5 text-xs text-rose-300">
            ⚠️ {error}
          </div>
        )}

        {/* Success / Status Message */}
        {sourceInfo && (
          <div className="mb-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-xs text-emerald-300 flex items-center gap-2">
            <span>✅</span>
            <span>{sourceInfo}! Launching your exam now...</span>
          </div>
        )}

        {/* Generate Launch Button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-3.5 btn-3d-purple font-black text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-xl"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Generating {questionCount} questions...</span>
            </>
          ) : (
            <span>🚀 Generate &amp; Start {questionCount} Questions</span>
          )}
        </button>
      </div>
    </div>
  );
}
