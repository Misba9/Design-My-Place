'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { InstagramFeed } from '@/components/InstagramFeed';
import { BUSINESS } from '@/lib/site';

export function InstagramJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="follow-our-journey"
      ref={containerRef}
      className="relative section-y bg-luxury-gray overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] aspect-[2/1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(176,141,87,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-14 lg:mb-16 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label-uppercase text-gold-300 mb-4 sm:mb-6"
            >
              Follow Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-fluid-h2 text-white text-balance mb-4 sm:mb-5"
            >
              Follow Our Journey on{' '}
              <span className="italic font-light text-gradient-gold-inline">
                Instagram
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 font-light leading-relaxed text-sm sm:text-base"
            >
              See our latest interior projects, behind-the-scenes work, completed
              spaces, and design inspiration directly from Instagram.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="shrink-0"
          >
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold group w-full sm:w-auto"
            >
              <span>View Instagram</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="min-h-[12rem]"
        >
          <InstagramFeed />
        </motion.div>
      </div>
    </section>
  );
}
