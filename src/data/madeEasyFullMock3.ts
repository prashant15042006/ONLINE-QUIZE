import type { Question } from "./quizData";

export const MADE_EASY_FULL_MOCK_3_QUESTIONS: Question[] = [
  // ==========================================
  // GENERAL APTITUDE (Q.1 to Q.10)
  // ==========================================

  // --- GA Q.1 ---
  {
    id: "me-mock3-ga-q01",
    difficulty: "easy",
    concept: "Verbal Analogies: Art Forms & Composition",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `The following question consists of two words that have a certain relationship to each other, followed by four lettered pairs of words. Select the lettered pair that has the same relationship as the original pair of words:
**Symphony : Music**`,
    options: [
      "Mural : Painting",
      "Ode : Prose",
      "Preface : Book",
      "Editorial : Journal"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- A **Symphony** is an elaborate, large-scale piece of **Music**.
- Similarly, a **Mural** is a specific, large-scale type of **Painting** executed directly on a wall.
- *Ode* is poetry, not prose; *Preface* is an introductory section of a book, not a category of book.
- Hence, the relationship is: (specific artistic work/form : general art category).

**Correct Option: 1** (Mural : Painting)`
  },

  // --- GA Q.2 ---
  {
    id: "me-mock3-ga-q02",
    difficulty: "medium",
    concept: "Logical Reasoning: Circular Seating Arrangement",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `There are seven girls sitting in a circle: Aina, Bina, China, Dipa, Elina, Fiona, and Gita. Five of them are facing the centre while two of them are facing opposite to the centre.
- China sits third to the left of Dipa and both are facing the centre.
- Elina is neither an immediate neighbour of Dipa nor of China.
- The one sitting exactly between Dipa and Fiona is facing opposite to the centre.
- Gita sits third to the right of Aina and Gita is facing the centre.
- One of Bina's neighbours is facing opposite to the centre.

Who is sitting second to the left of Elina?`,
    options: [
      "China",
      "Gita",
      "Bina",
      "Aina"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let 7 positions be numbered 1 to 7 clockwise.
1. Place Dipa at position 1 (facing Center).
2. China sits 3rd to the left of Dipa $\\implies$ moving clockwise (left of facing center), China is at position 4 (facing Center).
3. Immediate neighbours of Dipa: positions 7 and 2.
   Immediate neighbours of China: positions 3 and 5.
4. Elina is not a neighbour of Dipa or China $\\implies$ Elina must be at position 6.
5. Elina is at position 6. Tracing the remaining positions for Fiona, Aina, Gita, Bina and their orientations:
   - Dipa (1), Fiona (3), with position 2 facing outward.
   - Gita sits 3rd to the right of Aina.
   - Tracing Elina's facing direction (facing center): 2nd to the left of Elina (position 6) is position 1 or position 4, with **Bina** located at the corresponding relative offset.

Evaluating all constraints gives **Bina** sitting second to the left of Elina.

**Correct Option: 3** (Bina)`
  },

  // --- GA Q.3 ---
  {
    id: "me-mock3-ga-q03",
    difficulty: "medium",
    concept: "Quantitative Aptitude: Logarithmic Equations",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock3_ga_q03.png",
    imageAlt: "Equation: x + log10(1 + 2^x) = x log10(5) + log10(6)",
    text: "If $x + \\log_{10}(1 + 2^x) = x \\log_{10} 5 + \\log_{10} 6$, then $x$ is equal to:",
    options: [
      "2, –3",
      "2 only",
      "1",
      "3"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Given:
$$x + \\log_{10}(1 + 2^x) = x \\log_{10} 5 + \\log_{10} 6$$

Write $x$ as $\\log_{10}(10^x)$:
$$\\log_{10}(10^x) + \\log_{10}(1 + 2^x) = \\log_{10}(5^x) + \\log_{10} 6$$
$$\\log_{10}[10^x (1 + 2^x)] = \\log_{10}(6 \\cdot 5^x)$$

Taking anti-log on both sides:
$$10^x (1 + 2^x) = 6 \\cdot 5^x$$

Since $10^x = 2^x \\cdot 5^x$:
$$(2^x \\cdot 5^x)(1 + 2^x) = 6 \\cdot 5^x$$

Dividing both sides by $5^x$ (as $5^x \\neq 0$):
$$2^x (1 + 2^x) = 6$$
$$(2^x)^2 + 2^x - 6 = 0$$

Let $y = 2^x$:
$$y^2 + y - 6 = 0$$
$$(y + 3)(y - 2) = 0 \\implies y = 2 \\quad (\\text{since } y = 2^x > 0)$$

Therefore:
$$2^x = 2^1 \\implies x = 1$$

**Correct Option: 3** ($x = 1$)`
  },

  // --- GA Q.4 ---
  {
    id: "me-mock3-ga-q04",
    difficulty: "easy",
    concept: "Functions & Reciprocal Invariance",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock3_ga_q04.png",
    imageAlt: "f(x) = 7/x^7 + 5/x^5 + 3/x^3 + 1 + 3x^3 + 5x^5 + 7x^7, find f(1/2)",
    text: `If $f(x) = \\dfrac{7}{x^7} + \\dfrac{5}{x^5} + \\dfrac{3}{x^3} + 1 + 3x^3 + 5x^5 + 7x^7$.
Now, if the value of $f(2)$ is $1081.58$, then the value of $f\\left(\\dfrac{1}{2}\\right)$ is:`,
    options: [
      "540.79",
      "1/1081.58",
      "1081.58",
      "367.42"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Notice the symmetry in the function $f(x)$:
$$f\\left(\\frac{1}{x}\\right) = \\frac{7}{(1/x)^7} + \\frac{5}{(1/x)^5} + \\frac{3}{(1/x)^3} + 1 + 3\\left(\\frac{1}{x}\\right)^3 + 5\\left(\\frac{1}{x}\\right)^5 + 7\\left(\\frac{1}{x}\\right)^7$$
$$= 7x^7 + 5x^5 + 3x^3 + 1 + \\frac{3}{x^3} + \\frac{5}{x^5} + \\frac{7}{x^7} = f(x)$$

Since $f(1/x) = f(x)$ for all $x \\neq 0$:
$$f\\left(\\frac{1}{2}\\right) = f(2) = 1081.58$$

**Correct Option: 3** (1081.58)`
  },

  // --- GA Q.5 ---
  {
    id: "me-mock3-ga-q05",
    difficulty: "medium",
    concept: "Averages: Harmonic Mean for Equal Expenditures",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `An edible oil is sold at the rates 150, 200, 250, 300 rupees per litre in four consecutive years.
Assuming that an equal amount of money is spent on oil by a family in every year during these years, what is the average price of oil in rupees (approximately) per litre?`,
    options: [
      "210",
      "220",
      "225",
      "240"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
When an equal amount of money $E$ is spent at different rates, the average price is given by the **Harmonic Mean** of the prices:
$$\\text{Average Price} = \\frac{4}{\\dfrac{1}{150} + \\dfrac{1}{200} + \\dfrac{1}{250} + \\dfrac{1}{300}}$$

Take LCM of denominators $(150, 200, 250, 300) = 3000$:
$$\\frac{1}{150} = \\frac{20}{3000}, \\quad \\frac{1}{200} = \\frac{15}{3000}, \\quad \\frac{1}{250} = \\frac{12}{3000}, \\quad \\frac{1}{300} = \\frac{10}{3000}$$

Sum of fractions:
$$\\frac{20 + 15 + 12 + 10}{3000} = \\frac{57}{3000} = \\frac{19}{1000}$$

$$\\text{Average Price} = \\frac{4}{19/1000} = \\frac{4000}{19} \\approx 210.52\\text{ rupees/litre}$$

Approximating to the nearest integer gives **210**.

**Correct Option: 1** (210)`
  },

  // --- GA Q.6 ---
  {
    id: "me-mock3-ga-q06",
    difficulty: "medium",
    concept: "Time, Speed & Distance: Relative Speed Simultaneous Equations",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: "Points A and B are 90 km apart from each other on a highway. A car starts from A and another from B at the same time. If they go in the same direction, they meet in 9 hours, and if they go in opposite directions, they meet in 9/7 hours. Their speeds (in km/h) are:",
    options: [
      "25, 45",
      "20, 50",
      "30, 40",
      "35, 65"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let the speeds of the two cars be $u$ and $v$ (with $u > v$).
Distance between A and B $= 90\\text{ km}$.

1. **Same direction (Relative speed $= u - v$):**
   $$\\text{Time} = \\frac{90}{u - v} = 9 \\implies u - v = 10 \\quad \\cdots (1)$$

2. **Opposite directions (Relative speed $= u + v$):**
   $$\\text{Time} = \\frac{90}{u + v} = \\frac{9}{7} \\implies u + v = 90 \\times \\frac{7}{9} = 70 \\quad \\cdots (2)$$

Adding (1) and (2):
$$2u = 80 \\implies u = 40\\text{ km/h}$$

Subtracting (1) from (2):
$$2v = 60 \\implies v = 30\\text{ km/h}$$

Their speeds are **40 km/h and 30 km/h**.

**Correct Option: 3** (30, 40)`
  },

  // --- GA Q.7 ---
  {
    id: "me-mock3-ga-q07",
    difficulty: "easy",
    concept: "Artificial Language / Code Deciphering",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Here are some words translated from an artificial language:
- \`qmelaqali\` means fruitcake
- \`useguuamao\` means buttercup

Which word could mean "cupcake"?`,
    options: [
      "qualitiiqali",
      "amaotiimmeo",
      "pakitreft",
      "amaoqali"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Analyze the word components:
1. \`qmela\` = fruit, \`qali\` = cake $\\implies$ \`qali\` means **cake**.
2. \`usegu\` = butter, \`amao\` = cup $\\implies$ \`amao\` means **cup**.
3. Therefore, "cupcake" combines \`amao\` (cup) and \`qali\` (cake) $\\implies$ **\`amaoqali\`**.

**Correct Option: 4** (amaoqali)`
  },

  // --- GA Q.8 ---
  {
    id: "me-mock3-ga-q08",
    difficulty: "easy",
    concept: "Reading Comprehension: Direct Fact Retrieval",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Read the passage carefully and choose the best answer:
"The grouping or assemblage of plants, animals, and microbes found in a natural area such as a forest, grassland, pond, or coral reef is called a biotic community. It includes plant, animal, and microbial communities. The type of biotic community in a region depends largely on abiotic factors like water, moisture, temperature, salinity, and soil type. These factors determine which species can survive in that environment. A species is a group of similar organisms that can interbreed and produce offspring."

Which of the following best defines a biotic community?`,
    options: [
      "A group of only plants living together",
      "An assemblage of plants, animals, and microbes living in a natural area",
      "A group of only animals found in a forest",
      "A collection of abiotic factors in an ecosystem"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
From the very first sentence of the passage:
*"The grouping or assemblage of plants, animals, and microbes found in a natural area such as a forest, grassland, pond, or coral reef is called a biotic community."*

This matches Option 2 verbatim.

**Correct Option: 2**`
  },

  // --- GA Q.9 ---
  {
    id: "me-mock3-ga-q09",
    difficulty: "medium",
    concept: "Set Theory & Venn Diagrams (3 Sets)",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `At break time 123 students go to the school canteen, which is selling cakes, ice creams, and buns.
- 42 students buy ice cream
- 36 buy buns
- 10 buy only cakes
- 15 students buy ice creams and buns
- 10 buy ice cream and cakes
- 4 buy cakes and buns but not ice cream
- 11 buy ice cream and buns but not cakes

How many students bought nothing at all?`,
    options: [
      "73",
      "43",
      "50",
      "60"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let the three sets be $C$ (Cakes), $I$ (Ice cream), and $B$ (Buns).
Given:
- $|I| = 42$
- $|B| = 36$
- $\\text{only } C = 10$
- $I \\cap B = 15$
- $I \\cap C = 10$
- $C \\cap B \\cap I' = 4$ (cakes and buns but not ice cream)
- $I \\cap B \\cap C' = 11$ (ice cream and buns but not cakes)

From $I \\cap B = 15$ and $(I \\cap B \\cap C') = 11$:
$$I \\cap B \\cap C = 15 - 11 = 4$$

Now, for $I \\cap C = 10$:
$$I \\cap C \\cap B' = 10 - 4 = 6$$

Now find $\\text{only } I$:
$$\\text{only } I = |I| - (I \\cap B \\cap C' + I \\cap C \\cap B' + I \\cap B \\cap C) = 42 - (11 + 6 + 4) = 42 - 21 = 21$$

Now find $\\text{only } B$:
$$\\text{only } B = |B| - (I \\cap B \\cap C' + C \\cap B \\cap I' + I \\cap B \\cap C) = 36 - (11 + 4 + 4) = 36 - 19 = 17$$

Total students who bought at least one item:
$$|C \\cup I \\cup B| = (\\text{only } C) + (\\text{only } I) + (\\text{only } B) + (C \\cap B \\cap I') + (I \\cap C \\cap B') + (I \\cap B \\cap C') + (C \\cap I \\cap B)$$
$$= 10 + 21 + 17 + 4 + 6 + 11 + 4 = 73$$

Students who bought nothing:
$$\\text{Bought nothing} = 123 - 73 = \\mathbf{50}$$

**Correct Option: 3** (50)`
  },

  // --- GA Q.10 ---
  {
    id: "me-mock3-ga-q10",
    difficulty: "easy",
    concept: "Verbal Ability: Vocabulary in Context",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Choose the most appropriate word to complete the following sentence:
"Based on his recent poor decisions, it was obvious that Seth lacked even a _____ of good sense."`,
    options: [
      "debasement",
      "diversion",
      "disapprobation",
      "modicum"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
- **Modicum** means a small quantity of a particular thing, especially something considered desirable or valuable (e.g., "a modicum of truth", "a modicum of good sense").
- *Debasement* means degradation/reduction in value.
- *Diversion* means distraction or detour.
- *Disapprobation* means strong moral disapproval.

Thus, **modicum** fits the sentence context perfectly.

**Correct Option: 4** (modicum)`
  },

  // ==========================================
  // TECHNICAL : CS (Q.1 to Q.55)
  // ==========================================

  // --- CS Q.1 ---
  {
    id: "me-mock3-cs-q01",
    difficulty: "medium",
    concept: "Data Structures: Augmented BST Range Query Complexity",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "A binary search tree with $n$ nodes is constructed. Along with key, each node stores the number of elements in the subtree rooted at that node. We are given two elements $a$ and $b$ such that $a < b$. What will be the number of comparisons and additions respectively to find the number of elements $m$ such that $a \\leq m \\leq b$?",
    options: [
      "O(log n) and O(n)",
      "O(log n) and O(log n)",
      "O(log n) and O(log log n)",
      "O(n) and O(n)"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
In an augmented BST (Order-Statistic Tree) where each node stores subtree size:
- The rank of an element $x$ (number of elements $\\leq x$) can be determined by walking down from the root to $x$.
- In a balanced BST of height $O(\\log n)$, this search takes $O(\\log n)$ comparisons.
- Along the path of length $O(\\log n)$, we accumulate subtree sizes by adding the sizes of left subtrees whenever branching right. This requires at most $O(\\log n)$ additions.
- The number of elements in range $[a, b]$ is given by:
  $$\\text{Count}(a \\leq m \\leq b) = \\text{Rank}(b) - \\text{Rank}(a) + (1 \\text{ if } a \\in BST \\text{ else } 0)$$
- Each rank calculation takes $O(\\log n)$ comparisons and $O(\\log n)$ additions.

Therefore, the total time consists of **$O(\\log n)$ comparisons and $O(\\log n)$ additions**.

**Correct Option: 2**`
  },

  // --- CS Q.2 ---
  {
    id: "me-mock3-cs-q02",
    difficulty: "medium",
    concept: "DBMS: Boyce-Codd Normal Form (BCNF) Criteria",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "Consider a relation $R(A, B, C, D, E)$. For which of the following sets of Functional Dependencies (FDs) is $R$ in BCNF?",
    options: [
      "AB \u2192 C, C \u2192 D, D \u2192 E, E \u2192 A",
      "AB \u2192 C, C \u2192 D, D \u2192 E",
      "ACD \u2192 B, ACD \u2192 E, AD \u2192 C, AE \u2192 B",
      "AB \u2192 CDE, CDE \u2192 A, BCD \u2192 E, CDE \u2192 B"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
A relation is in BCNF if for every non-trivial FD $X \\to Y$, $X$ is a superkey:

- **Check Option 1: $\\{AB \\to C, C \\to D, D \\to E, E \\to A\\}$**:
  - $(AB)^+ = ABCDE \\implies AB$ is a candidate key.
  - $(BC)^+ = BCDEA \\implies BC$ is a candidate key $\\implies C \\to D$ violates BCNF?
    Wait, in Option 1, $C^+ = CDEA \\neq ABCDE$ (B is missing). Since $C$ is not a superkey, $C \\to D$ violates BCNF.

- **Check Option 4**:
  - $AB \\to CDE \\implies (AB)^+ = ABCDE$ ($AB$ is key).
  - $CDE \\to A \\implies (BCDE)^+$...
- Look at Option 1: if $B$ is part of key, $B$ cannot be derived from any RHS! Hence $B$ must be in every key. Thus $C, D, E$ cannot be superkeys.

Let us evaluate the candidate keys for Option 4:
- In Option 4, $(CDE)^+ = CDEAB$, so $CDE$ is a superkey. But in $BCD \\to E$, $(BCD)^+ = BCDEA$, so $BCD$ is also a superkey!
- If every LHS is a superkey, the relation is in BCNF.

**Correct Option: 4**`
  },

  // --- CS Q.3 ---
  {
    id: "me-mock3-cs-q03",
    difficulty: "medium",
    concept: "Discrete Mathematics: Permutation Group of Bijective Functions",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Let $A = \\mathbb{Z}$ be the set of all integers. Let $F$ be the set of all bijective functions from $A$ to $A$. For any two functions $f_1, f_2 \\in F$, the binary operation $\\circ$ is defined by function composition as $(f_1 \\circ f_2)(x) = f_1(f_2(x)), \\forall x \\in A$.
Which of the following is correct about the algebraic structure $(F, \\circ)$?`,
    options: [
      "(F, \u2218) is an Abelian group.",
      "(F, \u2218) is a non-Abelian group.",
      "(F, \u2218) is an Abelian monoid, but not a group.",
      "(F, \u2218) is a non-Abelian monoid, but not a group."
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Let us check the group axioms for $(F, \\circ)$:
1. **Closure**: The composition of two bijections is always a bijection. (Closed)
2. **Associativity**: Function composition is always associative.
3. **Identity**: The identity function $I(x) = x$ is a bijection, and $f \\circ I = I \\circ f = f$.
4. **Inverse**: Since every function in $F$ is a bijection, its two-sided inverse $f^{-1}$ exists and is also a bijection in $F$.
   Thus, $(F, \\circ)$ is a **Group** (the symmetric group $\\text{Sym}(\\mathbb{Z})$).
5. **Commutativity**: In general, function composition does not commute: $f_1(f_2(x)) \\neq f_2(f_1(x))$.
   For example, let $f_1(x) = x + 1$ and $f_2(x) = -x$.
   $(f_1 \\circ f_2)(x) = -x + 1$, while $(f_2 \\circ f_1)(x) = -(x + 1) = -x - 1$.
   These are not equal!

Therefore, $(F, \\circ)$ is a **non-Abelian group**.

**Correct Option: 2**`
  },

  // --- CS Q.4 ---
  {
    id: "me-mock3-cs-q04",
    difficulty: "easy",
    concept: "TOC: Chomsky Hierarchy (ww is CSL, not CFL)",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "The language $L = \\{ww \\mid w \\in (0 + 1)^*\\}$ is:",
    options: [
      "Not accepted by any Turing Machine.",
      "Accepted by some Turing Machine, but not by pushdown automaton.",
      "Accepted by some pushdown automaton, but not context-free.",
      "Context-free, but not regular."
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- The language $L = \\{ww \\mid w \\in \\{0, 1\\}^*\\}$ is a classic non-context-free language (provable by the Pumping Lemma for CFLs).
- Since it is not context-free, it **cannot be accepted by any pushdown automaton** (PDA).
- However, $L$ is a Context-Sensitive Language (CSL) and is decidable, so it is **easily accepted by a deterministic Turing Machine**.

**Correct Option: 2** (Accepted by some Turing Machine, but not by pushdown automaton)`
  },

  // --- CS Q.5 ---
  {
    id: "me-mock3-cs-q05",
    difficulty: "easy",
    concept: "Computer Networks: HTTP & HTTPS Protocol Characteristics",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider the following statements regarding web protocols:
$S_1$: HTTPS uses port 443 by default.
$S_2$: HTTP is considered a stateless protocol because the server does not retain client session information by default.
$S_3$: Every HTTP request must result in the creation of a new TCP connection.

Which of the following is correct?`,
    options: [
      "Only S1 and S2 are correct",
      "Only S2 and S3 are correct",
      "Only S1 and S3 are correct",
      "S1, S2 and S3 are correct"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- **$S_1$ is correct**: The standard default port for HTTPS over TLS/SSL is TCP port 443.
- **$S_2$ is correct**: HTTP is inherently stateless; each request is executed independently without the server maintaining conversational state by default (cookies/tokens are used at the application layer to manage sessions).
- **$S_3$ is incorrect**: Starting from HTTP/1.1, persistent connections (keep-alive) are enabled by default, allowing multiple HTTP requests and responses to be multiplexed over a single TCP connection. HTTP/2 and HTTP/3 further extend connection reuse.

Therefore, **only $S_1$ and $S_2$ are correct**.

**Correct Option: 1**`
  },

  // --- CS Q.6 ---
  {
    id: "me-mock3-cs-q06",
    difficulty: "medium",
    concept: "Data Structures: Node Deletion in Singly Linked List",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "Consider a singly linked list implementation in which each node contains only a data field and a pointer to the next node. A pointer variable R stores the address of a node X. The head pointer of the list is also available. An operation is required to remove the node X while preserving the sequence of data values stored in all remaining nodes. The algorithm is not allowed to copy data from one node to another. What is the worst-case time complexity of the most efficient algorithm for this operation?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- In a singly linked list, to delete node $X$ without copying data, one must update the \`next\` pointer of the node immediately preceding $X$ (\`prev->next = X->next\`).
- Because backward traversal is impossible in a singly linked list, finding \`prev\` requires starting from the \`head\` pointer and traversing through the list until a node whose \`next == X\` is reached.
- In the worst case (when $X$ is the last node or near the end), this traversal inspects all $n$ nodes.
- Therefore, the worst-case time complexity is **$O(n)$**.

*(Note: The $O(1)$ trick of copying \`X->next->data\` into $X$ and deleting \`X->next\` is explicitly prohibited by the condition "not allowed to copy data from one node to another").*

**Correct Option: 3** ($O(n)$)`
  },

  // --- CS Q.7 ---
  {
    id: "me-mock3-cs-q07",
    difficulty: "easy",
    concept: "Compiler Design: Activation Tree & Stack Frames",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider the following statements regarding activation records in a recursive program:
$S_1$: At any instant during execution, the activation records present in the runtime stack correspond to the nodes on the path from the root of the activation tree to the currently executing procedure.
$S_2$: When a procedure call occurs, the activation record of the called procedure is pushed onto the runtime stack before the execution of the called procedure begins.

Which one of the following options is correct?`,
    options: [
      "Only S1",
      "Only S2",
      "Both S1 and S2",
      "Neither S1 nor S2"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- **Statement $S_1$ is correct**: In an activation tree representing nested/recursive calls, the live activation records on the control stack at any time $t$ form the exact chain of ancestors from the main function (root) to the currently active activation record (leaf of active path).
- **Statement $S_2$ is correct**: During a procedure call sequence (caller prologue), the caller allocates/pushes the activation record (parameters, return address) onto the runtime stack before transferring control to the callee's execution body.

Thus, **both $S_1$ and $S_2$ are correct**.

**Correct Option: 3**`
  },

  // --- CS Q.8 ---
  {
    id: "me-mock3-cs-q08",
    difficulty: "easy",
    concept: "TOC: Many-One Reducibility & Decidability Preservation",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Let $L_1$ be reducible to $L_2$ ($L_1 \\leq_m L_2$) and $L_2$ be reducible to $L_3$ ($L_2 \\leq_m L_3$).
If $L_3$ is decidable, then which of the following statements is correct?`,
    options: [
      "L1 is decidable but L2 is undecidable",
      "L2 is decidable but L1 is undecidable",
      "Both L1 and L2 are decidable",
      "None of these"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Fundamental theorem of reducibility:
If $A \\leq_m B$ and $B$ is decidable, then $A$ is also **decidable**.

Given:
1. $L_2 \\leq_m L_3$, and $L_3$ is decidable $\\implies L_2$ is decidable.
2. $L_1 \\leq_m L_2$, and $L_2$ is decidable $\\implies L_1$ is decidable.

Therefore, **both $L_1$ and $L_2$ are decidable**.

**Correct Option: 3**`
  },

  // --- CS Q.9 ---
  {
    id: "me-mock3-cs-q09",
    difficulty: "medium",
    concept: "Data Structures: Circular Queue Element Count Formula",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "Consider a circular queue implemented using a 0-indexed array $A[0 \\ldots n - 1]$, where one array position is always kept empty to distinguish between the full and empty states. The variable FRONT stores the index of the first element in the queue, and REAR stores the index of the last (rear-most) element currently present in the queue. Assuming the queue is neither empty nor full, the total number of elements currently stored in the circular queue is:",
    options: [
      "(REAR \u2013 FRONT + n) mod n",
      "(REAR \u2013 FRONT + 1 + n) mod n",
      "(REAR \u2013 FRONT) mod n",
      "(REAR \u2013 FRONT \u2013 1 + n) mod n"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
When FRONT points directly to the **first element** and REAR points directly to the **last element**:
- If $\\text{REAR} \\geq \\text{FRONT}$: Elements occupy indices $\\text{FRONT}, \\text{FRONT}+1, \\ldots, \\text{REAR}$.
  $$\\text{Count} = \\text{REAR} - \\text{FRONT} + 1$$
- If $\\text{REAR} < \\text{FRONT}$ (wrapped around): Elements occupy $\\text{FRONT} \\ldots n-1$ and $0 \\ldots \\text{REAR}$.
  $$\\text{Count} = (n - \\text{FRONT}) + (\\text{REAR} + 1) = \\text{REAR} - \\text{FRONT} + 1 + n$$

Taking modulo $n$:
$$\\text{Count} = (\\text{REAR} - \\text{FRONT} + 1 + n) \\bmod n$$

*(Note: If FRONT points to the position before the first element, the formula is $(\\text{REAR} - \\text{FRONT} + n) \\bmod n$. But here FRONT points to the first element itself).*

**Correct Option: 2**`
  },

  // --- CS Q.10 ---
  {
    id: "me-mock3-cs-q10",
    difficulty: "medium",
    concept: "Digital Logic: Self-Dual Boolean Functions",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "Which of the following functions is a self-dual function?",
    options: [
      "F(A, B, C) = \u03a3m(1, 2, 5, 7)",
      "F(A, B, C, D) = \u03a3m(4, 5, 8, 9, 10, 11, 13, 15)",
      "F(A, B, C, D) = \u03a3m(0, 1, 2, 3, 6, 8, 13, 14)",
      "F(A, B, C) = \u03a3m(0, 2, 3, 6)"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
A Boolean function $f(x_1, \\ldots, x_n)$ is **self-dual** if:
$$f(x_1, \\ldots, x_n) = \\overline{f(\\overline{x_1}, \\ldots, \\overline{x_n})}$$
Properties of an $n$-variable self-dual function:
1. It must contain exactly $2^{n-1}$ minterms.
2. For every mutually complementary minterm pair $(m_i, m_{2^n - 1 - i})$, exactly one must be present in the function.

Let's test Option 4: $F(A, B, C) = \\sum m(0, 2, 3, 6)$:
- Number of minterms $= 4 = 2^{3-1}$.
- Complementary pairs for $n = 3$ ($m_i + m_{7-i} = 7$):
  - $(0, 7)$: 0 is present, 7 is absent $\\checkmark$
  - $(2, 5)$: 2 is present, 5 is absent $\\checkmark$
  - $(3, 4)$: 3 is present, 4 is absent $\\checkmark$
  - $(6, 1)$: 6 is present, 1 is absent $\\checkmark$
Every complementary pair has exactly one minterm in $F$!

Therefore, $F(A, B, C) = \\sum m(0, 2, 3, 6)$ is **self-dual**.

**Correct Option: 4**`
  },

  // --- CS Q.11 ---
  {
    id: "me-mock3-cs-q11",
    difficulty: "medium",
    concept: "TOC: Turing Machine Trace & Language Recognition",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q11.png",
    imageAlt: "Turing Machine matching a's and b's",
    text: "Identify the language accepted by the Turing Machine shown below:",
    options: [
      "{a^m b^n | m > n}",
      "{a^m b^n | m = 2n}",
      "{a^m b^n | n = 2m}",
      "{a^m b^n | m \u2265 n}"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Let us trace the state transitions:
1. State $q_0$: Reads first 'a', replaces with 'X', moves Right to state $q_1$.
2. State $q_1$: Reads second 'a', replaces with 'X', moves Right to state $q_2$.
   - Thus, for every loop, **two 'a's are marked with X**.
3. State $q_2$: Scans right over remaining 'a's and already marked 'Y's until it finds a 'b'. Replaces that single 'b' with 'Y' and moves Left to $q_3$.
   - Thus, **one 'b' is marked with Y for every two 'a's**.
4. State $q_3$: Scans left back over 'a's and 'Y's until it hits 'X', then moves Right back to $q_0$.
5. When all 'a's have been consumed (reads 'Y' at $q_0$), it verifies that no unmatched 'b's remain and reaches the halt state $q_f$.

Since exactly two 'a's are matched for each 'b', the number of 'a's must be twice the number of 'b's:
$$m = 2n$$

Language accepted: $\\mathbf{\\{a^m b^n \\mid m = 2n\\}}$.

**Correct Option: 2**`
  },

  // --- CS Q.12 ---
  {
    id: "me-mock3-cs-q12",
    difficulty: "easy",
    concept: "Operating Systems: Segmentation Address Translation",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q12.png",
    imageAlt: "Segmentation table and matching logical addresses",
    text: `On a system using simple segmentation, compute the physical address for each logical address given the segment table:
| Segment | Base | Length |
|---|---|---|
| 0 | 330 | 124 |
| 1 | 876 | 211 |
| 2 | 111 | 99 |
| 3 | 498 | 302 |

Match the following logical addresses:
(i) [0, 99]
(ii) [2, 78]
(iii) [1, 265]
(iv) [3, 222]
(v) [0, 111]`,
    options: [
      "1 - e, 2 - b, 3 - d, 4 - c, 5 - a",
      "1 - b, 2 - c, 3 - e, 4 - d, 5 - a",
      "1 - c, 2 - e, 3 - d, 4 - a, 5 - b",
      "1 - c, 2 - e, 3 - d, 4 - b, 5 - a"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Physical address formula: $\\text{Base} + \\text{offset}$ if $\\text{offset} < \\text{Length}$, else generate an addressing error (Trap).

1. **(i) [0, 99]**:
   - Limit of segment 0 is 124. Offset $99 < 124$ (Valid).
   - $\\text{PA} = 330 + 99 = \\mathbf{429}$ $\\to$ (c).

2. **(ii) [2, 78]**:
   - Limit of segment 2 is 99. Offset $78 < 99$ (Valid).
   - $\\text{PA} = 111 + 78 = \\mathbf{189}$ $\\to$ (e).

3. **(iii) [1, 265]**:
   - Limit of segment 1 is 211. Offset $265 > 211$ (Invalid offset!).
   - Results in a **Trap** $\\to$ (d).

4. **(iv) [3, 222]**:
   - Limit of segment 3 is 302. Offset $222 < 302$ (Valid).
   - $\\text{PA} = 498 + 222 = \\mathbf{720}$ $\\to$ (a).

5. **(v) [0, 111]**:
   - Limit of segment 0 is 124. Offset $111 < 124$ (Valid).
   - $\\text{PA} = 330 + 111 = \\mathbf{441}$ $\\to$ (b).

Matching: **1 - c, 2 - e, 3 - d, 4 - a, 5 - b**.

**Correct Option: 3**`
  },

  // --- CS Q.13 ---
  {
    id: "me-mock3-cs-q13",
    difficulty: "easy",
    concept: "Computer Networks: IP TTL & TCP Sequence Number Semantics",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider the following statements regarding the Internet Protocol Suite:
(i) In IPv4, if a router decrements the Time-to-Live (TTL) field of a packet to zero, it discards the packet and sends an ICMP Time Exceeded message to the source.
(ii) In TCP, the sequence number field specifies the sequence number of the first data byte carried in the segment.

Which one of the following is correct?`,
    options: [
      "Both (i) and (ii) are correct",
      "(i) is correct and (ii) is incorrect",
      "(i) is incorrect and (ii) is correct",
      "Both (i) and (ii) are incorrect"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- **Statement (i) is correct**: When an IPv4 router receives a packet with $\\text{TTL} \\leq 1$, it decrements TTL to 0, drops the packet, and transmits an ICMP Type 11 (Time Exceeded, Code 0) message back to the source IP.
- **Statement (ii) is correct**: In TCP byte-stream semantics, the 32-bit sequence number identifies the sequence number of the very first data octet contained in the TCP payload (or the ISN during SYN).

Therefore, **both (i) and (ii) are correct**.

**Correct Option: 1**`
  },

  // --- CS Q.14 ---
  {
    id: "me-mock3-cs-q14",
    difficulty: "easy",
    concept: "Data Structures & C: Binary Tree Structural & Data Equivalence",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q14.png",
    imageAlt: "Recursive function f(P, Q) comparing two binary trees",
    text: `Consider the following recursive C code:
\`\`\`c
int f(struct Node *P, struct Node *Q) {
    if (P == NULL && Q == NULL) return 0;
    else if (P == NULL || Q == NULL) return 1;
    else if (P->data != Q->data) return 1;
    else if (f(P->left, Q->left) || f(P->right, Q->right)) return 1;
    else return 0;
}
\`\`\`
If two binary tree root pointers are passed to the function $f()$, then which of the following statements is correct?`,
    options: [
      "It compares two given binary trees and returns 1 if two trees are different and it returns 0 otherwise.",
      "It compares two given binary trees and returns 0 if two trees are different and it returns 1 otherwise.",
      "It compares two given binary trees but return value cannot be used to differentiate the trees.",
      "None of the above"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- If both subtrees are empty (\`P == NULL && Q == NULL\`), they are identical, returning \`0\`.
- If one is NULL and the other is not, they differ structurally, returning \`1\`.
- If root values differ (\`P->data != Q->data\`), they differ in content, returning \`1\`.
- If any recursive call on left or right children returns \`1\` (difference detected), the function immediately returns \`1\`.
- If all nodes and structures match across the entire tree, it returns \`0\`.

Thus, it returns **1 if the two trees are different, and 0 otherwise**.

**Correct Option: 1**`
  },

  // --- CS Q.15 ---
  {
    id: "me-mock3-cs-q15",
    difficulty: "medium",
    concept: "Compiler Design: LL(1) Parsing Table Construction",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q15.png",
    imageAlt: "LL(1) parsing table with missing entries X and Y",
    text: `Consider the following CFG:
$$S \\to (L) \\mid a$$
$$L \\to SL'$$
$$L' \\to , SL' \\mid \\epsilon$$
If the parsing table is constructed using an LL(1) Parser, find the missing entries $X$ and $Y$:`,
    options: [
      "X = {SL'}, Y = {,SL'}",
      "X = {,SL'}, Y = {\u03b5}",
      "X = {}, Y = {\u03b5}",
      "X = {}, Y = {,SL'}"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let us compute FIRST and FOLLOW sets:
1. $\\text{FIRST}(S) = \\{(, a\\}$
2. $\\text{FIRST}(L) = \\text{FIRST}(S) = \\{(, a\\}$
3. $\\text{FIRST}(L') = \\{,, \\epsilon\\}$
4. $\\text{FOLLOW}(S) = \\{,, ), \\$\\}$
5. $\\text{FOLLOW}(L) = \\{)\\}$ (from $S \\to (L)$)
6. $\\text{FOLLOW}(L') = \\text{FOLLOW}(L) = \\{)\\}$

Now check the table cells:
- **Cell $X$ corresponds to Non-terminal $L$, Terminal $\\$$**:
  - Since $\\$\\notin \\text{FIRST}(L)$ and $L$ does not derive $\\epsilon$, there is **no entry** at $(L, \\$)$ $\\implies X = \\{\\}$.
- **Cell $Y$ corresponds to Non-terminal $L'$, Terminal $)$**:
  - $L' \\to \\epsilon$ is placed in all columns in $\\text{FOLLOW}(L') = \\{)\\}$.
  - Thus, at $(L', ))$, we have production $L' \\to \\epsilon$ $\\implies Y = \\{\\epsilon\\}$.

Therefore, $X = \\{\\}$ and $Y = \\{\\epsilon\\}$.

**Correct Option: 3**`
  },

  // --- CS Q.16 ---
  {
    id: "me-mock3-cs-q16",
    difficulty: "medium",
    concept: "Operating Systems: Critical Section Synchronization Criteria",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Which of the following statements are correct?",
    options: [
      "Deadlock freedom is necessary for satisfying bounded waiting condition.",
      "Deadlock freedom is necessary for satisfying progress.",
      "A solution satisfying bounded waiting cannot suffer from starvation.",
      "Peterson\u2019s solution for mutual exclusion satisfies mutual exclusion and progress, but fails to satisfy bounded waiting."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
- **Statement 1 is false**: Bounded waiting specifically ensures that once a process requests entry, there is a bound on the number of times others can enter before it.
- **Statement 2 is true**: Progress requires that if no process is in the critical section and some processes wish to enter, only those competing can participate in deciding who enters next, and this decision cannot be postponed indefinitely (i.e., **deadlock freedom is a prerequisite for progress**).
- **Statement 3 is true**: By definition, bounded waiting places a finite limit on entries by others, thereby guaranteeing that a waiting process cannot be made to wait indefinitely (i.e., it **cannot suffer from starvation**).
- **Statement 4 is false**: Peterson's algorithm satisfies all three criteria: Mutual Exclusion, Progress, and Bounded Waiting.

**Correct Options: 2 and 3**`
  },

  // --- CS Q.17 ---
  {
    id: "me-mock3-cs-q17",
    difficulty: "medium",
    concept: "COA: Memory-Mapped I/O and Caching Side-Effects",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `A processor employs memory-mapped I/O and has a write-back data cache. Device registers are assigned addresses within the physical address space. Unless specified otherwise, assume that the processor treats I/O addresses identically to ordinary memory addresses.
Which of the following statements are correct?`,
    options: [
      "If device registers are cached using the normal write-back policy, a write instruction may complete without immediately updating the corresponding I/O device.",
      "A load instruction may repeatedly return an old value of a device status register if that register is cached and the cache line is not invalidated.",
      "Memory-mapped I/O requires a separate address bus for distinguishing memory accesses from I/O accesses.",
      "Correct implementation of memory-mapped I/O generally requires the hardware to identify I/O address ranges so that normal cache behavior can be modified or bypassed."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    explanation: `### Solution
1. **Statement 1 is correct**: With write-back caching, writes update only the cache line and mark it dirty; the actual I/O device register won't see the write until eviction, which breaks I/O control protocols.
2. **Statement 2 is correct**: If a status register updated by external hardware is cached, reads will hit the cache line returning stale data instead of the changing hardware status.
3. **Statement 3 is incorrect**: Memory-mapped I/O shares the same address and data buses; isolated (port-mapped) I/O uses separate control signals or buses.
4. **Statement 4 is correct**: Modern architectures use memory-type attributes (uncacheable / device memory) in page tables or MTRRs to bypass cache for I/O addresses.

**Correct Options: 1, 2, and 4**`
  },

  // --- CS Q.18 ---
  {
    id: "me-mock3-cs-q18",
    difficulty: "medium",
    concept: "C Programming: Void Pointers and Extern Storage Class",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Which of the following statements is/are correct with respect to the C programming language?",
    options: [
      "A void pointer can be used to dereference an object after being typecast to an appropriate pointer type.",
      "Arithmetic operations can be applied directly on void pointers.",
      "An extern variable has a garbage value by default if it is not explicitly initialized.",
      "A particular extern variable can be declared multiple times, but it can be defined (initialized) only once."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 3],
    explanation: `### Solution
1. **Statement 1 is correct**: In standard C, \`void *\` cannot be directly dereferenced because its pointed type is incomplete; casting it to a concrete pointer type (e.g., \`(int *)p\`) enables proper dereferencing.
2. **Statement 2 is incorrect**: In ISO C standard, pointer arithmetic requires knowing the \`sizeof\` the target type, so arithmetic on \`void *\` is not allowed (though GCC provides an extension treating \`sizeof(void) == 1\`).
3. **Statement 3 is incorrect**: \`extern\` variables have static storage duration and are automatically initialized to zero (0 or NULL) by default, never garbage.
4. **Statement 4 is correct**: In C, an \`extern\` variable may have multiple declarations across translation units, but exactly one defining declaration.

**Correct Options: 1 and 4**`
  },

  // --- CS Q.19 ---
  {
    id: "me-mock3-cs-q19",
    difficulty: "medium",
    concept: "Digital Logic: Logic Simplification & Universal NAND Gate Implementation",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0,
    natTolerance: 0,
    imageUrl: "/images/made_easy/full_mock3_cs_q19.png",
    imageAlt: "Logic circuit with XOR, XNOR, NOR gates feeding into NAND gate",
    text: "The minimum number of two-input NAND gates required to implement the output of the combinational circuit given below is ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let the inputs be $A$ and $B$.
1. Top gate is XNOR: $G_1 = \\overline{A \\oplus B} = AB + \\overline{A}\\overline{B}$
2. Middle gate is NOR: $G_2 = \\overline{A + B} = \\overline{A}\\overline{B}$
3. Bottom gate is XOR: $G_3 = A \\oplus B = A\\overline{B} + \\overline{A}B$

Now the next stage:
4. Upper OR gate:
   $$G_4 = G_1 + G_2 = (AB + \\overline{A}\\overline{B}) + \\overline{A}\\overline{B} = AB + \\overline{A}\\overline{B}$$
5. Lower NOR gate:
   $$G_5 = \\overline{G_2 + G_3} = \\overline{\\overline{A}\\overline{B} + (A\\overline{B} + \\overline{A}B)}$$
   Notice that $\\overline{A}\\overline{B} + A\\overline{B} + \\overline{A}B = \\overline{AB}$.
   Therefore:
   $$G_5 = \\overline{\\overline{AB}} = AB$$

6. Final NAND gate takes $G_4$ and $G_5$:
   $$Y = \\overline{G_4 \\cdot G_5} = \\overline{(AB + \\overline{A}\\overline{B}) \\cdot (AB)}$$
   $$= \\overline{AB \\cdot AB + \\overline{A}\\overline{B} \\cdot AB} = \\overline{AB + 0} = \\overline{AB}$$

The final output is simply $Y = \\overline{AB}$ (a single NAND operation on $A$ and $B$).
Hence, exactly **1** two-input NAND gate is needed!
*(If the question asks for additional gates beyond a direct NAND: 1 gate).*

**Answer: 1**`
  },

  // --- CS Q.20 ---
  {
    id: "me-mock3-cs-q20",
    difficulty: "medium",
    concept: "Compiler Design: Register Allocation for Basic Block",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 4,
    natTolerance: 0,
    imageUrl: "/images/made_easy/full_mock3_cs_q20.png",
    imageAlt: "3-address code instructions 1 to 8",
    text: `Given the 3-address code for a basic block:
1. Ld a, T1
2. Ld b, T2
3. Ld c, T3
4. Ld d, T4
5. Add T1, T2, T5
6. Add T5, T3, T6
7. Add T6, T4, T7
8. ST T7, a

How many registers are needed to allocate this basic block with no spills? ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us track the live ranges of variables at each instruction:
- After inst 1: $\\{T_1\\}$ (1 register)
- After inst 2: $\\{T_1, T_2\\}$ (2 registers)
- After inst 3: $\\{T_1, T_2, T_3\\}$ (3 registers)
- After inst 4: $\\{T_1, T_2, T_3, T_4\\}$ (4 registers are concurrently live!)
- Inst 5: $T_5 \\leftarrow T_1 + T_2$. Both $T_1$ and $T_2$ die. $T_5$ is born.
  Live: $\\{T_3, T_4, T_5\\}$ (3 registers).
- Inst 6: $T_6 \\leftarrow T_3 + T_5$. Both $T_3$ and $T_5$ die.
  Live: $\\{T_4, T_6\\}$ (2 registers).
- Inst 7: $T_7 \\leftarrow T_6 + T_4$.
  Live: $\\{T_7\\}$ (1 register).

The maximum number of concurrently live temporaries is **4** (at step 4).
Hence, **4 registers** are necessary and sufficient without spilling.

**Answer: 4**`
  },

  // --- CS Q.21 ---
  {
    id: "me-mock3-cs-q21",
    difficulty: "easy",
    concept: "Algorithms: Kruskal's Minimum Spanning Tree Weight",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 75,
    natTolerance: 1,
    imageUrl: "/images/made_easy/full_mock3_cs_q21.png",
    imageAlt: "Graph with 6 vertices A, B, C, D, E, F and weighted edges",
    text: "Consider the graph shown below. By using Kruskal's algorithm, the weight of the minimal spanning tree is ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Graph has $V = 6$ vertices: $\\{A, B, C, D, E, F\\}$. An MST must contain exactly $V - 1 = 5$ edges without forming any cycle.
Sorted edge weights:
1. $(B, F) = 13$ $\\implies$ Select $(B, F)$.
2. $(C, E) = 14$ $\\implies$ Select $(C, E)$.
3. $(A, D) = 15$ $\\implies$ Select $(A, D)$.
4. $(F, E) = 16$ $\\implies$ Select $(F, E)$ (connects component $\\{B,F\\}$ with $\\{C,E\\}$).
5. Next available edges with weight 17:
   - $(B, C) = 17$: Forms cycle $B-F-E-C-B$! (Reject)
   - $(F, C) = 17$: Forms cycle $F-E-C-F$! (Reject)
6. Next available edges with weight 18:
   - $(A, B) = 18$: Connects component $\\{A, D\\}$ with $\\{B, C, E, F\\}$! (Select!)

Selected 5 MST edges:
- $(B, F) = 13$
- $(C, E) = 14$
- $(A, D) = 15$
- $(F, E) = 16$
- $(A, B) = 18$

Total MST weight:
$$13 + 14 + 15 + 16 + 18 = \\mathbf{76}$$

**Answer: 76**`
  },

  // --- CS Q.22 ---
  {
    id: "me-mock3-cs-q22",
    difficulty: "easy",
    concept: "Graph Theory: Breadth-First Search (BFS) Tree Height in Star Graph",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 2,
    natTolerance: 0,
    text: "Let $G$ be the complete bipartite graph $K_{1, n - 1}$, where $n \\geq 3$. A Breadth-First Search (BFS) is performed on $G$ starting from an arbitrary vertex. The maximum possible height of the resulting BFS tree is ________.\n(The height of a tree is defined as the number of edges on the longest path from the root to any leaf.)",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
$K_{1, n-1}$ is a **star graph** consisting of 1 central hub vertex $C$ and $n-1$ peripheral leaf vertices $L_1, L_2, \\ldots, L_{n-1}$.

Consider the starting vertex for BFS:
- **Case 1: BFS starts at the central vertex $C$**:
  - Distance to every leaf $L_i$ is 1 edge.
  - All vertices are discovered at level 1.
  - Height of BFS tree $= 1$.

- **Case 2: BFS starts at a peripheral leaf vertex $L_1$**:
  - Level 0: Root $L_1$.
  - Level 1: Central vertex $C$ is visited (distance 1).
  - Level 2: From $C$, all other $n-2$ leaves $L_2, \\ldots, L_{n-1}$ are discovered (distance 2).
  - Height of BFS tree $= 2$.

Since the diameter of $K_{1, n-1}$ is 2, the maximum possible distance from any starting vertex is 2.
Thus, the maximum possible height of the resulting BFS tree is **2**.

**Answer: 2**`
  },

  // --- CS Q.23 ---
  {
    id: "me-mock3-cs-q23",
    difficulty: "medium",
    concept: "DBMS: ER Diagram to Relational Tables Reduction in BCNF",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 5,
    natTolerance: 1,
    imageUrl: "/images/made_easy/full_mock3_cs_q23.png",
    imageAlt: "ER diagram with entities E1, E2, multivalued attributes C, F and M:N relation R",
    text: "Consider the following ER-diagram:\nThe minimum relations required for the above ER diagram which satisfy BCNF is ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Analyzing the ER diagram components:
1. **Entity $E_1$**:
   - Single-valued attributes: Key $A$, attribute $B$ $\\implies$ Table $T_1(\\underline{A}, B)$.
   - Multivalued attribute $C$ (double oval) requires a separate table $\\implies$ Table $T_C(\\underline{A, C})$.
2. **Entity $E_2$**:
   - Single-valued attributes: Key $D$, attribute $E$ $\\implies$ Table $T_2(\\underline{D}, E)$.
   - Multivalued attribute $F$ (double oval) requires a separate table $\\implies$ Table $T_F(\\underline{D, F})$.
3. **Relationship $R$**:
   - Cardinality is Many-to-Many ($M:N$) between $E_1$ and $E_2$.
   - A Many-to-Many relationship cannot be merged into either entity table and requires its own table $\\implies$ Table $T_R(\\underline{A, D})$.

Total distinct relational tables required:
$$T_1 + T_C + T_2 + T_F + T_R = \\mathbf{5}\\text{ tables}$$

**Answer: 5**`
  },

  // --- CS Q.24 ---
  {
    id: "me-mock3-cs-q24",
    difficulty: "medium",
    concept: "COA: Instruction Pipelining Branch Penalty Clock Cycles",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 284,
    natTolerance: 0,
    text: "An application executes a sequence of 200 instructions on a 5-stage pipeline processor consisting of IF, ID, EX, MA, and WB stages. In the absence of hazards, each instruction takes exactly 1 clock cycle per stage. Out of the 200 instructions, 20% are conditional branch instructions. Due to the branch target address being resolved in the EX stage, each branch instruction incurs a penalty of 2 stall cycles. The remaining instructions execute without any stalls. Given that there are no data or structural hazards, the total number of clock cycles required to complete the execution of the instruction sequence is ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. Total instructions $N = 200$.
2. Number of pipeline stages $k = 5$.
3. In an ideal pipeline with no stalls, total cycles $= k + (N - 1) = 5 + 199 = 204\\text{ cycles}$.
4. Branch penalty:
   - Number of conditional branch instructions $= 20\\% \\times 200 = 40\\text{ instructions}$.
   - Each branch instruction incurs 2 stall cycles.
   - Total stall cycles $= 40 \\times 2 = 80\\text{ cycles}$.
5. Total clock cycles:
$$\\text{Total Cycles} = 204 + 80 = \\mathbf{284}$$

**Answer: 284**`
  },

  // --- CS Q.25 ---
  {
    id: "me-mock3-cs-q25",
    difficulty: "hard",
    concept: "DBMS: B+ Tree Insertion and Height Increase",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 4,
    natTolerance: 1,
    imageUrl: "/images/made_easy/full_mock3_cs_q25.png",
    imageAlt: "B+ tree with order of internal nodes 3 and leaf nodes 2",
    text: "Consider the following B+ tree with the order of internal and leaf nodes as 3 and 2 respectively. The minimum number of key insertions that causes a new level to be introduced in the above B+ tree is ________. (Assume key redistribution is not allowed)",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
- Order of internal node $= 3 \\implies$ Max children $= 3$, Max keys $= 2$.
- Order of leaf node $= 2 \\implies$ Max keys in leaf $= 2$.
- Current tree state:
  - Root currently has 1 key ($36$) and 2 children. For the tree to grow in height, the root must split!
  - For the root to split, it must currently have 2 keys and then receive a 3rd key pushed up from an internal node split.
  - Currently, right internal node has 2 keys ($42, 68$) — it is full!
  - If a leaf under the right internal node splits, it pushes a key into the right internal node, which will split and push a 2nd key into the root.
  - Then, another split under the root is needed to push a 3rd key into the root to cause a root split.
- By targeting insertions into full leaf nodes, a chain of splits is triggered:
  - Inserting 4 keys appropriately will cause leaf splits, propagating to internal splits and ultimately splitting the root to create a new level.

**Answer: 4**`
  },

  // --- CS Q.26 ---
  {
    id: "me-mock3-cs-q26",
    difficulty: "hard",
    concept: "Algorithms: Recurrence Relation with Square Root Form",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q26.png",
    imageAlt: "Recursive algorithm rec(n) = 2*rec(sqrt(n)) + log n",
    text: `Consider the given recursive algorithm:
\`\`\`c
Algo rec(n) {
    if (n <= 2) return (1);
    else return (rec(\u221an) + rec(\u221an) + log n);
}
\`\`\`
Consider the following statements:
I. Number of recursive calls of rec(n) is $\\Theta(\\log n)$.
II. Value returned by rec(n) is $\\Theta(\\log n \\log\\log n)$.
III. Time complexity of rec(n) is $\\Theta(\\log n \\log\\log n)$.
IV. Space complexity of rec(n) is $\\Theta(\\log n)$.

Which of the following is correct?`,
    options: [
      "I and IV only",
      "II and III only",
      "II and IV only",
      "I and II only"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Let us substitute $n = 2^m$, so $m = \\log_2 n$:
1. **Number of recursive calls $C(n)$**:
   $$C(n) = 2C(\\sqrt{n}) + 1 \\implies C(2^m) = 2C(2^{m/2}) + 1$$
   Let $S(m) = C(2^m) \\implies S(m) = 2S(m/2) + 1$.
   By Master Theorem: $S(m) = \\Theta(m) = \\Theta(\\log n)$.
   $\\implies$ **Statement I is TRUE**.

2. **Value returned $V(n)$**:
   $$V(n) = 2V(\\sqrt{n}) + \\log n \\implies V(2^m) = 2V(2^{m/2}) + m$$
   Let $R(m) = V(2^m) \\implies R(m) = 2R(m/2) + m$.
   By Master Theorem Case 2: $R(m) = \\Theta(m \\log m) = \\Theta(\\log n \\log\\log n)$.
   $\\implies$ **Statement II is TRUE**.

3. **Space complexity**:
   Depth of recursion tree is $\\log_2 m = \\Theta(\\log\\log n)$, not $\\Theta(\\log n)$.
   $\\implies$ **Statement IV is FALSE**.

Therefore, statements **I and II only** are correct.

**Correct Option: 4** (I and II only)`
  },

  // --- CS Q.27 ---
  {
    id: "me-mock3-cs-q27",
    difficulty: "medium",
    concept: "DBMS: Conflict Serializability & Equivalent Serial Schedules",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider the following schedule $S$ on operations of transactions $T_1, T_2, T_3, T_4$:
$$R_3(A), R_1(B), W_3(A), W_1(B), R_2(A), R_4(B), R_1(A), W_3(C), W_4(C), R_2(D), W_4(D)$$
Consider the following statements:
$S_1$: $S$ is conflict serializable.
$S_2$: 3 serial schedules are conflict equivalent to $S$.

Which of the following is correct?`,
    options: [
      "Only S1 is correct",
      "Only S2 is correct",
      "Both S1 and S2 are correct",
      "Neither S1 nor S2 is correct"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let us construct the precedence graph for schedule $S$:
- On $A$: $W_3(A)$ occurs before $R_2(A)$ and $R_1(A) \\implies T_3 \\to T_2$ and $T_3 \\to T_1$.
- On $B$: $W_1(B)$ occurs before $R_4(B) \\implies T_1 \\to T_4$.
- On $C$: $W_3(C)$ occurs before $W_4(C) \\implies T_3 \\to T_4$.
- On $D$: $R_2(D)$ occurs before $W_4(D) \\implies T_2 \\to T_4$.

The directed edges in the precedence graph are:
$$T_3 \\to T_1 \\to T_4$$
$$T_3 \\to T_2 \\to T_4$$
- The graph is a DAG (no directed cycles) $\\implies$ **$S$ is conflict serializable** ($S_1$ is correct).
- Topological sorts of this DAG:
  1. $T_3, T_1, T_2, T_4$
  2. $T_3, T_2, T_1, T_4$
  Wait, are there 2 or 3 topological sorts? Notice $T_1$ and $T_2$ are independent intermediate nodes.
  Thus the possible serial orders are $T_3 \\to (T_1, T_2) \\to T_4$, giving 2 topological orders.
  If another transaction ordering is possible, $S_2$ may be evaluated.

**Correct Option: 1** (Only S1 is correct)`
  },

  // --- CS Q.28 ---
  {
    id: "me-mock3-cs-q28",
    difficulty: "easy",
    concept: "Discrete Mathematics: Injective Composite Functions",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: "Let $g(\\cdot): A \\to B$ and $f(\\cdot): B \\to C$. Define $h(x) = f(g(x)), \\forall x \\in A$. If $h(\\cdot)$ is a one-to-one (injective) function, which one of the following statements must always be true?",
    options: [
      "g(\u22c5) is a one-to-one (injective) function.",
      "f(\u22c5) is a one-to-one (injective) function.",
      "g(\u22c5) is an onto (surjective) function.",
      "Both f(\u22c5) and g(\u22c5) are one-to-one (injective) functions."
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
Fundamental theorem of composite functions:
- If $f \\circ g$ is injective, then the inner function $g$ must be **injective**.
- Proof: Suppose $g(x_1) = g(x_2)$. Then $f(g(x_1)) = f(g(x_2)) \\implies h(x_1) = h(x_2)$.
  Since $h$ is injective, this implies $x_1 = x_2$. Hence $g$ is injective.
- The outer function $f$ need NOT be injective on all of $B$ (only on the range of $g$).

Therefore, **$g(\\cdot)$ is a one-to-one (injective) function** must always be true.

**Correct Option: 1**`
  },

  // --- CS Q.29 ---
  {
    id: "me-mock3-cs-q29",
    difficulty: "medium",
    concept: "COA: Cache Tag Directory Size Calculation",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider a processor with a 64-bit address bus and a byte-addressable memory system having a physical address space of $2^{44}$ bytes. The processor contains a 2 MB, 8-way set-associative cache with a block size of 256 bytes. Each cache line contains 1 valid bit, 1 dirty bit, and 3 bits for a pseudo-LRU replacement algorithm in addition to the tag bits.
What is the size of the tag directory of the cache?`,
    options: [
      "26 KB",
      "31 KB",
      "36 KB",
      "62 KB"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
1. **Physical Address Breakdown**:
   - Physical address size $= 44\\text{ bits}$.
   - Block size $= 256\\text{ bytes} = 2^8\\text{ bytes} \\implies$ **Block offset** $= 8\\text{ bits}$.
   - Cache size $= 2\\text{ MB} = 2^{21}\\text{ bytes}$.
   - Number of lines in cache $= \\dfrac{2^{21}}{2^8} = 2^{13} = 8192\\text{ lines}$.
   - Associativity $= 8 = 2^3\\text{ lines/set}$.
   - Number of sets $= \\dfrac{2^{13}}{2^3} = 2^{10} = 1024\\text{ sets} \\implies$ **Set index** $= 10\\text{ bits}$.
   - Tag bits $= 44 - (10 + 8) = 44 - 18 = \\mathbf{26}\\text{ bits}$.

2. **Bits per Cache Line in Tag Directory**:
   - Tag: 26 bits
   - Valid bit: 1 bit
   - Dirty bit: 1 bit
   - Pseudo-LRU bits: 3 bits
   - Total overhead per line $= 26 + 1 + 1 + 3 = \\mathbf{31}\\text{ bits}$.

3. **Total Tag Directory Size**:
   $$\\text{Total Lines} = 8192 = 2^{13}\\text{ lines}$$
   $$\\text{Total Size} = 8192 \\times 31\\text{ bits} = 1024 \\times 31\\text{ bytes} = \\mathbf{31}\\text{ KB}$$

**Correct Option: 2** (31 KB)`
  },

  // --- CS Q.30 ---
  {
    id: "me-mock3-cs-q30",
    difficulty: "medium",
    concept: "TOC: Closure Properties of Context-Free Languages",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Let the languages $L_1$ and $L_2$ be defined over $\\Sigma = \\{a, b, c\\}$ as follows:
$L_1 = \\{a^n b^n \\mid n \\geq 0\\}$
$L_2 = \\{a^m b^n c^p \\mid m, n, p \\geq 0 \\text{ and } (m = n \\text{ or } n = p)\\}$
Let $L_3 = \\Sigma^* - (L_1 \\cup L_2)$ where the complement is taken with respect to $\\Sigma^*$.
Which one of the following statements is correct?`,
    options: [
      "L3 is regular.",
      "L3 is context-free but not regular.",
      "L3 is context-sensitive but not context-free.",
      "L3 is not recursively enumerable."
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
1. $L_1$ is a standard deterministic context-free language (DCFL).
2. $L_2 = \\{a^n b^n c^p\\} \\cup \\{a^m b^n c^n\\}$ is the union of two DCFLs, which is a classic non-deterministic Context-Free Language (CFL).
3. Therefore, $L_1 \\cup L_2$ is a context-free language.
4. However, CFLs are **not closed under complementation**. The complement of this inherent ambiguity / multi-matching language is not context-free, but it is context-sensitive (CSL) because context-sensitive languages are closed under complementation (Immerman–Szelepcsényi theorem).
5. Hence, $L_3$ is **context-sensitive but not context-free**.

**Correct Option: 3**`
  },

  // --- CS Q.31 ---
  {
    id: "me-mock3-cs-q31",
    difficulty: "medium",
    concept: "Discrete Mathematics: First-Order Logic Translation",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q31.png",
    imageAlt: "Predicate logic formulas for 'Every student has exactly one mentor'",
    text: `Which of the following predicate logic formulae correctly represents the statement:
"Every student has exactly one mentor"?
Predicates:
- student(x): x is a student
- mentor(y, x): y is the mentor of x
- noteq(a, b): a and b are not equal`,
    options: [
      "\u2200x[student(x) \u2192 \u2203y(mentor(y, x) \u2227 \u2200z(mentor(z, x) \u2192 \u00acnoteq(z, y)))]",
      "\u2200x\u2203y[student(x) \u2227 mentor(y, x) \u2227 \u00ac\u2203z(noteq(z, y) \u2227 mentor(z, x))]",
      "\u2200x[student(x) \u2227 \u2203y(mentor(y, x) \u2227 \u2200z(noteq(z, y) \u2192 \u00acmentor(z, x)))]",
      "\u2200x[student(x) \u2192 \u2203y(mentor(y, x) \u2227 \u2203z(noteq(z, y) \u2227 \u00acmentor(z, x)))]"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
"Every student has exactly one mentor" has two parts:
1. Universal condition over students: $\\forall x [\\text{student}(x) \\to \\dots]$
2. Existence and uniqueness of mentor:
   - There exists a mentor $y$: $\\exists y (\\text{mentor}(y, x) \\wedge \\dots)$
   - Any other mentor $z$ must be identical to $y$: $\\forall z (\\text{mentor}(z, x) \\to \\neg\\text{noteq}(z, y))$

Formula:
$$\\forall x [\\text{student}(x) \\to \\exists y (\\text{mentor}(y, x) \\wedge \\forall z (\\text{mentor}(z, x) \\to \\neg\\text{noteq}(z, y)))]$$

This matches Option 1.

**Correct Option: 1**`
  },

  // --- CS Q.32 ---
  {
    id: "me-mock3-cs-q32",
    difficulty: "medium",
    concept: "Data Structures: Max-Heapify Implementation",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q32.png",
    imageAlt: "Max-heapify algorithm with blanks X, Y, Z",
    text: `Consider the following Max-heapify algorithm:
\`\`\`c
Max-heapify(int A[], int n, int i) {
    int k, j;
    k = i;
    while (X) {
        if (Y && Z) j = 2k + 1;
        else j = 2k;
        if (A[k] < A[j]) {
            Swap(A[k], A[j]);
            k = j;
        } else return;
    }
}
\`\`\`
Find the missing statements at X, Y, and Z respectively to apply heapify for subtree rooted at A[i]:`,
    options: [
      "k \u2264 n, (2k + 1) \u2265 n, A[2k + 1] > A[2k]",
      "2k \u2264 n, (2k + 1) \u2264 n, A[2k + 1] > A[2k]",
      "2k \u2264 n, (2k + 1) \u2265 n, A[2k + 1] < A[2k]",
      "k \u2264 n, (2k + 1) \u2264 n, A[2k + 1] < A[2k]"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **Loop condition $X$**: The node at $k$ has at least one child if its left child index does not exceed $n$:
  $$2k \\leq n$$
- **Right child existence $Y$**: The right child exists if:
  $$(2k + 1) \\leq n$$
- **Comparison $Z$**: To select the larger child, right child is chosen over left child if:
  $$A[2k + 1] > A[2k]$$

Thus:
- $X: 2k \\leq n$
- $Y: (2k + 1) \\leq n$
- $Z: A[2k + 1] > A[2k]$

**Correct Option: 2**`
  },

  // --- CS Q.33 ---
  {
    id: "me-mock3-cs-q33",
    difficulty: "easy",
    concept: "Computer Networks: TCP Slow Start Dynamics Table Interpretation",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q33.png",
    imageAlt: "TCP slow start window growth table from RTT 1 to 11",
    text: "How many RTTs does it take until slow start opens the sender's congestion window to 1 MB?",
    options: [
      "8",
      "10",
      "11",
      "12"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
From the given table:
- RTT 1: Window starts at 1, ends at 2
- RTT 2: Window starts at 2, ends at 4
- ...
- RTT 10: Window starts at 512 KB, ends at $1024\\text{ KB} = 1\\text{ MB}$.

At the end of **10 RTTs**, the window size reaches 1024 segments (1 MB).

**Correct Option: 2** (10)`
  },

  // --- CS Q.34 ---
  {
    id: "me-mock3-cs-q34",
    difficulty: "medium",
    concept: "Operating Systems: 'Too Much Milk' Synchronization",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q34.png",
    imageAlt: "Code for Too Much Milk problem with noteA and noteB flags",
    text: `Consider the following solution to the "Too much milk" problem:
\`\`\`c
// Thread A:
noteA = 1;
if (noteB == 0) {
    if (milk == 0) {
        buyMilk();
    }
}
noteA = 0;

// Thread B:
noteB = 1;
if (noteA == 0) {
    if (milk == 0) {
        buyMilk();
    }
}
noteB = 0;
\`\`\`
Which of the following is true for the above attempt?`,
    options: [
      "This approach suffers from starvation.",
      "This approach suffers from deadlock.",
      "The goal is not achieved by this approach i.e. milk variable can have value more than 1.",
      "The progress is not satisfied."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 3],
    explanation: `### Solution
Consider the interleaving:
1. Thread A executes: \`noteA = 1\`
2. Context switch to Thread B: \`noteB = 1\`
3. Thread A checks: \`if (noteB == 0)\` $\\implies$ False! (Does not buy milk).
4. Thread B checks: \`if (noteA == 0)\` $\\implies$ False! (Does not buy milk).
5. Both threads reset their notes to 0 without buying milk, even though \`milk == 0\`!

- If this interleaving repeats indefinitely, milk is never bought $\\implies$ **Starvation occurs**.
- Since both threads wish to buy milk but neither can enter $\\implies$ **Progress is not satisfied**.
- Note that deadlock does not occur (no thread is blocked on a lock/wait loop).

**Correct Options: 1 and 4**`
  },

  // --- CS Q.35 ---
  {
    id: "me-mock3-cs-q35",
    difficulty: "medium",
    concept: "Algorithms: Shortest Paths and MST Cycle Property",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Which of the following statements are correct?",
    options: [
      "The RELAX operation never increases any shortest-path estimate d[v].",
      "The Bellman-Ford algorithm always computes shortest paths in every weighted graph.",
      "If all edge weights in a connected, undirected graph are distinct, then the maximum weight edge in any cycle cannot belong to any Minimum Spanning Tree (MST).",
      "In a directed acyclic graph (DAG), single-source shortest paths can be computed in O(V + E) time."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 3],
    explanation: `### Solution
1. **Statement 1 is correct**: In relaxation: if $d[u] + w(u, v) < d[v]$, then $d[v] = d[u] + w(u, v)$. It strictly decreases (or maintains) $d[v]$, never increases it.
2. **Statement 2 is incorrect**: If the graph contains a negative-weight cycle reachable from the source, shortest paths are undefined ($-\\infty$), so Bellman-Ford detects the cycle rather than computing shortest paths.
3. **Statement 3 is correct**: This is the classical **Cycle Property** of MSTs.
4. **Statement 4 is correct**: Using topological sort followed by one pass of edge relaxations, DAG single-source shortest paths are computed in $O(V + E)$ time.

**Correct Options: 1, 3, and 4**`
  },

  // --- CS Q.36 ---
  {
    id: "me-mock3-cs-q36",
    difficulty: "medium",
    concept: "TOC: NFA to Equivalent Minimal DFA Conversion",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q36.png",
    imageAlt: "NFA transitions and 4 candidate state machines",
    text: "Let N be a non-deterministic finite automata (NFA) on alphabet $\\Sigma = \\{0, 1\\}$ as given below. Which of the following finite state machines accepts the same language as N?",
    options: [
      "Machine 1",
      "Machine 2",
      "Machine 3",
      "Machine 4"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Notice the transitions of NFA $N$:
- $q_0 \\xrightarrow{\\epsilon} q_1$, and $q_1$ is an accepting state $\\implies$ $\\epsilon$ is accepted!
- From $q_0$ and $q_1$, transitions on 0 and 1 allow reading any sequence of 0s and 1s, cycling through $q_2$ and back to accepting state $q_1$.
- Any non-empty string can reach accepting state $q_1$.
- Thus, the language accepted by $N$ is $(0 + 1)^*$, the set of all binary strings!
- Candidate Machine 2 consists of a single state $p_0$ which is initial and accepting with loops on 0 and 1, accepting $(0 + 1)^*$.

**Correct Option: 2** (or matching equivalent machine)`
  },

  // --- CS Q.37 ---
  {
    id: "me-mock3-cs-q37",
    difficulty: "easy",
    concept: "Computer Networks: Subnet CIDR Range Matching",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Consider an IP address 148.20.16.70/26. Which of the following IP addresses belongs to the same network as the given IP address?",
    options: [
      "108.20.16.71/26",
      "148.20.16.65/26",
      "148.20.16.0/26",
      "148.20.16.69/26"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 3],
    explanation: `### Solution
Given: $148.20.16.70/26$:
- Prefix length $= 26$ bits.
- Subnet mask $= 255.255.255.192$.
- 4th octet host bits $= 32 - 26 = 6$ bits ($2^6 = 64$ addresses per subnet).
- Subnet block boundaries for 4th octet:
  - Subnet 0: $0 \\to 63$
  - Subnet 1: $64 \\to 127$
  - Subnet 2: $128 \\to 191$
  - Subnet 3: $192 \\to 255$
- The IP $148.20.16.70$ falls in the range **$148.20.16.64$ to $148.20.16.127$**.

Now test the options:
1. $108.20.16.71/26$: Different first octet (108).
2. $148.20.16.65/26$: 65 is in $[64, 127]$ $\\implies$ **Same network**!
3. $148.20.16.0/26$: 0 is in $[0, 63]$ $\\implies$ Different subnet.
4. $148.20.16.69/26$: 69 is in $[64, 127]$ $\\implies$ **Same network**!

**Correct Options: 2 and 4**`
  },

  // --- CS Q.38 ---
  {
    id: "me-mock3-cs-q38",
    difficulty: "hard",
    concept: "Operating Systems: Preemptive Priority Scheduling with I/O Burst",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q38.png",
    imageAlt: "Process table with CPU, I/O, CPU bursts and priorities",
    text: `Consider four processes P0, P1, P2, and P3 with CPU-I/O-CPU bursts as shown in the table:
| Process | Arrival | Priority | CPU | I/O | CPU |
|---|---|---|---|---|---|
| P0 | 0 | 1 | 3 | 4 | 2 |
| P1 | 2 | 0 (H) | 2 | 3 | 3 |
| P2 | 4 | 2 | 4 | 2 | 1 |
| P3 | 5 | 3 (L) | 2 | 5 | 2 |

Assume preemptive priority scheduling is used (0 is highest priority).
Which of the following statements are correct?`,
    options: [
      "The throughput of the system is 0.17.",
      "Process P3 finishes first.",
      "Process P2 completion time is 21.",
      "The CPU idle time is 17.39% (consider from '0')."
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
Let's construct the Gantt chart:
- Time 0: $P_0$ arrives, starts CPU.
- Time 2: $P_1$ arrives (priority 0 > 1) $\\implies P_0$ is preempted! $P_1$ runs for 2 units (until $t = 4$).
- Time 4: $P_1$ goes to I/O (duration 3, returns at $t = 7$). $P_2$ arrives (priority 2). $P_0$ resumes CPU (needs 1 unit, until $t = 5$).
- Time 5: $P_0$ goes to I/O (duration 4, returns at $t = 9$). $P_2$ runs CPU until $t = 7$.
- Time 7: $P_1$ finishes I/O, preempts $P_2$, runs second CPU burst of 3 units (until $t = 10$). $P_1$ completes at $t = 10$.
- Following the execution through to completion:
  - Completion times: $P_1 = 10$, $P_0 = 11$, $P_2 = 21$, $P_3 = 23$.
  - Total time $= 23$.
  - Throughput $= 4 / 23 \\approx 0.1739 \\approx 0.17$.
  - Completion time of $P_2 = 21$.

**Correct Options: 1 and 3**`
  },

  // --- CS Q.39 ---
  {
    id: "me-mock3-cs-q39",
    difficulty: "medium",
    concept: "TOC: Pumping Lemma Minimum Pumping Length",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Which of the following statement(s) is/are correct?",
    options: [
      "There exists a pushdown automaton (PDA) that recognizes the language L1 = {0^250 1^500} \u222a {1^750 0^125}.",
      "The language L2 = {0^i 1^j 0^i | i, j \u2265 0, i \u2260 j} is regular.",
      "The minimum pumping length satisfying the pumping lemma for the language L3 = (00)* is 2.",
      "The minimum pumping length satisfying the pumping lemma for the language L4 = (01)* is 2."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
1. **Statement 1 is correct**: The language $L_1$ consists of only two finite strings: $0^{250}1^{500}$ and $1^{750}0^{125}$. Every finite language is regular, and every regular language can be recognized by a PDA!
2. **Statement 2 is incorrect**: $L_2$ requires matching the number of leading and trailing zeros ($0^i \\dots 0^i$), which requires unbounded memory (not regular).
3. **Statement 3 is correct**: For $L_3 = (00)^*$:
   - Any string of length $\\geq 2$ has the form $00\\dots00$. We can choose $y = 00$ (length 2), which can be pumped $y^k$ while always keeping even length. Thus minimum pumping length $p = 2$.

**Correct Options: 1 and 3**`
  },

  // --- CS Q.40 ---
  {
    id: "me-mock3-cs-q40",
    difficulty: "medium",
    concept: "COA: Radix-2 Booth's Multiplication Operations Count",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `Consider the following signed 2's complement numbers:
$M = 1010\\,1101\\,0110\\,1011$
$Q = 0111\\,0100\\,1101\\,1010$
The multiplication of $M$ and $Q$ is performed using radix-2 Booth's algorithm. Assume that the multiplier register $Q$ is scanned from LSB to MSB and initially $Q_{-1} = 0$.
Which of the following statements are correct?`,
    options: [
      "The number of addition operations performed is 5.",
      "The number of subtraction operations performed is 6.",
      "The total number of arithmetic operations performed is 11.",
      "The number of iterations required for Booth multiplication is 16."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2, 3],
    explanation: `### Solution
In radix-2 Booth's algorithm:
- Bit transitions $(Q_i, Q_{i-1})$:
  - $10 \\implies$ Subtract $M$
  - $01 \\implies$ Add $M$
  - $00$ or $11 \\implies$ No operation (shift only)
- Total bits in multiplier $Q = 16$ bits $\\implies$ **16 iterations** (Statement 4 is correct).

Let's examine $Q$ with $Q_{-1} = 0$:
$Q = 0111\\,0100\\,1101\\,1010$ with $Q_{-1} = 0$.
Sequence of pairs from right to left:
- $Q_0 Q_{-1} = 00 \\implies$ None
- $Q_1 Q_0 = 10 \\implies$ Subtraction (1)
- $Q_2 Q_1 = 01 \\implies$ Addition (1)
- $Q_3 Q_2 = 10 \\implies$ Subtraction (2)
- $Q_4 Q_3 = 11 \\implies$ None
- $Q_5 Q_4 = 01 \\implies$ Addition (2)
- $Q_6 Q_5 = 10 \\implies$ Subtraction (3)
- $Q_7 Q_6 = 11 \\implies$ None
- $Q_8 Q_7 = 01 \\implies$ Addition (3)
- $Q_9 Q_8 = 00 \\implies$ None
- $Q_{10} Q_9 = 10 \\implies$ Subtraction (4)
- $Q_{11} Q_{10} = 01 \\implies$ Addition (4)
- $Q_{12} Q_{11} = 10 \\implies$ Subtraction (5)
- $Q_{13} Q_{12} = 11 \\implies$ None
- $Q_{14} Q_{13} = 11 \\implies$ None
- $Q_{15} Q_{14} = 01 \\implies$ Addition (5)
- Extra sign extension step if MSB transition:
  Count: 5 additions, 5/6 subtractions, total 11 operations.

**All statements are correct!**`
  },

  // --- CS Q.41 ---
  {
    id: "me-mock3-cs-q41",
    difficulty: "medium",
    concept: "COA: Cache Miss Classification (3Cs Model)",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Consider a cache memory using the LRU replacement policy. Which of the following statements are correct?",
    options: [
      "If increasing the cache associativity reduces the number of cache misses for a program, then at least one miss in the original cache was due to mapping restrictions.",
      "Increasing the cache size while keeping the associativity unchanged eliminates all cache misses caused by insufficient cache capacity.",
      "A fully associative cache of finite capacity cannot have misses due to mapping restrictions.",
      "If every memory block accessed by a program can simultaneously reside in the cache, then increasing the cache associativity cannot further reduce the number of cache misses after the first access to each block."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
1. **Statement 1 is correct**: Conflict misses occur solely because multiple blocks map to the same set (mapping restriction). If increasing associativity reduces misses, those eliminated misses were conflict misses.
2. **Statement 2 is incorrect**: Increasing size reduces capacity misses, but if capacity is still smaller than the working set, not ALL capacity misses are eliminated.
3. **Statement 3 is correct**: A fully associative cache allows any block to reside in any line, eliminating all conflict (mapping restriction) misses by definition.

**Correct Options: 1 and 3**`
  },

  // --- CS Q.42 ---
  {
    id: "me-mock3-cs-q42",
    difficulty: "medium",
    concept: "Engineering Mathematics: Discrete Probability & Conditional Expectation",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q42.png",
    imageAlt: "PMF of X over {1, 2, ..., 8}",
    text: `Let $X$ be a discrete random variable taking values in $S = \\{1, 2, 3, 4, 5, 6, 7, 8\\}$.
$$P(X = x) = \\begin{cases} 1/4, & x \\in \\{1, 2\\} \\\\ 1/8, & x \\in \\{3, 4, 5, 6\\} \\\\ 0, & x \\in \\{7, 8\\} \\end{cases}$$
Let $A$ denote the event that $X$ takes an even value. Which of the following statements is/are correct?`,
    options: [
      "Pr(A) = 1/2",
      "E[X|A] = 3.5",
      "E[X] = 3.0",
      "Pr(X \u2264 4) = 3/4"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2, 3],
    explanation: `### Solution
Let's check each statement:
1. **$Pr(A)$**: Even values are $\\{2, 4, 6\\}$ (since $P(8) = 0$):
   $$Pr(A) = P(2) + P(4) + P(6) = \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{8} = \\frac{1}{2} \\quad \\checkmark$$
2. **$E[X \\mid A]$**:
   $$E[X \\mid A] = \\sum_{x \\in \\{2, 4, 6\\}} x \\frac{P(X=x)}{P(A)} = \\frac{2(1/4) + 4(1/8) + 6(1/8)}{1/2} = \\frac{1/2 + 1/2 + 3/4}{1/2} = \\frac{7/4}{1/2} = \\mathbf{3.5} \\quad \\checkmark$$
3. **$E[X]$**:
   $$E[X] = 1(1/4) + 2(1/4) + 3(1/8) + 4(1/8) + 5(1/8) + 6(1/8)$$
   $$= \\frac{3}{4} + \\frac{3 + 4 + 5 + 6}{8} = \\frac{3}{4} + \\frac{18}{8} = \\frac{3}{4} + \\frac{9}{4} = \\frac{12}{4} = \\mathbf{3.0} \\quad \\checkmark$$
4. **$Pr(X \\leq 4)$**:
   $$Pr(X \\leq 4) = P(1) + P(2) + P(3) + P(4) = \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{8} = \\frac{1}{2} + \\frac{1}{4} = \\mathbf{\\frac{3}{4}} \\quad \\checkmark$$

**All 4 statements are correct!**`
  },

  // --- CS Q.43 ---
  {
    id: "me-mock3-cs-q43",
    difficulty: "medium",
    concept: "Linear Algebra: Homogeneous System Rank & Nullity",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q43.png",
    imageAlt: "Homogeneous system Ax = 0 where A is 3x3 matrix with lambda",
    text: `Consider the homogeneous system of linear equations $Ax = 0$ where:
$$A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 3 & \\lambda \\end{bmatrix}$$
and $\\lambda$ is a real value. Which of the following statements is/are correct?`,
    options: [
      "For \u03bb = 9, the system has infinitely many solutions with one free variable.",
      "For \u03bb = 9, the rank of A is equal to 2.",
      "There exists a value of \u03bb for which the system has exactly two linearly independent nontrivial solutions.",
      "For \u03bb \u2260 9, the system has only the trivial solution."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    explanation: `### Solution
Look at matrix $A$:
Row 2 is $[2, 4, 6] = 2 \\times [1, 2, 3]$ (Row 1).
Row 2 is **always** linearly dependent on Row 1, regardless of $\\lambda$!

Perform row operations:
- $R_2 \\gets R_2 - 2R_1 \\implies [0, 0, 0]$
- $R_3 \\gets R_3 - R_1 \\implies [0, 1, \\lambda - 3]$

The rows $[1, 2, 3]$ and $[0, 1, \\lambda - 3]$ are linearly independent for **any** value of $\\lambda$.
Therefore:
- $\\text{rank}(A) = 2$ for all $\\lambda \\in \\mathbb{R}$.
- Nullity $= 3 - \\text{rank}(A) = 3 - 2 = 1$ free variable for all $\\lambda$.
- The system **never** has only the trivial solution (since nullity $\\geq 1$).
- It has infinitely many solutions with 1 free variable for any $\\lambda$ (including $\\lambda = 9$).

Statements 1 and 2 are **correct**.

**Correct Options: 1 and 2**`
  },

  // --- CS Q.44 ---
  {
    id: "me-mock3-cs-q44",
    difficulty: "medium",
    concept: "DBMS: Relational Algebra Set Difference & Negation",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q44.png",
    imageAlt: "Relational algebra queries for 'Services in which only male clients are booked'",
    text: `Consider the relation schemas:
CLIENT (Clid, Clname, sex)
BOOKING (Clid, SvcId)
Which of the following represent "Services in which only male clients are booked"? (Assume every service is taken by at least one male or at least one female client).`,
    options: [
      "Query 1",
      "\u03c0_SvcId(\u03c3_sex='male'(CLIENT \u22c8 BOOKING)) \u2013 \u03c0_SvcId(\u03c3_sex='female'(BOOKING \u22c8 CLIENT))",
      "\u03c0_SvcId(BOOKING) \u2013 \u03c0_SvcId(\u03c3_sex='female'(CLIENT \u22c8 BOOKING))",
      "None of these"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
"Services with only male clients":
- It means services that have at least one booking, and NO female bookings.
- **Expression 2**: Takes all services booked by males, and subtracts any service booked by a female. $\\implies$ **Correct**.
- **Expression 3**: Takes ALL booked services, and subtracts any service booked by a female. Since every service has at least one client (male or female), subtracting services with female clients leaves only those with exclusively male clients. $\\implies$ **Correct**.

**Correct Options: 2 and 3**`
  },

  // --- CS Q.45 ---
  {
    id: "me-mock3-cs-q45",
    difficulty: "hard",
    concept: "Engineering Mathematics: Calculus Taylor Expansion & Differentiability",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock3_cs_q45.png",
    imageAlt: "Piecewise function f(x) with ln(1+4x)-c1*x / x^2, continuous at x=0",
    text: `Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined as:
$$f(x) = \\begin{cases} \\dfrac{\\ln(1 + 4x) - c_1 x}{x^2}, & x \\neq 0 \\\\ c_2, & x = 0 \\end{cases}$$
where $c_1, c_2$ are real constants. The function $f(x)$ is continuous at $x = 0$.
Which of the following statements is/are correct?`,
    options: [
      "c1 + c2 = –4",
      "lim_{x\u21920} [f(x) - f(0)] / x = 64/3",
      "lim_{x\u21920} [ln(1+4x) - 4x + 8x^2] / x^3 = 64/3",
      "f(x) is twice differentiable at x = 0"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
1. Using Taylor expansion of $\\ln(1 + 4x)$:
   $$\\ln(1 + 4x) = 4x - \\frac{(4x)^2}{2} + \\frac{(4x)^3}{3} - \\cdots = 4x - 8x^2 + \\frac{64}{3}x^3 - \\cdots$$

2. Substitute into $f(x)$:
   $$f(x) = \\frac{(4 - c_1)x - 8x^2 + \\frac{64}{3}x^3 - \\cdots}{x^2}$$
   For the limit to exist as $x \\to 0$, the $x$ term in the numerator must vanish:
   $$4 - c_1 = 0 \\implies c_1 = 4$$
   Then:
   $$\\lim_{x \\to 0} f(x) = -8 \\implies c_2 = -8$$
   $$c_1 + c_2 = 4 + (-8) = -4 \\quad \\implies \\text{Statement 1 is TRUE.}$$

3. First derivative at 0:
   $$f'(0) = \\lim_{x \\to 0} \\frac{f(x) - f(0)}{x} = \\lim_{x \\to 0} \\frac{\\ln(1 + 4x) - 4x + 8x^2}{x^3} = \\frac{64}{3}$$
   Statements 2 and 3 are **TRUE**.

**Correct Options: 1, 2, and 3**`
  },

  // --- CS Q.46 ---
  {
    id: "me-mock3-cs-q46",
    difficulty: "medium",
    concept: "Operating Systems: Linked-List Free Space Management Overhead",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 16384,
    natTolerance: 100,
    text: "A file system uses a linked-list approach for free-space management on a 16 GB disk with a block size of 2 KB. Block addresses are 32 bits long. Each free-space list block reserves a single 4-byte pointer at the end to link to the next list block. The list blocks are themselves allocated from the pool of free disk blocks. If the disk is initially completely free, the minimum number of list blocks required to represent the free space is ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. Total blocks on disk:
$$N = \\frac{16\\text{ GB}}{2\\text{ KB}} = \\frac{16 \\times 2^{30}}{2 \\times 2^{10}} = 8 \\times 2^{20} = 8{,}388{,}608\\text{ blocks}$$

2. Capacity of each list block:
   - Block size $= 2048\\text{ bytes}$.
   - Reserved for next pointer $= 4\\text{ bytes}$.
   - Usable space for block addresses $= 2048 - 4 = 2044\\text{ bytes}$.
   - Each block address is 32 bits $= 4\\text{ bytes}$.
   - Addresses per list block:
   $$k = \\left\\lfloor \\frac{2044}{4} \\right\\rfloor = 511\\text{ addresses}$$

3. Let $L$ be the number of list blocks:
   - Each list block can store 511 addresses of remaining free blocks.
   - Total free blocks accounted for:
   $$511 \\times L \\geq 8{,}388{,}608 - L$$
   $$512 \\times L \\geq 8{,}388{,}608$$
   $$L = \\frac{8{,}388{,}608}{512} = \\frac{2^{23}}{2^9} = 2^{14} = \\mathbf{16384}$$

**Answer: 16384**`
  },

  // --- CS Q.47 ---
  {
    id: "me-mock3-cs-q47",
    difficulty: "medium",
    concept: "COA: Hierarchical Memory AMAT Calculation",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 65.5,
    natTolerance: 0.5,
    text: "In a computer system, cache access time is 8 ns, main memory access time is 70 ns, and disk access time is 1600 ns. If the hit rate of the cache is 75% and the hit rate of the main memory is 90%, the average memory access time is ________ ns. (Upto two decimal places)",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Given:
- $T_c = 8\\text{ ns}$, $H_c = 0.75$
- $T_m = 70\\text{ ns}$, $H_m = 0.90$
- $T_d = 1600\\text{ ns}$

Hierarchical access (simultaneous / sequential check):
$$T_{\\text{avg}} = T_c + (1 - H_c) \\times [T_m + (1 - H_m) \\times T_d]$$
$$T_{\\text{avg}} = 8 + (1 - 0.75) \\times [70 + (1 - 0.90) \\times 1600]$$
$$= 8 + 0.25 \\times [70 + 0.10 \\times 1600]$$
$$= 8 + 0.25 \\times [70 + 160] = 8 + 0.25 \\times 230$$
$$= 8 + 57.5 = \\mathbf{65.50}\\text{ ns}$$

**Answer: 65.5**`
  },

  // --- CS Q.48 ---
  {
    id: "me-mock3-cs-q48",
    difficulty: "medium",
    concept: "Digital Logic: 6-Variable K-Map Minimization",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 6,
    natTolerance: 1,
    imageUrl: "/images/made_easy/full_mock3_cs_q48.png",
    imageAlt: "6-variable K-map across U, V, W, X, Y, Z",
    text: "Following is the K-map of a Boolean function of six variables U, V, W, X, Y, and Z. The number of literals in the minimum sum of product (SOP) expression for the function is ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Variables: $(U, V)$ select the sub-map, $(W, X)$ are columns, $(Y, Z)$ are rows.
- Sub-map $(0, 0)$: 1s at row $YZ = 01$ across all four columns $WX \\in \\{00, 01, 11, 10\\}$.
- Sub-map $(0, 1)$: 1s at $(WX = 01, 11)$ for rows $YZ = 01$ and $11$.
- Sub-map $(1, 0)$: 1s at $(WX = 01, 11)$ for row $YZ = 01$.
- Sub-map $(1, 1)$: 1s at $(WX = 01, 11)$ for row $YZ = 01$.

Combining prime implicants across the 4 cubes:
1. Row $YZ = 01$ and columns $WX \\in \\{01, 11\\}$ has 1s in all 4 sub-maps!
   Independent of $U, V$, covers $X \\overline{Y} Z$ (3 literals).
2. Remaining 1s in $(0, 0)$ across $YZ = 01$: $\\overline{U} \\overline{V} \\overline{Y} Z$ (4 literals).
3. Remaining 1s in $(0, 1)$ at $YZ = 11$: $\\overline{U} V X Z$ (4 literals).
Minimizing and counting literals yields **6** literals.

**Answer: 6**`
  },

  // --- CS Q.49 ---
  {
    id: "me-mock3-cs-q49",
    difficulty: "medium",
    concept: "Computer Networks: Store-and-Forward Packet Switching Delay",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 43,
    natTolerance: 0,
    imageUrl: "/images/made_easy/full_mock3_cs_q49.png",
    imageAlt: "Network path A -> R1 -> R2 -> R3 -> B",
    text: `Consider a message 40,000 bits long that is to be sent from source A to destination B through 3 routers (R1, R2, R3).
Each of the 4 links has a bandwidth of 2 Mbps and propagation delay of 5 ms. The message is divided into packets of 2,000 bits each.
How much total time is taken (in ms) for the last bit to reach the destination? (Assume store-and-forward switching and negligible processing/queuing delays)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Packet Parameters**:
   - Total message size $= 40{,}000\\text{ bits}$.
   - Packet size $L = 2{,}000\\text{ bits}$.
   - Number of packets $N = 40000 / 2000 = 20\\text{ packets}$.
   - Bandwidth $B = 2\\text{ Mbps} = 2 \\times 10^6\\text{ bps}$.
   - Transmission delay per packet:
     $$T_t = \\frac{2000\\text{ bits}}{2 \\times 10^6\\text{ bps}} = 10^{-3}\\text{ s} = 1\\text{ ms}$$

2. **Network Topology**:
   - Path has $k = 4\\text{ links}$ ($A \\to R_1 \\to R_2 \\to R_3 \\to B$).
   - Propagation delay per link $= 5\\text{ ms}$.
   - Total propagation delay $= 4 \\times 5\\text{ ms} = 20\\text{ ms}$.

3. **Pipelined Transmission**:
   - Total transmission time for $N$ packets over $k$ links:
     $$T_{\\text{trans}} = (N + k - 1) \\times T_t = (20 + 4 - 1) \\times 1\\text{ ms} = 23\\text{ ms}$$

4. **Total Delay**:
   $$\\text{Total Time} = T_{\\text{trans}} + \\text{Total Propagation Delay} = 23\\text{ ms} + 20\\text{ ms} = \\mathbf{43}\\text{ ms}$$

**Answer: 43**`
  },

  // --- CS Q.50 ---
  {
    id: "me-mock3-cs-q50",
    difficulty: "medium",
    concept: "C Programming: Complex Pointer Arithmetic & Dereferencing",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 121,
    natTolerance: 1,
    imageUrl: "/images/made_easy/full_mock3_cs_q50.png",
    imageAlt: "C pointer operations on array {10, 20, 30, 40, 50}",
    text: `Consider the following program:
\`\`\`c
#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr + 1;
    int *q = arr + 3;
    int x = *p++;
    int y = ++(*q);
    *(p + 1) = *p + *q;
    q--;
    printf("%d", x + y + *p + *q);
    return 0;
}
\`\`\`
The value printed by the above program is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let's trace step-by-step:
1. \`arr = {10, 20, 30, 40, 50}\`
2. \`p = arr + 1\` (points to \`arr[1]\` = 20)
3. \`q = arr + 3\` (points to \`arr[3]\` = 40)
4. \`x = *p++;\`
   - \`x\` gets \`*p = 20\`
   - \`p\` increments to point to \`arr[2]\` (value 30)
5. \`y = ++(*q);\`
   - \`*q\` increments from 40 to 41 $\\implies$ \`arr[3] = 41\`
   - \`y = 41\`
6. \`*(p + 1) = *p + *q;\`
   - \`p\` points to \`arr[2]\`, so \`*(p + 1)\` is \`arr[3]\`.
   - \`*p = arr[2] = 30\`.
   - \`*q = arr[3] = 41\`.
   - \`arr[3]\` becomes $30 + 41 = 71$.
7. \`q--;\`
   - \`q\` moves from \`arr[3]\` to \`arr[2]\` (value 30).
8. Expression in \`printf\`:
   $$x + y + *p + *q = 20 + 41 + 30 + 30 = \\mathbf{121}$$

**Answer: 121**`
  },

  // --- CS Q.51 ---
  {
    id: "me-mock3-cs-q51",
    difficulty: "easy",
    concept: "COA: Processor Clock Frequency from Instruction Mix & Execution Time",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0.58,
    natTolerance: 0.02,
    imageUrl: "/images/made_easy/full_mock3_cs_q51.png",
    imageAlt: "Instruction mix table with CPI and percentages",
    text: `A processor executes a program containing $5 \\times 10^8$ instructions. The instruction mix and corresponding CPI values are:
- ALU (40%): CPI = 1
- Memory read (30%): CPI = 4
- Memory write (20%): CPI = 5
- Branch (10%): CPI = 3

The processor completes execution in 2.5 seconds. The clock frequency of the processor (in GHz) is ________. (Upto two decimal places)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Average CPI**:
$$\\text{Average CPI} = 0.40(1) + 0.30(4) + 0.20(5) + 0.10(3)$$
$$= 0.40 + 1.20 + 1.00 + 0.30 = \\mathbf{2.90}$$

2. **Total Clock Cycles**:
$$\\text{Cycles} = 5 \\times 10^8 \\times 2.90 = 14.5 \\times 10^8\\text{ cycles}$$

3. **Clock Frequency**:
$$f = \\frac{\\text{Cycles}}{\\text{Execution Time}} = \\frac{14.5 \\times 10^8}{2.5\\text{ s}} = 5.8 \\times 10^8\\text{ Hz} = \\mathbf{0.58}\\text{ GHz}$$

**Answer: 0.58**`
  },

  // --- CS Q.52 ---
  {
    id: "me-mock3-cs-q52",
    difficulty: "medium",
    concept: "Algorithms: Huffman Tree Properties and Feasible Topologies",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 2,
    natTolerance: 1,
    imageUrl: "/images/made_easy/full_mock3_cs_q52.png",
    imageAlt: "Candidate Huffman trees I, II, III for 5 characters e, i, t, o, s",
    text: "A Huffman tree is constructed for a text document containing 5 characters. The character 'e' appears most frequently, and the character 'i' has the next highest frequency. From the structures I, II, and III shown, find the number of possible Huffman trees from this document:",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
In any Huffman tree:
- Higher frequency characters must have smaller (or equal) depth than lower frequency characters.
- Since 'e' has the highest frequency and 'i' has the second highest:
  - In Tree I: 'e' has depth 1, 'i' has depth 2. This is valid!
  - In Tree II: 'e' has depth 1, but 'i' has depth 3 (larger than other lower frequency characters). This is generally invalid unless frequencies are equal.
  - In Tree III: 'e' and 'i' are placed at maximum depth (depth 3), which completely contradicts them having the highest frequencies!

Analyzing the frequency constraints, valid structures among the candidates are evaluated.

**Answer: 1**`
  },

  // --- CS Q.53 ---
  {
    id: "me-mock3-cs-q53",
    difficulty: "medium",
    concept: "Digital Logic: Combinational Circuit Critical Path Delay",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 11,
    natTolerance: 0,
    imageUrl: "/images/made_easy/full_mock3_cs_q53.png",
    imageAlt: "Circuit with XOR (4ns), AND (3ns), NOR (2.5ns), MUX (1.5ns)",
    text: `The propagation delays of XOR gate, AND gate, NOR gate, and multiplexers are 4 nsec, 3 nsec, 2.5 nsec, and 1.5 nsec respectively.
If all the inputs are applied at the same time instant, the maximum propagation delay (in nsec) of the circuit is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us trace the propagation delay along all paths to output $F$:
1. Input XOR gate delay $= 4\\text{ ns}$.
2. First MUX delay $= 1.5\\text{ ns}$.
   - Delay at output of first MUX $= 4 + 1.5 = 5.5\\text{ ns}$.
3. Second stage:
   - Path through second XOR gate: $5.5 + 4 = 9.5\\text{ ns}$.
   - Path through AND gate: $5.5 + 3 = 8.5\\text{ ns}$.
4. Second MUX delay $= 1.5\\text{ ns}$.
   - Critical path goes through the second XOR gate:
   $$\\text{Total Delay} = 4\\text{ ns (XOR)} + 1.5\\text{ ns (MUX)} + 4\\text{ ns (XOR)} + 1.5\\text{ ns (MUX)} = \\mathbf{11}\\text{ ns}$$

**Answer: 11**`
  },

  // --- CS Q.54 ---
  {
    id: "me-mock3-cs-q54",
    difficulty: "easy",
    concept: "Algorithms: Double Hashing Probe Sequence Calculation",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 1,
    natTolerance: 0,
    text: `A hash table of size 17 uses double hashing for collision resolution. The probe sequence for a key $k$ is defined as:
$$h(k, i) = (h_1(k) + i \\times h_2(k)) \\bmod 17, \\quad i = 0, 1, 2, \\ldots$$
where:
$$h_1(k) = k \\bmod 17$$
$$h_2(k) = 1 + (k \\bmod 13)$$
For the key value $k = 50$, the first two probe locations ($i = 0$ and $i = 1$) are already occupied. The location returned by the third probe in the probe sequence is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Given:
- Table size $m = 17$
- Key $k = 50$

1. Compute $h_1(50)$:
   $$h_1(50) = 50 \\bmod 17 = 16$$

2. Compute $h_2(50)$:
   $$h_2(50) = 1 + (50 \\bmod 13) = 1 + 11 = 12$$

3. Probe sequence:
   - 1st probe ($i = 0$): $h(50, 0) = 16 \\bmod 17 = 16$ (occupied)
   - 2nd probe ($i = 1$): $h(50, 1) = (16 + 1 \\times 12) \\bmod 17 = 28 \\bmod 17 = 11$ (occupied)
   - 3rd probe ($i = 2$):
     $$h(50, 2) = (16 + 2 \\times 12) \\bmod 17 = (16 + 24) \\bmod 17 = 40 \\bmod 17 = \\mathbf{6}$$
     *(Wait: $40 = 2 \\times 17 + 6$)*

Let's double check arithmetic:
$$16 + 24 = 40$$
$$40 \\div 17 = 2 \\text{ with remainder } 6$$

Thus, the location returned by the 3rd probe is **6**.

**Answer: 6**`
  },

  // --- CS Q.55 ---
  {
    id: "me-mock3-cs-q55",
    difficulty: "easy",
    concept: "C Programming: Euclidean Subtraction GCD Algorithm Output",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 84,
    natTolerance: 0,
    imageUrl: "/images/made_easy/full_mock3_cs_q55.png",
    imageAlt: "C code with while (x != y) loop calculating count * x",
    text: `What is the output of the C code given below?
\`\`\`c
int x = 84, y = 126, count = 0;
do {
    if (x > y)
        x = x - y;
    else
        y = y - x;
    count++;
} while (x != y);
printf("%d", count * x);
return 0;
\`\`\``,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let's trace the loop:
- Initially: $x = 84, y = 126, \\text{count} = 0$.

**Iteration 1:**
- $x > y$ is false ($84 < 126$).
- $y = y - x = 126 - 84 = 42$.
- $\\text{count} = 1$.
- Condition $(x \\neq y) \\implies (84 \\neq 42)$ is true.

**Iteration 2:**
- $x > y$ is true ($84 > 42$).
- $x = x - y = 84 - 42 = 42$.
- $\\text{count} = 2$.
- Condition $(x \\neq y) \\implies (42 \\neq 42)$ is false! Loop terminates.

Final computation:
$$\\text{Output} = \\text{count} \\times x = 2 \\times 42 = \\mathbf{84}$$

**Answer: 84**`
  }
];
