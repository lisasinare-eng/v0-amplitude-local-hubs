"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import { AmplitudeLogo } from "./amplitude-logo"

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
      className="bg-amp-gray-100 py-10 px-6 lg:px-16 border-t border-amp-gray-80"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Logo */}
        <AmplitudeLogo className="h-6" />

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
