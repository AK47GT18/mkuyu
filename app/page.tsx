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
  FiMapPin,
  FiCheck,
  FiCalendar,
  FiUsers,
  FiCompass,
} from 'react-icons/fi'
import PageShell from '@/app/components/layout/PageShell'
import { STATS, SERVICES, SUSTAINABILITY_POINTS, LODGE_FACTS } from '@/app/lib/content'

const serviceIcons: Record<string, React.ReactNode> = {
  'game-drives': <GiJeep size={28} className="text-forest-green" />,
  'bush-walks': <GiFootprint size={28} className="text-forest-green" />,
  'watchtower': <GiWatchtower size={28} className="text-forest-green" />,
  'birdwatching': <GiBirdTwitter size={28} className="text-forest-green" />,
  'accommodation': <GiWoodCabin size={28} className="text-forest-green" />,
  'dining': <GiCampfire size={28} className="text-forest-green" />,
  'pool': <GiWaterPolo size={28} className="text-forest-green" />,
  'camping': <GiCampingTent size={28} className="text-forest-green" />,
}

const serviceImages: Record<string, string> = {
  'game-drives': '/images/lodge-40.jpg',
  'bush-walks': '/images/lodge-42.jpg',
  'watchtower': '/images/lodge-37.jpg',
  'birdwatching': '/images/lodge-09.jpg',
  'accommodation': '/images/lodge-14.jpg',
  'dining': '/images/lodge-29.jpg',
  'pool': '/images/lodge-18.jpg',
  'camping': '/images/lodge-61.jpg',
}

const galleryTeaser = [
  { src: '/images/lodge-04.jpg', alt: 'Mkuyu Game Lodge reserve morning view', span: 'col-span-1 md:col-span-2' },
  { src: '/images/lodge-10.jpg', alt: 'Wildlife sighting on game drive', span: 'col-span-1' },
  { src: '/images/lodge-21.jpg', alt: 'Plains zebra grazing on the ranch', span: 'col-span-1' },
  { src: '/images/lodge-32.jpg', alt: 'Eco sanctuary interior living space', span: 'col-span-1 md:col-span-2' },
  { src: '/images/lodge-18.jpg', alt: 'Swimming pool surrounded by indigenous bush', span: 'col-span-1' },
  { src: '/images/lodge-65.jpg', alt: 'Poolside relaxation under Malawian sun', span: 'col-span-1' },
]

export default function Home() {
  return (
    <PageShell transparentNav={true}>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lodge-03.jpg"
            alt="Mkuyu Game Lodge landscape and savanna"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover scale-105 animate-pulse-slow"
          />
          {/* High-contrast gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#14240E]/80 via-[#14240E]/40 to-[#14240E]/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-forest-green text-xs font-extrabold tracking-widest uppercase mb-8 shadow-xl">
            <FiMapPin size={15} className="text-forest-green" />
            <span>Salima District, Central Malawi</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            Where the Malawian bush speaks in tranquility
          </h1>

          <p className="text-white text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-10 drop-shadow-sm">
            An exclusive 100% off-grid sanctuary set within 330 hectares of protected wilderness. Guided safari drives, watchtower views, and sustainable boutique luxury.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/accommodation"
              className="w-full sm:w-auto px-9 py-4 bg-forest-green hover:bg-[#4A602B] text-white font-bold rounded-full text-sm tracking-wide transition-all shadow-xl shadow-forest-green/40 hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Explore Sanctuaries</span>
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="/activities"
              className="w-full sm:w-auto px-9 py-4 bg-white hover:bg-forest-mint text-[#14240E] font-bold rounded-full text-sm tracking-wide transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Safari Activities</span>
            </Link>
            <Link
              href="/contact?type=day-visit"
              className="w-full sm:w-auto px-9 py-4 bg-white/15 hover:bg-white/25 text-white border border-white/40 font-bold rounded-full text-sm tracking-wide transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <span>Day Visits</span>
            </Link>
          </div>

          {/* Quick Key Highlights */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-white uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-light-sage" />
              90 Mins from Lilongwe
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-light-sage" />
              25 Mins from Lake Malawi
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-light-sage" />
              100% Off-Grid Solar
            </span>
          </div>
        </div>
      </section>

      {/* 2. FLOATING QUICK INQUIRY BAR */}
      <section className="relative z-30 -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl shadow-[#14240E]/20 border border-forest-green/20">
          <form
            action="/contact"
            method="GET"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
          >
            <div className="p-3 bg-forest-light rounded-2xl border border-forest-green/10">
              <label className="block text-[10px] font-extrabold uppercase tracking-widest text-forest-green mb-1 flex items-center gap-1.5">
                <FiCompass size={13} />
                <span>Experience Type</span>
              </label>
              <select
                name="type"
                className="w-full bg-transparent text-[#14240E] font-bold text-sm focus:outline-none cursor-pointer"
              >
                <option>Boutique Stay</option>
                <option>Safari Game Drive</option>
                <option>Day Visitor Pass</option>
                <option>Bush Dining & Boma</option>
                <option>Campsite Booking</option>
              </select>
            </div>

            <div className="p-3 bg-forest-light rounded-2xl border border-forest-green/10">
              <label className="block text-[10px] font-extrabold uppercase tracking-widest text-forest-green mb-1 flex items-center gap-1.5">
                <FiUsers size={13} />
                <span>Guests</span>
              </label>
              <select
                name="guests"
                className="w-full bg-transparent text-[#14240E] font-bold text-sm focus:outline-none cursor-pointer"
              >
                <option>2 Guests (Couple)</option>
                <option>1 Guest (Solo)</option>
                <option>3 - 4 Guests (Family)</option>
                <option>5 - 8 Guests (Group)</option>
                <option>9+ Guests (Exclusive)</option>
              </select>
            </div>

            <div className="p-3 bg-forest-light rounded-2xl border border-forest-green/10">
              <label className="block text-[10px] font-extrabold uppercase tracking-widest text-forest-green mb-1 flex items-center gap-1.5">
                <FiCalendar size={13} />
                <span>Preferred Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="w-full bg-transparent text-[#14240E] font-bold text-sm focus:outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-4 px-6 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-forest-green/30 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Check Availability</span>
                <FiArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. STATS STRIP */}
      <section className="bg-forest-green text-white py-14 mt-12 relative z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {STATS.map((stat, idx) => (
              <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase font-extrabold text-light-sage tracking-wider">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold mt-1.5 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE RESERVE STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light text-forest-green text-xs font-extrabold tracking-widest uppercase border border-forest-green/20">
                <span>The Wildlife Sanctuary</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] leading-tight tracking-tight">
                An intimate wildlife sanctuary in Central Malawi
              </h2>
              <div className="space-y-4 text-[#14240E] text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Set across 330 hectares of pristine savanna, marula groves, and acacia woodlands, Mkuyu Game Lodge delivers an authentic safari escape that directly balances conservation with boutique eco-luxury.
                </p>
                <p>
                  Home to over 145 resident animals including plains zebras, nyalas, waterbucks, impalas, wildebeests, and ostriches, the reserve offers guests an uncrowded encounter with the African wild.
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

      {/* 5. ALL SERVICES & EXPERIENCES */}
      <section className="py-24 bg-forest-light border-y border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-forest-green text-xs font-extrabold tracking-widest uppercase mb-3 shadow-sm border border-forest-green/20">
              <span>All Lodge Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              Ways to experience Mkuyu
            </h2>
            <p className="text-[#14240E] text-base sm:text-lg mt-3 leading-relaxed">
              Every adventure is designed to immerse you in nature — from guided dawn tracking to sunset cocktails at our elevated watchtower.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group rounded-3xl bg-white border border-forest-green/15 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-forest-green/10 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={serviceImages[service.id] || '/images/lodge-40.jpg'}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5 w-11 h-11 rounded-2xl bg-white shadow-md flex items-center justify-center">
                      {serviceIcons[service.id]}
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-[11px] font-extrabold text-forest-green uppercase tracking-wider mb-1.5">
                      {service.subtitle}
                    </p>
                    <h3 className="text-xl font-extrabold text-[#14240E] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#14240E]/85 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href={`/activities#${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-forest-green hover:text-[#4A602B] uppercase tracking-wider"
                  >
                    <span>Full Details</span>
                    <FiArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACCOMMODATION SPOTLIGHT (DEEP LUXURY FOREST) */}
      <section className="py-24 bg-[#14240E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-light-sage text-xs font-extrabold tracking-widest uppercase border border-white/20">
                <span>Handcrafted Lodging</span>
              </div>
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
                    src="/images/lodge-14.jpg"
                    alt="Sanctuary exterior"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-2 border-white/10 mt-8">
                  <Image
                    src="/images/lodge-16.jpg"
                    alt="Garden sanctuary veranda"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-2 border-white/10">
                  <Image
                    src="/images/lodge-32.jpg"
                    alt="Spacious suite interior"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-2 border-white/10 mt-8">
                  <Image
                    src="/images/lodge-35.jpg"
                    alt="Executive sanctuary view"
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

      {/* 7. DAY VISITOR CALLOUT BANNER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-green text-white rounded-3xl p-8 sm:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-forest-green text-xs font-extrabold tracking-widest uppercase">
                <FiClock size={16} />
                <span>Open 7 Days • 08:30 – 18:30</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Day trips & safari getaways from Lilongwe & Senga Bay
              </h2>
              <p className="text-white text-base sm:text-lg leading-relaxed">
                Enjoy Mkuyu without staying overnight. We welcome day guests for scheduled morning and afternoon game drives, pool relaxation, restaurant lunches, and sunset drinks on the watchtower.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-white font-bold">
                <div className="flex items-center gap-2">
                  <FiCheck className="text-light-sage flex-shrink-0" size={18} />
                  <span>Scheduled 4x4 Game Drives</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="text-light-sage flex-shrink-0" size={18} />
                  <span>Swimming Pool & Lounger Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="text-light-sage flex-shrink-0" size={18} />
                  <span>Restaurant & Safari Bar Dining</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="text-light-sage flex-shrink-0" size={18} />
                  <span>The 360° Panoramic Watchtower</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-4">
              <Link
                href="/contact?type=day-visit"
                className="w-full sm:w-auto px-9 py-4 bg-white text-forest-green hover:bg-forest-mint font-extrabold rounded-full text-xs uppercase tracking-widest text-center transition-all shadow-xl hover:scale-105"
              >
                Book Day Visit
              </Link>
              <a
                href={`tel:${LODGE_FACTS.phone}`}
                className="text-xs text-white/90 hover:text-white font-bold transition-colors text-center"
              >
                Or call: {LODGE_FACTS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SUSTAINABILITY & CONSERVATION CRITERIA */}
      <section className="py-24 bg-forest-light border-y border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-forest-green text-xs font-extrabold tracking-widest uppercase mb-3 shadow-sm border border-forest-green/20">
              <span>Eco-Conscious Tourism</span>
            </div>
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

      {/* 9. VISUAL GALLERY SHOWCASE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light text-forest-green text-xs font-extrabold tracking-widest uppercase mb-2 border border-forest-green/20">
                <span>Visual Stories</span>
              </div>
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

      {/* 10. BOTTOM BOOKING CTA */}
      <section className="py-24 bg-[#14240E] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-light-sage text-xs font-extrabold tracking-widest uppercase mb-4 border border-white/20">
            <span>Plan Your Malawian Safari</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Come and immerse yourself in the stillness of the bush
          </h2>
          <p className="text-white text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Whether for a weekend getaway, family holiday, or day safari from Lake Malawi, we look forward to welcoming you to Mkuyu Game Lodge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-forest-green hover:bg-[#4A602B] text-white font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl shadow-forest-green/40 hover:scale-105"
            >
              Reserve a Sanctuary
            </Link>
            <Link
              href="/activities"
              className="w-full sm:w-auto px-10 py-4 bg-white text-[#14240E] hover:bg-forest-mint font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              View Safari Itineraries
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
