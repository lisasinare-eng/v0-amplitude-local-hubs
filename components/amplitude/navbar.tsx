"use client"
import { motion } from "framer-motion"
import { useI18n, type Region } from "@/lib/i18n"
import { AmplitudeLogo } from "./amplitude-logo"
const regions: { id: Region; flag: string; label: string }[] = [
  { id: "pl", flag: "🇵🇱", label: "CEE / PL" },
  { id: "ru", flag: "🇷🇺", label: "CIS / RU" },
  { id: "ar", flag: "🇸🇦", label: "MEA / AR" },
]
const nativeLabels: Record<Region, string> = {
  pl: "PL",
  ru: "RU",
  ar: "AR",
}
export function Navbar() {
  const { locale, setLocale, t, region, setRegion } = useI18n()
  const nativeLabel = nativeLabels[region]
  return (
    <motion.nav initial={{y:-100}} animate={{y:0}} transition={{duration:0.5,ease:"easeOut"}} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-amp-gray-20 shadow-sm" dir="ltr">
      <div className="border-b border-amp-gray-10 px-6 lg:px-16 max-w-[1400px] mx-auto flex items-center gap-2 h-9">
        <span className="text-[11px] text-amp-gray-50 font-semibold uppercase tracking-widest mr-2">Region</span>
        {regions.map((r)=>(<button key={r.id} onClick={()=>setRegion(r.id)} className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold transition-all duration-200 ${region===r.id?"bg-amp-blue text-white":"text-amp-gray-50 hover:text-amp-gray-100 hover:bg-amp-gray-10"}`}><span>{r.flag}</span><span>{r.label}</span></button>))}
      </div>
      <div className="flex items-center justify-between h-16 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <AmplitudeLogo className="h-7" variant="dark" />
        <ul className="hidden lg:flex items-center gap-8">
          {[t.nav.products,t.nav.solutions,t.nav.customers,t.nav.analytics,t.nav.pricing].map((item)=>(<li key={item}><a href="#" className="text-amp-gray-70 text-sm font-medium hover:text-amp-gray-100 transition-colors duration-200">{item}</a></li>))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="flex bg-amp-gray-10 rounded-md overflow-hidden border border-amp-gray-20">
            <button onClick={()=>setLocale("primary")} className={`px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${locale==="primary"?"bg-amp-blue text-white":"text-amp-gray-60 hover:text-amp-gray-100"}`}>{nativeLabel}</button>
            <button onClick={()=>setLocale("en")} className={`px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${locale==="en"?"bg-amp-blue text-white":"text-amp-gray-60 hover:text-amp-gray-100"}`}>EN</button>
          </div>
          <a href="#" className="hidden sm:inline-block px-5 py-2.5 text-amp-gray-70 text-sm font-semibold border border-amp-gray-20 rounded-md hover:border-amp-gray-60 transition-colors duration-200">{t.nav.login}</a>
          <a href="#" className="px-5 py-2.5 bg-amp-blue text-white text-sm font-semibold rounded-md hover:bg-[#0044CC] transition-colors duration-200">{t.nav.startFree}</a>
        </div>
      </div>
    </motion.nav>
  )
}
