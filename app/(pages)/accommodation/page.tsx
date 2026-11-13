'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiCheck, FiArrowRight, FiUsers, FiSun, FiDroplet } from 'react-icons/fi'
import { GiWoodCabin, GiCampfire } from 'react-icons/gi'
import { MdDinnerDining, MdEco, MdSolarPower, MdWaterDrop } from 'react-icons/md'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import CtaSection from '@/app/components/ui/CtaSection'
import { LODGE_FACTS } from '@/app/lib/content'
const roomList = [
  {
    id: 'garden-sanctuary',
    roomNumbers: 'Rooms 03, 04 & 05',
    type: 'Double Room • En Suite',
    name: 'Garden Sanctuaries',
    description:
      'Nestled within the indigenous flora, each Garden Sanctuary features a private wooden sun deck overlooking peaceful marula groves. Solar-heated walk-in showers refresh after morning safaris, while handcrafted hardwood furnishings and organic cotton linens ensure restorative tranquility.',
    image: '/images/room-twin-family.jpg',
    imageAlt: 'Garden Sanctuary twin bedroom with handcrafted timber furniture and artisan wall decor',
    secondImage: '/images/lodge-16.jpg',
    secondImageAlt: 'Garden Sanctuary private wooden veranda overlooking the marula grove',
    capacity: '2 Guests per room',
    features: [
      'Private terrace overlooking Marula grove',
      'Solar-heated en-suite walk-in shower',
      'Eco-beam local timber construction',
      'Handcrafted artisan furniture & desk',
      'Organic cotton linens & mosquito drapery',
      'Direct walking trail connectivity',
    ],
  },
  {
    id: 'family-sanctuary',
    roomNumbers: 'Room 02',
    type: 'Family Room • En Suite',
    name: 'Family Room',
    description:
      'Designed for families and traveling companions, this spacious suite features flexible twin or double bed configurations with handcrafted Malawian hardwood frames. Artisan woven wall art and locally sourced linens create a warm, authentic African home away from home.',
    image: '/images/room-double-king.jpg',
    imageAlt: 'Family Sanctuary double room with king bed, woven wall art, and en-suite bathroom',
    secondImage: '/images/lodge-32.jpg',
    secondImageAlt: 'Family Sanctuary exterior and bush veranda views',
    capacity: 'Up to 4 Guests',
    features: [
      'Floor-to-ceiling glass merging indoor and out.',
      'Flexible twin & king bed configurations',
      'Woven artisan wall art, locally crafted',
      'En-suite bathroom with solar hot water',
      'Hand-carved lounge seating and dining nook',
      '100% off-grid solar electricity & charging points',
    ],
  },
  {
    id: 'executive-sanctuary',
    roomNumbers: 'Room 01',
    type: 'Executive Room • En Suite',
    name: 'Executive Room',
    description:
      'The most secluded retreat on the ranch, situated at the edge of the protected savanna for unmatched peace and panoramic wilderness views. Features a plush king bed, private wrap-around deck, bespoke lounge chairs, and an outdoor rain shower.',
    image: '/images/lodge-35.jpg',
    imageAlt: 'Executive Sanctuary private sun deck and bedroom',
    secondImage: '/images/lodge-14.jpg',
    secondImageAlt: 'Executive Sanctuary exterior nestled in indigenous bush',
    capacity: '2 Guests (Honeymoon & Retreats)',
    features: [
      'The most secluded suite for ultimate privacy',
      'Wrap-around viewing deck facing savanna sunset',
      'Signature solar-heated rain shower',
      'Artisan Malawian hardwood bedframe',
      'Private sundowner dining setup on deck',
      'Complimentary morning tea/coffee delivery',
    ],
  },
  {
    id: 'campsite',
    roomNumbers: 'Wilderness Pitch',
    type: 'Overlander Camping',
    name: 'Savanna Campsite',
    description:
      'For self-sufficient overlanders and adventurers who want to sleep beneath an unpolluted canopy of stars. Our designated campsite provides direct access to reserve trails, clean ablution blocks with hot solar showers, and a central braai firepit.',
    image: '/images/lodge-61.jpg',
    imageAlt: 'Campsite under acacia canopy with firepit',
    secondImage: '/images/lodge-62.jpg',
    secondImageAlt: 'Campsite ablution block and open woodland surroundings',
    capacity: 'Overlanders & Campers',
    features: [
      'Clean modern ablution blocks with solar hot water',
      'Central firepit and braai barbecue area',
      '2WD & 4WD vehicle and rooftop tent accessible',
      'Direct access to morning walking trails & pool',
    ],
  },
]

export default function StayAndDinePage() {
  const [booking, setBooking] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomType: 'Garden Sanctuary',
  })

  return (
    <PageShell transparentNav={true}>
      <PageHero
        title="Stay & Dine"
        subtitle="Five intimate eco-sanctuaries & authentic open-air bush dining in 332.15 ha of protected wilderness"
        image="/images/lodge-14.jpg"
        imageAlt="Mkuyu Game Lodge accommodation and bush restaurant"
      />

      {/* QUICK RESERVATION & AVAILABILITY WIDGET */}
      <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-forest-green/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-4 pb-4 border-b border-forest-green/10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-forest-green">
                Boutique Reservation Widget
              </span>
              <p className="text-lg font-extrabold text-[#14240E]">
                Check sanctuary availability & plan your dining
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-forest-green bg-forest-light px-3.5 py-1.5 rounded-full border border-forest-green/20">
              <FiUsers size={15} />
              <span>5 en suite rooms — accommodates up to 12 guests</span>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = `/contact?name=${encodeURIComponent(
                booking.name
              )}&checkIn=${encodeURIComponent(
                booking.checkIn
              )}&checkOut=${encodeURIComponent(
                booking.checkOut
              )}&guests=${encodeURIComponent(booking.guests)}`
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
          >
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={booking.name}
                onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-forest-light/60 border border-forest-green/20 text-xs font-medium text-[#14240E] focus:outline-hidden focus:border-forest-green"
              />
            </div>

            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1">
                Check-In Date
              </label>
              <input
                type="date"
                required
                value={booking.checkIn}
                onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-forest-light/60 border border-forest-green/20 text-xs font-medium text-[#14240E] focus:outline-hidden focus:border-forest-green"
              />
            </div>

            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1">
                Check-Out Date
              </label>
              <input
                type="date"
                required
                value={booking.checkOut}
                onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-forest-light/60 border border-forest-green/20 text-xs font-medium text-[#14240E] focus:outline-hidden focus:border-forest-green"
              />
            </div>

            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1">
                Guests
              </label>
              <select
                value={booking.guests}
                onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-forest-light/60 border border-forest-green/20 text-xs font-medium text-[#14240E] focus:outline-hidden focus:border-forest-green"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests</option>
                <option value="Full Lodge (Up to 12)">Full Lodge (Up to 12)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Book Now</span>
                <FiArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 1. FIVE EN SUITE SANCTUARIES INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-4">
            Five En Suite Sanctuaries Amidst the African Wild
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] mb-6 tracking-tight">
            Designed to breathe with the landscape
          </h2>
          <p className="text-[#14240E] text-base sm:text-lg leading-relaxed font-normal mb-10">
            Our eco-friendly rooms offer an intimate connection to nature without compromising on the refined comforts of a boutique retreat. Built using pioneering eco-beam technology, each room features a private deck and locally sourced timber furniture, crafted by artisans from the neighbouring village.
          </p>

          {/* Sustainable Elegance with eco, solar_power, water_drop */}
          <div className="bg-forest-light border border-forest-green/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs text-left">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-forest-green mb-1">
                Sustainable Elegance
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#14240E] leading-relaxed">
                Every room features a private deck and locally sourced timber furniture, crafted by artisans from the neighbouring village.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-11 h-11 rounded-2xl bg-white border border-forest-green/20 flex items-center justify-center text-forest-green shadow-xs" title="Eco-friendly craft">
                <MdEco size={22} />
              </div>
              <div className="w-11 h-11 rounded-2xl bg-white border border-forest-green/20 flex items-center justify-center text-forest-green shadow-xs" title="100% Solar Power">
                <MdSolarPower size={22} />
              </div>
              <div className="w-11 h-11 rounded-2xl bg-white border border-forest-green/20 flex items-center justify-center text-forest-green shadow-xs" title="Greywater Recycling">
                <MdWaterDrop size={22} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SANCTUARIES (FULL-WIDTH SECTIONS) */}
      <div className="divide-y divide-forest-green/10">
        {roomList.map((room, idx) => {
          const isReversed = idx % 2 === 1
          const bgClass = idx % 2 === 0 ? 'bg-forest-light' : 'bg-white'

          return (
            <section key={room.id} id={room.id} className={`py-20 lg:py-24 ${bgClass}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Image — dual layout when secondImage exists */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                    {(room as any).secondImage ? (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative h-[280px] sm:h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                          <Image
                            src={room.image}
                            alt={room.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[280px] sm:h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white mt-8">
                          <Image
                            src={(room as any).secondImage}
                            alt={(room as any).secondImageAlt}
                            fill
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-[360px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                          src={room.image}
                          alt={room.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-3">
                        {room.roomNumbers} • {room.capacity}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-[#14240E] tracking-tight">
                        {room.name}
                      </h3>
                      <p className="text-xs font-extrabold text-forest-green uppercase tracking-wider mt-1">
                        {room.type}
                      </p>
                    </div>

                    <p className="text-[#14240E] text-base leading-relaxed font-normal">
                      {room.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-forest-green mb-3 pb-1 border-b border-forest-green/20 inline-block">
                        Sustainable Elegance & Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold text-[#14240E]">
                        {room.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <FiCheck className="text-forest-green flex-shrink-0 mt-0.5" size={16} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Link
                        href={`/contact?room=${room.id}`}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-md hover:scale-105"
                      >
                        <span>Reserve Sanctuary</span>
                        <FiArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* 3. LIGHT FOOTPRINTS, DEEP EXPERIENCES */}
      <section className="py-24 bg-[#14240E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-light-sage text-xs font-extrabold tracking-widest uppercase border-b-2 border-light-sage pb-1 mb-4">
              Sustainable Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              <span className="underline decoration-light-sage decoration-4 underline-offset-8">Light Footprints,</span>
              <br />Deep Experiences.
            </h2>
            <p className="text-white text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Our rooms are built using eco-beam technology, minimizing the impact on the soil. We operate entirely on a standalone solar power system and recycle 100% of our greywater for garden irrigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/15 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-green flex items-center justify-center text-white">
                <FiSun size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-white">100% Solar Powered</h3>
              <p className="text-xs text-white/80 leading-relaxed font-normal">
                Standalone solar panels and battery storage power all lighting, charging outlets, and silent ceiling fans with zero carbon emissions.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/15 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-green flex items-center justify-center text-white">
                <FiDroplet size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-white">100% Greywater Recycled</h3>
              <p className="text-xs text-white/80 leading-relaxed font-normal">
                All bathroom wastewater is filtered through natural sand and reed-bed systems, irrigating indigenous marula trees and surrounding bush gardens.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/15 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-green flex items-center justify-center text-white">
                <GiWoodCabin size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-white">Local Artisan Craft</h3>
              <p className="text-xs text-white/80 leading-relaxed font-normal">
                Built with eco-beams minimizing soil disturbance. Every table, bedframe, and deck was shaped by craftsmen from neighbouring Salima villages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUSH DINING & BOMA FIREPIT (BLENDED DINING SECTION) */}
      <section id="dining" className="py-24 bg-white border-b border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1">
                Bush Dining & Safari Bar
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] leading-tight tracking-tight">
                Farm-to-table Malawian flavours & starlit boma evenings
              </h2>
              <p className="text-[#14240E] text-base leading-relaxed font-normal">
                Dining at Mkuyu is an extension of the safari experience. Our open-air restaurant and timber pavilion overlook lush gardens and indigenous marula groves. Fresh breakfasts follow the morning Buck Pursuit drive, followed by relaxed lunches and evening fireside boma dinners.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-forest-light border border-forest-green/15 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MdDinnerDining size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#14240E]">Fresh Seasonal Menus</h4>
                    <p className="text-xs text-[#14240E]/85 mt-1 leading-relaxed">
                      Locally sourced seasonal vegetables, freshly caught lake fish from nearby Lake Malawi, and traditional Malawian recipes alongside continental choices.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-forest-light border border-forest-green/15 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GiCampfire size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#14240E]">The Boma Firepit</h4>
                    <p className="text-xs text-[#14240E]/85 mt-1 leading-relaxed">
                      As night falls, gather around the open boma fire for braai barbecues, storytelling, cold Malawian beers, and South African wines under the southern sky.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/contact?type=dining"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-md hover:scale-105"
                >
                  <span>Reserve a Table</span>
                  <FiArrowRight size={15} />
                </Link>
                <Link
                  href="/contact?type=day-visit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest-light text-forest-green border border-forest-green/20 text-xs font-extrabold uppercase tracking-widest rounded-full hover:bg-forest-mint transition-all"
                >
                  <span>Day Dining Pass</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/images/lodge-29.jpg"
                    alt="Open-air bush restaurant tables"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-white mt-8">
                  <Image
                    src="/images/lodge-27.jpg"
                    alt="Safari bar and dining area"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <CtaSection
        title="Come and immerse yourself in the stillness of the bush"
        subtitle="Five intimate eco-sanctuaries for up to 12 guests. Sustainable luxury and warm Malawian hospitality."
        primaryText="Check Availability"
        primaryHref="/contact"
        secondaryText="View Activities"
        secondaryHref="/activities"
      />
    </PageShell>
  )
}
