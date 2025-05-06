'use client'
import AvatarModel from '@/components/AvatarModel'
import ChatBox from '@/components/ChatBox'
import { use, useState } from 'react'

export default function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false)

  return (
    <section className="p-4 relative h-[100vh] flex flex-col items-center justify-center">
      <p className="text-lg max-w-xl mb-4">
        Jag är frontendutvecklare med passion för React, AI och användarupplevelse. Låt mig presentera mina projekt – eller ställ en intervjufråga!
      </p>
      <div className="w-full h-[100vh] overflow-hidden">
        <AvatarModel isSpeaking={isSpeaking} />
      </div>
      <ChatBox isSpeaking={isSpeaking} setIsSpeaking={setIsSpeaking} />
      <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition mt-4">
        Utforska mina projekt
      </button>

    </section>
  )
}
