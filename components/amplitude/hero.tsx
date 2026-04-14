"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const proofLogos = ["Allegro", "mBank", "OLX", "Booksy"]

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative flex items-center pt-28 pb-16 px-6 lg:px-16 overflow-hidden bg-black">
      {/* Background Glows */}
      <div className="absolute right-[-100px] top-[-80px] w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_rgba(0,82,242,0.15)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute left-[-50px] bottom-[-100px] w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(105,128,255,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[700px]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.1em] uppercase text-amp-blue-light mb-5"
        >
          {t.hero.eyebrow}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-white mb-6"
        >
          {t.hero.title}{" "}
          <span className="text-amp-blue-light">{t.hero.titleHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-amp-gray-30 leading-relaxed mb-8 max-w-[560px]"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#"
            className="px-7 py-3.5 bg-amp-blue text-white text-[15px] font-semibold rounded-md hover:bg-[#0044CC] transition-colors duration-200"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#"
            className="px-7 py-3.5 text-white text-[15px] font-semibold border border-amp-gray-60 rounded-md hover:border-white transition-colors duration-200"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <span className="text-[13px] text-amp-gray-50 font-medium">
            {t.hero.proofLine}
          </span>
          <div className="flex flex-wrap gap-4">
            {proofLogos.map((logo) => (
              <span
                key={logo}
                className="h-[22px] bg-amp-gray-70 rounded px-3 text-[11px] font-bold text-amp-gray-30 flex items-center uppercase tracking-[0.05em]"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
