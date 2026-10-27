"use client"

import { SERVICE_TESTIMONIALS } from "@/lib/constants"
import { Icon } from "./icons"

export default function LayananTesti() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl font-bold text-[#1a0b2e] md:text-4xl">
          Apa kata klien kami
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_TESTIMONIALS.map((testi, i) => (
            <div key={i} className="rounded-2xl border border-purple-100 bg-[#faf8ff] p-6 shadow-sm">
              <div className="flex gap-1 text-amber-500">
                {[1,2,3,4,5].map(s => <Icon key={s} name="star" className="h-4 w-4" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">"{testi.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 text-sm font-bold text-purple-700">
                  {testi.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1a0b2e]">{testi.name}</div>
                  <div className="text-xs text-gray-500">{testi.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}