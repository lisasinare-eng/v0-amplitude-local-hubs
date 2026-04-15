"use client"
import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { useI18n } from "@/lib/i18n"
export function GDPRCallout() {
  const { t } = useI18n()
  return (
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="bg-amp-gray-10 py-8 px-6 lg:px-16 flex flex-col md:flex-row items-start md:items-center gap-5 border-b border-amp-gray-20">
      <ShieldCheck className="w-8 h-8 text-amp-blue flex-shrink-0" />
      <div className="flex-1">
        <div className="text-base font-bold text-black mb-1">{t.gdprCallout.title}</div>
        <div className="text-sm text-amp-gray-60 leading-relaxed">{t.gdprCallout.description}</div>
      </div>
      <a href="https://amplitude.com/privacy/dpa" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 px-5 py-2.5 bg-amp-blue text-white text-sm font-semibold rounded-md hover:bg-[#0044CC] transition-colors duration-200 whitespace-nowrap">{t.gdprCallout.cta}</a>
    </motion.div>
  )
}
