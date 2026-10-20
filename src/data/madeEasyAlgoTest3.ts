import type { Question, Chapter } from "./quizData";

export const MADE_EASY_ALGO_TWT3_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-algo-twt3-q01",
    difficulty: "medium",
    concept: "Median Selection & Time Complexity",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q01.png",
    imageAlt: "Options for Q.1 time complexity",
    text: `Let $S$ be a collection of $n \\log n$ disjoint, unsorted arrays, each array $A_i$ contains $n^2$ distinct elements.
We define a two-step selection process:

1. Compute the median $m_i$ for each of the $n \\log n$ arrays using a linear-time selection algorithm.
2. Let $M$ be the set of all such medians $\\{m_1, m_2, \\dots, m_{n \\log n}\\}$. Compute the median of set $M$.

The worst-case time complexity for this entire process is:`,
    options: [
      "O(n^2 \\log n)",
      "O(n^3)",
      "O(n^3 \\log n)",
      "O(n^4)"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Let us break down the selection process into its two steps:

**Step 1: Finding medians of all $n \\log n$ arrays**
- Each array $A_i$ contains $k = n^2$ distinct elements.
- A linear-time selection algorithm (such as Median-of-Medians / \`SELECT\`) takes time linear in the array size:
  $$\\text{Time for one array of size } n^2 = O(n^2)$$
- There are $n \\log n$ such arrays. Therefore, the total time for all arrays in Step 1 is:
  $$\\text{Time(Step 1)} = (n \\log n) \\times O(n^2) = O(n^3 \\log n)$$

**Step 2: Finding the median of set $M$**
- The set $M = \\{m_1, m_2, \\dots, m_{n \\log n}\\}$ contains $|M| = n \\log n$ elements.
- Finding the median of $M$ using a linear-time selection algorithm takes time linear in $|M|$:
  $$\\text{Time(Step 2)} = O(|M|) = O(n \\log n)$$

**Total Time Complexity:**
$$\\text{Total Time} = \\text{Time(Step 1)} + \\text{Time(Step 2)} = O(n^3 \\log n) + O(n \\log n) = \\mathbf{O(n^3 \\log n)}$$

Hence, the correct option is **Option 3: $O(n^3 \\log n)$**.`
  },

  // ─── Q.2 (SCQ) ───
  {
    id: "me-algo-twt3-q02",
    difficulty: "hard",
    concept: "Simultaneous Minimum and Maximum Comparisons",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q02.png",
    imageAlt: "Options for Q.2 comparisons difference",
    text: `Let $n$ be an odd natural number. Suppose we increase the array size to $n + 1$ (making it even). Let $A_n$ be the comparisons to find both minimum and maximum simultaneously for size $n$, and $B_{n + 1}$ be the comparisons for size $n + 1$.
Which of the following is correct?`,
    options: [
      "B_{n+1} - A_n = 0.5",
      "B_{n+1} - A_n = 1",
      "B_{n+1} - A_n = 1.5",
      "B_{n+1} - A_n = 2"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
This is the standard problem of finding **both minimum and maximum simultaneously** with the minimum number of comparisons (CLRS Section 9.1):

1. **When $n$ is odd:**
   - Initialize both min and max to the first element:
     $$\\text{Comparisons for initialization} = 0$$
   - The remaining $n - 1$ elements are processed in pairs.
   - For each pair of 2 elements:
     - 1 comparison between the two elements.
     - 1 comparison of the smaller with current min.
     - 1 comparison of the larger with current max.
     - Total = 3 comparisons per pair.
   - Number of pairs = $\\frac{n - 1}{2}$.
   - Total comparisons for odd $n$:
     $$A_n = 0 + 3 \\times \\frac{n - 1}{2} = \\frac{3(n - 1)}{2}$$

2. **When size is $n + 1$ (which is even, since $n$ is odd):**
   - Compare the first two elements and initialize min to the smaller and max to the larger:
     $$\\text{Comparisons for initialization} = 1$$
   - The remaining elements count is $(n + 1) - 2 = n - 1$.
   - These $n - 1$ elements are processed in pairs:
     $$\\text{Number of pairs} = \\frac{n - 1}{2}$$
   - Total comparisons for even $n + 1$:
     $$B_{n + 1} = 1 + 3 \\times \\frac{n - 1}{2} = 1 + \\frac{3(n - 1)}{2}$$

3. **Computing the difference:**
   $$B_{n + 1} - A_n = \\left(1 + \\frac{3(n - 1)}{2}\\right) - \\left(\\frac{3(n - 1)}{2}\\right) = \\mathbf{1}$$

Hence, **$B_{n + 1} - A_n = 1$ (Option 2)** is correct.`
  },

  // ─── Q.3 (MSQ) ───
  {
    id: "me-algo-twt3-q03",
    difficulty: "medium",
    concept: "Merge Sort vs Radix Sort Properties",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt03_q03.png",
    imageAlt: "Options for Q.3",
    text: `Which of the following statements are correct?`,
    options: [
      "Inplace merge sort on array will take O(n^2) time.",
      "Merge sort on array requires O(n^2) auxiliary space.",
      "Radix sort works in a linear time only if the elements to sort are integers in the range {0, 1, ..... C_n}.",
      "The running time of radix sort is effectively independent of whether the input is already sorted."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 3],
    explanation: `### Solution
Let us evaluate each statement:

1. **Statement 1:** *"Inplace merge sort on array will take $O(n^2)$ time."*
   - Standard merge operation requires $O(n)$ auxiliary space to achieve $O(n \\log n)$ time.
   - If merging two sorted subarrays is done strictly in-place without extra space by shifting/inserting elements, merging takes $O(n^2)$ in the worst case, giving an overall time of $O(n^2)$. Thus, standard in-place merge sort takes $O(n^2)$ time.
   - **Statement 1 is CORRECT ✓**

2. **Statement 2:** *"Merge sort on array requires $O(n^2)$ auxiliary space."*
   - Standard merge sort requires $O(n)$ auxiliary space for the temporary merge array, not $O(n^2)$.
   - **Statement 2 is INCORRECT ✗**

3. **Statement 3:** *"Radix sort works in a linear time only if the elements to sort are integers in the range $\\{0, 1, \\dots, C_n\\}$."*
   - Radix sort works in linear time $O(d(n + k))$ for $d$ digits in base $k$. If numbers are in range $0$ to $n^c - 1$, by choosing base $k = n$, $d = c = O(1)$, so it runs in $O(n)$ time. However, it is not restricted only to that specific subset.

4. **Statement 4:** *"The running time of radix sort is effectively independent of whether the input is already sorted."*
   - Radix sort executes $d$ passes of an underlying stable subroutine (typically Counting Sort). Counting sort processes every item and increments frequencies regardless of whether the array is sorted, reverse sorted, or random.
   - Therefore, the number of operations and running time is completely oblivious to the initial order of input elements.
   - **Statement 4 is CORRECT ✓**

Hence, **Statements 1 and 4** are correct.`
  },

  // ─── Q.4 (SCQ) ───
  {
    id: "me-algo-twt3-q04",
    difficulty: "medium",
    concept: "Lomuto Partition Algorithm Tracing",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q04.png",
    imageAlt: "Lomuto Partition algorithm code and question",
    text: `Consider the following partition algorithm:

\`\`\`text
partition(A, p, r)
    x ← A[r]
    i ← p - 1
    for j ← p to r - 1
        do if A[j] ≤ x
            then i ← i + 1
                 exchange A[i] ↔ A[j]
    exchange A[i + 1] ↔ A[r]
    return i + 1
\`\`\`

Now consider the input sequence: \`14, 5, 9, 2, 11, 7, 10\`.
What is the state of the array just before the final swap with pivot, partition algorithm execute?`,
    options: [
      "5, 9, 2, 14, 11, 7, 10",
      "5, 9, 2, 7, 11, 14, 10",
      "5, 9, 7, 2, 14, 11, 10",
      "5, 9, 2, 14, 7, 11, 10"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let the 1-indexed array be:
$$A = [14, 5, 9, 2, 11, 7, 10], \\quad p = 1, \\quad r = 7$$
Pivot element $x = A[r] = 10$.
Initialize $i = p - 1 = 0$.

Now iterate $j$ from $p = 1$ to $r - 1 = 6$:

- **$j = 1$:** $A[1] = 14$. Is $14 \\le 10$? **No.**
  - $i$ remains $0$.
  - Array: $[14, 5, 9, 2, 11, 7, 10]$

- **$j = 2$:** $A[2] = 5$. Is $5 \\le 10$? **Yes.**
  - $i \\leftarrow 0 + 1 = 1$.
  - Exchange $A[1] \\leftrightarrow A[2]$ (swap $14$ and $5$).
  - Array: $[\\mathbf{5}, \\mathbf{14}, 9, 2, 11, 7, 10]$

- **$j = 3$:** $A[3] = 9$. Is $9 \\le 10$? **Yes.**
  - $i \\leftarrow 1 + 1 = 2$.
  - Exchange $A[2] \\leftrightarrow A[3]$ (swap $14$ and $9$).
  - Array: $[5, \\mathbf{9}, \\mathbf{14}, 2, 11, 7, 10]$

- **$j = 4$:** $A[4] = 2$. Is $2 \\le 10$? **Yes.**
  - $i \\leftarrow 2 + 1 = 3$.
  - Exchange $A[3] \\leftrightarrow A[4]$ (swap $14$ and $2$).
  - Array: $[5, 9, \\mathbf{2}, \\mathbf{14}, 11, 7, 10]$

- **$j = 5$:** $A[5] = 11$. Is $11 \\le 10$? **No.**
  - $i$ remains $3$.
  - Array: $[5, 9, 2, 14, 11, 7, 10]$

- **$j = 6$:** $A[6] = 7$. Is $7 \\le 10$? **Yes.**
  - $i \\leftarrow 3 + 1 = 4$.
  - Exchange $A[4] \\leftrightarrow A[6]$ (swap $14$ and $7$).
  - Array: $[5, 9, 2, \\mathbf{7}, 11, \\mathbf{14}, 10]$

The loop finishes ($j$ reaches $r - 1 = 6$).
Just before the final swap (\`exchange A[i + 1] ↔ A[r]\`), the array is:
$$\\mathbf{5, 9, 2, 7, 11, 14, 10}$$

Hence, the correct option is **Option 2: 5, 9, 2, 7, 11, 14, 10**.`
  },

  // ─── Q.5 (SCQ) ───
  {
    id: "me-algo-twt3-q05",
    difficulty: "easy",
    concept: "Asymptotic Notation Properties",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q05.png",
    imageAlt: "Options for Q.5 asymptotic relations",
    text: `Which one of the following statements is TRUE for all positive functions $f(n)$ and $g(n)$?`,
    options: [
      "f(n) + g(n) = \\Theta(\\min(f(n), g(n)))",
      "f(n) \\cdot g(n) = \\Omega(f(n) + g(n))",
      "f(n) + g(n) = \\Theta(\\max(f(n), g(n)))",
      "f(n) = \\Theta(g(n))"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Let $f(n)$ and $g(n)$ be any two positive asymptotically well-behaved functions.

By definition:
$$\\max(f(n), g(n)) \\le f(n) + g(n) \\le 2 \\cdot \\max(f(n), g(n)) \\quad \\text{for all } n$$

Since:
1. $f(n) + g(n) \\ge 1 \\cdot \\max(f(n), g(n))$ (with constant $c_1 = 1 > 0$)
2. $f(n) + g(n) \\le 2 \\cdot \\max(f(n), g(n))$ (with constant $c_2 = 2 > 0$)

By the formal definition of $\\Theta$:
$$c_1 \\cdot h(n) \\le f(n) + g(n) \\le c_2 \\cdot h(n) \\implies f(n) + g(n) = \\Theta(h(n))$$
where $h(n) = \\max(f(n), g(n))$.

Therefore:
$$\\mathbf{f(n) + g(n) = \\Theta(\\max(f(n), g(n)))}$$
always holds true for all positive functions.

**Option 3** is correct.`
  },

  // ─── Q.6 (MSQ) ───
  {
    id: "me-algo-twt3-q06",
    difficulty: "medium",
    concept: "Insertion Sort Iterations & Swaps",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Consider the following array:

\`42, 17, 23, 8, 35, 19, 4, 50, 11\`

The array is sorted in ascending order using Insertion Sort.
Which of the following statements is/are correct?`,
    options: [
      "After the 3rd iteration, the array becomes 8, 17, 23, 42, 35, 19, 4, 50, 11",
      "After the 3rd iteration, the array becomes 17, 23, 42, 8, 35, 19, 4, 50, 11",
      "Total number of swaps performed is 21.",
      "Total number of swaps performed is 19."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
Given array: \`[42, 17, 23, 8, 35, 19, 4, 50, 11]\` of size $n = 9$.

**Tracing Insertion Sort iterations:**
- **Initial:** \`[42 | 17, 23, 8, 35, 19, 4, 50, 11]\`
- **Iteration 1 (insert 17):**
  - Compare 17 with 42 $\\to$ shifts 42 right.
  - Array becomes: \`[17, 42 | 23, 8, 35, 19, 4, 50, 11]\` (1 shift/swap)
- **Iteration 2 (insert 23):**
  - Compare 23 with 42 $\\to$ shifts 42 right.
  - Compare 23 with 17 $\\to$ stops.
  - Array becomes: \`[17, 23, 42 | 8, 35, 19, 4, 50, 11]\` (1 shift/swap)
- **Iteration 3 (insert 8):**
  - Compare 8 with 42 $\\to$ shifts 42.
  - Compare 8 with 23 $\\to$ shifts 23.
  - Compare 8 with 17 $\\to$ shifts 17.
  - Array becomes: \`[8, 17, 23, 42 | 35, 19, 4, 50, 11]\` (3 shifts/swaps)

Therefore, after the 3rd iteration, the array is:
$$\\mathbf{8, 17, 23, 42, 35, 19, 4, 50, 11}$$
*(Statement 1 is CORRECT ✓, Statement 2 is INCORRECT ✗)*

---

**Calculating Total Number of Swaps / Inversions:**
The total number of adjacent swaps performed by Insertion Sort equals the number of inversions in the original array $(i < j$ such that $A[i] > A[j])$:
- **42:** greater than $17, 23, 8, 35, 19, 4, 11$ $\\implies 7$ inversions
- **17:** greater than $8, 4, 11$ $\\implies 3$ inversions
- **23:** greater than $8, 19, 4, 11$ $\\implies 4$ inversions
- **8:** greater than $4$ $\\implies 1$ inversion
- **35:** greater than $19, 4, 11$ $\\implies 3$ inversions
- **19:** greater than $4, 11$ $\\implies 2$ inversions
- **4:** greater than none $\\implies 0$ inversions
- **50:** greater than $11$ $\\implies 1$ inversion
- **11:** $\\implies 0$ inversions

$$\\text{Total swaps} = 7 + 3 + 4 + 1 + 3 + 2 + 0 + 1 + 0 = \\mathbf{21}$$
*(Statement 3 is CORRECT ✓, Statement 4 is INCORRECT ✗)*

Hence, **Statements 1 and 3** are correct.`
  },

  // ─── Q.7 (NAT) ───
  {
    id: "me-algo-twt3-q07",
    difficulty: "medium",
    concept: "Ternary vs Binary Search & Square Root Recurrence",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 1,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt03_q07.png",
    imageAlt: "Q.7 Statements on Ternary search and Recurrence",
    text: `Consider the following statements:

- **$S_1$ :** Ternary search is more efficient than binary search for finding an element in a sorted array.
- **$S_2$ :** The value of $T(n) = T(\\sqrt{n}) + \\log n$ for $n \\ge 2$ is $\\Theta(\\log n)$.

The number of correct statement(s) is/are ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us evaluate each statement:

1. **Statement $S_1$:** *"Ternary search is more efficient than binary search for finding an element in a sorted array."*
   - In **Binary Search**, the search space is divided into 2 parts with at most 2 comparisons per level (1 comparison if 3-way branching).
     $$\\text{Comparisons in Binary Search} \\le 2 \\log_2 n$$
   - In **Ternary Search**, 2 midpoints are used to divide the range into 3 parts, requiring up to 4 comparisons per level to reduce the size by a factor of 3:
     $$\\text{Comparisons in Ternary Search} \\approx 2 \\log_3 n = 2 \\times \\frac{\\log_2 n}{\\log_2 3} \\approx \\frac{2}{1.585} \\log_2 n \\approx 1.26 \\times (2 \\log_2 n)$$
   - Therefore, Ternary Search makes **more comparisons** in the worst case than Binary Search. Binary search is strictly more efficient.
   - **Statement $S_1$ is INCORRECT ✗**

2. **Statement $S_2$:** *"The value of $T(n) = T(\\sqrt{n}) + \\log n$ for $n \\ge 2$ is $\\Theta(\\log n)$"*
   - Substitute $n = 2^m \\implies m = \\log_2 n$.
   - Then $\\sqrt{n} = (2^m)^{1/2} = 2^{m/2}$.
   - Let $S(m) = T(2^m)$. The recurrence becomes:
     $$S(m) = S(m/2) + m$$
   - Applying Master's Theorem to $S(m) = S(m/2) + m$:
     - Here $a = 1, b = 2 \\implies m^{\\log_b a} = m^{\\log_2 1} = m^0 = 1$.
     - Since $f(m) = m = \\Omega(m^{0 + 1})$ and $1 \\cdot \\frac{m}{2} \\le c m$ for $c = 1/2 < 1$:
     $$S(m) = \\Theta(m)$$
   - Substituting back $m = \\log n$:
     $$T(n) = S(\\log n) = \\mathbf{\\Theta(\\log n)}$$
   - *(Alternatively, summing the geometric series: $\\log n + \\frac{1}{2}\\log n + \\frac{1}{4}\\log n + \\dots = 2 \\log n = \\Theta(\\log n)$).*
   - **Statement $S_2$ is CORRECT ✓**

Thus, out of the two statements, exactly **1** statement ($S_2$) is correct.

**Answer:** $\\mathbf{1}$`
  },

  // ─── Q.8 (SCQ) ───
  {
    id: "me-algo-twt3-q08",
    difficulty: "medium",
    concept: "Master Theorem Case 2 Extension",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q08.png",
    imageAlt: "Recurrence relation T(n) = 9T(n/3) + n^2 log n",
    text: `Consider the following recurrence relation:
$$T(n) = 9T\\left(\\frac{n}{3}\\right) + n^2 \\log n, \\quad T(1) = 1$$

What is the time complexity of $T(n)$?`,
    options: [
      "\\Theta(n^2)",
      "\\Theta(n^2 \\log^2 n)",
      "\\Theta(n^3 \\log n)",
      "\\Theta(n \\log n)"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Given recurrence relation:
$$T(n) = 9T\\left(\\frac{n}{3}\\right) + n^2 \\log n$$

Compare with the standard form:
$$T(n) = a T\\left(\\frac{n}{b}\\right) + f(n)$$
- $a = 9$
- $b = 3$
- $f(n) = n^2 \\log n$

1. Compute $n^{\\log_b a}$:
   $$n^{\\log_b a} = n^{\\log_3 9} = n^2$$

2. Compare $f(n)$ with $n^{\\log_b a}$:
   $$f(n) = n^2 \\log n = n^{\\log_b a} \\cdot \\log^k n \\quad \\text{with } k = 1$$

3. By the **Extended Master Theorem (Case 2)**:
   If $f(n) = \\Theta(n^{\\log_b a} \\log^k n)$ where $k \\ge 0$, then:
   $$T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$$

4. Substituting $a, b, k$:
   $$T(n) = \\Theta(n^2 \\log^{1+1} n) = \\mathbf{\\Theta(n^2 \\log^2 n)}$$

Hence, the correct option is **Option 2: $\\Theta(n^2 \\log^2 n)$**.`
  },

  // ─── Q.9 (SCQ) ───
  {
    id: "me-algo-twt3-q09",
    difficulty: "hard",
    concept: "Matrix Chain Multiplication Optimal Parenthesization",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q09.png",
    imageAlt: "Matrix chain multiplication dimensions and options",
    text: `Consider the following matrices with given dimension:
$$M_0(4 \\times 6), \\quad M_1(6 \\times 8), \\quad M_2(8 \\times 4), \\quad M_3(4 \\times 5)$$

Which of the following multiplication order gives optimal solution of the above matrices?`,
    options: [
      "(M_0 ((M_1 M_2) M_3))",
      "((M_0 M_1) M_2) M_3",
      "((M_0 (M_1 M_2)) M_3)",
      "((M_0 M_1) (M_2 M_3))"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Let the dimension vector be:
$$p = \\langle 4, 6, 8, 4, 5 \\rangle$$
where:
- $M_0$ has size $4 \\times 6$
- $M_1$ has size $6 \\times 8$
- $M_2$ has size $8 \\times 4$
- $M_3$ has size $4 \\times 5$

Let us compute the total number of scalar multiplications for each option:

1. **Option 1: $(M_0 ((M_1 M_2) M_3))$**
   - $M_1 M_2$: $(6 \\times 8) \\times (8 \\times 4) \\implies 6 \\times 8 \\times 4 = 192$ (result: $6 \\times 4$)
   - $(M_1 M_2) M_3$: $(6 \\times 4) \\times (4 \\times 5) \\implies 6 \\times 4 \\times 5 = 120$ (result: $6 \\times 5$)
   - $M_0 ((M_1 M_2) M_3)$: $(4 \\times 6) \\times (6 \\times 5) \\implies 4 \\times 6 \\times 5 = 120$
   - Total = $192 + 120 + 120 = \\mathbf{432}$

2. **Option 2: $((M_0 M_1) M_2) M_3$**
   - $M_0 M_1$: $(4 \\times 6) \\times (6 \\times 8) \\implies 4 \\times 6 \\times 8 = 192$ (result: $4 \\times 8$)
   - $(M_0 M_1) M_2$: $(4 \\times 8) \\times (8 \\times 4) \\implies 4 \\times 8 \\times 4 = 128$ (result: $4 \\times 4$)
   - $((M_0 M_1) M_2) M_3$: $(4 \\times 4) \\times (4 \\times 5) \\implies 4 \\times 4 \\times 5 = 80$
   - Total = $192 + 128 + 80 = \\mathbf{400}$

3. **Option 3: $((M_0 (M_1 M_2)) M_3)$**
   - $M_1 M_2$: $(6 \\times 8) \\times (8 \\times 4) \\implies 6 \\times 8 \\times 4 = 192$ (result: $6 \\times 4$)
   - $M_0 (M_1 M_2)$: $(4 \\times 6) \\times (6 \\times 4) \\implies 4 \\times 6 \\times 4 = 96$ (result: $4 \\times 4$)
   - $(M_0 (M_1 M_2)) M_3$: $(4 \\times 4) \\times (4 \\times 5) \\implies 4 \\times 4 \\times 5 = 80$
   - Total = $192 + 96 + 80 = \\mathbf{368}$  **(MINIMUM / OPTIMAL ✓)**

4. **Option 4: $((M_0 M_1) (M_2 M_3))$**
   - $M_0 M_1$: $(4 \\times 6) \\times (6 \\times 8) \\implies 4 \\times 6 \\times 8 = 192$ (result: $4 \\times 8$)
   - $M_2 M_3$: $(8 \\times 4) \\times (4 \\times 5) \\implies 8 \\times 4 \\times 5 = 160$ (result: $8 \\times 5$)
   - $(M_0 M_1) (M_2 M_3)$: $(4 \\times 8) \\times (8 \\times 5) \\implies 4 \\times 8 \\times 5 = 160$
   - Total = $192 + 160 + 160 = \\mathbf{512}$

Among all options, **Option 3 requires only 368 multiplications**, which is optimal.

Hence, the correct option is **Option 3: $((M_0 (M_1 M_2)) M_3)$**.`
  },

  // ─── Q.10 (SCQ) ───
  {
    id: "me-algo-twt3-q10",
    difficulty: "medium",
    concept: "Sorting Algorithms Comparison Matching",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q10.png",
    imageAlt: "Match the following sorting comparisons and swaps",
    text: `Match the following: [Sorting is done for an array of $n$ elements]

| List-I | List-II |
| :--- | :--- |
| **A.** Best case comparisons in selection sort | **1.** $n - 1$ |
| **B.** Worst case swaps in bubble sort | **2.** $n$ |
| **C.** Worst case comparisons in insertion sort | **3.** $n^2$ |
| **D.** Best case comparisons in insertion sort | **4.** $\\frac{n(n - 1)}{2}$ |
| **E.** Best case swaps in bubble sort | **5.** $0$ |

**Codes:**
- **(a)** A: 4, B: 4, C: 3, D: 2, E: 5
- **(b)** A: 4, B: 3, C: 4, D: 2, E: 4
- **(c)** A: 3, B: 3, C: 4, D: 1, E: 4
- **(d)** A: 4, B: 4, C: 4, D: 1, E: 5`,
    options: [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
Let us determine the exact values for each entry in List-I:

- **A. Best case comparisons in Selection Sort:**
  Selection sort always scans the entire remaining unsorted suffix regardless of initial order:
  $$(n - 1) + (n - 2) + \\dots + 1 = \\frac{n(n - 1)}{2} \\implies \\mathbf{A \\to 4}$$

- **B. Worst case swaps in Bubble Sort:**
  In a reverse sorted array, every pair of adjacent elements forms an inversion and must be swapped:
  $$\\text{Total swaps} = \\frac{n(n - 1)}{2} \\implies \\mathbf{B \\to 4}$$

- **C. Worst case comparisons in Insertion Sort:**
  In a reverse sorted array, the $i$-th element is compared with all $i - 1$ preceding elements:
  $$1 + 2 + \\dots + (n - 1) = \\frac{n(n - 1)}{2} \\implies \\mathbf{C \\to 4}$$

- **D. Best case comparisons in Insertion Sort:**
  When the array is already sorted in ascending order, each element from index 2 to $n$ is compared only once with its immediate predecessor and the inner loop stops:
  $$\\text{Total comparisons} = n - 1 \\implies \\mathbf{D \\to 1}$$

- **E. Best case swaps in Bubble Sort:**
  When the array is already sorted, no adjacent elements are out of order:
  $$\\text{Total swaps} = 0 \\implies \\mathbf{E \\to 5}$$

**Matching Code:**
$$\\mathbf{A: 4, \\quad B: 4, \\quad C: 4, \\quad D: 1, \\quad E: 5} \\implies \\mathbf{(d)}$$

Hence, the correct option is **Option 4: (d)**.`
  },

  // ─── Q.11 (MSQ) ───
  {
    id: "me-algo-twt3-q11",
    difficulty: "medium",
    concept: "Merge Sort vs Quick Sort Comparisons & In-place Characteristics",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements is/are correct?`,
    options: [
      "Merge sort always has more number of swaps that comparisons",
      "Number of comparisons in partition algorithm are same for best case and worst case.",
      "Quick sort is an inplace algorithm while merge sort is an out place algorithm.",
      "None of these"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
Let us analyze each statement:

1. **Statement 1:** *"Merge sort always has more number of swaps that comparisons"*
   - Merge sort does not perform element-to-element swaps; it copies elements sequentially into an auxiliary array and then copies them back. Hence, this statement is false.

2. **Statement 2:** *"Number of comparisons in partition algorithm are same for best case and worst case."*
   - In standard partition algorithms (e.g. Lomuto partition or Hoare partition), the algorithm iterates through the subarray of size $n$ and compares every element to the pivot.
   - For an array of size $n$, Lomuto partition makes exactly $n - 1$ comparisons in all cases (best, average, and worst case).
   - Therefore, the number of comparisons made during the partition step is identical in both best and worst cases.
   - **Statement 2 is CORRECT ✓**

3. **Statement 3:** *"Quick sort is an inplace algorithm while merge sort is an out place algorithm."*
   - An in-place sorting algorithm requires $O(1)$ auxiliary space (ignoring recursive call stack space) or sorts elements within the original array without allocating a secondary array. Quick sort only uses $O(\\log n)$ stack space.
   - Standard merge sort requires an auxiliary array of size $O(n)$ to merge two halves, making it an out-of-place algorithm.
   - **Statement 3 is CORRECT ✓**

Hence, **Statements 2 and 3** are correct.`
  },

  // ─── Q.12 (SCQ) ───
  {
    id: "me-algo-twt3-q12",
    difficulty: "hard",
    concept: "Hybrid Search (Linear + Binary) Expected Comparisons",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q12.png",
    imageAlt: "Options for Q.12 expected comparisons",
    text: `A search algorithm is defined as follows:

- First, it performs a Linear Search on the first $k$ elements of a sorted array of size $n$.
- If the key is not found in the first $k$ elements, it performs a Binary Search on the remaining $(n – k)$ elements.
- Assume that the key is present uniformly at random in the array.
- If all operations (comparison, jump, etc.) take unit time, what is the expected number of comparisons required to search for the key using this algorithm?`,
    options: [
      "\\frac{n + 1}{2}",
      "\\frac{k}{n} \\cdot \\frac{k + 1}{2} + \\frac{n - k}{n} \\cdot (\\log_2(n - k) + k)",
      "\\frac{k + 1}{2} + \\log_2(n - k)",
      "\\log_2(n)"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let the array have $n$ elements, and assume the target key is present at any of the $n$ locations uniformly with probability:
$$P(\\text{key at index } i) = \\frac{1}{n}$$

We partition the search into two disjoint events:

1. **Event 1: The key is located in the first $k$ elements ($1 \\le i \\le k$):**
   - Probability of this event:
     $$P_1 = \\frac{k}{n}$$
   - When the key is among the first $k$ elements, Linear Search finds it.
   - The expected number of comparisons in a successful linear search over $k$ elements:
     $$E_1 = \\frac{1 + 2 + \\dots + k}{k} = \\frac{k + 1}{2}$$

2. **Event 2: The key is located in the remaining $n - k$ elements ($k + 1 \\le i \\le n$):**
   - Probability of this event:
     $$P_2 = \\frac{n - k}{n}$$
   - In this case, Linear Search first scans all $k$ elements and fails:
     $$\\text{Comparisons in Linear Search} = k$$
   - Next, Binary Search is performed on the remaining $n - k$ elements:
     $$\\text{Comparisons in Binary Search} = \\log_2(n - k)$$
   - Total comparisons when key is in the second part:
     $$E_2 = k + \\log_2(n - k)$$

3. **Overall Expected Number of Comparisons:**
   By the Law of Total Expectation:
   $$E = P_1 \\cdot E_1 + P_2 \\cdot E_2$$
   $$E = \\mathbf{\\frac{k}{n} \\cdot \\frac{k + 1}{2} + \\frac{n - k}{n} \\cdot (\\log_2(n - k) + k)}$$

Hence, the correct option is **Option 2**.`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-algo-twt3-q13",
    difficulty: "medium",
    concept: "Nested Loop Time Complexity",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q13.png",
    imageAlt: "C function with nested loops complexity",
    text: `What is the time complexity of the following function?

\`\`\`c
int fun(int n)
{
    int count = 0;
    for (int i = 1; i < n; i = i * 2)
        for (int j = 0; j < n; j++)
        {
            count ++;
        }
    return count;
}
\`\`\``,
    options: [
      "O(n^2)",
      "O(n \\log n)",
      "O(n \\log n)^2",
      "O(n^2 \\log n)"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let us analyze the number of times \`count++\` executes:

1. **Outer Loop:**
   - Starts at $i = 1$, and in each iteration $i$ doubles:
     $$i = 1, 2, 4, 8, \\dots < n$$
   - The loop runs until $2^k \\ge n \\implies k = \\lceil \\log_2 n \\rceil$.
   - Thus, the outer loop executes **$\\Theta(\\log n)$** times.

2. **Inner Loop:**
   - In each iteration of the outer loop, $j$ runs from $0$ up to $n - 1$:
     $$j = 0, 1, 2, \\dots, n - 1$$
   - Thus, the inner loop executes **$n$** times per outer iteration.

3. **Total Operations:**
   $$\\text{Total execution of count++} = \\sum_{k=1}^{\\log_2 n} n = n \\times \\log_2 n = \\mathbf{O(n \\log n)}$$

Hence, the correct option is **Option 2: $O(n \\log n)$**.`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-algo-twt3-q14",
    difficulty: "easy",
    concept: "Bubble Sort vs Quick Sort Input Sensitivity",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q14.png",
    imageAlt: "Q.14 statements on Bubble sort and Quick sort",
    text: `Which of the following statements is/are correct?

- **$S_1$ :** Bubble sort operates at the same speed whether the input is already sorted or in reverse sorted order.
- **$S_2$ :** Quick sort operates at equal speed whether the input is already sorted or in reverse sorted order.`,
    options: [
      "Only S_1",
      "Only S_2",
      "Both S_1 and S_2",
      "None of these"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let us inspect both statements:

- **Statement $S_1$:**
  - With standard optimized Bubble Sort (using an early-stopping swapped flag), if the array is already sorted, it terminates after just 1 pass taking **$O(n)$** time.
  - If the array is in reverse sorted order, it performs all $n - 1$ passes and $\\frac{n(n - 1)}{2}$ swaps, taking **$O(n^2)$** time.
  - Even without the flag, it does $0$ swaps on sorted vs maximum swaps on reverse sorted.
  - Hence, Bubble sort does **not** operate at the same speed.
  - **Statement $S_1$ is INCORRECT ✗**

- **Statement $S_2$:**
  - In standard Quick Sort (with the first or last element chosen as pivot):
    - When the input is **already sorted**, the pivot is the smallest (or largest) element, resulting in an extreme unbalanced partition of sizes $0$ and $n - 1$. Time taken = **$\\Theta(n^2)$**.
    - When the input is in **reverse sorted order**, the pivot is also an extreme element, again creating partitions of sizes $0$ and $n - 1$. Time taken = **$\\Theta(n^2)$**.
  - In both scenarios, Quick Sort runs at equal speed ($\\\\Theta(n^2)$ worst-case time).
  - **Statement $S_2$ is CORRECT ✓**

Therefore, **Only $S_2$** is correct.

Hence, the correct option is **Option 2**.`
  },

  // ─── Q.15 (SCQ) ───
  {
    id: "me-algo-twt3-q15",
    difficulty: "medium",
    concept: "Merge Sort Elements in Linear Time",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q15.png",
    imageAlt: "Options for Q.15 number of elements sorted in linear time",
    text: `Which of the following represents the number of elements that can be sorted in $\\Theta(n)$ time using merge sort?`,
    options: [
      "\\Theta(\\log n)",
      "\\Theta(n)",
      "\\Theta\\left(\\frac{n}{\\log n}\\right)",
      "\\Theta(\\sqrt{n})"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Let $k$ be the number of elements to sort using Merge Sort.

1. The time complexity of Merge Sort to sort $k$ elements is:
   $$T(k) = \\Theta(k \\log k)$$

2. We are given that this total running time must be $\\Theta(n)$:
   $$k \\log k = \\Theta(n)$$

3. Let us test $k = \\Theta\\left(\\frac{n}{\\log n}\\right)$:
   $$k \\log k = \\left(\\frac{n}{\\log n}\\right) \\cdot \\log\\left(\\frac{n}{\\log n}\\right)$$
   $$= \\left(\\frac{n}{\\log n}\\right) (\\log n - \\log \\log n) = n \\cdot \\left(1 - \\frac{\\log \\log n}{\\log n}\\right) = \\mathbf{\\Theta(n)}$$

Therefore, $\\Theta\\left(\\frac{n}{\\log n}\\right)$ elements can be sorted in $\\Theta(n)$ time using Merge Sort.

Hence, the correct option is **Option 3: $\\Theta\\left(\\frac{n}{\\log n}\\right)$**.`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-algo-twt3-q16",
    difficulty: "easy",
    concept: "Counting Sort Stability/Space & Merge Sort Tree Work",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q16.png",
    imageAlt: "Q.16 statements on Counting sort and Merge sort",
    text: `Consider the following statements is/are correct?

- **$S_1$ :** Counting sort is a stable, in-place sorting algorithm.
- **$S_2$ :** In merge sort execution time, roughly the same amount of work is done at each level of tree.`,
    options: [
      "Only S_1",
      "Only S_2",
      "Both S_1 and S_2",
      "None of these"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let us inspect both statements:

- **Statement $S_1$:**
  - Counting sort is **stable** when iterating backwards from $n$ down to $1$ during output placement.
  - However, Counting Sort is **NOT in-place** because it requires:
    1. An auxiliary count/frequency array $C$ of size $k$ (the range of values).
    2. An auxiliary output array $B$ of size $n$.
    Total auxiliary space = $\\Theta(n + k) \\ne O(1)$.
  - **Statement $S_1$ is INCORRECT ✗**

- **Statement $S_2$:**
  - In the recursion tree for Merge Sort:
    - Level $0$: $1$ subproblem of size $n$, work done $= c n$.
    - Level $1$: $2$ subproblems of size $n/2$, work done $= 2 \\times c(n/2) = c n$.
    - Level $2$: $4$ subproblems of size $n/4$, work done $= 4 \\times c(n/4) = c n$.
    - Level $i$: $2^i$ subproblems of size $n/2^i$, work done $= 2^i \\times c(n/2^i) = c n$.
  - Thus, at every level of the recursion tree, roughly the **same amount of work ($c n$)** is done!
  - **Statement $S_2$ is CORRECT ✓**

Therefore, **Only $S_2$** is correct.

Hence, the correct option is **Option 2**.`
  },

  // ─── Q.17 (SCQ) ───
  {
    id: "me-algo-twt3-q17",
    difficulty: "medium",
    concept: "Asymptotic Growth Little-omega Comparison",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt03_q17.png",
    imageAlt: "Q.17 asymptotic comparison between f(n) and g(n)",
    text: `Consider the following function $f(n) = \\log (n^{\\log n})$ and $g(n) = \\log (\\log n)^2$.
Which of the following is correct?`,
    options: [
      "f(n) = \\omega(g(n))",
      "f(n) = o(g(n))",
      "f(n) = \\Theta(g(n))",
      "None of these"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
Let us simplify the two logarithmic functions:

1. **For $f(n)$:**
   $$f(n) = \\log (n^{\\log n}) = (\\log n) \\cdot (\\log n) = (\\log n)^2$$

2. **For $g(n)$:**
   $$g(n) = \\log ((\\log n)^2) = 2 \\log(\\log n)$$

3. **Comparing their growth rates using limits:**
   $$\\lim_{n \\to \\infty} \\frac{f(n)}{g(n)} = \\lim_{n \\to \\infty} \\frac{(\\log n)^2}{2 \\log(\\log n)}$$
   Let $u = \\log n$. As $n \\to \\infty$, $u \\to \\infty$:
   $$\\lim_{u \\to \\infty} \\frac{u^2}{2 \\log u} = \\infty$$

4. **Conclusion:**
   Since the limit of $\\frac{f(n)}{g(n)}$ approaches $\\infty$ as $n \\to \\infty$:
   $$f(n) = \\mathbf{\\omega(g(n))} \\quad \\text{and} \\quad g(n) = o(f(n))$$
   $f(n)$ grows strictly faster than $g(n)$.

Hence, the correct option is **Option 1: $f(n) = \\omega(g(n))$**.`
  }
];

export const MADE_EASY_ALGO_TWT3_CHAPTER: Chapter = {
  id: "algo-gate-2027-twt-3",
  name: "GATE 2027 CS TOPIC WISE TEST - 3 (Algorithms)",
  description: "Asymptotic Analysis, Divide & Conquer, Sorting, Selection & Recurrences",
  questions: MADE_EASY_ALGO_TWT3_QUESTIONS,
};
