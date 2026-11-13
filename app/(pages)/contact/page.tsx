'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheck, FiSend } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import { LODGE_FACTS } from '@/app/lib/content'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Accommodation Stay',
    guests: '2',
    date: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageShell transparentNav={false}>
      <PageHero
        title="Contact & Reservations"
        subtitle="Plan your getaway, reserve an eco-sanctuary, or inquire about safari day visits"
        image="/images/lodge-07.jpg"
        imageAlt="Mkuyu Game Lodge contact and landscape"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-light rounded-3xl shadow-2xl border border-forest-green/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Contact Information Card (Deep Luxury Forest) */}
            <div className="lg:col-span-5 bg-[#14240E] text-white p-8 sm:p-14 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-light-sage text-xs font-extrabold tracking-widest uppercase mb-3 border border-white/20">
                    <span>Direct Assistance</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Get in touch
                  </h2>
                  <p className="text-white text-sm mt-3 leading-relaxed">
                    We welcome inquiries for overnight boutique stays, guided safaris, day-visitor passes, dining, and private gatherings.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0 mt-0.5">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold text-light-sage uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-white text-sm font-bold mt-0.5">
                        {LODGE_FACTS.address}
                      </p>
                      <p className="text-white/80 text-xs mt-0.5">
                        Salima District, Central Region, Malawi
                      </p>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0 mt-0.5">
                      <FiPhone size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold text-light-sage uppercase tracking-wider">
                        Call or WhatsApp
                      </p>
                      <a
                        href={`tel:${LODGE_FACTS.phone}`}
                        className="text-white hover:text-light-sage text-sm font-bold mt-0.5 block transition-colors"
                      >
                        {LODGE_FACTS.phone}
                      </a>
                      <p className="text-white/80 text-xs mt-0.5">
                        Direct line to lodge reservations
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0 mt-0.5">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold text-light-sage uppercase tracking-wider">
                        Email Inquiries
                      </p>
                      <a
                        href={`mailto:${LODGE_FACTS.email}`}
                        className="text-white hover:text-light-sage text-sm font-bold mt-0.5 block transition-colors"
                      >
                        {LODGE_FACTS.email}
                      </a>
                      <p className="text-white/80 text-xs mt-0.5">
                        Replies usually within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0 mt-0.5">
                      <FiClock size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold text-light-sage uppercase tracking-wider">
                        Day Visitor Hours
                      </p>
                      <p className="text-white text-sm font-bold mt-0.5">
                        {LODGE_FACTS.hours}
                      </p>
                      <p className="text-white/80 text-xs mt-0.5">
                        24/7 reception for overnight residents
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 border-t border-white/15 mt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-light-sage mb-3">
                  Connect on Social
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-forest-green transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-forest-green transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href={`https://wa.me/${LODGE_FACTS.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-forest-green transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Booking / Message Form (Crisp White) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-14">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light text-forest-green text-xs font-extrabold tracking-widest uppercase mb-2 border border-forest-green/20">
                  <span>Online Inquiry</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#14240E] tracking-tight">
                  Send us a message or booking request
                </h3>
                <p className="text-sm font-semibold text-[#14240E]/80 mt-1">
                  Fill in your details below and our team will confirm availability.
                </p>
              </div>

              {submitted ? (
                <div className="bg-forest-light border border-forest-green/30 rounded-3xl p-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-forest-green text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <FiCheck size={28} />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#14240E]">Thank you for your message</h4>
                  <p className="text-sm font-bold text-[#14240E] max-w-md mx-auto leading-relaxed">
                    We have received your request. Our reservations team will review dates and contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-8 py-3 bg-forest-green text-white text-xs font-extrabold uppercase tracking-widest rounded-full hover:bg-[#4A602B] transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#14240E] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Chisomo Banda"
                        className="w-full px-5 py-3.5 rounded-2xl border border-forest-green/20 bg-forest-light text-[#14240E] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-forest-green transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#14240E] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-5 py-3.5 rounded-2xl border border-forest-green/20 bg-forest-light text-[#14240E] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-forest-green transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#14240E] mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+265 ..."
                        className="w-full px-5 py-3.5 rounded-2xl border border-forest-green/20 bg-forest-light text-[#14240E] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-forest-green transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#14240E] mb-2">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-forest-green/20 bg-forest-light text-[#14240E] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-forest-green transition-all cursor-pointer"
                      >
                        <option>Accommodation Stay</option>
                        <option>Safari Game Drive</option>
                        <option>Day Visitor Pass</option>
                        <option>Restaurant & Boma</option>
                        <option>Campsite Booking</option>
                        <option>Private Event</option>
                        <option>General Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#14240E] mb-2">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-forest-green/20 bg-forest-light text-[#14240E] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-forest-green transition-all cursor-pointer"
                      >
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 - 4 People</option>
                        <option>5 - 8 People</option>
                        <option>Group (9+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#14240E] mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl border border-forest-green/20 bg-forest-light text-[#14240E] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-forest-green transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#14240E] mb-2">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your trip dates, preferred room type, dietary requirements, or any questions..."
                      className="w-full px-5 py-3.5 rounded-2xl border border-forest-green/20 bg-forest-light text-[#14240E] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-forest-green transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-forest-green hover:bg-[#4A602B] text-white font-extrabold uppercase tracking-widest text-xs rounded-full transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <FiSend size={16} />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here Guide */}
      <section className="py-24 bg-forest-light border-t border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-forest-green text-xs font-extrabold tracking-widest uppercase mb-2 border border-forest-green/20">
              <span>Directions & Access</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
              How to reach Mkuyu Game Lodge
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-forest-green/15 space-y-3 shadow-md">
              <p className="text-xl font-extrabold text-forest-green">
                From Lilongwe
              </p>
              <p className="text-xs uppercase font-extrabold text-[#14240E] tracking-wider">
                Approx. 1.5 – 2 Hours Drive
              </p>
              <p className="text-sm text-[#14240E] leading-relaxed">
                Take the M14 tarmac road eastward from Lilongwe toward Salima. Turn along the T358 route following local reserve signage.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-forest-green/15 space-y-3 shadow-md">
              <p className="text-xl font-extrabold text-forest-green">
                From Lake Malawi (Senga Bay)
              </p>
              <p className="text-xs uppercase font-extrabold text-[#14240E] tracking-wider">
                Approx. 25 – 30 Minutes Drive
              </p>
              <p className="text-sm text-[#14240E] leading-relaxed">
                Mkuyu is an easy half-hour drive inland from Senga Bay&apos;s beaches and resorts. Perfect for an afternoon game drive or dinner before returning to the lake.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-forest-green/15 space-y-3 shadow-md">
              <p className="text-xl font-extrabold text-forest-green">
                Transfers & Pickups
              </p>
              <p className="text-xs uppercase font-extrabold text-[#14240E] tracking-wider">
                Upon Prior Request
              </p>
              <p className="text-sm text-[#14240E] leading-relaxed">
                Private airport transfers from Kamuzu International Airport (LLW) or Senga Bay lodges can be organized with prior notice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
