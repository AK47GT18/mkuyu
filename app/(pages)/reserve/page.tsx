import Image from 'next/image'
import Link from 'next/link'
import { FiCheck, FiArrowRight, FiShield, FiCompass, FiAward, FiClock } from 'react-icons/fi'
import { GiWatchtower, GiJeep, GiFootprint, GiTreeBranch, GiAntelope } from 'react-icons/gi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import CtaSection from '@/app/components/ui/CtaSection'
import { LODGE_FACTS, WILDLIFE_CENSUS, FLEET_DETAILS } from '@/app/lib/content'

const wildlifeGallery = [
  { src: '/images/lodge-32.jpg', name: 'Plains Zebra', count: '27 Resident', desc: 'Striking black-and-white patterns emerge from the golden savanna' },
  { src: '/images/lodge-04.jpg', name: 'Nyala & Bushbuck', count: '40 Browsers', desc: 'Browsing through indigenous marula and acacia groves at dusk' },
  { src: '/images/lodge-35.jpg', name: 'Waterbuck & Impala', count: '41 Grazers', desc: 'Resting beneath marula trees in the reserve\'s shaded clearings' },
  { src: '/images/lodge-62.jpg', name: 'Herons & Waterbirds', count: '100+ Species', desc: 'Grey Heron wading through the reserve\'s lily-covered water pans' },
]

export default function ReservePage() {
  return (
    <PageShell transparentNav={true}>
      <PageHero
        title="The Reserve"
        subtitle="332.15 hectares of protected Malawian wilderness in Salima District"
        image="/images/lodge-06.jpg"
        imageAlt="Panoramic view from the Mkuyu watchtower over protected savanna"
      />

      {/* 1. THE LAND & ECOSYSTEM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1">
                The Land & Ecosystem
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] leading-tight tracking-tight">
                A protected sanctuary in the heart of Central Malawi
              </h2>
              <div className="space-y-4 text-[#14240E] text-base sm:text-lg leading-relaxed">
                <p>
                  Mkuyu Game Lodge occupies <strong>332.15 hectares</strong> of privately protected savanna and indigenous bush along the T358 in Salima District. Located approximately 90 minutes from Lilongwe and 25 minutes from Senga Bay on Lake Malawi, it represents one of the region&apos;s most accessible and serene wildlife sanctuaries.
                </p>
                <p>
                  The reserve encompasses a rich mosaic of acacia woodland, marula groves, open grassland pans, and seasonal waterways that sustain 145 resident animals under dedicated conservation management.
                </p>
                <p>
                  Operating entirely 100% off-grid on clean solar energy, zero poaching or hunting is permitted. Every decision is made to nurture the long-term vitality of this Malawian habitat.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-md hover:scale-105"
                >
                  <span>Explore Safaris</span>
                  <FiArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest-light text-forest-green border border-forest-green/20 text-xs font-extrabold uppercase tracking-widest rounded-full hover:bg-forest-mint transition-all"
                >
                  <span>Plan a Visit</span>
                </Link>
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

      {/* 2. WILDLIFE CENSUS: POPULATION DATA ACROSS 332.15 HA */}
      <section className="py-24 bg-forest-light border-y border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-3">
              Population Data • Wildlife Census
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              145 Resident Wildlife Across 332.15 ha
            </h2>
            <p className="text-[#14240E] text-base sm:text-lg mt-3 leading-relaxed">
              Carefully recorded census tracking the thriving animal populations protected within our reserve boundaries.
            </p>
          </div>

          {/* Detailed Census Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-16">
            {WILDLIFE_CENSUS.map((animal) => (
              <div
                key={animal.name}
                className="p-6 rounded-3xl bg-white border border-forest-green/15 shadow-sm hover:shadow-lg hover:border-forest-green/35 transition-all group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#14240E] group-hover:text-forest-green transition-colors">
                    {animal.count}
                  </span>
                  <span className="text-[10px] font-extrabold text-forest-green uppercase tracking-wider bg-forest-light px-2.5 py-1 rounded-full border border-forest-green/15">
                    Census Count
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#14240E] mb-0.5">
                  {animal.name}
                </h3>
                <p className="text-[11px] font-bold text-forest-green italic mb-2">
                  {animal.scientific}
                </p>
                <p className="text-xs text-[#14240E]/80 leading-relaxed font-normal">
                  {animal.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Photo gallery of wildlife inhabitants */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wildlifeGallery.map((item) => (
              <div
                key={item.name}
                className="relative rounded-3xl overflow-hidden shadow-md h-72 group border-2 border-white"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-light-sage mb-1">
                    {item.count}
                  </span>
                  <h4 className="text-lg font-extrabold leading-tight">{item.name}</h4>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERT RANGERS & THE WISDOM OF THE BUSH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1">
                The Wisdom of the Bush
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] leading-tight tracking-tight">
                Mastering the ancient art of tracking
              </h2>
              <div className="space-y-4 text-[#14240E] text-base leading-relaxed">
                <p>
                  Our guides are more than navigators; they are ecologists and storytellers with decades of experience tracking the subtle signs of the wild.
                </p>
                <p>
                  Mkuyu&apos;s rangers possess an intimate knowledge of the land. They interpret the wind, the alarm calls of birds, and the faint prints in the sand to bring you face-to-face with the bush&apos;s most elusive inhabitants.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-forest-light border border-forest-green/20 space-y-2">
                  <div className="flex items-center gap-2 text-forest-green font-extrabold text-sm">
                    <FiAward size={18} />
                    <span>Certified FGASA Rangers</span>
                  </div>
                  <p className="text-xs text-[#14240E]/85 leading-relaxed">
                    Globally recognized standards of safari guiding excellence and wildlife safety.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-forest-light border border-forest-green/20 space-y-2">
                  <div className="flex items-center gap-2 text-forest-green font-extrabold text-sm">
                    <FiCompass size={18} />
                    <span>Ecological Expertise</span>
                  </div>
                  <p className="text-xs text-[#14240E]/85 leading-relaxed">
                    Deep insights into indigenous flora, herbal lore, fauna behavior, and conservation.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[460px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/lodge-42.jpg"
                  alt="Rangers tracking wildlife in the bush"
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

      {/* 4. BUILT FOR THE WILD: 03 MODIFIED GAME DRIVE VEHICLES */}
      <section className="py-24 bg-[#14240E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-light-sage text-xs font-extrabold tracking-widest uppercase border-b-2 border-light-sage pb-1 mb-3">
              Built for the Wild • 03 Fleet
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Specially modified open 4x4 safari fleet
            </h2>
            <p className="text-white text-base mt-3 leading-relaxed">
              Our fleet consists of 3 specially modified Game Drive Vehicles, engineered to offer maximum visibility and comfort while navigating the rugged savanna terrain of Mkuyu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {FLEET_DETAILS.map((fleet) => (
              <div
                key={fleet.title}
                className="p-8 rounded-3xl bg-white/5 border border-white/15 space-y-4 hover:bg-white/10 transition-all"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-forest-green text-white text-[11px] font-extrabold uppercase tracking-wider">
                  {fleet.badge}
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  {fleet.title}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  {fleet.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15">
            <Image
              src="/images/lodge-40.jpg"
              alt="Open-air 4x4 safari vehicles on game drive"
              fill
              quality={85}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-6 sm:p-10">
              <p className="text-white text-lg sm:text-2xl font-extrabold">
                Tiered open-air seating for unobstructed 360° wildlife photography
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSERVATION THROUGH EDUCATION & IMPACT TRACKING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1">
                Our Commitment
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight leading-tight">
                Conservation Through Education
              </h2>
              <p className="text-[#14240E] text-base leading-relaxed">
                Every game drive at Mkuyu Lodge is an educational journey. We believe that by fostering a deep understanding of our ecosystem, we can inspire a lifelong commitment to preserving the natural heritage of Africa.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-forest-light border border-forest-green/20 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiShield size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#14240E]">Impact Tracking</h4>
                    <p className="text-xs text-[#14240E]/85 mt-1 leading-relaxed">
                      We monitor animal movements, breeding, and overall health during every drive, contributing vital field data to regional conservation initiatives.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-forest-light border border-forest-green/20 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#14240E]">Anti-Poaching Support</h4>
                    <p className="text-xs text-[#14240E]/85 mt-1 leading-relaxed">
                      A portion of every booking goes directly to the Mkuyu Anti-Poaching Unit, protecting our rhinos and big cats.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/lodge-37.jpg"
                alt="Watchtower overlook over protected wildlife reserve"
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCATION & ACCESS — FULL SECTIONS, NOT CARDS */}
      <section className="border-t border-forest-green/10">
        {/* Section Header */}
        <div className="py-16 bg-forest-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-3">
              Location &amp; Access
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              Visiting the reserve
            </h2>
          </div>
        </div>

        {/* Landmark Entrance Gate */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <Image
            src="/images/lodge-entrance.jpg"
            alt="Mkuyu Game Lodge Main Entrance Sanctuary Gate on T358 Salima"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-forest-green text-white text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-xs">
                Sanctuary Entrance
              </span>
              <p className="text-white text-xl sm:text-3xl font-extrabold tracking-tight">
                Grand Entrance Gate — T358, Salima District
              </p>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                Welcoming day safari guests and overnight sanctuary residents daily.
              </p>
            </div>
          </div>
        </div>

        {/* From Lilongwe — full-width section */}
        <div className="py-16 bg-white border-b border-forest-green/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-3">
              <p className="text-xs uppercase font-extrabold text-forest-green tracking-widest">From Lilongwe</p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#14240E] tracking-tight">90 Minutes Drive</h3>
              <p className="text-base text-[#14240E] leading-relaxed">
                Take the M14 highway directly from Lilongwe toward Salima, then follow signs along the T358 to our entrance. The road is fully tarred and accessible to all vehicles year-round.
              </p>
            </div>
            <div className="text-right hidden lg:block">
              <span className="inline-block text-7xl font-extrabold text-forest-green/15 tracking-tighter">90 min</span>
            </div>
          </div>
        </div>

        {/* From Senga Bay — full-width section */}
        <div className="py-16 bg-forest-light border-b border-forest-green/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-3">
              <p className="text-xs uppercase font-extrabold text-forest-green tracking-widest">From Senga Bay</p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#14240E] tracking-tight">25 Minutes Drive</h3>
              <p className="text-base text-[#14240E] leading-relaxed">
                Conveniently located just inland from Lake Malawi&apos;s beaches — ideal for combined bush-and-beach day trips. Perfect for an afternoon game drive or dinner before returning to the lake.
              </p>
            </div>
            <div className="text-right hidden lg:block">
              <span className="inline-block text-7xl font-extrabold text-forest-green/15 tracking-tighter">25 min</span>
            </div>
          </div>
        </div>

        {/* Reservations — Direct Contact section */}
        <div className="py-16 bg-[#14240E] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase font-extrabold text-light-sage tracking-widest">Reservations</p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Direct Contact</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Our reservations team is available daily to assist with sanctuary bookings, day safari inquiries, and guided activity planning.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-light-sage uppercase tracking-wider">Phone &amp; WhatsApp</p>
                  <a href={`tel:${LODGE_FACTS.phone}`} className="text-white hover:text-light-sage text-sm font-bold mt-0.5 block transition-colors">
                    {LODGE_FACTS.phone}
                  </a>
                  <p className="text-white/60 text-xs mt-0.5">Call or WhatsApp our reservations team</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-light-sage uppercase tracking-wider">Operating Hours</p>
                  <p className="text-white text-sm font-bold mt-0.5">{LODGE_FACTS.hours}</p>
                  <p className="text-white/60 text-xs mt-0.5">24/7 reception for overnight sanctuary guests</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-light-sage uppercase tracking-wider">Location</p>
                  <p className="text-white text-sm font-bold mt-0.5">{LODGE_FACTS.address}</p>
                  <p className="text-white/60 text-xs mt-0.5">Salima District, Central Region, Malawi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <CtaSection
        title="Plan your visit to the reserve"
        subtitle="Experience 332.15 hectares of wild Malawian savanna, guided game drives, and tranquil bush hospitality."
        primaryText="Contact Reservations"
        primaryHref="/contact"
      />
    </PageShell>
  )
}
