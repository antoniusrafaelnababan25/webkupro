"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { REASONS } from "@/lib/constants"
import { Icon } from "./icons"

const THEMES = {
  purple: { bg: "bg-gradient-to-br from-purple-600 via-purple-700 to-violet-800", accent: "text-purple-200", iconBg: "bg-purple-500/30" },
  indigo: { bg: "bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800", accent: "text-indigo-200", iconBg: "bg-indigo-500/30" },
  violet: { bg: "bg-gradient-to-br from-violet-600 via-violet-700 to-purple-800", accent: "text-violet-200", iconBg: "bg-violet-500/30" },
}

export default function TopReasons() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-purple-600 uppercase">
            <span className="h-px w-8 bg-purple-500" />
            Top 3 Alasan
            <span className="h-px w-8 bg-purple-500" />
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold text-[#1a0b2e] md:text-5xl">
            Tiga alasan utama memilih <span className="text-gradient-purple">layanan kami</span>
          </h2>
        </div>

        <div className="mt-16 space-y-8">
          {REASONS.map((reason, i) => {
            const theme = THEMES[reason.theme as keyof typeof THEMES]
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-3xl ${theme.bg} p-8 text-white shadow-2xl md:p-12`}
              >
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-purple opacity-10" />
                <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl leading-tight font-bold md:text-4xl">{reason.title}</h3>
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${theme.iconBg} backdrop-blur md:h-16 md:w-16`}>
                      <Icon name={reason.icon} className="h-7 w-7 md:h-8 md:w-8" />
                    </div>
                  </div>

                  <div className={`mt-8 grid gap-6 md:gap-8 ${reason.items.length <= 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"}`}>
                    {reason.items.map((item) => (
                      <div key={item.title}>
                        <h4 className={`font-serif text-lg font-bold ${theme.accent}`}>{item.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-white/80">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {reason.image && (
                    <div className="mt-8 hidden overflow-hidden rounded-2xl border border-white/10 md:block">
                      <Image src={reason.image} alt={reason.title} width={2624} height={807} className="w-full object-cover" />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}