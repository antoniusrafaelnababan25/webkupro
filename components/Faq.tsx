"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FAQ } from "@/lib/constants"
import { Icon } from "./icons"

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden bg-white px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-purple-600 uppercase">
            <span className="h-px w-8 bg-purple-500" />
            FAQ
            <span className="h-px w-8 bg-purple-500" />
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold text-[#1a0b2e] md:text-5xl">
            Pertanyaan yang <span className="text-gradient-purple">sering ditanyakan</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Belum ketemu jawabannya? Hubungi kami langsung via WhatsApp.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen ? "border-purple-300 bg-purple-50/50 shadow-lg shadow-purple-500/10" : "border-purple-100 bg-white hover:border-purple-200"
                }`}
              >
                <button onClick={() => setOpenIndex(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6">
                  <span className="font-serif text-base font-bold text-[#1a0b2e] md:text-lg">{item.q}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${isOpen ? "rotate-180 bg-purple-500 text-white" : "bg-purple-100 text-purple-600"}`}>
                    <Icon name="chevron-down" className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                      <div className="border-t border-purple-200/50 px-5 pb-5 pt-4 md:px-6 md:pb-6">
                        <p className="text-sm leading-relaxed text-gray-600 md:text-base">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}