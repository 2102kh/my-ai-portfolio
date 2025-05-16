'use client'
import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <html lang="sv">
      <body className={`${menuOpen ? 'overflow-hidden': ''} ${inter.className} bg-[var(--color-latte)] text-gray-900 flex flex-col min-h-screen`}>
        {menuOpen && (
  <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
)}
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className={menuOpen ? 'blur-sm pointer-events-none transition duration-300' : 'transition duration-300'}>
          <main className="flex-grow">{children}</main>

          <footer className="p-4 text-center text-sm text-gray-500 bg-[var(--color-beige)]">
            © {new Date().getFullYear()} Mitt AI-Portfolio
          </footer>
        </div>
      </body>
    </html>
  )
}

