import { useEffect, useState } from 'react'
import { personal } from '../data'

const links = [
  { label: 'Skills',      href: '#skills'      },
  { label: 'Projects',    href: '#projects'    },
  { label: 'Experience',  href: '#experience'  },
  { label: 'Education',   href: '#education'   },
  { label: 'Contact',     href: '#contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-8 py-4
        transition-all duration-300
        ${scrolled
          ? 'bg-navy/75 backdrop-blur-xl border-b border-indigo/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'}
      `}
    >
      {/* Logo */}
      <span className="font-display font-bold text-xl tracking-tight">
        <span className="text-gradient">KA</span>
        <span className="text-cyan">.</span>
      </span>

      {/* Nav links — hidden on mobile */}
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

      {/* CTA */}
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
    </header>
  )
}
