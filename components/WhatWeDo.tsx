'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Building2, Sparkles, Armchair } from 'lucide-react';
import { whatWeDo } from '@/lib/about';
import { PrimaryButton } from '@/components/PrimaryButton';

const serviceIcons = [Home, Building2, Sparkles, Armchair];

export function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <section
      id="what-we-do"
      ref={containerRef}
      aria-labelledby="what-we-do-heading-v1"
      className="relative scroll-mt-20 overflow-hidden text-[#3F3930]"
      style={{
        background: `
          radial-gradient(ellipse 60% 40% at 50% 10%, rgba(156,111,78,0.05) 0%, transparent 60%),
          linear-gradient(180deg, #FAF8F5 0%, #F5F1EB 50%, #FAF8F5 100%)
        `,
      }}
    >
      <div
        className="
          mx-auto w-full max-w-[1280px]
          px-5 py-12
          sm:px-8 sm:py-16
          md:px-12 md:py-20
          lg:px-16 lg:py-24
        "
      >
        {/* Centered Heading / Intro */}
        <div className="mx-auto max-w-2xl lg:max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#9C6F4E]"
          >
            {whatWeDo.label}
          </motion.p>

          <motion.h2
            id="what-we-do-heading-v1"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-light leading-[1.2] tracking-[-0.01em] text-[#3F3930] text-balance"
          >
            {whatWeDo.intro}
          </motion.h2>
        </div>

        {/* Vertical Service List */}
        <div className="mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 max-w-2xl md:max-w-3xl">
          <ul className="m-0 list-none p-0 space-y-7 sm:space-y-9 md:space-y-12 lg:space-y-14" role="list">
            {whatWeDo.items.map((item, i) => {
              const Icon = serviceIcons[i] ?? Home;

              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="group relative flex items-start gap-4 sm:gap-6 md:gap-8"
                >
                  {/* Left: Line Icon */}
                  <div
                    className="
                      flex shrink-0 items-center justify-center pt-0.5 sm:pt-1 text-[#9C6F4E]
                      transition-colors duration-300 group-hover:text-[#8A6144]
                    "
                  >
                    <Icon
                      strokeWidth={1.35}
                      className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Right: Service Name & Description */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-normal leading-snug text-[#3F3930] sm:text-xl md:text-2xl lg:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 sm:mt-1.5 font-body text-xs font-light leading-relaxed text-[#55503F] sm:text-sm md:text-base lg:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Centered CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 flex justify-center sm:mt-12 md:mt-16 lg:mt-20"
        >
          <PrimaryButton href="/services">
            EXPLORE OUR SERVICES
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
