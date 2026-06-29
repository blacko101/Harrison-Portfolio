import { useEffect, useState } from 'react'
import { personal } from '../data'

const links = [
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education'  },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          px-6 md:px-8 py-4
          transition-all duration-300
          ${scrolled || menuOpen
            ? 'bg-navy/90 backdrop-blur-xl border-b border-indigo/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'}
        `}
      >
        {/* Logo */}
        <a href="#hero" className="font-display font-bold text-xl tracking-tight z-10">
          <span className="text-gradient">KA</span>
          <span className="text-cyan">.</span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              data-hover
              className="
                relative text-muted text-sm font-medium tracking-wide
                hover:text-offwhite transition-colors duration-200
                after:absolute after:bottom-[-4px] after:left-0
                after:h-[1px] after:w-0 after:bg-cyan
                after:transition-[width] after:duration-300
                hover:after:w-full
              "
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={`mailto:${personal.email}`}
          data-hover
          className="
            hidden md:inline-flex items-center gap-2
            px-5 py-2 text-sm font-semibold
            border border-indigo/40 rounded-lg text-offwhite
            hover:border-cyan hover:text-cyan hover:shadow-cyan-glow
            transition-all duration-300
          "
        >
          Hire Me
        </a>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 z-10"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-6 h-[1.5px] bg-offwhite rounded-full transition-all duration-300 origin-center
              ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-offwhite rounded-full transition-all duration-300
              ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-offwhite rounded-full transition-all duration-300 origin-center
              ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
          />
        </button>
      </header>

      {/* Mobile drawer */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          flex flex-col justify-center items-center gap-8
          bg-navy/95 backdrop-blur-2xl
          transition-all duration-400
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Decorative blobs inside drawer */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />

        {links.map(({ label, href }, i) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="font-display font-semibold text-3xl text-offwhite/70 hover:text-offwhite"
            style={{
              // Use only the transition shorthand — never mix with transitionDelay
              transition: `opacity 0.35s ease ${i * 60}ms, transform 0.35s ease ${i * 60}ms, color 0.2s ease`,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {label}
          </a>
        ))}

        {/* Mobile email CTA */}
        <a
          href={`mailto:${personal.email}`}
          onClick={closeMenu}
          className="
            mt-4 px-8 py-3 text-sm font-semibold
            border border-indigo/40 rounded-xl text-offwhite
            hover:border-cyan hover:text-cyan
          "
          style={{
            transition: `opacity 0.35s ease ${links.length * 60}ms`,
            opacity: menuOpen ? 1 : 0,
          }}
        >
          Hire Me →
        </a>
      </div>
    </>
  )
}
