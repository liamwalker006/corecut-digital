import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'

const reviews = [
  {
    initials: 'JR',
    name: 'Jamie Reynolds',
    company: 'Peak Roofing, Manchester',
    title: 'Booked solid within the first month.',
    body: "Was sceptical at first but Liam talked me through everything and it made sense. Went live and had leads coming in within a couple of days. Closed around £40k worth of work in the first 30 days. The leads are ours exclusively — massive difference from what we'd used before.",
    date: 'March 2026',
  },
  {
    initials: 'MT',
    name: 'Mark Thompson',
    company: 'Clearline Roofing, Leeds',
    title: 'Does exactly what it says on the tin.',
    body: "Simple setup, quick turnaround, leads started coming through fast. Owen keeps us updated every week and is always on hand if we need anything. Quality of the enquiries is really good — homeowners who actually want the work done. Would recommend to any roofer.",
    date: 'February 2026',
  },
  {
    initials: 'DH',
    name: 'Dan Harris',
    company: 'Summit Roofing Co, Bristol',
    title: 'More work than we can handle.',
    body: "Honestly had to take on another lad just to keep up with the quotes. Never thought Facebook ads would work this well for roofing but CoreCut clearly know what they're doing. Liam sorted everything from the start and it's been running smoothly ever since.",
    date: 'January 2026',
  },
  {
    initials: 'SR',
    name: 'Steve Robinson',
    company: 'Apex Roofing, Birmingham',
    title: 'First lead came in the same day we went live.',
    body: "Setup was quick and professional. The landing page looks great and the leads come straight through to my phone. All local homeowners, proper job details filled in. Close rate is way up compared to anything else we've tried. Happy with it.",
    date: 'April 2026',
  },
  {
    initials: 'CW',
    name: 'Craig Wilson',
    company: 'Northern Roofing Co, Edinburgh',
    title: 'Kept us busy through the quiet months too.',
    body: "Usually January and February are dead for us. Not this year — leads kept coming in all through winter. Owen's been great, checks in regularly and sorts any issues straight away. Really glad we made the switch.",
    date: 'March 2026',
  },
  {
    initials: 'TP',
    name: 'Tom Parker',
    company: 'SkyLine Roofing, London',
    title: "Wish I'd done it sooner.",
    body: "Spent years buying shared leads and getting nowhere. With CoreCut everything comes through our own page and no one else is chasing the same job. The numbers stack up really well. Liam and the team have been brilliant from day one.",
    date: 'February 2026',
  },
]

export default function Results() {
  return (
    <section className="py-20 md:py-32 bg-bgSurface" id="results">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionPill>What Roofers Say</SectionPill>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Real roofers.{' '}
            <em className="font-serif italic text-brand not-italic font-normal">Real revenue.</em>
          </h2>
          <p className="text-textMuted text-lg">
            Results from roofing companies across the UK.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="bg-bgCard border border-white/10 rounded-xl p-6 h-full flex flex-col">
                {/* Header row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-black">{review.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-sm leading-tight">{review.name}</p>
                    <p className="text-textMuted text-xs truncate">{review.company} · GB</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="text-amber-400 text-sm tracking-tight mb-3">★★★★★</div>

                {/* Title */}
                <p className="font-bold text-white text-base mb-2">{review.title}</p>

                {/* Body */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{review.body}</p>

                {/* Date */}
                <p className="text-gray-600 text-xs mt-4">
                  Date of experience: {review.date}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Disclaimer */}
        <AnimatedSection>
          <p className="text-center text-textMuted text-xs leading-relaxed max-w-xl mx-auto">
            <span className="text-amber-400">★★★★★</span>
            {'  '}
            Showing results from roofing companies across the UK. Individual results vary based on
            area, ad spend, and close rate.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
