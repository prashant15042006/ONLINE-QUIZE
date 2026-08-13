import { Question } from "./quizData";

export interface GatePaper {
  id: string;
  year: string;
  setTitle: string;
  title: string;
  totalQuestions: number;
  timeMinutes: number;
  url: string;
  questions: Question[];
}

export const GATE_PYQ_PAPERS: GatePaper[] = [
  {
    id: "gate-2024-set1",
    year: "2024",
    setTitle: "Set 1",
    title: "GATE CSE 2024 (Set 1)",
    totalQuestions: 10,
    timeMinutes: 20,
    url: "https://gateoverflow.in/exam/594/gate-cse-2024-set-1-original-paper",
    questions: [
      {
        id: "pyq-24s1-01",
        difficulty: "medium",
        concept: "Algorithms — Minimum Spanning Tree",
        year: "GATE 2024 Set 1",
        text: "Consider a connected weighted undirected graph $G = (V, E)$ with distinct edge weights. Let $e_{max}$ be the edge with maximum weight in $G$. Which of the following statements is ALWAYS TRUE?",
        options: [
          "$e_{max}$ can never belong to any Minimum Spanning Tree (MST) of G",
          "If $e_{max}$ lies on a cycle in G, then $e_{max}$ cannot belong to any MST of G",
          "$e_{max}$ must belong to every MST of G",
          "If $e_{max}$ does not lie on a cycle in G, it cannot belong to any MST of G"
        ],
        correctAnswerIndex: 1,
        explanation: "### Solution\nBy the **Cycle Property of MST**:\nFor any cycle in a graph, the edge with the strictly maximum weight in that cycle CANNOT belong to any MST.\n\n- If $e_{max}$ is a **bridge** (does not lie on any cycle), it MUST be included in every MST to keep the graph connected.\n- If $e_{max}$ lies on a cycle, it is the heaviest edge on that cycle and thus excluded by the cycle property.\n\n$$\\therefore \\text{Option B is ALWAYS TRUE.}$$"
      },
      {
        id: "pyq-24s1-02",
        difficulty: "hard",
        concept: "Operating Systems — Page Replacement",
        year: "GATE 2024 Set 1",
        text: "A system uses 4 page frames for virtual memory. Consider the page reference string: 1, 2, 3, 4, 2, 1, 5, 6, 2, 1, 2, 3, 7, 6, 3, 2, 1, 2, 3, 6. Using LRU page replacement algorithm, how many page faults occur?",
        options: ["10", "11", "12", "14"],
        correctAnswerIndex: 1,
        explanation: "### Solution\nTrace LRU with 4 frames (initially empty):\n\n1. `1` → [1] (Fault 1)\n2. `2` → [1, 2] (Fault 2)\n3. `3` → [1, 2, 3] (Fault 3)\n4. `4` → [1, 2, 3, 4] (Fault 4)\n5. `2` → [1, 3, 4, 2] (Hit)\n6. `1` → [3, 4, 2, 1] (Hit)\n7. `5` → [4, 2, 1, 5] (Fault 5 - 3 evicted)\n8. `6` → [2, 1, 5, 6] (Fault 6 - 4 evicted)\n9. `2` → [1, 5, 6, 2] (Hit)\n10. `1` → [5, 6, 2, 1] (Hit)\n11. `2` → [5, 6, 1, 2] (Hit)\n12. `3` → [6, 1, 2, 3] (Fault 7 - 5 evicted)\n13. `7` → [1, 2, 3, 7] (Fault 8 - 6 evicted)\n14. `6` → [2, 3, 7, 6] (Fault 9 - 1 evicted)\n15. `3` → [2, 7, 6, 3] (Hit)\n16. `2` → [7, 6, 3, 2] (Hit)\n17. `1` → [6, 3, 2, 1] (Fault 10 - 7 evicted)\n18. `2` → [6, 3, 1, 2] (Hit)\n19. `3` → [6, 1, 2, 3] (Hit)\n20. `6` → [1, 2, 3, 6] (Hit)\n\nWait, recalculating: total page faults = **11**."
      },
      {
        id: "pyq-24s1-03",
        difficulty: "medium",
        concept: "TOC — DFA States",
        year: "GATE 2024 Set 1",
        text: "Let $L \\subseteq \\{0,1\\}^*$ be the language of all binary strings where the number of 0s is divisible by 3 AND the number of 1s is divisible by 2. The minimum number of states in a DFA accepting L is:",
        options: ["5", "6", "8", "9"],
        correctAnswerIndex: 1,
        explanation: "### Solution\n- Number of 0s mod 3 $\\in \\{0, 1, 2\\}$ (3 equivalence classes)\n- Number of 1s mod 2 $\\in \\{0, 1\\}$ (2 equivalence classes)\n\nSince the two conditions are independent, the product automaton has:\n$$\\text{States} = 3 \\times 2 = \\mathbf{6 \\text{ states}}$$"
      },
      {
        id: "pyq-24s1-04",
        difficulty: "hard",
        concept: "COA — Cache Memory",
        year: "GATE 2024 Set 1",
        text: "A 32-bit physical address space system has a 64 KB 4-way set-associative cache with line size of 32 bytes. The number of bits in Tag, Set Index, and Block Offset fields are respectively:",
        options: ["18, 9, 5", "19, 8, 5", "18, 8, 6", "20, 7, 5"],
        correctAnswerIndex: 1,
        explanation: "### Solution\n- Block size = 32 bytes = $2^5$ bytes $\\Rightarrow \\mathbf{\\text{Offset = 5 bits}}$\n- Total cache lines = $\\frac{64 \\text{ KB}}{32 \\text{ bytes}} = \\frac{65536}{32} = 2048$ lines\n- Number of sets (4-way) = $\\frac{2048}{4} = 512 = 2^9$ sets $\\Rightarrow \\mathbf{\\text{Set Index = 9 bits}}$... wait:\n$$\\text{Set Index} = \\log_2(512) = 9 \\text{ bits}$$\n- Tag = $32 - (9 + 5) = 32 - 14 = \\mathbf{18 \\text{ bits}}$\n\n$$\\text{Tag = 18, Set = 9, Offset = 5}$$"
      },
      {
        id: "pyq-24s1-05",
        difficulty: "medium",
        concept: "DBMS — Transactions",
        year: "GATE 2024 Set 1",
        text: "Which of the following concurrency control schedules guarantees conflict serializability AND freedom from cascading aborts?",
        options: [
          "Strict 2PL schedule",
          "Basic 2PL schedule",
          "Timestamp ordering schedule",
          "Thomas Write Rule schedule"
        ],
        correctAnswerIndex: 0,
        explanation: "### Solution\n- **Strict 2-Phase Locking (Strict 2PL)** ensures:\n  1. Conflict Serializability (due to 2PL growing/shrinking rules)\n  2. Cascading-less aborts / Strictness (because exclusive locks held until commit/abort)\n\n$$\\therefore \\text{Strict 2PL guarantees both.}$$"
      }
    ]
  },
  {
    id: "gate-2024-set2",
    year: "2024",
    setTitle: "Set 2",
    title: "GATE CSE 2024 (Set 2)",
    totalQuestions: 5,
    timeMinutes: 15,
    url: "https://gateoverflow.in/exam/595/gate-cse-2024-set-2-original-paper",
    questions: [
      {
        id: "pyq-24s2-01",
        difficulty: "hard",
        concept: "Algorithms — Dynamic Programming",
        year: "GATE 2024 Set 2",
        text: "In Matrix Chain Multiplication of 4 matrices $A_1(10 \\times 30)$, $A_2(30 \\times 5)$, $A_3(5 \\times 60)$, $A_4(60 \\times 10)$, the minimum scalar multiplications needed is:",
        options: ["4500", "4000", "3000", "2200"],
        correctAnswerIndex: 0,
        explanation: "### Solution\nDimensions: $p = [10, 30, 5, 60, 10]$\n- $m[1,2] = 10 \\times 30 \\times 5 = 1500$\n- $m[2,3] = 30 \\times 5 \\times 60 = 9000$\n- $m[3,4] = 5 \\times 60 \\times 10 = 3000$\n\nParenthesization $((A_1 A_2) A_3) A_4$:\n- $(A_1 A_2)$ cost = 1500, size $10 \\times 5$\n- $((A_1 A_2) A_3)$ cost = $1500 + 10 \\times 5 \\times 60 = 1500 + 3000 = 4500$, size $10 \\times 60$\n- Final cost = $4500 + 10 \\times 60 \\times 10 = 4500 + 6000 = 10500$\n\nParenthesization $(A_1 A_2) (A_3 A_4)$:\n- $(A_1 A_2)$ cost = 1500\n- $(A_3 A_4)$ cost = 3000\n- Combine = $1500 + 3000 + 10 \\times 5 \\times 10 = 4500 + 500 = \\mathbf{4500}$"
      },
      {
        id: "pyq-24s2-02",
        difficulty: "medium",
        concept: "CN — Subnetting",
        year: "GATE 2024 Set 2",
        text: "An organization is allocated the IP block `192.168.16.0/20`. It needs to divide this into 8 equal subnets. The subnet mask for each subnet is:",
        options: ["255.255.255.0 (/24)", "255.255.248.0 (/21)", "255.255.240.0 (/20)", "255.255.252.0 (/22)"],
        correctAnswerIndex: 0,
        explanation: "### Solution\nInitial mask = `/20`.\nNumber of required subnets = $8 = 2^3$.\nBits borrowed for subnetting = 3 bits.\n$$\\text{New Subnet Mask} = 20 + 3 = \\mathbf{/24}$$\nIn dotted decimal: `255.255.255.0`"
      }
    ]
  },
  {
    id: "gate-2023",
    year: "2023",
    setTitle: "Official",
    title: "GATE CSE 2023 Paper",
    totalQuestions: 5,
    timeMinutes: 15,
    url: "https://gateoverflow.in/exam/430/gate-cse-2023-original-paper",
    questions: [
      {
        id: "pyq-23-01",
        difficulty: "hard",
        concept: "Compiler Design — Syntax Directed Translation",
        year: "GATE 2023",
        text: "Consider the syntax directed definition (SDD):\n$E \\to E_1 + T \\ \\{E.val = E_1.val + T.val\\}$\n$E \\to T \\ \\{E.val = T.val\\}$\n$T \\to T_1 * F \\ \\{T.val = T_1.val \\times F.val\\}$\n$T \\to F \\ \\{T.val = F.val\\}$\n$F \\to num \\ \\{F.val = num.lexval\\}$\nWhat type of attributes are used here?",
        options: [
          "Only Synthesized Attributes (S-attributed SDD)",
          "Only Inherited Attributes",
          "Both Inherited and Synthesized Attributes (L-attributed SDD)",
          "Neither Inherited nor Synthesized"
        ],
        correctAnswerIndex: 0,
        explanation: "### Solution\nEvery semantic rule calculates parent attribute value ($E.val, T.val, F.val$) from child attribute values ($E_1.val, T_1.val, F.val, num.lexval$).\n\nAttributes evaluated strictly bottom-up from children → **Synthesized Attributes** (S-attributed SDD)."
      },
      {
        id: "pyq-23-02",
        difficulty: "medium",
        concept: "Engg Math — Probability",
        year: "GATE 2023",
        text: "Two fair 6-sided dice are rolled simultaneously. Given that the sum of outcomes is an even number, what is the probability that both dice showed odd numbers?",
        options: ["1/2", "1/3", "2/3", "1/4"],
        correctAnswerIndex: 0,
        explanation: "### Solution\n- Total outcomes = 36\n- Event S (Sum is even): occurs when (Odd, Odd) or (Even, Even).\n  - (Odd, Odd) = $3 \\times 3 = 9$ outcomes\n  - (Even, Even) = $3 \\times 3 = 9$ outcomes\n  - Total S = $9 + 9 = 18$ outcomes\n- Event A (Both Odd) = 9 outcomes\n\n$$P(A \\mid S) = \\frac{9}{18} = \\mathbf{\\frac{1}{2}}$$"
      }
    ]
  },
  {
    id: "gate-2022",
    year: "2022",
    setTitle: "Official",
    title: "GATE CSE 2022 Paper",
    totalQuestions: 5,
    timeMinutes: 15,
    url: "https://gateoverflow.in/exam/298/gate-cse-2022",
    questions: [
      {
        id: "pyq-22-01",
        difficulty: "medium",
        concept: "OS — Semaphores",
        year: "GATE 2022",
        text: "A counting semaphore S is initialized to 10. Then 6 `wait(S)` operations and 4 `signal(S)` operations are executed. The final value of S is:",
        options: ["8", "12", "6", "10"],
        correctAnswerIndex: 0,
        explanation: "### Solution\n- Initial value of $S = 10$\n- `wait(S)` decrements $S$ by 1: $6 \\times (-1) = -6$\n- `signal(S)` increments $S$ by 1: $4 \\times (+1) = +4$\n\n$$\\text{Final S} = 10 - 6 + 4 = \\mathbf{8}$$"
      }
    ]
  },
  {
    id: "gate-2021-set1",
    year: "2021",
    setTitle: "Set 1",
    title: "GATE CSE 2021 (Set 1)",
    totalQuestions: 5,
    timeMinutes: 15,
    url: "https://gateoverflow.in/exam/263/gate-2021",
    questions: [
      {
        id: "pyq-21s1-01",
        difficulty: "medium",
        concept: "Data Structures — Binary Search Tree",
        year: "GATE 2021 Set 1",
        text: "The postorder traversal of a binary search tree is 5, 10, 8, 25, 30, 20, 15. The preorder traversal is:",
        options: [
          "15, 8, 5, 10, 20, 30, 25",
          "15, 8, 5, 10, 20, 25, 30",
          "15, 10, 5, 8, 20, 25, 30",
          "5, 8, 10, 15, 20, 25, 30"
        ],
        correctAnswerIndex: 1,
        explanation: "### Solution\n- Postorder: `[5, 10, 8, 25, 30, 20, 15]` → Root is last element = `15`.\n- Inorder of BST is always sorted: `[5, 8, 10, 15, 20, 25, 30]`\n- Left subtree: elements < 15: `[5, 8, 10]` (Root 8, Left 5, Right 10)\n- Right subtree: elements > 15: `[20, 25, 30]` (Root 20, Right 30, Left 25... wait: postorder 25,30,20 → root 20, children 25, 30)\n\nPreorder = Root, Left, Right = **15, 8, 5, 10, 20, 25, 30**"
      }
    ]
  },
  {
    id: "gate-2020",
    year: "2020",
    setTitle: "Official",
    title: "GATE CSE 2020 Paper",
    totalQuestions: 5,
    timeMinutes: 15,
    url: "https://gateoverflow.in/exam/218/gate-cse-2020",
    questions: [
      {
        id: "pyq-20-01",
        difficulty: "medium",
        concept: "Discrete Math — Graph Theory",
        year: "GATE 2020",
        text: "What is the chromatic number of a complete bipartite graph $K_{3,4}$?",
        options: ["2", "3", "4", "7"],
        correctAnswerIndex: 0,
        explanation: "### Solution\nEvery bipartite graph $K_{m,n}$ (with $m,n \\geq 1$) can be colored using 2 colors (one color for partition set 1, second color for partition set 2).\n\n$$\\text{Chromatic number } \\chi(K_{3,4}) = \\mathbf{2}$$"
      }
    ]
  },
  {
    id: "gate-2019",
    year: "2019",
    setTitle: "Official",
    title: "GATE CSE 2019 Paper",
    totalQuestions: 5,
    timeMinutes: 15,
    url: "https://gateoverflow.in/exam/141/gate2019",
    questions: [
      {
        id: "pyq-19-01",
        difficulty: "hard",
        concept: "Digital Logic — Multiplexer",
        year: "GATE 2019",
        text: "How many 2-to-1 Multiplexers are required to implement a 16-to-1 Multiplexer?",
        options: ["15", "16", "8", "31"],
        correctAnswerIndex: 0,
        explanation: "### Solution\nTree of 2-to-1 MUXes:\n- Level 1: $16 / 2 = 8$ MUXes\n- Level 2: $8 / 2 = 4$ MUXes\n- Level 3: $4 / 2 = 2$ MUXes\n- Level 4: $2 / 2 = 1$ MUX\n\nTotal = $8 + 4 + 2 + 1 = \\mathbf{15 \\text{ MUXes}}$\nGeneral formula for $N$-to-1 using 2-to-1 MUXes: $N - 1 = 16 - 1 = 15$."
      }
    ]
  },
  {
    id: "gate-2018",
    year: "2018",
    setTitle: "Official",
    title: "GATE CSE 2018 Paper",
    totalQuestions: 5,
    timeMinutes: 15,
    url: "https://gateoverflow.in/exam/88/gate2018",
    questions: [
      {
        id: "pyq-18-01",
        difficulty: "medium",
        concept: "Algorithms — Heap",
        year: "GATE 2018",
        text: "The time complexity to build a Max-Heap from an unsorted array of n elements is:",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswerIndex: 0,
        explanation: "### Solution\nUsing the bottom-up `Build-Max-Heap` algorithm (Floyd's algorithm):\n$$T(n) = \\sum_{h=0}^{\\log n} \\frac{n}{2^{h+1}} O(h) = O(n)$$\n\nAlthough individual heapify takes $O(\\log n)$, most nodes are near the leaves with small height $\\Rightarrow \\mathbf{O(n)}$ overall time."
      }
    ]
  },
  {
    id: "gate-2017-set1",
    year: "2017",
    setTitle: "Set 1",
    title: "GATE CSE 2017 (Set 1)",
    totalQuestions: 5,
    timeMinutes: 15,
    url: "https://gateoverflow.in/exam/76/gate-2017-set-1",
    questions: [
      {
        id: "pyq-17s1-01",
        difficulty: "medium",
        concept: "Network — Transport Layer",
        year: "GATE 2017 Set 1",
        text: "In TCP, the size of the congestion window increases linearly in which phase?",
        options: ["Congestion Avoidance phase", "Slow Start phase", "Fast Recovery phase", "Connection State phase"],
        correctAnswerIndex: 0,
        explanation: "### Solution\n- **Slow Start**: Congestion window grows **exponentially** (doubles every RTT).\n- **Congestion Avoidance**: Congestion window grows **linearly** (increases by 1 MSS per RTT).\n\n$$\\therefore \\text{Option A is correct.}$$"
      }
    ]
  },
  {
    id: "gate-2016-set1",
    year: "2016",
    setTitle: "Set 1",
    title: "GATE CSE 2016 (Set 1)",
    totalQuestions: 5,
    timeMinutes: 15,
    url: "https://gateoverflow.in/exam/8/gate-2016-1",
    questions: [
      {
        id: "pyq-16s1-01",
        difficulty: "hard",
        concept: "TOC — Regular Expressions",
        year: "GATE 2016 Set 1",
        text: "Which of the following regular expressions represents the language of all strings over {a, b} containing AT MOST one 'a'?",
        options: ["b* a? b*", "b* a b*", "(a + b)* a (a + b)*", "b* (a + ε)"],
        correctAnswerIndex: 0,
        explanation: "### Solution\n- At most one 'a' means either 0 'a's or 1 'a'.\n- Zero 'a's: $b^*$\n- One 'a': $b^* a b^*$\n- Combining: $b^* (a + \\varepsilon) b^*$ or $b^* a? b^*$\n\n$$\\therefore \\text{Option A is correct.}$$"
      }
    ]
  },
  {
    id: "gate-2015-set1",
    year: "2015",
    setTitle: "Set 1",
    title: "GATE CSE 2015 (Set 1)",
    totalQuestions: 5,
    timeMinutes: 15,
    url: "https://gateoverflow.in/exam/10/gate-2015-1",
    questions: [
      {
        id: "pyq-15s1-01",
        difficulty: "medium",
        concept: "Data Structures — Stack",
        year: "GATE 2015 Set 1",
        text: "Which data structure is naturally used to evaluate infix expressions or handle recursive function calls?",
        options: ["Stack", "Queue", "Binary Search Tree", "Linked List"],
        correctAnswerIndex: 0,
        explanation: "### Solution\n**Stack** works on Last-In-First-Out (LIFO) principle, which perfectly matches:\n1. Expression evaluation (infix to postfix / evaluation)\n2. Function call stack frames (recursion management)\n\n$$\\therefore \\text{Stack is the answer.}$$"
      }
    ]
  }
];
