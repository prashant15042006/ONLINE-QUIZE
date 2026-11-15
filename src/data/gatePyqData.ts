import { Question } from "./questionTypes";
import { GATE_2026_SET1_QUESTIONS } from "./gate2026CS1";
import { GATE_2026_SET2_QUESTIONS } from "./gate2026CS2";
import { GATE_2025_SET1_QUESTIONS } from "./gate2025CS1";
import { GATE_2025_SET2_QUESTIONS } from "./gate2025CS2";
import { GATE_2024_SET1_QUESTIONS } from "./gate2024CS1";

export interface GatePaper {
  id: string;
  year: string;
  setTitle: string;
  title: string;
  totalQuestions: number;
  timeMinutes: number;
  url: string;
  questions: Question[];
}

// ─────────────────────────────────────────────────────────────────────────────
// GATE CSE Previous Year Papers (2015 - 2026)
// Official Verified Questions (IIT Guwahati / IIT Madras / GateOverflow)
// ─────────────────────────────────────────────────────────────────────────────
export const GATE_PYQ_PAPERS: GatePaper[] = [
  {
    id: "gate-2026-set1",
    year: "2026",
    setTitle: "Set 1",
    title: "GATE CSE 2026 (Set 1)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gate2027.iitm.ac.in/static/doc/download/2026/QPs/CS1.pdf",
    questions: GATE_2026_SET1_QUESTIONS,
  },
  {
    id: "gate-2026-set2",
    year: "2026",
    setTitle: "Set 2",
    title: "GATE CSE 2026 (Set 2)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gate2027.iitm.ac.in/static/doc/download/2026/QPs/CS2.pdf",
    questions: GATE_2026_SET2_QUESTIONS,
  },
  {
    id: "gate-2025-set1",
    year: "2025",
    setTitle: "Set 1",
    title: "GATE CSE 2025 (Set 1)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gate2027.iitm.ac.in/static/doc/download/2025/CS12025.pdf",
    questions: GATE_2025_SET1_QUESTIONS,
  },
  {
    id: "gate-2025-set2",
    year: "2025",
    setTitle: "Set 2",
    title: "GATE CSE 2025 (Set 2)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gate2027.iitm.ac.in/static/doc/download/2025/CS22025.pdf",
    questions: GATE_2025_SET2_QUESTIONS,
  },
  {
    id: "gate-2024-set1",
    year: "2024",
    setTitle: "Set 1",
    title: "GATE CSE 2024 (Set 1)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gate2027.iitm.ac.in/static/doc/download/2024/CS124S5.pdf",
    questions: GATE_2024_SET1_QUESTIONS,
  },
  {
    id: "gate-2024-set2",
    year: "2024",
    setTitle: "Set 2",
    title: "GATE CSE 2024 (Set 2)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/595/gate-cse-2024-set-2-original-paper",
    questions: [],
  },
  {
    id: "gate-2023",
    year: "2023",
    setTitle: "Official Paper",
    title: "GATE CSE 2023",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/431/gate-cse-2023",
    questions: [],
  },
  {
    id: "gate-2022",
    year: "2022",
    setTitle: "Official Paper",
    title: "GATE CSE 2022",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/426/gate-cse-2022",
    questions: [],
  },
  {
    id: "gate-2021-set1",
    year: "2021",
    setTitle: "Set 1",
    title: "GATE CSE 2021 (Set 1)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/424/gate-cse-2021-set-1",
    questions: [],
  },
  {
    id: "gate-2021-set2",
    year: "2021",
    setTitle: "Set 2",
    title: "GATE CSE 2021 (Set 2)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/425/gate-cse-2021-set-2",
    questions: [],
  },
  {
    id: "gate-2020",
    year: "2020",
    setTitle: "Official Paper",
    title: "GATE CSE 2020",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/383/gate-cse-2020",
    questions: [],
  },
  {
    id: "gate-2019",
    year: "2019",
    setTitle: "Official Paper",
    title: "GATE CSE 2019",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/314/gate-cse-2019",
    questions: [],
  },
  {
    id: "gate-2018",
    year: "2018",
    setTitle: "Official Paper",
    title: "GATE CSE 2018",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/185/gate-cse-2018",
    questions: [],
  },
  {
    id: "gate-2017-set1",
    year: "2017",
    setTitle: "Set 1",
    title: "GATE CSE 2017 (Set 1)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/115/gate-2017-1",
    questions: [],
  },
  {
    id: "gate-2017-set2",
    year: "2017",
    setTitle: "Set 2",
    title: "GATE CSE 2017 (Set 2)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/116/gate-2017-2",
    questions: [],
  },
  {
    id: "gate-2016-set1",
    year: "2016",
    setTitle: "Set 1",
    title: "GATE CSE 2016 (Set 1)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/13/gate-2016-1",
    questions: [],
  },
  {
    id: "gate-2016-set2",
    year: "2016",
    setTitle: "Set 2",
    title: "GATE CSE 2016 (Set 2)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/14/gate-2016-2",
    questions: [],
  },
  {
    id: "gate-2015-set1",
    year: "2015",
    setTitle: "Set 1",
    title: "GATE CSE 2015 (Set 1)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/10/gate-2015-1",
    questions: [],
  },
  {
    id: "gate-2015-set2",
    year: "2015",
    setTitle: "Set 2",
    title: "GATE CSE 2015 (Set 2)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/11/gate-2015-2",
    questions: [],
  },
  {
    id: "gate-2015-set3",
    year: "2015",
    setTitle: "Set 3",
    title: "GATE CSE 2015 (Set 3)",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gateoverflow.in/exam/12/gate-2015-3",
    questions: [],
  },
];

// Helper: get all questions across all papers
export function getAllPyqQuestions(): (Question & { year: string; paperId: string })[] {
  return GATE_PYQ_PAPERS.flatMap((paper) =>
    paper.questions.map((q) => ({ ...q, year: paper.year, paperId: paper.id }))
  );
}

// Helper: get questions by year
export function getPyqByYear(year: string): GatePaper[] {
  return GATE_PYQ_PAPERS.filter((p) => p.year === year);
}

// Helper: get total question count
export function getTotalPyqCount(): number {
  return GATE_PYQ_PAPERS.reduce((sum, p) => sum + p.questions.length, 0);
}
