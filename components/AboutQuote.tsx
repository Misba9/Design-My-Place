'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { ContentImage } from '@/components/ContentImage';
import { aboutQuote } from '@/lib/about';
import { fadeUp, scaleIn, transitionSlow, viewportOnce } from '@/lib/motion';

export function AboutQuote() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, viewportOnce);
  const prefersReduced = useReducedMotion();

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        variants={scaleIn}
        initial={prefersReduced ? false : 'hidden'}
        animate={prefersReduced || isInView ? 'visible' : 'hidden'}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ContentImage
          src={aboutQuote.image}
          alt={aboutQuote.imageAlt}
          fill
          className="object-cover object-center scale-110 sm:scale-105"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </motion.div>

      <div className="relative z-10 flex w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[62vh] items-center justify-center aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] max-h-[85vh]">
        <div className="container-site w-full py-16 sm:py-20 md:py-24 text-center px-4">
          <motion.p
            variants={fadeUp}
            initial={prefersReduced ? false : 'hidden'}
            animate={prefersReduced || isInView ? 'visible' : 'hidden'}
            transition={{ ...transitionSlow, delay: 0.15 }}
            className="font-display text-fluid-h2 text-white leading-tight mb-1 sm:mb-2 overflow-visible"
          >
            {aboutQuote.line1}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial={prefersReduced ? false : 'hidden'}
            animate={prefersReduced || isInView ? 'visible' : 'hidden'}
            transition={{ ...transitionSlow, delay: 0.3 }}
            className="font-body text-fluid-h2 text-white font-light leading-tight tracking-wide overflow-visible"
          >
            {aboutQuote.line2}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
