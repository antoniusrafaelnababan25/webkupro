"use client"

import { motion } from "motion/react"
import { TESTIMONIALS } from "@/lib/constants"
import { Icon } from "./icons"

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-4 py-24 text-white md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-orange opacity-40" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-orange-400 uppercase">
            <span className="h-px w-8 bg-orange-500" />
            Testimoni
            <span className="h-px w-8 bg-orange-500" />
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold md:text-5xl">
            Kata mereka yang sudah{" "}
            <span className="text-gradient-orange">bekerja sama</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-orange-400/30 hover:bg-white/10"
            >
              {/* Quote icon */}
              <Icon name="quote" className="h-10 w-10 text-orange-400/40" />

              {/* Rating */}
              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-base leading-relaxed text-gray-200">"{t.quote}"</p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-sm font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs font-medium text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}