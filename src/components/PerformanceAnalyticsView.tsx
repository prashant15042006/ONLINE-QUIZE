"use client";

import React, { useState, useEffect } from "react";
import { calculatePerformanceAnalytics, PerformanceAnalytics } from "../lib/userStore";

interface Props {
  onStartTargetedPractice: (topic: string, subject: string) => void;
}

export default function PerformanceAnalyticsView({ onStartTargetedPractice }: Props) {
  const [analytics, setAnalytics] = useState<PerformanceAnalytics | null>(null);

  useEffect(() => {
    setAnalytics(calculatePerformanceAnalytics());
  }, []);

  if (!analytics) return null;

  return (
    <div className="duo-card p-6 sm:p-8 space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-wider">
            Detailed Performance Diagnostics
          </span>
          <h2 className="text-xl font-extrabold text-white mt-2">Personal Study Analytics</h2>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-emerald-400">{analytics.overallAccuracy}%</div>
          <div className="text-[10px] text-slate-400 font-bold uppercase">Overall Accuracy</div>
        </div>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
          <div className="text-xs font-bold text-slate-400 mb-1">Total Solved</div>
          <div className="text-xl font-black text-white">{analytics.totalSolved} Qs</div>
        </div>

        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
          <div className="text-xs font-bold text-slate-400 mb-1">Quizzes Completed</div>
          <div className="text-xl font-black text-cyan-400">{analytics.totalQuizzes}</div>
        </div>

        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
          <div className="text-xs font-bold text-slate-400 mb-1">Avg Time / Q</div>
          <div className="text-xl font-black text-amber-400">{analytics.avgTimePerQuestionSeconds}s</div>
        </div>

        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
          <div className="text-xs font-bold text-slate-400 mb-1">Study Time</div>
          <div className="text-xl font-black text-purple-400">{analytics.totalStudyTimeMinutes} mins</div>
        </div>
      </div>

      {/* WEAK TOPIC DETECTION SECTION */}
      <div className="bg-slate-950 border border-rose-500/30 rounded-2xl p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-white text-sm flex items-center gap-2">
            <span>⚠️</span> Weak Topic Detection ({analytics.weakTopics.length})
          </h3>
          <span className="text-[11px] text-rose-400 font-semibold">Topics below 60% accuracy</span>
        </div>

        {analytics.weakTopics.length === 0 ? (
          <div className="text-xs text-slate-400 py-2">
            🎉 Great job! No weak topics detected yet. Keep practicing across different subjects.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {analytics.weakTopics.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-slate-200">{item.topic}</div>
                  <div className="text-[10px] text-rose-400 font-bold mt-0.5">
                    Accuracy: {item.accuracy}% ({item.totalAttempted} Qs)
                  </div>
                </div>

                <button
                  onClick={() => onStartTargetedPractice(item.topic, item.subject)}
                  className="px-3 py-1.5 btn-3d-green text-[11px] font-bold rounded-lg cursor-pointer"
                >
                  Practice Weak Topic
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RECOMMENDED NEXT PRACTICE */}
      {analytics.recommendedPractices.length > 0 && (
        <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
          <h3 className="font-bold text-white text-sm flex items-center gap-2">
            <span>💡</span> Recommended Next Practice
          </h3>

          <div className="space-y-2">
            {analytics.recommendedPractices.map((rec, rIdx) => (
              <div key={rIdx} className="bg-slate-900 p-3 rounded-xl flex justify-between items-center border border-slate-800">
                <div className="text-xs font-bold text-slate-200">{rec.title}</div>
                <button
                  onClick={() => onStartTargetedPractice(rec.topic, rec.subject)}
                  className="px-3 py-1.5 btn-3d-blue text-[11px] font-bold rounded-lg cursor-pointer"
                >
                  Start Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
