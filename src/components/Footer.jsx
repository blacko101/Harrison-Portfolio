import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-indigo/10 text-center">
      <p className="font-mono text-[11px] text-white/20 tracking-[0.08em]">
        Designed & Built by{' '}
        <span className="text-indigo/60">{personal.shortName}</span>
        {' '}·{' '}
        {new Date().getFullYear()}
        {' '}·{' '}
        Accra, Ghana
      </p>
    </footer>
  )
}
