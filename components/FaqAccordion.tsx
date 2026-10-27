"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FAQ } from "@/lib/constants"
import { Icon } from "./icons"

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[#faf8ff] px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1a0b2e] md:text-4xl">
            Pertanyaan yang sering diajukan
          </h2>
          <p className="mt-4 text-gray-600">
            Jika Anda tidak menemukan jawaban yang dicari, silakan hubungi tim kami.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-purple-400 shadow-lg shadow-purple-500/10"
                    : "border-purple-100 hover:border-purple-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-serif text-lg font-bold text-[#1a0b2e]">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                      isOpen
                        ? "rotate-180 bg-purple-600 text-white"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    <Icon name="chevron-down" className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-purple-100 p-6 pt-4">
                        <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                          {item.a}
                        </p>
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