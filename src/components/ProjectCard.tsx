import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { Project } from '../data'
export default function ProjectCard({ project, index }: { project: Project; index: number }) { const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'); return <motion.a data-spotlight href={`/project/${slug}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className={`spotlight-card group block min-h-72 border border-white/15 bg-[#0b0b0b]/90 p-6 transition-all hover:-translate-y-1 hover:border-[#00ff88] ${index === 1 ? 'hover:bg-[#062c1c]' : ''}`}>
  <div className="flex items-start justify-between"><span className="font-mono text-sm text-[#00ff88]">[{String(index + 1).padStart(2, '0')}]</span><Github size={16} className="text-[#555] group-hover:text-[#00ff88]" /></div>
  <h3 className="mt-8 text-2xl font-medium leading-tight tracking-[-0.04em] text-white">{project.title}</h3>
  <p className="mt-4 max-w-md text-sm leading-7 text-[#888]">{project.description}</p>
  <div className="mt-8 flex items-center justify-between border-t border-dashed border-white/10 pt-4"><div className="flex flex-wrap gap-3">{project.tags.map((tag) => <span key={tag} className="font-mono text-[10px] uppercase tracking-wider text-[#00a85a]">{tag}</span>)}</div><a data-cursor href={project.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="font-mono text-[10px] text-[#555] hover:text-[#00ff88]">github ↗</a></div>
</motion.a> }
