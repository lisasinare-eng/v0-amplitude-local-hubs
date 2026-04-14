"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Locale = "pl" | "en"

interface Translations {
  nav: {
    products: string
    solutions: string
    customers: string
    analytics: string
    pricing: string
    login: string
    startFree: string
  }
  hero: {
    eyebrow: string
    title: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    proofLine: string
  }
  logoBar: {
    label: string
  }
  stats: {
    gdpr: string
    gdprLabel: string
    retention: string
    retentionLabel: string
    customers: string
    customersLabel: string
    rank: string
    rankLabel: string
  }
  gdprCallout: {
    title: string
    description: string
    cta: string
  }
  caseStudies: {
    eyebrow: string
    title: string
    subtitle: string
    cards: {
      tag: string
      stat: string
      statLabel: string
      quote: string
      author: string
    }[]
  }
  competitors: {
    title: string
    description: string
    cta: string
  }
  features: {
    eyebrow: string
    title: string
    subtitle: string
    items: {
      icon: string
      title: string
      description: string
    }[]
  }
  events: {
    eyebrow: string
    title: string
    subtitle: string
    register: string
    items: {
      month: string
      day: string
      type: string
      name: string
      location: string
    }[]
  }
  cta: {
    title: string
    subtitle: string
    primary: string
    secondary: string
  }
  footer: {
    privacy: string
    terms: string
    gdpr: string
    docs: string
    support: string
    copyright: string
  }
  modal: {
    title: string
    subtitle: string
    firstName: string
    lastName: string
    email: string
    company: string
    submit: string
    cancel: string
    success: string
    successMessage: string
  }
}

const translations: Record<Locale, Translations> = {
  pl: {
    nav: {
      products: "Produkty",
      solutions: "Rozwiazania",
      customers: "Klienci",
      analytics: "Analityka",
      pricing: "Cennik",
      login: "Zaloguj sie",
      startFree: "Zacznij za darmo",
    },
    hero: {
      eyebrow: "Dla rynkow Polski i Europy Srodkowo-Wschodniej",
      title: "Twoj produkt cyfrowy,",
      titleHighlight: "twoja przewaga",
      subtitle:
        "Amplitude pomaga polskim i srodkowoeuropejskim zespolom produktowym podejmowac decyzje oparte na danych, budowac lojalnosc uzytkownikow i wyprzedzac lokalna konkurencje.",
      ctaPrimary: "Zacznij za darmo",
      ctaSecondary: "Obejrzyj demo",
      proofLine: "Zaufaly nam wiodace firmy regionu",
    },
    logoBar: {
      label: "Wsrod naszych klientow w regionie",
    },
    stats: {
      gdpr: "GDPR",
      gdprLabel: "W pelni zgodny z RODO i europejskim prawem o ochronie danych",
      retention: "35%",
      retentionLabel: "wzrost retencji u klientow w Polsce i CEE",
      customers: "4,700+",
      customersLabel: "klientow na calym swiecie",
      rank: "#1",
      rankLabel: "G2 Winter 2026 - analityka produktowa",
    },
    gdprCallout: {
      title: "Zgodnosc z RODO - bez kompromisow",
      description:
        "Amplitude spelnia wymogi RODO, CCPA i EU Data Residency. Dane Twoich uzytkownikow pozostaja w UE. Nasze DPA jest dostepne od reki. Zadnych niespodzianek przy audycie.",
      cta: "Pobierz DPA",
    },
    caseStudies: {
      eyebrow: "Historie sukcesu",
      title: "Wyniki firm z Polski i CEE",
      subtitle: "Prawdziwe liczby od zespolow, ktore przestaly zgadywac i zaczely wiedziec.",
      cards: [
        {
          tag: "E-commerce / Marketplace",
          stat: "+47%",
          statLabel: "powtorne zakupy kwartal do kwartalu",
          quote:
            "Amplitude dala nam wglad, ktorego Google Analytics 4 nigdy nie oferowalo. Rozumiemy zachowania kupujacych lepiej niz kiedykolwiek.",
          author: "VP Product, Polish Marketplace",
        },
        {
          tag: "Fintech / Bankowosc cyfrowa",
          stat: "+62%",
          statLabel: "aktywacja nowych klientow",
          quote:
            "Piwik PRO swietnie radzi sobie z prywatnoscia. Amplitude radzi sobie z pytaniem: dlaczego uzytkownicy rezygnuja z produktu w trzecim tygodniu?",
          author: "CPO, Neobank CEE",
        },
        {
          tag: "SaaS / HealthTech",
          stat: "3.1x",
          statLabel: "szybkosc eksperymentowania produktowego",
          quote:
            "Zanim wdrozylismy Amplitude, testy A/B trwaly miesiace. Teraz mamy wyniki w tygodnie i decyzje poparte danymi.",
          author: "Head of Growth, HealthTech PL",
        },
      ],
    },
    competitors: {
      title: "Dlaczego polskie zespoly przechodza z Piwik PRO i GA4",
      description:
        "Piwik PRO to swietny wybor dla zgodnosci z RODO. GA4 jest darmowe. Amplitude odpowiada na pytanie, ktorego inne narzedzia nie zadaja: dlaczego uzytkownicy zachowuja sie tak, jak sie zachowuja - i co z tym zrobic. Kohorty, sciezki, eksperymenty, predykcje. Wszystko w jednym miejscu, bez SQL i eksportow.",
      cta: "Porownaj narzedzia",
    },
    features: {
      eyebrow: "Mozliwosci platformy",
      title: "Wszystko, czego potrzebuje zespol produktowy",
      subtitle: "Od pierwszego kontaktu do lojalnego uzytkownika - Amplitude pokazuje cala sciezke.",
      items: [
        {
          icon: "funnel",
          title: "Lejki i konwersje",
          description:
            "Znajdz miejsca, w ktorych tracisz uzytkownikow. Segmentuj wedlug dowolnego kryterium. Dzialaj szybko.",
        },
        {
          icon: "group",
          title: "Analiza kohortowa",
          description:
            "Sledz zachowania grup uzytkownikow w czasie. Zrozum, co napedza retencje w Twoim produkcie.",
        },
        {
          icon: "science",
          title: "Testy A/B",
          description:
            "Uruchamiaj eksperymenty i analizuj wyniki bezposrednio w Amplitude - bez dodatkowych narzedzi.",
        },
        {
          icon: "verified_user",
          title: "Prywatnosc i zgodnosc",
          description:
            "Pelna zgodnosc z RODO. Data residency w UE. DPA dostepne natychmiast. Audyt bez stresu.",
        },
        {
          icon: "smart_toy",
          title: "AI Insights",
          description:
            "Amplitude AI automatycznie wykrywa anomalie i podpowiada, na co zwrocic uwage - bez recznego przeszukiwania danych.",
        },
        {
          icon: "integration_instructions",
          title: "Integracje",
          description:
            "Polacz sie z Segment, Braze, BigQuery i 200+ narzedziami. Dane tam, gdzie pracujesz.",
        },
      ],
    },
    events: {
      eyebrow: "Wydarzenia",
      title: "Spotkaj nas w regionie",
      subtitle: "Konferencje, meetupy i webinaria dla zespolow produktowych w Polsce i CEE.",
      register: "Rejestracja",
      items: [
        {
          month: "MAJ",
          day: "29",
          type: "Konferencja",
          name: "InfoShare 2025 - Gdansk",
          location: "Gdansk, Amber Expo",
        },
        {
          month: "CZE",
          day: "11",
          type: "Webinar - Online",
          name: "Amplitude Live: Retencja w polskim e-commerce",
          location: "Zoom - po polsku",
        },
        {
          month: "WRZ",
          day: "24",
          type: "Szczyt branzowy",
          name: "SaaS Mag Summit Warsaw 2025",
          location: "Warszawa, Warsaw Spire",
        },
        {
          month: "PAZ",
          day: "16",
          type: "Meetup",
          name: "Amplitude Meetup Warsaw - Product Analytics Hardtalk",
          location: "Warszawa, Hub:raum",
        },
      ],
    },
    cta: {
      title: "Zacznij za darmo juz dzis",
      subtitle: "Pelny dostep do platformy. Bez karty kredytowej. Zgodnosc z RODO w standardzie.",
      primary: "Wyprobuj za darmo",
      secondary: "Skontaktuj sie z nami",
    },
    footer: {
      privacy: "Polityka prywatnosci",
      terms: "Warunki korzystania",
      gdpr: "Zgodnosc z RODO",
      docs: "Dokumentacja",
      support: "Wsparcie",
      copyright: "2025 Amplitude, Inc. Wszelkie prawa zastrzezone.",
    },
    modal: {
      title: "Rejestracja na wydarzenie",
      subtitle: "Wypelnij formularz, aby zarezerwowac miejsce",
      firstName: "Imie",
      lastName: "Nazwisko",
      email: "Email sluzbowy",
      company: "Firma",
      submit: "Zarejestruj sie",
      cancel: "Anuluj",
      success: "Sukces!",
      successMessage: "Rejestracja zostala przeslana. Sprawdz swoja skrzynke email.",
    },
  },
  en: {
    nav: {
      products: "Products",
      solutions: "Solutions",
      customers: "Customers",
      analytics: "Analytics",
      pricing: "Pricing",
      login: "Log in",
      startFree: "Start free",
    },
    hero: {
      eyebrow: "For Polish and Central & Eastern European markets",
      title: "Your digital product,",
      titleHighlight: "your advantage",
      subtitle:
        "Amplitude helps Polish and CEE product teams make data-driven decisions, build user loyalty, and stay ahead of local competition.",
      ctaPrimary: "Start free",
      ctaSecondary: "Watch demo",
      proofLine: "Trusted by leading companies in the region",
    },
    logoBar: {
      label: "Among our clients in the region",
    },
    stats: {
      gdpr: "GDPR",
      gdprLabel: "Fully compliant with GDPR and European data protection laws",
      retention: "35%",
      retentionLabel: "retention increase for clients in Poland and CEE",
      customers: "4,700+",
      customersLabel: "customers worldwide",
      rank: "#1",
      rankLabel: "G2 Winter 2026 - Product Analytics",
    },
    gdprCallout: {
      title: "GDPR compliance - no compromises",
      description:
        "Amplitude meets GDPR, CCPA, and EU Data Residency requirements. Your user data stays in the EU. Our DPA is available immediately. No audit surprises.",
      cta: "Download DPA",
    },
    caseStudies: {
      eyebrow: "Success stories",
      title: "Results from Poland and CEE companies",
      subtitle: "Real numbers from teams that stopped guessing and started knowing.",
      cards: [
        {
          tag: "E-commerce / Marketplace",
          stat: "+47%",
          statLabel: "repeat purchases quarter over quarter",
          quote:
            "Amplitude gave us insights that Google Analytics 4 never offered. We understand buyer behavior better than ever.",
          author: "VP Product, Polish Marketplace",
        },
        {
          tag: "Fintech / Digital Banking",
          stat: "+62%",
          statLabel: "new customer activation",
          quote:
            "Piwik PRO handles privacy well. Amplitude answers the question: why do users churn in week three?",
          author: "CPO, CEE Neobank",
        },
        {
          tag: "SaaS / HealthTech",
          stat: "3.1x",
          statLabel: "product experimentation velocity",
          quote:
            "Before Amplitude, A/B tests took months. Now we get results in weeks with data-backed decisions.",
          author: "Head of Growth, HealthTech PL",
        },
      ],
    },
    competitors: {
      title: "Why Polish teams switch from Piwik PRO and GA4",
      description:
        "Piwik PRO is great for GDPR compliance. GA4 is free. Amplitude answers the question others don't ask: why do users behave the way they do - and what to do about it. Cohorts, journeys, experiments, predictions. All in one place, no SQL or exports needed.",
      cta: "Compare tools",
    },
    features: {
      eyebrow: "Platform capabilities",
      title: "Everything a product team needs",
      subtitle: "From first touch to loyal user - Amplitude shows the entire journey.",
      items: [
        {
          icon: "funnel",
          title: "Funnels & Conversions",
          description:
            "Find where you lose users. Segment by any criteria. Act fast.",
        },
        {
          icon: "group",
          title: "Cohort Analysis",
          description:
            "Track user group behavior over time. Understand what drives retention in your product.",
        },
        {
          icon: "science",
          title: "A/B Testing",
          description:
            "Run experiments and analyze results directly in Amplitude - no additional tools needed.",
        },
        {
          icon: "verified_user",
          title: "Privacy & Compliance",
          description:
            "Full GDPR compliance. EU data residency. DPA available immediately. Stress-free audits.",
        },
        {
          icon: "smart_toy",
          title: "AI Insights",
          description:
            "Amplitude AI automatically detects anomalies and suggests what to pay attention to - no manual data digging.",
        },
        {
          icon: "integration_instructions",
          title: "Integrations",
          description:
            "Connect with Segment, Braze, BigQuery, and 200+ tools. Data where you work.",
        },
      ],
    },
    events: {
      eyebrow: "Events",
      title: "Meet us in the region",
      subtitle: "Conferences, meetups, and webinars for product teams in Poland and CEE.",
      register: "Register",
      items: [
        {
          month: "MAY",
          day: "29",
          type: "Conference",
          name: "InfoShare 2025 - Gdansk",
          location: "Gdansk, Amber Expo",
        },
        {
          month: "JUN",
          day: "11",
          type: "Webinar - Online",
          name: "Amplitude Live: Retention in Polish e-commerce",
          location: "Zoom - in Polish",
        },
        {
          month: "SEP",
          day: "24",
          type: "Industry Summit",
          name: "SaaS Mag Summit Warsaw 2025",
          location: "Warsaw, Warsaw Spire",
        },
        {
          month: "OCT",
          day: "16",
          type: "Meetup",
          name: "Amplitude Meetup Warsaw - Product Analytics Hardtalk",
          location: "Warsaw, Hub:raum",
        },
      ],
    },
    cta: {
      title: "Start free today",
      subtitle: "Full platform access. No credit card. GDPR compliance included.",
      primary: "Try for free",
      secondary: "Contact us",
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      gdpr: "GDPR Compliance",
      docs: "Documentation",
      support: "Support",
      copyright: "2025 Amplitude, Inc. All rights reserved.",
    },
    modal: {
      title: "Event Registration",
      subtitle: "Fill out the form to reserve your spot",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Work Email",
      company: "Company",
      submit: "Register",
      cancel: "Cancel",
      success: "Success!",
      successMessage: "Registration submitted. Check your email inbox.",
    },
  },
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pl")

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
