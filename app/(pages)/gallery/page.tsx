'use client'

import { useState, useEffect, useRef, TouchEvent } from 'react'
import Image from 'next/image'
import {
  FiFilter,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
} from 'react-icons/fi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import CtaSection from '@/app/components/ui/CtaSection'
import { lodgeImages, ImageCategory } from '@/app/lib/images'

const categories: { label: string; value: ImageCategory | 'all' }[] = [
  { label: 'All Photos', value: 'all' },
  { label: 'Wildlife', value: 'wildlife' },
  { label: 'Sanctuaries', value: 'accommodation' },
  { label: 'Safari Activities', value: 'activities' },
  { label: 'Dining & Lounge', value: 'dining' },
  { label: 'Swimming Pool', value: 'pool' },
  { label: 'Kids & Grounds', value: 'facilities' },
  { label: 'Savanna Landscape', value: 'landscape' },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<ImageCategory | 'all'>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Touch swipe tracking
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const filteredImages =
    selectedCategory === 'all'
      ? lodgeImages
      : lodgeImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
    }
  }

  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }

    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [lightboxIndex, filteredImages.length])

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 45
    const isRightSwipe = distance < -45

    if (isLeftSwipe) {
      showNext()
    } else if (isRightSwipe) {
      showPrev()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null

  return (
    <PageShell transparentNav={true}>
      <PageHero
        title="Lodge Gallery"
        subtitle="A visual journey through the wilderness, sanctuaries, and experiences of Mkuyu Game Lodge"
        image="/images/lodge-05.jpg"
        imageAlt="Mkuyu Game Lodge reserve photo gallery"
      />

      {/* Filter bar */}
      <section className="py-6 bg-white border-b border-forest-green/15 sticky top-20 z-30 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <div className="flex items-center gap-2 text-forest-green text-xs font-extrabold uppercase tracking-widest mr-2 flex-shrink-0">
              <FiFilter size={16} />
              <span>Category:</span>
            </div>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value
              return (
                <button
                  key={cat.value}
                  onClick={() => {
                    setSelectedCategory(cat.value)
                    setLightboxIndex(null)
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all uppercase tracking-wider ${
                    isActive
                      ? 'bg-forest-green text-white shadow-md'
                      : 'bg-forest-light text-forest-green hover:bg-forest-mint'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-forest-light min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-forest-green">
            <span>
              Showing {filteredImages.length} photographs • Tap any photo to expand &amp; swipe
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md border border-forest-green/10 aspect-[4/3] transition-all hover:-translate-y-1 cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    {img.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                    <FiMaximize2 size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Swipeable Lightbox Carousel */}
      {lightboxIndex !== null && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between select-none animate-fade-in"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Counter, Category, Close Button */}
          <div className="p-4 sm:p-6 flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-extrabold text-light-sage uppercase tracking-wider">
                Photo {lightboxIndex + 1} of {filteredImages.length}
              </span>
              <span className="px-3 py-1 rounded-full bg-forest-green text-white text-[10px] font-extrabold uppercase tracking-widest hidden sm:inline-block">
                {currentImage.category}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
              aria-label="Close photo viewer"
            >
              <FiX size={22} />
            </button>
          </div>

          {/* Center Stage: Previous Button, Large Image, Next Button */}
          <div className="relative flex-1 flex items-center justify-center px-2 sm:px-16 overflow-hidden">
            {/* Previous Arrow */}
            <button
              onClick={showPrev}
              className="absolute left-3 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/15 hover:scale-105"
              aria-label="Previous photo"
            >
              <FiChevronLeft size={28} />
            </button>

            {/* Main Current Photo Container */}
            <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh] flex items-center justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={showNext}
              className="absolute right-3 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/15 hover:scale-105"
              aria-label="Next photo"
            >
              <FiChevronRight size={28} />
            </button>
          </div>

          {/* Bottom Caption & Controls */}
          <div className="p-4 sm:p-6 text-center text-white z-20 space-y-2">
            <p className="text-sm sm:text-base font-semibold text-white/95 max-w-2xl mx-auto drop-shadow-md">
              {currentImage.alt}
            </p>
            <p className="text-[11px] text-white/50 uppercase tracking-widest font-medium">
              Swipe left / right on mobile • Arrow keys on desktop
            </p>
          </div>
        </div>
      )}

      {/* Reusable CTA */}
      <CtaSection
        title="Experience Mkuyu in person"
        subtitle="Photographs capture only a glimpse of the peace, birdsong, and open savanna that awaits. Reserve your stay or book a day safari."
        primaryText="Explore Sanctuaries"
        primaryHref="/accommodation"
        secondaryText="Get in Touch"
        secondaryHref="/contact"
      />
    </PageShell>
  )
}
