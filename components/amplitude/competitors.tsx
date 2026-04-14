"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

export function Competitors() {
  const { t } = useI18n()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-amp-dark-blue py-12 px-6 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-[600px]">
          <h3 className="text-2xl lg:text-[28px] font-bold text-white mb-2.5">
            {t.competitors.title}
          </h3>
          <p className="text-[15px] text-white/65 leading-relaxed">
            {t.competitors.description}
          </p>
        </div>
        <a
          href="#"
          className="flex-shrink-0 px-8 py-3.5 text-white text-[15px] font-semibold border-2 border-white/40 rounded-md hover:border-white transition-colors duration-200"
        >
          {t.competitors.cta}
        </a>
      </div>
    </motion.div>
  )
}
