"use client"

import { motion } from "motion/react"
import { HERO, WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

const VIDEO_URL =
  "https://cdn.dribbble.com/userupload/12131081/file/original-5f2878406a2b80fe038c5ad2c8e327ef.mp4"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] pt-32 pb-24 text-white">
      {/* =========================================
          VIDEO BACKGROUND (LEBIH TERLIHAT)
      ========================================= */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-80" // <-- Opacity dinaikkan ke 80 (sangat terang)
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        
        {/* Overlay dikurangi drastis */}
        {/* 1. Lapisan hitam tipis (hanya 30%) */}
        <div className="absolute inset-0 bg-[#0a0a0a]/30" />
        
        {/* 2. Gradient dari kiri ke kanan (Kiri gelap untuk teks, Kanan transparan untuk video) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        
        {/* 3. Gradient dari bawah ke atas (agar menyatu dengan section selanjutnya) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
      </div>

      {/* =========================================
          KONTEN UTAMA (Tengah)
      ========================================= */}
      <div className="relative mx-auto w-full max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Label Atas */}
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase backdrop-blur-md drop-shadow">
            <Icon name="sparkle" className="h-3.5 w-3.5" />
            {HERO.label}
          </span>

          {/* Judul Utama (Ditambah Drop Shadow) */}
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] font-bold tracking-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
            {HERO.title.split(" ").map((word, i) => {
              const isHighlight = i >= HERO.title.split(" ").length - 3
              return (
                <span key={i} className={isHighlight ? "text-purple-400" : ""}>
                  {word}{" "}
                </span>
              )
            })}
          </h1>

          {/* Deskripsi Singkat / Bullet Points */}
          <ul className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            {HERO.bullets.map((b, i) => (
              <motion.li
                key={b.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 text-sm font-medium text-gray-100 drop-shadow md:text-base" // <-- Teks dibuat lebih putih & drop shadow
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/40 text-purple-300 backdrop-blur-md border border-white/10">
                  <Icon name={b.icon} className="h-3.5 w-3.5" />
                </span>
                {b.text}
              </motion.li>
            ))}
          </ul>

          {/* Harga */}
          <div className="mt-10 flex flex-wrap items-baseline justify-center gap-3 drop-shadow-lg">
            <span className="text-sm font-medium text-gray-300">{HERO.priceLabel}</span>
            <span className="font-serif text-4xl font-bold text-white md:text-5xl">{HERO.price}</span>
            <span className="text-base text-gray-400 line-through">{HERO.priceStrike}</span>
            <span className="text-sm text-gray-400">{HERO.priceNote}</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WA_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(147,51,234,0.5)] transition hover:-translate-y-0.5 hover:bg-purple-500"
            >
              {HERO.cta}
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#harga"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-6 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Lihat Paket
            </a>
          </div>

          {/* Garansi */}
          <p className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-gray-300 drop-shadow">
            <Icon name="shield" className="h-4 w-4 text-purple-400" />
            {HERO.guarantee}
          </p>
        </motion.div>
      </div>

      {/* =========================================
          TRUSTPILOT STRIP (Bawah Hero)
      ========================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-0 right-0 mx-auto max-w-xl px-4"
      >
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/20 bg-black/50 p-4 backdrop-blur-md sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white sm:text-sm">Excellent</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex h-4 w-4 items-center justify-center bg-emerald-500 text-white rounded-sm sm:h-5 sm:w-5">
                  <Icon name="star" className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          
          <p className="text-center text-[10px] text-gray-200 sm:text-xs">
            Rating <strong className="text-white">4.9 dari 5</strong> — Dipercaya oleh <strong className="text-white">150+ bisnis</strong>.
          </p>
        </div>
      </motion.div>
    </section>
  )
}