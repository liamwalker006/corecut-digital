import AnimatedSection from '@/components/ui/AnimatedSection'
import { BOOKING_URL } from '@/lib/constants'
import VideoTestimonials from '@/components/sections/VideoTestimonials'

const avatars = [
  { initials: 'JR', bg: '#0c3535' },
  { initials: 'MT', bg: '#0e3a3a' },
  { initials: 'DH', bg: '#0a2e2e' },
  { initials: 'SR', bg: '#0f3f3f' },
  { initials: 'CW', bg: '#0d3030' },
]


export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center overflow-x-clip px-4 md:px-6 pt-24 pb-8 md:min-h-screen md:justify-center md:pt-28 md:pb-0"
      style={{
        background:
          'radial-gradient(ellipse 120% 50% at 50% -10%, #0a2a2a 0%, #051515 40%, #000000 70%)',
      }}
    >
      {/*
        Mobile order:  trust → headline → sub → testimonials slider → guarantee → CTA → micro-text
        Desktop order: trust → headline → sub → guarantee → CTA → micro-text → testimonials slider
        Controlled via CSS order-* on each child of the flex-col container.
      */}
      <AnimatedSection className="w-full max-w-2xl mx-auto flex flex-col items-center">

        {/* 1. Trust pill — order 1 both */}
        <div className="order-1 inline-flex items-center max-w-full overflow-hidden bg-white/5 border border-white/10 rounded-full px-3 py-2 md:px-5 md:py-3 gap-1.5 md:gap-3">
          {/* Avatars — smaller on mobile */}
          <div className="flex items-center flex-shrink-0">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black flex items-center justify-center text-[9px] md:text-[10px] font-bold text-white flex-shrink-0 ${
                  i > 0 ? '-ml-1.5 md:-ml-2' : ''
                }`}
                style={{ backgroundColor: avatar.bg }}
              >
                {avatar.initials}
              </div>
            ))}
          </div>
          <span className="w-px h-4 md:h-6 bg-white/20 flex-shrink-0" />
          <span className="text-yellow-400 text-xs md:text-sm tracking-tight flex-shrink-0">★★★★★</span>
          <span className="text-xs md:text-sm text-gray-300 whitespace-nowrap">Trusted by 50+ roofers</span>
        </div>

        {/* 2. Headline — order 2 both */}
        <h1 className="order-2 font-black text-4xl md:text-6xl leading-tight mt-4 md:mt-8">
          <span className="block">The lead generation</span>
          <span className="block">system UK roofers</span>
          <span className="block">
            <span className="font-serif italic text-brand">actually</span>{' '}
            <span>rely on.</span>
          </span>
        </h1>

        {/* 3. Subheadline — order 3 both */}
        <p className="order-3 mt-3 md:mt-4 text-base md:text-lg text-gray-400 max-w-sm md:max-w-lg mx-auto leading-relaxed">
          We handle everything from qualifying the homeowner to your criteria &amp; booking them in
          for an exclusive appointment. You just show up and close.
        </p>

        {/* 4 mobile / 7 desktop — video testimonials slider (replaces the VSL placeholder), full width of the screen */}
        <div className="order-4 md:order-7 mt-6 md:mt-14 w-screen max-w-none flex-shrink-0">
          <VideoTestimonials />
        </div>

        {/* 6 mobile / 5 desktop — CTA button */}
        <div className="order-6 md:order-5 mt-4 md:mt-8 w-full max-w-sm mx-auto">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-brand text-black font-bold py-4 text-base md:text-lg rounded-full hover:bg-brand/90 transition-all duration-200 hover:scale-[1.02]"
          >
            Book Your Free Demo Call →
          </a>
        </div>

        {/* 7 mobile / 6 desktop — Micro-text */}
        <p className="order-7 md:order-6 text-xs text-gray-600 mt-3">
          Free 30-min call · No obligation · No hard sell
        </p>

      </AnimatedSection>

    </section>
  )
}
