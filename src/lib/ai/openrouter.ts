import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { CoreMessage, generateText } from 'ai'

export type ChatMessage = CoreMessage
export type { CoreMessage }

export const openrouter = createOpenRouter({ apiKey: process.env.OPENROUTER_API_KEY })

// Definir el modelo de Gemini
export const openrouterGeminiModel = 'google/gemini-2.0-pro-exp-02-05:free'

export async function sendChatMessage(messages: ChatMessage[]) {
  try {
    // Usar generateText de la librería 'ai' con el proveedor de OpenRouter
    const { text } = await generateText({
      model: openrouter(openrouterGeminiModel),
      messages,
      temperature: 0.7,
      maxTokens: 1000,
    })

    return text
  } catch (error) {
    console.error('Error sending chat message:', error)
    throw new Error('Failed to send chat message')
  }
}
