'use client'

import { useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi'
import { FaGoogle } from 'react-icons/fa'

interface ReviewItem {
  name: string
  role: string
  avatar: string
  avatarBg: string
  rating: number
  timeAgo: string
  text: string
  reviewUrl: string
}

const reviews: ReviewItem[] = [
  {
    name: 'Uchizi Phakati',
    role: 'Local Guide · 870 reviews',
    avatar: 'UP',
    avatarBg: 'bg-[#2E5B88]',
    rating: 5,
    timeAgo: '5 months ago',
    text: 'This is a fantastic place for a family outing. The check-in process was smooth and easy. We started with some drinks at the bar before heading out on an hour-and-a-half game drive, where we saw zebras, springboks, ostriches, and several other animals. Truly a wonderful experience from start to finish.',
    reviewUrl: 'https://share.google/q0zgrLmOxvhsN6i2a',
  },
  {
    name: 'S F-M',
    role: 'Local Guide · 64 reviews',
    avatar: 'SF',
    avatarBg: 'bg-[#3D6B35]',
    rating: 5,
    timeAgo: '3 months ago',
    text: 'From the gate staff to the game drive to the food. Every experience was exceptional. The customer service was phenomenal and the game drive educational and beautiful. We had a lovely group on the drive with us that made it even more special. Truly a must-visit place.',
    reviewUrl: 'https://share.google/dUZCOw7q11R5hXWZH',
  },
  {
    name: 'Wezi Kumwenda',
    role: '9 reviews · 19 photos',
    avatar: 'WK',
    avatarBg: 'bg-[#B07228]',
    rating: 5,
    timeAgo: '2 months ago',
    text: 'The game drive was amazing! Mike our driver and guide has a lot of knowledge on animals...very friendly and helpful! An unforgettable experience in the Malawian bush.',
    reviewUrl: 'https://share.google/EEK9PrzmF2Ulan69I',
  },
  {
    name: 'Thokozani Banda',
    role: 'Local Guide · 38 reviews',
    avatar: 'TB',
    avatarBg: 'bg-[#4A6B82]',
    rating: 5,
    timeAgo: '4 months ago',
    text: 'An incredible hidden sanctuary right in Salima District. The sunset from the spiral watchtower overlooking the savanna canopy was breathtaking, and seeing the resident zebras grazing peacefully near the camp made our family visit magical.',
    reviewUrl: 'https://www.google.com/maps/place/Mkuyu+Game+Lodge',
  },
  {
    name: 'Chisomo Mhone',
    role: '14 reviews · 32 photos',
    avatar: 'CM',
    avatarBg: 'bg-[#2A7B62]',
    rating: 5,
    timeAgo: '3 months ago',
    text: 'Top-notch customer care, 100% solar eco-architecture, and delicious dining at the thatched bar pavilion. The kids loved the shaded playground and carousel while we relaxed by the pool after the morning safari drive.',
    reviewUrl: 'https://www.google.com/maps/place/Mkuyu+Game+Lodge',
  },
  {
    name: 'Madalitso Phiri',
    role: 'Local Guide · 52 reviews',
    avatar: 'MP',
    avatarBg: 'bg-[#7A4058]',
    rating: 5,
    timeAgo: '2 months ago',
    text: 'Only 25 minutes from Senga Bay! We came for an afternoon game drive and dinner. The rangers tracked waterbucks and nyalas through the marula groves with great expertise. Can\'t wait to return and stay overnight.',
    reviewUrl: 'https://www.google.com/maps/place/Mkuyu+Game+Lodge',
  },
]

const STAR = (
  <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % reviews.length)
  }, [])

  const handlePrev = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [])

  // Auto-scroll every 6 seconds
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, handleNext])

  // Get 3 visible reviews for circular sliding
  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ]

  return (
    <section
      className="py-16 sm:py-20 bg-forest-light/50 border-y border-forest-green/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-2">
              Guest Experiences
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14240E] tracking-tight">
              What Our Visitors Say
            </h2>
          </div>

          {/* Rating Badge + Arrow Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.google.com/maps/place/Mkuyu+Game+Lodge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-forest-green/15 text-xs font-extrabold text-[#14240E] shadow-2xs hover:border-forest-green/30 transition-all"
            >
              <FaGoogle size={14} className="text-[#4285F4]" />
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{STAR}</span>
                ))}
              </div>
              <span className="text-[11px] font-bold text-[#14240E]/70 ml-0.5">5.0 on Google</span>
            </a>

            <div className="flex items-center gap-1.5 ml-1">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-9 h-9 rounded-full bg-white hover:bg-forest-light border border-forest-green/20 flex items-center justify-center text-[#14240E] transition-all hover:scale-105 active:scale-95 shadow-2xs"
              >
                <FiChevronLeft size={17} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-9 h-9 rounded-full bg-white hover:bg-forest-light border border-forest-green/20 flex items-center justify-center text-[#14240E] transition-all hover:scale-105 active:scale-95 shadow-2xs"
              >
                <FiChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Carousel Grid (Responsive: 1 on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleReviews.map((review, idx) => (
            <div
              key={`${review.name}-${idx}`}
              className={`bg-white rounded-2xl p-6 border border-forest-green/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                idx === 2 ? 'hidden lg:flex' : idx === 1 ? 'hidden md:flex' : 'flex'
              }`}
            >
              <div>
                {/* Rating stars & Time ago */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>{STAR}</span>
                    ))}
                  </div>
                  <span className="text-[11px] text-[#14240E]/50 font-medium">
                    {review.timeAgo}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-[13px] text-[#14240E]/85 leading-relaxed font-normal">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 mt-4 border-t border-forest-green/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-full ${review.avatarBg} text-white font-extrabold text-[11px] flex items-center justify-center flex-shrink-0`}
                  >
                    {review.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-extrabold text-xs text-[#14240E] truncate">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#14240E]/60 truncate font-medium">
                      {review.role}
                    </p>
                  </div>
                </div>

                <a
                  href={review.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${review.name}'s review on Google`}
                  className="text-forest-green/70 hover:text-forest-green transition-colors p-1"
                >
                  <FaGoogle size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Clickable Progress Dots */}
        <div className="mt-8 flex items-center justify-center gap-1.5">
          {reviews.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setStartIndex(dotIdx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === startIndex
                  ? 'w-6 bg-forest-green'
                  : 'w-1.5 bg-forest-green/20 hover:bg-forest-green/50'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
