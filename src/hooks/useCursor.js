import { useEffect, useRef } from 'react'

export function useCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const rng  = ringRef.current
    if (!dot || !rng) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX - 4 + 'px'
      dot.style.top  = e.clientY - 4 + 'px'
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const loop = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12)
      rng.style.left = ring.current.x - 18 + 'px'
      rng.style.top  = ring.current.y - 18 + 'px'
      raf.current = requestAnimationFrame(loop)
    }

    const onEnter = () => rng.classList.add('hovered')
    const onLeave = () => rng.classList.remove('hovered')

    document.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(loop)

    const targets = document.querySelectorAll('a, button, [data-hover]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return { dotRef, ringRef }
}
