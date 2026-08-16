import { useState } from 'react'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'home', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = (href: string) => {
    setOpen(false)
    if (href.startsWith('/#')) { window.location.href = href; return }
    window.location.href = href
  }

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="font-mono text-sm font-bold tracking-tight text-white hover:text-[#00ff88] transition-colors">
          RIO<span className="text-[#00ff88]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="font-mono text-xs uppercase text-[#888] hover:text-[#00ff88] transition-colors cursor-pointer"
            >
              <span className="text-[#555]">~/</span>{l.label.toLowerCase()}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => {
                    handleClick(l.href)
                    setOpen(false)
                  }}
                  className="text-sm text-neutral-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  <span className="text-[#555]">~/</span>{l.label.toLowerCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
