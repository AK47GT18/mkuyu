'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiRefreshCw, FiHome, FiAlertTriangle } from 'react-icons/fi'

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Unhandled app error:', error)
  }, [error])

  return (
    <div className="relative min-h-screen bg-[#14240E] text-white flex flex-col justify-between overflow-hidden">
      {/* Background Photography with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tower-actual.jpg"
          alt="Landmark watchtower at night in Mkuyu"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14240E]/95 via-[#14240E]/85 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14240E] via-transparent to-black/50" />
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
          Wilderness Signal Interrupted
        </span>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 w-full my-auto text-left space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-300 text-xs font-extrabold uppercase tracking-widest">
          <FiAlertTriangle size={14} />
          <span>Error 500 • Bush Communication Glitch</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          A temporary disturbance on the reserve line
        </h1>

        <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal max-w-2xl">
          Our off-grid solar systems are operating smoothly, but an unexpected technical hiccup occurred while processing your request. Please try refreshing or return to camp.
        </p>

        {error.digest && (
          <p className="text-xs text-white/50 font-mono bg-white/5 inline-block px-3 py-1 rounded-lg border border-white/10">
            Reference code: {error.digest}
          </p>
        )}

        <div className="pt-4 flex flex-wrap items-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-xl hover:scale-105 cursor-pointer"
          >
            <FiRefreshCw size={15} />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all backdrop-blur-md border border-white/25"
          >
            <FiHome size={15} />
            <span>Return to Lodge Homepage</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-6 w-full text-center sm:text-left text-xs text-white/60 border-t border-white/10">
        <p>© 2025 Mkuyu Game Lodge. Salima, Malawi. 100% Off-Grid Conservation Sanctuary.</p>
      </footer>
    </div>
  )
}

