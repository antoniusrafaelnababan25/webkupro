"use client"

import { motion } from "motion/react"
import { PROMO_BAR } from "@/lib/constants"
import { Icon } from "./icons"

export default function PromoBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 text-white"
    >
      <a
        href="#harga"
        className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold transition hover:bg-white/10 md:text-sm"
      >
        <span className="opacity-80">{PROMO_BAR.text}</span>
        <span className="rounded-full bg-white/20 px-2.5 py-0.5 font-bold">{PROMO_BAR.highlight}</span>
        <span className="hidden items-center gap-1 sm:inline-flex">
          {PROMO_BAR.cta}
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </span>
      </a>
    </motion.div>
  )
}