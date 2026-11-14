'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiCompass, FiShield, FiSun, FiMapPin } from 'react-icons/fi'

const heroSlides = [
  {
    image: '/images/lodge-entrance.jpg',
    alt: 'Mkuyu Game Lodge Grand Entrance Sanctuary Gate',
  },
  {
    image: '/images/lodge-03.jpg',
    alt: 'Mkuyu Game Lodge savanna landscape',
  },
  {
    image: '/images/lodge-04.jpg',
    alt: 'Dawn safari game drive at Mkuyu',
  },
  {
    image: '/images/lodge-07.jpg',
    alt: 'Wildlife sanctuary and natural flora',
  },
  {
    image: '/images/lodge-11.jpg',
    alt: 'Protected wilderness in Salima District',
  },
  {
    image: '/images/lodge-14.jpg',
    alt: 'Handcrafted eco sanctuary exterior',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[100svh] sm:h-screen flex items-center overflow-hidden">
      {/* Background Slides with crossfade */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1200ms' }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Cinematic contrast overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-transparent to-black/40" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.14),_transparent_60%)]" />

      {/* Hero Content — Clean, Responsive & Perfectly Balanced on Both Mobile & Desktop */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-40 lg:pt-48 pb-14 sm:pb-16">
        <div className="max-w-3xl text-left space-y-4 sm:space-y-6 mt-1 sm:mt-6 lg:mt-10">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.15] sm:leading-[1.08] tracking-tight">
            Where the Malawian bush speaks in tranquility
          </h1>

          {/* Descriptive Subtitle */}
          <p className="text-xs sm:text-lg text-white/90 leading-relaxed font-normal max-w-2xl">
            An intimate 332.15-hectare wildlife sanctuary. Experience 100% solar off-grid sanctuaries, guided open 4x4 safari drives, resident zebras, and panoramic watchtower sunsets.
          </p>

          {/* Dual Action Buttons (Stacked cleanly on mobile, inline on desktop) */}
          <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-2xl hover:scale-105 active:scale-95 text-center"
            >
              <span>Plan Your Safari</span>
              <FiArrowRight size={15} />
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all backdrop-blur-md border border-white/25 hover:border-white/40 text-center"
            >
              <FiCompass size={15} />
              <span>Explore Activities</span>
            </Link>
          </div>

          {/* Quick Reserve Perks Tags (Clean pills on mobile) */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-2 sm:gap-6 text-[10px] sm:text-xs text-white/85 font-medium">
            <span className="inline-flex items-center gap-1.5 bg-black/40 sm:bg-transparent backdrop-blur-xs px-2.5 py-1 sm:p-0 rounded-full border border-white/15 sm:border-0">
              <FiShield size={13} className="text-light-sage" />
              <span>332.15 ha Protected Reserve</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-black/40 sm:bg-transparent backdrop-blur-xs px-2.5 py-1 sm:p-0 rounded-full border border-white/15 sm:border-0">
              <FiSun size={13} className="text-light-sage" />
              <span>100% Off-Grid Solar Energy</span>
            </span>
            <span className="hidden sm:inline-block text-white/40">•</span>
            <span className="inline-flex items-center bg-forest-green/60 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-full text-light-sage font-bold border border-forest-green/40 sm:border-0">
              Open Daily 08:30 – 18:30
            </span>
          </div>

        </div>

        {/* Slide indicators in the bottom right */}
        <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-12 z-20 flex items-center gap-1.5 sm:gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide ? 'w-6 sm:w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
