"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

export function Stats() {
  const { t } = useI18n()

  const stats = [
    { value: t.stats.gdpr, label: t.stats.gdprLabel },
    { value: t.stats.retention, label: t.stats.retentionLabel },
    { value: t.stats.customers, label: t.stats.customersLabel },
    { value: t.stats.rank, label: t.stats.rankLabel },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-amp-gray-80">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.value}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-black p-6 lg:p-8 text-center"
        >
          <div className="text-4xl lg:text-5xl font-bold text-amp-blue-light leading-none mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-amp-gray-50 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
