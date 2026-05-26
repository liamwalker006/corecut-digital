import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'

const clientLogos = [
  { name: 'TC Roofing', src: '/Logo-tc.jpg' },
  { name: 'Ridgeline Roofing', src: '/Logo-ridgeline.jpg' },
  { name: 'Red Dragon Roofing', src: '/Logo-reddragon.jpg' },
  { name: 'Moreland', src: '/Logo-moreland.jpg' },
  { name: 'LPA', src: '/Logo-lpa.jpg' },
  { name: 'EPS', src: '/Logo-eps.jpg' },
]

const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos]

export default function TrustBar() {
  return (
    <section className="py-10 md:py-12 bg-bgSurface border-y border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-textMuted mb-8">
            Trusted by 50+ UK roofing companies
          </p>

          {/* Always a single row: rating card left, marquee right */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* Google 5.0 rating card */}
            <div className="flex-shrink-0 bg-bgCard border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 flex flex-col items-center w-32 md:w-44">
              <div className="flex gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white font-black text-lg md:text-2xl leading-none">5.0</p>
              <p className="text-textMuted text-[8px] md:text-[9px] uppercase tracking-widest mt-1 font-semibold text-center">Google Reviews</p>
            </div>

            {/* Scrolling logo marquee */}
            <div className="flex-1 overflow-hidden relative">
              {/* Fade edges */}
              <div className="absolute inset-y-0 left-0 w-8 md:w-12 bg-gradient-to-r from-bgSurface to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 md:w-12 bg-gradient-to-l from-bgSurface to-transparent z-10 pointer-events-none" />

              <div className="flex w-max gap-4 md:gap-5 animate-marquee">
                {marqueeLogos.map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 h-14 md:h-16 w-28 md:w-36 relative bg-bgCard border border-white/10 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain p-2 md:p-3"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
