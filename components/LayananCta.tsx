"use client"

import { WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

export default function LayananCta() {
  return (
    <section className="bg-[#faf8ff] px-4 py-24">
      <div className="mx-auto max-w-4xl rounded-[3rem] bg-gradient-to-br from-purple-600 to-indigo-800 px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-24">
        <h2 className="font-serif text-3xl font-bold md:text-5xl">
          Masih bingung memilih layanan yang tepat?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
          Ceritakan kebutuhan bisnis Anda. Tim kami akan membantu merekomendasikan solusi yang paling efisien dan sesuai budget.
        </p>
        <a 
          href={WA_LINK("Halo, saya masih bingung memilih layanan. Boleh konsultasi?")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-purple-700 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <Icon name="whatsapp" className="h-6 w-6" />
          Konsultasi Gratis Sekarang
        </a>
      </div>
    </section>
  )
}