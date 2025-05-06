'use client'
import { useEffect, useState } from 'react'

type ChatMessage = {
  sender: 'user' | 'bot'
  text: string
}

export default function ChatBox({
  isSpeaking,
  setIsSpeaking,
}: {
  isSpeaking: boolean
  setIsSpeaking: (value: boolean) => void
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(false)

  
const speak = async (text: string) => {
  try {
    setIsSpeaking(true)

    const res = await fetch('/api/speak', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })

    if (!res.ok) {
      console.error('❌ Fel från /api/speak:', await res.text())
      setIsSpeaking(false)
      return
    }

    const blob = await res.blob()
    const url = URL.createObjectURL(blob)

    const audio = new Audio(url)
    audio.onended = () => setIsSpeaking(false)
    audio.onerror = () => {
      console.error('❌ Ljuduppspelning misslyckades.')
      setIsSpeaking(false)
    }

    audio.play().catch((err) => {
      console.error('❌ Kunde inte spela upp ljud:', err)
      setIsSpeaking(false)
    })
  } catch (err) {
    console.error('❌ speak() error:', err)
    setIsSpeaking(false)
  }
}

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const userMessage: ChatMessage = { sender: 'user', text: inputText }
    setMessages((prev) => [...prev, userMessage])
    setLoading(true)
    setInputText('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputText }),
      })

      const data = await response.json()
      const botMessage: ChatMessage = { sender: 'bot', text: data.reply }
      setMessages((prev) => [...prev, botMessage])
      speak(data.reply)
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Något gick fel. Försök igen senare.' },
      ])
      setIsSpeaking(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='p-6 shadow-md w-full max-w-md mx-auto  bg-[var(--secondary)] text-[var(--primary)] rounded-lg shadow-lg">
'>
      <h2 className='text-lg font-bold mb-4'>Chat with AI</h2>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={4}
          className='p-2 border rounded-lg'
          placeholder='Skriv ditt meddelande här...'
        />
        <button
          type='submit'
          className={`bg-[var(--primary)] text-white py-2 px-4 rounded-lg ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Laddar...' : 'Skicka'}
        </button>
      </form>

      <div className="mt-6 space-y-2 overflow-y-auto max-h-60">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none flex items-start gap-2'
              }`}
            >
              {msg.sender === 'bot' && <span className="text-xl">🤖</span>}
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
