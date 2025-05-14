'use client'
import React, { useState } from 'react'
import { Project } from '../data/projectsData'
import Link from 'next/link'



const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-w-[300px] bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl flex flex-col">
      <div className="bg-[var(--color-beige)] justify-center flex items-center h-[240px] gl:h-[280px] ">
        {project.image && Array.isArray(project.image) ? (
          <div className={`flex ${project.image.length > 1 ? 'flex-row' : 'flex-col'} gap-8 p-2 items-center justify-center`}>
            {project.image.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} bild ${i + 1}`}
                className={`rounded-xl ${(project.image?.length ?? 0) > 1 ? 'w-1/2 h-[240px]' : 'w-full h-[240px] object-cover'}`}
              />
            ))}
          </div>
        ) : (
          <img
            src={typeof project.image === 'string' ? project.image : ''}
            alt={project.title}
            className="w-full h-[240px] object-contain rounded-xl"
          />
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className='flex-grow'>
        <h2 className="text-[var(--color-text-main)]">{project.category}</h2>
        <h3 className="text-xl text-[var(--color-accent)] font-semibold">{project.title}</h3>
        <p className={`text-sm text-gray-600 mt-1 ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {project.description}
        </p>
        {project.description.length > 100 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[var(--color-accent)] hover:underline text-sm mt-1"
          >
            {isExpanded ? 'Läs mindre' : 'Läs mer..'}
          </button>
        )}
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {project.stack.map((tech) => (
            <span key={tech} className="bg-gray-100 text-gray-900 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
         </div>
        <div className="mt-4 flex gap-4">
          {project.privateRepo ? (
  <p className="text-xs text-[var(--color-hover)] mt-2">
    🔒 Privat repo, delas gärna vid intervju
  </p>
) : (
  project.github?.startsWith('http') && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-hover)] hover:underline text-sm"
    >
      GitHub
    </a>
  )
)}
    </div>
        {project.link && (
          <Link href={project.link}>
            <span className="text-[var(--color-accent)] hover:underline">
              {project.category === 'App' ? 'Google Play' : 'Länk till webbsida'}
            </span>
          </Link>
        )}
       
        <p className="mt-4 text-xs text-gray-400 self-start">
          {project.role} · {project.date}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
