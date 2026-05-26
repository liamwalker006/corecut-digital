'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { BOOKING_URL } from '@/lib/constants'

const desktopLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
  { label: 'FAQ', href: '#faq' },
]

const mobileLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
  { label: 'FAQs', href: '#faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ─── Mobile ─── */}

      {/* Full-screen backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Pill navbar — fixed, always visible on scroll */}
      <div className="md:hidden fixed top-3 left-4 right-4 z-30">
        <div className="rounded-2xl bg-black/90 backdrop-blur-md border border-white/[0.12] px-4 py-3 flex items-center justify-between shadow-lg">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Logo.jpg"
              alt="CoreCut Digital"
              width={52}
              height={52}
              className="h-10 w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="p-1 text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Liquid glass overlay card */}
      <div
        className={`md:hidden fixed inset-x-4 top-4 z-50 rounded-3xl overflow-hidden transition-all duration-200 ease-out ${
          menuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        {/* Card header */}
        <div className="px-5 py-4 flex items-center justify-between border-b border-white/10">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0">
            <Image
              src="/Logo.jpg"
              alt="CoreCut Digital"
              width={52}
              height={52}
              className="h-10 w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1 text-white"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        {mobileLinks.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`block px-6 py-4 text-white text-base font-medium hover:bg-white/5 transition-colors ${
              i < mobileLinks.length - 1 ? 'border-b border-white/[0.08]' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Book a Call */}
        <div className="mx-4 mb-4 mt-2">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-brand text-black font-bold rounded-2xl py-4 text-center text-base"
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* ─── Desktop floating pill ─── */}
      <header className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-50 items-center justify-between bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Logo.jpg"
              alt="CoreCut Digital"
              width={52}
              height={52}
              className="h-9 w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </Link>

          <nav className="flex items-center gap-6">
            {desktopLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-textMuted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-brand/90 transition-all duration-200 hover:scale-105"
          >
            Book a Call
          </a>
      </header>
    </>
  )
}
