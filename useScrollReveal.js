import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container ref.
 * All child elements with [data-reveal] get the class `revealed` when in view.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = container.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el    = entry.target
            const delay = el.dataset.delay || 0
            setTimeout(() => el.classList.add('revealed'), Number(delay))
          }
        })
      },
      { threshold: 0.12, ...options }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return containerRef
}
