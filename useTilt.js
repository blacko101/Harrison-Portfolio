import { useRef, useCallback } from 'react'

/**
 * Returns event handlers for a 3-D tilt card effect.
 * Attach cardRef to the element, and spread the handlers on it.
 */
export function useTilt(strength = 10) {
  const cardRef = useRef(null)

  const onMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect   = card.getBoundingClientRect()
    const xRel   = (e.clientX - rect.left) / rect.width  - 0.5
    const yRel   = (e.clientY - rect.top)  / rect.height - 0.5
    card.style.transform = [
      `perspective(700px)`,
      `rotateX(${-yRel * strength}deg)`,
      `rotateY(${xRel  * strength}deg)`,
      `translateY(-6px)`,
    ].join(' ')
    // spotlight
    card.style.background = `
      radial-gradient(
        circle at ${((e.clientX - rect.left) / rect.width) * 100}% ${((e.clientY - rect.top) / rect.height) * 100}%,
        rgba(108,99,255,0.07) 0%,
        #131827 55%
      )
    `
  }, [strength])

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform  = ''
    card.style.background = ''
  }, [])

  return { cardRef, onMouseMove, onMouseLeave }
}
