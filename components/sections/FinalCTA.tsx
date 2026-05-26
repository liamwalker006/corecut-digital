import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'
import { BOOKING_URL } from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-bgPrimary">
      {/* Teal glow behind CTA */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-brand/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <SectionPill>Get Started</SectionPill>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Ready to fill your calendar with{' '}
            <em className="font-serif italic text-brand not-italic font-normal">exclusive</em>{' '}
            roofing enquiries?
          </h2>
          <p className="text-textMuted text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute demo call. We&apos;ll walk you through the exact system — no
            pitch, no pressure. Take it and implement it yourself if you want.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand text-black font-black px-12 py-5 rounded-full text-lg hover:bg-brand/90 transition-all duration-200 hover:scale-105 mb-5 shadow-lg shadow-brand/20"
          >
            Book Your Free Demo Call →
          </a>

          <p className="text-textMuted text-sm">
            Free call · No obligation · Takes 30 minutes
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
