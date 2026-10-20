import type { Question, Chapter } from "./quizData";

export const MADE_EASY_DM_TWT21_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ, 1 Mark, -0.33) ───
  {
    id: "me-dm-twt21-q01",
    difficulty: "medium",
    concept: "Functions (Injective & Surjective Cardinality Bounds)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Let $A$ and $B$ be finite sets where $|A| = n$ and $|B| = 2$. If there exists an onto (surjective) function from $A$ to $B$, and a one-to-one (injective) function from $B \\times B$ to $A$, what is the minimum possible value of $n$?`,
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let $|A| = n$ and $|B| = 2$.

1. **Surjective (onto) function from $A$ to $B$:**
   For an onto function $f: A \\to B$ to exist, every element of $B$ must have at least one pre-image in $A$.
   $$|A| \\geq |B| \\implies n \\geq 2$$

2. **Injective (one-to-one) function from $B \\times B$ to $A$:**
   For a one-to-one function $g: B \\times B \\to A$ to exist, each element in the domain must map to a distinct element in the codomain.
   $$|B \\times B| \\leq |A|$$
   Since $|B| = 2$, we have:
   $$|B \\times B| = |B| \\times |B| = 2 \\times 2 = 4$$
   Therefore:
   $$4 \\leq n \\implies n \\geq 4$$

Combining both conditions:
$$n \\geq 2 \\quad \\text{and} \\quad n \\geq 4 \\implies n \\geq 4$$

The minimum possible value of $n$ is **4**.

**Correct Answer: Option 3 (4)**`
  },

  // ─── Q.2 (SCQ, 1 Mark, -0.33) ───
  {
    id: "me-dm-twt21-q02",
    difficulty: "easy",
    concept: "Combinatorics (Strings with Fixed Character Frequency)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Let $S$ be the set of all strings of length 8 over the alphabet $\\{0, 1, 2, 3\\}$. How many strings in $S$ contain exactly 3 zeros?`,
    options: [
      "14622",
      "15872",
      "13608",
      "12462"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- The alphabet is $\\Sigma = \\{0, 1, 2, 3\\}$ with size $|\\Sigma| = 4$.
- The length of the string is $8$.
- We require strings with **exactly 3 zeros**:
  1. Choose 3 positions out of 8 for the zeros:
     $$\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$$
  2. The remaining $8 - 3 = 5$ positions must each be filled with non-zero characters from $\\{1, 2, 3\\}$ (3 choices per position):
     $$3^5 = 243$$

Total number of valid strings:
$$\\text{Total} = \\binom{8}{3} \\times 3^5 = 56 \\times 243 = 13608$$

**Correct Answer: Option 3 (13608)**`
  },

  // ─── Q.3 (SCQ, 1 Mark, -0.33) ───
  {
    id: "me-dm-twt21-q03",
    difficulty: "medium",
    concept: "Combinatorics (Pass/Fail Examination Outcomes)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `In an examination of 9 papers a candidate has to pass in more papers than the number of papers in which he fails in order to be successful. The number of ways in which he can be unsuccessful is _________.`,
    options: [
      "512",
      "256",
      "368",
      "472"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- There are 9 papers. For each paper, there are 2 outcomes: Pass ($P$) or Fail ($F$).
- Total possible outcomes = $2^9 = 512$.

Let $k$ be the number of papers passed. The number of failed papers is $9 - k$.
- Candidate is **successful** if:
  $$k > 9 - k \\implies 2k > 9 \\implies k \\geq 5 \\quad (k \\in \\{5, 6, 7, 8, 9\\})$$
- Candidate is **unsuccessful** if:
  $$k \\leq 4 \\quad (k \\in \\{0, 1, 2, 3, 4\\})$$

Because 9 is an odd number, there is no tie ($k \\neq 9 - k$).
By the binomial symmetry identity:
$$\\sum_{k=0}^{4} \\binom{9}{k} = \\sum_{k=5}^{9} \\binom{9}{k} = \\frac{2^9}{2} = \\frac{512}{2} = 256$$

Therefore, the number of ways in which the candidate can be unsuccessful is **256**.

**Correct Answer: Option 2 (256)**`
  },

  // ─── Q.4 (SCQ, 1 Mark, -0.33) ───
  {
    id: "me-dm-twt21-q04",
    difficulty: "medium",
    concept: "Propositional Logic (Tautologies & Logical Equivalence)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt21_q04.png",
    imageAlt: "Q.4 Propositional logic statements",
    text: `Which of the following is **not true**? (Read $\\wedge$ as AND, $\\vee$ as OR, $\\neg$ as NOT, $\\rightarrow$ as one way implication and $\\leftrightarrow$ as two way implication)`,
    options: [
      "((x → y) ∧ x) → y",
      "((¬x → y) ∧ (¬x → ¬y)) → x",
      "(x → (x ∨ y))",
      "((x ∨ y) ↔ (¬x → ¬y))"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Let us test each statement for validity:

1. **$((x \\rightarrow y) \\wedge x) \\rightarrow y$**:
   - This is **Modus Ponens**, a fundamental tautology.
   - $(\\neg x \\vee y) \\wedge x \\equiv x \\wedge y$, and $(x \\wedge y) \\rightarrow y$ is always True.

2. **$((\\neg x \\rightarrow y) \\wedge (\\neg x \\rightarrow \\neg y)) \\rightarrow x$**:
   - $(\\neg x \\rightarrow y) \\wedge (\\neg x \\rightarrow \\neg y) \\equiv \\neg x \\rightarrow (y \\wedge \\neg y) \\equiv \\neg x \\rightarrow \\text{False} \\equiv \\neg(\\neg x) \\equiv x$.
   - $x \\rightarrow x$ is always True (Tautology / Proof by Contradiction).

3. **$(x \\rightarrow (x \\vee y))$**:
   - This is the **Law of Addition**, always True (Tautology).

4. **$((x \\vee y) \\leftrightarrow (\\neg x \\rightarrow \\neg y))$**:
   - Recall $\\neg x \\rightarrow \\neg y \\equiv \\neg(\\neg x) \\vee \\neg y \\equiv x \\vee \\neg y$.
   - So the statement is $(x \\vee y) \\leftrightarrow (x \\vee \\neg y)$.
   - Counterexample: Let $x = \\text{False}, y = \\text{True}$.
     - LHS: $x \\vee y = \\text{False} \\vee \\text{True} = \\text{True}$.
     - RHS: $\\neg x \\rightarrow \\neg y = \\text{True} \\rightarrow \\text{False} = \\text{False}$.
     - $\\text{True} \\leftrightarrow \\text{False} = \\text{False}$.
   - Thus, statement 4 is **NOT a tautology / not true**.

**Correct Answer: Option 4 (((x ∨ y) ↔ (¬x → ¬y)))**`
  },

  // ─── Q.5 (SCQ, 1 Mark, -0.33) ───
  {
    id: "me-dm-twt21-q05",
    difficulty: "easy",
    concept: "Functions (Cardinality Conditions for Injective & Surjective Maps)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt21_q05.png",
    imageAlt: "Q.5 Cardinality constraints on functions",
    text: `Let $A$ and $B$ be two finite sets such that $|A| = n$ and $|B| = m$. Let $f: A \\to B$ be a function.
- $S_1$: If $f$ is one-to-one, then $n \\leq m$.
- $S_2$: If $f$ is onto, then $n \\geq m$.

Which of the above statements is always correct?`,
    options: [
      "Only S₁",
      "Only S₂",
      "Both S₁ and S₂",
      "Neither S₁ nor S₂"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let $f: A \\to B$ be a function with $|A| = n$ and $|B| = m$.

- **Statement $S_1$:** If $f$ is one-to-one (injective), each element in $A$ maps to a distinct element in $B$. By the Pigeonhole Principle, this is possible if and only if:
  $$|A| \\leq |B| \\implies n \\leq m$$
  Hence, $S_1$ is **always correct**.

- **Statement $S_2$:** If $f$ is onto (surjective), every element in $B$ must be the image of at least one element in $A$. Since each element in $A$ maps to at most one element in $B$:
  $$|A| \\geq |B| \\implies n \\geq m$$
  Hence, $S_2$ is **always correct**.

Both $S_1$ and $S_2$ are always correct.

**Correct Answer: Option 3 (Both S₁ and S₂)**`
  },

  // ─── Q.6 (NAT, 1 Mark, 0) ───
  {
    id: "me-dm-twt21-q06",
    difficulty: "medium",
    concept: "Combinatorics (Complement Counting on Subsets)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 52338,
    natTolerance: 0,
    text: `Consider the set $S = \\{1, 2, 3, \\ldots, 25\\}$. The number of subsets $T \\subseteq S$ of size five such that $T$ has at least one odd number in it is ________.`,
    options: [],
    correctAnswerIndex: -1,
    explanation: `### Solution
Set $S = \\{1, 2, 3, \\ldots, 25\\}$ contains $25$ integers:
- **Odd integers:** $\\{1, 3, 5, \\ldots, 25\\} \\implies \\frac{25 - 1}{2} + 1 = 13$ odd integers.
- **Even integers:** $\\{2, 4, 6, \\ldots, 24\\} \\implies 12$ even integers.

We need the number of 5-element subsets $T$ having **at least one odd integer**.
Using the complement rule:
$$\\text{Subsets with } \\ge 1 \\text{ odd} = (\\text{Total 5-element subsets}) - (\\text{Subsets with NO odd integers})$$

1. **Total 5-element subsets from 25:**
   $$\\binom{25}{5} = \\frac{25 \\times 24 \\times 23 \\times 22 \\times 21}{5 \\times 4 \\times 3 \\times 2 \\times 1} = \\frac{6375600}{120} = 53130$$

2. **5-element subsets with only even integers (chosen from the 12 evens):**
   $$\\binom{12}{5} = \\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{5 \\times 4 \\times 3 \\times 2 \\times 1} = \\frac{95040}{120} = 792$$

3. **Subsets with at least one odd number:**
   $$53130 - 792 = 52338$$

**Correct Answer: 52338**`
  },

  // ─── Q.7 (NAT, 1 Mark, 0) ───
  {
    id: "me-dm-twt21-q07",
    difficulty: "easy",
    concept: "Relations (Universal Equivalence Relation)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 100,
    natTolerance: 0,
    text: `Suppose $A$ is a finite set with 10 elements. The number of elements in the largest equivalence relation of $A$ is ________.`,
    options: [],
    correctAnswerIndex: -1,
    explanation: `### Solution
An equivalence relation $R$ on a set $A$ is a subset of $A \\times A$ that is reflexive, symmetric, and transitive.

- The **largest possible subset** of $A \\times A$ is the universal relation $R = A \\times A$.
- Verification that $A \\times A$ is an equivalence relation:
  1. **Reflexive:** For all $a \\in A$, $(a, a) \\in A \\times A$.
  2. **Symmetric:** For all $a, b \\in A$, if $(a, b) \\in A \\times A$, then $(b, a) \\in A \\times A$.
  3. **Transitive:** For all $a, b, c \\in A$, if $(a, b) \\in A \\times A$ and $(b, c) \\in A \\times A$, then $(a, c) \\in A \\times A$.

Since $A \\times A$ satisfies all three conditions, it is an equivalence relation (corresponding to a single equivalence class containing all 10 elements).

The number of elements in $A \\times A$ is:
$$|A \\times A| = |A|^2 = 10^2 = 100$$

**Correct Answer: 100**`
  },

  // ─── Q.8 (NAT, 1 Mark, 0) ───
  {
    id: "me-dm-twt21-q08",
    difficulty: "medium",
    concept: "Number Theory (Relatively Prime via Principle of Inclusion-Exclusion)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 533,
    natTolerance: 0,
    text: `The number of positive integers less than or equal to 1000 that are relatively prime to 15 are _____.`,
    options: [],
    correctAnswerIndex: -1,
    explanation: `### Solution
We want the number of integers $x \\in \\{1, 2, \\ldots, 1000\\}$ such that $\\gcd(x, 15) = 1$.
The prime factors of $15$ are $3$ and $5$.
An integer is relatively prime to $15$ if and only if it is divisible by **neither 3 nor 5**.

Let $S = \\{1, 2, \\ldots, 1000\\}$ with $|S| = 1000$.
- Multiples of 3: $|M_3| = \\lfloor 1000 / 3 \\rfloor = 333$
- Multiples of 5: $|M_5| = \\lfloor 1000 / 5 \\rfloor = 200$
- Multiples of both 3 and 5 (multiples of 15): $|M_{15}| = \\lfloor 1000 / 15 \\rfloor = 66$

By the **Principle of Inclusion-Exclusion**, the number of integers divisible by 3 or 5 is:
$$|M_3 \\cup M_5| = |M_3| + |M_5| - |M_{15}| = 333 + 200 - 66 = 467$$

The number of integers relatively prime to 15 is:
$$1000 - |M_3 \\cup M_5| = 1000 - 467 = 533$$

**Correct Answer: 533**`
  },

  // ─── Q.9 (SCQ, 2 Marks, -0.66) ───
  {
    id: "me-dm-twt21-q09",
    difficulty: "medium",
    concept: "Propositional Logic (Identifying Non-Tautologies)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt21_q09.png",
    imageAlt: "Q.9 Logic expressions for tautology check",
    text: `Which of the following is **not a tautology**?`,
    options: [
      "[¬p ∧ (p ∨ q)] → q",
      "[(p → q) ∧ (q → r)] → [p → r]",
      "[(p → q) ∧ (p → r)] → q",
      "(p ∧ q) → (p ∨ q)"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let us check each option:

1. **$[\\neg p \\wedge (p \\vee q)] \\rightarrow q$**:
   - $\\neg p \\wedge (p \\vee q) \\equiv (\\neg p \\wedge p) \\vee (\\neg p \\wedge q) \\equiv F \\vee (\\neg p \\wedge q) \\equiv \\neg p \\wedge q$.
   - $(\\neg p \\wedge q) \\rightarrow q$ is always True (Disjunctive Syllogism). Tautology.

2. **$[(p \\rightarrow q) \\wedge (q \\rightarrow r)] \\rightarrow [p \\rightarrow r]$**:
   - This is **Hypothetical Syllogism** (transitivity of implication). Tautology.

3. **$[(p \\rightarrow q) \\wedge (p \\rightarrow r)] \\rightarrow q$**:
   - Counterexample: Let $p = \\text{False}, q = \\text{False}, r = \\text{True}$.
   - $p \\rightarrow q = F \\rightarrow F = T$.
   - $p \\rightarrow r = F \\rightarrow T = T$.
   - Antecedent: $T \\wedge T = T$.
   - Consequent: $q = F$.
   - Entire expression: $T \\rightarrow F = \\mathbf{False}$.
   - Hence, this is **NOT a tautology**.

4. **$(p \\wedge q) \\rightarrow (p \\vee q)$**:
   - If both $p$ and $q$ are true, $p \\vee q$ is always true. Tautology.

**Correct Answer: Option 3 ([(p → q) ∧ (p → r)] → q)**`
  },

  // ─── Q.10 (SCQ, 2 Marks, -0.66) ───
  {
    id: "me-dm-twt21-q10",
    difficulty: "hard",
    concept: "Set Theory (Unordered Disjoint Subsets Pairs)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `How many pairs of sets $\\{A, B\\}$ are there that satisfy the relation $A, B \\subseteq \\{1, 2, 3, 4, 5\\}$ and $A \\cap B = \\emptyset$?`,
    options: [
      "125",
      "127",
      "122",
      "257"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let $S = \\{1, 2, 3, 4, 5\\}$ with $n = |S| = 5$.
We want to find the number of **unordered pairs** $\\{A, B\\}$ such that $A \\subseteq S, B \\subseteq S$, and $A \\cap B = \\emptyset$.

1. **Ordered pairs $(A, B)$ such that $A \\cap B = \\emptyset$:**
   For each of the $n$ elements in $S$, there are 3 mutually exclusive choices:
   - $x \\in A$ and $x \\notin B$
   - $x \\notin A$ and $x \\in B$
   - $x \\notin A$ and $x \\notin B$
   Total number of ordered pairs $(A, B)$ is $3^n = 3^5 = 243$.

2. **Transition from Ordered to Unordered pairs:**
   - The only ordered pair where $A = B$ is $(\\emptyset, \\emptyset)$, which yields $A \\cap B = \\emptyset$. There is exactly $1$ such pair.
   - For all other $243 - 1 = 242$ ordered pairs, $A \\neq B$. In an unordered pair, the order does not matter: $\\{A, B\\} = \\{B, A\\}$. Thus each distinct unordered pair corresponds to $2$ ordered pairs:
     $$\\frac{242}{2} = 121$$
   - Including the unordered pair $\\{\\emptyset, \\emptyset\\}$:
     $$\\text{Total unordered pairs} = \\frac{3^n - 1}{2} + 1 = \\frac{3^n + 1}{2}$$
     $$\\frac{3^5 + 1}{2} = \\frac{243 + 1}{2} = \\mathbf{122}$$

**Correct Answer: Option 3 (122)**`
  },

  // ─── Q.11 (MSQ, 2 Marks, 0) ───
  {
    id: "me-dm-twt21-q11",
    difficulty: "medium",
    concept: "Propositional Logic (Equivalences of Biconditional p ↔ q)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt21_q11.png",
    imageAlt: "Q.11 Biconditional equivalence expressions",
    text: `Which of the following expression is/are equal to $p \\leftrightarrow q$?`,
    options: [
      "q ↔ p",
      "¬p → ¬q",
      "¬p ↔ ¬q",
      "(¬p → ¬q) ∧ (¬q → ¬p)"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 3],
    explanation: `### Solution
Recall that the biconditional $p \\leftrightarrow q$ is true when $p$ and $q$ have identical truth values:
$$p \\leftrightarrow q \\equiv (p \\rightarrow q) \\wedge (q \\rightarrow p)$$

Let us analyze each option:
1. **$q \\leftrightarrow p$:**
   - The biconditional operator is symmetric: $p \\leftrightarrow q \\equiv q \\leftrightarrow p$. **(Correct)**

2. **$\\neg p \\rightarrow \\neg q$:**
   - By contrapositive, $\\neg p \\rightarrow \\neg q \\equiv q \\rightarrow p$. This is only a one-way implication, not a biconditional. **(Incorrect)**

3. **$\\neg p \\leftrightarrow \\neg q$:**
   - If $p = T, q = T \\implies \\neg p = F, \\neg q = F \\implies F \\leftrightarrow F = T$.
   - If $p = F, q = F \\implies \\neg p = T, \\neg q = T \\implies T \\leftrightarrow T = T$.
   - If $p \\neq q \\implies \\neg p \\neq \\neg q \\implies F$.
   - It matches the truth table of $p \\leftrightarrow q$ in all cases. **(Correct)**

4. **$(\\neg p \\rightarrow \\neg q) \\wedge (\\neg q \\rightarrow \\neg p)$:**
   - By definition of biconditional: $\\neg p \\leftrightarrow \\neg q \\equiv (\\neg p \\rightarrow \\neg q) \\wedge (\\neg q \\rightarrow \\neg p)$.
   - Using contrapositives: $(\\neg p \\rightarrow \\neg q) \\equiv (q \\rightarrow p)$ and $(\\neg q \\rightarrow \\neg p) \\equiv (p \\rightarrow q)$.
   - Conjunction: $(q \\rightarrow p) \\wedge (p \\rightarrow q) \\equiv p \\leftrightarrow q$. **(Correct)**

**Correct Answers: Options 1, 3, and 4**`
  },

  // ─── Q.12 (MSQ, 2 Marks, 0) ───
  {
    id: "me-dm-twt21-q12",
    difficulty: "medium",
    concept: "Predicate Logic (Equivalences of Universal Conditional Statements)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt21_q12.png",
    imageAlt: "Q.12 Predicate logic statement equivalences",
    text: `Let $P(x)$ and $Q(x)$ be predicates and let $D$ denote the domain of the predicate variable $x$. Consider the following universal conditional statement:
$$\\forall x \\in D, P(x) \\rightarrow Q(x)$$
Which of the following is/are logically equivalent to the above statement?`,
    options: [
      "∀x ∈ D, (~Q(x)) → (~P(x))",
      "~∃x ∈ D, P(x) ∧ (~Q(x))",
      "∀x ∈ D, (~P(x)) ∨ Q(x)",
      "∀x ∈ D, Q(x) → P(x)"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
Given statement:
$$S = \\forall x \\in D, P(x) \\rightarrow Q(x)$$

Let us analyze each option:
1. **$\\forall x \\in D, (\\sim Q(x)) \\rightarrow (\\sim P(x))$:**
   - The contrapositive of $P(x) \\rightarrow Q(x)$ is $\\sim Q(x) \\rightarrow \\sim P(x)$.
   - An implication is always logically equivalent to its contrapositive. **(Correct)**

2. **$\\sim \\exists x \\in D, P(x) \\wedge (\\sim Q(x))$:**
   - Pushing negation inside using De Morgan's quantifier laws:
     $$\\sim \\exists x \\in D, [P(x) \\wedge \\sim Q(x)] \\equiv \\forall x \\in D, \\sim [P(x) \\wedge \\sim Q(x)]$$
     $$\\equiv \\forall x \\in D, [\\sim P(x) \\vee \\sim(\\sim Q(x))] \\equiv \\forall x \\in D, [\\sim P(x) \\vee Q(x)] \\equiv \\forall x \\in D, [P(x) \\rightarrow Q(x)]$$
   - Exactly equivalent to the given statement. **(Correct)**

3. **$\\forall x \\in D, (\\sim P(x)) \\vee Q(x)$:**
   - By definition of material implication, $P(x) \\rightarrow Q(x) \\equiv \\sim P(x) \\vee Q(x)$. **(Correct)**

4. **$\\forall x \\in D, Q(x) \\rightarrow P(x)$:**
   - This is the converse of the given conditional statement, which is not generally equivalent. **(Incorrect)**

**Correct Answers: Options 1, 2, and 3**`
  },

  // ─── Q.13 (SCQ, 2 Marks, -0.66) ───
  {
    id: "me-dm-twt21-q13",
    difficulty: "medium",
    concept: "Combinatorics (Catalan Numbers, Permutations & Strings Matching)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt21_q13.png",
    imageAlt: "Q.13 List-I and List-II matching problem",
    text: `Match **List-I** with **List-II** and select the correct answer using the codes given below the lists:

**List-I:**
- **A.** The number of distinct binary trees with $n$ nodes.
- **B.** The number of binary strings of length $2n$ with an equal number of 0's and 1's.
- **C.** The number of even permutations of $n$ objects.
- **D.** The number of binary strings of length $6n$ which are palindromes with $2n$ 0's.

**List-II:**
1. $\\frac{n!}{2}$
2. $\\binom{3n}{n}$
3. $\\binom{2n}{n}$
4. $\\frac{1}{n+1}\\binom{2n}{n}$`,
    options: [
      "(a) A-4, B-3, C-1, D-2",
      "(b) A-3, B-4, C-2, D-1",
      "(c) A-2, B-4, C-3, D-1",
      "(d) A-4, B-3, C-2, D-1"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us evaluate each item in List-I:

- **A. Distinct binary trees with $n$ nodes:**
  The number of distinct binary trees with $n$ unlabeled nodes is given by the $n$-th Catalan number:
  $$C_n = \\frac{1}{n+1}\\binom{2n}{n} \\implies \\mathbf{A \\to 4}$$

- **B. Binary strings of length $2n$ with an equal number of 0's and 1's:**
  In a string of length $2n$, we must choose exactly $n$ positions for 0's (the remaining $n$ positions will be 1's):
  $$\\binom{2n}{n} \\implies \\mathbf{B \\to 3}$$

- **C. The number of even permutations of $n$ objects:**
  In the symmetric group $S_n$ on $n$ elements (where total permutations = $n!$), exactly half of all permutations are even (forming the alternating group $A_n$):
  $$\\frac{n!}{2} \\implies \\mathbf{C \\to 1}$$

- **D. Binary strings of length $6n$ which are palindromes with $2n$ 0's:**
  A palindrome of length $6n$ is completely determined by its first half of length $3n$.
  The second half is a mirror of the first half.
  If the entire string has $2n$ zeros, the first half must contain exactly $n$ zeros:
  $$\\binom{3n}{n} \\implies \\mathbf{D \\to 2}$$

Matching: **A-4, B-3, C-1, D-2**, which corresponds to **(a)**.

**Correct Answer: Option 1 ((a))**`
  },

  // ─── Q.14 (NAT, 2 Marks, 0) ───
  {
    id: "me-dm-twt21-q14",
    difficulty: "easy",
    concept: "Permutations (4-digit Numbers with Distinct Digits)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 360,
    natTolerance: 0,
    text: `The numbers [Each with different digits] between 1000 and 10000 can be formed with 7, 6, 5, 4, 3, 2 are _________ .`,
    options: [],
    correctAnswerIndex: -1,
    explanation: `### Solution
- The numbers must lie strictly between $1000$ and $10000$.
  Therefore, any such number must have exactly **4 digits** (from $1001$ to $9999$).
- Available digits: $\\{2, 3, 4, 5, 6, 7\\}$ (total 6 distinct non-zero digits).
- Constraint: "Each with different digits" means repetition of digits is **not allowed**.
- Since all available digits are $\\geq 2$, the first (thousands) digit is at least 2, so every 4-digit number formed will automatically be $> 1000$ and $< 10000$.

The number of ways to arrange 4 distinct digits chosen from 6 available digits is:
$$P(6, 4) = \\frac{6!}{(6-4)!} = 6 \\times 5 \\times 4 \\times 3 = 360$$

**Correct Answer: 360**`
  },

  // ─── Q.15 (MSQ, 2 Marks, 0) ───
  {
    id: "me-dm-twt21-q15",
    difficulty: "hard",
    concept: "Relations (Properties of Identity Relation on Power Set)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt21_q15.png",
    imageAlt: "Q.15 Equivalence and identity relations on power set",
    text: `Let $A$ and $B$ be two non-empty sets with cardinalities 3 and 4, respectively. Let $R$ be a relation defined on the set $\\mathcal{P}(A \\times B)$ (power set of $A \\times B$).
Suppose $R$ is reflexive, symmetric, transitive, and antisymmetric.
Which of the following statements is/are correct?`,
    options: [
      "R is an equivalence relation.",
      "R is the identity relation on P(A × B).",
      "Every equivalence class under R has exactly two element.",
      "The number of equivalence classes is 2¹²."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    explanation: `### Solution
Let $S = \\mathcal{P}(A \\times B)$.
- $|A| = 3$, $|B| = 4 \\implies |A \\times B| = 3 \\times 4 = 12$.
- The power set has cardinality $|S| = |\\mathcal{P}(A \\times B)| = 2^{12} = 4096$.

Let $R$ be a relation on $S$ that is **reflexive, symmetric, transitive, and antisymmetric**:

1. **Equivalence relation:**
   - Any relation that is reflexive, symmetric, and transitive is by definition an **equivalence relation**.
   - Statement 1 is **correct**.

2. **Identity relation:**
   - $R$ is symmetric: $(X, Y) \\in R \\implies (Y, X) \\in R$.
   - $R$ is antisymmetric: $(X, Y) \\in R \\wedge (Y, X) \\in R \\implies X = Y$.
   - Together, $(X, Y) \\in R \\implies X = Y$.
   - Since $R$ is reflexive, $(X, X) \\in R$ for all $X \\in S$.
   - Thus, $R = \\{(X, X) \\mid X \\in S\\}$, which is precisely the **identity relation** $I_S$.
   - Statement 2 is **correct**.

3. **Size of equivalence classes:**
   - Under the identity relation, each equivalence class $[X] = \\{X\\}$ contains **exactly one element**, not two.
   - Statement 3 is **incorrect**.

4. **Number of equivalence classes:**
   - Since each element $X \\in S$ forms its own distinct singleton equivalence class, the number of equivalence classes equals $|S| = 2^{12}$.
   - Statement 4 is **correct**.

**Correct Answers: Options 1, 2, and 4**`
  },

  // ─── Q.16 (MSQ, 1 Mark, 0) ───
  {
    id: "me-dm-twt21-q16",
    difficulty: "medium",
    concept: "Propositional Logic (Translating Natural Language to Logical Equivalence)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt21_q16.png",
    imageAlt: "Q.16 Propositional logic natural language translation",
    text: `Let $p$ and $q$ be the following propositions:
- $p$: A person is allowed to enter the park.
- $q$: The person has a valid entry pass.

Consider the statement:
*“A person is not allowed to enter the park when the person has a valid entry pass.”*

Which of the following are logically equivalent representations of the above statement?`,
    options: [
      "¬p ∨ ¬q",
      "q → p",
      "q → ¬p",
      "¬q → p"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
Given propositions:
- $p$: A person is allowed to enter the park.
- $q$: The person has a valid entry pass.

The given English statement is:
*“A person is not allowed to enter the park when the person has a valid entry pass.”*

In English, *"A when B"* means *"If B, then A"*.
- Condition ($B$): The person has a valid entry pass ($q$).
- Conclusion ($A$): The person is not allowed to enter the park ($\\neg p$).

Thus, the statement translates directly to:
$$q \\rightarrow \\neg p$$
Therefore, **Option 3** is equivalent.

Now, examine the logical equivalence using standard conditional identity ($A \\rightarrow B \\equiv \\neg A \\vee B$):
$$q \\rightarrow \\neg p \\equiv \\neg q \\vee \\neg p \\equiv \\neg p \\vee \\neg q$$
Therefore, **Option 1** is also logically equivalent.

Options 2 and 4 are not equivalent:
- $q \\rightarrow p$ means "If valid pass, then allowed to enter".
- $\\neg q \\rightarrow p \\equiv q \\vee p$.

**Correct Answers: Options 1 and 3**`
  },

  // ─── Q.17 (MSQ, 2 Marks, 0) ───
  {
    id: "me-dm-twt21-q17",
    difficulty: "medium",
    concept: "Relations (Even Sum Parity Equivalence Relation)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt21_q17.png",
    imageAlt: "Q.17 Properties of relation x + y is even",
    text: `Let $R$ be a binary relation on the set $A = \\{1, 2, 3, \\ldots, 20\\}$ defined by $(x, y) \\in R$ if and only if $x + y$ is an even integer. Which of the following properties are satisfied by $R$?`,
    options: [
      "Reflexive",
      "Symmetric",
      "Transitive",
      "Antisymmetric"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
Given set $A = \\{1, 2, 3, \\ldots, 20\\}$ and relation:
$$(x, y) \\in R \\iff x + y \\text{ is even}$$
Note that $x + y$ is even if and only if $x$ and $y$ have the **same parity** (both are even or both are odd).

Let us check each property:

1. **Reflexive:**
   For any $x \\in A$:
   $$x + x = 2x$$
   Since $2x$ is a multiple of 2, $x + x$ is always even.
   Hence $(x, x) \\in R$ for all $x \\in A$. **(Satisfied)**

2. **Symmetric:**
   If $(x, y) \\in R$, then $x + y$ is even.
   By commutativity of addition, $y + x = x + y$, so $y + x$ is also even.
   Hence $(y, x) \\in R$. **(Satisfied)**

3. **Transitive:**
   If $(x, y) \\in R$ and $(y, z) \\in R$, then $x + y$ is even and $y + z$ is even.
   Sum of two even integers is even:
   $$(x + y) + (y + z) = x + 2y + z \\text{ is even}$$
   Since $2y$ is even, the difference:
   $$(x + 2y + z) - 2y = x + z \\text{ must also be even}$$
   Alternatively, $x$ and $y$ have the same parity, and $y$ and $z$ have the same parity $\\implies x$ and $z$ have the same parity $\\implies x + z$ is even.
   Hence $(x, z) \\in R$. **(Satisfied)**

4. **Antisymmetric:**
   Take $x = 1, y = 3$:
   - $1 + 3 = 4$ (even) $\\implies (1, 3) \\in R$
   - $3 + 1 = 4$ (even) $\\implies (3, 1) \\in R$
   - But $1 \\neq 3$.
   Hence $R$ is **not antisymmetric**. **(Not satisfied)**

$R$ is Reflexive, Symmetric, and Transitive (in fact, it is an equivalence relation that partitions $A$ into the set of 10 odd numbers and the set of 10 even numbers).

**Correct Answers: Options 1, 2, and 3**`
  }
];

export const MADE_EASY_DM_TWT21_CHAPTER: Chapter = {
  id: "dm-gate-2027-twt-21",
  name: "GATE 2027 CS TOPIC WISE TEST - 21 (Discrete Mathematics)",
  description: "Made Easy GATE 2027 Test 21: Set Theory, Functions, Relations, Propositional & Predicate Logic, Combinatorics, Number Theory",
  questions: MADE_EASY_DM_TWT21_QUESTIONS
};
