"use client"

import { motion } from "motion/react"
import { WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

export default function WhatsAppFab() {
  return (
    <motion.a href={WA_LINK()} target="_blank" rel="noopener noreferrer" aria-label="Chat via WhatsApp" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5, type: "spring", stiffness: 200 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-2xl shadow-purple-500/50 md:h-16 md:w-16">
      <span className="absolute inset-0 animate-ping rounded-full bg-purple-500/40" />
      <Icon name="whatsapp" className="relative h-7 w-7 md:h-8 md:w-8" />
    </motion.a>
  )
}