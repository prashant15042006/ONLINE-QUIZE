import sys
import os

# Force UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/madeEasyDBMSTest8.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find Q14 block boundaries
q14_marker = '  // ─── Q.14 (SCQ) ───'
q15_marker = '\n  // ─── Q.15 (SCQ) ───'

q14_start = content.find(q14_marker)
q14_end = content.find(q15_marker)

old_q14 = content[q14_start:q14_end]

new_q14 = '''  // ─── Q.14 (SCQ) ───
  {
    id: "me-dbms-twt8-q14",
    difficulty: "easy",
    concept: "Relational Algebra vs SQL Aggregations, Distinct & Nulls",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt08_q14.png",
    imageAlt: "Q.14 options - S1 and S2, S1 and S3, S1 S2 and S3, S2 and S3",
    text: `Consider the following statements:
- **$S_1$ :** SQL\\'s aggregation Sum, Avg, Count cannot be expressed in basic relational algebra.
- **$S_2$ :** Select clause with \\`DISTINCT\\` in SQL is the same as projection ($\\\\pi$) in relational algebra.
- **$S_3$ :** In SQL, the arithmetic operators ($+, -, *, \\\\div$) all return NULL if one of their arguments is NULL.

Which of the above statements is/are correct?`,
    options: [
      "$S_1$ and $S_2$ only",
      "$S_1$ and $S_3$ only",
      "$S_1$, $S_2$ and $S_3$",
      "$S_2$ and $S_3$ only"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Let us analyze each statement:

1. **Statement $S_1$:**
   - Classical (basic) relational algebra (Codd\\'s five primitive operators: $\\\\sigma, \\\\pi, \\\\cup, -, \\\\times$) operates on sets and has no arithmetic/counting mechanism to sum or average column values. An extension (Generalized Projection / Aggregate functions $\\\\mathcal{G}$) is required. Thus, they cannot be expressed in basic relational algebra.
   - **Statement $S_1$ is CORRECT ✓**

2. **Statement $S_2$:**
   - In SQL, \\`SELECT column FROM table\\` produces a multiset (bag) with duplicate rows. When \\`DISTINCT\\` is added (\\`SELECT DISTINCT column\\`), duplicates are eliminated, which exactly matches the set-based duplicate-eliminating projection ($\\\\pi$) in relational algebra.
   - **Statement $S_2$ is CORRECT ✓**

3. **Statement $S_3$:**
   - Under standard SQL three-valued logic (3VL), arithmetic operations involving NULL (such as \\`salary + NULL\\`, \\`5 * NULL\\`) evaluate to **NULL**.
   - **Statement $S_3$ is CORRECT ✓**

Therefore, all statements ($S_1, S_2, S_3$) are correct.

**Answer: Option 3 — $S_1$, $S_2$ and $S_3$** ✓`
  }'''

new_content = content[:q14_start] + new_q14 + content[q14_end:]

with open('src/data/madeEasyDBMSTest8.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! Q14 updated successfully.")
print(f"Q14 block length: old={len(old_q14)}, new={len(new_q14)}")
