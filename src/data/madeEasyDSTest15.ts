import type { Question, Chapter } from "./quizData";

export const MADE_EASY_DS_TWT15_QUESTIONS: Question[] = [
  // ─── Q.1 (NAT) ───
  {
    id: "me-ds-twt15-q01",
    difficulty: "medium",
    concept: "C Recursion & Pointer Side-Effects",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 3,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt15_q01.png",
    imageAlt: "Recursive C function fun(n, f_p) with pointer mutation",
    text: `Consider the following program:
\`\`\`c
#include <stdio.h>
int fun(int n, int *f_p)
{
    int t, f;
    if (n <= 1)
    {
        *f_p = 1;
        return 1;
    }
    t = fun(n - 1, f_p);
    f = ++ *f_p;
    *f_p = t;
    return ( f );
}
int main()
{
    int x = 15;
    printf("%d", fun(4, &x));
    return 0;
}
\`\`\`

What will be the output printed by the above program?`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us trace the execution of the recursive function call \`fun(4, &x)\` step-by-step:

1. **Recursion unwinds down to base case:**
   - \`fun(4)\` calls \`fun(3)\`
   - \`fun(3)\` calls \`fun(2)\`
   - \`fun(2)\` calls \`fun(1)\`

2. **Base case:**
   - In \`fun(1, f_p)\`: $n = 1 \\le 1$
   - \`*f_p = 1\` (sets $x = 1$)
   - returns $1$.

3. **Returning to \`fun(2, f_p)\`:**
   - $t = 1$
   - $f = ++(*f\\_p)$: since $*f\\_p = 1$, incrementing yields $*f\\_p = 2$, so $f = 2$.
   - $*f\\_p = t = 1$ (sets $x = 1$).
   - returns $f = 2$.

4. **Returning to \`fun(3, f_p)\`:**
   - $t = 2$ (returned by \`fun(2)\`)
   - $f = ++(*f\\_p)$: since $*f\\_p = 1$, incrementing yields $*f\\_p = 2$, so $f = 2$.
   - $*f\\_p = t = 2$ (sets $x = 2$).
   - returns $f = 2$.

5. **Returning to \`fun(4, f_p)\`:**
   - $t = 2$ (returned by \`fun(3)\`)
   - $f = ++(*f\\_p)$: since $*f\\_p = 2$, incrementing yields $*f\\_p = 3$, so $f = 3$.
   - $*f\\_p = t = 2$ (sets $x = 2$).
   - returns $f = 3$.

Thus, \`printf\` outputs **3**.`
  },

  // ─── Q.2 (MSQ) ───
  {
    id: "me-ds-twt15-q02",
    difficulty: "medium",
    concept: "Circular Queue Implementation using Array",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt15_q02.png",
    imageAlt: "Circular queue typedef struct and IsEmpty / IsFull functions",
    text: `A queue of integers is implemented using a circular array:
\`\`\`c
#define SIZE 10
typedef struct {
    int data[SIZE];
    int front, rear;
} Queue;

Initially:
    q -> front = q -> rear = -1

int IsEmpty(Queue *q)
{
    // line X
}

int IsFull(Queue *q)
{
    // line Y
}
\`\`\`

Which of the following is/are correct?`,
    options: [
      "Line X: return q -> front == -1;",
      "Line X: return q -> rear == -1;",
      "Line Y: return ((q -> rear + 1) % SIZE == q -> front);",
      "Line Y: return q -> rear == SIZE - 1;"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
1. **Empty Condition (Line X):**
   - Initially both \`front\` and \`rear\` are set to $-1$.
   - Whenever the circular queue becomes empty (e.g., after dequeuing the last element), both pointers are reset to $-1$.
   - Hence, testing either \`q->front == -1\` or \`q->rear == -1\` accurately determines whether the queue is empty.
   - Therefore, **Option 1** and **Option 2** are both correct.

2. **Full Condition (Line Y):**
   - In a circular queue of fixed size \`SIZE\`, the next position of the rear pointer is \`(q->rear + 1) % SIZE\`.
   - If that next position coincides with \`q->front\`, the queue has no available slot and is full:
     \`\`\`c
     return ((q->rear + 1) % SIZE == q->front);
     \`\`\`
   - Line Y in Option 3 is the standard correct circular queue full condition.
   - Option 4 (\`q->rear == SIZE - 1\`) is only for a linear queue, not a circular queue where elements can wrap around.

Hence, **Options 1, 2, and 3** are correct.`
  },

  // ─── Q.3 (NAT) ───
  {
    id: "me-ds-twt15-q03",
    difficulty: "medium",
    concept: "Lower Triangular Matrix Address Calculation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 7272,
    natTolerance: 0,
    text: `Consider a system which uses lower triangular matrix implementation. Let $M$ be a lower triangular matrix of size $100 \\times 100$ and it uses row-major order. First element of $M$ is $M[0][0]$ and last element is $M[99][99]$. Address of first element is 2000 in decimal and size of each element of matrix is 4 bytes. What is the address of element $M[50][43]$ of matrix $M$?`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Understanding Lower Triangular Matrix in Row-Major Order (0-indexed):**
   - Row 0 contains $1$ element: $M[0][0]$
   - Row 1 contains $2$ elements: $M[1][0], M[1][1]$
   - Row 2 contains $3$ elements: $M[2][0], M[2][1], M[2][2]$
   - ...
   - Row $i-1$ contains $i$ elements.

2. **Count elements preceding row 50 (rows 0 through 49):**
   $$\\text{Count}_{\\text{rows 0..49}} = 1 + 2 + 3 + \\dots + 50 = \\frac{50 \\times (50 + 1)}{2} = \\frac{50 \\times 51}{2} = 1275$$

3. **Count elements in row 50 before column index 43:**
   - In row 50, elements are stored from $M[50][0]$ to $M[50][42]$.
   - That gives exactly **43** elements preceding $M[50][43]$ in row 50.

4. **Total elements preceding $M[50][43]$:**
   $$\\text{Total preceding elements} = 1275 + 43 = 1318$$

5. **Address Calculation:**
   $$\\text{Address}(M[50][43]) = \\text{Base Address} + (\\text{Preceding Elements} \\times \\text{Element Size})$$
   $$\\text{Address} = 2000 + (1318 \\times 4) = 2000 + 5272 = \\mathbf{7272}$$`
  },

  // ─── Q.4 (SCQ) ───
  {
    id: "me-ds-twt15-q04",
    difficulty: "medium",
    concept: "Static Variables & Extern Declarations in C",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q04.png",
    imageAlt: "C program with extern a, b and static variable in fun()",
    text: `Consider the following C program:
\`\`\`c
#include <stdio.h>
extern int a;
extern int b;
int fun()
{
    static int i = 10;
    i++;
    return a * b + i;
}
int main()
{
    int x = fun();
    printf("%d", x);
    return 0;
}
int a = 5;
int b = 6;
\`\`\`

Which of the following is correct for above program?`,
    options: [
      "Output of the program is 41.",
      "Output of program is 11.",
      "Memory allocated to variable i is in activation record of function 'fun'.",
      "None of the above"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Variable Scope and Storage Class:**
   - \`extern int a;\` and \`extern int b;\` inform the compiler that \`a\` and \`b\` are defined elsewhere (here, defined globally below \`main\` as \`int a = 5;\` and \`int b = 6;\`).
   - \`static int i = 10;\` inside \`fun()\` is allocated in the **Data Segment**, NOT on the stack / activation record of function \`fun()\`. Hence option 3 is false.

2. **Function Execution:**
   - When \`fun()\` is called:
     - \`i++\` increments \`i\` from 10 to 11.
     - \`return a * b + i;\` computes:
       $$a \\times b + i = 5 \\times 6 + 11 = 30 + 11 = 41$$

3. **Output:**
   - \`x = fun()\` receives $41$.
   - \`printf("%d", x)\` prints **41**.

Therefore, **Option 1** is correct.`
  },

  // ─── Q.5 (MSQ) ───
  {
    id: "me-ds-twt15-q05",
    difficulty: "hard",
    concept: "Dynamic Memory Management & Memory Leaks",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    imageUrl: "/images/made_easy/twt15_q05.png",
    imageAlt: "Four programs testing malloc, free, and pointer misuse",
    text: `Assuming that malloc is successful in each of these, select all options which are likely to create problems with memory i.e. runtime error or memory leak.

**Program 1:**
\`\`\`c
int *p = malloc(sizeof(int));
*p = 0;
free(p);
*p = 0;
\`\`\`

**Program 2:**
\`\`\`c
int *p = malloc(sizeof(int));
*p = 0;
free(p);
p = 0;
\`\`\`

**Program 3:**
\`\`\`c
int *p = malloc(3 * sizeof(int));
*p = 0;
p++;
free(p);
\`\`\`

**Program 4:**
\`\`\`c
int *p = malloc(sizeof(char));
*p = 0;
\`\`\``,
    options: [
      "Program 1",
      "Program 4",
      "Program 3",
      "Program 2"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution
- **Program 1:**
  - After \`free(p)\`, \`p\` becomes a dangling pointer.
  - The subsequent assignment \`*p = 0;\` dereferences already-freed memory (**Use-After-Free**), causing undefined behavior or a runtime crash. ⚠️

- **Program 2:**
  - After \`free(p)\`, \`p = 0;\` sets the pointer to \`NULL\`. This is standard safe practice to prevent dangling pointer access. No error or leak occurs. ✅

- **Program 3:**
  - \`p\` is incremented (\`p++\`).
  - \`free(p)\` passes a pointer that does NOT point to the start of the allocated memory block returned by \`malloc\`. Calling \`free()\` on an interior pointer causes undefined behavior (heap corruption / runtime abort). ⚠️

- **Program 4:**
  - \`malloc(sizeof(char))\` allocates only 1 byte.
  - However, \`p\` is of type \`int *\`, so \`*p = 0;\` attempts to write \`sizeof(int)\` (typically 4 bytes) into a 1-byte buffer, leading to a **heap buffer overflow**. Furthermore, the memory is never freed (**memory leak**). ⚠️

Thus, **Program 1, Program 4, and Program 3** (Options 1, 2, and 3) cause problems.`
  },

  // ─── Q.6 (SCQ) ───
  {
    id: "me-ds-twt15-q06",
    difficulty: "medium",
    concept: "Circular Queue using Singly Linked List with Single Rear Pointer",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `A circular queue is implemented using a singly linked list where each node contains a data field and a single pointer to the next node. To maximize memory efficiency, only one external pointer, \`PTR\`, is maintained. In this setup, \`PTR\` points to the last node (\`REAR\`) inserted into the queue.

Which of the following operations can be completed in $O(1)$ time?
I. Insertion (enqueue) of a new element
II. Deletion (dequeue) of an element without maintaining the queue's circular structure
III. Deletion (dequeue) of an element while maintaining the queue's circular structure`,
    options: [
      "I and III only",
      "I only",
      "I and II only",
      "I, II and III"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
When \`PTR\` points to the **REAR** node in a circular singly linked list:
- **FRONT** is directly reachable as \`PTR->next\` in $O(1)$ time!

1. **Operation I (Enqueue / Insertion):**
   - Create new node \`newNode\`.
   - \`newNode->next = PTR->next\` (points to FRONT).
   - \`PTR->next = newNode\`.
   - \`PTR = newNode\` (update REAR).
   - Time Complexity: **$O(1)$**.

2. **Operation III (Dequeue / Deletion maintaining circularity):**
   - The node to delete is FRONT, which is \`PTR->next\`.
   - \`temp = PTR->next;\`
   - \`PTR->next = temp->next;\`
   - \`free(temp);\`
   - Time Complexity: **$O(1)$**.

Hence, both **I and III** can be executed in $O(1)$ time.`
  },

  // ─── Q.7 (SCQ) ───
  {
    id: "me-ds-twt15-q07",
    difficulty: "easy",
    concept: "In-place String Reversal in C",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q07.png",
    imageAlt: "C function magic(char *str) reversing string",
    text: `What will be the output of the following C program?
\`\`\`c
#include <stdio.h>
#include <string.h>
void magic (char *str)
{
    int len = strlen (str);
    for (int i = 0; i < len / 2; i++)
    {
        char temp = str[i];
        str[i] = str[len - i - 1];
        str[len - i - 1] = temp;
    }
}
int main( )
{
    char str[ ] = "GATE 2026";
    magic (str);
    printf("%s\\n", str);
    return 0;
}
\`\`\``,
    options: [
      "GATE 2026",
      "2026 GATE",
      "ETAG 6202",
      "6202 ETAG"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
The function \`magic(char *str)\` iterates from index $i = 0$ to $i < \\text{len}/2$ and swaps \`str[i]\` with \`str[len - i - 1]\`.
This is the standard algorithm for **in-place string reversal**.

- Original string: \`"GATE 2026"\` (length = 9: indices 0 to 8)
- After reversal: \`"6202 ETAG"\`

Thus, \`printf\` outputs **6202 ETAG** (Option 4).`
  },

  // ─── Q.8 (SCQ) ───
  {
    id: "me-ds-twt15-q08",
    difficulty: "medium",
    concept: "Stack and Queue Manipulation Sequence",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q08.png",
    imageAlt: "Code manipulating stack S and queue Q",
    text: `Consider a stack $S$ and a queue $Q$. Initially, $S$ contains the elements $[10, 20, 30, 40]$ such that 10 is at the bottom and 40 is at the top. $Q$ is initially empty. The following code fragment is executed:
\`\`\`c
for (i = 1; i <= 3; i++) {
    enqueue(Q, pop(S));
}
for (i = 1; i <= 2; i++) {
    push(S, dequeue(Q));
}
enqueue(Q, pop(S));
while (!isEmpty(Q)) {
    push(S, dequeue(Q));
}
\`\`\`

After the execution of the above operations, the elements in the stack $S$ from bottom to top are:`,
    options: [
      "10, 20, 40, 30",
      "10, 30, 20, 40",
      "10, 40, 20, 30",
      "10, 30, 40, 20"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Initial state:
- Stack $S = [10, 20, 30, 40]$ (bottom: 10, top: 40).
- Queue $Q = []$ (empty).

1. **First loop (\`i = 1 to 3\`): Pop 3 elements from $S$ and enqueue into $Q$:**
   - $i=1$: pop $40 \\implies Q = [40]$, $S = [10, 20, 30]$
   - $i=2$: pop $30 \\implies Q = [40, 30]$, $S = [10, 20]$
   - $i=3$: pop $20 \\implies Q = [40, 30, 20]$ (Front: 40, Rear: 20), $S = [10]$

2. **Second loop (\`i = 1 to 2\`): Dequeue 2 elements from $Q$ and push into $S$:**
   - $i=1$: dequeue $40 \\implies$ push to $S: S = [10, 40]$, $Q = [30, 20]$
   - $i=2$: dequeue $30 \\implies$ push to $S: S = [10, 40, 30]$, $Q = [20]$

3. **\`enqueue(Q, pop(S))\`:**
   - pop from $S \\implies 30$. Now $S = [10, 40]$.
   - enqueue $30$ to $Q \\implies Q = [20, 30]$ (Front: 20, Rear: 30).

4. **\`while (!isEmpty(Q)) push(S, dequeue(Q))\`:**
   - Dequeue $20 \\implies$ push to $S: S = [10, 40, 20]$
   - Dequeue $30 \\implies$ push to $S: S = [10, 40, 20, 30]$
   - $Q$ is now empty.

Final Stack $S$ from bottom to top:
$$\\mathbf{10, 40, 20, 30}$$ (Option 3).`
  },

  // ─── Q.9 (SCQ) ───
  {
    id: "me-ds-twt15-q09",
    difficulty: "medium",
    concept: "Pointer to Array in C",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q09.png",
    imageAlt: "C program with 2D array and int (*ptr)[3]",
    text: `Consider the following program:
\`\`\`c
#include <stdio.h>
int main( )
{
    int a[ ][3] = {1, 2, 3, 4, 5, 6};
    int (*ptr) [3] = a;
    printf("%d %d", (* ptr) [1], (* ptr) [2]);
    ++ ptr;
    printf("%d, %d\\n", (*ptr) [1], (*ptr) [2]);
    return 0;
}
\`\`\``,
    options: [
      "2 3 5 6",
      "2 3 4 5",
      "4 5 0 0",
      "None of the above"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Array Declaration:**
   - \`int a[][3] = {1, 2, 3, 4, 5, 6};\`
   - Row 0: \`{1, 2, 3}\` (\`a[0][0]=1, a[0][1]=2, a[0][2]=3\`)
   - Row 1: \`{4, 5, 6}\` (\`a[1][0]=4, a[1][1]=5, a[1][2]=6\`)

2. **Pointer to Array:**
   - \`int (*ptr)[3] = a;\`
   - \`ptr\` points to an array of 3 integers (initially Row 0).
   - \`(*ptr)[1]\` is \`a[0][1] = 2\`
   - \`(*ptr)[2]\` is \`a[0][2] = 3\`
   - First \`printf\` outputs: \`2 3\`

3. **Pointer Arithmetic:**
   - \`++ptr;\` advances \`ptr\` by \`sizeof(int[3])\` (moves pointer to Row 1).
   - Now \`(*ptr)[1]\` is \`a[1][1] = 5\`
   - \`(*ptr)[2]\` is \`a[1][2] = 6\`
   - Second \`printf\` outputs: \`5 6\`

Combined output: **2 3 5 6** (Option 1).`
  },

  // ─── Q.10 (SCQ) ───
  {
    id: "me-ds-twt15-q10",
    difficulty: "easy",
    concept: "Reversing Queue using Stack",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q10.png",
    imageAlt: "shift(Q) algorithm transferring between queue and stack",
    text: `Consider the following function:
\`\`\`c
shift (Q)
{
    while (! Q. isEmpty ( ))
        S. push (Q. dequeue ( ));
    while (! S. isEmpty ( ))
        Q.enqueue (S. pop ( ));
}
\`\`\`
Assume $S$ is stack which is initially empty and $Q$ is queue which contain $n$ elements. The functions:
(1) \`isEmpty()\` returns true if stack/queue is empty otherwise returns false.
(2) \`Push()\` and \`Pop()\` functions are standard stack operations.
(3) \`enqueue()\` and \`dequeue()\` are queue operations.

What will be the contents of $Q$ after execution of \`shift(Q)\`? (Assume $S$ and $Q$ are global variables)`,
    options: [
      "No change to the contents of Q",
      "Q will be empty (No element in the queue)",
      "Q will be reversed (All elements are in the reverse order)",
      "None of these"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
1. **First loop:**
   - Elements are removed from the queue $Q$ in FIFO order and pushed onto the stack $S$.
   - The first element of $Q$ becomes the bottom of $S$, and the last element of $Q$ becomes the top of $S$.

2. **Second loop:**
   - Elements are popped from $S$ in LIFO order and enqueued back into $Q$.
   - The top of $S$ (last element of original $Q$) becomes the first element enqueued into $Q$.

3. **Result:**
   - The order of all elements in queue $Q$ is completely **reversed**.

Therefore, **Option 3** is correct.`
  },

  // ─── Q.11 (NAT) ───
  {
    id: "me-ds-twt15-q11",
    difficulty: "medium",
    concept: "Postfix Expression Evaluation Stack Depth",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 3,
    natTolerance: 1,
    text: `Consider the following postfix expression:
\`5, 3, 2, *, +, 12, 4, /, -\`

What is the maximum number of symbols on the stack during the evaluation of the above expression using standard stack algorithm? ________`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us trace the stack contents at each step of evaluation:

| Step | Token | Operation | Stack (Bottom $\\to$ Top) | Stack Size |
|:---:|:---:|:---|:---|:---:|
| 1 | \`5\` | Push 5 | \`[5]\` | 1 |
| 2 | \`3\` | Push 3 | \`[5, 3]\` | 2 |
| 3 | \`2\` | Push 2 | \`[5, 3, 2]\` | **3** (Max) |
| 4 | \`*\` | Pop 2, Pop 3; compute $3 \\times 2 = 6$; Push 6 | \`[5, 6]\` | 2 |
| 5 | \`+\` | Pop 6, Pop 5; compute $5 + 6 = 11$; Push 11 | \`[11]\` | 1 |
| 6 | \`12\` | Push 12 | \`[11, 12]\` | 2 |
| 7 | \`4\` | Push 4 | \`[11, 12, 4]\` | **3** (Max) |
| 8 | \`/\` | Pop 4, Pop 12; compute $12 / 4 = 3$; Push 3 | \`[11, 3]\` | 2 |
| 9 | \`-\` | Pop 3, Pop 11; compute $11 - 3 = 8$; Push 8 | \`[8]\` | 1 |

The maximum number of operands / symbols present on the stack at any point during evaluation is **3**.`
  },

  // ─── Q.12 (SCQ) ───
  {
    id: "me-ds-twt15-q12",
    difficulty: "medium",
    concept: "Pointer Arithmetic & Pre-decrement in C",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q12.png",
    imageAlt: "C program with pointer arithmetic and dereferencing",
    text: `What is the output of the below C code?
\`\`\`c
#include <stdio.h>
int main( ) {
    int a[ ] = {10, 20, 30, 40};
    int *p = a + 1;
    int *q = a + 3;
    int x = *(p + 1);
    int y = *(--q);
    printf("%d, %d", (int)(q - p), x + y);
    return 0;
}
\`\`\``,
    options: [
      "(4, 60)",
      "(1, 30)",
      "(2, 30)",
      "(1, 60)"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
1. **Initial Pointers:**
   - \`a\` points to \`a[0]\` (10).
   - \`p = a + 1\` points to \`a[1]\` (20).
   - \`q = a + 3\` points to \`a[3]\` (40).

2. **Calculations:**
   - \`x = *(p + 1)\`: \`p + 1\` is \`a + 2\`, so $x = a[2] = 30$.
   - \`y = *(--q)\`: pre-decrement \`--q\` moves \`q\` from \`a + 3\` to \`a + 2\`.
     Then dereferencing yields $y = a[2] = 30$.

3. **Pointer Difference & Sum:**
   - \`q\` is now at \`a + 2\`.
   - \`p\` is at \`a + 1\`.
   - \`q - p\` is the number of elements between pointers: $(a + 2) - (a + 1) = 1$.
   - $x + y = 30 + 30 = 60$.

4. **Output:**
   - Prints \`1, 60\`, which matches format **(1, 60)** (Option 4).`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-ds-twt15-q13",
    difficulty: "medium",
    concept: "Pre-decrement, Post-increment & Nested Function Calls in C",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q13.png",
    imageAlt: "C program with nested fun calls and prefix/postfix operators",
    text: `Consider the following program:
\`\`\`c
#include <stdio.h>
int fun (int);
int main( )
{
    int i = 12, x = 8, z = --x + i++;
    i = fun(i = fun (i = fun (i)));
    printf("%d, %d", i, z);
    return 0;
}
int fun(int i)
{
    i++;
    return(i);
}
\`\`\`

What will be the output of the above program?`,
    options: [
      "16, 19",
      "15, 19",
      "16, 20",
      "15, 20"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **Evaluation of \`z = --x + i++;\`:**
   - \`--x\`: pre-decrement changes $x$ from 8 to 7, and returns 7.
   - \`i++\`: post-increment uses current value $12$ in expression, then increments $i$ to $13$.
   - $z = 7 + 12 = 19$.
   - After this line: $i = 13$, $x = 7$, $z = 19$.

2. **Evaluation of nested \`fun()\` calls:**
   - \`fun(int i)\` receives $i$ by value, increments it, and returns $i + 1$.
   - Innermost call: \`i = fun(13)\` $\\implies fun(13) = 14$, so $i$ becomes 14.
   - Middle call: \`i = fun(14)\` $\\implies fun(14) = 15$, so $i$ becomes 15.
   - Outermost call: \`i = fun(15)\` $\\implies fun(15) = 16$, so $i$ becomes 16.

3. **Output:**
   - \`printf("%d, %d", i, z);\` outputs **16, 19**.`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-ds-twt15-q14",
    difficulty: "easy",
    concept: "Multi-dimensional Array Pointer Equivalence",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q14.png",
    imageAlt: "Multi-dimensional array a[x][y][z] pointer equivalence question",
    text: `A multi-dimensional array \`a[x][y][z]\` is same as:`,
    options: [
      "*(* (* (a + x) + y) + z)",
      "*(* (* (a + z) + y) + x)",
      "*(* (* (a + x + y)) + z)",
      "None of these"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
By definition of array subscripting in C:
$$\\text{arr}[i] \\equiv *(\\text{arr} + i)$$

Applying this rule level by level:
1. $a[x] \\equiv *(a + x)$
2. $a[x][y] \\equiv *(a[x] + y) \\equiv *(*(a + x) + y)$
3. $a[x][y][z] \\equiv *(a[x][y] + z) \\equiv *(*(*(a + x) + y) + z)$

Therefore, **Option 1** is correct.`
  },

  // ─── Q.15 (SCQ) ───
  {
    id: "me-ds-twt15-q15",
    difficulty: "medium",
    concept: "Modulo Loop Termination Condition",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q15.png",
    imageAlt: "Loop computing a mod b with unsigned integers",
    text: `A program fragment using unsigned integers \`a\`, \`b\` and \`m\` is:
\`\`\`c
m = a;
while (m >= b) {
    m = m - b;
}
\`\`\`
This loop is intended to compute \`a mod b\`.
1. The loop terminates.
2. The final value of \`m\` equals \`a mod b\`.

Which of the following condition is correct?`,
    options: [
      "(m == 0) && (b > 0)",
      "(m == a) && (b > 0)",
      "(m == a) && (b == 0)",
      "(m == b) && (a > 0)"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- At the start of the fragment, $m = a$.
- For the loop \`while (m >= b)\` to terminate, each iteration must strictly decrease $m$ towards zero.
- If $b = 0$, $m \\ge 0$ is always true for unsigned integers, leading to an **infinite loop** ($m - 0 = m$).
- Moreover, division or modulo by zero is mathematically undefined.
- Hence, $b$ must be strictly greater than 0 ($b > 0$).
- When $b > 0$ and initially $m = a$, repeated subtraction of $b$ from $m$ terminates when $m < b$, leaving $m = a \\pmod b$.

Therefore, the necessary and sufficient initial condition is **$(m == a) \\ \\&\\&\\ (b > 0)$** (Option 2).`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-ds-twt15-q16",
    difficulty: "easy",
    concept: "Memory Allocation Types & Variable Lifetimes",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q16.png",
    imageAlt: "Match List-I with List-II: Static, Stack, and Heap allocation",
    text: `Match List-I with List-II and select the correct answer using the codes given below the lists:

**List-I:**
A. Static allocation
B. Stack allocation
C. Heap allocation

**List-II:**
1. Dynamic data structure
2. Non-static local variable
3. Global variable

**Codes:**
(a) A-1, B-2, C-3
(b) A-2, B-3, C-1
(c) A-3, B-2, C-1
(d) None of these`,
    options: [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let us match each allocation mechanism with its corresponding variable / data type:

- **A. Static allocation:**
  - Global variables (and static variables) have fixed addresses determined before runtime and persist for the entire program execution.
  - $\\implies$ **A matches 3 (Global variable)**.

- **B. Stack allocation:**
  - Non-static local (automatic) variables are allocated in the activation records on the call stack when their function is called and deallocated upon return.
  - $\\implies$ **B matches 2 (Non-static local variable)**.

- **C. Heap allocation:**
  - Dynamic data structures (such as linked lists, binary trees, graphs created via \`malloc\`/\`calloc\`) are allocated on the runtime heap.
  - $\\implies$ **C matches 1 (Dynamic data structure)**.

Hence, the correct matching is **A - 3, B - 2, C - 1**, which corresponds to code **(c)** (Option 3).`
  },

  // ─── Q.17 (SCQ) ───
  {
    id: "me-ds-twt15-q17",
    difficulty: "medium",
    concept: "Short-Circuit Operator Evaluation & Precedence in C",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt15_q17.png",
    imageAlt: "C program with short-circuit logic: ++a || b-- && c++",
    text: `Consider the following C program:
\`\`\`c
#include <stdio.h>
int main() {
    int a = 0, b = 2, c = 1, x, y;
    x = ++a || b-- && c++;
    if (x)
        y = a + b + c++;
    else
        y = a * b * c;
    printf("%d, %d\\n", x, y);
    return 0;
}
\`\`\`

What is the output of the above code?`,
    options: [
      "(1, 3)",
      "(2, 2)",
      "(1, 4)",
      "(2, 3)"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
1. **Operator Precedence & Grouping:**
   - Logical AND (\`&&\`) has higher precedence than logical OR (\`||\`).
   - The expression is grouped as:
     \`\`\`c
     x = (++a) || (b-- && c++);
     \`\`\`

2. **Short-Circuit Evaluation:**
   - In C, \`||\` evaluates its left operand first.
   - \`++a\`: $a$ is incremented from 0 to 1, and the expression evaluates to $1$ (true / non-zero).
   - Because the left operand of \`||\` is true, **short-circuit evaluation occurs**: the entire right operand \`(b-- && c++)\` is **NOT evaluated at all**!
   - Therefore:
     - $b$ remains **2**.
     - $c$ remains **1**.
     - $x$ becomes **1** (result of logical OR).

3. **Condition \`if (x)\`:**
   - Since $x = 1$ is true, the \`if\` branch executes:
     \`\`\`c
     y = a + b + c++;
     \`\`\`
   - Current values: $a = 1$, $b = 2$, $c = 1$.
   - \`c++\` provides its current value $1$ for the expression, then increments $c$ to 2:
     $$y = 1 + 2 + 1 = 4$$

4. **Output:**
   - \`printf("%d, %d\\n", x, y);\` prints **1, 4** (Option 3).`
  }
];

export const MADE_EASY_DS_TWT15_CHAPTER: Chapter = {
  id: "ds-gate-2027-twt-15",
  name: "GATE 2027 CS TOPIC WISE TEST - 15 (Programming & Data Structures)",
  description: "Official Made Easy GATE 2027 Test Series Test 15: C Pointers, Recursion, Memory Allocation, Stacks, Queues, Matrix Indexing, Operator Precedence",
  questions: MADE_EASY_DS_TWT15_QUESTIONS
};
