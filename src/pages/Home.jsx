import {
  Building2,
  Home as HomeIcon,
  Users,
  Handshake,
  Network,
  Lightbulb,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionHeading, { Button } from '../components/SectionHeading'
import OpportunityCard from '../components/PropertyCard'
import CTASection from '../components/CTASection'
import { investmentOpportunities } from '../data/content'

const whatWeDo = [
  {
    icon: Building2,
    title: 'Real Estate Investments',
    text: 'Curated investment opportunities across residential, multifamily, and commercial assets—evaluated for long-term potential and collaborative participation.',
  },
  {
    icon: HomeIcon,
    title: 'Rental Properties',
    text: 'A growing portfolio of rental assets managed with care, offering members visibility into quality properties and market activity.',
  },
  {
    icon: Users,
    title: 'Membership',
    text: 'A professional community where members connect, share insight, and explore opportunities within a trusted real estate network.',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    text: 'Meaningful alliances with property owners, operators, and collaborators who share our commitment to disciplined growth.',
  },
]

const benefits = [
  {
    icon: Network,
    title: 'A Growing Community',
    text: 'Connect with professionals, investors, and partners who share an interest in building through real estate.',
  },
  {
    icon: HeartHandshake,
    title: 'Meaningful Collaboration',
    text: 'Engage in conversations and relationships that open doors to shared initiatives and mutual support.',
  },
  {
    icon: Lightbulb,
    title: 'Exposure to Opportunities',
    text: 'Stay informed about investment and rental opportunities as they become available within the network.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Relationships',
    text: 'Build enduring connections designed for sustained growth—not short-term transactions.',
  },
]

export default function Home() {
  const featured = investmentOpportunities.slice(0, 3)

  return (
    <>
      <HeroSection
        height="tall"
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
        eyebrow="Meridian Collective"
        title="Building Opportunities Through Real Estate"
        subtitle="We cultivate a network of members and strategic partners united by a shared commitment to real estate investments, rental properties, and long-term collaborative growth."
        primaryCta={{ label: 'Become a Member', to: '/membership' }}
        secondaryCta={{ label: 'Explore Opportunities', to: '/investments' }}
      />

      {/* Mission */}
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title="A network built on trust, collaboration, and opportunity"
              subtitle="Meridian Collective exists to bring together individuals and partners who believe real estate is strongest when pursued through community. We create space for connection, shared learning, and carefully considered opportunities."
            />
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                alt="Modern architectural interior"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs border border-border bg-white p-6 shadow-lg sm:block">
              <p className="font-display text-xl italic leading-snug text-navy">
                “Real estate is more than transactions—it is relationships, vision, and the patience to build lasting value.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              align="left"
              light
              eyebrow="Our Vision"
              title="Expanding a lasting real estate network"
              subtitle="We envision a thriving collective where members and strategic partners grow together—sharing insight, exploring opportunities, and strengthening a community rooted in professionalism and long-term thinking."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'Member-Centered',
                  text: 'Every initiative is designed to strengthen relationships and create meaningful access within our network.',
                },
                {
                  title: 'Partner-Driven',
                  text: 'We seek collaborators who bring expertise, integrity, and a shared commitment to quality opportunities.',
                },
                {
                  title: 'Opportunity-Focused',
                  text: 'From investments to rentals, we surface opportunities that align with thoughtful, disciplined growth.',
                },
                {
                  title: 'Long-Term Oriented',
                  text: 'We prioritize sustainable relationships and patient capital over short-lived trends.',
                },
              ].map((item) => (
                <div key={item.title} className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="font-display text-xl text-brass-light">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
          <SectionHeading
            eyebrow="What We Do"
            title="Four pillars of the Collective"
            subtitle="Our work spans investments, rentals, membership, and partnerships—each designed to reinforce a stronger real estate community."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col border border-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brass/40 hover:shadow-lg"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center border border-brass/30 text-brass transition group-hover:bg-navy group-hover:text-brass-light">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-medium text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid gap-5 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div key={item.title} className="bg-white p-6 shadow-sm">
                    <item.icon className="h-6 w-6 text-brass" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-xl text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Why Join Us?"
                title="Belong to a community built for lasting value"
                subtitle="Membership with Meridian Collective is an invitation to participate in a professional network focused on connection, collaboration, and carefully considered real estate opportunities."
              />
              <div className="mt-8">
                <Button to="/membership" variant="primary">
                  Learn About Membership
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured Opportunities"
              title="Selected properties from our network"
              subtitle="A glimpse into the types of investments our community explores. All listings are illustrative examples."
            />
            <Button to="/investments" variant="outline" className="shrink-0">
              View All
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => (
              <OpportunityCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <CTASection
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
        eyebrow="Strategic Partnerships"
        title="Let's Build Something Together."
        subtitle="Whether you are a property owner, operator, or collaborator seeking aligned partners, we welcome conversations about how we can grow opportunities side by side."
        primaryCta={{ label: 'Become a Partner', to: '/contact' }}
      />

      {/* Final CTA */}
      <CTASection
        variant="dark"
        eyebrow="Membership"
        title="Ready to join the Collective?"
        subtitle="Become part of a professional real estate network dedicated to relationships, collaboration, and building opportunities that endure."
        primaryCta={{ label: 'Become a Member', to: '/membership/apply' }}
        secondaryCta={{ label: 'Contact Us', to: '/contact' }}
      />
    </>
  )
}
