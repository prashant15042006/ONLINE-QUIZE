import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.GROQ_API_KEY || process.env.OPENROUTER_API_KEY || "";
const isGroq = API_KEY.startsWith("gsk_");
const API_URL = isGroq
  ? "https://api.groq.com/openai/v1/chat/completions"
  : "https://openrouter.ai/api/v1/chat/completions";
const MODEL = isGroq ? "llama-3.3-70b-versatile" : "meta-llama/llama-3.3-70b-instruct:free";

export async function POST(req: NextRequest) {
  try {
    const { topic, examName, difficulty, notes, count = 5 } = await req.json();

    const systemPrompt = `You are an expert question generator for Indian competitive exams (GATE, JEE, NEET, SSC, UPSC).
Generate exam-standard multiple-choice questions. Return ONLY a valid JSON array. No extra text.
Each question object must follow this exact schema:
{
  "id": "gen-<unique-number>",
  "text": "Clear exam-standard question text",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswerIndex": 0,
  "explanation": "### Solution\\nStep-by-step explanation. Use $math$ for inline LaTeX.",
  "difficulty": "${difficulty || 'medium'}",
  "concept": "Core concept name"
}`;

    let userPrompt: string;
    if (notes && notes.trim()) {
      userPrompt = `Generate ${count} MCQ questions based on these study notes for ${examName} exam:
---
${notes.substring(0, 3000)}
---
Difficulty: ${difficulty || "medium"}. Return only the JSON array.`;
    } else {
      userPrompt = `Generate ${count} high-quality MCQ questions for topic: "${topic}" in ${examName} exam.
Difficulty: ${difficulty || "medium"}. Return only the JSON array.`;
    }

    if (!API_KEY) {
      return NextResponse.json({ questions: [], error: "No AI API key configured." });
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
        ...(isGroq ? {} : { "HTTP-Referer": "https://examiq.vercel.app", "X-Title": "ExamiQ PRO" }),
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        max_tokens: 2500,
        temperature: 0.5,
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ questions: [], error: "AI service error." });
    }

    const data = await res.json();
    let content = data.choices?.[0]?.message?.content || "[]";

    // Extract JSON array from response
    const match = content.match(/\[[\s\S]*\]/);
    if (match) content = match[0];

    const questions = JSON.parse(content);
    const validQuestions = Array.isArray(questions)
      ? questions.filter(
          (q: Record<string, unknown>) =>
            q.text && Array.isArray(q.options) && q.options.length >= 2 && q.correctAnswerIndex !== undefined
        )
      : [];

    return NextResponse.json({ questions: validQuestions });
  } catch (error) {
    console.error("AI quiz gen error:", error);
    return NextResponse.json({ questions: [], error: "Failed to generate questions." });
  }
}
