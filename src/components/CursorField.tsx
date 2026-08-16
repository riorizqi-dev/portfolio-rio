import { useEffect, useRef } from 'react'

const SPACING = 34
const INFLUENCE = 230

export default function CursorField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationFrame = 0
    let width = 0
    let height = 0
    let devicePixelRatio = 1
    let pointer = { x: -1000, y: -1000 }

    const resize = () => {
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      if (pointer.x > -500 && !reduceMotion) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, INFLUENCE)
        glow.addColorStop(0, 'rgba(0, 255, 136, 0.08)')
        glow.addColorStop(1, 'rgba(0, 255, 136, 0)')
        context.fillStyle = glow
        context.fillRect(pointer.x - INFLUENCE, pointer.y - INFLUENCE, INFLUENCE * 2, INFLUENCE * 2)
      }

      for (let y = SPACING / 2; y < height + SPACING; y += SPACING) {
        for (let x = SPACING / 2; x < width + SPACING; x += SPACING) {
          const distanceX = pointer.x - x
          const distanceY = pointer.y - y
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
          const proximity = reduceMotion ? 0 : Math.max(0, 1 - distance / INFLUENCE)
          const eased = proximity * proximity * (3 - 2 * proximity)
          const offset = eased * 22
          const angle = Math.atan2(distanceY, distanceX)
          const dotX = x + Math.cos(angle) * offset
          const dotY = y + Math.sin(angle) * offset
          const radius = 1.45 + eased * 2.1
          const alpha = 0.18 + eased * 0.72

          context.beginPath()
          context.arc(dotX, dotY, radius, 0, Math.PI * 2)
          context.fillStyle = `rgba(0, 255, 136, ${alpha})`
          context.fill()
        }
      }

      if (!reduceMotion) animationFrame = window.requestAnimationFrame(draw)
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY }
      if (reduceMotion) draw()
    }

    const handlePointerLeave = () => {
      pointer = { x: -1000, y: -1000 }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-80" />
}
