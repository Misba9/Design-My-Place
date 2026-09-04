'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/site';
import { trackWhatsAppClick } from '@/lib/analytics';

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show a gentle one-time tooltip hint after 3s
    const timer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => setShowTooltip(false), 6000);
      return () => clearTimeout(hideTimer);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const whatsappUrl = `${BUSINESS.social.whatsapp}?text=Hi%20Design%20My%20Place%2C%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services.`;

  return (
    <div
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3.5 safe-bottom safe-left pointer-events-auto"
      style={{ isolation: 'isolate' }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('floating_button')}
        aria-label="Chat with Design My Place on WhatsApp"
        className="group relative flex h-16 w-16 sm:h-[70px] sm:w-[70px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-108 hover:shadow-[0_14px_36px_rgba(37,211,102,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        {/* Soft pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          style={{ animationDuration: '3s' }}
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <svg
          className="relative z-10 h-9 w-9 sm:h-10 sm:w-10 fill-white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Subtle floating tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex items-center rounded-xl border border-white/15 bg-[#161513] px-4 py-2.5 shadow-2xl"
          >
            <p className="font-body text-xs text-white/95 whitespace-nowrap">
              Chat on WhatsApp <span className="text-[#25D366] font-semibold">Online</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
