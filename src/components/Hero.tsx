import { motion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { siteData, heroTags } from '../data'

export default function Hero() {
  const handleScroll = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return <SectionWrapper className="mx-auto grid min-h-[100dvh] max-w-6xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
    <div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-3 border border-white/15 bg-[#0b0b0b] px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-[#999]">
        <span className="h-2 w-2 rounded-full bg-[#00ff88] shadow-[0_0_16px_#00ff88]" /> {siteData.status}
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="max-w-3xl text-6xl font-medium leading-[.88] tracking-[-0.08em] text-white sm:text-8xl lg:text-[7.8rem]">
        <span className="block text-[#555]">$ hi, I&apos;m</span>
        <span className="block text-[#00ff88]">Rio<span className="text-white">.</span></span>
      </motion.h1>
      <p className="mt-8 flex items-center gap-2 font-mono text-sm text-[#888]"><MapPin size={14} className="text-[#00ff88]" />{siteData.location} <span className="text-[#555]">↔</span> Remote</p>
      <p data-spotlight className="mt-8 max-w-xl text-lg leading-8 text-[#d1d1d1]">I build practical software from interface to deployment: web systems, business tools, and experiments that turn an idea into something people can use.</p>
      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-y border-white/10 py-4">{heroTags.map((tag) => <span key={tag} className="font-mono text-[11px] text-[#888]">{tag}</span>)}</div>
      <div className="mt-10 flex flex-wrap gap-3">
        <button onClick={() => handleScroll('#projects')} className="inline-flex items-center gap-2 bg-[#00ff88] px-5 py-3 font-mono text-xs font-bold uppercase text-[#050505] transition-transform hover:-translate-y-0.5">View projects <ArrowDown size={14} /></button>
        <button onClick={() => handleScroll('#contact')} className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-mono text-xs uppercase text-white hover:border-[#00ff88] hover:text-[#00ff88]">Let&apos;s talk</button>
      </div>
    </div>
    <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25 }} className="min-h-[440px] border border-white/15 bg-[#0b0b0b]/90 p-5 shadow-[0_0_50px_rgba(0,255,136,.04)] sm:min-h-[540px]">
      <div className="flex items-center justify-between border-b border-dashed border-white/10 pb-4 font-mono text-xs text-[#777]"><span className="flex gap-2"><i className="h-3 w-3 rounded-full bg-[#333]" /><i className="h-3 w-3 rounded-full bg-[#333]" /><i className="h-3 w-3 rounded-full bg-[#00ff88]" /></span><span>~/rio/portfolio.tsx</span><span className="text-[#00ff88]">● ready</span></div>
      <div className="flex h-[calc(100%-60px)] flex-col justify-between py-8 font-mono text-sm"><div><p className="text-[#555]">// system</p><p className="mt-6 text-lg font-bold text-[#eee]">connected to rio.dev</p><p className="mt-3 leading-7 text-[#888]">Building useful things with React, Laravel, .NET, and a healthy curiosity for whatever comes next.</p><div className="mt-8 space-y-3 text-[#aaa]"><p><span className="text-[#00ff88]">const</span> focus = <span className="text-[#f7c873]">&quot;full-stack&quot;</span></p><p><span className="text-[#00ff88]">const</span> status = <span className="text-[#f7c873]">&quot;open to work&quot;</span></p><p><span className="text-[#00ff88]">return</span> build(focus, status)</p></div></div><div className="border-t border-dashed border-white/10 pt-5"><div className="flex flex-wrap gap-2"><span className="border border-white/10 px-3 py-2 text-[#888]">what is your stack?</span><span className="border border-white/10 px-3 py-2 text-[#888]">see selected work →</span></div><p className="mt-5 text-[#00a85a]">$ awaiting your next idea_</p></div></div>
    </motion.div>
  </SectionWrapper>
}
