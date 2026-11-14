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
  // Top nav bar activates (solid white) when scrolled, non-transparent, or when mobile menu is opened
  const isHeaderActive = isSolid || mobileOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isHeaderActive ? 'bg-white shadow-md border-b border-green-950/5' : 'bg-transparent'
        }`}
      >
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink min-w-0 flex items-center">
            <Image
              src={isHeaderActive ? '/logos/logo-horizontal.png' : '/logos/logo-horizontal-white.png'}
              alt="Mkuyu Game Lodge"
              height={44}
              width={180}
              className="h-8 sm:h-10 md:h-11 w-auto max-w-[140px] xs:max-w-[170px] sm:max-w-none object-contain transition-all"
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
                      isHeaderActive
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
                          ? isHeaderActive ? 'bg-forest-green opacity-100' : 'bg-white opacity-100'
                          : isHeaderActive
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
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-full bg-forest-green hover:bg-[#4A602B] text-white shadow-md shadow-green-950/20 transition-all hover:scale-105"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden flex-shrink-0 p-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center ${
                isHeaderActive
                  ? 'bg-forest-green text-white hover:bg-[#4A602B]'
                  : 'bg-white text-forest-green hover:bg-stone-100'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <RxCross2 size={24} className="text-white" />
              ) : (
                <RxHamburgerMenu
                  size={24}
                  className={isHeaderActive ? 'text-white' : 'text-forest-green'}
                />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu — directly attached under the active top nav bar (one unified piece, no shade) */}
        {mobileOpen && (
          <div className="lg:hidden w-full bg-white border-t border-stone-100 shadow-xl px-4 pt-2 pb-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1 w-full max-w-md mx-auto">
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
        )}
      </header>

      {/* Invisible backdrop click-listener to close when tapping outside — NO SHADE, completely transparent */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
