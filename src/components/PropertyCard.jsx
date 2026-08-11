import { MapPin, ArrowRight } from 'lucide-react'
import { Button } from './SectionHeading'

export default function OpportunityCard({ property }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 bg-navy/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream">
          {property.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5 text-brass" aria-hidden="true" />
          {property.location}
        </div>
        <h3 className="font-display text-2xl font-medium text-navy">{property.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
          {property.description}
        </p>
        {property.details && (
          <p className="mt-3 text-xs font-medium uppercase tracking-wider text-brass-dark">
            {property.details}
          </p>
        )}
        <div className="mt-6">
          <Button
            to="/investments"
            variant="outline"
            className="w-full !py-3 group-hover:border-navy group-hover:bg-navy group-hover:text-cream"
          >
            View Opportunity
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </article>
  )
}

export function PropertyCard({ property, actionLabel = 'View Details' }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/80 to-transparent p-5 pt-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-brass-light">
            {property.type}
          </p>
          <h3 className="mt-1 font-display text-2xl font-medium text-white">
            {property.name}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5 text-brass" aria-hidden="true" />
          {property.location}
        </div>
        <p className="flex-1 text-sm leading-relaxed text-slate">{property.description}</p>
        {property.details && (
          <p className="mt-4 border-t border-border pt-4 text-sm text-charcoal">
            {property.details}
          </p>
        )}
        <div className="mt-6">
          <Button to="/contact" variant="outline" className="w-full !py-3">
            {actionLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  )
}

export function RentalCard({ property }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border bg-ivory transition duration-300 hover:border-brass/40 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute right-4 top-4 bg-cream/95 px-3 py-1.5 text-sm font-semibold text-navy shadow-sm">
          {property.rent}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-medium text-navy">{property.name}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5 text-brass" aria-hidden="true" />
          {property.location}
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-wider text-slate">
          <span>{property.bedrooms} Bed</span>
          <span className="text-border">|</span>
          <span>{property.bathrooms} Bath</span>
          <span className="text-border">|</span>
          <span>{property.type}</span>
        </div>
        <div className="mt-6">
          <Button to="/contact" variant="outline" className="w-full !py-3">
            View Property
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  )
}
