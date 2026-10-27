"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { WA_LINK, BRAND } from "@/lib/constants"
import { Icon } from "./icons"

export default function KontakForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Halo WebKita, saya ${form.name} (${form.phone}). Pesan: ${form.message}`
    window.open(WA_LINK(text), "_blank")
  }

  return (
    <section className="relative bg-[#faf8ff] px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 md:grid-cols-5 md:gap-20">
          
          {/* =========================================
              KIRI: Info Kontak (Minimalis Modern)
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h2 className="font-serif text-3xl font-bold text-[#1a0b2e] md:text-4xl">
              Mari terhubung.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Punya pertanyaan atau ingin memulai proyek? Kami siap mendengar. Tim kami biasanya membalas dalam waktu kurang dari 1 jam pada jam kerja.
            </p>

            <div className="mt-12 space-y-8">
              {/* WhatsApp */}
              <a href={WA_LINK()} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 transition group-hover:scale-110">
                  <Icon name="whatsapp" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-gray-400 uppercase">WhatsApp</div>
                  <div className="mt-1 text-base font-semibold text-[#1a0b2e] group-hover:text-purple-600 transition">
                    {BRAND.phone}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a href={`mailto:${BRAND.email}`} className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition group-hover:scale-110">
                  <Icon name="mail" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-gray-400 uppercase">Email</div>
                  <div className="mt-1 text-base font-semibold text-[#1a0b2e] group-hover:text-purple-600 transition">
                    {BRAND.email}
                  </div>
                </div>
              </a>

              {/* Lokasi */}
              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Icon name="map-pin" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-gray-400 uppercase">Lokasi</div>
                  <div className="mt-1 text-base font-semibold text-[#1a0b2e]">
                    {BRAND.address}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              KANAN: Form (Clean & Modern)
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Nama */}
                <div className="relative">
                  <label className="mb-2 block text-xs font-bold text-gray-500 uppercase">Nama</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="Nama lengkap Anda"
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-base text-[#1a0b2e] outline-none transition-colors placeholder:text-gray-300 focus:border-purple-600"
                  />
                </div>

                {/* No WA */}
                <div className="relative">
                  <label className="mb-2 block text-xs font-bold text-gray-500 uppercase">No. WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    placeholder="08xxxxxxxxxx"
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-base text-[#1a0b2e] outline-none transition-colors placeholder:text-gray-300 focus:border-purple-600"
                  />
                </div>
              </div>

              {/* Pesan */}
              <div className="relative">
                <label className="mb-2 block text-xs font-bold text-gray-500 uppercase">Pesan Anda</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Ceritakan ide atau kebutuhan Anda..."
                  className="w-full resize-none border-b-2 border-gray-200 bg-transparent py-3 text-base text-[#1a0b2e] outline-none transition-colors placeholder:text-gray-300 focus:border-purple-600"
                />
              </div>

              {/* Tombol Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#1a0b2e] px-8 py-4 text-base font-bold text-white shadow-xl shadow-gray-200 transition-all hover:bg-purple-600 hover:shadow-purple-500/30"
                >
                  Kirim Pesan
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
                <p className="mt-4 text-center text-xs text-gray-400">
                  Dengan mengirim pesan, Anda akan diarahkan ke WhatsApp.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}