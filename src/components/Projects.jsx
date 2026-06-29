import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTilt } from '../hooks/useTilt'
import { projects } from '../data'

gsap.registerPlugin(ScrollTrigger)

// ─── SINGLE PROJECT CARD ────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const { cardRef, onMouseMove, onMouseLeave } = useTilt(8)
  const wrapRef = useRef(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7,
          delay: index * 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [index])

  return (
    <div ref={wrapRef} className="opacity-0">
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        data-hover
        className="
          relative tilt-card card-surface p-7 h-full
          hover:border-indigo/40 hover:shadow-card-hover
          cursor-none
        "
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-0 right-0 px-3 py-1 text-[9px] font-bold tracking-widest uppercase text-navy rounded-tr-2xl rounded-bl-xl"
            style={{ background: 'linear-gradient(135deg,#6C63FF,#00F5FF)' }}
          >
            Featured
          </div>
        )}

        {/* Icon */}
        <span
          className="text-4xl mb-5 block transition-transform duration-300 group-hover:scale-110"
          style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.15))' }}
        >
          {project.icon}
        </span>

        {/* Title */}
        <h3 className="font-display font-semibold text-xl text-offwhite mb-3 tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2 py-1 rounded
                         bg-indigo/10 text-indigo border border-indigo/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.github || project.demo) && (
          <div className="flex gap-4 mt-5 pt-5 border-t border-white/5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-hover
                className="text-xs text-muted hover:text-cyan transition-colors duration-200 flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                data-hover
                className="text-xs text-muted hover:text-cyan transition-colors duration-200"
              >
                ↗ Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── PROJECTS SECTION ───────────────────────────────────────────────────────

export default function Projects() {
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
    <section id="projects" className="py-16 md:py-28 bg-navy">
      <div className="container mx-auto px-5 md:px-12">

        <div ref={titleRef} className="opacity-0 mb-10 md:mb-14">
          <div className="section-label mb-3">Selected Work</div>
          <h2
            className="font-display font-bold text-offwhite mb-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '-1px' }}
          >
            <span className="glitch" data-text="What I've Built">What I've </span>
            <span className="text-gradient">Built</span>
          </h2>
          <p className="text-muted text-base max-w-md leading-relaxed">
            Apps and systems I've built for real-world impact — from GRA field operations to campus security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
