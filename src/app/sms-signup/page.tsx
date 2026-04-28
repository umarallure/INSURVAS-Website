'use client'

import { useState } from 'react'
import { MatrixRain } from '@/components/MatrixRain'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Send } from 'lucide-react'

export default function SMSSignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    smsConsent: false,
    termsAccepted: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="relative bg-black min-h-screen">
      <MatrixRain />
      <Navigation />
      <div className="relative z-10 pt-20 sm:pt-24 pb-16 sm:pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-center">
            Stay Updated with INSURVAS
          </h1>
          <p className="text-white/80 text-sm sm:text-base text-center mb-8 sm:mb-12">
            Sign up to receive important updates and notifications via text message.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-white text-sm mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#638b4b]/50 transition-all text-sm sm:text-base"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#638b4b]/50 transition-all text-sm sm:text-base"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#638b4b]/50 transition-all text-sm sm:text-base"
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Mobile Phone (optional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#638b4b]/50 transition-all text-sm sm:text-base"
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>

              <div
                className="rounded-xl p-4 sm:p-5"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.smsConsent}
                    onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded accent-[#638b4b]"
                  />
                  <span className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    By checking this box, I agree to receive SMS messages from INSURVAS, including appointment reminders and notifications. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. Consent is not a condition of purchase.
                  </span>
                </label>
              </div>

              <div
                className="rounded-xl p-4 sm:p-5"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.termsAccepted}
                    onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded accent-[#638b4b]"
                  />
                  <span className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    I have reviewed and accept INSURVAS's{' '}
                    <a href="/terms-of-service" className="text-[#638b4b] hover:underline">Terms and Conditions</a>{' '}
                    and{' '}
                    <a href="/privacy-policy" className="text-[#638b4b] hover:underline">Privacy Policy</a>.
                  </span>
                </label>
              </div>

              <div
                className="rounded-xl p-4 sm:p-5"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  By submitting this form, I consent to receive calls and emails from INSURVAS using the contact information provided above. If I check the SMS box, I also agree to receive text messages from INSURVAS, including messages sent via automation. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. You may unsubscribe any time by reply STOP via text message or clicking the unsubscribe link via email. Reply HELP anytime for assistance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                  href="/privacy-policy"
                  className="text-[#638b4b] hover:underline text-sm sm:text-base"
                >
                  Privacy Policy
                </a>
                <span className="text-white/40 hidden sm:block">|</span>
                <a
                  href="/terms-of-service"
                  className="text-[#638b4b] hover:underline text-sm sm:text-base"
                >
                  Terms and Conditions
                </a>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-black transition-all hover:scale-[1.02] hover:shadow-lg text-sm sm:text-base"
                style={{
                  background: 'linear-gradient(135deg, #638b4b 0%, #3d6c31 100%)',
                  boxShadow: '0 0 30px rgba(99, 139, 75, 0.2)'
                }}
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Sign Up
              </button>
            </form>
          ) : (
            <div
              className="rounded-2xl p-8 sm:p-12 text-center"
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.06) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.20)',
                boxShadow: '0 18px 65px rgba(0, 0, 0, 0.40), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
                backdropFilter: 'blur(22px)',
                WebkitBackdropFilter: 'blur(22px)'
              }}
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                style={{
                  background: 'linear-gradient(135deg, #638b4b 0%, #3d6c31 100%)'
                }}
              >
                <Send className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Thank You!</h2>
              <p className="text-white/80 text-sm sm:text-base">
                You've successfully signed up to receive updates from INSURVAS.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}