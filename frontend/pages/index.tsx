import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ApiKeyModal from "../components/ApiKeyModal";
import ExamTargetModal from "../components/ExamTargetModal";
import AIQuizGenerator from "../components/AIQuizGenerator";
import MockExamInterface, { QuestionData } from "../components/MockExamInterface";
import ScorecardModal from "../components/ScorecardModal";
import { Sparkles, Building2, Clock, ArrowRight, Play, Trophy } from "lucide-react";

const FALLBACK_QUESTIONS: QuestionData[] = [
  { id: "q1", question: "If a car travels at 60 km/h for 2.5 hours, what is the total distance?", options: ["120 km", "150 km", "180 km", "200 km"], correctAnswer: 1, explanation: "Distance = Speed x Time = 60 x 2.5 = 150 km.", hint: "Use: Distance = Speed x Time", topic: "Quantitative Aptitude", difficulty: "Easy" },
  { id: "q2", question: "What is the worst-case time complexity of QuickSort?", options: ["O(n log n)", "O(n)", "O(n^2)", "O(1)"], correctAnswer: 2, explanation: "QuickSort worst-case is O(n^2) when pivot selection is poor (e.g., already sorted array).", hint: "Think about an already sorted array with bad pivot selection.", topic: "Data Structures", difficulty: "Medium" },
  { id: "q3", question: "Which HTTP status code means 'Not Found'?", options: ["200", "401", "404", "500"], correctAnswer: 2, explanation: "HTTP 404 means the requested resource was not found on the server.", hint: "Standard client error for missing pages.", topic: "Web Concepts", difficulty: "Easy" },
  { id: "q4", question: "Find the next term: 3, 7, 15, 31, 63, ?", options: ["125", "127", "129", "131"], correctAnswer: 1, explanation: "Each term = previous x 2 + 1. So 63 x 2 + 1 = 127.", hint: "Look at the pattern: (x * 2) + 1", topic: "Logical Reasoning", difficulty: "Medium" },
  { id: "q5", question: "What does DBMS stand for?", options: ["Data Base Management System", "Digital Binary Management System", "Data Byte Mapping Software", "Database Monitoring System"], correctAnswer: 0, explanation: "DBMS = Database Management System - software for managing databases.", hint: "Full form of a very common CS term.", topic: "Databases", difficulty: "Easy" },
];

const EXAM_CARDS = [
  { title: "TCS NQT Aptitude & Logic", company: "TCS", badge: "Popular", badgeColor: "indigo", mins: 20, count: 10, desc: "Numerical ability, verbal comprehension, logical reasoning & pseudo-code questions.", color: "indigo" },
  { title: "Infosys Specialist & DSE", company: "Infosys", badge: "Hot", badgeColor: "purple", mins: 15, count: 10, desc: "Mathematical thinking, puzzle solving, and algorithmic reasoning tests.", color: "purple" },
  { title: "Amazon SDE Online Assessment", company: "Amazon", badge: "Product Co.", badgeColor: "pink", mins: 25, count: 10, desc: "Data structures, algorithms, space-time complexity & OS basics.", color: "pink" },
  { title: "GATE Computer Science & IT", company: "GATE CS", badge: "Competitive", badgeColor: "cyan", mins: 30, count: 12, desc: "DBMS, Computer Networks, Operating Systems, Theory of Computation.", color: "cyan" },
  { title: "SSC CGL Quantitative Aptitude", company: "SSC CGL", badge: "Govt. Exam", badgeColor: "amber", mins: 15, count: 10, desc: "Speed math, algebra, geometry, percentage, ratio & proportion problems.", color: "amber" },
  { title: "Full Stack Web Developer Prep", company: "Full Stack", badge: "Tech Skill", badgeColor: "emerald", mins: 15, count: 10, desc: "React, Node.js, REST APIs, SQL/NoSQL databases & frontend performance.", color: "emerald" },
];

export default function Home() {
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isTargetModalOpen, setIsTargetModalOpen] = useState(false);
  const [userApiKey, setUserApiKey] = useState("");
  const [aiProvider, setAiProvider] = useState("gemini");
  const [targetExam, setTargetExam] = useState({ title: "TCS NQT 2026", date: "2026-08-15" });
  const [activeQuiz, setActiveQuiz] = useState<{ id: string; title: string; targetCompanyOrExam: string; timeLimitMinutes: number; questions: QuestionData[] } | null>(null);
  const [appMode, setAppMode] = useState<"dashboard" | "exam" | "scorecard">("dashboard");
  const [lastExamResult, setLastExamResult] = useState<{ userAnswers: Record<number, number>; timeSpentSeconds: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const k = localStorage.getItem("user_ai_api_key") || "";
      const p = localStorage.getItem("user_ai_provider") || "gemini";
      const t = localStorage.getItem("user_target_exam");
      if (k) setUserApiKey(k);
      if (p) setAiProvider(p);
      if (t) { try { setTargetExam(JSON.parse(t)); } catch (e) {} }
    }
  }, []);

  const handleSaveApiKey = (key: string, provider: string) => {
    setUserApiKey(key); setAiProvider(provider);
    if (typeof window !== "undefined") { localStorage.setItem("user_ai_api_key", key); localStorage.setItem("user_ai_provider", provider); }
  };

  const handleSaveTarget = (target: { title: string; date: string }) => {
    setTargetExam(target);
    if (typeof window !== "undefined") { localStorage.setItem("user_target_exam", JSON.stringify(target)); }
  };

  const handleGenerateQuiz = async (params: { topic: string; company: string; difficulty: string; questionCount: number; customPrompt: string }) => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/quizzes/generate", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...params, userApiKey, aiProvider }),
      });
      const data = await res.json();
      if (data && data.questions) {
        setActiveQuiz({ id: data.id || "gen-" + Date.now(), title: data.title || `${params.company} Mock Test`, targetCompanyOrExam: data.targetCompanyOrExam || params.company, timeLimitMinutes: data.timeLimitMinutes || params.questionCount * 2, questions: data.questions });
        setAppMode("exam");
      } else { throw new Error("No questions returned"); }
    } catch (err) {
      console.error("AI generation failed, using fallback:", err);
      setActiveQuiz({ id: "local-" + Date.now(), title: `${params.company} Practice Test`, targetCompanyOrExam: params.company, timeLimitMinutes: params.questionCount * 2, questions: FALLBACK_QUESTIONS.slice(0, params.questionCount) });
      setAppMode("exam");
    } finally { setIsLoading(false); }
  };

  const handleLaunchPreset = (title: string, company: string, count: number) => {
    handleGenerateQuiz({ topic: title, company, difficulty: "Medium", questionCount: count, customPrompt: "" });
  };

  const handleSubmitExam = (answers: Record<number, number>, timeSpent: number) => {
    setLastExamResult({ userAnswers: answers, timeSpentSeconds: timeSpent });
    setAppMode("scorecard");
  };

  const handleGetAiExplanation = async (questionIndex: number): Promise<string> => {
    if (!activeQuiz || !activeQuiz.questions[questionIndex]) return "Explanation unavailable";
    const q = activeQuiz.questions[questionIndex];
    const userChoice = lastExamResult?.userAnswers[questionIndex] ?? -1;
    try {
      const res = await fetch("http://localhost:4000/api/quizzes/explain", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: q.question, options: q.options, userAnswer: userChoice, correctAnswer: q.correctAnswer, userApiKey }) });
      const data = await res.json();
      return data.explanation || q.explanation;
    } catch (e) { return q.explanation; }
  };

  if (appMode === "exam" && activeQuiz) {
    return (<MockExamInterface quizTitle={activeQuiz.title} targetCompanyOrExam={activeQuiz.targetCompanyOrExam} timeLimitMinutes={activeQuiz.timeLimitMinutes} questions={activeQuiz.questions} onSubmitExam={handleSubmitExam} onExit={() => setAppMode("dashboard")} />);
  }

  const colorMap: Record<string, string> = { indigo: "border-indigo-500/50 hover:bg-indigo-600/20 text-indigo-300", purple: "border-purple-500/50 hover:bg-purple-600/20 text-purple-300", pink: "border-pink-500/50 hover:bg-pink-600/20 text-pink-300", cyan: "border-cyan-500/50 hover:bg-cyan-600/20 text-cyan-300", amber: "border-amber-500/50 hover:bg-amber-600/20 text-amber-300", emerald: "border-emerald-500/50 hover:bg-emerald-600/20 text-emerald-300" };
  const badgeMap: Record<string, string> = { indigo: "bg-indigo-500/20 text-indigo-300", purple: "bg-purple-500/20 text-purple-300", pink: "bg-pink-500/20 text-pink-300", cyan: "bg-cyan-500/20 text-cyan-300", amber: "bg-amber-500/20 text-amber-300", emerald: "bg-emerald-500/20 text-emerald-300" };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)} onOpenTargetModal={() => setIsTargetModalOpen(true)} targetExam={targetExam} hasApiKey={!!userApiKey} />
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-10">
        {/* Hero */}
        <section className="relative glass-panel rounded-3xl p-6 lg:p-10 border border-slate-800/80 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> AI Exam Preparation Platform
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Master Company Tests & Competitive Exams with <span className="gradient-text">Real AI Mocks</span>
            </h1>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              Practice timed recruitment tests for <strong>{targetExam.title}</strong>, TCS, Infosys, Amazon, GATE & SSC. Get instant AI step-by-step solutions and detailed performance scorecards.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button onClick={() => handleLaunchPreset("TCS NQT Full Aptitude", "TCS", 5)} disabled={isLoading} className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer">
                <Play className="w-4 h-4 fill-white" />
                {isLoading ? "Generating..." : "Start TCS NQT Mock Test"}
              </button>
              <button onClick={() => setIsTargetModalOpen(true)} className="px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-sm transition-all cursor-pointer">
                Set Target Exam Date
              </button>
            </div>
          </div>
        </section>

        {/* AI Quiz Generator */}
        <section><AIQuizGenerator onGenerate={handleGenerateQuiz} isLoading={isLoading} /></section>

        {/* Preset Exam Cards */}
        <section className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2"><Building2 className="w-5 h-5 text-indigo-400" /> Company Recruitment Mock Tests</h3>
            <p className="text-xs text-slate-400 mt-0.5">Authentic test format with real timer & official question palette.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXAM_CARDS.map((card) => (
              <div key={card.title} className="glass-card rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${badgeMap[card.badgeColor]}`}>{card.badge}</span>
                    <div className="flex items-center gap-1 text-xs text-slate-400 font-mono"><Clock className="w-3.5 h-3.5" /> {card.mins} Mins</div>
                  </div>
                  <h4 className="font-bold text-white text-base mb-1">{card.title}</h4>
                  <p className="text-xs text-slate-400">{card.desc}</p>
                </div>
                <button onClick={() => handleLaunchPreset(card.title, card.company, card.count)} disabled={isLoading}
                  className={`w-full py-2.5 rounded-xl bg-slate-900 border hover:bg-opacity-30 text-xs font-bold flex items-center justify-center gap-1.5 transition-all disabled:opacity-50 cursor-pointer ${colorMap[card.color]}`}>
                  <span>Take Mock Test</span><ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ApiKeyModal isOpen={isApiKeyModalOpen} onClose={() => setIsApiKeyModalOpen(false)} onSaveKey={handleSaveApiKey} currentKey={userApiKey} currentProvider={aiProvider} />
      <ExamTargetModal isOpen={isTargetModalOpen} onClose={() => setIsTargetModalOpen(false)} onSaveTarget={handleSaveTarget} currentTarget={targetExam} />
      {activeQuiz && lastExamResult && (
        <ScorecardModal isOpen={appMode === "scorecard"} onClose={() => setAppMode("dashboard")} quizTitle={activeQuiz.title} targetCompanyOrExam={activeQuiz.targetCompanyOrExam} questions={activeQuiz.questions} userAnswers={lastExamResult.userAnswers} timeSpentSeconds={lastExamResult.timeSpentSeconds} onRetry={() => setAppMode("exam")} onNewQuiz={() => { setAppMode("dashboard"); setActiveQuiz(null); }} onGetAiExplanation={handleGetAiExplanation} />
      )}
    </div>
  );
}
