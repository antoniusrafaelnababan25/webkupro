"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { PRICING, WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

type Key = keyof typeof PRICING
const KEYS: Key[] = ["company-profile", "landing-page", "toko-online", "booking", "topup", "sistem-custom"]

export default function Pricing() {
  const [active, setActive] = useState<Key>("company-profile")
  const data = PRICING[active]

  return (
    <section id="harga" className="relative overflow-hidden bg-white px-4 py-24 md:py-32">
      {/* Decorative */}
      <div aria-hidden className="pointer-events-none absolute -top-20 right-0 font-serif text-[280px] leading-none font-bold text-orange-500/5 select-none">
        02
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-orange-600 uppercase">
            <span className="h-px w-8 bg-orange-500" />
            Paket Harga
            <span className="h-px w-8 bg-orange-500" />
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold text-charcoal md:text-5xl">
            Pilih paket yang{" "}
            <span className="text-gradient-orange">sesuai kebutuhan</span> bisnis Anda
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Setiap paket sudah termasuk domain, hosting, dan dukungan penuh dari tim kami. Tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {KEYS.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`rounded-full px-4 py-2.5 text-xs font-bold transition md:text-sm ${
                active === k
                  ? "bg-charcoal text-white shadow-lg"
                  : "bg-cream text-charcoal hover:bg-orange-100"
              }`}
            >
              {PRICING[k].label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <AnimatePresence mode="wait">
            {data.tiers.map((tier, i) => (
              <motion.div
                key={`${active}-${tier.name}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                  tier.popular
                    ? "border-orange-500 bg-gradient-to-b from-orange-50 to-white shadow-2xl shadow-orange-500/20 md:-translate-y-2"
                    : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <>
                    <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 opacity-20 blur-xl" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-[10px] font-extrabold tracking-wider text-white uppercase shadow-lg">
                      ★ Paling Populer
                    </span>
                  </>
                )}

                {/* Header */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal">{tier.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-gray-500">{tier.meta}</p>
                </div>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1">
                  {tier.price !== "Konsultasi" && (
                    <span className="text-sm font-bold text-gray-500">Rp</span>
                  )}
                  <span className="font-serif text-4xl font-bold text-charcoal">
                    {tier.price}
                  </span>
                </div>

                {/* Desc */}
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{tier.desc}</p>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-charcoal">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        tier.popular ? "bg-orange-500 text-white" : "bg-orange-100 text-orange-600"
                      }`}>
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WA_LINK(`Saya tertarik Paket ${tier.name} ${data.label}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition ${
                    tier.popular
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl"
                      : "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                  }`}
                >
                  Pilih Paket
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-xs font-medium text-gray-500">
          Semua paket sudah termasuk domain (.com), hosting 1 tahun, SSL, dan garansi revisi.
        </p>
      </div>
    </section>
  )
}