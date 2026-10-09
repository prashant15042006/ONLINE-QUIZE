import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HIGHLIGHTED_TOPICS } from "@/data/highlightedTopics";
import { EXAMS_DATA, Subject } from "@/data/quizData";

const ENV_GEMINI_KEY = process.env.GEMINI_API_KEY || "";
const ENV_GROQ_KEY = process.env.GROQ_API_KEY || "";
const ENV_OR_KEY = process.env.OPENROUTER_API_KEY || "";

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
      max_tokens: 3500,
      temperature: 0.5,
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

// Search existing high quality questions matching the topic
function searchCuratedQuestions(topic: string, count: number): Array<{
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  concept: string;
}> {
  const terms = topic.toLowerCase().split(/\s+/).filter(t => t.length > 2);
  if (terms.length === 0) return [];

  const matched: Array<{
    id: string;
    text: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
    difficulty: "easy" | "medium" | "hard";
    concept: string;
    score: number;
  }> = [];

  // Search Highlighted Topics
  for (const ht of HIGHLIGHTED_TOPICS) {
    const topicMatches = terms.some(t => ht.name.toLowerCase().includes(t) || ht.subject.toLowerCase().includes(t));
    for (const q of ht.questions) {
      const qText = q.text.toLowerCase();
      let score = topicMatches ? 3 : 0;
      for (const t of terms) {
        if (qText.includes(t)) score += 2;
      }
      if (score > 0) {
        matched.push({
          id: `ai-curated-${q.id}`,
          text: q.text,
          options: q.options,
          correctAnswerIndex: q.correctAnswerIndex,
          explanation: q.explanation || `Relevant solution for ${ht.name}.`,
          difficulty: q.difficulty || "medium",
          concept: ht.name,
          score,
        });
      }
    }
  }

  // Search EXAMS_DATA
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
          const qText = q.text.toLowerCase();
          let score = chapMatches ? 2 : 0;
          for (const t of terms) {
            if (qText.includes(t)) score += 2;
          }
          if (score > 1) {
            matched.push({
              id: `ai-curated-${q.id}`,
              text: q.text,
              options: q.options,
              correctAnswerIndex: q.correctAnswerIndex,
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

  // Sort by score descending and take unique questions
  matched.sort((a, b) => b.score - a.score);
  const seen = new Set<string>();
  const unique = matched.filter(item => {
    if (seen.has(item.text)) return false;
    seen.add(item.text);
    return true;
  });

  return unique.slice(0, count).map(q => {
    const { shuffledOptions, newCorrectIdx } = shuffleQuestionOptions(q.options, q.correctAnswerIndex);
    return {
      id: q.id,
      text: q.text,
      options: shuffledOptions,
      correctAnswerIndex: newCorrectIdx,
      explanation: q.explanation,
      difficulty: q.difficulty,
      concept: q.concept,
    };
  });
}

// Smart Domain Fallback when no API keys are available or AI rate-limited
function generateSmartFallback(topic: string, examName: string, difficulty: string, count: number) {
  const t = topic.trim() || "Core Concepts";

  // Check if we can pull authentic curated questions first
  const curatedMatches = searchCuratedQuestions(t, count);
  if (curatedMatches.length >= count) {
    return curatedMatches;
  }

  // Domain question generators
  const baseTemplates = [
    {
      text: `In the context of ${t}, which statement is technically correct regarding primary execution and system behavior?`,
      correct: `It enforces defined theoretical bounds and deterministic boundary constraints`,
      wrong: [
        `It operates with unconstrained random allocations without verifying preconditions`,
        `It bypasses state invariants whenever asymptotic efficiency increases`,
        `It assumes zero operational overhead across all memory and execution layers`
      ],
      explanation: `### Detailed Solution\nIn ${examName} analysis for **${t}**, operations must maintain formal invariants and adhere strictly to theoretical bounds.\n\n**Key Takeaway:** Correctness requires verifying state invariants before optimizing performance.`
    },
    {
      text: `What is the primary constraint or performance bottleneck frequently encountered when optimizing "${t}"?`,
      correct: `Resource contention and synchronization overhead across state transitions`,
      wrong: [
        `Arbitrary variable naming causing parsing latency`,
        `Unconditional branching improving pipeline utilization`,
        `Direct arithmetic simplicity without any memory interaction`
      ],
      explanation: `### Detailed Solution\nWhen scaling **${t}**, resource contention and memory latency dominate the critical path. Minimizing synchronization stalls directly optimizes throughput.`
    },
    {
      text: `Consider a standard problem formulation involving ${t}. How are boundary edge-cases most effectively addressed?`,
      correct: `By establishing clear base cases and validating invariant preconditions prior to iterative processing`,
      wrong: [
        `By ignoring boundary states and relying on default zero initializations`,
        `By executing arbitrary retry loops without terminating conditions`,
        `By strictly using brute-force search over infinite input domains`
      ],
      explanation: `### Detailed Solution\nBoundary verification ensures robustness in ${t}. Establishing inductive base conditions prevents edge-case regressions.`
    },
    {
      text: `Which architectural or algorithmic property characterizes an optimal implementation of ${t}?`,
      correct: `Minimal time-space complexity trade-off adhering to formal asymptotic limits`,
      wrong: [
        `Exponential auxiliary space regardless of input dimensions`,
        `Redundant multi-pass recalculations without caching or memoization`,
        `Indiscriminate synchronization locking across all concurrent blocks`
      ],
      explanation: `### Detailed Solution\nAn optimal implementation of ${t} achieves the theoretical lower bound without redundant auxiliary overhead.`
    },
    {
      text: `During validation of ${t}, what criterion confirms that the system has reached a stable equilibrium?`,
      correct: `All constraint verification assertions pass and no further state transitions are required`,
      wrong: [
        `The clock cycle counter wraps around zero`,
        `Arbitrary exception suppression masks runtime anomalies`,
        `Total operations exceed arbitrary arbitrary iteration thresholds`
      ],
      explanation: `### Detailed Solution\nEquilibrium is defined by satisfaction of all invariant constraints with stable state convergence.`
    },
    {
      text: `In standard ${examName} evaluations of "${t}", which mistake is most commonly penalized?`,
      correct: `Overlooking off-by-one boundary conditions and implicit domain restrictions`,
      wrong: [
        `Using standard mathematical notation instead of heuristic approximations`,
        `Following formal algorithmic specifications step-by-step`,
        `Verifying intermediate results before producing final output`
      ],
      explanation: `### Detailed Solution\nGATE and competitive exams frequently test subtle off-by-one boundaries and implicit domain assumptions in ${t}.`
    },
    {
      text: `How does increasing input size N typically affect the computational resource demand in "${t}"?`,
      correct: `It scales according to the fundamental asymptotic complexity of the governing algorithm`,
      wrong: [
        `It always remains strictly O(1) independent of data structure design`,
        `It causes unpredictable non-deterministic shifts unrelated to algorithm complexity`,
        `It reduces required execution time as problem size multiplies`
      ],
      explanation: `### Detailed Solution\nAsymptotic growth governs resource consumption in ${t}. Understanding Big-O bounds is essential for competitive exam questions.`
    },
    {
      text: `Which design pattern or strategy is best suited for decomposing complex challenges in "${t}"?`,
      correct: `Divide-and-conquer combined with modular verification of independent sub-problems`,
      wrong: [
        `Monolithic unrolled scripting without modular function boundaries`,
        `Pure trial-and-error mutation without systematic hypothesis testing`,
        `Ignoring existing subproblem dependencies to compute answers out-of-order`
      ],
      explanation: `### Detailed Solution\nModular decomposition breaks complex ${t} problems into solvable atomic steps with verifiable proofs of correctness.`
    },
    {
      text: `When evaluating the worst-case scenario for "${t}", which factor has the greatest influence?`,
      correct: `Adversarial input distributions that trigger maximum traversal paths or pipeline stalls`,
      wrong: [
        `Cosmetic formatting variations in source listings`,
        `Constant factors that shrink asymptotically toward zero`,
        `Presence of explanatory commentary within problem descriptions`
      ],
      explanation: `### Detailed Solution\nWorst-case analysis requires examining inputs that maximize resource usage or trigger worst-case branching paths.`
    },
    {
      text: `What is the most effective approach to verify correctness of a derived solution for "${t}"?`,
      correct: `Formal verification against test vectors, mathematical invariants, and boundary conditions`,
      wrong: [
        `Assuming the first generated candidate is automatically optimal`,
        `Skipping validation whenever time elapsed is below average`,
        `Relying solely on visual inspection without rigorous numerical verification`
      ],
      explanation: `### Detailed Solution\nRigorous testing against known edge cases and mathematical validation confirms solution soundness for ${t}.`
    }
  ];

  const combined = [...curatedMatches];
  let templateIdx = 0;

  while (combined.length < count && templateIdx < baseTemplates.length) {
    const tmpl = baseTemplates[templateIdx];
    const allOptions = [tmpl.correct, ...tmpl.wrong];
    const { shuffledOptions, newCorrectIdx } = shuffleQuestionOptions(allOptions, 0);

    combined.push({
      id: `ai-gen-${Date.now()}-${combined.length}`,
      text: tmpl.text,
      options: shuffledOptions,
      correctAnswerIndex: newCorrectIdx,
      explanation: tmpl.explanation,
      difficulty: difficulty as "easy" | "medium" | "hard",
      concept: t,
    });
    templateIdx++;
  }

  return combined.slice(0, count);
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

    const systemPrompt = `You are a distinguished professor and expert question setter for competitive exams, specializing in ${examName}.
Generate exactly ${count} rigorous, authentic multiple-choice questions (MCQs) matching the exact style, syllabus, and depth of ${examName}.

CRITICAL JSON OUTPUT RULES:
- Output ONLY a valid raw JSON array of objects.
- Absolutely NO conversational text, NO intro, NO markdown code fences.
- "correctAnswerIndex" MUST be an integer between 0 and 3. Distribute correct answers across options 0, 1, 2, and 3 evenly.
- "options" MUST be an array of exactly 4 strings. All 4 options must be distinct, plausible, and high quality.
- "explanation" MUST include a clear step-by-step mathematical or conceptual breakdown.
- "difficulty" should be "${difficulty}".

Schema:
[
  {
    "id": "gen-1",
    "text": "Question text here",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswerIndex": 1,
    "explanation": "### Solution\\nStep 1: ...\\nStep 2: ...",
    "difficulty": "${difficulty}",
    "concept": "${topic || "Core Concept"}"
  }
]`;

    const userPrompt =
      notes && notes.length > 20
        ? `Generate ${count} ${examName} MCQs based on the following study notes (Difficulty: ${difficulty}):\n\nNotes:\n---\n${notes.substring(0, 4500)}\n---\n\nReturn ONLY the JSON array.`
        : `Generate ${count} high-caliber ${examName} MCQs on the topic: "${topic || "Computer Science Fundamentals"}".\nDifficulty: ${difficulty}.\nInclude numericals, theoretical nuances, and tricky distractors.\n\nReturn ONLY the JSON array.`;

    let content = "";

    // 1. Try Gemini
    if (activeGeminiKey) {
      try {
        const genAI = new GoogleGenerativeAI(activeGeminiKey);
        // Try gemini-1.5-flash or gemini-2.0-flash
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
              console.log(`Gemini (${mName}) succeeded, length:`, content.length);
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
        console.log("Groq succeeded, length:", content.length);
      } catch (err) {
        console.warn("Groq failed:", err);
      }
    }

    // 3. Try OpenRouter
    if (!content && activeOrKey) {
      try {
        content = await callLLM(OR_URL, activeOrKey, OR_MODEL, systemPrompt, userPrompt, true);
        console.log("OpenRouter succeeded, length:", content.length);
      } catch (err) {
        console.warn("OpenRouter failed:", err);
      }
    }

    // 4. If AI succeeded, parse and validate
    if (content) {
      const jsonStr = extractJsonArray(content);
      try {
        const raw = JSON.parse(jsonStr);
        if (Array.isArray(raw) && raw.length > 0) {
          const valid = raw
            .filter(
              (q) =>
                q &&
                typeof q.text === "string" &&
                q.text.trim().length > 10 &&
                Array.isArray(q.options) &&
                q.options.length >= 2 &&
                typeof q.correctAnswerIndex === "number" &&
                q.correctAnswerIndex >= 0 &&
                q.correctAnswerIndex < q.options.length
            )
            .map((q, i) => {
              // Ensure 4 options
              let opts: string[] = (q.options as unknown[]).map(o => String(o).trim());
              let cIdx = q.correctAnswerIndex as number;
              if (opts.length < 4) {
                while (opts.length < 4) {
                  opts.push(`None of the above`);
                }
              } else if (opts.length > 4) {
                opts = opts.slice(0, 4);
                if (cIdx >= 4) cIdx = 0;
              }

              // Randomize option order to prevent always-A bias
              const { shuffledOptions, newCorrectIdx } = shuffleQuestionOptions(opts, cIdx);

              return {
                id: `gen-${Date.now()}-${i}`,
                text: q.text,
                imageUrl: typeof q.imageUrl === "string" && q.imageUrl.trim().length > 0 ? q.imageUrl.trim() : undefined,
                imageAlt: typeof q.imageAlt === "string" ? q.imageAlt : undefined,
                options: shuffledOptions,
                correctAnswerIndex: newCorrectIdx,
                explanation: q.explanation || "Review fundamental formulas and concepts related to this topic.",
                difficulty: q.difficulty || difficulty,
                concept: q.concept || topic || "AI Quiz",
              };
            });

          if (valid.length > 0) {
            return NextResponse.json({
              questions: valid.slice(0, count),
              source: "ai",
            });
          }
        }
      } catch (parseErr) {
        console.warn("JSON parse failed on AI response:", parseErr);
      }
    }

    // 5. Intelligent Fallback: Real questions matched from curated bank or synthesized
    console.log("Serving intelligent questions for:", topic || examName);
    const fallbackQuestions = generateSmartFallback(topic || notes.slice(0, 40), examName, difficulty, count);
    return NextResponse.json({
      questions: fallbackQuestions,
      source: "curated_bank",
      fallback: true,
    });

  } catch (error) {
    console.error("AI quiz endpoint error:", error);
    return NextResponse.json({
      questions: generateSmartFallback("Computer Science", "GATE", "medium", 5),
      source: "fallback",
      error: "Temporary issue encountered. Loaded standard questions for you.",
    });
  }
}