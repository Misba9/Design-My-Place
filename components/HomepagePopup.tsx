'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MessageCircle, Send, Loader2, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS } from '@/lib/site';
import { useWeb3Form } from '@/hooks/useWeb3Form';
import { trackEvent, trackWhatsAppClick } from '@/lib/analytics';

export function HomepagePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { submitForm } = useWeb3Form({ subject: 'Homepage Consultation Popup Inquiry — Design My Place' });
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if dismissed in this session or recently
    const dismissed = sessionStorage.getItem('dmp_popup_dismissed');
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      trackEvent('get_in_touch_click', { source: 'homepage_popup_open' });
    }, 5000); // 5 seconds trigger

    return () => clearTimeout(timer);
  }, []);

  // Handle ESC key to dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('dmp_popup_dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await submitForm(new FormData(e.currentTarget));

    setIsSubmitting(false);
    if (result.success) {
      setIsSubmitted(true);
      trackEvent('lead_form_submit', { source: 'homepage_popup' });
      sessionStorage.setItem('dmp_popup_dismissed', 'true');
    } else {
      setErrorMessage(result.message);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-[#141414] p-6 sm:p-8 shadow-2xl shadow-black/90 text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label="Close dialog"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9C6F4E]/20 text-[#C4A07A]">
                <Sparkles size={13} />
              </span>
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C4A07A]">
                Complimentary Consultation
              </span>
            </div>

            <h3
              id="popup-title"
              className="font-display text-2xl sm:text-3xl font-light tracking-[-0.01em] text-white leading-tight"
            >
              Start your bespoke{' '}
              <span className="italic text-[#C4A07A]">interior journey</span>
            </h3>

            <p className="mt-2 text-xs sm:text-sm font-light text-white/70 leading-relaxed">
              Share your vision with our principal designers. Complete luxury interior solutions for homes & villas above ₹25 Lakhs.
            </p>

            {isSubmitted ? (
              <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-6 text-center">
                <CheckCircle size={36} className="mx-auto text-emerald-400 mb-2" />
                <h4 className="font-display text-lg text-white">Thank You!</h4>
                <p className="mt-1 text-xs text-white/70">
                  Our design lead will get in touch with you shortly to schedule your consultation.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-4 inline-block rounded-sm bg-[#B08D57] px-6 py-2 text-xs font-semibold text-white uppercase tracking-wider hover:bg-[#C7AB80] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div>
                  <label htmlFor="popup-name" className="sr-only">Your Name</label>
                  <input
                    id="popup-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name *"
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#C4A07A] focus:outline-none focus:ring-1 focus:ring-[#C4A07A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="popup-phone" className="sr-only">Phone Number</label>
                    <input
                      id="popup-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#C4A07A] focus:outline-none focus:ring-1 focus:ring-[#C4A07A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-city" className="sr-only">City</label>
                    <select
                      id="popup-city"
                      name="city"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-white/15 bg-[#1a1a1a] px-3.5 py-3 text-sm text-white focus:border-[#C4A07A] focus:outline-none focus:ring-1 focus:ring-[#C4A07A]"
                    >
                      <option value="" disabled>Select City *</option>
                      <option value="Bangalore">Bangalore (Bengaluru)</option>
                      <option value="Delhi">Delhi NCR (Delhi)</option>
                      <option value="Gurgaon">Gurgaon (Gurugram)</option>
                      <option value="Noida">Noida / Greater Noida</option>
                      <option value="Ghaziabad">Ghaziabad</option>
                      <option value="Faridabad">Faridabad</option>
                      <option value="Other">Other Indian City</option>
                    </select>
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-xs text-rose-400">{errorMessage}</p>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-[#B08D57] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-[#C7AB80] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Book Free Consultation</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </div>

                {/* Instant WhatsApp Alternative */}
                <div className="pt-2 text-center">
                  <a
                    href={`${BUSINESS.social.whatsapp}?text=Hi%20Design%20My%20Place%2C%20I%20would%20like%20to%20book%20a%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackWhatsAppClick('popup_instant_chat');
                      handleClose();
                    }}
                    className="inline-flex items-center gap-2 text-xs text-[#25D366] hover:underline"
                  >
                    <MessageCircle size={14} />
                    <span>Or chat directly on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
