'use client'
import Link from 'next/link'
import { useState } from 'react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_ITEMS = [
    { href: '/', label: 'Välkommen' },
    { href: '#skills', label: 'Tech Stack' },
    { href: '#project', label: 'Case & Projekt' },
    { href: '#contact', label: 'Låt oss ta kontakt' },
]


const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className="px-2 py-2 text-lg font-medium text-[var(--color-text-main)] rounded-sm hover:text-[var(--color-accent)] hover:scale-105 hover:border-b transition duration-300"
    >
        {label}
    </Link>
)
interface NavBarProps {
    menuOpen: boolean
    setMenuOpen: (open: boolean) => void
}
export default function NavBar({menuOpen, setMenuOpen}: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
    const newState = !isOpen
    setIsOpen(newState)
    setMenuOpen(newState)
    }
    
    return (
        <header className="sticky top-0 z-50 bg-[var(--color-beige)] shadow-md justify-between align-center">
            <div className=" mx-auto  flex items-center justify-between px-6 py-2">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-sm font-bold hover:scale-125 cursor-pointer transition duration-300">
                        N
                    </div>

                </div>

                <nav className="hidden md:flex gap-6 justify-end align-center items-center ">
                    {NAV_ITEMS.map((item) => (
                        <NavLink key={item.label} {...item} />
                    ))}
                </nav>

                <button
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                    className="md:hidden p-1 rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] cursor-pointer hover:scale-115"
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
                        initial={{ opacity: 0, y: -20}}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0,scale:1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex flex-col items-center gap-6 mt-3 bg-[var(--color-latte)] shadow-md px-6 py-12 md:hidden"
                    >
                        {NAV_ITEMS.map((item) => (
                            <motion.div
                                key={item.label}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <NavLink href={item.href} label={item.label} 
                                onClick={() => {
                                    setIsOpen(false)
                                    setMenuOpen(false)}}/>
                            </motion.div>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>


        </header>
    )
}
