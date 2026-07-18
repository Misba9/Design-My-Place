'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/process';
import { D1Label, LineReveal, Reveal, d1, d1Ease, d1Viewport } from './shared';

export function D1Process() {
  return (
    <section style={{ background: d1.bg, color: d1.brown }}>
      <div className="mx-auto max-w-[100rem] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <D1Label>How We Work</D1Label>

        <div className="mt-14 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display font-light leading-[1.04] text-[clamp(2.5rem,5vw,4.75rem)]">
            <LineReveal>A considered</LineReveal>
            <LineReveal delay={0.1}>
              <span className="italic" style={{ color: d1.gold }}>process</span>
            </LineReveal>
          </h2>
          <Reveal delay={0.3} className="max-w-xs lg:pb-3">
            <p
              className="font-body text-[13.5px] font-light leading-[2]"
              style={{ color: d1.taupe }}
            >
              Seven quiet, deliberate stages — from the first conversation to
              the final walkthrough of your home.
            </p>
          </Reveal>
        </div>

        {/* Horizontal timeline — scrolls sideways on smaller screens */}
        <div className="mt-20 lg:mt-28">
          <div className="scrollbar-hide -mx-6 overflow-x-auto px-6 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
            <ol className="flex min-w-max gap-0">
              {processSteps.map((step, i) => (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: d1Ease }}
                  className="relative w-[240px] shrink-0 pr-10 lg:w-[260px]"
                >
                  {/* Timeline line + node */}
                  <div className="relative mb-10 flex items-center">
                    <span
                      className="relative z-10 block h-2 w-2 rotate-45"
                      style={{ background: d1.gold }}
                    />
                    <motion.span
                      aria-hidden
                      className="absolute left-0 top-1/2 h-px w-full origin-left"
                      style={{ background: d1.line }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-10% 0px' }}
                      transition={{ duration: 1.2, delay: i * 0.1 + 0.2, ease: d1Ease }}
                    />
                  </div>

                  <span
                    className="font-body text-[11px] tracking-[0.25em]"
                    style={{ color: d1.gold }}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-light lg:text-3xl">
                    {step.title}
                  </h3>
                  <p
                    className="mt-4 max-w-[190px] font-body text-[12.5px] font-light leading-[1.9]"
                    style={{ color: d1.taupe }}
                  >
                    {step.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
          <Reveal y={10} delay={0.4} className="mt-10 lg:hidden">
            <span
              className="font-body text-[10px] uppercase tracking-[0.3em]"
              style={{ color: d1.taupe }}
            >
              Swipe to explore →
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
