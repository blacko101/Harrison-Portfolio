import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTilt } from '../hooks/useTilt'
import { experience } from '../data'

gsap.registerPlugin(ScrollTrigger)

function ExperienceCard({ exp, index }) {
  const { cardRef, onMouseMove, onMouseLeave } = useTilt(6)
  const wrapRef = useRef(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const isMobile = window.innerWidth < 768
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        // On mobile always fade up (no sideways shift = no overflow flash)
        { opacity: 0, y: isMobile ? 24 : 0, x: isMobile ? 0 : (index % 2 === 0 ? -32 : 32) },
        {
          opacity: 1, y: 0, x: 0,
          duration: 0.7,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [index])

  return (
    <div ref={wrapRef} className="opacity-0 flex gap-6 group">
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-indigo/30 animate-ping opacity-20" />
          <div className="w-8 h-8 rounded-full bg-navy3 border-2 border-indigo flex items-center justify-center text-base z-10">
            {exp.icon}
          </div>
        </div>
        {/* Connector line */}
        {index < experience.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: 'linear-gradient(to bottom, #6C63FF66, transparent)' }}
          />
        )}
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        data-hover
        className="tilt-card card-surface p-6 flex-1 mb-8 hover:border-indigo/40 hover:shadow-card-hover cursor-none"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
          <h3 className="font-display font-semibold text-offwhite text-base leading-tight">
            {exp.role}
          </h3>
          <span className="font-mono text-[11px] text-indigo bg-indigo/10 border border-indigo/20 px-2 py-0.5 rounded shrink-0">
            {exp.date}
          </span>
        </div>

        <p className="text-cyan text-sm font-medium mb-3">{exp.company}</p>
        <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.7,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      }
    )
  }, [])

  return (
    <section id="experience" className="py-16 md:py-28 bg-navy2">
      <div className="container mx-auto px-5 md:px-12">

        <div ref={titleRef} className="opacity-0 mb-10 md:mb-14">
          <div className="section-label mb-3">Background</div>
          <h2
            className="font-display font-bold text-offwhite mb-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '-1px' }}
          >
            <span className="glitch" data-text="Experience">Experience</span>
            {' & '}
            <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-muted text-base max-w-md leading-relaxed">
            Where I've worked and what I've learned.
          </p>
        </div>

        <div className="max-w-3xl">
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.role + i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
