import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServiceCards from '@/components/sections/ServiceCards'
import GoogleReviews from '@/components/sections/GoogleReviews'
import GalleryGrid from '@/components/sections/GalleryGrid'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CTABanner from '@/components/sections/CTABanner'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceCards />
      <GalleryGrid title="Unsere Referenzen" subtitle="Ausgewählte Projekte aus unserer Werkstatt. Möbel, Türen, Innenausbau und Außenarbeiten." />
      <GoogleReviews light />
      <CTABanner />
      <FAQAccordion />
      <ContactSection />
    </>
  )
}
