import { useMemo, useState } from 'react'
import { Filter } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import { PropertyCard, RentalCard } from '../components/PropertyCard'
import { investmentOpportunities, rentalProperties } from '../data/content'

const allProperties = [...investmentOpportunities, ...rentalProperties]

const propertyTypes = [
  'All',
  ...Array.from(new Set(allProperties.map((p) => p.type))).sort(),
]

const locations = [
  'All',
  ...Array.from(new Set(allProperties.map((p) => p.location))).sort(),
]

const opportunityTypes = ['All', 'Investment', 'Rental']

export default function Investments() {
  const [propertyType, setPropertyType] = useState('All')
  const [location, setLocation] = useState('All')
  const [opportunityType, setOpportunityType] = useState('All')

  const filteredInvestments = useMemo(() => {
    return investmentOpportunities.filter((p) => {
      if (opportunityType !== 'All' && opportunityType !== 'Investment') return false
      if (propertyType !== 'All' && p.type !== propertyType) return false
      if (location !== 'All' && p.location !== location) return false
      return true
    })
  }, [propertyType, location, opportunityType])

  const filteredRentals = useMemo(() => {
    return rentalProperties.filter((p) => {
      if (opportunityType !== 'All' && opportunityType !== 'Rental') return false
      if (propertyType !== 'All' && p.type !== propertyType) return false
      if (location !== 'All' && p.location !== location) return false
      return true
    })
  }, [propertyType, location, opportunityType])

  const showInvestments = opportunityType === 'All' || opportunityType === 'Investment'
  const showRentals = opportunityType === 'All' || opportunityType === 'Rental'

  return (
    <>
      <HeroSection
        height="short"
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
        eyebrow="Portfolio"
        title="Explore Real Estate Opportunities"
        subtitle="Browse illustrative investment opportunities and rental properties from across our network. Use the filters below to refine by type, location, and opportunity category."
      />

      {/* Filters */}
      <section className="sticky top-[72px] z-30 border-b border-border bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-end lg:gap-6">
          <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-navy lg:mb-3">
            <Filter className="h-4 w-4 text-brass" aria-hidden="true" />
            Filters
          </div>
          <FilterSelect
            id="filter-type"
            label="Property Type"
            value={propertyType}
            onChange={setPropertyType}
            options={propertyTypes}
          />
          <FilterSelect
            id="filter-location"
            label="Location"
            value={location}
            onChange={setLocation}
            options={locations}
          />
          <FilterSelect
            id="filter-opportunity"
            label="Opportunity Type"
            value={opportunityType}
            onChange={setOpportunityType}
            options={opportunityTypes}
          />
          {(propertyType !== 'All' || location !== 'All' || opportunityType !== 'All') && (
            <button
              type="button"
              onClick={() => {
                setPropertyType('All')
                setLocation('All')
                setOpportunityType('All')
              }}
              className="text-sm font-medium text-brass-dark underline-offset-2 hover:underline lg:mb-3"
            >
              Clear filters
            </button>
          )}
        </div>
      </section>

      {showInvestments && (
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
            <SectionHeading
              align="left"
              eyebrow="Investment Opportunities"
              title="Assets under consideration"
              subtitle="Example investment properties spanning multifamily, commercial, industrial, and residential categories."
            />
            {filteredInvestments.length > 0 ? (
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                {filteredInvestments.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <EmptyState message="No investment opportunities match your current filters." />
            )}
          </div>
        </section>
      )}

      {showRentals && (
        <section className="bg-ivory">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
            <SectionHeading
              align="left"
              eyebrow="Rental Properties"
              title="Residences available for lease"
              subtitle="Illustrative rental listings showcasing the quality and diversity of properties within our network."
            />
            {filteredRentals.length > 0 ? (
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRentals.map((property) => (
                  <RentalCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <EmptyState message="No rental properties match your current filters." />
            )}
          </div>
        </section>
      )}

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
          <h2 className="font-display text-2xl text-navy">Important Disclaimer</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            The opportunities and properties displayed on this page are examples prepared
            for this professional website mockup. They do not represent live offerings,
            solicitations, or commitments. Actual investment opportunities—when
            available—are subject to applicable terms, availability, due diligence, and
            review. Past or illustrative examples should not be interpreted as guarantees
            of future results or performance.
          </p>
        </div>
      </section>
    </>
  )
}

function FilterSelect({ id, label, value, onChange, options }) {
  return (
    <div className="flex flex-1 flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-border bg-white px-3 py-2.5 text-sm text-charcoal outline-none transition focus:border-brass focus:ring-1 focus:ring-brass"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

function EmptyState({ message }) {
  return (
    <div className="mt-12 border border-dashed border-border bg-white/60 px-6 py-16 text-center">
      <p className="text-sm text-slate">{message}</p>
    </div>
  )
}
