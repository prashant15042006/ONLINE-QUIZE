import { Router, Request, Response } from "express";
import { generateQuiz, generateExplanation, generateAnswer } from "../utils/ai";

const router = Router();

// POST /api/quizzes/generate - Generate AI quiz questions
router.post("/generate", async (req: Request, res: Response) => {
  const { topic, company, difficulty, questionCount, customPrompt } = req.body;

  if (!topic || !company) {
    return res.status(400).json({ error: "topic and company are required" });
  }

  try {
    const quiz = await generateQuiz({
      topic,
      company,
      difficulty: difficulty || "Medium",
      questionCount: questionCount || 10,
      customPrompt: customPrompt || "",
    });

    res.json(quiz);
  } catch (err) {
    console.error("Quiz generation error:", err);
    res.status(500).json({ error: "Failed to generate quiz. Please try again." });
  }
});

// POST /api/quizzes/explain - Get AI explanation for a question
router.post("/explain", async (req: Request, res: Response) => {
  const { question, options, userAnswer, correctAnswer, userApiKey } = req.body;

  if (!question) {
    return res.status(400).json({ error: "question is required" });
  }

  try {
    const explanation = await generateExplanation({
      question,
      options: options || [],
      userAnswer: userAnswer ?? -1,
      correctAnswer: correctAnswer ?? 0,
      userApiKey,
    });

    res.json({ explanation });
  } catch (err) {
    console.error("Explanation error:", err);
    res.status(500).json({ error: "Failed to generate explanation." });
  }
});

// POST /api/quizzes/generate-answer - Legacy simple Q&A
router.post("/generate-answer", async (req: Request, res: Response) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "question required" });
  }
  try {
    const answer = await generateAnswer(question);
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed" });
  }
});

// GET /api/quizzes/health - Simple API health check
router.get("/health", (_req: Request, res: Response) => {
  res.json({ ok: true, provider: "groq", model: "llama-3.3-70b-versatile" });
});

export default router;
