'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

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

      {/* Cinematic contrast overlay & subtle sun glare: illuminates image details while softly smoothing camera artifacts */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-transparent to-black/30" />
      {/* Soft natural sun glare accent */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.14),_transparent_60%)]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,0,0,0.45),_transparent_65%)]" />

      {/* Hero Content — Minimalist headline + refined CTA button, shifted to the LEFT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight">
            Where the Malawian bush speaks in tranquility
          </h1>

          {/* Minimalist CTA button */}
          <div className="pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>Plan Your Safari</span>
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Minimal slide indicators in the bottom right */}
        <div className="absolute bottom-10 right-8 sm:right-12 z-20 flex items-center gap-2.5">
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


