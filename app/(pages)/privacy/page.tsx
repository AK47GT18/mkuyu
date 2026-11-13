import type { Metadata } from 'next'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Mkuyu Game Lodge',
  description: 'Privacy policy and guest data handling at Mkuyu Game Lodge, Salima District, Malawi.',
}

export default function PrivacyPage() {
  return (
    <PageShell transparentNav={true}>
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect and respect your guest information and booking inquiries"
        image="/images/lodge-04.jpg"
        imageAlt="Mkuyu Game Lodge reserve morning view"
      />

      <section className="py-20 bg-forest-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-14 rounded-3xl shadow-sm border border-forest-green/15 space-y-10 text-left">
            
            <div className="border-b border-forest-green/15 pb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-forest-green">
                Mkuyu Game Lodge &amp; Conservation Reserve
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#14240E] tracking-tight mt-1">
                Privacy Policy
              </h1>
              <p className="text-xs text-[#14240E]/70 mt-2 font-medium">
                Effective: November 2025 • Salima District, Central Region, Malawi
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                1. Information We Collect
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                When you make an inquiry or reservation at Mkuyu Game Lodge via our website or direct communication channels, we collect the following information:
              </p>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-[#14240E]/85 space-y-1.5 font-normal">
                <li>Your name, email address, phone number, and WhatsApp contact details.</li>
                <li>Your preferred stay or visit dates, party size, and dietary requirements.</li>
                <li>Special requests relating to safari drives, walking trails, or celebration arrangements.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                2. How We Use Your Information
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                We strictly use your information to facilitate your booking and ensure an exceptional stay:
              </p>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-[#14240E]/85 space-y-1.5 font-normal">
                <li>Confirming sanctuary availability, safari game drive seating, and restaurant reservations.</li>
                <li>Providing pre-arrival directions, driving guidelines, and gate check-in registration.</li>
                <li>Delivering our seasonal conservation field notes and census updates (only if you opt-in to our dispatch newsletter).</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                3. Information Sharing &amp; Third Parties
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                We <strong>never sell, lease, or distribute</strong> your personal contact details to third-party marketing companies. Information is shared only with our operational safari guiding and hospitality team members directly involved in managing your stay.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                4. Data Security
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                Our reservation channels and online forms operate under secure HTTPS encryption. All guest records are handled with strict privacy protocols to ensure protection against unauthorized access.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                5. Your Rights &amp; Contact
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                You have the right to request a copy of your personal details, request corrections, or ask us to remove your email from our newsletter at any time. For privacy inquiries, please contact our lodge administration directly at <a href="tel:+265996210391" className="text-forest-green font-bold underline">+265 996 210 391</a> or through our <Link href="/contact" className="text-forest-green font-bold underline">Contact Page</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  )
}

