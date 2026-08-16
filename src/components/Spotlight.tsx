import { useEffect } from 'react'

export default function Spotlight() {
  useEffect(() => {
    const root = document.documentElement
    let lit: HTMLElement | null = null
    const move = (event: PointerEvent) => {
      root.style.setProperty('--spot-x', `${event.clientX}px`)
      root.style.setProperty('--spot-y', `${event.clientY}px`)
      root.style.setProperty('--spot-opacity', '1')
      const target = (event.target as HTMLElement).closest<HTMLElement>('[data-spotlight]')
      if (target === lit) return
      lit?.classList.remove('is-lit')
      lit = target
      lit?.classList.add('is-lit')
    }
    const leave = () => {
      root.style.setProperty('--spot-opacity', '0')
      lit?.classList.remove('is-lit')
      lit = null
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerout', (event) => { if (!event.relatedTarget) leave() })
    return () => { window.removeEventListener('pointermove', move); lit?.classList.remove('is-lit') }
  }, [])

  return <div aria-hidden="true" className="cursor-spotlight" />
}
