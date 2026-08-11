import { Button } from './SectionHeading'

export default function HeroSection({
  image,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  height = 'default',
  overlay = 'default',
}) {
  const heightClass =
    height === 'tall'
      ? 'min-h-[92vh]'
      : height === 'short'
        ? 'min-h-[48vh] sm:min-h-[52vh]'
        : 'min-h-[70vh] sm:min-h-[78vh]'

  const overlayClass =
    overlay === 'light'
      ? 'bg-gradient-to-t from-navy-deep/85 via-navy/55 to-navy/30'
      : 'bg-gradient-to-t from-navy-deep/90 via-navy/60 to-navy/35'

  return (
    <section className={`relative flex items-end overflow-hidden ${heightClass}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-fade-in"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-8 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 animate-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-brass-light">
              {eyebrow}
            </p>
          )}
          <h1 className="animate-fade-up delay-100 font-display text-4xl font-medium leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl animate-fade-up delay-200 text-base leading-relaxed text-white/80 sm:text-lg">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
              {primaryCta && (
                <Button to={primaryCta.to} variant="gold">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button to={secondaryCta.to} variant="secondary">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
