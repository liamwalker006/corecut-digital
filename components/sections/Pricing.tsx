import { Check } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { BOOKING_URL } from '@/lib/constants'

const features = [
  'Dedicated Meta ad campaigns',
  'Your own freequote.uk branded landing page',
  'Exclusive leads — never shared',
  'Weekly performance reports',
  'Ad creative written & designed for you',
  'Ongoing campaign optimisation',
  'Direct WhatsApp access to your account manager',
  'No lock-in contract — cancel any time',
]

export default function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-bgSurface" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold">Simple. Transparent. No surprises.</h2>
        </AnimatedSection>

        <AnimatedSection>
          <div
            className="max-w-lg mx-auto bg-bgCard rounded-3xl border-2 border-brand p-8 md:p-10"
            style={{ boxShadow: '0 0 80px rgba(125, 212, 212, 0.18)' }}
          >
            {/* Badge */}
            <div className="inline-block bg-brand/10 border border-brand/30 rounded-full px-4 py-1.5 mb-7">
              <span className="text-brand text-xs font-bold uppercase tracking-widest">
                CoreCut Standard
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-bold">£750</span>
              <span className="text-textMuted text-xl">/month</span>
              <span className="text-textMuted text-sm ml-1">retainer</span>
            </div>
            <p className="text-textMuted text-sm mb-8 leading-relaxed">
              + your ad spend (we recommend £500–£1,500/mo)
            </p>

            {/* Feature list */}
            <ul className="space-y-3.5 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-brand" />
                  </div>
                  <span className="text-sm text-white/80 leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-brand text-black font-bold py-4 rounded-full text-center hover:bg-brand/90 transition-all duration-200 hover:scale-[1.02] text-base mb-4"
            >
              Book Your Free Demo Call →
            </a>
            <p className="text-center text-xs text-textMuted leading-relaxed">
              On the call, we&apos;ll give you the exact system we&apos;re running — free to
              implement yourself.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
