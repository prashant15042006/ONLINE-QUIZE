import { NextRequest, NextResponse } from "next/server";

const GROQ_KEY = process.env.GROQ_API_KEY || "";
const OR_KEY = process.env.OPENROUTER_API_KEY || "";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const OR_URL = "https://openrouter.ai/api/v1/chat/completions";

const GROQ_MODEL = "llama-3.3-70b-versatile";
const OR_MODEL = "nvidia/llama-3.1-nemotron-70b-instruct:free";

async function callLLM(
  apiUrl: string, apiKey: string, model: string,
  systemPrompt: string, userPrompt: string, isOR: boolean
): Promise<string> {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      ...(isOR ? { "HTTP-Referer": "https://examiq.vercel.app", "X-Title": "ExamiQ PRO" } : {}),
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 2500,
      temperature: 0.5,
    }),
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

export async function POST(req: NextRequest) {
  try {
    const { topic, examName, difficulty, notes, count = 5 } = await req.json();

    const systemPrompt = `You are an expert MCQ question generator for Indian competitive exams (GATE, JEE, NEET, SSC, UPSC).
Generate high-quality exam-standard questions. Return ONLY a valid JSON array — no explanation, no markdown, no code fences.
Each object in the array MUST follow this exact schema:
{
  "id": "gen-<unique_number>",
  "text": "Clear, professional exam-standard question",
  "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
  "correctAnswerIndex": 0,
  "explanation": "### Solution\\nStep-by-step explanation. Use $inline-math$ or $$block-math$$ for equations.",
  "difficulty": "${difficulty || "medium"}",
  "concept": "Core concept name"
}`;

    const userPrompt = notes?.trim()
      ? `Generate ${count} MCQs based on these study notes for ${examName} exam:\n---\n${notes.substring(0, 3000)}\n---\nDifficulty: ${difficulty || "medium"}. Return only the JSON array.`
      : `Generate ${count} high-quality MCQ questions for topic: "${topic}" in ${examName} exam.\nDifficulty: ${difficulty || "medium"}. Questions should match PW, MADE EASY, or GO Classes standard. Return only the JSON array.`;

    let content = "";

    if (GROQ_KEY) {
      try {
        content = await callLLM(GROQ_URL, GROQ_KEY, GROQ_MODEL, systemPrompt, userPrompt, false);
      } catch (e) {
        console.warn("Groq failed for quiz gen:", e);
      }
    }

    if (!content && OR_KEY) {
      try {
        content = await callLLM(OR_URL, OR_KEY, OR_MODEL, systemPrompt, userPrompt, true);
      } catch (e) {
        console.warn("OpenRouter failed for quiz gen:", e);
      }
    }

    if (!content) return NextResponse.json({ questions: [], error: "AI service unavailable." });

    // Extract JSON array from response
    const match = content.match(/\[[\s\S]*\]/);
    const jsonStr = match ? match[0] : content;

    const questions = JSON.parse(jsonStr);
    const valid = Array.isArray(questions)
      ? questions.filter(
          (q: Record<string, unknown>) =>
            q.text && Array.isArray(q.options) && (q.options as unknown[]).length >= 2 &&
            q.correctAnswerIndex !== undefined
        )
      : [];

    return NextResponse.json({ questions: valid });
  } catch (error) {
    console.error("AI quiz gen error:", error);
    return NextResponse.json({ questions: [], error: "Failed to generate questions." });
  }
}
