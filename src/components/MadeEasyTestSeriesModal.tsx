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
    // â”€â”€ CS Demo Test (Full Mock) â”€â”€
    {
      key: "demo",
      name: "CS Demo Test (Full Mock â€” 65 Qs)",
      shortName: "ðŸ”¥ DEMO TEST",
      icon: "ðŸŽ¯",
      accent: "from-emerald-600 to-teal-600",
      tests: [
        {
          id: "me-cs-demo-full",
          name: "CS DEMO TEST â€” GATE CS Full Pattern",
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
            "General Aptitude (GA) â€” Verbal & Quant",
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
      icon: "ðŸ–¥ï¸",
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
      icon: "âš™ï¸",
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
      icon: "ðŸ—„ï¸",
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
      icon: "ðŸŒ",
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
      icon: "ðŸ”¤",
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
      icon: "âš¡",
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
      icon: "ðŸŒ²",
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
            "Full 4-ary Tree â€” Internal Nodes",
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
      icon: "ðŸ’¡",
      accent: "from-rose-600 to-red-600",
      tests: [] as MadeEasyTestMeta[],
    },
    {
      key: "dm",
      name: "Discrete Mathematics & Graph Theory",
      shortName: "DM",
      icon: "ðŸ“",
      accent: "from-fuchsia-600 to-pink-600",
      tests: [
        {
          id: "dm-twt-21",
          name: "GATE 2027 CS TOPIC WISE TEST - 21 (Discrete Mathematics)",
          testNumber: 21,
          type: "Topic Wise Test",
          totalQuestions: MADE_EASY_DM_TWT21_QUESTIONS.length,
          totalMarks: 25,
          durationMinutes: 45,
          status: "available",
          scqCount: 8,
          msqCount: 5,
          natCount: 4,
          topics: [
            "Injective & Surjective Function Cardinalities",
            "Strings with Fixed Character Frequency (Combinatorics)",
            "Pass/Fail Examination Outcomes (Binomial Symmetry)",
            "Propositional Logic Tautologies & Equivalences",
            "Function Injective/Surjective Bounds (Pigeonhole Principle)",
            "Complement Counting on Subsets with Odd Numbers (NAT)",
            "Universal Equivalence Relation Size (NAT)",
            "Relatively Prime Integers via PIE (NAT)",
            "Non-Tautology Implication Identification",
            "Unordered Disjoint Subsets Pairs Counting",
            "Biconditional Logic Expression Equivalences (MSQ)",
            "Predicate Logic Universal Conditional Statements (MSQ)",
            "Matching: Catalan Numbers, Permutations & String Palindromes",
            "Distinct Digit 4-Digit Numbers Permutations (NAT)",
            "Identity Relation & Equivalence Classes on Power Sets (MSQ)",
            "Natural Language Translation to Propositional Logic (MSQ)",
            "Even Sum Parity Equivalence Relation Properties (MSQ)",
          ],
          chapterId: "dm-gate-2027-twt-21",
        },
      ] as MadeEasyTestMeta[],
    },
    {
      key: "em_ga",
      name: "Engineering Mathematics & General Aptitude",
      shortName: "EM & GA",
      icon: "ðŸ“Š",
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
    // Demo Test â€” serve the 65 imported questions
    if (test.chapterId === "me-cs-demo-test") {
      onStartTest(MADE_EASY_DEMO_TEST_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // TOC TWT-1 â€” serve the 17 imported TOC questions
    if (test.chapterId === "me-toc-gate-2027-twt-1") {
      onStartTest(MADE_EASY_TOC_TWT1_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // GA TWT-11 â€” serve the 17 imported Aptitude questions (SCQ + NAT)
    if (test.chapterId === "ga-gate-2027-twt-11") {
      onStartTest(MADE_EASY_APTITUDE_TWT11_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // GA TWT-12 â€” serve the 17 imported Aptitude questions (SCQ)
    if (test.chapterId === "ga-gate-2027-twt-12") {
      onStartTest(MADE_EASY_APTITUDE_TWT12_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // OS TWT-13 â€” serve the 17 imported OS questions (MSQ + SCQ + NAT)
    if (test.chapterId === "os-gate-2027-twt-13") {
      onStartTest(MADE_EASY_OS_TWT13_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // OS TWT-14 â€” serve the 17 imported OS questions (MSQ + SCQ + NAT)
    if (test.chapterId === "os-gate-2027-twt-14") {
      onStartTest(MADE_EASY_OS_TWT14_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // DS TWT-15 â€” serve the 17 imported DS & C Programming questions (SCQ + MSQ + NAT)
    if (test.chapterId === "ds-gate-2027-twt-15") {
      onStartTest(MADE_EASY_DS_TWT15_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // DS TWT-16 â€” serve the 17 imported DS questions (BST, AVL, LL, Hash)
    if (test.chapterId === "ds-gate-2027-twt-16") {
      onStartTest(MADE_EASY_DS_TWT16_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // CN TWT-17 â€” serve the 17 imported CN questions
    if (test.chapterId === "cn-gate-2027-twt-17") {
      onStartTest(MADE_EASY_CN_TWT17_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // CN TWT-18 â€” serve the 17 imported CN questions (Network & Transport Layer)
    if (test.chapterId === "cn-gate-2027-twt-18") {
      onStartTest(MADE_EASY_CN_TWT18_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // CD TWT-23 â€” serve the 17 imported Compiler Design questions
    if (test.chapterId === "cd-gate-2027-twt-23") {
      onStartTest(MADE_EASY_CD_TWT23_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // DBMS TWT-7 â€” serve the 17 imported DBMS questions
    if (test.chapterId === "dbms-gate-2027-twt-7") {
      onStartTest(MADE_EASY_DBMS_TWT7_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // DM TWT-21 â€” serve the 17 imported Discrete Mathematics questions
    if (test.chapterId === "dm-gate-2027-twt-21") {
      onStartTest(MADE_EASY_DM_TWT21_QUESTIONS, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    }
    // COA TWT-5 â€” serve from quizData chapter
    if (test.chapterId && twt5Chapter && twt5Chapter.questions.length > 0) {
      onStartTest(twt5Chapter.questions, test.name, examModeChoice, test.durationMinutes);
      onClose();
      return;
    } else {
      alert(
        `ðŸ“¹ "${test.name}" ke questions add karne ke liye video link, question text ya screenshot chat me bhejein!\n\nAI turant is test ko activate kar dega.`
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md p-0 sm:p-4 animate-fade-in">
      <div className="bg-[#0b101b] border border-slate-700/60 rounded-t-3xl sm:rounded-3xl max-w-5xl w-full text-slate-100 shadow-2xl relative flex flex-col overflow-hidden"
        style={{ maxHeight: "94svh" }}>

        {/* â”€â”€ Compact Header â”€â”€ */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.07] bg-[#0e1422] shrink-0">
          {/* Brand */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-400 flex items-center justify-center text-lg shrink-0 shadow-md shadow-rose-500/20">
              ðŸŽ¯
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-black text-white text-sm tracking-wide truncate">MADE EASY OTS 2027</span>
                <span className="text-[9px] font-black uppercase text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded-full border border-rose-500/30 shrink-0">GATE CS</span>
              </div>
              <p className="text-[10px] text-slate-500 hidden sm:block">SCQ / MSQ / NAT Â· Authentic GATE Marking</p>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex bg-black/40 rounded-xl p-0.5 border border-white/10 shrink-0">
            <button
              onClick={() => setExamModeChoice("exam")}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold cursor-pointer transition ${
                examModeChoice === "exam"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              â±ï¸ <span className="hidden sm:inline">CBT </span>Exam
            </button>
            <button
              onClick={() => setExamModeChoice("practice")}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold cursor-pointer transition ${
                examModeChoice === "practice"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ðŸ’¡ <span className="hidden sm:inline">Practice</span>
            </button>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 text-sm"
          >âœ•</button>
        </div>

        {/* â”€â”€ Main Content â”€â”€ */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

          {/* Mobile: Horizontal Subject Pill Bar */}
          <div className="flex md:hidden overflow-x-auto gap-1.5 px-3 py-2.5 bg-[#0c101c] border-b border-white/[0.06] scrollbar-none shrink-0">
            {subjectsConfig.map((subj) => {
              const isSelected = subj.key === selectedSubjectKey;
              const hasTests = subj.tests.some(t => t.status === "available");
              return (
                <button
                  key={subj.key}
                  onClick={() => setSelectedSubjectKey(subj.key)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition cursor-pointer shrink-0 ${
                    isSelected
                      ? "bg-gradient-to-r from-rose-600 to-indigo-600 text-white shadow-md"
                      : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]"
                  }`}
                >
                  <span>{subj.icon}</span>
                  <span>{subj.shortName}</span>
                  {hasTests && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                </button>
              );
            })}
          </div>

          {/* Desktop Left Sidebar */}
          <div className="hidden md:flex flex-col md:w-64 border-r border-white/[0.07] bg-[#0c101c] overflow-y-auto p-2.5 gap-0.5 shrink-0">
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-500 px-3 py-1.5">
              GATE CS Subjects
            </div>
            {subjectsConfig.map((subj) => {
              const isSelected = subj.key === selectedSubjectKey;
              const hasTests = subj.tests.some(t => t.status === "available");
              return (
                <button
                  key={subj.key}
                  onClick={() => setSelectedSubjectKey(subj.key)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between transition cursor-pointer group ${
                    isSelected
                      ? "bg-gradient-to-r from-rose-600/20 to-indigo-600/20 border border-rose-500/30 text-white"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-base shrink-0">{subj.icon}</span>
                    <span className="text-xs font-bold truncate">{subj.shortName}</span>
                  </div>
                  {hasTests ? (
                    <span className="text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded-full shrink-0">
                      LIVE
                    </span>
                  ) : (
                    <span className="text-[9px] text-slate-600 shrink-0">Soon</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Test Cards */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">

            {currentSubjectObj.tests.length === 0 ? (
              /* Empty State */
              <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center space-y-3 py-12">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-2xl shadow-inner">
                  {currentSubjectObj.icon}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">{currentSubjectObj.name}</h5>
                  <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                    Tests for this subject are being prepared. Send questions in chat to activate instantly!
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[11px] font-semibold">
                  ðŸ’¬ Send questions to activate
                </span>
              </div>
            ) : (
              currentSubjectObj.tests.map((test) => {
                const isLive = test.status === "available";
                return (
                  <div
                    key={test.id}
                    className={`relative rounded-2xl border overflow-hidden transition ${
                      isLive
                        ? "bg-gradient-to-br from-[#121929] to-[#182338] border-rose-500/30 shadow-lg shadow-rose-950/20"
                        : "bg-white/[0.02] border-white/[0.06]"
                    }`}
                  >
                    {/* Live ribbon */}
                    {isLive && (
                      <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-500 to-amber-500 text-white font-black text-[8px] uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                        â˜… Live
                      </div>
                    )}

                    <div className="p-4 sm:p-5">
                      {/* Test name + type badge */}
                      <div className="flex items-start gap-2 mb-3 pr-12">
                        <span className={`shrink-0 text-[10px] font-black uppercase px-2 py-0.5 rounded-md mt-0.5 ${
                          isLive
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-white/5 text-slate-400 border border-white/10"
                        }`}>
                          TWT
                        </span>
                        <h5 className="text-sm font-extrabold text-white leading-snug">{test.name}</h5>
                      </div>

                      {/* Quick Chips */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/[0.07] text-slate-300 font-semibold">
                          â±ï¸ {test.durationMinutes} min
                        </span>
                        <span className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/[0.07] text-slate-300 font-semibold">
                          ðŸŽ¯ {test.totalMarks} marks
                        </span>
                        <span className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/[0.07] text-slate-300 font-semibold">
                          â“ {test.totalQuestions} Qs
                        </span>
                        <span className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold">
                          {test.scqCount} SCQ
                        </span>
                        {test.msqCount > 0 && (
                          <span className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold">
                            {test.msqCount} MSQ
                          </span>
                        )}
                        {test.natCount > 0 && (
                          <span className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold">
                            {test.natCount} NAT
                          </span>
                        )}
                      </div>

                      {/* Topics â€” show first 4 + count */}
                      {test.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {test.topics.slice(0, 4).map((top, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.05]"
                            >
                              {top}
                            </span>
                          ))}
                          {test.topics.length > 4 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/15 font-bold">
                              +{test.topics.length - 4} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* Action Row */}
                      <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/[0.05]">
                        <span className={`text-[11px] font-semibold ${examModeChoice === "exam" ? "text-rose-400" : "text-emerald-400"}`}>
                          {examModeChoice === "exam" ? "Real timer - Negative marking" : "Instant answers - No penalty"}
                        </span>
                        <button
                          onClick={() => handleLaunchTest(test)}
                          className="px-5 py-2 rounded-xl font-black text-xs text-white cursor-pointer flex items-center gap-1.5 shadow-lg transition hover:scale-[1.03] active:scale-[0.97] shrink-0"
                          style={{
                            background: "linear-gradient(135deg, #e11d48, #be123c)",
                            border: "1px solid rgba(244,63,94,0.4)",
                            boxShadow: "0 4px 14px rgba(225,29,72,0.25)",
                          }}
                        >
                          {examModeChoice === "exam" ? "Attempt Test \u2192" : "Practice Now \u2192"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

