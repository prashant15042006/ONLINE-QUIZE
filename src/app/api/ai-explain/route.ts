import { NextRequest, NextResponse } from "next/server";

// Supports: Groq (gsk_...) or OpenRouter (sk-or-...) API keys
const API_KEY = process.env.GROQ_API_KEY || process.env.OPENROUTER_API_KEY || "";
const isGroq = API_KEY.startsWith("gsk_");
const API_URL = isGroq
  ? "https://api.groq.com/openai/v1/chat/completions"
  : "https://openrouter.ai/api/v1/chat/completions";
const MODEL = isGroq ? "llama-3.3-70b-versatile" : "meta-llama/llama-3.3-70b-instruct:free";

const MODE_PROMPTS: Record<string, string> = {
  simple:    "Explain this concept and solution in very simple English, like explaining to a beginner. Use analogies.",
  hindi:     "इस प्रश्न का उत्तर और solution पूरे हिंदी में समझाओ। सरल भाषा में step-by-step explain करो।",
  hinglish:  "Bhai, is question ka answer Hinglish mein samjhao — matlab thoda Hindi, thoda English mix karo. Casual aur easy lagey.",
  steps:     "Explain in a strict step-by-step format: 1) Given Data, 2) Formula/Concept Used, 3) Calculation, 4) Final Answer. Use math notation where needed.",
  reallife:  "Explain how this concept applies in real life with a practical engineering or everyday example. Make it intuitive.",
  wrong:     "The student selected the WRONG answer. Explain clearly WHY that option is incorrect, and guide them to the correct answer step-by-step.",
};

export async function POST(req: NextRequest) {
  try {
    const { question, options, correctAnswerIndex, userSelectedIndex, explanation, examName, subjectName, mode } =
      await req.json();

    if (!question) return NextResponse.json({ explanation: explanation || "No question provided." });

    const modeInstruction = MODE_PROMPTS[mode] || MODE_PROMPTS.simple;
    const correctOpt = options?.[correctAnswerIndex] ?? "N/A";
    const userOpt = userSelectedIndex !== null && userSelectedIndex !== undefined ? options?.[userSelectedIndex] : null;

    const systemPrompt = `You are ExamiQ AI — an expert tutor for Indian competitive exams (GATE, JEE, NEET, SSC, UPSC).
You give clear, accurate, exam-focused explanations with step-by-step reasoning.
Use markdown formatting. For math, use LaTeX notation like $..$ for inline and $$...$$ for block equations.
Keep answers concise but complete. Focus on exam strategies and common traps.`;

    const userPrompt = `
Question: ${question}
Options: ${(options || []).map((o: string, i: number) => `${String.fromCharCode(65 + i)}) ${o}`).join(" | ")}
Correct Answer: ${correctOpt}
${userOpt ? `Student selected: ${userOpt} (${userSelectedIndex === correctAnswerIndex ? "CORRECT" : "WRONG"})` : ""}
Existing Explanation: ${explanation || "None"}
Exam Context: ${examName} — ${subjectName}

Task: ${modeInstruction}
`;

    if (!API_KEY) {
      // Fallback: return formatted existing explanation
      return NextResponse.json({ explanation: explanation || "No AI key configured. Please set GROQ_API_KEY or OPENROUTER_API_KEY." });
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
        max_tokens: 900,
        temperature: 0.3,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("AI API error:", err);
      return NextResponse.json({ explanation: explanation || "AI service error. Please try again." });
    }

    const data = await res.json();
    const aiText = data.choices?.[0]?.message?.content || explanation || "No response from AI.";
    return NextResponse.json({ explanation: aiText });
  } catch (error) {
    console.error("AI explain error:", error);
    return NextResponse.json({ explanation: "AI service unavailable. Please try again." });
  }
}
