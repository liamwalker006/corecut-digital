'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Play, X } from 'lucide-react'

// Real client interviews filmed Oct/Nov 2026. Thumbnails show Owen with the roofer; the hook on each
// thumbnail is a number the roofer says in their video.
const testimonials = [
  { slug: 'daniel-rsc-developments', name: 'Daniel', company: 'RSC Developments' },
  { slug: 'rocky-tiptop-roofing', name: 'Rocky', company: 'Tiptop Roofing & Building' },
  { slug: 'jonjo-js-roofing', name: 'Jonjo', company: 'JS Roofing' },
  { slug: 'kain-ksh-roofing', name: 'Kain', company: 'KSH Roofing' },
  { slug: 'alex-homecrest-solutions', name: 'Alex', company: 'Homecrest Solutions' },
]
type T = (typeof testimonials)[number]

function Player({ t, onClose }: { t: T; onClose: () => void }) {
  useEffect(() => {
    const key = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', key)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', key)
      document.body.style.overflow = overflow
    }
  }, [onClose])

  // rendered on <body>: the hero's fade-in transform would otherwise trap a fixed overlay inside it
  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${t.name}, ${t.company}: video testimonial`}
    >
      <div className="relative h-full max-h-[88vh] aspect-[9/16] max-w-full" onClick={(e) => e.stopPropagation()}>
        <video
          src={`/testimonials/${t.slug}.mp4`}
          poster={`/testimonials/${t.slug}.jpg`}
          autoPlay
          controls
          playsInline
          className="w-full h-full rounded-2xl bg-black object-contain"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>,
    document.body,
  )
}

// Sits in the hero where the demo video was: a heading line, then the sliding bar running edge to edge.
export default function VideoTestimonials() {
  const [open, setOpen] = useState<T | null>(null)

  return (
    <div id="video-testimonials" className="w-full">
      <p className="text-lg md:text-2xl font-bold mb-4 md:mb-6 px-4 text-center">
        See what other roofers{' '}
        <em className="font-serif italic text-brand not-italic font-normal">have to say about us.</em>
      </p>

      {/* sliding bar: three copies of the set, moved left by one copy per loop so it never jumps */}
      <div className="group relative motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div
          className={`flex w-max animate-slide group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
            open ? '[animation-play-state:paused]' : ''
          }`}
        >
          {[0, 1, 2].map((copy) =>
            testimonials.map((t) => (
              <button
                key={`${copy}-${t.slug}`}
                type="button"
                onClick={() => setOpen(t)}
                tabIndex={copy === 0 ? 0 : -1}
                aria-hidden={copy !== 0}
                aria-label={`Play ${t.name}'s testimonial (${t.company})`}
                className="relative flex-shrink-0 w-[210px] sm:w-[240px] md:w-[270px] aspect-[9/16] mr-4 md:mr-5 rounded-2xl overflow-hidden border border-white/10 bg-bgCard shadow-[0_0_40px_rgba(125,212,212,0.08)] group/card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/testimonials/${t.slug}-thumb.jpg`}
                  alt={`Owen from CoreCut with ${t.name} from ${t.company}`}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <span className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand/95 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover/card:scale-110">
                  <Play className="w-6 h-6 md:w-7 md:h-7 text-black fill-black ml-1" />
                </span>
              </button>
            )),
          )}
        </div>
      </div>

      {open && <Player t={open} onClose={() => setOpen(null)} />}
    </div>
  )
}
