"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { NAV_LINKS, WA_LINK, BRAND } from "@/lib/constants"
import { Icon } from "./icons"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-300"
    >
      {/* Garis Aksen Ungu di Atas (Hanya muncul saat scroll) */}
      <div className={`absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />

      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-[#1a0b2e]/80 shadow-[0_10px_40px_rgba(147,51,234,0.15)] backdrop-blur-xl border border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white transition-all duration-300 ${scrolled ? "shadow-[0_0_15px_rgba(147,51,234,0.5)]" : ""}`}>
            <Icon name="sparkle" className="h-4 w-4" />
          </span>
          <span className={scrolled ? "text-white" : "text-white"}>
            {BRAND.name}
            <span className="text-purple-400">{BRAND.suffix}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "text-gray-300 hover:bg-purple-500/20 hover:text-purple-300"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={WA_LINK()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Konsultasi Gratis
            <Icon name="arrow" className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={`grid h-10 w-10 place-items-center rounded-xl transition-all duration-300 md:hidden ${
            scrolled ? "bg-purple-500/20 text-purple-300" : "bg-white/10 text-white backdrop-blur-md"
          }`}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#1a0b2e]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-purple-500/20 hover:text-purple-300"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WA_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/30"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Konsultasi Gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}