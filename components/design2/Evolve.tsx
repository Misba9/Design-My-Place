'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ABOUT_QUOTE_IMAGE } from '@/lib/images';
import { d2Ease, d2Viewport } from './shared';

/**
 * Slide 6 — "As we evolve, our homes should too."
 * Full-width grey interior with the two-line centered overlay:
 * serif first line, light sans second line.
 */
export function D2Evolve() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden">
      <Image
        src={ABOUT_QUOTE_IMAGE}
        alt="Grey minimal living room with arch and modular seating"
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20" />

      <blockquote className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 1.1, ease: d2Ease }}
          className="font-display font-normal leading-[1.05] text-[#EFECE5] text-[clamp(2.5rem,6.5vw,5.75rem)] [text-shadow:0_2px_30px_rgba(0,0,0,0.25)]"
        >
          As we evolve, our
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 1.1, delay: 0.18, ease: d2Ease }}
          className="font-body font-light leading-[1.08] text-[#EFECE5] text-[clamp(2.5rem,6.5vw,5.75rem)] [text-shadow:0_2px_30px_rgba(0,0,0,0.25)]"
        >
          homes should too.
        </motion.p>
      </blockquote>
    </section>
  );
}
