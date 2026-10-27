import PromoBar from "@/components/PromoBar"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ClientStrip from "@/components/ClientStrip" // <-- Tambahkan Import ini
import PricingPlans from "@/components/PricingPlans"
import HostFeatures from "@/components/HostFeatures"
import TopReasons from "@/components/TopReasons"
import SimpleManagement from "@/components/SimpleManagement"
import CustomerStories from "@/components/CustomerStories"
import CtaFinal from "@/components/CtaFinal"
import Faq from "@/components/Faq"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import WhatsAppFab from "@/components/WhatsAppFab"
import ScrollProgress from "@/components/ScrollProgress"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8ff]">
      <ScrollProgress />
      <PromoBar />
      <Navbar />
      <Hero />
      
      {/* SECTION BARU: LOGO KLIEN BERJALAN */}
      <ClientStrip />
      
      <PricingPlans />
      <HostFeatures />
      <TopReasons />
      <SimpleManagement />
      <CustomerStories />
      <CtaFinal />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}