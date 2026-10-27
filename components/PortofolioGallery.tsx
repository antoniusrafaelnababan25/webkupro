"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { PORTOFOLIO_GALLERY } from "@/lib/constants"
import { Icon } from "./icons"

export default function PortofolioGallery() {
  return (
    <section className="bg-[#faf8ff] px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">Galeri Visual</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a0b2e] md:text-4xl">Eksplorasi desain & UI</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Kumpulan antarmuka, ilustrasi, dan potongan desain yang kami buat untuk klien dari berbagai industri.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {PORTOFOLIO_GALLERY.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl ${
                // Bikin beberapa gambar lebih besar (efek masonry)
                i === 0 || i === 5 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className="relative w-full h-full min-h-[150px] md:min-h-[250px]">
                <Image
                  src={img}
                  alt={`Portofolio ${i + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#1a0b2e]/60 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-purple-600 shadow-lg">
                    <Icon name="arrow-up-right" className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}