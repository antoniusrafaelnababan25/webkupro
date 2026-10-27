"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { FOUNDER, WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

export default function KontakFounder() {
  const [showStory, setShowStory] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentParagraph, setCurrentParagraph] = useState(0)

  // Logika Efek Mengetik
  useEffect(() => {
    if (!showStory) {
      setTypedText("")
      setCurrentParagraph(0)
      return
    }

    const textToType = FOUNDER.story[currentParagraph]
    if (!textToType) return

    let i = 0
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + textToType.charAt(i))
      i++
      if (i >= textToType.length) {
        clearInterval(typingInterval)
        if (currentParagraph < FOUNDER.story.length - 1) {
          setTimeout(() => {
            setCurrentParagraph((prev) => prev + 1)
            setTypedText((prev) => prev + "\n\n")
          }, 1200)
        }
      }
    }, 25) // Kecepatan mengetik

    return () => clearInterval(typingInterval)
  }, [showStory, currentParagraph])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0f0820] px-4 py-24 text-white">
      
      {/* Ornamen Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-purple opacity-20" />
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-full select-none overflow-hidden opacity-[0.03]">
        <div className="flex w-max animate-marquee">
          <span className="font-serif text-[20vw] leading-none font-bold whitespace-nowrap">FOUNDER • VISIONER • CREATOR • </span>
          <span className="font-serif text-[20vw] leading-none font-bold whitespace-nowrap">FOUNDER • VISIONER • CREATOR • </span>
        </div>
      </div>

      {/* =========================================
          KONTEN UTAMA (TENGAH)
      ========================================= */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        
        {/* Foto Founder */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={() => setShowStory(true)}
          className="group relative aspect-[4/5] w-64 overflow-hidden rounded-t-[8rem] rounded-b-3xl border-2 border-white/10 shadow-[0_0_80px_rgba(147,51,234,0.15)] transition-all duration-500 hover:scale-105 hover:border-purple-500 hover:shadow-[0_0_100px_rgba(147,51,234,0.4)] md:w-72"
        >
          <Image
            src={FOUNDER.image}
            alt={FOUNDER.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0820] via-transparent to-transparent opacity-80" />
          
          {/* Hover Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-purple-600/90 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
              Baca Cerita
            </span>
          </div>
        </motion.button>

        {/* Teks Quote & Nama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 max-w-2xl"
        >
          <Icon name="quote" className="mx-auto h-8 w-8 text-purple-500/50" />
          <blockquote className="mt-4 text-xl font-medium leading-relaxed text-gray-200 md:text-3xl">
            "{FOUNDER.quote}"
          </blockquote>
          
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="h-px w-12 bg-purple-500/50" />
            <h3 className="font-serif text-2xl font-bold text-white">{FOUNDER.name}</h3>
            <p className="text-sm font-semibold tracking-widest text-purple-400 uppercase">{FOUNDER.role}</p>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          MODAL CERITA (TENGAH LAYAR)
      ========================================= */}
      <AnimatePresence>
        {showStory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop dengan Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowStory(false)}
              className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-[2rem] border border-purple-500/30 bg-[#0f0820] shadow-[0_0_100px_rgba(147,51,234,0.2)]"
            >
              {/* Garis Laser Estetik di Atas Modal */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80" />

              {/* Tombol Close */}
              <button
                onClick={() => setShowStory(false)}
                className="absolute right-5 top-5 z-20 rounded-full bg-white/5 p-2 text-gray-400 transition hover:bg-purple-500/20 hover:text-white"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>

              {/* Header Modal */}
              <div className="flex shrink-0 items-center gap-4 border-b border-white/10 p-6 pt-8 md:p-8 md:pt-10">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                  <Image src={FOUNDER.image} alt={FOUNDER.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">Cerita Perjalanan</div>
                  <h3 className="font-serif text-2xl font-bold text-white">{FOUNDER.name}</h3>
                </div>
              </div>

              {/* Isi Cerita (Efek Mengetik) */}
              <div className="relative flex-1 overflow-y-auto scrollbar-hide p-6 md:p-8">
                {/* Gradasi atas & bawah untuk efek fade text */}
                <div className="pointer-events-none sticky top-0 z-10 -mt-6 h-6 w-full bg-gradient-to-b from-[#0f0820] to-transparent" />
                
                <div className="text-sm leading-relaxed text-gray-300 md:text-base font-medium whitespace-pre-wrap">
                  {typedText}
                  {typedText.length < FOUNDER.story.join("").length && (
                    <span className="ml-1 inline-block h-4 w-1 animate-blink bg-purple-500 align-middle" />
                  )}
                </div>

                <div className="pointer-events-none sticky bottom-0 z-10 -mb-6 mt-6 h-12 w-full bg-gradient-to-t from-[#0f0820] to-transparent" />
              </div>

              {/* Footer CTA */}
              <div className="shrink-0 border-t border-white/10 bg-white/5 p-6 md:p-8">
                <a
                  href={WA_LINK("Halo Abram, saya sudah baca cerita Anda. Saya ingin konsultasi.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-500"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Hubungi Abram
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}