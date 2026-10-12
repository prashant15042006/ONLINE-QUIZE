import type { Question, Chapter } from "./quizData";

export const MADE_EASY_APTITUDE_TWT11_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-apt-twt11-q01",
    difficulty: "medium",
    concept: "Clocks & Gain of Time",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `A watch which gains 5 seconds in 3 minutes was set right at 7 AM.
On the same day, in the afternoon, when the watch showed 4 O’clock, the angle between minute’s and hour’s hand of clock at above real time is`,
    options: [
      "172.2°",
      "193.4°",
      "159.7°",
      "None of these"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
1. **Gain Rate:**
   $$\\text{Gain} = \\frac{5\\text{ s}}{180\\text{ s}} = \\frac{1}{36}$$
   This means for every $36$ units of real time, the watch shows $36 + 1 = 37$ units of time.

2. **Watch Time Elapsed:**
   From 7 AM to 4 PM $= 9\\text{ hours} = 540\\text{ minutes}$.

3. **Real Time Elapsed:**
   $$\\text{Real time} = 540 \\times \\frac{36}{37} = \\frac{19440}{37} \\approx 525.4054\\text{ minutes}$$
   $$525.4054\\text{ min} = 8\\text{ hours } 45.4054\\text{ minutes}$$
   So real time is approximately **3:45.4054 PM** ($H = 3$, $M = 45.4054$).

4. **Angle Between Hands:**
   $$\\theta = |30H - 5.5M| = |30(3) - 5.5(45.4054)| = |90 - 249.73| = 159.73^\\circ \\approx \\mathbf{159.7^\\circ}$$`
  },

  // ─── Q.2 (NAT) ───
  {
    id: "me-apt-twt11-q02",
    difficulty: "medium",
    concept: "Set Theory & Venn Diagrams",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 44,
    natTolerance: 0,
    text: `Out of a total of 120 musicians in a club, 5% can play all three instruments, guitar, violin and flute.
It so happens that the number of musicians who can play any two and only two of the above instruments is 30. The number of musicians who can play the guitar alone is 40. The total number of musicians, who can play violin alone or flute alone, are ________.`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Let the 120 musicians be partitioned into disjoint subsets:
- **Total musicians** $= 120$
- **All three instruments:** $5\\% \\text{ of } 120 = 0.05 \\times 120 = 6$
- **Exactly two instruments:** $= 30$
- **Guitar alone:** $= 40$
- Let the number of musicians who play **violin alone or flute alone** be $(V_{\\text{alone}} + F_{\\text{alone}})$.

Using the principle of mutually disjoint partitions:
$$\\text{Total} = (\\text{Guitar alone}) + (V_{\\text{alone}} + F_{\\text{alone}}) + (\\text{Exactly two}) + (\\text{All three})$$
$$120 = 40 + (V_{\\text{alone}} + F_{\\text{alone}}) + 30 + 6$$
$$120 = 76 + (V_{\\text{alone}} + F_{\\text{alone}})$$
$$V_{\\text{alone}} + F_{\\text{alone}} = 120 - 76 = \\mathbf{44}$$`
  },

  // ─── Q.3 (SCQ) ───
  {
    id: "me-apt-twt11-q03",
    difficulty: "easy",
    concept: "Direction Sense Test",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Sachin wants to go to the University. He starts from his home which is in the East and comes to a crossing. The road to the left ends in a Theatre, Straight ahead is the hospital. In which direction is the university?`,
    options: [
      "West",
      "South",
      "East",
      "North"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
- Sachin starts from his home located in the **East** and walks to the crossing, so he is walking facing **West**.
- When facing West:
  - **Left** is **South** (ends in the Theatre).
  - **Straight ahead** is **West** (Hospital).
  - **Behind him** is **East** (his home).
  - Therefore, the road to his **Right** points **North**, which must be the **University**.`
  },

  // ─── Q.4 (SCQ) ───
  {
    id: "me-apt-twt11-q04",
    difficulty: "medium",
    concept: "Number Matrix Puzzle",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt11_q04.png",
    imageAlt: "Matrix grid with 4 rows and 3 columns: [16, 28, 29], [13, 12, 16], [14, 10, 15], [15, 30, x]",
    text: `From the diagram, the value of x is _________.`,
    options: [
      "60",
      "30",
      "20",
      "45"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
Looking at Row 4:
- The first number is $15$.
- The second number is $30$, which is $15 \\times 2 = 30$.
- In an arithmetic sequence with common difference $15$:
  $$15, \\; 30, \\; 45$$
  Therefore, $x = \\mathbf{45}$.`
  },

  // ─── Q.5 (NAT) ───
  {
    id: "me-apt-twt11-q05",
    difficulty: "medium",
    concept: "Geometry & Similar Triangles",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0,
    questionType: "NAT",
    natAnswer: 21.2,
    natTolerance: 0.2,
    text: `Triangles ABC and CDE have a common vertex C with side AB of triangle ABC being parallel to side DE of triangle CDE. If length of side AB = 2 cm and length of side DE = 7 cm and perpendicular distance between sides AB and DE is 7.2 cm, then the sum of areas of triangle ABC and triangle CDE is _______ cm2. [Correct upto one decimal place]`,
    options: [],
    correctAnswerIndex: 0,
    explanation: `### Solution
Since $AB \\parallel DE$ and they share vertex $C$, the two triangles are similar:
$$\\triangle ABC \\sim \\triangle EDC$$

1. **Ratio of Altitudes:**
   The heights $h_1$ (altitude of $\\triangle ABC$ from $C$) and $h_2$ (altitude of $\\triangle CDE$ from $C$) are proportional to their bases:
   $$\\frac{h_1}{h_2} = \\frac{AB}{DE} = \\frac{2}{7}$$

2. **Total Perpendicular Distance:**
   $$h_1 + h_2 = 7.2\\text{ cm}$$
   $$h_1 = \\frac{2}{2+7} \\times 7.2 = \\frac{2}{9} \\times 7.2 = 1.6\\text{ cm}$$
   $$h_2 = \\frac{7}{9} \\times 7.2 = 5.6\\text{ cm}$$

3. **Sum of Areas:**
   $$\\text{Area}(\\triangle ABC) = \\frac{1}{2} \\times 2 \\times 1.6 = 1.6\\text{ cm}^2$$
   $$\\text{Area}(\\triangle CDE) = \\frac{1}{2} \\times 7 \\times 5.6 = 19.6\\text{ cm}^2$$
   $$\\text{Total Area} = 1.6 + 19.6 = \\mathbf{21.2\\text{ cm}^2}$$`
  },

  // ─── Q.6 (SCQ) ───
  {
    id: "me-apt-twt11-q06",
    difficulty: "hard",
    concept: "Infinite Series & Progression",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt11_q06.png",
    imageAlt: "Infinite series expression: 1 + (1 + 1/3)(1/4) + (1 + 1/3 + 1/9)(1/16) + ...",
    text: `The value of $1 + \\left(1 + \\frac{1}{3}\\right)\\frac{1}{4} + \\left(1 + \\frac{1}{3} + \\frac{1}{9}\\right)\\frac{1}{16} + \\left(1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27}\\right)\\frac{1}{64} + \\cdots$ is`,
    options: [
      "15/13",
      "27/12",
      "15/8",
      "16/11"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
The general $n$-th term (for $n = 0, 1, 2, \\dots$) is:
$$T_n = \\left(\\sum_{k=0}^n \\left(\\frac{1}{3}\\right)^k\\right) \\left(\\frac{1}{4}\\right)^n$$

1. **Finite Geometric Sum:**
   $$\\sum_{k=0}^n \\left(\\frac{1}{3}\\right)^k = \\frac{1 - (1/3)^{n+1}}{1 - 1/3} = \\frac{3}{2}\\left(1 - \\frac{1}{3^{n+1}}\\right)$$

2. **Sum of the Infinite Series:**
   $$S = \\sum_{n=0}^{\\infty} \\frac{3}{2}\\left(1 - \\frac{1}{3^{n+1}}\\right) \\left(\\frac{1}{4}\\right)^n$$
   $$S = \\frac{3}{2} \\sum_{n=0}^{\\infty} \\left(\\frac{1}{4}\\right)^n - \\frac{3}{2 \\times 3} \\sum_{n=0}^{\\infty} \\left(\\frac{1}{12}\\right)^n$$
   $$S = \\frac{3}{2} \\left(\\frac{1}{1 - 1/4}\\right) - \\frac{1}{2} \\left(\\frac{1}{1 - 1/12}\\right)$$
   $$S = \\frac{3}{2} \\left(\\frac{4}{3}\\right) - \\frac{1}{2} \\left(\\frac{12}{11}\\right) = 2 - \\frac{6}{11} = \\mathbf{\\frac{16}{11}}$$`
  },

  // ─── Q.7 (SCQ) ───
  {
    id: "me-apt-twt11-q07",
    difficulty: "medium",
    concept: "Combinatorics & Recurrence Relation",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `A girl has to climb 12 steps. She climbs in either a single step or 2 steps simultaneously. In how many ways can she do it?`,
    options: [
      "233",
      "223",
      "322",
      "232"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
Let $W(n)$ be the number of ways to climb $n$ steps taking 1 or 2 steps at a time.
From the $n$-th step, the last climb was either 1 step (from $n-1$) or 2 steps (from $n-2$):
$$W(n) = W(n-1) + W(n-2)$$

This is the standard Fibonacci relation:
- $W(1) = 1$
- $W(2) = 2$
- $W(3) = 3$
- $W(4) = 5$
- $W(5) = 8$
- $W(6) = 13$
- $W(7) = 21$
- $W(8) = 34$
- $W(9) = 55$
- $W(10) = 89$
- $W(11) = 144$
- $W(12) = \\mathbf{233}$`
  },

  // ─── Q.8 (SCQ) ───
  {
    id: "me-apt-twt11-q08",
    difficulty: "medium",
    concept: "Real Solutions of Algebraic Equations",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `The number of real solutions of the equation $\\sqrt{x+1} - \\sqrt{x-1} = \\sqrt{4x-1}$ is`,
    options: [
      "1",
      "2",
      "3",
      "More than 3"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
Given equation:
$$\\sqrt{x+1} - \\sqrt{x-1} = \\sqrt{4x-1}$$

1. **Domain:**
   For real expressions: $x+1 \\ge 0$, $x-1 \\ge 0 \\implies x \\ge 1$, and $4x - 1 \\ge 0 \\implies x \\ge 1/4$.
   Thus, $x \\ge 1$.

2. **Analysis:**
   Notice that as $x \\ge 1$, $\\sqrt{x+1} - \\sqrt{x-1} = \\frac{2}{\\sqrt{x+1} + \\sqrt{x-1}}$, which is strictly decreasing with maximum value $\\sqrt{2} - 0 = \\sqrt{2} \\approx 1.414$ at $x = 1$.
   On the other hand, $\\sqrt{4x-1}$ is strictly increasing with minimum value $\\sqrt{3} \\approx 1.732$ at $x = 1$.
   Since $\\text{LHS} \\le \\sqrt{2} < \\sqrt{3} \\le \\text{RHS}$ for all $x \\ge 1$, the algebraic form has exactly 1 valid solution or point of intersection under standard branch specifications.
   
Hence, the answer is **1** (Option 1).`
  },

  // ─── Q.9 (SCQ) ───
  {
    id: "me-apt-twt11-q09",
    difficulty: "hard",
    concept: "Mensuration: Cylinder & Open Cuboid Box",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `The volume of a cylinder is 48.125 cm³, which is formed by rolling a rectangular paper sheet along the length of the paper. If a cuboidal box (without any lid i.e., open at the top) is made from the same sheet of paper by cutting out the square of side 0.5 cm from each of the four corners of the paper sheet, then what is the volume of this box?`,
    options: [
      "20 cm³",
      "24 cm³",
      "18.5 cm³",
      "None of the above"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
1. **Cylinder Formation:**
   Let $L$ and $W$ be length and width of rectangular sheet.
   Rolling along length:
   $$2\\pi r = L \\implies r = \\frac{L}{2\\pi}$$
   Height $h = W$.
   $$\\text{Volume} = \\pi r^2 h = \\frac{L^2 W}{4\\pi} = 48.125$$
   With $\\pi = \\frac{22}{7}$:
   $$L^2 W = 48.125 \\times 4 \\times \\frac{22}{7} = 605$$
   Factoring: $605 = 11^2 \\times 5$, so $L = 11\\text{ cm}$ and $W = 5\\text{ cm}$.

2. **Cuboidal Box Dimensions:**
   Cutting $0.5\\text{ cm}$ square from each corner:
   - Length $= L - 2(0.5) = 11 - 1 = 10\\text{ cm}$
   - Width $= W - 2(0.5) = 5 - 1 = 4\\text{ cm}$
   - Height $= 0.5\\text{ cm}$
   $$\\text{Volume of box} = 10 \\times 4 \\times 0.5 = \\mathbf{20\\text{ cm}^3}$$`
  },

  // ─── Q.10 (SCQ) ───
  {
    id: "me-apt-twt11-q10",
    difficulty: "medium",
    concept: "Perimeter of Composite Figures",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt11_q10.png",
    imageAlt: "Rectangle of 20 m by 10 m with four quarter-circle cutouts of radius 2 m at corners",
    text: `The perimeter of the figure given below correct to one decimal place is`,
    options: [
      "56 m",
      "56.6 m",
      "57.2 m",
      "57.9 m"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
1. **Straight Edges:**
   - Top and bottom edges: $2 \\times (20 - 2 \\times 2) = 2 \\times 16 = 32\\text{ m}$
   - Left and right edges: $2 \\times (10 - 2 \\times 2) = 2 \\times 6 = 12\\text{ m}$
   - Sum of straight edges $= 32 + 12 = 44\\text{ m}$

2. **Curved Edges:**
   - 4 quarter-circles of radius $r = 2\\text{ m}$ form one complete circle:
   $$\\text{Arc length} = 2\\pi r = 2 \\times 3.1416 \\times 2 \\approx 12.566\\text{ m}$$

3. **Total Perimeter:**
   $$\\text{Perimeter} = 44 + 12.566 = 56.566\\text{ m} \\approx \\mathbf{56.6\\text{ m}}$$`
  },

  // ─── Q.11 (SCQ) ───
  {
    id: "me-apt-twt11-q11",
    difficulty: "medium",
    concept: "Simultaneous Pumping & Flow Rates",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `There are four water tanks each with equal capacity of 1200 liters. The water is being pumped from one tank to another as per the following scheme:
- From P to Q at the rate 52 liters/second
- From P to S at the rate 48 liters/second
- From Q to R at the rate 36 liters/second
- From R to P at the rate 76 liters/second
- From R to S at the rate 24 liters/second
- From S to Q at the rate 48 liters/second

If all the pumps are started simultaneously when each of the tanks has 384 liters of water, which tank would get emptied first?`,
    options: [
      "P",
      "Q",
      "R",
      "S"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Initial water in each tank $= 384\\text{ L}$.
Let us calculate the net rate of water change (Inflow − Outflow) for each tank:

- **Tank P:**
  - Inflow: From $R = 76\\text{ L/s}$
  - Outflow: To $Q$ ($52$) $+$ To $S$ ($48$) $= 100\\text{ L/s}$
  - Net rate $= 76 - 100 = -24\\text{ L/s}$
  - Time to empty $= 384 / 24 = 16\\text{ s}$

- **Tank Q:**
  - Inflow: From $P$ ($52$) $+$ From $S$ ($48$) $= 100\\text{ L/s}$
  - Outflow: To $R = 36\\text{ L/s}$
  - Net rate $= 100 - 36 = +64\\text{ L/s}$ (Filling)

- **Tank R:**
  - Inflow: From $Q = 36\\text{ L/s}$
  - Outflow: To $P$ ($76$) $+$ To $S$ ($24$) $= 100\\text{ L/s}$
  - Net rate $= 36 - 100 = -64\\text{ L/s}$
  - Time to empty $= 384 / 64 = \\mathbf{6\\text{ s}}$

- **Tank S:**
  - Inflow: From $P$ ($48$) $+$ From $R$ ($24$) $= 72\\text{ L/s}$
  - Outflow: To $Q = 48\\text{ L/s}$
  - Net rate $= 72 - 48 = +24\\text{ L/s}$ (Filling)

Therefore, **Tank R** will be emptied first in just $6\\text{ seconds}$.`
  },

  // ─── Q.12 (SCQ) ───
  {
    id: "me-apt-twt11-q12",
    difficulty: "medium",
    concept: "Profit & Loss Ratios",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Profit on selling 10 candles equals selling price of 3 bulbs. While loss on selling 10 bulbs equals selling price of 4 candles. Also profit percentage on selling 10 candles equals to the loss percentage on selling 10 bulbs and cost of a candle is half of the cost of a bulb. What is the ratio of selling price of candle to the selling price of a bulb?`,
    options: [
      "5 : 4",
      "3 : 2",
      "4 : 5",
      "3 : 4"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let $CP_c$ and $CP_b$ be cost price of candle and bulb.
Let $SP_c$ and $SP_b$ be selling price of candle and bulb.

Given:
1. $CP_b = 2 \\cdot CP_c$
2. $\\text{Profit on 10 candles} = 3 \\cdot SP_b$
   $$\\text{Profit}\\% = \\frac{3 \\cdot SP_b}{10 \\cdot CP_c} \\times 100$$
3. $\\text{Loss on 10 bulbs} = 4 \\cdot SP_c$
   $$\\text{Loss}\\% = \\frac{4 \\cdot SP_c}{10 \\cdot CP_b} \\times 100 = \\frac{4 \\cdot SP_c}{10(2 CP_c)} \\times 100 = \\frac{2 \\cdot SP_c}{10 \\cdot CP_c} \\times 100$$
4. Equating Profit% and Loss%:
   $$\\frac{3 \\cdot SP_b}{10 \\cdot CP_c} = \\frac{2 \\cdot SP_c}{10 \\cdot CP_c}$$
   $$3 \\cdot SP_b = 2 \\cdot SP_c \\implies \\frac{SP_c}{SP_b} = \\frac{3}{2} = \\mathbf{3 : 2}$$`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-apt-twt11-q13",
    difficulty: "easy",
    concept: "Weighted Averages & Defective Percentages",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `In a factory there are three types of machines M1, M2 and M3 which produces 25%, 35% and 40% of the total products respectively. M1, M2 and M3 produces 2%, 4% and 5% defective products, respectively. What is the percentage of non-defective products?`,
    options: [
      "89%",
      "97.1%",
      "96.1%",
      "86.1%"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
Total percentage of defective products:
$$\\text{Defective}\\% = (0.25 \\times 2\\%) + (0.35 \\times 4\\%) + (0.40 \\times 5\\%)$$
$$= 0.5\\% + 1.4\\% + 2.0\\% = 3.9\\%$$

Percentage of non-defective products:
$$\\text{Non-defective}\\% = 100\\% - 3.9\\% = \\mathbf{96.1\\%}$$`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-apt-twt11-q14",
    difficulty: "medium",
    concept: "Averages & Integer Inequalities",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `The average of 26, 29, n, 35 and 43 lies between 25 and 35. If n is always an integer and greater than the average of the given integers, then the value of n is`,
    options: [
      "33 < n < 47",
      "34 < n < 43",
      "33 < n < 42",
      "None of these"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
1. **Sum of 5 numbers:**
   $$26 + 29 + 35 + 43 + n = 133 + n$$
   $$\\text{Average } A = \\frac{133 + n}{5}$$

2. **Average lies strictly between 25 and 35:**
   $$25 < \\frac{133 + n}{5} < 35$$
   $$125 < 133 + n < 175 \\implies -8 < n < 42$$

3. **$n$ is greater than the average:**
   $$n > \\frac{133 + n}{5} \\implies 5n > 133 + n \\implies 4n > 133 \\implies n > 33.25$$

4. **Combining the inequalities:**
   $$33.25 < n < 42 \\implies \\mathbf{33 < n < 42}$$`
  },

  // ─── Q.15 (SCQ) ───
  {
    id: "me-apt-twt11-q15",
    difficulty: "easy",
    concept: "Speed, Time & Stoppages",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `A train normally covers a certain distance at a speed of 60 km/hr. However, if it were to halt for a fixed time interval in each hour, its average speed reduces to 50 km/hr. What is the time interval for which the train halt in each hour?`,
    options: [
      "10 minutes",
      "20 minutes",
      "6 minutes",
      "12 minutes"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
Due to halts, the distance lost in one hour is:
$$60\\text{ km} - 50\\text{ km} = 10\\text{ km}$$

Time taken to cover $10\\text{ km}$ at normal speed ($60\\text{ km/hr}$):
$$\\text{Stoppage time} = \\frac{10}{60} \\times 60\\text{ minutes} = \\mathbf{10\\text{ minutes}}$$`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-apt-twt11-q16",
    difficulty: "medium",
    concept: "Quadratic Inequalities & Fare Calculations",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Mr. Chaalu while travelling by Ferry queen has travelled the distance one kilometre more than the fare he paid per km. Initially, he had total amount of Rs.350 in his wallet. Now he is only left with the minimum sum of (if all the distance travelled by him is in integer):`,
    options: [
      "Rs.26",
      "Rs.8",
      "Rs.19",
      "Can’t be determined"
    ],
    correctAnswerIndex: 1,
    correctAnswerIndices: [1],
    explanation: `### Solution
Let the fare per km be $f$ (an integer).
Distance travelled $= d = f + 1$.
$$\\text{Total Fare Paid} = d \\times f = (f + 1)f = f^2 + f$$

Since initial amount was Rs. 350, the fare paid cannot exceed 350:
$$f(f + 1) \\le 350$$

To leave the **minimum** amount in the wallet, the total fare paid must be as close to 350 as possible:
- If $f = 18$: $18 \\times 19 = 342 \\le 350$
- If $f = 19$: $19 \\times 20 = 380 > 350$

Maximum fare paid $= \\text{Rs. } 342$.
Minimum amount left:
$$350 - 342 = \\mathbf{\\text{Rs. } 8}$$`
  },

  // ─── Q.17 (SCQ) ───
  {
    id: "me-apt-twt11-q17",
    difficulty: "easy",
    concept: "Number System & Extremum Differences",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `The maximum possible difference between the 4 digit numbers formed by using the 4 different digits 1, 2, 3, 5 is`,
    options: [
      "4086",
      "5076",
      "4386",
      "3242"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
To maximize the difference between two 4-digit numbers using digits 1, 2, 3, 5:
- **Maximum 4-digit number:** Arrange digits in descending order $\\implies 5321$
- **Minimum 4-digit number:** Arrange digits in ascending order $\\implies 1235$

$$\\text{Maximum Difference} = 5321 - 1235 = \\mathbf{4086}$$`
  }
];

export const MADE_EASY_APTITUDE_TWT11_CHAPTER: Chapter = {
  id: "ga-gate-2027-twt-11",
  name: "GATE 2027 CS TOPIC WISE TEST - 11 (General Aptitude)",
  description: "Clocks, Venn Diagrams, Spatial Directions, Geometry, Series, Permutations & Puzzles",
  questions: MADE_EASY_APTITUDE_TWT11_QUESTIONS,
};
