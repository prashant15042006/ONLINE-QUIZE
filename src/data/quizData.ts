export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: Difficulty;
  concept?: string;
  shortExplanation?: string;
  wrongOptionsExplanations?: string[];
  year?: string;
  source?: string;
}

export interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  chapters: Chapter[];
}

export interface Branch {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  subjects: Subject[];
}

export interface Exam {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  totalSubjects: number;
  branches?: Branch[];
  subjects?: Subject[];
}

// ============================================================================
// GATE CS & IT — 12 CORE OFFICIAL SUBJECTS WITH ALL CHAPTERS & QUESTIONS
// ============================================================================

// 1. Engineering Mathematics
const gateCS_EM: Subject = {
  id: 'gate-cs-em', name: 'Engineering Mathematics',
  description: 'Linear Algebra, Calculus, Discrete Math, Probability & Statistics',
  chapters: [
    {
      id: 'gate-cs-em-la', name: 'Linear Algebra',
      description: 'Matrices, Determinants, Rank, Eigenvalues, Eigenvectors, System of Linear Equations',
      questions: [
        { id:'la-1', difficulty:'easy', text:'The rank of a 3×3 identity matrix is:', options:['0','1','2','3'], correctAnswerIndex:3, explanation:'### Detailed Solution:\nA 3×3 identity matrix has 3 linearly independent rows and columns, so its rank is 3.', concept: 'Matrix Rank' },
        { id:'la-2', difficulty:'easy', text:'If A is an n×n square matrix, det(kA) equals:', options:['k·det(A)','k²·det(A)','kⁿ·det(A)','det(A)'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nMultiplying an n×n matrix by scalar k scales all n rows by k. Therefore det(kA) = kⁿ·det(A).', concept: 'Determinants' },
        { id:'la-3', difficulty:'medium', text:'For matrix A = [[2,1],[1,2]], the eigenvalues are:', options:['1 and 3','0 and 4','2 and 2','−1 and 5'], correctAnswerIndex:0, explanation:'### Detailed Solution:\ndet(A - λI) = (2-λ)² - 1 = 0 ⟹ λ² - 4λ + 3 = 0 ⟹ λ = 1, 3.', concept: 'Eigenvalues' },
        { id:'la-4', difficulty:'hard', text:'If A is a 4×4 matrix with rank 2, then the nullity of A is:', options:['2','4','0','1'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nBy Rank-Nullity Theorem: Rank(A) + Nullity(A) = n. Here 2 + Nullity = 4 ⟹ Nullity = 2.', concept: 'Rank-Nullity Theorem' },
      ]
    },
    {
      id: 'gate-cs-em-calc', name: 'Calculus',
      description: 'Limits, Continuity, Differentiability, Maxima & Minima, Definite Integrals',
      questions: [
        { id:'calc-1', difficulty:'easy', text:'The limit of (sin x)/x as x approaches 0 is:', options:['0','1','Infinity','Undefined'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nBy L\'Hôpital\'s rule or standard trigonometric limit: lim(x→0) sin(x)/x = 1.', concept: 'Limits' },
        { id:'calc-2', difficulty:'medium', text:'The value of ∫₀^π sin(x) dx is:', options:['0','1','2','π'], correctAnswerIndex:2, explanation:'### Detailed Solution:\n∫₀^π sin(x) dx = [-cos(x)]₀^π = -cos(π) - (-cos(0)) = 1 + 1 = 2.', concept: 'Definite Integration' },
      ]
    },
    {
      id: 'gate-cs-em-dm', name: 'Discrete Mathematics',
      description: 'Propositional Logic, Sets, Relations, Functions, Lattices, Graph Theory',
      questions: [
        { id:'dm-1', difficulty:'easy', text:'The number of edges in a complete graph K₅ is:', options:['5','10','15','20'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nEdges in Kₙ = n(n-1)/2 = 5×4/2 = 10.', concept: 'Graph Theory' },
        { id:'dm-2', difficulty:'medium', text:'In a connected planar graph with V=10 vertices and E=15 edges, the number of faces F is:', options:['5','7','8','10'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nEuler\'s formula: V - E + F = 2 ⟹ 10 - 15 + F = 2 ⟹ F = 7.', concept: 'Planar Graphs' },
      ]
    },
    {
      id: 'gate-cs-em-prob', name: 'Probability & Statistics',
      description: 'Random variables, Uniform, Normal, Exponential & Poisson Distributions, Bayes Theorem',
      questions: [
        { id:'prob-1', difficulty:'medium', text:'If a fair coin is tossed 3 times, probability of getting exactly 2 heads is:', options:['1/8','3/8','1/2','5/8'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nTotal outcomes = 8. Favorable = {HHT, HTH, THH} (3). Probability = 3/8.', concept: 'Binomial Probability' },
      ]
    }
  ]
};

// 2. Digital Logic
const gateCS_DL: Subject = {
  id: 'gate-cs-dl', name: 'Digital Logic',
  description: 'Boolean algebra, K-Maps, Combinational & Sequential Circuits, Number Systems',
  chapters: [
    {
      id: 'gate-cs-dl-bool', name: 'Boolean Algebra & Minimization',
      description: 'K-Maps, Canonical SOP/POS, Logic Gates',
      questions: [
        { id:'dl-1', difficulty:'easy', text:'Which gate produces output 1 only when all inputs are 1?', options:['OR','NAND','AND','XOR'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nAND gate output is 1 if and only if all inputs are 1.', concept: 'Logic Gates' },
        { id:'dl-2', difficulty:'medium', text:'A 4-to-1 Multiplexer requires how many select lines?', options:['1','2','3','4'], correctAnswerIndex:1, explanation:'### Detailed Solution:\n2ⁿ inputs require n select lines. 4 = 2² ⟹ 2 select lines.', concept: 'Multiplexers' },
      ]
    },
    {
      id: 'gate-cs-dl-comb', name: 'Combinational Circuits',
      description: 'Adders, Subtractors, Encoders, Decoders, PLAs',
      questions: [
        { id:'dl-comb-1', difficulty:'medium', text:'Full Adder circuit adds how many total input bits?', options:['2','3','4','8'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nFull Adder adds 2 input bits and 1 carry-in bit = 3 total bits.', concept: 'Adders' },
      ]
    },
    {
      id: 'gate-cs-dl-seq', name: 'Sequential Circuits',
      description: 'Flip-Flops, Counters, Shift Registers, State Diagrams',
      questions: [
        { id:'dl-seq-1', difficulty:'medium', text:'How many flip-flops are needed to construct a MOD-12 counter?', options:['3','4','5','12'], correctAnswerIndex:1, explanation:'### Detailed Solution:\n2ⁿ ≥ 12 ⟹ n = 4 flip-flops.', concept: 'Counters' },
      ]
    }
  ]
};

// 3. Computer Organization & Architecture (COA)
const gateCS_COA: Subject = {
  id: 'gate-cs-coa', name: 'Computer Organization & Architecture',
  description: 'Machine instructions, Memory hierarchy, Pipelining, Cache memory, I/O Interrupts',
  chapters: [
    {
      id: 'coa-inst', name: 'Instruction Set Architecture & Addressing Modes',
      description: 'RISC vs CISC, Instruction Formats, Addressing Modes',
      questions: [
        { id:'coa-inst-1', difficulty:'easy', text:'Which addressing mode uses operand specified directly inside instruction?', options:['Direct','Immediate','Register Indirect','Indexed'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nIn Immediate addressing, operand value is explicitly present in instruction.', concept: 'Addressing Modes' },
      ]
    },
    {
      id: 'coa-pipeline', name: 'Pipelining & Instruction Parallelism',
      description: 'Pipeline stages, Structural/Data/Control hazards, Speedup',
      questions: [
        { id:'coa-1', difficulty:'medium', text:'A 5-stage pipeline has delays 150ps, 120ps, 180ps, 160ps, 140ps. Clock cycle time is:', options:['140ps','150ps','180ps','750ps'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nClock period = max stage delay = max(150, 120, 180, 160, 140) = 180ps.', concept: 'Pipelining' },
      ]
    },
    {
      id: 'coa-cache', name: 'Memory Hierarchy & Cache Memory',
      description: 'Direct, Set-Associative mapping, Cache coherence, TLB',
      questions: [
        { id:'coa-2', difficulty:'hard', text:'In a direct-mapped cache of size 16KB with block size 32 bytes, number of lines is:', options:['256','512','1024','2048'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nLines = Cache Size / Block Size = 16KB / 32B = 16384 / 32 = 512 lines.', concept: 'Cache Mapping' },
      ]
    }
  ]
};

// 4. Programming & Data Structures
const gateCS_DS: Subject = {
  id: 'gate-cs-ds', name: 'Programming & Data Structures',
  description: 'C Programming, Pointers, Arrays, Stacks, Queues, Linked Lists, Trees, Heaps',
  chapters: [
    {
      id: 'ds-cprog', name: 'C Programming & Pointers',
      description: 'Functions, Recursion, Pointers, Scope, Structures',
      questions: [
        { id:'ds-c1', difficulty:'easy', text:'What is the size of pointer variable on 64-bit architecture?', options:['2 bytes','4 bytes','8 bytes','16 bytes'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nOn a 64-bit OS, memory addresses are 64 bits (8 bytes) long.', concept: 'C Pointers' },
      ]
    },
    {
      id: 'ds-linear', name: 'Linear Data Structures (Arrays, Stacks, Queues)',
      description: 'Stack applications, Queue operations, Evaluation of Infix/Postfix',
      questions: [
        { id:'ds-lin-1', difficulty:'easy', text:'Which data structure follows LIFO (Last In First Out) principle?', options:['Queue','Stack','Tree','Graph'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nStack strictly follows LIFO order.', concept: 'Stack' },
      ]
    },
    {
      id: 'ds-trees', name: 'Trees & Binary Search Trees',
      description: 'BST operations, Traversals, AVL Trees, Binary Heaps',
      questions: [
        { id:'ds-1', difficulty:'easy', text:'Inorder traversal of a Binary Search Tree produces keys in:', options:['Unsorted order','Descending order','Ascending order','Level order'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nInorder (Left-Root-Right) visits BST keys in strictly ascending sorted order.', concept: 'BST Traversal' },
      ]
    }
  ]
};

// 5. Algorithms
const gateCS_Algo: Subject = {
  id: 'gate-cs-algo', name: 'Algorithms',
  description: 'Asymptotic notation, Sorting, Greedy, Dynamic Programming, Graph Algorithms',
  chapters: [
    {
      id: 'algo-asymptotic', name: 'Asymptotic Analysis & Recurrences',
      description: 'Big-O, Big-Omega, Master Theorem, Recurrence Trees',
      questions: [
        { id:'algo-asym-1', difficulty:'medium', text:'According to Master Theorem, recurrence T(n) = 2T(n/2) + O(n) solves to:', options:['O(n)','O(n log n)','O(n²)','O(2ⁿ)'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nCase 2 of Master Theorem: a=2, b=2, k=1. log_b(a) = 1 = k ⟹ O(n log n).', concept: 'Master Theorem' },
      ]
    },
    {
      id: 'algo-sort', name: 'Sorting & Searching Algorithms',
      description: 'Merge Sort, Quick Sort, Heap Sort, Counting Sort',
      questions: [
        { id:'algo-1', difficulty:'easy', text:'Which sorting algorithm guarantees O(n log n) worst-case time?', options:['Quick Sort','Insertion Sort','Merge Sort','Bubble Sort'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nMerge Sort time complexity is O(n log n) in best, average and worst cases.', concept: 'Merge Sort' },
      ]
    },
    {
      id: 'algo-graph', name: 'Graph Algorithms & Dynamic Programming',
      description: 'BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall, 0/1 Knapsack',
      questions: [
        { id:'algo-2', difficulty:'hard', text:'Floyd-Warshall all-pairs shortest path algorithm complexity is:', options:['O(V²)','O(V³)','O(VE)','O(E log V)'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nFloyd-Warshall uses 3 nested loops running V times each ⟹ O(V³).', concept: 'Floyd-Warshall' },
      ]
    }
  ]
};

// 6. Theory of Computation (TOC)
const gateCS_TOC: Subject = {
  id: 'gate-cs-toc', name: 'Theory of Computation',
  description: 'DFA, NFA, Regular Expressions, Context-Free Grammars, Pushdown Automata, Turing Machines',
  chapters: [
    {
      id: 'toc-regular', name: 'Regular Languages & Finite Automata',
      description: 'DFA, NFA, Regular Expressions, Pumping Lemma',
      questions: [
        { id:'toc-1', difficulty:'medium', text:'The language L = {aⁿbⁿ | n ≥ 0} is:', options:['Regular','Context-Free but not Regular','Context-Sensitive only','Undecidable'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nCounting equal number of a\'s and b\'s requires memory stack ⟹ Context-Free.', concept: 'Context-Free Languages' },
      ]
    },
    {
      id: 'toc-tm', name: 'Turing Machines & Decidability',
      description: 'Turing Machine models, Halting Problem, Undecidability, Reductions',
      questions: [
        { id:'toc-tm-1', difficulty:'hard', text:'The Halting Problem for Turing Machines is:', options:['Decidable','Undecidable','Semi-decidable only','Context-Free'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nHalting problem is undecidable as proven by Alan Turing using diagonalization.', concept: 'Halting Problem' },
      ]
    }
  ]
};

// 7. Compiler Design
const gateCS_CD: Subject = {
  id: 'gate-cs-cd', name: 'Compiler Design',
  description: 'Lexical analysis, LL/LR Parsing, SDT, Intermediate Code, Code Optimization',
  chapters: [
    {
      id: 'cd-lex', name: 'Lexical Analysis & Tokens',
      description: 'Lexemes, Regular Expressions to Automata, Token Generators',
      questions: [
        { id:'cd-lex-1', difficulty:'easy', text:'Which component of compiler converts stream of characters into tokens?', options:['Lexical Analyzer','Parser','Semantic Analyzer','Code Generator'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nLexical analyzer (Scanner) reads source characters and produces tokens.', concept: 'Lexical Analysis' },
      ]
    },
    {
      id: 'cd-parsing', name: 'Parsing Techniques & Grammars',
      description: 'LL(1), LR(0), SLR(1), LALR(1), CLR(1) Parsers',
      questions: [
        { id:'cd-1', difficulty:'medium', text:'Which is the most powerful bottom-up parser?', options:['SLR(1)','LALR(1)','CLR(1)','LR(0)'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nCLR(1) maintains distinct lookahead sets without merging states.', concept: 'Parsing' },
      ]
    }
  ]
};

// 8. Operating Systems
const gateCS_OS: Subject = {
  id: 'gate-cs-os', name: 'Operating Systems',
  description: 'Processes, CPU Scheduling, Synchronization, Deadlocks, Paging, Disk Scheduling',
  chapters: [
    {
      id: 'os-proc', name: 'Process Management & CPU Scheduling',
      description: 'Process states, FCFS, SJF, Round Robin, Priority Scheduling',
      questions: [
        { id:'os-proc-1', difficulty:'easy', text:'Which scheduling algorithm can cause starvation?', options:['Round Robin','Shortest Job First (SJF)','FCFS','FIFO'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nSJF continuously favors short jobs, causing long jobs to starve.', concept: 'CPU Scheduling' },
      ]
    },
    {
      id: 'os-sync', name: 'Synchronization & Deadlocks',
      description: 'Semaphores, Critical Section, Banker\'s Algorithm, Deadlock conditions',
      questions: [
        { id:'os-1', difficulty:'medium', text:'Banker\'s Algorithm is used for:', options:['Deadlock Detection','Deadlock Avoidance','Deadlock Recovery','CPU Scheduling'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nBanker\'s algorithm tests safety state to avoid deadlocks.', concept: 'Banker\'s Algorithm' },
      ]
    },
    {
      id: 'os-mem', name: 'Memory Management & Paging',
      description: 'Paging, Segmentation, Virtual Memory, Page Replacement LRU/FIFO',
      questions: [
        { id:'os-mem-1', difficulty:'medium', text:'Belady\'s Anomaly occurs in which page replacement algorithm?', options:['LRU','FIFO','Optimal','MFU'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nIn FIFO, increasing page frames can sometimes increase page faults (Belady\'s Anomaly).', concept: 'Page Replacement' },
      ]
    }
  ]
};

// 9. Databases (DBMS)
const gateCS_DBMS: Subject = {
  id: 'gate-cs-dbms', name: 'Database Management Systems',
  description: 'ER Model, Relational Algebra, SQL, Normalization, Transactions, Concurrency, Indexing',
  chapters: [
    {
      id: 'dbms-sql', name: 'Relational Algebra & SQL',
      description: 'Tuple Calculus, Relational Operators, SELECT, JOIN, Group By',
      questions: [
        { id:'dbms-sql-1', difficulty:'easy', text:'Which SQL clause is used to filter group results after aggregation?', options:['WHERE','HAVING','ORDER BY','GROUP BY'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nHAVING clause filters aggregated group results.', concept: 'SQL Queries' },
      ]
    },
    {
      id: 'dbms-norm', name: 'Normalization & Functional Dependencies',
      description: '1NF, 2NF, 3NF, BCNF, Functional Dependencies, Closure',
      questions: [
        { id:'dbms-1', difficulty:'easy', text:'Relation is in BCNF if for every non-trivial FD X → Y:', options:['X is a superkey','Y is a prime attribute','X is prime','Y is superkey'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nBCNF requires determinant X to be a superkey for every non-trivial FD.', concept: 'BCNF' },
      ]
    },
    {
      id: 'dbms-trans', name: 'Transactions & Concurrency Control',
      description: 'ACID properties, Serializability, 2PL, Locking, Timestamping',
      questions: [
        { id:'dbms-tr-1', difficulty:'medium', text:'Strict Two-Phase Locking (Strict 2PL) guarantees:', options:['Conflict Serializability & No Cascading Aborts','Freedom from deadlock','No lock contention','Linear scale'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nStrict 2PL holds exclusive locks until commit, preventing cascading aborts.', concept: '2PL Protocol' },
      ]
    }
  ]
};

// 10. Computer Networks
const gateCS_CN: Subject = {
  id: 'gate-cs-cn', name: 'Computer Networks',
  description: 'OSI/TCP-IP layers, Framing, Subnetting, Routing, TCP/UDP, DNS/HTTP',
  chapters: [
    {
      id: 'cn-link', name: 'Data Link Layer & MAC Protocols',
      description: 'Framing, CRC Error Detection, Sliding Window, CSMA/CD',
      questions: [
        { id:'cn-link-1', difficulty:'medium', text:'In Go-Back-N ARQ with 3-bit sequence numbers, maximum sender window size is:', options:['8','7','4','3'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nMax sender window size in Go-Back-N = 2ⁿ - 1 = 2³ - 1 = 7.', concept: 'Sliding Window' },
      ]
    },
    {
      id: 'cn-ip', name: 'Network Layer & Subnetting',
      description: 'IPv4/IPv6, Subnet masks, CIDR, OSPF, BGP, Routing',
      questions: [
        { id:'cn-1', difficulty:'easy', text:'The subnet mask /26 provides how many usable host IP addresses?', options:['64','62','32','30'], correctAnswerIndex:1, explanation:'### Detailed Solution:\n/26 leaves 32 - 26 = 6 host bits. Usable IPs = 2⁶ - 2 = 62.', concept: 'Subnetting' },
      ]
    },
    {
      id: 'cn-trans', name: 'Transport & Application Layer',
      description: 'TCP 3-way handshake, Congestion Control, UDP, DNS, HTTP',
      questions: [
        { id:'cn-tr-1', difficulty:'easy', text:'Which transport protocol is connectionless and un-reliable?', options:['TCP','UDP','SCTP','FTP'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nUDP (User Datagram Protocol) is connectionless with zero overhead guarantee.', concept: 'Transport Protocols' },
      ]
    }
  ]
};

// 11. Software Engineering
const gateCS_SE: Subject = {
  id: 'gate-cs-se', name: 'Software Engineering',
  description: 'SDLC Models, Agile, Software Testing, Cyclomatic Complexity, Metrics',
  chapters: [
    {
      id: 'se-sdlc', name: 'SDLC Models & Software Testing',
      description: 'Waterfall, Agile, Black-box & White-box testing, Cyclomatic complexity',
      questions: [
        { id:'se-1', difficulty:'easy', text:'Cyclomatic complexity of a flow graph with 10 edges and 7 nodes is:', options:['3','5','4','2'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nV(G) = E - N + 2 = 10 - 7 + 2 = 5.', concept: 'Cyclomatic Complexity' },
      ]
    }
  ]
};

// 12. General Aptitude
const gateCS_GA: Subject = {
  id: 'gate-cs-ga', name: 'General Aptitude',
  description: 'Numerical Ability, Verbal Ability, Analytical Reasoning, Spatial Aptitude',
  chapters: [
    {
      id: 'ga-num', name: 'Numerical Ability & Quantitative Aptitude',
      description: 'Percentages, Ratios, Speed-Distance, Time-Work, Permutation-Combination',
      questions: [
        { id:'ga-1', difficulty:'easy', text:'A train 150m long travels at 54 km/h. Time to cross a pole is:', options:['10s','12s','15s','8s'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nSpeed = 54 × (5/18) = 15 m/s. Time = 150 / 15 = 10s.', concept: 'Speed & Distance' },
      ]
    }
  ]
};

// ============================================================================
// OTHER GATE BRANCHES (ECE, ME, CE, EE)
// ============================================================================
const gateECE_Signals: Subject = {
  id: 'ece-signals', name: 'Signals & Systems',
  description: 'LTI systems, Fourier, Laplace, Z-transform, Convolution',
  chapters: [
    {
      id: 'ece-fourier', name: 'Fourier Transform & LTI Systems',
      description: 'CTFT, DTFT, Sampling theorem, Convolution',
      questions: [
        { id:'ece-1', difficulty:'easy', text:'The Fourier transform of a unit impulse δ(t) is:', options:['0','1','jω','1/jω'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nFourier Transform of unit impulse δ(t) = 1 across all frequencies.', concept: 'Fourier Transform' },
      ]
    }
  ]
};

// ============================================================================
// JEE EXAM SUBJECTS (PHYSICS, CHEMISTRY, MATHEMATICS)
// ============================================================================
const jeePhysics: Subject = {
  id: 'jee-physics', name: 'Physics',
  description: 'Mechanics, Electrodynamics, Optics, Thermodynamics, Modern Physics',
  chapters: [
    {
      id: 'jee-mech', name: 'Mechanics & Laws of Motion',
      description: 'Kinematics, Newton\'s Laws, Work-Energy, Projectile',
      questions: [
        { id:'jee-p1', difficulty:'easy', text:'Maximum height of a projectile launched at speed u at angle θ is:', options:['u²sin²θ / 2g','u²sin(2θ) / g','u² / 2g','u²cos²θ / g'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nH_max = (u sin θ)² / (2g).', concept: 'Projectile Motion' },
      ]
    }
  ]
};

const jeeChemistry: Subject = {
  id: 'jee-chem', name: 'Chemistry',
  description: 'Physical, Organic and Inorganic Chemistry',
  chapters: [
    {
      id: 'jee-org', name: 'Organic Chemistry',
      description: 'Hydrocarbons, Reaction mechanisms, Functional groups',
      questions: [
        { id:'jee-c1', difficulty:'easy', text:'Markovnikov\'s rule applies to which addition reaction?', options:['Electrophilic addition to asymmetric alkenes','Free radical addition','Nucleophilic substitution','Elimination'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nMarkovnikov addition attaches electrophile H+ to carbon with more H atoms.', concept: 'Organic Mechanisms' },
      ]
    }
  ]
};

const jeeMath: Subject = {
  id: 'jee-math', name: 'Mathematics',
  description: 'Calculus, Algebra, Coordinate Geometry, Trigonometry',
  chapters: [
    {
      id: 'jee-calc', name: 'Calculus & Limits',
      description: 'Limits, Derivatives, Definite Integration, Differential Equations',
      questions: [
        { id:'jee-m1', difficulty:'easy', text:'lim(x→0) [sin(x) / x] equals:', options:['0','1','∞','Undefined'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nStandard trigonometric limit value is 1.', concept: 'Limits' },
      ]
    }
  ]
};

// ============================================================================
// NEET EXAM SUBJECTS (BOTANY, ZOOLOGY, PHYSICS, CHEMISTRY)
// ============================================================================
const neetBotany: Subject = {
  id: 'neet-botany', name: 'Botany',
  description: 'Cell biology, Plant physiology, Genetics, Ecology',
  chapters: [
    {
      id: 'neet-bot-cell', name: 'Cell Biology & Photosynthesis',
      description: 'Chloroplasts, Mitochondria, Mitosis, Light Reaction',
      questions: [
        { id:'neet-b1', difficulty:'easy', text:'Photosynthesis takes place in which plant organelle?', options:['Mitochondria','Chloroplast','Ribosome','Golgi apparatus'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nChloroplasts contain chlorophyll pigments for light absorption.', concept: 'Photosynthesis' },
      ]
    }
  ]
};

const neetZoology: Subject = {
  id: 'neet-zoology', name: 'Zoology',
  description: 'Human physiology, Reproduction, Animal kingdom, Genetics',
  chapters: [
    {
      id: 'neet-zoo-physio', name: 'Human Physiology',
      description: 'Circulation, Respiration, Excretion, Endocrine system',
      questions: [
        { id:'neet-z1', difficulty:'easy', text:'Normal human blood pH range is:', options:['6.8 - 7.0','7.35 - 7.45','7.5 - 8.0','7.0 - 7.2'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nHuman blood pH is strictly maintained between 7.35 and 7.45.', concept: 'Blood pH' },
      ]
    }
  ]
};

// ============================================================================
// SSC CGL SUBJECTS
// ============================================================================
const sscQuant: Subject = {
  id: 'ssc-quant', name: 'Quantitative Aptitude',
  description: 'Percentage, Profit & Loss, Interest, Algebra, Geometry',
  chapters: [
    {
      id: 'ssc-arith', name: 'Arithmetic & Percentage',
      description: 'Percentages, Ratio, Profit-Loss, Interest',
      questions: [
        { id:'ssc-q1', difficulty:'easy', text:'25% of 480 equals:', options:['100','110','120','130'], correctAnswerIndex:2, explanation:'### Detailed Solution:\n25% of 480 = 0.25 × 480 = 120.', concept: 'Percentage' },
      ]
    }
  ]
};

// ============================================================================
// ALL EXAMS DEFINITIONS MASTER LIST
// ============================================================================
export const EXAMS_DATA: Exam[] = [
  {
    id: 'gate',
    name: 'GATE',
    fullName: 'Graduate Aptitude Test in Engineering',
    description: 'National entrance exam for IIT M.Tech/Ph.D and PSU recruitment.',
    icon: '🎓',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-violet-600',
    totalSubjects: 12,
    branches: [
      {
        id: 'cs',
        name: 'CS & IT',
        fullName: 'Computer Science & Information Technology',
        icon: '💻',
        subjects: [
          gateCS_EM,
          gateCS_DL,
          gateCS_COA,
          gateCS_DS,
          gateCS_Algo,
          gateCS_TOC,
          gateCS_CD,
          gateCS_OS,
          gateCS_DBMS,
          gateCS_CN,
          gateCS_SE,
          gateCS_GA,
        ]
      },
      {
        id: 'ece',
        name: 'ECE',
        fullName: 'Electronics & Communication Engineering',
        icon: '📡',
        subjects: [gateECE_Signals]
      }
    ]
  },
  {
    id: 'jee',
    name: 'JEE',
    fullName: 'Joint Entrance Examination (Main + Advanced)',
    description: 'Engineering entrance test for IITs, NITs, and IIITs.',
    icon: '⚗️',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-cyan-500',
    totalSubjects: 3,
    subjects: [jeePhysics, jeeChemistry, jeeMath]
  },
  {
    id: 'neet',
    name: 'NEET',
    fullName: 'National Eligibility cum Entrance Test',
    description: 'Medical entrance exam for MBBS/BDS admissions in India.',
    icon: '🩺',
    color: '#10b981',
    gradient: 'from-emerald-500 to-teal-500',
    totalSubjects: 4,
    subjects: [neetBotany, neetZoology, jeePhysics, jeeChemistry]
  },
  {
    id: 'ssc-cgl',
    name: 'SSC CGL',
    fullName: 'SSC Combined Graduate Level',
    description: 'Central government job recruitment for Group B & C posts.',
    icon: '💼',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-orange-500',
    totalSubjects: 4,
    subjects: [sscQuant]
  }
];

export function getChapterQuestions(chapter: Chapter, difficulty: Difficulty, count: number): Question[] {
  let pool = chapter.questions.filter((q) => q.difficulty === difficulty);
  if (pool.length < count) {
    pool = chapter.questions;
  }
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
