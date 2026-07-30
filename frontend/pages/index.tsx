import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ExamTargetModal from "../components/ExamTargetModal";
import AIQuizGenerator from "../components/AIQuizGenerator";
import MockExamInterface, { QuestionData } from "../components/MockExamInterface";
import ScorecardModal from "../components/ScorecardModal";
import {
  Sparkles, Building2, Clock, ArrowRight, Play, Trophy,
  Brain, Target, Zap, ChevronRight, BookOpen, TrendingUp,
  Award, Users, CheckCircle, Star
} from "lucide-react";

const EXAM_CARDS = [
  {
    title: "TCS NQT Full Mock",
    company: "TCS",
    badge: "Most Popular",
    badgeColor: "indigo",
    mins: 20,
    count: 10,
    desc: "Numerical ability, verbal comprehension, logical reasoning & coding MCQs — exactly like TCS NQT pattern.",
    icon: "🏢",
    color: "indigo",
    gradient: "from-indigo-600/20 to-blue-600/10",
    border: "border-indigo-500/30 hover:border-indigo-400/60",
  },
  {
    title: "Infosys SP & DSE",
    company: "Infosys",
    badge: "Hot 🔥",
    badgeColor: "purple",
    mins: 15,
    count: 10,
    desc: "Mathematical thinking, puzzle solving, and algorithmic reasoning tests for Infosys placement.",
    icon: "💡",
    color: "purple",
    gradient: "from-purple-600/20 to-violet-600/10",
    border: "border-purple-500/30 hover:border-purple-400/60",
  },
  {
    title: "Amazon SDE OA",
    company: "Amazon",
    badge: "Product Co.",
    badgeColor: "pink",
    mins: 25,
    count: 10,
    desc: "Data structures, algorithms, time complexity & system design concepts for Amazon SDE roles.",
    icon: "⚡",
    color: "pink",
    gradient: "from-pink-600/20 to-rose-600/10",
    border: "border-pink-500/30 hover:border-pink-400/60",
  },
  {
    title: "GATE CS & IT",
    company: "GATE CS",
    badge: "Competitive",
    badgeColor: "cyan",
    mins: 30,
    count: 12,
    desc: "DBMS, Computer Networks, Operating Systems, Theory of Computation — full GATE CS syllabus.",
    icon: "🎓",
    color: "cyan",
    gradient: "from-cyan-600/20 to-teal-600/10",
    border: "border-cyan-500/30 hover:border-cyan-400/60",
  },
  {
    title: "SSC CGL Aptitude",
    company: "SSC CGL",
    badge: "Govt. Exam",
    badgeColor: "amber",
    mins: 15,
    count: 10,
    desc: "Speed math, algebra, geometry, percentage, ratio & proportion — SSC CGL Tier-I pattern.",
    icon: "🏛️",
    color: "amber",
    gradient: "from-amber-600/20 to-yellow-600/10",
    border: "border-amber-500/30 hover:border-amber-400/60",
  },
  {
    title: "Full Stack Dev Prep",
    company: "Full Stack",
    badge: "Tech Skill",
    badgeColor: "emerald",
    mins: 15,
    count: 10,
    desc: "React, Node.js, REST APIs, SQL/NoSQL databases & frontend performance — for MERN developers.",
    icon: "🚀",
    color: "emerald",
    gradient: "from-emerald-600/20 to-green-600/10",
    border: "border-emerald-500/30 hover:border-emerald-400/60",
  },
];

const STATS = [
  { label: "Questions Generated", value: "2,50,000+", icon: Brain },
  { label: "Mock Tests Taken", value: "18,000+", icon: Trophy },
  { label: "Companies Covered", value: "25+", icon: Building2 },
  { label: "Success Rate", value: "94%", icon: TrendingUp },
];

const BADGE_STYLES: Record<string, string> = {
  indigo: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30",
  purple: "bg-purple-500/15 text-purple-300 border border-purple-500/30",
  pink: "bg-pink-500/15 text-pink-300 border border-pink-500/30",
  cyan: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30",
  amber: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
  emerald: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
};

const BTN_STYLES: Record<string, string> = {
  indigo: "bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 border-indigo-500/40 hover:border-indigo-400",
  purple: "bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 border-purple-500/40 hover:border-purple-400",
  pink: "bg-pink-600/10 hover:bg-pink-600/20 text-pink-400 border-pink-500/40 hover:border-pink-400",
  cyan: "bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 border-cyan-500/40 hover:border-cyan-400",
  amber: "bg-amber-600/10 hover:bg-amber-600/20 text-amber-400 border-amber-500/40 hover:border-amber-400",
  emerald: "bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border-emerald-500/40 hover:border-emerald-400",
};

export default function Home() {
  const [isTargetModalOpen, setIsTargetModalOpen] = useState(false);
  const [targetExam, setTargetExam] = useState({ title: "TCS NQT 2026", date: "2026-08-15" });
  const [activeQuiz, setActiveQuiz] = useState<{
    id: string;
    title: string;
    targetCompanyOrExam: string;
    timeLimitMinutes: number;
    questions: QuestionData[];
  } | null>(null);
  const [appMode, setAppMode] = useState<"dashboard" | "exam" | "scorecard">("dashboard");
  const [lastExamResult, setLastExamResult] = useState<{
    userAnswers: Record<number, number>;
    timeSpentSeconds: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingCard, setLoadingCard] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const t = localStorage.getItem("user_target_exam");
      if (t) { try { setTargetExam(JSON.parse(t)); } catch (e) {} }
    }
  }, []);

  const handleSaveTarget = (target: { title: string; date: string }) => {
    setTargetExam(target);
    if (typeof window !== "undefined") {
      localStorage.setItem("user_target_exam", JSON.stringify(target));
    }
  };

  const handleGenerateQuiz = async (params: {
    topic: string;
    company: string;
    difficulty: string;
    questionCount: number;
    customPrompt: string;
  }) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"}/api/quizzes/generate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(params),
        }
      );
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();
      if (data && data.questions && data.questions.length > 0) {
        setActiveQuiz({
          id: "gen-" + Date.now(),
          title: data.title || `${params.company} Mock Test`,
          targetCompanyOrExam: data.targetCompanyOrExam || params.company,
          timeLimitMinutes: data.timeLimitMinutes || params.questionCount * 2,
          questions: data.questions,
        });
        setAppMode("exam");
      } else {
        throw new Error("No questions returned");
      }
    } catch (err: any) {
      console.error("Generation failed:", err);
      setError("AI generation failed. Please check backend connection and try again.");
    } finally {
      setIsLoading(false);
      setLoadingCard(null);
    }
  };

  const handleLaunchPreset = (card: typeof EXAM_CARDS[0]) => {
    setLoadingCard(card.title);
    handleGenerateQuiz({
      topic: card.title,
      company: card.company,
      difficulty: "Medium",
      questionCount: card.count,
      customPrompt: card.desc,
    });
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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"}/api/quizzes/explain`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: q.question,
            options: q.options,
            userAnswer: userChoice,
            correctAnswer: q.correctAnswer,
          }),
        }
      );
      const data = await res.json();
      return data.explanation || q.explanation;
    } catch (e) {
      return q.explanation;
    }
  };

  // --- EXAM MODE ---
  if (appMode === "exam" && activeQuiz) {
    return (
      <MockExamInterface
        quizTitle={activeQuiz.title}
        targetCompanyOrExam={activeQuiz.targetCompanyOrExam}
        timeLimitMinutes={activeQuiz.timeLimitMinutes}
        questions={activeQuiz.questions}
        onSubmitExam={handleSubmitExam}
        onExit={() => setAppMode("dashboard")}
      />
    );
  }

  // --- DASHBOARD ---
  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 flex flex-col">
      <Navbar onOpenTargetModal={() => setIsTargetModalOpen(true)} targetExam={targetExam} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-8 space-y-12">

        {/* ── Hero Section ── */}
        <section className="relative rounded-3xl overflow-hidden border border-slate-800/60 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-slate-950/90 to-purple-950/60" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative p-8 lg:p-14">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                Powered by Groq AI · Free Forever
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Crack{" "}
                <span className="gradient-text">Company Tests</span>
                {" & "}
                <br className="hidden sm:block" />
                Competitive Exams
              </h1>

              <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                AI-powered mock tests for{" "}
                <span className="text-white font-semibold">TCS, Infosys, Amazon, GATE & SSC</span>.
                Get real exam questions, instant AI explanations, and detailed scorecards — all for free.
              </p>

              {error && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-sm">
                  <Zap className="w-4 h-4 flex-shrink-0" />
                  {error}
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => handleLaunchPreset(EXAM_CARDS[0])}
                  disabled={isLoading}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Play className="w-4 h-4 fill-white" />
                  {isLoading && loadingCard === EXAM_CARDS[0].title ? "Generating..." : "Start TCS NQT Mock"}
                </button>
                <button
                  onClick={() => setIsTargetModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold text-sm transition-all active:scale-95"
                >
                  <Target className="w-4 h-4 text-indigo-400" />
                  Set Target: {targetExam.title}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Row ── */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-5 border border-slate-800/60 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* ── AI Quiz Generator ── */}
        <section>
          <AIQuizGenerator onGenerate={handleGenerateQuiz} isLoading={isLoading} />
        </section>

        {/* ── Preset Exam Cards ── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-white flex items-center gap-2.5">
                <Building2 className="w-6 h-6 text-indigo-400" />
                Company Mock Tests
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Real exam format · Timed · AI-powered questions · Instant results
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              Live AI Questions
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXAM_CARDS.map((card) => (
              <div
                key={card.title}
                className={`group relative glass-card rounded-2xl border ${card.border} overflow-hidden flex flex-col transition-all duration-300`}
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${card.gradient.replace('/20', '').replace('/10', '')} opacity-60`} />

                <div className="p-5 flex flex-col flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="text-3xl">{card.icon}</div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${BADGE_STYLES[card.badgeColor]}`}>
                        {card.badge}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                        <Clock className="w-3 h-3" />
                        {card.mins}m
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-bold text-white text-base leading-snug">{card.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {card.count} Questions
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500" />
                      AI Generated
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleLaunchPreset(card)}
                    disabled={isLoading}
                    className={`w-full py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${BTN_STYLES[card.color]}`}
                  >
                    {isLoading && loadingCard === card.title ? (
                      <>
                        <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Generating with AI...
                      </>
                    ) : (
                      <>
                        <span>Start Mock Test</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="glass-panel rounded-3xl p-8 lg:p-10 border border-slate-800/60">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white">How It Works</h2>
            <p className="text-sm text-slate-400 mt-1">3 steps to your next job offer</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Pick Your Exam", desc: "Choose from 25+ company mock tests or generate a custom quiz on any topic.", icon: Target, color: "indigo" },
              { step: "02", title: "Take the Mock Test", desc: "Answer AI-generated questions under real exam conditions with a live timer.", icon: Zap, color: "purple" },
              { step: "03", title: "Get AI Feedback", desc: "Receive detailed scorecards with step-by-step AI explanations for every question.", icon: Award, color: "emerald" },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center space-y-3 p-4">
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-600/10 border border-${item.color}-500/20 flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <div className={`text-xs font-mono font-bold text-${item.color}-400`}>{item.step}</div>
                <h3 className="font-bold text-white text-base">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-600">
        <p>© 2026 QuizzyAI · Powered by <span className="text-indigo-400">Groq AI</span> · Built for Indian students 🇮🇳</p>
      </footer>

      {/* Modals */}
      <ExamTargetModal
        isOpen={isTargetModalOpen}
        onClose={() => setIsTargetModalOpen(false)}
        onSaveTarget={handleSaveTarget}
        currentTarget={targetExam}
      />

      {activeQuiz && lastExamResult && (
        <ScorecardModal
          isOpen={appMode === "scorecard"}
          onClose={() => setAppMode("dashboard")}
          quizTitle={activeQuiz.title}
          targetCompanyOrExam={activeQuiz.targetCompanyOrExam}
          questions={activeQuiz.questions}
          userAnswers={lastExamResult.userAnswers}
          timeSpentSeconds={lastExamResult.timeSpentSeconds}
          onRetry={() => setAppMode("exam")}
          onNewQuiz={() => { setAppMode("dashboard"); setActiveQuiz(null); }}
          onGetAiExplanation={handleGetAiExplanation}
        />
      )}
    </div>
  );
}
