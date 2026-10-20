import type { Question, Chapter } from "./quizData";

export const MADE_EASY_OS_TWT13_QUESTIONS: Question[] = [
  // ─── Q.1 (MCQ / MSQ) ───
  {
    id: "me-os-twt13-q01",
    difficulty: "medium",
    concept: "Resource Allocation Graph & Safe Sequence",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt13_q01.png",
    imageAlt: "Resource Allocation Graph with processes P1, P2, P3, P4 and resources R1, R2, R3 (each having 2 instances)",
    text: `Consider the following resources allocation graph with four processes P1, P2, P3 and P4 and three resources R1, R2 and R3.
System has two instances of R1, R2 and R3 respectively.

Which of the following safe sequence are correct?`,
    options: [
      "P3, P1, P2, P4",
      "P3, P2, P1, P4",
      "P4, P3, P1, P2",
      "P2, P4, P1, P3"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    explanation: `### Solution
1. **Initial Allocations & Requests from Graph:**
   - **R1 (2 instances):** Allocated to $P_1$ (1) and $P_2$ (1). Available = 0.
   - **R2 (2 instances):** Allocated to $P_3$ (1). Available = 1.
   - **R3 (2 instances):** Allocated to $P_1$ (1) and $P_3$ (1). Available = 0.
   - **Current Available Vector:** $[R_1, R_2, R_3] = [0, 1, 0]$.

2. **Process Needs:**
   - $P_1$ requests $R_3$. Needs $[0, 0, 1]$. Cannot proceed since $R_3 = 0$.
   - $P_2$ requests $R_2$ and $R_3$. Cannot proceed since $R_3 = 0$.
   - $P_4$ requests $R_2$ and $R_3$. Cannot proceed since $R_3 = 0$.
   - $P_3$ requests only $R_2$. Needs $[0, 1, 0] \\le [0, 1, 0]$ (Available).
   - Thus, **$P_3$ must execute first**.

3. **After $P_3$ finishes:**
   - $P_3$ releases its held resources ($1$ of $R_2$ and $1$ of $R_3$).
   - New Available $= [0, 2, 1]$.

4. **Next Steps:**
   - **Case A ($P_1$ next):** $P_1$ needs $R_3$ (1). Available has $1$. $P_1$ finishes and releases $R_1=1, R_3=1$.
     - Available becomes $[1, 2, 2]$.
     - Then $P_2$ can finish (needs $R_2=1, R_3=1$). Available becomes $[2, 2, 2]$.
     - Finally $P_4$ finishes.
     - **Safe Sequence:** $\\mathbf{P_3, P_1, P_2, P_4}$ (Option 1 ✓).
   - **Case B ($P_2$ next):** $P_2$ needs $R_2$ (1) and $R_3$ (1). Available has $R_2=2, R_3=1$. $P_2$ can also satisfy its need immediately!
     - $P_2$ finishes and releases $R_1=1, R_2=1, R_3=1$.
     - Then $P_1$ finishes, and then $P_4$ finishes.
     - **Safe Sequence:** $\\mathbf{P_3, P_2, P_1, P_4}$ (Option 2 ✓).

Therefore, both **Option 1** and **Option 2** are valid safe sequences.`
  },

  // ─── Q.2 (MCQ / MSQ) ───
  {
    id: "me-os-twt13-q02",
    difficulty: "medium",
    concept: "Segmentation Hardware & MMU Roles",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `In a computer system employing a segmentation-based memory management scheme, which of the following task(s) is/are performed by the Memory Management Unit (MMU) hardware during a memory access cycle?`,
    options: [
      "Allocation of a new segment table in the main memory for a newly created process.",
      "Computation of the physical address by adding the segment base address to the logical offset.",
      "Generating a hardware trap if the logical offset exceeds the segment limit specified in the segment table.",
      "Determining which segments of a process should be swapped out to the disk when physical memory is full."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
- **Hardware (MMU) Tasks during Memory Access Cycle:**
  - Checks if logical offset $d < \\text{Limit}$. If $d \\ge \\text{Limit}$, hardware generates a **trap (segmentation fault)**. (**Statement 2 is True ✓**)
  - If valid, computes physical address $= \\text{Base} + d$. (**Statement 3 is True ✓**)
- **Software / OS Kernel Tasks:**
  - Allocating segment tables for new processes is done by the **Operating System**, not MMU hardware. (**Statement 1 is False**)
  - Choosing segments to swap out when memory is full is part of the **OS replacement policy**. (**Statement 4 is False**)`
  },

  // ─── Q.3 (SCQ) ───
  {
    id: "me-os-twt13-q03",
    difficulty: "medium",
    concept: "SSTF Disk Scheduling",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider the following track request in the disk queue:
95, 180, 34, 119, 11, 123, 62, 64
Shortest Seek Time First (SSTF) disk scheduling algorithm is used and the R/W head initially positioned at location 50. Track are numbered from 0 to 199. If the seek time is 4 msec per track movement, the total seek time needed to service all the request is ________ msec.`,
    options: [
      "844",
      "236",
      "944",
      "278"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Requests in sorted order: $11, 34, 62, 64, 95, 119, 123, 180$.
Head starts at **50**.

1. **Step-by-step SSTF Order:**
   - From 50: Closest is $62$ ($|62-50| = 12$, whereas $|34-50| = 16$).
   - From 62: Closest is $64$ ($|64-62| = 2$).
   - From 64: Closest is $34$ ($|34-64| = 30$, whereas $|95-64| = 31$).
   - From 34: Closest is $11$ ($|11-34| = 23$).
   - From 11: Closest among remaining $\\{95, 119, 123, 180\\}$ is $95$ ($|95-11| = 84$).
   - From 95: Closest is $119$ ($|119-95| = 24$).
   - From 119: Closest is $123$ ($|123-119| = 4$).
   - From 123: Closest is $180$ ($|180-123| = 57$).

2. **Total Head Movement:**
   $$\\text{Tracks} = 12 + 2 + 30 + 23 + 84 + 24 + 4 + 57 = 236\\text{ tracks}$$

3. **Total Seek Time:**
   $$\\text{Seek Time} = 236 \\times 4\\text{ msec} = \\mathbf{944\\text{ msec}}$$`
  },

  // ─── Q.4 (MCQ / MSQ) ───
  {
    id: "me-os-twt13-q04",
    difficulty: "medium",
    concept: "Paging & Halving Page Size Effects",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `A computer system uses paging for memory management.
If the page size is halved while keeping the total physical memory size unchanged, which of the following statements are generally true?`,
    options: [
      "The size of page table per process increases.",
      "TLB hit ratio increases.",
      "Internal fragmentation decreases.",
      "Number of pages per process increases."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 3],
    explanation: `### Solution
Let original page size be $P$. If page size is halved to $P/2$:
1. **Number of pages per process doubles:**
   $$\\text{Number of pages} = \\frac{\\text{Process Size}}{P/2} = 2 \\times \\left(\\frac{\\text{Process Size}}{P}\\right)$$
   Hence, number of pages increases. (**Statement 4 is True ✓**)
2. **Page Table Size:**
   With twice as many pages, the page table needs twice as many entries. Thus, page table size per process increases. (**Statement 1 is True ✓**)
3. **Internal Fragmentation:**
   Average internal fragmentation is roughly $\\frac{1}{2} \\times \\text{Page Size}$. Halving the page size reduces internal fragmentation by half. (**Statement 3 is True ✓**)
4. **TLB Hit Ratio:**
   Each TLB entry now maps half the memory coverage (TLB reach is halved). Hence, TLB hit ratio generally decreases or remains the same, but does NOT increase. (**Statement 2 is False**)`
  },

  // ─── Q.5 (NAT) ───
  {
    id: "me-os-twt13-q05",
    difficulty: "hard",
    concept: "Multi-level Paging Levels",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 3,
    natTolerance: 0,
    text: `Consider a system with a physical address size of 44 bits and a virtual address space of 128 GB.
The system uses paging with page size of 8 KB. Assume that each page table fits entirely with in a single page.
The minimum number of levels required in the page table is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Address Space & Offset:**
   - Virtual Address Space $= 128\\text{ GB} = 2^{37}\\text{ B} \\implies 37\\text{ bits}$.
   - Page Size $= 8\\text{ KB} = 2^{13}\\text{ B} \\implies \\text{Offset} = 13\\text{ bits}$.
   - Virtual Page Number (VPN) $= 37 - 13 = 24\\text{ bits}$.

2. **PTE Size Calculation:**
   - Physical Address $= 44\\text{ bits}$.
   - Frame Number bits $= 44 - 13 = 31\\text{ bits}$.
   - PTE size must be at least $31\\text{ bits} \\implies 4\\text{ bytes}$ (standard byte addressing: $\\lceil 31/8 \\rceil = 4\\text{ B}$).

3. **Entries per Page Table Page:**
   $$\\text{Capacity} = \\frac{\\text{Page Size}}{\\text{PTE Size}} = \\frac{8\\text{ KB}}{4\\text{ B}} = 2048 = 2^{11}\\text{ entries}$$
   Each level of page table can resolve at most $11\\text{ bits}$.

4. **Number of Levels:**
   - 1 level: resolves $11\\text{ bits} < 24\\text{ bits}$.
   - 2 levels: resolves $11 + 11 = 22\\text{ bits} < 24\\text{ bits}$.
   - 3 levels: resolves $11 + 11 + 11 = 33\\text{ bits} \\ge 24\\text{ bits}$ (e.g., $2\\text{ bits} + 11\\text{ bits} + 11\\text{ bits} = 24\\text{ bits}$).

Therefore, the minimum number of levels required is **3**.`
  },

  // ─── Q.6 (MCQ / MSQ) ───
  {
    id: "me-os-twt13-q06",
    difficulty: "medium",
    concept: "Inverted Page Tables & Page Table Bits",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements is/are correct?`,
    options: [
      "In an inverted page table, each entry stores the virtual page number and process identifier.",
      "Inverted page tables reduce memory overhead compared to conventional page tables.",
      "Reference bit is used to track whether a page has been accessed recently.",
      "Dirty bits used to indicate an illegal access of page."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
- **Statement 1:** Inverted page tables index physical memory frames and store $\\langle\\text{PID}, \\text{VPN}\\rangle$. (**Correct ✓**)
- **Statement 2:** Instead of having a large page table per process proportional to the virtual address space, an inverted page table size is proportional to the number of physical frames, greatly reducing memory overhead. (**Correct ✓**)
- **Statement 3:** The reference bit is set by hardware whenever the page is referenced (read/written), helping replacement algorithms like Second-Chance/Clock. (**Correct ✓**)
- **Statement 4:** Dirty bit (modify bit) indicates whether the page has been modified since it was loaded into memory (to avoid unnecessary write-back to disk). Illegal accesses are trapped by valid/invalid or protection bits, not dirty bits. (**Incorrect ✗**)`
  },

  // ─── Q.7 (MCQ / MSQ) ───
  {
    id: "me-os-twt13-q07",
    difficulty: "hard",
    concept: "Cyclic Page Reference String & Replacement Policies",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `A demand-paged memory system has R page frames. A process repeatedly accesses a fixed ordered list of S different pages, one after another, and once the last page is accessed, the same order starts again.
Assume:
• All S pages are distinct.
• Initially, memory contains no pages.
• S > R
Which of the following statements is/are correct?`,
    options: [
      "If the number of frames is at least equal to the number of distinct pages, then after one complete pass through the list, no further page faults will occur.",
      "For this cyclic reference string of S distinct pages, FIFO and LRU will generate identical pagefault counts for any number of frames less than S.",
      "The most-recently-loaded replacement policy always performs as well as the optimal replacement policy for this reference pattern.",
      "Suppose S = 2R. If FIFO is used and the ordered list is executed four consecutive times, then every page reference results in a page fault."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    explanation: `### Solution
1. **Statement 1:** If $R \\ge S$, all $S$ pages fit in memory. After the first pass (cold misses), all subsequent references hit with 0 further page faults. (**Correct ✓**)
2. **Statement 2:** In a pure cycle $1, 2, \\dots, S, 1, 2, \\dots, S$, the page accessed longest ago (LRU) is also the page loaded earliest into memory (FIFO). Thus, FIFO and LRU evict the exact same pages in the exact same order for any $R < S$. (**Correct ✓**)
3. **Statement 3:** MRU does not achieve the performance of OPT. In cyclic references, OPT would keep the pages that appear earliest in the next cycle, whereas MRU constantly evicts the most recent page. (**Incorrect ✗**)
4. **Statement 4:** When $S = 2R > R$, by the time any page is referenced again, $S-1$ other references have occurred. Under FIFO, every single reference finds the needed page absent and causes a fault (100% page fault rate). (**Correct ✓**)`
  },

  // ─── Q.8 (MCQ / MSQ) ───
  {
    id: "me-os-twt13-q08",
    difficulty: "easy",
    concept: "Demand Paging Characteristics",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following is correct?`,
    options: [
      "Demand paging brings a page into the memory only then it is needed.",
      "Demand paging requires more main memory than normal paging.",
      "Demand paging can bring entire process into memory at load time (for very small processes).",
      "In demand paging, a given instruction can lead to page fault."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 3],
    explanation: `### Solution
- **Statement 1:** By definition, demand paging brings a page into physical memory only when an access is attempted (lazy swapper). (**Correct ✓**)
- **Statement 2:** Demand paging requires *less* main memory because pages not in the working set are not loaded. (**Incorrect ✗**)
- **Statement 3:** If a process is very small (fits within one or few pages that are accessed immediately), all its pages can be resident in memory. (**Correct ✓**)
- **Statement 4:** An instruction fetch or operand memory access can refer to a page that is marked invalid, triggering a page fault. (**Correct ✓**)`
  },

  // ─── Q.9 (SCQ) ───
  {
    id: "me-os-twt13-q09",
    difficulty: "medium",
    concept: "File Allocation Methods (Contiguous, Linked, Indexed)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider the following statements: (with respect to disk space allocation methods)
S1 : Linked allocation method suffer from external fragmentation.
S2 : Index allocation method suffer from internal fragmentation.
S3 : Linked allocation suffers from pointer overhead per block.
Which of the above statements is correct?`,
    options: [
      "S1 and S2",
      "S2 and S3",
      "S1 and S3",
      "S1, S2 and S3"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
- **S1 (False):** In linked allocation, any available free block anywhere on disk can be chained into the file's linked list. Therefore, it has **no external fragmentation**.
- **S2 (True):** In indexed allocation, fixed disk blocks are allocated to store file data and index blocks; the last block is generally partially filled, causing **internal fragmentation** (plus index block overhead for small files).
- **S3 (True):** Linked allocation requires storing a pointer (e.g. 4 or 8 bytes) inside every data block to link to the next block, introducing **pointer overhead per block**.

Thus, statements **S2 and S3** are correct.`
  },

  // ─── Q.10 (MCQ / MSQ) ───
  {
    id: "me-os-twt13-q10",
    difficulty: "medium",
    concept: "Deadlock Concepts & Banker's Algorithm",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements about deadlocking is/are correct?`,
    options: [
      "If a system is in an unsafe state at time T, it cannot be deadlock-free at time T.",
      "If a system is in a safe state at time T, deadlock cannot occur unless additional requests are made.",
      "If circular wait exists, then deadlock must occur.",
      "If Banker’s algorithm rejects a request at time T, granting it may or may not cause deadlock."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 3],
    explanation: `### Solution
- **Statement 1 (False):** An unsafe state is NOT deadlocked; it simply means the system cannot guarantee avoidance of deadlock if all processes simultaneously demand their maximum claims.
- **Statement 2 (True):** A safe state guarantees that there exists at least one order of process execution that allows everyone to finish without deadlock under their current claims.
- **Statement 3 (False):** Circular wait is a necessary condition, but for multi-instance resources, a cycle/circular wait does NOT imply deadlock.
- **Statement 4 (True):** Banker's algorithm is conservative: it rejects a request if granting it leads to an *unsafe* state. Since an unsafe state does not guarantee that a deadlock will definitely occur, granting it may or may not have resulted in actual deadlock.`
  },

  // ─── Q.11 (SCQ) ───
  {
    id: "me-os-twt13-q11",
    difficulty: "easy",
    concept: "Dynamic Memory Allocation Strategies",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider a swapping system in which memory consists of hole sizes in following order:
10 KB, 4 KB, 17 KB, 18 KB, 7 KB, 9 KB, 12 KB, 15 KB, 20 KB
Which hole is taken for segment request of 12 KB
(i) By using first fit
(ii) By using best fit
(iii) By using worst fit`,
    options: [
      "17 KB, 17 KB, 20 KB",
      "17 KB, 12 KB, 17 KB",
      "17 KB, 12 KB, 20 KB",
      "17 KB, 18 KB, 12 KB"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Available holes in sequence: 10 KB, 4 KB, 17 KB, 18 KB, 7 KB, 9 KB, 12 KB, 15 KB, 20 KB.
Request size $= 12\\text{ KB}$.

1. **First Fit:** Scans from the beginning and chooses the first hole $\\ge 12\\text{ KB}$:
   - 10 KB (too small), 4 KB (too small), **17 KB** (fits!) $\\implies$ **17 KB**.
2. **Best Fit:** Chooses the smallest hole that is $\\ge 12\\text{ KB}$:
   - Holes $\\ge 12\\text{ KB}$: $\\{17, 18, 12, 15, 20\\}$.
   - Smallest is **12 KB** $\\implies$ **12 KB**.
3. **Worst Fit:** Chooses the largest available hole:
   - Largest hole is **20 KB** $\\implies$ **20 KB**.

Resulting allocation: **17 KB, 12 KB, 20 KB**.`
  },

  // ─── Q.12 (NAT) ───
  {
    id: "me-os-twt13-q12",
    difficulty: "medium",
    concept: "Effective Memory Access Time with TLB",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 142.5,
    natTolerance: 0.5,
    text: `In a paging system, it takes 30 ns to search TLB and 90 ns to access the main memory. If TLB misses 25% of time, the effective memory access time is ________ (in ns).`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Given:
- TLB access time ($c$) $= 30\\text{ ns}$
- Main memory access time ($m$) $= 90\\text{ ns}$
- TLB miss rate $= 25\\% = 0.25 \\implies$ Hit rate $h = 75\\% = 0.75$

1. **Hit Time:**
   $$T_{\\text{hit}} = c + m = 30 + 90 = 120\\text{ ns}$$
2. **Miss Time:**
   $$T_{\\text{miss}} = c + 2m = 30 + 2(90) = 210\\text{ ns}$$
   (1st memory access to page table, 2nd memory access to actual frame).

3. **Effective Memory Access Time (EMAT):**
   $$\\text{EMAT} = h \\cdot T_{\\text{hit}} + (1 - h) \\cdot T_{\\text{miss}}$$
   $$\\text{EMAT} = 0.75 \\times 120 + 0.25 \\times 210 = 90 + 52.5 = \\mathbf{142.5\\text{ ns}}$$`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-os-twt13-q13",
    difficulty: "medium",
    concept: "Memory Allocation Strategy Matching",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt13_q13.png",
    imageAlt: "Match List-I (First fit, Best fit, Worst Fit, Next fit) with List-II properties",
    text: `Match List-I with List-II and select the correct answer using the codes given below the lists:
List-I:
A. First fit
B. Best fit
C. Worst Fit
D. Next fit

List-II:
1. Faster allocation but may create many small holes
2. Leaves largest leftover hole after allocation
3. Reduces external fragmentation comparatively
4. Search continues circularly from last allocated point`,
    options: [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
- **A. First fit $\\to$ 1:** Faster allocation as it stops at the first sufficiently large hole, but can generate many small leftover fragments near the beginning.
- **B. Best fit $\\to$ 3:** Finds the closest matching hole, reducing leftover unusable space in the chosen block.
- **C. Worst Fit $\\to$ 2:** Allocates the largest available hole, thereby leaving the largest possible leftover hole.
- **D. Next fit $\\to$ 4:** Continues scanning circularly from the location of the previous allocation rather than starting from the beginning.

Matching: **A-1, B-3, C-2, D-4**, which corresponds to **(a)**.`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-os-twt13-q14",
    difficulty: "easy",
    concept: "Compilers, Linkers & Loaders",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `In the context of operating systems, which of the following components resolves external references among multiple object modules to generate a single executable file?`,
    options: [
      "Compiler",
      "Linker",
      "Loader",
      "Memory Management Unit (MMU)"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
- **Compiler:** Translates source code into machine code/assembly (object files).
- **Linker:** Combines separate object files and library routines, resolving unresolved external symbols and references, to generate a single executable binary.
- **Loader:** Loads the executable program into primary memory and prepares it for execution.
- **MMU:** Hardware component that translates virtual addresses to physical addresses at runtime.`
  },

  // ─── Q.15 (NAT) ───
  {
    id: "me-os-twt13-q15",
    difficulty: "medium",
    concept: "Bit Map Free Space Management",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 8,
    natTolerance: 0.2,
    text: `A bit map can be used to keep track of which blocks are free in a file system’s partition on disk.
Assuming 1 KB block size and disk size of 64 GB, number of disks blocks for bit map ________ in kilo?`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Total Disk Blocks:**
   $$\\text{Total Blocks} = \\frac{\\text{Disk Size}}{\\text{Block Size}} = \\frac{64\\text{ GB}}{1\\text{ KB}} = \\frac{64 \\times 2^{30}\\text{ B}}{2^{10}\\text{ B}} = 2^{26}\\text{ blocks}$$

2. **Bitmap Size:**
   Each disk block requires 1 bit in the bitmap.
   $$\\text{Total Bits} = 2^{26}\\text{ bits}$$
   $$\\text{Bitmap Size in Bytes} = \\frac{2^{26}}{8\\text{ bits/byte}} = 2^{23}\\text{ bytes} = 8\\text{ MB}$$

3. **Number of Disk Blocks for Bitmap:**
   $$\\text{Bitmap Blocks} = \\frac{2^{23}\\text{ bytes}}{1\\text{ KB}} = \\frac{2^{23}}{2^{10}} = 2^{13}\\text{ blocks} = 8192\\text{ blocks}$$

4. **In Kilo ($K = 1024$):**
   $$\\frac{8192}{1024} = \\mathbf{8\\text{ kilo blocks}}$$`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-os-twt13-q16",
    difficulty: "medium",
    concept: "LRU Page Replacement Algorithm",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider a main memory with 3 frames for the following page reference string:
6, 4, 5, 2, 7, 6, 3, 5, 3, 5, 7, 6
Assuming that execution of the process is initiated after loading page 6 in memory, the number of page fault using LRU are`,
    options: [
      "7",
      "10",
      "8",
      "9"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
Initial memory state: Frame has **[6]** already loaded.

Tracing LRU with 3 frames:
1. **Ref 6:** Hit! Frames: \`[6]\` (Faults = 0)
2. **Ref 4:** Miss! Frames: \`[6, 4]\` (Fault 1)
3. **Ref 5:** Miss! Frames: \`[6, 4, 5]\` (Fault 2)
4. **Ref 2:** Miss! Least recently used is 6 $\\implies$ replace 6. Frames: \`[2, 4, 5]\` (Fault 3)
5. **Ref 7:** Miss! Least recently used is 4 $\\implies$ replace 4. Frames: \`[2, 7, 5]\` (Fault 4)
6. **Ref 6:** Miss! Least recently used is 5 $\\implies$ replace 5. Frames: \`[2, 7, 6]\` (Fault 5)
7. **Ref 3:** Miss! Least recently used is 2 $\\implies$ replace 2. Frames: \`[3, 7, 6]\` (Fault 6)
8. **Ref 5:** Miss! Least recently used is 7 $\\implies$ replace 7. Frames: \`[3, 5, 6]\` (Fault 7)
9. **Ref 3:** Hit! Frames: \`[3, 5, 6]\` (Faults = 7)
10. **Ref 5:** Hit! Frames: \`[3, 5, 6]\` (Faults = 7)
11. **Ref 7:** Miss! Least recently used is 6 $\\implies$ replace 6. Frames: \`[3, 5, 7]\` (Fault 8)
12. **Ref 6:** Miss! Least recently used is 3 $\\implies$ replace 3. Frames: \`[6, 5, 7]\` (Fault 9)

Total page faults = **9**.`
  },

  // ─── Q.17 (SCQ) ───
  {
    id: "me-os-twt13-q17",
    difficulty: "medium",
    concept: "Single Level Page Table Size Calculation",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider a computer system with 35 bits virtual address and 44 bits physical address. The page size is 4 KB. Each page table entry contains 2 valid bits, 2 reference bits, 1 dirty bit and 3 protection bits. The approximate size of the single level page table is ________ (MB).
[Note: The system is byte addressable]`,
    options: [
      "42",
      "52",
      "44",
      "40"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
1. **Virtual Address & Pages:**
   - Page Size $= 4\\text{ KB} = 2^{12}\\text{ B} \\implies \\text{Offset} = 12\\text{ bits}$.
   - Number of Pages $= 2^{35 - 12} = 2^{23}\\text{ pages}$.

2. **Frame Bits & Page Table Entry (PTE) Size:**
   - Physical Address $= 44\\text{ bits}$.
   - Frame Number bits $= 44 - 12 = 32\\text{ bits}$.
   - Extra control bits in PTE:
     - 2 valid bits
     - 2 reference bits
     - 1 dirty bit
     - 3 protection bits
   - Total PTE bits $= 32 + 2 + 2 + 1 + 3 = 40\\text{ bits}$.
   - Since the system is byte addressable:
     $$\\text{PTE Size} = \\frac{40\\text{ bits}}{8\\text{ bits/byte}} = 5\\text{ bytes}$$

3. **Page Table Size:**
   $$\\text{Page Table Size} = 2^{23} \\times 5\\text{ bytes} = 8 \\times 2^{20} \\times 5\\text{ bytes} = \\mathbf{40\\text{ MB}}$$`
  }
];

export const MADE_EASY_OS_TWT13_CHAPTER: Chapter = {
  id: "os-gate-2027-twt-13",
  name: "GATE 2027 CS TOPIC WISE TEST - 13 (Operating Systems)",
  description: "Deadlocks, RAG, Memory Management, Multi-Level Paging, LRU, Disk Scheduling & File Systems",
  questions: MADE_EASY_OS_TWT13_QUESTIONS,
};
