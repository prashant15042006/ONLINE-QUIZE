import type { Question, Chapter } from "./quizData";

export const MADE_EASY_APTITUDE_TWT12_QUESTIONS: Question[] = [
  // ─── Q.1 (SCQ) ───
  {
    id: "me-apt-twt12-q01",
    difficulty: "medium",
    concept: "Linear Arrangement & Spatial Logic",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Persons x, y, z and q live in red, green, yellow or blue coloured houses placed in a sequence on a street. z lives in a yellow house. Green house is adjacent to blue houses. x does not live adjacent to z. Yellow house is exactly between green and red houses. The colour of house in which x lives in is`,
    options: [
      "Blue",
      "Green",
      "Red",
      "Cannot be determined."
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
1. **House Order:**
   - "Yellow house is exactly between green and red houses":
     The sequence contains: \`Green - Yellow - Red\` or \`Red - Yellow - Green\`.
   - "Green house is adjacent to blue house":
     The Blue house must be on the other side of Green.
     Thus, the 4 houses in linear sequence are:
     $$\\text{Blue} - \\text{Green} - \\text{Yellow} - \\text{Red}$$
     $$\\text{or } \\text{Red} - \\text{Yellow} - \\text{Green} - \\text{Blue}$$

2. **Deduction:**
   - $z$ lives in the **Yellow** house.
   - The immediate neighbours of Yellow are **Green** and **Red**.
   - Since $x$ does NOT live adjacent to $z$, $x$ cannot live in Green or Red.
   - Therefore, $x$ must live in the **Blue** house.`
  },

  // ─── Q.2 (SCQ) ───
  {
    id: "me-apt-twt12-q02",
    difficulty: "easy",
    concept: "Mirror Image (Horizontal Axis AB)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt12_q02.png",
    imageAlt: "Question figure showing MW with mirror line AB at the bottom, and four answer figures (a), (b), (c), (d)",
    text: `If a mirror is placed on the line AB, then which of the answer figure gives its mirror image?`,
    options: [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
- The mirror line $AB$ is positioned **horizontally at the bottom** of the question figure.
- A horizontal mirror reflects vertically (water image effect):
  - Left and right positions remain unchanged.
  - The vertical orientation inverts: top becomes bottom, and bottom becomes top.
- The letter **M** vertically inverted becomes **W**.
- The letter **W** vertically inverted becomes **M**.
- Therefore, the reflection of \`MW\` is **\`WM\`**.
- Looking at the options, Figure **(d)** shows **\`WM\`**.`
  },

  // ─── Q.3 (SCQ) ───
  {
    id: "me-apt-twt12-q03",
    difficulty: "medium",
    concept: "Critical Reasoning – Logical Inference",
    year: "GATE 2027 Prep",
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
    correctAnswerIndices: [2],
    explanation: `### Solution
1. **Premise 1:** People estimate the likelihood of an event according to its salience (frequency and prominence of attention).
2. **Premise 2:** Newspapers give disproportionately prominent placement and headlines to local crime compared to crime elsewhere.
3. **Inference:** Because local crime is made far more salient to readers of newspapers than crime elsewhere, readers will perceive its frequency to be higher and thus overestimate the amount of local crime relative to other areas.
4. Hence, **Option 3** is the direct and logically sound conclusion.`
  },

  // ─── Q.4 (SCQ) ───
  {
    id: "me-apt-twt12-q04",
    difficulty: "medium",
    concept: "Blood Relations",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `A and B are related to C. C’s father’s sister’s only sibling’s son is B. C’s mother’s mother in law’s only son’s only daughter is A. How is C related to A and B respectively?`,
    options: [
      "Brother, Brother",
      "Brother, Cousin",
      "Sister, Sister",
      "Brother, Sister"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
1. **Decoding Relation with B:**
   - "C's father's sister" = C's aunt (paternal).
   - "Her only sibling" = C's father (since she has only one sibling).
   - "C's father's son is B" $\\implies$ B is C's brother.

2. **Decoding Relation with A:**
   - "C's mother's mother-in-law" = C's paternal grandmother.
   - "Her only son" = C's father.
   - "C's father's only daughter is A" $\\implies$ A is the only daughter in the family.

3. **Determining Gender of C:**
   - Since A is the **only daughter** of C's father, and C is also a child of C's father, C cannot be female (otherwise there would be two daughters).
   - Therefore, C is definitely **male (a son)**.

4. **Relationship:**
   - C is the **brother** of A.
   - C is the **brother** of B.
   - Hence, C is related to A and B as **Brother, Brother**.`
  },

  // ─── Q.5 (SCQ) ───
  {
    id: "me-apt-twt12-q05",
    difficulty: "medium",
    concept: "Reading Comprehension – Central Theme & Title",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Read the passage carefully and choose the best answer to the given question, out of the four alternatives.

It is no doubt true that we cannot go through life without sorrow. There can be no sunshine without shade. We must not complain that roses have thorns, but rather be grateful that thorns bear flowers. Our existence here is so complex that we must expect much sorrow and suffering. Many people distress and torment themselves about the mystery of existence. But although a good man may at times be angry with the world, it is certain that no man was ever discontented with the world who did his duty in it.

The world is like a looking glass: if you smile, it smiles; if you frown, it frowns back. If you look at it through a red glass, all seems red and rosy; if through a smoked one, all dull and dingy. Always try then to look at the bright side of things; almost everything in the world has a bright side. There are some persons whose smile, the sound of whose voice, whose very presence seems like a ray of sunshine and brightens a whole room. Greet everybody with a bright smile, kind words, and a pleasant welcome. It is not enough to love those who are near and dear to us; we must show that we do so. While, however, we should be grateful and enjoy to the full the innumerable blessings of life, we cannot expect to have no sorrows or anxieties.

The title that best expresses the idea of the passage is:`,
    options: [
      "Fate is life",
      "Smile a day and keep the doctor away",
      "Pleasures and Sorrows of life",
      "Optimistic attitude towards life"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
- The passage repeatedly emphasizes looking at the positive aspect of life ("Always try then to look at the bright side of things; almost everything in the world has a bright side", "roses have thorns, but rather be grateful that thorns bear flowers").
- It highlights maintaining hope, warmth, and resilience in the face of inevitable sorrows.
- Therefore, the most comprehensive and apt title is **"Optimistic attitude towards life"**.`
  },

  // ─── Q.6 (SCQ) ───
  {
    id: "me-apt-twt12-q06",
    difficulty: "easy",
    concept: "Venn Diagram Set Analysis",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt12_q06.png",
    imageAlt: "Venn diagram with Triangle (Educated people), Big Circle (Employed people), Small Circle (Backward people)",
    text: `In the following figure, how many educated people are employed?`,
    options: [
      "18",
      "20",
      "15",
      "9"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
From the given diagram:
- **Triangle** represents **Educated people**.
- **Large Circle** represents **Employed people**.
- **Small Circle** represents **Backward people**.

We need to find the number of **educated people who are employed** (the entire intersection of the Triangle and the Large Circle):
- The region containing $6$ represents people who are Educated and Employed (not Backward).
- The region containing $3$ represents people who are Educated, Employed, and Backward.
- Total educated and employed $= 6 + 3 = \\mathbf{9}$.`
  },

  // ─── Q.7 (SCQ) ───
  {
    id: "me-apt-twt12-q07",
    difficulty: "hard",
    concept: "Letter Coding & Halved Reverse Pattern",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `If the word ‘MAJORITY’ is encoded as ‘PKBNXSHQ’, how will the word ‘DAUGHTER’ be encoded?`,
    options: [
      "GUBEQDSG",
      "HVBERDTG",
      "HVCFQDSG",
      "HVBEQDSG"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
The 8-letter word is divided into two halves of 4 letters each:
1. **First Half of 'MAJORITY' $\\to$ 'MAJO':**
   - Reverse: \`O J A M\`
   - Shift $+1$ forward:
     - $O + 1 = P$
     - $J + 1 = K$
     - $A + 1 = B$
     - $M + 1 = N$
     - Result: **PKBN**

2. **Second Half of 'MAJORITY' $\\to$ 'RITY':**
   - Reverse: \`Y T I R\`
   - Shift $-1$ backward:
     - $Y - 1 = X$
     - $T - 1 = S$
     - $I - 1 = H$
     - $R - 1 = Q$
     - Result: **XSHQ**
   - Combined: **PKBNXSHQ** ✓

3. **Applying to 'DAUGHTER':**
   - **First Half ('DAUG'):**
     - Reverse: \`G U A D\`
     - Shift $+1$:
       - $G + 1 = H$
       - $U + 1 = V$
       - $A + 1 = B$
       - $D + 1 = E$
       - Result: **HVBE**
   - **Second Half ('HTER'):**
     - Reverse: \`R E T H\`
     - Shift $-1$:
       - $R - 1 = Q$
       - $E - 1 = D$
       - $T - 1 = S$
       - $H - 1 = G$
       - Result: **QDSG**
   - Combined: **HVBEQDSG**`
  },

  // ─── Q.8 (SCQ) ───
  {
    id: "me-apt-twt12-q08",
    difficulty: "easy",
    concept: "Vocabulary – Synonyms",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Which of the following options is the closest in meaning to the word below?
SUMPTUOUS`,
    options: [
      "Complete",
      "Filling",
      "Perilous",
      "Luxurious"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
- **SUMPTUOUS** means splendid, lavish, and expensive-looking.
- Synonym: **Luxurious** (Option 4).
- Definitions of other words:
  - *Complete:* finished, whole
  - *Filling:* making one full
  - *Perilous:* dangerous`
  },

  // ─── Q.9 (SCQ) ───
  {
    id: "me-apt-twt12-q09",
    difficulty: "easy",
    concept: "Verbal Ability – Sentence Completion",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `Choose the most appropriate word from the options given below to complete the sentence:
While we _________ understand the risks, we feel that the tour should continue.`,
    options: [
      "Mostly",
      "Hardly",
      "Fully",
      "Scarcely"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
- The conjunction **"While"** introduces a contrast/concession: acknowledging the risks completely, yet deciding to continue.
- The standard, natural collocation is **"fully understand"** ("While we fully understand the risks...").
- "Hardly" and "Scarcely" mean almost not, which would not logically fit with a concessive contrast.`
  },

  // ─── Q.10 (SCQ) ───
  {
    id: "me-apt-twt12-q10",
    difficulty: "medium",
    concept: "Paper Folding and Punching",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt12_q10.png",
    imageAlt: "Question figure showing square folded into four with two punch holes, and four unfolded answer options (a), (b), (c), (d)",
    text: `A square sheet of paper has been folded and punched as shown in the question figure. You have to figure out from amongst the four answer figures, how it will appear when unfolded?`,
    options: [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
1. The paper is folded into four quarters.
2. The punched quadrant has:
   - One hole near the outer corner (bottom-left).
   - One hole near the center corner (top-right).
3. When unfolded across the horizontal and vertical folds:
   - The outer corner punch replicates at all **4 outer corners** of the large square.
   - The inner center corner punch replicates at all **4 positions surrounding the center point**.
4. This symmetric pattern of 4 outer corner holes and 4 inner central holes is precisely shown in figure **(d)**.`
  },

  // ─── Q.11 (SCQ) ───
  {
    id: "me-apt-twt12-q11",
    difficulty: "easy",
    concept: "Venn Diagram Logic (Classes & Subsets)",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt12_q11.png",
    imageAlt: "Four Venn diagrams showing different relationships between milk, goat, cow, hen",
    text: `Which of the below figure indicates the best relationship between milk, goat, cow, hen?`,
    options: [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
- Both **Cow** and **Goat** are milk-producing animals (belong to the milk-yielding category).
- A **Cow** is completely distinct from a **Goat** (mutually disjoint sets inside the milk category).
- A **Hen** is a bird/egg-laying animal that does not produce milk, so it forms a completely separate set outside.
- Hence, the relationship consists of a large circle containing two separate circles inside, with a third separate circle completely outside.
- This is exactly represented by diagram **(c)**.`
  },

  // ─── Q.12 (SCQ) ───
  {
    id: "me-apt-twt12-q12",
    difficulty: "easy",
    concept: "Mirror Image of Clocks",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `A clock seen through a mirror shows quarter to three. What is the correct time shown by the clock?`,
    options: [
      "8 : 15",
      "9 : 12",
      "8 : 17",
      "9 : 15"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
- "Quarter to three" means $2:45$.
- For standard 12-hour clock mirror images:
  $$\\text{Actual Time} = 11:60 - \\text{Mirror Time}$$
  $$\\text{Actual Time} = 11:60 - 2:45 = \\mathbf{9:15}$$`
  },

  // ─── Q.13 (SCQ) ───
  {
    id: "me-apt-twt12-q13",
    difficulty: "medium",
    concept: "Geometric Counting – Squares in Grid",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    imageUrl: "/images/made_easy/twt12_q13.png",
    imageAlt: "Grid of touching circles arranged in 4 rows and 3 columns",
    text: `In the adjoining figure, if the centres of all the circles are joined by horizontal and vertical lines, then the number of squares that can be formed is`,
    options: [
      "6",
      "7",
      "8",
      "1"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
1. **Grid of Centers:**
   - There are 4 rows and 3 columns of circles.
   - Joining their centers forms a grid of points with $4$ rows and $3$ columns.
   - This defines a rectangular grid of unit square cells having dimensions $3 \\times 2$ (3 rows and 2 columns of unit cells).

2. **Counting Squares:**
   - **$1 \\times 1$ squares:** $3 \\times 2 = 6$
   - **$2 \\times 2$ squares:** $(3 - 1) \\times (2 - 1) = 2 \\times 1 = 2$
   - **$3 \\times 3$ squares:** $0$ (width is only 2 cells).

3. **Total Squares:**
   $$\\text{Total} = 6 + 2 = \\mathbf{8}$$`
  },

  // ─── Q.14 (SCQ) ───
  {
    id: "me-apt-twt12-q14",
    difficulty: "easy",
    concept: "Verbal Reasoning – Logical Conclusion",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `There is a shift in our economy from a manufacturing to a service orientation. The increase in service sector will require the managers to work more with people rather than with objects and things from the assembly line.
This passage best supports the statements that:`,
    options: [
      "managers should have a balanced mind.",
      "assembly line will exist in service organisation.",
      "interpersonal skills will become more important in the future work place.",
      "manufacturing organisations ignore importance of people."
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
- The passage directly connects the shift toward the service sector with managers having to "work more with people rather than with objects".
- Working effectively with people depends directly on **interpersonal skills**.
- Thus, the statement that "interpersonal skills will become more important in the future workplace" is the best supported conclusion.`
  },

  // ─── Q.15 (SCQ) ───
  {
    id: "me-apt-twt12-q15",
    difficulty: "medium",
    concept: "Letter-to-Number Coding (Alphabetical Squares)",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `If in a certain code language SOUL is written as 361225441144, then how will ‘PRAY’ be written in that language?`,
    options: [
      "2563241625",
      "183465279",
      "2568245216",
      "None of these"
    ],
    correctAnswerIndex: 0,
    correctAnswerIndices: [0],
    explanation: `### Solution
1. **Rule for 'SOUL':**
   Take the square of the alphabetical position of each letter:
   - $S = 19 \\implies 19^2 = 361$
   - $O = 15 \\implies 15^2 = 225$
   - $U = 21 \\implies 21^2 = 441$
   - $L = 12 \\implies 12^2 = 144$
   - Concatenated code: \`361225441144\` ✓

2. **Applying to 'PRAY':**
   - $P = 16 \\implies 16^2 = 256$
   - $R = 18 \\implies 18^2 = 324$
   - $A = 1 \\implies 1^2 = 1$
   - $Y = 25 \\implies 25^2 = 625$
   - Concatenated code: **2563241625** (Option 1).`
  },

  // ─── Q.16 (SCQ) ───
  {
    id: "me-apt-twt12-q16",
    difficulty: "hard",
    concept: "Syllogism & Deductive Logic",
    year: "GATE 2027 Prep",
    marks: 2,
    negativeMarks: 0.66,
    questionType: "SCQ",
    text: `Below are given three statements, followed by four conclusions. You have to take given statements to be true even if they appear to be at variance with commonly known facts and then decide which of the conclusion logically follow(s) from the given statements.

Statements:
Some tablets are capsules
No capsule is a medicine
All medicines are syrups

Conclusions:
I. Some tablets are not medicines.
II. All medicines are not capsules.
III. Some syrups are medicines.
IV. Some syrups are not capsules.`,
    options: [
      "I, II and III follows",
      "I, III and IV follows",
      "I, II, III and IV follows",
      "None follows"
    ],
    correctAnswerIndex: 2,
    correctAnswerIndices: [2],
    explanation: `### Solution
1. **Conclusion I:** "Some tablets are not medicines"
   - Some tablets are capsules, and no capsule is a medicine.
   - Those tablets which are capsules can never be medicines. **Follows ✓**

2. **Conclusion II:** "All medicines are not capsules" (No medicine is a capsule)
   - "No capsule is a medicine" directly converts to "No medicine is a capsule". **Follows ✓**

3. **Conclusion III:** "Some syrups are medicines"
   - "All medicines are syrups" (A-proposition) converts by limitation to "Some syrups are medicines" (I-proposition). **Follows ✓**

4. **Conclusion IV:** "Some syrups are not capsules"
   - All medicines are syrups, and no medicine is a capsule.
   - The syrups that are medicines can never be capsules. Hence, some syrups are not capsules. **Follows ✓**

Therefore, **I, II, III and IV all follow**.`
  },

  // ─── Q.17 (SCQ) ───
  {
    id: "me-apt-twt12-q17",
    difficulty: "easy",
    concept: "Vocabulary – Synonyms",
    year: "GATE 2027 Prep",
    marks: 1,
    negativeMarks: 0.33,
    questionType: "SCQ",
    text: `In the following question, out of the four alternatives, choose the word which best expresses the meaning of the given word.
OMINOUS`,
    options: [
      "Officious",
      "Pleasant",
      "Convenient",
      "Threatening"
    ],
    correctAnswerIndex: 3,
    correctAnswerIndices: [3],
    explanation: `### Solution
- **OMINOUS** means giving the impression that something bad or unpleasant is going to happen; foreboding or inauspicious.
- Synonym: **Threatening** (Option 4).
- Other options:
  - *Officious:* assertive of authority in an overbearing way
  - *Pleasant:* giving a sense of happy satisfaction
  - *Convenient:* fitting in well with a person's plans`
  }
];

export const MADE_EASY_APTITUDE_TWT12_CHAPTER: Chapter = {
  id: "ga-gate-2027-twt-12",
  name: "GATE 2027 CS TOPIC WISE TEST - 12 (General Aptitude)",
  description: "Spatial Logic, Mirror Images, Critical Reasoning, Syllogisms, Paper Folding & Coding",
  questions: MADE_EASY_APTITUDE_TWT12_QUESTIONS,
};
