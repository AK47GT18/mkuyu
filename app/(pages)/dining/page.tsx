import Image from 'next/image'
import Link from 'next/link'
import { GiCampfire, GiWineGlass, GiCoffeeCup, GiCookingGlove } from 'react-icons/gi'
import { FiClock, FiCheck, FiArrowRight } from 'react-icons/fi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import { LODGE_FACTS } from '@/app/lib/content'

const diningPhotos = [
  { src: '/images/lodge-27.jpg', alt: 'Dining experience at Mkuyu Game Lodge' },
  { src: '/images/lodge-28.jpg', alt: 'Fresh bush breakfast preparation' },
  { src: '/images/lodge-29.jpg', alt: 'Restaurant and lounge atmosphere' },
  { src: '/images/lodge-30.jpg', alt: 'Evening dining setup under the stars' },
  { src: '/images/lodge-31.jpg', alt: 'Freshly prepared seasonal dishes' },
  { src: '/images/lodge-18.jpg', alt: 'Poolside refreshments and seating' },
]

export default function DiningPage() {
  return (
    <PageShell transparentNav={false}>
      <PageHero
        title="Bush Dining & Bar"
        subtitle="Fresh local ingredients, continental favorites, and chilled drinks served in the tranquil Malawian savanna"
        image="/images/lodge-29.jpg"
        imageAlt="Restaurant and dining at Mkuyu Game Lodge"
      />

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light text-forest-green text-xs font-extrabold tracking-widest uppercase border border-forest-green/20">
                <span>Culinary Experience</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] leading-tight tracking-tight">
                Flavors inspired by the land, crafted with warmth
              </h2>
              <p className="text-[#14240E] text-base sm:text-lg leading-relaxed">
                Dining at Mkuyu Game Lodge is designed around community, freshness, and the rhythm of the bush. Whether greeting the morning with freshly brewed Malawian coffee or sharing tales around the evening boma firepit, every meal is an unhurried occasion.
              </p>
              <p className="text-[#14240E] text-base leading-relaxed">
                We source fresh vegetables, poultry, and grains directly from neighboring farming communities in Salima, delivering farm-to-table freshness while directly supporting local families.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-6 rounded-2xl bg-forest-light border border-forest-green/15 text-center">
                  <p className="text-3xl font-extrabold text-forest-green">100%</p>
                  <p className="text-xs font-bold text-[#14240E] uppercase tracking-wide mt-1">
                    Local Sourcing
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-forest-light border border-forest-green/15 text-center">
                  <p className="text-3xl font-extrabold text-forest-green">Zero</p>
                  <p className="text-xs font-bold text-[#14240E] uppercase tracking-wide mt-1">
                    Single-Use Plastics
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[440px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/lodge-27.jpg"
                alt="Mkuyu bush dining table"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-forest-light border-y border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-forest-green text-xs font-extrabold tracking-widest uppercase mb-3 shadow-sm border border-forest-green/20">
              <span>Daily Menus</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              From dawn coffee to fireside dinners
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-forest-green/15 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-light flex items-center justify-center text-forest-green">
                <GiCoffeeCup size={26} />
              </div>
              <h4 className="text-2xl font-extrabold text-[#14240E]">Bush Breakfast</h4>
              <p className="text-xs text-[#14240E] leading-relaxed">
                Enjoy freshly baked bread, seasonal fruits, eggs prepared to order, and rich Malawian highland tea and coffee as the morning sun rises over the bush.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-forest-green/15 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-light flex items-center justify-center text-forest-green">
                <GiCookingGlove size={26} />
              </div>
              <h4 className="text-2xl font-extrabold text-[#14240E]">Relaxed Lunches</h4>
              <p className="text-xs text-[#14240E] leading-relaxed">
                Crisp salads, grilled skewers, and light continental and local specialties designed for warm savanna afternoons by the pool or beneath shade trees.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-forest-green/15 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-light flex items-center justify-center text-forest-green">
                <GiCampfire size={26} />
              </div>
              <h4 className="text-2xl font-extrabold text-[#14240E]">Boma & Braai</h4>
              <p className="text-xs text-[#14240E] leading-relaxed">
                Evenings revolve around our traditional open-air firepit. Multi-course plated dinners, barbecue braai evenings, and stories of the bush illuminated by lanterns and stars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Safari Bar */}
      <section className="py-24 bg-[#14240E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative min-h-[380px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
              <Image
                src="/images/lodge-30.jpg"
                alt="Mkuyu evening bar and lounge"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-light-sage">
                <GiWineGlass size={26} />
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                The Safari Bar & Sundowners
              </h3>
              <p className="text-white text-base leading-relaxed">
                Watch the sunset behind acacia trees with an ice-cold beverage in hand. Our bar serves a curated selection of South African estate wines, cold local Carlsberg and Kuche Kuche beers, and spirits.
              </p>
              <ul className="space-y-2.5 text-xs font-bold text-white">
                <li className="flex items-center gap-2">
                  <FiCheck className="text-light-sage" size={16} />
                  <span>Chilled local Malawian beers & craft beverages</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-light-sage" size={16} />
                  <span>South African estate wines</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-light-sage" size={16} />
                  <span>100% solar refrigeration and ice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Dining Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light text-forest-green text-xs font-extrabold tracking-widest uppercase mb-2 border border-forest-green/20">
              <span>Atmosphere</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              Moments around our table
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {diningPhotos.map((photo, i) => (
              <div key={i} className="relative h-64 rounded-3xl overflow-hidden shadow-md group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-forest-green text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Reserve your table or private bush dinner
          </h3>
          <p className="text-white text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Day visitors, family celebrations, and private dining arrangements can be booked in advance with our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=dining"
              className="px-9 py-4 bg-white text-forest-green hover:bg-forest-mint font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              Contact Dining Reservations
            </Link>
            <a
              href={`tel:${LODGE_FACTS.phone}`}
              className="px-9 py-4 border border-white/40 hover:bg-white/10 text-white font-extrabold rounded-full text-xs uppercase tracking-widest transition-all"
            >
              Call {LODGE_FACTS.phone}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
