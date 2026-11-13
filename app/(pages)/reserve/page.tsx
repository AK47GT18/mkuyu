import Image from 'next/image'
import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { GiWatchtower } from 'react-icons/gi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import { LODGE_FACTS } from '@/app/lib/content'

const wildlifeImages = [
  { src: '/images/lodge-09.jpg', alt: 'Wildlife at Mkuyu — birds' },
  { src: '/images/lodge-10.jpg', alt: 'Wildlife at Mkuyu — antelope' },
  { src: '/images/lodge-21.jpg', alt: 'Wildlife at Mkuyu — zebra' },
  { src: '/images/lodge-22.jpg', alt: 'Wildlife at Mkuyu — nyala' },
  { src: '/images/lodge-23.jpg', alt: 'Wildlife at Mkuyu — waterbuck' },
]

export default function ReservePage() {
  return (
    <PageShell transparentNav={false}>
      <PageHero
        title="The Reserve"
        subtitle="330 hectares of protected Malawian wilderness in Salima District"
        image="/images/lodge-11.jpg"
        imageAlt="Mkuyu Game Lodge reserve landscape"
      />

      {/* The Land */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light text-forest-green text-xs font-extrabold tracking-widest uppercase border border-forest-green/20">
                <span>The Land & Ecosystem</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] leading-tight tracking-tight">
                A protected sanctuary in the heart of Central Malawi
              </h2>
              <div className="space-y-4 text-[#14240E] text-base sm:text-lg leading-relaxed">
                <p>
                  Mkuyu Game Lodge occupies 330 hectares of privately protected savanna and indigenous bush along the T358 in Salima District. Located approximately 90 minutes from Lilongwe and 25 minutes from Senga Bay on Lake Malawi, it represents one of the region&apos;s most accessible and serene wildlife sanctuaries.
                </p>
                <p>
                  The ranch encompasses a rich mosaic of acacia woodland, marula groves, open grassland pans, and seasonal waterways that sustain a diverse community of wildlife under strict conservation management.
                </p>
                <p>
                  Operating entirely off-grid, no hunting, trapping, or poaching is permitted. Every decision is made to nurture the long-term vitality of this Malawian habitat.
                </p>
              </div>
            </div>

            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/lodge-08.jpg"
                alt="Mkuyu reserve landscape"
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
      <section className="py-24 bg-forest-light border-y border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-forest-green text-xs font-extrabold tracking-widest uppercase mb-3 shadow-sm border border-forest-green/20">
              <span>Fauna & Flora</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              145+ animals across protected savanna
            </h2>
            <p className="text-[#14240E] text-base sm:text-lg mt-3 leading-relaxed">
              Plains zebras, nyala, waterbuck, impala, wildebeest, ostriches, and over 100 species of birdlife thrive across our grasslands and woodlands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14">
            {wildlifeImages.map((img, idx) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-3xl shadow-md h-64 sm:h-72 group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-forest-green/15 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-forest-green mb-1">Zebras</p>
              <p className="text-xs font-bold text-[#14240E] uppercase tracking-wider">Plains Zebras</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-forest-green/15 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-forest-green mb-1">Antelope</p>
              <p className="text-xs font-bold text-[#14240E] uppercase tracking-wider">Nyala & Waterbuck</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-forest-green/15 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-forest-green mb-1">Ostriches</p>
              <p className="text-xs font-bold text-[#14240E] uppercase tracking-wider">Resident Flocks</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-forest-green/15 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-forest-green mb-1">100+ Species</p>
              <p className="text-xs font-bold text-[#14240E] uppercase tracking-wider">Indigenous Birds</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Watchtower Callout */}
      <section className="py-24 bg-[#14240E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-light-sage">
                <GiWatchtower size={30} />
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                The Panoramic Watchtower
              </h2>
              <p className="text-white text-base leading-relaxed">
                Rising high above the tree canopy, the Mkuyu Watchtower is a beloved highlight for guests. Offering uninterrupted 360-degree vistas stretching across the savanna, it is the premier spot for golden hour photography and sunset refreshments.
              </p>
              <Link
                href="/activities#watchtower"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-xl hover:scale-105"
              >
                <span>Read Experience</span>
                <FiArrowRight size={15} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
                <Image
                  src="/images/lodge-37.jpg"
                  alt="Watchtower view over the savanna"
                  fill
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light text-forest-green text-xs font-extrabold tracking-widest uppercase mb-2 border border-forest-green/20">
              <span>Location & Access</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              Visiting the reserve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-forest-light border border-forest-green/15 space-y-3">
              <p className="text-xl font-extrabold text-forest-green">From Lilongwe</p>
              <p className="text-xs uppercase font-bold text-[#14240E] tracking-wider">90 Minutes Drive</p>
              <p className="text-sm text-[#14240E] leading-relaxed">
                Take the M14 highway directly from Lilongwe toward Salima, then follow signs along the T358 to our entrance.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-forest-light border border-forest-green/15 space-y-3">
              <p className="text-xl font-extrabold text-forest-green">From Senga Bay</p>
              <p className="text-xs uppercase font-bold text-[#14240E] tracking-wider">25 Minutes Drive</p>
              <p className="text-sm text-[#14240E] leading-relaxed">
                Conveniently located just inland from Lake Malawi&apos;s beaches — ideal for combined bush-and-beach day trips.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-forest-light border border-forest-green/15 space-y-3">
              <p className="text-xl font-extrabold text-forest-green">Reservations</p>
              <p className="text-xs uppercase font-bold text-[#14240E] tracking-wider">Direct Contact</p>
              <p className="text-sm text-[#14240E] leading-relaxed">
                Phone: {LODGE_FACTS.phone}<br />
                Email: {LODGE_FACTS.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
