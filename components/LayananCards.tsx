"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { SERVICE_FEATURES, SERVICE_BENTO, WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

const VIDEO_URL =
  "https://cdn.dribbble.com/userupload/48694214/file/large-47d297551a3edf6ec2486ddaed813e0d.mp4"

// Komponen Kartu 3D Interaktif
function Card3D({ card, index }: { card: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={WA_LINK(`Saya tertarik dengan layanan ${card.title}`)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1200 }}
      className="group relative w-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl transition-colors hover:border-purple-400/50"
      >
        {/* =========================================
            VIDEO BACKGROUND DI DALAM KARTU
        ========================================= */}
        <div className="absolute inset-0 z-0">
          <video
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover opacity-40 transition duration-500 group-hover:opacity-60"
          />
          {/* Overlay Gelap agar teks tetap terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        </div>

        {/* Efek Glare/Kilau 3D */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.15) 0%, transparent 60%)`
            ),
          }}
        />

        {/* Teks 3D (Pop-out) - Tanpa Ikon Kotak */}
        <div style={{ transform: "translateZ(40px)" }} className="relative z-10 flex flex-1 flex-col justify-end">
          <h3 className="font-serif text-2xl font-bold text-white drop-shadow-lg">{card.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 drop-shadow">{card.desc}</p>
          
          <div className="mt-8 flex items-center gap-2 text-sm font-bold text-purple-400">
            Konsultasi Layanan 
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 backdrop-blur-md transition group-hover:bg-purple-500 group-hover:text-white">
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </motion.div>
    </motion.a>
  )
}

export default function LayananCards() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-purple opacity-20" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase backdrop-blur-md">
            <Icon name="sparkle" className="h-3.5 w-3.5" />
            Layanan Kami
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold text-white md:text-5xl">
            Pilih solusi digital yang <br />
            <span className="text-gradient-purple">tepat untuk Anda</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Setiap layanan dirancang untuk memberikan hasil maksimal bagi pertumbuhan bisnis Anda.
          </p>
        </div>
        
        {/* Grid 3 Kartu 3D */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICE_FEATURES.map((card, i) => (
            <Card3D key={card.title} card={card} index={i} />
          ))}
        </div>

        {/* Bento Bawah (Tetap Sama) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group relative mt-12 grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#1a0b2e] to-[#0a0a0a] p-8 md:grid-cols-2 md:p-16"
        >
          <div className="absolute inset-0 bg-grid-purple opacity-10" />
          <div className="absolute -left-20 top-0 h-full w-1/2 bg-gradient-to-r from-purple-500/10 to-transparent" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-purple-400 backdrop-blur-md border border-white/10">
              <Icon name="rocket" className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-white md:text-4xl">{SERVICE_BENTO.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-300">{SERVICE_BENTO.desc}</p>
            
            <div className="mt-8 flex gap-4">
              <a 
                href={WA_LINK("Saya ingin tahu lebih lanjut tentang layanan Anda")}
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-500"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image 
                src={SERVICE_BENTO.image} 
                alt="Bento" 
                fill 
                className="object-cover transition duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/60 p-4 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                    <Icon name="check" className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">SEO Ready</div>
                    <div className="text-[10px] text-gray-400">Siap halaman 1 Google</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                    <Icon name="rocket" className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Fast Load</div>
                    <div className="text-[10px] text-gray-400">PageSpeed 90+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}