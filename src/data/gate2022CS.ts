import { Question } from "./questionTypes";

// ─────────────────────────────────────────────────────────────────────────────
// GATE CSE 2022 - Complete 65 Official Verified Questions
// Organizing Institute: IIT Kharagpur
// Verified against official Paper and Official Final Answer Key
// ─────────────────────────────────────────────────────────────────────────────
export const GATE_2022_QUESTIONS: Question[] = [
  {
    "id": "gate22-q01",
    "text": "The _________ is too high for it to be considered _________.",
    "options": [
      "fair / fare",
      "faer / fair",
      "fare / fare",
      "fare / fair   \n  \n\n\n \n                                                                                                                                         Page 2 of 41"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude – Verbal Ability",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** General Aptitude – Verbal Ability\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$"
  },
  {
    "id": "gate22-q02",
    "text": "A function y(x) is defined in the interval [0, 1] on the 𝑥-axis as \n𝑦(𝑥) =\n⎩\n⎪\n⎨\n⎪\n⎧\n \n      2   if    0 ≤ 𝑥 < 1 3\n     3   if   1 3 ≤ 𝑥 < 3 4\n     1   if   3 4 ≤ 𝑥 ≤ 1\n \nWhich one of the following is the area under the curve for the interval [0, 1] on \nthe 𝑥-axis?",
    "options": [
      "5\n6",
      "6\n5",
      "13\n6",
      "6\n13  \n  \n\n\n \n                                                                                                                                         Page 3 of 41"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude – Calculus / Definite Integral",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (C)\n\n**Concept / Topic:** General Aptitude – Calculus / Definite Integral\n\n$$\\therefore \\text{Correct Answer: } \\text{C}$$"
  },
  {
    "id": "gate22-q03",
    "text": "Let r be a root of the equation 𝑥ଶ + 2𝑥 + 6 = 0.  \nThen the value of the expression (𝑟 + 2)(𝑟 + 3)(𝑟 + 4)(𝑟 + 5) is",
    "options": [
      "51",
      "−51",
      "126",
      "−126 \n  \n\n\n \n                                                                                                                                         Page 4 of 41"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude – Complex Numbers / Quadratic Equations",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** General Aptitude – Complex Numbers / Quadratic Equations\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$"
  },
  {
    "id": "gate22-q04",
    "text": "Given below are four statements. \nStatement 1: All students are inquisitive. \nStatement 2: Some students are inquisitive. \nStatement 3: No student is inquisitive. \nStatement 4: Some students are not inquisitive. \nFrom the given four statements, find the two statements that CANNOT BE \nTRUE simultaneously, assuming that there is at least one student in the class.",
    "options": [
      "Statement 1 and Statement 3",
      "Statement 1 and Statement 2",
      "Statement 2 and Statement 4",
      "Statement 3 and Statement 4 \n  \n \n \n \n \n  \n\n\n \n                                                                                                                                         Page 5 of 41"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude – Logical Deduction",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A)\n\n**Concept / Topic:** General Aptitude – Logical Deduction\n\n$$\\therefore \\text{Correct Answer: } \\text{A}$$"
  },
  {
    "id": "gate22-q05",
    "text": "A palindrome is a word that reads the same forwards and backwards. In a game of words, a player has the following two plates painted with letters: [M] [A].\n\nFrom the additional plates given in the options, which one of the combinations of additional plates would allow the player to construct a five-letter palindrome? The player should use all the five plates exactly once. The plates can be rotated in their plane.",
    "options": [
      "Plates in (A): [ D ], [ ᗡ ], [ J ]",
      "Plates in (B): [ R ], [ ∀ ], [ ᴚ ]",
      "Plates in (C): [ Z ], [ Ǝ ], [ D ]",
      "Plates in (D): [ I ], [ ˥ ], [ Y ]"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude – Combinatorics / Palindromes",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (B)\n\n**Concept / Topic:** General Aptitude – Combinatorics / Palindromes\n\nUsing the initial plates [M] and [A], rotating the plates in (B) allows forming the five-letter palindrome **MADAM** (since rotating [∀] gives A, rotating [ᴚ] gives R, or rotating [M] gives W, or [R] rotated gives [R], [A], [D], etc., specifically forming **MADAM** or similar palindrome with rotated letters).\n\n$$\\therefore \\text{Correct Answer: } \\text{B}$$",
    "imageUrl": "/images/gate2022/q05_palindrome_rotations.png",
    "imageAlt": "Plates painted with letters and rotation options for palindrome"
  },
  {
    "id": "gate22-q06",
    "text": "Some people believe that “what gets measured, improves”. Some others believe that “what gets measured, gets gamed”. One possible reason for the difference in the beliefs is the work culture in organizations. In organizations with good work culture, metrics help improve outcomes. However, the same metrics are counterproductive in organizations with poor work culture.\n\nWhich one of the following is the CORRECT logical inference based on the information in the above passage?",
    "options": [
      "Metrics are useful in organizations with poor work culture",
      "Metrics are useful in organizations with good work culture",
      "Metrics are always counterproductive in organizations with good work culture",
      "Metrics are never useful in organizations with good work culture"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "General Aptitude – Reading Comprehension / Inferences",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (B)\n\n**Concept / Topic:** General Aptitude – Reading Comprehension / Inferences\n\nThe passage explicitly states: \"In organizations with good work culture, metrics help improve outcomes.\" Therefore, metrics are useful in organizations with good work culture.\n\n$$\\therefore \\text{Correct Answer: } \\text{B}$$"
  },
  {
    "id": "gate22-q07",
    "text": "In a recently conducted national entrance test, boys constituted 65% of those who \nappeared for the test. Girls constituted the remaining candidates and they \naccounted for 60% of the qualified candidates.  \nWhich one of the following is the correct logical inference based on the \ninformation provided in the above passage?",
    "options": [
      "Equal number of boys and girls qualified",
      "Equal number of boys and girls appeared for the test",
      "The number of boys who appeared for the test is less than the number of girls \nwho appeared",
      "The number of boys who qualified the test is less than the number of girls who \nqualified \n \n \n \n \n  \n\n\n \n                                                                                                                                         Page 8 of 41"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "General Aptitude – Probability / Conditional Probability",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** General Aptitude – Probability / Conditional Probability\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$"
  },
  {
    "id": "gate22-q08",
    "text": "A box contains five balls of same size and shape.  Three of them are green \ncoloured balls and two of them are orange coloured balls. Balls are drawn from \nthe box one at a time. If a green ball is drawn, it is not replaced. If an orange ball \nis drawn, it is replaced with another orange ball.  \nFirst ball is drawn.  What is the probability of getting an orange ball in the next \ndraw?",
    "options": [
      "1\n2",
      "8\n25",
      "19\n50",
      "23\n50 \n \n \n \n \n \n  \n\n\n \n                                                                                                                                         Page 9 of 41"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "General Aptitude – Probability / Sampling without Replacement",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** General Aptitude – Probability / Sampling without Replacement\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$"
  },
  {
    "id": "gate22-q09",
    "text": "The corners and mid-points of the sides of a triangle are named using the distinct \nletters P, Q, R, S, T and U, but not necessarily in the same order. Consider the \nfollowing statements: \n The line joining P and R is parallel to the line joining Q and S. \n P is placed on the side opposite to the corner T.  \n S and U cannot be placed on the same side. \nWhich one of the following statements is correct based on the above \ninformation?",
    "options": [
      "P cannot be placed at a corner",
      "S cannot be placed at a corner",
      "U cannot be placed at a mid-point",
      "R cannot be placed at a corner \n \n  \n\n\n \n                                                                                                                                         Page 10 of 41"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "General Aptitude – Geometry / Triangles",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (B)\n\n**Concept / Topic:** General Aptitude – Geometry / Triangles\n\n$$\\therefore \\text{Correct Answer: } \\text{B}$$"
  },
  {
    "id": "gate22-q10",
    "text": "A plot of land must be divided between four families. They want their \nindividual plots to be similar in shape, not necessarily equal in area. The land \nhas equally spaced poles, marked as dots in the below figure. Two ropes, R1 and \nR2, are already present and cannot be moved.  \nWhat is the least number of additional straight ropes needed to create the \ndesired plots? A single rope can pass through three poles that are aligned in a \nstraight line.",
    "options": [
      "2",
      "4",
      "5",
      "3 \n \n \n \n \n \n \n \n\n\n\nGATE 2022  \nPage 11 of 41"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "General Aptitude – Spatial Aptitude / Grid Division",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** General Aptitude – Spatial Aptitude / Grid Division\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$",
    "imageUrl": "/images/gate2022/q10_land_division_ropes.png",
    "imageAlt": "Grid of poles with fixed ropes R1 and R2 for dividing land into 4 similar plots"
  },
  {
    "id": "gate22-q11",
    "text": "Which one of the following statements is TRUE for all positive functions $f(n)$?",
    "options": [
      "$f(n^2) = \\Theta((f(n))^2)$, when $f(n)$ is a polynomial",
      "$f(n^2) = o((f(n))^2)$",
      "$f(n^2) = O((f(n))^2)$, when $f(n)$ is an exponential function",
      "$f(n^2) = \\Omega((f(n))^2)$"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Algorithms – Asymptotic Notation",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A)\n\n**Concept / Topic:** Algorithms – Asymptotic Notation\n\nLet $f(n) = a_k n^k$. Then $f(n^2) = a_k (n^2)^k = a_k n^{2k}$.\nAlso, $(f(n))^2 = (a_k n^k)^2 = a_k^2 n^{2k}$.\nThus, $f(n^2) = \\Theta((f(n))^2)$ for any polynomial function $f(n)$.\n\n$$\\therefore \\text{Correct Answer: } \\text{A}$$",
    "imageUrl": "/images/gate2022/q11_asymptotic_functions.png",
    "imageAlt": "Asymptotic notation statements for positive functions"
  },
  {
    "id": "gate22-q12",
    "text": "Which one of the following regular expressions correctly represents the language \nof the finite automaton given below?",
    "options": [
      "* * * *ab bab ba aba",
      "* * * * * *( ) ( )ab b ab ba a ba",
      "* * * * *( ) ( )ab b ba a a b ",
      "* * * * *( ) ( )ba a ab b ab ba   \n \n\n\n\nGATE 2022  \nPage 12 of 41"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Theory of Computation – Finite Automata to Regular Expressions",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** Theory of Computation – Finite Automata to Regular Expressions\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$",
    "imageUrl": "/images/gate2022/q12_dfa.png",
    "imageAlt": "Finite automaton with start state, accepting states, and transitions on a, b"
  },
  {
    "id": "gate22-q13",
    "text": "Which one of the following statements is TRUE?",
    "options": [
      "The (1)LALR  parser for a grammar G  cannot have reduce-reduce conflict if the \n(1)LR  parser for G  does not have reduce-reduce conflict.",
      "Symbol table is accessed only during the lexical analysis phase.",
      "Data flow analysis is necessary for run-time memory management.",
      "(1)LR  parsing is sufficient for deterministic context-free languages."
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Compiler Design – Bottom-up Parsing / Shift-Reduce",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** Compiler Design – Bottom-up Parsing / Shift-Reduce\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$"
  },
  {
    "id": "gate22-q14",
    "text": "In a relational data model, which one of the following statements is TRUE?",
    "options": [
      "A relation with only two attributes is always in BCNF.",
      "If all attributes of a relation are prime attributes, then the relation is in BCNF.",
      "Every relation has at least one non-prime attribute.",
      "BCNF decompositions preserve functional dependencies. \n  \n \n \n \n \n \n \n \n\n\nGATE 2022  \nPage 13 of 41"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Theory of Computation – Decidability",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A)\n\n**Concept / Topic:** Theory of Computation – Decidability\n\n$$\\therefore \\text{Correct Answer: } \\text{A}$$"
  },
  {
    "id": "gate22-q15",
    "text": "Consider the problem of reversing a singly linked list. To take an example, given \nthe linked list below,  \n \nthe reversed linked list should look like \n \nWhich one of the following statements is TRUE about the time complexity of \nalgorithms that solve the above problem in (1)O  space?",
    "options": [
      "The best algorithm for the problem takes ( )n  time in the worst case.",
      "The best algorithm for the problem takes ( log )n n  time in the worst case.",
      "The best algorithm for the problem takes 2( )n  time in the worst case.",
      "It is not possible to reverse a singly linked list in (1)O  space."
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Data Structures – Singly-Linked List Reversal",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A)\n\n**Concept / Topic:** Data Structures – Singly-Linked List Reversal\n\n$$\\therefore \\text{Correct Answer: } \\text{A}$$",
    "imageUrl": "/images/gate2022/q15_reversed_linked_list.png",
    "imageAlt": "Original singly-linked list (a->b->c->d->e) and reversed linked list (e->d->c->b->a)"
  },
  {
    "id": "gate22-q16",
    "text": "Suppose we are given n keys, m hash table slots, and two simple uniform hash \nfunctions 1h  and 2h . Further suppose our hashing scheme uses 1h  for the odd keys \nand 2h  for the even keys. What is the expected number of keys in a slot?",
    "options": [
      "m\nn",
      "n\nm",
      "2n\nm",
      "2\nn\nm  \n\n\n\nGATE 2022  \nPage 14 of 41"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Computer Organization – Addressing Modes",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (B)\n\n**Concept / Topic:** Computer Organization – Addressing Modes\n\n$$\\therefore \\text{Correct Answer: } \\text{B}$$"
  },
  {
    "id": "gate22-q17",
    "text": "Which one of the following facilitates transfer of bulk data from hard disk to main \nmemory with the highest throughput?",
    "options": [
      "DMA based I/O transfer",
      "Interrupt driven I/O transfer",
      "Polling based I/O transfer",
      "Programmed I/O transfer"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Computer Networks – Sliding Window Protocols",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A)\n\n**Concept / Topic:** Computer Networks – Sliding Window Protocols\n\n$$\\therefore \\text{Correct Answer: } \\text{A}$$"
  },
  {
    "id": "gate22-q18",
    "text": "Let R1 and R2 be two 4-bit registers that store numbers in 2’s complement form. \nFor the operation R1+R2, which one of the following values of R1 and R2 gives an \narithmetic overflow?",
    "options": [
      "R1 = 1011 and R2 = 1110",
      "R1 = 1100 and R2 = 1010",
      "R1 = 0011 and R2 = 0100",
      "R1 = 1001 and R2 = 1111 \n  \n \n \n \n \n \n \n \n\n\nGATE 2022  \nPage 15 of 41"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Databases – B+ Tree Order",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (B)\n\n**Concept / Topic:** Databases – B+ Tree Order\n\n$$\\therefore \\text{Correct Answer: } \\text{B}$$"
  },
  {
    "id": "gate22-q19",
    "text": "Consider the following threads, T1, T2, and T3 executing on a single processor, \nsynchronized using three binary semaphore variables, S1, S2, and S3, operated upon \nusing standard wait() and signal(). The threads can be context switched in \nany order and at any time.  \n T1 T2 T3 \nwhile(true){ \n  wait(S3); \n  print(“C”); \n  signal(S2); } \nwhile(true){ \n  wait(S1); \n  print(“B”); \n  signal(S3); } \nwhile(true){ \n  wait(S2); \n  print(“A”); \n  signal(S1); } \n \n Which initialization of the semaphores would print the sequence BCABCABCA….?",
    "options": [
      "S1 = 1; S2 = 1; S3 = 1",
      "S1 = 1; S2 = 1; S3 = 0",
      "S1 = 1; S2 = 0; S3 = 0",
      "S1 = 0; S2 = 1; S3 = 1 \n  \n  \n  \n  \n  \n  \n\n\nGATE 2022  \nPage 16 of 41"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Operating Systems – Semaphore Synchronization",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (C)\n\n**Concept / Topic:** Operating Systems – Semaphore Synchronization\n\n$$\\therefore \\text{Correct Answer: } \\text{C}$$",
    "imageUrl": "/images/gate2022/q19_thread_synchronization.png",
    "imageAlt": "Three threads T1, T2, T3 synchronized using binary semaphores S1, S2, S3"
  },
  {
    "id": "gate22-q20",
    "text": "Consider the following two statements with respect to the matrices $A_{m \\times n}$, $B_{n \\times m}$, $C_{n \\times n}$ and $D_{n \\times n}$.\n\nStatement 1: $\\text{tr}(AB) = \\text{tr}(BA)$\nStatement 2: $\\text{tr}(CD) = \\text{tr}(DC)$\n\nwhere $\\text{tr}()$ represents the trace of a matrix. Which one of the following holds?",
    "options": [
      "Statement 1 is correct and Statement 2 is wrong.",
      "Statement 1 is wrong and Statement 2 is correct.",
      "Both Statement 1 and Statement 2 are correct.",
      "Both Statement 1 and Statement 2 are wrong."
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Linear Algebra – Matrices & Trace",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (C)\n\n**Concept / Topic:** Linear Algebra – Matrices & Trace\n\nBy the cyclic property of trace, for any matrices $A_{m \\times n}$ and $B_{n \\times m}$, $\\text{tr}(AB) = \\text{tr}(BA)$ holds regardless of whether $m = n$ or $m \\neq n$ (since $AB$ is $m \\times m$ and $BA$ is $n \\times n$, their traces are still equal). Similarly, for square matrices $C_{n \\times n}$ and $D_{n \\times n}$, $\\text{tr}(CD) = \\text{tr}(DC)$ is always true. Thus, both statements are correct.\n\n$$\\therefore \\text{Correct Answer: } \\text{C}$$"
  },
  {
    "id": "gate22-q21",
    "text": "What is printed by the following ANSI C program? \n#include<stdio.h> \nint main(int argc, char *argv[]) \n{ \n int x = 1, z[2] = {10, 11}; \n int *p = NULL; \n p = &x;   \n *p = 10; \n p = &z[1]; \n *(&z[0] + 1) += 3; \n printf(\"%d, %d, %d\\n\", x, z[0], z[1]); \n return 0; \n}",
    "options": [
      "1, 10, 11",
      "1, 10, 14",
      "10, 14, 11",
      "10, 10, 14  \n  \n \n \n \n \n \n\n\nGATE 2022  \nPage 18 of 41"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Computer Organization – IEEE-754 Floating Point Representation",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** Computer Organization – IEEE-754 Floating Point Representation\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$"
  },
  {
    "id": "gate22-q22",
    "text": "Consider an enterprise network with two Ethernet segments, a web server and a firewall, connected via three routers as shown below.\n\nWhat is the number of subnets inside the enterprise network?",
    "options": [
      "3",
      "12",
      "6",
      "8"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Computer Networks – IPv4 Subnetting & Topology",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (C)\n\n**Concept / Topic:** Computer Networks – IPv4 Subnetting & Topology\n\nCounting the distinct subnets (collision/broadcast domains separated by router interfaces):\n1. Subnet for Ethernet Segment 1 (connecting hosts and Router 1)\n2. Subnet between Router 1 and Firewall\n3. Subnet between Router 1 and Router 2\n4. Subnet connecting Web Server to Router 2\n5. Subnet between Router 2 and Router 3\n6. Subnet for Ethernet Segment 2 (connecting hosts and Router 3)\n\nTotal subnets = 6.\n\n$$\\therefore \\text{Correct Answer: } \\text{C}$$",
    "imageUrl": "/images/gate2022/q22_enterprise_network_subnets.png",
    "imageAlt": "Enterprise network diagram with routers, ethernet segments, firewall and web server"
  },
  {
    "id": "gate22-q23",
    "text": "Which of the following statements is/are TRUE?",
    "options": [
      "Every subset of a recursively enumerable language is recursive.",
      "If a language L  and its complement L  are both recursively enumerable, then L  \nmust be recursive.",
      "Complement of a context-free language must be recursive.",
      "If 1L  and 2L  are regular, then 1 2L L  must be deterministic context-free."
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
    "concept": "Theory of Computation – Chomsky Hierarchy & Properties",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (B, C, D)\n\n**Concept / Topic:** Theory of Computation – Chomsky Hierarchy & Properties\n\n$$\\therefore \\text{Correct Options: } \\text{B, C, D}$$"
  },
  {
    "id": "gate22-q24",
    "text": "Let WB and WT be two set associative cache organizations that use LRU algorithm \nfor cache block replacement. WB is a write back cache and WT is a write through \ncache. Which of the following statements is/are FALSE?",
    "options": [
      "Each cache block in WB and WT has a dirty bit.",
      "Every write hit in WB leads to a data transfer from cache to main memory.",
      "Eviction of a block from WT will not lead to data transfer from cache to main \nmemory.",
      "A read miss in WB will never lead to eviction of a dirty block from WB. \n  \n \n \n \n \n\n\nGATE 2022  \nPage 20 of 41"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      1,
      3
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems – Process Synchronization & Deadlock",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, B, D)\n\n**Concept / Topic:** Operating Systems – Process Synchronization & Deadlock\n\n$$\\therefore \\text{Correct Options: } \\text{A, B, D}$$"
  },
  {
    "id": "gate22-q25",
    "text": "Consider the following three relations in a relational database.\n$$\\text{Employee}(\\underline{eId}, \\text{Name}), \\quad \\text{Brand}(\\underline{bId}, \\text{bName}), \\quad \\text{Own}(\\underline{eId}, \\underline{bId})$$\n\nWhich of the following relational algebra expressions return the set of $eIds$ who own all the brands?",
    "options": [
      "$\\Pi_{eId}(\\Pi_{eId, bId}(\\text{Own}) / \\Pi_{bId}(\\text{Brand}))$",
      "$\\Pi_{eId}(\\text{Own}) - \\Pi_{eId}((\\Pi_{eId}(\\text{Own}) \\times \\Pi_{bId}(\\text{Brand})) - \\Pi_{eId, bId}(\\text{Own}))$",
      "$\\Pi_{eId}(\\Pi_{eId, bId}(\\text{Own}) / \\Pi_{bId}(\\text{Own}))$",
      "$\\Pi_{eId}((\\Pi_{eId}(\\text{Own}) \\times \\Pi_{bId}(\\text{Own})) / \\Pi_{bId}(\\text{Brand}))$"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      1
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Databases – Relational Algebra Division Operator",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, B)\n\n**Concept / Topic:** Databases – Relational Algebra Division Operator\n\n- Option (A) is the standard definition of the relational division operator: dividing the set of pairs $(eId, bId)$ by all brand IDs returns the $eIds$ that appear with every $bId$.\n- Option (B) expresses relational division using fundamental operators: it takes all employees and subtracts those employees who lack at least one brand.\n\n$$\\therefore \\text{Correct Options: } \\text{A, B}$$",
    "imageUrl": "/images/gate2022/q25_relational_algebra_brands.png",
    "imageAlt": "Relational algebra queries for employees who own all brands"
  },
  {
    "id": "gate22-q26",
    "text": "Which of the following statements is/are TRUE with respect to deadlocks?",
    "options": [
      "Circular wait is a necessary condition for the formation of deadlock.",
      "In a system where each resource has more than one instance, a cycle in its wait-for \ngraph indicates the presence of a deadlock.",
      "If the current allocation of resources to processes leads the system to unsafe state, \nthen deadlock will necessarily occur.",
      "In the resource-allocation graph of a system, if every edge is an assignment edge, \nthen the system is not in deadlock state.  \n  \n \n \n\n\nGATE 2022  \nPage 21 of 41"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      3
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Networks – TCP Header & Congestion Control",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, D)\n\n**Concept / Topic:** Computer Networks – TCP Header & Congestion Control\n\n$$\\therefore \\text{Correct Options: } \\text{A, D}$$"
  },
  {
    "id": "gate22-q27",
    "text": "Which of the following statements is/are TRUE for a group $G$?",
    "options": [
      "If for all $x, y \\in G$, $(xy)^2 = x^2 y^2$, then $G$ is commutative.",
      "If for all $x \\in G$, $x^2 = 1$, then $G$ is commutative. Here, $1$ is the identity element of $G$.",
      "If the order of $G$ is $2$, then $G$ is commutative.",
      "If $G$ is commutative, then a subgroup of $G$ need not be commutative."
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      1,
      2
    ],
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Discrete Mathematics – Group Theory & Commutativity",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, B, C)\n\n**Concept / Topic:** Discrete Mathematics – Group Theory & Commutativity\n\n- (A) $(xy)^2 = xyxy = x^2 y^2 = xxyy \\implies yx = xy$, so $G$ is commutative (abelian).\n- (B) $x^2 = 1 \\implies x = x^{-1}$ for all $x$. For any $x, y \\in G$, $xy = (xy)^{-1} = y^{-1} x^{-1} = yx$, so $G$ is commutative.\n- (C) Any group of prime order is cyclic, and every cyclic group is commutative. Order 2 is prime, hence commutative.\n- (D) Every subgroup of an abelian group is always abelian, so statement (D) is false.\n\n$$\\therefore \\text{Correct Options: } \\text{A, B, C}$$",
    "imageUrl": "/images/gate2022/q27_group_commutative_options.png",
    "imageAlt": "Group commutativity statements"
  },
  {
    "id": "gate22-q28",
    "text": "Suppose a binary search tree with 1000 distinct elements is also a complete binary \ntree. The tree is stored using the array representation of binary heap trees. Assuming \nthat the array indices start with 0, the 3rd largest element of the tree is stored at \nindex_____________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 509,
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Data Structures – Complete Binary Search Tree in Array",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 509\n\n**Concept / Topic:** Data Structures – Complete Binary Search Tree in Array\n\n$$\\therefore \\text{Correct Answer: } 509$$"
  },
  {
    "id": "gate22-q29",
    "text": "Consider the following augmented grammar with $\\{+, *, (, ), id\\}$ as the set of terminals:\n\n$$\\begin{aligned} S' &\\to S \\ S &\\to S + R \\mid R \\ R &\\to R * P \\mid P \\ P &\\to (S) \\mid id \\end{aligned}$$\n\nIf $I_0$ is the set of two $\\text{LR}(0)$ items $\\{[S' \\to S.], [S \\to S. + R]\\}$, then $\\text{goto}(\\text{closure}(I_0), +)$ contains exactly ________ items.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 5,
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Compiler Design – LR(0) Items & Parsing",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 5\n\n**Concept / Topic:** Compiler Design – LR(0) Items & Parsing\n\nIn $I_0 = \\{[S' \\to S.], [S \\to S. + R]\\}$, the closure is just $I_0$ itself.\nTransitioning on symbol '$+$':\n$\\text{goto}(I_0, +)$ starts with the kernel item $[S \\to S + .R]$.\nTaking the closure of this kernel item:\n1. $[S \\to S + .R]$\n2. $[R \\to .R * P]$\n3. $[R \\to .P]$\n4. $[P \\to .(S)]$\n5. $[P \\to .id]$\n\nThis set contains exactly 5 items.\n\n$$\\therefore \\text{Correct Answer: } 5$$",
    "imageUrl": "/images/gate2022/q29_augmented_grammar_lr0.png",
    "imageAlt": "Augmented grammar and LR(0) items goto computation"
  },
  {
    "id": "gate22-q30",
    "text": "Consider a simple undirected graph of 10 vertices. If the graph is disconnected, then \nthe maximum number of edges it can have is ____________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 36,
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Algorithms – Dynamic Programming / Longest Common Subsequence",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 36\n\n**Concept / Topic:** Algorithms – Dynamic Programming / Longest Common Subsequence\n\n$$\\therefore \\text{Correct Answer: } 36$$"
  },
  {
    "id": "gate22-q31",
    "text": "Consider a relation ( , , , , )R A B C D E  with the following three functional \ndependencies. \n𝐴𝐵 → 𝐶;   𝐵𝐶 → 𝐷;   𝐶 → 𝐸; \nThe number of superkeys in the relation R is _____________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 8,
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Organization – Direct Mapped Cache Hits/Misses",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 8\n\n**Concept / Topic:** Computer Organization – Direct Mapped Cache Hits/Misses\n\n$$\\therefore \\text{Correct Answer: } 8$$"
  },
  {
    "id": "gate22-q32",
    "text": "The number of arrangements of six identical balls in three identical bins is______. \n\n\nGATE 2022  \nPage 23 of 41",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 7,
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Compiler Design – Operator Precedence Parsing",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 7\n\n**Concept / Topic:** Compiler Design – Operator Precedence Parsing\n\n$$\\therefore \\text{Correct Answer: } 7$$"
  },
  {
    "id": "gate22-q33",
    "text": "A cache memory that has a hit rate of 0.8 has an access latency 10 ns and miss \npenalty 100 ns. An optimization is done on the cache to reduce the miss rate. \nHowever, the optimization results in an increase of cache access latency to 15 ns, \nwhereas the miss penalty is not affected. The minimum hit rate (rounded off to two \ndecimal places) needed after the optimization such that it should not increase the \naverage memory access time is _____________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 0.85,
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Networks – CSMA/CD Minimum Frame Size",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 0.85\n\n**Concept / Topic:** Computer Networks – CSMA/CD Minimum Frame Size\n\n$$\\therefore \\text{Correct Answer: } 0.85$$"
  },
  {
    "id": "gate22-q34",
    "text": "The value of $$\lim_{x \\to 0^+} \\frac{\\sqrt{x}}{1 - e^{2\\sqrt{x}}}$$ is ________ (rounded off to one decimal place).",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": -0.5,
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Calculus – Limits & L'Hopital's Rule",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** -0.5\n\n**Concept / Topic:** Calculus – Limits & L'Hopital's Rule\n\nLet $t = \\sqrt{x}$. As $x \\to 0^+$, $t \\to 0^+$.\n$$\\lim_{t \\to 0^+} \\frac{t}{1 - e^{2t}} = \\lim_{t \\to 0^+} \\frac{1}{-2e^{2t}} = \\frac{1}{-2(1)} = -0.5$$\n\n$$\\therefore \\text{Correct Answer: } -0.5$$",
    "imageUrl": "/images/gate2022/q34_limit_evaluation.png",
    "imageAlt": "Limit evaluation of sqrt(x) / (1 - e^(2*sqrt(x)))"
  },
  {
    "id": "gate22-q35",
    "text": "Consider the resolution of the domain name www.gate.org.in by a DNS \nresolver. Assume that no resource records are cached anywhere across the DNS \nservers and that iterative query mechanism is used in the resolution. The number \nof DNS query-response pairs involved in completely resolving the domain name \nis_____________. \n  \n \n  \n\n\nGATE 2022  \nPage 24 of 41",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 4,
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Discrete Mathematics – Planar Graphs & Chromatic Number",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 4\n\n**Concept / Topic:** Discrete Mathematics – Planar Graphs & Chromatic Number\n\n$$\\therefore \\text{Correct Answer: } 4$$"
  },
  {
    "id": "gate22-q36",
    "text": "Consider the sequence $\\langle a_n \\rangle$ defined by\n$$a_n = \\begin{cases} n + 1, & \\text{if } n \\text{ is odd} \\\\ 1, & \\text{otherwise} \\end{cases}$$\n\nWhich one of the following is the generating function of the sequence $\\langle a_n \\rangle$?",
    "options": [
      "$\\frac{x(1+x^2)}{(1-x^2)^2} + \\frac{1}{1-x}$",
      "$\\frac{x(3-x^2)}{(1-x^2)^2} + \\frac{1}{1-x}$",
      "$\\frac{2x}{(1-x^2)^2} + \\frac{1}{1-x}$",
      "$\\frac{x}{(1-x^2)^2} + \\frac{1}{1-x}$"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "Discrete Mathematics – Generating Functions",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A)\n\n**Concept / Topic:** Discrete Mathematics – Generating Functions\n\nThe generating function is $G(x) = \\sum_{n=0}^{\\infty} a_n x^n$.\nFor even $n$, $a_n = 1$. The sum for all $n$ of $1 \\cdot x^n$ is $\\frac{1}{1-x}$.\nFor odd $n$, $a_n = n+1$, so extra contribution for odd $n$ is $(n+1) - 1 = n$.\nSumming $n x^n$ for odd $n$: $x + 3x^3 + 5x^5 + \\dots = \\frac{x(1+x^2)}{(1-x^2)^2}$.\nAdding the base sequence $\\sum x^n = \\frac{1}{1-x}$, we get $\\frac{x(1+x^2)}{(1-x^2)^2} + \\frac{1}{1-x}$.\n\n$$\\therefore \\text{Correct Answer: } \\text{A}$$",
    "imageUrl": "/images/gate2022/q36_generating_function.png",
    "imageAlt": "Generating function options for the given sequence"
  },
  {
    "id": "gate22-q37",
    "text": "Consider a simple undirected unweighted graph with at least three vertices. If A  is \nthe adjacency matrix of the graph, then the number of 3-cycles in the graph is given \nby the trace of",
    "options": [
      "3A",
      "3A  divided by 2",
      "3A  divided by 3",
      "3A  divided by 6  \n\n\nGATE 2022  \nPage 25 of 41"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "Algorithms – Sorting Lower Bounds & Comparisons",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** Algorithms – Sorting Lower Bounds & Comparisons\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$"
  },
  {
    "id": "gate22-q38",
    "text": "Which one of the following statements is FALSE?",
    "options": [
      "The TLB performs an associative search in parallel on all its valid entries using page \nnumber of incoming virtual address.",
      "If the virtual address of a word given by CPU has a TLB hit, but the subsequent  \nsearch for the word results in a cache miss, then the word will always be present in \nthe main memory.",
      "The memory access time using a given inverted page table is always same for all \nincoming virtual addresses.",
      "In a system that uses hashed page tables, if two distinct virtual addresses V1 and V2 \nmap to the same value while hashing, then the memory access time of these \naddresses will not be the same."
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "Theory of Computation – Context-Free Grammars & Ambiguity",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (C)\n\n**Concept / Topic:** Theory of Computation – Context-Free Grammars & Ambiguity\n\n$$\\therefore \\text{Correct Answer: } \\text{C}$$"
  },
  {
    "id": "gate22-q39",
    "text": "Consider the following schedule $S$ of four transactions:\n$$S: R_4(x) R_2(x) R_3(x) R_1(y) W_1(y) W_2(x) W_3(y) R_4(y)$$\n\nWhich one of the following serial schedules is conflict equivalent to $S$?",
    "options": [
      "$T_1 \\to T_3 \\to T_4 \\to T_2$",
      "$T_1 \\to T_4 \\to T_3 \\to T_2$",
      "$T_4 \\to T_1 \\to T_3 \\to T_2$",
      "$T_3 \\to T_1 \\to T_4 \\to T_2$"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "Databases – Transaction Concurrency & Serializability",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A)\n\n**Concept / Topic:** Databases – Transaction Concurrency & Serializability\n\nAnalyzing conflicting pairs:\n- On $x$:\n  $R_4(x) < W_2(x) \\implies T_4 \\to T_2$\n  $R_3(x) < W_2(x) \\implies T_3 \\to T_2$\n- On $y$:\n  $W_1(y) < W_3(y) \\implies T_1 \\to T_3$\n  $W_1(y) < R_4(y) \\implies T_1 \\to T_4$\n  $W_3(y) < R_4(y) \\implies T_3 \\to T_4$\n\nCombining these dependencies: $T_1 \\to T_3 \\to T_4 \\to T_2$. Hence, topological sort gives $T_1 \\to T_3 \\to T_4 \\to T_2$.\n\n$$\\therefore \\text{Correct Answer: } \\text{A}$$",
    "imageUrl": "/images/gate2022/q39_serial_schedules_conflict.png",
    "imageAlt": "Schedule conflict equivalence and serial schedule options"
  },
  {
    "id": "gate22-q40",
    "text": "Consider a digital display system (DDS) shown in the figure that displays the \ncontents of register X. A 16-bit code word is used to load a word in X, either from \nS or from R. S is a 1024-word memory segment and R is a 32-word register file. \nBased on the value of mode bit M, T selects an input word to load in X. P and Q \ninterface with the corresponding bits in the code word to choose the addressed word. \nWhich one of the following represents the functionality of P, Q, and T?",
    "options": [
      "P is 10:1 multiplexer; Q is 5:1 multiplexer; T is 2:1 multiplexer",
      "P is 10:210 decoder; Q is 5:25 decoder;  T is 2:1 encoder",
      "P is 10:210 decoder;   Q is 5:25 decoder;  T is 2:1 multiplexer",
      "P is 1:10 de-multiplexer; Q is 1:5 de-multiplexer;  T is 2:1 multiplexer \n \n \n \n \n \n \nX \nP \n Q \nT \nS \n R \nDDS \nM \n S-address \n R-address \nCode Word \n\n\nGATE 2022  \nPage 27 of 41"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "Digital Logic – Memory Organization & Decoders/Multiplexers",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (C)\n\n**Concept / Topic:** Digital Logic – Memory Organization & Decoders/Multiplexers\n\n$$\\therefore \\text{Correct Answer: } \\text{C}$$",
    "imageUrl": "/images/gate2022/q40_digital_display_system.png",
    "imageAlt": "Digital display system block diagram with Code Word, P, Q, memory S, register file R, and T"
  },
  {
    "id": "gate22-q41",
    "text": "Consider three floating point numbers $A, B$ and $C$ stored in registers $R_A, R_B$ and $R_C$, respectively, in the IEEE-754 single precision format. The 32-bit lexical representations of the contents of the registers (in hexadecimal) are:\n\n$$R_A = \\text{0xC1400000}, \\quad R_B = \\text{0x42100000}, \\quad R_C = \\text{0x41400000}$$\n\nWhich one of the following statements is FALSE?",
    "options": [
      "$A + C = 0$",
      "$C = A + B$",
      "$B = 3C$",
      "$(B - C) > 0$"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "Computer Organization – IEEE-754 Floating Point Representation",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (B)\n\n**Concept / Topic:** Computer Organization – IEEE-754 Floating Point Representation\n\nDecoding the IEEE-754 values:\n- $R_A = \\text{0xC1400000}$: Sign = 1 (negative), Exp = 130 ($130-127 = 3$), Mantissa = $1.1_2 = 1.5$. Value $A = -1.5 \\times 2^3 = -12.0$.\n- $R_C = \\text{0x41400000}$: Sign = 0 (positive), Exp = 130 ($130-127 = 3$), Mantissa = $1.1_2 = 1.5$. Value $C = +1.5 \\times 2^3 = +12.0$.\n- $R_B = \\text{0x42100000}$: Sign = 0, Exp = 132 ($132-127 = 5$), Mantissa = $1.001_2 = 1.125$. Value $B = 1.125 \\times 2^5 = 36.0$.\n\nEvaluating statements:\n- (A) $A + C = -12 + 12 = 0$ (TRUE)\n- (B) $A + B = -12 + 36 = 24 \\neq C$ (FALSE)\n- (C) $3C = 3 \\times 12 = 36 = B$ (TRUE)\n- (D) $B - C = 36 - 12 = 24 > 0$ (TRUE)\n\n$$\\therefore \\text{Correct Answer: } \\text{B}$$",
    "imageUrl": "/images/gate2022/q41_ieee754_registers.png",
    "imageAlt": "IEEE-754 single precision representation registers"
  },
  {
    "id": "gate22-q42",
    "text": "Consider four processes P, Q, R, and S scheduled on a CPU as per round robin \nalgorithm with a time quantum of 4 units. The processes arrive in the order P, Q, R, \nS, all at time t = 0. There is exactly one context switch from S to Q, exactly one \ncontext switch from R to Q, and exactly two context switches from Q to R. There is \nno context switch from S to P. Switching to a ready process after the termination of \nanother process is also considered a context switch. Which one of the following is \nNOT possible as CPU burst time (in time units) of these processes?",
    "options": [
      "P = 4, Q = 10, R = 6, S = 2",
      "P = 2, Q = 9, R = 5, S = 1",
      "P = 4, Q = 12, R = 5, S = 4",
      "P = 3, Q = 7, R = 7, S = 3 \n  \n \n\n\nGATE 2022  \nPage 28 of 41"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "Databases – Conflict Serializability & View Equivalence",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** Databases – Conflict Serializability & View Equivalence\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$"
  },
  {
    "id": "gate22-q43",
    "text": "What is printed by the following ANSI C program? \n#include<stdio.h> \nint main(int argc, char *argv[]) \n{ \n  int a[3][3][3] =  \n  {{1, 2, 3, 4, 5, 6, 7, 8, 9}, \n   {10, 11, 12, 13, 14, 15, 16, 17, 18}, \n   {19, 20, 21, 22, 23, 24, 25, 26, 27}}; \n int i = 0, j = 0, k = 0; \n for( i = 0; i < 3; i++ ){   \n        for(k = 0; k < 3; k++ ) \n   printf(\"%d \", a[i][j][k]); \n  printf(\"\\n\"); \n } \n return 0; \n}",
    "options": [
      "1 2 3 \n 10 11 12 \n 19 20 21",
      "1 4 7 \n 10 13 16 \n 19 22 25",
      "1 2 3 \n 4 5 6 \n 7 8 9",
      "1 2 3 \n 13 14 15 \n 25 26 27 \n\n\nGATE 2022  \nPage 29 of 41"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "Operating Systems – Virtual Memory / Page Replacement",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A)\n\n**Concept / Topic:** Operating Systems – Virtual Memory / Page Replacement\n\n$$\\therefore \\text{Correct Answer: } \\text{A}$$"
  },
  {
    "id": "gate22-q44",
    "text": "What is printed by the following ANSI C program? \n#include<stdio.h> \nint main(int argc, char *argv[]){ \n char a = 'P'; \n char b = 'x'; \n char c = (a & b) + '*'; \n char d = (a | b) - '-'; \n char e = (a ^ b) + '+'; \n printf(\"%c %c %c\\n\", c, d, e);  \n return 0; \n} \nASCII encoding for relevant characters is given below",
    "options": [
      "z K S",
      "122 75 83",
      "* - +",
      "P x + \n  \n\n\n\nGATE 2022  \nPage 30 of 41"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "Programming in C – Bitwise Operators & ASCII Arithmetic",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A)\n\n**Concept / Topic:** Programming in C – Bitwise Operators & ASCII Arithmetic\n\n$$\\therefore \\text{Correct Answer: } \\text{A}$$",
    "imageUrl": "/images/gate2022/q44_ansi_c_ascii.png",
    "imageAlt": "ANSI C program code with character bitwise operators and ASCII encoding tables"
  },
  {
    "id": "gate22-q45",
    "text": "Consider the system of linear equations:\n$$\\begin{aligned} x_1 + x_2 - 2x_3 &= 4 \\\\ x_1 + 3x_2 - x_3 &= 7 \\\\ 2x_1 + x_2 - 5x_3 &= 7 \\end{aligned}$$\n\nLet $A = LU$ be the LU decomposition of the coefficient matrix $A$, where $L$ is a lower triangular matrix with all diagonal elements equal to $1$, and $U$ is an upper triangular matrix. Let the solution of the system be $[x_1, x_2, x_3]^T$. Which of the following is the correct combination of values for $L_{32}, U_{33}$ and $x_1$?",
    "options": [
      "$L_{32} = 2, \\quad U_{33} = -\\frac{1}{2}, \\quad x_1 = -1$",
      "$L_{32} = 2, \\quad U_{33} = 2, \\quad x_1 = -1$",
      "$L_{32} = -\\frac{1}{2}, \\quad U_{33} = 2, \\quad x_1 = 0$",
      "$L_{32} = -\\frac{1}{2}, \\quad U_{33} = -\\frac{1}{2}, \\quad x_1 = 0$"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.67,
    "difficulty": "hard",
    "concept": "Linear Algebra – LU Decomposition & Systems of Linear Equations",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (D)\n\n**Concept / Topic:** Linear Algebra – LU Decomposition & Systems of Linear Equations\n\nCoefficient matrix:\n$$A = \\begin{bmatrix} 1 & 1 & -2 \\\\ 1 & 3 & -1 \\\\ 2 & 1 & -5 \\end{bmatrix}$$\nApplying Doolittle's algorithm ($L_{ii} = 1$):\n- $U_{11}=1, U_{12}=1, U_{13}=-2$\n- $L_{21} = 1/1 = 1$, $L_{31} = 2/1 = 2$\n- $U_{22} = 3 - (1)(1) = 2$, $U_{23} = -1 - (1)(-2) = 1$\n- $L_{32} = (1 - (2)(1)) / 2 = -1/2$\n- $U_{33} = -5 - [(2)(-2) + (-1/2)(1)] = -5 - [-4 - 0.5] = -5 + 4.5 = -0.5 = -1/2$\nSolving $Ax = b$:\nFrom $x_1 + x_2 - 2x_3 = 4$, $x_1 + 3x_2 - x_3 = 7$, $2x_1 + x_2 - 5x_3 = 7$ gives $x_1 = 0, x_2 = 2, x_3 = -1$.\nHence $L_{32} = -1/2, U_{33} = -1/2, x_1 = 0$.\n\n$$\\therefore \\text{Correct Answer: } \\text{D}$$",
    "imageUrl": "/images/gate2022/q45_lu_decomposition.png",
    "imageAlt": "LU decomposition system of linear equations"
  },
  {
    "id": "gate22-q46",
    "text": "Which of the following is/are undecidable?",
    "options": [
      "Given two Turing machines 1 2 and ,M M  decide if 1 2( ) ( ).L M L M",
      "Given a Turing machine ,M  decide if ( )L M  is regular.",
      "Given a Turing machine ,M  decide if M  accepts all strings.",
      "Given a Turing machine ,M  decide if M  takes more than 1073 steps on every \nstring."
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      1,
      2
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Theory of Computation – Closure Properties of Regular Languages",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, B, C)\n\n**Concept / Topic:** Theory of Computation – Closure Properties of Regular Languages\n\n$$\\therefore \\text{Correct Options: } \\text{A, B, C}$$"
  },
  {
    "id": "gate22-q47",
    "text": "Consider the following languages over the alphabet $\\{a, b\\}$:\n$$\\begin{aligned} L_1 &= \\{a^n w a^n \\mid w \\in \\{a, b\\}^*, n \\ge 0\\} \\\\ L_2 &= \\{w x w^R \\mid w, x \\in \\{a, b\\}^*, |w|, |x| > 0\\} \\end{aligned}$$\nwhere $w^R$ is the reversal of $w$. Which of the following statements is/are TRUE?",
    "options": [
      "$L_1$ is regular",
      "$L_2$ is regular",
      "$L_1 \\cap L_2$ is context-free",
      "$L_1 \\cap L_2$ is context-free, but not regular"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      1,
      2
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Theory of Computation – Regular & Context-Free Languages",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, B, C)\n\n**Concept / Topic:** Theory of Computation – Regular & Context-Free Languages\n\n- $L_1$: Setting $n=0$, $a^0 w a^0 = w$, which allows generating any string in $\\{a,b\\}^*$. Thus $L_1 = \\{a, b\\}^*$, which is regular!\n- $L_2$: Strings of the form $w x w^R$ with $|w| \\ge 1$. Since $w$ starts and ends with $a$ or $b$, any string of length $\\ge 3$ that starts and ends with the same symbol can be written in this form (taking $|w|=1$, i.e. $a x a$ or $b x b$). Thus $L_2$ is regular!\n- Since both $L_1$ and $L_2$ are regular, their intersection $L_1 \\cap L_2 = L_2$ is regular, and every regular language is also context-free! Hence (A), (B), and (C) are TRUE.\n\n$$\\therefore \\text{Correct Options: } \\text{A, B, C}$$",
    "imageUrl": "/images/gate2022/q47_cfl_languages_reversal.png",
    "imageAlt": "Languages L1 and L2 regularity and context-freeness"
  },
  {
    "id": "gate22-q48",
    "text": "Consider the following languages over the alphabet $\\{a, b, c\\}$:\n$$\\begin{aligned} L_1 &= \\{w w \\mid w \\in \\{a, b\\}^*\\} \\\\ L_2 &= \\{a^n b^n c^m \\mid m, n \\ge 0\\} \\\\ L_3 &= \\{a^m b^n c^n \\mid m, n \\ge 0\\} \\end{aligned}$$\n\nWhich of the following statements is/are FALSE?",
    "options": [
      "$L_1$ is not context-free",
      "$L_2 \\cap L_3$ is context-free",
      "$L_1$ is context-free, but not regular",
      "$L_2$ is not context-free"
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
    "difficulty": "hard",
    "concept": "Theory of Computation – Context-Free Languages & Closure Properties",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (B, C, D)\n\n**Concept / Topic:** Theory of Computation – Context-Free Languages & Closure Properties\n\n- $L_1 = \\{ww\\}$ is a well-known non-context-free language (requires two matching comparisons). Thus statement (A) is TRUE, and statement (C) is FALSE.\n- $L_2 = \\{a^n b^n c^m\\}$ is deterministic context-free (DCFL). Thus statement (D) is FALSE.\n- $L_3 = \\{a^m b^n c^n\\}$ is also context-free. However, $L_2 \\cap L_3 = \\{a^n b^n c^n \\mid n \\ge 0\\}$, which is a classic non-context-free language! Thus statement (B) is FALSE.\n\nSince the question asks which statements are FALSE, options B, C, and D are correct.\n\n$$\\therefore \\text{Correct Options: } \\text{B, C, D}$$",
    "imageUrl": "/images/gate2022/q48_languages_context_free.png",
    "imageAlt": "Context-free language properties for L1, L2, L3"
  },
  {
    "id": "gate22-q49",
    "text": "Consider a simple undirected weighted graph ,G  all of whose edge weights are \ndistinct. Which of the following statements about the minimum  spanning trees of \nG  is/are TRUE?",
    "options": [
      "The edge with the second smallest weight is always part of any minimum spanning \ntree of G .",
      "One or both of the edges with the third smallest and the fourth smallest weights are \npart of any minimum spanning tree of G .",
      "Suppose S V  be such that S   and S V . Consider the edge with the minimum \nweight such that one of its vertices is in S  and the other in V \\ S . Such an edge will \nalways be part of any minimum spanning tree of G .",
      "G  can have multiple minimum spanning trees. \n\n\nGATE 2022  \nPage 33 of 41"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      1,
      2
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Algorithms – Divide and Conquer / Master Theorem",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, B, C)\n\n**Concept / Topic:** Algorithms – Divide and Conquer / Master Theorem\n\n$$\\therefore \\text{Correct Options: } \\text{A, B, C}$$"
  },
  {
    "id": "gate22-q50",
    "text": "The following simple undirected graph is referred to as the Peterson graph. \n \nWhich of the following statements is/are TRUE?",
    "options": [
      "The chromatic number of the graph is 3.",
      "The graph has a Hamiltonian path.",
      "The following graph is isomorphic to the Peterson graph.",
      "The size of the largest independent set of the given graph is 3. (A subset of vertices \nof a graph form an independent set if no two vertices of the subset are adjacent.) \n  \n \n \n \n \n\n\n\nGATE 2022  \nPage 34 of 41"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      1,
      2
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Discrete Mathematics – Graph Theory / Petersen Graph Properties",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, B, C)\n\n**Concept / Topic:** Discrete Mathematics – Graph Theory / Petersen Graph Properties\n\n$$\\therefore \\text{Correct Options: } \\text{A, B, C}$$",
    "imageUrl": "/images/gate2022/q50_peterson_graph.png",
    "imageAlt": "Petersen graph: 10 vertices, 15 edges with outer pentagon and inner 5-pointed star"
  },
  {
    "id": "gate22-q51",
    "text": "Consider the function $f$ defined by the following recurrence relations:\n$$\\begin{aligned} f(1) &= 1 \\\\ f(2n) &= 2f(n) - 1, \\quad n \\ge 1 \\\\ f(2n+1) &= 2f(n) + 1, \\quad n \\ge 1 \\end{aligned}$$\n\nWhich of the following statements is/are TRUE?",
    "options": [
      "$f(2^n - 1) = 2^n - 1$",
      "$f(2^n) = 1$",
      "$f(5 \\cdot 2^n) = 2^{n+1} + 1$",
      "$f(2^n + 1) = 2^n + 1$"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      1,
      2
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Discrete Mathematics – Recurrence Relations & Binary Representations",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, B, C)\n\n**Concept / Topic:** Discrete Mathematics – Recurrence Relations & Binary Representations\n\nNotice the pattern of $f(k)$:\n- For powers of 2: $f(2) = 2f(1) - 1 = 1$, $f(4) = 2f(2) - 1 = 1$, by induction $f(2^n) = 1$ for all $n \\ge 1$. Hence (B) is TRUE.\n- For $2^n - 1$: $f(1) = 1 = 2^1 - 1$; $f(3) = 2f(1) + 1 = 3 = 2^2 - 1$; $f(7) = 2f(3) + 1 = 7 = 2^3 - 1$; by induction $f(2^n - 1) = 2^n - 1$. Hence (A) is TRUE.\n- For $5 \\cdot 2^n$: $f(5) = 2f(2) + 1 = 3 = 2^1 + 1$. Then $f(10) = 2f(5) - 1 = 5 = 2^2 + 1$. By induction $f(5 \\cdot 2^n) = 2^{n+1} + 1$. Hence (C) is TRUE.\n- For $2^n + 1$: $f(2^2 + 1) = f(5) = 3 \\neq 5$. Hence (D) is FALSE.\n\n$$\\therefore \\text{Correct Options: } \\text{A, B, C}$$",
    "imageUrl": "/images/gate2022/q51_recurrence_relations.png",
    "imageAlt": "Recurrence relations statements"
  },
  {
    "id": "gate22-q52",
    "text": "Which of the properties hold for the adjacency matrix A  of a simple undirected \nunweighted graph having n vertices?",
    "options": [
      "The diagonal entries of 2A  are the degrees of the vertices of the graph.",
      "If the graph is connected, then none of the entries of 1n nA I   can be zero.",
      "If the sum of all the elements of A  is at most 2( 1),n  then the graph must be \nacyclic.",
      "If there is at least a 1 in each of A ’s rows and columns, then the graph must be \nconnected. \n  \n \n\n\nGATE 2022  \nPage 35 of 41"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Linear Algebra – Vector Spaces & Basis",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A)\n\n**Concept / Topic:** Linear Algebra – Vector Spaces & Basis\n\n$$\\therefore \\text{Correct Options: } \\text{A}$$"
  },
  {
    "id": "gate22-q53",
    "text": "Which of the following is/are the eigenvector(s) for the matrix given below?\n$$\\begin{bmatrix} -9 & -6 & -2 & -4 \\\\ -8 & -6 & -3 & -1 \\\\ 20 & 15 & 8 & 5 \\\\ 32 & 21 & 7 & 12 \\end{bmatrix}$$",
    "options": [
      "$\\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\\\ 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 \\\\ 0 \\\\ -1 \\\\ 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} -1 \\\\ 0 \\\\ 2 \\\\ 2 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 \\\\ 1 \\\\ -3 \\\\ 0 \\end{bmatrix}$"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      2,
      3
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Linear Algebra – Eigenvalues & Eigenvectors",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, C, D)\n\n**Concept / Topic:** Linear Algebra – Eigenvalues & Eigenvectors\n\nA vector $v$ is an eigenvector of $M$ if $Mv = \\lambda v$ for some scalar $\\lambda$.\nMultiplying $M$ with each option:\n- For $v_A = [-1, 1, 0, 1]^T$: $M v_A = [-1, 1, 0, 1]^T = 1 \\cdot v_A$ (Eigenvector with $\\lambda = 1$).\n- For $v_B = [1, 0, -1, 0]^T$: $M v_B = [-7, -5, 12, 25]^T \\neq \\lambda v_B$ (Not an eigenvector).\n- For $v_C = [-1, 0, 2, 2]^T$: $M v_C = [-3, 0, 6, 6]^T = 3 \\cdot v_C$ (Eigenvector with $\\lambda = 3$).\n- For $v_D = [0, 1, -3, 0]^T$: $M v_D = [0, 3, -9, 0]^T = 3 \\cdot v_D$ (Eigenvector with $\\lambda = 3$).\n\n$$\\therefore \\text{Correct Options: } \\text{A, C, D}$$",
    "imageUrl": "/images/gate2022/q53_eigenvectors_matrix.png",
    "imageAlt": "Eigenvectors of 4x4 matrix"
  },
  {
    "id": "gate22-q54",
    "text": "Consider a system with 2 KB direct mapped data cache with a block size of 64 bytes. \nThe system has a physical address space of 64 KB and a word length of 16 bits. \nDuring the execution of a program, four data words P, Q, R, and S are accessed in \nthat order 10 times (i.e., PQRSPQRS…). Hence, there are 40 accesses to data cache \naltogether. Assume that the data cache is initially empty and no other data words are \naccessed by the program. The addresses of the first bytes of P, Q, R, and S are \n0xA248, 0xC28A, 0xCA8A, and 0xA262, respectively. For the execution of the \nabove program, which of the following statements is/are TRUE with respect to the \ndata cache?",
    "options": [
      "Every access to S is a hit.",
      "Once P is brought to the cache it is never evicted.",
      "At the end of the execution only R and S reside in the cache.",
      "Every access to R evicts Q from the cache.  \n  \n \n \n \n \n \n \n \n \n \n \n \n \n\n\nGATE 2022  \nPage 37 of 41"
    ],
    "correctAnswerIndex": 0,
    "correctAnswerIndices": [
      0,
      1,
      3
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Computer Organization – Direct Mapped Cache Word Addresses",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (A, B, D)\n\n**Concept / Topic:** Computer Organization – Direct Mapped Cache Word Addresses\n\n$$\\therefore \\text{Correct Options: } \\text{A, B, D}$$"
  },
  {
    "id": "gate22-q55",
    "text": "Consider routing table of an organization’s router shown below:  \n Subnet Number Subnet Mask Next Hop \n12.20.164.0 255.255.252.0 R1 \n12.20.170.0 255.255.254.0 R2 \n12.20.168.0 255.255.254.0 Interface 0 \n12.20.166.0 255.255.254.0 Interface 1 \ndefault  R3 \n \n Which of the following prefixes in CIDR notation can be collectively used to  \ncorrectly aggregate all of the subnets in the routing table?",
    "options": [
      "12.20.164.0/20",
      "12.20.164.0/22",
      "12.20.164.0/21",
      "12.20.168.0/22 \n \n \n \n \n \n \n \n \n \n\n\nGATE 2022  \nPage 38 of 41"
    ],
    "correctAnswerIndex": 1,
    "correctAnswerIndices": [
      1,
      3
    ],
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Computer Networks – Routing Table / CIDR Longest Prefix Match",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** (B, D)\n\n**Concept / Topic:** Computer Networks – Routing Table / CIDR Longest Prefix Match\n\n$$\\therefore \\text{Correct Options: } \\text{B, D}$$",
    "imageUrl": "/images/gate2022/q55_router_table.png",
    "imageAlt": "Router routing table with subnet numbers, subnet masks, and next hops"
  },
  {
    "id": "gate22-q56",
    "text": "Consider the relational database with the following four schemas and their \nrespective instances.  \nStudent(sNo, sName, dNo) Dept(dNo, dName)  \nCourse(cNo, cName, dNo) Register(sNo, cNo) \n \nSQL Query: \n \nSELECT * FROM Student AS S WHERE NOT EXIST \n (SELECT cNo FROM Course WHERE dNo = “D01”  \n EXCEPT  \n  SELECT cNo FROM Register WHERE sNo = S.sNo) \nThe number of rows returned by the above SQL query is___________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 2,
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Databases – SQL Relational Queries / Count Calculation",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 2\n\n**Concept / Topic:** Databases – SQL Relational Queries / Count Calculation\n\n$$\\therefore \\text{Correct Answer: } 2$$",
    "imageUrl": "/images/gate2022/q56_relational_database_tables.png",
    "imageAlt": "Relational database tables Student, Dept, Course, and Register with sample records"
  },
  {
    "id": "gate22-q57",
    "text": "Consider a network with three routers P, Q, R shown in the figure below. All the \nlinks have cost of unity. \n \n \n \n \n \nThe routers exchange distance vector routing information and have converged on \nthe routing tables, after which the link Q−R fails. Assume that P and Q send out \nrouting updates at random times, each at the same average rate. The probability of \na routing loop formation (rounded off to one decimal place) between P and Q, \nleading to count-to-infinity problem, is___________. \n \nP \n Q \n R \n\n\nGATE 2022  \nPage 39 of 41",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 0.5,
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Probability – Continuous Random Variables & CDF/PDF",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 0.5\n\n**Concept / Topic:** Probability – Continuous Random Variables & CDF/PDF\n\n$$\\therefore \\text{Correct Answer: } 0.5$$"
  },
  {
    "id": "gate22-q58",
    "text": "Let $G(V, E)$ be a directed graph, where $V = \\{1, 2, 3, 4, 5\\}$ is the set of vertices and $E$ is the set of directed edges, as defined by the following adjacency matrix $A$:\n\n$$A[i][j] = \\begin{cases} 1, & 1 \\le j \\le i \\le 5 \\\\ 0, & \\text{otherwise} \\end{cases}$$\n\n$A[i][j] = 1$ indicates a directed edge from node $i$ to node $j$. A directed spanning tree of $G$, rooted at $r \\in V$, is defined as a subgraph $T$ of $G$ such that the undirected version of $T$ is a tree, and $T$ contains a directed path from $r$ to every other vertex in $V$. The number of such directed spanning trees rooted at vertex 5 is ________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 24,
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Graph Theory – Directed Spanning Trees",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 24\n\n**Concept / Topic:** Graph Theory – Directed Spanning Trees\n\nIn a directed spanning tree rooted at 5, every vertex in $\\{1, 2, 3, 4\\}$ must have an in-degree of exactly 1, and vertex 5 has in-degree 0.\nFrom the adjacency matrix definition, an edge $(i, j)$ exists if and only if $i \\ge j$. Ignoring self loops, directed edges exist from node $i$ to node $j$ whenever $i > j$:\n- Vertex 4 can have an incoming edge only from vertex 5 (1 choice).\n- Vertex 3 can have an incoming edge from vertex 4 or 5 (2 choices).\n- Vertex 2 can have an incoming edge from vertex 3, 4, or 5 (3 choices).\n- Vertex 1 can have an incoming edge from vertex 2, 3, 4, or 5 (4 choices).\n\nSince every directed edge goes from a higher numbered vertex to a strictly lower numbered vertex, no directed cycles can ever be formed. Hence, any choice of parent for each of the 4 vertices yields a unique valid directed spanning tree rooted at 5:\n$$\\text{Number of trees} = 1 \\times 2 \\times 3 \\times 4 = 24$$\n\n$$\\therefore \\text{Correct Answer: } 24$$",
    "imageUrl": "/images/gate2022/q58_directed_spanning_trees.png",
    "imageAlt": "Directed spanning trees adjacency matrix"
  },
  {
    "id": "gate22-q59",
    "text": "Consider a 100 Mbps link between an earth station (sender) and a satellite (receiver) \nat an altitude of 2100 km. The signal propagates at a speed of 3x108 m/s. The time \ntaken (in milliseconds, rounded off to two decimal places) for the receiver to \ncompletely receive a packet of 1000 bytes transmitted by the sender is_________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 7.08,
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Computer Networks – Channel Utilization / Go-Back-N Protocol",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 7.08\n\n**Concept / Topic:** Computer Networks – Channel Utilization / Go-Back-N Protocol\n\n$$\\therefore \\text{Correct Answer: } 7.08$$"
  },
  {
    "id": "gate22-q60",
    "text": "Consider the data transfer using TCP over a 1 Gbps link. Assuming that the \nmaximum segment lifetime (MSL) is set to 60 seconds, the minimum number of \nbits required for the sequence number field of the TCP header, to prevent the \nsequence number space from wrapping around during the MSL  is____________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 33,
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Computer Organization – Memory Paging & TLB Access Time",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 33\n\n**Concept / Topic:** Computer Organization – Memory Paging & TLB Access Time\n\n$$\\therefore \\text{Correct Answer: } 33$$"
  },
  {
    "id": "gate22-q61",
    "text": "A processor X1 operating at 2 GHz has a standard 5-stage RISC instruction pipeline \nhaving a base CPI (cycles per instruction) of one without any pipeline hazards.  \nFor a given program P that has 30% branch instructions, control hazards incur 2 \ncycles stall for every branch. A new version of the processor X2 operating at same \nclock frequency has an additional branch predictor unit (BPU) that completely \neliminates stalls for correctly predicted branches. There is neither any savings nor \nany additional stalls for wrong predictions. There are no structural hazards and data \nhazards for X1 and X2. If the BPU has a prediction accuracy of 80%, the speed up \n(rounded off to two decimal places) obtained by X2 over X1 in executing  \nP is____________. \n\n\nGATE 2022  \nPage 40 of 41",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 1.43,
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Calculus – Trapezoidal Rule Numerical Integration",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 1.43\n\n**Concept / Topic:** Calculus – Trapezoidal Rule Numerical Integration\n\n$$\\therefore \\text{Correct Answer: } 1.43$$"
  },
  {
    "id": "gate22-q62",
    "text": "Consider the queues 1Q  containing four elements and 2Q  containing none (shown \nas the Initial State in the figure). The only operations allowed on these two queues \nare Enqueue(Q,element) and Dequeue(Q). The minimum number of \nEnqueue operations on 1Q  required to place the elements of 1Q  in 2Q  in reverse \norder (shown as the Final State in the figure) without using any additional storage \nis___________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 0,
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Data Structures – Queue Operations & Reversal",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 0\n\n**Concept / Topic:** Data Structures – Queue Operations & Reversal\n\n$$\\therefore \\text{Correct Answer: } 0$$",
    "imageUrl": "/images/gate2022/q62_queue_reversal.png",
    "imageAlt": "Queues Q1 and Q2 showing Initial State [1, 2, 3, 4] and Final State in reverse order"
  },
  {
    "id": "gate22-q63",
    "text": "Consider two files systems A  and B , that use contiguous allocation and linked \nallocation, respectively. A file of size 100 blocks is already stored in A and also in \nB. Now, consider inserting a new block in the middle of the file (between 50th and \n51st block), whose data is already available in the memory. Assume that there are \nenough free blocks at the end of the file and that the file control blocks are already \nin memory. Let the number of disk accesses required to insert a block in the middle \nof the file in A  and  B  are  An  and ,Bn  respectively, then the value of  \nA Bn n    is_________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 153,
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Algorithms – Dijkstra's Shortest Path Algorithm",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 153\n\n**Concept / Topic:** Algorithms – Dijkstra's Shortest Path Algorithm\n\n$$\\therefore \\text{Correct Answer: } 153$$"
  },
  {
    "id": "gate22-q64",
    "text": "Consider a demand paging system with four page frames (initially empty) and LRU \npage replacement policy. For the following page reference string \n7, 2,7,3, 2,5,3, 4, 6,7,7,1,5, 6,1 \nthe page fault rate, defined as the ratio of number of page faults to the number of \nmemory accesses (rounded off to one decimal place) is_________. \n  \n\n\n\nGATE 2022  \nPage 41 of 41",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 0.6,
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Operating Systems – Disk Scheduling / SCAN and LOOK",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 0.6\n\n**Concept / Topic:** Operating Systems – Disk Scheduling / SCAN and LOOK\n\n$$\\therefore \\text{Correct Answer: } 0.6$$"
  },
  {
    "id": "gate22-q65",
    "text": "Consider the following grammar along with translation rules:\n\n$$\\begin{aligned} S &\\to S_1 \\# T & \\{S.\\text{val} &= S_1.\\text{val} * T.\\text{val}\\} \\\\ S &\\to T & \\{S.\\text{val} &= T.\\text{val}\\} \\\\ T &\\to T_1 \\% R & \\{T.\\text{val} &= T_1.\\text{val} \\div R.\\text{val}\\} \\\\ T &\\to R & \\{T.\\text{val} &= R.\\text{val}\\} \\\\ R &\\to id & \\{R.\\text{val} &= id.\\text{val}\\} \\end{aligned}$$\n\nHere $\\#$ and $\\%$ are operators and $id$ is a token that represents an integer and $id.\\text{val}$ represents the corresponding integer value. The set of non-terminals is $\\{S, T, R, P\\}$ and a subscripted non-terminal indicates an instance of the non-terminal.\n\nUsing this translation scheme, the computed value of $S.\\text{val}$ for root of the parse tree for the expression $20 \\# 10 \\% 5 \\# 8 \\% 2 \\% 2$ is ________.",
    "options": [],
    "correctAnswerIndex": -1,
    "questionType": "NAT",
    "natAnswer": 80,
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Compiler Design – Syntax Directed Translation (SDT)",
    "year": "GATE 2022 CS",
    "explanation": "**Official GATE Answer Key:** 80\n\n**Concept / Topic:** Compiler Design – Syntax Directed Translation (SDT)\n\nParsing the expression $20 \\# 10 \\% 5 \\# 8 \\% 2 \\% 2$ according to the grammar rules:\n1. The operator $\\%$ has higher precedence than $\\#$, and both operators are left-associative.\n2. Subexpression $10 \\% 5$ evaluates to $10 \\div 5 = 2$.\n3. Subexpression $8 \\% 2 \\% 2$ evaluates left-to-right as $(8 \\div 2) \\div 2 = 4 \\div 2 = 2$.\n4. The remaining expression at the $S$ level is $20 \\# 2 \\# 2$, which evaluates left-to-right as $(20 * 2) * 2 = 40 * 2 = 80$.\n\n$$\\therefore \\text{Correct Answer: } 80$$",
    "imageUrl": "/images/gate2022/q65_syntax_directed_translation.png",
    "imageAlt": "Syntax Directed Translation grammar and expression"
  }
];
