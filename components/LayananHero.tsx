"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { SERVICE_HERO } from "@/lib/constants"
import { Icon } from "./icons"

const VIDEO_URL =
  "https://cdn.dribbble.com/userupload/13898324/file/original-ca16c7772a67bcc8003d6695b10c45e4.mp4"

export default function LayananHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Paksa autoplay
    video.play().catch((err) => console.log("Autoplay gagal:", err))

    // Cegah video berhenti jika tab browser sempat tidak aktif
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        video.play().catch((err) => console.log("Resume play gagal:", err))
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 pt-32 pb-24 text-white">
      
      {/* =========================================
          VIDEO BACKGROUND (OPTIMASI GPU)
      ========================================= */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden" 
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-60"
          disablePictureInPicture
          disableRemotePlayback
        />
        
        {/* Overlay Gelap (Vignette) */}
        {/* 1. Lapisan hitam tipis */}
        <div className="absolute inset-0 bg-[#0a0a0a]/50" />
        
        {/* 2. Gradient dari bawah ke atas agar menyatu dengan section selanjutnya */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8ff] via-[#0a0a0a]/60 to-[#0a0a0a]/80" />
        
        {/* 3. Gradient radial agar teks di tengah lebih fokus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_100%)] opacity-60" />
      </div>

      {/* =========================================
          KONTEN UTAMA
      ========================================= */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-serif text-4xl leading-tight font-bold drop-shadow-2xl md:text-6xl"
        >
          {SERVICE_HERO.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-gray-200 drop-shadow"
        >
          {SERVICE_HERO.subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid w-full grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {SERVICE_HERO.features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md">
              <Icon name={feature.icon} className="h-8 w-8 text-purple-400" />
              <h3 className="font-serif text-xl font-bold text-white drop-shadow">{feature.title}</h3>
              <p className="text-sm text-gray-300 drop-shadow">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}