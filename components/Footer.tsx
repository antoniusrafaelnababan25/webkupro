import { BRAND, WA_LINK, NAV_LINKS } from "@/lib/constants"
import { Icon } from "./icons"

// Daftar URL Logo Partner
const PARTNERS = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mJU9Sl6AY357z908vSxli9mHFXYZs_snXmz4Jb7e9g&s",
  "https://img.rwbcdn.net/w/rumahweb-logo.svg",
  "https://static.domainesia.com/assets/images/logo-domainesia-2021.svg",
  "https://web-cms.biznetgio.com/uploads/Biznet_GIO_Logo_1_header_78e8b0eceb.webp",
  "https://newfold.scene7.com/is/content/NewfoldDigital/Bluehost_logo?ts=1792773785321&dpr=off",
  "https://asset.jagoanhosting.com/wp-content/uploads/2024/01/cropped-cropped-cropped-logo-JH-e1704162514796-2-e1704178548518.png",
  "https://anymhost.id/images/logo/logo-anymhost-sm.avif",
  "https://portal.idcloudhost.com/logo.svg",
]

export default function Footer() {
  // Duplikasi array untuk efek looping marquee yang mulus
  const marqueePartners = [...PARTNERS, ...PARTNERS]

  return (
    <footer className="relative overflow-hidden bg-[#1a0b2e] pt-20 text-gray-300">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* =========================================
            SECTION PARTNER (MARQUEE BERJALAN)
        ========================================= */}
        <div className="mb-16 border-b border-white/10 pb-16">
          <div className="text-center">
            <h4 className="text-xs font-bold tracking-widest text-purple-400 uppercase">Bekerjasama Dengan</h4>
            <p className="mt-2 text-sm text-gray-500">Dipercaya oleh perusahaan hosting dan infrastruktur terbaik.</p>
          </div>
          
          {/* Container Marquee */}
          <div className="relative mt-10 flex overflow-hidden">
            {/* Efek Fade di Kiri & Kanan agar terlihat menyatu */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#1a0b2e] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#1a0b2e] to-transparent" />

            {/* Track Marquee */}
            <div className="animate-marquee flex w-max items-center gap-12 px-6">
              {marqueePartners.map((logo, i) => (
                <div 
                  key={i} 
                  className="group relative flex h-12 w-32 shrink-0 items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Glow saat Hover */}
                  <div className="absolute inset-0 rounded-xl bg-purple-500/0 blur-xl transition-all duration-300 group-hover:bg-purple-500/20" />
                  
                  {/* Logo */}
                  <img
                    src={logo}
                    alt={`Partner ${i + 1}`}
                    className="relative z-10 max-h-full max-w-full object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            GRID UTAMA FOOTER
        ========================================= */}
        <div className="grid gap-12 pb-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <a href="/" className="flex items-center gap-2 text-2xl font-extrabold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600">
                <Icon name="sparkle" className="h-4 w-4" />
              </span>
              {BRAND.name}<span className="text-purple-400">{BRAND.suffix}</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-400">
              Studio digital yang membangun website premium untuk bisnis Indonesia. Dari UMKM hingga perusahaan besar.
            </p>
            <div className="mt-6 flex gap-3">
              {["whatsapp", "instagram", "mail"].map((icon) => (
                <a key={icon} href={icon === "whatsapp" ? WA_LINK() : icon === "mail" ? `mailto:${BRAND.email}` : "#"} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400">
                  <Icon name={icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-xs font-bold tracking-widest text-purple-400 uppercase">Navigasi</h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}><a href={link.href} className="text-gray-400 transition hover:text-white">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-xs font-bold tracking-widest text-purple-400 uppercase">Layanan</h4>
            <ul className="space-y-3 text-sm">
              {["Company Profile", "Landing Page", "Toko Online", "Sistem Booking", "Top Up Game", "Sistem Custom"].map((s) => (
                <li key={s}><a href="#layanan" className="text-gray-400 transition hover:text-white">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-xs font-bold tracking-widest text-purple-400 uppercase">Sumber Daya</h4>
            <ul className="space-y-3 text-sm">
              {["Blog", "Panduan", "FAQ", "Tutorial", "Karier"].map((s) => (
                <li key={s}><a href="#" className="text-gray-400 transition hover:text-white">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-xs font-bold tracking-widest text-purple-400 uppercase">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-purple-500" /><span className="text-gray-400">{BRAND.address}</span></li>
              <li className="flex items-start gap-2"><Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-purple-500" /><a href={WA_LINK()} className="text-gray-400 transition hover:text-white">{BRAND.phone}</a></li>
              <li className="flex items-start gap-2"><Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-purple-500" /><a href={`mailto:${BRAND.email}`} className="text-gray-400 transition hover:text-white">{BRAND.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-gray-500">
          <span>© 2026 {BRAND.name}{BRAND.suffix}. Semua hak cipta dilindungi.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none overflow-hidden">
        <div className="bg-gradient-to-b from-purple-500/25 to-transparent bg-clip-text text-center font-serif text-[18vw] leading-none font-bold tracking-tight text-transparent select-none">
          {BRAND.name}{BRAND.suffix}
        </div>
      </div>
    </footer>
  )
}