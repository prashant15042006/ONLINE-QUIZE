import { Question } from "./questionTypes";

export const CURATED_QUESTIONS: Record<string, Question[]> = {
  "em-la": [
    {
      "id": "la-p01",
      "difficulty": "medium",
      "concept": "Rank-Nullity",
      "year": "Standard Exam Prep",
      "text": "Let $T: \\mathbb{R}^6 \\to \\mathbb{R}^4$ be a linear map with nullity 2. What is the dimension of the range of $T$?",
      "options": [
        "4",
        "2",
        "6",
        "3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\text{Rank}(T) + \\text{Nullity}(T) = \\dim(\\text{Domain}) \\implies \\text{Rank}(T) + 2 = 6 \\implies \\text{Rank}(T) = 4$."
    },
    {
      "id": "la-p02",
      "difficulty": "easy",
      "concept": "Orthogonal Matrix",
      "year": "Standard Exam Prep",
      "text": "For an orthogonal real matrix $Q$, which condition is always true?",
      "options": [
        "$Q^{-1} = Q^T$",
        "$Q^2 = I$",
        "$\\det(Q) = 0$",
        "$Q = Q^T$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy definition of orthogonality, $Q^T Q = I \\implies Q^{-1} = Q^T$."
    },
    {
      "id": "la-p03",
      "difficulty": "medium",
      "concept": "Eigenvalues of Inverse",
      "year": "Standard Exam Prep",
      "text": "If $A$ has eigenvalues 2, 4, and 8, the eigenvalues of $A^{-1}$ are:",
      "options": [
        "1/2, 1/4, 1/8",
        "-2, -4, -8",
        "2, 4, 8",
        "1, 2, 4"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIf $Av = \\lambda v$, then $A^{-1}v = \\frac{1}{\\lambda}v$. Eigenvalues are 1/2, 1/4, 1/8."
    },
    {
      "id": "la-p04",
      "difficulty": "hard",
      "concept": "Diagonalization Condition",
      "year": "Standard Exam Prep",
      "text": "A $3 \\times 3$ real matrix is diagonalizable over $\\mathbb{R}$ if it has:",
      "options": [
        "3 distinct real eigenvalues",
        "Determinant equal to 1",
        "Trace equal to 0",
        "All elements non-zero"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDistinct eigenvalues guarantee linearly independent eigenvectors, making the matrix diagonalizable."
    },
    {
      "id": "la-p05",
      "difficulty": "medium",
      "concept": "Trace and Determinant",
      "year": "Standard Exam Prep",
      "text": "A $2 \\times 2$ matrix has trace 7 and determinant 12. Its eigenvalues are:",
      "options": [
        "3 and 4",
        "2 and 6",
        "1 and 12",
        "-3 and -4"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\lambda_1 + \\lambda_2 = 7$ and $\\lambda_1 \\lambda_2 = 12 \\implies \\lambda = 3, 4$."
    },
    {
      "id": "la-p06",
      "difficulty": "easy",
      "concept": "Linear Independence",
      "year": "Standard Exam Prep",
      "text": "The vectors $(1, 0)$ and $(0, 1)$ in $\\mathbb{R}^2$ are:",
      "options": [
        "Linearly independent basis",
        "Linearly dependent",
        "Orthogonal but dependent",
        "Collinear"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThey form the standard orthonormal basis of $\\mathbb{R}^2$."
    },
    {
      "id": "la-p07",
      "difficulty": "hard",
      "concept": "Cayley-Hamilton Matrix Power",
      "year": "Standard Exam Prep",
      "text": "If $A^2 - 4A + 3I = 0$, then $A^{-1}$ equals:",
      "options": [
        "$\\frac{1}{3}(4I - A)$",
        "$\\frac{1}{3}(A - 4I)$",
        "$4I - A$",
        "$A - 4I$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMultiply by $A^{-1}$: $A - 4I + 3A^{-1} = 0 \\implies 3A^{-1} = 4I - A \\implies A^{-1} = \\frac{1}{3}(4I - A)$."
    },
    {
      "id": "la-p08",
      "difficulty": "medium",
      "concept": "Positive Definite Minors",
      "year": "Standard Exam Prep",
      "text": "A symmetric matrix is positive definite if all its:",
      "options": [
        "Leading principal minors are positive",
        "Diagonal entries are zero",
        "Eigenvalues are negative",
        "Off-diagonal entries are positive"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Sylvester's criterion, all leading principal minors must be strictly positive."
    },
    {
      "id": "la-p09",
      "difficulty": "medium",
      "concept": "Rank of Product",
      "year": "Standard Exam Prep",
      "text": "For any $m \\times n$ matrix $A$ and $n \\times p$ matrix $B$, $\\text{Rank}(AB)$ satisfies:",
      "options": [
        "$\\text{Rank}(AB) \\le \\min(\\text{Rank}(A), \\text{Rank}(B))$",
        "$\\text{Rank}(AB) = \\text{Rank}(A) + \\text{Rank}(B)$",
        "$\\text{Rank}(AB) \\ge \\text{Rank}(A)$",
        "$\\text{Rank}(AB) = \\max(\\text{Rank}(A), \\text{Rank}(B))$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMatrix multiplication cannot increase rank: $\\text{Rank}(AB) \\le \\min(\\text{Rank}(A), \\text{Rank}(B))$."
    },
    {
      "id": "la-p10",
      "difficulty": "easy",
      "concept": "Determinant Transpose",
      "year": "Standard Exam Prep",
      "text": "For any square matrix $A$, $\\det(A^T)$ is always:",
      "options": [
        "Equal to $\\det(A)$",
        "$-\\det(A)$",
        "$1/\\det(A)$",
        "0"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTransposing a matrix does not change its determinant: $\\det(A^T) = \\det(A)$."
    },
    {
      "id": "la-p11",
      "difficulty": "hard",
      "concept": "Gram-Schmidt Concept",
      "year": "Standard Exam Prep",
      "text": "The Gram-Schmidt process transforms a linearly independent set of vectors into an:",
      "options": [
        "Orthonormal set spanning the same subspace",
        "Invertible matrix",
        "Eigenbasis of a symmetric matrix",
        "Upper triangular matrix only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nGram-Schmidt constructs an orthonormal basis for the span of the given vectors."
    },
    {
      "id": "la-p12",
      "difficulty": "medium",
      "concept": "Idempotent Eigenvalues",
      "year": "Standard Exam Prep",
      "text": "If $P^2 = P$, the only possible eigenvalues of $P$ are:",
      "options": [
        "0 and 1",
        "-1 and 1",
        "Real numbers $> 1$",
        "1 only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\lambda^2 = \\lambda \\implies \\lambda(\\lambda - 1) = 0 \\implies \\lambda \\in \\{0, 1\\}$."
    },
    {
      "id": "la-p13",
      "difficulty": "medium",
      "concept": "Homogeneous System Solution",
      "year": "Standard Exam Prep",
      "text": "A homogeneous system $Ax = 0$ with $m$ equations and $n$ unknowns ($n > m$) always has:",
      "options": [
        "Non-trivial (infinite) solutions",
        "Only trivial solution $x=0$",
        "No solution",
        "Unique solution"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSince variables exceed equations ($n > m$), nullity $\\ge n - m > 0$, guaranteeing non-trivial solutions."
    },
    {
      "id": "la-p14",
      "difficulty": "hard",
      "concept": "Singular Value Definition",
      "year": "Standard Exam Prep",
      "text": "The singular values of matrix $A$ are:",
      "options": [
        "Positive square roots of eigenvalues of $A^T A$",
        "Eigenvalues of $A$",
        "Diagonal elements of $A$",
        "Absolute values of trace of $A$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSingular values $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$."
    },
    {
      "id": "la-p15",
      "difficulty": "easy",
      "concept": "Zero Determinant Meaning",
      "year": "Standard Exam Prep",
      "text": "If $\\det(A) = 0$, which of the following is true?",
      "options": [
        "$A$ is singular and has no inverse",
        "$A$ is invertible",
        "All eigenvalues are non-zero",
        "Rank equals dimension"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\det(A) = 0$ implies the matrix is singular and cannot be inverted."
    }
  ],
  "em-dm": [
    {
      "id": "dm-p01",
      "difficulty": "medium",
      "concept": "Inclusion-Exclusion",
      "year": "Standard Exam Prep",
      "text": "Among 100 students, 60 like Math, 50 like CS, and 30 like both. How many like neither?",
      "options": [
        "20",
        "10",
        "30",
        "40"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$|M \\cup CS| = 60 + 50 - 30 = 80$. Neither $= 100 - 80 = \\mathbf{20}$."
    },
    {
      "id": "dm-p02",
      "difficulty": "easy",
      "concept": "Handshake Theorem",
      "year": "Standard Exam Prep",
      "text": "In any graph, the number of vertices with odd degree is always:",
      "options": [
        "Even",
        "Odd",
        "Zero",
        "Prime"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSince $\\sum \\deg(v) = 2|E|$ (even), the number of odd-degree vertices must be **even**."
    },
    {
      "id": "dm-p03",
      "difficulty": "medium",
      "concept": "Pigeonhole Principle",
      "year": "Standard Exam Prep",
      "text": "Minimum socks to pick from a drawer of 10 black and 10 white socks to guarantee a matching pair is:",
      "options": [
        "3",
        "2",
        "11",
        "10"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThere are 2 colors ($n = 2$). By pigeonhole principle, $2 + 1 = \\mathbf{3}$ picks guarantee a pair."
    },
    {
      "id": "dm-p04",
      "difficulty": "hard",
      "concept": "Euler Totient 100",
      "year": "Standard Exam Prep",
      "text": "What is the value of Euler's totient function $\\phi(100)$?",
      "options": [
        "40",
        "50",
        "20",
        "80"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$100 = 2^2 \\times 5^2 \\implies \\phi(100) = 100(1 - 1/2)(1 - 1/5) = 100 \\times \\frac{1}{2} \\times \\frac{4}{5} = \\mathbf{40}$."
    },
    {
      "id": "dm-p05",
      "difficulty": "medium",
      "concept": "Fermat's Little Theorem",
      "year": "Standard Exam Prep",
      "text": "Find the remainder when $2^{70}$ is divided by prime 71:",
      "options": [
        "1",
        "2",
        "70",
        "0"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Fermat's Little Theorem: $a^{p-1} \\equiv 1 \\pmod p \\implies 2^{70} \\equiv \\mathbf{1} \\pmod{71}$."
    },
    {
      "id": "dm-p06",
      "difficulty": "medium",
      "concept": "Spanning Tree Cayley",
      "year": "Standard Exam Prep",
      "text": "The number of labeled trees on $n = 5$ vertices is:",
      "options": [
        "125",
        "25",
        "625",
        "60"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Cayley's formula: $n^{n-2} = 5^{5-2} = 5^3 = \\mathbf{125}$."
    },
    {
      "id": "dm-p07",
      "difficulty": "hard",
      "concept": "Derangement Formula",
      "year": "Standard Exam Prep",
      "text": "Number of derangements of 3 items $D_3$ is:",
      "options": [
        "2",
        "3",
        "1",
        "6"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$D_3 = 3!(1 - 1 + 1/2 - 1/6) = 6(2/6) = \\mathbf{2}$ (the permutations are (2,3,1) and (3,1,2))."
    },
    {
      "id": "dm-p08",
      "difficulty": "easy",
      "concept": "Bipartite Chromatic Number",
      "year": "Standard Exam Prep",
      "text": "The chromatic number of any bipartite graph with at least one edge is:",
      "options": [
        "2",
        "1",
        "3",
        "4"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nVertices can be partitioned into 2 independent sets, colored with exactly 2 colors."
    },
    {
      "id": "dm-p09",
      "difficulty": "medium",
      "concept": "Planar Graph Faces",
      "year": "Standard Exam Prep",
      "text": "A connected planar graph has 6 vertices and 9 edges. How many faces does it have?",
      "options": [
        "5",
        "4",
        "6",
        "3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$V - E + F = 2 \\implies 6 - 9 + F = 2 \\implies F = 5$."
    },
    {
      "id": "dm-p10",
      "difficulty": "hard",
      "concept": "Recurrence Solution",
      "year": "Standard Exam Prep",
      "text": "The solution to $a_n = 2a_{n-1}$ with $a_0 = 3$ is:",
      "options": [
        "$3 \\cdot 2^n$",
        "$2 \\cdot 3^n$",
        "$6^n$",
        "$3 + 2n$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRepeated substitution gives $a_n = a_0 \\cdot 2^n = 3 \\cdot 2^n$."
    },
    {
      "id": "dm-p11",
      "difficulty": "medium",
      "concept": "Equivalence Class Property",
      "year": "Standard Exam Prep",
      "text": "Two equivalence classes in an equivalence relation are always either:",
      "options": [
        "Identical or disjoint",
        "Intersecting at one point",
        "Empty",
        "Infinite"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEquivalence classes partition the underlying set into mutually disjoint subsets."
    },
    {
      "id": "dm-p12",
      "difficulty": "easy",
      "concept": "Complete Graph Edges",
      "year": "Standard Exam Prep",
      "text": "A complete graph $K_n$ has how many edges?",
      "options": [
        "$\\frac{n(n-1)}{2}$",
        "$n(n-1)$",
        "$n^2$",
        "$2n - 1$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEach of $n$ vertices connects to $n-1$ others: $\\binom{n}{2} = \\frac{n(n-1)}{2}$."
    },
    {
      "id": "dm-p13",
      "difficulty": "hard",
      "concept": "Partial Order Definition",
      "year": "Standard Exam Prep",
      "text": "A partial order relation (poset) must satisfy which three properties?",
      "options": [
        "Reflexive, Antisymmetric, Transitive",
        "Reflexive, Symmetric, Transitive",
        "Irreflexive, Symmetric, Transitive",
        "Asymmetric, Transitive"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA poset is defined by reflexivity, antisymmetry, and transitivity."
    },
    {
      "id": "dm-p14",
      "difficulty": "medium",
      "concept": "Predicate Negation",
      "year": "Standard Exam Prep",
      "text": "Negation of the statement 'All students are hardworking' is:",
      "options": [
        "Some student is not hardworking",
        "No student is hardworking",
        "All students are lazy",
        "Some student is hardworking"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\neg \\forall x H(x) \\equiv \\exists x \\neg H(x)$ ('Some student is not hardworking')."
    },
    {
      "id": "dm-p15",
      "difficulty": "medium",
      "concept": "Hamiltonian Graph Dirac",
      "year": "Standard Exam Prep",
      "text": "Dirac's theorem states that a simple graph with $n \\ge 3$ vertices is Hamiltonian if every vertex has degree at least:",
      "options": [
        "$n/2$",
        "$n/3$",
        "$n-1$",
        "$2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDirac's theorem: $\\deg(v) \\ge n/2$ for all vertices guarantees a Hamiltonian cycle."
    }
  ],
  "em-prob": [
    {
      "id": "prob-p01",
      "difficulty": "easy",
      "concept": "Coin Toss Probability",
      "year": "Standard Exam Prep",
      "text": "A fair coin is tossed 3 times. Probability of getting at least two heads is:",
      "options": [
        "1/2",
        "3/8",
        "1/4",
        "5/8"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nOutcomes with $\\ge 2$ heads: HHH, HHT, HTH, THH (4 outcomes out of 8) $\\implies 4/8 = \\mathbf{1/2}$."
    },
    {
      "id": "prob-p02",
      "difficulty": "medium",
      "concept": "Conditional Probability",
      "year": "Standard Exam Prep",
      "text": "Given $P(A) = 0.5, P(B) = 0.6, P(A \\cap B) = 0.3$. What is $P(A \\mid B)$?",
      "options": [
        "0.5",
        "0.6",
        "0.3",
        "0.8"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.3}{0.6} = \\mathbf{0.5}$$"
    },
    {
      "id": "prob-p03",
      "difficulty": "hard",
      "concept": "Bayes Theorem Urn",
      "year": "Standard Exam Prep",
      "text": "Urn 1 has 3 red, 2 blue balls. Urn 2 has 2 red, 4 blue balls. An urn is picked at random and a ball drawn is red. What is the probability it came from Urn 1?",
      "options": [
        "9/14",
        "1/2",
        "3/5",
        "5/14"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$P(U_1|R) = \\frac{(1/2)(3/5)}{(1/2)(3/5) + (1/2)(2/6)} = \\frac{3/10}{3/10 + 1/6} = \\frac{9/30}{9/30 + 5/30} = \\mathbf{\\frac{9}{14}}$$"
    },
    {
      "id": "prob-p04",
      "difficulty": "medium",
      "concept": "Poisson Distribution Mean",
      "year": "Standard Exam Prep",
      "text": "If a Poisson variable satisfies $P(X = 1) = P(X = 2)$, what is its parameter $\\lambda$?",
      "options": [
        "2",
        "1",
        "0.5",
        "4"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\lambda e^{-\\lambda} = \\frac{\\lambda^2 e^{-\\lambda}}{2} \\implies 1 = \\frac{\\lambda}{2} \\implies \\lambda = \\mathbf{2}$$"
    },
    {
      "id": "prob-p05",
      "difficulty": "easy",
      "concept": "Expectation of Constant",
      "year": "Standard Exam Prep",
      "text": "If $c$ is a constant and $X$ a random variable, $E[cX]$ is:",
      "options": [
        "$c E[X]$",
        "$E[X]$",
        "$c^2 E[X]$",
        "$c + E[X]$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLinearity of expectation: $E[cX] = c E[X]$."
    },
    {
      "id": "prob-p06",
      "difficulty": "medium",
      "concept": "Variance Formula",
      "year": "Standard Exam Prep",
      "text": "The variance of random variable $X$ is defined as:",
      "options": [
        "$E[X^2] - (E[X])^2$",
        "$E[X^2] + (E[X])^2$",
        "$E[X] - E[X^2]$",
        "$(E[X])^2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Var}(X) = E[(X - \\mu)^2] = E[X^2] - (E[X])^2$$"
    },
    {
      "id": "prob-p07",
      "difficulty": "hard",
      "concept": "Uniform Continuous Mean",
      "year": "Standard Exam Prep",
      "text": "For a continuous variable $X$ uniform on $[a, b]$, the mean is:",
      "options": [
        "$\\frac{a+b}{2}$",
        "$\\frac{b-a}{2}$",
        "$\\sqrt{ab}$",
        "$\\frac{(b-a)^2}{12}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$E[X] = \\int_a^b \\frac{x}{b-a}\\,dx = \\frac{b^2 - a^2}{2(b-a)} = \\mathbf{\\frac{a+b}{2}}$$"
    },
    {
      "id": "prob-p08",
      "difficulty": "medium",
      "concept": "Geometric Mean Number of Trials",
      "year": "Standard Exam Prep",
      "text": "Probability of success is $p = 0.2$. The expected number of trials until first success is:",
      "options": [
        "5",
        "0.2",
        "4",
        "2.5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$E[X] = 1/p = 1/0.2 = \\mathbf{5}$$"
    },
    {
      "id": "prob-p09",
      "difficulty": "easy",
      "concept": "Total Probability Rule",
      "year": "Standard Exam Prep",
      "text": "If $B_1, B_2, \\dots, B_n$ partition the sample space, then $P(A)$ equals:",
      "options": [
        "$\\sum_{i=1}^n P(A \\mid B_i)P(B_i)$",
        "$\\sum_{i=1}^n P(A \\cap B_i) / P(B_i)$",
        "$\\prod_{i=1}^n P(A \\mid B_i)$",
        "$1$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy the Law of Total Probability: $P(A) = \\sum P(A \\mid B_i)P(B_i)$."
    },
    {
      "id": "prob-p10",
      "difficulty": "hard",
      "concept": "Chebyshev Inequality Range",
      "year": "Standard Exam Prep",
      "text": "For any random variable with mean $\\mu$ and std dev $\\sigma$, $P(|X - \\mu| \\ge 3\\sigma)$ is at most:",
      "options": [
        "1/9",
        "1/3",
        "1/27",
        "1/4"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Chebyshev's inequality: $P(|X - \\mu| \\ge k\\sigma) \\le 1/k^2 = 1/3^2 = \\mathbf{1/9}$."
    },
    {
      "id": "prob-p11",
      "difficulty": "medium",
      "concept": "Independent Variance Sum",
      "year": "Standard Exam Prep",
      "text": "If $X$ and $Y$ are independent with $\\text{Var}(X) = 5$ and $\\text{Var}(Y) = 7$, then $\\text{Var}(X - Y)$ is:",
      "options": [
        "12",
        "-2",
        "2",
        "35"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor independent variables: $\\text{Var}(X - Y) = \\text{Var}(X) + (-1)^2 \\text{Var}(Y) = 5 + 7 = \\mathbf{12}$."
    },
    {
      "id": "prob-p12",
      "difficulty": "easy",
      "concept": "Die Expected Value",
      "year": "Standard Exam Prep",
      "text": "The expected value of rolling a fair 6-sided die is:",
      "options": [
        "3.5",
        "3.0",
        "4.0",
        "3.6"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$E[X] = \\frac{1+2+3+4+5+6}{6} = \\frac{21}{6} = \\mathbf{3.5}$$"
    },
    {
      "id": "prob-p13",
      "difficulty": "hard",
      "concept": "Normal Distribution Area",
      "year": "Standard Exam Prep",
      "text": "In a normal distribution $N(\\mu, \\sigma^2)$, the percentage of area within $\\mu \\pm \\sigma$ is approximately:",
      "options": [
        "68.27%",
        "95.45%",
        "99.73%",
        "50%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy the 68-95-99.7 empirical rule, approximately 68.3% lies within 1 standard deviation."
    },
    {
      "id": "prob-p14",
      "difficulty": "medium",
      "concept": "CDF Properties",
      "year": "Standard Exam Prep",
      "text": "A cumulative distribution function $F(x) = P(X \\le x)$ must be:",
      "options": [
        "Non-decreasing and right-continuous",
        "Strictly increasing only",
        "Always linear",
        "Discontinuous everywhere"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy mathematical definition, any CDF $F(x)$ is non-decreasing with $\\lim_{x \\to -\\infty} F(x) = 0$ and $\\lim_{x \\to \\infty} F(x) = 1$."
    },
    {
      "id": "prob-p15",
      "difficulty": "medium",
      "concept": "Exponential Memoryless",
      "year": "Standard Exam Prep",
      "text": "If $X \\sim \\text{Exp}(\\lambda)$, then $P(X > t + s \\mid X > s)$ equals:",
      "options": [
        "$P(X > t)$",
        "$P(X > s)$",
        "$P(X > t+s)$",
        "$P(X < t)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe exponential distribution is the only continuous distribution with the memoryless property: $P(X > t+s \\mid X > s) = P(X > t)$."
    }
  ],
  "dl-seq": [
    {
      "id": "seq-p01",
      "difficulty": "medium",
      "concept": "JK Toggle Mode",
      "year": "Standard Exam Prep",
      "text": "A JK flip-flop toggles its output on each clock pulse when:",
      "options": [
        "$J = 1, K = 1$",
        "$J = 0, K = 0$",
        "$J = 1, K = 0$",
        "$J = 0, K = 1$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nWhen $J = 1, K = 1$, next state $Q^+ = \\overline{Q}$ (toggle mode)."
    },
    {
      "id": "seq-p02",
      "difficulty": "easy",
      "concept": "T Flip-Flop Function",
      "year": "Standard Exam Prep",
      "text": "When $T = 0$, the next state of a T flip-flop is:",
      "options": [
        "$Q$ (no change)",
        "$\\overline{Q}$",
        "0",
        "1"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$Q^+ = T \\oplus Q = 0 \\oplus Q = Q$ (holds current state)."
    },
    {
      "id": "seq-p03",
      "difficulty": "medium",
      "concept": "Mod-16 Counter",
      "year": "Standard Exam Prep",
      "text": "How many flip-flops are needed for a 4-bit binary counter (MOD-16)?",
      "options": [
        "4",
        "16",
        "8",
        "5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$2^n = 16 \\implies n = \\mathbf{4}$ flip-flops."
    },
    {
      "id": "seq-p04",
      "difficulty": "hard",
      "concept": "Johnson Counter Mod",
      "year": "Standard Exam Prep",
      "text": "An $n$-bit Johnson counter has a modulus of:",
      "options": [
        "$2n$",
        "$2^n$",
        "$n$",
        "$n^2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states."
    },
    {
      "id": "seq-p05",
      "difficulty": "medium",
      "concept": "Ring Counter States",
      "year": "Standard Exam Prep",
      "text": "A 6-bit ring counter has how many valid states?",
      "options": [
        "6",
        "64",
        "12",
        "32"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA ring counter with $n$ flip-flops circulates a single 1 through $n$ distinct states ($n = 6$)."
    },
    {
      "id": "seq-p06",
      "difficulty": "easy",
      "concept": "D Flip-Flop Transparent",
      "year": "Standard Exam Prep",
      "text": "A transparent latch is active when the enable signal is:",
      "options": [
        "High (level-triggered)",
        "Low only",
        "Rising edge only",
        "Falling edge only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA basic D latch is level-sensitive and transparent while enable is high."
    },
    {
      "id": "seq-p07",
      "difficulty": "hard",
      "concept": "Setup Time Violation",
      "year": "Standard Exam Prep",
      "text": "If data arrives later than the setup time before the clock edge, the flip-flop may enter:",
      "options": [
        "Metastable state",
        "Permanent low state",
        "Short circuit",
        "Inverted state"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA setup or hold violation can cause the output to oscillate or linger at an intermediate voltage (metastability)."
    },
    {
      "id": "seq-p08",
      "difficulty": "medium",
      "concept": "Synchronous vs Ripple Counter",
      "year": "Standard Exam Prep",
      "text": "The main speed advantage of a synchronous counter over an asynchronous (ripple) counter is:",
      "options": [
        "All flip-flops clock simultaneously, eliminating cumulative ripple delay",
        "It uses fewer gates",
        "It uses no clock signal",
        "It operates at lower voltage"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSynchronous counters trigger all flip-flops concurrently from the same clock line."
    },
    {
      "id": "seq-p09",
      "difficulty": "medium",
      "concept": "Mealy Machine Output",
      "year": "Standard Exam Prep",
      "text": "The output of a Mealy sequential machine is a function of:",
      "options": [
        "Present state and present input",
        "Present state only",
        "Present input only",
        "Next state only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMealy outputs depend on current state and current inputs; Moore outputs depend on current state only."
    },
    {
      "id": "seq-p10",
      "difficulty": "hard",
      "concept": "Sequence Detector Non-overlapping",
      "year": "Standard Exam Prep",
      "text": "Detecting '110' non-overlapping using a Moore machine requires minimum how many states?",
      "options": [
        "4",
        "3",
        "5",
        "2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA Moore sequence detector for an $n$-bit pattern requires $n + 1 = 3 + 1 = \\mathbf{4}$ states."
    },
    {
      "id": "seq-p11",
      "difficulty": "easy",
      "concept": "S-R Latch NAND Inactive",
      "year": "Standard Exam Prep",
      "text": "For an SR latch built with NAND gates, the inactive (hold) state occurs when inputs $\\overline{S}, \\overline{R}$ are:",
      "options": [
        "1, 1",
        "0, 0",
        "1, 0",
        "0, 1"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor active-low inputs (NAND latch), holding state requires $\\overline{S} = 1, \\overline{R} = 1$."
    },
    {
      "id": "seq-p12",
      "difficulty": "medium",
      "concept": "Shift Register PISO",
      "year": "Standard Exam Prep",
      "text": "In a Parallel-In Serial-Out (PISO) shift register, data is loaded:",
      "options": [
        "All bits in parallel in 1 clock, then shifted out serially",
        "Serially over $n$ clocks",
        "Without any clock",
        "In reverse order only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nParallel loading occurs simultaneously; shifting out requires 1 clock cycle per bit."
    },
    {
      "id": "seq-p13",
      "difficulty": "hard",
      "concept": "Excitation Table T",
      "year": "Standard Exam Prep",
      "text": "To cause a transition from $Q = 1$ to $Q^+ = 0$, the required input to a T flip-flop is:",
      "options": [
        "$T = 1$",
        "$T = 0$",
        "Don't care",
        "$T = Q$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$T = Q \\oplus Q^+ = 1 \\oplus 0 = \\mathbf{1}$."
    },
    {
      "id": "seq-p14",
      "difficulty": "medium",
      "concept": "Frequency Division",
      "year": "Standard Exam Prep",
      "text": "A single toggle (T) flip-flop driven by clock frequency $f$ outputs a square wave with frequency:",
      "options": [
        "$f / 2$",
        "$2f$",
        "$f$",
        "$f / 4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA flip-flop toggling on each clock edge halves the frequency ($f/2$)."
    },
    {
      "id": "seq-p15",
      "difficulty": "easy",
      "concept": "Master-Slave Clocking",
      "year": "Standard Exam Prep",
      "text": "In a Master-Slave flip-flop, the master is active during one clock phase while the slave is active during:",
      "options": [
        "The opposite clock phase",
        "The same phase",
        "Both phases",
        "Neither phase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMaster and slave are clocked with complementary clock signals, preventing feed-through."
    }
  ],
  "coa-pipeline": [
    {
      "id": "pipe-p01",
      "difficulty": "medium",
      "concept": "RAW Dependency",
      "year": "Standard Exam Prep",
      "text": "In instruction sequence $I_1: \\text{ADD R1, R2, R3}$ and $I_2: \\text{SUB R4, R1, R5}$, the hazard is:",
      "options": [
        "RAW (True dependency)",
        "WAR (Anti-dependency)",
        "WAW (Output dependency)",
        "Control hazard"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$I_2$ reads R1 before $I_1$ writes R1 $\\implies$ Read-After-Write (RAW)."
    },
    {
      "id": "pipe-p02",
      "difficulty": "easy",
      "concept": "Pipeline Throughput",
      "year": "Standard Exam Prep",
      "text": "Pipeline throughput is defined as:",
      "options": [
        "Number of instructions completed per unit time",
        "Clock period",
        "Total time to execute one instruction",
        "Number of stages"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThroughput $= \\frac{\\text{Number of completed instructions}}{\\text{Total execution time}}$."
    },
    {
      "id": "pipe-p03",
      "difficulty": "medium",
      "concept": "Pipeline Speedup Formula",
      "year": "Standard Exam Prep",
      "text": "For a $k$-stage pipeline executing $n$ instructions, total cycles required is:",
      "options": [
        "$k + n - 1$",
        "$k \\times n$",
        "$n - k$",
        "$k^n$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFirst instruction completes in $k$ cycles; remaining $n - 1$ instructions complete at 1 cycle each: $k + n - 1$."
    },
    {
      "id": "pipe-p04",
      "difficulty": "hard",
      "concept": "Branch Penalty Flush",
      "year": "Standard Exam Prep",
      "text": "When a conditional branch is taken in a 5-stage pipeline without branch prediction, instructions fetched in stages 2 and 3 must be:",
      "options": [
        "Flushed (converted to NOPs)",
        "Executed normally",
        "Stored in cache",
        "Deferred to WB"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIncorrectly prefetched instructions are discarded/flushed by setting control signals to NOPs."
    },
    {
      "id": "pipe-p05",
      "difficulty": "medium",
      "concept": "Forwarding Unit Purpose",
      "year": "Standard Exam Prep",
      "text": "Operand forwarding (bypassing) in a pipeline solves data hazards by:",
      "options": [
        "Routing results directly from ALU/MEM outputs to execution inputs before writing to registers",
        "Stalling the pipeline for 3 cycles",
        "Reordering code at compile time",
        "Flushing the instruction"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nForwarding multiplexers feed newly computed values directly from pipeline registers to ALU inputs."
    },
    {
      "id": "pipe-p06",
      "difficulty": "easy",
      "concept": "Load-Use Penalty",
      "year": "Standard Exam Prep",
      "text": "Even with data forwarding, a `LOAD` followed immediately by a dependent ALU instruction requires:",
      "options": [
        "1 stall cycle",
        "0 stall cycles",
        "3 stall cycles",
        "5 stall cycles"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nData from memory is only ready at the end of MEM stage, requiring 1 bubble before EX."
    },
    {
      "id": "pipe-p07",
      "difficulty": "hard",
      "concept": "Structural Hazard Cache",
      "year": "Standard Exam Prep",
      "text": "Separating instruction cache (I-cache) and data cache (D-cache) in Harvard architecture eliminates:",
      "options": [
        "Structural hazard on memory access",
        "RAW data hazards",
        "Branch control hazards",
        "WAR hazards"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIndependent ports allow IF (instruction fetch) and MEM (data access) to proceed concurrently without conflict."
    },
    {
      "id": "pipe-p08",
      "difficulty": "medium",
      "concept": "Superscalar Degree",
      "year": "Standard Exam Prep",
      "text": "A 4-way superscalar processor can issue at most:",
      "options": [
        "4 instructions per clock cycle",
        "1 instruction every 4 cycles",
        "4 threads simultaneously",
        "16 instructions per cycle"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAn $m$-way superscalar processor has $m$ parallel execution pipelines issuing up to $m$ instructions/cycle."
    },
    {
      "id": "pipe-p09",
      "difficulty": "hard",
      "concept": "Tomasulo Algorithm",
      "year": "Standard Exam Prep",
      "text": "Tomasulo's algorithm enables dynamic scheduling and out-of-order execution using:",
      "options": [
        "Reservation stations and Common Data Bus (CDB)",
        "Static branch prediction tables",
        "Single accumulator",
        "Harvard buses"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nReservation stations buffer operands and snoop the CDB, eliminating WAR/WAW hazards through register renaming."
    },
    {
      "id": "pipe-p10",
      "difficulty": "medium",
      "concept": "Delayed Branch Slot",
      "year": "Standard Exam Prep",
      "text": "In delayed branching, the compiler fills the delay slot with:",
      "options": [
        "An instruction that is valid and safe to execute whether branch is taken or not",
        "A NOP instruction always",
        "The branch target instruction",
        "An interrupt handler"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCompilers schedule useful, independent instructions into the branch delay slot to avoid wasted cycles."
    },
    {
      "id": "pipe-p11",
      "difficulty": "easy",
      "concept": "Ideal Pipeline CPI",
      "year": "Standard Exam Prep",
      "text": "In an ideal pipeline without hazards or stalls, the Cycles Per Instruction (CPI) equals:",
      "options": [
        "1.0",
        "0",
        "k (number of stages)",
        "0.5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIn an ideal pipeline, exactly 1 instruction finishes every clock cycle $\\implies \\text{CPI} = 1$."
    },
    {
      "id": "pipe-p12",
      "difficulty": "hard",
      "concept": "Precise Interrupts",
      "year": "Standard Exam Prep",
      "text": "An interrupt is called 'precise' if:",
      "options": [
        "All instructions prior to the faulting instruction have completed, and none after have altered processor state",
        "The interrupt occurs on a clock edge",
        "The program cannot resume",
        "Cache is fully flushed"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPrecise interrupts ensure a clean architectural state using reorder buffers (ROB) before retirement."
    }
  ],
  "cd-parse": [
    {
      "id": "parse-p01",
      "difficulty": "medium",
      "concept": "LL(1) First and Follow",
      "year": "Standard Exam Prep",
      "text": "A grammar is LL(1) if and only if for every non-terminal with rules $A \\to \\alpha \\mid \\beta$:",
      "options": [
        "$\\text{FIRST}(\\alpha) \\cap \\text{FIRST}(\\beta) = \\emptyset$ and disjoint FOLLOW if nullable",
        "Grammar contains left recursion",
        "It has shift-reduce conflicts",
        "Number of terminals equals non-terminals"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLL(1) requires disjoint FIRST sets and no conflict between FIRST and FOLLOW for nullable symbols."
    },
    {
      "id": "parse-p02",
      "difficulty": "easy",
      "concept": "Bottom-Up Parsing Action",
      "year": "Standard Exam Prep",
      "text": "Shift-reduce parsers perform parsing by building the parse tree from:",
      "options": [
        "Leaves to the root",
        "Root to the leaves",
        "Middle outward",
        "Right to left only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBottom-up parsers start with input tokens (leaves) and reduce them upward to the start symbol (root)."
    },
    {
      "id": "parse-p03",
      "difficulty": "medium",
      "concept": "Handle Definition",
      "year": "Standard Exam Prep",
      "text": "In bottom-up parsing, a 'handle' is defined as:",
      "options": [
        "A substring of a sentential form that matches a production RHS and whose reduction represents a reverse rightmost derivation step",
        "The first terminal in the input",
        "A stack overflow indicator",
        "The lookahead symbol"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA handle is the specific sub-string reduced in canonical rightmost derivation in reverse."
    },
    {
      "id": "parse-p04",
      "difficulty": "hard",
      "concept": "LALR(1) vs LR(1) States",
      "year": "Standard Exam Prep",
      "text": "LALR(1) parsing tables are constructed from LR(1) items by:",
      "options": [
        "Merging LR(1) states that have identical cores (sets of LR(0) items)",
        "Removing lookahead symbols",
        "Adding duplicate states",
        "Eliminating epsilon transitions"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLALR(1) merges states with identical cores, reducing table size to that of SLR(1) while retaining lookahead."
    },
    {
      "id": "parse-p05",
      "difficulty": "medium",
      "concept": "Shift-Reduce Conflict",
      "year": "Standard Exam Prep",
      "text": "A shift-reduce conflict in an LR parser occurs when the parser cannot decide whether to:",
      "options": [
        "Shift the lookahead token or reduce by a production rule",
        "Reduce by two different production rules",
        "Accept the string or report error",
        "Pop or push the stack"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nShift-reduce conflict occurs when both a shift action and a reduce action are valid in the same state."
    },
    {
      "id": "parse-p06",
      "difficulty": "easy",
      "concept": "Left Recursion in Top-Down",
      "year": "Standard Exam Prep",
      "text": "Top-down predictive parsers (like LL(1)) cannot handle grammars with:",
      "options": [
        "Left recursion",
        "Right recursion",
        "Terminal symbols",
        "Epsilon productions"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nImmediate left recursion causes top-down parsers to loop infinitely without consuming input."
    },
    {
      "id": "parse-p07",
      "difficulty": "hard",
      "concept": "Reduce-Reduce Conflict Cause",
      "year": "Standard Exam Prep",
      "text": "In an LR parser, a reduce-reduce conflict indicates:",
      "options": [
        "Grammar is ambiguous or not in the parser class",
        "Input string is syntactically invalid",
        "Lookahead buffer is empty",
        "Stack is full"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nReduce-reduce conflicts arise when two distinct reductions are possible for the same lookahead."
    },
    {
      "id": "parse-p08",
      "difficulty": "medium",
      "concept": "Viable Prefix",
      "year": "Standard Exam Prep",
      "text": "A viable prefix in LR parsing is a prefix of a right-sentential form that:",
      "options": [
        "Does not extend past the right end of the handle",
        "Contains all terminals",
        "Is generated by start symbol directly",
        "Cannot be shifted"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nViable prefixes are prefixes of right sentential forms that do not extend beyond the handle."
    },
    {
      "id": "parse-p09",
      "difficulty": "easy",
      "concept": "Lexical Analyzer Output",
      "year": "Standard Exam Prep",
      "text": "The output of the lexical analysis phase (lexer) is a stream of:",
      "options": [
        "Tokens",
        "Parse trees",
        "Target machine code",
        "Three-address code"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe scanner converts character streams into classified tokens with optional attribute values."
    },
    {
      "id": "parse-p10",
      "difficulty": "medium",
      "concept": "Operator Precedence Grammar",
      "year": "Standard Exam Prep",
      "text": "An operator precedence grammar has the restriction that:",
      "options": [
        "No production has $\\epsilon$ on RHS and no two non-terminals appear adjacent",
        "All rules must be right-recursive",
        "Every rule is in CNF",
        "Must be LL(1)"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nOperator precedence grammars forbid $\\epsilon$-productions and adjacent non-terminals on RHS."
    },
    {
      "id": "parse-p11",
      "difficulty": "hard",
      "concept": "YACC Parser Type",
      "year": "Standard Exam Prep",
      "text": "The parser generator tool YACC (Bison) generates which type of parser?",
      "options": [
        "LALR(1) parser",
        "LL(1) parser",
        "Recursive descent parser",
        "Operator precedence parser"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nYACC generates LALR(1) bottom-up table-driven shift-reduce parsers."
    },
    {
      "id": "parse-p12",
      "difficulty": "medium",
      "concept": "Follow Set of Start Symbol",
      "year": "Standard Exam Prep",
      "text": "The FOLLOW set of the start symbol $S$ of a grammar always contains:",
      "options": [
        "$\\$$ (end of input marker)",
        "$\\epsilon$",
        "All terminals",
        "Start symbol itself"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy convention, the end-of-input marker $\\$$ is always placed in $\\text{FOLLOW}(S)$."
    }
  ],
  "os-deadlock": [
    {
      "id": "dead-p01",
      "difficulty": "easy",
      "concept": "Deadlock 4 Conditions",
      "year": "Standard Exam Prep",
      "text": "Which of the following is NOT one of Coffman's four necessary conditions for deadlock?",
      "options": [
        "Preemption allowed",
        "Mutual exclusion",
        "Hold and wait",
        "Circular wait"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe four Coffman conditions are: Mutual Exclusion, Hold and Wait, **No Preemption**, and Circular Wait."
    },
    {
      "id": "dead-p02",
      "difficulty": "medium",
      "concept": "Banker's Algorithm Need",
      "year": "Standard Exam Prep",
      "text": "In Banker's algorithm, if Allocation is $A$ and Max is $M$, the Need matrix is computed as:",
      "options": [
        "$M - A$",
        "$A - M$",
        "$M + A$",
        "$M \\times A$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\text{Need}[i, j] = \\text{Max}[i, j] - \\text{Allocation}[i, j]$$"
    },
    {
      "id": "dead-p03",
      "difficulty": "hard",
      "concept": "Circular Wait Prevention",
      "year": "Standard Exam Prep",
      "text": "Circular wait condition can be prevented by:",
      "options": [
        "Imposing a total ordering on all resource types and requesting in increasing order",
        "Preempting CPU",
        "Allowing infinite resources",
        "Killing all processes"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nHavender's linear ordering requires processes to acquire resources strictly in ascending numerical order, preventing cycles."
    },
    {
      "id": "dead-p04",
      "difficulty": "medium",
      "concept": "Safe State Definition",
      "year": "Standard Exam Prep",
      "text": "A state is safe in deadlock avoidance if:",
      "options": [
        "There exists at least one safe sequence of processes that can finish without deadlock",
        "Deadlock has already occurred",
        "No process holds any resource",
        "All resources are free"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA state is safe if the system can allocate resources up to each process's maximum claim in some sequence without deadlock."
    },
    {
      "id": "dead-p05",
      "difficulty": "easy",
      "concept": "Binary Semaphore Values",
      "year": "Standard Exam Prep",
      "text": "A binary semaphore can take only which values?",
      "options": [
        "0 and 1",
        "Any non-negative integer",
        "Negative integers only",
        "True and False only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBinary semaphores are initialized to 1 and alternate strictly between 0 and 1."
    },
    {
      "id": "dead-p06",
      "difficulty": "medium",
      "concept": "Counting Semaphore Signal",
      "year": "Standard Exam Prep",
      "text": "Executing `signal()` (or V) operation on a semaphore:",
      "options": [
        "Increments its value by 1",
        "Decrements its value by 1",
        "Sets its value to 0",
        "Blocks the calling process"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n`signal(S)` increments $S$. If processes were waiting ($S \\le 0$), one is awakened."
    },
    {
      "id": "dead-p07",
      "difficulty": "hard",
      "concept": "Dining Philosophers Deadlock",
      "year": "Standard Exam Prep",
      "text": "The classical Dining Philosophers problem can deadlock if every philosopher:",
      "options": [
        "Picks up their left fork simultaneously",
        "Picks up both forks together atomically",
        "Eats one at a time",
        "Refuses to eat"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIf all 5 philosophers simultaneously grab their left fork, all right forks are unavailable $\\implies$ circular wait deadlock."
    },
    {
      "id": "dead-p08",
      "difficulty": "medium",
      "concept": "Peterson Algorithm",
      "year": "Standard Exam Prep",
      "text": "Peterson's solution solves the critical section problem for:",
      "options": [
        "Two concurrent processes",
        "Any number of processes",
        "Distributed systems only",
        "Single thread"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPeterson's classic algorithm guarantees mutual exclusion, progress, and bounded waiting for 2 processes using `turn` and `flag` arrays."
    },
    {
      "id": "dead-p09",
      "difficulty": "easy",
      "concept": "Critical Section Definition",
      "year": "Standard Exam Prep",
      "text": "A critical section is a piece of code that:",
      "options": [
        "Accesses shared resources that must not be concurrently accessed by multiple processes",
        "Executes with highest CPU priority",
        "Runs in kernel mode only",
        "Cannot be interrupted by timer"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCritical sections manipulate shared variables/data structures requiring mutual exclusion."
    },
    {
      "id": "dead-p10",
      "difficulty": "hard",
      "concept": "Priority Inversion Solution",
      "year": "Standard Exam Prep",
      "text": "Priority inversion (low-priority task holds resource needed by high-priority task) is solved using:",
      "options": [
        "Priority Inheritance Protocol",
        "First-Come First-Served",
        "Aging",
        "Round Robin"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPriority inheritance temporarily elevates the priority of the low-priority resource holder to that of the blocked high-priority task."
    },
    {
      "id": "dead-p11",
      "difficulty": "medium",
      "concept": "Test-and-Set Instruction",
      "year": "Standard Exam Prep",
      "text": "The hardware `TestAndSet` instruction is executed:",
      "options": [
        "Atomically (uninterruptibly)",
        "In user mode only",
        "Over multiple clock cycles with interrupts enabled",
        "By the compiler"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nHardware test-and-set executes atomically in a single memory cycle, enabling lock implementation."
    },
    {
      "id": "dead-p12",
      "difficulty": "medium",
      "concept": "Monitor in OS",
      "year": "Standard Exam Prep",
      "text": "A monitor in concurrent programming is:",
      "options": [
        "A high-level synchronization construct with automatic mutual exclusion and condition variables",
        "A hardware video display",
        "A process scheduler",
        "A deadlock detection algorithm"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMonitors encapsulate shared data and methods, guaranteeing that only one thread executes inside the monitor at any time."
    }
  ],
  "os-mem": [
    {
      "id": "mem-p01",
      "difficulty": "medium",
      "concept": "Page Table Base Register",
      "year": "Standard Exam Prep",
      "text": "The hardware register pointing to the base address of the active page table in physical memory is:",
      "options": [
        "Page Table Base Register (PTBR)",
        "Program Counter (PC)",
        "Instruction Register (IR)",
        "Memory Address Register (MAR)"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPTBR holds the starting physical address of the page table for the running process."
    },
    {
      "id": "mem-p02",
      "difficulty": "easy",
      "concept": "Page Fault Definition",
      "year": "Standard Exam Prep",
      "text": "A page fault trap occurs when:",
      "options": [
        "An accessed page is not currently present in physical main memory",
        "Memory is corrupted",
        "Virtual address is invalid",
        "Page table is full"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA page fault is an interrupt raised by the MMU when a page marked 'invalid' (not in RAM) is referenced."
    },
    {
      "id": "mem-p03",
      "difficulty": "hard",
      "concept": "Two-Level Paging Address Split",
      "year": "Standard Exam Prep",
      "text": "In a 32-bit virtual address system with 4 KB page size ($2^{12}$ bytes) and 4-byte PTEs, outer page table index bits are:",
      "options": [
        "10 bits",
        "12 bits",
        "20 bits",
        "8 bits"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nOffset $= 12$ bits. Page table has $2^{20}$ entries $\\implies$ outer index $= 10$ bits, inner index $= 10$ bits ($10 + 10 + 12 = 32$)."
    },
    {
      "id": "mem-p04",
      "difficulty": "medium",
      "concept": "Internal Fragmentation",
      "year": "Standard Exam Prep",
      "text": "Internal fragmentation occurs in memory management systems using:",
      "options": [
        "Fixed partitioning or paging",
        "Variable-size dynamic partitioning",
        "Pure segmentation",
        "Compaction"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nInternal fragmentation occurs when allocated block size exceeds process requirement (e.g. fixed pages)."
    },
    {
      "id": "mem-p05",
      "difficulty": "easy",
      "concept": "External Fragmentation Solution",
      "year": "Standard Exam Prep",
      "text": "External fragmentation in contiguous memory allocation can be eliminated by:",
      "options": [
        "Paging or compaction",
        "Decreasing process size",
        "Increasing swap space",
        "Using larger registers"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nNon-contiguous allocation (paging) or memory compaction eliminates external fragmentation."
    },
    {
      "id": "mem-p06",
      "difficulty": "medium",
      "concept": "Inverted Page Table",
      "year": "Standard Exam Prep",
      "text": "An inverted page table has one entry for each:",
      "options": [
        "Frame of physical memory",
        "Page of virtual memory",
        "Process in the system",
        "Disk sector"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nInverted page tables scale with physical RAM size: exactly 1 entry per physical page frame."
    },
    {
      "id": "mem-p07",
      "difficulty": "hard",
      "concept": "Thrashing Cause",
      "year": "Standard Exam Prep",
      "text": "Thrashing in virtual memory occurs when:",
      "options": [
        "Processes spend more time paging than executing because working sets exceed available memory",
        "CPU speed exceeds memory speed",
        "Disk is corrupted",
        "Deadlock occurs"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nWhen sum of active working sets exceeds physical frames, continuous page faulting causes CPU utilization to plunge."
    },
    {
      "id": "mem-p08",
      "difficulty": "medium",
      "concept": "LRU Stack Algorithm",
      "year": "Standard Exam Prep",
      "text": "LRU page replacement is immune to Belady's anomaly because it belongs to the class of:",
      "options": [
        "Stack algorithms",
        "FIFO algorithms",
        "Greedy algorithms",
        "Random algorithms"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIn stack algorithms, the set of pages in $n$ frames is always a subset of pages in $n+1$ frames, preventing Belady's anomaly."
    },
    {
      "id": "mem-p09",
      "difficulty": "easy",
      "concept": "Dirty Bit Function",
      "year": "Standard Exam Prep",
      "text": "The dirty (modified) bit in a page table entry indicates whether:",
      "options": [
        "The page has been modified since being loaded and must be written back to disk",
        "The page contains an error",
        "The page is read-only",
        "The page is shared"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDirty bit tracks writes. Clean pages are simply discarded on eviction; dirty pages must be written back to swap."
    },
    {
      "id": "mem-p10",
      "difficulty": "hard",
      "concept": "Second-Chance Clock Algorithm",
      "year": "Standard Exam Prep",
      "text": "The Clock page replacement algorithm approximates LRU by inspecting:",
      "options": [
        "A reference bit (0 or 1) on each frame",
        "The arrival timestamp",
        "Process priority",
        "The page size"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nClock algorithm checks reference bit: if 0, replaces; if 1, clears to 0 and advances hand."
    },
    {
      "id": "mem-p11",
      "difficulty": "medium",
      "concept": "Copy-On-Write COW",
      "year": "Standard Exam Prep",
      "text": "In modern operating systems, the `fork()` system call optimizes memory usage using:",
      "options": [
        "Copy-On-Write (COW)",
        "Immediate full page duplication",
        "Zero-copy sockets",
        "Virtual memory bypass"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nChild and parent share read-only pages; a physical copy is only created if either process writes to a page."
    },
    {
      "id": "mem-p12",
      "difficulty": "medium",
      "concept": "TLB Miss Penalty",
      "year": "Standard Exam Prep",
      "text": "When a TLB miss occurs, the processor must:",
      "options": [
        "Access main memory to look up the page table",
        "Crash the process",
        "Generate a disk read",
        "Restart the CPU"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nOn TLB miss, a page table walk accesses main memory (or L2/L3 cache) to retrieve the frame translation."
    }
  ],
  "dbms-norm": [
    {
      "id": "norm-p01",
      "difficulty": "medium",
      "concept": "Closure of Attribute",
      "year": "Standard Exam Prep",
      "text": "Given $R(A,B,C,D)$ and $F = \\{A \\to B, B \\to C, C \\to D\\}$, what is $A^+$?",
      "options": [
        "$\\{A, B, C, D\\}$",
        "$\\{A, B\\}$",
        "$\\{A, C\\}$",
        "$\\{B, C, D\\}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$A \\to B \\to C \\to D \\implies A^+ = \\{A, B, C, D\\}$."
    },
    {
      "id": "norm-p02",
      "difficulty": "easy",
      "concept": "1NF Requirement",
      "year": "Standard Exam Prep",
      "text": "A relational table is in First Normal Form (1NF) if and only if:",
      "options": [
        "All attribute values are atomic (no multi-valued or composite attributes)",
        "Every non-prime attribute depends on the primary key",
        "No transitive dependencies exist",
        "All candidate keys are single attributes"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n1NF enforces atomicity of values in every domain."
    },
    {
      "id": "norm-p03",
      "difficulty": "medium",
      "concept": "2NF Partial Dependency",
      "year": "Standard Exam Prep",
      "text": "A relation in 1NF is in Second Normal Form (2NF) if it has:",
      "options": [
        "No partial dependencies of non-prime attributes on any candidate key",
        "No transitive dependencies",
        "All FDs with superkey LHS",
        "No multivalued dependencies"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n2NF eliminates partial functional dependency on proper subsets of candidate keys."
    },
    {
      "id": "norm-p04",
      "difficulty": "hard",
      "concept": "3NF Definition",
      "year": "Standard Exam Prep",
      "text": "A relation is in 3NF if for every non-trivial FD $X \\to Y$:",
      "options": [
        "$X$ is a superkey OR $Y$ is a prime attribute",
        "$X$ is a superkey always",
        "$Y$ is a superkey",
        "$X$ and $Y$ are both non-prime"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n3NF allows $X \\to Y$ if $X$ is a superkey OR $Y$ consists of prime attributes."
    },
    {
      "id": "norm-p05",
      "difficulty": "medium",
      "concept": "BCNF Strict Superkey",
      "year": "Standard Exam Prep",
      "text": "In Boyce-Codd Normal Form (BCNF), for every non-trivial functional dependency $X \\to Y$:",
      "options": [
        "$X$ must be a superkey",
        "$Y$ must be a superkey",
        "$Y$ must be prime",
        "$X$ can be any attribute"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBCNF strictly requires the determinant $X$ to be a superkey for all non-trivial dependencies."
    },
    {
      "id": "norm-p06",
      "difficulty": "hard",
      "concept": "Lossless Decomposition Test",
      "year": "Standard Exam Prep",
      "text": "Decomposing $R(A,B,C)$ with $A \\to B$ into $R_1(A,B)$ and $R_2(A,C)$ is:",
      "options": [
        "Lossless-join because $R_1 \\cap R_2 = A$, and $A \\to AB$",
        "Lossy because $B$ and $C$ are separated",
        "Lossy always",
        "Non-deterministic"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$R_1 \\cap R_2 = A$. Since $A \\to B$, $A$ is a key of $R_1$, guaranteeing lossless decomposition."
    },
    {
      "id": "norm-p07",
      "difficulty": "medium",
      "concept": "Canonical Cover",
      "year": "Standard Exam Prep",
      "text": "A canonical cover (minimal cover) of a set of functional dependencies $F$ is:",
      "options": [
        "A minimal equivalent set of FDs with no redundant dependencies or extraneous attributes",
        "The set of all candidate keys",
        "The power set of attributes",
        "The closure $F^+$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCanonical cover is irreducible with singleton RHS and no extraneous LHS/RHS attributes."
    },
    {
      "id": "norm-p08",
      "difficulty": "easy",
      "concept": "Prime Attribute",
      "year": "Standard Exam Prep",
      "text": "A prime attribute of a relation is an attribute that:",
      "options": [
        "Is a member of at least one candidate key",
        "Is the primary key only",
        "Is a foreign key",
        "Has non-null values only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAny attribute belonging to any candidate key is termed a prime attribute."
    },
    {
      "id": "norm-p09",
      "difficulty": "hard",
      "concept": "4NF Multivalued Dependency",
      "year": "Standard Exam Prep",
      "text": "Fourth Normal Form (4NF) deals with eliminating:",
      "options": [
        "Non-trivial multivalued dependencies ($X \\twoheadrightarrow Y$) where $X$ is not a superkey",
        "Partial dependencies",
        "Transitive dependencies",
        "Join dependencies"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n4NF addresses multivalued dependencies (MVDs) independent of functional dependencies."
    },
    {
      "id": "norm-p10",
      "difficulty": "medium",
      "concept": "Armstrong Axiom Transitivity",
      "year": "Standard Exam Prep",
      "text": "According to Armstrong's axioms, if $X \\to Y$ and $Y \\to Z$, then:",
      "options": [
        "$X \\to Z$ (Transitivity)",
        "$X \\to YZ$",
        "$Y \\to X$",
        "$XY \\to Z$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTransitivity rule: $X \\to Y$ and $Y \\to Z \\implies X \\to Z$."
    },
    {
      "id": "norm-p11",
      "difficulty": "easy",
      "concept": "Reflexivity Rule",
      "year": "Standard Exam Prep",
      "text": "Armstrong's reflexivity rule states that if $Y \\subseteq X$, then:",
      "options": [
        "$X \\to Y$",
        "$Y \\to X$",
        "$X \\to XY$",
        "$Y \\to \\emptyset$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTrivial functional dependencies follow from reflexivity: if $Y \\subseteq X$, then $X \\to Y$."
    },
    {
      "id": "norm-p12",
      "difficulty": "medium",
      "concept": "Dependency Preservation",
      "year": "Standard Exam Prep",
      "text": "A decomposition is dependency-preserving if the union of FDs of decomposed tables:",
      "options": [
        "Logically implies all original FDs $(F_1 \\cup F_2)^+ = F^+$",
        "Has no foreign keys",
        "Is in BCNF",
        "Contains only single attribute keys"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPreserving dependencies ensures constraints can be checked without computing expensive joins."
    }
  ],
  "cn-dll": [
    {
      "id": "dll-p01",
      "difficulty": "medium",
      "concept": "Bit Stuffing Rule",
      "year": "Standard Exam Prep",
      "text": "In HDLC bit-oriented framing, a 0 is stuffed after how many consecutive 1s in the data?",
      "options": [
        "5 consecutive 1s",
        "6 consecutive 1s",
        "7 consecutive 1s",
        "4 consecutive 1s"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTo prevent false flag patterns (`01111110`), a 0 is stuffed after every five consecutive 1s."
    },
    {
      "id": "dll-p02",
      "difficulty": "easy",
      "concept": "Byte Stuffing Escape",
      "year": "Standard Exam Prep",
      "text": "In byte stuffing, if the payload byte happens to be the FLAG byte, it is preceded by:",
      "options": [
        "An ESC (Escape) byte",
        "A zero byte",
        "A second flag byte",
        "A parity byte"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nByte stuffing inserts an ESC character before any accidental FLAG or ESC byte in data."
    },
    {
      "id": "dll-p03",
      "difficulty": "medium",
      "concept": "Stop-and-Wait Efficiency Formula",
      "year": "Standard Exam Prep",
      "text": "In Stop-and-Wait protocol with propagation delay $T_p$ and transmission time $T_t$, efficiency $\\eta$ is:",
      "options": [
        "$\\frac{1}{1 + 2a}$ where $a = T_p / T_t$",
        "$\\frac{1}{1 + a}$",
        "$\\frac{a}{1 + 2a}$",
        "$1 - 2a$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\eta = \\frac{T_t}{T_t + 2T_p} = \\frac{1}{1 + 2(T_p / T_t)} = \\mathbf{\\frac{1}{1 + 2a}}$$"
    },
    {
      "id": "dll-p04",
      "difficulty": "hard",
      "concept": "Go-Back-N Window Size",
      "year": "Standard Exam Prep",
      "text": "For an $m$-bit sequence number in Go-Back-N ARQ, the maximum sender window size is:",
      "options": [
        "$2^m - 1$",
        "$2^m$",
        "$2^{m-1}$",
        "$m$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTo prevent ambiguity between new and duplicate frames, $W_s \\le 2^m - 1$."
    },
    {
      "id": "dll-p05",
      "difficulty": "hard",
      "concept": "Selective Repeat Window Size",
      "year": "Standard Exam Prep",
      "text": "For an $m$-bit sequence number in Selective Repeat ARQ, sender and receiver window sizes must be at most:",
      "options": [
        "$2^{m-1}$",
        "$2^m - 1$",
        "$2^m$",
        "$m/2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIn SR, $W_s + W_r \\le 2^m$. With symmetric windows $W_s = W_r$, max size is $2^{m-1}$."
    },
    {
      "id": "dll-p06",
      "difficulty": "medium",
      "concept": "CRC Error Detection",
      "year": "Standard Exam Prep",
      "text": "CRC (Cyclic Redundancy Check) is based on:",
      "options": [
        "Polynomial binary division using modulo-2 arithmetic",
        "Summing bytes",
        "Matrix inversion",
        "Hashing with MD5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCRC performs modulo-2 polynomial division, appending the remainder (FCS) to data."
    },
    {
      "id": "dll-p07",
      "difficulty": "easy",
      "concept": "Hamming Distance Error Detection",
      "year": "Standard Exam Prep",
      "text": "To detect up to $d$ single-bit errors, the minimum Hamming distance of the code must be:",
      "options": [
        "$d + 1$",
        "$2d + 1$",
        "$d$",
        "$2d$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDetection requires $d_{min} \\ge d + 1$; correction of $t$ errors requires $d_{min} \\ge 2t + 1$."
    },
    {
      "id": "dll-p08",
      "difficulty": "hard",
      "concept": "CSMA/CD Condition",
      "year": "Standard Exam Prep",
      "text": "In CSMA/CD, the condition ensuring collisions are always detected before transmission finishes is:",
      "options": [
        "$T_t \\ge 2 T_p$",
        "$T_t \\ge T_p$",
        "$T_p \\ge 2 T_t$",
        "$T_t = T_p / 2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTransmission time must be at least twice one-way propagation time: $T_t \\ge 2T_p$."
    },
    {
      "id": "dll-p09",
      "difficulty": "medium",
      "concept": "Pure ALOHA Max Efficiency",
      "year": "Standard Exam Prep",
      "text": "The maximum channel utilization of Pure ALOHA is:",
      "options": [
        "$1/(2e) \\approx 18.4\\%$",
        "$1/e \\approx 36.8\\%$",
        "$50\\%$",
        "$100\\%$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$S = G e^{-2G}$. Differentiating gives maximum at $G = 0.5 \\implies S_{max} = 1/(2e) \\approx 18.4\\%$."
    },
    {
      "id": "dll-p10",
      "difficulty": "medium",
      "concept": "Slotted ALOHA Max Efficiency",
      "year": "Standard Exam Prep",
      "text": "The maximum channel utilization of Slotted ALOHA is:",
      "options": [
        "$1/e \\approx 36.8\\%$",
        "$1/(2e) \\approx 18.4\\%$",
        "$50\\%$",
        "$63.2\\%$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$S = G e^{-G}$. Differentiating gives maximum at $G = 1 \\implies S_{max} = 1/e \\approx 36.8\\%$."
    },
    {
      "id": "dll-p11",
      "difficulty": "hard",
      "concept": "Binary Exponential Backoff",
      "year": "Standard Exam Prep",
      "text": "In Ethernet CSMA/CD after $i$ collisions, the backoff delay is chosen randomly from $[0, 2^k - 1]$ where $k = \\min(i, 10)$. After 3 collisions, range is:",
      "options": [
        "0 to 7 slot times",
        "0 to 3",
        "0 to 8",
        "0 to 15"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$k = 3 \\implies 2^3 - 1 = 7$. Random integer in $[0, 7]$ slot times."
    },
    {
      "id": "dll-p12",
      "difficulty": "easy",
      "concept": "MAC Address Length",
      "year": "Standard Exam Prep",
      "text": "An IEEE 802.3 Ethernet physical (MAC) address has a length of:",
      "options": [
        "48 bits (6 bytes)",
        "32 bits",
        "64 bits",
        "128 bits"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nStandard Ethernet MAC addresses are 48 bits (displayed as 12 hexadecimal digits)."
    },
    {
      "id": "dll-p13",
      "difficulty": "medium",
      "concept": "Flow Control vs Error Control",
      "year": "Standard Exam Prep",
      "text": "Flow control at the Data Link layer prevents:",
      "options": [
        "A fast sender from overwhelming a slow receiver",
        "Transmission errors in cables",
        "Unauthorized access",
        "Packet routing loops"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFlow control balances sender and receiver transmission and buffer processing rates."
    },
    {
      "id": "dll-p14",
      "difficulty": "medium",
      "concept": "Piggybacking Concept",
      "year": "Standard Exam Prep",
      "text": "Piggybacking in bidirectional sliding window protocols means:",
      "options": [
        "Attaching an acknowledgment (ACK) onto an outgoing data frame",
        "Sending two packets simultaneously",
        "Compressing packets",
        "Encrypting headers"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPiggybacking delays ACK temporarily to hitch a ride on the next outgoing data frame, saving bandwidth."
    }
  ],
  "se-testing": [
    {
      "id": "se-p01",
      "difficulty": "medium",
      "concept": "Cyclomatic Complexity Formula",
      "year": "Standard Exam Prep",
      "text": "In a control flow graph with $E$ edges and $N$ nodes, cyclomatic complexity $V(G)$ is:",
      "options": [
        "$E - N + 2P$",
        "$E + N - 2$",
        "$N - E + 2$",
        "$E / N$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMcCabe's formula: $V(G) = E - N + 2P$ where $P$ is the number of connected components."
    },
    {
      "id": "se-p02",
      "difficulty": "easy",
      "concept": "White Box Testing Focus",
      "year": "Standard Exam Prep",
      "text": "White-box testing is also known as:",
      "options": [
        "Structural / Glass-box testing",
        "Functional testing",
        "Black-box testing",
        "Beta testing"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nWhite-box testing inspects internal logic, control paths, conditions, and code branches."
    },
    {
      "id": "se-p03",
      "difficulty": "medium",
      "concept": "Equivalence Partitioning",
      "year": "Standard Exam Prep",
      "text": "Equivalence partitioning divides the input domain into classes where:",
      "options": [
        "A test of one representative value assumes all values in that class behave identically",
        "Every single integer is tested",
        "Only boundary values are used",
        "Output is always true"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nInput data is partitioned into valid and invalid equivalence classes to minimize test cases."
    },
    {
      "id": "se-p04",
      "difficulty": "hard",
      "concept": "Cohesion Types Best",
      "year": "Standard Exam Prep",
      "text": "Which type of cohesion is the highest and most desirable?",
      "options": [
        "Functional cohesion",
        "Temporal cohesion",
        "Coincidental cohesion",
        "Logical cohesion"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFunctional cohesion (all elements contribute to a single well-defined task) is the highest form."
    },
    {
      "id": "se-p05",
      "difficulty": "medium",
      "concept": "Coupling Types Worst",
      "year": "Standard Exam Prep",
      "text": "Which type of coupling is the tightest (most undesirable)?",
      "options": [
        "Content coupling",
        "Data coupling",
        "Stamp coupling",
        "Control coupling"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nContent coupling (one module modifies or depends on internal implementation of another) is the worst."
    },
    {
      "id": "se-p06",
      "difficulty": "easy",
      "concept": "Agile Sprint Length",
      "year": "Standard Exam Prep",
      "text": "In standard Scrum methodology, a typical sprint lasts:",
      "options": [
        "1 to 4 weeks",
        "6 months",
        "1 day",
        "1 year"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nScrum sprints are timeboxed iterations typically ranging from 2 to 4 weeks."
    },
    {
      "id": "se-p07",
      "difficulty": "hard",
      "concept": "Basis Path Testing",
      "year": "Standard Exam Prep",
      "text": "Basis path testing guarantees that:",
      "options": [
        "Every independent statement and execution path is exercised at least once",
        "Zero bugs exist in the software",
        "All possible inputs are tested",
        "Performance is optimal"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBasis path testing finds linearly independent paths in CFG, executing every statement at least once."
    },
    {
      "id": "se-p08",
      "difficulty": "medium",
      "concept": "COCOMO Organic Mode",
      "year": "Standard Exam Prep",
      "text": "In Boehm's COCOMO model, the Organic mode applies to:",
      "options": [
        "Small, experienced teams working in familiar environments with flexible requirements",
        "Strict embedded systems",
        "Large complex aerospace systems",
        "Contract programming only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nOrganic mode applies to relatively small, straightforward projects with relaxed specifications."
    },
    {
      "id": "se-p09",
      "difficulty": "easy",
      "concept": "Black Box Equivalence",
      "year": "Standard Exam Prep",
      "text": "Black-box testing methods evaluate software based on:",
      "options": [
        "Functional requirements and specifications without looking at internal code",
        "Source code syntax",
        "Compiler optimization",
        "Memory leak profilers"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBlack-box testing treats the system as an opaque box, testing input-output contracts against specs."
    },
    {
      "id": "se-p10",
      "difficulty": "medium",
      "concept": "Smoke Testing",
      "year": "Standard Exam Prep",
      "text": "A smoke test in software engineering is designed to:",
      "options": [
        "Verify that the critical, basic functions of a new build work before deeper testing",
        "Measure system temperature",
        "Stress test maximum network load",
        "Check code formatting"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSmoke testing (sanity testing) verifies core functionality to determine if a build is stable enough for deeper testing."
    },
    {
      "id": "se-p11",
      "difficulty": "hard",
      "concept": "Mutation Score Formula",
      "year": "Standard Exam Prep",
      "text": "The mutation score of a test suite is given by:",
      "options": [
        "$\\frac{\\text{Killed Mutants}}{\\text{Total Non-Equivalent Mutants}} \\times 100$",
        "$\\frac{\\text{Total Mutants}}{\\text{Killed Mutants}}$",
        "$\\text{Lines of Code} \\times 100$",
        "$\\text{Passed Tests} / \\text{Total Tests}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMutation score measures adequacy: ratio of killed mutants to total non-equivalent mutants."
    },
    {
      "id": "se-p12",
      "difficulty": "medium",
      "concept": "Waterfall Model Disadvantage",
      "year": "Standard Exam Prep",
      "text": "The major disadvantage of the traditional Waterfall model is:",
      "options": [
        "Working software is delivered very late in the lifecycle, making changes difficult",
        "It requires too many tests",
        "It has no documentation",
        "It cannot be planned"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nWaterfall's rigid sequential phases prevent feedback and customer validation until late in development."
    },
    {
      "id": "se-p13",
      "difficulty": "easy",
      "concept": "Daily Standup Duration",
      "year": "Standard Exam Prep",
      "text": "In Scrum, the daily stand-up meeting is strictly timeboxed to:",
      "options": [
        "15 minutes",
        "1 hour",
        "30 minutes",
        "5 minutes"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDaily stand-ups are brief 15-minute synchronization meetings."
    },
    {
      "id": "se-p14",
      "difficulty": "hard",
      "concept": "Cyclomatic Complexity Region",
      "year": "Standard Exam Prep",
      "text": "In a planar control flow graph, cyclomatic complexity $V(G)$ is also equal to:",
      "options": [
        "Number of enclosed regions $+ 1$",
        "Number of nodes",
        "Number of edges",
        "Number of loops squared"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEuler's planar formula equates cyclomatic complexity directly to the number of bounded planar regions plus 1."
    },
    {
      "id": "se-p15",
      "difficulty": "medium",
      "concept": "Integration Stubs vs Drivers",
      "year": "Standard Exam Prep",
      "text": "In Bottom-Up integration testing, which component is required?",
      "options": [
        "Drivers (to invoke lower modules under test)",
        "Stubs",
        "Compilers",
        "Emulators"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBottom-up integration uses Drivers to simulate callers for newly integrated lower-level modules."
    }
  ],
  "zoo-physio": [
    {
      "id": "zoo-physio-01",
      "difficulty": "easy",
      "concept": "Salivary Amylase",
      "year": "Standard Exam Prep",
      "text": "Salivary amylase (ptyalin) initiates the digestion of which nutrient in the human oral cavity?",
      "options": [
        "Starch (carbohydrates) into maltose",
        "Proteins into peptides",
        "Fats into fatty acids",
        "Nucleic acids into nucleotides"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Salivary amylase hydrolyzes about 30% of dietary starch into disaccharide maltose at pH 6.8."
    },
    {
      "id": "zoo-physio-02",
      "difficulty": "medium",
      "concept": "Bile Salt Emulsification",
      "year": "Standard Exam Prep",
      "text": "Bile juice contains no digestive enzymes yet plays a crucial role in digestion by:",
      "options": [
        "Emulsifying dietary fats into small micelles",
        "Digesting proteins",
        "Neutralizing acidic chyme only",
        "Absorbing carbohydrates"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bile salts (sodium taurocholate and glycocholate) lower surface tension, breaking fat globules into micelles."
    },
    {
      "id": "zoo-physio-03",
      "difficulty": "hard",
      "concept": "Oxygen-Hemoglobin Curve",
      "year": "Standard Exam Prep",
      "text": "The oxygen-hemoglobin dissociation curve is characteristically shaped like a:",
      "options": [
        "Sigmoid (S-shaped) curve",
        "Hyperbola",
        "Straight line",
        "Parabola"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cooperative binding of oxygen to the four heme subunits produces a sigmoid curve."
    },
    {
      "id": "zoo-physio-04",
      "difficulty": "easy",
      "concept": "Bohr Effect",
      "year": "Standard Exam Prep",
      "text": "A shift of the oxygen dissociation curve to the right (Bohr effect) is caused by:",
      "options": [
        "Increased $CO_2$ partial pressure, increased $H^+$ (lower pH), and higher temperature",
        "Decreased $CO_2$ and higher pH",
        "Decreased temperature",
        "Decreased 2,3-DPG"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Higher $pCO_2$, acidity, and temperature lower hemoglobin's oxygen affinity, enhancing $O_2$ release at tissues."
    },
    {
      "id": "zoo-physio-05",
      "difficulty": "medium",
      "concept": "Carbon Dioxide Transport",
      "year": "Standard Exam Prep",
      "text": "The majority (~70%) of carbon dioxide is transported in blood as:",
      "options": [
        "Bicarbonate ions ($HCO_3^-$) in plasma",
        "Carbaminohemoglobin",
        "Dissolved $CO_2$ gas in plasma",
        "Carbonic acid"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Carbonic anhydrase inside RBCs converts $CO_2$ to bicarbonate, transported in plasma via chloride shift."
    },
    {
      "id": "zoo-physio-06",
      "difficulty": "hard",
      "concept": "Cardiac Cycle Duration",
      "year": "Standard Exam Prep",
      "text": "In a healthy human with heart rate 75 beats per minute, the duration of one complete cardiac cycle is:",
      "options": [
        "0.8 seconds",
        "0.6 seconds",
        "1.0 second",
        "0.4 seconds"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$60\\text{ s} / 75\\text{ beats} = \\mathbf{0.8\\text{ seconds}}$."
    },
    {
      "id": "zoo-physio-07",
      "difficulty": "easy",
      "concept": "First Heart Sound Lub",
      "year": "Standard Exam Prep",
      "text": "The first heart sound ('lub') is caused by the closure of:",
      "options": [
        "Atrioventricular (Tricuspid and Bicuspid/Mitral) valves",
        "Semilunar valves",
        "Aortic valve only",
        "Vena cava"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ventricular systole begins with closure of AV valves, producing the low-pitched 'lub' sound."
    },
    {
      "id": "zoo-physio-08",
      "difficulty": "medium",
      "concept": "Second Heart Sound Dub",
      "year": "Standard Exam Prep",
      "text": "The second heart sound ('dub') is produced by the closure of:",
      "options": [
        "Semilunar (aortic and pulmonary) valves",
        "AV valves",
        "Mitral valve",
        "Tricuspid valve"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Onset of ventricular diastole causes closure of semilunar valves, creating the crisp 'dub' sound."
    },
    {
      "id": "zoo-physio-09",
      "difficulty": "hard",
      "concept": "Glomerular Filtration Rate",
      "year": "Standard Exam Prep",
      "text": "In a healthy adult human, the normal Glomerular Filtration Rate (GFR) is approximately:",
      "options": [
        "125 mL/min (180 L/day)",
        "50 mL/min",
        "250 mL/min",
        "1000 mL/min"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Kidneys filter ~125 mL of plasma per minute, forming ~180 L of filtrate per day (99% reabsorbed)."
    },
    {
      "id": "zoo-physio-10",
      "difficulty": "easy",
      "concept": "Juxtaglomerular Apparatus",
      "year": "Standard Exam Prep",
      "text": "A fall in GFR triggers Juxtaglomerular (JG) cells to release which enzyme into the bloodstream?",
      "options": [
        "Renin",
        "Aldosterone",
        "Angiotensinogen",
        "Atrial natriuretic factor"
      ],
      "correctAnswerIndex": 0,
      "explanation": "JG cells secrete renin, initiating the Renin-Angiotensin-Aldosterone System (RAAS) to restore blood pressure."
    },
    {
      "id": "zoo-physio-11",
      "difficulty": "medium",
      "concept": "Counter-Current Mechanism",
      "year": "Standard Exam Prep",
      "text": "The counter-current multiplier mechanism for concentrating urine operates between the:",
      "options": [
        "Loop of Henle and vasa recta",
        "PCT and DCT",
        "Glomerulus and Bowman's capsule",
        "Collecting duct and ureter"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Opposing flows in the limbs of Henle's loop and vasa recta establish an osmotic medullary gradient."
    },
    {
      "id": "zoo-physio-12",
      "difficulty": "hard",
      "concept": "Sarcomere Unit",
      "year": "Standard Exam Prep",
      "text": "The functional contractile unit of a muscle myofibril bounded by two adjacent Z-lines is called a:",
      "options": [
        "Sarcomere",
        "Sarcolemma",
        "Sarcoplasm",
        "Myosin filament"
      ],
      "correctAnswerIndex": 0,
      "explanation": "A sarcomere spans from one Z-disc to the next Z-disc."
    },
    {
      "id": "zoo-physio-13",
      "difficulty": "easy",
      "concept": "Troponin Calcium Binding",
      "year": "Standard Exam Prep",
      "text": "During skeletal muscle contraction, calcium ions released from sarcoplasmic reticulum bind to:",
      "options": [
        "Troponin C",
        "Tropomyosin",
        "Myosin head",
        "Actin active site"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Calcium binds troponin C, shifting tropomyosin away to expose myosin-binding sites on actin."
    },
    {
      "id": "zoo-physio-14",
      "difficulty": "medium",
      "concept": "Resting Membrane Potential",
      "year": "Standard Exam Prep",
      "text": "The resting membrane potential of a typical mammalian neuron is approximately:",
      "options": [
        "-70 mV",
        "+30 mV",
        "0 mV",
        "-90 mV"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Sodium-potassium pumps ($3\\;Na^+$ out, $2\\;K^+$ in) maintain resting potential near -70 mV."
    },
    {
      "id": "zoo-physio-15",
      "difficulty": "hard",
      "concept": "Action Potential Depolarization",
      "year": "Standard Exam Prep",
      "text": "Depolarization during nerve impulse generation is caused by rapid influx of:",
      "options": [
        "Sodium ions ($Na^+$)",
        "Potassium ions ($K^+$)",
        "Chloride ions ($Cl^-$)",
        "Calcium ions ($Ca^{2+}$)"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Opening of voltage-gated $Na^+$ channels allows rapid $Na^+$ influx into the axon."
    },
    {
      "id": "zoo-physio-16",
      "difficulty": "easy",
      "concept": "Synaptic Transmission",
      "year": "Standard Exam Prep",
      "text": "The neurotransmitter acetylcholine at a chemical synapse is broken down by the enzyme:",
      "options": [
        "Acetylcholinesterase",
        "Choline acetyltransferase",
        "Monoamine oxidase",
        "ATPase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Acetylcholinesterase in the synaptic cleft rapidly hydrolyzes acetylcholine into acetate and choline."
    },
    {
      "id": "zoo-physio-17",
      "difficulty": "medium",
      "concept": "Cerebellum Function",
      "year": "Standard Exam Prep",
      "text": "The part of the human brain responsible for maintaining posture, equilibrium, and precision of voluntary movements is:",
      "options": [
        "Cerebellum",
        "Cerebrum",
        "Medulla oblongata",
        "Hypothalamus"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The cerebellum coordinates somatic motor activities and balance."
    },
    {
      "id": "zoo-physio-18",
      "difficulty": "hard",
      "concept": "Medulla Oblongata Center",
      "year": "Standard Exam Prep",
      "text": "Vital centers regulating respiration, cardiovascular reflexes, and gastric secretions are located in the:",
      "options": [
        "Medulla oblongata",
        "Cerebrum",
        "Pons",
        "Thalamus"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The medulla oblongata controls autonomic homeostatic functions."
    },
    {
      "id": "zoo-physio-19",
      "difficulty": "easy",
      "concept": "Hypothalamus Regulation",
      "year": "Standard Exam Prep",
      "text": "Thermoregulation (body temperature control) and hunger/thirst centers reside in the:",
      "options": [
        "Hypothalamus",
        "Pituitary gland",
        "Hippocampus",
        "Amygdala"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The hypothalamus serves as the master neuroendocrine and autonomic regulator."
    },
    {
      "id": "zoo-physio-20",
      "difficulty": "medium",
      "concept": "ADH Vasopressin",
      "year": "Standard Exam Prep",
      "text": "Antidiuretic hormone (ADH / vasopressin) is synthesized by the hypothalamus and acts on the kidney to:",
      "options": [
        "Increase water reabsorption in the DCT and collecting duct",
        "Promote water excretion (diuresis)",
        "Inhibit sodium reabsorption",
        "Dilate renal arterioles"
      ],
      "correctAnswerIndex": 0,
      "explanation": "ADH inserts aquaporin water channels into collecting duct membranes, conserving water."
    },
    {
      "id": "zoo-physio-21",
      "difficulty": "hard",
      "concept": "Adrenaline Flight-or-Fight",
      "year": "Standard Exam Prep",
      "text": "Epinephrine (adrenaline) and norepinephrine are emergency hormones secreted by the:",
      "options": [
        "Adrenal medulla",
        "Adrenal cortex",
        "Thyroid gland",
        "Parathyroid gland"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The adrenal medulla secretes catecholamines in response to sympathetic activation."
    },
    {
      "id": "zoo-physio-22",
      "difficulty": "easy",
      "concept": "Glucagon Action",
      "year": "Standard Exam Prep",
      "text": "Glucagon secreted by alpha cells of the pancreas acts primarily on the liver to promote:",
      "options": [
        "Glycogenolysis and gluconeogenesis (raising blood glucose)",
        "Glycogenesis",
        "Lipogenesis",
        "Protein synthesis"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Glucagon is a hyperglycemic hormone stimulating breakdown of glycogen to glucose."
    },
    {
      "id": "zoo-physio-23",
      "difficulty": "medium",
      "concept": "Thyroid Goiter",
      "year": "Standard Exam Prep",
      "text": "Deficiency of dietary iodine leads to enlargement of the thyroid gland, a condition known as:",
      "options": [
        "Goiter",
        "Cretinism",
        "Grave's disease",
        "Cushing's syndrome"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Low iodine impairs $T_3 / T_4$ synthesis, causing excessive TSH stimulation and thyroid hypertrophy."
    },
    {
      "id": "zoo-physio-24",
      "difficulty": "hard",
      "concept": "Parathyroid Calcium Regulation",
      "year": "Standard Exam Prep",
      "text": "Parathyroid hormone (PTH) regulates mineral homeostasis by:",
      "options": [
        "Increasing blood calcium levels ($Ca^{2+}$)",
        "Lowering blood calcium levels",
        "Increasing blood phosphate levels",
        "Inhibiting bone resorption"
      ],
      "correctAnswerIndex": 0,
      "explanation": "PTH is a hypercalcemic hormone stimulating osteoclast bone resorption and renal $Ca^{2+}$ reabsorption."
    },
    {
      "id": "zoo-physio-25",
      "difficulty": "easy",
      "concept": "Calcitonin Action",
      "year": "Standard Exam Prep",
      "text": "Calcitonin hormone is secreted by parafollicular cells of the thyroid to:",
      "options": [
        "Lower blood calcium levels",
        "Raise blood calcium levels",
        "Stimulate osteoclasts",
        "Increase parathyroid activity"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Calcitonin opposes PTH by promoting calcium deposition in bones, lowering plasma $Ca^{2+}$."
    }
  ],
  "ssc-arith": [
    {
      "id": "ssc-arith-01",
      "difficulty": "easy",
      "concept": "Percentage Increase",
      "year": "Standard Exam Prep",
      "text": "If the price of sugar increases by 25%, by what percentage must a household reduce consumption to keep expenditure constant?",
      "options": [
        "20%",
        "25%",
        "16.67%",
        "15%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Reduction $= \\frac{r}{100 + r} \\times 100 = \\frac{25}{125} \\times 100 = \\mathbf{20\\%}$."
    },
    {
      "id": "ssc-arith-02",
      "difficulty": "medium",
      "concept": "Profit and Loss Markup",
      "year": "Standard Exam Prep",
      "text": "A shopkeeper marks an article 40% above cost price and allows a discount of 15%. His profit percentage is:",
      "options": [
        "19%",
        "25%",
        "20%",
        "17.5%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Let CP = 100 $\\implies$ MP = 140. SP $= 140 \\times 0.85 = 119 \\implies$ Profit $= 19\\%$."
    },
    {
      "id": "ssc-arith-03",
      "difficulty": "hard",
      "concept": "Simple Interest Doubling",
      "year": "Standard Exam Prep",
      "text": "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?",
      "options": [
        "12.5%",
        "10%",
        "15%",
        "8%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$SI = P = \\frac{P \\times R \\times 8}{100} \\implies R = \\frac{100}{8} = \\mathbf{12.5\\%}$."
    },
    {
      "id": "ssc-arith-04",
      "difficulty": "easy",
      "concept": "Compound vs Simple Difference",
      "year": "Standard Exam Prep",
      "text": "The difference between compound interest and simple interest on \\$5,000 for 2 years at 10% per annum is:",
      "options": [
        "\\$50",
        "\\$100",
        "\\$25",
        "\\$75"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Difference $= P (r/100)^2 = 5000 (10/100)^2 = 5000 \\times 0.01 = \\mathbf{\\$50}$."
    },
    {
      "id": "ssc-arith-05",
      "difficulty": "medium",
      "concept": "Ratio and Proportion Share",
      "year": "Standard Exam Prep",
      "text": "Divide \\$1,200 among A, B, and C in the ratio 2 : 3 : 5. What is B's share?",
      "options": [
        "\\$360",
        "\\$240",
        "\\$600",
        "\\$400"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Total parts $= 2 + 3 + 5 = 10$. B's share $= \\frac{3}{10} \\times 1200 = \\mathbf{\\$360}$."
    },
    {
      "id": "ssc-arith-06",
      "difficulty": "hard",
      "concept": "Time and Work Alternate Days",
      "year": "Standard Exam Prep",
      "text": "A can do a piece of work in 10 days, and B in 15 days. If they work on alternate days starting with A, how many days will it take?",
      "options": [
        "12 days",
        "10 days",
        "14 days",
        "11 days"
      ],
      "correctAnswerIndex": 0,
      "explanation": "LCM of (10, 15) = 30 units. A does 3 u/day, B does 2 u/day. In 2 days: 5 units. $30 / 5 = 6$ cycles of 2 days $= \\mathbf{12\\text{ days}}$."
    },
    {
      "id": "ssc-arith-07",
      "difficulty": "easy",
      "concept": "Pipes and Cisterns",
      "year": "Standard Exam Prep",
      "text": "Pipe A can fill a tank in 6 hours, and Pipe B can empty it in 8 hours. If both pipes are opened together, the tank fills in:",
      "options": [
        "24 hours",
        "14 hours",
        "12 hours",
        "18 hours"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Net rate $= \\frac{1}{6} - \\frac{1}{8} = \\frac{4 - 3}{24} = \\frac{1}{24} \\implies \\mathbf{24\\text{ hours}}$."
    },
    {
      "id": "ssc-arith-08",
      "difficulty": "medium",
      "concept": "Trains Crossing Pole",
      "year": "Standard Exam Prep",
      "text": "A train 240 m long passes a telephone pole in 12 seconds. The speed of the train in km/h is:",
      "options": [
        "72 km/h",
        "60 km/h",
        "54 km/h",
        "80 km/h"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Speed $= 240 / 12 = 20\\text{ m/s} = 20 \\times \\frac{18}{5} = \\mathbf{72\\text{ km/h}}$."
    },
    {
      "id": "ssc-arith-09",
      "difficulty": "hard",
      "concept": "Boats and Streams",
      "year": "Standard Exam Prep",
      "text": "A boat travels 24 km downstream in 2 hours and 16 km upstream in 2 hours. What is the speed of the stream?",
      "options": [
        "2 km/h",
        "10 km/h",
        "4 km/h",
        "3 km/h"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Downstream speed $= 24/2 = 12\\text{ km/h}$. Upstream speed $= 16/2 = 8\\text{ km/h}$. Stream speed $= \\frac{12 - 8}{2} = \\mathbf{2\\text{ km/h}}$."
    },
    {
      "id": "ssc-arith-10",
      "difficulty": "easy",
      "concept": "Weighted Average",
      "year": "Standard Exam Prep",
      "text": "A class of 30 students has average weight 50 kg, and another section of 20 students has average weight 60 kg. Combined average weight is:",
      "options": [
        "54 kg",
        "55 kg",
        "52 kg",
        "56 kg"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$Avg = \\frac{30(50) + 20(60)}{30 + 20} = \\frac{1500 + 1200}{50} = \\frac{2700}{50} = \\mathbf{54\\text{ kg}}$."
    },
    {
      "id": "ssc-arith-11",
      "difficulty": "medium",
      "concept": "Alligation Rule",
      "year": "Standard Exam Prep",
      "text": "In what ratio should tea at \\$60/kg be mixed with tea at \\$85/kg to produce a blend worth \\$70/kg?",
      "options": [
        "3 : 2",
        "2 : 3",
        "4 : 1",
        "5 : 2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "By rule of alligation: $\\frac{85 - 70}{70 - 60} = \\frac{15}{10} = \\mathbf{3 : 2}$."
    },
    {
      "id": "ssc-arith-12",
      "difficulty": "hard",
      "concept": "Ages Problem",
      "year": "Standard Exam Prep",
      "text": "The ratio of present ages of father and son is 5 : 2. After 5 years, the ratio becomes 2 : 1. The father's present age is:",
      "options": [
        "25 years",
        "35 years",
        "30 years",
        "40 years"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$\\frac{5x + 5}{2x + 5} = \\frac{2}{1} \\implies 5x + 5 = 4x + 10 \\implies x = 5$. Father's age $= 5(5) = \\mathbf{25\\text{ years}}$."
    },
    {
      "id": "ssc-arith-13",
      "difficulty": "easy",
      "concept": "HCF and LCM Product",
      "year": "Standard Exam Prep",
      "text": "The HCF and LCM of two numbers are 12 and 240 respectively. If one number is 48, what is the other number?",
      "options": [
        "60",
        "72",
        "40",
        "50"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Number 2 $= \\frac{HCF \\times LCM}{\\text{Number 1}} = \\frac{12 \\times 240}{48} = \\mathbf{60}$."
    },
    {
      "id": "ssc-arith-14",
      "difficulty": "medium",
      "concept": "Divisibility Rule of 9",
      "year": "Standard Exam Prep",
      "text": "If the number $5432x7$ is divisible by 9, what is the value of digit $x$?",
      "options": [
        "6",
        "4",
        "5",
        "7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Sum of digits $= 5 + 4 + 3 + 2 + x + 7 = 21 + x$. Next multiple of 9 is 27 $\\implies x = 27 - 21 = \\mathbf{6}$."
    },
    {
      "id": "ssc-arith-15",
      "difficulty": "hard",
      "concept": "Remainder Theorem",
      "year": "Standard Exam Prep",
      "text": "What is the remainder when $17^{200}$ is divided by 18?",
      "options": [
        "1",
        "17",
        "0",
        "16"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$17 \\equiv -1 \\pmod{18} \\implies (-1)^{200} = \\mathbf{1}$."
    },
    {
      "id": "ssc-arith-16",
      "difficulty": "easy",
      "concept": "Successive Discounts",
      "year": "Standard Exam Prep",
      "text": "Two successive discounts of 20% and 10% are equivalent to a single discount of:",
      "options": [
        "28%",
        "30%",
        "25%",
        "26%"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Single discount $= d_1 + d_2 - \\frac{d_1 d_2}{100} = 20 + 10 - \\frac{200}{100} = 30 - 2 = \\mathbf{28\\%}$."
    },
    {
      "id": "ssc-arith-17",
      "difficulty": "medium",
      "concept": "Partnership Profit Ratio",
      "year": "Standard Exam Prep",
      "text": "A invests \\$10,000 for 6 months, and B invests \\$15,000 for 4 months. How should a profit of \\$6,000 be divided?",
      "options": [
        "\\$3,000 each (1 : 1 ratio)",
        "\\$4,000 to A, \\$2,000 to B",
        "\\$3,600 to A, \\$2,400 to B",
        "\\$2,000 to A, \\$4,000 to B"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ratio $= (10000 \\times 6) : (15000 \\times 4) = 60000 : 60000 = 1 : 1$. Each receives $\\mathbf{\\$3,000}$."
    },
    {
      "id": "ssc-arith-18",
      "difficulty": "hard",
      "concept": "Circle Circumference and Area",
      "year": "Standard Exam Prep",
      "text": "If the circumference of a circle is 88 cm ($\\pi = 22/7$), what is its area?",
      "options": [
        "616 cm²",
        "308 cm²",
        "154 cm²",
        "1232 cm²"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$2 \\times \\frac{22}{7} \\times r = 88 \\implies r = 14\\text{ cm}$. Area $= \\frac{22}{7} \\times 14^2 = 22 \\times 28 = \\mathbf{616\\text{ cm}^2}$."
    },
    {
      "id": "ssc-arith-19",
      "difficulty": "easy",
      "concept": "Cylinder Volume",
      "year": "Standard Exam Prep",
      "text": "A solid cylinder of radius 7 cm has height 10 cm. Its volume ($\\pi = 22/7$) is:",
      "options": [
        "1540 cm³",
        "770 cm³",
        "3080 cm³",
        "2200 cm³"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$V = \\pi r^2 h = \\frac{22}{7} \\times 49 \\times 10 = 154 \\times 10 = \\mathbf{1540\\text{ cm}^3}$."
    },
    {
      "id": "ssc-arith-20",
      "difficulty": "medium",
      "concept": "Cone Slant Height",
      "year": "Standard Exam Prep",
      "text": "A cone has base radius 6 cm and vertical height 8 cm. Its curved surface area is ($\\pi = 3.14$):",
      "options": [
        "188.4 cm²",
        "150 cm²",
        "301.4 cm²",
        "94.2 cm²"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Slant height $l = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Curved area $= \\pi r l = 3.14 \\times 6 \\times 10 = \\mathbf{188.4\\text{ cm}^2}$."
    },
    {
      "id": "ssc-arith-21",
      "difficulty": "hard",
      "concept": "Spherical Surface Area",
      "year": "Standard Exam Prep",
      "text": "The total surface area of a sphere of radius 7 cm ($\\pi = 22/7$) is:",
      "options": [
        "616 cm²",
        "154 cm²",
        "308 cm²",
        "1437 cm²"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$A = 4\\pi r^2 = 4 \\times \\frac{22}{7} \\times 49 = 4 \\times 154 = \\mathbf{616\\text{ cm}^2}$."
    },
    {
      "id": "ssc-arith-22",
      "difficulty": "easy",
      "concept": "Rhombus Area",
      "year": "Standard Exam Prep",
      "text": "The diagonals of a rhombus are 16 cm and 12 cm. What is its area?",
      "options": [
        "96 cm²",
        "192 cm²",
        "48 cm²",
        "120 cm²"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Area $= \\frac{1}{2} d_1 d_2 = \\frac{1}{2} \\times 16 \\times 12 = \\mathbf{96\\text{ cm}^2}$."
    },
    {
      "id": "ssc-arith-23",
      "difficulty": "medium",
      "concept": "Right Triangle Hypotenuse",
      "year": "Standard Exam Prep",
      "text": "The sides containing the right angle in a triangle are 9 cm and 40 cm. The hypotenuse length is:",
      "options": [
        "41 cm",
        "49 cm",
        "51 cm",
        "39 cm"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$h = \\sqrt{9^2 + 40^2} = \\sqrt{81 + 1600} = \\sqrt{1681} = \\mathbf{41\\text{ cm}}$."
    },
    {
      "id": "ssc-arith-24",
      "difficulty": "hard",
      "concept": "Trapezium Area",
      "year": "Standard Exam Prep",
      "text": "Parallel sides of a trapezium are 14 cm and 20 cm, and distance between them is 8 cm. Its area is:",
      "options": [
        "136 cm²",
        "272 cm²",
        "160 cm²",
        "112 cm²"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Area $= \\frac{1}{2}(a + b)h = \\frac{1}{2}(14 + 20)(8) = 34 \\times 4 = \\mathbf{136\\text{ cm}^2}$."
    },
    {
      "id": "ssc-arith-25",
      "difficulty": "easy",
      "concept": "Cube Surface Area",
      "year": "Standard Exam Prep",
      "text": "If the total surface area of a cube is 150 cm², what is the volume of the cube?",
      "options": [
        "125 cm³",
        "25 cm³",
        "216 cm³",
        "100 cm³"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$6a^2 = 150 \\implies a^2 = 25 \\implies a = 5\\text{ cm}$. Volume $= 5^3 = \\mathbf{125\\text{ cm}^3}$."
    }
  ],
  "ssc-reasoning": [
    {
      "id": "ssc-reasoning-01",
      "difficulty": "easy",
      "concept": "Letter Series",
      "year": "Standard Exam Prep",
      "text": "Find the missing term: B, E, H, K, ?",
      "options": [
        "N",
        "M",
        "O",
        "P"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Pattern is $+3$ letters: $K(11) + 3 = 14 = \\mathbf{N}$."
    },
    {
      "id": "ssc-reasoning-02",
      "difficulty": "medium",
      "concept": "Odd One Out Words",
      "year": "Standard Exam Prep",
      "text": "Find the odd one out among: Lion, Tiger, Leopard, Cow",
      "options": [
        "Cow (herbivore / domesticated)",
        "Lion",
        "Tiger",
        "Leopard"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cow is an herbivore and domestic mammal; the other three are wild carnivores (feline)."
    },
    {
      "id": "ssc-reasoning-03",
      "difficulty": "hard",
      "concept": "Clock Angle",
      "year": "Standard Exam Prep",
      "text": "What is the angle between the hour hand and the minute hand at 3:30?",
      "options": [
        "$75^\\circ$",
        "$90^\\circ$",
        "$60^\\circ$",
        "$85^\\circ$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Angle $= |30H - 5.5M| = |30(3) - 5.5(30)| = |90 - 165| = \\mathbf{75^\\circ}$."
    },
    {
      "id": "ssc-reasoning-04",
      "difficulty": "easy",
      "concept": "Calendar Day",
      "year": "Standard Exam Prep",
      "text": "If 1st January 2024 was a Monday, what day was 1st January 2025 (2024 is a leap year)?",
      "options": [
        "Wednesday",
        "Tuesday",
        "Thursday",
        "Monday"
      ],
      "correctAnswerIndex": 0,
      "explanation": "A leap year has 366 days ($52\\text{ weeks} + 2\\text{ odd days}$). Monday $+ 2 = \\mathbf{Wednesday}$."
    },
    {
      "id": "ssc-reasoning-05",
      "difficulty": "medium",
      "concept": "Syllogism Universal",
      "year": "Standard Exam Prep",
      "text": "Statements: All cats are animals. All animals are living beings.\\nConclusion: All cats are living beings.",
      "options": [
        "Definitely True",
        "Definitely False",
        "Cannot be determined",
        "Either true or false"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Transitive property of subset inclusion: $Cats \\subseteq Animals \\subseteq Living \\implies Cats \\subseteq Living$."
    },
    {
      "id": "ssc-reasoning-06",
      "difficulty": "hard",
      "concept": "Direction Turn",
      "year": "Standard Exam Prep",
      "text": "Ravi walks 10 m East, turns left and walks 10 m, then turns left again and walks 10 m. In which direction is he from the starting point?",
      "options": [
        "North",
        "South",
        "East",
        "West"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Net displacement: $+10\\text{ m } x, +10\\text{ m } y, -10\\text{ m } x \\implies (0, 10)$, which is directly **North**."
    },
    {
      "id": "ssc-reasoning-07",
      "difficulty": "easy",
      "concept": "Blood Relation Uncle",
      "year": "Standard Exam Prep",
      "text": "Pointing to Suresh, Priya says: 'He is the son of the only brother of my mother.' How is Suresh related to Priya?",
      "options": [
        "Cousin",
        "Brother",
        "Uncle",
        "Nephew"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Mother's only brother = Maternal Uncle. Maternal Uncle's son = **Cousin**."
    },
    {
      "id": "ssc-reasoning-08",
      "difficulty": "medium",
      "concept": "Dice Opposite Faces",
      "year": "Standard Exam Prep",
      "text": "A standard die has numbers 1 to 6. The sum of numbers on opposite faces of a standard die is always:",
      "options": [
        "7",
        "6",
        "8",
        "10"
      ],
      "correctAnswerIndex": 0,
      "explanation": "By standard specification, opposite faces sum to 7 ($1+6, 2+5, 3+4$)."
    },
    {
      "id": "ssc-reasoning-09",
      "difficulty": "hard",
      "concept": "Venn Diagram",
      "year": "Standard Exam Prep",
      "text": "Which geometric representation best represents: Fruits, Apples, and Vegetables?",
      "options": [
        "A circle for Apples inside Fruits, and a separate disjoint circle for Vegetables",
        "Three intersecting circles",
        "Three completely disjoint circles",
        "Two concentric circles inside a third"
      ],
      "correctAnswerIndex": 0,
      "explanation": "All apples are fruits (concentric), while vegetables are botanically distinct and disjoint."
    },
    {
      "id": "ssc-reasoning-10",
      "difficulty": "easy",
      "concept": "Coding Shift",
      "year": "Standard Exam Prep",
      "text": "If 'CAT' is coded as '3120' (A=1, B=2, ...), how is 'DOG' coded?",
      "options": [
        "4157",
        "4158",
        "3147",
        "5168"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$D = 4, O = 15, G = 7 \\implies \\mathbf{4157}$."
    },
    {
      "id": "ssc-reasoning-11",
      "difficulty": "medium",
      "concept": "Mirror Image",
      "year": "Standard Exam Prep",
      "text": "When viewed in a vertical plane mirror, which of the following capital English letters remains unchanged?",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Letter 'A' has vertical mirror symmetry, so its reflection is identical to the original letter."
    },
    {
      "id": "ssc-reasoning-12",
      "difficulty": "hard",
      "concept": "Missing Number Grid",
      "year": "Standard Exam Prep",
      "text": "In a $2 \\times 2$ grid with top row [4, 9] and bottom row [16, ?], the missing number is:",
      "options": [
        "25",
        "36",
        "20",
        "30"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The sequence is perfect squares: $2^2 = 4, 3^2 = 9, 4^2 = 16, 5^2 = \\mathbf{25}$."
    },
    {
      "id": "ssc-reasoning-13",
      "difficulty": "easy",
      "concept": "Ranking Problem",
      "year": "Standard Exam Prep",
      "text": "In a row of 40 students, Rohan is 14th from the left. What is his position from the right end?",
      "options": [
        "27th",
        "26th",
        "28th",
        "25th"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Position from right $= Total - Left + 1 = 40 - 14 + 1 = \\mathbf{27th}$."
    },
    {
      "id": "ssc-reasoning-14",
      "difficulty": "medium",
      "concept": "Mathematical Operator Substitution",
      "year": "Standard Exam Prep",
      "text": "If '+' means multiply and '-' means divide, what is $6 + 3 - 2$?",
      "options": [
        "9",
        "18",
        "7",
        "12"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$6 \\times 3 / 2 = 18 / 2 = \\mathbf{9}$."
    },
    {
      "id": "ssc-reasoning-15",
      "difficulty": "hard",
      "concept": "Statement and Assumption",
      "year": "Standard Exam Prep",
      "text": "Statement: 'Warning: Smoking is injurious to health.'\\nAssumption: People read warnings printed on cigarette packets.",
      "options": [
        "Assumption is implicit",
        "Assumption is not implicit",
        "Warning is unnecessary",
        "None of these"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Any public notice or warning carries the fundamental implicit assumption that it will be read and understood."
    },
    {
      "id": "ssc-reasoning-16",
      "difficulty": "easy",
      "concept": "Analogy Capital City",
      "year": "Standard Exam Prep",
      "text": "India : New Delhi :: Japan : ?",
      "options": [
        "Tokyo",
        "Kyoto",
        "Osaka",
        "Seoul"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tokyo is the capital city of Japan, analogous to New Delhi being the capital of India."
    },
    {
      "id": "ssc-reasoning-17",
      "difficulty": "medium",
      "concept": "Word Order Dictionary",
      "year": "Standard Exam Prep",
      "text": "Arrange alphabetically: 1. Plain, 2. Plane, 3. Planet, 4. Plan. Correct order is:",
      "options": [
        "4, 1, 2, 3",
        "1, 2, 3, 4",
        "4, 2, 1, 3",
        "2, 1, 4, 3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Plan (4) $\\to$ Plain (1) $\\to$ Plane (2) $\\to$ Planet (3)."
    },
    {
      "id": "ssc-reasoning-18",
      "difficulty": "hard",
      "concept": "Counting Triangles",
      "year": "Standard Exam Prep",
      "text": "How many triangles are there in a square with both diagonals drawn?",
      "options": [
        "8",
        "4",
        "6",
        "10"
      ],
      "correctAnswerIndex": 0,
      "explanation": "A square with 2 diagonals contains 4 small component triangles and 4 composite half-square triangles $= \\mathbf{8}$."
    },
    {
      "id": "ssc-reasoning-19",
      "difficulty": "easy",
      "concept": "Cube Painted Faces",
      "year": "Standard Exam Prep",
      "text": "A cube painted red on all outer surfaces is cut into 27 equal smaller cubes. How many cubes have exactly 2 faces painted?",
      "options": [
        "12",
        "8",
        "6",
        "1"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cubes with 2 painted faces lie along edges: $12 \\times (n - 2) = 12 \\times (3 - 2) = \\mathbf{12}$."
    },
    {
      "id": "ssc-reasoning-20",
      "difficulty": "medium",
      "concept": "Seating Arrangement",
      "year": "Standard Exam Prep",
      "text": "5 friends P, Q, R, S, T sit in a line facing North. Q is in the middle. P is to the immediate left of Q. Who is at position 2?",
      "options": [
        "P",
        "Q",
        "R",
        "S"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Positions 1, 2, 3, 4, 5. Middle is 3 (Q). Immediate left of Q is position 2, occupied by **P**."
    },
    {
      "id": "ssc-reasoning-21",
      "difficulty": "hard",
      "concept": "Series Differences",
      "year": "Standard Exam Prep",
      "text": "Find the next term in: 1, 4, 9, 16, 25, 36, ?",
      "options": [
        "49",
        "64",
        "45",
        "50"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Squares of consecutive natural numbers: $7^2 = \\mathbf{49}$."
    },
    {
      "id": "ssc-reasoning-22",
      "difficulty": "easy",
      "concept": "Alternating Series",
      "year": "Standard Exam Prep",
      "text": "Find the next term: 5, 25, 6, 36, 7, 49, 8, ?",
      "options": [
        "64",
        "56",
        "72",
        "81"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Pattern consists of pairs $n, n^2$: for $n = 8$, next term is $8^2 = \\mathbf{64}$."
    },
    {
      "id": "ssc-reasoning-23",
      "difficulty": "medium",
      "concept": "Analogy Currency",
      "year": "Standard Exam Prep",
      "text": "USA : Dollar :: United Kingdom : ?",
      "options": [
        "Pound",
        "Euro",
        "Franc",
        "Yen"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The official currency of the United Kingdom is the British **Pound Sterling**."
    },
    {
      "id": "ssc-reasoning-24",
      "difficulty": "hard",
      "concept": "Embedded Figure",
      "year": "Standard Exam Prep",
      "text": "A figure consisting of an arrow pointing North is rotated $90^\\circ$ clockwise. It now points:",
      "options": [
        "East",
        "West",
        "South",
        "North-East"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Clockwise rotation by $90^\\circ$ from North points directly **East**."
    },
    {
      "id": "ssc-reasoning-25",
      "difficulty": "easy",
      "concept": "Data Sufficiency",
      "year": "Standard Exam Prep",
      "text": "To find if integer $x$ is even, Statement 1: $x + 1$ is odd. Is Statement 1 sufficient?",
      "options": [
        "Yes, Statement 1 alone is sufficient",
        "No, Statement 1 alone is not sufficient",
        "Need more data",
        "Depends on sign of $x$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "If $x + 1$ is odd, $x$ must be even (odd - 1 = even). Statement 1 alone is sufficient."
    }
  ],
  "chem-org": [
    {
      "id": "chem-org-01",
      "difficulty": "easy",
      "concept": "Nomenclature",
      "year": "Standard Exam Prep",
      "text": "What is the IUPAC name of $(CH_3)_3C-CH_2-CH(CH_3)_2$?",
      "options": [
        "2,2,4-Trimethylpentane",
        "2,4,4-Trimethylpentane",
        "Isooctane",
        "2,4-Dimethylhexane"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Longest chain is pentane numbered to give substituents the lowest set of locants (2,2,4)."
    },
    {
      "id": "chem-org-02",
      "difficulty": "medium",
      "concept": "Carbocation Stability",
      "year": "Standard Exam Prep",
      "text": "The correct order of stability of carbocations is:",
      "options": [
        "$3^\\circ > 2^\\circ > 1^\\circ > \\text{methyl}$",
        "$1^\\circ > 2^\\circ > 3^\\circ$",
        "$3^\\circ > 1^\\circ > 2^\\circ$",
        "All equal"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Hyperconjugation and inductive effect stabilize tertiary carbocations most."
    },
    {
      "id": "chem-org-03",
      "difficulty": "hard",
      "concept": "SN2 Inversion",
      "year": "Standard Exam Prep",
      "text": "In an $S_N2$ reaction at a chiral center, the stereochemical outcome is:",
      "options": [
        "Complete inversion of configuration (Walden inversion)",
        "Retention of configuration",
        "Racemization",
        "Partial retention"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Backside nucleophilic attack forces complete inversion."
    },
    {
      "id": "chem-org-04",
      "difficulty": "easy",
      "concept": "Electrophilic Aromatic Substitution",
      "year": "Standard Exam Prep",
      "text": "Which substituent acts as a deactivating yet ortho/para-directing group on benzene?",
      "options": [
        "Halogens (e.g. -Cl)",
        "-NO2",
        "-OCH3",
        "-CH3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Halogens have -I electron withdrawing effect (deactivating) but +M resonance effect (ortho/para directing)."
    },
    {
      "id": "chem-org-05",
      "difficulty": "medium",
      "concept": "Aldol Condensation",
      "year": "Standard Exam Prep",
      "text": "Which compound CANNOT undergo Aldol condensation?",
      "options": [
        "Benzaldehyde",
        "Acetaldehyde",
        "Propanal",
        "Acetone"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Benzaldehyde lacks an alpha-hydrogen atom required for Aldol enolate formation."
    },
    {
      "id": "chem-org-06",
      "difficulty": "hard",
      "concept": "Cannizzaro Reaction",
      "year": "Standard Exam Prep",
      "text": "Formaldehyde reacts with concentrated NaOH to form methanol and sodium formate. This reaction is:",
      "options": [
        "Cannizzaro reaction (disproportionation)",
        "Aldol condensation",
        "Perkin reaction",
        "Reformatsky reaction"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Aldehydes without alpha-hydrogens undergo self oxidation-reduction (Cannizzaro)."
    },
    {
      "id": "chem-org-07",
      "difficulty": "easy",
      "concept": "Markovnikov Rule",
      "year": "Standard Exam Prep",
      "text": "Addition of HBr to propene yields 2-bromopropane as major product according to:",
      "options": [
        "Markovnikov's rule",
        "Saytzeff rule",
        "Hund rule",
        "Kharasch effect"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Proton adds to carbon with more hydrogens to form the more stable secondary carbocation."
    },
    {
      "id": "chem-org-08",
      "difficulty": "medium",
      "concept": "Anti-Markovnikov Addition",
      "year": "Standard Exam Prep",
      "text": "Addition of HBr to propene in the presence of organic peroxides produces:",
      "options": [
        "1-Bromopropane",
        "2-Bromopropane",
        "1,2-Dibromopropane",
        "2,2-Dibromopropane"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Free radical mechanism (peroxide effect) leads to anti-Markovnikov addition of HBr."
    },
    {
      "id": "chem-org-09",
      "difficulty": "hard",
      "concept": "Lucas Test",
      "year": "Standard Exam Prep",
      "text": "In the Lucas test, an alcohol forms cloudiness immediately at room temperature. The alcohol is:",
      "options": [
        "Tertiary alcohol",
        "Secondary alcohol",
        "Primary alcohol",
        "Methanol"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tertiary alcohols react immediately with Lucas reagent ($ZnCl_2 + conc. HCl$) forming insoluble alkyl chlorides."
    },
    {
      "id": "chem-org-10",
      "difficulty": "easy",
      "concept": "Aromaticity Huckel Rule",
      "year": "Standard Exam Prep",
      "text": "According to Huckel's rule, a planar cyclic conjugated system is aromatic if it has:",
      "options": [
        "$(4n + 2)\\;\\pi$ electrons",
        "$4n\\;\\pi$ electrons",
        "$(2n + 1)\\;\\pi$ electrons",
        "$2n\\;\\pi$ electrons"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Huckel's rule requires $(4n + 2)\\;\\pi$ electrons where $n$ is a non-negative integer."
    },
    {
      "id": "chem-org-11",
      "difficulty": "medium",
      "concept": "Diazonium Salt",
      "year": "Standard Exam Prep",
      "text": "Reaction of aniline with $NaNO_2 + HCl$ at $0-5^\\circ\\text{C}$ forms:",
      "options": [
        "Benzene diazonium chloride",
        "Nitrobenzene",
        "Chlorobenzene",
        "Phenol"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Diazotization of primary aromatic amines at ice-cold temperatures forms stable diazonium salts."
    },
    {
      "id": "chem-org-12",
      "difficulty": "hard",
      "concept": "Sandmeyer Reaction",
      "year": "Standard Exam Prep",
      "text": "Benzene diazonium chloride is converted to chlorobenzene using $Cu_2Cl_2 / HCl$. This reaction is named:",
      "options": [
        "Sandmeyer reaction",
        "Gattermann reaction",
        "Wurtz reaction",
        "Fittig reaction"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Replacement of diazo group by halogen via copper(I) halide is the Sandmeyer reaction."
    },
    {
      "id": "chem-org-13",
      "difficulty": "easy",
      "concept": "Grignard Reagent",
      "year": "Standard Exam Prep",
      "text": "Reaction of methyl magnesium bromide with formaldehyde followed by hydrolysis yields:",
      "options": [
        "Ethanol (primary alcohol)",
        "Propan-2-ol",
        "2-Methylpropan-2-ol",
        "Methanol"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$HCHO + CH_3MgBr \\to CH_3CH_2OMgBr \\xrightarrow{H_2O} CH_3CH_2OH$."
    },
    {
      "id": "chem-org-14",
      "difficulty": "medium",
      "concept": "Ozonolysis",
      "year": "Standard Exam Prep",
      "text": "Ozonolysis of an alkene produces acetone and formaldehyde. The alkene is:",
      "options": [
        "2-Methylpropene",
        "But-2-ene",
        "But-1-ene",
        "Propene"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$(CH_3)_2C=CH_2 \\xrightarrow{O_3, Zn/H_2O} (CH_3)_2C=O + HCHO$."
    },
    {
      "id": "chem-org-15",
      "difficulty": "hard",
      "concept": "Fehling Test",
      "year": "Standard Exam Prep",
      "text": "Which of the following compounds gives a red precipitate of $Cu_2O$ with Fehling's solution?",
      "options": [
        "Acetaldehyde",
        "Benzaldehyde",
        "Acetone",
        "Benzophenone"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Aliphatic aldehydes like acetaldehyde reduce Fehling's solution; aromatic aldehydes do not."
    },
    {
      "id": "chem-org-16",
      "difficulty": "easy",
      "concept": "Carboxylic Acidity",
      "year": "Standard Exam Prep",
      "text": "Which carboxylic acid is the most acidic?",
      "options": [
        "Trichloroacetic acid",
        "Dichloroacetic acid",
        "Monochloroacetic acid",
        "Acetic acid"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Strong -I electron withdrawing effect of 3 chlorine atoms stabilizes the conjugate carboxylate base."
    },
    {
      "id": "chem-org-17",
      "difficulty": "medium",
      "concept": "Clemmensen Reduction",
      "year": "Standard Exam Prep",
      "text": "Clemmensen reduction converts a carbonyl group ($>C=O$) to methylene ($-CH_2-$) using:",
      "options": [
        "$Zn-Hg / \\text{conc. } HCl$",
        "$NH_2NH_2 / KOH$",
        "$LiAlH_4$",
        "$NaBH_4$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Clemmensen reduction uses zinc amalgam and concentrated hydrochloric acid."
    },
    {
      "id": "chem-org-18",
      "difficulty": "hard",
      "concept": "Wolf-Kishner Reduction",
      "year": "Standard Exam Prep",
      "text": "Wolff-Kishner reduction converts carbonyl to alkane using:",
      "options": [
        "Hydrazine and strong base ($KOH$) in ethylene glycol",
        "$Zn-Hg / HCl$",
        "$H_2 / Pd$",
        "$Red P + HI$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Wolff-Kishner employs basic conditions ($NH_2NH_2 + KOH$)."
    },
    {
      "id": "chem-org-19",
      "difficulty": "easy",
      "concept": "Optical Activity",
      "year": "Standard Exam Prep",
      "text": "A molecule having a non-superimposable mirror image is called:",
      "options": [
        "Chiral",
        "Achiral",
        "Meso compound",
        "Geometric isomer"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Non-superimposable mirror images define chirality and exhibit optical activity."
    },
    {
      "id": "chem-org-20",
      "difficulty": "medium",
      "concept": "Friedel-Crafts Alkylation",
      "year": "Standard Exam Prep",
      "text": "The electrophile in Friedel-Crafts alkylation of benzene using $CH_3Cl$ and anhydrous $AlCl_3$ is:",
      "options": [
        "$CH_3^+$ carbocation",
        "$AlCl_4^-$",
        "$Cl^+$",
        "$CH_3^-$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$AlCl_3$ abstracts chloride ion generating the methyl carbocation electrophile."
    },
    {
      "id": "chem-org-21",
      "difficulty": "hard",
      "concept": "Phenol Acidity",
      "year": "Standard Exam Prep",
      "text": "Phenol is more acidic than ethanol because:",
      "options": [
        "Phenoxide ion is resonance stabilized",
        "Ethanol has hydrogen bonding",
        "Phenol has higher molecular weight",
        "Ethanol is aromatic"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Delocalization of negative charge over the benzene ring stabilizes phenoxide ion."
    },
    {
      "id": "chem-org-22",
      "difficulty": "easy",
      "concept": "Esterification",
      "year": "Standard Exam Prep",
      "text": "Reaction between a carboxylic acid and an alcohol in presence of acid catalyst produces:",
      "options": [
        "Ester and water",
        "Ether and hydrogen",
        "Aldehyde",
        "Amide"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$RCOOH + R'OH \\xrightarrow{H^+} RCOOR' + H_2O$ (Fischer esterification)."
    },
    {
      "id": "chem-org-23",
      "difficulty": "medium",
      "concept": "Hofmann Bromamide",
      "year": "Standard Exam Prep",
      "text": "Hofmann bromamide degradation of acetamide ($CH_3CONH_2$) yields:",
      "options": [
        "Methylamine ($CH_3NH_2$)",
        "Ethylamine",
        "Ammonia",
        "Nitromethane"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Degradation of an amide using $Br_2/KOH$ gives an amine with one less carbon atom."
    },
    {
      "id": "chem-org-24",
      "difficulty": "hard",
      "concept": "Kolbe Reaction",
      "year": "Standard Exam Prep",
      "text": "Reaction of sodium phenoxide with $CO_2$ under pressure followed by acidification gives:",
      "options": [
        "Salicylic acid (o-hydroxybenzoic acid)",
        "Salicylaldehyde",
        "Benzoic acid",
        "Picric acid"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Kolbe-Schmitt reaction synthesizes salicylic acid from phenol."
    },
    {
      "id": "chem-org-25",
      "difficulty": "easy",
      "concept": "Reimer-Tiemann Reaction",
      "year": "Standard Exam Prep",
      "text": "Phenol reacts with chloroform ($CHCl_3$) and aqueous $NaOH$ to introduce an aldehyde group ortho to $-OH$. The intermediate is:",
      "options": [
        "Dichlorocarbene ($:CCl_2$)",
        "Carbonium ion",
        "Free radical",
        "Carbanion"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Electrophile in Reimer-Tiemann reaction is neutral dichlorocarbene ($:CCl_2$)."
    }
  ],
  "chem-equil": [
    {
      "id": "chem-equil-01",
      "difficulty": "easy",
      "concept": "Equilibrium Law",
      "year": "Standard Exam Prep",
      "text": "For the reaction $A + 2B \\rightleftharpoons C$, the equilibrium expression $K_c$ is:",
      "options": [
        "$\\frac{[C]}{[A][B]^2}$",
        "$\\frac{[A][B]^2}{[C]}$",
        "$\\frac{[C]}{[A][B]}$",
        "$\\frac{[C]^2}{[A][B]}"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$K_c = [C]^1 / ([A]^1 [B]^2)$."
    },
    {
      "id": "chem-equil-02",
      "difficulty": "medium",
      "concept": "Le Chatelier Pressure",
      "year": "Standard Exam Prep",
      "text": "Increasing pressure shifts equilibrium in the direction that has:",
      "options": [
        "Fewer moles of gas",
        "More moles of gas",
        "Higher temperature",
        "Zero entropy"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Higher pressure favors the side with fewer gas moles to relieve stress."
    },
    {
      "id": "chem-equil-03",
      "difficulty": "hard",
      "concept": "Catalyst Effect",
      "year": "Standard Exam Prep",
      "text": "Adding a catalyst to a chemical system at equilibrium:",
      "options": [
        "Increases the rate of both forward and reverse reactions equally without changing $K_{eq}$",
        "Shifts equilibrium toward products",
        "Increases $K_{eq}$",
        "Decreases activation energy of forward reaction only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "A catalyst accelerates both forward and backward rates equally; $K_{eq}$ is unchanged."
    },
    {
      "id": "chem-equil-04",
      "difficulty": "easy",
      "concept": "pH of Pure Water",
      "year": "Standard Exam Prep",
      "text": "At $25^\\circ\\text{C}$, the ionic product of water $K_w$ is $10^{-14}$. In pure neutral water, pH is:",
      "options": [
        "7",
        "14",
        "1",
        "0"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$[H^+] = \\sqrt{10^{-14}} = 10^{-7} \\implies \\text{pH} = 7$."
    },
    {
      "id": "chem-equil-05",
      "difficulty": "medium",
      "concept": "Strong Base pH",
      "year": "Standard Exam Prep",
      "text": "What is the pH of a $0.01\\text{ M}$ aqueous solution of $NaOH$ at $25^\\circ\\text{C}$?",
      "options": [
        "12",
        "2",
        "14",
        "10"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$[OH^-] = 10^{-2} \\implies \\text{pOH} = 2 \\implies \\text{pH} = 14 - 2 = 12$."
    },
    {
      "id": "chem-equil-06",
      "difficulty": "hard",
      "concept": "Weak Acid Dissociation",
      "year": "Standard Exam Prep",
      "text": "For a weak acid $HA$ with dissociation constant $K_a = 10^{-5}$ and concentration $0.1\\text{ M}$, degree of dissociation $\\alpha$ is:",
      "options": [
        "$10^{-2}$",
        "$10^{-3}$",
        "$10^{-1}$",
        "$10^{-4}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ostwald's dilution law: $\\alpha = \\sqrt{K_a / C} = \\sqrt{10^{-5} / 10^{-1}} = \\sqrt{10^{-4}} = 10^{-2}$."
    },
    {
      "id": "chem-equil-07",
      "difficulty": "easy",
      "concept": "Buffer Action",
      "year": "Standard Exam Prep",
      "text": "The pH of an acidic buffer solution containing weak acid $HA$ and salt $NaA$ is given by the Henderson-Hasselbalch equation:",
      "options": [
        "$\\text{pH} = pK_a + \\log\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right)$",
        "$\\text{pH} = pK_a - \\log\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right)$",
        "$\\text{pH} = pK_w - pK_a$",
        "$\\text{pH} = pK_a \\times [\\text{Salt}]/[\\text{Acid}]$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Henderson-Hasselbalch: $\\text{pH} = pK_a + \\log([\\text{Conjugate Base}]/[\\text{Acid}])$."
    },
    {
      "id": "chem-equil-08",
      "difficulty": "medium",
      "concept": "Common Ion Effect",
      "year": "Standard Exam Prep",
      "text": "Adding solid $NaCl$ to a saturated solution of $AgCl$ causes:",
      "options": [
        "Precipitation of $AgCl$ due to common ion effect of $Cl^-$",
        "Increased solubility of $AgCl$",
        "No change",
        "Formation of chlorine gas"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Added $Cl^-$ shifts $AgCl(s) \\rightleftharpoons Ag^+ + Cl^-$ left, decreasing solubility."
    },
    {
      "id": "chem-equil-09",
      "difficulty": "hard",
      "concept": "Solubility Product Criterion",
      "year": "Standard Exam Prep",
      "text": "Precipitation of a salt occurs when the ionic product $Q_{sp}$:",
      "options": [
        "Exceeds $K_{sp}$ ($Q_{sp} > K_{sp}$)",
        "Is less than $K_{sp}$",
        "Equals $K_{sp}$",
        "Is zero"
      ],
      "correctAnswerIndex": 0,
      "explanation": "A solution is supersaturated and precipitation occurs when $Q_{sp} > K_{sp}$."
    },
    {
      "id": "chem-equil-10",
      "difficulty": "easy",
      "concept": "Salt Hydrolysis",
      "year": "Standard Exam Prep",
      "text": "An aqueous solution of ammonium chloride ($NH_4Cl$, salt of weak base and strong acid) is:",
      "options": [
        "Acidic (pH < 7)",
        "Basic (pH > 7)",
        "Neutral (pH = 7)",
        "Strongly alkaline"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$NH_4^+$ undergoes cation hydrolysis: $NH_4^+ + H_2O \\rightleftharpoons NH_3 + H_3O^+$, yielding an acidic solution."
    },
    {
      "id": "chem-equil-11",
      "difficulty": "medium",
      "concept": "Kp and Kc Relationship",
      "year": "Standard Exam Prep",
      "text": "If $\\Delta n_g = 0$ for a gaseous reaction, the relationship between $K_p$ and $K_c$ is:",
      "options": [
        "$K_p = K_c$",
        "$K_p > K_c$",
        "$K_p < K_c$",
        "$K_p = K_c RT$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$K_p = K_c(RT)^{\\Delta n_g}$. When $\\Delta n_g = 0$, $(RT)^0 = 1 \\implies K_p = K_c$."
    },
    {
      "id": "chem-equil-12",
      "difficulty": "hard",
      "concept": "Reversing Equilibrium",
      "year": "Standard Exam Prep",
      "text": "If equilibrium constant for $N_2 + 3H_2 \\rightleftharpoons 2NH_3$ is $K$, the equilibrium constant for $2NH_3 \\rightleftharpoons N_2 + 3H_2$ is:",
      "options": [
        "$1/K$",
        "$-K$",
        "$\\sqrt{K}$",
        "$K^2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Reversing the chemical equation inverts its equilibrium constant: $K' = 1/K$."
    },
    {
      "id": "chem-equil-13",
      "difficulty": "easy",
      "concept": "Halving Coefficients",
      "year": "Standard Exam Prep",
      "text": "If the reaction coefficients of an equation with equilibrium constant $K$ are divided by 2, the new equilibrium constant is:",
      "options": [
        "$\\sqrt{K}$",
        "$K/2$",
        "$2K$",
        "$K^2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Multiplying reaction by factor $n$ raises $K$ to power $n$. For $n = 1/2$, $K' = K^{1/2} = \\sqrt{K}$."
    },
    {
      "id": "chem-equil-14",
      "difficulty": "medium",
      "concept": "Endothermic Heat Shift",
      "year": "Standard Exam Prep",
      "text": "For an endothermic reaction ($\\Delta H > 0$), increasing temperature:",
      "options": [
        "Increases the value of equilibrium constant $K$",
        "Decreases $K$",
        "Does not affect $K$",
        "Decreases reaction rate"
      ],
      "correctAnswerIndex": 0,
      "explanation": "According to van 't Hoff equation, $\\ln(K_2/K_1) = \\frac{\\Delta H}{R}(1/T_1 - 1/T_2)$. For $\\Delta H > 0$, $T \\uparrow \\implies K \\uparrow$."
    },
    {
      "id": "chem-equil-15",
      "difficulty": "hard",
      "concept": "Conjugate Acid-Base",
      "year": "Standard Exam Prep",
      "text": "The conjugate base of $HCO_3^-$ (bicarbonate ion) is:",
      "options": [
        "$CO_3^{2-}$",
        "$H_2CO_3$",
        "$OH^-$",
        "$CO_2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "A conjugate base is formed by removing one proton ($H^+$): $HCO_3^- - H^+ = CO_3^{2-}$."
    },
    {
      "id": "chem-equil-16",
      "difficulty": "easy",
      "concept": "Lewis Acid Definition",
      "year": "Standard Exam Prep",
      "text": "According to Lewis theory, an acid is an:",
      "options": [
        "Electron pair acceptor",
        "Proton donor",
        "Electron pair donor",
        "Hydroxide donor"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Lewis acids accept an electron pair (e.g., $BF_3, AlCl_3$)."
    },
    {
      "id": "chem-equil-17",
      "difficulty": "medium",
      "concept": "Amphoteric Species",
      "year": "Standard Exam Prep",
      "text": "Which of the following can act as both a Bronsted acid and a Bronsted base?",
      "options": [
        "$H_2O$",
        "$HCl$",
        "$SO_4^{2-}$",
        "$NH_4^+$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Water can donate a proton to form $OH^-$ or accept a proton to form $H_3O^+$."
    },
    {
      "id": "chem-equil-18",
      "difficulty": "hard",
      "concept": "Solubility of AB3",
      "year": "Standard Exam Prep",
      "text": "For a sparingly soluble salt $AB_3$ with solubility $S$, its $K_{sp}$ expression is:",
      "options": [
        "$27 S^4$",
        "$9 S^4$",
        "$S^4$",
        "$4 S^3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$AB_3 \\rightleftharpoons A^{3+} + 3B^- \\implies K_{sp} = (S)(3S)^3 = 27S^4$."
    },
    {
      "id": "chem-equil-19",
      "difficulty": "easy",
      "concept": "Buffer Capacity",
      "year": "Standard Exam Prep",
      "text": "Buffer capacity of an acidic buffer is maximum when:",
      "options": [
        "$[\\text{Salt}] = [\\text{Acid}]$ (pH = pKa)",
        "$[\\text{Salt}] \\gg [\\text{Acid}]$",
        "$[\\text{Acid}] \\gg [\\text{Salt}]$",
        "pH = 7"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Buffer capacity peaks when $[\\text{Salt}]/[\\text{Acid}] = 1$, where $\\text{pH} = pK_a$."
    },
    {
      "id": "chem-equil-20",
      "difficulty": "medium",
      "concept": "Inert Gas Addition Constant V",
      "year": "Standard Exam Prep",
      "text": "Adding an inert gas at constant volume to an equilibrium mixture:",
      "options": [
        "Has no effect on equilibrium composition",
        "Shifts toward more moles",
        "Shifts toward fewer moles",
        "Increases total pressure and shifts left"
      ],
      "correctAnswerIndex": 0,
      "explanation": "At constant volume, partial pressures of reactants and products remain unchanged."
    },
    {
      "id": "chem-equil-21",
      "difficulty": "hard",
      "concept": "Heterogeneous Equilibrium",
      "year": "Standard Exam Prep",
      "text": "For the decomposition $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$, the equilibrium constant $K_p$ equals:",
      "options": [
        "$P_{CO_2}$",
        "$P_{CaO} \\cdot P_{CO_2} / P_{CaCO_3}$",
        "$1 / P_{CO_2}$",
        "$P_{CO_2}^2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Pure solids have activity 1, so $K_p = P_{CO_2}$."
    },
    {
      "id": "chem-equil-22",
      "difficulty": "easy",
      "concept": "Degree of Dissociation Pressure Dependence",
      "year": "Standard Exam Prep",
      "text": "For $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$, increasing total pressure will:",
      "options": [
        "Decrease the degree of dissociation $\\alpha$",
        "Increase $\\alpha$",
        "Have no effect on $\\alpha$",
        "Increase $K_p$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Increasing pressure shifts equilibrium to the left (side with fewer gas moles), decreasing $\\alpha$."
    },
    {
      "id": "chem-equil-23",
      "difficulty": "medium",
      "concept": "pOH and pH sum",
      "year": "Standard Exam Prep",
      "text": "At $25^\\circ\\text{C}$, for any aqueous solution:",
      "options": [
        "$\\text{pH} + \\text{pOH} = 14$",
        "$\\text{pH} + \\text{pOH} = 7$",
        "$\\text{pH} \\times \\text{pOH} = 14$",
        "$\\text{pH} - \\text{pOH} = 7$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$\\text{pH} + \\text{pOH} = pK_w = 14$ at $25^\\circ\\text{C}$."
    },
    {
      "id": "chem-equil-24",
      "difficulty": "hard",
      "concept": "Strong Acid-Strong Base Titration",
      "year": "Standard Exam Prep",
      "text": "At the equivalence point of a strong acid ($HCl$) and strong base ($NaOH$) titration, the pH is:",
      "options": [
        "7.0",
        "> 7.0",
        "< 7.0",
        "1.0"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Resulting salt $NaCl$ does not hydrolyze; the solution is perfectly neutral with $\\text{pH} = 7$."
    },
    {
      "id": "chem-equil-25",
      "difficulty": "easy",
      "concept": "Indicator Color Change",
      "year": "Standard Exam Prep",
      "text": "Phenolphthalein indicator turns pink in which pH range?",
      "options": [
        "8.2 to 10.0 (basic)",
        "3.1 to 4.4 (acidic)",
        "6.0 to 7.6 (neutral)",
        "1.0 to 2.5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Phenolphthalein is colorless in acid and turns pink in basic solutions above pH 8.2."
    }
  ],
  "math-calc": [
    {
      "id": "math-calc-01",
      "difficulty": "easy",
      "concept": "L'Hopital Rule",
      "year": "Standard Exam Prep",
      "text": "Evaluate $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$:",
      "options": [
        "1/2",
        "1",
        "0",
        "2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Applying L'Hopital twice: $\\lim \\frac{e^x - 1}{2x} = \\lim \\frac{e^x}{2} = 1/2$."
    },
    {
      "id": "math-calc-02",
      "difficulty": "medium",
      "concept": "Standard Limit",
      "year": "Standard Exam Prep",
      "text": "Evaluate $\\lim_{x \\to 0} (1 + 2x)^{1/x}$:",
      "options": [
        "$e^2$",
        "$e$",
        "$e^{1/2}$",
        "$1$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Form $1^\\infty$: $\\exp(\\lim_{x \\to 0} 2x / x) = e^2$."
    },
    {
      "id": "math-calc-03",
      "difficulty": "hard",
      "concept": "Rolle's Theorem",
      "year": "Standard Exam Prep",
      "text": "For $f(x) = x(x-3)$ on $[0, 3]$, the value of $c$ satisfying Rolle's theorem is:",
      "options": [
        "1.5",
        "1",
        "2",
        "0"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$f'(c) = 2c - 3 = 0 \\implies c = 3/2 = 1.5$."
    },
    {
      "id": "math-calc-04",
      "difficulty": "easy",
      "concept": "Mean Value Theorem",
      "year": "Standard Exam Prep",
      "text": "Lagrange's Mean Value Theorem guarantees a point $c \\in (a, b)$ such that:",
      "options": [
        "$f'(c) = \\frac{f(b) - f(a)}{b - a}$",
        "$f'(c) = 0$",
        "$f(c) = 0$",
        "$f''(c) = 0$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "LMVT states the instantaneous rate of change equals average rate of change."
    },
    {
      "id": "math-calc-05",
      "difficulty": "medium",
      "concept": "Leibniz Rule",
      "year": "Standard Exam Prep",
      "text": "The derivative of $F(x) = \\int_0^{x^2} \\cos(t)\\,dt$ is:",
      "options": [
        "$2x \\cos(x^2)$",
        "$\\cos(x^2)$",
        "$2x \\sin(x^2)$",
        "$-2x \\cos(x^2)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "By Leibniz integral rule: $\\frac{d}{dx}F(x) = \\cos(x^2) \\cdot \\frac{d}{dx}(x^2) = 2x \\cos(x^2)$."
    },
    {
      "id": "math-calc-06",
      "difficulty": "hard",
      "concept": "Definite Integral Symmetry",
      "year": "Standard Exam Prep",
      "text": "Evaluate $\\int_{-\\pi}^{\\pi} x^3 \\cos(x)\\,dx$:",
      "options": [
        "0",
        "$\\pi$",
        "$2\\pi$",
        "1"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Integrand is an odd function ($(-x)^3 \\cos(-x) = -x^3 \\cos(x)$) integrated over symmetric interval $[-a, a]$, so result is 0."
    },
    {
      "id": "math-calc-07",
      "difficulty": "easy",
      "concept": "Area Under Curve",
      "year": "Standard Exam Prep",
      "text": "Area bounded by the parabola $y = x^2$ and line $y = 4$ is:",
      "options": [
        "32/3",
        "16/3",
        "16",
        "8"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$2 \\int_0^2 (4 - x^2)\\,dx = 2[4x - x^3/3]_0^2 = 2[8 - 8/3] = 2(16/3) = 32/3$."
    },
    {
      "id": "math-calc-08",
      "difficulty": "medium",
      "concept": "Integrating Factor",
      "year": "Standard Exam Prep",
      "text": "The integrating factor for linear differential equation $\\frac{dy}{dx} + \\frac{2}{x}y = x^3$ is:",
      "options": [
        "$x^2$",
        "$2\\ln x$",
        "$x$",
        "$e^{2x}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$IF = e^{\\int (2/x)dx} = e^{2\\ln x} = e^{\\ln(x^2)} = x^2$."
    },
    {
      "id": "math-calc-09",
      "difficulty": "hard",
      "concept": "Concavity and Inflection",
      "year": "Standard Exam Prep",
      "text": "A point where the concavity of a twice-differentiable curve changes ($f''(x) = 0$) is called:",
      "options": [
        "Point of inflection",
        "Local maximum",
        "Local minimum",
        "Stationary point"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Points where second derivative changes sign are inflection points."
    },
    {
      "id": "math-calc-10",
      "difficulty": "easy",
      "concept": "Tangent Equation",
      "year": "Standard Exam Prep",
      "text": "The slope of the tangent to curve $y = x^3 - x$ at $x = 2$ is:",
      "options": [
        "11",
        "12",
        "7",
        "5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$dy/dx = 3x^2 - 1$. At $x = 2$: $3(4) - 1 = 11$."
    },
    {
      "id": "math-calc-11",
      "difficulty": "medium",
      "concept": "Normal Line Slope",
      "year": "Standard Exam Prep",
      "text": "The slope of the normal to the curve $y = x^2$ at point $(1, 1)$ is:",
      "options": [
        "-1/2",
        "2",
        "-2",
        "1/2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tangent slope $m = 2x = 2$. Normal slope $m_N = -1/m = -1/2$."
    },
    {
      "id": "math-calc-12",
      "difficulty": "hard",
      "concept": "Integral of Secant",
      "year": "Standard Exam Prep",
      "text": "The indefinite integral $\\int \\sec(x)\\,dx$ is equal to:",
      "options": [
        "$\\ln|\\sec x + \\tan x| + C$",
        "$\\sec x \\tan x + C$",
        "$\\ln|\\cos x| + C$",
        "$\\tan^2 x + C$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Standard integral formula: $\\int \\sec x dx = \\ln|\\sec x + \\tan x| + C$."
    },
    {
      "id": "math-calc-13",
      "difficulty": "easy",
      "concept": "Integration by Parts",
      "year": "Standard Exam Prep",
      "text": "Evaluate $\\int x e^x\\,dx$:",
      "options": [
        "$(x - 1)e^x + C$",
        "$(x + 1)e^x + C$",
        "$x^2 e^x / 2 + C$",
        "$e^x + C$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "By parts: $u = x, dv = e^x dx \\implies x e^x - \\int e^x dx = (x - 1)e^x + C$."
    },
    {
      "id": "math-calc-14",
      "difficulty": "medium",
      "concept": "Continuous at Point",
      "year": "Standard Exam Prep",
      "text": "If $f(x) = \\frac{x^2 - 9}{x - 3}$ for $x \\neq 3$ is continuous at $x = 3$, what must $f(3)$ be?",
      "options": [
        "6",
        "0",
        "3",
        "Undefined"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$\\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = 3 + 3 = 6$. For continuity, $f(3) = 6$."
    },
    {
      "id": "math-calc-15",
      "difficulty": "hard",
      "concept": "Radius of Curvature",
      "year": "Standard Exam Prep",
      "text": "The derivative of $\\ln(\\cos x)$ with respect to $x$ is:",
      "options": [
        "$-\\tan x$",
        "$\\tan x$",
        "$\\cot x$",
        "$-\\cot x$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$\\frac{1}{\\cos x} \\cdot (-\\sin x) = -\\tan x$."
    },
    {
      "id": "math-calc-16",
      "difficulty": "easy",
      "concept": "Homogeneous DE",
      "year": "Standard Exam Prep",
      "text": "The differential equation $\\frac{dy}{dx} = \\frac{x^2 + y^2}{2xy}$ is solved using substitution:",
      "options": [
        "$y = vx$",
        "$x = vy$",
        "$y = v + x$",
        "$y = v/x$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Since numerator and denominator are homogeneous of degree 2, substitution $y = vx$ separates variables."
    },
    {
      "id": "math-calc-17",
      "difficulty": "medium",
      "concept": "Integral 1/(1+x^2)",
      "year": "Standard Exam Prep",
      "text": "$\\int_0^1 \\frac{1}{1 + x^2}\\,dx$ equals:",
      "options": [
        "$\\pi / 4$",
        "$\\pi / 2$",
        "$1$",
        "$\\pi$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$[\\tan^{-1}(x)]_0^1 = \\tan^{-1}(1) - 0 = \\pi/4$."
    },
    {
      "id": "math-calc-18",
      "difficulty": "hard",
      "concept": "Critical Points",
      "year": "Standard Exam Prep",
      "text": "Critical points of a function $f(x)$ occur where:",
      "options": [
        "$f'(x) = 0$ or $f'(x)$ does not exist",
        "$f(x) = 0$",
        "$f''(x) = 0$",
        "$f(x) = 1$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "By definition, critical points are domain points where $f'(x) = 0$ or $f$ is non-differentiable."
    },
    {
      "id": "math-calc-19",
      "difficulty": "easy",
      "concept": "Absolute Value Derivative",
      "year": "Standard Exam Prep",
      "text": "The derivative of $f(x) = |x|$ at $x = 0$ is:",
      "options": [
        "Does not exist",
        "0",
        "1",
        "-1"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Left derivative is -1 and right derivative is +1; derivative at 0 does not exist."
    },
    {
      "id": "math-calc-20",
      "difficulty": "medium",
      "concept": "Gamma Function",
      "year": "Standard Exam Prep",
      "text": "The value of $\\Gamma(1/2)$ is equal to:",
      "options": [
        "$\\sqrt{\\pi}$",
        "$\\pi$",
        "1",
        "1/2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Fundamental identity: $\\Gamma(1/2) = \\sqrt{\\pi}$."
    },
    {
      "id": "math-calc-21",
      "difficulty": "hard",
      "concept": "Exact Differential Equation",
      "year": "Standard Exam Prep",
      "text": "The differential equation $M(x,y)dx + N(x,y)dy = 0$ is exact if and only if:",
      "options": [
        "$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$",
        "$\\frac{\\partial M}{\\partial x} = \\frac{\\partial N}{\\partial y}$",
        "$M + N = 0$",
        "$\\frac{dM}{dx} = \\frac{dN}{dy}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Euler's reciprocity relation for exactness: $\\partial M / \\partial y = \\partial N / \\partial x$."
    },
    {
      "id": "math-calc-22",
      "difficulty": "easy",
      "concept": "Taylor Series Center",
      "year": "Standard Exam Prep",
      "text": "The Maclaurin series of a function is simply a Taylor series expanded about:",
      "options": [
        "$x = 0$",
        "$x = 1$",
        "$x = \\pi$",
        "$x = \\infty$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "By definition, Maclaurin series is Taylor series centered at 0."
    },
    {
      "id": "math-calc-23",
      "difficulty": "medium",
      "concept": "Limit x sin(1/x)",
      "year": "Standard Exam Prep",
      "text": "Evaluate $\\lim_{x \\to 0} x \\sin(1/x)$:",
      "options": [
        "0",
        "1",
        "Does not exist",
        "$\\infty$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "By squeeze theorem: $-|x| \\le x \\sin(1/x) \\le |x| \\implies \\text{limit is } 0$."
    },
    {
      "id": "math-calc-24",
      "difficulty": "hard",
      "concept": "Differential Coefficient of Inverse",
      "year": "Standard Exam Prep",
      "text": "If $g(x)$ is the inverse of $f(x)$ and $f'(x) \\neq 0$, then $g'(f(x))$ equals:",
      "options": [
        "$1 / f'(x)$",
        "$f'(x)$",
        "$-f'(x)$",
        "$1 / g(x)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$g(f(x)) = x \\implies g'(f(x)) f'(x) = 1 \\implies g'(f(x)) = 1/f'(x)$."
    },
    {
      "id": "math-calc-25",
      "difficulty": "easy",
      "concept": "Exponential Decay Rate",
      "year": "Standard Exam Prep",
      "text": "The half-life of a radioactive isotope with decay constant $\\lambda$ is:",
      "options": [
        "$\\frac{\\ln 2}{\\lambda}$",
        "$\\frac{\\lambda}{\\ln 2}$",
        "$\\frac{1}{\\lambda}$",
        "$2\\lambda$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$N(t) = N_0 e^{-\\lambda t} = N_0 / 2 \\implies t_{1/2} = \\frac{\\ln 2}{\\lambda}$."
    }
  ],
  "math-algebra": [
    {
      "id": "math-algebra-01",
      "difficulty": "easy",
      "concept": "Quadratic Roots Sign",
      "year": "Standard Exam Prep",
      "text": "If both roots of $ax^2 + bx + c = 0$ are negative, then coefficients $a, b, c$ must have:",
      "options": [
        "Same sign",
        "Opposite signs",
        "$b^2 - 4ac = 0$",
        "$c = 0$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Sum of roots $-b/a < 0 \\implies a, b$ same sign. Product $c/a > 0 \\implies a, c$ same sign."
    },
    {
      "id": "math-algebra-02",
      "difficulty": "medium",
      "concept": "Cube Roots of Unity",
      "year": "Standard Exam Prep",
      "text": "If $\\omega$ is a non-real complex cube root of unity, then $1 + \\omega + \\omega^2$ equals:",
      "options": [
        "0",
        "1",
        "-1",
        "3"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$1 + \\omega + \\omega^2 = 0$ and $\\omega^3 = 1$."
    },
    {
      "id": "math-algebra-03",
      "difficulty": "hard",
      "concept": "Arithmetic Progression Sum",
      "year": "Standard Exam Prep",
      "text": "The sum of the first 20 odd natural numbers is:",
      "options": [
        "400",
        "200",
        "420",
        "380"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Sum of first $n$ odd numbers is $n^2$: $20^2 = 400$."
    },
    {
      "id": "math-algebra-04",
      "difficulty": "easy",
      "concept": "Harmonic Mean",
      "year": "Standard Exam Prep",
      "text": "The Harmonic Mean (HM) of two positive numbers $a$ and $b$ is:",
      "options": [
        "$\\frac{2ab}{a + b}$",
        "$\\frac{a+b}{2}$",
        "$\\sqrt{ab}$",
        "$\\frac{ab}{a+b}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$HM = 2 / (1/a + 1/b) = 2ab / (a+b)$."
    },
    {
      "id": "math-algebra-05",
      "difficulty": "medium",
      "concept": "Binomial Coefficient Sum",
      "year": "Standard Exam Prep",
      "text": "The sum of binomial coefficients $\\binom{n}{0} + \\binom{n}{1} + \\dots + \\binom{n}{n}$ equals:",
      "options": [
        "$2^n$",
        "$2^{n-1}$",
        "$n^2$",
        "$2n$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Set $x = 1$ in $(1 + x)^n = 2^n$."
    },
    {
      "id": "math-algebra-06",
      "difficulty": "hard",
      "concept": "Matrix Multiplication Non-Commutative",
      "year": "Standard Exam Prep",
      "text": "For two square matrices $A$ and $B$, in general:",
      "options": [
        "$AB \\neq BA$",
        "$AB = BA$",
        "$AB = 0$",
        "$A + B = AB$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Matrix multiplication is generally non-commutative ($AB \\neq BA$)."
    },
    {
      "id": "math-algebra-07",
      "difficulty": "easy",
      "concept": "Transpose of Product",
      "year": "Standard Exam Prep",
      "text": "For conformable matrices $A$ and $B$, $(AB)^T$ is equal to:",
      "options": [
        "$B^T A^T$",
        "$A^T B^T$",
        "$AB$",
        "$(BA)^T$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The reversal law of transposition: $(AB)^T = B^T A^T$."
    },
    {
      "id": "math-algebra-08",
      "difficulty": "medium",
      "concept": "De Moivre's Theorem",
      "year": "Standard Exam Prep",
      "text": "By De Moivre's theorem, $(\\cos\\theta + i\\sin\\theta)^n$ equals:",
      "options": [
        "$\\cos(n\\theta) + i\\sin(n\\theta)$",
        "$\\cos^n\\theta + i\\sin^n\\theta$",
        "$n(\\cos\\theta + i\\sin\\theta)$",
        "$\\cos\\theta - i\\sin\\theta$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Standard De Moivre identity for any integer $n$."
    },
    {
      "id": "math-algebra-09",
      "difficulty": "hard",
      "concept": "Geometric Progression Nth Term",
      "year": "Standard Exam Prep",
      "text": "In a GP with first term $a = 3$ and common ratio $r = 2$, the 6th term is:",
      "options": [
        "96",
        "48",
        "192",
        "64"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$T_6 = a r^{6-1} = 3 \\times 2^5 = 3 \\times 32 = 96$."
    },
    {
      "id": "math-algebra-10",
      "difficulty": "easy",
      "concept": "Modulus of Complex Number",
      "year": "Standard Exam Prep",
      "text": "The modulus of complex number $z = 3 - 4i$ is:",
      "options": [
        "5",
        "7",
        "1",
        "25"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$|z| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$."
    },
    {
      "id": "math-algebra-11",
      "difficulty": "medium",
      "concept": "Circular Permutations",
      "year": "Standard Exam Prep",
      "text": "The number of ways to arrange 5 people around a round table is:",
      "options": [
        "24",
        "120",
        "60",
        "20"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$(n - 1)! = (5 - 1)! = 4! = 24$."
    },
    {
      "id": "math-algebra-12",
      "difficulty": "hard",
      "concept": "Combinations Formula",
      "year": "Standard Exam Prep",
      "text": "Evaluate $\\binom{10}{3}$:",
      "options": [
        "120",
        "720",
        "210",
        "60"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$\\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$."
    },
    {
      "id": "math-algebra-13",
      "difficulty": "easy",
      "concept": "Determinant Invariance",
      "year": "Standard Exam Prep",
      "text": "Adding a scalar multiple of one row to another row of a matrix:",
      "options": [
        "Leaves the determinant unchanged",
        "Multiplies determinant by the scalar",
        "Changes sign of determinant",
        "Makes determinant zero"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Elementary row operation $R_i \\to R_i + k R_j$ does not alter the determinant."
    },
    {
      "id": "math-algebra-14",
      "difficulty": "medium",
      "concept": "Skew-Symmetric Determinant",
      "year": "Standard Exam Prep",
      "text": "The determinant of an odd-order skew-symmetric matrix is always:",
      "options": [
        "0",
        "1",
        "-1",
        "Cannot be determined"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$A^T = -A \\implies \\det(A) = \\det(-A) = (-1)^n \\det(A)$. For odd $n$, $\\det(A) = -\\det(A) \\implies \\det(A) = 0$."
    },
    {
      "id": "math-algebra-15",
      "difficulty": "hard",
      "concept": "Binomial Middle Term",
      "year": "Standard Exam Prep",
      "text": "The number of middle terms in the expansion of $(x + a)^n$ when $n$ is even is:",
      "options": [
        "1",
        "2",
        "0",
        "Depends on $x$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "For even $n$, there are $n + 1$ (odd) terms, so there is exactly 1 middle term at $(n/2 + 1)$."
    },
    {
      "id": "math-algebra-16",
      "difficulty": "easy",
      "concept": "AM-GM Inequality",
      "year": "Standard Exam Prep",
      "text": "For any positive real numbers $a$ and $b$, the relationship between AM and GM is:",
      "options": [
        "$AM \\ge GM$",
        "$AM \\le GM$",
        "$AM = 2 GM$",
        "$AM \\times GM = 1$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Arithmetic Mean $\\ge$ Geometric Mean with equality iff $a = b$."
    },
    {
      "id": "math-algebra-17",
      "difficulty": "medium",
      "concept": "Logarithm Base Change",
      "year": "Standard Exam Prep",
      "text": "$\\log_b(a)$ can be rewritten in base $c$ as:",
      "options": [
        "$\\frac{\\log_c(a)}{\\log_c(b)}$",
        "$\\log_c(a) \\times \\log_c(b)$",
        "$\\log_c(a - b)$",
        "$\\frac{\\log_c(b)}{\\log_c(a)}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Standard base change formula: $\\log_b a = \\frac{\\log_c a}{\\log_c b}$."
    },
    {
      "id": "math-algebra-18",
      "difficulty": "hard",
      "concept": "Complex Conjugate Root Theorem",
      "year": "Standard Exam Prep",
      "text": "If polynomial $P(x)$ with real coefficients has root $2 + 3i$, it must also have root:",
      "options": [
        "$2 - 3i$",
        "$-2 + 3i$",
        "$-2 - 3i$",
        "$3 + 2i$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Non-real roots of real polynomials always occur in conjugate pairs."
    },
    {
      "id": "math-algebra-19",
      "difficulty": "easy",
      "concept": "Invertible Matrix Condition",
      "year": "Standard Exam Prep",
      "text": "A square matrix $A$ is invertible if and only if:",
      "options": [
        "$\\det(A) \\neq 0$",
        "$\\det(A) = 0$",
        "$A^T = A$",
        "All elements are non-zero"
      ],
      "correctAnswerIndex": 0,
      "explanation": "A matrix is non-singular (invertible) iff its determinant is non-zero."
    },
    {
      "id": "math-algebra-20",
      "difficulty": "medium",
      "concept": "Pigeonhole Objects",
      "year": "Standard Exam Prep",
      "text": "If 13 cards are picked from a standard 52-card deck, at least how many must belong to the same suit?",
      "options": [
        "4",
        "3",
        "2",
        "5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "4 suits. By generalized pigeonhole principle: $\\lceil 13/4 \\rceil = 4$."
    },
    {
      "id": "math-algebra-21",
      "difficulty": "hard",
      "concept": "Singular Matrix",
      "year": "Standard Exam Prep",
      "text": "If matrix $\\begin{pmatrix} 2 & 4 \\\\ 3 & k \\end{pmatrix}$ is singular, then $k$ equals:",
      "options": [
        "6",
        "8",
        "4",
        "2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Singular means $\\det = 0 \\implies 2k - 12 = 0 \\implies k = 6$."
    },
    {
      "id": "math-algebra-22",
      "difficulty": "easy",
      "concept": "Quadratic Discriminant",
      "year": "Standard Exam Prep",
      "text": "If the discriminant $D = b^2 - 4ac < 0$, the roots of $ax^2 + bx + c = 0$ are:",
      "options": [
        "Complex conjugate numbers",
        "Real and distinct",
        "Real and equal",
        "Rational"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Negative discriminant indicates no real roots; roots are complex conjugates."
    },
    {
      "id": "math-algebra-23",
      "difficulty": "medium",
      "concept": "Coefficient of x^r",
      "year": "Standard Exam Prep",
      "text": "The general term $T_{r+1}$ in the expansion of $(a + b)^n$ is:",
      "options": [
        "$\\binom{n}{r} a^{n-r} b^r$",
        "$\\binom{n}{r} a^r b^{n-r}$",
        "$\\binom{n}{r+1} a^{n-r} b^r$",
        "$\\frac{n!}{r!} a^{n-r} b^r$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Standard binomial theorem general term: $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$."
    },
    {
      "id": "math-algebra-24",
      "difficulty": "hard",
      "concept": "Orthogonal Matrix Determinant",
      "year": "Standard Exam Prep",
      "text": "If $A$ is an orthogonal matrix ($A A^T = I$), then $\\det(A)$ can only be:",
      "options": [
        "$\\pm 1$",
        "0",
        "Any real number",
        "$1$ only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$\\det(A A^T) = \\det(A)^2 = \\det(I) = 1 \\implies \\det(A) = \\pm 1$."
    },
    {
      "id": "math-algebra-25",
      "difficulty": "easy",
      "concept": "Pascal's Identity",
      "year": "Standard Exam Prep",
      "text": "Pascal's identity states that $\\binom{n-1}{r-1} + \\binom{n-1}{r}$ equals:",
      "options": [
        "$\\binom{n}{r}$",
        "$\\binom{n+1}{r}$",
        "$\\binom{n}{r-1}$",
        "$2\\binom{n}{r}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Fundamental identity of Pascal's triangle: $\\binom{n-1}{r-1} + \\binom{n-1}{r} = \\binom{n}{r}$."
    }
  ],
  "bot-cell": [
    {
      "id": "bot-cell-01",
      "difficulty": "easy",
      "concept": "Cell Wall Composition",
      "year": "Standard Exam Prep",
      "text": "The plant cell wall is primarily composed of:",
      "options": [
        "Cellulose, hemicellulose, and pectin",
        "Peptidoglycan",
        "Chitin",
        "Lipid bilayer"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Plant cell walls are made of cellulose microfibrils embedded in hemicellulose and pectin."
    },
    {
      "id": "bot-cell-02",
      "difficulty": "medium",
      "concept": "Ribosome S-Value",
      "year": "Standard Exam Prep",
      "text": "Eukaryotic cytoplasmic ribosomes are of which type?",
      "options": [
        "80S (composed of 60S and 40S subunits)",
        "70S (50S and 30S)",
        "70S (60S and 40S)",
        "80S (50S and 30S)"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Eukaryotes have 80S ribosomes (60S + 40S), whereas prokaryotes and mitochondria have 70S (50S + 30S)."
    },
    {
      "id": "bot-cell-03",
      "difficulty": "hard",
      "concept": "Golgi Function",
      "year": "Standard Exam Prep",
      "text": "The primary function of the Golgi apparatus is:",
      "options": [
        "Packaging and post-translational modification of proteins",
        "ATP synthesis",
        "DNA replication",
        "Lipid degradation"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Golgi apparatus modifies, sorts, and packages macromolecules for secretion or delivery."
    },
    {
      "id": "bot-cell-04",
      "difficulty": "easy",
      "concept": "Lysosome Hydrolases",
      "year": "Standard Exam Prep",
      "text": "Enzymes present in lysosomes are active at which optimal pH?",
      "options": [
        "Acidic pH (~5.0)",
        "Basic pH (~8.5)",
        "Neutral pH (~7.0)",
        "Highly alkaline pH (~12.0)"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Lysosomal acid hydrolases require an acidic lumen (~pH 5) maintained by proton pumps."
    },
    {
      "id": "bot-cell-05",
      "difficulty": "medium",
      "concept": "Chloroplast Stroma",
      "year": "Standard Exam Prep",
      "text": "Light-independent (dark) reactions of photosynthesis (Calvin cycle) occur in the:",
      "options": [
        "Stroma of chloroplast",
        "Thylakoid membrane",
        "Granum",
        "Intermembrane space"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Calvin cycle enzymes are located in the fluid stroma, while light reactions occur in thylakoids."
    },
    {
      "id": "bot-cell-06",
      "difficulty": "hard",
      "concept": "S-Phase Events",
      "year": "Standard Exam Prep",
      "text": "During the S (Synthesis) phase of the cell cycle, which major event occurs?",
      "options": [
        "DNA replication and centriole duplication",
        "Nuclear division",
        "Chromosome condensation",
        "Cytokinesis"
      ],
      "correctAnswerIndex": 0,
      "explanation": "DNA content doubles ($2C \\to 4C$) and centrioles duplicate in cytoplasm during S-phase."
    },
    {
      "id": "bot-cell-07",
      "difficulty": "easy",
      "concept": "Spindle Fiber Attachment",
      "year": "Standard Exam Prep",
      "text": "Spindle fibers attach to chromosomes at specialized disc-shaped structures called:",
      "options": [
        "Kinetochores",
        "Centrosomes",
        "Telomeres",
        "Chromomeres"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Kinetochores are protein complexes assembled on centromeric DNA where spindle microtubules attach."
    },
    {
      "id": "bot-cell-08",
      "difficulty": "medium",
      "concept": "Endosymbiotic Theory",
      "year": "Standard Exam Prep",
      "text": "Which two organelles are thought to have originated as endosymbiotic prokaryotes?",
      "options": [
        "Mitochondria and Chloroplasts",
        "Golgi and Endoplasmic Reticulum",
        "Lysosomes and Peroxisomes",
        "Nucleus and Ribosomes"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Both possess circular DNA, 70S ribosomes, and double membranes reflecting prokaryotic ancestry."
    },
    {
      "id": "bot-cell-09",
      "difficulty": "hard",
      "concept": "Middle Lamella",
      "year": "Standard Exam Prep",
      "text": "The middle lamella cementing neighboring plant cells together is composed mainly of:",
      "options": [
        "Calcium and magnesium pectate",
        "Cellulose",
        "Suberin",
        "Lignin"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Calcium and magnesium pectate make up the cementing middle lamella."
    },
    {
      "id": "bot-cell-10",
      "difficulty": "easy",
      "concept": "Plasmodesmata",
      "year": "Standard Exam Prep",
      "text": "Microscopic channels traversing cell walls enabling transport and communication between plant cells are:",
      "options": [
        "Plasmodesmata",
        "Gap junctions",
        "Tight junctions",
        "Desmosomes"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Plasmodesmata are cytoplasmic bridges connecting adjacent plant cells."
    },
    {
      "id": "bot-cell-11",
      "difficulty": "medium",
      "concept": "G0 Phase",
      "year": "Standard Exam Prep",
      "text": "Cells that exit the cell cycle and enter a quiescent metabolic state are in:",
      "options": [
        "$G_0$ phase",
        "$G_1$ phase",
        "$G_2$ phase",
        "M phase"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$G_0$ is the non-dividing, metabolically active quiescent stage (e.g. neurons, cardiac cells)."
    },
    {
      "id": "bot-cell-12",
      "difficulty": "hard",
      "concept": "Polytene Chromosomes",
      "year": "Standard Exam Prep",
      "text": "Giant polytene chromosomes are characteristically found in the salivary glands of:",
      "options": [
        "Drosophila (fruit fly)",
        "Onion root tip",
        "Human lymphocytes",
        "Yeast"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Balbiani first discovered polytene chromosomes in dipteran larvae salivary glands."
    },
    {
      "id": "bot-cell-13",
      "difficulty": "easy",
      "concept": "Chiasmata Dissolution",
      "year": "Standard Exam Prep",
      "text": "Terminalization of chiasmata is completed during which sub-stage of Prophase I?",
      "options": [
        "Diakinesis",
        "Diplotene",
        "Pachytene",
        "Zygotene"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Diakinesis marks the final stage of Prophase I with complete terminalization of chiasmata."
    },
    {
      "id": "bot-cell-14",
      "difficulty": "medium",
      "concept": "Synaptonemal Complex",
      "year": "Standard Exam Prep",
      "text": "The synaptonemal complex forms between homologous chromosomes during:",
      "options": [
        "Zygotene",
        "Leptotene",
        "Pachytene",
        "Diplotene"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Synapsis and formation of the synaptonemal complex occur during zygotene."
    },
    {
      "id": "bot-cell-15",
      "difficulty": "hard",
      "concept": "Cell Plate Cytokinesis",
      "year": "Standard Exam Prep",
      "text": "Cytokinesis in plant cells proceeds by cell plate formation from:",
      "options": [
        "Center outward (centrifugal)",
        "Periphery inward (centripetal)",
        "Top to bottom",
        "Random fusion"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Plant cytokinesis starts in the center via phragmoplast vesicles and grows centrifugally outward."
    },
    {
      "id": "bot-cell-16",
      "difficulty": "easy",
      "concept": "Centriole Triplet Pattern",
      "year": "Standard Exam Prep",
      "text": "The internal microtubule arrangement of a centriole is:",
      "options": [
        "$9 + 0$ triplet arrangement",
        "$9 + 2$ doublet arrangement",
        "$9 + 1$ arrangement",
        "$8 + 2$ arrangement"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Centrioles show a cartwheel $9 + 0$ pattern of peripheral triplet microtubules with no central pair."
    },
    {
      "id": "bot-cell-17",
      "difficulty": "medium",
      "concept": "Cilia and Flagella Axoneme",
      "year": "Standard Exam Prep",
      "text": "The axoneme of eukaryotic cilia and flagella has which microtubule arrangement?",
      "options": [
        "$9 + 2$ doublet pattern",
        "$9 + 0$ triplet pattern",
        "$8 + 2$ pattern",
        "$9 + 1$ pattern"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Axoneme consists of 9 peripheral doublets and 1 central pair of microtubules ($9 + 2$)."
    },
    {
      "id": "bot-cell-18",
      "difficulty": "hard",
      "concept": "Peroxisome Role",
      "year": "Standard Exam Prep",
      "text": "Peroxisomes in plant cells participate in which metabolic pathway alongside mitochondria and chloroplasts?",
      "options": [
        "Photorespiration ($C_2$ cycle)",
        "Calvin cycle",
        "Krebs cycle",
        "Glycolysis"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Photorespiration involves coordinated reactions in Chloroplast $\\to$ Peroxisome $\\to$ Mitochondria."
    },
    {
      "id": "bot-cell-19",
      "difficulty": "easy",
      "concept": "Smooth ER Function",
      "year": "Standard Exam Prep",
      "text": "The Smooth Endoplasmic Reticulum (SER) is the major site for synthesis of:",
      "options": [
        "Lipids and steroid hormones",
        "Proteins",
        "Ribosomes",
        "Carbohydrates only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "SER synthesizes lipids, phospholipids, and steroid hormones, and aids in detoxification."
    },
    {
      "id": "bot-cell-20",
      "difficulty": "medium",
      "concept": "Rough ER Function",
      "year": "Standard Exam Prep",
      "text": "Rough Endoplasmic Reticulum (RER) is studded with:",
      "options": [
        "Ribosomes for protein synthesis",
        "Lysosomes",
        "Centrioles",
        "Thylakoids"
      ],
      "correctAnswerIndex": 0,
      "explanation": "RER has membrane-bound 80S ribosomes engaged in translating secretory proteins."
    },
    {
      "id": "bot-cell-21",
      "difficulty": "hard",
      "concept": "Chromatin Basic Unit",
      "year": "Standard Exam Prep",
      "text": "The fundamental repeating subunit of chromatin is the:",
      "options": [
        "Nucleosome",
        "Chromatid",
        "Centromere",
        "Histone octamer alone"
      ],
      "correctAnswerIndex": 0,
      "explanation": "A nucleosome consists of ~146 bp of DNA wrapped around a histone octamer ($H_2A, H_2B, H_3, H_4$)."
    },
    {
      "id": "bot-cell-22",
      "difficulty": "easy",
      "concept": "Histone Charge",
      "year": "Standard Exam Prep",
      "text": "Histone proteins are rich in which basic amino acid residues?",
      "options": [
        "Lysine and Arginine",
        "Glycine and Alanine",
        "Tryptophan and Tyrosine",
        "Aspartate and Glutamate"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Positively charged lysine and arginine enable histones to bind negatively charged DNA phosphate backbones."
    },
    {
      "id": "bot-cell-23",
      "difficulty": "medium",
      "concept": "Vacuole Membrane",
      "year": "Standard Exam Prep",
      "text": "The semi-permeable membrane enclosing the large central vacuole in plant cells is called the:",
      "options": [
        "Tonoplast",
        "Plasmalemma",
        "Pellicle",
        "Periderm"
      ],
      "correctAnswerIndex": 0,
      "explanation": "The tonoplast actively pumps ions into the vacuole against concentration gradients."
    },
    {
      "id": "bot-cell-24",
      "difficulty": "hard",
      "concept": "Mesosome Function",
      "year": "Standard Exam Prep",
      "text": "In bacteria, infoldings of the plasma membrane that aid in respiration and DNA replication are:",
      "options": [
        "Mesosomes",
        "Ribosomes",
        "Plasmids",
        "Pili"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Mesosomes increase surface area for respiratory enzymatic machinery in prokaryotes."
    },
    {
      "id": "bot-cell-25",
      "difficulty": "easy",
      "concept": "Omnis Cellula e Cellula",
      "year": "Standard Exam Prep",
      "text": "The famous aphorism 'Omnis cellula e cellula' (all cells arise from pre-existing cells) was stated by:",
      "options": [
        "Rudolf Virchow (1855)",
        "Theodor Schwann",
        "Matthias Schleiden",
        "Robert Hooke"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Virchow modified cell theory by establishing that cells divide to generate new cells."
    }
  ],
  "bot-genetics": [
    {
      "id": "bot-genetics-01",
      "difficulty": "easy",
      "concept": "Monohybrid F2 Ratio",
      "year": "Standard Exam Prep",
      "text": "In a monohybrid cross with complete dominance, the genotypic ratio in the F2 generation is:",
      "options": [
        "1 : 2 : 1",
        "3 : 1",
        "9 : 3 : 3 : 1",
        "1 : 1"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Crossing $Tt \\times Tt$ gives $1\\;TT : 2\\;Tt : 1\\;tt$ (genotypic) and $3 : 1$ (phenotypic)."
    },
    {
      "id": "bot-genetics-02",
      "difficulty": "medium",
      "concept": "Incomplete Dominance",
      "year": "Standard Exam Prep",
      "text": "In snapdragon (Antirrhinum majus), crossing red-flowered ($RR$) with white-flowered ($rr$) yields pink ($Rr$). This is an example of:",
      "options": [
        "Incomplete dominance",
        "Codominance",
        "Pleiotropy",
        "Epistasis"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Incomplete dominance produces an intermediate heterozygous phenotype with 1:2:1 phenotypic ratio."
    },
    {
      "id": "bot-genetics-03",
      "difficulty": "hard",
      "concept": "Codominance Example",
      "year": "Standard Exam Prep",
      "text": "Human ABO blood grouping is a classic example of:",
      "options": [
        "Codominance and multiple alleles",
        "Incomplete dominance",
        "Polygenic inheritance",
        "Pleiotropy"
      ],
      "correctAnswerIndex": 0,
      "explanation": "$I^A$ and $I^B$ are codominant (AB blood group) and form a multiple allele series with $i$."
    },
    {
      "id": "bot-genetics-04",
      "difficulty": "easy",
      "concept": "Linkage and Recombination",
      "year": "Standard Exam Prep",
      "text": "Who experimentally verified chromosomal theory of inheritance and discovered linkage using Drosophila?",
      "options": [
        "T.H. Morgan",
        "Gregor Mendel",
        "Sutton and Boveri",
        "Hugo de Vries"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Thomas Hunt Morgan received the Nobel Prize for discovering sex linkage and crossing over in Drosophila."
    },
    {
      "id": "bot-genetics-05",
      "difficulty": "medium",
      "concept": "Pleiotropy Definition",
      "year": "Standard Exam Prep",
      "text": "When a single gene influences multiple unrelated phenotypic traits, this phenomenon is called:",
      "options": [
        "Pleiotropy",
        "Polygenic inheritance",
        "Codominance",
        "Epistasis"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Pleiotropic genes (e.g. phenylketonuria) affect several organ systems simultaneously."
    },
    {
      "id": "bot-genetics-06",
      "difficulty": "hard",
      "concept": "DNA Backbone",
      "year": "Standard Exam Prep",
      "text": "The backbone of a DNA strand is composed of alternating:",
      "options": [
        "Deoxyribose sugars and phosphate groups",
        "Nitrogenous bases and sugars",
        "Phosphate groups and nitrogenous bases",
        "Amino acids"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Phosphodiester bonds link 5' phosphate to 3' hydroxyl of adjacent deoxyribose rings."
    },
    {
      "id": "bot-genetics-07",
      "difficulty": "easy",
      "concept": "Chargaff Rule",
      "year": "Standard Exam Prep",
      "text": "According to Chargaff's rule for double-stranded DNA:",
      "options": [
        "$[A] = [T]$ and $[G] = [C]$",
        "$[A] = [G]$",
        "$[A] + [T] = [G] + [C]$",
        "$[A]/[T] = 2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Equimolar pairing dictates $[A]=[T], [G]=[C]$, so $[A+G]/[T+C] = 1$."
    },
    {
      "id": "bot-genetics-08",
      "difficulty": "medium",
      "concept": "Semiconservative Replication",
      "year": "Standard Exam Prep",
      "text": "Meselson and Stahl experimentally proved semiconservative DNA replication in E. coli using isotopes of:",
      "options": [
        "Nitrogen ($^{15}N$ and $^{14}N$)",
        "Phosphorus ($^{32}P$)",
        "Sulfur ($^{35}S$)",
        "Carbon ($^{14}C$)"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cesium chloride density gradient centrifugation of $^{15}N$-labeled DNA confirmed semiconservative replication."
    },
    {
      "id": "bot-genetics-09",
      "difficulty": "hard",
      "concept": "Okazaki Fragments",
      "year": "Standard Exam Prep",
      "text": "During DNA replication, the lagging strand is synthesized discontinuously as:",
      "options": [
        "Okazaki fragments",
        "Leading strands",
        "RNA primers only",
        "Kornberg segments"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Okazaki fragments are short segments synthesized 5' to 3' on the lagging strand, joined by DNA ligase."
    },
    {
      "id": "bot-genetics-10",
      "difficulty": "easy",
      "concept": "Start Codon",
      "year": "Standard Exam Prep",
      "text": "Which codon acts as the universal initiator codon coding for Methionine?",
      "options": [
        "AUG",
        "UAA",
        "UAG",
        "UGA"
      ],
      "correctAnswerIndex": 0,
      "explanation": "AUG signals the start of translation and codes for methionine in eukaryotes (formyl-methionine in prokaryotes)."
    },
    {
      "id": "bot-genetics-11",
      "difficulty": "medium",
      "concept": "Stop Codons",
      "year": "Standard Exam Prep",
      "text": "The three nonsense (termination) codons that halt translation are:",
      "options": [
        "UAA, UAG, UGA",
        "AUG, GUG, UAA",
        "UAA, UAU, UAC",
        "UGG, UGA, UAC"
      ],
      "correctAnswerIndex": 0,
      "explanation": "UAA (ochre), UAG (amber), and UGA (opal) code for no amino acids and cause release factor binding."
    },
    {
      "id": "bot-genetics-12",
      "difficulty": "hard",
      "concept": "Degeneracy of Genetic Code",
      "year": "Standard Exam Prep",
      "text": "The genetic code is described as 'degenerate' because:",
      "options": [
        "Most amino acids are coded by more than one codon",
        "One codon codes for multiple amino acids",
        "It differs between species",
        "Codons overlap in reading frame"
      ],
      "correctAnswerIndex": 0,
      "explanation": "With 61 sense codons for 20 amino acids, most amino acids have multiple synonymous codons."
    },
    {
      "id": "bot-genetics-13",
      "difficulty": "easy",
      "concept": "Lac Operon Inducer",
      "year": "Standard Exam Prep",
      "text": "In the lac operon of E. coli, which molecule functions as the inducer by binding the repressor?",
      "options": [
        "Allolactose (or lactose)",
        "Glucose",
        "Galactose",
        "cAMP"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Allolactose binds the lac repressor causing conformational change that releases the operator."
    },
    {
      "id": "bot-genetics-14",
      "difficulty": "medium",
      "concept": "Transcription Enzyme",
      "year": "Standard Exam Prep",
      "text": "In eukaryotes, mRNA is transcribed by which enzyme?",
      "options": [
        "RNA Polymerase II",
        "RNA Polymerase I",
        "RNA Polymerase III",
        "DNA Polymerase I"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Pol I transcribes 28S, 18S, 5.8S rRNA; Pol II transcribes mRNA and snRNA; Pol III transcribes tRNA and 5S rRNA."
    },
    {
      "id": "bot-genetics-15",
      "difficulty": "hard",
      "concept": "Spliceosome Role",
      "year": "Standard Exam Prep",
      "text": "In eukaryotic pre-mRNA processing, splicing involves removing:",
      "options": [
        "Introns and joining exons",
        "Exons and joining introns",
        "Poly-A tail",
        "5' methyl cap"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Non-coding intervening sequences (introns) are excised, and expressed sequences (exons) are spliced together."
    },
    {
      "id": "bot-genetics-16",
      "difficulty": "easy",
      "concept": "Capping 5 Prime",
      "year": "Standard Exam Prep",
      "text": "The 5' cap added to eukaryotic pre-mRNA consists of:",
      "options": [
        "7-methylguanosine",
        "Poly-adenylate",
        "Thymidine",
        "Cytidine"
      ],
      "correctAnswerIndex": 0,
      "explanation": "A 7-methylguanosine ($m^7G$) triphosphate cap protects mRNA from 5' exonucleases and assists ribosome binding."
    },
    {
      "id": "bot-genetics-17",
      "difficulty": "medium",
      "concept": "tRNA Cloverleaf",
      "year": "Standard Exam Prep",
      "text": "The 3D shape of tRNA resembles an inverted L, but its 2D cloverleaf structure has the amino acid binding site at the:",
      "options": [
        "3' CCA end",
        "5' end",
        "Anticodon loop",
        "D loop"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Amino acid attaches ester-linked to the 3' terminal -CCA-OH group of tRNA."
    },
    {
      "id": "bot-genetics-18",
      "difficulty": "hard",
      "concept": "Polygenic Inheritance",
      "year": "Standard Exam Prep",
      "text": "Human skin color and height are controlled by multiple genes, demonstrating:",
      "options": [
        "Polygenic inheritance (continuous variation)",
        "Pleiotropy",
        "Multiple allelism",
        "Single gene Mendelian trait"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Polygenic traits result from additive effects of multiple independent gene loci."
    },
    {
      "id": "bot-genetics-19",
      "difficulty": "easy",
      "concept": "Down Syndrome Karyotype",
      "year": "Standard Exam Prep",
      "text": "Down syndrome is a chromosomal disorder caused by:",
      "options": [
        "Trisomy of chromosome 21",
        "Monosomy of chromosome X (45, X0)",
        "Trisomy of chromosome 18",
        "XXY genotype"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nondisjunction during meiosis leads to trisomy 21 (47 chromosomes)."
    },
    {
      "id": "bot-genetics-20",
      "difficulty": "medium",
      "concept": "Turner Syndrome",
      "year": "Standard Exam Prep",
      "text": "Turner syndrome females have which sex chromosome constitution?",
      "options": [
        "45, X0",
        "47, XXY",
        "47, XYY",
        "47, XXX"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Monosomy of the X chromosome ($45, X0$) causes sterility and short stature."
    },
    {
      "id": "bot-genetics-21",
      "difficulty": "hard",
      "concept": "Klinefelter Syndrome",
      "year": "Standard Exam Prep",
      "text": "Klinefelter syndrome is characterized by the karyotype:",
      "options": [
        "47, XXY",
        "45, X0",
        "46, XY",
        "47, XYY"
      ],
      "correctAnswerIndex": 0,
      "explanation": "An extra X chromosome in males results in 47, XXY genotype with gynecomastia."
    },
    {
      "id": "bot-genetics-22",
      "difficulty": "easy",
      "concept": "Hemophilia Inheritance",
      "year": "Standard Exam Prep",
      "text": "Hemophilia is inherited as an:",
      "options": [
        "X-linked recessive trait",
        "Autosomal dominant trait",
        "Y-linked trait",
        "Autosomal recessive trait"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Hemophilia gene is located on the X chromosome; males with mutant X are affected."
    },
    {
      "id": "bot-genetics-23",
      "difficulty": "medium",
      "concept": "Griffith Transformation",
      "year": "Standard Exam Prep",
      "text": "Frederick Griffith (1928) discovered the 'transforming principle' using which bacterium?",
      "options": [
        "Streptococcus pneumoniae",
        "Escherichia coli",
        "Bacillus subtilis",
        "Salmonella typhimurium"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Griffith showed heat-killed virulent S-strain transformed non-virulent R-strain in mice."
    },
    {
      "id": "bot-genetics-24",
      "difficulty": "hard",
      "concept": "Hershey-Chase Experiment",
      "year": "Standard Exam Prep",
      "text": "Hershey and Chase used radioactive $^{32}P$ and $^{35}S$ to label which components of bacteriophage T2?",
      "options": [
        "$^{32}P$ for DNA and $^{35}S$ for protein coat",
        "$^{32}P$ for protein and $^{35}S$ for DNA",
        "Both for DNA",
        "Both for protein"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Phosphorus is present in DNA (not protein) and sulfur in protein (not DNA), proving DNA is genetic material."
    },
    {
      "id": "bot-genetics-25",
      "difficulty": "easy",
      "concept": "Hardy-Weinberg Equilibrium",
      "year": "Standard Exam Prep",
      "text": "In a population in Hardy-Weinberg equilibrium with allele frequencies $p$ and $q$, the heterozygous frequency is:",
      "options": [
        "$2pq$",
        "$p^2$",
        "$q^2$",
        "$p + q$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Genotypic distribution: $p^2 (AA) + 2pq (Aa) + q^2 (aa) = 1$."
    }
  ],
  "phy-mech": [
    {
      "id": "phy-m-01",
      "difficulty": "easy",
      "concept": "Kinematics",
      "year": "JEE Prep",
      "text": "A particle moves along a straight line with constant acceleration $a = 4\\text{ m/s}^2$. If initial velocity is $2\\text{ m/s}$, distance covered in 3 seconds is:",
      "options": [
        "24 m",
        "18 m",
        "30 m",
        "12 m"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$s = ut + \\frac{1}{2}at^2 = 2(3) + \\frac{1}{2}(4)(3^2) = 6 + 18 = \\mathbf{24\\text{ m}}$$"
    },
    {
      "id": "phy-m-02",
      "difficulty": "medium",
      "concept": "Projectile Motion",
      "year": "JEE Prep",
      "text": "A body is projected at $45^\\circ$ with velocity $20\\text{ m/s}$ ($g = 10\\text{ m/s}^2$). The maximum height attained is:",
      "options": [
        "10 m",
        "20 m",
        "5 m",
        "15 m"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$H = \\frac{u^2 \\sin^2(45^\\circ)}{2g} = \\frac{400 \\times (1/2)}{20} = \\frac{200}{20} = \\mathbf{10\\text{ m}}$$"
    },
    {
      "id": "phy-m-03",
      "difficulty": "medium",
      "concept": "Newton's Laws",
      "year": "JEE Prep",
      "text": "A force of $10\\text{ N}$ acts on a mass of $2\\text{ kg}$ for 5 seconds. The change in momentum is:",
      "options": [
        "50 Ns",
        "25 Ns",
        "100 Ns",
        "10 Ns"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\Delta p = F \\times \\Delta t = 10\\text{ N} \\times 5\\text{ s} = \\mathbf{50\\text{ Ns}}$$"
    },
    {
      "id": "phy-m-04",
      "difficulty": "easy",
      "concept": "Friction",
      "year": "JEE Prep",
      "text": "A block of mass 5 kg rests on a rough horizontal surface ($\\mu_s = 0.4$). The minimum force needed to start motion is ($g = 10\\text{ m/s}^2$):",
      "options": [
        "20 N",
        "10 N",
        "40 N",
        "50 N"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$f_s = \\mu_s N = \\mu_s mg = 0.4 \\times 5 \\times 10 = \\mathbf{20\\text{ N}}$$"
    },
    {
      "id": "phy-m-05",
      "difficulty": "hard",
      "concept": "Work-Energy Theorem",
      "year": "JEE Prep",
      "text": "A variable force $F = 3x^2 + 2x$ acts on a body moving from $x = 0$ to $x = 2\\text{ m}$. The work done is:",
      "options": [
        "12 J",
        "8 J",
        "16 J",
        "10 J"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$W = \\int_0^2 (3x^2 + 2x)\\,dx = \\left[x^3 + x^2\\right]_0^2 = 8 + 4 = \\mathbf{12\\text{ J}}$$"
    },
    {
      "id": "phy-m-06",
      "difficulty": "medium",
      "concept": "Circular Motion",
      "year": "JEE Prep",
      "text": "A car rounds an unbanked curve of radius 50 m at $10\\text{ m/s}$. The minimum coefficient of friction required is ($g = 10\\text{ m/s}^2$):",
      "options": [
        "0.2",
        "0.4",
        "0.1",
        "0.5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\mu \\ge \\frac{v^2}{rg} = \\frac{100}{50 \\times 10} = \\mathbf{0.2}$$"
    },
    {
      "id": "phy-m-07",
      "difficulty": "hard",
      "concept": "Rotational Dynamics",
      "year": "JEE Prep",
      "text": "The moment of inertia of a uniform circular disc of mass $M$ and radius $R$ about a tangent in its plane is:",
      "options": [
        "$\\frac{5}{4}MR^2$",
        "$\\frac{1}{2}MR^2$",
        "$\\frac{3}{2}MR^2$",
        "$\\frac{1}{4}MR^2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy parallel axis theorem: $I = I_{diameter} + MR^2 = \\frac{1}{4}MR^2 + MR^2 = \\mathbf{\\frac{5}{4}MR^2}$."
    },
    {
      "id": "phy-m-08",
      "difficulty": "medium",
      "concept": "Angular Momentum",
      "year": "JEE Prep",
      "text": "If torque acting on a rotating system about an axis is zero, which quantity is conserved?",
      "options": [
        "Angular momentum",
        "Linear momentum",
        "Kinetic energy",
        "Angular velocity"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\tau = \\frac{dL}{dt} = 0 \\implies L = \\text{constant}$ (conservation of angular momentum)."
    },
    {
      "id": "phy-m-09",
      "difficulty": "easy",
      "concept": "Gravitation Acceleration",
      "year": "JEE Prep",
      "text": "At what height above the Earth's surface does acceleration due to gravity become $g/4$ ($R$ = Earth radius)?",
      "options": [
        "$R$",
        "$2R$",
        "$R/2$",
        "$3R$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$g' = g \\left(\\frac{R}{R+h}\\right)^2 = \\frac{g}{4} \\implies \\frac{R}{R+h} = \\frac{1}{2} \\implies R+h = 2R \\implies h = \\mathbf{R}$$"
    },
    {
      "id": "phy-m-10",
      "difficulty": "hard",
      "concept": "Escape Velocity",
      "year": "JEE Prep",
      "text": "Escape velocity from Earth is $11.2\\text{ km/s}$. For a planet with twice Earth's mass and half Earth's radius, the escape velocity is:",
      "options": [
        "$22.4\\text{ km/s}$",
        "$11.2\\text{ km/s}$",
        "$44.8\\text{ km/s}$",
        "$5.6\\text{ km/s}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$v_e = \\sqrt{\\frac{2GM}{R}} \\implies v_p = v_e \\sqrt{\\frac{2}{1/2}} = v_e \\sqrt{4} = 2 \\times 11.2 = \\mathbf{22.4\\text{ km/s}}$$"
    },
    {
      "id": "phy-m-11",
      "difficulty": "medium",
      "concept": "Simple Harmonic Motion",
      "year": "JEE Prep",
      "text": "The equation of an SHM is $y = 5\\sin(100\\pi t)$. The frequency of oscillation is:",
      "options": [
        "50 Hz",
        "100 Hz",
        "25 Hz",
        "10 Hz"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\omega = 100\\pi = 2\\pi f \\implies f = \\frac{100\\pi}{2\\pi} = \\mathbf{50\\text{ Hz}}$$"
    },
    {
      "id": "phy-m-12",
      "difficulty": "easy",
      "concept": "Fluid Pressure",
      "year": "JEE Prep",
      "text": "Pressure at depth $h$ in a liquid of density $\\rho$ open to atmosphere is given by:",
      "options": [
        "$P_0 + \\rho gh$",
        "$\\rho gh$",
        "$P_0 - \\rho gh$",
        "$P_0 / (\\rho gh)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTotal pressure $P = P_{atm} + P_{gauge} = \\mathbf{P_0 + \\rho gh}$."
    },
    {
      "id": "phy-m-13",
      "difficulty": "hard",
      "concept": "Bernoulli's Equation",
      "year": "JEE Prep",
      "text": "In steady streamline flow of an incompressible non-viscous fluid, which law expresses conservation of energy?",
      "options": [
        "Bernoulli's principle",
        "Pascal's law",
        "Torricelli's law",
        "Poiseuille's law"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**Bernoulli's principle** ($P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$) represents the conservation of energy in fluid dynamics."
    },
    {
      "id": "phy-m-14",
      "difficulty": "medium",
      "concept": "Elastic Collisions",
      "year": "JEE Prep",
      "text": "A mass $m$ moving with speed $v$ makes a head-on elastic collision with an identical stationary mass $m$. After collision, the velocity of the first mass is:",
      "options": [
        "0",
        "$v$",
        "$v/2$",
        "$-v$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIn a head-on elastic collision between two equal masses, velocities are completely exchanged. First mass comes to rest ($v_1 = \\mathbf{0}$), second mass moves with $v$."
    },
    {
      "id": "phy-m-15",
      "difficulty": "medium",
      "concept": "Center of Mass",
      "year": "JEE Prep",
      "text": "Two particles of masses 1 kg and 3 kg are separated by 4 m. The center of mass lies at what distance from the 1 kg mass?",
      "options": [
        "3 m",
        "1 m",
        "2 m",
        "2.5 m"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$x_{cm} = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \\frac{1(0) + 3(4)}{1 + 3} = \\frac{12}{4} = \\mathbf{3\\text{ m}}$$"
    },
    {
      "id": "phy-m-16",
      "difficulty": "easy",
      "concept": "Power Calculation",
      "year": "JEE Prep",
      "text": "An engine pumps 100 kg of water to a height of 10 m in 5 seconds ($g = 10\\text{ m/s}^2$). The power of the engine is:",
      "options": [
        "2000 W",
        "1000 W",
        "500 W",
        "5000 W"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$P = \\frac{mgh}{t} = \\frac{100 \\times 10 \\times 10}{5} = \\mathbf{2000\\text{ W}}$$"
    },
    {
      "id": "phy-m-17",
      "difficulty": "hard",
      "concept": "Spring Potential Energy",
      "year": "JEE Prep",
      "text": "A spring of spring constant $k = 400\\text{ N/m}$ is compressed by $0.1\\text{ m}$. The energy stored in the spring is:",
      "options": [
        "2 J",
        "4 J",
        "20 J",
        "0.2 J"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$U = \\frac{1}{2}kx^2 = \\frac{1}{2}(400)(0.1)^2 = 200 \\times 0.01 = \\mathbf{2\\text{ J}}$$"
    },
    {
      "id": "phy-m-18",
      "difficulty": "medium",
      "concept": "Rolling Motion",
      "year": "JEE Prep",
      "text": "For a solid sphere rolling without slipping, the ratio of rotational kinetic energy to total kinetic energy is:",
      "options": [
        "2/7",
        "5/7",
        "1/2",
        "2/5"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$K_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{5}mv^2, \\quad K_{total} = \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2 \\implies \\frac{K_{rot}}{K_{total}} = \\frac{1/5}{7/10} = \\mathbf{\\frac{2}{7}}$$"
    },
    {
      "id": "phy-m-19",
      "difficulty": "easy",
      "concept": "Terminal Velocity",
      "year": "JEE Prep",
      "text": "A spherical body of radius $r$ falls through a viscous fluid. According to Stokes' law, its terminal velocity is proportional to:",
      "options": [
        "$r^2$",
        "$r$",
        "$1/r$",
        "$r^3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTerminal velocity $v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta} \\propto \\mathbf{r^2}$."
    },
    {
      "id": "phy-m-20",
      "difficulty": "medium",
      "concept": "Surface Tension",
      "year": "JEE Prep",
      "text": "Excess pressure inside a liquid drop of radius $R$ and surface tension $T$ is:",
      "options": [
        "$2T/R$",
        "$4T/R$",
        "$T/R$",
        "$T/(2R)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFor a liquid drop (1 surface): $\\Delta P = \\mathbf{2T/R}$. (For a soap bubble with 2 surfaces, it is $4T/R$)."
    },
    {
      "id": "phy-m-21",
      "difficulty": "hard",
      "concept": "Simple Pendulum in Elevator",
      "year": "JEE Prep",
      "text": "A simple pendulum has period $T$ in a stationary lift. If the lift accelerates upwards with acceleration $a = g$, the new time period is:",
      "options": [
        "$T/\\sqrt{2}$",
        "$T\\sqrt{2}$",
        "$2T$",
        "$T/2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$g_{eff} = g + a = g + g = 2g \\implies T' = 2\\pi\\sqrt{\\frac{l}{2g}} = \\frac{T}{\\mathbf{\\sqrt{2}}}$$"
    },
    {
      "id": "phy-m-22",
      "difficulty": "easy",
      "concept": "Kepler's Third Law",
      "year": "JEE Prep",
      "text": "If the distance between Earth and Sun were doubled, the period of revolution of Earth would be:",
      "options": [
        "$2\\sqrt{2}\\text{ years}$",
        "$4\\text{ years}$",
        "$2\\text{ years}$",
        "$8\\text{ years}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$T^2 \\propto R^3 \\implies T' = T (R'/R)^{3/2} = 1 \\times (2)^{3/2} = \\mathbf{2\\sqrt{2}\\text{ years}}$$"
    },
    {
      "id": "phy-m-23",
      "difficulty": "medium",
      "concept": "Torque and Angular Acceleration",
      "year": "JEE Prep",
      "text": "A constant torque of $20\\text{ Nm}$ acts on a wheel with moment of inertia $5\\text{ kg}\\cdot\\text{m}^2$. The angular acceleration produced is:",
      "options": [
        "$4\\text{ rad/s}^2$",
        "$100\\text{ rad/s}^2$",
        "$0.25\\text{ rad/s}^2$",
        "$15\\text{ rad/s}^2$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\alpha = \\frac{\\tau}{I} = \\frac{20}{5} = \\mathbf{4\\text{ rad/s}^2}$$"
    },
    {
      "id": "phy-m-24",
      "difficulty": "hard",
      "concept": "Damped Oscillations",
      "year": "JEE Prep",
      "text": "In damped harmonic motion, the amplitude of oscillations decreases with time:",
      "options": [
        "Exponentially",
        "Linearly",
        "Quadratically",
        "Sinusoidally"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe amplitude equation is $A(t) = A_0 e^{-\\gamma t}$, which decays **exponentially** with time."
    },
    {
      "id": "phy-m-25",
      "difficulty": "medium",
      "concept": "Elastic Modulus",
      "year": "JEE Prep",
      "text": "Young's modulus $Y$ of a wire of length $L$ and radius $r$ stretched by length $\\Delta L$ under load $F$ is:",
      "options": [
        "$\\frac{FL}{\\pi r^2 \\Delta L}$",
        "$\\frac{F\\Delta L}{\\pi r^2 L}$",
        "$\\frac{\\pi r^2 F}{L \\Delta L}$",
        "$\\frac{F}{\\pi r^2}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F/(\\pi r^2)}{\\Delta L/L} = \\mathbf{\\frac{FL}{\\pi r^2 \\Delta L}}$$"
    }
  ],
  "phy-elec": [
    {
      "id": "phy-e-01",
      "difficulty": "easy",
      "concept": "Coulomb's Law",
      "year": "JEE Prep",
      "text": "Two equal charges of $+1\\;\\mu\\text{C}$ are placed 1 m apart in vacuum. The electrostatic force between them is ($k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$):",
      "options": [
        "0.009 N",
        "9 N",
        "0.09 N",
        "90 N"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$F = \\frac{k q_1 q_2}{r^2} = \\frac{(9 \\times 10^9)(10^{-6})(10^{-6})}{1^2} = 9 \\times 10^{-3} = \\mathbf{0.009\\text{ N}}$$"
    },
    {
      "id": "phy-e-02",
      "difficulty": "medium",
      "concept": "Electric Field Flux",
      "year": "JEE Prep",
      "text": "According to Gauss's Law, total electric flux emerging from a closed surface enclosing charge $Q$ in vacuum is:",
      "options": [
        "$Q / \\epsilon_0$",
        "$Q \\epsilon_0$",
        "$4\\pi Q$",
        "$Q / (4\\pi\\epsilon_0)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\Phi = \\oint \\vec{E} \\cdot d\\vec{A} = \\mathbf{\\frac{Q}{\\epsilon_0}}$$"
    },
    {
      "id": "phy-e-03",
      "difficulty": "medium",
      "concept": "Electric Potential",
      "year": "JEE Prep",
      "text": "The electric potential at distance $r$ from a single point charge $q$ is proportional to:",
      "options": [
        "$1/r$",
        "$1/r^2$",
        "$r$",
        "$1/r^3$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nElectric potential $V = \\frac{kq}{r} \\propto \\mathbf{1/r}$."
    },
    {
      "id": "phy-e-04",
      "difficulty": "easy",
      "concept": "Capacitor Energy",
      "year": "JEE Prep",
      "text": "The electrostatic energy stored in a capacitor of capacitance $C$ charged to voltage $V$ is:",
      "options": [
        "$\\frac{1}{2}CV^2$",
        "$CV^2$",
        "$\\frac{1}{2}C^2 V$",
        "$CV$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$U = \\mathbf{\\frac{1}{2}CV^2} = \\frac{Q^2}{2C} = \\frac{1}{2}QV$$"
    },
    {
      "id": "phy-e-05",
      "difficulty": "hard",
      "concept": "Series Capacitors",
      "year": "JEE Prep",
      "text": "Three identical capacitors each of $6\\;\\mu\\text{F}$ are connected in series. The equivalent capacitance is:",
      "options": [
        "$2\\;\\mu\\text{F}$",
        "$18\\;\\mu\\text{F}$",
        "$3\\;\\mu\\text{F}$",
        "$1\\;\\mu\\text{F}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\frac{1}{C_{eq}} = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2} \\implies C_{eq} = \\mathbf{2\\;\\mu\\text{F}}$$"
    },
    {
      "id": "phy-e-06",
      "difficulty": "medium",
      "concept": "Drift Velocity",
      "year": "JEE Prep",
      "text": "The relation between electric current $I$ and drift velocity $v_d$ in a conductor of cross-section $A$ is:",
      "options": [
        "$I = n e A v_d$",
        "$I = n e / (A v_d)$",
        "$I = v_d / (n e A)$",
        "$I = n A / (e v_d)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$I = \\mathbf{n e A v_d}$$ where $n$ is charge carrier density and $e$ is electron charge."
    },
    {
      "id": "phy-e-07",
      "difficulty": "easy",
      "concept": "Ohm's Law Resistivity",
      "year": "JEE Prep",
      "text": "If a wire is stretched to double its original length without changing its volume, its new resistance becomes:",
      "options": [
        "4 times",
        "2 times",
        "Half",
        "Same"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$R = \\rho L/A$. If $L' = 2L$, then $A' = A/2 \\implies R' = \\rho(2L)/(A/2) = 4(\\rho L/A) = \\mathbf{4R}$."
    },
    {
      "id": "phy-e-08",
      "difficulty": "medium",
      "concept": "Wheatstone Bridge",
      "year": "JEE Prep",
      "text": "A balanced Wheatstone bridge has arms $P = 10\\;\\Omega, Q = 20\\;\\Omega, R = 15\\;\\Omega, S$. The value of $S$ is:",
      "options": [
        "$30\\;\\Omega$",
        "$25\\;\\Omega$",
        "$15\\;\\Omega$",
        "$7.5\\;\\Omega$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\frac{P}{Q} = \\frac{R}{S} \\implies \\frac{10}{20} = \\frac{15}{S} \\implies S = 15 \\times 2 = \\mathbf{30\\;\\Omega}$$"
    },
    {
      "id": "phy-e-09",
      "difficulty": "hard",
      "concept": "Kirchhoff Loop Rule",
      "year": "JEE Prep",
      "text": "Kirchhoff's Voltage Law (loop rule) is based on which conservation law?",
      "options": [
        "Conservation of energy",
        "Conservation of charge",
        "Conservation of momentum",
        "Conservation of mass"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\sum \\Delta V = 0$ along any closed loop reflects the **conservation of energy** in conservative electric fields."
    },
    {
      "id": "phy-e-10",
      "difficulty": "medium",
      "concept": "Biot-Savart Law",
      "year": "JEE Prep",
      "text": "The magnetic field at distance $r$ from a long straight wire carrying current $I$ is:",
      "options": [
        "$\\frac{\\mu_0 I}{2\\pi r}$",
        "$\\frac{\\mu_0 I}{4\\pi r^2}$",
        "$\\frac{\\mu_0 I r}{2\\pi}$",
        "$\\frac{\\mu_0 I}{2r}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Ampere's law / Biot-Savart: $B = \\mathbf{\\frac{\\mu_0 I}{2\\pi r}}$."
    },
    {
      "id": "phy-e-11",
      "difficulty": "easy",
      "concept": "Lorentz Force",
      "year": "JEE Prep",
      "text": "The total Lorentz force acting on a charge $q$ moving with velocity $\\vec{v}$ in electric field $\\vec{E}$ and magnetic field $\\vec{B}$ is:",
      "options": [
        "$q(\\vec{E} + \\vec{v} \\times \\vec{B})$",
        "$q(\\vec{E} \\cdot \\vec{B})$",
        "$q(\\vec{E} + \\vec{B})$",
        "$q(\\vec{v} \\times \\vec{E})$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\vec{F} = \\mathbf{q(\\vec{E} + \\vec{v} \\times \\vec{B})}$$"
    },
    {
      "id": "phy-e-12",
      "difficulty": "medium",
      "concept": "Circular Trajectory in B-field",
      "year": "JEE Prep",
      "text": "The radius of the circular path of a particle of mass $m$ and charge $q$ moving with speed $v$ perpendicular to field $B$ is:",
      "options": [
        "$\\frac{mv}{qB}$",
        "$\\frac{qB}{mv}$",
        "$\\frac{mB}{qv}$",
        "$\\frac{vB}{qm}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\frac{mv^2}{r} = qvB \\implies r = \\mathbf{\\frac{mv}{qB}}$$"
    },
    {
      "id": "phy-e-13",
      "difficulty": "hard",
      "concept": "Faraday's Law Induced EMF",
      "year": "JEE Prep",
      "text": "A magnetic flux through a loop changes according to $\\Phi(t) = 4t^2 + 2t\\text{ Wb}$. Magnitude of induced EMF at $t = 2\\text{ s}$ is:",
      "options": [
        "18 V",
        "16 V",
        "8 V",
        "20 V"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$|e| = \\frac{d\\Phi}{dt} = 8t + 2 \\implies \\text{At } t = 2\\text{ s}, |e| = 8(2) + 2 = \\mathbf{18\\text{ V}}$$"
    },
    {
      "id": "phy-e-14",
      "difficulty": "easy",
      "concept": "Lenz's Law",
      "year": "JEE Prep",
      "text": "Lenz's law of electromagnetic induction is in accordance with the law of conservation of:",
      "options": [
        "Energy",
        "Charge",
        "Momentum",
        "Mass"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nLenz's law states that induced current opposes the change producing it, maintaining **conservation of energy**."
    },
    {
      "id": "phy-e-15",
      "difficulty": "medium",
      "concept": "Self Inductance Energy",
      "year": "JEE Prep",
      "text": "Energy stored in an inductor of inductance $L$ carrying steady current $I$ is:",
      "options": [
        "$\\frac{1}{2}LI^2$",
        "$LI^2$",
        "$\\frac{1}{2}L^2 I$",
        "$LI$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$U = \\mathbf{\\frac{1}{2}LI^2}$$"
    },
    {
      "id": "phy-e-16",
      "difficulty": "hard",
      "concept": "LCR Resonance",
      "year": "JEE Prep",
      "text": "In a series LCR circuit with $L = 1\\text{ H}, C = 1\\;\\mu\\text{F}$, the resonant angular frequency $\\omega_0$ is:",
      "options": [
        "$1000\\text{ rad/s}$",
        "$100\\text{ rad/s}$",
        "$10^6\\text{ rad/s}$",
        "$500\\text{ rad/s}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{1 \\times 10^{-6}}} = \\frac{1}{10^{-3}} = \\mathbf{1000\\text{ rad/s}}$$"
    },
    {
      "id": "phy-e-17",
      "difficulty": "medium",
      "concept": "RMS Voltage",
      "year": "JEE Prep",
      "text": "For a domestic AC supply of 220 V (RMS), the peak voltage ($V_0$) is approximately:",
      "options": [
        "311 V",
        "220 V",
        "440 V",
        "155 V"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$V_0 = \\sqrt{2} V_{rms} = 1.414 \\times 220 \\approx \\mathbf{311\\text{ V}}$$"
    },
    {
      "id": "phy-e-18",
      "difficulty": "easy",
      "concept": "Dielectric Breakdown",
      "year": "JEE Prep",
      "text": "The maximum electric field a dielectric material can withstand without undergoing electrical breakdown is called its:",
      "options": [
        "Dielectric strength",
        "Dielectric constant",
        "Permittivity",
        "Electric susceptibility"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n**Dielectric strength** is the breakdown electric field threshold beyond which ionization and conduction occur."
    },
    {
      "id": "phy-e-19",
      "difficulty": "medium",
      "concept": "Current in Parallel Resistors",
      "year": "JEE Prep",
      "text": "A current of 6 A enters a parallel combination of $2\\;\\Omega$ and $4\\;\\Omega$ resistors. Current through the $2\\;\\Omega$ resistor is:",
      "options": [
        "4 A",
        "2 A",
        "3 A",
        "1 A"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy current divider: $I_1 = I \\frac{R_2}{R_1 + R_2} = 6 \\times \\frac{4}{2 + 4} = 6 \\times \\frac{4}{6} = \\mathbf{4\\text{ A}}$."
    },
    {
      "id": "phy-e-20",
      "difficulty": "hard",
      "concept": "Electric Dipole Torque",
      "year": "JEE Prep",
      "text": "Torque $\\vec{\\tau}$ experienced by an electric dipole $\\vec{p}$ placed in a uniform electric field $\\vec{E}$ is:",
      "options": [
        "$\\vec{p} \\times \\vec{E}$",
        "$\\vec{p} \\cdot \\vec{E}$",
        "$-\\vec{p} \\cdot \\vec{E}$",
        "$\\vec{E} \\times \\vec{p}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\vec{\\tau} = \\mathbf{\\vec{p} \\times \\vec{E}}$$ and potential energy $U = -\\vec{p} \\cdot \\vec{E}$."
    },
    {
      "id": "phy-e-21",
      "difficulty": "easy",
      "concept": "Unit of Capacitance",
      "year": "JEE Prep",
      "text": "The SI unit of capacitance is:",
      "options": [
        "Farad",
        "Coulomb",
        "Ohm",
        "Henry"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCapacitance is measured in **Farads (F)** ($1\\text{ F} = 1\\text{ C/V}$)."
    },
    {
      "id": "phy-e-22",
      "difficulty": "medium",
      "concept": "Equipotential Surfaces",
      "year": "JEE Prep",
      "text": "The work done in moving a test charge along an equipotential surface is:",
      "options": [
        "0",
        "Positive",
        "Negative",
        "Depends on path length"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSince potential difference $\\Delta V = 0$, $W = q \\Delta V = \\mathbf{0}$."
    },
    {
      "id": "phy-e-23",
      "difficulty": "hard",
      "concept": "Magnetic Flux Unit",
      "year": "JEE Prep",
      "text": "1 Weber (Wb) is equivalent to:",
      "options": [
        "$1\\text{ Tesla}\\cdot\\text{m}^2$",
        "$1\\text{ Tesla/m}^2$",
        "$1\\text{ N/A}$",
        "$1\\text{ Joule/C}$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\Phi = B \\cdot A \\implies 1\\text{ Wb} = \\mathbf{1\\text{ T}\\cdot\\text{m}^2}$$"
    },
    {
      "id": "phy-e-24",
      "difficulty": "medium",
      "concept": "Transformers",
      "year": "JEE Prep",
      "text": "In an ideal step-up transformer with turns ratio $N_s/N_p = 5$, if primary voltage is 20 V, secondary voltage is:",
      "options": [
        "100 V",
        "4 V",
        "20 V",
        "500 V"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} \\implies V_s = 20 \\times 5 = \\mathbf{100\\text{ V}}$$"
    },
    {
      "id": "phy-e-25",
      "difficulty": "easy",
      "concept": "Power Loss in Transmission",
      "year": "JEE Prep",
      "text": "Electric power is transmitted over long distances at very high voltage primarily to:",
      "options": [
        "Reduce $I^2 R$ heat loss in cables",
        "Speed up electricity flow",
        "Protect transformers",
        "Increase current"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTransmitting at high voltage reduces current $I$ for a given power $P = VI$, minimizing Joule heating loss $I^2 R$."
    }
  ],
  "algo-sort": [
    {
      "id": "sort-u01",
      "difficulty": "easy",
      "concept": "Insertion Sort Best Case",
      "year": "GATE CSE Standard",
      "text": "What is the time complexity of Insertion Sort when the input array is already completely sorted?",
      "options": [
        "$O(n)$",
        "$O(n \\log n)$",
        "$O(n^2)$",
        "$O(1)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nOnly 1 comparison per element and 0 shifts are needed, resulting in best-case **$O(n)$**."
    },
    {
      "id": "sort-u02",
      "difficulty": "medium",
      "concept": "Counting Sort Complexity",
      "year": "GATE CSE Standard",
      "text": "Counting sort sorts $n$ integers in the range $[0, k]$. Its time complexity is:",
      "options": [
        "$O(n + k)$",
        "$O(n \\log k)$",
        "$O(nk)$",
        "$O(n^2)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBuilding the frequency count and output array takes linear time **$O(n + k)$**."
    },
    {
      "id": "sort-u03",
      "difficulty": "medium",
      "concept": "Sorting Lower Bound",
      "year": "GATE CSE Standard",
      "text": "The theoretical minimum number of comparisons needed to sort $n$ items in the worst case by any comparison-based sort is:",
      "options": [
        "$\\Omega(n \\log n)$",
        "$O(n)$",
        "$O(n^2)$",
        "$O(\\log n)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDecision tree with $n!$ leaves has height $\\ge \\log_2(n!) = \\Omega(n \\log n)$."
    },
    {
      "id": "sort-u04",
      "difficulty": "hard",
      "concept": "QuickSort Worst Case Pivot",
      "year": "GATE CSE Standard",
      "text": "In standard QuickSort where the first element is chosen as pivot, the worst-case time $O(n^2)$ occurs when:",
      "options": [
        "Array is already sorted in ascending or descending order",
        "Array contains randomly shuffled elements",
        "Array has all distinct values in random order",
        "Array size is a power of 2"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPartitions become maximally unbalanced ($0$ and $n-1$ items), yielding recurrence $T(n) = T(n-1) + O(n) = O(n^2)$."
    },
    {
      "id": "sort-u05",
      "difficulty": "medium",
      "concept": "Stable Sort Definition",
      "year": "GATE CSE Standard",
      "text": "A sorting algorithm is called **stable** if it:",
      "options": [
        "Preserves the relative order of elements that have equal keys",
        "Uses $O(1)$ auxiliary space",
        "Never makes more than $n \\log n$ comparisons",
        "Operates in-place"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nStability means identical keys appear in the output in the same relative order as in the input."
    },
    {
      "id": "sort-u06",
      "difficulty": "easy",
      "concept": "Merge Sort Space",
      "year": "GATE CSE Standard",
      "text": "Standard Merge Sort on an array of size $n$ requires auxiliary space of:",
      "options": [
        "$O(n)$",
        "$O(1)$",
        "$O(\\log n)$",
        "$O(n^2)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMerging two halves requires a temporary buffer of size $n$ $\\implies O(n)$ auxiliary space."
    },
    {
      "id": "sort-u07",
      "difficulty": "hard",
      "concept": "QuickSelect Order Statistic",
      "year": "GATE CSE Standard",
      "text": "The average time complexity of QuickSelect to find the $k$-th smallest element in an unsorted array of size $n$ is:",
      "options": [
        "$O(n)$",
        "$O(n \\log n)$",
        "$O(k \\log n)$",
        "$O(n^2)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy recursing into only the partition containing $k$, expected time satisfies $T(n) = T(n/2) + O(n) = O(n)$."
    },
    {
      "id": "sort-u08",
      "difficulty": "medium",
      "concept": "Radix Sort Complexity",
      "year": "GATE CSE Standard",
      "text": "Radix sort of $n$ numbers with $d$ digits each in base $b$ takes time:",
      "options": [
        "$O(d(n + b))$",
        "$O(n \\log b)$",
        "$O(d \\cdot n^2)$",
        "$O(b^d)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRunning $d$ passes of stable Counting Sort on base $b$ takes $O(d(n + b))$."
    },
    {
      "id": "sort-u09",
      "difficulty": "easy",
      "concept": "Heap Sort In-Place",
      "year": "GATE CSE Standard",
      "text": "Heap Sort sorts an array of size $n$ in-place with worst-case time:",
      "options": [
        "$O(n \\log n)$",
        "$O(n^2)$",
        "$O(n)$",
        "$O(n \\sqrt{n})$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBuilding the max-heap takes $O(n)$ and $n$ extractions take $O(n \\log n)$ with $O(1)$ auxiliary memory."
    },
    {
      "id": "sort-u10",
      "difficulty": "hard",
      "concept": "External Merge Sort Passes",
      "year": "GATE CSE Standard",
      "text": "In external merge sort with $M$ buffer pages and $N$ total run pages, the number of merge passes required is:",
      "options": [
        "$\\lceil \\log_{M-1} (N/M) \\rceil$",
        "$\\log_2 N$",
        "$N / M$",
        "$M \\log N$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nUsing $(M - 1)$-way merging, each pass reduces runs by factor $M - 1$, taking $\\lceil \\log_{M-1}(N/M) \\rceil$ passes."
    }
  ],
  "algo-graph": [
    {
      "id": "graph-u01",
      "difficulty": "medium",
      "concept": "DAG Cycle Detection",
      "year": "GATE CSE Standard",
      "text": "A directed graph contains a cycle if and only if Depth First Search (DFS) discovers a:",
      "options": [
        "Back edge",
        "Cross edge",
        "Forward edge",
        "Tree edge"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA back edge leads to an ancestor currently on the recursion call stack, proving a directed cycle."
    },
    {
      "id": "graph-u02",
      "difficulty": "easy",
      "concept": "Topological Sort Condition",
      "year": "GATE CSE Standard",
      "text": "Topological sorting can only be performed on graphs that are:",
      "options": [
        "Directed Acyclic Graphs (DAGs)",
        "Undirected complete graphs",
        "Trees only",
        "Bipartite graphs only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTopological ordering requires a directed acyclic graph (no cycles permitted)."
    },
    {
      "id": "graph-u03",
      "difficulty": "hard",
      "concept": "Bellman-Ford Negative Cycle",
      "year": "GATE CSE Standard",
      "text": "Bellman-Ford algorithm detects negative-weight cycles reachable from the source by checking if:",
      "options": [
        "Any distance value can still be relaxed in the $V$-th iteration",
        "All edge weights are positive",
        "The queue becomes empty",
        "A vertex is visited twice"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nShortest paths in a graph without negative cycles have at most $V - 1$ edges. If relaxation succeeds on the $V$-th pass, a negative cycle exists."
    },
    {
      "id": "graph-u04",
      "difficulty": "medium",
      "concept": "Floyd-Warshall Complexity",
      "year": "GATE CSE Standard",
      "text": "The Floyd-Warshall all-pairs shortest path algorithm has time complexity:",
      "options": [
        "$O(V^3)$",
        "$O(V^2 \\log V)$",
        "$O(VE)$",
        "$O(V^2 E)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThree nested loops iterating over vertices $k, i, j$ result in $O(V^3)$ time."
    },
    {
      "id": "graph-u05",
      "difficulty": "hard",
      "concept": "Articulation Point Condition",
      "year": "GATE CSE Standard",
      "text": "In a DFS tree with root $r$, a non-root vertex $u$ is an articulation point (cut vertex) if it has a child $v$ such that:",
      "options": [
        "$\\text{low}[v] \\ge \\text{discovery}[u]$",
        "$\\text{low}[v] < \\text{discovery}[u]$",
        "$\\text{low}[u] = 0$",
        "$u$ has no back edges"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n$\\text{low}[v] \\ge \\text{discovery}[u]$ indicates no vertex in the subtree rooted at $v$ has a back edge to any ancestor of $u$."
    },
    {
      "id": "graph-u06",
      "difficulty": "medium",
      "concept": "Kruskal Minimum Spanning Tree",
      "year": "GATE CSE Standard",
      "text": "Kruskal's algorithm finds a Minimum Spanning Tree by:",
      "options": [
        "Sorting all edges by weight and adding non-cycle edges using Disjoint Set Union (DSU)",
        "Growing a single tree from an arbitrary start vertex",
        "Finding all cut vertices",
        "Repeatedly halving the graph"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nKruskal's greedy algorithm sorts edges in $O(E \\log E)$ and uses DSU find/union in near-linear time."
    },
    {
      "id": "graph-u07",
      "difficulty": "easy",
      "concept": "Bipartite 2-Coloring",
      "year": "GATE CSE Standard",
      "text": "A simple graph is bipartite if and only if it contains:",
      "options": [
        "No odd-length cycles",
        "No even-length cycles",
        "At most 2 vertices",
        "A Hamiltonian path"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nKőnig's theorem: a graph is bipartite (2-colorable) iff it contains no cycles of odd length."
    },
    {
      "id": "graph-u08",
      "difficulty": "hard",
      "concept": "Max-Flow Min-Cut Theorem",
      "year": "GATE CSE Standard",
      "text": "The Max-Flow Min-Cut theorem states that the maximum flow through a network equals the:",
      "options": [
        "Capacity of the minimum cut separating source and sink",
        "Sum of all edge capacities",
        "Maximum capacity path",
        "Minimum flow across any vertex"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nFord-Fulkerson theorem: max flow = capacity of the minimal capacity cut partition separating $s$ and $t$."
    },
    {
      "id": "graph-u09",
      "difficulty": "medium",
      "concept": "Dijkstra Non-Negative Weights",
      "year": "GATE CSE Standard",
      "text": "Dijkstra's algorithm may fail to compute shortest paths if the graph contains:",
      "options": [
        "Negative edge weights",
        "Cycles with positive weights",
        "Multiple connected components",
        "Directed edges"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDijkstra assumes adding an edge never decreases path length (greedy property), which fails for negative weights."
    }
  ],
  "algo-dp": [
    {
      "id": "dp-u01",
      "difficulty": "medium",
      "concept": "LCS Recurrence",
      "year": "GATE CSE Standard",
      "text": "If $X[i] == Y[j]$, the recurrence for Longest Common Subsequence length $L(i, j)$ is:",
      "options": [
        "$1 + L(i-1, j-1)$",
        "$\\max(L(i-1, j), L(i, j-1))$",
        "$L(i-1, j-1)$",
        "$1 + \\max(L(i-1, j), L(i, j-1))$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nWhen characters match, both prefixes contribute 1: $1 + L(i-1, j-1)$."
    },
    {
      "id": "dp-u02",
      "difficulty": "hard",
      "concept": "Matrix Chain Multiplication",
      "year": "GATE CSE Standard",
      "text": "The optimal parenthesization of matrices $A_1(10 \\times 30), A_2(30 \\times 5), A_3(5 \\times 60)$ requires minimum scalar multiplications of:",
      "options": [
        "4,500",
        "7,500",
        "18,000",
        "9,000"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n- $(A_1 A_2)A_3$: $(10 \\times 30 \\times 5) + (10 \\times 5 \\times 60) = 1500 + 3000 = \\mathbf{4500}$\\n- $A_1(A_2 A_3)$: $(30 \\times 5 \\times 60) + (10 \\times 30 \\times 60) = 9000 + 18000 = 27000$."
    },
    {
      "id": "dp-u03",
      "difficulty": "medium",
      "concept": "0/1 Knapsack Complexity",
      "year": "GATE CSE Standard",
      "text": "The dynamic programming solution for the 0/1 Knapsack problem with $n$ items and capacity $W$ has time complexity:",
      "options": [
        "$O(nW)$ (pseudo-polynomial)",
        "$O(2^n)$",
        "$O(n \\log W)$",
        "$O(n + W)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDP table size is $n \\times W$ taking $O(nW)$ time. Since $W$ is encoded in $\\log W$ bits, it is pseudo-polynomial."
    },
    {
      "id": "dp-u04",
      "difficulty": "easy",
      "concept": "Fractional Knapsack Greedy",
      "year": "GATE CSE Standard",
      "text": "Fractional Knapsack problem (items can be broken into parts) is optimally solved by:",
      "options": [
        "Greedy approach sorting items by value-to-weight ratio",
        "Dynamic programming only",
        "Branch and bound",
        "Linear search"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nGreedy choice property guarantees optimal solution by greedily taking maximum $v_i / w_i$ items."
    },
    {
      "id": "dp-u05",
      "difficulty": "hard",
      "concept": "Longest Increasing Subsequence LIS",
      "year": "GATE CSE Standard",
      "text": "The Longest Increasing Subsequence of an array of $n$ numbers can be found in optimal time:",
      "options": [
        "$O(n \\log n)$ using binary search / patience sorting",
        "$O(n^2)$ only",
        "$O(n)$",
        "$O(2^n)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMaintaining active tails array with binary search (patience sorting) yields $O(n \\log n)$."
    },
    {
      "id": "dp-u06",
      "difficulty": "medium",
      "concept": "Kadane's Algorithm Subarray",
      "year": "GATE CSE Standard",
      "text": "Kadane's algorithm computes the maximum contiguous subarray sum in time:",
      "options": [
        "$O(n)$ with $O(1)$ space",
        "$O(n \\log n)$",
        "$O(n^2)$",
        "$O(\\log n)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nAt each step: `curr_max = max(arr[i], curr_max + arr[i])`, running in linear time $O(n)$."
    },
    {
      "id": "dp-u07",
      "difficulty": "medium",
      "concept": "Edit Distance Operations",
      "year": "GATE CSE Standard",
      "text": "Levenshtein distance between strings $A$ and $B$ counts minimum number of which edit operations?",
      "options": [
        "Insertions, Deletions, and Substitutions",
        "Reversals only",
        "Swapping adjacent pairs",
        "Concatenations"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nStandard edit distance allows single character insertion, deletion, and replacement."
    },
    {
      "id": "dp-u08",
      "difficulty": "hard",
      "concept": "Held-Karp TSP DP",
      "year": "GATE CSE Standard",
      "text": "The exact Dynamic Programming algorithm for the Travelling Salesperson Problem (Held-Karp) runs in time:",
      "options": [
        "$O(n^2 2^n)$",
        "$O(n!)$",
        "$O(n^3)$",
        "$O(2^n)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nUsing subset bitmask state $(S, v)$ reduces $O(n!)$ brute-force to $O(n^2 2^n)$."
    },
    {
      "id": "dp-u09",
      "difficulty": "easy",
      "concept": "Overlapping Subproblems",
      "year": "GATE CSE Standard",
      "text": "Dynamic programming is applicable when a problem exhibits optimal substructure and:",
      "options": [
        "Overlapping subproblems",
        "Independent subproblems",
        "No memory constraints",
        "Zero cost transitions"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nMemoization and tabulation exploit overlapping subproblems to avoid recomputing identical states."
    }
  ],
  "toc-cfg": [
    {
      "id": "cfg-u01",
      "difficulty": "medium",
      "concept": "CYK Algorithm Parsing",
      "year": "GATE CSE Standard",
      "text": "The Cocke-Younger-Kasami (CYK) algorithm tests whether a string of length $n$ belongs to a CFL in time:",
      "options": [
        "$O(n^3)$",
        "$O(n^2)$",
        "$O(n \\log n)$",
        "$O(2^n)$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCYK fills a dynamic programming triangular table of size $n \\times n$, taking $O(n^3)$ time on CNF grammars."
    },
    {
      "id": "cfg-u02",
      "difficulty": "easy",
      "concept": "GNF Grammar Format",
      "year": "GATE CSE Standard",
      "text": "A context-free grammar is in Greibach Normal Form (GNF) if all production rules are of the form:",
      "options": [
        "$A \\to a \\alpha$ (terminal followed by zero or more non-terminals)",
        "$A \\to BC$ or $A \\to a$",
        "$A \\to \\alpha B$",
        "$A \\to a b c$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nGNF productions start with exactly one terminal symbol: $A \\to a \\alpha$ where $\\alpha \\in V^*$."
    },
    {
      "id": "cfg-u03",
      "difficulty": "hard",
      "concept": "CFL Closure Complementation",
      "year": "GATE CSE Standard",
      "text": "Context-Free Languages (CFLs) are NOT closed under which of the following operations?",
      "options": [
        "Intersection and Complementation",
        "Union and Concatenation",
        "Kleene Star",
        "Reversal and Homomorphism"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nIntersection of CFLs can produce non-CFLs (e.g. $a^n b^n c^m \\cap a^m b^n c^n = a^n b^n c^n$); complement is also not closed."
    },
    {
      "id": "cfg-u04",
      "difficulty": "medium",
      "concept": "DCFL Complement Closed",
      "year": "GATE CSE Standard",
      "text": "Deterministic Context-Free Languages (DCFLs accepted by DPDA) ARE closed under:",
      "options": [
        "Complementation",
        "Intersection",
        "Concatenation",
        "Kleene Star"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nDCFLs can be complemented by swapping accepting and non-accepting states in a DPDA that never loops."
    },
    {
      "id": "cfg-u05",
      "difficulty": "hard",
      "concept": "CFL Pumping Lemma Breakdown",
      "year": "GATE CSE Standard",
      "text": "In the CFL pumping lemma, string $z = uvxyz$ with $|z| \\ge p$ satisfies:",
      "options": [
        "$|vxy| \\le p$ and $|vy| \\ge 1$",
        "$|v| = |y|$",
        "$|vx| \\le p$",
        "$u = y$"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nPumping lemma conditions for CFL: $z = uv^i x y^i z \\in L$, with $|vxy| \\le p$ and $|vy| \\ge 1$."
    },
    {
      "id": "cfg-u06",
      "difficulty": "medium",
      "concept": "Non-CFL Language Proof",
      "year": "GATE CSE Standard",
      "text": "Language $L = \\{a^n b^n c^n \\mid n \\ge 0\\}$ is:",
      "options": [
        "Not context-free (Context-Sensitive)",
        "Context-free",
        "Regular",
        "Finite"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA PDA cannot maintain two independent matching counters on a single stack; provably non-CFL via pumping lemma."
    },
    {
      "id": "cfg-u07",
      "difficulty": "easy",
      "concept": "PDA Stack Acceptance",
      "year": "GATE CSE Standard",
      "text": "For Non-deterministic Pushdown Automata (NPDA), acceptance by final state and acceptance by empty stack:",
      "options": [
        "Are equivalent in computational expressive power",
        "Recognize different classes of languages",
        "Final state is more powerful",
        "Empty stack is more powerful"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBoth acceptance mechanisms recognize the exact same class of context-free languages."
    },
    {
      "id": "cfg-u08",
      "difficulty": "hard",
      "concept": "CFL Decidability Universality",
      "year": "GATE CSE Standard",
      "text": "The problem of determining whether a given Context-Free Grammar generates all strings ($L(G) = \\Sigma^*$) is:",
      "options": [
        "Undecidable",
        "Decidable in polynomial time",
        "Decidable in exponential time",
        "Primitive recursive"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nUniversality and equivalence of CFGs are well-known undecidable problems (reducible to Post Correspondence Problem)."
    },
    {
      "id": "cfg-u09",
      "difficulty": "medium",
      "concept": "CFL Emptiness Decidability",
      "year": "GATE CSE Standard",
      "text": "The problem of determining whether a Context-Free Grammar produces an empty language ($L(G) = \\emptyset$) is:",
      "options": [
        "Decidable in polynomial time",
        "Undecidable",
        "Semi-decidable only",
        "NP-complete"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEmptiness is decidable by checking whether any terminal string can be generated from the start symbol."
    }
  ],
  "toc-tm": [
    {
      "id": "tm-u01",
      "difficulty": "easy",
      "concept": "Rice's Theorem Statement",
      "year": "GATE CSE Standard",
      "text": "Rice's theorem states that any non-trivial semantic property of:",
      "options": [
        "Recursively Enumerable languages is undecidable",
        "Regular languages is undecidable",
        "Context-free languages is decidable",
        "Turing machines has polynomial verification"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRice's theorem: any non-trivial property of the language recognized by a Turing machine is undecidable."
    },
    {
      "id": "tm-u02",
      "difficulty": "medium",
      "concept": "Multi-tape TM Equivalence",
      "year": "GATE CSE Standard",
      "text": "A multi-tape Turing machine can be simulated by a single-tape Turing machine with at most:",
      "options": [
        "Quadratic time slowdown ($O(T^2)$)",
        "Exponential slowdown",
        "Linear time",
        "No slowdown"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA single-tape TM can track $k$ tapes with tracks and heads in $O(T^2)$ time; language class is identical."
    },
    {
      "id": "tm-u03",
      "difficulty": "hard",
      "concept": "Diagonalization Language",
      "year": "GATE CSE Standard",
      "text": "The diagonalization language $L_d = \\{w_i \\mid w_i \\notin L(M_i)\\}$ is:",
      "options": [
        "Neither recursive nor recursively enumerable (not in RE)",
        "Recursively enumerable but not recursive",
        "Recursive",
        "Context-free"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nBy Cantor's diagonal argument, $L_d$ cannot be recognized by any Turing machine; $L_d \\notin RE$."
    },
    {
      "id": "tm-u04",
      "difficulty": "medium",
      "concept": "Halting Problem Classification",
      "year": "GATE CSE Standard",
      "text": "The Turing machine Halting Problem $H$ is:",
      "options": [
        "Recursively Enumerable (RE) but not recursive (undecidable)",
        "Recursive (decidable)",
        "Not recursively enumerable",
        "Context-free"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nA universal TM can simulate $M$ on $w$ and halt if it halts (semi-decidable / RE), but cannot decide non-halting."
    },
    {
      "id": "tm-u05",
      "difficulty": "easy",
      "concept": "Recursive Language Complement",
      "year": "GATE CSE Standard",
      "text": "If a language $L$ is Recursive (decidable), its complement $\\overline{L}$ is:",
      "options": [
        "Recursive (decidable)",
        "Not in RE",
        "RE but not recursive",
        "Undecidable"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nRecursive languages are closed under complement (flip yes/no outputs of the decider TM)."
    },
    {
      "id": "tm-u06",
      "difficulty": "hard",
      "concept": "Post Correspondence Problem",
      "year": "GATE CSE Standard",
      "text": "The Post Correspondence Problem (PCP) over an alphabet with at least 2 symbols is:",
      "options": [
        "Undecidable",
        "Decidable in $O(n^2)$",
        "Decidable for all alphabets",
        "Equivalent to DFA equivalence"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nEmil Post proved in 1946 that PCP is undecidable via reduction from the Halting Problem."
    },
    {
      "id": "tm-u07",
      "difficulty": "medium",
      "concept": "Turing Recognizable Definition",
      "year": "GATE CSE Standard",
      "text": "A language is called **Turing-recognizable** (Recursively Enumerable) if:",
      "options": [
        "Some Turing machine accepts all strings in $L$ and either rejects or loops on strings not in $L$",
        "A Turing machine halts on all inputs",
        "It can be parsed in linear time",
        "It has a regular expression"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nTuring-recognizable / RE languages require acceptance of valid strings; non-members may loop infinitely."
    },
    {
      "id": "tm-u08",
      "difficulty": "medium",
      "concept": "Church-Turing Thesis",
      "year": "GATE CSE Standard",
      "text": "The Church-Turing thesis asserts that:",
      "options": [
        "Any algorithmic computation that can be carried out by a physical computer can be performed by a Turing machine",
        "P = NP",
        "All mathematical statements are provable",
        "Turing machines are infinite in speed"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nThe Church-Turing thesis equates our intuitive notion of effective computation with Turing machine computability."
    }
  ],
  "dbms-sql": [
    {
      "id": "sql-u01",
      "difficulty": "easy",
      "concept": "WHERE vs HAVING",
      "year": "GATE CSE Standard",
      "text": "In SQL, the `HAVING` clause is used to filter:",
      "options": [
        "Groups after aggregation (`GROUP BY`)",
        "Individual rows before aggregation",
        "Table columns",
        "Primary keys only"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n`WHERE` filters individual rows prior to grouping; `HAVING` filters aggregated groups."
    },
    {
      "id": "sql-u02",
      "difficulty": "medium",
      "concept": "COUNT with NULLs",
      "year": "GATE CSE Standard",
      "text": "In SQL, what is the difference between `COUNT(*)` and `COUNT(column_name)`?",
      "options": [
        "`COUNT(*)` counts all rows including NULLs; `COUNT(column)` ignores NULL entries",
        "They are completely identical",
        "`COUNT(*)` ignores NULLs",
        "`COUNT(column)` returns column width"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n`COUNT(*)` counts total rows; `COUNT(col)` counts rows where `col IS NOT NULL`."
    },
    {
      "id": "sql-u03",
      "difficulty": "hard",
      "concept": "ACID Isolation Levels",
      "year": "GATE CSE Standard",
      "text": "The highest transaction isolation level in SQL that prevents dirty reads, non-repeatable reads, and phantom reads is:",
      "options": [
        "SERIALIZABLE",
        "REPEATABLE READ",
        "READ COMMITTED",
        "READ UNCOMMITTED"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nSERIALIZABLE completely isolates concurrent transactions, eliminating all concurrency anomalies."
    },
    {
      "id": "sql-u04",
      "difficulty": "medium",
      "concept": "Two-Phase Locking 2PL",
      "year": "GATE CSE Standard",
      "text": "Basic Two-Phase Locking (2PL) protocol ensures:",
      "options": [
        "Conflict serializability",
        "Deadlock freedom",
        "Freedom from starvation",
        "Zero cascading rollbacks"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n2PL (growing phase followed by shrinking phase) guarantees conflict-serializable schedules, though deadlocks may still occur."
    },
    {
      "id": "sql-u05",
      "difficulty": "easy",
      "concept": "Cartesian Product Cardinality",
      "year": "GATE CSE Standard",
      "text": "If relation $R$ has 10 tuples and relation $S$ has 20 tuples, the Cartesian product $R \\times S$ has:",
      "options": [
        "200 tuples",
        "30 tuples",
        "2 tuples",
        "10 tuples"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nCardinality of Cartesian product is $|R| \\times |S| = 10 \\times 20 = \\mathbf{200}$."
    },
    {
      "id": "sql-u06",
      "difficulty": "medium",
      "concept": "Natural Join Elimination",
      "year": "GATE CSE Standard",
      "text": "A natural join $R \\bowtie S$ differs from a Cartesian product because it:",
      "options": [
        "Performs an equijoin on all common attribute names and eliminates duplicate columns",
        "Concatenates all columns without comparison",
        "Includes only primary key rows",
        "Returns a cross product"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nNatural join matches attributes with identical names and retains only one copy of each common attribute."
    },
    {
      "id": "sql-u07",
      "difficulty": "hard",
      "concept": "Write-Ahead Logging WAL",
      "year": "GATE CSE Standard",
      "text": "The Write-Ahead Logging (WAL) protocol requires that:",
      "options": [
        "Log records describing a database update must reach non-volatile disk before the corresponding page is written to disk",
        "All transactions must write to disk simultaneously",
        "Logs are written after commit only",
        "No logs are maintained for read operations"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\nWAL guarantees Atomicity and Durability (undo/redo) during crash recovery."
    },
    {
      "id": "sql-u08",
      "difficulty": "medium",
      "concept": "UNION vs UNION ALL",
      "year": "GATE CSE Standard",
      "text": "The primary difference between SQL `UNION` and `UNION ALL` is that:",
      "options": [
        "`UNION` removes duplicate rows; `UNION ALL` retains all rows including duplicates",
        "`UNION ALL` is slower",
        "`UNION` works only on numbers",
        "`UNION ALL` requires sorted tables"
      ],
      "correctAnswerIndex": 0,
      "explanation": "### Solution\\n`UNION` performs an internal sort/hash to eliminate duplicates; `UNION ALL` appends directly without deduplication."
    }
  ]
};
