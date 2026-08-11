import { Button } from './SectionHeading'

export default function CTASection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  variant = 'dark',
}) {
  const isDark = variant === 'dark'

  return (
    <section className="relative overflow-hidden">
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-navy-deep/80"
            aria-hidden="true"
          />
        </>
      )}
      {!image && (
        <div
          className={`absolute inset-0 ${isDark ? 'bg-navy' : 'bg-cream'}`}
          aria-hidden="true"
        />
      )}
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 sm:py-28">
        {eyebrow && (
          <p
            className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${
              isDark || image ? 'text-brass-light' : 'text-brass'
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl ${
            isDark || image ? 'text-white' : 'text-navy'
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
              isDark || image ? 'text-white/75' : 'text-slate'
            }`}
          >
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {primaryCta && (
              <Button to={primaryCta.to} variant="gold">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                to={secondaryCta.to}
                variant={isDark || image ? 'secondary' : 'outline'}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
