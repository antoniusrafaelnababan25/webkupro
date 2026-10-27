"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { PLANS, PRICING_INCLUDES, WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

const VIDEO_URL =
  "https://cdn.dribbble.com/userupload/13022266/file/original-b268f8effa2de81e2623c2ab4acb59c0.mp4"

export default function PricingPlans() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

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
    <section id="harga" className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 md:py-32">
      
      {/* =========================================
          VIDEO BACKGROUND (LEBIH TERLIHAT)
      ========================================= */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden" 
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-70" // <-- Opacity dinaikkan ke 70 (video lebih terang)
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />
        
        {/* Overlay dikurangi drastis */}
        {/* 1. Lapisan hitam tipis (hanya 40% kegelapan) */}
        <div className="absolute inset-0 bg-[#0a0a0a]/40" />
        
        {/* 2. Gradient hanya di atas & bawah untuk membaurkan dengan section lain */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-90" />
      </div>

      {/* =========================================
          KONTEN
      ========================================= */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header dengan bayangan teks agar tetap terbaca di video terang */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl leading-[1.15] font-bold text-white drop-shadow-lg md:text-5xl">
            Pilih paket pembuatan website yang tepat
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-200 drop-shadow md:text-lg">
            Setiap paket datang dengan semua yang Anda butuhkan untuk memulai: dari project pertama hingga bisnis yang berkembang.
          </p>
        </div>

        {/* Includes strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-y border-white/20 py-4 md:gap-8">
          <span className="text-xs font-bold text-gray-300 uppercase drop-shadow">Semua paket termasuk:</span>
          {PRICING_INCLUDES.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs font-semibold text-white drop-shadow md:text-sm">
              <Icon name="check" className="h-4 w-4 text-purple-400" />
              {item}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{ transform: "translateZ(0)" }} 
              className={`relative flex flex-col rounded-3xl border p-6 transition-colors duration-300 md:p-8 ${
                plan.popular
                  ? "border-purple-400/50 bg-[#1a0b2e]/90 shadow-[0_0_50px_rgba(147,51,234,0.3)] md:-translate-y-2" 
                  : "border-white/20 bg-black/60 hover:border-white/30 hover:bg-black/70" // Card dibuat semi-transparan tapi lebih gelap dari video
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-3 py-1 text-[10px] font-extrabold tracking-wider text-white uppercase shadow-lg">
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className="font-serif text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-xs font-semibold text-gray-400 md:text-sm">{plan.subtitle}</p>
              </div>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-gray-400">Rp</span>
                  <span className="font-serif text-3xl font-bold text-white md:text-4xl">{plan.price}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-gray-500 line-through">Rp {plan.priceStrike}</span>
                  <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-bold text-purple-300">{plan.save}</span>
                </div>
                <p className="mt-2 text-[11px] text-gray-400">{plan.renew}</p>
              </div>

              <a
                href={WA_LINK(`Saya tertarik paket ${plan.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl"
                    : "bg-white text-[#1a0b2e] hover:bg-gray-200"
                }`}
              >
                {plan.cta}
                <Icon name="arrow" className="h-4 w-4" />
              </a>

              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-200">
                    <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${plan.popular ? "text-purple-400" : "text-gray-400"}`} />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-gray-400 drop-shadow">
          Harga di atas belum termasuk PPN. Semua paket sudah termasuk domain, hosting 1 tahun, SSL, dan garansi revisi.
        </p>
      </div>
    </section>
  )
}