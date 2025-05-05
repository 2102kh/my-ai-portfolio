
import AvatarModel from '@/components/AvatarModel'
import ChatBox from '@/components/ChatBox'

export default function Home() {
  return (
    <section className="p-4">
      
      <p className="text-lg max-w-xl mb-6">
         Jag är frontendutvecklare med passion för React, AI och användarupplevelse. Låt mig presentera mina projekt – eller ställ en intervjufråga!
      </p>
      <AvatarModel />
      <ChatBox/>
      <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
         Utforska mina projekt
       </button>
    </section>
  )
}
