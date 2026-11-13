import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  FiArrowLeft,
  FiClock,
  FiCalendar,
  FiUser,
  FiCheck,
} from 'react-icons/fi'
import PageShell from '@/app/components/layout/PageShell'
import CtaSection from '@/app/components/ui/CtaSection'
import { BLOG_POSTS } from '@/app/lib/blog-data'
import SocialShareBar from './SocialShareBar'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = BLOG_POSTS.find((p) => p.id === id)
  if (!post) {
    return { title: 'Dispatch Not Found — Mkuyu Game Lodge' }
  }

  return {
    title: `${post.title} — Mkuyu Field Notes`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params
  const post = BLOG_POSTS.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <PageShell>
      {/* Article Header — Left Aligned, Clean */}
      <section className="relative pt-32 pb-12 bg-[#14240E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-light-sage hover:text-white transition-colors mb-6"
          >
            <FiArrowLeft size={16} />
            <span>Back to Bush Journal</span>
          </Link>

          <div className="space-y-4 max-w-4xl text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-left">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 pt-3 text-xs text-white/80 border-t border-white/15">
              <span className="inline-flex items-center gap-2">
                <FiUser className="text-light-sage" />
                <strong className="text-white">{post.author}</strong> ({post.authorRole})
              </span>
              <span className="inline-flex items-center gap-2">
                <FiCalendar className="text-light-sage" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <FiClock className="text-light-sage" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Article Layout: Sticky Author & Socials on LEFT, Content on RIGHT */}
      <section className="py-14 bg-forest-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Sticky Author Bio & Social Sharing */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Sticky Author Card */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-forest-green/20 shadow-md text-left space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-forest-green text-white flex items-center justify-center font-extrabold text-xl shadow-md flex-shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-forest-green">
                      Written By
                    </p>
                    <h3 className="text-lg font-extrabold text-[#14240E]">
                      {post.author}
                    </h3>
                    <p className="text-xs text-[#14240E]/75 font-semibold">
                      {post.authorRole}
                    </p>
                  </div>
                </div>
                <div className="pt-2 border-t border-forest-green/10 text-xs text-[#14240E]/80 leading-relaxed">
                  Mkuyu Game Reserve Ranger &amp; Conservation Team • FGASA Certified Guiding Standards, Central Malawi.
                </div>
              </div>

              {/* Sticky Share to Socials Client Component */}
              <SocialShareBar title={post.title} id={post.id} />

              {/* Quick Inquiry Box */}
              <div className="bg-[#14240E] text-white p-6 rounded-2xl border border-white/10 shadow-md space-y-3">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-light-sage">
                  Experience It Live
                </p>
                <h4 className="text-base font-extrabold text-white">
                  Join Our Next Guided Safari
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Morning Buck Pursuit &amp; Dusk Expeditions scheduled daily across our 332.15 ha reserve.
                </p>
                <Link
                  href={`/contact?subject=Inquiry+Regarding+${encodeURIComponent(post.title)}`}
                  className="inline-flex items-center justify-center w-full py-3 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  Inquire With Rangers
                </Link>
              </div>

            </aside>

            {/* RIGHT COLUMN: Full Article Content */}
            <article className="lg:col-span-8 space-y-8 text-left">
              
              {/* Featured Cover Image */}
              <div className="relative h-72 sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-forest-green/20">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover"
                />
              </div>

              {/* Intro Narrative */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-forest-green/15 shadow-sm text-left">
                <p className="text-base sm:text-lg text-[#14240E] font-medium leading-relaxed italic">
                  {post.content.intro}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {post.content.sections.map((section, idx) => (
                  <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-forest-green/15 shadow-sm space-y-4 text-left">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#14240E] tracking-tight text-left">
                      {section.heading}
                    </h2>
                    <p className="text-sm sm:text-base text-[#14240E]/85 leading-relaxed font-normal text-left">
                      {section.body}
                    </p>
                    {section.quote && (
                      <blockquote className="border-l-4 border-forest-green pl-4 sm:pl-6 py-2 my-4 bg-forest-light/60 rounded-r-xl text-left">
                        <p className="text-xs sm:text-sm font-bold text-forest-green italic leading-relaxed">
                          &ldquo;{section.quote}&rdquo;
                        </p>
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>

              {/* Takeaways Box */}
              {post.content.takeaways && post.content.takeaways.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-forest-green/25 shadow-md space-y-4 text-left">
                  <h3 className="text-base font-extrabold uppercase tracking-wider text-forest-green text-left">
                    Key Ranger Takeaways
                  </h3>
                  <ul className="space-y-2.5">
                    {post.content.takeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-[#14240E]">
                        <div className="w-5 h-5 rounded-full bg-forest-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiCheck size={12} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bottom Back Button */}
              <div className="pt-4 text-left">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest-green hover:bg-[#4A602B] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.02]"
                >
                  <FiArrowLeft size={16} />
                  <span>Back to All Field Dispatches</span>
                </Link>
              </div>

            </article>

          </div>
        </div>
      </section>

      {/* Related Dispatches */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-forest-green/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="mb-8 text-left">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-forest-green">
                More From the Savanna
              </span>
              <h3 className="text-2xl font-extrabold text-[#14240E] tracking-tight mt-1 text-left">
                Related Field Dispatches
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {otherPosts.map((related) => (
                <article
                  key={related.id}
                  className="bg-forest-light rounded-2xl overflow-hidden border border-forest-green/15 shadow-sm hover:shadow-lg transition-all group text-left"
                >
                  <Link href={`/blog/${related.id}`} className="block relative h-48 w-full overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-6 space-y-2 text-left">
                    <span className="text-[10px] font-extrabold uppercase text-forest-green">
                      {related.category} • {related.readTime}
                    </span>
                    <h4 className="text-base font-extrabold text-[#14240E] group-hover:text-forest-green transition-colors line-clamp-2">
                      <Link href={`/blog/${related.id}`}>
                        {related.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-[#14240E]/75 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/blog/${related.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-green uppercase hover:text-[#4A602B]"
                      >
                        <span>Read dispatch</span>
                        <FiArrowLeft className="rotate-180" size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaSection
        title="Experience the stories in person"
        subtitle="Book a guided game drive with our certified FGASA trackers across 332.15 hectares of Malawian savanna."
        primaryText="Plan Your Safari"
        primaryHref="/contact"
        secondaryText="Explore Sanctuaries"
        secondaryHref="/accommodation"
      />
    </PageShell>
  )
}
