"use client"

import Image from "next/image"
import { motion, useMotionValue, useTransform } from "motion/react"
import { useRef } from "react"
import { BENTO, WA_LINK, STATS } from "@/lib/constants"
import { Icon } from "./icons"

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"])

  function handleMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function Bento() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-4 py-24 text-white md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-orange opacity-60" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-orange-400 uppercase">
            <span className="h-px w-8 bg-orange-500" />
            Bukan Sekadar Website
            <span className="h-px w-8 bg-orange-500" />
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold md:text-5xl">
            Website yang dibuat untuk{" "}
            <span className="text-gradient-orange">terlihat profesional, dipercaya,</span>{" "}
            dan menghasilkan leads
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {BENTO.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={item.big ? "md:col-span-2" : ""}
            >
              <TiltCard>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-orange-400/30 hover:bg-white/10">
                  {item.big ? (
                    <div className="flex h-full flex-col gap-6 md:flex-row md:items-center">
                      <div className="flex-1">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg">
                          <Icon name={item.icon} className="h-6 w-6" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.desc}</p>
                        {item.chips && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.chips.map((c) => (
                              <span key={c} className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-[10px] font-bold text-orange-300 uppercase">
                                {c}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="w-full shrink-0 md:w-64">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                          <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg">
                        <Icon name={item.icon} className="h-6 w-6" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.desc}</p>
                      <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-2xl">
                        <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                    </>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.a
            href={WA_LINK()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 p-6 shadow-2xl shadow-orange-500/40 transition hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-grid-orange opacity-20" />
            <div className="relative">
              <div className="font-serif text-5xl font-bold text-white">{STATS[0].num}+</div>
              <div className="mt-1 text-sm font-bold text-white/90">Website Dikerjakan</div>
              <p className="mt-2 text-xs text-white/80">Sudah kami bantu untuk berbagai kebutuhan bisnis.</p>
            </div>
            <div className="relative mt-6 flex items-center gap-2 text-sm font-bold text-white">
              Konsultasi Gratis
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition group-hover:bg-white group-hover:text-orange-600">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}