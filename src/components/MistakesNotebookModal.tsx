"use client";

import React, { useState, useEffect } from "react";
import { getMistakes, removeMistake, UserMistake } from "../lib/userStore";
import { Question } from "../data/quizData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onStartMistakesQuiz: (questions: Question[]) => void;
}

export default function MistakesNotebookModal({ isOpen, onClose, onStartMistakesQuiz }: Props) {
  const [mistakes, setMistakes] = useState<UserMistake[]>([]);
  const [selectedExam, setSelectedExam] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  useEffect(() => {
    if (isOpen) {
      setMistakes(getMistakes());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredMistakes = mistakes.filter((m) => {
    if (selectedExam !== "all" && m.examName !== selectedExam) return false;
    if (selectedDifficulty !== "all" && m.question.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const handleRemove = (id: string) => {
    removeMistake(id);
    setMistakes(getMistakes());
  };

  const handlePracticeAll = () => {
    if (filteredMistakes.length === 0) return;
    const questionsToPractice = filteredMistakes.map((m) => m.question);
    onStartMistakesQuiz(questionsToPractice);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 font-black flex items-center justify-center text-xl">
              📕
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg">My Mistake Notebook</h3>
              <p className="text-xs text-slate-400">Personal revision notebook of incorrect practice questions</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Action Header & Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2">
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none"
            >
              <option value="all">All Exams</option>
              {Array.from(new Set(mistakes.map((m) => m.examName))).map((ex) => (
                <option key={ex} value={ex}>{ex}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none"
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <button
            onClick={handlePracticeAll}
            disabled={filteredMistakes.length === 0}
            className="px-5 py-2.5 btn-3d-green font-bold text-xs rounded-xl disabled:opacity-40 cursor-pointer"
          >
            Practice All Mistakes ({filteredMistakes.length}) 🚀
          </button>
        </div>

        {/* List of Mistakes */}
        {filteredMistakes.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-xs bg-slate-950/60 rounded-2xl border border-slate-800">
            🎉 No mistakes saved yet! Keep practicing to build your custom revision list.
          </div>
        ) : (
          <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
            {filteredMistakes.map((m) => (
              <div key={m.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs space-y-3">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                    {m.examName} • {m.subjectName} ({m.chapterName})
                  </span>

                  <button
                    onClick={() => handleRemove(m.id)}
                    className="text-slate-500 hover:text-rose-400 font-bold transition text-xs cursor-pointer"
                  >
                    Remove ✕
                  </button>
                </div>

                <div className="font-bold text-white text-sm leading-snug">
                  {m.question.text}
                </div>

                <div className="p-3 bg-slate-900 rounded-xl text-slate-300 border border-slate-800">
                  <div className="font-bold text-emerald-400 mb-1">
                    Correct Answer: {m.question.options[m.question.correctAnswerIndex]}
                  </div>
                  <div className="text-slate-400 text-[11px]">{m.question.explanation}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition cursor-pointer"
          >
            Close Notebook
          </button>
        </div>
      </div>
    </div>
  );
}
