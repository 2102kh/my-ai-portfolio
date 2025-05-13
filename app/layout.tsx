
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mitt AI-Portfolio',
  description: 'En interaktiv AI-baserad portfolio av en frontendutvecklare',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className={`${inter.className} bg-[var--(color-latte)] text-gray-900 flex flex-col min-h-screen`}>
        <header className="p-4 bg-[var(--color-beige)] text-[var(--text]shadow-md flex justify-between position: sticky top-0 z-10">
          <h1 className="text-xl text-[var(--text)] font-bold">👩‍💻 Mitt Portfolio</h1>
          <nav className="space-x-8 text-[var(--text)]">
            <Link href="/">Start</Link>
            <Link href="/#skills">Mina färdigheter</Link>
            <Link href="/chat">Intervju</Link>
            <Link href="/about">Om mig</Link>
          </nav>
        </header>
        <main className='min-h-screen'>

          {children}
        </main>
        <footer className="p-4 text-center text-sm text-gray-500 bg-[var(--color-beige)]">© {new Date().getFullYear()} Mitt AI-Portfolio</footer>
      </body>
    </html>
  )
}
