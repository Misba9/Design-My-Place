'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { trackGetInTouchClick } from '@/lib/analytics';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

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
          className="fixed z-40 bottom-6 right-6 lg:bottom-8 lg:right-8 safe-bottom safe-right"
        >
          <Link
            href="/contact/"
            onClick={() => trackGetInTouchClick('floating_cta')}
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#9C6F4E]/40 bg-[#9C6F4E] px-6 py-3.5 font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF8F5] shadow-[0_12px_32px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8A6144] hover:shadow-[0_16px_40px_rgba(0,0,0,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E] whitespace-nowrap"
            aria-label="Get in Touch with Design My Place"
          >
            <span>Get in Touch</span>
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
