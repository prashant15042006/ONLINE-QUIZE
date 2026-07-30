import OpenAI from 'openai';

// Groq runs an OpenAI-compatible API
const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

const GROQ_MODEL = 'llama-3.3-70b-versatile';

/**
 * Generate quiz questions for a given company/exam topic.
 */
export async function generateQuiz(params: {
  topic: string;
  company: string;
  difficulty: string;
  questionCount: number;
  customPrompt?: string;
}): Promise<any> {
  const { topic, company, difficulty, questionCount, customPrompt } = params;

  const systemPrompt = `You are an expert exam question creator specialising in Indian recruitment tests, competitive exams and technical assessments. Generate ONLY valid JSON with no extra text or markdown.`;

  const userPrompt = `Create ${questionCount} high-quality multiple-choice questions for "${company}" exam on the topic "${topic}".
Difficulty: ${difficulty}
${customPrompt ? `Additional instructions: ${customPrompt}` : ''}

Return ONLY a JSON object with this exact structure:
{
  "title": "<Exam Title>",
  "targetCompanyOrExam": "${company}",
  "timeLimitMinutes": ${questionCount * 2},
  "questions": [
    {
      "id": "q1",
      "question": "Question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Clear explanation of why the answer is correct.",
      "hint": "A small hint for the student.",
      "topic": "${topic}",
      "difficulty": "${difficulty}"
    }
  ]
}

Rules:
- correctAnswer is the 0-based index of the correct option
- All 4 options must be plausible
- Explanations must be educational and clear
- Questions should match the actual ${company} exam pattern
- Return ONLY the JSON object, no markdown, no backticks`;

  const completion = await groq.chat.completions.create({
    model: GROQ_MODEL,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.7,
    max_tokens: 4096,
  });

  const raw = completion.choices[0].message.content?.trim() ?? '{}';

  // Strip markdown code fences if Groq wraps response
  const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();

  return JSON.parse(cleaned);
}

/**
 * Generate a detailed AI explanation for a quiz question.
 */
export async function generateExplanation(params: {
  question: string;
  options: string[];
  userAnswer: number;
  correctAnswer: number;
  userApiKey?: string;
}): Promise<string> {
  const { question, options, userAnswer, correctAnswer } = params;

  const userSelectedOption = userAnswer >= 0 && userAnswer < options.length ? options[userAnswer] : 'Not answered';
  const correctOption = options[correctAnswer] ?? 'N/A';

  const prompt = `Question: ${question}

Options:
${options.map((o, i) => `${String.fromCharCode(65 + i)}) ${o}`).join('\n')}

Correct Answer: ${correctOption}
User Selected: ${userSelectedOption}

Give a clear, step-by-step explanation of why "${correctOption}" is correct. If the user was wrong, gently explain the misconception. Keep it under 150 words.`;

  const completion = await groq.chat.completions.create({
    model: GROQ_MODEL,
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.5,
    max_tokens: 300,
  });

  return completion.choices[0].message.content?.trim() ?? 'Explanation unavailable.';
}

/**
 * Legacy: simple question → answer (kept for backward compatibility)
 */
export async function generateAnswer(question: string): Promise<string> {
  const completion = await groq.chat.completions.create({
    model: GROQ_MODEL,
    messages: [{ role: 'user', content: question }],
    max_tokens: 300,
  });
  return completion.choices[0].message.content?.trim() ?? '';
}
