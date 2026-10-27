"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { PORTOFOLIO_HERO } from "@/lib/constants"

export default function PortofolioHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {})
  }, [])

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 pt-32 pb-24 text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ transform: "translateZ(0)" }}>
        <video
          ref={videoRef}
          src={PORTOFOLIO_HERO.videoBg}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
      </div>

      {/* Konten */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-serif text-4xl font-bold leading-tight drop-shadow-2xl md:text-6xl lg:text-7xl"
        >
          {PORTOFOLIO_HERO.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 drop-shadow"
        >
          {PORTOFOLIO_HERO.subtitle}
        </motion.p>
      </div>
    </section>
  )
}