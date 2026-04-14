"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  const links = [
    t.footer.privacy,
    t.footer.terms,
    t.footer.gdpr,
    t.footer.docs,
    t.footer.support,
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-amp-gray-100 py-12 px-6 lg:px-16 border-t border-amp-gray-80"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
            <circle cx="16" cy="16" r="14" fill="#0052F2" />
            <path d="M16 8L22 20H10L16 8Z" fill="white" />
            <circle cx="16" cy="22" r="2" fill="white" />
          </svg>
          <span className="text-white font-semibold text-base tracking-tight">Amplitude</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[13px] text-amp-gray-50 font-medium hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-amp-gray-60">
          {t.footer.copyright}
        </div>
      </div>
    </motion.footer>
  )
}
