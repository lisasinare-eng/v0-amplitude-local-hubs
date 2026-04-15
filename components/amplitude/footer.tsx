"use client"
import { useI18n } from "@/lib/i18n"
import { AmplitudeLogo } from "./amplitude-logo"
export function Footer() {
  const { t } = useI18n()
  const links = [
    { label: t.footer.privacy, href: "https://amplitude.com/privacy" },
    { label: t.footer.terms, href: "https://amplitude.com/terms" },
    { label: t.footer.compliance, href: "https://amplitude.com/privacy/gdpr" },
    { label: t.footer.docs, href: "https://www.docs.amplitude.com" },
    { label: t.footer.support, href: "https://help.amplitude.com" },
  ]
  return (
    <footer className="bg-amp-gray-100 border-t border-amp-gray-80 px-6 lg:px-16 py-12">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap">
        <a href="https://amplitude.com" target="_blank" rel="noopener noreferrer"><AmplitudeLogo className="h-6" /></a>
        <div className="flex flex-wrap gap-6 justify-center">
          {links.map((link)=>(<a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-amp-gray-50 font-medium hover:text-white transition-colors duration-200">{link.label}</a>))}
        </div>
        <div className="text-xs text-amp-gray-60">© {t.footer.copyright}</div>
      </div>
    </footer>
  )
}
