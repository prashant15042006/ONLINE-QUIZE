import type { Question, Chapter } from "./quizData";

export const MADE_EASY_CD_TWT23_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-cd-twt23-q01",
    difficulty: "easy",
    concept: "Lexical Analysis — Maximal Munch",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt23_q01.png",
    imageAlt: "Regular expressions L1: 0(0|1)*0 and L2: 1(0|1)*1 with input 011011",
    text: `A lexical analyzer uses the following regular expressions for tokens over {0, 1}:
$$L_1 : 0(0 \\mid 1)^*0$$
$$L_2 : 1(0 \\mid 1)^*1$$

For the input string \`011011\`, what is the sequence of tokens if the analyzer uses the longest prefix match (maximal munch) rule?`,
    options: [
      "L₁ L₂",
      "L₁ followed by an error",
      "L₁ L₂ L₃",
      "L₂ L₁"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
Input string: \`011011\`.

The lexical analyzer applies the **longest prefix match (maximal munch)** rule starting from the left:

1. **First Token:**
   - Starts with \`0\`, so it can only match $L_1 = 0(0 \\mid 1)^*0$ (must begin and end with \`0\`).
   - Prefixes:
     - \`0\` (does not match, length < 2)
     - \`01\` (does not end with 0)
     - \`011\` (does not end with 0)
     - \`0110\` (starts with 0, ends with 0 $\\rightarrow$ **matches $L_1$**, length 4)
     - \`01101\` (does not end with 0)
     - \`011011\` (does not end with 0)
   - The longest valid matching prefix is \`0110\`, which emits token **$L_1$**.

2. **Second Token:**
   - Remaining unconsumed string: \`11\`.
   - Starts with \`1\`, so it can only match $L_2 = 1(0 \\mid 1)^*1$ (must begin and end with \`1\`).
   - Prefixes:
     - \`1\` (does not match, length < 2)
     - \`11\` (starts with 1, ends with 1 $\\rightarrow$ **matches $L_2$**, length 2)
   - The entire remaining string matches **$L_2$**.

The sequence of generated tokens is **$L_1 L_2$**.

**Correct Answer: Option 1 (L₁ L₂)**`
  },

  // ─── Q.2 (SCQ) ───
  {
    id: "me-cd-twt23-q02",
    difficulty: "easy",
    concept: "Compiler Phases & Roles",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt23_q02.png",
    imageAlt: "Match List-I with List-II: Semantic analyzer, Symbol table, Target code generator, Parser",
    text: `Match **List-I** with **List-II** and select the correct answer using the codes given below the lists:

| List-I | List-II |
|:---|:---|
| A. Semantic analyzer | 1. Machine code |
| B. Symbol table | 2. Type checking |
| C. Target code generator | 3. Stores identifiers and attributes |
| D. Parser | 4. Parse tree |`,
    options: [
      "(a) A-2, B-3, C-1, D-4",
      "(b) A-3, B-2, C-4, D-1",
      "(c) A-2, B-1, C-3, D-4",
      "(d) A-4, B-3, C-2, D-1"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- **A. Semantic analyzer:** Performs static semantic checks like **Type checking** $\\rightarrow$ **2**.
- **B. Symbol table:** Data structure that **Stores identifiers and their attributes** (type, scope, address) $\\rightarrow$ **3**.
- **C. Target code generator:** Translates intermediate code into target **Machine code** $\\rightarrow$ **1**.
- **D. Parser (Syntax analyzer):** Verifies syntax according to grammar and produces a **Parse tree** $\\rightarrow$ **4**.

Matching code: **A-2, B-3, C-1, D-4** $\\rightarrow$ **(a)**.

**Correct Answer: Option 1 ((a))**`
  },

  // ─── Q.3 (SCQ) ───
  {
    id: "me-cd-twt23-q03",
    difficulty: "easy",
    concept: "Compiler Error Detection Phases",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `In a compiler, which phase is responsible for identifying the error *Assignment to a constant variable*?`,
    options: [
      "Lexical analysis",
      "Syntax analysis",
      "Semantic analysis",
      "Code generation"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- Checking whether an identifier is declared as a \`const\` and whether it is being illegally assigned a new value is a **static semantic rule**.
- The syntax analyzer only checks grammatical structure (e.g., \`variable = expression;\` is syntactically valid).
- The **Semantic Analyzer** verifies semantic consistency using the symbol table attributes (e.g., constant attribute, type compatibility).

**Correct Answer: Option 3 (Semantic analysis)**`
  },

  // ─── Q.4 (SCQ) ───
  {
    id: "me-cd-twt23-q04",
    difficulty: "medium",
    concept: "C Compilation vs Linker Errors",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt23_q04.png",
    imageAlt: "C program calling fun() with no declaration",
    text: `Identify the type of error identified in the earliest phase during compilation of the following program:
\`\`\`c
#include <stdio.h>
main()
{
    int gate, exam, rank;
    gate = exam = rank = 2024 + 1;
    printf("%c", rank);
fun();
}
\`\`\``,
    options: [
      "Lexical error",
      "Syntax error",
      "Semantic error",
      "No error"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Let's analyze the program during compilation:
1. \`main()\` with no return type defaults to \`int main()\` under C89 standards.
2. \`gate = exam = rank = 2024 + 1;\` is a valid chained assignment expression.
3. \`printf("%c", rank);\` is syntactically and semantically valid.
4. \`fun();\` is called without a prior prototype/declaration:
   - In C89, an undeclared function is assumed to have an **implicit declaration** \`extern int fun();\`.
   - The compiler emits no error and successfully completes all compilation phases!
   - (An unresolved symbol error only occurs at link time if \`fun\` is never defined in any object file).

Therefore, during the **compilation phases**, there is **No error**.

**Correct Answer: Option 4 (No error)**`
  },

  // ─── Q.5 (SCQ) ───
  {
    id: "me-cd-twt23-q05",
    difficulty: "easy",
    concept: "Language Processing Tools",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt23_q05.png",
    imageAlt: "Match List-I with List-II: Loader, Linker, Assembler, Preprocessor",
    text: `Match **List-I** with **List-II** and select the correct answer using the codes given below the lists:

| List-I | List-II |
|:---|:---|
| A. Puts together all of the executable object files into memory for execution. | 1. Linker |
| B. Linking relocatable machine code with other relocatable object files into code that runs on machine. | 2. Loader |
| C. It takes the output generated by the compiler as input and generates relocatable machine code as the output. | 3. Assembler |
| D. Expanding macros into source language statements. | 4. Preprocessor |`,
    options: [
      "(a) A-1, B-2, C-3, D-4",
      "(b) A-2, B-1, C-3, D-4",
      "(c) A-3, B-4, C-2, D-1",
      "(d) A-4, B-3, C-1, D-2"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **A. Puts together all executable object files into memory:** This is the role of the **Loader** $\\rightarrow$ **2**.
- **B. Linking relocatable machine code into executable code:** This is the role of the **Linker** $\\rightarrow$ **1**.
- **C. Takes compiler assembly output and generates relocatable machine code:** This is the **Assembler** $\\rightarrow$ **3**.
- **D. Expanding macros and header inclusions:** Performed by the **Preprocessor** $\\rightarrow$ **4**.

Matching: **A-2, B-1, C-3, D-4** $\\rightarrow$ **(b)**.

**Correct Answer: Option 2 ((b))**`
  },

  // ─── Q.6 (SCQ) ───
  {
    id: "me-cd-twt23-q06",
    difficulty: "medium",
    concept: "Symbol Table Characteristics",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider the following statements:
I. Symbol table entries may include attributes like scope level and storage location.
II. Symbol table is not required once semantic analysis is completed.
III. Efficient symbol table implementation improves compiler performance.

Which of the above statements is/are correct?`,
    options: [
      "I only",
      "I and III only",
      "II and III only",
      "I, II, and III"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **Statement I is correct:** The symbol table records identifier names alongside their attributes, such as data type, scope level, size, and relative storage offset/memory location.
- **Statement II is incorrect:** The symbol table is heavily utilized in later compiler phases, including **Intermediate Code Generation**, **Code Optimization**, and **Target Code Generation** (for register allocation and memory address binding).
- **Statement III is correct:** Symbol table lookup and insertion operations occur millions of times during compilation; using hash tables or search trees directly improves overall compiler speed.

Thus, **I and III only** are correct.

**Correct Answer: Option 2 (I and III only)**`
  },

  // ─── Q.7 (NAT) ───
  {
    id: "me-cd-twt23-q07",
    difficulty: "medium",
    concept: "L-Attributed SDT Violations",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 1,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt23_q07.png",
    imageAlt: "SDTS: S -> ABC {B.i = f(S.i, A.s, C.s); C.i = g(S.i, B.s)}",
    text: `Consider the following syntax-directed translation scheme (SDTS), where $S, A, B, C$ are nonterminals:
$$S \\rightarrow ABC \\quad \\{B.i = f(S.i, A.s, C.s);\\quad C.i = g(S.i, B.s)\\}$$

If $i$ denotes an inherited attribute and $s$ denotes a synthesized attribute, how many attribute assignments in the above SDTS violate the requirements of an L-attributed grammar?`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
In an **L-attributed SDT**, an inherited attribute of a grammar symbol $Y_j$ on the RHS of production $X \\rightarrow Y_1 Y_2 \\dots Y_n$ can depend ONLY on:
1. Inherited attributes of the parent $X$.
2. Any attributes (synthesized or inherited) of symbols appearing to the **left** of $Y_j$ ($Y_1, \\dots, Y_{j-1}$).
3. Inherited attributes of $Y_j$ itself (acyclic).

Let's check each assignment:
1. **$B.i = f(S.i, A.s, C.s)$:**
   - $S.i$ (parent's inherited attribute): Allowed.
   - $A.s$ (left sibling's attribute): Allowed.
   - $C.s$ (right sibling's attribute): **NOT ALLOWED** in L-attributed SDT.
   $\\rightarrow$ **Violates L-attributed definition.** (1 violation)

2. **$C.i = g(S.i, B.s)$:**
   - $S.i$ (parent's inherited attribute): Allowed.
   - $B.s$ (left sibling's attribute): Allowed.
   $\\rightarrow$ **Satisfies L-attributed definition.**

Only **1** attribute assignment violates the requirements.

**Correct Answer: 1**`
  },

  // ─── Q.8 (SCQ) ───
  {
    id: "me-cd-twt23-q08",
    difficulty: "easy",
    concept: "Code Optimization Techniques",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt23_q08.png",
    imageAlt: "Match List-I with List-II: Common subexpression elimination, Constant folding, Strength reduction, Induction variable",
    text: `Match **List-I** with **List-II** and select the correct answer using the codes given below the lists:

| List-I | List-II |
|:---|:---|
| A. Common sub expression elimination | 1. \`x = 2 + 3;\` |
| B. Constant folding | 2. \`x = x * 2;\` |
| C. Strength reduction | 3. \`for (i = 0; i < 10; i = i + 2);\` |
| D. Induction variable | 4. \`x = (x + 2) * (x + 2);\` |`,
    options: [
      "(a) A-4, B-1, C-2, D-3",
      "(b) A-3, B-1, C-2, D-4",
      "(c) A-4, B-2, C-1, D-3",
      "(d) A-3, B-2, C-1, D-4"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- **A. Common sub expression elimination:** In \`x = (x + 2) * (x + 2);\`, the subexpression \`(x + 2)\` is computed once and reused $\\rightarrow$ **4**.
- **B. Constant folding:** In \`x = 2 + 3;\`, compile-time constant arithmetic is evaluated to \`5\` $\\rightarrow$ **1**.
- **C. Strength reduction:** In \`x = x * 2;\`, an expensive multiplication operation is replaced with cheaper addition or bit-shift (\`x + x\` or \`x << 1\`) $\\rightarrow$ **2**.
- **D. Induction variable:** In \`for (i = 0; i < 10; i = i + 2);\`, \`i\` is a variable whose value changes linearly in every loop iteration $\\rightarrow$ **3**.

Matching: **A-4, B-1, C-2, D-3** $\\rightarrow$ **(a)**.

**Correct Answer: Option 1 ((a))**`
  },

  // ─── Q.9 (MCQ) ───
  {
    id: "me-cd-twt23-q09",
    difficulty: "medium",
    concept: "SDT Evaluation Characteristics",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements is/are correct regarding syntax-directed translation schemes (SDT)?`,
    options: [
      "In an L-attributed SDT, inherited attributes of a symbol can depend on the synthesized attributes of its right siblings.",
      "Post-order traversal of a parse tree is sufficient to evaluate S-attributed SDTs.",
      "An SDT that is not L-attributed may still be evaluatable if its dependency graph is acyclic.",
      "An L-attributed SDT can always be evaluated during a single top-down (left-to-right) pass."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2, 3],
    explanation: `### Solution
- **Statement 1 is incorrect:** In L-attributed definitions, dependencies can only flow from parent and **left siblings**, never right siblings.
- **Statement 2 is correct:** S-attributed definitions contain only synthesized attributes, which evaluate bottom-up from children to parents, perfectly matching a post-order traversal.
- **Statement 3 is correct:** As long as the attribute dependency graph has no directed cycles, attributes can always be evaluated in topological order, even if the scheme is not strictly L-attributed.
- **Statement 4 is correct:** L-attributed SDTs are specifically designed so that all attributes can be evaluated in a single depth-first, left-to-right top-down traversal.

**Correct Statements: 2, 3, and 4**`
  },

  // ─── Q.10 (NAT) ───
  {
    id: "me-cd-twt23-q10",
    difficulty: "medium",
    concept: "SDTS Parse Tree Leaf Counting",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 3,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt23_q10.png",
    imageAlt: "SDTS for counting parse tree leaves on input (a, (a, a))",
    text: `Consider the following syntax-directed translation scheme (SDTS) to count the number of leaves in a parse tree:
$$S \\rightarrow (L) \\quad \\{S.count = L.count\\}$$
$$L \\rightarrow L, S \\quad \\{L.count = L_1.count + S.count\\}$$
$$L \\rightarrow S \\quad \\{L.count = S.count\\}$$
$$S \\rightarrow a \\quad \\{S.count = 1\\}$$

What is the value of \`S.count\` for the input string: \`(a, (a, a))\`? ________`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let's evaluate the parse tree bottom-up:
1. Inner list \`(a, a)\`:
   - Left $a$: $S.count = 1$
   - Right $a$: $S.count = 1$
   - $L \\rightarrow a, a$: $L.count = 1 + 1 = 2$
   - $S \\rightarrow (L)$: $S.count = 2$
2. Outer list \`(a, (a, a))\`:
   - First element is $a$: $S.count = 1$
   - Second element is \`(a, a)\`: $S.count = 2$
   - Outer $L$: $L.count = 1 + 2 = 3$
   - Root $S \\rightarrow (L)$: $S.count = 3$

The value of \`S.count\` is **3**.

**Correct Answer: 3**`
  },

  // ─── Q.11 (SCQ) ───
  {
    id: "me-cd-twt23-q11",
    difficulty: "medium",
    concept: "SDTS Semantic Action Deduction",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt23_q11.png",
    imageAlt: "SDTS with E -> E1 # T {E.val = E1.val * T.val} and T -> T1 & F {S1}",
    text: `Consider the following syntax-directed translation:
$$E \\rightarrow E_1\\ \\#\\ T \\quad \\{E.val = E_1.val \\times T.val\\}$$
$$E \\rightarrow T \\quad \\{E.val = T.val\\}$$
$$T \\rightarrow T_1\\ \\&\\ F \\quad \\{S_1\\}$$
$$T \\rightarrow F \\quad \\{T.val = F.val\\}$$
$$F \\rightarrow \\text{Num} \\quad \\{F.val = \\text{Num}\\}$$

If the expression \`16 # 12 & 4 # 16 & 12 # 4 & 2\` is evaluated to \`1024\`, which of the following rules will be placed at $S_1$?`,
    options: [
      "T.val = T₁.val – F.val",
      "T.val = T₁.val × F.val",
      "T.val = T₁.val + F.val",
      "T.val = T₁.val ÷ F.val"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
**1. Operator Precedence and Grouping:**
- $\\&$ is at the $T$ level (higher precedence).
- $\\#$ is at the $E$ level (lower precedence, multiplication: $\\times$).
- The expression groups as:
$$16 \\times (12\\ \\&\\ 4) \\times (16\\ \\&\\ 12) \\times (4\\ \\&\\ 2) = 1024$$

**2. Dividing out the initial constant 16:**
$$(12\\ \\&\\ 4) \\times (16\\ \\&\\ 12) \\times (4\\ \\&\\ 2) = \\frac{1024}{16} = 64$$

**3. Testing the options for $S_1$:**
- **Option 1 (Subtraction):**
  $$(12 - 4) \\times (16 - 12) \\times (4 - 2) = 8 \\times 4 \\times 2 = 64$$
  $$16 \\times 64 = 1024 \\quad \\text{(Matches!)}$$
- **Option 2 (Multiplication):** $48 \\times 192 \\times 8 \\gg 1024$.
- **Option 3 (Addition):** $16 \\times 28 \\times 6 = 2688 \\ne 64$.
- **Option 4 (Division):** $3 \\times (4/3) \\times 2 = 8 \\ne 64$.

Thus, $S_1$ is **$T.val = T_1.val - F.val$**.

**Correct Answer: Option 1**`
  },

  // ─── Q.12 (NAT) ───
  {
    id: "me-cd-twt23-q12",
    difficulty: "hard",
    concept: "Custom Operator Precedence and Associativity",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 65536,
    natTolerance: 10,
    imageUrl: "/images/made_easy/twt23_q12.png",
    imageAlt: "Precedence table: - (4, Left), * (3, Left), + (2, Right), ^ (1, Right)",
    text: `The attributes of four arithmetic operators with precedence and associativity are shown in the table:

| Operator | Precedence | Associativity |
|:---:|:---:|:---:|
| $*$ | 3 | Left |
| $-$ | 4 | Left |
| $+$ | 2 | Right |
| $\\uparrow$ | 1 | Right |

*(Higher number has higher precedence).*

The value of the expression \`10 – 6 – 2 ↑ 8 – 6 + 1 * 2 ↑ 1 + 1\` is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Precedence order (highest to lowest):
1. **$-$** (Precedence 4, Left-associative)
2. **$*$** (Precedence 3, Left-associative)
3. **$+$** (Precedence 2, Right-associative)
4. **$\\uparrow$** (Precedence 1, Right-associative)

Expression:
$$10 - 6 - 2 \\uparrow 8 - 6 + 1 * 2 \\uparrow 1 + 1$$

**Step 1: Evaluate $-$ (Precedence 4, Left to right):**
- $10 - 6 - 2 = (10 - 6) - 2 = 4 - 2 = 2$
- $8 - 6 = 2$
The expression becomes:
$$2 \\uparrow 2 + 1 * 2 \\uparrow 1 + 1$$

**Step 2: Evaluate $*$ (Precedence 3):**
- $1 * 2 = 2$
The expression becomes:
$$2 \\uparrow 2 + 2 \\uparrow 1 + 1$$

**Step 3: Evaluate $+$ (Precedence 2, Right-associative):**
- $2 + 2 = 4$
- $1 + 1 = 2$
The expression becomes:
$$2 \\uparrow 4 \\uparrow 2$$

**Step 4: Evaluate $\\uparrow$ (Precedence 1, Right-associative):**
$$4 \\uparrow 2 = 4^2 = 16$$
$$2 \\uparrow 16 = 2^{16} = 65536$$

**Correct Answer: 65536**`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-cd-twt23-q13",
    difficulty: "medium",
    concept: "Intermediate Code to High-Level Code Mapping",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt23_q13.png",
    imageAlt: "Intermediate code for loop and arithmetic statements",
    text: `Consider the intermediate code given below:
\`\`\`
1.  j = 1
2.  if (j <= n) goto 4
3.  goto 11
4.  t1 = a + b
5.  R = t1
6.  t2 = t1 * c
7.  R = t2
8.  t3 = t2 + d
9.  R = t3
10. j = j + 1 goto 2
11. end
\`\`\`

Which of the following high-level code structures corresponds to the intermediate code above?`,
    options: [
      "1",
      "2",
      "3",
      "None of these"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Analyzing the basic blocks:
1. Lines 1–3: Loop initialization \`j = 1\` and condition check \`while (j <= n)\`.
2. Inside loop body:
   - Lines 4–5: \`t1 = a + b; R = t1;\` $\\implies R = a + b$
   - Lines 6–7: \`t2 = t1 * c; R = t2;\` $\\implies R = R * c$
   - Lines 8–9: \`t3 = t2 + d; R = t3;\` $\\implies R = R + d$
   - Line 10: \`j = j + 1\` (or \`j++\`) and jump back to condition check.

This sequentially executes:
\`\`\`c
j = 1;
while (j <= n)
{
    R = a + b;
    R = R * c;
    R = R + d;
    j++;
}
\`\`\`
This matches **Option 2**.

**Correct Answer: Option 2**`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-cd-twt23-q14",
    difficulty: "hard",
    concept: "SDTS Expression Evaluation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt23_q14.png",
    imageAlt: "SDTS for E -> E1 $ T {E.value = E1.value * T.value} on expression 5 $ 2 # 3 $ 4 # 2 $ 6",
    text: `Consider the grammar with the following translation rules and $E$ as the start symbol:
$$E \\rightarrow E_1\\ \\$\\ T \\quad \\{E.value = E_1.value \\times T.value\\}$$
$$E \\rightarrow T \\quad \\{E.value = 2 + T.value\\}$$
$$T \\rightarrow T_1\\ \\#\\ F \\quad \\{T.value = T_1.value + F.value\\}$$
$$T \\rightarrow F \\quad \\{T.value = 2 + F.value\\}$$
$$F \\rightarrow num \\quad \\{F.value = num.value\\}$$

Compute \`E.value\` for the root of the parse tree for the expression:
\`5 $ 2 # 3 $ 4 # 2 $ 6\``,
    options: [
      "2024",
      "2016",
      "4032",
      "4048"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
The operators are left-associative. $\\$$ has lower precedence, separating four terms:
\`5\`, \`2 # 3\`, \`4 # 2\`, and \`6\`.

**Evaluating the terms ($T$):**
1. **For \`5\`:**
   - $F \\rightarrow 5 \\implies F.val = 5$
   - $T_1 \\rightarrow F \\implies T.val = 2 + 5 = 7$
   - $E_3 \\rightarrow T_1 \\implies E_3.val = 2 + 7 = 9$

2. **For \`2 # 3\`:**
   - $F_1 \\rightarrow 2 \\implies F.val = 2$
   - $T \\rightarrow F \\implies T.val = 2 + 2 = 4$
   - $F_2 \\rightarrow 3 \\implies F.val = 3$
   - $T_2 \\rightarrow T\\ \\#\\ F \\implies T_2.val = 4 + 3 = 7$

3. **For \`4 # 2\`:**
   - $F_1 \\rightarrow 4 \\implies F.val = 4$
   - $T \\rightarrow F \\implies T.val = 2 + 4 = 6$
   - $F_2 \\rightarrow 2 \\implies F.val = 2$
   - $T_3 \\rightarrow T\\ \\#\\ F \\implies T_3.val = 6 + 2 = 8$

4. **For \`6\`:**
   - $F \\rightarrow 6 \\implies F.val = 6$
   - $T_4 \\rightarrow F \\implies T_4.val = 2 + 6 = 8$

**Evaluating $E$ (left-associative multiplication):**
- $E_2 = E_3 \\times T_2 = 9 \\times 7 = 63$
- $E_1 = E_2 \\times T_3 = 63 \\times 8 = 504$
- $E = E_1 \\times T_4 = 504 \\times 8 = 4032$

**Correct Answer: Option 3 (4032)**`
  },

  // ─── Q.15 (NAT) ───
  {
    id: "me-cd-twt23-q15",
    difficulty: "medium",
    concept: "Three-Address Code Temporary Variables",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 2,
    natTolerance: 3,
    imageUrl: "/images/made_easy/twt23_q15.png",
    imageAlt: "Expression: a + b * c + d - e - a + b * c",
    text: `The minimum number of temporary variables created in 3-address code for the following expression:
$$a + b \\times c + d - e - a + b \\times c$$
*(Assume order of precedence from highest to lowest as: $\\times$, $+$ and $-$. Consider associativity for $+$ and $\\times$ are not important but $-$ is left associative).* ________`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Expression:
$$a + b \\times c + d - e - a + b \\times c$$

**Precedence:**
1. $\\times$ is highest.
2. $+$ is next.
3. $-$ is lowest (left-associative).

Grouping according to precedence:
$$((a + b \\times c + d) - e) - (a + b \\times c)$$

Notice the common subexpression $(a + b \\times c)$:
1. $t_1 = b \\times c$
2. $t_2 = a + t_1$ (computes $a + b \\times c$)
3. $t_1 = t_2 + d$ (reusing $t_1$)
4. $t_1 = t_1 - e$ (reusing $t_1$)
5. $t_1 = t_1 - t_2$ (reusing $t_1$, producing final result)

With temporary variable reuse, only **2** temporary variables ($t_1$ and $t_2$) are required.
*(Without reuse, 5 temporary variables are created).*

**Correct Answer: 2 (or 5)**`
  },

  // ─── Q.16 (MCQ) ───
  {
    id: "me-cd-twt23-q16",
    difficulty: "medium",
    concept: "Lexical Error Identification in C",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt23_q16.png",
    imageAlt: "Four C programs checking for lexical errors",
    text: `Which of the following programs has a lexical error?`,
    options: [
      "Program 1: Contains unclosed multi-line comment '/*;'",
      "Program 2: Undeclared variable 'a'",
      "Program 3: Passing pointer address to '%d' format specifier",
      "Program 4: Invalid binary literal '0b910' containing non-binary digit '9'"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 3],
    explanation: `### Solution
- **Program 1:** Contains \`b = a - b/*;\` where \`/*\` starts an open comment block that is never terminated before EOF. An **unterminated comment** is caught during lexical scanning as a **Lexical Error**.
- **Program 2:** Variable \`a\` is undeclared. Undeclared identifier is detected during semantic analysis, not lexical analysis.
- **Program 3:** \`printf("%d%d", &b, &c);\` has type mismatches between arguments and format specifiers, which is checked at semantic/runtime level.
- **Program 4:** Contains \`a = 0b910;\`. The prefix \`0b\` begins a binary literal, but digits \`9\` is invalid for binary (only 0 and 1 allowed). The scanner fails to recognize this token, generating a **Lexical Error**.

**Correct Options: 1 and 4**`
  },

  // ─── Q.17 (NAT) ───
  {
    id: "me-cd-twt23-q17",
    difficulty: "hard",
    concept: "Basic Block DAG Representation (Nodes + Edges)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 12,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt23_q17.png",
    imageAlt: "Basic block: x = y + z, z = x + w, w = y + z, u = w - y, x = u + y",
    text: `Consider the basic block given below:
\`\`\`
x = y + z
z = x + w
w = y + z
u = w - y
x = u + y
\`\`\`

The minimum number of (nodes + edges) present in the DAG representation of the above basic block is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let's construct the DAG with algebraic optimization and common sub-expression elimination:
- Initial leaf nodes: $y$, $z$, $w$ (3 leaf nodes).
- Line 1: \`x = y + z\` $\\rightarrow$ creates internal node $N_1(+)$ with children $y, z$. (1 node, 2 edges).
- Line 2: \`z = x + w\` $\\rightarrow$ creates internal node $N_2(+)$ with children $N_1, w$. (1 node, 2 edges).
- Line 3: \`w = y + z\` $\\rightarrow$ here $z$ refers to $N_2$.
- Line 4: \`u = w - y = (y + N_2) - y = N_2\`. Due to algebraic identity, $u$ references existing node $N_2$ directly!
- Line 5: \`x = u + y = N_2 + y = y + N_2 = w\`. Reuses the node created in Line 3!

This corresponds directly to the classic GATE CSE 2014 problem (isomorphic with variables renamed: $x, y, z, w, u$):
- **Number of Nodes = 6**
- **Number of Edges = 6**

$$\\text{Total } (\\text{nodes} + \\text{edges}) = 6 + 6 = 12$$

**Correct Answer: 12**`
  }
];

export const MADE_EASY_CD_TWT23_CHAPTER: Chapter = {
  id: "cd-gate-2027-twt-23",
  name: "GATE 2027 CS TOPIC WISE TEST - 23 (Compiler Design)",
  description: "Made Easy GATE 2027 Test 23: Lexical Analysis, SDTS, Intermediate Code, Code Optimization & DAGs",
  questions: MADE_EASY_CD_TWT23_QUESTIONS
};
