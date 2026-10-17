"use client";

import React, { useState, useEffect, useMemo } from "react";
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

export interface MadeEasyTestMeta {
  id: string;
  name: string;
  testNumber: number;
  subjectKey: string;
  subjectName: string;
  type: "Topic Wise Test" | "Full Syllabus Mock";
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
  const [selectedSubjectKey, setSelectedSubjectKey] = useState<string>("all");
  const [examModeChoice, setExamModeChoice] = useState<"exam" | "practice">("exam");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterType, setFilterType] = useState<"all" | "twt" | "mock" | "attempted">("all");
  const [expandedSyllabus, setExpandedSyllabus] = useState<{ [testId: string]: boolean }>({});
  const [attemptedTestIds, setAttemptedTestIds] = useState<string[]>([]);

  // Load attempted tests from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("made_easy_attempted_tests");
      if (stored) {
        setAttemptedTestIds(JSON.parse(stored));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Find COA questions reliably from EXAMS_DATA or gateSubjects
  const coaTwt5Questions = useMemo(() => {
    const coaSubj =
      gateSubjects.find((s) => s.id === "gate-cs-coa" || s.name.toLowerCase().includes("organization")) ||
      EXAMS_DATA.find((e) => e.id === "gate")?.branches?.find((b) => b.id === "cs")?.subjects?.find((s) => s.id === "gate-cs-coa");
    const twt5 = coaSubj?.chapters.find((c) => c.id === "coa-gate-2027-twt-5" || c.name.includes("Topic Wise Test - 5"));
    return twt5?.questions || [];
  }, [gateSubjects]);

  const subjectsCatalog = [
    {
      key: "demo",
      name: "CS Full Length Mock",
      shortName: "Full Mock",
      icon: "🎯",
      color: "from-rose-600 to-amber-600",
    },
    {
      key: "coa",
      name: "Computer Organization & Architecture",
      shortName: "COA",
      icon: "🖥️",
      color: "from-blue-600 to-indigo-600",
    },
    {
      key: "os",
      name: "Operating Systems",
      shortName: "OS",
      icon: "⚙️",
      color: "from-cyan-600 to-blue-600",
    },
    {
      key: "dbms",
      name: "Database Management Systems",
      shortName: "DBMS",
      icon: "🗄️",
      color: "from-emerald-600 to-teal-600",
    },
    {
      key: "cn",
      name: "Computer Networks",
      shortName: "CN",
      icon: "🌐",
      color: "from-indigo-600 to-sky-600",
    },
    {
      key: "toc",
      name: "Theory of Computation",
      shortName: "TOC",
      icon: "🔤",
      color: "from-purple-600 to-violet-600",
    },
    {
      key: "cd",
      name: "Compiler Design",
      shortName: "CD",
      icon: "⚡",
      color: "from-amber-600 to-orange-600",
    },
    {
      key: "ds_algo",
      name: "Programming & Data Structures",
      shortName: "DS & Algo",
      icon: "🌲",
      color: "from-green-600 to-emerald-600",
    },
    {
      key: "dm",
      name: "Discrete Mathematics & Graph Theory",
      shortName: "DM",
      icon: "📐",
      color: "from-fuchsia-600 to-pink-600",
    },
    {
      key: "em_ga",
      name: "General Aptitude & Engg Math",
      shortName: "GA & Math",
      icon: "📊",
      color: "from-teal-600 to-cyan-600",
    },
    {
      key: "dl",
      name: "Digital Logic",
      shortName: "DL",
      icon: "💡",
      color: "from-rose-500 to-red-500",
    },
  ];

  const allTests: MadeEasyTestMeta[] = [
    // 1. Full Length Mock
    {
      id: "me-cs-demo-full",
      name: "GATE 2027 CS & IT Full Syllabus Mock Test (Demo Test)",
      testNumber: 1,
      subjectKey: "demo",
      subjectName: "Full Mock Test",
      type: "Full Syllabus Mock",
      totalQuestions: 65,
      totalMarks: 100,
      durationMinutes: 180,
      status: "available",
      scqCount: 43,
      msqCount: 11,
      natCount: 11,
      topics: [
        "General Aptitude (GA) — Quantitative & Verbal Ability",
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
    },
    // 2. COA TWT-5
    {
      id: "coa-twt-5",
      name: "GATE 2027 CS TOPIC WISE TEST - 5 (COA)",
      testNumber: 5,
      subjectKey: "coa",
      subjectName: "Computer Organization & Architecture",
      type: "Topic Wise Test",
      totalQuestions: coaTwt5Questions.length || 17,
      totalMarks: 25,
      durationMinutes: 45,
      status: "available",
      scqCount: 11,
      msqCount: 4,
      natCount: 2,
      topics: [
        "Instruction Pipelining & Clock Cycles per Instruction",
        "Pipeline Speedup & Branch Penalty Hazards",
        "CISC Micro-operations & Hazard Mitigation",
        "Addressing Modes & Memory Reference Calculations",
        "Control Memory & Microprogrammed Control Unit",
        "IEEE-754 Single & Double Precision Floating Point",
        "RAW / WAR / WAW Data Dependencies & Forwarding",
      ],
      chapterId: "coa-gate-2027-twt-5",
    },
    // 3. OS TWT-13
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
        "Cyclic Page References & FIFO/LRU/OPT Replacement (MSQ)",
        "Demand Paging & Page Fault Semantics (MSQ)",
        "File Allocation: Contiguous, Linked & Indexed",
        "Deadlocks, Safe States & Banker's Algorithm (MSQ)",
        "Dynamic Storage Allocation: First, Best & Worst Fit",
        "Effective Memory Access Time with TLB (NAT)",
        "Memory Allocation Algorithm Properties Matching",
        "Compilers, Linkers & Loader Responsibilities",
        "Bit Map Free Disk Space Management (NAT)",
        "Least Recently Used (LRU) Page Replacement",
        "Single-Level Page Table Size Calculation",
      ],
      chapterId: "os-gate-2027-twt-13",
    },
    // 4. OS TWT-14
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
    // 5. DBMS TWT-7
    {
      id: "dbms-twt-7",
      name: "GATE 2027 CS TOPIC WISE TEST - 7 (DBMS)",
      testNumber: 7,
      subjectKey: "dbms",
      subjectName: "Database Management Systems",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_DBMS_TWT7_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      status: "available",
      scqCount: 10,
      msqCount: 4,
      natCount: 3,
      topics: [
        "ER Diagram to Relational Model (M:N Primary Key)",
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
        "2NF & 3NF Violation Checks on Relations",
        "Superkeys Count via Candidate Keys (NAT)",
        "Foreign Key NULL Values & Referential Integrity Constraints",
      ],
      chapterId: "dbms-gate-2027-twt-7",
    },
    // 6. CN TWT-17
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
      status: "available",
      scqCount: 5,
      msqCount: 5,
      natCount: 7,
      topics: [
        "Binary Exponential Backoff Algorithm",
        "IPv4 Header Structure & HTTP Protocols",
        "CRC Polynomial Division & Error Detection",
        "Hamming Distance & Error Correction Code",
        "Network Devices: Hub, Bridge, Switch & Router",
        "CSMA/CD Maximum Data Rate & Cable Length",
        "Stop-and-Wait Utilization & Sequence Numbers",
        "Switch Interconnection Links & Forwarding",
        "Selective Repeat Window Size & Sequence Bits",
        "DNS Iterative vs Recursive Resolution Delays",
        "Sliding Window Protocols Performance Comparison",
        "Collision & Broadcast Domains Separation",
      ],
      chapterId: "cn-gate-2027-twt-17",
    },
    // 7. CN TWT-18
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
      status: "available",
      scqCount: 6,
      msqCount: 4,
      natCount: 7,
      topics: [
        "Connection-Oriented vs Connectionless Protocols",
        "IPv4 Router Forwarding & Header Checksum",
        "Directed Broadcast Address & Network ID Calculations",
        "Class C Subnetting Usable Host Calculation",
        "Distance Vector vs Link State Routing Protocols",
        "OSPF Link State Routing Properties",
        "TCP Cumulative Acknowledgment Semantics",
        "TCP Sequence Number Wrap-around Time",
        "TCP Full-Duplex Stream & Elastic Applications",
        "CIDR Address Block Allocation & Supernetting",
        "Subnetting First & Last Subnet DBA Rules",
        "IPv4 Fragmentation Offset Calculation",
        "End-to-End Transport Layer Encapsulation",
        "TCP Round Trip Time (RTT) & Karn's Algorithm",
        "TCP Three-Way Handshake Initial Sequence Numbers",
        "Distance Vector Count-to-Infinity & Poison Reverse",
      ],
      chapterId: "cn-gate-2027-twt-18",
    },
    // 8. TOC TWT-1
    {
      id: "toc-twt-1",
      name: "GATE 2027 CS TOPIC WISE TEST - 1 (Theory of Computation)",
      testNumber: 1,
      subjectKey: "toc",
      subjectName: "Theory of Computation",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_TOC_TWT1_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      status: "available",
      scqCount: 9,
      msqCount: 5,
      natCount: 3,
      topics: [
        "Divisibility, Modulo Automata & Regular Expressions",
        "CFL & DCFL Recognition & Deterministic Pushdown Automata",
        "Context-Free Grammars & Ambiguity Removal",
        "DFA State Counting & Combinatorics",
        "Minimal Automata Construction (Myhill-Nerode & Table Filling)",
        "Language Subsets & Closure Properties (Union, Intersect, Homomorphism)",
        "Reversal of DFA & Exponential State Explosion",
      ],
      chapterId: "me-toc-gate-2027-twt-1",
    },
    // 9. CD TWT-23
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
      status: "available",
      scqCount: 9,
      msqCount: 2,
      natCount: 6,
      topics: [
        "Lexical Analysis & Maximal Munch Rule (Longest Match)",
        "Compiler Phases & Roles (Type Checking, Symbol Table)",
        "Semantic Analysis Error Detection",
        "C Compilation vs Linker & Loader Behavior",
        "Language Processing Tools (Assembler, Preprocessor)",
        "Symbol Table Organization & Access Latency",
        "L-Attributed SDT Rules & Left-to-Right Evaluation",
        "Code Optimization (CSE, Constant Folding, Loop Invariant)",
        "S-Attributed vs L-Attributed SDT Traversal Orders",
        "SDTS Parse Tree Leaves & Synthesized Attribute Counting",
        "Semantic Action Execution in Top-Down & Bottom-Up Parsers",
        "Operator Precedence & Associativity Resolution",
        "Intermediate Code Generation (Three-Address Code to High-Level)",
        "Grammar Translation Rules & Postfix Conversion",
        "Three-Address Code Temporary Variable Minimization",
        "Lexical Errors Identification in C Code",
        "Basic Block DAG Representation (Nodes + Edges Count)",
      ],
      chapterId: "cd-gate-2027-twt-23",
    },
    // 10. DS TWT-15
    {
      id: "ds-twt-15",
      name: "GATE 2027 CS TOPIC WISE TEST - 15 (Programming & Data Structures)",
      testNumber: 15,
      subjectKey: "ds_algo",
      subjectName: "Programming & Data Structures",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_DS_TWT15_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      status: "available",
      scqCount: 11,
      msqCount: 2,
      natCount: 4,
      topics: [
        "C Recursion, Stack Frames & Pointer Side-Effects",
        "Circular Queue Implementation & Modulo Arithmetic",
        "Lower Triangular Matrix Row-Major Indexing",
        "Static Variables & Extern Storage Classes in C",
        "Dynamic Memory Allocation (malloc, free) & Memory Leaks",
        "Circular Queue using Singly Linked List",
        "Stack & Queue Operations Simulation",
        "Pointer to Array vs Array of Pointers (2D Arrays)",
        "Postfix Expression Evaluation & Stack Depth",
        "Multi-dimensional Array Pointer Equivalences",
        "Modulo Loop Termination Conditions",
        "Short-Circuit Operator Evaluation (&&, ||)",
      ],
      chapterId: "ds-gate-2027-twt-15",
    },
    // 11. DS TWT-16
    {
      id: "ds-twt-16",
      name: "GATE 2027 CS TOPIC WISE TEST - 16 (Advanced Data Structures)",
      testNumber: 16,
      subjectKey: "ds_algo",
      subjectName: "Programming & Data Structures",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_DS_TWT16_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      status: "available",
      scqCount: 10,
      msqCount: 3,
      natCount: 4,
      topics: [
        "Binary Search Tree (BST) Properties & Node Labeling",
        "BST Inorder Successor & Predecessor Algorithms",
        "Singly Linked List Reversal (Iterative & Recursive)",
        "Remove Last Node Pointer Analysis & Bug Detection",
        "BST Construction from Preorder & Postorder Sequences",
        "Binary Tree to Binary Search Tree Transformations",
        "AVL Tree Rotations (LL, RR, LR, RL) on Insertion & Deletion",
        "AVL Tree Height Bounds (Min & Max Nodes Formula)",
        "AVL Tree Level-wise Sum Calculations",
        "Linked List Insertion at Tail with Single Pointer",
        "Full 4-ary Tree Internal Nodes & Leaf Node Relations",
        "Hash Table Separate Chaining & Collision Probability",
      ],
      chapterId: "ds-gate-2027-twt-16",
    },
    // 12. DM TWT-21
    {
      id: "dm-twt-21",
      name: "GATE 2027 CS TOPIC WISE TEST - 21 (Discrete Mathematics)",
      testNumber: 21,
      subjectKey: "dm",
      subjectName: "Discrete Mathematics",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_DM_TWT21_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      status: "available",
      scqCount: 8,
      msqCount: 5,
      natCount: 4,
      topics: [
        "Injective (One-to-One) & Surjective (Onto) Function Counting",
        "Permutations of Strings with Fixed Character Frequency",
        "Pass/Fail Examination Outcomes (Binomial Symmetry)",
        "Propositional Logic Tautologies & Logical Equivalences",
        "Function Bounds via Pigeonhole Principle",
        "Complement Counting on Subsets with Odd Numbers (NAT)",
        "Universal Equivalence Relation Cardinality (NAT)",
        "Relatively Prime Integers via Principle of Inclusion-Exclusion (NAT)",
        "Non-Tautology Implication Identification",
        "Unordered Disjoint Subsets Pairs Counting",
        "Biconditional Logic Expression Equivalences (MSQ)",
        "Predicate Logic Universal Conditional Statements (MSQ)",
        "Matching: Catalan Numbers, Derangements & Palindromes",
        "Distinct Digit 4-Digit Numbers Permutations (NAT)",
        "Identity Relation & Equivalence Classes on Power Sets (MSQ)",
        "Natural Language Translation to First-Order Logic (MSQ)",
        "Even Sum Parity Equivalence Relation Properties (MSQ)",
      ],
      chapterId: "dm-gate-2027-twt-21",
    },
    // 13. GA TWT-11
    {
      id: "ga-twt-11",
      name: "GATE 2027 CS TOPIC WISE TEST - 11 (General Aptitude - Quant)",
      testNumber: 11,
      subjectKey: "em_ga",
      subjectName: "General Aptitude",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_APTITUDE_TWT11_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      status: "available",
      scqCount: 15,
      msqCount: 0,
      natCount: 2,
      topics: [
        "Clocks: Minute & Hour Hand Angle & Time Gain/Loss",
        "Set Theory & 3-Circle Venn Diagrams (NAT)",
        "Directions & Spatial Reasoning Distance",
        "Number Matrix Puzzles & Pattern Recognition",
        "Geometry & Similar Triangles Proportions (NAT)",
        "Infinite Geometric Progressions (G.P.) Series",
        "Combinatorics & Step Climbing Recurrence",
        "Surds, Radicals & Real Solutions of Equations",
        "Mensuration: Cylinder & Open Box Volume Maximization",
        "Perimeter with Circular Corner Arcs & Tangents",
        "Pipes, Cisterns & Simultaneous Flow Rates",
        "Profit, Loss, Marked Price & Equivalent Margins",
        "Defective Products Percentage in Batches",
        "Weighted Averages & Integer Inequalities",
        "Time, Speed & Distance: Train Length & Stoppages",
        "Quadratic Inequalities & Distance Fare Pricing",
        "Extreme Digit Permutations & Difference Counting",
      ],
      chapterId: "ga-gate-2027-twt-11",
    },
    // 14. GA TWT-12
    {
      id: "ga-twt-12",
      name: "GATE 2027 CS TOPIC WISE TEST - 12 (General Aptitude - Verbal & Logic)",
      testNumber: 12,
      subjectKey: "em_ga",
      subjectName: "General Aptitude",
      type: "Topic Wise Test",
      totalQuestions: MADE_EASY_APTITUDE_TWT12_QUESTIONS.length,
      totalMarks: 25,
      durationMinutes: 45,
      status: "available",
      scqCount: 17,
      msqCount: 0,
      natCount: 0,
      topics: [
        "Linear Seating Arrangement & Property Distribution",
        "Mirror Images & Water Reflections Symmetry",
        "Critical Reasoning & Logical Fallacies (Salience Fallacy)",
        "Complex Family Tree & Blood Relations",
        "Reading Comprehension: Tone & Inference",
        "Venn Diagrams: Overlapping Categories",
        "Word Coding: Reverse Lettering & Alphabet Shifts",
        "Vocabulary: Contextual Word Meanings",
        "Verbal Fillers & Concessive Clauses (Although, Despite)",
        "Paper Folding & Symmetric Punching Unfolding",
        "Categorical Deductions & Syllogisms Validity",
        "Clock Mirror Reflections (11:60 Rule)",
        "Geometric Square Counting in Dot Grids",
        "Verbal Inference: Economic Sector Shift",
        "Alphabet Positional Squares Coding",
      ],
      chapterId: "ga-gate-2027-twt-12",
    },
  ];

  // Filter tests based on subject, search query, and filter type
  const filteredTests = useMemo(() => {
    return allTests.filter((test) => {
      // Subject match
      if (selectedSubjectKey !== "all" && test.subjectKey !== selectedSubjectKey) {
        return false;
      }
      // Filter Type match
      if (filterType === "twt" && test.type !== "Topic Wise Test") return false;
      if (filterType === "mock" && test.type !== "Full Syllabus Mock") return false;
      if (filterType === "attempted" && !attemptedTestIds.includes(test.id)) return false;

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = test.name.toLowerCase().includes(q);
        const matchesSubject = test.subjectName.toLowerCase().includes(q);
        const matchesTopics = test.topics.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesSubject && !matchesTopics) return false;
      }

      return true;
    });
  }, [allTests, selectedSubjectKey, filterType, searchQuery, attemptedTestIds]);

  // Overall Statistics
  const totalQuestionsPool = useMemo(() => {
    return allTests.reduce((acc, t) => acc + t.totalQuestions, 0);
  }, [allTests]);

  const toggleSyllabus = (testId: string) => {
    setExpandedSyllabus((prev) => ({
      ...prev,
      [testId]: !prev[testId],
    }));
  };

  const handleLaunchTest = (test: MadeEasyTestMeta, chosenMode: "exam" | "practice") => {
    // Save test ID to attempted list in localStorage
    try {
      const updated = Array.from(new Set([...attemptedTestIds, test.id]));
      setAttemptedTestIds(updated);
      localStorage.setItem("made_easy_attempted_tests", JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }

    // Launch appropriate question array
    if (test.chapterId === "me-cs-demo-test") {
      onStartTest(MADE_EASY_DEMO_TEST_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "coa-gate-2027-twt-5") {
      if (coaTwt5Questions.length > 0) {
        onStartTest(coaTwt5Questions, test.name, chosenMode, test.durationMinutes);
        onClose();
        return;
      }
    }
    if (test.chapterId === "os-gate-2027-twt-13") {
      onStartTest(MADE_EASY_OS_TWT13_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "os-gate-2027-twt-14") {
      onStartTest(MADE_EASY_OS_TWT14_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "dbms-gate-2027-twt-7") {
      onStartTest(MADE_EASY_DBMS_TWT7_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "cn-gate-2027-twt-17") {
      onStartTest(MADE_EASY_CN_TWT17_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "cn-gate-2027-twt-18") {
      onStartTest(MADE_EASY_CN_TWT18_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "me-toc-gate-2027-twt-1") {
      onStartTest(MADE_EASY_TOC_TWT1_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "cd-gate-2027-twt-23") {
      onStartTest(MADE_EASY_CD_TWT23_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "ds-gate-2027-twt-15") {
      onStartTest(MADE_EASY_DS_TWT15_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "ds-gate-2027-twt-16") {
      onStartTest(MADE_EASY_DS_TWT16_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "dm-gate-2027-twt-21") {
      onStartTest(MADE_EASY_DM_TWT21_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "ga-gate-2027-twt-11") {
      onStartTest(MADE_EASY_APTITUDE_TWT11_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }
    if (test.chapterId === "ga-gate-2027-twt-12") {
      onStartTest(MADE_EASY_APTITUDE_TWT12_QUESTIONS, test.name, chosenMode, test.durationMinutes);
      onClose();
      return;
    }

    // Default alert if questions aren't imported yet
    alert(`"${test.name}" is currently being processed. Questions will be active shortly!`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-6 animate-fade-in overflow-y-auto">
      <div
        className="bg-[#0b101b] border border-slate-700/70 rounded-2xl sm:rounded-3xl max-w-6xl w-full text-slate-100 shadow-2xl relative flex flex-col overflow-hidden my-auto"
        style={{ height: "92vh", maxHeight: "920px" }}
      >
        {/* ── Top Header Bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-white/[0.08] bg-[#0e1424] shrink-0">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-400 flex items-center justify-center text-2xl shrink-0 shadow-lg shadow-rose-600/30">
              🎯
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-black text-white text-base sm:text-xl tracking-tight">
                  MADE EASY Online Test Series (OTS) 2027
                </h2>
                <span className="text-xs font-black uppercase text-rose-300 bg-rose-500/20 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                  GATE CS & IT
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/25 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  14 Tests Live
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">
                Authentic GATE Pattern: SCQ (+1/−0.33, +2/−0.66) • MSQ (No Negative) • NAT • Real CBT Simulator
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
            {/* Mode Switcher */}
            <div className="flex bg-black/60 rounded-xl p-1 border border-white/10 shadow-inner">
              <button
                onClick={() => setExamModeChoice("exam")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  examModeChoice === "exam"
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
                title="CBT Exam Mode: Strict timer & GATE negative marking"
              >
                <span>⏱️</span>
                <span>CBT Exam Mode</span>
              </button>
              <button
                onClick={() => setExamModeChoice("practice")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  examModeChoice === "practice"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Practice Mode: Instant explanations and answers, no timer penalty"
              >
                <span>💡</span>
                <span>Practice Mode</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer text-base font-bold"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* ── KPI & Overview Metrics Bar ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 px-5 sm:px-6 py-3 bg-[#080d17] border-b border-white/[0.06] shrink-0 text-xs">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="text-xl">🏆</span>
            <div>
              <div className="text-sm font-black text-white">14 Live Tests</div>
              <div className="text-slate-400 text-[11px]">Topic Wise & Full Mocks</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="text-xl">📝</span>
            <div>
              <div className="text-sm font-black text-white">{totalQuestionsPool} Total Questions</div>
              <div className="text-slate-400 text-[11px]">SCQ, MSQ & NAT Format</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="text-xl">⚖️</span>
            <div>
              <div className="text-sm font-black text-white">Exact GATE Marking</div>
              <div className="text-slate-400 text-[11px]">+1 / −0.33 &amp; +2 / −0.66</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="text-xl">📊</span>
            <div>
              <div className="text-sm font-black text-white">
                {attemptedTestIds.length} / {allTests.length} Attempted
              </div>
              <div className="text-slate-400 text-[11px]">Your Progress Tracker</div>
            </div>
          </div>
        </div>

        {/* ── Search & Filter Controls ── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-5 sm:px-6 py-3 bg-[#0d1322] border-b border-white/[0.06] shrink-0">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tests, topics, keywords (e.g. Paging, CRC, B-Tree)..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {[
              { id: "all", label: `All Tests (${allTests.length})` },
              { id: "twt", label: "Topic Wise (13)" },
              { id: "mock", label: "Full Mock (1)" },
              { id: "attempted", label: `Attempted (${attemptedTestIds.length})` },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  filterType === f.id
                    ? "bg-rose-600 text-white shadow-sm"
                    : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Dashboard Body ── */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Subject Navigator (Desktop Sidebar) */}
          <div className="hidden md:flex flex-col md:w-72 border-r border-white/[0.08] bg-[#0c111e] overflow-y-auto p-3 space-y-1 shrink-0">
            <div className="flex items-center justify-between px-3 py-2 text-xs font-black uppercase tracking-wider text-slate-400">
              <span>GATE CS Subjects</span>
              <span className="text-[11px] font-bold text-rose-400">10 Active</span>
            </div>

            {/* "All Subjects" Button */}
            <button
              onClick={() => setSelectedSubjectKey("all")}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition cursor-pointer text-sm font-bold ${
                selectedSubjectKey === "all"
                  ? "bg-gradient-to-r from-rose-600/30 to-indigo-600/30 border border-rose-500/40 text-white shadow-sm"
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-base">📚</span>
                <span className="truncate">All Subjects</span>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                {allTests.length}
              </span>
            </button>

            {/* Individual Subjects */}
            {subjectsCatalog.map((subj) => {
              const isSelected = subj.key === selectedSubjectKey;
              const count = allTests.filter((t) => t.subjectKey === subj.key).length;
              return (
                <button
                  key={subj.key}
                  onClick={() => setSelectedSubjectKey(subj.key)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition cursor-pointer text-sm font-bold ${
                    isSelected
                      ? "bg-gradient-to-r from-rose-600/30 to-indigo-600/30 border border-rose-500/40 text-white shadow-sm"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-base shrink-0">{subj.icon}</span>
                    <span className="truncate">{subj.shortName}</span>
                  </div>
                  {count > 0 ? (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                      {count} Live
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-600 shrink-0">Soon</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Horizontal Subject Bar */}
          <div className="flex md:hidden overflow-x-auto gap-2 px-3 py-2 bg-[#0c111e] border-b border-white/[0.06] scrollbar-none shrink-0">
            <button
              onClick={() => setSelectedSubjectKey("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer shrink-0 ${
                selectedSubjectKey === "all"
                  ? "bg-rose-600 text-white shadow-md"
                  : "bg-white/[0.05] text-slate-400 border border-white/[0.08]"
              }`}
            >
              📚 All ({allTests.length})
            </button>
            {subjectsCatalog.map((subj) => {
              const isSelected = subj.key === selectedSubjectKey;
              const count = allTests.filter((t) => t.subjectKey === subj.key).length;
              return (
                <button
                  key={subj.key}
                  onClick={() => setSelectedSubjectKey(subj.key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer shrink-0 ${
                    isSelected
                      ? "bg-rose-600 text-white shadow-md"
                      : "bg-white/[0.05] text-slate-400 border border-white/[0.08]"
                  }`}
                >
                  <span>{subj.icon}</span>
                  <span>{subj.shortName}</span>
                  {count > 0 && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                </button>
              );
            })}
          </div>

          {/* Right Main Content: Tests List & Dashboard Cards */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {filteredTests.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center p-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl">
                <span className="text-4xl mb-3">🔍</span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1">No Tests Match Your Filter</h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-sm mb-4">
                  Try searching for another keyword or clear your filters to view all available GATE 2027 tests.
                </p>
                <button
                  onClick={() => {
                    setSelectedSubjectKey("all");
                    setSearchQuery("");
                    setFilterType("all");
                  }}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold cursor-pointer transition shadow-md"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              filteredTests.map((test) => {
                const isAttempted = attemptedTestIds.includes(test.id);
                const isExpanded = !!expandedSyllabus[test.id];

                return (
                  <div
                    key={test.id}
                    className="relative rounded-2xl sm:rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#111728] via-[#141d33] to-[#0e1526] shadow-xl hover:border-rose-500/50 transition-all duration-200 overflow-hidden"
                  >
                    {/* Top status banner */}
                    <div className="flex items-center justify-between px-5 py-2.5 bg-white/[0.03] border-b border-white/[0.05]">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          {test.type === "Full Syllabus Mock" ? "Full Length Mock" : `Topic Wise Test #${test.testNumber}`}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          {test.subjectName}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isAttempted && (
                          <span className="text-xs font-bold text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                            ✓ Attempted
                          </span>
                        )}
                        <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          LIVE NOW
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      {/* Title */}
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-xl font-black text-white leading-snug">
                          {test.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300">
                          Official GATE 2027 Computer Science &amp; IT Syllabus Coverage
                        </p>
                      </div>

                      {/* Primary Test Metrics Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        <div className="p-3 rounded-xl bg-black/40 border border-white/[0.07] flex items-center gap-2.5">
                          <span className="text-xl">⏱️</span>
                          <div>
                            <div className="text-[11px] text-slate-400 font-semibold uppercase">Duration</div>
                            <div className="text-sm sm:text-base font-black text-white">{test.durationMinutes} Mins</div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-black/40 border border-white/[0.07] flex items-center gap-2.5">
                          <span className="text-xl">🎯</span>
                          <div>
                            <div className="text-[11px] text-slate-400 font-semibold uppercase">Total Marks</div>
                            <div className="text-sm sm:text-base font-black text-white">{test.totalMarks} Marks</div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-black/40 border border-white/[0.07] flex items-center gap-2.5">
                          <span className="text-xl">📝</span>
                          <div>
                            <div className="text-[11px] text-slate-400 font-semibold uppercase">Questions</div>
                            <div className="text-sm sm:text-base font-black text-white">{test.totalQuestions} Questions</div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-black/40 border border-white/[0.07] flex items-center gap-2.5">
                          <span className="text-xl">⚖️</span>
                          <div>
                            <div className="text-[11px] text-slate-400 font-semibold uppercase">Negative Mark</div>
                            <div className="text-xs sm:text-sm font-black text-rose-300">−0.33 / −0.66</div>
                          </div>
                        </div>
                      </div>

                      {/* Question Format Breakdown Bar */}
                      <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                          Question Pattern:
                        </span>
                        <span className="text-xs font-bold px-3 py-1 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {test.scqCount} SCQ (Single Choice)
                        </span>
                        {test.msqCount > 0 && (
                          <span className="text-xs font-bold px-3 py-1 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            {test.msqCount} MSQ (Multi-Select)
                          </span>
                        )}
                        {test.natCount > 0 && (
                          <span className="text-xs font-bold px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {test.natCount} NAT (Numerical)
                          </span>
                        )}
                        <span className="text-xs font-medium text-slate-400 ml-auto hidden sm:inline">
                          MSQ &amp; NAT have 0 Negative Marks
                        </span>
                      </div>

                      {/* Syllabus & Topics Section */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Key Topics Covered:
                          </span>
                          {test.topics.length > 4 && (
                            <button
                              onClick={() => toggleSyllabus(test.id)}
                              className="text-xs font-bold text-rose-400 hover:text-rose-300 transition cursor-pointer"
                            >
                              {isExpanded ? "Show Less ▲" : `View All ${test.topics.length} Topics ▼`}
                            </button>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {(isExpanded ? test.topics : test.topics.slice(0, 4)).map((topic, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.06] transition"
                            >
                              • {topic}
                            </span>
                          ))}
                          {!isExpanded && test.topics.length > 4 && (
                            <button
                              onClick={() => toggleSyllabus(test.id)}
                              className="text-xs px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30 font-bold hover:bg-rose-500/25 transition cursor-pointer"
                            >
                              +{test.topics.length - 4} more topics
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Launch Actions */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-white/[0.08]">
                        <div className="text-xs text-slate-400">
                          {examModeChoice === "exam" ? (
                            <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                              <span>⏱️</span> CBT Exam Mode active · Real timer with negative marking
                            </span>
                          ) : (
                            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                              <span>💡</span> Practice Mode active · View step-by-step solutions instantly
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2.5 self-end sm:self-auto">
                          {/* Practice Mode Quick Button */}
                          <button
                            onClick={() => handleLaunchTest(test, "practice")}
                            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/10 hover:border-white/20 transition cursor-pointer flex items-center gap-1.5 shadow-sm"
                          >
                            <span>💡</span>
                            <span>Practice</span>
                          </button>

                          {/* Primary CBT Launch Button */}
                          <button
                            onClick={() => handleLaunchTest(test, examModeChoice)}
                            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black text-white cursor-pointer flex items-center gap-2 shadow-lg transition hover:scale-[1.02] active:scale-[0.98]"
                            style={{
                              background: "linear-gradient(135deg, #e11d48, #be123c, #9f1239)",
                              border: "1px solid rgba(244,63,94,0.5)",
                              boxShadow: "0 4px 18px rgba(225,29,72,0.35)",
                            }}
                          >
                            <span>🚀</span>
                            <span>{examModeChoice === "exam" ? "Start CBT Exam" : "Start Practice"}</span>
                            <span>→</span>
                          </button>
                        </div>
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
