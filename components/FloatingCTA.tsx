'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS } from '@/lib/site';
import {
  trackConsultationClick,
  trackPhoneClick,
  trackWhatsAppClick,
} from '@/lib/analytics';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 lg:bottom-10 lg:right-10"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="flex flex-col gap-2"
              >
                <a
                  href={`tel:${BUSINESS.phone}`}
                  onClick={() => trackPhoneClick('floating_cta')}
                  className="flex items-center gap-3 glass border border-white/10 px-4 py-3 text-sm text-white hover:border-gold-400/40 transition-colors"
                  aria-label="Call Design My Place"
                >
                  <Phone size={16} className="text-gold-300" />
                  Call Us
                </a>
                <a
                  href={BUSINESS.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('floating_cta')}
                  className="flex items-center gap-3 glass border border-white/10 px-4 py-3 text-sm text-white hover:border-gold-400/40 transition-colors"
                  aria-label="WhatsApp Design My Place"
                >
                  <MessageCircle size={16} className="text-gold-300" />
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  onClick={() => trackConsultationClick('floating_cta')}
                  className="flex items-center gap-3 btn-gold text-[11px] py-3 px-4"
                >
                  <Calendar size={16} />
                  Book Consultation
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="btn-gold shadow-lg shadow-black/40 text-[11px] py-3 px-6"
            aria-expanded={expanded}
            aria-label={expanded ? 'Close contact options' : 'Open contact options'}
          >
            {expanded ? 'Close' : 'Get in Touch'}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
