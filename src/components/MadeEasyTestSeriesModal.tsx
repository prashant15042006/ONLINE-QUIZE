"use client";

import React, { useState } from "react";
import { Question, Subject, Chapter } from "../data/quizData";
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
  const [selectedSubjectKey, setSelectedSubjectKey] = useState<string>("demo");
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
    // ── CS Demo Test (Full Mock) ──
    {
      key: "demo",
      name: "CS Demo Test (Full Mock — 65 Qs)",
      shortName: "🔥 DEMO TEST",
      icon: "🎯",
      accent: "from-emerald-600 to-teal-600",
      tests: [
        {
          id: "me-cs-demo-full",
          name: "CS DEMO TEST — GATE CS Full Pattern",
          testNumber: 1,
          type: "Full Syllabus Test" as const,
          totalQuestions: 65,
          totalMarks: 100,
          durationMinutes: 180,
          status: "available" as const,
          scqCount: 43,
          msqCount: 11,
          natCount: 11,
          topics: [
            "General Aptitude (GA) — Verbal & Quant",
            "Engineering Mathematics (Calculus, Linear Algebra, Probability)",
            "Computer Organization & Architecture (COA)",
            "Operating Systems (OS)",
            "DBMS & Transactions",
            "Computer Networks (CN)",
            "Theory of Computation (TOC)",
            "Compiler Design (CD)",
            "Data Structures & Algorithms (DS & Algo)",
            "Digital Logic (DL)",
            "Discrete Mathematics (DM)",
          ],
          chapterId: "me-cs-demo-test",
        },
      ] as MadeEasyTestMeta[],
    },
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
          id: "os-twt-13",
          name: "GATE 2027 CS TOPIC WISE TEST - 13 (Operating Systems)",
          testNumber: 13,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_OS_TWT13_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
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
            "Cyclic Page References & FIFO/LRU/OPT (MSQ)",
            "Demand Paging & Page Fault Semantics (MSQ)",
            "File Allocation: Contiguous, Linked & Indexed",
            "Deadlocks, Safe States & Banker's Algorithm (MSQ)",
            "Dynamic Storage Allocation: First/Best/Worst Fit",
            "Effective Memory Access Time with TLB (NAT)",
            "Memory Allocation Algorithm Properties Matching",
            "Compilers, Linkers & Loader Responsibilities",
            "Bit Map Free Disk Space Management (NAT)",
            "Least Recently Used (LRU) Page Replacement",
            "Single-Level Page Table Size Calculation",
          ],
          chapterId: "os-gate-2027-twt-13",
        },
        {
          id: "os-twt-14",
          name: "GATE 2027 CS TOPIC WISE TEST - 14 (Operating Systems)",
          testNumber: 14,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_OS_TWT14_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 7,
          msqCount: 4,
          natCount: 6,
          topics: [
            "Interrupts & Process State Transitions (MSQ)",
            "User-Level Threads vs Kernel-Level Threads (MSQ)",
            "Semaphores & Minimum Prints until Deadlock (NAT)",
            "LRTF CPU Scheduling with Highest PID Tie-Break (NAT)",
            "Preemptive SRTF Metrics & Response Time (MSQ)",
            "Round Robin Average Turnaround Time (NAT)",
            "Preemptive Priority Scheduling Waiting Times",
            "Critical Section Mutual Exclusion & Progress",
            "Short, Mid & Long Term Schedulers (MSQ)",
            "Fork System Call & Process Trees",
            "Round Robin TAT with Simultaneous Arrival (NAT)",
            "Starvation in Scheduling Algorithms",
            "Counting Semaphore Arithmetic Operations (NAT)",
            "SRTF Context Switches Counting (NAT)",
            "Thread Memory Sharing & Direct Communication",
            "Starvation Susceptibility (HRRN, SRTF, MLQ)",
            "Non-preemptive Waiting Time Priority Equivalence",
          ],
          chapterId: "os-gate-2027-twt-14",
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
          id: "dbms-twt-7",
          name: "GATE 2027 CS TOPIC WISE TEST - 7 (DBMS)",
          testNumber: 7,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_DBMS_TWT7_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 10,
          msqCount: 4,
          natCount: 3,
          topics: [
            "ER Diagram to Relational Model (M:N PK)",
            "Armstrong's Axioms & Functional Dependencies",
            "B-Tree Insertions, Node Capacity & Splitting (NAT)",
            "Normal Forms (2NF, 3NF, BCNF, 4NF)",
            "Foreign Keys & ON DELETE CASCADE Cascade Deletions",
            "Dense vs Sparse Index Disk Blocks Calculation (NAT)",
            "ERD Reduction to Minimal BCNF Tables",
            "B-Tree vs B+ Tree Node Structure & Search Time",
            "Clustering, Secondary & Multilevel Indexing Principles",
            "Candidate Keys & Prime Attributes Determination",
            "Lossless Join & Dependency Preservation Decomposition",
            "Canonical / Minimal Cover of Functional Dependencies",
            "FD Set Equivalence & Covers Testing",
            "Lossless/Dependency-Preserving Normal Form Decomposition",
            "2NF & 3NF Violation Checks on Relation S",
            "Superkeys Count via Candidate Keys (NAT)",
            "Foreign Key NULL Values & Referential Integrity Constraints",
          ],
          chapterId: "dbms-gate-2027-twt-7",
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
          id: "cn-twt-17",
          name: "GATE 2027 CS TOPIC WISE TEST - 17 (Computer Networks)",
          testNumber: 17,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_CN_TWT17_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 5,
          msqCount: 5,
          natCount: 7,
          topics: [
            "Binary Exponential Backoff",
            "IPv4 Header & HTTP Protocols",
            "CRC Polynomial Division",
            "Hamming Distance & Code",
            "Network Devices (Hub, Bridge, Switch)",
            "CSMA/CD Data Rate & Cable Length",
            "Stop-and-Wait Utilization & Sequence Numbers",
            "Switch Interconnection Links",
            "Selective Repeat Window Size & Bits",
            "DNS Iterative Resolution Delays",
            "Sliding Window Protocol Comparison",
            "Collision & Broadcast Domains",
          ],
          chapterId: "cn-gate-2027-twt-17",
        },
        {
          id: "cn-twt-18",
          name: "GATE 2027 CS TOPIC WISE TEST - 18 (Computer Networks - 2)",
          testNumber: 18,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_CN_TWT18_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 6,
          msqCount: 4,
          natCount: 7,
          topics: [
            "Connection-Oriented vs Connectionless Protocols",
            "IPv4 Router Forwarding & Header Checksum",
            "Directed Broadcast Address & Network ID 1s",
            "Class C Subnetting Host Calculation",
            "Distance Vector vs Link State Routing",
            "OSPF Routing Protocol Properties",
            "TCP Cumulative Acknowledgment",
            "TCP Sequence Number Wrap-around",
            "TCP Full-Duplex & Elastic Applications",
            "CIDR Address Block Allocation",
            "Subnetting First & Last Subnet DBA",
            "IPv4 Fragmentation Offset Calculation",
            "End-to-End Transport Layer Encapsulation",
            "TCP Round Trip Time (RTT) Estimation",
            "CIDR Route Aggregation & Supernetting",
            "TCP Three-Way Handshake Sequence Numbers",
            "Distance Vector Count-to-Infinity Problem",
          ],
          chapterId: "cn-gate-2027-twt-18",
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
          name: "GATE 2027 CS TOPIC WISE TEST - 1 (Theory of Computation - 1)",
          testNumber: 1,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_TOC_TWT1_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 9,
          msqCount: 5,
          natCount: 3,
          topics: [
            "Divisibility & Regular Expressions",
            "CFL & DCFL Recognition",
            "Context-Free Grammars & Productions",
            "DFA Counting & Combinatorics",
            "Minimal Automata Construction",
            "Language Subsets & Closure Properties",
            "Reversal of DFA State Complexity",
          ],
          chapterId: "me-toc-gate-2027-twt-1",
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
          id: "cd-twt-23",
          name: "GATE 2027 CS TOPIC WISE TEST - 23 (Compiler Design)",
          testNumber: 23,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_CD_TWT23_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 9,
          msqCount: 2,
          natCount: 6,
          topics: [
            "Lexical Analysis & Maximal Munch Rule",
            "Compiler Phases & Roles (Type Checking, Symbol Table)",
            "Semantic Analysis Error Detection",
            "C Compilation vs Linker Behavior",
            "Language Processing Tools (Loader, Linker, Assembler)",
            "Symbol Table Properties & Performance",
            "L-Attributed SDT Violations & Rules",
            "Code Optimization (CSE, Constant Folding, Strength Reduction)",
            "S-Attributed & L-Attributed SDT Traversal",
            "SDTS Parse Tree Leaf Counting",
            "Semantic Action Deduction in SDTS",
            "Custom Operator Precedence & Associativity",
            "Intermediate 3AC Code to High-Level Code",
            "Grammar Translation Rules & Evaluation",
            "Three-Address Code Temporary Variables",
            "Lexical Errors Identification in C",
            "Basic Block DAG Representation (Nodes + Edges)",
          ],
          chapterId: "cd-gate-2027-twt-23",
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
          id: "ds-twt-15",
          name: "GATE 2027 CS TOPIC WISE TEST - 15 (Programming & Data Structures)",
          testNumber: 15,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_DS_TWT15_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 11,
          msqCount: 2,
          natCount: 4,
          topics: [
            "C Recursion & Pointer Side-Effects",
            "Circular Queue Implementation",
            "Lower Triangular Matrix Indexing",
            "Static Variables & Extern in C",
            "Dynamic Memory & Memory Leaks",
            "Circular Queue with Linked List",
            "Stack & Queue Manipulation",
            "Pointer to Array & 2D Arrays",
            "Postfix Expression Stack Depth",
            "Multi-dimensional Array Pointer Equivalence",
            "Modulo Loop Termination Condition",
            "Short-Circuit Operator Evaluation",
          ],
          chapterId: "ds-gate-2027-twt-15",
        },
        {
          id: "ds-twt-16",
          name: "GATE 2027 CS TOPIC WISE TEST - 16 (Data Structures)",
          testNumber: 16,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_DS_TWT16_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 10,
          msqCount: 3,
          natCount: 4,
          topics: [
            "BST Labeling & Properties",
            "BST Inorder Successor & Predecessor",
            "Linked List Reversal",
            "Remove Last Node Bug Analysis",
            "BST Construction & Path Analysis",
            "Binary Tree Transformation",
            "AVL Tree Deletion & Rotations",
            "AVL Tree Properties (Min/Max Nodes)",
            "AVL Tree Insertion & Level Sum",
            "Linked List Insert at End",
            "Full 4-ary Tree — Internal Nodes",
            "Hash Table Chaining & Slot Probability",
          ],
          chapterId: "ds-gate-2027-twt-16",
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "dl",
      name: "Digital Logic (DL)",
      shortName: "DL",
      icon: "💡",
      accent: "from-rose-600 to-red-600",
      tests: [] as MadeEasyTestMeta[],
    },
    {
      key: "dm",
      name: "Discrete Mathematics & Graph Theory",
      shortName: "DM",
      icon: "📐",
      accent: "from-fuchsia-600 to-pink-600",
      tests: [] as MadeEasyTestMeta[],
    },
    {
      key: "em_ga",
      name: "Engineering Mathematics & General Aptitude",
      shortName: "EM & GA",
      icon: "📊",
      accent: "from-teal-600 to-cyan-600",
      tests: [
        {
          id: "ga-twt-11",
          name: "GATE 2027 CS TOPIC WISE TEST - 11 (General Aptitude)",
          testNumber: 11,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_APTITUDE_TWT11_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 15,
          msqCount: 0,
          natCount: 2,
          topics: [
            "Clocks & Gain of Time",
            "Set Theory & Venn Diagrams (NAT)",
            "Directions & Spatial Reasoning",
            "Number Matrix Puzzles",
            "Geometry & Similar Triangles (NAT)",
            "Infinite Series & Geometric Progressions",
            "Combinatorics & Step Climbing Recurrence",
            "Surds & Real Solutions of Equations",
            "Mensuration: Cylinder & Open Box Volume",
            "Perimeter with Circular Corner Arcs",
            "Pipes, Cisterns & Simultaneous Flow Rates",
            "Profit, Loss & Equivalent Margins",
            "Defective Products Percentage",
            "Averages & Integer Inequalities",
            "Time, Speed & Train Stoppages",
            "Quadratic Inequalities & Fare Calculations",
            "Extreme Digit Permutations & Differences",
          ],
          chapterId: "ga-gate-2027-twt-11",
        },
        {
          id: "ga-twt-12",
          name: "GATE 2027 CS TOPIC WISE TEST - 12 (General Aptitude)",
          testNumber: 12,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_APTITUDE_TWT12_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 17,
          msqCount: 0,
          natCount: 0,
          topics: [
            "Linear Arrangement & House Colours",
            "Mirror Images & Water Reflections",
            "Critical Reasoning & Salience Fallacy",
            "Complex Blood Relations & Siblings",
            "Reading Comprehension: Optimism in Life",
            "Venn Diagrams: Educated & Employed",
            "Word Coding: Reverse & Alphabet Shifts",
            "Vocabulary: Sumptuous & Ominous",
            "Verbal Fillers: Concessive Clauses",
            "Paper Folding & Symmetric Punching",
            "Logical Venn Diagrams: Subsets & Disjoints",
            "Clock Mirror Reflections (11:60 Rule)",
            "Geometric Square Counting in Dot Grids",
            "Verbal Inference: Economy Shift to Services",
            "Alphabet Positional Squares Coding",
            "Syllogisms: 4 Categorical Deductions",
          ],
          chapterId: "ga-gate-2027-twt-12",
        },
      ] as MadeEasyTestMeta[],
    },
  ];

  const currentSubjectObj =
    subjectsConfig.find((s) => s.key === selectedSubjectKey) || subjectsConfig[0];

  const handleLaunchTest = (test: MadeEasyTestMeta) => {
    // Demo Test — serve the 65 imported questions
    if (test.chapterId === "me-cs-demo-test") {
      onStartTest(MADE_EASY_DEMO_TEST_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // TOC TWT-1 — serve the 17 imported TOC questions
    if (test.chapterId === "me-toc-gate-2027-twt-1") {
      onStartTest(MADE_EASY_TOC_TWT1_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // GA TWT-11 — serve the 17 imported Aptitude questions (SCQ + NAT)
    if (test.chapterId === "ga-gate-2027-twt-11") {
      onStartTest(MADE_EASY_APTITUDE_TWT11_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // GA TWT-12 — serve the 17 imported Aptitude questions (SCQ)
    if (test.chapterId === "ga-gate-2027-twt-12") {
      onStartTest(MADE_EASY_APTITUDE_TWT12_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // OS TWT-13 — serve the 17 imported OS questions (MSQ + SCQ + NAT)
    if (test.chapterId === "os-gate-2027-twt-13") {
      onStartTest(MADE_EASY_OS_TWT13_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // OS TWT-14 — serve the 17 imported OS questions (MSQ + SCQ + NAT)
    if (test.chapterId === "os-gate-2027-twt-14") {
      onStartTest(MADE_EASY_OS_TWT14_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // DS TWT-15 — serve the 17 imported DS & C Programming questions (SCQ + MSQ + NAT)
    if (test.chapterId === "ds-gate-2027-twt-15") {
      onStartTest(MADE_EASY_DS_TWT15_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // DS TWT-16 — serve the 17 imported DS questions (BST, AVL, LL, Hash)
    if (test.chapterId === "ds-gate-2027-twt-16") {
      onStartTest(MADE_EASY_DS_TWT16_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // CN TWT-17 — serve the 17 imported CN questions
    if (test.chapterId === "cn-gate-2027-twt-17") {
      onStartTest(MADE_EASY_CN_TWT17_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // CN TWT-18 — serve the 17 imported CN questions (Network & Transport Layer)
    if (test.chapterId === "cn-gate-2027-twt-18") {
      onStartTest(MADE_EASY_CN_TWT18_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // CD TWT-23 — serve the 17 imported Compiler Design questions
    if (test.chapterId === "cd-gate-2027-twt-23") {
      onStartTest(MADE_EASY_CD_TWT23_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // DBMS TWT-7 — serve the 17 imported DBMS questions
    if (test.chapterId === "dbms-gate-2027-twt-7") {
      onStartTest(MADE_EASY_DBMS_TWT7_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // COA TWT-5 — serve from quizData chapter
    if (test.chapterId && twt5Chapter && twt5Chapter.questions.length > 0) {
      onStartTest(twt5Chapter.questions, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
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

        {/* Info & Mode Banner */}
        <div className="px-5 py-3 bg-gradient-to-r from-slate-900/90 via-indigo-950/60 to-slate-900/90 border-b border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="text-base shrink-0">📌</span>
            <span className="text-slate-300 leading-snug">
              <strong className="text-white">Authentic Tests:</strong> Jaise hi aap kisi bhi subject ka test question provide karenge, hum exact marks, negative marking, aur solutions ke saath live add karte jayenge!
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
                        {hasActiveTest ? `${subj.tests.length} Active Test` : "Tests to be added"}
                      </div>
                    </div>
                  </div>
                  {hasActiveTest ? (
                    <span className="text-[9px] font-black uppercase tracking-wide bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                      LIVE
                    </span>
                  ) : (
                    <span className="text-[9px] font-bold text-slate-500 bg-white/[0.03] px-1.5 py-0.5 rounded shrink-0">
                      Upcoming
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

            {/* Test Cards Grid OR Empty State */}
            {currentSubjectObj.tests.length === 0 ? (
              <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-dashed border-white/10 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-3xl mx-auto shadow-inner">
                  {currentSubjectObj.icon}
                </div>
                <div>
                  <h5 className="text-base font-bold text-white mb-1">
                    {currentSubjectObj.name}
                  </h5>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    Is subject ke tests abhi add nahi hue hain. Jaise hi aap questions provide karenge, hum unhe SCQ, MSQ, aur NAT format me live add kar denge.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold">
                  <span>💬 Questions chat me bhejein activate karne ke liye</span>
                </div>
              </div>
            ) : (
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
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Questions Addition Guide Box */}
            <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-indigo-200 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <span>💡</span>
                <span>Naye Subject ke Questions Kaise Add Honge?</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Aap subject-wise questions text ya screenshot chat me bhejein — hum SCQ (+1/-0.33, +2/-0.66), MSQ (multi-select check box), aur NAT (numeric fill-up box) ke saath test turant add kar denge!
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
