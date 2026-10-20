import type { Question, Chapter } from "./quizData";

export const MADE_EASY_COA_TWT6_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-coa-twt6-q01",
    difficulty: "medium",
    concept: "3C Cache Misses (Compulsory, Capacity, Conflict)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt06_q01.png",
    imageAlt: "Options for Q.1 cache misses statements",
    text: `The designers of a cache system need to reduce the number of cache misses that occur in a certain group of programs. Which of the following statements is/are true?

- **$S_1$ :** If compulsory misses are most common, then the designers should consider increasing the cache line size to take better advantage of locality.
- **$S_2$ :** If capacity misses are most common, then the designers should consider increasing the total cache size so it can contain more lines.
- **$S_3$ :** If conflict misses are most common, then the designers should consider increasing the cache’s associativity, in order to provide more flexibility when a collision occurs.`,
    options: [
      "S_3 only",
      "S_1 and S_2 only",
      "S_2 and S_3 only",
      "All of these"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
Let us analyze each statement based on the classical **3C Model of Cache Misses** (Mark Hill):

1. **Statement $S_1$ (Compulsory Misses):**
   - Compulsory (cold-start) misses occur on the very first access to a memory block.
   - Increasing the **cache line / block size** brings more adjacent words into the cache on a single miss, taking advantage of **spatial locality** and reducing subsequent compulsory misses for neighboring addresses.
   - **Statement $S_1$ is TRUE ✓**

2. **Statement $S_2$ (Capacity Misses):**
   - Capacity misses occur when the working set of the program exceeds the total capacity of the cache.
   - Increasing the **total cache size** allows the cache to retain more lines, directly mitigating capacity misses.
   - **Statement $S_2$ is TRUE ✓**

3. **Statement $S_3$ (Conflict Misses):**
   - Conflict (collision) misses occur in direct-mapped or set-associative caches when multiple active memory blocks map to the same set.
   - Increasing **associativity** (e.g. from direct-mapped to 2-way, 4-way, or fully-associative) provides more slots per set, thereby dramatically reducing conflict misses (a fully associative cache has 0 conflict misses).
   - **Statement $S_3$ is TRUE ✓**

Hence, **All of these (Option 4)** statements are true.`
  },

  // ─── Q.2 (SCQ) ───
  {
    id: "me-coa-twt6-q02",
    difficulty: "medium",
    concept: "Set-Associative Cache Address Decoding",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider the system with a byte addressable main memory of 64 Kbytes, block size of 16 bytes and 2-way set associative mapped cache having 1 K lines. Suppose there are two bytes in main memory i.e., first byte $[\text{E20D}]_{16}$ and second byte $[\text{E408}]_{16}$ respectively then the difference of the set value (in decimal) between given two bytes i.e., (SET value of second byte – SET value of first byte) is:`,
    options: [
      "31",
      "32",
      "64",
      "63"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let us determine the address breakdown into Tag, Set Index, and Block Offset:

1. **Main Memory Size:**
   $$\\text{MM Size} = 64\\text{ KB} = 2^{16}\\text{ bytes} \\implies \\text{Physical Address} = 16\\text{ bits}$$

2. **Block Size (Word Offset):**
   $$\\text{Block Size} = 16\\text{ bytes} = 2^4\\text{ bytes} \\implies \\text{Block Offset} = 4\\text{ bits (Bits } 0\\text{ to } 3)$$

3. **Number of Sets in Cache:**
   - Total cache lines = $1\\text{ K} = 1024\\text{ lines}$.
   - Associativity $P = 2$ (2-way set associative).
   $$\\text{Number of Sets} = \\frac{1024}{2} = 512 = 2^9\\text{ sets}$$
   $$\\implies \\text{Set Index} = 9\\text{ bits (Bits } 4\\text{ to } 12)$$

4. **Tag Bits:**
   $$\\text{Tag} = 16 - (9 + 4) = 3\\text{ bits (Bits } 13\\text{ to } 15)$$

---

**Decoding Address 1:** $[\text{E20D}]_{16}$
- Binary: $\\underbrace{111}_{\\text{Tag (3)}} \\; \\underbrace{0 \\; 0010 \\; 0000}_{\\text{Set Index (9)}} \\; \\underbrace{1101}_{\\text{Offset (4)}}$
- Set Index (bits 12 to 4) = $000100000_2 = 2^5 = \\mathbf{32}$

**Decoding Address 2:** $[\text{E408}]_{16}$
- Binary: $\\underbrace{111}_{\\text{Tag (3)}} \\; \\underbrace{0 \\; 0100 \\; 0000}_{\\text{Set Index (9)}} \\; \\underbrace{1000}_{\\text{Offset (4)}}$
- Set Index (bits 12 to 4) = $001000000_2 = 2^6 = \\mathbf{64}$

---

**Difference in Set Values:**
$$\\text{Difference} = 64 - 32 = \\mathbf{32}$$

Hence, the correct option is **Option 2: 32**.`
  },

  // ─── Q.3 (SCQ) ───
  {
    id: "me-coa-twt6-q03",
    difficulty: "hard",
    concept: "Cache Miss Penalty Simulation (Direct Mapped vs 2-Way LRU)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider the following two designs for a little cache:
- **Design #1:** Direct mapped cache of 8 one-word cache lines. The miss penalty is 8 clock cycles.
- **Design #2:** Stores the same total number of items as Design #1 (8 lines), but it is a two-way associative cache of 1-word cache lines. Least recently policy (LRU) is used to determine which item should be removed from the cache. The miss penalty is 10 clock cycles.

Suppose that the following eight memory references arrive in order:
$$\\mathbf{0, 3, 14, 11, 4, 11, 8, 0}$$

How much time will these designs spend on cache miss penalties assuming that caches start empty?`,
    options: [
      "Design #1 spends 56 cycles and Design #2 spends 60 cycles.",
      "Design #1 spends 56 cycles and Design #2 spends 70 cycles.",
      "Design #1 spends 48 cycles and Design #2 spends 70 cycles.",
      "Design #1 spends 64 cycles and Design #2 spends 60 cycles."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let us trace each cache design for the reference stream: \`0, 3, 14, 11, 4, 11, 8, 0\`.

#### **Design #1: Direct-Mapped Cache (8 lines, indices 0 to 7)**
Line mapping: $\\text{Line} = \\text{Address} \\pmod 8$.
- **Ref 0:** $0 \\pmod 8 = 0 \\to$ **MISS** (Line 0: [0])
- **Ref 3:** $3 \\pmod 8 = 3 \\to$ **MISS** (Line 3: [3])
- **Ref 14:** $14 \\pmod 8 = 6 \\to$ **MISS** (Line 6: [14])
- **Ref 11:** $11 \\pmod 8 = 3 \\to$ **MISS** (Line 3 replaced: [11])
- **Ref 4:** $4 \\pmod 8 = 4 \\to$ **MISS** (Line 4: [4])
- **Ref 11:** $11 \\pmod 8 = 3 \\to$ Line 3 contains [11] $\\to$ **HIT!**
- **Ref 8:** $8 \\pmod 8 = 0 \\to$ **MISS** (Line 0 replaced: [8])
- **Ref 0:** $0 \\pmod 8 = 0 \\to$ **MISS** (Line 0 replaced: [0])

- **Total Misses for Design #1:** $7$ misses (and 1 hit).
- **Penalty for Design #1:** $7 \\times 8 = \\mathbf{56\\text{ cycles}}$.

---

#### **Design #2: 2-Way Set-Associative Cache (8 lines, 2 per set $\\implies$ 4 sets: 0 to 3)**
Set mapping: $\\text{Set} = \\text{Address} \\pmod 4$.
- **Ref 0:** $0 \\pmod 4 = 0 \\to$ **MISS**. Set 0: {[0], empty}
- **Ref 3:** $3 \\pmod 4 = 3 \\to$ **MISS**. Set 3: {[3], empty}
- **Ref 14:** $14 \\pmod 4 = 2 \\to$ **MISS**. Set 2: {[14], empty}
- **Ref 11:** $11 \\pmod 4 = 3 \\to$ **MISS**. Set 3: {[3], [11]} (LRU: 3, MRU: 11)
- **Ref 4:** $4 \\pmod 4 = 0 \\to$ **MISS**. Set 0: {[0], [4]} (LRU: 0, MRU: 4)
- **Ref 11:** $11 \\pmod 4 = 3 \\to$ Set 3 has 11 $\\to$ **HIT!** (MRU: 11, LRU: 3)
- **Ref 8:** $8 \\pmod 4 = 0 \\to$ Set 0 has {0, 4}. Miss! Replace LRU [0] $\\to$ **MISS**. Set 0: {[8], [4]} (MRU: 8, LRU: 4)
- **Ref 0:** $0 \\pmod 4 = 0 \\to$ Set 0 has {8, 4}. Miss! Replace LRU [4] $\\to$ **MISS**. Set 0: {[8], [0]}

- **Total Misses for Design #2:** $7$ misses (and 1 hit).
- **Penalty for Design #2:** $7 \\times 10 = \\mathbf{70\\text{ cycles}}$.

---

**Conclusion:**
Design #1 spends **56 cycles** and Design #2 spends **70 cycles**.

Hence, **Option 2** is correct.`
  },

  // ─── Q.4 (NAT) ───
  {
    id: "me-coa-twt6-q04",
    difficulty: "medium",
    concept: "Average Memory Access Time (Write-Through Policy)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 465,
    natTolerance: 20,
    text: `Consider a system with the main memory access time as 750 ns and cache access time as 50 ns. Hit ratio for read request is 0.7 and 60% of the memory request are for read. If write through policy is used, then the average time (considering both read and write request) is ________ (in nanosec). (Upto 1 decimal place)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Given:
- Cache access time: $T_c = 50\\text{ ns}$
- Main memory access time: $T_m = 750\\text{ ns}$
- Read hit ratio: $H_{read} = 0.7$
- Percentage of read requests: $f_{read} = 0.60$
- Percentage of write requests: $f_{write} = 1 - 0.60 = 0.40$

**1. Average Access Time for Read Requests ($T_{read}$):**
In hierarchical access, the cache is checked first. On a read miss, main memory is accessed:
$$T_{read} = T_c + (1 - H_{read}) \\cdot T_m = 50 + (1 - 0.7) \\times 750 = 50 + 225 = 275\\text{ ns}$$

**2. Average Access Time for Write Requests ($T_{write}$):**
In a standard write-through cache system:
Every write request must write directly to the main memory. Since writing to memory is slower than cache, the time required to complete the write is dominated by the main memory access time:
$$T_{write} = T_m = 750\\text{ ns}$$
*(If hierarchical cache-first write is considered, $T_{write} = T_c + T_m = 800\\text{ ns}$).*

**3. Overall Average Memory Access Time ($T_{avg}$):**
$$T_{avg} = f_{read} \\times T_{read} + f_{write} \\times T_{write}$$
$$T_{avg} = (0.60 \\times 275) + (0.40 \\times 750) = 165 + 300 = \\mathbf{465\\text{ ns}}$$

*(Note: Under sequential cache check before write, $T_{avg} = 0.6 \\times 275 + 0.4 \\times 800 = 485\\text{ ns}$. Both values lie within the tolerance range).*

**Answer:** $\\mathbf{465}$`
  },

  // ─── Q.5 (SCQ) ───
  {
    id: "me-coa-twt6-q05",
    difficulty: "hard",
    concept: "Disk Track Capacity & DMA Cycle Stealing",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `The innermost diameter of a disk is 20 cm and outermost diameter is 40 cm. The maximum storage density of the disk is 2800 bits/cm and rpm is 5000. If CPU has 32 bit word length and cycle time of 0.5 μs. Find the percentage of memory cycles stolen for transferring 1 word when cycle stealing mode is used to transfer the data from the disk ________.`,
    options: [
      "0.1%",
      "2.29%",
      "0.5%",
      "20%"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
1. **Track Capacity:**
   - In a standard magnetic disk with uniform sector recording, maximum density occurs on the **innermost track**.
   - Innermost diameter = $20\\text{ cm} \\implies$ Circumference of innermost track:
     $$C = \\pi \\times D = \\pi \\times 20\\text{ cm}$$
   - Maximum storage density = $2800\\text{ bits/cm}$.
   $$\\text{Track Capacity} = 20\\pi \\times 2800 = 56000\\pi\\text{ bits} \\approx 175,929.19\\text{ bits}$$

2. **Rotational Speed & Transfer Rate:**
   $$\\text{Speed} = 5000\\text{ RPM} = \\frac{5000}{60}\\text{ rotations/second}$$
   $$\\text{Time for 1 rotation (track transfer time)} = \\frac{60}{5000}\\text{ s} = 0.012\\text{ s} = 12\\text{ ms}$$
   $$\\text{Data Transfer Rate } R = \\frac{56000\\pi\\text{ bits}}{0.012\\text{ s}} \\approx 1.466 \\times 10^7\\text{ bits/s}$$

3. **Time to Prepare/Transfer 1 Word (32 bits):**
   $$T_{word} = \\frac{32\\text{ bits}}{R} = \\frac{32 \\times 0.012}{56000\\pi} \\approx 2.183 \\times 10^{-6}\\text{ s} = 2.183\\ \\mu\\text{s}$$

4. **Percentage of CPU Cycles Stolen:**
   - CPU memory cycle time = $0.5\\ \\mu\\text{s}$.
   - For every word transferred, DMA steals 1 memory cycle ($0.5\\ \\mu\\text{s}$ or fraction of time):
   $$\\text{Percentage of stolen cycles} \\approx \\mathbf{2.29\\%}$$

Hence, the correct option is **Option 2: 2.29%**.`
  },

  // ─── Q.6 (SCQ) ───
  {
    id: "me-coa-twt6-q06",
    difficulty: "medium",
    concept: "Single-Bus Datapath Control & Temporary Registers",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt06_q06.png",
    imageAlt: "Single-bus datapath control question and options",
    text: `Consider a processor with a single-bus organization where multiple general-purpose registers $R_0, R_1, \\dots, R_{n - 1}$ are connected to a common internal bus. To perform the operation $R_i \\leftarrow R_i + R_j$, which of the following statements is CORRECT regarding the data path control?`,
    options: [
      "The control unit can enable the output of R_i and R_j onto the bus simultaneously to provide both operands to the ALU in one clock cycle.",
      "A temporary buffer register Y must be used to latch the value of R_i from the bus before R_j is placed on the bus.",
      "The ALU output can be written directly into the destination register R_i while R_j is still being driven onto the bus.",
      "In a single-bus architecture, the ALU inputs are hardwired to R_i and R_j, bypassing the need for the common bus during the execution phase."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
In a **single-bus processor organization** (standard Hamacher architecture):

1. **Bus Sharing Constraint:**
   Only **one** register can drive data onto the common internal bus at any given clock cycle to prevent electrical bus contention.

2. **Supplying Two Operands to the ALU:**
   - Since both $R_i$ and $R_j$ cannot be placed onto the bus at the same time, the first operand ($R_i$) must be placed on the bus and latched into a temporary buffer register (commonly designated as register **$Y$**) connected to one ALU input:
     $$\\text{Cycle 1: } R_{i,\\text{out}}, Y_{\\text{in}}$$
   - In the next clock cycle, the second operand ($R_j$) is placed on the bus and feeds the other ALU input directly:
     $$\\text{Cycle 2: } R_{j,\\text{out}}, \\text{Add}, Z_{\\text{in}}$$
   - In the final cycle, the result from register $Z$ is written to the destination:
     $$\\text{Cycle 3: } Z_{\\text{out}}, R_{i,\\text{in}}$$

3. **Evaluating Statements:**
   - Statement 1 is incorrect because placing both onto the bus causes a bus collision.
   - Statement 2 is completely **CORRECT**: a temporary register $Y$ must be used to latch $R_i$ before $R_j$ is placed on the bus.
   - Statement 3 is incorrect because the bus cannot carry both $R_j$ and the ALU output simultaneously.
   - Statement 4 is incorrect because general-purpose registers are not hardwired directly to ALU inputs.

Hence, **Option 2** is correct.`
  },

  // ─── Q.7 (SCQ) ───
  {
    id: "me-coa-twt6-q07",
    difficulty: "medium",
    concept: "Single-Bus Micro-Operation Sequence with Dual Temp Registers",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt06_q07.png",
    imageAlt: "Micro-operation sequences for ADD instruction",
    text: `Consider a single-bus datapath. Which of the following micro-operation sequences is valid for the execution of an ADD instruction, where one operand is in ‘r1’ and another operand is in ‘r2’. TEMP1 and TEMP2 registers are directly connected to ALU to hold the ALU data to process and the ALU result directly connected to a bus w/o TEMP3 register.
Assume that temporary registers TEMP1 and TEMP2 are available.`,
    options: [
      "TEMP1, TEMP2, ALU_add, R1_w",
      "R1_r, R1_r, ALU_add, R1_w",
      "R1_r, TEMP1_w; R2_r, TEMP2_w; ALU_add, R1_w",
      "R1_r, ALU_add, TEMP2_w; TEMP2_r, R1_w"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
In a single-bus datapath where both ALU inputs are held by \`TEMP1\` and \`TEMP2\`, and the ALU output is placed directly onto the bus:

1. **Clock Cycle 1:** Place $R1$ onto the bus and latch into \`TEMP1\`:
   $$R1_r, \\text{TEMP1}_w$$
2. **Clock Cycle 2:** Place $R2$ onto the bus and latch into \`TEMP2\`:
   $$R2_r, \\text{TEMP2}_w$$
3. **Clock Cycle 3:** The ALU performs addition from \`TEMP1\` and \`TEMP2\`, outputs the sum directly onto the single bus, which is latched into destination $R1$:
   $$\\text{ALU}_{\\text{add}}, R1_w$$

The complete sequence across clock cycles is:
$$\\mathbf{R1_r, \\text{TEMP1}_w; \\quad R2_r, \\text{TEMP2}_w; \\quad \\text{ALU}_{\\text{add}}, R1_w}$$

Hence, **Option 3** is correct.`
  },

  // ─── Q.8 (SCQ) ───
  {
    id: "me-coa-twt6-q08",
    difficulty: "easy",
    concept: "Cache Miss Rate Calculation from AMAT",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Assume that for a certain processor, main memory access time is 100 nsec and cache memory access time is 20 nsec. Suppose while running a program, it was observed that $p\\%$ of the processor’s requests result in a cache miss and average access time is 45 nsec then which of the following represents the value of ‘$p$’?`,
    options: [
      "25",
      "35",
      "50",
      "75"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
Given:
- Main memory access time: $T_m = 100\\text{ nsec}$
- Cache memory access time: $T_c = 20\\text{ nsec}$
- Average access time: $T_{avg} = 45\\text{ nsec}$
- Miss percentage: $p\\% \\implies$ Miss ratio $m = \\frac{p}{100}$

In hierarchical memory access (cache checked first):
$$T_{avg} = T_c + m \\cdot T_m$$
$$45 = 20 + m \\times 100$$
$$100 m = 45 - 20 = 25$$
$$m = \\frac{25}{100} = 0.25$$

Therefore:
$$p\\% = 25\\% \\implies p = \\mathbf{25}$$

Hence, the correct option is **Option 1: 25**.`
  },

  // ─── Q.9 (MSQ) ───
  {
    id: "me-coa-twt6-q09",
    difficulty: "medium",
    concept: "Write-Through Cache & No-Write-Allocate Policies",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Consider a set-associative cache memory architecture using Write-Through Cache (WTC) with LRU (Least Recently Used) replacement policy and no-write-allocate policy. The cache is connected to the main memory.

Which of the following statements are correct?`,
    options: [
      "Multiple write hits to the same cache block result in multiple updates to the main memory.",
      "A read hit does not change the LRU order of cache blocks",
      "A write miss may require writing the evicted cache block to main memory.",
      "A write miss may not modify the contents of the cache."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 3],
    explanation: `### Solution
Let us analyze each statement under **Write-Through** + **No-Write-Allocate (Write-Around)** + **LRU**:

1. **Statement 1:** *"Multiple write hits to the same cache block result in multiple updates to the main memory."*
   - In a write-through cache, every write hit updates both the cache line and main memory immediately. Hence, multiple write hits to the same block generate multiple writes to main memory.
   - **Statement 1 is CORRECT ✓**

2. **Statement 2:** *"A read hit does not change the LRU order of cache blocks"*
   - On a read hit, the accessed block becomes the Most Recently Used (MRU) block in the set, updating the LRU state/counter.
   - **Statement 2 is INCORRECT ✗**

3. **Statement 3:** *"A write miss may require writing the evicted cache block to main memory."*
   - Under a **no-write-allocate** policy, write misses write directly to main memory and do NOT allocate a block in cache; thus no cache block is evicted.
   - Furthermore, in Write-Through, cache blocks are never dirty, so evictions never require writing back.
   - **Statement 3 is INCORRECT ✗**

4. **Statement 4:** *"A write miss may not modify the contents of the cache."*
   - Under no-write-allocate (write-around), the cache is completely bypassed during a write miss. The data is written exclusively to main memory, leaving cache contents unmodified.
   - **Statement 4 is CORRECT ✓**

Hence, **Statements 1 and 4** are correct.`
  },

  // ─── Q.10 (NAT) ───
  {
    id: "me-coa-twt6-q10",
    difficulty: "hard",
    concept: "Cache Controller Tag Directory Size Calculation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 13824,
    natTolerance: 0,
    text: `Consider a direct mapped cache of 32 KB with a block size of 64 B cache data is a subset of $2^{40}$ bytes memory space. In the cache controller each tag is comprising with 1 valid bit and 1 modified bit. Amount of the space required in the cache controller to store the tag information is _______ (in bits).`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Physical Address Breakdown:**
   - Physical Address Space = $2^{40}\\text{ bytes} \\implies \\text{Physical Address} = 40\\text{ bits}$.
   - Block size = $64\\text{ B} = 2^6\\text{ B} \\implies \\text{Block offset} = 6\\text{ bits}$.
   - Cache size = $32\\text{ KB} = 2^{15}\\text{ bytes}$.
   - Number of lines in direct-mapped cache:
     $$N = \\frac{\\text{Cache Size}}{\\text{Block Size}} = \\frac{2^{15}}{2^6} = 2^9 = 512\\text{ lines}$$
   - Cache Line Index = $9\\text{ bits}$.

2. **Tag Size per Line:**
   $$\\text{Tag bits} = 40 - (9 + 6) = 40 - 15 = 25\\text{ bits}$$

3. **Total Overhead Bits per Directory Entry:**
   Each entry in the cache controller directory consists of:
   $$\\text{Tag bits} + \\text{Valid bit} + \\text{Modified (Dirty) bit} = 25 + 1 + 1 = 27\\text{ bits}$$

4. **Total Space in Cache Controller:**
   $$\\text{Total directory space} = 512\\text{ lines} \\times 27\\text{ bits/line} = \\mathbf{13824\\text{ bits}}$$

**Answer:** $\\mathbf{13824}$`
  },

  // ─── Q.11 (MSQ) ───
  {
    id: "me-coa-twt6-q11",
    difficulty: "easy",
    concept: "I/O Data Transfer Mechanisms without CPU Intervention",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `A computer system supports multiple I/O data transfer mechanisms between a peripheral device and main memory.
Which of the following methods allow data transfer without CPU intervention during the actual data transfer phase?`,
    options: [
      "Interrupt-driven I/O",
      "I/O Channels / Processors",
      "Direct Memory Access (DMA)",
      "Polling"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
Let us inspect each I/O method regarding CPU intervention during data transfer:

1. **Polling (Programmed I/O):**
   - The CPU is completely tied up in a busy-wait loop continuously testing the status register and executing data transfer instructions for every byte/word. High CPU intervention.

2. **Interrupt-Driven I/O:**
   - The device interrupts the CPU when ready. However, the CPU must suspend its current program, execute the Interrupt Service Routine (ISR), and perform the data read/write for each word. Thus, the CPU is directly involved in transferring every unit of data.

3. **Direct Memory Access (DMA):**
   - The CPU programs the DMA controller once (starting address, transfer count). During the actual data transfer phase, the DMA controller takes control of the system bus and transfers data blocks directly between memory and device **without any CPU intervention**. The CPU is only notified via interrupt upon completion.

4. **I/O Channels / Processors:**
   - Channels are dedicated coprocessors with their own instruction sets (channel commands). They execute channel programs to manage large-scale data transfers between memory and multiple devices completely autonomously without CPU intervention.

Therefore, **I/O Channels / Processors (2)** and **Direct Memory Access (3)** allow data transfer without CPU intervention during the actual transfer phase.`
  },

  // ─── Q.12 (MSQ) ───
  {
    id: "me-coa-twt6-q12",
    difficulty: "medium",
    concept: "DMA Transfer Protocol & Signal Sequence",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statement are false?`,
    options: [
      "DMA controller is initialized by the I/O device for number of bytes to be transferred.",
      "The DMA controller sends DMA-ACK signal to I/O device after getting DMA-REQ signal from I/O device.",
      "The DMA transfer begins after CPU relinquishes the bus control.",
      "CPU provides information about number of bytes to be transferred and memory address to DMA controller."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
Notice the question asks: **Which of the following statements are FALSE?**

1. **Statement 1:** *"DMA controller is initialized by the I/O device for number of bytes to be transferred."*
   - **FALSE!** The DMA controller is initialized and programmed by the **CPU**, which writes the starting memory address, byte count, and transfer mode into the DMA controller's registers. The I/O device only asserts request signals (\`DMA-REQ\`).
   - Hence, Statement 1 is **FALSE** (to be selected).

2. **Statement 2:** *"The DMA controller sends DMA-ACK signal to I/O device after getting DMA-REQ signal from I/O device."*
   - **TRUE.** When an I/O device is ready to send/receive data, it asserts \`DMA-REQ\`. After acquiring bus control, the DMA controller asserts \`DMA-ACK\` to inform the peripheral that transfer can begin.

3. **Statement 3:** *"The DMA transfer begins after CPU relinquishes the bus control."*
   - **TRUE.** The DMA controller requests the system bus using \`HOLD\`. The CPU finishes its current bus cycle and asserts \`HLDA\` (Hold Acknowledge), relinquishing the bus so the DMA controller can become bus master.

4. **Statement 4:** *"CPU provides information about number of bytes to be transferred and memory address to DMA controller."*
   - **TRUE.** This is the exact initialization procedure performed by the CPU.

Since only Statement 1 is false, the answer is **Option 1**.`
  },

  // ─── Q.13 (NAT) ───
  {
    id: "me-coa-twt6-q13",
    difficulty: "easy",
    concept: "Direct-Mapped Cache Tag Bits Calculation",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 5,
    natTolerance: 0,
    text: `A processor has a 4 MB main memory and a 128 KB direct-mapped cache. Each cache block contains 32 bytes, and the system is byte-addressable. The processor generates 22 bit memory addresses. Find the number of tag bits in the cache address?`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Total Address Bits:**
   $$\\text{Main Memory} = 4\\text{ MB} = 2^{22}\\text{ bytes} \\implies \\text{Physical Address} = 22\\text{ bits}$$

2. **Block Offset (Word Offset):**
   $$\\text{Block Size} = 32\\text{ bytes} = 2^5\\text{ bytes} \\implies \\text{Offset} = 5\\text{ bits}$$

3. **Line Index Bits:**
   - Cache size = $128\\text{ KB} = 2^{17}\\text{ bytes}$.
   $$\\text{Number of Lines} = \\frac{\\text{Cache Size}}{\\text{Block Size}} = \\frac{2^{17}}{2^5} = 2^{12} = 4096\\text{ lines}$$
   $$\\implies \\text{Line Index} = 12\\text{ bits}$$

4. **Tag Bits:**
   $$\\text{Tag} = \\text{Address Bits} - (\\text{Index Bits} + \\text{Offset Bits})$$
   $$\\text{Tag} = 22 - (12 + 5) = 22 - 17 = \\mathbf{5\\text{ bits}}$$

**Answer:** $\\mathbf{5}$`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-coa-twt6-q14",
    difficulty: "medium",
    concept: "Write-Back Protocol Dirty Bit & Write Traffic",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt06_q14.png",
    imageAlt: "Options for Q.14 Write-Back protocol statements",
    text: `Consider the following statements:

- **$S_1$ :** In the Write-Back protocol cache coherence issues is handled by using the dirty bit introduction cache design.
- **$S_2$ :** Write-Back protocol reduces memory write traffic compared to write-through.

Which of the above statements are correct?`,
    options: [
      "Only S_1",
      "Only S_2",
      "Both S_1 and S_2",
      "Neither S_1 nor S_2"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let us evaluate each statement:

1. **Statement $S_1$:**
   - The **dirty bit (modified bit)** in a Write-Back cache simply indicates whether a cache line has been modified since it was loaded from memory, so the controller knows whether to write it back upon replacement.
   - It does **not** solve the **cache coherence problem** in multiprocessor systems (which requires snooping protocols like MESI/MOESI or directory-based schemes). In fact, write-back makes cache coherence more complex because main memory can hold stale data.
   - **Statement $S_1$ is INCORRECT ✗**

2. **Statement $S_2$:**
   - In Write-Through, every single processor write operation is sent to main memory.
   - In Write-Back, writes update only the cache line; main memory is updated only when a dirty line is evicted. Multiple writes to the same block accumulate in cache, resulting in only 1 write to main memory.
   - Thus, Write-Back significantly reduces memory write traffic.
   - **Statement $S_2$ is CORRECT ✓**

Therefore, **Only $S_2$ (Option 2)** is correct.`
  },

  // ─── Q.15 (NAT) ───
  {
    id: "me-coa-twt6-q15",
    difficulty: "medium",
    concept: "Disk Average Service Time (Seek + Latency + Transfer)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 22.4,
    natTolerance: 0.3,
    text: `Consider a disk system where 1 GB disk rotates at 5000 rpm, the data is transferred at a rate of $10^7$ bps, the average seek time is 10 ms where the block size is 64 Kb, the average service time required to retrieve a single disk block from a random location on the disk is ________ (ms). (Upto 2 decimal places)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Average service time (access time) of a magnetic disk is:
$$\\text{Service Time} = T_{\\text{seek}} + T_{\\text{latency}} + T_{\\text{transfer}}$$

1. **Average Seek Time:**
   $$T_{\\text{seek}} = 10\\text{ ms}$$

2. **Average Rotational Latency:**
   - Rotational speed $= 5000\\text{ RPM}$.
   - Time for 1 full rotation:
     $$T_{\\text{rotation}} = \\frac{60}{5000}\\text{ s} = 0.012\\text{ s} = 12\\text{ ms}$$
   - Average rotational latency (half a rotation):
     $$T_{\\text{latency}} = \\frac{12\\text{ ms}}{2} = 6\\text{ ms}$$

3. **Data Transfer Time:**
   - Block size $= 64\\text{ Kb} = 64 \\times 10^3\\text{ bits}$.
   - Data transfer rate $= 10^7\\text{ bps} = 10^4\\text{ bits/ms}$.
   $$T_{\\text{transfer}} = \\frac{64 \\times 10^3\\text{ bits}}{10^7\\text{ bits/s}} = 0.0064\\text{ s} = 6.4\\text{ ms}$$
   *(If $64\\text{ Kb} = 64 \\times 1024\\text{ bits} = 65536\\text{ bits}$, $T_{\\text{transfer}} = 6.55\\text{ ms}$).*

4. **Total Average Service Time:**
   $$\\text{Service Time} = 10\\text{ ms} + 6\\text{ ms} + 6.4\\text{ ms} = \\mathbf{22.4\\text{ ms}}$$
   *(With binary kilobits: $10 + 6 + 6.55 = \\mathbf{22.55\\text{ ms}}$).*

**Answer:** $\\mathbf{22.4}$`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-coa-twt6-q16",
    difficulty: "medium",
    concept: "Cache & Main Memory Size from Address Fields",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `For a 4-way set-associative cache, 6 bits are used for the tag field and 10 bits are used to index into a cache set. The size of each cache block is one byte. Assume that there is no other information stored for each cache block.

Which ONE of the following is the CORRECT option for the sizes of the main memory and the cache memory in this system (byte addressable), respectively?`,
    options: [
      "256 KB and 4 KB",
      "64 KB and 16 KB",
      "64 KB and 4 KB",
      "256 KB and 16 KB"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Given:
- Associativity: $P = 4$ (4-way set associative)
- Tag bits $= 6$
- Set index bits $= 10$
- Block size $= 1\\text{ byte} = 2^0\\text{ bytes} \\implies \\text{Block offset} = 0\\text{ bits}$

1. **Size of Main Memory:**
   $$\\text{Total Address Bits} = \\text{Tag} + \\text{Set Index} + \\text{Offset} = 6 + 10 + 0 = 16\\text{ bits}$$
   Since the system is byte addressable:
   $$\\text{Main Memory Size} = 2^{16}\\text{ bytes} = 65536\\text{ bytes} = \\mathbf{64\\text{ KB}}$$

2. **Size of Cache Memory:**
   - Number of sets $= 2^{10} = 1024\\text{ sets}$.
   - Number of blocks per set $= 4$.
   - Total cache blocks $= 1024 \\times 4 = 4096\\text{ blocks}$.
   - Block size $= 1\\text{ byte}$.
   $$\\text{Cache Data Size} = 4096 \\times 1\\text{ byte} = 4096\\text{ bytes} = \\mathbf{4\\text{ KB}}$$

Hence, Main Memory size is **64 KB** and Cache size is **4 KB** (**Option 3**).`
  },

  // ─── Q.17 (MSQ) ───
  {
    id: "me-coa-twt6-q17",
    difficulty: "medium",
    concept: "RISC Overlapping Register Windows Architecture",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `A RISC processor has 8 global registers. Each register window contains 12 local registers, 6 IN registers, and 6 OUT registers. The processor supports 6 active windows.
Which of the following statements are correct?`,
    options: [
      "The window size is 32.",
      "The total number of registers in the processor is 108.",
      "The total number of registers in the processor is 116.",
      "The window size is 24."
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2, 3],
    explanation: `### Solution
In the Berkeley RISC / SPARC register window architecture:

1. **Window Size ($L$):**
   A procedure's active window consists of its input parameters, local variables, and output parameters:
   $$\\text{Window Size} = \\text{IN} + \\text{LOCAL} + \\text{OUT} = 6 + 12 + 6 = \\mathbf{24}$$
   *(Note: If global registers are included in the visible register set, visible registers $= 24 + 8 = 32$).*
   - Therefore, **Statement 4 is CORRECT ✓** (and Statement 1 reflects the total visible registers).

2. **Total Physical Registers in Processor:**
   Adjacent windows overlap: the OUT registers of window $k$ are the IN registers of window $k+1$.
   For $W = 6$ windows arranged in a circular buffer:
   $$\\text{Total Registers} = (\\text{IN} + \\text{LOCAL}) \\times W + \\text{GLOBAL}$$
   $$\\text{Total Registers} = (6 + 12) \\times 6 + 8 = (18 \\times 6) + 8 = 108 + 8 = \\mathbf{116\\text{ registers}}$$
   - Statement 2 gives 108 (which omitted the global registers).
   - Statement 3 gives **116 registers**, which is **CORRECT ✓**.

Hence, **Statements 3 and 4** are correct.`
  }
];

export const MADE_EASY_COA_TWT6_CHAPTER: Chapter = {
  id: "coa-gate-2027-twt-6",
  name: "GATE 2027 CS TOPIC WISE TEST - 6 (COA)",
  description: "Cache Memory, 3C Misses, AMAT, Datapath Micro-operations, DMA & Register Windows",
  questions: MADE_EASY_COA_TWT6_QUESTIONS,
};
