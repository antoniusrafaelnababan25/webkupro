"use client"

import { motion } from "motion/react"
import { TRUST_ITEMS } from "@/lib/constants"

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="text-[#16c2d4]">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function TrustRow() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } } }}
      className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3"
    >
      {TRUST_ITEMS.map((item) => (
        <motion.span
          key={item}
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#41527a]"
        >
          <CheckIcon />
          {item}
        </motion.span>
      ))}
    </motion.div>
  )
}