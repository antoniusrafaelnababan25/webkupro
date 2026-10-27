"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { SERVICES_PAGE, WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

export default function LayananGrid() {
  return (
    <section className="relative overflow-hidden bg-[#faf8ff] px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 md:gap-32">
          {SERVICES_PAGE.map((service, index) => {
            const isEven = index % 2 === 0
            return (
              <div 
                key={service.id}
                className={`group grid items-center gap-10 md:grid-cols-2 md:gap-16 ${!isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Teks */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`order-2 ${isEven ? "md:order-1" : "md:order-2"}`}
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 mb-6 group-hover:scale-110 transition duration-300">
                    <Icon name={service.icon} className="h-8 w-8" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[#1a0b2e] md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                    {service.subtitle}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="rounded-full border border-purple-200 bg-white px-3 py-1 text-xs font-bold text-purple-600 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-purple-100 pt-8">
                    <a 
                      href={WA_LINK(`Saya tertarik dengan layanan ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1a0b2e] px-8 py-4 text-base font-bold text-white transition hover:bg-purple-600 hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Konsultasi Layanan Ini
                      <Icon name="arrow" className="h-5 w-5" />
                    </a>
                  </div>
                </motion.div>

                {/* Gambar */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className={`order-1 ${isEven ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-purple-500/20">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}