// User
export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: number;
  updatedAt: number;
  xpPoints: number;
  streak: number;
}

// Question
export interface Question {
  id?: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "Easy" | "Medium" | "Hard";
  subject: string;
  chapter: string;
  marks: number;
  negativeMarks: number;
}

// Quiz
export interface Quiz {
  id?: string;
  title: string;
  description: string;
  category: string;
  type: "TopicWise" | "ChapterWise" | "SubjectWise" | "MockTest" | "DailyQuiz" | "WeeklyChallenge";
  questions: Question[];
  timeLimit: number;
  passingScore: number;
  createdAt: number;
  updatedAt: number;
  createdBy: string;
}

// User Answer
export interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
  isCorrect: boolean;
  timeSpent: number;
  markedForReview: boolean;
}

// Result/Attempt
export interface QuizResult {
  id?: string;
  userId: string;
  quizId: string;
  answers: UserAnswer[];
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  totalMarks: number;
  obtainedMarks: number;
  accuracy: number;
  timeTaken: number;
  status: "Submitted" | "In Progress";
  attemptAt: number;
  completedAt?: number;
}

// Leaderboard Entry
export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  photoURL?: string;
  score: number;
  rank: number;
  timeframe: "Global" | "Daily" | "Weekly" | "Monthly";
  subject?: string;
}

// Achievement/Badge
export interface Achievement {
  id: string;
  userId: string;
  badge: "Streak10" | "Streak30" | "Accuracy95" | "AllCategories" | "SpeedDemon" | string;
  unlockedAt: number;
}

// Notification
export interface Notification {
  id?: string;
  userId: string;
  title: string;
  message: string;
  type: "QuizReminder" | "NewTest" | "ResultAlert" | "Achievement";
  read: boolean;
  createdAt: number;
}
