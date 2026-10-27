import type { Metadata } from "next"
import { Outfit, Playfair_Display } from "next/font/google"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], weight: ["300","400","500","600","700","800","900"], variable: "--font-outfit" })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","500","600","700","800","900"], style: ["normal","italic"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "WebKita.pro — Jasa Pembuatan Website Premium",
  description: "Website custom full coding yang cepat, aman, dan siap mendatangkan pelanggan. Mulai dari Rp 2,1 juta.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}