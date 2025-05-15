'use client'
import Link from 'next/link'
import { useState } from 'react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_ITEMS = [
    { href: '/', label: 'Start' },
    { href: '#skills', label: 'Mina Färdigheter' },
    { href: '#project', label: 'Mina Projekt' },
    { href: '#contact', label: 'Kontakta mig' },
]


const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className="px-4 py-2 text-lg font-medium text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition duration-300"
    >
        {label}
    </Link>
)

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header className="sticky top-0 z-50 bg-[var(--color-beige)] shadow-md justify-between align-center">
            <div className=" mx-auto  flex items-center justify-between px-6 py-6">
                <h1 className="text-xl text-[var(--text)] font-bold">👩‍💻 Mitt Portfolio</h1>
                <nav className="hidden md:flex gap-6 justify-end align-center items-center">
                    {NAV_ITEMS.map((item) => (
                        <NavLink key={item.label} {...item} />
                    ))}
                </nav>

                <button
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                    className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                >
                    {isOpen ? (
                        <XMarkIcon className="h-6 w-6 text-[var(--color-accent)]" />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-[var(--color-text-main)]" />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex flex-col items-center gap-6 mt-3 bg-[var(--color-latte)] shadow-md p-6 rounded-md md:hidden"
                    >
                        {NAV_ITEMS.map((item) => (
                            <motion.div
                                key={item.label}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <NavLink href={item.href} label={item.label} onClick={() => setIsOpen(false)} />
                            </motion.div>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>

        </header>
    )
}
