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
    setMobileOpen(false)
  }, [pathname])

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

          {/* Desktop nav links with active and hover underline indicator */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.filter((l) => l.href !== '/contact').map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative py-1 text-xs font-bold tracking-wider uppercase transition-colors inline-flex flex-col ${
                      isSolid
                        ? active
                          ? 'text-forest-green font-extrabold'
                          : 'text-[#14240E] hover:text-forest-green'
                        : active
                        ? 'text-white font-extrabold'
                        : 'text-white/85 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`h-[2px] w-full mt-0.5 rounded-full transition-all duration-200 ${
                        active
                          ? isSolid ? 'bg-forest-green opacity-100' : 'bg-white opacity-100'
                          : isSolid
                          ? 'bg-forest-green opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-left'
                          : 'bg-white opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-left'
                      }`}
                    />
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
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center ${
                isSolid
                  ? 'bg-forest-green text-white hover:bg-[#4A602B]'
                  : 'bg-white/20 text-white backdrop-blur-md border border-white/25 hover:bg-white/30'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <RxCross2 size={22} className="text-white" /> : <RxHamburgerMenu size={22} className="text-white" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown (White floating card anchored below the top navbar, not full screen) */}
      {mobileOpen && (
        <>
          {/* Subtle backdrop overlay (tapping outside dismisses the menu) */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Floating White Dropdown Menu */}
          <div className="fixed top-20 left-4 right-4 sm:left-6 sm:right-6 z-50 lg:hidden bg-white rounded-2xl shadow-2xl border border-stone-200/90 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="p-3 sm:p-5 flex flex-col gap-1">
              {NAV_LINKS.filter((l) => l.href !== '/contact').map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
                      active
                        ? 'bg-forest-light text-forest-green font-extrabold'
                        : 'text-stone-800 hover:text-forest-green hover:bg-stone-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-forest-green" />}
                  </Link>
                )
              })}

              <div className="pt-2 border-t border-stone-100 mt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-md transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
