import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Share2, Globe, Mail, Phone } from 'lucide-react'
import { company } from '../data/content'

const footerLinks = [
  { to: '/membership', label: 'Membership' },
  { to: '/investments', label: 'Investments & Rentals' },
  { to: '/contact', label: 'Contact' },
  { to: '/membership/apply', label: 'Join Now' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const goToHomeTop = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })
  }

  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-5">
          <Link to="/" onClick={goToHomeTop} className="inline-flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-brass/60 text-brass">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path
                  d="M4 18V10L12 4L20 10V18H15V13H9V18H4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <span className="font-display text-2xl font-semibold tracking-wide">
              {company.name}
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            {company.description}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Share2, label: 'LinkedIn' },
              { icon: Globe, label: 'Instagram' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition hover:border-brass hover:text-brass"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              <a href={`tel:${company.phone.replace(/\D/g, '')}`} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li className="whitespace-pre-line pl-7">{company.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-white/45">
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="max-w-2xl text-xs leading-relaxed text-white/40">
            This website is a professional presentation mockup. Property listings and
            opportunities shown are illustrative examples and do not constitute offers,
            solicitations, or guarantees of investment performance.
          </p>
        </div>
      </div>
    </footer>
  )
}
