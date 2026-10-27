"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { PORTOFOLIO_FEATURED } from "@/lib/constants"
import { Icon } from "./icons"

function FeaturedVideoCard({ item, index }: { item: any; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {})
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <video
          ref={videoRef}
          src={item.video}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="text-xs font-bold tracking-widest text-purple-400 uppercase">{item.category}</div>
        <h3 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">{item.title}</h3>
        <div className="mt-4 flex items-center gap-2 text-sm font-bold text-white opacity-0 transition duration-300 group-hover:opacity-100">
          Lihat Detail <Icon name="arrow-up-right" className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  )
}

export default function PortofolioFeatured() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">Project Unggulan</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white md:text-4xl">Karya terbaik kami</h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {PORTOFOLIO_FEATURED.map((item, i) => (
            <FeaturedVideoCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}