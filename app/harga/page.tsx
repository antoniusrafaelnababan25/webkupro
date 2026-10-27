import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HargaHero from "@/components/HargaHero"
import HargaTabel from "@/components/HargaTabel"
import { FAQ, WA_LINK } from "@/lib/constants"
import { Icon } from "@/components/icons"

export const metadata = {
  title: "Harga Pembuatan Website | WebKita.pro",
  description: "Daftar harga pembuatan website transparan. Mulai dari Rp 1,1 juta untuk landing page.",
}

export default function HargaPage() {
  return (
    <main className="min-h-screen bg-[#faf8ff]">
      <Navbar />
      
      <HargaHero />
      <HargaTabel />

      {/* FAQ Section (Khusus Harga) */}
      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-3xl font-bold text-[#1a0b2e] md:text-4xl">
            Pertanyaan seputar harga
          </h2>
          <div className="mt-12 space-y-4">
            {FAQ.slice(3, 8).map((item, i) => ( // Ambil beberapa FAQ yang relevan dengan harga
              <details key={i} className="group rounded-2xl border border-purple-100 bg-[#faf8ff] p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-serif text-lg font-bold text-[#1a0b2e]">
                  {item.q}
                  <span className="text-purple-500 transition group-open:rotate-180">
                    <Icon name="chevron-down" className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bantuan */}
      <section className="bg-[#1a0b2e] px-4 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Butuh paket khusus?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Punya kebutuhan yang belum ada di daftar? Hubungi kami untuk penawaran custom.
          </p>
          <a href={WA_LINK("Saya ingin konsultasi paket custom")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 font-bold text-white transition hover:bg-purple-500">
            <Icon name="whatsapp" className="h-5 w-5" />
            Konsultasi Sekarang
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}