'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Loader2 } from 'lucide-react'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { ChatMessage } from '@/lib/ai/openrouter'
import { handleChatMessage } from '@/lib/actions/chat.actions'
import ReactMarkdown from 'react-markdown'

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isLoading && !isTyping && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isLoading, isTyping])

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
    setIsTyping(true)

    try {
      const result = await handleChatMessage([...messages, userMessage])

      if (!result.success) {
        throw new Error(result.error)
      }

      setMessages(prev => [...prev, result.data as ChatMessage])
    } catch (error) {
      console.error('Chat error:', error)
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false)
      setIsTyping(false)
    }
  }

  return (
    <div className="h-[calc(100vh-5rem)] max-w-4xl mx-auto flex flex-col pb-4">
      <div className="flex-1 overflow-y-auto space-y-2 pr-4">
        {messages.map((message, index) =>
          message.role === 'assistant' ? (
            <div key={index} className="flex items-start gap-1 max-w-3xl animate-in fade-in-50 duration-300">
              <span className="p-1">
                <Bot />
              </span>
              <div className="flex flex-col gap-1 p-1 text-xs">
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex justify-end items-start gap-1 max-w-3xl ml-auto animate-in fade-in-50 duration-300"
            >
              <div className="flex flex-col gap-1">
                <div className="bg-foreground p-2 rounded-xl rounded-tr-none text-background shadow-sm">
                  <p className="text-xs">{message.content}</p>
                </div>
              </div>
              <span className="p-1 bg-foreground rounded-lg text-background shadow-sm">
                <User className="size-5" />
              </span>
            </div>
          )
        )}
        {isTyping && (
          <div className="flex items-start gap-1 max-w-3xl animate-in fade-in-50 duration-300">
            <span className="p-1 rounded-xl text-foreground">
              <Bot />
            </span>
            <div className="flex flex-col gap-1">
              <div className="p-3">
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce"></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="relative w-full gap-2">
        <Input
          value={input}
          ref={inputRef}
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
          {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
        </Button>
      </form>
    </div>
  )
}
