import Link from 'next/link'
import Image from 'next/image'
import { BOOKING_URL } from '@/lib/constants'

const quickLinks = [
  { label: 'Home', href: '/', external: false },
  { label: 'How It Works', href: '#how-it-works', external: false },
  { label: 'Results', href: '#results', external: false },
  { label: 'Book a Call', href: BOOKING_URL, external: true },
]

export default function Footer() {
  return (
    <footer className="bg-bgSurface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/Logo.jpg"
                alt="CoreCut Digital"
                width={48}
                height={48}
                className="object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <p className="text-textMuted text-sm leading-relaxed">
              The exclusive lead system for UK roofers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-textMuted hover:text-brand transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-textMuted hover:text-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-textMuted">info@corecutdigital.co.uk</li>
              <li className="text-sm text-textMuted">Based in the UK</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-textMuted text-xs">© 2025 CoreCut Digital. All rights reserved.</p>
          <p className="text-textMuted text-xs">corecutdigital.co.uk</p>
        </div>
      </div>
    </footer>
  )
}
