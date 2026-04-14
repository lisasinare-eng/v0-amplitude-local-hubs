"use client"

import { motion } from "framer-motion"
import { Filter, Users, FlaskConical, ShieldCheck, Sparkles, Cable } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const icons = [Filter, Users, FlaskConical, ShieldCheck, Sparkles, Cable]

export function Features() {
  const { t } = useI18n()

  return (
    <section className="bg-amp-gray-10 py-14 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-semibold tracking-[0.1em] uppercase text-amp-blue mb-3">
            {t.features.eyebrow}
          </div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-black leading-tight mb-4">
            {t.features.title}
          </h2>
          <p className="text-[17px] text-amp-gray-60 leading-relaxed max-w-[600px] mb-8">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-2"
              >
                <div className="w-11 h-11 bg-amp-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-amp-blue-light" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-amp-gray-60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
