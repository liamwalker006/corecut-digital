'use client'

import { useEffect, useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const allLeads = [
  { initials: 'JM', name: 'John M.', location: 'Manchester', job: 'Full Roof Replacement', age: 'Just now' },
  { initials: 'SK', name: 'Sarah K.', location: 'Leeds', job: 'Fascia & Soffit Replacement', age: '3 min ago' },
  { initials: 'DH', name: 'David H.', location: 'Birmingham', job: 'Flat Roof Repair', age: '8 min ago' },
  { initials: 'TR', name: 'Tom R.', location: 'Bristol', job: 'Chimney Repointing', age: '12 min ago' },
  { initials: 'LW', name: 'Lisa W.', location: 'Sheffield', job: 'Full Roof & Gutters', age: '19 min ago' },
  { initials: 'PB', name: 'Paul B.', location: 'Liverpool', job: 'New Roof Installation', age: '24 min ago' },
  { initials: 'AM', name: 'Andrew M.', location: 'Glasgow', job: 'Slate Roof Repair', age: '31 min ago' },
  { initials: 'RJ', name: 'Rachel J.', location: 'Nottingham', job: 'Roof Inspection & Report', age: '38 min ago' },
]

const miniStats = [
  { value: '47', label: 'Avg leads / month' },
  { value: '< 48h', label: 'Time to first lead' },
  { value: '£0', label: 'Cost per lead after guarantee' },
]

export default function LiveProof() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % allLeads.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  const visible = [0, 1, 2, 3, 4].map((i) => allLeads[(offset + i) % allLeads.length])

  return (
    <section className="py-20 md:py-32 bg-bgPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — description + mini stats */}
          <AnimatedSection>
            <div className="inline-flex items-center bg-white/[0.06] border border-white/[0.12] rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Live System</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              Leads arriving for our clients{' '}
              <em className="font-serif italic text-brand not-italic font-normal">right now.</em>
            </h2>
            <p className="text-textMuted leading-relaxed mb-10 text-lg">
              Every notification you see is a real homeowner who just filled in their details on
              one of our client&apos;s branded landing pages — sent exclusively to that roofer.
              No sharing. No auction. No one else calling the same lead.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {miniStats.map((s, i) => (
                <div
                  key={i}
                  className="bg-bgCard rounded-2xl p-5 border border-white/10 text-center"
                  style={{ boxShadow: '0 0 30px rgba(125,212,212,0.06)' }}
                >
                  <div className="text-2xl font-black text-brand mb-1 tabular-nums">{s.value}</div>
                  <div className="text-xs text-textMuted leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — live feed */}
          <AnimatedSection delay={150}>
            <div>
              {/* LIVE indicator */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest">
                  Live — Leads coming in now
                </span>
              </div>

              {/* Notification cards */}
              <div className="space-y-2.5">
                {visible.map((lead, i) => (
                  <div
                    key={`${offset}-${i}`}
                    className="flex items-center gap-4 bg-bgCard border border-white/10 rounded-xl px-5 py-4 transition-all duration-500"
                    style={{ opacity: Math.max(0.25, 1 - i * 0.17) }}
                  >
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-black text-black">{lead.initials}</span>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-sm font-semibold text-white">{lead.name}</span>
                        <span className="text-textMuted text-xs">· {lead.location}</span>
                      </div>
                      <p className="text-xs text-textMuted truncate">{lead.job}</p>
                    </div>

                    {/* Right side */}
                    <div className="flex-shrink-0 flex flex-col items-end gap-1">
                      {i === 0 && (
                        <span className="bg-brand/20 border border-brand/40 text-brand text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                          New
                        </span>
                      )}
                      <span className="text-textMuted text-[10px]">{lead.age}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-textMuted text-xs mt-5 text-center opacity-60">
                Names and locations are illustrative — client lead data is kept private.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
