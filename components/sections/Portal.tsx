import { Mic, CalendarClock, BellRing, RefreshCcw, TrendingUp } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'

// "VoiceQuote" is a product name (TM), not a registered or patented mark: don't change it to ® or "patented".
const features = [
  {
    Icon: CalendarClock,
    title: 'Automatic Reschedules',
    description:
      "Homeowner can't make it? The reschedule goes straight to our specialist home improvement appointment setters, who rebook it for you. No chasing, no lost jobs.",
  },
  {
    Icon: BellRing,
    title: 'Reminders & Notifications',
    description:
      'Homeowners get reminders before every appointment so they’re in and ready, and you’re notified the moment anything is booked or changes.',
  },
  {
    Icon: RefreshCcw,
    title: 'Ads That Learn From Your Jobs',
    description:
      'After each appointment, the portal sends how it went back to Facebook, so your ads learn which homeowners turn into real work and find more like them.',
  },
  {
    Icon: TrendingUp,
    title: 'See Your Return on Ad Spend',
    description:
      'Ad spend, quotes, jobs won and revenue side by side. You can see exactly what your ads are returning, and when it’s time to scale.',
  },
]

// heights for the decorative voice waveform
const wave = [10, 18, 28, 16, 34, 22, 40, 26, 14, 30, 20, 36, 12, 24, 32, 18, 10, 26, 16, 8]

export default function Portal() {
  return (
    <section className="py-20 md:py-32 bg-bgPrimary" id="portal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <SectionPill>The CoreCut Portal</SectionPill>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Your All-in-One Solution{' '}
            <em className="font-serif italic text-brand not-italic font-normal">for Quotes.</em>
          </h2>
          <p className="text-textMuted text-lg mt-4 max-w-2xl mx-auto">
            Every appointment, quote and result in one place, built for roofers and run from your phone.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-8 lg:gap-12 items-start">
          {/* Features */}
          <div className="flex flex-col gap-5">
            {/* VoiceQuote — the headline feature */}
            <AnimatedSection>
              <div
                className="relative overflow-hidden bg-bgCard rounded-2xl p-7 md:p-9 border border-brand/30"
                style={{ boxShadow: '0 0 60px rgba(125, 212, 212, 0.10)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center flex-shrink-0">
                    <Mic className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">Built into your portal</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-3">
                  VoiceQuote<sup className="text-brand text-base align-super">™</sup>
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                  Stand on the job, talk it through, and VoiceQuote<sup>™</sup> turns what you say into a
                  professional quote ready to send. No typing, no paperwork in the van at 9pm.
                </p>

                {/* "speaking" bar */}
                <div className="mt-7 flex items-center gap-4 bg-black/40 border border-white/10 rounded-full pl-2 pr-5 py-2 max-w-md">
                  <span className="relative flex h-9 w-9 flex-shrink-0">
                    <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-brand opacity-30" />
                    <span className="relative inline-flex rounded-full h-9 w-9 bg-brand items-center justify-center">
                      <Mic className="w-4 h-4 text-black" />
                    </span>
                  </span>
                  <div className="flex items-center gap-[3px] h-10 flex-1" aria-hidden>
                    {wave.map((h, i) => (
                      <span key={i} className="w-[3px] rounded-full bg-brand/80" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                  <span className="text-xs text-textMuted whitespace-nowrap">Speak it. Send it.</span>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map(({ Icon, title, description }, i) => (
                <AnimatedSection key={title} delay={i * 80}>
                  <div
                    className="bg-bgCard rounded-2xl p-6 border border-white/10 h-full flex flex-col"
                    style={{ boxShadow: '0 0 40px rgba(125, 212, 212, 0.05)' }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                    <h3 className="text-base font-black mb-2 leading-snug">{title}</h3>
                    <p className="text-textMuted leading-relaxed text-sm flex-1">{description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Real client holding their portal */}
          <AnimatedSection delay={150} className="lg:sticky lg:top-28">
            <figure className="rounded-2xl overflow-hidden border border-white/10 bg-bgCard max-w-md mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portal/daniel-portal.jpg"
                alt="Daniel from RSC Developments holding up his CoreCut portal on his phone"
                width={960}
                height={1200}
                loading="lazy"
                className="w-full h-auto"
              />
              <figcaption className="px-5 py-4 text-sm">
                <span className="font-semibold text-white">Daniel&apos;s portal</span>
                <span className="text-textMuted"> · RSC Developments, Torbay</span>
              </figcaption>
            </figure>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
