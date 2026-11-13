'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiClock, FiCalendar, FiUser, FiArrowRight, FiSend, FiCheck, FiSearch } from 'react-icons/fi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import CtaSection from '@/app/components/ui/CtaSection'

const categories = [
  'All Dispatches',
  'Wildlife & Tracking',
  'Conservation & Eco',
  'Safari Guides',
  'Bush Dining',
]

const blogPosts = [
  {
    id: 'plains-zebra-census',
    title: 'The Plains Zebra: 27 Resident Herds and Their Seasonal Grazing Across 332.15 Hectares',
    category: 'Wildlife & Tracking',
    date: 'November 2025',
    readTime: '5 min read',
    author: 'Head Ranger Chimwemwe',
    image: '/images/lodge-21.jpg',
    excerpt:
      'With their striking monochrome patterns against the golden Malawian grass, the 27 Plains Zebras of Mkuyu are our most photographed residents. Here is how our rangers track their morning movements across the open pans.',
    featured: true,
  },
  {
    id: 'art-of-tracking-fgasa',
    title: 'Mastering the Art of Tracking in Central Malawi with Certified FGASA Rangers',
    category: 'Wildlife & Tracking',
    date: 'October 2025',
    readTime: '4 min read',
    author: 'Mkuyu Ranger Team',
    image: '/images/lodge-42.jpg',
    excerpt:
      'From interpreting faint hoofprints in dry sand to reading the sudden alarm calls of guinea fowl, discover how ancient bush wisdom brings guests face-to-face with elusive wildlife.',
    featured: false,
  },
  {
    id: 'eco-beam-architecture',
    title: '100% Off-Grid Architecture: How Eco-Beam Technology & Solar Power Protect the Savanna',
    category: 'Conservation & Eco',
    date: 'September 2025',
    readTime: '6 min read',
    author: 'Conservation Desk',
    image: '/images/lodge-14.jpg',
    excerpt:
      'Handcrafted using sustainably sourced timber from neighbouring villages, our 5 boutique sanctuaries tread lightly upon the earth with standalone solar energy and 100% greywater recycling.',
    featured: false,
  },
  {
    id: 'sunset-watchtower-experience',
    title: 'Sunset from the Landmark Watchtower: An Amber View Over the Salima Savanna',
    category: 'Safari Guides',
    date: 'August 2025',
    readTime: '3 min read',
    author: 'Lodge Hospitality',
    image: '/images/lodge-37.jpg',
    excerpt:
      'Climb above the indigenous acacia canopy for unbroken 360-degree vistas. Why golden-hour on the watchtower has become the hallmark ritual of an authentic Mkuyu day trip.',
    featured: false,
  },
  {
    id: 'lake-malawi-day-trip-itinerary',
    title: 'Bush-to-Beach: The Ultimate Day Safari Itinerary from Lake Malawi & Senga Bay',
    category: 'Safari Guides',
    date: 'July 2025',
    readTime: '5 min read',
    author: 'Guest Relations',
    image: '/images/lodge-40.jpg',
    excerpt:
      'Just a 25-minute drive inland from Senga Bay’s sandy shores, Mkuyu offers the ideal combined bush getaway. Here is how to plan a morning game drive, poolside lunch, and sunset watchtower visit.',
    featured: false,
  },
  {
    id: 'boma-nights-malawian-braai',
    title: 'Boma Nights & Firepit Braai: Traditional Malawian Bush Dining Under the Stars',
    category: 'Bush Dining',
    date: 'June 2025',
    readTime: '4 min read',
    author: 'Chef Tiyanjane',
    image: '/images/lodge-29.jpg',
    excerpt:
      'When dusk falls over the reserve, the open-air boma fire comes alive with sizzling local braai, chilled Malawian Kuche Kuche beers, and timeless campfire storytelling.',
    featured: false,
  },
]

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState('All Dispatches')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filteredPosts =
    selectedCat === 'All Dispatches'
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCat)

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setSubscribed(true)
      setNewsletterEmail('')
    }
  }

  return (
    <PageShell transparentNav={true}>
      <PageHero
        title="Bush Journal & Notes"
        subtitle="Wildlife census updates, ranger tracking logs, and conservation dispatches from Central Malawi"
        image="/images/lodge-04.jpg"
        imageAlt="Mkuyu Game Lodge morning savanna landscape"
      />

      {/* Intro & Categories */}
      <section className="py-16 bg-white border-b border-forest-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-block text-forest-green text-xs font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-3">
                Field Dispatches & Stories
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
                Dispatches from the Malawian Wild
              </h2>
            </div>
            <p className="text-[#14240E]/80 text-sm max-w-md font-normal leading-relaxed">
              Insights from our FGASA-certified rangers, seasonal bird migrations, and conservation milestones across our 332.15 ha reserve.
            </p>
          </div>

          {/* Category Filter Pills (inspired by Terra Analytics & NavikX) */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCat === cat
                    ? 'bg-forest-green text-white shadow-md'
                    : 'bg-forest-light text-[#14240E] hover:bg-forest-mint border border-forest-green/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Section: Articles + Newsletter on the Right */}
      <section className="py-20 bg-forest-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Posts Grid (Spans 8 columns) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Featured Lead Story */}
              {selectedCat === 'All Dispatches' && (
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-forest-green/15 group">
                  <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-forest-green text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                      Featured Field Note
                    </div>
                  </div>
                  <div className="p-8 sm:p-10 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-[#14240E]/70 font-semibold">
                      <span className="text-forest-green font-bold">{featuredPost.category}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14240E] tracking-tight leading-snug group-hover:text-forest-green transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-sm text-[#14240E]/85 leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-forest-green">
                        By {featuredPost.author}
                      </span>
                      <Link
                        href={`/blog#${featuredPost.id}`}
                        className="inline-flex items-center gap-2 text-xs font-extrabold text-forest-green uppercase tracking-wider hover:text-[#4A602B]"
                      >
                        <span>Read Full Dispatch</span>
                        <FiArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid of Remaining Posts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredPosts
                  .filter((p) => (selectedCat === 'All Dispatches' ? !p.featured : true))
                  .map((post) => (
                    <article
                      key={post.id}
                      id={post.id}
                      className="bg-white rounded-3xl overflow-hidden shadow-md border border-forest-green/15 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
                    >
                      <div>
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 35vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-forest-green text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-6 space-y-3">
                          <div className="flex items-center gap-3 text-[11px] text-[#14240E]/70 font-semibold">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h4 className="text-lg font-extrabold text-[#14240E] tracking-tight leading-snug group-hover:text-forest-green transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-[#14240E]/80 leading-relaxed font-normal line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0 border-t border-forest-green/10 mt-4 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#14240E]/70">
                          {post.author}
                        </span>
                        <Link
                          href={`/contact?subject=Regarding+Post+${encodeURIComponent(post.title)}`}
                          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-forest-green hover:text-[#4A602B] uppercase tracking-wider"
                        >
                          <span>Inquire</span>
                          <FiArrowRight size={13} />
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>
            </div>

            {/* Right Column: Newsletter Subscribe + Quick Facts (Spans 4 columns) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Dedicated Newsletter Subscription Box to the Right */}
              <div className="bg-[#14240E] text-white p-8 rounded-3xl shadow-xl space-y-4 border border-white/10 sticky top-28">
                <span className="inline-block text-light-sage text-xs font-extrabold tracking-widest uppercase border-b border-light-sage pb-1">
                  Bush Journal Dispatch
                </span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Subscribe to Mkuyu Field Notes
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Join our conservation community. Receive seasonal wildlife census numbers, ranger tracking stories, and exclusive sanctuary retreat offers directly to your inbox.
                </p>

                {subscribed ? (
                  <div className="p-4 rounded-2xl bg-forest-green/50 border border-forest-green flex items-center gap-3 text-white text-xs font-bold">
                    <FiCheck size={18} className="text-light-sage flex-shrink-0" />
                    <span>Welcome to our bush journal! We look forward to sharing stories with you.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-light-sage mb-1.5">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="ranger@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-hidden focus:border-light-sage"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.02]"
                    >
                      <span>Subscribe to Dispatch</span>
                      <FiSend size={13} />
                    </button>
                    <p className="text-[10px] text-white/60 text-center">
                      Delivered monthly. Strictly zero spam.
                    </p>
                  </form>
                )}

                {/* Quick Census Snapshot */}
                <div className="pt-6 border-t border-white/15 space-y-3">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-light-sage">
                    Reserve Census Snapshot
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-lg font-extrabold text-light-sage">27</p>
                      <p className="text-[10px] text-white/80 uppercase">Plains Zebras</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-lg font-extrabold text-light-sage">27</p>
                      <p className="text-[10px] text-white/80 uppercase">Waterbuck</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-lg font-extrabold text-light-sage">21</p>
                      <p className="text-[10px] text-white/80 uppercase">Nyala</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-lg font-extrabold text-light-sage">19</p>
                      <p className="text-[10px] text-white/80 uppercase">Bushbuck</p>
                    </div>
                  </div>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <CtaSection
        title="Experience the stories in person"
        subtitle="Reserve a guided game drive with our certified FGASA trackers across 332.15 hectares of Malawian savanna."
        primaryText="Plan Your Safari"
        primaryHref="/contact"
        secondaryText="Explore Sanctuaries"
        secondaryHref="/accommodation"
      />
    </PageShell>
  )
}

