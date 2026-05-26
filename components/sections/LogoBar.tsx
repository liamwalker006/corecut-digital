const logos = [
  'Peak Roofing',
  'Clearline Roofing',
  'ProClean Exteriors',
  'Summit Roofing Co',
  'Apex Gutters',
  'BrightWash UK',
  'SkyLine Roofing',
  'CleanCut Exteriors',
]

const allLogos = [...logos, ...logos]

export default function LogoBar() {
  return (
    <section className="py-12 bg-bgPrimary border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-xs font-semibold text-textMuted uppercase tracking-widest">
          Trusted by Roofing &amp; Exterior Cleaning Companies Across the UK
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {allLogos.map((logo, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 text-white/30 font-semibold text-sm uppercase tracking-widest mx-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
