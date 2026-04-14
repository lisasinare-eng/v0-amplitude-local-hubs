"use client"

import { motion } from "framer-motion"
import { MapPin, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n"

interface EventsProps {
  onRegisterClick: (eventName: string) => void
}

export function Events({ onRegisterClick }: EventsProps) {
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
            {t.events.eyebrow}
          </div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-black leading-tight mb-4">
            {t.events.title}
          </h2>
          <p className="text-[17px] text-amp-gray-60 leading-relaxed max-w-[600px] mb-8">
            {t.events.subtitle}
          </p>
        </motion.div>

        {/* Events List */}
        <div className="flex flex-col gap-4">
          {t.events.items.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}
              className="bg-white border border-amp-gray-20 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-shadow"
            >
              {/* Date Block */}
              <div className="flex items-center gap-6">
                <div className="min-w-[56px] text-center bg-amp-blue rounded-lg py-2.5 px-3 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-[0.08em]">
                    {event.month}
                  </div>
                  <div className="text-[26px] font-bold leading-none">{event.day}</div>
                </div>

                {/* Event Info */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-amp-blue mb-1">
                    {event.type}
                  </div>
                  <div className="text-base font-semibold text-black mb-1">
                    {event.name}
                  </div>
                  <div className="text-[13px] text-amp-gray-60 flex items-center gap-1.5">
                    {event.location.includes("Zoom") ? (
                      <Globe className="w-3.5 h-3.5" />
                    ) : (
                      <MapPin className="w-3.5 h-3.5" />
                    )}
                    {event.location}
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <button
                onClick={() => onRegisterClick(event.name)}
                className="flex-shrink-0 px-5 py-2.5 bg-amp-blue text-white text-sm font-semibold rounded-md hover:bg-[#0044CC] transition-colors duration-200"
              >
                {t.events.register}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
