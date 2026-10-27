"use client"

import { motion } from "motion/react"
import { SERVICE_STEPS } from "@/lib/constants"

export default function LayananProcess() {
  return (
    <section className="relative overflow-hidden bg-[#1a0b2e] px-4 py-24 text-white md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-purple opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-purple-400 uppercase">
            <span className="h-px w-8 bg-purple-500" />
            Alur Kerja
            <span className="h-px w-8 bg-purple-500" />
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold md:text-5xl">
            Bagaimana kami <span className="text-purple-400">bekerja</span>?
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {SERVICE_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="font-serif text-5xl font-bold text-purple-500/30">{step.num}</div>
              <h3 className="mt-4 font-serif text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}