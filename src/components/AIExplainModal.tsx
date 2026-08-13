"use client";

import React, { useState } from "react";
import { Question } from "../data/quizData";
import MathRenderer from "./MathRenderer";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  question: Question | null;
  userSelectedIndex: number | null;
  examName?: string;
  subjectName?: string;
  chapterName?: string;
}

function renderTextWithMath(text: string): React.ReactNode {
  if (!text) return null;
  const parts = text.split(/(\$\$[^$]+\$\$|\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith("$$") && part.endsWith("$$"))
      return <MathRenderer key={i} math={part.slice(2, -2)} block={true} />;
    if (part.startsWith("$") && part.endsWith("$") && part.length > 2)
      return <MathRenderer key={i} math={part.slice(1, -1)} block={false} />;
    return <span key={i}>{part}</span>;
  });
}

export default function AIExplainModal({
  isOpen,
  onClose,
  question,
  userSelectedIndex,
  examName = "",
  subjectName = "",
  chapterName = "",
}: Props) {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<string>("simply");
  const [responseContent, setResponseContent] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen || !question) return null;

  const fetchAIExplanation = async (selectedMode: string) => {
    setMode(selectedMode);
    setLoading(true);
    setResponseContent(null);
    setCopied(false);

    try {
      const res = await fetch("/api/ai-explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.text,
          options: question.options,
          correctAnswerIndex: question.correctAnswerIndex,
          userSelectedIndex,
          explanation: question.explanation,
          examName,
          subjectName,
          mode: selectedMode,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setResponseContent(data.explanation);
      }
    } catch (e) {
      console.error("AI explain fetch error", e);
      setResponseContent(question.explanation || "Failed to fetch AI explanation. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (responseContent) {
      navigator.clipboard.writeText(responseContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-xl shadow-lg shadow-purple-500/20">
              🤖
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg">ExamiQ AI Tutor</h3>
              <p className="text-xs text-slate-400">Get exam-focused explanations powered by Llama 3.3 70B</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Option Mode Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          <button
            onClick={() => fetchAIExplanation("simple")}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              mode === "simple"
                ? "bg-purple-600 border-purple-400 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
            }`}
          >
            💡 Simple English
          </button>

          <button
            onClick={() => fetchAIExplanation("hindi")}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              mode === "hindi"
                ? "bg-purple-600 border-purple-400 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
            }`}
          >
            🇮🇳 Hindi (हिंदी)
          </button>

          <button
            onClick={() => fetchAIExplanation("hinglish")}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              mode === "hinglish"
                ? "bg-purple-600 border-purple-400 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
            }`}
          >
            🗣️ Hinglish
          </button>

          <button
            onClick={() => fetchAIExplanation("steps")}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              mode === "steps"
                ? "bg-purple-600 border-purple-400 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
            }`}
          >
            📐 Step-by-Step
          </button>

          <button
            onClick={() => fetchAIExplanation("reallife")}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              mode === "reallife"
                ? "bg-purple-600 border-purple-400 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
            }`}
          >
            🌍 Real-Life Example
          </button>

          <button
            onClick={() => fetchAIExplanation("wrong")}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              mode === "wrong"
                ? "bg-purple-600 border-purple-400 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
            }`}
          >
            ❓ Why Wrong Option?
          </button>
        </div>

        {/* Content View */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 min-h-[180px] text-xs leading-relaxed text-slate-300 relative">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-3">
              <div className="w-8 h-8 border-3 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-400 text-xs font-medium">Generating AI response with Groq Llama 3.3...</p>
            </div>
          ) : responseContent ? (
            <div>
              <div className="flex justify-between items-center border-b border-slate-900 pb-2 mb-3">
                <span className="text-[10px] font-black text-purple-400 uppercase tracking-wider">
                  AI Breakdown ({mode})
                </span>
                <button
                  onClick={handleCopy}
                  className="text-[10px] bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded text-slate-300 transition cursor-pointer"
                >
                  {copied ? "✓ Copied!" : "📋 Copy Solution"}
                </button>
              </div>
              <div className="space-y-2 leading-relaxed">
                {responseContent.split("\n").map((line, idx) => (
                  <p key={idx}>{renderTextWithMath(line)}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-slate-500">
              Click any of the AI explanation buttons above to get instant tailored explanation!
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition cursor-pointer"
          >
            Close AI Assistant
          </button>
        </div>
      </div>
    </div>
  );
}
