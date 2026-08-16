import SectionWrapper from './SectionWrapper'
import ProjectCard from './ProjectCard'
import { siteData, projects } from '../data'

export default function Projects() { return <SectionWrapper id="projects" className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-24">
  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#00ff88]">02 / selected projects</p>
  <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] text-white sm:text-7xl">{siteData.tagline.projects}</h2>
  <p className="mt-5 max-w-lg leading-7 text-[#888]">{siteData.tagline.projectsSub}</p>
  <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}</div>
</SectionWrapper> }
