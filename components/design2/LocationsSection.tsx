'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { locations } from '@/lib/locations';
import { d2Ease, d2Viewport, d2PageBg } from './shared';

const ease = d2Ease;

export function D2LocationsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="relative scroll-mt-20 overflow-hidden text-[#3F3930]"
      style={{ background: d2PageBg }}
    >
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-5 py-14
          sm:px-8 sm:py-18
          md:px-12 md:py-24
          lg:px-16 lg:py-28
        "
      >
        {/* Header Intro */}
        <div className="mx-auto max-w-2xl lg:max-w-3xl text-center">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={d2Viewport}
            transition={{ duration: 0.5, ease }}
            className="font-body text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#9C6F4E]"
          >
            Where We Create
          </motion.p>

          <motion.h2
            id="locations-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={d2Viewport}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.06, ease }}
            className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-light leading-[1.15] tracking-[-0.01em] text-[#3F3930] text-balance"
          >
            Luxury interior design across{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              key Indian cities
            </span>
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={d2Viewport}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.12, ease }}
            className="mt-4 font-body text-xs sm:text-sm md:text-base text-[#55503F] max-w-2xl mx-auto leading-relaxed"
          >
            Headquartered in Bengaluru with a major design practice in Delhi NCR, we deliver bespoke residential and villa interiors with end-to-end turnkey project management.
          </motion.p>
        </div>

        {/* 6 City Cards Grid */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {locations.map((loc, i) => {
            const isBangalore = loc.slug === 'bangalore';

            return (
              <motion.div
                key={loc.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={d2Viewport}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : i * 0.07,
                  ease,
                }}
                className={`group relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 ${
                  isBangalore
                    ? 'border-[#9C6F4E]/40 bg-white shadow-[0_12px_36px_-10px_rgba(156,111,78,0.2)]'
                    : 'border-[rgba(63,57,48,0.1)] bg-white/60 hover:border-[#9C6F4E]/35 hover:shadow-[0_16px_36px_-12px_rgba(63,57,48,0.12)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-[#9C6F4E]" />
                      <span className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9C6F4E]">
                        {loc.region}
                      </span>
                    </div>

                    {isBangalore && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#9C6F4E]/10 px-2.5 py-0.5 font-body text-[9px] font-semibold uppercase tracking-[0.1em] text-[#9C6F4E]">
                        <Sparkles size={10} /> Flagship Studio
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-normal leading-snug text-[#3F3930] group-hover:text-[#8A6144] transition-colors">
                    <Link href={`/locations/${loc.slug}/`} className="focus:outline-none">
                      {loc.name}
                    </Link>
                  </h3>

                  <p className="mt-3 font-body text-xs sm:text-sm font-light leading-relaxed text-[#55503F] line-clamp-3">
                    {loc.intro}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[rgba(63,57,48,0.08)]">
                    <p className="font-body text-[11px] text-[#55503F]/80 mb-2 font-medium">
                      Key Neighbourhoods:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.areasServed.slice(0, 4).map((area) => (
                        <span
                          key={area}
                          className="inline-block rounded-md bg-[#FAF8F5] border border-[rgba(63,57,48,0.08)] px-2 py-0.5 text-[10px] text-[#55503F]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(63,57,48,0.08)] flex items-center justify-between">
                  <Link
                    href={`/locations/${loc.slug}/`}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-[#9C6F4E] transition-colors group-hover:text-[#8A6144]"
                    aria-label={`View luxury interior design in ${loc.name}`}
                  >
                    <span>Explore {loc.name} Studio</span>
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <span className="font-body text-[10px] text-[#55503F]/50">
                    Turnkey
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
