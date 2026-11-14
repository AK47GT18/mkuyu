import Image from 'next/image'
import Link from 'next/link'
import { GiJeep, GiFootprint, GiWatchtower, GiBirdTwitter, GiCampingTent, GiWaterPolo, GiCampfire } from 'react-icons/gi'
import { FiClock, FiCheck, FiArrowRight } from 'react-icons/fi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import CtaSection from '@/app/components/ui/CtaSection'
import AnimatedCounter from '@/app/components/ui/AnimatedCounter'
import { LODGE_FACTS, ADMISSION_FEES } from '@/app/lib/content'

const experiences = [
  {
    id: 'game-drives',
    tag: 'Unfiltered Wilderness',
    title: 'Safari Game Drives',
    subtitle: 'Buck Pursuit & Dusk Expedition',
    description:
      'Traverse the untamed savanna of Mkuyu with our expert rangers. Board our 3 specially modified open 4x4 safari vehicles with tiered seating for unobstructed 360° photography and wildlife spotting. Choose the early morning Buck Pursuit as the bush awakens, or the golden-hour Dusk Expedition as zebras, waterbucks, and nyalas congregate before twilight.',
    image: '/images/lodge-10.jpg',
    imageAlt: 'Mkuyu Game Lodge open 4x4 safari vehicle in the bush',
    icon: <GiJeep size={28} className="text-forest-green" />,
    highlights: [
      'Morning Buck Pursuit (06:00) & Dusk Expedition (16:30)',
      '3 specially modified open 4x4 vehicles with tiered seating',
      'Certified FGASA rangers tracking zebra, nyala & ostrich',
      'Onboard cold refreshments and field wildlife identification guides',
    ],
    ctaText: 'Reserve Safari Drive',
    ctaHref: '/contact?type=safari-drive',
  },
  {
    id: 'bush-walks',
    tag: 'The Wisdom of the Bush',
    title: 'Guided Bush Walks',
    subtitle: 'Tracking, flora and birding on foot',
    description:
      'Slow down and connect deeply with the land on guided walking trails through indigenous acacia and marula groves. Mkuyu rangers interpret the wind, bird alarm calls, and fresh prints in the sand to reveal the intricate life of the savanna that passes unnoticed from a vehicle.',
    image: '/images/lodge-37.jpg',
    imageAlt: 'Walking trail through indigenous bush at Mkuyu reserve',
    icon: <GiFootprint size={28} className="text-forest-green" />,
    highlights: [
      'Master the ancient art of wildlife tracking and spoor reading',
      'Learn traditional Malawian medicinal plant lore and tree ecology',
      'Intimate walking pace across 332.15 hectares of protected bush',
      'Led by certified naturalists with extensive African bush experience',
    ],
    ctaText: 'Book a Guided Walk',
    ctaHref: '/contact?type=bush-walk',
  },
  {
    id: 'watchtower',
    tag: 'Panoramic Savanna Vistas',
    title: 'The Watchtower',
    subtitle: 'Panoramic views across the Malawian bush',
    description:
      "Climb the reserve's landmark watchtower for unbroken 360-degree panoramic views stretching across the savanna. Best experienced at dawn as amber light floods the marula trees, or at sunset with chilled drinks as wildlife settles into the dusk.",
    image: '/images/tower-actual.jpg',
    imageAlt: 'The actual landmark spiral watchtower under the stars at Mkuyu',
    icon: <GiWatchtower size={28} className="text-forest-green" />,
    highlights: [
      'Uninterrupted 360° views across 332.15 hectares of wilderness',
      'Premier vantage point for golden-hour photography and birding',
      'Sunset refreshments and sundowners above the acacia canopy',
      'Available to all day visitors and overnight sanctuary residents',
    ],
    ctaText: 'Plan a Watchtower Visit',
    ctaHref: '/contact?type=watchtower',
  },
  {
    id: 'birdwatching',
    tag: 'Avian Sanctuary',
    title: 'Birdwatching',
    subtitle: 'Over 100 recorded species',
    description:
      'The ranch’s diverse mosaic of open savanna, dense marula woodland, and seasonal water pans makes it a premier destination for birding in Salima District. Spot vibrant Lilac-breasted Rollers, majestic Bateleur Eagles, hornbills, and weaver colonies in their natural habitat.',
    image: '/images/lodge-62.jpg',
    imageAlt: 'Grey Heron wading through the reserve lily pans — birdwatching at Mkuyu',
    icon: <GiBirdTwitter size={28} className="text-forest-green" />,
    highlights: [
      'Over 100 recorded species of resident and migratory birdlife',
      'Specialized guided birding trails at peak dawn and dusk hours',
      'Diverse habitats: acacia thickets, marula groves, and open pans',
      'Field checklists and optical binoculars available upon request',
    ],
    ctaText: 'Inquire Birding Tour',
    ctaHref: '/contact?type=birdwatching',
  },
  {
    id: 'dining',
    tag: 'Bush Cuisine & Boma',
    title: 'Bush Dining & Bar Lounge',
    subtitle: 'Thatched umbrella bar and starlit dining',
    description:
      'Our open-air restaurant and giant thatched umbrella bar pavilion celebrate fresh, locally sourced Malawian produce paired with international classics. Dine surrounded by birdsong under our timber pavilion, or gather around the evening boma firepit under trees illuminated with fairy lights.',
    image: '/images/bar-lounge.jpg',
    imageAlt: 'Giant thatched umbrella bar lounge and dining pavilion at Mkuyu',
    icon: <GiCampfire size={28} className="text-forest-green" />,
    highlights: [
      'Hearty safari breakfasts, light lunches, and fireside dinners',
      'Fresh ingredients sourced directly from neighbouring local villages',
      'Evening boma firepit braais with local Malawian beers and wines',
      'Welcome for both overnight sanctuary guests and day visitors',
    ],
    ctaText: 'Reserve a Table',
    ctaHref: '/contact?type=dining',
  },
  {
    id: 'pool',
    tag: 'Tranquil Refreshment',
    title: 'Swimming Pool & Sun Deck',
    subtitle: 'Surrounded by indigenous trees and loungers',
    description:
      'Our crystal-clear swimming pool fringed by native shade trees and comfortable sun loungers offers the ultimate midday escape between game drives. Relax with a chilled drink, listen to weaver birds in the branches, and cool off under the warm Malawian sun.',
    image: '/images/pool-actual.jpg',
    imageAlt: 'The actual crystal-clear swimming pool with timber sun loungers at Mkuyu',
    icon: <GiWaterPolo size={28} className="text-forest-green" />,
    highlights: [
      'Crystal-clear pool with stepped shallow and deep swimming zones',
      'Fringed by shaded loungers, stone terrace, and indigenous trees',
      'Poolside beverage and light lunch service from the safari bar',
      'Full access included with day passes and overnight bookings',
    ],
    ctaText: 'Inquire Pool Pass',
    ctaHref: '/contact?type=pool',
  },
  {
    id: 'playground',
    tag: 'Family Safari & Play',
    title: 'Kids Adventure Playground',
    subtitle: 'Safe, shaded outdoor fun for little explorers',
    description:
      'Set in soft savanna sand under mature indigenous shade trees, our dedicated kids playground features a spinning carousel merry-go-round, slide, swings, and climbing frames. Parents can relax nearby with a cool drink while children play safely between game drives.',
    image: '/images/playground.jpg',
    imageAlt: 'Kids outdoor adventure playground with carousel and swings at Mkuyu',
    icon: <GiFootprint size={28} className="text-forest-green" />,
    highlights: [
      'Safe, enclosed sandy play park under native shade trees',
      'Carousel merry-go-round, swings, slide and climbing frames',
      'Child-friendly safari environment close to the pool and restaurant',
      'Free access for all day visitors and overnight family guests',
    ],
    ctaText: 'Inquire Family Safari',
    ctaHref: '/contact?type=family',
  },
  {
    id: 'camping',
    tag: 'Sleep Under the Stars',
    title: 'Campsite',
    subtitle: 'Canopy of stars & direct bush access',
    description:
      'For overlanders and nature lovers who seek total immersion in the African wild, our dedicated campsite provides clean ablution facilities with hot solar showers, a communal firepit, and direct access to morning walking trails and game drives.',
    image: '/images/lodge-61.jpg',
    imageAlt: 'Wilderness campsite under acacia trees with firepit',
    icon: <GiCampingTent size={28} className="text-forest-green" />,
    highlights: [
      'Spacious wilderness pitches nestled under indigenous trees',
      'Clean modern ablution blocks with hot solar showers and toilets',
      'Communal firepit for evening braais and stargazing',
      'Overlander and rooftop tent friendly with 2WD/4WD access',
    ],
    ctaText: 'Book a Campsite Pitch',
    ctaHref: '/contact?type=camping',
  },
]

export default function ActivitiesPage() {
  return (
    <PageShell transparentNav={true}>
      <PageHero
        title="Safari & Activities"
        subtitle="Explore 332.15 hectares of wild savanna through game drives, walking trails, and panoramic lookouts"
        image="/images/lodge-17.jpg"
        imageAlt="Safari game drive in Mkuyu Game Ranch"
      />

      {/* Blended Experiences Intro & Day Visitor Welcome */}
      <section className="py-20 bg-white border-b border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1">
                Experiences at Mkuyu
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight leading-tight">
                Immersive safari adventures in Central Malawi
              </h2>
              <p className="text-[#14240E] text-base sm:text-lg leading-relaxed font-normal">
                Whether tracking zebra and waterbuck in our specially modified open 4x4 vehicles, walking ancient marula trails with certified FGASA rangers, or sipping sundowners on our landmark watchtower, every activity at Mkuyu is crafted for deep, unhurried connection with nature.
              </p>
            </div>

            {/* Right Blended Day Visit Panel */}
            <div className="lg:col-span-5 bg-[#14240E] text-white p-7 sm:p-8 rounded-2xl shadow-xl space-y-4 border border-white/10">
              <div className="flex items-center gap-2 text-light-sage text-xs font-extrabold tracking-wider uppercase">
                <FiClock size={16} />
                <span>Open 7 Days • 08:30 – 18:30 Daily</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Planning a Day Trip from Lilongwe or Lake Malawi?
              </h3>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                Mkuyu welcomes day visitors daily between {LODGE_FACTS.hours}. Enjoy scheduled morning and afternoon game drives, relax by our pool, enjoy a freshly prepared lunch, and climb the watchtower.
              </p>

              {/* Entrance Fee Mini Table */}
              <div className="pt-1 space-y-2">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-light-sage">
                  Entrance Fees (MWK)
                </p>
                <div className="bg-white/8 rounded-xl overflow-hidden border border-white/15 text-xs">
                  <div className="grid grid-cols-3 gap-0 border-b border-white/15 text-[10px] font-extrabold uppercase tracking-wider text-white/60 px-4 py-2">
                    <span></span>
                    <span>Adult</span>
                    <span>Child</span>
                  </div>
                  <div className="grid grid-cols-3 gap-0 px-4 py-3 border-b border-white/10 items-center">
                    <span className="font-bold text-white/90 text-[11px]">Gate Entry</span>
                    <span className="font-extrabold text-light-sage">MK 10,000</span>
                    <span className="font-extrabold text-white/80">MK 5,000</span>
                  </div>
                  <div className="grid grid-cols-3 gap-0 px-4 py-3 items-center">
                    <span className="font-bold text-white/90 text-[11px]">Game Drive</span>
                    <span className="font-extrabold text-light-sage">MK 40,000</span>
                    <span className="font-extrabold text-white/80">MK 20,000</span>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href="/contact?type=day-visit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-md hover:scale-105"
                >
                  <span>Book a Day Visit</span>
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION OF CARDS: SAFARI HIGHLIGHTS AT A GLANCE */}
      <section className="py-16 bg-forest-light border-b border-forest-green/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Activity Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 py-4 px-6 bg-white/80 backdrop-blur-xs rounded-2xl border border-forest-green/15 text-center">
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#14240E] block">
                <AnimatedCounter value={3} />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-green mt-1 block">
                Open 4x4 Fleet
              </span>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#14240E] block">
                <AnimatedCounter value={332.15} decimals={2} />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-green mt-1 block">
                Hectares Explored
              </span>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#14240E] block">
                <AnimatedCounter value={100} suffix="+" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-green mt-1 block">
                Recorded Bird Species
              </span>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#14240E] block">
                <AnimatedCounter value={360} suffix="°" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-green mt-1 block">
                Watchtower Panorama
              </span>
            </div>
          </div>

          <div className="text-left mb-10">
            <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-2">
              At A Glance
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#14240E] tracking-tight">
              Featured Safari Highlights
            </h3>
            <p className="text-sm text-[#14240E]/80 mt-1 max-w-2xl font-normal">
              Browse our core safari pillars below, or jump directly to detailed inclusions, timings, and guide profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: 4x4 Game Drives */}
            <a
              href="#game-drives"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-forest-green/15 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/lodge-40.jpg"
                    alt="Open 4x4 safari drive tracking wildlife"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-forest-green text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    4x4 Safaris
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-lg font-extrabold text-[#14240E] group-hover:text-forest-green transition-colors">
                    Game Drives
                  </h4>
                  <p className="text-xs text-[#14240E]/80 leading-relaxed">
                    Specially modified open 4x4 vehicles with tiered seating for unobstructed 360° savanna photography.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-forest-green/10 mt-3 flex items-center justify-between text-xs font-extrabold text-forest-green uppercase tracking-wider">
                <span>View Schedule</span>
                <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 2: Guided Bush Walks */}
            <a
              href="#bush-walks"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-forest-green/15 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/lodge-42.jpg"
                    alt="Certified FGASA ranger guiding walking safari"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-forest-green text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    On Foot
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-lg font-extrabold text-[#14240E] group-hover:text-forest-green transition-colors">
                    Guided Bush Walks
                  </h4>
                  <p className="text-xs text-[#14240E]/80 leading-relaxed">
                    Master the ancient art of tracking, read wildlife spoor, and explore medicinal tree botany with FGASA guides.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-forest-green/10 mt-3 flex items-center justify-between text-xs font-extrabold text-forest-green uppercase tracking-wider">
                <span>Explore Trails</span>
                <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 3: Landmark Watchtower */}
            <a
              href="#watchtower"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-forest-green/15 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/tower-actual.jpg"
                    alt="Actual landmark spiral watchtower under starry savanna sky"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-forest-green text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    360° Lookout
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-lg font-extrabold text-[#14240E] group-hover:text-forest-green transition-colors">
                    The Watchtower
                  </h4>
                  <p className="text-xs text-[#14240E]/80 leading-relaxed">
                    Spiral lookout platform rising above the acacia canopy for breathtaking sunset sundowners and bird spotting.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-forest-green/10 mt-3 flex items-center justify-between text-xs font-extrabold text-forest-green uppercase tracking-wider">
                <span>View Vistas</span>
                <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 4: Pool & Kids Playground */}
            <a
              href="#playground"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-forest-green/15 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/playground.jpg"
                    alt="Kids adventure sand playground with merry-go-round and swings"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-forest-green text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Family &amp; Leisure
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-lg font-extrabold text-[#14240E] group-hover:text-forest-green transition-colors">
                    Kids Park &amp; Pool
                  </h4>
                  <p className="text-xs text-[#14240E]/80 leading-relaxed">
                    Shaded carousel merry-go-round, swings, and crystal pool loungers for families between safari drives.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-forest-green/10 mt-3 flex items-center justify-between text-xs font-extrabold text-forest-green uppercase tracking-wider">
                <span>See Grounds</span>
                <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH SECTION EXPERIENCES (NOT CARD BOXES) */}
      <div className="divide-y divide-forest-green/10">
        {experiences.map((exp, index) => {
          const isReversed = index % 2 === 1
          const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-forest-light'

          return (
            <section
              key={exp.id}
              id={exp.id}
              className={`py-20 lg:py-28 ${bgClass}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? 'lg:order-2' : ''
                    }`}
                  >
                    <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                      <Image
                        src={exp.image}
                        alt={exp.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isReversed ? 'lg:order-1' : ''
                    }`}
                  >
                    <div>
                      <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-3">
                        {exp.tag}
                      </span>
                      <h3 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-xs font-extrabold uppercase text-forest-green tracking-wider mt-1">
                        {exp.subtitle}
                      </p>
                    </div>

                    <p className="text-[#14240E] leading-relaxed text-base sm:text-lg font-normal">
                      {exp.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-forest-green mb-3 pb-1 border-b border-forest-green/20 inline-block">
                        Highlights & Inclusions
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-[#14240E]">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <FiCheck className="text-forest-green flex-shrink-0 mt-0.5" size={16} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-forest-green bg-forest-light border border-forest-green/25 px-3.5 py-1.5 rounded-full">
                        Mkuyu Experience
                      </span>
                      <Link
                        href={exp.ctaHref}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-md hover:scale-105"
                      >
                        <span>{exp.ctaText}</span>
                        <FiArrowRight size={15} />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Reusable CTA */}
      <CtaSection
        title="Ready to experience the Malawian bush?"
        subtitle="Book a scheduled morning game drive, reserve an eco-sanctuary, or plan your day safari escape."
        primaryText="Contact Reservations"
        primaryHref="/contact"
        secondaryText="View Photo Gallery"
        secondaryHref="/gallery"
      />
    </PageShell>
  )
}
