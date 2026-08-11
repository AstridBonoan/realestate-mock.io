import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionHeading, { Button } from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { company } from '../data/content'

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    content: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: Phone,
    title: 'Phone',
    content: company.phone,
    href: `tel:${company.phone.replace(/\D/g, '')}`,
  },
  {
    icon: MapPin,
    title: 'Location',
    content: company.location,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: company.hours,
  },
]

export default function Contact() {
  return (
    <>
      <HeroSection
        height="short"
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
        eyebrow="Contact"
        title="Let's Start a Conversation"
        subtitle="Whether you are a prospective member, investor, property owner, or strategic partner, we welcome the opportunity to connect."
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* Left */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in Touch"
              title="We’re here to listen"
              subtitle="Reach out with questions about membership, partnerships, investments, or rental properties. Our team responds thoughtfully to every inquiry."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="border border-border bg-white p-5 transition hover:border-brass/40"
                >
                  <card.icon className="h-5 w-5 text-brass" aria-hidden="true" />
                  <h3 className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                    {card.title}
                  </h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-2 block whitespace-pre-line text-sm leading-relaxed text-navy hover:text-brass-dark"
                    >
                      {card.content}
                    </a>
                  ) : (
                    <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-navy">
                      {card.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 border border-navy/10 bg-navy p-8 text-cream">
              <h3 className="font-display text-2xl font-medium">Become a Partner</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Property owners, operators, and collaborators interested in strategic
                partnership are invited to start a conversation with our partnerships
                team.
              </p>
              <Button
                href="mailto:hello@meridiancollective.com?subject=Partnership%20Inquiry"
                variant="gold"
                className="mt-6"
              >
                Partner With Us
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="border border-border bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="font-display text-3xl font-medium text-navy">Send a Message</h2>
            <p className="mt-2 text-sm text-slate">
              Complete the form below and we’ll respond as soon as possible.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
