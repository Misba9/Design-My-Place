'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { whatWeDo } from '@/lib/about';
import { PrimaryButton } from '@/components/PrimaryButton';
import { d2Ease, d2Viewport, slideAsset } from './shared';

const previewImages = [
  {
    src: slideAsset('what-1'),
    alt: 'Warm wooden shelving and round table vignette',
  },
  {
    src: slideAsset('what-2'),
    alt: 'Cream side table with ceramic objects against ochre leather',
  },
  {
    src: slideAsset('what-3'),
    alt: 'Textured stone wall washed in soft daylight',
  },
  {
    src: slideAsset('what-4'),
    alt: 'Dark marble bath with warm timber lighting',
  },
] as const;

const ease = d2Ease;

/**
 * What We Do — interactive luxury services experience.
 * Titles, descriptions, and CTA destination are preserved.
 */
export function D2WhatWeDo() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);

  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="relative scroll-mt-20 overflow-hidden text-[#3F3930]"
      style={{
        background: `
          radial-gradient(ellipse 50% 40% at 10% 20%, rgba(156,111,78,0.06) 0%, transparent 55%),
          linear-gradient(180deg, #FAF8F5 0%, #F4F0EA 50%, #FAF8F5 100%)
        `,
      }}
    >
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-6 py-[70px]
          md:px-12 md:py-[100px]
          lg:px-20 lg:py-[140px]
        "
      >
        <div
          className="
            grid grid-cols-1 items-start gap-10
            md:gap-12
            lg:grid-cols-[minmax(0,35%)_minmax(0,65%)] lg:gap-14 xl:gap-20
          "
        >
          {/* Left — sticky title + preview image (desktop) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{ duration: 0.7, ease }}
            >
              <h2
                id="what-we-do-heading"
                className="font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.75rem)]"
              >
                What We Do
              </h2>
            </motion.div>

            {/* Desktop / tablet preview */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={d2Viewport}
              transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.12, ease }}
              className="relative mt-8 hidden overflow-hidden rounded-[18px] border border-[rgba(63,57,48,0.1)] shadow-[0_22px_50px_-22px_rgba(63,57,48,0.3)] md:mt-10 md:block md:rounded-[20px] lg:mt-12"
            >
              <div className="relative aspect-[4/5] w-full">
                <AnimatePresence mode="sync" initial={false}>
                  <motion.div
                    key={previewImages[active]?.src ?? active}
                    className="absolute inset-0"
                    initial={
                      reduceMotion ? false : { opacity: 0, scale: 1.04 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 1.02 }}
                    transition={{ duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' }}
                  >
                    <Image
                      src={previewImages[active]?.src ?? previewImages[0].src}
                      alt={previewImages[active]?.alt ?? previewImages[0].alt}
                      fill
                      quality={92}
                      sizes="(min-width: 1024px) 35vw, 60vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                />
              </div>
            </motion.div>
          </div>

          {/* Right — interactive service rows */}
          <div className="min-w-0">
            <ul className="m-0 list-none p-0" role="list">
              {whatWeDo.items.map((item, i) => {
                const isActive = active === i;
                const isOpen = mobileOpen === i;
                const number = String(i + 1).padStart(2, '0');
                const preview = previewImages[i] ?? previewImages[0];

                return (
                  <motion.li
                    key={item.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={d2Viewport}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : 0.08 + i * 0.08,
                      ease,
                    }}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="relative"
                  >
                    {/* Soft glow behind active row */}
                    <div
                      aria-hidden
                      className={`
                        pointer-events-none absolute inset-0 rounded-[18px]
                        bg-[rgba(156,111,78,0.06)] blur-xl
                        transition-opacity duration-500
                        ${isActive ? 'opacity-100' : 'opacity-0'}
                      `}
                    />

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => {
                        setActive(i);
                        setMobileOpen((prev) => (prev === i ? null : i));
                      }}
                      className={`
                        group relative w-full rounded-[18px] border border-transparent
                        px-3 py-7 text-left
                        transition-all duration-500 ease-out
                        sm:px-4 sm:py-8 md:rounded-[20px] md:py-9
                        lg:cursor-default
                        ${
                          isActive
                            ? 'border-[rgba(156,111,78,0.22)] bg-[rgba(255,255,255,0.55)] shadow-[0_16px_36px_-22px_rgba(63,57,48,0.28)]'
                            : 'hover:bg-[rgba(255,255,255,0.35)]'
                        }
                        motion-reduce:transition-none
                      `}
                    >
                      <div className="relative flex items-start gap-4 sm:gap-5">
                        <span
                          className={`
                            mt-1 shrink-0 font-body text-[12px] font-light tracking-[0.12em]
                            transition-colors duration-500
                            ${isActive ? 'text-[#9C6F4E]' : 'text-[#55503F]/45'}
                          `}
                        >
                          {number}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <p
                              className={`
                                font-display text-[18px] font-medium leading-[1.3] text-[#3F3930]
                                transition-all duration-500 ease-out
                                sm:text-[20px] lg:text-[22px]
                                ${isActive ? 'translate-x-1.5 text-[#9C6F4E]' : ''}
                                motion-reduce:transform-none
                              `}
                            >
                              {item.title.replace(' and ', '\u00A0and ')}
                            </p>

                            <span
                              aria-hidden
                              className={`
                                mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center
                                rounded-full border transition-all duration-500
                                md:hidden
                                ${
                                  isOpen
                                    ? 'border-[#9C6F4E]/40 bg-[#9C6F4E]/10 text-[#9C6F4E]'
                                    : 'border-[rgba(63,57,48,0.14)] text-[#9C6F4E]'
                                }
                              `}
                            >
                              <ChevronDown
                                size={16}
                                strokeWidth={1.5}
                                className={`transition-transform duration-500 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </span>

                            <span
                              aria-hidden
                              className={`
                                mt-0.5 hidden h-9 w-9 shrink-0 items-center justify-center
                                rounded-full border transition-all duration-500 md:inline-flex
                                ${
                                  isActive
                                    ? 'translate-x-1 border-[#9C6F4E]/40 bg-[#9C6F4E]/10 text-[#9C6F4E]'
                                    : 'border-[rgba(63,57,48,0.14)] text-[#9C6F4E]'
                                }
                                motion-reduce:transform-none
                              `}
                            >
                              <ArrowRight
                                size={16}
                                strokeWidth={1.5}
                                className={`transition-transform duration-500 ${
                                  isActive ? 'translate-x-0.5' : ''
                                }`}
                              />
                            </span>
                          </div>

                          {/* Desktop description — always on, emphasized when active */}
                          <p
                            className={`
                              mt-3 hidden max-w-xl font-body text-[14.5px] font-normal leading-[1.85]
                              transition-all duration-500 md:block
                              ${
                                isActive
                                  ? 'text-[#55503F] opacity-100'
                                  : 'text-[#55503F]/70 opacity-80'
                              }
                            `}
                          >
                            {item.description}
                          </p>

                          {/* Mobile accordion body */}
                          <AnimatePresence initial={false}>
                            {isOpen ? (
                              <motion.div
                                initial={
                                  reduceMotion
                                    ? false
                                    : { height: 0, opacity: 0 }
                                }
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={
                                  reduceMotion
                                    ? undefined
                                    : { height: 0, opacity: 0 }
                                }
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="overflow-hidden md:hidden"
                              >
                                <p className="mt-3 font-body text-[14px] font-normal leading-[1.8] text-[#55503F]">
                                  {item.description}
                                </p>
                                <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-[16px]">
                                  <Image
                                    src={preview.src}
                                    alt={preview.alt}
                                    fill
                                    quality={90}
                                    sizes="100vw"
                                    className="object-cover"
                                  />
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Divider grows on active */}
                      <span
                        aria-hidden
                        className="absolute inset-x-3 bottom-0 h-px overflow-hidden bg-[rgba(63,57,48,0.1)] sm:inset-x-4"
                      >
                        <span
                          className={`
                            block h-full origin-left bg-[#9C6F4E]/70
                            transition-transform duration-500 ease-out
                            ${isActive ? 'scale-x-100' : 'scale-x-0'}
                          `}
                        />
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : 0.35,
                ease,
              }}
              className="mt-10 md:mt-12 lg:mt-14"
            >
              <PrimaryButton href="/services">All Services</PrimaryButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
