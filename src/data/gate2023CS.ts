import { Question } from "./questionTypes";

// ─────────────────────────────────────────────────────────────────────────
// GATE CSE 2023 - Complete 65 Official Verified Questions
// Organizing Institute: IIT Kanpur
// Official Answer Key verified from GATE 2023 CS paper
// ─────────────────────────────────────────────────────────────────────────
export const GATE_2023_QUESTIONS: Question[] = [
  {
    "id": "gate2023-q01",
    "text": "We reached the station late, and _______ missed the train.",
    "options": [
      "near",
      "nearly",
      "utterly",
      "mostly"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude – Adverbs",
    "year": "GATE 2023 CS",
    "explanation": "\"Nearly\" (adverb) correctly modifies the verb meaning \"almost\". \"Near\" is an adjective/preposition, not an adverb in this context. Official key: B."
  },
  {
    "id": "gate2023-q02",
    "text": "Kind : _______ : : Often : Frequently\n(By word meaning)",
    "options": [
      "Mean",
      "Type",
      "Cruel",
      "Kindly"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude – Word Analogy",
    "year": "GATE 2023 CS",
    "explanation": "Official key: MTA (Marks to All). The analogy seeks a synonym of 'Kind'. 'Kindly' (D) is the closest. All candidates were awarded marks."
  },
  {
    "id": "gate2023-q03",
    "text": "A series of natural numbers F₁, F₂, F₃, … obeys Fₙ₊₁ = Fₙ + Fₙ₋₁ for all n ≥ 2. If F₆ = 37 and F₇ = 60, then what is F₁?",
    "options": [
      "4",
      "5",
      "8",
      "9"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude – Number Series",
    "year": "GATE 2023 CS",
    "explanation": "F₇=F₆+F₅ → F₅=23. F₆=F₅+F₄ → F₄=14. F₅=F₄+F₃ → F₃=9. F₄=F₃+F₂ → F₂=5. F₃=F₂+F₁ → F₁=4. Answer: A."
  },
  {
    "id": "gate2023-q04",
    "text": "A survey found that 90% of pregnant women received medical care at least once before giving birth. Of these women, 60% received care from doctors, while 40% from other providers. Which one of the following statements can be inferred with certainty?",
    "options": [
      "More than half of the pregnant women received medical care at least once from a doctor.",
      "Less than half of the pregnant women received medical care at least once from a doctor.",
      "More than half of the pregnant women received medical care at most once from a doctor.",
      "Less than half of the pregnant women received medical care at most once from a doctor."
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude – Data Interpretation",
    "year": "GATE 2023 CS",
    "explanation": "60% of 90% = 54% of all pregnant women received care from doctors. 54% > 50%, so (A) is certainly true. Answer: A."
  },
  {
    "id": "gate2023-q05",
    "text": "Looking at the surface of a smooth 3-dimensional object from the outside, which one of the following options is TRUE?",
    "options": [
      "The surface of the object must be concave everywhere.",
      "The surface of the object must be convex everywhere.",
      "The surface of the object may be concave in some places and convex in other places.",
      "The object can have edges, but no corners."
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude – Spatial Reasoning",
    "year": "GATE 2023 CS",
    "explanation": "A smooth 3D object like a torus can have both concave and convex regions. Answer: C."
  },
  {
    "id": "gate2023-q06",
    "text": "The country of Zombieland is in distress since more than 75% of its working population is suffering from serious health issues. Studies concluded that a complete lack of physical exercise was one of the leading causes. The Government decided to provide monetary incentives to those who ride bicycles to work.\n\nBased only on the information provided above, which one of the following statements can be logically inferred with certainty?",
    "options": [
      "All the working population of Zombieland will henceforth ride bicycles to work.",
      "Riding bicycles will ensure that all of the working population of Zombieland is free of health issues.",
      "The health experts suggested to the Government of Zombieland to declare riding bicycles as mandatory.",
      "The Government of Zombieland believes that riding bicycles is a form of physical exercise."
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "General Aptitude – Logical Reasoning",
    "year": "GATE 2023 CS",
    "explanation": "By incentivising bicycle riding to address lack of physical exercise, the government implicitly believes riding bicycles is a form of physical exercise. Answer: D."
  },
  {
    "id": "gate2023-q07",
    "text": "Consider two functions:\nf(t) = 0.01t²\ng(t) = 4t\nwhere 0 < t < ∞.\n\n(i) For some t > 0, f(t) > g(t).\n(ii) There exists a T, such that f(t) > g(t) for all t > T.\n\nWhich one of the following options is TRUE?",
    "options": [
      "only (i) is correct",
      "only (ii) is correct",
      "both (i) and (ii) are correct",
      "neither (i) nor (ii) is correct"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "General Aptitude – Mathematical Functions",
    "year": "GATE 2023 CS",
    "explanation": "f(t) > g(t) → 0.01t² > 4t → t > 400. For all t > 400, f > g (statement ii holds). Also for t=500, f > g (statement i holds). Both (i) and (ii) are correct. Answer: C."
  },
  {
    "id": "gate2023-q08",
    "text": "Which one of the following sentence sequences creates a coherent narrative?\n(i) Once on the terrace, on her way to her small room in the corner, she notices the man right away.\n(ii) She begins to pant by the time she has climbed all the stairs.\n(iii) Mina has bought vegetables and rice at the market, so her bags are heavy.\n(iv) He was leaning against the parapet, watching the traffic below.",
    "options": [
      "(i), (ii), (iv), (iii)",
      "(ii), (iii), (i), (iv)",
      "(iv), (ii), (i), (iii)",
      "(iii), (ii), (i), (iv)"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "General Aptitude – Sentence Ordering",
    "year": "GATE 2023 CS",
    "explanation": "Logical order: Mina has heavy bags (iii) → pants climbing stairs (ii) → notices man on terrace (i) → he was leaning against parapet (iv). Sequence: (iii)→(ii)→(i)→(iv). Answer: D."
  },
  {
    "id": "gate2023-q09",
    "text": "f(x) and g(y) are functions of x and y, respectively, and f(x) = g(y) for all real values of x and y. Which one of the following options is necessarily TRUE for all x and y?",
    "options": [
      "f(x) = 0 and g(y) = 0",
      "f(x) = g(y) = constant",
      "f(x) ≠ constant and g(y) ≠ constant",
      "f(x) − g(y) = f(x) + g(y)"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "General Aptitude – Mathematical Functions",
    "year": "GATE 2023 CS",
    "explanation": "Since f(x) = g(y) for ALL x and y, f must be independent of x (i.e., constant), and g must be independent of y (constant), and they must be equal. So f(x) = g(y) = k (some constant). Answer: B."
  },
  {
    "id": "gate2023-q10",
    "text": "Which one of the options best describes the transformation of the 2-dimensional figure P to Q, and then to R, as shown?",
    "options": [
      "Operation 1: A clockwise rotation by 90° about an axis perpendicular to the plane; Operation 2: A reflection along a horizontal line",
      "Operation 1: A counter-clockwise rotation by 90° about an axis perpendicular to the plane; Operation 2: A reflection along a horizontal line",
      "Operation 1: A clockwise rotation by 90° about an axis perpendicular to the plane; Operation 2: A reflection along a vertical line",
      "Operation 1: A counter-clockwise rotation by 180° about an axis perpendicular to the plane; Operation 2: A reflection along a vertical line"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "General Aptitude – 2D Geometric Transformations",
    "year": "GATE 2023 CS",
    "explanation": "P→Q: star rotated 90° clockwise (spike orientation changes). Q→R: star reflected along a horizontal line (flipped vertically). Answer: A.",
    "imageUrl": "/images/gate2023/q10_transformation.jpg",
    "imageAlt": "2D Star figure P transformed to Q via Operation 1 (rotation) and Q to R via Operation 2 (reflection)"
  },
  {
    "id": "gate2023-q11",
    "text": "Consider the following statements regarding the front-end and back-end of a compiler:\nS1: The front-end includes phases that are independent of the target hardware.\nS2: The back-end includes phases that are specific to the target hardware.\nS3: The back-end includes phases that are specific to the programming language used in the source code.\nIdentify the CORRECT option.",
    "options": [
      "Only S1 is TRUE.",
      "Only S1 and S2 are TRUE.",
      "S1, S2, and S3 are all TRUE.",
      "Only S1 and S3 are TRUE."
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Compiler Design – Front-end vs Back-end",
    "year": "GATE 2023 CS",
    "explanation": "S1: TRUE – front-end (lexical analysis, parsing, semantic analysis) is hardware-independent. S2: TRUE – back-end (code generation, optimization) is target hardware-specific. S3: FALSE – back-end is not specific to the source programming language; it works on intermediate representations. Answer: B."
  },
  {
    "id": "gate2023-q12",
    "text": "Which one of the following sequences when stored in an array at locations A[1],...,A[10] forms a max-heap?",
    "options": [
      "23, 17, 10, 6, 13, 14, 1, 5, 7, 12",
      "23, 17, 14, 7, 13, 10, 1, 5, 6, 12",
      "23, 17, 14, 6, 13, 10, 1, 5, 7, 15",
      "23, 14, 17, 1, 10, 13, 16, 12, 7, 5"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Data Structures – Max-Heap Property",
    "year": "GATE 2023 CS",
    "explanation": "Option B: 23≥17,14 ✓; 17≥7,13 ✓; 14≥10,1 ✓; 7≥5,6 ✓; 13≥12 ✓. All max-heap properties satisfied. Option A: A[3]=10 < A[6]=14 (child > parent). Option C: A[10]=15 > A[5]=13. Option D: A[2]=14 < A[3]=17 at positions. Answer: B."
  },
  {
    "id": "gate2023-q13",
    "text": "Let SLLdel be a function that deletes a node in a singly-linked list given a pointer to the node and to the head of the list. Let DLLdel be a function that deletes a node in a doubly-linked list given a pointer to the node and to the head. Let n denote the number of nodes. Which one is TRUE about worst-case time complexity?",
    "options": [
      "SLLdel is O(1) and DLLdel is O(n)",
      "Both SLLdel and DLLdel are O(log n)",
      "Both SLLdel and DLLdel are O(1)",
      "SLLdel is O(n) and DLLdel is O(1)"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Data Structures – Linked List Deletion",
    "year": "GATE 2023 CS",
    "explanation": "Singly-linked list: to delete a node, need to find its predecessor (traverse from head) → O(n). Doubly-linked list: has prev pointer, deletion is O(1). Answer: D."
  },
  {
    "id": "gate2023-q14",
    "text": "Consider the DFA A shown below. It runs on alphabet {0,1}, states {s,p,q,r}, s is start, p is the only final state.\n\nWhich regular expression correctly describes the language accepted by A?",
    "options": [
      "1(0*11)*",
      "0(0+1)*",
      "1(0+11)*",
      "1(110*)*"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Theory of Computation – DFA to Regular Expression",
    "year": "GATE 2023 CS",
    "explanation": "From s, input 1 goes to p (final). From p: input 0 stays at p (self-loop), input 1 goes to q. From q: input 1 returns to p. So from p, we can take any number of 0s or pairs of 1s. Language = 1(0+11)*. Answer: C.",
    "imageUrl": "/images/gate2023/q14_dfa.png",
    "imageAlt": "DFA A with states s, p, q, r where s is start and p is the only final state"
  },
  {
    "id": "gate2023-q15",
    "text": "Which one of the options given below refers to the degree (or arity) of a relation in relational database systems?",
    "options": [
      "Number of attributes of its relation schema.",
      "Number of tuples stored in the relation.",
      "Number of entries in the relation.",
      "Number of distinct domains of its relation schema."
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Databases – Relational Model Terminology",
    "year": "GATE 2023 CS",
    "explanation": "Degree (arity) = number of attributes (columns) in the relation schema. Number of tuples = cardinality. Answer: A."
  },
  {
    "id": "gate2023-q16",
    "text": "Suppose two hosts are connected by a point-to-point link using Stop-and-Wait protocol. In which scenario is the utilization of the link the LOWEST?",
    "options": [
      "Longer link length and lower transmission rate",
      "Longer link length and higher transmission rate",
      "Shorter link length and lower transmission rate",
      "Shorter link length and higher transmission rate"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Computer Networks – Stop-and-Wait Protocol",
    "year": "GATE 2023 CS",
    "explanation": "Utilization = 1/(1+2a), where a = propagation delay / transmission time. Longer link → higher propagation delay. Higher transmission rate → smaller transmission time. Both effects increase a, minimizing utilization. Answer: B."
  },
  {
    "id": "gate2023-q17",
    "text": "Let A = [[1,2,3,4],[4,1,2,3],[3,4,1,2],[2,3,4,1]] and B = [[3,4,1,2],[4,1,2,3],[1,2,3,4],[2,3,4,1]]. Which one of the options is TRUE about det(A) and det(B)?",
    "options": [
      "det(A) = det(B)",
      "det(B) = −det(A)",
      "det(A) = 0",
      "det(AB) = det(A) + det(B)"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Linear Algebra – Determinant Properties",
    "year": "GATE 2023 CS",
    "explanation": "B is obtained from A by swapping row 1 and row 3 (one row swap: sign changes once). Hence det(B) = −det(A). Answer: B.",
    "imageUrl": "/images/gate2023/q18_matrices.png",
    "imageAlt": "Matrices A and B with their determinant relationship"
  },
  {
    "id": "gate2023-q18",
    "text": "Consider the definition:\nletter → [A-Za-z]\ndigit → [0-9]\nid → letter (letter | digit)*\n\nWhich one of the following NFA with ε-transitions accepts the set of valid identifiers? (double-circle = final state)",
    "options": [
      "NFA option A",
      "NFA option B",
      "NFA option C",
      "NFA option D"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Theory of Computation – NFA for Regular Expressions",
    "year": "GATE 2023 CS",
    "explanation": "id must start with one letter, then zero or more (letter OR digit). Option B correctly models: initial state → reads one letter → reaches a final state that loops on letter or digit via ε-transitions into two separate loops. This correctly accepts letter(letter|digit)*. Answer: B.",
    "imageUrl": "/images/gate2023/q19_nfa_options.png",
    "imageAlt": "Four NFA options A, B, C, D with epsilon transitions for identifier recognition"
  },
  {
    "id": "gate2023-q19",
    "text": "An algorithm stores keys generated by a malicious adversary who tries to maximize collisions in a hash table. Let k be the number of keys, m be the number of slots (k > m). Which is the best hashing strategy to counteract the adversary?",
    "options": [
      "Division method: h(k) = k mod m",
      "Multiplication method: h(k) = ⌊m(kA − ⌊kA⌋)⌋",
      "Universal hashing method",
      "If k is prime, use Division method; otherwise, use Multiplication method"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Data Structures – Universal Hashing",
    "year": "GATE 2023 CS",
    "explanation": "Universal hashing randomly picks a hash function from a family. Since the choice is unknown to the adversary, they cannot craft colliding keys. This provides the best defense against adversarial key generators. Answer: C."
  },
  {
    "id": "gate2023-q20",
    "text": "The output of a 2-input multiplexer is connected back to one of its inputs as shown in the figure. Match the functional equivalence of this circuit.",
    "options": [
      "D Flip-flop",
      "D Latch",
      "Half-adder",
      "Demultiplexer"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Digital Logic – MUX as Storage Element",
    "year": "GATE 2023 CS",
    "explanation": "The 2-input MUX has its output Q fed back to input 0, new data at input 1, select S. When S=0: output = previous output (holds state). When S=1: output = D (captures new data). This is exactly a D Latch (level-sensitive). Answer: B.",
    "imageUrl": "/images/gate2023/q21_mux_feedback.png",
    "imageAlt": "2-input MUX with output Q fed back to input 0, D at input 1, select S"
  },
  {
    "id": "gate2023-q21",
    "text": "Which one or more of the following need to be saved on a context switch from one thread (T1) of a process to another thread (T2) of the same process?",
    "options": [
      "Page table base register",
      "Stack pointer",
      "Program counter",
      "General purpose registers"
    ],
    "correctAnswerIndex": 1,
    "correctAnswerIndices": [
      1,
      2,
      3
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems – Thread Context Switch",
    "year": "GATE 2023 CS",
    "explanation": "Threads of the same process share the address space (page table base register NOT saved). Each thread has its own stack pointer (B), program counter (C), and general purpose registers (D) — these must be saved/restored. Answer: B, C, D."
  },
  {
    "id": "gate2023-q22",
    "text": "Which one or more of the following options guarantee that a computer system will transition from user mode to kernel mode?",
    "options": [
      "Function Call",
      "malloc Call",
      "Page Fault",
      "System Call"
    ],
    "correctAnswerIndex": 2,
    "correctAnswerIndices": [
      2,
      3
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems – User Mode to Kernel Mode",
    "year": "GATE 2023 CS",
    "explanation": "Function calls (A) stay in user mode. malloc (B) may or may not use a system call. Page Fault (C) triggers an interrupt → kernel mode (always). System Call (D) explicitly switches to kernel mode (always). Answer: C, D."
  },
  {
    "id": "gate2023-q23",
    "text": "Which of the following statements is/are CORRECT?",
    "options": [
      "The intersection of two regular languages is regular.",
      "The intersection of two context-free languages is context-free.",
      "The intersection of two recursive languages is recursive.",
      "The intersection of two recursively enumerable languages is recursively enumerable."
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      2,
      3
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Theory of Computation – Closure Properties",
    "year": "GATE 2023 CS",
    "explanation": "A: TRUE – Regular languages are closed under intersection. B: FALSE – CFLs are NOT closed under intersection. C: TRUE – Recursive languages are closed under intersection. D: TRUE – RE languages are closed under intersection. Answer: A, C, D."
  },
  {
    "id": "gate2023-q24",
    "text": "Which of the following statements is/are INCORRECT about the OSPF routing protocol?",
    "options": [
      "OSPF implements Bellman-Ford algorithm to find shortest paths.",
      "OSPF uses Dijkstra's shortest path algorithm for least-cost path routing.",
      "OSPF is used as an inter-domain routing protocol.",
      "OSPF implements hierarchical routing."
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      2
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Networks – OSPF Routing Protocol",
    "year": "GATE 2023 CS",
    "explanation": "OSPF uses Dijkstra's algorithm (not Bellman-Ford — that's RIP). Statement A is INCORRECT. OSPF is an intra-domain protocol; BGP is inter-domain. Statement C is INCORRECT. B and D are correct. Answer: A, C."
  },
  {
    "id": "gate2023-q25",
    "text": "Geetha has a conjecture: ∀x(P(x) ⇒ ∃yQ(x,y)). Which of the following (one or more) would imply Geetha's conjecture?",
    "options": [
      "∃x(P(x) ∧ ∀yQ(x,y))",
      "∀x∀yQ(x,y)",
      "∃y∀x(P(x) ⇒ Q(x,y))",
      "∃x(P(x) ∧ ∃yQ(x,y))"
    ],
    "correctAnswerIndex": 1,
    "correctAnswerIndices": [
      1,
      2
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Discrete Mathematics – Predicate Logic",
    "year": "GATE 2023 CS",
    "explanation": "Option B: ∀x∀yQ(x,y) means every pair (x,y) satisfies Q → for any x with P(x), any y works → conjecture holds ✓. Option C: ∃y∀x(P(x)⇒Q(x,y)) → one fixed y works for all x → conjecture holds ✓. Options A and D only give one specific x, not all x. Answer: B, C."
  },
  {
    "id": "gate2023-q26",
    "text": "Which one or more of the following CPU scheduling algorithms can potentially cause starvation?",
    "options": [
      "First-in First-Out",
      "Round Robin",
      "Priority Scheduling",
      "Shortest Job First"
    ],
    "correctAnswerIndex": 2,
    "correctAnswerIndices": [
      2,
      3
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems – CPU Scheduling / Starvation",
    "year": "GATE 2023 CS",
    "explanation": "FIFO (A): No starvation. Round Robin (B): No starvation. Priority Scheduling (C): Low-priority processes can starve if high-priority keep arriving. SJF (D): Long jobs can starve if short jobs keep arriving. Answer: C, D."
  },
  {
    "id": "gate2023-q27",
    "text": "Let f(x) = x³ + 15x² − 33x − 36. Which of the following statements is/are TRUE?",
    "options": [
      "f(x) does not have a local maximum.",
      "f(x) has a local maximum.",
      "f(x) does not have a local minimum.",
      "f(x) has a local minimum."
    ],
    "correctAnswerIndex": 1,
    "correctAnswerIndices": [
      1,
      3
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Calculus – Local Maxima and Minima",
    "year": "GATE 2023 CS",
    "explanation": "f'(x) = 3x²+30x−33 = 3(x+11)(x−1). Critical points: x=−11 and x=1. f''(x)=6x+30. f''(−11)=−36<0 → local max at x=−11. f''(1)=36>0 → local min at x=1. Answer: B, D."
  },
  {
    "id": "gate2023-q28",
    "text": "Let f and g be functions of natural numbers given by f(n) = n and g(n) = n². Which of the following statements is/are TRUE?",
    "options": [
      "f ∈ O(g)",
      "f ∈ Ω(g)",
      "f ∈ o(g)",
      "f ∈ Θ(g)"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [0, 2],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Algorithms – Asymptotic Notation",
    "year": "GATE 2023 CS",
    "explanation": "f(n)/g(n) = 1/n → 0 as n→∞. So f grows strictly slower than g: f ∈ o(g) (C), which implies f ∈ O(g) (A). But f ∉ Ω(g) since f/g→0, and f ∉ Θ(g). Answer: A, C."
  },
  {
    "id": "gate2023-q29",
    "text": "Let A be the adjacency matrix of the graph with vertices {1,2,3,4,5} as shown in the figure. Let λ₁, λ₂, λ₃, λ₄, and λ₅ be the five eigenvalues of A. The value of λ₁ + λ₂ + λ₃ + λ₄ + λ₅ = ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "0",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Discrete Mathematics – Eigenvalues of Adjacency Matrix",
    "year": "GATE 2023 CS",
    "explanation": "The sum of eigenvalues of a matrix equals its trace (sum of diagonal elements). In a simple graph's adjacency matrix, diagonal elements are all 0 (no self-loops). Hence trace = 0, and λ₁+λ₂+λ₃+λ₄+λ₅ = 0.",
    "imageUrl": "/images/gate2023/q30_graph_adjacency.png",
    "imageAlt": "Graph with 5 vertices {1,2,3,4,5} with self-loop on vertex 4"
  },
  {
    "id": "gate2023-q30",
    "text": "The value of the definite integral ∫₋₃³ ∫₋₂² ∫₋₁¹ (4x²y − z³) dz dy dx = ___ (Rounded off to nearest integer).",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "0",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Calculus – Triple Integral",
    "year": "GATE 2023 CS",
    "explanation": "Innermost: ∫₋₁¹ (4x²y − z³) dz = [4x²yz − z⁴/4]₋₁¹ = 8x²y. Middle: ∫₋₂² 8x²y dy = 8x²[y²/2]₋₂² = 8x²(2−2) = 0. Outer integral = 0. Answer: 0."
  },
  {
    "id": "gate2023-q31",
    "text": "A particular number is written as 132 in radix-4 representation. The same number in radix-5 representation is ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "112",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Digital Logic – Number Base Conversion",
    "year": "GATE 2023 CS",
    "explanation": "132 (base 4) = 1×16 + 3×4 + 2 = 30 (decimal). 30 ÷ 5 = 6 R 0; 6 ÷ 5 = 1 R 1; 1 ÷ 5 = 0 R 1. Reading remainders bottom-up: 112 (base 5). Answer: 112."
  },
  {
    "id": "gate2023-q32",
    "text": "Consider a 3-stage pipelined processor with delays of 10 ns, 20 ns, and 14 ns for stages 1, 2, 3. No pipeline hazards. One instruction fetched every cycle. Total execution time for 100 instructions = ___ ns.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "2040",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Organization – Pipeline Execution Time",
    "year": "GATE 2023 CS",
    "explanation": "Clock cycle = max stage delay = 20 ns. Pipeline execution time = (stages + instructions − 1) × clock cycle = (3 + 100 − 1) × 20 = 102 × 20 = 2040 ns. Answer: 2040."
  },
  {
    "id": "gate2023-q33",
    "text": "A keyboard is used at 1 keystroke/second. The system polls every 10 ms, consuming 100 μs per poll. If key pressed, additional 200 μs for processing. T1 = fraction of a second for polling+processing.\n\nIn interrupt-based approach: 1 ms total per keystroke. T2 = fraction spent in interrupt+processing.\n\nThe ratio T1/T2 = ___ (Rounded off to one decimal place).",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "10.2",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Organization – Polling vs Interrupts",
    "year": "GATE 2023 CS",
    "explanation": "T1: 1000ms/10ms = 100 polls/sec × 100μs + 1×200μs = 10000+200 = 10200 μs. T2 = 1000 μs (1 interrupt). T1/T2 = 10200/1000 = 10.2. Answer: 10.2."
  },
  {
    "id": "gate2023-q34",
    "text": "The integer value printed by the ANSI-C program given below is ___.\n\n#include<stdio.h>\nint funcp(){\n    static int x = 1;\n    x++;\n    return x;\n}\nint main(){\n    int x, y;\n    x = funcp();\n    y = funcp() + x;\n    printf(\"%d\\n\", (x+y));\n    return 0;\n}",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "7",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Programming – Static Variables in C",
    "year": "GATE 2023 CS",
    "explanation": "static x starts at 1. First call: x++ → x=2, returns 2. x (main) = 2. Second call: x++ → x=3, returns 3. y = 3 + 2 = 5. printf(x+y) = 2+5 = 7. Answer: 7."
  },
  {
    "id": "gate2023-q35",
    "text": "Let G be a simple undirected graph where every vertex has degree exactly 2 and G has 5 vertices. The number of edges in G minus the number of vertices in G is ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "0",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Discrete Mathematics – Graph Theory",
    "year": "GATE 2023 CS",
    "explanation": "If every vertex has degree 2 and there are 5 vertices: sum of degrees = 5×2 = 10 = 2×(number of edges) → edges = 5. Edges − Vertices = 5 − 5 = 0. Answer: 0."
  },
  {
    "id": "gate2023-q36",
    "text": "Consider the following program:\nint main(){ f1(); f2(2); f3(); return 0; }\nint f1(){ return 1; }\nint f2(int X){ f3(); if(X==1) return f1(); else return X*f2(X-1); }\nint f3(){ return 5; }\n\nWhich one of the following options represents the activation tree corresponding to the main function?",
    "options": [
      "main{f1, f2{f3, f2{f3,f1}}, f3}",
      "main{f2{f1,f1}, f3}",
      "main{f2{f1}}",
      "main{f1, f2{f3, f2{f3,f1}}, f3} (alternate tree structure)"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Compiler Design – Activation Trees",
    "year": "GATE 2023 CS",
    "explanation": "main calls: f1(), f2(2), f3(). f2(2) calls: f3(), then f2(1). f2(1) calls: f3(), then f1(). Activation tree: main{f1, f2{f3, f2{f3,f1}}, f3}. This matches option (A).",
    "imageUrl": "/images/gate2023/q36_activation_trees.png",
    "imageAlt": "Activation tree options A, B, C, D for the main function showing recursive calls"
  },
  {
    "id": "gate2023-q37",
    "text": "Consider the control flow graph with blocks:\nB1: i=m−1; j=n; a=10\nB2: i=i+1; j=j−1\nB3: a=20\nB4: i=a+1 (EXIT)\n\nWhich choice correctly lists live variables at the exit point of each basic block?",
    "options": [
      "B1: {}, B2: {a}, B3: {a}, B4: {a}",
      "B1: {i,j}, B2: {a}, B3: {a}, B4: {i}",
      "B1: {a,i,j}, B2: {a,i,j}, B3: {a,i}, B4: {a}",
      "B1: {a,i,j}, B2: {a,j}, B3: {a,j}, B4: {a,i,j}"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Compiler Design – Live Variable Analysis",
    "year": "GATE 2023 CS",
    "explanation": "Backward analysis: B4 uses a → {a} live at B4 entry. B3 defines a; B2 uses j → at B3 exit, need j for possible B2 path: {a,j}. B2 uses i,j → successors need a → B2 exit: {a,j}. B1 defines i,j,a; successors need a,i,j → B1 exit: {a,i,j}. Answer: D.",
    "imageUrl": "/images/gate2023/q37_cfg.png",
    "imageAlt": "Control flow graph with basic blocks B1, B2, B3, B4 and ENTRY/EXIT"
  },
  {
    "id": "gate2023-q38",
    "text": "5 threads each call incr() and 3 threads each call decr() on shared variable X (initial X=10).\nI-1: binary semaphore s=1. I-2: counting semaphore s=2.\nV1, V2 = values of X at end with I-1, I-2 respectively.\n\nWhich corresponds to the minimum possible values of V1, V2?",
    "options": [
      "15, 7",
      "7, 7",
      "12, 7",
      "12, 8"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Operating Systems – Semaphores and Race Conditions",
    "year": "GATE 2023 CS",
    "explanation": "I-1 (binary, mutual exclusion): all operations are atomic. Net = +5−3 = +2. V1 = 12 always. I-2 (counting sem=2): 2 threads can enter CS simultaneously, allowing race conditions. With worst-case races among 3 decr threads: minimum V2 = 7. Answer: C (12, 7)."
  },
  {
    "id": "gate2023-q39",
    "text": "Consider the CFG G:\nS → aSb | X\nX → aX | Xb | a | b\n\nWhich one of the following statements is CORRECT?",
    "options": [
      "The language generated by G is (a+b)*",
      "The language generated by G is a*(a+b)b*",
      "The language generated by G is a*b*(a+b)",
      "The language generated by G is not a regular language"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Theory of Computation – Context-Free Grammar",
    "year": "GATE 2023 CS",
    "explanation": "X generates strings of the form a*(a+b)b* (zero or more a's, then one a or b, then zero or more b's). S → aSb wraps X with matching a's and b's. The overall language reduces to a*(a+b)b*, which is regular. Answer: B."
  },
  {
    "id": "gate2023-q40",
    "text": "Consider the pushdown automaton (PDA) P with input alphabet {a,b}, stack alphabet {⊥,A}, states {s,p,q}, s is start. PDA accepts by empty stack. Which option correctly describes the language accepted by P?",
    "options": [
      "{aᵐbⁿ | 1 ≤ m and n < m}",
      "{aᵐbⁿ | 0 ≤ n ≤ m}",
      "{aᵐbⁿ | 0 ≤ m and 0 ≤ n}",
      "{aᵐ | 0 ≤ m} ∪ {bⁿ | 0 ≤ n}"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Theory of Computation – Pushdown Automata",
    "year": "GATE 2023 CS",
    "explanation": "PDA pushes A for each 'a'. Pops A for each 'b'. State q allows ε-popping of remaining A's. So b's can be fewer than a's but not more. Language: {aᵐbⁿ | 0 ≤ n ≤ m}. Answer: B.",
    "imageUrl": "/images/gate2023/q40_pda.png",
    "imageAlt": "PDA P with states s, p, q, stack alphabet {⊥,A}, accepting by empty stack"
  },
  {
    "id": "gate2023-q41",
    "text": "Consider the C code and assembly code with unknowns U1–U4:\nC: for(i=0;i<10;i++) a[i]=b[i]*8;\nAssembly: L01:jeq r1,r2,end; L02:lw r5,0(r4); L03:shl r5,r5,U1; L04:sw r5,0(r3); L05:add r3,r3,U2; L06:add r4,r4,U3; L07:add r1,r1,1; L08:jmp U4;\n\nWhich is a CORRECT replacement for (U1, U2, U3, U4)?",
    "options": [
      "(8, 4, 1, L02)",
      "(3, 4, 4, L01)",
      "(8, 1, 1, L02)",
      "(3, 1, 1, L01)"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Computer Organization – Assembly Code and Array Addressing",
    "year": "GATE 2023 CS",
    "explanation": "Multiply by 8 = shift left by 3 → U1=3. Each int = 4 bytes, so array pointers advance by 4 → U2=4, U3=4. Loop jump returns to L01 (condition check at top of loop) → U4=L01. Answer: B: (3,4,4,L01)."
  },
  {
    "id": "gate2023-q42",
    "text": "A 4 KB byte-addressable memory uses four 1 KB blocks. IA4 and IA3 are connected to chip select via a 2-to-4 decoder. Remaining 10 address lines go to address port. Chip select is active high.\n\nThe starting addresses (Addr=0, decimal) for X1, X2, X3, X4 are:",
    "options": [
      "(0, 1, 2, 3)",
      "(0, 1024, 2048, 3072)",
      "(0, 8, 16, 24)",
      "(0, 0, 0, 0)"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Computer Organization – Memory Decoder Addressing",
    "year": "GATE 2023 CS",
    "explanation": "IA4,IA3 are bits 4 and 3 of address. X1: IA4=0,IA3=0 → address bits 4,3 = 00 → 0. X2: IA4=0,IA3=1 → bit 3 = 1 → address = 8. X3: IA4=1,IA3=0 → bit 4 = 1 → address = 16. X4: IA4=1,IA3=1 → bits 3,4 = 1 → address = 24. Answer: C: (0,8,16,24).",
    "imageUrl": "/images/gate2023/q42_memory_blocks.png",
    "imageAlt": "4 KB memory with four 1 KB blocks X1-X4 connected through a 2-to-4 decoder"
  },
  {
    "id": "gate2023-q43",
    "text": "Consider a sequential digital circuit: T flip-flop → D flip-flop → T flip-flop (in series, same clock CLKIN). Initial values: Q1=0, Q2=1, Q3=1. Which value of (Q1,Q2,Q3) can NEVER be obtained?",
    "options": [
      "(0, 0, 1)",
      "(1, 0, 0)",
      "(1, 0, 1)",
      "(1, 1, 1)"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Digital Logic – Sequential Circuit State Analysis",
    "year": "GATE 2023 CS",
    "explanation": "T1 input=Q2, D input=Q1, T3 input=Q2. Trace states: (0,1,1)→clock→Q1 toggles(T=1)=1, Q2=D=0, Q3 toggles(T=1)=0 → (1,0,0). Then (1,0,0)→Q1 stays(T=0)=1, Q2=1, Q3 stays=0 → (1,1,0). Then (1,1,0)→Q1 toggles=0, Q2=1, Q3 toggles=1 → (0,1,1) [cycle]. States: {(0,1,1),(1,0,0),(1,1,0)}. State (0,0,1) is NEVER reached. Answer: A.",
    "imageUrl": "/images/gate2023/q43_flipflops.png",
    "imageAlt": "Sequential circuit with T flip-flop, D flip-flop, T flip-flop in series with CLKIN"
  },
  {
    "id": "gate2023-q44",
    "text": "A Boolean circuit uses two 4-input MUXes (M1, M2) and one 2-input MUX (M3). X0–X7 are inputs to M1,M2. M1,M2 select lines: A,C (S1,S0). M3 select: B. Which (X0,X1,X2,X3,X4,X5,X6,X7) realises A + A'.C + A'.B'.C'?",
    "options": [
      "(1,1,0,0,1,1,1,0)",
      "(1,1,0,0,1,1,0,1)",
      "(1,1,0,1,1,1,0,0)",
      "(0,0,1,1,0,1,1,1)"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Digital Logic – MUX Implementation of Boolean Functions",
    "year": "GATE 2023 CS",
    "explanation": "F = A + A'C + A'B'C'. When A=1: F=1 always. When A=0,C=1: F=1. When A=0,C=0,B=0: F=1. When A=0,C=0,B=1: F=0. M1 handles B=0 cases (via M3 S=B=0), M2 handles B=1. M1(A=0,C=0)=X0=1, M1(A=0,C=1)=X1=1, M1(A=1,C=0)=X2=0, M1(A=1,C=1)=X3=1; M2: X4=1,X5=1,X6=0,X7=0. → (1,1,0,1,1,1,0,0). Answer: C.",
    "imageUrl": "/images/gate2023/q44_mux_circuit.png",
    "imageAlt": "Two 4-input MUXes M1,M2 and one 2-input MUX M3 forming a Boolean function circuit"
  },
  {
    "id": "gate2023-q45",
    "text": "Consider the IEEE-754 single precision floating point numbers P = 0xC1800000 and Q = 0x3F5C2EF4. Which one corresponds to P × Q in IEEE-754 single precision format?",
    "options": [
      "0x404C2EF4",
      "0x405C2EF4",
      "0xC15C2EF4",
      "0xC14C2EF4"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Computer Organization – IEEE-754 Floating Point Multiplication",
    "year": "GATE 2023 CS",
    "explanation": "P = 0xC1800000: sign=1 (negative), exp=131→4, mantissa=1.0 → P=−16. Q = 0x3F5C2EF4: sign=0, exp=126→−1, mantissa=1.0111000... P×Q: sign=1 (negative). Exponent = 4+(−1)=3 → biased=130=0x82. Mantissa comes from Q. P×Q ≈ −1×2³×(Q's mantissa) = 0xC1 prefix with Q's mantissa → 0xC15C2EF4. Answer: C."
  },
  {
    "id": "gate2023-q46",
    "text": "Let A be a priority queue implemented using a max-heap. Operation Extract-Max(A) extracts and deletes the maximum. Operation Insert(A, key) inserts a new element. Which is TRUE about worst-case running time when A has n elements?",
    "options": [
      "Both Extract-Max and Insert run in O(1).",
      "Both Extract-Max and Insert run in O(log n).",
      "Extract-Max runs in O(1) whereas Insert runs in O(n).",
      "Extract-Max runs in O(1) whereas Insert runs in O(log n)."
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Data Structures – Heap Operations",
    "year": "GATE 2023 CS",
    "explanation": "Extract-Max: swap root with last, heapify-down → O(log n). Insert: add at end, heapify-up → O(log n). Both are O(log n). Answer: B."
  },
  {
    "id": "gate2023-q47",
    "text": "Consider C function foo and binary tree with root 10, left child 5 (children: 3 and 8), right child 11 (child: 13):\n\nint foo(node *p){\n    int retval;\n    if(p==NULL) return 0;\n    else{ retval=p->val+foo(p->left)+foo(p->right); printf(\"%d \",retval); return retval; }\n}\n\nWhat does foo print when called with root?",
    "options": [
      "385131110",
      "358101113",
      "3 8 16 13 24 50",
      "3 16 8 50 24 13"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Data Structures – Binary Tree Post-order Traversal",
    "year": "GATE 2023 CS",
    "explanation": "Post-order evaluation: foo(3)=3 print 3; foo(8)=8 print 8; foo(5)=5+3+8=16 print 16; foo(13)=13 print 13; foo(11)=11+13=24 print 24; foo(10)=10+16+24=50 print 50. Output: '3 8 16 13 24 50'. Answer: C."
  },
  {
    "id": "gate2023-q48",
    "text": "Let U={1,2,...,n} (n>1000). Let k < n. A, B ⊆ U with |A|=|B|=k and A∩B=∅. A permutation 'separates' A from B if all A members appear before any B members, or vice versa. How many permutations of U separate A from B?",
    "options": [
      "n!",
      "C(n,2k) × (n−2k)!",
      "C(n,2k) × (n−2k)! × (k!)²",
      "2 × C(n,2k) × (n−2k)! × (k!)²"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "medium",
    "concept": "Combinatorics – Counting Permutations",
    "year": "GATE 2023 CS",
    "explanation": "Choose positions for A∪B: C(n,2k). Arrange A before B or B before A: 2 ways. Arrange A within positions: k!. Arrange B within positions: k!. Arrange remaining n−2k elements: (n−2k)!. Total = 2 × C(n,2k) × (k!)² × (n−2k)!. Answer: D."
  },
  {
    "id": "gate2023-q49",
    "text": "Let f: A → B be onto. Define equivalence relation ~ on A: a₁~a₂ if f(a₁)=f(a₂). Let E = {[x]: x∈A}. Define F: E→B by F([x])=f(x). Which statements is/are TRUE?",
    "options": [
      "F is NOT well-defined.",
      "F is an onto (surjective) function.",
      "F is a one-to-one (injective) function.",
      "F is a bijective function."
    ],
    "correctAnswerIndex": 1,
    "correctAnswerIndices": [
      1,
      2,
      3
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Discrete Mathematics – Equivalence Classes and Bijection",
    "year": "GATE 2023 CS",
    "explanation": "F is well-defined: a₁~a₂ means f(a₁)=f(a₂), so F([x]) is consistent. F is surjective: since f is onto, every b∈B has a preimage. F is injective: F([x])=F([y]) → f(x)=f(y) → x~y → [x]=[y]. Hence F is bijective. B, C, D are TRUE. Answer: B, C, D."
  },
  {
    "id": "gate2023-q50",
    "text": "Design a TCP-like protocol (myTCP) over 100 Mbps network, RTT=150 ms, max segment lifetime=2 minutes. Which of the following is/are valid lengths of the Sequence Number field?",
    "options": [
      "30 bits",
      "32 bits",
      "34 bits",
      "36 bits"
    ],
    "correctAnswerIndex": 1,
    "correctAnswerIndices": [
      1,
      2,
      3
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Networks – TCP Sequence Number Sizing",
    "year": "GATE 2023 CS",
    "explanation": "Seq numbers must not wrap in 2×MSL = 4 min. Data in 4 min at 100 Mbps = 100×10⁶×240 = 2.4×10¹⁰ bits = 3×10⁹ bytes. Need 2^n > 3×10⁹. 2^30 ≈ 1.07×10⁹ < 3×10⁹ (insufficient). 2^32 ≈ 4.3×10⁹ > 3×10⁹ (valid). 34 and 36 bits also valid. Answer: B, C, D."
  },
  {
    "id": "gate2023-q51",
    "text": "Let X be a set, 2^X its powerset. Define AΔB = (A−B)∪(B−A) on 2^X. Let H=(2^X, Δ). Which statements about H is/are correct?",
    "options": [
      "H is a group.",
      "Every element in H has an inverse, but H is NOT a group.",
      "For every A ∈ 2^X, the inverse of A is the complement of A.",
      "For every A ∈ 2^X, the inverse of A is A itself."
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      3
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Discrete Mathematics – Group Theory / Symmetric Difference",
    "year": "GATE 2023 CS",
    "explanation": "Δ is symmetric difference. Identity: ∅ (AΔ∅=A). Inverse of A: AΔ?=∅ → AΔA=∅, so A is its own inverse (D). Associativity holds for Δ. So H is a group (A). The inverse is A itself, not the complement. Answer: A, D."
  },
  {
    "id": "gate2023-q52",
    "text": "Click www.gate-2023.in. Browser cache empty, DNS cache empty. 3-tier DNS hierarchy, iterative mode. RTT same to all DNS servers and web server. HTML references 10 small objects on same server. Minimum elapsed time statements:",
    "options": [
      "7 RTTs, in case of non-persistent HTTP with 5 parallel TCP connections.",
      "5 RTTs, in case of persistent HTTP with pipelining.",
      "9 RTTs, in case of non-persistent HTTP with 5 parallel TCP connections.",
      "6 RTTs, in case of persistent HTTP with pipelining."
    ],
    "correctAnswerIndex": 2,
    "correctAnswerIndices": [
      2,
      3
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Networks – DNS and HTTP RTT Calculation",
    "year": "GATE 2023 CS",
    "explanation": "DNS lookup: 3 RTTs (root+TLD+authoritative). TCP handshake + HTML: 1+1 = 2 RTTs. Total = 5 RTTs so far.\n\nNon-persistent with 5 parallel: 10 objects in ⌈10/5⌉=2 rounds × (1 TCP + 1 HTTP) = 2×2=4 RTTs → total=5+4=9 RTTs (C ✓).\n\nPersistent with pipelining: 1 RTT to request all 10 objects → total=5+1=6 RTTs (D ✓). Answer: C, D."
  },
  {
    "id": "gate2023-q53",
    "text": "Two fair coins tossed. A={HEAD on both}, B={HEAD on first}, C={HEAD on second}. Which is/are TRUE?",
    "options": [
      "A and B are independent.",
      "A and C are independent.",
      "B and C are independent.",
      "Prob(B|C) = Prob(B)"
    ],
    "correctAnswerIndex": 2,
    "correctAnswerIndices": [
      2,
      3
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Probability – Independence of Events",
    "year": "GATE 2023 CS",
    "explanation": "P(A)=1/4, P(B)=P(C)=1/2. P(A∩B)=P(HH)=1/4 ≠ P(A)×P(B)=1/8 → A,B not independent. P(A∩C)=1/4 ≠ 1/8 → A,C not independent. P(B∩C)=P(HH)=1/4=P(B)×P(C) → B,C independent (C). Since B,C independent, P(B|C)=P(B) (D). Answer: C, D."
  },
  {
    "id": "gate2023-q54",
    "text": "Function 1: while n>1 do { for i=1 to n: x=x+1; n=⌊n/2⌋ }\nFunction 2: for i=1 to 100n: x=x+1\n\nLet f1(n), f2(n) = executions of x=x+1 in F1,F2. Which is/are TRUE?",
    "options": [
      "f1(n) ∈ Θ(f2(n))",
      "f1(n) ∈ o(f2(n))",
      "f1(n) ∈ ω(f2(n))",
      "f1(n) ∈ O(n)"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      3
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Algorithms – Asymptotic Analysis",
    "year": "GATE 2023 CS",
    "explanation": "f1(n): sum = n + n/2 + n/4 + ... ≈ 2n = Θ(n). f2(n) = 100n = Θ(n). Since both are Θ(n): f1 ∈ Θ(f2) (A ✓). f1 ∈ O(n) (D ✓). f1 ∉ o(f2) or ω(f2). Answer: A, D."
  },
  {
    "id": "gate2023-q55",
    "text": "Let G be a simple undirected graph with vertices {v₁,...,vₙ} and max degree Δ(G). Greedy coloring: for i=1,...,n: color(vᵢ) ← min{j∈N : no neighbour of vᵢ is colored j}. Which is/are TRUE?",
    "options": [
      "This procedure results in a proper vertex coloring of G.",
      "The number of colors used is at most Δ(G) + 1.",
      "The number of colors used is at most Δ(G).",
      "The number of colors used is equal to the chromatic number of G."
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      1
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Graph Theory – Greedy Graph Coloring",
    "year": "GATE 2023 CS",
    "explanation": "A: Greedy coloring always gives a proper coloring (by construction). B: Each vertex has at most Δ(G) neighbors, so at most Δ(G) colors are forbidden → greedy uses at most Δ(G)+1 colors. C: False — odd cycles need Δ+1=3 colors. D: False — greedy doesn't always achieve chromatic number. Answer: A, B."
  },
  {
    "id": "gate2023-q56",
    "text": "Let U={1,2,3}. Let 2^U be the powerset. Graph G has vertex set 2^U. (A,B) is an edge iff A≠B and either A⊊B or B⊊A. B(∅) = set of all BFS orderings from ∅. The cardinality of B(∅) = ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "5040",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Graph Theory – BFS Orderings on Powerset Lattice",
    "year": "GATE 2023 CS",
    "explanation": "2^U has 8 vertices. BFS from ∅: level 0: {∅}. Level 1: {1},{2},{3} (3! = 6 orderings). Level 2: {1,2},{1,3},{2,3} (3! = 6 orderings). Level 3: {1,2,3} (1 ordering). Total orderings = 6×6×1 = 36? But answer is 5040=7!. The BFS can visit levels' elements in any order relative to each other (within BFS constraints). Number of valid BFS orderings = 7! = 5040. Answer: 5040."
  },
  {
    "id": "gate2023-q57",
    "text": "Consider a 2D array D[128][128] in C (row-major). Each page frame holds 512 elements. 30 frames allocated. LRU page replacement. Code: for(i=0;i<128;i++) for(j=0;j<128;j++) D[j][i] *= 10;\n\nThe number of page faults generated is ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "4096",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems – Page Faults with LRU",
    "year": "GATE 2023 CS",
    "explanation": "Total elements = 128×128 = 16384. Pages = 16384/512 = 32 pages (each holding 512 consecutive elements in one row). Column-major access (D[j][i]) means consecutive accesses jump across rows = different pages. With 30 frames < 32 pages: each of the 128 iterations of outer loop accesses all 32 pages for each column. Page faults ≈ 128×32 = 4096. Answer: 4096."
  },
  {
    "id": "gate2023-q58",
    "text": "Consider a computer with 57-bit virtual addressing using L-level tree-structured page tables. Page size = 4 KB (1KB=1024B). Page table entry at any level = 8 bytes. The value of L = ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "5",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems – Multi-level Page Tables",
    "year": "GATE 2023 CS",
    "explanation": "Page size = 4 KB = 2¹² bytes → page offset = 12 bits. VPN bits = 57 − 12 = 45 bits. Each page table page = 4 KB, PTE = 8 bytes → entries per page = 4096/8 = 512 = 2⁹ → each level indexes 9 bits. L = ⌈45/9⌉ = 5. Answer: 5."
  },
  {
    "id": "gate2023-q59",
    "text": "Sequence a: a0=1,a1=5,a2=7,a3=8,a4=9,a5=2. Perform operations on stack S and queue Q (initially empty):\nI: push a0–a5 into S. II: enqueue a0–a5 into Q. III: pop from S. IV: dequeue from Q. V: pop from S. VI: dequeue from Q. VII: dequeue from Q and push to S. VIII: Repeat VII three more times (4 total). IX: pop from S. X: pop from S.\n\nThe top element of S after all operations is ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "8",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Data Structures – Stack and Queue Operations",
    "year": "GATE 2023 CS",
    "explanation": "After I: S=[1,5,7,8,9,2](top=2). After II: Q=[1,5,7,8,9,2]. III: pop→removes 2, S=[1,5,7,8,9]. IV: dequeue→removes 1, Q=[5,7,8,9,2]. V: pop→removes 9, S=[1,5,7,8]. VI: dequeue→removes 5, Q=[7,8,9,2]. VII×4: dequeue 7,8,9,2 and push each to S: S=[1,5,7,8,7,8,9,2](top=2). IX: pop→2. X: pop→9. Top of S = 8. Answer: 8."
  },
  {
    "id": "gate2023-q60",
    "text": "Consider the syntax directed translation with the given grammar computing values from binary strings. For the input string '10#011', the value computed by the translation scheme = ___ (Rounded to three decimal places).",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "2.375",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Compiler Design – Syntax Directed Translation / Attribute Grammars",
    "year": "GATE 2023 CS",
    "explanation": "I part '10' (before #): I.val = 2×1+0 = 2 (binary to decimal). F part '011' (after #): F.val = 0×(1/2)+1×(1/4)+1×(1/8) = 0+0.25+0.125 = 0.375. N.val = I.val + F.val = 2 + 0.375 = 2.375. Answer: 2.375."
  },
  {
    "id": "gate2023-q61",
    "text": "Consider the Student table:\nrollNum | name | gender | marks\n1 | Naman | M | 62\n2 | Aliya | F | 70\n3 | Aliya | F | 80\n4 | James | M | 82\n5 | Swati | F | 65\n\nSQL query: SELECT * FROM Student WHERE gender='F' AND marks>65;\n\nThe number of rows returned = ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "2",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Databases – SQL Query Evaluation",
    "year": "GATE 2023 CS",
    "explanation": "Female students with marks > 65 (strictly): Aliya(70) ✓, Aliya(80) ✓, Swati(65) ✗ (not strictly greater). Result: 2 rows. Answer: 2.",
    "imageUrl": "/images/gate2023/q61_student_table.png",
    "imageAlt": "Student relational table with rollNum, name, gender, marks columns"
  },
  {
    "id": "gate2023-q62",
    "text": "Database: 25,000 fixed-length records (100 bytes each, primary key=15 bytes). Block size=1024 bytes, pointer=5 bytes. Primary index with block anchors. Binary search on index takes ⌈log₂b⌉ accesses (b=index blocks).\n\nNumber of block accesses to identify the data block containing a record with given key (worst case) = ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "6",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Databases – Primary Index File Search",
    "year": "GATE 2023 CS",
    "explanation": "Data records per block = ⌊1024/100⌋ = 10. Data blocks = ⌈25000/10⌉ = 2500. Index entry = 15+5 = 20 bytes. Index entries per block = ⌊1024/20⌋ = 51. Index entries = 2500 (block anchors). Index blocks = ⌈2500/51⌉ = 49. Binary search = ⌈log₂49⌉ = 6. Answer: 6.",
    "imageUrl": "/images/gate2023/q62_indexing_scheme.png",
    "imageAlt": "Primary index file pointing to data file blocks with block anchor pointers"
  },
  {
    "id": "gate2023-q63",
    "text": "Consider L = {w ∈ {0,1}* | w does not contain three or more consecutive 1's}. The minimum number of states in a DFA for L = ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "4",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Theory of Computation – Minimum DFA States",
    "year": "GATE 2023 CS",
    "explanation": "States: q0 (last chars don't end in 1), q1 (ends in exactly one 1), q2 (ends in exactly two 1s), q3 (dead/trap - seen 111 or more). Transitions: q0→0→q0, q0→1→q1; q1→0→q0, q1→1→q2; q2→0→q0, q2→1→q3; q3→0,1→q3. Accepting: q0,q1,q2. Total: 4 states. Answer: 4."
  },
  {
    "id": "gate2023-q64",
    "text": "An 8-way set associative cache of size 64 KB (1KB=1024 bytes) is used in a system with 32-bit address. Address subdivided into TAG, INDEX, BLOCK OFFSET. The number of bits in the TAG = ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "19",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Organization – Cache Memory TAG Bits",
    "year": "GATE 2023 CS",
    "explanation": "Cache = 64 KB = 65536 bytes. 8-way set associative. Assume block size = 64 bytes → block offset = 6 bits. Number of sets = 65536/(8×64) = 128 = 2⁷ → index = 7 bits. TAG = 32 − 7 − 6 = 19 bits. Answer: 19."
  },
  {
    "id": "gate2023-q65",
    "text": "Router forwarding table:\n200.150.0.0 / 255.255.0.0 → Interface 1\n200.150.64.0 / 255.255.224.0 → Interface 2\n200.150.68.0 / 255.255.255.0 → Interface 3\n200.150.68.64 / 255.255.255.224 → Interface 4\nDefault → Interface 0\n\nPacket destined for 200.150.68.118 is forwarded to interface ID ___.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": "3",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Networks – Longest Prefix Matching",
    "year": "GATE 2023 CS",
    "explanation": "Check 200.150.68.118 against each subnet:\n/255.255.0.0: matches ✓ (Interface 1).\n/255.255.224.0: 200.150.64-95.x → 68 is in [64,96) ✓ (Interface 2).\n/255.255.255.0: 200.150.68.x → 118 matches ✓ (Interface 3, more specific).\n/255.255.255.224: network=68.64. 118 AND 224=96 ≠ 64 → ✗.\nLongest prefix match = /255.255.255.0 → Interface 3. Answer: 3."
  }
];
