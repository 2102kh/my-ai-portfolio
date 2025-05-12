'use client'
import AvatarModel from '@/components/AvatarModel'

import ChatBox from '@/components/ChatBox'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillSection'
import { useState } from 'react'

export default function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false)

  return (
    <section className="relative min-h-screen w-full flex flex-col text-[var(--text)] rounded-lg">
     
     <div style={{ background: 'var(--gradient-bg)' }}> 
      <div className="text-center max-w-2xl mx-auto space-y-4 p-4">
        <h2 className="text-2xl font-semibold text-[var(--color-text-main)] border-b-2 border-[var(--color-border)] w-fit mx-auto pb-2">
          Hej! Jag är Nigora 👋
        </h2>
        <p className="text-[var(--color-text-main)] leading-relaxed">
          Jag bygger smarta gränssnitt med <span className="font-semibold text-[var(--color-accent)]">React</span>, <span className="font-semibold text-[var(--color-accent)]">AI</span> och en stor dos kärlek för detaljer.
        </p>
        <p className="text-[var(--color-text-light)] leading-relaxed">
          Det här är <strong>Docka</strong> - min AI-assistent. Hon vet allt om mig och kan hjälpa dig med svar på dina frågor, visa mina projekt och guida dig genom min digitala värld.
        </p>
        <p className="italic text-[var(--color-accent)] font-medium">
          Fråga på - vi finns här för att göra allt lite enklare för dig! 😊
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center text-[var(--color-text)] border:lg border-[var(--color-border)] rounded-xl px-6 py-8 lg:px-16 gap-3.5">
        <AvatarModel isSpeaking={isSpeaking} />
        <ChatBox setIsSpeaking={setIsSpeaking} />
      </div>
      </div> 
      <SkillsSection />
      <ProjectsSection />
    </section>
  )
}
