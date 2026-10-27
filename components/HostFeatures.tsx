"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { HOST_FEATURES } from "@/lib/constants"
import { Icon } from "./icons"

const VIDEO_URL =
  "https://cdn.dribbble.com/userupload/49218917/file/95da409101c0f70bcd9cf2c5501e1bb6.mp4"

export default function HostFeatures() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Paksa autoplay
    video.play().catch((err) => console.log("Autoplay gagal:", err))

    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        video.play().catch((err) => console.log("Resume play gagal:", err))
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 text-white md:py-32">
      {/* =========================================
          VIDEO BACKGROUND (OPTIMASI GPU)
      ========================================= */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden" 
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-60" // Video dibuat cukup terang
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />
        
        {/* Overlay Gelap (Vignette) agar teks terbaca */}
        <div className="absolute inset-0 bg-[#0a0a0a]/50" />
        
        {/* Gradient dari kiri ke kanan: Kiri gelap untuk teks, Kanan transparan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        
        {/* Gradient Atas-Bawah untuk menyatu dengan section lain */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-80" />
      </div>

      {/* =========================================
          KONTEN UTAMA
      ========================================= */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-12 md:gap-16">
        {/* LEFT: Heading (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase backdrop-blur-md drop-shadow">
            <Icon name="sparkle" className="h-3.5 w-3.5" />
            Host Here, Succeed Everywhere
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-[1.1] font-bold text-white drop-shadow-lg md:text-5xl">
            Kami urus hal teknisnya. Anda urus pelanggannya.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-200 drop-shadow md:text-lg">
            Setiap detail infrastruktur, keamanan, dan performa sudah kami siapkan. Anda fokus pada hal yang paling penting: pertumbuhan bisnis Anda.
          </p>
        </motion.div>

        {/* RIGHT: Features (7 cols) */}
        <div className="md:col-span-7">
          <div className="space-y-0">
            {HOST_FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-4 py-6 ${i !== 0 ? "border-t border-white/20" : ""}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/40 text-purple-300 border border-white/10 backdrop-blur">
                  <Icon name={feature.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white drop-shadow md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-300 drop-shadow">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}