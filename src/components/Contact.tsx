import SectionWrapper from './SectionWrapper'
import { siteData, socialLinks } from '../data'

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="px-6 py-24 max-w-6xl mx-auto w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {siteData.tagline.contact}
      </h2>
      <p className="mt-3 text-neutral-400 max-w-lg">{siteData.tagline.contactSub}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-neutral-300 hover:bg-white/[0.06] hover:border-white/20 hover:text-white transition-all"
            >
              <Icon size={16} />
              {link.label}
            </a>
          )
        })}
      </div>

      <p className="mt-8 text-sm text-neutral-600">
        Open to freelance, internships & open source collaboration
      </p>
    </SectionWrapper>
  )
}