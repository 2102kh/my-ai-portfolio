'use client'
import { useState } from 'react'

type ChatMessage = {
  sender: 'user' | 'bot'
  text: string
}

export default function ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputText, setInputText] = useState('')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const userMessage: ChatMessage = { sender: 'user', text: inputText }
    setMessages((prev) => [...prev, userMessage])
    setLoading(true)
    setReply('')
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
      setReply(data.reply)
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Något gick fel. Försök igen senare.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto'>
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
          className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Laddar...' : 'Skicka'}
        </button>
      </form>

      <div className="mt-6 space-y-2">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`p-3 rounded-lg ${
        msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
      }`}
    >
      <p className="text-sm">
        <strong>{msg.sender === 'user' ? 'Du' : 'Dockan'}:</strong> {msg.text}
      </p>
    </div>
  ))}
</div>

        </div>
      )}
   
  
