import AnimatedSection from '@/components/ui/AnimatedSection'
import CountUp from '@/components/ui/CountUp'

interface Stat {
  end?: number
  suffix?: string
  display?: string
  label: string
}

const stats: Stat[] = [
  { end: 47, label: 'AVG EXCLUSIVE LEADS IN FIRST 30 DAYS' },
  { display: '£54,000', label: 'AVERAGE REVENUE GENERATED IN MONTH ONE' },
  { end: 100, suffix: '%', label: 'EXCLUSIVE — YOUR LEADS, NEVER SHARED' },
]

export default function StatsBar() {
  return (
    <section className="bg-bgSurface border-y border-white/10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 120} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 tabular-nums">
                {stat.display ? (
                  <span>{stat.display}</span>
                ) : (
                  <CountUp end={stat.end!} suffix={stat.suffix ?? ''} />
                )}
              </div>
              <p className="text-xs font-semibold text-textMuted uppercase tracking-widest leading-relaxed">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
