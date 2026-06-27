import { useEffect } from 'react'
import { useCursor } from './hooks/useCursor'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Education  from './components/Education'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  const { dotRef, ringRef } = useCursor()

  // Re-register hover targets after mount (cursor hook captures on first paint)
  useEffect(() => {
    const onEnter = () => ringRef.current?.classList.add('hovered')
    const onLeave = () => ringRef.current?.classList.remove('hovered')
    const targets = document.querySelectorAll('a, button, [data-hover]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => targets.forEach(el => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    })
  }, [ringRef])

  return (
    <>
      {/* Custom cursor */}
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden />

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
