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
    <div className="relative h-[400px] w-full overflow-hidden">
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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {breadcrumb && (
          <p className="text-cream/70 text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-cream transition-colors">
              Home
            </Link>
            <span>/</span>
            <span>{breadcrumb}</span>
          </p>
        )}
        {!breadcrumb && (
          <p className="text-cream/70 text-xs tracking-widest uppercase mb-3">
            <Link href="/" className="hover:text-cream transition-colors">
              Home
            </Link>
            {' '}/{' '}
            <span>{title}</span>
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-cream/90 text-base sm:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
