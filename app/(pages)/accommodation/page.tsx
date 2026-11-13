import Image from 'next/image'
import Link from 'next/link'
import { GiWoodCabin, GiEcology } from 'react-icons/gi'
import { FiWifi, FiSun, FiCheck, FiArrowRight } from 'react-icons/fi'
import { MdPool, MdDinnerDining } from 'react-icons/md'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import { ACCOMMODATION_TYPES, LODGE_FACTS } from '@/app/lib/content'

const roomImages: Record<string, string> = {
  'garden-sanctuary': '/images/lodge-16.jpg',
  'family-sanctuary': '/images/lodge-32.jpg',
  'executive-sanctuary': '/images/lodge-35.jpg',
  'campsite': '/images/lodge-61.jpg',
}

const roomFeatures = [
  'Eco-beam timber construction',
  'Solar-heated en-suite shower',
  'Private wooden sun deck',
  'Organic cotton linens',
  'Panoramic savanna bush views',
  'Handcrafted local timber furniture',
]

export default function AccommodationPage() {
  return (
    <PageShell transparentNav={false}>
      <PageHero
        title="Eco Sanctuaries"
        subtitle="Five intimate sanctuaries handcrafted in the heart of the Malawian bush"
        image="/images/lodge-14.jpg"
        imageAlt="Mkuyu Game Lodge accommodation exterior"
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light text-forest-green text-xs font-extrabold tracking-widest uppercase mb-4 border border-forest-green/20">
            <span>Our Sanctuaries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] mb-6 tracking-tight">
            Handcrafted sanctuaries, immersed in nature
          </h2>
          <p className="text-[#14240E] text-base sm:text-lg leading-relaxed">
            Each of our five eco-sanctuaries has been handcrafted using eco-beam technology and timber shaped by local village artisans. Designed to blur the lines between interior comfort and wilderness, they offer an unhurried, peaceful bush retreat.
          </p>
        </div>
      </section>

      {/* Room sections — alternating layout */}
      <div className="space-y-16 pb-24 bg-forest-light pt-16 border-y border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {ACCOMMODATION_TYPES.map((room, idx) => {
            const isEven = idx % 2 === 0
            const imgSrc = roomImages[room.id] ?? '/images/lodge-16.jpg'

            return (
              <div
                key={room.id}
                id={room.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-forest-green/15 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div
                  className={`lg:col-span-6 relative min-h-[360px] lg:min-h-[460px] ${
                    isEven ? '' : 'lg:order-2'
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={room.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-5 left-5 bg-white px-4 py-1.5 rounded-full text-xs font-extrabold text-forest-green uppercase tracking-wider shadow-md">
                    {room.type}
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 p-8 sm:p-14 flex flex-col justify-between ${
                    isEven ? '' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-[#14240E] mb-3 tracking-tight">
                        {room.name}
                      </h3>
                      <p className="text-[#14240E] leading-relaxed text-base">
                        {room.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-forest-green mb-3">
                        Sanctuary Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold text-[#14240E]">
                        {roomFeatures.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <FiCheck className="text-forest-green flex-shrink-0" size={16} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-forest-green/15 mt-8 flex items-center justify-between">
                    <span className="text-xs text-forest-green font-extrabold uppercase tracking-widest">
                      100% Solar Off-Grid
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all hover:scale-105"
                    >
                      <span>Inquire Booking</span>
                      <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Included with stay */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light text-forest-green text-xs font-extrabold tracking-widest uppercase mb-2 border border-forest-green/20">
              <span>Guest Inclusions</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              What is included with your stay
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-forest-light border border-forest-green/15 text-center space-y-3">
              <div className="w-12 h-12 bg-white rounded-2xl mx-auto flex items-center justify-center text-forest-green shadow-sm">
                <FiSun size={24} />
              </div>
              <h4 className="font-extrabold text-[#14240E] text-lg">Solar Energy & Water</h4>
              <p className="text-xs text-[#14240E] leading-relaxed">
                Quiet 100% solar electricity with 24/7 power and solar hot water showers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-forest-light border border-forest-green/15 text-center space-y-3">
              <div className="w-12 h-12 bg-white rounded-2xl mx-auto flex items-center justify-center text-forest-green shadow-sm">
                <MdPool size={24} />
              </div>
              <h4 className="font-extrabold text-[#14240E] text-lg">Pool & Grounds</h4>
              <p className="text-xs text-[#14240E] leading-relaxed">
                Complimentary pool use, loungers, watchtower access, and walking trails.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-forest-light border border-forest-green/15 text-center space-y-3">
              <div className="w-12 h-12 bg-white rounded-2xl mx-auto flex items-center justify-center text-forest-green shadow-sm">
                <MdDinnerDining size={24} />
              </div>
              <h4 className="font-extrabold text-[#14240E] text-lg">Bush Breakfast</h4>
              <p className="text-xs text-[#14240E] leading-relaxed">
                Freshly prepared breakfast included each morning for all overnight residents.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-forest-light border border-forest-green/15 text-center space-y-3">
              <div className="w-12 h-12 bg-white rounded-2xl mx-auto flex items-center justify-center text-forest-green shadow-sm">
                <GiEcology size={24} />
              </div>
              <h4 className="font-extrabold text-[#14240E] text-lg">Wildlife Access</h4>
              <p className="text-xs text-[#14240E] leading-relaxed">
                Direct views of resident game grazing right past your private deck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#14240E] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Reserve your eco-sanctuary
          </h2>
          <p className="text-white text-base mb-8 max-w-xl mx-auto leading-relaxed">
            With only 5 rooms available, advance reservation is recommended to secure your preferred dates.
          </p>
          <Link
            href="/contact"
            className="px-9 py-4 bg-forest-green hover:bg-[#4A602B] text-white font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105 inline-flex items-center gap-2"
          >
            <span>Book Your Stay</span>
            <FiArrowRight size={15} />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
