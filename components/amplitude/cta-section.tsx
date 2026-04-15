"use client"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"
export function CTASection() {
  const { t } = useI18n()
  return (
    <section className="bg-amp-blue py-14 px-6 lg:px-16 text-center">
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="max-w-[700px] mx-auto">
        <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-4">{t.cta.title}</h2>
        <p className="text-lg text-white/75 mb-9">{t.cta.subtitle}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://amplitude.com/get-started" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white text-amp-blue text-[15px] font-bold rounded-md hover:opacity-90 transition-opacity duration-200">{t.cta.primary}</a>
          <a href="https://amplitude.com/contact" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 text-white text-[15px] font-semibold border-2 border-white/40 rounded-md hover:border-white transition-colors duration-200">{t.cta.secondary}</a>
        </div>
      </motion.div>
    </section>
  )
}
