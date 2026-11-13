import Image from 'next/image'
import { getImagesByCategory } from '@/app/lib/images'
import type { ImageCategory } from '@/app/lib/images'

type AspectRatio = 'landscape' | 'portrait' | 'square' | 'wide'

const aspectClasses: Record<AspectRatio, string> = {
  landscape: 'aspect-[3/2]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
}

interface LodgeImageProps {
  src: string
  alt: string
  category?: ImageCategory
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  aspectRatio?: AspectRatio
  width?: number
  height?: number
}

/** Standard image — fixed dimensions when fill=false, wrapped div when fill=true */
export function LodgeImage({
  src,
  alt,
  fill = false,
  className = '',
  priority = false,
  sizes,
  aspectRatio = 'landscape',
  width = 1070,
  height = 713,
}: LodgeImageProps) {
  if (fill) {
    return (
      <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          quality={85}
          priority={priority}
          sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={85}
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  )
}

/** Fill-only variant — expects parent with `relative overflow-hidden` */
export function LodgeImageFill({
  src,
  alt,
  className = '',
  priority = false,
  sizes,
}: Omit<LodgeImageProps, 'fill' | 'width' | 'height' | 'aspectRatio'>) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      quality={85}
      priority={priority}
      sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
      className={`object-cover ${className}`}
    />
  )
}

interface LodgeImageGridProps {
  category: ImageCategory
  columns?: 2 | 3 | 4
  aspectRatio?: AspectRatio
  className?: string
  limit?: number
}

/** Responsive grid of images filtered by category */
export function LodgeImageGrid({
  category,
  columns = 3,
  aspectRatio = 'landscape',
  className = '',
  limit,
}: LodgeImageGridProps) {
  const images = getImagesByCategory(category).slice(0, limit)

  const gridCols: Record<2 | 3 | 4, string> = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid gap-4 ${gridCols[columns]} ${className}`}>
      {images.map((image, idx) => (
        <div key={image.src} className={`relative overflow-hidden rounded ${aspectClasses[aspectRatio]}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            quality={85}
            priority={idx === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}
