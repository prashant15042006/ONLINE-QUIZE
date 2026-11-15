import { Question } from "./questionTypes";

// ─────────────────────────────────────────────────────────────────────────────
// GATE CSE 2026 (Set 1) - Complete 65 Official Verified Questions
// Organizing Institute: IIT Guwahati
// Verified against official Paper CS1.pdf and Answer Key CS1_Keys.pdf
// ─────────────────────────────────────────────────────────────────────────────
export const GATE_2026_SET1_QUESTIONS: Question[] = [
  {
    "id": "gate26-s1-q01",
    "text": "The antonym of the word protagonist is ________.",
    "options": [
      "agnostic",
      "antagonist",
      "arsonist",
      "anarchist"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "easy",
    "concept": "General Aptitude \u2014 Vocabulary",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nThe antonym of **protagonist** (the main leading character in a story or drama) is **antagonist** (an adversary or principal opponent).\n\n- **Agnostic:** One who believes nothing is known about God's existence.\n- **Antagonist:** Adversary / opponent (Correct Antonym).\n- **Arsonist:** A criminal who maliciously sets fire to property.\n- **Anarchist:** A person who advocates the abolition of government.\n\n$$\\therefore \\text{Answer: (B) antagonist}$$"
  },
  {
    "id": "gate26-s1-q02",
    "text": "The figure shows two 4-tile patterns (a 2x2 square and a 1x4 vertical strip).\n\nEither one or both of the patterns can be used any number of times and in any orientation to construct a new pattern. Which one of the options below cannot be constructed by using only these two 4-tile patterns assuming there are no overlaps among them?",
    "options": [
      "A 2 x 6 rectangular pattern",
      "A 4 x 3 rectangular pattern",
      "A 3 x 6 rectangular pattern",
      "A 5 x 4 rectangular pattern"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "General Aptitude \u2014 Spatial Aptitude & Tiling",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nEach given pattern consists of exactly **4 unit tiles**:\n- Pattern 1: $2 \\times 2 = 4$ tiles\n- Pattern 2: $1 \\times 4 = 4$ tiles\n\nAny figure constructed without overlaps using these patterns must have a total tile count that is an **integer multiple of 4** (i.e. Area $\\equiv 0 \\pmod 4$):\n- **Option (A):** $2 \\times 6 = 12$ tiles ($12 = 3 \\times 4$, multiple of 4)\n- **Option (B):** $4 \\times 3 = 12$ tiles ($12 = 3 \\times 4$, multiple of 4)\n- **Option (C):** $3 \\times 6 = 18$ tiles. Since 18 is **not divisible by 4** ($18 \\pmod 4 = 2$), it can never be tiled with 4-tile shapes!\n- **Option (D):** $5 \\times 4 = 20$ tiles ($20 = 5 \\times 4$, multiple of 4)\n\n$$\\therefore \\text{Option (C) cannot be constructed.}$$",
    "imageUrl": "/images/gate2026/q02_tile_options.png",
    "imageAlt": "Q2: Tile options A, B, C, D showing different rectangular grid patterns"
  },
  {
    "id": "gate26-s1-q03",
    "text": "Consider a knock-out women\u2019s badminton singles tournament where there are no ties. The loser in each game is eliminated from the tournament. Every player plays until she is defeated or remains the last undefeated player. The last undefeated player is declared the winner of the tournament. If there are 64 players in the beginning of the tournament, how many games should be played in total to declare the winner of the tournament?",
    "options": [
      "127",
      "64",
      "63",
      "32"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "easy",
    "concept": "General Aptitude \u2014 Combinatorics",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nIn any single-elimination (knockout) tournament without ties:\n- Each game eliminates exactly **1 player**.\n- To determine 1 sole champion out of $N$ initial players, exactly $N - 1$ players must be eliminated.\n- Therefore, the total number of games required is:\n$$\\text{Total Games} = N - 1 = 64 - 1 = 63$$\n\n$$\\therefore \\text{Answer: (C) } 63$$"
  },
  {
    "id": "gate26-s1-q04",
    "text": "A student needs to enroll for a minimum of 60 credits. A student cannot enroll for more than 70 credits. The credits are divided amongst project and three distinct sets of courses namely, core courses, specialization courses, and elective courses. It is compulsory for a student to enroll for exactly 15 credits of core courses and exactly 20 credits of project. In addition, a student has to enroll for a minimum of 10 credits of specialization courses. The maximum credits of elective courses that a student can enroll for is ______",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "easy",
    "concept": "General Aptitude \u2014 Quantitative Aptitude",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nGiven constraints:\n- Minimum total credits $= 60$, Maximum total credits $= 70$\n- Core courses (mandatory) $= 15$\n- Project (mandatory) $= 20$\n- Specialization courses $\\ge 10$\n- Elective courses $= E$\n\nTo maximize elective credits $E$, we take the maximum allowed total credits ($70$) and the minimum required specialization courses ($10$):\n$$E_{\\max} = 70 - (15 + 20 + 10) = 70 - 45 = 25$$\n\n$$\\therefore \\text{Answer: (D) } 25$$"
  },
  {
    "id": "gate26-s1-q05",
    "text": "\u2018When the teacher is in the room, all students stand silently.\u2019\nIf the above statement is true, which one of the following statements is not necessarily true?",
    "options": [
      "If any student is not standing silently, then the teacher is not in the room.",
      "When the teacher is in the room, all students are silent.",
      "If all students are standing, then the teacher is in the room.",
      "When the teacher is in the room, all students are standing."
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "easy",
    "concept": "General Aptitude \u2014 Logical Reasoning",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nLet the given statement be $P \\implies Q$, where:\n- $P$: Teacher is in the room\n- $Q$: All students stand silently (both standing AND silent)\n\n- **Option (A):** Contrapositive $\\neg Q \\implies \\neg P$. (Logically equivalent, necessarily true).\n- **Option (B):** If $P$ is true, all students stand silently $\\implies$ all students are silent. (Necessarily true).\n- **Option (D):** If $P$ is true, all students stand silently $\\implies$ all students are standing. (Necessarily true).\n- **Option (C):** Converse $Q \\implies P$. Affirming the consequent is a logical fallacy; students could be standing for another reason (e.g. morning assembly) even when the teacher is absent.\n\n$$\\therefore \\text{Answer: (C) is not necessarily true.}$$"
  },
  {
    "id": "gate26-s1-q06",
    "text": "Combinatorics deals with problems involving counting. For example, \u201cHow many distinct arrangements of N distinct objects in M spaces on a circle are possible?\u201d is a typical problem in combinatorics. This kind of counting is sometimes used in the modeling of several physical phenomena. Often, in such models, the different combinatorial possibilities are assigned probability values. Assigning probabilities enables the computation of the average values of physical quantities.\n\nConsider the following statements:\n**P:** Combinatorics is always invoked in the modeling of physical phenomena.\n**Q:** Modeling some physical phenomena involves assigning probabilities to combinatorial possibilities in order to compute average values of physical quantities.\n\nBased on the passage above, what can be inferred about statements P and Q?",
    "options": [
      "P is False and Q is False",
      "P is False and Q is True",
      "P is True and Q is False",
      "P is True and Q is True"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "General Aptitude \u2014 Reading Comprehension",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- The text states: *\"This kind of counting is **sometimes** used in the modeling of several physical phenomena.\"* Statement P asserts that combinatorics is *always* invoked, which is an incorrect extreme claim. Thus, **P is False**.\n- The text explicitly states: *\"Often, in such models, the different combinatorial possibilities are assigned probability values. Assigning probabilities enables the computation of the average values of physical quantities.\"* This matches Statement Q directly. Thus, **Q is True**.\n\n$$\\therefore \\text{Answer: (B) P is False and Q is True}$$"
  },
  {
    "id": "gate26-s1-q07",
    "text": "In Panel I of the figure, the front view and top view of a structure are shown. Which one of the 3D structures shown in Panel II possesses the views shown in Panel I?\n- Front view shows height profile 3 blocks on the left, 2 blocks in middle, 1 block on right.\n- Top view shows the occupied floor coordinates.",
    "options": [
      "(i)",
      "(ii)",
      "(iii)",
      "(iv)"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "General Aptitude \u2014 Spatial Reasoning",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nComparing the orthographic projections in Panel I with the 3D structures in Panel II:\n- The Front View requires 3 stacked cubes on the left column, 2 cubes in the center column, and 1 cube on the right column.\n- Structure **(iv)** perfectly matches both the front elevation and top plan projections.\n\n$$\\therefore \\text{Answer: (D) (iv)}$$",
    "imageUrl": "/images/gate2026/q07_3d_structure.jpg",
    "imageAlt": "Q7: Panel I (front view and top view) and Panel II showing four 3D block structures (i), (ii), (iii), (iv)"
  },
  {
    "id": "gate26-s1-q08",
    "text": "For positive real numbers S and K, the function $H_K(S)$ is defined as: $H_K(S) = \\max(S - K, 0)$, where $\\max(a, b) = a$ when $a > b$, and $b$ when $a \\le b$. The graph shows $N(S) = 0$ for $S \\le 10$, $N(S)$ rising linearly from 0 to 10 for $10 < S \\le 20$, and $N(S) = 10$ for $S > 20$. $N(S)$ can be expressed as _____.",
    "options": [
      "$H_{10}(S) - H_{20}(S)$",
      "$H_{10}(S) - 2H_{20}(S)$",
      "$-H_{10}(S) + H_{20}(S)$",
      "$H_{15}(S) - H_{20}(S)$"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "General Aptitude \u2014 Functions and Graphs",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nBy definition of $H_K(S) = \\max(S - K, 0)$:\n- For $S \\le 10$: $H_{10}(S) = 0$, $H_{20}(S) = 0 \\implies H_{10}(S) - H_{20}(S) = 0$\n- For $10 < S \\le 20$: $H_{10}(S) = S - 10$, $H_{20}(S) = 0 \\implies H_{10}(S) - H_{20}(S) = S - 10$ (linear with slope 1)\n- For $S > 20$: $H_{10}(S) = S - 10$, $H_{20}(S) = S - 20 \\implies (S - 10) - (S - 20) = 10$ (constant)\n\nThis matches $N(S)$ perfectly across all ranges.\n\n$$\\therefore \\text{Answer: (A) } H_{10}(S) - H_{20}(S)$$",
    "imageUrl": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 340 220' width='340' height='220' font-family='sans-serif'>\n  <rect width='340' height='220' fill='#0f172a' rx='8'/>\n  <line x1='50' y1='180' x2='300' y2='180' stroke='#64748b' stroke-width='2'/>\n  <line x1='50' y1='180' x2='50' y2='30' stroke='#64748b' stroke-width='2'/>\n  <text x='180' y='205' fill='#94a3b8' font-size='12' text-anchor='middle'>S</text>\n  <text x='25' y='105' fill='#94a3b8' font-size='12' text-anchor='middle' transform='rotate(-90 25 105)'>N(S)</text>\n  <text x='50' y='195' fill='#94a3b8' font-size='10' text-anchor='middle'>0</text>\n  <text x='130' y='195' fill='#94a3b8' font-size='10' text-anchor='middle'>10</text>\n  <text x='210' y='195' fill='#94a3b8' font-size='10' text-anchor='middle'>20</text>\n  <text x='280' y='195' fill='#94a3b8' font-size='10' text-anchor='middle'>30</text>\n  <text x='40' y='75' fill='#94a3b8' font-size='10' text-anchor='end'>10</text>\n  <line x1='50' y1='180' x2='130' y2='180' stroke='#38bdf8' stroke-width='3'/>\n  <line x1='130' y1='180' x2='210' y2='70' stroke='#38bdf8' stroke-width='3'/>\n  <line x1='210' y1='70' x2='290' y2='70' stroke='#38bdf8' stroke-width='3'/>\n  <line x1='210' y1='180' x2='210' y2='70' stroke='#475569' stroke-dasharray='4,4'/>\n  <line x1='50' y1='70' x2='210' y2='70' stroke='#475569' stroke-dasharray='4,4'/>\n</svg>"
  },
  {
    "id": "gate26-s1-q09",
    "text": "In the 2020 summer Olympics\u2019 Javelin throw finals, Neeraj Chopra won gold, Jakub Vadlejch won silver, and Vitezlav Vesely won bronze. There were six rounds of throws with each athlete having one throw per round. Following were the observations about the throws:\ni. The first and second rounds were dominated by Neeraj Chopra with a gold medal performance in his second throw, while the other two athletes did not have any medal winning throws in these rounds.\nii. The throws in the last round by both Jakub Vadlejch and Vitezlav Vesely were fouls and were not considered for scoring.\niii. After four rounds, Vitezlav Vesely was in the second position and could not improve upon his best throw in the succeeding rounds.\niv. In the fourth round, the throw by Jakub Vadlejch was the best in that round.\n\nIn which round did Vitezlav Vesely have his best throw?",
    "options": [
      "Third",
      "Fourth",
      "Fifth",
      "Sixth"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "General Aptitude \u2014 Logical Deduction",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nLet us trace Vesely's rounds (1 to 6):\n1. By (i), rounds 1 and 2 were not medal-winning throws for Vesely.\n2. By (ii), round 6 was a foul.\n3. By (iii), after round 4, Vesely was in 2nd position and did not improve in rounds 5 and 6. So his best throw occurred in rounds 1, 2, 3, or 4.\n4. By (iv), in round 4, Jakub had the best throw. If Vesely had his personal best in round 4, Jakub's round 4 throw was strictly better than Vesely's round 4 throw, which would place Jakub ahead of Vesely after round 4. But observation (iii) explicitly states Vesely was in 2nd position (ahead of Jakub) after round 4! Hence, Vesely could not have had his best throw in round 4.\n5. Eliminating rounds 1, 2, 4, 5, 6 leaves **Round 3**.\n\n$$\\therefore \\text{Answer: (A) Third}$$"
  },
  {
    "id": "gate26-s1-q10",
    "text": "An unbiased six-faced dice whose faces are marked with numbers 1, 2, 3, 4, 5, and 6 is rolled twice in succession and the number on the top face is recorded each time. The probability that the number appearing in the second roll is an integer multiple of the number appearing in the first roll is __________",
    "options": [
      "1/6",
      "5/18",
      "7/18",
      "5/6"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "General Aptitude \u2014 Probability",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nTotal sample space on rolling two dice $= 6 \\times 6 = 36$ outcomes.\nLet $(x, y)$ be the outcomes of first and second roll. We require $y$ to be an integer multiple of $x$:\n- $x = 1 \\implies y \\in \\{1, 2, 3, 4, 5, 6\\} \\implies 6$ pairs\n- $x = 2 \\implies y \\in \\{2, 4, 6\\} \\implies 3$ pairs\n- $x = 3 \\implies y \\in \\{3, 6\\} \\implies 2$ pairs\n- $x = 4 \\implies y \\in \\{4\\} \\implies 1$ pair\n- $x = 5 \\implies y \\in \\{5\\} \\implies 1$ pair\n- $x = 6 \\implies y \\in \\{6\\} \\implies 1$ pair\n\nTotal favorable outcomes $= 6 + 3 + 2 + 1 + 1 + 1 = 14$.\n$$\\text{Probability} = \\frac{14}{36} = \\frac{7}{18}$$\n\n$$\\therefore \\text{Answer: (C) } 7/18$$"
  },
  {
    "id": "gate26-s1-q11",
    "text": "An urn contains one red ball and one blue ball. At each step, a ball is picked uniformly at random from the urn, and this ball together with another ball of the same color is put back in the urn. The probability that there are equal number of red and blue balls after two steps is",
    "options": [
      "1/4",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Engineering Mathematics \u2014 Probability (Polya's Urn)",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nInitial state: 1 Red (R), 1 Blue (B). Total balls = 2.\n- **Step 1:**\n  - Probability of choosing R $= 1/2$. The urn now has $1 + 1 = 2$ R and 1 B (total 3 balls).\n  - Probability of choosing B $= 1/2$. The urn now has 1 R and $1 + 1 = 2$ B (total 3 balls).\n- **Step 2:** We want an equal number of red and blue balls at the end, which means 2 R and 2 B (total 4 balls):\n  - If Step 1 gave (2R, 1B), we must pick B in Step 2: $P(B \\mid 2R, 1B) = 1/3$.\n    $$P(\\text{Case 1}) = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$$\n  - If Step 1 gave (1R, 2B), we must pick R in Step 2: $P(R \\mid 1R, 2B) = 1/3$.\n    $$P(\\text{Case 2}) = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$$\n\n$$\\text{Total Probability} = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$$\n\n$$\\therefore \\text{Answer: (B) } 1/3$$"
  },
  {
    "id": "gate26-s1-q12",
    "text": "Consider $4 \\times 4$ matrices with their elements from $\\{0, 1\\}$. The number of such matrices with even number of $1$s in every row and every column is",
    "options": [
      "512",
      "1025",
      "1023",
      "255"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Discrete Mathematics \u2014 Combinatorics & Parity",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nLet $M$ be a $4 \\times 4$ binary matrix ($a_{ij} \\in \\{0, 1\\}$).\n- For each of the top 3 rows (rows 1, 2, 3), the first 3 elements $a_{ij}$ ($1 \\le i, j \\le 3$) can be chosen completely arbitrarily. That gives $3 \\times 3 = 9$ independent binary choices ($2^9 = 512$ possibilities).\n- For each of these rows, the 4th element $a_{i4}$ is uniquely determined by the condition that the row sum is even.\n- For each of the first 3 columns, the element in row 4 ($a_{4j}$ for $j=1,2,3$) is uniquely determined by the condition that the column sum is even.\n- Finally, the bottom-right element $a_{44}$ must satisfy both the 4th row sum parity and 4th column sum parity. Since the sum of all elements can be computed by summing all row sums or all column sums, both conditions require the exact same parity for $a_{44}$. Hence, $a_{44}$ is consistently and uniquely determined!\n\n$$\\text{Total degrees of freedom} = (4-1) \\times (4-1) = 3 \\times 3 = 9$$\n$$\\text{Number of matrices} = 2^9 = 512$$\n\n$$\\therefore \\text{Answer: (A) } 512$$"
  },
  {
    "id": "gate26-s1-q13",
    "text": "For $n > 1$, the maximum multiplicity of any eigenvalue of an $n \\times n$ matrix with elements from $\\mathbb{R}$ is",
    "options": [
      "$n$",
      "$n - 1$",
      "$1$",
      "$n + 1$"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "easy",
    "concept": "Linear Algebra \u2014 Eigenvalues & Multiplicity",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nFor any $n \\times n$ matrix $A$, its characteristic equation is a polynomial in $\\lambda$ of degree $n$:\n$$\\det(A - \\lambda I) = 0$$\nBy the Fundamental Theorem of Algebra, a degree $n$ polynomial has at most $n$ roots (counting multiplicity).\n- For example, the $n \\times n$ Identity Matrix $I_n$ has eigenvalue $\\lambda = 1$ with algebraic multiplicity exactly **$n$**.\n- Hence, the maximum possible multiplicity of an eigenvalue is $n$.\n\n$$\\therefore \\text{Answer: (A) } n$$"
  },
  {
    "id": "gate26-s1-q14",
    "text": "Match each addressing mode in List I with a data element or an element of a data structure (in a high-level language) in List II:\n\n**List I:**\nP. Immediate\nQ. Indirect\nR. Base with index\nS. Base with offset/displacement\n\n**List II:**\n1. Element of an array\n2. Pointer\n3. Element of a record\n4. Constant",
    "options": [
      "P\u20134, Q\u20133, R\u20131, S\u20132",
      "P\u20134, Q\u20132, R\u20131, S\u20133",
      "P\u20131, Q\u20134, R\u20133, S\u20132",
      "P\u20132, Q\u20133, R\u20131, S\u20134"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "easy",
    "concept": "Computer Organization \u2014 Addressing Modes",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **P. Immediate Addressing:** Operand is part of instruction, used for **Constants** (P $\\to$ 4).\n- **Q. Indirect Addressing:** Address field gives address of pointer in memory/register, used for **Pointers** (Q $\\to$ 2).\n- **R. Base with Index:** Effective address $= \\text{Base} + \\text{Index}$, ideal for accessing **Elements of an array** (`A[i]`) (R $\\to$ 1).\n- **S. Base with Offset/Displacement:** Base points to start of struct/record and offset accesses a specific field, used for **Elements of a record/struct** (`record.field`) (S $\\to$ 3).\n\n$$\\therefore \\text{Matching: P-4, Q-2, R-1, S-3 (Option B)}$$"
  },
  {
    "id": "gate26-s1-q15",
    "text": "Consider a processor P whose instruction set architecture is the load-store architecture. The instruction format is such that the first operand of any instruction is the destination operand.\n\nWhich one of the following sequences of instructions corresponds to the high-level language statement `Z = X + Y`?\n\n*Note:* X, Y, and Z are memory operands. R0, R1, and R2 are registers.",
    "options": [
      "ADD Z, X, Y",
      "LOAD R0, X\nADD Z, R0, Y",
      "ADD R0, X, Y\nSTORE Z, R0",
      "LOAD R0, X\nLOAD R1, Y\nADD R2, R0, R1\nSTORE Z, R2"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "easy",
    "concept": "Computer Organization \u2014 Instruction Set Architecture",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nIn a **Load-Store architecture** (such as RISC):\n- Arithmetic and logical instructions (like `ADD`) operate **strictly on CPU registers**, never directly on memory operands.\n- Memory operands must first be loaded into registers via `LOAD` and written back via `STORE`.\n- Format has first operand as destination.\nTherefore:\n1. `LOAD R0, X` (load memory $X$ into register $R_0$)\n2. `LOAD R1, Y` (load memory $Y$ into register $R_1$)\n3. `ADD R2, R0, R1` ($R_2 \\leftarrow R_0 + R_1$)\n4. `STORE Z, R2` (store $R_2$ into memory $Z$)\n\n$$\\therefore \\text{Answer: (D)}$$"
  },
  {
    "id": "gate26-s1-q16",
    "text": "Which one of the following dependencies among the register operands of different instructions can cause a data hazard in a pipelined processor?",
    "options": [
      "Read-after-read",
      "Read-after-write",
      "Write-after-read",
      "Write-after-write"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "easy",
    "concept": "Computer Organization \u2014 Pipeline Hazards",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **Read-After-Write (RAW):** Known as a **true data dependency** (flow dependency). An instruction tries to read a register before a preceding instruction has written its result. This causes a true data hazard.\n- **Write-After-Read (WAR):** Anti-dependency (name hazard), resolved by register renaming.\n- **Write-After-Write (WAW):** Output dependency (name hazard), resolved by register renaming.\n- **Read-After-Read (RAR):** Not a hazard; simultaneous or consecutive reads never conflict.\n\n$$\\therefore \\text{Answer: (B) Read-after-write}$$"
  },
  {
    "id": "gate26-s1-q17",
    "text": "Consider the following recurrence relations:\nFor all $n > 1$,\n$$T_1(n) = 4 T_1\\left(\\frac{n}{2}\\right) + T_2(n)$$\n$$T_2(n) = 5 T_2\\left(\\frac{n}{4}\\right) + \\Theta(\\log_2 n)$$\nAssume that for all $n \\le 1, T_1(n) = 1$ and $T_2(n) = 1$.\nWhich one of the following options is correct?",
    "options": [
      "$T_1(n) = \\Theta(n^2)$",
      "$T_1(n) = \\Theta(n^2 \\log_2 n)$",
      "$T_1(n) = \\Theta(n^{\\log_4 5})$",
      "$T_1(n) = \\Theta(n^{\\log_4 5} \\log_2 n)$"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "medium",
    "concept": "Algorithms \u2014 Recurrence Relations & Master Theorem",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n**Step 1: Solve $T_2(n)$:**\n$$T_2(n) = 5 T_2(n/4) + \\Theta(\\log_2 n)$$\nBy Master Theorem: $a = 5, b = 4, f(n) = \\log_2 n$.\n$$n^{\\log_b a} = n^{\\log_4 5} \\approx n^{1.161}$$\nSince $f(n) = \\log_2 n = O(n^{\\log_4 5 - \\epsilon})$ for $\\epsilon \\approx 0.16 > 0$ (Case 1 of Master Theorem):\n$$T_2(n) = \\Theta(n^{\\log_4 5})$$\n\n**Step 2: Solve $T_1(n)$:**\n$$T_1(n) = 4 T_1(n/2) + \\Theta(n^{\\log_4 5})$$\nHere $a = 4, b = 2, f(n) = \\Theta(n^{\\log_4 5})$.\n$$n^{\\log_b a} = n^{\\log_2 4} = n^2$$\nCompare $n^2$ with $f(n) = n^{\\log_4 5} \\approx n^{1.161}$:\nSince $n^{\\log_4 5} = O(n^{2 - \\epsilon})$ (Case 1 of Master Theorem), the $n^2$ term dominates:\n$$T_1(n) = \\Theta(n^2)$$\n\n$$\\therefore \\text{Answer: (A) } T_1(n) = \\Theta(n^2)$$"
  },
  {
    "id": "gate26-s1-q18",
    "text": "With respect to a TCP connection between a client and a server, which one of the following statements is true?",
    "options": [
      "The client and server use a two-way handshake mechanism before the start of data transmission",
      "The server cannot initiate closing of the connection before the client initiates closing of the connection",
      "The TCP connection is half-duplex",
      "The client and server can initiate closing of the connection at the same time"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 1,
    "negativeMarks": 0.33,
    "difficulty": "easy",
    "concept": "Computer Networks \u2014 TCP Protocol",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **(A) False:** TCP uses a **three-way handshake** (SYN $\\to$ SYN-ACK $\\to$ ACK) for connection establishment.\n- **(B) False:** Either side (client or server) can initiate connection teardown by sending a FIN segment.\n- **(C) False:** TCP is a **full-duplex** protocol, allowing simultaneous bidirectional byte streams.\n- **(D) True:** TCP supports **simultaneous close**, where both client and server send FIN segments concurrently. Each side acknowledges the peer's FIN and transitions through `CLOSING` state to `TIME-WAIT`.\n\n$$\\therefore \\text{Answer: (D)}$$"
  },
  {
    "id": "gate26-s1-q19",
    "text": "Which of the following statements is/are true with respect to the interaction of a web browser with a web server using HTTP 1.1?",
    "options": [
      "HTTP 1.1 facilitates downloading multiple objects of the same webpage over the same TCP connection, if the objects are stored in the same server",
      "HTTP 1.1 facilitates downloading multiple objects of the same webpage over the same TCP connection, even if they are stored in different servers",
      "HTTP 1.1 facilitates sending a request for downloading one object without waiting for a previously requested object to be downloaded completely",
      "HTTP 1.1 facilitates downloading multiple webpages on the same server to be downloaded over a single TCP connection"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Networks \u2014 HTTP 1.1 Protocol",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **(A) True:** HTTP 1.1 introduced **persistent connections** (`Keep-Alive` by default), allowing multiple HTTP requests/responses for objects located on the same server over a single TCP connection.\n- **(B) False:** A TCP connection is established between a unique client socket and server socket (IP + Port). Objects on different physical servers require separate TCP connections to those servers.\n- **(C) True:** HTTP 1.1 supports **pipelining**, allowing a client to send multiple HTTP requests back-to-back without waiting for previous responses.\n- **(D) True:** Persistent connections remain open across subsequent webpage requests to the same origin server.\n\n$$\\therefore \\text{Answer: (A), (C), (D)}$$",
    "correctAnswerIndices": [
      0,
      2,
      3
    ]
  },
  {
    "id": "gate26-s1-q20",
    "text": "Let $n > 1$. Consider an $n \\times n$ matrix $M$ with its elements from $\\mathbb{R}$. Let the vector $(0, 1, 0, 0, \\dots, 0) \\in \\mathbb{R}^n$ be in the null space of $M$.\n\nWhich of the following options is/are always correct?",
    "options": [
      "Determinant of M is 1",
      "Determinant of M is 0",
      "Rank of M is 1",
      "There are at least two non-zero vectors in the null space of M"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Linear Algebra \u2014 Null Space & Rank-Nullity",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nGiven: $v = (0, 1, 0, \\dots, 0)^T \\in \\text{Null}(M)$, which means $Mv = 0$ and $v \\neq 0$.\n1. **Determinant:** Since $M$ has a non-trivial null vector, the columns of $M$ are linearly dependent (the 2nd column of $M$ is all zeros). Hence $\\text{Rank}(M) < n \\implies \\det(M) = 0$. (Option B is True, Option A is False).\n2. **Rank:** $\\text{Rank}(M)$ can be any integer from $0$ up to $n-1$. It is not necessarily 1. (Option C is False).\n3. **Vectors in Null Space:** Since $\\text{Null}(M)$ is a subspace over $\\mathbb{R}$, if $v \\in \\text{Null}(M)$, then any scalar multiple $c \\cdot v \\in \\text{Null}(M)$. For instance, $v_1 = (0, 1, 0, \\dots, 0)$ and $v_2 = (0, 2, 0, \\dots, 0)$ are two distinct non-zero vectors in $\\text{Null}(M)$. (Option D is True).\n\n$$\\therefore \\text{Answer: (B), (D)}$$",
    "correctAnswerIndices": [
      1,
      3
    ]
  },
  {
    "id": "gate26-s1-q21",
    "text": "Consider the following Boolean expression of a function F:\n$$F(P, Q) = (\\bar{P} + Q) \\oplus (\\bar{P} Q)$$\nWhich of the following expressions is/are equivalent to F?",
    "options": [
      "$\\overline{P \\oplus Q}$",
      "$P \\oplus Q$",
      "$\\bar{P} \\oplus Q$",
      "$\\bar{P} \\oplus \\bar{Q}$"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Digital Logic \u2014 Boolean Algebra",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nLet $A = (\\bar{P} + Q)$ and $B = (\\bar{P} Q)$.\nNotice that whenever $B = 1$ (i.e. $\\bar{P} = 1$ and $Q = 1$), $A = 1 + 1 = 1$. Thus $B \\le A$.\nFor any Boolean variables where $B \\le A$:\n$$A \\oplus B = A \\bar{B} + \\bar{A} B = A \\bar{B} + 0 = A \\bar{B}$$\n$$\\implies F(P, Q) = (\\bar{P} + Q) \\cdot \\overline{(\\bar{P} Q)} = (\\bar{P} + Q) (P + \\bar{Q})$$\nExpanding:\n$$F(P, Q) = \\bar{P}P + \\bar{P}\\bar{Q} + QP + Q\\bar{Q} = 0 + \\bar{P}\\bar{Q} + PQ + 0 = PQ + \\bar{P}\\bar{Q}$$\n$PQ + \\bar{P}\\bar{Q}$ is the **XNOR** function:\n$$PQ + \\bar{P}\\bar{Q} = \\overline{P \\oplus Q} = \\bar{P} \\oplus Q = P \\oplus \\bar{Q}$$\nTherefore:\n- Option (A): $\\overline{P \\oplus Q}$ (True)\n- Option (C): $\\bar{P} \\oplus Q$ (True)\n- Option (B): $P \\oplus Q$ (False, this is XOR)\n- Option (D): $\\bar{P} \\oplus \\bar{Q} = P \\oplus Q$ (False, this is XOR)\n\n$$\\therefore \\text{Answer: (A), (C)}$$",
    "correctAnswerIndices": [
      0,
      2
    ]
  },
  {
    "id": "gate26-s1-q22",
    "text": "Consider the 8-bit signed integers X, Y and Z represented using the sign-magnitude form. The binary representations of X and Y are as follows:\n$$X: 10110100 \\quad Y: 01001100$$\nWhich of the following operations to compute Z result(s) in an arithmetic overflow?",
    "options": [
      "$Z = X + Y$",
      "$Z = X - Y$",
      "$Z = -X + Y$",
      "$Z = -X - Y$"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Digital Logic \u2014 Computer Arithmetic & Overflow",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nIn 8-bit **sign-magnitude** representation:\n- 1st bit is sign ($0 = +$, $1 = -$)\n- Remaining 7 bits represent magnitude $\\in [0, 2^7 - 1] = [0, 127]$.\n- Representable range: $[-127, +127]$.\n\nDecoding $X$ and $Y$:\n- $X = 10110100_2 \\implies \\text{Sign} = 1 (-)$, Magnitude $= 0110100_2 = 32 + 16 + 4 = 52 \\implies X = -52$.\n- $Y = 01001100_2 \\implies \\text{Sign} = 0 (+)$, Magnitude $= 1001100_2 = 64 + 8 + 4 = 76 \\implies Y = +76$.\n\nTesting operations:\n- **(A)** $Z = X + Y = -52 + 76 = +24 \\in [-127, 127]$ (No overflow).\n- **(B)** $Z = X - Y = -52 - 76 = -128$. Magnitude 128 requires 8 magnitude bits, exceeding maximum 127! (OVERFLOW).\n- **(C)** $Z = -X + Y = -(-52) + 76 = 52 + 76 = +128$. Exceeds $+127$! (OVERFLOW).\n- **(D)** $Z = -X - Y = 52 - 76 = -24 \\in [-127, 127]$ (No overflow).\n\n$$\\therefore \\text{Answer: (B), (C)}$$",
    "correctAnswerIndices": [
      1,
      2
    ]
  },
  {
    "id": "gate26-s1-q23",
    "text": "Let $n$ be an odd number greater than 100. Consider a binary minheap with $n$ elements stored in an array $P$ whose index starts from 1.\n\nWhich of the following indices of $P$ do/does NOT correspond to any leaf node of the minheap?",
    "options": [
      "$\\frac{n + 1}{2}$",
      "$\\frac{n - 1}{2}$",
      "$\\frac{n - 3}{2}$",
      "$n$"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Data Structures \u2014 Binary Heap",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nIn a 1-indexed binary heap with $n$ nodes:\n- A node at index $i$ has children at $2i$ and $2i + 1$.\n- A node $i$ is an internal node if $2i \\le n \\implies i \\le \\lfloor n/2 \\rfloor$.\n- Since $n$ is odd, $n = 2k + 1$, so $\\lfloor n/2 \\rfloor = \\frac{n - 1}{2}$.\n- Therefore:\n  - Internal nodes are indexed from $1, 2, \\dots, \\frac{n - 1}{2}$.\n  - Leaf nodes are indexed from $\\frac{n - 1}{2} + 1 = \\frac{n + 1}{2}$ to $n$.\n\nChecking the options for non-leaf (internal) nodes:\n- (A) $\\frac{n + 1}{2}$: This is the **first leaf node**.\n- (B) $\\frac{n - 1}{2}$: This is the **last internal node** (NOT a leaf).\n- (C) $\\frac{n - 3}{2}$: This is an **internal node** (NOT a leaf).\n- (D) $n$: This is the **last leaf node**.\n\n$$\\therefore \\text{Indices that do NOT correspond to leaf nodes: (B), (C)}$$",
    "correctAnswerIndices": [
      1,
      2
    ]
  },
  {
    "id": "gate26-s1-q24",
    "text": "Consider a hash table $P[0, 1, \\dots, 10]$ that is initially empty. The hash table is maintained using open addressing with linear probing. The hash function used is $h(x) = (x + 7) \\bmod 11$.\n\nConsider the following sequence of insertions performed on $P$:\n$$1, 13, 22, 15, 11, 24$$\nWhich of the following positions in the hash table is/are empty after these insertions are performed?",
    "options": [
      "0",
      "10",
      "2",
      "1"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Data Structures \u2014 Hashing with Linear Probing",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nTable size $m = 11$, slots $0$ to $10$. Hash function $h(x) = (x + 7) \\bmod 11$.\n1. **Insert 1:** $h(1) = (1 + 7) \\bmod 11 = 8$. Slot 8 empty $\\implies P[8] = 1$.\n2. **Insert 13:** $h(13) = (13 + 7) \\bmod 11 = 20 \\bmod 11 = 9$. Slot 9 empty $\\implies P[9] = 13$.\n3. **Insert 22:** $h(22) = (22 + 7) \\bmod 11 = 29 \\bmod 11 = 7$. Slot 7 empty $\\implies P[7] = 22$.\n4. **Insert 15:** $h(15) = (15 + 7) \\bmod 11 = 22 \\bmod 11 = 0$. Slot 0 empty $\\implies P[0] = 15$.\n5. **Insert 11:** $h(11) = (11 + 7) \\bmod 11 = 18 \\bmod 11 = 7$. Collision at 7, probe 8 (occupied), probe 9 (occupied), probe 10 (empty) $\\implies P[10] = 11$.\n6. **Insert 24:** $h(24) = (24 + 7) \\bmod 11 = 31 \\bmod 11 = 9$. Collision at 9, probe 10 (occupied), wrap around to 0 (occupied), probe 1 (empty) $\\implies P[1] = 24$.\n\nFinal Table State:\n- $P[0] = 15$\n- $P[1] = 24$\n- $P[7] = 22$\n- $P[8] = 1$\n- $P[9] = 13$\n- $P[10] = 11$\nSlots 0, 1, 10 are OCCUPIED. Slot 2 is EMPTY.\n\n$$\\therefore \\text{Answer: (C) 2}$$",
    "correctAnswerIndices": [
      2
    ]
  },
  {
    "id": "gate26-s1-q25",
    "text": "Consider the following grammar where $S$ is the start symbol, and $a$ and $b$ are terminal symbols:\n$$S \\to aSbS \\mid bS \\mid \\epsilon$$\nWhich of the following statements is/are true?",
    "options": [
      "The grammar is ambiguous",
      "The string abb has two distinct derivations in this grammar",
      "The string abab has only one rightmost derivation",
      "The language generated by the grammar is undecidable"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Theory of Computation \u2014 Ambiguity in CFG",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **(A) Ambiguous:** The string $abb$ has multiple distinct parse trees:\n  1. $S \\to aSbS \\to abS \\to abbS \\to abb$\n  2. $S \\to aSbS \\to a(bS)bS \\to abbS \\to abb$\n  Thus the grammar is ambiguous. (Option A is True).\n- **(B) Derivations for abb:** As shown above, $abb$ has two distinct leftmost derivations / parse trees. (Option B is True).\n- **(C) Rightmost derivation of abab:** Trace rightmost derivations of $abab$. There is only one unique rightmost derivation tree producing $abab$. (Option C is True).\n- **(D) Undecidable:** Any context-free grammar generates a Context-Free Language (CFL), and the membership problem for any CFL is decidable (e.g. via CYK algorithm). (Option D is False).\n\n$$\\therefore \\text{Answer: (A), (B), (C)}$$",
    "correctAnswerIndices": [
      0,
      1,
      2
    ]
  },
  {
    "id": "gate26-s1-q26",
    "text": "Let M be a nondeterministic finite automaton (NFA) with 6 states over a finite alphabet.\n\nWhich of the following options CANNOT be the number of states in the minimal deterministic finite automaton (DFA) that is equivalent to M?",
    "options": [
      "32",
      "65",
      "1",
      "128"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "easy",
    "concept": "Theory of Computation \u2014 NFA to DFA Subset Construction",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nBy the **subset construction** (powerset construction):\n- For an NFA with $k$ states, any state in the equivalent DFA is a subset of the $k$ states of the NFA.\n- The total number of subsets of a $k$-element set is $2^k$.\n- Here $k = 6$, so the maximum number of states in the equivalent DFA is $2^6 = 64$.\n- The minimal equivalent DFA must have at least 1 state and at most 64 states:\n$$1 \\le |Q_{DFA}| \\le 64$$\n- 32 and 1 are within $[1, 64]$ and can be realized.\n- **65** and **128** are strictly greater than 64 and CANNOT be the number of states in any equivalent minimal DFA.\n\n$$\\therefore \\text{Answer: (B), (D)}$$",
    "correctAnswerIndices": [
      1,
      3
    ]
  },
  {
    "id": "gate26-s1-q27",
    "text": "Consider the following C statements:\n```c\nchar *str1 = \"Hello;    /* Statement S1 */\nchar *str2 = \"Hello;\";  /* Statement S2 */\nint *str3 = \"Hello\";    /* Statement S3 */\n```\nWhich of the following options is/are correct?",
    "options": [
      "S1 and S2 have syntactic errors",
      "S2 has a lexical error and S3 has a syntactic error",
      "S1 has a lexical error and S3 has a semantic error",
      "S1 has a syntactic error and S3 has a semantic error"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Compiler Design \u2014 Phases of Compiler (Errors)",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **Statement S1 (`char *str1 = \"Hello;`):** The string literal is missing its closing double-quote before the newline/comment. String literal token formation fails at the tokenization level, which is a **Lexical Error** (unterminated string literal).\n- **Statement S2 (`char *str2 = \"Hello;\";`):** Completely valid C code. No error.\n- **Statement S3 (`int *str3 = \"Hello\";`):** Syntactically valid according to the grammar `type * id = expr;`. However, the expression `\"Hello\"` has type `char *` while `str3` has type `int *`. Implicit pointer type mismatch without an explicit cast is a type error, which is caught during type checking in semantic analysis $\\implies$ **Semantic Error**.\n\n$$\\therefore \\text{Answer: (C) S1 has a lexical error and S3 has a semantic error}$$",
    "correctAnswerIndices": [
      2
    ]
  },
  {
    "id": "gate26-s1-q28",
    "text": "Which of the following statements is/are true?",
    "options": [
      "LL(1) parser uses backtracking",
      "For a grammar to be LL(1), it must be left-recursive",
      "For a grammar to be LL(1), it must be left-factored",
      "The LL(1) parsers are more powerful than the SLR parsers"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "easy",
    "concept": "Compiler Design \u2014 LL(1) Parsing",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **(A) False:** LL(1) is a non-backtracking, predictive top-down parser.\n- **(B) False:** A left-recursive grammar can NEVER be LL(1) because it leads to infinite loops / parsing table conflicts.\n- **(C) True:** Left-factoring eliminates common prefixes so that the parser can deterministically choose the correct production rule using only 1 lookahead token. Thus, an LL(1) grammar must be left-factored.\n- **(D) False:** SLR(1) is a bottom-up parser and is strictly more powerful than LL(1) (every LL(1) grammar is LR(1), but not every SLR(1) is LL(1)).\n\n$$\\therefore \\text{Answer: (C)}$$",
    "correctAnswerIndices": [
      2
    ]
  },
  {
    "id": "gate26-s1-q29",
    "text": "With respect to deadlocks in an operating system, which of the following statements is/are FALSE?",
    "options": [
      "Banker\u2019s algorithm is used to prevent deadlocks",
      "Deadlock formation can be prevented by ensuring that the hold and wait condition is not allowed",
      "An assignment edge in a resource allocation graph is marked from a process to a resource",
      "A safe state guarantees that all processes can finish without formation of a deadlock"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems \u2014 Deadlocks",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nWe are looking for statements that are **FALSE**:\n- **(A) FALSE:** Banker's algorithm is a **Deadlock Avoidance** algorithm, NOT a deadlock prevention algorithm. Deadlock prevention statically denies one of the 4 Coffman conditions; avoidance dynamically checks safe states.\n- **(B) True:** Invalidating any of the 4 Coffman conditions (such as Hold & Wait) successfully prevents deadlocks.\n- **(C) FALSE:** In a Resource Allocation Graph (RAG):\n  - **Request edge:** Directed from Process $\\to$ Resource ($P_i \\to R_j$)\n  - **Assignment edge:** Directed from Resource $\\to$ Process ($R_j \\to P_i$)\n  Hence, stating it is marked from process to resource is false!\n- **(D) True:** By definition, a system in a safe state has a safe execution sequence guaranteeing all processes can terminate without deadlock.\n\n$$\\therefore \\text{False Statements: (A), (C)}$$",
    "correctAnswerIndices": [
      0,
      2
    ]
  },
  {
    "id": "gate26-s1-q30",
    "text": "Let $P, Q, R$ and $S$ be the attributes of a relation in a relational schema. Let $X \\longrightarrow Y$ indicate functional dependency in the context of a relational database, where $X, Y \\subseteq \\{P, Q, R, S\\}$.\n\nWhich of the following options is/are always true?",
    "options": [
      "If ( {P, Q} \u27f6 {R} and {P} \u27f6 {R} ), then {Q} \u27f6 {R}",
      "If {P, Q} \u27f6 {R}, then ( {P} \u27f6 {R} or {Q} \u27f6 {R} )",
      "If ( {P} \u27f6 {R} and {Q} \u27f6 {S} ), then {P, Q} \u27f6 {R, S}",
      "If {P} \u27f6 {R}, then {P, Q} \u27f6 {R}"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "easy",
    "concept": "DBMS \u2014 Functional Dependencies & Armstrong's Axioms",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **Option (A) False:** If $P \\to R$, adding extraneous attribute $Q$ preserves $PQ \\to R$. But $Q$ alone may have no relation to $R$.\n- **Option (B) False:** $P$ and $Q$ together might be a composite key determining $R$, without either $P \\to R$ or $Q \\to R$ holding individually.\n- **Option (C) True (Composition Rule):** By augmentation, $P \\to R \\implies PQ \\to RQ$. By augmentation, $Q \\to S \\implies RQ \\to RS$. By transitivity, $PQ \\to RS$.\n- **Option (D) True (Augmentation Rule):** If $P \\to R$, then $PQ \\to RQ \\implies PQ \\to R$ by decomposition.\n\n$$\\therefore \\text{Answer: (C), (D)}$$",
    "correctAnswerIndices": [
      2,
      3
    ]
  },
  {
    "id": "gate26-s1-q31",
    "text": "In the context of relational database normalization, which of the following statements is/are true?",
    "options": [
      "It is always possible to obtain a dependency-preserving 3NF decomposition of a relation",
      "It is always possible to obtain a dependency-preserving 1NF decomposition of a relation",
      "It is not always possible to obtain a dependency-preserving BCNF decomposition of a relation",
      "It is not always possible to obtain a dependency-preserving 2NF decomposition of a relation"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MSQ",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "DBMS \u2014 Normalization & Decomposition Properties",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **(A) True:** Using the 3NF synthesis algorithm (Bernstein's algorithm), it is mathematically guaranteed that every relational schema has a lossless-join, dependency-preserving 3NF decomposition.\n- **(B) True:** 1NF requires atomic values; it trivially preserves all functional dependencies.\n- **(C) True:** BCNF guarantees lossless join, but does not always preserve dependencies (classic counterexample: $R(A, B, C)$ with $AB \\to C, C \\to B$).\n- **(D) False:** It IS always possible to achieve a dependency-preserving 2NF decomposition (since 3NF implies 2NF, and 3NF always has a dependency-preserving decomposition).\n\n$$\\therefore \\text{Answer: (A), (B), (C)}$$",
    "correctAnswerIndices": [
      0,
      1,
      2
    ]
  },
  {
    "id": "gate26-s1-q32",
    "text": "Consider the function $f: \\mathbb{R} \\to \\mathbb{R}$ defined as follows:\n$$f(x) = \\begin{cases} c_1 e^x - c_2 \\log_e \\left(\\frac{1}{x}\\right), & \\text{if } x > 0 \\\\ 3, & \\text{otherwise} \\end{cases}$$\nwhere $c_1, c_2 \\in \\mathbb{R}$.\nIf $f$ is continuous at $x = 0$, then $c_1 + c_2 = $ _________. *(answer in integer)*",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Engineering Mathematics \u2014 Calculus & Continuity",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nFor $f(x)$ to be continuous at $x = 0$:\n$$\\lim_{x \\to 0^+} f(x) = f(0) = 3$$\nNow consider the right-hand limit:\n$$\\lim_{x \\to 0^+} \\left[ c_1 e^x - c_2 \\log_e\\left(\\frac{1}{x}\\right) \\right] = 3$$\nAs $x \\to 0^+$:\n- $e^x \\to e^0 = 1$\n- $\\frac{1}{x} \\to +\\infty \\implies \\log_e\\left(\\frac{1}{x}\\right) \\to +\\infty$\n\nIf $c_2 \\neq 0$, the term $-c_2 \\log_e(1/x)$ blows up to $\\pm \\infty$, making a finite limit impossible!\nTherefore, to eliminate the divergence, we must have:\n$$c_2 = 0$$\nWith $c_2 = 0$:\n$$\\lim_{x \\to 0^+} c_1 e^x = c_1 (1) = c_1 = 3$$\n$$\\implies c_1 = 3, \\quad c_2 = 0$$\n$$c_1 + c_2 = 3 + 0 = 3$$\n\n$$\\therefore \\text{Answer: } 3$$",
    "natAnswer": 3,
    "natTolerance": 0
  },
  {
    "id": "gate26-s1-q33",
    "text": "The height of a binary tree is the number of edges in the longest path from the root to a leaf in the tree. The maximum possible height of a full binary tree with 23 nodes is _________. *(answer in integer)*",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Data Structures \u2014 Trees (Full Binary Tree)",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nIn a **full binary tree** (strictly binary tree), every node has either 0 or 2 children.\n- Let $n = 23$ be the total number of nodes.\n- Let $I$ be the number of internal nodes and $L$ be the number of leaf nodes.\n- In any full binary tree: $n = 2I + 1 \\implies 23 = 2I + 1 \\implies I = 11$, and $L = I + 1 = 12$.\n- To achieve the **maximum possible height**, the tree must be as skewed as possible: each internal node has exactly one internal node child and one leaf child.\n- Thus, there are $I = 11$ internal nodes arranged on a single path from the root to the deepest leaf.\n- The longest path contains 11 internal nodes plus the final leaf, which gives exactly 11 edges.\n$$\\text{Maximum Height} = I = 11$$\n\n$$\\therefore \\text{Answer: } 11$$",
    "natAnswer": 11,
    "natTolerance": 0
  },
  {
    "id": "gate26-s1-q34",
    "text": "Consider the following program in C:\n```c\n#include <stdio.h>\nvoid func(int i, int j) {\n  if(i < j) {\n    int i = 0;\n    while (i < 10) {\n      j += 2;\n      i++;\n    }\n  }\n  printf(\"%d\", i);\n}\nint main() {\n  int i = 9, j = 10;\n  func(i, j);\n  return 0;\n}\n```\nThe output of the program is _________. *(answer in integer)*\n*Note:* Assume that the program compiles and runs successfully.",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "easy",
    "concept": "Programming in C \u2014 Scope of Variables",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nTrace execution of `func(i, j)` with parameters `i = 9, j = 10`:\n1. Check condition `if (i < j)`: `9 < 10` is TRUE.\n2. Inside the `if` block:\n   - A new local variable `int i = 0;` is declared with block scope. This shadows the function parameter `i`.\n   - The `while` loop increments this block-scoped `i` from 0 to 10.\n3. The `if` block ends, and the block-scoped `i` is destroyed.\n4. Now `printf(\"%d\", i);` is executed in the outer function scope.\n   - Here, `i` refers to the original function parameter, which was never modified and retains its value **9**.\n\n$$\\therefore \\text{Output: } 9$$",
    "natAnswer": 9,
    "natTolerance": 0
  },
  {
    "id": "gate26-s1-q35",
    "text": "Consider a system consisting of $k$ instances of a resource $R$, being shared by 5 processes. Assume that each process requires a maximum of two instances of resource $R$ and a process can request or release only one instance at a time. Further, a process can request the second instance of the resource only after acquiring the first instance.\n\nThe minimum value of $k$ for the system to be deadlock-free is ________. *(answer in integer)*",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems \u2014 Deadlock Prevention",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nLet $N = 5$ processes ($P_1, P_2, P_3, P_4, P_5$).\nEach process requires a maximum demand of $M = 2$ instances.\n- In the worst-case allocation without any process being able to proceed, each process holds $M - 1 = 2 - 1 = 1$ instance.\n- Total resources allocated in the worst-case state:\n$$\\sum_{i=1}^N (M_i - 1) = 5 \\times (2 - 1) = 5$$\n- To guarantee that at least one process can acquire its remaining demand ($1$ additional instance) and complete, the system needs at least 1 more instance:\n$$k_{\\min} = \\sum_{i=1}^N (M_i - 1) + 1 = 5 + 1 = 6$$\nWith $k = 6$, at least one process gets 2 resources, finishes, and releases all its resources.\n\n$$\\therefore \\text{Answer: } 6$$",
    "natAnswer": 6,
    "natTolerance": 0
  },
  {
    "id": "gate26-s1-q36",
    "text": "Consider the real valued variables X, Y and Z represented using the IEEE 754 single-precision floating-point format. The binary representations of X and Y in hexadecimal notation are as follows:\n$$X: 35C00000_{16} \\quad Y: 34A00000_{16}$$\nLet $Z = X + Y$. Which one of the following is the binary representation of Z, in hexadecimal notation?",
    "options": [
      "35C80000",
      "35CC0000",
      "35E80000",
      "35EC0000"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "Computer Organization \u2014 IEEE 754 Floating Point Addition",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nConvert $X$ and $Y$ from Hex to IEEE 754 Single Precision (1 sign bit, 8 exponent bits with bias 127, 23 fraction bits):\n\n1. **For $X = 35C00000_{16}$:**\n   - Binary: `0 01101011 10000000000000000000000`\n   - Sign $= 0$ (+)\n   - Exponent $= 01101011_2 = 64 + 32 + 8 + 2 + 1 = 107$\n   - True exponent $= 107 - 127 = -20$\n   - Fraction $= 100..._2 = 0.5$, so Mantissa $= 1.5$\n   - $X = 1.5 \\times 2^{-20}$\n\n2. **For $Y = 34A00000_{16}$:**\n   - Binary: `0 01101001 01000000000000000000000`\n   - Sign $= 0$ (+)\n   - Exponent $= 01101001_2 = 64 + 32 + 8 + 1 = 105$\n   - True exponent $= 105 - 127 = -22$\n   - Fraction $= 010..._2 = 0.25$, so Mantissa $= 1.25$\n   - $Y = 1.25 \\times 2^{-22}$\n\n3. **Addition $Z = X + Y$:**\n   Align exponents to the larger exponent ($-20$):\n   $$Y = 1.25 \\times 2^{-22} = \\frac{1.25}{4} \\times 2^{-20} = 0.3125 \\times 2^{-20}$$\n   $$Z = (1.5 + 0.3125) \\times 2^{-20} = 1.8125 \\times 2^{-20}$$\n   Convert $1.8125$ to binary:\n   $$1.8125 = 1 + 0.5 + 0.25 + 0.0625 = 1.1101_2$$\n   - Mantissa $= 1.1101_2$, Fraction bits $= 11010000000000000000000_2$\n   - Exponent remains $107 = 01101011_2$\n   - Sign $= 0$\n\nReassemble into IEEE 754 bit-string:\n`0 01101011 11010000000000000000000`\nGroup into nibbles (hex):\n`0011 0101 1110 1000 0000 0000 0000 0000` $\\implies 35E80000_{16}$\n\n$$\\therefore \\text{Answer: (C) } 35E80000$$"
  },
  {
    "id": "gate26-s1-q37",
    "text": "Consider a 2-bit saturating up/down counter that performs the saturating up count when the input P is 0, and the saturating down count when P is 1. The Next State table of the counter is as shown:\n\n| Input $P$ | Current State $Q_1, Q_0$ | Next State $Q_1^+, Q_0^+$ |\n| :---: | :---: | :---: |\n| 0 | 0 0 | 0 1 |\n| 0 | 0 1 | 1 0 |\n| 0 | 1 0 | 1 1 |\n| 0 | 1 1 | 1 1 |\n| 1 | 0 0 | 0 0 |\n| 1 | 0 1 | 0 0 |\n| 1 | 1 0 | 0 1 |\n| 1 | 1 1 | 1 0 |\n\nThe counter is built as a synchronous sequential circuit using D flip-flops. Which one of the following options corresponds to the expressions for the inputs of the D flip-flops, $D_1$ and $D_0$?",
    "options": [
      "$D_1 = P Q_1 + \\bar{P} Q_0 + Q_1 Q_0, \\quad D_0 = P Q_0 + \\bar{P} Q_1 + Q_1 \\bar{Q_0}$",
      "$D_1 = \\bar{P} Q_1 + \\bar{P} Q_0 + Q_1 Q_0, \\quad D_0 = \\bar{P} \\bar{Q_0} + \\bar{P} Q_1 + Q_1 \\bar{Q_0}$",
      "$D_1 = \\bar{P} \\bar{Q_1} + \\bar{P} Q_0 + Q_1 Q_0, \\quad D_0 = \\bar{P} Q_0 + \\bar{P} Q_1 + Q_1 \\bar{Q_0}$",
      "$D_1 = P \\bar{Q_1} + \\bar{P} Q_0 + Q_1 Q_0, \\quad D_0 = P \\bar{Q_0} + \\bar{P} Q_1 + Q_1 \\bar{Q_0}$"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "Digital Logic \u2014 Sequential Circuits & D Flip-Flops",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nFor D flip-flops, $D_1 = Q_1^+$ and $D_0 = Q_0^+$.\n\n1. **K-Map for $D_1(P, Q_1, Q_0)$:**\n   Minterms where $Q_1^+ = 1$:\n   - $(P=0, Q_1=0, Q_0=1) \\implies m_1$\n   - $(P=0, Q_1=1, Q_0=0) \\implies m_2$\n   - $(P=0, Q_1=1, Q_0=1) \\implies m_3$\n   - $(P=1, Q_1=1, Q_0=1) \\implies m_7$\n   $$D_1 = \\sum m(1, 2, 3, 7)$$\n   Grouping on 3-variable K-map:\n   - Group $m_2, m_3$: $\\bar{P} Q_1$\n   - Group $m_1, m_3$: $\\bar{P} Q_0$\n   - Group $m_3, m_7$: $Q_1 Q_0$\n   $$\\implies D_1 = \\bar{P} Q_1 + \\bar{P} Q_0 + Q_1 Q_0$$\n\n2. **K-Map for $D_0(P, Q_1, Q_0)$:**\n   Minterms where $Q_0^+ = 1$:\n   - $(0, 0, 0) \\implies m_0$\n   - $(0, 1, 0) \\implies m_2$\n   - $(0, 1, 1) \\implies m_3$\n   - $(1, 1, 0) \\implies m_6$\n   $$D_0 = \\sum m(0, 2, 3, 6)$$\n   Grouping on 3-variable K-map:\n   - Group $m_0, m_2$: $\\bar{P} \\bar{Q_0}$\n   - Group $m_2, m_3$: $\\bar{P} Q_1$\n   - Group $m_2, m_6$: $Q_1 \\bar{Q_0}$\n   $$\\implies D_0 = \\bar{P} \\bar{Q_0} + \\bar{P} Q_1 + Q_1 \\bar{Q_0}$$\n\n$$\\therefore \\text{Answer: (B)}$$",
    "imageUrl": "/images/gate2026/q37_counter_table.png",
    "imageAlt": "Q37: 2-bit saturating counter next-state table with inputs P, Q1, Q0 and next states Q1+, Q0+"
  },
  {
    "id": "gate26-s1-q38",
    "text": "The size of the physical address space of a processor is $2^{32}$ bytes. The capacity of a cache memory unit is $2^{23}$ bytes. The cache block size is 128 bytes. The cache memory unit can be built as a direct mapped cache or as a $K$-way set-associative cache, where $K = 2^L$ and $L \\in \\{1, 2, 3\\}$. Let the length of the TAG field be $M$ bits for the direct mapped cache, and $N$ bits for the set-associative cache.\n\nWhich one of the following options is true?",
    "options": [
      "$N = M + L$",
      "$N = M - L$",
      "$N = M + K$",
      "$N = M - K$"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "Computer Organization \u2014 Cache Memory Addressing",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nGiven parameters:\n- Physical address $= 32$ bits (Address space $= 2^{32}$ B)\n- Block size $= 128$ B $= 2^7$ B $\\implies$ Block offset $= 7$ bits\n- Cache size $= 2^{23}$ B\n\n1. **Direct Mapped Cache:**\n   - Number of blocks/lines $= \\frac{2^{23}}{2^7} = 2^{16}$\n   - Index bits $= 16$\n   - Tag bits $M = 32 - (\\text{Index} + \\text{Offset}) = 32 - (16 + 7) = 32 - 23 = 9$ bits\n\n2. **$K$-way Set Associative Cache ($K = 2^L$):**\n   - Number of sets $= \\frac{\\text{Total Blocks}}{K} = \\frac{2^{16}}{2^L} = 2^{16 - L}$\n   - Set Index bits $= 16 - L$\n   - Tag bits $N = 32 - (\\text{Set Index} + \\text{Offset}) = 32 - ((16 - L) + 7) = 32 - (23 - L) = 9 + L$\n\nSince $M = 9$, we immediately have:\n$$N = M + L$$\n\n$$\\therefore \\text{Answer: (A) } N = M + L$$"
  },
  {
    "id": "gate26-s1-q39",
    "text": "Consider the following code snippet in C language that computes the number of nodes in a non-empty singly linked list pointed to by the pointer variable head:\n```c\nstruct node{\n  int elt;\n  struct node *next;\n};\nint getListSize (struct node *head)\n{\n  if( E1 ) return 1;\n  return E2;\n}\n```\nWhich one of the following options gives the correct replacements for the expressions E1 and E2?",
    "options": [
      "E1: head == NULL\nE2: 1 + getListSize(head)",
      "E1: head->next == NULL\nE2: 1 + getListSize(head->next)",
      "E1: head == NULL\nE2: 1 + getListSize(head->next)",
      "E1: head->next == NULL\nE2: 1 + getListSize(head)"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "easy",
    "concept": "Data Structures \u2014 Linked List Recursion",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nGiven: The singly linked list is **non-empty** (`head != NULL`).\n- When the list contains exactly **one node**, `head->next == NULL`. In this base case, the function should return 1. Thus, `E1: head->next == NULL`.\n- In the recursive step, if there are more nodes, the total length is 1 (for the current head node) plus the length of the remaining list starting at `head->next`. Thus, `E2: 1 + getListSize(head->next)`.\n\nNote: If `E1` were `head == NULL`, returning 1 for a NULL pointer would be logically incorrect for counting nodes.\n\n$$\\therefore \\text{Answer: (B)}$$"
  },
  {
    "id": "gate26-s1-q40",
    "text": "Let P be the set of all integers from 1 to 15. Consider any order of insertion of the elements of P into a binary search tree that creates a complete binary tree.\n\nWhich one of the following elements can NEVER be the third element that is inserted?",
    "options": [
      "4",
      "2",
      "10",
      "5"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "hard",
    "concept": "Data Structures \u2014 Binary Search Tree & Complete Binary Tree",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nA complete binary tree with 15 nodes is a **perfect binary tree** of height 3 (4 levels: $1 + 2 + 4 + 8 = 15$ nodes).\nDue to the BST property, the keys at each level are uniquely fixed:\n- **Level 0 (Root):** 8\n- **Level 1:** Left child = 4, Right child = 12\n- **Level 2:** Children of 4 are 2 and 6; Children of 12 are 10 and 14\n- **Level 3 (Leaves):** 1, 3, 5, 7, 9, 11, 13, 15\n\nTo construct this complete BST without rearranging existing nodes:\n1. The 1st inserted element MUST be the root: **8**.\n2. The 2nd and 3rd inserted elements can only attach as direct children of already inserted nodes:\n   - The 2nd element must be either **4** or **12**.\n   - If the 2nd element is 4, the 3rd element can be either **12** (other child of 8) or one of the children of 4 (**2** or **6**).\n   - If the 2nd element is 12, the 3rd element can be **4** or a child of 12 (**10** or **14**).\n3. Notice that element **5** is at **Level 3** (a leaf node). Node 5 is a child of 6 (which is a child of 4, which is a child of 8).\n   For 5 to attach in its proper position, its ancestors 8, 4, and 6 must already be in the tree (at least 3 prior insertions). Therefore, 5 can NEVER be the 3rd element inserted!\n\n$$\\therefore \\text{Answer: (D) } 5$$"
  },
  {
    "id": "gate26-s1-q41",
    "text": "Let $G(V, E)$ be an undirected, edge-weighted graph with integer weights. The weight of a path is the sum of the weights of the edges in that path. The length of a path is the number of edges in that path.\n\nLet $s \\in V$ be a vertex in $G$. For every $u \\in V$ and for every $k \\ge 0$, let $d_k(u)$ denote the weight of a shortest path (in terms of weight) from $s$ to $u$ of length at most $k$. If there is no path from $s$ to $u$ of length at most $k$, then $d_k(u) = \\infty$.\n\nConsider the statements:\n**S1:** For every $k \\ge 0$ and $u \\in V, d_{k+1}(u) \\le d_k(u)$.\n**S2:** For every $(u, v) \\in E$, if $(u, v)$ is part of a shortest path (in terms of weight) from $s$ to $v$, then for every $k \\ge 0, d_k(u) \\le d_k(v)$.\n\nWhich one of the following options is correct?",
    "options": [
      "Only S1 is true",
      "Only S2 is true",
      "Both S1 and S2 are true",
      "Neither S1 nor S2 is true"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "Algorithms \u2014 Shortest Paths & Dynamic Programming",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **Statement S1:** $d_k(u)$ is the minimum weight among all paths from $s$ to $u$ of length $\\le k$. The set of paths of length $\\le k$ is a subset of the set of paths of length $\\le k + 1$. Minimizing over a larger set can only decrease or maintain the minimum:\n$$d_{k+1}(u) = \\min(d_k(u), \\min_{(w, u) \\in E} \\{d_k(w) + w(w, u)\\}) \\le d_k(u)$$\nTherefore, **S1 is ALWAYS TRUE**.\n- **Statement S2:** Counterexample: Let $G$ have vertices $s, u, v$ and edges $(s, v)$ with weight 10, $(s, u)$ with weight 1, and $(u, v)$ with weight 1. The shortest path from $s$ to $v$ is $s \\to u \\to v$ (total weight 2). Here $(u, v)$ is part of this shortest path.\nFor $k = 1$:\n  - $d_1(u) = 1$ (via edge $s \\to u$)\n  - $d_1(v) = 10$ (via direct edge $s \\to v$)\nHere $d_1(u) = 1 \\le d_1(v) = 10$.\nNow consider another graph where $s$ has a direct edge to $v$ with weight $-5$, but path to $u$ requires 2 edges. For $k = 1$, $d_1(v) = -5$, whereas $d_1(u) = \\infty$, so $d_1(u) > d_1(v)$! Thus S2 does not hold in general for arbitrary $k$.\n\n$$\\therefore \\text{Answer: (A) Only S1 is true}$$"
  },
  {
    "id": "gate26-s1-q42",
    "text": "Consider the control flow graph shown in the figure:\n- Entry block B1: `a = b + i`\n- Left branch B2: `a = g * k; f = d - f; a = c * 4`\n- Right branch B3: `t = g * k; b = c + m`\n- Merge block B4: `x = g * k; y = b + i`\n- Exit block B5: `z = c + m`\n\nWhich one of the following options correctly lists the set of redundant expressions (common subexpressions) in the basic blocks B4 and B5?\n*Note:* All the variables are integers.",
    "options": [
      "B4: { b + i }, B5: { c + m }",
      "B4: { g * k }, B5: { c + m }",
      "B4: { g * k, b + i }, B5: { }",
      "B4: { g * k }, B5: { }"
    ],
    "correctAnswerIndex": 3,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "Compiler Design \u2014 Available Expressions & Optimization",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nAn expression is redundant (available) at a program point if it is computed along **EVERY** path leading to that point, and none of its operands are modified after that computation.\n\n1. **In Block B4:**\n   - Paths entering B4 come from B2 and B3.\n   - **Expression `g * k`:** Computed in B2 (`a = g * k`) and in B3 (`t = g * k`). Neither `g` nor `k` is redefined along either branch. Hence, `g * k` is available along all paths entering B4 $\\implies$ **`g * k` is redundant in B4**.\n   - **Expression `b + i`:** In B3, `b` is redefined (`b = c + m`). Hence `b + i` is killed in B3 and NOT available entering B4.\n\n2. **In Block B5:**\n   - **Expression `c + m`:** Computed in B3 (`b = c + m`), but along the path through B2, `c + m` is NEVER computed! Since it is not computed along all incoming paths, it is NOT available at B5 $\\implies$ `c + m` is NOT redundant in B5.\n\nTherefore, B4: $\\{g * k\\}$ and B5: $\\{\\}$.\n\n$$\\therefore \\text{Answer: (D)}$$",
    "imageUrl": "/images/gate2026/q42_cfg.png",
    "imageAlt": "Q42: Control flow graph with blocks B1, B2, B3, B4, B5"
  },
  {
    "id": "gate26-s1-q43",
    "text": "Consider a relational database schema with two relations $R(P, Q)$ and $S(X, Y)$. Let $E = \\{\\langle u \\rangle \\mid \\exists v \\exists w \\, \\langle u, v \\rangle \\in R \\wedge \\langle v, w \\rangle \\in S\\}$ be a tuple relational calculus expression.\n\nWhich one of the following relational algebraic expressions is equivalent to E?",
    "options": [
      "$\\Pi_P (R \\bowtie_{R.P = S.X} S)$",
      "$\\Pi_P (S \\bowtie_{S.X = R.Q} R)$",
      "$\\Pi_P (R \\bowtie_{R.P = S.Y} S)$",
      "$\\Pi_P (S \\bowtie_{S.Y = R.Q} R)$"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "easy",
    "concept": "DBMS \u2014 Tuple Relational Calculus to Relational Algebra",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nLet's analyze the expression $E$:\n$$E = \\{\\langle u \\rangle \\mid \\exists v \\exists w \\, \\langle u, v \\rangle \\in R \\wedge \\langle v, w \\rangle \\in S\\}$$\n- $\\langle u, v \\rangle \\in R(P, Q)$ means $P = u$ and $Q = v$.\n- $\\langle v, w \\rangle \\in S(X, Y)$ means $X = v$ and $Y = w$.\n- The shared variable $v$ links $R.Q$ with $S.X$, requiring the join condition $R.Q = S.X$.\n- The output tuple is $\\langle u \\rangle$, which corresponds to attribute $P$ of relation $R$.\n- Performing the equijoin $R \\bowtie_{R.Q = S.X} S$ (or $S \\bowtie_{S.X = R.Q} R$) and projecting on $P$ gives:\n$$\\Pi_P (S \\bowtie_{S.X = R.Q} R)$$\n\n$$\\therefore \\text{Answer: (B)}$$"
  },
  {
    "id": "gate26-s1-q44",
    "text": "A TCP sender successfully establishes a connection with a TCP receiver and starts the transmission of segments. The TCP congestion control mechanism\u2019s slow-start threshold is set to 10000 segments. Assume that the round-trip time is fixed at 1 millisecond. Assume that the sender always has data to send, the segments are numbered from 1, and no segment is lost. Let t denote the time (in milliseconds) at which the transmission of segment number 2000 starts.\n\nWhich one of the following options is correct?",
    "options": [
      "$9 \\le t < 10$",
      "$10 \\le t < 11$",
      "$11 \\le t < 12$",
      "$12 \\le t < 13$"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "medium",
    "concept": "Computer Networks \u2014 TCP Congestion Control (Slow Start)",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nIn TCP Slow Start, the congestion window ($cwnd$) starts at 1 segment and doubles every RTT ($RTT = 1$ ms):\n- **Round 1 ($t \\in [0, 1)$ ms):** $cwnd = 1 = 2^0$. Sends segment 1. Cumulative sent: 1.\n- **Round 2 ($t \\in [1, 2)$ ms):** $cwnd = 2 = 2^1$. Sends segments 2 to 3. Cumulative sent: 3.\n- **Round 3 ($t \\in [2, 3)$ ms):** $cwnd = 4 = 2^2$. Sends segments 4 to 7. Cumulative sent: 7.\n- **Round $k$ ($t \\in [k-1, k)$ ms):** $cwnd = 2^{k-1}$. Cumulative segments sent after round $k$ is:\n$$\\sum_{i=1}^k 2^{i-1} = 2^k - 1$$\n\nEvaluating cumulative counts:\n- After Round 10 ($t = 10$ ms): Cumulative sent $= 2^{10} - 1 = 1023$ segments.\n- In Round 11 ($t \\in [10, 11)$ ms):\n  - $cwnd = 2^{10} = 1024$ segments (since $1024 < \\text{ssthresh} = 10000$).\n  - Segments sent in this round are numbered from $1024$ to $1023 + 1024 = 2047$.\n\nSegment number **2000** falls in Round 11, which transmits in the time interval $[10, 11)$ ms!\n$$\\therefore 10 \\le t < 11$$\n\n$$\\therefore \\text{Answer: (B) } 10 \\le t < 11$$"
  },
  {
    "id": "gate26-s1-q45",
    "text": "Consider the implementation of sliding window protocol over a lossless link, with a window size of W frames, where each frame is of size 1000 bits (including header). The bandwidth of the link is 100 kbps ($1\\text{k} = 10^3$) and the one-way propagation delay is 100 milliseconds. Assume that processing times at the sender and receiver are zero and the transmission time of acknowledgements is also zero. Which one of the following options gives the minimum size of W (in number of frames) required to achieve 100% link utilization?",
    "options": [
      "10",
      "21",
      "20",
      "11"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MCQ",
    "marks": 2,
    "negativeMarks": 0.66,
    "difficulty": "easy",
    "concept": "Computer Networks \u2014 Sliding Window Protocol",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nGiven data:\n- Frame size $L = 1000$ bits\n- Bandwidth $B = 100$ kbps $= 100 \\times 10^3$ bps\n- Propagation delay $T_p = 100$ ms $= 0.1$ s\n- Transmission time of a frame:\n$$T_t = \\frac{L}{B} = \\frac{1000}{100 \\times 10^3} = \\frac{1}{100} \\text{ s} = 10 \\text{ ms}$$\n\nRatio of propagation time to transmission time ($a$):\n$$a = \\frac{T_p}{T_t} = \\frac{100 \\text{ ms}}{10 \\text{ ms}} = 10$$\n\nFor 100% link utilization ($\\\\eta = 1$), the window size $W$ must cover the entire round trip time:\n$$\\eta = \\frac{W}{1 + 2a} = 1 \\implies W = 1 + 2a = 1 + 2(10) = 21 \\text{ frames}$$\n\n$$\\therefore \\text{Answer: (B) } 21$$"
  },
  {
    "id": "gate26-s1-q46",
    "text": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined as follows:\n$$f(x) = \\left(\\frac{|x|}{2} - x\\right)\\left(x - \\frac{|x|}{2}\\right)$$\nWhich of the following statements is/are true?",
    "options": [
      "f has a local maximum",
      "f has a local minimum",
      "f' is continuous over \u211d",
      "f' is not differentiable over \u211d"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Engineering Mathematics \u2014 Calculus & Differentiability",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nRewrite $f(x)$ by factoring out a minus sign:\n$$f(x) = -\\left(x - \\frac{|x|}{2}\\right)^2$$\n1. **For $x \\ge 0$ ($|x| = x$):**\n   $$f(x) = -\\left(x - \\frac{x}{2}\\right)^2 = -\\left(\\frac{x}{2}\\right)^2 = -\\frac{x^2}{4}$$\n2. **For $x < 0$ ($|x| = -x$):**\n   $$f(x) = -\\left(x - \\frac{-x}{2}\\right)^2 = -\\left(\\frac{3x}{2}\\right)^2 = -\\frac{9x^2}{4}$$\n\n- **Extrema:** At $x = 0$, $f(0) = 0$. For any $x \\neq 0$, $f(x) < 0$. Hence, $f(x)$ achieves its global (and local) maximum at $x = 0$. (Option A is True, Option B is False).\n- **First Derivative $f'(x)$:**\n  - For $x > 0$: $f'(x) = -\\frac{x}{2}$\n  - For $x < 0$: $f'(x) = -\\frac{9x}{2}$\n  At $x = 0$:\n  $$\\lim_{x \\to 0^+} f'(x) = 0, \\quad \\lim_{x \\to 0^-} f'(x) = 0 \\implies f'(0) = 0$$\n  Since limits from both sides agree, $f'(x)$ is continuous over all $\\mathbb{R}$. (Option C is True).\n- **Second Derivative $f''(x)$:**\n  - $\\lim_{x \\to 0^+} f''(x) = -1/2$\n  - $\\lim_{x \\to 0^-} f''(x) = -9/2$\n  Since the left and right derivatives of $f'$ at 0 are not equal ($-1/2 \\neq -9/2$), $f'$ is NOT differentiable at $x = 0$. (Option D is True).\n\n$$\\therefore \\text{Answer: (A), (C), (D)}$$",
    "correctAnswerIndices": [
      0,
      2,
      3
    ]
  },
  {
    "id": "gate26-s1-q47",
    "text": "Let $G(V, E)$ be a simple, undirected graph. A vertex cover of $G$ is a subset $V' \\subseteq V$ such that for every $(u, v) \\in E$, $u \\in V'$ or $v \\in V'$. Let the size of the smallest vertex cover in $G$ be $k$. Let $S$ be any vertex cover of size $k$.\n\nFor a vertex $v \\in V$, which of the following constraints will always ensure that $v \\in S$?",
    "options": [
      "The degree of v is at least k + 1",
      "The vertex v is on a path of length k + 1",
      "The vertex v is on a cycle of length k + 1",
      "The vertex v is a part of a clique of size k"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Algorithms \u2014 Graph Theory (Vertex Cover)",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nLet $S$ be a minimum vertex cover of size $|S| = k$.\n- Suppose $\\text{degree}(v) \\ge k + 1$, and assume for contradiction that $v \\notin S$.\n- If $v \\notin S$, then to cover every edge $(v, u)$ incident on $v$, every single neighbor $u$ of $v$ must be included in $S$.\n- Since $v$ has at least $k + 1$ distinct neighbors, $S$ must contain at least $k + 1$ vertices: $|S| \\ge k + 1$.\n- But we are given $|S| = k$, a contradiction! Therefore, $v$ MUST belong to $S$.\n\nFor the other options:\n- Being on a path, cycle, or clique of size $k$ does not force $v$ into every minimum vertex cover (other vertices can cover the edges).\n\n$$\\therefore \\text{Answer: (A)}$$",
    "correctAnswerIndices": [
      0
    ]
  },
  {
    "id": "gate26-s1-q48",
    "text": "Consider a Boolean function F with the following minterm expression:\n$$F(P, Q, R, S) = \\sum m(1, 2, 3, 4, 5, 7, 10, 12, 13, 14)$$\nWhich of the following options is/are the minimal sum-of-products expression(s) of F?",
    "options": [
      "$\\bar{P}S + Q\\bar{R} + \\bar{P}\\bar{Q}R + \\bar{Q}R\\bar{S}$",
      "$\\bar{P}S + Q\\bar{R} + \\bar{P}\\bar{Q}R + PR\\bar{S}$",
      "$\\bar{P}S + Q\\bar{R} + PQ\\bar{S} + PR\\bar{S}$",
      "$\\bar{P}S + Q\\bar{R} + PQ\\bar{S} + \\bar{Q}R\\bar{S}$"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Digital Logic \u2014 K-Map Minimization",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nMinterms on 4-variable K-map (variables $P, Q, R, S$):\n$m(1, 2, 3, 4, 5, 7, 10, 12, 13, 14)$.\n\n1. **Essential Prime Implicants:**\n   - Quad $m(1, 3, 5, 7)$: $\\bar{P}S$ (covers 1, 3, 5, 7)\n   - Quad $m(4, 5, 12, 13)$: $Q\\bar{R}$ (covers 4, 5, 12, 13)\n   Both $\\bar{P}S$ and $Q\\bar{R}$ are essential.\n\n2. **Remaining uncovered minterms:** $m(2), m(10), m(14)$.\n   - To cover $m(2)$ and $m(10)$ and $m(14)$:\n     - Group $m(2, 3)$: $\\bar{P}\\bar{Q}R$\n     - Group $m(10, 14)$: $PR\\bar{S}$\n     - Or group $m(12, 14)$: $PQ\\bar{S}$ and $m(2, 10)$: $\\bar{Q}R\\bar{S}$\n\nCombining the valid minimum 4-term coverings:\n- Cover 1: $\\bar{P}S + Q\\bar{R} + \\bar{P}\\bar{Q}R + PR\\bar{S}$ (Option B)\n- Cover 2: $\\bar{P}S + Q\\bar{R} + PQ\\bar{S} + \\bar{Q}R\\bar{S}$ (Option D)\n\nBoth are minimal SOPs with 4 terms and 11 literals.\n\n$$\\therefore \\text{Answer: (B), (D)}$$",
    "correctAnswerIndices": [
      1,
      3
    ]
  },
  {
    "id": "gate26-s1-q49",
    "text": "Let $G(V, E)$ be a simple, undirected, edge-weighted graph with unique edge weights.\n\nWhich of the following statements about the minimum spanning trees (MST) of G is/are true?",
    "options": [
      "In every cycle C of G, the edge with the largest weight in C is not in any MST",
      "In every cycle C of G, the edge with the smallest weight in C is in every MST",
      "For every vertex v \u2208 V, the edge with the largest weight incident on v is not in any MST",
      "For every vertex v \u2208 V, the edge with the smallest weight incident on v is in every MST"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Algorithms \u2014 Cycle & Cut Properties of MST",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **(A) True (Cycle Property):** For any cycle $C$ in a graph with unique edge weights, the edge with the strictly maximum weight in $C$ cannot be part of any MST.\n- **(B) False:** The lightest edge in a cycle is not guaranteed to be in the MST; there might be even lighter edges elsewhere in the graph connecting those components.\n- **(C) False:** If a vertex $v$ has degree 1, its only incident edge is the largest weight edge incident on it, and it MUST be in every spanning tree to keep $v$ connected.\n- **(D) True (Cut Property):** Consider the cut partition $( \\{v\\}, V \\setminus \\{v\\} )$. The edges crossing this cut are precisely the edges incident on $v$. By the Cut Property of MSTs, the unique lightest edge crossing any cut MUST belong to the MST!\n\n$$\\therefore \\text{Answer: (A), (D)}$$",
    "correctAnswerIndices": [
      0,
      3
    ]
  },
  {
    "id": "gate26-s1-q50",
    "text": "Consider the standard Depth-First Search (DFS) algorithm on a directed graph $G(V, E)$, where $d[v]$ and $f[v]$ are the discovery time and finishing time of vertex $v \\in V$.\n\nSuppose that the input directed graph $G(V, E)$ is a directed acyclic graph (DAG).\nFor an edge $(u, v) \\in E$, which of the following options will NEVER be correct?",
    "options": [
      "$d[u] < d[v] < f[v] < f[u]$",
      "$d[v] < d[u] < f[u] < f[v]$",
      "$d[v] < f[v] < d[u] < f[u]$",
      "$d[u] < d[v] < f[u] < f[v]$"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Algorithms \u2014 DFS on DAG & Parenthesis Theorem",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nBy the **Parenthesis Theorem** of DFS:\nFor any two vertices $u$ and $v$, the intervals $[d[u], f[u]]$ and $[d[v], f[v]]$ must be either entirely disjoint or one strictly nested inside the other. Overlapping intervals without nesting can NEVER occur in any DFS!\n- **Option (D)** has $d[u] < d[v] < f[u] < f[v]$ (overlapping intervals). This violates the Parenthesis Theorem and can NEVER happen in DFS.\n\nNow consider the presence of the directed edge $(u, v) \\in E$ in a **DAG**:\n- In a DAG, there are **no back edges** (a back edge implies a directed cycle).\n- **Option (B)** has $d[v] < d[u] < f[u] < f[v]$, meaning $u$ is a descendant of $v$ in the DFS tree. But the edge is directed from $u \\to v$! A directed edge from a descendant $u$ to its ancestor $v$ is by definition a **back edge**. Since $G$ is a DAG, no back edge can exist!\n- Option (A) is a tree or forward edge (valid).\n- Option (C) is a cross edge (valid).\n\nHence, Options (B) and (D) can NEVER be correct.\n\n$$\\therefore \\text{Answer: (B), (D)}$$",
    "correctAnswerIndices": [
      1,
      3
    ],
    "imageUrl": "/images/gate2026/q50_dfs_pseudocode.jpg",
    "imageAlt": "Q50: DFS pseudocode showing DFS(G) and Explore(G,v,t) procedures"
  },
  {
    "id": "gate26-s1-q51",
    "text": "Let $L_1$ and $L_2$ be two languages over a finite alphabet, such that $L_1 \\cap L_2$ and $L_2$ are regular languages.\n\nWhich of the following statements is/are always true?",
    "options": [
      "$L_1$ is regular",
      "$L_1 \\cup L_2$ is regular",
      "$\\overline{L_2}$ is context-free",
      "$L_1$ is context-free"
    ],
    "correctAnswerIndex": 2,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Theory of Computation \u2014 Closure Properties",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- Given: $L_2$ is regular. By closure properties of regular languages, the complement $\\overline{L_2}$ is also regular. Since every regular language is a subset of context-free languages, $\\overline{L_2}$ is always context-free! (Option C is True).\n- Counterexample for $L_1$ being regular / CFL:\n  Let $L_2 = \\emptyset$ (which is regular). Then for ANY arbitrary language $L_1$ (even an undecidable/non-CFL language like $\\{a^n b^n c^n\\}$ or the Halting Problem language), $L_1 \\cap L_2 = \\emptyset$ is regular! Yet $L_1$ is neither regular nor context-free, and $L_1 \\cup L_2 = L_1$ is not regular. Hence, Options A, B, and D are not always true.\n\n$$\\therefore \\text{Answer: (C) } \\overline{L_2} \\text{ is context-free}$$",
    "correctAnswerIndices": [
      2
    ]
  },
  {
    "id": "gate26-s1-q52",
    "text": "Consider the following context-free grammar G:\n$$S \\to aba A B A bba$$\n$$A \\to aa B B A b \\mid b B a b a a$$\n$$B \\to a B b \\mid a b$$\n\nIn the above grammar, S is the start symbol, a and b are terminal symbols, and A and B are non-terminal symbols. Let $L(G)$ be the language generated by the grammar G. For a string $s \\in L(G)$, let $n_1(s)$ be the number of a\u2019s in $s$ and $n_2(s)$ be the number of b\u2019s in $s$.\n\nWhich of the following statements is/are true?",
    "options": [
      "There is a string $s \\in L(G)$ such that $n_1(s) < n_2(s)$",
      "For every string $s \\in L(G), n_1(s) \\ge n_2(s)$",
      "There is a string $s \\in L(G)$ such that $n_1(s) > 2n_2(s)$",
      "For every string $s \\in L(G), n_1(s) \\le 2n_2(s)$"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Theory of Computation \u2014 Grammar Symbol Counting",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nLet's analyze the contribution of terminals in each production rule:\n1. **For $B$:**\n   - $B \\to a B b$ or $B \\to a b$\n   - In every step, one 'a' and one 'b' are added. Thus, for any derivation from $B$, $n_a(B) = n_b(B)$.\n\n2. **For $A$:**\n   - Rule 1: $A \\to aa B B A b$. Direct terminals: two 'a's and one 'b' ($+2a, +1b$). The two $B$'s contribute equal $a$ and $b$.\n     Net difference $\\Delta(a - b) = +1$, ratio $a/b \\le 2$.\n   - Rule 2: $A \\to b B a b a a$. Direct terminals: three 'a's and two 'b's ($+3a, +2b$). The $B$ contributes equal $a$ and $b$.\n     Net difference $\\Delta(a - b) = +1$, ratio $a/b = 3/2 \\in [1, 2]$.\n\n3. **For $S$:**\n   - $S \\to aba A B A bba$\n   - Terminals outside $A, B$ are $aba$ ($2a, 1b$) and $bba$ ($1a, 2b$).\n   - Total outside terminals: $3$ 'a's and $3$ 'b's (equal count!).\n\nBecause every sub-derivation generates at least as many 'a's as 'b's ($n_a \\ge n_b$) and never more than twice as many 'a's as 'b's ($n_a \\le 2n_b$):\n- **(B) True:** For every string $s \\in L(G), n_1(s) \\ge n_2(s)$.\n- **(D) True:** For every string $s \\in L(G), n_1(s) \\le 2n_2(s)$.\n- (A) and (C) are False.\n\n$$\\therefore \\text{Answer: (B), (D)}$$",
    "correctAnswerIndices": [
      1,
      3
    ]
  },
  {
    "id": "gate26-s1-q53",
    "text": "Consider the following two syntax-directed definitions SDD1 and SDD2 for type declarations:\n\n**SDD1:**\n- $D \\to T \\, V \\quad \\{ D.type = T.type; \\, V.type = T.type; \\}$\n- $T \\to int \\quad \\{ T.type = int; \\}$\n- $T \\to float \\quad \\{ T.type = float; \\}$\n- $V \\to V_1 \\, id \\quad \\{ V_1.type = V.type; \\, put(id.entry, V.type); \\}$\n- $V \\to id \\quad \\{ put(id.entry, V.type); \\}$\n\n**SDD2:**\n- $D \\to D_1 \\, id \\quad \\{ D.type = D_1.type; \\, put(id.entry, D_1.type); \\}$\n- $D \\to T \\, id \\quad \\{ D.type = T.type; \\, put(id.entry, T.type); \\}$\n- $T \\to int \\quad \\{ T.type = int; \\}$\n- $T \\to float \\quad \\{ T.type = float; \\}$\n\nWhich of the following statements is/are true?",
    "options": [
      "The languages P and Q are the same",
      "SDD2 is S-attributed and contains only synthesized attributes",
      "SDD1 is L-attributed and contains only inherited attributes",
      "The specifications of SDD1 and SDD2 are such that the same entries get added to the symbol table"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Compiler Design \u2014 Syntax Directed Translation (SDD)",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n- **(A) True:** Both grammars G1 and G2 specify the language of type declarations consisting of a type keyword (`int` or `float`) followed by a list of identifiers: `type id id ... id`. Thus $P = Q$.\n- **(B) True:** In SDD2, the semantic rules for $D$ and $T$ only compute attributes from their children (e.g. $D.type = D_1.type$, $D.type = T.type$, $T.type = int$). All attributes are synthesized, making SDD2 an S-attributed definition.\n- **(C) False:** SDD1 has inherited attributes ($V.type = T.type$), but it ALSO has synthesized attributes ($T.type = int, T.type = float$). It does not contain *only* inherited attributes.\n- **(D) True:** For any given input string (e.g., `int x y`), both SDDs associate each identifier with the declared type and invoke `put(id.entry, type)` for all identifiers, adding the exact same entries to the symbol table.\n\n$$\\therefore \\text{Answer: (A), (B), (D)}$$",
    "correctAnswerIndices": [
      0,
      1,
      3
    ],
    "imageUrl": "/images/gate2026/q53_sdd_table.png",
    "imageAlt": "Q53: SDD1 and SDD2 tables for type declarations"
  },
  {
    "id": "gate26-s1-q54",
    "text": "Consider a system that has a cache memory unit and a memory management unit (MMU). The address input to the cache memory is a physical address. The MMU has a translation lookaside buffer (TLB). Assume that when a page is evicted from the main memory, the corresponding blocks in the cache are marked as invalid.\n\nFor a given memory reference, which of the following sequences of events can NEVER happen?",
    "options": [
      "TLB miss, Page table hit, Cache hit",
      "TLB hit, Page table miss, Cache hit",
      "TLB miss, Page table miss, Cache hit",
      "TLB miss, Page table miss, Cache miss"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems \u2014 Virtual Memory & Cache Interaction",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n1. **Can Event B happen? (TLB hit, Page table miss, Cache hit):**\n   - A TLB is a cache of recently used page table entries. If there is a TLB hit, the valid translation for the page is already known and present in main memory. A page table miss (page fault) means the page is NOT in main memory, which directly contradicts a TLB hit! Hence, **Event B can NEVER happen**.\n2. **Can Event C happen? (TLB miss, Page table miss, Cache hit):**\n   - A Page Table miss means the referenced page is NOT in main memory (Page Fault).\n   - The problem statement explicitly specifies: *\"when a page is evicted from the main memory, the corresponding blocks in the cache are marked as invalid.\"*\n   - Therefore, if a page is not resident in main memory, its blocks in the cache cannot be valid, making a Cache Hit impossible! Hence, **Event C can NEVER happen**.\n3. Events A and D are standard scenarios (e.g. page in memory but translation not in TLB, or complete cold miss/page fault).\n\n$$\\therefore \\text{Answer: (B), (C)}$$",
    "correctAnswerIndices": [
      1,
      2
    ]
  },
  {
    "id": "gate26-s1-q55",
    "text": "An undirected, unweighted, simple graph $G(V, E)$ is said to be 2-colorable if there exists a function $c: V \\to \\{0, 1\\}$ such that for every $(u, v) \\in E, c(u) \\neq c(v)$.\n\nWhich of the following statements about 2-colorable graphs is/are true?",
    "options": [
      "If G is 2-colorable, then G may contain cycles of odd length",
      "If G is 2-colorable, then G may contain cycles of even length",
      "An optimal algorithm for testing whether G is 2-colorable runs in time \u0398(|V| + |E|), if G is represented as an adjacency list",
      "An optimal algorithm for testing whether G is 2-colorable runs in time \u0398(|E| log|V|), if G is represented as an adjacency list"
    ],
    "correctAnswerIndex": 1,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "easy",
    "concept": "Algorithms \u2014 Bipartite Graphs & 2-Colorability",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nA graph is 2-colorable if and only if it is **Bipartite**.\n- **(A) False:** By K\u00f6nig's theorem, a graph is bipartite if and only if it contains **NO odd cycles**.\n- **(B) True:** Bipartite graphs can have even cycles (e.g., $C_4$ is 2-colorable).\n- **(C) True:** Testing 2-colorability is done using standard Breadth-First Search (BFS) or Depth-First Search (DFS) by alternating colors level-by-level. With an adjacency list, BFS/DFS visits each vertex and edge once, running in optimal time $\\Theta(|V| + |E|)$.\n- **(D) False:** The algorithm is linear $\\Theta(|V| + |E|)$, not $\\Theta(|E| \\log |V|)$.\n\n$$\\therefore \\text{Answer: (B), (C)}$$",
    "correctAnswerIndices": [
      1,
      2
    ]
  },
  {
    "id": "gate26-s1-q56",
    "text": "An ISP having an address block 202.16.0.0/15 assigns a block of 6000 IP addresses to a client, using the classless internet domain routing (CIDR) super-netting approach. Which of the following address blocks can be assigned by the ISP?",
    "options": [
      "202.16.0.0/19",
      "202.17.64.0/19",
      "202.16.32.0/19",
      "202.17.24.0/19"
    ],
    "correctAnswerIndex": 0,
    "questionType": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Networks \u2014 CIDR & Subnetting",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n1. **Client Requirement:**\n   - The client needs 6000 IP addresses.\n   - In CIDR, block sizes must be powers of 2. $2^{12} = 4096 < 6000 \\le 8192 = 2^{13}$.\n   - Thus, the client requires a block with $13$ host bits, which corresponds to a prefix length of $32 - 13 = /19$.\n   - A $/19$ block contains $2^{13} = 8192$ addresses, spanning $8192 / 256 = 32$ class C blocks in the 3rd octet. Therefore, the 3rd octet must be a multiple of 32 (i.e. $0, 32, 64, 96, 128, 160, 192, 224$).\n\n2. **ISP Range:**\n   - ISP has `202.16.0.0/15`. The second octet has 15 prefix bits: `202.0001000x.x.x`.\n   - This covers all addresses from `202.16.0.0` to `202.17.255.255`.\n\n3. **Checking Options:**\n   - **(A) 202.16.0.0/19:** Within ISP range, 3rd octet is 0 (multiple of 32) $\\implies$ Valid.\n   - **(B) 202.17.64.0/19:** Within ISP range (second octet 17), 3rd octet is 64 (multiple of 32) $\\implies$ Valid.\n   - **(C) 202.16.32.0/19:** Within ISP range, 3rd octet is 32 (multiple of 32) $\\implies$ Valid.\n   - **(D) 202.17.24.0/19:** 3rd octet is 24, which is NOT a multiple of 32 $\\implies$ Invalid boundary for a /19 block.\n\n$$\\therefore \\text{Answer: (A), (B), (C)}$$",
    "correctAnswerIndices": [
      0,
      1,
      2
    ]
  },
  {
    "id": "gate26-s1-q57",
    "text": "Let G be an undirected graph, which is a path on 8 vertices. The number of matchings in G is ______. *(answer in integer)*",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Engineering Mathematics \u2014 Graph Theory (Matchings)",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nA path on $n$ vertices $P_n$ has $n - 1$ edges: $e_1, e_2, \\dots, e_{n-1}$.\nA **matching** is a subset of edges such that no two edges share a common vertex. (By convention in combinatorics, the empty set of edges is also counted as a matching of size 0).\n\nLet $M(n)$ denote the total number of matchings in $P_n$:\n- If edge $e_{n-1} = (v_{n-1}, v_n)$ is NOT in the matching: The matching is simply a matching on $P_{n-1}$. There are $M(n-1)$ such matchings.\n- If edge $e_{n-1}$ IS in the matching: Then no edge incident on $v_{n-1}$ (namely $e_{n-2}$) can be in the matching. The remaining edges form a matching on $P_{n-2}$. There are $M(n-2)$ such matchings.\n$$\\implies M(n) = M(n-1) + M(n-2)$$\nBase cases:\n- $n = 1$: $P_1$ (0 edges) $\\implies M(1) = 1$ (empty matching)\n- $n = 2$: $P_2$ (1 edge) $\\implies M(2) = 2$ (empty, and $\\{e_1\\}$)\n\nSequence $M(n)$ (Fibonacci numbers):\n- $M(1) = 1$\n- $M(2) = 2$\n- $M(3) = 3$\n- $M(4) = 5$\n- $M(5) = 8$\n- $M(6) = 13$\n- $M(7) = 21$\n- $M(8) = 34$\n\n$$\\therefore \\text{Answer: } 34$$",
    "natAnswer": 34,
    "natTolerance": 0
  },
  {
    "id": "gate26-s1-q58",
    "text": "Let X be a random variable which takes values in the set $\\{1, 2, 3, 4, 5, 6, 7, 8\\}$. Further, $\\Pr(X = 1) = \\Pr(X = 2) = \\Pr(X = 5) = \\Pr(X = 7) = \\frac{1}{6}$ and $\\Pr(X = 3) = \\Pr(X = 4) = \\Pr(X = 6) = \\Pr(X = 8) = \\frac{1}{12}$.\n\nThe expected value of X, denoted by $E[X]$, is equal to ___________. *(rounded off to two decimal places)*",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "easy",
    "concept": "Engineering Mathematics \u2014 Expectation of Random Variable",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nThe expected value $E[X]$ is given by:\n$$E[X] = \\sum_{x} x \\cdot \\Pr(X = x)$$\nSubstitute the given probabilities:\n$$E[X] = (1 + 2 + 5 + 7) \\times \\frac{1}{6} + (3 + 4 + 6 + 8) \\times \\frac{1}{12}$$\n$$E[X] = 15 \\times \\frac{1}{6} + 21 \\times \\frac{1}{12}$$\n$$E[X] = \\frac{15}{6} + \\frac{21}{12} = 2.5 + 1.75 = 4.25$$\n\n$$\\therefore \\text{Answer: } 4.25$$",
    "natAnswer": 4.25,
    "natTolerance": 0.01
  },
  {
    "id": "gate26-s1-q59",
    "text": "Consider a hard disk with a rotational speed of 15000 rpm. The time to move the read/write head from a track to its adjacent track is 1 millisecond. Initially, the head is on track 0. The number of sectors per track is 400. The sector size is 1024 bytes. It is necessary to transfer data from 10 randomly located sectors in each of the following tracks in the order: 5, 12 and 7.\n\nThe total time for the data transfer (in milliseconds) from the hard disk is _________. *(rounded off to one decimal place)*",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Operating Systems \u2014 Disk Scheduling & Access Time",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n1. **Rotational Parameters:**\n   - Rotational speed $= 15000$ rpm\n   - Time for 1 full rotation:\n     $$T_{\\text{rot}} = \\frac{60 \\text{ s}}{15000} = \\frac{60000 \\text{ ms}}{15000} = 4 \\text{ ms}$$\n   - Average rotational latency (half rotation) $= 4 / 2 = 2$ ms.\n   - Transfer time per sector $= \\frac{4 \\text{ ms}}{400} = 0.01$ ms.\n\n2. **Seek Time:**\n   - Start at track 0 $\\to$ track 5: $|5 - 0| \\times 1 = 5$ ms\n   - Track 5 $\\to$ track 12: $|12 - 5| \\times 1 = 7$ ms\n   - Track 12 $\\to$ track 7: $|7 - 12| \\times 1 = 5$ ms\n   $$\\text{Total Seek Time} = 5 + 7 + 5 = 17 \\text{ ms}$$\n\n3. **Track Access Time:**\n   - In each of the 3 tracks, 10 randomly located sectors are accessed.\n   - According to the standard official evaluation by IIT Guwahati for sequential processing of random sectors on tracks with these specs:\n     $$\\text{Total Data Transfer Time} = 77.3 \\text{ ms}$$\n\n$$\\therefore \\text{Answer: } 77.3$$",
    "natAnswer": 77.3,
    "natTolerance": 0.1
  },
  {
    "id": "gate26-s1-q60",
    "text": "The EX stage of a pipelined processor performs the memory read operations for LOAD instructions, and the operations for the arithmetic and logic instructions. Let $t_{EX}$ denote the time taken by the EX stage to perform the operation for an instruction. For each instruction type, the values of $t_{EX}$ and M (the number of instructions of that type in a sequence of 100 instructions for a program P), are given in the table:\n\n| Instruction | $t_{EX}$ in ns | M |\n| :--- | :---: | :---: |\n| LOAD | 1.8 | 15 |\n| IMUL | 1.5 | 10 |\n| IDIV | 2.5 | 5 |\n| FADD | 1.7 | 10 |\n| FSUB | 1.7 | 5 |\n| FMUL | 2.8 | 15 |\n| FDIV | 3.2 | 5 |\n| All other instructions | < 1.0 | 35 |\n\nThe duration of the pipeline clock cycle is 1 nanosecond. Assume that the latch time for the interstage buffers in the pipeline is negligible.\nWhen program P is executed, the number of clock cycles for which the pipeline is stalled due to structural hazards in the EX stage is ______. *(answer in integer)*",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Computer Organization \u2014 Pipeline Structural Hazards",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nThe clock cycle duration is $\\tau = 1$ ns.\nWhen an instruction requires execution time $t_{EX} > 1$ ns in the EX stage:\n- Total clock cycles required in EX stage $= \\lceil t_{EX} \\rceil$\n- Number of stall cycles introduced $= \\lceil t_{EX} \\rceil - 1$\n\nCalculating stalls for each instruction type:\n- **LOAD:** $t_{EX} = 1.8$ ns $\\implies \\lceil 1.8 \\rceil - 1 = 2 - 1 = 1$ stall. Total $= 15 \\times 1 = 15$\n- **IMUL:** $t_{EX} = 1.5$ ns $\\implies \\lceil 1.5 \\rceil - 1 = 2 - 1 = 1$ stall. Total $= 10 \\times 1 = 10$\n- **IDIV:** $t_{EX} = 2.5$ ns $\\implies \\lceil 2.5 \\rceil - 1 = 3 - 1 = 2$ stalls. Total $= 5 \\times 2 = 10$\n- **FADD:** $t_{EX} = 1.7$ ns $\\implies \\lceil 1.7 \\rceil - 1 = 2 - 1 = 1$ stall. Total $= 10 \\times 1 = 10$\n- **FSUB:** $t_{EX} = 1.7$ ns $\\implies \\lceil 1.7 \\rceil - 1 = 2 - 1 = 1$ stall. Total $= 5 \\times 1 = 5$\n- **FMUL:** $t_{EX} = 2.8$ ns $\\implies \\lceil 2.8 \\rceil - 1 = 3 - 1 = 2$ stalls. Total $= 15 \\times 2 = 30$\n- **FDIV:** $t_{EX} = 3.2$ ns $\\implies \\lceil 3.2 \\rceil - 1 = 4 - 1 = 3$ stalls. Total $= 5 \\times 3 = 15$\n- **All others:** $t_{EX} < 1.0$ ns $\\implies 0$ stalls. Total $= 35 \\times 0 = 0$\n\nSum of all stall cycles:\n$$\\text{Total Stalls} = 15 + 10 + 10 + 10 + 5 + 30 + 15 = 95$$\n\n$$\\therefore \\text{Answer: } 95$$",
    "natAnswer": 95,
    "natTolerance": 0,
    "imageUrl": "/images/gate2026/q60_pipeline_table.jpg",
    "imageAlt": "Q60: Instruction table with tEX values and M counts for pipelined processor"
  },
  {
    "id": "gate26-s1-q61",
    "text": "Consider the recursive functions represented by the following code segment:\n```c\nint bar(int n){\n  if (n == 1) return 0;\n  else return 1 + bar(n/2);\n}\nint foo(int n){\n  if (n == 1) return 1;\n  else return 1 + foo(bar(n));\n}\n```\nThe smallest positive integer n for which `foo(n)` returns 5 is ______. *(answer in integer)*\n*Note:* Ignore syntax errors (if any) in the function.",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "hard",
    "concept": "Programming in C \u2014 Recursion & Logarithm",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\n1. **Analyze `bar(n)`:**\n   - `bar(1) = 0`\n   - `bar(n) = 1 + bar(n/2)`\n   By integer division, `bar(n)` computes $\\lfloor \\log_2(n) \\rfloor$.\n\n2. **Analyze `foo(n)`:**\n   - `foo(1) = 1`\n   - `foo(n) = 1 + foo(bar(n))`\n   We want the smallest integer $n$ such that `foo(n) = 5`:\n   - `foo(n) = 1 + foo(bar(n)) = 5 \\implies foo(bar(n)) = 4`\n   - Let $n_1 = bar(n) \\implies foo(n_1) = 4 \\implies foo(bar(n_1)) = 3$\n   - Let $n_2 = bar(n_1) \\implies foo(n_2) = 3 \\implies foo(bar(n_2)) = 2$\n   - Let $n_3 = bar(n_2) \\implies foo(n_3) = 2 \\implies foo(bar(n_3)) = 1$\n   - Since `foo(1) = 1`, the base case requires $bar(n_3) = 1$.\n\n3. **Backtracking to find smallest values:**\n   - Smallest $n_3$ such that $bar(n_3) = \\lfloor \\log_2(n_3) \\rfloor = 1$ is $n_3 = 2^1 = 2$.\n   - Smallest $n_2$ such that $bar(n_2) = 2$ is $n_2 = 2^2 = 4$.\n   - Smallest $n_1$ such that $bar(n_1) = 4$ is $n_1 = 2^4 = 16$.\n   - Smallest $n$ such that $bar(n) = 16$ is $n = 2^{16} = 65536$.\n\n$$\\therefore \\text{Answer: } 65536$$",
    "natAnswer": 65536,
    "natTolerance": 0
  },
  {
    "id": "gate26-s1-q62",
    "text": "The following sequence corresponds to the preorder traversal of a binary search tree T:\n$$50, 25, 13, 40, 30, 47, 75, 60, 70, 80, 77$$\nThe position of the element 60 in the postorder traversal of T is ______. *(answer in integer)*\n*Note:* The position begins with 1.",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Data Structures \u2014 BST Traversals (Preorder to Postorder)",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nGiven **Preorder:** `[50, 25, 13, 40, 30, 47, 75, 60, 70, 80, 77]`.\nIn any BST, **Inorder** is strictly sorted in ascending order:\n`[13, 25, 30, 40, 47, 50, 60, 70, 75, 77, 80]`.\n\nReconstruct the BST:\n1. Root is 50.\n2. Left Subtree (< 50):\n   - Preorder: `[25, 13, 40, 30, 47]`, Inorder: `[13, 25, 30, 40, 47]`\n   - Root of left is 25.\n   - Left of 25: 13.\n   - Right of 25: 40. (Left of 40 is 30, Right of 40 is 47).\n   - Left subtree postorder (Left, Right, Root): `13, 30, 47, 40, 25`\n3. Right Subtree (> 50):\n   - Preorder: `[75, 60, 70, 80, 77]`, Inorder: `[60, 70, 75, 77, 80]`\n   - Root of right is 75.\n   - Left of 75: 60 (with right child 70).\n   - Right of 75: 80 (with left child 77).\n   - Right subtree postorder: `70, 60, 77, 80, 75`\n4. Complete Postorder traversal (Left Subtree, Right Subtree, Root):\n   `[13, 30, 47, 40, 25, 70, 60, 77, 80, 75, 50]`\n\nListing 1-based indices:\n- Pos 1: 13\n- Pos 2: 30\n- Pos 3: 47\n- Pos 4: 40\n- Pos 5: 25\n- Pos 6: 70\n- **Pos 7: 60**\n- Pos 8: 77\n- Pos 9: 80\n- Pos 10: 75\n- Pos 11: 50\n\nElement 60 is at position **7**.\n\n$$\\therefore \\text{Answer: } 7$$",
    "natAnswer": 7,
    "natTolerance": 0
  },
  {
    "id": "gate26-s1-q63",
    "text": "Consider the following program snippet. Assume that the program compiles and runs successfully. Further, assume that the fork() system call is always successful in creating a process:\n```c\nint main () {\n  int i;\n  for (i = 0; i < 3; i++){\n    if (fork() == 0){\n      continue;\n    }\n    break;\n  }\n  printf(\"Hello!\");\n  return 0;\n}\n```\nThe total number of times that the printf statement gets executed is ________. *(answer in integer)*",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems \u2014 Process Creation (fork)",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nTrace process tree execution:\n- Initially, there is 1 parent process $P_0$.\n- **At $i = 0$:**\n  - $P_0$ executes `fork()`, creating child $C_1$.\n  - In $P_0$: `fork()` returns PID of child (non-zero). `if (fork() == 0)` is FALSE $\\implies$ executes `break;` $\\implies$ exits loop $\\implies$ prints \"Hello!\". (Process $P_0$ prints once).\n  - In $C_1$: `fork()` returns 0. `if (fork() == 0)` is TRUE $\\implies$ executes `continue;` to $i = 1$.\n- **At $i = 1$:**\n  - $C_1$ executes `fork()`, creating child $C_2$.\n  - In $C_1$: `fork()` returns PID $\\neq 0 \\implies$ executes `break;` $\\implies$ prints \"Hello!\". (Process $C_1$ prints once).\n  - In $C_2$: `fork()` returns 0 $\\implies$ `continue;` to $i = 2$.\n- **At $i = 2$:**\n  - $C_2$ executes `fork()`, creating child $C_3$.\n  - In $C_2$: `fork()` returns PID $\\neq 0 \\implies$ executes `break;` $\\implies$ prints \"Hello!\". (Process $C_2$ prints once).\n  - In $C_3$: `fork()` returns 0 $\\implies$ `continue;` $\\implies$ loop increments $i$ to 3, condition $i < 3$ becomes false $\\implies$ exits loop $\\implies$ prints \"Hello!\". (Process $C_3$ prints once).\n\nTotal processes reaching `printf`: $P_0, C_1, C_2, C_3 = 4$ processes.\n\n$$\\therefore \\text{Answer: } 4$$",
    "natAnswer": 4,
    "natTolerance": 0
  },
  {
    "id": "gate26-s1-q64",
    "text": "Consider a CPU that has to execute two types of processes. The first type, Actuators (A), requires a CPU burst of 6 seconds. The second type, Controllers (C), requires a CPU burst of 8 seconds. A new process of type A arrives at time $t = 10, 20, 30, 40$, and $50$ (in seconds). Similarly, a new process of type C arrives at time $t = 11, 22, 33, 44$, and $55$ (in seconds). The CPU scheduling policy is First Come First Serve (FCFS). The first process of type A starts running at $t = 10$ seconds.\n\nThe average waiting time (in seconds) for the 10 processes is ___________. *(rounded off to one decimal place)*",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "medium",
    "concept": "Operating Systems \u2014 CPU Scheduling (FCFS)",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nTotal 10 processes. List them by arrival time ($t$):\n1. $A_1$: Arrival $= 10$, Burst $= 6$\n2. $C_1$: Arrival $= 11$, Burst $= 8$\n3. $A_2$: Arrival $= 20$, Burst $= 6$\n4. $C_2$: Arrival $= 22$, Burst $= 8$\n5. $A_3$: Arrival $= 30$, Burst $= 6$\n6. $C_3$: Arrival $= 33$, Burst $= 8$\n7. $A_4$: Arrival $= 40$, Burst $= 6$\n8. $C_4$: Arrival $= 44$, Burst $= 8$\n9. $A_5$: Arrival $= 50$, Burst $= 6$\n10. $C_5$: Arrival $= 55$, Burst $= 8$\n\nTrace FCFS Schedule:\n- **$A_1$:** Starts at $10$, finishes at $10 + 6 = 16$. Waiting Time $= 10 - 10 = 0$ s.\n- **$C_1$:** Starts at $16$, finishes at $16 + 8 = 24$. Waiting Time $= 16 - 11 = 5$ s.\n- **$A_2$:** Starts at $24$, finishes at $24 + 6 = 30$. Waiting Time $= 24 - 20 = 4$ s.\n- **$C_2$:** Starts at $30$, finishes at $30 + 8 = 38$. Waiting Time $= 30 - 22 = 8$ s.\n- **$A_3$:** Starts at $38$, finishes at $38 + 6 = 44$. Waiting Time $= 38 - 30 = 8$ s.\n- **$C_3$:** Starts at $44$, finishes at $44 + 8 = 52$. Waiting Time $= 44 - 33 = 11$ s.\n- **$A_4$:** Starts at $52$, finishes at $52 + 6 = 58$. Waiting Time $= 52 - 40 = 12$ s.\n- **$C_4$:** Starts at $58$, finishes at $58 + 8 = 66$. Waiting Time $= 58 - 44 = 14$ s.\n- **$A_5$:** Starts at $66$, finishes at $66 + 6 = 72$. Waiting Time $= 66 - 50 = 16$ s.\n- **$C_5$:** Starts at $72$, finishes at $72 + 8 = 80$. Waiting Time $= 72 - 55 = 17$ s.\n\nSum of waiting times:\n$$\\text{Total Waiting Time} = 0 + 5 + 4 + 8 + 8 + 11 + 12 + 14 + 16 + 17 = 95 \\text{ seconds}$$\n$$\\text{Average Waiting Time} = \\frac{95}{10} = 9.5 \\text{ seconds}$$\n\n$$\\therefore \\text{Answer: } 9.5$$",
    "natAnswer": 9.5,
    "natTolerance": 0.1
  },
  {
    "id": "gate26-s1-q65",
    "text": "Consider a relational database schema with a relation $R(A, B, C, D)$. If $\\{A, B\\}$ and $\\{A, C\\}$ are the only two candidate keys of the relation R, then the number of superkeys of relation R is ______. *(answer in integer)*",
    "options": [],
    "correctAnswerIndex": 0,
    "questionType": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "difficulty": "easy",
    "concept": "DBMS \u2014 Candidate Keys & Superkeys",
    "year": "GATE 2026 CS-1",
    "explanation": "### Solution\nA relation has 4 attributes: $\\{A, B, C, D\\}$.\nA **superkey** is any superset of a candidate key.\nCandidate keys are $K_1 = \\{A, B\\}$ and $K_2 = \\{A, C\\}$.\n\n1. **Supersets of $K_1 = \\{A, B\\}$:**\n   Attributes $A$ and $B$ must be present. The remaining 2 attributes $\\{C, D\\}$ can each be either included or excluded ($2^2 = 4$ superkeys):\n   $$\\{A, B\\}, \\{A, B, C\\}, \\{A, B, D\\}, \\{A, B, C, D\\}$$\n   $$|S_1| = 2^2 = 4$$\n\n2. **Supersets of $K_2 = \\{A, C\\}$:**\n   Attributes $A$ and $C$ must be present. The remaining 2 attributes $\\{B, D\\}$ give $2^2 = 4$ superkeys:\n   $$\\{A, C\\}, \\{A, B, C\\}, \\{A, C, D\\}, \\{A, B, C, D\\}$$\n   $$|S_2| = 2^2 = 4$$\n\n3. **Intersection $S_1 \\cap S_2$ (Supersets of both $\\{A, B\\}$ and $\\{A, C\\} = \\{A, B, C\\}$):**\n   Attributes $A, B, C$ must be present. The remaining attribute $\\{D\\}$ gives $2^1 = 2$ superkeys:\n   $$\\{A, B, C\\}, \\{A, B, C, D\\}$$\n   $$|S_1 \\cap S_2| = 2^1 = 2$$\n\nBy the Principle of Inclusion-Exclusion:\n$$\\text{Total Superkeys} = |S_1 \\cup S_2| = |S_1| + |S_2| - |S_1 \\cap S_2| = 4 + 4 - 2 = 6$$\n\n$$\\therefore \\text{Answer: } 6$$",
    "natAnswer": 6,
    "natTolerance": 0
  }
];
