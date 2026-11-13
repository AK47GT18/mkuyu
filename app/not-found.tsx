import Link from 'next/link'
import Image from 'next/image'
import { FiHome, FiCompass, FiPhone, FiArrowRight } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#14240E] text-white flex flex-col justify-between overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lodge-04.jpg"
          alt="Mist over the savanna at Mkuyu Game Lodge"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14240E]/95 via-[#14240E]/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14240E] via-transparent to-black/40" />
      </div>

      {/* Header Logo */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-8 w-full flex items-center justify-between">
        <Link href="/" className="inline-block">
          <Image
            src="/logos/logo-horizontal-white.png"
            alt="Mkuyu Game Lodge"
            width={180}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <span className="text-light-sage text-xs font-extrabold uppercase tracking-widest hidden sm:inline-block">
          332.15 Ha Conservation Reserve
        </span>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-light-sage text-xs font-extrabold uppercase tracking-widest">
              <span>Error 404 • Lost in the Bush</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              You&apos;ve wandered off the savanna trail
            </h1>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal max-w-xl">
              Even expert FGASA rangers take an unexpected turn now and then. The page or trail you are looking for does not exist or has moved deeper into the wilderness.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-xl hover:scale-105"
              >
                <FiHome size={16} />
                <span>Return to Lodge</span>
              </Link>
              <Link
                href="/activities"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all backdrop-blur-md border border-white/25"
              >
                <FiCompass size={16} />
                <span>Explore Safari Trails</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Card (Real Safari Photography) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-2xl space-y-4">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/lodge-21.jpg"
                  alt="Plains Zebras grazing on the ranch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#14240E]/90 text-light-sage text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                  Resident Plains Zebras
                </span>
              </div>
              <div className="p-2 space-y-3">
                <p className="text-xs text-white/80 leading-relaxed">
                  While you navigate back to camp, explore our 27 resident Plains Zebras or book a guided game drive with certified trackers.
                </p>
                <div className="pt-1 flex items-center justify-between text-xs font-bold text-light-sage">
                  <Link href="/accommodation" className="hover:underline flex items-center gap-1">
                    <span>Sanctuaries</span>
                    <FiArrowRight size={12} />
                  </Link>
                  <Link href="/contact" className="hover:underline flex items-center gap-1">
                    <span>Contact Team</span>
                    <FiArrowRight size={12} />
                  </Link>
                  <Link href="/gallery" className="hover:underline flex items-center gap-1">
                    <span>Gallery</span>
                    <FiArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-6 w-full text-center sm:text-left text-xs text-white/60 border-t border-white/10">
        <p>© 2025 Mkuyu Game Lodge. Salima, Malawi. 100% Off-Grid Conservation Sanctuary.</p>
      </footer>
    </div>
  )
}

