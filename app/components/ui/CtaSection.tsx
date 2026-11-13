import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

interface CtaSectionProps {
  title?: string
  subtitle?: string
  image?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
}

export default function CtaSection({
  title = 'Come and immerse yourself in the stillness of the bush',
  subtitle = 'Whether for a weekend getaway, family holiday, or day safari from Lake Malawi, we look forward to welcoming you to Mkuyu Game Lodge.',
  image = '/images/lodge-04.jpg',
  primaryText = 'Reserve a Sanctuary',
  primaryHref = '/contact',
  secondaryText = 'View Safari Activities',
  secondaryHref = '/activities',
}: CtaSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 text-white text-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Mkuyu Game Lodge savanna"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        {/* Clean neutral dark overlay for natural photo colors without green glare */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content — compact, elegant, no badge */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto font-normal">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href={primaryHref}
            className="w-full sm:w-auto px-8 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <span>{primaryText}</span>
            <FiArrowRight size={15} />
          </Link>
          {secondaryText && secondaryHref && (
            <Link
              href={secondaryHref}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#14240E] hover:bg-forest-mint font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105 inline-flex items-center justify-center"
            >
              <span>{secondaryText}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

