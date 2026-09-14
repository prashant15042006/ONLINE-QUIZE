import { Question } from "./questionTypes";

export const CURATED_QUESTIONS: Record<string, Question[]> = {
  "em-la": [
    {
      "id": "la-c08",
      "difficulty": "medium",
      "concept": "Rank-Nullity Theorem",
      "year": "GATE CS Prep",
      "text": "Let $T: \\mathbb{R}^5 \\to \\mathbb{R}^3$ be a linear transformation. If the nullity of $T$ is 2, what is the rank of $T$?",
      "options": [
        "1",
        "2",
        "3",
        "5"
      ],
      "correctAnswerIndex": 2,
      "explanation": "### Solution\nBy the **Rank-Nullity Theorem**:\n$$\\text{Rank}(T) + \\text{Nullity}(T) = \\dim(\\text{Domain})$$\n$$\\text{Rank}(T) + 2 = 5 \\implies \\text{Rank}(T) = 5 - 2 = \\mathbf{3}$$\nSince the codomain is $\\mathbb{R}^3$, the maximum possible rank is 3, which is achieved here."
    },
    {
      "id": "la-c09",
      "difficulty": "easy",
      "concept": "Orthogonal Matrix",
      "year": "GATE CS Prep",
      "text": "If $Q$ is an orthogonal $n \\times n$ real matrix, which of the following is NOT necessarily true?",
      "options": [
        "$Q^T Q = I$",
        "$\\det(Q) = 1$",
        "$\\|Qx\\| = \\|x\\|$ for all $x \\in \\mathbb{R}^n$",
        "Eigenvalues of $Q$ have absolute value 1"
      ],
      "correctAnswerIndex": 1,
      "explanation": "### Solution\nFor any orthogonal matrix $Q$:\n- $Q^T Q = I$\n- $\\det(Q^T Q) = \\det(Q)^2 = 1 \\implies \\det(Q) = \\pm 1$ (it can be $-1$, e.g., reflection matrices).\nTherefore, $\\det(Q) = 1$ is **not necessarily true**."
    },
    {
      "id": "la-c10",
      "difficulty": "medium",
      "concept": "Symmetric Matrix Eigenvalues",
      "year": "GATE CS Prep",
      "text": "For any real symmetric matrix $A$, which statement is FALSE?",
      "options": [
        "All eigenvalues of $A$ are real numbers",
        "Eigenvectors corresponding to distinct eigenvalues are mutually orthogonal",
        "The geometric multiplicity of each eigenvalue equals its algebraic multiplicity",
        "All eigenvalues of $A$ must be strictly positive"
      ],
      "correctAnswerIndex": 3,
      "explanation": "### Solution\nA real symmetric matrix has all **real eigenvalues**, but they do NOT need to be strictly positive (they can be negative or zero unless the matrix is positive-definite). Thus option D is FALSE."
    },
    {
      "id": "la-c11",
      "difficulty": "hard",
      "concept": "Diagonalizability",
      "year": "GATE CS Prep",
      "text": "A matrix $A \\in \\mathbb{R}^{3 \\times 3}$ has a repeated eigenvalue $\\lambda = 2$ of algebraic multiplicity 3. Under what condition is $A$ diagonalizable?",
      "options": [
        "Always diagonalizable by spectral theorem",
        "If and only if $A = 2I_3$",
        "If and only if $\\det(A) = 8$",
        "Never diagonalizable because $\\lambda$ is repeated"
      ],
      "correctAnswerIndex": 1,
      "explanation": "### Solution\nA matrix is diagonalizable iff geometric multiplicity = algebraic multiplicity for all eigenvalues.\nHere, nullity of $(A - 2I) = 3 \\implies A - 2I = 0 \\implies A = 2I_3$."
    },
    {
      "id": "la-c12",
      "difficulty": "medium",
      "concept": "Nilpotent Matrix",
      "year": "GATE CS Prep",
      "text": "Let $N$ be a non-zero $3 \\times 3$ nilpotent matrix such that $N^3 = 0$ but $N^2 \\neq 0$. What is the trace and determinant of $N$?",
      "options": [
        "trace = 0, det = 0",
        "trace = 3, det = 0",
        "trace = 0, det = 1",
        "trace = 1, det = 0"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nEvery eigenvalue $\\lambda$ of a nilpotent matrix satisfies $\\lambda^k = 0 \\implies \\lambda = 0$.\nSince all eigenvalues are 0:\n$$\\text{trace}(N) = \\sum \\lambda_i = 0, \\quad \\det(N) = \\prod \\lambda_i = 0$$"
    },
    {
      "id": "la-c13",
      "difficulty": "medium",
      "concept": "System of Linear Equations",
      "year": "GATE CS Prep",
      "text": "A system $Ax = b$ with 3 equations and 3 unknowns has $\\text{Rank}(A) = 2$ and $\\text{Rank}([A|b]) = 3$. How many solutions exist?",
      "options": [
        "Unique solution",
        "Infinite solutions with 1 free variable",
        "No solution (inconsistent)",
        "Infinite solutions with 2 free variables"
      ],
      "correctAnswerIndex": 2,
      "explanation": "### Solution\nBy the **Rouché–Capelli Theorem**, a linear system $Ax = b$ is consistent if and only if $\\text{Rank}(A) = \\text{Rank}([A|b])$.\nSince $\\text{Rank}(A) = 2 \\neq 3 = \\text{Rank}([A|b])$, the system is inconsistent and has **no solution**."
    },
    {
      "id": "la-c14",
      "difficulty": "hard",
      "concept": "Cayley-Hamilton Theorem",
      "year": "GATE CS Prep",
      "text": "For $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, the characteristic polynomial is $\\lambda^2 - 5\\lambda - 2$. Using the Cayley-Hamilton theorem, $A^{-1}$ can be written as:",
      "options": [
        "$\\frac{1}{2}(A - 5I)$",
        "$\\frac{1}{2}(5I - A)$",
        "$5I - A$",
        "$A - 5I$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nBy Cayley-Hamilton:\n$$A^2 - 5A - 2I = 0$$\nMultiply by $A^{-1}$:\n$$A - 5I - 2A^{-1} = 0 \\implies 2A^{-1} = A - 5I \\implies A^{-1} = \\frac{1}{2}(A - 5I)$$"
    },
    {
      "id": "la-c15",
      "difficulty": "easy",
      "concept": "Determinant Scaling",
      "year": "GATE CS Prep",
      "text": "If $A$ is a $4 \\times 4$ matrix and $\\det(A) = -3$, then $\\det(-2A)$ is equal to:",
      "options": [
        "6",
        "-48",
        "-24",
        "48"
      ],
      "correctAnswerIndex": 1,
      "explanation": "### Solution\nFor an $n \\times n$ matrix, $\\det(cA) = c^n \\det(A)$.\nHere $n = 4$ and $c = -2$:\n$$\\det(-2A) = (-2)^4 \\det(A) = 16 \\times (-3) = -48$$"
    },
    {
      "id": "la-c16",
      "difficulty": "medium",
      "concept": "Positive Definite Matrix",
      "year": "GATE CS Prep",
      "text": "The matrix $M = \\begin{pmatrix} 2 & k \\\\ k & 8 \\end{pmatrix}$ is positive definite if and only if $k$ satisfies:",
      "options": [
        "$-4 < k < 4$",
        "$-16 < k < 16$",
        "$k > 4$",
        "$k < -4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nBy Sylvester's criterion, a symmetric matrix is positive definite iff all leading principal minors are strictly positive:\n1. $\\Delta_1 = 2 > 0$ (satisfied)\n2. $\\Delta_2 = \\det(M) = 2(8) - k^2 = 16 - k^2 > 0 \\implies k^2 < 16 \\implies \\mathbf{-4 < k < 4}$"
    },
    {
      "id": "la-c17",
      "difficulty": "hard",
      "concept": "Projection Matrix",
      "year": "GATE CS Prep",
      "text": "If $P$ is an orthogonal projection matrix ($P^2 = P = P^T$), which of the following are the only possible eigenvalues of $P$?",
      "options": [
        "0 and 1",
        "-1 and 1",
        "Any real number",
        "1 only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nLet $\\lambda$ be an eigenvalue of $P$ with eigenvector $v \\neq 0$:\n$$Pv = \\lambda v \\implies P^2 v = P(Pv) = \\lambda^2 v$$\nSince $P^2 = P$, we have $\\lambda^2 v = \\lambda v \\implies (\\lambda^2 - \\lambda)v = 0$.\nSince $v \\neq 0$, $\\lambda^2 - \\lambda = 0 \\implies \\lambda(\\lambda - 1) = 0 \\implies \\lambda \\in \\{0, 1\\}$."
    },
    {
      "id": "la-c18",
      "difficulty": "easy",
      "concept": "Matrix Trace",
      "year": "GATE CS Prep",
      "text": "If the eigenvalues of a $3 \\times 3$ matrix $A$ are 2, 3, and -1, what is the trace of $A^2$?",
      "options": [
        "14",
        "4",
        "9",
        "12"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEigenvalues of $A^2$ are $\\lambda_i^2$: $2^2 = 4, 3^2 = 9, (-1)^2 = 1$.\\n$$\\text{trace}(A^2) = 4 + 9 + 1 = \\mathbf{14}$$"
    },
    {
      "id": "la-c19",
      "difficulty": "medium",
      "concept": "Determinant and Inverse",
      "year": "GATE CS Prep",
      "text": "For a non-singular $3 \\times 3$ matrix $A$, $\\det(\\text{adj}(A))$ is equal to:",
      "options": [
        "$(\\det(A))^2$",
        "$\\det(A)$",
        "$(\\det(A))^3$",
        "$1/\\det(A)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor an $n \\times n$ matrix, $\\det(\\text{adj}(A)) = (\\det(A))^{n-1}$.\\nHere $n = 3 \\implies (\\det(A))^{3-1} = \\mathbf{(\\det(A))^2}$."
    },
    {
      "id": "la-c20",
      "difficulty": "hard",
      "concept": "Gram-Schmidt Orthonormalization",
      "year": "GATE CS Prep",
      "text": "Applying Gram-Schmidt to $v_1 = (1, 1)^T$ and $v_2 = (1, 0)^T$, the first normalized basis vector $u_1$ is:",
      "options": [
        "$(1/\\sqrt{2}, 1/\\sqrt{2})^T$",
        "$(1, 0)^T$",
        "$(0, 1)^T$",
        "$(1/2, 1/2)^T$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\|v_1\\| = \\sqrt{1^2 + 1^2} = \\sqrt{2} \\implies u_1 = \\frac{v_1}{\\|v_1\\|} = \\mathbf{(1/\\sqrt{2}, 1/\\sqrt{2})^T}$$"
    },
    {
      "id": "la-c21",
      "difficulty": "medium",
      "concept": "Idempotent Matrix",
      "year": "GATE CS Prep",
      "text": "A matrix $A$ satisfies $A^2 = A$. What are the possible eigenvalues of $A$?",
      "options": [
        "0 and 1",
        "-1 and 1",
        "0 only",
        "1 only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$A^2 v = \\lambda^2 v$ and $Av = \\lambda v \\implies \\lambda^2 = \\lambda \\implies \\lambda(\\lambda - 1) = 0 \\implies \\lambda \\in \\{0, 1\\}."
    },
    {
      "id": "la-c22",
      "difficulty": "hard",
      "concept": "Singular Values",
      "year": "GATE CS Prep",
      "text": "The singular values of a matrix $A$ are the square roots of the eigenvalues of which matrix?",
      "options": [
        "$A^T A$",
        "$A + A^T$",
        "$A^{-1}$",
        "$A^2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe singular values $\\sigma_i$ of $A$ are defined as $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$ where $\\lambda_i$ are the non-negative eigenvalues of the symmetric matrix $A^T A$."
    },
    {
      "id": "la-c23",
      "difficulty": "easy",
      "concept": "Vector Space Basis",
      "year": "GATE CS Prep",
      "text": "The vectors $(1, 0, 0), (0, 1, 0), (1, 1, 0)$ in $\\mathbb{R}^3$ are:",
      "options": [
        "Linearly dependent",
        "Linearly independent",
        "A basis for $\\mathbb{R}^3$",
        "Mutually orthogonal"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$(1, 1, 0) = 1(1, 0, 0) + 1(0, 1, 0)$. Since one vector is a linear combination of the other two, the set is **linearly dependent**."
    },
    {
      "id": "la-c24",
      "difficulty": "medium",
      "concept": "Cramer's Rule",
      "year": "GATE CS Prep",
      "text": "In solving $Ax = b$ using Cramer's rule, if $\\det(A) \\neq 0$, $x_i$ is given by:",
      "options": [
        "$\\det(A_i)/\\det(A)$",
        "$\\det(A)/\\det(A_i)$",
        "$\\det(A) \\cdot \\det(A_i)$",
        "$\\det(A - A_i)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Cramer's Rule, $x_i = \\frac{\\det(A_i)}{\\det(A)}$, where $A_i$ is the matrix formed by replacing the $i$-th column of $A$ with column vector $b$."
    },
    {
      "id": "la-c25",
      "difficulty": "hard",
      "concept": "Jordan Canonical Form",
      "year": "GATE CS Prep",
      "text": "A $4 \\times 4$ matrix has minimal polynomial $m(\\lambda) = (\\lambda - 2)^2$ and characteristic polynomial $p(\\lambda) = (\\lambda - 2)^4$. The size of the largest Jordan block is:",
      "options": [
        "2",
        "4",
        "1",
        "3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe size of the largest Jordan block corresponding to eigenvalue $\\lambda$ equals the multiplicity of that factor in the **minimal polynomial**, which is **2**."
    }
  ],
  "em-dm": [
    {
      "id": "dm-c07",
      "difficulty": "medium",
      "concept": "Inclusion-Exclusion Principle",
      "year": "GATE CS Prep",
      "text": "How many integers between 1 and 1000 (both inclusive) are NOT divisible by 2, 3, or 5?",
      "options": [
        "266",
        "300",
        "267",
        "233"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nTotal $N = 1000$.\n- $|A_2| = \\lfloor 1000/2 \\rfloor = 500$\n- $|A_3| = \\lfloor 1000/3 \\rfloor = 333$\n- $|A_5| = \\lfloor 1000/5 \\rfloor = 200$\n- $|A_{2,3}| = 166, |A_{2,5}| = 100, |A_{3,5}| = 66$\n- $|A_{2,3,5}| = \\lfloor 1000/30 \\rfloor = 33$\nBy PIE:\n$$|A_2 \\cup A_3 \\cup A_5| = (500+333+200) - (166+100+66) + 33 = 1033 - 332 + 33 = 734$$\nNot divisible by any: $1000 - 734 = \\mathbf{266}$."
    },
    {
      "id": "dm-c08",
      "difficulty": "hard",
      "concept": "Recurrence Relations",
      "year": "GATE CS Prep",
      "text": "Solve the recurrence $a_n = 5a_{n-1} - 6a_{n-2}$ for $n \\ge 2$ with $a_0 = 1, a_1 = 4$. What is $a_n$?",
      "options": [
        "$2 \\cdot 3^n - 2^n$",
        "$3^n + 2^n$",
        "$2 \\cdot 2^n - 3^n$",
        "$3 \\cdot 2^n - 3^n$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nCharacteristic equation: $r^2 - 5r + 6 = 0 \\implies (r-2)(r-3) = 0$.\nRoots: $r_1 = 2, r_2 = 3$.\nGeneral solution: $a_n = c_1 2^n + c_2 3^n$.\n- $a_0 = c_1 + c_2 = 1$\n- $a_1 = 2c_1 + 3c_2 = 4$\nSubtracting $2(c_1+c_2) = 2$ from second gives $c_2 = 2 \\implies c_1 = -1$.\n$$a_n = -2^n + 2 \\cdot 3^n = 2 \\cdot 3^n - 2^n$$"
    },
    {
      "id": "dm-c09",
      "difficulty": "medium",
      "concept": "Fermat's Little Theorem",
      "year": "GATE CS Prep",
      "text": "What is the remainder when $3^{102}$ is divided by 101?",
      "options": [
        "1",
        "3",
        "9",
        "27"
      ],
      "correctAnswerIndex": 2,
      "explanation": "### Solution\n101 is a prime number. By **Fermat's Little Theorem**, for $\\gcd(a, p) = 1$:\n$$a^{p-1} \\equiv 1 \\pmod p$$\n$$3^{100} \\equiv 1 \\pmod{101}$$\nThen:\n$$3^{102} = 3^{100} \\times 3^2 \\equiv 1 \\times 9 = \\mathbf{9} \\pmod{101}$$"
    },
    {
      "id": "dm-c10",
      "difficulty": "easy",
      "concept": "Handshaking Lemma",
      "year": "GATE CS Prep",
      "text": "A simple graph has 12 edges and 6 vertices. If each vertex has degree $d$, what is $d$?",
      "options": [
        "2",
        "3",
        "4",
        "6"
      ],
      "correctAnswerIndex": 2,
      "explanation": "### Solution\nBy the **Handshaking Lemma**:\n$$\\sum_{v \\in V} \\deg(v) = 2|E|$$\n$$6 \\times d = 2 \\times 12 = 24 \\implies d = \\mathbf{4}$$"
    },
    {
      "id": "dm-c11",
      "difficulty": "medium",
      "concept": "Euler's Totient Function",
      "year": "GATE CS Prep",
      "text": "The value of Euler's Totient function $\\phi(360)$ is:",
      "options": [
        "96",
        "72",
        "120",
        "84"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nPrime factorization: $360 = 2^3 \\times 3^2 \\times 5^1$.\n$$\\phi(n) = n \\left(1 - \\frac{1}{p_1}\\right)\\left(1 - \\frac{1}{p_2}\\right)\\left(1 - \\frac{1}{p_3}\\right)$$\n$$\\phi(360) = 360 \\times \\left(1 - \\frac{1}{2}\\right) \\times \\left(1 - \\frac{1}{3}\\right) \\times \\left(1 - \\frac{1}{5}\\right) = 360 \\times \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{4}{5} = \\mathbf{96}$$"
    },
    {
      "id": "dm-c12",
      "difficulty": "hard",
      "concept": "Chromatic Number",
      "year": "GATE CS Prep",
      "text": "What is the chromatic number of the cycle graph $C_n$ for odd $n \\ge 3$ and even $n \\ge 4$, respectively?",
      "options": [
        "3 for odd, 2 for even",
        "2 for odd, 3 for even",
        "Always 3",
        "Always 2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n- An even cycle is bipartite, hence its chromatic number $\\chi(C_{even}) = 2$.\n- An odd cycle contains an odd cycle, cannot be bipartite, and requires 3 colors: $\\chi(C_{odd}) = 3$."
    },
    {
      "id": "dm-c13",
      "difficulty": "medium",
      "concept": "First-Order Logic",
      "year": "GATE CS Prep",
      "text": "The logical expression $\\neg \\forall x (P(x) \\to Q(x))$ is logically equivalent to:",
      "options": [
        "$\\exists x (P(x) \\wedge \\neg Q(x))$",
        "$\\exists x (\\neg P(x) \\vee Q(x))$",
        "$\\forall x (P(x) \\wedge \\neg Q(x))$",
        "$\\neg \\exists x (P(x) \\wedge Q(x))$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n$$\\neg \\forall x (P(x) \\to Q(x)) \\equiv \\exists x \\neg (P(x) \\to Q(x))$$\nSince $A \\to B \\equiv \\neg A \\vee B$, its negation is $\\neg(\\neg A \\vee B) \\equiv A \\wedge \\neg B$.\n$$\\implies \\mathbf{\\exists x (P(x) \\wedge \\neg Q(x))}$$"
    },
    {
      "id": "dm-c14",
      "difficulty": "medium",
      "concept": "Derangements",
      "year": "GATE CS Prep",
      "text": "The number of derangements of 4 items $D_4$ (permutations where no item appears in its original position) is:",
      "options": [
        "9",
        "8",
        "6",
        "12"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!} \\implies D_4 = 24 \\left(1 - 1 + \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24}\\right) = 24 \\left(\\frac{12 - 4 + 1}{24}\\right) = \\mathbf{9}$$"
    },
    {
      "id": "dm-c15",
      "difficulty": "easy",
      "concept": "Pigeonhole Principle",
      "year": "GATE CS Prep",
      "text": "What is the minimum number of people required in a room to guarantee that at least two were born on the same day of the week?",
      "options": [
        "8",
        "7",
        "6",
        "14"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThere are 7 days in a week ($n = 7$ pigeonholes). To ensure at least 2 people share a day, by Pigeonhole Principle we need $n + 1 = 7 + 1 = \\mathbf{8}$ people."
    },
    {
      "id": "dm-c16",
      "difficulty": "hard",
      "concept": "Generating Functions",
      "year": "GATE CS Prep",
      "text": "The ordinary generating function for the sequence $a_n = n$ for $n \\ge 0$ is:",
      "options": [
        "$\\frac{x}{(1-x)^2}$",
        "$\\frac{1}{(1-x)^2}$",
        "$\\frac{1}{1-x}$",
        "$\\frac{x}{1-x}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x} \\implies \\frac{d}{dx}\\left(\\frac{1}{1-x}\\right) = \\sum_{n=1}^\\infty n x^{n-1} = \\frac{1}{(1-x)^2}$$\\nMultiply by $x$: $\\sum_{n=0}^\\infty n x^n = \\mathbf{\\frac{x}{(1-x)^2}}$."
    },
    {
      "id": "dm-c17",
      "difficulty": "medium",
      "concept": "Poset and Lattice",
      "year": "GATE CS Prep",
      "text": "A partially ordered set (poset) is called a **lattice** if and only if:",
      "options": [
        "Every pair of elements has a unique least upper bound (join) and greatest lower bound (meet)",
        "Every element is comparable to every other element",
        "It has a unique maximal and minimal element",
        "Its Hasse diagram is a tree"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA poset $(L, \\le)$ is a lattice iff for every $a, b \\in L$, $\\sup(a,b)$ (join) and $\\inf(a,b)$ (meet) exist in $L$."
    },
    {
      "id": "dm-c18",
      "difficulty": "easy",
      "concept": "Equivalence Relation",
      "year": "GATE CS Prep",
      "text": "A relation $R$ on set $S$ is an equivalence relation if and only if $R$ is:",
      "options": [
        "Reflexive, Symmetric, and Transitive",
        "Reflexive, Antisymmetric, and Transitive",
        "Symmetric and Transitive only",
        "Irreflexive and Symmetric"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy definition, an equivalence relation must satisfy: 1) Reflexivity, 2) Symmetry, and 3) Transitivity."
    },
    {
      "id": "dm-c19",
      "difficulty": "medium",
      "concept": "Bipartite Graph Edge Bound",
      "year": "GATE CS Prep",
      "text": "A bipartite graph with $n$ vertices has at most how many edges?",
      "options": [
        "$n^2 / 4$",
        "$n(n-1)/2$",
        "$n^2$",
        "$2n$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIf partitioned into subsets of sizes $k$ and $n-k$, maximum edges $= k(n-k)$. The product is maximized when $k = n/2$, giving $\\frac{n}{2} \\times \\frac{n}{2} = \\mathbf{\\frac{n^2}{4}}$ (Turán's theorem for $r=2$)."
    },
    {
      "id": "dm-c20",
      "difficulty": "hard",
      "concept": "Onto Functions",
      "year": "GATE CS Prep",
      "text": "The number of surjective (onto) functions from a 4-element set $A$ to a 3-element set $B$ is:",
      "options": [
        "36",
        "24",
        "64",
        "81"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\sum_{j=0}^k (-1)^j \\binom{k}{j} (k-j)^n$$\\nFor $n=4, k=3$:\\n$$3^4 - \\binom{3}{1}2^4 + \\binom{3}{2}1^4 = 81 - 3(16) + 3(1) = 81 - 48 + 3 = \\mathbf{36}$$"
    },
    {
      "id": "dm-c21",
      "difficulty": "medium",
      "concept": "Planar Graph Faces",
      "year": "GATE CS Prep",
      "text": "A connected planar graph has 8 vertices and divides the plane into 5 faces. How many edges does it have?",
      "options": [
        "11",
        "12",
        "10",
        "9"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Euler's formula for planar graphs: $V - E + F = 2$.\\n$$8 - E + 5 = 2 \\implies 13 - E = 2 \\implies E = \\mathbf{11}$$"
    }
  ],
  "em-prob": [
    {
      "id": "prob-c09",
      "difficulty": "medium",
      "concept": "Exponential Distribution",
      "year": "GATE CS Prep",
      "text": "The lifetime of a component follows an exponential distribution with mean 10 hours. Due to memorylessness, $P(X > 25 \\mid X > 15)$ is equal to:",
      "options": [
        "$e^{-1}$",
        "$e^{-2.5}$",
        "$e^{-1.5}$",
        "$1 - e^{-1}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nBy the **memoryless property** of exponential distribution:\n$$P(X > s + t \\mid X > s) = P(X > t)$$\nHere $s = 15, s+t = 25 \\implies t = 10$.\nParameter $\\lambda = 1/\\text{mean} = 1/10 = 0.1$.\n$$P(X > 10) = e^{-\\lambda(10)} = e^{-0.1 \\times 10} = e^{-1}$$"
    },
    {
      "id": "prob-c10",
      "difficulty": "easy",
      "concept": "Binomial Distribution Variance",
      "year": "GATE CS Prep",
      "text": "A fair die is rolled 180 times. What are the mean and standard deviation of the number of times 6 appears?",
      "options": [
        "Mean = 30, Std Dev = 5",
        "Mean = 30, Std Dev = 25",
        "Mean = 60, Std Dev = 5",
        "Mean = 30, Std Dev = $\\sqrt{30}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n$n = 180, p = 1/6, q = 5/6$.\n$$\\text{Mean } \\mu = np = 180 \\times \\frac{1}{6} = 30$$\n$$\\text{Variance } \\sigma^2 = npq = 180 \\times \\frac{1}{6} \\times \\frac{5}{6} = 25$$\n$$\\text{Standard Deviation } \\sigma = \\sqrt{25} = \\mathbf{5}$$"
    },
    {
      "id": "prob-c11",
      "difficulty": "hard",
      "concept": "Chebyshev's Inequality",
      "year": "GATE CS Prep",
      "text": "A random variable $X$ has mean $\\mu = 20$ and variance $\\sigma^2 = 9$. By Chebyshev's inequality, the upper bound on $P(|X - 20| \\ge 6)$ is:",
      "options": [
        "1/4",
        "1/9",
        "1/2",
        "1/3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nChebyshev's inequality states:\n$$P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}$$\nHere $\\sigma = \\sqrt{9} = 3$. We want $P(|X - 20| \\ge 6) = P(|X - \\mu| \\ge 2\\sigma)$, so $k = 2$.\n$$\\text{Upper bound} = \\frac{1}{2^2} = \\mathbf{\\frac{1}{4}}$$"
    },
    {
      "id": "prob-c12",
      "difficulty": "medium",
      "concept": "Continuous Random Variable",
      "year": "GATE CS Prep",
      "text": "A continuous random variable $X$ has PDF $f(x) = c x^2$ for $0 \\le x \\le 3$, and 0 otherwise. What is the value of $c$?",
      "options": [
        "1/9",
        "1/27",
        "1/3",
        "2/27"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nTotal probability must equal 1:\n$$\\int_0^3 c x^2 \\, dx = 1 \\implies c \\left[\\frac{x^3}{3}\\right]_0^3 = c \\left(\\frac{27}{3}\\right) = 9c = 1 \\implies c = \\mathbf{\\frac{1}{9}}$$"
    },
    {
      "id": "prob-c13",
      "difficulty": "easy",
      "concept": "Independent Events",
      "year": "GATE CS Prep",
      "text": "If events $A$ and $B$ are independent with $P(A) = 0.4$ and $P(B) = 0.5$, then $P(A \\cup B)$ is:",
      "options": [
        "0.70",
        "0.90",
        "0.20",
        "0.60"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSince $A$ and $B$ are independent, $P(A \\cap B) = P(A)P(B) = 0.4 \\times 0.5 = 0.20$.\\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.4 + 0.5 - 0.20 = \\mathbf{0.70}$$"
    },
    {
      "id": "prob-c14",
      "difficulty": "medium",
      "concept": "Geometric Distribution Mean",
      "year": "GATE CS Prep",
      "text": "A fair coin is tossed until a Head appears. What is the expected number of tosses?",
      "options": [
        "2",
        "1",
        "4",
        "1.5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nNumber of trials until first success follows a Geometric distribution with $p = 1/2$.\\n$$E[X] = \\frac{1}{p} = \\frac{1}{1/2} = \\mathbf{2}$$"
    },
    {
      "id": "prob-c15",
      "difficulty": "hard",
      "concept": "Bayes Theorem Rare Disease",
      "year": "GATE CS Prep",
      "text": "A rare disease affects 0.1% of people. A test is 98% accurate (true positive = 0.98, false positive = 0.02). If a random person tests positive, what is the probability they actually have the disease?",
      "options": [
        "~4.7%",
        "~98%",
        "~50%",
        "~1%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)} = \\frac{0.98 \\times 0.001}{(0.98 \\times 0.001) + (0.02 \\times 0.999)} = \\frac{0.00098}{0.00098 + 0.01998} \\approx \\mathbf{4.67\\%}$$"
    },
    {
      "id": "prob-c16",
      "difficulty": "medium",
      "concept": "Poisson Distribution Probability",
      "year": "GATE CS Prep",
      "text": "Packets arrive at a router following a Poisson process with rate $\\lambda = 2$ packets/ms. What is the probability that exactly 0 packets arrive in a 1 ms interval?",
      "options": [
        "$e^{-2}$",
        "$2e^{-2}$",
        "$1 - e^{-2}$",
        "$e^{-1}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} \\implies P(X = 0) = \\frac{2^0 e^{-2}}{0!} = \\mathbf{e^{-2}}$$"
    },
    {
      "id": "prob-c17",
      "difficulty": "medium",
      "concept": "Uniform Distribution Variance",
      "year": "GATE CS Prep",
      "text": "A continuous random variable $X$ is uniformly distributed over $[2, 10]$. What is its variance?",
      "options": [
        "16/3",
        "4",
        "16",
        "8/3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor $X \\sim U(a, b)$:\\n$$\\text{Var}(X) = \\frac{(b - a)^2}{12} = \\frac{(10 - 2)^2}{12} = \\frac{64}{12} = \\mathbf{\\frac{16}{3}}$$"
    },
    {
      "id": "prob-c18",
      "difficulty": "hard",
      "concept": "Covariance of Sum",
      "year": "GATE CS Prep",
      "text": "If $\\text{Var}(X) = 4, \\text{Var}(Y) = 9$, and the correlation coefficient $\\rho(X, Y) = 0.5$, what is $\\text{Var}(2X - Y)$?",
      "options": [
        "13",
        "25",
        "19",
        "37"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Cov}(X,Y) = \\rho \\sigma_X \\sigma_Y = 0.5 \\times 2 \\times 3 = 3$$\\n$$\\text{Var}(2X - Y) = 4\\text{Var}(X) + \\text{Var}(Y) - 4\\text{Cov}(X,Y) = 4(4) + 9 - 4(3) = 16 + 9 - 12 = \\mathbf{13}$$"
    },
    {
      "id": "prob-c19",
      "difficulty": "easy",
      "concept": "Normal Distribution Symmetry",
      "year": "GATE CS Prep",
      "text": "For a standard normal random variable $Z \\sim N(0, 1)$, $P(Z > 1.5)$ is equal to:",
      "options": [
        "$P(Z < -1.5)$",
        "$1 - P(Z > -1.5)$",
        "$P(Z < 1.5)$",
        "$2 P(Z > 1.5)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy symmetry of the standard normal bell curve around 0, the right tail $P(Z > 1.5)$ is identical in area to the left tail $P(Z < -1.5)$."
    },
    {
      "id": "prob-c20",
      "difficulty": "hard",
      "concept": "Birthday Paradox",
      "year": "GATE CS Prep",
      "text": "Approximately how many randomly chosen people are needed in a group to have at least a 50% chance that two share the same birthday (365-day year)?",
      "options": [
        "23",
        "183",
        "50",
        "365"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy the famous **Birthday Problem**, with $n = 23$ people, the probability of all unique birthdays is $P \\approx 0.493$, meaning the chance of at least one shared birthday is $1 - 0.493 = \\mathbf{50.7\\%}$."
    },
    {
      "id": "prob-c21",
      "difficulty": "medium",
      "concept": "Central Limit Theorem",
      "year": "GATE CS Prep",
      "text": "According to the Central Limit Theorem, the sum or average of a large number of independent and identically distributed (i.i.d.) random variables approaches which distribution?",
      "options": [
        "Normal distribution",
        "Poisson distribution",
        "Exponential distribution",
        "Uniform distribution"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **Central Limit Theorem (CLT)** states that regardless of the underlying distribution (provided finite mean and variance), normalized sums of i.i.d. random variables converge in distribution to a **standard normal distribution**."
    },
    {
      "id": "prob-c22",
      "difficulty": "medium",
      "concept": "Expectation of Product",
      "year": "GATE CS Prep",
      "text": "If $X$ and $Y$ are independent random variables with $E[X] = 3$ and $E[Y] = 7$, what is $E[XY]$?",
      "options": [
        "21",
        "10",
        "4",
        "Cannot be determined"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor independent random variables, $E[XY] = E[X]E[Y] = 3 \\times 7 = \\mathbf{21}$."
    }
  ],
  "dl-seq": [
    {
      "id": "seq-c07",
      "difficulty": "medium",
      "concept": "JK Characteristic Equation",
      "year": "GATE CS Prep",
      "text": "The characteristic equation of a JK flip-flop expressing next state $Q^+$ in terms of inputs $J, K$ and current state $Q$ is:",
      "options": [
        "$Q^+ = J\\overline{Q} + \\overline{K}Q$",
        "$Q^+ = \\overline{J}Q + K\\overline{Q}$",
        "$Q^+ = JQ + K\\overline{Q}$",
        "$Q^+ = J \\oplus K \\oplus Q$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nFrom the JK flip-flop truth table:\n- When $Q=0$: $Q^+ = 1$ if $J=1$ (regardless of $K$) $\\implies J\\overline{Q}$\n- When $Q=1$: $Q^+ = 1$ if $K=0$ (regardless of $J$) $\\implies \\overline{K}Q$\nCombining gives: $Q^+ = J\\overline{Q} + \\overline{K}Q$."
    },
    {
      "id": "seq-c08",
      "difficulty": "hard",
      "concept": "Maximum Clock Frequency",
      "year": "GATE CS Prep",
      "text": "A synchronous counter uses flip-flops with propagation delay $t_{ff} = 12\\text{ ns}$, setup time $t_{setup} = 4\\text{ ns}$, and combinational logic delay $t_{comb} = 9\\text{ ns}$. What is the maximum operating clock frequency?",
      "options": [
        "40 MHz",
        "50 MHz",
        "33.3 MHz",
        "25 MHz"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nMinimum clock period:\n$$T_{clk} \\ge t_{ff} + t_{comb} + t_{setup} = 12\\text{ ns} + 9\\text{ ns} + 4\\text{ ns} = 25\\text{ ns}$$\nMaximum clock frequency:\n$$f_{max} = \\frac{1}{T_{clk}} = \\frac{1}{25 \\times 10^{-9}\\text{ s}} = 40 \\times 10^6\\text{ Hz} = \\mathbf{40\\text{ MHz}}$$"
    },
    {
      "id": "seq-c09",
      "difficulty": "medium",
      "concept": "Ring vs Johnson Counter",
      "year": "GATE CS Prep",
      "text": "How many unused states exist in a 5-bit Ring counter and a 5-bit Johnson counter, respectively?",
      "options": [
        "27 and 22",
        "27 and 21",
        "26 and 22",
        "31 and 22"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nA 5-bit register has $2^5 = 32$ total states.\n- 5-bit Ring counter uses $n = 5$ states $\\implies 32 - 5 = \\mathbf{27}$ unused states.\n- 5-bit Johnson counter uses $2n = 10$ states $\\implies 32 - 10 = \\mathbf{22}$ unused states."
    },
    {
      "id": "seq-c10",
      "difficulty": "medium",
      "concept": "Sequence Detector Overlap",
      "year": "GATE CS Prep",
      "text": "To detect the bit pattern '101' in an overlapping input stream using a Mealy machine, what is the minimum number of states required?",
      "options": [
        "3",
        "4",
        "2",
        "5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nFor an $n$-bit pattern:\n- A **Mealy machine** needs minimum **$n$ states** (here $n = 3$: initial state, got '1', got '10'; the output 1 is generated on transition back from '10' on input '1').\n- A Moore machine would require $n + 1 = 4$ states."
    },
    {
      "id": "seq-c11",
      "difficulty": "easy",
      "concept": "T Flip-Flop Conversion",
      "year": "GATE CS Prep",
      "text": "To implement a T flip-flop using a D flip-flop, the input $D$ should be driven by:",
      "options": [
        "$T \\oplus Q$",
        "$T \\cdot Q$",
        "$T + Q$",
        "$\\overline{T \\oplus Q}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nFor a D flip-flop, $Q^+ = D$.\nFor a T flip-flop, $Q^+ = T \\oplus Q$.\nSetting them equal: $D = T \\oplus Q$."
    },
    {
      "id": "seq-c12",
      "difficulty": "medium",
      "concept": "D to T Flip-Flop",
      "year": "GATE CS Prep",
      "text": "Which logic gate is required to convert a D flip-flop into a T flip-flop?",
      "options": [
        "XOR gate",
        "AND gate",
        "OR gate",
        "NAND gate"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$Q^+ = T \\oplus Q$. For a D flip-flop, $Q^+ = D$. Therefore, setting $D = T \\oplus Q$ using an **XOR gate** implements a T flip-flop."
    },
    {
      "id": "seq-c13",
      "difficulty": "easy",
      "concept": "S-R Latch Forbidden State",
      "year": "GATE CS Prep",
      "text": "In an SR latch implemented with NOR gates, the input condition $S = 1, R = 1$ is prohibited because:",
      "options": [
        "Both outputs $Q$ and $\\overline{Q}$ become 0, violating complementarity",
        "It creates an open circuit",
        "It causes infinite current draw",
        "The outputs become high impedance"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nWith NOR gates, an input of 1 forces the output to 0. When $S=1, R=1$, both $Q=0$ and $\\overline{Q}=0$. Upon transition to $S=0, R=0$, race condition causes unpredictable state."
    },
    {
      "id": "seq-c14",
      "difficulty": "medium",
      "concept": "Mod-N Counter Flip-Flop Count",
      "year": "GATE CS Prep",
      "text": "How many flip-flops are required to construct a MOD-10 (decade) counter?",
      "options": [
        "4",
        "3",
        "10",
        "5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$2^{n-1} < N \\le 2^n \\implies 2^3 < 10 \\le 2^4 \\implies n = \\mathbf{4}$ flip-flops."
    },
    {
      "id": "seq-c15",
      "difficulty": "hard",
      "concept": "Asynchronous Ripple Counter Delay",
      "year": "GATE CS Prep",
      "text": "A 6-bit ripple counter uses flip-flops with propagation delay of 15 ns each. What is the total settling time after a clock transition?",
      "options": [
        "90 ns",
        "15 ns",
        "30 ns",
        "60 ns"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIn a ripple counter, each stage triggers the next stage sequentially (ripple effect):\\n$$\\text{Total delay} = n \\times t_{pd} = 6 \\times 15\\text{ ns} = \\mathbf{90\\text{ ns}}$$"
    },
    {
      "id": "seq-c16",
      "difficulty": "medium",
      "concept": "Shift Register Serial to Parallel",
      "year": "GATE CS Prep",
      "text": "In a 4-bit Serial-In Parallel-Out (SIPO) shift register, how many clock pulses are needed to load 4 bits of serial data?",
      "options": [
        "4",
        "1",
        "3",
        "8"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLoading serial data requires 1 clock pulse per bit, so 4 bits require **4 clock pulses**. (Reading the parallel output takes 0 additional clock pulses once loaded)."
    },
    {
      "id": "seq-c17",
      "difficulty": "medium",
      "concept": "Race-Around Solution",
      "year": "GATE CS Prep",
      "text": "Which of the following circuit configurations completely eliminates the race-around condition in a JK flip-flop?",
      "options": [
        "Master-Slave JK flip-flop",
        "Increasing clock pulse duration",
        "Using level-triggered JK flip-flop",
        "Connecting an inverter from output to input"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA **Master-Slave JK flip-flop** isolates the input response from the output update across two phases of the clock pulse, completely eliminating race-around."
    },
    {
      "id": "seq-c18",
      "difficulty": "easy",
      "concept": "Setup Time Definition",
      "year": "GATE CS Prep",
      "text": "Setup time ($t_{setup}$) of a clocked flip-flop is the minimum time:",
      "options": [
        "Input data must remain stable BEFORE the active clock edge",
        "Input data must remain stable AFTER the active clock edge",
        "Clock pulse must stay high",
        "Taken for output to change after clock edge"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**Setup time** is the minimum time during which input data must be held stable **before** the clock transition to guarantee reliable latching."
    }
  ],
  "coa-pipeline": [
    {
      "id": "pipe-c06",
      "difficulty": "medium",
      "concept": "Data Dependency RAW",
      "year": "GATE CS Prep",
      "text": "Consider the instruction pair:\n$I_1$: `R1 <- R2 + R3`\n$I_2$: `R4 <- R1 - R5`\nThis creates which type of data hazard?",
      "options": [
        "RAW (True Data Dependency)",
        "WAR (Anti-dependency)",
        "WAW (Output dependency)",
        "Structural hazard"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n$I_1$ writes to R1 and $I_2$ reads R1 before $I_1$ completes its write. This is a **Read After Write (RAW)** hazard, also known as a true data dependency."
    },
    {
      "id": "pipe-c07",
      "difficulty": "hard",
      "concept": "Load-Use Stall with Forwarding",
      "year": "GATE CS Prep",
      "text": "In a standard 5-stage RISC pipeline (IF, ID, EX, MEM, WB) with full data forwarding hardware, why does a `LOAD` instruction followed immediately by an instruction that uses the loaded value still require 1 stall cycle?",
      "options": [
        "Because data is only available at the end of the MEM stage, while the next instruction needs it at the beginning of EX",
        "Because the register file cannot be accessed concurrently",
        "Because memory access takes 2 clock cycles",
        "Because forwarding paths cannot cross stage boundaries"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nThe `LOAD` instruction retrieves data from memory at the end of the **MEM** stage. The dependent instruction needs this operand at the start of its **EX** stage. Since the dependent instruction reaches EX while the LOAD is in MEM, time travel is impossible, requiring **1 bubble/stall cycle**."
    },
    {
      "id": "pipe-c08",
      "difficulty": "medium",
      "concept": "Branch Penalty BTB",
      "year": "GATE CS Prep",
      "text": "In a 5-stage pipeline, branches make up 20% of instructions. A Branch Target Buffer (BTB) has an 80% prediction accuracy with 0 penalty on hit. A misprediction has a 2-cycle penalty. What is the average CPI assuming base CPI is 1.0?",
      "options": [
        "1.08",
        "1.16",
        "1.20",
        "1.04"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n$$\\text{Average CPI} = \\text{Base CPI} + (\\text{Branch Frequency} \\times \\text{Mispredict Rate} \\times \\text{Penalty})$$\n$$\\text{Average CPI} = 1.0 + (0.20 \\times (1 - 0.80) \\times 2) = 1.0 + (0.20 \\times 0.20 \\times 2) = 1.0 + 0.08 = \\mathbf{1.08}$$"
    },
    {
      "id": "pipe-c09",
      "difficulty": "medium",
      "concept": "Speedup Ideal",
      "year": "GATE CS Prep",
      "text": "A $k$-stage linear pipeline operating at clock cycle $\\tau$ executes $n$ tasks. For very large $n$ ($n \\gg k$), the speedup over a non-pipelined system with stage delay $k\\tau$ approaches:",
      "options": [
        "$k$",
        "$k - 1$",
        "$1$",
        "$n$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Speedup } S = \\frac{n \\cdot k\\tau}{(k + n - 1)\\tau} = \\frac{nk}{k + n - 1} \\xrightarrow{n \\to \\infty} \\mathbf{k}$$"
    },
    {
      "id": "pipe-c10",
      "difficulty": "easy",
      "concept": "Structural Hazard Definition",
      "year": "GATE CS Prep",
      "text": "A structural hazard occurs in a pipelined processor when:",
      "options": [
        "Two or more instructions attempt to use the same hardware resource simultaneously",
        "An instruction depends on the result of a previous uncompleted instruction",
        "A branch instruction alters the program counter",
        "The clock frequency is too high"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**Structural hazards** (hardware resource conflicts) occur when the underlying hardware cannot support all possible combinations of instructions in the same cycle (e.g. single memory port for both instruction fetch and data read)."
    },
    {
      "id": "pipe-c11",
      "difficulty": "medium",
      "concept": "WAR Hazard Name",
      "year": "GATE CS Prep",
      "text": "A Write After Read (WAR) hazard in an out-of-order processor is also known as:",
      "options": [
        "Anti-dependency",
        "True data dependency",
        "Output dependency",
        "Control dependency"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n- RAW: True data dependency\\n- **WAR: Anti-dependency**\\n- WAW: Output dependency\\nWAR and WAW are false dependencies caused by register name reuse and can be eliminated by register renaming."
    },
    {
      "id": "pipe-c12",
      "difficulty": "hard",
      "concept": "Branch Delay Slot",
      "year": "GATE CS Prep",
      "text": "What is a **branch delay slot** used in early RISC architectures (like MIPS)?",
      "options": [
        "An instruction slot immediately following a branch that is ALWAYS executed regardless of whether the branch is taken",
        "A delay cycle inserted by hardware to cool the ALU",
        "A buffer that stores target addresses",
        "A software interrupt handler"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTo avoid branch penalty stalls, MIPS defined the branch delay slot: the instruction immediately following the branch is fetched and executed unconditionally while the branch target is calculated."
    }
  ],
  "toc-cfg": [
    {
      "id": "cfg-c05",
      "difficulty": "medium",
      "concept": "CNF Derivation Length",
      "year": "GATE CS Prep",
      "text": "If a context-free grammar $G$ is in Chomsky Normal Form (CNF), how many derivation steps are needed to derive a string of terminals of length $n \\ge 1$?",
      "options": [
        "$2n - 1$",
        "$2n$",
        "$n - 1$",
        "$n^2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nIn CNF, every production is either $A \\to BC$ or $A \\to a$.\n- To generate $n$ terminals, we must apply $n$ terminal rules ($A \\to a$).\n- To create the $n$ non-terminals from the single start symbol, we must apply binary split rules ($A \\to BC$) exactly $n - 1$ times.\n$$\\text{Total steps} = (n - 1) + n = \\mathbf{2n - 1}$$"
    },
    {
      "id": "cfg-c06",
      "difficulty": "hard",
      "concept": "DPDA vs NPDA",
      "year": "GATE CS Prep",
      "text": "Which of the following languages is accepted by a Deterministic Pushdown Automaton (DPDA)?",
      "options": [
        "$L = \\{w c w^R \\mid w \\in \\{a, b\\}^*\\}$",
        "$L = \\{w w^R \\mid w \\in \\{a, b\\}^*\\}$",
        "$L = \\{a^n b^n c^n \\mid n \\ge 0\\}$",
        "$L = \\{w w \\mid w \\in \\{a, b\\}^*\\}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n- $w c w^R$ has a marked center delimiter $c$, allowing a DPDA to know deterministically when to switch from pushing $w$ to popping and matching $w^R$.\n- $w w^R$ has no center marker, requiring non-deterministic guessing of the middle (NPDA).\n- $a^n b^n c^n$ and $ww$ are not even context-free."
    },
    {
      "id": "cfg-c07",
      "difficulty": "medium",
      "concept": "Ambiguous Grammar Proof",
      "year": "GATE CS Prep",
      "text": "Grammar $E \\to E + E \\mid E * E \\mid id$ is ambiguous because string `id + id * id`:",
      "options": [
        "Has more than one leftmost derivation tree",
        "Cannot be parsed by any automaton",
        "Generates invalid tokens",
        "Has an infinite language"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA grammar is **ambiguous** if there exists at least one string in its language that has two distinct leftmost derivations (or two distinct parse trees). For `id + id * id`, parsing can associate either `+` or `*` first."
    },
    {
      "id": "cfg-c08",
      "difficulty": "hard",
      "concept": "Inherently Ambiguous CFL",
      "year": "GATE CS Prep",
      "text": "Which of the following is an example of an **inherently ambiguous** context-free language?",
      "options": [
        "$L = \\{a^n b^n c^m\\} \\cup \\{a^n b^m c^m\\}$",
        "$L = \\{a^n b^n \\mid n \\ge 0\\}$",
        "$L = \\{w w^R \\mid w \\in \\{a, b\\}^*\\}$",
        "$L = \\{a^n b^m \\mid n \\neq m\\}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAn inherently ambiguous CFL is one for which **every** CFG generating it is ambiguous. The language $L = \\{a^n b^n c^m\\} \\cup \\{a^n b^m c^m\\}$ is the classic example because strings of the form $a^n b^n c^n$ can be derived through either branch."
    },
    {
      "id": "cfg-c09",
      "difficulty": "medium",
      "concept": "Left Recursion Removal",
      "year": "GATE CS Prep",
      "text": "Eliminating immediate left recursion from $A \\to A\\alpha \\mid \\beta$ (where $\\beta$ does not start with $A$) yields:",
      "options": [
        "$A \\to \\beta A', \\; A' \\to \\alpha A' \\mid \\epsilon$",
        "$A \\to \\alpha A', \\; A' \\to \\beta A' \\mid \\epsilon$",
        "$A \\to \\beta A', \\; A' \\to A'\\alpha \\mid \\epsilon$",
        "$A \\to \\beta \\alpha^*$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe standard left-recursion elimination algorithm replaces $A \\to A\\alpha \\mid \\beta$ with the right-recursive equivalent:\\n$$A \\to \\beta A'$$\\n$$A' \\to \\alpha A' \\mid \\epsilon$$"
    }
  ],
  "cn-dll": [
    {
      "id": "dll-c05",
      "difficulty": "medium",
      "concept": "Bit Stuffing",
      "year": "GATE CS Prep",
      "text": "In bit stuffing with flag sequence `01111110`, what is the transmitted bit sequence for the payload `01111110111110`?",
      "options": [
        "`0111110101111100`",
        "`011111010111110`",
        "`0111111001111100`",
        "`01111110111110`"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nRule: Insert a '0' immediately after any sequence of five consecutive '1's.\n- Payload: `0 11111 [insert 0] 10 11111 [insert 0] 0`\n- Resulting bit sequence: `0111110101111100`."
    },
    {
      "id": "dll-c06",
      "difficulty": "hard",
      "concept": "Sliding Window ARQ Window Sizes",
      "year": "GATE CS Prep",
      "text": "A protocol uses a 4-bit sequence number. What are the maximum sender window sizes for Go-Back-N and Selective Repeat ARQ, respectively?",
      "options": [
        "15 and 8",
        "16 and 8",
        "15 and 16",
        "7 and 8"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nWith $m = 4$ bits, total sequence numbers $= 2^4 = 16$.\n- **Go-Back-N**: $W_s \\le 2^m - 1 = 16 - 1 = \\mathbf{15}$.\n- **Selective Repeat**: $W_s = W_r \\le 2^{m-1} = 2^3 = \\mathbf{8}$."
    },
    {
      "id": "dll-c07",
      "difficulty": "hard",
      "concept": "CSMA/CD Minimum Frame Size",
      "year": "GATE CS Prep",
      "text": "In a 100 Mbps CSMA/CD Ethernet network with cable length 1 km and signal propagation speed $2 \\times 10^8\\text{ m/s}$, what is the minimum frame size required to guarantee collision detection?",
      "options": [
        "125 bytes",
        "64 bytes",
        "1000 bits",
        "1250 bytes"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nPropagation delay $T_p = \\frac{\\text{Distance}}{\\text{Speed}} = \\frac{1000\\text{ m}}{2 \\times 10^8\\text{ m/s}} = 5 \\times 10^{-6}\\text{ s} = 5\\;\\mu\\text{s}$.\nCondition for CSMA/CD: $T_t \\ge 2 T_p$.\n$$\\frac{L_{min}}{\\text{Bandwidth}} \\ge 2 T_p \\implies L_{min} \\ge 2 \\times (5 \\times 10^{-6}\\text{ s}) \\times (100 \\times 10^6\\text{ bps}) = 1000\\text{ bits}$$\nIn bytes: $\\frac{1000\\text{ bits}}{8} = \\mathbf{125\\text{ bytes}}$."
    },
    {
      "id": "dll-c08",
      "difficulty": "medium",
      "concept": "Stop-and-Wait Efficiency",
      "year": "GATE CS Prep",
      "text": "In Stop-and-Wait protocol with packet transmission time $T_t = 1\\text{ ms}$ and one-way propagation delay $T_p = 4.5\\text{ ms}$, ignoring ACK transmission time, the channel efficiency is:",
      "options": [
        "10%",
        "20%",
        "50%",
        "18.2%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\eta = \\frac{T_t}{T_t + 2T_p} = \\frac{1\\text{ ms}}{1 + 2(4.5)\\text{ ms}} = \\frac{1}{10} = \\mathbf{10\\%}$$"
    },
    {
      "id": "dll-c09",
      "difficulty": "hard",
      "concept": "CRC Remainder Length",
      "year": "GATE CS Prep",
      "text": "If the generator polynomial in CRC is $G(x) = x^4 + x + 1$, how many redundant bits (FCS) are appended to the data frame?",
      "options": [
        "4",
        "5",
        "3",
        "16"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe degree of generator polynomial $G(x) = x^4 + x + 1$ is **4**. In CRC error detection, the number of check bits appended is always equal to the degree of the generator polynomial, which is **4 bits**."
    },
    {
      "id": "dll-c10",
      "difficulty": "medium",
      "concept": "Hamming Code Single Error Correction",
      "year": "GATE CS Prep",
      "text": "For a 7-bit message word, what is the minimum number of parity bits $p$ required to achieve single error correction using Hamming code?",
      "options": [
        "4",
        "3",
        "5",
        "2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nHamming rule: $2^p \\ge m + p + 1$.\\nFor $m = 7$:\\n- If $p = 3$: $2^3 = 8 \\not\\ge 7 + 3 + 1 = 11$ (Insufficient)\\n- If $p = 4$: $2^4 = 16 \\ge 7 + 4 + 1 = 12$ (Satisfied!)\\nMinimum parity bits = **4** (total codeword = 11 bits)."
    }
  ],
  "se-testing": [
    {
      "id": "se-c03",
      "difficulty": "medium",
      "concept": "Cyclomatic Complexity",
      "year": "GATE CS Prep",
      "text": "A control flow graph has 14 edges and 10 nodes with 1 connected component. What is its McCabe cyclomatic complexity?",
      "options": [
        "6",
        "4",
        "5",
        "7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nMcCabe's Cyclomatic Complexity formula:\n$$V(G) = E - N + 2P$$\nwhere $E = 14$ (edges), $N = 10$ (nodes), and $P = 1$ (connected components).\n$$V(G) = 14 - 10 + 2(1) = 4 + 2 = \\mathbf{6}$$"
    },
    {
      "id": "se-c04",
      "difficulty": "easy",
      "concept": "Coupling and Cohesion",
      "year": "GATE CS Prep",
      "text": "In modular software design, which combination represents the ideal architecture?",
      "options": [
        "High Cohesion and Low Coupling",
        "Low Cohesion and High Coupling",
        "High Cohesion and High Coupling",
        "Low Cohesion and Low Coupling"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n**High Cohesion** means all elements within a module work closely together toward a single well-defined task. **Low Coupling** means modules are independent of each other, making them maintainable and reusable."
    },
    {
      "id": "se-c05",
      "difficulty": "medium",
      "concept": "COCOMO Model",
      "year": "GATE CS Prep",
      "text": "In the Basic COCOMO model, software projects are classified into which three modes based on complexity?",
      "options": [
        "Organic, Semidetached, Embedded",
        "Simple, Moderate, Complex",
        "Waterfall, Agile, Spiral",
        "Small, Medium, Enterprise"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nBoehm's Basic COCOMO model defines:\n1. **Organic**: Small teams, familiar environment, well-understood requirements.\n2. **Semidetached**: Intermediate team size and complexity.\n3. **Embedded**: Tight hardware and operational constraints."
    },
    {
      "id": "se-c06",
      "difficulty": "easy",
      "concept": "Black-box vs White-box",
      "year": "GATE CS Prep",
      "text": "Which testing technique examines internal logic, statements, and branch conditions of the source code?",
      "options": [
        "White-box testing",
        "Black-box testing",
        "Alpha testing",
        "Acceptance testing"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**White-box testing** (structural/glass-box testing) inspects internal code structures, execution paths, and logic conditions, whereas black-box testing tests functionality without internal knowledge."
    },
    {
      "id": "se-c07",
      "difficulty": "medium",
      "concept": "Boundary Value Analysis",
      "year": "GATE CS Prep",
      "text": "For an input field accepting integers between 10 and 50 inclusive, standard 2-value Boundary Value Analysis test cases are:",
      "options": [
        "9, 10, 50, 51",
        "10, 50",
        "0, 10, 50, 100",
        "11, 49"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBoundary Value Analysis focuses on boundary values and their immediate neighbors just outside the boundary: $min - 1, min, max, max + 1 \\implies \\mathbf{9, 10, 50, 51}$."
    },
    {
      "id": "se-c08",
      "difficulty": "hard",
      "concept": "Cohesion Levels",
      "year": "GATE CS Prep",
      "text": "Which of the following forms of module cohesion is considered the STRONGEST (most desirable)?",
      "options": [
        "Functional Cohesion",
        "Sequential Cohesion",
        "Communicational Cohesion",
        "Coincidental Cohesion"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRanking from strongest (best) to weakest (worst):\\n1. **Functional** (Strongest)\\n2. Sequential\\n3. Communicational\\n4. Procedural\\n5. Temporal\\n6. Logical\\n7. Coincidental (Weakest)"
    },
    {
      "id": "se-c09",
      "difficulty": "medium",
      "concept": "Cyclomatic Complexity Predicates",
      "year": "GATE CS Prep",
      "text": "A program has 5 simple two-way decision (predicate) nodes. What is its cyclomatic complexity?",
      "options": [
        "6",
        "5",
        "10",
        "11"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nFor structured control flow graphs with binary decision nodes:\n$V(G) = P + 1$\nwhere $P = 5$ is the number of predicate nodes.\n$V(G) = 5 + 1 = \\mathbf{6}$"
    },
    {
      "id": "se-c10",
      "difficulty": "easy",
      "concept": "Regression Testing",
      "year": "GATE CS Prep",
      "text": "Testing software to ensure that changes or bug fixes have not adversely affected existing working features is called:",
      "options": [
        "Regression testing",
        "Stress testing",
        "Performance testing",
        "Smoke testing"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n**Regression testing** is the selective retesting of modified systems to confirm that recent code changes haven't broken unchanged functionality."
    },
    {
      "id": "se-c11",
      "difficulty": "medium",
      "concept": "Alpha vs Beta Testing",
      "year": "GATE CS Prep",
      "text": "Which statement accurately distinguishes Alpha testing from Beta testing?",
      "options": [
        "Alpha is conducted at developer site by internal users; Beta is at customer site by real users",
        "Alpha is always automated; Beta is manual",
        "Alpha is white-box; Beta is black-box",
        "Beta is done before Alpha testing"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n**Alpha testing** is performed at the developer's site in a controlled environment by end-users or internal testers. **Beta testing** is performed at the customer's site in a real-world live environment."
    },
    {
      "id": "se-c12",
      "difficulty": "hard",
      "concept": "Integration Testing Approaches",
      "year": "GATE CS Prep",
      "text": "In Top-down integration testing, which component is required to simulate unwritten lower-level modules?",
      "options": [
        "Stubs",
        "Drivers",
        "Mock classes",
        "Test harnesses"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n- **Top-down**: Higher-level modules are tested first; **Stubs** simulate lower-level modules.\n- **Bottom-up**: Lower-level modules are tested first; **Drivers** invoke them."
    },
    {
      "id": "se-c13",
      "difficulty": "medium",
      "concept": "Agile Scrum Sprint",
      "year": "GATE CS Prep",
      "text": "In Agile Scrum methodology, the meeting held at the end of every sprint to reflect on processes and discuss improvements is called:",
      "options": [
        "Sprint Retrospective",
        "Sprint Review",
        "Daily Scrum",
        "Sprint Planning"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nThe **Sprint Retrospective** focuses on continuous improvement of the team's processes and relationships, whereas Sprint Review focuses on inspecting the delivered product increment."
    },
    {
      "id": "se-c14",
      "difficulty": "easy",
      "concept": "Test Driven Development",
      "year": "GATE CS Prep",
      "text": "The core repetitive cycle in Test-Driven Development (TDD) is:",
      "options": [
        "Red (Fail) -> Green (Pass) -> Refactor",
        "Design -> Code -> Test",
        "Code -> Test -> Deploy",
        "Plan -> Build -> Test"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nTDD follows the **Red-Green-Refactor** rhythm: write a failing test (Red), write minimum code to make it pass (Green), and then clean up the code (Refactor)."
    },
    {
      "id": "se-c15",
      "difficulty": "medium",
      "concept": "Software Reliability MTBF",
      "year": "GATE CS Prep",
      "text": "Mean Time Between Failures (MTBF) is defined in terms of Mean Time To Failure (MTTF) and Mean Time To Repair (MTTR) as:",
      "options": [
        "$MTBF = MTTF + MTTR$",
        "$MTBF = MTTF - MTTR$",
        "$MTBF = MTTF \\times MTTR$",
        "$MTBF = MTTF / MTTR$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n$\\text{MTBF} = \\text{MTTF} (\\text{operating time}) + \\text{MTTR} (\\text{repair downtime})$"
    },
    {
      "id": "se-c16",
      "difficulty": "hard",
      "concept": "Function Point Complexity",
      "year": "GATE CS Prep",
      "text": "Function Point Analysis (FPA) measures software size based on which 5 functional components?",
      "options": [
        "ILF, EIF, EI, EO, EQ",
        "KLOC, Effort, Time, Cost, Staff",
        "Inputs, Outputs, Loops, Classes, Methods",
        "Requirements, Design, Code, Test, Maintenance"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nAlbrecht's Function Point Analysis evaluates: Internal Logical Files (ILF), External Interface Files (EIF), External Inputs (EI), External Outputs (EO), and External Inquiries (EQ)."
    },
    {
      "id": "se-c17",
      "difficulty": "medium",
      "concept": "Mutation Testing",
      "year": "GATE CS Prep",
      "text": "In mutation testing, a test suite is considered effective if it:",
      "options": [
        "Kills (detects) a high percentage of deliberately introduced mutant faults",
        "Executes in less than one second",
        "Covers 100% of comments",
        "Generates zero compiler warnings"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\nMutation testing inserts deliberate syntactic faults (mutants). If tests fail on mutated code, the mutant is 'killed'. High mutation score = effective test suite."
    },
    {
      "id": "se-c18",
      "difficulty": "easy",
      "concept": "Code Smells and Refactoring",
      "year": "GATE CS Prep",
      "text": "Refactoring code involves changing its:",
      "options": [
        "Internal structure without changing its external behavior",
        "External functionality to add new features",
        "User interface layout",
        "Programming language"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\n**Refactoring** is the disciplined technique of restructuring an existing body of code, altering its internal structure without changing its external observable behavior."
    }
  ],
  "dbms-norm": [
    {
      "id": "norm-c04",
      "difficulty": "medium",
      "concept": "Candidate Key Finder",
      "year": "GATE CS Prep",
      "text": "Relation $R(A,B,C,D)$ has functional dependencies $F = \\{AB \\to C, C \\to D, D \\to A\\}$. What are the candidate keys of $R$?",
      "options": [
        "$AB, BC, BD$",
        "$AB$ only",
        "$AB, CD$",
        "$A, B, C$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nNotice $B$ does not appear on any RHS, so $B$ must be part of every key.\\n- $(AB)^+ = \\{A, B, C, D\\}$ (Key)\\n- $(BC)^+ = \\{B, C, D, A\\}$ (Key)\\n- $(BD)^+ = \\{B, D, A, C\\}$ (Key)\\nCandidate keys are **AB, BC, BD**."
    },
    {
      "id": "norm-c05",
      "difficulty": "hard",
      "concept": "BCNF vs 3NF",
      "year": "GATE CS Prep",
      "text": "A relation $R$ is in 3NF but NOT in BCNF if for some non-trivial FD $X \\to Y$:",
      "options": [
        "$X$ is not a superkey, but $Y$ is a prime attribute",
        "$X$ is a superkey and $Y$ is non-prime",
        "$X$ is a prime attribute and $Y$ is a prime attribute",
        "Partial dependency exists on a composite key"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n3NF allows $X \\to Y$ if $X$ is a superkey OR $Y$ is a prime attribute (part of a candidate key). BCNF strictly requires $X$ to be a superkey for ALL non-trivial FDs. Thus, when $X$ is not a superkey but $Y$ is prime, the relation is in 3NF but violates BCNF."
    },
    {
      "id": "norm-c06",
      "difficulty": "medium",
      "concept": "Lossless Join Condition",
      "year": "GATE CS Prep",
      "text": "Decomposition of $R$ into $R_1$ and $R_2$ is lossless-join if and only if:",
      "options": [
        "$R_1 \\cap R_2 \\to R_1$ or $R_1 \\cap R_2 \\to R_2$",
        "$R_1 \\cup R_2 = R$",
        "$R_1 \\cap R_2 = \\emptyset$",
        "Dependency preservation is satisfied"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA decomposition is lossless-join if the common attributes $(R_1 \\cap R_2)$ form a superkey of at least one of the decomposed relations ($R_1$ or $R_2$)."
    }
  ],
  "ga-quant": [
    {
      "id": "ga-c04",
      "difficulty": "easy",
      "concept": "Work and Time",
      "year": "GATE General Aptitude",
      "text": "A can complete a project in 12 days, and B can complete it in 24 days. Working together, how many days will they take?",
      "options": [
        "8 days",
        "6 days",
        "9 days",
        "18 days"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Combined rate} = \\frac{1}{12} + \\frac{1}{24} = \\frac{2 + 1}{24} = \\frac{3}{24} = \\frac{1}{8} \\implies \\mathbf{8\\text{ days}}$$"
    },
    {
      "id": "ga-c05",
      "difficulty": "medium",
      "concept": "Speed Distance Relative",
      "year": "GATE General Aptitude",
      "text": "Two trains of length 150 m and 250 m are traveling in opposite directions at 54 km/h and 90 km/h. How long will they take to completely pass each other?",
      "options": [
        "10 seconds",
        "15 seconds",
        "8 seconds",
        "12 seconds"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRelative speed $= 54 + 90 = 144\\text{ km/h} = 144 \\times \\frac{5}{18} = 40\\text{ m/s}$.\\nTotal distance $= 150 + 250 = 400\\text{ m}$.\\n$$\\text{Time} = \\frac{400\\text{ m}}{40\\text{ m/s}} = \\mathbf{10\\text{ seconds}}$$"
    },
    {
      "id": "ga-c06",
      "difficulty": "medium",
      "concept": "Profit and Loss",
      "year": "GATE General Aptitude",
      "text": "An article is sold at a 20% profit. If the cost price increases by 10% and selling price increases by 20%, what is the new profit percentage?",
      "options": [
        "30.9%",
        "35%",
        "25%",
        "40%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet original CP $= 100 \\implies$ original SP $= 120$.\\nNew CP $= 100 \\times 1.10 = 110$.\\nNew SP $= 120 \\times 1.20 = 144$.\\n$$\\text{New Profit} = \\frac{144 - 110}{110} \\times 100 = \\frac{34}{110} \\times 100 \\approx \\mathbf{30.9\\%}$$"
    }
  ],
  "phy-mech": [
    {
      "id": "phy-mech-q01",
      "difficulty": "easy",
      "concept": "Mechanics – Kinematics",
      "year": "Standard Exam Question",
      "text": "A projectile is fired with velocity $u$ at angle $\\theta$ to the horizontal. Its maximum horizontal range is achieved when $\\theta$ is:",
      "options": [
        "$45^\\circ$",
        "$90^\\circ$",
        "$30^\\circ$",
        "$60^\\circ$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRange $R = \\frac{u^2 \\sin(2\\theta)}{g}$. Max occurs when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = \\mathbf{45^\\circ}$."
    },
    {
      "id": "phy-mech-q02",
      "difficulty": "medium",
      "concept": "Mechanics – Dynamics",
      "year": "Standard Exam Question",
      "text": "A body of mass $m$ moves in a circle of radius $r$ with constant speed $v$. What is the net work done by the centripetal force in one complete revolution?",
      "options": [
        "0",
        "$\\frac{mv^2}{r}$",
        "$2\\pi r \\cdot \\frac{mv^2}{r}$",
        "$mg \\cdot 2\\pi r$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCentripetal force is always perpendicular to displacement ($\\vec{F} \\cdot d\\vec{r} = 0$). Work done is identically **0**."
    },
    {
      "id": "phy-mech-q03",
      "difficulty": "hard",
      "concept": "Mechanics – Work-Energy",
      "year": "Standard Exam Question",
      "text": "What is the escape velocity from the surface of a planet with radius $R$ and surface gravity $g$?",
      "options": [
        "$\\sqrt{2gR}$",
        "$\\sqrt{gR}$",
        "$\\sqrt{gR/2}$",
        "$2\\sqrt{gR}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy conservation of energy: $\\frac{1}{2}mv_e^2 - \\frac{GMm}{R} = 0 \\implies v_e = \\sqrt{\\frac{2GM}{R}} = \\mathbf{\\sqrt{2gR}}$."
    },
    {
      "id": "phy-mech-q04",
      "difficulty": "easy",
      "concept": "Mechanics – Rotational Motion",
      "year": "Standard Exam Question",
      "text": "A solid cylinder and a hollow sphere of equal mass and radius roll down an incline without slipping from rest. Which reaches the bottom first?",
      "options": [
        "Solid cylinder (lower moment of inertia)",
        "Hollow sphere",
        "Both reach at the same time",
        "Depends on the mass"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAcceleration $a = \\frac{g\\sin\\theta}{1 + I/(mR^2)}$. Solid cylinder has $I = 0.5 mR^2$, hollow sphere has $I = 0.67 mR^2$. Solid cylinder has greater acceleration and reaches first."
    },
    {
      "id": "phy-mech-q05",
      "difficulty": "medium",
      "concept": "Mechanics – Gravitation",
      "year": "Standard Exam Question",
      "text": "For a simple harmonic oscillator, at what displacement from equilibrium are kinetic energy and potential energy equal?",
      "options": [
        "$x = A/\\sqrt{2}$",
        "$x = A/2$",
        "$x = A$",
        "$x = A/4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}E_{total} = \\frac{1}{2}(\\frac{1}{2}kA^2) \\implies x^2 = A^2 / 2 \\implies x = \\mathbf{A/\\sqrt{2}}$."
    },
    {
      "id": "phy-mech-q06",
      "difficulty": "hard",
      "concept": "Mechanics – Kinematics",
      "year": "Standard Exam Question",
      "text": "A projectile is fired with velocity $u$ at angle $\\theta$ to the horizontal. Its maximum horizontal range is achieved when $\\theta$ is:",
      "options": [
        "$45^\\circ$",
        "$90^\\circ$",
        "$30^\\circ$",
        "$60^\\circ$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRange $R = \\frac{u^2 \\sin(2\\theta)}{g}$. Max occurs when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = \\mathbf{45^\\circ}$."
    },
    {
      "id": "phy-mech-q07",
      "difficulty": "easy",
      "concept": "Mechanics – Dynamics",
      "year": "Standard Exam Question",
      "text": "A body of mass $m$ moves in a circle of radius $r$ with constant speed $v$. What is the net work done by the centripetal force in one complete revolution?",
      "options": [
        "0",
        "$\\frac{mv^2}{r}$",
        "$2\\pi r \\cdot \\frac{mv^2}{r}$",
        "$mg \\cdot 2\\pi r$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCentripetal force is always perpendicular to displacement ($\\vec{F} \\cdot d\\vec{r} = 0$). Work done is identically **0**."
    },
    {
      "id": "phy-mech-q08",
      "difficulty": "medium",
      "concept": "Mechanics – Work-Energy",
      "year": "Standard Exam Question",
      "text": "What is the escape velocity from the surface of a planet with radius $R$ and surface gravity $g$?",
      "options": [
        "$\\sqrt{2gR}$",
        "$\\sqrt{gR}$",
        "$\\sqrt{gR/2}$",
        "$2\\sqrt{gR}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy conservation of energy: $\\frac{1}{2}mv_e^2 - \\frac{GMm}{R} = 0 \\implies v_e = \\sqrt{\\frac{2GM}{R}} = \\mathbf{\\sqrt{2gR}}$."
    },
    {
      "id": "phy-mech-q09",
      "difficulty": "hard",
      "concept": "Mechanics – Rotational Motion",
      "year": "Standard Exam Question",
      "text": "A solid cylinder and a hollow sphere of equal mass and radius roll down an incline without slipping from rest. Which reaches the bottom first?",
      "options": [
        "Solid cylinder (lower moment of inertia)",
        "Hollow sphere",
        "Both reach at the same time",
        "Depends on the mass"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAcceleration $a = \\frac{g\\sin\\theta}{1 + I/(mR^2)}$. Solid cylinder has $I = 0.5 mR^2$, hollow sphere has $I = 0.67 mR^2$. Solid cylinder has greater acceleration and reaches first."
    },
    {
      "id": "phy-mech-q10",
      "difficulty": "easy",
      "concept": "Mechanics – Gravitation",
      "year": "Standard Exam Question",
      "text": "For a simple harmonic oscillator, at what displacement from equilibrium are kinetic energy and potential energy equal?",
      "options": [
        "$x = A/\\sqrt{2}$",
        "$x = A/2$",
        "$x = A$",
        "$x = A/4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}E_{total} = \\frac{1}{2}(\\frac{1}{2}kA^2) \\implies x^2 = A^2 / 2 \\implies x = \\mathbf{A/\\sqrt{2}}$."
    },
    {
      "id": "phy-mech-q11",
      "difficulty": "medium",
      "concept": "Mechanics – Kinematics",
      "year": "Standard Exam Question",
      "text": "A projectile is fired with velocity $u$ at angle $\\theta$ to the horizontal. Its maximum horizontal range is achieved when $\\theta$ is:",
      "options": [
        "$45^\\circ$",
        "$90^\\circ$",
        "$30^\\circ$",
        "$60^\\circ$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRange $R = \\frac{u^2 \\sin(2\\theta)}{g}$. Max occurs when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = \\mathbf{45^\\circ}$."
    },
    {
      "id": "phy-mech-q12",
      "difficulty": "hard",
      "concept": "Mechanics – Dynamics",
      "year": "Standard Exam Question",
      "text": "A body of mass $m$ moves in a circle of radius $r$ with constant speed $v$. What is the net work done by the centripetal force in one complete revolution?",
      "options": [
        "0",
        "$\\frac{mv^2}{r}$",
        "$2\\pi r \\cdot \\frac{mv^2}{r}$",
        "$mg \\cdot 2\\pi r$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCentripetal force is always perpendicular to displacement ($\\vec{F} \\cdot d\\vec{r} = 0$). Work done is identically **0**."
    },
    {
      "id": "phy-mech-q13",
      "difficulty": "easy",
      "concept": "Mechanics – Work-Energy",
      "year": "Standard Exam Question",
      "text": "What is the escape velocity from the surface of a planet with radius $R$ and surface gravity $g$?",
      "options": [
        "$\\sqrt{2gR}$",
        "$\\sqrt{gR}$",
        "$\\sqrt{gR/2}$",
        "$2\\sqrt{gR}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy conservation of energy: $\\frac{1}{2}mv_e^2 - \\frac{GMm}{R} = 0 \\implies v_e = \\sqrt{\\frac{2GM}{R}} = \\mathbf{\\sqrt{2gR}}$."
    },
    {
      "id": "phy-mech-q14",
      "difficulty": "medium",
      "concept": "Mechanics – Rotational Motion",
      "year": "Standard Exam Question",
      "text": "A solid cylinder and a hollow sphere of equal mass and radius roll down an incline without slipping from rest. Which reaches the bottom first?",
      "options": [
        "Solid cylinder (lower moment of inertia)",
        "Hollow sphere",
        "Both reach at the same time",
        "Depends on the mass"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAcceleration $a = \\frac{g\\sin\\theta}{1 + I/(mR^2)}$. Solid cylinder has $I = 0.5 mR^2$, hollow sphere has $I = 0.67 mR^2$. Solid cylinder has greater acceleration and reaches first."
    },
    {
      "id": "phy-mech-q15",
      "difficulty": "hard",
      "concept": "Mechanics – Gravitation",
      "year": "Standard Exam Question",
      "text": "For a simple harmonic oscillator, at what displacement from equilibrium are kinetic energy and potential energy equal?",
      "options": [
        "$x = A/\\sqrt{2}$",
        "$x = A/2$",
        "$x = A$",
        "$x = A/4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}E_{total} = \\frac{1}{2}(\\frac{1}{2}kA^2) \\implies x^2 = A^2 / 2 \\implies x = \\mathbf{A/\\sqrt{2}}$."
    },
    {
      "id": "phy-mech-q16",
      "difficulty": "easy",
      "concept": "Mechanics – Kinematics",
      "year": "Standard Exam Question",
      "text": "A projectile is fired with velocity $u$ at angle $\\theta$ to the horizontal. Its maximum horizontal range is achieved when $\\theta$ is:",
      "options": [
        "$45^\\circ$",
        "$90^\\circ$",
        "$30^\\circ$",
        "$60^\\circ$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRange $R = \\frac{u^2 \\sin(2\\theta)}{g}$. Max occurs when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = \\mathbf{45^\\circ}$."
    },
    {
      "id": "phy-mech-q17",
      "difficulty": "medium",
      "concept": "Mechanics – Dynamics",
      "year": "Standard Exam Question",
      "text": "A body of mass $m$ moves in a circle of radius $r$ with constant speed $v$. What is the net work done by the centripetal force in one complete revolution?",
      "options": [
        "0",
        "$\\frac{mv^2}{r}$",
        "$2\\pi r \\cdot \\frac{mv^2}{r}$",
        "$mg \\cdot 2\\pi r$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCentripetal force is always perpendicular to displacement ($\\vec{F} \\cdot d\\vec{r} = 0$). Work done is identically **0**."
    },
    {
      "id": "phy-mech-q18",
      "difficulty": "hard",
      "concept": "Mechanics – Work-Energy",
      "year": "Standard Exam Question",
      "text": "What is the escape velocity from the surface of a planet with radius $R$ and surface gravity $g$?",
      "options": [
        "$\\sqrt{2gR}$",
        "$\\sqrt{gR}$",
        "$\\sqrt{gR/2}$",
        "$2\\sqrt{gR}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy conservation of energy: $\\frac{1}{2}mv_e^2 - \\frac{GMm}{R} = 0 \\implies v_e = \\sqrt{\\frac{2GM}{R}} = \\mathbf{\\sqrt{2gR}}$."
    },
    {
      "id": "phy-mech-q19",
      "difficulty": "easy",
      "concept": "Mechanics – Rotational Motion",
      "year": "Standard Exam Question",
      "text": "A solid cylinder and a hollow sphere of equal mass and radius roll down an incline without slipping from rest. Which reaches the bottom first?",
      "options": [
        "Solid cylinder (lower moment of inertia)",
        "Hollow sphere",
        "Both reach at the same time",
        "Depends on the mass"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAcceleration $a = \\frac{g\\sin\\theta}{1 + I/(mR^2)}$. Solid cylinder has $I = 0.5 mR^2$, hollow sphere has $I = 0.67 mR^2$. Solid cylinder has greater acceleration and reaches first."
    },
    {
      "id": "phy-mech-q20",
      "difficulty": "medium",
      "concept": "Mechanics – Gravitation",
      "year": "Standard Exam Question",
      "text": "For a simple harmonic oscillator, at what displacement from equilibrium are kinetic energy and potential energy equal?",
      "options": [
        "$x = A/\\sqrt{2}$",
        "$x = A/2$",
        "$x = A$",
        "$x = A/4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}E_{total} = \\frac{1}{2}(\\frac{1}{2}kA^2) \\implies x^2 = A^2 / 2 \\implies x = \\mathbf{A/\\sqrt{2}}$."
    },
    {
      "id": "phy-mech-q21",
      "difficulty": "hard",
      "concept": "Mechanics – Kinematics",
      "year": "Standard Exam Question",
      "text": "A projectile is fired with velocity $u$ at angle $\\theta$ to the horizontal. Its maximum horizontal range is achieved when $\\theta$ is:",
      "options": [
        "$45^\\circ$",
        "$90^\\circ$",
        "$30^\\circ$",
        "$60^\\circ$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRange $R = \\frac{u^2 \\sin(2\\theta)}{g}$. Max occurs when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = \\mathbf{45^\\circ}$."
    },
    {
      "id": "phy-mech-q22",
      "difficulty": "easy",
      "concept": "Mechanics – Dynamics",
      "year": "Standard Exam Question",
      "text": "A body of mass $m$ moves in a circle of radius $r$ with constant speed $v$. What is the net work done by the centripetal force in one complete revolution?",
      "options": [
        "0",
        "$\\frac{mv^2}{r}$",
        "$2\\pi r \\cdot \\frac{mv^2}{r}$",
        "$mg \\cdot 2\\pi r$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCentripetal force is always perpendicular to displacement ($\\vec{F} \\cdot d\\vec{r} = 0$). Work done is identically **0**."
    },
    {
      "id": "phy-mech-q23",
      "difficulty": "medium",
      "concept": "Mechanics – Work-Energy",
      "year": "Standard Exam Question",
      "text": "What is the escape velocity from the surface of a planet with radius $R$ and surface gravity $g$?",
      "options": [
        "$\\sqrt{2gR}$",
        "$\\sqrt{gR}$",
        "$\\sqrt{gR/2}$",
        "$2\\sqrt{gR}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy conservation of energy: $\\frac{1}{2}mv_e^2 - \\frac{GMm}{R} = 0 \\implies v_e = \\sqrt{\\frac{2GM}{R}} = \\mathbf{\\sqrt{2gR}}$."
    },
    {
      "id": "phy-mech-q24",
      "difficulty": "hard",
      "concept": "Mechanics – Rotational Motion",
      "year": "Standard Exam Question",
      "text": "A solid cylinder and a hollow sphere of equal mass and radius roll down an incline without slipping from rest. Which reaches the bottom first?",
      "options": [
        "Solid cylinder (lower moment of inertia)",
        "Hollow sphere",
        "Both reach at the same time",
        "Depends on the mass"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAcceleration $a = \\frac{g\\sin\\theta}{1 + I/(mR^2)}$. Solid cylinder has $I = 0.5 mR^2$, hollow sphere has $I = 0.67 mR^2$. Solid cylinder has greater acceleration and reaches first."
    },
    {
      "id": "phy-mech-q25",
      "difficulty": "easy",
      "concept": "Mechanics – Gravitation",
      "year": "Standard Exam Question",
      "text": "For a simple harmonic oscillator, at what displacement from equilibrium are kinetic energy and potential energy equal?",
      "options": [
        "$x = A/\\sqrt{2}$",
        "$x = A/2$",
        "$x = A$",
        "$x = A/4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}E_{total} = \\frac{1}{2}(\\frac{1}{2}kA^2) \\implies x^2 = A^2 / 2 \\implies x = \\mathbf{A/\\sqrt{2}}$."
    }
  ],
  "phy-elec": [
    {
      "id": "phy-elec-q01",
      "difficulty": "easy",
      "concept": "Electrostatics – Coulomb Law",
      "year": "Standard Exam Question",
      "text": "Two point charges $+q$ and $-q$ separated by distance $2a$ form a dipole. The electric field on the axial line at distance $r \\gg a$ scales as:",
      "options": [
        "$1/r^3$",
        "$1/r^2$",
        "$1/r$",
        "$1/r^4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nElectric field of a dipole falls off as $\\mathbf{1/r^3}$ along both axial and equatorial lines for large distances."
    },
    {
      "id": "phy-elec-q02",
      "difficulty": "medium",
      "concept": "Electrostatics – Capacitance",
      "year": "Standard Exam Question",
      "text": "A parallel plate capacitor with capacitance $C$ is filled with a dielectric of constant $K = 4$. The new capacitance is:",
      "options": [
        "$4C$",
        "$C/4$",
        "$C$",
        "$16C$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$C' = K \\cdot C = 4C$."
    },
    {
      "id": "phy-elec-q03",
      "difficulty": "hard",
      "concept": "Electrostatics – Current Electricity",
      "year": "Standard Exam Question",
      "text": "Three resistors of $6\\;\\Omega$ each are connected in parallel. What is their equivalent resistance?",
      "options": [
        "$2\\;\\Omega$",
        "$18\\;\\Omega$",
        "$3\\;\\Omega$",
        "$1\\;\\Omega$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$1/R_{eq} = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 \\implies R_{eq} = \\mathbf{2\\;\\Omega}$."
    },
    {
      "id": "phy-elec-q04",
      "difficulty": "easy",
      "concept": "Electrostatics – Magnetism",
      "year": "Standard Exam Question",
      "text": "Kirchhoff's Junction Rule (Current Law) is a direct consequence of the conservation of:",
      "options": [
        "Charge",
        "Energy",
        "Momentum",
        "Angular momentum"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTotal current entering a junction equals total current leaving, reflecting the conservation of **electric charge**."
    },
    {
      "id": "phy-elec-q05",
      "difficulty": "medium",
      "concept": "Electrostatics – Kirchhoff Laws",
      "year": "Standard Exam Question",
      "text": "An electron enters a uniform magnetic field perpendicularly. Its path inside the field will be a:",
      "options": [
        "Circle",
        "Straight line",
        "Parabola",
        "Helix"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMagnetic force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ is always perpendicular to velocity, providing centripetal acceleration in a **circular path**."
    },
    {
      "id": "phy-elec-q06",
      "difficulty": "hard",
      "concept": "Electrostatics – Coulomb Law",
      "year": "Standard Exam Question",
      "text": "Two point charges $+q$ and $-q$ separated by distance $2a$ form a dipole. The electric field on the axial line at distance $r \\gg a$ scales as:",
      "options": [
        "$1/r^3$",
        "$1/r^2$",
        "$1/r$",
        "$1/r^4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nElectric field of a dipole falls off as $\\mathbf{1/r^3}$ along both axial and equatorial lines for large distances."
    },
    {
      "id": "phy-elec-q07",
      "difficulty": "easy",
      "concept": "Electrostatics – Capacitance",
      "year": "Standard Exam Question",
      "text": "A parallel plate capacitor with capacitance $C$ is filled with a dielectric of constant $K = 4$. The new capacitance is:",
      "options": [
        "$4C$",
        "$C/4$",
        "$C$",
        "$16C$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$C' = K \\cdot C = 4C$."
    },
    {
      "id": "phy-elec-q08",
      "difficulty": "medium",
      "concept": "Electrostatics – Current Electricity",
      "year": "Standard Exam Question",
      "text": "Three resistors of $6\\;\\Omega$ each are connected in parallel. What is their equivalent resistance?",
      "options": [
        "$2\\;\\Omega$",
        "$18\\;\\Omega$",
        "$3\\;\\Omega$",
        "$1\\;\\Omega$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$1/R_{eq} = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 \\implies R_{eq} = \\mathbf{2\\;\\Omega}$."
    },
    {
      "id": "phy-elec-q09",
      "difficulty": "hard",
      "concept": "Electrostatics – Magnetism",
      "year": "Standard Exam Question",
      "text": "Kirchhoff's Junction Rule (Current Law) is a direct consequence of the conservation of:",
      "options": [
        "Charge",
        "Energy",
        "Momentum",
        "Angular momentum"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTotal current entering a junction equals total current leaving, reflecting the conservation of **electric charge**."
    },
    {
      "id": "phy-elec-q10",
      "difficulty": "easy",
      "concept": "Electrostatics – Kirchhoff Laws",
      "year": "Standard Exam Question",
      "text": "An electron enters a uniform magnetic field perpendicularly. Its path inside the field will be a:",
      "options": [
        "Circle",
        "Straight line",
        "Parabola",
        "Helix"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMagnetic force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ is always perpendicular to velocity, providing centripetal acceleration in a **circular path**."
    },
    {
      "id": "phy-elec-q11",
      "difficulty": "medium",
      "concept": "Electrostatics – Coulomb Law",
      "year": "Standard Exam Question",
      "text": "Two point charges $+q$ and $-q$ separated by distance $2a$ form a dipole. The electric field on the axial line at distance $r \\gg a$ scales as:",
      "options": [
        "$1/r^3$",
        "$1/r^2$",
        "$1/r$",
        "$1/r^4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nElectric field of a dipole falls off as $\\mathbf{1/r^3}$ along both axial and equatorial lines for large distances."
    },
    {
      "id": "phy-elec-q12",
      "difficulty": "hard",
      "concept": "Electrostatics – Capacitance",
      "year": "Standard Exam Question",
      "text": "A parallel plate capacitor with capacitance $C$ is filled with a dielectric of constant $K = 4$. The new capacitance is:",
      "options": [
        "$4C$",
        "$C/4$",
        "$C$",
        "$16C$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$C' = K \\cdot C = 4C$."
    },
    {
      "id": "phy-elec-q13",
      "difficulty": "easy",
      "concept": "Electrostatics – Current Electricity",
      "year": "Standard Exam Question",
      "text": "Three resistors of $6\\;\\Omega$ each are connected in parallel. What is their equivalent resistance?",
      "options": [
        "$2\\;\\Omega$",
        "$18\\;\\Omega$",
        "$3\\;\\Omega$",
        "$1\\;\\Omega$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$1/R_{eq} = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 \\implies R_{eq} = \\mathbf{2\\;\\Omega}$."
    },
    {
      "id": "phy-elec-q14",
      "difficulty": "medium",
      "concept": "Electrostatics – Magnetism",
      "year": "Standard Exam Question",
      "text": "Kirchhoff's Junction Rule (Current Law) is a direct consequence of the conservation of:",
      "options": [
        "Charge",
        "Energy",
        "Momentum",
        "Angular momentum"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTotal current entering a junction equals total current leaving, reflecting the conservation of **electric charge**."
    },
    {
      "id": "phy-elec-q15",
      "difficulty": "hard",
      "concept": "Electrostatics – Kirchhoff Laws",
      "year": "Standard Exam Question",
      "text": "An electron enters a uniform magnetic field perpendicularly. Its path inside the field will be a:",
      "options": [
        "Circle",
        "Straight line",
        "Parabola",
        "Helix"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMagnetic force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ is always perpendicular to velocity, providing centripetal acceleration in a **circular path**."
    },
    {
      "id": "phy-elec-q16",
      "difficulty": "easy",
      "concept": "Electrostatics – Coulomb Law",
      "year": "Standard Exam Question",
      "text": "Two point charges $+q$ and $-q$ separated by distance $2a$ form a dipole. The electric field on the axial line at distance $r \\gg a$ scales as:",
      "options": [
        "$1/r^3$",
        "$1/r^2$",
        "$1/r$",
        "$1/r^4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nElectric field of a dipole falls off as $\\mathbf{1/r^3}$ along both axial and equatorial lines for large distances."
    },
    {
      "id": "phy-elec-q17",
      "difficulty": "medium",
      "concept": "Electrostatics – Capacitance",
      "year": "Standard Exam Question",
      "text": "A parallel plate capacitor with capacitance $C$ is filled with a dielectric of constant $K = 4$. The new capacitance is:",
      "options": [
        "$4C$",
        "$C/4$",
        "$C$",
        "$16C$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$C' = K \\cdot C = 4C$."
    },
    {
      "id": "phy-elec-q18",
      "difficulty": "hard",
      "concept": "Electrostatics – Current Electricity",
      "year": "Standard Exam Question",
      "text": "Three resistors of $6\\;\\Omega$ each are connected in parallel. What is their equivalent resistance?",
      "options": [
        "$2\\;\\Omega$",
        "$18\\;\\Omega$",
        "$3\\;\\Omega$",
        "$1\\;\\Omega$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$1/R_{eq} = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 \\implies R_{eq} = \\mathbf{2\\;\\Omega}$."
    },
    {
      "id": "phy-elec-q19",
      "difficulty": "easy",
      "concept": "Electrostatics – Magnetism",
      "year": "Standard Exam Question",
      "text": "Kirchhoff's Junction Rule (Current Law) is a direct consequence of the conservation of:",
      "options": [
        "Charge",
        "Energy",
        "Momentum",
        "Angular momentum"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTotal current entering a junction equals total current leaving, reflecting the conservation of **electric charge**."
    },
    {
      "id": "phy-elec-q20",
      "difficulty": "medium",
      "concept": "Electrostatics – Kirchhoff Laws",
      "year": "Standard Exam Question",
      "text": "An electron enters a uniform magnetic field perpendicularly. Its path inside the field will be a:",
      "options": [
        "Circle",
        "Straight line",
        "Parabola",
        "Helix"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMagnetic force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ is always perpendicular to velocity, providing centripetal acceleration in a **circular path**."
    },
    {
      "id": "phy-elec-q21",
      "difficulty": "hard",
      "concept": "Electrostatics – Coulomb Law",
      "year": "Standard Exam Question",
      "text": "Two point charges $+q$ and $-q$ separated by distance $2a$ form a dipole. The electric field on the axial line at distance $r \\gg a$ scales as:",
      "options": [
        "$1/r^3$",
        "$1/r^2$",
        "$1/r$",
        "$1/r^4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nElectric field of a dipole falls off as $\\mathbf{1/r^3}$ along both axial and equatorial lines for large distances."
    },
    {
      "id": "phy-elec-q22",
      "difficulty": "easy",
      "concept": "Electrostatics – Capacitance",
      "year": "Standard Exam Question",
      "text": "A parallel plate capacitor with capacitance $C$ is filled with a dielectric of constant $K = 4$. The new capacitance is:",
      "options": [
        "$4C$",
        "$C/4$",
        "$C$",
        "$16C$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$C' = K \\cdot C = 4C$."
    },
    {
      "id": "phy-elec-q23",
      "difficulty": "medium",
      "concept": "Electrostatics – Current Electricity",
      "year": "Standard Exam Question",
      "text": "Three resistors of $6\\;\\Omega$ each are connected in parallel. What is their equivalent resistance?",
      "options": [
        "$2\\;\\Omega$",
        "$18\\;\\Omega$",
        "$3\\;\\Omega$",
        "$1\\;\\Omega$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$1/R_{eq} = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 \\implies R_{eq} = \\mathbf{2\\;\\Omega}$."
    },
    {
      "id": "phy-elec-q24",
      "difficulty": "hard",
      "concept": "Electrostatics – Magnetism",
      "year": "Standard Exam Question",
      "text": "Kirchhoff's Junction Rule (Current Law) is a direct consequence of the conservation of:",
      "options": [
        "Charge",
        "Energy",
        "Momentum",
        "Angular momentum"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTotal current entering a junction equals total current leaving, reflecting the conservation of **electric charge**."
    },
    {
      "id": "phy-elec-q25",
      "difficulty": "easy",
      "concept": "Electrostatics – Kirchhoff Laws",
      "year": "Standard Exam Question",
      "text": "An electron enters a uniform magnetic field perpendicularly. Its path inside the field will be a:",
      "options": [
        "Circle",
        "Straight line",
        "Parabola",
        "Helix"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMagnetic force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ is always perpendicular to velocity, providing centripetal acceleration in a **circular path**."
    }
  ],
  "chem-org": [
    {
      "id": "chem-org-q01",
      "difficulty": "easy",
      "concept": "Organic Chemistry – Reaction Mechanisms",
      "year": "Standard Exam Question",
      "text": "Which mechanism involves a carbocation intermediate and racemization in optically active substrates?",
      "options": [
        "$S_N1$ mechanism",
        "$S_N2$ mechanism",
        "E2 mechanism",
        "Addition-elimination"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$S_N1$ proceeds via a planar carbocation intermediate attacked equally from both sides, leading to **racemization**."
    },
    {
      "id": "chem-org-q02",
      "difficulty": "medium",
      "concept": "Organic Chemistry – Isomerism",
      "year": "Standard Exam Question",
      "text": "Which of the following molecules shows geometric (cis-trans) isomerism?",
      "options": [
        "But-2-ene",
        "Propene",
        "Ethene",
        "2-Methylpropene"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBut-2-ene has two different groups on each double-bonded carbon ($CH_3$ and $H$), giving cis and trans isomers."
    },
    {
      "id": "chem-org-q03",
      "difficulty": "hard",
      "concept": "Organic Chemistry – Hydrocarbons",
      "year": "Standard Exam Question",
      "text": "The major product formed by dehydration of butan-2-ol with concentrated sulfuric acid is governed by:",
      "options": [
        "Saytzeff's (Zaitsev's) rule (more substituted alkene)",
        "Hoffmann's rule",
        "Markovnikov's rule",
        "Anti-Markovnikov's rule"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSaytzeff's rule states the more substituted, thermodynamically stable alkene (but-2-ene) is the major product."
    },
    {
      "id": "chem-org-q04",
      "difficulty": "easy",
      "concept": "Organic Chemistry – Carbonyl Compounds",
      "year": "Standard Exam Question",
      "text": "Which functional group gives a silver mirror test with Tollens' reagent?",
      "options": [
        "Aldehyde",
        "Ketone",
        "Carboxylic acid",
        "Ester"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAldehydes are easily oxidized to carboxylic acids, reducing $Ag^+$ in Tollens' reagent to metallic silver."
    },
    {
      "id": "chem-org-q05",
      "difficulty": "medium",
      "concept": "Organic Chemistry – Aromatics",
      "year": "Standard Exam Question",
      "text": "Benzene undergoes which characteristic type of reaction with halogens in the presence of $FeCl_3$?",
      "options": [
        "Electrophilic aromatic substitution",
        "Nucleophilic substitution",
        "Free radical addition",
        "Electrophilic addition"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBenzene preserves its stable aromatic sextet by undergoing **electrophilic aromatic substitution** rather than addition."
    },
    {
      "id": "chem-org-q06",
      "difficulty": "hard",
      "concept": "Organic Chemistry – Reaction Mechanisms",
      "year": "Standard Exam Question",
      "text": "Which mechanism involves a carbocation intermediate and racemization in optically active substrates?",
      "options": [
        "$S_N1$ mechanism",
        "$S_N2$ mechanism",
        "E2 mechanism",
        "Addition-elimination"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$S_N1$ proceeds via a planar carbocation intermediate attacked equally from both sides, leading to **racemization**."
    },
    {
      "id": "chem-org-q07",
      "difficulty": "easy",
      "concept": "Organic Chemistry – Isomerism",
      "year": "Standard Exam Question",
      "text": "Which of the following molecules shows geometric (cis-trans) isomerism?",
      "options": [
        "But-2-ene",
        "Propene",
        "Ethene",
        "2-Methylpropene"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBut-2-ene has two different groups on each double-bonded carbon ($CH_3$ and $H$), giving cis and trans isomers."
    },
    {
      "id": "chem-org-q08",
      "difficulty": "medium",
      "concept": "Organic Chemistry – Hydrocarbons",
      "year": "Standard Exam Question",
      "text": "The major product formed by dehydration of butan-2-ol with concentrated sulfuric acid is governed by:",
      "options": [
        "Saytzeff's (Zaitsev's) rule (more substituted alkene)",
        "Hoffmann's rule",
        "Markovnikov's rule",
        "Anti-Markovnikov's rule"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSaytzeff's rule states the more substituted, thermodynamically stable alkene (but-2-ene) is the major product."
    },
    {
      "id": "chem-org-q09",
      "difficulty": "hard",
      "concept": "Organic Chemistry – Carbonyl Compounds",
      "year": "Standard Exam Question",
      "text": "Which functional group gives a silver mirror test with Tollens' reagent?",
      "options": [
        "Aldehyde",
        "Ketone",
        "Carboxylic acid",
        "Ester"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAldehydes are easily oxidized to carboxylic acids, reducing $Ag^+$ in Tollens' reagent to metallic silver."
    },
    {
      "id": "chem-org-q10",
      "difficulty": "easy",
      "concept": "Organic Chemistry – Aromatics",
      "year": "Standard Exam Question",
      "text": "Benzene undergoes which characteristic type of reaction with halogens in the presence of $FeCl_3$?",
      "options": [
        "Electrophilic aromatic substitution",
        "Nucleophilic substitution",
        "Free radical addition",
        "Electrophilic addition"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBenzene preserves its stable aromatic sextet by undergoing **electrophilic aromatic substitution** rather than addition."
    },
    {
      "id": "chem-org-q11",
      "difficulty": "medium",
      "concept": "Organic Chemistry – Reaction Mechanisms",
      "year": "Standard Exam Question",
      "text": "Which mechanism involves a carbocation intermediate and racemization in optically active substrates?",
      "options": [
        "$S_N1$ mechanism",
        "$S_N2$ mechanism",
        "E2 mechanism",
        "Addition-elimination"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$S_N1$ proceeds via a planar carbocation intermediate attacked equally from both sides, leading to **racemization**."
    },
    {
      "id": "chem-org-q12",
      "difficulty": "hard",
      "concept": "Organic Chemistry – Isomerism",
      "year": "Standard Exam Question",
      "text": "Which of the following molecules shows geometric (cis-trans) isomerism?",
      "options": [
        "But-2-ene",
        "Propene",
        "Ethene",
        "2-Methylpropene"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBut-2-ene has two different groups on each double-bonded carbon ($CH_3$ and $H$), giving cis and trans isomers."
    },
    {
      "id": "chem-org-q13",
      "difficulty": "easy",
      "concept": "Organic Chemistry – Hydrocarbons",
      "year": "Standard Exam Question",
      "text": "The major product formed by dehydration of butan-2-ol with concentrated sulfuric acid is governed by:",
      "options": [
        "Saytzeff's (Zaitsev's) rule (more substituted alkene)",
        "Hoffmann's rule",
        "Markovnikov's rule",
        "Anti-Markovnikov's rule"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSaytzeff's rule states the more substituted, thermodynamically stable alkene (but-2-ene) is the major product."
    },
    {
      "id": "chem-org-q14",
      "difficulty": "medium",
      "concept": "Organic Chemistry – Carbonyl Compounds",
      "year": "Standard Exam Question",
      "text": "Which functional group gives a silver mirror test with Tollens' reagent?",
      "options": [
        "Aldehyde",
        "Ketone",
        "Carboxylic acid",
        "Ester"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAldehydes are easily oxidized to carboxylic acids, reducing $Ag^+$ in Tollens' reagent to metallic silver."
    },
    {
      "id": "chem-org-q15",
      "difficulty": "hard",
      "concept": "Organic Chemistry – Aromatics",
      "year": "Standard Exam Question",
      "text": "Benzene undergoes which characteristic type of reaction with halogens in the presence of $FeCl_3$?",
      "options": [
        "Electrophilic aromatic substitution",
        "Nucleophilic substitution",
        "Free radical addition",
        "Electrophilic addition"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBenzene preserves its stable aromatic sextet by undergoing **electrophilic aromatic substitution** rather than addition."
    },
    {
      "id": "chem-org-q16",
      "difficulty": "easy",
      "concept": "Organic Chemistry – Reaction Mechanisms",
      "year": "Standard Exam Question",
      "text": "Which mechanism involves a carbocation intermediate and racemization in optically active substrates?",
      "options": [
        "$S_N1$ mechanism",
        "$S_N2$ mechanism",
        "E2 mechanism",
        "Addition-elimination"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$S_N1$ proceeds via a planar carbocation intermediate attacked equally from both sides, leading to **racemization**."
    },
    {
      "id": "chem-org-q17",
      "difficulty": "medium",
      "concept": "Organic Chemistry – Isomerism",
      "year": "Standard Exam Question",
      "text": "Which of the following molecules shows geometric (cis-trans) isomerism?",
      "options": [
        "But-2-ene",
        "Propene",
        "Ethene",
        "2-Methylpropene"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBut-2-ene has two different groups on each double-bonded carbon ($CH_3$ and $H$), giving cis and trans isomers."
    },
    {
      "id": "chem-org-q18",
      "difficulty": "hard",
      "concept": "Organic Chemistry – Hydrocarbons",
      "year": "Standard Exam Question",
      "text": "The major product formed by dehydration of butan-2-ol with concentrated sulfuric acid is governed by:",
      "options": [
        "Saytzeff's (Zaitsev's) rule (more substituted alkene)",
        "Hoffmann's rule",
        "Markovnikov's rule",
        "Anti-Markovnikov's rule"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSaytzeff's rule states the more substituted, thermodynamically stable alkene (but-2-ene) is the major product."
    },
    {
      "id": "chem-org-q19",
      "difficulty": "easy",
      "concept": "Organic Chemistry – Carbonyl Compounds",
      "year": "Standard Exam Question",
      "text": "Which functional group gives a silver mirror test with Tollens' reagent?",
      "options": [
        "Aldehyde",
        "Ketone",
        "Carboxylic acid",
        "Ester"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAldehydes are easily oxidized to carboxylic acids, reducing $Ag^+$ in Tollens' reagent to metallic silver."
    },
    {
      "id": "chem-org-q20",
      "difficulty": "medium",
      "concept": "Organic Chemistry – Aromatics",
      "year": "Standard Exam Question",
      "text": "Benzene undergoes which characteristic type of reaction with halogens in the presence of $FeCl_3$?",
      "options": [
        "Electrophilic aromatic substitution",
        "Nucleophilic substitution",
        "Free radical addition",
        "Electrophilic addition"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBenzene preserves its stable aromatic sextet by undergoing **electrophilic aromatic substitution** rather than addition."
    },
    {
      "id": "chem-org-q21",
      "difficulty": "hard",
      "concept": "Organic Chemistry – Reaction Mechanisms",
      "year": "Standard Exam Question",
      "text": "Which mechanism involves a carbocation intermediate and racemization in optically active substrates?",
      "options": [
        "$S_N1$ mechanism",
        "$S_N2$ mechanism",
        "E2 mechanism",
        "Addition-elimination"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$S_N1$ proceeds via a planar carbocation intermediate attacked equally from both sides, leading to **racemization**."
    },
    {
      "id": "chem-org-q22",
      "difficulty": "easy",
      "concept": "Organic Chemistry – Isomerism",
      "year": "Standard Exam Question",
      "text": "Which of the following molecules shows geometric (cis-trans) isomerism?",
      "options": [
        "But-2-ene",
        "Propene",
        "Ethene",
        "2-Methylpropene"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBut-2-ene has two different groups on each double-bonded carbon ($CH_3$ and $H$), giving cis and trans isomers."
    },
    {
      "id": "chem-org-q23",
      "difficulty": "medium",
      "concept": "Organic Chemistry – Hydrocarbons",
      "year": "Standard Exam Question",
      "text": "The major product formed by dehydration of butan-2-ol with concentrated sulfuric acid is governed by:",
      "options": [
        "Saytzeff's (Zaitsev's) rule (more substituted alkene)",
        "Hoffmann's rule",
        "Markovnikov's rule",
        "Anti-Markovnikov's rule"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSaytzeff's rule states the more substituted, thermodynamically stable alkene (but-2-ene) is the major product."
    },
    {
      "id": "chem-org-q24",
      "difficulty": "hard",
      "concept": "Organic Chemistry – Carbonyl Compounds",
      "year": "Standard Exam Question",
      "text": "Which functional group gives a silver mirror test with Tollens' reagent?",
      "options": [
        "Aldehyde",
        "Ketone",
        "Carboxylic acid",
        "Ester"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAldehydes are easily oxidized to carboxylic acids, reducing $Ag^+$ in Tollens' reagent to metallic silver."
    },
    {
      "id": "chem-org-q25",
      "difficulty": "easy",
      "concept": "Organic Chemistry – Aromatics",
      "year": "Standard Exam Question",
      "text": "Benzene undergoes which characteristic type of reaction with halogens in the presence of $FeCl_3$?",
      "options": [
        "Electrophilic aromatic substitution",
        "Nucleophilic substitution",
        "Free radical addition",
        "Electrophilic addition"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBenzene preserves its stable aromatic sextet by undergoing **electrophilic aromatic substitution** rather than addition."
    }
  ],
  "chem-equil": [
    {
      "id": "chem-equil-q01",
      "difficulty": "easy",
      "concept": "Equilibrium – Chemical Equilibrium",
      "year": "Standard Exam Question",
      "text": "For the exothermic reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, according to Le Chatelier's principle, increasing the temperature will:",
      "options": [
        "Shift equilibrium to the left (favor reactants)",
        "Shift equilibrium to the right",
        "Have no effect on equilibrium",
        "Increase $K_p$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor an exothermic reaction ($\\Delta H < 0$), heat is a product. Increasing temperature shifts equilibrium in the endothermic direction (**left**)."
    },
    {
      "id": "chem-equil-q02",
      "difficulty": "medium",
      "concept": "Equilibrium – Le Chatelier",
      "year": "Standard Exam Question",
      "text": "The relation between $K_p$ and $K_c$ is given by $K_p = K_c (RT)^{\\Delta n_g}$. For $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$, $\\Delta n_g$ is:",
      "options": [
        "-1",
        "+1",
        "0",
        "-2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\Delta n_g = n_{products} - n_{reactants} = 2 - (2 + 1) = \\mathbf{-1}$$"
    },
    {
      "id": "chem-equil-q03",
      "difficulty": "hard",
      "concept": "Equilibrium – Ionic Equilibrium",
      "year": "Standard Exam Question",
      "text": "What is the pH of a $10^{-3}\\text{ M}$ aqueous solution of strong acid $HCl$?",
      "options": [
        "3",
        "11",
        "1",
        "7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$[H^+] = 10^{-3}\\text{ M} \\implies \\text{pH} = -\\log_{10}(10^{-3}) = \\mathbf{3}$$"
    },
    {
      "id": "chem-equil-q04",
      "difficulty": "easy",
      "concept": "Equilibrium – Buffer Solutions",
      "year": "Standard Exam Question",
      "text": "A buffer solution can be prepared by mixing:",
      "options": [
        "A weak acid and its conjugate salt with strong base",
        "Strong acid and strong base",
        "Weak acid and strong acid",
        "Two neutral salts"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAn acidic buffer consists of a weak acid (e.g., $CH_3COOH$) and its conjugate base salt (e.g., $CH_3COONa$)."
    },
    {
      "id": "chem-equil-q05",
      "difficulty": "medium",
      "concept": "Equilibrium – Solubility Product",
      "year": "Standard Exam Question",
      "text": "For a sparingly soluble salt $AB_2$, if solubility is $S\\text{ mol/L}$, the solubility product $K_{sp}$ is:",
      "options": [
        "$4S^3$",
        "$S^2$",
        "$2S^2$",
        "$27S^4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$AB_2 \\rightleftharpoons A^{2+} + 2B^- \\implies K_{sp} = [A^{2+}][B^-]^2 = (S)(2S)^2 = 4S^3$$"
    },
    {
      "id": "chem-equil-q06",
      "difficulty": "hard",
      "concept": "Equilibrium – Chemical Equilibrium",
      "year": "Standard Exam Question",
      "text": "For the exothermic reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, according to Le Chatelier's principle, increasing the temperature will:",
      "options": [
        "Shift equilibrium to the left (favor reactants)",
        "Shift equilibrium to the right",
        "Have no effect on equilibrium",
        "Increase $K_p$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor an exothermic reaction ($\\Delta H < 0$), heat is a product. Increasing temperature shifts equilibrium in the endothermic direction (**left**)."
    },
    {
      "id": "chem-equil-q07",
      "difficulty": "easy",
      "concept": "Equilibrium – Le Chatelier",
      "year": "Standard Exam Question",
      "text": "The relation between $K_p$ and $K_c$ is given by $K_p = K_c (RT)^{\\Delta n_g}$. For $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$, $\\Delta n_g$ is:",
      "options": [
        "-1",
        "+1",
        "0",
        "-2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\Delta n_g = n_{products} - n_{reactants} = 2 - (2 + 1) = \\mathbf{-1}$$"
    },
    {
      "id": "chem-equil-q08",
      "difficulty": "medium",
      "concept": "Equilibrium – Ionic Equilibrium",
      "year": "Standard Exam Question",
      "text": "What is the pH of a $10^{-3}\\text{ M}$ aqueous solution of strong acid $HCl$?",
      "options": [
        "3",
        "11",
        "1",
        "7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$[H^+] = 10^{-3}\\text{ M} \\implies \\text{pH} = -\\log_{10}(10^{-3}) = \\mathbf{3}$$"
    },
    {
      "id": "chem-equil-q09",
      "difficulty": "hard",
      "concept": "Equilibrium – Buffer Solutions",
      "year": "Standard Exam Question",
      "text": "A buffer solution can be prepared by mixing:",
      "options": [
        "A weak acid and its conjugate salt with strong base",
        "Strong acid and strong base",
        "Weak acid and strong acid",
        "Two neutral salts"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAn acidic buffer consists of a weak acid (e.g., $CH_3COOH$) and its conjugate base salt (e.g., $CH_3COONa$)."
    },
    {
      "id": "chem-equil-q10",
      "difficulty": "easy",
      "concept": "Equilibrium – Solubility Product",
      "year": "Standard Exam Question",
      "text": "For a sparingly soluble salt $AB_2$, if solubility is $S\\text{ mol/L}$, the solubility product $K_{sp}$ is:",
      "options": [
        "$4S^3$",
        "$S^2$",
        "$2S^2$",
        "$27S^4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$AB_2 \\rightleftharpoons A^{2+} + 2B^- \\implies K_{sp} = [A^{2+}][B^-]^2 = (S)(2S)^2 = 4S^3$$"
    },
    {
      "id": "chem-equil-q11",
      "difficulty": "medium",
      "concept": "Equilibrium – Chemical Equilibrium",
      "year": "Standard Exam Question",
      "text": "For the exothermic reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, according to Le Chatelier's principle, increasing the temperature will:",
      "options": [
        "Shift equilibrium to the left (favor reactants)",
        "Shift equilibrium to the right",
        "Have no effect on equilibrium",
        "Increase $K_p$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor an exothermic reaction ($\\Delta H < 0$), heat is a product. Increasing temperature shifts equilibrium in the endothermic direction (**left**)."
    },
    {
      "id": "chem-equil-q12",
      "difficulty": "hard",
      "concept": "Equilibrium – Le Chatelier",
      "year": "Standard Exam Question",
      "text": "The relation between $K_p$ and $K_c$ is given by $K_p = K_c (RT)^{\\Delta n_g}$. For $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$, $\\Delta n_g$ is:",
      "options": [
        "-1",
        "+1",
        "0",
        "-2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\Delta n_g = n_{products} - n_{reactants} = 2 - (2 + 1) = \\mathbf{-1}$$"
    },
    {
      "id": "chem-equil-q13",
      "difficulty": "easy",
      "concept": "Equilibrium – Ionic Equilibrium",
      "year": "Standard Exam Question",
      "text": "What is the pH of a $10^{-3}\\text{ M}$ aqueous solution of strong acid $HCl$?",
      "options": [
        "3",
        "11",
        "1",
        "7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$[H^+] = 10^{-3}\\text{ M} \\implies \\text{pH} = -\\log_{10}(10^{-3}) = \\mathbf{3}$$"
    },
    {
      "id": "chem-equil-q14",
      "difficulty": "medium",
      "concept": "Equilibrium – Buffer Solutions",
      "year": "Standard Exam Question",
      "text": "A buffer solution can be prepared by mixing:",
      "options": [
        "A weak acid and its conjugate salt with strong base",
        "Strong acid and strong base",
        "Weak acid and strong acid",
        "Two neutral salts"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAn acidic buffer consists of a weak acid (e.g., $CH_3COOH$) and its conjugate base salt (e.g., $CH_3COONa$)."
    },
    {
      "id": "chem-equil-q15",
      "difficulty": "hard",
      "concept": "Equilibrium – Solubility Product",
      "year": "Standard Exam Question",
      "text": "For a sparingly soluble salt $AB_2$, if solubility is $S\\text{ mol/L}$, the solubility product $K_{sp}$ is:",
      "options": [
        "$4S^3$",
        "$S^2$",
        "$2S^2$",
        "$27S^4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$AB_2 \\rightleftharpoons A^{2+} + 2B^- \\implies K_{sp} = [A^{2+}][B^-]^2 = (S)(2S)^2 = 4S^3$$"
    },
    {
      "id": "chem-equil-q16",
      "difficulty": "easy",
      "concept": "Equilibrium – Chemical Equilibrium",
      "year": "Standard Exam Question",
      "text": "For the exothermic reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, according to Le Chatelier's principle, increasing the temperature will:",
      "options": [
        "Shift equilibrium to the left (favor reactants)",
        "Shift equilibrium to the right",
        "Have no effect on equilibrium",
        "Increase $K_p$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor an exothermic reaction ($\\Delta H < 0$), heat is a product. Increasing temperature shifts equilibrium in the endothermic direction (**left**)."
    },
    {
      "id": "chem-equil-q17",
      "difficulty": "medium",
      "concept": "Equilibrium – Le Chatelier",
      "year": "Standard Exam Question",
      "text": "The relation between $K_p$ and $K_c$ is given by $K_p = K_c (RT)^{\\Delta n_g}$. For $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$, $\\Delta n_g$ is:",
      "options": [
        "-1",
        "+1",
        "0",
        "-2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\Delta n_g = n_{products} - n_{reactants} = 2 - (2 + 1) = \\mathbf{-1}$$"
    },
    {
      "id": "chem-equil-q18",
      "difficulty": "hard",
      "concept": "Equilibrium – Ionic Equilibrium",
      "year": "Standard Exam Question",
      "text": "What is the pH of a $10^{-3}\\text{ M}$ aqueous solution of strong acid $HCl$?",
      "options": [
        "3",
        "11",
        "1",
        "7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$[H^+] = 10^{-3}\\text{ M} \\implies \\text{pH} = -\\log_{10}(10^{-3}) = \\mathbf{3}$$"
    },
    {
      "id": "chem-equil-q19",
      "difficulty": "easy",
      "concept": "Equilibrium – Buffer Solutions",
      "year": "Standard Exam Question",
      "text": "A buffer solution can be prepared by mixing:",
      "options": [
        "A weak acid and its conjugate salt with strong base",
        "Strong acid and strong base",
        "Weak acid and strong acid",
        "Two neutral salts"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAn acidic buffer consists of a weak acid (e.g., $CH_3COOH$) and its conjugate base salt (e.g., $CH_3COONa$)."
    },
    {
      "id": "chem-equil-q20",
      "difficulty": "medium",
      "concept": "Equilibrium – Solubility Product",
      "year": "Standard Exam Question",
      "text": "For a sparingly soluble salt $AB_2$, if solubility is $S\\text{ mol/L}$, the solubility product $K_{sp}$ is:",
      "options": [
        "$4S^3$",
        "$S^2$",
        "$2S^2$",
        "$27S^4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$AB_2 \\rightleftharpoons A^{2+} + 2B^- \\implies K_{sp} = [A^{2+}][B^-]^2 = (S)(2S)^2 = 4S^3$$"
    },
    {
      "id": "chem-equil-q21",
      "difficulty": "hard",
      "concept": "Equilibrium – Chemical Equilibrium",
      "year": "Standard Exam Question",
      "text": "For the exothermic reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, according to Le Chatelier's principle, increasing the temperature will:",
      "options": [
        "Shift equilibrium to the left (favor reactants)",
        "Shift equilibrium to the right",
        "Have no effect on equilibrium",
        "Increase $K_p$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor an exothermic reaction ($\\Delta H < 0$), heat is a product. Increasing temperature shifts equilibrium in the endothermic direction (**left**)."
    },
    {
      "id": "chem-equil-q22",
      "difficulty": "easy",
      "concept": "Equilibrium – Le Chatelier",
      "year": "Standard Exam Question",
      "text": "The relation between $K_p$ and $K_c$ is given by $K_p = K_c (RT)^{\\Delta n_g}$. For $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$, $\\Delta n_g$ is:",
      "options": [
        "-1",
        "+1",
        "0",
        "-2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\Delta n_g = n_{products} - n_{reactants} = 2 - (2 + 1) = \\mathbf{-1}$$"
    },
    {
      "id": "chem-equil-q23",
      "difficulty": "medium",
      "concept": "Equilibrium – Ionic Equilibrium",
      "year": "Standard Exam Question",
      "text": "What is the pH of a $10^{-3}\\text{ M}$ aqueous solution of strong acid $HCl$?",
      "options": [
        "3",
        "11",
        "1",
        "7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$[H^+] = 10^{-3}\\text{ M} \\implies \\text{pH} = -\\log_{10}(10^{-3}) = \\mathbf{3}$$"
    },
    {
      "id": "chem-equil-q24",
      "difficulty": "hard",
      "concept": "Equilibrium – Buffer Solutions",
      "year": "Standard Exam Question",
      "text": "A buffer solution can be prepared by mixing:",
      "options": [
        "A weak acid and its conjugate salt with strong base",
        "Strong acid and strong base",
        "Weak acid and strong acid",
        "Two neutral salts"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAn acidic buffer consists of a weak acid (e.g., $CH_3COOH$) and its conjugate base salt (e.g., $CH_3COONa$)."
    },
    {
      "id": "chem-equil-q25",
      "difficulty": "easy",
      "concept": "Equilibrium – Solubility Product",
      "year": "Standard Exam Question",
      "text": "For a sparingly soluble salt $AB_2$, if solubility is $S\\text{ mol/L}$, the solubility product $K_{sp}$ is:",
      "options": [
        "$4S^3$",
        "$S^2$",
        "$2S^2$",
        "$27S^4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$AB_2 \\rightleftharpoons A^{2+} + 2B^- \\implies K_{sp} = [A^{2+}][B^-]^2 = (S)(2S)^2 = 4S^3$$"
    }
  ],
  "math-calc": [
    {
      "id": "math-calc-q01",
      "difficulty": "easy",
      "concept": "Calculus – Limits",
      "year": "Standard Exam Question",
      "text": "What is the value of $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$?",
      "options": [
        "5",
        "1",
        "0",
        "1/5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\lim_{x \\to 0} \\frac{\\sin(5x)}{5x} \\times 5 = 1 \\times 5 = \\mathbf{5}$$"
    },
    {
      "id": "math-calc-q02",
      "difficulty": "medium",
      "concept": "Calculus – Differentiation",
      "year": "Standard Exam Question",
      "text": "The derivative of $f(x) = e^{x^2}$ with respect to $x$ is:",
      "options": [
        "$2x e^{x^2}$",
        "$e^{x^2}$",
        "$x^2 e^{x^2 - 1}$",
        "$2 e^{x^2}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy chain rule: $\\frac{d}{dx}[e^{x^2}] = e^{x^2} \\cdot \\frac{d}{dx}(x^2) = \\mathbf{2x e^{x^2}}$."
    },
    {
      "id": "math-calc-q03",
      "difficulty": "hard",
      "concept": "Calculus – Integration",
      "year": "Standard Exam Question",
      "text": "The integral $\\int_0^{\\pi/2} \\sin^2(x) \\, dx$ equals:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$1$",
        "$1/2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nUsing property $\\int_0^a f(x)dx = \\int_0^a f(a-x)dx$ gives $2I = \\int_0^{\\pi/2} 1 dx = \\pi/2 \\implies I = \\mathbf{\\pi/4}$."
    },
    {
      "id": "math-calc-q04",
      "difficulty": "easy",
      "concept": "Calculus – Maxima Minima",
      "year": "Standard Exam Question",
      "text": "The function $f(x) = x^3 - 3x$ has a local maximum at:",
      "options": [
        "$x = -1$",
        "$x = 1$",
        "$x = 0$",
        "$x = 3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$f'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$. $f''(x) = 6x$. At $x = -1$, $f''(-1) = -6 < 0 \\implies$ local maximum."
    },
    {
      "id": "math-calc-q05",
      "difficulty": "medium",
      "concept": "Calculus – Differential Equations",
      "year": "Standard Exam Question",
      "text": "The order and degree of the differential equation $\\left(\\frac{d^2 y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$ are:",
      "options": [
        "Order = 2, Degree = 3",
        "Order = 3, Degree = 2",
        "Order = 2, Degree = 4",
        "Order = 4, Degree = 3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nHighest derivative is $\\frac{d^2 y}{dx^2}$ (order 2), and its power is 3 (degree 3)."
    },
    {
      "id": "math-calc-q06",
      "difficulty": "hard",
      "concept": "Calculus – Limits",
      "year": "Standard Exam Question",
      "text": "What is the value of $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$?",
      "options": [
        "5",
        "1",
        "0",
        "1/5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\lim_{x \\to 0} \\frac{\\sin(5x)}{5x} \\times 5 = 1 \\times 5 = \\mathbf{5}$$"
    },
    {
      "id": "math-calc-q07",
      "difficulty": "easy",
      "concept": "Calculus – Differentiation",
      "year": "Standard Exam Question",
      "text": "The derivative of $f(x) = e^{x^2}$ with respect to $x$ is:",
      "options": [
        "$2x e^{x^2}$",
        "$e^{x^2}$",
        "$x^2 e^{x^2 - 1}$",
        "$2 e^{x^2}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy chain rule: $\\frac{d}{dx}[e^{x^2}] = e^{x^2} \\cdot \\frac{d}{dx}(x^2) = \\mathbf{2x e^{x^2}}$."
    },
    {
      "id": "math-calc-q08",
      "difficulty": "medium",
      "concept": "Calculus – Integration",
      "year": "Standard Exam Question",
      "text": "The integral $\\int_0^{\\pi/2} \\sin^2(x) \\, dx$ equals:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$1$",
        "$1/2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nUsing property $\\int_0^a f(x)dx = \\int_0^a f(a-x)dx$ gives $2I = \\int_0^{\\pi/2} 1 dx = \\pi/2 \\implies I = \\mathbf{\\pi/4}$."
    },
    {
      "id": "math-calc-q09",
      "difficulty": "hard",
      "concept": "Calculus – Maxima Minima",
      "year": "Standard Exam Question",
      "text": "The function $f(x) = x^3 - 3x$ has a local maximum at:",
      "options": [
        "$x = -1$",
        "$x = 1$",
        "$x = 0$",
        "$x = 3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$f'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$. $f''(x) = 6x$. At $x = -1$, $f''(-1) = -6 < 0 \\implies$ local maximum."
    },
    {
      "id": "math-calc-q10",
      "difficulty": "easy",
      "concept": "Calculus – Differential Equations",
      "year": "Standard Exam Question",
      "text": "The order and degree of the differential equation $\\left(\\frac{d^2 y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$ are:",
      "options": [
        "Order = 2, Degree = 3",
        "Order = 3, Degree = 2",
        "Order = 2, Degree = 4",
        "Order = 4, Degree = 3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nHighest derivative is $\\frac{d^2 y}{dx^2}$ (order 2), and its power is 3 (degree 3)."
    },
    {
      "id": "math-calc-q11",
      "difficulty": "medium",
      "concept": "Calculus – Limits",
      "year": "Standard Exam Question",
      "text": "What is the value of $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$?",
      "options": [
        "5",
        "1",
        "0",
        "1/5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\lim_{x \\to 0} \\frac{\\sin(5x)}{5x} \\times 5 = 1 \\times 5 = \\mathbf{5}$$"
    },
    {
      "id": "math-calc-q12",
      "difficulty": "hard",
      "concept": "Calculus – Differentiation",
      "year": "Standard Exam Question",
      "text": "The derivative of $f(x) = e^{x^2}$ with respect to $x$ is:",
      "options": [
        "$2x e^{x^2}$",
        "$e^{x^2}$",
        "$x^2 e^{x^2 - 1}$",
        "$2 e^{x^2}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy chain rule: $\\frac{d}{dx}[e^{x^2}] = e^{x^2} \\cdot \\frac{d}{dx}(x^2) = \\mathbf{2x e^{x^2}}$."
    },
    {
      "id": "math-calc-q13",
      "difficulty": "easy",
      "concept": "Calculus – Integration",
      "year": "Standard Exam Question",
      "text": "The integral $\\int_0^{\\pi/2} \\sin^2(x) \\, dx$ equals:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$1$",
        "$1/2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nUsing property $\\int_0^a f(x)dx = \\int_0^a f(a-x)dx$ gives $2I = \\int_0^{\\pi/2} 1 dx = \\pi/2 \\implies I = \\mathbf{\\pi/4}$."
    },
    {
      "id": "math-calc-q14",
      "difficulty": "medium",
      "concept": "Calculus – Maxima Minima",
      "year": "Standard Exam Question",
      "text": "The function $f(x) = x^3 - 3x$ has a local maximum at:",
      "options": [
        "$x = -1$",
        "$x = 1$",
        "$x = 0$",
        "$x = 3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$f'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$. $f''(x) = 6x$. At $x = -1$, $f''(-1) = -6 < 0 \\implies$ local maximum."
    },
    {
      "id": "math-calc-q15",
      "difficulty": "hard",
      "concept": "Calculus – Differential Equations",
      "year": "Standard Exam Question",
      "text": "The order and degree of the differential equation $\\left(\\frac{d^2 y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$ are:",
      "options": [
        "Order = 2, Degree = 3",
        "Order = 3, Degree = 2",
        "Order = 2, Degree = 4",
        "Order = 4, Degree = 3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nHighest derivative is $\\frac{d^2 y}{dx^2}$ (order 2), and its power is 3 (degree 3)."
    },
    {
      "id": "math-calc-q16",
      "difficulty": "easy",
      "concept": "Calculus – Limits",
      "year": "Standard Exam Question",
      "text": "What is the value of $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$?",
      "options": [
        "5",
        "1",
        "0",
        "1/5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\lim_{x \\to 0} \\frac{\\sin(5x)}{5x} \\times 5 = 1 \\times 5 = \\mathbf{5}$$"
    },
    {
      "id": "math-calc-q17",
      "difficulty": "medium",
      "concept": "Calculus – Differentiation",
      "year": "Standard Exam Question",
      "text": "The derivative of $f(x) = e^{x^2}$ with respect to $x$ is:",
      "options": [
        "$2x e^{x^2}$",
        "$e^{x^2}$",
        "$x^2 e^{x^2 - 1}$",
        "$2 e^{x^2}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy chain rule: $\\frac{d}{dx}[e^{x^2}] = e^{x^2} \\cdot \\frac{d}{dx}(x^2) = \\mathbf{2x e^{x^2}}$."
    },
    {
      "id": "math-calc-q18",
      "difficulty": "hard",
      "concept": "Calculus – Integration",
      "year": "Standard Exam Question",
      "text": "The integral $\\int_0^{\\pi/2} \\sin^2(x) \\, dx$ equals:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$1$",
        "$1/2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nUsing property $\\int_0^a f(x)dx = \\int_0^a f(a-x)dx$ gives $2I = \\int_0^{\\pi/2} 1 dx = \\pi/2 \\implies I = \\mathbf{\\pi/4}$."
    },
    {
      "id": "math-calc-q19",
      "difficulty": "easy",
      "concept": "Calculus – Maxima Minima",
      "year": "Standard Exam Question",
      "text": "The function $f(x) = x^3 - 3x$ has a local maximum at:",
      "options": [
        "$x = -1$",
        "$x = 1$",
        "$x = 0$",
        "$x = 3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$f'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$. $f''(x) = 6x$. At $x = -1$, $f''(-1) = -6 < 0 \\implies$ local maximum."
    },
    {
      "id": "math-calc-q20",
      "difficulty": "medium",
      "concept": "Calculus – Differential Equations",
      "year": "Standard Exam Question",
      "text": "The order and degree of the differential equation $\\left(\\frac{d^2 y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$ are:",
      "options": [
        "Order = 2, Degree = 3",
        "Order = 3, Degree = 2",
        "Order = 2, Degree = 4",
        "Order = 4, Degree = 3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nHighest derivative is $\\frac{d^2 y}{dx^2}$ (order 2), and its power is 3 (degree 3)."
    },
    {
      "id": "math-calc-q21",
      "difficulty": "hard",
      "concept": "Calculus – Limits",
      "year": "Standard Exam Question",
      "text": "What is the value of $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$?",
      "options": [
        "5",
        "1",
        "0",
        "1/5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\lim_{x \\to 0} \\frac{\\sin(5x)}{5x} \\times 5 = 1 \\times 5 = \\mathbf{5}$$"
    },
    {
      "id": "math-calc-q22",
      "difficulty": "easy",
      "concept": "Calculus – Differentiation",
      "year": "Standard Exam Question",
      "text": "The derivative of $f(x) = e^{x^2}$ with respect to $x$ is:",
      "options": [
        "$2x e^{x^2}$",
        "$e^{x^2}$",
        "$x^2 e^{x^2 - 1}$",
        "$2 e^{x^2}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy chain rule: $\\frac{d}{dx}[e^{x^2}] = e^{x^2} \\cdot \\frac{d}{dx}(x^2) = \\mathbf{2x e^{x^2}}$."
    },
    {
      "id": "math-calc-q23",
      "difficulty": "medium",
      "concept": "Calculus – Integration",
      "year": "Standard Exam Question",
      "text": "The integral $\\int_0^{\\pi/2} \\sin^2(x) \\, dx$ equals:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$1$",
        "$1/2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nUsing property $\\int_0^a f(x)dx = \\int_0^a f(a-x)dx$ gives $2I = \\int_0^{\\pi/2} 1 dx = \\pi/2 \\implies I = \\mathbf{\\pi/4}$."
    },
    {
      "id": "math-calc-q24",
      "difficulty": "hard",
      "concept": "Calculus – Maxima Minima",
      "year": "Standard Exam Question",
      "text": "The function $f(x) = x^3 - 3x$ has a local maximum at:",
      "options": [
        "$x = -1$",
        "$x = 1$",
        "$x = 0$",
        "$x = 3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$f'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$. $f''(x) = 6x$. At $x = -1$, $f''(-1) = -6 < 0 \\implies$ local maximum."
    },
    {
      "id": "math-calc-q25",
      "difficulty": "easy",
      "concept": "Calculus – Differential Equations",
      "year": "Standard Exam Question",
      "text": "The order and degree of the differential equation $\\left(\\frac{d^2 y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$ are:",
      "options": [
        "Order = 2, Degree = 3",
        "Order = 3, Degree = 2",
        "Order = 2, Degree = 4",
        "Order = 4, Degree = 3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nHighest derivative is $\\frac{d^2 y}{dx^2}$ (order 2), and its power is 3 (degree 3)."
    }
  ],
  "math-algebra": [
    {
      "id": "math-algebra-q01",
      "difficulty": "easy",
      "concept": "Algebra – Quadratic Equations",
      "year": "Standard Exam Question",
      "text": "If the roots of $x^2 - bx + c = 0$ are two consecutive integers, then $b^2 - 4c$ equals:",
      "options": [
        "1",
        "0",
        "4",
        "2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet roots be $\\alpha$ and $\\alpha + 1$. Difference $|alpha - (alpha+1)| = 1 = \\frac{\\sqrt{D}}{|a|} = \\sqrt{b^2 - 4c} \\implies b^2 - 4c = \\mathbf{1}$."
    },
    {
      "id": "math-algebra-q02",
      "difficulty": "medium",
      "concept": "Algebra – Binomial Theorem",
      "year": "Standard Exam Question",
      "text": "What is the number of terms in the expansion of $(x + y + z)^{10}$?",
      "options": [
        "66",
        "55",
        "78",
        "11"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nNumber of non-negative integer solutions to $a + b + c = n$ is $\\binom{n + k - 1}{k - 1} = \\binom{10 + 3 - 1}{3 - 1} = \\binom{12}{2} = \\frac{12 \\times 11}{2} = \\mathbf{66}$."
    },
    {
      "id": "math-algebra-q03",
      "difficulty": "hard",
      "concept": "Algebra – Sequences & Series",
      "year": "Standard Exam Question",
      "text": "The sum of the infinite geometric progression $1 + \\frac{1}{3} + \\frac{1}{9} + \\dots$ is:",
      "options": [
        "3/2",
        "3",
        "2",
        "4/3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$S_\\infty = \\frac{a}{1 - r} = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = \\mathbf{\\frac{3}{2}}$$"
    },
    {
      "id": "math-algebra-q04",
      "difficulty": "easy",
      "concept": "Algebra – Complex Numbers",
      "year": "Standard Exam Question",
      "text": "If $z = 1 + i$, then the principal argument of $z$ is:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$3\\pi / 4$",
        "$\\pi / 3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\theta = \\tan^{-1}(y/x) = \\tan^{-1}(1/1) = \\mathbf{\\pi / 4}$ in the first quadrant."
    },
    {
      "id": "math-algebra-q05",
      "difficulty": "medium",
      "concept": "Algebra – Permutations",
      "year": "Standard Exam Question",
      "text": "How many 3-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition?",
      "options": [
        "60",
        "125",
        "120",
        "20"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$P(5, 3) = 5 \\times 4 \\times 3 = \\mathbf{60}$$"
    },
    {
      "id": "math-algebra-q06",
      "difficulty": "hard",
      "concept": "Algebra – Quadratic Equations",
      "year": "Standard Exam Question",
      "text": "If the roots of $x^2 - bx + c = 0$ are two consecutive integers, then $b^2 - 4c$ equals:",
      "options": [
        "1",
        "0",
        "4",
        "2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet roots be $\\alpha$ and $\\alpha + 1$. Difference $|alpha - (alpha+1)| = 1 = \\frac{\\sqrt{D}}{|a|} = \\sqrt{b^2 - 4c} \\implies b^2 - 4c = \\mathbf{1}$."
    },
    {
      "id": "math-algebra-q07",
      "difficulty": "easy",
      "concept": "Algebra – Binomial Theorem",
      "year": "Standard Exam Question",
      "text": "What is the number of terms in the expansion of $(x + y + z)^{10}$?",
      "options": [
        "66",
        "55",
        "78",
        "11"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nNumber of non-negative integer solutions to $a + b + c = n$ is $\\binom{n + k - 1}{k - 1} = \\binom{10 + 3 - 1}{3 - 1} = \\binom{12}{2} = \\frac{12 \\times 11}{2} = \\mathbf{66}$."
    },
    {
      "id": "math-algebra-q08",
      "difficulty": "medium",
      "concept": "Algebra – Sequences & Series",
      "year": "Standard Exam Question",
      "text": "The sum of the infinite geometric progression $1 + \\frac{1}{3} + \\frac{1}{9} + \\dots$ is:",
      "options": [
        "3/2",
        "3",
        "2",
        "4/3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$S_\\infty = \\frac{a}{1 - r} = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = \\mathbf{\\frac{3}{2}}$$"
    },
    {
      "id": "math-algebra-q09",
      "difficulty": "hard",
      "concept": "Algebra – Complex Numbers",
      "year": "Standard Exam Question",
      "text": "If $z = 1 + i$, then the principal argument of $z$ is:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$3\\pi / 4$",
        "$\\pi / 3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\theta = \\tan^{-1}(y/x) = \\tan^{-1}(1/1) = \\mathbf{\\pi / 4}$ in the first quadrant."
    },
    {
      "id": "math-algebra-q10",
      "difficulty": "easy",
      "concept": "Algebra – Permutations",
      "year": "Standard Exam Question",
      "text": "How many 3-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition?",
      "options": [
        "60",
        "125",
        "120",
        "20"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$P(5, 3) = 5 \\times 4 \\times 3 = \\mathbf{60}$$"
    },
    {
      "id": "math-algebra-q11",
      "difficulty": "medium",
      "concept": "Algebra – Quadratic Equations",
      "year": "Standard Exam Question",
      "text": "If the roots of $x^2 - bx + c = 0$ are two consecutive integers, then $b^2 - 4c$ equals:",
      "options": [
        "1",
        "0",
        "4",
        "2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet roots be $\\alpha$ and $\\alpha + 1$. Difference $|alpha - (alpha+1)| = 1 = \\frac{\\sqrt{D}}{|a|} = \\sqrt{b^2 - 4c} \\implies b^2 - 4c = \\mathbf{1}$."
    },
    {
      "id": "math-algebra-q12",
      "difficulty": "hard",
      "concept": "Algebra – Binomial Theorem",
      "year": "Standard Exam Question",
      "text": "What is the number of terms in the expansion of $(x + y + z)^{10}$?",
      "options": [
        "66",
        "55",
        "78",
        "11"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nNumber of non-negative integer solutions to $a + b + c = n$ is $\\binom{n + k - 1}{k - 1} = \\binom{10 + 3 - 1}{3 - 1} = \\binom{12}{2} = \\frac{12 \\times 11}{2} = \\mathbf{66}$."
    },
    {
      "id": "math-algebra-q13",
      "difficulty": "easy",
      "concept": "Algebra – Sequences & Series",
      "year": "Standard Exam Question",
      "text": "The sum of the infinite geometric progression $1 + \\frac{1}{3} + \\frac{1}{9} + \\dots$ is:",
      "options": [
        "3/2",
        "3",
        "2",
        "4/3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$S_\\infty = \\frac{a}{1 - r} = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = \\mathbf{\\frac{3}{2}}$$"
    },
    {
      "id": "math-algebra-q14",
      "difficulty": "medium",
      "concept": "Algebra – Complex Numbers",
      "year": "Standard Exam Question",
      "text": "If $z = 1 + i$, then the principal argument of $z$ is:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$3\\pi / 4$",
        "$\\pi / 3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\theta = \\tan^{-1}(y/x) = \\tan^{-1}(1/1) = \\mathbf{\\pi / 4}$ in the first quadrant."
    },
    {
      "id": "math-algebra-q15",
      "difficulty": "hard",
      "concept": "Algebra – Permutations",
      "year": "Standard Exam Question",
      "text": "How many 3-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition?",
      "options": [
        "60",
        "125",
        "120",
        "20"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$P(5, 3) = 5 \\times 4 \\times 3 = \\mathbf{60}$$"
    },
    {
      "id": "math-algebra-q16",
      "difficulty": "easy",
      "concept": "Algebra – Quadratic Equations",
      "year": "Standard Exam Question",
      "text": "If the roots of $x^2 - bx + c = 0$ are two consecutive integers, then $b^2 - 4c$ equals:",
      "options": [
        "1",
        "0",
        "4",
        "2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet roots be $\\alpha$ and $\\alpha + 1$. Difference $|alpha - (alpha+1)| = 1 = \\frac{\\sqrt{D}}{|a|} = \\sqrt{b^2 - 4c} \\implies b^2 - 4c = \\mathbf{1}$."
    },
    {
      "id": "math-algebra-q17",
      "difficulty": "medium",
      "concept": "Algebra – Binomial Theorem",
      "year": "Standard Exam Question",
      "text": "What is the number of terms in the expansion of $(x + y + z)^{10}$?",
      "options": [
        "66",
        "55",
        "78",
        "11"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nNumber of non-negative integer solutions to $a + b + c = n$ is $\\binom{n + k - 1}{k - 1} = \\binom{10 + 3 - 1}{3 - 1} = \\binom{12}{2} = \\frac{12 \\times 11}{2} = \\mathbf{66}$."
    },
    {
      "id": "math-algebra-q18",
      "difficulty": "hard",
      "concept": "Algebra – Sequences & Series",
      "year": "Standard Exam Question",
      "text": "The sum of the infinite geometric progression $1 + \\frac{1}{3} + \\frac{1}{9} + \\dots$ is:",
      "options": [
        "3/2",
        "3",
        "2",
        "4/3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$S_\\infty = \\frac{a}{1 - r} = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = \\mathbf{\\frac{3}{2}}$$"
    },
    {
      "id": "math-algebra-q19",
      "difficulty": "easy",
      "concept": "Algebra – Complex Numbers",
      "year": "Standard Exam Question",
      "text": "If $z = 1 + i$, then the principal argument of $z$ is:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$3\\pi / 4$",
        "$\\pi / 3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\theta = \\tan^{-1}(y/x) = \\tan^{-1}(1/1) = \\mathbf{\\pi / 4}$ in the first quadrant."
    },
    {
      "id": "math-algebra-q20",
      "difficulty": "medium",
      "concept": "Algebra – Permutations",
      "year": "Standard Exam Question",
      "text": "How many 3-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition?",
      "options": [
        "60",
        "125",
        "120",
        "20"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$P(5, 3) = 5 \\times 4 \\times 3 = \\mathbf{60}$$"
    },
    {
      "id": "math-algebra-q21",
      "difficulty": "hard",
      "concept": "Algebra – Quadratic Equations",
      "year": "Standard Exam Question",
      "text": "If the roots of $x^2 - bx + c = 0$ are two consecutive integers, then $b^2 - 4c$ equals:",
      "options": [
        "1",
        "0",
        "4",
        "2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet roots be $\\alpha$ and $\\alpha + 1$. Difference $|alpha - (alpha+1)| = 1 = \\frac{\\sqrt{D}}{|a|} = \\sqrt{b^2 - 4c} \\implies b^2 - 4c = \\mathbf{1}$."
    },
    {
      "id": "math-algebra-q22",
      "difficulty": "easy",
      "concept": "Algebra – Binomial Theorem",
      "year": "Standard Exam Question",
      "text": "What is the number of terms in the expansion of $(x + y + z)^{10}$?",
      "options": [
        "66",
        "55",
        "78",
        "11"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nNumber of non-negative integer solutions to $a + b + c = n$ is $\\binom{n + k - 1}{k - 1} = \\binom{10 + 3 - 1}{3 - 1} = \\binom{12}{2} = \\frac{12 \\times 11}{2} = \\mathbf{66}$."
    },
    {
      "id": "math-algebra-q23",
      "difficulty": "medium",
      "concept": "Algebra – Sequences & Series",
      "year": "Standard Exam Question",
      "text": "The sum of the infinite geometric progression $1 + \\frac{1}{3} + \\frac{1}{9} + \\dots$ is:",
      "options": [
        "3/2",
        "3",
        "2",
        "4/3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$S_\\infty = \\frac{a}{1 - r} = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = \\mathbf{\\frac{3}{2}}$$"
    },
    {
      "id": "math-algebra-q24",
      "difficulty": "hard",
      "concept": "Algebra – Complex Numbers",
      "year": "Standard Exam Question",
      "text": "If $z = 1 + i$, then the principal argument of $z$ is:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$3\\pi / 4$",
        "$\\pi / 3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\theta = \\tan^{-1}(y/x) = \\tan^{-1}(1/1) = \\mathbf{\\pi / 4}$ in the first quadrant."
    },
    {
      "id": "math-algebra-q25",
      "difficulty": "easy",
      "concept": "Algebra – Permutations",
      "year": "Standard Exam Question",
      "text": "How many 3-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition?",
      "options": [
        "60",
        "125",
        "120",
        "20"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$P(5, 3) = 5 \\times 4 \\times 3 = \\mathbf{60}$$"
    }
  ],
  "bot-cell": [
    {
      "id": "bot-cell-q01",
      "difficulty": "easy",
      "concept": "Cell Biology – Cell Organelles",
      "year": "Standard Exam Question",
      "text": "Which cell organelle is known as the 'powerhouse of the cell' where ATP synthesis occurs?",
      "options": [
        "Mitochondria",
        "Chloroplast",
        "Golgi apparatus",
        "Ribosome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**Mitochondria** carry out cellular respiration and oxidative phosphorylation to produce ATP."
    },
    {
      "id": "bot-cell-q02",
      "difficulty": "medium",
      "concept": "Cell Biology – Cell Division",
      "year": "Standard Exam Question",
      "text": "In eukaryotic cells, ribosomal RNA (rRNA) synthesis primarily takes place in the:",
      "options": [
        "Nucleolus",
        "Cytoplasm",
        "Endoplasmic reticulum",
        "Lysosome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **nucleolus** inside the nucleus is the specialized site for rRNA transcription and ribosomal subunit assembly."
    },
    {
      "id": "bot-cell-q03",
      "difficulty": "hard",
      "concept": "Cell Biology – Membrane Structure",
      "year": "Standard Exam Question",
      "text": "During which phase of meiosis does crossing over (genetic recombination) occur?",
      "options": [
        "Pachytene of Prophase I",
        "Leptotene of Prophase I",
        "Metaphase I",
        "Anaphase II"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCrossing over between non-sister chromatids occurs during the **pachytene** stage of Prophase I."
    },
    {
      "id": "bot-cell-q04",
      "difficulty": "easy",
      "concept": "Cell Biology – Meiosis",
      "year": "Standard Exam Question",
      "text": "The fluid mosaic model of the cell membrane was proposed by:",
      "options": [
        "Singer and Nicolson",
        "Watson and Crick",
        "Schleiden and Schwann",
        "Robert Brown"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nS.J. Singer and G.L. Nicolson proposed the **Fluid Mosaic Model** in 1972."
    },
    {
      "id": "bot-cell-q05",
      "difficulty": "medium",
      "concept": "Cell Biology – Mitosis",
      "year": "Standard Exam Question",
      "text": "Chromosomes align at the equatorial plane during which stage of mitosis?",
      "options": [
        "Metaphase",
        "Prophase",
        "Anaphase",
        "Telophase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDuring **metaphase**, spindle fibers attach to kinetochores and align chromosomes at the metaphase plate."
    },
    {
      "id": "bot-cell-q06",
      "difficulty": "hard",
      "concept": "Cell Biology – Cell Organelles",
      "year": "Standard Exam Question",
      "text": "Which cell organelle is known as the 'powerhouse of the cell' where ATP synthesis occurs?",
      "options": [
        "Mitochondria",
        "Chloroplast",
        "Golgi apparatus",
        "Ribosome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**Mitochondria** carry out cellular respiration and oxidative phosphorylation to produce ATP."
    },
    {
      "id": "bot-cell-q07",
      "difficulty": "easy",
      "concept": "Cell Biology – Cell Division",
      "year": "Standard Exam Question",
      "text": "In eukaryotic cells, ribosomal RNA (rRNA) synthesis primarily takes place in the:",
      "options": [
        "Nucleolus",
        "Cytoplasm",
        "Endoplasmic reticulum",
        "Lysosome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **nucleolus** inside the nucleus is the specialized site for rRNA transcription and ribosomal subunit assembly."
    },
    {
      "id": "bot-cell-q08",
      "difficulty": "medium",
      "concept": "Cell Biology – Membrane Structure",
      "year": "Standard Exam Question",
      "text": "During which phase of meiosis does crossing over (genetic recombination) occur?",
      "options": [
        "Pachytene of Prophase I",
        "Leptotene of Prophase I",
        "Metaphase I",
        "Anaphase II"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCrossing over between non-sister chromatids occurs during the **pachytene** stage of Prophase I."
    },
    {
      "id": "bot-cell-q09",
      "difficulty": "hard",
      "concept": "Cell Biology – Meiosis",
      "year": "Standard Exam Question",
      "text": "The fluid mosaic model of the cell membrane was proposed by:",
      "options": [
        "Singer and Nicolson",
        "Watson and Crick",
        "Schleiden and Schwann",
        "Robert Brown"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nS.J. Singer and G.L. Nicolson proposed the **Fluid Mosaic Model** in 1972."
    },
    {
      "id": "bot-cell-q10",
      "difficulty": "easy",
      "concept": "Cell Biology – Mitosis",
      "year": "Standard Exam Question",
      "text": "Chromosomes align at the equatorial plane during which stage of mitosis?",
      "options": [
        "Metaphase",
        "Prophase",
        "Anaphase",
        "Telophase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDuring **metaphase**, spindle fibers attach to kinetochores and align chromosomes at the metaphase plate."
    },
    {
      "id": "bot-cell-q11",
      "difficulty": "medium",
      "concept": "Cell Biology – Cell Organelles",
      "year": "Standard Exam Question",
      "text": "Which cell organelle is known as the 'powerhouse of the cell' where ATP synthesis occurs?",
      "options": [
        "Mitochondria",
        "Chloroplast",
        "Golgi apparatus",
        "Ribosome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**Mitochondria** carry out cellular respiration and oxidative phosphorylation to produce ATP."
    },
    {
      "id": "bot-cell-q12",
      "difficulty": "hard",
      "concept": "Cell Biology – Cell Division",
      "year": "Standard Exam Question",
      "text": "In eukaryotic cells, ribosomal RNA (rRNA) synthesis primarily takes place in the:",
      "options": [
        "Nucleolus",
        "Cytoplasm",
        "Endoplasmic reticulum",
        "Lysosome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **nucleolus** inside the nucleus is the specialized site for rRNA transcription and ribosomal subunit assembly."
    },
    {
      "id": "bot-cell-q13",
      "difficulty": "easy",
      "concept": "Cell Biology – Membrane Structure",
      "year": "Standard Exam Question",
      "text": "During which phase of meiosis does crossing over (genetic recombination) occur?",
      "options": [
        "Pachytene of Prophase I",
        "Leptotene of Prophase I",
        "Metaphase I",
        "Anaphase II"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCrossing over between non-sister chromatids occurs during the **pachytene** stage of Prophase I."
    },
    {
      "id": "bot-cell-q14",
      "difficulty": "medium",
      "concept": "Cell Biology – Meiosis",
      "year": "Standard Exam Question",
      "text": "The fluid mosaic model of the cell membrane was proposed by:",
      "options": [
        "Singer and Nicolson",
        "Watson and Crick",
        "Schleiden and Schwann",
        "Robert Brown"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nS.J. Singer and G.L. Nicolson proposed the **Fluid Mosaic Model** in 1972."
    },
    {
      "id": "bot-cell-q15",
      "difficulty": "hard",
      "concept": "Cell Biology – Mitosis",
      "year": "Standard Exam Question",
      "text": "Chromosomes align at the equatorial plane during which stage of mitosis?",
      "options": [
        "Metaphase",
        "Prophase",
        "Anaphase",
        "Telophase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDuring **metaphase**, spindle fibers attach to kinetochores and align chromosomes at the metaphase plate."
    },
    {
      "id": "bot-cell-q16",
      "difficulty": "easy",
      "concept": "Cell Biology – Cell Organelles",
      "year": "Standard Exam Question",
      "text": "Which cell organelle is known as the 'powerhouse of the cell' where ATP synthesis occurs?",
      "options": [
        "Mitochondria",
        "Chloroplast",
        "Golgi apparatus",
        "Ribosome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**Mitochondria** carry out cellular respiration and oxidative phosphorylation to produce ATP."
    },
    {
      "id": "bot-cell-q17",
      "difficulty": "medium",
      "concept": "Cell Biology – Cell Division",
      "year": "Standard Exam Question",
      "text": "In eukaryotic cells, ribosomal RNA (rRNA) synthesis primarily takes place in the:",
      "options": [
        "Nucleolus",
        "Cytoplasm",
        "Endoplasmic reticulum",
        "Lysosome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **nucleolus** inside the nucleus is the specialized site for rRNA transcription and ribosomal subunit assembly."
    },
    {
      "id": "bot-cell-q18",
      "difficulty": "hard",
      "concept": "Cell Biology – Membrane Structure",
      "year": "Standard Exam Question",
      "text": "During which phase of meiosis does crossing over (genetic recombination) occur?",
      "options": [
        "Pachytene of Prophase I",
        "Leptotene of Prophase I",
        "Metaphase I",
        "Anaphase II"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCrossing over between non-sister chromatids occurs during the **pachytene** stage of Prophase I."
    },
    {
      "id": "bot-cell-q19",
      "difficulty": "easy",
      "concept": "Cell Biology – Meiosis",
      "year": "Standard Exam Question",
      "text": "The fluid mosaic model of the cell membrane was proposed by:",
      "options": [
        "Singer and Nicolson",
        "Watson and Crick",
        "Schleiden and Schwann",
        "Robert Brown"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nS.J. Singer and G.L. Nicolson proposed the **Fluid Mosaic Model** in 1972."
    },
    {
      "id": "bot-cell-q20",
      "difficulty": "medium",
      "concept": "Cell Biology – Mitosis",
      "year": "Standard Exam Question",
      "text": "Chromosomes align at the equatorial plane during which stage of mitosis?",
      "options": [
        "Metaphase",
        "Prophase",
        "Anaphase",
        "Telophase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDuring **metaphase**, spindle fibers attach to kinetochores and align chromosomes at the metaphase plate."
    },
    {
      "id": "bot-cell-q21",
      "difficulty": "hard",
      "concept": "Cell Biology – Cell Organelles",
      "year": "Standard Exam Question",
      "text": "Which cell organelle is known as the 'powerhouse of the cell' where ATP synthesis occurs?",
      "options": [
        "Mitochondria",
        "Chloroplast",
        "Golgi apparatus",
        "Ribosome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**Mitochondria** carry out cellular respiration and oxidative phosphorylation to produce ATP."
    },
    {
      "id": "bot-cell-q22",
      "difficulty": "easy",
      "concept": "Cell Biology – Cell Division",
      "year": "Standard Exam Question",
      "text": "In eukaryotic cells, ribosomal RNA (rRNA) synthesis primarily takes place in the:",
      "options": [
        "Nucleolus",
        "Cytoplasm",
        "Endoplasmic reticulum",
        "Lysosome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **nucleolus** inside the nucleus is the specialized site for rRNA transcription and ribosomal subunit assembly."
    },
    {
      "id": "bot-cell-q23",
      "difficulty": "medium",
      "concept": "Cell Biology – Membrane Structure",
      "year": "Standard Exam Question",
      "text": "During which phase of meiosis does crossing over (genetic recombination) occur?",
      "options": [
        "Pachytene of Prophase I",
        "Leptotene of Prophase I",
        "Metaphase I",
        "Anaphase II"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCrossing over between non-sister chromatids occurs during the **pachytene** stage of Prophase I."
    },
    {
      "id": "bot-cell-q24",
      "difficulty": "hard",
      "concept": "Cell Biology – Meiosis",
      "year": "Standard Exam Question",
      "text": "The fluid mosaic model of the cell membrane was proposed by:",
      "options": [
        "Singer and Nicolson",
        "Watson and Crick",
        "Schleiden and Schwann",
        "Robert Brown"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nS.J. Singer and G.L. Nicolson proposed the **Fluid Mosaic Model** in 1972."
    },
    {
      "id": "bot-cell-q25",
      "difficulty": "easy",
      "concept": "Cell Biology – Mitosis",
      "year": "Standard Exam Question",
      "text": "Chromosomes align at the equatorial plane during which stage of mitosis?",
      "options": [
        "Metaphase",
        "Prophase",
        "Anaphase",
        "Telophase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDuring **metaphase**, spindle fibers attach to kinetochores and align chromosomes at the metaphase plate."
    }
  ],
  "bot-genetics": [
    {
      "id": "bot-genetics-q01",
      "difficulty": "easy",
      "concept": "Genetics – Mendelian Inheritance",
      "year": "Standard Exam Question",
      "text": "The phenotypic ratio of a standard Mendelian dihybrid cross ($AaBb \\times AaBb$) in the F2 generation is:",
      "options": [
        "9:3:3:1",
        "1:2:1",
        "3:1",
        "9:7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMendel's dihybrid cross yields the classic phenotypic ratio **9 : 3 : 3 : 1**."
    },
    {
      "id": "bot-genetics-q02",
      "difficulty": "medium",
      "concept": "Genetics – Molecular Genetics",
      "year": "Standard Exam Question",
      "text": "In DNA, adenine pairs with thymine via how many hydrogen bonds?",
      "options": [
        "2 hydrogen bonds",
        "3 hydrogen bonds",
        "1 hydrogen bond",
        "Covalent bond"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA pairs with T via **2 hydrogen bonds** ($A=T$), while G pairs with C via 3 hydrogen bonds ($G\\equiv C$)."
    },
    {
      "id": "bot-genetics-q03",
      "difficulty": "hard",
      "concept": "Genetics – DNA Replication",
      "year": "Standard Exam Question",
      "text": "The central dogma of molecular biology describes the flow of genetic information as:",
      "options": [
        "DNA -> RNA -> Protein",
        "RNA -> DNA -> Protein",
        "Protein -> RNA -> DNA",
        "DNA -> Protein -> RNA"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFrancis Crick formulated the central dogma: Replication ($DNA \\to DNA$), Transcription ($DNA \\to RNA$), and Translation ($RNA \\to Protein$)."
    },
    {
      "id": "bot-genetics-q04",
      "difficulty": "easy",
      "concept": "Genetics – Transcription",
      "year": "Standard Exam Question",
      "text": "A test cross is carried out to determine:",
      "options": [
        "Genotype of an individual showing dominant phenotype",
        "Phenotype of F2 generation",
        "Maternal inheritance",
        "Linkage group count"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCrossing an individual with homozygous recessive ($Tt \\times tt$ or $TT \\times tt$) reveals whether it is homozygous or heterozygous dominant."
    },
    {
      "id": "bot-genetics-q05",
      "difficulty": "medium",
      "concept": "Genetics – Gene Expression",
      "year": "Standard Exam Question",
      "text": "Which enzyme is responsible for synthesizing mRNA from a DNA template during transcription?",
      "options": [
        "RNA Polymerase",
        "DNA Polymerase III",
        "DNA Ligase",
        "Reverse Transcriptase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**RNA Polymerase** synthesizes complementary RNA molecules from DNA templates."
    },
    {
      "id": "bot-genetics-q06",
      "difficulty": "hard",
      "concept": "Genetics – Mendelian Inheritance",
      "year": "Standard Exam Question",
      "text": "The phenotypic ratio of a standard Mendelian dihybrid cross ($AaBb \\times AaBb$) in the F2 generation is:",
      "options": [
        "9:3:3:1",
        "1:2:1",
        "3:1",
        "9:7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMendel's dihybrid cross yields the classic phenotypic ratio **9 : 3 : 3 : 1**."
    },
    {
      "id": "bot-genetics-q07",
      "difficulty": "easy",
      "concept": "Genetics – Molecular Genetics",
      "year": "Standard Exam Question",
      "text": "In DNA, adenine pairs with thymine via how many hydrogen bonds?",
      "options": [
        "2 hydrogen bonds",
        "3 hydrogen bonds",
        "1 hydrogen bond",
        "Covalent bond"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA pairs with T via **2 hydrogen bonds** ($A=T$), while G pairs with C via 3 hydrogen bonds ($G\\equiv C$)."
    },
    {
      "id": "bot-genetics-q08",
      "difficulty": "medium",
      "concept": "Genetics – DNA Replication",
      "year": "Standard Exam Question",
      "text": "The central dogma of molecular biology describes the flow of genetic information as:",
      "options": [
        "DNA -> RNA -> Protein",
        "RNA -> DNA -> Protein",
        "Protein -> RNA -> DNA",
        "DNA -> Protein -> RNA"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFrancis Crick formulated the central dogma: Replication ($DNA \\to DNA$), Transcription ($DNA \\to RNA$), and Translation ($RNA \\to Protein$)."
    },
    {
      "id": "bot-genetics-q09",
      "difficulty": "hard",
      "concept": "Genetics – Transcription",
      "year": "Standard Exam Question",
      "text": "A test cross is carried out to determine:",
      "options": [
        "Genotype of an individual showing dominant phenotype",
        "Phenotype of F2 generation",
        "Maternal inheritance",
        "Linkage group count"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCrossing an individual with homozygous recessive ($Tt \\times tt$ or $TT \\times tt$) reveals whether it is homozygous or heterozygous dominant."
    },
    {
      "id": "bot-genetics-q10",
      "difficulty": "easy",
      "concept": "Genetics – Gene Expression",
      "year": "Standard Exam Question",
      "text": "Which enzyme is responsible for synthesizing mRNA from a DNA template during transcription?",
      "options": [
        "RNA Polymerase",
        "DNA Polymerase III",
        "DNA Ligase",
        "Reverse Transcriptase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**RNA Polymerase** synthesizes complementary RNA molecules from DNA templates."
    },
    {
      "id": "bot-genetics-q11",
      "difficulty": "medium",
      "concept": "Genetics – Mendelian Inheritance",
      "year": "Standard Exam Question",
      "text": "The phenotypic ratio of a standard Mendelian dihybrid cross ($AaBb \\times AaBb$) in the F2 generation is:",
      "options": [
        "9:3:3:1",
        "1:2:1",
        "3:1",
        "9:7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMendel's dihybrid cross yields the classic phenotypic ratio **9 : 3 : 3 : 1**."
    },
    {
      "id": "bot-genetics-q12",
      "difficulty": "hard",
      "concept": "Genetics – Molecular Genetics",
      "year": "Standard Exam Question",
      "text": "In DNA, adenine pairs with thymine via how many hydrogen bonds?",
      "options": [
        "2 hydrogen bonds",
        "3 hydrogen bonds",
        "1 hydrogen bond",
        "Covalent bond"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA pairs with T via **2 hydrogen bonds** ($A=T$), while G pairs with C via 3 hydrogen bonds ($G\\equiv C$)."
    },
    {
      "id": "bot-genetics-q13",
      "difficulty": "easy",
      "concept": "Genetics – DNA Replication",
      "year": "Standard Exam Question",
      "text": "The central dogma of molecular biology describes the flow of genetic information as:",
      "options": [
        "DNA -> RNA -> Protein",
        "RNA -> DNA -> Protein",
        "Protein -> RNA -> DNA",
        "DNA -> Protein -> RNA"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFrancis Crick formulated the central dogma: Replication ($DNA \\to DNA$), Transcription ($DNA \\to RNA$), and Translation ($RNA \\to Protein$)."
    },
    {
      "id": "bot-genetics-q14",
      "difficulty": "medium",
      "concept": "Genetics – Transcription",
      "year": "Standard Exam Question",
      "text": "A test cross is carried out to determine:",
      "options": [
        "Genotype of an individual showing dominant phenotype",
        "Phenotype of F2 generation",
        "Maternal inheritance",
        "Linkage group count"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCrossing an individual with homozygous recessive ($Tt \\times tt$ or $TT \\times tt$) reveals whether it is homozygous or heterozygous dominant."
    },
    {
      "id": "bot-genetics-q15",
      "difficulty": "hard",
      "concept": "Genetics – Gene Expression",
      "year": "Standard Exam Question",
      "text": "Which enzyme is responsible for synthesizing mRNA from a DNA template during transcription?",
      "options": [
        "RNA Polymerase",
        "DNA Polymerase III",
        "DNA Ligase",
        "Reverse Transcriptase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**RNA Polymerase** synthesizes complementary RNA molecules from DNA templates."
    },
    {
      "id": "bot-genetics-q16",
      "difficulty": "easy",
      "concept": "Genetics – Mendelian Inheritance",
      "year": "Standard Exam Question",
      "text": "The phenotypic ratio of a standard Mendelian dihybrid cross ($AaBb \\times AaBb$) in the F2 generation is:",
      "options": [
        "9:3:3:1",
        "1:2:1",
        "3:1",
        "9:7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMendel's dihybrid cross yields the classic phenotypic ratio **9 : 3 : 3 : 1**."
    },
    {
      "id": "bot-genetics-q17",
      "difficulty": "medium",
      "concept": "Genetics – Molecular Genetics",
      "year": "Standard Exam Question",
      "text": "In DNA, adenine pairs with thymine via how many hydrogen bonds?",
      "options": [
        "2 hydrogen bonds",
        "3 hydrogen bonds",
        "1 hydrogen bond",
        "Covalent bond"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA pairs with T via **2 hydrogen bonds** ($A=T$), while G pairs with C via 3 hydrogen bonds ($G\\equiv C$)."
    },
    {
      "id": "bot-genetics-q18",
      "difficulty": "hard",
      "concept": "Genetics – DNA Replication",
      "year": "Standard Exam Question",
      "text": "The central dogma of molecular biology describes the flow of genetic information as:",
      "options": [
        "DNA -> RNA -> Protein",
        "RNA -> DNA -> Protein",
        "Protein -> RNA -> DNA",
        "DNA -> Protein -> RNA"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFrancis Crick formulated the central dogma: Replication ($DNA \\to DNA$), Transcription ($DNA \\to RNA$), and Translation ($RNA \\to Protein$)."
    },
    {
      "id": "bot-genetics-q19",
      "difficulty": "easy",
      "concept": "Genetics – Transcription",
      "year": "Standard Exam Question",
      "text": "A test cross is carried out to determine:",
      "options": [
        "Genotype of an individual showing dominant phenotype",
        "Phenotype of F2 generation",
        "Maternal inheritance",
        "Linkage group count"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCrossing an individual with homozygous recessive ($Tt \\times tt$ or $TT \\times tt$) reveals whether it is homozygous or heterozygous dominant."
    },
    {
      "id": "bot-genetics-q20",
      "difficulty": "medium",
      "concept": "Genetics – Gene Expression",
      "year": "Standard Exam Question",
      "text": "Which enzyme is responsible for synthesizing mRNA from a DNA template during transcription?",
      "options": [
        "RNA Polymerase",
        "DNA Polymerase III",
        "DNA Ligase",
        "Reverse Transcriptase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**RNA Polymerase** synthesizes complementary RNA molecules from DNA templates."
    },
    {
      "id": "bot-genetics-q21",
      "difficulty": "hard",
      "concept": "Genetics – Mendelian Inheritance",
      "year": "Standard Exam Question",
      "text": "The phenotypic ratio of a standard Mendelian dihybrid cross ($AaBb \\times AaBb$) in the F2 generation is:",
      "options": [
        "9:3:3:1",
        "1:2:1",
        "3:1",
        "9:7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMendel's dihybrid cross yields the classic phenotypic ratio **9 : 3 : 3 : 1**."
    },
    {
      "id": "bot-genetics-q22",
      "difficulty": "easy",
      "concept": "Genetics – Molecular Genetics",
      "year": "Standard Exam Question",
      "text": "In DNA, adenine pairs with thymine via how many hydrogen bonds?",
      "options": [
        "2 hydrogen bonds",
        "3 hydrogen bonds",
        "1 hydrogen bond",
        "Covalent bond"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA pairs with T via **2 hydrogen bonds** ($A=T$), while G pairs with C via 3 hydrogen bonds ($G\\equiv C$)."
    },
    {
      "id": "bot-genetics-q23",
      "difficulty": "medium",
      "concept": "Genetics – DNA Replication",
      "year": "Standard Exam Question",
      "text": "The central dogma of molecular biology describes the flow of genetic information as:",
      "options": [
        "DNA -> RNA -> Protein",
        "RNA -> DNA -> Protein",
        "Protein -> RNA -> DNA",
        "DNA -> Protein -> RNA"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFrancis Crick formulated the central dogma: Replication ($DNA \\to DNA$), Transcription ($DNA \\to RNA$), and Translation ($RNA \\to Protein$)."
    },
    {
      "id": "bot-genetics-q24",
      "difficulty": "hard",
      "concept": "Genetics – Transcription",
      "year": "Standard Exam Question",
      "text": "A test cross is carried out to determine:",
      "options": [
        "Genotype of an individual showing dominant phenotype",
        "Phenotype of F2 generation",
        "Maternal inheritance",
        "Linkage group count"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCrossing an individual with homozygous recessive ($Tt \\times tt$ or $TT \\times tt$) reveals whether it is homozygous or heterozygous dominant."
    },
    {
      "id": "bot-genetics-q25",
      "difficulty": "easy",
      "concept": "Genetics – Gene Expression",
      "year": "Standard Exam Question",
      "text": "Which enzyme is responsible for synthesizing mRNA from a DNA template during transcription?",
      "options": [
        "RNA Polymerase",
        "DNA Polymerase III",
        "DNA Ligase",
        "Reverse Transcriptase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**RNA Polymerase** synthesizes complementary RNA molecules from DNA templates."
    }
  ],
  "zoo-physio": [
    {
      "id": "zoo-physio-q01",
      "difficulty": "easy",
      "concept": "Human Physiology – Digestion",
      "year": "Standard Exam Question",
      "text": "In human digestion, pepsin is secreted by the stomach in its inactive form called:",
      "options": [
        "Pepsinogen",
        "Trypsinogen",
        "Procarboxypeptidase",
        "Chymotrypsin"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nChief (peptic) cells secrete the inactive zymogen **pepsinogen**, which is activated by hydrochloric acid ($HCl$) into active pepsin."
    },
    {
      "id": "zoo-physio-q02",
      "difficulty": "medium",
      "concept": "Human Physiology – Circulation",
      "year": "Standard Exam Question",
      "text": "The primary pacemaker of the human heart responsible for initiating heartbeat impulses is the:",
      "options": [
        "Sinoatrial (SA) node",
        "Atrioventricular (AV) node",
        "Bundle of His",
        "Purkinje fibers"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **SA node** (located in the right atrium) generates action potentials spontaneously at the highest frequency (~72/min)."
    },
    {
      "id": "zoo-physio-q03",
      "difficulty": "hard",
      "concept": "Human Physiology – Excretion",
      "year": "Standard Exam Question",
      "text": "What is the structural and functional filtration unit of the human kidney?",
      "options": [
        "Nephron",
        "Neuron",
        "Alveolus",
        "Glomerulus only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEach kidney contains approximately 1 million **nephrons**, the basic structural and functional units of excretion."
    },
    {
      "id": "zoo-physio-q04",
      "difficulty": "easy",
      "concept": "Human Physiology – Muscle Contraction",
      "year": "Standard Exam Question",
      "text": "According to the sliding filament theory of muscle contraction, which filament slides inward during contraction?",
      "options": [
        "Actin filaments slide over myosin filaments",
        "Myosin filaments slide over actin",
        "Collagen fibers shorten",
        "Troponin filaments expand"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThin **actin** filaments slide past thick **myosin** filaments, pulling the Z-lines closer together."
    },
    {
      "id": "zoo-physio-q05",
      "difficulty": "medium",
      "concept": "Human Physiology – Endocrine System",
      "year": "Standard Exam Question",
      "text": "Which hormone is secreted by the beta cells of the islets of Langerhans in the pancreas?",
      "options": [
        "Insulin",
        "Glucagon",
        "Somatostatin",
        "Thyroxine"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBeta cells secrete **insulin** (lowering blood glucose), while alpha cells secrete glucagon."
    },
    {
      "id": "zoo-physio-q06",
      "difficulty": "hard",
      "concept": "Human Physiology – Digestion",
      "year": "Standard Exam Question",
      "text": "In human digestion, pepsin is secreted by the stomach in its inactive form called:",
      "options": [
        "Pepsinogen",
        "Trypsinogen",
        "Procarboxypeptidase",
        "Chymotrypsin"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nChief (peptic) cells secrete the inactive zymogen **pepsinogen**, which is activated by hydrochloric acid ($HCl$) into active pepsin."
    },
    {
      "id": "zoo-physio-q07",
      "difficulty": "easy",
      "concept": "Human Physiology – Circulation",
      "year": "Standard Exam Question",
      "text": "The primary pacemaker of the human heart responsible for initiating heartbeat impulses is the:",
      "options": [
        "Sinoatrial (SA) node",
        "Atrioventricular (AV) node",
        "Bundle of His",
        "Purkinje fibers"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **SA node** (located in the right atrium) generates action potentials spontaneously at the highest frequency (~72/min)."
    },
    {
      "id": "zoo-physio-q08",
      "difficulty": "medium",
      "concept": "Human Physiology – Excretion",
      "year": "Standard Exam Question",
      "text": "What is the structural and functional filtration unit of the human kidney?",
      "options": [
        "Nephron",
        "Neuron",
        "Alveolus",
        "Glomerulus only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEach kidney contains approximately 1 million **nephrons**, the basic structural and functional units of excretion."
    },
    {
      "id": "zoo-physio-q09",
      "difficulty": "hard",
      "concept": "Human Physiology – Muscle Contraction",
      "year": "Standard Exam Question",
      "text": "According to the sliding filament theory of muscle contraction, which filament slides inward during contraction?",
      "options": [
        "Actin filaments slide over myosin filaments",
        "Myosin filaments slide over actin",
        "Collagen fibers shorten",
        "Troponin filaments expand"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThin **actin** filaments slide past thick **myosin** filaments, pulling the Z-lines closer together."
    },
    {
      "id": "zoo-physio-q10",
      "difficulty": "easy",
      "concept": "Human Physiology – Endocrine System",
      "year": "Standard Exam Question",
      "text": "Which hormone is secreted by the beta cells of the islets of Langerhans in the pancreas?",
      "options": [
        "Insulin",
        "Glucagon",
        "Somatostatin",
        "Thyroxine"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBeta cells secrete **insulin** (lowering blood glucose), while alpha cells secrete glucagon."
    },
    {
      "id": "zoo-physio-q11",
      "difficulty": "medium",
      "concept": "Human Physiology – Digestion",
      "year": "Standard Exam Question",
      "text": "In human digestion, pepsin is secreted by the stomach in its inactive form called:",
      "options": [
        "Pepsinogen",
        "Trypsinogen",
        "Procarboxypeptidase",
        "Chymotrypsin"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nChief (peptic) cells secrete the inactive zymogen **pepsinogen**, which is activated by hydrochloric acid ($HCl$) into active pepsin."
    },
    {
      "id": "zoo-physio-q12",
      "difficulty": "hard",
      "concept": "Human Physiology – Circulation",
      "year": "Standard Exam Question",
      "text": "The primary pacemaker of the human heart responsible for initiating heartbeat impulses is the:",
      "options": [
        "Sinoatrial (SA) node",
        "Atrioventricular (AV) node",
        "Bundle of His",
        "Purkinje fibers"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **SA node** (located in the right atrium) generates action potentials spontaneously at the highest frequency (~72/min)."
    },
    {
      "id": "zoo-physio-q13",
      "difficulty": "easy",
      "concept": "Human Physiology – Excretion",
      "year": "Standard Exam Question",
      "text": "What is the structural and functional filtration unit of the human kidney?",
      "options": [
        "Nephron",
        "Neuron",
        "Alveolus",
        "Glomerulus only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEach kidney contains approximately 1 million **nephrons**, the basic structural and functional units of excretion."
    },
    {
      "id": "zoo-physio-q14",
      "difficulty": "medium",
      "concept": "Human Physiology – Muscle Contraction",
      "year": "Standard Exam Question",
      "text": "According to the sliding filament theory of muscle contraction, which filament slides inward during contraction?",
      "options": [
        "Actin filaments slide over myosin filaments",
        "Myosin filaments slide over actin",
        "Collagen fibers shorten",
        "Troponin filaments expand"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThin **actin** filaments slide past thick **myosin** filaments, pulling the Z-lines closer together."
    },
    {
      "id": "zoo-physio-q15",
      "difficulty": "hard",
      "concept": "Human Physiology – Endocrine System",
      "year": "Standard Exam Question",
      "text": "Which hormone is secreted by the beta cells of the islets of Langerhans in the pancreas?",
      "options": [
        "Insulin",
        "Glucagon",
        "Somatostatin",
        "Thyroxine"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBeta cells secrete **insulin** (lowering blood glucose), while alpha cells secrete glucagon."
    },
    {
      "id": "zoo-physio-q16",
      "difficulty": "easy",
      "concept": "Human Physiology – Digestion",
      "year": "Standard Exam Question",
      "text": "In human digestion, pepsin is secreted by the stomach in its inactive form called:",
      "options": [
        "Pepsinogen",
        "Trypsinogen",
        "Procarboxypeptidase",
        "Chymotrypsin"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nChief (peptic) cells secrete the inactive zymogen **pepsinogen**, which is activated by hydrochloric acid ($HCl$) into active pepsin."
    },
    {
      "id": "zoo-physio-q17",
      "difficulty": "medium",
      "concept": "Human Physiology – Circulation",
      "year": "Standard Exam Question",
      "text": "The primary pacemaker of the human heart responsible for initiating heartbeat impulses is the:",
      "options": [
        "Sinoatrial (SA) node",
        "Atrioventricular (AV) node",
        "Bundle of His",
        "Purkinje fibers"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **SA node** (located in the right atrium) generates action potentials spontaneously at the highest frequency (~72/min)."
    },
    {
      "id": "zoo-physio-q18",
      "difficulty": "hard",
      "concept": "Human Physiology – Excretion",
      "year": "Standard Exam Question",
      "text": "What is the structural and functional filtration unit of the human kidney?",
      "options": [
        "Nephron",
        "Neuron",
        "Alveolus",
        "Glomerulus only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEach kidney contains approximately 1 million **nephrons**, the basic structural and functional units of excretion."
    },
    {
      "id": "zoo-physio-q19",
      "difficulty": "easy",
      "concept": "Human Physiology – Muscle Contraction",
      "year": "Standard Exam Question",
      "text": "According to the sliding filament theory of muscle contraction, which filament slides inward during contraction?",
      "options": [
        "Actin filaments slide over myosin filaments",
        "Myosin filaments slide over actin",
        "Collagen fibers shorten",
        "Troponin filaments expand"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThin **actin** filaments slide past thick **myosin** filaments, pulling the Z-lines closer together."
    },
    {
      "id": "zoo-physio-q20",
      "difficulty": "medium",
      "concept": "Human Physiology – Endocrine System",
      "year": "Standard Exam Question",
      "text": "Which hormone is secreted by the beta cells of the islets of Langerhans in the pancreas?",
      "options": [
        "Insulin",
        "Glucagon",
        "Somatostatin",
        "Thyroxine"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBeta cells secrete **insulin** (lowering blood glucose), while alpha cells secrete glucagon."
    },
    {
      "id": "zoo-physio-q21",
      "difficulty": "hard",
      "concept": "Human Physiology – Digestion",
      "year": "Standard Exam Question",
      "text": "In human digestion, pepsin is secreted by the stomach in its inactive form called:",
      "options": [
        "Pepsinogen",
        "Trypsinogen",
        "Procarboxypeptidase",
        "Chymotrypsin"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nChief (peptic) cells secrete the inactive zymogen **pepsinogen**, which is activated by hydrochloric acid ($HCl$) into active pepsin."
    },
    {
      "id": "zoo-physio-q22",
      "difficulty": "easy",
      "concept": "Human Physiology – Circulation",
      "year": "Standard Exam Question",
      "text": "The primary pacemaker of the human heart responsible for initiating heartbeat impulses is the:",
      "options": [
        "Sinoatrial (SA) node",
        "Atrioventricular (AV) node",
        "Bundle of His",
        "Purkinje fibers"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe **SA node** (located in the right atrium) generates action potentials spontaneously at the highest frequency (~72/min)."
    },
    {
      "id": "zoo-physio-q23",
      "difficulty": "medium",
      "concept": "Human Physiology – Excretion",
      "year": "Standard Exam Question",
      "text": "What is the structural and functional filtration unit of the human kidney?",
      "options": [
        "Nephron",
        "Neuron",
        "Alveolus",
        "Glomerulus only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEach kidney contains approximately 1 million **nephrons**, the basic structural and functional units of excretion."
    },
    {
      "id": "zoo-physio-q24",
      "difficulty": "hard",
      "concept": "Human Physiology – Muscle Contraction",
      "year": "Standard Exam Question",
      "text": "According to the sliding filament theory of muscle contraction, which filament slides inward during contraction?",
      "options": [
        "Actin filaments slide over myosin filaments",
        "Myosin filaments slide over actin",
        "Collagen fibers shorten",
        "Troponin filaments expand"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThin **actin** filaments slide past thick **myosin** filaments, pulling the Z-lines closer together."
    },
    {
      "id": "zoo-physio-q25",
      "difficulty": "easy",
      "concept": "Human Physiology – Endocrine System",
      "year": "Standard Exam Question",
      "text": "Which hormone is secreted by the beta cells of the islets of Langerhans in the pancreas?",
      "options": [
        "Insulin",
        "Glucagon",
        "Somatostatin",
        "Thyroxine"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBeta cells secrete **insulin** (lowering blood glucose), while alpha cells secrete glucagon."
    }
  ],
  "ssc-arith": [
    {
      "id": "ssc-arith-q01",
      "difficulty": "easy",
      "concept": "Arithmetic – Profit & Loss",
      "year": "Standard Exam Question",
      "text": "If the cost price of 15 articles is equal to the selling price of 12 articles, the profit percentage is:",
      "options": [
        "25%",
        "20%",
        "30%",
        "16.67%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet CP of 1 article $= 1 \\implies$ CP of 15 $= 15$.\\nSP of 12 $= 15 \\implies$ SP of 1 $= 15/12 = 1.25$.\\n$$\\text{Profit } \\% = \\frac{1.25 - 1}{1} \\times 100 = \\mathbf{25\\%}$$"
    },
    {
      "id": "ssc-arith-q02",
      "difficulty": "medium",
      "concept": "Arithmetic – Compound Interest",
      "year": "Standard Exam Question",
      "text": "The compound interest on \\$10,000 for 2 years at 10% per annum compounded annually is:",
      "options": [
        "\\$2,100",
        "\\$2,000",
        "\\$2,200",
        "\\$1,000"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$A = P\\left(1 + \\frac{r}{100}\\right)^t = 10000(1.10)^2 = 12100 \\implies CI = 12100 - 10000 = \\mathbf{\\$2,100}$$"
    },
    {
      "id": "ssc-arith-q03",
      "difficulty": "hard",
      "concept": "Arithmetic – Ratios",
      "year": "Standard Exam Question",
      "text": "If $A : B = 2 : 3$ and $B : C = 4 : 5$, what is $A : B : C$?",
      "options": [
        "8 : 12 : 15",
        "6 : 9 : 10",
        "2 : 4 : 5",
        "8 : 10 : 15"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMultiply first ratio by 4 and second by 3: $A : B = 8 : 12$ and $B : C = 12 : 15 \\implies A : B : C = \\mathbf{8 : 12 : 15}$."
    },
    {
      "id": "ssc-arith-q04",
      "difficulty": "easy",
      "concept": "Arithmetic – Speed & Distance",
      "year": "Standard Exam Question",
      "text": "A car covers a distance of 180 km in 3 hours. Its speed in meters per second (m/s) is:",
      "options": [
        "16.67 m/s",
        "60 m/s",
        "20 m/s",
        "15 m/s"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Speed} = \\frac{180}{3} = 60\\text{ km/h} = 60 \\times \\frac{5}{18} = \\frac{50}{3} \\approx \\mathbf{16.67\\text{ m/s}}$$"
    },
    {
      "id": "ssc-arith-q05",
      "difficulty": "medium",
      "concept": "Arithmetic – Averages",
      "year": "Standard Exam Question",
      "text": "The average of five numbers is 27. If one number is excluded, the average becomes 25. The excluded number is:",
      "options": [
        "35",
        "30",
        "28",
        "32"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Sum of 5 numbers} = 5 \\times 27 = 135$$\\n$$\\text{Sum of 4 numbers} = 4 \\times 25 = 100$$\\n$$\\text{Excluded number} = 135 - 100 = \\mathbf{35}$$"
    },
    {
      "id": "ssc-arith-q06",
      "difficulty": "hard",
      "concept": "Arithmetic – Profit & Loss",
      "year": "Standard Exam Question",
      "text": "If the cost price of 15 articles is equal to the selling price of 12 articles, the profit percentage is:",
      "options": [
        "25%",
        "20%",
        "30%",
        "16.67%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet CP of 1 article $= 1 \\implies$ CP of 15 $= 15$.\\nSP of 12 $= 15 \\implies$ SP of 1 $= 15/12 = 1.25$.\\n$$\\text{Profit } \\% = \\frac{1.25 - 1}{1} \\times 100 = \\mathbf{25\\%}$$"
    },
    {
      "id": "ssc-arith-q07",
      "difficulty": "easy",
      "concept": "Arithmetic – Compound Interest",
      "year": "Standard Exam Question",
      "text": "The compound interest on \\$10,000 for 2 years at 10% per annum compounded annually is:",
      "options": [
        "\\$2,100",
        "\\$2,000",
        "\\$2,200",
        "\\$1,000"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$A = P\\left(1 + \\frac{r}{100}\\right)^t = 10000(1.10)^2 = 12100 \\implies CI = 12100 - 10000 = \\mathbf{\\$2,100}$$"
    },
    {
      "id": "ssc-arith-q08",
      "difficulty": "medium",
      "concept": "Arithmetic – Ratios",
      "year": "Standard Exam Question",
      "text": "If $A : B = 2 : 3$ and $B : C = 4 : 5$, what is $A : B : C$?",
      "options": [
        "8 : 12 : 15",
        "6 : 9 : 10",
        "2 : 4 : 5",
        "8 : 10 : 15"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMultiply first ratio by 4 and second by 3: $A : B = 8 : 12$ and $B : C = 12 : 15 \\implies A : B : C = \\mathbf{8 : 12 : 15}$."
    },
    {
      "id": "ssc-arith-q09",
      "difficulty": "hard",
      "concept": "Arithmetic – Speed & Distance",
      "year": "Standard Exam Question",
      "text": "A car covers a distance of 180 km in 3 hours. Its speed in meters per second (m/s) is:",
      "options": [
        "16.67 m/s",
        "60 m/s",
        "20 m/s",
        "15 m/s"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Speed} = \\frac{180}{3} = 60\\text{ km/h} = 60 \\times \\frac{5}{18} = \\frac{50}{3} \\approx \\mathbf{16.67\\text{ m/s}}$$"
    },
    {
      "id": "ssc-arith-q10",
      "difficulty": "easy",
      "concept": "Arithmetic – Averages",
      "year": "Standard Exam Question",
      "text": "The average of five numbers is 27. If one number is excluded, the average becomes 25. The excluded number is:",
      "options": [
        "35",
        "30",
        "28",
        "32"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Sum of 5 numbers} = 5 \\times 27 = 135$$\\n$$\\text{Sum of 4 numbers} = 4 \\times 25 = 100$$\\n$$\\text{Excluded number} = 135 - 100 = \\mathbf{35}$$"
    },
    {
      "id": "ssc-arith-q11",
      "difficulty": "medium",
      "concept": "Arithmetic – Profit & Loss",
      "year": "Standard Exam Question",
      "text": "If the cost price of 15 articles is equal to the selling price of 12 articles, the profit percentage is:",
      "options": [
        "25%",
        "20%",
        "30%",
        "16.67%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet CP of 1 article $= 1 \\implies$ CP of 15 $= 15$.\\nSP of 12 $= 15 \\implies$ SP of 1 $= 15/12 = 1.25$.\\n$$\\text{Profit } \\% = \\frac{1.25 - 1}{1} \\times 100 = \\mathbf{25\\%}$$"
    },
    {
      "id": "ssc-arith-q12",
      "difficulty": "hard",
      "concept": "Arithmetic – Compound Interest",
      "year": "Standard Exam Question",
      "text": "The compound interest on \\$10,000 for 2 years at 10% per annum compounded annually is:",
      "options": [
        "\\$2,100",
        "\\$2,000",
        "\\$2,200",
        "\\$1,000"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$A = P\\left(1 + \\frac{r}{100}\\right)^t = 10000(1.10)^2 = 12100 \\implies CI = 12100 - 10000 = \\mathbf{\\$2,100}$$"
    },
    {
      "id": "ssc-arith-q13",
      "difficulty": "easy",
      "concept": "Arithmetic – Ratios",
      "year": "Standard Exam Question",
      "text": "If $A : B = 2 : 3$ and $B : C = 4 : 5$, what is $A : B : C$?",
      "options": [
        "8 : 12 : 15",
        "6 : 9 : 10",
        "2 : 4 : 5",
        "8 : 10 : 15"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMultiply first ratio by 4 and second by 3: $A : B = 8 : 12$ and $B : C = 12 : 15 \\implies A : B : C = \\mathbf{8 : 12 : 15}$."
    },
    {
      "id": "ssc-arith-q14",
      "difficulty": "medium",
      "concept": "Arithmetic – Speed & Distance",
      "year": "Standard Exam Question",
      "text": "A car covers a distance of 180 km in 3 hours. Its speed in meters per second (m/s) is:",
      "options": [
        "16.67 m/s",
        "60 m/s",
        "20 m/s",
        "15 m/s"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Speed} = \\frac{180}{3} = 60\\text{ km/h} = 60 \\times \\frac{5}{18} = \\frac{50}{3} \\approx \\mathbf{16.67\\text{ m/s}}$$"
    },
    {
      "id": "ssc-arith-q15",
      "difficulty": "hard",
      "concept": "Arithmetic – Averages",
      "year": "Standard Exam Question",
      "text": "The average of five numbers is 27. If one number is excluded, the average becomes 25. The excluded number is:",
      "options": [
        "35",
        "30",
        "28",
        "32"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Sum of 5 numbers} = 5 \\times 27 = 135$$\\n$$\\text{Sum of 4 numbers} = 4 \\times 25 = 100$$\\n$$\\text{Excluded number} = 135 - 100 = \\mathbf{35}$$"
    },
    {
      "id": "ssc-arith-q16",
      "difficulty": "easy",
      "concept": "Arithmetic – Profit & Loss",
      "year": "Standard Exam Question",
      "text": "If the cost price of 15 articles is equal to the selling price of 12 articles, the profit percentage is:",
      "options": [
        "25%",
        "20%",
        "30%",
        "16.67%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet CP of 1 article $= 1 \\implies$ CP of 15 $= 15$.\\nSP of 12 $= 15 \\implies$ SP of 1 $= 15/12 = 1.25$.\\n$$\\text{Profit } \\% = \\frac{1.25 - 1}{1} \\times 100 = \\mathbf{25\\%}$$"
    },
    {
      "id": "ssc-arith-q17",
      "difficulty": "medium",
      "concept": "Arithmetic – Compound Interest",
      "year": "Standard Exam Question",
      "text": "The compound interest on \\$10,000 for 2 years at 10% per annum compounded annually is:",
      "options": [
        "\\$2,100",
        "\\$2,000",
        "\\$2,200",
        "\\$1,000"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$A = P\\left(1 + \\frac{r}{100}\\right)^t = 10000(1.10)^2 = 12100 \\implies CI = 12100 - 10000 = \\mathbf{\\$2,100}$$"
    },
    {
      "id": "ssc-arith-q18",
      "difficulty": "hard",
      "concept": "Arithmetic – Ratios",
      "year": "Standard Exam Question",
      "text": "If $A : B = 2 : 3$ and $B : C = 4 : 5$, what is $A : B : C$?",
      "options": [
        "8 : 12 : 15",
        "6 : 9 : 10",
        "2 : 4 : 5",
        "8 : 10 : 15"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMultiply first ratio by 4 and second by 3: $A : B = 8 : 12$ and $B : C = 12 : 15 \\implies A : B : C = \\mathbf{8 : 12 : 15}$."
    },
    {
      "id": "ssc-arith-q19",
      "difficulty": "easy",
      "concept": "Arithmetic – Speed & Distance",
      "year": "Standard Exam Question",
      "text": "A car covers a distance of 180 km in 3 hours. Its speed in meters per second (m/s) is:",
      "options": [
        "16.67 m/s",
        "60 m/s",
        "20 m/s",
        "15 m/s"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Speed} = \\frac{180}{3} = 60\\text{ km/h} = 60 \\times \\frac{5}{18} = \\frac{50}{3} \\approx \\mathbf{16.67\\text{ m/s}}$$"
    },
    {
      "id": "ssc-arith-q20",
      "difficulty": "medium",
      "concept": "Arithmetic – Averages",
      "year": "Standard Exam Question",
      "text": "The average of five numbers is 27. If one number is excluded, the average becomes 25. The excluded number is:",
      "options": [
        "35",
        "30",
        "28",
        "32"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Sum of 5 numbers} = 5 \\times 27 = 135$$\\n$$\\text{Sum of 4 numbers} = 4 \\times 25 = 100$$\\n$$\\text{Excluded number} = 135 - 100 = \\mathbf{35}$$"
    },
    {
      "id": "ssc-arith-q21",
      "difficulty": "hard",
      "concept": "Arithmetic – Profit & Loss",
      "year": "Standard Exam Question",
      "text": "If the cost price of 15 articles is equal to the selling price of 12 articles, the profit percentage is:",
      "options": [
        "25%",
        "20%",
        "30%",
        "16.67%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLet CP of 1 article $= 1 \\implies$ CP of 15 $= 15$.\\nSP of 12 $= 15 \\implies$ SP of 1 $= 15/12 = 1.25$.\\n$$\\text{Profit } \\% = \\frac{1.25 - 1}{1} \\times 100 = \\mathbf{25\\%}$$"
    },
    {
      "id": "ssc-arith-q22",
      "difficulty": "easy",
      "concept": "Arithmetic – Compound Interest",
      "year": "Standard Exam Question",
      "text": "The compound interest on \\$10,000 for 2 years at 10% per annum compounded annually is:",
      "options": [
        "\\$2,100",
        "\\$2,000",
        "\\$2,200",
        "\\$1,000"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$A = P\\left(1 + \\frac{r}{100}\\right)^t = 10000(1.10)^2 = 12100 \\implies CI = 12100 - 10000 = \\mathbf{\\$2,100}$$"
    },
    {
      "id": "ssc-arith-q23",
      "difficulty": "medium",
      "concept": "Arithmetic – Ratios",
      "year": "Standard Exam Question",
      "text": "If $A : B = 2 : 3$ and $B : C = 4 : 5$, what is $A : B : C$?",
      "options": [
        "8 : 12 : 15",
        "6 : 9 : 10",
        "2 : 4 : 5",
        "8 : 10 : 15"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMultiply first ratio by 4 and second by 3: $A : B = 8 : 12$ and $B : C = 12 : 15 \\implies A : B : C = \\mathbf{8 : 12 : 15}$."
    },
    {
      "id": "ssc-arith-q24",
      "difficulty": "hard",
      "concept": "Arithmetic – Speed & Distance",
      "year": "Standard Exam Question",
      "text": "A car covers a distance of 180 km in 3 hours. Its speed in meters per second (m/s) is:",
      "options": [
        "16.67 m/s",
        "60 m/s",
        "20 m/s",
        "15 m/s"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Speed} = \\frac{180}{3} = 60\\text{ km/h} = 60 \\times \\frac{5}{18} = \\frac{50}{3} \\approx \\mathbf{16.67\\text{ m/s}}$$"
    },
    {
      "id": "ssc-arith-q25",
      "difficulty": "easy",
      "concept": "Arithmetic – Averages",
      "year": "Standard Exam Question",
      "text": "The average of five numbers is 27. If one number is excluded, the average becomes 25. The excluded number is:",
      "options": [
        "35",
        "30",
        "28",
        "32"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Sum of 5 numbers} = 5 \\times 27 = 135$$\\n$$\\text{Sum of 4 numbers} = 4 \\times 25 = 100$$\\n$$\\text{Excluded number} = 135 - 100 = \\mathbf{35}$$"
    }
  ],
  "ssc-reasoning": [
    {
      "id": "ssc-reasoning-q01",
      "difficulty": "easy",
      "concept": "Reasoning – Series Completion",
      "year": "Standard Exam Question",
      "text": "Find the next number in the series: 2, 6, 12, 20, 30, ?",
      "options": [
        "42",
        "40",
        "44",
        "38"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDifferences: $+4, +6, +8, +10, +\\mathbf{12}$.\\n$$30 + 12 = \\mathbf{42}$$ (also $n(n+1)$ for $n=1,2,3,4,5,6$)."
    },
    {
      "id": "ssc-reasoning-q02",
      "difficulty": "medium",
      "concept": "Reasoning – Coding Decoding",
      "year": "Standard Exam Question",
      "text": "In a certain code language, if `EARTH` is coded as `GCTVJ`, how is `MOON` coded in that language?",
      "options": [
        "OQQP",
        "OPPQ",
        "NPPN",
        "POOQ"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPattern is $+2$ for each letter:\\n- $M + 2 = O$\\n- $O + 2 = Q$\\n- $O + 2 = Q$\\n- $N + 2 = P$\\nResult: **OQQP**."
    },
    {
      "id": "ssc-reasoning-q03",
      "difficulty": "hard",
      "concept": "Reasoning – Blood Relations",
      "year": "Standard Exam Question",
      "text": "Pointing to a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
      "options": [
        "Mother",
        "Sister",
        "Aunt",
        "Grandmother"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n\"Only daughter of my mother\" = the woman herself.\\n\"His mother is [the woman herself]\" $\\implies$ the woman is his **mother**."
    },
    {
      "id": "ssc-reasoning-q04",
      "difficulty": "easy",
      "concept": "Reasoning – Direction Sense",
      "year": "Standard Exam Question",
      "text": "A man walks 5 km North, then turns right and walks 12 km. How far is he from his starting point?",
      "options": [
        "13 km",
        "17 km",
        "10 km",
        "15 km"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Pythagoras theorem: $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = \\mathbf{13\\text{ km}}$."
    },
    {
      "id": "ssc-reasoning-q05",
      "difficulty": "medium",
      "concept": "Reasoning – Analogy",
      "year": "Standard Exam Question",
      "text": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "options": [
        "School",
        "Student",
        "Book",
        "Class"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA doctor works in a hospital; a teacher works in a **school** (professional workplace analogy)."
    },
    {
      "id": "ssc-reasoning-q06",
      "difficulty": "hard",
      "concept": "Reasoning – Series Completion",
      "year": "Standard Exam Question",
      "text": "Find the next number in the series: 2, 6, 12, 20, 30, ?",
      "options": [
        "42",
        "40",
        "44",
        "38"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDifferences: $+4, +6, +8, +10, +\\mathbf{12}$.\\n$$30 + 12 = \\mathbf{42}$$ (also $n(n+1)$ for $n=1,2,3,4,5,6$)."
    },
    {
      "id": "ssc-reasoning-q07",
      "difficulty": "easy",
      "concept": "Reasoning – Coding Decoding",
      "year": "Standard Exam Question",
      "text": "In a certain code language, if `EARTH` is coded as `GCTVJ`, how is `MOON` coded in that language?",
      "options": [
        "OQQP",
        "OPPQ",
        "NPPN",
        "POOQ"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPattern is $+2$ for each letter:\\n- $M + 2 = O$\\n- $O + 2 = Q$\\n- $O + 2 = Q$\\n- $N + 2 = P$\\nResult: **OQQP**."
    },
    {
      "id": "ssc-reasoning-q08",
      "difficulty": "medium",
      "concept": "Reasoning – Blood Relations",
      "year": "Standard Exam Question",
      "text": "Pointing to a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
      "options": [
        "Mother",
        "Sister",
        "Aunt",
        "Grandmother"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n\"Only daughter of my mother\" = the woman herself.\\n\"His mother is [the woman herself]\" $\\implies$ the woman is his **mother**."
    },
    {
      "id": "ssc-reasoning-q09",
      "difficulty": "hard",
      "concept": "Reasoning – Direction Sense",
      "year": "Standard Exam Question",
      "text": "A man walks 5 km North, then turns right and walks 12 km. How far is he from his starting point?",
      "options": [
        "13 km",
        "17 km",
        "10 km",
        "15 km"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Pythagoras theorem: $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = \\mathbf{13\\text{ km}}$."
    },
    {
      "id": "ssc-reasoning-q10",
      "difficulty": "easy",
      "concept": "Reasoning – Analogy",
      "year": "Standard Exam Question",
      "text": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "options": [
        "School",
        "Student",
        "Book",
        "Class"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA doctor works in a hospital; a teacher works in a **school** (professional workplace analogy)."
    },
    {
      "id": "ssc-reasoning-q11",
      "difficulty": "medium",
      "concept": "Reasoning – Series Completion",
      "year": "Standard Exam Question",
      "text": "Find the next number in the series: 2, 6, 12, 20, 30, ?",
      "options": [
        "42",
        "40",
        "44",
        "38"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDifferences: $+4, +6, +8, +10, +\\mathbf{12}$.\\n$$30 + 12 = \\mathbf{42}$$ (also $n(n+1)$ for $n=1,2,3,4,5,6$)."
    },
    {
      "id": "ssc-reasoning-q12",
      "difficulty": "hard",
      "concept": "Reasoning – Coding Decoding",
      "year": "Standard Exam Question",
      "text": "In a certain code language, if `EARTH` is coded as `GCTVJ`, how is `MOON` coded in that language?",
      "options": [
        "OQQP",
        "OPPQ",
        "NPPN",
        "POOQ"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPattern is $+2$ for each letter:\\n- $M + 2 = O$\\n- $O + 2 = Q$\\n- $O + 2 = Q$\\n- $N + 2 = P$\\nResult: **OQQP**."
    },
    {
      "id": "ssc-reasoning-q13",
      "difficulty": "easy",
      "concept": "Reasoning – Blood Relations",
      "year": "Standard Exam Question",
      "text": "Pointing to a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
      "options": [
        "Mother",
        "Sister",
        "Aunt",
        "Grandmother"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n\"Only daughter of my mother\" = the woman herself.\\n\"His mother is [the woman herself]\" $\\implies$ the woman is his **mother**."
    },
    {
      "id": "ssc-reasoning-q14",
      "difficulty": "medium",
      "concept": "Reasoning – Direction Sense",
      "year": "Standard Exam Question",
      "text": "A man walks 5 km North, then turns right and walks 12 km. How far is he from his starting point?",
      "options": [
        "13 km",
        "17 km",
        "10 km",
        "15 km"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Pythagoras theorem: $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = \\mathbf{13\\text{ km}}$."
    },
    {
      "id": "ssc-reasoning-q15",
      "difficulty": "hard",
      "concept": "Reasoning – Analogy",
      "year": "Standard Exam Question",
      "text": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "options": [
        "School",
        "Student",
        "Book",
        "Class"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA doctor works in a hospital; a teacher works in a **school** (professional workplace analogy)."
    },
    {
      "id": "ssc-reasoning-q16",
      "difficulty": "easy",
      "concept": "Reasoning – Series Completion",
      "year": "Standard Exam Question",
      "text": "Find the next number in the series: 2, 6, 12, 20, 30, ?",
      "options": [
        "42",
        "40",
        "44",
        "38"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDifferences: $+4, +6, +8, +10, +\\mathbf{12}$.\\n$$30 + 12 = \\mathbf{42}$$ (also $n(n+1)$ for $n=1,2,3,4,5,6$)."
    },
    {
      "id": "ssc-reasoning-q17",
      "difficulty": "medium",
      "concept": "Reasoning – Coding Decoding",
      "year": "Standard Exam Question",
      "text": "In a certain code language, if `EARTH` is coded as `GCTVJ`, how is `MOON` coded in that language?",
      "options": [
        "OQQP",
        "OPPQ",
        "NPPN",
        "POOQ"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPattern is $+2$ for each letter:\\n- $M + 2 = O$\\n- $O + 2 = Q$\\n- $O + 2 = Q$\\n- $N + 2 = P$\\nResult: **OQQP**."
    },
    {
      "id": "ssc-reasoning-q18",
      "difficulty": "hard",
      "concept": "Reasoning – Blood Relations",
      "year": "Standard Exam Question",
      "text": "Pointing to a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
      "options": [
        "Mother",
        "Sister",
        "Aunt",
        "Grandmother"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n\"Only daughter of my mother\" = the woman herself.\\n\"His mother is [the woman herself]\" $\\implies$ the woman is his **mother**."
    },
    {
      "id": "ssc-reasoning-q19",
      "difficulty": "easy",
      "concept": "Reasoning – Direction Sense",
      "year": "Standard Exam Question",
      "text": "A man walks 5 km North, then turns right and walks 12 km. How far is he from his starting point?",
      "options": [
        "13 km",
        "17 km",
        "10 km",
        "15 km"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Pythagoras theorem: $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = \\mathbf{13\\text{ km}}$."
    },
    {
      "id": "ssc-reasoning-q20",
      "difficulty": "medium",
      "concept": "Reasoning – Analogy",
      "year": "Standard Exam Question",
      "text": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "options": [
        "School",
        "Student",
        "Book",
        "Class"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA doctor works in a hospital; a teacher works in a **school** (professional workplace analogy)."
    },
    {
      "id": "ssc-reasoning-q21",
      "difficulty": "hard",
      "concept": "Reasoning – Series Completion",
      "year": "Standard Exam Question",
      "text": "Find the next number in the series: 2, 6, 12, 20, 30, ?",
      "options": [
        "42",
        "40",
        "44",
        "38"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDifferences: $+4, +6, +8, +10, +\\mathbf{12}$.\\n$$30 + 12 = \\mathbf{42}$$ (also $n(n+1)$ for $n=1,2,3,4,5,6$)."
    },
    {
      "id": "ssc-reasoning-q22",
      "difficulty": "easy",
      "concept": "Reasoning – Coding Decoding",
      "year": "Standard Exam Question",
      "text": "In a certain code language, if `EARTH` is coded as `GCTVJ`, how is `MOON` coded in that language?",
      "options": [
        "OQQP",
        "OPPQ",
        "NPPN",
        "POOQ"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPattern is $+2$ for each letter:\\n- $M + 2 = O$\\n- $O + 2 = Q$\\n- $O + 2 = Q$\\n- $N + 2 = P$\\nResult: **OQQP**."
    },
    {
      "id": "ssc-reasoning-q23",
      "difficulty": "medium",
      "concept": "Reasoning – Blood Relations",
      "year": "Standard Exam Question",
      "text": "Pointing to a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
      "options": [
        "Mother",
        "Sister",
        "Aunt",
        "Grandmother"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n\"Only daughter of my mother\" = the woman herself.\\n\"His mother is [the woman herself]\" $\\implies$ the woman is his **mother**."
    },
    {
      "id": "ssc-reasoning-q24",
      "difficulty": "hard",
      "concept": "Reasoning – Direction Sense",
      "year": "Standard Exam Question",
      "text": "A man walks 5 km North, then turns right and walks 12 km. How far is he from his starting point?",
      "options": [
        "13 km",
        "17 km",
        "10 km",
        "15 km"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Pythagoras theorem: $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = \\mathbf{13\\text{ km}}$."
    },
    {
      "id": "ssc-reasoning-q25",
      "difficulty": "easy",
      "concept": "Reasoning – Analogy",
      "year": "Standard Exam Question",
      "text": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "options": [
        "School",
        "Student",
        "Book",
        "Class"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA doctor works in a hospital; a teacher works in a **school** (professional workplace analogy)."
    }
  ]
};
