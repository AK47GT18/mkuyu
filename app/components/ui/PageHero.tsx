import Image from 'next/image'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
  image: string
  imageAlt: string
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <div className="relative min-h-[460px] sm:min-h-[500px] w-full overflow-hidden flex items-end">
      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark neutral contrast overlay — natural photo colors without green glare */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/80" />

      {/* Content */}
      <div className="relative z-10 w-full pt-32 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-white/80 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span>{breadcrumb || title}</span>
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-base sm:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
