"use client"

import { motion } from "framer-motion"
import { useI18n, type Locale, type Region } from "@/lib/i18n"
import { AmplitudeLogo } from "./amplitude-logo"

const regions: { id: Region; flag: string; label: string }[] = [
  { id: "pl", flag: "🇵🇱", label: "Poland" },
  { id: "ru", flag: "🇷🇺", label: "Russia" },
  { id: "ar", flag: "🇸🇦", label: "Arabia" },
]

export function Navbar() {
  const { locale, setLocale, t, region, setRegion } = useI18n()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-xl border-b border-amp-gray-80"
      dir="ltr"
    >
      <div className="border-b border-amp-gray-90 px-6 lg:px-16 max-w-[1400px] mx-auto flex items-center gap-2 h-9">
        <span className="text-[11px] text-amp-gray-60 font-semibold uppercase tracking-widest mr-2">Region</span>
        {regions.map((r) => (
          <button
            key={r.id}
            onClick={() => setRegion(r.id)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold transition-all duration-200 ${
              region === r.id ? "bg-amp-blue text-white" : "text-amp-gray-50 hover:text-white hover:bg-amp-gray-80"
            }`}
          >
            <span>{r.flag}</span>
            <span>{r.label}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between h-16 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <AmplitudeLogo className="h-7" />
        <ul className="hidden lg:flex items-center gap-8">
          {[t.nav.products, t.nav.solutions, t.nav.customers, t.nav.analytics, t.nav.pricing].map((item) => (
            <li key={item}>
              <a href="#" className="text-amp-gray-30 text-sm font-medium hover:text-white transition-colors duration-200">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="flex bg-amp-gray-80 rounded-md overflow-hidden">
            <button onClick={() => setLocale("primary")} className={`px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${locale === "primary" ? "bg-white text-black" : "text-amp-gray-40 hover:text-white"}`}>{t.localeName}</button>
            <button onClick={() => setLocale("en")} className={`px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${locale === "en" ? "bg-white text-black" : "text-amp-gray-40 hover:text-white"}`}>EN</button>
          </div>
          <a href="#" className="hidden sm:inline-block px-5 py-2.5 text-white text-sm font-semibold border border-amp-gray-60 rounded-md hover:border-white transition-colors duration-200">{t.nav.login}</a>
          <a href="#" className="px-5 py-2.5 bg-amp-blue text-white text-sm font-semibold rounded-md hover:bg-[#0044CC] transition-colors duration-200">{t.nav.startFree}</a>
        </div>
      </div>
    </motion.nav>
  )
}
