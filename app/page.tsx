import Image from 'next/image'
import Link from 'next/link'
import {
  GiJeep,
  GiFootprint,
  GiWatchtower,
  GiBirdTwitter,
  GiWoodCabin,
  GiCampfire,
  GiWaterPolo,
  GiCampingTent,
} from 'react-icons/gi'
import {
  FiArrowRight,
  FiClock,
  FiCheck,
  FiPhone,
} from 'react-icons/fi'
import HeroSlider from '@/app/components/home/HeroSlider'
import PageShell from '@/app/components/layout/PageShell'
import CtaSection from '@/app/components/ui/CtaSection'
import { STATS, SERVICES, SUSTAINABILITY_POINTS, LODGE_FACTS } from '@/app/lib/content'

const serviceIcons: Record<string, React.ReactNode> = {
  'game-drives': <GiJeep size={26} className="text-forest-green" />,
  'bush-walks': <GiFootprint size={26} className="text-forest-green" />,
  'watchtower': <GiWatchtower size={26} className="text-forest-green" />,
  'birdwatching': <GiBirdTwitter size={26} className="text-forest-green" />,
  'accommodation': <GiWoodCabin size={26} className="text-forest-green" />,
  'dining': <GiCampfire size={26} className="text-forest-green" />,
  'pool': <GiWaterPolo size={26} className="text-forest-green" />,
  'camping': <GiCampingTent size={26} className="text-forest-green" />,
}

const serviceImages: Record<string, string> = {
  'game-drives': '/images/lodge-40.jpg',
  'bush-walks': '/images/lodge-42.jpg',
  'watchtower': '/images/tower-actual.jpg',
  'birdwatching': '/images/lodge-09.jpg',
  'accommodation': '/images/spherical-building.jpg',
  'dining': '/images/bar-lounge.jpg',
  'pool': '/images/pool-actual.jpg',
  'camping': '/images/lodge-61.jpg',
}

const statDetails = [
  { value: '332.15', unit: 'Hectares', label: 'Protected Reserve', desc: 'Indigenous Malawian savanna & marula groves' },
  { value: '145', unit: 'Animals', label: 'Resident Wildlife', desc: 'Plains zebras, nyalas, waterbucks & ostriches' },
  { value: '5', unit: 'Sanctuaries', label: 'Eco Rooms', desc: 'Intimate boutique capacity for up to 12 guests' },
  { value: '100%', unit: 'Solar', label: 'Off-Grid Energy', desc: 'Standalone solar power & solar hot water' },
]

const galleryTeaser = [
  { src: '/images/lodge-04.jpg', alt: 'Mkuyu Game Lodge reserve morning view', span: 'col-span-1 md:col-span-2' },
  { src: '/images/lodge-10.jpg', alt: 'Wildlife sighting on game drive', span: 'col-span-1' },
  { src: '/images/lodge-21.jpg', alt: 'Plains zebra grazing on the ranch', span: 'col-span-1' },
  { src: '/images/lodge-32.jpg', alt: 'Eco sanctuary interior living space', span: 'col-span-1 md:col-span-2' },
  { src: '/images/pool-actual.jpg', alt: 'The actual swimming pool surrounded by indigenous bush', span: 'col-span-1' },
  { src: '/images/lodge-65.jpg', alt: 'Poolside relaxation under Malawian sun', span: 'col-span-1' },
]

export default function Home() {
  return (
    <PageShell transparentNav={true}>
      {/* 1. HERO SLIDER (Full-screen, left-aligned, single button, no badge) */}
      <HeroSlider />

      {/* 2. RECOLORED & COMPRESSED STATS SECTION (ONE SINGLE ROW ON ALL SCREENS) */}
      <section className="bg-white py-6 sm:py-12 border-b border-forest-green/10 relative z-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
            {statDetails.map((stat, idx) => (
              <div
                key={idx}
                className="p-2.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-forest-light border border-forest-green/15 hover:border-forest-green/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-base sm:text-3xl lg:text-5xl font-extrabold text-[#14240E] tracking-tight group-hover:text-forest-green transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-[8px] sm:text-[10px] lg:text-xs uppercase font-extrabold text-forest-green tracking-wider">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-[9px] sm:text-xs font-extrabold text-[#14240E] uppercase tracking-tight truncate mb-0.5">
                  {stat.label}
                </p>
                <p className="text-[10px] lg:text-[11px] text-[#14240E]/80 leading-relaxed font-normal hidden md:block">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE RESERVE STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-2">
                The Wildlife Sanctuary
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] leading-tight tracking-tight">
                An intimate wildlife sanctuary in Central Malawi
              </h2>
              <div className="space-y-4 text-[#14240E] text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Set across 332.15 hectares of pristine savanna, marula groves, and acacia woodlands, Mkuyu Game Lodge delivers an authentic safari escape that directly balances conservation with boutique eco-luxury.
                </p>
                <p>
                  Home to 145 resident animals including 27 plains zebras, 27 waterbucks, 21 nyalas, and 10 ostriches, the reserve offers guests an uncrowded encounter with the African wild guided by certified FGASA rangers.
                </p>
                <p>
                  With only five en-suite sanctuaries accommodating a maximum of 12 guests, your stay is peaceful, private, and 100% off-grid powered by clean solar energy.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/reserve"
                  className="px-7 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md flex items-center gap-2"
                >
                  <span>Explore the Reserve</span>
                  <FiArrowRight size={15} />
                </Link>
                <Link
                  href="/gallery"
                  className="px-7 py-3.5 bg-forest-light hover:bg-forest-mint text-forest-green text-xs font-bold uppercase tracking-wider rounded-full transition-all border border-forest-green/20"
                >
                  <span>View Photos</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative h-[460px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/lodge-09.jpg"
                    alt="Wildlife at Mkuyu Game Lodge"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {/* Clean Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-forest-green/20 max-w-xs hidden sm:block">
                  <p className="text-xs uppercase font-extrabold tracking-wider text-forest-green mb-1">
                    Boutique Exclusivity
                  </p>
                  <p className="text-sm font-bold text-[#14240E]">
                    Strictly 5 sanctuaries for unmatched tranquility and personalized care.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REFINED SERVICES & EXPERIENCES (PUNCHY, CONCISE CARDS) */}
      <section className="py-24 bg-forest-light border-y border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-3">
              All Lodge Services & Activities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              Ways to experience Mkuyu
            </h2>
            <p className="text-[#14240E] text-base mt-2 leading-relaxed">
              Tailored safari activities, eco-sanctuaries, and bush hospitality in Salima District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group rounded-3xl bg-white border border-forest-green/15 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-forest-green/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={serviceImages[service.id] || '/images/lodge-40.jpg'}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-2xl bg-white shadow-md flex items-center justify-center">
                      {serviceIcons[service.id]}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-extrabold text-forest-green uppercase tracking-wider mb-1">
                      {service.subtitle}
                    </p>
                    <h3 className="text-lg font-extrabold text-[#14240E] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#14240E]/85 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={service.id === 'accommodation' ? '/accommodation' : service.id === 'dining' ? '/accommodation#dining' : `/activities#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-forest-green hover:text-[#4A602B] uppercase tracking-wider"
                  >
                    <span>Full Details</span>
                    <FiArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ACCOMMODATION SPOTLIGHT (DEEP LUXURY FOREST) */}
      <section className="py-24 bg-[#14240E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block text-light-sage text-xs font-extrabold tracking-widest uppercase border-b-2 border-light-sage pb-1">
                Handcrafted Lodging
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Designed to tread lightly, crafted for luxury
              </h2>
              <p className="text-white text-base leading-relaxed font-normal">
                Engineered with pioneering eco-beam technology and furnished with local hardwood hand-shaped by village artisans, each sanctuary features solar-heated en-suites, organic linens, and private sun decks.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/15">
                  <h4 className="text-base font-bold text-white">Garden Sanctuaries</h4>
                  <p className="text-xs text-white/80 mt-1">
                    Double rooms opening onto private timber decks nestled in the indigenous flora.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/15">
                  <h4 className="text-base font-bold text-white">Family Sanctuary</h4>
                  <p className="text-xs text-white/80 mt-1">
                    Spacious glass-fronted sanctuary accommodating up to four guests.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/15">
                  <h4 className="text-base font-bold text-white">Executive Suite & Campsite</h4>
                  <p className="text-xs text-white/80 mt-1">
                    Secluded romantic luxury suite or self-sufficient overlander camping with ablution blocks.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/accommodation"
                  className="inline-flex items-center gap-2 px-9 py-4 bg-forest-green hover:bg-[#4A602B] text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-forest-green/30 hover:scale-105"
                >
                  <span>View All Accommodation</span>
                  <FiArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-2 border-white/10">
                  <Image
                    src="/images/room-twin-family.jpg"
                    alt="Garden Sanctuary twin bedroom with handcrafted timber beds"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-2 border-white/10 mt-8">
                  <Image
                    src="/images/room-double-king.jpg"
                    alt="Family Sanctuary king bed with woven artisan wall decor"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-2 border-white/10">
                  <Image
                    src="/images/lodge-14.jpg"
                    alt="Eco sanctuary exterior nestled in indigenous bush"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-2 border-white/10 mt-8">
                  <Image
                    src="/images/lodge-35.jpg"
                    alt="Executive sanctuary private sun deck"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DEDICATED FULL-SECTION: DAY TRIPS & SAFARI GETAWAYS */}
      <section className="relative py-24 bg-forest-green text-white overflow-hidden">
        {/* Background photo with subtle gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lodge-37.jpg"
            alt="Watchtower view at Mkuyu Game Lodge"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-forest-green text-xs font-extrabold tracking-widest uppercase shadow-md">
              <FiClock size={15} />
              <span>Open 7 Days • 08:30 – 18:30</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Day trips & safari getaways from Lilongwe & Senga Bay
            </h2>

            <p className="text-white/95 text-base sm:text-lg leading-relaxed font-normal">
              Enjoy Mkuyu without staying overnight. We welcome day guests for scheduled morning and afternoon game drives, pool relaxation, restaurant lunches, and sunset drinks on the watchtower.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/20">
              <div className="flex items-start gap-3">
                <FiCheck className="text-light-sage flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-base font-extrabold text-white">Scheduled 4x4 Game Drives</h4>
                  <p className="text-xs sm:text-sm text-white/80 font-normal mt-0.5">
                    Morning Buck Pursuit &amp; golden-hour Dusk Expedition with trackers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiCheck className="text-light-sage flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-base font-extrabold text-white">Swimming Pool &amp; Loungers</h4>
                  <p className="text-xs sm:text-sm text-white/80 font-normal mt-0.5">
                    Relaxing poolside escape surrounded by indigenous trees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiCheck className="text-light-sage flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-base font-extrabold text-white">Restaurant &amp; Safari Bar</h4>
                  <p className="text-xs sm:text-sm text-white/80 font-normal mt-0.5">
                    Fresh farm-to-table lunch, cold local drinks, and refreshments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiCheck className="text-light-sage flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-base font-extrabold text-white">360° Panoramic Watchtower</h4>
                  <p className="text-xs sm:text-sm text-white/80 font-normal mt-0.5">
                    Climb above the canopy for unrivaled sunset and savanna vistas.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact?type=day-visit"
                className="w-full sm:w-auto px-9 py-4 bg-white text-forest-green hover:bg-forest-mint font-extrabold rounded-full text-xs uppercase tracking-widest text-center transition-all shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span>Book a Day Visit</span>
                <FiArrowRight size={15} />
              </Link>
              <a
                href={`tel:${LODGE_FACTS.phone}`}
                className="w-full sm:w-auto px-7 py-4 border border-white/40 hover:bg-white/10 text-white font-bold rounded-full text-xs uppercase tracking-wider text-center transition-all inline-flex items-center justify-center gap-2"
              >
                <FiPhone size={14} />
                <span>Call {LODGE_FACTS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SUSTAINABILITY & CONSERVATION CRITERIA */}
      <section className="py-24 bg-forest-light border-y border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-3">
                Eco-Conscious Tourism
              </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              Living in harmony with the Malawian ecosystem
            </h2>
            <p className="text-[#14240E] text-base sm:text-lg mt-3 leading-relaxed">
              Every system at Mkuyu is engineered to protect biodiversity and empower neighboring communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUSTAINABILITY_POINTS.map((point, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-forest-green/15 space-y-3.5 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-2xl bg-forest-green text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-extrabold text-[#14240E]">
                  {point.title}
                </h3>
                <p className="text-xs text-[#14240E]/85 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VISUAL GALLERY SHOWCASE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-2">
                Visual Stories
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
                Moments captured at Mkuyu
              </h2>
            </div>
            <Link
              href="/gallery"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-extrabold text-forest-green hover:underline uppercase tracking-wider"
            >
              <span>Explore full gallery</span>
              <FiArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {galleryTeaser.map((item, i) => (
              <div
                key={i}
                className={`relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-md group ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. REFINED REUSABLE BOTTOM CTA (Reduced height, image behind, no badge) */}
      <CtaSection />
    </PageShell>
  )
}
