"use client"

import { useI18n } from "@/lib/i18n"
import { AmplitudeLogo } from "./amplitude-logo"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-amp-gray-100 border-t border-amp-gray-80 px-6 lg:px-16 py-12">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap">
        <AmplitudeLogo className="h-6" />
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            t.footer.privacy,
            t.footer.terms,
            t.footer.compliance,
            t.footer.docs,
            t.footer.support,
          ].map((link) => (
            
              key={link}
              href="#"
              className="text-[13px] text-amp-gray-50 font-medium hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="text-xs text-amp-gray-60">© {t.footer.copyright}</div>
      </div>
    </footer>
  )
}
