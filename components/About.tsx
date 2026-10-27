"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ABOUT } from "@/lib/constants"
import { Icon } from "./icons"

export default function About() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-cream px-4 py-24 md:py-32">
      {/* Decorative big number */}
      <div aria-hidden className="pointer-events-none absolute -top-10 right-0 font-serif text-[280px] leading-none font-bold text-orange-500/5 select-none md:text-[420px]">
        01
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          {/* LEFT: Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative md:col-span-6"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Tim WebKita"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Small overlapping image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -right-4 -bottom-8 w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-xl md:w-52"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
                alt="Meeting klien"
                width={300}
                height={300}
                className="aspect-square object-cover"
              />
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-6 -left-6 flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-2xl shadow-orange-500/40"
            >
              <div className="font-serif text-3xl font-bold">5+</div>
              <div className="text-[9px] font-bold tracking-widest uppercase">Tahun</div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">
              <span className="h-px w-8 bg-orange-500" />
              {ABOUT.eyebrow}
            </span>

            <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold text-charcoal md:text-5xl">
              {ABOUT.title}
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
              {ABOUT.desc}
            </p>

            <ul className="mt-8 space-y-4">
              {ABOUT.points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-charcoal md:text-base">{point}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#kontak"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Kenali Tim Kami
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}