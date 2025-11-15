import { Hero } from "@/components/sections/Hero"
import { PricingSection } from "@/components/sections/Pricing"
import { PortfolioSection } from "@/components/sections/Portfolio"
import { ServicesSection } from "@/components/sections/Services"
import { AboutSection } from "@/components/sections/About"
import { ContactSection } from "@/components/sections/Contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <PricingSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}

