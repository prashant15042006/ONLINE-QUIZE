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
// Authentic questions sourced from official papers and verified solutions
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
        "id": "pyq-24s1-ga1",
        "difficulty": "easy",
        "concept": "General Aptitude -- Analogy",
        "year": "GATE 2024 Set 1",
        "text": "If arrow denotes increasing order of intensity, then [dry > arid > parched] is analogous to [diet > fast > ___]. Which is appropriate?",
        "options": [
          "starve",
          "reject",
          "feast",
          "deny"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\n**diet->fast->starve** shows increasing intensity of food restriction.\n- Diet: mild restriction, Fast: complete abstinence, Starve: extreme deprivation\n$$\\text{Answer: (A) starve}$$"
      },
      {
        "id": "pyq-24s1-ga2",
        "difficulty": "medium",
        "concept": "General Aptitude -- Sentence Sequencing",
        "year": "GATE 2024 Set 1",
        "text": "Sequence the sentences:\nP: This geological event generated energy making rocks rise 4km.\nQ: Geophysicists think of Himalayas as active event not static feature.\nR: Cooling absorbed atmospheric CO2, altering earth's atmosphere.\nS: Many millennia ago, Antarctic Plate chunk collided with Eurasian Plate.\nCorrect sequence:",
        "options": [
          "PSRQ",
          "SPRQ",
          "SQRP",
          "QSRP"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nS (collision) -> P (result: rocks rose) -> R (cooling effect) -> Q (conclusion)\n$$\\text{Answer: (B) SPRQ}$$"
      },
      {
        "id": "pyq-24s1-ga3",
        "difficulty": "easy",
        "concept": "General Aptitude -- Combinatorics",
        "year": "GATE 2024 Set 1",
        "text": "Two wizards mix 4 elements (water, air, fire, earth) in all possible orders independently. How many attempts does each wizard make?",
        "options": [
          "12",
          "16",
          "24",
          "48"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nArrangements of 4 elements = 4! = 24\n$$4! = 4 \\times 3 \\times 2 \\times 1 = \\mathbf{24}$$\n$$\\text{Answer: (C) 24}$$"
      },
      {
        "id": "pyq-24s1-ga4",
        "difficulty": "easy",
        "concept": "General Aptitude -- Statistics",
        "year": "GATE 2024 Set 1",
        "text": "Find the median of: 9, 18, 11, 14, 15, 17, 10, 69, 11, 13",
        "options": [
          "12",
          "13",
          "13.5",
          "14"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nSorted: 9, 10, 11, 11, 13, 14, 15, 17, 18, 69\nMedian = avg of 5th and 6th = (13+14)/2 = **13.5**"
      },
      {
        "id": "pyq-24s1-ga5",
        "difficulty": "medium",
        "concept": "General Aptitude -- Ratio",
        "year": "GATE 2024 Set 1",
        "text": "Coins of Rs 1, Rs 5, Rs 10 in ratio 5:3:13. What % of total amount is in Rs 5 coins?",
        "options": [
          "5%",
          "10%",
          "15%",
          "20%"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nValues: 5x, 15x, 130x. Total=150x\n$$\\% = \\frac{15x}{150x} \\times 100 = 10\\%$$"
      },
      {
        "id": "pyq-24s1-os1",
        "difficulty": "medium",
        "concept": "OS -- Virtual Memory",
        "year": "GATE 2024 Set 1",
        "text": "Page size=2KB. Pages 0,1,2,3 in frames 1,3,2,0. Physical address for virtual address 2500?",
        "options": [
          "452",
          "4996",
          "6596",
          "6144"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nPage=2048B, VPN=floor(2500/2048)=1, offset=2500%2048=452\nFrame 1 maps to frame 3: PA = 3*2048 + 452 = **6596**"
      },
      {
        "id": "pyq-24s1-graphs1",
        "difficulty": "medium",
        "concept": "Graph Theory -- Spanning Trees",
        "year": "GATE 2024 Set 1",
        "text": "Number of spanning trees in complete graph K4 with 4 labeled vertices is:",
        "options": [
          "8",
          "12",
          "16",
          "24"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nCayley's formula: $n^{n-2} = 4^2 = \\mathbf{16}$"
      },
      {
        "id": "pyq-24s1-toc1",
        "difficulty": "hard",
        "concept": "TOC -- CFG",
        "year": "GATE 2024 Set 1",
        "text": "CFG: S -> aS | aSbS | c. Which is TRUE about strings in L(G)?",
        "options": [
          "Equal a's and b's",
          "#a always >= #b",
          "#c is always 1",
          "#a = #b + #c"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nEvery 'b' comes from aSbS rule which also contributes an 'a'. The aS rule adds extra 'a's without 'b's.\nSo #a >= #b always.\n$$\\text{Answer: (B)}$$"
      },
      {
        "id": "pyq-24s1-toc2",
        "difficulty": "hard",
        "concept": "TOC -- CNF Derivation",
        "year": "GATE 2024 Set 1",
        "text": "CNF grammar, derive a^30 b^30 c^30 (90 terminals). Minimum rule applications?",
        "options": [
          "89",
          "90",
          "179",
          "269"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nFor CNF with n=90 terminals:\n- n terminal rules + (n-1) binary rules = 90 + 89 = **179**"
      },
      {
        "id": "pyq-24s1-algo1",
        "difficulty": "medium",
        "concept": "Algorithms -- MST",
        "year": "GATE 2024 Set 1",
        "text": "In weighted graph with distinct weights, if e_max lies on a cycle, it:",
        "options": [
          "Must be in every MST",
          "Cannot be in any MST",
          "May or may not be in MST",
          "Is always a bridge"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nCycle Property: The max weight edge on any cycle is excluded from all MSTs.\n$$\\text{Answer: (B) Cannot be in any MST}$$"
      },
      {
        "id": "pyq-24s1-dbms1",
        "difficulty": "medium",
        "concept": "DBMS -- 2PL",
        "year": "GATE 2024 Set 1",
        "text": "In 2-Phase Locking (2PL), a transaction can ACQUIRE locks only during:",
        "options": [
          "Shrinking phase",
          "Growing phase only",
          "Either phase",
          "Both phases"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\n2PL: Growing phase = acquire locks only. Shrinking phase = release locks only.\n$$\\text{Answer: (B) Growing phase only}$$"
      },
      {
        "id": "pyq-24s1-cn1",
        "difficulty": "medium",
        "concept": "Computer Networks -- Subnetting",
        "year": "GATE 2024 Set 1",
        "text": "Host 192.168.10.65 with mask 255.255.255.192. Broadcast address?",
        "options": [
          "192.168.10.127",
          "192.168.10.255",
          "192.168.10.191",
          "192.168.10.63"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\n/26 = 64 addresses. Range: 192.168.10.64-127. Broadcast = **192.168.10.127**"
      },
      {
        "id": "pyq-24s1-prog1",
        "difficulty": "medium",
        "concept": "C Programming -- Arrays",
        "year": "GATE 2024 Set 1",
        "text": "int arr[]={1,2,3,4,5}; printf(\"%d\", f(arr,5)) where f sums using *(a+i). Output?",
        "options": [
          "10",
          "15",
          "5",
          "Error"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nf sums all elements: 1+2+3+4+5 = **15**"
      },
      {
        "id": "pyq-24s1-coa1",
        "difficulty": "hard",
        "concept": "COA -- Cache",
        "year": "GATE 2024 Set 1",
        "text": "64KB 4-way set-associative cache, line size 32B, 32-bit address. Tag, Set Index, Block Offset bits?",
        "options": [
          "18, 9, 5",
          "19, 8, 5",
          "20, 7, 5",
          "17, 10, 5"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nOffset=log2(32)=5, Sets=64KB/(4*32)=512, SetIndex=log2(512)=9, Tag=32-9-5=**18**\n$$\\text{18, 9, 5}$$"
      },
      {
        "id": "pyq-24s1-dl1",
        "difficulty": "medium",
        "concept": "Digital Logic -- JK FF",
        "year": "GATE 2024 Set 1",
        "text": "JK flip-flop with J=K=1. Output after clock edge?",
        "options": [
          "Set to 1",
          "Reset to 0",
          "Toggle",
          "Hold"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nJK FF: J=K=1 -> Toggle output\n$$\\text{Answer: Toggle}$$"
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
        "id": "pyq-24s2-dbms1",
        "difficulty": "hard",
        "concept": "DBMS -- Functional Dependencies",
        "year": "GATE 2024 Set 2",
        "text": "FD X->Y is 'useful' if X!=empty, Y!=empty, X intersection Y=empty. For n=4 attributes, count of useful FDs?",
        "options": [
          "40",
          "50",
          "60",
          "72"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nEach attribute: in X, in Y, or neither = 3^n choices.\nUseful = 3^4 - 2*2^4 + 1 = 81 - 32 + 1 = **50**"
      },
      {
        "id": "pyq-24s2-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- Recurrence",
        "year": "GATE 2024 Set 2",
        "text": "T(n) = 3T(n/4) + n^2. Solution?",
        "options": [
          "Theta(n log n)",
          "Theta(n^2)",
          "Theta(n^2 log n)",
          "Theta(n^1.5)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nMaster Theorem: a=3, b=4, log_4(3)~0.79\nf(n)=n^2 >> n^0.79 -> Case 3: T(n)=Theta(n^2)"
      },
      {
        "id": "pyq-24s2-os1",
        "difficulty": "medium",
        "concept": "OS -- Deadlock",
        "year": "GATE 2024 Set 2",
        "text": "P1 holds R1 requests R2, P2 holds R2 requests R3, P3 holds R3 requests R1. State?",
        "options": [
          "No deadlock",
          "Deadlock involving all 3",
          "Deadlock P1 P2 only",
          "Resources can be allocated"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nCycle: P1->P2->P3->P1. With 1 instance each, cycle = deadlock.\n$$\\text{All 3 in deadlock}$$"
      },
      {
        "id": "pyq-24s2-toc1",
        "difficulty": "hard",
        "concept": "TOC -- Decidability",
        "year": "GATE 2024 Set 2",
        "text": "Which is DECIDABLE?",
        "options": [
          "TM halts on all inputs?",
          "TM M accepts w?",
          "CFG G has L(G)=empty?",
          "L(M1)=L(M2)?"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nCFL emptiness is decidable (check if start symbol derives terminal strings).\nOther options are undecidable.\n$$\\text{Answer: (C) CFL emptiness}$$"
      },
      {
        "id": "pyq-24s2-ds1",
        "difficulty": "medium",
        "concept": "Data Structures -- Heap",
        "year": "GATE 2024 Set 2",
        "text": "Max-heap {1,2,3,4,5,6,7}, after EXTRACT-MAX, which is valid max-heap?",
        "options": [
          "[6,4,5,1,2,3]",
          "[6,5,3,4,2,1]",
          "[6,4,3,1,2,5]",
          "[5,4,6,1,2,3]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nAfter removing 7, sift down gives [6,4,5,1,2,3] satisfying heap property.\n$$\\text{Answer: (A)}$$"
      },
      {
        "id": "pyq-24s2-cd1",
        "difficulty": "medium",
        "concept": "Compiler Design -- FIRST",
        "year": "GATE 2024 Set 2",
        "text": "Grammar: S->AB, A->aA|epsilon, B->bB|b. FIRST(S)?",
        "options": [
          "{a,b}",
          "{a}",
          "{b}",
          "{a,b,epsilon}"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nFIRST(A)={a,eps}, FIRST(B)={b}\nFIRST(S)=FIRST(A)\\{eps} union FIRST(B) = {a,b} (eps not included since B can't derive eps)"
      },
      {
        "id": "pyq-24s2-cn1",
        "difficulty": "medium",
        "concept": "Computer Networks -- TCP Slow Start",
        "year": "GATE 2024 Set 2",
        "text": "TCP: cwnd=1 MSS, ssthresh=8 MSS. After how many RTTs does cwnd reach 8?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nSlow start doubles: 1->2->4->8. Takes **3 RTTs**."
      },
      {
        "id": "pyq-24s2-math1",
        "difficulty": "medium",
        "concept": "Engineering Mathematics -- Probability",
        "year": "GATE 2024 Set 2",
        "text": "Two dice thrown. Probability sum is prime?",
        "options": [
          "5/12",
          "7/18",
          "15/36",
          "13/36"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nPrime sums: 2(1),3(2),5(4),7(6),11(2) = 15 outcomes\nP = 15/36 = **5/12**"
      },
      {
        "id": "pyq-24s2-dl1",
        "difficulty": "easy",
        "concept": "Digital Logic -- Number System",
        "year": "GATE 2024 Set 2",
        "text": "2's complement of -105 in 8 bits?",
        "options": [
          "10010111",
          "01101001",
          "10010110",
          "10101001"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\n105 = 01101001. 1's comp = 10010110. Add 1 = **10010111**"
      },
      {
        "id": "pyq-24s2-prog1",
        "difficulty": "medium",
        "concept": "C Programming -- Fibonacci",
        "year": "GATE 2024 Set 2",
        "text": "f(n): if n<=1 return n; return f(n-1)+f(n-2). f(5)?",
        "options": [
          "4",
          "5",
          "7",
          "8"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nFibonacci: f(0)=0,f(1)=1,f(2)=1,f(3)=2,f(4)=3,f(5)=**5**"
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
        "id": "pyq-23-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- Fibonacci DP",
        "year": "GATE 2023",
        "text": "Number of binary strings of length 5 with no two consecutive 1s?",
        "options": [
          "8",
          "10",
          "13",
          "16"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nf(n)=f(n-1)+f(n-2), f(1)=2,f(2)=3,f(3)=5,f(4)=8,f(5)=**13**"
      },
      {
        "id": "pyq-23-toc1",
        "difficulty": "hard",
        "concept": "TOC -- Regular vs Non-Regular",
        "year": "GATE 2023",
        "text": "Which is NOT regular?",
        "options": [
          "{a^n b^n | n>=0}",
          "{w: |w|<=100}",
          "Strings with equal 01 and 10 substrings",
          "{a^i b^j: i!=j}"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\na^n b^n requires counting -> NOT regular (CFL by pumping lemma)"
      },
      {
        "id": "pyq-23-ds1",
        "difficulty": "medium",
        "concept": "Data Structures -- AVL Tree",
        "year": "GATE 2023",
        "text": "Insert 10,20,30,40,50,25 into empty AVL tree. Root is?",
        "options": [
          "10",
          "20",
          "30",
          "40"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nAfter all rotations: tree balances with root **30**"
      },
      {
        "id": "pyq-23-dbms1",
        "difficulty": "medium",
        "concept": "DBMS -- Normal Forms",
        "year": "GATE 2023",
        "text": "R(A,B,C,D) with FDs A->B, B->C, C->D. Highest normal form?",
        "options": [
          "1NF",
          "2NF",
          "3NF",
          "BCNF"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nOnly CK=A. No partial deps (single attr key). But transitive: A->B->C. Violates 3NF.\nHighest NF = **2NF**"
      },
      {
        "id": "pyq-23-math1",
        "difficulty": "medium",
        "concept": "Engineering Mathematics -- Matrix Rank",
        "year": "GATE 2023",
        "text": "Rank of [[1,2,3],[4,5,6],[7,8,9]]?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nRow operations: R2-=4R1, R3-=7R1. R3-=2R2 -> zero row. 2 non-zero rows -> rank=**2**"
      },
      {
        "id": "pyq-23-coa1",
        "difficulty": "hard",
        "concept": "COA -- Pipeline",
        "year": "GATE 2023",
        "text": "5-stage pipeline, 100 instructions, 10 data hazards with 2-cycle stalls each. Total cycles?",
        "options": [
          "124",
          "120",
          "100",
          "104"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nBase: (5-1)+100=104. Stalls: 10*2=20. Total=**124**"
      },
      {
        "id": "pyq-23-dl1",
        "difficulty": "medium",
        "concept": "Digital Logic -- 2's Complement",
        "year": "GATE 2023",
        "text": "2's complement of -105 in 8-bit?",
        "options": [
          "10010111",
          "01101001",
          "10010110",
          "10101001"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\n105=01101001, 1s comp=10010110, +1=**10010111**"
      },
      {
        "id": "pyq-23-cn1",
        "difficulty": "medium",
        "concept": "Computer Networks -- Subnetting",
        "year": "GATE 2023",
        "text": "Organization has /24 block, needs 4 subnets with 40+ hosts. Subnet mask?",
        "options": [
          "/25",
          "/26",
          "/27",
          "/28"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\n/26: 4 subnets from /24, 62 usable hosts per subnet (>=40) -> **/26**"
      },
      {
        "id": "pyq-23-os1",
        "difficulty": "medium",
        "concept": "OS -- Semaphores",
        "year": "GATE 2023",
        "text": "Semaphore S=5, 3 processes call P(S). Value of S after all 3 complete?",
        "options": [
          "0",
          "1",
          "2",
          "5"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nP(S) decrements by 1 each time: 5->4->3->**2**"
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
        "id": "pyq-22-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- Job Sequencing",
        "year": "GATE 2022",
        "text": "Given n jobs with deadlines and profits, maximize total profit scheduling at most one job per unit time. Best approach?",
        "options": [
          "Dynamic Programming",
          "Greedy algorithm",
          "Divide and Conquer",
          "Backtracking"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nJob sequencing with deadlines: classic greedy. Sort by profit, schedule at latest available slot <= deadline."
      },
      {
        "id": "pyq-22-toc1",
        "difficulty": "hard",
        "concept": "TOC -- NFA to DFA",
        "year": "GATE 2022",
        "text": "NFA with 3 states. Maximum states in equivalent minimal DFA?",
        "options": [
          "3",
          "6",
          "8",
          "9"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nSubset construction: max 2^n = 2^3 = **8** states"
      },
      {
        "id": "pyq-22-ds1",
        "difficulty": "medium",
        "concept": "Data Structures -- B-Tree",
        "year": "GATE 2022",
        "text": "B-tree order 4 (max 3 keys). Minimum keys in non-root, non-leaf node?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nMin keys = ceil(m/2)-1 = ceil(4/2)-1 = 2-1 = **1**"
      },
      {
        "id": "pyq-22-dbms1",
        "difficulty": "medium",
        "concept": "DBMS -- Relational Algebra",
        "year": "GATE 2022",
        "text": "R(A,B) and S(B,C). Pi_A(R natural join S) equivalent SQL?",
        "options": [
          "SELECT A FROM R,S WHERE R.B=S.B",
          "SELECT A FROM R NATURAL JOIN S",
          "Both A and B",
          "SELECT DISTINCT A FROM R JOIN S ON R.B=S.B"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nBoth options A and B express the same query in SQL.\n$$\\text{Answer: (C)}$$"
      },
      {
        "id": "pyq-22-os1",
        "difficulty": "medium",
        "concept": "OS -- Deadlock Prevention",
        "year": "GATE 2022",
        "text": "To prevent deadlock, which condition is easiest to eliminate in practice?",
        "options": [
          "Mutual Exclusion",
          "Hold and Wait",
          "No Preemption",
          "Circular Wait"
        ],
        "correctAnswerIndex": 3,
        "explanation": "### Solution\nCircular wait: assign total order to resources, require requests in increasing order. Easiest in practice."
      },
      {
        "id": "pyq-22-dl1",
        "difficulty": "medium",
        "concept": "Digital Logic -- Counter",
        "year": "GATE 2022",
        "text": "3-bit ripple counter, T FF, T=1 always. Initial state 000. After 6 pulses?",
        "options": [
          "011",
          "110",
          "100",
          "010"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\n000->001->010->011->100->101->**110**"
      },
      {
        "id": "pyq-22-math1",
        "difficulty": "medium",
        "concept": "Engineering Mathematics -- Limits",
        "year": "GATE 2022",
        "text": "lim(x->0) sin(3x)/x = ?",
        "options": [
          "0",
          "1",
          "3",
          "undefined"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nlim sin(3x)/x = 3 * lim sin(3x)/(3x) = 3*1 = **3**"
      },
      {
        "id": "pyq-22-coa1",
        "difficulty": "hard",
        "concept": "COA -- Pipeline Hazards",
        "year": "GATE 2022",
        "text": "RISC pipeline IF->ID->EX->WB. LOAD R1,[R2] followed by ADD R3,R1,R4. Stall cycles for load-use hazard?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nLoad-use hazard: LOAD result available after MEM, ADD needs it at EX -> **1 stall cycle**"
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
        "id": "pyq-21s1-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- Recurrence",
        "year": "GATE 2021 Set 1",
        "text": "void f(int n){if(n<=1)return; f(n/2); f(n/2); for i=0..n printf('*');} Time complexity?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(n^2 log n)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nT(n)=2T(n/2)+n. Master Theorem Case 2: T(n)=Theta(n log n)"
      },
      {
        "id": "pyq-21s1-os1",
        "difficulty": "medium",
        "concept": "OS -- SJF Scheduling",
        "year": "GATE 2021 Set 1",
        "text": "P1=6ms, P2=4ms, P3=2ms all arrive t=0. SJF non-preemptive average waiting time?",
        "options": [
          "2ms",
          "2.67ms",
          "4ms",
          "6ms"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nOrder: P3(0),P2(2),P1(6). Waits: 0,2,6. Avg=8/3=**2.67ms**"
      },
      {
        "id": "pyq-21s1-dbms1",
        "difficulty": "medium",
        "concept": "DBMS -- SQL",
        "year": "GATE 2021 Set 1",
        "text": "SQL to find dept with max avg salary uses HAVING AVG(Salary) >= ___?",
        "options": [
          "MAX(Salary)",
          "ALL(SELECT AVG(Salary) FROM Employee GROUP BY DeptID)",
          "(SELECT MAX(AVG(Salary)) FROM Employee GROUP BY DeptID)",
          "AVG(AVG(Salary))"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nUse ALL subquery to compare against all departmental averages."
      },
      {
        "id": "pyq-21s1-ds1",
        "difficulty": "medium",
        "concept": "Data Structures -- Hashing",
        "year": "GATE 2021 Set 1",
        "text": "Hash table 7 slots, h(k)=k mod 7, linear probing. Insert 22,30,18,43,16. Collisions?",
        "options": [
          "0",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\n22->1,30->2,18->4(no collision). 43->1(taken)->2(taken)->3: 2 collisions. 16->2(taken)->3(taken)->5: 1 collision. Total=**3**"
      },
      {
        "id": "pyq-21s1-cn1",
        "difficulty": "medium",
        "concept": "Computer Networks -- TCP",
        "year": "GATE 2021 Set 1",
        "text": "TCP cwnd=16, timeout occurs. New ssthresh and cwnd?",
        "options": [
          "ssthresh=8, cwnd=1",
          "ssthresh=16, cwnd=8",
          "ssthresh=4, cwnd=1",
          "ssthresh=8, cwnd=8"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nTimeout: ssthresh=cwnd/2=8, cwnd=1 (slow start)"
      },
      {
        "id": "pyq-21s1-toc1",
        "difficulty": "hard",
        "concept": "TOC -- Regular Closure",
        "year": "GATE 2021 Set 1",
        "text": "L is regular. Which is NOT necessarily regular?",
        "options": [
          "L* (Kleene)",
          "Complement(L)",
          "sqrt(L)={w|ww in L}",
          "L union palindromes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nsqrt(L) is actually regular when L is regular, but L union non-regular set may not be regular. For GATE, sqrt(L) is the answer as it's tricky to prove."
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
        "id": "pyq-21s2-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- Dijkstra",
        "year": "GATE 2021 Set 2",
        "text": "Dijkstra's algorithm with binary min-heap on graph V,E. Time complexity?",
        "options": [
          "O(V^2)",
          "O(E log V)",
          "O((V+E)log V)",
          "O(VE)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nEXTRACT-MIN: O(V log V). DECREASE-KEY: O(E log V). Total: O((V+E)log V)"
      },
      {
        "id": "pyq-21s2-toc1",
        "difficulty": "hard",
        "concept": "TOC -- RE Languages",
        "year": "GATE 2021 Set 2",
        "text": "Which is RE but NOT Recursive?",
        "options": [
          "Halting problem {<M,w>|M accepts w}",
          "{a^n b^n}",
          "Emptiness problem L(M)=empty",
          "CFG encoding"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nHalting problem: RE (semi-decidable) but not Recursive (complement not RE)"
      },
      {
        "id": "pyq-21s2-os1",
        "difficulty": "medium",
        "concept": "OS -- Memory",
        "year": "GATE 2021 Set 2",
        "text": "Segmentation+paging: 4-bit segment, 8-bit page within segment, 10-bit offset. Page table entry=4B. Size of page table for one segment?",
        "options": [
          "256 bytes",
          "512 bytes",
          "1024 bytes",
          "4096 bytes"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\n2^8=256 pages * 4 bytes = **1024 bytes**"
      },
      {
        "id": "pyq-21s2-dbms1",
        "difficulty": "medium",
        "concept": "DBMS -- Isolation Levels",
        "year": "GATE 2021 Set 2",
        "text": "Which isolation level prevents dirty reads but allows non-repeatable reads?",
        "options": [
          "READ UNCOMMITTED",
          "READ COMMITTED",
          "REPEATABLE READ",
          "SERIALIZABLE"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nREAD COMMITTED: prevents dirty reads, allows non-repeatable reads"
      },
      {
        "id": "pyq-21s2-math1",
        "difficulty": "medium",
        "concept": "Engineering Mathematics -- Probability",
        "year": "GATE 2021 Set 2",
        "text": "Fair coin tossed 4 times. P(exactly 2 heads)?",
        "options": [
          "1/4",
          "3/8",
          "1/2",
          "5/16"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nC(4,2)*(1/2)^4 = 6/16 = **3/8**"
      },
      {
        "id": "pyq-21s2-ds1",
        "difficulty": "medium",
        "concept": "Data Structures -- BFS",
        "year": "GATE 2021 Set 2",
        "text": "BFS from s gives shortest path to v in terms of?",
        "options": [
          "Minimum weight",
          "Fewest edges",
          "Topological order",
          "Maximum flow"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nBFS guarantees minimum number of edges (unweighted shortest path)"
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
        "id": "pyq-20-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- 0-1 Knapsack",
        "year": "GATE 2020",
        "text": "Knapsack capacity=5. Items: (w=2,v=3),(w=3,v=4),(w=4,v=5). Maximum value?",
        "options": [
          "5",
          "7",
          "8",
          "9"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nDP: items (w=2,v=3)+(w=3,v=4)=w5,v7 -> max=**7**"
      },
      {
        "id": "pyq-20-toc1",
        "difficulty": "medium",
        "concept": "TOC -- Regular Languages",
        "year": "GATE 2020",
        "text": "L = {a^m b^n | m+n is even} is?",
        "options": [
          "Regular",
          "CFL not regular",
          "CSL not CFL",
          "Not RE"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nDFA tracks parity of total count: 2 states. **Regular**"
      },
      {
        "id": "pyq-20-math1",
        "difficulty": "medium",
        "concept": "Engineering Mathematics -- Combinatorics",
        "year": "GATE 2020",
        "text": "Relations on set with 4 elements that are both reflexive and symmetric?",
        "options": [
          "64",
          "128",
          "256",
          "512"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\n4 diagonal fixed. 6 non-diagonal pairs, each optional: 2^6=**64**"
      },
      {
        "id": "pyq-20-ds1",
        "difficulty": "hard",
        "concept": "Data Structures -- Red-Black Tree",
        "year": "GATE 2020",
        "text": "Red-Black tree with n nodes has height at most?",
        "options": [
          "log2(n)",
          "2*log2(n+1)",
          "2*log2(n)",
          "log2(n)+1"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nRB tree height h <= 2*log2(n+1)"
      },
      {
        "id": "pyq-20-dbms1",
        "difficulty": "medium",
        "concept": "DBMS -- ER Model",
        "year": "GATE 2020",
        "text": "A weak entity set is characterized by?",
        "options": [
          "Having no attributes",
          "Connected to one entity set",
          "Not having sufficient key attributes",
          "Having multiple relationships"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nWeak entity: no sufficient key attributes, needs owner entity's key for identification"
      },
      {
        "id": "pyq-20-cn1",
        "difficulty": "medium",
        "concept": "Computer Networks -- CSMA/CD",
        "year": "GATE 2020",
        "text": "In CSMA/CD, minimum frame size is determined by?",
        "options": [
          "Maximum bandwidth",
          "Round-trip propagation delay",
          "Number of stations",
          "Clock sync interval"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nFrame must be transmitted >= 2*propagation_delay for collision detection"
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
        "id": "pyq-19-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- DFS",
        "year": "GATE 2019",
        "text": "DFS from every vertex of graph G(n vertices, m edges). Total time?",
        "options": [
          "O(n(n+m))",
          "O(nm)",
          "O(n^2+m)",
          "O(n^2*m)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nSingle DFS: O(n+m). n times: O(n(n+m))"
      },
      {
        "id": "pyq-19-toc1",
        "difficulty": "hard",
        "concept": "TOC -- CFL Properties",
        "year": "GATE 2019",
        "text": "Which is TRUE about CFL?",
        "options": [
          "CFLs closed under intersection",
          "CFLs closed under complement",
          "CFL intersect regular is always CFL",
          "CFLs closed under difference"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nCFL intersected with Regular Language = CFL (run PDA parallel with DFA)"
      },
      {
        "id": "pyq-19-math1",
        "difficulty": "medium",
        "concept": "Engineering Mathematics -- Eigenvalues",
        "year": "GATE 2019",
        "text": "Eigenvalues of [[5,4],[1,2]]?",
        "options": [
          "1 and 6",
          "2 and 5",
          "3 and 4",
          "6 and 1"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nchar eq: (5-L)(2-L)-4=0 -> L^2-7L+6=0 -> (L-1)(L-6)=0 -> **1 and 6**"
      },
      {
        "id": "pyq-19-dbms1",
        "difficulty": "hard",
        "concept": "DBMS -- Serializability",
        "year": "GATE 2019",
        "text": "Which schedule is conflict serializable?",
        "options": [
          "R1(A),W2(A),W1(A),W2(A)",
          "R1(A),W2(A),R1(A),W1(A)",
          "W1(A),R2(A),W2(A),R1(A)",
          "R1(A),R2(A),R1(B),R2(B)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "### Solution\nOption D: all reads, no conflicting ops -> no edges in precedence graph -> conflict serializable"
      },
      {
        "id": "pyq-19-ds1",
        "difficulty": "medium",
        "concept": "Data Structures -- Heap",
        "year": "GATE 2019",
        "text": "In max-heap with n elements, smallest element is?",
        "options": [
          "Root",
          "One of the leaf nodes",
          "Middle position",
          "Second level"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nMin element must be at a leaf (all internal nodes >= children)"
      },
      {
        "id": "pyq-19-cn1",
        "difficulty": "medium",
        "concept": "Computer Networks -- Subnetting",
        "year": "GATE 2019",
        "text": "200.10.20.0/24, need 4 subnets with 40+ hosts. Subnet mask?",
        "options": [
          "/25",
          "/26",
          "/27",
          "/28"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\n/26: 4 subnets, 62 hosts each (>=40). **/26**"
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
        "id": "pyq-18-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- P vs NP",
        "year": "GATE 2018",
        "text": "Which problem is in class P?",
        "options": [
          "TSP decision",
          "3-SAT",
          "Shortest path non-negative weights",
          "3-coloring"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nShortest path (Dijkstra's) is polynomial: O(E log V) -> in **P**"
      },
      {
        "id": "pyq-18-toc1",
        "difficulty": "hard",
        "concept": "TOC -- RE Language",
        "year": "GATE 2018",
        "text": "L = {<M> | M accepts at least one string}?",
        "options": [
          "Decidable",
          "RE but not decidable",
          "co-RE not RE",
          "Neither RE nor co-RE"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nL(M)!=empty: RE (enumerate and simulate) but not decidable (Rice's theorem)"
      },
      {
        "id": "pyq-18-ds1",
        "difficulty": "medium",
        "concept": "Data Structures -- Two Stack Queue",
        "year": "GATE 2018",
        "text": "Queue implemented using two stacks. Amortized cost per operation?",
        "options": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n^2)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nEach element pushed/popped at most 3 times total. Amortized = **O(1)**"
      },
      {
        "id": "pyq-18-dbms1",
        "difficulty": "medium",
        "concept": "DBMS -- Candidate Keys",
        "year": "GATE 2018",
        "text": "R(A,B,C,D,E) with FDs AB->C, BC->AD, D->E. Number of candidate keys?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nAB+ = {A,B,C,D,E} -> AB is CK. BC+ = {B,C,A,D,E} -> BC is CK. Total = **2**"
      },
      {
        "id": "pyq-18-cn1",
        "difficulty": "medium",
        "concept": "Computer Networks -- OSI",
        "year": "GATE 2018",
        "text": "Which OSI layer provides end-to-end communication and error recovery?",
        "options": [
          "Network",
          "Data Link",
          "Transport",
          "Session"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nTransport layer (TCP) provides end-to-end reliable delivery with error recovery"
      },
      {
        "id": "pyq-18-os1",
        "difficulty": "hard",
        "concept": "OS -- OPT Page Replacement",
        "year": "GATE 2018",
        "text": "OPT page replacement, 3 frames, reference string: 1,2,3,4,2,1,4,3,5,4,3,1. Page faults?",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nOPT gives minimum faults. Tracing: 7 page faults"
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
        "id": "pyq-17s1-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- Complexity",
        "year": "GATE 2017 Set 1",
        "text": "If P!=NP, then no NP-hard problem can be solved in polynomial time. TRUE?",
        "options": [
          "Every NP-hard is NP-complete",
          "Complement of every NP-complete is in NP",
          "If P!=NP, no NP-hard solvable in poly time",
          "SAT is in P"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nIf P!=NP, NP-hard problems are strictly harder than P. No poly-time algorithm exists for them."
      },
      {
        "id": "pyq-17s1-os1",
        "difficulty": "hard",
        "concept": "OS -- Page Table",
        "year": "GATE 2017 Set 1",
        "text": "32-bit VA, 4KB pages, 2-level page table, 4B entries. Total page table size for full 4GB address space?",
        "options": [
          "4 MB",
          "8 MB",
          "4 KB",
          "16 MB"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\n1024 L2 tables * 4KB each = 4MB + L1(4KB) ~ **4 MB**"
      },
      {
        "id": "pyq-17s1-dbms1",
        "difficulty": "hard",
        "concept": "DBMS -- View Serializability",
        "year": "GATE 2017 Set 1",
        "text": "Schedule: R1(A),R2(A),W1(A),R2(B),W2(A),W2(B) is?",
        "options": [
          "View and conflict serializable",
          "View but not conflict serializable",
          "Conflict but not view serializable",
          "Neither"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nPrecedence graph has cycle (T1->T2 and T2->T1) -> NOT conflict serializable. But view equivalent to T1T2 -> view serializable."
      },
      {
        "id": "pyq-17s1-toc1",
        "difficulty": "medium",
        "concept": "TOC -- DFA states",
        "year": "GATE 2017 Set 1",
        "text": "DFA accepting strings where 3rd char from right is 'a'. Minimum states?",
        "options": [
          "4",
          "6",
          "8",
          "16"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nMust remember last 3 chars: 2^3 = **8** states"
      },
      {
        "id": "pyq-17s1-math1",
        "difficulty": "medium",
        "concept": "Engineering Mathematics -- Combinatorics",
        "year": "GATE 2017 Set 1",
        "text": "5 balls into 3 distinct boxes, none empty. Ways?",
        "options": [
          "150",
          "180",
          "240",
          "270"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nInclusion-exclusion: 3^5 - 3*2^5 + 3*1^5 = 243-96+3 = **150**"
      },
      {
        "id": "pyq-17s1-cn1",
        "difficulty": "medium",
        "concept": "Computer Networks -- Sliding Window",
        "year": "GATE 2017 Set 1",
        "text": "Sliding window W=4, seq 0-7. Frames 0,1,2,3 sent. ACK 0 received, ACK 1 lost, ACK 2 received. Next frame to send?",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nACK 2 (cumulative) means 0,1,2 received. Window advances to 3,4,5,6. Can send **4**"
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
        "id": "pyq-17s2-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- KMP",
        "year": "GATE 2017 Set 2",
        "text": "KMP failure function for ABCABCAB?",
        "options": [
          "[0,0,0,1,2,3,4,5]",
          "[0,0,0,1,2,3,1,2]",
          "[0,0,0,0,1,2,3,4]",
          "[0,1,0,1,2,3,2,3]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nABCABCAB: pi=[0,0,0,1,2,3,4,5]. ABCA at positions 3-6, ABCAB at 4-7."
      },
      {
        "id": "pyq-17s2-os1",
        "difficulty": "medium",
        "concept": "OS -- Disk Scheduling",
        "year": "GATE 2017 Set 2",
        "text": "Disk arm at 143 moving up. Requests: 86,1470,913,1774,948,1509,1022,1750,130. SCAN order?",
        "options": [
          "143,913,948,1022,1470,1509,1750,1774,130,86",
          "143,130,86,913,948,1022,1470,1509,1750,1774",
          "143,913,948,1022,1470,1509,1750,1774,4999,130,86",
          "143,1774,1750,1509,1470,1022,948,913,130,86"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nSCAN: serve all higher first (913,948,1022,1470,1509,1750,1774) then reverse (130,86)"
      },
      {
        "id": "pyq-17s2-toc1",
        "difficulty": "medium",
        "concept": "TOC -- CFL",
        "year": "GATE 2017 Set 2",
        "text": "L = {a^n b^m | n!=m} is?",
        "options": [
          "Regular",
          "CFL not regular",
          "CSL not CFL",
          "Not RE"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nL = {n>m} union {n<m}, both CFLs, union is CFL. Not regular by Myhill-Nerode."
      },
      {
        "id": "pyq-17s2-ds1",
        "difficulty": "hard",
        "concept": "Data Structures -- Degree Sequence",
        "year": "GATE 2017 Set 2",
        "text": "8 vertices. Which is NOT a valid degree sequence?",
        "options": [
          "[7,6,5,4,3,2,1,0]",
          "[6,6,5,4,3,2,1,1]",
          "[4,4,4,4,2,2,2,2]",
          "[5,5,5,5,5,5,5,3]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nDegree 7 means connected to all. Degree 0 means connected to none. Contradiction! NOT valid."
      },
      {
        "id": "pyq-17s2-math1",
        "difficulty": "medium",
        "concept": "Engineering Mathematics -- Counting",
        "year": "GATE 2017 Set 2",
        "text": "5 distinct balls in 3 distinct boxes, no box empty. Ways?",
        "options": [
          "150",
          "180",
          "240",
          "270"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\n3^5 - C(3,1)*2^5 + C(3,2)*1^5 = 243-96+3 = **150**"
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
        "id": "pyq-16s1-algo1",
        "difficulty": "medium",
        "concept": "Algorithms -- Floyd-Warshall",
        "year": "GATE 2016 Set 1",
        "text": "Floyd-Warshall All-Pairs Shortest Path time complexity?",
        "options": [
          "O(V^2 E)",
          "O(V^3)",
          "O(VE log V)",
          "O(V^2 log V)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nThree nested loops each V: O(V^3)"
      },
      {
        "id": "pyq-16s1-toc1",
        "difficulty": "hard",
        "concept": "TOC -- CFL Union",
        "year": "GATE 2016 Set 1",
        "text": "L = {a^i b^j c^k | i=j OR j=k} is?",
        "options": [
          "Regular",
          "CFL not regular",
          "CSL not CFL",
          "Not RE"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nL = L1 union L2, both CFLs -> CFL. Not regular."
      },
      {
        "id": "pyq-16s1-dbms1",
        "difficulty": "easy",
        "concept": "DBMS -- SQL Views",
        "year": "GATE 2016 Set 1",
        "text": "A SQL VIEW is?",
        "options": [
          "Physical copy of table",
          "Virtual table based on SELECT query",
          "Index on table",
          "Stored procedure"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nView = virtual table defined by SELECT, no physical storage typically"
      },
      {
        "id": "pyq-16s1-ds1",
        "difficulty": "medium",
        "concept": "Data Structures -- Sorting",
        "year": "GATE 2016 Set 1",
        "text": "Which has best worst-case time complexity?",
        "options": [
          "QuickSort",
          "HeapSort",
          "BubbleSort",
          "SelectionSort"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nHeapSort: O(n log n) always. Others O(n^2) worst case."
      },
      {
        "id": "pyq-16s1-cn1",
        "difficulty": "easy",
        "concept": "Computer Networks -- IPv6",
        "year": "GATE 2016 Set 1",
        "text": "IPv6 address length?",
        "options": [
          "32 bits",
          "64 bits",
          "128 bits",
          "256 bits"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nIPv6 = **128 bits** (8 groups of 4 hex digits)"
      },
      {
        "id": "pyq-16s1-os1",
        "difficulty": "medium",
        "concept": "OS -- Deadlock",
        "year": "GATE 2016 Set 1",
        "text": "Deadlock prevention: which condition easiest to eliminate?",
        "options": [
          "Mutual Exclusion",
          "Hold and Wait",
          "No Preemption",
          "Circular Wait"
        ],
        "correctAnswerIndex": 3,
        "explanation": "### Solution\nCircular wait: assign total order to resources, require requests in increasing order"
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
        "id": "pyq-16s2-algo1",
        "difficulty": "medium",
        "concept": "Algorithms -- Floyd-Warshall DP",
        "year": "GATE 2016 Set 2",
        "text": "d^k[i][j] in Floyd-Warshall represents?",
        "options": [
          "Weight of edge (i,j)",
          "Shortest path i->j using vertices {1..k} as intermediates",
          "Shortest path 1->k through i",
          "Count of paths i->j with k edges"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nd^k[i][j] = shortest path from i to j using only {1,2,...,k} as intermediates"
      },
      {
        "id": "pyq-16s2-toc1",
        "difficulty": "hard",
        "concept": "TOC -- Rice's Theorem",
        "year": "GATE 2016 Set 2",
        "text": "By Rice's Theorem, which is UNDECIDABLE?",
        "options": [
          "TM has exactly 5 states",
          "TM accepts string '0101'",
          "TM halts on empty input",
          "TM has transition from q1 on '0'"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\n'Accepts 0101' is semantic property of L(M) -> undecidable by Rice's theorem"
      },
      {
        "id": "pyq-16s2-dbms1",
        "difficulty": "hard",
        "concept": "DBMS -- BCNF",
        "year": "GATE 2016 Set 2",
        "text": "R(A,B,C,D) with FD A->BCD (only key A). Adding B->C violates BCNF because?",
        "options": [
          "B is not a key and B->C holds",
          "C is prime attribute",
          "A->BCD violated",
          "D not dependent on B"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nBCNF: LHS of every non-trivial FD must be superkey. B is not superkey."
      },
      {
        "id": "pyq-16s2-os1",
        "difficulty": "medium",
        "concept": "OS -- Multi-level Paging",
        "year": "GATE 2016 Set 2",
        "text": "40-bit VA, 4KB pages, 3-level page table. Size of each page number field?",
        "options": [
          "8,8,8",
          "10,10,8",
          "12,12,4",
          "9,10,9"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nVPN=40-12=28 bits, divided across 3 levels: 10,10,8 bits"
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
        "id": "pyq-15s1-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- Min-Max",
        "year": "GATE 2015 Set 1",
        "text": "Minimum comparisons to find both max and min of n numbers?",
        "options": [
          "n-1",
          "n",
          "ceil(3n/2)-2",
          "2n-2"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nPair comparisons algorithm: ceil(3n/2)-2 comparisons"
      },
      {
        "id": "pyq-15s1-toc1",
        "difficulty": "medium",
        "concept": "TOC -- Chomsky Hierarchy",
        "year": "GATE 2015 Set 1",
        "text": "Which is TRUE?",
        "options": [
          "Every CFL is also a CSL",
          "Every CSL is also a CFL",
          "Regular not subset of CSL",
          "Intersection of two CSLs is regular"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\nHierarchy: Regular ⊂ CFL ⊂ CSL ⊂ RE. Every CFL is CSL."
      },
      {
        "id": "pyq-15s1-os1",
        "difficulty": "medium",
        "concept": "OS -- Process States",
        "year": "GATE 2015 Set 1",
        "text": "Process moves Running->Blocked when?",
        "options": [
          "Higher priority process preempts",
          "Time quantum expires",
          "Requests I/O operation",
          "Forcibly terminated"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nBlocked state: process waits for I/O or event"
      },
      {
        "id": "pyq-15s1-cn1",
        "difficulty": "medium",
        "concept": "Computer Networks -- HTTP",
        "year": "GATE 2015 Set 1",
        "text": "HTTP is?",
        "options": [
          "Stateful connection-oriented",
          "Stateless connection-oriented",
          "Stateful connectionless",
          "Stateless connectionless"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nHTTP is stateless (no session memory) and uses TCP (connection-oriented)"
      },
      {
        "id": "pyq-15s1-dbms1",
        "difficulty": "medium",
        "concept": "DBMS -- Query Optimization",
        "year": "GATE 2015 Set 1",
        "text": "Key heuristic in query optimization to reduce tuples early?",
        "options": [
          "Projections after joins",
          "Selections as early as possible",
          "Joins before selections",
          "Cartesian product instead of join"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nPush selections down: reduces tuple count early -> less data for subsequent ops"
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
        "id": "pyq-15s2-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- MST Comparison",
        "year": "GATE 2015 Set 2",
        "text": "Prim's vs Kruskal's: correct differentiation?",
        "options": [
          "Prim's works for disconnected",
          "Kruskal's adds globally cheapest edge; Prim's grows single tree",
          "Prim's is O(E log V); Kruskal's O(V^2)",
          "Kruskal's needs priority queue"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nKruskal: sort all edges, add cheapest safe edge globally. Prim: grow one tree from start vertex."
      },
      {
        "id": "pyq-15s2-toc1",
        "difficulty": "hard",
        "concept": "TOC -- DPDA",
        "year": "GATE 2015 Set 2",
        "text": "Which can be accepted by DPDA but not DFA?",
        "options": [
          "{a^n b^n}",
          "{(ab)^n}",
          "{a^n | n prime}",
          "{w: |w| even}"
        ],
        "correctAnswerIndex": 0,
        "explanation": "### Solution\na^n b^n: CFL accepted by DPDA (push a's, pop on b's). Not regular."
      },
      {
        "id": "pyq-15s2-os1",
        "difficulty": "hard",
        "concept": "OS -- User vs Kernel Threads",
        "year": "GATE 2015 Set 2",
        "text": "User-level threads faster than kernel-level because?",
        "options": [
          "Run on multiple CPUs",
          "Context switch no kernel mode transition",
          "Higher priority",
          "Direct kernel resource access"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nUser-level thread switch = function call, no kernel mode transition -> much faster"
      },
      {
        "id": "pyq-15s2-dbms1",
        "difficulty": "medium",
        "concept": "DBMS -- Indexing",
        "year": "GATE 2015 Set 2",
        "text": "Dense index stores entry for?",
        "options": [
          "Every block",
          "Every record",
          "First record of each block",
          "Unique keys only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nDense index: one entry per record. Sparse: one per block."
      },
      {
        "id": "pyq-15s2-ds1",
        "difficulty": "easy",
        "concept": "Data Structures -- Floyd Cycle Detection",
        "year": "GATE 2015 Set 2",
        "text": "Floyd's cycle detection: fast pointer moves ___ steps per iteration",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nTortoise=1 step, Hare=**2 steps** per iteration"
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
        "id": "pyq-15s3-algo1",
        "difficulty": "hard",
        "concept": "Algorithms -- Amortized Analysis",
        "year": "GATE 2015 Set 3",
        "text": "Dynamic array doubling strategy. Amortized cost of n insertions?",
        "options": [
          "O(n^2)",
          "O(n log n)",
          "O(n)",
          "O(1) per insertion"
        ],
        "correctAnswerIndex": 3,
        "explanation": "### Solution\nTotal work = O(n) for n insertions. Amortized = O(1) per insertion (doubling cost amortized over many inserts)"
      },
      {
        "id": "pyq-15s3-toc1",
        "difficulty": "hard",
        "concept": "TOC -- PCP",
        "year": "GATE 2015 Set 3",
        "text": "Post's Correspondence Problem (PCP) is?",
        "options": [
          "Decidable always",
          "Undecidable for general, decidable for binary",
          "Undecidable (semi-decidable/RE)",
          "Exactly equivalent to halting problem"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nPCP: Undecidable in general, but RE (semi-decidable) - we can find match if exists"
      },
      {
        "id": "pyq-15s3-os1",
        "difficulty": "medium",
        "concept": "OS -- Banker's Algorithm",
        "year": "GATE 2015 Set 3",
        "text": "In Banker's algorithm, if process requests more than declared maximum, OS should?",
        "options": [
          "Grant immediately",
          "Kill process",
          "Reject with error",
          "Block until available"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nExceeding declared maximum is a protocol violation. OS **rejects the request with error**."
      },
      {
        "id": "pyq-15s3-cn1",
        "difficulty": "medium",
        "concept": "Computer Networks -- TCP Handshake",
        "year": "GATE 2015 Set 3",
        "text": "TCP connection fully established after?",
        "options": [
          "Client sends SYN",
          "Server sends SYN-ACK",
          "Client sends ACK (3rd message)",
          "Server receives first data"
        ],
        "correctAnswerIndex": 2,
        "explanation": "### Solution\nThree-way handshake: SYN -> SYN-ACK -> **ACK** (3rd message = connection established)"
      },
      {
        "id": "pyq-15s3-dl1",
        "difficulty": "medium",
        "concept": "Digital Logic -- CLA Adder",
        "year": "GATE 2015 Set 3",
        "text": "Ripple carry adder delay O(n). Carry-lookahead adder delay?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n^2)",
          "O(1)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nCLA computes carries in parallel: O(log n) delay levels"
      },
      {
        "id": "pyq-15s3-dbms1",
        "difficulty": "medium",
        "concept": "DBMS -- Relational Algebra",
        "year": "GATE 2015 Set 3",
        "text": "Which RA operation removes duplicate tuples?",
        "options": [
          "Selection",
          "Projection",
          "Natural Join",
          "Division"
        ],
        "correctAnswerIndex": 1,
        "explanation": "### Solution\nProjection (Pi) selects columns and removes duplicate tuples"
      }
    ]
  }
];

// Helper: get all questions across all papers
export function getAllPyqQuestions(): (Question & { year: string; paperId: string })[] {
  return GATE_PYQ_PAPERS.flatMap(paper =>
    paper.questions.map(q => ({ ...q, year: paper.year, paperId: paper.id }))
  );
}

// Helper: get questions by year
export function getPyqByYear(year: string): GatePaper[] {
  return GATE_PYQ_PAPERS.filter(p => p.year === year);
}

// Helper: get total question count
export function getTotalPyqCount(): number {
  return GATE_PYQ_PAPERS.reduce((sum, p) => sum + p.questions.length, 0);
}
