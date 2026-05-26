import { X } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'

const pains = [
  "Leads sold to 3–5 other roofers — you're racing to answer first",
  'Call centre leads with no intent — tyre kickers who waste your time',
  'No system, no consistency — feast or famine every single month',
]

export default function Problem() {
  return (
    <section className="py-20 md:py-32 bg-bgPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionPill>The Problem</SectionPill>
          <h2 className="text-3xl md:text-5xl font-black max-w-2xl mx-auto leading-tight">
            Most roofers are stuck buying shared leads that go cold.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {pains.map((pain, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div
                className="bg-bgCard rounded-2xl p-6 border border-white/10 flex gap-4 h-full"
                style={{ boxShadow: '0 0 40px rgba(125, 212, 212, 0.04)' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-white/75 leading-relaxed">{pain}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <div className="inline-flex items-center gap-5">
            <span className="block w-16 h-px bg-brand/30" />
            <p className="text-textMuted text-lg font-serif italic">There&apos;s a better way.</p>
            <span className="block w-16 h-px bg-brand/30" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
