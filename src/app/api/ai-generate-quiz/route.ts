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
      max_tokens: 3000,
      temperature: 0.4,
    }),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

export async function POST(req: NextRequest) {
  try {
    // Support both old field names (topicText, pdfContentText) and new (topic, notes)
    const body = await req.json();
    const topic = body.topic || body.topicText || "";
    const notes = body.notes || body.pdfContentText || "";
    const examName = body.examName || "GATE";
    const difficulty = body.difficulty || "medium";
    const count = Math.min(body.count || 5, 10);

    const systemPrompt = `You are an expert MCQ question generator specializing in GATE, JEE, NEET, SSC competitive exams.
Generate CLEAR, SPECIFIC, and ACCURATE multiple-choice questions. Each question must:
- Have a precise, unambiguous question statement
- Have exactly 4 options where only ONE is definitively correct
- Have a clear step-by-step solution explanation
- Match actual exam standard (like GATE PYQ, JEE PYQ, MADE EASY, PW level)

Return ONLY a raw JSON array. No markdown, no code fences, no extra text whatsoever.
Each element MUST follow this exact schema:
{
  "id": "gen-1",
  "text": "Precise question text here",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswerIndex": 0,
  "explanation": "### Solution\\nStep 1: ...\\nStep 2: ...\\n$$formula$$\\n\\nFinal Answer: Option A",
  "difficulty": "${difficulty}",
  "concept": "Concept Name"
}`;

    let userPrompt: string;

    if (notes && notes.trim().length > 20) {
      userPrompt = `Generate ${count} high-quality MCQ questions based on these study notes.
Exam: ${examName} | Difficulty: ${difficulty}

Study Notes:
---
${notes.substring(0, 4000)}
---

Create questions that test understanding of the key concepts in these notes.
Return ONLY the JSON array with ${count} question objects.`;
    } else {
      userPrompt = `Generate ${count} high-quality ${examName} exam MCQ questions on the topic: "${topic}"

Requirements:
- Difficulty: ${difficulty}
- Questions should match GATE PYQ / JEE Advanced / MADE EASY standard
- Each question must have a clear, specific scenario or concept being tested
- Options must be plausible but only one correct
- Explanation must be detailed with formulas where applicable
- Use $formula$ for inline math and $$formula$$ for block equations

Examples of good question styles:
- "Consider a process with arrival time 0ms and burst time 8ms. With Round Robin scheduling (quantum=3ms), the turnaround time is:"
- "The time complexity of Dijkstra's algorithm using min-heap is:"
- "A B+ tree of order 5 with 100 records has minimum number of entries in root as:"

Return ONLY the JSON array with ${count} question objects.`;
    }

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

    // Extract JSON array robustly
    let jsonStr = content;
    const arrayMatch = content.match(/\[[\s\S]*\]/);
    if (arrayMatch) jsonStr = arrayMatch[0];

    let questions = [];
    try {
      questions = JSON.parse(jsonStr);
    } catch {
      // Try to extract partial valid JSON
      console.error("JSON parse failed, content:", content.slice(0, 500));
      return NextResponse.json({ questions: [], error: "AI returned invalid JSON." });
    }

    const valid = Array.isArray(questions)
      ? questions
          .filter(
            (q: Record<string, unknown>) =>
              q.text &&
              typeof q.text === "string" &&
              q.text.trim().length > 10 &&
              Array.isArray(q.options) &&
              (q.options as unknown[]).length >= 2 &&
              q.correctAnswerIndex !== undefined &&
              typeof q.correctAnswerIndex === "number"
          )
          .map((q: Record<string, unknown>, i: number) => ({
            id: `gen-${Date.now()}-${i}`,
            text: q.text,
            options: q.options,
            correctAnswerIndex: q.correctAnswerIndex,
            explanation: q.explanation || "See the correct answer above.",
            difficulty: q.difficulty || difficulty,
            concept: q.concept || topic || "AI Generated",
          }))
      : [];

    return NextResponse.json({ questions: valid });
  } catch (error) {
    console.error("AI quiz gen error:", error);
    return NextResponse.json({ questions: [], error: "Failed to generate questions." });
  }
}
