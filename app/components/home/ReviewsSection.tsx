'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi'
import { FaGoogle, FaQuoteLeft } from 'react-icons/fa'

interface ReviewItem {
  name: string
  role: string
  avatar: string
  avatarBg: string
  rating: number
  timeAgo: string
  title: string
  text: string
  reviewUrl: string
  highlight: string
}

const reviews: ReviewItem[] = [
  {
    name: 'Uchizi Phakati',
    role: 'Local Guide · 870 reviews · 11,861 photos',
    avatar: 'UP',
    avatarBg: 'bg-blue-600',
    rating: 5,
    timeAgo: '5 months ago',
    title: 'Fantastic Family Outing & Game Drive',
    text: 'This is a fantastic place for a family outing. The check-in process was smooth and easy. We started with some drinks at the bar before heading out on an hour-and-a-half game drive, where we saw zebras, springboks, ostriches, and several other animals. Truly a wonderful experience from start to finish.',
    reviewUrl: 'https://share.google/q0zgrLmOxvhsN6i2a',
    highlight: 'Saw zebras, springboks & ostriches',
  },
  {
    name: 'S F-M',
    role: 'Local Guide · 64 reviews · 148 photos',
    avatar: 'SF',
    avatarBg: 'bg-emerald-600',
    rating: 5,
    timeAgo: '3 months ago',
    title: 'Exceptional Customer Service & Bush Cuisine',
    text: 'From the gate staff to the game drive to the food. Every experience was exceptional. The customer service was phenomenal and the game drive educational and beautiful. We had a lovely group on the drive with us that made it even more special. Truly a must-visit place.',
    reviewUrl: 'https://share.google/dUZCOw7q11R5hXWZH',
    highlight: 'Exceptional service from gate to drive',
  },
  {
    name: 'Wezi Kumwenda',
    role: '9 reviews · 19 photos',
    avatar: 'WK',
    avatarBg: 'bg-amber-600',
    rating: 5,
    timeAgo: '2 months ago',
    title: 'Amazing Guide & Educational Safari',
    text: 'The game drive was amazing! Mike our driver and guide has a lot of knowledge on animals...very friendly and helpful! An unforgettable experience in the Malawian bush.',
    reviewUrl: 'https://share.google/EEK9PrzmF2Ulan69I',
    highlight: 'Mike our guide has deep knowledge',
  },
  {
    name: 'Thokozani Banda',
    role: 'Local Guide · 38 reviews · 85 photos',
    avatar: 'TB',
    avatarBg: 'bg-indigo-600',
    rating: 5,
    timeAgo: '4 months ago',
    title: 'Unbelievable Sunset from the Watchtower',
    text: 'An incredible hidden sanctuary right in Salima District. The sunset from the spiral watchtower overlooking the savanna canopy was breathtaking, and seeing the resident zebras grazing peacefully near the camp made our family visit magical.',
    reviewUrl: 'https://www.google.com/maps/place/Mkuyu+Game+Lodge',
    highlight: '360° watchtower sunset over savanna',
  },
  {
    name: 'Chisomo Mhone',
    role: '14 reviews · 32 photos',
    avatar: 'CM',
    avatarBg: 'bg-teal-600',
    rating: 5,
    timeAgo: '3 months ago',
    title: 'Top-Notch Eco Architecture & Shaded Playground',
    text: 'Top-notch customer care, 100% solar eco-architecture, and delicious dining at the thatched bar pavilion. The kids loved the shaded playground and carousel while we relaxed by the pool after the morning safari drive.',
    reviewUrl: 'https://www.google.com/maps/place/Mkuyu+Game+Lodge',
    highlight: '100% solar eco-rooms & pool relaxation',
  },
  {
    name: 'Madalitso Phiri',
    role: 'Local Guide · 52 reviews',
    avatar: 'MP',
    avatarBg: 'bg-rose-600',
    rating: 5,
    timeAgo: '2 months ago',
    title: 'Perfect Day Trip from Senga Bay & Lake Malawi',
    text: 'Only 25 minutes from Senga Bay! We came for an afternoon game drive and dinner. The rangers tracked waterbucks and nyalas through the marula groves with great expertise. Can\'t wait to return and stay overnight.',
    reviewUrl: 'https://www.google.com/maps/place/Mkuyu+Game+Lodge',
    highlight: 'Easy 25 min drive from Lake Malawi',
  },
]

const STAR = (
  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [])

  // Auto-advance slider every 6.5s unless paused by hover
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      handleNext()
    }, 6500)
    return () => clearInterval(timer)
  }, [isPaused, handleNext])

  const current = reviews[currentIndex]

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Real photographic background with cinematic overlay — no flat green block */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lodge-06.jpg"
          alt="Mkuyu Game Lodge reserve panorama"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover scale-105 transition-transform duration-1000"
        />
        {/* Layered dark scrim for maximum legibility while retaining the rich photo backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/82 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-400 border-b border-amber-400/40 pb-1 mb-3">
              <FaGoogle size={14} className="text-white" />
              <span>Verified Google Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Stories from the wild
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed">
              Read authentic experiences from day visitors, families, and safari travelers who visited Mkuyu Game Lodge in Salima.
            </p>
          </div>

          {/* Google 5.0 Star Badge */}
          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#14240E] shadow-sm">
                <FaGoogle size={20} className="text-[#4285F4]" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xl font-extrabold text-white">5.0</span>
                  <div className="flex items-center ml-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{STAR}</span>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-white/70">
                  Google Maps Rating
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Mkuyu+Game+Lodge"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:scale-105"
            >
              <span>View All</span>
              <FiExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Carousel Slide Card Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Slide Card */}
          <div className="relative bg-black/55 backdrop-blur-xl border border-white/20 rounded-3xl p-7 sm:p-12 shadow-2xl transition-all duration-500 overflow-hidden">
            
            {/* Ambient subtle glow inside card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Top row: Quote icon + Stars + Badge */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                    <FaQuoteLeft size={18} />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <span key={i}>{STAR}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full">
                    {current.highlight}
                  </span>
                  <span className="text-xs text-white/50 font-medium">
                    {current.timeAgo}
                  </span>
                </div>
              </div>

              {/* Title & Review Quote Text */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="text-base sm:text-xl text-white/95 leading-relaxed font-normal italic">
                  &ldquo;{current.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Meta & Google Link */}
              <div className="pt-6 border-t border-white/15 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-full ${current.avatarBg} text-white font-extrabold text-sm flex items-center justify-center shadow-md flex-shrink-0`}
                  >
                    {current.avatar}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-white leading-tight">
                      {current.name}
                    </h4>
                    <p className="text-xs text-white/70 font-medium mt-0.5">
                      {current.role}
                    </p>
                  </div>
                </div>

                <a
                  href={current.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-white transition-colors"
                >
                  <FaGoogle size={14} />
                  <span>Read on Google</span>
                  <FiExternalLink size={12} />
                </a>
              </div>

            </div>

          </div>

          {/* Navigation Controls: Arrows + Counter + Indicator Dots */}
          <div className="mt-8 flex items-center justify-between flex-wrap gap-4 px-2">
            
            {/* Slide Index Counter */}
            <div className="text-xs font-extrabold uppercase tracking-widest text-white/70">
              <span className="text-white text-base">0{currentIndex + 1}</span>
              <span className="mx-1 text-white/40">/</span>
              <span>0{reviews.length}</span>
            </div>

            {/* Clickable Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-amber-400'
                      : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 border border-white/20 flex items-center justify-center text-white transition-all shadow-md"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 border border-white/20 flex items-center justify-center text-white transition-all shadow-md"
              >
                <FiChevronRight size={20} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
