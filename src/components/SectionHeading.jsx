import { Link } from 'react-router-dom'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-brass-light' : 'text-brass'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/70' : 'text-slate'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  disabled,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-navy text-cream hover:bg-navy-deep focus-visible:outline-navy shadow-sm hover:shadow-md',
    secondary:
      'border border-cream/40 bg-transparent text-cream hover:bg-cream/10 focus-visible:outline-cream',
    outline:
      'border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-cream focus-visible:outline-navy',
    gold: 'bg-brass text-navy-deep hover:bg-brass-dark hover:text-cream focus-visible:outline-brass',
    ghost: 'text-cream hover:text-brass-light underline-offset-4 hover:underline',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
