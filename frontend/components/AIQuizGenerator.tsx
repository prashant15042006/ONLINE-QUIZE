import React, { useState } from "react";
import { Sparkles, Building2, BookOpen, Layers, HelpCircle, Loader2, ArrowRight } from "lucide-react";

interface AIQuizGeneratorProps {
  onGenerate: (params: {
    topic: string;
    company: string;
    difficulty: string;
    questionCount: number;
    customPrompt: string;
  }) => void;
  isLoading: boolean;
}

const POPULAR_COMPANIES = ["TCS NQT", "Infosys", "Amazon", "Wipro", "GATE CS", "SSC CGL"];
const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard"];

export default function AIQuizGenerator({ onGenerate, isLoading }: AIQuizGeneratorProps) {
  const [company, setCompany] = useState("TCS NQT");
  const [topic, setTopic] = useState("Quantitative Aptitude & Logic");
  const [difficulty, setDifficulty] = useState("Medium");
  const [questionCount, setQuestionCount] = useState(5);
  const [customPrompt, setCustomPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({
      topic,
      company,
      difficulty,
      questionCount,
      customPrompt
    });
  };

  return (
    <div className="glass-panel rounded-3xl p-6 lg:p-8 border border-indigo-500/20 shadow-2xl relative overflow-hidden">
      {/* Glow effect background */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            AI Mock Test Generator
          </div>
          <h2 className="text-xl lg:text-2xl font-extrabold text-white">
            Create Custom AI Practice Test
          </h2>
          <p className="text-xs lg:text-sm text-slate-400 mt-1">
            Generate authentic company recruitment or competitive exam questions tailored to your syllabus.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company / Exam Preset Badges */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-indigo-400" />
            Target Company / Exam Format
          </label>
          <div className="flex flex-wrap gap-2">
            {POPULAR_COMPANIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCompany(c)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  company === c
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30"
                    : "bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Subject / Topic Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            Subject or Specific Topic
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Data Structures, Profit & Loss, SQL Queries, Verbal Ability..."
            className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-xs lg:text-sm font-medium transition-all"
            required
          />
        </div>

        {/* Grid: Difficulty & Number of Questions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Difficulty */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-pink-400" />
              Difficulty Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {DIFFICULTY_LEVELS.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDifficulty(d)}
                  className={`py-2 rounded-xl text-xs font-bold border text-center transition-all ${
                    difficulty === d
                      ? "bg-purple-600/20 border-purple-500 text-purple-300"
                      : "bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Question Count */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              Number of Questions
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 15, 20].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setQuestionCount(num)}
                  className={`py-2 rounded-xl text-xs font-bold border text-center transition-all ${
                    questionCount === num
                      ? "bg-cyan-600/20 border-cyan-500 text-cyan-300"
                      : "bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  {num} Qs
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Prompt / Syllabus Paste */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Syllabus or Custom Instructions (Optional)
          </label>
          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            rows={2}
            placeholder="Paste syllabus text or specify custom topics to focus on..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-xs font-mono resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white shadow-xl shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating AI Questions...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate & Start Live Mock Exam
              <ArrowRight className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
