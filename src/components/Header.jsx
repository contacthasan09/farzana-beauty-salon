import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LOGO, NAV, CONTACT } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const onResize = () => { if (window.innerWidth > 900) setOpen(false) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-soft' : 'border-b border-border'
      }`}
    >
      <div className="container-max flex items-center justify-between py-4 gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={LOGO} alt="Farzana's Deluxe Beauty Salon" className="h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${CONTACT.phoneRaw}`} className="btn-outline" style={{ padding: '10px 22px', fontSize: 14 }}>
            Call Us
          </a>
          <Link to="/contact" className="btn-theme" style={{ padding: '12px 22px', fontSize: 13 }}>
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center border border-border"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col border-t border-border bg-white py-4 px-6 gap-4">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-theme text-center">
            Book Now
          </Link>
        </nav>
      )}
    </header>
  )
}