"use client";

import React, { useState, useMemo } from "react";
import { Question, Subject, EXAMS_DATA } from "../data/quizData";
import { MADE_EASY_DEMO_TEST_QUESTIONS } from "../data/madeEasyDemoTest";
import { MADE_EASY_TOC_TWT1_QUESTIONS } from "../data/madeEasyTOCTest1";
import { MADE_EASY_APTITUDE_TWT11_QUESTIONS } from "../data/madeEasyAptitudeTest11";
import { MADE_EASY_APTITUDE_TWT12_QUESTIONS } from "../data/madeEasyAptitudeTest12";
import { MADE_EASY_OS_TWT13_QUESTIONS } from "../data/madeEasyOSTest13";
import { MADE_EASY_OS_TWT14_QUESTIONS } from "../data/madeEasyOSTest14";
import { MADE_EASY_DS_TWT15_QUESTIONS } from "../data/madeEasyDSTest15";
import { MADE_EASY_DS_TWT16_QUESTIONS } from "../data/madeEasyDSTest16";
import { MADE_EASY_CN_TWT17_QUESTIONS } from "../data/madeEasyCNTest17";
import { MADE_EASY_CN_TWT18_QUESTIONS } from "../data/madeEasyCNTest18";
import { MADE_EASY_CD_TWT23_QUESTIONS } from "../data/madeEasyCDTest23";
import { MADE_EASY_DBMS_TWT7_QUESTIONS } from "../data/madeEasyDBMSTest7";
import { MADE_EASY_DM_TWT21_QUESTIONS } from "../data/madeEasyDMTest21";

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

export interface MadeEasyPaper {
  id: string;
  name: string;
  testNumber: number;
  subjectKey: string;
  subjectName: string;
  type: "Topic Wise Test" | "Full Syllabus Mock";
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  scqCount: number;
  msqCount: number;
  natCount: number;
  topics: string[];
  chapterId?: string;
  questions: Question[];
}

export default function MadeEasyTestSeriesModal({
  isOpen,
  onClose,
  gateSubjects,
  onStartTest,
}: Props) {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>("all");
  const [selectedTest, setSelectedTest] = useState<MadeEasyPaper | null>(null);
  const [chosenMode, setChosenMode] = useState<"exam" | "practice">("exam");
  const [previewTopicIndex, setPreviewTopicIndex] = useState<number | null>(null);

  // Reliable COA Twt-5 questions
  const coaQuestions = useMemo(() => {
    const coaSubj =
      gateSubjects.find((s) => s.id === "gate-cs-coa" || s.name.toLowerCase().includes("organization")) ||
      EXAMS_DATA.find((e) => e.id === "gate")?.branches?.find((b) => b.id === "cs")?.subjects?.find((s) => s.id === "gate-cs-coa");
    const twt5 = coaSubj?.chapters.find((c) => c.id === "coa-gate-2027-twt-5" || c.name.includes("Topic Wise Test - 5"));
    return twt5?.questions || [];
  }, [gateSubjects]);

  const allTests: MadeEasyPaper[] = useMemo(() => [
    {
      id: "me-cs-demo-full",
      name: "GATE 2027 CS Full Syllabus Mock Test (Demo Test)",
      testNumber: 1,
      subjectKey: "mock",
      subjectName: "Full Mock Test",
      type: "Full Syllabus Mock",
      totalQuestions: 65,
      totalMarks: 100,
      durationMinutes: 180,
      scqCount: 43,
      msqCount: 11,
      natCount: 11,
      topics: [
        "General Aptitude (Verbal & Quantitative Reasoning)",
        "Engineering Mathematics (Calculus, Linear Algebra, Probability)",
        "Computer Organization & Architecture (COA)",
        "Operating Systems (OS)",
        "Database Management Systems (DBMS)",
        "Computer Networks (CN)",
        "Theory of Computation (TOC)",
        "Compiler Design (CD)",
        "Data Structures & Algorithms (DS & Algo)",
        "Digital Logic Design (DL)",
        "Discrete Mathematics & Combinatorics",
      ],
      chapterId: "me-cs-demo-test",
      questions: MADE_EASY_DEMO_TEST_QUESTIONS,
    },
    {
      id: "coa-twt-5",
      name: "GATE 2027 CS TOPIC WISE TEST - 5 (COA)",
      testNumber: 5,
      subjectKey: "coa",
      subjectName: "COA",
      type: "Topic Wise Test",
      totalQuestions: coaQuestions.length || 17,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 11,
      msqCount: 4,
      natCount: 2,
      topics: [
        "Instruction Pipelining & CPI Calculations",
        "Pipeline Speedup & Branch Penalty Hazards",
        "CISC Micro-operations & Hazard Mitigation",
        "Addressing Modes & Memory Reference Calculations",
        "Control Memory & Microprogrammed Control Unit",
        "IEEE-754 Single & Double Precision Floating Point",
        "RAW / WAR / WAW Data Dependencies & Forwarding",
      ],
      chapterId: "coa-gate-2027-twt-5",
      questions: coaQuestions,
    },
    {
      id: "os-twt-13",
      name: "GATE 2027 CS TOPIC WISE TEST - 13 (Operating Systems)",
      testNumber: 13,
      subjectKey: "os",
      subjectName: "Operating Systems",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_OS_TWT13_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 7,
      msqCount: 7,
      natCount: 3,
      topics: [
        "Resource Allocation Graphs & Safe Sequences (MSQ)",
        "Segmentation Hardware & MMU Roles (MSQ)",
        "Shortest Seek Time First (SSTF) Disk Scheduling",
        "Paging & Page Size Trade-offs (MSQ)",
        "Multi-level Paging Levels Calculation (NAT)",
        "Inverted Page Tables & Control Bits (MSQ)",
        "Cyclic Page References & FIFO/LRU/OPT Replacement",
        "Demand Paging & Page Fault Semantics (MSQ)",
        "File Allocation: Contiguous, Linked & Indexed",
        "Deadlocks, Safe States & Banker's Algorithm",
        "Effective Memory Access Time with TLB (NAT)",
        "Bit Map Free Disk Space Management (NAT)",
      ],
      chapterId: "os-gate-2027-twt-13",
      questions: MADE_EASY_OS_TWT13_QUESTIONS,
    },
    {
      id: "os-twt-14",
      name: "GATE 2027 CS TOPIC WISE TEST - 14 (Operating Systems)",
      testNumber: 14,
      subjectKey: "os",
      subjectName: "Operating Systems",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_OS_TWT14_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 7,
      msqCount: 4,
      natCount: 6,
      topics: [
        "Interrupts & Process State Transitions (MSQ)",
        "User-Level Threads vs Kernel-Level Threads (MSQ)",
        "Counting Semaphores & Prints until Deadlock (NAT)",
        "LRTF CPU Scheduling with Highest PID Tie-Break",
        "Preemptive SRTF Metrics & Response Time",
        "Round Robin Average Turnaround Time (NAT)",
        "Preemptive Priority Scheduling Waiting Times",
        "Critical Section Mutual Exclusion & Progress",
        "Fork System Call & Process Tree Hierarchy",
        "Starvation Susceptibility (HRRN, SRTF, MLQ)",
      ],
      chapterId: "os-gate-2027-twt-14",
      questions: MADE_EASY_OS_TWT14_QUESTIONS,
    },
    {
      id: "dbms-twt-7",
      name: "GATE 2027 CS TOPIC WISE TEST - 7 (DBMS)",
      testNumber: 7,
      subjectKey: "dbms",
      subjectName: "DBMS",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_DBMS_TWT7_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 10,
      msqCount: 4,
      natCount: 3,
      topics: [
        "ER Diagram to Relational Model (M:N Primary Key)",
        "Armstrong's Axioms & Functional Dependencies",
        "B-Tree Insertions, Node Capacity & Splitting (NAT)",
        "Normal Forms (2NF, 3NF, BCNF, 4NF)",
        "Foreign Keys & Referential Integrity Constraints",
        "Dense vs Sparse Index Disk Blocks Calculation",
        "B-Tree vs B+ Tree Node Structure & Search Time",
        "Lossless Join & Dependency Preservation Decomposition",
        "Canonical / Minimal Cover of Functional Dependencies",
      ],
      chapterId: "dbms-gate-2027-twt-7",
      questions: MADE_EASY_DBMS_TWT7_QUESTIONS,
    },
    {
      id: "cn-twt-17",
      name: "GATE 2027 CS TOPIC WISE TEST - 17 (Computer Networks)",
      testNumber: 17,
      subjectKey: "cn",
      subjectName: "Computer Networks",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_CN_TWT17_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 5,
      msqCount: 5,
      natCount: 7,
      topics: [
        "Binary Exponential Backoff Algorithm",
        "IPv4 Header Structure & Protocol Verification",
        "CRC Polynomial Division & Error Detection",
        "Hamming Distance & Single Error Correction",
        "Network Devices: Hub, Bridge, Switch & Router",
        "CSMA/CD Maximum Data Rate & Cable Length",
        "Stop-and-Wait Utilization & Sequence Numbers",
        "Selective Repeat Window Size & Sequence Bits",
        "DNS Iterative vs Recursive Resolution Delays",
      ],
      chapterId: "cn-gate-2027-twt-17",
      questions: MADE_EASY_CN_TWT17_QUESTIONS,
    },
    {
      id: "cn-twt-18",
      name: "GATE 2027 CS TOPIC WISE TEST - 18 (Computer Networks)",
      testNumber: 18,
      subjectKey: "cn",
      subjectName: "Computer Networks",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_CN_TWT18_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 6,
      msqCount: 4,
      natCount: 7,
      topics: [
        "Connection-Oriented vs Connectionless Protocols",
        "IPv4 Router Forwarding & Header Checksum",
        "Directed Broadcast Address & Network ID",
        "Distance Vector vs Link State Routing (OSPF)",
        "TCP Cumulative Acknowledgment Semantics",
        "TCP Sequence Number Wrap-around Time",
        "CIDR Address Block Allocation & Supernetting",
        "IPv4 Fragmentation Offset Calculation",
        "TCP Round Trip Time (RTT) & Karn's Algorithm",
        "TCP Three-Way Handshake Initial Sequence Numbers",
      ],
      chapterId: "cn-gate-2027-twt-18",
      questions: MADE_EASY_CN_TWT18_QUESTIONS,
    },
    {
      id: "toc-twt-1",
      name: "GATE 2027 CS TOPIC WISE TEST - 1 (TOC)",
      testNumber: 1,
      subjectKey: "toc",
      subjectName: "Theory of Computation",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_TOC_TWT1_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 9,
      msqCount: 5,
      natCount: 3,
      topics: [
        "Divisibility, Modulo Automata & Regular Expressions",
        "CFL & DCFL Recognition & Pushdown Automata",
        "Context-Free Grammars & Ambiguity Removal",
        "DFA State Counting & Combinatorics",
        "Minimal Automata Construction (Myhill-Nerode)",
        "Language Subsets & Closure Properties",
        "Reversal of DFA & Exponential State Explosion",
      ],
      chapterId: "me-toc-gate-2027-twt-1",
      questions: MADE_EASY_TOC_TWT1_QUESTIONS,
    },
    {
      id: "cd-twt-23",
      name: "GATE 2027 CS TOPIC WISE TEST - 23 (Compiler Design)",
      testNumber: 23,
      subjectKey: "cd",
      subjectName: "Compiler Design",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_CD_TWT23_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 9,
      msqCount: 2,
      natCount: 6,
      topics: [
        "Lexical Analysis & Maximal Munch Rule",
        "Compiler Phases & Roles (Type Checking, Symbol Table)",
        "Semantic Analysis Error Detection",
        "L-Attributed vs S-Attributed SDT Evaluation",
        "Code Optimization (CSE, Constant Folding)",
        "Operator Precedence & Associativity Resolution",
        "Three-Address Code Temporary Variable Minimization",
        "Basic Block DAG Representation (Nodes + Edges)",
      ],
      chapterId: "cd-gate-2027-twt-23",
      questions: MADE_EASY_CD_TWT23_QUESTIONS,
    },
    {
      id: "ds-twt-15",
      name: "GATE 2027 CS TOPIC WISE TEST - 15 (Programming & DS)",
      testNumber: 15,
      subjectKey: "ds_algo",
      subjectName: "Data Structures",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_DS_TWT15_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 11,
      msqCount: 2,
      natCount: 4,
      topics: [
        "C Recursion, Stack Frames & Pointer Side-Effects",
        "Circular Queue Implementation & Modulo Arithmetic",
        "Lower Triangular Matrix Row-Major Indexing",
        "Static Variables & Storage Classes in C",
        "Dynamic Memory Allocation (malloc, free) & Memory Leaks",
        "Pointer to Array vs Array of Pointers",
        "Postfix Expression Evaluation & Stack Depth",
      ],
      chapterId: "ds-gate-2027-twt-15",
      questions: MADE_EASY_DS_TWT15_QUESTIONS,
    },
    {
      id: "ds-twt-16",
      name: "GATE 2027 CS TOPIC WISE TEST - 16 (Advanced DS)",
      testNumber: 16,
      subjectKey: "ds_algo",
      subjectName: "Data Structures",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_DS_TWT16_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 10,
      msqCount: 3,
      natCount: 4,
      topics: [
        "Binary Search Tree (BST) Properties & Node Labeling",
        "BST Inorder Successor & Predecessor Algorithms",
        "Singly Linked List Reversal (Iterative & Recursive)",
        "BST Construction from Preorder & Postorder Sequences",
        "AVL Tree Rotations (LL, RR, LR, RL) & Height Bounds",
        "Full 4-ary Tree Internal Nodes & Leaves",
        "Hash Table Separate Chaining & Collision Probability",
      ],
      chapterId: "ds-gate-2027-twt-16",
      questions: MADE_EASY_DS_TWT16_QUESTIONS,
    },
    {
      id: "dm-twt-21",
      name: "GATE 2027 CS TOPIC WISE TEST - 21 (Discrete Mathematics)",
      testNumber: 21,
      subjectKey: "dm",
      subjectName: "Discrete Math",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_DM_TWT21_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 8,
      msqCount: 5,
      natCount: 4,
      topics: [
        "Injective & Surjective Function Cardinalities",
        "Permutations of Strings with Fixed Character Frequency",
        "Propositional Logic Tautologies & Equivalences",
        "Function Bounds via Pigeonhole Principle",
        "Universal Equivalence Relation Cardinality",
        "Relatively Prime Integers via Principle of Inclusion-Exclusion",
        "Identity Relation & Equivalence Classes on Power Sets",
      ],
      chapterId: "dm-gate-2027-twt-21",
      questions: MADE_EASY_DM_TWT21_QUESTIONS,
    },
    {
      id: "ga-twt-11",
      name: "GATE 2027 CS TOPIC WISE TEST - 11 (General Aptitude - Quant)",
      testNumber: 11,
      subjectKey: "ga",
      subjectName: "General Aptitude",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_APTITUDE_TWT11_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 15,
      msqCount: 0,
      natCount: 2,
      topics: [
        "Clocks: Minute & Hour Hand Angles & Time Gain/Loss",
        "Set Theory & 3-Circle Venn Diagrams",
        "Directions & Spatial Reasoning Distance",
        "Number Matrix Puzzles & Patterns",
        "Geometry & Similar Triangles Proportions",
        "Pipes, Cisterns & Simultaneous Flow Rates",
        "Time, Speed & Distance: Train Length & Stoppages",
      ],
      chapterId: "ga-gate-2027-twt-11",
      questions: MADE_EASY_APTITUDE_TWT11_QUESTIONS,
    },
    {
      id: "ga-twt-12",
      name: "GATE 2027 CS TOPIC WISE TEST - 12 (General Aptitude - Verbal)",
      testNumber: 12,
      subjectKey: "ga",
      subjectName: "General Aptitude",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_APTITUDE_TWT12_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      scqCount: 17,
      msqCount: 0,
      natCount: 0,
      topics: [
        "Linear Seating Arrangement & Distribution",
        "Mirror Images & Water Reflections Symmetry",
        "Critical Reasoning & Logical Fallacies",
        "Reading Comprehension: Tone & Inference",
        "Word Coding: Reverse Lettering & Alphabet Shifts",
        "Syllogisms & Categorical Deductions",
      ],
      chapterId: "ga-gate-2027-twt-12",
      questions: MADE_EASY_APTITUDE_TWT12_QUESTIONS,
    },
  ], [coaQuestions]);

  const subjectFilters = [
    { key: "all", label: `All Tests (${allTests.length})` },
    { key: "mock", label: "Full Mock (1)" },
    { key: "coa", label: "COA (1)" },
    { key: "os", label: "OS (2)" },
    { key: "dbms", label: "DBMS (1)" },
    { key: "cn", label: "CN (2)" },
    { key: "toc", label: "TOC (1)" },
    { key: "cd", label: "CD (1)" },
    { key: "ds_algo", label: "DS & Algo (2)" },
    { key: "dm", label: "Discrete Math (1)" },
    { key: "ga", label: "General Aptitude (2)" },
  ];

  const filteredTests = selectedSubjectFilter === "all"
    ? allTests
    : allTests.filter((t) => t.subjectKey === selectedSubjectFilter);

  const handleStartExam = (test: MadeEasyPaper, mode: "exam" | "practice") => {
    onStartTest(test.questions, test.name, mode, test.durationMinutes);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 animate-fade-in">
      <div className="bg-[#0b101b] border border-slate-700/80 rounded-3xl max-w-4xl w-full p-4 sm:p-6 text-slate-100 shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-xl shadow-lg shadow-rose-500/20">
              🎯
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-base">MADE EASY Online Test Series</h3>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                  GATE CS &amp; IT 2027
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Authentic Topic Wise &amp; Full Mock Tests with Official CBT Timer &amp; Marking</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            VIEW 1: DETAILED TEST INFORMATION & TOPIC LINKS (MATCHES PYQ STYLE)
        ══════════════════════════════════════════════════════════════════ */}
        {selectedTest ? (
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {/* Breadcrumb / Navigation Bar */}
            <div className="flex items-center justify-between bg-slate-900/80 px-4 py-2.5 rounded-2xl border border-slate-800">
              <button
                onClick={() => { setSelectedTest(null); setPreviewTopicIndex(null); }}
                className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1.5 transition cursor-pointer"
              >
                ← Back to All Tests
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-white truncate max-w-[200px] sm:max-w-none">
                  {selectedTest.name}
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700 shrink-0">
                  {selectedTest.subjectName}
                </span>
              </div>
            </div>

            {/* Dual Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              
              {/* LEFT CARD: EXAM INFORMATION */}
              <div className="md:col-span-5 bg-[#0f172a]/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-2 text-slate-300 font-bold text-sm mb-4">
                    <span className="text-rose-400 text-base">ⓘ</span>
                    <span>Test Information</span>
                  </div>

                  {/* 3 Stat Boxes */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    <div className="bg-[#1e293b]/70 border border-slate-700/60 rounded-xl p-2.5 text-center">
                      <div className="text-lg sm:text-xl font-black text-white">{selectedTest.totalMarks}</div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Max Marks</div>
                    </div>

                    <div className="bg-[#1e293b]/70 border border-slate-700/60 rounded-xl p-2.5 text-center">
                      <div className="text-lg sm:text-xl font-black text-white">{selectedTest.totalQuestions}</div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Questions</div>
                    </div>

                    <div className="bg-[#1e293b]/70 border border-rose-500/40 rounded-xl p-2.5 text-center relative overflow-hidden">
                      <div className="text-lg sm:text-xl font-black text-rose-400">{selectedTest.durationMinutes}m</div>
                      <div className="text-[9px] font-bold text-rose-300 uppercase tracking-wider">Duration</div>
                    </div>
                  </div>

                  {/* Mode Selector Tabs */}
                  <div className="mb-5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
                    <div className="text-[10px] font-bold text-slate-400 mb-1 px-1">Select Test Mode:</div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setChosenMode("exam")}
                        className={`py-1.5 px-2 rounded-lg text-xs font-black transition cursor-pointer border ${
                          chosenMode === "exam"
                            ? "bg-rose-600 border-rose-500 text-white shadow-md"
                            : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                        }`}
                      >
                        ⏱ CBT Exam (Timer)
                      </button>
                      <button
                        type="button"
                        onClick={() => setChosenMode("practice")}
                        className={`py-1.5 px-2 rounded-lg text-xs font-black transition cursor-pointer border ${
                          chosenMode === "practice"
                            ? "bg-emerald-600 border-emerald-500 text-white shadow-md"
                            : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                        }`}
                      >
                        💡 Practice (Answers)
                      </button>
                    </div>
                  </div>

                  {/* Benchmark & Marking Breakdown */}
                  <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span>📝</span> Single Choice (SCQ)
                      </span>
                      <span className="font-bold text-blue-400">{selectedTest.scqCount} Questions</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span>☑️</span> Multi-Select (MSQ)
                      </span>
                      <span className="font-bold text-purple-400">{selectedTest.msqCount} Questions</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span>🔢</span> Numerical (NAT)
                      </span>
                      <span className="font-bold text-amber-400">{selectedTest.natCount} Questions</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <span>⚖️</span> Negative Marking
                      </span>
                      <span className="font-bold text-rose-400">−0.33 / −0.66 (SCQ)</span>
                    </div>
                  </div>
                </div>

                {/* Left Card Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => handleStartExam(selectedTest, chosenMode)}
                    className="w-full py-3 btn-3d-green font-black text-xs sm:text-sm rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
                  >
                    <span>{chosenMode === "exam" ? `Start CBT Exam (${selectedTest.durationMinutes}m) 🚀` : "Start Practice Session 💡"}</span>
                  </button>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => { setSelectedTest(null); setPreviewTopicIndex(null); }}
                      className="text-[11px] text-slate-400 hover:text-white font-bold flex items-center gap-1 cursor-pointer transition"
                    >
                      <span>🔍</span> Explore More Tests
                    </button>
                    <span className="text-[11px] text-emerald-400 font-bold">
                      100% Authentic Pattern
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD: SYLLABUS & TOPIC LINKS */}
              <div className="md:col-span-7 bg-[#0f172a]/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                      <span className="text-rose-400 text-base">⊞</span>
                      <span>Syllabus &amp; Core Topics</span>
                    </div>
                    <span className="text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold px-2.5 py-0.5 rounded-full">
                      {selectedTest.topics.length} Topics
                    </span>
                  </div>

                  {/* Topics Grid: Clickable or previewable topics */}
                  <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                    {selectedTest.topics.map((topic, idx) => {
                      const isHovered = previewTopicIndex === idx;
                      return (
                        <div
                          key={idx}
                          onMouseEnter={() => setPreviewTopicIndex(idx)}
                          className={`p-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-between border ${
                            isHovered
                              ? "bg-rose-500/20 border-rose-400 text-white"
                              : "bg-[#1e293b]/70 border-slate-700/70 text-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-lg bg-black/40 text-rose-300 font-black text-[10px] flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span>{topic}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-bold">GATE 2027</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Question preview / tip box */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                    <div className="text-slate-400 text-[11px] flex items-center justify-between">
                      <span>💡 MSQ (Multiple Select) and NAT questions have ZERO negative marking!</span>
                      <span className="text-emerald-400 font-bold">Official Marking</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Topic Wise Test • SCQ / MSQ / NAT Breakdown</span>
                  <button
                    onClick={() => handleStartExam(selectedTest, chosenMode)}
                    className="text-rose-400 hover:text-rose-300 font-bold cursor-pointer"
                  >
                    Start Test Now →
                  </button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* ══════════════════════════════════════════════════════════════════
              VIEW 2: LIST OF ALL TESTS WITH SUBJECT FILTER (IDENTICAL TO PYQ)
          ══════════════════════════════════════════════════════════════════ */
          <>
            {/* Subject Filter Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2.5 mb-2 shrink-0 scrollbar-none">
              {subjectFilters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setSelectedSubjectFilter(f.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer border ${
                    selectedSubjectFilter === f.key
                      ? "bg-rose-600 border-rose-500 text-white font-black shadow-md"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Tests Grid (Matching PYQ Papers Grid layout) */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pr-1">
              {filteredTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-slate-950/90 border border-slate-800 hover:border-rose-500/50 p-4 rounded-2xl transition flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                        {test.type === "Full Syllabus Mock" ? "Full Length Mock" : `TWT #${test.testNumber} • ${test.subjectName}`}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          {test.totalMarks} Marks
                        </span>
                        <span className="text-[10px] text-rose-300 font-bold bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                          ⏱ {test.durationMinutes}m
                        </span>
                      </div>
                    </div>
                    <h4 className="font-extrabold text-white text-sm group-hover:text-rose-300 transition mb-1 leading-snug">
                      {test.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {test.totalQuestions} Questions ({test.scqCount} SCQ, {test.msqCount} MSQ, {test.natCount} NAT) • {test.topics.slice(0, 3).join(", ")}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      GATE 2027 Pattern
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setSelectedTest(test)}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl cursor-pointer border border-slate-700 transition"
                      >
                        Test Info 📋
                      </button>
                      <button
                        onClick={() => handleStartExam(test, "exam")}
                        className="px-3.5 py-1.5 btn-3d-green text-xs font-bold rounded-xl cursor-pointer shadow-md"
                      >
                        Attempt {test.durationMinutes}m 🚀
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
