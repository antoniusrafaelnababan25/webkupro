import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FaqHero from "@/components/FaqHero"
import FaqAccordion from "@/components/FaqAccordion"
import { WA_LINK } from "@/lib/constants"
import { Icon } from "@/components/icons"

export const metadata = {
  title: "FAQ - Pertanyaan Umum | WebKita.pro",
  description: "Temukan jawaban atas pertanyaan umum seputar layanan pembuatan website, harga, dan proses kerja di WebKita.",
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#faf8ff]">
      <Navbar />
      
      <FaqHero />
      <FaqAccordion />

      {/* CTA Bantuan */}
      <section className="bg-white px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-[#1a0b2e] p-12 text-white shadow-2xl md:p-16">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Masih punya pertanyaan?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Tim kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami jika ada yang belum jelas.
          </p>
          <a 
            href={WA_LINK("Halo, saya punya pertanyaan yang belum ada di FAQ")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 font-bold text-white transition hover:bg-purple-500"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Tanya Langsung via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}