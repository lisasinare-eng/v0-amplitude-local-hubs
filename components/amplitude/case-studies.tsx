"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const cardGradients = [
  "bg-gradient-to-br from-blue-500 to-blue-700",
  "bg-gradient-to-br from-violet-500 to-purple-700",
  "bg-gradient-to-br from-indigo-500 to-violet-700",
]

export function CaseStudies() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-14 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-semibold tracking-[0.1em] uppercase text-amp-blue mb-3">
            {t.caseStudies.eyebrow}
          </div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-amp-gray-100 leading-tight mb-4">
            {t.caseStudies.title}
          </h2>
          <p className="text-[17px] text-amp-gray-60 leading-relaxed max-w-[600px] mb-8">
            {t.caseStudies.subtitle}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.caseStudies.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-amp-gray-20 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`h-40 flex items-end p-5 ${cardGradients[i]}`}>
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-xs font-semibold text-white">
                  {card.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-amp-blue leading-none mb-1.5">{card.stat}</div>
                <div className="text-[13px] text-amp-gray-60 font-medium mb-4">{card.statLabel}</div>
                <p className="text-sm text-amp-gray-70 leading-relaxed italic mb-4">&quot;{card.quote}&quot;</p>
                <div className="text-xs font-semibold text-amp-gray-50 uppercase tracking-[0.06em]">{card.author}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
