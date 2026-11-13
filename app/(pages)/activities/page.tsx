import Image from 'next/image'
import Link from 'next/link'
import { GiJeep, GiFootprint, GiWatchtower, GiBirdTwitter, GiCampingTent, GiWaterPolo, GiCampfire } from 'react-icons/gi'
import { FiClock, FiCheck, FiArrowRight } from 'react-icons/fi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import { SERVICES, LODGE_FACTS } from '@/app/lib/content'

const activityImages: Record<string, string> = {
  'game-drives': '/images/lodge-40.jpg',
  'bush-walks': '/images/lodge-42.jpg',
  'watchtower': '/images/lodge-37.jpg',
  'birdwatching': '/images/lodge-09.jpg',
  'accommodation': '/images/lodge-14.jpg',
  'dining': '/images/lodge-27.jpg',
  'pool': '/images/lodge-18.jpg',
  'camping': '/images/lodge-61.jpg',
}

const activityIcons: Record<string, React.ReactNode> = {
  'game-drives': <GiJeep size={28} className="text-forest-green" />,
  'bush-walks': <GiFootprint size={28} className="text-forest-green" />,
  'watchtower': <GiWatchtower size={28} className="text-forest-green" />,
  'birdwatching': <GiBirdTwitter size={28} className="text-forest-green" />,
  'pool': <GiWaterPolo size={28} className="text-forest-green" />,
  'camping': <GiCampingTent size={28} className="text-forest-green" />,
  'dining': <GiCampfire size={28} className="text-forest-green" />,
}

export default function ActivitiesPage() {
  const experiences = SERVICES.filter((s) => s.id !== 'accommodation')

  return (
    <PageShell transparentNav={false}>
      <PageHero
        title="Safari & Activities"
        subtitle="Explore 330 hectares of wild savanna through game drives, walking trails, and panoramic lookouts"
        image="/images/lodge-17.jpg"
        imageAlt="Safari game drive in Mkuyu Game Ranch"
      />

      {/* Intro section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light text-forest-green text-xs font-extrabold tracking-widest uppercase mb-4 border border-forest-green/20">
            <span>Experiences at Mkuyu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] mb-6 tracking-tight">
            Immersive safari adventures in Central Malawi
          </h2>
          <p className="text-[#14240E] text-base sm:text-lg leading-relaxed">
            Whether tracking zebra and antelope in open 4x4 safari vehicles, walking ancient marula trails with expert trackers, or taking in the sunset from our signature watchtower, every activity at Mkuyu is tailored for deep connection with nature.
          </p>
        </div>
      </section>

      {/* Day Visitor Banner */}
      <section className="py-12 bg-forest-light border-y border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-green text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-light-sage text-xs font-extrabold tracking-wider uppercase">
                <FiClock size={16} />
                <span>Day Visitors Welcome Daily</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Planning a Day Trip from Lilongwe or Lake Malawi?
              </h3>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                Mkuyu welcomes day visitors daily between {LODGE_FACTS.hours}. Enjoy a guided game drive, swim in our outdoor pool, savor lunch at the restaurant, and climb the watchtower.
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

      {/* Main activities list */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {experiences.map((exp, index) => {
            const isReversed = index % 2 === 1
            const imgSrc = activityImages[exp.id] || '/images/lodge-40.jpg'

            return (
              <div
                key={exp.id}
                id={exp.id}
                className="bg-forest-light rounded-3xl overflow-hidden shadow-xl border border-forest-green/15 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div
                  className={`lg:col-span-5 relative min-h-[320px] lg:min-h-[440px] ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute top-5 left-5 bg-white px-4 py-1.5 rounded-full text-xs font-extrabold text-forest-green uppercase tracking-wider shadow-md">
                    {exp.subtitle}
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 p-8 sm:p-14 flex flex-col justify-between ${
                    isReversed ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="space-y-5">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
                      {activityIcons[exp.id] || <GiJeep size={24} className="text-forest-green" />}
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-[#14240E] tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-[#14240E] leading-relaxed text-base">
                      {exp.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-forest-green mb-3">
                        Highlights & Inclusions
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#14240E]">
                        <li className="flex items-center gap-2">
                          <FiCheck className="text-forest-green flex-shrink-0" size={16} />
                          <span>Expert Malawian wildlife tracker</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FiCheck className="text-forest-green flex-shrink-0" size={16} />
                          <span>Unobstructed photography views</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FiCheck className="text-forest-green flex-shrink-0" size={16} />
                          <span>Ideal for couples and families</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FiCheck className="text-forest-green flex-shrink-0" size={16} />
                          <span>100% eco-friendly operations</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-forest-green/15 mt-8 flex items-center justify-between">
                    <span className="text-xs text-forest-green font-extrabold uppercase tracking-widest">
                      Mkuyu Experience
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all hover:scale-105"
                    >
                      <span>Inquire / Reserve</span>
                      <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 bg-[#14240E] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Ready to experience the Malawian wilderness?
          </h2>
          <p className="text-white text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Book your safari drive or plan your day visit today. Our trackers are ready to guide you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-9 py-4 bg-forest-green hover:bg-[#4A602B] text-white font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              Plan Your Adventure
            </Link>
            <Link
              href="/accommodation"
              className="px-9 py-4 bg-white text-[#14240E] hover:bg-forest-mint font-extrabold rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              View Sanctuaries
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
