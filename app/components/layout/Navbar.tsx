'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross2 } from 'react-icons/rx'
import { NAV_LINKS } from '@/app/lib/content'

interface NavbarProps {
  transparent?: boolean
}

export default function Navbar({ transparent = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname?.startsWith(href + '/')
  }

  useEffect(() => {
    if (!transparent) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [transparent])

  // If transparent prop is false, always behave as "scrolled" (solid white)
  const isSolid = !transparent || scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid ? 'bg-white shadow-md border-b border-green-950/5' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={isSolid ? '/logos/logo-horizontal.png' : '/logos/logo-horizontal-white.png'}
              alt="Mkuyu Game Lodge"
              height={56}
              width={240}
              className="h-11 md:h-12 w-auto object-contain transition-all"
              priority
            />
          </Link>

          {/* Desktop nav links with active select pill indicator */}
          <ul className="hidden lg:flex items-center gap-2 xl:gap-3">
            {NAV_LINKS.filter((l) => l.href !== '/contact').map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-xs font-bold tracking-wider uppercase transition-all px-4 py-2 rounded-full ${
                      active
                        ? isSolid
                          ? 'bg-forest-light text-forest-green border border-forest-green/25 font-extrabold shadow-sm'
                          : 'bg-white/20 text-white backdrop-blur-md border border-white/40 font-extrabold shadow-sm'
                        : isSolid
                        ? 'text-[#14240E] hover:text-forest-green hover:bg-forest-light/60'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA (Contact Us) + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-full bg-forest-green hover:bg-[#4A602B] text-white shadow-md shadow-green-950/20 transition-all hover:scale-105"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isSolid ? 'text-[#14240E] hover:bg-forest-light' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open menu"
            >
              <RxHamburgerMenu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-forest-deep flex flex-col text-white">
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logos/logo-horizontal-white.png"
                alt="Mkuyu Game Lodge"
                height={48}
                width={180}
                style={{ height: 44, width: 'auto' }}
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <RxCross2 size={26} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-3">
            {NAV_LINKS.filter((l) => l.href !== '/contact').map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl sm:text-3xl font-bold tracking-tight transition-all flex items-center justify-between py-3 px-4 rounded-xl ${
                    active
                      ? 'text-white bg-white/15 font-extrabold border border-white/20'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="h-2.5 w-2.5 rounded-full bg-light-sage shadow-xs" />}
                </Link>
              )
            })}
          </nav>

          <div className="px-8 pb-10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center px-6 py-4 bg-forest-green text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:bg-[#4A602B] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
