"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { SERVICES, WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

export default function Services() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-white px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">
            <span className="h-px w-8 bg-orange-500" />
            Layanan Kami
            <span className="h-px w-8 bg-orange-500" />
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold text-charcoal md:text-5xl">
            Solusi digital yang dirancang untuk{" "}
            <span className="text-gradient-orange">pertumbuhan bisnis</span> Anda
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
            Dari website profil hingga sistem custom, setiap layanan kami fokus pada satu tujuan: membuat bisnis Anda tampil lebih profesional dan menghasilkan lebih banyak pelanggan.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const isFeatured = i === 0
            return (
              <motion.a
                key={s.title}
                href={WA_LINK(`Saya tertarik dengan layanan ${s.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border border-orange-100 bg-cream transition-all duration-500 hover:-translate-y-1 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/20 ${
                  isFeatured ? "md:col-span-2 md:row-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${isFeatured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-wider text-orange-600 uppercase backdrop-blur">
                    {s.cat}
                  </span>

                  {/* Icon floating */}
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className={`font-serif font-bold text-white ${isFeatured ? "text-2xl md:text-3xl" : "text-xl"}`}>
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-orange-200 bg-white px-2.5 py-1 text-[10px] font-bold text-orange-600 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600">Konsultasi Gratis</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}