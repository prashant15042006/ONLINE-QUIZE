import { Question } from "./questionTypes";
import { GATE_2026_SET1_QUESTIONS } from "./gate2026CS1";
import { GATE_2026_SET2_QUESTIONS } from "./gate2026CS2";
import { GATE_2025_SET1_QUESTIONS } from "./gate2025CS1";
import { GATE_2025_SET2_QUESTIONS } from "./gate2025CS2";
import { GATE_2024_SET1_QUESTIONS } from "./gate2024CS1";
import { GATE_2024_SET2_QUESTIONS } from "./gate2024CS2";
import { GATE_2023_QUESTIONS } from "./gate2023CS";

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
// GATE CSE Previous Year Papers (Active & Fully Uploaded: 2023 - 2026)
// Official Verified Questions (IIT Kanpur / IISc Bengaluru / IIT Roorkee / IIT Guwahati)
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
    url: "https://gate2027.iitm.ac.in/static/doc/download/2024/CS224S6.pdf",
    questions: GATE_2024_SET2_QUESTIONS,
  },
  {
    id: "gate-2023",
    year: "2023",
    setTitle: "Official Paper",
    title: "GATE CSE 2023",
    totalQuestions: 65,
    timeMinutes: 180,
    url: "https://gate2027.iitm.ac.in/static/doc/download/2023/cs_2023.pdf",
    questions: GATE_2023_QUESTIONS,
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
