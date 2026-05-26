import { X, Check } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'

const statusQuo = [
  'Shared leads sold to multiple roofers',
  'Generic landing pages with no brand',
  'Locked in 6–12 month contracts',
  "Account managers who don't know roofing",
  'You chase and qualify the leads yourself',
  'Vague reporting, no accountability',
]

const corecut = [
  'Exclusive leads — 100% yours, never shared',
  'Your own branded freequote.uk subdomain',
  'No lock-in — cancel any time',
  'Specialists in roofing & exterior cleaning only',
  'Leads come pre-filled with full job details',
  'Weekly reporting with real numbers',
]

export default function Comparison() {
  return (
    <section className="py-20 md:py-32 bg-bgPrimary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionPill>Why CoreCut</SectionPill>
          <h2 className="text-3xl md:text-5xl font-black">
            Other agencies vs.{' '}
            <em className="font-serif italic text-brand not-italic font-normal">CoreCut Digital.</em>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Status Quo card */}
          <AnimatedSection>
            <div className="bg-bgCard rounded-2xl border border-white/10 overflow-hidden h-full">
              <div className="px-7 py-5 border-b border-white/10">
                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">
                  <X className="w-3 h-3 text-red-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Status Quo
                  </span>
                </div>
                <p className="text-textMuted text-sm mt-3">Typical lead gen agency or directory</p>
              </div>
              <ul className="px-7 py-6 space-y-4">
                {statusQuo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-sm text-textMuted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* CoreCut card */}
          <AnimatedSection delay={100}>
            <div
              className="bg-bgCard rounded-2xl border border-brand/25 overflow-hidden h-full"
              style={{ boxShadow: '0 0 40px rgba(125,212,212,0.08)' }}
            >
              <div className="px-7 py-5 border-b border-brand/15">
                <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-3 py-1">
                  <Check className="w-3 h-3 text-brand" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">
                    CoreCut Digital
                  </span>
                </div>
                <p className="text-textMuted text-sm mt-3">Exclusive roofing lead system</p>
              </div>
              <ul className="px-7 py-6 space-y-4">
                {corecut.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-brand" />
                    </div>
                    <span className="text-sm text-white leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
