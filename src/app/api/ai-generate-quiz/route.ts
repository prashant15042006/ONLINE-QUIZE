import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HIGHLIGHTED_TOPICS } from "@/data/highlightedTopics";
import { EXAMS_DATA, Subject, Question as QuizQuestion } from "@/data/quizData";
import { CURATED_QUESTIONS } from "@/data/curatedQuestions";
import { GATE_PYQ_PAPERS } from "@/data/gatePyqData";

const ENV_GEMINI_KEY = process.env.GEMINI_API_KEY || "";
const ENV_GROQ_KEY = process.env.GROQ_API_KEY || "";
const ENV_OR_KEY = process.env.OPENROUTER_API_KEY || "";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const OR_URL = "https://openrouter.ai/api/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";
const OR_MODEL = "meta-llama/llama-3.1-8b-instruct:free";

interface NormalizedQuestion {
  id: string;
  text: string;
  imageUrl?: string;
  imageAlt?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  concept: string;
}

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
      max_tokens: 3500,
      temperature: 0.5,
    }),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

/** Free Zero-Key Cloud AI via Pollinations */
async function callPollinationsAI(systemPrompt: string, userPrompt: string): Promise<string> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const res = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        model: "openai",
        jsonMode: true,
      }),
    });
    if (!res.ok) throw new Error(`Pollinations HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timeoutId);
  }
}

// Fisher-Yates shuffle with answer index tracking
function shuffleQuestionOptions(options: string[], correctIdx: number): { shuffledOptions: string[]; newCorrectIdx: number } {
  const correctOptionText = options[correctIdx] || options[0];
  const items = [...options];
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  const newIndex = items.indexOf(correctOptionText);
  return {
    shuffledOptions: items,
    newCorrectIdx: newIndex !== -1 ? newIndex : 0,
  };
}

/** Robust JSON parser that handles both raw array and object wrappers with options objects or arrays */
function parseAndNormalizeAIQuestions(
  rawContent: string,
  targetDifficulty: string,
  topic: string
): NormalizedQuestion[] {
  if (!rawContent || rawContent.trim().length < 20) return [];

  const cleaned = rawContent.replace(/```(?:json)?\s*/gi, "").replace(/```/g, "").trim();

  let parsed: unknown = null;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    // Try to extract [ ... ]
    const startArr = cleaned.indexOf("[");
    const endArr = cleaned.lastIndexOf("]");
    if (startArr !== -1 && endArr > startArr) {
      try {
        parsed = JSON.parse(cleaned.slice(startArr, endArr + 1));
      } catch {
        // Try to extract { ... }
        const startObj = cleaned.indexOf("{");
        const endObj = cleaned.lastIndexOf("}");
        if (startObj !== -1 && endObj > startObj) {
          try {
            parsed = JSON.parse(cleaned.slice(startObj, endObj + 1));
          } catch {
            return [];
          }
        }
      }
    }
  }

  if (!parsed) return [];

  // Extract array of raw question objects
  let rawList: unknown[] = [];
  if (Array.isArray(parsed)) {
    rawList = parsed;
  } else if (typeof parsed === "object" && parsed !== null) {
    const record = parsed as Record<string, unknown>;
    const arrayCandidate = Object.values(record).find(v => Array.isArray(v));
    if (arrayCandidate && Array.isArray(arrayCandidate)) {
      rawList = arrayCandidate;
    }
  }

  const results: NormalizedQuestion[] = [];

  for (let i = 0; i < rawList.length; i++) {
    const item = rawList[i];
    if (typeof item !== "object" || item === null) continue;
    const q = item as Record<string, unknown>;

    // Extract text
    const text = String(q.text || q.question || q.prompt || "").trim();
    if (text.length < 10) continue;

    // Extract options
    let options: string[] = [];
    if (Array.isArray(q.options)) {
      options = q.options.map(o => String(o).trim()).filter(Boolean);
    } else if (typeof q.options === "object" && q.options !== null) {
      const optObj = q.options as Record<string, unknown>;
      if (optObj.A || optObj.a) {
        options = [
          String(optObj.A || optObj.a || "").trim(),
          String(optObj.B || optObj.b || "").trim(),
          String(optObj.C || optObj.c || "").trim(),
          String(optObj.D || optObj.d || "").trim(),
        ].filter(Boolean);
      } else {
        options = Object.values(optObj).map(v => String(v).trim()).filter(Boolean);
      }
    }

    if (options.length < 2) continue;

    // Pad to 4 options if needed
    while (options.length < 4) {
      options.push("None of the above");
    }
    if (options.length > 4) {
      options = options.slice(0, 4);
    }

    // Determine correct answer index (0 to 3)
    let correctIdx = 0;
    if (typeof q.correctAnswerIndex === "number" && q.correctAnswerIndex >= 0 && q.correctAnswerIndex < options.length) {
      correctIdx = q.correctAnswerIndex;
    } else if (typeof q.answer === "string") {
      const ansStr = (q.answer as string).trim();
      const letter = ansStr.toUpperCase();
      if (letter === "A" || letter === "0") correctIdx = 0;
      else if (letter === "B" || letter === "1") correctIdx = 1;
      else if (letter === "C" || letter === "2") correctIdx = 2;
      else if (letter === "D" || letter === "3") correctIdx = 3;
      else {
        // Maybe the string is the option text itself
        const found = options.findIndex(o => o.toLowerCase() === ansStr.toLowerCase());
        if (found !== -1) correctIdx = found;
      }
    } else if (typeof q.correct === "string") {
      const corStr = (q.correct as string).trim();
      const found = options.findIndex(o => o.toLowerCase() === corStr.toLowerCase());
      if (found !== -1) correctIdx = found;
    }

    // Shuffle options so correct answer is balanced
    const { shuffledOptions, newCorrectIdx } = shuffleQuestionOptions(options, correctIdx);

    // Extract explanation
    const explanation = String(
      q.explanation ||
      q.solution ||
      `### Detailed Solution\nReview the core principles and formulas governing **${topic || "this concept"}** to verify this answer.`
    ).trim();

    results.push({
      id: `ai-gen-${Date.now()}-${i}`,
      text,
      options: shuffledOptions,
      correctAnswerIndex: newCorrectIdx,
      explanation,
      difficulty: (q.difficulty as "easy" | "medium" | "hard") || (targetDifficulty as "easy" | "medium" | "hard"),
      concept: String(q.concept || topic || "AI Quiz").trim(),
    });
  }

  return results;
}

/** Comprehensive search across all genuine question banks in the app */
function searchAuthenticQuestionBanks(topic: string, count: number): NormalizedQuestion[] {
  const terms = topic
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(t => t.length > 2);

  const matched: Array<NormalizedQuestion & { score: number }> = [];

  // 1. Search GATE PYQ Papers (1040 official questions)
  for (const paper of GATE_PYQ_PAPERS) {
    for (const q of paper.questions) {
      if (!q.options || q.options.length < 2) continue;
      const qText = q.text.toLowerCase();
      const qConcept = (q.concept || "").toLowerCase();
      let score = 0;

      if (terms.length > 0 && terms.every(t => qConcept.includes(t) || qText.includes(t))) {
        score += 10;
      }
      for (const t of terms) {
        if (qConcept.includes(t)) score += 4;
        if (qText.includes(t)) score += 2;
      }

      if (score > 1) {
        matched.push({
          id: `gate-pyq-${q.id}`,
          text: q.text,
          imageUrl: q.imageUrl,
          imageAlt: q.imageAlt,
          options: q.options,
          correctAnswerIndex: q.correctAnswerIndex ?? 0,
          explanation: q.explanation || `### Solution\nOfficial GATE solution for ${paper.title}.`,
          difficulty: q.difficulty || "medium",
          concept: q.concept || paper.title,
          score,
        });
      }
    }
  }

  // 2. Search Curated Questions
  for (const [chapKey, qList] of Object.entries(CURATED_QUESTIONS)) {
    for (const q of qList) {
      if (!q.options || q.options.length < 2) continue;
      const qText = q.text.toLowerCase();
      const qConcept = (q.concept || chapKey).toLowerCase();
      let score = 0;

      for (const t of terms) {
        if (qConcept.includes(t)) score += 4;
        if (qText.includes(t)) score += 2;
      }

      if (score > 1) {
        matched.push({
          id: `curated-${q.id}`,
          text: q.text,
          imageUrl: q.imageUrl,
          imageAlt: q.imageAlt,
          options: q.options,
          correctAnswerIndex: q.correctAnswerIndex ?? 0,
          explanation: q.explanation || "Detailed mathematical solution.",
          difficulty: q.difficulty || "medium",
          concept: q.concept || chapKey,
          score,
        });
      }
    }
  }

  // 3. Search Highlighted Topics
  for (const ht of HIGHLIGHTED_TOPICS) {
    const topicMatches = terms.some(t => ht.name.toLowerCase().includes(t) || ht.subject.toLowerCase().includes(t));
    for (const q of ht.questions) {
      if (!q.options || q.options.length < 2) continue;
      const qText = q.text.toLowerCase();
      let score = topicMatches ? 5 : 0;
      for (const t of terms) {
        if (qText.includes(t)) score += 2;
      }
      if (score > 1) {
        matched.push({
          id: `ht-${q.id}`,
          text: q.text,
          imageUrl: q.imageUrl,
          imageAlt: q.imageAlt,
          options: q.options,
          correctAnswerIndex: q.correctAnswerIndex ?? 0,
          explanation: q.explanation || `Relevant solution for ${ht.name}.`,
          difficulty: q.difficulty || "medium",
          concept: ht.name,
          score,
        });
      }
    }
  }

  // 4. Search EXAMS_DATA
  for (const exam of EXAMS_DATA) {
    const subjects: Subject[] = [];
    if (exam.branches) {
      exam.branches.forEach(b => subjects.push(...b.subjects));
    } else if (exam.subjects) {
      subjects.push(...exam.subjects);
    }

    for (const subj of subjects) {
      for (const chap of subj.chapters) {
        const chapMatches = terms.some(t => chap.name.toLowerCase().includes(t) || subj.name.toLowerCase().includes(t));
        for (const q of chap.questions) {
          if (!q.options || q.options.length < 2) continue;
          const qText = q.text.toLowerCase();
          let score = chapMatches ? 4 : 0;
          for (const t of terms) {
            if (qText.includes(t)) score += 2;
          }
          if (score > 1) {
            matched.push({
              id: `exam-${q.id}`,
              text: q.text,
              imageUrl: q.imageUrl,
              imageAlt: q.imageAlt,
              options: q.options,
              correctAnswerIndex: q.correctAnswerIndex ?? 0,
              explanation: q.explanation || `Solution from ${chap.name} (${subj.name}).`,
              difficulty: q.difficulty || "medium",
              concept: chap.name,
              score,
            });
          }
        }
      }
    }
  }

  // Sort descending by relevance score
  matched.sort((a, b) => b.score - a.score);

  // Deduplicate
  const seen = new Set<string>();
  const unique: NormalizedQuestion[] = [];
  for (const item of matched) {
    const key = item.text.slice(0, 50);
    if (!seen.has(key)) {
      seen.add(key);
      const { shuffledOptions, newCorrectIdx } = shuffleQuestionOptions(item.options, item.correctAnswerIndex);
      unique.push({
        ...item,
        options: shuffledOptions,
        correctAnswerIndex: newCorrectIdx,
      });
    }
    if (unique.length >= count) break;
  }

  return unique;
}

/** Fallback to high quality authentic exam questions from the nearest subject rather than fake templates */
function getAuthenticBackupQuestions(examName: string, difficulty: string, count: number): NormalizedQuestion[] {
  const pool: QuizQuestion[] = [];

  // Pick questions from the relevant exam or GATE CS
  for (const exam of EXAMS_DATA) {
    if (examName.toLowerCase().includes(exam.id) || exam.name.toLowerCase().includes(examName.toLowerCase())) {
      const subjects = exam.branches ? exam.branches.flatMap(b => b.subjects) : exam.subjects || [];
      subjects.forEach(s => s.chapters.forEach(c => pool.push(...c.questions)));
    }
  }

  // If still low, add GATE PYQ questions
  if (pool.length < count) {
    for (const paper of GATE_PYQ_PAPERS.slice(0, 3)) {
      pool.push(...paper.questions);
    }
  }

  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  return selected.map((q, idx) => {
    const opts = q.options && q.options.length >= 2 ? q.options : ["True", "False", "Cannot be determined", "None of these"];
    const { shuffledOptions, newCorrectIdx } = shuffleQuestionOptions(opts, q.correctAnswerIndex ?? 0);
    return {
      id: `fallback-${Date.now()}-${idx}`,
      text: q.text,
      imageUrl: q.imageUrl,
      imageAlt: q.imageAlt,
      options: shuffledOptions,
      correctAnswerIndex: newCorrectIdx,
      explanation: q.explanation || `### Detailed Solution\nReview key concepts and formulas related to ${q.concept || examName}.`,
      difficulty: q.difficulty || (difficulty as "easy" | "medium" | "hard"),
      concept: q.concept || examName,
    };
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const topic: string = (body.topic || body.topicText || "").trim();
    const notes: string = (body.notes || body.pdfContentText || "").trim();
    const examName: string = body.examName || "GATE CS";
    const difficulty: string = body.difficulty || "medium";
    const count: number = Math.min(Math.max(body.count || 5, 3), 20);
    const customApiKey: string = (body.apiKey || "").trim();
    const customProvider: string = (body.provider || "gemini").toLowerCase();

    const activeGeminiKey = customProvider === "gemini" && customApiKey ? customApiKey : ENV_GEMINI_KEY;
    const activeGroqKey = customProvider === "groq" && customApiKey ? customApiKey : ENV_GROQ_KEY;
    const activeOrKey = customProvider === "openrouter" && customApiKey ? customApiKey : ENV_OR_KEY;

    const systemPrompt = `You are a distinguished university professor and expert question setter for competitive examinations (${examName}).
Your task is to generate exactly ${count} rigorous, authentic multiple-choice questions (MCQs) for ${examName} students.

CRITICAL RULES:
- Return ONLY a raw JSON array of objects. No conversational text, no intro, no backticks.
- "options" MUST be an array of exactly 4 plausible, distinct choices.
- "correctAnswerIndex" MUST be an integer 0, 1, 2, or 3. Distribute correct choices across all indices.
- "explanation" MUST be comprehensive and pedagogical: include formulas, step-by-step derivation, and why other options are incorrect.
- "difficulty" MUST be "${difficulty}".

Output schema:
[
  {
    "id": "q1",
    "text": "Question text with LaTeX math like $O(n \\log n)$ if applicable",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\\nStep 1: ...\\nStep 2: ...",
    "difficulty": "${difficulty}",
    "concept": "${topic || "Core Concept"}"
  }
]`;

    const userPrompt =
      notes && notes.length > 20
        ? `Generate exactly ${count} high-standard ${examName} MCQs based on these study notes (Difficulty: ${difficulty}):\n\nNotes:\n---\n${notes.substring(0, 4000)}\n---\n\nReturn raw JSON array.`
        : `Generate exactly ${count} authentic ${examName} MCQs on the topic: "${topic || "Core Fundamentals"}".\nDifficulty: ${difficulty}.\nInclude numerical problems and deep conceptual questions. Return raw JSON array.`;

    let content = "";
    let aiModelUsed = "";

    // 1. Try Gemini
    if (activeGeminiKey) {
      try {
        const genAI = new GoogleGenerativeAI(activeGeminiKey);
        const modelNames = ["gemini-1.5-flash", "gemini-2.0-flash", "gemini-1.5-pro"];
        for (const mName of modelNames) {
          try {
            const geminiModel = genAI.getGenerativeModel({
              model: mName,
              systemInstruction: systemPrompt,
              generationConfig: { temperature: 0.5, maxOutputTokens: 3500 },
            });
            const result = await geminiModel.generateContent(userPrompt);
            const text = result.response.text();
            if (text && text.trim().length > 50) {
              content = text;
              aiModelUsed = `Gemini (${mName})`;
              break;
            }
          } catch (innerErr) {
            console.warn(`Gemini (${mName}) attempt failed:`, innerErr);
          }
        }
      } catch (err) {
        console.warn("Gemini client initialization failed:", err);
      }
    }

    // 2. Try Groq
    if (!content && activeGroqKey) {
      try {
        content = await callLLM(GROQ_URL, activeGroqKey, GROQ_MODEL, systemPrompt, userPrompt, false);
        aiModelUsed = "Groq (Llama 3.3)";
      } catch (err) {
        console.warn("Groq failed:", err);
      }
    }

    // 3. Try OpenRouter
    if (!content && activeOrKey) {
      try {
        content = await callLLM(OR_URL, activeOrKey, OR_MODEL, systemPrompt, userPrompt, true);
        aiModelUsed = "OpenRouter";
      } catch (err) {
        console.warn("OpenRouter failed:", err);
      }
    }

    // 4. Free Zero-Key Cloud AI via Pollinations
    if (!content) {
      try {
        content = await callPollinationsAI(systemPrompt, userPrompt);
        if (content && content.trim().length > 50) {
          aiModelUsed = "Cloud AI Engine";
        }
      } catch (err) {
        console.warn("Pollinations AI attempt timed out or failed:", err);
      }
    }

    // Parse AI output if we got content
    if (content) {
      const parsedQuestions = parseAndNormalizeAIQuestions(content, difficulty, topic);
      if (parsedQuestions.length >= Math.min(count, 3)) {
        return NextResponse.json({
          questions: parsedQuestions.slice(0, count),
          source: "ai",
          model: aiModelUsed,
        });
      }
    }

    // 5. Intelligent Fallback: Authentic question search from real question banks
    console.log("Searching authentic question banks for topic:", topic || examName);
    const bankMatches = searchAuthenticQuestionBanks(topic || notes.slice(0, 40), count);

    if (bankMatches.length >= count) {
      return NextResponse.json({
        questions: bankMatches.slice(0, count),
        source: "curated_bank",
        fallback: true,
      });
    }

    // If partial matches, fill remaining with authentic backup exam questions
    const backupQuestions = getAuthenticBackupQuestions(examName, difficulty, count - bankMatches.length);
    const combined = [...bankMatches, ...backupQuestions];

    return NextResponse.json({
      questions: combined.slice(0, count),
      source: "curated_bank",
      fallback: true,
    });

  } catch (error) {
    console.error("AI quiz endpoint error:", error);
    const fallback = getAuthenticBackupQuestions("GATE CS", "medium", 5);
    return NextResponse.json({
      questions: fallback,
      source: "curated_bank",
      fallback: true,
    });
  }
}