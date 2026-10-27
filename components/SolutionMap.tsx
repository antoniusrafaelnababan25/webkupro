"use client"
import { motion } from "motion/react"
import { SERVICES, WA_LINK } from "@/lib/constants"
import { Icon } from "./icons"

export default function SolutionMap() {
  return (
    <section id="layanan" className="bg-gradient-to-b from-orange-50/50 to-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">[ Layanan Digital ]</span>
          <h2 className="mt-4 text-3xl font-extrabold text-[#1a1a1a] md:text-4xl">Solusi Digital yang Dirancang Sesuai Kebutuhan Bisnis Anda</h2>
          <p className="mt-4 text-base font-medium text-gray-600">Mulai dari website profesional, sistem custom, aplikasi, hingga optimasi performa digital dalam satu alur layanan yang terarah.</p>
        </div>

        <div className="relative mt-16">
          {/* Node Utama */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative z-10 mx-auto flex max-w-md items-center gap-5 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 px-8 py-6 text-white shadow-xl shadow-orange-300/50">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/20"><Icon name="target" className="h-7 w-7" /></div>
            <div>
              <div className="text-[11px] font-bold tracking-widest text-white/80 uppercase">Digital Solution</div>
              <h3 className="text-xl font-bold">untuk Bisnis Anda</h3>
              <p className="mt-1 text-xs text-white/90">Aset digital yang membantu bisnis tampil kredibel, mudah ditemukan, dan siap berkembang.</p>
            </div>
          </motion.div>

          <div className="mx-auto h-10 w-0.5 bg-orange-200" />
          <div className="mx-auto hidden h-0.5 w-[66%] bg-orange-200 md:block" />

          <div className="relative z-10 grid gap-6 pt-10 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }} className="group relative rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl">
                <div className="absolute -top-10 left-1/2 hidden h-10 w-0.5 -translate-x-1/2 bg-orange-200 md:block" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 text-orange-500 transition group-hover:scale-110"><Icon name={s.icon} className="h-6 w-6" /></div>
                <div className="text-[11px] font-bold tracking-widest text-orange-500 uppercase">{s.cat}</div>
                <h3 className="mt-1 text-lg font-bold text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-2 text-sm font-medium text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto h-10 w-0.5 bg-orange-200" />

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1.2 }} className="relative z-10 mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-orange-600 to-amber-700 px-8 py-8 text-white shadow-xl shadow-orange-300/50">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/20"><Icon name="trending" className="h-7 w-7" /></div>
              <div>
                <div className="text-[11px] font-bold tracking-widest text-orange-100 uppercase">Growth & Performance</div>
                <h3 className="text-xl font-bold">SEO, Ads & Analytics</h3>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-white/90">Optimasi website agar siap ditemukan, diukur, digunakan untuk iklan, dan tetap berjalan maksimal.</p>
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/20 pt-5 text-sm font-semibold">
              {["Basic SEO", "Google Analytics", "Search Console", "Ads Tracking", "Speed Optimization", "Maintenance"].map((f) => (
                <div key={f} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-orange-200" /> {f}</div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <a href={WA_LINK("Saya ingin konsultasi kebutuhan digital bisnis saya")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:underline">
            Konsultasikan Kebutuhan Digital Anda <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}