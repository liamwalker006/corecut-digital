import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'

// Real Google reviews, copied word for word (newest first). Dates are the month
// the review was left, so they don't go stale like Google's "2 days ago".
type Review = {
  initials: string
  name: string
  meta: string | null
  date: string | null
  badge?: string
  body: string | null
}

const reviews: Review[] = [
  {
    initials: 'DC',
    name: 'Daniel Cooke',
    meta: null,
    date: 'Nov 2026',
    body: 'Where do you Start! What an exceptional company Leeds have not stopped coming in averaging around 10 a week and securing more than 60% would definitely recommend to any upcoming small businesses that are looking to expand. Thank you so much, ladies and gentlemen and corecut team members',
  },
  {
    initials: 'B',
    name: 'Billy',
    meta: 'LB Roofing',
    date: 'Nov 2026',
    body: 'Liam and Owen did exactly what they said they would. Does exactly what it says on the tin. Over 100 quotes booked from their ads, good homeowners, and I don’t have to touch any of the tech. Top lads.',
  },
  {
    initials: 'SP',
    name: 'Scott Probert',
    meta: null,
    date: 'Nov 2026',
    body: 'We run a small roofing company and we decide to use corecut digital. Right from the start they were fantastic. We spoke for a couple of months before deciding to use them and have no complaints at all. Liam and Owen are fantastic.',
  },
  {
    initials: 'JM',
    name: 'Jordan Miller',
    meta: null,
    date: 'Nov 2026',
    body: 'Excellent service, really professional and honest',
  },
  {
    initials: 'LC',
    name: 'Luke Clee',
    meta: null,
    date: 'Nov 2026',
    body: 'Working with this team as done good for my company lots of work comeing in lots of quotes to give simon and owen are good lads good to work with',
  },
  {
    initials: 'AD',
    name: 'Adam Dempsey',
    meta: null,
    date: 'Sep 2026',
    body: "Been with Corecut a year and a half now and it's easily one of the best calls we've made, they knew their stuff from the off and put us at ease straight away, quotes have been coming in consistently ever since and we've grown the crew off the back of it. Always on hand when we need them, nothing's ever too much trouble. Great works lads 👏",
  },
  {
    initials: 'OF',
    name: 'Oscar Francis',
    meta: null,
    date: 'Aug 2026',
    body: "Liam and Owen have been nothing but outstanding throughout our time working together. The team have helped me build my company profile and reputation online which has helped me secure multiple jobs in my area. This has then lead to them recommending me to family and friends for more work. They are great lads who work round the clock to give you the best opportunity's for work, they are 100% committed to working with you and helping you grow.",
  },
  {
    initials: 'DB',
    name: 'Darron Brady',
    meta: null,
    date: null,
    body: null,
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
            <em className="font-serif italic text-brand not-italic font-normal">Real reviews.</em>
          </h2>
          <p className="text-textMuted text-lg">
            Straight from our Google Business profile.
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
                    {review.meta && (
                      <p className="text-textMuted text-xs truncate">{review.meta}</p>
                    )}
                  </div>
                </div>

                {/* Stars + date */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-amber-400 text-sm tracking-tight">★★★★★</span>
                  <span className="text-gray-600 text-xs">{review.date}</span>
                  {review.badge && (
                    <span className="text-[10px] uppercase tracking-wide text-textMuted border border-white/10 rounded px-1.5 py-0.5">
                      {review.badge}
                    </span>
                  )}
                </div>

                {/* Body */}
                {review.body && (
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{review.body}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Disclaimer / link */}
        <AnimatedSection>
          <p className="text-center text-textMuted text-xs leading-relaxed max-w-xl mx-auto">
            <span className="text-amber-400">★★★★★</span>
            {'  '}
            5.0 rating on Google.{' '}
            <a
              href="https://share.google/L97jrwxj0yneLyk6E"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Read all reviews on Google
            </a>
            .
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
