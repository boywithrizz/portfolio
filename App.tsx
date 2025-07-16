"use client"

import { ThemeProvider } from './components/ThemeProvider'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ServicesSection } from './components/ServicesSection'
import { PortfolioSection } from './components/PortfolioSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { SpecialOfferSection } from './components/SpecialOfferSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <SpecialOfferSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}