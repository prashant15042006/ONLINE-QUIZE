import type { Question, Chapter } from "./quizData";

export const MADE_EASY_DBMS_TWT7_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-dbms-twt7-q01",
    difficulty: "easy",
    concept: "ER Diagram to Relational Model (Many-to-Many Relationship)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt07_q01.png",
    imageAlt: "ER diagram showing Student M:N Enrollment N:M Course",
    text: `Consider the following ER diagram:
- Entity \`Student\` with attributes \`roll_no\` (Primary Key), \`name\`, \`DOB\`, \`ph_no\`.
- Entity \`Course\` with attributes \`cid\` (Primary Key), \`Cards\`.
- Relationship \`Enrollment\` with descriptive attribute \`Enrollment_year\`.

The mapping cardinality of \`Enrollment\` is **Many-to-Many (M : N)**. While converting the ER diagram into a relational DBMS model, the relationship set is converted into a relation \`Enrollment(roll_no, cid, enrollment_year)\`.

Which of the following is the primary key of the \`Enrollment\` relation?`,
    options: [
      "cid",
      "(roll_no, cid, enrollment_year)",
      "roll_no",
      "(roll_no, cid)"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
In an ER diagram:
- For a **Many-to-Many ($M:N$)** relationship set between two entity sets $E_1$ and $E_2$:
- The resulting relation contains the primary keys of both participating entity sets plus any descriptive attributes of the relationship set.
- The **Primary Key** of this relationship relation is formed by the combination of the primary keys of both participating entity sets:
$$\\text{Primary Key} = (\\text{roll\\_no}, \\text{cid})$$

The descriptive attribute \`enrollment_year\` is a non-key attribute in the relation.

**Correct Answer: Option 4 ((roll no, cid))**`
  },

  // ─── Q.2 (MCQ) ───
  {
    id: "me-dbms-twt7-q02",
    difficulty: "easy",
    concept: "Armstrong's Axioms for Functional Dependencies",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following functional dependencies in a relational database is/are correct?`,
    options: [
      "(A → B) implies (AC → B)",
      "(A → B and B → C) implies (A → C)",
      "(AB → C) implies (ADB → C)",
      "(AB → C) implies (A → C)"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
Using Armstrong's Axioms:
- **Statement 1:** $A \\rightarrow B \\implies AC \\rightarrow BC$ (Augmentation rule). Since $BC \\rightarrow B$ (Reflexivity), by transitivity $AC \\rightarrow B$. (Correct)
- **Statement 2:** Transitivity rule directly states that $A \\rightarrow B$ and $B \\rightarrow C \\implies A \\rightarrow C$. (Correct)
- **Statement 3:** $AB \\rightarrow C \\implies ABD \\rightarrow CD \\implies ABD \\rightarrow C$ (Augmentation on LHS). (Correct)
- **Statement 4:** $AB \\rightarrow C$ does NOT imply $A \\rightarrow C$ (decomposition applies to the RHS, not the LHS). (Incorrect)

**Correct Statements: 1, 2, and 3**`
  },

  // ─── Q.3 (NAT) ───
  {
    id: "me-dbms-twt7-q03",
    difficulty: "medium",
    concept: "B-Tree Insertion & Node Structure Matching",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 4,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt07_q03.png",
    imageAlt: "B-Tree with root [10, 50] and leaves [2,3,5,7], [17,22,44,45], [55,66,68,70]",
    text: `Consider a B-tree where each node has at least 2 and at most 4 keys.
Initial Tree:
- Root: \`[10 | 50]\`
- Left child: \`[2 | 3 | 5 | 7]\`
- Middle child: \`[17 | 22 | 44 | 45]\`
- Right child: \`[55 | 66 | 68 | 70]\`

Keys **6** and **21** are inserted into this tree in that order. The number of nodes (disregarding the links) present with exactly the same structure given below in the tree after the two insertions is ________.
1. \`[5 | 10 | 22 | 50]\`
2. \`[2 | 3]\`
3. \`[55 | 66 | 68 | 70]\`
4. \`[17 | 21]\``,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Step 1: Insert key 6:**
- Belongs to left leaf \`[2, 3, 5, 7]\`.
- Keys become \`[2, 3, 5, 6, 7]\` (overflow: 5 keys > 4).
- Middle key **5** moves up to the root:
  - Left node: \`[2 | 3]\`
  - Right node: \`[6 | 7]\`
  - Root becomes \`[5 | 10 | 50]\` (3 keys $\\le 4$).

**Step 2: Insert key 21:**
- Belongs to middle child \`[17, 22, 44, 45]\` (since $10 < 21 < 50$).
- Keys become \`[17, 21, 22, 44, 45]\` (overflow: 5 keys > 4).
- Middle key **22** moves up to the root:
  - Left node: \`[17 | 21]\`
  - Right node: \`[44 | 45]\`
  - Root becomes \`[5 | 10 | 22 | 50]\` (4 keys $\\le 4$).

**Comparing with the 4 candidate node templates:**
1. \`[5 | 10 | 22 | 50]\` $\\rightarrow$ Present as the root node!
2. \`[2 | 3]\` $\\rightarrow$ Present as the first leaf node!
3. \`[55 | 66 | 68 | 70]\` $\\rightarrow$ Present as the last leaf node!
4. \`[17 | 21]\` $\\rightarrow$ Present as the middle-left leaf node!

All **4** node structures are present in the final tree.

**Correct Answer: 4**`
  },

  // ─── Q.4 (MCQ) ───
  {
    id: "me-dbms-twt7-q04",
    difficulty: "medium",
    concept: "Database Normalization Properties",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements are correct?`,
    options: [
      "Any relation with two attributes is in 4NF.",
      "A lossless-join and dependency-preserving decomposition into 3NF is always possible.",
      "A prime attribute of a relation R is an attribute that appears in all candidate keys of R.",
      "None of the above"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    explanation: `### Solution
- **Statement 1 is correct:** Any binary relation $R(A, B)$ has only two attributes. It is always in BCNF, and since a non-trivial multivalued dependency requires at least 3 attributes ($X \\twoheadrightarrow Y$ with $Z = R - XY \\ne \\emptyset$), it is also unconditionally in **4NF**.
- **Statement 2 is correct:** Using Bernstein's 3NF synthesis algorithm, a decomposition that is both **lossless-join** and **dependency-preserving** into 3NF is always guaranteed.
- **Statement 3 is incorrect:** A prime attribute is defined as an attribute that belongs to **at least one** candidate key of $R$, not necessarily all candidate keys.

**Correct Statements: 1 and 2**`
  },

  // ─── Q.5 (SCQ) ───
  {
    id: "me-dbms-twt7-q05",
    difficulty: "medium",
    concept: "Referential Integrity & ON DELETE CASCADE",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt07_q05.png",
    imageAlt: "Employee table with Employee_id and Manager_id referencing Employee_id with ON DELETE CASCADE",
    text: `The following table has two attributes \`Employee_id\` and \`Manager_id\`, where \`Employee_id\` is a primary key and \`Manager_id\` is a foreign key referencing \`Employee_id\` with **ON DELETE CASCADE**:

| Employee_id | Manager_id |
|:---:|:---:|
| 20 | 40 |
| 25 | 40 |
| 30 | 35 |
| 35 | 20 |
| 40 | 45 |
| 45 | 25 |
| 50 | 20 |

On deleting the tuple \`(20, 40)\`, the set of other tuples that must be deleted to maintain the referential integrity of the table is:`,
    options: [
      "(30, 35), (50, 20) and (35, 20) only",
      "(30, 35) and (35, 20) only",
      "(40, 45) and (25, 40) only",
      "(40, 45), (25, 40) and (50, 20) only"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Delete tuple \`(20, 40)\`:**
   - Deleted key: \`Employee_id = 20\`.
   - Any tuple referencing \`Manager_id = 20\` must be cascade-deleted:
     - \`(35, 20)\` is deleted.
     - \`(50, 20)\` is deleted.

2. **Cascade from \`(35, 20)\` deletion:**
   - Deleted key: \`Employee_id = 35\`.
   - Any tuple referencing \`Manager_id = 35\` must be cascade-deleted:
     - \`(30, 35)\` is deleted.

3. **Cascade from \`(50, 20)\` and \`(30, 35)\` deletions:**
   - Neither 50 nor 30 is referenced by any remaining tuple as \`Manager_id\`.

Thus, the additional tuples deleted are **\`(30, 35)\`, \`(50, 20)\`, and \`(35, 20)\` only**.

**Correct Answer: Option 1**`
  },

  // ─── Q.6 (NAT) ───
  {
    id: "me-dbms-twt7-q06",
    difficulty: "medium",
    concept: "Single-Level Indexing (Dense vs Sparse Index Blocks)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 141,
    natTolerance: 0,
    text: `Amy and Bob are working on a project for a vehicle rental system. They have a file consisting of 10,000 records, with block size 1024 bytes and record size 100 bytes. The search key size is 9 bytes, and the block pointer size is 7 bytes.

Bob suggested implementing a 1st level dense index, while Amy suggested implementing a 1st level sparse index. How many blocks are saved by Amy's approach considering only the 1st level index? ________`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**1. Data File Parameters:**
- Number of records $n = 10000$.
- Record size $R = 100\\text{ bytes}$, Block size $B = 1024\\text{ bytes}$.
- Blocking factor of data file:
  $$B_{fr} = \\left\\lfloor \\frac{1024}{100} \\right\\rfloor = 10\\text{ records/block}$$
- Number of data blocks $b$:
  $$b = \\left\\lceil \\frac{10000}{10} \\right\\rceil = 1000\\text{ blocks}$$

**2. Index File Parameters:**
- Index entry size $= 9 + 7 = 16\\text{ bytes}$.
- Index blocking factor:
  $$B_{fri} = \\left\\lfloor \\frac{1024}{16} \\right\\rfloor = 64\\text{ entries/block}$$

**3. Bob's Dense Index:**
- Has an entry for each record in the data file: $10000$ entries.
$$b_{\\text{dense}} = \\left\\lceil \\frac{10000}{64} \\right\\rceil = \\lceil 156.25 \\rceil = 157\\text{ blocks}$$

**4. Amy's Sparse Index:**
- Has an entry for each block of the data file: $1000$ entries.
$$b_{\\text{sparse}} = \\left\\lceil \\frac{1000}{64} \\right\\rceil = \\lceil 15.625 \\rceil = 16\\text{ blocks}$$

**5. Blocks Saved by Amy:**
$$\\text{Blocks Saved} = 157 - 16 = 141\\text{ blocks}$$

**Correct Answer: 141**`
  },

  // ─── Q.7 (SCQ) ───
  {
    id: "me-dbms-twt7-q07",
    difficulty: "medium",
    concept: "ERD to Relational Tables Reduction in BCNF",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt07_q07.png",
    imageAlt: "ERD with entities E1(A,B), E2(C,D) and relationships R1, R2, R3, R4",
    text: `Find the minimum number of tables required for the given ERD to satisfy BCNF:
- Entity $E_1$ with attributes $\\underline{A}, B$
- Entity $E_2$ with attributes $\\underline{C}, D$
- Relationship $R_1$ between $E_1$ and $E_2$ (1 on $E_1$ side, $M$ on $E_2$ side with total participation of $E_2$)
- Recursive relationship $R_2$ on $E_1$ ($1:M$)
- Recursive relationships $R_3$ ($M:N$) and $R_4$ ($M:N$) on $E_2$`,
    options: [
      "2 tables",
      "3 tables",
      "4 tables",
      "5 tables"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Converting the ER diagram to relational tables:
1. **$E_2$ combined with $R_1$:** Since $R_1$ is $1:M$ and $E_2$ has total participation in $R_1$, $R_1$ is merged into the $E_2$ table by including primary key $A$ of $E_1$ as a foreign key:
   $$\\text{Table 1: } E_2(\\underline{C}, D, A)$$
2. **$E_1$ combined with recursive relationship $R_2$:** $R_2$ is $1:M$ on $E_1$. It can be represented in $E_1$ with a foreign key referencing $A$:
   $$\\text{Table 2: } E_1(\\underline{A}, B, A')$$
3. **$R_3$ ($M:N$ on $E_2$):** Many-to-many relationships must have their own separate table:
   $$\\text{Table 3: } R_3(\\underline{C_1, C_2})$$
4. **$R_4$ ($M:N$ on $E_2$):** Many-to-many relationships must have their own separate table:
   $$\\text{Table 4: } R_4(\\underline{C_1, C_2})$$

Thus, a minimum of **4 tables** is required.

**Correct Answer: Option 3 (4 tables)**`
  },

  // ─── Q.8 (SCQ) ───
  {
    id: "me-dbms-twt7-q08",
    difficulty: "easy",
    concept: "B-Tree vs B+ Tree Characteristics",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider the following statements:
- **S₁:** B+ tree indexes are more efficient for range queries than B-tree indexes.
- **S₂:** In a B+ tree, the non-leaf nodes store only search keys and child pointers, whereas in a B-tree, non-leaf nodes must also store pointers to the actual data records.

Which of the above statements are correct?`,
    options: [
      "S₁ only",
      "S₂ only",
      "Both S₁ and S₂",
      "Neither S₁ nor S₂"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- **Statement S₁ is correct:** In a B+ tree, all data records/pointers are stored in the leaf nodes, which are linked together in sorted order as a doubly linked list. Hence, range queries only require traversing to the first leaf and scanning linearly along leaf links, avoiding full tree traversals.
- **Statement S₂ is correct:** Non-leaf nodes in a B+ tree serve solely as an index/routing mechanism without storing record pointers, allowing a higher fan-out (order) and a shallower tree depth compared to B-trees.

Both $S_1$ and $S_2$ are correct.

**Correct Answer: Option 3 (Both S₁ and S₂)**`
  },

  // ─── Q.9 (MCQ) ───
  {
    id: "me-dbms-twt7-q09",
    difficulty: "medium",
    concept: "Database Indexing Principles",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements is/are correct?`,
    options: [
      "An unclustered tree index is I/O efficient for searching a key attribute.",
      "A hash index can be implemented as a sparse index to save space.",
      "A dense index contains an index record for every search key value in the file.",
      "A sparse index must contain an entry for every record in the data file."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
- **Statement 1 is correct:** Searching for an equality match on a candidate key requires traversing at most $\\log_B N$ levels, which typically takes only 3–4 I/O disk accesses.
- **Statement 2 is incorrect:** A hash index requires computing the bucket location directly from the key value; it cannot navigate sparse blocks since records are not stored in sorted key order.
- **Statement 3 is correct:** By standard definition, a dense index has an index entry for every distinct search key value in the data file.
- **Statement 4 is incorrect:** A sparse index contains entries for only some records (typically one entry per data block), not every record.

**Correct Statements: 1 and 3**`
  },

  // ─── Q.10 (MCQ) ───
  {
    id: "me-dbms-twt7-q10",
    difficulty: "medium",
    concept: "Candidate Keys & Prime Attributes",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Given a relation $R(A, B, C, D, E)$ with functional dependencies:
$$F = \\{AB \\rightarrow C,\\ CD \\rightarrow E,\\ C \\rightarrow A,\\ C \\rightarrow D,\\ D \\rightarrow B\\}$$

Which of the following statements are correct?`,
    options: [
      "Both {AD} and {AB} are candidate keys.",
      "Total number of candidate keys are 3.",
      "Both {BD} and {BC} are candidate keys.",
      "The set of prime attributes is {A, B, C, D}."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    explanation: `### Solution
Notice that $E$ never appears on the LHS of any dependency. Hence, $E$ cannot be part of any minimal candidate key.

Let's compute attribute closures:
1. $C^+ = \\{C, A, D, B, E\\} = ABCDE$. Since $C$ alone derives all attributes, **{C} is a candidate key**.
2. $(AB)^+ = \\{A, B, C, D, E\\} = ABCDE$. Since neither $A^+$ nor $B^+$ is a superkey, **{AB} is a candidate key**.
3. $(AD)^+ = \\{A, D, B, C, E\\} = ABCDE$. Since neither $A^+$ nor $D^+$ is a superkey, **{AD} is a candidate key**.
4. Check others:
   - $(BD)^+ = \\{B, D\\}$ (not a superkey).
   - $BC$: $C \\subset BC$, so $BC$ is a superkey but NOT a candidate key.

**Candidate keys of R:** $\\{C\\}, \\{AB\\}, \\{AD\\}$.
- Total candidate keys = **3**.
- Prime attributes (attributes appearing in any candidate key): $\\{A, B, C, D\\}$.

**Correct Statements: 1, 2, and 4**`
  },

  // ─── Q.11 (SCQ) ───
  {
    id: "me-dbms-twt7-q11",
    difficulty: "medium",
    concept: "Relational Decomposition Properties",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Let $R(A, B, C, D, E)$ be a relation schema with functional dependencies:
$$F = \\{A \\rightarrow BC,\\ CD \\rightarrow E,\\ B \\rightarrow D,\\ E \\rightarrow A\\}$$

Which of the following is true for the decomposition of $R$ into $R_1(A, B, C)$ and $R_2(C, D, E)$?`,
    options: [
      "Neither lossless join nor dependency preserving.",
      "Lossless join but not dependency preserving.",
      "Not lossless join but dependency preserving.",
      "Lossless join and dependency preserving."
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
**1. Lossless Join Test:**
Intersection of $R_1$ and $R_2$:
$$R_1 \\cap R_2 = \\{C\\}$$
Computing $C^+$ with respect to $F$:
$$C^+ = \\{C\\}$$
Since $C^+$ contains neither $R_1(A, B, C)$ nor $R_2(C, D, E)$, $C$ is not a superkey for either sub-relation.
$\\implies$ The decomposition is **NOT lossless join** (it is lossy).

**2. Dependency Preservation Test:**
- $A \\rightarrow BC$: fully contained in $R_1$. (Preserved)
- $CD \\rightarrow E$: fully contained in $R_2$. (Preserved)
- $B \\rightarrow D$: $B \\in R_1$, $D \\in R_2$. Computing $B^+$ under projected FDs $(F_1 \\cup F_2)^+$ yields only $\\{B\\}$. $D$ cannot be derived without full join.
$\\implies$ $B \\rightarrow D$ is **NOT preserved**.

Therefore, the decomposition is **Neither lossless join nor dependency preserving**.

**Correct Answer: Option 1**`
  },

  // ─── Q.12 (SCQ) ───
  {
    id: "me-dbms-twt7-q12",
    difficulty: "medium",
    concept: "Minimal Cover (Canonical Cover)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Identify the minimal cover for the following FD set:
$$\\{A \\rightarrow BC,\\ C \\rightarrow A,\\ BC \\rightarrow D,\\ ACD \\rightarrow B,\\ BE \\rightarrow C,\\ EC \\rightarrow FA,\\ CF \\rightarrow BD,\\ D \\rightarrow E\\}$$`,
    options: [
      "{A → BC, C → ADF, D → E, BE → C}",
      "{A → C, C → ADF, D → E, BE → C}",
      "{A → BC, C → ADEF, D → E, BE → C}",
      "{A → BC, C → ADF, E → D, BE → C}"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
Applying minimal cover reduction steps:
1. **Right-Hand Side Splitting & Left-Hand Side Reduction:**
   - Since $C \\rightarrow A$ and $C \\rightarrow D$ (via $C \\rightarrow F, CF \\rightarrow D$), in $BC \\rightarrow D$, attribute $B$ is extraneous $\\implies C \\rightarrow D$.
   - In $ACD \\rightarrow B$, since $C \\rightarrow A$ and $C \\rightarrow D$, both $A$ and $D$ are extraneous $\\implies C \\rightarrow B$.
   - Combined, $C$ determines $A, B, D, F$. Since $C \\rightarrow B$ is implied by $C \\rightarrow A \\rightarrow BC$, $C \\rightarrow ADF$ remains.
2. The minimal non-redundant set consists of:
$$\\{A \\rightarrow BC,\\ C \\rightarrow ADF,\\ D \\rightarrow E,\\ BE \\rightarrow C\\}$$

**Correct Answer: Option 1**`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-dbms-twt7-q13",
    difficulty: "medium",
    concept: "Equivalence of Functional Dependency Sets",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider relation schema $R(A, B, C, D)$ and the two sets of functional dependencies:
$$S_1 : \\{A \\rightarrow B,\\ AB \\rightarrow C,\\ AC \\rightarrow D,\\ B \\rightarrow C,\\ B \\rightarrow A\\}$$
$$S_2 : \\{AB \\rightarrow D,\\ AC \\rightarrow B,\\ B \\rightarrow D,\\ BD \\rightarrow C\\}$$

Which of the following is true?`,
    options: [
      "S₁ covers S₂ but S₂ does not cover S₁",
      "S₂ covers S₁ but S₁ does not cover S₂",
      "S₁ and S₂ are equivalent",
      "None of these"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
**1. Check if $S_1$ covers $S_2$:**
In $S_1$, $A \\rightarrow B$ and $B \\rightarrow A \\implies A \\equiv B$. Also $B \\rightarrow C$ and $AC \\rightarrow D$.
Thus in $S_1$:
- $A^+ = \\{A, B, C, D\\}$
- $B^+ = \\{A, B, C, D\\}$
Every FD in $S_2$ has LHS $AB, AC, B,$ or $BD$. Their closures under $S_1$ all equal $ABCD$.
$\\implies S_1$ covers all FDs in $S_2$ ($S_2 \\subseteq S_1^+$).

**2. Check if $S_2$ covers $S_1$:**
Under $S_2$, compute $A^+$:
- In $S_2$, no FD has LHS as only $A$.
- Therefore, $A^+ = \\{A\\}$.
- $S_2$ cannot derive $A \\rightarrow B$.
$\\implies S_2$ does NOT cover $S_1$.

Thus, **$S_1$ covers $S_2$ but $S_2$ does not cover $S_1$**.

**Correct Answer: Option 1**`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-dbms-twt7-q14",
    difficulty: "easy",
    concept: "Normal Forms Definitions Matching",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt07_q14.png",
    imageAlt: "Match List-I with List-II: 2NF, 3NF, 4NF, 5NF",
    text: `Match **List-I** with **List-II** and select the correct answer using the codes given below the lists:

| List-I | List-II |
|:---|:---|
| A. 2NF | 1. Transitive dependencies eliminated |
| B. 3NF | 2. Redundancy due to MVD eliminated |
| C. 4NF | 3. Contains no partial functional dependencies |
| D. 5NF | 4. Contains no join dependency |`,
    options: [
      "(a) A-3, B-1, C-2, D-4",
      "(b) A-4, B-3, C-1, D-2",
      "(c) A-4, B-3, C-2, D-1",
      "(d) A-1, B-2, C-3, D-4"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- **A. 2NF:** Eliminates partial functional dependencies $\\rightarrow$ **3**.
- **B. 3NF:** Eliminates transitive functional dependencies $\\rightarrow$ **1**.
- **C. 4NF:** Eliminates multi-valued dependencies (MVD) $\\rightarrow$ **2**.
- **D. 5NF (PJNF):** Eliminates non-trivial join dependencies $\\rightarrow$ **4**.

Matching code: **A-3, B-1, C-2, D-4** $\\rightarrow$ **(a)**.

**Correct Answer: Option 1 ((a))**`
  },

  // ─── Q.15 (SCQ) ───
  {
    id: "me-dbms-twt7-q15",
    difficulty: "easy",
    concept: "3NF and 2NF Definition Hierarchy",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `In a relation $R$, an attribute $B$ of $R$ is said to be fully functionally dependent on $A$ if $B$ is functionally dependent on $A$ but not functionally dependent on any proper subset of $A$.

Consider a relation $S$ in which for every functional dependency $X \\rightarrow Y$, either $X$ is a superkey or every attribute of $Y$ is a prime attribute. What is necessarily true for $S$?`,
    options: [
      "Relation S is not in 2NF.",
      "Relation S is not in 3NF.",
      "Relation S is in 2NF and 3NF.",
      "Relation S is neither in 2NF nor in 3NF."
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- By definition, a relation $S$ is in **Third Normal Form (3NF)** if for every non-trivial functional dependency $X \\rightarrow Y$:
  1. $X$ is a superkey, OR
  2. Every attribute in $Y$ is a prime attribute.
- Since this condition holds for all dependencies in $S$, $S$ is strictly in **3NF**.
- Furthermore, every relation in 3NF is also guaranteed to satisfy **2NF**.

Therefore, relation $S$ is in **both 2NF and 3NF**.

**Correct Answer: Option 3**`
  },

  // ─── Q.16 (NAT) ───
  {
    id: "me-dbms-twt7-q16",
    difficulty: "medium",
    concept: "Count of Superkeys",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 16,
    natTolerance: 0,
    text: `Consider a relation schema $X$ with attributes $(P, Q, R, S, T, U)$ and functional dependency set that holds on $X$:
$$F = \\{U \\rightarrow PT,\\ P \\rightarrow Q,\\ Q \\rightarrow PST,\\ PS \\rightarrow Q,\\ QST \\rightarrow PS\\}$$

How many superkeys are there for relation $X$? ________`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**1. Essential Attributes:**
- Notice that attributes **$R$** and **$U$** never appear on the right-hand side of any dependency in $F$.
- Therefore, $R$ and $U$ cannot be determined by any other attributes and **MUST be present in every candidate key**.

**2. Closure of $\\{U, R\\}$:**
$$(UR)^+ = \\{U, R\\}$$
- Using $U \\rightarrow PT \\implies \\{U, R, P, T\\}$
- Using $P \\rightarrow Q \\implies \\{U, R, P, T, Q\\}$
- Using $Q \\rightarrow PST \\implies \\{U, R, P, T, Q, S\\}$
- All 6 attributes $\\{P, Q, R, S, T, U\\}$ are determined!

Hence, **$\\{U, R\\}$ is the unique candidate key**.

**3. Number of Superkeys:**
Every superkey must contain the candidate key $\\{U, R\\}$.
The remaining $6 - 2 = 4$ attributes $\\{P, Q, S, T\\}$ can be included or excluded in any combination:
$$\\text{Number of superkeys} = 2^4 = 16$$

**Correct Answer: 16**`
  },

  // ─── Q.17 (SCQ) ───
  {
    id: "me-dbms-twt7-q17",
    difficulty: "medium",
    concept: "Foreign Key Constraints & Referential Integrity",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt07_q17.png",
    imageAlt: "Which of the above statements are correct? Both S1 and S2 are true",
    text: `Consider the following statements about the relational data model:
- **S₁:** A foreign key attribute can take NULL values even when it participates in a composite foreign key.
- **S₂:** If a foreign key in a relation $R$ references a candidate key of another relation, then every non-NULL value of the foreign key must match some tuple in the referenced relation.

Which of the above statements are correct?`,
    options: [
      "Both S₁ and S₂ are false",
      "S₁ is true and S₂ is false",
      "S₁ is false and S₂ is true",
      "Both S₁ and S₂ are true"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
- **Statement S₁ is correct:** In SQL and the relational model, foreign key attributes are permitted to be NULL (unless explicitly restricted by a \`NOT NULL\` constraint), even in composite foreign keys where one or more constituent attributes may be NULL.
- **Statement S₂ is correct:** The Referential Integrity Constraint requires that for any non-NULL value in a foreign key, an identical matching value must exist in the referenced candidate/primary key of the referenced relation.

Both $S_1$ and $S_2$ are true.

**Correct Answer: Option 4 (Both S₁ and S₂ are true)**`
  }
];

export const MADE_EASY_DBMS_TWT7_CHAPTER: Chapter = {
  id: "dbms-gate-2027-twt-7",
  name: "GATE 2027 CS TOPIC WISE TEST - 7 (DBMS)",
  description: "Made Easy GATE 2027 Test 7: ER Model, Normalization (2NF/3NF/BCNF/4NF/5NF), Functional Dependencies, B/B+ Trees, Indexing",
  questions: MADE_EASY_DBMS_TWT7_QUESTIONS
};
