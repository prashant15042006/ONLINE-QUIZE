import type { Question, Chapter } from "./quizData";

export const MADE_EASY_CD_TWT24_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-cd-twt24-q01",
    difficulty: "easy",
    concept: "Data-Flow Analysis & Liveness",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Which of the following data-flow analyses helps identify variables whose values are not used in any future computation?`,
    options: [
      "Available expressions",
      "Reaching definitions",
      "Live variable analysis",
      "Very busy expressions"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- **Live Variable Analysis:** Determines for each program point whether the variable's current value may be read along some path in the future before being redefined. A variable is **dead** if its value is not used in any future computation. This directly enables **dead code elimination** and efficient **register allocation**.
- **Available Expressions:** Finds expressions whose values are already computed and available at a point (used for common sub-expression elimination).
- **Reaching Definitions:** Determines which variable definitions may reach a given program point (used for constant propagation and loop-invariant detection).
- **Very Busy Expressions:** Finds expressions evaluated along every execution path before any of their operands are modified (used for code hoisting).

**Correct Answer: Option 3 (Live variable analysis)**`
  },

  // ─── Q.2 (MSQ) ───
  {
    id: "me-cd-twt24-q02",
    difficulty: "medium",
    concept: "Ambiguity in Context-Free Grammars",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt24_q02.png",
    imageAlt: "Four CFGs for Q.2 testing unambiguous grammars",
    text: `Which of the following context free grammars are unambiguous?

1. $E \\to E + F \\mid F,\\quad F \\to F * G \\mid G,\\quad G \\to \\text{id}$
2. $S \\to \\text{ab}B,\\quad A \\to \\text{aa}B\\text{b} \\mid \\epsilon,\\quad B \\to \\text{bb}Aa$
3. $S \\to aSa \\mid bSb \\mid c$
4. $S \\to aSb \\mid ab \\mid \\epsilon$`,
    options: [
      "Grammar 1",
      "Grammar 2",
      "Grammar 3",
      "Grammar 4"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
1. **Grammar 1:** The canonical standard arithmetic expression grammar for $+$ and $*$ enforcing precedence and left-associativity. Every valid string has exactly one parse tree $\\rightarrow$ **Unambiguous**.
2. **Grammar 2:** 
   - $S \\to \\text{ab}B$
   - $B \\to \\text{bb}Aa$
   - $A \\to \\text{aa}Bb \\mid \\epsilon$
   Each step in derivations has deterministic, non-overlapping production choices. Every generated string has a unique leftmost derivation $\\rightarrow$ **Unambiguous**.
3. **Grammar 3:** Generates odd-length palindromes with an unambiguous center marker $c$: $\\{w c w^R \\mid w \\in \\{a, b\\}^*\\}$. The outer matching symbols are deterministically selected by the input string terminals $\\rightarrow$ **Unambiguous**.
4. **Grammar 4:** $S \\to aSb \\mid ab \\mid \\epsilon$. The string $ab$ has two distinct parse trees:
   - $S \\Rightarrow ab$
   - $S \\Rightarrow aSb \\Rightarrow a\\epsilon b = ab$  
   Hence, Grammar 4 is **Ambiguous**.

**Correct Answer: Grammars 1, 2, 3**`
  },

  // ─── Q.3 (SCQ) ───
  {
    id: "me-cd-twt24-q03",
    difficulty: "medium",
    concept: "Operator Precedence Parsing",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt24_q03.png",
    imageAlt: "Four grammars testing suitability for Operator Precedence Parser",
    text: `Which of the following grammars can be solved using operator precedence parser?`,
    options: [
      "$S \\to A + B \\mid A \\mid B,\\quad A \\to CD \\mid C \\mid D,\\quad B \\to C * D \\mid C \\mid D,\\quad C \\to \\text{id},\\quad D \\to \\text{id}$",
      "$E \\to E + E \\mid E * E \\mid E - E \\mid \\text{id}$",
      "$S \\to A + B,\\quad A \\to A * C \\mid C,\\quad B \\to B \\mid C \\mid C,\\quad C \\to \\text{id} \\mid \\epsilon$",
      "$A \\to \\beta A',\\quad A' \\to \\alpha A' \\mid \\epsilon$"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
An **Operator Grammar** must satisfy two fundamental conditions:
1. No production has $\\epsilon$ on the right-hand side.
2. No two non-terminals appear adjacent to each other on the right-hand side of any production.

- **Option 1:** Contains $A \\to CD$ (adjacent non-terminals $C$ and $D$) $\\rightarrow$ Not an operator grammar.
- **Option 2:** $E \\to E + E \\mid E * E \\mid E - E \\mid \\text{id}$ has no $\\epsilon$-productions and non-terminals are always separated by terminals. It is parsed by an operator precedence parser using operator precedence and associativity relations $\\rightarrow$ **Can be parsed by operator precedence parser**.
- **Option 3:** Contains $C \\to \\epsilon$ $\\rightarrow$ Not an operator grammar.
- **Option 4:** Contains $A' \\to \\epsilon$ $\\rightarrow$ Not an operator grammar.

**Correct Answer: Option 2**`
  },

  // ─── Q.4 (SCQ) ───
  {
    id: "me-cd-twt24-q04",
    difficulty: "medium",
    concept: "Liveness Analysis in Control Flow Graph",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt24_q04.png",
    imageAlt: "Control Flow Graph with blocks B1 to B7 for Liveness Analysis",
    text: `Consider the control flow graph given in the image. Which of the following variable is/are live at block $B_4$?`,
    options: [
      "$a$ only",
      "$a$ and $b$ only",
      "$a, b, c$",
      "No variable is live at $B_4$"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Recall the backward data-flow equations for Live Variable Analysis:
$$\\text{In}[B] = \\text{use}[B] \\cup (\\text{Out}[B] \\setminus \\text{def}[B])$$
$$\\text{Out}[B] = \\bigcup_{S \\in \\text{succ}(B)} \\text{In}[S]$$

Let us analyze the blocks:
- **$B_7$:** $c = a + b \\implies \\text{use}[B_7] = \\{a, b\\},\\; \\text{def}[B_7] = \\{c\\}$.  
  Since $B_7$ exits, $\\text{In}[B_7] = \\{a, b\\}$.
- **$B_5$:** $a = 1,\\; b = 2 \\implies \\text{def}[B_5] = \\{a, b\\},\\; \\text{use}[B_5] = \\emptyset$.  
  $$\\text{In}[B_5] = \\text{Out}[B_5] \\setminus \\{a, b\\} = \\{a, b\\} \\setminus \\{a, b\\} = \\emptyset$$
- **$B_6$:** $b = 3 \\implies \\text{def}[B_6] = \\{b\\},\\; \\text{use}[B_6] = \\emptyset$.  
  $$\\text{In}[B_6] = \\text{Out}[B_6] \\setminus \\{b\\} = \\{a, b\\} \\setminus \\{b\\} = \\{a\\}$$
- **$B_4$:** $a = 5 \\implies \\text{def}[B_4] = \\{a\\},\\; \\text{use}[B_4] = \\emptyset$.
  - Successors of $B_4$ are $B_5$ and $B_6$:
    $$\\text{Out}[B_4] = \\text{In}[B_5] \\cup \\text{In}[B_6] = \\emptyset \\cup \\{a\\} = \\{a\\}$$
  - Variable liveness at entry to block $B_4$:
    $$\\text{In}[B_4] = \\text{use}[B_4] \\cup (\\text{Out}[B_4] \\setminus \\text{def}[B_4]) = \\emptyset \\cup (\\{a\\} \\setminus \\{a\\}) = \\emptyset$$

Therefore, no variable is live upon entering block $B_4$.

**Correct Answer: Option 4 (No variable is live at $B_4$)**`
  },

  // ─── Q.5 (MSQ) ───
  {
    id: "me-cd-twt24-q05",
    difficulty: "medium",
    concept: "LR Parsing Properties & Hierarchy",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements is/are correct?`,
    options: [
      "If a grammar contains an $\\epsilon$-production, it can never be LR(0).",
      "If a grammar is LR(1), it might still have Reduce/Reduce conflicts when converted to LALR(1).",
      "Every SLR(1) grammar is also an LALR(1) grammar.",
      "None of these"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
1. **Statement 1 is False:** An $\\epsilon$-production creates an LR(0) item $[A \\to .]$. If this item is alone in its canonical state (or no shift items exist on terminal transitions), it does not cause any shift-reduce conflict. Hence, grammars with $\\epsilon$-productions can be LR(0).
2. **Statement 2 is True:** Merging LR(1) states with identical LR(0) cores merges their lookahead sets. While this can never introduce new shift/reduce conflicts, it can merge different reduce lookaheads and cause **Reduce/Reduce (R/R) conflicts**.
3. **Statement 3 is True:** The power hierarchy of LR parsers is strictly:
   $$\\text{LR}(0) \\subset \\text{SLR}(1) \\subset \\text{LALR}(1) \\subset \\text{LR}(1)$$
   Every SLR(1) grammar is therefore an LALR(1) grammar.

**Correct Answer: Statements 2 and 3**`
  },

  // ─── Q.6 (SCQ) ───
  {
    id: "me-cd-twt24-q06",
    difficulty: "medium",
    concept: "Context-Free Grammar Ambiguity",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt24_q06.png",
    imageAlt: "Four context-free grammars for Q.6",
    text: `Which of the following context free grammar are unambiguous?`,
    options: [
      "$T \\to T + F \\mid F,\\quad F \\to F * G \\mid G,\\quad G \\to \\text{id}$",
      "$S \\to AB \\mid \\text{aa}B,\\quad A \\to a \\mid Aa,\\quad B \\to b$",
      "$S \\to \\text{aXY} \\mid \\text{bYZ} \\mid \\epsilon,\\quad Z \\to aZ \\mid a,\\quad X \\to \\text{aXY} \\mid a \\mid \\epsilon,\\quad Y \\to \\text{bYZ} \\mid b \\mid \\epsilon$",
      "$S \\to aSb \\mid ab \\mid \\epsilon$"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- **Grammar 1:** Unambiguous standard expression grammar. Precedence and left-associativity uniquely determine a single parse tree for any expression.
- **Grammar 2:** The string $aab$ has two derivations:
  - $S \\Rightarrow AB \\Rightarrow AaB \\Rightarrow aaB \\Rightarrow aab$
  - $S \\Rightarrow aaB \\Rightarrow aab$  
  $\\implies$ **Ambiguous**.
- **Grammar 3:** Contains multiple null productions ($\\\\epsilon$) leading to multiple derivations for identical terminal strings $\\implies$ **Ambiguous**.
- **Grammar 4:** The string $ab$ has two derivations:
  - $S \\Rightarrow ab$
  - $S \\Rightarrow aSb \\Rightarrow a\\epsilon b = ab$  
  $\\implies$ **Ambiguous**.

**Correct Answer: Option 1**`
  },

  // ─── Q.7 (NAT) ───
  {
    id: "me-cd-twt24-q07",
    difficulty: "medium",
    concept: "LR(0) State Transitions & Item Sets",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 3,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt24_q07.png",
    imageAlt: "Augmented grammar S' -> S, S -> AA, A -> aA | b. Compute items in goto(closure(I0), a)",
    text: `Consider the augmented grammar with $\\{a, b\\}$ as the set of terminals:
$$S' \\to S$$
$$S \\to AA$$
$$A \\to aA \\mid b$$

Let $I_0$ be the LR(0) item $\\{S' \\to .S\\}$. Then $\\text{goto}(\\text{closure}(I_0), a)$ contains exactly ________ items.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Compute $\\text{closure}(I_0)$:**
   - Basis: $\\{S' \\to .S\\}$
   - Add $S$-productions with dot at beginning: $S \\to .AA$
   - Dot is before non-terminal $A$, add $A$-productions:
     - $A \\to .aA$
     - $A \\to .b$
   - Thus, $\\text{closure}(I_0) = \\{S' \\to .S,\\; S \\to .AA,\\; A \\to .aA,\\; A \\to .b\\}$.

2. **Compute $\\text{goto}(\\text{closure}(I_0), a)$:**
   - Move dot over terminal $a$ for items where dot precedes $a$:
     - From $A \\to .aA$, we get the basis item: $\\{A \\to a.A\\}$.
   - Take closure of the basis item $\\{A \\to a.A\\}$:
     - Since dot precedes non-terminal $A$, add all $A$-productions with dot at the beginning:
       - $A \\to .aA$
       - $A \\to .b$
   - The resulting set of items is:
     $$\\{A \\to a.A,\\quad A \\to .aA,\\quad A \\to .b\\}$$

The state contains exactly **3 items**.

**Correct Answer: 3**`
  },

  // ─── Q.8 (MSQ) ───
  {
    id: "me-cd-twt24-q08",
    difficulty: "easy",
    concept: "Parser Classes & Expressiveness",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements is/are correct?`,
    options: [
      "All LALR(1) grammar are unambiguous grammar",
      "All unambiguous grammars are LALR(1) grammar.",
      "All LR(0) grammar are SLR(1) grammar",
      "All SLR(1) grammar are LR(0) grammar"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
1. **Statement 1 is True:** Any grammar that can be parsed by an LALR(1) parser without conflicts is deterministic and therefore **unambiguous**.
2. **Statement 2 is False:** Not all unambiguous CFGs are LALR(1); there exist unambiguous grammars that require more lookahead (e.g. LR(2)) or are inherently non-LR.
3. **Statement 3 is True:** $\\text{LR}(0) \\subseteq \\text{SLR}(1)$. Any grammar that is LR(0) is automatically SLR(1) because SLR(1) simply restricts reductions to FOLLOW sets.
4. **Statement 4 is False:** SLR(1) is strictly more expressive than LR(0) ($\\text{LR}(0) \\subset \\text{SLR}(1)$).

**Correct Answer: Statements 1 and 3**`
  },

  // ─── Q.9 (MSQ) ───
  {
    id: "me-cd-twt24-q09",
    difficulty: "medium",
    concept: "LL(1) and SLR(1) Grammar Properties",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt24_q09.png",
    imageAlt: "Grammar G: S -> Aa | b, A -> AC | eps, C -> c",
    text: `Consider the following grammar G:
$$S \\to Aa \\mid b$$
$$A \\to AC \\mid \\epsilon$$
$$C \\to c$$

Which of the following is/are correct?`,
    options: [
      "$\\text{Follow}(A) = \\{a, c\\}$",
      "$G$ is not an LL(1) grammar",
      "$G$ is an SLR(1) grammar",
      "$\\text{First}(S) = \\{a, b\\}$"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
1. **$\\\\text{Follow}(A)$:**
   - From $S \\to Aa \\implies a \\in \\text{Follow}(A)$.
   - From $A \\to AC \\implies \\text{First}(C) = \\{c\\} \\subseteq \\text{Follow}(A)$.
   - Thus, $\\text{Follow}(A) = \\{a, c\\}$ $\\rightarrow$ **Statement 1 is Correct**.
2. **LL(1) Test:**
   - Production $A \\to AC$ is directly left-recursive.
   - Any left-recursive grammar cannot be LL(1) $\\rightarrow$ **Statement 2 is Correct**.
3. **SLR(1) Test:**
   - LR(0) items:
     - $I_0$: $S' \\to .S,\\; S \\to .Aa,\\; S \\to .b,\\; A \\to .AC,\\; A \\to .$
       - Shifts: on $b$.
       - Goto: on $S$, on $A$.
       - Reduce: $A \\to \\epsilon$ under $\\text{Follow}(A) = \\{a, c\\}$.
       - Shift terminal $b$ and reduce terminals $\\{a, c\\}$ are disjoint $\\rightarrow$ No conflict in $I_0$.
     - $I_1 = \\text{goto}(I_0, A) = \\{S \\to A.a,\\; A \\to A.C,\\; C \\to .c\\}$: shifts on $a, c$; no reduce $\\rightarrow$ No conflict.
     - $I_2 = \\text{goto}(I_1, C) = \\{A \\to AC.\\}$: reduce under $\\text{Follow}(A) = \\{a, c\\}$; no shift $\\rightarrow$ No conflict.
     - All other states are conflict-free.
     - Therefore, $G$ is an **SLR(1) grammar** $\\rightarrow$ **Statement 3 is Correct**.
4. **$\\\\text{First}(S)$:**
   - Since $A \\to \\epsilon$, $\\text{First}(Aa) = (\\text{First}(A) \\setminus \\{\\epsilon\\}) \\cup \\{a\\} = \\{a, c\\}$.
   - $\\text{First}(b) = \\{b\\}$.
   - $\\text{First}(S) = \\{a, b, c\\} \\neq \\{a, b\\}$ $\\rightarrow$ **Statement 4 is Incorrect**.

**Correct Answer: Statements 1, 2, 3**`
  },

  // ─── Q.10 (SCQ) ───
  {
    id: "me-cd-twt24-q10",
    difficulty: "easy",
    concept: "Bottom-Up Parsing Derivations",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `A shift-reduce parser constructs a parse tree by performing reductions on the input string until the start symbol is obtained. The sequence of derivation corresponding to this process is:`,
    options: [
      "Leftmost derivation",
      "Leftmost derivation in reverse",
      "Rightmost derivation",
      "Rightmost derivation in reverse"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
A bottom-up (shift-reduce) parser starts at the input string (leaves) and reduces substrings (handles) step by step to reach the start symbol (root). 
This reduction sequence corresponds directly to tracing a **rightmost derivation in reverse** (also called a canonical parse).

**Correct Answer: Option 4 (Rightmost derivation in reverse)**`
  },

  // ─── Q.11 (SCQ) ───
  {
    id: "me-cd-twt24-q11",
    difficulty: "medium",
    concept: "Computation of FOLLOW Set",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt24_q11.png",
    imageAlt: "CFG for Q.11: S -> SPQR, P -> pPt | eps, Q -> qQ | eps, R -> Rr | Qm | eps",
    text: `Compute the FOLLOW set of $S$ for the following CFG:
$$S \\to SPQR$$
$$P \\to pPt \\mid \\epsilon$$
$$Q \\to qQ \\mid \\epsilon$$
$$R \\to Rr \\mid Qm \\mid \\epsilon$$`,
    options: [
      "$\\{p, q, r, m, \\$\\}$",
      "$\\{p, q, r, t, \\$\\}$",
      "$\\{q, r, m, \\$\\}$",
      "$\\{p, q, r, m, t, \\$\\}$"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. $S$ is the start symbol $\\implies \\$ \\in \\text{FOLLOW}(S)$.
2. From the production $S \\to SPQR$, $S$ is followed by the non-terminal sequence $PQR$.
   Therefore, $(\\text{FIRST}(PQR) \\setminus \\{\\epsilon\\}) \\subseteq \\text{FOLLOW}(S)$.
3. **Calculate FIRST sets:**
   - $\\text{FIRST}(P) = \\{p, \\epsilon\\}$
   - $\\text{FIRST}(Q) = \\{q, \\epsilon\\}$
   - For $R$:
     - $R \\to \\epsilon \\implies \\epsilon \\in \\text{FIRST}(R)$
     - $R \\to Qm \\implies \\text{FIRST}(Qm) = \\{q, m\\}$
     - $R \\to Rr \\implies r \\in \\text{FIRST}(R)$
     - So $\\text{FIRST}(R) = \\{q, r, m, \\epsilon\\}$
4. **Calculate $\\\\text{FIRST}(PQR)$:**
   - Since $\\epsilon \\in \\text{FIRST}(P)$, we add $\\text{FIRST}(QR)$.
   - Since $\\epsilon \\in \\text{FIRST}(Q)$, we add $\\text{FIRST}(R)$.
   - Thus:
     $$\\text{FIRST}(PQR) = \\{p, q, r, m, \\epsilon\\}$$
5. Adding the non-$\\epsilon$ symbols to $\\text{FOLLOW}(S)$ along with $\\$$:
   $$\\text{FOLLOW}(S) = \\{p, q, r, m, \\$\\}$$

**Correct Answer: Option 1 (\\{p, q, r, m, \\$\\})**`
  },

  // ─── Q.12 (NAT) ───
  {
    id: "me-cd-twt24-q12",
    difficulty: "medium",
    concept: "SLR(1) Parsing Table State Count",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 7,
    natTolerance: 0,
    text: `Consider the following CFG:
$$S \\to Ab \\mid ab$$
$$A \\to a \\mid f$$

How many states are in the SLR(1) parsing construction?`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Augmented Grammar:
0. $S' \\to S$
1. $S \\to Ab$
2. $S \\to ab$
3. $A \\to a$
4. $A \\to f$

Construct the canonical set of LR(0) items:
- **$I_0 = \\text{closure}(\\{S' \\to .S\\})$:**
  $$\\{S' \\to .S,\\quad S \\to .Ab,\\quad S \\to .ab,\\quad A \\to .a,\\quad A \\to .f\\}$$
- Transitions from $I_0$:
  - $\\text{goto}(I_0, S) = I_1: \\{S' \\to S.\\}$
  - $\\text{goto}(I_0, A) = I_2: \\{S \\to A.b\\}$
  - $\\text{goto}(I_0, a) = I_3: \\{S \\to a.b,\\quad A \\to a.\\}$
  - $\\text{goto}(I_0, f) = I_4: \\{A \\to f.\\}$
- Transitions from $I_2$:
  - $\\text{goto}(I_2, b) = I_5: \\{S \\to Ab.\\}$
- Transitions from $I_3$:
  - $\\text{goto}(I_3, b) = I_6: \\{S \\to ab.\\}$

No new states are generated. The states are $I_0, I_1, I_2, I_3, I_4, I_5, I_6$, totaling **7 states**.

**Correct Answer: 7**`
  },

  // ─── Q.13 (MSQ) ───
  {
    id: "me-cd-twt24-q13",
    difficulty: "medium",
    concept: "Loop Optimization Techniques",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt24_q13.png",
    imageAlt: "Code comparison before and after compiler optimization",
    text: `Consider the following code:

**Before:**
\`\`\`c
for (i = 0; i < n; i++) {
    t = y + z;
    a[i] = 6 * i + t;
    if (flag)
        b[i] = y + z;
}
\`\`\`

**After:**
\`\`\`c
t = y + z;
for (i = 0; i < n; i++) {
    a[i] = 6 * i + t;
    if (flag)
        b[i] = t;
}
\`\`\`

Which of the following optimizations are applied?`,
    options: [
      "Loop invariant code motion",
      "Common sub-expression elimination",
      "Dead code elimination",
      "Strength reduction"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    explanation: `### Solution
Comparing the Before and After code:
1. **Loop Invariant Code Motion (Hoisting):**
   - The expression \`y + z\` does not change in any iteration of the loop (neither \`y\` nor \`z\` is modified).
   - The assignment \`t = y + z;\` was moved outside the loop prior to execution. $\\rightarrow$ **Applied**.
2. **Common Sub-Expression Elimination:**
   - Inside the conditional block, the repeated computation \`b[i] = y + z;\` is replaced with the already evaluated result \`b[i] = t;\`. $\\rightarrow$ **Applied**.
3. **Dead Code Elimination:**
   - No statements were removed as unused or unreachable $\\rightarrow$ Not applied.
4. **Strength Reduction:**
   - The multiplication \`6 * i\` was not replaced with repeated additions $\\rightarrow$ Not applied.

**Correct Answer: Options 1 and 2**`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-cd-twt24-q14",
    difficulty: "hard",
    concept: "LL(1) Parsing Table Entries",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt24_q14.png",
    imageAlt: "Grammar with non-terminals S, A, B, C, D and LL(1) table options",
    text: `Consider the following grammar:
$$S \\to aABbCD \\mid \\epsilon$$
$$A \\to ASd \\mid \\epsilon$$
$$B \\to Sac \\mid hC \\mid \\epsilon$$
$$C \\to Sf \\mid Cg$$
$$D \\to aBD \\mid \\epsilon$$

Which of the following is the correct set of entries in the LL(1) parsing table?  
[Note that $(X, a)$ where $X$ is a non-terminal and $a$ is a terminal denotes the cell in the table corresponding to row $X$ and column $a$]`,
    options: [
      "$(A, d) : A \\to ASd,\\; A \\to \\epsilon$; $(B, f) : B \\to \\epsilon,\\; B \\to hC$",
      "$(A, d) : A \\to \\epsilon,\\; A \\to ASd$; $(B, f) : B \\to \\epsilon$",
      "$(A, b) : A \\to \\epsilon$; $(C, a) : C \\to Sf,\\; C \\to Cg$",
      "$(A, b) : A \\to ASd,\\; A \\to \\epsilon$; $(C, a) : C \\to Sf$"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Let us calculate FIRST and FOLLOW sets for the relevant non-terminals:
1. **FIRST Sets:**
   - $\\text{FIRST}(S) = \\{a, \\epsilon\\}$
   - $\\text{FIRST}(A) = \\{a, d, \\epsilon\\}$ (since $A \\to ASd$ and $S \\to \\epsilon \\implies d \\in \\text{FIRST}(A)$)
   - $\\text{FIRST}(B) = \\{a, h, \\epsilon\\}$
   - $\\text{FIRST}(C) = \\{a, f\\}$

2. **FOLLOW Sets:**
   - $\\text{FOLLOW}(A) = \\{a, b, d, h\\}$
   - $\\text{FOLLOW}(B) = \\{\\$, a, b, d, f\\}$ (since $B$ can precede $D$, and $D \\to \\epsilon \\implies \\text{FOLLOW}(B) \\supseteq \\text{FOLLOW}(S)$, which includes $f$ from $C \\to Sf$)

3. **Table Entries:**
   - For cell $(A, d)$:
     - $d \\in \\text{FIRST}(ASd) \\implies A \\to ASd \\in M[A, d]$.
     - $d \\in \\text{FOLLOW}(A) \\implies A \\to \\epsilon \\in M[A, d]$.
     - Thus: $M[A, d] = \\{A \\to \\epsilon,\\; A \\to ASd\\}$.
   - For cell $(B, f)$:
     - $\\text{FIRST}(Sac) = \\{a\\}$ and $\\text{FIRST}(hC) = \\{h\\}$. Neither contains $f$.
     - Since $f \\in \\text{FOLLOW}(B)$, the $\\epsilon$-rule $B \\to \\epsilon$ is placed in $M[B, f]$.
     - Thus: $M[B, f] = \\{B \\to \\epsilon\\}$.

This exactly matches Option 2.

**Correct Answer: Option 2**`
  },

  // ─── Q.15 (NAT) ───
  {
    id: "me-cd-twt24-q15",
    difficulty: "medium",
    concept: "FOLLOW Set Calculation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 3,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt24_q15.png",
    imageAlt: "Arithmetic expression grammar with E, R, T, Y, F",
    text: `Consider the following grammar:
$$E \\to TR$$
$$R \\to +TR \\mid \\epsilon$$
$$T \\to FY$$
$$Y \\to *FY \\mid \\epsilon$$
$$F \\to (E) \\mid \\text{id}$$

How many terminal symbols (including the end marker $\\$$) are present in the set $\\text{Follow}(R) \\cup \\text{Follow}(Y)$?`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **$\\\\text{FOLLOW}(E)$:**
   - $E$ is start symbol $\\implies \\$ \\in \\text{FOLLOW}(E)$.
   - From $F \\to (E) \\implies ) \\in \\text{FOLLOW}(E)$.
   - Thus, $\\text{FOLLOW}(E) = \\{), \\$\\}$.

2. **$\\\\text{FOLLOW}(R)$:**
   - From $E \\to TR \\implies \\text{FOLLOW}(R) = \\text{FOLLOW}(E) = \\{), \\$\\}$.
   - From $R \\to +TR \\implies \\text{FOLLOW}(R) \\subseteq \\text{FOLLOW}(R)$.
   - Thus, $\\text{FOLLOW}(R) = \\{), \\$\\}$.

3. **$\\\\text{FOLLOW}(T)$:**
   - From $E \\to TR$, $T$ is followed by $R$:
     $$\\text{FOLLOW}(T) = (\\text{FIRST}(R) \\setminus \\{\\epsilon\\}) \\cup \\text{FOLLOW}(E) = \\{+, ), \\$\\}$$

4. **$\\\\text{FOLLOW}(Y)$:**
   - From $T \\to FY \\implies \\text{FOLLOW}(Y) = \\text{FOLLOW}(T) = \\{+, ), \\$\\}$.
   - From $Y \\to *FY \\implies \\text{FOLLOW}(Y) \\subseteq \\text{FOLLOW}(Y)$.
   - Thus, $\\text{FOLLOW}(Y) = \\{+, ), \\$\\}$.

5. **Union Set:**
   $$\\text{FOLLOW}(R) \\cup \\text{FOLLOW}(Y) = \\{), \\$\\} \\cup \\{+, ), \\$\\} = \\{+, ), \\$\\}$$

The set contains **3** terminal symbols ($+$, $)$, and $\\$$).

**Correct Answer: 3**`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-cd-twt24-q16",
    difficulty: "medium",
    concept: "SLR(1) Parsing Table Construction",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt24_q16.png",
    imageAlt: "SLR(1) table with missing entries E1, E2, E3",
    text: `Consider the following augmented grammar with labels $a$ and $b$:
$$S' \\to S$$
$$a : S \\to (S)S$$
$$b : S \\to \\epsilon$$

LR(0) sets are given as in the image for the above grammar.
If the SLR(1) table is constructed as shown, find the missing entries at $E_1, E_2$ and $E_3$ respectively.`,
    options: [
      "$r_a,\\; r_b,\\; 5$",
      "$r_a,\\; r_a,\\; 6$",
      "$r_b,\\; r_a,\\; 5$",
      "$r_b,\\; r_b,\\; 6$"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
1. **Compute $\\\\text{FOLLOW}(S)$:**
   - $S$ is start symbol $\\implies \\$ \\in \\text{FOLLOW}(S)$.
   - From $S \\to (S)S$:
     - The inner $S$ is followed by terminal \`)\` $\\implies ) \\in \\text{FOLLOW}(S)$.
     - The outer $S$ is at the right end $\\implies \\text{FOLLOW}(S) \\subseteq \\text{FOLLOW}(S)$.
   - Therefore, $\\text{FOLLOW}(S) = \\{), \\$\\}$.

2. **Entries $E_1$ and $E_2$ (State 3):**
   - State 3 contains the reduce item $S \\to .$, corresponding to rule $b: S \\to \\epsilon$.
   - In SLR(1), reductions are placed in columns matching $\\text{FOLLOW}(S)$:
     - Column \`)\`: $E_1 = r_b$
     - Column \`$\`: $E_2 = r_b$

3. **Entry $E_3$ (State 5):**
   - State 5 contains:
     $$\\{S \\to (S).S,\\quad S \\to .(S)S,\\quad S \\to .\\}$$
   - On non-terminal $S$, moving the dot gives $S \\to (S)S.$, which is State 6.
   - Therefore, $\\text{goto}(5, S) = 6 \\implies E_3 = 6$.

Thus, $(E_1, E_2, E_3) = (r_b,\\; r_b,\\; 6)$.

**Correct Answer: Option 4 ($r_b,\\; r_b,\\; 6$)**`
  },

  // ─── Q.17 (MSQ) ───
  {
    id: "me-cd-twt24-q17",
    difficulty: "medium",
    concept: "Rules for FOLLOW Set Computation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt24_q17.png",
    imageAlt: "Statements regarding FOLLOW set computation for Q.17",
    text: `Which of the following statements are correct regarding the computation of $\\text{FOLLOW}(A)$ for a non-terminal $A$?`,
    options: [
      "If there is a production $S \\to \\alpha A \\beta$, then every symbol in $\\text{FIRST}(\\beta) - \\{\\epsilon\\}$ is in $\\text{FOLLOW}(A)$.",
      "If there is a production $S \\to \\alpha A \\beta$ and $\\epsilon \\in \\text{FIRST}(\\beta)$, then $\\text{FOLLOW}(S) \\subseteq \\text{FOLLOW}(A)$.",
      "$\\text{FOLLOW}(A)$ can contain $\\epsilon$ if $A$ appears as the last symbol of a production.",
      "To compute $\\text{FOLLOW}(A)$, we must examine all productions in which $A$ appears on the righthand side."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    explanation: `### Solution
Standard rules for calculating $\\text{FOLLOW}(A)$ in compiler design:
1. **Rule 1:** If there is a production $S \\to \\alpha A \\beta$, then everything in $\\text{FIRST}(\\beta)$ except $\\epsilon$ is placed in $\\text{FOLLOW}(A)$. $\\rightarrow$ **Statement 1 is Correct**.
2. **Rule 2:** If there is a production $S \\to \\alpha A \\beta$ where $\\beta \\Rightarrow^* \\epsilon$ (i.e. $\\epsilon \\in \\text{FIRST}(\\beta)$) or $S \\to \\alpha A$, then everything in $\\text{FOLLOW}(S)$ is in $\\text{FOLLOW}(A)$ (i.e., $\\text{FOLLOW}(S) \\subseteq \\text{FOLLOW}(A)$). $\\rightarrow$ **Statement 2 is Correct**.
3. **Rule 3:** $\\epsilon$ is **never** added to any FOLLOW set; the end-of-input marker $\\$$ is used instead. $\\rightarrow$ **Statement 3 is Incorrect**.
4. **Rule 4:** Since $\\text{FOLLOW}(A)$ is determined exclusively by symbols that can immediately follow $A$, all occurrences of $A$ on the RHS of grammar productions must be checked. $\\rightarrow$ **Statement 4 is Correct**.

**Correct Answer: Statements 1, 2, and 4**`
  }
];

export const MADE_EASY_CD_TWT24_CHAPTER: Chapter = {
  id: "cd-gate-2027-twt-24",
  name: "GATE 2027 CS TOPIC WISE TEST - 24 (Compiler Design)",
  description: "Made Easy GATE 2027 Test 24: Parsing (LL(1), LR(0), SLR(1), Operator Precedence), Ambiguity, Data-Flow Analysis & Optimizations",
  questions: MADE_EASY_CD_TWT24_QUESTIONS
};
