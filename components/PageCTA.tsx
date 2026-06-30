'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type PageCTAProps = {
  title?: string;
  titleAccent?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function PageCTA({
  title = 'Ready to begin',
  titleAccent = 'your project?',
  description = 'Every great design starts with a conversation. Book a consultation and let us bring your vision to life.',
  buttonLabel = 'Book Consultation',
  buttonHref = '/contact',
}: PageCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="section-y bg-luxury-gray relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(176,141,87,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="relative container-site text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-fluid-h2 text-white mb-4 sm:mb-6 text-balance"
        >
          {title}{' '}
          <span className="italic font-light text-gradient-gold-inline">
            {titleAccent}
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-400 font-light mb-8 sm:mb-10 leading-relaxed text-fluid-body max-w-lg mx-auto"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href={buttonHref} className="btn-gold group w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <span>{buttonLabel}</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
