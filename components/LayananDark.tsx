"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { SERVICE_DARK_FEATURES } from "@/lib/constants"
import { Icon } from "./icons"

// Daftar Video Dribbble untuk masing-masing kartu
const VIDEOS = [
  "https://cdn.dribbble.com/userupload/47050671/file/d99fd1e652d315b07910b4ba2edfee36.mp4",
  "https://cdn.dribbble.com/userupload/47167839/file/52d45fc9396cf76c0f35d64ac1487707.mp4",
  "https://cdn.dribbble.com/userupload/42776937/file/original-8c066a6d14e1087748f2fa10fe6a41aa.mp4",
]

// Komponen Video Background Khusus
function VideoBg({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    
    // Paksa autoplay
    video.play().catch((err) => console.log("Autoplay gagal:", err))
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-700 group-hover:scale-105 group-hover:opacity-30"
      disablePictureInPicture
      disableRemotePlayback
    />
  )
}

export default function LayananDark() {
  return (
    <section className="relative overflow-hidden bg-[#0f0820] px-4 py-24 text-white md:py-32">
      {/* =========================================
          BACKGROUND ORNAMEN
      ========================================= */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-purple opacity-30" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-purple opacity-10" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 md:grid-cols-12 md:gap-20">
          
          {/* =========================================
              KIRI: TEKS BESAR (5 Kolom)
          ========================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase backdrop-blur-md">
              <Icon name="sparkle" className="h-3.5 w-3.5" />
              Komitmen Kami
            </span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] font-bold md:text-5xl lg:text-6xl">
              Layanan nyata, <br />
              <span className="text-gradient-purple">hasil nyata.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Kami tidak hanya membuat website lalu pergi. Kami mendampingi dari awal konsultasi hingga website live dan siap mendatangkan pelanggan.
            </p>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0f0820] bg-purple-900 text-xs font-bold text-purple-200">
                    <Icon name="check" className="h-4 w-4" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-400">
                Dipercaya oleh <span className="text-white">150+ bisnis</span> di Indonesia.
              </p>
            </div>
          </motion.div>

          {/* =========================================
              KANAN: BENTO GRID DENGAN VIDEO (7 Kolom)
          ========================================= */}
          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {SERVICE_DARK_FEATURES.map((feat, i) => {
                const isFeatured = i === 0
                // Ambil video berdasarkan index
                const videoSrc = VIDEOS[i] || VIDEOS[0]

                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 ${
                      isFeatured ? "sm:col-span-2" : ""
                    }`}
                  >
                    {/* =========================================
                        VIDEO BACKGROUND DI DALAM KARTU
                    ========================================= */}
                    <VideoBg src={videoSrc} />
                    
                    {/* Overlay Gelap agar teks terbaca */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0820] via-[#0f0820]/80 to-transparent" />
                    <div className="absolute inset-0 bg-[#0f0820]/40" />

                    {/* Konten Kartu */}
                    <div className={`relative z-10 flex ${isFeatured ? "flex-col md:flex-row md:items-center gap-6" : "flex-col gap-5"}`}>
                      {/* Ikon */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-purple-300 border border-white/10 shadow-lg backdrop-blur-md">
                        <Icon name={feat.icon} className="h-6 w-6" />
                      </div>
                      
                      {/* Teks */}
                      <div>
                        <h3 className={`font-serif font-bold text-white drop-shadow-lg ${isFeatured ? "text-2xl" : "text-xl"}`}>
                          {feat.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-300 drop-shadow">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}