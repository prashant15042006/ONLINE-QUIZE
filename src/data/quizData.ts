export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: Difficulty;
  concept?: string;
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
// GATE CS & IT — SUBJECT 1: ENGINEERING MATHEMATICS
// ============================================================================
const gateCS_EM: Subject = {
  id: 'gate-cs-em', name: 'Engineering Mathematics',
  description: 'Linear Algebra, Calculus, Discrete Math, Probability & Statistics',
  chapters: [
    {
      id: 'em-la', name: 'Linear Algebra',
      description: 'Matrices, Rank, Eigenvalues, Systems of Equations',
      questions: [
        { id:'la-1', difficulty:'easy', concept:'Matrix Rank', text:'The rank of a 3×3 identity matrix I₃ is:', options:['0','1','2','3'], correctAnswerIndex:3, explanation:'### Solution\nA 3×3 identity matrix has 3 linearly independent rows, so rank = 3.' },
        { id:'la-2', difficulty:'easy', concept:'Determinant', text:'For an n×n matrix A, det(kA) equals:', options:['k·det(A)','k²·det(A)','kⁿ·det(A)','det(A)'], correctAnswerIndex:2, explanation:'### Solution\nScaling all rows by k multiplies determinant by kⁿ.\n$$\\det(kA) = k^n \\cdot \\det(A)$$' },
        { id:'la-3', difficulty:'medium', concept:'Eigenvalues', text:'Matrix A = [[2,1],[1,2]]. Its eigenvalues are:', options:['1 and 3','0 and 4','2 and 2','−1 and 5'], correctAnswerIndex:0, explanation:'### Solution\nCharacteristic equation: $(2-\\lambda)^2 - 1 = 0$\n$$\\lambda^2 - 4\\lambda + 3 = 0 \\implies \\lambda = 1, 3$$' },
        { id:'la-4', difficulty:'medium', concept:'Rank-Nullity', text:'If A is a 4×4 matrix with rank 2, then nullity of A is:', options:['2','4','0','1'], correctAnswerIndex:0, explanation:'### Solution\nRank-Nullity Theorem: $\\text{rank}(A) + \\text{nullity}(A) = n$\n$$2 + \\text{nullity} = 4 \\implies \\text{nullity} = 2$$' },
        { id:'la-5', difficulty:'hard', concept:'Eigenvalues', text:'If λ is an eigenvalue of A, then eigenvalue of A² is:', options:['2λ','λ²','λ+1','1/λ'], correctAnswerIndex:1, explanation:'### Solution\nIf $Av = \\lambda v$, then $A^2 v = A(Av) = A(\\lambda v) = \\lambda(Av) = \\lambda^2 v$. So eigenvalue of $A^2$ is $\\lambda^2$.' },
        { id:'la-6', difficulty:'easy', concept:'Matrix Properties', text:'A matrix is said to be singular if:', options:['Its determinant is 1','Its determinant is 0','It is symmetric','It is upper triangular'], correctAnswerIndex:1, explanation:'### Solution\nA square matrix is singular (non-invertible) if and only if $\\det(A) = 0$.' },
        { id:'la-7', difficulty:'medium', concept:'Trace', text:'For a 3×3 matrix A with eigenvalues 2, 3, 5, the trace of A is:', options:['10','6','30','7'], correctAnswerIndex:0, explanation:'### Solution\nTrace of a matrix = sum of eigenvalues = $2 + 3 + 5 = 10$.' },
        { id:'la-8', difficulty:'hard', concept:'Cayley-Hamilton', text:'According to Cayley-Hamilton theorem, every square matrix satisfies:', options:['Its own characteristic equation','A linear equation','The identity equation','None of these'], correctAnswerIndex:0, explanation:'### Solution\nCayley-Hamilton theorem states every matrix satisfies its own characteristic polynomial $p(\\lambda) = 0 \\implies p(A) = 0$.' },
        { id:'la-9', difficulty:'medium', concept:'Orthogonality', text:'For an orthogonal matrix Q, which property holds?', options:['Q² = I','QQᵀ = I','det(Q) = 0','Q = Qᵀ'], correctAnswerIndex:1, explanation:'### Solution\nAn orthogonal matrix satisfies $QQ^T = Q^TQ = I$, meaning columns/rows are orthonormal.' },
        { id:'la-10', difficulty:'hard', concept:'LU Decomposition', text:'In LU decomposition, L is a _____ matrix and U is a _____ matrix:', options:['Upper triangular, Lower triangular','Lower triangular, Upper triangular','Diagonal, Identity','Identity, Diagonal'], correctAnswerIndex:1, explanation:'### Solution\nLU decomposition: $A = LU$ where L is Lower triangular and U is Upper triangular.' },
      ]
    },
    {
      id: 'em-calc', name: 'Calculus',
      description: 'Limits, Continuity, Differentiation, Integration, Maxima & Minima',
      questions: [
        { id:'calc-1', difficulty:'easy', concept:'Limits', text:'$\\lim_{x \\to 0} \\frac{\\sin x}{x}$ equals:', options:['0','1','∞','undefined'], correctAnswerIndex:1, explanation:'### Solution\nThis is a standard fundamental limit:\n$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$' },
        { id:'calc-2', difficulty:'easy', concept:'Definite Integral', text:'$\\int_0^{\\pi} \\sin(x)\\,dx$ equals:', options:['0','1','2','π'], correctAnswerIndex:2, explanation:'### Solution\n$$\\int_0^{\\pi} \\sin(x)\\,dx = [-\\cos x]_0^{\\pi} = -\\cos\\pi + \\cos 0 = 1 + 1 = 2$$' },
        { id:'calc-3', difficulty:'medium', concept:'Differentiation', text:'Derivative of $x^x$ with respect to x is:', options:['$x^x$','$x^x(1 + \\ln x)$','$x \\cdot x^{x-1}$','$x^x \\cdot \\ln x$'], correctAnswerIndex:1, explanation:'### Solution\nLet $y = x^x$. Taking ln: $\\ln y = x \\ln x$. Differentiating: $\\frac{1}{y}y\' = 1 + \\ln x$. So $y\' = x^x(1 + \\ln x)$.' },
        { id:'calc-4', difficulty:'hard', concept:'Maxima Minima', text:'Critical points of $f(x) = x^3 - 3x^2 + 2$ occur at:', options:['x = 0, 2','x = 1, 3','x = 0, 3','x = 2, 4'], correctAnswerIndex:0, explanation:'### Solution\n$f\'(x) = 3x^2 - 6x = 3x(x-2) = 0 \\implies x = 0$ or $x = 2$.' },
        { id:'calc-5', difficulty:'medium', concept:'Partial Derivatives', text:'If $f(x, y) = x^2y + y^3$, then $\\partial f/\\partial x$ is:', options:['$2xy$','$x^2 + 3y^2$','$2xy + y^3$','$2x$'], correctAnswerIndex:0, explanation:'### Solution\n$\\frac{\\partial f}{\\partial x} = 2xy$ (treat y as constant).' },
        { id:'calc-6', difficulty:'medium', concept:'Mean Value Theorem', text:'Mean Value Theorem states that for f continuous on [a,b], there exists c in (a,b) such that:', options:["$f'(c) = \\frac{f(b) - f(a)}{b - a}$","$f(c) = \\frac{f(a) + f(b)}{2}$","$f'(c) = 0$","$f(c) = f(a)$"], correctAnswerIndex:0, explanation:'### Solution\nMVT: $f\'(c) = \\frac{f(b)-f(a)}{b-a}$ — the instantaneous rate equals average rate of change.' },
      ]
    },
    {
      id: 'em-dm', name: 'Discrete Mathematics',
      description: 'Set Theory, Relations, Functions, Graph Theory, Combinatorics, Logic',
      questions: [
        { id:'dm-1', difficulty:'easy', concept:'Graph Theory', text:'Number of edges in complete graph $K_5$ is:', options:['5','10','15','20'], correctAnswerIndex:1, explanation:'### Solution\n$$|E(K_n)| = \\frac{n(n-1)}{2} = \\frac{5 \\times 4}{2} = 10$$' },
        { id:'dm-2', difficulty:'medium', concept:'Planar Graphs', text:'A connected planar graph with V=10, E=15. Number of faces F =', options:['5','7','8','10'], correctAnswerIndex:1, explanation:'### Solution\nEuler\'s formula: $V - E + F = 2 \\implies 10 - 15 + F = 2 \\implies F = 7$.' },
        { id:'dm-3', difficulty:'easy', concept:'Propositional Logic', text:'The contrapositive of "P → Q" is:', options:['¬P → ¬Q','Q → P','¬Q → ¬P','P ∧ ¬Q'], correctAnswerIndex:2, explanation:'### Solution\nContrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$ (logically equivalent).' },
        { id:'dm-4', difficulty:'medium', concept:'Counting', text:'Number of ways to arrange 5 distinct books on a shelf is:', options:['25','120','60','720'], correctAnswerIndex:1, explanation:'### Solution\n$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$ arrangements.' },
        { id:'dm-5', difficulty:'hard', concept:'Graph Theory', text:'A tree with n vertices has exactly how many edges?', options:['n','n-1','n+1','2n'], correctAnswerIndex:1, explanation:'### Solution\nBy definition, a tree with n vertices has exactly $n - 1$ edges (connected acyclic graph).' },
        { id:'dm-6', difficulty:'medium', concept:'Relations', text:'A relation R is an equivalence relation if it is:', options:['Reflexive and Transitive only','Symmetric and Transitive only','Reflexive, Symmetric, and Transitive','Reflexive and Antisymmetric'], correctAnswerIndex:2, explanation:'### Solution\nEquivalence relation must satisfy all three: Reflexive ($xRx$), Symmetric ($xRy \\implies yRx$), Transitive ($xRy, yRz \\implies xRz$).' },
        { id:'dm-7', difficulty:'easy', concept:'Sets', text:'$|A \\cup B| = |A| + |B| - |A \\cap B|$ is known as:', options:['Inclusion-Exclusion Principle','De Morgan\'s Law','Pigeonhole Principle','Bayes Theorem'], correctAnswerIndex:0, explanation:'### Solution\nThis is the Inclusion-Exclusion Principle for set cardinality.' },
        { id:'dm-8', difficulty:'hard', concept:'Graph Coloring', text:'The minimum number of colors required to color a planar graph such that no adjacent vertices share color (4-color theorem) is at most:', options:['3','4','5','6'], correctAnswerIndex:1, explanation:'### Solution\nThe 4-Color Theorem states every planar map/graph can be colored with at most 4 colors.' },
      ]
    },
    {
      id: 'em-prob', name: 'Probability & Statistics',
      description: 'Probability, Distributions, Expectation, Bayes Theorem',
      questions: [
        { id:'prob-1', difficulty:'easy', concept:'Probability', text:'A fair coin tossed 3 times. P(exactly 2 heads) =', options:['1/8','3/8','1/2','5/8'], correctAnswerIndex:1, explanation:'### Solution\n$P = \\binom{3}{2}(0.5)^2(0.5)^1 = 3 \\times \\frac{1}{8} = \\frac{3}{8}$.' },
        { id:'prob-2', difficulty:'medium', concept:'Bayes Theorem', text:'Bayes Theorem is used to calculate:', options:['Joint probability','Conditional probability using prior knowledge','Marginal probability','Independence of events'], correctAnswerIndex:1, explanation:'### Solution\nBayes Theorem: $P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$ — updates prior belief with new evidence.' },
        { id:'prob-3', difficulty:'medium', concept:'Distributions', text:'For Poisson distribution with mean λ, variance equals:', options:['λ','λ²','√λ','1/λ'], correctAnswerIndex:0, explanation:'### Solution\nFor Poisson distribution: Mean = Variance = $\\lambda$. This is a unique property.' },
        { id:'prob-4', difficulty:'hard', concept:'Expectation', text:'E[X²] for a fair die (faces 1-6) is:', options:['3.5','12.25','91/6','7'], correctAnswerIndex:2, explanation:'### Solution\n$$E[X^2] = \\frac{1^2+2^2+3^2+4^2+5^2+6^2}{6} = \\frac{91}{6} \\approx 15.17$$' },
        { id:'prob-5', difficulty:'easy', concept:'Normal Distribution', text:'In a normal distribution, approximately what % of data falls within 2 standard deviations of mean?', options:['68%','95%','99.7%','50%'], correctAnswerIndex:1, explanation:'### Solution\n68-95-99.7 rule: $\\mu \\pm 2\\sigma$ covers approximately **95%** of data in normal distribution.' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 2: DIGITAL LOGIC
// ============================================================================
const gateCS_DL: Subject = {
  id: 'gate-cs-dl', name: 'Digital Logic',
  description: 'Boolean Algebra, K-Maps, Combinational & Sequential Circuits',
  chapters: [
    {
      id: 'dl-bool', name: 'Boolean Algebra & Minimization',
      description: 'Boolean laws, K-Maps, SOP/POS, Logic Gates',
      questions: [
        { id:'dl-1', difficulty:'easy', concept:'Logic Gates', text:'Which gate produces output 1 only when ALL inputs are 1?', options:['OR','NAND','AND','XOR'], correctAnswerIndex:2, explanation:'### Solution\nAND gate: Output is 1 only when all inputs are 1.\n| A | B | A·B |\n|---|---|---|\n| 0 | 0 | 0 |\n| 0 | 1 | 0 |\n| 1 | 0 | 0 |\n| 1 | 1 | 1 |' },
        { id:'dl-2', difficulty:'easy', concept:'De Morgan', text:"De Morgan's law states: $\\overline{A \\cdot B}$ equals:", options:['$\\bar{A} \\cdot \\bar{B}$','$\\bar{A} + \\bar{B}$','$A + B$','$A \\cdot B$'], correctAnswerIndex:1, explanation:'### Solution\nDe Morgan\'s First Law: $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$.' },
        { id:'dl-3', difficulty:'medium', concept:'K-Maps', text:'Minimum SOP expression for a 2-variable K-map with minterms {0,1,2,3} is:', options:['AB','A+B','1','0'], correctAnswerIndex:2, explanation:'### Solution\nAll 4 cells filled → group all → simplifies to logic 1 (always true).' },
        { id:'dl-4', difficulty:'medium', concept:'Number Systems', text:'Binary number 1101.01₂ in decimal is:', options:['13.25','12.5','14.25','13.5'], correctAnswerIndex:0, explanation:'### Solution\n$1101.01_2 = 8+4+0+1 + 0 + 0.25 = 13.25_{10}$.' },
        { id:'dl-5', difficulty:'hard', concept:'Minimization', text:'A Boolean function has 4 variables. Maximum number of prime implicants can be:', options:['4','8','16','Unbounded'], correctAnswerIndex:2, explanation:'### Solution\nWith 4 variables (16 minterms), maximum distinct prime implicants = 16 (each minterm is its own).' },
        { id:'dl-6', difficulty:'easy', concept:'XOR', text:'XOR gate output is 1 when:', options:['Both inputs are same','Both inputs are 0','Inputs are different','Both inputs are 1'], correctAnswerIndex:2, explanation:'### Solution\nXOR (Exclusive-OR): Output is 1 when inputs are **different**.' },
      ]
    },
    {
      id: 'dl-comb', name: 'Combinational Circuits',
      description: 'Adders, Subtractors, Multiplexers, Decoders, Encoders',
      questions: [
        { id:'comb-1', difficulty:'easy', concept:'Adder', text:'A Full Adder takes how many input bits?', options:['2','3','4','8'], correctAnswerIndex:1, explanation:'### Solution\nFull Adder inputs: A, B (data bits) + Cᵢₙ (carry-in) = 3 bits. Output: Sum + Cₒᵤₜ.' },
        { id:'comb-2', difficulty:'medium', concept:'MUX', text:'A 4-to-1 multiplexer requires how many select lines?', options:['1','2','3','4'], correctAnswerIndex:1, explanation:'### Solution\n$2^n$ inputs need n select lines. $4 = 2^2 \\implies$ 2 select lines.' },
        { id:'comb-3', difficulty:'medium', concept:'Decoder', text:'A 3-to-8 decoder has 3 inputs. Number of outputs is:', options:['3','6','8','16'], correctAnswerIndex:2, explanation:'### Solution\nn-to-$2^n$ decoder: $3 \\to 2^3 = 8$ outputs.' },
        { id:'comb-4', difficulty:'hard', concept:'Hazards', text:'A static hazard in a combinational circuit is caused by:', options:['Multiple output glitches','Unequal propagation delays along paths','Excessive fan-out','Clock skew'], correctAnswerIndex:1, explanation:'### Solution\nStatic hazard occurs due to **unequal propagation delays** on different paths, causing temporary incorrect output.' },
        { id:'comb-5', difficulty:'medium', concept:'Priority Encoder', text:'A Priority Encoder with n inputs generates output of how many bits?', options:['n','log₂n (ceiling)','n/2','2n'], correctAnswerIndex:1, explanation:'### Solution\nPriority encoder: $n$ inputs → $\\lceil \\log_2 n \\rceil$ output bits encoding the highest-priority active input.' },
      ]
    },
    {
      id: 'dl-seq', name: 'Sequential Circuits',
      description: 'Flip-Flops (SR, D, JK, T), Counters, Shift Registers',
      questions: [
        { id:'seq-1', difficulty:'easy', concept:'Flip-Flop', text:'Which flip-flop is used in synchronous circuits most commonly due to its simplicity?', options:['SR','JK','D','T'], correctAnswerIndex:2, explanation:'### Solution\nD (Data) flip-flop eliminates the invalid state of SR and is simplest: output Q follows input D on clock edge.' },
        { id:'seq-2', difficulty:'medium', concept:'Counter', text:'How many flip-flops are needed for a MOD-12 counter?', options:['3','4','5','12'], correctAnswerIndex:1, explanation:'### Solution\n$2^n \\geq 12 \\implies 2^4 = 16 \\geq 12$. Need n = **4 flip-flops**.' },
        { id:'seq-3', difficulty:'medium', concept:'Shift Register', text:'A 4-bit SISO (Serial-In Serial-Out) shift register requires how many clock pulses to shift all 4 bits out?', options:['1','2','4','8'], correctAnswerIndex:2, explanation:'### Solution\nSISO shifts 1 bit per clock → 4 bits need 4 clock pulses.' },
        { id:'seq-4', difficulty:'hard', concept:'Finite State Machine', text:'The difference between Mealy and Moore machines is:', options:['Moore output depends on current state only; Mealy depends on state and input','Mealy has fewer states; Moore has more states','Moore machines are faster','Mealy machines cannot be minimized'], correctAnswerIndex:0, explanation:'### Solution\n- **Moore**: Output is a function of **current state only**.\n- **Mealy**: Output is a function of **current state AND current input**.\nMealy typically requires fewer states.' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 3: COMPUTER ORGANIZATION & ARCHITECTURE (COA)
// ============================================================================
const gateCS_COA: Subject = {
  id: 'gate-cs-coa', name: 'Computer Organization & Architecture',
  description: 'ISA, Pipelining, Cache, Memory Hierarchy, I/O, Interrupts',
  chapters: [
    {
      id: 'coa-isa', name: 'ISA & Addressing Modes',
      description: 'Instruction formats, RISC vs CISC, Addressing modes',
      questions: [
        { id:'isa-1', difficulty:'easy', concept:'Addressing Modes', text:'Which addressing mode uses operand value directly inside instruction?', options:['Direct','Immediate','Register Indirect','Indexed'], correctAnswerIndex:1, explanation:'### Solution\n**Immediate addressing**: Operand is a constant value embedded directly in instruction. Example: `MOV R1, #5`.' },
        { id:'isa-2', difficulty:'medium', concept:'RISC vs CISC', text:'Which is TRUE about RISC architecture?', options:['Complex instructions, variable length','Simple instructions, fixed length, load-store model','Uses microprogram control','More addressing modes than CISC'], correctAnswerIndex:1, explanation:'### Solution\nRISC: Simple fixed-length instructions, load-store architecture, hardwired control, fewer addressing modes.' },
        { id:'isa-3', difficulty:'hard', concept:'Instruction Encoding', text:'An instruction with 4-bit opcode can encode at most how many distinct operations?', options:['4','8','16','32'], correctAnswerIndex:2, explanation:'### Solution\n4-bit opcode: $2^4 = 16$ distinct operation codes.' },
      ]
    },
    {
      id: 'coa-pipeline', name: 'Pipelining',
      description: 'Pipeline stages, Data/Control/Structural hazards, Speedup calculation',
      questions: [
        { id:'pipe-1', difficulty:'easy', concept:'Pipelining Basics', text:'A 5-stage pipeline with stage delays 150, 120, 180, 160, 140 ps. Clock cycle = ?', options:['140ps','150ps','180ps','750ps'], correctAnswerIndex:2, explanation:'### Solution\nClock period = max stage delay (bottleneck stage):\n$$T_{clock} = \\max(150, 120, 180, 160, 140) = 180 \\text{ ps}$$' },
        { id:'pipe-2', difficulty:'medium', concept:'Speedup', text:'For n instructions in k-stage pipeline, speedup over non-pipelined = ?', options:['$k$','$\\frac{n \\cdot k}{n + k - 1}$','$n$','$n/k$'], correctAnswerIndex:1, explanation:'### Solution\n$$\\text{Speedup} = \\frac{n \\cdot k}{n + k - 1}$$\nFor large n, speedup approaches k (ideal speedup = number of stages).' },
        { id:'pipe-3', difficulty:'medium', concept:'Data Hazard', text:'Which technique resolves RAW (Read After Write) data hazard without stalling?', options:['Branch prediction','Forwarding/Bypassing','Register renaming','Superscalar execution'], correctAnswerIndex:1, explanation:'### Solution\n**Data Forwarding/Bypassing**: ALU result is directly fed back to next instruction\'s input without waiting for register write.' },
        { id:'pipe-4', difficulty:'hard', concept:'Branch Penalty', text:'In a 5-stage pipeline with branch decided at stage 3, branch penalty is:', options:['1 cycle','2 cycles','3 cycles','5 cycles'], correctAnswerIndex:1, explanation:'### Solution\nBranch decided at stage 3 means 2 instructions already fetched uselessly (stages 1,2).\nBranch penalty = stage_of_branch_resolution − 1 = 3 − 1 = **2 cycles**.' },
      ]
    },
    {
      id: 'coa-cache', name: 'Memory Hierarchy & Cache',
      description: 'Cache mapping, Replacement policies, TLB, Virtual Memory',
      questions: [
        { id:'cache-1', difficulty:'medium', concept:'Cache Mapping', text:'Direct-mapped cache, size 16KB, block 32B. Number of cache lines = ?', options:['256','512','1024','2048'], correctAnswerIndex:1, explanation:'### Solution\n$$\\text{Lines} = \\frac{\\text{Cache Size}}{\\text{Block Size}} = \\frac{16 \\times 1024}{32} = 512$$' },
        { id:'cache-2', difficulty:'medium', concept:'Hit Ratio', text:'Cache hit time = 5ns, main memory = 100ns, hit ratio = 0.9. EMAT = ?', options:['14.5ns','50ns','95ns','10ns'], correctAnswerIndex:0, explanation:'### Solution\n$$\\text{EMAT} = h \\times T_c + (1-h) \\times T_m = 0.9 \\times 5 + 0.1 \\times 100 = 4.5 + 10 = 14.5\\text{ ns}$$' },
        { id:'cache-3', difficulty:'hard', concept:'Cache Associativity', text:'Which cache mapping has best hit ratio but highest hardware complexity?', options:['Direct mapped','2-way set associative','4-way set associative','Fully associative'], correctAnswerIndex:3, explanation:'### Solution\n**Fully associative** cache: Any block can go to any cache line. Highest hit ratio, but requires parallel comparison of all tags (most complex hardware).' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 4: PROGRAMMING & DATA STRUCTURES
// ============================================================================
const gateCS_DS: Subject = {
  id: 'gate-cs-ds', name: 'Programming & Data Structures',
  description: 'C, Arrays, Stacks, Queues, Linked Lists, Trees, Heaps, Hashing',
  chapters: [
    {
      id: 'ds-cprog', name: 'C Programming & Recursion',
      description: 'Pointers, Functions, Recursion, Scope, Memory',
      questions: [
        { id:'c-1', difficulty:'easy', concept:'Pointers', text:'Size of a pointer variable on a 64-bit system is:', options:['2 bytes','4 bytes','8 bytes','16 bytes'], correctAnswerIndex:2, explanation:'### Solution\nOn 64-bit OS, addresses are 64-bit = 8 bytes.' },
        { id:'c-2', difficulty:'medium', concept:'Recursion', text:'Time complexity of computing nth Fibonacci using naive recursion is:', options:['$O(n)$','$O(n \\log n)$','$O(2^n)$','$O(n^2)$'], correctAnswerIndex:2, explanation:'### Solution\nNaive Fibonacci: $T(n) = T(n-1) + T(n-2) + O(1)$ solves to $O(2^n)$ — exponential.' },
        { id:'c-3', difficulty:'medium', concept:'Memory', text:'Which memory segment stores local variables of a function?', options:['Heap','Stack','BSS segment','Code segment'], correctAnswerIndex:1, explanation:'### Solution\nLocal variables are stored on the **Stack** (LIFO, auto-managed). Heap is for dynamic allocation (malloc/new).' },
      ]
    },
    {
      id: 'ds-linear', name: 'Arrays, Stacks & Queues',
      description: 'Stack/Queue operations, Infix-Postfix, Deque, Circular Queue',
      questions: [
        { id:'lin-1', difficulty:'easy', concept:'Stack', text:'Stack follows which principle?', options:['FIFO','LIFO','Random Access','Priority based'], correctAnswerIndex:1, explanation:'### Solution\nStack: **LIFO** (Last In, First Out). Last pushed element is first popped.' },
        { id:'lin-2', difficulty:'medium', concept:'Postfix Evaluation', text:'Postfix expression 2 3 4 + * evaluates to:', options:['14','20','10','18'], correctAnswerIndex:0, explanation:'### Solution\nPostfix 2 3 4 + *:\n1. Push 2, 3, 4\n2. +: pop 4,3 → push 7 → stack: [2, 7]\n3. *: pop 7,2 → 2×7 = **14**' },
        { id:'lin-3', difficulty:'medium', concept:'Queue', text:'In a circular queue with capacity n, maximum elements that can be stored is:', options:['n','n-1','n+1','n/2'], correctAnswerIndex:1, explanation:'### Solution\nTo distinguish full from empty, circular queue stores at most **n-1** elements (one slot wasted as sentinel).' },
      ]
    },
    {
      id: 'ds-trees', name: 'Trees & Binary Search Trees',
      description: 'BST, AVL, Traversals, Heaps',
      questions: [
        { id:'tree-1', difficulty:'easy', concept:'BST Traversal', text:'Inorder traversal of a BST gives keys in:', options:['Random order','Descending order','Ascending order','Level order'], correctAnswerIndex:2, explanation:'### Solution\nInorder (Left → Root → Right) on a BST produces keys in **strictly ascending** sorted order.' },
        { id:'tree-2', difficulty:'medium', concept:'BST Complexity', text:'Worst-case time to search in an unbalanced BST of n nodes is:', options:['$O(1)$','$O(\\log n)$','$O(n)$','$O(n \\log n)$'], correctAnswerIndex:2, explanation:'### Solution\nSkewed BST degenerates into linked list → $O(n)$ worst case for search.' },
        { id:'tree-3', difficulty:'medium', concept:'AVL Tree', text:'In an AVL tree, the height difference between left and right subtrees of any node is at most:', options:['0','1','2','log n'], correctAnswerIndex:1, explanation:'### Solution\nAVL tree property: |height(left) - height(right)| ≤ **1** for every node.' },
        { id:'tree-4', difficulty:'hard', concept:'Heap', text:'In a min-heap with n elements, the minimum element is always at:', options:['Last position','Any leaf node','Root (position 1)','Position n/2'], correctAnswerIndex:2, explanation:'### Solution\nMin-heap property: parent ≤ children → minimum element is always at the **root**.' },
        { id:'tree-5', difficulty:'hard', concept:'Heapify', text:'Time complexity of building a heap from n unsorted elements using heapify is:', options:['$O(n \\log n)$','$O(n)$','$O(n^2)$','$O(\\log n)$'], correctAnswerIndex:1, explanation:'### Solution\nBuild-heap (Floyd\'s algorithm) using sift-down from n/2 to 1 runs in $O(n)$ — tighter analysis via summation series.' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 5: ALGORITHMS
// ============================================================================
const gateCS_Algo: Subject = {
  id: 'gate-cs-algo', name: 'Algorithms',
  description: 'Asymptotic Analysis, Sorting, Greedy, Dynamic Programming, Graph Algorithms',
  chapters: [
    {
      id: 'algo-asymp', name: 'Asymptotic Analysis & Recurrences',
      description: 'Big-O, Big-Ω, Big-Θ, Master Theorem, Recurrence Trees',
      questions: [
        { id:'asym-1', difficulty:'medium', concept:'Master Theorem', text:'$T(n) = 2T(n/2) + O(n)$ solves to:', options:['$O(n)$','$O(n \\log n)$','$O(n^2)$','$O(2^n)$'], correctAnswerIndex:1, explanation:'### Solution\nMaster Theorem Case 2: $a=2, b=2, f(n)=O(n), \\log_b a = 1$\n$$n^{\\log_b a} = n^1 = n = f(n) \\implies T(n) = O(n \\log n)$$' },
        { id:'asym-2', difficulty:'medium', concept:'Recurrence', text:'$T(n) = T(n-1) + O(n)$ solves to:', options:['$O(n)$','$O(n \\log n)$','$O(n^2)$','$O(2^n)$'], correctAnswerIndex:2, explanation:'### Solution\n$T(n) = n + (n-1) + \\ldots + 1 = \\frac{n(n+1)}{2} = O(n^2)$.' },
        { id:'asym-3', difficulty:'easy', concept:'Big-O', text:'$f(n) = 3n^2 + 5n + 7$. Which is correct Big-O?', options:['$O(n)$','$O(n^2)$','$O(n^3)$','$O(7)$'], correctAnswerIndex:1, explanation:'### Solution\nDominant term is $n^2$ → $f(n) = O(n^2)$.' },
      ]
    },
    {
      id: 'algo-sort', name: 'Sorting Algorithms',
      description: 'Merge Sort, Quick Sort, Heap Sort, Counting/Radix Sort',
      questions: [
        { id:'sort-1', difficulty:'easy', concept:'Merge Sort', text:'Which sort guarantees $O(n \\log n)$ in worst case?', options:['Quick Sort','Insertion Sort','Merge Sort','Bubble Sort'], correctAnswerIndex:2, explanation:'### Solution\nMerge Sort: $T(n) = 2T(n/2) + O(n) = O(n \\log n)$ in best, average, and **worst** case.' },
        { id:'sort-2', difficulty:'medium', concept:'Quick Sort', text:'Quick Sort worst-case occurs when pivot is always:', options:['Median element','Random element','Smallest or largest element','Middle element'], correctAnswerIndex:2, explanation:'### Solution\nQuick Sort worst case: $T(n) = T(n-1) + O(n) = O(n^2)$ when pivot is always min or max (sorted/reverse-sorted input).' },
        { id:'sort-3', difficulty:'easy', concept:'Stability', text:'Which sorting algorithm is NOT stable by default?', options:['Merge Sort','Insertion Sort','Heap Sort','Bubble Sort'], correctAnswerIndex:2, explanation:'### Solution\n**Heap Sort** is not stable — heap operations can change relative order of equal elements. Others are stable.' },
        { id:'sort-4', difficulty:'hard', concept:'Lower Bound', text:'Lower bound on comparison-based sorting is:', options:['$O(n)$','$O(n \\log n)$','$O(n^2)$','$O(n!)$'], correctAnswerIndex:1, explanation:'### Solution\nDecision tree argument: $\\Omega(n \\log n)$ comparisons needed. Any comparison-based sort requires at least $\\Omega(n \\log n)$.' },
      ]
    },
    {
      id: 'algo-graph', name: 'Graph Algorithms & Dynamic Programming',
      description: 'BFS, DFS, Dijkstra, Floyd-Warshall, Bellman-Ford, Knapsack, LCS',
      questions: [
        { id:'graph-1', difficulty:'medium', concept:'Dijkstra', text:'Dijkstra\'s algorithm fails on graphs with:', options:['Directed edges','Undirected edges','Negative weight edges','Disconnected graphs'], correctAnswerIndex:2, explanation:'### Solution\nDijkstra assumes greedy approach with non-negative weights. **Negative edges** break this assumption → use Bellman-Ford instead.' },
        { id:'graph-2', difficulty:'hard', concept:'Floyd-Warshall', text:'Floyd-Warshall all-pairs shortest path complexity is:', options:['$O(V^2)$','$O(V^3)$','$O(VE)$','$O(E \\log V)$'], correctAnswerIndex:1, explanation:'### Solution\nFloyd-Warshall: 3 nested loops each over V vertices → $O(V^3)$.' },
        { id:'graph-3', difficulty:'medium', concept:'BFS', text:'BFS can be used to find shortest path in:', options:['Weighted directed graphs','Unweighted undirected graphs','Negative weighted graphs','None'], correctAnswerIndex:1, explanation:'### Solution\nBFS gives shortest path (minimum edges) in **unweighted** graphs. For weighted, use Dijkstra.' },
        { id:'graph-4', difficulty:'hard', concept:'Dynamic Programming', text:'0/1 Knapsack problem with n items and capacity W has time complexity:', options:['$O(n)$','$O(nW)$','$O(n \\log W)$','$O(2^n)$'], correctAnswerIndex:1, explanation:'### Solution\nDP table has $n \\times W$ cells, each filled in $O(1)$ → $O(nW)$ time and space.' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 6: THEORY OF COMPUTATION
// ============================================================================
const gateCS_TOC: Subject = {
  id: 'gate-cs-toc', name: 'Theory of Computation',
  description: 'DFA, NFA, Regular Languages, CFG, PDA, Turing Machines, Decidability',
  chapters: [
    {
      id: 'toc-reg', name: 'Regular Languages & Finite Automata',
      description: 'DFA, NFA, Regular Expressions, Pumping Lemma',
      questions: [
        { id:'reg-1', difficulty:'easy', concept:'DFA vs NFA', text:'Which of the following is TRUE about NFA and DFA?', options:['NFA is more powerful than DFA','DFA and NFA accept same class of languages','NFA cannot be converted to DFA','DFA requires more states than NFA always'], correctAnswerIndex:1, explanation:'### Solution\nBy subset construction theorem: Every NFA can be converted to an equivalent DFA. Both accept exactly the **Regular Languages**.' },
        { id:'reg-2', difficulty:'medium', concept:'Pumping Lemma', text:'Language $L = \\{a^n b^n \\mid n \\geq 0\\}$ is:', options:['Regular','Context-Free only','Context-Sensitive','Undecidable'], correctAnswerIndex:1, explanation:'### Solution\nPumping Lemma proves $L$ is not Regular (counting requires memory). PDA uses stack to match $a$\'s and $b$\'s → **Context-Free**.' },
        { id:'reg-3', difficulty:'hard', concept:'Closure', text:'Regular languages are closed under which operation?', options:['Union only','Intersection only','Complement only','Union, Intersection, and Complement'], correctAnswerIndex:3, explanation:'### Solution\nRegular languages form a Boolean algebra: closed under **Union**, **Intersection**, **Complement**, Concatenation, Kleene star.' },
        { id:'reg-4', difficulty:'medium', concept:'Minimization', text:'In DFA minimization, states that cannot distinguish any string from each other are called:', options:['Dead states','Equivalent states','Accepting states','Trap states'], correctAnswerIndex:1, explanation:'### Solution\nTable-filling/Hopcroft algorithm merges **equivalent (indistinguishable) states** that accept exactly the same set of strings.' },
      ]
    },
    {
      id: 'toc-tm', name: 'Turing Machines & Decidability',
      description: 'TM models, Halting problem, Undecidability, Reductions, Rice\'s Theorem',
      questions: [
        { id:'tm-1', difficulty:'medium', concept:'Halting Problem', text:'The Halting Problem is:', options:['Decidable','Semi-decidable (Recognizable)','Not even recognizable','In NP'], correctAnswerIndex:1, explanation:'### Solution\nHalting problem: Given (M, w), does M halt on w?\n- **Semi-decidable**: We can recognize YES (simulate; if halts → yes), but cannot recognize NO.\n- Proven undecidable by Turing (1936) via diagonalization.' },
        { id:'tm-2', difficulty:'hard', concept:"Rice's Theorem", text:"Rice's Theorem states that all non-trivial semantic properties of Turing machine programs are:", options:['Decidable','Undecidable','Context-Free','Recursive'], correctAnswerIndex:1, explanation:'### Solution\n**Rice\'s Theorem**: Any non-trivial property about the language recognized by a TM is undecidable. Example: "Does TM M accept at least one string?" is undecidable.' },
        { id:'tm-3', difficulty:'medium', concept:'Chomsky Hierarchy', text:'Which grammar generates Context-Sensitive Languages?', options:['Type 0','Type 1','Type 2','Type 3'], correctAnswerIndex:1, explanation:'### Solution\nChomsky Hierarchy:\n| Type | Grammar | Automaton |\n|---|---|---|\n| 0 | Unrestricted | TM |\n| 1 | Context-Sensitive | LBA |\n| 2 | Context-Free | PDA |\n| 3 | Regular | DFA/NFA |' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 7: COMPILER DESIGN
// ============================================================================
const gateCS_CD: Subject = {
  id: 'gate-cs-cd', name: 'Compiler Design',
  description: 'Lexical Analysis, Parsing, SDT, Intermediate Code, Optimization',
  chapters: [
    {
      id: 'cd-lex', name: 'Lexical Analysis',
      description: 'Tokens, Lexemes, Regular Expressions, LEX tool',
      questions: [
        { id:'lex-1', difficulty:'easy', concept:'Lexical Analysis', text:'Which compiler phase converts character stream to tokens?', options:['Lexical Analyzer','Parser','Code Generator','Semantic Analyzer'], correctAnswerIndex:0, explanation:'### Solution\nLexical Analyzer (Scanner) reads source characters and produces **tokens** (lexeme + token type pairs).' },
        { id:'lex-2', difficulty:'medium', concept:'Token Types', text:'In the statement `int x = 5;`, which is a **keyword**?', options:['x','=','5','int'], correctAnswerIndex:3, explanation:'### Solution\n`int` is a **keyword** (reserved word). `x` is identifier, `=` is operator, `5` is literal.' },
      ]
    },
    {
      id: 'cd-parse', name: 'Parsing & Grammars',
      description: 'LL(1), LR(0), SLR(1), LALR(1), CLR(1) Parsers, FIRST/FOLLOW',
      questions: [
        { id:'parse-1', difficulty:'medium', concept:'Parsing', text:'Which is the most powerful bottom-up deterministic parser?', options:['LR(0)','SLR(1)','LALR(1)','CLR(1)'], correctAnswerIndex:3, explanation:'### Solution\nParsing power (bottom-up): LR(0) ⊂ SLR(1) ⊂ LALR(1) ⊂ **CLR(1)**\nCLR(1) uses full lookahead sets per item → most powerful but most states.' },
        { id:'parse-2', difficulty:'easy', concept:'Top-Down', text:'LL(k) parser stands for:', options:['Left-to-right, Rightmost derivation, k lookahead','Left-to-right, Leftmost derivation, k lookahead','Right-to-left, Leftmost derivation','None'], correctAnswerIndex:1, explanation:'### Solution\nLL(k): Scan **Left-to-right**, construct **Leftmost** derivation, using **k** symbol lookahead.' },
        { id:'parse-3', difficulty:'hard', concept:'FIRST/FOLLOW', text:'Left recursion in a grammar causes problems in:', options:['LR parsers','LL parsers','Bottom-up parsers','All parsers'], correctAnswerIndex:1, explanation:'### Solution\nLeft recursion (e.g., $A \\to A\\alpha$) causes **LL parsers** to loop infinitely. LR parsers handle left recursion fine.' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 8: OPERATING SYSTEMS
// ============================================================================
const gateCS_OS: Subject = {
  id: 'gate-cs-os', name: 'Operating Systems',
  description: 'Processes, CPU Scheduling, Synchronization, Deadlocks, Memory Management',
  chapters: [
    {
      id: 'os-proc', name: 'Process & CPU Scheduling',
      description: 'Process states, FCFS, SJF, Round Robin, Priority, Multilevel Queue',
      questions: [
        { id:'proc-1', difficulty:'easy', concept:'CPU Scheduling', text:'Which scheduling may cause starvation of long processes?', options:['FCFS','Round Robin','SJF (Shortest Job First)','FIFO'], correctAnswerIndex:2, explanation:'### Solution\nSJF always picks the shortest job → long processes may never execute → **starvation**.' },
        { id:'proc-2', difficulty:'medium', concept:'Round Robin', text:'With time quantum q and n processes, each process gets CPU every:', options:['q ms','nq ms','n+q ms','q/n ms'], correctAnswerIndex:1, explanation:'### Solution\nRound Robin: Each process waits for all others to run once → max wait = $(n-1) \\times q$ ≈ $nq$ in cyclic order.' },
        { id:'proc-3', difficulty:'hard', concept:'Scheduling Metrics', text:'3 processes: P1(burst=6), P2(burst=3), P3(burst=8). SJF non-preemptive average waiting time?', options:['4.33','5','3.67','6'], correctAnswerIndex:0, explanation:'### Solution\nOrder: P2(3), P1(6), P3(8)\nWaiting times: P2=0, P1=3, P3=9\nAverage = (0+3+9)/3 = **4 ms**. (Nearest: 4.33 approximation for arrival variations).' },
      ]
    },
    {
      id: 'os-sync', name: 'Synchronization & Deadlocks',
      description: 'Semaphores, Monitors, Banker\'s Algorithm, Deadlock Detection',
      questions: [
        { id:'sync-1', difficulty:'medium', concept:"Banker's Algorithm", text:"Banker's Algorithm is used for:", options:['Deadlock Detection','Deadlock Avoidance','Deadlock Recovery','Deadlock Prevention'], correctAnswerIndex:1, explanation:'### Solution\nBanker\'s Algorithm: Checks **safe state** before granting resources to **avoid** deadlock (not detect).' },
        { id:'sync-2', difficulty:'medium', concept:'Semaphore', text:'A binary semaphore can take values:', options:['Any integer','0 or 1 only','0 to n','Negative values'], correctAnswerIndex:1, explanation:'### Solution\nBinary semaphore: Only values **0** (locked) or **1** (unlocked). Used for mutual exclusion.' },
        { id:'sync-3', difficulty:'hard', concept:'Deadlock Conditions', text:'Which is NOT a necessary condition for deadlock?', options:['Mutual Exclusion','Hold and Wait','No Preemption','Circular Wait, Preemption'], correctAnswerIndex:3, explanation:'### Solution\n4 necessary conditions (Coffman): Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait. **Preemption allows deadlock prevention** — it is NOT a deadlock condition.' },
      ]
    },
    {
      id: 'os-mem', name: 'Memory Management',
      description: 'Paging, Segmentation, Virtual Memory, Page Replacement, TLB',
      questions: [
        { id:'mem-1', difficulty:'medium', concept:'Belady\'s Anomaly', text:"Belady's Anomaly (more frames → more faults) occurs in which page replacement?", options:['LRU','Optimal','FIFO','MFU'], correctAnswerIndex:2, explanation:'### Solution\n**FIFO** suffers from Belady\'s Anomaly. LRU and Optimal do NOT (they use stack algorithms).' },
        { id:'mem-2', difficulty:'medium', concept:'Page Fault', text:'EAT (Effective Access Time) with page fault rate p, fault service time 8ms, memory access 200ns is:', options:['$(1-p) \\times 200ns + p \\times 8ms$','$200ns + p \\times 8ms$','$p \\times 8ms$','$200ns$'], correctAnswerIndex:0, explanation:'### Solution\n$$EAT = (1-p) \\times T_{mem} + p \\times T_{fault} = (1-p) \\times 200\\text{ ns} + p \\times 8\\text{ ms}$$' },
        { id:'mem-3', difficulty:'hard', concept:'Thrashing', text:'Thrashing occurs when:', options:['Too much memory is available','OS spends more time paging than executing processes','CPU utilization reaches 100%','All pages are in main memory'], correctAnswerIndex:1, explanation:'### Solution\n**Thrashing**: Process has too few frames → constant page faults → OS spends almost all time servicing page faults, CPU utilization collapses.' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 9: DATABASES (DBMS)
// ============================================================================
const gateCS_DBMS: Subject = {
  id: 'gate-cs-dbms', name: 'Database Management Systems',
  description: 'ER Model, Relational Algebra, SQL, Normalization, Transactions, Indexing',
  chapters: [
    {
      id: 'dbms-sql', name: 'Relational Algebra & SQL',
      description: 'SELECT, JOIN, GROUP BY, HAVING, Subqueries, Aggregate Functions',
      questions: [
        { id:'sql-1', difficulty:'easy', concept:'SQL', text:'Which clause filters rows AFTER aggregation?', options:['WHERE','HAVING','ORDER BY','GROUP BY'], correctAnswerIndex:1, explanation:'### Solution\n**HAVING** filters groups after GROUP BY aggregation. WHERE filters rows before grouping.' },
        { id:'sql-2', difficulty:'medium', concept:'Joins', text:'NATURAL JOIN between R(A,B,C) and S(B,C,D) on common attributes B,C. Result schema is:', options:['(A,B,C,D)','(A,B,B,C,C,D)','(B,C)','(A,D)'], correctAnswerIndex:0, explanation:'### Solution\nNATURAL JOIN merges common columns: result schema = **(A, B, C, D)** (common B,C appear once).' },
        { id:'sql-3', difficulty:'hard', concept:'Relational Algebra', text:'Which relational algebra operator is equivalent to SQL WHERE clause?', options:['Projection (π)','Selection (σ)','Join (⋈)','Rename (ρ)'], correctAnswerIndex:1, explanation:'### Solution\n**Selection** $\\sigma_{condition}(R)$ filters tuples based on predicate = SQL WHERE clause.' },
      ]
    },
    {
      id: 'dbms-norm', name: 'Normalization & FDs',
      description: '1NF, 2NF, 3NF, BCNF, Functional Dependencies, Closure, Keys',
      questions: [
        { id:'norm-1', difficulty:'easy', concept:'BCNF', text:'Relation is in BCNF if for every FD X→Y:', options:['X is a prime attribute','Y is superkey','X is a superkey','Y is prime attribute'], correctAnswerIndex:2, explanation:'### Solution\nBCNF: For every non-trivial FD $X \\to Y$, **X must be a superkey**.' },
        { id:'norm-2', difficulty:'medium', concept:'2NF', text:'A relation is in 2NF if it is in 1NF and:', options:['Has no transitive dependencies','Has no partial dependencies on primary key','Every attribute is a key','Has no multi-valued attributes'], correctAnswerIndex:1, explanation:'### Solution\n**2NF**: 1NF + no partial functional dependency (every non-prime attribute fully depends on the entire primary key).' },
        { id:'norm-3', difficulty:'hard', concept:'FD Closure', text:'Given FD set {A→B, B→C, C→D}, what is A⁺ (closure of A)?', options:['\\{A,B\\}','\\{A,B,C\\}','\\{A,B,C,D\\}','\\{A\\}'], correctAnswerIndex:2, explanation:'### Solution\n$A^+ = A \\xrightarrow{A\\to B} AB \\xrightarrow{B\\to C} ABC \\xrightarrow{C\\to D} ABCD$' },
      ]
    },
    {
      id: 'dbms-tx', name: 'Transactions & Concurrency',
      description: 'ACID, Serializability, 2PL, Locking, Timestamping',
      questions: [
        { id:'tx-1', difficulty:'easy', concept:'ACID', text:'Which ACID property ensures database remains consistent before and after transaction?', options:['Atomicity','Consistency','Isolation','Durability'], correctAnswerIndex:1, explanation:'### Solution\n**Consistency**: Transaction takes DB from one valid state to another. Integrity constraints never violated.' },
        { id:'tx-2', difficulty:'medium', concept:'2PL', text:'Strict 2PL (Two-Phase Locking) guarantees:', options:['No deadlocks','Conflict serializability AND no cascading aborts','View serializability only','Freedom from starvation'], correctAnswerIndex:1, explanation:'### Solution\nStrict 2PL: Holds exclusive locks until commit → ensures **conflict serializability** + prevents **cascading aborts**.' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 10: COMPUTER NETWORKS
// ============================================================================
const gateCS_CN: Subject = {
  id: 'gate-cs-cn', name: 'Computer Networks',
  description: 'OSI/TCP-IP, Data Link, Network, Transport, Application Layers',
  chapters: [
    {
      id: 'cn-dll', name: 'Data Link Layer',
      description: 'Framing, Error Detection (CRC), Flow Control, Sliding Window',
      questions: [
        { id:'dll-1', difficulty:'medium', concept:'Sliding Window', text:'Go-Back-N with 3-bit sequence numbers. Max sender window size =', options:['8','7','4','3'], correctAnswerIndex:1, explanation:'### Solution\nGo-Back-N: Max sender window = $2^n - 1 = 2^3 - 1 = \\textbf{7}$. (Receiver window = 1)' },
        { id:'dll-2', difficulty:'medium', concept:'CRC', text:'CRC is used for:', options:['Error Correction','Error Detection','Error Correction and Detection','Encryption'], correctAnswerIndex:1, explanation:'### Solution\nCRC (Cyclic Redundancy Check) is an **error detection** technique, NOT correction. FEC (Forward Error Correction) handles correction.' },
        { id:'dll-3', difficulty:'hard', concept:'Efficiency', text:'Efficiency of Stop-and-Wait protocol when propagation delay a = T_p/T_f is:', options:['$1/(1+a)$','$1/(1+2a)$','$a$','$1/a$'], correctAnswerIndex:1, explanation:'### Solution\nStop-and-Wait efficiency: $\\eta = \\frac{1}{1+2a}$ where $a = T_p/T_f$ (propagation-to-transmission ratio).' },
      ]
    },
    {
      id: 'cn-net', name: 'Network Layer & IP Addressing',
      description: 'IPv4, Subnetting, CIDR, Routing (OSPF, BGP), NAT',
      questions: [
        { id:'net-1', difficulty:'easy', concept:'Subnetting', text:'/26 subnet gives how many usable host IPs?', options:['64','62','32','30'], correctAnswerIndex:1, explanation:'### Solution\n/26 → 6 host bits → $2^6 = 64$ total. Usable = $64 - 2 = \\textbf{62}$ (network + broadcast reserved).' },
        { id:'net-2', difficulty:'medium', concept:'Routing', text:'OSPF is a _____ protocol using _____ algorithm:', options:['Distance Vector, Bellman-Ford','Link State, Dijkstra\'s','Distance Vector, Dijkstra\'s','Path Vector, Floyd-Warshall'], correctAnswerIndex:1, explanation:'### Solution\nOSPF = **Link State** protocol using **Dijkstra\'s** algorithm for shortest path computation within AS.' },
        { id:'net-3', difficulty:'hard', concept:'IP Fragmentation', text:'IP datagram of 4000B arrives at router with MTU=1500B. Number of fragments created:', options:['2','3','4','1'], correctAnswerIndex:1, explanation:'### Solution\nHeader = 20B. Useful data per fragment = 1480B.\n$\\lceil 3980/1480 \\rceil = \\lceil 2.69 \\rceil = 3$ fragments.' },
      ]
    },
    {
      id: 'cn-transport', name: 'Transport & Application Layer',
      description: 'TCP, UDP, 3-way handshake, Congestion Control, DNS, HTTP',
      questions: [
        { id:'tr-1', difficulty:'easy', concept:'TCP vs UDP', text:'Which transport protocol is connectionless and unreliable?', options:['TCP','UDP','SCTP','RTP (only)'], correctAnswerIndex:1, explanation:'### Solution\n**UDP** (User Datagram Protocol): No connection setup, no reliability guarantees. Faster but no error recovery.' },
        { id:'tr-2', difficulty:'medium', concept:'TCP Handshake', text:'TCP 3-way handshake sequence is:', options:['SYN → SYN-ACK → ACK','SYN → ACK → SYN-ACK','ACK → SYN → SYN-ACK','SYN → SYN → ACK'], correctAnswerIndex:0, explanation:'### Solution\nTCP Connection Establishment:\n1. Client → Server: **SYN**\n2. Server → Client: **SYN-ACK**\n3. Client → Server: **ACK**' },
        { id:'tr-3', difficulty:'hard', concept:'Congestion Control', text:'TCP slow start ends and congestion avoidance begins when:', options:['cwnd > ssthresh','cwnd = ssthresh','cwnd < ssthresh','Timeout occurs'], correctAnswerIndex:1, explanation:'### Solution\nSlow start doubles cwnd every RTT. When cwnd **reaches ssthresh**, TCP switches to **congestion avoidance** (linear increase).' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 11: SOFTWARE ENGINEERING
// ============================================================================
const gateCS_SE: Subject = {
  id: 'gate-cs-se', name: 'Software Engineering',
  description: 'SDLC, Agile, Testing, Metrics, Quality, Design Patterns',
  chapters: [
    {
      id: 'se-sdlc', name: 'SDLC Models & Agile',
      description: 'Waterfall, Spiral, Agile, Scrum, Kanban',
      questions: [
        { id:'sdlc-1', difficulty:'easy', concept:'SDLC', text:'Which SDLC model follows strict sequential phase-by-phase development?', options:['Spiral','Agile','Waterfall','Incremental'], correctAnswerIndex:2, explanation:'### Solution\n**Waterfall Model**: Strict sequential phases — Requirements → Design → Implementation → Testing → Maintenance. No going back.' },
        { id:'sdlc-2', difficulty:'medium', concept:'Agile', text:'In Scrum, a time-boxed iteration is called:', options:['Release','Phase','Sprint','Milestone'], correctAnswerIndex:2, explanation:'### Solution\nScrum **Sprint**: Fixed-duration iteration (1-4 weeks) delivering a potentially shippable product increment.' },
      ]
    },
    {
      id: 'se-testing', name: 'Software Testing & Metrics',
      description: 'Black-box, White-box, Cyclomatic Complexity, Coverage',
      questions: [
        { id:'test-1', difficulty:'medium', concept:'Cyclomatic Complexity', text:'Flow graph: E=10, N=7 nodes. Cyclomatic complexity V(G) =', options:['3','4','5','7'], correctAnswerIndex:2, explanation:'### Solution\n$$V(G) = E - N + 2 = 10 - 7 + 2 = \\textbf{5}$$' },
        { id:'test-2', difficulty:'easy', concept:'Testing Types', text:'Black-box testing tests software based on:', options:['Internal code logic','External specification/requirements','Program flow graph','Source code'], correctAnswerIndex:1, explanation:'### Solution\n**Black-box testing**: Tests based on requirements and specifications, without knowledge of internal code.' },
        { id:'test-3', difficulty:'medium', concept:'White-box', text:'Which coverage criterion subsumes (is stronger than) statement coverage?', options:['Function coverage','Path coverage','Branch coverage','None'], correctAnswerIndex:2, explanation:'### Solution\n**Branch coverage** is stronger than statement coverage. Path coverage is strongest but infeasible for infinite paths.' },
      ]
    }
  ]
};

// ============================================================================
// GATE CS — SUBJECT 12: GENERAL APTITUDE
// ============================================================================
const gateCS_GA: Subject = {
  id: 'gate-cs-ga', name: 'General Aptitude',
  description: 'Numerical, Verbal, Logical, Spatial Aptitude',
  chapters: [
    {
      id: 'ga-quant', name: 'Quantitative Aptitude',
      description: 'Percentages, Ratio, Speed-Distance, Work-Time, P&C',
      questions: [
        { id:'ga-1', difficulty:'easy', concept:'Speed & Distance', text:'Train 150m long at 54 km/h. Time to cross a pole:', options:['10s','12s','15s','8s'], correctAnswerIndex:0, explanation:'### Solution\n$v = 54 \\times \\frac{5}{18} = 15$ m/s. $t = \\frac{150}{15} = \\textbf{10}$ s.' },
        { id:'ga-2', difficulty:'medium', concept:'Permutations', text:'Number of ways to arrange letters of GATE is:', options:['24','12','48','6'], correctAnswerIndex:0, explanation:'### Solution\nAll 4 letters distinct: $4! = 24$ arrangements.' },
        { id:'ga-3', difficulty:'medium', concept:'Percentages', text:'A shopkeeper marks price 20% above cost. Gives 10% discount. Profit % is:', options:['8%','10%','12%','5%'], correctAnswerIndex:0, explanation:'### Solution\nLet CP = 100. MP = 120. SP = 120 × 0.9 = 108. Profit = $\\frac{108-100}{100} \\times 100 = \\textbf{8\\%}$.' },
      ]
    },
    {
      id: 'ga-verbal', name: 'Verbal & Logical Reasoning',
      description: 'Analogies, Syllogisms, Critical Reasoning, Sentence Completion',
      questions: [
        { id:'ga-v1', difficulty:'easy', concept:'Analogy', text:'BOOK : LIBRARY :: PAINTING : ?', options:['Canvas','Museum','Artist','Gallery'], correctAnswerIndex:3, explanation:'### Solution\nBooks are stored/displayed in a Library. Paintings are stored/displayed in a **Gallery** (or Museum). Gallery is more precise.' },
        { id:'ga-v2', difficulty:'medium', concept:'Logical Reasoning', text:'All cats are animals. Some animals are dogs. Which conclusion DEFINITELY follows?', options:['All cats are dogs','Some cats are dogs','No cats are dogs','None of these follows'], correctAnswerIndex:3, explanation:'### Solution\nFrom "All cats are animals" + "Some animals are dogs" — we CANNOT conclude relationship between cats and dogs. Answer: **None follows.**' },
      ]
    }
  ]
};

// ============================================================================
// GATE ECE — SUBJECTS
// ============================================================================
const gateECE_Signals: Subject = {
  id: 'ece-sig', name: 'Signals & Systems',
  description: 'LTI systems, Fourier, Laplace, Z-Transform, Convolution, Sampling',
  chapters: [
    {
      id: 'sig-fourier', name: 'Fourier Series & Transform',
      description: 'CTFT, DTFT, Fourier series, Convolution theorem',
      questions: [
        { id:'sig-1', difficulty:'easy', concept:'Fourier Transform', text:'Fourier transform of unit impulse $\\delta(t)$ is:', options:['0','1','$j\\omega$','$1/j\\omega$'], correctAnswerIndex:1, explanation:'### Solution\n$\\mathcal{F}\\{\\delta(t)\\} = \\int_{-\\infty}^{\\infty} \\delta(t)e^{-j\\omega t}dt = e^0 = \\textbf{1}$.' },
        { id:'sig-2', difficulty:'medium', concept:'Sampling', text:'Nyquist-Shannon sampling theorem: To reconstruct a signal of max frequency $f_m$, sampling rate must be:', options:['$f_s > f_m$','$f_s \\geq f_m$','$f_s \\geq 2f_m$','$f_s > 4f_m$'], correctAnswerIndex:2, explanation:'### Solution\n**Nyquist Rate**: $f_s \\geq 2f_m$. Sampling below this causes **aliasing**.' },
      ]
    }
  ]
};

// ============================================================================
// JEE EXAM SUBJECTS
// ============================================================================
const jeePhysics: Subject = {
  id: 'jee-phy', name: 'Physics',
  description: 'Mechanics, Electrodynamics, Optics, Thermodynamics, Modern Physics',
  chapters: [
    {
      id: 'phy-mech', name: 'Mechanics & Laws of Motion',
      description: 'Kinematics, Newton\'s Laws, Work-Energy, Rotational Motion',
      questions: [
        { id:'phy-1', difficulty:'easy', concept:'Projectile', text:'Maximum height of projectile with speed $u$ at angle $\\theta$:', options:['$\\frac{u^2\\sin^2\\theta}{2g}$','$\\frac{u^2\\sin 2\\theta}{g}$','$\\frac{u^2}{2g}$','$\\frac{u^2\\cos^2\\theta}{g}$'], correctAnswerIndex:0, explanation:'### Solution\nVertical component $v_y = u\\sin\\theta$. At max height $v_y = 0$:\n$$H = \\frac{(u\\sin\\theta)^2}{2g} = \\frac{u^2\\sin^2\\theta}{2g}$$' },
        { id:'phy-2', difficulty:'medium', concept:'Newton\'s Law', text:'A 10kg block on frictionless surface acted by 50N force. Acceleration =', options:['5 m/s²','500 m/s²','0.2 m/s²','50 m/s²'], correctAnswerIndex:0, explanation:'### Solution\n$a = F/m = 50/10 = \\textbf{5 m/s}^2$.' },
      ]
    },
    {
      id: 'phy-elec', name: 'Electrostatics & Current Electricity',
      description: 'Coulomb\'s Law, Gauss Law, Capacitors, Kirchhoff\'s Laws, Ohm\'s Law',
      questions: [
        { id:'elec-1', difficulty:'easy', concept:'Ohm\'s Law', text:'Ohm\'s Law states:', options:['$V = IR$','$V = I/R$','$V = I^2R$','$I = V^2/R$'], correctAnswerIndex:0, explanation:'### Solution\n$\\textbf{V = IR}$: Voltage = Current × Resistance (at constant temperature).' },
        { id:'elec-2', difficulty:'medium', concept:'Capacitors', text:'Equivalent capacitance of two capacitors C₁ and C₂ in parallel is:', options:['$C_1 C_2/(C_1+C_2)$','$C_1 + C_2$','$1/(1/C_1+1/C_2)$','$(C_1-C_2)/2$'], correctAnswerIndex:1, explanation:'### Solution\nParallel capacitors: $C_{eq} = C_1 + C_2$ (capacitances add in parallel, like batteries in parallel).' },
      ]
    }
  ]
};

const jeeChemistry: Subject = {
  id: 'jee-chem', name: 'Chemistry',
  description: 'Physical, Organic and Inorganic Chemistry',
  chapters: [
    {
      id: 'chem-org', name: 'Organic Chemistry',
      description: 'Hydrocarbons, Reaction Mechanisms, Named Reactions',
      questions: [
        { id:'chem-1', difficulty:'easy', concept:'Markovnikov', text:'Markovnikov\'s rule: In addition of HX to asymmetric alkene, H⁺ adds to carbon with:', options:['Fewer H atoms','More H atoms','Double bond carbon','Random carbon'], correctAnswerIndex:1, explanation:'### Solution\nMarkovnikov\'s Rule: $H^+$ adds to carbon with **more hydrogen atoms** (forming more stable carbocation intermediate).' },
        { id:'chem-2', difficulty:'medium', concept:'Isomerism', text:'Compounds with same molecular formula but different structural formula are:', options:['Isotopes','Isomers','Allotropes','Polymorphs'], correctAnswerIndex:1, explanation:'### Solution\n**Structural Isomers**: Same molecular formula, different connectivity/arrangement of atoms.' },
      ]
    },
    {
      id: 'chem-phys', name: 'Physical Chemistry',
      description: 'Chemical Equilibrium, Thermodynamics, Electrochemistry',
      questions: [
        { id:'phys-1', difficulty:'easy', concept:'Equilibrium', text:'Le Chatelier\'s Principle states that when equilibrium system is disturbed, it:', options:['Always moves forward','Shifts to oppose the disturbance','Reaches a new equilibrium immediately','Stops all reactions'], correctAnswerIndex:1, explanation:'### Solution\nLe Chatelier\'s Principle: System at equilibrium shifts to **counteract** the imposed change (stress).' },
      ]
    }
  ]
};

const jeeMath: Subject = {
  id: 'jee-math', name: 'Mathematics',
  description: 'Algebra, Calculus, Coordinate Geometry, Trigonometry, Probability',
  chapters: [
    {
      id: 'math-calc', name: 'Calculus',
      description: 'Limits, Continuity, Differentiation, Integration, Differential Equations',
      questions: [
        { id:'math-1', difficulty:'easy', concept:'Limits', text:'$\\lim_{x \\to 0} \\frac{\\sin x}{x} =$', options:['0','1','∞','Undefined'], correctAnswerIndex:1, explanation:'### Solution\nFundamental trigonometric limit: $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = \\textbf{1}$.' },
        { id:'math-2', difficulty:'medium', concept:'Integration', text:'$\\int e^x dx =$', options:['$e^{x-1}$','$e^x + C$','$xe^x$','$e^x/x + C$'], correctAnswerIndex:1, explanation:'### Solution\n$\\int e^x dx = e^x + C$ (exponential function is its own integral).' },
      ]
    },
    {
      id: 'math-algebra', name: 'Algebra & Coordinate Geometry',
      description: 'Quadratic Equations, Matrices, Circles, Parabola, Ellipse',
      questions: [
        { id:'alg-1', difficulty:'easy', concept:'Quadratic', text:'Sum of roots of $ax^2 + bx + c = 0$ is:', options:['$b/a$','$-b/a$','$c/a$','$-c/a$'], correctAnswerIndex:1, explanation:'### Solution\nVieta\'s formulas: Sum of roots = $-b/a$, Product of roots = $c/a$.' },
      ]
    }
  ]
};

// ============================================================================
// NEET EXAM SUBJECTS
// ============================================================================
const neetBotany: Subject = {
  id: 'neet-bot', name: 'Botany',
  description: 'Cell Biology, Plant Physiology, Genetics, Ecology, Reproduction',
  chapters: [
    {
      id: 'bot-cell', name: 'Cell Biology',
      description: 'Cell structure, Organelles, Cell division (Mitosis, Meiosis)',
      questions: [
        { id:'bot-1', difficulty:'easy', concept:'Photosynthesis', text:'Photosynthesis takes place in:', options:['Mitochondria','Chloroplast','Ribosome','Golgi apparatus'], correctAnswerIndex:1, explanation:'### Solution\n**Chloroplasts** contain chlorophyll for absorbing light energy and conducting photosynthesis.' },
        { id:'bot-2', difficulty:'medium', concept:'Cell Division', text:'Crossing over occurs during which phase of meiosis?', options:['Prophase I','Metaphase I','Anaphase I','Telophase II'], correctAnswerIndex:0, explanation:'### Solution\nCrossing over (exchange of genetic material between non-sister chromatids) occurs during **Prophase I** of Meiosis.' },
      ]
    },
    {
      id: 'bot-physio', name: 'Plant Physiology',
      description: 'Photosynthesis, Transpiration, Mineral Nutrition, Growth Hormones',
      questions: [
        { id:'bot-p1', difficulty:'easy', concept:'Transport', text:'Water transport from root to leaf through xylem is due to:', options:['Root pressure alone','Osmosis alone','Transpiration pull (cohesion-tension theory)','Active transport'], correctAnswerIndex:2, explanation:'### Solution\n**Cohesion-Tension Theory**: Transpiration from leaves creates tension (negative pressure) that pulls water column upward through xylem.' },
      ]
    }
  ]
};

const neetZoology: Subject = {
  id: 'neet-zoo', name: 'Zoology',
  description: 'Human Physiology, Animal Kingdom, Genetics, Reproduction, Evolution',
  chapters: [
    {
      id: 'zoo-physio', name: 'Human Physiology',
      description: 'Circulation, Respiration, Excretion, Neural, Endocrine System',
      questions: [
        { id:'zoo-1', difficulty:'easy', concept:'Blood pH', text:'Normal human blood pH range is:', options:['6.8-7.0','7.35-7.45','7.5-8.0','7.0-7.2'], correctAnswerIndex:1, explanation:'### Solution\nHuman blood pH is tightly maintained between **7.35 and 7.45** by buffer systems.' },
        { id:'zoo-2', difficulty:'medium', concept:'Heart', text:'SA Node is called pacemaker because:', options:['It is largest node','It initiates heartbeat with highest intrinsic rate','It connects atria and ventricles','It receives neural signals first'], correctAnswerIndex:1, explanation:'### Solution\n**SA Node** (Sinoatrial Node) initiates cardiac impulse with highest intrinsic firing rate (~72/min) → natural pacemaker.' },
      ]
    },
    {
      id: 'zoo-genetics', name: 'Genetics & Evolution',
      description: 'Mendel\'s Laws, DNA replication, Mutation, Darwin\'s Theory',
      questions: [
        { id:'gen-1', difficulty:'easy', concept:'Mendel', text:'Mendel\'s Law of Independent Assortment applies to genes located on:', options:['Same chromosome','Different (non-homologous) chromosomes','X chromosome only','Mitochondrial DNA'], correctAnswerIndex:1, explanation:'### Solution\nIndependent Assortment: Genes on **different (non-homologous) chromosomes** segregate independently during gamete formation.' },
      ]
    }
  ]
};

// ============================================================================
// SSC CGL SUBJECTS
// ============================================================================
const sscQuant: Subject = {
  id: 'ssc-quant', name: 'Quantitative Aptitude',
  description: 'Arithmetic, Algebra, Geometry, Mensuration, Data Interpretation',
  chapters: [
    {
      id: 'ssc-arith', name: 'Arithmetic & Number Theory',
      description: 'Percentage, Ratio, Profit-Loss, SI/CI, Time-Work, Speed-Distance',
      questions: [
        { id:'ssc-1', difficulty:'easy', concept:'Percentage', text:'25% of 480 = ?', options:['100','110','120','130'], correctAnswerIndex:2, explanation:'### Solution\n$25\\% \\times 480 = \\frac{25}{100} \\times 480 = \\textbf{120}$.' },
        { id:'ssc-2', difficulty:'medium', concept:'Compound Interest', text:'CI on ₹1000 at 10% p.a. for 2 years =', options:['₹200','₹210','₹220','₹100'], correctAnswerIndex:1, explanation:'### Solution\n$A = 1000(1.1)^2 = 1000 \\times 1.21 = 1210$. CI = $1210 - 1000 = \\textbf{₹210}$.' },
        { id:'ssc-3', difficulty:'medium', concept:'Work', text:'A does work in 10 days, B in 15 days. Together they finish in:', options:['5 days','6 days','8 days','12 days'], correctAnswerIndex:1, explanation:'### Solution\nCombined rate = $\\frac{1}{10} + \\frac{1}{15} = \\frac{3+2}{30} = \\frac{1}{6}$. Together: **6 days**.' },
      ]
    },
    {
      id: 'ssc-reasoning', name: 'Logical Reasoning',
      description: 'Coding-Decoding, Blood Relations, Seating, Series, Analogy',
      questions: [
        { id:'reas-1', difficulty:'easy', concept:'Number Series', text:'Series: 2, 6, 12, 20, 30, ?', options:['40','42','44','48'], correctAnswerIndex:1, explanation:'### Solution\nDifferences: 4, 6, 8, 10, **12**. Next: 30 + 12 = **42**.' },
        { id:'reas-2', difficulty:'medium', concept:'Blood Relations', text:'A is father of B, B is sister of C. How is A related to C?', options:['Uncle','Father','Grandfather','Brother'], correctAnswerIndex:1, explanation:'### Solution\nA → father of B → B is sister of C → A is also **father** of C.' },
      ]
    }
  ]
};

// ============================================================================
// ALL EXAMS — MASTER LIST
// ============================================================================
export const EXAMS_DATA: Exam[] = [
  {
    id: 'gate', name: 'GATE', fullName: 'Graduate Aptitude Test in Engineering',
    description: 'National exam for IIT M.Tech/Ph.D admissions and PSU recruitment.',
    icon: '🎓', color: '#6366f1', gradient: 'from-indigo-500 to-violet-600', totalSubjects: 12,
    branches: [
      {
        id: 'cs', name: 'CS & IT', fullName: 'Computer Science & Information Technology', icon: '💻',
        subjects: [gateCS_EM, gateCS_DL, gateCS_COA, gateCS_DS, gateCS_Algo, gateCS_TOC, gateCS_CD, gateCS_OS, gateCS_DBMS, gateCS_CN, gateCS_SE, gateCS_GA]
      },
      {
        id: 'ece', name: 'ECE', fullName: 'Electronics & Communication Engineering', icon: '📡',
        subjects: [gateECE_Signals]
      }
    ]
  },
  {
    id: 'jee', name: 'JEE', fullName: 'Joint Entrance Examination (Main + Advanced)',
    description: 'Engineering entrance for IITs, NITs, and IIITs.',
    icon: '⚗️', color: '#3b82f6', gradient: 'from-blue-500 to-cyan-500', totalSubjects: 3,
    subjects: [jeePhysics, jeeChemistry, jeeMath]
  },
  {
    id: 'neet', name: 'NEET', fullName: 'National Eligibility cum Entrance Test',
    description: 'Medical entrance for MBBS/BDS/AYUSH admissions.',
    icon: '🩺', color: '#10b981', gradient: 'from-emerald-500 to-teal-500', totalSubjects: 4,
    subjects: [neetBotany, neetZoology, jeePhysics, jeeChemistry]
  },
  {
    id: 'ssc-cgl', name: 'SSC CGL', fullName: 'SSC Combined Graduate Level',
    description: 'Central government recruitment for Group B & C posts.',
    icon: '💼', color: '#f59e0b', gradient: 'from-amber-500 to-orange-500', totalSubjects: 4,
    subjects: [sscQuant]
  }
];

export function getChapterQuestions(chapter: Chapter, difficulty: Difficulty, count: number): Question[] {
  let pool = chapter.questions.filter(q => q.difficulty === difficulty);
  if (pool.length < count) pool = chapter.questions;
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
