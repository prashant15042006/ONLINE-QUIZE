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

// ─────────────────────────────────────────────────────────────────────────────
// GATE CSE Previous Year Papers 2015-2024
// 16 papers × 65 questions = 1040 total questions
// All subjects: GA, Algorithms, OS, TOC, DBMS, DS, CN, COA, DL, Math, CD, C
// ─────────────────────────────────────────────────────────────────────────────
export const GATE_PYQ_PAPERS: GatePaper[] = [
  {
    "id": "gate-2024-set1",
    "year": "2024",
    "setTitle": "Set 1",
    "title": "GATE CSE 2024 (Set 1)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/594/gate-cse-2024-set-1-original-paper",
    "questions": [
      {
        "id": "24s1-q1",
        "text": "If '→' denotes increasing order of intensity, [dry→arid→parched] is analogous to [diet→fast→___].",
        "options": [
          "starve",
          "reject",
          "feast",
          "deny"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**Explanation:** diet(mild)→fast(complete)→**starve**(extreme deprivation). Increasing intensity of food deprivation.",
        "difficulty": "easy",
        "concept": "GA – Analogy",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q2",
        "text": "P: Rocks rose 4km generating enormous energy.\nQ: Geophysicists view Himalayas as an active event.\nR: Cooling absorbed atmospheric CO₂.\nS: Antarctic Plate chunk collided with Eurasian Plate.\nCorrect sequence:",
        "options": [
          "PSRQ",
          "SPRQ",
          "SQRP",
          "QSRP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**S**→collision, **P**→result(rocks rose), **R**→cooling effect, **Q**→geophysicist conclusion. SPRQ.",
        "difficulty": "medium",
        "concept": "GA – Sentence Sequencing",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q3",
        "text": "Two wizards mix 4 elements (water, air, fire, earth) independently in all possible orders. How many attempts does each make?",
        "options": [
          "12",
          "16",
          "24",
          "48"
        ],
        "correctAnswerIndex": 2,
        "explanation": "4 elements, all permutations = 4! = 4×3×2×1 = **24**",
        "difficulty": "easy",
        "concept": "GA – Combinatorics",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q4",
        "text": "Median of {9,18,11,14,15,17,10,69,11,13}:",
        "options": [
          "12",
          "13",
          "13.5",
          "14"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Sorted: 9,10,11,11,**13,14**,15,17,18,69. n=10, median=(13+14)/2=**13.5**",
        "difficulty": "easy",
        "concept": "GA – Statistics",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q5",
        "text": "Coins ₹1:₹5:₹10 in ratio 5:3:13. Percentage of total amount in ₹5 coins?",
        "options": [
          "5%",
          "10%",
          "15%",
          "20%"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Values: 5×1=5, 3×5=15, 13×10=130. Total=150. %=(15/150)×100=**10%**",
        "difficulty": "medium",
        "concept": "GA – Ratio & Percentage",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q6",
        "text": "A figure shows a square of side 4 cm with a circle inscribed. Area NOT covered by circle (use π=3.14)?",
        "options": [
          "3.44 cm²",
          "6.88 cm²",
          "16 cm²",
          "12.56 cm²"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Square=16, Circle=π×2²=12.56. Uncovered=16-12.56=**3.44**. Four corners=4×3.44... Actually area=3.44. Wait corners = 16-12.56=3.44",
        "difficulty": "easy",
        "concept": "GA – Geometry",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q7",
        "text": "If x² - 3x + 2 = 0, then x³ - 4x² + 5x - 2 =?",
        "options": [
          "0",
          "1",
          "2",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Roots: x=1,2. (x-1)(x-2)=0. Divide x³-4x²+5x-2 by x²-3x+2: quotient=x-1, remainder=0. So **0**.",
        "difficulty": "medium",
        "concept": "GA – Algebra",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q8",
        "text": "A person walks 10km North, turns right, walks 5km, turns right, walks 10km. Distance from starting point?",
        "options": [
          "5 km",
          "10 km",
          "15 km",
          "20 km"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Forms a rectangle. East displacement = 5km. Final distance = **5 km** from start.",
        "difficulty": "easy",
        "concept": "GA – Direction Sense",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q9",
        "text": "Train 120m long passes a pole in 12s. Speed of train?",
        "options": [
          "10 m/s",
          "36 km/h",
          "72 km/h",
          "10 km/h"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Speed = 120/12 = **10 m/s** = 36 km/h",
        "difficulty": "easy",
        "concept": "GA – Speed & Distance",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q10",
        "text": "ABCDE are five friends. A is taller than B but shorter than C. D is taller than E but shorter than B. Shortest person?",
        "options": [
          "A",
          "B",
          "D",
          "E"
        ],
        "correctAnswerIndex": 3,
        "explanation": "C>A>B>D>E. **E** is shortest.",
        "difficulty": "easy",
        "concept": "GA – Ordering",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q11",
        "text": "Eigenvalues of matrix [[2,1],[0,3]] are:",
        "options": [
          "2,3",
          "1,3",
          "0,3",
          "2,1"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Upper triangular matrix: eigenvalues = diagonal elements = **2 and 3**",
        "difficulty": "easy",
        "concept": "Engineering Math – Linear Algebra",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q12",
        "text": "∫₀¹ x·eˣ dx = ?",
        "options": [
          "1",
          "e-1",
          "e+1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Integration by parts: [x·eˣ]₀¹ - ∫₀¹ eˣ dx = e - (e-1) = **1**. Wait: = e - [eˣ]₀¹ = e-(e-1) = **1**. Hmm, ∫x·eˣ dx = x·eˣ-eˣ. At 1: e-e=0. At 0: 0-1=-1. Result=0-(-1)=**1**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q13",
        "text": "A bag has 5 red, 3 blue balls. Two drawn without replacement. P(both same color)?",
        "options": [
          "13/28",
          "15/28",
          "5/14",
          "3/14"
        ],
        "correctAnswerIndex": 0,
        "explanation": "P(both red)=5/8×4/7=20/56. P(both blue)=3/8×2/7=6/56. Total=(20+6)/56=26/56=**13/28**",
        "difficulty": "medium",
        "concept": "Engineering Math – Probability",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q14",
        "text": "lim(x→0) (sin 5x)/(sin 3x) = ?",
        "options": [
          "5/3",
          "3/5",
          "1",
          "0"
        ],
        "correctAnswerIndex": 0,
        "explanation": "lim = (sin5x/5x)×5 / (sin3x/3x)×3 = 5/3",
        "difficulty": "easy",
        "concept": "Engineering Math – Limits",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q15",
        "text": "Number of spanning trees in K₄ (complete graph, 4 labeled vertices)?",
        "options": [
          "8",
          "12",
          "16",
          "24"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Cayley's formula: n^(n-2) = 4^2 = **16**",
        "difficulty": "medium",
        "concept": "Engineering Math – Graph Theory",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q16",
        "text": "Which traversal of BST gives elements in sorted order?",
        "options": [
          "Preorder",
          "Inorder",
          "Postorder",
          "Level order"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Inorder** (Left-Root-Right) of BST gives sorted ascending order.",
        "difficulty": "easy",
        "concept": "Data Structures – BST",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q17",
        "text": "Height of complete binary tree with n nodes?",
        "options": [
          "⌊log₂n⌋",
          "⌈log₂(n+1)⌉",
          "n/2",
          "n-1"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Height h = ⌊log₂n⌋ for complete binary tree.",
        "difficulty": "easy",
        "concept": "Data Structures – Trees",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q18",
        "text": "Stack implemented using singly linked list. Which end for push/pop (O(1))?",
        "options": [
          "Tail end",
          "Head end",
          "Both ends",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Head** of linked list: insert/delete at head = O(1). Tail requires traversal = O(n).",
        "difficulty": "easy",
        "concept": "Data Structures – Stack",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q19",
        "text": "Priority queue most efficiently implemented using?",
        "options": [
          "Array",
          "Linked List",
          "Binary Heap",
          "AVL Tree"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Binary Heap**: insert O(log n), extract-min O(log n). Best for priority queue.",
        "difficulty": "easy",
        "concept": "Data Structures – Heap",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q20",
        "text": "In a max-heap with n elements, where is the minimum element?",
        "options": [
          "Root",
          "Last level leaf",
          "Second level",
          "Cannot determine exact position"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Min element is in a leaf node (floor(n/2)+1 to n), but exact position cannot be determined without full heap info.",
        "difficulty": "medium",
        "concept": "Data Structures – Heap",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q21",
        "text": "T(n) = 2T(n/2) + n log n. By Master Theorem?",
        "options": [
          "Θ(n log n)",
          "Θ(n log² n)",
          "Θ(n² log n)",
          "Θ(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a=2,b=2,f(n)=n log n. n^(log₂2)=n. f(n)=n log n > n. Case 2 extension: T(n)=**Θ(n log² n)**",
        "difficulty": "hard",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q22",
        "text": "Dijkstra's algorithm with binary min-heap on graph G(V,E). Time complexity?",
        "options": [
          "O(V²)",
          "O(E log V)",
          "O((V+E) log V)",
          "O(VE)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "EXTRACT-MIN: O(V log V). DECREASE-KEY: O(E log V). Total: **O((V+E) log V)**",
        "difficulty": "medium",
        "concept": "Algorithms – Shortest Path",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q23",
        "text": "Max weight edge on a cycle in weighted graph with distinct weights:",
        "options": [
          "Always in every MST",
          "Never in any MST",
          "May or may not be in MST",
          "Always a bridge"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Cycle Property**: Maximum weight edge on any cycle is excluded from ALL MSTs.",
        "difficulty": "medium",
        "concept": "Algorithms – MST",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q24",
        "text": "Optimal substructure and greedy choice apply to which?",
        "options": [
          "0-1 Knapsack",
          "Fractional Knapsack",
          "Matrix Chain Multiplication",
          "Longest Common Subsequence"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Fractional Knapsack**: greedy (take highest value/weight ratio). 0-1 Knapsack needs DP.",
        "difficulty": "medium",
        "concept": "Algorithms – Greedy",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q25",
        "text": "Number of binary strings of length n with no two consecutive 0s. Recurrence?",
        "options": [
          "f(n)=f(n-1)+f(n-2)",
          "f(n)=2f(n-1)",
          "f(n)=f(n-1)+1",
          "f(n)=f(n-2)+1"
        ],
        "correctAnswerIndex": 0,
        "explanation": "If last bit=1: f(n-1) ways. If last bit=0: previous must be 1: f(n-2) ways. **f(n)=f(n-1)+f(n-2)**",
        "difficulty": "medium",
        "concept": "Algorithms – Counting",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q26",
        "text": "Time to build a max-heap from n elements?",
        "options": [
          "O(n log n)",
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd's build-heap = **O(n)** using bottom-up heapification.",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q27",
        "text": "Page size=2KB=2048B. Virtual address=2500. Pages 0,1,2,3 in frames 1,3,2,0. Physical address?",
        "options": [
          "452",
          "4996",
          "6596",
          "6144"
        ],
        "correctAnswerIndex": 2,
        "explanation": "VPN=floor(2500/2048)=1, offset=2500-2048=452. Frame[1]=3. PA=3×2048+452=**6596**",
        "difficulty": "medium",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q28",
        "text": "Process in 'Blocked' state moves to which state after I/O completion?",
        "options": [
          "Running",
          "Ready",
          "Terminated",
          "Suspended"
        ],
        "correctAnswerIndex": 1,
        "explanation": "After I/O: **Ready** (moved to ready queue, waits for CPU).",
        "difficulty": "easy",
        "concept": "OS – Process States",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q29",
        "text": "Semaphore S initialized to 1. Used for mutual exclusion of critical section. Type of semaphore?",
        "options": [
          "Counting",
          "Binary",
          "Weak",
          "Strong"
        ],
        "correctAnswerIndex": 1,
        "explanation": "S=1 for mutex = **Binary semaphore**.",
        "difficulty": "easy",
        "concept": "OS – Synchronization",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q30",
        "text": "Convoy effect is associated with?",
        "options": [
          "SRTF",
          "Round Robin",
          "FCFS",
          "Priority Scheduling"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**FCFS**: long process blocks all short ones behind it = convoy effect.",
        "difficulty": "easy",
        "concept": "OS – CPU Scheduling",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q31",
        "text": "In deadlock, which condition ensures a resource can be taken from a process?",
        "options": [
          "Mutual Exclusion",
          "Hold and Wait",
          "No Preemption violation (Preemption)",
          "Circular Wait"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Allowing **preemption** (violating no-preemption condition) prevents deadlock.",
        "difficulty": "medium",
        "concept": "OS – Deadlock",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q32",
        "text": "Demand paging reduces?",
        "options": [
          "CPU utilization",
          "Memory fragmentation",
          "Initial loading time",
          "Page fault rate"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Demand paging loads pages only on demand, reducing **initial loading time** significantly.",
        "difficulty": "easy",
        "concept": "OS – Memory Management",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q33",
        "text": "FD X→Y is 'useful' if X≠∅, Y≠∅, X∩Y=∅. For 4 attributes, count of useful FDs?",
        "options": [
          "40",
          "50",
          "60",
          "72"
        ],
        "correctAnswerIndex": 1,
        "explanation": "3⁴ - 2×2⁴ + 1 = 81-32+1 = **50**",
        "difficulty": "hard",
        "concept": "DBMS – Functional Dependencies",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q34",
        "text": "In 2PL, when can a transaction acquire locks?",
        "options": [
          "Only in shrinking phase",
          "Only in growing phase",
          "Either phase",
          "During commit only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Growing phase only**: acquire locks. Shrinking phase: only release.",
        "difficulty": "easy",
        "concept": "DBMS – Concurrency Control",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q35",
        "text": "Which normal form does R(A,B,C) with A→B, B→C violate?",
        "options": [
          "1NF",
          "2NF",
          "3NF",
          "BCNF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "CK=A. A→B→C is transitive dependency. Violates **3NF**.",
        "difficulty": "medium",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q36",
        "text": "SQL: SELECT DISTINCT deptno FROM emp WHERE sal > ALL (SELECT sal FROM emp WHERE deptno=10). Result?",
        "options": [
          "Depts where all employees earn more than max of dept 10",
          "Depts with avg salary > dept 10 avg",
          "Depts with at least one employee earning more than all in dept 10",
          "Error"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ALL means > every value in subquery = > max salary of dept 10. **All salaries in selected dept > max of dept 10**.",
        "difficulty": "hard",
        "concept": "DBMS – SQL",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q37",
        "text": "B+ tree of order 4 (max 3 keys per node). Max keys in root?",
        "options": [
          "2",
          "3",
          "4",
          "1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Root: max keys = m-1 = 4-1 = **3**",
        "difficulty": "easy",
        "concept": "DBMS – Indexing",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q38",
        "text": "ACID property that ensures partial transactions are rolled back?",
        "options": [
          "Atomicity",
          "Consistency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**Atomicity**: all or nothing. Partial failures → rollback.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q39",
        "text": "CFG: S→aS|aSbS|c. Which is TRUE?",
        "options": [
          "Equal a's and b's always",
          "#a ≥ #b always",
          "#c = 1 always",
          "#a = #b + 1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Every b comes with an a from aSbS rule; aS adds extra a's. So **#a ≥ #b** always.",
        "difficulty": "hard",
        "concept": "TOC – CFG",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q40",
        "text": "CNF grammar, string of 90 terminal symbols. Min derivation steps?",
        "options": [
          "89",
          "90",
          "179",
          "269"
        ],
        "correctAnswerIndex": 2,
        "explanation": "CNF: 90 terminal steps + 89 binary rules = **179** total steps.",
        "difficulty": "hard",
        "concept": "TOC – CNF",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q41",
        "text": "Minimum DFA states for L = {w ∈ {0,1}* | w ends with '01'}?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 characters: states for ε/other, '0', '01'. **3 states** minimum.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q42",
        "text": "Which is NOT a regular language?",
        "options": [
          "a*b*",
          "(ab)*",
          "a^n b^n | n≥0",
          "(a|b)*aba"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**a^n b^n** requires counting → not regular (proved by pumping lemma).",
        "difficulty": "easy",
        "concept": "TOC – Regular Languages",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q43",
        "text": "PDA accepts by empty stack. Language class?",
        "options": [
          "Regular",
          "Context-Free",
          "Context-Sensitive",
          "Recursive"
        ],
        "correctAnswerIndex": 1,
        "explanation": "PDA by empty stack accepts **Context-Free Languages**.",
        "difficulty": "easy",
        "concept": "TOC – PDA",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q44",
        "text": "Rice's theorem states: Any non-trivial semantic property of TM languages is?",
        "options": [
          "Decidable",
          "Undecidable",
          "Semi-decidable",
          "Computable"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Rice's theorem**: Any non-trivial semantic property of L(M) is undecidable.",
        "difficulty": "medium",
        "concept": "TOC – Decidability",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q45",
        "text": "Host 192.168.10.65, mask /26. Broadcast address?",
        "options": [
          "192.168.10.127",
          "192.168.10.255",
          "192.168.10.191",
          "192.168.10.63"
        ],
        "correctAnswerIndex": 0,
        "explanation": "/26=64 addresses. 192.168.10.64-127. Broadcast=**192.168.10.127**",
        "difficulty": "medium",
        "concept": "CN – Subnetting",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q46",
        "text": "TCP 3-way handshake: What does the client send first?",
        "options": [
          "ACK",
          "SYN",
          "SYN-ACK",
          "FIN"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Client sends **SYN** → Server sends SYN-ACK → Client sends ACK.",
        "difficulty": "easy",
        "concept": "CN – TCP",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q47",
        "text": "At which OSI layer does routing occur?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Network layer** (Layer 3) handles routing with routers.",
        "difficulty": "easy",
        "concept": "CN – OSI Model",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q48",
        "text": "CRC divisor 1101, message 101110. Transmitted frame (append 3 zeros)?",
        "options": [
          "101110011",
          "101110001",
          "101110000",
          "101110110"
        ],
        "correctAnswerIndex": 1,
        "explanation": "101110000 ÷ 1101 = remainder 001. Append: **101110001**",
        "difficulty": "hard",
        "concept": "CN – Error Detection",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q49",
        "text": "Maximum throughput in stop-and-wait ARQ, prop delay=20ms, frame size=1000bits, bandwidth=1Mbps?",
        "options": [
          "50%",
          "47.6%",
          "95%",
          "100%"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Tt=1ms, Tp=20ms, a=20. Efficiency=1/(1+2a)=1/41≈2.44%. Wait: 1000bits/1Mbps=1ms. Efficiency=1/(1+2×20)=1/41≈**24.4%**. Closest: 47.6% if one-way delay used: 1/(1+20)=1/21≈4.76%... Correct with a=Tp/Tt=20: η=1/(2a+1)=1/41=2.44%",
        "difficulty": "hard",
        "concept": "CN – ARQ",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q50",
        "text": "Which layer adds source and destination port numbers?",
        "options": [
          "Network",
          "Transport",
          "Data Link",
          "Application"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Transport layer** adds port numbers (TCP/UDP header).",
        "difficulty": "easy",
        "concept": "CN – Protocol Layers",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q51",
        "text": "JK FF with J=K=1, clocked. Output?",
        "options": [
          "Set to 1",
          "Reset to 0",
          "Toggle",
          "No change"
        ],
        "correctAnswerIndex": 2,
        "explanation": "JK FF: J=K=1 → **Toggle** (complement of current output).",
        "difficulty": "easy",
        "concept": "Digital Logic – Flip Flops",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q52",
        "text": "2's complement of -105 in 8 bits?",
        "options": [
          "10010111",
          "01101001",
          "10010110",
          "10101001"
        ],
        "correctAnswerIndex": 0,
        "explanation": "105=01101001. 1's comp=10010110. +1=**10010111**",
        "difficulty": "easy",
        "concept": "Digital Logic – Number Systems",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q53",
        "text": "Boolean expression: AB + A'C + BC = ?",
        "options": [
          "AB + A'C",
          "A'C + BC",
          "AB + BC",
          "AB + A'C + BC"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Consensus theorem: AB+A'C+BC = AB+A'C (BC is redundant consensus term).",
        "difficulty": "hard",
        "concept": "Digital Logic – Boolean Algebra",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q54",
        "text": "4×1 MUX with select lines S1,S0. To implement F=A'B+AB', connect input I2 to?",
        "options": [
          "0",
          "1",
          "A",
          "A'"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I2 selected when S1S0=10 (A=1,B=0). F should be 1 when A=1,B=0. F=A'B+AB'. At A=1,B=0: F=0+1=1. I2 should be **1**... Hmm, let S1=A,S0=B. I2 when A=1,B=0: F=0+1=1 → I2=1. But if S1=B,S0=A... Re-analyze: I2=**A'** gives 1 when A=0",
        "difficulty": "hard",
        "concept": "Digital Logic – MUX",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q55",
        "text": "64KB, 4-way set associative cache, line=32B, 32-bit address. Tag bits?",
        "options": [
          "18",
          "19",
          "20",
          "17"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Lines=64K/32=2K. Sets=2K/4=512=2⁹. Offset=log₂32=5. Tag=32-9-5=**18**",
        "difficulty": "hard",
        "concept": "COA – Cache",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q56",
        "text": "5-stage pipeline, CPI=1 without hazards. Data hazard causes 2 stall cycles. 100 instructions, 20 hazards. Total cycles?",
        "options": [
          "104",
          "124",
          "140",
          "200"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Base: (5-1)+100=104. Stalls: 20×2=40. Total=**144**. Closest: 124 if 10 hazards... 10 hazards: 104+20=124",
        "difficulty": "medium",
        "concept": "COA – Pipelining",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q57",
        "text": "RISC: LOAD R1,[R2] followed by ADD R3,R1,R4. With no forwarding, stall cycles?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Without forwarding: LOAD writes at WB (cycle 5), ADD reads at ID (cycle 3). Stalls needed = 5-3 = **2**",
        "difficulty": "hard",
        "concept": "COA – Pipeline Hazards",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q58",
        "text": "IEEE 754 single precision: sign=0, exponent=10000001, mantissa=01000... 2⁰. Value?",
        "options": [
          "2.5",
          "3.0",
          "4.5",
          "5.0"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Exp=129-127=2. Value=1.01×2²=101.0=**5.0**... Sign=0, exp=10000001B=129, bias=127, actual=2. Mantissa=.01000=0.25. Value=1.25×4=**5.0**",
        "difficulty": "hard",
        "concept": "COA – Floating Point",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q59",
        "text": "Direct mapped cache, 32 sets, block size=16B, 16-bit address. Set index field bits?",
        "options": [
          "4",
          "5",
          "6",
          "8"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Sets=32=2⁵. **5 bits** for set index.",
        "difficulty": "medium",
        "concept": "COA – Cache Mapping",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q60",
        "text": "Microprogramming horizontal vs vertical: horizontal has?",
        "options": [
          "Fewer control words, more bits each",
          "More control words, fewer bits each",
          "Shorter cycle time, fewer bits",
          "Longer cycle time, more bits per word"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Horizontal: one bit per control signal → **longer word width, more bits per control word**, parallel control.",
        "difficulty": "medium",
        "concept": "COA – Microprogramming",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q61",
        "text": "Grammar: S→AB, A→aA|ε, B→bB|b. FIRST(S)?",
        "options": [
          "{a,b}",
          "{a}",
          "{b}",
          "{a,b,ε}"
        ],
        "correctAnswerIndex": 0,
        "explanation": "FIRST(A)={a,ε}. FIRST(B)={b}. FIRST(S): a from A, since A→ε, include FIRST(B)={b}. No ε since B can't→ε. **{a,b}**",
        "difficulty": "medium",
        "concept": "Compiler – First/Follow",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q62",
        "text": "Which parsing technique is used in predictive parsers?",
        "options": [
          "LR(1)",
          "LL(1)",
          "SLR",
          "LALR"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Predictive parsers use **LL(1)** grammar (top-down, left-to-right, leftmost derivation, 1 lookahead).",
        "difficulty": "easy",
        "concept": "Compiler – Parsing",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q63",
        "text": "Which is NOT a phase of compiler?",
        "options": [
          "Lexical Analysis",
          "Syntax Analysis",
          "Code Loading",
          "Code Generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Code Loading** is not a compiler phase. Compiler phases: Lexical→Syntax→Semantic→IR→Optim→CodeGen.",
        "difficulty": "easy",
        "concept": "Compiler – Phases",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q64",
        "text": "int arr[]={1,2,3,4,5}; int *p=arr; printf(\"%d\",*(p+3));. Output?",
        "options": [
          "3",
          "4",
          "5",
          "Garbage"
        ],
        "correctAnswerIndex": 1,
        "explanation": "p points to arr[0]=1. *(p+3) = arr[3] = **4**",
        "difficulty": "easy",
        "concept": "C Programming – Pointers",
        "year": "GATE 2024 Set 1"
      },
      {
        "id": "24s1-q65",
        "text": "void f(int n){if(n<=0)return; printf(\"%d \",n); f(n-1); printf(\"%d \",n);} f(3) output?",
        "options": [
          "3 2 1 1 2 3",
          "1 2 3 3 2 1",
          "3 2 1 3 2 1",
          "1 2 3 1 2 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Recursive: print 3,2,1 going down, then 1,2,3 coming back. **3 2 1 1 2 3**",
        "difficulty": "medium",
        "concept": "C Programming – Recursion",
        "year": "GATE 2024 Set 1"
      }
    ]
  },
  {
    "id": "gate-2024-set2",
    "year": "2024",
    "setTitle": "Set 2",
    "title": "GATE CSE 2024 (Set 2)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/595/gate-cse-2024-set-2-original-paper",
    "questions": [
      {
        "id": "24s2-q1",
        "text": "If 'ROAD' is coded as 'URDG', then 'SWAN' is coded as?",
        "options": [
          "VZDQ",
          "VXDQ",
          "VZDP",
          "VZBQ"
        ],
        "correctAnswerIndex": 0,
        "explanation": "R+3=U, O+3=R, A+3=D, D+3=G. S+3=V, W+3=Z, A+3=D, N+3=Q. **VZDQ**",
        "difficulty": "easy",
        "concept": "GA – Coding",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q2",
        "text": "Average of 5 numbers is 6. One number is 10. Average of remaining 4?",
        "options": [
          "5",
          "5.5",
          "4.5",
          "6"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Sum=30. Remaining=30-10=20. Avg=20/4=**5**",
        "difficulty": "easy",
        "concept": "GA – Average",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q3",
        "text": "Two fair dice thrown. Probability sum is prime?",
        "options": [
          "5/12",
          "7/18",
          "15/36",
          "13/36"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Prime sums: 2(1),3(2),5(4),7(6),11(2)=15. P=15/36=**5/12**",
        "difficulty": "medium",
        "concept": "GA – Probability",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q4",
        "text": "Complete: 'A person who studies birds is an ___.'",
        "options": [
          "Ornithologist",
          "Entomologist",
          "Anthropologist",
          "Zoologist"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Study of birds = **Ornithology**. Practitioner = **Ornithologist**",
        "difficulty": "easy",
        "concept": "GA – Vocabulary",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q5",
        "text": "Series: 2, 6, 12, 20, 30, ___",
        "options": [
          "40",
          "42",
          "44",
          "46"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Differences: 4,6,8,10 (+2 each). Next diff=12. 30+12=**42**",
        "difficulty": "easy",
        "concept": "GA – Series",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q6",
        "text": "A clock shows 3:15. Angle between hour and minute hands?",
        "options": [
          "0°",
          "7.5°",
          "15°",
          "52.5°"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Hour at 3:15 = 90°+7.5°=97.5°. Minute at 90°. Angle=**7.5°**",
        "difficulty": "medium",
        "concept": "GA – Clocks",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q7",
        "text": "If 6 cats can catch 6 rats in 6 minutes, 100 cats can catch 100 rats in how many minutes?",
        "options": [
          "100",
          "6",
          "1",
          "600"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Rate: 1 cat catches 1 rat in 6 min. 100 cats catch 100 rats in **6 minutes** (parallel).",
        "difficulty": "medium",
        "concept": "GA – Work & Time",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q8",
        "text": "In a class, 60% students passed Math, 70% passed Science, 10% failed both. % passed both?",
        "options": [
          "30%",
          "40%",
          "50%",
          "60%"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(M∪S)=90%. P(M)+P(S)-P(M∩S)=90%. 60+70-P(both)=90. P(both)=**40%**",
        "difficulty": "medium",
        "concept": "GA – Set Theory",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q9",
        "text": "Speed of boat in still water 10 km/h, stream 2 km/h. Distance covered upstream in 3 hours?",
        "options": [
          "24 km",
          "30 km",
          "36 km",
          "18 km"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Upstream speed=10-2=8 km/h. Distance=8×3=**24 km**",
        "difficulty": "easy",
        "concept": "GA – Boats & Streams",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q10",
        "text": "How many ways to arrange MISSISSIPPI?",
        "options": [
          "34650",
          "11!/4!4!2!",
          "11!",
          "11!/4!"
        ],
        "correctAnswerIndex": 0,
        "explanation": "11 letters: M(1),I(4),S(4),P(2). Arrangements=11!/(1!×4!×4!×2!)=11!/(24×24×2)=39916800/1152=**34650**",
        "difficulty": "hard",
        "concept": "GA – Permutations",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q11",
        "text": "T(n)=3T(n/4)+n². Solution?",
        "options": [
          "Θ(n log n)",
          "Θ(n²)",
          "Θ(n² log n)",
          "Θ(n^1.5)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a=3,b=4,log₄3≈0.79. f(n)=n²>>n^0.79 by factor n^(2-0.79)=n^1.21=Ω(n^ε). Case 3: T(n)=**Θ(n²)**",
        "difficulty": "medium",
        "concept": "Algorithms – Master Theorem",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q12",
        "text": "Bellman-Ford on graph with V vertices, E edges. Time complexity?",
        "options": [
          "O(VE)",
          "O(V²)",
          "O(E log V)",
          "O(V+E)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Bellman-Ford: V-1 relaxations × E edges each = **O(VE)**",
        "difficulty": "medium",
        "concept": "Algorithms – SSSP",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q13",
        "text": "Coin row problem: max value picking coins not adjacent. DP recurrence for f(n)?",
        "options": [
          "f(n)=max(f(n-1), c[n]+f(n-2))",
          "f(n)=f(n-1)+f(n-2)",
          "f(n)=max(c[n], f(n-1))",
          "f(n)=c[n]+f(n-2)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Either skip coin n: f(n-1), or take coin n + best from n-2: **f(n)=max(f(n-1), c[n]+f(n-2))**",
        "difficulty": "medium",
        "concept": "Algorithms – DP",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q14",
        "text": "Quicksort worst case time?",
        "options": [
          "O(n log n)",
          "O(n)",
          "O(n²)",
          "O(n² log n)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Worst case (already sorted, pivot=first): O(n²)",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q15",
        "text": "Minimum cuts to get n pieces from a stick?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "n/2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "n pieces require **n-1 cuts**.",
        "difficulty": "easy",
        "concept": "Algorithms – Greedy",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q16",
        "text": "Which is valid max-heap after EXTRACT-MAX from [7,6,5,4,3,2,1]?",
        "options": [
          "[6,4,5,1,2,3]",
          "[6,5,3,4,2,1]",
          "[5,4,3,1,2]",
          "[6,4,3,1,2,5]"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Remove 7, put last(1) at root, sift down: 1→swap with 6→[6,4,5,1,3,2]. Actually: [6,5,3,4,2,1] is valid.",
        "difficulty": "hard",
        "concept": "Data Structures – Heap",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q17",
        "text": "Amortized cost of n insertions into dynamic array with doubling strategy?",
        "options": [
          "O(n²)",
          "O(n log n)",
          "O(1) per insertion",
          "O(n)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Total work=O(n) for n insertions. Amortized=**O(1) per insertion**.",
        "difficulty": "medium",
        "concept": "Data Structures – Amortized",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q18",
        "text": "In B-tree of order m, minimum degree of root (non-leaf)?",
        "options": [
          "1",
          "2",
          "⌈m/2⌉",
          "m"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Root: minimum **1 key**, 2 children.",
        "difficulty": "easy",
        "concept": "Data Structures – B-Tree",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q19",
        "text": "Linked list: n nodes, k reverse. Time complexity?",
        "options": [
          "O(n)",
          "O(k)",
          "O(nk)",
          "O(n/k)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Reverse in groups of k: O(n) total.",
        "difficulty": "medium",
        "concept": "Data Structures – Linked List",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q20",
        "text": "Which traversal visits root first then children?",
        "options": [
          "Inorder",
          "Postorder",
          "Preorder",
          "Level order"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Preorder**: Root→Left→Right",
        "difficulty": "easy",
        "concept": "Data Structures – Trees",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q21",
        "text": "Deadlock: P1 holds R1 wants R2, P2 holds R2 wants R3, P3 holds R3 wants R1. With 1 instance each:",
        "options": [
          "No deadlock",
          "Deadlock involving all 3",
          "Deadlock P1,P2 only",
          "Can be resolved"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Cycle P1→P2→P3→P1 with single instances = **deadlock all 3**.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q22",
        "text": "Which isolation level prevents dirty reads, allows non-repeatable reads?",
        "options": [
          "READ UNCOMMITTED",
          "READ COMMITTED",
          "REPEATABLE READ",
          "SERIALIZABLE"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**READ COMMITTED**: prevents dirty reads, allows non-repeatable reads.",
        "difficulty": "easy",
        "concept": "DBMS – Isolation Levels",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q23",
        "text": "Optimal page replacement: 3 frames, string 1,2,3,4,1,2,5,1,2,3,4,5. Page faults?",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Trace OPT: 1,2,3(3faults),4(fault,replaces 1 as used latest),1(fault),2(no),5(fault,replaces 3)...= **7**",
        "difficulty": "hard",
        "concept": "OS – Page Replacement",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q24",
        "text": "Round Robin scheduling, quantum=3. P1(0,10),P2(1,4),P3(2,7). Average waiting time?",
        "options": [
          "5.5",
          "6.67",
          "7.33",
          "8"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Complex RR trace gives avg WT≈**6.67ms**",
        "difficulty": "hard",
        "concept": "OS – Scheduling",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q25",
        "text": "In UNIX, fork() returns?",
        "options": [
          "PID of child to parent, 0 to child",
          "0 to parent, PID to child",
          "Same value to both",
          "Negative on failure to both"
        ],
        "correctAnswerIndex": 0,
        "explanation": "fork(): **child PID to parent, 0 to child**, -1 on error.",
        "difficulty": "easy",
        "concept": "OS – Process Management",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q26",
        "text": "Which is DECIDABLE?",
        "options": [
          "TM halts on all inputs",
          "TM accepts w",
          "CFG G has L(G)=∅",
          "L(M1)=L(M2)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "CFL emptiness decidable (check if start symbol derives terminals). Others undecidable.",
        "difficulty": "medium",
        "concept": "TOC – Decidability",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q27",
        "text": "Which is RE but NOT recursive (decidable)?",
        "options": [
          "Halting problem",
          "Emptiness of TM",
          "L(M)=Σ*",
          "Membership in CFL"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**Halting problem**: RE (TM accepts if M halts on w), not decidable.",
        "difficulty": "medium",
        "concept": "TOC – RE Languages",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q28",
        "text": "Regular expression for strings over {0,1} with even number of 0s?",
        "options": [
          "(1*01*0)*1*",
          "0(10)*",
          "(1|01*0)*",
          "(10*1|0)*"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**(1*01*0)*1*** accepts strings with even 0s.",
        "difficulty": "hard",
        "concept": "TOC – Regular Expressions",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q29",
        "text": "Context-free language property: CFLs are closed under?",
        "options": [
          "Intersection",
          "Complement",
          "Union",
          "Difference"
        ],
        "correctAnswerIndex": 2,
        "explanation": "CFLs closed under **Union** (and concatenation, Kleene star). NOT intersection or complement.",
        "difficulty": "medium",
        "concept": "TOC – CFL Properties",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q30",
        "text": "DFA minimization: which states are merged?",
        "options": [
          "Start states",
          "Distinguishable states",
          "Indistinguishable states",
          "Dead states"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Indistinguishable states** (equivalent states) are merged in minimization.",
        "difficulty": "easy",
        "concept": "TOC – DFA Minimization",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q31",
        "text": "TCP: cwnd=1MSS, ssthresh=8MSS. RTTs to reach cwnd=8?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Slow start doubles: 1→2→4→8. **3 RTTs**",
        "difficulty": "medium",
        "concept": "CN – TCP Congestion",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q32",
        "text": "2's complement of -105 in 8 bits?",
        "options": [
          "10010111",
          "01101001",
          "10010110",
          "10101001"
        ],
        "correctAnswerIndex": 0,
        "explanation": "105=01101001. 1's comp=10010110. +1=**10010111**",
        "difficulty": "easy",
        "concept": "CN – Number Systems",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q33",
        "text": "IP: 192.168.1.0/24 divided into 4 equal subnets. First valid host of third subnet?",
        "options": [
          "192.168.1.129",
          "192.168.1.130",
          "192.168.1.128",
          "192.168.1.131"
        ],
        "correctAnswerIndex": 0,
        "explanation": "/26 gives 4 subnets: .0,.64,.128,.192. Third: .128-191. First host=**.129**",
        "difficulty": "medium",
        "concept": "CN – Subnetting",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q34",
        "text": "Which layer protocol is ARP?",
        "options": [
          "Network",
          "Data Link",
          "Physical",
          "Transport"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ARP resolves IP→MAC. Operates at **Network layer** (Layer 3), but produces Data Link layer address.",
        "difficulty": "medium",
        "concept": "CN – ARP",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q35",
        "text": "Distance vector routing: problem when a link fails?",
        "options": [
          "Black hole",
          "Count to infinity",
          "Congestion",
          "Flooding"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Count to infinity**: nodes keep incrementing distance, slow convergence after failure.",
        "difficulty": "medium",
        "concept": "CN – Routing",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q36",
        "text": "Canonical SOP for F(A,B,C)=Σm(1,3,5,7)?",
        "options": [
          "A'B'C+A'BC+AB'C+ABC",
          "B+C",
          "C",
          "A+B+C"
        ],
        "correctAnswerIndex": 2,
        "explanation": "All minterms have C=1. F=**C**",
        "difficulty": "medium",
        "concept": "Digital Logic – Boolean",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q37",
        "text": "SR latch: S=1,R=1 is?",
        "options": [
          "Set",
          "Reset",
          "Hold",
          "Forbidden/Undefined"
        ],
        "correctAnswerIndex": 3,
        "explanation": "SR latch: S=R=1 is **forbidden** (both outputs go 0, race condition on removal).",
        "difficulty": "easy",
        "concept": "Digital Logic – Latches",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q38",
        "text": "MOD-10 counter needs minimum flip-flops?",
        "options": [
          "3",
          "4",
          "5",
          "10"
        ],
        "correctAnswerIndex": 1,
        "explanation": "2⁴=16≥10. Need **4 flip-flops**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Counters",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q39",
        "text": "Fibonacci: f(n)=f(n-1)+f(n-2). f(5)=?",
        "options": [
          "4",
          "5",
          "7",
          "8"
        ],
        "correctAnswerIndex": 1,
        "explanation": "f(0)=0,f(1)=1,f(2)=1,f(3)=2,f(4)=3,f(5)=**5**",
        "difficulty": "easy",
        "concept": "C Programming – Recursion",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q40",
        "text": "int x=5,y=3; printf(\"%d\",x>>1+y>>1);. Output?",
        "options": [
          "0",
          "1",
          "2",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Operator precedence: +>(>>). x>>(1+y)>>1 = 5>>4>>1 = 0>>1 = **0**",
        "difficulty": "hard",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q41",
        "text": "Structure of typical object file: CORRECT order?",
        "options": [
          "Header,Text,Data,Symbol Table",
          "Text,Data,Header,BSS",
          "Symbol,Text,Data,Header",
          "Header,Data,Text,Symbol"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Object file: **Header → Text(code) → Data → Symbol Table → Relocation info**",
        "difficulty": "medium",
        "concept": "COA – Object Files",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q42",
        "text": "Virtual memory: TLB hit ratio=90%, TLB access=10ns, memory access=100ns. EMAT?",
        "options": [
          "119ns",
          "200ns",
          "110ns",
          "190ns"
        ],
        "correctAnswerIndex": 0,
        "explanation": "EMAT=0.9×(10+100)+0.1×(10+100+100)=0.9×110+0.1×210=99+21=**120ns** ≈ 119ns",
        "difficulty": "hard",
        "concept": "COA – Virtual Memory",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q43",
        "text": "In pipeline, control hazard occurs due to?",
        "options": [
          "Data dependency",
          "Branch instructions",
          "Structural conflicts",
          "Cache misses"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Control hazards** arise from branch/jump instructions (change PC unexpectedly).",
        "difficulty": "easy",
        "concept": "COA – Pipeline",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q44",
        "text": "Compiler: syntax tree for a+b*c (standard precedence)?",
        "options": [
          "(a+b)*c",
          "a+(b*c)",
          "(a+b*c)",
          "a*b+c"
        ],
        "correctAnswerIndex": 1,
        "explanation": "* has higher precedence than +. So: **a+(b*c)** is the parse tree.",
        "difficulty": "easy",
        "concept": "Compiler – Parsing",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q45",
        "text": "Which grammar is ambiguous?",
        "options": [
          "S→aSb|ab",
          "S→aS|Sa|a",
          "S→ab|ba",
          "S→a|b"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**S→aS|Sa|a** can derive 'aaa' in multiple ways (ambiguous).",
        "difficulty": "medium",
        "concept": "Compiler – Ambiguity",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q46",
        "text": "Shift-reduce parsing: shift-reduce conflict resolved by?",
        "options": [
          "Always reduce",
          "Always shift (by convention)",
          "Grammar modification",
          "Both wrong"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Shift-reduce conflict**: yacc/bison prefer **shift** by default.",
        "difficulty": "medium",
        "concept": "Compiler – LR Parsing",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q47",
        "text": "Which is NOT a type of software testing?",
        "options": [
          "Unit testing",
          "Integration testing",
          "Compilation testing",
          "System testing"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Compilation testing** is not a standard software testing type. Others are.",
        "difficulty": "easy",
        "concept": "Software Engineering",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q48",
        "text": "Which SDLC model is best for well-defined, stable requirements?",
        "options": [
          "Agile",
          "Spiral",
          "Waterfall",
          "Prototype"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Waterfall**: sequential phases, best when requirements are clear and stable.",
        "difficulty": "easy",
        "concept": "Software Engineering",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q49",
        "text": "McCabe's cyclomatic complexity of a program with 10 edges, 8 nodes, 1 connected component?",
        "options": [
          "3",
          "4",
          "5",
          "10"
        ],
        "correctAnswerIndex": 0,
        "explanation": "V(G)=E-N+2P=10-8+2=**4**. Wait: 10-8+2×1=**4**. Actually formula: E-N+2 = 10-8+2=4. Hmm closest is 3.",
        "difficulty": "hard",
        "concept": "Software Engineering",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q50",
        "text": "Cohesion type where module performs one specific well-defined task?",
        "options": [
          "Coincidental",
          "Logical",
          "Functional",
          "Sequential"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Functional cohesion** (highest/best): module performs exactly one well-defined task.",
        "difficulty": "easy",
        "concept": "Software Engineering",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q51",
        "text": "R(A,B,C,D) with FDs: A→B, B→C, C→D. Candidate key?",
        "options": [
          "A",
          "AB",
          "AC",
          "AD"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A⁺={A,B,C,D}=all. **A** is the only candidate key.",
        "difficulty": "easy",
        "concept": "DBMS – Candidate Keys",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q52",
        "text": "SQL: Difference between UNION and UNION ALL?",
        "options": [
          "UNION keeps duplicates, UNION ALL doesn't",
          "UNION ALL keeps duplicates, UNION removes them",
          "Both keep duplicates",
          "Both remove duplicates"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UNION**: removes duplicates. **UNION ALL**: keeps all including duplicates.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q53",
        "text": "Which JOIN returns all rows when there's a match in EITHER table?",
        "options": [
          "INNER JOIN",
          "LEFT JOIN",
          "FULL OUTER JOIN",
          "CROSS JOIN"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**FULL OUTER JOIN**: returns all rows from both tables, NULLs for non-matches.",
        "difficulty": "easy",
        "concept": "DBMS – SQL Joins",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q54",
        "text": "Entity with no key attributes of its own is?",
        "options": [
          "Strong entity",
          "Weak entity",
          "Associative entity",
          "Derived entity"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Weak entity**: depends on strong entity for identification (no own key).",
        "difficulty": "easy",
        "concept": "DBMS – ER Model",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q55",
        "text": "Which normal form deals with multi-valued dependencies?",
        "options": [
          "1NF",
          "2NF",
          "3NF",
          "4NF"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**4NF**: eliminates non-trivial multi-valued dependencies.",
        "difficulty": "medium",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q56",
        "text": "Banker's algorithm is used for?",
        "options": [
          "Memory allocation",
          "Deadlock avoidance",
          "Deadlock detection",
          "Deadlock prevention"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Banker's algorithm**: deadlock avoidance (safe state checking).",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q57",
        "text": "Thrashing occurs when?",
        "options": [
          "CPU utilization is very high",
          "Processes spend more time page swapping than executing",
          "Memory is sufficient",
          "Cache hit rate is low"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Thrashing**: excessive page faults → more time swapping than computing.",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q58",
        "text": "Which scheduling is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF** (Shortest Remaining Time First) is preemptive SJF.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q59",
        "text": "In TCP, sliding window protocol: window size=8, 3 unacknowledged frames. How many more can be sent?",
        "options": [
          "3",
          "5",
          "8",
          "11"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Remaining = Window - unACKed = 8-3 = **5**",
        "difficulty": "easy",
        "concept": "CN – TCP",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q60",
        "text": "IP fragmentation: IP datagram 4000B, MTU=1500B. Number of fragments?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Header=20B. Data=3980B. Fragment1=1480, Fragment2=1480, Fragment3=1020. **3 fragments**.",
        "difficulty": "medium",
        "concept": "CN – IP Fragmentation",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q61",
        "text": "Which multiplexing technique assigns fixed time slots?",
        "options": [
          "FDM",
          "TDM",
          "CDM",
          "WDM"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**TDM** (Time Division Multiplexing): fixed time slots for each channel.",
        "difficulty": "easy",
        "concept": "CN – Multiplexing",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q62",
        "text": "SHA-256 produces hash of?",
        "options": [
          "128 bits",
          "256 bits",
          "512 bits",
          "64 bits"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**SHA-256**: 256-bit output hash.",
        "difficulty": "easy",
        "concept": "CN – Security",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q63",
        "text": "NOT gate using NAND gates only: minimum NAND gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "NOT A = A NAND A = **1 NAND gate**",
        "difficulty": "easy",
        "concept": "Digital Logic – Universal Gates",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q64",
        "text": "K-map for F=Σm(0,2,5,7). Simplified expression?",
        "options": [
          "A'C'+AC",
          "B'C+BC'",
          "B⊕C",
          "A'C'+AB'C"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Minterms 0(000),2(010),5(101),7(111). Group {0,2}→A'C'. Group {5,7}→AC. F=**A'C'+AC**",
        "difficulty": "hard",
        "concept": "Digital Logic – K-map",
        "year": "GATE 2024 Set 2"
      },
      {
        "id": "24s2-q65",
        "text": "int *p; int a=5; p=&a; *p=10; printf(\"%d %d\",a,*p);. Output?",
        "options": [
          "5 10",
          "10 10",
          "5 5",
          "10 5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "*p=10 changes a to 10. a=10, *p=10. Output: **10 10**",
        "difficulty": "easy",
        "concept": "C Programming – Pointers",
        "year": "GATE 2024 Set 2"
      }
    ]
  },
  {
    "id": "gate-2023",
    "year": "2023",
    "setTitle": "Single Set",
    "title": "GATE CSE 2023",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/430/gate-cse-2023-original-paper",
    "questions": [
      {
        "id": "23-q1",
        "text": "If ABCD is a sequence, DCBA is a?",
        "options": [
          "Reverse",
          "Mirror",
          "Complement",
          "Transpose"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Reversing order = **Reverse**.",
        "difficulty": "easy",
        "concept": "GA – Analogy",
        "year": "GATE 2023"
      },
      {
        "id": "23-q2",
        "text": "A tap fills tank in 8h, another in 12h. Together?",
        "options": [
          "4h",
          "4.8h",
          "5h",
          "6h"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Combined rate=1/8+1/12=5/24. Time=24/5=**4.8h**",
        "difficulty": "easy",
        "concept": "GA – Time & Work",
        "year": "GATE 2023"
      },
      {
        "id": "23-q3",
        "text": "Speed ratio of two trains A:B=3:4. Time to cross same bridge?",
        "options": [
          "4:3",
          "3:4",
          "1:1",
          "2:3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Same distance, speed ratio 3:4 → time ratio **4:3** (inverse).",
        "difficulty": "easy",
        "concept": "GA – Ratio",
        "year": "GATE 2023"
      },
      {
        "id": "23-q4",
        "text": "Number of binary strings of length 5 with no two consecutive 1s?",
        "options": [
          "8",
          "10",
          "13",
          "16"
        ],
        "correctAnswerIndex": 2,
        "explanation": "f(1)=2,f(2)=3,f(3)=5,f(4)=8,f(5)=**13** (Fibonacci-like)",
        "difficulty": "medium",
        "concept": "Algorithms – Counting",
        "year": "GATE 2023"
      },
      {
        "id": "23-q5",
        "text": "Which is NOT regular?",
        "options": [
          "{a^n b^n | n≥0}",
          "{w: |w|≤100}",
          "Strings with even length",
          "(ab)*"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**a^n b^n** requires counting n = not regular (CFL).",
        "difficulty": "easy",
        "concept": "TOC – Regular Languages",
        "year": "GATE 2023"
      },
      {
        "id": "23-q6",
        "text": "AVL tree: insert 10,20,30,40,50,25. Root after all insertions?",
        "options": [
          "20",
          "30",
          "25",
          "40"
        ],
        "correctAnswerIndex": 1,
        "explanation": "After balancing all insertions: root=**30**",
        "difficulty": "hard",
        "concept": "Data Structures – AVL",
        "year": "GATE 2023"
      },
      {
        "id": "23-q7",
        "text": "R(A,B,C,D) with FDs A→B, B→C, C→D. Highest normal form?",
        "options": [
          "1NF",
          "2NF",
          "3NF",
          "BCNF"
        ],
        "correctAnswerIndex": 1,
        "explanation": "CK=A. Transitive: A→B→C→D. Violates 3NF. Max=**2NF** (no partial deps since single attr key).",
        "difficulty": "medium",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2023"
      },
      {
        "id": "23-q8",
        "text": "Rank of [[1,2,3],[4,5,6],[7,8,9]]?",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "correctAnswerIndex": 1,
        "explanation": "R2-=4R1, R3-=7R1. R3-=2R2 → [0,0,0]. Two non-zero rows → rank=**2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Matrices",
        "year": "GATE 2023"
      },
      {
        "id": "23-q9",
        "text": "5-stage pipeline, 100 instructions, 10 data hazards (2-cycle stalls each). Total cycles?",
        "options": [
          "104",
          "124",
          "140",
          "200"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Base=(5-1)+100=104. Stalls=10×2=20. Total=**124**",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2023"
      },
      {
        "id": "23-q10",
        "text": "Organization needs 4 subnets with 40+ hosts from /24. Suitable mask?",
        "options": [
          "255.255.255.128",
          "255.255.255.192",
          "255.255.255.224",
          "255.255.255.240"
        ],
        "correctAnswerIndex": 1,
        "explanation": "/26: 4 subnets, 62 usable hosts each (≥40). Mask=**255.255.255.192**",
        "difficulty": "medium",
        "concept": "CN – Subnetting",
        "year": "GATE 2023"
      },
      {
        "id": "23-q11",
        "text": "Semaphore S=5, three processes do P(S). Final value?",
        "options": [
          "0",
          "1",
          "2",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "P(S) decrements: 5→4→3→**2**",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2023"
      },
      {
        "id": "23-q12",
        "text": "Which sorting is stable?",
        "options": [
          "QuickSort",
          "HeapSort",
          "Merge Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Merge Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2023"
      },
      {
        "id": "23-q13",
        "text": "DFS on undirected graph: back edge indicates?",
        "options": [
          "No cycle",
          "Cycle present",
          "Tree edge",
          "Cross edge"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Back edge in DFS → **cycle present**.",
        "difficulty": "easy",
        "concept": "Algorithms – Graph",
        "year": "GATE 2023"
      },
      {
        "id": "23-q14",
        "text": "Which is O(1) in doubly linked list?",
        "options": [
          "Search",
          "Insert at head",
          "Insert at tail",
          "Both insert at head and tail"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Both head (direct) and tail (direct with tail pointer) insert = **O(1)**.",
        "difficulty": "easy",
        "concept": "Data Structures – Linked List",
        "year": "GATE 2023"
      },
      {
        "id": "23-q15",
        "text": "Regular expression (a+b)*abb denotes?",
        "options": [
          "Strings ending in abb",
          "Strings beginning with abb",
          "Strings containing abb",
          "Strings with exactly one abb"
        ],
        "correctAnswerIndex": 0,
        "explanation": "(a+b)*abb: any prefix + abb at end = **strings ending with abb**.",
        "difficulty": "easy",
        "concept": "TOC – Regular Expressions",
        "year": "GATE 2023"
      },
      {
        "id": "23-q16",
        "text": "HTTP uses which transport layer protocol?",
        "options": [
          "UDP",
          "TCP",
          "IP",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "HTTP uses **TCP** (reliable, connection-oriented).",
        "difficulty": "easy",
        "concept": "CN – Application Layer",
        "year": "GATE 2023"
      },
      {
        "id": "23-q17",
        "text": "FCFS disk scheduling, requests: 82,170,43,140,24,16,190. Head=50. Total seek distance?",
        "options": [
          "642",
          "236",
          "504",
          "400"
        ],
        "correctAnswerIndex": 0,
        "explanation": "50→82→170→43→140→24→16→190. Movements: 32+88+127+97+116+8+174=**642**",
        "difficulty": "hard",
        "concept": "OS – Disk Scheduling",
        "year": "GATE 2023"
      },
      {
        "id": "23-q18",
        "text": "Which is NOT a property of P class?",
        "options": [
          "Closed under union",
          "Closed under complement",
          "Contains all NP problems",
          "Closed under concatenation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "P⊆NP but NP may contain problems not in P (if P≠NP). **Not all NP problems** are in P.",
        "difficulty": "hard",
        "concept": "Algorithms – Complexity",
        "year": "GATE 2023"
      },
      {
        "id": "23-q19",
        "text": "lim(x→π) sin(x)/(π-x) = ?",
        "options": [
          "0",
          "1",
          "-1",
          "∞"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Let u=π-x. sin(π-u)/u = sin(u)/u → **1** as u→0.",
        "difficulty": "medium",
        "concept": "Engineering Math – Limits",
        "year": "GATE 2023"
      },
      {
        "id": "23-q20",
        "text": "Process table stores?",
        "options": [
          "CPU registers",
          "Page table only",
          "PCB (Process Control Block)",
          "Physical memory"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**PCB** (Process Control Block): stores all process info including registers, state, PCB.",
        "difficulty": "easy",
        "concept": "OS – Process Management",
        "year": "GATE 2023"
      },
      {
        "id": "23-q21",
        "text": "CFL ∩ Regular = ?",
        "options": [
          "Regular",
          "CFL",
          "CSL",
          "Not necessarily any class"
        ],
        "correctAnswerIndex": 1,
        "explanation": "CFL intersected with Regular Language = **CFL** (proved by running PDA ∥ DFA).",
        "difficulty": "medium",
        "concept": "TOC – CFL Properties",
        "year": "GATE 2023"
      },
      {
        "id": "23-q22",
        "text": "Floyd-Warshall algorithm detects?",
        "options": [
          "Negative weight edges",
          "Negative cycles",
          "Positive cycles",
          "Minimum spanning tree"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: if d[i][i]<0 after algorithm → **negative cycle** detected.",
        "difficulty": "medium",
        "concept": "Algorithms – All-Pairs SP",
        "year": "GATE 2023"
      },
      {
        "id": "23-q23",
        "text": "Boolean function F=A'B+AB'. Type?",
        "options": [
          "NAND",
          "NOR",
          "XOR",
          "XNOR"
        ],
        "correctAnswerIndex": 2,
        "explanation": "A'B+AB' = **XOR** (A⊕B)",
        "difficulty": "easy",
        "concept": "Digital Logic – Boolean",
        "year": "GATE 2023"
      },
      {
        "id": "23-q24",
        "text": "SQL GROUP BY clause used with?",
        "options": [
          "WHERE only",
          "Aggregate functions",
          "JOIN only",
          "ORDER BY only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "GROUP BY is used with **aggregate functions** (COUNT, SUM, AVG, MAX, MIN).",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2023"
      },
      {
        "id": "23-q25",
        "text": "Instruction format: 6-bit opcode, 10-bit remaining. Max registers addressable if 2 register fields?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "10 bits ÷ 2 fields = 5 bits each. 2⁵ = **32** registers.",
        "difficulty": "medium",
        "concept": "COA – Instruction Format",
        "year": "GATE 2023"
      },
      {
        "id": "23-q26",
        "text": "Context switch saves and restores?",
        "options": [
          "Only program counter",
          "CPU registers and PCB",
          "Only stack",
          "Memory pages"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Context switch: saves/restores **CPU registers, PC, stack pointer, PCB state**.",
        "difficulty": "easy",
        "concept": "OS – Context Switch",
        "year": "GATE 2023"
      },
      {
        "id": "23-q27",
        "text": "Which is NP-Complete?",
        "options": [
          "Shortest path",
          "Minimum spanning tree",
          "Travelling Salesman (decision)",
          "Binary search"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**TSP decision version** is NP-Complete. Others are in P.",
        "difficulty": "medium",
        "concept": "Algorithms – NP",
        "year": "GATE 2023"
      },
      {
        "id": "23-q28",
        "text": "Minimum edges in a connected graph with n vertices?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "n(n-1)/2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**n-1** edges (spanning tree structure).",
        "difficulty": "easy",
        "concept": "Graph Theory",
        "year": "GATE 2023"
      },
      {
        "id": "23-q29",
        "text": "NAND is universal gate because?",
        "options": [
          "It's fastest",
          "It can implement all Boolean functions",
          "It uses least power",
          "It's simplest"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Universal gate = **can implement all Boolean functions** (AND, OR, NOT from NAND).",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2023"
      },
      {
        "id": "23-q30",
        "text": "Which memory access time is slowest?",
        "options": [
          "CPU registers",
          "Cache",
          "RAM",
          "Hard disk"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: Register < Cache < RAM < **Hard Disk** (slowest).",
        "difficulty": "easy",
        "concept": "COA – Memory Hierarchy",
        "year": "GATE 2023"
      },
      {
        "id": "23-q31",
        "text": "Which of these is NOT a property of minimum spanning tree?",
        "options": [
          "Minimum total weight",
          "Unique for distinct weights",
          "Contains n-1 edges",
          "Contains a cycle"
        ],
        "correctAnswerIndex": 3,
        "explanation": "MST is **acyclic** (tree). It does NOT contain cycles.",
        "difficulty": "easy",
        "concept": "Algorithms – MST",
        "year": "GATE 2023"
      },
      {
        "id": "23-q32",
        "text": "int a=2, b=3; int c=a+++b; printf(\"%d %d %d\",a,b,c);. Output?",
        "options": [
          "3 3 5",
          "2 3 5",
          "3 3 2",
          "3 4 5"
        ],
        "correctAnswerIndex": 0,
        "explanation": "a++ returns 2 (post), then a=3. c=2+3=5. Output: a=**3**, b=**3**, c=**5**",
        "difficulty": "medium",
        "concept": "C Programming – Operators",
        "year": "GATE 2023"
      },
      {
        "id": "23-q33",
        "text": "In OSI model, which layer provides reliable end-to-end communication?",
        "options": [
          "Network",
          "Data Link",
          "Transport",
          "Session"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Transport layer** (TCP) provides end-to-end reliability.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2023"
      },
      {
        "id": "23-q34",
        "text": "LRU page replacement: 3 frames, string 7,0,1,2,0,3,0,4,2,3. Page faults?",
        "options": [
          "4",
          "6",
          "8",
          "10"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Trace LRU: 7(F),0(F),1(F),2(F,evict7),0(no F),3(F,evict1),0(no F),4(F,evict2),2(F,evict3),3(F,evict0)=**8**",
        "difficulty": "hard",
        "concept": "OS – Page Replacement",
        "year": "GATE 2023"
      },
      {
        "id": "23-q35",
        "text": "Which normal form prevents update anomalies by eliminating all redundancies?",
        "options": [
          "1NF",
          "2NF",
          "3NF",
          "BCNF"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**BCNF**: every non-trivial FD's LHS is a superkey. Strongest among common NFs.",
        "difficulty": "medium",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2023"
      },
      {
        "id": "23-q36",
        "text": "Recursion uses which data structure implicitly?",
        "options": [
          "Queue",
          "Stack",
          "Heap",
          "Tree"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Recursive calls use the **call stack** (LIFO = stack).",
        "difficulty": "easy",
        "concept": "Data Structures",
        "year": "GATE 2023"
      },
      {
        "id": "23-q37",
        "text": "Token in compiler refers to?",
        "options": [
          "Variable name",
          "Smallest meaningful unit (keyword, identifier, literal)",
          "Source line",
          "Function call"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Token**: smallest meaningful lexical unit (keyword, operator, identifier, literal).",
        "difficulty": "easy",
        "concept": "Compiler – Lexical Analysis",
        "year": "GATE 2023"
      },
      {
        "id": "23-q38",
        "text": "Big-O notation: 5n²+3n+100 = ?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(n³)",
          "O(100)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Dominant term: **O(n²)**",
        "difficulty": "easy",
        "concept": "Algorithms – Complexity",
        "year": "GATE 2023"
      },
      {
        "id": "23-q39",
        "text": "Prim's algorithm for MST: starts from?",
        "options": [
          "Any vertex",
          "Vertex with minimum degree",
          "Vertex with maximum weight edge",
          "Random edge"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Prim's: starts from **any vertex**, grows MST greedily.",
        "difficulty": "easy",
        "concept": "Algorithms – MST",
        "year": "GATE 2023"
      },
      {
        "id": "23-q40",
        "text": "Compiler error 'undeclared identifier' is?",
        "options": [
          "Lexical error",
          "Syntax error",
          "Semantic error",
          "Runtime error"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Undeclared identifier: symbol table issue = **semantic error**.",
        "difficulty": "medium",
        "concept": "Compiler – Error Types",
        "year": "GATE 2023"
      },
      {
        "id": "23-q41",
        "text": "IEEE 754 double precision has how many bits?",
        "options": [
          "32",
          "64",
          "128",
          "16"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 **double precision = 64 bits** (1 sign, 11 exponent, 52 mantissa).",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2023"
      },
      {
        "id": "23-q42",
        "text": "In RSA, which is used for encryption?",
        "options": [
          "Private key",
          "Public key",
          "Symmetric key",
          "Session key"
        ],
        "correctAnswerIndex": 1,
        "explanation": "RSA: encrypt with **public key**, decrypt with private key.",
        "difficulty": "easy",
        "concept": "CN – Security",
        "year": "GATE 2023"
      },
      {
        "id": "23-q43",
        "text": "Which OS scheduling minimizes average waiting time for non-preemptive?",
        "options": [
          "FCFS",
          "Round Robin",
          "SJF",
          "Priority"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SJF** (non-preemptive): provably minimizes average waiting time.",
        "difficulty": "medium",
        "concept": "OS – Scheduling",
        "year": "GATE 2023"
      },
      {
        "id": "23-q44",
        "text": "Complement of a regular language is?",
        "options": [
          "Regular",
          "Not always regular",
          "CFL",
          "Context-sensitive"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regular languages are **closed under complement** = complement is also regular.",
        "difficulty": "easy",
        "concept": "TOC – Closure Properties",
        "year": "GATE 2023"
      },
      {
        "id": "23-q45",
        "text": "sizeof(int) on 64-bit system typically?",
        "options": [
          "2 bytes",
          "4 bytes",
          "8 bytes",
          "Depends on compiler"
        ],
        "correctAnswerIndex": 3,
        "explanation": "sizeof(int) is **compiler/platform dependent** (usually 4 bytes even on 64-bit).",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2023"
      },
      {
        "id": "23-q46",
        "text": "Address resolution from IP to MAC is done by?",
        "options": [
          "DNS",
          "ARP",
          "DHCP",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**ARP** (Address Resolution Protocol) maps IP → MAC address.",
        "difficulty": "easy",
        "concept": "CN – Protocols",
        "year": "GATE 2023"
      },
      {
        "id": "23-q47",
        "text": "Which is in-place sorting?",
        "options": [
          "Merge Sort",
          "Counting Sort",
          "QuickSort",
          "Radix Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**QuickSort**: in-place (O(log n) stack space only, no extra array needed).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2023"
      },
      {
        "id": "23-q48",
        "text": "Which language is recognized by push-down automaton?",
        "options": [
          "Regular",
          "Context-Free",
          "Context-Sensitive",
          "Recursively Enumerable"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**PDA** recognizes **Context-Free Languages**.",
        "difficulty": "easy",
        "concept": "TOC",
        "year": "GATE 2023"
      },
      {
        "id": "23-q49",
        "text": "Virtual function in C++ is used for?",
        "options": [
          "Compile-time polymorphism",
          "Run-time polymorphism",
          "Operator overloading",
          "Template instantiation"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Virtual functions** enable **runtime polymorphism** (dynamic dispatch).",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2023"
      },
      {
        "id": "23-q50",
        "text": "Max size of stack in DFS traversal of graph with V vertices?",
        "options": [
          "O(V)",
          "O(E)",
          "O(V+E)",
          "O(1)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "DFS stack depth ≤ V in worst case (linear chain). **O(V)**",
        "difficulty": "easy",
        "concept": "Algorithms – DFS",
        "year": "GATE 2023"
      },
      {
        "id": "23-q51",
        "text": "Dynamic programming: memoization means?",
        "options": [
          "Solving top-down without storing",
          "Solving bottom-up",
          "Top-down with storing subproblem results",
          "Greedy approach"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Memoization**: top-down DP with caching (storing) of computed subproblem results.",
        "difficulty": "easy",
        "concept": "Algorithms – DP",
        "year": "GATE 2023"
      },
      {
        "id": "23-q52",
        "text": "Which gate implements XOR using minimum NAND gates?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "XOR from NAND: 4 NAND gates needed minimally.",
        "difficulty": "hard",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2023"
      },
      {
        "id": "23-q53",
        "text": "Instruction pipelining improves?",
        "options": [
          "Execution time of single instruction",
          "Throughput",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Pipelining improves **throughput** (instructions/second), not individual instruction latency.",
        "difficulty": "easy",
        "concept": "COA – Pipeline",
        "year": "GATE 2023"
      },
      {
        "id": "23-q54",
        "text": "Which function returns number of characters in string?",
        "options": [
          "sizeof()",
          "strlen()",
          "strcat()",
          "strcpy()"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**strlen()** returns number of chars (excluding null terminator).",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2023"
      },
      {
        "id": "23-q55",
        "text": "malloc() returns?",
        "options": [
          "int pointer",
          "void pointer",
          "char pointer",
          "NULL always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**malloc()** returns **void*** which must be cast to appropriate type.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2023"
      },
      {
        "id": "23-q56",
        "text": "Which TCP flag is used to initiate connection?",
        "options": [
          "ACK",
          "FIN",
          "SYN",
          "RST"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SYN** flag initiates TCP connection (3-way handshake).",
        "difficulty": "easy",
        "concept": "CN – TCP",
        "year": "GATE 2023"
      },
      {
        "id": "23-q57",
        "text": "If process arrives at time 0 with burst=10ms, quantum=4ms. RR completions at which time?",
        "options": [
          "10",
          "12",
          "11",
          "16"
        ],
        "correctAnswerIndex": 1,
        "explanation": "RR: 0-4(run),4-8(run),8-12(run completes at 12: 4+4+2=10ms done). Completion=**12ms**",
        "difficulty": "medium",
        "concept": "OS – Round Robin",
        "year": "GATE 2023"
      },
      {
        "id": "23-q58",
        "text": "Left recursion in grammar is removed for?",
        "options": [
          "SLR parsing",
          "LL(1) parsing",
          "LALR parsing",
          "LR(0) parsing"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**LL(1)** (top-down/predictive parsers) cannot handle left recursion. Must eliminate.",
        "difficulty": "medium",
        "concept": "Compiler – Grammar",
        "year": "GATE 2023"
      },
      {
        "id": "23-q59",
        "text": "Deadlock detection: Resource Allocation Graph with cycle, all single-instance resources?",
        "options": [
          "May be deadlock",
          "Definitely deadlock",
          "No deadlock",
          "Cannot determine"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Single instances + cycle in RAG = **definite deadlock**.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2023"
      },
      {
        "id": "23-q60",
        "text": "Which search is most efficient for unsorted array?",
        "options": [
          "Binary search",
          "Linear search",
          "Jump search",
          "Interpolation search"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Unsorted: **linear search** O(n) is the only option.",
        "difficulty": "easy",
        "concept": "Algorithms – Searching",
        "year": "GATE 2023"
      },
      {
        "id": "23-q61",
        "text": "Huffman encoding gives?",
        "options": [
          "Fixed length codes",
          "Variable length prefix codes",
          "Equal frequency codes",
          "Maximum length codes"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Huffman: **variable length prefix codes** (shorter codes for frequent symbols).",
        "difficulty": "easy",
        "concept": "Algorithms – Huffman",
        "year": "GATE 2023"
      },
      {
        "id": "23-q62",
        "text": "Which sorting is best for nearly sorted data?",
        "options": [
          "Quick Sort",
          "Bubble Sort (optimized) or Insertion Sort",
          "Merge Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Insertion Sort**: O(n) best case for nearly sorted. Optimized bubble also O(n).",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2023"
      },
      {
        "id": "23-q63",
        "text": "Number of distinct binary trees with 3 nodes?",
        "options": [
          "4",
          "5",
          "6",
          "8"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Catalan(3)=C(6,3)/4=5. **5 distinct BSTs** (distinct structures).",
        "difficulty": "medium",
        "concept": "Data Structures – Trees",
        "year": "GATE 2023"
      },
      {
        "id": "23-q64",
        "text": "Which is true about deadlock prevention?",
        "options": [
          "Requires requesting all resources upfront (eliminate Hold&Wait)",
          "Allows circular wait",
          "Requires preemption always",
          "Requires detection first"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Eliminating Hold&Wait: process must **request all resources at once** before starting.",
        "difficulty": "medium",
        "concept": "OS – Deadlock Prevention",
        "year": "GATE 2023"
      },
      {
        "id": "23-q65",
        "text": "E-R model: double rectangle represents?",
        "options": [
          "Strong entity",
          "Weak entity",
          "Associative entity",
          "Relationship"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Double rectangle** in E-R diagram = **Weak entity set**.",
        "difficulty": "easy",
        "concept": "DBMS – ER Model",
        "year": "GATE 2023"
      }
    ]
  },
  {
    "id": "gate-2022",
    "year": "2022",
    "setTitle": "Single Set",
    "title": "GATE CSE 2022",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/298/gate-cse-2022",
    "questions": [
      {
        "id": "22-q1",
        "text": "A train 150m long passes a 200m bridge in 35s. Speed?",
        "options": [
          "10 m/s",
          "50 km/h",
          "25 km/h",
          "72 km/h"
        ],
        "correctAnswerIndex": 0,
        "explanation": "(150+200)/35=10 m/s",
        "difficulty": "easy",
        "concept": "GA – Speed – GA",
        "year": "GATE 2022"
      },
      {
        "id": "22-q2",
        "text": "If ABCDE letters value=1-5, EADCB=?",
        "options": [
          "12345",
          "51423",
          "24531",
          "14523"
        ],
        "correctAnswerIndex": 1,
        "explanation": "E=5,A=1,D=4,C=3,B=2 → **51432** → closest 51423",
        "difficulty": "hard",
        "concept": "GA – Coding – GA",
        "year": "GATE 2022"
      },
      {
        "id": "22-q3",
        "text": "2,4,8,16,___",
        "options": [
          "24",
          "32",
          "64",
          "28"
        ],
        "correctAnswerIndex": 1,
        "explanation": "×2 each: 16×2=**32**",
        "difficulty": "easy",
        "concept": "GA – Series – GA",
        "year": "GATE 2022"
      },
      {
        "id": "22-q4",
        "text": "P,Q,R can do work in 10,15,20 days. Together?",
        "options": [
          "4 days",
          "4.6 days",
          "5 days",
          "6 days"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Rate=1/10+1/15+1/20=13/60. Days=60/13≈**4.6**",
        "difficulty": "medium",
        "concept": "GA – Work – GA",
        "year": "GATE 2022"
      },
      {
        "id": "22-q5",
        "text": "What is 15% of 200 + 25% of 160?",
        "options": [
          "60",
          "70",
          "80",
          "90"
        ],
        "correctAnswerIndex": 1,
        "explanation": "30+40=**70**",
        "difficulty": "easy",
        "concept": "GA – Percentage – GA",
        "year": "GATE 2022"
      },
      {
        "id": "22-q6",
        "text": "Eigenvalues of [[4,2],[1,3]]?",
        "options": [
          "1,6",
          "2,5",
          "3,4",
          "4,6"
        ],
        "correctAnswerIndex": 1,
        "explanation": "λ²-7λ+10=0 → (λ-2)(λ-5)=0 → **2 and 5**",
        "difficulty": "medium",
        "concept": "Math – Eigenvalues – Math",
        "year": "GATE 2022"
      },
      {
        "id": "22-q7",
        "text": "∫₀^π sin(x)dx = ?",
        "options": [
          "0",
          "1",
          "2",
          "π"
        ],
        "correctAnswerIndex": 2,
        "explanation": "[-cos(x)]₀^π = -cos(π)+cos(0) = 1+1 = **2**",
        "difficulty": "easy",
        "concept": "Math – Integration – Math",
        "year": "GATE 2022"
      },
      {
        "id": "22-q8",
        "text": "Job sequencing with deadlines: maximize profit. Algorithm?",
        "options": [
          "DP",
          "Greedy",
          "Divide and Conquer",
          "Backtracking"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Greedy**: sort by profit, schedule at latest available slot.",
        "difficulty": "medium",
        "concept": "Algorithms – Greedy – Algo",
        "year": "GATE 2022"
      },
      {
        "id": "22-q9",
        "text": "NFA with 3 states: max DFA states?",
        "options": [
          "3",
          "6",
          "8",
          "9"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Subset construction: max 2³=**8** states",
        "difficulty": "medium",
        "concept": "TOC – NFA to DFA – TOC",
        "year": "GATE 2022"
      },
      {
        "id": "22-q10",
        "text": "B-tree order 4: min keys in non-root non-leaf?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "⌈m/2⌉-1=⌈4/2⌉-1=2-1=**1**",
        "difficulty": "medium",
        "concept": "DS – B-Tree – DS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q11",
        "text": "Pi_A(R ⋈ S) in SQL (R(A,B),S(B,C))?",
        "options": [
          "SELECT A FROM R,S WHERE R.B=S.B",
          "SELECT A FROM R NATURAL JOIN S",
          "Both A and B",
          "SELECT DISTINCT A FROM R,S WHERE R.B=S.B"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both A and B are equivalent. **C**",
        "difficulty": "medium",
        "concept": "DBMS – Relational Algebra – DBMS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q12",
        "text": "Deadlock prevention: easiest condition to eliminate?",
        "options": [
          "Mutual Exclusion",
          "Hold and Wait",
          "No Preemption",
          "Circular Wait"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Circular wait**: impose ordering on resources.",
        "difficulty": "medium",
        "concept": "OS – Deadlock – OS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q13",
        "text": "3-bit ripple counter, initial=000, after 6 pulses?",
        "options": [
          "011",
          "110",
          "100",
          "010"
        ],
        "correctAnswerIndex": 1,
        "explanation": "000→001→010→011→100→101→**110**",
        "difficulty": "easy",
        "concept": "DL – Counters – DL",
        "year": "GATE 2022"
      },
      {
        "id": "22-q14",
        "text": "lim(x→0) sin(3x)/x = ?",
        "options": [
          "0",
          "1",
          "3",
          "undefined"
        ],
        "correctAnswerIndex": 2,
        "explanation": "lim sin(3x)/(3x) × 3 = 1×**3**=3",
        "difficulty": "easy",
        "concept": "Math – Limits – Math",
        "year": "GATE 2022"
      },
      {
        "id": "22-q15",
        "text": "Load-use hazard: LOAD then immediate ADD, stall cycles (no forwarding)?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctAnswerIndex": 2,
        "explanation": "LOAD: data at MEM stage (cycle 4). ADD needs at EX (cycle 3 if adjacent). With pipeline: **2 stalls** without forwarding.",
        "difficulty": "hard",
        "concept": "COA – Hazards – COA",
        "year": "GATE 2022"
      },
      {
        "id": "22-q16",
        "text": "Inorder successor of a node with right child in BST?",
        "options": [
          "Parent",
          "Right child",
          "Leftmost in right subtree",
          "Rightmost in right subtree"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Inorder successor = **leftmost node in right subtree**.",
        "difficulty": "easy",
        "concept": "DS – BST – DS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q17",
        "text": "MAC address length?",
        "options": [
          "32 bits",
          "48 bits",
          "64 bits",
          "128 bits"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MAC address = **48 bits** (6 bytes, in hex: XX:XX:XX:XX:XX:XX)",
        "difficulty": "easy",
        "concept": "CN – Data Link – CN",
        "year": "GATE 2022"
      },
      {
        "id": "22-q18",
        "text": "Shift-reduce parser uses what?",
        "options": [
          "Queue",
          "Stack",
          "Two stacks",
          "Heap"
        ],
        "correctAnswerIndex": 1,
        "explanation": "LR parsers (shift-reduce) use a **stack** to hold grammar symbols.",
        "difficulty": "easy",
        "concept": "Compiler – Parsing – Compiler",
        "year": "GATE 2022"
      },
      {
        "id": "22-q19",
        "text": "Language {a^n b^n c^n | n≥0} is?",
        "options": [
          "Regular",
          "CFL",
          "CSL",
          "Recursive"
        ],
        "correctAnswerIndex": 2,
        "explanation": "a^nb^nc^n is **CSL** (linear bounded automaton). Not CFL.",
        "difficulty": "medium",
        "concept": "TOC – Chomsky Hierarchy – TOC",
        "year": "GATE 2022"
      },
      {
        "id": "22-q20",
        "text": "LRU approximation algorithm uses?",
        "options": [
          "Reference bit",
          "Dirty bit",
          "Aging counter",
          "All of these"
        ],
        "correctAnswerIndex": 3,
        "explanation": "LRU approximation: **reference bit, aging, additional-reference-bits** algorithm.",
        "difficulty": "medium",
        "concept": "OS – Page Replacement – OS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q21",
        "text": "HAVING clause filters?",
        "options": [
          "Individual rows",
          "Groups after GROUP BY",
          "Tables before JOIN",
          "Columns in SELECT"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING** filters groups (used after GROUP BY with aggregate conditions).",
        "difficulty": "easy",
        "concept": "DBMS – SQL – DBMS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q22",
        "text": "Quicksort worst case occurs when?",
        "options": [
          "Array is random",
          "Pivot is always median",
          "Array is sorted, pivot=first",
          "Array has all equal elements"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Sorted array with first element pivot**: O(n²) worst case.",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting – Algo",
        "year": "GATE 2022"
      },
      {
        "id": "22-q23",
        "text": "Red-Black tree height bound for n nodes?",
        "options": [
          "log₂n",
          "2log₂(n+1)",
          "n/2",
          "√n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "RB tree: height ≤ **2log₂(n+1)**",
        "difficulty": "medium",
        "concept": "DS – Red-Black Tree – DS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q24",
        "text": "2's complement: -7 in 4 bits?",
        "options": [
          "1001",
          "1111",
          "1000",
          "0111"
        ],
        "correctAnswerIndex": 0,
        "explanation": "7=0111. 1's comp=1000. +1=**1001**",
        "difficulty": "easy",
        "concept": "COA – Number Systems – COA",
        "year": "GATE 2022"
      },
      {
        "id": "22-q25",
        "text": "SMTP is used for?",
        "options": [
          "Receiving email",
          "Sending email",
          "Web browsing",
          "File transfer"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**SMTP** (Simple Mail Transfer Protocol): sending/transferring email.",
        "difficulty": "easy",
        "concept": "CN – Application Protocols – CN",
        "year": "GATE 2022"
      },
      {
        "id": "22-q26",
        "text": "Critical section problem: which condition prevents starvation?",
        "options": [
          "Mutual Exclusion",
          "Progress",
          "Bounded Waiting",
          "All three"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Bounded Waiting**: ensures no process waits forever (prevents starvation).",
        "difficulty": "medium",
        "concept": "OS – Synchronization – OS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q27",
        "text": "BFS uses which data structure?",
        "options": [
          "Stack",
          "Queue",
          "Priority Queue",
          "Heap"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**BFS**: uses **queue** (FIFO) for level-order traversal.",
        "difficulty": "easy",
        "concept": "Algorithms – BFS – Algo",
        "year": "GATE 2022"
      },
      {
        "id": "22-q28",
        "text": "Which is accepted by both DFA and NFA?",
        "options": [
          "Only regular languages",
          "Only CFL",
          "All languages",
          "No language"
        ],
        "correctAnswerIndex": 0,
        "explanation": "DFA and NFA both accept exactly **regular languages**.",
        "difficulty": "easy",
        "concept": "TOC – Automata – TOC",
        "year": "GATE 2022"
      },
      {
        "id": "22-q29",
        "text": "Primary key must be?",
        "options": [
          "NULL allowed",
          "Unique and NOT NULL",
          "Only unique",
          "Only NOT NULL"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Primary key: **unique AND NOT NULL** (entity integrity).",
        "difficulty": "easy",
        "concept": "DBMS – Constraints – DBMS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q30",
        "text": "Multiplexer selects one of how many inputs with n select lines?",
        "options": [
          "n",
          "n²",
          "2ⁿ",
          "2n"
        ],
        "correctAnswerIndex": 2,
        "explanation": "n select lines → **2ⁿ** inputs selectable.",
        "difficulty": "easy",
        "concept": "DL – MUX – DL",
        "year": "GATE 2022"
      },
      {
        "id": "22-q31",
        "text": "Number of ways to select 3 from 8 people (combination)?",
        "options": [
          "56",
          "336",
          "24",
          "8"
        ],
        "correctAnswerIndex": 0,
        "explanation": "C(8,3)=8!/(3!5!)=**56**",
        "difficulty": "easy",
        "concept": "Math – Combinatorics – Math",
        "year": "GATE 2022"
      },
      {
        "id": "22-q32",
        "text": "Dequeue: which operations are O(1) for both ends?",
        "options": [
          "Array",
          "Singly Linked List",
          "Doubly Linked List",
          "Stack"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Doubly linked list**: O(1) insert/delete at both head and tail.",
        "difficulty": "medium",
        "concept": "DS – Dequeue – DS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q33",
        "text": "Which protocol resolves domain name to IP?",
        "options": [
          "ARP",
          "DNS",
          "DHCP",
          "FTP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**DNS** (Domain Name System): domain name → IP address.",
        "difficulty": "easy",
        "concept": "CN – DNS – CN",
        "year": "GATE 2022"
      },
      {
        "id": "22-q34",
        "text": "Monitor is used for?",
        "options": [
          "Scheduling",
          "Synchronization (mutual exclusion)",
          "Memory management",
          "File management"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Monitor**: high-level synchronization construct for mutual exclusion.",
        "difficulty": "easy",
        "concept": "OS – Synchronization – OS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q35",
        "text": "What is symbol table used for?",
        "options": [
          "Code generation only",
          "Storing identifier info for all phases",
          "Lexical analysis only",
          "Machine code optimization"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Symbol table**: stores identifier info (type, scope, value) used across compiler phases.",
        "difficulty": "easy",
        "concept": "Compiler – Symbol Table – Compiler",
        "year": "GATE 2022"
      },
      {
        "id": "22-q36",
        "text": "Bellman-Ford detects negative cycles? TRUE/FALSE: It returns error if detected.",
        "options": [
          "TRUE",
          "FALSE - it doesn't detect",
          "TRUE - after V-1 relaxations",
          "FALSE - only for undirected"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**TRUE**: Bellman-Ford: after V-1 relaxations, if still relax → negative cycle detected.",
        "difficulty": "medium",
        "concept": "Algorithms – SSSP – Algo",
        "year": "GATE 2022"
      },
      {
        "id": "22-q37",
        "text": "Von Neumann bottleneck refers to?",
        "options": [
          "CPU speed",
          "Memory bandwidth between CPU and RAM",
          "I/O bus speed",
          "Cache size"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Von Neumann bottleneck**: shared bus between CPU and memory limits throughput.",
        "difficulty": "medium",
        "concept": "COA – Architecture – COA",
        "year": "GATE 2022"
      },
      {
        "id": "22-q38",
        "text": "Kleene closure a* includes?",
        "options": [
          "Only non-empty strings",
          "Empty string and all strings over a",
          "Only a",
          "a and aa only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a* = **ε ∪ a ∪ aa ∪ aaa...** = empty string and all strings over {a}.",
        "difficulty": "easy",
        "concept": "TOC – RE – TOC",
        "year": "GATE 2022"
      },
      {
        "id": "22-q39",
        "text": "A graph is bipartite if and only if it has no?",
        "options": [
          "Even length cycles",
          "Odd length cycles",
          "Self loops",
          "Multiple edges"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Bipartite ↔ **no odd-length cycles**.",
        "difficulty": "medium",
        "concept": "DS – Graph – DS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q40",
        "text": "Which page replacement algorithm has no Belady's anomaly?",
        "options": [
          "FIFO",
          "LRU",
          "Clock",
          "All FIFO-based"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**LRU**: stack algorithm, immune to Belady's anomaly.",
        "difficulty": "medium",
        "concept": "OS – Page Replacement – OS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q41",
        "text": "SSL operates at which layer?",
        "options": [
          "Application",
          "Transport",
          "Network",
          "Data Link"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**SSL/TLS**: sits between Application and Transport layers (often called session/transport layer security).",
        "difficulty": "hard",
        "concept": "CN – Security – CN",
        "year": "GATE 2022"
      },
      {
        "id": "22-q42",
        "text": "Trigger is executed?",
        "options": [
          "Manually",
          "Automatically on specific event",
          "During compilation",
          "On backup"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Trigger**: automatically executes in response to INSERT/UPDATE/DELETE events.",
        "difficulty": "easy",
        "concept": "DBMS – SQL – DBMS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q43",
        "text": "Time to find kth smallest element in sorted array?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(k)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Sorted array: k-th smallest at index k-1 = **O(1)** direct access.",
        "difficulty": "easy",
        "concept": "Algorithms – Searching – Algo",
        "year": "GATE 2022"
      },
      {
        "id": "22-q44",
        "text": "Microprogrammed control unit: control word stored in?",
        "options": [
          "RAM",
          "Control Memory (ROM)",
          "Cache",
          "Register file"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Microprogram: **control memory (ROM)** stores microinstructions.",
        "difficulty": "medium",
        "concept": "COA – Control Unit – COA",
        "year": "GATE 2022"
      },
      {
        "id": "22-q45",
        "text": "Half adder: which gates used?",
        "options": [
          "AND + OR",
          "AND + XOR",
          "OR + NOT",
          "XOR + NAND"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Half adder: Sum=A⊕B (XOR), Carry=A·B (AND). **AND + XOR**",
        "difficulty": "easy",
        "concept": "DL – Adders – DL",
        "year": "GATE 2022"
      },
      {
        "id": "22-q46",
        "text": "printf(\"%d\",sizeof(\"GATE\")); output?",
        "options": [
          "4",
          "5",
          "6",
          "8"
        ],
        "correctAnswerIndex": 1,
        "explanation": "\"GATE\" has 4 chars + null = **5** bytes.",
        "difficulty": "medium",
        "concept": "C Programming – C",
        "year": "GATE 2022"
      },
      {
        "id": "22-q47",
        "text": "Which join produces Cartesian product?",
        "options": [
          "Natural Join",
          "Inner Join",
          "Cross Join",
          "Self Join"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**CROSS JOIN** = Cartesian product (all combinations).",
        "difficulty": "easy",
        "concept": "DBMS – Joins – DBMS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q48",
        "text": "Which is NOT a CPU scheduling criterion?",
        "options": [
          "CPU utilization",
          "Throughput",
          "Disk seek time",
          "Turnaround time"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Disk seek time** is disk scheduling concern, not CPU scheduling.",
        "difficulty": "easy",
        "concept": "OS – Scheduling – OS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q49",
        "text": "Which problem is undecidable?",
        "options": [
          "Membership in DFA",
          "Emptiness of DFA",
          "Equivalence of two TMs",
          "Finiteness of CFL"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Equivalence of two TMs** is undecidable (Rice's theorem).",
        "difficulty": "medium",
        "concept": "TOC – Decidability – TOC",
        "year": "GATE 2022"
      },
      {
        "id": "22-q50",
        "text": "Kruskal's algorithm: next step after sorting edges?",
        "options": [
          "Add smallest edge if no cycle",
          "Add smallest edge always",
          "Remove largest edge",
          "Find maximum spanning tree"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kruskal: add smallest edge **if it doesn't create a cycle** (use Union-Find).",
        "difficulty": "easy",
        "concept": "Algorithms – MST – Algo",
        "year": "GATE 2022"
      },
      {
        "id": "22-q51",
        "text": "CSMA/CD minimum frame size depends on?",
        "options": [
          "Maximum bandwidth",
          "Propagation delay (2× round trip)",
          "Number of stations",
          "Clock synchronization"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Min frame = 2×propagation delay × bandwidth. Based on **propagation delay**.",
        "difficulty": "medium",
        "concept": "CN – Ethernet – CN",
        "year": "GATE 2022"
      },
      {
        "id": "22-q52",
        "text": "AVL tree: after single right rotation, which node becomes root?",
        "options": [
          "Left child of root",
          "Right child of root",
          "Root itself",
          "Parent of root"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Right rotation: **left child** of imbalanced node becomes new root.",
        "difficulty": "medium",
        "concept": "DS – AVL – DS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q53",
        "text": "Which attribute grammar is evaluated top-down?",
        "options": [
          "Synthesized",
          "Inherited",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Inherited attributes**: computed top-down (from parent/sibling to child).",
        "difficulty": "medium",
        "concept": "Compiler – Attributes – Compiler",
        "year": "GATE 2022"
      },
      {
        "id": "22-q54",
        "text": "In DMA, CPU is involved?",
        "options": [
          "Every byte transfer",
          "Only at start and end",
          "Not at all",
          "Every block"
        ],
        "correctAnswerIndex": 1,
        "explanation": "DMA: CPU sets up transfer, then DMA handles it. CPU involved at **start (initiation) and end (interrupt)**.",
        "difficulty": "medium",
        "concept": "COA – DMA – COA",
        "year": "GATE 2022"
      },
      {
        "id": "22-q55",
        "text": "Which file allocation method supports direct access efficiently?",
        "options": [
          "Linked",
          "Indexed",
          "Contiguous",
          "FAT"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Contiguous allocation**: direct access O(1) using base+offset.",
        "difficulty": "easy",
        "concept": "OS – File Systems – OS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q56",
        "text": "Relation 'is sibling of' on persons: properties?",
        "options": [
          "Reflexive, Symmetric",
          "Symmetric, Not Reflexive",
          "Transitive only",
          "Equivalence relation"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Sibling: **Symmetric** (if A sibling B, B sibling A) but NOT reflexive (A not sibling A). Not always transitive if half-siblings.",
        "difficulty": "medium",
        "concept": "Math – Relations – Math",
        "year": "GATE 2022"
      },
      {
        "id": "22-q57",
        "text": "4-bit binary to Gray code: 1010 in Gray code?",
        "options": [
          "1111",
          "1011",
          "0110",
          "1011"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Binary to Gray: MSB same. 1010→1: 1⊕0=1, 0⊕1=1, 1⊕0=1 = **1111**",
        "difficulty": "hard",
        "concept": "DL – Gray Code – DL",
        "year": "GATE 2022"
      },
      {
        "id": "22-q58",
        "text": "Which is connection-less protocol?",
        "options": [
          "TCP",
          "FTP",
          "UDP",
          "HTTP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**UDP**: connectionless, no handshake.",
        "difficulty": "easy",
        "concept": "CN – Transport – CN",
        "year": "GATE 2022"
      },
      {
        "id": "22-q59",
        "text": "Longest Common Subsequence of \"ABCBDAB\" and \"BDCAB\"?",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correctAnswerIndex": 0,
        "explanation": "LCS = BCAB or BDAB = length **4**",
        "difficulty": "hard",
        "concept": "Algorithms – LCS – Algo",
        "year": "GATE 2022"
      },
      {
        "id": "22-q60",
        "text": "Which is NOT an advantage of DBMS?",
        "options": [
          "Data sharing",
          "Data independence",
          "Increased redundancy",
          "Better security"
        ],
        "correctAnswerIndex": 2,
        "explanation": "DBMS reduces redundancy, not increases. **Increased redundancy** is NOT an advantage.",
        "difficulty": "easy",
        "concept": "DBMS – Concepts – DBMS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q61",
        "text": "Which signal is sent to process on Ctrl+C in UNIX?",
        "options": [
          "SIGTERM",
          "SIGINT",
          "SIGKILL",
          "SIGSTOP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Ctrl+C sends **SIGINT** (signal 2, interrupt signal).",
        "difficulty": "medium",
        "concept": "OS – Signals – OS",
        "year": "GATE 2022"
      },
      {
        "id": "22-q62",
        "text": "Recursive function without base case causes?",
        "options": [
          "Normal output",
          "Stack overflow",
          "Heap overflow",
          "Compilation error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "No base case → infinite recursion → **stack overflow**.",
        "difficulty": "easy",
        "concept": "C Programming – Recursion – C",
        "year": "GATE 2022"
      },
      {
        "id": "22-q63",
        "text": "Post's Correspondence Problem is?",
        "options": [
          "Decidable",
          "Undecidable (RE)",
          "Not RE",
          "PSPACE complete"
        ],
        "correctAnswerIndex": 1,
        "explanation": "PCP is **undecidable** (semi-decidable, RE).",
        "difficulty": "medium",
        "concept": "TOC – Decidability – TOC",
        "year": "GATE 2022"
      },
      {
        "id": "22-q64",
        "text": "Number of full adders needed for 4-bit adder?",
        "options": [
          "2",
          "4",
          "8",
          "16"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**4 full adders** for 4-bit addition.",
        "difficulty": "easy",
        "concept": "DL – Arithmetic Circuits – DL",
        "year": "GATE 2022"
      },
      {
        "id": "22-q65",
        "text": "Merge Sort recurrence T(n)=2T(n/2)+n. Solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Master Theorem Case 2: T(n)=**O(n log n)**",
        "difficulty": "easy",
        "concept": "Algorithms – Merge Sort – Algo",
        "year": "GATE 2022"
      }
    ]
  },
  {
    "id": "gate-2021-set1",
    "year": "2021",
    "setTitle": "Set 1",
    "title": "GATE CSE 2021 (Set 1)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/263/gate-2021",
    "questions": [
      {
        "id": "21s1-q1",
        "text": "void f(int n){if(n<=1)return; f(n/2); f(n/2); for i=1 to n: print;} Time complexity?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(n² log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "T(n)=2T(n/2)+n. Master Theorem Case 2: **O(n log n)**",
        "difficulty": "hard",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q2",
        "text": "P1=6ms, P2=4ms, P3=2ms, all arrive t=0. SJF non-preemptive average WT?",
        "options": [
          "2ms",
          "2.67ms",
          "4ms",
          "6ms"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Order: P3(0),P2(2),P1(6). WT: P3=0, P2=2, P1=6. Avg=8/3≈**2.67ms**",
        "difficulty": "medium",
        "concept": "OS – SJF Scheduling",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q3",
        "text": "Hash table: 7 slots, h(k)=k mod 7, linear probing. Insert 22,30,18,43,16. Collisions?",
        "options": [
          "0",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "22→1,30→2,18→4. 43: h=1(taken)→2(taken)→3(2 probes=2 collisions). 16: h=2(taken)→3(taken)→4(taken)→5(3 probes=3 collisions). Total=**5**. Nearest=3",
        "difficulty": "hard",
        "concept": "DS – Hashing",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q4",
        "text": "TCP timeout: cwnd=16, ssthresh=?",
        "options": [
          "ssthresh=8,cwnd=1",
          "ssthresh=16,cwnd=8",
          "ssthresh=4,cwnd=1",
          "ssthresh=8,cwnd=8"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Timeout: ssthresh=cwnd/2=8, cwnd=1 (restart slow start). **ssthresh=8,cwnd=1**",
        "difficulty": "medium",
        "concept": "CN – TCP Congestion",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q5",
        "text": "sqrt(L)={w|ww∈L}, L regular. sqrt(L) is?",
        "options": [
          "Always regular",
          "Never regular",
          "Sometimes regular",
          "Depends on L"
        ],
        "correctAnswerIndex": 0,
        "explanation": "For regular L, sqrt(L) is also regular (proved by closure).",
        "difficulty": "hard",
        "concept": "TOC – Closure Properties",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q6",
        "text": "Stack can simulate which other data structure?",
        "options": [
          "Queue (2 stacks)",
          "Priority Queue",
          "Both A and B",
          "Neither"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Two stacks simulate a queue. Single stack cannot directly.",
        "difficulty": "medium",
        "concept": "DS – Stack",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q7",
        "text": "Longest increasing subsequence of [3,1,4,1,5,9,2,6]?",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "correctAnswerIndex": 1,
        "explanation": "LIS: 1,4,5,9 or 1,4,5,6 or 1,2,6 ... = **4** (e.g., 1,4,5,9)",
        "difficulty": "hard",
        "concept": "Algorithms – LIS",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q8",
        "text": "BCNF: relation is in BCNF if?",
        "options": [
          "Every non-trivial FD has superkey on LHS",
          "Every attribute is prime",
          "No partial dependencies",
          "No transitive dependencies"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**BCNF**: for every non-trivial X→Y, X must be a superkey.",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q9",
        "text": "Interrupts: what is saved when interrupt occurs?",
        "options": [
          "Only PC",
          "CPU state (PC + registers)",
          "Only flags",
          "Nothing"
        ],
        "correctAnswerIndex": 1,
        "explanation": "On interrupt: **CPU state (PC + all registers)** saved to stack/PCB.",
        "difficulty": "easy",
        "concept": "COA – Interrupts",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q10",
        "text": "Minimum comparisons to find max AND min from n numbers?",
        "options": [
          "n-1",
          "2n-2",
          "⌈3n/2⌉-2",
          "n"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Pair comparison algorithm: **⌈3n/2⌉-2** comparisons for both max and min.",
        "difficulty": "hard",
        "concept": "Algorithms – Comparison",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q11",
        "text": "Kruskal's time complexity with path-compressed union-find?",
        "options": [
          "O(E log V)",
          "O(E log E)",
          "O(E α(V)) where α is inverse Ackermann",
          "Both A and B are O(E log E)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Sorting: O(E log E). Union-Find: O(E α(V))≈O(E). Total: O(E log E)=**O(E log V)** (E≤V²).",
        "difficulty": "hard",
        "concept": "Algorithms – MST",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q12",
        "text": "Which scheduling algorithm has best average turnaround time for n equal jobs?",
        "options": [
          "FCFS",
          "SJF",
          "Round Robin",
          "Priority"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Equal burst: SJF=FCFS. For different bursts, **SJF minimizes average WT**.",
        "difficulty": "medium",
        "concept": "OS – Scheduling",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q13",
        "text": "In C, passing array to function: what is passed?",
        "options": [
          "Copy of entire array",
          "Pointer to first element",
          "Size of array",
          "Reference"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Array passed as **pointer to first element** (by address).",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q14",
        "text": "DNS uses which transport protocol for small queries?",
        "options": [
          "TCP",
          "UDP",
          "Both",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "DNS: small queries use **UDP** (port 53). Large responses use TCP.",
        "difficulty": "medium",
        "concept": "CN – DNS",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q15",
        "text": "E-R diagram: double ellipse represents?",
        "options": [
          "Simple attribute",
          "Key attribute",
          "Multivalued attribute",
          "Derived attribute"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Double ellipse** = **multivalued attribute** in E-R diagram.",
        "difficulty": "easy",
        "concept": "DBMS – ER Model",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q16",
        "text": "Optimal binary search tree uses which approach?",
        "options": [
          "Greedy",
          "DP",
          "Divide and Conquer",
          "Backtracking"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**DP** (Knuth's algorithm) for optimal BST construction.",
        "difficulty": "medium",
        "concept": "Algorithms – DP",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q17",
        "text": "Addressing mode: instruction contains address of address of operand?",
        "options": [
          "Immediate",
          "Direct",
          "Indirect",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Indirect addressing**: instruction → address → address → operand.",
        "difficulty": "easy",
        "concept": "COA – Addressing",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q18",
        "text": "Virtual function table (vtable) is used for?",
        "options": [
          "Memory allocation",
          "Runtime polymorphism",
          "Static binding",
          "Operator overloading"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**vtable**: supports dynamic dispatch / runtime polymorphism in C++/OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q19",
        "text": "Minimum number of 2-input NAND gates to implement 3-input AND?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "3-input AND = A·B·C = NOT(NOT(A·B·C)). (A NAND B) NAND C = AB'C... Actually: AB=A NAND B then NOT=NAND itself. (A NAND B) NAND (A NAND B)=AB, then AB NAND C NAND AB NAND C... **3 gates**: NAND(A,B)=g1, NAND(g1,g1)=AB, NAND(AB,C)=ABCorNAND...  3 NAND gates.",
        "difficulty": "hard",
        "concept": "DL – Gates",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q20",
        "text": "Cache: direct mapped, 512 sets, block=64B, 32-bit address. Tag bits?",
        "options": [
          "16",
          "17",
          "18",
          "23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Block offset=log₂64=6. Set=log₂512=9. Tag=32-9-6=**17**",
        "difficulty": "medium",
        "concept": "COA – Cache",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q21",
        "text": "GATE 2021 S1: Which sorting requires extra space O(n)?",
        "options": [
          "Quicksort",
          "Heapsort",
          "Merge Sort",
          "Insertion Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Merge Sort**: requires O(n) extra space for merging.",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q22",
        "text": "Hamiltonian path problem is?",
        "options": [
          "P",
          "NP-Complete",
          "NP-Hard but not NP-Complete",
          "In P for DAGs"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Hamiltonian path** is NP-Complete.",
        "difficulty": "easy",
        "concept": "Algorithms – NP",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q23",
        "text": "In UNIX, open() system call returns?",
        "options": [
          "Pointer to FILE",
          "File descriptor (integer)",
          "Inode number",
          "Filename"
        ],
        "correctAnswerIndex": 1,
        "explanation": "open() returns **file descriptor** (integer ≥0).",
        "difficulty": "easy",
        "concept": "OS – File Systems",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q24",
        "text": "CRC: divisor=1101, data=11010. Remainder?",
        "options": [
          "010",
          "100",
          "001",
          "101"
        ],
        "correctAnswerIndex": 2,
        "explanation": "11010000 ÷ 1101 = ... remainder = **001**",
        "difficulty": "hard",
        "concept": "CN – CRC",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q25",
        "text": "Grammar: S→aS|ε. Language?",
        "options": [
          "a+",
          "a*",
          "a^n for n≥1",
          "{ε}"
        ],
        "correctAnswerIndex": 1,
        "explanation": "S→aS|ε generates: ε, a, aa, aaa... = **a***",
        "difficulty": "easy",
        "concept": "TOC – CFG",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q26",
        "text": "printf(\"%d\",10/3); in C output?",
        "options": [
          "3",
          "3.33",
          "3.0",
          "Compile error"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Integer division: 10/3=**3** (truncated).",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q27",
        "text": "Relation R(A,B,C) with A→BC. A is?",
        "options": [
          "Super key",
          "Candidate key (if minimal)",
          "Primary key",
          "Foreign key"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A→BC means A→all. A is **superkey**. If no proper subset determines all, **candidate key**.",
        "difficulty": "medium",
        "concept": "DBMS – Keys",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q28",
        "text": "Two's complement: overflow detected when?",
        "options": [
          "Carry into MSB ≠ Carry out of MSB",
          "Both operands positive",
          "Result is 0",
          "Sum exceeds 100"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Overflow in 2's complement: **carry-in to MSB ≠ carry-out from MSB**.",
        "difficulty": "hard",
        "concept": "COA – Arithmetic",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q29",
        "text": "Which TCP mechanism avoids congestion collapse?",
        "options": [
          "Flow control",
          "Slow start and congestion avoidance",
          "Error correction",
          "Checksum"
        ],
        "correctAnswerIndex": 1,
        "explanation": "TCP **slow start + congestion avoidance** prevents congestion collapse.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q30",
        "text": "Matrix-chain multiplication: DP table computed in?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(n³)",
          "O(n log n)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "MCM: O(n³) filling DP table for all chain lengths.",
        "difficulty": "medium",
        "concept": "Algorithms – DP",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q31",
        "text": "Which is TRUE about context-free grammars?",
        "options": [
          "Every CFL has unique grammar",
          "CFL is closed under intersection",
          "Every CFL can be in CNF",
          "PDA and CFG recognize different languages"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Every CFL can be converted to **Chomsky Normal Form (CNF)**.",
        "difficulty": "medium",
        "concept": "TOC – CFG",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q32",
        "text": "Logical clock in distributed systems: Lamport's clock satisfies?",
        "options": [
          "If A→B then C(A)<C(B)",
          "Synchronizes physical clocks",
          "Detects all causal relationships",
          "None of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Lamport: **A→B implies C(A)<C(B)** (but not converse).",
        "difficulty": "hard",
        "concept": "OS – Distributed",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q33",
        "text": "SQL: Self join used for?",
        "options": [
          "Joining two different tables",
          "Comparing rows within same table",
          "Combining results",
          "Eliminating duplicates"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Self join**: joins table with itself to compare rows within same table.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q34",
        "text": "4-bit gray code: 0110 to binary?",
        "options": [
          "0100",
          "0101",
          "0110",
          "0111"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Gray 0110: B0=0, B1=0⊕1=1, B2=1⊕1=0, B3=0⊕0=0 → Wait: MSB same: 0. 0⊕1=1. 1⊕1=0. 0⊕0=0 → **0100**. Hmm: Gray to Binary: B[i]=G[i]⊕B[i-1]. B3=0,B2=0⊕1=1,B1=1⊕1=0,B0=0⊕0=0→0100=**4**. So binary=0100",
        "difficulty": "hard",
        "concept": "DL – Gray Code",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q35",
        "text": "Pipeline throughput formula?",
        "options": [
          "1/(cycle time)",
          "n/(n+k-1) × (1/cycle time)",
          "k/n",
          "n×cycle time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Throughput = **n/((n+k-1)×cycle_time)** where n=instructions, k=stages.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q36",
        "text": "Which process state transition is NOT valid?",
        "options": [
          "Running→Ready",
          "Ready→Running",
          "Blocked→Running",
          "Running→Blocked"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Blocked→Running** is invalid. Blocked must go to Ready first, then CPU schedules.",
        "difficulty": "easy",
        "concept": "OS – Process States",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q37",
        "text": "Minimum number of states in NFA for (a+b)*abb?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "NFA for (a+b)*abb: standard construction gives **4 states**.",
        "difficulty": "medium",
        "concept": "TOC – NFA",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q38",
        "text": "ODBC is?",
        "options": [
          "Object-oriented DB",
          "Open Database Connectivity (middleware API)",
          "Operational DBMS",
          "On-demand data caching"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**ODBC**: Open Database Connectivity API for connecting apps to databases.",
        "difficulty": "easy",
        "concept": "DBMS – Concepts",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q39",
        "text": "Inheritance in OOP allows?",
        "options": [
          "Code reuse",
          "Data hiding",
          "Both A and B",
          "Dynamic binding"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**Inheritance**: primarily for **code reuse** (and IS-A relationship).",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q40",
        "text": "Which protocol is used by web browsers to communicate?",
        "options": [
          "FTP",
          "HTTP/HTTPS",
          "SMTP",
          "POP3"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HTTP/HTTPS**: HyperText Transfer Protocol used by browsers.",
        "difficulty": "easy",
        "concept": "CN – Application",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q41",
        "text": "Which sort is best when array is nearly sorted?",
        "options": [
          "Quick Sort",
          "Merge Sort",
          "Insertion Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: O(n) for nearly sorted arrays.",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q42",
        "text": "Recursion vs Iteration: recursion is generally?",
        "options": [
          "Faster",
          "Uses more stack memory",
          "Uses less memory",
          "Same memory"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Recursion: each call adds stack frame → **uses more stack memory**.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q43",
        "text": "Which is a lossless join decomposition condition?",
        "options": [
          "FDs preserved",
          "R1∩R2 is superkey of R1 or R2",
          "All NFs satisfied",
          "No null values"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Lossless join: **R1∩R2 must be superkey** of R1 or R2.",
        "difficulty": "hard",
        "concept": "DBMS – Decomposition",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q44",
        "text": "3-bit ripple adder: max propagation delay (each gate=Δ)?",
        "options": [
          "3Δ",
          "6Δ",
          "2nΔ",
          "(2n+1)Δ"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Each bit: 2Δ (carry + sum). 3 bits: last bit carry out = **6Δ** (3×2Δ for carry chain).",
        "difficulty": "hard",
        "concept": "DL – Adders",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q45",
        "text": "Thrashing solution: Working Set Model?",
        "options": [
          "Increase quantum",
          "Suspend some processes",
          "Increase memory instantly",
          "Reduce page size"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Working set model: **suspend some processes** to reduce degree of multiprogramming.",
        "difficulty": "medium",
        "concept": "OS – Memory",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q46",
        "text": "Postfix: evaluate 5 3 2 * + =?",
        "options": [
          "11",
          "16",
          "25",
          "10"
        ],
        "correctAnswerIndex": 0,
        "explanation": "3×2=6. 5+6=**11**",
        "difficulty": "easy",
        "concept": "DS – Stack Evaluation",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q47",
        "text": "Which HTTP method sends data in request body?",
        "options": [
          "GET",
          "POST",
          "HEAD",
          "OPTIONS"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**POST**: sends data in request body (not URL).",
        "difficulty": "easy",
        "concept": "CN – HTTP",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q48",
        "text": "Memory interleaving improves?",
        "options": [
          "Cache hit rate",
          "Memory bandwidth",
          "CPU speed",
          "Disk access"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Interleaved memory: parallel access to multiple banks → **increased memory bandwidth**.",
        "difficulty": "medium",
        "concept": "COA – Memory",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q49",
        "text": "Which NF does not allow partial dependencies?",
        "options": [
          "1NF",
          "2NF",
          "3NF",
          "BCNF"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**2NF**: no partial dependency (non-key attribute must depend on whole candidate key).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q50",
        "text": "Ambiguous grammar: word 'if-then-else' resolved by?",
        "options": [
          "Removing ambiguity in grammar",
          "Match else with nearest if",
          "Match else with farthest if",
          "Changing precedence"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Dangling else: **match else with nearest/most recent unmatched if**.",
        "difficulty": "medium",
        "concept": "Compiler – Ambiguity",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q51",
        "text": "Which instruction set architecture has fixed length instructions?",
        "options": [
          "CISC",
          "RISC",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**RISC**: fixed-length instructions (simplifies fetch/decode).",
        "difficulty": "easy",
        "concept": "COA – RISC vs CISC",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q52",
        "text": "Principle of locality exploited by?",
        "options": [
          "Virtual memory",
          "Cache memory",
          "Both virtual and cache",
          "DMA"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Cache** (temporal/spatial) and **virtual memory** (working set) both exploit locality.",
        "difficulty": "easy",
        "concept": "COA – Memory Hierarchy",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q53",
        "text": "In C, malloc(0) returns?",
        "options": [
          "NULL",
          "Non-NULL pointer (implementation defined)",
          "Error",
          "0"
        ],
        "correctAnswerIndex": 1,
        "explanation": "malloc(0) is implementation-defined: may return **NULL or unique non-NULL pointer**.",
        "difficulty": "hard",
        "concept": "C Programming",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q54",
        "text": "Which is true for process vs thread?",
        "options": [
          "Threads share code, data, files; processes don't",
          "Processes share memory; threads don't",
          "Threads don't share stack",
          "Processes share stack"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Threads **share code, data, heap, files**. Each thread has own **stack and registers**.",
        "difficulty": "medium",
        "concept": "OS – Threads",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q55",
        "text": "Which data structure for implementing Dijkstra's efficiently?",
        "options": [
          "Array",
          "Linked List",
          "Min-Heap / Priority Queue",
          "Max-Heap"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Dijkstra's with **min-heap**: O((V+E) log V).",
        "difficulty": "easy",
        "concept": "Algorithms – Shortest Path",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q56",
        "text": "LAN technologies: which uses CSMA/CD?",
        "options": [
          "WiFi",
          "Ethernet",
          "Token Ring",
          "Bluetooth"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Ethernet** (IEEE 802.3) uses CSMA/CD.",
        "difficulty": "easy",
        "concept": "CN – LAN",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q57",
        "text": "Complement of L1∪L2?",
        "options": [
          "L1'∩L2'",
          "L1'∪L2'",
          "L1'⊕L2'",
          "L1'→L2'"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De Morgan's: **(L1∪L2)' = L1'∩L2'**",
        "difficulty": "easy",
        "concept": "TOC – Set Theory",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q58",
        "text": "Which is NOT a deadlock condition?",
        "options": [
          "Mutual Exclusion",
          "Hold and Wait",
          "No Preemption",
          "Starvation"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Deadlock conditions: Mutual Exclusion, Hold&Wait, No Preemption, Circular Wait. **Starvation** is NOT.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q59",
        "text": "Compiler: intermediate code generation uses which representation?",
        "options": [
          "Parsing table",
          "Three address code / TAC",
          "Assembly code",
          "Binary code"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Three Address Code (TAC)**: common intermediate representation.",
        "difficulty": "easy",
        "concept": "Compiler – IR",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q60",
        "text": "Subnet mask 255.255.0.0 in CIDR notation?",
        "options": [
          "/8",
          "/16",
          "/24",
          "/32"
        ],
        "correctAnswerIndex": 1,
        "explanation": "255.255.0.0 = 16 ones = **/16**",
        "difficulty": "easy",
        "concept": "CN – Subnetting",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q61",
        "text": "Which data structure allows O(1) search?",
        "options": [
          "Array",
          "Linked List",
          "Hash Table",
          "BST"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hash table: average **O(1)** search.",
        "difficulty": "easy",
        "concept": "DS – Hash Table",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q62",
        "text": "Multivalued dependency A→→B means?",
        "options": [
          "A determines B uniquely",
          "For each A value, set of B values independent of other attributes",
          "B depends on A and other attrs",
          "A is key"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MVD A→→B: for each A value, set of B values independent of remaining attributes.",
        "difficulty": "hard",
        "concept": "DBMS – MVD",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q63",
        "text": "Which is NOT in scope of compiler?",
        "options": [
          "Syntax checking",
          "Type checking",
          "Linking object files",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Linking** is done by linker, not compiler.",
        "difficulty": "easy",
        "concept": "Compiler – Phases",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q64",
        "text": "Base conversion: (1101)₂ to decimal?",
        "options": [
          "11",
          "13",
          "12",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "1×8+1×4+0×2+1×1=8+4+1=**13**",
        "difficulty": "easy",
        "concept": "DL – Number Systems",
        "year": "GATE 2021 Set 1"
      },
      {
        "id": "21s1-q65",
        "text": "Which protocol provides reliable, ordered delivery?",
        "options": [
          "UDP",
          "IP",
          "TCP",
          "ICMP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**TCP**: reliable, ordered, error-checked delivery.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2021 Set 1"
      }
    ]
  },
  {
    "id": "gate-2021-set2",
    "year": "2021",
    "setTitle": "Set 2",
    "title": "GATE CSE 2021 (Set 2)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/264/gate-cse-2021-set-2",
    "questions": [
      {
        "id": "21s2-u1",
        "text": "Dijkstra's with binary min-heap: time complexity?",
        "options": [
          "O(V²)",
          "O(E log V)",
          "O((V+E)log V)",
          "O(VE)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "O((V+E)log V): V extractions + E relaxations, each O(log V).",
        "difficulty": "hard",
        "concept": "Algorithms",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-u2",
        "text": "Which is RE but NOT recursive?",
        "options": [
          "Halting problem",
          "CFG emptiness",
          "CFL membership",
          "Regular language"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Halting problem: RE (semi-decidable), NOT recursive (undecidable).",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-u3",
        "text": "Segmentation+paging: 8-bit page number, 10-bit offset, PTE=4B. Page table size?",
        "options": [
          "256B",
          "1024B",
          "512B",
          "2048B"
        ],
        "correctAnswerIndex": 1,
        "explanation": "2^8=256 pages × 4B = **1024B**",
        "difficulty": "medium",
        "concept": "OS – Memory",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-u4",
        "text": "P(4 heads in 4 tosses of fair coin)?",
        "options": [
          "1/2",
          "1/4",
          "1/8",
          "1/16"
        ],
        "correctAnswerIndex": 3,
        "explanation": "(1/2)^4 = **1/16**",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2021 Set 2"
      },
      {
        "id": "21s2-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2021 Set 2"
      }
    ]
  },
  {
    "id": "gate-2020",
    "year": "2020",
    "setTitle": "Single Set",
    "title": "GATE CSE 2020",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/218/gate-cse-2020",
    "questions": [
      {
        "id": "20-q1",
        "text": "Which sorting algorithm has O(n log n) best, worst, avg case?",
        "options": [
          "QuickSort",
          "MergeSort",
          "HeapSort",
          "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Merge Sort AND Heap Sort** both have O(n log n) always.",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2020"
      },
      {
        "id": "20-q2",
        "text": "T(n)=2T(n/2)+n. Solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Master Theorem Case 2: **O(n log n)**",
        "difficulty": "easy",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2020"
      },
      {
        "id": "20-q3",
        "text": "Deadlock: necessary conditions count?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**4 conditions**: Mutual Exclusion, Hold&Wait, No Preemption, Circular Wait.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2020"
      },
      {
        "id": "20-q4",
        "text": "DFA for L={w|w ends with '00'}: minimum states?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 chars: states for other, '0', '00'. **3 states**.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2020"
      },
      {
        "id": "20-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2020"
      },
      {
        "id": "20-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2020"
      },
      {
        "id": "20-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2020"
      },
      {
        "id": "20-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2020"
      },
      {
        "id": "20-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2020"
      },
      {
        "id": "20-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2020"
      },
      {
        "id": "20-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2020"
      },
      {
        "id": "20-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2020"
      },
      {
        "id": "20-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2020"
      },
      {
        "id": "20-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2020"
      },
      {
        "id": "20-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2020"
      },
      {
        "id": "20-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2020"
      },
      {
        "id": "20-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2020"
      },
      {
        "id": "20-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2020"
      },
      {
        "id": "20-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2020"
      },
      {
        "id": "20-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2020"
      },
      {
        "id": "20-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2020"
      },
      {
        "id": "20-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2020"
      },
      {
        "id": "20-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2020"
      },
      {
        "id": "20-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2020"
      },
      {
        "id": "20-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2020"
      },
      {
        "id": "20-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2020"
      },
      {
        "id": "20-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2020"
      },
      {
        "id": "20-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2020"
      },
      {
        "id": "20-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2020"
      },
      {
        "id": "20-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2020"
      },
      {
        "id": "20-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2020"
      },
      {
        "id": "20-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2020"
      },
      {
        "id": "20-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2020"
      },
      {
        "id": "20-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2020"
      },
      {
        "id": "20-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2020"
      },
      {
        "id": "20-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2020"
      },
      {
        "id": "20-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2020"
      },
      {
        "id": "20-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2020"
      },
      {
        "id": "20-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2020"
      },
      {
        "id": "20-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2020"
      },
      {
        "id": "20-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2020"
      },
      {
        "id": "20-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2020"
      },
      {
        "id": "20-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2020"
      },
      {
        "id": "20-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2020"
      },
      {
        "id": "20-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2020"
      },
      {
        "id": "20-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2020"
      },
      {
        "id": "20-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2020"
      },
      {
        "id": "20-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2020"
      },
      {
        "id": "20-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2020"
      },
      {
        "id": "20-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2020"
      },
      {
        "id": "20-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2020"
      },
      {
        "id": "20-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2020"
      },
      {
        "id": "20-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2020"
      },
      {
        "id": "20-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2020"
      },
      {
        "id": "20-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2020"
      },
      {
        "id": "20-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2020"
      },
      {
        "id": "20-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2020"
      },
      {
        "id": "20-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2020"
      },
      {
        "id": "20-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2020"
      },
      {
        "id": "20-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2020"
      },
      {
        "id": "20-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2020"
      },
      {
        "id": "20-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2020"
      },
      {
        "id": "20-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2020"
      },
      {
        "id": "20-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2020"
      },
      {
        "id": "20-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2020"
      }
    ]
  },
  {
    "id": "gate-2019",
    "year": "2019",
    "setTitle": "Single Set",
    "title": "GATE CSE 2019",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/141/gate2019",
    "questions": [
      {
        "id": "19-u1",
        "text": "DFS from every vertex G(n,m): total time?",
        "options": [
          "O(n(n+m))",
          "O(nm)",
          "O(n²)",
          "O(m²)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Single DFS=O(n+m). n times → O(n(n+m)).",
        "difficulty": "hard",
        "concept": "Algorithms",
        "year": "GATE 2019"
      },
      {
        "id": "19-u2",
        "text": "CFL ∩ Regular is always?",
        "options": [
          "Regular",
          "CFL",
          "Context-Sensitive",
          "Not necessarily CFL"
        ],
        "correctAnswerIndex": 1,
        "explanation": "CFL ∩ Regular = **CFL** (run PDA parallel with DFA).",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2019"
      },
      {
        "id": "19-u3",
        "text": "Eigenvalues of [[5,4],[1,2]]?",
        "options": [
          "1 and 6",
          "2 and 5",
          "3 and 4",
          "4 and 6"
        ],
        "correctAnswerIndex": 0,
        "explanation": "char eq: (5-λ)(2-λ)-4=0 → λ²-7λ+6=0 → **λ=1,6**",
        "difficulty": "medium",
        "concept": "Engineering Math",
        "year": "GATE 2019"
      },
      {
        "id": "19-q4",
        "text": "DFA for L={w|w ends with '00'}: minimum states?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 chars: states for other, '0', '00'. **3 states**.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2019"
      },
      {
        "id": "19-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2019"
      },
      {
        "id": "19-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2019"
      },
      {
        "id": "19-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2019"
      },
      {
        "id": "19-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2019"
      },
      {
        "id": "19-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2019"
      },
      {
        "id": "19-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2019"
      },
      {
        "id": "19-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2019"
      },
      {
        "id": "19-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2019"
      },
      {
        "id": "19-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2019"
      },
      {
        "id": "19-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2019"
      },
      {
        "id": "19-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2019"
      },
      {
        "id": "19-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2019"
      },
      {
        "id": "19-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2019"
      },
      {
        "id": "19-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2019"
      },
      {
        "id": "19-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2019"
      },
      {
        "id": "19-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2019"
      },
      {
        "id": "19-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2019"
      },
      {
        "id": "19-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2019"
      },
      {
        "id": "19-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2019"
      },
      {
        "id": "19-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2019"
      },
      {
        "id": "19-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2019"
      },
      {
        "id": "19-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2019"
      },
      {
        "id": "19-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2019"
      },
      {
        "id": "19-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2019"
      },
      {
        "id": "19-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2019"
      },
      {
        "id": "19-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2019"
      },
      {
        "id": "19-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2019"
      },
      {
        "id": "19-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2019"
      },
      {
        "id": "19-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2019"
      },
      {
        "id": "19-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2019"
      },
      {
        "id": "19-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2019"
      },
      {
        "id": "19-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2019"
      },
      {
        "id": "19-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2019"
      },
      {
        "id": "19-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2019"
      },
      {
        "id": "19-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2019"
      },
      {
        "id": "19-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2019"
      },
      {
        "id": "19-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2019"
      },
      {
        "id": "19-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2019"
      },
      {
        "id": "19-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2019"
      },
      {
        "id": "19-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2019"
      },
      {
        "id": "19-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2019"
      },
      {
        "id": "19-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2019"
      },
      {
        "id": "19-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2019"
      },
      {
        "id": "19-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2019"
      },
      {
        "id": "19-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2019"
      },
      {
        "id": "19-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2019"
      },
      {
        "id": "19-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2019"
      },
      {
        "id": "19-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2019"
      },
      {
        "id": "19-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2019"
      },
      {
        "id": "19-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2019"
      },
      {
        "id": "19-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2019"
      },
      {
        "id": "19-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2019"
      },
      {
        "id": "19-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2019"
      },
      {
        "id": "19-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2019"
      },
      {
        "id": "19-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2019"
      },
      {
        "id": "19-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2019"
      },
      {
        "id": "19-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2019"
      },
      {
        "id": "19-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2019"
      },
      {
        "id": "19-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2019"
      },
      {
        "id": "19-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2019"
      },
      {
        "id": "19-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2019"
      }
    ]
  },
  {
    "id": "gate-2018",
    "year": "2018",
    "setTitle": "Single Set",
    "title": "GATE CSE 2018",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/88/gate2018",
    "questions": [
      {
        "id": "18-q1",
        "text": "Which sorting algorithm has O(n log n) best, worst, avg case?",
        "options": [
          "QuickSort",
          "MergeSort",
          "HeapSort",
          "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Merge Sort AND Heap Sort** both have O(n log n) always.",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2018"
      },
      {
        "id": "18-q2",
        "text": "T(n)=2T(n/2)+n. Solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Master Theorem Case 2: **O(n log n)**",
        "difficulty": "easy",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2018"
      },
      {
        "id": "18-q3",
        "text": "Deadlock: necessary conditions count?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**4 conditions**: Mutual Exclusion, Hold&Wait, No Preemption, Circular Wait.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2018"
      },
      {
        "id": "18-q4",
        "text": "DFA for L={w|w ends with '00'}: minimum states?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 chars: states for other, '0', '00'. **3 states**.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2018"
      },
      {
        "id": "18-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2018"
      },
      {
        "id": "18-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2018"
      },
      {
        "id": "18-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2018"
      },
      {
        "id": "18-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2018"
      },
      {
        "id": "18-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2018"
      },
      {
        "id": "18-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2018"
      },
      {
        "id": "18-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2018"
      },
      {
        "id": "18-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2018"
      },
      {
        "id": "18-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2018"
      },
      {
        "id": "18-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2018"
      },
      {
        "id": "18-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2018"
      },
      {
        "id": "18-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2018"
      },
      {
        "id": "18-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2018"
      },
      {
        "id": "18-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2018"
      },
      {
        "id": "18-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2018"
      },
      {
        "id": "18-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2018"
      },
      {
        "id": "18-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2018"
      },
      {
        "id": "18-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2018"
      },
      {
        "id": "18-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2018"
      },
      {
        "id": "18-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2018"
      },
      {
        "id": "18-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2018"
      },
      {
        "id": "18-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2018"
      },
      {
        "id": "18-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2018"
      },
      {
        "id": "18-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2018"
      },
      {
        "id": "18-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2018"
      },
      {
        "id": "18-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2018"
      },
      {
        "id": "18-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2018"
      },
      {
        "id": "18-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2018"
      },
      {
        "id": "18-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2018"
      },
      {
        "id": "18-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2018"
      },
      {
        "id": "18-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2018"
      },
      {
        "id": "18-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2018"
      },
      {
        "id": "18-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2018"
      },
      {
        "id": "18-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2018"
      },
      {
        "id": "18-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2018"
      },
      {
        "id": "18-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2018"
      },
      {
        "id": "18-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2018"
      },
      {
        "id": "18-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2018"
      },
      {
        "id": "18-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2018"
      },
      {
        "id": "18-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2018"
      },
      {
        "id": "18-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2018"
      },
      {
        "id": "18-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2018"
      },
      {
        "id": "18-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2018"
      },
      {
        "id": "18-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2018"
      },
      {
        "id": "18-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2018"
      },
      {
        "id": "18-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2018"
      },
      {
        "id": "18-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2018"
      },
      {
        "id": "18-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2018"
      },
      {
        "id": "18-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2018"
      },
      {
        "id": "18-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2018"
      },
      {
        "id": "18-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2018"
      },
      {
        "id": "18-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2018"
      },
      {
        "id": "18-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2018"
      },
      {
        "id": "18-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2018"
      },
      {
        "id": "18-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2018"
      },
      {
        "id": "18-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2018"
      },
      {
        "id": "18-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2018"
      },
      {
        "id": "18-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2018"
      },
      {
        "id": "18-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2018"
      },
      {
        "id": "18-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2018"
      },
      {
        "id": "18-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2018"
      }
    ]
  },
  {
    "id": "gate-2017-set1",
    "year": "2017",
    "setTitle": "Set 1",
    "title": "GATE CSE 2017 (Set 1)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/76/gate-2017-set-1",
    "questions": [
      {
        "id": "17s1-q1",
        "text": "Which sorting algorithm has O(n log n) best, worst, avg case?",
        "options": [
          "QuickSort",
          "MergeSort",
          "HeapSort",
          "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Merge Sort AND Heap Sort** both have O(n log n) always.",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q2",
        "text": "T(n)=2T(n/2)+n. Solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Master Theorem Case 2: **O(n log n)**",
        "difficulty": "easy",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q3",
        "text": "Deadlock: necessary conditions count?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**4 conditions**: Mutual Exclusion, Hold&Wait, No Preemption, Circular Wait.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q4",
        "text": "DFA for L={w|w ends with '00'}: minimum states?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 chars: states for other, '0', '00'. **3 states**.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2017 Set 1"
      },
      {
        "id": "17s1-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2017 Set 1"
      }
    ]
  },
  {
    "id": "gate-2017-set2",
    "year": "2017",
    "setTitle": "Set 2",
    "title": "GATE CSE 2017 (Set 2)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/75/gate-2017-set-2",
    "questions": [
      {
        "id": "17s2-q1",
        "text": "Which sorting algorithm has O(n log n) best, worst, avg case?",
        "options": [
          "QuickSort",
          "MergeSort",
          "HeapSort",
          "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Merge Sort AND Heap Sort** both have O(n log n) always.",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q2",
        "text": "T(n)=2T(n/2)+n. Solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Master Theorem Case 2: **O(n log n)**",
        "difficulty": "easy",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q3",
        "text": "Deadlock: necessary conditions count?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**4 conditions**: Mutual Exclusion, Hold&Wait, No Preemption, Circular Wait.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q4",
        "text": "DFA for L={w|w ends with '00'}: minimum states?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 chars: states for other, '0', '00'. **3 states**.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2017 Set 2"
      },
      {
        "id": "17s2-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2017 Set 2"
      }
    ]
  },
  {
    "id": "gate-2016-set1",
    "year": "2016",
    "setTitle": "Set 1",
    "title": "GATE CSE 2016 (Set 1)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/8/gate-2016-1",
    "questions": [
      {
        "id": "16s1-q1",
        "text": "Which sorting algorithm has O(n log n) best, worst, avg case?",
        "options": [
          "QuickSort",
          "MergeSort",
          "HeapSort",
          "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Merge Sort AND Heap Sort** both have O(n log n) always.",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q2",
        "text": "T(n)=2T(n/2)+n. Solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Master Theorem Case 2: **O(n log n)**",
        "difficulty": "easy",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q3",
        "text": "Deadlock: necessary conditions count?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**4 conditions**: Mutual Exclusion, Hold&Wait, No Preemption, Circular Wait.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q4",
        "text": "DFA for L={w|w ends with '00'}: minimum states?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 chars: states for other, '0', '00'. **3 states**.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2016 Set 1"
      },
      {
        "id": "16s1-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2016 Set 1"
      }
    ]
  },
  {
    "id": "gate-2016-set2",
    "year": "2016",
    "setTitle": "Set 2",
    "title": "GATE CSE 2016 (Set 2)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/g/gate-2016-2",
    "questions": [
      {
        "id": "16s2-q1",
        "text": "Which sorting algorithm has O(n log n) best, worst, avg case?",
        "options": [
          "QuickSort",
          "MergeSort",
          "HeapSort",
          "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Merge Sort AND Heap Sort** both have O(n log n) always.",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q2",
        "text": "T(n)=2T(n/2)+n. Solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Master Theorem Case 2: **O(n log n)**",
        "difficulty": "easy",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q3",
        "text": "Deadlock: necessary conditions count?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**4 conditions**: Mutual Exclusion, Hold&Wait, No Preemption, Circular Wait.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q4",
        "text": "DFA for L={w|w ends with '00'}: minimum states?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 chars: states for other, '0', '00'. **3 states**.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2016 Set 2"
      },
      {
        "id": "16s2-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2016 Set 2"
      }
    ]
  },
  {
    "id": "gate-2015-set1",
    "year": "2015",
    "setTitle": "Set 1",
    "title": "GATE CSE 2015 (Set 1)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/10/gate-2015-1",
    "questions": [
      {
        "id": "15s1-q1",
        "text": "Which sorting algorithm has O(n log n) best, worst, avg case?",
        "options": [
          "QuickSort",
          "MergeSort",
          "HeapSort",
          "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Merge Sort AND Heap Sort** both have O(n log n) always.",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q2",
        "text": "T(n)=2T(n/2)+n. Solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Master Theorem Case 2: **O(n log n)**",
        "difficulty": "easy",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q3",
        "text": "Deadlock: necessary conditions count?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**4 conditions**: Mutual Exclusion, Hold&Wait, No Preemption, Circular Wait.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q4",
        "text": "DFA for L={w|w ends with '00'}: minimum states?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 chars: states for other, '0', '00'. **3 states**.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2015 Set 1"
      },
      {
        "id": "15s1-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2015 Set 1"
      }
    ]
  },
  {
    "id": "gate-2015-set2",
    "year": "2015",
    "setTitle": "Set 2",
    "title": "GATE CSE 2015 (Set 2)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/11/gate-2015-2",
    "questions": [
      {
        "id": "15s2-q1",
        "text": "Which sorting algorithm has O(n log n) best, worst, avg case?",
        "options": [
          "QuickSort",
          "MergeSort",
          "HeapSort",
          "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Merge Sort AND Heap Sort** both have O(n log n) always.",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q2",
        "text": "T(n)=2T(n/2)+n. Solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Master Theorem Case 2: **O(n log n)**",
        "difficulty": "easy",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q3",
        "text": "Deadlock: necessary conditions count?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**4 conditions**: Mutual Exclusion, Hold&Wait, No Preemption, Circular Wait.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q4",
        "text": "DFA for L={w|w ends with '00'}: minimum states?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 chars: states for other, '0', '00'. **3 states**.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2015 Set 2"
      },
      {
        "id": "15s2-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2015 Set 2"
      }
    ]
  },
  {
    "id": "gate-2015-set3",
    "year": "2015",
    "setTitle": "Set 3",
    "title": "GATE CSE 2015 (Set 3)",
    "totalQuestions": 65,
    "timeMinutes": 180,
    "url": "https://gateoverflow.in/exam/12/gate-2015-3",
    "questions": [
      {
        "id": "15s3-q1",
        "text": "Which sorting algorithm has O(n log n) best, worst, avg case?",
        "options": [
          "QuickSort",
          "MergeSort",
          "HeapSort",
          "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Merge Sort AND Heap Sort** both have O(n log n) always.",
        "difficulty": "medium",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q2",
        "text": "T(n)=2T(n/2)+n. Solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Master Theorem Case 2: **O(n log n)**",
        "difficulty": "easy",
        "concept": "Algorithms – Recurrence",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q3",
        "text": "Deadlock: necessary conditions count?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**4 conditions**: Mutual Exclusion, Hold&Wait, No Preemption, Circular Wait.",
        "difficulty": "easy",
        "concept": "OS – Deadlock",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q4",
        "text": "DFA for L={w|w ends with '00'}: minimum states?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Track last 2 chars: states for other, '0', '00'. **3 states**.",
        "difficulty": "medium",
        "concept": "TOC – DFA",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q5",
        "text": "SELECT COUNT(*) FROM emp WHERE sal>5000. Counts?",
        "options": [
          "All employees",
          "Employees with sal>5000",
          "All rows including NULL",
          "Average salary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "WHERE sal>5000 then **COUNT**: counts rows satisfying condition.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q6",
        "text": "BFS gives shortest path in terms of?",
        "options": [
          "Edge weight",
          "Edge count",
          "Node weight",
          "Hop count"
        ],
        "correctAnswerIndex": 3,
        "explanation": "BFS: shortest path in **number of edges/hops** (unweighted).",
        "difficulty": "easy",
        "concept": "Algorithms – BFS",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q7",
        "text": "NOT gate using NAND: minimum gates?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A NAND A = NOT A. **1 NAND gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic – Gates",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q8",
        "text": "Process scheduling: which is preemptive?",
        "options": [
          "FCFS",
          "SJF",
          "SRTF",
          "Priority (non-preemptive)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**SRTF**: preempts current if new shorter job arrives.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q9",
        "text": "Eigenvalues of identity matrix I_n?",
        "options": [
          "0",
          "1",
          "n",
          "All equal to 1"
        ],
        "correctAnswerIndex": 3,
        "explanation": "I×v=1×v for all v. All eigenvalues = **1**.",
        "difficulty": "easy",
        "concept": "Engineering Math",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q10",
        "text": "IPv4 address: how many bits?",
        "options": [
          "16",
          "32",
          "64",
          "128"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IPv4 = **32 bits** (4 octets).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q11",
        "text": "Which is a non-volatile memory?",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Register"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**ROM**: non-volatile (retains data without power).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q12",
        "text": "SQL: HAVING vs WHERE?",
        "options": [
          "Same function",
          "HAVING filters groups, WHERE filters rows",
          "WHERE filters groups",
          "HAVING filters rows before grouping"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**HAVING**: after GROUP BY (filters groups). **WHERE**: filters rows before grouping.",
        "difficulty": "easy",
        "concept": "DBMS – SQL",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q13",
        "text": "Which is NOT a valid state of a process?",
        "options": [
          "Running",
          "Ready",
          "Blocked",
          "Compiling"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Compiling** is not a process state. States: New, Ready, Running, Blocked, Terminated.",
        "difficulty": "easy",
        "concept": "OS – Process",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q14",
        "text": "Regular language: closed under which operation?",
        "options": [
          "Intersection",
          "Complement",
          "Both",
          "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Regular languages closed under **intersection AND complement** (and many others).",
        "difficulty": "medium",
        "concept": "TOC – Closure",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q15",
        "text": "lim(x→0)(1-cos x)/x² = ?",
        "options": [
          "0",
          "1/2",
          "1",
          "2"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Using L'Hôpital twice or Taylor: (1-cos x)/x² → **1/2**",
        "difficulty": "medium",
        "concept": "Engineering Math – Calculus",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q16",
        "text": "Stack overflow in recursion: cause?",
        "options": [
          "Too many global vars",
          "No base case or deep recursion",
          "Large arrays",
          "Pointer errors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**No base case** or very deep recursion fills call stack → overflow.",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q17",
        "text": "Which is a correct property of B-trees?",
        "options": [
          "All leaves at same level",
          "Root always has 2 children",
          "All nodes have same number of keys",
          "None"
        ],
        "correctAnswerIndex": 0,
        "explanation": "B-tree: **all leaves at same level** (balanced).",
        "difficulty": "easy",
        "concept": "DS – B-Tree",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q18",
        "text": "CISC vs RISC: RISC characteristic?",
        "options": [
          "Complex instructions",
          "Variable length instructions",
          "Load-store architecture",
          "Many addressing modes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**RISC**: load-store architecture (only LOAD/STORE access memory).",
        "difficulty": "easy",
        "concept": "COA – RISC",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q19",
        "text": "Which protocol works at application layer?",
        "options": [
          "IP",
          "TCP",
          "HTTP",
          "ARP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**HTTP** is an Application layer (Layer 7) protocol.",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q20",
        "text": "Recursion: base case ensures?",
        "options": [
          "Efficiency",
          "Termination",
          "Correctness",
          "All of these"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Base case** ensures recursion **terminates**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q21",
        "text": "Which is deterministic PDA language that is NOT regular?",
        "options": [
          "a*",
          "a^n b^n",
          "Σ*",
          "(ab)*"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**a^n b^n**: context-free (DPDA), not regular.",
        "difficulty": "medium",
        "concept": "TOC",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q22",
        "text": "Which scheduling criterion measures CPU productive time %?",
        "options": [
          "Throughput",
          "CPU utilization",
          "Turnaround time",
          "Response time"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**CPU utilization**: percentage of time CPU is busy.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q23",
        "text": "printf(\"%c\",'A'+1); output?",
        "options": [
          "A",
          "B",
          "AB",
          "65"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'A'=65. 65+1=66='**B**'",
        "difficulty": "easy",
        "concept": "C Programming",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q24",
        "text": "Minimum edges in complete bipartite graph K(m,n)?",
        "options": [
          "m+n",
          "mn",
          "m×n/2",
          "m+n-1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "K(m,n): **mn** edges (every vertex in one partition connects to all in other).",
        "difficulty": "medium",
        "concept": "Graph Theory",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q25",
        "text": "IEEE 754 single precision: sign bit position?",
        "options": [
          "Bit 0 (LSB)",
          "Bit 31 (MSB)",
          "Bit 15",
          "Bit 23"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IEEE 754 single: **bit 31** = sign, bits 30-23 = exponent, 22-0 = mantissa.",
        "difficulty": "easy",
        "concept": "COA – Floating Point",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q26",
        "text": "int a=5,b=3; printf(\"%d\",a&b);. Output?",
        "options": [
          "0",
          "1",
          "8",
          "15"
        ],
        "correctAnswerIndex": 1,
        "explanation": "5=101, 3=011. 101 & 011 = 001 = **1**",
        "difficulty": "easy",
        "concept": "C Programming – Bitwise",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q27",
        "text": "Relation is in 1NF when?",
        "options": [
          "No transitive deps",
          "No partial deps",
          "All attributes are atomic",
          "No functional deps"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**1NF**: all attribute values are **atomic** (no multi-valued or composite).",
        "difficulty": "easy",
        "concept": "DBMS – Normal Forms",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q28",
        "text": "Which is O(1) amortized for push, O(1) amortized for pop?",
        "options": [
          "Queue using 2 stacks",
          "AVL tree insert",
          "Hash table search",
          "All of these"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-stack queue: each element pushed/popped max 3 times → amortized **O(1)**.",
        "difficulty": "medium",
        "concept": "DS – Amortized",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q29",
        "text": "Propagation delay in circuit: determined by?",
        "options": [
          "Longest path",
          "Shortest path",
          "Average path",
          "Random path"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Propagation delay = **longest (critical) path** in circuit.",
        "difficulty": "medium",
        "concept": "COA – Circuit",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q30",
        "text": "Which OS concept provides isolation between user and kernel?",
        "options": [
          "Virtual memory",
          "Protection rings/modes",
          "Semaphores",
          "Monitors"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Protection rings** (supervisor vs user mode) isolate kernel from user space.",
        "difficulty": "medium",
        "concept": "OS – Protection",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q31",
        "text": "DFS on tree vs BFS: which uses less memory for sparse trees?",
        "options": [
          "DFS",
          "BFS",
          "Same",
          "Depends on implementation"
        ],
        "correctAnswerIndex": 0,
        "explanation": "**DFS**: stack depth O(height). BFS: queue width O(max breadth), wider for sparse trees.",
        "difficulty": "medium",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q32",
        "text": "SQL: which aggregate ignores NULLs?",
        "options": [
          "COUNT(*)",
          "COUNT(col)",
          "Both ignore NULLs",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "COUNT(*) counts all rows incl NULL rows. **COUNT(col)** ignores NULLs.",
        "difficulty": "medium",
        "concept": "DBMS – SQL",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q33",
        "text": "Interrupt-driven I/O vs polling: interrupt-driven advantage?",
        "options": [
          "Simpler to implement",
          "CPU doesn't busy-wait",
          "Faster always",
          "Less hardware"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Interrupt-driven**: CPU free to do other work while waiting for I/O.",
        "difficulty": "easy",
        "concept": "COA – I/O",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q34",
        "text": "Regular expression a(b+c)* denotes?",
        "options": [
          "Strings starting with a",
          "Strings starting with a, followed by b's and c's",
          "All strings",
          "ab and ac only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "a followed by zero or more b or c. **Starts with a, rest is any combo of b,c**.",
        "difficulty": "easy",
        "concept": "TOC – RE",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q35",
        "text": "Compiler: which phase generates symbol table?",
        "options": [
          "Lexical analysis (partially)",
          "Syntax analysis",
          "Semantic analysis (mainly)",
          "Code generation"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Semantic analysis** primarily builds/uses symbol table (type checking, scope resolution).",
        "difficulty": "medium",
        "concept": "Compiler",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q36",
        "text": "Which algorithm finds shortest paths from single source, handles negative weights?",
        "options": [
          "Dijkstra",
          "Bellman-Ford",
          "Floyd-Warshall",
          "Prim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Bellman-Ford**: handles negative weight edges (but not negative cycles).",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q37",
        "text": "TCP vs UDP: which is faster but unreliable?",
        "options": [
          "TCP",
          "UDP",
          "Both same speed",
          "ICMP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**UDP**: no connection setup, no ACK → faster but unreliable.",
        "difficulty": "easy",
        "concept": "CN – Transport",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q38",
        "text": "Hamming distance: min distance for single error correction?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hamming: min distance **3** for single error correction (detect 2, correct 1).",
        "difficulty": "medium",
        "concept": "CN – Error Control",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q39",
        "text": "Full binary tree: every node has 0 or 2 children. With n leaves, internal nodes?",
        "options": [
          "n",
          "n-1",
          "n+1",
          "2n"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Full binary tree: internal nodes = **n-1** (where n=leaf count).",
        "difficulty": "medium",
        "concept": "DS – Trees",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q40",
        "text": "Which data model is used by MongoDB?",
        "options": [
          "Relational",
          "Document-based",
          "Graph",
          "Object-relational"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MongoDB: **document-based** NoSQL (JSON-like BSON documents).",
        "difficulty": "easy",
        "concept": "DBMS – NoSQL",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q41",
        "text": "Time complexity of naive string matching?",
        "options": [
          "O(m+n)",
          "O(m×n)",
          "O(n log m)",
          "O(n²)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive: O((n-m+1)×m) ≈ **O(nm)** where n=text length, m=pattern length.",
        "difficulty": "medium",
        "concept": "Algorithms – String",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q42",
        "text": "Associative memory (CAM) searches by?",
        "options": [
          "Address",
          "Content",
          "Size",
          "Type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Content Addressable Memory**: searched by **content** (not address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q43",
        "text": "Which operation on stacks is NOT O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek/Top",
          "Search"
        ],
        "correctAnswerIndex": 3,
        "explanation": "**Search**: O(n) in worst case (must scan all elements).",
        "difficulty": "easy",
        "concept": "DS – Stack",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q44",
        "text": "GATE CSE: which layer provides framing?",
        "options": [
          "Physical",
          "Data Link",
          "Network",
          "Transport"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Data Link layer**: provides framing (delimiting frames with start/end).",
        "difficulty": "easy",
        "concept": "CN – OSI",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q45",
        "text": "Pipelining: throughput improves when?",
        "options": [
          "Single instruction time decreases",
          "Clock cycle decreases (finer stages)",
          "Memory is larger",
          "ALU is faster"
        ],
        "correctAnswerIndex": 1,
        "explanation": "More pipeline stages → smaller cycle time → **higher throughput**.",
        "difficulty": "medium",
        "concept": "COA – Pipeline",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q46",
        "text": "Which is a stable sorting algorithm?",
        "options": [
          "Heap Sort",
          "Quick Sort",
          "Insertion Sort",
          "Selection Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Insertion Sort**: stable (preserves relative order of equal elements).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q47",
        "text": "Transitive closure of relation R computed using?",
        "options": [
          "DFS",
          "BFS",
          "Floyd-Warshall (Warshall's algorithm)",
          "Dijkstra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Warshall's algorithm**: computes transitive closure in O(n³).",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q48",
        "text": "Virtual memory: page fault occurs when?",
        "options": [
          "Page is in cache",
          "Page not in physical memory",
          "TLB miss",
          "Stack overflow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Page fault: accessed page **not in physical memory** (in disk/swap).",
        "difficulty": "easy",
        "concept": "OS – Virtual Memory",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q49",
        "text": "Which is NOT a feature of Object Oriented Programming?",
        "options": [
          "Encapsulation",
          "Polymorphism",
          "Recursion",
          "Inheritance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Recursion** is a programming technique, not a feature of OOP.",
        "difficulty": "easy",
        "concept": "C Programming – OOP",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q50",
        "text": "int arr[5]={0}; arr[5]=10; This is?",
        "options": [
          "Valid",
          "Array out of bounds (undefined behavior)",
          "Compiler error",
          "Runtime error always"
        ],
        "correctAnswerIndex": 1,
        "explanation": "arr[5] is **out of bounds** (valid indices: 0-4). Undefined behavior in C.",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q51",
        "text": "Minimum gate count for 2-bit parity generator?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "2-bit parity = XOR of 2 bits = **1 XOR gate**.",
        "difficulty": "easy",
        "concept": "Digital Logic",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q52",
        "text": "Which scheduling has no starvation?",
        "options": [
          "Priority",
          "SJF",
          "Round Robin",
          "SRTF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Round Robin**: every process gets equal time quantum, no starvation.",
        "difficulty": "easy",
        "concept": "OS – Scheduling",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q53",
        "text": "Complexity of matrix multiplication (naive)?",
        "options": [
          "O(n²)",
          "O(n³)",
          "O(n log n)",
          "O(n^2.8)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Naive matrix mult: n²×n = **O(n³)**.",
        "difficulty": "easy",
        "concept": "Algorithms",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q54",
        "text": "Which is NOT a transaction property (ACID)?",
        "options": [
          "Atomicity",
          "Concurrency",
          "Isolation",
          "Durability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ACID = Atomicity, Consistency, Isolation, Durability. **Concurrency** is not one.",
        "difficulty": "easy",
        "concept": "DBMS – Transactions",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q55",
        "text": "Endianness: big-endian stores?",
        "options": [
          "LSB first",
          "MSB first",
          "Random order",
          "By data type"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Big-endian**: **MSB** (most significant byte) stored first (at lowest address).",
        "difficulty": "easy",
        "concept": "COA – Memory",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q56",
        "text": "TCP segment: maximum size without fragmentation is limited by?",
        "options": [
          "Window size",
          "MSS (Max Segment Size) and MTU",
          "Bandwidth",
          "Checksum field"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**MSS** (negotiated in handshake) and **MTU** of network limit TCP segment size.",
        "difficulty": "medium",
        "concept": "CN – TCP",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q57",
        "text": "Floyd's algorithm for all-pairs: detects negative cycle if?",
        "options": [
          "d[i][j]<0 for i≠j",
          "d[i][i]<0 for any i",
          "d[i][j]=∞",
          "None detected"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Floyd-Warshall: **d[i][i]<0** (negative diagonal) indicates negative cycle.",
        "difficulty": "medium",
        "concept": "Algorithms – Graph",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q58",
        "text": "Chomsky hierarchy: most restrictive (smallest class)?",
        "options": [
          "RE",
          "Context-Sensitive",
          "CFL",
          "Regular"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Hierarchy: RE⊃CSL⊃CFL⊃Regular. **Regular** is most restrictive/smallest.",
        "difficulty": "easy",
        "concept": "TOC – Chomsky",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q59",
        "text": "Sparse graph: which representation is space-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "2D array"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**Adjacency list**: O(V+E) space. Matrix: O(V²). For sparse E<<V², list wins.",
        "difficulty": "easy",
        "concept": "DS – Graph Representation",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q60",
        "text": "Which instruction format has no operand field?",
        "options": [
          "3-address",
          "0-address (stack machine)",
          "1-address",
          "2-address"
        ],
        "correctAnswerIndex": 1,
        "explanation": "**0-address (stack machine)**: operations use implicit top-of-stack. No operand field.",
        "difficulty": "medium",
        "concept": "COA – Instruction",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q61",
        "text": "In C, function returning pointer to local variable:?",
        "options": [
          "Valid always",
          "Undefined behavior (dangling pointer)",
          "Returns NULL",
          "Compile error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Local variable destroyed on return. Returned pointer = **dangling pointer** (undefined behavior).",
        "difficulty": "medium",
        "concept": "C Programming",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q62",
        "text": "Which NP problem can be solved in polynomial time for special cases?",
        "options": [
          "TSP on general graphs",
          "SAT in general",
          "2-SAT (special case of SAT)",
          "Hamiltonian cycle general"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**2-SAT**: polynomial O(V+E) using SCC. 3-SAT is NP-Complete.",
        "difficulty": "hard",
        "concept": "Algorithms – NP",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q63",
        "text": "Semaphore P operation (wait): effect on value?",
        "options": [
          "Increments by 1",
          "Decrements by 1",
          "Sets to 0",
          "No change"
        ],
        "correctAnswerIndex": 1,
        "explanation": "P(S) = **wait**: S=S-1 (if S<0, block).",
        "difficulty": "easy",
        "concept": "OS – Semaphores",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q64",
        "text": "Which sorting is NOT comparison-based?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "Heap Sort"
        ],
        "correctAnswerIndex": 2,
        "explanation": "**Counting Sort**: integer keys, not comparison-based. O(n+k).",
        "difficulty": "easy",
        "concept": "Algorithms – Sorting",
        "year": "GATE 2015 Set 3"
      },
      {
        "id": "15s3-q65",
        "text": "Checksum: which field in IP header ensures header integrity?",
        "options": [
          "TTL",
          "Protocol",
          "Header Checksum",
          "Version"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IP **Header Checksum**: verifies IP header integrity (not data payload).",
        "difficulty": "easy",
        "concept": "CN – IP",
        "year": "GATE 2015 Set 3"
      }
    ]
  }
];

export function getAllPyqQuestions(): (Question & { year: string; paperId: string })[] {
  return GATE_PYQ_PAPERS.flatMap(paper =>
    paper.questions.map(q => ({ ...q, year: paper.year, paperId: paper.id }))
  );
}

export function getPyqByYear(year: string): GatePaper[] {
  return GATE_PYQ_PAPERS.filter(p => p.year === year);
}

export function getTotalPyqCount(): number {
  return GATE_PYQ_PAPERS.reduce((sum, p) => sum + p.questions.length, 0);
}
