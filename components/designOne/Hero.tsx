'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  HERO_IMAGE,
  LIFE_77_IMAGES,
  NVT_IMAGES,
  PASTEL_PENTHOUSE_IMAGES,
  SVASA_IMAGES,
} from '@/lib/images';
import { D1_NAV_OFFSET } from './Nav';
import { d1, d1Ease, LetterReveal } from './shared';

const SLIDE_DURATION_MS = 6000;

const slides = [
  {
    src: HERO_IMAGE,
    alt: 'Luxury residential interior by Design My Place, Bangalore',
    caption: 'Bespoke Residential Interiors',
  },
  {
    src: SVASA_IMAGES.hero,
    alt: 'Svasa Homes — warm contemporary 6 BHK residence in Bangalore',
    caption: 'Svasa Homes — Bangalore',
  },
  {
    src: NVT_IMAGES.family,
    alt: 'NVT Symphony of Orchards — nature-inspired family living space',
    caption: 'NVT Symphony of Orchards',
  },
  {
    src: LIFE_77_IMAGES.hero,
    alt: '77 Life — Art Deco-inspired luxury villa in Mumbai',
    caption: '77 Life — Mumbai',
  },
  {
    src: PASTEL_PENTHOUSE_IMAGES.hero,
    alt: 'Pastel Penthouse — marble and pastel-toned penthouse interior',
    caption: 'Pastel Penthouse',
  },
];

export function D1Hero() {
  const ref = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Restarts on every slide change so a manual selection gets its full duration
  useEffect(() => {
    const timer = setTimeout(
      () => setSlide((s) => (s + 1) % slides.length),
      SLIDE_DURATION_MS,
    );
    return () => clearTimeout(timer);
  }, [slide]);

  return (
    <section ref={ref} className={`bg-[#0a0a0a] ${D1_NAV_OFFSET}`}>
      {/* Image and content begin below the fixed black navbar; hero fits the screen exactly */}
      <div className="relative flex h-[calc(100svh-72px)] min-h-[34rem] flex-col justify-end overflow-hidden lg:h-[calc(100svh-84px)]">
        {/* Backdrop — auto-sliding crossfade */}
        <motion.div style={{ y: imageY }} className="absolute inset-0 will-change-transform">
          <AnimatePresence>
            <motion.div
              key={slide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            >
              {/* Slow drift over the life of each slide — calm, cinematic */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: (SLIDE_DURATION_MS + 2000) / 1000, ease: 'linear' }}
              >
                <Image
                  src={slides[slide].src}
                  alt={slides[slide].alt}
                  fill
                  priority={slide === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {/* Scrim — strong enough to keep white type legible on bright slides */}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 mx-auto w-full max-w-[100rem] px-6 pb-8 pt-16 sm:px-10 sm:pb-10 lg:px-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: d1Ease }}
            className="mb-6 font-body text-[10px] font-medium uppercase tracking-[0.45em] text-white/90 [text-shadow:0_1px_18px_rgba(0,0,0,0.6)] sm:text-[11px]"
          >
            Minimal Interior Design Studio — Bangalore
          </motion.p>

          {/* Sized against both width and height so the hero always fits one screen */}
          <h1 className="font-display font-light leading-[0.94] tracking-[0.02em] text-white [text-shadow:0_2px_36px_rgba(0,0,0,0.55)]">
            <span className="block text-[min(15vw,13vh)] lg:text-[min(9.5vw,17vh)]">
              <LetterReveal text="DESIGN" delay={0.7} />
            </span>
            <span className="block text-[min(15vw,13vh)] lg:text-[min(9.5vw,17vh)]">
              <LetterReveal text="MY" delay={1.0} />
              <span className="inline-block w-[0.35em]" aria-hidden />
              <LetterReveal text="PLACE" delay={1.15} className="italic" />
            </span>
          </h1>

          <div className="mt-6 flex flex-col gap-6 border-t border-white/25 pt-6 sm:mt-8 sm:flex-row sm:items-end sm:justify-between sm:pt-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7, ease: d1Ease }}
              className="max-w-xs font-body text-sm font-light leading-[1.8] text-white/95 [text-shadow:0_1px_16px_rgba(0,0,0,0.6)]"
            >
              Luxury residential interiors — grounded in research, emotion, and
              timeless aesthetics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.85, ease: d1Ease }}
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-[3rem] items-center justify-center border border-white/60 bg-black/20 px-9 font-body text-[11px] font-medium uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-all duration-700 hover:border-white hover:bg-[#FAF8F3] hover:text-[#2B2620]"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="group inline-flex min-h-[3rem] items-center justify-center gap-3 px-2 font-body text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 [text-shadow:0_1px_14px_rgba(0,0,0,0.6)] transition-colors duration-500 hover:text-white"
              >
                View Portfolio
                <span
                  aria-hidden
                  className="block h-px w-10 bg-current transition-all duration-500 group-hover:w-16"
                />
              </Link>
            </motion.div>
          </div>

          {/* Slide caption + indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="mt-6 flex items-center justify-between gap-6 sm:mt-8"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={slide}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.6, ease: d1Ease }}
                className="font-body text-[10px] uppercase tracking-[0.3em] text-white/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]"
              >
                {slides[slide].caption}
              </motion.span>
            </AnimatePresence>

            <div className="flex items-center gap-3">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Show slide ${i + 1} — ${s.caption}`}
                  className="group flex h-8 items-center"
                >
                  <span className="relative block h-px w-8 overflow-hidden bg-white/25 sm:w-12">
                    {i === slide && (
                      <motion.span
                        key={`progress-${slide}`}
                        className="absolute inset-y-0 left-0 w-full origin-left"
                        style={{ background: d1.gold }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: SLIDE_DURATION_MS / 1000,
                          ease: 'linear',
                        }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="absolute bottom-0 right-6 z-10 hidden flex-col items-center gap-4 pb-6 sm:right-10 lg:right-16 lg:flex"
        >
          <span className="font-body text-[9px] uppercase tracking-[0.4em] text-white/60 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="relative h-16 w-px overflow-hidden bg-white/20">
            <motion.span
              className="absolute left-0 top-0 h-6 w-px bg-white/90"
              animate={{ y: ['-100%', '300%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
