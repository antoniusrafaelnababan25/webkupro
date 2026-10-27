"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { STORIES } from "@/lib/constants"
import { Icon } from "./icons"

export default function CustomerStories() {
  const [current, setCurrent] = useState(0)
  const story = STORIES[current]

  return (
    <section className="relative overflow-hidden bg-[#faf8ff] px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1a0b2e] md:text-5xl">Cerita sukses klien</h2>
          <p className="mt-4 text-base text-gray-600">Platform kami dibangun dari nol dengan inovasi berbasis AI</p>
        </div>

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className={`grid overflow-hidden rounded-3xl ${story.color} md:grid-cols-2`}
            >
              <div className="flex flex-col justify-center p-8 md:p-12">
                <Icon name="quote" className="h-10 w-10 text-purple-500/40" />
                <p className="mt-4 text-lg leading-relaxed font-medium md:text-xl">{story.quote}</p>
                <div className="mt-6">
                  <div className="font-bold">{story.site}</div>
                  <div className="text-sm opacity-70">{story.role} — {story.name}</div>
                </div>
              </div>
              <div className="relative aspect-video md:aspect-auto">
                <Image src={story.image} alt={story.name} fill className="object-cover" />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {STORIES.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-purple-500" : "w-2 bg-purple-200"}`} />
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setCurrent((current - 1 + STORIES.length) % STORIES.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-white text-purple-600 transition hover:bg-purple-50">
                <Icon name="arrow-left" className="h-5 w-5" />
              </button>
              <button onClick={() => setCurrent((current + 1) % STORIES.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-white text-purple-600 transition hover:bg-purple-50">
                <Icon name="arrow-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}