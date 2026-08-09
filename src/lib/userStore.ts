import { Question, Difficulty } from "../data/quizData";

export interface UserMistake {
  id: string; // question.id
  question: Question;
  userSelectedIndex: number;
  examName: string;
  subjectName: string;
  chapterName: string;
  timestamp: string;
  attemptCount: number;
}

export interface UserBookmark {
  id: string; // question.id
  question: Question;
  examName: string;
  subjectName: string;
  chapterName: string;
  timestamp: string;
}

export interface QuizAttemptRecord {
  id: string;
  examName: string;
  subjectName: string;
  chapterName: string;
  mode: 'practice' | 'test' | 'exam';
  difficulty: Difficulty;
  score: number;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  accuracy: number;
  timeTakenSeconds: number;
  avgTimePerQuestionSeconds: number;
  timestamp: string;
  questions: Question[];
  userAnswers: Record<string, { selectedOptionIndex: number | null }>;
  isRetryAttempt?: boolean;
  firstAttemptAccuracy?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  isUnlocked: boolean;
  progress: number; // 0 to 100
}

export interface PerformanceAnalytics {
  totalSolved: number;
  overallAccuracy: number;
  totalQuizzes: number;
  totalStudyTimeMinutes: number;
  avgTimePerQuestionSeconds: number;
  subjectPerformance: Record<string, { attempted: number; correct: number; accuracy: number }>;
  topicPerformance: Record<string, { attempted: number; correct: number; accuracy: number }>;
  difficultyPerformance: Record<Difficulty, { attempted: number; correct: number; accuracy: number }>;
  weakTopics: { topic: string; subject: string; accuracy: number; totalAttempted: number }[];
  strongTopics: { topic: string; subject: string; accuracy: number; totalAttempted: number }[];
  recommendedPractices: { title: string; type: 'weak' | 'mistake' | 'review'; topic: string; subject: string; exam: string }[];
}

const STORAGE_KEYS = {
  MISTAKES: "examiq_user_mistakes_v2",
  BOOKMARKS: "examiq_user_bookmarks_v2",
  HISTORY: "examiq_quiz_history_v2",
  ACHIEVEMENTS: "examiq_achievements_v2",
  STATS: "examiq_user_stats_v2",
  REPORTS: "examiq_reported_questions_v2",
};

// Safe helper for LocalStorage
function getItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error(`Error reading ${key} from storage`, e);
    return fallback;
  }
}

function setItem<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to storage`, e);
  }
}

// ─────────────────────────────────────────────────────────────
// MISTAKES NOTEBOOK MANAGEMENT
// ─────────────────────────────────────────────────────────────

export function getMistakes(): UserMistake[] {
  return getItem<UserMistake[]>(STORAGE_KEYS.MISTAKES, []);
}

export function saveMistake(
  question: Question,
  userSelectedIndex: number,
  examName: string,
  subjectName: string,
  chapterName: string
): void {
  const mistakes = getMistakes();
  const existingIdx = mistakes.findIndex((m) => m.id === question.id);

  if (existingIdx >= 0) {
    mistakes[existingIdx].attemptCount += 1;
    mistakes[existingIdx].userSelectedIndex = userSelectedIndex;
    mistakes[existingIdx].timestamp = new Date().toISOString();
  } else {
    mistakes.push({
      id: question.id,
      question,
      userSelectedIndex,
      examName,
      subjectName,
      chapterName,
      timestamp: new Date().toISOString(),
      attemptCount: 1,
    });
  }

  setItem(STORAGE_KEYS.MISTAKES, mistakes);
}

export function removeMistake(questionId: string): void {
  const mistakes = getMistakes().filter((m) => m.id !== questionId);
  setItem(STORAGE_KEYS.MISTAKES, mistakes);
}

// ─────────────────────────────────────────────────────────────
// BOOKMARKS MANAGEMENT
// ─────────────────────────────────────────────────────────────

export function getBookmarks(): UserBookmark[] {
  return getItem<UserBookmark[]>(STORAGE_KEYS.BOOKMARKS, []);
}

export function isBookmarked(questionId: string): boolean {
  const bookmarks = getBookmarks();
  return bookmarks.some((b) => b.id === questionId);
}

export function toggleBookmark(
  question: Question,
  examName: string,
  subjectName: string,
  chapterName: string
): boolean {
  const bookmarks = getBookmarks();
  const idx = bookmarks.findIndex((b) => b.id === question.id);

  if (idx >= 0) {
    bookmarks.splice(idx, 1);
    setItem(STORAGE_KEYS.BOOKMARKS, bookmarks);
    return false;
  } else {
    bookmarks.push({
      id: question.id,
      question,
      examName,
      subjectName,
      chapterName,
      timestamp: new Date().toISOString(),
    });
    setItem(STORAGE_KEYS.BOOKMARKS, bookmarks);
    return true;
  }
}

// ─────────────────────────────────────────────────────────────
// QUIZ ATTEMPT HISTORY & ANALYTICS
// ─────────────────────────────────────────────────────────────

export function getQuizHistory(): QuizAttemptRecord[] {
  return getItem<QuizAttemptRecord[]>(STORAGE_KEYS.HISTORY, []);
}

export function recordQuizAttempt(attempt: QuizAttemptRecord): void {
  const history = getQuizHistory();
  history.unshift(attempt); // newest first
  setItem(STORAGE_KEYS.HISTORY, history);

  // Auto-save incorrect questions into Mistake Notebook
  attempt.questions.forEach((q) => {
    const ans = attempt.userAnswers[q.id];
    if (ans && ans.selectedOptionIndex !== null && ans.selectedOptionIndex !== q.correctAnswerIndex) {
      saveMistake(q, ans.selectedOptionIndex, attempt.examName, attempt.subjectName, attempt.chapterName);
    }
  });

  // Check achievement unlocks
  checkAchievements();
}

// ─────────────────────────────────────────────────────────────
// PERFORMANCE ANALYTICS & WEAK TOPIC DETECTION
// ─────────────────────────────────────────────────────────────

export function calculatePerformanceAnalytics(): PerformanceAnalytics {
  const history = getQuizHistory();
  const mistakes = getMistakes();

  let totalSolved = 0;
  let totalCorrect = 0;
  let totalTimeSeconds = 0;

  const subjectPerf: Record<string, { attempted: number; correct: number; accuracy: number }> = {};
  const topicPerf: Record<string, { attempted: number; correct: number; accuracy: number }> = {};
  const diffPerf: Record<Difficulty, { attempted: number; correct: number; accuracy: number }> = {
    easy: { attempted: 0, correct: 0, accuracy: 0 },
    medium: { attempted: 0, correct: 0, accuracy: 0 },
    hard: { attempted: 0, correct: 0, accuracy: 0 },
  };

  history.forEach((record) => {
    totalSolved += record.totalQuestions;
    totalCorrect += record.correctCount;
    totalTimeSeconds += record.timeTakenSeconds;

    // Process per question for topic/subject accuracy
    record.questions.forEach((q) => {
      const ans = record.userAnswers[q.id];
      const isCorrect = ans && ans.selectedOptionIndex === q.correctAnswerIndex;
      const subj = record.subjectName || "General";
      const topic = record.chapterName || "General";
      const diff = q.difficulty || "medium";

      // Subject
      if (!subjectPerf[subj]) subjectPerf[subj] = { attempted: 0, correct: 0, accuracy: 0 };
      subjectPerf[subj].attempted += 1;
      if (isCorrect) subjectPerf[subj].correct += 1;

      // Topic
      if (!topicPerf[topic]) topicPerf[topic] = { attempted: 0, correct: 0, accuracy: 0 };
      topicPerf[topic].attempted += 1;
      if (isCorrect) topicPerf[topic].correct += 1;

      // Difficulty
      if (diffPerf[diff]) {
        diffPerf[diff].attempted += 1;
        if (isCorrect) diffPerf[diff].correct += 1;
      }
    });
  });

  // Calculate percentage accuracies
  Object.keys(subjectPerf).forEach((s) => {
    const item = subjectPerf[s];
    item.accuracy = item.attempted > 0 ? Math.round((item.correct / item.attempted) * 100) : 0;
  });

  Object.keys(topicPerf).forEach((t) => {
    const item = topicPerf[t];
    item.accuracy = item.attempted > 0 ? Math.round((item.correct / item.attempted) * 100) : 0;
  });

  (["easy", "medium", "hard"] as const).forEach((d) => {
    const item = diffPerf[d];
    item.accuracy = item.attempted > 0 ? Math.round((item.correct / item.attempted) * 100) : 0;
  });

  const overallAccuracy = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;
  const avgTimePerQ = totalSolved > 0 ? Math.round(totalTimeSeconds / totalSolved) : 0;

  // Weak topics (< 60% accuracy with at least 2 attempts)
  const weakTopics = Object.entries(topicPerf)
    .filter(([_, data]) => data.attempted >= 2 && data.accuracy < 60)
    .map(([topic, data]) => ({
      topic,
      subject: "Target Subject",
      accuracy: data.accuracy,
      totalAttempted: data.attempted,
    }))
    .sort((a, b) => a.accuracy - b.accuracy);

  // Strong topics (>= 80% accuracy)
  const strongTopics = Object.entries(topicPerf)
    .filter(([_, data]) => data.attempted >= 2 && data.accuracy >= 80)
    .map(([topic, data]) => ({
      topic,
      subject: "Target Subject",
      accuracy: data.accuracy,
      totalAttempted: data.attempted,
    }))
    .sort((a, b) => b.accuracy - a.accuracy);

  // Recommendations
  const recommendedPractices: PerformanceAnalytics['recommendedPractices'] = [];

  if (weakTopics.length > 0) {
    recommendedPractices.push({
      title: `Practice Weak Topic: ${weakTopics[0].topic}`,
      type: 'weak',
      topic: weakTopics[0].topic,
      subject: weakTopics[0].subject,
      exam: 'Target Exam'
    });
  }

  if (mistakes.length > 0) {
    recommendedPractices.push({
      title: `Review ${mistakes.length} Saved Mistakes in Notebook`,
      type: 'mistake',
      topic: mistakes[0].chapterName,
      subject: mistakes[0].subjectName,
      exam: mistakes[0].examName
    });
  }

  return {
    totalSolved,
    overallAccuracy,
    totalQuizzes: history.length,
    totalStudyTimeMinutes: Math.round(totalTimeSeconds / 60),
    avgTimePerQuestionSeconds: avgTimePerQ,
    subjectPerformance: subjectPerf,
    topicPerformance: topicPerf,
    difficultyPerformance: diffPerf,
    weakTopics,
    strongTopics,
    recommendedPractices,
  };
}

// ─────────────────────────────────────────────────────────────
// ACHIEVEMENTS SYSTEM
// ─────────────────────────────────────────────────────────────

const ALL_ACHIEVEMENTS: Achievement[] = [
  { id: "ach_first_quiz", title: "First Step", description: "Complete your 1st practice quiz", icon: "🌱", isUnlocked: false, progress: 0 },
  { id: "ach_10_quizzes", title: "Dedicated Learner", description: "Complete 10 quizzes", icon: "📚", isUnlocked: false, progress: 0 },
  { id: "ach_100_qs", title: "Centurion", description: "Solve 100 total practice questions", icon: "💯", isUnlocked: false, progress: 0 },
  { id: "ach_perfect", title: "Concept Master", description: "Score 100% accuracy on any quiz", icon: "🎯", isUnlocked: false, progress: 0 },
  { id: "ach_speed", title: "Speed Demon", description: "Complete a quiz with avg time < 25s per question", icon: "⚡", isUnlocked: false, progress: 0 },
  { id: "ach_streak_7", title: "On Fire", description: "Maintain a 7-day study streak", icon: "🔥", isUnlocked: false, progress: 0 },
  { id: "ach_mistakes_cleared", title: "Mistake Eraser", description: "Review & resolve mistakes in notebook", icon: "🧹", isUnlocked: false, progress: 0 },
];

export function getAchievements(): Achievement[] {
  const saved = getItem<Achievement[]>(STORAGE_KEYS.ACHIEVEMENTS, []);
  if (saved.length === 0) return ALL_ACHIEVEMENTS;
  return ALL_ACHIEVEMENTS.map((a) => {
    const existing = saved.find((s) => s.id === a.id);
    return existing ? { ...a, ...existing } : a;
  });
}

export function checkAchievements(): Achievement[] {
  const achievements = getAchievements();
  const history = getQuizHistory();
  const streak = getItem<number>("examiq_streak", 1);
  const totalQs = history.reduce((sum, r) => sum + r.totalQuestions, 0);

  let updated = false;

  achievements.forEach((ach) => {
    if (ach.isUnlocked) return;

    if (ach.id === "ach_first_quiz" && history.length >= 1) {
      ach.isUnlocked = true;
      ach.progress = 100;
      ach.unlockedAt = new Date().toISOString();
      updated = true;
    } else if (ach.id === "ach_10_quizzes") {
      ach.progress = Math.min(100, Math.round((history.length / 10) * 100));
      if (history.length >= 10) {
        ach.isUnlocked = true;
        ach.unlockedAt = new Date().toISOString();
        updated = true;
      }
    } else if (ach.id === "ach_100_qs") {
      ach.progress = Math.min(100, Math.round((totalQs / 100) * 100));
      if (totalQs >= 100) {
        ach.isUnlocked = true;
        ach.unlockedAt = new Date().toISOString();
        updated = true;
      }
    } else if (ach.id === "ach_perfect" && history.some((r) => r.accuracy === 100)) {
      ach.isUnlocked = true;
      ach.progress = 100;
      ach.unlockedAt = new Date().toISOString();
      updated = true;
    } else if (ach.id === "ach_streak_7") {
      ach.progress = Math.min(100, Math.round((streak / 7) * 100));
      if (streak >= 7) {
        ach.isUnlocked = true;
        ach.unlockedAt = new Date().toISOString();
        updated = true;
      }
    }
  });

  if (updated) {
    setItem(STORAGE_KEYS.ACHIEVEMENTS, achievements);
  }

  return achievements;
}

// ─────────────────────────────────────────────────────────────
// QUESTION REPORTING MANAGEMENT
// ─────────────────────────────────────────────────────────────

export interface ReportedQuestion {
  id: string;
  questionId: string;
  reason: 'wrong_answer' | 'typo' | 'ambiguous' | 'wrong_explanation';
  userComment: string;
  timestamp: string;
}

export function reportQuestion(questionId: string, reason: ReportedQuestion['reason'], userComment: string): void {
  const reports = getItem<ReportedQuestion[]>(STORAGE_KEYS.REPORTS, []);
  reports.push({
    id: `rep-${Date.now()}`,
    questionId,
    reason,
    userComment: userComment.trim(),
    timestamp: new Date().toISOString(),
  });
  setItem(STORAGE_KEYS.REPORTS, reports);
}
