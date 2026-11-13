import Image from 'next/image'
import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { LODGE_FACTS } from '@/app/lib/content'

const exploreLinks = [
  { label: 'The Reserve', href: '/reserve' },
  { label: 'Accommodation', href: '/accommodation' },
  { label: 'Activities', href: '/activities' },
  { label: 'Dining', href: '/dining' },
  { label: 'Gallery', href: '/gallery' },
]

const planLinks = [
  { label: 'Book a Stay', href: '/contact' },
  { label: 'Day Visits', href: '/contact' },
  { label: 'Campsite', href: '/accommodation#campsite' },
  { label: 'Private Events', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#14240E] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* About */}
          <div className="space-y-4">
            <Image
              src="/logos/logo-white.png"
              alt="Mkuyu Game Lodge"
              height={70}
              width={220}
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm font-medium text-white/90 leading-relaxed">
              Where the Malawian bush meets considered hospitality.
            </p>
            <p className="text-xs text-white/80 leading-relaxed">
              Mkuyu Game Lodge is a 100% off-grid eco-sanctuary set within 330 hectares of protected
              Malawian bush in Salima District. Five intimate sanctuaries, guided game drives, and a
              commitment to sustainable, community-led conservation.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <Link
                href="#"
                aria-label="Mkuyu Game Lodge on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-forest-green transition-colors"
              >
                <FaFacebook size={16} />
              </Link>
              <Link
                href="#"
                aria-label="Mkuyu Game Lodge on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-forest-green transition-colors"
              >
                <FaInstagram size={16} />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-light-sage mb-6">
              Explore
            </h3>
            <ul className="space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 hover:text-light-sage font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan Your Visit */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-light-sage mb-6">
              Plan Your Visit
            </h3>
            <ul className="space-y-3.5">
              {planLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 hover:text-light-sage font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-light-sage mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/90">
                <FiPhone className="mt-1 flex-shrink-0 text-light-sage" size={16} />
                <a href={`tel:${LODGE_FACTS.phone}`} className="hover:text-light-sage font-medium transition-colors">
                  {LODGE_FACTS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/90">
                <FiMail className="mt-1 flex-shrink-0 text-light-sage" size={16} />
                <a
                  href={`mailto:${LODGE_FACTS.email}`}
                  className="hover:text-light-sage font-medium transition-colors break-all"
                >
                  {LODGE_FACTS.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/90">
                <FiMapPin className="mt-1 flex-shrink-0 text-light-sage" size={16} />
                <span>{LODGE_FACTS.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/90">
                <FiClock className="mt-1 flex-shrink-0 text-light-sage" size={16} />
                <span>{LODGE_FACTS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <p>© 2025 Mkuyu Game Lodge. Salima, Malawi. All rights reserved.</p>
          <p className="text-light-sage font-medium">100% Solar-Powered Wildlife Sanctuary</p>
        </div>
      </div>
    </footer>
  )
}
