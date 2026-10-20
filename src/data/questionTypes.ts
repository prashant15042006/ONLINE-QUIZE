export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuestionType = 'SCQ' | 'MCQ' | 'MSQ' | 'NAT';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  correctAnswerIndices?: number[];
  questionType?: QuestionType;
  explanation: string;
  difficulty: Difficulty;
  concept?: string;
  year?: string;
  imageUrl?: string;   // SVG string or image URL for diagram-based questions
  imageAlt?: string;   // Accessible alt description
  marks?: number;
  negativeMarks?: number;
  natAnswer?: number | string;
  natTolerance?: number;
}

export interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  chapters: Chapter[];
}

export interface Branch {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  subjects: Subject[];
}

export interface Exam {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  totalSubjects: number;
  branches?: Branch[];
  subjects?: Subject[];
}
