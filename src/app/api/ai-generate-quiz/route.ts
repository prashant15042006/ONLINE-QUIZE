import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_KEY = process.env.GEMINI_API_KEY || "";
const GROQ_KEY = process.env.GROQ_API_KEY || "";
const OR_KEY = process.env.OPENROUTER_API_KEY || "";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const OR_URL = "https://openrouter.ai/api/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";
const OR_MODEL = "meta-llama/llama-3.1-8b-instruct:free";

async function callLLM(
  apiUrl: string,
  apiKey: string,
  model: string,
  systemPrompt: string,
  userPrompt: string,
  isOR: boolean
): Promise<string> {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      ...(isOR
        ? { "HTTP-Referer": "https://examiq.vercel.app", "X-Title": "ExamiQ PRO" }
        : {}),
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

function extractJsonArray(raw: string): string {
  const cleaned = raw.replace(/```(?:json)?\s*/gi, "").replace(/```/g, "").trim();
  const start = cleaned.indexOf("[");
  const end = cleaned.lastIndexOf("]");
  if (start !== -1 && end !== -1 && end > start) {
    return cleaned.slice(start, end + 1);
  }
  return cleaned;
}

function generateLocalFallback(topic: string, examName: string, difficulty: string, count: number) {
  const t = topic || "General Concept";
  const templates = [
    {
      text: `Which of the following best describes the core principle of "${t}"?`,
      options: ["It involves systematic analysis and structured problem solving","It relies entirely on random trial and error","It ignores constraints and boundary conditions","It requires no mathematical formulation"],
      correctAnswerIndex: 0,
      explanation: `### Solution\nThe core principle of ${t} in ${examName} involves systematic, structured approaches.\n\n**Key Takeaway:** Always identify given parameters and apply the relevant formula step by step.`,
    },
    {
      text: `In the context of "${t}", what is the most critical factor for optimal results?`,
      options: ["Minimizing resource usage while satisfying all constraints","Maximizing inputs regardless of constraints","Ignoring edge cases and special conditions","Applying only brute-force computation"],
      correctAnswerIndex: 0,
      explanation: `### Solution\nIn ${t}, optimal results require minimizing resource usage while satisfying all constraints.`,
    },
    {
      text: `A standard "${t}" problem gives specific inputs. Which approach is most efficient?`,
      options: ["Apply the standard formula/algorithm and verify boundary conditions","Guess the answer from given options","Use the most complex algorithm available","Ignore the input constraints"],
      correctAnswerIndex: 0,
      explanation: `### Solution\nFor ${t}:\n1. **Identify** given parameters\n2. **Select** appropriate formula\n3. **Verify** boundary conditions\n4. **Compute** and cross-check`,
    },
    {
      text: `Which mathematical concept is fundamental to solving "${t}" problems?`,
      options: ["Logical deduction combined with appropriate mathematical formulation","Pure memorization without understanding","Random substitution of values","Avoiding all mathematical notation"],
      correctAnswerIndex: 0,
      explanation: `### Solution\n${t} problems require logical deduction AND mathematical formulation together.`,
    },
    {
      text: `When analyzing "${t}", which condition MUST be satisfied for a valid solution?`,
      options: ["All constraints defined in the problem must be satisfied","Only some constraints need to be satisfied","Constraints can be ignored if the answer seems correct","Only the final numerical answer matters"],
      correctAnswerIndex: 0,
      explanation: `### Solution\nA valid solution for ${t} MUST satisfy ALL constraints.\n\n**Common Mistake:** Missing one constraint often leads to wrong answers in ${examName}.`,
    },
  ];
  return templates.slice(0, Math.min(count, templates.length)).map((q, i) => ({
    id: `local-${Date.now()}-${i}`,
    text: q.text,
    options: q.options,
    correctAnswerIndex: q.correctAnswerIndex,
    explanation: q.explanation,
    difficulty,
    concept: t,
  }));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const topic: string = body.topic || body.topicText || "";
    const notes: string = body.notes || body.pdfContentText || "";
    const examName: string = body.examName || "GATE";
    const difficulty: string = body.difficulty || "medium";
    const count: number = Math.min(body.count || 5, 10);

    const systemPrompt = `You are an expert MCQ generator for ${examName} competitive exam.

STRICT RULES:
- Output ONLY a valid raw JSON array. No markdown, no code fences, no extra text.
- correctAnswerIndex must be 0, 1, 2, or 3 (integer).

Required JSON schema:
[
  {
    "id": "gen-1",
    "text": "Question text?",
    "options": ["A", "B", "C", "D"],
    "correctAnswerIndex": 0,
    "explanation": "### Solution\\nStep-by-step explanation.",
    "difficulty": "${difficulty}",
    "concept": "Concept Name"
  }
]`;

    const userPrompt =
      notes && notes.trim().length > 20
        ? `Generate ${count} MCQ questions from these study notes for ${examName} (Difficulty: ${difficulty}).\n\nNotes:\n---\n${notes.substring(0, 4000)}\n---\n\nReturn ONLY the JSON array with exactly ${count} objects. No other text.`
        : `Generate ${count} high-quality ${examName} MCQ questions on: "${topic}"\n\nDifficulty: ${difficulty}\nMatch actual ${examName} exam/PYQ standard.\n\nReturn ONLY the JSON array with exactly ${count} objects. No other text.`;

    let content = "";

    if (GEMINI_KEY) {
      try {
        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const geminiModel = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction: systemPrompt,
          generationConfig: { temperature: 0.4, maxOutputTokens: 3000 },
        });
        const result = await geminiModel.generateContent(userPrompt);
        content = result.response.text() || "";
        console.log("Gemini succeeded, length:", content.length);
      } catch (err) {
        console.warn("Gemini failed:", err);
      }
    }

    if (!content && GROQ_KEY) {
      try {
        content = await callLLM(GROQ_URL, GROQ_KEY, GROQ_MODEL, systemPrompt, userPrompt, false);
        console.log("Groq succeeded, length:", content.length);
      } catch (err) {
        console.warn("Groq failed:", err);
      }
    }

    if (!content && OR_KEY) {
      try {
        content = await callLLM(OR_URL, OR_KEY, OR_MODEL, systemPrompt, userPrompt, true);
        console.log("OpenRouter succeeded, length:", content.length);
      } catch (err) {
        console.warn("OpenRouter failed:", err);
      }
    }

    if (!content) {
      console.warn("All AI APIs failed, using local fallback");
      return NextResponse.json({
        questions: generateLocalFallback(topic || notes.slice(0, 50), examName, difficulty, count),
        fallback: true,
      });
    }

    const jsonStr = extractJsonArray(content);
    let parsed: Record<string, unknown>[] = [];
    try {
      const raw = JSON.parse(jsonStr);
      parsed = Array.isArray(raw) ? raw : [];
    } catch {
      console.error("JSON parse failed. Snippet:", content.slice(0, 300));
      return NextResponse.json({
        questions: generateLocalFallback(topic || "General", examName, difficulty, count),
        fallback: true,
      });
    }

    const valid = parsed
      .filter(
        (q) =>
          q.text &&
          typeof q.text === "string" &&
          q.text.trim().length > 10 &&
          Array.isArray(q.options) &&
          (q.options as unknown[]).length >= 2 &&
          typeof q.correctAnswerIndex === "number"
      )
      .map((q, i) => ({
        id: `gen-${Date.now()}-${i}`,
        text: q.text,
        options: q.options,
        correctAnswerIndex: q.correctAnswerIndex,
        explanation: q.explanation || "Review the correct answer and related concepts.",
        difficulty: q.difficulty || difficulty,
        concept: q.concept || topic || "AI Generated",
      }));

    if (valid.length === 0) {
      return NextResponse.json({
        questions: generateLocalFallback(topic || "General", examName, difficulty, count),
        fallback: true,
      });
    }

    return NextResponse.json({ questions: valid });
  } catch (error) {
    console.error("AI quiz gen error:", error);
    return NextResponse.json({
      questions: [],
      error: "Failed to generate questions. Please try again.",
    });
  }
}