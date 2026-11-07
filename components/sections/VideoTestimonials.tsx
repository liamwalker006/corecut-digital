'use client'

import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SectionPill } from '@/components/ui/SectionPill'

// Real client interviews filmed Oct/Nov 2026. Quotes and numbers are the roofers' own words from the videos.
const testimonials = [
  {
    slug: 'daniel-rsc-developments',
    name: 'Daniel',
    company: 'RSC Developments',
    area: 'Torbay',
    stat: '3–4 leads a day',
    quote: 'It was more than what I expected… the leads just kept coming through.',
  },
  {
    slug: 'rocky-tiptop-roofing',
    name: 'Rocky',
    company: 'Tiptop Roofing & Building',
    area: 'Barnstaple, North Devon',
    stat: 'Nearly 90 enquiries',
    quote: 'Within my first week I had over 10, and converted I think half of them.',
  },
  {
    slug: 'jonjo-js-roofing',
    name: 'Jonjo',
    company: 'JS Roofing',
    area: 'Somerset & Wiltshire',
    stat: 'Appointments booked for him',
    quote: "We haven't got to call anyone… we just turn up to the job, look and quote it.",
  },
  {
    slug: 'kain-ksh-roofing',
    name: 'Kain',
    company: 'KSH Roofing',
    area: 'South of England',
    stat: '£60k+ of work',
    quote: "We're booked up for another two and a half, three months now.",
  },
  {
    slug: 'alex-homecrest-solutions',
    name: 'Alex',
    company: 'Homecrest Solutions',
    area: 'South West',
    stat: '£85k single job',
    quote: "I've still had constant work all year, thanks to you and your company.",
  },
]

function VideoCard({ slug, name, company }: { slug: string; name: string; company: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  const play = () => {
    const v = ref.current
    if (!v) return
    // only one testimonial plays at a time
    document.querySelectorAll<HTMLVideoElement>('video[data-testimonial]').forEach((o) => {
      if (o !== v) o.pause()
    })
    setStarted(true)
    v.play()
  }

  return (
    <div className="relative w-full max-w-[340px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-bgCard shadow-[0_0_40px_rgba(125,212,212,0.08)]">
      <video
        ref={ref}
        data-testimonial
        src={`/testimonials/${slug}.mp4`}
        poster={`/testimonials/${slug}.jpg`}
        preload="none"
        playsInline
        controls={started}
        onPlay={(e) => {
          document.querySelectorAll<HTMLVideoElement>('video[data-testimonial]').forEach((o) => {
            if (o !== e.currentTarget) o.pause()
          })
        }}
        className="w-full h-full object-cover"
        aria-label={`Video testimonial from ${name}, ${company}`}
      />
      {!started && (
        <button
          type="button"
          onClick={play}
          className="absolute inset-0 flex items-center justify-center group"
          aria-label={`Play ${name}'s testimonial`}
        >
          <span className="w-20 h-20 rounded-full bg-brand flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
            <Play className="w-8 h-8 text-black fill-black ml-1" />
          </span>
        </button>
      )}
    </div>
  )
}

export default function VideoTestimonials() {
  return (
    <section className="py-20 md:py-32 bg-bgPrimary" id="video-testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <SectionPill>Video Testimonials</SectionPill>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            See what other roofers{' '}
            <em className="font-serif italic text-brand not-italic font-normal">have to say about us.</em>
          </h2>
          <p className="text-textMuted text-lg">
            Real CoreCut clients, filmed on site. Tap a video to hear it from them.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-16 md:gap-24">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.slug}>
              <div
                className={`flex flex-col items-center gap-8 md:gap-14 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                <div className="w-full md:w-1/2">
                  <VideoCard slug={t.slug} name={t.name} company={t.company} />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-brand text-sm font-bold uppercase tracking-widest mb-3">{t.stat}</p>
                  <blockquote className="text-2xl md:text-3xl font-bold leading-snug mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-textMuted text-sm">
                    {t.company} · {t.area}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
