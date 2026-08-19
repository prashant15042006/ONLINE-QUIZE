import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_KEY = process.env.GEMINI_API_KEY || "";
const GROQ_KEY = process.env.GROQ_API_KEY || "";
const OR_KEY = process.env.OPENROUTER_API_KEY || "";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const OR_URL = "https://openrouter.ai/api/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";
const OR_MODEL = "meta-llama/llama-3.1-8b-instruct:free";

const MODE_PROMPTS: Record<string, string> = {
  simple:   "Explain this concept in very simple English like explaining to a Class 12 student. Use easy analogies.",
  hindi:    "Is question ka answer poore Hindi mein step-by-step explain karo. Saral bhasha mein.",
  hinglish: "Bhai, is question ka answer Hinglish mein samjhao. Casual aur easy lagey — thoda Hindi, thoda English.",
  steps:    "Solve strictly step-by-step: 1) Given Data, 2) Concept/Formula Used, 3) Calculation with each step, 4) Final Answer. Use proper math notation.",
  reallife: "Explain how this concept applies in real engineering or everyday life. Give a practical intuitive example.",
  wrong:    "The student chose the WRONG answer. Explain clearly WHY that option is wrong. Then guide them to the correct answer step-by-step.",
};

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
      max_tokens: 1200,
      temperature: 0.3,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error (${res.status}): ${err.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

export async function POST(req: NextRequest) {
  try {
    const {
      question,
      options,
      correctAnswerIndex,
      userSelectedIndex,
      explanation,
      examName,
      subjectName,
      mode,
    } = await req.json();

    if (!question) {
      return NextResponse.json({ explanation: explanation || "No question provided." });
    }

    const modeInstruction = MODE_PROMPTS[mode as string] || MODE_PROMPTS.simple;
    const correctOpt = (options as string[])?.[correctAnswerIndex as number] ?? "N/A";
    const userOpt =
      userSelectedIndex !== null && userSelectedIndex !== undefined
        ? (options as string[])?.[userSelectedIndex as number]
        : null;

    const systemPrompt = `You are ExamiQ AI — an expert competitive exam tutor for GATE, JEE, NEET, SSC, and UPSC.
Give clear, precise, exam-focused explanations with step-by-step reasoning.
Format using markdown. For math use LaTeX: $...$ for inline, $$...$$ for block equations.
Be concise but thorough. Highlight key formulas and exam strategies.`;

    const userPrompt = `
Question: ${question}
Options: ${((options as string[]) || []).map((o: string, i: number) => `${String.fromCharCode(65 + i)}) ${o}`).join(" | ")}
Correct Answer: ${correctOpt}
${userOpt ? `Student selected: "${userOpt}" (${userSelectedIndex === correctAnswerIndex ? "CORRECT ✓" : "WRONG ✗"})` : ""}
Existing Explanation: ${explanation || "None"}
Exam Context: ${examName} — ${subjectName}

Task: ${modeInstruction}
`;

    let aiText = "";

    // 1️⃣ Gemini (primary)
    if (GEMINI_KEY) {
      try {
        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const geminiModel = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction: systemPrompt,
          generationConfig: { temperature: 0.3, maxOutputTokens: 1200 },
        });
        const result = await geminiModel.generateContent(userPrompt);
        aiText = result.response.text() || "";
      } catch (err) {
        console.warn("Gemini explain failed:", err);
      }
    }

    // 2️⃣ Groq (fallback)
    if (!aiText && GROQ_KEY) {
      try {
        aiText = await callLLM(GROQ_URL, GROQ_KEY, GROQ_MODEL, systemPrompt, userPrompt, false);
      } catch (err) {
        console.warn("Groq explain failed:", err);
      }
    }

    // 3️⃣ OpenRouter (fallback)
    if (!aiText && OR_KEY) {
      try {
        aiText = await callLLM(OR_URL, OR_KEY, OR_MODEL, systemPrompt, userPrompt, true);
      } catch (err) {
        console.warn("OpenRouter explain failed:", err);
      }
    }

    return NextResponse.json({
      explanation:
        aiText ||
        explanation ||
        "AI explanation unavailable. Please check the written explanation above.",
    });
  } catch (error) {
    console.error("AI explain error:", error);
    return NextResponse.json({
      explanation: "AI service error. Please try again in a moment.",
    });
  }
}