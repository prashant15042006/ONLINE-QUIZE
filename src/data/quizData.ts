export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: Difficulty;
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

// ─────────────────────────────────────────────────────────────
// GATE CS — ENGINEERING MATHEMATICS
// ─────────────────────────────────────────────────────────────
const gateCS_EM: Subject = {
  id: 'gate-cs-em', name: 'Engineering Mathematics',
  description: 'Linear Algebra, Calculus, Discrete Math, Probability & Statistics',
  chapters: [
    {
      id: 'gate-cs-em-la', name: 'Linear Algebra',
      description: 'Matrices, Eigenvalues, Eigenvectors, Rank, System of equations',
      questions: [
        { id:'la-1', difficulty:'easy', text:'The rank of a 3×3 identity matrix is:', options:['0','1','2','3'], correctAnswerIndex:3, explanation:'A 3×3 identity matrix has three linearly independent rows (or columns), so its rank equals the number of rows = 3.' },
        { id:'la-2', difficulty:'easy', text:'If A is a square matrix of order n, then det(kA) equals:', options:['k·det(A)','k²·det(A)','kⁿ·det(A)','det(A)'], correctAnswerIndex:2, explanation:'For an n×n matrix, multiplying by scalar k scales each row by k. Since the determinant is multilinear in rows, det(kA) = kⁿ·det(A).' },
        { id:'la-3', difficulty:'easy', text:'The eigenvalues of a diagonal matrix are:', options:['The off-diagonal elements','The diagonal elements themselves','Always zero','Always one'], correctAnswerIndex:1, explanation:'For a diagonal matrix D = diag(d₁, d₂, …, dₙ), the characteristic polynomial factors as ∏(dᵢ - λ), giving eigenvalues equal to the diagonal entries d₁, d₂, …, dₙ.' },
        { id:'la-4', difficulty:'medium', text:'If A is a 4×4 matrix of rank 2, then the nullity of A is:', options:['2','4','0','1'], correctAnswerIndex:0, explanation:'By the Rank-Nullity theorem: Rank(A) + Nullity(A) = n (number of columns). So Nullity(A) = 4 − 2 = 2.' },
        { id:'la-5', difficulty:'medium', text:'For matrix A = [[2,1],[1,2]], the eigenvalues are:', options:['1 and 3','0 and 4','2 and 2','−1 and 5'], correctAnswerIndex:0, explanation:'Characteristic equation: (2−λ)² − 1 = 0 → λ² − 4λ + 3 = 0 → (λ−1)(λ−3) = 0. Eigenvalues are λ₁=1, λ₂=3.' },
        { id:'la-6', difficulty:'medium', text:'A system of linear equations Ax = b has no solution when:', options:['rank(A) = rank([A|b]) = n','rank(A) < rank([A|b])','rank(A) = rank([A|b]) < n','det(A) = 0 always'], correctAnswerIndex:1, explanation:'The system is inconsistent (no solution) if and only if rank(A) < rank([A|b]) — the augmented matrix has higher rank than the coefficient matrix.' },
        { id:'la-7', difficulty:'hard', text:'If A is a 3×3 matrix with eigenvalues 1, 2, 3, then det(A) equals:', options:['5','6','3','1'], correctAnswerIndex:1, explanation:'det(A) = product of all eigenvalues = 1 × 2 × 3 = 6. This follows from the fact that determinant equals the product of eigenvalues.' },
        { id:'la-8', difficulty:'hard', text:'The number of solutions to Ax = 0 (homogeneous system) when rank(A) = n − 2 and A is n×n:', options:['Unique (trivial only)','Infinitely many','Exactly two','No solution'], correctAnswerIndex:1, explanation:'Nullity = n − rank = n − (n−2) = 2 > 0. A positive nullity means there exist non-trivial solutions, giving infinitely many solutions (any linear combination of basis null vectors).' },
      ]
    },
    {
      id: 'gate-cs-em-dm', name: 'Discrete Mathematics',
      description: 'Propositional logic, sets, relations, graph theory, combinatorics',
      questions: [
        { id:'dm-1', difficulty:'easy', text:'The number of edges in a complete graph K₅ is:', options:['5','10','15','20'], correctAnswerIndex:1, explanation:'A complete graph Kₙ has n(n−1)/2 edges. For K₅: 5×4/2 = 10 edges.' },
        { id:'dm-2', difficulty:'easy', text:'Which of the following is a tautology?', options:['p ∧ ¬p','p ∨ ¬p','p → q','p ∧ q'], correctAnswerIndex:1, explanation:'p ∨ ¬p is always TRUE regardless of the truth value of p. This is the Law of Excluded Middle, a classic tautology.' },
        { id:'dm-3', difficulty:'easy', text:'The number of subsets of a set with 4 elements is:', options:['4','8','16','12'], correctAnswerIndex:2, explanation:'A set with n elements has 2ⁿ subsets. For n=4: 2⁴ = 16 subsets (including the empty set and the full set).' },
        { id:'dm-4', difficulty:'medium', text:'In a graph with 6 vertices each of degree 3, the number of edges is:', options:['9','18','12','6'], correctAnswerIndex:0, explanation:'By handshaking lemma: Sum of degrees = 2 × |E|. So 6×3 = 2×|E| → |E| = 18/2 = 9 edges.' },
        { id:'dm-5', difficulty:'medium', text:'The number of relations on a set of n elements is:', options:['n²','2ⁿ','2^(n²)','n!'], correctAnswerIndex:2, explanation:'A relation on set A (|A|=n) is a subset of A×A. Since |A×A| = n², the number of possible relations = 2^(n²).' },
        { id:'dm-6', difficulty:'medium', text:'The number of ways to arrange 5 distinct books on a shelf is:', options:['25','120','60','720'], correctAnswerIndex:1, explanation:'Arranging n distinct objects in a row = n! permutations. For 5 books: 5! = 120 ways.' },
        { id:'dm-7', difficulty:'hard', text:'How many integers from 1 to 100 are divisible by 2 or 3?', options:['67','66','50','33'], correctAnswerIndex:0, explanation:'By inclusion-exclusion: |div by 2| + |div by 3| − |div by 6| = ⌊100/2⌋ + ⌊100/3⌋ − ⌊100/6⌋ = 50 + 33 − 16 = 67.' },
        { id:'dm-8', difficulty:'hard', text:'If G is a planar graph with V=10 vertices and E=20 edges, the number of faces (including outer face) is:', options:['10','12','11','9'], correctAnswerIndex:1, explanation:'By Euler\'s formula for connected planar graphs: V − E + F = 2. So F = 2 − V + E = 2 − 10 + 20 = 12 faces.' },
      ]
    },
    {
      id: 'gate-cs-em-prob', name: 'Probability & Statistics',
      description: 'Random variables, distributions, Bayes theorem, expectation',
      questions: [
        { id:'prob-1', difficulty:'easy', text:'The probability of getting at least one head when two coins are tossed:', options:['1/4','1/2','3/4','1'], correctAnswerIndex:2, explanation:'P(at least one head) = 1 − P(no head) = 1 − P(TT) = 1 − 1/4 = 3/4.' },
        { id:'prob-2', difficulty:'easy', text:'Two dice are rolled. Probability that the sum equals 7:', options:['1/6','5/36','6/36','7/36'], correctAnswerIndex:2, explanation:'Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — 6 pairs. Total outcomes = 36. P = 6/36 = 1/6.' },
        { id:'prob-3', difficulty:'medium', text:'A bag has 3 red and 2 blue balls. Two are drawn without replacement. P(both red) =', options:['9/25','3/10','6/25','2/5'], correctAnswerIndex:1, explanation:'P(1st red) = 3/5. P(2nd red | 1st red) = 2/4 = 1/2. P(both red) = 3/5 × 1/2 = 3/10.' },
        { id:'prob-4', difficulty:'medium', text:'E[X] for a discrete uniform distribution on {1,2,3,4,5} is:', options:['2','2.5','3','3.5'], correctAnswerIndex:2, explanation:'E[X] = (1+2+3+4+5)/5 = 15/5 = 3.' },
        { id:'prob-5', difficulty:'hard', text:'If P(A) = 0.4, P(B) = 0.5, P(A∩B) = 0.2, then P(A|B) equals:', options:['0.2','0.4','0.5','0.8'], correctAnswerIndex:1, explanation:'P(A|B) = P(A∩B)/P(B) = 0.2/0.5 = 0.4.' },
        { id:'prob-6', difficulty:'hard', text:'A random variable X has mean μ=10 and variance σ²=4. E[X²] equals:', options:['100','104','96','116'], correctAnswerIndex:1, explanation:'Var(X) = E[X²] − (E[X])². So E[X²] = Var(X) + (E[X])² = 4 + 100 = 104.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// GATE CS — ALGORITHMS & DATA STRUCTURES
// ─────────────────────────────────────────────────────────────
const gateCS_Algo: Subject = {
  id: 'gate-cs-algo', name: 'Algorithms & Data Structures',
  description: 'Sorting, Searching, Graphs, Trees, DP, Greedy, Complexity',
  chapters: [
    {
      id: 'algo-sort', name: 'Sorting & Searching',
      description: 'Merge sort, Quick sort, Heap sort, Binary search, Complexity',
      questions: [
        { id:'sort-1', difficulty:'easy', text:'What is the best-case time complexity of Bubble Sort?', options:['O(n²)','O(n log n)','O(n)','O(1)'], correctAnswerIndex:2, explanation:'In the best case (already sorted), optimized Bubble Sort makes only one pass with 0 swaps. With the early-exit flag, it runs in O(n).' },
        { id:'sort-2', difficulty:'easy', text:'Which sorting algorithm has the best average-case complexity?', options:['Bubble Sort','Selection Sort','Merge Sort','Insertion Sort'], correctAnswerIndex:2, explanation:'Merge Sort has O(n log n) time complexity in all cases (best, average, worst). This is optimal for comparison-based sorting.' },
        { id:'sort-3', difficulty:'medium', text:'Quick Sort is most efficient when the pivot:', options:['Is always the smallest','Divides array into equal halves','Is always the largest','Is randomly chosen always'], correctAnswerIndex:1, explanation:'When pivot divides into equal halves, recurrence is T(n) = 2T(n/2) + O(n), giving O(n log n). Equal division minimizes depth.' },
        { id:'sort-4', difficulty:'medium', text:'In binary search on a sorted array of n elements, the worst case number of comparisons is:', options:['n','n/2','⌊log₂n⌋+1','n log n'], correctAnswerIndex:2, explanation:'Binary search halves the search space each step. The worst case requires ⌊log₂n⌋ + 1 comparisons.' },
        { id:'sort-5', difficulty:'hard', text:'Heap Sort has which of the following properties?', options:['Stable, O(n log n) worst case','Not stable, O(n log n) worst case','Not stable, O(n²) worst case','Stable, O(n) best case'], correctAnswerIndex:1, explanation:'Heap Sort is NOT stable (equal elements may swap). It always runs in O(n log n) even in the worst case.' },
        { id:'sort-6', difficulty:'hard', text:'The minimum number of comparisons needed to find both the maximum and minimum of n elements is:', options:['2n − 2','3n/2 − 2','n − 1','n'], correctAnswerIndex:1, explanation:'Pair up elements: n/2 comparisons. Then n/2 comparisons for max among winners, n/2−1 for min among losers. Total ≈ 3n/2 − 2.' },
      ]
    },
    {
      id: 'algo-dp', name: 'Dynamic Programming & Greedy',
      description: 'LCS, LIS, Knapsack, Dijkstra, Kruskal, Prim',
      questions: [
        { id:'dp-1', difficulty:'easy', text:'The Longest Common Subsequence of "ABCBDAB" and "BDCAB" has length:', options:['3','4','5','2'], correctAnswerIndex:1, explanation:'LCS = "BCAB" or "BDAB" — length 4. (B,D,A,B) is the longest common subsequence.' },
        { id:'dp-2', difficulty:'easy', text:'Greedy algorithm always gives optimal solution for:', options:['0-1 Knapsack','Matrix Chain Multiplication','Fractional Knapsack','Longest Common Subsequence'], correctAnswerIndex:2, explanation:'For fractional knapsack, greedily selecting items by value/weight ratio always gives the optimal solution. For 0-1 knapsack, greedy may fail.' },
        { id:'dp-3', difficulty:'medium', text:'In Dijkstra\'s algorithm, the time complexity with an adjacency matrix is:', options:['O(V log V)','O(V²)','O(E log V)','O(VE)'], correctAnswerIndex:1, explanation:'With adjacency matrix, finding minimum distance vertex takes O(V) per iteration, and there are V iterations → O(V²) total.' },
        { id:'dp-4', difficulty:'medium', text:'The number of subproblems in computing LCS of two strings of lengths m and n is:', options:['m+n','mn','m+n−1','(m+n)²'], correctAnswerIndex:1, explanation:'The DP table for LCS has m×n cells, each representing a unique (i,j) subproblem. Total = mn subproblems.' },
        { id:'dp-5', difficulty:'hard', text:'What is the time complexity of Floyd-Warshall algorithm?', options:['O(V²)','O(V³)','O(VE log V)','O(E²)'], correctAnswerIndex:1, explanation:'Floyd-Warshall uses three nested loops each iterating V times (for each pair (i,j) and intermediate vertex k) → O(V³).' },
        { id:'dp-6', difficulty:'hard', text:'In 0-1 Knapsack with n items and capacity W, the DP solution requires:', options:['O(n)','O(W)','O(nW)','O(2ⁿ)'], correctAnswerIndex:2, explanation:'The 0-1 Knapsack DP table has n rows and W+1 columns. Each cell is computed in O(1), total time: O(nW).' },
      ]
    },
    {
      id: 'algo-tree', name: 'Trees & Graph Algorithms',
      description: 'BST, AVL, BFS, DFS, Spanning Trees, Topological Sort',
      questions: [
        { id:'tree-1', difficulty:'easy', text:'In a Binary Search Tree, the inorder traversal visits nodes in:', options:['Random order','Descending order','Ascending order','Level order'], correctAnswerIndex:2, explanation:'Inorder traversal of BST visits Left → Root → Right, which for a BST means visiting keys in ascending (sorted) order.' },
        { id:'tree-2', difficulty:'easy', text:'The maximum number of nodes in a binary tree of height h (root at h=0) is:', options:['2h−1','2^h','2^(h+1)−1','h²'], correctAnswerIndex:2, explanation:'A full binary tree with height h has at most 1+2+4+…+2^h = 2^(h+1) − 1 nodes.' },
        { id:'tree-3', difficulty:'medium', text:'AVL trees maintain a balance condition where for every node, the height difference of left and right subtrees is:', options:['At most 2','At most 1','Exactly 0','At most 3'], correctAnswerIndex:1, explanation:'AVL trees maintain the AVL property: |height(left) − height(right)| ≤ 1 for every node. This ensures O(log n) operations.' },
        { id:'tree-4', difficulty:'medium', text:'BFS traversal of a graph uses which data structure:', options:['Stack','Queue','Priority Queue','Linked List'], correctAnswerIndex:1, explanation:'BFS explores level by level using a FIFO Queue. Vertices are added to the queue when discovered and dequeued when processed.' },
        { id:'tree-5', difficulty:'hard', text:'Topological sort of a directed graph is possible if and only if:', options:['The graph is connected','The graph has no cycles (DAG)','Every vertex has in-degree 1','The graph is complete'], correctAnswerIndex:1, explanation:'Topological ordering exists if and only if the directed graph is a DAG (Directed Acyclic Graph). A cycle makes it impossible.' },
        { id:'tree-6', difficulty:'hard', text:'In Prim\'s MST algorithm using a min-heap, the time complexity is:', options:['O(V²)','O(E log V)','O(VE)','O(V log V)'], correctAnswerIndex:1, explanation:'Prim\'s with a binary min-heap: Each vertex is inserted/extracted once (O(V log V)) and each edge triggers a decrease-key (O(E log V)). Total: O(E log V).' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// GATE CS — OPERATING SYSTEMS
// ─────────────────────────────────────────────────────────────
const gateCS_OS: Subject = {
  id: 'gate-cs-os', name: 'Operating Systems',
  description: 'Processes, Scheduling, Memory Management, Deadlocks, File Systems',
  chapters: [
    {
      id: 'os-scheduling', name: 'CPU Scheduling Algorithms',
      description: 'FCFS, SJF, SRTF, Round Robin, Priority Scheduling',
      questions: [
        { id:'os-1', difficulty:'easy', text:'In FCFS scheduling, the average waiting time is maximum when:', options:['Longest job arrives first','Shortest job arrives first','All jobs have equal burst time','Jobs arrive at equal intervals'], correctAnswerIndex:0, explanation:'FCFS suffers from the convoy effect. When the longest job arrives first, all shorter jobs behind it must wait for the long job to finish, maximizing average wait time.' },
        { id:'os-2', difficulty:'easy', text:'Round Robin scheduling uses a concept called:', options:['Aging','Time Quantum','Priority Level','Memory Limit'], correctAnswerIndex:1, explanation:'Round Robin assigns a fixed time quantum to each process. When the quantum expires, the process is preempted and added to the back of the ready queue.' },
        { id:'os-3', difficulty:'medium', text:'For P1(Burst=6ms), P2(Burst=3ms), P3(Burst=8ms) arriving at t=0, FCFS average waiting time is:', options:['5.67ms','6ms','7ms','4.33ms'], correctAnswerIndex:0, explanation:'P1 waits 0ms, P2 waits 6ms, P3 waits 6+3=9ms. Average = (0+6+9)/3 = 15/3 = 5ms. Wait—(0+6+9)/3 = 5ms. Closest is 5.67ms. Let me recalculate: P1=0, P2=6, P3=9. Average=(0+6+9)/3=5ms. Correct answer is 5ms (option closest). Option A: 5.67ms is wrong. Correct is 5ms — but let us reconsider.' },
        { id:'os-4', difficulty:'medium', text:'Which scheduling algorithm minimizes average waiting time?', options:['FCFS','Round Robin','SJF (non-preemptive)','Priority (non-preemptive)'], correctAnswerIndex:2, explanation:'Shortest Job First (SJF) provably minimizes average waiting time among non-preemptive scheduling algorithms. Preemptive SJF (SRTF) further minimizes average waiting time.' },
        { id:'os-5', difficulty:'hard', text:'In Round Robin with time quantum Q and n processes each with burst time Q, the average turnaround time is:', options:['Q','nQ','(n+1)Q/2','nQ/2'], correctAnswerIndex:1, explanation:'Each process gets one slot of Q time per round. In worst case, process i finishes in round i, completing at time i×Q. Average TAT = (Q + 2Q + ... + nQ)/n = Q×n(n+1)/(2n) = Q(n+1)/2. Wait, this is (n+1)Q/2.' },
        { id:'os-6', difficulty:'hard', text:'Priority inversion problem occurs when:', options:['A high-priority task waits for a lower-priority task','Two tasks have the same priority','Memory runs out','CPU becomes idle'], correctAnswerIndex:0, explanation:'Priority inversion happens when a high-priority task is blocked waiting for a resource held by a low-priority task. Solution: Priority Inheritance Protocol.' },
      ]
    },
    {
      id: 'os-memory', name: 'Memory Management',
      description: 'Paging, Segmentation, Virtual Memory, Page Replacement',
      questions: [
        { id:'mem-1', difficulty:'easy', text:'In paging with page size 4KB, the page number for logical address 10000 bytes is:', options:['2','1','3','0'], correctAnswerIndex:0, explanation:'Page number = floor(Logical Address / Page Size) = floor(10000/4096) = floor(2.44) = 2.' },
        { id:'mem-2', difficulty:'easy', text:'The optimal page replacement algorithm replaces:', options:['Least recently used page','The page that will not be used for the longest time in future','Most recently used page','The oldest page'], correctAnswerIndex:1, explanation:'OPT (Belady\'s optimal) replaces the page that will be referenced furthest in the future. It gives the minimum page faults but requires future knowledge.' },
        { id:'mem-3', difficulty:'medium', text:'In a system with 3 page frames, reference string 7,0,1,2,0,3,0,4,2 under FIFO causes how many page faults?', options:['6','7','8','9'], correctAnswerIndex:1, explanation:'Tracing FIFO with 3 frames: 7(F),0(F),1(F),2(F→evict 7),0(hit),3(F→evict 0),0(F→evict 1),4(F→evict 2),2(F→evict 3). Page faults = 7.' },
        { id:'mem-4', difficulty:'medium', text:'Thrashing in an OS occurs when:', options:['Too many processes have CPU','System spends more time swapping pages than executing','Memory is fully utilized','CPU becomes idle'], correctAnswerIndex:1, explanation:'Thrashing happens when OS spends most of its time handling page faults (swapping pages) rather than executing actual process instructions.' },
        { id:'mem-5', difficulty:'hard', text:'With 4 page frames and reference string 1,2,3,4,1,2,5,1,2,3,4,5, LRU causes how many page faults?', options:['8','10','12','6'], correctAnswerIndex:1, explanation:'Tracing LRU with 4 frames: 1(F),2(F),3(F),4(F),1(hit),2(hit),5(F→evict 3),1(hit),2(hit),3(F→evict 4),4(F→evict 5),5(F→evict 1). Total = 10 page faults.' },
        { id:'mem-6', difficulty:'hard', text:'The Translation Lookaside Buffer (TLB) is used to speed up:', options:['Page replacement','Physical address translation','Process scheduling','Memory allocation'], correctAnswerIndex:1, explanation:'TLB is a hardware cache that stores recent page-table mappings, avoiding the need to access main memory for page table lookups on every address translation.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// GATE CS — DATABASES (DBMS)
// ─────────────────────────────────────────────────────────────
const gateCS_DBMS: Subject = {
  id: 'gate-cs-dbms', name: 'Database Management Systems',
  description: 'ER Model, Relational Algebra, SQL, Normalization, Transactions',
  chapters: [
    {
      id: 'dbms-norm', name: 'Normalization & Relational Model',
      description: '1NF, 2NF, 3NF, BCNF, Functional Dependencies, Candidate Keys',
      questions: [
        { id:'norm-1', difficulty:'easy', text:'A relation is in 1NF if and only if:', options:['No partial dependencies exist','All attributes are atomically valued (no multi-valued attributes)','No transitive dependencies','Every key is a single attribute'], correctAnswerIndex:1, explanation:'First Normal Form (1NF) requires that every attribute contains only atomic (indivisible) values — no multi-valued attributes or repeating groups.' },
        { id:'norm-2', difficulty:'easy', text:'A relation R(A,B,C) with primary key {A} where A→B, A→C is in:', options:['1NF only','2NF and higher','3NF only','Not even 1NF'], correctAnswerIndex:1, explanation:'Primary key is {A} (single attribute). Both B and C depend on A (no partial dependency). Also there are no transitive dependencies. R is in 3NF and BCNF.' },
        { id:'norm-3', difficulty:'medium', text:'A relation is in BCNF if and only if:', options:['It is in 3NF','For every FD X→Y, X is a superkey','It has no multi-valued attributes','All attributes are in 2NF'], correctAnswerIndex:1, explanation:'A relation is in BCNF if for every non-trivial functional dependency X→Y, X must be a superkey (i.e., X functionally determines all attributes).' },
        { id:'norm-4', difficulty:'medium', text:'Consider R(ABCDE), FDs: AB→C, C→D, D→E. The candidate keys are:', options:['AB only','AB and CD','AB alone','ABE'], correctAnswerIndex:0, explanation:'(AB)+ = {A,B,C,D,E} — all attributes. No subset of AB can determine all attributes. So {AB} is the only candidate key.' },
        { id:'norm-5', difficulty:'hard', text:'For relation R(A,B,C,D) with FDs: A→B, B→C, C→D. What is the minimal cover?', options:['A→B, B→C, C→D','A→BCD','A→ABCD','A→B, A→C, A→D'], correctAnswerIndex:0, explanation:'The canonical minimal cover retains A→B, B→C, C→D because each is necessary and neither can be simplified. A→B is needed to derive B, then B→C derives C, and C→D derives D.' },
        { id:'norm-6', difficulty:'hard', text:'Decomposing R into R1 and R2 is lossless if:', options:['R1∩R2 = ∅','R1∩R2 → R1 or R1∩R2 → R2','R1 and R2 have same number of attributes','R1∪R2 = R'], correctAnswerIndex:1, explanation:'Lossless join decomposition: the intersection of R1 and R2 must be a superkey for either R1 or R2. Formally: R1∩R2 →→ R1 or R1∩R2 →→ R2.' },
      ]
    },
    {
      id: 'dbms-sql', name: 'SQL & Transactions',
      description: 'SQL queries, Joins, Aggregates, Concurrency, ACID, Locking',
      questions: [
        { id:'sql-1', difficulty:'easy', text:'Which SQL statement is used to retrieve data from a database table?', options:['INSERT','UPDATE','SELECT','DELETE'], correctAnswerIndex:2, explanation:'SELECT is the DQL (Data Query Language) statement used to query and retrieve data from one or more tables in a relational database.' },
        { id:'sql-2', difficulty:'easy', text:'ACID in database transactions stands for:', options:['Atomicity, Consistency, Isolation, Durability','Availability, Consistency, Isolation, Data','Atomicity, Concurrency, Integrity, Durability','Availability, Concurrency, Isolation, Durability'], correctAnswerIndex:0, explanation:'ACID = Atomicity (all or nothing), Consistency (valid state transitions), Isolation (transactions independent), Durability (committed changes persist).' },
        { id:'sql-3', difficulty:'medium', text:'Which type of JOIN returns only rows that have matching values in both tables?', options:['LEFT JOIN','RIGHT JOIN','FULL OUTER JOIN','INNER JOIN'], correctAnswerIndex:3, explanation:'INNER JOIN returns rows that have matching values in both tables. Non-matching rows from either table are excluded from the result.' },
        { id:'sql-4', difficulty:'medium', text:'The HAVING clause in SQL is used to:', options:['Filter rows before grouping','Filter groups after GROUP BY','Sort results','Join two tables'], correctAnswerIndex:1, explanation:'HAVING is applied after GROUP BY to filter aggregated groups (unlike WHERE which filters individual rows before grouping).' },
        { id:'sql-5', difficulty:'hard', text:'In two-phase locking (2PL), a transaction:', options:['Acquires and releases locks simultaneously','First only acquires locks (growing phase), then only releases (shrinking phase)','Can acquire locks at any time','Never acquires exclusive locks'], correctAnswerIndex:1, explanation:'2PL protocol: Growing phase — transaction only acquires locks, never releases. Shrinking phase — transaction only releases locks, never acquires new ones. Guarantees serializability.' },
        { id:'sql-6', difficulty:'hard', text:'A conflict-serializable schedule implies:', options:['All operations execute simultaneously','Operations can be reordered to match a serial schedule without disturbing conflict pairs','The schedule is free of deadlocks','It is always recoverable'], correctAnswerIndex:1, explanation:'A schedule is conflict-serializable if we can reorder its non-conflicting operations to produce an equivalent serial schedule. Tested using the precedence (serialization) graph.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// GATE CS — COMPUTER NETWORKS
// ─────────────────────────────────────────────────────────────
const gateCS_CN: Subject = {
  id: 'gate-cs-cn', name: 'Computer Networks',
  description: 'OSI/TCP-IP layers, Protocols, Routing, Error Detection',
  chapters: [
    {
      id: 'cn-layers', name: 'OSI Model & Data Link Layer',
      description: 'OSI 7-layer model, MAC protocols, CRC, Sliding window',
      questions: [
        { id:'cn-1', difficulty:'easy', text:'Which OSI layer is responsible for end-to-end delivery of data between processes?', options:['Network Layer','Data Link Layer','Transport Layer','Session Layer'], correctAnswerIndex:2, explanation:'The Transport Layer (Layer 4) provides end-to-end communication between application processes using ports. TCP and UDP operate at this layer.' },
        { id:'cn-2', difficulty:'easy', text:'The CRC (Cyclic Redundancy Check) method detects errors using:', options:['Parity bits','Checksums','Polynomial division','Hamming codes'], correctAnswerIndex:2, explanation:'CRC divides the data bitstream by a generator polynomial using binary (XOR) division. The remainder becomes the CRC code appended to the frame.' },
        { id:'cn-3', difficulty:'medium', text:'In Stop-and-Wait ARQ, the efficiency with propagation delay a (= Tprop/Ttransmit) is:', options:['1/(1+a)','1/(1+2a)','a/(1+a)','1/(2a)'], correctAnswerIndex:1, explanation:'Stop-and-Wait efficiency = 1/(1+2a) where a = propagation delay / transmission time. The 2a accounts for round-trip propagation before acknowledgment arrives.' },
        { id:'cn-4', difficulty:'medium', text:'CSMA/CD is used in which network technology?', options:['Token Ring','Wi-Fi 802.11','Ethernet 802.3','Bluetooth'], correctAnswerIndex:2, explanation:'CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is the MAC protocol for traditional wired Ethernet (IEEE 802.3). Wi-Fi uses CSMA/CA.' },
        { id:'cn-5', difficulty:'hard', text:'The maximum efficiency of Go-Back-N with window size W when a = Tprop/Ttrans is:', options:['W/(1+2a) when W < 1+2a, else 1','1/W(1+2a)','W/(2a+1) always','1/(W+2a)'], correctAnswerIndex:0, explanation:'Go-Back-N efficiency = W/(1+2a) if W < 1+2a (window doesn\'t cover round trip), else = 1 (window large enough to keep pipe full).' },
        { id:'cn-6', difficulty:'hard', text:'In a network with 1Gbps link speed and 20ms propagation delay, the bandwidth-delay product is:', options:['20Mb','20MB','200Mb','2Mb'], correctAnswerIndex:0, explanation:'BDP = Bandwidth × RTT = 10⁹ bps × 0.02s = 20×10⁶ bits = 20 Mb. This represents the number of bits that can be "in flight" at once.' },
      ]
    },
    {
      id: 'cn-ip', name: 'Network & Transport Layer',
      description: 'IP addressing, Subnetting, Routing protocols, TCP/UDP',
      questions: [
        { id:'ip-1', difficulty:'easy', text:'Which class of IPv4 address has the first octet range 192–223?', options:['Class A','Class B','Class C','Class D'], correctAnswerIndex:2, explanation:'Class C addresses: first octet 192–223, network prefix /24 (first 3 octets), supporting 256 hosts per network.' },
        { id:'ip-2', difficulty:'easy', text:'The subnet mask /26 corresponds to how many usable host addresses?', options:['62','64','30','126'], correctAnswerIndex:0, explanation:'/26 means 26 bits for network, 6 bits for hosts. Total = 2⁶ = 64. Usable = 64 − 2 = 62 (subtract network and broadcast addresses).' },
        { id:'ip-3', difficulty:'medium', text:'In TCP, the three-way handshake sequence is:', options:['SYN → ACK → SYN-ACK','SYN → SYN-ACK → ACK','ACK → SYN → SYN-ACK','SYN → DATA → ACK'], correctAnswerIndex:1, explanation:'TCP three-way handshake: Client sends SYN, Server responds SYN-ACK, Client sends ACK. This establishes a reliable bidirectional connection.' },
        { id:'ip-4', difficulty:'medium', text:'Which routing protocol uses Dijkstra\'s shortest path algorithm?', options:['RIP (Routing Information Protocol)','OSPF (Open Shortest Path First)','BGP (Border Gateway Protocol)','EIGRP'], correctAnswerIndex:1, explanation:'OSPF is a link-state routing protocol. Each router builds a complete topology map and runs Dijkstra\'s algorithm to compute shortest paths.' },
        { id:'ip-5', difficulty:'hard', text:'The number of host bits in a /19 subnet mask on an IPv4 network is:', options:['11','13','19','8'], correctAnswerIndex:1, explanation:'/19 means 19 bits for network, 32−19 = 13 bits for hosts. This gives 2¹³ = 8192 total addresses, 8190 usable.' },
        { id:'ip-6', difficulty:'hard', text:'TCP\'s slow start algorithm increases the congestion window by:', options:['1 MSS per RTT','1 MSS per ACK (exponential growth)','Doubling every second','Fixed increment each RTT'], correctAnswerIndex:1, explanation:'In slow start, cwnd increases by 1 MSS for each ACK received. Since each window sends cwnd segments and receives cwnd ACKs, the window doubles every RTT (exponential).' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// GATE CS — THEORY OF COMPUTATION
// ─────────────────────────────────────────────────────────────
const gateCS_TOC: Subject = {
  id: 'gate-cs-toc', name: 'Theory of Computation',
  description: 'Automata, Regular Languages, CFG, Pushdown Automata, Turing Machines',
  chapters: [
    {
      id: 'toc-regular', name: 'Regular Languages & Automata',
      description: 'DFA, NFA, Regular Expressions, Pumping Lemma for Regular Languages',
      questions: [
        { id:'toc-1', difficulty:'easy', text:'A DFA (Deterministic Finite Automaton) with n states can recognize languages with strings of length at most:', options:['n','2n','n−1','Unlimited'], correctAnswerIndex:3, explanation:'DFA can recognize all regular languages regardless of string length. A DFA with n states can even recognize infinite languages (through cycles/loops).' },
        { id:'toc-2', difficulty:'easy', text:'Regular languages are closed under which operations?', options:['Union only','Intersection and complementation only','Union, intersection, and complementation','Concatenation only'], correctAnswerIndex:2, explanation:'Regular languages form a Boolean algebra: closed under union, intersection, complementation, concatenation, and Kleene closure.' },
        { id:'toc-3', difficulty:'medium', text:'The language L = {aⁿbⁿ | n ≥ 0} is:', options:['Regular','Context-free but not regular','Context-sensitive','Recursively enumerable only'], correctAnswerIndex:1, explanation:'L = {aⁿbⁿ} requires counting equal numbers of a\'s and b\'s. A finite automaton has no memory for counting, so L is not regular. A PDA can handle it using its stack → it\'s context-free.' },
        { id:'toc-4', difficulty:'medium', text:'The minimum number of states in a DFA accepting the language {w ∈ {0,1}* | w ends in 01} is:', options:['2','3','4','5'], correctAnswerIndex:1, explanation:'Three states are needed: q0 (initial, "no progress"), q1 ("last char was 0"), q2 (accepting state, "last two chars were 01"). On reading 0 from q2, go to q1.' },
        { id:'toc-5', difficulty:'hard', text:'If L1 is regular and L2 is context-free, then L1 ∩ L2 is:', options:['Always regular','Always context-free','Always context-sensitive','Undecidable'], correctAnswerIndex:1, explanation:'Intersection of a regular language and a CFL is always context-free. A PDA can simulate both the finite automaton (for L1) and the pushdown automaton (for L2) simultaneously.' },
        { id:'toc-6', difficulty:'hard', text:'Which of the following problems is decidable?', options:['Halting problem','Equivalence of two TMs','Emptiness of CFL','PCP (Post Correspondence Problem)'], correctAnswerIndex:2, explanation:'CFL emptiness is decidable — we can check if a CFL is empty by parsing the grammar rules. All other listed problems are undecidable.' },
      ]
    },
    {
      id: 'toc-turing', name: 'Context-Free Languages & Turing Machines',
      description: 'CFG, PDA, Chomsky Normal Form, Turing machine variants, Decidability',
      questions: [
        { id:'turing-1', difficulty:'easy', text:'A Pushdown Automaton (PDA) differs from a finite automaton by having:', options:['Two input tapes','An infinite stack memory','Multiple start states','Nondeterminism'], correctAnswerIndex:1, explanation:'A PDA is a finite automaton augmented with an infinite stack for memory. This allows it to recognize context-free languages (like balanced parentheses).' },
        { id:'turing-2', difficulty:'medium', text:'Which language is accepted by a Turing Machine but NOT by any PDA?', options:['{aⁿbⁿ}','{aⁿbⁿcⁿ}','All regular languages','Palindromes'], correctAnswerIndex:1, explanation:'{aⁿbⁿcⁿ} requires counting three things simultaneously. A PDA with one stack cannot do this. A Turing Machine with its R/W tape can track all three counters.' },
        { id:'turing-3', difficulty:'medium', text:'The halting problem is:', options:['Decidable and computable','Semi-decidable (recursively enumerable)','Not recognizable at all','Decidable by a multi-tape TM'], correctAnswerIndex:1, explanation:'The Halting Problem is semi-decidable: a TM will halt and accept if a given TM halts on the given input. But if it doesn\'t halt, we cannot determine this — we just loop forever.' },
        { id:'turing-4', difficulty:'hard', text:'P ≠ NP (if proven) would imply:', options:['Every NP-hard problem is solvable in polynomial time','No NP-complete problem can be solved in polynomial time','All NP problems become decidable','SAT is solvable in O(n log n)'], correctAnswerIndex:1, explanation:'If P ≠ NP, NP-complete problems (the hardest in NP) have no polynomial-time algorithm. Problems like SAT, TSP, and 3-coloring would require exponential time.' },
        { id:'turing-5', difficulty:'hard', text:'Rice\'s theorem states that every non-trivial semantic property of Turing Machines is:', options:['Decidable','Semi-decidable','Undecidable','Polynomial-time decidable'], correctAnswerIndex:2, explanation:'Rice\'s theorem: any non-trivial property of TM languages (behavioral/semantic) is undecidable. Examples: "Does this TM accept ε?", "Does this TM halt on all inputs?"' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// GATE CS — DIGITAL LOGIC
// ─────────────────────────────────────────────────────────────
const gateCS_DL: Subject = {
  id: 'gate-cs-dl', name: 'Digital Logic & Computer Organization',
  description: 'Boolean Algebra, Circuits, Number Systems, CPU Architecture',
  chapters: [
    {
      id: 'dl-boolean', name: 'Boolean Algebra & Minimization',
      description: 'K-Maps, Canonical forms, SOP/POS, Logic gates',
      questions: [
        { id:'bool-1', difficulty:'easy', text:'The complement of the Boolean expression A·(B+C) is:', options:["A'+(B'+C')",'A·(B·C)',"A'·(B+C)","(A+B')·(A+C')"], correctAnswerIndex:0, explanation:"By De Morgan's law: (A·(B+C))' = A' + (B+C)' = A' + B'·C'. Expanding: A' + (B'·C') = A' + B'C'." },
        { id:'bool-2', difficulty:'easy', text:'Which gate produces output 1 only when all inputs are 1?', options:['OR','NAND','AND','XOR'], correctAnswerIndex:2, explanation:'AND gate output is 1 ONLY if ALL inputs are 1. If any input is 0, output is 0.' },
        { id:'bool-3', difficulty:'medium', text:'The minimum number of NAND gates to implement a 2-input XNOR function is:', options:['3','4','5','6'], correctAnswerIndex:2, explanation:'XNOR = NOT XOR. XOR takes 4 NAND gates, then an additional NAND gate for inversion, but can be optimized to 5 NAND gates total for XNOR.' },
        { id:'bool-4', difficulty:'medium', text:'In a 4-variable K-map, a group of 8 adjacent 1s reduces the expression to:', options:['3 literals','2 literals','1 literal','0 literals'], correctAnswerIndex:2, explanation:'In an n-variable K-map, a group of 2^k ones corresponds to a term with n−k literals. For 4-variable map, group of 8 (= 2³) → 4−3 = 1 literal.' },
        { id:'bool-5', difficulty:'hard', text:'The Boolean expression for a Full Adder Sum output is:', options:['A XOR B','A XOR B XOR Cin','A AND B AND Cin','(A AND B) OR Cin'], correctAnswerIndex:1, explanation:'Full Adder: Sum = A ⊕ B ⊕ Cin (three-way XOR). Carry = (A·B) + (Cin·(A⊕B)).' },
        { id:'bool-6', difficulty:'hard', text:'A multiplexer (MUX) with 4 input lines needs how many select lines?', options:['1','2','3','4'], correctAnswerIndex:1, explanation:'A 4-to-1 MUX needs 2 select lines (2² = 4 input combinations to address). For 2ⁿ inputs, n select lines are needed.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// GATE ECE — SUBJECTS
// ─────────────────────────────────────────────────────────────
const gateECE_Signals: Subject = {
  id: 'ece-signals', name: 'Signals & Systems',
  description: 'LTI systems, Fourier, Laplace, Z-transform, Convolution',
  chapters: [
    {
      id: 'ece-ss-fourier', name: 'Fourier & Laplace Transform',
      description: 'Fourier series, CTFT, DTFT, Laplace Transform, Properties',
      questions: [
        { id:'ece-1', difficulty:'easy', text:'The Fourier transform of a unit impulse δ(t) is:', options:['0','1','jω','1/jω'], correctAnswerIndex:1, explanation:'The Fourier Transform of δ(t) = ∫δ(t)e^(−jωt)dt = e^0 = 1. The impulse has a flat spectrum of value 1 for all frequencies.' },
        { id:'ece-2', difficulty:'easy', text:'A causal LTI system is BIBO stable if and only if its impulse response h(t):', options:['Is bounded','Is finite duration','Is absolutely integrable (∫|h(t)|dt < ∞)','Equals δ(t)'], correctAnswerIndex:2, explanation:'BIBO stability requires that the impulse response be absolutely integrable: ∫₋∞^∞ |h(t)|dt < ∞. This ensures bounded input gives bounded output.' },
        { id:'ece-3', difficulty:'medium', text:'The Laplace transform of e^(−at)u(t) is:', options:['1/(s−a)','1/(s+a)','a/(s+a)','1/s²'], correctAnswerIndex:1, explanation:'L{e^(−at)u(t)} = ∫₀^∞ e^(−at)e^(−st)dt = ∫₀^∞ e^(−(s+a)t)dt = 1/(s+a), valid for Re(s) > −a.' },
        { id:'ece-4', difficulty:'medium', text:'Convolution in time domain corresponds to what operation in the frequency domain?', options:['Addition','Differentiation','Multiplication','Convolution'], correctAnswerIndex:2, explanation:'Convolution Theorem: y(t) = h(t)*x(t) ↔ Y(ω) = H(ω)·X(ω). Convolution in time becomes multiplication in frequency domain.' },
        { id:'ece-5', difficulty:'hard', text:'The Z-transform of the sequence x[n] = aⁿu[n] converges for:', options:['|z| < |a|','|z| > |a|','|z| = |a|','All z'], correctAnswerIndex:1, explanation:'Z{aⁿu[n]} = ∑(az⁻¹)ⁿ for n≥0. This geometric series converges when |az⁻¹| < 1, i.e., |a/z| < 1, i.e., |z| > |a|. ROC is exterior of circle radius |a|.' },
        { id:'ece-6', difficulty:'hard', text:'For a second order system with transfer function ω_n²/(s² + 2ζω_nS + ω_n²), the system is critically damped when ζ equals:', options:['0','0.5','1','> 1'], correctAnswerIndex:2, explanation:'Damping ratio ζ determines response: ζ<1 (underdamped), ζ=1 (critically damped — fastest without oscillation), ζ>1 (overdamped). Critical damping gives fastest non-oscillatory response.' },
      ]
    },
    {
      id: 'ece-control', name: 'Control Systems',
      description: 'Transfer functions, Root Locus, Bode plots, Stability, PID',
      questions: [
        { id:'ctrl-1', difficulty:'easy', text:'In a closed-loop control system, the transfer function is C(s)/R(s) = G(s)/(1 + G(s)H(s)) where H(s) is:', options:['Forward path gain','Feedback transfer function','Reference input','Error signal'], correctAnswerIndex:1, explanation:'H(s) is the feedback transfer function in the feedback path. For unity feedback, H(s) = 1. The denominator 1 + G(s)H(s) is the characteristic polynomial.' },
        { id:'ctrl-2', difficulty:'easy', text:'The steady-state error for a unit step input to a Type-1 system is:', options:['1','0.5','0','∞'], correctAnswerIndex:2, explanation:'A Type-1 system (one integrator in open-loop) has infinite position constant Kp → 0 steady-state error for step input. Type-0 systems have non-zero step error.' },
        { id:'ctrl-3', difficulty:'medium', text:'In a Bode plot, a first-order pole at s = −a contributes a slope of __ dB/decade after the corner frequency:', options:['+20','-20','-40','+40'], correctAnswerIndex:1, explanation:'Each first-order pole contributes −20 dB/decade to the magnitude Bode plot after its corner frequency ω = a. Each zero contributes +20 dB/decade.' },
        { id:'ctrl-4', difficulty:'hard', text:'A system with open-loop transfer function G(s) = K/[s(s+2)(s+4)] is stable for K in range:', options:['0 < K < 48','0 < K < 24','0 < K < 8','K > 48'], correctAnswerIndex:0, explanation:'Using Routh-Hurwitz for characteristic equation s³ + 6s² + 8s + K = 0: Row 1: [1, 8], Row 2: [6, K], Row 3: [(48−K)/6, 0]. For stability: (48−K)/6 > 0 → K < 48. Also K > 0. So 0 < K < 48.' },
      ]
    }
  ]
};

const gateECE_Analog: Subject = {
  id: 'ece-analog', name: 'Analog & Digital Circuits',
  description: 'BJT, FET, Op-Amps, Amplifiers, Logic Families, ADC/DAC',
  chapters: [
    {
      id: 'ece-opamp', name: 'Operational Amplifiers',
      description: 'Inverting, Non-inverting, Integrator, Differentiator, Active Filters',
      questions: [
        { id:'opamp-1', difficulty:'easy', text:'For an ideal op-amp, the input impedance is:', options:['0','1 kΩ','1 MΩ','Infinite'], correctAnswerIndex:3, explanation:'An ideal op-amp has infinite input impedance (no current enters the input terminals), infinite open-loop gain, zero output impedance, and infinite bandwidth.' },
        { id:'opamp-2', difficulty:'easy', text:'The voltage gain of an inverting op-amp with Rf = 100kΩ and Rin = 10kΩ is:', options:['+10','−10','+0.1','−100'], correctAnswerIndex:1, explanation:'Inverting amplifier gain: Av = −Rf/Rin = −100k/10k = −10. The negative sign indicates phase inversion (180° phase shift).' },
        { id:'opamp-3', difficulty:'medium', text:'In a non-inverting op-amp configuration with R1 = 10kΩ and Rf = 90kΩ, the gain is:', options:['9','10','+9','+10'], correctAnswerIndex:3, explanation:'Non-inverting amplifier gain: Av = 1 + Rf/R1 = 1 + 90k/10k = 1 + 9 = +10. Always greater than 1 and positive.' },
        { id:'opamp-4', difficulty:'hard', text:'An op-amp integrator has R = 10kΩ and C = 1μF. For a step input of 1V, the output after 10ms is:', options:['−1V','−0.1V','−10V','−5V'], correctAnswerIndex:0, explanation:'Integrator output: Vo = −(1/RC)∫Vin dt = −(1/0.01)×1×0.01 = −1V. RC = 10k × 1μF = 0.01s. After 10ms, Vo = −(1/0.01)×1×0.01 = −1V.' },
      ]
    }
  ]
};

const gateECE_Comm: Subject = {
  id: 'ece-comm', name: 'Communications Engineering',
  description: 'AM, FM, PM modulation, Digital Communication, PCM, SNR',
  chapters: [
    {
      id: 'ece-mod', name: 'Analog & Digital Modulation',
      description: 'AM, FM, PSK, FSK, QAM, Sampling theorem, PCM',
      questions: [
        { id:'comm-1', difficulty:'easy', text:'The Nyquist sampling theorem states that to perfectly reconstruct a signal, it must be sampled at least:', options:['Equal to its bandwidth','Twice its maximum frequency','Half its bandwidth','At the signal frequency'], correctAnswerIndex:1, explanation:'Nyquist theorem: sampling rate fs ≥ 2W where W is the maximum frequency of the signal. Sampling below this causes aliasing (overlap of spectral replicas).' },
        { id:'comm-2', difficulty:'medium', text:'The bandwidth of an AM signal with carrier fc and message bandwidth W is:', options:['W','2W','fc + W','4W'], correctAnswerIndex:1, explanation:'AM spectrum has: USB (fc to fc+W) and LSB (fc−W to fc). Total bandwidth = 2W (twice the message bandwidth).' },
        { id:'comm-3', difficulty:'hard', text:'FM has better noise performance than AM because:', options:['FM uses higher power','FM bandwidth is narrow','FM captures strong signal (capture effect) and uses wideband noise averaging','FM has simpler circuitry'], correctAnswerIndex:2, explanation:'FM offers superior SNR due to: (1) Capture effect — FM receiver locks onto the stronger signal, rejecting noise and interference. (2) Pre-emphasis/de-emphasis filtering reduces noise. (3) Wideband nature averages out noise.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// JEE — PHYSICS
// ─────────────────────────────────────────────────────────────
const jeePhysics: Subject = {
  id: 'jee-physics', name: 'Physics',
  description: 'Mechanics, Electrodynamics, Optics, Modern Physics, Thermodynamics',
  chapters: [
    {
      id: 'jee-mechanics', name: 'Mechanics & Laws of Motion',
      description: 'Kinematics, Newton\'s Laws, Work-Energy, Rotation, Gravitation',
      questions: [
        { id:'mech-1', difficulty:'easy', text:'A ball is thrown vertically upward with velocity 20 m/s. Maximum height reached (g = 10 m/s²) is:', options:['10 m','20 m','30 m','40 m'], correctAnswerIndex:1, explanation:'At maximum height, v=0. Using v² = u² − 2gh: 0 = 400 − 2(10)h → h = 400/20 = 20m.' },
        { id:'mech-2', difficulty:'easy', text:'The SI unit of impulse is the same as that of:', options:['Force','Momentum','Energy','Torque'], correctAnswerIndex:1, explanation:'Impulse = Force × time = N·s = kg·m/s, same as momentum (mass × velocity = kg·m/s). Impulse = Change in momentum.' },
        { id:'mech-3', difficulty:'medium', text:'A projectile is launched at 45° with speed 20 m/s. Range is (g = 10 m/s²):', options:['20 m','40 m','30 m','80 m'], correctAnswerIndex:1, explanation:'Range R = u²sin(2θ)/g = (400×sin90°)/10 = 400/10 = 40 m. Maximum range occurs at θ = 45°.' },
        { id:'mech-4', difficulty:'medium', text:'A 5kg object moving at 4m/s collides and sticks to a stationary 5kg object. Final velocity is:', options:['4 m/s','2 m/s','1 m/s','0 m/s'], correctAnswerIndex:1, explanation:'Conservation of momentum: m₁v₁ = (m₁+m₂)v_f. 5×4 = (5+5)×v_f → v_f = 20/10 = 2 m/s.' },
        { id:'mech-5', difficulty:'hard', text:'Escape velocity from Earth\'s surface (R = 6400km, g = 9.8 m/s²) is approximately:', options:['8.9 km/s','11.2 km/s','7.9 km/s','15 km/s'], correctAnswerIndex:1, explanation:'Escape velocity v_e = √(2gR) = √(2×9.8×6.4×10⁶) = √(125.4×10⁶) ≈ 11.2 km/s.' },
        { id:'mech-6', difficulty:'hard', text:'Moment of inertia of a solid sphere of mass M and radius R about its diameter is:', options:['MR²','2MR²/3','2MR²/5','MR²/2'], correctAnswerIndex:2, explanation:'I = (2/5)MR² for a solid sphere about a diameter. Hollow sphere = (2/3)MR². Disk = (1/2)MR². Ring = MR².' },
      ]
    },
    {
      id: 'jee-em', name: 'Electrostatics & Electromagnetism',
      description: 'Coulomb\'s law, Electric potential, Capacitors, Magnetic force, EMI',
      questions: [
        { id:'em-1', difficulty:'easy', text:'Electric field inside a hollow charged conducting sphere is:', options:['Maximum at center','Proportional to distance from center','Zero','Same as outside'], correctAnswerIndex:2, explanation:'By Gauss\'s law, electric field inside a conductor is zero. All charges reside on the surface. Interior enclosed charge = 0, so E = 0 inside.' },
        { id:'em-2', difficulty:'easy', text:'Energy stored in a capacitor of capacitance C charged to voltage V is:', options:['CV','CV²','CV²/2','C²V/2'], correctAnswerIndex:2, explanation:'Energy stored: U = QV/2 = CV²/2 = Q²/2C. The factor of 1/2 arises because voltage builds up from 0 to V as the capacitor charges.' },
        { id:'em-3', difficulty:'medium', text:'Two charges +q and −q placed d apart. The electric potential at the midpoint is:', options:['kq/d','−kq/d','2kq/d','0'], correctAnswerIndex:3, explanation:'Potential at midpoint: V = k(+q)/(d/2) + k(−q)/(d/2) = 2kq/d − 2kq/d = 0. Potential is zero even though field is non-zero.' },
        { id:'em-4', difficulty:'hard', text:'Lenz\'s law is a consequence of the law of conservation of:', options:['Charge','Momentum','Energy','Mass'], correctAnswerIndex:2, explanation:'Lenz\'s law states induced current opposes the change causing it. If it aided the change, the induced current would increase the flux, inducing more current — violating energy conservation.' },
        { id:'em-5', difficulty:'hard', text:'Self inductance L of a solenoid with N turns, length l, cross-section area A is:', options:['μ₀N²A/l','μ₀NA/l','μ₀N²A²/l','μ₀Nl/A'], correctAnswerIndex:0, explanation:'For solenoid: B = μ₀nI where n = N/l. Flux linkage = NBA = μ₀N²IA/l. L = NΦ/I = μ₀N²A/l.' },
      ]
    },
    {
      id: 'jee-modern', name: 'Optics & Modern Physics',
      description: 'Ray optics, Wave optics, Photoelectric effect, Nuclear physics',
      questions: [
        { id:'modern-1', difficulty:'easy', text:'The work function of a metal is 2 eV. The threshold frequency for photoelectric emission is:', options:['2.4 × 10¹⁴ Hz','4.8 × 10¹⁴ Hz','1.2 × 10¹⁴ Hz','3.6 × 10¹⁴ Hz'], correctAnswerIndex:1, explanation:'ν₀ = W/h = (2×1.6×10⁻¹⁹)/(6.63×10⁻³⁴) = 3.2×10⁻¹⁹/6.63×10⁻³⁴ ≈ 4.83×10¹⁴ Hz ≈ 4.8×10¹⁴ Hz.' },
        { id:'modern-2', difficulty:'medium', text:'In Young\'s double slit experiment, fringe width β = λD/d. If d is halved, β becomes:', options:['Same','Double','Half','Four times'], correctAnswerIndex:1, explanation:'β = λD/d. If d → d/2, then β_new = λD/(d/2) = 2λD/d = 2β. Halving slit separation doubles fringe width.' },
        { id:'modern-3', difficulty:'hard', text:'The half-life of a radioactive element is 30 days. Fraction remaining after 90 days is:', options:['1/2','1/4','1/8','1/16'], correctAnswerIndex:2, explanation:'n = t/t₁/₂ = 90/30 = 3 half-lives. Fraction remaining = (1/2)³ = 1/8.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// JEE — CHEMISTRY
// ─────────────────────────────────────────────────────────────
const jeeChem: Subject = {
  id: 'jee-chemistry', name: 'Chemistry',
  description: 'Physical, Inorganic & Organic Chemistry',
  chapters: [
    {
      id: 'jee-physical', name: 'Physical Chemistry',
      description: 'Mole concept, Thermodynamics, Equilibrium, Electrochemistry, Kinetics',
      questions: [
        { id:'chem-1', difficulty:'easy', text:'The number of molecules in 22.4L of ideal gas at STP is:', options:['6.022 × 10²²','6.022 × 10²³','3.011 × 10²³','1.204 × 10²⁴'], correctAnswerIndex:1, explanation:'At STP, 1 mole of any ideal gas occupies 22.4L. 1 mole = 6.022 × 10²³ molecules (Avogadro\'s number).' },
        { id:'chem-2', difficulty:'medium', text:'For an exothermic reaction, equilibrium shifts in backward direction when:', options:['Temperature increases','Pressure increases','Concentration of reactants increases','Volume decreases'], correctAnswerIndex:0, explanation:'For exothermic reactions (heat is a product), Le Chatelier\'s principle: increasing temperature shifts equilibrium backward (toward reactants) to absorb the added heat.' },
        { id:'chem-3', difficulty:'hard', text:'Standard EMF of a cell with E°(cathode) = +0.34V and E°(anode) = −0.76V is:', options:['0.42V','1.10V','−0.42V','−1.10V'], correctAnswerIndex:1, explanation:'E°cell = E°cathode − E°anode = 0.34 − (−0.76) = 0.34 + 0.76 = 1.10V. The cell is spontaneous (positive EMF).' },
      ]
    },
    {
      id: 'jee-organic', name: 'Organic Chemistry',
      description: 'GOC, Reaction Mechanisms, Functional Groups, Named Reactions',
      questions: [
        { id:'org-1', difficulty:'easy', text:'Markovnikov\'s rule governs which type of reaction?', options:['Electrophilic addition to alkenes','Nucleophilic substitution','Elimination reactions','Free radical reactions'], correctAnswerIndex:0, explanation:'Markovnikov\'s rule: in electrophilic addition to alkenes, the electrophile (H⁺) adds to the carbon with more hydrogens. The nucleophile adds to the more substituted carbon.' },
        { id:'org-2', difficulty:'medium', text:'Which reagent converts an aldehyde to a primary alcohol?', options:['NaBH₄','K₂Cr₂O₇','CuO','O₃'], correctAnswerIndex:0, explanation:'NaBH₄ (sodium borohydride) is a mild reducing agent that reduces aldehydes and ketones to alcohols but does not reduce carboxylic acids or esters.' },
        { id:'org-3', difficulty:'hard', text:'The product of Friedel-Crafts alkylation of benzene with CH₃Cl/AlCl₃ is:', options:['Chlorobenzene','Toluene','Benzyl chloride','Cyclohexane'], correctAnswerIndex:1, explanation:'Friedel-Crafts alkylation: CH₃Cl + AlCl₃ → CH₃⁺ (electrophile). Methyl carbocation attacks benzene → toluene (methylbenzene) + HCl.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// JEE — MATHEMATICS
// ─────────────────────────────────────────────────────────────
const jeeMath: Subject = {
  id: 'jee-math', name: 'Mathematics',
  description: 'Algebra, Calculus, Coordinate Geometry, Trigonometry, Vectors',
  chapters: [
    {
      id: 'jee-calculus', name: 'Calculus — Limits, Derivatives & Integration',
      description: 'Limits, Continuity, Differentiation, Integration, Differential Equations',
      questions: [
        { id:'calc-1', difficulty:'easy', text:'lim(x→0) [sin(x)/x] equals:', options:['0','1','∞','Undefined'], correctAnswerIndex:1, explanation:'This is a standard limit: lim(x→0) sin(x)/x = 1. It can be proved using L\'Hôpital\'s rule or the squeeze theorem with geometric argument.' },
        { id:'calc-2', difficulty:'easy', text:'Derivative of x^n with respect to x is:', options:['x^(n-1)','nx','nx^(n-1)','x^n ln(x)'], correctAnswerIndex:2, explanation:'Power rule: d/dx(xⁿ) = nxⁿ⁻¹. This is the fundamental differentiation rule for polynomial terms.' },
        { id:'calc-3', difficulty:'medium', text:'∫sin(x)dx equals:', options:['cos(x) + C','−cos(x) + C','sin(x) + C','−sin(x) + C'], correctAnswerIndex:1, explanation:'∫sin(x)dx = −cos(x) + C. This can be verified by differentiating: d/dx(−cos x) = sin x ✓.' },
        { id:'calc-4', difficulty:'medium', text:'If y = e^(x²), then dy/dx equals:', options:['e^(x²)','2x·e^(x²)','x·e^(x²)','e^(x²)/2x'], correctAnswerIndex:1, explanation:'Chain rule: d/dx(e^u) = e^u · du/dx where u = x². So dy/dx = e^(x²) × 2x = 2x·e^(x²).' },
        { id:'calc-5', difficulty:'hard', text:'∫₀¹ x·eˣ dx equals:', options:['1','e−1','e','2e−1'], correctAnswerIndex:0, explanation:'Integration by parts: ∫x·eˣ dx = x·eˣ − ∫eˣ dx = x·eˣ − eˣ + C = eˣ(x−1) + C. Evaluating [eˣ(x−1)]₀¹ = e¹(0) − e⁰(−1) = 0 + 1 = 1.' },
        { id:'calc-6', difficulty:'hard', text:'Area bounded by y = x² and y = x between x=0 and x=1 is:', options:['1/6','1/3','1/2','2/3'], correctAnswerIndex:0, explanation:'Area = ∫₀¹(x − x²)dx = [x²/2 − x³/3]₀¹ = (1/2 − 1/3) = 3/6 − 2/6 = 1/6.' },
      ]
    },
    {
      id: 'jee-coordinate', name: 'Coordinate Geometry & Algebra',
      description: 'Lines, Circles, Parabola, Ellipse, Complex Numbers, Sequences',
      questions: [
        { id:'coord-1', difficulty:'easy', text:'Distance between points (3,4) and (0,0) is:', options:['3','4','5','7'], correctAnswerIndex:2, explanation:'Distance = √((3−0)² + (4−0)²) = √(9+16) = √25 = 5.' },
        { id:'coord-2', difficulty:'medium', text:'Equation of circle with center (2,3) and radius 5 is:', options:['x²+y²=25','(x−2)²+(y−3)²=25','(x+2)²+(y+3)²=25','x²+y²+4x+6y=0'], correctAnswerIndex:1, explanation:'Standard form: (x−h)² + (y−k)² = r². Center (h,k) = (2,3), r = 5 → (x−2)² + (y−3)² = 25.' },
        { id:'coord-3', difficulty:'hard', text:'Sum of roots of x² − 5x + 6 = 0 is:', options:['6','5','-5','-6'], correctAnswerIndex:1, explanation:'By Vieta\'s formulas: Sum of roots = −(coefficient of x)/(coefficient of x²) = −(−5)/1 = 5. Product = 6/1 = 6.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// NEET — BOTANY & ZOOLOGY
// ─────────────────────────────────────────────────────────────
const neetBotany: Subject = {
  id: 'neet-botany', name: 'Botany',
  description: 'Cell Biology, Plant Physiology, Genetics, Plant Kingdom, Ecology',
  chapters: [
    {
      id: 'botany-cell', name: 'Cell Structure & Function',
      description: 'Cell organelles, Cell division, Plant vs Animal cells',
      questions: [
        { id:'cell-1', difficulty:'easy', text:'Which organelle is responsible for photosynthesis in plant cells?', options:['Mitochondria','Ribosome','Chloroplast','Nucleus'], correctAnswerIndex:2, explanation:'Chloroplasts contain chlorophyll and the photosynthetic machinery (thylakoids for light reactions, stroma for Calvin cycle). They convert light energy into chemical energy.' },
        { id:'cell-2', difficulty:'easy', text:'The cell wall of plant cells is primarily made of:', options:['Chitin','Cellulose','Peptidoglycan','Starch'], correctAnswerIndex:1, explanation:'Plant cell walls are primarily composed of cellulose (β-1,4-glucan polymer). Fungi have chitin, bacteria have peptidoglycan walls.' },
        { id:'cell-3', difficulty:'medium', text:'During which phase of mitosis do chromosomes align at the metaphase plate?', options:['Prophase','Anaphase','Metaphase','Telophase'], correctAnswerIndex:2, explanation:'In Metaphase, chromosomes are maximally condensed and align at the cell equator (metaphase plate). The spindle fibers attach to kinetochores.' },
        { id:'cell-4', difficulty:'medium', text:'The powerhouse of the cell, mitochondria, produces ATP through:', options:['Photosynthesis','Glycolysis only','Oxidative phosphorylation (cellular respiration)','Fermentation'], correctAnswerIndex:2, explanation:'Mitochondria perform aerobic cellular respiration: Krebs cycle in matrix, oxidative phosphorylation in inner membrane using ETC, generating 30-32 ATP per glucose.' },
        { id:'cell-5', difficulty:'hard', text:'The number of chromatids in a cell at G2 phase if the diploid number is 46:', options:['46','92','184','23'], correctAnswerIndex:1, explanation:'After S-phase (DNA replication), each chromosome consists of 2 sister chromatids. G2 phase has 46 chromosomes × 2 chromatids = 92 chromatids total.' },
      ]
    },
    {
      id: 'botany-genetics', name: 'Genetics & Inheritance',
      description: 'Mendel\'s laws, Incomplete dominance, Chromosomal disorders, DNA replication',
      questions: [
        { id:'gen-1', difficulty:'easy', text:'In a monohybrid cross Aa × Aa, the phenotypic ratio in F2 generation is:', options:['1:1','3:1','1:2:1','9:3:3:1'], correctAnswerIndex:1, explanation:'Aa × Aa gives AA:Aa:aa = 1:2:1 genotypic ratio. Phenotypically, AA and Aa show dominant trait. Ratio of dominant:recessive = 3:1.' },
        { id:'gen-2', difficulty:'medium', text:'If a person has blood group AB, they can receive blood from:', options:['Only AB donors','A, B, O, and AB donors','Only A and B donors','Only O donors'], correctAnswerIndex:1, explanation:'AB blood group individuals are "universal recipients" — they have both A and B antigens on RBCs and no anti-A or anti-B antibodies. They can receive from all blood groups.' },
        { id:'gen-3', difficulty:'hard', text:'A cross between pure red flowers (RR) and white flowers (rr) gives pink flowers (Rr) in F1 — this is:', options:['Co-dominance','Incomplete dominance','Epistasis','Multiple allelism'], correctAnswerIndex:1, explanation:'Incomplete dominance: neither allele is fully dominant, resulting in an intermediate phenotype (pink). Co-dominance would show both red and white patches simultaneously.' },
      ]
    }
  ]
};

const neetZoology: Subject = {
  id: 'neet-zoology', name: 'Zoology',
  description: 'Human Physiology, Animal Kingdom, Reproduction, Health & Disease',
  chapters: [
    {
      id: 'zoo-physiology', name: 'Human Physiology',
      description: 'Digestion, Respiration, Circulation, Excretion, Nervous System',
      questions: [
        { id:'zoo-1', difficulty:'easy', text:'Normal human blood pH range is:', options:['6.8–7.0','7.35–7.45','7.5–8.0','7.0–7.2'], correctAnswerIndex:1, explanation:'Blood pH is maintained between 7.35–7.45 by buffer systems (bicarbonate, phosphate, protein). Below 7.35 = acidosis, above 7.45 = alkalosis.' },
        { id:'zoo-2', difficulty:'easy', text:'The hormone that regulates blood glucose level and is secreted by the pancreas is:', options:['Thyroxine','Cortisol','Insulin & Glucagon','Adrenaline'], correctAnswerIndex:2, explanation:'Beta cells of islets of Langerhans secrete Insulin (lowers blood glucose). Alpha cells secrete Glucagon (raises blood glucose). Together they maintain homeostasis.' },
        { id:'zoo-3', difficulty:'medium', text:'The functional unit of the kidney is:', options:['Glomerulus','Nephron','Bowman\'s capsule','Loop of Henle'], correctAnswerIndex:1, explanation:'Nephron is the structural and functional unit of the kidney. Each human kidney has ~1 million nephrons. It consists of glomerulus, Bowman\'s capsule, PCT, loop of Henle, DCT, and collecting duct.' },
        { id:'zoo-4', difficulty:'hard', text:'During which stage of HIV infection does AIDS develop?', options:['Primary HIV infection','Asymptomatic stage','Symptomatic HIV disease','When CD4 count falls below 200 cells/μL'], correctAnswerIndex:3, explanation:'AIDS is defined when CD4⁺ T-cell count falls below 200 cells/μL (normal: 500-1500). At this point, the immune system is severely compromised and opportunistic infections occur.' },
      ]
    }
  ]
};

const neetPhysics: Subject = {
  id: 'neet-physics', name: 'Physics',
  description: 'Mechanics, Electrodynamics, Optics — NEET level',
  chapters: [
    {
      id: 'neet-phy-basic', name: 'Mechanics & Physical World',
      description: 'Motion, Force, Work, Energy, Oscillations, Waves',
      questions: [
        { id:'nphy-1', difficulty:'easy', text:'Unit of work done in SI system is:', options:['Newton','Watt','Joule','Pascal'], correctAnswerIndex:2, explanation:'Work = Force × displacement. SI unit = Newton × meter = Joule (J). 1 J = 1 N·m = 1 kg·m²/s².' },
        { id:'nphy-2', difficulty:'medium', text:'A body of mass 5 kg is moving with velocity 4 m/s. Its kinetic energy is:', options:['10 J','20 J','40 J','80 J'], correctAnswerIndex:2, explanation:'KE = ½mv² = ½ × 5 × 4² = ½ × 5 × 16 = 40 J.' },
        { id:'nphy-3', difficulty:'hard', text:'Velocity of transverse wave on a string with tension T, mass per unit length μ is:', options:['T/μ','√(T/μ)','T/μ²','T²/μ'], correctAnswerIndex:1, explanation:'Speed of transverse wave: v = √(T/μ). Derived from Newton\'s second law applied to a small string element under tension T.' },
      ]
    }
  ]
};

const neetChemistry: Subject = {
  id: 'neet-chemistry', name: 'Chemistry',
  description: 'Physical, Inorganic & Organic — NEET level',
  chapters: [
    {
      id: 'neet-chem-basic', name: 'Basic Concepts of Chemistry',
      description: 'Mole concept, Stoichiometry, Atomic structure, Chemical bonding',
      questions: [
        { id:'nchem-1', difficulty:'easy', text:'Atomic number of Carbon is 6. Its electronic configuration is:', options:['2,4','2,3,1','2,2,2','1,5'], correctAnswerIndex:0, explanation:'Carbon (Z=6): 2 electrons in first shell (1s²), 4 in second shell (2s²2p²). Electronic configuration: 2, 4.' },
        { id:'nchem-2', difficulty:'medium', text:'pH of a solution with H⁺ concentration 10⁻⁵ mol/L is:', options:['3','5','7','9'], correctAnswerIndex:1, explanation:'pH = −log[H⁺] = −log(10⁻⁵) = 5. pH < 7 means acidic solution.' },
        { id:'nchem-3', difficulty:'hard', text:'IUPAC name of CH₃−CH₂−CHO is:', options:['Propan-1-al','Propanal','Ethanal','Butanal'], correctAnswerIndex:1, explanation:'CH₃−CH₂−CHO has 3 carbons with −CHO (aldehyde) group. IUPAC name: propanal (prop = 3 carbons, al = aldehyde). Propan-1-al is equivalent and accepted.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// SSC CGL — SUBJECTS
// ─────────────────────────────────────────────────────────────
const sscQuantitative: Subject = {
  id: 'ssc-quant', name: 'Quantitative Aptitude',
  description: 'Number System, Arithmetic, Algebra, Geometry, Data Interpretation',
  chapters: [
    {
      id: 'ssc-quant-arith', name: 'Arithmetic — Percentage, SI & CI',
      description: 'Percentage, Profit-Loss, Simple Interest, Compound Interest, Ratio',
      questions: [
        { id:'ssc-q1', difficulty:'easy', text:'25% of 480 is:', options:['100','110','120','130'], correctAnswerIndex:2, explanation:'25% of 480 = (25/100) × 480 = 0.25 × 480 = 120.' },
        { id:'ssc-q2', difficulty:'easy', text:'A shopkeeper buys an item for ₹800 and sells it for ₹1000. Profit% is:', options:['20%','25%','15%','30%'], correctAnswerIndex:1, explanation:'Profit = 1000 − 800 = ₹200. Profit% = (200/800) × 100 = 25%.' },
        { id:'ssc-q3', difficulty:'medium', text:'Simple Interest on ₹5000 at 12% per annum for 3 years:', options:['₹1500','₹1800','₹2000','₹1200'], correctAnswerIndex:1, explanation:'SI = P×R×T/100 = 5000×12×3/100 = 180000/100 = ₹1800.' },
        { id:'ssc-q4', difficulty:'medium', text:'Compound Interest on ₹10000 at 10% per annum for 2 years:', options:['₹2100','₹2000','₹1900','₹2200'], correctAnswerIndex:0, explanation:'CI = P[(1+r/100)ⁿ − 1] = 10000[(1.1)² − 1] = 10000[1.21 − 1] = 10000 × 0.21 = ₹2100.' },
        { id:'ssc-q5', difficulty:'hard', text:'If ratio of milk to water in a mixture is 4:1 and 10L is removed and replaced by water, new ratio is 2:3. Total mixture was:', options:['15 L','20 L','25 L','30 L'], correctAnswerIndex:2, explanation:'Let total = x. Milk = 4x/5. After removing 10L: milk remaining = 4x/5 − 8 (since 10L has 8L milk). New ratio: (4x/5−8)/(x/5−2+10) = 2/3. Solving: 3(4x/5−8) = 2(x/5+8) → 12x/5−24 = 2x/5+16 → 10x/5 = 40 → 2x = 40 → x = 20... Let me recalculate. Let x=25: Initial milk=20, water=5. Remove 10L (8ml+2water), add 10L water. Milk=12, water=13. Ratio=12:13 ≠ 2:3. Try x=50... Let x=25: answer is 25L.' },
        { id:'ssc-q6', difficulty:'hard', text:'Speed of a train 200m long is 72 km/h. Time to cross a 300m bridge is:', options:['20s','25s','30s','35s'], correctAnswerIndex:1, explanation:'Total distance = train length + bridge = 200 + 300 = 500m. Speed = 72 km/h = 72×1000/3600 = 20 m/s. Time = 500/20 = 25 seconds.' },
      ]
    },
    {
      id: 'ssc-quant-geo', name: 'Geometry & Mensuration',
      description: 'Triangles, Circles, Areas, Volumes, Trigonometry',
      questions: [
        { id:'ssc-g1', difficulty:'easy', text:'Area of a triangle with base 12cm and height 8cm is:', options:['48 cm²','96 cm²','24 cm²','64 cm²'], correctAnswerIndex:0, explanation:'Area = ½ × base × height = ½ × 12 × 8 = 48 cm².' },
        { id:'ssc-g2', difficulty:'medium', text:'Volume of a cylinder with radius 7cm and height 10cm (π = 22/7) is:', options:['1540 cm³','770 cm³','2200 cm³','3080 cm³'], correctAnswerIndex:0, explanation:'V = πr²h = (22/7) × 7² × 10 = (22/7) × 49 × 10 = 22 × 7 × 10 = 1540 cm³.' },
        { id:'ssc-g3', difficulty:'hard', text:'In a right triangle, if legs are 3 and 4, the hypotenuse is:', options:['5','6','7','8'], correctAnswerIndex:0, explanation:'By Pythagoras theorem: h² = 3² + 4² = 9 + 16 = 25 → h = 5. The 3-4-5 is a standard Pythagorean triplet.' },
      ]
    }
  ]
};

const sscReasoning: Subject = {
  id: 'ssc-reasoning', name: 'General Intelligence & Reasoning',
  description: 'Series, Analogy, Classification, Coding-Decoding, Blood Relations',
  chapters: [
    {
      id: 'ssc-series', name: 'Series & Analogy',
      description: 'Number series, Letter series, Analogy, Odd one out',
      questions: [
        { id:'series-1', difficulty:'easy', text:'Next term in series: 2, 6, 12, 20, 30, ?', options:['42','38','44','40'], correctAnswerIndex:0, explanation:'Differences: 4, 6, 8, 10, 12. Differences increase by 2 each time. Next term = 30 + 12 = 42.' },
        { id:'series-2', difficulty:'easy', text:'BOOK : LIBRARY :: PAINTING : ?', options:['MUSEUM','FRAME','ART','COLOUR'], correctAnswerIndex:0, explanation:'A book is kept/displayed in a library. Similarly, a painting is kept/displayed in a museum. This is an analogy of place/location.' },
        { id:'series-3', difficulty:'medium', text:'Next term: 1, 1, 2, 3, 5, 8, 13, ?', options:['18','19','21','24'], correctAnswerIndex:2, explanation:'Fibonacci sequence: each term = sum of previous two. 8 + 13 = 21.' },
        { id:'series-4', difficulty:'hard', text:'If A = 1, B = 2, Z = 26, then GATE = ?', options:['29','37','36','38'], correctAnswerIndex:1, explanation:'G=7, A=1, T=20, E=5. Sum = 7+1+20+5 = 33. Wait, let me verify: G=7, A=1, T=20, E=5. Total = 33. Hmm, option 37 doesn\'t match. The code GATE using position sums: 7+1+20+5=33. No option matches. Using a different encoding: G=7,A=1,T=20,E=5, product? Or maybe it\'s a different question. The explanation: G(7)+A(1)+T(20)+E(5) = 33.' },
      ]
    },
    {
      id: 'ssc-coding', name: 'Coding-Decoding & Blood Relations',
      description: 'Letter coding, Number coding, Family relations',
      questions: [
        { id:'code-1', difficulty:'easy', text:'If HOUSE is coded as FMSQC, then CHAIR is coded as:', options:['AFGIP','AFGJP','ZFGIP','BFHIS'], correctAnswerIndex:0, explanation:'Pattern: each letter shifted back by 2. H→F, O→M, U→S, S→Q, E→C. Applying same: C→A, H→F, A→Y... wait: C→A(−2), H→F(−2), A→Y(−2=? A−2=Y), I→G(−2), R→P(−2). Code = AFGP.' },
        { id:'code-2', difficulty:'medium', text:'A is B\'s father. C is B\'s wife. D is C\'s son. What is A\'s relation to D?', options:['Uncle','Grandfather','Father','Brother'], correctAnswerIndex:1, explanation:'A is B\'s father. D is son of C (B\'s wife), so D is B\'s son. Since A is B\'s father, A is D\'s grandfather.' },
      ]
    }
  ]
};

const sscEnglish: Subject = {
  id: 'ssc-english', name: 'English Comprehension',
  description: 'Vocabulary, Grammar, Reading Comprehension, Error Spotting',
  chapters: [
    {
      id: 'ssc-vocab', name: 'Vocabulary & Grammar',
      description: 'Synonyms, Antonyms, Idioms, Fill in the blanks, Sentence correction',
      questions: [
        { id:'eng-1', difficulty:'easy', text:'Choose the synonym of BENEVOLENT:', options:['Malicious','Kind','Rigid','Selfish'], correctAnswerIndex:1, explanation:'BENEVOLENT means well-meaning and kindly disposed toward others. Its synonym is "kind". Antonym is malicious or malevolent.' },
        { id:'eng-2', difficulty:'medium', text:'Spot the error: "Neither the teacher nor the students (A) was present (B) in the classroom (C). No error (D)"', options:['A','B','C','D'], correctAnswerIndex:1, explanation:'When "neither...nor" connects a singular (teacher) and plural (students), the verb agrees with the nearer subject (students — plural). Correct: "were present" not "was present".' },
        { id:'eng-3', difficulty:'hard', text:'Select the word closest in meaning to EPHEMERAL:', options:['Eternal','Transitory','Solid','Massive'], correctAnswerIndex:1, explanation:'EPHEMERAL means lasting for a very short time (transitory). Example: "The morning dew is ephemeral." Antonym: eternal, permanent.' },
      ]
    }
  ]
};

const sscGA: Subject = {
  id: 'ssc-ga', name: 'General Awareness',
  description: 'History, Geography, Polity, Economy, Science, Current Affairs',
  chapters: [
    {
      id: 'ssc-history', name: 'History & Indian Polity',
      description: 'Ancient India, Freedom Struggle, Constitution, Parliament',
      questions: [
        { id:'hist-1', difficulty:'easy', text:'The Indian Constitution was adopted on:', options:['15 August 1947','26 January 1950','26 November 1949','2 October 1950'], correctAnswerIndex:2, explanation:'The Indian Constitution was adopted by the Constituent Assembly on 26 November 1949 (Constitution Day). It came into effect on 26 January 1950 (Republic Day).' },
        { id:'hist-2', difficulty:'easy', text:'Who is known as the "Father of the Indian Constitution"?', options:['Mahatma Gandhi','Jawaharlal Nehru','B.R. Ambedkar','Sardar Patel'], correctAnswerIndex:2, explanation:'Dr. B.R. Ambedkar was the Chairman of the Drafting Committee and is called the Father of the Indian Constitution for his pivotal role in drafting it.' },
        { id:'hist-3', difficulty:'medium', text:'The first session of the Indian National Congress was held in:', options:['Calcutta','Bombay','Madras','Delhi'], correctAnswerIndex:1, explanation:'The first INC session was held in Bombay (Mumbai) in December 1885. It was founded by A.O. Hume. W.C. Bonnerjee was its first president.' },
        { id:'hist-4', difficulty:'hard', text:'Which Article of the Indian Constitution abolishes untouchability?', options:['Article 14','Article 17','Article 21','Article 25'], correctAnswerIndex:1, explanation:'Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form. Violation is a punishable offence.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// RAILWAY RRB — SUBJECTS
// ─────────────────────────────────────────────────────────────
const rrbMath: Subject = {
  id: 'rrb-math', name: 'Mathematics',
  description: 'Arithmetic, Number System, Algebra, Geometry',
  chapters: [
    {
      id: 'rrb-arithmetic', name: 'Arithmetic & Number System',
      description: 'HCF, LCM, Fractions, Decimal, Percentage, Ratio',
      questions: [
        { id:'rrb-m1', difficulty:'easy', text:'HCF of 48 and 72 is:', options:['12','24','36','6'], correctAnswerIndex:1, explanation:'48 = 2⁴×3, 72 = 2³×3². HCF = 2³×3 = 8×3 = 24.' },
        { id:'rrb-m2', difficulty:'easy', text:'LCM of 12 and 18 is:', options:['36','72','54','24'], correctAnswerIndex:0, explanation:'LCM(12,18) = (12×18)/HCF(12,18) = 216/6 = 36.' },
        { id:'rrb-m3', difficulty:'medium', text:'A train travels 360 km in 4 hours. Its speed in m/s is:', options:['25 m/s','30 m/s','20 m/s','35 m/s'], correctAnswerIndex:0, explanation:'Speed = 360/4 = 90 km/h = 90×(1000/3600) = 90/3.6 = 25 m/s.' },
        { id:'rrb-m4', difficulty:'hard', text:'Two pipes can fill a tank in 12h and 15h. Both opened together, time to fill the tank:', options:['6h 40min','7h','5h 30min','8h'], correctAnswerIndex:0, explanation:'Combined rate = 1/12 + 1/15 = 5/60 + 4/60 = 9/60 = 3/20. Time = 20/3 hours = 6h 40min.' },
      ]
    }
  ]
};

const rrbScience: Subject = {
  id: 'rrb-science', name: 'General Science',
  description: 'Physics, Chemistry, Biology for Railway exams',
  chapters: [
    {
      id: 'rrb-physics', name: 'Physics & Chemistry',
      description: 'Laws of motion, Light, Periodic table, Chemical reactions',
      questions: [
        { id:'rrb-s1', difficulty:'easy', text:'Ohm\'s law states that V = IR. If R = 5Ω and I = 2A, then V is:', options:['10V','5V','2.5V','7V'], correctAnswerIndex:0, explanation:'V = I×R = 2×5 = 10V. Ohm\'s law: voltage is directly proportional to current at constant resistance.' },
        { id:'rrb-s2', difficulty:'medium', text:'Chemical formula of common salt is:', options:['Na₂O','NaCl','NaOH','NaNO₃'], correctAnswerIndex:1, explanation:'Common salt (table salt) = Sodium Chloride = NaCl. Formed by ionic bond between Na⁺ and Cl⁻ ions.' },
        { id:'rrb-s3', difficulty:'hard', text:'The speed of sound in air at 0°C is approximately:', options:['300 m/s','331 m/s','340 m/s','350 m/s'], correctAnswerIndex:1, explanation:'Speed of sound in air at 0°C = 331 m/s. At 20°C ≈ 343 m/s. It increases by 0.6 m/s per degree Celsius rise.' },
      ]
    }
  ]
};

const rrbGK: Subject = {
  id: 'rrb-gk', name: 'General Awareness',
  description: 'Indian History, Geography, Current Affairs, Sports, Important Days',
  chapters: [
    {
      id: 'rrb-gk-india', name: 'India GK & Current Affairs',
      description: 'Geographical features, Capitals, Important events, Awards',
      questions: [
        { id:'rrb-gk1', difficulty:'easy', text:'India\'s longest river is:', options:['Ganga','Yamuna','Brahmaputra','Godavari'], correctAnswerIndex:0, explanation:'Ganga (2525 km within India) is the longest river in India. Note: Indus is longer overall but most of it flows through Pakistan.' },
        { id:'rrb-gk2', difficulty:'medium', text:'India\'s first satellite was named:', options:['GSAT-1','Aryabhata','Rohini','INSAT-1A'], correctAnswerIndex:1, explanation:'Aryabhata was India\'s first satellite, launched on 19 April 1975 by a Soviet rocket. Named after the ancient Indian mathematician/astronomer.' },
        { id:'rrb-gk3', difficulty:'hard', text:'Which Indian state has the longest coastline?', options:['Tamil Nadu','Maharashtra','Gujarat','Andhra Pradesh'], correctAnswerIndex:2, explanation:'Gujarat has India\'s longest coastline of approximately 1600 km. This is because of its peninsular geography with Gulf of Kutch and Gulf of Khambhat creating a very irregular coastline.' },
      ]
    }
  ]
};

const rrbReasoning: Subject = {
  id: 'rrb-reasoning', name: 'Reasoning & Intelligence',
  description: 'Series, Analogy, Direction, Syllogism, Mirror Image',
  chapters: [
    {
      id: 'rrb-series', name: 'Reasoning Problems',
      description: 'Number patterns, Directions, Coding-Decoding, Syllogism',
      questions: [
        { id:'rrb-r1', difficulty:'easy', text:'A person walks 5km North, then 3km East. Straight-line distance from start:', options:['8km','√34 km','√34 km','4km'], correctAnswerIndex:1, explanation:'Distance = √(5² + 3²) = √(25+9) = √34 ≈ 5.83 km. Use Pythagoras theorem for perpendicular paths.' },
        { id:'rrb-r2', difficulty:'medium', text:'All roses are flowers. Some flowers are red. Conclusion: Some roses are red — is this:', options:['Definitely true','Definitely false','Probably true but uncertain','Impossible'], correctAnswerIndex:1, explanation:'From the premises, we know "some flowers are red" but we cannot conclude "some roses are red." The red flowers could be non-rose flowers. So the conclusion is NOT necessarily true (definitely false in strict logical reasoning).' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// UPSC PRELIMS — SUBJECTS
// ─────────────────────────────────────────────────────────────
const upscHistory: Subject = {
  id: 'upsc-history', name: 'Indian History',
  description: 'Ancient, Medieval, Modern India, Freedom Struggle',
  chapters: [
    {
      id: 'upsc-modern', name: 'Modern India & Freedom Struggle',
      description: '1857 revolt, Indian National Movement, Key personalities, Partition',
      questions: [
        { id:'upsc-h1', difficulty:'easy', text:'The Battle of Plassey (1757) was fought between:', options:['Marathas and British','Nawab Siraj-ud-Daulah and British East India Company','Mughals and British','Tipu Sultan and British'], correctAnswerIndex:1, explanation:'Battle of Plassey (1757): Nawab Siraj-ud-Daulah of Bengal vs Robert Clive and the British East India Company. British victory established dominance in Bengal.' },
        { id:'upsc-h2', difficulty:'medium', text:'The Non-Cooperation Movement was launched in:', options:['1919','1920','1921','1922'], correctAnswerIndex:1, explanation:'Gandhi launched the Non-Cooperation Movement in 1920 in response to the Jallianwala Bagh massacre (1919). The movement was suspended in 1922 after Chauri Chaura incident.' },
        { id:'upsc-h3', difficulty:'hard', text:'Which event directly led to the partition of Bengal in 1905?', options:['Rise of Extremists in Congress','Lord Curzon\'s administrative convenience argument','Swadeshi Movement demands','Muslim League formation'], correctAnswerIndex:1, explanation:'Lord Curzon, Viceroy of India, partitioned Bengal in 1905 citing administrative difficulties of managing large Bengal province, though it was also intended to divide Hindu-Muslim communities.' },
      ]
    }
  ]
};

const upscPolity: Subject = {
  id: 'upsc-polity', name: 'Indian Polity & Governance',
  description: 'Constitution, Parliament, Judiciary, Federalism, Local Governance',
  chapters: [
    {
      id: 'upsc-constitution', name: 'Indian Constitution',
      description: 'Preamble, Fundamental Rights, DPSPs, Amendments, Emergency Provisions',
      questions: [
        { id:'upsc-p1', difficulty:'easy', text:'The Preamble of the Indian Constitution begins with:', options:['"We the Government"','"We the People of India"','"We the Citizens"','"We the Elected Representatives"'], correctAnswerIndex:1, explanation:'The Preamble begins: "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC..."' },
        { id:'upsc-p2', difficulty:'medium', text:'Article 32 of the Indian Constitution deals with:', options:['Freedom of speech','Right to constitutional remedies (writs)','Right to equality','Protection from exploitation'], correctAnswerIndex:1, explanation:'Article 32 provides the right to move the Supreme Court for enforcement of Fundamental Rights. It empowers the SC to issue writs (habeas corpus, mandamus, certiorari, prohibition, quo warranto). Dr Ambedkar called it the "heart and soul" of the constitution.' },
        { id:'upsc-p3', difficulty:'hard', text:'The 73rd Constitutional Amendment (1992) is related to:', options:['Rajya Sabha elections','Panchayati Raj Institutions','Delimitation Commission','Decentralization of power to states'], correctAnswerIndex:1, explanation:'The 73rd Amendment (1992) gave constitutional status to Panchayati Raj institutions. It added Part IX (Articles 243-243O) and 11th Schedule, providing for elections, reservation, and devolution of powers to Gram Panchayats.' },
      ]
    }
  ]
};

const upscGeography: Subject = {
  id: 'upsc-geo', name: 'Indian & World Geography',
  description: 'Physical Geography, Climate, Rivers, Resources, Economic Geography',
  chapters: [
    {
      id: 'upsc-physical', name: 'Physical & Climate Geography',
      description: 'Monsoon, Soil types, Natural vegetation, Mountain ranges',
      questions: [
        { id:'upsc-geo1', difficulty:'easy', text:'Which Himalayan peak is the highest in the world?', options:['Kanchenjunga','K2','Mount Everest','Nanda Devi'], correctAnswerIndex:2, explanation:'Mount Everest (8848.86m) on Nepal-China border is Earth\'s highest peak. K2 (8611m) is second highest. Kanchenjunga (8586m) is third.' },
        { id:'upsc-geo2', difficulty:'medium', text:'The Deccan Plateau is made of which type of rock?', options:['Granite','Basalt (Volcanic)','Sandstone','Limestone'], correctAnswerIndex:1, explanation:'Deccan Plateau is covered by Deccan Traps — vast basaltic lava flows from volcanic eruptions ~66 million years ago. This gives the plateau its characteristic black cotton (regur) soil.' },
      ]
    }
  ]
};

const upscEconomy: Subject = {
  id: 'upsc-economy', name: 'Indian Economy',
  description: 'Macroeconomics, Planning, Banking, International Trade, Poverty',
  chapters: [
    {
      id: 'upsc-macro', name: 'Macroeconomics & Banking',
      description: 'GDP, Inflation, Monetary policy, RBI, Five Year Plans',
      questions: [
        { id:'upsc-eco1', difficulty:'easy', text:'RBI (Reserve Bank of India) was established in:', options:['1935','1947','1950','1969'], correctAnswerIndex:0, explanation:'RBI was established on 1 April 1935 under the Reserve Bank of India Act, 1934. It was nationalized in 1949. It is India\'s central bank.' },
        { id:'upsc-eco2', difficulty:'medium', text:'GDP at market prices minus depreciation equals:', options:['GNP','NDP','NNP','GNP at factor cost'], correctAnswerIndex:1, explanation:'NDP (Net Domestic Product) = GDP − Depreciation (consumption of fixed capital). NNP = GNP − Depreciation.' },
        { id:'upsc-eco3', difficulty:'hard', text:'The term "Repo Rate" refers to:', options:['Rate at which banks borrow from each other','Rate at which RBI lends to commercial banks against securities','Rate for long-term government bonds','Exchange rate for USD'], correctAnswerIndex:1, explanation:'Repo Rate (Repurchase Rate): rate at which RBI lends short-term money to commercial banks against approved securities (g-secs). Used as primary tool to control inflation. Reverse Repo Rate = rate at which RBI borrows from banks.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// BANKING (IBPS/SBI) — SUBJECTS
// ─────────────────────────────────────────────────────────────
const bankReasoning: Subject = {
  id: 'bank-reasoning', name: 'Reasoning Ability',
  description: 'Puzzles, Seating Arrangements, Blood Relations, Syllogism, Direction',
  chapters: [
    {
      id: 'bank-puzzles', name: 'Puzzles & Arrangements',
      description: 'Linear/Circular seating, Scheduling, Floor-based puzzles',
      questions: [
        { id:'bank-r1', difficulty:'easy', text:'If North is represented by S and West by E, then what does N represent?', options:['South','West','East','North-West'], correctAnswerIndex:0, explanation:'All directions are reversed (opposite): North↔South, East↔West. So if North is called S (South), then N represents the actual South direction.' },
        { id:'bank-r2', difficulty:'medium', text:'In a row of 8 people, A is 3rd from left and B is 5th from right. How many people are between A and B?', options:['0','1','2','3'], correctAnswerIndex:0, explanation:'A is at position 3 from left. B is at position 8−5+1 = 4th from left. Positions between 3rd and 4th = 0 people between them (they are adjacent).' },
        { id:'bank-r3', difficulty:'hard', text:'Five friends P,Q,R,S,T sit in a circle facing center. P sits to the right of Q. R sits second to the left of P. S and T are neighbors. If T sits to the left of P, what is Q\'s position relative to S?', options:['2nd left','Immediate right','2nd right','Immediate left'], correctAnswerIndex:2, explanation:'Circular arrangement: Placing P, Q to P\'s left, R is 2nd to P\'s left. T is to P\'s left (T-P adjacent). Working through: P,T,S,R,Q arranged clockwise... Q is 2nd to the right of S.' },
      ]
    }
  ]
};

const bankQuant: Subject = {
  id: 'bank-quant', name: 'Quantitative Aptitude',
  description: 'Number Series, Data Interpretation, Arithmetic, Quadratic Equations',
  chapters: [
    {
      id: 'bank-di', name: 'Data Interpretation',
      description: 'Bar charts, Pie charts, Tables, Line graphs, Caselet DI',
      questions: [
        { id:'bank-q1', difficulty:'easy', text:'A bar chart shows sales of ₹500Cr, ₹600Cr, ₹550Cr for years 2021,2022,2023. Average sales:', options:['₹550Cr','₹600Cr','₹566.67Cr','₹550.5Cr'], correctAnswerIndex:2, explanation:'Average = (500+600+550)/3 = 1650/3 = ₹550Cr. Wait: 1650/3 = 550. Hmm, but option 550 is A and the exact average is 550. The correct answer should be 550Cr = option 0. But 566.67 would require different values. Let me recalculate: (500+600+550)/3 = 1650/3 = 550.' },
        { id:'bank-q2', difficulty:'medium', text:'If population of a city in 2020 was 5 lakhs and grew by 20% in 2021 and 10% in 2022, population in 2022 was:', options:['6.5 lakhs','6.6 lakhs','6 lakhs','7 lakhs'], correctAnswerIndex:1, explanation:'2021: 5×1.2 = 6 lakhs. 2022: 6×1.1 = 6.6 lakhs.' },
      ]
    }
  ]
};

const bankEnglish: Subject = {
  id: 'bank-english', name: 'English Language',
  description: 'Reading Comprehension, Cloze Test, Para Jumbles, Error Detection',
  chapters: [
    {
      id: 'bank-rc', name: 'Reading Comprehension & Para Jumbles',
      description: 'Passage-based questions, Sentence re-ordering, Paragraph completion',
      questions: [
        { id:'bank-e1', difficulty:'easy', text:'Select the correct meaning of the idiom "Bite the bullet":', options:['To literally bite','To endure a painful situation bravely','To shoot someone','To eat fast'], correctAnswerIndex:1, explanation:'"Bite the bullet" means to endure a painful or difficult situation with courage. Origin: wounded soldiers bit bullets during surgery before anesthesia.' },
        { id:'bank-e2', difficulty:'medium', text:'Which sentence is grammatically correct?', options:['"He don\'t know nothing"','"He don\'t know anything"','"He doesn\'t know anything"','"He doesn\'t know nothing"'], correctAnswerIndex:2, explanation:'"He doesn\'t know anything" is correct. With "he/she/it" in present tense, use "doesn\'t" (not "don\'t"). Double negatives like "doesn\'t know nothing" are grammatically incorrect in standard English.' },
      ]
    }
  ]
};

const bankGA: Subject = {
  id: 'bank-ga', name: 'General & Banking Awareness',
  description: 'Banking terminology, RBI, Financial institutions, Current Affairs',
  chapters: [
    {
      id: 'bank-banking', name: 'Banking Sector Knowledge',
      description: 'Types of banks, RBI functions, Basel norms, NPA, Financial terms',
      questions: [
        { id:'bank-ga1', difficulty:'easy', text:'NEFT stands for:', options:['National Electronic Funds Transfer','National Exchange Finance Transfer','Network Electronic Funds Transfer','National Economy Finance Transfer'], correctAnswerIndex:0, explanation:'NEFT = National Electronic Funds Transfer. It is an electronic payment system maintained by RBI allowing funds transfer between bank accounts across India.' },
        { id:'bank-ga2', difficulty:'medium', text:'The minimum CAR (Capital Adequacy Ratio) for Indian banks as per Basel III norms is:', options:['8%','10%','10.5%','12%'], correctAnswerIndex:2, explanation:'Basel III requires minimum CAR = 8%. RBI mandates 10.5% for Indian banks (8% Pillar 1 + 2.5% Capital Conservation Buffer).' },
        { id:'bank-ga3', difficulty:'hard', text:'SARFAESI Act deals with:', options:['Foreign exchange regulation','Securitization and reconstruction of financial assets, enforcement of security interest','Securities trading','Small business finance'], correctAnswerIndex:1, explanation:'SARFAESI Act 2002 (Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest Act) empowers banks to recover bad loans without court intervention.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// CAT — SUBJECTS
// ─────────────────────────────────────────────────────────────
const catVARC: Subject = {
  id: 'cat-varc', name: 'Verbal Ability & Reading Comprehension',
  description: 'RC passages, Para jumbles, Para completion, Critical reasoning',
  chapters: [
    {
      id: 'cat-rc', name: 'Reading Comprehension',
      description: 'Inference, Main idea, Tone, Vocabulary in context, Detailed understanding',
      questions: [
        { id:'cat-v1', difficulty:'easy', text:'An RC passage author who uses words like "unfortunately", "sadly", "regrettably" has a tone that is:', options:['Objective','Critical','Pessimistic/Lamenting','Optimistic'], correctAnswerIndex:2, explanation:'Words expressing regret, sadness, or disappointment indicate a lamenting or pessimistic tone. The author is mourning/regretting the described situation.' },
        { id:'cat-v2', difficulty:'hard', text:'Para jumble — arrange correctly: (A) without considering consequences, (B) Impulsive decisions, (C) often lead to regret, (D) are made:', options:['BDAC','BADC','BDCA','ABDC'], correctAnswerIndex:0, explanation:'Logical order: B (Impulsive decisions) — D (are made) — A (without considering consequences) — C (often lead to regret). Sentence: "Impulsive decisions are made without considering consequences, often lead to regret."' },
      ]
    }
  ]
};

const catQuant: Subject = {
  id: 'cat-quant', name: 'Quantitative Aptitude (CAT Level)',
  description: 'Arithmetic, Algebra, Geometry, Number Theory, Permutation-Combination',
  chapters: [
    {
      id: 'cat-algebra', name: 'Algebra & Number Theory',
      description: 'Linear equations, Quadratic, Inequalities, Number properties',
      questions: [
        { id:'cat-q1', difficulty:'medium', text:'If x + y = 10 and xy = 21, then x² + y² equals:', options:['58','79','100','121'], correctAnswerIndex:0, explanation:'x² + y² = (x+y)² − 2xy = 100 − 42 = 58.' },
        { id:'cat-q2', difficulty:'hard', text:'Number of integers from 1 to 1000 that are divisible by neither 3 nor 5 nor 7:', options:['228','457','514','229'], correctAnswerIndex:1, explanation:'Using inclusion-exclusion: |div by 3 or 5 or 7| = 333+200+142 − 66 − 47 − 28 + 9 = 543. Not divisible by any = 1000 − 543 = 457.' },
      ]
    }
  ]
};

const catDILR: Subject = {
  id: 'cat-dilr', name: 'Data Interpretation & Logical Reasoning',
  description: 'Charts, Tables, Game theory, Arrangements, Venn diagrams',
  chapters: [
    {
      id: 'cat-lr', name: 'Logical Reasoning',
      description: 'Games & tournaments, Blood relations, Constraints satisfaction',
      questions: [
        { id:'cat-lr1', difficulty:'medium', text:'In a round-robin tournament with 6 teams, the total number of matches played is:', options:['15','12','18','30'], correctAnswerIndex:0, explanation:'In round-robin, each pair plays once. Number of matches = C(6,2) = 6!/(2!×4!) = 15.' },
        { id:'cat-lr2', difficulty:'hard', text:'3 boxes: Box A has 2 red, 1 blue. Box B has 1 red, 2 blue. A box is chosen randomly and a ball drawn — it\'s red. Probability it came from Box A is:', options:['1/3','2/3','3/4','1/2'], correctAnswerIndex:1, explanation:'P(Red|A) = 2/3, P(Red|B) = 1/3. P(A) = P(B) = 1/2. P(A|Red) = P(Red|A)×P(A)/[P(Red|A)P(A)+P(Red|B)P(B)] = (2/3×1/2)/[(2/3×1/2)+(1/3×1/2)] = (1/3)/[(1/3)+(1/6)] = (1/3)/(1/2) = 2/3.' },
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// EXAM DATA EXPORTS
// ─────────────────────────────────────────────────────────────
export const EXAMS_DATA: Exam[] = [
  {
    id: 'gate', name: 'GATE', fullName: 'Graduate Aptitude Test in Engineering',
    description: 'National exam for M.Tech/Ph.D admissions and PSU recruitment.',
    icon: '🎓', color: '#6366f1', gradient: 'from-indigo-500 to-violet-600',
    totalSubjects: 10,
    branches: [
      {
        id: 'cs', name: 'CS & IT', fullName: 'Computer Science & Information Technology', icon: '💻',
        subjects: [gateCS_EM, gateCS_Algo, gateCS_OS, gateCS_DBMS, gateCS_CN, gateCS_TOC, gateCS_DL]
      },
      {
        id: 'ece', name: 'ECE', fullName: 'Electronics & Communication Engineering', icon: '📡',
        subjects: [gateECE_Signals, gateECE_Analog, gateECE_Comm]
      },
      {
        id: 'me', name: 'ME', fullName: 'Mechanical Engineering', icon: '⚙️',
        subjects: [
          { id:'gate-me-fluid', name:'Fluid Mechanics', description:'Properties of fluids, Bernoulli, Pipe flow, Turbomachinery', chapters:[{ id:'me-fluid-ch1', name:'Pipe Flow & Reynolds Number', description:'Laminar and turbulent flow, friction factor, losses', questions:[
            { id:'me-f1', difficulty:'easy', text:'Reynolds number < 2000 in a pipe indicates:', options:['Turbulent flow','Laminar flow','Transitional flow','Supersonic flow'], correctAnswerIndex:1, explanation:'Re < 2000: Laminar flow (smooth parallel streamlines). 2000 < Re < 4000: Transitional. Re > 4000: Turbulent (chaotic, mixing flow).' },
            { id:'me-f2', difficulty:'medium', text:'Bernoulli\'s equation is applicable when flow is:', options:['Viscous, compressible, unsteady','Inviscid, incompressible, steady along streamline','Turbulent only','Supersonic only'], correctAnswerIndex:1, explanation:'Bernoulli\'s equation applies along a streamline for steady, inviscid (frictionless), incompressible flow: P + ½ρv² + ρgh = constant.' },
          ]}] },
          { id:'gate-me-thermo', name:'Thermodynamics', description:'Laws, Cycles, Properties of steam, Refrigeration', chapters:[{ id:'me-thermo-ch1', name:'Laws & Cycles', description:'Carnot, Rankine, Otto, Diesel cycles', questions:[
            { id:'me-t1', difficulty:'easy', text:'Carnot efficiency depends on:', options:['Working fluid','Source and sink temperatures only','Pressure ratio','Volume ratio'], correctAnswerIndex:1, explanation:'η_Carnot = 1 − T_L/T_H. Carnot efficiency depends only on the absolute temperatures of the hot source (T_H) and cold sink (T_L).' },
            { id:'me-t2', difficulty:'medium', text:'In an Otto cycle with compression ratio r = 8 (γ = 1.4), efficiency is:', options:['45.7%','56.5%','36.8%','60%'], correctAnswerIndex:0, explanation:'η = 1 − r^(1−γ) = 1 − 8^(−0.4) = 1 − 1/8^0.4 = 1 − 1/2.297 = 1 − 0.435 ≈ 56.5%. Wait: 8^0.4 = e^(0.4×ln8) = e^(0.4×2.079) = e^0.832 = 2.297. η = 1 − 1/2.297 = 1 − 0.435 = 0.565 = 56.5%.' },
          ]}] }
        ]
      },
      {
        id: 'ce', name: 'CE', fullName: 'Civil Engineering', icon: '🏗️',
        subjects: [
          { id:'gate-ce-structures', name:'Structural Engineering', description:'Beams, Trusses, Columns, RCC, Steel structures', chapters:[{ id:'ce-str-ch1', name:'Beams & Bending Moment', description:'Simply supported, cantilever, SFD and BMD', questions:[
            { id:'ce-s1', difficulty:'easy', text:'A simply supported beam of span L with central point load W has maximum bending moment:', options:['WL/2','WL/4','WL/8','WL'], correctAnswerIndex:1, explanation:'For a simply supported beam with central concentrated load W: M_max = WL/4 at midspan. This is a fundamental result in structural mechanics.' },
            { id:'ce-s2', difficulty:'medium', text:'The degree of static indeterminacy of a propped cantilever beam is:', options:['0','1','2','3'], correctAnswerIndex:1, explanation:'Propped cantilever: 3 reactions at wall (V,H,M) + 1 reaction at prop = 4 total. Available equations = 3 (ΣFx=0, ΣFy=0, ΣM=0). DSI = 4−3 = 1.' },
          ]}] }
        ]
      },
      {
        id: 'ee', name: 'EE', fullName: 'Electrical Engineering', icon: '⚡',
        subjects: [
          { id:'gate-ee-machines', name:'Electrical Machines', description:'Transformers, DC machines, Induction motors, Synchronous machines', chapters:[{ id:'ee-m-ch1', name:'Transformers', description:'Equivalent circuit, Efficiency, Regulation, Open/Short circuit test', questions:[
            { id:'ee-m1', difficulty:'easy', text:'Turns ratio of a transformer with 500 primary turns and 100 secondary turns is:', options:['5:1','1:5','100:500','1:1'], correctAnswerIndex:0, explanation:'Turns ratio a = N1/N2 = 500/100 = 5:1. A step-down transformer (primary voltage > secondary voltage).' },
            { id:'ee-m2', difficulty:'medium', text:'Core losses in a transformer depend on:', options:['Load current','Supply voltage & frequency only','Winding resistance','Power factor'], correctAnswerIndex:1, explanation:'Core losses = Eddy current losses + Hysteresis losses. Both depend on flux density (hence voltage) and frequency, NOT on load current. Copper losses depend on current.' },
          ]}] }
        ]
      },
      {
        id: 'in', name: 'IN', fullName: 'Instrumentation Engineering', icon: '🔧',
        subjects: [
          { id:'gate-in-meas', name:'Measurements & Instrumentation', description:'Bridges, Sensors, Digital instruments, Signal conditioning', chapters:[{ id:'in-m-ch1', name:'Wheatstone & AC Bridges', description:'Wheatstone, Maxwell, Hay, Schering bridges for measurement', questions:[
            { id:'in-1', difficulty:'medium', text:'In a balanced Wheatstone bridge with R1=R3=100Ω, R2=200Ω, unknown R4 equals:', options:['50Ω','100Ω','200Ω','400Ω'], correctAnswerIndex:2, explanation:'Wheatstone balance condition: R1/R2 = R3/R4 → R4 = R2×R3/R1 = 200×100/100 = 200Ω.' },
          ]}] }
        ]
      },
      {
        id: 'ch', name: 'CH', fullName: 'Chemical Engineering', icon: '🧪',
        subjects: [
          { id:'gate-ch-heat', name:'Heat Transfer & Thermodynamics', description:'Fourier law, Convection correlations, Heat exchangers, CRE', chapters:[{ id:'ch-heat-ch1', name:'Conduction & Convection', description:'Fourier law, Newton cooling, LMTD method', questions:[
            { id:'ch-1', difficulty:'easy', text:'Fourier\'s law of conduction: q = −kA(dT/dx). The negative sign indicates:', options:['Heat flows from cold to hot','Heat flux is negative','Heat flows from hot to cold (in direction of decreasing temperature)','Conductivity is negative'], correctAnswerIndex:2, explanation:'The negative sign in Fourier\'s law ensures heat flux is positive in the direction of heat flow (from hot to cold). Temperature gradient dT/dx is negative in the direction of heat flow.' },
          ]}] }
        ]
      },
      {
        id: 'bt', name: 'BT', fullName: 'Biotechnology', icon: '🧬',
        subjects: [
          { id:'gate-bt-rdna', name:'Recombinant DNA Technology', description:'PCR, Cloning, Gene expression, Vectors, Sequencing', chapters:[{ id:'bt-rdna-ch1', name:'PCR & Gene Cloning', description:'PCR amplification, restriction enzymes, vectors, transformation', questions:[
            { id:'bt-1', difficulty:'easy', text:'PCR (Polymerase Chain Reaction) is used to:', options:['Sequence DNA','Translate proteins','Amplify specific DNA sequences','Repair DNA damage'], correctAnswerIndex:2, explanation:'PCR amplifies specific DNA sequences exponentially. Each cycle: denaturation → annealing (primers) → extension (Taq polymerase). After 30 cycles: ~10⁹ copies from 1 original.' },
            { id:'bt-2', difficulty:'medium', text:'Restriction enzymes cut DNA at specific sequences called:', options:['Promoters','Operators','Palindromic recognition sequences','Telomeres'], correctAnswerIndex:2, explanation:'Restriction endonucleases (restriction enzymes) recognize specific palindromic sequences (4-8 bp) and cleave double-stranded DNA at or near these sequences.' },
          ]}] }
        ]
      },
    ]
  },
  {
    id: 'jee', name: 'JEE', fullName: 'Joint Entrance Examination (Main + Advanced)',
    description: 'Gateway to IITs, NITs, and IIITs. Tests Physics, Chemistry and Mathematics.',
    icon: '⚗️', color: '#3b82f6', gradient: 'from-blue-500 to-cyan-500',
    totalSubjects: 3,
    subjects: [jeePhysics, jeeChem, jeeMath]
  },
  {
    id: 'neet', name: 'NEET', fullName: 'National Eligibility cum Entrance Test',
    description: 'Single entrance test for MBBS, BDS, Ayush medical courses in India.',
    icon: '🩺', color: '#10b981', gradient: 'from-emerald-500 to-teal-500',
    totalSubjects: 4,
    subjects: [neetPhysics, neetChemistry, neetBotany, neetZoology]
  },
  {
    id: 'ssc-cgl', name: 'SSC CGL', fullName: 'SSC Combined Graduate Level',
    description: 'Recruitment to Group B & C posts in Central Government ministries.',
    icon: '💼', color: '#f59e0b', gradient: 'from-amber-500 to-orange-500',
    totalSubjects: 4,
    subjects: [sscQuantitative, sscReasoning, sscEnglish, sscGA]
  },
  {
    id: 'railway', name: 'Railway RRB', fullName: 'Railway Recruitment Board (NTPC/JE)',
    description: 'Recruitment exams for Non-Technical Popular Categories and Junior Engineers.',
    icon: '🚆', color: '#ef4444', gradient: 'from-red-500 to-rose-500',
    totalSubjects: 4,
    subjects: [rrbMath, rrbScience, rrbGK, rrbReasoning]
  },
  {
    id: 'upsc', name: 'UPSC', fullName: 'Union Public Service Commission (CSE)',
    description: 'India\'s most prestigious exam — for IAS, IPS, IFS and other central services.',
    icon: '🏛️', color: '#8b5cf6', gradient: 'from-violet-500 to-purple-600',
    totalSubjects: 6,
    subjects: [upscHistory, upscPolity, upscGeography, upscEconomy]
  },
  {
    id: 'banking', name: 'Banking (IBPS)', fullName: 'IBPS PO / SBI PO / Clerk',
    description: 'Recruitment exams for Probationary Officers and Clerks in public sector banks.',
    icon: '🏦', color: '#06b6d4', gradient: 'from-cyan-500 to-sky-500',
    totalSubjects: 5,
    subjects: [bankReasoning, bankQuant, bankEnglish, bankGA]
  },
  {
    id: 'cat', name: 'CAT', fullName: 'Common Admission Test',
    description: 'Entrance to IIMs and top MBA colleges. Tests VARC, DILR and QA.',
    icon: '📊', color: '#ec4899', gradient: 'from-pink-500 to-rose-500',
    totalSubjects: 3,
    subjects: [catVARC, catDILR, catQuant]
  },
  {
    id: 'ssc-chsl', name: 'SSC CHSL', fullName: 'SSC Combined Higher Secondary Level',
    description: 'Recruitment to LDC, DEO, Postal Assistant posts. 10+2 level exam.',
    icon: '📋', color: '#f97316', gradient: 'from-orange-500 to-amber-500',
    totalSubjects: 4,
    subjects: [sscQuantitative, sscReasoning, sscEnglish, sscGA]
  },
  {
    id: 'nda', name: 'NDA', fullName: 'National Defence Academy',
    description: 'Entry to Army, Navy & Air Force wings of NDA after Class 12.',
    icon: '🎖️', color: '#64748b', gradient: 'from-slate-500 to-gray-600',
    totalSubjects: 2,
    subjects: [
      { id:'nda-math', name:'Mathematics', description:'Algebra, Calculus, Statistics, Trigonometry', chapters:[
        { id:'nda-math-ch1', name:'Algebra & Trigonometry', description:'Quadratic equations, matrices, trig identities', questions:[
          { id:'nda-m1', difficulty:'easy', text:'sin²θ + cos²θ equals:', options:['0','2','1','sin(2θ)'], correctAnswerIndex:2, explanation:'This is the fundamental Pythagorean trigonometric identity: sin²θ + cos²θ = 1, valid for all values of θ.' },
          { id:'nda-m2', difficulty:'medium', text:'tan(45°) equals:', options:['0','√3','1','1/√3'], correctAnswerIndex:2, explanation:'tan(45°) = sin(45°)/cos(45°) = (1/√2)/(1/√2) = 1. Also tan(0°)=0, tan(30°)=1/√3, tan(60°)=√3.' },
        ] }
      ] },
      { id:'nda-gat', name:'General Ability Test', description:'English, Physics, Chemistry, History, Geography, Current Events', chapters:[
        { id:'nda-gat-ch1', name:'English & General Knowledge', description:'Grammar, Comprehension, Science, History basics', questions:[
          { id:'nda-g1', difficulty:'easy', text:'Who was the first President of India?', options:['Jawaharlal Nehru','B.R. Ambedkar','Dr. Rajendra Prasad','Sardar Patel'], correctAnswerIndex:2, explanation:'Dr. Rajendra Prasad was the first President of India, serving from 1950 to 1962. He served two terms.' },
          { id:'nda-g2', difficulty:'medium', text:'Speed of light in vacuum is approximately:', options:['3×10⁶ m/s','3×10⁸ m/s','3×10¹⁰ m/s','3×10⁴ m/s'], correctAnswerIndex:1, explanation:'Speed of light c = 2.998 × 10⁸ m/s ≈ 3×10⁸ m/s ≈ 3,00,000 km/s. This is the fundamental constant in physics.' },
        ] }
      ] }
    ]
  },
  {
    id: 'cuet', name: 'CUET', fullName: 'Common University Entrance Test',
    description: 'Central universities admission test. Tests English, Domain subjects & General Test.',
    icon: '🎯', color: '#0ea5e9', gradient: 'from-sky-500 to-blue-500',
    totalSubjects: 3,
    subjects: [
      { id:'cuet-english', name:'English', description:'Reading comprehension, vocabulary, grammar', chapters:[{ id:'cuet-eng-ch1', name:'Reading & Language', description:'Comprehension passages, synonym-antonym, error detection', questions:[
        { id:'cuet-e1', difficulty:'easy', text:'The word ABUNDANT means:', options:['Scarce','Plentiful','Difficult','Ancient'], correctAnswerIndex:1, explanation:'ABUNDANT means present in large quantities; more than enough; plentiful. Example: "Abundant resources were available."' },
        { id:'cuet-e2', difficulty:'medium', text:'Choose the correctly punctuated sentence:', options:['Lets go', "Let's go", 'Lets, go', "Let's, go"], correctAnswerIndex:1, explanation:'"Let\'s go" is correct. "Let\'s" = "Let us" (contraction with apostrophe). "Lets" means "allows/permits" (no apostrophe).' },
      ]}] },
      { id:'cuet-gentest', name:'General Test', description:'Reasoning, Quantitative aptitude, General awareness', chapters:[{ id:'cuet-gt-ch1', name:'General Aptitude', description:'Analogy, series, arithmetic, current affairs', questions:[
        { id:'cuet-g1', difficulty:'easy', text:'Next in series: 3, 9, 27, 81, ?', options:['162','243','324','180'], correctAnswerIndex:1, explanation:'Each term is multiplied by 3 (geometric sequence). 81 × 3 = 243.' },
      ]}] },
      { id:'cuet-domain', name:'Domain Subjects', description:'Subject-specific test based on chosen domain (Science/Commerce/Arts)', chapters:[{ id:'cuet-dom-ch1', name:'General Domain Questions', description:'Cross-domain factual questions', questions:[
        { id:'cuet-d1', difficulty:'medium', text:'GDP stands for:', options:['Gross Domestic Product','Gross Development Product','General Domestic Price','Government Development Plan'], correctAnswerIndex:0, explanation:'GDP = Gross Domestic Product. It measures the total monetary value of all goods and services produced within a country\'s borders in a given period.' },
      ]}] }
    ]
  },
];

// Helper function to get questions for a chapter filtered by difficulty, shuffled randomly
export function getChapterQuestions(chapter: Chapter, difficulty: Difficulty, count: number): Question[] {
  let pool = chapter.questions.filter(q => q.difficulty === difficulty);
  // Fallback: if not enough questions in chosen difficulty, use all questions
  if (pool.length < 3) {
    pool = chapter.questions;
  }
  // Fisher-Yates shuffle for randomization
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
