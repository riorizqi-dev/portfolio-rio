import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches) return
    let x = -100
    let y = -100
    let ringX = x
    let ringY = y
    let frame = 0
    let active = false

    const move = (event: PointerEvent) => { x = event.clientX; y = event.clientY }
    const over = (event: Event) => {
      const target = event.target as HTMLElement
      active = Boolean(target.closest('a, button, input, textarea, [data-cursor]'))
      ringRef.current?.classList.toggle('is-active', active)
    }
    const leave = () => { dotRef.current?.classList.add('is-hidden'); ringRef.current?.classList.add('is-hidden') }
    const enter = () => { dotRef.current?.classList.remove('is-hidden'); ringRef.current?.classList.remove('is-hidden') }
    const render = () => {
      ringX += (x - ringX) * 0.13
      ringY += (y - ringY) * 0.13
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      frame = requestAnimationFrame(render)
    }
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    frame = requestAnimationFrame(render)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('pointermove', move); document.removeEventListener('mouseover', over); document.removeEventListener('mouseleave', leave); document.removeEventListener('mouseenter', enter) }
  }, [])

  return <><div ref={dotRef} className="custom-cursor-dot" /><div ref={ringRef} className="custom-cursor-ring" /></>
}
