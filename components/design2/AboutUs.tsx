'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { aboutUsIntro } from '@/lib/about';
import { d2, d2Ease, d2Viewport, slideAsset } from './shared';

const ease = d2Ease;

/**
 * About Us — editorial luxury 50/50 layout.
 * Heading, paragraphs, and image are preserved exactly.
 */
export function D2AboutUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-20 overflow-hidden text-[#3F3930]"
      style={{
        background: `
          radial-gradient(ellipse 55% 45% at 92% 18%, rgba(156,111,78,0.07) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 8% 88%, rgba(63,57,48,0.04) 0%, transparent 50%),
          linear-gradient(180deg, #FAF8F5 0%, #F5F1EB 48%, #FAF8F5 100%)
        `,
      }}
    >
      {/* Soft geometric accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 hidden h-72 w-72 rounded-full border border-[rgba(156,111,78,0.12)] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 top-[28%] hidden h-48 w-48 rounded-full border border-[rgba(63,57,48,0.06)] lg:block"
      />

      <div
        className="
          relative mx-auto w-full max-w-[1440px]
          px-6 py-[70px]
          md:px-12 md:py-[100px]
          lg:px-20 lg:py-[140px]
        "
      >
        <div
          className="
            grid grid-cols-1 items-center
            gap-8
            md:gap-[50px]
            lg:grid-cols-12 lg:gap-x-16 xl:gap-x-20
          "
        >
          {/* Left — content (6 cols) */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{ duration: 0.6, ease }}
              className="mb-6 flex items-center gap-4 sm:mb-8"
            >
              <span
                aria-hidden
                className="h-px w-8 shrink-0 sm:w-10"
                style={{ background: d2.gold }}
              />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                {aboutUsIntro.label}
              </p>
            </motion.div>

            <motion.h2
              id="about-heading"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.08, ease }}
              className="max-w-xl font-body font-light leading-[1.08] tracking-[-0.02em] text-[clamp(2.25rem,4.2vw,3.5rem)]"
            >
              {aboutUsIntro.title}{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                {aboutUsIntro.titleAccent}
              </span>
            </motion.h2>

            <div className="mt-8 flex max-w-xl flex-col gap-6 sm:mt-10 sm:gap-7 lg:mt-12 lg:gap-8">
              {aboutUsIntro.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={d2Viewport}
                  transition={{
                    duration: 0.65,
                    delay: reduceMotion ? 0 : 0.16 + i * 0.1,
                    ease,
                  }}
                  className="font-body text-[15px] font-normal leading-[1.85] text-[#55503F] md:text-[15.5px] md:leading-[1.9]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right — larger editorial image (6 cols), slight overlap for depth */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={d2Viewport}
            transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.12, ease }}
            className="relative w-full lg:col-span-6 lg:translate-x-2 xl:translate-x-4"
          >
            {/* Floating gold frame */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute -inset-3 hidden rounded-[28px]
                border border-[rgba(156,111,78,0.28)]
                sm:-inset-4 sm:rounded-[32px]
                lg:block
              "
            />

            <div
              className="
                group relative overflow-hidden
                h-[320px] sm:h-[380px] md:h-[420px]
                lg:h-auto lg:aspect-[4/5] lg:min-h-[34rem] xl:min-h-[38rem]
                rounded-[20px] md:rounded-3xl
                border border-[rgba(63,57,48,0.08)]
                shadow-[0_28px_60px_-20px_rgba(63,57,48,0.35)]
              "
            >
              {/* Inner soft frame */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-3 z-10 rounded-[14px] border border-white/25 md:inset-4 md:rounded-[16px]"
              />
              <Image
                src={slideAsset('about')}
                alt="Snowdrop flowers by a warm window — quiet natural detail"
                fill
                quality={95}
                sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, (min-width: 768px) 70vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
