import { Megaphone, Globe, UserCheck, BarChart3 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'

const services = [
  {
    Icon: Megaphone,
    title: 'Meta Ads, End-to-End',
    description:
      'We write, design, and run your campaigns. Scroll-stopping creatives built specifically for roofing — not copy-pasted agency templates.',
  },
  {
    Icon: Globe,
    title: 'Branded Landing Page',
    description:
      'Your own subdomain on freequote.uk. A high-converting page built and managed for you — every lead goes exclusively to your inbox.',
  },
  {
    Icon: UserCheck,
    title: 'Exclusive Lead Delivery',
    description:
      'Every enquiry is 100% yours. Homeowners fill in your page, you get the instant notification. No middleman, no shared leads.',
  },
  {
    Icon: BarChart3,
    title: 'Weekly Reporting',
    description:
      'Real numbers every week — cost per lead, enquiry volume, and revenue tracked. You always know exactly what the system is doing.',
  },
]

export default function Solution() {
  return (
    <section className="py-20 md:py-32 bg-bgSurface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionPill>The CoreCut System</SectionPill>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            We take over your lead generation.{' '}
            <em className="font-serif italic text-brand not-italic font-normal">You just close.</em>
          </h2>
        </AnimatedSection>

        {/* 4-card grid — BiffBosh style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
          {services.map(({ Icon, title, description }, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div
                className="bg-bgCard rounded-2xl p-7 border border-white/10 h-full flex flex-col"
                style={{ boxShadow: '0 0 40px rgba(125, 212, 212, 0.05)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-base font-black mb-3 leading-snug">{title}</h3>
                <p className="text-textMuted leading-relaxed text-sm flex-1">{description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Guarantee bar — BiffBosh style: dark, full-width, subtle */}
        <AnimatedSection>
          <div className="bg-bgCard border border-brand/20 rounded-2xl px-8 py-5 flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-brand flex-shrink-0" />
            <p className="text-white/80 text-sm leading-relaxed">
              <span className="text-white font-bold">Our Guarantee —</span> If we don&apos;t
              generate 30+ exclusive enquiries in your first 30 days, we keep working for{' '}
              <span className="text-brand font-semibold">free</span> until we do.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
