import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft, Send } from "lucide-react";

export const getServerSideProps = async () => ({ props: {} });

export default function QuizPage() {
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAIAnswer = async () => {
    if (!aiQuestion) return;
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"}/api/quizzes/explain`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: aiQuestion, options: ["A", "B", "C", "D"], userAnswer: -1, correctAnswer: 0 }),
      });
      const data = await res.json();
      setAiAnswer(data.explanation || "No response received.");
    } catch (e) {
      setAiAnswer("Could not connect to AI backend. Make sure backend is running on port 4000.");
    } finally { setLoading(false); }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 lg:p-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="glass-panel rounded-3xl p-6 lg:p-8 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Interactive AI Tutor</h2>
              <p className="text-xs text-slate-400">Ask any exam question for instant AI breakdown</p>
            </div>
          </div>
          <div className="space-y-3 pt-2">
            <textarea value={aiQuestion} onChange={(e) => setAiQuestion(e.target.value)} placeholder="Enter your question or math/coding problem here..." rows={3} className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm font-mono resize-none" />
            <button onClick={fetchAIAnswer} disabled={loading} className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg flex items-center gap-2 disabled:opacity-50">
              <Send className="w-3.5 h-3.5" />{loading ? "AI is thinking..." : "Get AI Explanation"}
            </button>
            {aiAnswer && (
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 leading-relaxed whitespace-pre-line">
                <strong className="block text-indigo-400 font-bold mb-1">AI Solution:</strong>{aiAnswer}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}