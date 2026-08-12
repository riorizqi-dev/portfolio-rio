import SectionWrapper from './SectionWrapper'
import { siteData, techStack } from '../data'

export default function TechStack() {
  return (
    <SectionWrapper id="stack" className="px-6 py-24 max-w-6xl mx-auto w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {siteData.tagline.tech}
      </h2>

      <div className="mt-12 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {techStack.map((tech) => {
          const Icon = tech.icon
          return (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-white/10 hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                <Icon />
              </div>
              <span className="text-[11px] text-neutral-500 text-center leading-tight">{tech.name}</span>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}