import OpenAI from 'openai';

const isOpenRouter = process.env.OPENAI_API_KEY?.startsWith('sk-or-');
const baseURL = process.env.OPENAI_BASE_URL || (isOpenRouter ? 'https://openrouter.ai/api/v1' : undefined);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: baseURL,
  defaultHeaders: isOpenRouter ? {
    'HTTP-Referer': 'https://online-quiz.vercel.app',
    'X-Title': 'Online Quiz App',
  } : undefined
});

export async function generateAnswer(question: string): Promise<string> {
  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'poolside/laguna-m.1:free',
    messages: [{ role: 'user', content: question }],
    max_tokens: 300,
  });
  return completion.choices[0].message.content?.trim() ?? '';
}
