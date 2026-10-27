"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { MANAGEMENT, IMAGES } from "@/lib/constants"
import { Icon } from "./icons"

export default function SimpleManagement() {
  return (
    <section className="relative overflow-hidden bg-[#1a0b2e] px-4 py-24 text-white md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-purple opacity-60" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl leading-[1.15] font-bold md:text-5xl">Manajemen website yang sederhana</h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">Dirancang untuk pemilik bisnis dan ahli teknis</p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="grid gap-6 md:grid-cols-2">
            {MANAGEMENT.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            <Image src={IMAGES.servicesLaptop} alt="Manajemen website" width={1376} height={1170} className="w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}