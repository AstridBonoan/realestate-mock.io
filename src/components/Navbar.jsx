import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { company } from '../data/content'
import { Button } from './SectionHeading'

const links = [
  { to: '/', label: 'Home' },
  { to: '/membership', label: 'Membership' },
  { to: '/investments', label: 'Investments & Rentals' },
  { to: '/contact', label: 'Contact' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const closeMenu = () => setOpen(false)

  const goToHomeTop = (e) => {
    e.preventDefault()
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/')
    }
    // Run after any route update so we always land at the hero
    requestAnimationFrame(() => {
      scrollToTop()
    })
  }

  const solid = scrolled || open

  return (
    <>
      {/* Dismiss overlay — closes menu without trapping the page */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-navy-deep/45 transition-opacity duration-300 ease-out lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
          solid
            ? 'bg-navy-deep/95 shadow-lg shadow-navy/20 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8"
          aria-label="Primary"
        >
          <Link
            to="/"
            onClick={goToHomeTop}
            className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-brass/60 text-brass transition duration-300 group-hover:border-brass group-hover:bg-brass/10">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path
                  d="M4 18V10L12 4L20 10V18H15V13H9V18H4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <span className="font-display text-xl font-semibold tracking-wide text-white sm:text-2xl">
              {company.name}
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={link.to === '/' ? goToHomeTop : undefined}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass ${
                      isActive ? 'text-brass-light' : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button to="/membership/apply" variant="gold" className="!px-6 !py-2.5">
              Join Now
            </Button>
          </div>

          <button
            type="button"
            className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded text-white transition duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu
              className={`pointer-events-none absolute h-6 w-6 transition-all duration-300 ease-out ${
                open ? 'scale-90 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
              }`}
              aria-hidden="true"
            />
            <X
              className={`pointer-events-none absolute h-6 w-6 transition-all duration-300 ease-out ${
                open ? 'scale-100 rotate-0 opacity-100' : 'scale-90 -rotate-90 opacity-0'
              }`}
              aria-hidden="true"
            />
          </button>
        </nav>

        <div
          id="mobile-menu"
          className={`grid overflow-hidden bg-navy-deep transition-[grid-template-rows,opacity,border-color] duration-300 ease-out lg:hidden ${
            open
              ? 'grid-rows-[1fr] border-t border-white/10 opacity-100'
              : 'pointer-events-none grid-rows-[0fr] border-t border-transparent opacity-0'
          }`}
        >
          <div className="min-h-0">
            <ul className="flex flex-col gap-1 px-6 py-6">
              {links.map((link, index) => (
                <li
                  key={link.to}
                  className={`transition-all duration-300 ease-out ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                  style={{
                    transitionDelay: open ? `${40 + index * 35}ms` : '0ms',
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={link.to === '/' ? goToHomeTop : closeMenu}
                    className={({ isActive }) =>
                      `block py-3 text-base font-medium tracking-wide transition-colors duration-200 ${
                        isActive ? 'text-brass-light' : 'text-white/85 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li
                className={`pt-4 transition-all duration-300 ease-out ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}
                style={{
                  transitionDelay: open ? `${40 + links.length * 35}ms` : '0ms',
                }}
              >
                <Button
                  to="/membership/apply"
                  variant="gold"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Join Now
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
