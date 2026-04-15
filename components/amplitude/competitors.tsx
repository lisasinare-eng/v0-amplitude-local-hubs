"use client"

import { motion } from "framer-motion"
import { useI18n, type Region } from "@/lib/i18n"

const regionLinks: { id: Region; flag: string; label: string }[] = [
  { id: "pl", flag: "🇵🇱", label: "CEE / PL" },
  { id: "ru", flag: "🇷🇺", label: "CIS / RU" },
  { id: "ar", flag: "🇸🇦", label: "MEA / AR" },
]

export function Competitors() {
  const { t, region, setRegion } = useI18n()

  return (
    <>
      {/* Region switcher backlinks */}
      <div className="bg-amp-gray-10 border-y border-amp-gray-20 py-4 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto flex items-center gap-3 flex-wrap">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-amp-gray-50 mr-1">View region:</span>
          {regionLinks.map((r) => (
            <button
              key={r.id}
              onClick={() => setRegion(r.id)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                region === r.id
                  ? "bg-amp-blue text-white border-amp-blue"
                  : "bg-white text-amp-gray-60 border-amp-gray-20 hover:border-amp-blue hover:text-amp-blue"
              }`}
            >
              <span>{r.flag}</span>
              <span>{r.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Competitor banner — white */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border-b border-amp-gray-20 py-12 px-6 lg:px-16"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-[600px]">
            <h3 className="text-2xl lg:text-[28px] font-bold text-amp-gray-100 mb-2.5">
              {t.competitors.title}
            </h3>
            <p className="text-[15px] text-amp-gray-60 leading-relaxed">
              {t.competitors.description}
            </p>
          </div>
          
            href="#"
            className="flex-shrink-0 px-8 py-3.5 bg-amp-blue text-white text-[15px] font-semibold rounded-md hover:bg-[#0044CC] transition-colors duration-200"
          >
            {t.competitors.cta}
          </a>
        </div>
      </motion.div>
    </>
  )
}
