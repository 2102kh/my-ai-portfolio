'use client'
import AvatarModel from '@/components/AvatarModel'

import ChatBox from '@/components/ChatBox'
import ContactmailtoForm from '@/components/ContactmailtoForm'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillSection'
import { useState } from 'react'

export default function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false)

  return (
    <section className="relative min-h-screen w-full flex flex-col text-[var(--text)] rounded-lg">
     
     <div style={{ background: 'var(--gradient-bg)' }}> 
      <div className="text-center max-w-2xl mx-auto space-y-4 p-6 pt-12">
  <h2 className="text-2xl font-semibold text-[var(--color-text-main)] border-b-2 border-[var(--color-border)] w-fit mx-auto pb-2">
    Frontend & Mobile Developer 
  </h2>

  <p className="text-[var(--color-text-main)] leading-relaxed">
     Hej! Jag är Nigora 👋 Jag bygger smarta, AI-drivna gränssnitt med <span className="font-semibold text-[var(--color-accent)]">React</span>, <span className="font-semibold text-[var(--color-accent)]">React Native</span> och <span className="font-semibold text-[var(--color-accent)]">Next.js</span> - alltid med fokus på användarupplevelse och kärlek för detaljer.
  </p>

  <p className="text-[var(--color-text-light)] leading-relaxed">
    Det här är <strong>Docka</strong> - min AI-assistent. Hon känner till mina projekt, styrkor och kan guida dig genom min digitala portfolio, svara på dina frågor och visa vad jag kan som utvecklare.
  </p>

  <p className=" text-[var(--color-accent)] font-medium">
    Fråga på - vi är här för att göra ditt besök både enklare och mer inspirerande! 😊
  </p>
</div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center text-[var(--color-text)] rounded-xl px-10 py-10 lg:px-10 gap-3.5 ">
        <AvatarModel isSpeaking={isSpeaking} />
        <ChatBox setIsSpeaking={setIsSpeaking} />
      </div>
      </div> 
      <SkillsSection />
      <ProjectsSection />
      <ContactmailtoForm />
    </section>
  )
}
