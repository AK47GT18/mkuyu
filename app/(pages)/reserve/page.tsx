import Image from 'next/image'
import Link from 'next/link'
import { FiCheck, FiArrowRight, FiShield, FiCompass, FiAward, FiClock } from 'react-icons/fi'
import { GiWatchtower, GiJeep, GiFootprint } from 'react-icons/gi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import CtaSection from '@/app/components/ui/CtaSection'
import AnimatedCounter from '@/app/components/ui/AnimatedCounter'

const wildlifeGallery = [
  { src: '/images/lodge-32.jpg', name: 'Plains Zebra', countVal: 27, countSuffix: '', countLabel: 'Resident', desc: 'Striking black-and-white patterns emerging from the golden savanna' },
  { src: '/images/ostrich-wildlife.jpg', name: 'Resident Ostriches', countVal: 10, countSuffix: '', countLabel: 'Flock', desc: 'Towering sentinels of the open savanna pans and marula clearings' },
  { src: '/images/lodge-04.jpg', name: 'Nyala & Bushbuck', countVal: 40, countSuffix: '', countLabel: 'Browsers', desc: 'Browsing through indigenous marula and acacia groves at dawn and dusk' },
  { src: '/images/lodge-62.jpg', name: 'Herons & Waterbirds', countVal: 100, countSuffix: '+', countLabel: 'Species', desc: 'Grey Heron wading through the reserve\'s lily-covered water pans' },
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
                The Land &amp; Ecosystem
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

      {/* 2. WILDLIFE INHABITANTS SHOWCASE (CLEAN PHOTO SHOWCASE, NO CLUTTERED STATS CARDS) */}
      <section className="py-24 bg-forest-light border-y border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-3">
              Protected Wilderness
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              Inhabitants of Mkuyu
            </h2>
            <p className="text-[#14240E] text-base sm:text-lg mt-3 leading-relaxed">
              Home to <span className="font-extrabold"><AnimatedCounter value={145} /></span> resident animals roaming free across <span className="font-extrabold"><AnimatedCounter value={332.15} decimals={2} /></span> hectares of pristine Malawian savanna.
            </p>
          </div>

          {/* Reserve Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 py-4 px-6 bg-white/70 backdrop-blur-xs rounded-2xl border border-forest-green/15 text-center">
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#14240E] block">
                <AnimatedCounter value={332.15} decimals={2} />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-green mt-1 block">
                Hectares Protected
              </span>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#14240E] block">
                <AnimatedCounter value={145} />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-green mt-1 block">
                Resident Animals
              </span>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#14240E] block">
                <AnimatedCounter value={27} />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-green mt-1 block">
                Plains Zebras
              </span>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#14240E] block">
                <AnimatedCounter value={100} suffix="%" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-green mt-1 block">
                Solar Off-Grid
              </span>
            </div>
          </div>

          {/* Photo gallery of wildlife inhabitants */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wildlifeGallery.map((item) => (
              <div
                key={item.name}
                className="relative rounded-2xl overflow-hidden shadow-md h-80 group border-2 border-white"
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
                  <span className="text-[11px] uppercase font-extrabold tracking-widest text-light-sage mb-1 flex items-center gap-1">
                    <AnimatedCounter value={item.countVal} suffix={item.countSuffix} />
                    <span>{item.countLabel}</span>
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

      {/* 4. REDESIGNED: THE SAFARI EXPERIENCE & LANDMARK WATCHTOWER */}
      <section className="py-24 bg-[#14240E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-light-sage text-xs font-extrabold tracking-widest uppercase border-b-2 border-light-sage pb-1">
                The Safari Experience
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                From open savanna drives to starlit canopy lookouts
              </h2>
              <p className="text-white/90 text-base leading-relaxed font-normal">
                Exploration at Mkuyu moves at the rhythm of the wild. Board specially modified open 4x4 game drive vehicles equipped with tiered seating for panoramic 360° photography. As twilight falls, ascend our landmark spiral watchtower rising above the acacia canopy for starlit vistas across the dark African sky.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/15 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GiJeep size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Open 4x4 Game Drives</h4>
                    <p className="text-xs text-white/80 mt-0.5">
                      Morning Buck Pursuit and golden-hour Dusk Expeditions tracking zebras, waterbucks, and nyalas with expert trackers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/15 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GiWatchtower size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Landmark 360° Watchtower</h4>
                    <p className="text-xs text-white/80 mt-0.5">
                      An iconic elevated spiral observation deck delivering unbroken views across 332.15 ha of wilderness and unpolluted night skies.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/15 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GiFootprint size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Guided Walking Trails</h4>
                    <p className="text-xs text-white/80 mt-0.5">
                      Intimate foot safaris exploring indigenous marula groves, bird alarm calls, spoor tracking, and medicinal plant lore.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-md hover:scale-105"
                >
                  <span>View All Safari Activities</span>
                  <FiArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/15">
                <Image
                  src="/images/tower-actual.jpg"
                  alt="The landmark spiral watchtower under the starry night sky at Mkuyu"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-extrabold text-white">The Landmark Watchtower</span>
                </div>
              </div>

              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/15 sm:mt-8">
                <Image
                  src="/images/lodge-40.jpg"
                  alt="Open 4x4 Game drive vehicle on safari at Mkuyu"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-extrabold text-white">Open 4x4 Tiered Safari Fleet</span>
                </div>
              </div>
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

      {/* 6. REUSABLE CTA */}
      <CtaSection
        title="Plan your visit to the reserve"
        subtitle="Experience 332.15 hectares of wild Malawian savanna, guided game drives, and tranquil bush hospitality."
        primaryText="Contact Reservations"
        primaryHref="/contact"
      />
    </PageShell>
  )
}
