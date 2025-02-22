'use client'

import { useState } from 'react'
import { Send, Bot, User } from 'lucide-react'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Card } from '@/ui/card'
import { ChatMessage } from '@/lib/ai/openrouter'
import { handleChatMessage } from '@/lib/actions/chat.actions'

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: ChatMessage = {
      role: 'user',
      content: input.trim(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const result = await handleChatMessage([...messages, userMessage])

      if (!result.success) {
        throw new Error(result.error)
      }

      setMessages(prev => [...prev, result.data])
    } catch (error) {
      console.error('Chat error:', error)
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-[calc(100vh-5rem)] max-w-4xl mx-auto flex flex-col pb-4">
      <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent hover:scrollbar-thumb-primary/20">
        {messages.map((message, index) => (
          message.role === 'assistant' ? (
            <div key={index} className="flex items-start gap-1 max-w-3xl animate-in fade-in-50 duration-300">
              <span className="p-1 rounded-xl text-foreground">
                <Bot />
              </span>
              <div className="flex flex-col gap-1">
                <div className="p-1">
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ) : (
            <div key={index} className="flex justify-end items-start gap-1 max-w-3xl ml-auto animate-in fade-in-50 duration-300">
              <div className="flex flex-col gap-1">
                <div className="bg-foreground p-3 rounded-xl rounded-tr-none text-background shadow-sm">
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
              <span className="p-1 bg-foreground rounded-lg text-background shadow-sm">
                <User className="size-5" />
              </span>
            </div>
          )
        ))}
      </div>
      <form onSubmit={handleSubmit} className="relative w-full gap-2">
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Pregunta lo que quieras"
          className="w-full bg-card/50 border-primary/20 focus-visible:ring-primary/30 placeholder:text-muted-foreground/70 p-6 rounded-full shadow-sm"
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="icon"
          disabled={isLoading}
          className="absolute right-2 top-[50%] -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm rounded-full"
        >
          <Send />
        </Button>
      </form>
    </div>
  )
}
