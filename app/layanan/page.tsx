import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayananHero from "@/components/LayananHero"
import LayananCards from "@/components/LayananCards"
import LayananDark from "@/components/LayananDark"
import LayananTesti from "@/components/LayananTesti"
import { FAQ, WA_LINK } from "@/lib/constants"
import { Icon } from "@/components/icons"

export const metadata = {
  title: "Layanan Pembuatan Website | WebKita.pro",
  description: "Layanan website premium untuk bisnis, UMKM, dan perusahaan. Company Profile, Landing Page, Toko Online.",
}

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-[#faf8ff]">
      <Navbar />
      <LayananHero />
      <LayananCards />
      <LayananDark />
      <LayananTesti />
      
      {/* FAQ Section */}
      <section className="bg-[#faf8ff] px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-3xl font-bold text-[#1a0b2e] md:text-4xl">
            Pertanyaan yang sering diajukan
          </h2>
          <div className="mt-12 space-y-4">
            {FAQ.slice(0, 6).map((item, i) => (
              <details key={i} className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
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
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Butuh bantuan sekarang?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Pelanggan baru dipersilakan menjelajahi layanan kami atau mengobrol dengan perwakilan kami — kami di sini 24/7.
          </p>
          <a href={WA_LINK()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 font-bold text-white transition hover:bg-purple-500">
            <Icon name="whatsapp" className="h-5 w-5" />
            Mulai Chat
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}