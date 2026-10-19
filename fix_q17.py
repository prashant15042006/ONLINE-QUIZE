import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/madeEasyDBMSTest8.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# ── Q.17 ──────────────────────────────────────────────────────
q17_marker = '  // ─── Q.17 (SCQ) ───'
end_marker = '\n];\n\nexport const MADE_EASY_DBMS_TWT8_CHAPTER'

q17_start = content.find(q17_marker)
q17_end = content.find(end_marker)

new_q17 = '''  // ─── Q.17 (SCQ) ───
  {
    id: "me-dbms-twt8-q17",
    difficulty: "medium",
    concept: "Cascading Rollback & Recoverability Analysis",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt08_q17.png",
    imageAlt: "Schedule S with W1(X) -> R2(X) -> W2(Y) -> R3(X) -> COMMIT(T2) -> ABORT(T1)",
    text: `Consider the following schedule involving transactions $T_1, T_2$ and $T_3$.
Transaction $T_1$ aborts at the end.

**Schedule ($S$):**
$$W_1(X) \\\\to R_2(X) \\\\to W_2(Y) \\\\to R_3(X) \\\\to \\\\text{COMMIT}(T_2) \\\\to \\\\text{ABORT}(T_1)$$

Which transaction(s) must be rolled back?`,
    options: [
      "Only $T_2$",
      "Only $T_3$",
      "Both $T_2$ and $T_3$",
      "Neither $T_2$ nor $T_3$"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let us trace the read-from relationships in schedule $S$:

| Step | Operation | Notes |
|------|-----------|-------|
| 1 | $W_1(X)$ | $T_1$ writes $X$ |
| 2 | $R_2(X)$ | $T_2$ reads $X$ written by $T_1$ — **dirty read** |
| 3 | $W_2(Y)$ | $T_2$ writes $Y$ |
| 4 | $R_3(X)$ | $T_3$ reads $X$ written by $T_1$ — **dirty read** |
| 5 | $\\\\text{COMMIT}(T_2)$ | $T_2$ commits |
| 6 | $\\\\text{ABORT}(T_1)$ | $T_1$ aborts |

**Analysis:**

1. **$T_2$'s situation:**
   - $T_2$ read dirty data from $T_1$ ($R_2(X)$ before $T_1$ commits).
   - However, $T_2$ already **committed** (step 5) before $T_1$ aborted (step 6).
   - A committed transaction **cannot be rolled back** — doing so would violate **Durability**.
   - $T_2$ cannot be rolled back. (Note: this schedule is technically **irrecoverable** because $T_2$ committed before $T_1$.)

2. **$T_3$'s situation:**
   - $T_3$ read dirty data from $T_1$ ($R_3(X)$ at step 4).
   - $T_3$ has **not yet committed** (no COMMIT($T_3$) in the schedule).
   - When $T_1$ aborts, $T_3$ read invalid data → $T_3$ must be **rolled back**.

**Answer: Only $T_3$ must be rolled back → Option 2** ✓

> [!NOTE] This schedule is **irrecoverable** because $T_2$ (which read dirty data from $T_1$) committed before $T_1$ aborted. In a properly designed DBMS with strict 2PL or recoverable schedules, this situation would not arise.`
  }'''

new_content = content[:q17_start] + new_q17 + content[q17_end:]

with open('src/data/madeEasyDBMSTest8.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! Q17 updated.")
