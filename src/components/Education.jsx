import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTilt } from '../hooks/useTilt'
import { education, certifications } from '../data'

gsap.registerPlugin(ScrollTrigger)

function EduCard({ item, index }) {
  const { cardRef, onMouseMove, onMouseLeave } = useTilt(5)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          delay: index * 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [index])

  return (
    <div ref={ref} className="opacity-0">
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        data-hover
        className="tilt-card card-surface p-6 hover:border-indigo/40 hover:shadow-card-hover cursor-none"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span className="text-3xl block mb-4">{item.icon}</span>
        <div className="font-mono text-[11px] text-cyan tracking-widest mb-1">{item.years}</div>
        <h3 className="font-display font-semibold text-offwhite text-base mb-1">{item.degree}</h3>
        <p className="text-muted text-sm">{item.school}</p>
      </div>
    </div>
  )
}

function CertBadge({ cert, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.88 },
        {
          opacity: 1, scale: 1,
          duration: 0.5,
          delay: index * 0.08,
          ease: 'back.out(1.6)',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={ref}
      className="
        opacity-0 flex items-start gap-3 p-4 rounded-xl
        border border-white/5 bg-white/[0.02]
        hover:border-indigo/30 hover:bg-indigo/5
        transition-all duration-300 cursor-none
      "
      data-hover
    >
      <span className="text-2xl shrink-0">{cert.icon}</span>
      <div>
        <p className="text-offwhite text-sm font-medium leading-snug">{cert.name}</p>
        <p className="text-muted text-xs mt-0.5">{cert.issuer}</p>
      </div>
    </div>
  )
}

export default function Education() {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.7,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      }
    )
  }, [])

  return (
    <section id="education" className="py-16 md:py-28 bg-navy">
      <div className="container mx-auto px-5 md:px-12">

        <div ref={titleRef} className="opacity-0 mb-10 md:mb-14">
          <div className="section-label mb-3">Academic Path</div>
          <h2
            className="font-display font-bold text-offwhite mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '-1px' }}
          >
            Education{' '}
            <span className="text-gradient">&amp; Certs</span>
          </h2>
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {education.map((item, i) => (
            <EduCard key={item.school} item={item} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <h3 className="font-display font-semibold text-offwhite text-xl mb-6 tracking-tight">
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <CertBadge key={cert.name} cert={cert} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
