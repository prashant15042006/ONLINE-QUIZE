"use client";

import React, { useState } from "react";
import { Question, Subject, Chapter } from "../data/quizData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  gateSubjects: Subject[];
  onStartTest: (
    questions: Question[],
    title: string,
    mode: "exam" | "practice",
    durationMinutes?: number
  ) => void;
}

interface MadeEasyTestMeta {
  id: string;
  name: string;
  testNumber: number;
  type: "Topic Wise Test" | "Subject Test" | "Full Syllabus Test";
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  status: "available" | "upcoming";
  scqCount: number;
  msqCount: number;
  natCount: number;
  topics: string[];
  chapterId?: string;
}

export default function MadeEasyTestSeriesModal({
  isOpen,
  onClose,
  gateSubjects,
  onStartTest,
}: Props) {
  const [selectedSubjectKey, setSelectedSubjectKey] = useState<string>("coa");
  const [examModeChoice, setExamModeChoice] = useState<"exam" | "practice">("exam");

  if (!isOpen) return null;

  // Find COA subject from gateSubjects
  const coaSubject = gateSubjects.find(
    (s) => s.id === "gate-cs-coa" || s.name.toLowerCase().includes("organization")
  );
  const twt5Chapter = coaSubject?.chapters.find(
    (c) => c.id === "coa-gate-2027-twt-5" || c.name.includes("Topic Wise Test - 5")
  );

  const subjectsConfig = [
    {
      key: "coa",
      name: "Computer Organization & Architecture (COA)",
      shortName: "COA",
      icon: "🖥️",
      accent: "from-blue-600 to-indigo-600",
      tests: [
        {
          id: "coa-twt-5",
          name: "GATE 2027 CS TOPIC WISE TEST - 5",
          testNumber: 5,
          type: "Topic Wise Test",
          totalQuestions: twt5Chapter?.questions.length || 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: [
            "Instruction Pipelining & Stalls",
            "Pipeline Speedup & Branch Penalty",
            "CISC Micro-operations & Hazard Mitigation",
            "Addressing Modes & Memory References",
            "Control Memory & Microprogrammed Control",
            "IEEE-754 Floating Point Representation",
            "RAW / WAR / WAW Data Dependencies",
          ],
          chapterId: "coa-gate-2027-twt-5",
        },
        {
          id: "coa-twt-1",
          name: "GATE 2027 CS TOPIC WISE TEST - 1",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 12,
          msqCount: 3,
          natCount: 2,
          topics: ["Machine Instructions", "Addressing Modes", "ALU & Data Path"],
        },
        {
          id: "coa-twt-2",
          name: "GATE 2027 CS TOPIC WISE TEST - 2",
          testNumber: 2,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Cache Memory Organization", "Direct / Set Associative Mapping", "Write Policies"],
        },
        {
          id: "coa-twt-3",
          name: "GATE 2027 CS TOPIC WISE TEST - 3",
          testNumber: 3,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 10,
          msqCount: 5,
          natCount: 2,
          topics: ["Main Memory", "Virtual Memory & TLB", "Page Replacement Algorithms"],
        },
        {
          id: "coa-twt-4",
          name: "GATE 2027 CS TOPIC WISE TEST - 4",
          testNumber: 4,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["I/O Interface", "Interrupts & Vectored Interrupts", "DMA Controller"],
        },
        {
          id: "coa-sub-1",
          name: "GATE 2027 CS FULL SUBJECT TEST — COA",
          testNumber: 6,
          type: "Subject Test",
          totalQuestions: 33,
          totalMarks: 50,
          durationMinutes: 90,
          status: "upcoming",
          scqCount: 20,
          msqCount: 8,
          natCount: 5,
          topics: ["Complete COA Syllabus (GATE Pattern)"],
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "os",
      name: "Operating Systems (OS)",
      shortName: "OS",
      icon: "⚙️",
      accent: "from-cyan-600 to-blue-600",
      tests: [
        {
          id: "os-twt-1",
          name: "GATE 2027 CS TOPIC WISE TEST - 1 (Processes & Scheduling)",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Process State Models", "CPU Scheduling (FCFS, SJF, RR, Priority)", "Context Switching"],
        },
        {
          id: "os-twt-2",
          name: "GATE 2027 CS TOPIC WISE TEST - 2 (Synchronization & Deadlocks)",
          testNumber: 2,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 10,
          msqCount: 5,
          natCount: 2,
          topics: ["Critical Section Problem", "Semaphores & Mutex", "Banker's Algorithm & Resource Allocation Graph"],
        },
        {
          id: "os-twt-3",
          name: "GATE 2027 CS TOPIC WISE TEST - 3 (Memory Management)",
          testNumber: 3,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Paging & Segmentation", "Multi-level Paging", "Page Faults & Thrashing"],
        },
        {
          id: "os-sub-1",
          name: "GATE 2027 CS FULL SUBJECT TEST — OS",
          testNumber: 4,
          type: "Subject Test",
          totalQuestions: 33,
          totalMarks: 50,
          durationMinutes: 90,
          status: "upcoming",
          scqCount: 20,
          msqCount: 8,
          natCount: 5,
          topics: ["Full Operating Systems Syllabus"],
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "dbms",
      name: "Database Management Systems (DBMS)",
      shortName: "DBMS",
      icon: "🗄️",
      accent: "from-emerald-600 to-teal-600",
      tests: [
        {
          id: "dbms-twt-1",
          name: "GATE 2027 CS TOPIC WISE TEST - 1 (ER & Relational Model, SQL)",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["ER Diagram to Table Conversion", "Relational Algebra", "Tuple Relational Calculus", "Advanced SQL Queries"],
        },
        {
          id: "dbms-twt-2",
          name: "GATE 2027 CS TOPIC WISE TEST - 2 (Normalization & Functional Dependencies)",
          testNumber: 2,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 12,
          msqCount: 3,
          natCount: 2,
          topics: ["Closure of Attributes", "Candidate Keys", "1NF, 2NF, 3NF, BCNF", "Lossless Join & Dependency Preservation"],
        },
        {
          id: "dbms-twt-3",
          name: "GATE 2027 CS TOPIC WISE TEST - 3 (Transactions & Concurrency)",
          testNumber: 3,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Conflict & View Serializability", "2PL (Strict & Rigorous)", "Timestamp Protocol", "B & B+ Trees"],
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "cn",
      name: "Computer Networks (CN)",
      shortName: "CN",
      icon: "🌐",
      accent: "from-indigo-600 to-sky-600",
      tests: [
        {
          id: "cn-twt-1",
          name: "GATE 2027 CS TOPIC WISE TEST - 1 (Data Link Layer & Framing)",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Flow Control (Stop & Wait, Go-Back-N, SR)", "Error Control (CRC, Hamming Code)", "CSMA/CD & Ethernet"],
        },
        {
          id: "cn-twt-2",
          name: "GATE 2027 CS TOPIC WISE TEST - 2 (Network Layer & IP Addressing)",
          testNumber: 2,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["IPv4 / IPv6 Header Analysis", "CIDR Subnetting & Supernetting", "Routing Algorithms (Distance Vector, Link State)"],
        },
        {
          id: "cn-twt-3",
          name: "GATE 2027 CS TOPIC WISE TEST - 3 (Transport Layer & TCP)",
          testNumber: 3,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["TCP 3-Way Handshake", "TCP Congestion Control (Slow Start, Congestion Avoidance)", "UDP & Socket Ports"],
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "toc",
      name: "Theory of Computation (TOC)",
      shortName: "TOC",
      icon: "🔤",
      accent: "from-purple-600 to-violet-600",
      tests: [
        {
          id: "toc-twt-1",
          name: "GATE 2027 CS TOPIC WISE TEST - 1 (Regular Languages & Finite Automata)",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["DFA & NFA Design", "DFA State Minimization", "Regular Expressions & Closure Properties"],
        },
        {
          id: "toc-twt-2",
          name: "GATE 2027 CS TOPIC WISE TEST - 2 (Context-Free Languages & Pushdown Automata)",
          testNumber: 2,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["CFG & Ambiguity", "DPDA vs NPDA", "Pumping Lemma for CFL"],
        },
        {
          id: "toc-twt-3",
          name: "GATE 2027 CS TOPIC WISE TEST - 3 (Turing Machines & Decidability)",
          testNumber: 3,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Recursive & Recursively Enumerable Languages", "Halting Problem & Reducibility", "Rice's Theorem & Post Correspondence Problem"],
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "cd",
      name: "Compiler Design (CD)",
      shortName: "CD",
      icon: "⚡",
      accent: "from-amber-600 to-orange-600",
      tests: [
        {
          id: "cd-twt-1",
          name: "GATE 2027 CS TOPIC WISE TEST - 1 (Lexical & Parsing)",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Lexical Analysis & Tokens", "LL(1) Parsing Table & First/Follow", "LR(0), SLR(1), LALR(1), CLR(1) Parsing"],
        },
        {
          id: "cd-twt-2",
          name: "GATE 2027 CS TOPIC WISE TEST - 2 (SDT & Code Optimization)",
          testNumber: 2,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Syntax Directed Translations (S-attributed, L-attributed)", "Intermediate Code Generation (Three-Address Code)", "Basic Blocks & Flow Graphs", "Code Optimization"],
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "ds_algo",
      name: "Data Structures & Algorithms (DS & Algo)",
      shortName: "DS & Algo",
      icon: "🌲",
      accent: "from-green-600 to-emerald-600",
      tests: [
        {
          id: "dsa-twt-1",
          name: "GATE 2027 CS TOPIC WISE TEST - 1 (Linear Data Structures & Trees)",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Stacks, Queues, Linked Lists", "Binary Trees & BST", "AVL Trees & Heaps"],
        },
        {
          id: "dsa-twt-2",
          name: "GATE 2027 CS TOPIC WISE TEST - 2 (Asymptotic Analysis & Sorting)",
          testNumber: 2,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Big-O, Omega, Theta", "Recurrence Relations (Master Theorem)", "Sorting Algorithms Comparison"],
        },
        {
          id: "dsa-twt-3",
          name: "GATE 2027 CS TOPIC WISE TEST - 3 (Graph Algorithms & DP)",
          testNumber: 3,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 10,
          msqCount: 5,
          natCount: 2,
          topics: ["BFS / DFS", "Dijkstra, Bellman-Ford, Floyd-Warshall", "Minimum Spanning Tree (Kruskal, Prim)", "Dynamic Programming"],
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "dl",
      name: "Digital Logic (DL)",
      shortName: "DL",
      icon: "💡",
      accent: "from-rose-600 to-red-600",
      tests: [
        {
          id: "dl-twt-1",
          name: "GATE 2027 CS TOPIC WISE TEST - 1 (Boolean Algebra & Combinational)",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["K-Maps & Logic Minimization", "Multiplexers & Decoders", "Adders & Subtractors"],
        },
        {
          id: "dl-twt-2",
          name: "GATE 2027 CS TOPIC WISE TEST - 2 (Sequential Circuits & Counters)",
          testNumber: 2,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Flip-Flops (SR, JK, D, T)", "Synchronous & Asynchronous Counters", "Finite State Machines"],
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "dm",
      name: "Discrete Mathematics & Graph Theory",
      shortName: "DM",
      icon: "📐",
      accent: "from-fuchsia-600 to-pink-600",
      tests: [
        {
          id: "dm-twt-1",
          name: "GATE 2027 CS TOPIC WISE TEST - 1 (Propositional Logic & Sets)",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Propositional & First Order Logic", "Sets, Relations & Equivalence Classes", "Posets & Lattices"],
        },
        {
          id: "dm-twt-2",
          name: "GATE 2027 CS TOPIC WISE TEST - 2 (Graph Theory & Combinatorics)",
          testNumber: 2,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Euler & Hamiltonian Graphs", "Graph Coloring & Planar Graphs", "Permutations, Combinations & Pigeonhole"],
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "em_ga",
      name: "Engineering Mathematics & General Aptitude",
      shortName: "EM & GA",
      icon: "📊",
      accent: "from-teal-600 to-cyan-600",
      tests: [
        {
          id: "em-twt-1",
          name: "GATE 2027 CS TOPIC WISE TEST - 1 (Linear Algebra & Calculus)",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Matrices, Determinants & Rank", "Eigenvalues & Eigenvectors", "Limits, Continuity & Mean Value Theorems"],
        },
        {
          id: "em-twt-2",
          name: "GATE 2027 CS TOPIC WISE TEST - 2 (Probability & Statistics)",
          testNumber: 2,
          type: "Topic Wise Test",
          totalQuestions: 17,
          totalMarks: 25,
          durationMinutes: 45,
          status: "upcoming",
          scqCount: 11,
          msqCount: 4,
          natCount: 2,
          topics: ["Conditional Probability & Bayes Theorem", "Random Variables & Expectation", "Normal, Poisson & Binomial Distributions"],
        },
      ] as MadeEasyTestMeta[],
    },
  ];

  const currentSubjectObj =
    subjectsConfig.find((s) => s.key === selectedSubjectKey) || subjectsConfig[0];

  const handleLaunchTest = (test: MadeEasyTestMeta) => {
    if (test.chapterId && twt5Chapter && twt5Chapter.questions.length > 0) {
      onStartTest(twt5Chapter.questions, test.name, examModeChoice, test.durationMinutes);
      onClose();
    } else {
      alert(
        `📹 "${test.name}" ke questions add karne ke liye video link, question text ya screenshot chat me bhejein!\n\nAI turant is test ko activate kar dega.`
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-5 animate-fade-in">
      <div className="bg-[#0b101b] border border-slate-700/80 rounded-3xl max-w-5xl w-full text-slate-100 shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="flex justify-between items-center border-b border-white/[0.08] px-5 py-4 shrink-0 bg-[#0e1422]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 via-amber-500 to-yellow-400 flex items-center justify-center text-xl shadow-lg shadow-rose-500/20 font-black text-white">
              🎯
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-base sm:text-lg tracking-wide">
                  MADE EASY Online Test Series (OTS)
                </h3>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-300 bg-rose-500/20 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                  GATE CS & IT
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                  Authentic Pattern
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Official Topic-wise &amp; Subject Tests • SCQ / MSQ / NAT • Exact GATE Marking Scheme (+1/-0.33, +2/-0.66, MSQ 0 Negative)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Video / Incoming Questions Info Banner */}
        <div className="px-5 py-3 bg-gradient-to-r from-blue-950/70 via-indigo-950/70 to-purple-950/70 border-b border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="text-base shrink-0">📹</span>
            <span className="text-indigo-200 leading-snug">
              <strong className="text-white">Video Question Ingestion:</strong> Aap kisi bhi subject ke Made Easy test ka video ya questions provide karenge, hum exact timer, marks, aur multi-select (MSQ) options ke saath instantly live kar denge!
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] text-slate-400 font-medium">Mode:</span>
            <div className="flex bg-black/40 rounded-xl p-0.5 border border-white/10">
              <button
                onClick={() => setExamModeChoice("exam")}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold cursor-pointer transition ${
                  examModeChoice === "exam"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ⏱️ CBT Exam Mode
              </button>
              <button
                onClick={() => setExamModeChoice("practice")}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold cursor-pointer transition ${
                  examModeChoice === "practice"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                💡 Practice Mode
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left: Subjects List Sidebar */}
          <div className="md:w-72 border-r border-white/[0.08] bg-[#0c101c] overflow-y-auto p-3 space-y-1.5 shrink-0 max-h-[35vh] md:max-h-full">
            <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 px-3 py-1">
              GATE CS Subjects ({subjectsConfig.length})
            </div>
            {subjectsConfig.map((subj) => {
              const isSelected = subj.key === selectedSubjectKey;
              const hasActiveTest = subj.tests.some((t) => t.status === "available");
              return (
                <button
                  key={subj.key}
                  onClick={() => setSelectedSubjectKey(subj.key)}
                  className={`w-full text-left p-3 rounded-2xl flex items-center justify-between transition cursor-pointer group ${
                    isSelected
                      ? "bg-gradient-to-r from-rose-600/20 to-indigo-600/20 border border-rose-500/30 text-white"
                      : "bg-white/[0.02] border border-white/[0.04] text-slate-400 hover:bg-white/[0.05] hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-lg shrink-0">{subj.icon}</span>
                    <div className="truncate">
                      <div className="text-xs font-bold truncate group-hover:text-white">
                        {subj.shortName}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">
                        {subj.tests.length} Tests Planned
                      </div>
                    </div>
                  </div>
                  {hasActiveTest ? (
                    <span className="text-[9px] font-black uppercase tracking-wide bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                      1 Live
                    </span>
                  ) : (
                    <span className="text-[9px] font-bold text-slate-500 bg-white/[0.03] px-1.5 py-0.5 rounded shrink-0">
                      Video Ready
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Tests List for Selected Subject */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#0b101b]">
            
            {/* Subject Title Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{currentSubjectObj.icon}</span>
                <div>
                  <h4 className="text-base font-black text-white">
                    {currentSubjectObj.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Made Easy Topic-wise Tests (45 mins, 25 marks) &amp; Subject Tests (90 mins, 50 marks)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700 font-bold">
                  {currentSubjectObj.tests.length} Total Tests
                </span>
              </div>
            </div>

            {/* Test Cards Grid */}
            <div className="space-y-4">
              {currentSubjectObj.tests.map((test) => {
                const isLive = test.status === "available";

                return (
                  <div
                    key={test.id}
                    className={`p-4 sm:p-5 rounded-2xl border transition relative overflow-hidden ${
                      isLive
                        ? "bg-gradient-to-br from-[#121929] to-[#182338] border-rose-500/40 shadow-xl shadow-rose-950/20"
                        : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
                    }`}
                  >
                    {isLive && (
                      <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-500 to-amber-500 text-white font-black text-[9px] uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                        ★ Live &amp; Ready to Attempt
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                              isLive
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                : "bg-white/5 text-slate-400 border border-white/10"
                            }`}
                          >
                            {test.type}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-slate-400">
                            ⏱️ {test.durationMinutes} Mins • 🎯 {test.totalMarks} Marks • ❓ {test.totalQuestions} Questions
                          </span>
                        </div>
                        <h5 className="text-sm sm:text-base font-extrabold text-white">
                          {test.name}
                        </h5>
                      </div>
                    </div>

                    {/* Question Types Breakdown */}
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-[11px]">
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 font-bold">
                        SCQ: {test.scqCount} Qs (+1/-0.33, +2/-0.66)
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 font-bold">
                        MSQ: {test.msqCount} Qs (Multi-Select, 0 Neg)
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
                        NAT: {test.natCount} Qs (Numerical, 0 Neg)
                      </span>
                    </div>

                    {/* Topics Covered */}
                    <div className="mb-4">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                        Key Topics Covered:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {test.topics.map((top, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                          >
                            • {top}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                      {isLive ? (
                        <>
                          <div className="text-[11px] text-slate-400">
                            {examModeChoice === "exam" ? (
                              <span className="text-rose-400 font-bold">⏱️ Real CBT Timer &amp; Negative Marking Enabled</span>
                            ) : (
                              <span className="text-emerald-400 font-bold">💡 Practice Mode (Instant Answers &amp; Hints)</span>
                            )}
                          </div>
                          <button
                            onClick={() => handleLaunchTest(test)}
                            className="px-6 py-2.5 btn-3d-rose font-black text-xs rounded-xl cursor-pointer flex items-center gap-2 shadow-lg"
                            style={{
                              background: "linear-gradient(135deg, #e11d48, #be123c)",
                              border: "1px solid rgba(244,63,94,0.4)",
                            }}
                          >
                            <span>🚀 Start Test Now ({examModeChoice === "exam" ? "CBT Exam" : "Practice"})</span>
                            <span>→</span>
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                            <span>📹</span>
                            <span>Send video questions to instantly activate this test</span>
                          </div>
                          <button
                            onClick={() => handleLaunchTest(test)}
                            className="px-4 py-2 rounded-xl text-xs font-bold bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 border border-white/[0.1] cursor-pointer transition flex items-center gap-1.5"
                          >
                            <span>+ Add Video Questions</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ingestion Help Box */}
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200 space-y-2">
              <div className="font-bold text-white flex items-center gap-1.5">
                <span>💡</span>
                <span>Video Questions Kaise Add Karein?</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-slate-300 leading-relaxed text-[11px]">
                <li>Aap apne Made Easy solution video me se question text, options, aur answer chat me paste kar dijiye.</li>
                <li>Agar question MSQ hai (multiple options correct jaise Q.2, Q.10, Q.14), hum automatically checkboxes aur multiple correct answers set kar denge.</li>
                <li>Marks (+1, +2), Negative marking, aur step-by-step LaTeX formula solution automatically generate ho kar test series me jud jayega!</li>
              </ol>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
