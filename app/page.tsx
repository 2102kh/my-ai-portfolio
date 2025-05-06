'use client'
import AvatarModel from '@/components/AvatarModel'
import ChatBox from '@/components/ChatBox'
import { useState } from 'react'

export default function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false)

  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row gap-8 p-4 bg-[var(--muted)] text-[var(--text)] rounded-lg shadow-lg">

    
      <div className="w-full lg:w-1/2 h-auto flex items-center justify-center px-4 text-center">
        <p className="text-lg max-w-xl">
          Hej! Jag är Nigora 👋  
          <br />
          Jag bygger smarta gränssnitt med React, AI och en stor dos kärlek för detaljer.  
          <br /><br />
          Det här är Docka – min AI-assistent. Hon vet allt om mig och kan hjälpa dig med svar på dina frågor, visa mina projekt och guida dig genom min digitala värld.  
          <br /><br />
          Fråga på – hon (och jag!) finns här för att göra allt lite enklare för dig. 😊
        </p>
      </div>

      
      <div className="w-full flex items-center justify-center text-center rounded-lg shadow-lg bg-[var(--muted)] text-[var(--foreground)] border-2 border-[var(--border)] gap-5 p-4">
        <AvatarModel isSpeaking={isSpeaking} />
        <ChatBox isSpeaking={isSpeaking} setIsSpeaking={setIsSpeaking} />
      </div>

    </section>
  )
}
