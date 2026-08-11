import { Share2 } from 'lucide-react'

export default function TeamMemberCard({ member }) {
  return (
    <article className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/5] overflow-hidden bg-navy/5">
        <img
          src={member.image}
          alt={`Portrait of ${member.name}`}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-medium text-navy">{member.name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-brass">
              {member.title}
            </p>
          </div>
          <a
            href="#"
            aria-label={`${member.name} on LinkedIn`}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-border text-slate transition hover:border-brass hover:text-brass"
          >
            <Share2 className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate">{member.bio}</p>
      </div>
    </article>
  )
}
