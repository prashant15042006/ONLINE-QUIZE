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

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 1: ENGINEERING MATHEMATICS
// ─────────────────────────────────────────────────────────────
const gateCS_EM: Subject = {
  id: 'gate-cs-em', name: 'Engineering Mathematics',
  description: 'Linear Algebra, Calculus, Discrete Math, Probability & Statistics',
  chapters: [
    {
      id: 'gate-cs-em-la', name: 'Linear Algebra',
      description: 'Matrices, Eigenvalues, Eigenvectors, Rank, System of equations',
      questions: [
        { id:'la-1', difficulty:'easy', text:'The rank of a 3×3 identity matrix is:', options:['0','1','2','3'], correctAnswerIndex:3, explanation:'### Detailed Solution:\nA 3×3 identity matrix has three linearly independent rows (and columns), so its rank equals the dimension = 3.', concept: 'Matrix Rank' },
        { id:'la-2', difficulty:'easy', text:'If A is a square matrix of order n, then det(kA) equals:', options:['k·det(A)','k²·det(A)','kⁿ·det(A)','det(A)'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nMultiplying an n×n matrix by scalar k scales all n rows by k. Therefore: det(kA) = kⁿ · det(A).', concept: 'Determinant Properties' },
        { id:'la-3', difficulty:'medium', text:'For matrix A = [[2,1],[1,2]], the eigenvalues are:', options:['1 and 3','0 and 4','2 and 2','−1 and 5'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nCharacteristic equation: det(A − λI) = (2−λ)² − 1 = 0 \n$$\\implies λ² − 4λ + 3 = 0 \\implies (λ−1)(λ−3) = 0$$\nEigenvalues are λ₁ = 1 and λ₂ = 3.', concept: 'Eigenvalues & Eigenvectors' },
        { id:'la-4', difficulty:'hard', text:'If A is a 4×4 matrix with rank 2, then the nullity of A is:', options:['2','4','0','1'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nBy Rank-Nullity Theorem:\n$$\\text{Rank}(A) + \\text{Nullity}(A) = n$$\nGiven n = 4 and Rank = 2, Nullity = 4 − 2 = 2.', concept: 'Rank-Nullity Theorem' },
      ]
    },
    {
      id: 'gate-cs-em-dm', name: 'Discrete Mathematics',
      description: 'Propositional logic, sets, relations, graph theory, combinatorics',
      questions: [
        { id:'dm-1', difficulty:'easy', text:'The number of edges in a complete graph K₅ is:', options:['5','10','15','20'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nA complete graph Kₙ has n(n−1)/2 edges. For K₅: 5×4/2 = 10 edges.', concept: 'Graph Theory' },
        { id:'dm-2', difficulty:'medium', text:'In a connected planar graph with V=10 vertices and E=15 edges, the number of faces F is:', options:['5','7','8','10'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nBy Euler\'s formula for planar graphs: V − E + F = 2.\nF = 2 − 10 + 15 = 7 faces.', concept: 'Planar Graphs' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 2: DIGITAL LOGIC
// ─────────────────────────────────────────────────────────────
const gateCS_DL: Subject = {
  id: 'gate-cs-dl', name: 'Digital Logic',
  description: 'Boolean algebra, K-Maps, Combinational & Sequential Circuits',
  chapters: [
    {
      id: 'gate-cs-dl-bool', name: 'Boolean Algebra & Minimization',
      description: 'K-Maps, Canonical SOP/POS, Logic Gates',
      questions: [
        { id:'dl-1', difficulty:'easy', text:'Which gate produces output 1 only when all inputs are 1?', options:['OR','NAND','AND','XOR'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nAND gate output is 1 if and only if all input bits are 1.', concept: 'Logic Gates' },
        { id:'dl-2', difficulty:'medium', text:'A 4-to-1 Multiplexer requires how many select lines?', options:['1','2','3','4'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nA 2ⁿ-to-1 MUX requires n select lines. For 4 = 2² inputs, 2 select lines are needed.', concept: 'Multiplexers' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 3: COMPUTER ORGANIZATION & ARCHITECTURE
// ─────────────────────────────────────────────────────────────
const gateCS_COA: Subject = {
  id: 'gate-cs-coa', name: 'Computer Organization & Architecture',
  description: 'Machine instructions, Memory hierarchy, Pipelining, Cache memory',
  chapters: [
    {
      id: 'coa-pipeline', name: 'Pipelining & CPU Control',
      description: 'Pipeline hazards, Speedup, Instruction cycles, Control unit',
      questions: [
        { id:'coa-1', difficulty:'medium', text:'A 5-stage pipeline has stage delays of 150ps, 120ps, 180ps, 160ps, and 140ps. Clock cycle time is:', options:['140ps','150ps','180ps','750ps'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nClock period of a pipeline is bounded by the slowest stage delay:\n$$T_{\\text{clock}} = \\max(150, 120, 180, 160, 140) = 180\\text{ ps}$$', concept: 'Pipelining Clock Rate' },
        { id:'coa-2', difficulty:'hard', text:'In a direct-mapped cache of size 16KB with block size 32 bytes, the number of lines in cache is:', options:['256','512','1024','2048'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nNumber of cache lines = Cache Size / Block Size = 16KB / 32B = 16384 / 32 = 512 lines.', concept: 'Cache Memory Mapping' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 4: PROGRAMMING & DATA STRUCTURES
// ─────────────────────────────────────────────────────────────
const gateCS_DS: Subject = {
  id: 'gate-cs-ds', name: 'Programming & Data Structures',
  description: 'C Programming, Arrays, Stacks, Queues, Linked Lists, Trees, Heaps',
  chapters: [
    {
      id: 'ds-trees', name: 'Trees & Binary Search Trees',
      description: 'BST operations, Traversals, AVL Trees, Binary Heaps',
      questions: [
        { id:'ds-1', difficulty:'easy', text:'Inorder traversal of a Binary Search Tree produces keys in:', options:['Unsorted order','Descending order','Ascending order','Level-by-level order'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nInorder traversal visits Left Subtree $\\rightarrow$ Root $\\rightarrow$ Right Subtree, which processes keys in strictly ascending sorted order.', concept: 'BST Traversal' },
        { id:'ds-2', difficulty:'medium', text:'The worst-case time complexity to search an element in an un-balanced BST is:', options:['O(1)','O(log n)','O(n)','O(n log n)'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nIn a skewed BST (degenerated into a linked list), searching takes O(n) worst-case time.', concept: 'BST Search Complexity' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 5: ALGORITHMS
// ─────────────────────────────────────────────────────────────
const gateCS_Algo: Subject = {
  id: 'gate-cs-algo', name: 'Algorithms',
  description: 'Sorting, Searching, Greedy, Dynamic Programming, Graph Algorithms',
  chapters: [
    {
      id: 'algo-sort', name: 'Sorting & Searching',
      description: 'Merge sort, Quick sort, Heap sort, Complexity bounds',
      questions: [
        { id:'algo-1', difficulty:'easy', text:'Which sorting algorithm guarantees O(n log n) time in all cases (worst, average, best)?', options:['Quick Sort','Insertion Sort','Merge Sort','Bubble Sort'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nMerge Sort divides array into equal halves recursively. Recurrence $T(n) = 2T(n/2) + O(n)$ yields $O(n \\log n)$ in all cases.', concept: 'Merge Sort' },
        { id:'algo-2', difficulty:'hard', text:'Floyd-Warshall all-pairs shortest path algorithm has time complexity:', options:['O(V²)','O(V³)','O(VE)','O(E log V)'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nFloyd-Warshall uses 3 nested loops each running V times $\\implies O(V³)$.', concept: 'Floyd-Warshall Algorithm' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 6: THEORY OF COMPUTATION (TOC)
// ─────────────────────────────────────────────────────────────
const gateCS_TOC: Subject = {
  id: 'gate-cs-toc', name: 'Theory of Computation',
  description: 'Automata, Regular Languages, CFG, Pushdown Automata, Turing Machines',
  chapters: [
    {
      id: 'toc-regular', name: 'Regular Languages & Automata',
      description: 'DFA, NFA, Regular Expressions, Pumping Lemma',
      questions: [
        { id:'toc-1', difficulty:'medium', text:'The language L = {aⁿbⁿ | n ≥ 0} is:', options:['Regular','Context-Free but not Regular','Context-Sensitive only','Undecidable'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nCounting equal number of a\'s and b\'s requires memory. DFA lacks memory, but Pushdown Automaton (PDA) handles it using stack $\\implies$ Context-Free.', concept: 'Chomsky Hierarchy' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 7: COMPILER DESIGN
// ─────────────────────────────────────────────────────────────
const gateCS_CD: Subject = {
  id: 'gate-cs-cd', name: 'Compiler Design',
  description: 'Lexical analysis, Parsing LL/LR, Syntax Directed Translation, Code Generation',
  chapters: [
    {
      id: 'cd-parsing', name: 'Parsing Techniques',
      description: 'LL(1), LR(0), SLR(1), LALR(1), CLR(1) Parsers',
      questions: [
        { id:'cd-1', difficulty:'medium', text:'Which of the following parser families is the most powerful bottom-up parser?', options:['SLR(1)','LALR(1)','Canonical LR(1) / CLR(1)','LR(0)'], correctAnswerIndex:2, explanation:'### Detailed Solution:\nCLR(1) is the most powerful deterministic bottom-up parser because it maintains full distinct lookahead states without merging.', concept: 'Bottom-Up Parsing' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 8: OPERATING SYSTEMS
// ─────────────────────────────────────────────────────────────
const gateCS_OS: Subject = {
  id: 'gate-cs-os', name: 'Operating Systems',
  description: 'Processes, CPU Scheduling, Synchronization, Deadlocks, Paging, Virtual Memory',
  chapters: [
    {
      id: 'os-sync', name: 'Synchronization & Deadlocks',
      description: 'Semaphores, Critical Section, Banker\'s Algorithm, Deadlock conditions',
      questions: [
        { id:'os-1', difficulty:'medium', text:'Banker\'s Algorithm is used for:', options:['Deadlock Detection','Deadlock Avoidance','Deadlock Recovery','CPU Scheduling'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nBanker\'s algorithm tests safety state before allocating resources to ensure deadlock avoidance.', concept: 'Banker\'s Algorithm' },
        { id:'os-2', difficulty:'hard', text:'In a system with 4 processes sharing 3 units of a resource, deadlock is guaranteed NOT to occur if each process requires at most:', options:['1 unit','2 units','3 units','4 units'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nMaximum demand condition for deadlock-free operation:\n$$\\sum (Max_i - 1) < Total \\implies 4 \\times (m - 1) < 3 \\implies m = 1$$', concept: 'Deadlock Necessary Conditions' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 9: DATABASES (DBMS)
// ─────────────────────────────────────────────────────────────
const gateCS_DBMS: Subject = {
  id: 'gate-cs-dbms', name: 'Database Management Systems',
  description: 'ER Model, Relational Algebra, SQL, Normalization, Transactions, Concurrency',
  chapters: [
    {
      id: 'dbms-norm', name: 'Normalization & Keys',
      description: '1NF, 2NF, 3NF, BCNF, Functional Dependencies',
      questions: [
        { id:'dbms-1', difficulty:'easy', text:'A relation is in BCNF if for every non-trivial functional dependency X → Y:', options:['X is a superkey','Y is a prime attribute','X is a prime attribute','Y is a candidate key'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nBCNF condition requires that the determinant X must be a superkey for every functional dependency X → Y.', concept: 'BCNF Normalization' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 10: COMPUTER NETWORKS
// ─────────────────────────────────────────────────────────────
const gateCS_CN: Subject = {
  id: 'gate-cs-cn', name: 'Computer Networks',
  description: 'OSI/TCP-IP layers, IP Addressing, Subnetting, TCP/UDP, Routing',
  chapters: [
    {
      id: 'cn-ip', name: 'IP Addressing & Subnetting',
      description: 'IPv4, Subnet masks, CIDR notation, Routing protocols',
      questions: [
        { id:'cn-1', difficulty:'easy', text:'The subnet mask /26 provides how many usable host IP addresses?', options:['64','62','32','30'], correctAnswerIndex:1, explanation:'### Detailed Solution:\n/26 leaves 32 − 26 = 6 bits for hosts. Total IPs = 2⁶ = 64. Usable = 64 − 2 = 62.', concept: 'IPv4 Subnetting' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 11: SOFTWARE ENGINEERING
// ─────────────────────────────────────────────────────────────
const gateCS_SE: Subject = {
  id: 'gate-cs-se', name: 'Software Engineering',
  description: 'SDLC Models, Agile, Design patterns, Testing, Software Metrics',
  chapters: [
    {
      id: 'se-sdlc', name: 'SDLC Models & Testing',
      description: 'Waterfall, Agile, Black-box & White-box testing, Cyclomatic complexity',
      questions: [
        { id:'se-1', difficulty:'easy', text:'Cyclomatic complexity of a control flow graph with 10 edges and 7 nodes is:', options:['3','5','4','2'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nCyclomatic complexity $V(G) = E − N + 2 = 10 − 7 + 2 = 5$.', concept: 'Cyclomatic Complexity' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 1. GATE CS & IT — SUBJECT 12: GENERAL APTITUDE
// ─────────────────────────────────────────────────────────────
const gateCS_GA: Subject = {
  id: 'gate-cs-ga', name: 'General Aptitude',
  description: 'Numerical Ability, Verbal Reasoning, Analytical Reasoning, Spatial Aptitude',
  chapters: [
    {
      id: 'ga-num', name: 'Numerical Ability & Aptitude',
      description: 'Percentages, Ratio, Speed-Distance, Permutation-Combination',
      questions: [
        { id:'ga-1', difficulty:'easy', text:'A train 150m long travels at 54 km/h. Time taken to cross a pole is:', options:['10s','12s','15s','8s'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nSpeed = 54 × (5/18) = 15 m/s. Time = Distance / Speed = 150 / 15 = 10 seconds.', concept: 'Speed & Distance' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// OTHER GATE BRANCHES (ECE, ME, CE, EE, IN, CH, BT)
// ─────────────────────────────────────────────────────────────
const gateECE_Signals: Subject = {
  id: 'ece-signals', name: 'Signals & Systems',
  description: 'LTI systems, Fourier, Laplace, Z-transform, Convolution',
  chapters: [
    {
      id: 'ece-fourier', name: 'Fourier Transform & LTI Systems',
      description: 'CTFT, DTFT, Sampling theorem, Convolution',
      questions: [
        { id:'ece-1', difficulty:'easy', text:'The Fourier transform of a unit impulse δ(t) is:', options:['0','1','jω','1/jω'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nFourier Transform of impulse $\\delta(t) = 1$ for all frequencies.', concept: 'Fourier Transform' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// JEE EXAM SUBJECTS (PHYSICS, CHEMISTRY, MATHS)
// ─────────────────────────────────────────────────────────────
const jeePhysics: Subject = {
  id: 'jee-physics', name: 'Physics',
  description: 'Mechanics, Electrodynamics, Optics, Modern Physics, Thermodynamics',
  chapters: [
    {
      id: 'jee-mech', name: 'Mechanics & Motion',
      description: 'Kinematics, Newton\'s Laws, Work-Energy, Projectile',
      questions: [
        { id:'jee-p1', difficulty:'easy', text:'Maximum height reached by a projectile launched at speed u at angle θ is:', options:['u²sin²θ / 2g','u²sin(2θ) / g','u² / 2g','u²cos²θ / g'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nVertical component $v_y = u\\sin\\theta$. Using $v^2 = u^2 - 2gh \\implies H_{max} = \\frac{u^2 \\sin^2\\theta}{2g}$.', concept: 'Projectile Motion' },
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
        { id:'jee-c1', difficulty:'easy', text:'Markovnikov\'s rule applies to which addition reaction?', options:['Electrophilic addition to asymmetric alkenes','Free radical addition','Nucleophilic substitution','Elimination'], correctAnswerIndex:0, explanation:'### Detailed Solution:\nMarkovnikov\'s rule states that in electrophilic addition to an asymmetric alkene, H+ attaches to the carbon with more hydrogen atoms.', concept: 'Markovnikov Addition' },
      ]
    }
  ]
};

const jeeMath: Subject = {
  id: 'jee-math', name: 'Mathematics',
  description: 'Calculus, Algebra, Coordinate Geometry, Trigonometry',
  chapters: [
    {
      id: 'jee-calc', name: 'Calculus & Integration',
      description: 'Limits, Derivatives, Definite Integration, Differential Equations',
      questions: [
        { id:'jee-m1', difficulty:'easy', text:'lim(x→0) [sin(x) / x] equals:', options:['0','1','∞','Undefined'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nStandard limit: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.', concept: 'Standard Limits' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// NEET EXAM SUBJECTS (BOTANY, ZOOLOGY, PHYSICS, CHEMISTRY)
// ─────────────────────────────────────────────────────────────
const neetBotany: Subject = {
  id: 'neet-botany', name: 'Botany',
  description: 'Cell biology, Plant physiology, Genetics, Ecology',
  chapters: [
    {
      id: 'neet-bot-cell', name: 'Cell Structure & Function',
      description: 'Chloroplasts, Mitochondria, Cell division, Mitosis',
      questions: [
        { id:'neet-b1', difficulty:'easy', text:'Photosynthesis takes place in which plant organelle?', options:['Mitochondria','Chloroplast','Ribosome','Golgi apparatus'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nChloroplasts contain chlorophyll pigments and thylakoid membranes for light reactions.', concept: 'Plant Cell Biology' },
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
        { id:'neet-z1', difficulty:'easy', text:'Normal human blood pH range is:', options:['6.8 - 7.0','7.35 - 7.45','7.5 - 8.0','7.0 - 7.2'], correctAnswerIndex:1, explanation:'### Detailed Solution:\nHuman blood pH is strictly buffered between 7.35 and 7.45.', concept: 'Human Blood Physiology' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// SSC CGL SUBJECTS
// ─────────────────────────────────────────────────────────────
const sscQuant: Subject = {
  id: 'ssc-quant', name: 'Quantitative Aptitude',
  description: 'Percentage, Profit & Loss, Simple & Compound Interest, Algebra, Geometry',
  chapters: [
    {
      id: 'ssc-arith', name: 'Arithmetic & Percentage',
      description: 'Percentages, Ratio, Profit-Loss, Interest',
      questions: [
        { id:'ssc-q1', difficulty:'easy', text:'25% of 480 equals:', options:['100','110','120','130'], correctAnswerIndex:2, explanation:'### Detailed Solution:\n25% of 480 = 0.25 × 480 = 120.', concept: 'Percentage Calculation' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// EXAM DEFINITIONS LIST
// ─────────────────────────────────────────────────────────────
export const EXAMS_DATA: Exam[] = [
  {
    id: 'gate',
    name: 'GATE',
    fullName: 'Graduate Aptitude Test in Engineering',
    description: 'National exam for M.Tech/Ph.D admissions in IITs/IISc and PSU recruitment.',
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
    description: 'Gateway to IITs, NITs, and IIITs. Tests Physics, Chemistry & Mathematics.',
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
    description: 'Single entrance test for MBBS, BDS and medical courses in India.',
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
    description: 'Recruitment to Group B & C central government posts.',
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
