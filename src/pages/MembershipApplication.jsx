import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import MembershipForm from '../components/MembershipForm'

export default function MembershipApplication() {
  return (
    <>
      <HeroSection
        height="short"
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80"
        eyebrow="Membership Application"
        title="Begin Your Journey With Us"
        subtitle="Complete the application below to express your interest in joining Meridian Collective. Our team reviews each submission carefully and will be in touch."
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:py-24">
          <SectionHeading
            title="Membership Application"
            subtitle="Tell us about yourself and how you’d like to engage with our real estate community. Fields marked with an asterisk are required."
          />
          <div className="mt-12">
            <MembershipForm />
          </div>
          <p className="mt-8 text-center text-xs leading-relaxed text-muted">
            This is a frontend demonstration form. Submissions are not transmitted to a
            server. In a production environment, applications would be reviewed by our
            membership team under applicable policies and availability.
          </p>
        </div>
      </section>
    </>
  )
}
