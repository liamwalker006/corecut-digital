import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'

const phases = [
  {
    number: '01',
    timeframe: 'Week 1',
    title: 'Onboarding & Strategy',
    description:
      'We learn your area, service, and ideal job type. We write your ad creatives and build your branded landing page on freequote.uk — fully designed and ready to convert.',
    outcome: 'Your dedicated freequote.uk page, ad creatives written and designed, campaign ready to launch.',
  },
  {
    number: '02',
    timeframe: 'Week 2',
    title: 'Launch',
    description:
      'Ads go live across Meta. Your landing page is live. Homeowners start filling in their details — and leads arrive direct to your phone within 48 hours.',
    outcome: 'Ads live, first leads arriving within 48 hours, zero effort required from you.',
  },
  {
    number: '03',
    timeframe: 'Ongoing',
    title: 'Scale',
    description:
      'We optimise every week — cutting cost per lead, scaling what works, and reporting on real numbers. You close jobs and grow the business.',
    outcome: 'Weekly reporting, optimised cost per lead, and a predictable pipeline month after month.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-bgPrimary" id="how-it-works">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <SectionPill>How It Works</SectionPill>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            From zero to 30+ leads in{' '}
            <em className="font-serif italic text-brand not-italic font-normal">under 2 weeks.</em>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="hidden md:block absolute left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-brand/40 via-brand/20 to-transparent" />

          <div className="space-y-10">
            {phases.map((phase, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div className="grid grid-cols-1 md:grid-cols-[5rem_1fr_1fr] gap-6 md:gap-8 items-start">

                  {/* Phase marker */}
                  <div className="flex md:flex-col items-center md:items-center gap-3 md:gap-2">
                    <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full bg-bgCard border border-brand/30 flex flex-col items-center justify-center flex-shrink-0"
                      style={{ boxShadow: '0 0 24px rgba(125,212,212,0.12)' }}>
                      <span className="text-[10px] font-bold text-brand uppercase tracking-widest leading-none">
                        {phase.timeframe}
                      </span>
                      <span className="text-lg font-black text-white leading-none mt-0.5">
                        {phase.number}
                      </span>
                    </div>
                  </div>

                  {/* Title + description */}
                  <div className="pt-2">
                    <h3 className="text-xl font-black text-white mb-3 leading-snug">{phase.title}</h3>
                    <p className="text-textMuted text-sm leading-relaxed">{phase.description}</p>
                  </div>

                  {/* Outcome card */}
                  <div
                    className="bg-bgCard rounded-2xl p-5 border border-white/10 h-full"
                    style={{ boxShadow: '0 0 30px rgba(125,212,212,0.05)' }}
                  >
                    <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-3">
                      You walk away with
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed">{phase.outcome}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
