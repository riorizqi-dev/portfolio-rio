import { siteData } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="max-w-6xl mx-auto text-center text-sm text-neutral-600">
        {siteData.footer}
      </div>
    </footer>
  )
}