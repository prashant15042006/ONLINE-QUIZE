import type { Question, Chapter } from "./quizData";

export const MADE_EASY_DBMS_TWT8_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-dbms-twt8-q01",
    difficulty: "medium",
    concept: "Tuple Relational Calculus (TRC) Universal Quantification",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt08_q01.png",
    imageAlt: "Relational schema and TRC query for hotel booking",
    text: `Consider a relational database about hotels, customers (guests) and their booking that is maintained by an online hotel booking company. The database consists of the following tables (where the primary keys are underlined):

- $\\text{Hotel}(\\underline{\\text{hid}}, \\text{hname}, \\text{haddress}, \\text{hcity})$
- $\\text{Guest}(\\underline{\\text{gid}}, \\text{gname}, \\text{gaddress}, \\text{gcity})$
- $\\text{Room}(\\underline{\\text{hid}, \\text{roomNo.}}, \\text{type}, \\text{price})$
- $\\text{Booking}(\\underline{\\text{gid}, \\text{hid}}, \\text{roomNo.}, \\text{fromDate}, \\text{year}, \\text{no. of days})$

The following TRC query represents what?
$$\\{t \\mid \\exists h \\in \\text{Hotel} \\; (t.\\text{hid} = h.\\text{hid} \\wedge t.\\text{hname} = h.\\text{hname} \\wedge \\forall g \\in \\text{Guest} \\; \\exists b \\in \\text{Booking} \\; (h.\\text{hid} = b.\\text{hid} \\wedge g.\\text{gid} = b.\\text{gid} \\wedge b.\\text{year} = 2026))\\}$$`,
    options: [
      "Finds the id’s and names of the hotels for which some of our guest had made a booking during the year 2026.",
      "Finds the id’s and names of the hotels for which everyone of our guest had made a booking during the year 2026.",
      "Finds the name of hotels for which no one of our guest made a booking during the year 2026.",
      "Finds the id’s of hotels for which no one of our guest made a booking during the year 2026."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let us break down the components of the given Tuple Relational Calculus (TRC) expression:

1. **Target Tuple Output:**
   - $\\exists h \\in \\text{Hotel} \\; (t.\\text{hid} = h.\\text{hid} \\wedge t.\\text{hname} = h.\\text{hname})$
   - The output tuple $t$ retrieves the **hotel ID (\`hid\`)** and **hotel name (\`hname\`)** from the \`Hotel\` relation.

2. **Universal Condition:**
   - $\\forall g \\in \\text{Guest} \\; \\exists b \\in \\text{Booking} \\; (h.\\text{hid} = b.\\text{hid} \\wedge g.\\text{gid} = b.\\text{gid} \\wedge b.\\text{year} = 2026)$
   - For **EVERY** guest $g$ in the \`Guest\` relation $(\\forall g)$, there exists a booking record $b$ in the \`Booking\` relation $(\\exists b)$ such that:
     - The booking belongs to this hotel ($h.\\text{hid} = b.\\text{hid}$),
     - The booking is made by this guest ($g.\\text{gid} = b.\\text{gid}$),
     - The booking took place in the year **2026** ($b.\\text{year} = 2026$).

3. **Plain English Meaning:**
   This corresponds to the relational division operation (Division: Hotels $\\div$ Guests in 2026):
   *"Finds the ID's and names of the hotels for which **everyone of our guests** had made a booking during the year 2026."*

Hence, **Option 2** is correct.`
  },

  // ─── Q.2 (MSQ) ───
  {
    id: "me-dbms-twt8-q02",
    difficulty: "medium",
    concept: "Relational Algebra Equivalences & Commutativity",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt08_q02.png",
    imageAlt: "Relational algebra expressions equivalence",
    text: `Assume we have two relations $R(A, B)$ and $S(B, C)$. All three attributes $(A, B, C)$ are integer attributes. Assume that Relation $R$ contains the following tuples:
$$\\{(1, 1), (2, 2), (3, 3)\\}$$
and that relation $S$ contains the following tuples:
$$\\{(1, 5), (2, 6), (4, 7)\\}$$

Note that $\\bowtie$ is Natural Join.
Which of the following relational algebra expressions are equivalent, with respect to the above information?`,
    options: [
      "\\pi_A(\\sigma_{B=2}(R)) \\text{ and } \\sigma_{B=2}(\\pi_A(R))",
      "\\pi_A(\\sigma_{A=2}(R)) \\text{ and } \\sigma_{A=2}(\\pi_A(R))",
      "\\pi_{A, B}(R \\bowtie S) \\text{ and } (\\pi_{A, B}(R)) \\bowtie S",
      "\\sigma_{B=3}(R \\bowtie S) \\text{ and } (\\sigma_{B=3}(R)) \\bowtie S"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 3],
    explanation: `### Solution
Let us evaluate each expression pair with respect to the given relations:
$R(A, B) = \\{(1, 1), (2, 2), (3, 3)\\}$
$S(B, C) = \\{(1, 5), (2, 6), (4, 7)\\}$

1. **Option 1:** $\\pi_A(\\sigma_{B=2}(R))$ and $\\sigma_{B=2}(\\pi_A(R))$
   - $\\sigma_{B=2}(R) = \\{(2, 2)\\} \\implies \\pi_A = \\{(2)\\}$.
   - $\\pi_A(R) = \\{(1), (2), (3)\\}$ (schema is now only attribute $A$).
   - $\\sigma_{B=2}(\\pi_A(R))$ attempts to filter on attribute $B$, which does not exist in the schema of $\\pi_A(R)$! This expression is invalid.
   - **NOT equivalent ✗**

2. **Option 2:** $\\pi_A(\\sigma_{A=2}(R))$ and $\\sigma_{A=2}(\\pi_A(R))$
   - $\\sigma_{A=2}(R) = \\{(2, 2)\\} \\implies \\pi_A = \\{(2)\\}$.
   - $\\pi_A(R) = \\{(1), (2), (3)\\} \\implies \\sigma_{A=2} = \\{(2)\\}$.
   - Since attribute $A$ is preserved in the projection, selection and projection commute: $\\pi_A(\\sigma_A(R)) \\equiv \\sigma_A(\\pi_A(R))$.
   - **EQUIVALENT ✓**

3. **Option 3:** $\\pi_{A, B}(R \\bowtie S)$ and $(\\pi_{A, B}(R)) \\bowtie S$
   - $R \\bowtie S = \\{(1, 1, 5), (2, 2, 6)\\}$ with schema $(A, B, C)$.
   - $\\pi_{A, B}(R \\bowtie S) = \\{(1, 1), (2, 2)\\}$ with schema $(A, B)$ (degree 2).
   - $\\pi_{A, B}(R) = R = \\{(1, 1), (2, 2), (3, 3)\\}$.
   - $(\\pi_{A, B}(R)) \\bowtie S = R \\bowtie S = \\{(1, 1, 5), (2, 2, 6)\\}$ with schema $(A, B, C)$ (degree 3).
   - Because their schemas and attribute counts differ, they are not equivalent.
   - **NOT equivalent ✗**

4. **Option 4:** $\\sigma_{B=3}(R \\bowtie S)$ and $(\\sigma_{B=3}(R)) \\bowtie S$
   - In natural join, selection pushdown on join attribute $B$ is a standard algebraic law:
     $$\\sigma_{B=k}(R \\bowtie S) \\equiv (\\sigma_{B=k}(R)) \\bowtie S$$
   - Evaluating on the data:
     - $R \\bowtie S = \\{(1, 1, 5), (2, 2, 6)\\} \\implies \\sigma_{B=3}(R \\bowtie S) = \\emptyset$.
     - $\\sigma_{B=3}(R) = \\{(3, 3)\\}$. Natural join with $S$ (which has $B \\in \\{1, 2, 4\\}$) yields $\\emptyset$.
     - Both produce the identical empty relation with schema $(A, B, C)$.
   - **EQUIVALENT ✓**

Hence, **Options 2 and 4** are equivalent.`
  },

  // ─── Q.3 (MSQ) ───
  {
    id: "me-dbms-twt8-q03",
    difficulty: "medium",
    concept: "Log-Based Recovery with Checkpoints (Undo and Redo Lists)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt08_q03.png",
    imageAlt: "Log entries with checkpoint and failure",
    text: `Log entries of various transactions are given below, then a failure occurs. Select the correct options regarding redo and undo operations:

\`\`\`text
(i)   T1, W(A), 100
(ii)  T2, R(A), 100
(iii) T2, W(A), 200
(iv)  T2, commit
(v)   T3, W(B), 200
(vi)  Check point
(vii) T4, W(C), 50
(viii) T4, commit
(ix)  T5, W(B), 400
(x)   failure
\`\`\``,
    options: [
      "T_2, T_4 \\text{ redo}",
      "T_4 \\text{ redo}",
      "T_1, T_3, T_5 \\text{ undo}",
      "T_1, T_4, T_5 \\text{ undo}"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
Let us determine the **Redo** and **Undo** lists using standard checkpoint recovery rules:

1. **State of Transactions at Checkpoint (vi):**
   - $T_2$ committed before the checkpoint (at entry iv). Since a checkpoint flushes all dirty buffers of committed transactions to disk, $T_2$ is fully durable on disk and does **not** need to be redone.
   - $T_1$ and $T_3$ were active (uncommitted) at the time of the checkpoint.

2. **State of Transactions after Checkpoint (up to failure x):**
   - $T_4$ started and committed (at entry viii) after the checkpoint.
   - $T_5$ started after the checkpoint and had not committed when failure occurred.

3. **Classification:**
   - **Redo List:** Contains transactions that committed after the checkpoint:
     $$\\text{Redo} = \\{T_4\\}$$
     *(Statement 2: "$T_4$ redo" is CORRECT ✓)*
   - **Undo List:** Contains all transactions that were active at the time of failure (either started before checkpoint and never committed, or started after checkpoint and never committed):
     - $T_1$: active before checkpoint, never committed $\\to$ Undo
     - $T_3$: active before checkpoint, never committed $\\to$ Undo
     - $T_5$: started after checkpoint, never committed $\\to$ Undo
     $$\\text{Undo} = \\{T_1, T_3, T_5\\}$$
     *(Statement 3: "$T_1, T_3, T_5$ undo" is CORRECT ✓)*

Hence, **Statements 2 and 3** are correct.`
  },

  // ─── Q.4 (SCQ) ───
  {
    id: "me-dbms-twt8-q04",
    difficulty: "medium",
    concept: "SQL GROUP BY, HAVING and Correlated/Subquery Semantics",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt08_q04.png",
    imageAlt: "SQL query with Group by and Having clause",
    text: `The employee information in a company is stored in the relation:
$$\\text{Employee (name, sex, salary, deptName)}$$

Consider the following SQL query:
\`\`\`sql
Select deptName
From Employee
Where sex = 'M'
Group by deptName
Having avg(salary) > (select avg(salary) from Employee)
\`\`\`

It returns the names of the department in which:`,
    options: [
      "the average salary is more than the average salary in the company.",
      "the average salary of male employees is more than the average salary of all male employees in the company.",
      "the average salary of male employees is more than the average salary of employees in same the department.",
      "the average salary of male employees is more than the average salary in the company."
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
Let us trace the query execution clause by clause:

1. **\`WHERE sex = 'M'\`:**
   - Filters the table first; only **male employees** pass to the grouping step.

2. **\`GROUP BY deptName\`:**
   - Groups the male employees by their respective department (\`deptName\`).

3. **\`HAVING avg(salary)\`:**
   - Calculates the **average salary of the male employees** within each department group.

4. **\`> (select avg(salary) from Employee)\`:**
   - The subquery \`select avg(salary) from Employee\` calculates the **overall average salary of all employees (both male and female)** in the entire company.

5. **Overall Output:**
   - The query returns those department names where the **average salary of male employees** is strictly greater than the **average salary of all employees in the company**.

Hence, **Option 4** is correct.`
  },

  // ─── Q.5 (MSQ) ───
  {
    id: "me-dbms-twt8-q05",
    difficulty: "medium",
    concept: "Relational Queries for Disjunction (OR Condition)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt08_q05.png",
    imageAlt: "Supplier-Parts-Catalog schema and queries",
    text: `Consider the following relations:
- $\\text{Suppliers}(\\underline{\\text{Sid}}, \\text{Sname}, \\text{Address})$
- $\\text{Parts}(\\underline{\\text{Pid}}, \\text{Pname}, \\text{Color})$
- $\\text{Catalog}(\\underline{\\text{Sid}, \\text{Pid}}, \\text{Cost})$

Which of the following queries retrieve the \`Sid\` of suppliers who supply some red or green part?`,
    options: [
      "{T | \\exists T1 \\in \\text{Catalog} \\; (\\exists X \\in \\text{Parts} \\; ((X.\\text{color} = \\text{'red'} \\wedge X.\\text{color} = \\text{'green'}) \\wedge X.\\text{pid} = T1.\\text{pid}) \\wedge T.\\text{sid} = T1.\\text{sid})}",
      "{T.\\text{sid} | \\exists T1 \\in \\text{Catalog} \\; (\\exists X \\in \\text{Parts} \\; ((X.\\text{color} = \\text{'red'} \\vee X.\\text{color} = \\text{'green'}) \\wedge X.\\text{pid} = T1.\\text{pid}) \\wedge T.\\text{sid} = T1.\\text{sid})}",
      "\\pi_{\\text{sid}}(\\pi_{\\text{pid}}(\\sigma_{\\text{color} = \\text{'red'} \\vee \\text{color} = \\text{'green'}}\\text{Parts}) \\bowtie \\text{Catalog})",
      "\\pi_{\\text{sname}}(\\pi_{\\text{sid}}((\\pi_{\\text{pid}}\\sigma_{\\text{color} = \\text{'red'}}\\text{Parts}) \\bowtie \\text{Catalog}) \\bowtie \\text{Suppliers})"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
We want to find the \`Sid\` of suppliers who supply at least one part whose color is either **'red' OR 'green'**:

1. **Option 1:**
   - Uses $X.\\text{color} = \\text{'red'} \\wedge X.\\text{color} = \\text{'green'}$.
   - A single part cannot simultaneously have color = 'red' AND color = 'green'. The conjunction evaluates to false for every part.
   - **INCORRECT ✗**

2. **Option 2:**
   - In TRC: checks $(X.\\text{color} = \\text{'red'} \\vee X.\\text{color} = \\text{'green'})$ where $X.\\text{pid} = T1.\\text{pid}$ and outputs $T.\\text{sid}$.
   - Correctly expresses the OR condition and returns the supplier IDs.
   - **CORRECT ✓**

3. **Option 3:**
   - In Relational Algebra:
     $$\\pi_{\\text{sid}}\\left(\\pi_{\\text{pid}}\\left(\\sigma_{\\text{color} = \\text{'red'} \\vee \\text{color} = \\text{'green'}}(\\text{Parts})\\right) \\bowtie \\text{Catalog}\\right)$$
   - Filters Parts that are red or green, joins with Catalog on \`Pid\`, and projects \`Sid\`.
   - **CORRECT ✓**

4. **Option 4:**
   - Projects \`Sname\` instead of \`Sid\`, and only checks for color = 'red'.
   - **INCORRECT ✗**

Hence, **Queries 2 and 3** are correct.`
  },

  // ─── Q.6 (MSQ) ───
  {
    id: "me-dbms-twt8-q06",
    difficulty: "medium",
    concept: "Relational Algebra Equivalence of Joins and Projections",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Consider a schema with two relations $R(A, B)$ and $S(B, C)$ where all values are integers. Make no assumption about the keys.

*(Please share the screenshot for Q.6 containing the expressions to update the options!)*

Which of the above are equivalent?`,
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "None of these"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
*(Pending screenshot for Q.6 expressions)*`
  },

  // ─── Q.7 (SCQ) ───
  {
    id: "me-coa-twt8-q07",
    difficulty: "easy",
    concept: "Two-Phase Locking (2PL) and Deadlock",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider a database system where transactions are executed concurrently. If transaction $T_1$ holds an exclusive lock on resource $R_1$ and requests a shared lock on resource $R_2$, while transaction $T_2$ holds a shared lock on resource $R_2$ and requests an exclusive lock on resource $R_1$, what will happen when transactions are executed by using 2PL restriction?`,
    options: [
      "Deadlock",
      "Starvation",
      "Lock contention",
      "Priority inversion"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
Let us trace the resource lock holdings and requests:
- $T_1$ holds an **Exclusive (X) lock** on resource $R_1$, and requests a **Shared (S) lock** on resource $R_2$.
- $T_2$ holds a **Shared (S) lock** on resource $R_2$, and requests an **Exclusive (X) lock** on resource $R_1$.

1. Since $T_2$ holds a lock on $R_2$, $T_1$'s request cannot be granted immediately if $T_2$ holds it in incompatible mode or is converting; specifically, $T_2$ needs an Exclusive lock on $R_1$ which is held by $T_1$.
2. Thus:
   - $T_1$ waits for $T_2$ to release $R_2$ ($T_1 \\to T_2$).
   - $T_2$ waits for $T_1$ to release $R_1$ ($T_2 \\to T_1$).
3. Under the **Two-Phase Locking (2PL)** protocol, a transaction cannot release any locks until it enters its shrinking phase. Since both transactions are in their growing phase attempting to acquire their required locks before releasing any, neither transaction can make progress.
4. This creates a circular wait in the Wait-For Graph ($T_1 \\to T_2 \\to T_1$), resulting in a **Deadlock**.

Hence, the correct option is **Option 1: Deadlock**.`
  },

  // ─── Q.8 (NAT) ───
  {
    id: "me-dbms-twt8-q08",
    difficulty: "medium",
    concept: "SQL Query Output Row Count",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0,
    natTolerance: 0,
    text: `Consider the table \`Tab\`:

*(Please share the screenshot for Q.8 containing table Tab and the SQL query)*

The number of rows in the output of the SQL query is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
*(Pending screenshot for Q.8 table and query)*`
  },

  // ─── Q.9 (MSQ) ───
  {
    id: "me-dbms-twt8-q09",
    difficulty: "medium",
    concept: "Strict 2PL Properties (Serializability, Cascadeless, Recoverability)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements are correct?`,
    options: [
      "Strict two-phase locking (2PL) ensures that transactions never deadlock.",
      "Strict two-phase locking (2PL) ensures conflict serializability",
      "Strict 2PL ensures that schedules are recoverable and cascadeless",
      "Strict 2PL ensures Rigorous schedules"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
Let us inspect each statement regarding **Strict Two-Phase Locking (Strict 2PL)**:

1. **Statement 1:** *"Strict two-phase locking (2PL) ensures that transactions never deadlock."*
   - Strict 2PL requires transactions to hold all exclusive locks until commit/abort, but transactions still acquire locks incrementally in the growing phase. Hence, circular wait can occur $\\implies$ **deadlocks can still happen**. Deadlock prevention/detection mechanisms are required.
   - **INCORRECT ✗**

2. **Statement 2:** *"Strict two-phase locking (2PL) ensures conflict serializability"*
   - Since Strict 2PL is a stricter variant of basic 2PL, all schedules generated under Strict 2PL are guaranteed to be **conflict serializable**.
   - **CORRECT ✓**

3. **Statement 3:** *"Strict 2PL ensures that schedules are recoverable and cascadeless"*
   - In Strict 2PL, no exclusive lock is released until the transaction commits. Therefore, no other transaction can read uncommitted data written by another transaction (dirty read is impossible).
   - This prevents cascading rollbacks, ensuring that schedules are both **cascadeless** and **recoverable**.
   - **CORRECT ✓**

4. **Statement 4:** *"Strict 2PL ensures Rigorous schedules"*
   - In Rigorous 2PL, **both** shared and exclusive locks must be held until commit. Strict 2PL only requires exclusive locks to be held until commit (shared locks may be released earlier). Thus, Strict 2PL does not guarantee rigorous schedules.
   - **INCORRECT ✗**

Hence, **Statements 2 and 3** are correct.`
  },

  // ─── Q.10 (NAT) ───
  {
    id: "me-dbms-twt8-q10",
    difficulty: "medium",
    concept: "SQL Query Evaluation on Student Table",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0,
    natTolerance: 0,
    text: `Consider the table named \`Student\` in a relational database. The primary key of this table is \`RollNum\`.

*(Please share the screenshot for Q.10 containing the Student table and the SQL query)*

The output of the query is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
*(Pending screenshot for Q.10)*`
  },

  // ─── Q.11 (NAT) ───
  {
    id: "me-dbms-twt8-q11",
    difficulty: "medium",
    concept: "Total Concurrent vs Non-Serial Schedules Combinatorics",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 54,
    natTolerance: 0,
    text: `The number of non-serial schedules that can be formed with 3 transactions having 3, 2, and 1 operations respectively is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let the three transactions be $T_1, T_2, T_3$ with operation counts:
$$n_1 = 3, \\quad n_2 = 2, \\quad n_3 = 1$$

1. **Total Number of Concurrent / Interleaved Schedules:**
   Any valid schedule of these three transactions must preserve the individual operation order within each transaction:
   $$\\text{Total Schedules} = \\frac{(n_1 + n_2 + n_3)!}{n_1! \\times n_2! \\times n_3!} = \\frac{(3 + 2 + 1)!}{3! \\times 2! \\times 1!} = \\frac{6!}{6 \\times 2 \\times 1} = \\frac{720}{12} = \\mathbf{60}$$

2. **Number of Serial Schedules:**
   In a serial schedule, transactions execute one after another without any interleaving. With 3 transactions, the number of permutations is:
   $$\\text{Serial Schedules} = 3! = 3 \\times 2 \\times 1 = \\mathbf{6}$$

3. **Number of Non-Serial Schedules:**
   $$\\text{Non-Serial Schedules} = \\text{Total Schedules} - \\text{Serial Schedules} = 60 - 6 = \\mathbf{54}$$

**Answer:** $\\mathbf{54}$`
  },

  // ─── Q.12 (NAT) ───
  {
    id: "me-dbms-twt8-q12",
    difficulty: "hard",
    concept: "Conflict Equivalent Schedules Non-Conflicting Swaps",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0,
    natTolerance: 0,
    text: `Consider the following schedules:

*(Please share the screenshot for Q.12 containing schedules S1 and S2)*

What is the minimum value of number of swaps required so that schedule S2 has conflict serializability in the same order as that of S1?`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
*(Pending screenshot for Q.12 schedules S1 and S2)*`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-dbms-twt8-q13",
    difficulty: "medium",
    concept: "Relational Query Evaluation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `*(Please share the screenshot for Q.13 containing the question statement and options)*`,
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "None of these"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
*(Pending screenshot for Q.13)*`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-dbms-twt8-q14",
    difficulty: "easy",
    concept: "Relational Algebra vs SQL Aggregations, Distinct & Nulls",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider the following statements:
- **$S_1$ :** SQL’s aggregation Sum, Avg, Count cannot be expressed in basic relational algebra.
- **$S_2$ :** Select clause with \`DISTINCT\` in SQL is the same as projection ($\\pi$) in relational algebra.
- **$S_3$ :** In SQL, the arithmetic operators ($+, -, *, /$) all return NULL if one of their arguments is NULL.

Which of the above statements is/are correct?

*(Please share the screenshot for Q.14 options)*`,
    options: [
      "S_1 and S_2 only",
      "S_2 and S_3 only",
      "S_1 and S_3 only",
      "All S_1, S_2 and S_3"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
Let us analyze each statement:

1. **Statement $S_1$:**
   - Classical (basic) relational algebra (Codd's five primitive operators: $\\sigma, \\pi, \\cup, -, \\times$) operates on sets and has no arithmetic/counting mechanism to sum or average column values. An extension (Generalized Projection / Aggregate functions $\\mathcal{G}$) is required. Thus, they cannot be expressed in basic relational algebra.
   - **Statement $S_1$ is CORRECT ✓**

2. **Statement $S_2$:**
   - In SQL, \`SELECT column FROM table\` produces a multiset (bag) with duplicate rows. When \`DISTINCT\` is added (\`SELECT DISTINCT column\`), duplicates are eliminated, which exactly matches the set-based duplicate-eliminating projection ($\\pi$) in relational algebra.
   - **Statement $S_2$ is CORRECT ✓**

3. **Statement $S_3$:**
   - Under standard SQL three-valued logic (3VL), arithmetic operations involving NULL (such as \`salary + NULL\`, \`5 * NULL\`) evaluate to **NULL**.
   - **Statement $S_3$ is CORRECT ✓**

Therefore, all statements ($S_1, S_2, S_3$) are correct.`
  },

  // ─── Q.15 (SCQ) ───
  {
    id: "me-dbms-twt8-q15",
    difficulty: "easy",
    concept: "ACID Properties: Durability",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `A transaction is successfully committed in a database system. Immediately after the commit, the system crashes due to a hardware failure. During recovery, the DBMS ensures that the effects of the committed transaction are preserved.
Which of the following properties of transactions is being ensured?`,
    options: [
      "Isolation",
      "Durability",
      "Atomicity",
      "Integrity"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
The **ACID** properties of transaction management are defined as:

- **Atomicity:** All-or-nothing execution of a transaction.
- **Consistency:** Preservation of database integrity constraints from one valid state to another.
- **Isolation:** Concurrent transactions execute without mutual interference.
- **Durability:** Once a transaction commits, its changes become permanent in the database and survive any subsequent system crashes, power losses, or hardware failures.

Since the DBMS ensures that the effects of the successfully committed transaction are preserved after the crash during recovery (using write-ahead redo logging), it is ensuring **Durability**.

Hence, the correct option is **Option 2: Durability**.`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-dbms-twt8-q16",
    difficulty: "medium",
    concept: "Relational Operators Cardinality Bounds Matching",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider two relations $R$ and $S$ having $n$ and $m$ tuples respectively. Match the following expressions with their maximum and minimum number of tuples:

*(Please share the screenshot for Q.16 containing the match table and options)*`,
    options: [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
*(Pending screenshot for Q.16 match table)*`
  },

  // ─── Q.17 (SCQ) ───
  {
    id: "me-dbms-twt8-q17",
    difficulty: "medium",
    concept: "Cascading Rollback & Recoverability Analysis",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider the following schedule involving transactions $T_1, T_2$ and $T_3$.
Transaction $T_1$ aborts at the end.

**Schedule ($S$):**
$$W_1(X) \\to R_2(X) \\to W_2(Y) \\to R_3(X) \\to \\text{COMMIT}(T_2) \\to \\text{ABORT}(T_1)$$

Which transaction(s) must be rolled back?

*(Please share the screenshot for Q.17 options)*`,
    options: [
      "T_1 and T_3 only",
      "T_1, T_2 and T_3",
      "T_1 only",
      "Schedule is irrecoverable"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
Let us trace the read-from relationships in schedule $S$:
1. $T_1$ writes to $X$: $W_1(X)$.
2. $T_2$ reads $X$ written by $T_1$: $R_2(X)$ (Dirty read from $T_1$).
3. $T_3$ reads $X$ written by $T_1$: $R_3(X)$ (Dirty read from $T_1$).
4. $T_2$ commits: $\\text{COMMIT}(T_2)$.
5. $T_1$ aborts: $\\text{ABORT}(T_1)$.

**Recoverability Analysis:**
- A schedule is **recoverable** if whenever transaction $T_j$ reads data written by $T_i$, $T_i$ commits BEFORE $T_j$ commits.
- Here, $T_2$ reads uncommitted data from $T_1$, but **$T_2$ commits BEFORE $T_1$ commits/aborts!**
- When $T_1$ subsequently aborts, $T_2$ cannot be rolled back because a committed transaction's durability cannot be violated.
- Therefore, the schedule is **IRRECOVERABLE**!
- If the question asks under cascading rollback (ignoring the premature commit), both $T_2$ and $T_3$ read dirty data from $T_1$. But because $T_2$ already committed, standard DBMS recovery considers this schedule irrecoverable.

*(Please share the screenshot for Q.17 options to confirm the exact matching choice!)*`
  }
];

export const MADE_EASY_DBMS_TWT8_CHAPTER: Chapter = {
  id: "dbms-gate-2027-twt-8",
  name: "GATE 2027 CS TOPIC WISE TEST - 8 (DBMS)",
  description: "Tuple Relational Calculus, Relational Algebra, SQL Queries, 2PL, Recovery & Concurrency",
  questions: MADE_EASY_DBMS_TWT8_QUESTIONS,
};
