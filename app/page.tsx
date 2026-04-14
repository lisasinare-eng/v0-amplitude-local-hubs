"use client"

import { useState } from "react"
import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/amplitude/navbar"
import { Hero } from "@/components/amplitude/hero"
import { LogoBar } from "@/components/amplitude/logo-bar"
import { Stats } from "@/components/amplitude/stats"
import { GDPRCallout } from "@/components/amplitude/gdpr-callout"
import { CaseStudies } from "@/components/amplitude/case-studies"
import { Competitors } from "@/components/amplitude/competitors"
import { Features } from "@/components/amplitude/features"
import { Events } from "@/components/amplitude/events"
import { CTASection } from "@/components/amplitude/cta-section"
import { Footer } from "@/components/amplitude/footer"
import { RegistrationModal } from "@/components/amplitude/registration-modal"

function AmplitudePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState("")

  const handleRegisterClick = (eventName: string) => {
    setSelectedEvent(eventName)
    setModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <LogoBar />
      <Stats />
      <GDPRCallout />
      <CaseStudies />
      <Competitors />
      <Features />
      <Events onRegisterClick={handleRegisterClick} />
      <CTASection />
      <Footer />

      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        eventName={selectedEvent}
      />
    </main>
  )
}

export default function Page() {
  return (
    <I18nProvider>
      <AmplitudePage />
    </I18nProvider>
  )
}
