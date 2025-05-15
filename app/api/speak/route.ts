
import { NextRequest, NextResponse } from "next/server"
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly"

const polly = new PollyClient({
  region: "eu-west-1", // Stockholm
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function POST(req: NextRequest) {
  
  
  const { text } = await req.json()
  let modifiedText = text
  if (text.includes("Nigora")) {
    modifiedText = text.replace(/Nigora/g,
      `<phoneme alphabet="ipa" ph="niːɡoːra">Nigora</phoneme>`
    )
  }
  const ssml =`<speak>${modifiedText}</speak>`
  const command = new SynthesizeSpeechCommand({
    OutputFormat: "mp3",
    TextType: "ssml",
    Text: ssml,
    VoiceId: "Elin",        // ← Svensk kvinnlig röst , altrnative is "Astrid" with Engine: "standard"
    LanguageCode: "sv-SE",    
    Engine: "neural",       
  })
  try {
    const response = await polly.send(command)

    if (!response.AudioStream) {
      return new NextResponse("Ingen ljudström från Polly", { status: 500 })
    }
    const audioBuffer = await response.AudioStream.transformToByteArray()
    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("Polly-fel:", error)
    return new NextResponse("Fel från Polly", { status: 500 })
  }
}
