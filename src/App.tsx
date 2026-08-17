import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorField from './components/CursorField'
import CustomCursor from './components/CustomCursor'
import Spotlight from './components/Spotlight'
import { AboutPage, ProjectDetailPage, ProjectsPage } from './components/Pages'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const page = path === '/projects' ? <ProjectsPage /> : path === '/about' ? <AboutPage /> : path.startsWith('/project/') ? <ProjectDetailPage slug={path.replace('/project/', '')} /> : null
  return <>
    <CursorField />
    <CustomCursor />
    <Spotlight />
    <Navbar />
    {page ?? <main id="top" className="relative z-[1]">
      <Hero />
      <Projects />
      <TechStack />
      <section id="about" className="mx-auto grid max-w-6xl gap-12 border-t border-white/10 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#00ff88]">04 / whoami</p><h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] text-white sm:text-7xl">About me</h2></div>
        <div className="space-y-6 text-lg leading-8 text-[#aaa]"><p><span className="text-5xl font-bold text-[#00ff88]">I</span>&apos;m a software engineering student at SMKN 17 Jakarta Barat. I started with web interfaces and kept going deeper until the database, the API, and the deployment became part of the same craft.</p><p>My projects move between commerce, warehouse operations, cafe management, dashboards, and Android utilities. The common thread is simple: learn the system, make the experience clear, and ship it.</p><div className="grid gap-3 border-t border-white/10 pt-6 font-mono text-sm sm:grid-cols-2"><p><span className="text-[#555]">→ based in</span><br /><span className="text-white">Jakarta Barat, ID</span></p><p><span className="text-[#555]">→ status</span><br /><span className="text-[#00ff88]">open to roles & freelance</span></p><p><span className="text-[#555]">→ focus</span><br /><span className="text-white">web + Android</span></p><p><span className="text-[#555]">→ learning</span><br /><span className="text-white">AI, automation, systems</span></p></div></div>
      </section>
      <section className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24"><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#00ff88]">05 / the short timeline</p><h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] text-white sm:text-7xl">How I got here</h2><div className="mt-16 border-l border-white/15 pl-6 sm:pl-12"><div className="relative border-b border-white/10 pb-10 pt-2"><span className="absolute -left-[30px] top-3 h-3 w-3 rounded-full bg-[#00ff88] shadow-[0_0_14px_#00ff88] sm:-left-[54px]" /><p className="font-mono text-xs text-[#555]">2026</p><h3 className="mt-3 text-xl font-bold text-white">Building with intent</h3><p className="mt-3 max-w-3xl leading-7 text-[#888]">Designing and shipping portfolio work while expanding from frontend into full-stack systems and automation.</p></div><div className="relative border-b border-white/10 py-10"><span className="absolute -left-[30px] top-11 h-3 w-3 rounded-full bg-[#00a85a] sm:-left-[54px]" /><p className="font-mono text-xs text-[#555]">2024 — now</p><h3 className="mt-3 text-xl font-bold text-white">Across practical systems</h3><p className="mt-3 max-w-3xl leading-7 text-[#888]">Built store, warehouse, cafe, dashboard, and mobile projects while studying software engineering.</p></div></div></section>
      <Contact />
    </main>}
    <Footer />
  </>
}
