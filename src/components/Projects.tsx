import SectionWrapper from './SectionWrapper'
import ProjectCard from './ProjectCard'
import { siteData, projects } from '../data'

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="px-6 py-24 max-w-6xl mx-auto w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {siteData.tagline.projects}
      </h2>
      <p className="mt-3 text-neutral-400 max-w-lg">{siteData.tagline.projectsSub}</p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}