import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data'

gsap.registerPlugin(ScrollTrigger)

const CATEGORY_COLORS = {
  'Core':           '#6C63FF',
  'Mobile/Web':     '#8B83FF',
  'Frontend':       '#00F5FF',
  'Database':       '#4ECDC4',
  'Security':       '#FF6B6B',
  'Infrastructure': '#FFB347',
}

function SkillBar({ skill, index }) {
  const barRef   = useRef(null)
  const fillRef  = useRef(null)
  const countRef = useRef(null)

  useEffect(() => {
    const bar   = barRef.current
    const fill  = fillRef.current
    const count = countRef.current
    if (!bar || !fill || !count) return

    const ctx = gsap.context(() => {
      // Reveal the card
      gsap.fromTo(
        bar,
        { opacity: 0, x: -24 },
        {
          opacity: 1, x: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Fill the bar + count up
      const proxy = { val: 0 }
      gsap.to(proxy, {
        val: skill.level,
        duration: 1.4,
        ease: 'power3.out',
        delay: index * 0.1 + 0.3,
        onUpdate() {
          if (fill)  fill.style.width = proxy.val + '%'
          if (count) count.textContent = Math.round(proxy.val) + '%'
        },
        scrollTrigger: {
          trigger: bar,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      })
    }, bar)

    return () => ctx.revert()
  }, [skill.level, index])

  const accent = CATEGORY_COLORS[skill.category] || '#6C63FF'

  return (
    <div
      ref={barRef}
      className="card-surface p-5 opacity-0 group hover:-translate-y-1 transition-transform duration-300"
      style={{ borderLeftColor: accent, borderLeftWidth: 3 }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-display font-semibold text-offwhite text-sm">{skill.name}</span>
        <span ref={countRef} className="font-mono text-xs" style={{ color: accent }}>
          0%
        </span>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span
          className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-sm"
          style={{ color: accent, background: accent + '18', border: `1px solid ${accent}30` }}
        >
          {skill.category}
        </span>
      </div>

      <div className="h-[5px] bg-white/5 rounded-full overflow-hidden">
        <div
          ref={fillRef}
          className="h-full rounded-full"
          style={{
            width: '0%',
            background: `linear-gradient(90deg, ${accent}, #00F5FF)`,
            boxShadow: `0 0 10px ${accent}88`,
            transition: 'none',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
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
    <section id="skills" className="py-16 md:py-28 bg-navy2">
      <div className="container mx-auto px-5 md:px-12">

        <div ref={titleRef} className="opacity-0 mb-10 md:mb-14">
          <div className="section-label mb-3">Technical Arsenal</div>
          <h2
            className="font-display font-bold text-offwhite mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '-1px' }}
          >
            <span className="glitch" data-text="Skills">Skills</span>{' '}
            <span className="text-gradient">& Tools</span>
          </h2>
          <p className="text-muted text-base max-w-md leading-relaxed">
            Technologies I build with, break into, and explore daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
