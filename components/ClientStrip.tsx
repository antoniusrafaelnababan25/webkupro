"use client"

import { motion } from "motion/react"

// Daftar URL Logo Klien
const CLIENTS = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKl0U7pFSakCrnznqi4IM_4ItmFYRtQP6xRBS2hoc9w&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwZrrDEKmki7bzWPQxf2gQlAssp_Qyjruz2qgEgumzw&s=10",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/3840px-Ford_logo_flat.svg.png?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwj2bsrFWwnyYSho8DgerGvo7RuseZ8e3eG0nJeDJPtA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhWLNwc9k1ZX33jpFIKDc3LarXUYYzNn0YpaQEdv-gg&s=10",
  "https://infiniti.id/assets-template3/img/logo-bumn/logo-id-food.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Oi7Lt_4wNqMh9INXbfadL_thbrVOlwPwvDC82EWs9g&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9xCEdMVuQbI4E-caBtZk-U-3yyPF3ZWZMg1AGOKNqXqiQZ55aT1AEqM&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMlviqyCh4yqHE7EC2qpm8tB4hnpyl93lFMRPVnCgtA&s=10",
  "https://www.bumines.com/wp-content/uploads/2025/08/Konsultan-Tambang-Indonesia-BUMINES-1.png",
  "https://cdn1-production-images-kly.akamaized.net/gbscCT7_eAnhRFEv-alqADS32Hc=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1855358/original/047628500_1517477992-kpc_logo.jpg",
  "https://storage.googleapis.com/storage-ajaib-prd-platform-wp-artifact/2021/01/xxx5-3.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLWy8-vDYpYaa7ps--LAZ1zmB8b0WCTqp6HDgJEzqvw&s=10",
  "https://img.magnific.com/vektor-gratis/desain-logo-vektor-kedai-kopi-vintage_47987-24747.jpg?semt=ais_hybrid&w=740&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3z6HqB1hMfyDIL0fmrsOr5OZxcTH-uRegpQs2VoeuQ&s=10",
]

export default function ClientStrip() {
  // Duplikasi logo agar animasi marquee berjalan tanpa jeda (seamless)
  const marqueeClients = [...CLIENTS, ...CLIENTS]

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
          Dipercaya oleh berbagai perusahaan & brand
        </p>
      </div>
      
      <div className="relative mt-8 flex overflow-hidden">
        {/* Efek Fade Kiri & Kanan */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        {/* Track Logo Berjalan */}
        <div className="animate-marquee flex w-max items-center gap-16 px-8">
          {marqueeClients.map((logo, i) => (
            <div 
              key={i} 
              className="group relative flex h-12 w-32 shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
            >
              {/* Logo Grayscale */}
              <img
                src={logo}
                alt={`Klien ${i + 1}`}
                className="max-h-full max-w-full object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}