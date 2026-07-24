'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { d2, d2Ease, d2Viewport } from './shared';

/** Step copy exactly as it appears in the presentation.
 *  Imagery from /public/Deck-images, matched by step name. */
const steps = [
  {
    title: 'Meet',
    description: 'New client meeting\nBrief understanding',
    image: '/Deck-images/Meet.jpeg',
    imageAlt: 'Design team collaborating around a conference table',
  },
  {
    title: 'Research',
    description: 'Brainstorming and\npreparation',
    image: '/Deck-images/Research.jpg',
    imageAlt: 'Designers reviewing wood samples and floor plans together',
  },
  {
    title: 'Concept',
    description: 'Overall ideas and style\ngeneration',
    image: '/Deck-images/Concept.png',
    imageAlt: 'Concept vignette with timber armchair and stone lantern',
  },
  {
    title: 'Design',
    description: 'Layout and\nstyle selection',
    image: '/Deck-images/Design.png',
    imageAlt: 'Curated textures, woven basket, and classical bust study',
  },
  {
    title: 'Finalize',
    description: 'Final design details and\npresentation',
    image: '/Deck-images/Finalize.avif',
    imageAlt: 'Furniture plan with floor layout and curated pieces',
  },
  {
    title: 'Create',
    description: 'Project execution\nwithin budget',
    image: '/Deck-images/Create.jpeg',
    imageAlt: 'On-site construction and installation of a luxury interior',
  },
  {
    title: 'Install',
    description: 'Installation and\nfinal touches',
    image: '/Deck-images/Install.jpg',
    imageAlt: 'Finished open-plan living space with kitchen and staircase',
  },
] as const;

const ease = d2Ease;

/**
 * How We Work — interactive luxury process journey.
 * Step titles, descriptions, and imagery are preserved.
 */
export function D2HowWeWork() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = steps[active] ?? steps[0];

  const progress = useMemo(
    () => (steps.length <= 1 ? 0 : active / (steps.length - 1)),
    [active],
  );

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="relative scroll-mt-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 15% 0%, rgba(156,111,78,0.16) 0%, transparent 55%),
          radial-gradient(ellipse 60% 45% at 90% 100%, rgba(0,0,0,0.28) 0%, transparent 50%),
          linear-gradient(165deg, #554839 0%, ${d2.band} 45%, #342E24 100%)
        `,
        color: d2.cream,
      }}
    >
      <div
        className="
          mx-auto w-full max-w-[1600px]
          px-6 py-[70px]
          md:px-12 md:py-[100px]
          lg:px-20 lg:py-[140px]
        "
      >
        {/* Top — title + process nav */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={d2Viewport}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5"
          >
            <h2
              id="how-we-work-heading"
              className="font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.75rem)]"
              style={{ color: d2.cream }}
            >
              How We Work
            </h2>
          </motion.div>

          <motion.nav
            aria-label="Process steps"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={d2Viewport}
            transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.1, ease }}
            className="lg:col-span-7"
          >
            <div className="relative hidden md:block">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-3 h-px bg-white/15"
              />
              <motion.div
                aria-hidden
                className="absolute left-0 top-3 h-px origin-left bg-[#9C6F4E]"
                style={{ width: '100%' }}
                initial={false}
                animate={{ scaleX: progress }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />
              <ol className="relative m-0 flex list-none justify-between gap-2 p-0">
                {steps.map((step, i) => {
                  const isActive = active === i;
                  return (
                    <li key={step.title} className="flex flex-1 flex-col items-center">
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        onClick={() => setActive(i)}
                        aria-current={isActive ? 'step' : undefined}
                        className={`
                          relative z-10 flex h-6 w-6 items-center justify-center rounded-full
                          border transition-all duration-500
                          ${
                            isActive
                              ? 'border-[#9C6F4E] bg-[#9C6F4E] text-[#FAF8F5] shadow-[0_0_20px_rgba(156,111,78,0.45)]'
                              : 'border-white/25 bg-[#4A4133] text-white/50 hover:border-[#9C6F4E]/60 hover:text-white/80'
                          }
                        `}
                      >
                        <span className="sr-only">
                          Step {String(i + 1).padStart(2, '0')}: {step.title}
                        </span>
                      </button>
                      <span
                        className={`
                          mt-3 font-body text-[10px] uppercase tracking-[0.2em]
                          transition-colors duration-500
                          ${isActive ? 'text-[#EDE9E0]' : 'text-white/40'}
                        `}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Mobile step chips */}
            <div className="flex gap-2 overflow-x-auto pb-1 md:hidden">
              {steps.map((step, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`
                      shrink-0 rounded-full border px-3.5 py-2
                      font-body text-[10px] uppercase tracking-[0.16em]
                      transition-all duration-300
                      ${
                        isActive
                          ? 'border-[#9C6F4E] bg-[#9C6F4E]/20 text-[#EDE9E0]'
                          : 'border-white/15 text-white/45'
                      }
                    `}
                  >
                    {String(i + 1).padStart(2, '0')} · {step.title}
                  </button>
                );
              })}
            </div>
          </motion.nav>
        </div>

        {/* Immersive image */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={d2Viewport}
          transition={{ duration: 0.85, delay: reduceMotion ? 0 : 0.12, ease }}
          className="
            relative mt-10 overflow-hidden
            rounded-[20px] md:mt-12 md:rounded-3xl
            border border-white/10
            shadow-[0_28px_60px_-20px_rgba(0,0,0,0.55)]
            lg:mt-14
          "
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/10] lg:aspect-[2.4/1]">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={current.image + current.title}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' }}
              >
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  quality={92}
                  sizes="100vw"
                  className="object-cover"
                  priority={active === 0}
                />
              </motion.div>
            </AnimatePresence>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
            />
          </div>
        </motion.div>

        {/* Process cards / timeline */}
        <ol
          className="
            m-0 mt-10 grid list-none grid-cols-1 gap-4 p-0
            sm:mt-12 sm:grid-cols-2 sm:gap-5
            lg:mt-14 lg:grid-cols-7 lg:gap-3 xl:gap-4
          "
        >
          {steps.map((step, i) => {
            const isActive = active === i;
            const number = String(i + 1).padStart(2, '0');

            return (
              <motion.li
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={d2Viewport}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : 0.06 + i * 0.05,
                  ease,
                }}
              >
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-current={isActive ? 'step' : undefined}
                  className={`
                    group relative flex h-full w-full flex-col
                    rounded-[18px] border px-4 py-5 text-left
                    transition-all duration-500 ease-out
                    md:rounded-[20px] md:px-3 md:py-6 lg:px-3.5
                    ${
                      isActive
                        ? 'border-[#9C6F4E]/45 bg-white/[0.08] shadow-[0_18px_40px_-20px_rgba(0,0,0,0.5)] -translate-y-0.5'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
                    }
                    motion-reduce:transform-none
                  `}
                >
                  <span
                    className={`
                      font-body text-[11px] font-light tracking-[0.14em]
                      transition-colors duration-500
                      ${isActive ? 'text-[#9C6F4E]' : 'text-white/35'}
                    `}
                  >
                    {number}
                  </span>
                  <h3
                    className={`
                      mt-3 font-display text-[18px] font-medium leading-tight
                      transition-colors duration-500
                      md:text-[17px] lg:text-[16px] xl:text-[18px]
                      ${isActive ? 'text-[#EDE9E0]' : 'text-white/75'}
                    `}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`
                      mt-3 whitespace-pre-line font-body text-[13px] font-normal leading-[1.65]
                      transition-all duration-500
                      ${
                        isActive
                          ? 'max-h-40 text-[rgba(237,233,224,0.92)] opacity-100'
                          : 'max-h-24 text-white/45 opacity-80 lg:max-h-20'
                      }
                    `}
                  >
                    {step.description}
                  </p>

                  <span
                    aria-hidden
                    className={`
                      mt-4 block h-px origin-left bg-[#9C6F4E]
                      transition-transform duration-500
                      ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    `}
                  />
                </button>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
