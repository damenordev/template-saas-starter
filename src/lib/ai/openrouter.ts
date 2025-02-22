import OpenAI from 'openai';

export const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL,
    'X-Title': process.env.NEXT_PUBLIC_SITE_NAME,
  },
});

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function sendChatMessage(messages: ChatMessage[]) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'deepseek/deepseek-r1:free',
      messages,
    });

    return completion.choices[0].message;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
}