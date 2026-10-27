"use client"

import { motion } from "motion/react"
import { PROCESS } from "@/lib/constants"
import { Icon } from "./icons"

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-cream px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">
            <span className="h-px w-8 bg-orange-500" />
            Proses Kerja
            <span className="h-px w-8 bg-orange-500" />
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold text-charcoal md:text-5xl">
            Alur yang jelas dari{" "}
            <span className="text-gradient-orange">konsultasi hingga online</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Kami percaya proses yang transparan menghasilkan hasil yang lebih baik. Ini alur kerja kami.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200 md:left-1/2 md:-translate-x-1/2" />

          {PROCESS.map((p, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative mb-12 flex items-start gap-6 md:mb-16 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 font-serif text-lg font-bold text-white shadow-xl shadow-orange-500/40 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {p.num}
                </div>

                {/* Content card */}
                <div className={`flex-1 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
                  <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:border-orange-300 hover:shadow-xl">
                    <div className="flex items-center gap-2 text-xs font-bold text-orange-600 md:justify-start">
                      <span className="rounded-full bg-orange-100 px-2.5 py-0.5">{p.duration}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-xl font-bold text-charcoal">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.desc}</p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-orange-500/30 transition hover:-translate-y-0.5"
          >
            Mulai Proyek Sekarang
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}