'use client'

import { MatrixRain } from '@/components/MatrixRain'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function TermsOfServicePage() {
  return (
    <main className="relative bg-black min-h-screen">
      <MatrixRain />
      <Navigation />
      <div className="relative z-10 pt-20 sm:pt-24 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Terms and Conditions</h1>
          <p className="text-white/60 text-sm mb-8 sm:mb-12">Last updated: April 16, 2026</p>

          <div className="space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Agreement to Terms</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                By accessing or using the website <span className="text-[#638b4b]">insurvas.com</span> ("the Site") operated by INSURVAS ("we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Site or our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Description of Services</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                INSURVAS is an all-in-one platform for insurance professionals. We provide tools and resources related to lead management, policy acquisition, customer retention, and agency operations.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                <strong className="text-white">Important Disclaimer:</strong> INSURVAS is not a law firm and does not provide legal advice. Any information on this website is for general educational purposes only and should not be construed as legal advice. No attorney-client relationship is formed by using this website or submitting a request.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">User Responsibilities</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                By using this Site, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-white/80 text-sm sm:text-base leading-relaxed space-y-2 ml-4">
                <li>You are at least 18 years of age</li>
                <li>The information you provide is accurate, complete, and current</li>
                <li>You will not use the Site for any unlawful or prohibited purpose</li>
                <li>You will not attempt to interfere with the proper functioning of the Site</li>
                <li>You will not submit false or misleading information through any form on the Site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">SMS/Text Messaging Terms</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                By opting in to receive SMS text messages from INSURVAS, you agree to the following messaging terms:
              </p>
              <ul className="list-disc list-inside text-white/80 text-sm sm:text-base leading-relaxed space-y-2 ml-4">
                <li>You consent to receive text messages from INSURVAS at the mobile phone number you provided, including messages sent via automated technology where permitted by law</li>
                <li>Message types may include appointment reminders, notifications, and other service-related updates</li>
                <li>Message frequency varies</li>
                <li>Message and data rates may apply</li>
                <li>Consent to receive SMS messages is <strong className="text-white">not</strong> a condition of purchase or receiving any services</li>
                <li>You may opt out at any time by replying <strong className="text-white">STOP</strong> to any message we send</li>
                <li>For assistance, reply <strong className="text-white">HELP</strong> to any message or visit <span className="text-[#638b4b]">insurvas.com</span></li>
                <li>We send SMS only after you separately consent through a form that clearly discloses the program terms</li>
              </ul>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-4">
                Your SMS consent applies only to messages from INSURVAS; it does not authorize unrelated third-party marketing texts. You understand that wireless carriers are not liable for delayed or undelivered messages.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Service Access</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                When you submit a service request, your information may be shared with independent insurance professionals or agencies for the purpose of evaluating your needs. Submitting a request does not guarantee service from any provider. Any service relationship is formed directly between you and the provider, subject to their own terms and agreements.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Submitting a request does not automatically enroll you in SMS messaging; text messaging requires separate opt-in consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Intellectual Property</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                All content on the Site, including text, graphics, logos, images, articles, and software, is the property of INSURVAS or its content providers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Limitation of Liability</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                To the fullest extent permitted by law, INSURVAS and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or services. This includes, without limitation, damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Disclaimer of Warranties</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                The Site and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees regarding the accuracy, completeness, or reliability of any content or information on the Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Third-Party Links</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                The Site may contain links to third-party websites or services that are not owned or controlled by INSURVAS. We are not responsible for the content, privacy policies, or practices of any third-party sites. Accessing third-party links is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Indemnification</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                You agree to indemnify and hold harmless INSURVAS, its affiliates, officers, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable attorney's fees) arising out of your use of the Site, violation of these Terms, or infringement of any rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Governing Law</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Changes to These Terms</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                We reserve the right to modify or replace these Terms and Conditions at any time. Changes will be posted on this page with a revised "Last updated" date. Your continued use of the Site after any changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Contact Us</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="text-white/80 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-white">INSURVAS</p>
                <p>Website: <span className="text-[#638b4b]">insurvas.com</span></p>
                <p>SMS Help: Reply <strong className="text-white">HELP</strong> to any text message from our SMS program.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}