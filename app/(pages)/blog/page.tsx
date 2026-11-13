'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiSend,
  FiCheck,
  FiBookOpen,
} from 'react-icons/fi'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import CtaSection from '@/app/components/ui/CtaSection'
import AnimatedCounter from '@/app/components/ui/AnimatedCounter'
import { BLOG_POSTS } from '@/app/lib/blog-data'

const categories = [
  'All Dispatches',
  'Wildlife & Tracking',
  'Conservation & Eco',
  'Safari Guides',
  'Bush Dining',
]

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState('All Dispatches')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filteredPosts =
    selectedCat === 'All Dispatches'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === selectedCat)

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0]

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
                Field Dispatches &amp; Stories
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14240E] tracking-tight">
                Dispatches from the Malawian Wild
              </h2>
            </div>
            <p className="text-[#14240E]/80 text-sm max-w-md font-normal leading-relaxed">
              Read insights from our FGASA-certified rangers, tracking notes, and conservation milestones across our 332.15 ha reserve.
            </p>
          </div>

          {/* Category Filter Buttons */}
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

      {/* Main Section: Articles + Refined White Newsletter on the Right */}
      <section className="py-20 bg-forest-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Posts Grid (Spans 8 columns) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Featured Lead Story — Direct Link to Dedicated Page */}
              {selectedCat === 'All Dispatches' && (
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-forest-green/15 group">
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="block relative h-72 sm:h-96 w-full overflow-hidden"
                  >
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
                  </Link>
                  <div className="p-8 sm:p-10 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-[#14240E]/70 font-semibold">
                      <span className="text-forest-green font-bold">{featuredPost.category}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14240E] tracking-tight leading-snug group-hover:text-forest-green transition-colors">
                      <Link href={`/blog/${featuredPost.id}`}>
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#14240E]/85 leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>
                    <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-forest-green/10">
                      <span className="text-xs font-bold text-forest-green">
                        By {featuredPost.author} ({featuredPost.authorRole})
                      </span>
                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.02]"
                      >
                        <FiBookOpen size={15} />
                        <span>Read Full Dispatch</span>
                        <FiArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid of Remaining Posts — Direct Links to Dedicated Pages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredPosts
                  .filter((p) => (selectedCat === 'All Dispatches' ? !p.featured : true))
                  .map((post) => (
                    <article
                      key={post.id}
                      id={post.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest-green/15 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
                    >
                      <div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="block relative h-48 w-full overflow-hidden"
                        >
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
                        </Link>
                        <div className="p-6 space-y-3">
                          <div className="flex items-center gap-3 text-[11px] text-[#14240E]/70 font-semibold">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h4 className="text-lg font-extrabold text-[#14240E] tracking-tight leading-snug group-hover:text-forest-green transition-colors">
                            <Link href={`/blog/${post.id}`}>
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-[#14240E]/80 leading-relaxed font-normal line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0 border-t border-forest-green/10 mt-4 flex items-center justify-between gap-3">
                        <span className="text-[11px] font-bold text-[#14240E]/70 line-clamp-1">
                          {post.author}
                        </span>
                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-xs hover:scale-[1.02]"
                        >
                          <FiBookOpen size={13} />
                          <span>Read</span>
                          <FiArrowRight size={12} />
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>
            </div>

            {/* Right Column: Refined White Newsletter Subscribe (Spans 4 columns) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* White, Refined, Less-Rounded Newsletter Container */}
              <div className="bg-white text-[#14240E] p-7 sm:p-8 rounded-2xl shadow-xl space-y-5 border border-forest-green/20 sticky top-28">
                <div>
                  <span className="inline-block text-forest-green text-[11px] font-extrabold tracking-widest uppercase border-b-2 border-forest-green pb-1 mb-2">
                    Bush Journal Dispatch
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#14240E] tracking-tight">
                    Subscribe to Mkuyu Field Notes
                  </h3>
                </div>
                
                <p className="text-xs text-[#14240E]/80 leading-relaxed font-normal">
                  Join our conservation community. Receive seasonal wildlife census numbers, ranger tracking stories, and exclusive sanctuary retreat offers directly to your inbox.
                </p>

                {subscribed ? (
                  <div className="p-4 rounded-xl bg-forest-light border border-forest-green/30 flex items-center gap-3 text-[#14240E] text-xs font-bold">
                    <FiCheck size={18} className="text-forest-green flex-shrink-0" />
                    <span>Welcome to our bush journal! We look forward to sharing stories with you.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#14240E] mb-1.5">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="ranger@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-forest-light/60 border border-forest-green/25 text-[#14240E] placeholder-[#14240E]/40 text-xs focus:outline-hidden focus:border-forest-green focus:bg-white transition-all font-medium"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01]"
                    >
                      <span>Subscribe to Dispatch</span>
                      <FiSend size={13} />
                    </button>
                    <p className="text-[10px] text-[#14240E]/60 text-center font-medium">
                      Delivered monthly. Strictly zero spam.
                    </p>
                  </form>
                )}

                {/* Quick Census Snapshot — Refined & Less Rounded */}
                <div className="pt-5 border-t border-forest-green/15 space-y-3">
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-forest-green">
                    Reserve Census Snapshot
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-forest-light border border-forest-green/15 text-center">
                      <p className="text-2xl font-extrabold text-[#14240E]">
                        <AnimatedCounter value={27} />
                      </p>
                      <p className="text-[10px] font-extrabold text-forest-green uppercase tracking-wider mt-0.5">Plains Zebras</p>
                    </div>
                    <div className="p-3 rounded-xl bg-forest-light border border-forest-green/15 text-center">
                      <p className="text-2xl font-extrabold text-[#14240E]">
                        <AnimatedCounter value={27} />
                      </p>
                      <p className="text-[10px] font-extrabold text-forest-green uppercase tracking-wider mt-0.5">Waterbuck</p>
                    </div>
                    <div className="p-3 rounded-xl bg-forest-light border border-forest-green/15 text-center">
                      <p className="text-2xl font-extrabold text-[#14240E]">
                        <AnimatedCounter value={21} />
                      </p>
                      <p className="text-[10px] font-extrabold text-forest-green uppercase tracking-wider mt-0.5">Nyala</p>
                    </div>
                    <div className="p-3 rounded-xl bg-forest-light border border-forest-green/15 text-center">
                      <p className="text-2xl font-extrabold text-[#14240E]">
                        <AnimatedCounter value={19} />
                      </p>
                      <p className="text-[10px] font-extrabold text-forest-green uppercase tracking-wider mt-0.5">Bushbuck</p>
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
