'use client'

import { MatrixRain } from '@/components/MatrixRain'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="relative bg-black min-h-screen">
      <MatrixRain />
      <Navigation />
      <div className="relative z-10 pt-20 sm:pt-24 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-white/60 text-sm mb-8 sm:mb-12">Last updated: April 16, 2026</p>

          <div className="space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Introduction</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                INSURVAS ("we," "us," or "our") operates the website <span className="text-[#638b4b]">insurvas.com</span>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, request services from us, or opt in to receive SMS or other communications from us.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Information We Collect</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-white/80 text-sm sm:text-base leading-relaxed space-y-2 ml-4">
                <li>Fill out a contact form or case review form on our website</li>
                <li>Provide a mobile number and opt in to receive SMS messages</li>
                <li>Subscribe to our communications</li>
                <li>Communicate with us through our website or by text message</li>
              </ul>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-4 mb-3">
                The types of personal information we may collect include:
              </p>
              <ul className="list-disc list-inside text-white/80 text-sm sm:text-base leading-relaxed space-y-2 ml-4">
                <li><strong className="text-white">Contact Information:</strong> First name, last name, email address, and mobile phone number</li>
                <li><strong className="text-white">Case Information:</strong> Details about your insurance matter, including coverage type, location, and description</li>
                <li><strong className="text-white">SMS Consent and Preference Data:</strong> Records of your consent to receive text messages, including checkbox selections, timestamps, policy versions, IP address, page URL, and user agent</li>
                <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, collected automatically through cookies and analytics tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">How We Use Your Information</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-white/80 text-sm sm:text-base leading-relaxed space-y-2 ml-4">
                <li>To respond to your inquiries and provide case review services</li>
                <li>To review your request and, when appropriate and requested by you, help facilitate contact with an independent insurance professional or agency</li>
                <li>To send SMS messages you have specifically opted in to receive, including appointment reminders, notifications, and other service-related updates</li>
                <li>To improve our website, services, and user experience</li>
                <li>To maintain consent records and satisfy legal, carrier, and compliance requirements</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">SMS/Text Messaging Policy</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                If you opt in to receive SMS text messages from INSURVAS:
              </p>
              <ul className="list-disc list-inside text-white/80 text-sm sm:text-base leading-relaxed space-y-2 ml-4">
                <li>Message types may include appointment reminders, notifications, and other service-related updates</li>
                <li>Message frequency varies</li>
                <li>Message and data rates may apply</li>
                <li>You may opt out at any time by replying <strong className="text-white">STOP</strong> to any text message</li>
                <li>Reply <strong className="text-white">HELP</strong> to any text message for support, or use the contact options available on our website</li>
                <li>Consent to receive SMS is not a condition of purchase or service</li>
              </ul>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-4">
                Submitting a case review or contact request does not, by itself, enroll you in SMS. We send text messages only after you provide your mobile number and affirmatively check the SMS consent box displayed with the required disclosures.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Data Sharing and Third Parties</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                We do not share, sell, rent, or trade your personal information, including mobile numbers or SMS opt-in data, with third parties or affiliates for their marketing or promotional purposes.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                We may share your information only in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside text-white/80 text-sm sm:text-base leading-relaxed space-y-2 ml-4">
                <li><strong className="text-white">Requested Service Fulfillment:</strong> With an independent insurance professional or agency only when you have asked us to help facilitate a case review or similar requested service</li>
                <li><strong className="text-white">Service Providers:</strong> With trusted service providers who assist in operating our website and services (such as hosting, analytics, form processing, and messaging delivery), each bound by appropriate confidentiality and data-protection obligations</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or governmental regulation</li>
              </ul>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-4">
                Text messaging originator opt-in data and consent will not be shared with any third parties except vendors, platforms, and carriers that help us deliver the messaging services you requested.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Cookies and Analytics</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Our website uses cookies and similar technologies, including Google Analytics, to analyze website traffic and improve your experience. These tools may collect information such as your IP address, browser type, pages visited, and time spent on the site. This data is collected in aggregate and does not personally identify you. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Data Security</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Data Retention</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, or as required by law. SMS consent records are retained for the duration of your subscription and for a reasonable period after you opt out, as needed for legal, carrier, and compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Your Rights</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-white/80 text-sm sm:text-base leading-relaxed space-y-2 ml-4">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt out of SMS communications at any time by replying STOP</li>
                <li>The right to withdraw consent for data processing</li>
              </ul>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Children's Privacy</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Changes to This Privacy Policy</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#638b4b] mb-3 sm:mb-4">Contact Us</h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-white/80 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-white">INSURVAS</p>
                <p>Website: <span className="text-[#638b4b]">insurvas.com</span></p>
                <p>SMS Support: Reply <strong className="text-white">HELP</strong> to any message sent through our SMS program.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}