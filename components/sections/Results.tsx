import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'

const reviews = [
  {
    initials: 'AD',
    name: 'Adam Dempsey',
    meta: '1 review',
    date: 'a week ago',
    badge: 'New',
    body: "Been with Corecut a year and a half now and it's easily one of the best calls we've made, they knew their stuff from the off and put us at ease straight away, quotes have been coming in consistently ever since and we've grown the crew off the back of it. Always on hand when we need them, nothing's ever too much trouble. Great works lads 👏",
  },
  {
    initials: 'OF',
    name: 'Oscar francis',
    meta: '1 review',
    date: 'a month ago',
    body: "Liam and Owen have been nothing but outstanding throughout our time working together. The team have helped me build my company profile and reputation online which has helped me secure multiple jobs in my area. This has then lead to them recommending me to family and friends for more work. They are great lads who work round the clock to give you the best opportunity's for work, they are 100% committed to working with you and helping you grow.",
  },
  {
    initials: 'DB',
    name: 'Darron Brady',
    meta: null,
    date: 'a month ago',
    body: null,
  },
  {
    initials: 'JS',
    name: 'Jakes Stevens',
    meta: '2 reviews',
    date: '4 months ago',
    body: 'Working with Liam and Owen from Corecut has been a massive help for growing the business and bringing in more work. Would highly recommend',
  },
  {
    initials: 'LA',
    name: 'Louen Allsop',
    meta: '3 reviews · 1 photo',
    date: 'Edited 4 months ago',
    body: 'Amazing team would highly recommend',
  },
  {
    initials: 'AS',
    name: 'Alex Smith',
    meta: '1 review',
    date: '4 months ago',
    body: "Owen has been looking after my social media for the past five months and completely transformed my business. Don't know what I would do without all this help. Keep up the good work 👍👍👍👍👍",
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
