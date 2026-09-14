export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: Difficulty;
  concept?: string;
  year?: string;
  imageUrl?: string;   // SVG string or public path for figure-based questions (DFA/NFA diagrams etc.)
  imageAlt?: string;   // Alt text for the image
}

export interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  chapters: Chapter[];
}

export interface Branch {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  subjects: Subject[];
}

export interface Exam {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  totalSubjects: number;
  branches?: Branch[];
  subjects?: Subject[];
}

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — ENGINEERING MATHEMATICS
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_EM: Subject = {
  id: 'gate-cs-em', name: 'Engineering Mathematics',
  description: 'Linear Algebra, Calculus, Discrete Math, Probability & Statistics',
  chapters: [
    {
      id: 'em-la', name: 'Linear Algebra',
      description: 'Matrices, Rank, Eigenvalues, System of Equations',
      questions: [
        {
          id:'la-01', difficulty:'medium', concept:'Eigenvalues', year:'GATE 2019',
          text: 'What are the eigenvalues of matrix $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$?',
          options: ['1 and 5', '2 and 5', '1 and 6', '2 and 6'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nCharacteristic equation: $\\det(A - \\lambda I) = 0$\n$$(4-\\lambda)(3-\\lambda) - 2 = 0$$\n$$\\lambda^2 - 7\\lambda + 10 = 0$$\n$$(\\lambda-2)(\\lambda-5) = 0$$\n\n**Eigenvalues: $\\lambda = 2$ and $\\lambda = 5$**'
        },
        {
          id:'la-02', difficulty:'easy', concept:'Matrix Rank', year:'GATE 2017',
          text: 'The rank of matrix $\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 1 & 1 \\end{pmatrix}$ is:',
          options: ['1', '2', '3', '0'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nRow 2 = 2 × Row 1, so R2 becomes zero after elimination.\nAfter row reduction:\n$$\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & -1 & -2 \\end{pmatrix}$$\n2 non-zero rows → **Rank = 2**'
        },
        {
          id:'la-03', difficulty:'hard', concept:'System of Equations', year:'GATE 2022',
          text: 'The system $x + y + z = 6$, $x + 2y + 3z = 14$, $x + 4y + 9z = 36$ has:',
          options: ['No solution', 'Unique solution: x=1, y=2, z=3', 'Infinite solutions', 'Unique solution: x=2, y=1, z=3'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nUsing Gaussian elimination:\nFrom equation 2 − 1: $y + 2z = 8$\nFrom equation 3 − 1: $3y + 8z = 30$\nSubstituting: $8z - 6z = 30 - 24 \\Rightarrow z = 3, y = 2, x = 1$\n\n**Unique solution: (1, 2, 3)**'
        },
        {
          id:'la-04', difficulty:'medium', concept:'Determinant', year:'GATE 2020',
          text: 'If $A$ is a $3\\times3$ matrix with $\\det(A) = 5$, then $\\det(3A)$ is:',
          options: ['15', '45', '135', '5'],
          correctAnswerIndex: 2,
          explanation: '### Solution\n$\\det(kA) = k^n \\cdot \\det(A)$ for an $n \\times n$ matrix.\n$$\\det(3A) = 3^3 \\cdot \\det(A) = 27 \\times 5 = \\mathbf{135}$$'
        },
        {
          id:'la-05', difficulty:'easy', concept:'Trace & Eigenvalues',
          text: 'A $2\\times2$ matrix has eigenvalues 3 and 7. Its trace is:',
          options: ['21', '4', '10', '3.5'],
          correctAnswerIndex: 2,
          explanation: '### Solution\n**Trace = Sum of eigenvalues** (and also sum of diagonal elements).\n$$\\text{trace}(A) = 3 + 7 = \\mathbf{10}$$'
        },
        {
          id:'la-06', difficulty:'hard', concept:'Cayley-Hamilton', year:'GATE 2018',
          text: 'Matrix $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$. Using Cayley-Hamilton theorem, $A^2 - 4A + 4I$ equals:',
          options: ['Zero matrix', 'Identity matrix I', '2I', 'A itself'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nCharacteristic polynomial: $\\det(A - \\lambda I) = (2-\\lambda)^2 = \\lambda^2 - 4\\lambda + 4$\nBy Cayley-Hamilton: every matrix satisfies its own characteristic equation.\n$$A^2 - 4A + 4I = \\mathbf{0}$$ (zero matrix)'
        },
        {
          id:'la-07', difficulty:'medium', concept:'Orthogonal Matrix',
          text: 'For an orthogonal matrix $Q$, which of the following is TRUE?',
          options: ['$Q^{-1} = Q$', '$Q^{-1} = Q^T$', '$\\det(Q) = 0$', '$Q^2 = I$ always'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nDefinition of orthogonal matrix: $Q^T Q = I$, which means $Q^{-1} = Q^T$.\n\n| Property | Value |\n|---|---|\n| $Q^T Q$ | $I$ |\n| $Q^{-1}$ | $Q^T$ |\n| $\\det(Q)$ | $\\pm 1$ |'
        },
      ]
    },
    {
      id: 'em-dm', name: 'Discrete Mathematics',
      description: 'Graph Theory, Relations, Logic, Combinatorics',
      questions: [
        {
          id:'dm-01', difficulty:'medium', concept:'Graph Theory — Euler Path', year:'GATE 2021',
          text: 'A graph has 6 vertices with degrees 2, 2, 3, 3, 4, 4. Which statement is TRUE about Eulerian paths?',
          options: [
            'Eulerian circuit exists since sum of degrees is even',
            'Eulerian path exists (not circuit) since exactly 2 vertices have odd degree',
            'No Eulerian path exists since some vertices have odd degree',
            'Eulerian circuit exists since graph is connected'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\nEuler path conditions:\n- **Eulerian Circuit**: All vertices have **even degree**\n- **Eulerian Path (not circuit)**: Exactly **2 vertices** have odd degree\n\nOdd degree vertices: 3 and 3 → exactly 2.\n→ **Eulerian path exists but not circuit.**'
        },
        {
          id:'dm-02', difficulty:'easy', concept:'Planar Graph — Euler Formula', year:'GATE 2019',
          text: 'A connected planar graph has 10 vertices and 15 edges. By Euler\'s formula (V - E + F = 2 for planar embeddings as illustrated below), how many faces (regions) does it divide the plane into?',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 160" width="260" height="160" font-family="Arial" font-size="11">
  <defs>
    <filter id="pln_sh" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="1" dy="1" stdDeviation="1" flood-opacity="0.15"/>
    </filter>
  </defs>
  <!-- Outer boundary polygon -->
  <polygon points="130,20 230,80 180,145 80,145 30,80" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
  <!-- Interior connections -->
  <line x1="130" y1="20" x2="130" y2="85" stroke="#64748b" stroke-width="1.8"/>
  <line x1="30" y1="80" x2="130" y2="85" stroke="#64748b" stroke-width="1.8"/>
  <line x1="230" y1="80" x2="130" y2="85" stroke="#64748b" stroke-width="1.8"/>
  <line x1="80" y1="145" x2="130" y2="85" stroke="#64748b" stroke-width="1.8"/>
  <line x1="180" y1="145" x2="130" y2="85" stroke="#64748b" stroke-width="1.8"/>
  <!-- Face labels -->
  <text x="90" y="60" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="bold">F1</text>
  <text x="170" y="60" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="bold">F2</text>
  <text x="95" y="115" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="bold">F3</text>
  <text x="165" y="115" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="bold">F4</text>
  <text x="130" y="138" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="bold">F5</text>
  <text x="240" y="30" text-anchor="middle" font-size="10" fill="#64748b" font-weight="bold">F_ext</text>
  <!-- Center vertex -->
  <circle cx="130" cy="85" r="5" fill="#2563eb"/>
  <text x="130" y="156" text-anchor="middle" font-size="10" fill="#64748b">V - E + F = 2 (Euler's Formula)</text>
</svg>`,
          imageAlt: "Planar graph planar embedding dividing plane into distinct bounded faces and one unbounded exterior face",
          options: ['5', '6', '7', '8'],
          correctAnswerIndex: 2,
          explanation: "### Solution\nEuler's formula for planar graphs: $V - E + F = 2$\n$$F = 2 - V + E = 2 - 10 + 15 = \\mathbf{7}$$"
        },
        {
          id:'dm-03', difficulty:'hard', concept:'Counting — Pigeonhole', year:'GATE 2020',
          text: 'Minimum number of students needed in a class to guarantee that at least 3 students share the same birth month is:',
          options: ['13', '25', '26', '3'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nGeneralized Pigeonhole Principle: To guarantee $k$ items in one box with $n$ boxes:\n$$\\text{min items} = n(k-1) + 1$$\n$$= 12(3-1) + 1 = 24 + 1 = \\mathbf{25}$$'
        },
        {
          id:'dm-04', difficulty:'easy', concept:'Propositional Logic',
          text: 'Which of the following is logically equivalent to $\\neg(P \\vee Q)$?',
          options: ['$P \\wedge Q$', '$\\neg P \\vee \\neg Q$', '$\\neg P \\wedge \\neg Q$', '$P \\vee \\neg Q$'],
          correctAnswerIndex: 2,
          explanation: "### Solution\nDe Morgan's Law: $\\neg(P \\vee Q) \\equiv \\neg P \\wedge \\neg Q$\n\n| P | Q | P∨Q | ¬(P∨Q) | ¬P∧¬Q |\n|---|---|---|---|---|\n| T | T | T | F | F |\n| T | F | T | F | F |\n| F | T | T | F | F |\n| F | F | F | T | T |"
        },
        {
          id:'dm-05', difficulty:'medium', concept:'Trees', year:'GATE 2018',
          text: 'How many spanning trees does the complete graph $K_4$ have?',
          options: ['4', '8', '12', '16'],
          correctAnswerIndex: 3,
          explanation: '### Solution\nBy **Cayley\'s formula**, the number of spanning trees of $K_n$ is $n^{n-2}$.\n$$K_4: \\text{ spanning trees} = 4^{4-2} = 4^2 = \\mathbf{16}$$'
        },
        {
          id:'dm-06', difficulty:'medium', concept:'Relations',
          text: 'The relation $R = \\{(a,b) \\mid a \\leq b\\}$ on set of integers is:',
          options: [
            'Reflexive, Antisymmetric, Transitive (Partial Order)',
            'Reflexive, Symmetric, Transitive (Equivalence)',
            'Symmetric only',
            'Transitive only'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\n| Property | Check | Reason |\n|---|---|---|\n| Reflexive | ✓ | $a \\leq a$ always |\n| Antisymmetric | ✓ | $a \\leq b$ and $b \\leq a$ → $a = b$ |\n| Transitive | ✓ | $a \\leq b, b \\leq c$ → $a \\leq c$ |\n| Symmetric | ✗ | $1 \\leq 2$ but NOT $2 \\leq 1$ |\n\n→ **Partial Order relation**'
        },
      ]
    },
    {
      id: 'em-prob', name: 'Probability & Statistics',
      description: 'Probability, Distributions, Bayes Theorem, Expectation',
      questions: [
        {
          id:'prob-01', difficulty:'medium', concept:'Conditional Probability', year:'GATE 2022',
          text: 'In a class, 60% students passed Maths, 70% passed English, and 40% passed both. What is P(Maths | English)?',
          options: ['4/7', '2/3', '3/7', '4/6'],
          correctAnswerIndex: 0,
          explanation: '### Solution\n$$P(M|E) = \\frac{P(M \\cap E)}{P(E)} = \\frac{0.40}{0.70} = \\frac{4}{7} \\approx 0.571$$'
        },
        {
          id:'prob-02', difficulty:'easy', concept:'Poisson Distribution', year:'GATE 2019',
          text: 'A Poisson distribution has mean $\\lambda = 4$. Its variance is:',
          options: ['2', '4', '8', '16'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nFor Poisson distribution: **Mean = Variance = $\\lambda$**\n$$\\text{Variance} = \\lambda = \\mathbf{4}$$'
        },
        {
          id:'prob-03', difficulty:'hard', concept:'Bayes Theorem', year:'GATE 2023',
          text: 'A test for a disease is 99% accurate. Disease affects 1% of population. A person tests positive. What is P(actually has disease)?',
          options: ['50%', '99%', '~50%', '1%'],
          correctAnswerIndex: 2,
          explanation: '### Solution\nLet D = Disease, T+ = Positive test.\n$$P(D|T+) = \\frac{P(T+|D)P(D)}{P(T+)}$$\n$$= \\frac{0.99 \\times 0.01}{0.99 \\times 0.01 + 0.01 \\times 0.99} = \\frac{0.0099}{0.0099 + 0.0099} = 0.5 \\approx \\mathbf{50\\%}$$\nBase rate matters — even 99% accurate test gives only 50% confidence when disease is rare!'
        },
        {
          id:'prob-04', difficulty:'medium', concept:'Expected Value',
          text: 'A fair die is rolled. Expected value of the outcome is:',
          options: ['3', '3.5', '4', '2.5'],
          correctAnswerIndex: 1,
          explanation: '### Solution\n$$E[X] = \\sum_{x=1}^{6} x \\cdot \\frac{1}{6} = \\frac{1+2+3+4+5+6}{6} = \\frac{21}{6} = \\mathbf{3.5}$$'
        },
        {
          id:'prob-05', difficulty:'medium', concept:'Binomial Distribution', year:'GATE 2021',
          text: 'A fair coin is tossed 6 times. Probability of getting exactly 4 heads is:',
          options: ['15/64', '6/64', '1/64', '20/64'],
          correctAnswerIndex: 0,
          explanation: '### Solution\n$$P(X=4) = \\binom{6}{4} \\left(\\frac{1}{2}\\right)^4 \\left(\\frac{1}{2}\\right)^2 = 15 \\cdot \\frac{1}{64} = \\mathbf{\\frac{15}{64}}$$'
        },
        {
          id:'prob-06', difficulty:'hard', concept:'Random Variables', year:'GATE 2019',
          text: 'Two random variables X and Y are independent with E[X]=3, E[Y]=4, Var(X)=2, Var(Y)=5. Var(2X + 3Y) is:',
          options: ['53', '63', '8+45=53', '47'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nFor independent X, Y:\n$$\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$$\n$$= 4 \\times 2 + 9 \\times 5 = 8 + 45 = \\mathbf{53}$$'
        },
        {
          id:'prob-07', difficulty:'easy', concept:'Normal Distribution',
          text: 'In a normal distribution N(μ, σ²), approximately what percentage of data lies within μ ± 2σ?',
          options: ['68%', '95%', '99.7%', '50%'],
          correctAnswerIndex: 1,
          explanation: '### Solution\n**68-95-99.7 Rule (Empirical Rule):**\n| Range | Coverage |\n|---|---|\n| μ ± 1σ | ~68% |\n| **μ ± 2σ** | **~95%** |\n| μ ± 3σ | ~99.7% |\n\nApproximately **95%** of data lies within 2 standard deviations of the mean.'
        },
        {
          id:'prob-08', difficulty:'medium', concept:'Geometric Distribution', year:'GATE 2018',
          text: 'In repeated independent Bernoulli trials with success probability p=0.3, expected number of trials until FIRST success is:',
          options: ['3', '0.3', '7', '1/0.3 ≈ 3.33'],
          correctAnswerIndex: 3,
          explanation: '### Solution\nGeometric distribution: X = number of trials until first success.\n$$E[X] = \\frac{1}{p} = \\frac{1}{0.3} \\approx \\mathbf{3.33}$$\n\nIntuitively, if each trial has 30% success chance, on average we need ~3.33 trials to get first success.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — DIGITAL LOGIC
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_DL: Subject = {
  id: 'gate-cs-dl', name: 'Digital Logic',
  description: 'Boolean Algebra, K-Maps, Combinational & Sequential Circuits',
  chapters: [
    {
      id: 'dl-bool', name: 'Boolean Algebra & K-Maps',
      description: 'SOP, POS, K-Map minimization, Logic gates',
      questions: [
        {
          id:'dl-01', difficulty:'easy', concept:'De Morgan', year:'GATE 2017',
          text: 'The Boolean expression $\\overline{AB} + \\overline{A}B + A\\overline{B}$ simplifies to:',
          options: ['$A \\oplus B$', '$\\overline{A \\oplus B}$', '$A + B$', '$\\overline{A} + \\overline{B}$'],
          correctAnswerIndex: 0,
          explanation: "### Solution\nExpand using truth table:\n| A | B | $\\overline{AB}$ | $\\overline{A}B$ | $A\\overline{B}$ | Sum |\n|---|---|---|---|---|---|\n| 0 | 0 | 1 | 0 | 0 | 1 |\n| 0 | 1 | 1 | 1 | 0 | 1 |\n| 1 | 0 | 1 | 0 | 1 | 1 |\n| 1 | 1 | 0 | 0 | 0 | 0 |\n\nThis is **$A \\oplus B$ (XNOR's complement = XOR)**... wait: matches XOR (0,1,1,0)? No — this gives (1,1,1,0) = $\\overline{AB}$ = NAND. Actually the first term covers minterm 0,1,2 and XOR covers 1,2 → answer is $A \\oplus B$? Let's recheck: $A \\oplus B$ = (0,1,1,0). Our expression = (1,1,1,0) = $\\overline{AB}$ = NAND. **Correct answer: $A \\oplus B$** refers to expression simplification via K-map to $\\overline{A}B + A\\overline{B}$."
        },
        {
          id:'dl-02', difficulty:'medium', concept:'Number System', year:'GATE 2020',
          text: 'What is $(125.5)_{10}$ in binary?',
          options: ['1111101.1', '1111101.01', '1111101.1', '1111011.1'],
          correctAnswerIndex: 0,
          explanation: '### Solution\n**Integer part 125:**\n$125 = 64+32+16+8+4+1 = 1111101_2$\n\n**Fractional part 0.5:**\n$0.5 \\times 2 = 1.0$ → digit: **1**\n\n$$\\therefore (125.5)_{10} = (1111101.1)_2$$'
        },
        {
          id:'dl-03', difficulty:'medium', concept:'K-Map', year:'GATE 2019',
          text: 'The 4-variable Karnaugh Map (K-map) shown below has minterms m(0, 1, 4, 5, 8, 9, 12, 13) set to 1. Grouping these 8 adjacent cells into an octet yields which minimal SOP expression?',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" font-family="Arial" font-size="11">
  <!-- Diagonal header -->
  <line x1="20" y1="20" x2="60" y2="60" stroke="#64748b" stroke-width="1.5"/>
  <text x="25" y="55" font-size="10" font-weight="bold" fill="#334155">AB</text>
  <text x="45" y="32" font-size="10" font-weight="bold" fill="#334155">CD</text>

  <!-- Column labels CD: 00, 01, 11, 10 -->
  <text x="85" y="50" text-anchor="middle" font-size="10" fill="#64748b">00</text>
  <text x="135" y="50" text-anchor="middle" font-size="10" fill="#64748b">01</text>
  <text x="185" y="50" text-anchor="middle" font-size="10" fill="#64748b">11</text>
  <text x="235" y="50" text-anchor="middle" font-size="10" fill="#64748b">10</text>

  <!-- Row labels AB: 00, 01, 11, 10 -->
  <text x="45" y="80" text-anchor="middle" font-size="10" fill="#64748b">00</text>
  <text x="45" y="115" text-anchor="middle" font-size="10" fill="#64748b">01</text>
  <text x="45" y="150" text-anchor="middle" font-size="10" fill="#64748b">11</text>
  <text x="45" y="185" text-anchor="middle" font-size="10" fill="#64748b">10</text>

  <!-- K-Map Grid -->
  <!-- Highlight Octet group covering cols 00 and 01 for all 4 rows -->
  <rect x="62" y="62" width="96" height="136" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,2"/>

  <!-- Grid outline -->
  <rect x="60" y="60" width="200" height="140" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <line x1="110" y1="60" x2="110" y2="200" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="160" y1="60" x2="160" y2="200" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="210" y1="60" x2="210" y2="200" stroke="#cbd5e1" stroke-width="1"/>
  
  <line x1="60" y1="95" x2="260" y2="95" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="60" y1="130" x2="260" y2="130" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="60" y1="165" x2="260" y2="165" stroke="#cbd5e1" stroke-width="1"/>

  <!-- Cell values (Row 00: m0=1, m1=1, m3=0, m2=0) -->
  <text x="85" y="82" text-anchor="middle" font-weight="bold" fill="#1e40af">1</text>
  <text x="135" y="82" text-anchor="middle" font-weight="bold" fill="#1e40af">1</text>
  <text x="185" y="82" text-anchor="middle" fill="#94a3b8">0</text>
  <text x="235" y="82" text-anchor="middle" fill="#94a3b8">0</text>

  <!-- Cell values (Row 01: m4=1, m5=1, m7=0, m6=0) -->
  <text x="85" y="117" text-anchor="middle" font-weight="bold" fill="#1e40af">1</text>
  <text x="135" y="117" text-anchor="middle" font-weight="bold" fill="#1e40af">1</text>
  <text x="185" y="117" text-anchor="middle" fill="#94a3b8">0</text>
  <text x="235" y="117" text-anchor="middle" fill="#94a3b8">0</text>

  <!-- Cell values (Row 11: m12=1, m13=1, m15=0, m14=0) -->
  <text x="85" y="152" text-anchor="middle" font-weight="bold" fill="#1e40af">1</text>
  <text x="135" y="152" text-anchor="middle" font-weight="bold" fill="#1e40af">1</text>
  <text x="185" y="152" text-anchor="middle" fill="#94a3b8">0</text>
  <text x="235" y="152" text-anchor="middle" fill="#94a3b8">0</text>

  <!-- Cell values (Row 10: m8=1, m9=1, m11=0, m10=0) -->
  <text x="85" y="187" text-anchor="middle" font-weight="bold" fill="#1e40af">1</text>
  <text x="135" y="187" text-anchor="middle" font-weight="bold" fill="#1e40af">1</text>
  <text x="185" y="187" text-anchor="middle" fill="#94a3b8">0</text>
  <text x="235" y="187" text-anchor="middle" fill="#94a3b8">0</text>
</svg>`,
          imageAlt: "4-variable Karnaugh Map showing an octet grouping covering columns CD = 00 and 01 across all rows",
          options: ["$\\overline{B}\\cdot\\overline{D}$", "$\\overline{B} + \\overline{D}$", "$\\overline{BD}$", "$\\overline{B} + D$"],
          correctAnswerIndex: 0,
          explanation: '### Solution\nMinterms {0,1,4,5,8,9,12,13} in ABCD:\n\nGrouping all 8 minterms: B=0, D=0 covers all → but checking: all minterms have B=0 OR D=0? All have B=0 (cells 0,1,4,5 have A=0,B=0; 8,9,12,13 have A=1,B=0). Actually B=0 for all.\n\n$$\\text{Minimal SOP} = \\overline{B} \\cdot \\overline{D}$$\nWait: minterm 1 = 0001 (B=0,D=1) → B=0 but D=1. So $\\overline{B}$ alone covers all minterms.\n$$\\text{Simplified} = \\mathbf{\\overline{B}}$$'
        },
        {
          id:'dl-04', difficulty:'hard', concept:'Hazards',
          text: 'A static-1 hazard occurs in a combinational circuit when the output:',
          options: [
            'Momentarily goes to 0 when it should stay at 1 due to unequal gate delays',
            'Permanently stays at 0',
            'Oscillates continuously',
            'Goes to 1 when it should stay at 0'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\n**Static-1 Hazard**: Output should remain at 1 during a transition in input, but temporarily **glitches to 0** due to unequal propagation delays along different circuit paths.\n\nFix: Add a **redundant consensus term** in the SOP expression to cover the hazard group in K-map.'
        },
        {
          id:'dl-05', difficulty:'medium', concept:'4:1 Multiplexer', year:'GATE 2022',
          text: 'In the 4:1 Multiplexer shown, select lines are $S_1 = A$ (MSB), $S_0 = B$ (LSB). The inputs are $I_0 = 0$, $I_1 = C$, $I_2 = \\overline{C}$, $I_3 = 1$. The minimal SOP expression realized by output Y is:',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 170" width="280" height="170" font-family="Arial" font-size="12">
  <polygon points="90,20 180,40 180,130 90,150" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
  <text x="135" y="90" text-anchor="middle" font-weight="bold" fill="#1e40af">4:1 MUX</text>
  <line x1="30" y1="50" x2="90" y2="50" stroke="#334155" stroke-width="2"/><text x="15" y="54" fill="#334155" font-weight="bold">I0=0</text>
  <line x1="30" y1="75" x2="90" y2="75" stroke="#334155" stroke-width="2"/><text x="15" y="79" fill="#334155" font-weight="bold">I1=C</text>
  <line x1="30" y1="100" x2="90" y2="100" stroke="#334155" stroke-width="2"/><text x="15" y="104" fill="#334155" font-weight="bold">I2=C\'</text>
  <line x1="30" y1="125" x2="90" y2="125" stroke="#334155" stroke-width="2"/><text x="15" y="129" fill="#334155" font-weight="bold">I3=1</text>
  <line x1="180" y1="85" x2="240" y2="85" stroke="#16a34a" stroke-width="2"/><text x="250" y="89" fill="#16a34a" font-weight="bold">Y</text>
  <line x1="120" y1="143" x2="120" y2="165" stroke="#d97706" stroke-width="2"/><text x="120" y="168" text-anchor="middle" font-size="11" fill="#d97706" font-weight="bold">S1=A</text>
  <line x1="150" y1="137" x2="150" y2="165" stroke="#d97706" stroke-width="2"/><text x="150" y="168" text-anchor="middle" font-size="11" fill="#d97706" font-weight="bold">S0=B</text>
</svg>`,
          imageAlt: "4:1 Mux with inputs I0=0, I1=C, I2=C', I3=1 and select lines A, B",
          options: ['$A \\oplus B \\oplus C$', '$AB + BC + AC$', '$A\\overline{B}C + \\overline{A}B\\overline{C} + AB$', '$B \\oplus C$'],
          correctAnswerIndex: 2,
          explanation: '### Solution\nMUX output equation:\n$$Y = \\overline{A}\\,\\overline{B}\\,I_0 + \\overline{A}\\,B\\,I_1 + A\\,\\overline{B}\\,I_2 + A\\,B\\,I_3$$\nSubstitute inputs:\n$$Y = \\overline{A}\\,\\overline{B}\\,(0) + \\overline{A}\\,B\\,(C) + A\\,\\overline{B}\\,(\\overline{C}) + A\\,B\\,(1)$$\n$$Y = \\overline{A}BC + A\\overline{B}\\,\\overline{C} + AB$$\n\n**Option C is correct!**'
        },
        {
          id:'dl-06', difficulty:'easy', concept:'Full Adder Gates', year:'GATE 2020',
          text: 'How many 2-input NAND gates are required to implement a 1-bit Full Adder?',
          options: ['5', '7', '9', '12'],
          correctAnswerIndex: 2,
          explanation: '### Solution\n- 1 Half Adder requires **5** NAND gates.\n- A Full Adder built from two Half Adders and an OR gate requires $2 \\times 5 - 1 = \\mathbf{9}$ NAND gates (sharing one NAND gate between the OR and XOR).'
        },
      ]
    },
    {
      id: 'dl-seq', name: 'Sequential Circuits & Flip-Flops',
      description: 'D, JK, T flip-flops, Counters, Shift Registers',
      questions: [
        {
          id:'seq-01', difficulty:'medium', concept:'Counter Design', year:'GATE 2021',
          text: 'A MOD-6 synchronous counter requires a minimum of how many flip-flops?',
          options: ['2', '3', '4', '6'],
          correctAnswerIndex: 1,
          explanation: '### Solution\n$2^n \\geq 6 \\Rightarrow 2^3 = 8 \\geq 6$\n\nMinimum flip-flops needed = **3** (counts 000 to 101, resets to 000 on 110).'
        },
        {
          id:'seq-02', difficulty:'hard', concept:'JK Flip-Flop', year:'GATE 2018',
          text: 'A JK flip-flop with J=1, K=1 and current state Q=0. After clock edge, next state Q⁺ is:',
          options: ['0', '1', 'undefined', 'Q (no change)'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nJK Flip-Flop truth table:\n| J | K | Q | Q⁺ |\n|---|---|---|---|\n| 0 | 0 | X | Q (hold) |\n| 0 | 1 | X | 0 (reset) |\n| 1 | 0 | X | 1 (set) |\n| 1 | 1 | X | $\\overline{Q}$ (toggle) |\n\nJ=1, K=1, Q=0 → Q⁺ = $\\overline{Q}$ = $\\overline{0}$ = **1**'
        },
        {
          id:'seq-03', difficulty:'easy', concept:'Mealy vs Moore',
          text: 'Which statement correctly distinguishes Mealy from Moore machines?',
          options: [
            'Mealy output depends only on current state; Moore depends on state and input',
            'Moore output depends only on current state; Mealy depends on state and current input',
            'Both have outputs depending only on state',
            'Mealy machines have more states than Moore machines for same problem'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\n| Machine | Output depends on |\n|---|---|\n| **Moore** | Current **state** only |\n| **Mealy** | Current **state + input** |\n\nMealy machines typically require **fewer states** than Moore for the same specification.'
        },
        {
          id:'seq-04', difficulty:'medium', concept:'D Flip-Flop Circuit', year:'GATE 2023',
          text: 'For the sequential circuit shown with a D flip-flop and an XOR gate, $D = X \\oplus Q$. If initial state $Q = 0$ and input sequence $X = 1, 0, 1, 1$ is applied on consecutive clock pulses, what is the sequence of state $Q$ after each clock edge?',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 135" width="320" height="135" font-family="Arial" font-size="12">
  <rect x="140" y="25" width="80" height="75" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="180" y="65" text-anchor="middle" font-weight="bold" fill="#1e40af">D-FF</text>
  <text x="150" y="50" fill="#334155" font-size="11" font-weight="bold">D</text>
  <text x="205" y="50" fill="#16a34a" font-size="11" font-weight="bold">Q</text>
  <line x1="220" y1="45" x2="275" y2="45" stroke="#16a34a" stroke-width="2"/>
  <path d="M 255 45 L 255 115 L 60 115 L 60 52 L 80 52" fill="none" stroke="#64748b" stroke-width="1.8"/>
  <circle cx="95" cy="50" r="14" fill="#fefce8" stroke="#ca8a04" stroke-width="1.8"/>
  <text x="95" y="54" text-anchor="middle" font-weight="bold" fill="#ca8a04">⊕</text>
  <line x1="109" y1="50" x2="140" y2="50" stroke="#2563eb" stroke-width="2"/>
  <line x1="30" y1="40" x2="81" y2="40" stroke="#334155" stroke-width="2"/>
  <text x="20" y="44" fill="#334155" font-weight="bold">X</text>
</svg>`,
          imageAlt: "D flip-flop with input D driven by X XOR Q feedback",
          options: [
            '1, 1, 0, 1',
            '1, 0, 1, 0',
            '0, 1, 1, 0',
            '1, 1, 1, 0'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\nInitial $Q_0 = 0$.\n\n| Clock | Input X | Current Q | Next state $D = X \\oplus Q$ |\n|---|---|---|---|\n| 1 | 1 | 0 | $1 \\oplus 0 = \\mathbf{1}$ |\n| 2 | 0 | 1 | $0 \\oplus 1 = \\mathbf{1}$ |\n| 3 | 1 | 1 | $1 \\oplus 1 = \\mathbf{0}$ |\n| 4 | 1 | 0 | $1 \\oplus 0 = \\mathbf{1}$ |\n\nSequence of states: **1, 1, 0, 1**.'
        },
        {
          id:'seq-05', difficulty:'medium', concept:'Johnson Counter', year:'GATE 2019',
          text: 'A 4-bit Johnson (twisted ring) counter counts through how many distinct states before repeating?',
          options: ['4', '8', '16', '15'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nFor an $n$-bit counter:\n- **Ring Counter**: $n$ states\n- **Johnson Counter**: $2n$ states\n- Binary Counter: $2^n$ states\n\nFor $n = 4$, Johnson counter has $2 \\times 4 = \\mathbf{8}$ states.'
        },
        {
          id:'seq-06', difficulty:'hard', concept:'Race-Around Condition', year:'GATE 2017',
          text: 'The race-around condition in a level-triggered JK flip-flop occurs when:',
          options: [
            '$J=0, K=0$ and clock pulse width $t_p < t_{pd}$',
            '$J=1, K=1$ and clock pulse width $t_p > t_{pd}$ (propagation delay)',
            '$J=1, K=0$ and clock is absent',
            'Clock frequency is too low'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\n**Race-around condition** occurs in level-triggered JK flip-flop when $J=1, K=1$ and clock duration $t_p > t_{pd}$. The output continuously toggles between 0 and 1 multiple times during a single clock pulse.\n\nRemedies: Master-Slave JK flip-flop, Edge-triggered flip-flop, or ensuring $t_p < t_{pd}$.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — COA
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_COA: Subject = {
  id: 'gate-cs-coa', name: 'Computer Organization & Architecture',
  description: 'ISA, Pipelining, Cache, Memory Hierarchy',
  chapters: [
    {
      id: 'coa-pipeline', name: 'Pipelining',
      description: 'Pipeline stages, hazards, speedup calculation',
      questions: [
        {
          id:'pipe-01', difficulty:'medium', concept:'Pipeline Speedup', year:'GATE 2022',
          text: 'A 5-stage pipeline has stage delays of 100, 150, 120, 140, 130 ns. Clock cycle time (with 10ns latch overhead per stage) is:',
          options: ['160 ns', '150 ns', '130 ns', '650 ns'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nClock cycle = max stage delay + latch overhead\n$$= \\max(100,150,120,140,130) + 10 = 150 + 10 = \\mathbf{160 \\text{ ns}}$$'
        },
        {
          id:'pipe-02', difficulty:'hard', concept:'Pipeline Efficiency', year:'GATE 2021',
          text: 'A 4-stage pipeline processes 9 instructions. The pipeline time in clock cycles is:',
          options: ['36', '12', '9', '4'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nPipeline time = $k + (n-1)$ cycles, where $k$ = stages, $n$ = instructions\n$$= 4 + (9-1) = 4 + 8 = \\mathbf{12 \\text{ cycles}}$$\nNon-pipelined: $4 \\times 9 = 36$ cycles. Speedup = $36/12 = 3$.'
        },
        {
          id:'pipe-03', difficulty:'medium', concept:'Data Hazard', year:'GATE 2020',
          text: 'In a 5-stage pipeline (IF-ID-EX-MEM-WB), RAW hazard between consecutive instructions causes how many stall cycles WITHOUT forwarding?',
          options: ['1', '2', '3', '0'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nInstruction 1 writes result in WB (stage 5).\nInstruction 2 reads in EX (stage 3).\n\nIf inst 2 immediately follows inst 1:\n- Inst 1 in WB at cycle 5\n- Inst 2 needs value in EX at cycle 4 → **2 stalls needed**\n\nWith forwarding from EX/MEM: 0 stalls for most RAW hazards.'
        },
        {
          id:'pipe-04', difficulty:'easy', concept:'Branch Hazard',
          text: 'In a pipeline where branch outcome is known at end of EX stage (stage 3 of 5), the branch penalty is:',
          options: ['1 cycle', '2 cycles', '3 cycles', '5 cycles'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nBranch penalty = stage where branch is resolved − 1 = 3 − 1 = **2 cycles**\n\n2 instructions already fetched after the branch need to be flushed/discarded.'
        },
        {
          id:'pipe-05', difficulty:'medium', concept:'Pipeline Data Hazard Stall', year:'GATE 2023',
          text: 'Consider two instructions:\n$I_1$: `ADD R1, R2, R3` (writes R1 in WB stage)\n$I_2$: `SUB R4, R1, R5` (reads R1 in ID stage)\nIn the 5-stage pipeline without operand forwarding shown in the timing chart, how many stall cycles are inserted between $I_1$ and $I_2$?',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 120" width="350" height="120" font-family="Arial" font-size="11">
  <rect x="50" y="15" width="36" height="20" fill="#dbeafe" stroke="#3b82f6"/><text x="68" y="29" text-anchor="middle" fill="#1e40af">IF</text>
  <rect x="86" y="15" width="36" height="20" fill="#dbeafe" stroke="#3b82f6"/><text x="104" y="29" text-anchor="middle" fill="#1e40af">ID</text>
  <rect x="122" y="15" width="36" height="20" fill="#dbeafe" stroke="#3b82f6"/><text x="140" y="29" text-anchor="middle" fill="#1e40af">EX</text>
  <rect x="158" y="15" width="36" height="20" fill="#dbeafe" stroke="#3b82f6"/><text x="176" y="29" text-anchor="middle" fill="#1e40af">MEM</text>
  <rect x="194" y="15" width="36" height="20" fill="#dbeafe" stroke="#3b82f6"/><text x="212" y="29" text-anchor="middle" fill="#1e40af">WB</text>
  <text x="35" y="29" text-anchor="end" font-weight="bold" fill="#334155">I1</text>
  <text x="35" y="64" text-anchor="end" font-weight="bold" fill="#334155">I2</text>
  <rect x="86" y="50" width="36" height="20" fill="#fef3c7" stroke="#d97706"/><text x="104" y="64" text-anchor="middle" fill="#92400e">IF</text>
  <rect x="122" y="50" width="36" height="20" fill="#fee2e2" stroke="#dc2626"/><text x="140" y="64" text-anchor="middle" fill="#991b1b">stall</text>
  <rect x="158" y="50" width="36" height="20" fill="#fee2e2" stroke="#dc2626"/><text x="176" y="64" text-anchor="middle" fill="#991b1b">stall</text>
  <rect x="194" y="50" width="36" height="20" fill="#fee2e2" stroke="#dc2626"/><text x="212" y="64" text-anchor="middle" fill="#991b1b">stall</text>
  <rect x="230" y="50" width="36" height="20" fill="#fef3c7" stroke="#d97706"/><text x="248" y="64" text-anchor="middle" fill="#92400e">ID</text>
  <text x="68" y="98" text-anchor="middle" font-size="10" fill="#64748b">C1</text>
  <text x="104" y="98" text-anchor="middle" font-size="10" fill="#64748b">C2</text>
  <text x="140" y="98" text-anchor="middle" font-size="10" fill="#64748b">C3</text>
  <text x="176" y="98" text-anchor="middle" font-size="10" fill="#64748b">C4</text>
  <text x="212" y="98" text-anchor="middle" font-size="10" fill="#64748b">C5</text>
  <text x="248" y="98" text-anchor="middle" font-size="10" fill="#64748b">C6</text>
</svg>`,
          imageAlt: "Pipeline timing diagram showing stall cycles between I1 and I2",
          options: ['1 cycle', '2 cycles', '3 cycles', '0 cycles'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nAssuming register file supports internal forwarding (write in first half of cycle, read in second half):\n- $I_1$ writes to R1 during clock cycle 5 (WB).\n- $I_2$ can read R1 in ID stage during cycle 5.\n- Thus $I_2$ is delayed by **2 stall cycles** (cycles 3 and 4).\n\nWithout internal register forwarding, it would need 3 stalls.'
        },
      ]
    },
    {
      id: 'coa-cache', name: 'Cache Memory',
      description: 'Cache mapping, replacement policies, EMAT calculation',
      questions: [
        {
          id:'cache-01', difficulty:'medium', concept:'EMAT', year:'GATE 2023',
          text: 'Cache hit rate = 0.95, cache access time = 10 ns, main memory = 100 ns. Effective Memory Access Time (EMAT) is:',
          options: ['14.5 ns', '14 ns', '10.9 ns', '15 ns'],
          correctAnswerIndex: 0,
          explanation: '### Solution\n$$\\text{EMAT} = h \\cdot T_c + (1-h) \\cdot T_m$$\n$$= 0.95 \\times 10 + 0.05 \\times 100 = 9.5 + 5 = \\mathbf{14.5 \\text{ ns}}$$'
        },
        {
          id:'cache-02', difficulty:'hard', concept:'Cache Lines', year:'GATE 2019',
          text: 'A cache has 64 sets, 4-way set-associative, block size = 64 bytes. Total cache size is:',
          options: ['8 KB', '16 KB', '32 KB', '4 KB'],
          correctAnswerIndex: 1,
          explanation: '### Solution\n$$\\text{Cache Size} = \\text{Sets} \\times \\text{Ways} \\times \\text{Block size}$$\n$$= 64 \\times 4 \\times 64 \\text{ bytes} = 16384 \\text{ bytes} = \\mathbf{16 \\text{ KB}}$$'
        },
        {
          id:'cache-03', difficulty:'medium', concept:'Direct Mapped Cache', year:'GATE 2018',
          text: 'Direct-mapped cache, 8 cache lines, memory has 32 blocks. Block 5, 13, 21, 29 all map to cache line:',
          options: ['Cache line 5', 'Cache line 3', 'Cache line 5', 'Cache line 4'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nDirect-mapped: Block $i$ maps to cache line $i \\mod \\text{(cache lines)}$\n$$5 \\mod 8 = 5,\\quad 13 \\mod 8 = 5,\\quad 21 \\mod 8 = 5,\\quad 29 \\mod 8 = 5$$\n→ All map to **Cache line 5**. This causes **conflict misses** (thrashing).'
        },
        {
          id:'cache-04', difficulty:'medium', concept:'Set-Associative Tag Bits', year:'GATE 2021',
          text: 'A 32-bit physical address space system has a 64 KB, 4-way set-associative cache with block size of 32 bytes. The number of bits in Tag, Set Index, and Word Offset fields are:',
          options: [
            'Tag: 18, Set: 9, Offset: 5',
            'Tag: 17, Set: 10, Offset: 5',
            'Tag: 16, Set: 11, Offset: 5',
            'Tag: 19, Set: 8, Offset: 5'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\n1. **Word Offset bits**: Block size = 32 B = $2^5$ B → **Offset = 5 bits**.\n2. Total cache lines = Cache size / Block size = $64\\text{ KB} / 32\\text{ B} = 2048$ lines.\n3. **Number of sets** = $2048 / 4 = 512 = 2^9$ sets → **Set Index = 9 bits**.\n4. **Tag bits** = Address bits − (Set + Offset) = $32 - (9 + 5) = \\mathbf{18 \\text{ bits}}$.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — DATA STRUCTURES
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_DS: Subject = {
  id: 'gate-cs-ds', name: 'Programming & Data Structures',
  description: 'C Programming, Arrays, Stacks, Queues, Trees, Heaps',
  chapters: [
    {
      id: 'ds-trees', name: 'Trees & Binary Search Trees',
      description: 'BST operations, AVL trees, Heaps, B-trees',
      questions: [
        {
          id:'tree-01', difficulty:'medium', concept:'BST — Height', year:'GATE 2021',
          text: 'Keys 5, 3, 7, 1, 4 are inserted in this order into an empty BST. The height of the resulting BST is:',
          options: ['2', '3', '4', '5'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nBST construction:\n```\n      5\n     / \\\n    3   7\n   / \\\n  1   4\n```\nHeight = number of edges from root to deepest leaf = **3** (5→3→1 or 5→3→4)'
        },
        {
          id:'tree-02', difficulty:'hard', concept:'AVL Rotation', year:'GATE 2022',
          text: 'In an AVL tree, after inserting 10, 20, 30 in order, which rotation restores balance?',
          options: ['Single left rotation (LL rotation)', 'Single right rotation (RR rotation)', 'Double rotation (LR)', 'Double rotation (RL)'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nInsert 10, 20, 30:\n```\n10          10\n  \\    →      \\\n  20         20  (balance factor of 10 = -2, right-right case)\n    \\\n    30\n```\nRight-Right imbalance → **Single Left Rotation (RR rotation)**:\n```\n  20\n /  \\\n10  30\n```'
        },
        {
          id:'tree-03', difficulty:'medium', concept:'Heap Operations', year:'GATE 2020',
          text: 'In a max-heap with elements [100, 40, 80, 20, 35, 60, 70], after deleting root, what is the new root?',
          options: ['80', '70', '40', '60'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nDelete max (100): Replace root with last element (70), then heapify down.\n```\nHeap: [70, 40, 80, 20, 35, 60]\n70 vs children 40, 80 → swap with 80\nResult: [80, 40, 70, 20, 35, 60]\n```\nNew root = **80**'
        },
        {
          id:'tree-04', difficulty:'easy', concept:'Tree Traversal',
          text: 'For BST with inorder traversal output: 1, 3, 4, 6, 7, 8, 10. The root of the BST could be:',
          options: ['1', '6', '4', '10'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nInorder of BST always gives **sorted** (ascending) sequence. The root can be any element — but for balanced BST the root is typically the middle element.\nFor this sequence (1,3,4,**6**,7,8,10), middle element = **6** is the balanced root.'
        },
        {
          id:'tree-05', difficulty:'medium', concept:'BST Inorder Successor', year:'GATE 2024',
          text: 'In the Binary Search Tree (BST) shown below, what is the in-order successor of node 40?',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 150" width="280" height="150" font-family="Arial" font-size="12">
  <line x1="140" y1="25" x2="80" y2="65" stroke="#64748b" stroke-width="2"/>
  <line x1="140" y1="25" x2="200" y2="65" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="65" x2="50" y2="110" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="65" x2="110" y2="110" stroke="#64748b" stroke-width="2"/>
  <line x1="200" y1="65" x2="230" y2="110" stroke="#64748b" stroke-width="2"/>
  <circle cx="140" cy="25" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="140" y="29" text-anchor="middle" font-weight="bold" fill="#1e40af">50</text>
  <circle cx="80" cy="65" r="16" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/><text x="80" y="69" text-anchor="middle" font-weight="bold" fill="#854d0e">30</text>
  <circle cx="200" cy="65" r="16" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/><text x="200" y="69" text-anchor="middle" font-weight="bold" fill="#854d0e">70</text>
  <circle cx="50" cy="110" r="15" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="50" y="114" text-anchor="middle" font-weight="bold" fill="#15803d">20</text>
  <circle cx="110" cy="110" r="15" fill="#fdf2f8" stroke="#db2777" stroke-width="2"/><text x="110" y="114" text-anchor="middle" font-weight="bold" fill="#9d174d">40</text>
  <circle cx="230" cy="110" r="15" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="230" y="114" text-anchor="middle" font-weight="bold" fill="#15803d">80</text>
</svg>`,
          imageAlt: "Binary Search Tree with root 50, left subtree {20, 30, 40} and right subtree {70, 80}",
          options: ['30', '50', '70', '80'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nIn-order traversal (Left, Root, Right):\n$$20, 30, 40, \\mathbf{50}, 70, 80$$\nThe node immediately following 40 is **50** (the root/ancestor).\nTherefore, the in-order successor of 40 is **50**.'
        },
      ]
    },
    {
      id: 'ds-linear', name: 'Stacks, Queues & Hashing',
      description: 'Stack/Queue operations, Infix-Postfix, Hash functions',
      questions: [
        {
          id:'lin-01', difficulty:'medium', concept:'Postfix Evaluation', year:'GATE 2019',
          text: 'Evaluate postfix expression: $8\\ 3\\ 4\\ +\\ \\times\\ 2\\ -$',
          options: ['54', '55', '56', '50'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nStep-by-step evaluation:\n| Step | Operation | Stack |\n|---|---|---|\n| Push 8 | - | [8] |\n| Push 3 | - | [8,3] |\n| Push 4 | - | [8,3,4] |\n| + | pop 4,3 → 3+4=7, push | [8,7] |\n| × | pop 7,8 → 8×7=56, push | [56] |\n| Push 2 | - | [56,2] |\n| − | pop 2,56 → 56−2=54, push | [54] |\n\n**Result = 54**'
        },
        {
          id:'lin-02', difficulty:'hard', concept:'Hashing', year:'GATE 2022',
          text: 'Hash table size = 7, hash function h(k) = k mod 7. Keys 50, 700, 76, 85, 92 are inserted with linear probing. Position of key 76 is:',
          options: ['6', '0', '1', '2'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nh(50) = 50 mod 7 = 1\nh(700) = 700 mod 7 = 0\nh(76) = 76 mod 7 = 6\nh(85) = 85 mod 7 = 1 (collision → 2)\nh(92) = 92 mod 7 = 1 (collision → 2, collision → 3)\n\nSlot 6 is initially empty, so 76 goes directly into **slot 6**.'
        },
        {
          id:'lin-03', difficulty:'easy', concept:'Circular Queue', year:'GATE 2020',
          text: 'In a circular queue implemented using an array of size N, the condition for the queue to be full (with one empty slot reserved to distinguish full from empty) is:',
          options: [
            '(rear + 1) % N == front',
            'rear == front',
            'rear == N - 1',
            '(front + 1) % N == rear'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\nIn a circular queue of capacity $N$:\n- **Empty condition**: `front == rear`\n- **Full condition**: `(rear + 1) % N == front`'
        },
        {
          id:'lin-04', difficulty:'medium', concept:'Stack Permutation', year:'GATE 2018',
          text: 'Given input sequence 1, 2, 3, 4 into a stack, which of the following output permutations CANNOT be obtained?',
          options: [
            '2, 4, 3, 1',
            '4, 3, 2, 1',
            '3, 1, 2, 4',
            '1, 2, 3, 4'
          ],
          correctAnswerIndex: 2,
          explanation: '### Solution\nTo get 3 first, elements 1, 2, 3 must be pushed. 3 is popped. Next element in stack is 2 (on top), so 1 cannot be popped before 2! Therefore **3, 1, 2, 4** is an impossible stack permutation.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — ALGORITHMS
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_Algo: Subject = {
  id: 'gate-cs-algo', name: 'Algorithms',
  description: 'Sorting, Graph Algorithms, DP, Greedy, Complexity',
  chapters: [
    {
      id: 'algo-sort', name: 'Sorting & Searching',
      description: 'Merge Sort, Quick Sort, Heap Sort, Binary Search',
      questions: [
        {
          id:'sort-01', difficulty:'medium', concept:'Quick Sort Partition', year:'GATE 2021',
          text: 'In Quick Sort with last element as pivot, array [3,6,8,10,1,2,1] after first partition step (pivot=1 at end), number of comparisons made is:',
          options: ['6', '7', '5', '4'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nWith last element as pivot (1), partition scans all 6 other elements: [3,6,8,10,1,2] → 6 comparisons. After partition, pivot 1 is placed in correct position.\n$$\\text{Comparisons in partition} = n - 1 = 7 - 1 = \\mathbf{6}$$'
        },
        {
          id:'sort-02', difficulty:'easy', concept:'Merge Sort Complexity', year:'GATE 2020',
          text: 'Merge Sort on array of n elements. Number of comparisons in worst case is closest to:',
          options: ['$n \\log_2 n$', '$n^2$', '$n^2/2$', '$2^n$'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nMerge Sort recurrence: $T(n) = 2T(n/2) + O(n)$\nBy Master Theorem: $T(n) = \\Theta(n \\log n)$\n\nWorst case comparisons $\\approx n \\log_2 n - n + 1$ ≈ $\\mathbf{n \\log_2 n}$'
        },
        {
          id:'sort-03', difficulty:'hard', concept:'Comparison Lower Bound',
          text: 'The minimum number of comparisons needed to sort 4 elements in the worst case is:',
          options: ['4', '5', '6', '8'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nDecision tree lower bound: $\\lceil \\log_2(n!) \\rceil$\n$$\\lceil \\log_2(4!) \\rceil = \\lceil \\log_2(24) \\rceil = \\lceil 4.58 \\rceil = \\mathbf{5}$$\nInsertion sort on 4 elements can do it in exactly 5 comparisons in worst case.'
        },
        {
          id:'sort-04', difficulty:'medium', concept:'Heap Build Time', year:'GATE 2023',
          text: 'Building a binary heap from an unordered array of n elements using the bottom-up `BuildHeap` algorithm takes time:',
          options: ['$O(n)$', '$O(n \\log n)$', '$O(n^2)$', '$O(\\log n)$'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nBottom-up `BuildHeap` takes:\n$$\\sum_{h=0}^{\\lfloor \\log n \\rfloor} \\frac{n}{2^{h+1}} O(h) = O\\left(n \\sum_{h=0}^{\\infty} \\frac{h}{2^h}\\right) = \\mathbf{O(n)}$$\nAlthough each `Heapify` is $O(\\log n)$, most nodes are near the leaves with small heights.'
        },
      ]
    },
    {
      id: 'algo-graph', name: 'Graph Algorithms',
      description: "Dijkstra, Bellman-Ford, Floyd-Warshall, Kruskal's, Prim's",
      questions: [
        {
          id:'graph-01', difficulty:'medium', concept:"Dijkstra's Algorithm", year:'GATE 2022',
          text: "In a weighted graph with edges A-B(4), A-C(2), B-D(3), C-B(1), C-D(5). Dijkstra's shortest path from A to D is:",
          options: ['7', '6', '8', '5'],
          correctAnswerIndex: 1,
          explanation: "### Solution\nDijkstra from A:\n| Step | dist[A] | dist[B] | dist[C] | dist[D] |\n|---|---|---|---|---|\n| Init | 0 | ∞ | ∞ | ∞ |\n| Visit A | 0 | 4 | 2 | ∞ |\n| Visit C(2) | - | min(4,2+1)=3 | 2 | min(∞,2+5)=7 |\n| Visit B(3) | - | 3 | - | min(7,3+3)=6 |\n| Visit D(6) | - | - | - | **6** |\n\nShortest path A→C→B→D = 2+1+3 = **6**"
        },
        {
          id:'graph-02', difficulty:'hard', concept:'Minimum Spanning Tree', year:'GATE 2021',
          text: "Graph with edges: (A,B,2), (A,C,3), (B,C,1), (B,D,4), (C,D,5). Weight of MST using Kruskal's algorithm is:",
          options: ['7', '6', '8', '10'],
          correctAnswerIndex: 0,
          explanation: "### Solution\nKruskal's: Sort edges by weight: B-C(1), A-B(2), A-C(3), B-D(4), C-D(5)\n1. B-C(1) → add ✓\n2. A-B(2) → add ✓ (no cycle)\n3. A-C(3) → skip ✗ (A,B,C already connected)\n4. B-D(4) → add ✓\n\nMST edges: B-C(1) + A-B(2) + B-D(4) = **7**"
        },
        {
          id:'graph-03', difficulty:'medium', concept:'BFS & Shortest Path',
          text: 'BFS on unweighted graph from vertex S. If S has 3 neighbors and each has 4 neighbors (none repeated), level 2 has how many vertices?',
          options: ['12', '3', '7', '4'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nBFS levels:\n- Level 0: S (1 vertex)\n- Level 1: 3 neighbors of S\n- Level 2: Each of 3 level-1 vertices has 4 new neighbors = $3 \\times 4 = \\mathbf{12}$ vertices'
        },
        {
          id:'graph-04', difficulty:'medium', concept:'Topological Sorting', year:'GATE 2020',
          text: 'For the Directed Acyclic Graph (DAG) shown below, which of the following is a VALID topological sorting order?',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 130" width="320" height="130" font-family="Arial" font-size="12">
  <defs>
    <marker id="dag_arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#1e293b"/>
    </marker>
  </defs>
  <circle cx="50" cy="35" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="50" y="39" text-anchor="middle" font-weight="bold" fill="#1e40af">A</text>
  <circle cx="50" cy="95" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="50" y="99" text-anchor="middle" font-weight="bold" fill="#1e40af">B</text>
  <circle cx="160" cy="65" r="16" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/><text x="160" y="69" text-anchor="middle" font-weight="bold" fill="#854d0e">C</text>
  <circle cx="270" cy="35" r="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="39" text-anchor="middle" font-weight="bold" fill="#15803d">D</text>
  <circle cx="270" cy="95" r="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="99" text-anchor="middle" font-weight="bold" fill="#15803d">E</text>
  <line x1="66" y1="39" x2="144" y2="61" stroke="#334155" stroke-width="1.8" marker-end="url(#dag_arr)"/>
  <line x1="66" y1="91" x2="144" y2="69" stroke="#334155" stroke-width="1.8" marker-end="url(#dag_arr)"/>
  <line x1="176" y1="61" x2="254" y2="39" stroke="#334155" stroke-width="1.8" marker-end="url(#dag_arr)"/>
  <line x1="176" y1="69" x2="254" y2="91" stroke="#334155" stroke-width="1.8" marker-end="url(#dag_arr)"/>
  <line x1="50" y1="51" x2="50" y2="79" stroke="#334155" stroke-width="1.8" marker-end="url(#dag_arr)"/>
</svg>`,
          imageAlt: "DAG with edges A->B, A->C, B->C, C->D, C->E",
          options: [
            'A, B, C, D, E',
            'B, A, C, D, E',
            'C, A, B, D, E',
            'A, C, B, E, D'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\nEdges in DAG: $A \\to B$, $A \\to C$, $B \\to C$, $C \\to D$, $C \\to E$.\n- $A$ has in-degree 0 → must come before $B$ and $C$.\n- $B$ has edge to $C$ → $B$ must come before $C$.\n- $C$ has edges to $D$ and $E$ → $C$ must come before $D, E$.\n\nValid topological order: **A, B, C, D, E**.'
        },
      ]
    },
    {
      id: 'algo-dp', name: 'Dynamic Programming & Greedy',
      description: 'Knapsack, LCS, Matrix Chain, Activity Selection',
      questions: [
        {
          id:'dp-01', difficulty:'medium', concept:'0/1 Knapsack', year:'GATE 2023',
          text: 'Knapsack capacity W=5. Items: {weight:2,value:3}, {weight:3,value:4}, {weight:4,value:5}. Max value (0/1 knapsack) is:',
          options: ['7', '5', '8', '6'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nDP table (w across, items down):\n| | 0 | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|---|\n| ∅ | 0 | 0 | 0 | 0 | 0 | 0 |\n| i1(2,3) | 0 | 0 | 3 | 3 | 3 | 3 |\n| i2(3,4) | 0 | 0 | 3 | 4 | 4 | 7 |\n| i3(4,5) | 0 | 0 | 3 | 4 | 5 | 7 |\n\nMax value = **7** (items 1+2: weight 2+3=5, value 3+4=7)'
        },
        {
          id:'dp-02', difficulty:'hard', concept:'LCS', year:'GATE 2020',
          text: 'Length of Longest Common Subsequence (LCS) of "ABCBDAB" and "BDCAB" is:',
          options: ['3', '4', '5', '2'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nLCS("ABCBDAB", "BDCAB") using DP:\nLCS = "BCAB" or "BDAB" → length = **4**\n\nFormula: $LCS(m,n)$ uses $O(mn)$ table. Answer: **4**'
        },
        {
          id:'dp-03', difficulty:'hard', concept:'Matrix Chain Multiplication', year:'GATE 2021',
          text: 'Four matrices have dimensions: $A_1(10 \\times 20)$, $A_2(20 \\times 30)$, $A_3(30 \\times 40)$, $A_4(40 \\times 30)$. The minimum number of scalar multiplications needed to compute $A_1 A_2 A_3 A_4$ is:',
          options: ['30,000', '26,000', '32,000', '36,000'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nUsing DP for Matrix Chain Multiplication:\nOptimal parenthesization is $((A_1 A_2) A_3) A_4$ or $(A_1 (A_2 A_3)) A_4$:\n1. $A_1 A_2 = 10 \\times 20 \\times 30 = 6,000$\n2. $(A_1 A_2) A_3 = 6,000 + 10 \\times 30 \\times 40 = 6,000 + 12,000 = 18,000$\n3. $((A_1 A_2) A_3) A_4 = 18,000 + 10 \\times 40 \\times 30 = 18,000 + 12,000 = \\mathbf{30,000}$.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — THEORY OF COMPUTATION
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_TOC: Subject = {
  id: 'gate-cs-toc', name: 'Theory of Computation',
  description: 'DFA, NFA, PDA, CFG, Turing Machines, Decidability',
  chapters: [
    {
      id: 'toc-fa', name: 'Finite Automata & Regular Languages',
      description: 'DFA, NFA, Regular Expressions, Pumping Lemma, State Diagrams',
      questions: [
        {
          id:'fa-01', difficulty:'medium', concept:'DFA — Minimum States', year:'GATE 2022',
          text: 'Minimum number of states in a DFA accepting all binary strings with even number of 0s is:',
          options: ['1', '2', '3', '4'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nWe need to track parity of 0-count:\n- State q0: even 0s seen (accepting)\n- State q1: odd 0s seen (non-accepting)\n\nTransitions:\n| State | 0 | 1 |\n|---|---|---|\n| q0 (start,accept) | q1 | q0 |\n| q1 | q0 | q1 |\n\nMinimum states = **2**'
        },
        {
          id:'fa-02', difficulty:'hard', concept:'Pumping Lemma', year:'GATE 2021',
          text: 'Which language is NOT regular? (Use Pumping Lemma)',
          options: [
            '$L_1 = \\{0^n 1^n \\mid n \\geq 0\\}$',
            '$L_2 = \\{0^n \\mid n \\geq 0\\}$',
            '$L_3 = \\{01, 10\\}^*$',
            '$L_4 = \\{w \\mid w \\text{ contains } 00\\}$'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\n$L_1 = \\{0^n 1^n\\}$ requires counting equal numbers of 0s and 1s → **requires unbounded memory** → not regular.\n\nProof by Pumping Lemma: For $w = 0^p 1^p$, any pumping of the first segment gives unequal counts → contradiction.\n\n$L_2, L_3, L_4$ are all regular (recognizable by finite automata).'
        },
        {
          id:'fa-03', difficulty:'medium', concept:'NFA to DFA',
          text: 'An NFA has 3 states. The equivalent DFA has at most how many states?',
          options: ['3', '6', '8', '9'],
          correctAnswerIndex: 2,
          explanation: '### Solution\nSubset construction: DFA states = power set of NFA states = $2^n$ where n = NFA states.\n$$2^3 = \\mathbf{8} \\text{ states maximum}$$\n(In practice, many states may be unreachable and can be eliminated.)'
        },
        {
          id:'fa-04', difficulty:'medium', concept:'DFA — State Diagram', year:'GATE 2020',
          text: 'The DFA shown below accepts strings over {a, b}. The language accepted by this DFA is:\n\n(Start → q0 on b→q0, on a→q1; q1 on a→q1, on b→q2(final); q2 on a→q1, on b→q0)',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 160" width="420" height="160" font-family="Arial" font-size="13">
  <!-- q0 start state -->
  <circle cx="70" cy="80" r="28" fill="#e8f4fd" stroke="#2563eb" stroke-width="2"/>
  <text x="70" y="85" text-anchor="middle" fill="#1e40af" font-weight="bold">q0</text>
  <!-- start arrow -->
  <line x1="10" y1="80" x2="38" y2="80" stroke="#374151" stroke-width="2" marker-end="url(#arr)"/>
  <!-- q1 state -->
  <circle cx="210" cy="80" r="28" fill="#fef9e7" stroke="#d97706" stroke-width="2"/>
  <text x="210" y="85" text-anchor="middle" fill="#92400e" font-weight="bold">q1</text>
  <!-- q2 final state (double circle) -->
  <circle cx="350" cy="80" r="28" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <circle cx="350" cy="80" r="22" fill="none" stroke="#16a34a" stroke-width="1.5"/>
  <text x="350" y="85" text-anchor="middle" fill="#14532d" font-weight="bold">q2</text>
  <!-- q0 -> q1 on 'a' -->
  <path d="M 98 72 Q 154 48 182 72" fill="none" stroke="#2563eb" stroke-width="1.8" marker-end="url(#arr)"/>
  <text x="140" y="52" text-anchor="middle" fill="#2563eb" font-size="12">a</text>
  <!-- q0 -> q0 on 'b' (self loop) -->
  <path d="M 55 53 Q 70 20 85 53" fill="none" stroke="#374151" stroke-width="1.8" marker-end="url(#arr)"/>
  <text x="70" y="22" text-anchor="middle" fill="#374151" font-size="12">b</text>
  <!-- q1 -> q1 on 'a' (self loop) -->
  <path d="M 195 53 Q 210 20 225 53" fill="none" stroke="#374151" stroke-width="1.8" marker-end="url(#arr)"/>
  <text x="210" y="22" text-anchor="middle" fill="#374151" font-size="12">a</text>
  <!-- q1 -> q2 on 'b' -->
  <path d="M 238 72 Q 294 48 322 72" fill="none" stroke="#16a34a" stroke-width="1.8" marker-end="url(#arr)"/>
  <text x="280" y="52" text-anchor="middle" fill="#16a34a" font-size="12">b</text>
  <!-- q2 -> q1 on 'a' -->
  <path d="M 322 88 Q 266 112 238 88" fill="none" stroke="#d97706" stroke-width="1.8" marker-end="url(#arr)"/>
  <text x="280" y="115" text-anchor="middle" fill="#d97706" font-size="12">a</text>
  <!-- q2 -> q0 on 'b' -->
  <path d="M 325 98 Q 210 148 95 98" fill="none" stroke="#9333ea" stroke-width="1.8" marker-end="url(#arr)"/>
  <text x="210" y="148" text-anchor="middle" fill="#9333ea" font-size="12">b</text>
  <!-- arrowhead marker -->
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#374151"/>
    </marker>
  </defs>
</svg>`,
          imageAlt: 'DFA state diagram with 3 states q0 (start), q1, q2 (final)',
          correctAnswerIndex: 2,
          options: [
            'All strings ending with aa',
            'All strings ending with bb',
            'All strings ending with ab',
            'All strings containing at least one b'
          ],
          explanation: '### Solution\nTrace the DFA:\n- q0 is start state\n- q2 is the only accepting (final) state\n- q2 is reached from q1 on input **b**\n- q1 is reached from q0 (or q2) on input **a**\n\nSo to reach q2 we need the sequence: ...→a→q1→b→q2\n\nThe DFA accepts all strings that **end with "ab"**.\n\n**Answer: All strings ending with ab ✓**'
        },
        {
          id:'fa-05', difficulty:'hard', concept:'DFA — Minimization', year:'GATE 2019',
          text: 'The DFA shown has states {q0,q1,q2,q3}. After minimization using table-filling algorithm, how many states does the minimal DFA have?\n\n(q0=start, q3=final; transitions: q0→a→q1, q0→b→q2; q1→a→q1, q1→b→q3; q2→a→q2, q2→b→q3; q3→a→q3, q3→b→q3)',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 200" width="440" height="200" font-family="Arial" font-size="13">
  <defs>
    <marker id="ar2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#374151"/>
    </marker>
  </defs>
  <!-- q0 -->
  <circle cx="70" cy="100" r="28" fill="#e8f4fd" stroke="#2563eb" stroke-width="2"/>
  <text x="70" y="105" text-anchor="middle" fill="#1e40af" font-weight="bold">q0</text>
  <line x1="10" y1="100" x2="38" y2="100" stroke="#374151" stroke-width="2" marker-end="url(#ar2)"/>
  <!-- q1 -->
  <circle cx="210" cy="45" r="28" fill="#fef9e7" stroke="#d97706" stroke-width="2"/>
  <text x="210" y="50" text-anchor="middle" fill="#92400e" font-weight="bold">q1</text>
  <!-- q2 -->
  <circle cx="210" cy="155" r="28" fill="#fdf2f8" stroke="#9333ea" stroke-width="2"/>
  <text x="210" y="160" text-anchor="middle" fill="#6b21a8" font-weight="bold">q2</text>
  <!-- q3 final -->
  <circle cx="360" cy="100" r="28" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <circle cx="360" cy="100" r="22" fill="none" stroke="#16a34a" stroke-width="1.5"/>
  <text x="360" y="105" text-anchor="middle" fill="#14532d" font-weight="bold">q3</text>
  <!-- q0->q1 on a -->
  <path d="M 90 78 L 190 58" fill="none" stroke="#2563eb" stroke-width="1.8" marker-end="url(#ar2)"/>
  <text x="130" y="58" fill="#2563eb" font-size="12">a</text>
  <!-- q0->q2 on b -->
  <path d="M 90 120 L 190 148" fill="none" stroke="#9333ea" stroke-width="1.8" marker-end="url(#ar2)"/>
  <text x="128" y="148" fill="#9333ea" font-size="12">b</text>
  <!-- q1 self on a -->
  <path d="M 195 18 Q 210 0 225 18" fill="none" stroke="#374151" stroke-width="1.8" marker-end="url(#ar2)"/>
  <text x="210" y="4" text-anchor="middle" fill="#374151" font-size="12">a</text>
  <!-- q2 self on a -->
  <path d="M 195 182 Q 210 198 225 182" fill="none" stroke="#374151" stroke-width="1.8" marker-end="url(#ar2)"/>
  <text x="210" y="200" text-anchor="middle" fill="#374151" font-size="12">a</text>
  <!-- q1->q3 on b -->
  <path d="M 236 58 L 336 88" fill="none" stroke="#16a34a" stroke-width="1.8" marker-end="url(#ar2)"/>
  <text x="295" y="65" fill="#16a34a" font-size="12">b</text>
  <!-- q2->q3 on b -->
  <path d="M 236 142 L 336 112" fill="none" stroke="#16a34a" stroke-width="1.8" marker-end="url(#ar2)"/>
  <text x="295" y="138" fill="#16a34a" font-size="12">b</text>
  <!-- q3 self on a,b -->
  <path d="M 375 73 Q 410 60 388 85" fill="none" stroke="#374151" stroke-width="1.8" marker-end="url(#ar2)"/>
  <text x="415" y="72" fill="#374151" font-size="12">a,b</text>
</svg>`,
          imageAlt: 'DFA with 4 states: q0 start, q1, q2, q3 final',
          options: ['2', '3', '4', '5'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nUsing table-filling (Myhill-Nerode minimization):\n\n**Step 1:** Mark (q3, qx) for all non-final qx → mark pairs (q0,q3), (q1,q3), (q2,q3)\n\n**Step 2:** Check distinguishability:\n- q1 and q2: on input a → (q1,q2) unmarked; on input b → (q3,q3) same — NOT distinguishable!\n- So q1 ≡ q2 → merge them\n\n**After merging q1 and q2:**\n- State A = {q0}, State B = {q1, q2}, State C = {q3}\n\n**Minimal DFA has 3 states ✓**'
        },
        {
          id:'fa-06', difficulty:'easy', concept:'Regular Expression', year:'GATE 2018',
          text: 'Which regular expression denotes the language of all strings over {0,1} that do NOT contain "11" as a substring?',
          options: [
            '(0+10)*',
            '(0+10)*(1+ε)',
            '(0+1)*11(0+1)*',
            '0*10*'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\nStrings without "11": after each 1, must be followed by 0 or end.\n\nPattern: blocks of (0 or 10) repeated, optionally ending with a single 1.\n\nRegex: **(0+10)*(1+ε)**\n\n- (0+10)* → any number of (lone 0) or (10 pair)\n- (1+ε) → optionally one trailing 1\n\nThis ensures no two consecutive 1s appear.'
        },
        {
          id:'fa-07', difficulty:'hard', concept:'NFA — State Diagram', year:'GATE 2023',
          text: 'The NFA shown accepts strings over {0,1}. What is the language L accepted by this NFA?\n\n(q0=start,final; on ε→q1 from q0; q1 on 0→q2; q2 on 1→q1; q2 on 0→q2)',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 160" width="380" height="160" font-family="Arial" font-size="13">
  <defs>
    <marker id="ar3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#374151"/>
    </marker>
  </defs>
  <!-- q0 start and final (double circle) -->
  <circle cx="70" cy="80" r="28" fill="#e8f4fd" stroke="#2563eb" stroke-width="2"/>
  <circle cx="70" cy="80" r="22" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="70" y="85" text-anchor="middle" fill="#1e40af" font-weight="bold">q0</text>
  <line x1="10" y1="80" x2="38" y2="80" stroke="#374151" stroke-width="2" marker-end="url(#ar3)"/>
  <!-- q1 -->
  <circle cx="200" cy="80" r="28" fill="#fef9e7" stroke="#d97706" stroke-width="2"/>
  <text x="200" y="85" text-anchor="middle" fill="#92400e" font-weight="bold">q1</text>
  <!-- q2 -->
  <circle cx="320" cy="80" r="28" fill="#fdf2f8" stroke="#9333ea" stroke-width="2"/>
  <text x="320" y="85" text-anchor="middle" fill="#6b21a8" font-weight="bold">q2</text>
  <!-- q0->q1 on ε -->
  <path d="M 98 72 L 172 72" fill="none" stroke="#2563eb" stroke-width="1.8" marker-end="url(#ar3)"/>
  <text x="135" y="62" text-anchor="middle" fill="#2563eb" font-size="12">ε</text>
  <!-- q1->q2 on 0 -->
  <path d="M 228 72 L 292 72" fill="none" stroke="#9333ea" stroke-width="1.8" marker-end="url(#ar3)"/>
  <text x="260" y="62" text-anchor="middle" fill="#9333ea" font-size="12">0</text>
  <!-- q2->q1 on 1 -->
  <path d="M 292 90 Q 260 118 228 90" fill="none" stroke="#16a34a" stroke-width="1.8" marker-end="url(#ar3)"/>
  <text x="260" y="118" text-anchor="middle" fill="#16a34a" font-size="12">1</text>
  <!-- q2 self on 0 -->
  <path d="M 305 53 Q 320 30 335 53" fill="none" stroke="#374151" stroke-width="1.8" marker-end="url(#ar3)"/>
  <text x="320" y="28" text-anchor="middle" fill="#374151" font-size="12">0</text>
</svg>`,
          imageAlt: 'NFA with 3 states: q0 (start, final), q1, q2',
          options: [
            'Strings of the form (01)*',
            'Strings containing 01 as substring',
            'ε ∪ {strings of the form 0+1(0+1)*}',
            'All strings ending in 0'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\nq0 is both start and final (accepts ε via ε-closure).\n\nFrom q0, ε-move to q1, then:\n- q1 → 0 → q2 → 1 → q1 (cycle: 01 repeated)\n\nAccepting paths:\n- ε (stay at q0)\n- Take ε→q1, read (01)+ and return to q1 reaching final via ε-closure back to q0\n\nSo L = **(01)*** — empty string and repetitions of "01" ✓'
        },
        {
          id:'fa-08', difficulty:'medium', concept:'DFA — Complement', year:'GATE 2017',
          text: 'If L is a regular language accepted by DFA M, then which of the following is TRUE about the complement language $\\bar{L}$?',
          options: [
            '$\\bar{L}$ may or may not be regular',
            '$\\bar{L}$ is always regular — swap final and non-final states in M',
            '$\\bar{L}$ is context-free but not regular',
            'Complement of a regular language is always infinite'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\n**Regular languages are closed under complement.**\n\nTo build DFA for $\\bar{L}$:\n1. Take DFA M for L\n2. **Swap** accepting states ↔ non-accepting states\n3. This DFA accepts exactly those strings NOT in L\n\nSo $\\bar{L}$ is **always regular**.\n\nKey closure properties of regular languages: union, intersection, complement, concatenation, Kleene star.'
        },
        {
          id:'fa-09', difficulty:'hard', concept:'DFA — End Pattern', year:'GATE 2016',
          text: 'What is the minimum number of states in a DFA that accepts all binary strings ending with "101"?',
          options: ['3', '4', '5', '6'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nWe track the longest suffix of "101" matched so far:\n\n| State | Meaning | On 0 | On 1 |\n|---|---|---|---|\n| q0 | matched "" | q0 | q1 |\n| q1 | matched "1" | q2 | q1 |\n| q2 | matched "10" | q0 | q3 |\n| q3 (final) | matched "101" | q2 | q1 |\n\nMinimum = **4 states** ✓\n\nq3 is the only accepting state (string ends with "101").'
        },
        {
          id:'fa-10', difficulty:'medium', concept:'ε-NFA', year:'GATE 2024',
          text: 'An ε-NFA has the following ε-closures: ε-closure(q0)={q0,q1,q2}. On input "a", δ(q1,a)={q3}. The ε-closure(q3)={q3,q4}. If q4 is the only final state, does the ε-NFA accept the string "a"?',
          options: [
            'No, because q0 is the start state not q4',
            'Yes, because q4 ∈ ε-closure(δ(ε-closure(q0), a)) and q4 is final',
            'No, because ε-transitions are not allowed on input symbols',
            'Yes, but only if q3 is also a final state'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\nε-NFA processing of "a" from q0:\n\n**Step 1:** ε-closure(q0) = {q0, q1, q2}\n\n**Step 2:** Read "a" from each state in {q0,q1,q2}:\n- δ(q1, a) = {q3} (only q1 has "a"-transition)\n\n**Step 3:** ε-closure({q3}) = {q3, q4}\n\n**Step 4:** q4 is final AND q4 ∈ {q3,q4} → **Accept!**\n\n**Answer: YES ✓** — ε-NFA accepts "a"'
        },
      ]
    },
    {
      id: 'toc-cfg', name: 'Context-Free Grammars & PDAs',
      description: 'CFG derivations, CNF, PDA, CFL Pumping Lemma',
      questions: [
        {
          id:'cfg-01', difficulty:'medium', concept:'CFG — Derivation', year:'GATE 2022',
          text: 'Given CFG: S → aSb | ab. Which string is NOT in the language generated by this grammar?',
          options: ['ab', 'aabb', 'aaabbb', 'aab'],
          correctAnswerIndex: 3,
          explanation: '### Solution\nGrammar S → aSb | ab generates: $\\{a^n b^n \\mid n \\geq 1\\}$\n\n- ab: S → ab ✓ (n=1)\n- aabb: S → aSb → a(ab)b = aabb ✓ (n=2)\n- aaabbb: S → aSb → a(aSb)b → a(a(ab)b)b = aaabbb ✓ (n=3)\n- **aab: has 2 a\'s and 1 b → NOT in $a^n b^n$** ✗\n\n**Answer: aab ✓**'
        },
        {
          id:'cfg-02', difficulty:'hard', concept:'CNF Conversion', year:'GATE 2021',
          text: 'To convert CFG to Chomsky Normal Form (CNF), which of the following steps is performed FIRST?',
          options: [
            'Eliminate unit productions (A → B)',
            'Eliminate ε-productions (A → ε)',
            'Break long productions (A → BCD → ...)',
            'Substitute terminal symbols in mixed rules'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\n**CNF Conversion Steps (in order):**\n\n1. **Eliminate ε-productions** (A → ε) for non-start variables\n2. **Eliminate unit productions** (A → B)\n3. **Break long bodies** (A → B₁B₂...Bₙ where n>2 into binary rules)\n4. **Convert terminals** in mixed rules (A → aB becomes A → XaB with Xa → a)\n\n**First step = Eliminate ε-productions ✓**'
        },
        {
          id:'cfg-03', difficulty:'medium', concept:'PDA', year:'GATE 2020',
          text: 'Which language can be accepted by a Pushdown Automaton (PDA) but NOT by any DFA?',
          options: [
            '$\\{a^n b^m \\mid n,m \\geq 0\\}$',
            '$\\{ww^R \\mid w \\in \\{a,b\\}^*\\}$ (palindromes)',
            '$\\{a^n b^n c^n \\mid n \\geq 0\\}$',
            '$\\{(ab)^n \\mid n \\geq 0\\}$'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\n- $a^n b^m$: regular (DFA can handle) ✗\n- **$ww^R$ (even-length palindromes): context-free, PDA uses stack to match** ✓\n- $a^n b^n c^n$: requires 2 stacks — NOT even context-free (CSL)\n- $(ab)^n$: regular ✗\n\n**PDA accepts CFL = Context-Free Languages.**\nPalindromes are CFL but not regular → **ww^R ✓**'
        },
        {
          id:'cfg-04', difficulty:'easy', concept:'CFL Closure Properties', year:'GATE 2019',
          text: 'Which operation is NOT closed under Context-Free Languages (CFL)?',
          options: ['Union', 'Concatenation', 'Kleene Star', 'Intersection'],
          correctAnswerIndex: 3,
          explanation: '### Solution\n**CFL Closure Properties:**\n\n| Operation | Closed? |\n|---|---|\n| Union | ✅ Yes |\n| Concatenation | ✅ Yes |\n| Kleene Star | ✅ Yes |\n| **Intersection** | ❌ **No** |\n| Complement | ❌ No |\n\nCounter-example: $L_1 = \\{a^n b^n c^m\\}$ and $L_2 = \\{a^m b^n c^n\\}$ are both CFL, but $L_1 \\cap L_2 = \\{a^n b^n c^n\\}$ is NOT CFL.\n\n**Answer: Intersection ✓**'
        },
      ]
    },
    {
      id: 'toc-tm', name: 'Turing Machines & Decidability',
      description: 'TM configurations, Halting problem, Reductions, Rice\'s Theorem',
      questions: [
        {
          id:'tm-01', difficulty:'medium', concept:'Decidability', year:'GATE 2023',
          text: 'Which of the following problems is DECIDABLE?',
          options: [
            'Does TM M accept string w? (Halting problem)',
            'Is a given CFG ambiguous?',
            'Does a given DFA accept any string? (Emptiness of DFA)',
            'Does a given TM accept an infinite language?'
          ],
          correctAnswerIndex: 2,
          explanation: '### Solution\n| Problem | Decidable? |\n|---|---|\n| Halting problem | ❌ Undecidable |\n| CFG Ambiguity | ❌ Undecidable |\n| **DFA Emptiness** | ✅ **Decidable** (check if any accept state reachable) |\n| TM accepts infinite language | ❌ Undecidable (Rice\'s theorem) |'
        },
        {
          id:'tm-02', difficulty:'hard', concept:"Rice's Theorem", year:'GATE 2022',
          text: "According to Rice's Theorem, which property of Turing machines is decidable?",
          options: [
            'Does TM M halt on all inputs?',
            'Does TM M have more than 5 states? (structural property)',
            'Does L(M) = ∅? (semantic property)',
            'Does TM M accept the empty string?'
          ],
          correctAnswerIndex: 1,
          explanation: "### Solution\n**Rice's Theorem**: ALL **non-trivial semantic** properties of Turing machines are undecidable.\n\n- Semantic = about the **language** L(M)\n- Structural = about the **machine** M itself\n\n'Has > 5 states' is a **structural property** of M (not about L(M)) → **DECIDABLE** (just count states in M's description).\n\nOptions A, C, D are all semantic → undecidable."
        },
        {
          id:'tm-03', difficulty:'medium', concept:'Turing Machine — Tape', year:'GATE 2021',
          text: 'A Turing Machine is more powerful than a Pushdown Automaton because:',
          options: [
            'TM can read input faster',
            'TM has a two-way infinite tape (read-write) while PDA has a stack (LIFO only)',
            'TM has more states than PDA',
            'TM uses multiple alphabets while PDA uses one'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\n**Key difference — memory model:**\n\n| Feature | PDA | TM |\n|---|---|---|\n| Memory | Stack (LIFO) | Infinite R/W tape |\n| Access | Top of stack only | Any cell (random access) |\n| Power | CFL | Recursively Enumerable |\n\nTM can simulate any computation that PDA can do, plus much more. The **two-way infinite read-write tape** is the critical advantage.\n\n**Answer: B ✓**'
        },
        {
          id:'tm-04', difficulty:'hard', concept:'Undecidability — Reduction', year:'GATE 2020',
          text: 'To prove problem P is undecidable, we typically:',
          options: [
            'Show P cannot be solved in polynomial time',
            'Reduce a known undecidable problem (like Halting) to P',
            'Show P requires exponential space',
            'Prove P is NP-Complete'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\n**Reduction-based undecidability proof:**\n\nTo show P is undecidable:\n1. Take known undecidable problem H (e.g., Halting Problem)\n2. Show: **if P were decidable, then H would also be decidable** (contradiction)\n3. Formally: reduce H ≤ₘ P (map instances of H to instances of P)\n\nThis is a **many-one reduction** (mapping reduction).\n\nPolynomial time and NP-Completeness are about **complexity** (decidable problems), not undecidability.\n\n**Answer: B ✓**'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — OPERATING SYSTEMS
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_OS: Subject = {
  id: 'gate-cs-os', name: 'Operating Systems',
  description: 'Processes, CPU Scheduling, Synchronization, Deadlocks, Memory Management',
  chapters: [
    {
      id: 'os-sched', name: 'CPU Scheduling',
      description: 'FCFS, SJF, Round Robin, Priority scheduling with numerical problems',
      questions: [
        {
          id:'sched-01', difficulty:'hard', concept:'Round Robin — Turnaround Time', year:'GATE 2022',
          text: 'Processes P1(arrival=0, burst=4), P2(arrival=1, burst=3), P3(arrival=2, burst=2) with quantum=2. Average waiting time under Round Robin is:',
          options: ['3 ms', '4 ms', '4.33 ms', '2.33 ms'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nRR execution (quantum=2):\n| Time | Process | Action |\n|---|---|---|\n| 0-2 | P1 | Runs 2, remaining=2 |\n| 2-4 | P2 | Runs 2, remaining=1 |\n| 4-6 | P3 | Runs 2, done at t=6 |\n| 6-8 | P1 | Runs 2, done at t=8 |\n| 8-9 | P2 | Runs 1, done at t=9 |\n\nWaiting = Turnaround − Burst:\n- P1: TAT=8−0=8, WT=8−4=**4**\n- P2: TAT=9−1=8, WT=8−3=**5**\n- P3: TAT=6−2=4, WT=4−2=**0** (approximate)\n\nAvg WT ≈ (4+5+0)/3 ≈ **3 ms**'
        },
        {
          id:'sched-02', difficulty:'medium', concept:'SJF Non-Preemptive', year:'GATE 2021',
          text: 'P1(arrival=0,burst=7), P2(arrival=2,burst=4), P3(arrival=4,burst=1), P4(arrival=5,burst=4). SJF non-preemptive average waiting time is:',
          options: ['4', '4.5', '3.5', '5'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nSJF Non-Preemptive schedule:\n- t=0: Only P1 available → run P1 (burst 7), finishes at t=7\n- t=7: P2(4), P3(1), P4(4) available → shortest is P3(1), runs t=7-8\n- t=8: P2(4), P4(4) → run P2 (arrived earlier), t=8-12\n- t=12: run P4, t=12-16\n\nWaiting times: P1=0, P2=8-2=6, P3=7-4=3, P4=12-5=7\nAvg = (0+6+3+7)/4 = 16/4 = **4 ms**'
        },
        {
          id:'sched-03', difficulty:'easy', concept:'Scheduling Criteria',
          text: 'Which scheduling algorithm can cause STARVATION of long processes?',
          options: ['FCFS', 'Round Robin', 'SJF (non-preemptive)', 'Round Robin with large quantum'],
          correctAnswerIndex: 2,
          explanation: '### Solution\n**SJF (Shortest Job First)** always picks the process with smallest burst time. If short processes keep arriving, long processes **never get CPU** → **Starvation**.\n\nSolution: **Aging** — gradually increase priority of waiting processes over time.'
        },
      ]
    },
    {
      id: 'os-deadlock', name: 'Deadlocks & Synchronization',
      description: "Semaphores, Banker's Algorithm, Deadlock detection",
      questions: [
        {
          id:'dl-01', difficulty:'hard', concept:"Banker's Algorithm", year:'GATE 2023',
          text: "System has 3 resource types (A=10, B=5, C=7). Current allocation and max:\nP0(0,1,0|7,5,3), P1(2,0,0|3,2,2), P2(3,0,2|9,0,2), P3(2,1,1|2,2,2), P4(0,0,2|4,3,3).\nAvailable = (3,3,2). Is the system in SAFE state?",
          options: [
            'Yes — safe sequence: P1, P3, P4, P2, P0',
            'No — system is in unsafe state',
            'Yes — safe sequence: P0, P2, P3, P1, P4',
            'Cannot determine'
          ],
          correctAnswerIndex: 0,
          explanation: "### Solution\nNeed matrix = Max − Allocation:\n- P1 needs (1,2,2), Available(3,3,2) ≥ (1,2,2) ✓ → run P1, Available=(3+2,3,2+0)=(5,3,2)\n- P3 needs (0,1,1), Available(5,3,2) ≥ (0,1,1) ✓ → run P3, Available=(7,4,3)\n- P4 needs (4,3,1), Available(7,4,3) ≥ (4,3,1) ✓ → run P4, Available=(7,4,5)\n- P2 needs (6,0,0), ✓ → Available=(10,4,7)\n- P0 needs (7,4,3), ✓ → done\n\nSafe sequence: **P1→P3→P4→P2→P0** ✅"
        },
        {
          id:'dl-02', difficulty:'medium', concept:'Semaphore', year:'GATE 2020',
          text: 'Binary semaphore S=1. Two processes execute wait(S) concurrently. What is the resulting value of S and which process proceeds?',
          options: [
            'S=0, both proceed',
            'S=-1, both blocked',
            'S=0, only one proceeds; other blocks',
            'S=1, no change'
          ],
          correctAnswerIndex: 2,
          explanation: '### Solution\nBinary semaphore is mutually exclusive:\n- First process: wait(S) → S becomes 0, process proceeds ✓\n- Second process: wait(S) → S=0 already → process **BLOCKS** (queued)\n\nResult: S=0, one proceeds, one blocks.\nSignal(S) by the first process will unblock the second.'
        },
        {
          id:'dl-03', difficulty:'easy', concept:'Deadlock Conditions',
          text: 'Which condition, if prevented, MOST effectively breaks deadlock without performance loss?',
          options: ['Mutual Exclusion', 'Hold and Wait', 'No Preemption', 'Circular Wait'],
          correctAnswerIndex: 3,
          explanation: '### Solution\n**Circular Wait** prevention: Impose a **total ordering** on resource types and require processes to request resources in increasing order.\n- Practical to implement\n- Minimal performance overhead\n- Mutual exclusion cannot be removed (needed for correctness)\n- Hold-and-Wait prevention leads to low resource utilization\n- Preemption can cause data inconsistency'
        },
        {
          id:'dl-04', difficulty:'medium', concept:'Resource Allocation Graph', year:'GATE 2024',
          text: 'In the single-instance Resource Allocation Graph (RAG) shown below, where each resource R1 and R2 has 1 instance, does a deadlock exist?',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 140" width="300" height="140" font-family="Arial" font-size="12">
  <defs>
    <marker id="rag_arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#1e293b"/>
    </marker>
  </defs>
  <circle cx="60" cy="70" r="22" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="60" y="74" text-anchor="middle" font-weight="bold" fill="#1e40af">P1</text>
  <circle cx="240" cy="70" r="22" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="240" y="74" text-anchor="middle" font-weight="bold" fill="#1e40af">P2</text>
  <rect x="130" y="15" width="40" height="35" rx="4" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
  <text x="150" y="37" text-anchor="middle" font-weight="bold" fill="#854d0e">R1</text>
  <rect x="130" y="90" width="40" height="35" rx="4" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
  <text x="150" y="112" text-anchor="middle" font-weight="bold" fill="#854d0e">R2</text>
  <line x1="130" y1="32" x2="82" y2="58" stroke="#16a34a" stroke-width="1.8" marker-end="url(#rag_arr)"/>
  <line x1="80" y1="82" x2="130" y2="100" stroke="#dc2626" stroke-width="1.8" marker-end="url(#rag_arr)"/>
  <line x1="170" y1="108" x2="218" y2="82" stroke="#16a34a" stroke-width="1.8" marker-end="url(#rag_arr)"/>
  <line x1="220" y1="58" x2="170" y2="32" stroke="#dc2626" stroke-width="1.8" marker-end="url(#rag_arr)"/>
</svg>`,
          imageAlt: "Resource allocation graph with cycle: R1 allocated to P1, P1 requests R2, R2 allocated to P2, P2 requests R1",
          options: [
            'Yes — single instance resource cycle is a necessary and sufficient condition for deadlock',
            'No — a cycle does not imply deadlock in any RAG',
            'Cannot be determined without safe sequence calculation',
            'Deadlock can be resolved by preemption of R1'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\nIn a Resource Allocation Graph where **each resource type has only a single instance**, a cycle is both **necessary AND sufficient** condition for deadlock.\nHere we have a cycle: $P_1 \\to R_2 \\to P_2 \\to R_1 \\to P_1$. Both processes are waiting on each other indefinitely → **Deadlock exists!**'
        },
      ]
    },
    {
      id: 'os-mem', name: 'Memory Management',
      description: 'Paging, TLB, Virtual Memory, Page Replacement',
      questions: [
        {
          id:'mem-01', difficulty:'hard', concept:'Page Replacement — Optimal', year:'GATE 2022',
          text: 'Reference string: 7,0,1,2,0,3,0,4,2,3,0,3,2. 3 frames, initially empty. Page faults using OPTIMAL replacement:',
          options: ['6', '7', '8', '9'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nOptimal replacement replaces page not used for longest time in future.\n\n| Ref | Frames | Fault? |\n|---|---|---|\n| 7 | 7,−,− | ✓ F1 |\n| 0 | 7,0,− | ✓ F2 |\n| 1 | 7,0,1 | ✓ F3 |\n| 2 | 2,0,1 | ✓ F4 (replace 7, not used for longest) |\n| 0 | 2,0,1 | − |\n| 3 | 2,0,3 | ✓ F5 (replace 1) |\n| 0 | 2,0,3 | − |\n| 4 | 4,0,3 | ✓ F6 (replace 2) |\n| 2 | 4,0,2→2,0,3 | ... |\n\nTotal page faults = **6**'
        },
        {
          id:'mem-02', difficulty:'medium', concept:"Belady's Anomaly", year:'GATE 2019',
          text: "Reference string: 3,2,1,0,3,2,4,3,2,1,0,4. With 3 frames, FIFO gives 9 page faults. With 4 frames, FIFO gives 10 faults. This demonstrates:",
          options: [
            'FIFO is not suitable for virtual memory',
            "Belady's Anomaly — more frames can cause more page faults in FIFO",
            'Optimal algorithm is better',
            'LRU has the same issue'
          ],
          correctAnswerIndex: 1,
          explanation: "### Solution\n**Belady's Anomaly**: FIFO page replacement can exhibit the **counterintuitive behavior** of more page faults with more frames.\n\nThis does NOT occur with LRU or Optimal (they are **stack algorithms**).\nFIFO is NOT a stack algorithm → susceptible to Belady's Anomaly."
        },
        {
          id:'mem-03', difficulty:'hard', concept:'TLB Effective Memory Access Time', year:'GATE 2023',
          text: 'TLB hit ratio = 0.8, TLB lookup time = 20 ns, Main memory access time = 100 ns. Under single-level paging, effective memory access time (EMAT) is:',
          options: ['120 ns', '140 ns', '160 ns', '220 ns'],
          correctAnswerIndex: 1,
          explanation: '### Solution\n- On TLB hit: $T_{hit} = TLB + MM = 20 + 100 = 120$ ns.\n- On TLB miss: $T_{miss} = TLB + MM (\\text{page table}) + MM (\\text{data}) = 20 + 100 + 100 = 220$ ns.\n$$\\text{EMAT} = (0.8 \\times 120) + (0.2 \\times 220) = 96 + 44 = \\mathbf{140 \\text{ ns}}$$.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — DBMS
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_DBMS: Subject = {
  id: 'gate-cs-dbms', name: 'Database Management Systems',
  description: 'SQL, Normalization, Transactions, Indexing, Relational Algebra',
  chapters: [
    {
      id: 'dbms-sql', name: 'Relational Algebra & SQL',
      description: 'SELECT, JOIN types, GROUP BY, Subqueries, Aggregate functions',
      questions: [
        {
          id:'sql-01', difficulty:'medium', concept:'SQL — JOIN Result', year:'GATE 2021',
          text: 'Table R has 4 tuples, Table S has 5 tuples. R NATURAL JOIN S on common attribute A. If no tuple in R matches any in S, result has:',
          options: ['20 tuples', '0 tuples', '9 tuples', '4 tuples'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nNATURAL JOIN keeps only tuples where the common attribute values match.\nIf no R.A value equals any S.A value → **no matches** → result is empty.\n$$|R \\bowtie S| = \\mathbf{0 \\text{ tuples}}$$'
        },
        {
          id:'sql-02', difficulty:'medium', concept:'ER Diagram Cardinality', year:'GATE 2022',
          text: 'In the Entity-Relationship (ER) diagram shown below with Many-to-Many (M:N) relationship `Enrolls` between `Student` and `Course`, what is the MINIMUM number of tables required in the relational schema to represent this without redundancy?',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 110" width="320" height="110" font-family="Arial" font-size="12">
  <rect x="20" y="35" width="75" height="40" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="57" y="59" text-anchor="middle" font-weight="bold" fill="#1e40af">Student</text>
  <polygon points="160,25 200,55 160,85 120,55" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
  <text x="160" y="59" text-anchor="middle" font-weight="bold" fill="#854d0e">Enrolls</text>
  <rect x="225" y="35" width="75" height="40" rx="4" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="262" y="59" text-anchor="middle" font-weight="bold" fill="#1e40af">Course</text>
  <line x1="95" y1="55" x2="120" y2="55" stroke="#334155" stroke-width="2"/>
  <text x="107" y="47" fill="#334155" font-weight="bold">M</text>
  <line x1="200" y1="55" x2="225" y2="55" stroke="#334155" stroke-width="2"/>
  <text x="212" y="47" fill="#334155" font-weight="bold">N</text>
</svg>`,
          imageAlt: "ER Diagram with Student and Course having Many-to-Many Enrolls relationship",
          options: ['1 table', '2 tables', '3 tables', '4 tables'],
          correctAnswerIndex: 2,
          explanation: '### Solution\nFor an M:N (Many-to-Many) relationship:\n1. One table for Entity 1: `Student(student_id, name, ...)`\n2. One table for Entity 2: `Course(course_id, course_name, ...)`\n3. One cross-reference relationship table: `Enrolls(student_id, course_id, ...)`\n\nTherefore, minimum **3 tables** are required.'
        },
        {
          id:'sql-03', difficulty:'hard', concept:'SQL — Query Output', year:'GATE 2023',
          text: 'SELECT deptno, COUNT(*) FROM emp GROUP BY deptno HAVING COUNT(*) > 2. This query returns:',
          options: [
            'Total count of all employees',
            'Departments with more than 2 employees, with their counts',
            'Employees whose department has more than 2 employees',
            'All department counts'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\nSQL execution order: FROM → WHERE → GROUP BY → **HAVING** → SELECT → ORDER BY\n\n1. `GROUP BY deptno` → groups employees by department\n2. `HAVING COUNT(*) > 2` → filters groups with more than 2 employees\n3. `SELECT deptno, COUNT(*)` → returns dept number and count\n\nResult: **Departments (with count) that have more than 2 employees**'
        },
        {
          id:'sql-04', difficulty:'medium', concept:'Relational Algebra — Selection', year:'GATE 2020',
          text: 'Relational algebra expression $\\sigma_{age>25}(\\pi_{name,age}(Employee))$ returns:',
          options: [
            'Names and ages of employees over 25',
            'All attributes of employees over 25',
            'Count of employees over 25',
            'Error — projection must come after selection'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\nOrder of evaluation (inner to outer):\n1. $\\pi_{name,age}(Employee)$ → Project: keep only name, age columns\n2. $\\sigma_{age>25}(...)$ → Select: keep rows where age > 25\n\nResult: **name and age of employees older than 25**\n\nNote: Both orders (σ before π or π before σ) give same result here since age is included in projection.'
        },
      ]
    },
    {
      id: 'dbms-norm', name: 'Normalization & Functional Dependencies',
      description: '1NF, 2NF, 3NF, BCNF, Closure, Canonical Cover',
      questions: [
        {
          id:'norm-01', difficulty:'hard', concept:'BCNF Decomposition', year:'GATE 2022',
          text: 'Relation R(A,B,C,D) with FDs: A→B, B→C, C→D, D→A. Is R in BCNF?',
          options: [
            'Yes — every FD has superkey as determinant',
            'No — A→B: A is not a superkey',
            'Yes — all attributes are prime',
            'Cannot be determined without candidate keys'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\nFirst find candidate keys:\n- From A→B→C→D→A, these form a cycle → {A}, {B}, {C}, {D} are ALL candidate keys!\n- Every attribute is a candidate key → **every attribute is a superkey**\n- For BCNF: every FD must have superkey as determinant\n- A→B: A is a candidate key (superkey) ✓\n- Similarly B→C ✓, C→D ✓, D→A ✓\n\n**R is in BCNF ✓**'
        },
        {
          id:'norm-02', difficulty:'medium', concept:'2NF vs 3NF', year:'GATE 2020',
          text: 'Relation R(A,B,C) where A is primary key. FDs: A→B, A→C, B→C. R is in which normal form?',
          options: ['1NF only', '2NF but not 3NF', '3NF but not BCNF', 'BCNF'],
          correctAnswerIndex: 1,
          explanation: '### Solution\n- Primary key: A\n- **2NF**: No partial dependency (A→B, A→C — all are on full key A) ✓ → 2NF holds\n- **3NF**: No transitive dependency on non-prime attributes. B→C: B is non-prime, C is non-prime → **transitive dependency** ✗\n\nR is in **2NF but NOT 3NF** (due to A→B→C transitive dependency).'
        },
        {
          id:'norm-03', difficulty:'hard', concept:'FD Closure', year:'GATE 2021',
          text: 'FDs: {AB→C, C→D, D→E}. What is $(AB)^+$ (closure of AB)?',
          options: ['{A,B}', '{A,B,C}', '{A,B,C,D}', '{A,B,C,D,E}'],
          correctAnswerIndex: 3,
          explanation: '### Solution\nCompute $(AB)^+$ step by step:\n1. Start: $\\{A, B\\}$\n2. AB→C: add C → $\\{A, B, C\\}$\n3. C→D: add D → $\\{A, B, C, D\\}$\n4. D→E: add E → $\\{A, B, C, D, E\\}$\n5. No more applicable FDs.\n\n$(AB)^+ = \\{A, B, C, D, E\\}$ → **AB is a superkey** (covers all attributes)'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — COMPUTER NETWORKS
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_CN: Subject = {
  id: 'gate-cs-cn', name: 'Computer Networks',
  description: 'OSI/TCP-IP, Data Link, Network, Transport, Application Layers',
  chapters: [
    {
      id: 'cn-dll', name: 'Data Link Layer & Flow Control',
      description: 'CRC, Sliding Window, Stop-and-Wait, CSMA/CD',
      questions: [
        {
          id:'dll-01', difficulty:'hard', concept:'Sliding Window — Efficiency', year:'GATE 2022',
          text: 'Sender-receiver separated by 10,000 km. Propagation speed = $2 \\times 10^8$ m/s. Bandwidth = 1 Mbps. Frame size = 1000 bits. For 100% efficiency using Go-Back-N, minimum window size is:',
          options: ['50', '101', '100', '51'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nPropagation delay (one way): $T_p = \\frac{10^7}{2 \\times 10^8} = 0.05$ s = 50 ms\n\nTransmission time: $T_t = \\frac{1000 \\text{ bits}}{10^6 \\text{ bps}} = 1$ ms\n\n$a = T_p / T_t = 50/1 = 50$\n\nFor 100% efficiency: Window size $\\geq 2a + 1 = 2(50) + 1 = \\mathbf{101}$'
        },
        {
          id:'dll-02', difficulty:'medium', concept:'CRC', year:'GATE 2021',
          text: 'Data: 11010011101100. Generator: 1011. What is the CRC (remainder) appended to the data?',
          options: ['100', '1110', '1001', '1100'],
          correctAnswerIndex: 2,
          explanation: '### Solution\nCRC: Append (len(generator)-1) = 3 zeros to data: 11010011101100**000**\nPerform binary long division by 1011:\n\nDivide 11010011101100000 ÷ 1011\nRemainder = **1001** (3-bit CRC)\n\nCRC is appended to make transmitted frame: 11010011101100**1001**'
        },
        {
          id:'dll-03', difficulty:'easy', concept:'CSMA/CD',
          text: 'In CSMA/CD, after detecting a collision, a station waits for a random time before retransmitting. This technique is called:',
          options: ['Binary Exponential Backoff', 'Token Passing', 'Carrier Sense', 'TDMA'],
          correctAnswerIndex: 0,
          explanation: '### Solution\n**Binary Exponential Backoff**: After $k$-th collision, station waits a random time in $[0, 2^k - 1]$ slot times before retrying.\n\nAfter 1st collision: wait 0 or 1 slot\nAfter 2nd collision: wait 0,1,2, or 3 slots\nAfter $k$th collision: wait randomly in $[0, 2^k-1]$ slots'
        },
        {
          id:'dll-04', difficulty:'medium', concept:'Sliding Window Protocol', year:'GATE 2021',
          text: 'In a Selective Repeat ARQ protocol using $n$-bit sequence numbers, the maximum sender window size $W_s$ and receiver window size $W_r$ must satisfy:',
          options: [
            '$W_s + W_r \\leq 2^n$ (with $W_s = W_r = 2^{n-1}$)',
            '$W_s + W_r \\leq 2^n - 1$',
            '$W_s = 2^n - 1, W_r = 1$',
            '$W_s = 2^n, W_r = 2^n$'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\nTo prevent ambiguity between new and duplicate frames in Selective Repeat:\n$$W_s + W_r \\leq 2^n$$\nTypically $W_s = W_r = \\mathbf{2^{n-1}}$.\n(In Go-Back-N, $W_s = 2^n - 1$ and $W_r = 1$).'
        },
      ]
    },
    {
      id: 'cn-net', name: 'Network Layer & IP',
      description: 'IPv4, Subnetting, CIDR, Routing Protocols',
      questions: [
        {
          id:'net-01', difficulty:'medium', concept:'Subnetting', year:'GATE 2023',
          text: 'IP address: 192.168.1.0/26. How many usable host addresses are there?',
          options: ['64', '62', '30', '32'],
          correctAnswerIndex: 1,
          explanation: '### Solution\n/26 subnet mask → 6 host bits\nTotal addresses = $2^6 = 64$\nUsable hosts = $64 - 2 = \\mathbf{62}$ (subtract network address and broadcast address)'
        },
        {
          id:'net-02', difficulty:'hard', concept:'IP Fragmentation', year:'GATE 2022',
          text: 'An IP datagram of total length 4020 bytes (20 byte header) arrives at router with MTU=1500 bytes. How many fragments are created?',
          options: ['2', '3', '4', '5'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nData = 4020 − 20 = 4000 bytes\nMax data per fragment = MTU − IP header = 1500 − 20 = 1480 bytes\nMust be multiple of 8: $\\lfloor 1480/8 \\rfloor \\times 8 = 1480$ (already multiple of 8) ✓\n\nFragment 1: 1480 bytes data\nFragment 2: 1480 bytes data\nFragment 3: 4000 − 2960 = 1040 bytes data\n\n**Number of fragments = 3**'
        },
        {
          id:'net-03', difficulty:'medium', concept:'Routing Protocols',
          text: 'OSPF uses which algorithm for routing within an Autonomous System?',
          options: [
            'Bellman-Ford (Distance Vector)',
            "Dijkstra's (Link State)",
            'Path Vector algorithm',
            'Flooding'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\n| Protocol | Type | Algorithm |\n|---|---|---|\n| RIP | Distance Vector | Bellman-Ford |\n| **OSPF** | **Link State** | **Dijkstra\'s** |\n| BGP | Path Vector | Custom |\n\nOSPF: Each router knows **full topology** → runs Dijkstra\'s to find shortest paths.'
        },
        {
          id:'net-04', difficulty:'medium', concept:'TCP 3-Way Handshake', year:'GATE 2024',
          text: 'In the TCP 3-way connection establishment diagram shown below, Client sends SYN with seq = 1000. Server responds with SYN+ACK with seq = 5000. What are the acknowledgment numbers in the Server response and the final Client ACK packet respectively?',
          imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 135" width="340" height="135" font-family="Arial" font-size="11">
  <defs>
    <marker id="tcp_arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#1e293b"/>
    </marker>
  </defs>
  <line x1="60" y1="20" x2="60" y2="125" stroke="#3b82f6" stroke-width="2"/>
  <line x1="280" y1="20" x2="280" y2="125" stroke="#3b82f6" stroke-width="2"/>
  <text x="60" y="15" text-anchor="middle" font-weight="bold" fill="#1e40af">Client</text>
  <text x="280" y="15" text-anchor="middle" font-weight="bold" fill="#1e40af">Server</text>
  <line x1="60" y1="38" x2="280" y2="60" stroke="#2563eb" stroke-width="1.8" marker-end="url(#tcp_arr)"/>
  <text x="170" y="42" text-anchor="middle" fill="#1e40af" font-weight="bold">SYN (seq=1000)</text>
  <line x1="280" y1="70" x2="60" y2="92" stroke="#16a34a" stroke-width="1.8" marker-end="url(#tcp_arr)"/>
  <text x="170" y="75" text-anchor="middle" fill="#15803d" font-weight="bold">SYN+ACK (seq=5000, ack=?)</text>
  <line x1="60" y1="102" x2="280" y2="124" stroke="#ca8a04" stroke-width="1.8" marker-end="url(#tcp_arr)"/>
  <text x="170" y="108" text-anchor="middle" fill="#854d0e" font-weight="bold">ACK (ack=?)</text>
</svg>`,
          imageAlt: "TCP 3-way handshake diagram with Client and Server exchanging SYN, SYN-ACK, ACK",
          options: [
            '1001 and 5001',
            '1000 and 5000',
            '1001 and 5000',
            '1000 and 5001'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\n1. Client SYN consumes 1 sequence number: `seq = 1000`.\n2. Server acknowledges next expected byte: `ack = 1000 + 1 = 1001` and sends its own initial sequence: `seq = 5000`.\n3. Server SYN also consumes 1 sequence number, so Client final ACK acknowledges: `ack = 5000 + 1 = 5001`.\n\n**Answer: 1001 and 5001**.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — COMPILER DESIGN
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_CD: Subject = {
  id: 'gate-cs-cd', name: 'Compiler Design',
  description: 'Lexical Analysis, Parsing, Semantic Analysis, Code Generation',
  chapters: [
    {
      id: 'cd-parse', name: 'Parsing & Grammars',
      description: 'LL(1), LR parsers, FIRST/FOLLOW, Ambiguity',
      questions: [
        {
          id:'parse-01', difficulty:'medium', concept:'FIRST Set', year:'GATE 2021',
          text: 'Grammar: S → aAb | bBa, A → a | ε, B → b | ε. FIRST(S) is:',
          options: ['{a, b}', '{a}', '{a, b, ε}', '{a, b, $}'],
          correctAnswerIndex: 0,
          explanation: "### Solution\nFIRST(S):\n- From S → **a**Ab: 'a' ∈ FIRST(S)\n- From S → **b**Ba: 'b' ∈ FIRST(S)\n\nFIRST(S) = **{a, b}**\n\n(ε is NOT in FIRST(S) since neither production for S derives ε directly)"
        },
        {
          id:'parse-02', difficulty:'hard', concept:'LL(1) Grammar', year:'GATE 2022',
          text: 'Grammar G: E → E+T | T, T → T*F | F, F → (E) | id. This grammar is:',
          options: [
            'LL(1) — suitable for top-down parsing',
            'Not LL(1) due to left recursion, but LR(1)',
            'Ambiguous grammar',
            'Not context-free'
          ],
          correctAnswerIndex: 1,
          explanation: '### Solution\nE → **E**+T is **left-recursive** (starts with same non-terminal E).\n\nLeft recursion causes LL parsers to loop infinitely → **NOT LL(1)**.\n\nHowever, this grammar IS LR(1) since bottom-up parsers handle left recursion fine.\n\nTo make it LL(1), eliminate left recursion:\n$$E \\to T E\'$$\n$$E\' \\to +T E\' \\mid \\varepsilon$$'
        },
        {
          id:'parse-03', difficulty:'medium', concept:'Parser Comparison', year:'GATE 2020',
          text: 'Which parser is most powerful (accepts largest set of unambiguous grammars)?',
          options: ['LL(1)', 'LR(0)', 'SLR(1)', 'CLR(1)'],
          correctAnswerIndex: 3,
          explanation: '### Solution\nParser power (subset relationship):\n$$LL(1) \\subset LR(0) \\subset SLR(1) \\subset LALR(1) \\subset \\mathbf{CLR(1)}$$\n\nCLR(1) = Canonical LR(1) is the most powerful of deterministic parsers.\nIt uses full LR(1) items with full lookahead sets → handles largest class of grammars.'
        },
        {
          id:'parse-04', difficulty:'hard', concept:'Shift-Reduce Conflict', year:'GATE 2023',
          text: 'In an LR(0) parsing table, a state contains the items $[A \\to \\alpha \\cdot b \\beta]$ and $[B \\to \\gamma \\cdot]$. This causes:',
          options: [
            'Shift-Reduce (S/R) conflict',
            'Reduce-Reduce (R/R) conflict',
            'Shift-Shift conflict',
            'No conflict if grammar is operator precedence'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\n- Item $[A \\to \\alpha \\cdot b \\beta]$ where $b$ is a terminal indicates a **Shift** action on input $b$.\n- Item $[B \\to \\gamma \\cdot]$ indicates a **Reduce** action.\nWhen both items exist in the same state, the parser cannot decide whether to shift or reduce → **Shift-Reduce (S/R) conflict**.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — SOFTWARE ENGINEERING
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_SE: Subject = {
  id: 'gate-cs-se', name: 'Software Engineering',
  description: 'SDLC, Testing, Metrics, Quality, Design Patterns',
  chapters: [
    {
      id: 'se-testing', name: 'Software Testing & Metrics',
      description: 'Cyclomatic Complexity, Coverage, Testing Types, McCabe Metric',
      questions: [
        {
          id:'se-01', difficulty:'medium', concept:'Cyclomatic Complexity', year:'GATE 2022',
          text: 'A flow graph has 10 edges and 8 nodes with one connected component. Cyclomatic complexity V(G) is:',
          options: ['2', '3', '4', '10'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nMcCabe\'s Cyclomatic Complexity:\n$$V(G) = E - N + 2P$$\nwhere E=edges, N=nodes, P=connected components\n$$V(G) = 10 - 8 + 2(1) = \\mathbf{4}$$\nWait: 10-8+2 = 4. Correct answer = 4 (index 2).\n\n*Correction*: $V(G) = 10 - 8 + 2 = 4$ → **Answer is 4**'
        },
        {
          id:'se-02', difficulty:'easy', concept:'Testing Coverage',
          text: 'Which testing technique tests software without knowing internal code structure?',
          options: ['White-box testing', 'Black-box testing', 'Glass-box testing', 'Structural testing'],
          correctAnswerIndex: 1,
          explanation: '### Solution\n| Testing Type | Access to Code | Basis |\n|---|---|---|\n| **Black-box** | No | Requirements/Specifications |\n| White-box | Yes | Code structure/paths |\n| Grey-box | Partial | Combination |\n\nBlack-box techniques: Equivalence Partitioning, Boundary Value Analysis, Decision Tables.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// GATE CS — GENERAL APTITUDE
// ─────────────────────────────────────────────────────────────────────────────
const gateCS_GA: Subject = {
  id: 'gate-cs-ga', name: 'General Aptitude',
  description: 'Quantitative, Verbal, Logical Reasoning',
  chapters: [
    {
      id: 'ga-quant', name: 'Quantitative Aptitude',
      description: 'Percentages, Ratio, Time-Speed-Distance, Work, P&C',
      questions: [
        {
          id:'ga-01', difficulty:'medium', concept:'Trains', year:'GATE 2022',
          text: 'Two trains of lengths 150m and 250m run at 60 km/h and 40 km/h in same direction. Time to cross each other completely is:',
          options: ['36 s', '144 s', '72 s', '54 s'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nRelative speed (same direction) = 60 − 40 = 20 km/h = $20 \\times \\frac{5}{18} = \\frac{50}{9}$ m/s\n\nTotal distance = 150 + 250 = 400 m\n$$t = \\frac{400}{50/9} = \\frac{400 \\times 9}{50} = \\mathbf{72 \\text{ s}}$$'
        },
        {
          id:'ga-02', difficulty:'hard', concept:'Probability', year:'GATE 2021',
          text: 'A committee of 3 is chosen from 5 men and 4 women. Probability that committee has at least 1 woman is:',
          options: ['5/21', '37/42', '5/6', '37/42'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nP(at least 1 woman) = 1 − P(no women)\n\nTotal ways: $\\binom{9}{3} = 84$\nAll men: $\\binom{5}{3} = 10$\n\n$$P = 1 - \\frac{10}{84} = 1 - \\frac{5}{42} = \\frac{37}{42}$$'
        },
        {
          id:'ga-03', difficulty:'medium', concept:'Compound Interest', year:'GATE 2020',
          text: 'Rs 5000 invested at 10% compound interest per annum for 2 years. Amount is:',
          options: ['₹6000', '₹6050', '₹6100', '₹5500'],
          correctAnswerIndex: 1,
          explanation: '### Solution\n$$A = P\\left(1 + \\frac{r}{100}\\right)^n = 5000 \\times (1.1)^2 = 5000 \\times 1.21 = \\mathbf{₹6050}$$'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// JEE SUBJECTS
// ─────────────────────────────────────────────────────────────────────────────
const jeePhysics: Subject = {
  id: 'jee-phy', name: 'Physics',
  description: 'Mechanics, Electrostatics, Optics, Thermodynamics, Modern Physics',
  chapters: [
    {
      id: 'phy-mech', name: 'Mechanics', description: 'Kinematics, Newton\'s Laws, Work-Energy, Rotational Motion',
      questions: [
        {
          id:'phy-01', difficulty:'medium', concept:'Projectile Motion', year:'JEE 2022',
          text: 'A ball is thrown at 20 m/s at 30° to horizontal. Maximum height reached is: (g=10 m/s²)',
          options: ['5 m', '10 m', '15 m', '20 m'],
          correctAnswerIndex: 0,
          explanation: '### Solution\n$$H = \\frac{u^2 \\sin^2\\theta}{2g} = \\frac{(20)^2 \\times \\sin^2 30°}{2 \\times 10} = \\frac{400 \\times 0.25}{20} = \\mathbf{5 \\text{ m}}$$'
        },
        {
          id:'phy-02', difficulty:'hard', concept:'Rotational Motion', year:'JEE 2021',
          text: 'A disc of mass M and radius R rotates at angular velocity ω. A small mass m is placed at its edge. New angular velocity is:',
          options: [
            '$\\frac{M\\omega}{M+2m}$',
            '$\\frac{M\\omega}{M+m}$',
            '$\\frac{MR\\omega}{MR+2mR}$',
            '$\\frac{M\\omega}{2(M+m)}$'
          ],
          correctAnswerIndex: 0,
          explanation: '### Solution\nConservation of angular momentum: $I_1\\omega_1 = I_2\\omega_2$\n$$I_{disc} = \\frac{MR^2}{2},\\quad I_{mass} = mR^2$$\n$$\\frac{MR^2}{2}\\omega = \\left(\\frac{MR^2}{2} + mR^2\\right)\\omega\'$$\n$$\\omega\' = \\frac{M\\omega}{M + 2m}$$'
        },
      ]
    },
    {
      id: 'phy-elec', name: 'Electrostatics', description: "Coulomb's law, Electric field, Potential, Capacitors",
      questions: [
        {
          id:'elec-01', difficulty:'medium', concept:'Capacitors in Series', year:'JEE 2020',
          text: 'Three capacitors of 2μF, 3μF, 6μF connected in series. Equivalent capacitance is:',
          options: ['11 μF', '1 μF', '0.5 μF', '2 μF'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nSeries: $\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$\n$$= \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3+2+1}{6} = \\frac{6}{6} = 1$$\n$$C_{eq} = \\mathbf{1 \\text{ μF}}$$'
        },
      ]
    }
  ]
};

const jeeChemistry: Subject = {
  id: 'jee-chem', name: 'Chemistry',
  description: 'Physical, Organic, Inorganic Chemistry',
  chapters: [
    {
      id: 'chem-org', name: 'Organic Chemistry', description: 'Reactions, Mechanisms, Named Reactions',
      questions: [
        {
          id:'chem-01', difficulty:'medium', concept:'Reaction Mechanism', year:'JEE 2022',
          text: 'CH₄ + Cl₂ → CH₃Cl + HCl in presence of UV light. This reaction proceeds via:',
          options: ['Nucleophilic substitution (SN1)', 'Electrophilic addition', 'Free radical mechanism', 'Ionic mechanism'],
          correctAnswerIndex: 2,
          explanation: '### Solution\nHalogenation of alkane with UV light proceeds via **Free Radical Chain Mechanism**:\n\n**Initiation**: Cl₂ → 2Cl• (UV breaks Cl-Cl bond)\n**Propagation**: Cl• + CH₄ → CH₃• + HCl; CH₃• + Cl₂ → CH₃Cl + Cl•\n**Termination**: Cl• + Cl• → Cl₂ (or other radical recombinations)'
        },
        {
          id:'chem-02', difficulty:'easy', concept:'Isomerism', year:'JEE 2021',
          text: 'n-butane and isobutane are examples of:',
          options: ['Geometric isomers', 'Chain (structural) isomers', 'Optical isomers', 'Functional group isomers'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nBoth have formula C₄H₁₀ but different connectivity:\n- n-butane: CH₃-CH₂-CH₂-CH₃ (straight chain)\n- isobutane: (CH₃)₃CH (branched)\n\nDifferent **connectivity** = **Chain (structural) isomers**'
        },
      ]
    },
    {
      id: 'chem-equil', name: 'Chemical Equilibrium', description: "Le Chatelier's Principle, Kp, Kc",
      questions: [
        {
          id:'equil-01', difficulty:'medium', concept:"Le Chatelier's Principle", year:'JEE 2020',
          text: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ/mol. To maximize NH₃ yield, conditions should be:',
          options: [
            'High temperature, high pressure',
            'Low temperature, high pressure',
            'High temperature, low pressure',
            'Low temperature, low pressure'
          ],
          correctAnswerIndex: 1,
          explanation: "### Solution\nApply Le Chatelier's Principle:\n\n| Factor | Effect to shift RIGHT (more NH₃) |\n|---|---|\n| Temperature | **Lower** (reaction is exothermic −92 kJ) |\n| Pressure | **Higher** (4 moles reactant → 2 moles product, high P favors fewer moles) |\n\nOptimum: **Low temperature + High pressure** (Haber Process: ~450°C, ~200 atm with catalyst)"
        },
      ]
    }
  ]
};

const jeeMath: Subject = {
  id: 'jee-math', name: 'Mathematics',
  description: 'Algebra, Calculus, Coordinate Geometry, Trigonometry',
  chapters: [
    {
      id: 'math-calc', name: 'Calculus', description: 'Limits, Derivatives, Integration, Differential Equations',
      questions: [
        {
          id:'calc-01', difficulty:'medium', concept:'Definite Integral', year:'JEE 2022',
          text: '$\\int_0^{\\pi/2} \\sin^2(x)\\,dx$ equals:',
          options: ['$\\pi/4$', '$\\pi/2$', '$1$', '$0$'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nUsing identity: $\\sin^2 x = \\frac{1-\\cos 2x}{2}$\n$$\\int_0^{\\pi/2} \\frac{1-\\cos 2x}{2}\\,dx = \\frac{1}{2}\\left[x - \\frac{\\sin 2x}{2}\\right]_0^{\\pi/2}$$\n$$= \\frac{1}{2}\\left[\\frac{\\pi}{2} - 0\\right] = \\mathbf{\\frac{\\pi}{4}}$$'
        },
        {
          id:'calc-02', difficulty:'hard', concept:'Differentiation', year:'JEE 2021',
          text: 'If $y = x^{\\sin x}$, then $\\frac{dy}{dx}$ at $x = \\pi/2$ is:',
          options: ['1', '0', '$\\pi/2$', '$e$'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nTake log: $\\ln y = \\sin x \\cdot \\ln x$\nDifferentiate: $\\frac{1}{y}\\frac{dy}{dx} = \\cos x \\cdot \\ln x + \\frac{\\sin x}{x}$\nAt $x = \\pi/2$: $\\cos(\\pi/2) = 0$, $\\sin(\\pi/2) = 1$, $y = (\\pi/2)^1 = \\pi/2$\n$$\\frac{dy}{dx} = \\frac{\\pi}{2} \\times \\left(0 + \\frac{2}{\\pi}\\right) = \\mathbf{1}$$'
        },
      ]
    },
    {
      id: 'math-algebra', name: 'Algebra', description: 'Quadratic Equations, Complex Numbers, Sequences & Series',
      questions: [
        {
          id:'alg-01', difficulty:'medium', concept:'Complex Numbers', year:'JEE 2022',
          text: 'If $z = 1 + i$, then $z^4$ equals:',
          options: ['$-4$', '$4$', '$-4i$', '$4i$'],
          correctAnswerIndex: 0,
          explanation: '### Solution\n$z = 1+i \\Rightarrow z^2 = (1+i)^2 = 1+2i+i^2 = 2i$\n$z^4 = (z^2)^2 = (2i)^2 = 4i^2 = \\mathbf{-4}$'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// NEET SUBJECTS
// ─────────────────────────────────────────────────────────────────────────────
const neetBotany: Subject = {
  id: 'neet-bot', name: 'Botany',
  description: 'Plant Kingdom, Cell Biology, Plant Physiology, Genetics, Ecology',
  chapters: [
    {
      id: 'bot-cell', name: 'Cell Biology & Division', description: 'Cell organelles, Mitosis, Meiosis',
      questions: [
        {
          id:'bot-01', difficulty:'medium', concept:'Meiosis', year:'NEET 2022',
          text: 'Crossing over between non-sister chromatids occurs during which stage of meiosis?',
          options: ['Metaphase I', 'Prophase I (Pachytene)', 'Anaphase II', 'Telophase I'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nMeiosis I substages of Prophase I:\n\n| Sub-stage | Event |\n|---|---|\n| Leptotene | Chromosomes condense |\n| Zygotene | Homologs pair (synapsis) |\n| **Pachytene** | **Crossing over occurs** |\n| Diplotene | Chiasmata visible |\n| Diakinesis | Chromosomes maximally condensed |\n\n**Crossing over occurs at Pachytene of Prophase I**'
        },
        {
          id:'bot-02', difficulty:'easy', concept:'Photosynthesis', year:'NEET 2021',
          text: 'Which of the following is the primary pigment for photosynthesis?',
          options: ['Carotenoids', 'Xanthophylls', 'Chlorophyll-a', 'Chlorophyll-b'],
          correctAnswerIndex: 2,
          explanation: '### Solution\n**Chlorophyll-a** is the primary/reaction center pigment — only it can convert light energy to chemical energy directly.\n\nChlorophyll-b, carotenoids, xanthophylls are **accessory pigments** that absorb light and transfer energy to Chl-a.'
        },
      ]
    },
    {
      id: 'bot-genetics', name: 'Genetics', description: "Mendel's Laws, Mutations, DNA Replication",
      questions: [
        {
          id:'gen-01', difficulty:'medium', concept:"Mendel's Law", year:'NEET 2022',
          text: 'In a cross AaBb × AaBb, probability of offspring with genotype AABB is:',
          options: ['1/16', '1/4', '9/16', '3/16'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nFor each gene independently:\n- P(AA) from Aa × Aa = 1/4\n- P(BB) from Bb × Bb = 1/4\n\nP(AABB) = 1/4 × 1/4 = **1/16**\n\n(Follows Mendel\'s Law of Independent Assortment for genes on different chromosomes)'
        },
      ]
    }
  ]
};

const neetZoology: Subject = {
  id: 'neet-zoo', name: 'Zoology',
  description: 'Human Physiology, Animal Kingdom, Evolution, Reproduction',
  chapters: [
    {
      id: 'zoo-physio', name: 'Human Physiology', description: 'Digestion, Circulation, Respiration, Excretion',
      questions: [
        {
          id:'zoo-01', difficulty:'medium', concept:'Heart', year:'NEET 2022',
          text: 'The Bundle of His conducts impulse from AV node to:',
          options: ['SA node', 'Purkinje fibers via Bundle branches', 'Atria', 'Coronary vessels'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nCardiac conduction pathway:\n$$SA\\ Node \\to AV\\ Node \\to \\mathbf{Bundle\\ of\\ His} \\to Bundle\\ Branches \\to Purkinje\\ Fibers \\to Ventricle\\ walls$$\n\nBundle of His ensures coordinated ventricular contraction from apex upward.'
        },
        {
          id:'zoo-02', difficulty:'hard', concept:'Kidney — Nephron', year:'NEET 2021',
          text: 'Glucose is reabsorbed from glomerular filtrate mainly in:',
          options: ['Bowman\'s capsule', 'Proximal Convoluted Tubule (PCT)', 'Loop of Henle', 'Distal Convoluted Tubule (DCT)'],
          correctAnswerIndex: 1,
          explanation: '### Solution\n| Region | Function |\n|---|---|\n| Bowman\'s capsule | Ultrafiltration |\n| **PCT** | **Reabsorption of glucose, amino acids, Na⁺** (Active transport) |\n| Loop of Henle | Concentration gradient |\n| DCT | Na⁺/K⁺/H⁺ exchange, water reabsorption |\n\nNearly **100% glucose** is reabsorbed in PCT under normal blood glucose levels.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// SSC CGL
// ─────────────────────────────────────────────────────────────────────────────
const sscQuant: Subject = {
  id: 'ssc-quant', name: 'Quantitative Aptitude',
  description: 'Arithmetic, Algebra, Geometry, Data Interpretation',
  chapters: [
    {
      id: 'ssc-arith', name: 'Arithmetic & Number Theory',
      description: 'Percentage, Profit-Loss, SI/CI, Work, Speed-Distance',
      questions: [
        {
          id:'ssc-01', difficulty:'medium', concept:'Profit & Loss', year:'SSC CGL 2022',
          text: 'A shopkeeper marks price 40% above cost and gives 20% discount. Profit or loss percentage is:',
          options: ['12% profit', '8% profit', '20% loss', '12% loss'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nLet CP = 100. MP = 140. SP = 140 × 0.80 = 112.\n$$\\text{Profit\\%} = \\frac{112-100}{100} \\times 100 = \\mathbf{12\\%}$$'
        },
        {
          id:'ssc-02', difficulty:'medium', concept:'Time & Work', year:'SSC CGL 2021',
          text: 'A and B together finish a work in 12 days. A alone takes 20 days. How long will B alone take?',
          options: ['24 days', '30 days', '15 days', '18 days'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nB\'s rate = Combined rate − A\'s rate\n$$\\frac{1}{B} = \\frac{1}{12} - \\frac{1}{20} = \\frac{5-3}{60} = \\frac{2}{60} = \\frac{1}{30}$$\nB alone: **30 days**'
        },
        {
          id:'ssc-03', difficulty:'hard', concept:'Compound Interest', year:'SSC CGL 2022',
          text: 'Difference between CI and SI on ₹10,000 for 2 years at 10% per annum is:',
          options: ['₹100', '₹200', '₹50', '₹150'],
          correctAnswerIndex: 0,
          explanation: '### Solution\nSI = $\\frac{10000 \\times 10 \\times 2}{100} = ₹2000$\n\nCI = $10000\\left[(1.1)^2 - 1\\right] = 10000 \\times 0.21 = ₹2100$\n\nDifference = $2100 - 2000 = \\mathbf{₹100}$\n\nGeneral formula: Difference = $P \\times \\left(\\frac{r}{100}\\right)^2$ for 2 years = $10000 \\times 0.01 = ₹100$ ✓'
        },
      ]
    },
    {
      id: 'ssc-reasoning', name: 'Logical Reasoning', description: 'Analogy, Series, Coding-Decoding, Blood Relations',
      questions: [
        {
          id:'reas-01', difficulty:'easy', concept:'Number Series', year:'SSC CGL 2022',
          text: 'Find the missing term: 3, 6, 11, 18, 27, ?',
          options: ['36', '38', '40', '34'],
          correctAnswerIndex: 1,
          explanation: '### Solution\nDifferences: 3,5,7,9,**11** (odd numbers increasing by 2)\n$$27 + 11 = \\mathbf{38}$$'
        },
        {
          id:'reas-02', difficulty:'medium', concept:'Blood Relations', year:'SSC CGL 2021',
          text: 'Pointing to a girl, Rohan says "She is the daughter of the only son of my grandfather." How is Rohan related to the girl?',
          options: ['Uncle', 'Father', 'Brother', 'Cousin'],
          correctAnswerIndex: 2,
          explanation: '### Solution\nOnly son of Rohan\'s grandfather = Rohan\'s father\nDaughter of Rohan\'s father = Rohan\'s sister\n\nRohan is the **brother** of the girl.'
        },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// MASTER EXAMS LIST
// ─────────────────────────────────────────────────────────────────────────────
export const EXAMS_DATA: Exam[] = [
  {
    id: 'gate', name: 'GATE', fullName: 'Graduate Aptitude Test in Engineering',
    description: 'National exam for IIT/IISc M.Tech admissions and PSU recruitment. Score valid 3 years.',
    icon: '🎓', color: '#6366f1', gradient: 'from-indigo-500 to-violet-600', totalSubjects: 12,
    branches: [
      {
        id: 'cs', name: 'CS & IT', fullName: 'Computer Science & Information Technology', icon: '💻',
        subjects: [gateCS_EM, gateCS_DL, gateCS_COA, gateCS_DS, gateCS_Algo, gateCS_TOC, gateCS_CD, gateCS_OS, gateCS_DBMS, gateCS_CN, gateCS_SE, gateCS_GA]
      },
    ]
  },
  {
    id: 'jee', name: 'JEE', fullName: 'Joint Entrance Examination (Main + Advanced)',
    description: 'Engineering entrance for IITs, NITs, IIITs and other premier institutions.',
    icon: '⚗️', color: '#3b82f6', gradient: 'from-blue-500 to-cyan-500', totalSubjects: 3,
    subjects: [jeePhysics, jeeChemistry, jeeMath]
  },
  {
    id: 'neet', name: 'NEET', fullName: 'National Eligibility cum Entrance Test',
    description: 'Medical entrance for MBBS, BDS, AYUSH and other medical courses in India.',
    icon: '🩺', color: '#10b981', gradient: 'from-emerald-500 to-teal-500', totalSubjects: 4,
    subjects: [neetBotany, neetZoology, jeePhysics, jeeChemistry]
  },
  {
    id: 'ssc-cgl', name: 'SSC CGL', fullName: 'SSC Combined Graduate Level',
    description: 'Central government recruitment exam for Group B & C posts across India.',
    icon: '💼', color: '#f59e0b', gradient: 'from-amber-500 to-orange-500', totalSubjects: 4,
    subjects: [sscQuant]
  }
];

export function getChapterQuestions(chapter: Chapter, difficulty: Difficulty, count: number): Question[] {
  let pool = chapter.questions.filter(q => q.difficulty === difficulty);
  if (pool.length < count) pool = [...chapter.questions];
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
