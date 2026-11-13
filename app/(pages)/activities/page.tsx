import Image from 'next/image'
import Link from 'next/link'
import { GiJeep, GiFootprint, GiWatchtower, GiBirdTwitter, GiCampingTent, GiWaterPolo, GiCampfire } from 'react-icons/gi'
import { FiClock, FiCheck, FiArrowRight } from 'react-icons/fi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import CtaSection from '@/app/components/ui/CtaSection'
import { LODGE_FACTS } from '@/app/lib/content'

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
    image: '/images/lodge-42.jpg',
    imageAlt: 'Elevated view from Mkuyu watchtower looking over tree canopy and water pan',
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
    title: 'Bush Dining',
    subtitle: 'Local and continental cuisine',
    description:
      'Our open-air restaurant celebrates fresh, locally sourced Malawian produce paired with international classics. Dine surrounded by birdsong under our timber pavilion, or gather around the evening boma firepit for traditional braai barbecues and cold drinks under a canopy of stars.',
    image: '/images/lodge-27.jpg',
    imageAlt: 'Bush dining spread — pizzas and local Malawian cuisine at Mkuyu',
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
    title: 'Swimming Pool',
    subtitle: 'Surrounded by indigenous trees',
    description:
      'A crystal-clear pool fringed by native trees and comfortable sun loungers offers the ultimate midday escape between game drives. Relax with a chilled drink, listen to weaver birds in the branches, and cool off under the warm Malawian sun.',
    image: '/images/lodge-14.jpg',
    imageAlt: 'Crystal-clear swimming pool with timber sun loungers and indigenous trees at Mkuyu',
    icon: <GiWaterPolo size={28} className="text-forest-green" />,
    highlights: [
      'Crystal-clear pool secluded in a tranquil natural clearing',
      'Fringed by shaded loungers and indigenous trees',
      'Poolside beverage and light lunch service from the safari bar',
      'Full access included with day passes and overnight bookings',
    ],
    ctaText: 'Inquire Pool Pass',
    ctaHref: '/contact?type=pool',
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

      {/* Intro section */}
      <section className="py-24 bg-white border-b border-forest-green/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-4">
            Experiences at Mkuyu
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] mb-6 tracking-tight">
            Immersive safari adventures in Central Malawi
          </h2>
          <p className="text-[#14240E] text-base sm:text-lg leading-relaxed">
            Whether tracking zebra and waterbuck in our specially modified open 4x4 vehicles, walking ancient marula trails with certified FGASA rangers, or sipping sundowners on our landmark watchtower, every activity at Mkuyu is crafted for deep, unhurried connection with nature.
          </p>
        </div>
      </section>

      {/* Day Visitor Banner */}
      <section className="py-12 bg-forest-light border-b border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-green text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-light-sage text-xs font-extrabold tracking-wider uppercase">
                <FiClock size={16} />
                <span>Open 7 Days • 08:30 – 18:30 Daily</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Planning a Day Trip from Lilongwe or Lake Malawi?
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Mkuyu welcomes day visitors daily between {LODGE_FACTS.hours}. Enjoy scheduled morning and afternoon game drives, relax by our pool, enjoy a freshly prepared lunch, and climb the watchtower.
              </p>
            </div>
            <Link
              href="/contact?type=day-visit"
              className="px-9 py-4 bg-white text-forest-green hover:bg-forest-mint font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105 flex-shrink-0"
            >
              Book a Day Visit
            </Link>
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
