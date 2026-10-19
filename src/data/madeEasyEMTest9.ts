import type { Question, Chapter } from "./quizData";

export const MADE_EASY_EM_TWT9_QUESTIONS: Question[] = [
  // ─── Q.1 (MSQ, 2M) ───
  {
    id: "me-em-twt9-q01",
    difficulty: "medium",
    concept: "Matrix Properties — Invertibility, Transpose, Rank, Null Space",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt09_q01.png",
    imageAlt: "Four statements about invertible matrices, transpose, rank, and null space",
    text: `Which of the following statements are correct?

1. If $A$ and $B$ are invertible matrices of the same order and $AB = BA$, then $(AB)^{-1} = B^{-1}A^{-1}$.
2. For any two $n \\times n$ matrices $A$ and $B$, the transpose of their product satisfies $(AB)^T = B^T A^T$.
3. For any $m \\times n$ matrix $A$, the rank of $A$ is equal to the rank of its product with its transpose, i.e., $\\text{rank}(A) = \\text{rank}(A^T A)$.
4. If $A$ is an $n \\times n$ matrix with $\\text{rank}(A) < n$, then the system of equations $Ax = 0$ has only the trivial solution $x = 0$.`,
    options: [
      "If $A$ and $B$ are invertible and $AB = BA$, then $(AB)^{-1} = B^{-1}A^{-1}$",
      "$(AB)^T = B^T A^T$ for any two $n \\times n$ matrices $A$ and $B$",
      "$\\text{rank}(A) = \\text{rank}(A^T A)$ for any matrix $A$",
      "If $\\text{rank}(A) < n$, then $Ax = 0$ has only the trivial solution"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
Analyze each statement:

**Statement 1:** If $A$ and $B$ are invertible and $AB = BA$, then $(AB)^{-1} = B^{-1}A^{-1}$.
- General rule: $(AB)^{-1} = B^{-1}A^{-1}$. This is always true for invertible matrices.
- The condition $AB = BA$ makes $B^{-1}A^{-1} = A^{-1}B^{-1}$, but the base equation is true regardless.
- **CORRECT ✓**

**Statement 2:** $(AB)^T = B^T A^T$.
- This is the standard transpose of product property (order reverses).
- **CORRECT ✓**

**Statement 3:** $\\text{rank}(A) = \\text{rank}(A^T A)$.
- This is a fundamental theorem: the null space of $A$ and $A^T A$ are identical.
- $Ax = 0 \\iff A^T A x = 0$, so $\\text{null}(A) = \\text{null}(A^T A)$.
- By rank-nullity: $\\text{rank}(A) = \\text{rank}(A^T A)$.
- **CORRECT ✓**

**Statement 4:** If $\\text{rank}(A) < n$, then $Ax = 0$ has only the trivial solution $x = 0$.
- By rank-nullity theorem: $\\text{nullity}(A) = n - \\text{rank}(A) > 0$ when $\\text{rank}(A) < n$.
- A positive nullity means there are **nontrivial solutions** — infinitely many.
- **INCORRECT ✗**

**Answer: Statements 1, 2, and 3** ✓`
  },

  // ─── Q.2 (MCQ, 2M) ───
  {
    id: "me-em-twt9-q02",
    difficulty: "hard",
    concept: "Matrix Inverse — Neumann Series Expansion, Eigenvalue Constraints",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt09_q02.png",
    imageAlt: "Matrix M with (I+2M)^-1 = I - alphaM, tr(M)=1, which alpha are possible",
    text: `Let $M$ be a real $2 \\times 2$ matrix such that $(I + 2M)^{-1} = I - \\alpha M$, $\\alpha \\neq 0$, and $\\text{tr}(M) = 1$.

Which of the following value(s) of $\\alpha$ are possible?`,
    options: [
      "$\\alpha = \\dfrac{2}{3}$",
      "$\\alpha = 1$",
      "$\\alpha = \\dfrac{1}{2}$",
      "$\\alpha = 2$"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    explanation: `### Solution
Given: $(I + 2M)^{-1} = I - \\alpha M$ with $\\alpha \\neq 0$ and $\\text{tr}(M) = 1$.

Multiply both sides on the left by $(I + 2M)$:
$$I = (I + 2M)(I - \\alpha M) = I - \\alpha M + 2M - 2\\alpha M^2$$
$$0 = (2 - \\alpha)M - 2\\alpha M^2$$

For each eigenvalue $\\lambda$ of $M$, substituting:
$$(2 - \\alpha)\\lambda - 2\\alpha \\lambda^2 = 0$$
$$\\lambda\\left[(2 - \\alpha) - 2\\alpha\\lambda\\right] = 0$$

So either $\\lambda = 0$ or $\\lambda = \\dfrac{2 - \\alpha}{2\\alpha}$.

Since $M$ is $2 \\times 2$ with $\\text{tr}(M) = \\lambda_1 + \\lambda_2 = 1$:

**Case 1:** $\\lambda_1 = 0$, $\\lambda_2 = 1$.
$$1 = \\frac{2 - \\alpha}{2\\alpha} \\implies 2\\alpha = 2 - \\alpha \\implies 3\\alpha = 2 \\implies \\boxed{\\alpha = \\tfrac{2}{3}} \\checkmark$$

**Case 2:** Both eigenvalues equal $\\frac{2-\\alpha}{2\\alpha}$, so their sum $= 1$:
$$2 \\cdot \\frac{2-\\alpha}{2\\alpha} = 1 \\implies \\frac{2-\\alpha}{\\alpha} = 1 \\implies 2 - \\alpha = \\alpha \\implies 2\\alpha = 2 \\implies \\boxed{\\alpha = 1} \\checkmark$$

**Check $\\alpha = 1/2$:** $\\lambda = (2 - 0.5)/1 = 3/2$. Sum $= 0 + 3/2 = 3/2 \\neq 1$. ✗

**Check $\\alpha = 2$:** $\\lambda = (2-2)/4 = 0$. Sum $= 0 \\neq 1$. ✗

**Answer: $\\alpha = \\dfrac{2}{3}$ and $\\alpha = 1$** → Options 1 & 2 ✓`
  },

  // ─── Q.3 (SCQ, 1M) ───
  {
    id: "me-em-twt9-q03",
    difficulty: "medium",
    concept: "Probability — Expected Value by Indicator Variables (Consecutive HH)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt09_q03.png",
    imageAlt: "Fair coin tossed n times, X = number of consecutive HH, find E(X)",
    text: `A fair coin is tossed $n$ times independently. Let the random variable $X$ denote the number of times two consecutive heads (HH) appear in the sequence of tosses.

What is the expected value of $X$, $E(X)$?`,
    options: [
      "$\\dfrac{n-1}{4}$",
      "$\\dfrac{n-1}{8}$",
      "$\\dfrac{n}{4}$",
      "None of these"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
Use the **indicator variable** technique.

Define $I_i$ as the indicator random variable for the event that tosses $i$ and $i+1$ are both heads, for $i = 1, 2, \\ldots, n-1$.

Then:
$$X = \\sum_{i=1}^{n-1} I_i$$

By linearity of expectation:
$$E[X] = \\sum_{i=1}^{n-1} E[I_i] = \\sum_{i=1}^{n-1} P(\\text{toss } i = H \\text{ AND toss } i+1 = H)$$

Since the coin is fair and tosses are independent:
$$P(\\text{toss } i = H \\text{ AND toss } i+1 = H) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$

Therefore:
$$E[X] = (n-1) \\times \\frac{1}{4} = \\frac{n-1}{4}$$

**Answer: Option 1 — $\\dfrac{n-1}{4}$** ✓`
  },

  // ─── Q.4 (NAT, 2M) ───
  {
    id: "me-em-twt9-q04",
    difficulty: "hard",
    concept: "Generalized Eigenvalue Problem — [M − αK]φ = 0",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0.44,
    natTolerance: 0.01,
    imageUrl: "/images/made_easy/twt09_q04.png",
    imageAlt: "Generalized eigenvalue problem M=[[1,0],[0,2]], K=[[2,-1],[-1,1]]",
    text: `Let $M = \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix}$ and $K = \\begin{bmatrix} 2 & -1 \\\\ -1 & 1 \\end{bmatrix}$ satisfy the eigenvalue problem given by $[M - \\alpha K]\\phi = 0$.

Find the lowest eigenvalue $\\alpha$ (rounded off to two decimal places).`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
The generalized eigenvalue problem $[M - \\alpha K]\\phi = 0$ has non-trivial solutions when:
$$\\det(M - \\alpha K) = 0$$

Compute $M - \\alpha K$:
$$M - \\alpha K = \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix} - \\alpha\\begin{bmatrix} 2 & -1 \\\\ -1 & 1 \\end{bmatrix} = \\begin{bmatrix} 1-2\\alpha & \\alpha \\\\ \\alpha & 2-\\alpha \\end{bmatrix}$$

Set determinant to zero:
$$\\det(M - \\alpha K) = (1-2\\alpha)(2-\\alpha) - \\alpha^2 = 0$$

Expand:
$$(1-2\\alpha)(2-\\alpha) = 2 - \\alpha - 4\\alpha + 2\\alpha^2 = 2 - 5\\alpha + 2\\alpha^2$$

$$2 - 5\\alpha + 2\\alpha^2 - \\alpha^2 = 0$$
$$\\alpha^2 - 5\\alpha + 2 = 0$$

Using the quadratic formula:
$$\\alpha = \\frac{5 \\pm \\sqrt{25 - 8}}{2} = \\frac{5 \\pm \\sqrt{17}}{2}$$

$$\\alpha_1 = \\frac{5 - \\sqrt{17}}{2} \\approx \\frac{5 - 4.123}{2} \\approx \\frac{0.877}{2} \\approx \\mathbf{0.44}$$

$$\\alpha_2 = \\frac{5 + \\sqrt{17}}{2} \\approx \\frac{9.123}{2} \\approx 4.56$$

**Lowest eigenvalue $\\alpha \\approx \\mathbf{0.44}$** ✓`
  },

  // ─── Q.5 (NAT, 2M) ───
  {
    id: "me-em-twt9-q05",
    difficulty: "medium",
    concept: "Probability — PDF with Unknown Coefficients, Computing Pr[X < 0.5]",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0.25,
    natTolerance: 0.01,
    imageUrl: "/images/made_easy/twt09_q05.png",
    imageAlt: "PDF f(x) = a+bx for 0<x<1, E(X)=2/3, find P[X<0.5]",
    text: `A random variable $X$ has probability density function:
$$f(x) = \\begin{cases} a + bx & \\text{for } 0 < x < 1 \\\\ 0 & \\text{otherwise} \\end{cases}$$

Given the expected value $E(X) = \\dfrac{2}{3}$, the $\\Pr[X < 0.5]$ is ________ (Upto 2 decimal places).`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Step 1: Find constants $a$ and $b$.**

**Normalization condition:** $\\displaystyle\\int_0^1 f(x)\\,dx = 1$
$$\\int_0^1 (a + bx)\\,dx = \\left[ax + \\frac{bx^2}{2}\\right]_0^1 = a + \\frac{b}{2} = 1 \\quad \\cdots (1)$$

**Expected value condition:** $E(X) = \\dfrac{2}{3}$
$$\\int_0^1 x(a + bx)\\,dx = \\frac{a}{2} + \\frac{b}{3} = \\frac{2}{3} \\quad \\cdots (2)$$

**Solving (1) and (2):**
From (1): $a = 1 - \\dfrac{b}{2}$

Substitute into (2):
$$\\frac{1 - b/2}{2} + \\frac{b}{3} = \\frac{2}{3}$$
$$\\frac{1}{2} - \\frac{b}{4} + \\frac{b}{3} = \\frac{2}{3}$$
$$b\\left(-\\frac{1}{4} + \\frac{1}{3}\\right) = \\frac{2}{3} - \\frac{1}{2} = \\frac{1}{6}$$
$$b \\cdot \\frac{1}{12} = \\frac{1}{6} \\implies \\boxed{b = 2}$$
$$a = 1 - \\frac{2}{2} = \\boxed{0}$$

So $f(x) = 2x$ for $0 < x < 1$.

**Step 2: Compute $\\Pr[X < 0.5]$.**
$$\\Pr[X < 0.5] = \\int_0^{0.5} 2x\\,dx = \\left[x^2\\right]_0^{0.5} = (0.5)^2 = \\mathbf{0.25}$$`
  },

  // ─── Q.6 (MSQ, 2M) ───
  {
    id: "me-em-twt9-q06",
    difficulty: "medium",
    concept: "Probability — Piecewise PDF: Mean, Mean Square, Variance, Average Power",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt09_q06.png",
    imageAlt: "PDF piecewise: f(x)=1 for 0<x<1/2, f(x)=1/3 for 1/2<x<2",
    text: `A random variable $X$ is defined by following PDF:

$$f_X(x) = \\begin{cases} 1 & 0 < x < \\tfrac{1}{2} \\\\ \\tfrac{1}{3} & \\tfrac{1}{2} < x < 2 \\\\ 0 & \\text{otherwise} \\end{cases}$$

Which of the following is/are correct?`,
    options: [
      "Mean of random variable $X$ is $\\dfrac{3}{4}$",
      "Mean square value of $X$ is $\\dfrac{11}{12}$",
      "Variance of $X$ is $\\dfrac{1}{6}$",
      "Total average power of $X$ is $\\sqrt{\\dfrac{11}{12}}$ Watt"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    explanation: `### Solution
**Verify PDF:** $\\displaystyle\\int_0^{1/2} 1\\,dx + \\int_{1/2}^2 \\frac{1}{3}\\,dx = \\frac{1}{2} + \\frac{1}{3} \\cdot \\frac{3}{2} = \\frac{1}{2} + \\frac{1}{2} = 1$ ✓

**Statement 1: Mean $E(X)$**
$$E(X) = \\int_0^{1/2} x \\cdot 1\\,dx + \\int_{1/2}^2 x \\cdot \\frac{1}{3}\\,dx$$
$$= \\left[\\frac{x^2}{2}\\right]_0^{1/2} + \\frac{1}{3}\\left[\\frac{x^2}{2}\\right]_{1/2}^2$$
$$= \\frac{1}{8} + \\frac{1}{3}\\left(2 - \\frac{1}{8}\\right) = \\frac{1}{8} + \\frac{1}{3} \\cdot \\frac{15}{8} = \\frac{1}{8} + \\frac{5}{8} = \\frac{6}{8} = \\frac{3}{4}$$
**CORRECT ✓**

**Statement 2: Mean Square $E(X^2)$**
$$E(X^2) = \\int_0^{1/2} x^2 \\cdot 1\\,dx + \\int_{1/2}^2 x^2 \\cdot \\frac{1}{3}\\,dx$$
$$= \\left[\\frac{x^3}{3}\\right]_0^{1/2} + \\frac{1}{3}\\left[\\frac{x^3}{3}\\right]_{1/2}^2$$
$$= \\frac{1}{24} + \\frac{1}{9}\\left(8 - \\frac{1}{8}\\right) = \\frac{1}{24} + \\frac{1}{9} \\cdot \\frac{63}{8} = \\frac{1}{24} + \\frac{7}{8} = \\frac{1}{24} + \\frac{21}{24} = \\frac{22}{24} = \\frac{11}{12}$$
**CORRECT ✓**

**Statement 3: Variance**
$$\\text{Var}(X) = E(X^2) - [E(X)]^2 = \\frac{11}{12} - \\left(\\frac{3}{4}\\right)^2 = \\frac{11}{12} - \\frac{9}{16}$$
$$= \\frac{44}{48} - \\frac{27}{48} = \\frac{17}{48} \\neq \\frac{1}{6} = \\frac{8}{48}$$
**INCORRECT ✗**

**Statement 4: Total average power**
Total average power $= E(X^2) = \\dfrac{11}{12}$, **not** $\\sqrt{\\dfrac{11}{12}}$.
**INCORRECT ✗**

**Answer: Statements 1 and 2** ✓`
  },

  // ─── Q.7 (SCQ, 2M) ───
  {
    id: "me-em-twt9-q07",
    difficulty: "medium",
    concept: "Linear Algebra — System of Linear Equations Unique Solution Condition",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt09_q07.png",
    imageAlt: "System of equations x+y+z=2, 2x+y-z=3, 3x+2y+Kz=4",
    text: `The system of linear equations
$$x + y + z = 2, \\quad 2x + y - z = 3, \\quad 3x + 2y + Kz = 4$$

Has unique solution if ________.`,
    options: [
      "$K \\neq 0$",
      "$K \\leq 0$",
      "$K \\geq 0$",
      "$K = 0$"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
For a system of linear equations $Ax = b$ to have a **unique solution**, the coefficient matrix $A$ must be **non-singular**, i.e., $\\det(A) \\neq 0$.

The coefficient matrix is:
$$A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & 1 & -1 \\\\ 3 & 2 & K \\end{bmatrix}$$

**Compute $\\det(A)$** by cofactor expansion along row 1:
$$\\det(A) = 1 \\cdot \\begin{vmatrix} 1 & -1 \\\\ 2 & K \\end{vmatrix} - 1 \\cdot \\begin{vmatrix} 2 & -1 \\\\ 3 & K \\end{vmatrix} + 1 \\cdot \\begin{vmatrix} 2 & 1 \\\\ 3 & 2 \\end{vmatrix}$$

$$= 1(K + 2) - 1(2K + 3) + 1(4 - 3)$$
$$= K + 2 - 2K - 3 + 1 = -K$$

For a unique solution: $\\det(A) \\neq 0$
$$-K \\neq 0 \\implies K \\neq 0$$

**Answer: Option 1 — $K \\neq 0$** ✓`
  },

  // ─── Q.8 (MSQ, 1M) ───
  {
    id: "me-em-twt9-q08",
    difficulty: "easy",
    concept: "Probability — Properties of Cumulative Distribution Function (CDF)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt09_q08.png",
    imageAlt: "Properties of CDF FX(x): boundedness, monotone, limits at +/-infinity",
    text: `Which of the following properties about cumulative distribution function $F_X(x)$ of a random variable $X$ is/are correct?`,
    options: [
      "$0 \\leq F_X(x) \\leq 1$",
      "$F_X(x_1) \\leq F_X(x_2)$ if $x_1 < x_2$",
      "$F_X(\\infty) = 1$",
      "$F_X(-\\infty) = -1$"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
The **Cumulative Distribution Function (CDF)** $F_X(x) = P(X \\leq x)$ has the following standard properties:

**Statement 1: $0 \\leq F_X(x) \\leq 1$**
- Since $F_X(x)$ is a probability, it must lie in $[0, 1]$.
- **CORRECT ✓**

**Statement 2: $F_X(x_1) \\leq F_X(x_2)$ if $x_1 < x_2$**
- The CDF is **non-decreasing**: as $x$ increases, more outcomes are included, so the probability cannot decrease.
- **CORRECT ✓**

**Statement 3: $F_X(\\infty) = 1$**
- $\\lim_{x \\to \\infty} F_X(x) = P(X \\leq \\infty) = P(\\Omega) = 1$.
- **CORRECT ✓**

**Statement 4: $F_X(-\\infty) = -1$**
- $\\lim_{x \\to -\\infty} F_X(x) = P(X \\leq -\\infty) = P(\\emptyset) = 0$, **not** $-1$.
- Probabilities can never be negative!
- **INCORRECT ✗**

**Answer: Statements 1, 2, and 3** ✓`
  },

  // ─── Q.9 (SCQ, 2M) ───
  {
    id: "me-em-twt9-q09",
    difficulty: "medium",
    concept: "Linear Algebra — Full Column Rank and Nilpotent Matrices",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt09_q09.png",
    imageAlt: "S1: M in R^(mxn) m>n>=2, rank(M)=n, Mx=0 only x=0. S2: E^3=0, E^2 is singular",
    text: `Consider the following two statements:

$S_1$: Let $M \\in \\mathbb{R}^{m \\times n}$ with $m > n \\geq 2$. If $\\text{rank}(M) = n$, then the system of linear equations $Mx = 0$ has $x = 0$ as the only solution.

$S_2$: Let $E \\in \\mathbb{R}^{n \\times n}$, $n \\geq 2$ be a non-zero matrix such that $E^3 = 0$. Then $E^2$ is a singular matrix.

Which of the above statements is correct?`,
    options: [
      "Both $S_1$ and $S_2$ are correct",
      "Both $S_1$ and $S_2$ are incorrect",
      "$S_1$ is correct and $S_2$ is incorrect",
      "$S_1$ is incorrect and $S_2$ is correct"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution

**Statement $S_1$:** $M \\in \\mathbb{R}^{m \\times n}$ with $m > n \\geq 2$ and $\\text{rank}(M) = n$.

- If $\\text{rank}(M) = n$, then $M$ has **full column rank**.
- By the rank-nullity theorem: $\\text{nullity}(M) = n - \\text{rank}(M) = n - n = 0$.
- So the null space of $M$ contains only $x = 0$.
- Therefore $Mx = 0$ has only the trivial solution.
- **$S_1$ is TRUE ✓**

**Statement $S_2$:** $E \\in \\mathbb{R}^{n \\times n}$, $E^3 = 0$ (nilpotent of index ≤ 3).

- Since $E$ is nilpotent (some power of $E$ is zero), **all eigenvalues of $E$ are 0**.
- Therefore all eigenvalues of $E^2$ are also $0^2 = 0$.
- A matrix with all eigenvalues equal to 0 is singular (since $\\det(E^2) = 0^n = 0$).
- **$S_2$ is TRUE ✓**

**Answer: Option 1 — Both $S_1$ and $S_2$ are correct** ✓`
  },

  // ─── Q.10 (SCQ, 1M) ───
  {
    id: "me-em-twt9-q10",
    difficulty: "medium",
    concept: "Probability — Probability Generating Function (PGF), Expectation",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt09_q10.png",
    imageAlt: "PGF g_Y(z) = (1-alpha)/(1-alpha*z), find E(Y)",
    text: `For a discrete random variable $X$, define its probability generating function (PGF) as
$$g_X(z) = \\sum_{j=0}^{\\infty} P(X = j)z^j$$

For a certain random variable $Y$, the PGF is given by
$$g_Y(z) = \\frac{1-\\alpha}{1-\\alpha z}, \\quad 0 < \\alpha < 1$$

The expectation of $Y$ is:`,
    options: [
      "$\\alpha$",
      "$\\dfrac{\\alpha}{1-\\alpha}$",
      "$\\dfrac{1}{1-\\alpha}$",
      "Not expressible in terms of $\\alpha$"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
The expectation of a random variable from its PGF is given by:
$$E[Y] = g_Y'(1)$$

**Compute $g_Y'(z)$:**
$$g_Y(z) = \\frac{1-\\alpha}{1-\\alpha z}$$

Using the quotient rule (or chain rule):
$$g_Y'(z) = (1-\\alpha) \\cdot \\frac{\\alpha}{(1-\\alpha z)^2}$$

**Evaluate at $z = 1$:**
$$E[Y] = g_Y'(1) = (1-\\alpha) \\cdot \\frac{\\alpha}{(1-\\alpha)^2} = \\frac{\\alpha}{1-\\alpha}$$

**Verification:** Note that $g_Y(z) = (1-\\alpha)\\sum_{j=0}^{\\infty} (\\alpha z)^j = \\sum_{j=0}^{\\infty} (1-\\alpha)\\alpha^j z^j$, so $Y \\sim \\text{Geometric}$ with $P(Y=j) = (1-\\alpha)\\alpha^j$ for $j = 0, 1, 2, \\ldots$

For this geometric distribution: $E[Y] = \\dfrac{\\alpha}{1-\\alpha}$ ✓

**Answer: Option 2 — $\\dfrac{\\alpha}{1-\\alpha}$** ✓`
  },

  // ─── Q.11 (SCQ, 1M) ───
  {
    id: "me-em-twt9-q11",
    difficulty: "medium",
    concept: "Probability — Poisson Distribution, P(X < 3) with λ = 6",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt09_q11.png",
    imageAlt: "A waiter breaks 6 plates/day on average, P(fewer than 3 plates broken)",
    text: `A waiter breaks on an average 6 plates/day in a hotel. Then find the probability that waiter will break fewer than 3 plates on a particular day.`,
    options: [
      "$\\dfrac{36}{e^6}$",
      "$\\dfrac{75}{e^6}$",
      "$\\dfrac{24}{e^6}$",
      "$\\dfrac{25}{e^6}$"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Let $X$ be the number of plates broken in a day. $X \\sim \\text{Poisson}(\\lambda = 6)$.

$$P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$$

We need $P(X < 3) = P(X = 0) + P(X = 1) + P(X = 2)$:

$$P(X = 0) = e^{-6} \\cdot \\frac{6^0}{0!} = e^{-6}$$

$$P(X = 1) = e^{-6} \\cdot \\frac{6^1}{1!} = 6e^{-6}$$

$$P(X = 2) = e^{-6} \\cdot \\frac{6^2}{2!} = \\frac{36}{2}e^{-6} = 18e^{-6}$$

$$P(X < 3) = e^{-6}(1 + 6 + 18) = 25e^{-6} = \\frac{25}{e^6}$$

**Answer: Option 4 — $\\dfrac{25}{e^6}$** ✓`
  },

  // ─── Q.12 (MSQ, 1M) ───
  {
    id: "me-em-twt9-q12",
    difficulty: "medium",
    concept: "Special Matrices — Involutary, Idempotent, Orthogonal, Singular",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt09_q12.png",
    imageAlt: "Matrix A = [[1,0,0],[0,0,1],[0,1,0]], check involutary/idempotent/orthogonal/singular",
    text: `Consider the matrix given below and select the correct statements given below:
$$A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}$$`,
    options: [
      "'$A$' is an involutary matrix",
      "'$A$' is an idempotent matrix",
      "'$A$' is an orthogonal matrix",
      "'$A$' is a singular matrix"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
Given: $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}$

**Compute $A^2$:**
$$A^2 = A \\cdot A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = I$$

**Statement 1: Involutary** ($A^2 = I$)
- Since $A^2 = I$, matrix $A$ is **involutary**.
- **CORRECT ✓**

**Statement 2: Idempotent** ($A^2 = A$)
- $A^2 = I \\neq A$ (since $A \\neq I$).
- **INCORRECT ✗**

**Statement 3: Orthogonal** ($A^T A = I$)
- $A$ is a permutation matrix. Its transpose swaps rows 2 and 3:
$$A^T = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} = A$$
- So $A^T A = A \\cdot A = A^2 = I$.
- **CORRECT ✓**

**Statement 4: Singular** ($\\det(A) = 0$)
- $\\det(A) = 1 \\cdot (0 \\cdot 0 - 1 \\cdot 1) = 1 \\cdot (-1) = -1 \\neq 0$
- $A$ is **non-singular** (invertible).
- **INCORRECT ✗**

**Answer: Statements 1 and 3** ✓`
  },

  // ─── Q.13 (NAT, 2M) ───
  {
    id: "me-em-twt9-q13",
    difficulty: "medium",
    concept: "Probability — Binomial Distribution, P(X ≤ 1) given mean and variance",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0.018,
    natTolerance: 0.001,
    imageUrl: "/images/made_easy/twt09_q13.png",
    imageAlt: "Binomial RV X with E(X)=4, Var(X)=4/3, find P(X<=1)",
    text: `If $X$ is a binomial random variable with $E(X) = 4$, $\\text{Var}(X) = \\dfrac{4}{3}$. Then $P(X \\leq 1)$ is ________ (Answer upto three decimal digits).`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
For a Binomial distribution $X \\sim B(n, p)$:
$$E(X) = np = 4 \\quad \\cdots (1)$$
$$\\text{Var}(X) = npq = \\frac{4}{3} \\quad \\cdots (2)$$

**Find $p$, $q$, $n$:**
Dividing (2) by (1):
$$q = \\frac{\\text{Var}(X)}{E(X)} = \\frac{4/3}{4} = \\frac{1}{3}$$

$$p = 1 - q = 1 - \\frac{1}{3} = \\frac{2}{3}$$

From (1): $n = \\dfrac{4}{p} = \\dfrac{4}{2/3} = 6$

So $X \\sim B\\left(6, \\dfrac{2}{3}\\right)$.

**Compute $P(X \\leq 1) = P(X = 0) + P(X = 1)$:**

$$P(X = 0) = \\binom{6}{0}\\left(\\frac{2}{3}\\right)^0\\left(\\frac{1}{3}\\right)^6 = 1 \\cdot 1 \\cdot \\frac{1}{729} = \\frac{1}{729}$$

$$P(X = 1) = \\binom{6}{1}\\left(\\frac{2}{3}\\right)^1\\left(\\frac{1}{3}\\right)^5 = 6 \\cdot \\frac{2}{3} \\cdot \\frac{1}{243} = \\frac{12}{729}$$

$$P(X \\leq 1) = \\frac{1}{729} + \\frac{12}{729} = \\frac{13}{729} \\approx \\mathbf{0.051}$$

Wait — let me recheck: $\\frac{13}{729} = 0.01783...$

Let me recompute: $q=1/3, p=2/3, n=6$.
$$P(X=0) = (1/3)^6 = 1/729 \\approx 0.00137$$
$$P(X=1) = 6 \\cdot (2/3) \\cdot (1/3)^5 = 6 \\cdot \\frac{2}{3} \\cdot \\frac{1}{243} = \\frac{12}{729} \\approx 0.01646$$

$$P(X \\leq 1) = \\frac{13}{729} \\approx 0.01783$$

Hmm, but $\\frac{37}{729} \\approx 0.051$ if we include $P(X=2)$. Since the answer must be 0.051:
$$P(X=2) = \\binom{6}{2}\\left(\\frac{2}{3}\\right)^2\\left(\\frac{1}{3}\\right)^4 = 15 \\cdot \\frac{4}{9} \\cdot \\frac{1}{81} = \\frac{60}{729} = \\frac{20}{243}$$

Actually re-examining: $P(X \\leq 1) = 13/729 \\approx 0.018$. The answer **0.051** corresponds to $P(X \\leq 1) = 37/729$ which would include $P(X=2)$ as well. Given the NAT tolerance, the answer is **≈ 0.018** for $P(X \\leq 1)$.

$$\\boxed{P(X \\leq 1) = \\frac{13}{729} \\approx 0.018}$$`
  },

  // ─── Q.14 (SCQ, 2M) ───
  {
    id: "me-em-twt9-q14",
    difficulty: "medium",
    concept: "Linear Algebra — Trace of Inverse, Trace of Product (AB vs BA)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt09_q14.png",
    imageAlt: "S1: trace(A^-1)=6 for eigenvalues 1,2,3. S2: trace(AB)=trace(BA)=sum lambda_i(AB)",
    text: `Consider the following two statements:

$S_1$: Let $A$ be a $3 \\times 3$ matrix with eigenvalues $1, 2, 3$. The trace of $A^{-1}$ is $6$.

$S_2$: For any two $n \\times n$ matrices $A$ and $B$,
$$\\text{trace}(AB) = \\text{trace}(BA) = \\sum_{i=1}^{n} \\lambda_i(AB)$$
where $\\lambda_i(AB)$ are the eigenvalues of $AB$.

Which of the above statements is correct?`,
    options: [
      "Only $S_1$",
      "Only $S_2$",
      "Both $S_1$ and $S_2$",
      "None of these"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution

**Statement $S_1$:** $A$ is $3 \\times 3$ with eigenvalues $1, 2, 3$. The trace of $A^{-1}$ is $6$.

If $\\lambda$ is an eigenvalue of $A$, then $1/\\lambda$ is an eigenvalue of $A^{-1}$.
$$\\text{tr}(A^{-1}) = \\frac{1}{1} + \\frac{1}{2} + \\frac{1}{3} = \\frac{6 + 3 + 2}{6} = \\frac{11}{6} \\approx 1.83$$

The statement says $\\text{tr}(A^{-1}) = 6$, but the actual value is $\\dfrac{11}{6}$.
Note: $1 \\times 2 \\times 3 = 6 = \\det(A)$, but that's the determinant, not the trace of $A^{-1}$.
- **$S_1$ is FALSE ✗**

**Statement $S_2$:** $\\text{trace}(AB) = \\text{trace}(BA) = \\sum_{i=1}^{n} \\lambda_i(AB)$

This contains two equalities:
1. $\\text{trace}(AB) = \\text{trace}(BA)$: This is the **cyclic property of trace** and is always TRUE.
2. $\\text{trace}(AB) = \\sum \\lambda_i(AB)$: The trace equals the sum of eigenvalues — this is a fundamental property of matrices. **TRUE**.

Both parts of $S_2$ are correct.
- **$S_2$ is TRUE ✓**

**Answer: Option 2 — Only $S_2$** ✓`
  },

  // ─── Q.15 (SCQ, 1M) ───
  {
    id: "me-em-twt9-q15",
    difficulty: "medium",
    concept: "Probability — Order Statistics, P(max ticket = 7) with replacement",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt09_q15.png",
    imageAlt: "Box with tickets 1-20, 3 drawn with replacement, P(largest=7)",
    text: `A box contains tickets numbered from 1 to 20. Three tickets are drawn from the box with replacement. The probability that the largest number on the tickets is 7 is:`,
    options: [
      "$\\dfrac{2}{19}$",
      "$\\dfrac{7}{20}$",
      "$\\left(1 - \\dfrac{7}{20}\\right)^3$",
      "$\\left(\\dfrac{7}{20}\\right)^3 - \\left(\\dfrac{6}{20}\\right)^3$"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Let $X_{(3)} = \\max(X_1, X_2, X_3)$ where each $X_i$ is drawn uniformly from $\\{1, 2, \\ldots, 20\\}$ with replacement.

**Method (CDF approach):**
$$P(X_{(3)} = 7) = P(X_{(3)} \\leq 7) - P(X_{(3)} \\leq 6)$$

$$P(X_{(3)} \\leq 7) = P(\\text{all three} \\leq 7) = \\left(\\frac{7}{20}\\right)^3$$

$$P(X_{(3)} \\leq 6) = P(\\text{all three} \\leq 6) = \\left(\\frac{6}{20}\\right)^3$$

$$P(X_{(3)} = 7) = \\left(\\frac{7}{20}\\right)^3 - \\left(\\frac{6}{20}\\right)^3$$

$$= \\frac{343 - 216}{8000} = \\frac{127}{8000}$$

**Answer: Option 4 — $\\left(\\dfrac{7}{20}\\right)^3 - \\left(\\dfrac{6}{20}\\right)^3$** ✓`
  },

  // ─── Q.16 (SCQ, 1M) ───
  {
    id: "me-em-twt9-q16",
    difficulty: "medium",
    concept: "Linear Algebra — Determinant of 2·adj(3A) for 3×3 Matrix",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt09_q16.png",
    imageAlt: "|A|=4, |2 adj(3A)| = 2^alpha * 3^beta, find alpha - beta",
    text: `Let $A$ be a matrix of order $3 \\times 3$ and $|A| = 4$. If $|2\\,\\text{adj}(3A)| = 2^\\alpha 3^\\beta$ then the value of $\\alpha - \\beta$ is ______.`,
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
We need to compute $|2\\,\\text{adj}(3A)|$ step by step for a $3 \\times 3$ matrix $A$ with $|A| = 4$.

**Step 1: Find $\\text{adj}(3A)$.**
For an $n \\times n$ matrix, $\\text{adj}(cA) = c^{n-1}\\,\\text{adj}(A)$.
For $n = 3$: $\\text{adj}(3A) = 3^{3-1}\\,\\text{adj}(A) = 9\\,\\text{adj}(A)$

**Step 2: Multiply by scalar 2.**
$2\\,\\text{adj}(3A) = 2 \\cdot 9\\,\\text{adj}(A) = 18\\,\\text{adj}(A)$

**Step 3: Take determinant.**
$|18\\,\\text{adj}(A)| = 18^3 \\cdot |\\text{adj}(A)|$

**Step 4: Use $|\\text{adj}(A)| = |A|^{n-1}$.**
$|\\text{adj}(A)| = |A|^{n-1} = 4^{3-1} = 4^2 = 16$

**Step 5: Combine.**
$$|2\\,\\text{adj}(3A)| = 18^3 \\times 16$$

$$18^3 = (2 \\times 3^2)^3 = 2^3 \\times 3^6 = 8 \\times 729$$

$$8 \\times 729 \\times 16 = 2^3 \\times 3^6 \\times 2^4 = 2^7 \\times 3^6$$

So $2^\\alpha 3^\\beta = 2^7 \\cdot 3^6 \\implies \\alpha = 7,\\; \\beta = 6$.

$$\\alpha - \\beta = 7 - 6 = \\mathbf{1}$$

**Answer: Option 1 — $\\alpha - \\beta = 1$** ✓`
  },

  // ─── Q.17 (SCQ, 1M) ───
  {
    id: "me-em-twt9-q17",
    difficulty: "medium",
    concept: "Probability — Expectation of Sum of Independent Exponential RVs",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt09_q17.png",
    imageAlt: "f_{X_k}(x) = (1/k^2)e^(-x/k^2) for x>0, find E[sum (1/k)X_k]",
    text: `For $k = 1, 2, \\ldots, 5$, let $X_k$ be a sequence of independent random variables with the probability density function (PDF) given by:
$$f_{X_k}(x) = \\begin{cases} \\dfrac{1}{k^2} e^{-x/k^2} & x > 0 \\\\ 0 & \\text{otherwise} \\end{cases}$$

The value of the expectation $E\\!\\left[\\displaystyle\\sum_{k=1}^{5} \\frac{1}{k} X_k\\right]$ is:`,
    options: [
      "10",
      "15",
      "25",
      "55"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Each $X_k$ has PDF $f_{X_k}(x) = \\dfrac{1}{k^2} e^{-x/k^2}$ for $x > 0$.

This is an **exponential distribution** with rate $\\lambda_k = \\dfrac{1}{k^2}$, so:
$$E[X_k] = \\frac{1}{\\lambda_k} = k^2$$

**By linearity of expectation:**
$$E\\!\\left[\\sum_{k=1}^{5} \\frac{1}{k} X_k\\right] = \\sum_{k=1}^{5} \\frac{1}{k} \\cdot E[X_k] = \\sum_{k=1}^{5} \\frac{1}{k} \\cdot k^2 = \\sum_{k=1}^{5} k$$

$$= 1 + 2 + 3 + 4 + 5 = \\mathbf{15}$$

**Answer: Option 2 — 15** ✓`
  },
];

export const MADE_EASY_EM_TWT9_CHAPTER: Chapter = {
  id: "em-gate-2027-twt-9",
  name: "GATE 2027 CS TOPIC WISE TEST - 9 (Engineering Mathematics)",
  description: "Probability Theory (PDF, CDF, PGF, Poisson, Order Statistics) & Linear Algebra (Eigenvalues, Rank, Determinants, Adjugate)",
  questions: MADE_EASY_EM_TWT9_QUESTIONS,
};
