import type { Metadata } from 'next'
import PageShell from '@/app/components/layout/PageShell'
import PageHero from '@/app/components/ui/PageHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Mkuyu Game Lodge',
  description: 'Terms and conditions for sanctuary stays, guided game drives, day visits, and conservation rules at Mkuyu Game Lodge, Salima, Malawi.',
}

export default function TermsPage() {
  return (
    <PageShell transparentNav={true}>
      <PageHero
        title="Terms & Conditions"
        subtitle="Reservation guidelines, sanctuary policies, and wilderness conservation safety rules"
        image="/images/lodge-03.jpg"
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
                Guest Terms &amp; Conditions
              </h1>
              <p className="text-xs text-[#14240E]/70 mt-2 font-medium">
                Last updated: November 2025 • Applicable to all sanctuary stays, day visits, and guided activities.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                1. Sanctuary Reservations &amp; Confirmations
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                Mkuyu Game Lodge operates five intimate boutique en-suite sanctuaries accommodating a maximum of 12 guests. All overnight accommodations, scheduled game drives, and private gatherings require prior reservation. Bookings are confirmed upon receipt of confirmation from our reservations desk.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                2. Day Visitor Hours &amp; Access Privileges
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                Day guests are welcomed daily between <strong>08:30 and 18:30</strong>. Day passes grant access to scheduled morning or dusk 4x4 safari drives (subject to vehicle seat availability), our forest swimming pool, the thatched bar and restaurant, and the 360° landmark watchtower. All vehicles must enter and register at our landmark green-roof gate on route T358.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                3. Wildlife &amp; Reserve Safety Regulations
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                Mkuyu is an authentic 332.15-hectare protected conservation sanctuary home to 145 free-roaming resident animals including Plains Zebras, Waterbucks, Nyalas, and Ostriches. For your safety and the welfare of wildlife:
              </p>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-[#14240E]/85 space-y-1.5 font-normal">
                <li>Never feed, approach, or harass any animal on foot or from safari vehicles.</li>
                <li>All walking trails beyond designated camp lawns must be accompanied by certified FGASA guides.</li>
                <li>Children under 12 must be supervised by an adult at all times, including near the swimming pool and playground.</li>
                <li>Drones, unauthorized laser devices, and excessive noise that disturbs wildlife or other guests are strictly prohibited.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                4. Off-Grid Living &amp; Eco-Preservation
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                Our property is 100% off-grid, generating clean solar power and utilizing 100% reed-bed greywater recycling. Guests are encouraged to assist our conservation efforts by conserving energy and water during their stay.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                5. Cancellations &amp; Rescheduling
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                Due to our intimate boutique capacity (maximum 12 overnight guests), cancellations significantly impact our conservation operations:
              </p>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-[#14240E]/85 space-y-1.5 font-normal">
                <li>Cancellations made 14 days or more prior to arrival receive a full date-credit or refund minus bank handling fees.</li>
                <li>Cancellations within 7 to 13 days of arrival are eligible for date rescheduling within 6 months.</li>
                <li>Cancellations within 7 days or no-shows are subject to full cancellation charges.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#14240E]">
                6. Contact &amp; Inquiries
              </h2>
              <p className="text-xs sm:text-sm text-[#14240E]/85 leading-relaxed font-normal">
                For questions regarding booking conditions, private group buyouts, or safari schedules, please reach our management team directly at <a href="tel:+265996210391" className="text-forest-green font-bold underline">+265 996 210 391</a> or via our <Link href="/contact" className="text-forest-green font-bold underline">Contact Page</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  )
}

