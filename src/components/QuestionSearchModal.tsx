"use client";

import React, { useState, useMemo } from "react";
import { EXAMS_DATA, Question, Subject } from "../data/quizData";
import MathRenderer from "./MathRenderer";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuestion: (q: Question, subjectName: string) => void;
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

export default function QuestionSearchModal({ isOpen, onClose, onSelectQuestion }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExamId, setSelectedExamId] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  // Collect all questions from EXAMS_DATA
  const allQuestionsWithContext = useMemo(() => {
    const list: { question: Question; examName: string; subjectName: string; chapterName: string }[] = [];

    EXAMS_DATA.forEach((exam) => {
      let subjects: Subject[] = [];
      if (exam.branches && exam.branches.length > 0) {
        exam.branches.forEach((b) => subjects.push(...b.subjects));
      } else if (exam.subjects) {
        subjects.push(...exam.subjects);
      }

      subjects.forEach((subj) => {
        subj.chapters.forEach((chap) => {
          chap.questions.forEach((q) => {
            list.push({
              question: q,
              examName: exam.name,
              subjectName: subj.name,
              chapterName: chap.name,
            });
          });
        });
      });
    });

    return list;
  }, []);

  // Filter logic
  const filtered = useMemo(() => {
    return allQuestionsWithContext.filter((item) => {
      const q = item.question;
      const term = searchTerm.toLowerCase();

      const matchesSearch =
        !term ||
        q.text.toLowerCase().includes(term) ||
        (q.concept && q.concept.toLowerCase().includes(term)) ||
        (q.year && q.year.toLowerCase().includes(term)) ||
        item.subjectName.toLowerCase().includes(term) ||
        item.chapterName.toLowerCase().includes(term);

      const matchesExam = selectedExamId === "all" || item.examName.toLowerCase() === selectedExamId.toLowerCase();
      const matchesDiff = selectedDifficulty === "all" || q.difficulty === selectedDifficulty;

      return matchesSearch && matchesExam && matchesDiff;
    });
  }, [allQuestionsWithContext, searchTerm, selectedExamId, selectedDifficulty]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
              🔍
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">Question Bank Search & Explorer</h3>
              <p className="text-[11px] text-slate-400">Search 200+ PYQ questions across subjects and topics</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Search & Filters */}
        <div className="space-y-3 mb-4 shrink-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search concept, formula, keyword, or year (e.g. Eigenvalues, GATE 2022, Dijkstra)..."
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
          />

          <div className="flex flex-wrap gap-2 text-xs">
            <select
              value={selectedExamId}
              onChange={(e) => setSelectedExamId(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-300 focus:outline-none"
            >
              <option value="all">All Exams</option>
              <option value="gate">GATE</option>
              <option value="jee">JEE</option>
              <option value="neet">NEET</option>
              <option value="ssc cgl">SSC CGL</option>
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-300 focus:outline-none"
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <div className="ml-auto text-[11px] font-bold text-slate-400 flex items-center">
              Found {filtered.length} questions
            </div>
          </div>
        </div>

        {/* Question List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-4 transition space-y-2 group"
            >
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    {item.examName} • {item.subjectName}
                  </span>
                  <span className="text-slate-500">{item.chapterName}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.question.year && (
                    <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded text-[10px]">
                      {item.question.year}
                    </span>
                  )}
                  <span className={`capitalize font-bold px-2 py-0.5 rounded text-[10px] ${
                    item.question.difficulty === "easy" ? "text-emerald-400 bg-emerald-500/10" :
                    item.question.difficulty === "medium" ? "text-amber-400 bg-amber-500/10" :
                    "text-rose-400 bg-rose-500/10"
                  }`}>
                    {item.question.difficulty}
                  </span>
                </div>
              </div>

              <div className="text-sm font-semibold text-slate-200">
                {renderTextWithMath(item.question.text)}
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-[11px] text-slate-500">
                  Concept: {item.question.concept || "General"}
                </span>
                <button
                  onClick={() => {
                    onSelectQuestion(item.question, item.subjectName);
                    onClose();
                  }}
                  className="px-3 py-1 btn-3d-blue text-[11px] font-bold rounded-lg cursor-pointer"
                >
                  Practice Question →
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              🔍 No matching questions found for "{searchTerm}". Try a different keyword.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
