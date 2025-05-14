'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaNodeJs, FaGitAlt, FaUserAstronaut } from 'react-icons/fa'
import { SiRedux, SiTailwindcss, SiMongodb, SiFigma, SiNextdotjs, SiJavascript, SiExpress, SiFirebase, SiTypescript, SiOpenai, SiBlender } from 'react-icons/si'
import { FiBell, FiVolume2 } from 'react-icons/fi'
import { TbCube } from 'react-icons/tb'



const skills = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', icon: <FaReact />, desc: 'Bygger komponenter med hooks och context' },
            { name: 'Next.js', icon: <SiNextdotjs />, desc: 'SEO och SSR för React-projekt' },
            { name: 'Vue.js', icon: <FaVuejs />, desc: 'Responsiva Vue-appar' },
            { name: 'Redux', icon: <SiRedux />, desc: 'State management i större appar' },
            { name: 'HTML', icon: <FaHtml5 />, desc: 'Semantisk HTML5' },
            { name: 'CSS / SCSS', icon: <FaCss3Alt />, desc: 'Responsiv styling & animeringar' },
            { name: 'Tailwind', icon: <SiTailwindcss />, desc: 'Utility-first design' },
            { name: 'JavaScript', icon: <SiJavascript />, desc: 'ES6+, asynkron kod & DOM-manipulering' },
            { name: 'TypeScript', icon: <SiTypescript />, desc: 'Statisk typning för JavaScript' },
        ]
    },
    {
        category: 'Backend & Databas',
        items: [
            { name: 'Node.js', icon: <FaNodeJs />, desc: 'REST API med Express' },
            { name: 'Express.js', icon: <SiExpress />, desc: 'Routing & middleware' },
            { name: 'MongoDB', icon: <SiMongodb />, desc: 'Dokumentdatabas med Mongoose' },
            { name: 'Firebase', icon: <SiFirebase />, desc: 'Auth, DB & hosting' },
            { name: 'OneSignal', icon: <FiBell />, desc: 'Pushnotiser i React Native med SDK & Android-konfiguration' }
        ]
    },
    {
        category: 'Design & Verktyg',
        items: [
            { name: 'Figma', icon: <SiFigma />, desc: 'Design & prototyping enligt WCAG' },
            { name: 'GitHub Actions', icon: <FaGitAlt />, desc: 'CI/CD workflows' },
        ]
    },
    {
        category: 'AI & Interaktiv 3D',
        items: [
            { name: 'Three.js', icon: <TbCube />, desc: 'Renderat 3D-avatar med React Three Fiber' },
            { name: 'Ready Player Me', icon: <FaUserAstronaut />, desc: 'Använt avatarplattform och animerat morpher för mun och ögon' },
            { name: 'React Three Fiber', icon: <TbCube />, desc: 'Renderat och animerat 3D-avatar i webbläsaren med Three.js via React' },
            { name: 'OpenAI GPT', icon: <SiOpenai />, desc: 'Byggt en AI-chatt med GPT-4.1 mini för interaktion med avatar' },
            { name: 'Google TTS (Poly)', icon: <FiVolume2 />, desc: 'Integrerat Google Cloud Text-to-Speech med AI-svar och valbara röster' },
            { name: 'Blender', icon: <SiBlender />, desc: 'Konverterat och justerat 3D-animationer (FBX → glTF) för webbintegration' },
        ]
    }
]

export default function SkillsSection() {
    const [hovered, setHovered] = useState<string | null>(null)

    return (
        <section id='skills' className="py-16 px-4 bg-[var(--color-latte)] text-[var(--foreground)]">
            <h2 className="text-3xl font-bold mb-10 text-center text-[var(--color-accent)]">Mina Färdigheter</h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {skills.map((group, i) => (
                    <div key={i}>
                        <h3 className="text-xl font-semibold mb-4 text-[var(--color-accent)] ">{group.category}</h3>
                        <div className="grid grid-cols-2 gap-4 ">
                            {group.items.map((skill, j) => (
                                <motion.div
                                    key={j}
                                    whileHover={{ scale: 1.05 }}
                                    onMouseEnter={() => setHovered(`${i}-${j}`)}
                                    onMouseLeave={() => setHovered(null)}
                                    className="flex flex-col items-center text-center p-3 rounded-xl bg-white shadow-md transition"
                                >
                                    <div className="text-4xl mb-2 text-[var(--primary)]">{skill.icon}</div>
                                    <p className="font-medium">{skill.name}</p>
                                    {hovered === `${i}-${j}` && (
                                        <p className="text-sm mt-1 text-[var(--color-hover)]">{skill.desc}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
