import { Users, Handshake, BookOpen, Compass, Sprout } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionHeading, { Button } from '../components/SectionHeading'
import TeamMemberCard from '../components/TeamMemberCard'
import CTASection from '../components/CTASection'
import { teamMembers } from '../data/content'

const reasons = [
  {
    icon: Users,
    title: 'Connect',
    text: 'Meet professionals, investors, and partners who share your interest in real estate and long-term collaboration.',
  },
  {
    icon: Handshake,
    title: 'Collaborate',
    text: 'Engage with a community that values partnership—sharing insight, introductions, and mutual support.',
  },
  {
    icon: BookOpen,
    title: 'Learn',
    text: 'Participate in conversations and programming designed to deepen your understanding of markets and opportunities.',
  },
  {
    icon: Compass,
    title: 'Discover Opportunities',
    text: 'Gain exposure to investment and rental opportunities as they are shared within the Meridian network.',
  },
  {
    icon: Sprout,
    title: 'Grow',
    text: 'Build lasting professional relationships that support your real estate journey over time.',
  },
]

export default function Membership() {
  return (
    <>
      <HeroSection
        height="short"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
        eyebrow="Membership"
        title="Become Part of the Network"
        subtitle="Membership is designed for individuals interested in connecting, collaborating, and participating in Meridian Collective’s real estate community—focused on relationships, shared insight, and carefully considered opportunities."
        primaryCta={{ label: 'Apply Now', to: '/membership/apply' }}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Why Become a Member?"
            title="Five ways membership creates value"
            subtitle="Joining Meridian Collective means joining a professional community committed to building opportunities through real estate—together."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {reasons.map((item) => (
              <article
                key={item.title}
                className="flex flex-col border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center bg-navy text-brass-light">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-medium text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Team"
            subtitle="Experienced professionals dedicated to cultivating a trusted real estate network for members and partners."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Membership Banner */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy-deep/85" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 sm:py-32">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brass-light">
            Invitation
          </p>
          <h2 className="font-display text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
            Would You Like To Become A Member?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Join our growing network and become part of a community focused on building
            relationships and creating opportunities through real estate.
          </p>
          <div className="mt-10">
            <Button to="/membership/apply" variant="gold">
              Join Now
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        variant="light"
        title="Questions about membership?"
        subtitle="We welcome thoughtful conversations with prospective members who share our commitment to collaboration and long-term growth."
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
      />
    </>
  )
}
