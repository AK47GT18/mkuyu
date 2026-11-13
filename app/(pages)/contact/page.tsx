'use client'

import { useState } from 'react'
import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiCheck,
  FiSend,
} from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import { LODGE_FACTS, ADMISSION_FEES } from '@/app/lib/content'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Accommodation Stay',
    guests: '2 People',
    date: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (field: string, value: string) => {
    let err = ''
    if (field === 'name') {
      if (!value.trim()) err = 'Full name is required'
      else if (value.trim().length < 2) err = 'Name must be at least 2 characters'
    } else if (field === 'email') {
      if (!value.trim()) err = 'Email address is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) err = 'Please enter a valid email address'
    } else if (field === 'phone') {
      if (value.trim() && !/^[+0-9\s\-()]{7,}$/.test(value.trim())) err = 'Please enter a valid phone number'
    } else if (field === 'message') {
      if (!value.trim()) err = 'Message / inquiry details are required'
      else if (value.trim().length < 5) err = 'Please provide at least 5 characters'
    }
    return err
  }

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const val = (formData as Record<string, string>)[field] || ''
    const err = validateField(field, val)
    setErrors((prev) => ({ ...prev, [field]: err }))
  }

  const handleChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }))
    if (touched[field]) {
      const err = validateField(field, val)
      setErrors((prev) => ({ ...prev, [field]: err }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message),
    }

    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    })

    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((err) => err !== '')
    if (!hasErrors) {
      setSubmitted(true)
    }
  }

  return (
    <PageShell transparentNav={true}>
      <PageHero
        title="Contact & Reservations"
        subtitle="Plan your getaway, reserve an eco-sanctuary, or inquire about safari day visits"
        image="/images/lodge-07.jpg"
        imageAlt="Mkuyu Game Lodge contact and landscape"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-light rounded-3xl shadow-2xl border border-forest-green/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Contact Information Card (No Badges, Clean) */}
            <div className="lg:col-span-5 bg-[#14240E] text-white p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Get in touch
                  </h2>
                  <p className="text-white/85 text-xs sm:text-sm mt-2 leading-relaxed">
                    We welcome inquiries for overnight boutique stays, guided safaris, day-visitor passes, dining, and private gatherings.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0 mt-0.5">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-light-sage uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-white text-xs sm:text-sm font-bold mt-0.5">
                        {LODGE_FACTS.address}
                      </p>
                      <p className="text-white/80 text-[11px] mt-0.5">
                        Salima District, Central Region, Malawi
                      </p>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0 mt-0.5">
                      <FiPhone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-light-sage uppercase tracking-wider">
                        Call or WhatsApp
                      </p>
                      <a
                        href={`tel:${LODGE_FACTS.phone}`}
                        className="text-white hover:text-light-sage text-xs sm:text-sm font-bold mt-0.5 block transition-colors"
                      >
                        {LODGE_FACTS.phone}
                      </a>
                      <p className="text-white/80 text-[11px] mt-0.5">
                        Direct line to lodge reservations
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0 mt-0.5">
                      <FiClock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-light-sage uppercase tracking-wider">
                        Day Visitor Hours
                      </p>
                      <p className="text-white text-xs sm:text-sm font-bold mt-0.5">
                        {LODGE_FACTS.hours}
                      </p>
                      <p className="text-white/80 text-[11px] mt-0.5">
                        24/7 reception for overnight residents
                      </p>
                    </div>
                  </div>

                  {/* Entrance Fees */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-light-sage flex-shrink-0 mt-0.5">
                      <FiCheck size={18} />
                    </div>
                    <div className="w-full">
                      <p className="text-[10px] font-extrabold text-light-sage uppercase tracking-wider mb-2">
                        Entrance Fees (MWK)
                      </p>
                      <div className="rounded-xl overflow-hidden border border-white/15 text-[11px]">
                        <div className="grid grid-cols-3 bg-white/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white/50">
                          <span></span>
                          <span>Adult</span>
                          <span>Child</span>
                        </div>
                        <div className="grid grid-cols-3 px-3 py-2.5 border-t border-white/10">
                          <span className="font-bold text-white/85">Gate Entry</span>
                          <span className="font-extrabold text-light-sage">MK 10,000</span>
                          <span className="font-bold text-white/70">MK 5,000</span>
                        </div>
                        <div className="grid grid-cols-3 px-3 py-2.5 border-t border-white/10">
                          <span className="font-bold text-white/85">Game Drive</span>
                          <span className="font-extrabold text-light-sage">MK 40,000</span>
                          <span className="font-bold text-white/70">MK 20,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/15 mt-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-light-sage mb-2.5">
                  Connect on Social
                </p>
                <div className="flex gap-2.5">
                  <a
                    href="https://web.facebook.com/mkuyugameranch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-forest-green transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/mkuyu_game_lodge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-forest-green transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={16} />
                  </a>
                  <a
                    href={`https://wa.me/${LODGE_FACTS.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-forest-green transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Booking / Message Form (Symmetrical 2-Column Grid, No Badges, Not Crooked) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-9 flex flex-col justify-center">
              <div className="mb-5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14240E] tracking-tight">
                  Send us a message or booking request
                </h3>
                <p className="text-xs font-medium text-[#14240E]/75 mt-1">
                  Fill in your details below and our team will confirm availability promptly.
                </p>
              </div>

              {submitted ? (
                <div className="bg-forest-light border border-forest-green/30 rounded-2xl p-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <FiCheck size={24} />
                  </div>
                  <h4 className="text-lg font-extrabold text-[#14240E]">Thank you for your message</h4>
                  <p className="text-xs font-semibold text-[#14240E] max-w-md mx-auto leading-relaxed">
                    We have received your request. Our reservations team will review dates and contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        type: 'Accommodation Stay',
                        guests: '2 People',
                        date: '',
                        message: '',
                      })
                      setTouched({})
                      setErrors({})
                    }}
                    className="mt-3 px-6 py-2.5 bg-forest-green text-white text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-[#4A602B] transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Symmetrical 2-Column Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Row 1, Col 1: Full Name */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder="e.g. Chisomo Banda"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-[#14240E] text-xs font-medium focus:outline-hidden focus:ring-2 transition-all ${
                          touched.name && errors.name
                            ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                            : 'border-forest-green/20 bg-forest-light/60 focus:ring-forest-green focus:bg-white'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="text-[10px] font-bold text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Row 1, Col 2: Email Address */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="name@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-[#14240E] text-xs font-medium focus:outline-hidden focus:ring-2 transition-all ${
                          touched.email && errors.email
                            ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                            : 'border-forest-green/20 bg-forest-light/60 focus:ring-forest-green focus:bg-white'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p className="text-[10px] font-bold text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Row 2, Col 1: Phone / WhatsApp */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="+265 ..."
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-[#14240E] text-xs font-medium focus:outline-hidden focus:ring-2 transition-all ${
                          touched.phone && errors.phone
                            ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                            : 'border-forest-green/20 bg-forest-light/60 focus:ring-forest-green focus:bg-white'
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-[10px] font-bold text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Row 2, Col 2: Inquiry Type */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1.5">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => handleChange('type', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-forest-green/20 bg-forest-light/60 text-[#14240E] text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-forest-green focus:bg-white transition-all cursor-pointer"
                      >
                        <option>Accommodation Stay</option>
                        <option>Safari Game Drive</option>
                        <option>Day Visitor Pass</option>
                        <option>Restaurant &amp; Boma</option>
                        <option>Campsite Booking</option>
                        <option>Private Event</option>
                        <option>General Question</option>
                      </select>
                    </div>

                    {/* Row 3, Col 1: Guests */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1.5">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => handleChange('guests', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-forest-green/20 bg-forest-light/60 text-[#14240E] text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-forest-green focus:bg-white transition-all cursor-pointer"
                      >
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 - 4 People</option>
                        <option>5 - 8 People</option>
                        <option>Group (9+)</option>
                      </select>
                    </div>

                    {/* Row 3, Col 2: Preferred Date */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-forest-green/20 bg-forest-light/60 text-[#14240E] text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-forest-green focus:bg-white transition-all"
                      />
                    </div>

                    {/* Row 4: Message / Special Requests (Spans Both Columns, Expanded Input) */}
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1.5">
                        Message / Special Requests *
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        placeholder="Tell us about trip dates, preferred sanctuary, dietary requirements, or any questions for our ranger team..."
                        className={`w-full min-h-[120px] px-3.5 py-3 rounded-xl border text-[#14240E] text-xs font-medium focus:outline-hidden focus:ring-2 transition-all ${
                          touched.message && errors.message
                            ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                            : 'border-forest-green/20 bg-forest-light/60 focus:ring-forest-green focus:bg-white'
                        }`}
                      />
                      {touched.message && errors.message && (
                        <p className="text-[10px] font-bold text-red-600 mt-1">{errors.message}</p>
                      )}
                    </div>

                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-forest-green hover:bg-[#4A602B] text-white font-extrabold uppercase tracking-wider text-xs rounded-xl transition-all shadow-md hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <FiSend size={14} />
                      <span>Send Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Clean Full-Section Map (Fill Section, Direct Mkuyu Game Lodge Location Pin) */}
      <section className="w-full h-80 sm:h-96 relative bg-forest-light border-t border-forest-green/15">
        <iframe
          title="Mkuyu Game Lodge Location Map"
          src="https://maps.google.com/maps?q=Mkuyu%20Game%20Lodge,%20T358,%20Salima,%20Malawi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[10%] contrast-[1.05]"
        />
      </section>
    </PageShell>
  )
}
