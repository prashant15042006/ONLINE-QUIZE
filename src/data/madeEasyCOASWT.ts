import type { Question, Chapter } from "./quizData";

export const MADE_EASY_COA_SWT_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-coa-swt-q01",
    difficulty: "easy",
    concept: "Amdahl's Law Speedup Calculation",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider an enhancement to the processor of a web application. The enhanced CPU is 60 times faster on search queries than old processors. The old processor is busy with search queries 85% of the time. Then the speedup gained by integrating the enhanced CPU is:`,
    options: [
      "4.27",
      "2.89",
      "6.09",
      "4.58"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Using **Amdahl's Law**:
$$\\text{Speedup} = \\frac{1}{(1 - f) + \\frac{f}{s}}$$
Where:
- $f = 0.85$ (fraction of execution time that is enhanced)
- $s = 60$ (speedup factor of the enhanced part)

Substitute the values:
$$\\text{Speedup} = \\frac{1}{(1 - 0.85) + \\frac{0.85}{60}} = \\frac{1}{0.15 + 0.014167} = \\frac{1}{0.164167} \\approx \\mathbf{6.0913}$$

**Correct Answer: Option 3 (6.09)**`
  },

  // ─── Q.2 (SCQ) ───
  {
    id: "me-coa-swt-q02",
    difficulty: "easy",
    concept: "Addressing Modes and High-Level Language Constructs",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/coa_swt_q02.png",
    text: `Match each addressing mode in List-I with the most suitable high-level language concept in List-II:

| List-I (Addressing Mode) | List-II (HLL Concept) |
|---|---|
| A. Direct addressing | 1. Array traversal |
| B. Immediate addressing | 2. Variable stored at a fixed memory location |
| C. Indexed addressing | 3. Constant literal |
| D. Indirect addressing | 4. Pointer dereferencing |`,
    options: [
      "(a) A-2, B-3, C-1, D-4",
      "(b) A-3, B-2, C-4, D-1",
      "(c) A-2, B-4, C-1, D-3",
      "(d) A-1, B-3, C-2, D-4"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- **A. Direct addressing:** The operand address is directly specified in the instruction; ideal for accessing global/static variables stored at fixed memory addresses $\\to$ **2**.
- **B. Immediate addressing:** The operand itself is part of the instruction; used for constant literals (e.g., \`x = 5\`) $\\to$ **3**.
- **C. Indexed addressing:** Effective address = Base + Index register; ideal for stepping through arrays (array traversal) $\\to$ **1**.
- **D. Indirect addressing:** The instruction points to a memory word containing the actual target address; fundamental for pointers and pointer dereferencing (\`*ptr\`) $\\to$ **4**.

Matching: **A-2, B-3, C-1, D-4**, which is code **(a)**.

**Correct Answer: Option 1 ((a))**`
  },

  // ─── Q.3 (SCQ) ───
  {
    id: "me-coa-swt-q03",
    difficulty: "easy",
    concept: "Instruction Fetch Micro-operations",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/coa_swt_q03.png",
    text: `The sequence of micro-operations is called a micro-program. For the given fetch cycle micro-program, what should come in place of '$\\underline{X}$'?
$$T_1: \\text{PC} \\to \\text{MAR}; \\quad \\text{PC}_{\\text{out}}, \\text{MAR}_{\\text{in}}$$
$$T_2: M[\\underline{X}] \\to \\text{MBR}; \\quad \\underline{X}_{\\text{out}}, \\text{MBR}_{\\text{in}}$$
$$T_3: \\text{MBR} \\to \\text{IR}; \\quad \\text{MBR}_{\\text{out}}, \\text{IR}_{\\text{in}}$$
$$\\text{PC} \\leftarrow \\text{PC} + \\text{Step size}; \\quad \\text{PC}_{\\text{out}}, \\text{PC}_{\\text{in}}$$`,
    options: [
      "MBR",
      "PC",
      "MAR",
      "IR"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
In the standard Von Neumann instruction fetch cycle:
1. $T_1$: The address of the next instruction stored in the Program Counter (PC) is transferred to the Memory Address Register: $\\text{PC} \\to \\text{MAR}$.
2. $T_2$: The memory unit reads the instruction word located at the address currently held in the MAR and puts it into the Memory Buffer Register (MBR):
   $$M[\\mathbf{MAR}] \\to \\text{MBR}$$
   Hence, $\\underline{X} = \\mathbf{MAR}$.
3. $T_3$: The instruction opcode is transferred from MBR to the Instruction Register (IR), and PC is incremented.

**Correct Answer: Option 3 (MAR)**`
  },

  // ─── Q.4 (MCQ) ───
  {
    id: "me-coa-swt-q04",
    difficulty: "easy",
    concept: "ISA vs Microarchitecture Distinction",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `Which of the following is/are part of the Instruction Set Architecture (ISA) of a processor?`,
    options: [
      "Addressing modes used by instructions.",
      "Pipeline depth of the processor.",
      "Instruction encoding formats.",
      "Size of the branch target buffer."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
- **Instruction Set Architecture (ISA)** is the programmer-visible abstract model of the processor:
  - Addressing modes (Statement 1) $\\implies$ **Part of ISA**.
  - Instruction encoding formats / instruction set (Statement 3) $\\implies$ **Part of ISA**.
  - Architectural registers, data types, memory addressing model.
- **Microarchitecture** is the internal physical hardware implementation of the ISA:
  - Pipeline depth (Statement 2) $\\implies$ Microarchitecture (not visible to machine code).
  - Branch target buffer (BTB) size, cache size, execution units (Statement 4) $\\implies$ Microarchitecture.

Therefore, Statements 1 and 3 belong to ISA.

**Correct Answer: Options 1 and 3**`
  },

  // ─── Q.5 (SCQ) ───
  {
    id: "me-coa-swt-q05",
    difficulty: "medium",
    concept: "I/O Interface Modes and Bus Architecture",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Which of the following statements is/are correct?
$S_1$: Memory and I/O devices have their own separate buses in IOP addressing mode.
$S_2$: The isolated I/O method isolates memory and I/O addresses so that the memory address range is not affected by interface address assignment.`,
    options: [
      "Only S₁",
      "Only S₂",
      "Both S₁ and S₂",
      "Neither S₁ nor S₂"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- **Statement $S_1$ is True:** An I/O Processor (IOP) is an independent channel controller equipped with its own instruction set and DMA capability. It communicates with main memory via the system memory bus, and with external I/O devices via its own separate dedicated I/O bus.
- **Statement $S_2$ is True:** In **Isolated I/O** (Port-Mapped I/O), memory addresses and I/O port addresses occupy distinct, independent address spaces (accessed via special \`IN\` and \`OUT\` instructions). Assigning addresses to I/O interfaces does not consume any portion of the primary memory address space.

Both statements $S_1$ and $S_2$ are correct.

**Correct Answer: Option 3 (Both S₁ and S₂)**`
  },

  // ─── Q.6 (SCQ) ───
  {
    id: "me-coa-swt-q06",
    difficulty: "easy",
    concept: "Interrupt Handling Sequence",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `A non-pipelined processor receives an interrupt request from an external device while executing a program instruction. In order to service the interrupt, the processor performs the following steps:
(i) Control is transferred to the Interrupt Service Routine (ISR).
(ii) The address of the next instruction to be executed is saved.
(iii) The processor finishes execution of the current instruction.

Which one of the following is the correct sequence of these steps?`,
    options: [
      "(iii), (i), (ii)",
      "(ii), (iii), (i)",
      "(iii), (ii), (i)",
      "(i), (ii), (iii)"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
When an interrupt is recognized during instruction execution:
1. **(iii)** The processor must first complete the execution of the currently running instruction (since interrupts are sampled at the end of the instruction execution cycle).
2. **(ii)** The return address (the address of the next instruction from the Program Counter) along with the Processor Status Word (PSW) is pushed onto the stack.
3. **(i)** The vector address of the ISR is loaded into the PC, transferring CPU control to the Interrupt Service Routine.

The correct chronological sequence is **(iii), (ii), (i)**.

**Correct Answer: Option 3 ((iii), (ii), (i))**`
  },

  // ─── Q.7 (NAT) ───
  {
    id: "me-coa-swt-q07",
    difficulty: "medium",
    concept: "Expanding Opcode Architecture",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    text: `Consider a system with an instruction set that uses a fixed 19-bit instruction length and 8-bit address length. If there exist '6' two-address instructions and 'K' one-address instructions. What is the maximum value of $K$, if the number of zero-address instructions is 65536?`,
    options: [],
    correctAnswerIndex: -1,
    natAnswer: 256,
    natTolerance: 0,
    explanation: `### Solution
- Total instruction length = 19 bits.
- Address field length = 8 bits.

1. **Two-address instructions:**
   - Address fields consume $2 \\times 8 = 16$ bits.
   - Opcode bits = $19 - 16 = 3$ bits.
   - Total 3-bit combinations = $2^3 = 8$.
   - 6 two-address instructions are defined, leaving $8 - 6 = 2$ unused combinations for expansion.

2. **One-address instructions:**
   - 1 address field consumes 8 bits.
   - Opcode field = $19 - 8 = 11$ bits (3 bits prefix + 8 bits).
   - From the 2 available prefixes, available combinations = $2 \\times 2^8 = 512$.
   - Let $K$ one-address instructions be allocated.
   - Unused combinations left for zero-address instructions = $512 - K$.

3. **Zero-address instructions:**
   - No address field (all 19 bits are opcode).
   - Each unused one-address combination expands by $2^8 = 256$ zero-address instructions:
     $$\\text{Total zero-address instructions} = (512 - K) \\times 2^8 = (512 - K) \\times 256$$
   - Given number of zero-address instructions = $65536 = 2^{16}$:
     $$(512 - K) \\times 256 = 65536$$
     $$512 - K = \\frac{65536}{256} = 256$$
     $$K = 512 - 256 = \\mathbf{256}$$

**Correct Answer: 256**`
  },

  // ─── Q.8 (NAT) ───
  {
    id: "me-coa-swt-q08",
    difficulty: "medium",
    concept: "Vertical Microprogramming Control Word Sizing",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    text: `Consider a micro-programmed control unit which supports 540 instructions, each instruction takes 30 micro-operations. If 22 flags and 72 control signals are supported and vertical micro-programming is used, then the size of 4 control words is ________ (in Bytes).`,
    options: [],
    correctAnswerIndex: -1,
    natAnswer: 13,
    natTolerance: 0,
    explanation: `### Solution
In a vertical micro-programmed control unit, the Control Word (CW) consists of three fields:
1. **Control Signal field:**
   72 distinct control signals encoded in binary:
   $$\\lceil \\log_2 72 \\rceil = 7 \\text{ bits} \\quad (2^6 = 64 < 72 \\le 128 = 2^7)$$
2. **Branch/Flag Condition field:**
   22 condition flags encoded in binary:
   $$\\lceil \\log_2 22 \\rceil = 5 \\text{ bits} \\quad (2^4 = 16 < 22 \\le 32 = 2^5)$$
3. **Next Micro-instruction Address field:**
   - Total number of micro-operations in Control Store:
     $$\\text{Total Words} = 540 \\times 30 = 16,200 \\text{ words}$$
   - Bits required to address 16,200 control store words:
     $$\\lceil \\log_2(16,200) \\rceil = 14 \\text{ bits} \\quad (2^{13} = 8192 < 16,200 \\le 16,384 = 2^{14})$$

**Total size of 1 Control Word:**
$$\\text{Size of 1 CW} = 7 + 5 + 14 = 26 \\text{ bits}$$

**Size of 4 Control Words:**
$$\\text{Total bits} = 4 \\times 26 = 104 \\text{ bits}$$
$$\\text{Size in Bytes} = \\frac{104}{8} = \\mathbf{13 \\text{ Bytes}}$$

**Correct Answer: 13**`
  },

  // ─── Q.9 (MCQ) ───
  {
    id: "me-coa-swt-q09",
    difficulty: "easy",
    concept: "RISC Architecture Core Characteristics",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `Which of the following is/are true for Reduced Instruction Set Computer (RISC)?`,
    options: [
      "More number of registers compared to CISC.",
      "Hardwired control unit.",
      "Fixed length instruction.",
      "More address mode (AM) compared to CISC."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
- **Statement 1 is True:** RISC relies heavily on register-to-register operations and compiler optimization, and therefore incorporates a much larger register file (typically 32 to 128+ registers) than CISC.
- **Statement 2 is True:** RISC designs feature simple, single-cycle instructions implemented via fast **hardwired control units** rather than micro-programmed control stores.
- **Statement 3 is True:** RISC architectures use **fixed-length instructions** (typically 32 bits) with uniform formats to simplify pipeline decoding.
- **Statement 4 is False:** RISC features **fewer** and simpler addressing modes (typically 3 to 5 modes: register, immediate, base-displacement), whereas CISC features many complex addressing modes.

Statements 1, 2, and 3 are true.

**Correct Answer: Options 1, 2, 3**`
  },

  // ─── Q.10 (SCQ) ───
  {
    id: "me-coa-swt-q10",
    difficulty: "medium",
    concept: "CPU Performance Equation and Clock Rate Scaling",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider an “old” computer with 4 GHz clock rate that takes 60 seconds to execute a program completely. If the program is modified such that it takes 2.4 times the clock cycles of the old CPU, and it is executed on a new/upgraded computer where it takes 16 seconds to execute, the clock rate of the upgraded computer is:`,
    options: [
      "36 GHz",
      "24 GHz",
      "48 GHz",
      "16 GHz"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
The basic CPU performance equation is:
$$\\text{CPU Time} = \\frac{\\text{Clock Cycles}}{\\text{Clock Rate}}$$

**For the Old Computer:**
$$\\text{Clock Cycles}_{\\text{old}} = \\text{Time}_{\\text{old}} \\times \\text{Clock Rate}_{\\text{old}} = 60 \\text{ s} \\times (4 \\times 10^9 \\text{ Hz}) = 240 \\times 10^9 \\text{ cycles}$$

**For the Upgraded Computer:**
$$\\text{Clock Cycles}_{\\text{new}} = 2.4 \\times \\text{Clock Cycles}_{\\text{old}} = 2.4 \\times 240 \\times 10^9 = 576 \\times 10^9 \\text{ cycles}$$
$$\\text{Time}_{\\text{new}} = 16 \\text{ s}$$
$$\\text{Clock Rate}_{\\text{new}} = \\frac{\\text{Clock Cycles}_{\\text{new}}}{\\text{Time}_{\\text{new}}} = \\frac{576 \\times 10^9}{16} = 36 \\times 10^9 \\text{ Hz} = \\mathbf{36 \\text{ GHz}}$$

**Correct Answer: Option 1 (36 GHz)**`
  },

  // ─── Q.11 (NAT) ───
  {
    id: "me-coa-swt-q11",
    difficulty: "easy",
    concept: "Hard Disk Capacity Calculation",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    text: `A hard disk has 32 recording surfaces, 512 cylinders, 256 sectors per track and sector size is 2 KB.
Find the total size of this hard disk in GB:`,
    options: [],
    correctAnswerIndex: -1,
    natAnswer: 8,
    natTolerance: 0,
    explanation: `### Solution
Disk Capacity is given by:
$$\\text{Capacity} = \\text{Surfaces} \\times \\text{Tracks/Surface (Cylinders)} \\times \\text{Sectors/Track} \\times \\text{Sector Size}$$
Substitute the parameters:
$$\\text{Capacity} = 32 \\times 512 \\times 256 \\times 2 \\text{ KB}$$
Expressing in powers of 2:
$$= 2^5 \\times 2^9 \\times 2^8 \\times 2^1 \\text{ KB} = 2^{23} \\text{ KB}$$
Since $1 \\text{ MB} = 2^{10} \\text{ KB}$ and $1 \\text{ GB} = 2^{20} \\text{ KB}$:
$$\\text{Capacity in GB} = \\frac{2^{23} \\text{ KB}}{2^{20} \\text{ KB/GB}} = 2^3 \\text{ GB} = \\mathbf{8 \\text{ GB}}$$

**Correct Answer: 8**`
  },

  // ─── Q.12 (MCQ) ───
  {
    id: "me-coa-swt-q12",
    difficulty: "medium",
    concept: "Horizontal vs Vertical Micro-instructions",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `Which of the following statements is/are correct?`,
    options: [
      "Horizontal micro-instruction have a higher degree of parallelism than vertical micro-instruction.",
      "Horizontal micro-instruction support slower execution compared to vertical micro-instruction.",
      "Vertical micro-instruction support control signals expressed in encoded binary format.",
      "Vertical micro-instruction are used in CISC."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 3],
    explanation: `### Solution
- **Statement 1 is True:** Horizontal micro-instructions assign 1 bit per control signal (unencoded), allowing multiple functional units and control lines to be simultaneously active, resulting in a higher degree of parallelism.
- **Statement 2 is False:** Horizontal micro-instructions execute **faster** because no decoding circuitry is needed; control signals are applied directly.
- **Statement 3 is True:** Vertical micro-instructions encode mutually exclusive control signals into compact binary fields, requiring decoders at runtime.
- **Statement 4 is True:** CISC architectures traditionally employ vertical (or two-level) microprogramming to minimize the physical area of the control ROM.

Statements 1, 3, and 4 are correct.

**Correct Answer: Options 1, 3, 4**`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-coa-swt-q13",
    difficulty: "medium",
    concept: "Programmed I/O vs DMA",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Which of the following statements is/are correct?
$S_1$: CPU takes care of the I/O operation in the programmed I/O modes because the I/O devices are directly connected to the system bus.
$S_2$: DMA technique is more efficient than the interrupt-driven technique for high volume I/O data transfer.`,
    options: [
      "Only S₁",
      "Only S₂",
      "Both S₁ and S₂",
      "None of these"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **Statement $S_1$ is False:** In programmed I/O, the CPU handles data transfers word-by-word via busy-waiting polling. However, I/O devices are **never directly connected to the CPU system bus**; they connect through an **I/O interface/controller module** to bridge differences in speed, data format, and signal levels.
- **Statement $S_2$ is True:** Interrupt-driven I/O requires the CPU to execute an ISR for each byte/word transferred, creating substantial context-switch overhead. **DMA (Direct Memory Access)** offloads block data transfers directly between memory and device without CPU intervention, making it substantially more efficient for high-volume transfers.

Therefore, only $S_2$ is correct.

**Correct Answer: Option 2 (Only S₂)**`
  },

  // ─── Q.14 (NAT) ───
  {
    id: "me-coa-swt-q14",
    difficulty: "easy",
    concept: "Average CPI Calculation",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    imageUrl: "/images/made_easy/coa_swt_q14.png",
    text: `A program consists of mainly different types of instructions. The table for instruction type, Cycle Per Instruction (CPI) and frequency of such instruction in the program is given below:

| Type | CPI | Frequency (Count) |
|---|---|---|
| ALU | 1 | 40 |
| Branch | 2 | 18 |
| Load/Store | 3 | 32 |
| Memory referring | 4 | 30 |

The average CPI of the program is ________. (Upto 2 decimal places)`,
    options: [],
    correctAnswerIndex: -1,
    natAnswer: 2.43,
    natTolerance: 0.02,
    explanation: `### Solution
Compute total instruction count and total clock cycles:
$$\\text{Total Instructions} = 40 + 18 + 32 + 30 = 120$$
$$\\text{ALU Cycles} = 40 \\times 1 = 40$$
$$\\text{Branch Cycles} = 18 \\times 2 = 36$$
$$\\text{Load/Store Cycles} = 32 \\times 3 = 96$$
$$\\text{Memory Referring Cycles} = 30 \\times 4 = 120$$

$$\\text{Total Clock Cycles} = 40 + 36 + 96 + 120 = 292$$
$$\\text{Average CPI} = \\frac{\\text{Total Cycles}}{\\text{Total Instructions}} = \\frac{292}{120} = \\frac{73}{30} \\approx \\mathbf{2.4333...}$$

**Correct Answer: 2.43 (Acceptable Range: 2.42 - 2.44)**`
  },

  // ─── Q.15 (MCQ) ───
  {
    id: "me-coa-swt-q15",
    difficulty: "easy",
    concept: "Cache Miss Classifications and Locality",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `Which of the following statements is/are correct?`,
    options: [
      "Capacity miss can be reduced by increasing the cache size.",
      "The search concept used in associative memory is parallel search.",
      "Conflict miss can be reduced by increasing cache size.",
      "Reducing block size will impact the spatial locality."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2, 3],
    explanation: `### Solution
- **Statement 1 is True:** Capacity misses occur when the cache cannot hold all the blocks needed for the program. Increasing cache size directly alleviates capacity misses.
- **Statement 2 is True:** Associative memory (CAM - Content Addressable Memory) searches all words in parallel simultaneously across all locations using comparison hardware.
- **Statement 3 is True:** Increasing cache size increases the number of sets/lines, spreading memory blocks across more locations and reducing conflict misses.
- **Statement 4 is True:** Spatial locality benefits from bringing adjacent words into the cache on a miss. Smaller block sizes load fewer neighboring words, reducing spatial locality exploitation.

All statements 1, 2, 3, and 4 are correct!

**Correct Answer: Options 1, 2, 3, 4**`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-coa-swt-q16",
    difficulty: "easy",
    concept: "Cache Write Policies: Write-Through vs Write-Back",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Which of the following statements is true?
$S_1$: For a two-level memory hierarchy (cache and main memory), WRITE THROUGH results in more number of write cycles to main memory than WRITE BACK.
$S_2$: In write back protocol, cache memory and main memory locations are updated simultaneously.
$S_3$: Modify or Dirty bits are used by the write back protocol.`,
    options: [
      "Only S₁ and S₂",
      "Only S₂ and S₃",
      "Only S₁ and S₃",
      "None of these"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- **Statement $S_1$ is True:** In Write-Through, every single write hit generates a write transaction to main memory. In Write-Back, writes update only the cache line; main memory is written only when a modified block is evicted. Thus, Write-Through causes far more write cycles to main memory.
- **Statement $S_2$ is False:** Updating cache and main memory simultaneously is the definition of **Write-Through**, NOT Write-Back.
- **Statement $S_3$ is True:** Write-Back uses a **Dirty/Modify bit** per line to flag whether the block has been modified and requires writing to memory upon eviction.

Statements $S_1$ and $S_3$ are true.

**Correct Answer: Option 3 (Only S₁ and S₃)**`
  },

  // ─── Q.17 (MCQ) ───
  {
    id: "me-coa-swt-q17",
    difficulty: "medium",
    concept: "Direct-Mapped Cache Address Breakdown",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `A computer system uses a direct-mapped cache memory. The physical address is divided into three fields: tag, index, and block offset. The system has a fixed physical address size and a fixed total cache size. The cache block size is varied during design.
Which of the following statements is/are correct?`,
    options: [
      "Increasing the block size increases the number of block offset bits.",
      "Increasing the block size increases the number of tag bits.",
      "Decreasing the block size reduces the cache tag overhead in the cache memory.",
      "Block size has no effect on the size of the tag field in the address format."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 3],
    explanation: `### Solution
Let physical address size be $P$ bits, cache size be $C$ bytes, and block size be $B$ bytes:
- Block offset bits: $w = \\log_2 B$
- Number of lines: $N = C / B$
- Line index bits: $s = \\log_2 N = \\log_2(C / B) = \\log_2 C - \\log_2 B$

Notice the sum of index and offset bits:
$$s + w = (\\log_2 C - \\log_2 B) + \\log_2 B = \\log_2 C$$
The sum $(s + w)$ is **constant** and depends solely on total cache size $C$!
The Tag field size is:
$$\\text{Tag} = P - (s + w) = P - \\log_2 C$$
Since $P$ and $C$ are fixed:
1. Increasing block size $B$ increases $w = \\log_2 B$ $\\implies$ **Statement 1 is True**.
2. Block size has **no effect** on the tag field length in the address format $\\implies$ **Statement 4 is True**.
3. Tag overhead in cache is $N \\times \\text{Tag bits} = \\frac{C}{B} \\times t$. Decreasing block size $B$ increases $N$, thereby increasing total tag overhead $\\implies$ Statement 3 is False.

Statements 1 and 4 are correct.

**Correct Answer: Options 1 and 4**`
  },

  // ─── Q.18 (SCQ) ───
  {
    id: "me-coa-swt-q18",
    difficulty: "medium",
    concept: "Pipelining Data Hazards: WAR and WAW",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/coa_swt_q18.png",
    text: `Consider the following instruction sequence with their meanings given below:
- $I_0: \\text{DIV } R_1, R_2, R_1 \\implies R_1 \\leftarrow R_2 / R_1$
- $I_1: \\text{MUL } R_2, R_3, R_5 \\implies R_2 \\leftarrow R_3 \\times R_5$
- $I_2: \\text{ADD } R_5, R_4, R_2 \\implies R_5 \\leftarrow R_4 + R_2$
- $I_3: \\text{SUB } R_1, R_3, R_7 \\implies R_1 \\leftarrow R_3 - R_7$

What is the number of Write After Read (WAR) and Write After Write (WAW) hazards for the above instruction sequence?`,
    options: [
      "2, 0",
      "1, 3",
      "2, 2",
      "3, 1"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Analyze the Read Set (Source) and Write Set (Destination) for each instruction:
- $I_0$: Reads $\\{R_1, R_2\\}$, Writes $\\{R_1\\}$
- $I_1$: Reads $\\{R_3, R_5\\}$, Writes $\\{R_2\\}$
- $I_2$: Reads $\\{R_4, R_2\\}$, Writes $\\{R_5\\}$
- $I_3$: Reads $\\{R_3, R_7\\}$, Writes $\\{R_1\\}$

**1. Write After Read (WAR) Hazards:**
Occurs when $I_j$ writes to a register that an earlier instruction $I_i$ ($i < j$) reads:
1. $I_0$ reads $R_2$, and $I_1$ writes $R_2$ $\\to$ **WAR on $R_2$**
2. $I_1$ reads $R_5$, and $I_2$ writes $R_5$ $\\to$ **WAR on $R_5$**
3. $I_0$ reads $R_1$, and $I_3$ writes $R_1$ $\\to$ **WAR on $R_1$**
Total WAR hazards = **3**.

**2. Write After Write (WAW) Hazards:**
Occurs when $I_j$ writes to the same register that an earlier instruction $I_i$ ($i < j$) writes:
1. $I_0$ writes $R_1$, and $I_3$ writes $R_1$ $\\to$ **WAW on $R_1$**
Total WAW hazards = **1**.

Hence, (WAR, WAW) = **(3, 1)**.

**Correct Answer: Option 4 (3, 1)**`
  },

  // ─── Q.19 (SCQ) ───
  {
    id: "me-coa-swt-q19",
    difficulty: "medium",
    concept: "Direct-Mapped Cache Total Tag Storage",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `A processor uses a direct-mapped cache with the following specifications:
• Main memory size = 16 M bytes
• Cache size = 64 K bytes
• Cache block size = 16 bytes

Assuming byte-addressable memory, determine the total number of bits required for storing all cache tag fields:`,
    options: [
      "8192 bits",
      "10240 bits",
      "32768 bits",
      "36384 bits"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
1. **Physical Address Bits:**
   $$\\text{Physical Address} = \\log_2(16 \\text{ MB}) = \\log_2(2^{24} \\text{ B}) = 24 \\text{ bits}$$
2. **Block Offset Bits:**
   $$w = \\log_2(16 \\text{ B}) = 4 \\text{ bits}$$
3. **Number of Cache Lines:**
   $$N = \\frac{\\text{Cache Size}}{\\text{Block Size}} = \\frac{64 \\text{ KB}}{16 \\text{ B}} = \\frac{2^{16}}{2^4} = 2^{12} = 4096 \\text{ lines}$$
   $$\\text{Index bits} = \\log_2(4096) = 12 \\text{ bits}$$
4. **Tag Bits per Line:**
   $$\\text{Tag} = 24 - (12 + 4) = 24 - 16 = 8 \\text{ bits}$$
5. **Total Tag Storage:**
   $$\\text{Total Tag Bits} = \\text{Number of lines} \\times \\text{Tag bits per line} = 4096 \\times 8 = \\mathbf{32768 \\text{ bits}}$$

**Correct Answer: Option 3 (32768 bits)**`
  },

  // ─── Q.20 (SCQ) ───
  {
    id: "me-coa-swt-q20",
    difficulty: "medium",
    concept: "Pipeline Hazard Resolution with Operand Forwarding",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/coa_swt_q20.png",
    text: `Consider the following sequence of instructions executed on a 5-stage pipelined processor. Data dependency is resolved by operand forwarding techniques. MOV instruction output is present in the 4th stage (MEM) and ALU operation output is present in the 3rd stage (EX).
- $I_1: \\text{MOV } R_0, M[300]$
- $I_2: \\text{SUB } R_0, R_1$
- $I_3: \\text{ADD } R_2, R_1$
- $I_4: \\text{MOV } R_3, @200$
- $I_5: \\text{MUL } R_2, R_3$

What is the number of cycles required to complete the program? (Assume each stage takes 1 cycle time)`,
    options: [
      "8",
      "9",
      "10",
      "11"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
5 pipeline stages: IF, ID, EX, MEM, WB.
- Ideal execution time for $n = 5$ instructions in a $k = 5$ stage pipeline:
  $$\\text{Base Cycles} = k + (n - 1) = 5 + 4 = 9 \\text{ cycles}$$
- **Load-Use Hazard between $I_1$ and $I_2$:**
  $I_1$ is a memory MOV whose output ($R_0$) is produced at the end of the MEM stage (stage 4). $I_2$ needs $R_0$ at the start of its EX stage (stage 3). Even with operand forwarding from MEM to EX, $I_2$ must wait for $I_1$ to finish MEM, resulting in **1 stall cycle**.
- **$I_3$ (ADD $R_2, R_1$):**
  Uses $R_2$ and $R_1$; no data dependency on $I_2$'s result ($R_0$). Executes smoothly.
- **Load-Use Hazard between $I_4$ and $I_5$:**
  $I_4$ is an indirect memory MOV whose output ($R_3$) is ready at the end of MEM stage (stage 4). $I_5$ requires $R_3$ at the beginning of its EX stage (stage 3). This introduces another **1 stall cycle**.

Total execution cycles:
$$\\text{Total Cycles} = 9 + 1 + 1 = \\mathbf{11 \\text{ cycles}}$$

**Correct Answer: Option 4 (11)**`
  },

  // ─── Q.21 (SCQ) ───
  {
    id: "me-coa-swt-q21",
    difficulty: "easy",
    concept: "Direct Mapping Thrashing and Replacement Policies",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider the following statements:
$S_1$: Direct mapped cache does not need a cache block replacement policy, whereas fully associative cache needs one.
$S_2$: The main advantage of direct mapping is that the cache hit ratio increases drastically if two or more frequently used blocks map into the same region.
Which of the following options is correct?`,
    options: [
      "Only S₁",
      "Both S₁ and S₂",
      "Only S₂",
      "None of these"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
- **Statement $S_1$ is True:** In a direct-mapped cache, every block maps to exactly one predetermined line in the cache ($i = \\text{Block} \\pmod N$). If that line is already filled, it must be evicted—there is no alternative choice. Hence, no replacement policy (LRU, FIFO) is needed. In fully associative caches, a block can go into any line, necessitating an explicit replacement algorithm.
- **Statement $S_2$ is False:** When multiple frequently referenced blocks map to the same set/line in a direct-mapped cache, they repeatedly replace each other, causing **cache thrashing** (conflict misses). This causes the hit ratio to plummet drastically, which is the primary *disadvantage* of direct-mapped caches.

Therefore, only $S_1$ is correct.

**Correct Answer: Option 1 (Only S₁)**`
  },

  // ─── Q.22 (NAT) ───
  {
    id: "me-coa-swt-q22",
    difficulty: "medium",
    concept: "Interrupt Return Address and Variable Instruction Sizes",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    imageUrl: "/images/made_easy/coa_swt_q22.png",
    text: `Consider the following program codes:
- $I_1: \\text{Load } R_1, (R_2)$
- $I_2: \\text{MUL } R_1, R_3$
- $I_3: \\text{SUB } R_3, R_0$
- $I_4: \\text{Load } (R_0), R_3$
- $I_5: \\text{DIV } R_5, R_6$
- $I_6: \\text{SUB } R_2, R_5$
- $I_7: \\text{HALT}$
- $I_8: \\text{ADD } R_2, R_4$
- $I_9: \\text{LOAD } (R_3), R_0$

Assume data transfer instruction size is 40 bits, ALU operation instruction size is 32 bits and branch instruction size is 16 bits. The program starts from location 8000 decimal onwards.
If an interrupt occurs during the execution of $I_7$, the return address pushed onto the stack is:`,
    options: [],
    correctAnswerIndex: -1,
    natAnswer: 8028,
    natTolerance: 0,
    explanation: `### Solution
Convert instruction sizes to bytes:
- Data transfer instructions (40 bits) = $40 / 8 = 5 \\text{ bytes}$
- ALU operation instructions (32 bits) = $32 / 8 = 4 \\text{ bytes}$
- Branch / Control instructions (16 bits) = $16 / 8 = 2 \\text{ bytes}$

Trace instruction memory layout starting at address 8000:
- $I_1$ (Load $\\to$ Data Transfer): Size 5 B $\\implies$ Addresses 8000 to 8004
- $I_2$ (MUL $\\to$ ALU): Size 4 B $\\implies$ Addresses 8005 to 8008
- $I_3$ (SUB $\\to$ ALU): Size 4 B $\\implies$ Addresses 8009 to 8012
- $I_4$ (Load $\\to$ Data Transfer): Size 5 B $\\implies$ Addresses 8013 to 8017
- $I_5$ (DIV $\\to$ ALU): Size 4 B $\\implies$ Addresses 8018 to 8021
- $I_6$ (SUB $\\to$ ALU): Size 4 B $\\implies$ Addresses 8022 to 8025
- $I_7$ (HALT $\\to$ Control/Branch): Size 2 B $\\implies$ Addresses 8026 to 8027
- $I_8$ (ADD $\\to$ ALU): Starts at address **8028**.

When an interrupt occurs during the execution of $I_7$, the processor finishes $I_7$ and pushes the address of the next instruction ($I_8$) onto the stack:
$$\\text{Return Address} = 8000 + 5 + 4 + 4 + 5 + 4 + 4 + 2 = \\mathbf{8028}$$

**Correct Answer: 8028**`
  },

  // ─── Q.23 (SCQ) ───
  {
    id: "me-coa-swt-q23",
    difficulty: "medium",
    concept: "Program Execution Time with Memory References",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/coa_swt_q23.png",
    text: `Consider a 5 GHz clock frequency processor used to execute the following program segment:

| Instruction | Size (in word) | Meaning |
|---|---|---|
| $I_1: \\text{MOV } r_0, @6000$ | 4 | $r_0 \\leftarrow M[[6000]]$ |
| $I_2: \\text{MOV } r_1, [5000]$ | 6 | $r_1 \\leftarrow M[5000]$ |
| $I_3: \\text{ADD } r_0, r_1$ | 3 | $r_0 \\leftarrow r_0 + r_1$ |
| $I_4: \\text{MOV } r_2, @8000$ | 4 | $r_2 \\leftarrow M[[8000]]$ |
| $I_5: \\text{MUL } r_0, r_2$ | 1 | $r_0 \\leftarrow r_0 * r_2$ |

Each memory reference and ALU operation consumes 3 cycles and 1 cycle respectively. The total time required to complete the program execution is:`,
    options: [
      "13.2",
      "14.2",
      "14.6",
      "13.4"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
1. **Instruction Fetch Memory References:**
   Instruction size in words determines fetch references:
   $$\\text{Fetch References} = 4 + 6 + 3 + 4 + 1 = 18 \\text{ references}$$

2. **Operand Memory References:**
   - $I_1$ uses indirect addressing $@6000 \\implies 2$ memory reads.
   - $I_2$ uses direct addressing $[5000] \\implies 1$ memory read.
   - $I_3$ uses register addressing $\\implies 0$ memory reads.
   - $I_4$ uses indirect addressing $@8000 \\implies 2$ memory reads.
   - $I_5$ uses register addressing $\\implies 0$ memory reads.
   $$\\text{Operand References} = 2 + 1 + 0 + 2 + 0 = 5 \\text{ references}$$

3. **Total Memory References & Cycles:**
   $$\\text{Total Memory References} = 18 + 5 = 23$$
   $$\\text{Memory Cycles} = 23 \\times 3 = 69 \\text{ cycles}$$

4. **ALU Operations & Cycles:**
   $I_3$ (ADD) and $I_5$ (MUL) perform 1 ALU operation each $\\implies 2$ operations.
   $$\\text{ALU Cycles} = 2 \\times 1 = 2 \\text{ cycles}$$

5. **Total Execution Time:**
   $$\\text{Total Cycles} = 69 + 2 = 71 \\text{ cycles}$$
   $$\\text{Clock Period} = \\frac{1}{5 \\text{ GHz}} = 0.2 \\text{ ns}$$
   $$\\text{Total Time} = 71 \\times 0.2 \\text{ ns} = \\mathbf{14.2 \\text{ ns}}$$

**Correct Answer: Option 2 (14.2)**`
  },

  // ─── Q.24 (NAT) ───
  {
    id: "me-coa-swt-q24",
    difficulty: "hard",
    concept: "Cycle Stealing DMA CPU Block Percentage",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    text: `Consider a disk drive with the following specifications: 16 surfaces, 128 tracks/surface, 256 sectors/track, 512 B/sector, rotation speed 3600 rpm. The disk is operated in cycle stealing mode whereby whenever a 1-byte word is ready, it is sent to memory. The disk interface transfers a 1-byte word to memory in each DMA cycle. Memory cycle time is $50 \\text{ ns}$. The percentage of time that the CPU gets blocked during DMA operation is ________. (Upto 2 decimal places)`,
    options: [],
    correctAnswerIndex: -1,
    natAnswer: 39.32,
    natTolerance: 0.1,
    explanation: `### Solution
1. **Disk Rotation Rate:**
   $$\\text{Speed} = \\frac{3600 \\text{ rpm}}{60 \\text{ s}} = 60 \\text{ rotations/second}$$
2. **Track Capacity:**
   $$\\text{Track Capacity} = 256 \\text{ sectors} \\times 512 \\text{ bytes/sector} = 131,072 \\text{ bytes}$$
3. **Data Transfer Rate of the Disk ($R$):**
   $$R = 60 \\times 131,072 = 7,864,320 \\text{ bytes/second}$$
4. **Time between consecutive byte transfers ($T_{\\text{prep}}$):**
   $$T_{\\text{prep}} = \\frac{1}{R} = \\frac{1}{7,864,320} \\approx 1.27156 \\times 10^{-7} \\text{ s} = 127.16 \\text{ ns}$$
5. **Percentage CPU Blocked during DMA Cycle Stealing:**
   In cycle stealing mode, during each 1-byte transfer, DMA steals one memory cycle ($50 \\text{ ns}$) from the CPU:
   $$\\% \\text{ CPU Blocked} = \\frac{\\text{Memory Cycle Time}}{T_{\\text{prep}}} \\times 100 = \\frac{50 \\text{ ns}}{127.16 \\text{ ns}} \\times 100 \\approx \\mathbf{39.32\\%}$$

**Correct Answer: 39.32 (Acceptable Range: 39.20 - 39.40)**`
  },

  // ─── Q.25 (SCQ) ───
  {
    id: "me-coa-swt-q25",
    difficulty: "medium",
    concept: "IEEE-754 Single Precision Floating-Point Arithmetic",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider two floating point numbers $X$ and $Y$ stored in registers $RX$ and $RY$ respectively, as per IEEE-754 single precision floating point format. The 32-bit contents stored in these registers (in hexadecimal form) are as follows:
$$RX = \\text{0x41200000}, \\quad RY = \\text{0x41A00000}$$
If the decimal values represented by $X$ and $Y$ are used to compute $(Y - X)$, then which one of the following is correct?`,
    options: [
      "(Y – X) = 5",
      "(Y – X) = 10",
      "(Y – X) = 15",
      "(Y – X) = 20"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
IEEE-754 Single Precision format: 1 sign bit, 8 exponent bits (bias = 127), 23 fraction bits.

1. **Decoding $RX = \\text{0x41200000}$:**
   - Binary: \`0 10000010 01000000000000000000000\`
   - Sign $s = 0$ (positive)
   - Exponent $e = 10000010_2 = 130 \\implies E = 130 - 127 = 3$
   - Mantissa $M = 1.01_2 = 1 + 0.25 = 1.25$
   $$X = 1.25 \\times 2^3 = 1.25 \\times 8 = \\mathbf{10}$$

2. **Decoding $RY = \\text{0x41A00000}$:**
   - Binary: \`0 10000011 01000000000000000000000\`
   - Sign $s = 0$ (positive)
   - Exponent $e = 10000011_2 = 131 \\implies E = 131 - 127 = 4$
   - Mantissa $M = 1.01_2 = 1 + 0.25 = 1.25$
   $$Y = 1.25 \\times 2^4 = 1.25 \\times 16 = \\mathbf{20}$$

3. **Evaluating $Y - X$:**
   $$Y - X = 20 - 10 = \\mathbf{10}$$

**Correct Answer: Option 2 ((Y – X) = 10)**`
  },

  // ─── Q.26 (SCQ) ───
  {
    id: "me-coa-swt-q26",
    difficulty: "medium",
    concept: "Instruction Dependencies Classification",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/coa_swt_q26.png",
    text: `Match List-I (Dependency) with List-II (Instruction) and select the correct answer using the codes given below the lists:

| List-I (Dependency) | List-II (Instruction) |
|---|---|
| A. Procedural dependency | 1. $I_1: R_4 \\leftarrow R_3 + 1$<br>$I_2: R_3 \\leftarrow R_5 + 1$ |
| B. Anti dependency | 2. Add $R_1, R_2$<br>Move $R_3, R_1$ |
| C. True data dependency | 3. If $(a > 0)$<br>&nbsp;&nbsp;$b = c$<br>else<br>&nbsp;&nbsp;$b = e$ |
| D. Output dependency | 4. $I_3: R_3 \\leftarrow R_1 \\text{ OP } R_2$<br>$I_4: R_3 \\leftarrow R_2 + 1$ |`,
    options: [
      "(a) A-4, B-2, C-1, D-3",
      "(b) A-3, B-1, C-2, D-4",
      "(c) A-1, B-4, C-3, D-2",
      "(d) A-2, B-3, C-4, D-1"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **A. Procedural dependency (Control Dependency):** Arises from conditional branch statements deciding the control flow $\\to$ **3**.
- **B. Anti dependency (WAR):** $I_1$ reads $R_3$, and later instruction $I_2$ writes to $R_3$. If $I_2$ writes before $I_1$ reads, $I_1$ gets wrong value $\\to$ **1**.
- **C. True data dependency (RAW):** \`Add R1, R2\` writes to $R_1$, and \`Move R3, R1\` reads $R_1$. The second requires the result produced by the first $\\to$ **2**.
- **D. Output dependency (WAW):** Both instructions ($I_3$ and $I_4$) write to the same destination register $R_3$ $\\to$ **4**.

Matching: **A-3, B-1, C-2, D-4**, which is code **(b)**.

**Correct Answer: Option 2 ((b))**`
  },

  // ─── Q.27 (SCQ) ───
  {
    id: "me-coa-swt-q27",
    difficulty: "medium",
    concept: "Direct-Mapped vs Set-Associative Tag Bits",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/coa_swt_q27.png",
    text: `The system has a 40-bit physical address and an 8 MB cache. It is initially configured as a Direct-Mapped Cache with a block size of 64 bytes. It is then reconfigured into a 16-way Set-Associative Cache with a block size of 256 bytes.
Let $T_1$ be the number of tag bits in the initial configuration, and $T_2$ be the number of tag bits in the new configuration.
Find the values of $T_1$ and $T_2$:`,
    options: [
      "T₁ = 17, T₂ = 17",
      "T₁ = 17, T₂ = 21",
      "T₁ = 21, T₂ = 17",
      "T₁ = 21, T₂ = 21"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Physical Address = 40 bits. Total Cache Size = $8 \\text{ MB} = 2^{23} \\text{ bytes}$.

**Initial Configuration (Direct-Mapped):**
- Block size = $64 \\text{ B} = 2^6 \\text{ B} \\implies$ Block offset = 6 bits.
- Number of lines = $\\frac{2^{23}}{2^6} = 2^{17} \\implies$ Index = 17 bits.
- Tag bits $T_1$:
  $$T_1 = 40 - (17 + 6) = 40 - 23 = \\mathbf{17 \\text{ bits}}$$

**New Configuration (16-way Set-Associative):**
- Block size = $256 \\text{ B} = 2^8 \\text{ B} \\implies$ Block offset = 8 bits.
- Number of lines = $\\frac{2^{23}}{2^8} = 2^{15}$ lines.
- Number of sets = $\\frac{2^{15}}{16} = \\frac{2^{15}}{2^4} = 2^{11} \\implies$ Set index = 11 bits.
- Tag bits $T_2$:
  $$T_2 = 40 - (11 + 8) = 40 - 19 = \\mathbf{21 \\text{ bits}}$$

Hence, $T_1 = 17, \\; T_2 = 21$.

**Correct Answer: Option 2 (T₁ = 17, T₂ = 21)**`
  },

  // ─── Q.28 (MCQ) ───
  {
    id: "me-coa-swt-q28",
    difficulty: "medium",
    concept: "Pipeline Hazards and Branch Handling",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `Which of the following statements is/are correct?`,
    options: [
      "Delayed control transfer involves starting the execution of the instruction after a branch or control instruction regardless of whether the branch is taken.",
      "A way to implement branch prediction is to store the result of a branch condition in a branch target buffer.",
      "If a multi-cycle pipelined processor has 'N' pipeline stages, then structural hazards can be avoided completely if at least 'N' registers are available.",
      "Control hazards in a pipelined processor arise due to branch and control transfer instructions."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    explanation: `### Solution
- **Statement 1 is True:** Delayed branching executes the instruction in the delay slot immediately after the branch regardless of whether the branch is taken.
- **Statement 2 is True:** A Branch Target Buffer (BTB) caches previous target addresses and prediction bits (taken/not taken) to steer instruction fetch.
- **Statement 3 is False:** Structural hazards occur due to hardware resource conflicts (e.g., memory port collisions or single shared ALU). Having 'N' registers does not eliminate memory or ALU structural hazards.
- **Statement 4 is True:** Control hazards occur because of pipelined branch/jump instructions where the target address and outcome are determined later in the pipeline.

Statements 1, 2, and 4 are correct.

**Correct Answer: Options 1, 2, 4**`
  },

  // ─── Q.29 (NAT) ───
  {
    id: "me-coa-swt-q29",
    difficulty: "medium",
    concept: "Pipelining Average Instruction Execution Time",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    imageUrl: "/images/made_easy/coa_swt_q29.png",
    text: `Consider an 8-stage pipeline which allows overlapping of all instructions except memory-based instructions. The penalty for memory-based instructions is 6 cycles. In the program, 30% memory instructions are present, among which 70% are optimized (0 stalls). What is the average instruction execution time? (Assuming the pipeline cycle time is 12 ns)`,
    options: [],
    correctAnswerIndex: -1,
    natAnswer: 18.48,
    natTolerance: 0.1,
    explanation: `### Solution
1. **Fraction of Unoptimized Memory Instructions:**
   $$\\text{Fraction} = 30\\% \\times (1 - 0.70) = 0.30 \\times 0.30 = 0.09 = 9\\%$$
2. **Average CPI:**
   - Ideal CPI = 1 cycle.
   - Stall penalty = 6 cycles for the 9% unoptimized memory instructions.
   $$\\text{CPI}_{\\text{avg}} = 1 + (0.09 \\times 6) = 1 + 0.54 = 1.54 \\text{ cycles}$$
3. **Average Instruction Execution Time:**
   $$\\text{Execution Time} = \\text{CPI}_{\\text{avg}} \\times \\text{Cycle Time} = 1.54 \\times 12 \\text{ ns} = \\mathbf{18.48 \\text{ ns}}$$

**Correct Answer: 18.48 (Acceptable Range: 18.40 - 18.55)**`
  },

  // ─── Q.30 (NAT) ───
  {
    id: "me-coa-swt-q30",
    difficulty: "hard",
    concept: "Two-Level Cache AMAT Calculation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    text: `A cache memory is organized into 2 level caches L1 and L2. The miss counts for L1 cache and L2 cache are 40 and 16 respectively for 1000 memory references. The hit times of L1 and L2 are 8 and 14 clock cycles respectively. The penalty for L2 cache miss to main memory is 120 clock cycles. The average memory access time will be ________ clock cycles. (Upto 2 decimal places)`,
    options: [],
    correctAnswerIndex: -1,
    natAnswer: 10.48,
    natTolerance: 0.05,
    explanation: `### Solution
From the given data:
- Number of memory references = 1000
- L1 Misses = 40 $\\implies$ L1 miss rate $M_1 = \\frac{40}{1000} = 0.04$
- L2 Misses = 16 $\\implies$ Global L2 miss rate $M_{2,\\text{global}} = \\frac{16}{1000} = 0.016$
- Hit times: $T_{L1} = 8$ cycles, $T_{L2} = 14$ cycles
- Main memory miss penalty: $T_{\\text{MM}} = 120$ cycles

**Average Memory Access Time (AMAT):**
$$\\text{AMAT} = T_{L1} + M_1 \\times T_{L2} + M_{2,\\text{global}} \\times T_{\\text{MM}}$$
$$\\text{AMAT} = 8 + (0.04 \\times 14) + (0.016 \\times 120)$$
$$\\text{AMAT} = 8 + 0.56 + 1.92 = \\mathbf{10.48 \\text{ clock cycles}}$$

**Correct Answer: 10.48 (Acceptable Range: 10.45 - 10.50)**`
  },

  // ─── Q.31 (SCQ) ───
  {
    id: "me-coa-swt-q31",
    difficulty: "medium",
    concept: "Direct-Mapped Cache Reference Simulation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Consider a direct mapped cache of 2 KB organized into 512-byte blocks. The following main memory blocks are referred to by the CPU during program execution:
$$3, 8, 7, 2, 1, 4, 3, 5, 4, 3, 7, 4, 8$$
Which of the following statements are true?
I. Number of compulsory misses are 7.
II. Hit ratio of program is 0.23.
III. Number of conflict misses are 3.
IV. Block 2 is not replaced by any other block in the cache.`,
    options: [
      "I and II are false",
      "I and III are true",
      "I, II and III are false",
      "All are true"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
- Number of cache lines $= \\frac{2048 \\text{ B}}{512 \\text{ B}} = 4$ lines (Lines 0, 1, 2, 3).
- Mapping function: $\\text{Line} = \\text{Block} \\pmod 4$.

Trace references: \`3, 8, 7, 2, 1, 4, 3, 5, 4, 3, 7, 4, 8\` (13 references)
- **Distinct blocks referenced:** $\\{1, 2, 3, 4, 5, 7, 8\\} \\implies 7$ distinct blocks. Each distinct block incurs exactly one cold/compulsory miss $\\implies$ **Compulsory misses = 7 (Statement I is True)**.

Step-by-step cache simulation:
1. Block 3 (mod 4 = 3): Line 3 $\\to$ Miss (Compulsory 1). Cache: [-, -, -, 3]
2. Block 8 (mod 4 = 0): Line 0 $\\to$ Miss (Compulsory 2). Cache: [8, -, -, 3]
3. Block 7 (mod 4 = 3): Line 3 $\\to$ Miss (Compulsory 3, replaces 3). Cache: [8, -, -, 7]
4. Block 2 (mod 4 = 2): Line 2 $\\to$ Miss (Compulsory 4). Cache: [8, -, 2, 7]
5. Block 1 (mod 4 = 1): Line 1 $\\to$ Miss (Compulsory 5). Cache: [8, 1, 2, 7]
6. Block 4 (mod 4 = 0): Line 0 $\\to$ Miss (Compulsory 6, replaces 8). Cache: [4, 1, 2, 7]
7. Block 3 (mod 4 = 3): Line 3 $\\to$ Miss (Conflict 1, replaces 7). Cache: [4, 1, 2, 3]
8. Block 5 (mod 4 = 1): Line 1 $\\to$ Miss (Compulsory 7, replaces 1). Cache: [4, 5, 2, 3]
9. Block 4 (mod 4 = 0): Line 0 $\\to$ **HIT 1**. Cache: [4, 5, 2, 3]
10. Block 3 (mod 4 = 3): Line 3 $\\to$ **HIT 2**. Cache: [4, 5, 2, 3]
11. Block 7 (mod 4 = 3): Line 3 $\\to$ Miss (Conflict 2, replaces 3). Cache: [4, 5, 2, 7]
12. Block 4 (mod 4 = 0): Line 0 $\\to$ **HIT 3**. Cache: [4, 5, 2, 7]
13. Block 8 (mod 4 = 0): Line 0 $\\to$ Miss (Conflict 3, replaces 4). Cache: [8, 5, 2, 7]

**Results:**
- Total hits = 3. Hit ratio = $3 / 13 \\approx 0.2307 \\approx \\mathbf{0.23}$ (Statement II is True).
- Conflict misses = Total misses (10) - Compulsory misses (7) = **3** (Statement III is True).
- Block 2 is mapped to Line 2. No other block maps to Line 2, so Block 2 is never replaced (Statement IV is True).

All statements I, II, III, and IV are true!

**Correct Answer: Option 4 (All are true)**`
  },

  // ─── Q.32 (NAT) ───
  {
    id: "me-coa-swt-q032",
    difficulty: "medium",
    concept: "Pipeline Speedup with Latch Delay",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    text: `A non-pipelined processor has 5 stages with delays of 140 ns, 190 ns, 160 ns, 210 ns, and 170 ns, respectively. A 5-stage instruction pipeline is constructed using these stages. The delay of each pipeline latch is 15 ns. Assume no branch penalties or data hazards.
The speedup achieved for executing 1000 instructions is ________. (Upto two decimal places)`,
    options: [],
    correctAnswerIndex: -1,
    natAnswer: 3.85,
    natTolerance: 0.05,
    explanation: `### Solution
1. **Non-pipelined Execution Time:**
   $$T_{\\text{cycle, non-pipe}} = 140 + 190 + 160 + 210 + 170 = 870 \\text{ ns}$$
   $$T_{\\text{total, non-pipe}} = 1000 \\times 870 \\text{ ns} = 870,000 \\text{ ns}$$

2. **Pipelined Execution Time:**
   - Clock cycle time $\\tau = \\max(\\text{stage delays}) + \\text{latch delay}$:
     $$\\tau = 210 + 15 = 225 \\text{ ns}$$
   - Clock cycles for $n = 1000$ instructions in a $k = 5$ stage pipeline:
     $$\\text{Cycles} = k + (n - 1) = 5 + 999 = 1004 \\text{ cycles}$$
   - Total pipelined time:
     $$T_{\\text{total, pipe}} = 1004 \\times 225 \\text{ ns} = 225,900 \\text{ ns}$$

3. **Speedup:**
   $$\\text{Speedup} = \\frac{T_{\\text{total, non-pipe}}}{T_{\\text{total, pipe}}} = \\frac{870,000}{225,900} \\approx \\mathbf{3.851} \\approx \\mathbf{3.85}$$

**Correct Answer: 3.85 (Acceptable Range: 3.83 - 3.87)**`
  },

  // ─── Q.33 (MCQ) ───
  {
    id: "me-coa-swt-q033",
    difficulty: "medium",
    concept: "2's Complement Signed Integer Arithmetic Overflow",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `Consider the 8-bit signed integers $A, B$ and $C$ represented using 2's complement representation.
The binary representations of $A$ and $B$ are given below:
$$A: 01110110_2, \\quad B: 10101101_2$$
Which of the following operations to compute $C$ result(s) in an arithmetic overflow?`,
    options: [
      "C = A + B",
      "C = A – B",
      "C = –A + B",
      "C = –A – B"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
For 8-bit 2's complement integers, the valid range is $[-128, +127]$.

Convert $A$ and $B$ to decimal:
- $A = 01110110_2 = + (64 + 32 + 16 + 4 + 2) = \\mathbf{+118}$
- $B = 10101101_2$:
  Sign bit is 1 (negative). Take 2's complement: $\\sim B + 1 = 01010010 + 1 = 01010011_2 = 83 \\implies B = \\mathbf{-83}$.

Evaluate each operation:
1. **$C = A + B$:**
   $$C = 118 + (-83) = +35 \\in [-128, 127] \\implies \\text{No Overflow}$$
2. **$C = A - B$:**
   $$C = 118 - (-83) = 118 + 83 = \\mathbf{+201} > 127 \\implies \\mathbf{Overflow!}$$
3. **$C = -A + B$:**
   $$C = -118 + (-83) = \\mathbf{-201} < -128 \\implies \\mathbf{Overflow!}$$
4. **$C = -A - B$:**
   $$C = -118 - (-83) = -118 + 83 = -35 \\in [-128, 127] \\implies \\text{No Overflow}$$

Arithmetic overflow occurs in **$C = A - B$** and **$C = -A + B$**.

**Correct Answer: Options 2 and 3**`
  }
];

export const MADE_EASY_COA_SWT_CHAPTER: Chapter = {
  id: "coa-gate-2027-swt",
  name: "GATE 2027 CS SUBJECT TEST - Computer Organization & Architecture",
  description: "Made Easy GATE 2027 Subject Test: Addressing Modes, Microprogramming, Memory Hierarchy, Pipelining, Hazards, I/O & DMA, Number Systems (33 Questions)",
  questions: MADE_EASY_COA_SWT_QUESTIONS
};
