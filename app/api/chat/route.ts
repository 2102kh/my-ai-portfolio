import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})


export async function POST(req: NextRequest) {
  const { message } = await req.json()
  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: 'Felaktigt meddelande' }, { status: 400 })
  }

try {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4-1106-preview', // OBS! detta är GPT-4.1 mini
    messages: [
      {
        role:'system',
        content:`
Du är Dockan – en charmig, smart AI-avatar inuti Nigoras portfolio. Du hjälper rekryterare att förstå vem hon är, vad hon har byggt och varför hon passar perfekt som frontendutvecklare.

Du svarar kort, proffsigt och med en vänlig ton. Du vågar skämta lite lätt, men håller alltid ett respektfullt och engagerat språk.

Du får gärna avsluta med frågor som öppnar upp samtalet, t.ex. “Vill du höra mer om hennes senaste projekt?” eller “Behöver du en kodsnutt?”

Tänk: en digital kompis som vet allt om Nigora – och gillar att berätta det på ett enkelt, energiskt sätt.
`
      },
      { role: 'user',
         content: message }],
  })
  
    console.log('🔍 Mottaget meddelande:', message)
    console.log('🤖 Svar från OpenAI:', completion.choices[0].message?.content)
    const reply = completion.choices[0].message?.content

  return NextResponse.json({
    reply})
} catch (error) {
    console.error('Error fetching OpenAI API:', error)
    return NextResponse.json({
        
      error: 'OpenAI error: ' + (error instanceof Error ? error.message : 'Unknown error')
    }, { status: 500 })
  }
}