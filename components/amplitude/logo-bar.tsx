"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const logos = ["Allegro", "mBank", "PKO BP", "InPost", "Empik", "Docplanner"]

export function LogoBar() {
  const { t } = useI18n()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-amp-gray-10 py-10 px-6 lg:px-16"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.1em] text-amp-gray-60 text-center mb-7">
        {t.logoBar.label}
      </div>
      <div className="flex justify-center items-center gap-8 lg:gap-12 flex-wrap">
        {logos.map((logo, i) => (
          <motion.span
            key={logo}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="h-7 bg-amp-gray-30 px-5 rounded text-xs font-bold text-amp-gray-70 flex items-center uppercase tracking-[0.06em]"
          >
            {logo}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
