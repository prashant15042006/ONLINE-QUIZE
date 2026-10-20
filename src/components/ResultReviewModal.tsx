"use client";

import React, { useState } from "react";
import { Question } from "../data/quizData";
import MathRenderer from "./MathRenderer";

interface UserAnswer {
  selectedOptionIndex: number | null;
  selectedOptionIndices?: number[];
  natValue?: string;
  isMarkedForReview?: boolean;
}

interface Props {
  questions: Question[];
  userAnswers: Record<string, UserAnswer>;
  onClose: () => void;
}

function getUserSelected(ans: UserAnswer | undefined): number[] {
  if (!ans) return [];
  if (Array.isArray(ans.selectedOptionIndices) && ans.selectedOptionIndices.length > 0)
    return ans.selectedOptionIndices;
  if (ans.selectedOptionIndex !== null && ans.selectedOptionIndex !== undefined)
    return [ans.selectedOptionIndex];
  return [];
}

function checkIsCorrect(q: Question, ans: UserAnswer | undefined): boolean {
  if (!ans) return false;

  if (q.questionType === "NAT") {
    if (!ans.natValue || ans.natValue.trim() === "") return false;
    const userNum = parseFloat(ans.natValue.trim());
    if (isNaN(userNum)) return false;
    let targetNum: number | null = null;
    if (q.natAnswer !== undefined && q.natAnswer !== null) {
      targetNum = typeof q.natAnswer === "number" ? q.natAnswer : parseFloat(String(q.natAnswer).trim());
    } else if (q.options && q.options.length > q.correctAnswerIndex) {
      targetNum = parseFloat(q.options[q.correctAnswerIndex].trim());
    }
    if (targetNum !== null && !isNaN(targetNum)) {
      const tol = q.natTolerance ?? 0.05;
      return Math.abs(userNum - targetNum) <= tol;
    }
    return false;
  }

  const sel = getUserSelected(ans);
  if (sel.length === 0) return false;
  const correct = (q.correctAnswerIndices && q.correctAnswerIndices.length > 0)
    ? q.correctAnswerIndices
    : [q.correctAnswerIndex];
  if (sel.length !== correct.length) return false;
  return sel.every(val => correct.includes(val));
}

function isQAnswerSkipped(q: Question, ans: UserAnswer | undefined): boolean {
  if (!ans) return true;
  if (q.questionType === "NAT") {
    return !ans.natValue || ans.natValue.trim() === "";
  }
  return getUserSelected(ans).length === 0 && (!ans.natValue || ans.natValue.trim() === "");
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

export default function ResultReviewModal({ questions, userAnswers, onClose }: Props) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "correct" | "wrong" | "skipped">("all");
  const [reviewZoomUrl, setReviewZoomUrl] = useState<string | null>(null);

  const filtered = questions.filter((q) => {
    const ans = userAnswers[q.id];
    const isCorr = checkIsCorrect(q, ans);
    const isSkip = isQAnswerSkipped(q, ans);
    if (filter === "correct") return isCorr;
    if (filter === "wrong") return !isSkip && !isCorr;
    if (filter === "skipped") return isSkip;
    return true;
  });

  const counts = {
    correct: questions.filter(q => checkIsCorrect(q, userAnswers[q.id])).length,
    wrong: questions.filter(q => {
      const a = userAnswers[q.id];
      return !isQAnswerSkipped(q, a) && !checkIsCorrect(q, a);
    }).length,
    skipped: questions.filter(q => isQAnswerSkipped(q, userAnswers[q.id])).length,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-3xl max-h-[95vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 shrink-0">
          <div>
            <h3 className="text-lg font-black text-white">📋 Question-by-Question Review</h3>
            <p className="text-xs text-slate-400 mt-0.5">{questions.length} questions · Tap any to expand solution</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer transition font-bold">✕</button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 px-5 pt-4 shrink-0">
          {(["all", "correct", "wrong", "skipped"] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer capitalize ${
                filter === f
                  ? f === "correct" ? "bg-emerald-600 border-emerald-400 text-white"
                    : f === "wrong" ? "bg-rose-600 border-rose-400 text-white"
                    : f === "skipped" ? "bg-amber-600 border-amber-400 text-white"
                    : "bg-blue-600 border-blue-400 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-400"
              }`}
            >
              {f === "all" ? `All (${questions.length})` : f === "correct" ? `✓ ${counts.correct}` : f === "wrong" ? `✗ ${counts.wrong}` : `— ${counts.skipped}`}
            </button>
          ))}
        </div>

        {/* Question List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {filtered.map((q, displayIdx) => {
            const globalIdx = questions.indexOf(q);
            const ans = userAnswers[q.id];
            const isCorrect = checkIsCorrect(q, ans);
            const userSel = getUserSelected(ans);
            const isSkipped = isQAnswerSkipped(q, ans);
            const isExpanded = expandedIdx === globalIdx;

            const correctList = (q.correctAnswerIndices && q.correctAnswerIndices.length > 0)
              ? q.correctAnswerIndices
              : [q.correctAnswerIndex];

            const userText = q.questionType === "NAT"
              ? (ans?.natValue ? ans.natValue : "Not Answered")
              : userSel.map(i => `${String.fromCharCode(65 + i)}`).join(", ");
            const correctText = q.questionType === "NAT"
              ? (q.natAnswer !== undefined ? String(q.natAnswer) : (q.options && q.options[q.correctAnswerIndex] ? q.options[q.correctAnswerIndex] : "Refer solution"))
              : correctList.map(i => `${String.fromCharCode(65 + i)}`).join(", ");

            const rowColor = isSkipped
              ? "border-amber-500/30 bg-amber-500/5"
              : isCorrect
              ? "border-emerald-500/30 bg-emerald-500/5"
              : "border-rose-500/30 bg-rose-500/5";

            return (
              <div key={q.id} className={`border rounded-2xl overflow-hidden transition ${rowColor}`}>
                {/* Question Row */}
                <button
                  onClick={() => setExpandedIdx(isExpanded ? null : globalIdx)}
                  className="w-full p-4 text-left flex items-start gap-3 cursor-pointer hover:bg-white/5 transition"
                >
                  {/* Status icon */}
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 mt-0.5 ${
                    isSkipped ? "bg-amber-500/20 text-amber-400" : isCorrect ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                  }`}>
                    {isSkipped ? "—" : isCorrect ? "✓" : "✗"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-slate-500">Q{globalIdx + 1}</span>
                      {q.questionType === "MSQ" && (
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-black border border-amber-500/30">MSQ</span>
                      )}
                      {q.concept && <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded font-bold">{q.concept}</span>}
                      {q.year && <span className="text-[10px] text-slate-600">{q.year}</span>}
                    </div>
                    <p className="text-sm font-semibold text-slate-200 line-clamp-2 leading-snug">
                      {renderTextWithMath(q.text)}
                    </p>
                    {!isSkipped && (
                      <div className="flex items-center gap-3 mt-2 text-xs">
                        <span className={`font-bold ${isCorrect ? "text-emerald-400" : "text-rose-400"}`}>
                          Your: {userText}
                        </span>
                        {!isCorrect && (
                          <span className="text-emerald-400 font-bold">
                            Correct: {correctText}
                          </span>
                        )}
                      </div>
                    )}
                    {isSkipped && (
                      <div className="mt-1 text-xs text-amber-400 font-bold">
                        Correct: {correctText}
                      </div>
                    )}
                  </div>
                  <span className="text-slate-600 text-xs shrink-0">{isExpanded ? "▲" : "▼"}</span>
                </button>

                {/* Expanded Solution */}
                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-white/5">
                    <div className="mt-3 space-y-2">

                      {/* Figure / Diagram Image */}
                      {q.imageUrl && (
                        <div className="flex flex-col items-center justify-center mb-2">
                          <div 
                            onClick={() => setReviewZoomUrl(q.imageUrl!)}
                            className="bg-white rounded-xl p-2 border border-indigo-400/40 max-w-full overflow-hidden cursor-zoom-in group hover:border-cyan-400 transition flex flex-col items-center"
                            title="Tap / Click to enlarge"
                          >
                            {q.imageUrl.trim().startsWith('<svg') ? (
                              <div
                                dangerouslySetInnerHTML={{ __html: q.imageUrl }}
                                aria-label={q.imageAlt ?? 'Question diagram'}
                              />
                            ) : (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={q.imageUrl}
                                alt={q.imageAlt ?? 'Question diagram'}
                                className="max-w-full max-h-48 sm:max-h-56 object-contain mx-auto rounded transition group-hover:scale-[1.01]"
                              />
                            )}
                            <span className="text-[10px] text-slate-500 mt-1 flex items-center gap-1 group-hover:text-cyan-600 transition">
                              <span>🔍</span> Tap to enlarge
                            </span>
                          </div>
                        </div>
                      )}

                      {/* All options */}
                      <div className="space-y-1.5">
                        {q.options.map((opt, oi) => {
                          const isCorrectOpt = correctList.includes(oi);
                          const isSelectedOpt = userSel.includes(oi);
                          return (
                            <div key={oi} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs ${
                              isCorrectOpt ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                              : isSelectedOpt && !isCorrectOpt ? "bg-rose-500/15 border border-rose-500/30 text-rose-300"
                              : "bg-slate-800/50 border border-slate-800 text-slate-500"
                            }`}>
                              <span className="font-black shrink-0">{String.fromCharCode(65 + oi)}.</span>
                              <span className="flex-1">{renderTextWithMath(opt)}</span>
                              {isCorrectOpt && <span className="text-emerald-400 font-black">✓</span>}
                              {isSelectedOpt && !isCorrectOpt && <span className="text-rose-400 font-black">✗</span>}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {q.explanation && (
                        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 mt-2">
                          <div className="text-[10px] font-black text-cyan-400 uppercase tracking-wider mb-2">💡 Solution</div>
                          <div className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                            {q.explanation}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <div className="text-4xl mb-3">🎉</div>
              <p className="font-bold">No questions in this category!</p>
            </div>
          )}
        </div>
      </div>

      {/* Review Lightbox Zoom Modal */}
      {reviewZoomUrl && (
        <div
          onClick={() => setReviewZoomUrl(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 animate-fade-in cursor-zoom-out"
        >
          <div className="max-w-4xl w-full flex flex-col items-center gap-3" onClick={e => e.stopPropagation()}>
            <div className="w-full flex items-center justify-between text-white text-xs px-2">
              <span className="font-bold text-slate-300">Enlarged Question Diagram</span>
              <button
                onClick={() => setReviewZoomUrl(null)}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition flex items-center gap-1 cursor-pointer"
              >
                <span>✕</span> Close
              </button>
            </div>
            <div className="bg-white rounded-2xl p-3 sm:p-4 border-2 border-cyan-400/60 shadow-2xl max-w-full max-h-[82vh] overflow-auto flex items-center justify-center">
              {reviewZoomUrl.trim().startsWith('<svg') ? (
                <div className="w-full" dangerouslySetInnerHTML={{ __html: reviewZoomUrl }} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={reviewZoomUrl} alt="Enlarged diagram" className="max-w-full max-h-[75vh] w-auto h-auto object-contain select-none" />
              )}
            </div>
            <span className="text-[11px] text-slate-400">Click anywhere outside or ✕ button to close</span>
          </div>
        </div>
      )}
    </div>
  );
}
