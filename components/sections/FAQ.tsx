'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'

const faqs = [
  {
    q: 'How quickly will I start getting leads?',
    a: 'Most clients receive their first enquiries within 24–48 hours of going live. Full campaign setup takes 5–7 working days.',
  },
  {
    q: 'Are the leads really exclusive?',
    a: 'Yes — 100%. Every lead comes through your own dedicated landing page. No one else ever sees them.',
  },
{
    q: 'Do I need to sign a long contract?',
    a: "No. We work on a rolling monthly basis. If we're not delivering, you can cancel with 30 days notice.",
  },
  {
    q: 'What areas do you work in?',
    a: 'We work with roofing and exterior cleaning companies across the whole of the UK.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-bgPrimary" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionPill>FAQs</SectionPill>
          <h2 className="text-3xl md:text-5xl font-black">
            Questions we get asked every time.
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <AnimatedSection key={i} delay={i * 60}>
                <div
                  className="bg-bgCard rounded-2xl border border-white/10 overflow-hidden"
                  style={
                    isOpen ? { boxShadow: '0 0 30px rgba(125, 212, 212, 0.06)' } : undefined
                  }
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm md:text-base leading-snug">
                      {faq.q}
                    </span>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-colors">
                      {isOpen ? (
                        <Minus className="w-3 h-3 text-brand" />
                      ) : (
                        <Plus className="w-3 h-3 text-textMuted" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-5 text-textMuted leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
