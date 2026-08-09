"use client";

import React, { useState } from "react";
import { Question } from "../data/quizData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onStartGeneratedQuiz: (questions: Question[], title: string) => void;
}

export default function AIQuizGeneratorModal({ isOpen, onClose, onStartGeneratedQuiz }: Props) {
  const [activeTab, setActiveTab] = useState<'topic' | 'notes'>('topic');
  const [topicPrompt, setTopicPrompt] = useState("");
  const [notesContent, setNotesContent] = useState("");
  const [questionCount, setQuestionCount] = useState(5);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (activeTab === 'topic' && !topicPrompt.trim()) {
      alert("Please enter a topic prompt.");
      return;
    }
    if (activeTab === 'notes' && !notesContent.trim()) {
      alert("Please paste study notes or text content.");
      return;
    }

    setIsGenerating(true);
    try {
      const res = await fetch("/api/ai-generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicText: topicPrompt,
          pdfContentText: notesContent,
          count: questionCount,
          difficulty,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.questions && data.questions.length > 0) {
          onStartGeneratedQuiz(
            data.questions,
            activeTab === 'topic' ? `AI Quiz: ${topicPrompt}` : "AI Quiz from Study Notes"
          );
          onClose();
        }
      }
    } catch (e) {
      console.error("AI quiz generation error", e);
      alert("Failed to generate quiz. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-xl shadow-lg shadow-cyan-500/20">
              ✨
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg">AI Custom Quiz Generator</h3>
              <p className="text-xs text-slate-400">Generate tailored quizzes from custom topics or study notes</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex gap-2 p-1 bg-slate-950 rounded-2xl border border-slate-800 mb-6">
          <button
            onClick={() => setActiveTab('topic')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'topic' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            🎯 Custom Topic Prompt
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'notes' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            📄 Import Notes / Text
          </button>
        </div>

        {/* Input Area */}
        {activeTab === 'topic' ? (
          <div className="mb-4">
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Topic or Concept Prompt</label>
            <input
              type="text"
              value={topicPrompt}
              onChange={(e) => setTopicPrompt(e.target.value)}
              placeholder="e.g. GATE 2026 Process Synchronization & Semaphores..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
            />
          </div>
        ) : (
          <div className="mb-4">
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Paste Study Notes / Text</label>
            <textarea
              rows={5}
              value={notesContent}
              onChange={(e) => setNotesContent(e.target.value)}
              placeholder="Paste lecture notes, text summary, or formula sheets here..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
            ></textarea>
          </div>
        )}

        {/* Difficulty & Count */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Questions Count</label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
            >
              <option value={5}>5 Questions</option>
              <option value={10}>10 Questions</option>
              <option value={15}>15 Questions</option>
            </select>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-3.5 btn-3d-blue font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Analyzing Content & Generating Quiz...</span>
            </>
          ) : (
            <span>Generate AI Quiz 🚀</span>
          )}
        </button>
      </div>
    </div>
  );
}
