'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTripadvisor, FaYoutube } from 'react-icons/fa'
import { LODGE_FACTS } from '@/app/lib/content'

const exploreLinks = [
  { label: 'The Reserve', href: '/reserve' },
  { label: 'Stay & Dine', href: '/accommodation' },
  { label: 'Activities', href: '/activities' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
]

const planLinks = [
  { label: 'Book a Sanctuary', href: '/contact' },
  { label: 'Day Safari Visits', href: '/contact?type=day-visit' },
  { label: 'Campsite', href: '/accommodation#campsite' },
  { label: 'Bush Dining & Boma', href: '/accommodation#dining' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-[#14240E] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* About Column (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <Image
              src="/logos/logo-white.png"
              alt="Mkuyu Game Lodge"
              height={64}
              width={200}
              className="h-14 w-auto object-contain mb-3"
            />
            <p className="text-sm font-semibold text-white leading-relaxed">
              Where the Malawian bush meets considered hospitality.
            </p>
            <p className="text-xs text-white/80 leading-relaxed max-w-sm">
              Mkuyu Game Lodge is an exclusive 100% off-grid eco-sanctuary set across 332.15 hectares of protected wilderness in Salima District. Featuring five boutique sanctuaries, guided safari drives, panoramic watchtower lookouts, and community-led conservation.
            </p>
            
            {/* Social channels */}
            <div className="pt-2">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-light-sage mb-3">
                Follow & Connect
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={`https://wa.me/${LODGE_FACTS.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-forest-green hover:scale-105 transition-all"
                >
                  <FaWhatsapp size={16} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-forest-green hover:scale-105 transition-all"
                >
                  <FaFacebook size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-forest-green hover:scale-105 transition-all"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="https://tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TripAdvisor"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-forest-green hover:scale-105 transition-all"
                >
                  <FaTripadvisor size={16} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-forest-green hover:scale-105 transition-all"
                >
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Explore Links (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold tracking-widest uppercase text-light-sage mb-4 pb-1 border-b border-white/20 inline-block">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-white/85 hover:text-light-sage transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan Your Visit (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold tracking-widest uppercase text-light-sage mb-4 pb-1 border-b border-white/20 inline-block">
              Plan Your Visit
            </h3>
            <ul className="space-y-3">
              {planLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-white/85 hover:text-light-sage transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscribe to the Right (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-extrabold tracking-widest uppercase text-light-sage pb-1 border-b border-white/20 inline-block">
              Newsletter
            </h3>
            <p className="text-xs text-white/85 leading-relaxed">
              Subscribe to receive seasonal wildlife sightings, bird migration logs, and exclusive sanctuary offers from the Malawian bush.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-forest-green/40 border border-forest-green flex items-center gap-3 text-white text-xs font-bold">
                <FiCheck size={18} className="text-light-sage flex-shrink-0" />
                <span>Thank you for subscribing to our bush dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-hidden focus:border-light-sage"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <span>Subscribe</span>
                    <FiSend size={13} />
                  </button>
                </div>
                <p className="text-[10px] text-white/60">
                  Strictly zero spam. Unsubscribe anytime with one click.
                </p>
              </form>
            )}

            {/* Direct Contact snippet */}
            <div className="pt-2 flex flex-col gap-1 text-[11px] text-white/70">
              <p>T358, Salima District, Central Malawi</p>
              <p>{LODGE_FACTS.phone} • {LODGE_FACTS.hours}</p>
            </div>
          </div>

        </div>

        {/* Bottom bar with Privacy & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/70">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2025 Mkuyu Game Lodge. Salima, Malawi. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-3 text-white/80">
              <Link href="/terms" className="hover:text-light-sage transition-colors underline">
                Terms &amp; Conditions
              </Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-light-sage transition-colors underline">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-light-sage font-semibold uppercase tracking-wider">
            <span>332.15 Hectares Reserve</span>
            <span>•</span>
            <span>100% Off-Grid Solar</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
