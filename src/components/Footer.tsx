import { siteData } from '../data'

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 font-mono text-[10px] uppercase tracking-wider text-[#555] sm:flex-row">
        {siteData.footer}
        <span>Built in Jakarta</span>
      </div>
    </footer>
  )
}
