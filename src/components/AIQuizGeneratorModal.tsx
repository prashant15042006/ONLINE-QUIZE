"use client";

import React, { useState } from "react";
import { Question } from "../data/quizData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onStartGeneratedQuiz: (questions: Question[], title: string) => void;
}

const EXAM_OPTIONS = [
  { value: "GATE CS", label: "GATE CS" },
  { value: "GATE ECE", label: "GATE ECE" },
  { value: "JEE Advanced", label: "JEE Advanced" },
  { value: "JEE Mains", label: "JEE Mains" },
  { value: "NEET", label: "NEET" },
  { value: "SSC CGL", label: "SSC CGL" },
  { value: "UPSC", label: "UPSC" },
];

const TOPIC_EXAMPLES: Record<string, string[]> = {
  "GATE CS": [
    "Process Scheduling — Round Robin, SJF, FCFS",
    "Dijkstra's and Bellman-Ford shortest path algorithms",
    "Database Normalization — 2NF, 3NF, BCNF",
    "Cache memory — mapping, hit rate, EMAT",
    "Context-Free Grammars and Pushdown Automata",
    "Dynamic Programming — LCS, Knapsack, Matrix Chain",
  ],
  "JEE Advanced": [
    "Rotational mechanics — moment of inertia, torque",
    "Electrochemistry — Nernst equation, cell potential",
    "Complex numbers and quadratic equations",
    "Integration by parts and definite integrals",
  ],
  "NEET": [
    "Meiosis and crossing over",
    "Human excretory system — nephron, kidney",
    "Photosynthesis — light and dark reactions",
    "Mendelian genetics and laws of inheritance",
  ],
  "SSC CGL": [
    "Profit and loss with discount",
    "Time, speed and distance — trains",
    "SI and CI problems",
    "Blood relations and logical reasoning",
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
  const [generatedCount, setGeneratedCount] = useState(0);

  if (!isOpen) return null;

  const examples = TOPIC_EXAMPLES[examName] || TOPIC_EXAMPLES["GATE CS"];

  const handleGenerate = async () => {
    if (activeTab === 'topic' && !topic.trim()) {
      setError("Please enter a topic or concept.");
      return;
    }
    if (activeTab === 'notes' && !notesContent.trim()) {
      setError("Please paste study notes or content.");
      return;
    }
    setError("");
    setIsGenerating(true);
    setGeneratedCount(0);

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
        }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      if (!data.questions || data.questions.length === 0) {
        setError("AI couldn't generate questions. Please try a more specific topic.");
        return;
      }

      setGeneratedCount(data.questions.length);

      setTimeout(() => {
        onStartGeneratedQuiz(
          data.questions,
          activeTab === 'topic'
            ? `AI Quiz: ${topic} (${examName})`
            : `AI Quiz from Notes (${examName})`
        );
        onClose();
      }, 600);

    } catch (e) {
      console.error("AI quiz generation error", e);
      setError("Failed to generate quiz. Check your internet connection and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md p-0 sm:p-4 animate-fadeIn">
      <div className="bg-slate-900 border-t sm:border border-slate-700 rounded-t-3xl sm:rounded-3xl max-w-xl w-full p-5 sm:p-6 text-slate-100 shadow-2xl relative max-h-[85vh] sm:max-h-[90vh] overflow-y-auto animate-bottom-sheet sm:animate-none">
        <div className="w-12 h-1.5 bg-slate-700/80 rounded-full mx-auto mb-3 sm:hidden" />
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-violet-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">
              ✨
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">AI Quiz Generator</h3>
              <p className="text-[11px] text-slate-400">Powered by Llama 3.3 70B via Groq</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Exam Selector */}
        <div className="mb-4">
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Exam Type
          </label>
          <div className="flex flex-wrap gap-2">
            {EXAM_OPTIONS.map(opt => (
              <button
                key={opt.value}
                onClick={() => setExamName(opt.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                  examName === opt.value
                    ? "bg-violet-600 border-violet-400 text-white"
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mode Tabs */}
        <div className="flex gap-2 p-1 bg-slate-950 rounded-2xl border border-slate-800 mb-5">
          <button
            onClick={() => { setActiveTab('topic'); setError(""); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'topic' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            🎯 Topic / Concept
          </button>
          <button
            onClick={() => { setActiveTab('notes'); setError(""); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'notes' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            📄 From My Notes
          </button>
        </div>

        {/* Topic Input */}
        {activeTab === 'topic' ? (
          <div className="mb-4">
            <label className="block text-xs font-bold text-slate-300 mb-2">Topic or Concept</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder={`e.g. ${examples[0]}`}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-violet-500 placeholder:text-slate-600"
            />
            {/* Example chips */}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {examples.slice(0, 3).map((ex, i) => (
                <button
                  key={i}
                  onClick={() => setTopic(ex)}
                  className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 px-2 py-1 rounded-lg border border-slate-700 transition cursor-pointer"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <label className="block text-xs font-bold text-slate-300 mb-2">
              Paste Study Notes / Textbook Content
            </label>
            <textarea
              rows={6}
              value={notesContent}
              onChange={(e) => setNotesContent(e.target.value)}
              placeholder="Paste your notes, chapter summary, or any text here. AI will generate questions based on this content..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-violet-500 resize-none placeholder:text-slate-600"
            />
            <p className="text-[10px] text-slate-600 mt-1">
              {notesContent.length} characters · Max 4000 characters used
            </p>
          </div>
        )}

        {/* Count & Difficulty */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Difficulty
            </label>
            <div className="flex gap-1">
              {(["easy", "medium", "hard"] as const).map(d => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`flex-1 py-2 rounded-xl text-[11px] font-bold border transition cursor-pointer capitalize ${
                    difficulty === d
                      ? d === "easy" ? "bg-emerald-600 border-emerald-400 text-white"
                        : d === "medium" ? "bg-amber-600 border-amber-400 text-white"
                        : "bg-rose-600 border-rose-400 text-white"
                      : "bg-slate-800 border-slate-700 text-slate-400"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Questions
            </label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none cursor-pointer"
            >
              <option value={3}>3 Questions</option>
              <option value={5}>5 Questions</option>
              <option value={8}>8 Questions</option>
              <option value={10}>10 Questions</option>
            </select>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 text-xs text-rose-400">
            ⚠️ {error}
          </div>
        )}

        {/* Success flash */}
        {generatedCount > 0 && (
          <div className="mb-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3 text-xs text-emerald-400">
            ✅ {generatedCount} questions generated! Starting quiz...
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-4 btn-3d-purple font-black text-sm rounded-2xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Generating {questionCount} questions with Groq AI...</span>
            </>
          ) : (
            <span>⚡ Generate {questionCount} AI Questions</span>
          )}
        </button>

        <p className="text-[10px] text-slate-600 text-center mt-3">
          Questions are generated by AI and may contain errors. Always verify with official sources.
        </p>
      </div>
    </div>
  );
}
