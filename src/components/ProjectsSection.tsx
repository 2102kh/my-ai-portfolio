'use client'
import React from 'react'
import { projectsData } from '../data/projectsData'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section id ='project' className="py-16 px-6 bg-[var(--color-accent)] text-[var(--color-beige)] letter-spacing-[0.1em]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center text:[var(--text-color)]">MINA PROJECT</h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 min-w-[600px] sm:min-w-0">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
