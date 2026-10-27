import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import KontakHero from "@/components/KontakHero"
import KontakForm from "@/components/KontakForm"
import KontakFounder from "@/components/KontakFounder"

export const metadata = {
  title: "Kontak Kami | WebKita.pro",
  description: "Hubungi WebKita untuk konsultasi pembuatan website. Tim kami siap membantu Anda.",
}

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-[#faf8ff]">
      <Navbar />
      
      <KontakHero />
      <KontakForm />
      <KontakFounder />

      <Footer />
    </main>
  )
}