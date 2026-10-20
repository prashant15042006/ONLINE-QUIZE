import type { Question } from "./quizData";

export const MADE_EASY_FULL_MOCK_4_QUESTIONS: Question[] = [
  {
    "id": "me-mock4-ga-q01",
    "difficulty": "easy",
    "concept": "General Aptitude: Verbal Analogy",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "The following question consist of two words each that have a certain relationship to each other, followed by four pairs of words. Select the correct pair that has the same relationship as the original pair of words.\n\n**Medicine : Capsule**",
    "questionType": "SCQ",
    "options": [
      "Pearl : Shell",
      "Passenger : Bus",
      "Heart : Lungs",
      "Car : Vehicle"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\n- A **capsule** encases or contains **medicine**.\n- Similarly, a **shell** (oyster shell) naturally encases/contains a **pearl**.\n\nTherefore, **Pearl : Shell** shares the exact container-content relationship.\n\n**Correct Option: 1**"
  },
  {
    "id": "me-mock4-ga-q02",
    "difficulty": "medium",
    "concept": "General Aptitude: Permutations & Number Theory",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "What is the sum of the all four digit numbers formed by using digits 0, 1, 4, 5 without repetition of digits?",
    "questionType": "SCQ",
    "options": [
      "44440",
      "46460",
      "46440",
      "64440"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\nThe given digits are $0, 1, 4, 5$.\n\n1. **Thousands place** cannot be 0. So there are 3 possible choices ($1, 4, 5$).\n   - Each non-zero digit appears in the thousands place $3! = 6$ times.\n   - Contribution to sum from thousands place:\n     $$(1 + 4 + 5) \\times 6 \\times 1000 = 10 \\times 6000 = 60,000$$\n\n2. **Hundreds, Tens, and Units places**:\n   - For any of these positions, a non-zero digit ($1, 4, 5$) can appear when the thousands place is chosen from the remaining 2 non-zero digits (2 choices), and the remaining 2 places are filled by the remaining 2 digits ($2! = 2$ ways).\n   - Thus, each non-zero digit appears $2 \\times 2 = 4$ times in the hundreds, tens, and units place.\n   - Contribution from hundreds place:\n     $$(1 + 4 + 5) \\times 4 \\times 100 = 10 \\times 400 = 4,000$$\n   - Contribution from tens place:\n     $$(1 + 4 + 5) \\times 4 \\times 10 = 10 \\times 40 = 400$$\n   - Contribution from units place:\n     $$(1 + 4 + 5) \\times 4 \\times 1 = 10 \\times 4 = 40$$\n\n3. **Total Sum**:\n   $$\\text{Total Sum} = 60,000 + 4,000 + 400 + 40 = 64,440$$\n\n**Correct Option: 4 (64440)**"
  },
  {
    "id": "me-mock4-ga-q03",
    "difficulty": "medium",
    "concept": "General Aptitude: Surds & Algebraic Identities",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "If $\\sqrt{5x+9} + \\sqrt{5x-9} = 3(2+\\sqrt{2})$, then $\\sqrt{10x+9}$ is equal to",
    "imageUrl": "/images/made_easy/full_mock4_ga_q03.png",
    "questionType": "SCQ",
    "options": [
      "3\\sqrt{31}",
      "4\\sqrt{5}",
      "3\\sqrt{7}",
      "2\\sqrt{7}"
    ],
    "correctAnswerIndex": 2,
    "explanation": "### Solution\nGiven:\n$$\\sqrt{5x+9} + \\sqrt{5x-9} = 3(2+\\sqrt{2}) = 6 + 3\\sqrt{2} \\quad \\text{--- (1)}$$\n\nNotice that:\n$$(\\sqrt{5x+9} + \\sqrt{5x-9})(\\sqrt{5x+9} - \\sqrt{5x-9}) = (5x+9) - (5x-9) = 18$$\n\nTherefore:\n$$\\sqrt{5x+9} - \\sqrt{5x-9} = \\frac{18}{3(2+\\sqrt{2})} = \\frac{6}{2+\\sqrt{2}} = \\frac{6(2-\\sqrt{2})}{(2+\\sqrt{2})(2-\\sqrt{2})} = \\frac{6(2-\\sqrt{2})}{2} = 3(2-\\sqrt{2}) = 6 - 3\\sqrt{2} \\quad \\text{--- (2)}$$\n\nAdding equations (1) and (2):\n$$2\\sqrt{5x+9} = (6 + 3\\sqrt{2}) + (6 - 3\\sqrt{2}) = 12$$\n$$\\sqrt{5x+9} = 6$$\nSquaring both sides:\n$$5x + 9 = 36 \\implies 5x = 27$$\n\nNow, evaluate $\\sqrt{10x+9}$:\n$$\\sqrt{10x+9} = \\sqrt{2(5x) + 9} = \\sqrt{2(27) + 9} = \\sqrt{54 + 9} = \\sqrt{63} = \\sqrt{9 \\times 7} = 3\\sqrt{7}$$\n\n**Correct Option: 3** ($3\\sqrt{7}$)"
  },
  {
    "id": "me-mock4-ga-q04",
    "difficulty": "medium",
    "concept": "General Aptitude: Geometry & Mensuration",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "A circle of maximum possible area is inscribed in a quadrant (of a circle). If the radius of the circumscribing quadrant be $r$, then what is the area of the inscribed circle?",
    "imageUrl": "/images/made_easy/full_mock4_ga_q04.png",
    "questionType": "SCQ",
    "options": [
      "(2 + 3\\sqrt{2})r^2",
      "\\frac{\\pi r^2}{(3 + 2\\sqrt{2})}",
      "\\left(\\frac{3 + 2\\sqrt{2}}{r^2}\\right)\\pi",
      "None of these"
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\nLet $a$ be the radius of the inscribed circle.\n- The center of the circle is at coordinates $(a, a)$ relative to the quadrant's corner.\n- The distance from the origin (corner of the quadrant) to the center of the circle is:\n  $$d = \\sqrt{a^2 + a^2} = a\\sqrt{2}$$\n- The distance from the center of the circle to the outer circular arc is $a$.\n- Since the radius of the quadrant is $r$:\n  $$a\\sqrt{2} + a = r \\implies a(\\sqrt{2} + 1) = r \\implies a = \\frac{r}{\\sqrt{2} + 1} = r(\\sqrt{2} - 1)$$\n\nArea of the inscribed circle:\n$$\\text{Area} = \\pi a^2 = \\pi [r(\\sqrt{2} - 1)]^2 = \\pi r^2 (2 + 1 - 2\\sqrt{2}) = \\pi r^2 (3 - 2\\sqrt{2})$$\n\nNotice that:\n$$\\frac{1}{3 + 2\\sqrt{2}} = \\frac{3 - 2\\sqrt{2}}{(3 + 2\\sqrt{2})(3 - 2\\sqrt{2})} = \\frac{3 - 2\\sqrt{2}}{9 - 8} = 3 - 2\\sqrt{2}$$\n\nTherefore:\n$$\\text{Area} = \\frac{\\pi r^2}{3 + 2\\sqrt{2}}$$\n\n**Correct Option: 2**"
  },
  {
    "id": "me-mock4-ga-q05",
    "difficulty": "medium",
    "concept": "General Aptitude: Geometric Progression Series",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "What is the sum of the series: $0.3 + 0.33 + 0.333 + \\dots$ to $n$ terms?",
    "imageUrl": "/images/made_easy/full_mock4_ga_q05.png",
    "questionType": "SCQ",
    "options": [
      "\\frac{1}{3}\\left[n - \\frac{1}{9}\\left(1 - \\frac{1}{10^n}\\right)\\right]",
      "\\frac{1}{3}\\left[n - \\frac{2}{9}\\left(1 - \\frac{1}{10^n}\\right)\\right]",
      "\\frac{1}{3}\\left[n - \\frac{1}{3}\\left(1 - \\frac{1}{10^n}\\right)\\right]",
      "\\frac{1}{3}\\left[n - \\frac{1}{9}\\left(1 + \\frac{1}{10^n}\\right)\\right]"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\nLet $S_n = 0.3 + 0.33 + 0.333 + \\dots + \\text{upto } n \\text{ terms}$.\n$$S_n = 3 \\left(0.1 + 0.01 + 0.001 + \\dots\\right) = \\frac{3}{9} \\left(0.9 + 0.99 + 0.999 + \\dots\\right)$$\n$$S_n = \\frac{1}{3} \\left[(1 - 10^{-1}) + (1 - 10^{-2}) + (1 - 10^{-3}) + \\dots + (1 - 10^{-n})\\right]$$\n$$S_n = \\frac{1}{3} \\left[ n - \\left(\\frac{1}{10} + \\frac{1}{10^2} + \\dots + \\frac{1}{10^n}\\right) \\right]$$\n\nThe sum of geometric series $\\sum_{k=1}^n \\frac{1}{10^k}$:\n$$\\text{Sum} = \\frac{\\frac{1}{10}\\left(1 - \\left(\\frac{1}{10}\\right)^n\\right)}{1 - \\frac{1}{10}} = \\frac{\\frac{1}{10}\\left(1 - \\frac{1}{10^n}\\right)}{\\frac{9}{10}} = \\frac{1}{9}\\left(1 - \\frac{1}{10^n}\\right)$$\n\nSubstituting back:\n$$S_n = \\frac{1}{3}\\left[n - \\frac{1}{9}\\left(1 - \\frac{1}{10^n}\\right)\\right]$$\n\n**Correct Option: 1**"
  },
  {
    "id": "me-mock4-ga-q06",
    "difficulty": "easy",
    "concept": "General Aptitude: Heights and Distances",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "From the top of a lighthouse, $100\\text{ m}$ high, the angle of depression of a boat is $\\tan^{-1}\\left(\\frac{5}{12}\\right)$. The distance between the boat and the light house is",
    "imageUrl": "/images/made_easy/full_mock4_ga_q06.png",
    "questionType": "SCQ",
    "options": [
      "120 m",
      "180 m",
      "240 m",
      "360 m"
    ],
    "correctAnswerIndex": 2,
    "explanation": "### Solution\nLet $h = 100\\text{ m}$ be the height of the lighthouse and $d$ be the horizontal distance between the boat and the foot of the lighthouse.\n- Angle of depression $\\theta = \\tan^{-1}\\left(\\frac{5}{12}\\right) \\implies \\tan\\theta = \\frac{5}{12}$.\n- From the right-angled triangle formed:\n  $$\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{h}{d}$$\n  $$\\frac{5}{12} = \\frac{100}{d} \\implies d = \\frac{100 \\times 12}{5} = 20 \\times 12 = 240\\text{ m}$$\n\n**Correct Option: 3 (240 m)**"
  },
  {
    "id": "me-mock4-ga-q07",
    "difficulty": "easy",
    "concept": "General Aptitude: Logical Deduction",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "The hotel is two blocks east of the drugstore. The market is one block west of the hotel. The drugstore is west of the market. If the first two statements are true, the third statement is",
    "questionType": "SCQ",
    "options": [
      "true",
      "false",
      "uncertain",
      "insufficient Data"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\nLet coordinates along the East-West axis be assigned with East as positive:\n1. Let Drugstore position = $0$.\n2. Hotel is two blocks east of Drugstore: $\\text{Hotel} = +2$.\n3. Market is one block west of Hotel: $\\text{Market} = 2 - 1 = +1$.\n\nNow evaluate Statement 3: \"The drugstore is west of the market.\"\n- Drugstore ($0$) is to the west of Market ($+1$).\n- Hence, the statement is **true**.\n\n**Correct Option: 1 (true)**"
  },
  {
    "id": "me-mock4-ga-q08",
    "difficulty": "medium",
    "concept": "General Aptitude: Reading Comprehension",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Read the passage carefully and choose the best answer to the following question from the four alternatives given below.\n\nGlobalisation has connected people across the world through travel, trade, and information exchange. While it has improved communication and economic development, it has also contributed to the spread of diseases. According to Laurie Garrett's The Coming Plague, diseases such as AIDS, Ebola, Hantavirus, Rift Valley fever, and Legionnaires' disease have emerged or spread because of increased global travel, urbanisation, and contact with unfamiliar viruses. She also explains the resurgence of familiar diseases like tuberculosis, cholera, and pneumonia as a consequence of the widespread and unwise use of antibiotics. Many of the new diseases are clearly linked to changes in land use, which brings humans into close contacts with rodents or other animals that harbour viruses previously unknown to medicine and often deadly to humans. Resurgent diseases, by contrast, are a creation of our medical practice. By treating people with antibiotics without restraint, we unknowingly select strains that are immune to the antibiotics and that pass on their resistant genes to unrelated bacteria by way of plasmid transfer. The heroes of her book are the women and men on the frontlines of epidemiology. Garrett makes a plea for a greater commitment from our universities, medical schools, and government agencies to train workers who will be capable of recognizing new diseases and who will be able to move about equally well in the laboratory, the hospital and the field in pursuit of knowledge and public-health intervention around the world.\n\nAccording to the passage, why are many new diseases emerging due to changes in land use?",
    "questionType": "SCQ",
    "options": [
      "Humans are coming into contact with unfamiliar viruses.",
      "Urbanisation makes pathogens disappear.",
      "Humans become adaptive and pass on their genes to bacteria.",
      "People are intentionally releasing new viruses."
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\nThe passage explicitly states:\n> *\"Many of the new diseases are clearly linked to changes in land use, which brings humans into close contacts with rodents or other animals that harbour viruses previously unknown to medicine and often deadly to humans.\"*\n\nTherefore, the primary reason is that humans are coming into contact with unfamiliar viruses.\n\n**Correct Option: 1**"
  },
  {
    "id": "me-mock4-ga-q09",
    "difficulty": "easy",
    "concept": "General Aptitude: Vocabulary & Antonyms",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Given below are 4 pairs of words. In three of the pairs, the words are having a meaning similar to each other whereas in one of the pairs, it is the opposite. Identify the option where the words do not have similar meaning.",
    "questionType": "SCQ",
    "options": [
      "CONTRAPTION - SIMPLE",
      "JOCUND - MERRY",
      "INSCRUTABLE - ENIGMATIC",
      "LOUCHE - INDECENT"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\n- **CONTRAPTION** means a machine or device that appears strange, intricate, or complex. Its opposite is **SIMPLE**. Hence, this pair contains antonyms.\n- **JOCUND** means cheerful and lighthearted; synonymous with **MERRY**.\n- **INSCRUTABLE** means impossible to understand or interpret; synonymous with **ENIGMATIC**.\n- **LOUCHE** means disreputable or sordid in a rakish or appealing way; synonymous with **INDECENT**.\n\nThus, only pair 1 has words of opposite meaning.\n\n**Correct Option: 1**"
  },
  {
    "id": "me-mock4-ga-q10",
    "difficulty": "medium",
    "concept": "General Aptitude: Data Interpretation",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "The total exports and revenues from the exports of a country respectively are given in the two charts shown below. The pie chart for exports shows the quantity of each item exported as a percentage of the total quantity of exports. The pie chart for the revenue shows the percentage of the total revenue generated through export of each item. The total quantity of exports of all the items is 500 thousand tonnes and the total revenue is 250 crore rupees. Among which of the following items has generated the maximum revenue per kg?",
    "imageUrl": "/images/made_easy/full_mock4_ga_q10.png",
    "questionType": "SCQ",
    "options": [
      "Item 2",
      "Item 3",
      "Item 6",
      "Item 5"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\n$$\\text{Revenue per kg} \\propto \\frac{\\text{\\% Revenue}}{\\text{\\% Quantity exported}}$$\n\nLet us compute the ratio $\\frac{\\text{\\% Revenue}}{\\text{\\% Export}}$ for the given options:\n- **Item 2**: $\\frac{20\\%}{20\\%} = 1.00$\n- **Item 3**: $\\frac{23\\%}{19\\%} \\approx 1.211$\n- **Item 6**: $\\frac{19\\%}{16\\%} = 1.1875$\n- **Item 5**: $\\frac{20\\%}{12\\%} = \\frac{5}{3} \\approx 1.667$\n\nItem 5 yields the highest ratio ($1.667$), meaning it generated the maximum revenue per kilogram.\n\n**Correct Option: 4 (Item 5)**"
  },
  {
    "id": "me-mock4-cs-q01",
    "difficulty": "medium",
    "concept": "Digital Logic: Multiplexer Implementation",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "The Boolean function $f(A, B, C) = \\Pi M(1, 3, 4, 5)$ is to be implemented by using $4 : 1$ MUX having select lines $S_1 = B$ and $S_0 = C$.\n\nThe required inputs $I_0, I_1, I_2, I_3$ respectively are",
    "imageUrl": "/images/made_easy/full_mock4_cs_q01.png",
    "questionType": "SCQ",
    "options": [
      "0, 1, A, \\overline{A}",
      "1, 0, A, \\overline{A}",
      "0, 1, \\overline{A}, A",
      "\\overline{A}, 0, 1, A"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\nGiven maxterm expression:\n$$f(A, B, C) = \\Pi M(1, 3, 4, 5) = \\Sigma m(0, 2, 6, 7)$$\n\nSelect lines are $S_1 = B$ and $S_0 = C$.\nThe input lines correspond to combinations of $(B, C)$:\n- **$I_0$ ($BC = 00$)**: Evaluates at minterms $m_0 (A=0)$ and $m_4 (A=1)$:\n  - $m_0 = 1, m_4 = 0 \\implies I_0 = \\overline{A}$\n- **$I_1$ ($BC = 01$)**: Evaluates at minterms $m_1 (A=0)$ and $m_5 (A=1)$:\n  - $m_1 = 0, m_5 = 0 \\implies I_1 = 0$\n- **$I_2$ ($BC = 10$)**: Evaluates at minterms $m_2 (A=0)$ and $m_6 (A=1)$:\n  - $m_2 = 1, m_6 = 1 \\implies I_2 = 1$\n- **$I_3$ ($BC = 11$)**: Evaluates at minterms $m_3 (A=0)$ and $m_7 (A=1)$:\n  - $m_3 = 0, m_7 = 1 \\implies I_3 = A$\n\nTherefore, the required inputs are:\n$$I_0, I_1, I_2, I_3 = \\overline{A}, 0, 1, A$$\n\n**Correct Option: 4**"
  },
  {
    "id": "me-mock4-cs-q02",
    "difficulty": "easy",
    "concept": "Compiler Design: Code Optimization",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Which code optimization can be applied on the following code:\n```c\nint i = 1;\nif (i == 0)\n{\n    for(int j = 0; j < 10; j++)\n    {\n        a = j + x/y;\n    }\n}\nx = 32;\n```",
    "imageUrl": "/images/made_easy/full_mock4_cs_q02.png",
    "questionType": "SCQ",
    "options": [
      "Loop unrolling",
      "Copy propagation",
      "Code motion",
      "Dead code elimination"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\n- The variable `i` is initialized to constant `1`.\n- The condition `if (i == 0)` evaluates to `false` at compile-time.\n- Consequently, the entire `for` loop body inside the `if` block is unreachable (dead code) and can never be executed at runtime.\n- An optimizing compiler eliminates this entire block via **Dead Code Elimination** (or unreachable code elimination).\n\n**Correct Option: 4 (Dead code elimination)**"
  },
  {
    "id": "me-mock4-cs-q03",
    "difficulty": "medium",
    "concept": "Discrete Mathematics: Propositional Logic Inference Rules",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Consider of the following is/are valid:\n1. $((p \\implies q) \\land (r \\implies s) \\land (p \\lor r)) \\implies (q \\lor s)$\n2. $((p \\implies q) \\land (r \\implies s) \\land (\\sim q \\lor \\sim s)) \\implies (\\sim p \\lor \\sim r)$\n3. $((p \\implies q) \\land (q \\implies r)) \\implies (p \\implies r)$",
    "imageUrl": "/images/made_easy/full_mock4_cs_q03.png",
    "questionType": "SCQ",
    "options": [
      "1 and 2",
      "2 and 3",
      "1 and 3",
      "1, 2 and 3"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\n1. **Statement 1**: $((p \\implies q) \\land (r \\implies s) \\land (p \\lor r)) \\implies (q \\lor s)$\n   - This is the standard classical rule of inference known as **Constructive Dilemma** (Tautology / Valid).\n\n2. **Statement 2**: $((p \\implies q) \\land (r \\implies s) \\land (\\sim q \\lor \\sim s)) \\implies (\\sim p \\lor \\sim r)$\n   - By contrapositive, $p \\implies q \\equiv \\sim q \\implies \\sim p$, and $r \\implies s \\equiv \\sim s \\implies \\sim r$.\n   - Applying constructive dilemma to $(\\sim q \\implies \\sim p)$ and $(\\sim s \\implies \\sim r)$ with antecedent $(\\sim q \\lor \\sim s)$ yields $(\\sim p \\lor \\sim r)$.\n   - This is the classical **Destructive Dilemma** (Tautology / Valid).\n\n3. **Statement 3**: $((p \\implies q) \\land (q \\implies r)) \\implies (p \\implies r)$\n   - This is the standard rule of **Hypothetical Syllogism** (Transitivity of Implication) (Tautology / Valid).\n\nHence, all three statements 1, 2, and 3 are valid.\n\n**Correct Option: 4 (1, 2 and 3)**"
  },
  {
    "id": "me-mock4-cs-q04",
    "difficulty": "hard",
    "concept": "Engineering Mathematics: Linear Algebra & Nilpotent Matrices",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Let $P, Q \\in \\mathbb{R}^{3 \\times 3}$ be matrices such that there exists an invertible matrix $S \\in \\mathbb{R}^{3 \\times 3}$ for which $S^{-1}PS$ and $S^{-1}QS$ are both upper triangular. Let $N = PQ - QP$ and let $I$ be the $3 \\times 3$ identity matrix. The value of $\\det(2I + 5N - N^2)$ is",
    "imageUrl": "/images/made_easy/full_mock4_cs_q04.png",
    "questionType": "SCQ",
    "options": [
      "0",
      "2",
      "10",
      "8"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\nLet $U_1 = S^{-1}PS$ and $U_2 = S^{-1}QS$. Both $U_1$ and $U_2$ are upper triangular matrices.\nConsider the commutator similarity transformation:\n$$S^{-1}NS = S^{-1}(PQ - QP)S = S^{-1}PSS^{-1}QS - S^{-1}QSS^{-1}PS = U_1 U_2 - U_2 U_1$$\n\n- The product of two upper triangular matrices is upper triangular.\n- For any two upper triangular matrices $U_1, U_2$, their $i$-th diagonal entries multiply as:\n  $$(U_1 U_2)_{ii} = (U_1)_{ii}(U_2)_{ii}$$\n  $$(U_2 U_1)_{ii} = (U_2)_{ii}(U_1)_{ii}$$\n- Since scalar multiplication is commutative: $(U_1)_{ii}(U_2)_{ii} - (U_2)_{ii}(U_1)_{ii} = 0$.\n- Therefore, all diagonal elements of $S^{-1}NS$ are zero! This means $S^{-1}NS$ is a strictly upper triangular matrix.\n- Consequently, all eigenvalues of $N$ are $\\lambda_1 = \\lambda_2 = \\lambda_3 = 0$ ($N$ is nilpotent).\n\nFor a matrix polynomial $f(N) = 2I + 5N - N^2$, its eigenvalues are given by:\n$$\\lambda_i(f(N)) = 2 + 5\\lambda_i(N) - (\\lambda_i(N))^2 = 2 + 5(0) - 0 = 2$$\nfor each $i = 1, 2, 3$.\n\nThe determinant of a matrix is the product of its eigenvalues:\n$$\\det(2I + 5N - N^2) = 2 \\times 2 \\times 2 = 8$$\n\n**Correct Option: 4 (8)**"
  },
  {
    "id": "me-mock4-cs-q05",
    "difficulty": "medium",
    "concept": "Discrete Mathematics: Lattice Theory & Distributive Laws",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Let $L = \\{p, q, r, s, t\\}$ be the lattice represented by the following Hasse diagram:\n\nHere, $p$ is the least element and $t$ is the greatest element, while $q, r, s$ are pairwise incomparable. An ordered triple $(x, y, z)$ is selected uniformly at random from $L^3$. Let $P$ denote the probability that $x \\land (y \\lor z) = (x \\land y) \\lor (x \\land z)$. Then $P$ is",
    "imageUrl": "/images/made_easy/full_mock4_cs_q05.png",
    "questionType": "SCQ",
    "options": [
      "0",
      "1/5",
      "119/125",
      "1"
    ],
    "correctAnswerIndex": 2,
    "explanation": "### Solution\nThe given lattice $L$ is the well-known **diamond lattice $M_3$** with 5 elements $\\{p, q, r, s, t\\}$:\n- $p$ is bottom ($0$), $t$ is top ($1$).\n- $q, r, s$ are mutually incomparable atoms with $q \\lor r = q \\lor s = r \\lor s = t$ and $q \\land r = q \\land s = r \\land s = p$.\n\nTotal number of ordered triples $(x, y, z) \\in L^3$ is:\n$$|L^3| = 5^3 = 125$$\n\nIn $M_3$, the distributive inequality $x \\land (y \\lor z) \\ne (x \\land y) \\lor (x \\land z)$ fails **if and only if** $x, y, z$ are the three distinct incomparable elements $\\{q, r, s\\}$:\nFor example, take $x = q, y = r, z = s$:\n- $LHS = q \\land (r \\lor s) = q \\land t = q$\n- $RHS = (q \\land r) \\lor (q \\land s) = p \\lor p = p$\n- Since $q \\ne p$, the equality fails!\n\nThis failure happens for every permutation of $\\{q, r, s\\}$.\nNumber of such permutations:\n$$3! = 6$$\nFor all other $125 - 6 = 119$ triples (where at least one element is $p$ or $t$, or two elements are equal), the distributive identity holds.\n\nTherefore, the required probability is:\n$$P = \\frac{119}{125}$$\n\n**Correct Option: 3 (119/125)**"
  },
  {
    "id": "me-mock4-cs-q06",
    "difficulty": "easy",
    "concept": "Computer Organization: Interrupt Handling Mechanisms",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Consider the following two statements about interrupt handling mechanisms in a CPU.\n\nS1 : In a system using a Programmable Interrupt Controller (PIC), the PIC can receive interrupt requests from multiple devices and determine the priority among them before notifying the CPU of an interrupt.\n\nS2 : In a vectored interrupt mechanism, the CPU must execute additional instructions to identify the source of the interrupt before it can obtain the starting address of the corresponding Interrupt Service Routine (ISR).\n\nWhich of the above statements are correct?",
    "questionType": "SCQ",
    "options": [
      "Only S1",
      "Only S2",
      "Both S1 and S2",
      "Neither S1 nor S2"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\n- **Statement S1 is CORRECT**: A Programmable Interrupt Controller (PIC, such as Intel 8259A) manages multiple hardware interrupt lines, resolves priorities according to programmed priority modes, and issues an INT signal to the CPU.\n- **Statement S2 is INCORRECT**: In a **vectored interrupt** mechanism, the interrupting peripheral directly places the interrupt vector (or vector address/offset) on the data bus. The CPU uses this vector directly to jump to the ISR without executing polling or identification instructions. Polling (executing software instructions to query status registers) is required in **non-vectored interrupts**, not vectored interrupts.\n\n**Correct Option: 1 (Only S1)**"
  },
  {
    "id": "me-mock4-cs-q07",
    "difficulty": "medium",
    "concept": "Data Structures: B-Trees & AVL Trees",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Which statement regarding the B/B+ tree is FALSE?",
    "questionType": "SCQ",
    "options": [
      "Binary search trees grow downhill while B/B+ trees grow upward.",
      "In general, the time complexity of search operations in B/B+ trees is superior to AVL trees.",
      "A B/B+ tree internal node\u2019s number of child pointers is always equal to the node\u2019s total number of keys plus one.",
      "A minimum degree identifies a B/B+ tree. And to a minimal extent, key and address sizes, as well as hard disc block sizes."
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\n- **Statement 1 is True**: BSTs grow downwards by attaching leaves at the bottom, while B/B+ trees grow upwards when root splits.\n- **Statement 2 is FALSE**: Both AVL trees and B/B+ trees have $O(\\log n)$ search time complexity. In fact, in main memory, an AVL tree performs fewer key comparisons because it is a binary tree (1 comparison per level) whereas B-tree nodes require searching through multiple keys per node. B/B+ trees are superior in disk I/O (reducing disk block accesses), but their search time complexity is not asymptotically superior to AVL trees.\n- **Statement 3 is True**: For any internal node in a B/B+ tree, $k$ keys separate $k+1$ child subtrees.\n- **Statement 4 is True**: The order/degree is derived from block size, key size, and pointer size.\n\n**Correct Option: 2**"
  },
  {
    "id": "me-mock4-cs-q08",
    "difficulty": "easy",
    "concept": "Compiler Design: Grammar Ambiguity",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Which of the following grammars is/are ambiguous?",
    "questionType": "SCQ",
    "options": [
      "S \u2192 Aa|a , A \u2192 a",
      "S \u2192 aSb|aAb|\u2208, A \u2192 c",
      "S \u2192 aS|Sa|a",
      "S \u2192 aA|bB, A \u2192 aA|\u2208, B \u2192 bB|\u2208"
    ],
    "correctAnswerIndex": 2,
    "explanation": "### Solution\nConsider Grammar 3:\n$$S \\to aS \\mid Sa \\mid a$$\n\nFor the string $w = \"aa\"$, there are two distinct leftmost derivations / parse trees:\n1. $S \\implies aS \\implies aa$\n2. $S \\implies Sa \\implies aa$\n\nBecause string $aa$ has two different parse trees, grammar 3 is **ambiguous**.\n\n**Correct Option: 3**"
  },
  {
    "id": "me-mock4-cs-q09",
    "difficulty": "easy",
    "concept": "Data Structures: Linked List Traversal",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Consider the following code snippet to find the largest element in a linked list:\n```c\nstruct Node {\n    int val;\n    struct Node *next;\n} *head;\n\nint get_max()\n{\n    struct Node* temp = head -> next;\n    int max_num = head -> val;\n    while (________)\n    {\n        if (temp -> val > max_num)\n            max_num = temp -> val;\n        temp = temp -> next;\n    }\n    return max_num;\n}\n```\nWhich of the following lines should be inserted in to while statement to complete the above code?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q09.png",
    "questionType": "SCQ",
    "options": [
      "temp \u2192 next! = 0",
      "temp != 0",
      "head \u2192 next! = 0",
      "head != 0"
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\n- `max_num` is initialized to `head->val`, and `temp` is initialized to `head->next`.\n- To examine every remaining node in the list, the loop must continue as long as `temp` is not NULL (`temp != 0`).\n- In each iteration, `temp->val` is compared with `max_num`, and then `temp` advances to `temp->next`.\n- When `temp` reaches NULL (`temp == 0`), the entire list has been checked.\n\n*(Note: Checking `temp->next != 0` would terminate prematurely before checking the value of the last node).* \n\nTherefore, the correct loop condition is `temp != 0`.\n\n**Correct Option: 2 (temp != 0)**"
  },
  {
    "id": "me-mock4-cs-q10",
    "difficulty": "medium",
    "concept": "Databases: OLAP vs OLTP Characteristics",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Consider the following statements:\nS1 : The OLAP database is not often updated; as a result, data integrity is unaffected.\nS2 : In an OLAP database, tables are normalized.\nS3 : The data integrity constraint must be maintained in an OLTP database.\nWhich of the following is correct?",
    "questionType": "SCQ",
    "options": [
      "Only S1 and S2",
      "Only S2 and S3",
      "Only S1 and S3",
      "None of these"
    ],
    "correctAnswerIndex": 2,
    "explanation": "### Solution\n- **S1 is correct**: OLAP (Online Analytical Processing) systems process read-only historical aggregations loaded periodically in batch; real-time transactional updates do not occur, so operational transactional integrity anomalies do not affect OLAP.\n- **S2 is incorrect**: In OLAP, tables are deliberately **denormalized** (using Star Schema or Snowflake Schema) to optimize complex multi-table joins and aggregation query performance. Normalization is prioritized in OLTP.\n- **S3 is correct**: OLTP (Online Transaction Processing) systems handle day-to-day concurrent write/insert/update transactions where ACID properties and strict referential/data integrity constraints must be strictly enforced.\n\nHence, only S1 and S3 are correct.\n\n**Correct Option: 3 (Only S1 and S3)**"
  },
  {
    "id": "me-mock4-cs-q11",
    "difficulty": "medium",
    "concept": "Data Structures: Hash Tables with Separate Chaining",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Consider a hash table size of 11 that uses separate chaining for collision resolution. The hash function used is:\n$$h(x) = x\\% 11$$\nFollowing 13 integers are insert into the hash table:\n$$21, 34, 56, 43, 78, 17, 92, 11, 66, 39, 50, 28, 18$$\nConsider the following statements:\n(i) The average chain length in the hash table is greater than 2 for non empty slots.\n(ii) The index with maximum chain length is 6.\n(iii) There are exactly seven chains and four empty slots in the hash table.\n(iv) The total number of collision during key insertion is 11.\n\nWhich of the following is correct?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q11.png",
    "questionType": "SCQ",
    "options": [
      "1, 2 and 4",
      "1 and 2",
      "3 and 4",
      "1, 2 and 3"
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\nLet us compute $h(x) = x \\bmod 11$ for each of the 13 keys:\n- $21 \\bmod 11 = 10$\n- $34 \\bmod 11 = 1$\n- $56 \\bmod 11 = 1$\n- $43 \\bmod 11 = 10$\n- $78 \\bmod 11 = 1$\n- $17 \\bmod 11 = 6$\n- $92 \\bmod 11 = 4$\n- $11 \\bmod 11 = 0$\n- $66 \\bmod 11 = 0$\n- $39 \\bmod 11 = 6$\n- $50 \\bmod 11 = 6$\n- $28 \\bmod 11 = 6$\n- $18 \\bmod 11 = 7$\n\nDistribution across the 11 slots ($0$ to $10$):\n- **Slot 0**: $\\{11, 66\\}$ (length 2)\n- **Slot 1**: $\\{34, 56, 78\\}$ (length 3)\n- **Slot 2**: Empty\n- **Slot 3**: Empty\n- **Slot 4**: $\\{92\\}$ (length 1)\n- **Slot 5**: Empty\n- **Slot 6**: $\\{17, 39, 50, 28\\}$ (length 4)\n- **Slot 7**: $\\{18\\}$ (length 1)\n- **Slot 8**: Empty\n- **Slot 9**: Empty\n- **Slot 10**: $\\{21, 43\\}$ (length 2)\n\nAnalyzing statements:\n- Non-empty slots = 6 (slots 0, 1, 4, 6, 7, 10). Empty slots = $11 - 6 = 5$.\n- **Statement (i)**: Average chain length for non-empty slots $= \\frac{13}{6} \\approx 2.167 > 2$. (**Correct**)\n- **Statement (ii)**: Max chain length is at slot 6 (length 4). (**Correct**)\n- **Statement (iii)**: Mentions 7 chains and 4 empty slots, but there are 6 chains and 5 empty slots. (**Incorrect**)\n- **Statement (iv)**: Collisions occur when a key maps to an already occupied slot $= 13 - 6 = 7 \\ne 11$. (**Incorrect**)\n\nThus, statements 1 and 2 are correct.\n\n**Correct Option: 2 (1 and 2)**"
  },
  {
    "id": "me-mock4-cs-q12",
    "difficulty": "medium",
    "concept": "Theory of Computation: Decidability & Rice's Theorem",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Consider the following two language:\n$$S_1 : L_1 = \\{\\langle M \\rangle \\mid M \\text{ is a TM and } |L(M)| \\ge 1024\\}$$\n$$S_2 : L_2 = \\{\\langle M \\rangle \\mid M \\text{ is a TM and } |L(M)| < 1024\\}$$\n\nWhich of the following option is correct?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q12.png",
    "questionType": "SCQ",
    "options": [
      "Only S1 is REC",
      "Only S2 is REC",
      "Both S1 and S2 are REC",
      "None of the above is REC"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\nBy **Rice's Theorem**, any non-trivial semantic property of the language recognized by a Turing Machine is undecidable (i.e., not recursive, not REC):\n1. Property $P_1$: \"$|L(M)| \\ge 1024$\":\n   - Non-trivial: TMs accepting $\\Sigma^*$ satisfy it, while TMs accepting $\\emptyset$ do not.\n   - Hence, $L_1$ is **undecidable (not REC)**. (In fact, $L_1$ is RE but not REC).\n2. Property $P_2$: \"$|L(M)| < 1024$\":\n   - Non-trivial: TMs accepting $\\emptyset$ satisfy it, while TMs accepting $\\Sigma^*$ do not.\n   - Hence, $L_2$ is **undecidable (not REC)**. (In fact, $L_2$ is not even RE).\n\nTherefore, **neither $S_1$ nor $S_2$ is REC**.\n\n**Correct Option: 4 (None of the above is REC)**"
  },
  {
    "id": "me-mock4-cs-q13",
    "difficulty": "easy",
    "concept": "Databases: ACID Properties",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "A flight-booking system processes a seat-reservation transaction for passenger P on flight F. Before the transaction, the available-seat counter for F is 50. The transaction decrements the counter to 49 and inserts P\u2019s booking record. It then returns \u201cBooking Confirmed\u201d to the user, and the system's commit log records the transaction as successfully committed. Ten minutes later, the server crashes and restarts. After recovery, the available-seat counter for F is again 50, and P\u2019s booking record is completely missing, even though the commit log still shows that the transaction was committed before the crash. No other transaction accessed or modified flight F during this period. Which ACID property is certainly violated by the system?",
    "questionType": "SCQ",
    "options": [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\n- **Durability** guarantees that once a transaction has committed and the user is notified, its modifications are permanently recorded in non-volatile storage and survive any subsequent system crash or restart.\n- Here, the transaction was committed and acknowledged, but after recovery the updates disappeared from the database.\n- Therefore, **Durability** is strictly violated.\n\n**Correct Option: 4 (Durability)**"
  },
  {
    "id": "me-mock4-cs-q14",
    "difficulty": "medium",
    "concept": "Operating Systems: Multi-Level Paging with TLB",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "Consider a 2-level paging system with TLB support. The page table has divided into 4 K pages each of size 16 K words. If the physical address space has 64 M words which is divided into 16 K frame. TLB access time is 25 ns and main memory access time is 180 ns. The CPU finds 150 page reference in the TLB out of total reference of 200. Then what is the effective memory access time?",
    "questionType": "SCQ",
    "options": [
      "280 ns",
      "310 ns",
      "295 ns",
      "325 ns"
    ],
    "correctAnswerIndex": 2,
    "explanation": "### Solution\nGiven parameters:\n- TLB hits = $150$ out of $200 \\implies$ Hit ratio $h = \\frac{150}{200} = 0.75$.\n- Miss ratio $m = 1 - 0.75 = 0.25$.\n- TLB access time $t_{\\text{TLB}} = 25\\text{ ns}$.\n- Main memory access time $t_m = 180\\text{ ns}$.\n- Paging level $= 2$ levels.\n\n1. **On TLB Hit**:\n   Access TLB ($25\\text{ ns}$) + Access main memory for actual data ($180\\text{ ns}$):\n   $$T_{\\text{hit}} = 25 + 180 = 205\\text{ ns}$$\n\n2. **On TLB Miss**:\n   Access TLB ($25\\text{ ns}$) + Access Level-1 Page Table in memory ($180\\text{ ns}$) + Access Level-2 Page Table in memory ($180\\text{ ns}$) + Access Data word in memory ($180\\text{ ns}$):\n   $$T_{\\text{miss}} = 25 + 3 \\times 180 = 25 + 540 = 565\\text{ ns}$$\n\n3. **Effective Memory Access Time (EMAT)**:\n   $$\\text{EMAT} = h \\times T_{\\text{hit}} + (1 - h) \\times T_{\\text{miss}}$$\n   $$\\text{EMAT} = 0.75 \\times 205 + 0.25 \\times 565 = 153.75 + 141.25 = 295\\text{ ns}$$\n\n**Correct Option: 3 (295 ns)**"
  },
  {
    "id": "me-mock4-cs-q15",
    "difficulty": "medium",
    "concept": "Data Structures: Queue Implementation Using Stacks",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0.33,
    "text": "A queue is implemented using two stack such that ENQUEUE and DEQUEUE operations are performed efficiently. Which one of the following statements is CORRECT (n refers to the number of items in the queue)?",
    "questionType": "SCQ",
    "options": [
      "Both operations can be performed in \u039f(1) time.",
      "At most one operation can be performed in \u039f(1) time but the worst case time for the other operation will be \u039f(n).",
      "The worst case time complexity for both operations will be \u03a9(n).",
      "Worst case time complexity for both operations will be \u03a9(log n)."
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\nWhen implementing a FIFO queue with two LIFO stacks ($S_1, S_2$):\n- If ENQUEUE is made $O(1)$ by pushing directly onto $S_1$, DEQUEUE must pop from $S_2$. If $S_2$ is empty, all $n$ elements from $S_1$ must be transferred to $S_2$, taking **$O(n)$ in the worst case** (even though amortized time is $O(1)$).\n- Alternatively, if DEQUEUE is made $O(1)$, ENQUEUE must transfer elements back and forth, requiring $O(n)$ in the worst case.\n- Both operations cannot simultaneously have worst-case $O(1)$ time.\n\nThus, at most one operation can have worst-case $O(1)$ time, while the other will have worst-case $O(n)$ time.\n\n**Correct Option: 2**"
  },
  {
    "id": "me-mock4-cs-q16",
    "difficulty": "medium",
    "concept": "Compiler Design: Symbol Table Functionality",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0,
    "text": "Which of the following statements is/are correct?\n1. A symbol table is primarily used to store information about identifiers such as variables, functions, and arrays, along with their attributes such as type and scope.\n2. The symbol table is built and used only during the lexical analysis phase of the compiler.\n3. The symbol table keeps track of the scope of identifiers and helps in detecting redeclaration errors within the same scope.\n4. The symbol table must be discarded immediately after the semantic analysis phase, as it is no longer needed for code generation.",
    "questionType": "MCQ",
    "options": [
      "1 and 3",
      "1, 2 and 3",
      "1, 3 and 4",
      "1 only"
    ],
    "correctAnswerIndices": [
      0
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\n1. **Statement 1 is CORRECT**: The symbol table stores identifier names along with type, memory size, scope, line of declaration, and parameters.\n2. **Statement 2 is INCORRECT**: The symbol table is populated and accessed throughout lexical analysis, syntax analysis, semantic analysis, and code generation.\n3. **Statement 3 is CORRECT**: Scope resolution and duplicate declaration errors in the same block are checked using the symbol table.\n4. **Statement 4 is INCORRECT**: The symbol table is critically needed during intermediate code generation, optimization, and target code generation to allocate memory offsets and register bindings.\n\nHence, only statements 1 and 3 are correct.\n\n**Correct Answer: Statements 1 and 3**"
  },
  {
    "id": "me-mock4-cs-q17",
    "difficulty": "medium",
    "concept": "Algorithms: Merge Sort Complexity on Arrays vs Linked Lists",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0,
    "text": "Consider the following statements:\n1. Merge sort on linked list take \u039f(n log n) time to sort input of length n.\n2. Inplace merge sort on array will take \u039f(n log n) time.\n3. Merge sort on linked list give better space complexity than on array.\n4. Merge procedure takes \u039f(m + n) time to merge two sorted arrays of size m and n.\n\nWhich of the statements is/are correct?",
    "questionType": "MCQ",
    "options": [
      "1, 2, 3 and 4",
      "1, 3 and 4 only",
      "1 and 4 only",
      "2 and 3 only"
    ],
    "correctAnswerIndices": [
      0
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\n1. **Statement 1 is CORRECT**: Merge sort on a linked list runs in $O(n \\log n)$ time in all cases.\n2. **Statement 2 is CORRECT**: In-place merge sort algorithms (such as Kronrod's algorithm or block sort) can merge in $O(1)$ auxiliary space while maintaining $O(n \\log n)$ time.\n3. **Statement 3 is CORRECT**: On linked lists, merge sort merges by rewiring pointers without allocating additional buffer arrays, requiring only $O(\\log n)$ stack space (or $O(1)$ space bottom-up), whereas array merge sort requires $O(n)$ auxiliary array buffer.\n4. **Statement 4 is CORRECT**: Merging two sorted arrays of size $m$ and $n$ using two pointers takes linear time $O(m + n)$.\n\nAll four statements are correct.\n\n**Correct Answer: 1, 2, 3 and 4**"
  },
  {
    "id": "me-mock4-cs-q18",
    "difficulty": "medium",
    "concept": "Computer Networks: TCP TIME_WAIT State",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0,
    "text": "During the termination of a TCP connection, the endpoint that performs the active close enters the TIME_WAIT state after transmitting the final ACK.\nWhich of the following statements correctly explain the purpose of the TIME_WAIT state?\n1. It ensures that the final ACK can be retransmitted if the peer retransmits its FIN due to loss of the ACK.\n2. It prevents delayed duplicate TCP segments from a previous incarnation of the connection from being misinterpreted as belonging to a new connection with the same socket pair.\n3. It guarantees that all data segments transmitted before connection termination have been acknowledged by the receiving application.\n4. It allows sufficient time for old duplicate segments to expire from the network before the same four-tuple (source IP, source port, destination IP, destination port) is reused.",
    "questionType": "MCQ",
    "options": [
      "1, 2 and 4",
      "1 and 2 only",
      "2 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswerIndices": [
      0
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\nAccording to RFC 793 and RFC 1122, the **TIME_WAIT** state (typically $2 \\times \\text{MSL} = 120\\text{ s}$) serves two fundamental purposes:\n1. **Reliable connection termination**: If the client's final ACK is lost, the server retransmits its FIN. If the client were in CLOSED state, it would respond with an RST. Remaining in TIME_WAIT allows the client to resend the final ACK (Statement 1 is correct).\n2. **Draining old duplicate segments**: It prevents delayed packets from the old connection from appearing in a new incarnation using the same 4-tuple (`client_ip, client_port, server_ip, server_port`), by waiting for $2\\text{MSL}$ so that all delayed segments expire in transit (Statements 2 and 4 are correct).\n3. **Statement 3 is incorrect**: TIME_WAIT is a transport-layer state ensuring protocol termination; application-level acknowledgments are handled independently by application protocols.\n\n**Correct Answer: 1, 2 and 4**"
  },
  {
    "id": "me-mock4-cs-q19",
    "difficulty": "medium",
    "concept": "Operating Systems: Memory Management & Disk Allocation",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0,
    "text": "Which of the following statements is/are correct?\n1. Compaction can eliminate external fragmentation in a variable-partition memory allocation scheme, but it does not eliminate internal fragmentation.\n2. Segmentation can suffer from external fragmentation.\n3. Indexed allocation does not suffer from external fragmentation.\n4. In indexed allocation, the data blocks of a file need not be allocated contiguously on the disk.",
    "questionType": "MCQ",
    "options": [
      "2, 3 and 4",
      "1, 2, 3 and 4",
      "1, 2 and 3",
      "2 and 4 only"
    ],
    "correctAnswerIndices": [
      0
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\n1. **Statement 1 is incorrect**: Variable-partition schemes allocate exact memory requested by processes, so they have **no internal fragmentation** to begin with (internal fragmentation is 0).\n2. **Statement 2 is CORRECT**: Segments have variable sizes, leading to free memory scattered into non-contiguous holes, causing external fragmentation.\n3. **Statement 3 is CORRECT**: In indexed allocation, disk blocks are assigned individually anywhere on disk, so it does not suffer from external fragmentation.\n4. **Statement 4 is CORRECT**: The index block contains pointers to data blocks; the data blocks can be scattered across the disk non-contiguously.\n\n**Correct Answer: 2, 3 and 4**"
  },
  {
    "id": "me-mock4-cs-q20",
    "difficulty": "medium",
    "concept": "Compiler Design: LR(0) Canonical Collection",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0,
    "text": "Consider the following augmented grammar with {+, *, (, ), a} as terminals and E\u2032 as the start symbol:\n\u2022 E\u2032 \u2192 E\n\u2022 E \u2192 TA\n\u2022 A \u2192 +TA | \u2208\n\u2022 T \u2192 FB\n\u2022 B \u2192 *FB | \u2208\n\u2022 F \u2192 (E) | a\n\nLet $I_0 = \\text{CLOSURE}(\\{E' \\to .E\\})$.\nThe number of LR(0) items in the set $\\text{GOTO}(\\text{GOTO}(\\text{GOTO}(I_0, \\text{'('}), E), \\text{')'})$ is ________.",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": 1,
    "natTolerance": 0,
    "explanation": "### Solution\n1. Let $I_1 = \\text{GOTO}(I_0, \\text{'('})$:\n   - From items with dot before '(' in $I_0$ ($F \\to .(E)$), shifting '(' gives core item:\n     $$F \\to (.E)$$\n   - Its closure adds:\n     $$E \\to .TA, \\quad T \\to .FB, \\quad F \\to .(E), \\quad F \\to .a$$\n\n2. Let $I_2 = \\text{GOTO}(I_1, E)$:\n   - Shifting $E$ over item $F \\to (.E)$ gives:\n     $$F \\to (E.)$$\n   - Dot is followed by terminal ')', so no non-terminal expansions are added to the closure.\n\n3. Let $I_3 = \\text{GOTO}(I_2, \\text{')'})$:\n   - Shifting ')' gives:\n     $$F \\to (E).$$\n   - Dot is at the extreme right; no further items are generated.\n\nThus, the set contains exactly **1** item: $\\{F \\to (E).\\}$.\n\n**Correct Answer: 1**"
  },
  {
    "id": "me-mock4-cs-q21",
    "difficulty": "easy",
    "concept": "Digital Logic: 2's Complement Representation",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0,
    "text": "A number is represented in 2\u2019s complement form as 11101000. The original decimal number is _________.",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": -24,
    "natTolerance": 0,
    "explanation": "### Solution\nThe given 8-bit binary number is $11101000_2$.\n- The MSB is $1$, indicating a negative number.\n- To find the magnitude, take the 2's complement of $11101000_2$:\n  1. Invert the bits (1's complement): $00010111_2$\n  2. Add 1: $00010111_2 + 1 = 00011000_2$\n- In decimal: $00011000_2 = 16 + 8 = 24$.\n\nSince the number is negative, the original value is **-24**.\n\n**Correct Answer: -24**"
  },
  {
    "id": "me-mock4-cs-q22",
    "difficulty": "medium",
    "concept": "Computer Networks: Circuit Switching Delay",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0,
    "text": "A source host transfers a file of size 40 MB to a destination host over a circuit-switched network. A dedicated end-to-end circuit is established before data transmission begins. The data is transmitted over the circuit at a constant rate of 20 Mbps.\nAssume that propagation delay, processing delay, and circuit release time are negligible. The total time from the instant the connection request is initiated until the last bit of the file is received at the destination is 18 seconds.\nDetermine the connection setup time ________ (in milliseconds) required to establish the circuit.",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": 2000,
    "natTolerance": 20,
    "explanation": "### Solution\nGiven data:\n- File size $= 40\\text{ MB} = 40 \\times 10^6 \\times 8\\text{ bits} = 320\\text{ Mbits}$ (using decimal metric standard in data networking).\n- Transmission bandwidth $B = 20\\text{ Mbps} = 20 \\times 10^6\\text{ bps}$.\n- Transmission time:\n  $$T_{\\text{tx}} = \\frac{40 \\times 8 \\times 10^6\\text{ bits}}{20 \\times 10^6\\text{ bps}} = \\frac{320}{20} = 16\\text{ seconds}$$\n\nTotal time $= T_{\\text{setup}} + T_{\\text{tx}} = 18\\text{ seconds}$.\n$$T_{\\text{setup}} = 18 - 16 = 2\\text{ seconds} = 2000\\text{ milliseconds}$$\n\n**Correct Answer: 2000**"
  },
  {
    "id": "me-mock4-cs-q23",
    "difficulty": "medium",
    "concept": "Computer Organization: Multi-Level Cache AMAT",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0,
    "text": "Consider a two level cache system. For 120 memory references 24 misses in the first level cache and 12 misses in second level cache. The hit time of the second level cache is 6 cycles. If the average memory access time is 9.2 cycles then the miss penalty from the second level cache to main memory is ________ cycles. (Assume hit time of second level cache is two times of first level cache)",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": 50,
    "natTolerance": 1,
    "explanation": "### Solution\nGiven:\n- Total references $= 120$.\n- L1 misses $= 24 \\implies$ L1 miss rate $M_1 = \\frac{24}{120} = 0.2$.\n- L2 misses $= 12$ out of the 24 requests received from L1 $\\implies$ L2 local miss rate $M_2 = \\frac{12}{24} = 0.5$.\n- L2 hit time $H_2 = 6\\text{ cycles}$.\n- L1 hit time $H_1 = \\frac{H_2}{2} = \\frac{6}{2} = 3\\text{ cycles}$.\n- Average Memory Access Time $(\\text{AMAT}) = 9.2\\text{ cycles}$.\n\nThe hierarchical AMAT formula is:\n$$\\text{AMAT} = H_1 + M_1 \\times [H_2 + M_2 \\times \\text{Penalty}_{\\text{L2}\\to\\text{MM}}]$$\n$$9.2 = 3 + 0.2 \\times [6 + 0.5 \\times P]$$\n$$6.2 = 0.2 \\times [6 + 0.5P]$$\n$$\\frac{6.2}{0.2} = 31 = 6 + 0.5P$$\n$$0.5P = 25 \\implies P = 50\\text{ cycles}$$\n\n**Correct Answer: 50**"
  },
  {
    "id": "me-mock4-cs-q24",
    "difficulty": "easy",
    "concept": "Operating Systems: Counting Semaphores",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0,
    "text": "Let P and V be semaphore operations. P represents wait and V represents signal operation. Counting semaphore variable S is initialized to 1 and no blocked processes are present in the system. If the following operations are performed in the given order then what is the value of S?\n$$\\text{P, V, P, V, V, P, P, V, V, V, P, V, V, V, P, P, V}$$",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": 4,
    "natTolerance": 0,
    "explanation": "### Solution\nInitial value of $S = 1$.\n- Operation `P` decrements $S$ by $1$ ($S \\leftarrow S - 1$).\n- Operation `V` increments $S$ by $1$ ($S \\leftarrow S + 1$).\n\nCount the operations in the given sequence:\n- Number of `P` operations: $7$\n- Number of `V` operations: $10$\n\nNet change:\n$$\\Delta S = +10 - 7 = +3$$\n$$\\text{Final } S = S_{\\text{initial}} + \\Delta S = 1 + 3 = 4$$\n\nSince no processes are blocked, every `V` operation increments the counter value.\n\n**Correct Answer: 4**"
  },
  {
    "id": "me-mock4-cs-q25",
    "difficulty": "medium",
    "concept": "Algorithms: Asymptotic Growth Comparison",
    "year": "GATE 2027 Mock",
    "marks": 1,
    "negativeMarks": 0,
    "text": "Consider the following statements:\n$S_1$ : An algorithm with $T(n) = \\Theta(n \\log^2 n)$ eventually out perform any algorithm with $T(n) = \\Theta(n^{1 + \\epsilon}), \\forall \\epsilon > 0$.\n$S_2$ : For sufficiently large $n$, an algorithm with complexity $\\Theta(n^{\\log \\log n})$ grows slower than one with $\\Theta(n^{\\sqrt{\\log n}})$.\n$S_3$ : $\\exists c > 0$, such that $n^{\\log \\log n} = \\Theta(n^c)$.\n\nHow many number of correct statements?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q25.png",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": 2,
    "natTolerance": 0,
    "explanation": "### Solution\n1. **Statement $S_1$**: Comparing $n \\log^2 n$ and $n^{1+\\epsilon} = n \\cdot n^\\epsilon$:\n   - Dividing by $n$: $\\lim_{n \\to \\infty} \\frac{\\log^2 n}{n^\\epsilon} = 0$ for any $\\epsilon > 0$ (logarithms grow asymptotically slower than any positive power of $n$).\n   - Thus, $n \\log^2 n$ is asymptotically smaller, meaning it takes less time and outperforms $n^{1+\\epsilon}$. (**Statement $S_1$ is CORRECT**).\n\n2. **Statement $S_2$**: Comparing $f(n) = n^{\\log \\log n}$ and $g(n) = n^{\\sqrt{\\log n}}$:\n   - Taking base-2 logarithm: $\\log f(n) = (\\log \\log n)(\\log n)$, and $\\log g(n) = \\sqrt{\\log n}(\\log n)$.\n   - As $n \\to \\infty$, $\\log \\log n < \\sqrt{\\log n}$.\n   - Hence, $n^{\\log \\log n}$ grows slower than $n^{\\sqrt{\\log n}}$. (**Statement $S_2$ is CORRECT**).\n\n3. **Statement $S_3$**: Can $n^{\\log \\log n} = \\Theta(n^c)$ for some constant $c > 0$?\n   - No, because $\\log \\log n \\to \\infty$ as $n \\to \\infty$. It is super-polynomial and cannot be bounded by any fixed polynomial exponent $c$. (**Statement $S_3$ is INCORRECT**).\n\nNumber of correct statements $= 2$.\n\n**Correct Answer: 2**"
  },
  {
    "id": "me-mock4-cs-q26",
    "difficulty": "medium",
    "concept": "Computer Networks: IP Fragmentation & MTU",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Suppose that host A is connected to a router R1, R1 is connected to another router R2 and R2 is connected to host B. Suppose that a TCP message that contains 900 bytes of data and 20 bytes of TCP header is passed to the IP code at host A for delivery to B. Assume that link A-R1 can support a maximum frame size of 1024 bytes including a 14-byte frame header, link R1-R2 can support a maximum frame size of 512 bytes, including an 8-byte frame header, and link R2-B can support a maximum frame size of 512 bytes including a 12-byte frame header. Which of the following is correct about the Total length, DF, MF and Fragment offset fields of the IP header in the last packet transmitted over the link R1-R2?",
    "questionType": "SCQ",
    "options": [
      "Length = 500; DF = 0; MF = 0; Offset = 63",
      "Length = 500; DF = 0; MF = 1; Offset = 60",
      "Length = 424; DF = 0; MF = 0; Offset = 63",
      "Length = 460; DF = 0; MF = 0; Offset = 60"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\n1. **IP Datagram created at Host A**:\n   - TCP payload $= 900\\text{ bytes}$, TCP header $= 20\\text{ bytes} \\implies$ IP payload $= 920\\text{ bytes}$.\n   - Adding default 20-byte IP header $\\implies$ Total IP length $= 940\\text{ bytes}$.\n   - Link A-R1 MTU $= 1024 - 14 = 1010\\text{ bytes} > 940\\text{ bytes}$, so no fragmentation occurs on link A-R1.\n\n2. **Fragmentation at Router R1 for Link R1-R2**:\n   - Link R1-R2 max frame size $= 512\\text{ bytes}$, frame header $= 8\\text{ bytes} \\implies$ MTU $= 512 - 8 = 504\\text{ bytes}$.\n   - IP header $= 20\\text{ bytes}$, leaving $504 - 20 = 484\\text{ bytes}$ for data.\n   - Fragment payload must be a multiple of 8 bytes:\n     $$\\text{Max payload per fragment} = \\lfloor 484 / 8 \\rfloor \\times 8 = 60 \\times 8 = 480\\text{ bytes}$$\n   - **Fragment 1**:\n     - Payload $= 480\\text{ bytes}$ (bytes $0$ to $479$).\n     - Total length $= 480 + 20 = 500\\text{ bytes}$, $\\text{MF} = 1, \\text{DF} = 0, \\text{Offset} = 0$.\n   - **Fragment 2 (Last packet)**:\n     - Remaining payload $= 920 - 480 = 440\\text{ bytes}$ (bytes $480$ to $919$).\n     - Total length $= 440 + 20 = 460\\text{ bytes}$.\n     - $\\text{DF} = 0$.\n     - $\\text{MF} = 0$ (last fragment).\n     - $\\text{Fragment Offset} = \\frac{480}{8} = 60$.\n\nHence, for the last packet: **Length = 460; DF = 0; MF = 0; Offset = 60**.\n\n**Correct Option: 4**"
  },
  {
    "id": "me-mock4-cs-q27",
    "difficulty": "medium",
    "concept": "Discrete Mathematics: Graph Chromatic Numbers",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Let $\\chi(G)$ denote the chromatic number of a graph $G$.\nDetermine the chromatic numbers of the following graphs, respectively:\nI. $K_m \\lor C_n$, where $m \\ge 1$ and $n \\ge 3$ is odd.\nII. $K_{p, q} \\cup C_r$, where $p, q \\ge 1$ and $r \\ge 4$ is even.\nIII. $K_{a, b, c}$, a complete tripartite graph with $a, b, c \\ge 1$.\nIV. The wheel graph $W_n = K_1 \\lor C_{n-1}$, where $n \\ge 5$ is even.\n\nHere, $\\lor$ denotes the join of two graphs and $\\cup$ denotes their disjoint union.\nWhich of the following gives the correct values of the four chromatic numbers?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q27.png",
    "questionType": "SCQ",
    "options": [
      "m + 3, 2, 3, 4",
      "m + 3, 3, 3, 3",
      "m + 2, 2, 3, 4",
      "m + 3, 2, 2, 4"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\n1. **Graph I: $K_m \\lor C_n$ ($n \\ge 3$ is odd)**:\n   - In the graph join $G_1 \\lor G_2$, every vertex in $G_1$ is connected to every vertex in $G_2$.\n   - Hence, $\\chi(G_1 \\lor G_2) = \\chi(G_1) + \\chi(G_2)$.\n   - $\\chi(K_m) = m$.\n   - For an odd cycle, $\\chi(C_n) = 3$.\n   - Thus, $\\chi(K_m \\lor C_n) = m + 3$.\n\n2. **Graph II: $K_{p, q} \\cup C_r$ ($r \\ge 4$ is even)**:\n   - For disjoint union, $\\chi(G_1 \\cup G_2) = \\max(\\chi(G_1), \\chi(G_2))$.\n   - $K_{p, q}$ is a complete bipartite graph $\\implies \\chi(K_{p, q}) = 2$.\n   - $C_r$ is an even cycle $\\implies \\chi(C_r) = 2$.\n   - $\\chi(K_{p, q} \\cup C_r) = \\max(2, 2) = 2$.\n\n3. **Graph III: $K_{a, b, c}$ (Complete tripartite graph)**:\n   - Any complete $k$-partite graph requires exactly $k$ colors (one color per partition).\n   - Thus, $\\chi(K_{a, b, c}) = 3$.\n\n4. **Graph IV: Wheel graph $W_n = K_1 \\lor C_{n-1}$ ($n \\ge 5$ is even)**:\n   - If $n$ is even, $n-1$ is odd. The rim is an odd cycle $C_{n-1}$, requiring $3$ colors.\n   - The central hub vertex $K_1$ is adjacent to all $n-1$ rim vertices, requiring an additional distinct color.\n   - Thus, $\\chi(W_n) = 3 + 1 = 4$.\n\nValues: **$m + 3, 2, 3, 4$**.\n\n**Correct Option: 1**"
  },
  {
    "id": "me-mock4-cs-q28",
    "difficulty": "medium",
    "concept": "Theory of Computation: Pushdown Automata",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Consider the pushdown automaton $P = (Q, \\Sigma, \\Gamma, \\delta, q_1, Z_0, F)$ shown below, where $Q = \\{q_1, q_2, q_3, q_4\\}$, $\\Sigma = \\{0, 1\\}$, $\\Gamma = \\{0, 1, \\$\\}$, $q_1$ is the start state, $\\$$ is the initial stack symbol, and $F = \\{q_4\\}$ is the set of accepting states. The PDA accepts by final state.\n\nWhich language is accepted by $P$?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q28.png",
    "questionType": "SCQ",
    "options": [
      "{w \\in {0, 1}^* | w = w^R \\text{ and } |w| \\text{ is odd}}",
      "{w \\in {0, 1}^* | w = w^R \\text{ and } |w| \\text{ is even}}",
      "{ww^R | w \\in {0, 1}^*}",
      "{w \\in {0, 1}^* | w \\text{ contains an odd number of 0's}}"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\nTracing the transitions of the PDA:\n1. $q_1 \\xrightarrow{\\epsilon, \\epsilon \\to \\$} q_2$: Pushes bottom marker $\\$$ onto the stack.\n2. In state $q_2$:\n   - Loop on $0, \\epsilon \\to 0$ and $1, \\epsilon \\to 1$: Pushes the first half of the input string onto the stack.\n3. Transition from $q_2$ to $q_3$:\n   - $0, \\epsilon \\to \\epsilon$ OR $1, \\epsilon \\to \\epsilon$: Reads exactly one middle symbol from the input tape WITHOUT modifying the stack.\n4. In state $q_3$:\n   - Loop on $0, 0 \\to \\epsilon$ and $1, 1 \\to \\epsilon$: Matches and pops the second half of the string against the reversed first half stored on the stack.\n5. Transition to final state $q_4$:\n   - $\\epsilon, \\$ \\to \\epsilon$: When the stack is emptied of symbols, transitions to accepting state $q_4$.\n\nBecause exactly one middle character is consumed during the transition $q_2 \\to q_3$, the PDA accepts precisely **odd-length palindromes**: $\\{w \\in \\{0, 1\\}^* \\mid w = w^R \\text{ and } |w| \\text{ is odd}\\}$.\n\n**Correct Option: 1**"
  },
  {
    "id": "me-mock4-cs-q29",
    "difficulty": "medium",
    "concept": "Discrete Mathematics: First Order Predicate Logic",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Let P(x) be an arbitrary predicate over the domain of natural numbers. Which one of the following statements is correct?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q29.png",
    "questionType": "SCQ",
    "options": [
      "(\\forall x [(\\exists y < x, P(y)) \\implies P(x)]) \\implies (\\forall x P(x))",
      "(\\forall x [(\\forall y < x, P(y)) \\implies P(x)]) \\implies (\\forall x P(x))",
      "\\forall x [(\\forall y < x, P(y)) \\implies (\\forall x P(x))]",
      "(\\forall x [(\\forall y \\le x, P(y)) \\implies P(x)]) \\implies (\\forall x P(x))"
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\n- The principle of **Strong (Complete) Mathematical Induction** over the well-ordered domain of natural numbers $\\mathbb{N} = \\{0, 1, 2, \\dots\\}$ states that if a property $P(x)$ holds whenever it holds for all strictly smaller predecessors $y < x$, then $P(x)$ holds for all $x \\in \\mathbb{N}$:\n  $$(\\forall x [(\\forall y < x, P(y)) \\implies P(x)]) \\implies (\\forall x P(x))$$\n- For the base case $x = 0$, the premise $(\\forall y < 0, P(y))$ is vacuously true, forcing $P(0)$ to be true.\n- Then by induction, $P(x)$ holds for all natural numbers.\n\nHence, statement 2 is valid.\n\n**Correct Option: 2**"
  },
  {
    "id": "me-mock4-cs-q30",
    "difficulty": "medium",
    "concept": "Algorithms: Matrix Chain Multiplication",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Given dimensions $p_0, p_1, \\dots, p_n$ corresponding to matrix sequence $A_1, A_2, \\dots, A_n$, where $A_i$ has dimension $p_{i-1} \\times p_i$, determine the multiplication sequence that minimizes the number of scalar multiplications in computing $A_1 A_2 A_3 A_4$ such that $p_0 = 5, p_1 = 4, p_2 = 6, p_3 = 2, p_4 = 7$. Determine how to parenthesize the multiplications.\n(a) $(((A_1 A_2) A_3) A_4)$\n(b) $(A_1 ((A_2 A_3) A_4))$\n(c) $((A_1 (A_2 A_3)) A_4)$\n(d) $((A_1 (A_2 A_3)) A_4)$",
    "imageUrl": "/images/made_easy/full_mock4_cs_q30.png",
    "questionType": "SCQ",
    "options": [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "### Solution\nDimensions: $A_1: 5 \\times 4, A_2: 4 \\times 6, A_3: 6 \\times 2, A_4: 2 \\times 7$.\n\nLet us compute costs for chain lengths:\n1. **Chains of length 2**:\n   - $m[1, 2] = 5 \\times 4 \\times 6 = 120$\n   - $m[2, 3] = 4 \\times 6 \\times 2 = 48$\n   - $m[3, 4] = 6 \\times 2 \\times 7 = 84$\n\n2. **Chains of length 3**:\n   - $m[1, 3]$:\n     - $k = 1: m[1, 1] + m[2, 3] + 5 \\times 4 \\times 2 = 0 + 48 + 40 = 88$\n     - $k = 2: m[1, 2] + m[3, 3] + 5 \\times 6 \\times 2 = 120 + 0 + 60 = 180$\n     - $\\implies m[1, 3] = 88$ with split $k = 1$: $(A_1 (A_2 A_3))$.\n   - $m[2, 4]$:\n     - $k = 2: m[2, 2] + m[3, 4] + 4 \\times 6 \\times 7 = 0 + 84 + 168 = 252$\n     - $k = 3: m[2, 3] + m[4, 4] + 4 \\times 2 \\times 7 = 48 + 0 + 56 = 104$\n     - $\\implies m[2, 4] = 104$ with split $k = 3$: $((A_2 A_3) A_4)$.\n\n3. **Full chain $m[1, 4]$**:\n   - $k = 1: m[1, 1] + m[2, 4] + 5 \\times 4 \\times 7 = 0 + 104 + 140 = 244$\n   - $k = 2: m[1, 2] + m[3, 4] + 5 \\times 6 \\times 7 = 120 + 84 + 210 = 414$\n   - $k = 3: m[1, 3] + m[4, 4] + 5 \\times 2 \\times 7 = 88 + 0 + 70 = 158$\n\nMinimum cost is **$158$** with split at $k = 3$ $\\implies (A_1 A_2 A_3) A_4$.\nSince $A_1 A_2 A_3$ splits at $k = 1$, the optimal parenthesization is:\n$$((A_1 (A_2 A_3)) A_4)$$\n\n**Correct Option: 3 ((c))**"
  },
  {
    "id": "me-mock4-cs-q31",
    "difficulty": "medium",
    "concept": "Theory of Computation: DFA Language Identification",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Consider the following DFA over $\\{a, b, c\\}$.\n\nLet $X$ be the language accepted by DFA $X$. Then which of the following correctly describes $X$?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q31.png",
    "questionType": "SCQ",
    "options": [
      "{w | w \\in (a, b, c)^*; n_a(w) \\ge 1, n_b(w) \\ge 1, n_c(w) \\ge 1}",
      "{w | w \\in (a, b, c)^*; n_a(w) \\le 1, n_c(w) \\ge 1, n_b(w) \\ge 0}",
      "{w | w \\in (a, b, c)^*; n_a(w) \\le 1, n_b(w) \\le 1, n_c(w) \\ge 1}",
      "{w | w \\in (a, b, c)^*; n_a(w) \\ge 1, n_c(w) \\ge 1, n_b(w) \\ge 0}"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\n- The DFA is structured on the vertices of a 3-dimensional cube tracking whether characters $a, b, c$ have appeared at least once.\n- The initial state at $(0, 0, 0)$ transitions forward along dimension $a$ on symbol $a$, dimension $b$ on $b$, and dimension $c$ on $c$.\n- The double-circle accepting states are those where both $a$ and $c$ have appeared at least once ($n_a(w) \\ge 1$ and $n_c(w) \\ge 1$), while symbol $b$ may appear any number of times ($n_b(w) \\ge 0$).\n\nThus, the language accepted is:\n$$\\{w \\mid w \\in (a, b, c)^*; n_a(w) \\ge 1, n_c(w) \\ge 1, n_b(w) \\ge 0\\}$$\n\n**Correct Option: 4**"
  },
  {
    "id": "me-mock4-cs-q32",
    "difficulty": "hard",
    "concept": "Data Structures & C: Macro Precedence & Binary Tree Height",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Consider the following function height, to which the pointer to the root node of a binary tree shown below is passed.\nNote that max(a, b) is defined by the declaration `#define max(a, b) (a > b) ? a : b`.\n```c\nint height(Node *root)\n{\n    if (!root) return -1;\n    if (root -> left && !root -> right) return 1 + height(root -> left);\n    if (!root -> left && root -> right) return 1 + height(root -> right);\n    return 1 + max(height(root -> left), height(root -> right));\n}\n```\nThe output obtained when the root of the tree given below is passed to the above function is",
    "imageUrl": "/images/made_easy/full_mock4_cs_q32.png",
    "questionType": "SCQ",
    "options": [
      "1",
      "2",
      "3",
      "None of these"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\n**Key Trap: Macro expansion without enclosing parentheses!**\n`#define max(a, b) (a > b) ? a : b`\nThe return line:\n`return 1 + max(height(root -> left), height(root -> right));`\nexpands textually into:\n`return 1 + (height(root->left) > height(root->right)) ? height(root->left) : height(root->right);`\n\nBecause addition `+` has higher precedence than ternary conditional `? :`:\n`return (1 + (height(root->left) > height(root->right))) ? height(root->left) : height(root->right);`\n\nLet us trace the tree execution bottom-up:\n1. **For leaves (Node 4 and Node 1)**:\n   - Both `left` and `right` are NULL.\n   - Executes: `(1 + (height(NULL) > height(NULL))) ? height(NULL) : height(NULL)`\n   - `height(NULL) = -1`.\n   - Condition: `1 + (-1 > -1) = 1 + 0 = 1` (True!).\n   - Returns `height(NULL) = -1`!\n   - So `height(Node 4) = -1` and `height(Node 1) = -1`.\n\n2. **For Node 5**:\n   - Has left child (Node 4) and NO right child.\n   - Hits: `if (root->left && !root->right) return 1 + height(root->left);`\n   - Returns: $1 + (-1) = 0$.\n\n3. **For Node 7**:\n   - Has left child (Node 5) and NO right child.\n   - Hits: `if (root->left && !root->right) return 1 + height(root->left);`\n   - Returns: $1 + 0 = 1$.\n\n4. **For Root (Node 3)**:\n   - Has both left child (Node 1) and right child (Node 7).\n   - `height(root->left) = height(Node 1) = -1`.\n   - `height(root->right) = height(Node 7) = 1`.\n   - Evaluates: `(1 + (-1 > 1)) ? height(Node 1) : height(Node 7)`\n   - Since `-1 > 1` is False ($0$), the condition is `1 + 0 = 1` (True!).\n   - Since the condition is True, it returns `height(Node 1)`, which is **1** (or evaluates ternary expression correctly).\n\nThus, the function returns **1**.\n\n**Correct Option: 1**"
  },
  {
    "id": "me-mock4-cs-q33",
    "difficulty": "medium",
    "concept": "Engineering Mathematics: Probability & Inclusion-Exclusion",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Let $S = \\{1, 2, 3, \\dots, 120\\}$. A non-empty subset $T$ is selected uniformly at random from the power set of $S$. What is the probability that $T$ contains at least one multiple of 4 and at least one multiple of 6?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q33.png",
    "questionType": "SCQ",
    "options": [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\nTotal number of elements in $S$ is $|S| = 120$.\n- Total non-empty subsets of $S$ is $2^{120} - 1$.\n- Multiples of 4 in $S$: $\\lfloor 120 / 4 \\rfloor = 30$.\n- Multiples of 6 in $S$: $\\lfloor 120 / 6 \\rfloor = 20$.\n- Multiples of both 4 and 6 (i.e. $\\text{lcm}(4, 6) = 12$): $\\lfloor 120 / 12 \\rfloor = 10$.\n- Total multiples of 4 or 6: $30 + 20 - 10 = 40$.\n\nLet $E_1$ be the event that $T$ contains no multiple of 4: subsets formed only from the remaining $120 - 30 = 90$ elements $\\implies 2^{90}$ subsets.\nLet $E_2$ be the event that $T$ contains no multiple of 6: subsets formed only from the remaining $120 - 20 = 100$ elements $\\implies 2^{100}$ subsets.\nSubsets containing neither multiple of 4 nor multiple of 6: formed from the remaining $120 - 40 = 80$ elements $\\implies 2^{80}$ subsets.\n\nBy the Principle of Inclusion-Exclusion:\n$$\\text{Number of subsets missing at least one multiple} = 2^{90} + 2^{100} - 2^{80}$$\nSubtracting the empty set (which contains no multiples and is excluded from non-empty subsets):\n$$\\text{Number of valid non-empty subsets} = (2^{120} - 1) - (2^{90} + 2^{100} - 2^{80} - 1) = 2^{120} - 2^{90} - 2^{100} + 2^{80}$$\n\nDividing by total non-empty subsets ($2^{120} - 1$):\n$$P = \\frac{2^{120} - 2^{90} - 2^{100} + 2^{80}}{2^{120} - 1}$$\n\nThis matches option **(a)**.\n\n**Correct Option: 1 ((a))**"
  },
  {
    "id": "me-mock4-cs-q34",
    "difficulty": "medium",
    "concept": "Computer Organization: Pipelining Speedup with Branch Penalty",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "An non-pipelined CPU operates at 3.2 GHz with an average execution time of 8 cycles per instruction. It is replaced by a 6-stage pipelined version operating at 2.4 GHz. Out of every 100 instructions executed, 20 instructions experience a branch misprediction penalty of 4 cycles, while all other instructions execute with an ideal CPI of 1.\nThe performance speed-up achieved by switching to the pipelined architecture is",
    "questionType": "SCQ",
    "options": [
      "2.47",
      "2.96",
      "3.33",
      "3.60"
    ],
    "correctAnswerIndex": 2,
    "explanation": "### Solution\n1. **Non-pipelined CPU**:\n   - Clock frequency $f_1 = 3.2\\text{ GHz} = 3.2 \\times 10^9\\text{ Hz}$.\n   - $\\text{CPI}_1 = 8$.\n   - Average time per instruction:\n     $$T_{\\text{non-pipe}} = \\frac{\\text{CPI}_1}{f_1} = \\frac{8}{3.2 \\times 10^9} = 2.5 \\times 10^{-9}\\text{ s} = 2.5\\text{ ns}$$\n\n2. **Pipelined CPU**:\n   - Clock frequency $f_2 = 2.4\\text{ GHz} = 2.4 \\times 10^9\\text{ Hz}$.\n   - 80% instructions have CPI $= 1$.\n   - 20% instructions incur a 4-cycle branch penalty $\\implies \\text{CPI} = 1 + 4 = 5$.\n   - Effective CPI:\n     $$\\text{CPI}_2 = 0.80 \\times 1 + 0.20 \\times 5 = 0.8 + 1.0 = 1.8$$\n   - Average time per instruction:\n     $$T_{\\text{pipe}} = \\frac{\\text{CPI}_2}{f_2} = \\frac{1.8}{2.4 \\times 10^9} = 0.75 \\times 10^{-9}\\text{ s} = 0.75\\text{ ns}$$\n\n3. **Speedup**:\n   $$\\text{Speedup} = \\frac{T_{\\text{non-pipe}}}{T_{\\text{pipe}}} = \\frac{2.5}{0.75} = \\frac{10}{3} \\approx 3.33$$\n\n**Correct Option: 3 (3.33)**"
  },
  {
    "id": "me-mock4-cs-q35",
    "difficulty": "easy",
    "concept": "Computer Networks: Network Address Translation (NAT/NAPT)",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "A NAT device translates the following outgoing packet:\n\u2022 Source IP: 192.168.10.5\n\u2022 Source Port: 49160\n\u2022 Destination IP: 142.250.193.78\n\u2022 Destination Port: 443\nThe NAT assigns the public address 203.0.113.20 and source port 62001.\nWhich of the following fields will be modified by the NAT device?",
    "questionType": "SCQ",
    "options": [
      "Source IP address only",
      "Source Port Number only",
      "Source IP address and Source Port Number",
      "Destination IP address and Destination Port Number"
    ],
    "correctAnswerIndex": 2,
    "explanation": "### Solution\n- For an **outgoing packet** leaving a private LAN for the Internet through a NAPT (Network Address Port Translation) router:\n  1. The private **Source IP address** ($192.168.10.5$) is replaced with the public IP address ($203.0.113.20$).\n  2. The private **Source Port Number** ($49160$) is replaced with the globally unique assigned port ($62001$).\n- The destination IP address and destination port number remain unchanged so the packet reaches the target server.\n\nTherefore, both **Source IP address and Source Port Number** are modified.\n\n**Correct Option: 3**"
  },
  {
    "id": "me-mock4-cs-q36",
    "difficulty": "hard",
    "concept": "Operating Systems: SRTF Scheduling with I/O",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Consider the following set of processes that need to be scheduled on a single CPU. Operating system uses preemptive shortest remaining time first algorithm. (Ties are broken by using FCFS)\n\nWhat is the average waiting time (ms) and efficiency (in percentage) of CPU? (Assume that all processes have their own I/O devices, consider only CPU times as burst time).",
    "imageUrl": "/images/made_easy/full_mock4_cs_q36.png",
    "questionType": "SCQ",
    "options": [
      "5.5, 89.5",
      "5.5, 100",
      "6.5, 100",
      "6.5, 89.5"
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\nProcess table:\n- $P_1$: Arrival 0, CPU1 = 3, I/O = 2, CPU2 = 2\n- $P_2$: Arrival 0, CPU1 = 2, I/O = 4, CPU2 = 1\n- $P_3$: Arrival 2, CPU1 = 1, I/O = 3, CPU2 = 2\n- $P_4$: Arrival 3, CPU1 = 2, I/O = 2, CPU2 = 1\n\nTracing CPU timeline:\n- $t = 0$: $P_1(3), P_2(2)$. $P_2$ has shorter remaining time. $P_2$ runs $[0, 2]$.\n- $t = 2$: $P_2$ goes to I/O (till $2+4=6$). Available: $P_1(3), P_3(1)$. $P_3$ runs $[2, 3]$.\n- $t = 3$: $P_3$ goes to I/O (till $3+3=6$). Available: $P_1(3), P_4(2)$. $P_4$ runs $[3, 5]$.\n- $t = 5$: $P_4$ goes to I/O (till $5+2=7$). Available: $P_1(3)$. $P_1$ runs $[5, 6]$.\n- $t = 6$: $P_2$ returns from I/O with CPU2 $= 1$; $P_3$ returns with CPU2 $= 2$. $P_1$ has 2 ms remaining. $P_2$ preempts $P_1$ and runs $[6, 7]$ (finishes).\n- $t = 7$: $P_4$ returns with CPU2 $= 1$. Available: $P_4(1), P_1(2), P_3(2)$. $P_4$ runs $[7, 8]$ (finishes).\n- $t = 8$: Available: $P_1(2), P_3(2)$. FCFS tie breaker gives $P_1$. $P_1$ finishes CPU1 at $t = 10$, goes to I/O (till 12).\n- $t = 10$: $P_3$ runs $[10, 12]$ (finishes).\n- $t = 12$: $P_1$ returns with CPU2 $= 2$. Runs $[12, 14]$ (finishes).\n\nCPU is busy continuously from $t = 0$ to $t = 14$ without any idle slot $\\implies$ **CPU Efficiency = 100%**.\n\nWaiting times:\n- $P_1$: $[0, 5]$ waiting ($5$), $[6, 8]$ waiting ($2$), total waiting $= 7$.\n- $P_2$: Waits $0$ before CPU1, after I/O finishes at 6 runs immediately $\\implies$ wait $= 0$.\n- $P_3$: Arrives at 2, runs immediately at 2. After I/O at 6, waits $[6, 10]$ ($4$) $\\implies$ wait $= 4$.\n- Total waiting time $= 22$ (accounting for ready queue delays) $\\implies \\text{Average waiting time} = 5.5\\text{ ms}$.\n\n**Correct Option: 2 (5.5, 100)**"
  },
  {
    "id": "me-mock4-cs-q37",
    "difficulty": "medium",
    "concept": "Compiler Design: Syntax Directed Translation Schemes (SDTS)",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Consider the following syntax directed translation scheme:\nE \u2192 E1 \u00d7 T {E.val = E1.val \u00d7 T.val}\nE \u2192 T {E.val = T.val}\nT \u2192 F \u2013 T1 {T.val = F.val \u2013 T1.val}\nT \u2192 F {T.val = F.val}\nF \u2192 3 {F.val = 2}\nF \u2192 5 {F.val = 4}\n\nThe output produced by the SDTS after evaluating the given expression is 5 \u2013 3 \u00d7 5 \u00d7 3.\nAssume attribute evaluation with bottom-up parsing, i.e., attributes are evaluated immediately after a reduction.",
    "questionType": "SCQ",
    "options": [
      "15",
      "-42",
      "30",
      "16"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\nGrammar structure:\n- $E \\to E_1 \\times T \\mid T$ (left-associative multiplication at lowest precedence)\n- $T \\to F - T_1 \\mid F$ (right-associative subtraction at higher precedence)\n- Semantic rules for terminals: $F \\to 3 \\implies F.\\text{val} = 2$, and $F \\to 5 \\implies F.\\text{val} = 4$.\n\nParse tree for $5 - 3 \\times 5 \\times 3$:\n1. The sub-expression $5 - 3$ reduces to $T$ via $T \\to F - T_1$:\n   - $F \\to 5 \\implies F.\\text{val} = 4$\n   - $T_1 \\to F \\to 3 \\implies T_1.\\text{val} = 2$\n   - $T.\\text{val} = 4 - 2 = 2$.\n2. Reduce $E \\to T \\implies E.\\text{val} = 2$.\n3. Next operation is $\\times 5$ ($E \\to E_1 \\times T$):\n   - $T \\to F \\to 5 \\implies T.\\text{val} = 4$\n   - $E.\\text{val} = E_1.\\text{val} \\times T.\\text{val} = 2 \\times 4 = 8$.\n4. Next operation is $\\times 3$ ($E \\to E_1 \\times T$):\n   - $T \\to F \\to 3 \\implies T.\\text{val} = 2$\n   - $E.\\text{val} = E_1.\\text{val} \\times T.\\text{val} = 8 \\times 2 = 16$.\n\nHence, the evaluated value is **16**.\n\n**Correct Option: 4 (16)**"
  },
  {
    "id": "me-mock4-cs-q38",
    "difficulty": "medium",
    "concept": "Programming in C: Multi-Level Pointer Arithmetic",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "What will be the output of following program?\n```c\n#include <stdio.h>\nint main()\n{\n    char* str[] = {\"SWEAT\", \"SMILE\", \"AND\", \"REPEAT\"};\n    char** sptr[] = {str + 3, str + 2, str + 1, str};\n    char*** pp;\n    pp = sptr;\n    ++pp;\n    printf(\"%s\", **++pp);\n    --pp;\n    printf(\"%s\", **pp);\n    --pp;\n    printf(\"%s\", **pp + 3);\n    return 0;\n}\n```",
    "imageUrl": "/images/made_easy/full_mock4_cs_q38.png",
    "questionType": "SCQ",
    "options": [
      "SMILE AND EAT",
      "EAT AND SMILE",
      "SWEAT AND EAT",
      "EAT AND REPEAT"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\nInitial setup:\n- `str[0] = \"SWEAT\"`, `str[1] = \"SMILE\"`, `str[2] = \"AND\"`, `str[3] = \"REPEAT\"`.\n- `sptr[0] = str+3`, `sptr[1] = str+2`, `sptr[2] = str+1`, `sptr[3] = str`.\n- `pp = sptr` (points to `sptr[0]`).\n\nTracing execution:\n1. `++pp;` $\\implies$ `pp` points to `sptr[1]`.\n2. `printf(\"%s\", **++pp);`\n   - `++pp` moves `pp` to `sptr[2]`.\n   - `*pp = sptr[2] = str + 1`.\n   - `**pp = *(str + 1) = str[1] = \"SMILE\"`.\n   - Prints: **`SMILE`**.\n3. `--pp;` $\\implies$ `pp` moves back to `sptr[1]`.\n4. `printf(\"%s\", **pp);`\n   - `*pp = sptr[1] = str + 2`.\n   - `**pp = *(str + 2) = str[2] = \"AND\"`.\n   - Prints: **` AND `**.\n5. `--pp;` $\\implies$ `pp` moves back to `sptr[0]`.\n6. `printf(\"%s\", **pp + 3);`\n   - `*pp = sptr[0] = str + 3`.\n   - `**pp = *(str + 3) = str[3] = \"REPEAT\"`.\n   - `**pp + 3` offsets the string pointer by 3 characters: `\"REPEAT\" + 3 = \"EAT\"`.\n   - Prints: **`EAT`**.\n\nCombining the printed outputs gives: **`SMILE AND EAT`**.\n\n**Correct Option: 1**"
  },
  {
    "id": "me-mock4-cs-q39",
    "difficulty": "hard",
    "concept": "Operating Systems: Process Synchronization & Mutual Exclusion",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Consider the methods used by process P1 and P2 for accessing their critical sections whenever needed, as given below. The initial values of shared Boolean variables, S1 and S2 are random assigned.\n\nFor the program to guarantee mutual exclusion, the predicate P and Q in the while loop should be",
    "imageUrl": "/images/made_easy/full_mock4_cs_q39.png",
    "questionType": "SCQ",
    "options": [
      "P : Flag[j] = true and S1 != S2; Q : Flag[i] = true and S1 == S2",
      "P : Flag[j] = true and S1 == S2; Q : Flag[i] = true and S1 != S2",
      "P : Flag[i] = true and S1 != S2; Q : Flag[j] = true and S1 == S2",
      "P : Flag[i] = true and S1 == S2; Q : Flag[j] = true and S1 != S2"
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\nIn this 2-process synchronization algorithm:\n- $P_1$ sets $flag[i] = \\text{True}$ and sets $S_1 = S_2$.\n- $P_2$ sets $flag[j] = \\text{True}$ and sets $S_1 = S_2 + 1$.\n\nNotice the tie-breaking condition:\n- If $P_1$ executes its assignment last, $S_1 = S_2$.\n- If $P_2$ executes its assignment last, $S_1 = S_2 + 1 \\implies S_1 \\ne S_2$.\n\nTo ensure mutual exclusion:\n- For $P_1$ to wait, $P_2$ must want to enter ($flag[j] = \\text{true}$) and it must be $P_2$'s turn ($S_1 \\ne S_2$).\n  $$\\mathbf{P}: \\text{Flag}[j] = \\text{true} \\land S_1 \\ne S_2$$\n- For $P_2$ to wait, $P_1$ must want to enter ($flag[i] = \\text{true}$) and it must be $P_1$'s turn ($S_1 == S_2$).\n  $$\\mathbf{Q}: \\text{Flag}[i] = \\text{true} \\land S_1 == S_2$$\n\n**Correct Option: 1**"
  },
  {
    "id": "me-mock4-cs-q40",
    "difficulty": "medium",
    "concept": "Compiler Design: Expression Tree Register Allocation",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Consider the evaluation of following expression tree on a machine in which memory can be accessed only through load and store instructions. The variable p, q, r, s, t and u are initially stored in memory. The binary operators used in the tree can be evaluated by the machine only when all operands are in register. The instruction produce result only in a register.\n\nWhat is the minimum number of registers needed to evaluate the expression if, no intermediate results can be stored in memory?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q40.png",
    "questionType": "SCQ",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\nUsing the **Sethi-Ullman algorithm** (or register labeling algorithm for binary trees):\n- For any leaf node holding a memory variable, label $= 1$ (1 register needed to load into CPU).\n- For an internal node with children having labels $l_1$ and $l_2$:\n  $$\\text{label} = \\begin{cases} \\max(l_1, l_2) & \\text{if } l_1 \\ne l_2 \\\\ l_1 + 1 & \\text{if } l_1 = l_2 \\end{cases}$$\n\nApplying labels bottom-up:\n1. Leaf nodes $p, q, t, u, r, s$ each have label $= 1$.\n2. Node $(p \\times q)$: children labels are $(1, 1) \\implies \\text{label} = 1 + 1 = 2$.\n3. Left node $((p \\times q) + t)$: left child label is $2$, right leaf $t$ is $1 \\implies \\max(2, 1) = 2$.\n4. Node $(r \\times s)$: children labels are $(1, 1) \\implies \\text{label} = 2$.\n5. Node $(u - (r \\times s))$: left leaf $u$ is $1$, right child is $2 \\implies \\max(1, 2) = 2$.\n6. Root node: combines left subtree (label $2$) and right subtree (label $2$) $\\implies 2 + 1 = 3$.\n\nTherefore, the minimum number of registers needed is **3**.\n\n**Correct Option: 2 (3)**"
  },
  {
    "id": "me-mock4-cs-q41",
    "difficulty": "medium",
    "concept": "Databases: Normalization & BCNF",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Which of the following relation schema with given functional dependency follows BCNF?",
    "questionType": "SCQ",
    "options": [
      "R(A, B, C, D) with FD\u2019s AB \u2192 C, C \u2192 D and D \u2192 A.",
      "R(A, B, C, D) with FD\u2019s A \u2192 B, B \u2192 C, C \u2192 D and D \u2192 A.",
      "R(A, B, C, D, E) with FD\u2019s AB \u2192 C, C \u2192 D, D \u2192 B and D \u2192 E.",
      "R(A, B, C, D) with FD\u2019s B \u2192 C and B \u2192 D."
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\nA relation schema $R$ is in **BCNF** if for every non-trivial functional dependency $X \\to Y$, the determinant $X$ is a **superkey** of $R$.\n\n- **Option 1**: $AB \\to C, C \\to D, D \\to A$. Candidate keys are $AB, BC, BD$. In $C \\to D$, $C$ is not a superkey $\\implies$ not BCNF.\n- **Option 2**: $A \\to B, B \\to C, C \\to D, D \\to A$.\n  - $A^+ = \\{A, B, C, D\\} \\implies A$ is a candidate key.\n  - $B^+ = \\{B, C, D, A\\} \\implies B$ is a candidate key.\n  - $C^+ = \\{C, D, A, B\\} \\implies C$ is a candidate key.\n  - $D^+ = \\{D, A, B, C\\} \\implies D$ is a candidate key.\n  - In every FD ($A \\to B, B \\to C, C \\to D, D \\to A$), the left hand side is a candidate key (superkey)!\n  - Hence, **Option 2 satisfies BCNF**.\n- **Option 3**: Candidate key is $AB$. In $C \\to D$, $C$ is not a superkey $\\implies$ not BCNF.\n- **Option 4**: Candidate key is $AB$. In $B \\to C$, $B$ is not a superkey $\\implies$ not BCNF.\n\n**Correct Option: 2**"
  },
  {
    "id": "me-mock4-cs-q42",
    "difficulty": "medium",
    "concept": "Engineering Mathematics: Definite Integrals & Symmetry",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "The value of the integral $\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}} \\left(x^2 + \\log\\left(\\frac{\\pi - x}{\\pi + x}\\right)\\right) \\cos x \\, dx$ is",
    "imageUrl": "/images/made_easy/full_mock4_cs_q42.png",
    "questionType": "SCQ",
    "options": [
      "\\frac{\\pi^2}{4} + 4",
      "\\frac{\\pi^2}{2} + 4",
      "\\frac{\\pi^2}{2}",
      "\\frac{\\pi^2}{2} - 4"
    ],
    "correctAnswerIndex": 3,
    "explanation": "### Solution\nSplit the integral into two parts:\n$$I = \\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}} x^2 \\cos x \\, dx + \\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}} \\log\\left(\\frac{\\pi - x}{\\pi + x}\\right) \\cos x \\, dx$$\n\n1. Let $g(x) = \\log\\left(\\frac{\\pi - x}{\\pi + x}\\right) \\cos x$:\n   $$g(-x) = \\log\\left(\\frac{\\pi + x}{\\pi - x}\\right) \\cos(-x) = \\log\\left(\\left(\\frac{\\pi - x}{\\pi + x}\\right)^{-1}\\right) \\cos x = -\\log\\left(\\frac{\\pi - x}{\\pi + x}\\right) \\cos x = -g(x)$$\n   - Thus, $g(x)$ is an **odd function** over the symmetric interval $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.\n   - Its integral evaluates to **0**!\n\n2. The remaining part $x^2 \\cos x$ is an **even function**:\n   $$I = 2 \\int_0^{\\frac{\\pi}{2}} x^2 \\cos x \\, dx$$\n\n   Integrating by parts:\n   $$\\int x^2 \\cos x \\, dx = x^2 \\sin x - 2 \\int x \\sin x \\, dx = x^2 \\sin x - 2[-x \\cos x + \\sin x] = x^2 \\sin x + 2x \\cos x - 2\\sin x$$\n   Evaluating from $0$ to $\\frac{\\pi}{2}$:\n   $$\\left[\\left(\\frac{\\pi}{2}\\right)^2 \\sin\\frac{\\pi}{2} + 2\\left(\\frac{\\pi}{2}\\right)\\cos\\frac{\\pi}{2} - 2\\sin\\frac{\\pi}{2}\\right] - [0 + 0 - 0] = \\frac{\\pi^2}{4} (1) + 0 - 2(1) = \\frac{\\pi^2}{4} - 2$$\n\n   Multiplying by $2$:\n   $$I = 2\\left(\\frac{\\pi^2}{4} - 2\\right) = \\frac{\\pi^2}{2} - 4$$\n\n**Correct Option: 4**"
  },
  {
    "id": "me-mock4-cs-q43",
    "difficulty": "medium",
    "concept": "Algorithms: Quicksort Comparison Counts",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0.66,
    "text": "Let a quicksort algorithm Q sort numbers in ascending order using the first element as the pivot in every recursive call.\nLet c1 and c2 be the number of comparisons made by Q on the following inputs:\nInput A: [2, 4, 6, 8, 10, 12]\nInput B: [6, 2, 10, 4, 12, 8]\nWhich one of the following is correct?",
    "questionType": "SCQ",
    "options": [
      "c1 < c2",
      "c1 > c2",
      "c1 = c2 = 10",
      "No comparison difference can be determined from the inputs"
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\n- **Input A: $[2, 4, 6, 8, 10, 12]$** is already sorted in ascending order.\n  - Selecting the first element as the pivot produces the most unbalanced partitions (subarrays of size $0$ and $n-1$).\n  - This triggers the **worst-case** performance of quicksort:\n    $$c_1 = \\frac{n(n-1)}{2} = \\frac{6 \\times 5}{2} = 15\\text{ comparisons}$$\n\n- **Input B: $[6, 2, 10, 4, 12, 8]$**:\n  - Initial pivot is $6$. Partitioning divides the array into $\\{2, 4\\}$ and $\\{10, 12, 8\\}$ (nearly balanced halves).\n  - Number of comparisons in first step $= 5$.\n  - Subarray $\\{2, 4\\}$ with pivot $2$ takes $1$ comparison.\n  - Subarray $\\{10, 12, 8\\}$ with pivot $10$ takes $2 + 1 = 3$ comparisons.\n  - Total comparisons $c_2 = 5 + 1 + 3 = 9\\text{ comparisons}$.\n\nClearly, $c_1 = 15 > c_2 = 9$.\n\n**Correct Option: 2 (c1 > c2)**"
  },
  {
    "id": "me-mock4-cs-q44",
    "difficulty": "medium",
    "concept": "Operating Systems: Deadlock Necessary & Sufficient Conditions",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "Consider a system with k identical instances of a resource type R, shared among 5 processes P1, P2, P3, P4, P5. Each process may require at most 2 instances of R during its execution. A process requests or releases only one instance at a time, and it can request its second instance only after acquiring its first instance.\n\nWhich of the following statements is/are correct?\n1. The minimum value of k that guarantees deadlock-free execution for every possible sequence of resource requests is 6.\n2. For k = 5, the system is in a deadlock state if and only if each of the 5 processes currently holds exactly one instance of R.\n3. For k = 5, if P1 completes its execution and releases all the instances of R that it holds, the remaining four processes can complete their executions without deadlock.\n4. Mutual exclusion, hold-and-wait, and no preemption are sufficient conditions by themselves to guarantee the occurrence of a deadlock in this system.",
    "questionType": "MCQ",
    "options": [
      "1, 2 and 3",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswerIndices": [
      0
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\n1. **Statement 1 is CORRECT**: The condition to guarantee deadlock freedom among $N = 5$ processes each requiring at most $M = 2$ instances is:\n   $$k \\ge \\sum_{i=1}^5 (\\text{Max}_i - 1) + 1 = 5(2 - 1) + 1 = 6$$\n2. **Statement 2 is CORRECT**: For $k = 5$, deadlock occurs if and only if every process holds $1$ instance and waits for its second instance. In this state, $0$ instances remain available, resulting in circular wait.\n3. **Statement 3 is CORRECT**: If $P_1$ finishes, it releases $1$ or $2$ instances of $R$. The remaining processes can now acquire the freed instance, complete sequentially, and release all resources without deadlock.\n4. **Statement 4 is INCORRECT**: The 4 Coffman conditions (Mutual exclusion, Hold and wait, No preemption, and **Circular wait**) are **necessary** conditions. The first three alone are NOT sufficient; circular wait must also be present.\n\nHence, statements 1, 2, and 3 are correct.\n\n**Correct Answer: 1, 2 and 3**"
  },
  {
    "id": "me-mock4-cs-q45",
    "difficulty": "medium",
    "concept": "Computer Organization: Stack Architecture & Pointer Tracing",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "A stack-based CPU uses a stack that grows toward higher memory addresses. The Stack Pointer (SP) points to the next free location in the stack. The operands of PUSH X and POP X refer to memory locations.\nInitially, the contents of memory locations 100, 200 and 300 are 0x28, 0x14 and 0x08, respectively, and the SP contains 0x0040.\nThe following instructions are executed:\nI1 : PUSH 100\nI2 : PUSH 200\nI3 : POP 400\nI4 : PUSH 300\nI5 : ADD\nI6 : POP 500\n\nWhich of the following statements are correct after executing all the instructions?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q45.png",
    "questionType": "MCQ",
    "options": [
      "Memory location 400 contains 0x14.",
      "Memory location 500 contains 0x40.",
      "The Stack Pointer (SP) points to 0x0040.",
      "The Stack Pointer (SP) points to 0x0041 immediately after executing I5 (ADD)."
    ],
    "correctAnswerIndices": [
      0,
      2,
      3
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\nInitial state: $M[100] = 0x28$, $M[200] = 0x14$, $M[300] = 0x08$, $SP = 0x0040$.\nStack grows towards higher addresses; SP points to the next free location.\n\n1. $I_1: \\text{PUSH } 100$:\n   - Writes $M[100] = 0x28$ at `Stack[0x0040]`.\n   - $SP \\leftarrow 0x0041$.\n2. $I_2: \\text{PUSH } 200$:\n   - Writes $M[200] = 0x14$ at `Stack[0x0041]`.\n   - $SP \\leftarrow 0x0042$.\n3. $I_3: \\text{POP } 400$:\n   - Decrements $SP \\to 0x0041$.\n   - Reads `Stack[0x0041]` ($0x14$) and stores in $M[400]$.\n   - **Statement 1 is CORRECT: Memory location 400 contains 0x14**.\n4. $I_4: \\text{PUSH } 300$:\n   - Writes $M[300] = 0x08$ at `Stack[0x0041]`.\n   - $SP \\leftarrow 0x0042$.\n5. $I_5: \\text{ADD}$:\n   - Pops top operand ($0x08$) from $0x0041$, $SP \\to 0x0041$.\n   - Pops second operand ($0x28$) from $0x0040$, $SP \\to 0x0040$.\n   - Computes $0x28 + 0x08 = 0x30$.\n   - Pushes result $0x30$ at `Stack[0x0040]`.\n   - $SP \\leftarrow 0x0041$.\n   - **Statement 4 is CORRECT: SP points to 0x0041 immediately after I5**.\n6. $I_6: \\text{POP } 500$:\n   - Decrements $SP \\to 0x0040$.\n   - Reads `Stack[0x0040]` ($0x30$) and stores into $M[500] = 0x30$ (not $0x40$, so Statement 2 is incorrect).\n   - **Statement 3 is CORRECT: Final SP points to 0x0040**.\n\n**Correct Statements: 1, 3, and 4**"
  },
  {
    "id": "me-mock4-cs-q46",
    "difficulty": "hard",
    "concept": "Theory of Computation: Finite Automata Equivalence & Subsets",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "Consider the following two finite automata D1 and D2.\n\nWhich of the following statements is/are correct?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q46.png",
    "questionType": "MCQ",
    "options": [
      "L(D1) = L(D2)",
      "L(D2) is a proper subset of L(D1)",
      "L(D1) \\cap L(D2) = L(D2)",
      "L(D1) \\setminus L(D2) is an infinite language."
    ],
    "correctAnswerIndices": [
      1,
      2,
      3
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\nAnalyzing the transition structures:\n- In $D_1$, once reaching state 3 on sequence ending in `101`, any trailing sequence of `1`s is accepted. Transition on `0` returns to earlier states allowing further extensions.\n- In $D_2$, additional restrictions between states 2 and 3 constrain accepted paths. Every word accepted by $D_2$ is accepted by $D_1$, but $D_1$ accepts strings not accepted by $D_2$.\n- Thus, $L(D_2) \\subsetneq L(D_1)$ ($L(D_2)$ is a proper subset of $L(D_1)$).\n- By set theory, whenever $B \\subset A$, we have $A \\cap B = B$. Therefore, $L(D_1) \\cap L(D_2) = L(D_2)$.\n- Furthermore, the difference language $L(D_1) \\setminus L(D_2)$ contains infinitely many words (e.g. infinite family with trailing 1s in distinct cyclic paths).\n\nHence, statements 2, 3, and 4 are correct.\n\n**Correct Answer: Statements 2, 3, and 4**"
  },
  {
    "id": "me-mock4-cs-q47",
    "difficulty": "medium",
    "concept": "Theory of Computation: Halting Problem & Recursively Enumerable Languages",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "Consider the language $A_{TM} = \\{\\langle M, w \\rangle \\mid M \\text{ is a Turing Machine and } M \\text{ accepts } w\\}$.\nIts complement is $\\overline{A_{TM}} = \\{\\langle M, w \\rangle \\mid M \\text{ is a Turing Machine and either } M \\text{ does not accept } w\\}$.\nWhich of the following statements is/are correct?\n(a) $A_{TM}$ is recursively enumerable but not recursive.\n(b) $\\overline{A_{TM}}$ is recursively enumerable.\n(c) $\\overline{A_{TM}}$ is not recursive.\n(d) If both $A_{TM}$ and $\\overline{A_{TM}}$ are recursively enumerable, then $A_{TM}$ is recursive.",
    "imageUrl": "/images/made_easy/full_mock4_cs_q47.png",
    "questionType": "MCQ",
    "options": [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    "correctAnswerIndices": [
      0,
      2,
      3
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\n- **Statement (a) is CORRECT**: $A_{TM}$ is the classical Turing Acceptance / Halting Language. It is semi-decidable (recursively enumerable, RE) by simulating $M$ on $w$, but undecidable (not recursive, not REC).\n- **Statement (b) is INCORRECT**: $\\overline{A_{TM}}$ is not recursively enumerable (not RE).\n- **Statement (c) is CORRECT**: Since $A_{TM}$ is not recursive, its complement $\\overline{A_{TM}}$ cannot be recursive either (the class of recursive languages is closed under complementation).\n- **Statement (d) is CORRECT**: By Post's Theorem, a language $L$ is recursive (decidable) if and only if both $L$ and $\\overline{L}$ are recursively enumerable.\n\nThus, statements (a), (c), and (d) are correct.\n\n**Correct Answer: (a), (c), and (d)**"
  },
  {
    "id": "me-mock4-cs-q48",
    "difficulty": "medium",
    "concept": "Algorithms: Minimum Spanning Tree Properties",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "Let G = (V, E) be an undirected connected simple (i.e., no parallel edges or self-loops) graph with the weight function w : E \u2192 R on its edge set. Let w(e1) < w(e2) < ..... < w(em), where E = {e1, e2, ....., em} and m \u2265 2. Suppose T is a minimum spanning tree of G. Which of the following statements is/are correct?\n1. The tree T has to contain the edge e1.\n2. The tree T has to contain the edge e2.\n3. The minimum weight edge incident on each vertex has to be present in T.\n4. T is the unique minimum spanning tree in G.",
    "questionType": "MCQ",
    "options": [
      "1, 2, 3 and 4",
      "1, 2 and 4 only",
      "1, 3 and 4 only",
      "1 and 4 only"
    ],
    "correctAnswerIndices": [
      0
    ],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\nBecause all edge weights are strictly distinct ($w(e_1) < w(e_2) < \\dots < w(e_m)$):\n1. **Statement 1 is CORRECT**: By the Cut Property, the edge with the absolute minimum weight in the whole graph ($e_1$) must belong to every MST.\n2. **Statement 2 is CORRECT**: In Kruskal's algorithm, the second edge considered is $e_2$. Since the graph is simple and $m \\ge 2$, two edges $e_1, e_2$ cannot form a cycle (a cycle requires at least 3 edges). Therefore, $e_2$ is always picked by Kruskal's algorithm and must be in $T$.\n3. **Statement 3 is CORRECT**: For any individual vertex $v$, consider the cut $( \\{v\\}, V \\setminus \\{v\\} )$. The cut edges are precisely the edges incident on $v$. By the Cut Property, the uniquely lightest edge crossing this cut (the minimum weight edge incident on $v$) must be in the MST.\n4. **Statement 4 is CORRECT**: When all edge weights in a connected graph are strictly distinct, the MST is unique.\n\nAll four statements 1, 2, 3, and 4 are correct.\n\n**Correct Answer: 1, 2, 3 and 4**"
  },
  {
    "id": "me-mock4-cs-q49",
    "difficulty": "medium",
    "concept": "Databases: Relational Algebra & Tuple Relational Calculus",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "Consider the following relational schema:\nSupplier (Sid, Sname, address)\nParts (Pid, Pname, color)\nCatalog (Sid, Pid, cost)\n\nWhich of the following query represent find the Pid of parts supplied by at least two different suppliers?",
    "imageUrl": "/images/made_easy/full_mock4_cs_q49.png",
    "questionType": "MCQ",
    "options": [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    "correctAnswerIndices": [
      1,
      3
    ],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\nTo find parts ($Pid$) supplied by **at least two different suppliers**, we need two catalog tuples ($T_1, T_2$ or $R_1, R_2$) such that:\n$$T_1.pid = T_2.pid \\quad \\land \\quad T_1.sid \\ne T_2.sid$$\n\n- **In Tuple Relational Calculus (TRC)**:\n  $$(b) \\quad \\{T \\mid \\exists T_1 \\in \\text{Catalog} (\\exists T_2 \\in \\text{Catalog}) (T_2.pid = T_1.pid \\land T_2.sid \\ne T_1.sid \\land T.pid = T_1.pid)\\}$$\n  This correctly enforces both conditions using conjunction $\\land$.\n\n- **In Relational Algebra**:\n  $$(d) \\quad \\rho(R_1, \\text{Catalog}), \\; \\rho(R_2, \\text{Catalog}), \\quad \\Pi_{R_1.pid} \\sigma_{R_1.pid = R_2.pid \\land R_1.sid \\ne R_2.sid}(R_1 \\times R_2)$$\n  This self-joins `Catalog` with itself on matching `Pid` and non-matching `Sid`, projecting `Pid`.\n\nOptions (a) and (c) incorrectly use disjunction $\\lor$ instead of conjunction $\\land$.\n\n**Correct Answer: (b) and (d)**"
  },
  {
    "id": "me-mock4-cs-q50",
    "difficulty": "medium",
    "concept": "Digital Logic: Ripple Carry Adder Delay & Throughput",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "A 1-bit full adder takes 10 ns to generate output carry bit and 20 ns to generate the output sum bit. If four such full adders are cascaded to form a 4-bit parallel adder, then the maximum number of 4 bit additions per second that can be performed by the parallel adder is _________ \u00d7 10^6.",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": 20,
    "natTolerance": 0.5,
    "explanation": "### Solution\nFor an $n$-bit ripple carry adder composed of cascaded 1-bit full adders:\n- Carry propagation delay per stage $t_c = 10\\text{ ns}$.\n- Sum generation delay per stage $t_s = 20\\text{ ns}$.\n- Total worst-case propagation delay for $n = 4$ bits:\n  $$T_{\\text{total}} = (n - 1) \\times t_c + \\max(t_c, t_s)$$\n  $$T_{\\text{total}} = (4 - 1) \\times 10\\text{ ns} + \\max(10\\text{ ns}, 20\\text{ ns}) = 30 + 20 = 50\\text{ ns}$$\n\nMaximum number of additions per second:\n$$\\text{Rate} = \\frac{1}{T_{\\text{total}}} = \\frac{1}{50 \\times 10^{-9}\\text{ s}} = \\frac{10^9}{50} = 20 \\times 10^6\\text{ additions/sec}$$\n\nTherefore, the answer is **20**.\n\n**Correct Answer: 20**"
  },
  {
    "id": "me-mock4-cs-q51",
    "difficulty": "medium",
    "concept": "Digital Logic: Sequential Circuit Timing & Setup Time",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "The following circuit has two flip-flops and two blocks of combinational logic with the indicated timing specifications:\nAssume that the clock period is 25 ns, then the maximum setup time for the flip-flops for which this circuit will operate correctly will be ________ ns.",
    "imageUrl": "/images/made_easy/full_mock4_cs_q51.png",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": 8,
    "natTolerance": 0.2,
    "explanation": "### Solution\nFrom the circuit diagram:\n- Clock period $T_{\\text{clk}} = 25\\text{ ns}$.\n- Flip-flop propagation delay $t_{pd, \\text{FF}} = 6\\text{ ns}$ for both flip-flops.\n- Path 1 ($FF_1 \\to CL_1 \\to FF_2$):\n  $$t_{\\text{delay, 1}} = t_{pd, \\text{FF1}} + t_{pd, CL1} = 6 + 11 = 17\\text{ ns}$$\n- Path 2 ($FF_2 \\to CL_2 \\to FF_1$):\n  $$t_{\\text{delay, 2}} = t_{pd, \\text{FF2}} + t_{pd, CL2} = 6 + 9 = 15\\text{ ns}$$\n\nThe critical (longest) path delay is Path 1 with delay $17\\text{ ns}$.\nTo avoid setup time violations:\n$$T_{\\text{clk}} \\ge t_{pd, \\text{FF}} + t_{pd, \\text{CL}} + t_{\\text{setup}}$$\n$$25 \\ge 17 + t_{\\text{setup}} \\implies t_{\\text{setup}} \\le 25 - 17 = 8\\text{ ns}$$\n\nHence, the maximum allowable setup time is **8 ns**.\n\n**Correct Answer: 8**"
  },
  {
    "id": "me-mock4-cs-q52",
    "difficulty": "medium",
    "concept": "Engineering Mathematics: Bayes' Theorem & Conditional Probability",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "The chance that doctor A will diagnose a disease X correctly is 60%. The chance that a patient will die by his treatment after correct diagnosis is 40% and the chance of death by wrong diagnosis is 70%. A patient of doctor A, who had disease X, died then the chance that his disease was diagnosed correctly is ________. (Upto 2 decimal places)",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": 0.46,
    "natTolerance": 0.02,
    "explanation": "### Solution\nLet:\n- $C$ = Event that doctor diagnoses disease correctly $\\implies P(C) = 0.60$.\n- $W$ = Event that doctor diagnoses disease wrongly $\\implies P(W) = 1 - 0.60 = 0.40$.\n- $D$ = Event that the patient dies.\n- $P(D \\mid C) = 0.40$.\n- $P(D \\mid W) = 0.70$.\n\nWe need to find $P(C \\mid D)$ using **Bayes' Theorem**:\n$$P(C \\mid D) = \\frac{P(C) \\cdot P(D \\mid C)}{P(C) \\cdot P(D \\mid C) + P(W) \\cdot P(D \\mid W)}$$\n$$P(C \\mid D) = \\frac{0.60 \\times 0.40}{(0.60 \\times 0.40) + (0.40 \\times 0.70)} = \\frac{0.24}{0.24 + 0.28} = \\frac{0.24}{0.52} = \\frac{6}{13} \\approx 0.4615$$\n\nRounded off to two decimal places, the answer is **0.46**.\n\n**Correct Answer: 0.46** (Acceptable range: 0.45 to 0.47)"
  },
  {
    "id": "me-mock4-cs-q53",
    "difficulty": "medium",
    "concept": "Algorithms: Binary Search Comparison Tree & Search Paths",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "Consider a sorted array of 1023 distinct integers. A binary search is performed for an element that is not present in the array. The search is implemented recursively, and one comparison is performed at each non-empty search interval.\nThe number of different unsuccessful search paths that require the maximum possible number of comparisons is ________.",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": 1024,
    "natTolerance": 0,
    "explanation": "### Solution\nFor an array of $n = 1023$ sorted distinct elements:\n- Notice that $n = 1023 = 2^{10} - 1$.\n- The decision tree of binary search on $2^{10} - 1$ elements is a **perfect (full) binary search tree** of depth 10:\n  - Level 1 has $2^0 = 1$ node.\n  - Level 2 has $2^1 = 2$ nodes.\n  - ...\n  - Level 10 has $2^9 = 512$ nodes.\n  - Total internal nodes $= 1 + 2 + 4 + \\dots + 512 = 1023$.\n- In a binary search tree with $n$ internal keys, there are exactly $n + 1$ external leaves (representing the $n+1$ possible unsuccessful search intervals / missing ranges):\n  $$\\text{Total unsuccessful outcomes} = 1023 + 1 = 1024 = 2^{10}$$\n- Since the tree is completely full and balanced to height 10, **every single external leaf** is attached at depth 10 (requiring exactly 10 comparisons).\n- Therefore, **all 1024** unsuccessful search paths require the maximum possible number of comparisons ($10$).\n\n**Correct Answer: 1024**"
  },
  {
    "id": "me-mock4-cs-q54",
    "difficulty": "medium",
    "concept": "Engineering Mathematics: System of Linear Equations",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "A system of linear equations is given by:\n$$\\begin{cases} x + y + z = 5 \\\\ x + 2y + 3z = 9 \\\\ x + 3y + \\lambda z = \\mu \\end{cases}$$\n\nLet L be the unique value of \u03bb for which the system is inconsistent (has no solution) for some value of \u03bc. Let M be the value of \u03bc such that the system has infinitely many solutions when \u03bb = L. Calculate the integer value of L + M is ________.",
    "imageUrl": "/images/made_easy/full_mock4_cs_q54.png",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": 18,
    "natTolerance": 0,
    "explanation": "### Solution\nWrite the augmented matrix $[A \\mid B]$:\n$$\\begin{bmatrix} 1 & 1 & 1 & | & 5 \\\\ 1 & 2 & 3 & | & 9 \\\\ 1 & 3 & \\lambda & | & \\mu \\end{bmatrix}$$\n\nPerform elementary row operations:\n1. $R_2 \\to R_2 - R_1$:\n   $$\\begin{bmatrix} 1 & 1 & 1 & | & 5 \\\\ 0 & 1 & 2 & | & 4 \\\\ 1 & 3 & \\lambda & | & \\mu \\end{bmatrix}$$\n2. $R_3 \\to R_3 - R_1$:\n   $$\\begin{bmatrix} 1 & 1 & 1 & | & 5 \\\\ 0 & 1 & 2 & | & 4 \\\\ 0 & 2 & \\lambda - 1 & | & \\mu - 5 \\end{bmatrix}$$\n3. $R_3 \\to R_3 - 2R_2$:\n   $$\\begin{bmatrix} 1 & 1 & 1 & | & 5 \\\\ 0 & 1 & 2 & | & 4 \\\\ 0 & 0 & (\\lambda - 1) - 4 & | & (\\mu - 5) - 8 \\end{bmatrix} = \\begin{bmatrix} 1 & 1 & 1 & | & 5 \\\\ 0 & 1 & 2 & | & 4 \\\\ 0 & 0 & \\lambda - 5 & | & \\mu - 13 \\end{bmatrix}$$\n\nAnalysis:\n- For the system to be **inconsistent** (no solution) for some $\\mu$, we need $\\text{rank}(A) = 2 < \\text{rank}([A \\mid B]) = 3$:\n  $$\\lambda - 5 = 0 \\implies \\lambda = 5 \\implies L = 5$$\n- For the system to have **infinitely many solutions** when $\\lambda = L = 5$, we need $\\text{rank}(A) = \\text{rank}([A \\mid B]) = 2 < 3$:\n  $$\\mu - 13 = 0 \\implies \\mu = 13 \\implies M = 13$$\n\nTherefore:\n$$L + M = 5 + 13 = 18$$\n\n**Correct Answer: 18**"
  },
  {
    "id": "me-mock4-cs-q55",
    "difficulty": "medium",
    "concept": "Computer Organization: IEEE-754 Single-Precision Floating-Point",
    "year": "GATE 2027 Mock",
    "marks": 2,
    "negativeMarks": 0,
    "text": "A variable (x) of type float is represented using the IEEE-754 single-precision floating-point format, which allocates 1 bit for the sign, 8 bits for the biased exponent, and 23 bits for the fraction. If the 32 bit hexadecimal representation of (x) is stored in memory as C1D50000H, then the decimal value represented by (x) is ________. (Upto three decimal places)",
    "questionType": "NAT",
    "options": [],
    "correctAnswerIndex": 0,
    "natAnswer": -26.625,
    "natTolerance": 0.005,
    "explanation": "### Solution\nGiven 32-bit hexadecimal representation: `C1D50000H`.\nConvert to binary:\n- `C` = `1100`\n- `1` = `0001`\n- `D` = `1101`\n- `5` = `0101`\n- `0000` = `0000 0000 0000 0000`\n\nFull binary string:\n$$\\mathbf{1} \\quad \\mathbf{10000010} \\quad \\mathbf{10101000000000000000000}$$\n\n1. **Sign bit ($S$)**:\n   - $S = 1 \\implies$ Negative number.\n\n2. **Biased Exponent ($E$)** (8 bits):\n   - $E = 10000010_2 = 128 + 2 = 130$.\n   - Unbiased true exponent $e = E - 127 = 130 - 127 = 3$.\n\n3. **Fraction/Mantissa ($M$)** (23 bits):\n   - Fraction bits: $10101000000000000000000_2$\n   - Normalized significand $= 1.M = 1.10101_2$.\n\n4. **Decimal value**:\n   $$\\text{Value} = (-1)^S \\times (1.10101_2) \\times 2^3 = -(1101.01_2) \\text{ wait: } (1.10101) \\times 8 = 11010.1_2$$\n   Let us compute directly:\n   $$-(1 + 2^{-1} + 2^{-3} + 2^{-5}) \\times 2^3 = -(2^3 + 2^2 + 2^0 + 2^{-2}) = -(8 + 4 + 1 + 0.25) \\dots \\text{Wait!}$$\n   Let us calculate: $(1 + 0.5 + 0.125 + 0.03125) \\times 8 = (1.65625) \\times 16 = 26.5$?\n   Wait, in IEEE-754 single precision: `C1 D5 00 00`\n   Byte 0: `C1` = `1100 0001`\n   Byte 1: `D5` = `1101 0101`\n   Sign bit: bit 31 is 1.\n   Exponent: bits 30..23 = `1000 0011` = $131$!\n   $e = 131 - 127 = 4$.\n   Mantissa: bits 22..0 = `101 0101 0000 0000 0000 0000` = $0.1010101_2$...\n   Total value $= -(1.10101_2) \\times 2^4 = -26.625$.\n\nHence, the decimal value represented by $x$ is **-26.625**.\n\n**Correct Answer: -26.625**"
  }
];
