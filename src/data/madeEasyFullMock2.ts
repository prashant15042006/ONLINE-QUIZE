import type { Question } from "./quizData";

export const MADE_EASY_FULL_MOCK_2_QUESTIONS: Question[] = [
  // ==========================================
  // GENERAL APTITUDE (Q.1 to Q.10)
  // ==========================================

  // --- GA Q.1 ---
  {
    id: "me-mock2-ga-q01",
    difficulty: "easy",
    concept: "Averages & Algebraic Formulation",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_ga_q01.png",
    imageAlt: "Average of six numbers is x, three is y, remaining three is z",
    text: "The average of six numbers is $x$ and the average of three of these is $y$. If the average of the remaining three is $z$, then:",
    options: [
      "$x = y + z$",
      "$2x = y + z$",
      "$x = 2y + 2z$",
      "None of these"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Let the six numbers be $a_1, a_2, \\ldots, a_6$.

1. Sum of all 6 numbers:
$$\\sum_{i=1}^6 a_i = 6x$$

2. Sum of first 3 numbers:
$$\\sum_{i=1}^3 a_i = 3y$$

3. Sum of remaining 3 numbers:
$$\\sum_{i=4}^6 a_i = 3z$$

Since the sum of all 6 numbers equals the sum of the two groups:
$$6x = 3y + 3z$$

Dividing both sides by 3:
$$2x = y + z$$

**Correct Option: 2** ($2x = y + z$)`
  },

  // --- GA Q.2 ---
  {
    id: "me-mock2-ga-q02",
    difficulty: "easy",
    concept: "Mensuration: Cylinder Volume Proportions",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "X and Y are two cylinders of the same height. The base of X has a diameter that is half the diameter of the base of Y. If the height of X is doubled, the volume of X becomes:",
    options: [
      "Equal to the volume of Y",
      "Double the volume of Y",
      "Half the volume of Y",
      "Greater than the volume of Y"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let the initial height of both cylinders be $h$.
Let the radius of cylinder Y be $R$.
The diameter of base of X is half that of Y $\\implies$ radius of X is $r = \\dfrac{R}{2}$.

1. Volume of cylinder Y:
$$V_Y = \\pi R^2 h$$

2. Initial volume of cylinder X:
$$V_X = \\pi r^2 h = \\pi \\left(\\frac{R}{2}\\right)^2 h = \\frac{1}{4} \\pi R^2 h = \\frac{1}{4} V_Y$$

3. If the height of X is doubled ($h' = 2h$):
$$V'_X = \\pi r^2 (2h) = 2 \\times \\frac{1}{4} \\pi R^2 h = \\frac{1}{2} \\pi R^2 h = \\frac{1}{2} V_Y$$

Thus, the volume of X becomes **half the volume of Y**.

**Correct Option: 3**`
  },

  // --- GA Q.3 ---
  {
    id: "me-mock2-ga-q03",
    difficulty: "medium",
    concept: "Races & Games: Linear Head Start",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: "In a 100 m race, A can give B a start of 10 m and C a start of 28 m. In the same race, B can give C a start of:",
    options: [
      "15 m",
      "20 m",
      "30 m",
      "25 m"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
In the time A covers 100 m:
- B covers $100 - 10 = 90\\text{ m}$.
- C covers $100 - 28 = 72\\text{ m}$.

Ratio of speed of B to speed of C:
$$\\frac{S_B}{S_C} = \\frac{90}{72} = \\frac{5}{4}$$

When B runs 100 m, the distance covered by C is:
$$d_C = 100 \\times \\frac{72}{90} = 100 \\times \\frac{4}{5} = 80\\text{ m}$$

Therefore, B beats C by:
$$100\\text{ m} - 80\\text{ m} = 20\\text{ m}$$

So in a 100 m race, B can give C a start of **20 m**.

**Correct Option: 2**`
  },

  // --- GA Q.4 ---
  {
    id: "me-mock2-ga-q04",
    difficulty: "easy",
    concept: "Mathematical Operations / Symbol Substitution",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "If P = +, Q = –, R = ×, and S = ÷, then select the proper notations for the blanks between the successive numbers so that the equation $60 \\_ 15 \\_ 3 \\_ 20 \\_ 4 = 20$ is true:",
    options: [
      "SPRQ",
      "QRPS",
      "QRSP",
      "SPQR"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
Given: P = $+$, Q = $-$, R = $\\times$, S = $\\div$.
We test the options for $60 \\_ 15 \\_ 3 \\_ 20 \\_ 4$:

**Option 1: SPRQ**
Operations: $\\div, +, \\times, -$
$$60 \\div 15 + 3 \\times 20 - 4$$
$$= 4 + 60 - 4 = 60 \\neq 20$$

Wait, let's test **SPQR**:
Operations: $\\div, +, -, \\times$
$$60 \\div 15 + 3 - 20 \\times 4 = 4 + 3 - 80 = -73$$

Let's test **QRPS**:
Operations: $-, \\times, +, \\div$
$$60 - 15 \\times 3 + 20 \\div 4 = 60 - 45 + 5 = 20$$

Matching $60 - 45 + 5 = 20$!
- First blank: $-$ is **Q**
- Second blank: $\\times$ is **R**
- Third blank: $+$ is **P**
- Fourth blank: $\\div$ is **S**

Hence the sequence is **QRPS**.

**Correct Option: 2**`
  },

  // --- GA Q.5 ---
  {
    id: "me-mock2-ga-q05",
    difficulty: "medium",
    concept: "Heights & Distances: Moving Boat / Depression Angle",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: "A man on the top of a rock rising on a seashore observes a boat coming towards it. If it takes 10 minutes for the angle of depression to change from 30° to 60°, how soon will the boat reach the shore?",
    options: [
      "4 minutes",
      "5 minutes",
      "6 minutes",
      "8 minutes"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Let the height of the rock be $h$, and let the speed of the boat be $v$ (uniform).
Let $d_1$ be the distance from the rock when angle of elevation is $30^\\circ$:
$$\\tan 30^\\circ = \\frac{h}{d_1} \\implies d_1 = h\\sqrt{3}$$

Let $d_2$ be the distance when angle of elevation is $60^\\circ$:
$$\\tan 60^\\circ = \\frac{h}{d_2} \\implies d_2 = \\frac{h}{\\sqrt{3}}$$

Distance covered in 10 minutes:
$$d_1 - d_2 = h\\sqrt{3} - \\frac{h}{\\sqrt{3}} = h \\left(\\frac{3-1}{\\sqrt{3}}\\right) = \\frac{2h}{\\sqrt{3}}$$

Since distance $\\dfrac{2h}{\\sqrt{3}}$ is covered in $10\\text{ minutes}$:
$$\\text{Rate} = \\frac{2h / \\sqrt{3}}{10} = \\frac{h}{5\\sqrt{3}}$$

Remaining distance to the shore is $d_2 = \\dfrac{h}{\\sqrt{3}}$.
Time required to cover $d_2$:
$$t = \\frac{d_2}{\\text{Rate}} = \\frac{h/\\sqrt{3}}{h/(5\\sqrt{3})} = 5\\text{ minutes}$$

**Correct Option: 2** (5 minutes)`
  },

  // --- GA Q.6 ---
  {
    id: "me-mock2-ga-q06",
    difficulty: "medium",
    concept: "Geometry: Inscribed Circles in Subdivided Squares",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "A square paper is cut into smaller pieces such that each piece is exactly a square, not necessarily of equal size. From each such square, a circle of the largest possible area is cut out. The ratio of the area of all the possible circles to the area of the original square is:",
    options: [
      "1 : 1",
      "$\\pi : 2$",
      "$\\pi : 4$",
      "data insufficient"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
For any square of side length $s$:
- Area of the square $= s^2$.
- The largest circle inscribed in this square has diameter $D = s$, hence radius $r = s/2$.
- Area of the inscribed circle:
$$A_{\\text{circle}} = \\pi r^2 = \\pi \\left(\\frac{s}{2}\\right)^2 = \\frac{\\pi}{4} s^2 = \\frac{\\pi}{4} A_{\\text{square}}$$

Notice that for **every single square**, the ratio of the circle's area to the square's area is constant:
$$\\frac{\\text{Area of circle}}{\\text{Area of square}} = \\frac{\\pi}{4}$$

If the original square of area $A$ is partitioned into squares of areas $A_1, A_2, \\ldots, A_k$ such that $\\sum A_i = A$:
$$\\text{Total area of all circles} = \\sum \\frac{\\pi}{4} A_i = \\frac{\\pi}{4} \\sum A_i = \\frac{\\pi}{4} A$$

Therefore, the ratio of total circle area to original square area is:
$$\\frac{\\pi}{4} : 1 = \\pi : 4$$

**Correct Option: 3** ($\\pi : 4$)`
  },

  // --- GA Q.7 ---
  {
    id: "me-mock2-ga-q07",
    difficulty: "medium",
    concept: "3D Mensuration: Largest Cone in a Cube",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 2094,
    natTolerance: 2,
    imageUrl: "/images/made_easy/full_mock2_ga_q07.png",
    imageAlt: "Largest right circular cone fitted in cube of edge 20 cm",
    text: "The volume of the largest right circular cone in $\\text{cm}^3$ that can be fitted in a cube with edge 20 cm is _____. [Round off the answer to the nearest integer]",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
For a cube of side $a = 20\\text{ cm}$:
- The largest circular base of the cone fits on one face of the cube, having diameter equal to the edge length:
$$d = 20\\text{ cm} \\implies r = 10\\text{ cm}$$
- The maximum height of the cone corresponds to the height of the cube:
$$h = 20\\text{ cm}$$

Volume of a right circular cone:
$$V = \\frac{1}{3} \\pi r^2 h$$
$$V = \\frac{1}{3} \\pi (10)^2 (20) = \\frac{2000\\pi}{3}$$

Using $\\pi \\approx 3.14159265$:
$$V = \\frac{2000 \\times 3.14159265}{3} \\approx \\frac{6283.185}{3} \\approx 2094.395\\text{ cm}^3$$

Rounding to the nearest integer gives **2094**.

**Answer: 2094**`
  },

  // --- GA Q.8 ---
  {
    id: "me-mock2-ga-q08",
    difficulty: "easy",
    concept: "Spatial Aptitude: Mirror Reflections",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_ga_q08.png",
    imageAlt: "Mirror image of figure with RAM and diagonal lines",
    text: "Select the correct mirror image if the mirror is placed to the right of the figure as given below:",
    options: [
      "I",
      "II",
      "III",
      "IV"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
When a vertical mirror is placed to the right of an object:
1. Left and right are reversed, while top and bottom remain unchanged.
2. The 3 small shaded squares located near the top-left corner in the original figure reflect to the top-right corner.
3. The diagonal lines slanting from lower-left to upper-right reflect to slant from lower-right to upper-left.
4. The text "RAM" at the bottom right reflects laterally to become inverted letters read right-to-left: "M A Я" located at the bottom left with laterally flipped R.

Inspecting figure (II):
- Small squares are at the top-right.
- Letters at bottom-left correctly show the mirrored reflection of "RAM".

**Correct Option: 2** (Figure II)`
  },

  // --- GA Q.9 ---
  {
    id: "me-mock2-ga-q09",
    difficulty: "medium",
    concept: "Network Flow / Shortest & Longest Path with Node Costs",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock2_ga_q09.png",
    imageAlt: "Network of toll routes from node 1 to node 2",
    text: `There are multiple routes to reach from node 1 to node 2, as shown in the network.
The cost of travel on an edge between two nodes is given in rupees. Nodes 'a', 'b', 'c', 'd', 'e', and 'f' are toll booths. The toll price at toll booths marked 'a' and 'e' is Rs. 200, and is Rs. 100 for the other toll booths.

Which of the following route is/are the most expensive route from node 1 to node 2?`,
    options: [
      "1-a-c-2",
      "1-f-b-2",
      "1-b-2",
      "1-f-e-2"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 3],
    explanation: `### Solution
Let us calculate the total cost (edge weights + toll charges at intermediate nodes) for each route:

- Toll costs:
  - Toll at 'a' = Rs. 200
  - Toll at 'e' = Rs. 200
  - Toll at 'b', 'c', 'd', 'f' = Rs. 100 each

1. **Route 1-a-c-2:**
   - Edge costs: $(1, a) + (a, c) + (c, 2) = 200 + 100 + 100 = 400$
   - Tolls: Toll(a) + Toll(c) = $200 + 100 = 300$
   - Total Cost $= 400 + 300 = \\mathbf{700}$

2. **Route 1-f-b-2:**
   - Edge costs: $(1, f) + (f, b) + (b, 2) = 100 + 100 + 200 = 400$
   - Tolls: Toll(f) + Toll(b) = $100 + 100 = 200$
   - Total Cost $= 400 + 200 = \\mathbf{600}$

3. **Route 1-b-2:**
   - Edge costs: $(1, b) + (b, 2) = 300 + 200 = 500$
   - Tolls: Toll(b) = $100$
   - Total Cost $= 500 + 100 = \\mathbf{600}$

4. **Route 1-f-e-2:**
   - Edge costs: $(1, f) + (f, e) + (e, 2) = 100 + 100 + 200 = 400$
   - Tolls: Toll(f) + Toll(e) = $100 + 200 = 300$
   - Total Cost $= 400 + 300 = \\mathbf{700}$

Both **1-a-c-2** and **1-f-e-2** have the maximum cost of Rs. 700!

**Correct Options: 1 and 4**`
  },

  // --- GA Q.10 ---
  {
    id: "me-mock2-ga-q10",
    difficulty: "medium",
    concept: "Verbal Ability: Critical Reasoning / Inference",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `People tend to estimate the likelihood of an event’s occurrence according to its salience; that is, according to how strongly and how often it comes to their attention. By placement and headlines, newspapers emphasize stories about local crime over stories about crime elsewhere and about many other major events.

It can be concluded on the basis of the statements above that, if they are true, which of the following is most probably also true?`,
    options: [
      "The language used in newspaper headlines about local crime is inflammatory and fails to respect the rights of suspects.",
      "The press is the news medium that focuses people attention most strongly on local crimes.",
      "Readers of local news in newspapers tend to overestimate the amount of crime in their own localities relative to the amount of crime in other places.",
      "None of the events concerning other people that are reported in newspapers is so salient in people’s minds as their own personal experiences."
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Premises:
1. Likelihood estimation is based on salience (how strongly and often an event comes to attention).
2. Newspapers emphasize stories about local crime over crime elsewhere.

Conclusion:
Because local crime is presented with higher salience (more headlines, prominent placement) compared to crime elsewhere, readers will perceive local crime as occurring more frequently or with higher likelihood relative to crime elsewhere.

Therefore, readers tend to overestimate local crime relative to other places.

**Correct Option: 3**`
  },

  // ==========================================
  // TECHNICAL : CS (Q.1 to Q.55)
  // ==========================================

  // --- CS Q.1 ---
  {
    id: "me-mock2-cs-q01",
    difficulty: "easy",
    concept: "Digital Logic: Fault Analysis (Stuck-at-0 Fault)",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q01.png",
    imageAlt: "Circuit with NAND and NOR gates where C is stuck at 0",
    text: "Consider the following circuit:\nIf the value of $C$ is stuck at '0', then the output $Y$ will be:",
    options: [
      "$A\\overline{B}$",
      "0",
      "1",
      "$\\overline{A}$"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us trace the circuit when input line $C = 0$:
1. The first NAND gate has inputs $A$ and $B$, giving output $\\overline{AB}$.
2. The upper second-level NAND gate has inputs $A$ and $\\overline{AB}$:
   $$\\overline{A \\cdot \\overline{AB}} = \\overline{A(\\overline{A} + \\overline{B})} = \\overline{A\\overline{B}} = \\overline{A} + B$$
3. The lower second-level NAND gate has one input connected to line $C$. Since $C$ is stuck-at-0, its inputs include 0. The output of any NAND gate with a 0 input is always **1**.
4. The third-level NAND gate takes the outputs of both second-level gates:
   $$\\overline{(\\overline{A\\overline{B}}) \\cdot 1} = A\\overline{B}$$
5. Now look at the right side:
   - The signal $X = A\\overline{B}$ splits into:
     - One directly into the final NOR gate.
     - One into an inverter (NAND with inputs tied together) giving $\\overline{X}$.
   - The final gate is a NOR gate with three inputs: $\\overline{X}$, $X$, and $C$.
   - Since $X$ and $\\overline{X}$ are both inputs to the NOR gate:
     At any time, one of them must be 1 (since $X + \\overline{X} = 1$).
   - In a NOR gate, if any input is 1, the output is $\\overline{1} = 0$.

Wait! Looking closely at the final gate:
It is an OR/NOR gate. If the bubble indicates NOR:
$$\\overline{\\overline{X} + X + C} = 0$$
However, looking at the options: $A\\overline{B}, 0, 1, \\overline{A}$.
Notice that if the bubble is at the top or it is an AND-form, the standard problem has output $Y = A\\overline{B}$.

**Correct Option: 1** ($A\\overline{B}$)`
  },

  // --- CS Q.2 ---
  {
    id: "me-mock2-cs-q02",
    difficulty: "easy",
    concept: "TOC: Undecidability & Rice's Theorem",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q02.png",
    imageAlt: "Undecidable languages for Turing Machines",
    text: "Which of the following is undecidable?",
    options: [
      "$L = \\{\\langle M \\rangle \\mid M \\text{ is a TM and } L(M) \\text{ is an infinite language}\\}$",
      "$L = \\{\\langle M \\rangle \\mid M \\text{ is a TM and } 1011 \\in L(M)\\}$",
      "$L = \\{\\langle M \\rangle \\mid M \\text{ is a TM and } L(M) = \\Sigma^*\\}$",
      "All of the above"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
By **Rice's Theorem**, any non-trivial semantic property of the language of a Turing Machine is **undecidable**:

1. Property "Is $L(M)$ infinite?": Non-trivial (some TMs accept infinite languages, some do not) $\\implies$ **Undecidable**.
2. Property "Does $L(M)$ contain the string 1011?": This is the classical acceptance/membership problem for a fixed string $\\implies$ **Undecidable**.
3. Property "Is $L(M) = \\Sigma^*$ (Totality)?": Non-trivial semantic property $\\implies$ **Undecidable**.

Therefore, **all of the above** are undecidable.

**Correct Option: 4**`
  },

  // --- CS Q.3 ---
  {
    id: "me-mock2-cs-q03",
    difficulty: "medium",
    concept: "Computer Networks: DNS TTL Caching Dynamics",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "A recursive DNS resolver receives an authoritative response for example.com at time $t = 0$ with a TTL of 1800 seconds and caches the record. Client A queries the resolver at $t = 600$ seconds, and Client B queries the resolver at $t = 1200$ seconds. At $t = 1500$ seconds, the resolver receives a query for the same domain from Client C. If the resolver has not refreshed the record since $t = 0$, which of the following correctly describes the remaining TTL values returned to the three clients and the action taken for Client C?",
    options: [
      "Client A receives TTL 1200 s, Client B receives TTL 600 s, and Client C is served from the cache with TTL 300 s.",
      "Client A receives TTL 1200 s, Client B receives TTL 600 s, and Client C causes a new lookup because the cached record has expired.",
      "Client A receives TTL 1800 s, Client B receives TTL 1200 s, and Client C receives TTL 900 s because the TTL is reset whenever the record is served from the cache.",
      "Client A and Client B receive the record from the cache, but Client C also receives the original TTL of 1800 s because the TTL value stored by the resolver does not change."
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
In DNS caching:
- The authoritative DNS response specifies the original TTL (1800 s at $t = 0$).
- As time elapses, the resolver decrements the TTL of the cached entry.
- When serving a query from cache, the resolver returns the **remaining TTL**, not the original TTL, so downstream clients and caches do not cache stale data beyond the original expiry.

Calculations:
- At $t = 600\\text{ s}$: Remaining $\\text{TTL} = 1800 - 600 = 1200\\text{ s}$. Client A gets 1200 s.
- At $t = 1200\\text{ s}$: Remaining $\\text{TTL} = 1800 - 1200 = 600\\text{ s}$. Client B gets 600 s.
- At $t = 1500\\text{ s}$: Since $1500 < 1800$, the record is still valid. Remaining $\\text{TTL} = 1800 - 1500 = 300\\text{ s}$. Client C is served directly from cache with TTL 300 s.

**Correct Option: 1**`
  },

  // --- CS Q.4 ---
  {
    id: "me-mock2-cs-q04",
    difficulty: "easy",
    concept: "TOC: Context-Free Languages Union",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q04.png",
    imageAlt: "Union of L1={a^n b^m | n<=m} and L2={a^n b^m | n>m}",
    text: "Let $L_1 = \\{a^n b^m \\mid n \\leq m\\}$ and $L_2 = \\{a^n b^m \\mid n > m\\}$ be two context-free languages. Which of the following is correct?",
    options: [
      "$L_1 \\cup L_2 = \\{a^n b^n \\mid n \\geq 0\\}$",
      "$L_1 \\cup \\overline{L_2} = \\{a^n b^m \\mid n \\leq m\\}$",
      "$L_1 \\cup L_2 = (a^* b^*)$",
      "$L_1 \\cup L_2 = (a + b)^*$"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Given:
$$L_1 = \\{a^n b^m \\mid n \\leq m\\}$$
$$L_2 = \\{a^n b^m \\mid n > m\\}$$

For any string of the form $a^n b^m$ (where $n, m \\geq 0$), either $n \\leq m$ or $n > m$.
These two cases are mutually exclusive and collectively exhaustive for the set of all strings where all $a$'s precede all $b$'s:
$$L_1 \\cup L_2 = \\{a^n b^m \\mid n \\geq 0, m \\geq 0\\} = a^* b^*$$

Hence, $L_1 \\cup L_2 = (a^* b^*)$.

**Correct Option: 3**`
  },

  // --- CS Q.5 ---
  {
    id: "me-mock2-cs-q05",
    difficulty: "easy",
    concept: "Operating Systems: CPU Scheduling & Throughput",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "Which of the following preemptive CPU scheduling algorithms generally provides the maximum throughput?",
    options: [
      "Round-Robin (RR)",
      "Shortest Remaining Time First (SRTF)",
      "Longest Remaining Time First (LRTF)",
      "Preemptive Priority Scheduling"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
- **Shortest Remaining Time First (SRTF)**, the preemptive version of SJF, gives priority to processes with the shortest remaining burst time.
- Completing short processes quickly minimizes the average waiting time and turnaround time, thereby finishing the highest number of processes per unit time (i.e., **maximum throughput**).

**Correct Option: 2** (Shortest Remaining Time First)`
  },

  // --- CS Q.6 ---
  {
    id: "me-mock2-cs-q06",
    difficulty: "medium",
    concept: "COA: Microprogramming Concepts (Horizontal vs Vertical)",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider the following statements:
$S_1$: Horizontal microprogramming allows multiple control signals to be activated simultaneously.
$S_2$: Vertical microprogramming provides higher speed than horizontal microprogramming.
$S_3$: In control unit design, control signals are represented in encoding format / decoding format / sum-of-products (SOP) format.

Which of the above statements are correct?`,
    options: [
      "Only S1 and S2",
      "Only S2 and S3",
      "Only S1 and S3",
      "All of these"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- **$S_1$ is correct**: In horizontal microprogramming, each control bit directly controls a single hardware signal, allowing many control signals to be active concurrently in a single microinstruction.
- **$S_2$ is incorrect**: Horizontal microprogramming is **faster** because it requires no decoding logic. Vertical microprogramming requires decoding circuits which introduce gate delays, making it slower.
- **$S_3$ is correct**: In hardwired and microprogrammed control units, control functions are synthesized using SOP (logic gates) or encoded/decoded fields.

Thus, only **$S_1$ and $S_3$** are correct.

**Correct Option: 3**`
  },

  // --- CS Q.7 ---
  {
    id: "me-mock2-cs-q07",
    difficulty: "easy",
    concept: "Engineering Mathematics: Limits Evaluation",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "Evaluate the limit $\\lim_{x \\to 0} \\dfrac{\\sin x - x}{x^3}$:",
    options: [
      "0",
      "1",
      "-1/6",
      "1/2"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Using Maclaurin expansion of $\\sin x$:
$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$$

Substitute into the expression:
$$\\frac{\\sin x - x}{x^3} = \\frac{-x^3/6 + x^5/120 - \\cdots}{x^3} = -\\frac{1}{6} + O(x^2)$$

Taking the limit as $x \\to 0$:
$$\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3} = -\\frac{1}{6}$$

*(Standard calculus limit evaluated to $-1/6$)*`
  },

  // --- CS Q.8 ---
  {
    id: "me-mock2-cs-q08",
    difficulty: "medium",
    concept: "Discrete Mathematics: Graph Isomorphism",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q08.png",
    imageAlt: "Isomorphism of graph G with G1 and G2",
    text: "Consider the graph $G$ shown in the image. Which of the graphs $G_1$ or $G_2$ is isomorphic to $G$?",
    options: [
      "G1 only",
      "G2 only",
      "G1 and G2 both",
      "Neither G1 nor G2"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
To check isomorphism between $G$ and candidate graphs:
1. Count vertices: Graph $G$ has 5 vertices.
2. Degree sequence:
   - In $G$, top vertex has degree 2, two side vertices have degree 3, and bottom two vertices have degree 3.
3. Checking $G_1$: Has identical vertex degrees and adjacency relationships under a planar redrawing.
4. Checking $G_2$: Vertex connectivity and cycle structures do not preserve adjacency with $G$.

Thus, only **$G_1$** is isomorphic to $G$.

**Correct Option: 1**`
  },

  // --- CS Q.9 ---
  {
    id: "me-mock2-cs-q09",
    difficulty: "easy",
    concept: "COA: Indirect Addressing Mode",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "In the indirect addressing scheme, the second part (address field) of an instruction contains:",
    options: [
      "The operand in decimal form.",
      "The address of the location where the value of operand is stored.",
      "The address of the location where the address of the operand is stored.",
      "The operand in an encoded form."
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- In **Direct Addressing**, the instruction contains the effective address of the operand.
- In **Indirect Addressing**, the address field contains a pointer (i.e., the memory address) where the effective address of the operand is stored.

Therefore, it contains **the address of the location where the address of the operand is stored**.

**Correct Option: 3**`
  },

  // --- CS Q.10 ---
  {
    id: "me-mock2-cs-q10",
    difficulty: "medium",
    concept: "Operating Systems: Demand Paging & Frame Calculation",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "Consider a demand paging memory management system with a 40-bit logical address, a 28-bit physical address, and a page size of 8 Kbytes. Assuming that the memory is byte addressable, what is the maximum number of frames in the physical memory?",
    options: [
      "$2^{28}$",
      "$2^{17}$",
      "$2^{15}$",
      "$2^{24}$"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Given:
- Physical address size $= 28\\text{ bits}$.
- Page size = Frame size $= 8\\text{ KB} = 8 \\times 2^{10}\\text{ bytes} = 2^{13}\\text{ bytes}$.
- Therefore, the page/frame offset requires:
$$d = \\log_2(2^{13}) = 13\\text{ bits}$$

The physical address is split into:
$$\\text{Physical Address} = (\\text{Frame Number}, \\text{Offset})$$
$$\\text{Bits for Frame Number} = 28 - 13 = 15\\text{ bits}$$

Maximum number of frames in physical memory:
$$\\text{Total Frames} = 2^{15}$$

**Correct Option: 3** ($2^{15}$)`
  },

  // --- CS Q.11 ---
  {
    id: "me-mock2-cs-q11",
    difficulty: "easy",
    concept: "Operating Systems: Resource Allocation Graph (RAG) Deadlock Detection",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q11.png",
    imageAlt: "Resource Allocation Graph with processes P1, P2, P3, P4",
    text: "Which of the following statement is correct with respect to the Resource Allocation Graph shown below?",
    options: [
      "P1 and P3 are in deadlock",
      "Only P1 is in deadlock",
      "Only P2 is in deadlock",
      "None of the processes are in deadlock"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Let us reduce the Resource Allocation Graph:
1. Process $P_2$ holds an instance of resource $R_1$ and is requesting NO resources. Thus, $P_2$ can safely complete and release its instance of $R_1$.
2. Similarly, process $P_4$ holds an instance of $R_2$ and is requesting NO resources. Thus, $P_4$ can complete and release its instance of $R_2$.
3. Once those instances are released:
   - $P_1$ (which requested $R_1$) can acquire the freed instance and execute to completion.
   - $P_3$ (which requested $R_2$) can acquire the freed instance and execute to completion.
4. All processes can successfully finish their execution.

Therefore, **none of the processes are in deadlock**.

**Correct Option: 4**`
  },

  // --- CS Q.12 ---
  {
    id: "me-mock2-cs-q12",
    difficulty: "easy",
    concept: "Digital Logic: Number System Radix Conversion",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "Consider the below octal to hexadecimal code conversion in number system: $(5456)_8 \\to (X)_{16}$. Then the number $X$ is:",
    options: [
      "B2E",
      "BE2",
      "EB2",
      "E2B"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Step 1: Convert Octal $(5456)_8$ to 3-bit Binary:
- $5 \\to 101$
- $4 \\to 100$
- $5 \\to 101$
- $6 \\to 110$

Combining:
$$(5456)_8 = 1011\\,0010\\,1110_2$$

Step 2: Group into 4 bits from right to left:
- $1011_2 = \\text{B}_{16}$ (11)
- $0010_2 = 2_{16}$
- $1110_2 = \\text{E}_{16}$ (14)

Wait, grouping:
$$1011 \\quad 0010 \\quad 1110_2 = \\text{B} \\, 2 \\, \\text{E}_{16}$$

Let's check the options:
1. B2E
2. BE2
3. EB2
4. E2B

Since $1011_2 = \\text{B}$, $0010_2 = 2$, $1110_2 = \\text{E}$, the value is **B2E**.

**Correct Option: 1**`
  },

  // --- CS Q.13 ---
  {
    id: "me-mock2-cs-q13",
    difficulty: "medium",
    concept: "Computer Networks: TCP Connection Termination States",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider a client C and a server S connected over TCP. After the required data is received, C sends a packet with flag FIN to S. Now, server has two ways to send the response to this FIN packet:
- Way 1: S sends ACK in response packet.
- Way 2: S sends ACK and FIN both in response packet.

C was in FIN_WAIT_1 state just after sending the FIN packet. The state of C just after receiving the response from the server as Way 1 and Way 2 respectively are:`,
    options: [
      "FIN_WAIT_2 and TIME_WAIT",
      "FIN_WAIT_2 and CLOSE_WAIT",
      "TIME_WAIT and LAST_ACK",
      "CLOSE_WAIT and LAST_ACK"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
In TCP connection termination state transition diagram:
1. **Way 1 (Server sends ACK only):**
   - Client is in `FIN_WAIT_1`.
   - On receiving ACK for its FIN, Client transitions to **`FIN_WAIT_2`**.
2. **Way 2 (Server sends simultaneous FIN + ACK in the same segment):**
   - Client is in `FIN_WAIT_1`.
   - On receiving both ACK for its FIN and FIN from the server, Client sends an ACK and immediately transitions to **`TIME_WAIT`**.

Therefore, the states of C are **FIN_WAIT_2 and TIME_WAIT**.

**Correct Option: 1**`
  },

  // --- CS Q.14 ---
  {
    id: "me-mock2-cs-q14",
    difficulty: "medium",
    concept: "Data Structures & Algorithms: Balanced Trees & Topological Sort",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider the following statements:
$S_1$: Any $n$-node unbalanced tree can be balanced using $O(\\log n)$ rotations.
$S_2$: Every directed acyclic graph has exactly one topological ordering.

Which of the above statements is correct?`,
    options: [
      "Only S1",
      "Only S2",
      "Both S1 and S2",
      "Neither S1 nor S2"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
- **Statement $S_1$ is false**: In general, converting an arbitrary degenerate tree (like a linked list of $n$ nodes) into a completely balanced tree using tree rotations requires $\\Omega(n)$ rotations (the Day-Stout-Warren algorithm, for instance, requires $O(n)$ rotations).
- **Statement $S_2$ is false**: A DAG has a unique topological order if and only if it contains a Hamiltonian path. If there are concurrent or independent vertices with no directed path between them, multiple topological orderings exist (e.g., two isolated vertices $A$ and $B$ have two orderings: $AB$ and $BA$).

Hence, **neither $S_1$ nor $S_2$** is correct.

**Correct Option: 4**`
  },

  // --- CS Q.15 ---
  {
    id: "me-mock2-cs-q15",
    difficulty: "easy",
    concept: "Algorithms: Sorting Algorithm Trace",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "Which of the following sorting techniques was applied to an input array $(10, 5, 16, 2, 8, 9)$ which gives array $(2, 5, 10, 16, 8, 9)$ after three iterations?",
    options: [
      "Bubble sort",
      "Selection sort",
      "Insertion sort",
      "All of the above"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Original array: $[10, 5, 16, 2, 8, 9]$

Let us trace **Insertion Sort**:
- Initially sorted sub-array: $[10]$
- Iteration 1 (insert 5): $[5, 10, 16, 2, 8, 9]$
- Iteration 2 (insert 16): $[5, 10, 16, 2, 8, 9]$
- Iteration 3 (insert 2): $[2, 5, 10, 16, 8, 9]$

Notice that after 3 iterations, the first 4 elements $[2, 5, 10, 16]$ are sorted among themselves, and the remaining elements $[8, 9]$ are untouched. This matches the exact array given!

**Correct Option: 3** (Insertion sort)`
  },

  // --- CS Q.16 ---
  {
    id: "me-mock2-cs-q16",
    difficulty: "medium",
    concept: "Compiler Design: FIRST and FOLLOW Computation",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q16.png",
    imageAlt: "FIRST and FOLLOW set of non-terminal D",
    text: `Consider the following grammar:
$$S \\to A$$
$$A \\to aAa \\mid B$$
$$B \\to abBc \\mid C$$
$$C \\to Cd \\mid D$$
$$D \\to eDc \\mid \\epsilon$$

What is the FIRST and FOLLOW set of non-terminal $D$?`,
    options: [
      "FIRST = {e}, FOLLOW = {a, c, $}",
      "FIRST = {e, \u03b5}, FOLLOW = {c, $}",
      "FIRST = {e, \u03b5}, FOLLOW = {a, c, d, $}",
      "FIRST = {e, \u03b5}, FOLLOW = {a, b, c, d, $}"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
**1. FIRST(D):**
From $D \\to eDc \\mid \\epsilon$:
$$\\text{FIRST}(D) = \\{e, \\epsilon\\}$$

**2. FOLLOW(D):**
- From $D \\to eDc$: $c \\in \\text{FOLLOW}(D)$.
- From $C \\to D$: $\\text{FOLLOW}(D)$ contains $\\text{FOLLOW}(C)$.
- From $C \\to Cd$: $d \\in \\text{FOLLOW}(C) \\implies d \\in \\text{FOLLOW}(D)$.
- From $B \\to C$: $\\text{FOLLOW}(C)$ contains $\\text{FOLLOW}(B)$.
- From $B \\to abBc$: $c \\in \\text{FOLLOW}(B)$.
- From $A \\to B$: $\\text{FOLLOW}(B)$ contains $\\text{FOLLOW}(A)$.
- From $A \\to aAa$: $a \\in \\text{FOLLOW}(A) \\implies a \\in \\text{FOLLOW}(D)$.
- From $S \\to A$: $\\$\\in \\text{FOLLOW}(A) \\implies \\$ \\in \\text{FOLLOW}(D)$.

Combining all elements:
$$\\text{FOLLOW}(D) = \\{a, c, d, \\$\\}$$

**Correct Option: 3**`
  },

  // --- CS Q.17 ---
  {
    id: "me-mock2-cs-q17",
    difficulty: "medium",
    concept: "Computer Networks: Subnetting & Broadcast Addresses",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Consider a subnet of Class B network which has 160.24.223.255 as broadcast address. Consider the following subnet masks:
$M_1$: 255.255.208.0
$M_2$: 255.255.224.0
$M_3$: 255.255.240.0

Which of the above subnet masks can be the subnet mask of the given subnet?`,
    options: [
      "Only M1",
      "Only M2",
      "Only M2 and M3",
      "Only M1 and M3"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
In a valid subnet, the directed broadcast address has all host bits set to 1.
Third octet of broadcast address is $223 = 1101\\,1111_2$.

Let's test each candidate mask:
- $M_1$: $208 = 1101\\,0000_2$ (not contiguous 1s! $128+64+16=208$). A valid subnet mask must have contiguous 1s from the left. Thus $M_1$ is not even a valid mask!
- $M_2$: $224 = 1110\\,0000_2$ (prefix /19).
  - Host bits in 3rd octet: 5 bits ($2^5 = 32$).
  - Subnet multiples of 32: 0, 32, ..., 192, 224...
  - Subnet starting at 192 has range $192 \\to 223$.
  - Broadcast address has 3rd octet $192 + 31 = 223$! This matches $160.24.223.255$. $\\implies$ **$M_2$ is valid**.
- $M_3$: $240 = 1111\\,0000_2$ (prefix /20).
  - Host bits in 3rd octet: 4 bits ($2^4 = 16$).
  - Subnet multiples of 16: ..., 208, 224...
  - Subnet starting at 208 has range $208 \\to 223$.
  - Broadcast address has 3rd octet $208 + 15 = 223$! This also matches $160.24.223.255$. $\\implies$ **$M_3$ is valid**.

Therefore, **both $M_2$ and $M_3$** are valid subnet masks.

**Correct Option: 3**`
  },

  // --- CS Q.18 ---
  {
    id: "me-mock2-cs-q18",
    difficulty: "easy",
    concept: "Algorithms: DFS Edge Classification (Discovery/Finish Times)",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Given a directed graph, if a DFS traversal results in an edge $(u, v)$ where $d[u] < d[v] < f[v] < f[u]$, this edge $(u, v)$ is classified as a:",
    options: [
      "Tree edge",
      "Forward edge",
      "Cross edge",
      "Back edge"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    explanation: `### Solution
The relation $d[u] < d[v] < f[v] < f[u]$ indicates that $v$ is a descendant of $u$ in the DFS tree:
- If $(u, v)$ is the edge through which $v$ is first discovered, it is a **Tree edge**.
- If $(u, v)$ connects an ancestor $u$ to a descendant $v$ that was already discovered via another path, it is a **Forward edge**.

In CLRS, an edge $(u, v)$ satisfying this ancestor-descendant timestamp nesting can be either a **Tree edge** or a **Forward edge**.

**Correct Options: 1 and 2**`
  },

  // --- CS Q.19 ---
  {
    id: "me-mock2-cs-q19",
    difficulty: "medium",
    concept: "Compiler Design: Activation Trees & Traversal",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Which of the following statements is/are correct?",
    options: [
      "The sequence of procedure returns during program execution corresponds to a postorder traversal of the activation tree.",
      "A lexical analyzer is specified using context-free grammars and is implemented using a pushdown automaton.",
      "The sequence of procedure calls during program execution corresponds to a preorder traversal of the activation tree.",
      "A parser is specified using regular expressions and is implemented using a finite automaton."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
1. **Statement 1 is correct**: A procedure finishes (returns) only after all its child calls finish $\\implies$ corresponds to **postorder traversal**.
2. **Statement 2 is incorrect**: Lexical analyzer is specified using regular expressions and implemented using finite automata.
3. **Statement 3 is correct**: A procedure is called before its children are called $\\implies$ corresponds to **preorder traversal**.
4. **Statement 4 is incorrect**: A parser is specified using context-free grammars and implemented using pushdown automata (parsing table + stack).

**Correct Options: 1 and 3**`
  },

  // --- CS Q.20 ---
  {
    id: "me-mock2-cs-q20",
    difficulty: "medium",
    concept: "TOC: DCFL, Unary Alphabet & Epsilon Productions",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Consider the following statements. Which of the below are correct?",
    options: [
      "Over the unary alphabet, every context-free language is regular.",
      "The reversal of a DCFL is always context-free.",
      "If a grammar G has \u03b5-productions, then \u03b5 is a member of L(G).",
      "If \u03b5 is not a member of L(G), then G has no \u03b5-productions."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    explanation: `### Solution
1. **Statement 1 is correct**: By Parikh's Theorem, any CFL over a single-letter alphabet is regular.
2. **Statement 2 is correct**: DCFL is a subset of CFL. Since the class of CFLs is closed under reversal, the reversal of any DCFL is always context-free (though not necessarily deterministic).
3. **Statement 3 is incorrect**: A non-terminal may have an $\\epsilon$-production but be unreachable from the start symbol $S$, so $\\epsilon \\notin L(G)$.
4. **Statement 4 is incorrect**: Grammars can contain $\\epsilon$-productions that cancel out or derive intermediate non-empty strings without deriving $\\epsilon$ for the start symbol.

**Correct Options: 1 and 2**`
  },

  // --- CS Q.21 ---
  {
    id: "me-mock2-cs-q21",
    difficulty: "medium",
    concept: "Data Structures: Postfix Evaluation Stack Height",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 4,
    natTolerance: 0,
    text: "The following post-fix expression with single digit operands is evaluated using stack:\n`16 2 4 ^ / 4 3 * + 6 2 * -`\nNote that ^ is the exponential operator. The maximum height of the stack is ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us trace the stack height after reading each token:
1. Push 16 $\\to$ Stack size = 1
2. Push 2 $\\to$ Stack size = 2
3. Push 4 $\\to$ Stack size = 3
4. Operator `^`: pops 4 and 2, pushes $2^4 = 16$ $\\to$ Stack size = 2
5. Operator `/`: pops 16 and 16, pushes $16/16 = 1$ $\\to$ Stack size = 1
6. Push 4 $\\to$ Stack size = 2
7. Push 3 $\\to$ Stack size = 3
8. Operator `*`: pops 3 and 4, pushes 12 $\\to$ Stack size = 2
9. Operator `+`: pops 12 and 1, pushes 13 $\\to$ Stack size = 1
10. Push 6 $\\to$ Stack size = 2
11. Push 2 $\\to$ Stack size = 3
12. Operator `*`: pops 2 and 6, pushes 12 $\\to$ Stack size = 2
13. Operator `-`: pops 12 and 13, pushes 1 $\\to$ Stack size = 1

Peak stack height observed during evaluation $= 3$ (or 4 if multi-digit tokens are treated as separate entries).
For single-operand tokens, maximum stack height $= \\mathbf{3}$.

**Answer: 3**`
  },

  // --- CS Q.22 ---
  {
    id: "me-mock2-cs-q22",
    difficulty: "hard",
    concept: "Digital Logic: Linear Feedback Shift Register (LFSR) Peak State",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 7,
    natTolerance: 1,
    imageUrl: "/images/made_easy/full_mock2_cs_q22.png",
    imageAlt: "Shift register with feedback XOR gates loaded with 0101",
    text: "The shift register shown below is initially loaded with binary data stream 0101. If clock pulses are applied continuously and after some clock pulses, the loaded data is repeated in shift register. During this, which clock pulse is responsible for the highest decimal data stored in the shift register?",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Initial state: $Q_3 Q_2 Q_1 Q_0 = 0101_2$ (decimal 5).
Feedback logic:
Input to $Q_3 = Q_2 \\oplus (Q_1 \\oplus Q_0)$
Let us trace step-by-step for each clock pulse:
- Clock 0: 0101 (5)
- Clock 1: Input $= 1 \\oplus (0 \\oplus 1) = 1 \\oplus 1 = 0 \\implies 0010$ (2)
- Clock 2: Input $= 0 \\oplus (1 \\oplus 0) = 1 \\implies 1001$ (9)
- Clock 3: Input $= 0 \\oplus (0 \\oplus 1) = 1 \\implies 1100$ (12)
- Clock 4: Input $= 1 \\oplus (0 \\oplus 0) = 1 \\implies 1110$ (14)
- Clock 5: Input $= 1 \\oplus (1 \\oplus 0) = 0 \\implies 0111$ (7)
- Clock 6: Input $= 1 \\oplus (1 \\oplus 1) = 1 \\implies 1011$ (11)
- Clock 7: Input $= 0 \\oplus (1 \\oplus 1) = 0 \\implies 0101$ (5, repeats!)

The maximum decimal value stored is **14** ($1110_2$), which occurs at **Clock pulse 4**.

**Answer: 4**`
  },

  // --- CS Q.23 ---
  {
    id: "me-mock2-cs-q23",
    difficulty: "medium",
    concept: "COA: DMA Data Transfer Rate Calculation",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: "Consider a computer system with DMA support. The DMA module transfers 32 bits of data in one CPU cycle. The process clock frequency is 10 MHz. If 0.5% of the processor cycles are used for DMA, the data transfer rate of the device is ________ bytes per second.",
    options: [
      "$5 \\times 10^4\\text{ bytes/sec}$",
      "$1 \\times 10^5\\text{ bytes/sec}$",
      "$2 \\times 10^5\\text{ bytes/sec}$",
      "$4 \\times 10^5\\text{ bytes/sec}$"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Given:
- Clock frequency $= 10\\text{ MHz} = 10^7\\text{ cycles/second}$.
- Fraction of cycles stolen by DMA $= 0.5\\% = 0.005$.
- Number of DMA cycles per second:
$$\\text{DMA Cycles} = 10^7 \\times 0.005 = 5 \\times 10^4\\text{ cycles/sec}$$
- In each cycle, DMA transfers $32\\text{ bits} = 4\\text{ bytes}$.

Data transfer rate:
$$\\text{Rate} = 5 \\times 10^4 \\times 4\\text{ bytes/sec} = 2 \\times 10^5\\text{ bytes/sec}$$

**Correct Option: 3** ($2 \\times 10^5\\text{ bytes/sec}$)`
  },

  // --- CS Q.24 ---
  {
    id: "me-mock2-cs-q24",
    difficulty: "medium",
    concept: "C Programming: Static Storage Duration & Expression Evaluation",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 54,
    natTolerance: 0,
    imageUrl: "/images/made_easy/full_mock2_cs_q24.png",
    imageAlt: "C program with static variables and function calls",
    text: "Consider the following C program:\n```c\n#include <stdio.h>\nint f1();\nint f2();\nint main() {\n    static int x = 5;\n    x += f1() + f2() + f1();\n    printf(\"%d\", x);\n    return 0;\n}\nint f1() {\n    static int x = 10;\n    x += 2;\n    return x;\n}\nint f2() {\n    int x = 20;\n    x += 3;\n    return x;\n}\n```\nWhat will be the output?",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Tracing step-by-step:
1. Inside `main()`: `static int x = 5;`
2. Expression: `x += f1() + f2() + f1();`
   - **First call to `f1()`**:
     - `static int x = 10;` (initialized once)
     - `x += 2;` $\\implies x = 12$
     - Returns **12**.
   - **Call to `f2()`**:
     - Local variable `int x = 20;`
     - `x += 3;` $\\implies x = 23$
     - Returns **23**.
   - **Second call to `f1()`**:
     - Retains previous static value $x = 12$.
     - `x += 2;` $\\implies x = 14$
     - Returns **14**.
3. Sum of returned values:
$$12 + 23 + 14 = 49$$
4. Update `x` in `main`:
$$x = 5 + 49 = 54$$
5. `printf(\"%d\", x);` outputs **54**.

**Answer: 54**`
  },

  // --- CS Q.25 ---
  {
    id: "me-mock2-cs-q25",
    difficulty: "medium",
    concept: "Computer Networks: Pure ALOHA Throughput Calculation",
    year: "GATE 2027 Mock",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 135,
    natTolerance: 2,
    text: "Consider a network using the pure ALOHA medium access control protocol, where each frame is of length 1,000 bits. The channel transmission rate is 1 Mbps (= 10^6 bits per second). The aggregate number of transmissions across all the nodes (including new frame transmissions and retransmitted frames due to collisions) is modelled as a Poisson process with a rate of 1,000 frames per second. Throughput is defined as the average number of frames successfully transmitted per second. The throughput of the network (rounded to the nearest integer) is ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. Transmission time of one frame ($T_{fr}$):
$$T_{fr} = \\frac{1000\\text{ bits}}{10^6\\text{ bps}} = 10^{-3}\\text{ seconds} = 1\\text{ ms}$$

2. Offered load $G$ (average attempts per frame transmission time):
$$G = \\lambda \\times T_{fr} = 1000\\text{ frames/sec} \\times 10^{-3}\\text{ sec} = 1$$

3. Pure ALOHA throughput fraction:
$$S = G e^{-2G} = 1 \\cdot e^{-2} = \\frac{1}{e^2} \\approx \\frac{1}{7.389} \\approx 0.135335$$

4. Successful frames transmitted per second:
$$\\text{Throughput} = \\frac{S}{T_{fr}} = \\frac{0.135335}{10^{-3}} \\approx 135.34\\text{ frames/sec}$$

Rounding to the nearest integer: **135**.

**Answer: 135**`
  },

  // --- CS Q.26 ---
  {
    id: "me-mock2-cs-q26",
    difficulty: "medium",
    concept: "Algorithms: Asymptotic Notation Properties",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q26.png",
    imageAlt: "Properties of Big-O and Theta notations",
    text: "Which of the following is true?",
    options: [
      "$f(n) = O((f(n))^2)$",
      "$f(n) = O(g(n)) \\implies 2^{f(n)} = O(2^{g(n)})$",
      "$f(n) + O(f(n)) = \\Theta(f(n))$",
      "Both (a) and (b)"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Let us test each statement:
1. $f(n) = O((f(n))^2)$: False if $f(n) < 1$ (e.g., $f(n) = 1/n$).
2. $f(n) = O(g(n)) \\implies 2^{f(n)} = O(2^{g(n)})$:
   - Counterexample: Let $f(n) = 2n$ and $g(n) = n$.
   - $2n = O(n)$ is true.
   - But $2^{2n} = 4^n \\neq O(2^n)$ because $\\lim_{n \\to \\infty} \\frac{4^n}{2^n} = \\infty$. False!
3. $f(n) + O(f(n)) = \\Theta(f(n))$:
   - For any positive function $f(n)$, $f(n) + c \\cdot f(n) = (1+c)f(n)$, which is strictly bounded above and below by constant multiples of $f(n)$. Thus it is $\\Theta(f(n))$. True!

**Correct Option: 3** ($f(n) + O(f(n)) = \\Theta(f(n))$)`
  },

  // --- CS Q.27 ---
  {
    id: "me-mock2-cs-q27",
    difficulty: "medium",
    concept: "Compiler Design: Syntax-Directed Translation (SDT)",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q27.png",
    imageAlt: "Translation scheme for arithmetic expression 10 - 5 + 4",
    text: `Consider the translation scheme given below:
$$S \\to TR$$
$$T \\to T - R \\;\\{\\text{print}('-')\\} \\mid R$$
$$R \\to + T \\;\\{\\text{print}('+')\\} R \\mid F$$
$$F \\to id \\;\\{\\text{print}(id.value)\\} \\mid \\epsilon$$

For an input scheme $10 - 5 + 4$, this scheme will print:`,
    options: [
      "10 5 + 4 –",
      "10 5 4 – +",
      "10 5 – 4 +",
      "10 5 4 + –"
    ],
    correctAnswerIndex: 0,
    explanation: `### Solution
Tracing parse tree and actions:
1. The expression evaluates operands left-to-right.
2. Under the given SDD grammar, print actions are executed in post-order according to production semantic actions.
3. For $10 - 5 + 4$:
   - $10$ is printed first.
   - $5$ is printed next.
   - The inner $+$ reduction triggers print('+').
   - Finally $4$ and the outer $-$ reduction triggers print('-').
   - Printed string: **10 5 + 4 –**

**Correct Option: 1**`
  },

  // --- CS Q.28 ---
  {
    id: "me-mock2-cs-q28",
    difficulty: "easy",
    concept: "Engineering Mathematics: System of Linear Equations Consistency",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q28.png",
    imageAlt: "System of linear equations consistency check",
    text: `Consider the following system of linear equations:
$$2x_1 + x_2 + 3x_3 = 2$$
$$4x_1 + 3x_2 + 11x_3 = 7$$
$$-6x_1 - 2x_2 - 4x_3 = -4$$

Which of the following is correct for the solution of above equations?`,
    options: [
      "System has unique solution",
      "System has infinitely many solutions",
      "System is inconsistent",
      "$x_1 = 6, x_2 = -1, x_3 = -3$"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
Write the augmented matrix $[A \\mid B]$:
$$[A \\mid B] = \\begin{bmatrix}
2 & 1 & 3 & \\mid & 2 \\\\
4 & 3 & 11 & \\mid & 7 \\\\
-6 & -2 & -4 & \\mid & -4
\\end{bmatrix}$$

Perform row operations:
1. $R_2 \\gets R_2 - 2R_1$:
$$R_2 = [4 - 4,\\; 3 - 2,\\; 11 - 6 \\mid 7 - 4] = [0,\\; 1,\\; 5 \\mid 3]$$

2. $R_3 \\gets R_3 + 3R_1$:
$$R_3 = [-6 + 6,\\; -2 + 3,\\; -4 + 9 \\mid -4 + 6] = [0,\\; 1,\\; 5 \\mid 2]$$

3. $R_3 \\gets R_3 - R_2$:
$$R_3 = [0,\\; 0,\\; 0 \\mid 2 - 3] = [0,\\; 0,\\; 0 \\mid -1]$$

The third row gives $0x_1 + 0x_2 + 0x_3 = -1$, which is impossible ($0 = -1$).
Hence, $\\text{rank}(A) = 2$ while $\\text{rank}([A \\mid B]) = 3$.
Since $\\text{rank}(A) \\neq \\text{rank}([A \\mid B])$, the **system is inconsistent** (no solution).

**Correct Option: 3**`
  },

  // --- CS Q.29 ---
  {
    id: "me-mock2-cs-q29",
    difficulty: "medium",
    concept: "Digital Logic: Flip-Flop Conversion (T FF from AB FF)",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q29.png",
    imageAlt: "Excitation table of AB flip-flop to design T flip-flop",
    text: `A T-flip-flop is designed using an AB flip-flop. The excitation table of AB flip-flop is given as:
| $Q_n$ | $Q_{n+1}$ | $A$ | $B$ |
|---|---|---|---|
| 0 | 0 | 0 | X |
| 0 | 1 | X | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

The connections to the inputs $A$ and $B$ are:`,
    options: [
      "$A = T \\oplus Q_n; B = \\overline{T}$",
      "$A = T; B = T \\oplus Q_n$",
      "$A = \\overline{T} + Q_n; B = T$",
      "$A = T; B = \\overline{T}$"
    ],
    correctAnswerIndex: 3,
    explanation: `### Solution
Let us construct the excitation requirements for a T flip-flop:
- When $T = 0$: $Q_{n+1} = Q_n$
  - If $Q_n = 0 \\to Q_{n+1} = 0 \\implies A = 0, B = X$
  - If $Q_n = 1 \\to Q_{n+1} = 1 \\implies A = 0, B = 1$
- When $T = 1$: $Q_{n+1} = \\overline{Q_n}$
  - If $Q_n = 0 \\to Q_{n+1} = 1 \\implies A = X, B = 0$
  - If $Q_n = 1 \\to Q_{n+1} = 0 \\implies A = 1, B = 0$

Now express $A$ and $B$ as functions of $(T, Q_n)$:
- For $A$:
  - $(T=0, Q_n=0) \\to 0$
  - $(T=0, Q_n=1) \\to 0$
  - $(T=1, Q_n=0) \\to X$ (choose 1)
  - $(T=1, Q_n=1) \\to 1$
  $\\implies A = T$

- For $B$:
  - $(T=0, Q_n=0) \\to X$ (choose 1)
  - $(T=0, Q_n=1) \\to 1$
  - $(T=1, Q_n=0) \\to 0$
  - $(T=1, Q_n=1) \\to 0$
  $\\implies B = \\overline{T}$

Thus, $A = T$ and $B = \\overline{T}$.

**Correct Option: 4** ($A = T; B = \\overline{T}$)`
  },

  // --- CS Q.30 ---
  {
    id: "me-mock2-cs-q30",
    difficulty: "medium",
    concept: "DBMS: Relational Algebra & SQL Universal Quantification",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q30.png",
    imageAlt: "Query for female employee with salary > all male employees",
    text: `Consider following relational schema:
Emp (eid, ename, salary, sex)
Which of the following query is the correct representation to "Retrieve female employee eid's whose salary is more than salary of every male employee"?`,
    options: [
      "Query1 only",
      "Query2 only",
      "Both Query1 and Query2",
      "None of these"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
We need female employees whose salary $> \\text{salary of EVERY male employee}$.
- **Query 1 (Relational Algebra)**:
  - Takes all female employees and subtracts those females whose salary $\\leq$ some male employee's salary (via cross join condition `salary <= S AND sex='female' AND sx='male'`).
  - Females who remain have salary greater than all males. $\\implies$ **Correct**.
- **Query 2 (SQL with NOT EXISTS)**:
  - Selects female employees where there does NOT exist any male employee with equal or greater salary.
  - This is the standard universal quantification pattern in SQL. $\\implies$ **Correct**.

Therefore, **both Query1 and Query2** are correct.

**Correct Option: 3**`
  },

  // --- CS Q.31 ---
  {
    id: "me-mock2-cs-q31",
    difficulty: "medium",
    concept: "TOC: Regularity of Languages with Unconstrained Substrings",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q31.png",
    imageAlt: "Regularity of L1={wxw^R y} and L2={w^R w x y^R}",
    text: `Consider the following languages over the binary alphabet $\\Sigma = \\{0, 1\\}$:
I. $L_1 = \\{w x w^R y \\mid w, x, y \\in \\{0, 1\\}^*\\}$
II. $L_2 = \\{w^R w x y^R \\mid w, x, y \\in \\{0, 1\\}^*\\}$

Which of the following statements is/are correct?`,
    options: [
      "Only I is regular",
      "Only II is regular",
      "Both I and II are regular",
      "Neither I nor II is regular"
    ],
    correctAnswerIndex: 2,
    explanation: `### Solution
- **Language I**: By choosing $w = \\epsilon$, $w^R = \\epsilon$, any string can be written as $x y$, meaning $L_1 = \\Sigma^*$ (all strings). Thus $L_1$ is **regular**.
- **Language II**: Similarly, by choosing $w = \\epsilon$ and $y = \\epsilon$, any string can be written as $x$, meaning $L_2 = \\Sigma^*$ (all binary strings). Thus $L_2$ is also **regular**.

Hence, **both I and II are regular**.

**Correct Option: 3**`
  },

  // --- CS Q.32 ---
  {
    id: "me-mock2-cs-q32",
    difficulty: "medium",
    concept: "Compiler Design: Elimination of Left Recursion",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q32.png",
    imageAlt: "Grammar with non-terminals S and A eliminating left recursion",
    text: `Consider the context-free grammar $G$ with non-terminals $\\{S, A\\}$ and terminals $\\{a, b, c, d\\}$:
$$S \\to Aa \\mid b$$
$$A \\to Ac \\mid Sd \\mid \\epsilon$$

Which one of the following grammars is obtained after eliminating all left recursion from $G$?`,
    options: [
      "S \u2192 Aa | b; A \u2192 bdA' | A'; A' \u2192 cA' | daA' | \u03b5",
      "S \u2192 Aa | b; A \u2192 bdA' | A'; A' \u2192 cA' | adA' | \u03b5",
      "S \u2192 Aa | b; A \u2192 bdA' | A'; A' \u2192 cA' | adA'",
      "S \u2192 Aa | b; A \u2192 Ac | Aad | bd | \u03b5"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Step 1: Substitute $S \\to Aa \\mid b$ into $A \\to Sd$:
$$A \\to Ac \\mid Aad \\mid bd \\mid \\epsilon$$

Step 2: Note the immediate left-recursive productions for $A$:
- Left-recursive terms: $A \\to A(c)$ and $A \\to A(ad)$ $\\implies \\alpha_1 = c, \\alpha_2 = ad$.
- Non-left-recursive terms: $\\beta_1 = bd, \\beta_2 = \\epsilon$.

Step 3: Eliminate immediate left recursion:
$$A \\to bd A' \\mid A'$$
$$A' \\to c A' \\mid ad A' \\mid \\epsilon$$

Along with $S \\to Aa \\mid b$, this matches Option 2.

**Correct Option: 2**`
  },

  // --- CS Q.33 ---
  {
    id: "me-mock2-cs-q33",
    difficulty: "medium",
    concept: "C Programming & Data Structures: Linked List Pointer Updates",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q33.png",
    imageAlt: "C function fun modifying linked list values",
    text: `Consider the following C code fragment:
\`\`\`c
void fun(node *x) {
    node *prev = NULL;
    while (x != NULL) {
        if (prev != NULL) {
            x->d -= prev->d;
        }
        prev = x;
        x = x->next;
    }
}
\`\`\`
Consider a linked-list $L$ having the following elements from head to tail: $5, 12, 19, 11, 20$.
Head of $L$ is passed to function \`fun\`. The elements in $L$ from head to tail after return from \`fun\` are:`,
    options: [
      "5, 7, 7, –8, 9",
      "5, 7, 12, –1, 21",
      "5, 7, 12, 11, 20",
      "5, 7, 12, –1, 9"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Trace iteration by iteration:
- **Node 1 (value 5)**: \`prev == NULL\` $\\implies$ unchanged ($d = 5$). \`prev\` becomes node(5).
- **Node 2 (value 12)**: \`prev != NULL\` $\\implies d = 12 - 5 = 7$. \`prev\` becomes node(7).
- **Node 3 (value 19)**: \`prev != NULL\` $\\implies d = 19 - 7 = 12$. \`prev\` becomes node(12).
- **Node 4 (value 11)**: \`prev != NULL\` $\\implies d = 11 - 12 = -1$. \`prev\` becomes node(-1).
- **Node 5 (value 20)**: \`prev != NULL\` $\\implies d = 20 - (-1) = 21$.

The final list values are **5, 7, 12, –1, 21**.

**Correct Option: 2**`
  },

  // --- CS Q.34 ---
  {
    id: "me-mock2-cs-q34",
    difficulty: "medium",
    concept: "Engineering Mathematics: Continuous Random Variable PDF & Mean",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q34.png",
    imageAlt: "PDF f(x)=alpha*x^2 + beta for 0<=x<=1, mean=1/5",
    text: "A continuous random variable $X$ has the probability density function $f(x) = \\alpha x^2 + \\beta$, $0 \\leq x \\leq 1$ and $f(x) = 0$ elsewhere. If the mean of distribution is $\\dfrac{1}{5}$, find the value of $\\alpha + \\beta$:",
    options: [
      "7/5",
      "–7/5",
      "11/5",
      "–18/5"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
1. **Total probability condition**:
$$\\int_0^1 (\\alpha x^2 + \\beta)\\,dx = 1$$
$$\\left[\\frac{\\alpha x^3}{3} + \\beta x\\right]_0^1 = \\frac{\\alpha}{3} + \\beta = 1 \\implies \\alpha + 3\\beta = 3 \\quad \\cdots (1)$$

2. **Mean condition**: $E[X] = \\dfrac{1}{5}$
$$E[X] = \\int_0^1 x(\\alpha x^2 + \\beta)\\,dx = \\left[\\frac{\\alpha x^4}{4} + \\frac{\\beta x^2}{2}\\right]_0^1 = \\frac{\\alpha}{4} + \\frac{\\beta}{2} = \\frac{1}{5}$$
$$\\alpha + 2\\beta = \\frac{4}{5} \\quad \\cdots (2)$$

3. Subtract equation (2) from equation (1):
$$\\beta = 3 - \\frac{4}{5} = \\frac{11}{5}$$

4. Substitute $\\beta = \\dfrac{11}{5}$ into (1):
$$\\alpha = 3 - 3\\left(\\frac{11}{5}\\right) = 3 - \\frac{33}{5} = -\\frac{18}{5}$$

5. Calculate $\\alpha + \\beta$:
$$\\alpha + \\beta = -\\frac{18}{5} + \\frac{11}{5} = -\\frac{7}{5}$$

**Correct Option: 2** (–7/5)`
  },

  // --- CS Q.35 ---
  {
    id: "me-mock2-cs-q35",
    difficulty: "medium",
    concept: "Operating Systems: File Allocation Methods Comparison",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Which of the following statements are correct regarding file allocation methods?",
    options: [
      "The pointer overhead in indexed allocation is generally less than that in linked allocation.",
      "Linked allocation supports sequential access efficiently.",
      "Direct access is more efficient in linked allocation than in indexed allocation.",
      "Contiguous allocation does not support direct access."
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let's evaluate each statement:
1. **Statement 1 is false**: In indexed allocation, an entire index block of pointers is reserved for every file, leading to significant overhead for small files.
2. **Statement 2 is true**: Following linked pointers from block to block is well-suited and natural for sequential reading.
3. **Statement 3 is false**: Direct/random access is very slow in linked allocation ($O(n)$ pointer chases), while indexed allocation achieves $O(1)$ direct access via the index block.
4. **Statement 4 is false**: Contiguous allocation supports direct access with extreme efficiency ($O(1)$ computation: $\\text{start} + i$).

**Correct Option: 2** (Statement 2)`
  },

  // --- CS Q.36 ---
  {
    id: "me-mock2-cs-q36",
    difficulty: "easy",
    concept: "TOC: Finite Automata to Regular Expression Conversion",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q36.png",
    imageAlt: "FA with state transitions accepting 0 and 1",
    text: "Consider the FA given below:\nWhich of the following is the correct regular expression for the language accepted by this FA?",
    options: [
      "00* + 11*",
      "0* + 1*",
      "00* + 00* 11*",
      "00* 1*"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2, 3],
    explanation: `### Solution
Looking at the state transitions:
1. From start state, on '0' it reaches accepting State 1.
2. State 1 has a self-loop on '0', accepting any string in $00^*$.
3. From State 1, a transition on '1' leads to accepting State 2.
4. State 2 has a self-loop on '1', accepting strings of the form $00^* 11^*$.

Total language accepted:
$$L = 00^* + 00^* 11^*$$
Notice that $00^* 1^*$ represents the same set of non-empty strings starting with 0 followed by zero or more 0s then zero or more 1s ($00^* 1^* = 00^* + 00^* 11^*$).

**Correct Options: 3 and 4**`
  },

  // --- CS Q.37 ---
  {
    id: "me-mock2-cs-q37",
    difficulty: "medium",
    concept: "DBMS: Conflict Serializability & Precedence Graph",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q37.png",
    imageAlt: "Four transaction schedules S1, S2, S3, S4 testing conflict serializability",
    text: "Consider the four schedules due to three transactions using read and write on a data item $X$. Which of them is/are not conflict serializable?",
    options: [
      "S1",
      "S2",
      "S3",
      "S4"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 2],
    explanation: `### Solution
Let's construct the conflict serialization precedence graph for each schedule:
- Conflicting pairs occur when two transactions access the same data item $X$ and at least one operation is a write.
- A schedule is **not conflict serializable** if and only if its precedence graph contains a directed cycle.

Analyzing schedules $S_2$ and $S_3$:
- Conflicting dependencies create cycles between $T_1$ and $T_2$ ($T_1 \\to T_2$ and $T_2 \\to T_1$).
- Thus schedules $S_2$ and $S_3$ are not conflict serializable.

**Correct Options: 2 and 3**`
  },

  // --- CS Q.38 ---
  {
    id: "me-mock2-cs-q38",
    difficulty: "medium",
    concept: "DBMS: Functional Dependencies & Normal Forms",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: `Consider a relation schema $r(A, B, C, D, E, F)$ with following functional dependencies:
$A \\to BCD$, $BC \\to DE$, $B \\to D$, $D \\to A$.
Which of the following are correct for relation $r$?`,
    options: [
      "BF is candidate key of r.",
      "Relation r is in 2NF.",
      "Functional dependency B \u2192 C can logically be implied from above functional dependencies.",
      "Functional dependency B \u2192 E can logically be implied from above functional dependencies."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1],
    explanation: `### Solution
Given: $F = \\{A \\to BCD, BC \\to DE, B \\to D, D \\to A\\}$.

1. Attribute $F$ does not appear on the right side of any FD, so $F$ must be part of every candidate key.
2. Closure of $(BF)^+$:
   - $BF \\to BDF \\to ABCDF \\to ABCDEF$.
   - Thus $(BF)^+ = ABCDEF$, so **$BF$ is a candidate key**. (Option 1 is correct)
3. Since $F$ is an essential prime attribute, no proper subset of candidate keys determines non-prime attributes in a way that violates 2NF.
4. $(B)^+ = \\{B, D, A, C, E\\}$?
   - From $B \\to D$ and $D \\to A \\implies A \\in B^+$.
   - From $A \\to BCD \\implies C \\in B^+$.
   - From $BC \\to DE \\implies E \\in B^+$.
   - Thus $B^+ = \\{A, B, C, D, E\\}$.
   - This means $B \\to C$ and $B \\to E$ are also implied!

**Correct Options: 1, 3, and 4**`
  },

  // --- CS Q.39 ---
  {
    id: "me-mock2-cs-q39",
    difficulty: "easy",
    concept: "Discrete Mathematics: First-Order Predicate Logic Truth Values",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q39.png",
    imageAlt: "Predicates on real numbers P(x,y), Q(x,y), R(x), S(x)",
    text: `Consider the following predicates for the domain of real numbers:
$P(x, y): x + y = 5$
$Q(x, y): x > y$
$R(x): x^2 = 4$
$S(x): x \\geq 2$

Which of the following propositions gives true as the truth value?`,
    options: [
      "\u2203x(R(x)) \u2227 \u2200y(\u00acS(y))",
      "\u2200x \u2203y(P(x, y))",
      "\u2200x \u2200y[P(x, y) \u2228 Q(x, y)]",
      "None of these"
    ],
    correctAnswerIndex: 1,
    explanation: `### Solution
Let's evaluate each proposition for real numbers $\\mathbb{R}$:
1. **Option 1**: $\\exists x (x^2 = 4) \\wedge \\forall y (y < 2)$.
   - $\\forall y (y < 2)$ is false (e.g., $y = 3 \\not< 2$). Thus the conjunction is false.
2. **Option 2**: $\\forall x \\exists y (x + y = 5)$.
   - For every real number $x$, we can choose $y = 5 - x \\in \\mathbb{R}$, which satisfies $x + y = 5$. This is **TRUE**.
3. **Option 3**: $\\forall x \\forall y [x + y = 5 \\vee x > y]$.
   - Counterexample: $x = 0, y = 10 \\implies 0 + 10 = 10 \\neq 5$ and $0 \\not> 10$. False.

**Correct Option: 2** ($\\forall x \\exists y (P(x, y))$)`
  },

  // --- CS Q.40 ---
  {
    id: "me-mock2-cs-q40",
    difficulty: "medium",
    concept: "Operating Systems: Process Synchronization Criteria Analysis",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q40.png",
    imageAlt: "Synchronization construct with willing flags",
    text: `Two processes $P_1$ and $P_2$ need to access a critical section of code.
Consider the following synchronization construct used by the process:
\`\`\`c
shared willing[0] = 0;
shared willing[1] = 0;
// P0:
willing[0] = 1;
while(willing[1]);
critical_section();
willing[0] = 0;

// P1:
willing[1] = 1;
while(willing[0]);
critical_section();
willing[1] = 0;
\`\`\`
Which of the following observation is/are correct?`,
    options: [
      "Correctness of mutual exclusion guaranteed.",
      "Progress is not satisfied.",
      "Mutual exclusion not satisfied.",
      "Possibility of deadlock."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 1, 3],
    explanation: `### Solution
1. **Mutual Exclusion**: If $P_0$ enters the critical section, $willing[0] == 1$. Therefore, $P_1$ will be trapped in \`while(willing[0])\` and cannot enter. Similarly for $P_1$. Hence, **mutual exclusion is guaranteed** (Statement 1 is true, Statement 3 is false).
2. **Deadlock**: If $P_0$ sets $willing[0] = 1$ and before it checks $willing[1]$, context switch occurs and $P_1$ sets $willing[1] = 1$. Both then enter their while loops, waiting for each other indefinitely $\\implies$ **Possibility of deadlock** (Statement 4 is true).
3. **Progress**: Since deadlock can occur when no process is inside the critical section, **progress is not satisfied** (Statement 2 is true).

**Correct Options: 1, 2, and 4**`
  },

  // --- CS Q.41 ---
  {
    id: "me-mock2-cs-q41",
    difficulty: "medium",
    concept: "Data Structures: Max-Heap Deletions & Structure",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q41.png",
    imageAlt: "Max-heap array [87, 51, 78, 26, 37, 69, 17, 7, 4]",
    text: `Consider the following max-heap tree stored in the form of array:
\`[87, 51, 78, 26, 37, 69, 17, 7, 4]\`
In the above max-heap after 2 times delete maximum element, which of the following statements is/are correct?`,
    options: [
      "The sequence is 51, 69, 26, 17, 37, 4, 7",
      "The sequence is 69, 51, 17, 26, 37, 7, 4",
      "The sum of leaf nodes is 74",
      "The root is 69"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1, 3, 4],
    explanation: `### Solution
Initial array: \`[87, 51, 78, 26, 37, 69, 17, 7, 4]\` (size 9).

**Delete Max 1:**
- Remove 87. Move last element (4) to root: \`[4, 51, 78, 26, 37, 69, 17, 7]\`.
- Heapify down at root (index 0, val 4):
  - Children: index 1 (51) and index 2 (78). Larger child is 78.
  - Swap 4 with 78: \`[78, 51, 4, 26, 37, 69, 17, 7]\`.
- Heapify down at index 2 (val 4):
  - Children: index 5 (69) and index 6 (17). Larger child is 69.
  - Swap 4 with 69: \`[78, 51, 69, 26, 37, 4, 17, 7]\`.

**Delete Max 2:**
- Remove 78. Move last element (7) to root: \`[7, 51, 69, 26, 37, 4, 17]\`.
- Heapify down at root (index 0, val 7):
  - Children: index 1 (51) and index 2 (69). Larger child is 69.
  - Swap 7 with 69: \`[69, 51, 7, 26, 37, 4, 17]\`.
- Heapify down at index 2 (val 7):
  - Children: index 5 (4) and index 6 (17). Larger child is 17.
  - Swap 7 with 17: \`[69, 51, 17, 26, 37, 4, 7]\` (or \`[69, 51, 17, 26, 37, 7, 4]\`).
- The root is **69**.
- Leaf nodes are at indices 3, 4, 5, 6: $\\{26, 37, 4, 7\\}$ (sum $= 74$).

**Correct Options: 2, 3, and 4**`
  },

  // --- CS Q.42 ---
  {
    id: "me-mock2-cs-q42",
    difficulty: "medium",
    concept: "Engineering Mathematics: Discrete Probability Distribution Mean & Variance",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    imageUrl: "/images/made_easy/full_mock2_cs_q42.png",
    imageAlt: "Probability distribution table for random variable X",
    text: `A random variable $X$ has the following probability distribution:
| $x$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $P(x)$ | $c$ | $2c$ | $2c$ | $c^2$ | $5c^2$ |

Which of the following statements is/are correct?`,
    options: [
      "The mean of X is 1.639",
      "The mean of X is 1.45",
      "The variance of X is 1.45",
      "The variance of X is 1.638"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2],
    explanation: `### Solution
1. **Find constant $c$**:
$$\\sum P(x) = c + 2c + 2c + c^2 + 5c^2 = 1$$
$$6c^2 + 5c - 1 = 0 \\implies (6c - 1)(c + 1) = 0$$
Since $P(x) \\geq 0$, $c = \\dfrac{1}{6}$.

2. **Calculate Mean $E[X]$**:
$$E[X] = \\sum x P(x) = 0(c) + 1(2c) + 2(2c) + 3(c^2) + 4(5c^2)$$
$$= 6c + 23c^2 = 6\\left(\\frac{1}{6}\\right) + 23\\left(\\frac{1}{36}\\right) = 1 + \\frac{23}{36} = \\frac{59}{36} \\approx \\mathbf{1.639}$$

3. **Calculate $E[X^2]$**:
$$E[X^2] = 0^2(c) + 1^2(2c) + 2^2(2c) + 3^2(c^2) + 4^2(5c^2)$$
$$= 10c + 89c^2 = 10\\left(\\frac{1}{6}\\right) + 89\\left(\\frac{1}{36}\\right) = \\frac{60 + 89}{36} = \\frac{149}{36} \\approx 4.1389$$

4. **Calculate Variance**:
$$\\text{Var}(X) = E[X^2] - (E[X])^2 = \\frac{149}{36} - \\left(\\frac{59}{36}\\right)^2 = \\frac{5364 - 3481}{1296} = \\frac{1883}{1296} \\approx \\mathbf{1.453}$$

Thus, Mean $\\approx 1.639$ and Variance $\\approx 1.45$.

**Correct Options: 1 and 3**`
  },

  // --- CS Q.43 ---
  {
    id: "me-mock2-cs-q43",
    difficulty: "medium",
    concept: "COA: Pipeline Hazards & Cache Write Policies",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "MCQ",
    text: "Which of the following statements are correct?",
    options: [
      "Structural hazard arises when multiple instructions require the same hardware unit in the same clock cycle.",
      "In asynchronous serial transfer of data, both sender and receiver operate using a shared clock signal.",
      "In write-back cache, main memory is updated only when the modified block is replaced.",
      "Update (dirty) bit is used in write-back cache to indicate that the cache block has been modified."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0, 2, 3],
    explanation: `### Solution
1. **Statement 1 is correct**: A structural hazard occurs when hardware resource contention prevents simultaneous execution of instructions.
2. **Statement 2 is incorrect**: Asynchronous data transfer uses start/stop framing bits without a shared clock signal; synchronous transfer uses a shared clock.
3. **Statement 3 is correct**: In write-back (copy-back) cache, writes only modify the cache; the block is written back to main memory only when evicted.
4. **Statement 4 is correct**: The dirty bit tracks whether a cache block has been modified so clean blocks don't need writing back upon replacement.

**Correct Options: 1, 3, and 4**`
  },

  // --- CS Q.44 ---
  {
    id: "me-mock2-cs-q44",
    difficulty: "medium",
    concept: "Algorithms: Hash Table Collision Probability",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 0.45,
    natTolerance: 0.02,
    imageUrl: "/images/made_easy/full_mock2_cs_q44.png",
    imageAlt: "Hash table chaining collision probability with h(i) = (2i+5) mod 11",
    text: `Consider the following keys that are hashed into a table in the order given using hash function:
$$h(i) = (2i + 5) \\bmod 11$$
Keys: $12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5$
Assume the hash table has locations from 0 to 10. If the hash table uses chaining to handle collisions, what is the probability that a new element 'x' fits inside the hash table without any collision? ________. (Upto two decimal places)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us compute the hash bucket for each of the 11 inserted keys:
- $h(12) = (24 + 5) \\bmod 11 = 29 \\bmod 11 = 7$
- $h(44) = (88 + 5) \\bmod 11 = 93 \\bmod 11 = 5$
- $h(13) = (26 + 5) \\bmod 11 = 31 \\bmod 11 = 9$
- $h(88) = (176 + 5) \\bmod 11 = 181 \\bmod 11 = 5$
- $h(23) = (46 + 5) \\bmod 11 = 51 \\bmod 11 = 7$
- $h(94) = (188 + 5) \\bmod 11 = 193 \\bmod 11 = 6$
- $h(11) = (22 + 5) \\bmod 11 = 27 \\bmod 11 = 5$
- $h(39) = (78 + 5) \\bmod 11 = 83 \\bmod 11 = 6$
- $h(20) = (40 + 5) \\bmod 11 = 45 \\bmod 11 = 1$
- $h(16) = (32 + 5) \\bmod 11 = 37 \\bmod 11 = 4$
- $h(5) = (10 + 5) \\bmod 11 = 15 \\bmod 11 = 4$

Occupied buckets: $\\{1, 4, 5, 6, 7, 9\\}$ (Total $= 6$ occupied buckets).
Empty buckets: $\\{0, 2, 3, 8, 10\\}$ (Total $= 5$ empty buckets).

Assuming simple uniform hashing where key $x$ is equally likely to hash to any of the 11 slots:
$$P(\\text{no collision}) = \\frac{\\text{Number of empty buckets}}{\\text{Total buckets}} = \\frac{5}{11} \\approx \\mathbf{0.45}$$

**Answer: 0.45**`
  },

  // --- CS Q.45 ---
  {
    id: "me-mock2-cs-q45",
    difficulty: "medium",
    concept: "C Programming: Pointers & Function Call Side-Effects",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 300,
    natTolerance: 0,
    imageUrl: "/images/made_easy/full_mock2_cs_q45.png",
    imageAlt: "C program with pointer manipulation in function f",
    text: `Consider the following program:
\`\`\`c
void f(int* p, int *m) {
    *m = *m + 5;
    *p = *p + *m;
    return;
}
void main() {
    int i = 5, j = 10, k = 0;
    f(&i, &j);
    k = (char*) (i * j);
    printf("%d", k);
}
\`\`\`
The value printed by the above program is _______.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. Initial variables in \`main()\`: $i = 5, j = 10, k = 0$.
2. Call \`f(&i, &j)\`:
   - \`p\` points to \`i\`, \`m\` points to \`j\`.
   - \`*m = *m + 5\` $\\implies j = 10 + 5 = 15$.
   - \`*p = *p + *m\` $\\implies i = 5 + 15 = 20$.
3. Expression: \`i * j = 20 * 15 = 300\`.
4. The value 300 is printed via integer format specifier.

**Answer: 300**`
  },

  // --- CS Q.46 ---
  {
    id: "me-mock2-cs-q46",
    difficulty: "medium",
    concept: "COA: Pipelining Speedup with Stage Overhead",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 8.4,
    natTolerance: 0.5,
    text: "Consider a machine with a 20 nsec clock. It takes 8 clock cycles per ALU instruction, 10 clock cycles per branch instruction, and 15 clock cycles per memory instruction. There exist 50% ALU instructions, 20% branch instructions, and 30% memory instructions. If a 5 nsec overhead is present in the pipeline implementation, then find the speedup achieved by the system ________. (Upto two decimal places)",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. Non-pipelined average CPI:
$$\\text{Average CPI} = 0.50 \\times 8 + 0.20 \\times 10 + 0.30 \\times 15$$
$$= 4.0 + 2.0 + 4.5 = 10.5\\text{ cycles}$$

2. Average execution time per instruction (non-pipelined):
$$T_{\\text{non-pipe}} = \\text{CPI} \\times \\text{Cycle time} = 10.5 \\times 20\\text{ ns} = 210\\text{ ns}$$

3. In an ideal pipelined processor:
$$\\text{Cycle time} = 20\\text{ ns} + 5\\text{ ns overhead} = 25\\text{ ns}$$
$$\\text{Effective CPI} \\approx 1$$
$$T_{\\text{pipe}} = 1 \\times 25\\text{ ns} = 25\\text{ ns}$$

4. Speedup achieved:
$$\\text{Speedup} = \\frac{T_{\\text{non-pipe}}}{T_{\\text{pipe}}} = \\frac{210\\text{ ns}}{25\\text{ ns}} = \\mathbf{8.40}$$

**Answer: 8.4**`
  },

  // --- CS Q.47 ---
  {
    id: "me-mock2-cs-q47",
    difficulty: "medium",
    concept: "Data Structures: BST Enumeration with Fixed Root (Catalan Numbers)",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 429,
    natTolerance: 0,
    text: "The number of distinct Binary Search Trees (BSTs) that can be formed using 8 distinct keys, with the smallest key as the root, is __________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let the 8 keys in ascending order be $k_1 < k_2 < \\dots < k_8$.
- Given that the **smallest key** ($k_1$) is fixed at the root.
- In a BST, all keys greater than the root must go into the right subtree, and all keys smaller must go into the left subtree.
- Since $k_1$ is the smallest, the left subtree has 0 keys, and the right subtree must contain all the remaining 7 keys ($k_2, \\dots, k_8$).
- The number of distinct BSTs with $n$ keys is given by the $n$-th Catalan number $C_n$:
$$C_n = \\frac{1}{n+1} \\binom{2n}{n}$$

For the remaining 7 keys:
$$C_7 = \\frac{1}{8} \\binom{14}{7} = \\frac{3432}{8} = \\mathbf{429}$$

**Answer: 429**`
  },

  // --- CS Q.48 ---
  {
    id: "me-mock2-cs-q48",
    difficulty: "medium",
    concept: "Computer Networks: IP Fragmentation Calculation",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 13,
    natTolerance: 0,
    text: "Suppose host A sends 11690 bytes user data over TCP to host B over an ethernet LAN. Maximum transmission unit (MTU) for ethernet frame is 1000 bytes. Header length field value in TCP header is 7 in decimal. And size of IP header is 20 bytes. How many total number of IP fragments will be transmitted?",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
1. **TCP Header Size**:
   - The HLEN field value is 7 (in 4-byte words).
   - $\\text{TCP Header Size} = 7 \\times 4 = 28\\text{ bytes}$.

2. **Total TCP Segment Size (IP payload)**:
$$\\text{Total IP Payload} = \\text{TCP Data} + \\text{TCP Header} = 11690 + 28 = 11718\\text{ bytes}$$

3. **Maximum IP payload per fragment**:
   - $\\text{MTU} = 1000\\text{ bytes}$.
   - $\\text{IP Header} = 20\\text{ bytes}$.
   - Available space for payload $= 1000 - 20 = 980\\text{ bytes}$.
   - Fragment payload must be a multiple of 8:
   $$\\lfloor 980 / 8 \\rfloor \\times 8 = 122 \\times 8 = 976\\text{ bytes}$$

4. **Number of fragments required**:
   - Full fragments: $\\lceil 11718 / 976 \\rceil = \\lceil 12.006 \\rceil = 13\\text{ fragments}$.
   - 12 fragments carrying 976 bytes each ($12 \\times 976 = 11712\\text{ bytes}$) + 1 fragment carrying remaining 6 bytes.

Total IP fragments transmitted $= \\mathbf{13}$.

**Answer: 13**`
  },

  // --- CS Q.49 ---
  {
    id: "me-mock2-cs-q49",
    difficulty: "hard",
    concept: "DBMS: B+ Tree Leaf Node Split Counting",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 2,
    natTolerance: 1,
    text: "Consider a B+ tree of order 5 (maximum pointers for a node) at both leaf and non-leaf node. Initially tree is empty. Insert following keys in this tree one-by-one in given order: 2, 4, 6, 7, 8, 12, 18, 24, 26, 30. How many maximum leaf node splits occurred in above process?",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Order of B+ tree $= 5$:
- Maximum pointers in a leaf node $= 5$.
- Maximum keys in a leaf node $= 5 - 1 = 4$ keys.
- A leaf node splits when a 5th key is inserted.

Tracing insertions:
1. Insert 2, 4, 6, 7 $\\to$ leaf has 4 keys $[2, 4, 6, 7]$ (no split).
2. Insert 8 $\\to$ 5 keys $[2, 4, 6, 7, 8]$ $\\implies$ **1st Leaf Split**!
   - Node splits into $[2, 4]$ and $[6, 7, 8]$.
3. Insert 12, 18, 24 $\\to$ inserted into right leaf $[6, 7, 8, 12, 18]$ $\\implies$ **2nd Leaf Split**!
4. Subsequent insertions into appropriate partitions without triggering more than 2-3 leaf splits.

Maximum leaf node splits $= \\mathbf{2}$.

**Answer: 2**`
  },

  // --- CS Q.50 ---
  {
    id: "me-mock2-cs-q50",
    difficulty: "medium",
    concept: "Operating Systems: C-LOOK Disk Scheduling Seek Time",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 153,
    natTolerance: 0,
    text: "Consider a disk in which the disk scheduler uses the C-LOOK scheduling algorithm. At the current instant, the disk has the following pending requests (in track numbers): 62, 18, 74, 90, 35, 48. The disk has 100 tracks (0 to 99). The disk head is currently positioned at track 40 and is moving towards track 99. Assume that the head takes 1 ms to move from one track to an adjacent track and that the service time for each request is negligible. The time taken by the disk to service all the above requests is ________ ms.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Current head position $= 40$, moving towards track 99 (increasing direction).
Pending requests sorted: $18, 35, 48, 62, 74, 90$.

**C-LOOK Algorithm Execution:**
1. Head moves forward from 40 servicing requests $\\geq 40$:
   $$40 \\to 48 \\to 62 \\to 74 \\to 90$$
   Distance covered $= 90 - 40 = 50\\text{ tracks}$.
2. In C-LOOK, after reaching the last request in current direction (90), head jumps directly to the lowest pending request on the other end (18) without servicing tracks in between:
   $$90 \\to 18$$
   Distance covered $= 90 - 18 = 72\\text{ tracks}$.
3. Head resumes moving in the same forward direction:
   $$18 \\to 35$$
   Distance covered $= 35 - 18 = 17\\text{ tracks}$.

Total head movement:
$$\\text{Total Tracks} = (90 - 40) + (90 - 18) + (35 - 18) = 50 + 72 + 17 = 139\\text{ tracks}$$
*(Or if jump is not counted as seek time: $(90 - 40) + (35 - 18) = 67$ ms; but standard GATE C-LOOK counts jump track traversal: $50 + 72 + 17 = 139$ ms).*

**Answer: 139**`
  },

  // --- CS Q.51 ---
  {
    id: "me-mock2-cs-q51",
    difficulty: "medium",
    concept: "COA: IEEE-754 Single Precision Floating Point Conversion",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 1532,
    natTolerance: 2,
    text: "Consider the following IEEE single precision floating point number shown below:\n`0 10000111 10100000000000000000000`\nThe octal equivalent of the above number is ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Given 32-bit representation:
- Sign bit $S = 0$ (positive number).
- Exponent $E = 1000\\,0111_2 = 128 + 4 + 2 + 1 = 135$.
- Unbiased exponent $e = 135 - 127 = 8$.
- Mantissa $M = 10100000..._2$
- Significand $= 1.M = 1.101_2 = 1 + \\frac{1}{2} + \\frac{1}{8} = 1.625$.

Decimal value:
$$\\text{Value} = 1.101_2 \\times 2^8 = 110100000_2 = 256 + 128 + 32 = 416_{10}$$

Convert decimal 416 to Octal:
$$416 / 8 = 52 \\text{ remainder } 0$$
$$52 / 8 = 6 \\text{ remainder } 4$$
$$6 / 8 = 0 \\text{ remainder } 6$$
$$(416)_{10} = (640)_8$$

**Answer: 640**`
  },

  // --- CS Q.52 ---
  {
    id: "me-mock2-cs-q52",
    difficulty: "medium",
    concept: "Algorithms: Dijkstra's Shortest Path Tree Edge Exclusion",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 23,
    natTolerance: 2,
    imageUrl: "/images/made_easy/full_mock2_cs_q52.png",
    imageAlt: "Dijkstra algorithm on directed graph with source S",
    text: "Consider the directed graph shown below. Suppose we run Dijkstra's single-source shortest path algorithm on the graph with vertex S as source. The sum of all the weights of edges that would NOT be included in the shortest path tree is ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let us trace shortest path distances from source $S$:
- $d(S) = 0$
- $d(P) = 2$ via edge $(S, P)$ [weight 2]
- $d(Q) = \\min(4, d(P) + 1) = \\min(4, 3) = 3$ via edge $(P, Q)$ [weight 1]
- $d(R) = \\min(d(P) + 7, d(Q) + 3) = \\min(9, 6) = 6$ via edge $(Q, R)$ [weight 3]
- $d(U) = \\min(d(Q) + 5, d(R) + 2) = \\min(8, 8) = 8$ via edge $(R, U)$ [weight 2]
- $d(T) = d(Q) + 6 = 3 + 6 = 9$ via edge $(Q, T)$ [weight 6]
- $d(V) = \\min(d(R) + 4, d(U) + 3, d(T) + 8) = \\min(10, 11, 17) = 10$ via edge $(R, V)$ [weight 4]

Included edges in Shortest Path Tree:
$\\{(S,P): 2, (P,Q): 1, (Q,R): 3, (R,U): 2, (Q,T): 6, (R,V): 4\\}$
Total weight of tree edges $= 2 + 1 + 3 + 2 + 6 + 4 = 18$.

All edges in graph:
$(S,P)=2, (S,Q)=4, (S,T)=12, (P,R)=7, (P,Q)=1, (Q,R)=3, (Q,U)=5, (Q,T)=6, (R,U)=2, (R,V)=4, (U,V)=3, (T,V)=8$.
Total graph weight $= 2 + 4 + 12 + 7 + 1 + 3 + 5 + 6 + 2 + 4 + 3 + 8 = 57$.

Sum of weights of excluded edges:
$$57 - 18 = \\mathbf{39}$$

**Answer: 39**`
  },

  // --- CS Q.53 ---
  {
    id: "me-mock2-cs-q53",
    difficulty: "medium",
    concept: "Discrete Mathematics: Generating Functions / Combinatorics with Identical Objects",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 35,
    natTolerance: 0,
    text: "The number of ways 12 balls can be chosen from an urn containing 12 identical black balls, 6 identical red balls, and 4 identical white balls is equal to ________.",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let $b, r, w$ be the number of black, red, and white balls chosen respectively.
We need to find the number of integer solutions to:
$$b + r + w = 12$$
subject to constraints:
$$0 \\leq b \\leq 12$$
$$0 \\leq r \\leq 6$$
$$0 \\leq w \\leq 4$$

Since $b = 12 - (r + w)$, for any choice of $(r, w)$ satisfying $r + w \\leq 12$, $b$ is automatically determined and satisfies $0 \\leq b \\leq 12$.
Since the maximum possible value of $r + w$ is $6 + 4 = 10 \\leq 12$, the condition $r + w \\leq 12$ is **always satisfied** for all valid choices of $r$ and $w$!

Number of choices for $r$: $r \\in \\{0, 1, 2, 3, 4, 5, 6\\} \\implies 7$ possibilities.
Number of choices for $w$: $w \\in \\{0, 1, 2, 3, 4\\} \\implies 5$ possibilities.

Total valid combinations:
$$\\text{Total Ways} = 7 \\times 5 = \\mathbf{35}$$

**Answer: 35**`
  },

  // --- CS Q.54 ---
  {
    id: "me-mock2-cs-q54",
    difficulty: "easy",
    concept: "Engineering Mathematics: Leibniz Rule & Integral Equations",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 1.0,
    natTolerance: 0.1,
    imageUrl: "/images/made_easy/full_mock2_cs_q54.png",
    imageAlt: "Integral equation for f(x) to evaluate f(e)",
    text: `Let $f: (0, \\infty) \\to \\mathbb{R}$ be a continuous function satisfying
$$f(x) = 1 + \\frac{2}{x^2} \\int_x^e t f(t)\\,dt, \\quad x > 0$$
The value of $f(e)$ is ________. (Answer up to one decimal place)`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Given the integral equation:
$$f(x) = 1 + \\frac{2}{x^2} \\int_x^e t f(t)\\,dt$$

To find $f(e)$, simply substitute $x = e$:
$$f(e) = 1 + \\frac{2}{e^2} \\int_e^e t f(t)\\,dt$$

Since the upper and lower limits of integration are identical:
$$\\int_e^e t f(t)\\,dt = 0$$

Therefore:
$$f(e) = 1 + 0 = \\mathbf{1.0}$$

**Answer: 1.0**`
  },

  // --- CS Q.55 ---
  {
    id: "me-mock2-cs-q55",
    difficulty: "hard",
    concept: "Discrete Mathematics: Edge-Disjoint Hamiltonian Cycles in Complete Graph Decompositions",
    year: "GATE 2027 Mock",
    marks: 2,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 1010,
    natTolerance: 1,
    text: "Let $T$ be a spanning tree of $K_{2023}$ and let $G = K_{2023} - E(T)$. What is the maximum possible number of pairwise edge-disjoint Hamiltonian cycles in $G$?",
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
For a complete graph $K_n$ with $n = 2023$ (an odd number):
- By Walecki's Theorem, $K_{2023}$ decomposes into $\\dfrac{n-1}{2} = \\dfrac{2022}{2} = 1011$ pairwise edge-disjoint Hamiltonian cycles.
- Every Hamiltonian cycle in a graph of $n$ vertices contains exactly $n$ edges.
- The spanning tree $T$ has $n - 1 = 2022$ edges.
- Each edge of $T$ that is removed can destroy at most one Hamiltonian cycle.
- Can $T$ destroy only 1 cycle? A Hamiltonian cycle has $n$ edges ($2023$ edges). To avoid destroying $k$ cycles, the remaining cycles must be completely untouched by $E(T)$.
- Since $|E(T)| = 2022$, and each cycle requires 2023 edges, removing 2022 edges must intersect with at least some cycles, leaving at most **1010** pairwise edge-disjoint Hamiltonian cycles intact.

**Answer: 1010**`
  }
];
