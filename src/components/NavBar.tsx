'use client'
import Link from 'next/link'
import { useState } from 'react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'

const NAV_ITEMS = [
    { href: '/',       label: 'Start' },
    { href: '#skills', label: 'Mina Färdigheter' },
    { href: '#project',label: 'Min project' },
    { href: '#contact',label: 'Kontakta mig' },
]
type NavItem = {
    href: string;
    label: string;
    onClick?: () => void;
}

const NavLink = ({ href, label,onClick }: NavItem) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className=' px-4 py-2 
  text-[var(--color-text-main)] 
  text-lg
  hover:text-[var(--color-accent)] 
  hover:border-[var(--color-accent)] 
  rounded-md 
  transition-all 
  duration-300 
  transform 
  hover:scale-125'>
            {label}
        </Link>
    )
}

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
       <><div className=" md:hidden flex justify-center items-center bg-[var(--color-latte)] hover:bg-[var(--color-hover)] hover:text-[var(--color-beige)] rounded-md z-50">
           <button onClick={toggleMenu} className="p-2 rounded-md md:hidden  transition duration-300">
                {isOpen ? (
                    <XMarkIcon className="w-6 h-6 text-[var(--color-accent)] transition duration-300" />
                ) : (
                    <Bars3Icon className="w-6 h-6 text-[var(--color-text-main)] transition duration-300" />
                    
                )}
            </button>
             </div>         
            <nav className="hidden md:flex flex-row justify-center ">
                <div className="flex flex-wrap justify-center ">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.label}
                            href={item.href}
                            label={item.label} 
                            />
                    ))}
                </div>
            </nav>
              {isOpen && (
            <div className='flex flex-col w-[60vw] h-[60vh] bg-[var(--color-beige)] items-center gap-3 text-lg  top-0 right-0 justify-center shadow-lg rounded-lg absolute'>
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            onClick={()=> setIsOpen(false)} />
                    ))}
                </div>
            )}</>

    )
}