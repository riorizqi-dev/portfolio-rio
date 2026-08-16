import { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { siteData, socialLinks } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Project idea from ${form.get('name')}`)
    const body = encodeURIComponent(`From: ${form.get('name')} (${form.get('email')})\n\n${form.get('message')}`)
    window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <SectionWrapper id="contact" className="mx-auto grid w-full max-w-6xl gap-12 border-t border-white/10 px-6 py-24 lg:grid-cols-[.85fr_1.15fr]">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#00ff88]">06 / elsewhere</p>
        <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] text-white sm:text-7xl">{siteData.tagline.contact}</h2>
        <p className="mt-5 max-w-lg leading-7 text-[#888]">{siteData.tagline.contactSub}</p>
        <div className="mt-10 space-y-4 font-mono text-sm"><p><span className="text-[#555]">location</span> <span className="text-white">Jakarta Barat, ID</span></p><p><span className="text-[#555]">email</span> <span className="text-white">{siteData.email}</span></p><p><span className="text-[#555]">status</span> <span className="text-[#00ff88]">accepting work</span></p></div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">{socialLinks.slice(0, 4).map((link) => { const Icon = link.icon; return <a key={link.label} href={link.href} target={link.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 bg-[#0b0b0b]/80 px-4 py-3 font-mono text-xs uppercase text-[#aaa] hover:border-[#00ff88] hover:text-[#00ff88]"><Icon size={15} />{link.label}</a> })}</div>
      </div>
      <form onSubmit={handleSubmit} className="border border-white/15 bg-[#0b0b0b]/90 p-6 sm:p-8"><label className="block font-mono text-[11px] uppercase tracking-wider text-[#888]">name <span className="text-[#00ff88]">*</span><input required name="name" className="mt-3 block w-full border border-white/15 bg-[#050505] px-4 py-4 font-sans text-white outline-none focus:border-[#00ff88]" /></label><label className="mt-6 block font-mono text-[11px] uppercase tracking-wider text-[#888]">email <span className="text-[#00ff88]">*</span><input required type="email" name="email" className="mt-3 block w-full border border-white/15 bg-[#050505] px-4 py-4 font-sans text-white outline-none focus:border-[#00ff88]" /></label><label className="mt-6 block font-mono text-[11px] uppercase tracking-wider text-[#888]">message <span className="text-[#00ff88]">*</span><textarea required name="message" rows={5} placeholder="What are you building?" className="mt-3 block w-full resize-y border border-white/15 bg-[#050505] px-4 py-4 font-sans text-white outline-none placeholder:text-[#555] focus:border-[#00ff88]" /></label><div className="mt-6 flex items-center justify-between gap-4"><span className="font-mono text-[10px] text-[#555]">{sent ? 'opening your mail client...' : 'protected · rate-limited'}</span><button type="submit" className="bg-[#00ff88] px-5 py-3 font-mono text-xs font-bold uppercase text-[#050505] hover:-translate-y-0.5">→ send message</button></div></form>
    </SectionWrapper>
  )
}
