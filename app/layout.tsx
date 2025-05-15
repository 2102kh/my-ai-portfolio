'use client'
import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Mitt AI-Portfolio',
  description: 'En interaktiv AI-baserad portfolio av en frontendutvecklare',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className={`${inter.className} bg-[var(--color-latte)] text-gray-900 flex flex-col min-h-screen`}>
        <header className="sticky top-0 z-50 bg-[var(--color-beige)] shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" flex justify-between items-center h-16">
              <h1 className="text-xl text-[var(--text)] font-bold">👩‍💻 Mitt Portfolio</h1>

              <NavBar/>
            </div>
          </div>
        </header>

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

