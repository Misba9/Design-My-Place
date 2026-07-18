'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/testimonials';
import { D1Label, Reveal, d1, d1Ease } from './shared';

export function D1Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section style={{ background: d1.bg, color: d1.brown }}>
      <div className="mx-auto max-w-[100rem] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <D1Label>Client Voices</D1Label>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-24 lg:grid-cols-12">
          {/* Oversized quotation mark */}
          <Reveal className="lg:col-span-2">
            <span
              aria-hidden
              className="font-display text-[7rem] leading-none lg:text-[10rem]"
              style={{ color: d1.stone }}
            >
              &ldquo;
            </span>
          </Reveal>

          <div className="lg:col-span-9 lg:col-start-4">
            <div className="min-h-[16rem] sm:min-h-[14rem]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.8, ease: d1Ease }}
                >
                  <p className="font-display font-light italic leading-[1.4] text-[clamp(1.5rem,2.8vw,2.75rem)]">
                    {current.quote}
                  </p>
                  <footer className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-2">
                    <cite
                      className="font-body text-[12px] font-medium not-italic uppercase tracking-[0.3em]"
                    >
                      {current.name}
                    </cite>
                    <span
                      className="font-body text-[11px] uppercase tracking-[0.25em]"
                      style={{ color: d1.taupe }}
                    >
                      {current.project} — {current.location}
                    </span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Minimal pagination */}
            <div className="mt-16 flex items-center gap-6">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  className="group flex h-8 items-center"
                >
                  <span
                    className="block h-px transition-all duration-500"
                    style={{
                      width: i === index ? '3.5rem' : '1.5rem',
                      background: i === index ? d1.gold : d1.line,
                    }}
                  />
                </button>
              ))}
              <span
                className="ml-2 font-body text-[10px] tracking-[0.3em]"
                style={{ color: d1.taupe }}
              >
                {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
