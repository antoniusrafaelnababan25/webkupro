"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { PRICING_CATEGORIES, PRICING_TIERS, CHECKOUT_BENEFITS, WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

// Definisikan Tipe Data agar TypeScript tidak protes
interface PricingTier {
  name: string;
  desc: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  badge?: string;
}

export default function HargaTabel() {
  const [active, setActive] = useState("company-profile")
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null)
  const [form, setForm] = useState({ name: "", phone: "", notes: "" })
  
  // Ambil data dengan tipe yang aman
  const tiers = (PRICING_TIERS[active as keyof typeof PRICING_TIERS] || []) as PricingTier[]

  const handleOpenCheckout = (tier: PricingTier) => {
    setSelectedTier(tier)
    setForm({ name: "", phone: "", notes: "" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedTier) return
    
    const message = `Halo WebKu, saya ingin memesan paket website.
    
*Paket:* ${selectedTier.name} (${active.replace("-", " ")})
*Harga:* Rp ${selectedTier.price}

*Nama:* ${form.name}
*No. WhatsApp:* ${form.phone}

*Catatan Tambahan:*
${form.notes || "-"}

Mohon informasi selanjutnya. Terima kasih.`

    window.open(WA_LINK(message), "_blank")
  }

  return (
    <section id="harga" className="relative bg-[#faf8ff] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Tabs Kategori */}
        <div className="flex flex-wrap justify-center gap-2">
          {PRICING_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                active === cat.id
                  ? "bg-[#1a0b2e] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Harga */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <AnimatePresence mode="wait">
            {tiers.map((tier, i) => (
              <motion.div
                key={`${active}-${tier.name}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-[2rem] border p-8 shadow-sm transition-all duration-300 ${
                  tier.popular
                    ? "border-purple-500 bg-white shadow-2xl shadow-purple-500/20 md:-translate-y-2"
                    : "border-purple-100 bg-white hover:border-purple-300 hover:shadow-xl"
                }`}
              >
                {/* Badge Populer */}
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-4 py-1 text-[10px] font-extrabold tracking-wider text-white uppercase shadow-lg">
                    {tier.badge}
                  </span>
                )}

                {/* Header */}
                <h3 className="font-serif text-2xl font-bold text-[#1a0b2e]">{tier.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{tier.desc}</p>

                {/* Harga */}
                <div className="mt-6 flex items-baseline gap-1">
                  {tier.price !== "Konsultasi" && (
                    <span className="text-sm font-bold text-gray-500">Rp</span>
                  )}
                  <span className="font-serif text-4xl font-bold text-[#1a0b2e]">{tier.price}</span>
                </div>
                <p className="mt-1 text-xs font-medium text-gray-500">{tier.period}</p>

                {/* Fitur */}
                <ul className="mt-8 flex-1 space-y-4 border-t border-purple-100 pt-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        tier.popular ? "bg-purple-500 text-white" : "bg-purple-100 text-purple-600"
                      }`}>
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => handleOpenCheckout(tier)}
                  className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition ${
                    tier.popular
                      ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl"
                      : "bg-[#1a0b2e] text-white hover:bg-purple-600"
                  }`}
                >
                  Pilih Paket
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-12 text-center text-xs text-gray-500">
          Harga di atas belum termasuk PPN. Semua paket sudah termasuk domain, hosting 1 tahun, SSL, dan garansi revisi.
        </p>
      </div>

      {/* =========================================
          MODAL CHECKOUT (Panel Kanan Elegan)
      ========================================= */}
      <AnimatePresence>
        {selectedTier && (
          <>
            {/* Backdrop Gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTier(null)}
              className="fixed inset-0 z-[100] bg-[#0a0a0a]/60 backdrop-blur-sm"
            />

            {/* Panel Checkout */}
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[110] flex h-full w-full max-w-md flex-col border-l border-purple-200 bg-[#faf8ff] shadow-[-20px_0_50px_rgba(0,0,0,0.1)]"
            >
              {/* Header Panel */}
              <div className="flex items-center justify-between border-b border-purple-100 p-6 md:p-8">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-purple-600 uppercase">Checkout</div>
                  <h3 className="font-serif text-2xl font-bold text-[#1a0b2e]">Ringkasan Pesanan</h3>
                </div>
                <button 
                  onClick={() => setSelectedTier(null)}
                  className="rounded-full bg-white p-2 text-gray-500 shadow-sm transition hover:bg-purple-100 hover:text-purple-600"
                >
                  <Icon name="close" className="h-5 w-5" />
                </button>
              </div>

              {/* Isi Panel */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                
                {/* Ringkasan Paket */}
                <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs font-bold text-purple-600 uppercase">{active.replace("-", " ")}</div>
                      <div className="mt-1 font-serif text-lg font-bold text-[#1a0b2e]">{selectedTier.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#1a0b2e]">Rp {selectedTier.price}</div>
                    </div>
                  </div>
                </div>

                {/* Benefit */}
                <ul className="mt-6 space-y-3">
                  {CHECKOUT_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="my-6 h-px w-full bg-purple-100" />

                {/* Form */}
                <form id="checkout-form" onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-xs font-bold text-gray-500 uppercase">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a0b2e] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold text-gray-500 uppercase">No. WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a0b2e] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold text-gray-500 uppercase">Catatan (Opsional)</label>
                    <textarea
                      rows={2}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Permintaan khusus..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a0b2e] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                    />
                  </div>
                </form>
              </div>

              {/* Footer Tombol */}
              <div className="border-t border-purple-100 bg-white p-6 md:p-8">
                <button
                  type="submit"
                  form="checkout-form"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-purple-500/30 transition hover:-translate-y-0.5 hover:shadow-purple-500/50"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Lanjutkan ke WhatsApp
                </button>
                <p className="mt-3 text-center text-[10px] text-gray-400">
                  Data Anda aman. Kami tidak akan mengirim spam.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}