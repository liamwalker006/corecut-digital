import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CoreCut Digital — Exclusive Roofing Leads via Meta Ads',
  description:
    'The #1 lead generation system for UK roofers. Get 30–60 exclusive roofing enquiries every month via Meta ads.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${instrumentSerif.variable} bg-bgPrimary text-textPrimary antialiased`}
      >
        {/* Ambient background glow — fixed, stays in place as user scrolls */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ zIndex: 0 }}>
          <div style={{
            position: 'absolute', top: '-20%', left: '-15%',
            width: '900px', height: '700px', borderRadius: '50%',
            background: 'rgba(125, 212, 212, 0.07)',
            filter: 'blur(120px)',
            mixBlendMode: 'screen',
          }} />
          <div style={{
            position: 'absolute', top: '30%', right: '-20%',
            width: '700px', height: '600px', borderRadius: '50%',
            background: 'rgba(125, 212, 212, 0.05)',
            filter: 'blur(150px)',
            mixBlendMode: 'screen',
          }} />
          <div style={{
            position: 'absolute', bottom: '-10%', left: '25%',
            width: '600px', height: '500px', borderRadius: '50%',
            background: 'rgba(125, 212, 212, 0.04)',
            filter: 'blur(130px)',
            mixBlendMode: 'screen',
          }} />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
