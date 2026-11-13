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
    <section className="relative min-h-screen h-screen flex items-center overflow-hidden">
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

      {/* Hero Content — Rich, Balanced & Aligned to the Left (Dropped Down) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 sm:pt-44 lg:pt-48 pb-16">
        <div className="max-w-3xl text-left space-y-6 mt-4 sm:mt-8 lg:mt-12">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
            Where the Malawian bush speaks in tranquility
          </h1>

          {/* Descriptive Subtitle to Fill the Space Elegantly */}
          <p className="text-sm sm:text-lg text-white/90 leading-relaxed font-normal max-w-2xl">
            An intimate 332.15-hectare wildlife sanctuary. Experience 100% solar off-grid sanctuaries, guided open 4x4 safari drives, resident zebras, and panoramic watchtower sunsets.
          </p>

          {/* Dual Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>Plan Your Safari</span>
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/15 hover:bg-white/25 text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all backdrop-blur-md border border-white/25 hover:border-white/40"
            >
              <FiCompass size={15} />
              <span>Explore Activities</span>
            </Link>
          </div>

          {/* Quick Reserve Perks Tags */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white/80 font-medium">
            <span className="flex items-center gap-1.5">
              <FiShield size={14} className="text-light-sage" />
              <span>332.15 ha Protected Reserve</span>
            </span>
            <span className="flex items-center gap-1.5">
              <FiSun size={14} className="text-light-sage" />
              <span>100% Off-Grid Solar Energy</span>
            </span>
            <span className="hidden sm:inline-block text-white/40">•</span>
            <span className="text-light-sage font-semibold">
              Open Daily 08:30 – 18:30
            </span>
          </div>

        </div>

        {/* Slide indicators in the bottom right */}
        <div className="absolute bottom-10 right-8 sm:right-12 z-20 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
