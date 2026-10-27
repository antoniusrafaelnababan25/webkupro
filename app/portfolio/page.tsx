import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PortofolioHero from "@/components/PortofolioHero"
import PortofolioFeatured from "@/components/PortofolioFeatured"
import PortofolioGallery from "@/components/PortofolioGallery"
import { WA_LINK } from "@/lib/constants"
import { Icon } from "@/components/icons"

export const metadata = {
  title: "Portofolio | WebKu.pro",
  description: "Jelajahi karya dan desain website yang telah kami buat untuk klien dari berbagai industri.",
}

export default function PortofolioPage() {
  return (
    <main className="min-h-screen bg-[#faf8ff]">
      <Navbar />
      
      <PortofolioHero />
      <PortofolioFeatured />
      <PortofolioGallery />

      {/* CTA Bawah */}
      <section className="bg-[#1a0b2e] px-4 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Ingin karya Anda menjadi yang berikutnya?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Mari diskusikan ide Anda. Kami siap mengubahnya menjadi website yang memukau dan fungsional.
          </p>
          <a 
            href={WA_LINK("Saya ingin membuat website seperti di portofolio Anda")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 font-bold text-white transition hover:bg-purple-500"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Mulai Proyek Anda
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}