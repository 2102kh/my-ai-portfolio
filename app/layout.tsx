'use client'
import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className={`${inter.className} bg-[var(--color-latte)] text-gray-900 flex flex-col min-h-screen`}>
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>

        <footer className="p-4 text-center text-sm text-gray-500 bg-[var(--color-beige)]">
          © {new Date().getFullYear()} Mitt AI-Portfolio
        </footer>
      </body>
    </html>
  )
}

