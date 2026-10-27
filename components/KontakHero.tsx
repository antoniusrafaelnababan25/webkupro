"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { Icon } from "./icons"

const VIDEO_URL =
  "https://cdn.dribbble.com/userupload/47701519/file/82dcb3d5e210aedf25eca810545d36b3.mp4"

export default function KontakHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Autoplay gagal:", err))
    }
  }, [])

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 pt-32 pb-24 text-white">
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
          className="h-full w-full object-cover opacity-50"
          disablePictureInPicture
          disableRemotePlayback
        />
        
        {/* Overlay Gelap (Vignette) */}
        {/* 1. Lapisan hitam tipis */}
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        
        {/* 2. Gradient dari bawah ke atas agar menyatu dengan section selanjutnya */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8ff] via-transparent to-[#0a0a0a]/80" />
        
        {/* 3. Gradient radial agar teks di tengah lebih fokus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_90%)] opacity-70" />
      </div>

      {/* =========================================
          KONTEN
      ========================================= */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-green-400 uppercase backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Tim Online — Siap Membalas
          </div>

          <h1 className="mt-8 font-serif text-4xl font-bold leading-tight drop-shadow-2xl md:text-6xl">
            Mari Bicara tentang <br />
            <span className="text-gradient-purple">Masa Depan Bisnis Anda</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 drop-shadow">
            Punya ide, pertanyaan, atau ingin memulai proyek? Isi formulir atau langsung hubungi kami via WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  )
}