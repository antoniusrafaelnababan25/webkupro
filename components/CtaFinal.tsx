"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { CTA_FINAL, WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-[#0f0820] px-4 py-24 text-white md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-purple opacity-40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="font-serif text-3xl leading-[1.15] font-bold md:text-5xl">
            {CTA_FINAL.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            {CTA_FINAL.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={WA_LINK()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-purple-500/40 transition hover:-translate-y-0.5">
              {CTA_FINAL.cta}
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#kontak" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
              {CTA_FINAL.ctaSecondary}
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <Image src={CTA_FINAL.image} alt="CTA" width={1377} height={1045} className="w-full object-cover" />
        </motion.div>
      </div>
    </section>
  )
}