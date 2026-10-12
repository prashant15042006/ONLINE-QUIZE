import type { Question, Chapter } from "./quizData";

export const MADE_EASY_OS_TWT14_QUESTIONS: Question[] = [
  // ─── Q.1 (MCQ / MSQ) ───
  {
    id: "me-os-twt14-q01",
    difficulty: "medium",
    concept: "Interrupts & Process State Transitions",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements are correct about interrupts and process state transitions?`,
    options: [
      "An I/O interrupts causes the currently running process to move to the ready state.",
      "A timer interrupt can move a process from running to ready state.",
      "Interrupt handling involves saving the current processes context in its PCB.",
      "An interrupt transfer control from user mode to Kernel mode for execution of interrupt handler."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2, 3],
    explanation: `### Solution
- **Statement 1:** An I/O interrupt primarily signals completion of I/O for a blocked process, moving *that* blocked process from Waiting to Ready. The currently running process may either continue or be preempted if the unblocked process has higher priority.
- **Statement 2:** A timer interrupt (clock tick) in preemptive multitasking (e.g., Round Robin) preempts the currently running process and moves it from **Running to Ready state**. (**Correct ✓**)
- **Statement 3:** During interrupt servicing, the CPU hardware and OS save the registers, program counter, and context into the Process Control Block (PCB) or kernel stack so execution can resume seamlessly. (**Correct ✓**)
- **Statement 4:** An interrupt automatically forces a transition from **User mode to Kernel mode** to allow the Interrupt Service Routine (ISR) to execute with kernel privileges. (**Correct ✓**)`
  },

  // ─── Q.2 (MCQ / MSQ) ───
  {
    id: "me-os-twt14-q02",
    difficulty: "medium",
    concept: "User-Level Threads vs Kernel-Level Threads",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements is/are true regarding user level threads and Kernel threads?`,
    options: [
      "Every user level thread always maps to a separate schedulable entity at the Kernel.",
      "Multiple user level threads can be multiplexed on the same Kernel thread.",
      "It is necessary for threads in a process to have separate stack to run independently.",
      "It is necessary for threads in a process to have separate copies of the program executable."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
- **Statement 1:** In Many-to-One and Many-to-Many thread models, user-level threads do NOT map 1:1 to separate kernel entities. Only the One-to-One model does. (**Incorrect ✗**)
- **Statement 2:** In Many-to-One and Many-to-Many models, multiple user-level threads are multiplexed onto one or more kernel threads. (**Correct ✓**)
- **Statement 3:** Each thread executes independent function calls, so each thread **must have its own private stack and register state**. (**Correct ✓**)
- **Statement 4:** All threads in a process share the same code segment, data segment, and executable file in memory; they do NOT maintain separate copies. (**Incorrect ✗**)`
  },

  // ─── Q.3 (NAT) ───
  {
    id: "me-os-twt14-q03",
    difficulty: "hard",
    concept: "Counting Semaphores & Deadlock Analysis",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 7,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt14_q03.png",
    imageAlt: "Three concurrent processes with semaphores A=5, B=2",
    text: `Let A and B be two semaphore variable and they are initialized with 5 and 2 respectively. Consider following three concurrent processes:
- Process 1: \`while(1) { P(A); print("GATE"); V(B); }\`
- Process 2: \`while(1) { P(B); print("MADE EASY"); V(B); }\`
- Process 3: \`while(1) { P(B); print("MADE EASY"); }\`

What is the minimum number of times ‘MADE EASY’ is printed by the executed of above processes? ________`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Initial Semaphores:**
   $$A = 5, \\quad B = 2$$

2. **Analyzing the Semaphores:**
   - **Process 1:** Can execute at most $5$ times because $A = 5$ initially and there is no $V(A)$ anywhere. Each execution produces one signal on $B$: $V(B)$.
   - Thus, total units of $B$ ever made available:
     $$\\text{Total } B = B_{\\text{initial}} + 5 \\times V(B) = 2 + 5 = 7$$
   - **Process 2:** Performs $P(B)$ and then $V(B)$ (preserves the net count of $B$).
   - **Process 3:** Performs $P(B)$ without $V(B)$ (permanently consumes one unit of $B$).

3. **Condition for Total Deadlock:**
   For all processes to be blocked (system deadlocked):
   - $A$ must become $0$ (requires Process 1 to run $5$ times).
   - $B$ must become $0$ (requires Process 3 to consume all $7$ units of $B$).
   - Each time Process 3 runs, it prints **"MADE EASY"**.
   - If Process 2 executes 0 times, Process 3 will execute exactly $7$ times, consuming all $7$ tokens of $B$.
   - Hence, the minimum number of times "MADE EASY" is printed before the system deadlocks is **7**.`
  },

  // ─── Q.4 (NAT) ───
  {
    id: "me-os-twt14-q04",
    difficulty: "hard",
    concept: "LRTF CPU Scheduling",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 13.5,
    natTolerance: 0.1,
    imageUrl: "/images/made_easy/twt14_q04.png",
    imageAlt: "LRTF scheduling job table with P0, P1, P2, P3",
    text: `Consider a system uses LRTF scheduling with the following jobs to execute with one processor, where ties are broken with highest process id has highest priority:
- P0: Arrival Time = 5, Burst Time = 2
- P1: Arrival Time = 2, Burst Time = 5
- P2: Arrival Time = 0, Burst Time = 6
- P3: Arrival Time = 1, Burst Time = 4

The average turn around time will be __________ ms. (Upto 1 decimal places)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Tie breaking: $P_3 > P_2 > P_1 > P_0$.

**Timeline Analysis (LRTF):**
- $t=0$: Only $P_2$ arrived (rem: 6). $P_2$ runs.
- $t=1$: $P_2$ (rem: 5), $P_3$ (rem: 4). $P_2$ continues.
- $t=2$: $P_2$ (rem: 4), $P_3$ (rem: 4), $P_1$ (rem: 5). $P_1$ has highest remaining time (5). $P_1$ runs.
- $t=3$: $P_1$ (4), $P_2$ (4), $P_3$ (4). Tie $\\implies P_3$ runs ($t=3$ to $4$).
- $t=4$: $P_1$ (4), $P_2$ (4), $P_3$ (3). Tie between $P_2, P_1 \\implies P_2$ runs ($t=4$ to $5$).
- $t=5$: $P_0$ arrives (2). Remaining: $P_1$ (4), $P_2$ (3), $P_3$ (3), $P_0$ (2). $P_1$ runs ($t=5$ to $6$).
- $t=6$: $P_1$ (3), $P_2$ (3), $P_3$ (3), $P_0$ (2). Tie among $P_3, P_2, P_1 \\implies P_3$ runs ($t=6$ to $7$).
- $t=7$: $P_2$ (3), $P_1$ (3), $P_3$ (2), $P_0$ (2). Tie between $P_2, P_1 \\implies P_2$ runs ($t=7$ to $8$).
- $t=8$: $P_1$ (3), $P_2$ (2), $P_3$ (2), $P_0$ (2) $\\implies P_1$ runs ($t=8$ to $9$).
- $t=9$: All four have remaining time 2. Priority: $P_3 > P_2 > P_1 > P_0$:
  - $t=9$ to $10$: $P_3$ runs (rem: 1)
  - $t=10$ to $11$: $P_2$ runs (rem: 1)
  - $t=11$ to $12$: $P_1$ runs (rem: 1)
  - $t=12$ to $13$: $P_0$ runs (rem: 1)
- $t=13$: All four have remaining time 1. Priority: $P_3 > P_2 > P_1 > P_0$:
  - $t=13$ to $14$: $P_3$ finishes (CT = 14)
  - $t=14$ to $15$: $P_2$ finishes (CT = 15)
  - $t=15$ to $16$: $P_1$ finishes (CT = 16)
  - $t=16$ to $17$: $P_0$ finishes (CT = 17)

**Turnaround Times (TAT = CT − AT):**
- $P_0$: $17 - 5 = 12\\text{ ms}$
- $P_1$: $16 - 2 = 14\\text{ ms}$
- $P_2$: $15 - 0 = 15\\text{ ms}$
- $P_3$: $14 - 1 = 13\\text{ ms}$

$$\\text{Average TAT} = \\frac{12 + 14 + 15 + 13}{4} = \\frac{54}{4} = \\mathbf{13.5\\text{ ms}}$$`
  },

  // ─── Q.5 (MCQ / MSQ) ───
  {
    id: "me-os-twt14-q05",
    difficulty: "medium",
    concept: "Preemptive SRTF Scheduling",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt14_q05.png",
    imageAlt: "Preemptive SRTF scheduling table with P1 to P5",
    text: `Consider the following processes, with arrival time and the length of the CPU burst time given in milliseconds:
- P1: Arrival = 1, Burst = 9
- P2: Arrival = 2, Burst = 5
- P3: Arrival = 4, Burst = 3
- P4: Arrival = 6, Burst = 7
- P5: Arrival = 8, Burst = 1

Using preemptive Shortest Remaining Time First (SRTF) scheduling.
Which of the following statements are correct?`,
    options: [
      "Average turnaround times is 10.",
      "Average waiting time is 5.",
      "Response time of process P4 is 11.",
      "Response time of process P4 is 5."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    explanation: `### Solution
**Gantt Chart Execution:**
- $0-1$: Idle
- $1-2$: $P_1$ runs (rem: 8)
- $2-7$: $P_2$ runs to completion (CT = 7)
- $7-8$: $P_3$ runs (rem: 2)
- $8-9$: $P_5$ arrives (rem: 1), preempts $P_3$, runs to completion (CT = 9)
- $9-11$: $P_3$ runs to completion (CT = 11)
- $11-18$: $P_4$ gets CPU for first time at $t=11$, finishes at $t=18$ (CT = 18)
- $18-26$: $P_1$ finishes (CT = 26)

**Process Metrics:**
- $P_1$: TAT $= 26 - 1 = 25$, WT $= 25 - 9 = 16$
- $P_2$: TAT $= 7 - 2 = 5$, WT $= 5 - 5 = 0$
- $P_3$: TAT $= 11 - 4 = 7$, WT $= 7 - 3 = 4$
- $P_4$: TAT $= 18 - 6 = 12$, WT $= 12 - 7 = 5$, Response Time $= 11 - 6 = 5$
- $P_5$: TAT $= 9 - 8 = 1$, WT $= 1 - 1 = 0$

**Averages:**
- $\\text{Avg TAT} = \\frac{25 + 5 + 7 + 12 + 1}{5} = \\frac{50}{5} = \\mathbf{10}$ (**Statement 1 is True ✓**)
- $\\text{Avg WT} = \\frac{16 + 0 + 4 + 5 + 0}{5} = \\frac{25}{5} = \\mathbf{5}$ (**Statement 2 is True ✓**)
- Response Time of $P_4 = 11 - 6 = \\mathbf{5}$ (**Statement 4 is True ✓**, Statement 3 is False)`
  },

  // ─── Q.6 (NAT) ───
  {
    id: "me-os-twt14-q06",
    difficulty: "medium",
    concept: "Round Robin Scheduling",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 13.75,
    natTolerance: 0.1,
    imageUrl: "/images/made_easy/twt14_q06.png",
    imageAlt: "Round Robin job table with P0 to P3 and quantum 4 ms",
    text: `Consider the set of processes with arrival time (in ms), CPU burst time (in ms) shown below:
- P0: Arrival = 3, Burst = 3
- P1: Arrival = 0, Burst = 7
- P2: Arrival = 2, Burst = 5
- P3: Arrival = 5, Burst = 6

Above process executed on a CPU with Round Robin Scheduling with time quantum 4 ms. Average turn around time for above execution is ________ ms.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Time quantum $= 4\\text{ ms}$.

**Queue & Execution Trace:**
- $t=0$: $P_1$ arrives. Ready queue: $[P_1]$.
- $0-4$: $P_1$ runs for 4 ms (rem: 3). During this: $P_2$ arrives at 2, $P_0$ arrives at 3.
  - At $t=4$, $P_1$ preempted to tail. Ready Queue: $[P_2, P_0, P_1]$.
- $4-8$: $P_2$ runs for 4 ms (rem: 1). During this: $P_3$ arrives at 5.
  - At $t=8$, $P_2$ preempted to tail. Ready Queue: $[P_0, P_1, P_3, P_2]$.
- $8-11$: $P_0$ runs for 3 ms (rem: 0). **$P_0$ finishes at $t=11$**. Queue: $[P_1, P_3, P_2]$.
- $11-14$: $P_1$ runs for 3 ms (rem: 0). **$P_1$ finishes at $t=14$**. Queue: $[P_3, P_2]$.
- $14-18$: $P_3$ runs for 4 ms (rem: 2). Queue: $[P_2, P_3]$.
- $18-19$: $P_2$ runs for 1 ms (rem: 0). **$P_2$ finishes at $t=19$**. Queue: $[P_3]$.
- $19-21$: $P_3$ runs for 2 ms (rem: 0). **$P_3$ finishes at $t=21$**.

**Turnaround Times:**
- $P_0$: $11 - 3 = 8\\text{ ms}$
- $P_1$: $14 - 0 = 14\\text{ ms}$
- $P_2$: $19 - 2 = 17\\text{ ms}$
- $P_3$: $21 - 5 = 16\\text{ ms}$

$$\\text{Average TAT} = \\frac{8 + 14 + 17 + 16}{4} = \\frac{55}{4} = \\mathbf{13.75\\text{ ms}}$$`
  },

  // ─── Q.7 (SCQ) ───
  {
    id: "me-os-twt14-q07",
    difficulty: "hard",
    concept: "Preemptive Priority Scheduling",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt14_q07.png",
    imageAlt: "Priority scheduling table: lower number indicates higher priority",
    text: `Consider the following table of Arrival time, Burst time and Priority for six processes P0, P1, P2, P3, P4, P5:
- P0: Arrival = 0, Burst = 4, Priority = 8
- P1: Arrival = 1, Burst = 6, Priority = 6
- P2: Arrival = 2, Burst = 7, Priority = 9 (lowest)
- P3: Arrival = 3, Burst = 3, Priority = 2 (highest)
- P4: Arrival = 3, Burst = 8, Priority = 4
- P5: Arrival = 4, Burst = 4, Priority = 4

The preemptive priority scheduling algorithm is used. The waiting time for processes P0, P1 and P3 is respectively.`,
    options: [
      "(22, 18, 3)",
      "(21, 15, 0)",
      "(22, 18, 0)",
      "(22, 15, 3)"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Lower number indicates higher priority ($2$ highest, $9$ lowest).

**Gantt Chart Trace:**
- $t=0$: $P_0$ starts (prio 8).
- $t=1$: $P_1$ arrives (prio 6 < 8). Preempts $P_0$ (rem: 3). $P_1$ runs.
- $t=2$: $P_2$ arrives (prio 9 > 6). $P_1$ continues.
- $t=3$: $P_3$ (prio 2) and $P_4$ (prio 4) arrive. $P_3$ has priority 2 < 6 $\implies P_1$ preempted (rem: 4).
- $t=3$ to $6$: $P_3$ has the highest priority in the system; executes to completion! **$P_3$ finishes at $t=6$**.
  $$\\text{Waiting Time of } P_3 = (6 - 3) - 3 = \\mathbf{0}$$
- $t=6$ to $14$: Next highest priority is priority 4 ($P_4$ and $P_5$). $P_4$ arrived earlier, executes 8 ms and finishes at $t=14$.
- $t=14$ to $18$: $P_5$ executes 4 ms and finishes at $t=18$.
- $t=18$ to $22$: Next is $P_1$ (prio 6, rem: 4). Executes 4 ms and **finishes at $t=22$**.
  $$\\text{Waiting Time of } P_1 = (22 - 1) - 6 = 21 - 6 = \\mathbf{15}$$
- $t=22$ to $25$: Next is $P_0$ (prio 8, rem: 3). Executes 3 ms and **finishes at $t=25$**.
  $$\\text{Waiting Time of } P_0 = (25 - 0) - 4 = 25 - 4 = \\mathbf{21}$$

Hence, the waiting times are **(21, 15, 0)**.`
  },

  // ─── Q.8 (SCQ) ───
  {
    id: "me-os-twt14-q08",
    difficulty: "medium",
    concept: "Critical Section Properties (ME & Progress)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt14_q08.png",
    imageAlt: "Process synchronization code for P1 and P2 with boolean variables S1 and S2",
    text: `Consider the methods used by processes P1 and P2 for accessing their critical sections whenever needed, as given below. The initial values of shared Boolean variables S1 and S2 are randomly assigned:
- Method used by P1:
  \`while (S1 == S2);\`
  \`critical section\`
  \`S1 = S2;\`
- Method used by P2:
  \`while (S1 != S2);\`
  \`critical section\`
  \`S2 = not (S1);\`

Which one of the following statements describes the properties achieved?`,
    options: [
      "Mutual exclusion but not progress.",
      "Progress but not mutual exclusion.",
      "Neither mutual exclusion nor progress",
      "Both mutual exclusion and progress"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
1. **Mutual Exclusion:**
   - $P_1$ enters its critical section only when $S_1 \\neq S_2$.
   - $P_2$ enters its critical section only when $S_1 == S_2$.
   - Since $S_1 == S_2$ and $S_1 \\neq S_2$ cannot both be true simultaneously, both processes cannot be in their critical sections together.
   - **Mutual Exclusion is satisfied. ✓**

2. **Progress:**
   - Notice that execution strictly alternates:
     - After $P_1$ leaves, it sets $S_1 = S_2$, which blocks $P_1$ and allows only $P_2$.
     - If $P_1$ wishes to re-enter the critical section while $P_2$ is in its remainder section (not interested in entering), $P_1$ remains blocked waiting for $P_2$ to enter and toggle $S_2$.
   - Since an uninterested process can block an interested process, **Progress is violated. ✗**

Therefore, the protocol achieves **Mutual exclusion but not progress**.`
  },

  // ─── Q.9 (MCQ / MSQ) ───
  {
    id: "me-os-twt14-q09",
    difficulty: "easy",
    concept: "Types of Schedulers (Long, Medium, Short Term)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following is true with respect to scheduler?`,
    options: [
      "Mid term schedular increase degree of multiprogramming.",
      "Short term schedular control degree of multiprogramming.",
      "Short term scheduler uses CPU scheduling algorithm.",
      "Long term schedular should select good combination of I/O bound and CPU bound process."
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2, 3],
    explanation: `### Solution
- **Statement 1:** Mid-term scheduler swaps processes out to disk, thereby *decreasing* the degree of multiprogramming when memory is overloaded. (**False**)
- **Statement 2:** The *Long-term scheduler* (job scheduler) controls the degree of multiprogramming, not the short-term scheduler. (**False**)
- **Statement 3:** The short-term scheduler (CPU scheduler) selects from among the ready processes and allocates the CPU using scheduling algorithms (FCFS, SJF, RR, Priority). (**True ✓**)
- **Statement 4:** The long-term scheduler must select a balanced mix of CPU-bound and I/O-bound processes to ensure both the CPU and I/O devices remain optimally utilized. (**True ✓**)`
  },

  // ─── Q.10 (SCQ) ───
  {
    id: "me-os-twt14-q09b",
    difficulty: "easy",
    concept: "Fork System Call Process Creation",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt14_q10.png",
    imageAlt: "C program with two fork calls followed by printf MADE EASY",
    text: `How many times the following C program prints MADE EASY?
\`\`\`c
main() {
    fork();
    fork();
    printf("MADE EASY");
}
\`\`\``,
    options: [
      "Only once",
      "Twice",
      "Four times",
      "Eight times"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
- Each \`fork()\` call duplicates the calling process.
- For $n$ consecutive \`fork()\` calls:
  $$\\text{Total processes} = 2^n$$
- Here $n = 2$, so total processes $= 2^2 = 4$.
- Each of the 4 processes executes \`printf("MADE EASY");\` once.
- Hence, it prints **Four times**.`
  },

  // ─── Q.11 (NAT) ───
  {
    id: "me-os-twt14-q11",
    difficulty: "medium",
    concept: "Round Robin Average Turnaround Time",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 15.75,
    natTolerance: 0.1,
    imageUrl: "/images/made_easy/twt14_q11.png",
    imageAlt: "Round Robin table with P1 to P4 arriving at time 0 with burst times 8, 7, 2, 4",
    text: `Consider the following set of processes, assumed to have arrival time at time 0, consider the CPU scheduling algorithm Round-Robin (RR). For RR, assumed that the processes are scheduled in the order P1, P2, P3, P4:
- P1: Burst Time = 8
- P2: Burst Time = 7
- P3: Burst Time = 2
- P4: Burst Time = 4

If the time quantum for RR 4 ns, find the average TAT (upto 2 decimal) ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Arrival time for all is $0$. Scheduling order: $P_1, P_2, P_3, P_4$. Time quantum $= 4\\text{ ns}$.

**Gantt Chart Execution:**
- $0-4$: $P_1$ runs (rem: 4). Queue: $[P_2, P_3, P_4, P_1]$
- $4-8$: $P_2$ runs (rem: 3). Queue: $[P_3, P_4, P_1, P_2]$
- $8-10$: $P_3$ runs for 2 ns (rem: 0). **$P_3$ finishes at $t=10$**. Queue: $[P_4, P_1, P_2]$
- $10-14$: $P_4$ runs for 4 ns (rem: 0). **$P_4$ finishes at $t=14$**. Queue: $[P_1, P_2]$
- $14-18$: $P_1$ runs for 4 ns (rem: 0). **$P_1$ finishes at $t=18$**. Queue: $[P_2]$
- $18-21$: $P_2$ runs for 3 ns (rem: 0). **$P_2$ finishes at $t=21$**.

**Turnaround Times:**
- $P_1$: $18 - 0 = 18\\text{ ns}$
- $P_2$: $21 - 0 = 21\\text{ ns}$
- $P_3$: $10 - 0 = 10\\text{ ns}$
- $P_4$: $14 - 0 = 14\\text{ ns}$

$$\\text{Average TAT} = \\frac{18 + 21 + 10 + 14}{4} = \\frac{63}{4} = \\mathbf{15.75\\text{ ns}}$$`
  },

  // ─── Q.12 (SCQ) ───
  {
    id: "me-os-twt14-q12",
    difficulty: "easy",
    concept: "Starvation in CPU Scheduling Algorithms",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt14_q12.png",
    imageAlt: "Statements S1 and S2 regarding starvation in PLJF and Priority scheduling",
    text: `Consider the following statements:
S1 : Preemptive longest job first scheduling suffer from starvation.
S2 : Preemptive priority scheduling suffer from starvation.
Which of the above are correct?`,
    options: [
      "Only S1",
      "Only S2",
      "Both S1 and S2",
      "Neither S1 nor S2"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
- **S1 (True):** In Preemptive Longest Job First (LRTF), shorter jobs can indefinitely wait (starve) if new jobs with larger burst times continually arrive in the system.
- **S2 (True):** In Preemptive Priority scheduling, lower-priority processes can suffer indefinite blocking (starvation) if higher-priority processes keep arriving.

Therefore, **Both S1 and S2** are correct.`
  },

  // ─── Q.13 (NAT) ───
  {
    id: "me-os-twt14-q13",
    difficulty: "easy",
    concept: "Counting Semaphore Value Arithmetic",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 23,
    natTolerance: 0,
    text: `Suppose at a particular time of computation the value of counting semaphore is 27. Then 20P operations and x V operations were completed on this semaphore. If the new value of semaphore is 30, x will be ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
- Initial value of semaphore $= 27$
- Each $P$ operation (Wait) decrements the semaphore by 1 $\\implies 20 \\times (-1) = -20$
- Each $V$ operation (Signal) increments the semaphore by 1 $\\implies x \\times (+1) = +x$
- New value $= 30$

$$\\text{New Value} = \\text{Initial} - 20 + x$$
$$30 = 27 - 20 + x$$
$$30 = 7 + x \\implies x = 30 - 7 = \\mathbf{23}$$`
  },

  // ─── Q.14 (NAT) ───
  {
    id: "me-os-twt14-q14",
    difficulty: "medium",
    concept: "SRTF Context Switches Counting",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 5,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt14_q14.png",
    imageAlt: "Job table with Process 1 to 4: Arrival times 0, 3, 4, 6 and burst times 9, 5, 3, 1",
    text: `Consider the four processes and their arrival time and burst time:
- Process 1: Arrival = 0, Burst = 9
- Process 2: Arrival = 3, Burst = 5
- Process 3: Arrival = 4, Burst = 3
- Process 4: Arrival = 6, Burst = 1

Total number of context switches using SRTF scheduling algorithm ________?
(Note: Do not consider at time 0 and end as context switches)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**SRTF Execution Trace:**
- $t=0$: Process 1 starts (rem: 9).
- $t=3$: Process 2 arrives (rem: 5). Process 1 has rem 6. Since $5 < 6$, Process 1 is preempted by Process 2.
  $\\implies$ **Context Switch 1** ($P_1 \\to P_2$) at $t=3$.
- $t=4$: Process 3 arrives (rem: 3). Process 2 has rem 4. Since $3 < 4$, Process 2 is preempted by Process 3.
  $\\implies$ **Context Switch 2** ($P_2 \\to P_3$) at $t=4$.
- $t=6$: Process 4 arrives (rem: 1). Process 3 has remaining time $3 - 2 = 1$. Since remaining times are equal, running process $P_3$ continues (no preemption).
- $t=7$: Process 3 finishes (rem: 0). Scheduler picks Process 4 (rem: 1).
  $\\implies$ **Context Switch 3** ($P_3 \\to P_4$) at $t=7$.
- $t=8$: Process 4 finishes (rem: 0). Scheduler picks Process 2 (rem: 4).
  $\\implies$ **Context Switch 4** ($P_4 \\to P_2$) at $t=8$.
- $t=12$: Process 2 finishes (rem: 0). Scheduler picks Process 1 (rem: 6).
  $\\implies$ **Context Switch 5** ($P_2 \\to P_1$) at $t=12$.
- $t=18$: Process 1 finishes.

Excluding start ($t=0$) and finish ($t=18$), the total number of context switches is **5**.`
  },

  // ─── Q.15 (SCQ) ───
  {
    id: "me-os-twt14-q15",
    difficulty: "easy",
    concept: "Thread Memory Sharing & IPC",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Which of the following statements is correct?`,
    options: [
      "Every thread belonging to a process shares a common stack.",
      "Kernel-level threads do not require a system call for context switching.",
      "In a multi-threaded environment, if one thread crashes due to segmentation fault, it will only terminate that specific thread while others continue to run.",
      "Thread within the same process can communicate with each other without using inter-processcommunication (IPC) mechanism."
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
- **Option 1 (False):** Each thread has its own private stack for tracking function invocations and local variables.
- **Option 2 (False):** Context switching among kernel threads is managed by the OS kernel, requiring privilege/mode transitions.
- **Option 3 (False):** Threads share the same address space. A segmentation fault signal (SIGSEGV) is sent to the process, terminating the entire process.
- **Option 4 (True):** Because threads share the address space (data, heap, global variables), they can communicate directly via shared memory variables without needing formal IPC mechanisms (pipes, message queues, sockets).`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-os-twt14-q16",
    difficulty: "medium",
    concept: "Scheduling Algorithms Starvation Susceptibility",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Which of the following scheduling algorithms may cause starvation?
S1 : Multilevel queue scheduling.
S2 : Highest response ratio next.
S3 : Shortest remaining time first.
S4 : Pre-emptive algorithm.`,
    options: [
      "S1 and S3 only",
      "S1, S2 and S3",
      "S1, S3 and S4",
      "S2 and S4 only"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
- **S1 (Starvation possible):** In Multilevel Queue scheduling without aging, processes in lower-priority queues can starve indefinitely if higher-priority queues remain occupied.
- **S2 (No starvation):** In Highest Response Ratio Next (HRRN), response ratio $= \\frac{W + S}{S}$. As waiting time $W$ grows, the priority increases, strictly preventing starvation.
- **S3 (Starvation possible):** In SRTF, long processes starve if shorter processes continuously enter the ready queue.
- **S4 (Starvation possible):** Preemptive priority scheduling can preempt and starve lower-priority tasks indefinitely.

Thus, **S1, S3 and S4** may cause starvation.`
  },

  // ─── Q.17 (SCQ) ───
  {
    id: "me-os-twt14-q17",
    difficulty: "medium",
    concept: "Equivalence of Scheduling Algorithms",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `A non-preemptive scheduling algorithm assigns to each process Pi such that its priority is directly proportional to its waiting Wi. All processes {P1, P2, P3, ..... Pn} arrive at the ready queue at time T = 0. Once a process is selected, it runs to completion.
Which of the following scheduling algorithm is thus behaviour equivalent to?`,
    options: [
      "Shortest Job First",
      "Round Robin",
      "First Come First Serve",
      "Shortest Remaining Time First"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
- All processes arrive at the same time ($T = 0$).
- Because the algorithm is **non-preemptive**, once a process is scheduled, it runs to completion.
- Since priority is proportional to waiting time $W_i$, as time passes, the waiting time of all waiting processes grows equally, preserving their initial queue order.
- Each process runs to completion in the exact order of their arrival in the ready queue.
- This is the exact behavioral definition of **First Come First Serve (FCFS)**.`
  }
];

export const MADE_EASY_OS_TWT14_CHAPTER: Chapter = {
  id: "os-gate-2027-twt-14",
  name: "GATE 2027 CS TOPIC WISE TEST - 14 (Operating Systems)",
  description: "CPU Scheduling (LRTF, SRTF, RR, Priority), Process Synchronization, Threads & Interrupts",
  questions: MADE_EASY_OS_TWT14_QUESTIONS,
};
