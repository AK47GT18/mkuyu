'use client'

import { FiExternalLink } from 'react-icons/fi'
import { FaGoogle, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const reviews = [
  {
    name: 'Uchizi Phakati',
    role: 'Local Guide · 870 reviews · 11,861 photos',
    avatar: 'UP',
    avatarBg: 'bg-blue-600',
    rating: 5,
    timeAgo: '5 months ago',
    text: 'This is a fantastic place for a family outing. The check-in process was smooth and easy. We started with some drinks at the bar before heading out on an hour-and-a-half game drive, where we saw zebras, springboks, ostriches, and several other animals. Truly a wonderful experience from start to finish.',
    reviewUrl: 'https://share.google/q0zgrLmOxvhsN6i2a',
    reactions: '❤️ 1',
  },
  {
    name: 'S F-M',
    role: 'Local Guide · 64 reviews · 148 photos',
    avatar: 'SF',
    avatarBg: 'bg-emerald-600',
    rating: 5,
    timeAgo: '3 months ago',
    text: 'From the gate staff to the game drive to the food — every experience was exceptional. The customer service was phenomenal and the game drive educational and beautiful. We had a lovely group on the drive with us that made it even more special. Truly a must-visit place.',
    reviewUrl: 'https://share.google/dUZCOw7q11R5hXWZH',
    reactions: '❤️ 1',
  },
  {
    name: 'Wezi Kumwenda',
    role: '9 reviews · 19 photos',
    avatar: 'WK',
    avatarBg: 'bg-amber-600',
    rating: 5,
    timeAgo: '2 months ago',
    text: 'The game drive was amazing! Mike our driver and guide has a lot of knowledge on animals — very friendly and helpful! An unforgettable experience in the Malawian bush.',
    reviewUrl: 'https://share.google/EEK9PrzmF2Ulan69I',
    reactions: '❤️🙏 2',
  },
]

const STAR = (
  <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-[#14240E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-light-sage text-xs font-extrabold tracking-widest uppercase border-b-2 border-light-sage pb-1 mb-3">
              Guest Experiences
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              What our visitors say
            </h2>
            <p className="text-white/70 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
              Real stories from families, day visitors, and safari guests who have explored Mkuyu Game Lodge.
            </p>
          </div>

          {/* Rating Badge + Social Links */}
          <div className="flex items-center gap-3 flex-shrink-0 flex-wrap">
            {/* Google Rating */}
            <div className="flex flex-col items-center bg-white/8 border border-white/15 rounded-2xl px-5 py-4 text-center">
              <div className="flex items-center gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <span key={i}>{STAR}</span>)}
              </div>
              <span className="text-2xl font-extrabold text-white">5.0</span>
              <span className="text-[10px] text-white/55 uppercase tracking-wider font-bold mt-0.5">Google Rating</span>
            </div>

            {/* Leave a review */}
            <a
              href="https://www.google.com/maps/place/Mkuyu+Game+Lodge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/30 rounded-2xl px-4 py-4 text-center transition-all group"
            >
              <FaGoogle size={20} className="text-white mb-1" />
              <span className="text-[10px] text-white/55 uppercase tracking-wider font-bold group-hover:text-white/90 transition-colors leading-tight">Leave a<br/>Review</span>
            </a>

            {/* Social icons */}
            <div className="flex flex-col gap-2">
              <a
                href="https://web.facebook.com/mkuyugameranch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-blue-600 border border-white/15 flex items-center justify-center text-white transition-all"
              >
                <FaFacebook size={15} />
              </a>
              <a
                href="https://www.instagram.com/mkuyu_game_lodge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-pink-600 border border-white/15 flex items-center justify-center text-white transition-all"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="https://wa.me/265996210391"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-green-600 border border-white/15 flex items-center justify-center text-white transition-all"
              >
                <FaWhatsapp size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <a
              key={review.name}
              href={review.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-3xl p-7 transition-all duration-300"
            >
              {/* Stars + date */}
              <div className="flex items-center gap-0.5 mb-5">
                {[...Array(review.rating)].map((_, i) => <span key={i}>{STAR}</span>)}
                <span className="ml-auto text-[10px] text-white/40 font-medium">{review.timeAgo}</span>
              </div>

              {/* Review Text */}
              <p className="text-white/85 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full ${review.avatarBg} flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0`}>
                  {review.avatar}
                </div>
                <div className="min-w-0">
                  <p className="font-extrabold text-sm text-white truncate">{review.name}</p>
                  <p className="text-[10px] text-white/50 truncate">{review.role}</p>
                </div>
                <FaGoogle size={15} className="text-white/25 group-hover:text-white/55 ml-auto flex-shrink-0 transition-colors" />
              </div>

              {review.reactions && (
                <div className="mt-3 text-[11px] text-white/40">{review.reactions}</div>
              )}
            </a>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="https://www.google.com/maps/place/Mkuyu+Game+Lodge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/25 hover:border-white/50 text-white/80 hover:text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all"
          >
            <FaGoogle size={13} />
            <span>Read all reviews on Google</span>
            <FiExternalLink size={12} />
          </a>
          <a
            href="https://web.facebook.com/mkuyugameranch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/25 hover:border-blue-500/60 text-white/80 hover:text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all"
          >
            <FaFacebook size={13} />
            <span>Follow on Facebook</span>
            <FiExternalLink size={12} />
          </a>
        </div>

      </div>
    </section>
  )
}

