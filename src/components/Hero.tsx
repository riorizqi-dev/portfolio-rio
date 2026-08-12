import { motion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { siteData, heroTags } from '../data'

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <SectionWrapper className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent-glow px-4 py-1.5 mb-8 w-fit"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <span className="text-sm font-medium text-accent">{siteData.status}</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
      >
        {siteData.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="mt-4 text-xl sm:text-2xl text-neutral-400 font-medium"
      >
        {siteData.role}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        className="mt-3 flex items-center gap-1.5 text-sm text-neutral-500"
      >
        <MapPin size={14} />
        {siteData.location}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="mt-6 max-w-xl text-neutral-400 leading-relaxed"
      >
        {siteData.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        className="mt-8 flex flex-wrap gap-2"
      >
        {heroTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <button
          onClick={() => handleScroll('#projects')}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 hover:bg-neutral-200 transition-colors cursor-pointer"
        >
          Explore my work
          <ArrowDown size={14} />
        </button>
        <button
          onClick={() => handleScroll('#contact')}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          Contact me
        </button>
      </motion.div>
    </SectionWrapper>
  )
}