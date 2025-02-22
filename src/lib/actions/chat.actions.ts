'use server';

import { ChatMessage, sendChatMessage } from '@/lib/ai/openrouter';

export async function handleChatMessage(messages: ChatMessage[]) {
  try {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error('Invalid messages format');
    }

    const response = await sendChatMessage(messages);
    return { success: true, data: response };
  } catch (error) {
    console.error('Chat action error:', error);
    return { success: false, error: 'Failed to process chat request' };
  }
}