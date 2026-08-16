import SectionWrapper from './SectionWrapper'
import { siteData, techStack } from '../data'
export default function TechStack() { return <SectionWrapper id="stack" className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-24">
  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#00ff88]">03 / the toolkit</p><h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] text-white sm:text-7xl">{siteData.tagline.tech}</h2>
  <div className="mt-14 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4 md:grid-cols-8">{techStack.map((tech) => <div data-spotlight key={tech.name} className="flex flex-col items-center gap-3 bg-[#0a0a0a] p-4 transition-colors hover:bg-[#111]"><div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-[#111]"><img src={tech.icon} alt={`${tech.name} logo`} loading="lazy" className="h-6 w-6" /></div><span className="text-center font-mono text-[10px] leading-tight text-[#888]">{tech.name}</span></div>)}</div>
</SectionWrapper> }
