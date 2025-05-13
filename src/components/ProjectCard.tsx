'use client'
import React from 'react'
import { Project } from '../data/projectsData'
import Link from 'next/link'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="min-w-[300px] bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
      <div className=" bg-[var(--color-beige)] justify-center flex items-center ">
        {project.image && Array.isArray(project.image) ? (
          <div className={`flex ${project.image.length > 1 ? 'flex-row' : 'flex-col'} gap-8 p-2 items-center justify-center`}>
            {project.image.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} bild ${i + 1}`}
                className={`rounded-xl  ${(project.image ?? []).length > 1 ? 'w-1/2 h-[220px]' : 'w-full h-[240px] object-cover'}`}
              />
            ))}
          </div>
        ) : (
          <img
            src={typeof project.image === 'string' ? project.image : ''}
            alt={project.title}
            className="w-full h-[240px] object-contain rounded-xl "
          />
        )}


      </div>
      <div className="p-4">
        <h2 className='text-[var(--color-text-main)]'>{project.category}</h2>
        <h3 className="text-xl text-[var(--color-accent)] font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {project.stack.map((tech) => (
            <span key={tech} className="bg-gray-100 px-2 py-1 rounded">{tech}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          {project.github && <a href={project.github} target="_blank" className="text-[var(--color-hover)] hover:underline">GitHub</a>}
          {/* {project.live && <a href={project.live} target="_blank" className="text-[var(--color-latte)] hover:underline">Live</a>} */}
        </div>
        {project.link && (
          <Link href={project.link}>
            <span className="text-[var(--color-accent)]  hover:underline">
              {project.category === 'App' ? 'Google Play' : 'Länk till websida'}</span>
          </Link>
        )}
        <p className="mt-2 text-xs text-gray-400">{project.role} · {project.date}</p>
      </div>
    </div>
  )
}

export default ProjectCard
