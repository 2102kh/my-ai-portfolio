'use client'

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function ContactSection() {
    return (
        <section id='contact' className="relative w-full py-16 px-8 bg-[var(--color-beige)] text-[var(--color-text-main)]">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-4">Låt oss ta kontakt!</h2>
                <p className="mb-6 text-[var(--color-text-light)]">
                    Har du frågor eller vill veta mer? Jag svarar gärna, kontakta mig här eller via sociala medier.
                </p>

                <a
                    href="mailto:kholmatova403@gmail.com"
                    className="inline-block bg-[var(--color-accent)] text-white py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                    Skicka ett meddelande
                </a>

                <div className="flex justify-center gap-6 mt-8">
                    <a href="https://www.linkedin.com/in/nigora-kholmatova-1ab768288" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://github.com/2102kh" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FaGithub size={28} />
                    </a>
                    <a href="mailto:kholmatova403@gmail.com" className="hover:scale-110 transition-transform">
                        <FaEnvelope size={28} />
                    </a>
                </div>
            </div>
        </section>
    )
}
