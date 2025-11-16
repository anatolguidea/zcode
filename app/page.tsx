import { Hero } from "@/components/sections/Hero"
import { FeaturesSection } from "@/components/sections/Features"
import { PricingSection } from "@/components/sections/Pricing"
import { PortfolioSection } from "@/components/sections/Portfolio"
import { ServicesSection } from "@/components/sections/Services"
import { ProcessSection } from "@/components/sections/Process"
import { AboutSection } from "@/components/sections/About"
import { FAQSection } from "@/components/sections/FAQ"
import { ContactSection } from "@/components/sections/Contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <PortfolioSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}

