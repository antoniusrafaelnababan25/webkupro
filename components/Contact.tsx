"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { WA_LINK, BRAND } from "@/lib/constants"
import { Icon } from "./icons"

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", need: "Company profile" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = `Halo, saya ${form.name} (${form.phone}). Kebutuhan website: ${form.need}. Saya ingin konsultasi gratis.`
    window.open(WA_LINK(msg), "_blank")
  }

  return (
    <section id="kontak" className="relative overflow-hidden bg-[#faf8ff] px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-purple-600 uppercase">
              <span className="h-px w-8 bg-purple-500" />
              Hubungi Kami
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-[1.15] font-bold text-[#1a0b2e] md:text-5xl">
              Mari bicarakan <span className="text-gradient-purple">kebutuhan digital</span> Anda
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Ceritakan ide atau masalah bisnis Anda. Kami akan bantu arahkan solusi yang paling sesuai — tanpa biaya dan tanpa komitmen.
            </p>

            <div className="mt-10 space-y-4">
              <a href={WA_LINK()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-purple-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white">
                  <Icon name="whatsapp" className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-gray-500 uppercase">WhatsApp</div>
                  <div className="text-sm font-extrabold text-[#1a0b2e]">{BRAND.phone}</div>
                </div>
                <Icon name="arrow-up-right" className="h-5 w-5 text-purple-500 transition group-hover:translate-x-1" />
              </a>

              <a href={`mailto:${BRAND.email}`} className="group flex items-center gap-4 rounded-2xl border border-purple-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white">
                  <Icon name="mail" className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-gray-500 uppercase">Email</div>
                  <div className="text-sm font-extrabold text-[#1a0b2e]">{BRAND.email}</div>
                </div>
                <Icon name="arrow-up-right" className="h-5 w-5 text-purple-500 transition group-hover:translate-x-1" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-purple-100 bg-white p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white">
                  <Icon name="map-pin" className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-gray-500 uppercase">Lokasi</div>
                  <div className="text-sm font-extrabold text-[#1a0b2e]">{BRAND.address}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-purple-100 bg-white p-8 shadow-xl md:p-10">
              <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-purple-200/50 blur-3xl" />
              <div className="relative">
                <h3 className="font-serif text-2xl font-bold text-[#1a0b2e]">Konsultasi Gratis</h3>
                <p className="mt-2 text-sm text-gray-600">Isi data singkat, langsung lanjut ke WhatsApp.</p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold text-[#1a0b2e] uppercase">Nama</span>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nama lengkap" className="w-full rounded-xl border border-purple-200 bg-[#faf8ff] px-4 py-3 text-sm text-[#1a0b2e] outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold text-[#1a0b2e] uppercase">No. WhatsApp</span>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="08xxxxxxxxxx" className="w-full rounded-xl border border-purple-200 bg-[#faf8ff] px-4 py-3 text-sm text-[#1a0b2e] outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold text-[#1a0b2e] uppercase">Kebutuhan</span>
                    <select value={form.need} onChange={(e) => setForm({ ...form, need: e.target.value })} className="w-full rounded-xl border border-purple-200 bg-[#faf8ff] px-4 py-3 text-sm text-[#1a0b2e] outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20">
                      <option>Company profile</option>
                      <option>Landing page</option>
                      <option>Toko online</option>
                      <option>Sistem booking</option>
                      <option>Website top up</option>
                      <option>Sistem custom</option>
                      <option>Belum tahu — konsultasi dulu</option>
                    </select>
                  </label>
                  <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-purple-500/30 transition hover:-translate-y-0.5">
                    <Icon name="whatsapp" className="h-5 w-5" />
                    Chat WhatsApp Sekarang
                  </button>
                </form>
                <p className="mt-4 text-center text-xs font-medium text-gray-500">Data Anda aman. Kami tidak akan spam.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}