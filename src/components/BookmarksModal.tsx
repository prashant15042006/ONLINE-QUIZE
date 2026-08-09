"use client";

import React, { useState, useEffect } from "react";
import { getBookmarks, toggleBookmark, UserBookmark } from "../lib/userStore";
import { Question } from "../data/quizData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onStartBookmarkQuiz: (questions: Question[]) => void;
}

export default function BookmarksModal({ isOpen, onClose, onStartBookmarkQuiz }: Props) {
  const [bookmarks, setBookmarks] = useState<UserBookmark[]>([]);
  const [selectedExam, setSelectedExam] = useState<string>("all");

  useEffect(() => {
    if (isOpen) {
      setBookmarks(getBookmarks());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredBookmarks = bookmarks.filter((b) => {
    if (selectedExam !== "all" && b.examName !== selectedExam) return false;
    return true;
  });

  const handleRemove = (b: UserBookmark) => {
    toggleBookmark(b.question, b.examName, b.subjectName, b.chapterName);
    setBookmarks(getBookmarks());
  };

  const handlePracticeAll = () => {
    if (filteredBookmarks.length === 0) return;
    const questionsToPractice = filteredBookmarks.map((b) => b.question);
    onStartBookmarkQuiz(questionsToPractice);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 font-black flex items-center justify-center text-xl">
              🔖
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg">My Saved Bookmarks</h3>
              <p className="text-xs text-slate-400">Important & challenging questions saved for revision</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none"
          >
            <option value="all">All Exams</option>
            {Array.from(new Set(bookmarks.map((b) => b.examName))).map((ex) => (
              <option key={ex} value={ex}>{ex}</option>
            ))}
          </select>

          <button
            onClick={handlePracticeAll}
            disabled={filteredBookmarks.length === 0}
            className="px-5 py-2.5 btn-3d-blue font-bold text-xs rounded-xl disabled:opacity-40 cursor-pointer"
          >
            Practice Bookmarked Qs ({filteredBookmarks.length}) 🚀
          </button>
        </div>

        {/* Bookmark List */}
        {filteredBookmarks.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-xs bg-slate-950/60 rounded-2xl border border-slate-800">
            Bookmark any question during practice to save it here for fast revision!
          </div>
        ) : (
          <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
            {filteredBookmarks.map((b) => (
              <div key={b.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs space-y-3">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    {b.examName} • {b.subjectName} ({b.chapterName})
                  </span>

                  <button
                    onClick={() => handleRemove(b)}
                    className="text-slate-500 hover:text-rose-400 font-bold transition text-xs cursor-pointer"
                  >
                    Unbookmark ✕
                  </button>
                </div>

                <div className="font-bold text-white text-sm leading-snug">
                  {b.question.text}
                </div>

                <div className="p-3 bg-slate-900 rounded-xl text-slate-300 border border-slate-800">
                  <div className="font-bold text-emerald-400 mb-1">
                    Correct Answer: {b.question.options[b.question.correctAnswerIndex]}
                  </div>
                  <div className="text-slate-400 text-[11px]">{b.question.explanation}</div>
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
            Close Bookmarks
          </button>
        </div>
      </div>
    </div>
  );
}
