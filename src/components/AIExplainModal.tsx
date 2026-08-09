"use client";

import React, { useState } from "react";
import { Question } from "../data/quizData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  question: Question | null;
  userSelectedIndex: number | null;
  examName?: string;
  subjectName?: string;
  chapterName?: string;
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
  const [response, setResponse] = useState<{ title: string; content: string } | null>(null);

  if (!isOpen || !question) return null;

  const fetchAIExplanation = async (selectedMode: string) => {
    setMode(selectedMode);
    setLoading(true);
    try {
      const res = await fetch("/api/ai-explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionText: question.text,
          options: question.options,
          correctAnswerIndex: question.correctAnswerIndex,
          userSelectedIndex,
          mode: selectedMode,
          subject: subjectName,
          topic: chapterName,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setResponse({ title: data.title, content: data.content });
      }
    } catch (e) {
      console.error("AI explain fetch error", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-xl shadow-lg shadow-purple-500/20">
              🤖
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg">AI Learning Assistant</h3>
              <p className="text-xs text-slate-400">Ask AI to explain this question in your preferred style</p>
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
            onClick={() => fetchAIExplanation("simply")}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              mode === "simply"
                ? "bg-purple-600 border-purple-400 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
            }`}
          >
            💡 Explain Simply
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
            onClick={() => fetchAIExplanation("step_by_step")}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              mode === "step_by_step"
                ? "bg-purple-600 border-purple-400 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
            }`}
          >
            📐 Step-by-Step
          </button>

          <button
            onClick={() => fetchAIExplanation("real_life")}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              mode === "real_life"
                ? "bg-purple-600 border-purple-400 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
            }`}
          >
            🌍 Real-Life Example
          </button>

          <button
            onClick={() => fetchAIExplanation("why_wrong")}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              mode === "why_wrong"
                ? "bg-purple-600 border-purple-400 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
            }`}
          >
            ❓ Why Answer Wrong?
          </button>
        </div>

        {/* Content View */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 min-h-[160px] text-xs leading-relaxed text-slate-300">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-3">
              <div className="w-8 h-8 border-3 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-400 text-xs font-medium">Generating AI explanation...</p>
            </div>
          ) : response ? (
            <div>
              <h4 className="font-extrabold text-purple-400 text-sm mb-3 border-b border-slate-900 pb-2">
                {response.title}
              </h4>
              <div className="space-y-2">
                {response.content.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              Select any of the AI explanation styles above to get an instant tailored breakdown!
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
