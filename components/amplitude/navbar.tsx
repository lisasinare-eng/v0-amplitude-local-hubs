"use client"

import { motion } from "framer-motion"
import { useI18n, type Locale } from "@/lib/i18n"

export function Navbar() {
  const { locale, setLocale, t } = useI18n()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-amp-gray-80"
    >
      <div className="flex items-center justify-between h-16 px-6 lg:px-16 max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
            <circle cx="16" cy="16" r="14" fill="#0052F2" />
            <path
              d="M16 8L22 20H10L16 8Z"
              fill="white"
            />
            <circle cx="16" cy="22" r="2" fill="white" />
          </svg>
          <span className="text-white font-semibold text-lg tracking-tight">Amplitude</span>
        </div>

        {/* Nav Links - Hidden on mobile */}
        <ul className="hidden lg:flex items-center gap-8">
          {[
            t.nav.products,
            t.nav.solutions,
            t.nav.customers,
            t.nav.analytics,
            t.nav.pricing,
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-amp-gray-30 text-sm font-medium hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Area */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex bg-amp-gray-80 rounded-md overflow-hidden">
            {(["PL", "EN"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang.toLowerCase() as Locale)}
                className={`px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  locale === lang.toLowerCase()
                    ? "bg-white text-black"
                    : "text-amp-gray-40 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <a
            href="#"
            className="hidden sm:inline-block px-5 py-2.5 text-white text-sm font-semibold border border-amp-gray-60 rounded-md hover:border-white transition-colors duration-200"
          >
            {t.nav.login}
          </a>
          <a
            href="#"
            className="px-5 py-2.5 bg-amp-blue text-white text-sm font-semibold rounded-md hover:bg-[#0044CC] transition-colors duration-200"
          >
            {t.nav.startFree}
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
