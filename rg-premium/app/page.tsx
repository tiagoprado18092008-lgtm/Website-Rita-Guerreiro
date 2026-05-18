import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Hero from '@/components/home/Hero'
import StatsStrip from '@/components/home/StatsStrip'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyUs from '@/components/home/WhyUs'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'

export default function HomePage() {
  return (
    <>
      <Nav transparent />
      <main>
        <Hero />
        <StatsStrip />
        <ServicesOverview />
        <WhyUs />
        <Testimonials />
        <HomeCTA />
      </main>
      <Footer />
    </>
  )
}
