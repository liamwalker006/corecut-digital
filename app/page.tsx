import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import TrustBar from '@/components/sections/TrustBar'
import LiveProof from '@/components/sections/LiveProof'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import HowItWorks from '@/components/sections/HowItWorks'
import VideoTestimonials from '@/components/sections/VideoTestimonials'
import Results from '@/components/sections/Results'
import Comparison from '@/components/sections/Comparison'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoTestimonials />
      <StatsBar />
      <TrustBar />
      <LiveProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <Results />
      <Comparison />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
