'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiFilter, FiArrowRight } from 'react-icons/fi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import { lodgeImages, ImageCategory } from '@/app/lib/images'

const categories: { label: string; value: ImageCategory | 'all' }[] = [
  { label: 'All Photos', value: 'all' },
  { label: 'Wildlife', value: 'wildlife' },
  { label: 'Sanctuaries', value: 'accommodation' },
  { label: 'Safari Activities', value: 'activities' },
  { label: 'Dining & Lounge', value: 'dining' },
  { label: 'Swimming Pool', value: 'pool' },
  { label: 'Savanna Landscape', value: 'landscape' },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<ImageCategory | 'all'>('all')

  const filteredImages =
    selectedCategory === 'all'
      ? lodgeImages
      : lodgeImages.filter((img) => img.category === selectedCategory)

  return (
    <PageShell transparentNav={false}>
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
                  onClick={() => setSelectedCategory(cat.value)}
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
              Showing {filteredImages.length} photographs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md border border-forest-green/10 aspect-[4/3] transition-all hover:-translate-y-1"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14240E]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <section className="py-24 bg-[#14240E] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Experience Mkuyu in person
          </h3>
          <p className="text-white text-base mb-8 leading-relaxed">
            Photographs capture only a glimpse of the peace, birdsong, and open savanna that awaits. Reserve your stay or book a day safari.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/accommodation"
              className="px-9 py-4 bg-forest-green hover:bg-[#4A602B] text-white font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <span>Explore Sanctuaries</span>
              <FiArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="px-9 py-4 bg-white text-[#14240E] hover:bg-forest-mint font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
