import type { Question, Chapter } from "./quizData";

export const MADE_EASY_DS_TWT16_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-ds-twt16-q01",
    difficulty: "medium",
    concept: "BST Labeling & Properties",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt16_q01.png",
    imageAlt: "Binary tree shape with 7 nodes, node x labeled in left subtree",
    text: `Label the following binary tree with numbers from the set {6, 22, 9, 14, 13, 1, 8} so that it is a legal Binary Search Tree. (Choose the numbers in any order).

Find the number of correct statements from the following:
- **S₁:** Sum of the leaf nodes is 31.
- **S₂:** Root of the obtained binary search tree is 13.
- **S₃:** Node x is 6.`,
    options: ["3", "2", "1", "0"],
    correctAnswerIndex: 1,
    explanation: `### Solution
**Building the BST:**

The tree shape from the figure (7 nodes):
\`\`\`
        Root
       /    \\
      L      R
     / \\      \\
   LL   x      RR
        /
       xL
\`\`\`

The sorted set is: $1, 6, 8, 9, 13, 14, 22$.

Inorder traversal (Left → Root → Right) maps to sorted order:
| Node | Inorder Position | Value |
|:---:|:---:|:---:|
| LL | 1st | **1** |
| L | 2nd | **6** |
| xL | 3rd | **8** |
| x | 4th | **9** |
| Root | 5th | **13** |
| R | 6th | **14** |
| RR | 7th | **22** |

**Checking statements:**
- **S₁:** Leaf nodes are LL=1, xL=8, RR=22. Sum $= 1 + 8 + 22 = 31$. ✅ **TRUE**
- **S₂:** Root = 13. ✅ **TRUE**
- **S₃:** Node x = 9, not 6. ❌ **FALSE**

**2 statements are correct.** → **Option 2**.`
  },

  // ─── Q.2 (MSQ) ───
  {
    id: "me-ds-twt16-q02",
    difficulty: "easy",
    concept: "BST Properties & Traversal",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following statements is/are correct?`,
    options: [
      "In a Binary Search Tree (BST), if a node Y has a right subtree, then its inorder successor is the smallest node in the right subtree of Y.",
      "In a balanced Binary Search Tree, the height of the tree is O(log n), where n is the number of nodes.",
      "In a Binary Search Tree with n distinct elements, searching for an element takes O(n) time in the worst case.",
      "In a Binary Search Tree, the inorder predecessor of a node is always the largest node in its left subtree."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2],
    explanation: `### Solution

**Statement 1:** ✅ **TRUE** — The inorder successor of a node Y (which has a right subtree) is the **leftmost (minimum) node** in Y's right subtree. This is the standard BST inorder-successor algorithm.

**Statement 2:** ✅ **TRUE** — A balanced BST (e.g., AVL, Red-Black) maintains height $O(\\log n)$ by enforcing a balance condition after every insertion or deletion.

**Statement 3:** ✅ **TRUE** — In the worst case (a completely skewed/degenerate BST that resembles a linked list), every search must traverse all $n$ nodes, giving $O(n)$ time.

**Statement 4:** ❌ **FALSE** — The statement uses the word **"always"**, which is incorrect. The inorder predecessor of a node N is:
- If N has a **left subtree**: the largest (rightmost) node in that left subtree. ✅
- If N has **no left subtree**: the first ancestor through which we took a right child path. ❌

Since "always" does not account for nodes without a left subtree, **statement 4 is FALSE**.

**Correct statements: 1, 2, and 3.**`
  },

  // ─── Q.3 (SCQ) ───
  {
    id: "me-ds-twt16-q03",
    difficulty: "easy",
    concept: "Linked List Reversal",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt16_q03.png",
    imageAlt: "C function reverse() for singly linked list with missing final statement",
    text: `The following function \`reverse()\` is supposed to reverse a singly linked list. There is one line missing at the end of the function:
\`\`\`c
/* Link list node */
struct node {
    int data;
    struct node* next;
};
/* head_ref is a double pointer which points to head (or start) pointer of linked list */
static void reverse(struct node** head_ref)
{
    struct node* prev = NULL;
    struct node* current = *head_ref;
    struct node* next;
    while (current != NULL)
    {
        next = current -> next;
        current -> next = prev;
        prev = current;
        current = next;
    }
    /* ADD A STATEMENT HERE */
}
\`\`\`

What should be added in place of \`/*ADD A STATEMENT HERE*/\`, so that the function correctly reverses a linked list?`,
    options: [
      "*head_ref = NULL;",
      "*head_ref = next;",
      "*head_ref = current;",
      "*head_ref = prev;"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
**Tracing the algorithm:**

After the \`while\` loop terminates:
- \`current\` = \`NULL\` (loop exits when current reaches end).
- \`next\` = garbage / undefined (last assignment in loop).
- \`prev\` = the **last node** of the original list (now the new head of reversed list).

Since all pointers have been reversed (\`current->next = prev\` for each node), the node that \`prev\` points to is the new head of the reversed list. We must update the head pointer via the double pointer \`head_ref\`:

\`\`\`c
*head_ref = prev;  // Set head to the new first node
\`\`\`

Therefore, the missing statement is **\`*head_ref = prev;\`** → **Option 4**.`
  },

  // ─── Q.4 (SCQ) ───
  {
    id: "me-ds-twt16-q04",
    difficulty: "medium",
    concept: "Linked List — Remove Last Node Bug Analysis",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt16_q04.png",
    imageAlt: "removeLast() function with p=first, q=q->next, while loop",
    text: `We have a single linked list constructed out of nodes. In the function shown below, the parameter \`first\` refers to the first node of the linked list (if there is one), and has the value null otherwise. The intent of the function is to remove the last node of the linked list:
\`\`\`c
void removeLast(struct node * first)
{
    struct node *p, *q;
    p = first;
    q = q -> next;           // Bug: q is uninitialized here
    while (q -> next != null)
    {
        p = q;
        q = q -> next;
    }
    p -> next = null;
}
\`\`\`

Which of the following describes the class of the linked lists for which this function works correctly?`,
    options: [
      "All non-empty linked lists.",
      "All linked lists with more than one node.",
      "No linked list.",
      "All linked lists."
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
**Analyzing the function:**

The intended logic is: traverse until \`q->next == null\` (q is at the last node), then set \`p->next = null\` to unlink it. Assuming the correct interpretation is \`q = p->next\` (i.e., \`q = first->next\`):

**Case 1 — Single-node list:**
- \`p = first\`, \`q = first->next = NULL\`.
- The while condition \`q->next != null\` dereferences **NULL** → **segfault / crash**. ❌

**Case 2 — Two-or-more node list:**
- \`p = first\`, \`q = first->next\` (second node).
- Loop runs until \`q\` is the last node.
- Then \`p->next = null\` correctly removes the last node. ✅

> **Note:** Additionally, the function takes \`first\` **by value** (not as a pointer-to-pointer), so it cannot update the head in the caller. However, for lists with ≥ 2 nodes, the last node IS removed correctly from the caller's perspective (the head still points to the same first node, and its chain is now one node shorter).

Therefore, the function works correctly for **all linked lists with more than one node** → **Option 2**.`
  },

  // ─── Q.5 (MSQ) ───
  {
    id: "me-ds-twt16-q05",
    difficulty: "medium",
    concept: "BST Construction & Path Properties",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Consider an initially empty Binary Search Tree (BST) T. The keys **25, –10, 40, –20, 15, 35, 50, 12, –5** are inserted into T one by one in the given order.

Which of the following statements is/are correct?`,
    options: [
      "The number of edges in the path from the node containing key 12 to the root of T is 3.",
      "The number of nodes in the path from the node containing key 12 to the root of T is 4.",
      "The height of the Binary Search Tree T is 4, where height is defined as the number of edges in the longest path from the root to a leaf.",
      "In the constructed tree T, the node containing key 15 is the parent of the node containing key 12."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 2, 3],
    explanation: `### Solution
**Building the BST step by step:**
\`\`\`
Insert: 25 → root
Insert: -10 → 25.left
Insert: 40  → 25.right
Insert: -20 → -10.left
Insert: 15  → -10.right
Insert: 35  → 40.left
Insert: 50  → 40.right
Insert: 12  → 15.left   (12 < 25 → left, 12 > -10 → right, 12 < 15 → left)
Insert: -5  → 12.left   (-5 < 25 → left, -5 > -10 → right, -5 < 15 → left, -5 < 12 → left)
\`\`\`

Final tree structure:
\`\`\`
              25
           /      \\
         -10        40
         / \\       /  \\
       -20  15   35    50
            /
           12
           /
          -5
\`\`\`

**Verifying each statement:**

**S1:** Path from 12 to root: $12 \\to 15 \\to -10 \\to 25$. Number of **edges** = 3. ✅

**S2:** Nodes on path: $\\{12, 15, -10, 25\\}$. Count = **4**. ✅

**S3:** Longest root-to-leaf path: $25 \\to -10 \\to 15 \\to 12 \\to -5$. Edges = **4**. ✅

**S4:** Node 12 is the left child of node 15 → 15 is the parent of 12. ✅

**All 4 statements are correct.**`
  },

  // ─── Q.6 (SCQ) ───
  {
    id: "me-ds-twt16-q06",
    difficulty: "hard",
    concept: "Binary Tree Transformation via Recursive Function",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt16_q06.png",
    imageAlt: "Tree T with root 2, left child 1, right child 3; and search() function code",
    text: `Consider the following program implemented on tree T where T is:
\`\`\`
    2
   / \\
  1   3
\`\`\`
\`\`\`c
typedef struct tnode {
    int key;
    struct tnode * left, * right;
} * Node;

Void search (Node * node)
{
    struct Node * ptr, * q;
    if (node == Null) return;
    search (node -> left);
    search (node -> right);
    ptr = node -> right;
    node -> right = new Node (node -> data);
    node -> right -> right = ptr;
}
\`\`\`

If the root of the above tree is passed to the above function, what is the level order traversal of output tree produced by above function?
Note: newNode is a function which creates new node.`,
    options: [
      "2 2 1 1 3 3",
      "2 2 3 3 1 1",
      "2 1 2 1 3 3",
      "2 1 2 1 2 3"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
The function works **post-order** (left → right → current), inserting a new copy of each node to its immediate right.

**Trace on Tree T (root=2, left=1, right=3):**

**Step 1: \`search(1)\`** (leaf):
- ptr = node1.right = null
- node1.right = newNode(1) [new node with value 1]
- newNode1.right = null
- Node 1 becomes: \`1 → newNode(1) → null\`

**Step 2: \`search(3)\`** (leaf):
- ptr = node3.right = null
- node3.right = newNode(3) [new node with value 3]
- newNode3.right = null
- Node 3 becomes: \`3 → newNode(3) → null\`

**Step 3: \`search(root=2)\`**:
- ptr = root.right = node3 (original)
- root.right = newNode(2) [new node with value 2]
- newNode2.right = node3 (ptr)

**Final tree structure:**
\`\`\`
root(2):     left=node1,    right=newNode(2)
node1:       left=null,     right=newNode(1)
newNode(1):  left=null,     right=null
newNode(2):  left=null,     right=node3
node3:       left=null,     right=newNode(3)
newNode(3):  left=null,     right=null
\`\`\`

**BFS Level-order traversal:**
| Queue State | Node Dequeued | Output | Enqueue Children |
|---|---|:---:|---|
| [root(2)] | root(2) | **2** | node1, newNode(2) |
| [node1, newNode(2)] | node1 | **1** | newNode(1) |
| [newNode(2), newNode(1)] | newNode(2) | **2** | node3 |
| [newNode(1), node3] | newNode(1) | **1** | — |
| [node3] | node3 | **3** | newNode(3) |
| [newNode(3)] | newNode(3) | **3** | — |

**Level order: 2, 1, 2, 1, 3, 3** → **Option 3**.`
  },

  // ─── Q.7 (NAT) ───
  {
    id: "me-ds-twt16-q07",
    difficulty: "hard",
    concept: "AVL Tree Deletion & Rotations",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 7,
    natTolerance: 0,
    imageUrl: "/images/made_easy/twt16_q07.png",
    imageAlt: "AVL tree with root 5; nodes 2,10; nodes 1,4,7,11; nodes 3,6,8,12; node 9",
    text: `Consider the following AVL tree:
\`\`\`
              5
           /     \\
          2       10
         / \\     /  \\
        1   4   7    11
           /   / \\     \\
          3   6   8    12
                   \\
                    9
\`\`\`

Delete element **1** in the above AVL tree, then the next root node after deletion is ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Step 1: Delete node 1** (leaf, left child of node 2).

After deletion, check balance factors:
- Node 2: height(left=null)=-1, height(right=4)=1. **BF(2) = -1 - 1 = -2** ⚠️ Imbalanced!
- Node 4: left=3 (height 0), right=null. BF(4) = 0 - (-1) = **+1** (left-heavy).

This is a **Right-Left (RL) case** at node 2.

**Step 2: RL Double Rotation at node 2:**
1. Right rotate at node 4 → node 3 goes up.
2. Left rotate at node 2 → node 3 becomes root of this subtree.

After rotation:
\`\`\`
    3
   / \\
  2   4
\`\`\`

Node 3 replaces node 2 as left child of node 5. Tree becomes:
\`\`\`
         5
        / \\
       3   10
      / \\  / \\
     2   4  7  11
           / \\   \\
          6   8  12
               \\
                9
\`\`\`

**Step 3: Check balance at node 5:**
- height(left=3) = 1
- height(right=10): height(7)=2, height(11)=1 → height(10)=3
- **BF(5) = 1 - 3 = -2** ⚠️ Imbalanced again!

Node 10: BF = height(7) - height(11) = 2 - 1 = **+1** (left-heavy).

**Right-Left (RL) case at node 5:**
1. Right rotate at node 10 → node 7 goes up (10 becomes right child of 7, 7's old right child 8 becomes 10's left child).
2. Left rotate at node 5 → node 7 goes up (5 becomes left child of 7, 7's old left child 6 becomes 5's right child).

**Final tree after all rotations:**
\`\`\`
         7
        / \\
       5   10
      / \\   / \\
     3   6  8  11
    / \\   \\    \\
   2   4   9   12
\`\`\`

The new root after deletion is **7**.`
  },

  // ─── Q.8 (MSQ) ───
  {
    id: "me-ds-twt16-q08",
    difficulty: "medium",
    concept: "AVL Tree Properties",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following is/are correct?`,
    options: [
      "The maximum number of nodes in an AVL tree of height h = 4 is 31.",
      "If the balance factor of a node is 2, a single or double rotation will always reduce its balance factor to 0.",
      "The minimum number of nodes in an AVL tree of height h = 2 is 4.",
      "A Red-Black tree of the same height as an AVL tree will always contain more nodes."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution

**Statement 1:** ✅ **TRUE**
Maximum nodes in any binary tree of height $h$ = maximum nodes in a **complete binary tree** = $2^{h+1} - 1$.
$$h = 4 \\implies 2^{4+1} - 1 = 2^5 - 1 = \\mathbf{31}$$

**Statement 2:** ❌ **FALSE**
A rotation reduces BF to 0 only in the case of **insertion**. During **deletion**, a single rotation (LL/RR case where the pivot's BF = 0) can leave the new root with BF = ±1, requiring propagation up the tree. So the rotation does **not always** reduce BF to 0.

**Statement 3:** ✅ **TRUE**
Minimum nodes in AVL tree of height $h$ follows the recurrence:
$$N(h) = N(h-1) + N(h-2) + 1$$
$$N(0) = 1,\\quad N(1) = 2$$
$$N(2) = N(1) + N(0) + 1 = 2 + 1 + 1 = \\mathbf{4}$$

**Statement 4:** ❌ **FALSE**
A Red-Black tree has a **looser** balance constraint than an AVL tree (an RB tree allows the longest path to be at most twice the shortest). For the same height $h$, an RB tree can have **fewer** nodes than an AVL tree. Therefore, an RB tree of the same height does NOT always contain more nodes.

**Correct statements: 1 and 3.**`
  },

  // ─── Q.9 (NAT) ───
  {
    id: "me-ds-twt16-q09",
    difficulty: "hard",
    concept: "AVL Tree Insertion & Level Sum",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 263,
    natTolerance: 0,
    text: `After inserting the elements **61, 55, 74, 59, 57, 73, 76** and **58** into an empty AVL tree in the specified sequence, find the sum of 3rd level tree node (assume root node is 1st level). ________`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Step-by-step AVL insertions:**

**After inserting 61, 55, 74:** Balanced.
\`\`\`
    61
   /  \\
  55   74
\`\`\`

**After inserting 59:** 59 > 55, right child of 55.
\`\`\`
    61
   /  \\
  55   74
   \\
    59
\`\`\`

**After inserting 57:** 57 < 59, left child of 59. BF(55) = -2, BF(59) = +1 → **Right-Left case at 55**.

Double rotation (Right at 59, Left at 55) → 57 becomes root of this subtree:
\`\`\`
    61
   /  \\
  57   74
 / \\
55  59
\`\`\`

**After inserting 73:** 73 < 74, left child of 74. Balanced.
\`\`\`
    61
   /  \\
  57   74
 / \\  /
55  59 73
\`\`\`

**After inserting 76:** 76 > 74, right child of 74. Balanced.
\`\`\`
    61
   /  \\
  57   74
 / \\  / \\
55  59 73 76
\`\`\`

**After inserting 58:** 58 < 59, left child of 59. All BFs ≤ 1.
\`\`\`
Level 1:          61
Level 2:      57      74
Level 3:    55  59  73  76
Level 4:       58
\`\`\`

**3rd level nodes:** 55, 59, 73, 76.

$$\\text{Sum} = 55 + 59 + 73 + 76 = \\mathbf{263}$$`
  },

  // ─── Q.10 (SCQ) ───
  {
    id: "me-ds-twt16-q10",
    difficulty: "easy",
    concept: "Linked List — Insert at End",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt16_q10.png",
    imageAlt: "Linked list with node q to be inserted at end; 4 code options",
    text: `Consider the following linked list:
- A list with several nodes already exists. Node \`q\` needs to be inserted at the end.

Which of the following piece of code will insert the node pointed by \`q\` at the end of the list?`,
    options: [
      "for (p = list; p! = NULL; p = p → next); p → next = q;",
      "for (p = list; p → next! = NULL; p = p → next); p = q;",
      "for (p = list; p → next! = NULL; p = p → next); p → next = q;",
      "for (p = list; p! = NULL; p = p → next); p = q;"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
To insert node \`q\` at the **end** of a linked list, we need to:
1. Traverse to the **last node** (the node whose \`next\` is NULL).
2. Set that node's \`next\` to point to \`q\`.

**Analyzing each option:**
- **Option 1:** \`p! = NULL\` — loop exits when \`p == NULL\`. Then \`p -> next = q\` dereferences NULL → **crash!** ❌
- **Option 2:** \`p → next! = NULL\` — correct loop condition (stops at last node). But \`p = q\` just changes the local pointer, doesn't link \`q\` to the list. ❌
- **Option 3:** \`p → next! = NULL\` — loop stops when \`p\` is the last node (p->next == NULL). Then \`p → next = q\` correctly links \`q\` to the end. ✅
- **Option 4:** \`p! = NULL\` — loop exits with \`p == NULL\`. \`p = q\` just changes local pointer. ❌

**Option 3 is correct.**`
  },

  // ─── Q.11 (MSQ) ───
  {
    id: "me-ds-twt16-q11",
    difficulty: "easy",
    concept: "Trees & Variable Scope — Multiple Correct Statements",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "MSQ",
    text: `Which of the following is correct?`,
    options: [
      "Only preorder traversal of a binary tree is given, then we can construct unique binary tree.",
      "Inorder traversal of BST is always sorted order.",
      "Search time complexity of an element in AVL tree is O(log n).",
      "Static variable scope is entire program."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution

**Statement 1:** ❌ **FALSE** — Given only a preorder traversal, infinitely many different binary trees can produce the same preorder sequence. To reconstruct a **unique** binary tree, you need both preorder AND inorder traversals (or preorder of a BST, which is a special case).

**Statement 2:** ✅ **TRUE** — The inorder traversal of a BST always visits nodes in non-decreasing (sorted) order. This is the fundamental property of BSTs: for every node $N$, all keys in the left subtree $< N.key <$ all keys in the right subtree. Inorder traversal (Left → Root → Right) naturally yields sorted order.

**Statement 3:** ✅ **TRUE** — An AVL tree maintains strict height balance ($|BF| \\le 1$), which guarantees $h = O(\\log n)$. Since BST search is $O(h)$, searching in an AVL tree is $O(\\log n)$.

**Statement 4:** ❌ **FALSE** — The **scope** of a static variable depends on where it is declared:
- **Static local variable** (inside a function): scope is limited to that **function block only** (though its *lifetime* spans the entire program).
- **Static global variable** (outside any function): scope is limited to the **translation unit (file)**, not the entire program.
Neither case has scope equal to the "entire program."

**Correct statements: 2 and 3.**`
  },

  // ─── Q.12 (NAT) ───
  {
    id: "me-ds-twt16-q12",
    difficulty: "medium",
    concept: "Hash Table with Chaining — Empty Slot Probability",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0.55,
    natTolerance: 0.01,
    text: `Consider a hash table with hash function $H(i) = i \\bmod 11$ and following keys are hashed into the hash table:
**24, 49, 20, 16, 23, 36, 34, 60**

To handle collision, **chaining** is used. After inserting all the keys, if a new key is inserted, what is the probability that it hashes into an empty slot? ________ (Up to 2 decimal places)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Hash function:** $H(i) = i \\bmod 11$. The table has 11 slots (0–10).

**Computing hash values:**

| Key | $H(k) = k \\bmod 11$ | Slot |
|:---:|:---:|:---:|
| 24 | $24 \\bmod 11 = 2$ | 2 |
| 49 | $49 \\bmod 11 = 5$ | 5 |
| 20 | $20 \\bmod 11 = 9$ | 9 |
| 16 | $16 \\bmod 11 = 5$ | 5 (collision) |
| 23 | $23 \\bmod 11 = 1$ | 1 |
| 36 | $36 \\bmod 11 = 3$ | 3 |
| 34 | $34 \\bmod 11 = 1$ | 1 (collision) |
| 60 | $60 \\bmod 11 = 5$ | 5 (collision) |

**Slot occupancy:**
| Slot | Status |
|:---:|:---:|
| 0 | **Empty** |
| 1 | Occupied (23, 34) |
| 2 | Occupied (24) |
| 3 | Occupied (36) |
| 4 | **Empty** |
| 5 | Occupied (49, 16, 60) |
| 6 | **Empty** |
| 7 | **Empty** |
| 8 | **Empty** |
| 9 | Occupied (20) |
| 10 | **Empty** |

**Empty slots:** 0, 4, 6, 7, 8, 10 → **6 empty slots** out of 11.

$$P(\\text{empty slot}) = \\frac{6}{11} \\approx \\mathbf{0.55}$$`
  },

  // ─── Q.13 (NAT) ───
  {
    id: "me-ds-twt16-q13",
    difficulty: "easy",
    concept: "Full 4-ary Tree — Internal Nodes Count",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 15,
    natTolerance: 0,
    text: `In a full 4-ary tree, every internal node has exactly 4 children. If the number of leaf nodes in such a tree is **46**, how many internal nodes are there? _________`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Formula for full $k$-ary trees:**

For a full $k$-ary tree, there is a well-known relationship between the number of leaves $L$ and the number of internal nodes $I$:

$$L = (k - 1) \\cdot I + 1$$

**Derivation:** Each internal node contributes $k$ edges (to its children). Total edges = $kI$. But each non-root node has exactly one parent edge, so edges = $I + L - 1$ (total nodes minus 1). Thus $kI = I + L - 1$, giving $L = (k-1)I + 1$.

**Applying for $k = 4$ and $L = 46$:**
$$46 = (4 - 1) \\cdot I + 1$$
$$46 = 3I + 1$$
$$3I = 45$$
$$I = \\mathbf{15}$$

There are **15 internal nodes**.`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-ds-twt16-q14",
    difficulty: "easy",
    concept: "Circular Doubly-Linked List with Head Pointer — Complexity",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt16_q14.png",
    imageAlt: "Options: Only S1 / Only S2 / Both S1 and S2 / Neither S1 nor S2",
    text: `Consider the following statements regarding a **circular doubly-linked list** with a head pointer:

- **S₁:** Inserting an element at the end of the list has a run-time complexity of $O(1)$.
- **S₂:** Deleting the last element of the list has a run-time complexity of $O(N)$.

Which of the above statements are correct?`,
    options: [
      "Only S₁",
      "Only S₂",
      "Both S₁ and S₂",
      "Neither S₁ nor S₂"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Key property:** In a circular doubly-linked list with a **head pointer**, the \`prev\` pointer of the head node always points to the **tail (last node)**. So \`tail = head->prev\` gives the last node in $O(1)$.

**S₁ — Inserting at end is $O(1)$:** ✅ **TRUE**
- Access \`tail = head->prev\` in $O(1)$.
- Create new node, link: \`tail->next = newNode\`, \`newNode->next = head\`, \`newNode->prev = tail\`, \`head->prev = newNode\`.
- All pointer updates are $O(1)$.

**S₂ — Deleting the last element is $O(N)$:** ❌ **FALSE**
- Access \`tail = head->prev\` in $O(1)$.
- Access \`new_tail = tail->prev\` in $O(1)$.
- Update: \`new_tail->next = head\`, \`head->prev = new_tail\`, \`free(tail)\`.
- All operations are $O(1)$, **not** $O(N)$.

The key advantage of a circular doubly-linked list is that **both insertion and deletion at the end are $O(1)$**, unlike a singly-linked list where only head-end operations are $O(1)$.

**Only S₁ is correct → Option 1.**`
  },

  // ─── Q.15 (SCQ) ───
  {
    id: "me-ds-twt16-q15",
    difficulty: "medium",
    concept: "BST Traversal — Preorder to Postorder",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `The preorder traversal sequence of a Binary Search Tree (BST) is:
**50, 30, 20, 25, 40, 35, 45, 70, 60, 80**

Which one of the following is the postorder traversal of the same tree?`,
    options: [
      "25, 20, 35, 45, 40, 30, 60, 80, 70, 50",
      "25, 20, 45, 35, 40, 30, 60, 80, 70, 50",
      "20, 25, 35, 45, 40, 30, 60, 80, 70, 50",
      "25, 20, 35, 45, 40, 30, 80, 60, 70, 50"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
**Reconstruct BST from preorder [50, 30, 20, 25, 40, 35, 45, 70, 60, 80]:**
- Root = 50
- 30 < 50 → left of 50
- 20 < 30 → left of 30
- 25 > 20, 25 < 30 → right of 20
- 40 > 30, 40 < 50 → right of 30
- 35 > 30, 35 < 40 → left of 40
- 45 > 40, 45 < 50 → right of 40
- 70 > 50 → right of 50
- 60 > 50, 60 < 70 → left of 70
- 80 > 70 → right of 70

**Tree structure:**
\`\`\`
            50
           /  \\
          30   70
         / \\  / \\
        20 40 60 80
         \\ / \\
         25 35 45
\`\`\`

**Postorder (Left → Right → Root):**
- Left subtree of 50 (root=30):
  - Left (root=20): 20 has right child 25 → postorder: **25, 20**
  - Right (root=40): 40 has left=35, right=45 → postorder: **35, 45, 40**
  - Root: **30**
  - → 25, 20, 35, 45, 40, 30
- Right subtree of 50 (root=70):
  - Left=60 (leaf): **60**
  - Right=80 (leaf): **80**
  - Root: **70**
  - → 60, 80, 70
- Root: **50**

**Postorder: 25, 20, 35, 45, 40, 30, 60, 80, 70, 50** → **Option 1** ✅`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-ds-twt16-q16",
    difficulty: "medium",
    concept: "Doubly Linked List — Pointer Traversal",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt16_q16.png",
    imageAlt: "Doubly Linked List: 5 ↔ 15 ↔ 15 ↔ 20 with pointer manipulation code",
    text: `Consider the Doubly Linked List:
$$5 \\leftrightarrow 15 \\leftrightarrow 15 \\leftrightarrow 20$$

If \`head\` points to [5], what does this print?
\`\`\`c
head = head → next;
head → next → prev → prev → next = head → next → next;
printf("%d", head → next → value);
\`\`\``,
    options: ["15", "20", "10", "NULL"],
    correctAnswerIndex: 0,
    explanation: `### Solution
Label the nodes: A(5) ↔ B(15) ↔ C(15) ↔ D(20).

Initially: head → A(5).

**Line 1:** \`head = head → next;\`
- head now points to **B(15)** (first 15).

**Line 2:** \`head → next → prev → prev → next = head → next → next;\`

Tracing the left side (assignment target):
- \`head → next\` = C (second 15)
- \`head → next → prev\` = B (first 15) [C's prev is B]
- \`head → next → prev → prev\` = A (5) [B's prev is A]
- **Left side:** \`A → next\` (currently B)

Tracing the right side (new value):
- \`head → next\` = C (second 15)
- \`head → next → next\` = D (20)
- **Right side:** D(20)

Result: \`A → next = D(20)\`. This skips B and C from A's perspective.

**Line 3:** \`printf("%d", head → next → value);\`
- head = B(15, first one)
- head → next = C(15, second one) [B's next pointer is unchanged!]
- head → next → value = **15**

$$\\text{Output} = \\mathbf{15}$$

**Option 1 is correct.**`
  },

  // ─── Q.17 (SCQ) ───
  {
    id: "me-ds-twt16-q17",
    difficulty: "hard",
    concept: "Hash Table — Collision Probability",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt16_q17.png",
    imageAlt: "4 formula options for hash collision probability",
    text: `Suppose $M$ keys are independently hashed into $N$ slots using a uniform hash function. What is the probability that exactly **two keys** collide in a specific slot $i$ and all other keys go to different slots (not necessarily distinct among themselves)?`,
    options: [
      "$\\binom{M}{2} \\cdot \\dfrac{1}{N^2} \\cdot \\left(\\dfrac{N-1}{N}\\right)^{M-2}$",
      "$\\binom{M}{2} \\cdot \\dfrac{1}{N} \\cdot \\left(\\dfrac{N-1}{N}\\right)^{M-2}$",
      "$\\dfrac{1}{N^M}$",
      "$\\binom{M}{2} \\cdot \\dfrac{1}{N^M}$"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
**We want:** Exactly 2 specific keys land in slot $i$, and the remaining $M-2$ keys go to any slot **except $i$**.

**Step 1 — Choose which 2 keys go to slot $i$:**
$$\\binom{M}{2} \\text{ ways}$$

**Step 2 — Each of the 2 chosen keys hashes to slot $i$:**
$$P(\\text{key} \\to \\text{slot } i) = \\frac{1}{N} \\implies \\left(\\frac{1}{N}\\right)^2 = \\frac{1}{N^2}$$

**Step 3 — Each of the remaining $M-2$ keys hashes to any slot except $i$:**
$$P(\\text{key} \\not\\to \\text{slot } i) = \\frac{N-1}{N} \\implies \\left(\\frac{N-1}{N}\\right)^{M-2}$$

**Combining:**
$$P = \\binom{M}{2} \\cdot \\frac{1}{N^2} \\cdot \\left(\\frac{N-1}{N}\\right)^{M-2}$$

**Checking the options:**
- Option 2 uses $\\frac{1}{N}$ instead of $\\frac{1}{N^2}$ → incorrect (2 keys each need $\\frac{1}{N}$, product = $\\frac{1}{N^2}$).
- Option 3 is $\\frac{1}{N^M}$ → probability of all $M$ keys landing in slot $i$.
- Option 4 ignores the $M-2$ keys going elsewhere.

**Option 1 is correct.** ✅`
  }
];

export const MADE_EASY_DS_TWT16_CHAPTER: Chapter = {
  id: "ds-gate-2027-twt-16",
  name: "GATE 2027 CS TOPIC WISE TEST - 16 (Data Structures)",
  description: "Made Easy GATE 2027 Test 16: BST Construction & Properties, AVL Tree Deletion, Linked List Reversal, Hash Table Probability, Full k-ary Trees",
  questions: MADE_EASY_DS_TWT16_QUESTIONS
};
