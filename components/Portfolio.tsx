"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { PORTFOLIO } from "@/lib/constants"
import { Icon } from "./icons"

const CATEGORIES = ["Semua", "Travel & Tour", "Agribisnis", "Top Up Game", "E-commerce"]

export default function Portfolio() {
  const [active, setActive] = useState("Semua")

  const filtered = active === "Semua" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === active)

  return (
    <section id="portfolio" className="relative overflow-hidden bg-cream px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">
              <span className="h-px w-8 bg-orange-500" />
              Portofolio
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold text-charcoal md:text-5xl">
              Karya yang sudah{" "}
              <span className="text-gradient-orange">bicara sendiri</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Setiap project adalah cerita. Berikut beberapa di antaranya.
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                active === cat
                  ? "bg-charcoal text-white shadow-lg"
                  : "bg-white text-charcoal hover:bg-orange-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.href}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative block ${i % 2 === 1 ? "md:mt-16" : ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl transition duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase text-orange-600 backdrop-blur">
                      {p.cat}
                    </span>
                    <span className="rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold text-white">
                      {p.year}
                    </span>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-charcoal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Icon name="arrow-up-right" className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-white">{p.title}</h3>
                    <span className="mt-1 inline-block text-xs font-semibold text-orange-300">
                      Live Preview →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal px-6 py-3.5 text-sm font-bold text-charcoal transition hover:bg-charcoal hover:text-white"
          >
            Lihat Semua Portofolio
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}