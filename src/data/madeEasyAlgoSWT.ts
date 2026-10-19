import type { Question, Chapter } from "./quizData";

export const MADE_EASY_ALGO_SWT_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-algo-swt-q01",
    difficulty: "medium",
    concept: "Merge Sort on Variable-Length Strings",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q01.png",
    text: `A list of $n$ strings is sorted using merge sort. The length of the $i^{\\text{th}}$ string is $i$, for $1 \\le i \\le n$. Two strings are compared lexicographically, and comparison takes time proportional to the length of the shorter string.

What is the worst-case time complexity?`,
    options: [
      "O(n log n)",
      "O(n² log n)",
      "O(n²)",
      "O(n³)"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- The total length of all $n$ strings is:
  $$\\sum_{i=1}^n i = \\frac{n(n+1)}{2} = \\Theta(n^2)$$
- In standard merge sort, there are $\\log_2 n$ levels in the recursion tree.
- At each level of the recursion tree, every string participates in at most one merge operation.
- In any merge of two sorted lists of strings, when comparing two strings $s$ and $t$, the comparison takes time proportional to $\\min(|s|, |t|)$.
- The smaller string (lexicographically) is then placed into the output merged array and is never compared again in this merge pass.
- Thus, the comparison cost can be charged to the string being placed in the output array, meaning each string $s$ incurs at most $|s|$ comparison cost per level.
- Summing over all strings at any level $k$, the total time taken across all merges at that level is at most:
  $$\\sum_{i=1}^n |s_i| = \\sum_{i=1}^n i = \\Theta(n^2)$$
- With $\\log n$ levels in merge sort, the overall worst-case running time is:
  $$\\Theta(n^2) \\times \\log n = \\mathbf{O(n^2 \\log n)}$$

**Correct Answer: Option 2 (O(n² log n))**`
  },

  // ─── Q.2 (SCQ) ───
  {
    id: "me-algo-swt-q02",
    difficulty: "easy",
    concept: "Properties of Minimum Spanning Trees",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q02.png",
    text: `Let $G$ be a connected undirected weighted graph. Consider the following two statements:
$S_1$: If all edge weights in $G$ are equal, then every spanning tree of $G$ is a minimum spanning tree.
$S_2$: If $G$ has a unique minimum spanning tree, then all edge weights in $G$ must be distinct.

Which one of the following options is correct?`,
    options: [
      "Both S₁ and S₂ are true.",
      "S₁ is true and S₂ is false.",
      "S₁ is false and S₂ is true.",
      "Both S₁ and S₂ are false."
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **Statement $S_1$ is True:** Any spanning tree of a connected graph $G = (V, E)$ has exactly $|V| - 1$ edges. If all edge weights are equal to some constant $w$, then every spanning tree has total weight $(|V| - 1)w$, which is identical. Hence, every spanning tree is a minimum spanning tree.
- **Statement $S_2$ is False:** If edge weights are distinct, then the MST is guaranteed to be unique. However, the converse is not true. A graph can have non-distinct edge weights and still have a unique MST.
  - *Counterexample:* Consider a tree graph $A - B - C$ with edge weights $w(A, B) = 2$ and $w(B, C) = 2$. Since $G$ is already a tree, it has only ONE spanning tree (which is therefore unique), yet its edge weights are not distinct.

Therefore, $S_1$ is true and $S_2$ is false.

**Correct Answer: Option 2 (S₁ is true and S₂ is false)**`
  },

  // ─── Q.3 (SCQ) ───
  {
    id: "me-algo-swt-q03",
    difficulty: "easy",
    concept: "Algorithmic Paradigms Matching",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q03.png",
    text: `Match List-I with List-II and select the correct answer using the codes given below the lists:
**List-I:**
A. Sum of subset problem
B. Single source shortest path
C. Merge sort
D. 8 queen problem

**List-II:**
1. Divide and conquer
2. Backtracking
3. Dynamic programming
4. Greedy approach`,
    options: [
      "(a) A-4, B-3, C-1, D-2",
      "(b) A-3, B-4, C-1, D-2",
      "(c) A-3, B-4, C-2, D-1",
      "(d) A-4, B-3, C-2, D-1"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **A. Sum of subset problem:** Classic NP-complete problem solved using **Dynamic Programming** ($O(n \\cdot W)$ pseudo-polynomial time) $\\to$ **3**.
- **B. Single source shortest path:** Solved using Dijkstra's algorithm which follows the **Greedy approach** $\\to$ **4**.
- **C. Merge sort:** Standard **Divide and conquer** algorithm $\\to$ **1**.
- **D. 8 queen problem:** Classic constraint satisfaction problem solved using **Backtracking** $\\to$ **2**.

Matching: **A-3, B-4, C-1, D-2**, which corresponds to code **(b)**.

**Correct Answer: Option 2 ((b))**`
  },

  // ─── Q.4 (SCQ) ───
  {
    id: "me-algo-swt-q04",
    difficulty: "medium",
    concept: "Merge Sort Passes Tracing",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `If one uses straight two-way merge sort algorithm to sort the following elements in ascending order:
$$20, 47, 15, 8, 9, 4, 40, 30, 12, 17$$
Then the order of these elements after second pass of the algorithm is:`,
    options: [
      "8, 9, 15, 20, 47, 4, 12, 17, 30, 40",
      "8, 15, 20, 47, 4, 9, 30, 40, 12, 17",
      "15, 20, 47, 4, 8, 9, 12, 30, 40, 17",
      "4, 8, 9, 15, 20, 47, 12, 17, 30, 40"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Initial array of size 10 (individual elements of size 1):
\`[20], [47], [15], [8], [9], [4], [40], [30], [12], [17]\`

**Pass 1 (Merge adjacent lists of size 1 into sorted sublists of size 2):**
- Merge [20] & [47] $\\to$ [20, 47]
- Merge [15] & [8] $\\to$ [8, 15]
- Merge [9] & [4] $\\to$ [4, 9]
- Merge [40] & [30] $\\to$ [30, 40]
- Merge [12] & [17] $\\to$ [12, 17]
Result after Pass 1:
\`[20, 47], [8, 15], [4, 9], [30, 40], [12, 17]\`

**Pass 2 (Merge adjacent lists of size 2 into sorted sublists of size 4):**
- Merge [20, 47] and [8, 15] $\\to$ **[8, 15, 20, 47]**
- Merge [4, 9] and [30, 40] $\\to$ **[4, 9, 30, 40]**
- Remaining list: **[12, 17]** (no pair to merge with in this pass)

Concatenating all sublists after Pass 2:
$$\\mathbf{8, 15, 20, 47, 4, 9, 30, 40, 12, 17}$$

**Correct Answer: Option 2**`
  },

  // ─── Q.5 (SCQ) ───
  {
    id: "me-algo-swt-q05",
    difficulty: "easy",
    concept: "Asymptotic Growth Rates Ordering",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q05.png",
    text: `What is the correct increasing order of asymptotic (big $O$) complexity of the following functions:
$$f_1(n) = n^{0.999999} \\log n$$
$$f_2(n) = 1000000 n$$
$$f_3(n) = 1.000001^n$$
$$f_4(n) = n^2$$`,
    options: [
      "f₁(n), f₂(n), f₃(n), f₄(n)",
      "f₁(n), f₂(n), f₄(n), f₃(n)",
      "f₄(n), f₂(n), f₃(n), f₁(n)",
      "f₁(n), f₃(n), f₄(n), f₂(n)"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Comparing the growth rates as $n \\to \\infty$:
1. $f_1(n) = n^{0.999999} \\log n$: Since the power of $n$ is $< 1$, for any $\\epsilon > 0$, $n^{0.999999} \\log n = o(n^1)$. Thus $f_1(n) < f_2(n)$.
2. $f_2(n) = 1000000 n = \\Theta(n)$ (linear growth).
3. $f_4(n) = n^2 = \\Theta(n^2)$ (polynomial growth, grows faster than linear $n$).
4. $f_3(n) = (1.000001)^n$: Any exponential $c^n$ with base $c > 1$ eventually grows strictly faster than any polynomial $n^k$.

Increasing order:
$$f_1(n) < f_2(n) < f_4(n) < f_3(n)$$

**Correct Answer: Option 2 (f₁(n), f₂(n), f₄(n), f₃(n))**`
  },

  // ─── Q.6 (SCQ) ───
  {
    id: "me-algo-swt-q06",
    difficulty: "easy",
    concept: "Fractional Knapsack Greedy Algorithm",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q06.png",
    text: `Consider the fractional Knapsack instance:
$n = 4$, $(P_1, P_2, P_3, P_4) = (10, 10, 12, 18)$, $(W_1, W_2, W_3, W_4) = (2, 4, 6, 9)$ and capacity $M = 15$.
The maximum profit is given by:`,
    options: [
      "40",
      "38",
      "32",
      "30"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Compute profit-to-weight ratio $P_i / W_i$ for each item:
- Item 1: $10 / 2 = 5.0$
- Item 2: $10 / 4 = 2.5$
- Item 3: $12 / 6 = 2.0$
- Item 4: $18 / 9 = 2.0$

Sort items in decreasing order of ratio:
1. Item 1 (ratio 5.0, weight 2, profit 10) $\\to$ Take full item: remaining $M = 15 - 2 = 13$, total profit = $10$.
2. Item 2 (ratio 2.5, weight 4, profit 10) $\\to$ Take full item: remaining $M = 13 - 4 = 9$, total profit = $10 + 10 = 20$.
3. Between Item 3 and Item 4 (both have ratio 2.0):
   - Take Item 4 (weight 9, profit 18): remaining $M = 9 - 9 = 0$, total profit = $20 + 18 = 38$.
   - (Or take Item 3 with weight 6, profit 12, plus $3/9$ of Item 4 with profit $18 \\times 3/9 = 6$, total profit = $20 + 12 + 6 = 38$).

Maximum profit = **38**.

**Correct Answer: Option 2 (38)**`
  },

  // ─── Q.7 (NAT) ───
  {
    id: "me-algo-swt-q07",
    difficulty: "easy",
    concept: "Matrix Chain Multiplication Optimal Parenthesization",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    imageUrl: "/images/made_easy/algo_swt_q07.png",
    text: `The minimum number of scalar multiplications required to multiply the following three matrices:
$$A_{10 \\times 20}, \\quad B_{20 \\times 5}, \\quad C_{5 \\times 50}$$`,
    correctAnswerIndex: -1,
    options: [],
    natAnswer: 3500,
    natTolerance: 0.05,
    explanation: `### Solution
For three matrices $A_{10 \\times 20}, B_{20 \\times 5}, C_{5 \\times 50}$, there are two possible parenthesizations:
1. **$((AB)C)$:**
   - Multiplying $A$ and $B$: $10 \\times 20 \\times 5 = 1000$ multiplications, resulting in matrix $(AB)_{10 \\times 5}$.
   - Multiplying $(AB)$ and $C$: $10 \\times 5 \\times 50 = 2500$ multiplications.
   - Total cost = $1000 + 2500 = \\mathbf{3500}$.
2. **$(A(BC))$:**
   - Multiplying $B$ and $C$: $20 \\times 5 \\times 50 = 5000$ multiplications, resulting in matrix $(BC)_{20 \\times 50}$.
   - Multiplying $A$ and $(BC)$: $10 \\times 20 \\times 50 = 10000$ multiplications.
   - Total cost = $5000 + 10000 = 15000$.

The minimum number of multiplications is $\\min(3500, 15000) = \\mathbf{3500}$.

**Correct Answer: 3500**`
  },

  // ─── Q.8 (NAT) ───
  {
    id: "me-algo-swt-q08",
    difficulty: "easy",
    concept: "Insertion Sort Iterations Tracing",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    text: `What will be the final position of element 20 after the $4^{\\text{th}}$ iteration of the insertion sort on the following array elements?
$$15, 12, 7, 20, 25, 42, 6, 2$$
[Note: Position of $1^{\\text{st}}$ element is considered as 0]`,
    correctAnswerIndex: -1,
    options: [],
    natAnswer: 3,
    natTolerance: 0.05,
    explanation: `### Solution
Initial array (0-indexed):
\`[15], 12, 7, 20, 25, 42, 6, 2\`

- **Iteration 1 (insert 12 into [15]):**
  Array becomes: \`[12, 15], 7, 20, 25, 42, 6, 2\`
- **Iteration 2 (insert 7 into [12, 15]):**
  Array becomes: \`[7, 12, 15], 20, 25, 42, 6, 2\`
- **Iteration 3 (insert 20 into [7, 12, 15]):**
  Array becomes: \`[7, 12, 15, 20], 25, 42, 6, 2\`
- **Iteration 4 (insert 25 into [7, 12, 15, 20]):**
  Array becomes: \`[7, 12, 15, 20, 25], 42, 6, 2\`

Let us check the indices after the $4^{\\text{th}}$ iteration:
- Index 0: 7
- Index 1: 12
- Index 2: 15
- Index 3: 20
- Index 4: 25

The position of element 20 is **3**.

**Correct Answer: 3**`
  },

  // ─── Q.9 (MCQ) ───
  {
    id: "me-algo-swt-q09",
    difficulty: "medium",
    concept: "Sorting Identical Elements Best/Worst Case Complexities",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/algo_swt_q09.png",
    text: `Consider an array of $n$ elements where each element is the same. Based on this, which of the following are true?`,
    options: [
      "Asymptotic running time of bubble sort is O(n).",
      "Asymptotic running time of merge sort is O(n log n).",
      "Asymptotic running time of selection sort is Θ(n²).",
      "Asymptotic running time of insertion sort is Θ(n²)."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
When all $n$ elements in the array are identical:
1. **Bubble Sort with early exit flag:** In the very first pass, no adjacent swaps occur because $A[j] \\not> A[j+1]$. The loop terminates after $n-1$ comparisons. Hence running time is **$O(n)$** $\\implies$ **Statement 1 is True**.
2. **Merge Sort:** Merge sort divides the array in half unconditionally and merges them at every level. Its recurrence is always $T(n) = 2T(n/2) + \\Theta(n) = \\mathbf{\\Theta(n \\log n)}$ $\\implies$ **Statement 2 is True**.
3. **Selection Sort:** Selection sort always scans the entire remaining sub-array to find the minimum element in every pass, requiring $\\frac{n(n-1)}{2}$ comparisons regardless of input data. Hence running time is **$\\Theta(n^2)$** $\\implies$ **Statement 3 is True**.
4. **Insertion Sort:** Each element is compared just once with its immediate predecessor ($A[j] \\ge A[j-1]$) and never shifts. The inner loop terminates in $O(1)$ time for each of the $n-1$ elements. Total time is $\\Theta(n)$, not $\\Theta(n^2)$ $\\implies$ **Statement 4 is False**.

Correct statements: **1, 2, and 3**.

**Correct Answer: Options 1, 2, 3**`
  },

  // ─── Q.10 (SCQ) ───
  {
    id: "me-algo-swt-q10",
    difficulty: "easy",
    concept: "Cycle Detection in Graphs",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Which of the following statements is/are correct?`,
    options: [
      "Prim’s minimum spanning tree algorithm can be used to most efficiently find whether a cycle is present in a given graph.",
      "Breadth first search can be used to most efficiently find whether a cycle is present in a given graph.",
      "Depth first search can be used to most efficiently find whether a cycle is present in a given graph.",
      "Kruskal’s minimum spanning tree algorithm can be used to most efficiently find whether a cycle is present in a given graph."
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- **Depth First Search (DFS)** is the standard and most efficient algorithm to detect cycles in both directed and undirected graphs in linear $\\Theta(|V| + |E|)$ time by detecting **back edges** during the traversal.
- While BFS can detect cycles in undirected graphs, it cannot easily detect cycles in directed graphs.
- MST algorithms (Prim's and Kruskal's) require $O(|E| \\log |V|)$ or $O(|E| \\alpha(|V|))$, which is asymptotically slower than DFS's $O(|V| + |E|)$ linear time.

**Correct Answer: Option 3 (Depth first search)**`
  },

  // ─── Q.11 (SCQ) ───
  {
    id: "me-algo-swt-q11",
    difficulty: "medium",
    concept: "Binary Heap Element Replacement Complexity",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q11.png",
    text: `Consider the function \`MHY(A, i, key)\` which replaces the element at index $i$ with \`key\` in a Max-Heap of size $n$, and restores the heap property. What is the worst-case time complexity of \`MHY(A, i, key)\`?`,
    options: [
      "(a) Θ(log n)",
      "(b) Θ(n)",
      "(c) Θ(n log n)",
      "(d) Θ(1)"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
When replacing $A[i]$ with \`key\`:
- If $\\text{key} > A[i]$, the key might violate the heap property with its ancestors. We call **Heap-Increase-Key**, which bubbles the value up towards the root along a single branch. Height of the tree is $\\lfloor \\log_2 n \\rfloor$, taking $O(\\log n)$ time.
- If $\\text{key} < A[i]$, the key might violate the heap property with its children. We call **Max-Heapify**, which pushes the value down towards the leaves along a single branch, taking $O(\\log n)$ time.
- In both directions, the path traversed is at most the height of the complete binary tree, which is $\\Theta(\\log n)$.

Hence, the worst-case time complexity is **$\\Theta(\\log n)$**.

**Correct Answer: Option 1 ((a))**`
  },

  // ─── Q.12 (SCQ) ───
  {
    id: "me-algo-swt-q12",
    difficulty: "easy",
    concept: "Topological Sort Existence and Uniqueness",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q12.png",
    text: `Which of the following is/are correct?
$S_1$: Topological sort may not be unique.
$S_2$: Topological sorting is not possible if the graph contains undirected edges or cycles.`,
    options: [
      "Only S₁",
      "Only S₂",
      "Both S₁ and S₂",
      "Neither S₁ nor S₂"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- **Statement $S_1$ is True:** A DAG can have multiple valid topological orderings. For example, a graph with two independent vertices $u$ and $v$ without any edge has topological sorts $(u, v)$ and $(v, u)$. A topological sort is unique if and only if the DAG contains a Hamiltonian path.
- **Statement $S_2$ is True:** Topological sorting is strictly defined **only for Directed Acyclic Graphs (DAGs)**. If a graph has a cycle ($u \\to v \\to \\dots \\to u$), no linear ordering can satisfy the precedence condition. Similarly, undirected edges do not define directional precedence.

Therefore, both $S_1$ and $S_2$ are correct.

**Correct Answer: Option 3 (Both S₁ and S₂)**`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-algo-swt-q13",
    difficulty: "medium",
    concept: "Shortest Path Algorithms Applicability",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q13.png",
    text: `Which of the following is/are correct?
$S_1$: Given a weighted directed graph $G = (V, E)$ containing no zero or negative weight edges, Bellman-Ford algorithm can be used to find single source shortest paths.
$S_2$: Dijkstra's algorithm can work correctly for any graph with negative edge weights as long as there is no negative cycle.`,
    options: [
      "Only S₁",
      "Only S₂",
      "Both S₁ and S₂",
      "Neither S₁ nor S₂"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- **Statement $S_1$ is True:** Bellman-Ford algorithm works correctly on any graph with arbitrary edge weights (positive, zero, or negative), provided there are no negative-weight cycles reachable from the source. In particular, for graphs with strictly positive weights, Bellman-Ford correctly finds all shortest paths (though Dijkstra is faster).
- **Statement $S_2$ is False:** Dijkstra's greedy strategy assumes that adding edges can only increase path weight. With negative edge weights (even without negative cycles), Dijkstra can finalize a vertex with an incorrect distance and never reconsider it, producing wrong results.

Therefore, only $S_1$ is correct.

**Correct Answer: Option 1 (Only S₁)**`
  },

  // ─── Q.14 (NAT) ───
  {
    id: "me-algo-swt-q14",
    difficulty: "easy",
    concept: "Longest Common Subsequence Calculation",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    text: `Given are two sequences $X$ and $Y$ respectively as:
$$X = \\text{\"ABCDEGH\"} \\quad \\text{and} \\quad Y = \\text{\"ADEFHR\"}$$
The length of the longest common subsequence (LCS) is:`,
    correctAnswerIndex: -1,
    options: [],
    natAnswer: 4,
    natTolerance: 0.05,
    explanation: `### Solution
Let $X = \\text{A B C D E G H}$ (length 7) and $Y = \\text{A D E F H R}$ (length 6).
Let us find common subsequences:
- 'A' matches at $X[0], Y[0]$
- 'D' matches at $X[3], Y[1]$
- 'E' matches at $X[4], Y[2]$
- 'H' matches at $X[6], Y[4]$

The common subsequence formed is $\\text{\"ADEH\"}$ of length **4**.
No common subsequence of length $\\ge 5$ can be formed because $Y$ only contains characters {A, D, E, F, H, R}, and among them, {F, R} do not appear in $X$.

Length of LCS = **4**.

**Correct Answer: 4**`
  },

  // ─── Q.15 (SCQ) ───
  {
    id: "me-algo-swt-q15",
    difficulty: "easy",
    concept: "Master Theorem for Divide-and-Conquer Recurrences",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q15.png",
    text: `Which one of the following correctly determines the solution of the recurrence relation with $T(1) = 1$:
$$T(n) = 4T\\left(\\frac{n}{2}\\right) + \\log n$$`,
    options: [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(n log n)"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Given:
$$T(n) = 4T\\left(\\frac{n}{2}\\right) + \\log n$$
Using Master Theorem $T(n) = aT(n/b) + f(n)$:
- $a = 4, \\quad b = 2$
- $n^{\\log_b a} = n^{\\log_2 4} = n^2$
- $f(n) = \\log n$

Compare $f(n)$ with $n^{\\log_b a}$:
$$f(n) = \\log n = O(n^{2 - \\epsilon}) \\quad \\text{for any } \\epsilon \\in (0, 2)$$

This falls under **Case 1 of Master Theorem**:
$$T(n) = \\Theta(n^{\\log_b a}) = \\Theta(n^2) = \\mathbf{O(n^2)}$$

**Correct Answer: Option 3 (O(n²))**`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-algo-swt-q16",
    difficulty: "medium",
    concept: "Nested Loops Geometric Series Complexity",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q16.png",
    text: `What is the time complexity of \`fun()\`?
\`\`\`c
int fun(int n)
{
    int count = 0;
    for (int i = n; i > 0; i /= 2)
        for (int j = 0; j < i; j++)
            count += 1;
    return count;
}
\`\`\``,
    options: [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(n log (n)²)"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us trace the values of $i$ in the outer loop:
- Iteration 1: $i = n$ $\\implies$ inner loop runs $n$ times.
- Iteration 2: $i = n/2$ $\\implies$ inner loop runs $n/2$ times.
- Iteration 3: $i = n/4$ $\\implies$ inner loop runs $n/4$ times.
- $\\dots$
- Last iteration: $i = 1$ $\\implies$ inner loop runs 1 time.

Total number of operations:
$$\\text{Total} = n + \\frac{n}{2} + \\frac{n}{4} + \\dots + 1 = n \\left(1 + \\frac{1}{2} + \\frac{1}{4} + \\dots\\right)$$
This is a decreasing geometric series with common ratio $r = 1/2$:
$$\\sum_{k=0}^{\\infty} \\left(\\frac{1}{2}\\right)^k = \\frac{1}{1 - 1/2} = 2$$
Therefore:
$$\\text{Total} < 2n = \\mathbf{O(n)}$$

**Correct Answer: Option 1 (O(n))**`
  },

  // ─── Q.17 (MCQ) ───
  {
    id: "me-algo-swt-q17",
    difficulty: "medium",
    concept: "Kruskal's Algorithm Tracing and MST Weight",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/algo_swt_q17.png",
    text: `Consider the following graph $G$:
Which of the following options are correct?`,
    options: [
      "The sum of the weights of an spanning tree formed using Kruskal’s algorithm on G is 39.",
      "The set of edges in the spanning tree of G using Kruskal’s algorithm are (A, D), (C, E), (D, B), (A, B), (B, E) and (G, E).",
      "The set of edges in the spanning tree of G using Kruskal’s algorithm are (A, D), (C, E), (D, F), (A, B), (B, E) and (G, E).",
      "The sum of the weights of the spanning tree formed using Kruskal’s algorithm on G is 35."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
Graph $G$ has 7 vertices: {A, B, C, D, E, F, G}.
List all edges sorted by weight:
1. $(A, D)$ weight 5 $\\to$ Pick (components: {A, D})
2. $(C, E)$ weight 5 $\\to$ Pick (components: {A, D}, {C, E})
3. $(D, F)$ weight 6 $\\to$ Pick (components: {A, D, F}, {C, E})
4. $(A, B)$ weight 7 $\\to$ Pick (components: {A, B, D, F}, {C, E})
5. $(B, E)$ weight 7 $\\to$ Pick (connects both components $\\to$ {A, B, C, D, E, F})
6. $(B, C)$ weight 8 $\\to$ Reject (creates cycle B-E-C-B)
7. $(E, F)$ weight 8 $\\to$ Reject (creates cycle)
8. $(E, G)$ weight 9 $\\to$ Pick (connects G $\\to$ all 7 vertices connected)

Total edges chosen: **(A, D), (C, E), (D, F), (A, B), (B, E), (G, E)** (Statement 3 is True).
Total weight of MST:
$$5 + 5 + 6 + 7 + 7 + 9 = \\mathbf{39} \\quad \\text{(Statement 1 is True)}$$

Statements 1 and 3 are correct.

**Correct Answer: Options 1 and 3**`
  },

  // ─── Q.18 (SCQ) ───
  {
    id: "me-algo-swt-q18",
    difficulty: "medium",
    concept: "Max-Heap Deletions and Leaf Nodes Sum",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider the already built heap (max heap):
$$33, 27, 25, 15, 20, 17, 23, 13, 5$$
After 2 maximum element deletions, the sum of leaf node values is:`,
    options: [
      "23",
      "50",
      "48",
      "17"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Initial 1-indexed heap of size 9:
- Index 1: 33
- Index 2: 27 (children 4: 15, 5: 20)
- Index 3: 25 (children 6: 17, 7: 23)
- Index 4: 15 (children 8: 13, 9: 5)
- Index 5: 20
- Index 6: 17
- Index 7: 23
- Index 8: 13
- Index 9: 5

**Deletion 1 (Delete root 33):**
- Replace root with last element (5 at index 9). Heap size = 8.
- Max-heapify from root:
  - Children of 1 are 27 and 25. Swap 5 with 27 $\\to$ index 1 is 27, index 2 is 5.
  - Children of 2 are 15 and 20. Swap 5 with 20 $\\to$ index 2 is 20, index 5 is 5.
- Array after Deletion 1: \`[27, 20, 25, 15, 5, 17, 23, 13]\`

**Deletion 2 (Delete root 27):**
- Replace root with last element (13 at index 8). Heap size = 7.
- Max-heapify from root:
  - Children of 1 are 20 and 25. Swap 13 with 25 $\\to$ index 1 is 25, index 3 is 13.
  - Children of 3 are 17 and 23. Swap 13 with 23 $\\to$ index 3 is 23, index 7 is 13.
- Array after Deletion 2: \`[25, 20, 23, 15, 5, 17, 13]\`

In a heap of size $N = 7$:
- Internal nodes are indices $1$ to $\\lfloor 7/2 \\rfloor = 3$ (values 25, 20, 23).
- Leaf nodes are indices $\\lfloor 7/2 \\rfloor + 1 = 4$ to $7$:
  - Index 4: 15
  - Index 5: 5
  - Index 6: 17
  - Index 7: 13

Sum of leaf node values = $15 + 5 + 17 + 13 = \\mathbf{50}$.

**Correct Answer: Option 2 (50)**`
  },

  // ─── Q.19 (SCQ) ───
  {
    id: "me-algo-swt-q19",
    difficulty: "hard",
    concept: "LCS Recursive Tree Combinatorics",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q19.png",
    text: `We are given two strings: String $S$ of length $n$ and string $T$ of length $m$ for the LCS problem, we have produced the following exponential time recursive program:
\`\`\`c
LCS (S, n, T, m)
{
    if (n == 0 || m == 0) return 0;
    if (S[n] == T[m])
        result = 1 + LCS (S, n - 1, T, m - 1);
    else
        result = max (LCS (S, n - 1, T, m), LCS (S, n, T, m - 1));
    return result;
}
\`\`\`
Then the number of times in worst case \`LCS(S, 1, T, 1)\` is recursively called equals:`,
    options: [
      "ⁿ⁺ᵐ⁻²Cₘ₋₁",
      "ⁿ⁺ᵐ⁺¹Cₘ₋₂",
      "ⁿ⁺ᵐ⁺²Cₘ",
      "ⁿ⁺ᵐCₘ₋₁"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- In the worst case, $S[i] \\ne T[j]$ for all characters.
- From call state $(n, m)$, the function branches to $(n-1, m)$ and $(n, m-1)$.
- To reach the call $(1, 1)$ starting from $(n, m)$, the first index must be decremented $(n - 1)$ times, and the second index must be decremented $(m - 1)$ times.
- Each decrement corresponds to a step in a 2D grid/lattice from $(n, m)$ to $(1, 1)$ moving only left or down.
- The total number of steps is:
  $$(n - 1) + (m - 1) = n + m - 2$$
- The number of distinct sequences of choosing which $(m - 1)$ of the $(n + m - 2)$ steps are decrements in $m$ is given by the binomial coefficient:
  $$\\binom{(n - 1) + (m - 1)}{m - 1} = \\mathbf{\\binom{n + m - 2}{m - 1}}$$

**Correct Answer: Option 1 (ⁿ⁺ᵐ⁻²Cₘ₋₁)**`
  },

  // ─── Q.20 (NAT) ───
  {
    id: "me-algo-swt-q20",
    difficulty: "medium",
    concept: "Asymptotic Constant Factor Scaling",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    text: `Assume we are given 2 algorithms $A_1$ and $A_2$. For an input size $n$, algorithm $A_1$ takes $\\Theta(n)$ time and $A_2$ takes $\\Theta(n^2)$ time respectively. For $n = 16$, algorithm $A_1$ takes 48 seconds; while $A_2$ takes 512 seconds respectively. Let $T(A_1)$ and $T(A_2)$ denote the time taken by $A_1$ and $A_2$ when made to run on an input size $n = 64$ respectively. Then the value of $T(A_2) - T(A_1)$ will be equal to:`,
    correctAnswerIndex: -1,
    options: [],
    natAnswer: 8000,
    natTolerance: 0.05,
    explanation: `### Solution
Let $T_1(n) = c_1 n$ and $T_2(n) = c_2 n^2$.
- For $n = 16$:
  $$T_1(16) = c_1 \\times 16 = 48 \\implies c_1 = \\frac{48}{16} = 3$$
  $$T_2(16) = c_2 \\times 16^2 = 512 \\implies 256 c_2 = 512 \\implies c_2 = 2$$
- For $n = 64$:
  $$T(A_1) = c_1 \\times 64 = 3 \\times 64 = 192 \\text{ seconds}$$
  $$T(A_2) = c_2 \\times 64^2 = 2 \\times 4096 = 8192 \\text{ seconds}$$

Subtracting the two running times:
$$T(A_2) - T(A_1) = 8192 - 192 = \\mathbf{8000}$$

**Correct Answer: 8000**`
  },

  // ─── Q.21 (MCQ) ───
  {
    id: "me-algo-swt-q21",
    difficulty: "medium",
    concept: "Asymptotic Notations Formal Properties",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/algo_swt_q21.png",
    text: `Consider three functions $f(n), g(n)$ and $h(n)$ such that $f(n) \\in \\Theta(g(n))$ and $g(n) \\in O(h(n))$. Which of the following must be correct?`,
    options: [
      "f(n) ∈ O(h(n))",
      "h(n) ∈ Ω(f(n))",
      "f(n) ∈ Θ(h(n))",
      "h(n) ∈ o(f(n))"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    explanation: `### Solution
Given:
1. $f(n) \\in \\Theta(g(n)) \\implies f(n) = O(g(n))$ and $f(n) = \\Omega(g(n))$.
2. $g(n) \\in O(h(n))$.

- **Statement 1 is True:** By transitivity of Big-$O$: $f(n) \\in O(g(n))$ and $g(n) \\in O(h(n)) \\implies f(n) \\in O(h(n))$.
- **Statement 2 is True:** By duality of Big-$O$ and Big-$\\Omega$: $f(n) \\in O(h(n)) \\iff h(n) \\in \\Omega(f(n))$.
- **Statement 3 is False:** Counterexample: $f(n) = n, g(n) = n, h(n) = n^2$. Here $f \\in \\Theta(g)$ and $g \\in O(h)$, but $f(n) \\notin \\Theta(h(n))$.
- **Statement 4 is False:** Since $h(n)$ is an upper bound on $f(n)$, $h(n)$ cannot be strictly asymptotically smaller than $f(n)$.

Statements 1 and 2 must be correct.

**Correct Answer: Options 1 and 2**`
  },

  // ─── Q.22 (SCQ) ───
  {
    id: "me-algo-swt-q22",
    difficulty: "medium",
    concept: "Comparison and Swap Counts in Elementary Sorting",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q22.png",
    text: `Match the following: [Sorting is done for an array of $n$ elements]
**List-I:**
A. Best case comparisons in selection sort
B. Worst case swaps in bubble sort
C. Worst case comparisons in insertion sort
D. Best case comparisons in insertion sort
E. Best case swaps in bubble sort

**List-II:**
1. $n - 1$
2. $n$
3. $n^2$
4. $\\frac{n(n-1)}{2}$
5. $0$`,
    options: [
      "(a) A-4, B-4, C-3, D-2, E-5",
      "(b) A-4, B-3, C-4, D-2, E-4",
      "(c) A-3, B-3, C-4, D-1, E-4",
      "(d) A-4, B-4, C-4, D-1, E-5"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
- **A. Best case comparisons in selection sort:** Selection sort always performs $\\sum_{i=1}^{n-1} (n - i) = \\frac{n(n-1)}{2}$ comparisons $\\to$ **4**.
- **B. Worst case swaps in bubble sort:** In reverse sorted order, every pair of elements is inverted, requiring $\\frac{n(n-1)}{2}$ swaps $\\to$ **4**.
- **C. Worst case comparisons in insertion sort:** In reverse sorted order, the $i$-th element is compared $i$ times, total $\\sum_{i=1}^{n-1} i = \\frac{n(n-1)}{2}$ comparisons $\\to$ **4**.
- **D. Best case comparisons in insertion sort:** In an already sorted array, each element is compared once with its predecessor: $n - 1$ comparisons $\\to$ **1**.
- **E. Best case swaps in bubble sort:** When the array is already sorted, 0 swaps occur $\\to$ **5**.

Matching: **A-4, B-4, C-4, D-1, E-5**, which is code **(d)**.

**Correct Answer: Option 4 ((d))**`
  },

  // ─── Q.23 (SCQ) ───
  {
    id: "me-algo-swt-q23",
    difficulty: "medium",
    concept: "Solving Various Recurrence Relations",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q23.png",
    text: `Match List-I with List-II and select the correct answer using the codes given below the lists:
**List-I:**
A. $T(n) = T\\left(\\frac{n}{2}\\right) + c$
B. $T(n) = T(n - 1) + \\log(n)$
C. $T(n) = 2T\\left(\\frac{n}{2} + 8\\right) + n$
D. $T(n) = T(n - 2) + n^2$

**List-II:**
1. $O(\\log n)$
2. $O(n^3)$
3. $O(n \\log n)$
4. $O(n)$`,
    options: [
      "(a) A-1, B-3, C-2, D-4",
      "(b) A-1, B-3, C-3, D-2",
      "(c) A-1, B-3, C-4, D-2",
      "(d) A-1, B-3, C-3, D-4"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **A. $T(n) = T(n/2) + c$:** Binary search recurrence. By Master Theorem, $T(n) = \\Theta(\\log n) = O(\\log n)$ $\\to$ **1**.
- **B. $T(n) = T(n-1) + \\log n$:** Unrolling gives $\\sum_{k=1}^n \\log k = \\log(n!) = \\Theta(n \\log n) = O(n \\log n)$ $\\to$ **3**.
- **C. $T(n) = 2T(n/2 + 8) + n$:** The $+8$ constant is asymptotically negligible for large $n$. Master Theorem Case 2 gives $T(n) = \\Theta(n \\log n) = O(n \\log n)$ $\\to$ **3**.
- **D. $T(n) = T(n-2) + n^2$:** Unrolling gives $\\sum_{k=1}^{n/2} (2k)^2 \\approx \\frac{4}{3} (n/2)^3 = \\Theta(n^3) = O(n^3)$ $\\to$ **2**.

Matching: **A-1, B-3, C-3, D-2**, which is code **(b)**.

**Correct Answer: Option 2 ((b))**`
  },

  // ─── Q.24 (SCQ) ───
  {
    id: "me-algo-swt-q24",
    difficulty: "hard",
    concept: "Akra-Bazzi and Unequal Subproblem Recurrences",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q24.png",
    text: `Consider the following recurrence relation:
$$T(n) = T\\left(\\frac{n}{2}\\right) + T\\left(\\frac{3n}{4}\\right) + n; \\quad T(1) = 1$$
Solve the above recurrence relation asymptotically and select the correct option:`,
    options: [
      "O(n^(1 + log_{5/4}(4/3)))",
      "O(n^(1 + log_{5/4}(3/4)))",
      "O(n^(1 + log_{3/4}(5/4)))",
      "O(n^(1 + log_{4/3}(5/4)))"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Consider the recursion tree for:
$$T(n) = T(n/2) + T(3n/4) + n$$
- Level 0 cost: $n$
- Level 1 cost: $\\frac{n}{2} + \\frac{3n}{4} = \\frac{5}{4}n$
- Level 2 cost: $\\left(\\frac{5}{4}\\right)^2 n$
- Level $k$ cost: $\\left(\\frac{5}{4}\\right)^k n$

Since the growth factor per level is $r = 5/4 > 1$, the costs grow exponentially towards the leaves!
The longest path to a leaf is governed by the larger subproblem $3n/4$:
$$\\left(\\frac{3}{4}\\right)^k n = 1 \\implies k_{\\max} = \\log_{4/3} n$$

Summing the geometric progression up to level $k_{\\max}$:
$$\\text{Total Cost} = \\sum_{k=0}^{\\log_{4/3} n} n \\left(\\frac{5}{4}\\right)^k = n \\cdot \\Theta\\left(\\left(\\frac{5}{4}\\right)^{\\log_{4/3} n}\\right)$$

Using the logarithmic power identity $a^{\\log_b c} = c^{\\log_b a}$:
$$\\left(\\frac{5}{4}\\right)^{\\log_{4/3} n} = n^{\\log_{4/3}(5/4)}$$
Therefore:
$$\\text{Total Cost} = \\Theta\\left(n \\cdot n^{\\log_{4/3}(5/4)}\\right) = \\mathbf{O\\left(n^{1 + \\log_{4/3}(5/4)}\\right)}$$

**Correct Answer: Option 4**`
  },

  // ─── Q.25 (SCQ) ───
  {
    id: "me-algo-swt-q25",
    difficulty: "medium",
    concept: "Dynamic MST Edge Weight Increase Verification",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q25.png",
    text: `Let $G = (V, E)$ be a connected, weighted, undirected graph with $|V|$ vertices and $|E|$ edges, stored using adjacency lists. Let $T$ be a Minimum Spanning Tree (MST) of $G$.
Suppose the weight of an edge $e = (x, y)$, where $e \\in T$, is increased to a new value $w'$, while all other edge weights remain unchanged.

The worst-case time complexity to determine whether $T$ is still a Minimum Spanning Tree of the updated graph is:`,
    options: [
      "Θ(|V|)",
      "Θ(|E|)",
      "Θ(|E| log |V|)",
      "Θ(|V| · |E|)"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
1. When edge $e = (x, y)$ has its weight increased, we temporarily remove $e$ from $T$.
2. Removing $e$ divides the tree $T$ into two disjoint connected components, say $S$ and $V \\setminus S$.
3. We can identify these two sets of vertices by running a BFS or DFS on $T \\setminus \\{e\\}$, which takes $O(|V|)$ time since $T$ has $|V| - 1$ edges.
4. By the **Cut Property**, $T$ remains an MST if and only if no edge crossing the cut between $S$ and $V \\setminus S$ has a weight strictly less than $w'$.
5. To check this, we scan through all edges in $G$: for each edge $(u, v) \\in E$, if $u \\in S$ and $v \\in V \\setminus S$, we check if $\\text{weight}(u, v) < w'$.
6. Scanning all edges in the adjacency list takes $O(|V| + |E|) = \\Theta(|E|)$ time since the graph is connected ($|E| \\ge |V| - 1$).
7. Thus, the total worst-case time complexity is $O(|V|) + O(|E|) = \\mathbf{\\Theta(|E|)}$.

**Correct Answer: Option 2 (Θ(|E|))**`
  },

  // ─── Q.26 (MCQ) ───
  {
    id: "me-algo-swt-q26",
    difficulty: "medium",
    concept: "Properties of BFS and DFS Trees",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `Which of the following statements regarding BFS and DFS on a simple graph $G$ is/are correct?`,
    options: [
      "If (u, v) is a non-tree edge with respect to a BFS tree rooted at s, then the levels of u and v differ by at most 1.",
      "If (u, v) is a back edge in DFS traversal, then u is a descendant of v.",
      "If (u, v) is a back edge in DFS traversal of a directed graph, then the graph contains a cycle.",
      "Both BFS and DFS can be used to find all connected components of G."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2, 3],
    explanation: `### Solution
- **Statement 1 is True:** In a BFS tree on an undirected graph, any cross / non-tree edge can only connect vertices at the same level (difference 0) or at adjacent levels (difference 1). A level difference $\\ge 2$ is impossible because BFS visits all immediate neighbors at level $d+1$ before moving to $d+2$.
- **Statement 2 is True:** In DFS traversal, a back edge $(u, v)$ connects a vertex $u$ to an ancestor $v$ in the DFS tree. Hence, $u$ is a descendant of $v$.
- **Statement 3 is True:** A back edge in a directed graph points from a node to an ancestor, completing a directed cycle with the tree path from $v$ to $u$. By the White Path Theorem, a directed graph has a cycle if and only if DFS yields at least one back edge.
- **Statement 4 is True:** Both BFS and DFS discover the entire connected component of a starting vertex in undirected graphs. Wrapping them in an outer loop over all vertices identifies all connected components.

All statements 1, 2, 3, and 4 are correct!

**Correct Answer: Options 1, 2, 3, 4**`
  },

  // ─── Q.27 (NAT) ───
  {
    id: "me-algo-swt-q27",
    difficulty: "hard",
    concept: "Stooge Sort Recurrence and Complexity",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    imageUrl: "/images/made_easy/algo_swt_q27.png",
    text: `Consider the following sorting algorithm (Stooge Sort):
\`\`\`c
Sorting (A, low, high)
{
    if (low == high) return;
    if (low + 1 == high)
    {
        if (A[low] > A[high])
            swap (A[low], A[high]);
        return;
    }
    t1 = low + (high - low + 1) / 3;
    t2 = low + 2 * (high - low + 1) / 3;
    sorting (A, low, t2);
    sorting (A, t1, high);
    sorting (A, low, t2);
}
\`\`\`
The running time of \`sorting(A, 1, n)\` function is $\\Theta(n^x)$. The value of $x + 3$ is ________. [Use value of $x$ upto 1 decimal place]`,
    correctAnswerIndex: -1,
    options: [],
    natAnswer: 5.7,
    natTolerance: 0.05,
    explanation: `### Solution
This is the classic **Stooge Sort** algorithm:
- The input size is $n = \\text{high} - \\text{low} + 1$.
- The algorithm divides the array into three thirds and recursively sorts:
  1. The first two-thirds: size $\\approx 2n/3$.
  2. The last two-thirds: size $\\approx 2n/3$.
  3. The first two-thirds again: size $\\approx 2n/3$.
- All other work inside each call is $O(1)$.

The recurrence relation is:
$$T(n) = 3T\\left(\\frac{2n}{3}\\right) + \\Theta(1)$$

Using Master Theorem with $a = 3$ and $b = 3/2 = 1.5$:
$$T(n) = \\Theta\\left(n^{\\log_{3/2} 3}\\right)$$
Thus:
$$x = \\log_{1.5} 3 = \\frac{\\ln 3}{\\ln 1.5} = \\frac{1.098612}{0.405465} \\approx 2.7095 \\approx 2.7$$

The question asks for the value of $x + 3$:
$$x + 3 = 2.7 + 3 = \\mathbf{5.7}$$

**Correct Answer: 5.7**`
  },

  // ─── Q.28 (NAT) ───
  {
    id: "me-algo-swt-q28",
    difficulty: "medium",
    concept: "Fractional Knapsack Numerical Calculation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    imageUrl: "/images/made_easy/algo_swt_q28.png",
    text: `Consider the 5 items along with their respective weights and prices:
| Items $I$ | $I_1$ | $I_2$ | $I_3$ | $I_4$ | $I_5$ |
|---|---|---|---|---|---|
| Weight $W$ | 20 | 15 | 56 | 18 | 45 |
| Prices $P$ | 120 | 105 | 78 | 54 | 75 |

The Knapsack has capacity $C = 72$. The maximum profit that can be achieved using fractional Knapsack is ________. (Upto 2 decimal places)`,
    correctAnswerIndex: -1,
    options: [],
    natAnswer: 310.67,
    natTolerance: 0.05,
    explanation: `### Solution
Compute price-to-weight ratio $P_i / W_i$ for each item:
- $I_1: 120 / 20 = 6.00$
- $I_2: 105 / 15 = 7.00$
- $I_3: 78 / 56 \\approx 1.39$
- $I_4: 54 / 18 = 3.00$
- $I_5: 75 / 45 = 5/3 \\approx 1.67$

Sort items in descending order of ratio:
1. $I_2$ (ratio 7.00): take full weight 15 $\\implies$ capacity remaining $= 72 - 15 = 57$, profit $= 105$.
2. $I_1$ (ratio 6.00): take full weight 20 $\\implies$ capacity remaining $= 57 - 20 = 37$, profit $= 105 + 120 = 225$.
3. $I_4$ (ratio 3.00): take full weight 18 $\\implies$ capacity remaining $= 37 - 18 = 19$, profit $= 225 + 54 = 279$.
4. $I_5$ (ratio 1.67): weight 45 exceeds remaining capacity 19 $\\implies$ take fraction $\\frac{19}{45}$ of $I_5$.
   $$\\text{Profit from } I_5 = \\frac{19}{45} \\times 75 = 19 \\times \\frac{5}{3} = \\frac{95}{3} \\approx 31.6667$$

Total Maximum Profit:
$$\\text{Total} = 279 + \\frac{95}{3} = \\frac{837 + 95}{3} = \\frac{932}{3} = \\mathbf{310.67}$$

**Correct Answer: 310.67**`
  },

  // ─── Q.29 (NAT) ───
  {
    id: "me-algo-swt-q29",
    difficulty: "medium",
    concept: "Huffman Coding Average Word Length",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    imageUrl: "/images/made_easy/algo_swt_q29.png",
    text: `A language uses an alphabet of six letters, $\\{a, b, c, d, e, f\\}$. The relative frequency of use of each letter of the alphabet in the language is as given below:
- $a: 0.19$
- $b: 0.05$
- $c: 0.17$
- $d: 0.08$
- $e: 0.40$
- $f: 0.11$

What would be the average length of the encoded words of the language using Huffman code?`,
    correctAnswerIndex: -1,
    options: [],
    natAnswer: 2.33,
    natTolerance: 0.05,
    explanation: `### Solution
Sort characters by frequency:
$$b: 0.05, \\quad d: 0.08, \\quad f: 0.11, \\quad c: 0.17, \\quad a: 0.19, \\quad e: 0.40$$

**Step-by-step Huffman tree construction:**
1. Combine smallest two $b(0.05)$ and $d(0.08)$ $\\to$ internal node $n_1$ with weight $0.13$.
   Remaining: $f(0.11), n_1(0.13), c(0.17), a(0.19), e(0.40)$
2. Combine smallest two $f(0.11)$ and $n_1(0.13)$ $\\to$ internal node $n_2$ with weight $0.24$.
   Remaining: $c(0.17), a(0.19), n_2(0.24), e(0.40)$
3. Combine smallest two $c(0.17)$ and $a(0.19)$ $\\to$ internal node $n_3$ with weight $0.36$.
   Remaining: $n_2(0.24), n_3(0.36), e(0.40)$
4. Combine smallest two $n_2(0.24)$ and $n_3(0.36)$ $\\to$ internal node $n_4$ with weight $0.60$.
   Remaining: $e(0.40), n_4(0.60)$
5. Combine $e(0.40)$ and $n_4(0.60)$ $\\to$ root with weight $1.00$.

**Codeword lengths:**
- $e$: depth 1 $\\implies$ length = 1
- $c$: depth 3 $\\implies$ length = 3
- $a$: depth 3 $\\implies$ length = 3
- $f$: depth 3 $\\implies$ length = 3
- $b$: depth 4 $\\implies$ length = 4
- $d$: depth 4 $\\implies$ length = 4

Average codeword length $L = \\sum f_i \\cdot l_i$:
$$L = (0.40 \\times 1) + (0.19 \\times 3) + (0.17 \\times 3) + (0.11 \\times 3) + (0.08 \\times 4) + (0.05 \\times 4)$$
$$L = 0.40 + 0.57 + 0.51 + 0.33 + 0.32 + 0.20 = \\mathbf{2.33}$$

**Correct Answer: 2.33**`
  },

  // ─── Q.30 (NAT) ───
  {
    id: "me-algo-swt-q30",
    difficulty: "medium",
    concept: "Shortest Path in Directed Graph",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    imageUrl: "/images/made_easy/algo_swt_q30.png",
    text: `Let $G$ be the directed, weighted graph shown below.
What is the cost of the shortest path from $A$ to $E$?`,
    correctAnswerIndex: -1,
    options: [],
    natAnswer: 84,
    natTolerance: 0.05,
    explanation: `### Solution
Let us trace all directed paths from source $A$ to destination $E$:
1. Note the incoming edges to destination $E$:
   - The only directed edge entering $E$ is from $F$ with weight 15: $(F \\to E) = 15$.
   - Thus, any path from $A$ to $E$ must end with the edge $F \\to E$.
2. To reach $F$, incoming edges to $F$ are:
   - From $C$ with weight 10: $(C \\to F) = 10$.
   - From $D$ with weight 70: $(D \\to F) = 70$.
3. To reach $C$, incoming edges to $C$ are:
   - Directly from $A$: $(A \\to C) = 90$.
   - From $D$: $(D \\to C) = 12$.
4. To reach $D$, incoming edge from $B$:
   - $(B \\to D) = 41$.
5. From source $A$ to $B$:
   - $(A \\to B) = 6$.

Let us evaluate the candidate paths:
- **Path 1:** $A \\to B \\to D \\to C \\to F \\to E$:
  $$\\text{Cost} = 6 + 41 + 12 + 10 + 15 = \\mathbf{84}$$
- **Path 2:** $A \\to B \\to D \\to F \\to E$:
  $$\\text{Cost} = 6 + 41 + 70 + 15 = 132$$
- **Path 3:** $A \\to C \\to F \\to E$:
  $$\\text{Cost} = 90 + 10 + 15 = 115$$

The minimum cost is **84**.

**Correct Answer: 84**`
  },

  // ─── Q.31 (SCQ) ───
  {
    id: "me-algo-swt-q31",
    difficulty: "medium",
    concept: "Inversions in Array and its Reversal",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q31.png",
    text: `Let $A$ be an array of size $n$ containing distinct elements. Let $I(A)$ denote the number of inversions in $A$, i.e., the number of index pairs $(i, j)$ such that $i < j$ and $A[i] > A[j]$. Let $A^R$ denote the array obtained by reversing $A$.
Which of the following statements is always correct?`,
    options: [
      "I(A) + I(Aᴿ) = n(n - 1) / 2",
      "I(A) = I(Aᴿ)",
      "I(A) + I(Aᴿ) = n",
      "I(A) · I(Aᴿ) = n!"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- The total number of distinct index pairs $(i, j)$ with $i < j$ in an array of size $n$ is:
  $$\\binom{n}{2} = \\frac{n(n-1)}{2}$$
- Since all elements in $A$ are distinct, for any two elements $x$ and $y$, either $x > y$ or $y > x$.
- In the original array $A$, if the pair forms an inversion (the larger element appears first), then when the array is reversed to $A^R$, their order is swapped, so the smaller element now appears first, meaning it is **not** an inversion in $A^R$.
- Conversely, if the pair did not form an inversion in $A$, it **will** form an inversion in $A^R$.
- Therefore, every one of the $\\frac{n(n-1)}{2}$ pairs is an inversion in exactly one of $A$ or $A^R$.
- Hence:
  $$I(A) + I(A^R) = \\mathbf{\\frac{n(n-1)}{2}}$$

**Correct Answer: Option 1 (I(A) + I(Aᴿ) = n(n - 1) / 2)**`
  },

  // ─── Q.32 (SCQ) ───
  {
    id: "me-algo-swt-q32",
    difficulty: "hard",
    concept: "DFS Traversal Validity Verification",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q32.png",
    text: `Consider the following graph:
Which does NOT represent a depth first search (DFS) sequence for the above graph?`,
    options: [
      "12475386",
      "12685437",
      "12453867",
      "12458637"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Let us check the adjacency relationships in the given undirected graph:
- 1 is adjacent to {2, 5}
- 2 is adjacent to {1, 4, 6}
- 3 is adjacent ONLY to {5}
- 4 is adjacent to {2, 5, 7, 8}
- 5 is adjacent to {1, 3, 4, 8}
- 6 is adjacent to {2, 8}
- 7 is adjacent ONLY to {4}
- 8 is adjacent to {4, 5, 6}

Let us trace **Option 2: 1 2 6 8 5 4 3 7**:
1. $1 \\to 2 \\to 6 \\to 8 \\to 5 \\to 4$.
2. At vertex 4, the unvisited neighbors of 4 are {7} (since 2, 5, 8 are already visited).
3. Notice that vertex 3 is ONLY adjacent to 5; vertex 3 is NOT an edge neighbor of 4!
4. In DFS, you cannot backtrack from a vertex $u$ while it still has unvisited adjacent neighbors.
5. Since 7 is an unvisited neighbor of 4, DFS MUST visit 7 before backtracking from 4.
6. Therefore, jumping from 4 to 3 (which requires backtracking to 5 without visiting 7) violates the fundamental definition of Depth First Search.

Hence, **\`12685437\` is NOT a valid DFS sequence**.

**Correct Answer: Option 2 (12685437)**`
  },

  // ─── Q.33 (SCQ) ───
  {
    id: "me-algo-swt-q33",
    difficulty: "easy",
    concept: "Bubble Sort Inner Loop Condition",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/algo_swt_q33.png",
    text: `Consider the following bubble sort function:
\`\`\`
bubble sort (A)
{
    for i <- 1 to length[A]
        do for j <- length[A] down to i + 1
            do if (X) then exchange A[j] <-> A[j - 1]
}
\`\`\`
What is the missing statement at $X$, if the bubble sort function is implemented correctly to sort the elements in increasing order?`,
    options: [
      "A[j] > A[j - 1]",
      "A[j] < A[j - 1]",
      "A[j] = A[j - 1]",
      "A[j] ≠ A[j - 1]"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- The inner loop iterates backwards from $j = \\text{length}[A]$ down to $i + 1$.
- To sort the array in increasing (ascending) order, smaller elements should float (bubble up) to the beginning (towards smaller indices $i$).
- In comparing adjacent elements $A[j]$ and $A[j - 1]$: if the element at higher index $j$ is strictly smaller than the element at lower index $j - 1$ (i.e., $A[j] < A[j - 1]$), exchanging them places the smaller element at $j - 1$.
- By the end of the inner loop, the minimum element of the remaining unsorted sub-array has bubbled up into position $i$.
- Therefore, the correct condition at $X$ is **$A[j] < A[j - 1]$**.

**Correct Answer: Option 2 (A[j] < A[j - 1])**`
  }
];

export const MADE_EASY_ALGO_SWT_CHAPTER: Chapter = {
  id: "algo-gate-2027-swt",
  name: "GATE 2027 CS SUBJECT TEST - Algorithms",
  description: "Made Easy GATE 2027 Subject Test: Asymptotic Analysis, Recurrences, Sorting, D&C, Greedy, DP, Graph Algorithms & Complexities (33 Questions)",
  questions: MADE_EASY_ALGO_SWT_QUESTIONS
};
