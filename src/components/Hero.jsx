import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { personal } from '../data'

// ─── PARTICLE FIELD ─────────────────────────────────────────────────────────

function ParticleField() {
  const ref       = useRef()
  const clockRef  = useRef(0)

  // Generate ~2400 particles in a sphere shell, some biased toward a torus
  const [positions, colors] = useMemo(() => {
    const count = 2400
    const pos   = new Float32Array(count * 3)
    const col   = new Float32Array(count * 3)

    const indigoR = 108 / 255, indigoG = 99 / 255, indigoB = 255 / 255
    const cyanR   =   0 / 255, cyanG   = 245 / 255, cyanB   = 255 / 255
    const white   = 240 / 255

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const t  = i / count

      if (i < count * 0.6) {
        // Torus-shaped cluster — orbit look
        const theta = Math.random() * Math.PI * 2
        const phi   = Math.random() * Math.PI * 2
        const R = 2.2 + (Math.random() - 0.5) * 0.8   // major radius
        const r = 0.5 + Math.random() * 0.6             // tube radius
        pos[i3]     = (R + r * Math.cos(phi)) * Math.cos(theta)
        pos[i3 + 1] = (R + r * Math.cos(phi)) * Math.sin(theta) * 0.5
        pos[i3 + 2] = r * Math.sin(phi)
      } else {
        // Background scatter
        const u = Math.random(), v = Math.random()
        const theta = 2 * Math.PI * u
        const phi2  = Math.acos(2 * v - 1)
        const rad   = 3 + Math.random() * 2.5
        pos[i3]     = rad * Math.sin(phi2) * Math.cos(theta)
        pos[i3 + 1] = rad * Math.sin(phi2) * Math.sin(theta) * 0.6
        pos[i3 + 2] = rad * Math.cos(phi2)
      }

      // Color: mix between indigo, cyan, and white
      const mix = Math.random()
      if (mix < 0.45) {
        col[i3] = indigoR; col[i3+1] = indigoG; col[i3+2] = indigoB
      } else if (mix < 0.75) {
        col[i3] = cyanR;   col[i3+1] = cyanG;   col[i3+2] = cyanB
      } else {
        col[i3] = white;   col[i3+1] = white;    col[i3+2] = white
      }
    }
    return [pos, col]
  }, [])

  useFrame((state, delta) => {
    clockRef.current += delta
    if (ref.current) {
      ref.current.rotation.y += delta * 0.06
      ref.current.rotation.x  = Math.sin(clockRef.current * 0.12) * 0.08
      // subtle breathing scale
      const s = 1 + Math.sin(clockRef.current * 0.4) * 0.015
      ref.current.scale.setScalar(s)
    }
  })

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.85}
      />
    </Points>
  )
}

// ─── TYPEWRITER ──────────────────────────────────────────────────────────────

function Typewriter({ roles }) {
  const [displayed, setDisplayed] = useState('')
  const [roleIdx,   setRoleIdx]   = useState(0)
  const [charIdx,   setCharIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)
  const [wait,      setWait]      = useState(0)

  useEffect(() => {
    const current = roles[roleIdx]

    if (wait > 0) {
      const t = setTimeout(() => setWait(w => w - 1), 50)
      return () => clearTimeout(t)
    }

    if (!deleting) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, 75)
        return () => clearTimeout(t)
      } else {
        // pause at end
        const t = setTimeout(() => setDeleting(true), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, 38)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setRoleIdx(r => (r + 1) % roles.length)
      }
    }
  }, [charIdx, deleting, roleIdx, wait, roles])

  return (
    <p className="font-mono text-indigo text-lg md:text-xl min-h-[28px]">
      {displayed}
      <span className="animate-blink text-cyan">|</span>
    </p>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* R3F Canvas — fills the whole section */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.2} />
          <ParticleField />
        </Canvas>
      </div>

      {/* Gradient overlay to fade edges */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, #0A0E1A 100%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(108,99,255,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 30% 30% at 80% 20%, rgba(0,245,255,0.04) 0%, transparent 60%)
          `
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="section-label mb-6"
            style={{ animation: 'fadeUp 0.7s 0.2s both' }}
          >
            Based in Accra, Ghana
          </div>

          {/* Name */}
          <h1
            className="font-display font-bold leading-[1.04] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(44px, 6vw, 80px)',
              letterSpacing: '-2px',
              animation: 'fadeUp 0.7s 0.4s both',
            }}
          >
            <span className="glitch text-gradient" data-text="Harrison">Harrison</span>
            <br />
            <span className="text-offwhite/90">Kweku</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #00F5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Agyako
            </span>
          </h1>

          {/* Typewriter */}
          <div style={{ animation: 'fadeUp 0.7s 0.6s both' }}>
            <Typewriter roles={personal.roles} />
          </div>

          {/* Bio */}
          <p
            className="text-muted text-base md:text-lg leading-relaxed max-w-xl mt-6 mb-10"
            style={{ animation: 'fadeUp 0.7s 0.8s both' }}
          >
            {personal.bio}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.7s 1.0s both' }}
          >
            <a
              href="#projects"
              data-hover
              className="
                inline-flex items-center gap-2 px-7 py-3.5
                bg-indigo text-white font-semibold text-sm rounded-lg
                shadow-indigo-glow hover:shadow-[0_0_60px_rgba(108,99,255,0.6)]
                hover:-translate-y-1 active:scale-95
                transition-all duration-300
              "
            >
              View Projects →
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              data-hover
              className="
                inline-flex items-center gap-2 px-7 py-3.5
                border border-indigo/40 text-offwhite font-semibold text-sm rounded-lg
                hover:border-cyan hover:text-cyan hover:shadow-cyan-glow
                hover:-translate-y-1 active:scale-95
                transition-all duration-300
              "
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeIn 1s 1.6s both' }}
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div
          className="w-px bg-gradient-to-b from-transparent to-indigo"
          style={{ height: 60, animation: 'scrollPulse 2s ease-in-out infinite' }}
        />
      </div>

      <style>{`
        @keyframes fadeUp  { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
        @keyframes scrollPulse {
          0%,100% { opacity:0.3; transform:scaleY(0.85); }
          50%     { opacity:1;   transform:scaleY(1); }
        }
      `}</style>
    </section>
  )
}
