import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/madeEasyDBMSTest8.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# ── Q.16 ──────────────────────────────────────────────────────
q16_marker = '  // ─── Q.16 (SCQ) ───'
q17_marker = '\n  // ─── Q.17 (SCQ) ───'

q16_start = content.find(q16_marker)
q16_end = content.find(q17_marker)

new_q16 = '''  // ─── Q.16 (SCQ) ───
  {
    id: "me-dbms-twt8-q16",
    difficulty: "medium",
    concept: "Relational Operators Cardinality Bounds Matching",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt08_q16.png",
    imageAlt: "Match expression to max/min tuple count for R union S, R join S, sigma(R) x S, pi(R) - S",
    text: `Consider two relations $R$ and $S$ having $n$ and $m$ tuples respectively. Match the following expression with maximum and minimum number of tuples as result:

| Expression | | Tuples |
|---|---|---|
| **A.** $R \\\\cup S$ | **1.** | $\\\\max = n \\\\times m,\\\\; \\\\min = 0$ |
| **B.** $R \\\\bowtie S$ | **2.** | $\\\\max = n + m,\\\\; \\\\min = \\\\max(m, n)$ |
| **C.** $\\\\sigma_c(R) \\\\times S$ | **3.** | $\\\\max = m + n,\\\\; \\\\min = 0$ |
| **D.** $\\\\pi_A(R) - S$ | **4.** | $\\\\max = n,\\\\; \\\\min = 0$ |

Choices:
- (a) A→1, B→2, C→3, D→4
- (b) A→2, B→1, C→3, D→4
- (c) A→2, B→1, C→1, D→4
- (d) A→3, B→2, C→1, D→4`,
    options: [
      "(a): A→1, B→2, C→3, D→4",
      "(b): A→2, B→1, C→3, D→4",
      "(c): A→2, B→1, C→1, D→4",
      "(d): A→3, B→2, C→1, D→4"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Analyze each expression for $R$ (n tuples) and $S$ (m tuples):

**A. $R \\\\cup S$ (Union):**
- **Max:** All tuples are distinct → $n + m$ tuples
- **Min:** Maximum overlap possible → $\\\\max(m, n)$ tuples (when one is a subset of the other)
- **Match: 2** ($\\\\max = n+m,\\\\; \\\\min = \\\\max(m,n)$)

**B. $R \\\\bowtie S$ (Natural Join):**
- **Max:** Every tuple of R matches every tuple of S → $n \\\\times m$ (when join attribute has all same values)
- **Min:** No tuples match → $0$
- **Match: 1** ($\\\\max = n \\\\times m,\\\\; \\\\min = 0$)

**C. $\\\\sigma_c(R) \\\\times S$ (Selection then Cartesian Product):**
- $\\\\sigma_c(R)$ has at most $n$ tuples (0 to n), and cross-products with $S$ (m tuples).
- **Max:** All n tuples of R satisfy condition → $n \\\\times m$
- **Min:** No tuples of R satisfy condition → $0$
- **Match: 1** ($\\\\max = n \\\\times m,\\\\; \\\\min = 0$)

**D. $\\\\pi_A(R) - S$ (Projection then Difference):**
- $\\\\pi_A(R)$ projects R to attribute A, yielding at most $n$ distinct values.
- Subtracting S removes matching tuples.
- **Max:** None of $\\\\pi_A(R)$ appears in S → at most $n$
- **Min:** All of $\\\\pi_A(R)$ appears in S → $0$
- **Match: 4** ($\\\\max = n,\\\\; \\\\min = 0$)

**Summary:** A→2, B→1, C→1, D→4 → **(c)**

**Answer: Option 3 — (c)** ✓`
  }'''

new_content = content[:q16_start] + new_q16 + content[q16_end:]

with open('src/data/madeEasyDBMSTest8.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! Q16 updated.")
