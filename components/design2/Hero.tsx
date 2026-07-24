'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  HERO_IMAGE,
  LIFE_77_IMAGES,
  NVT_IMAGES,
  PASTEL_PENTHOUSE_IMAGES,
  SVASA_IMAGES,
} from '@/lib/images';
import { PrimaryButton } from '@/components/PrimaryButton';
import { d2, d2Ease, LetterReveal } from './shared';

const SLIDE_DURATION_MS = 6000;

const trustStats = [
  { value: 25, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 12, suffix: '+', label: 'Cities Served' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
] as const;

/**
 * Homepage hero — cinematic full-viewport showcase with sliding imagery,
 * editorial type, CTAs, trust counters, and scroll cue.
 */
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

function HeroCountUp({
  value,
  suffix,
  delay = 0,
}: {
  value: number;
  suffix: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setCount(value);
      return;
    }

    let controls: { stop: () => void } | undefined;
    const timeout = window.setTimeout(() => {
      controls = animate(0, value, {
        duration: 1.6,
        ease: d2Ease,
        onUpdate: (latest) => setCount(Math.round(latest)),
      });
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeout);
      controls?.stop();
    };
  }, [delay, isInView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function D2Hero() {
  const ref = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['0%', '14%'],
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['0%', '18%'],
  );

  useEffect(() => {
    const timer = setTimeout(
      () => setSlide((s) => (s + 1) % slides.length),
      SLIDE_DURATION_MS,
    );
    return () => clearTimeout(timer);
  }, [slide]);

  return (
    <section
      ref={ref}
      aria-label="Design My Place — hero"
      className="relative min-h-[90svh] overflow-hidden bg-[#0a0a0a] lg:min-h-screen lg:h-svh"
    >
      {/* Full-bleed cinematic backdrop */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 will-change-transform"
      >
        <AnimatePresence>
          <motion.div
            key={slide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 1.6, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduceMotion ? false : { scale: 1.08 }}
              animate={{ scale: reduceMotion ? 1 : 1.14 }}
              transition={{
                duration: reduceMotion ? 0 : (SLIDE_DURATION_MS + 2500) / 1000,
                ease: 'linear',
              }}
            >
              <Image
                src={slides[slide].src}
                alt={slides[slide].alt}
                fill
                priority={slide === 0}
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Warm dark overlay — stronger on mobile for readability */}
        <div className="absolute inset-0 bg-black/45 sm:bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 20% 70%, rgba(156,111,78,0.22) 0%, transparent 60%)',
          }}
        />
      </motion.div>

      {/* Content — left editorial column, vertically centered */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto flex h-full min-h-[90svh] w-full max-w-[1440px] items-center px-6 pb-24 pt-28 sm:px-10 sm:pb-28 sm:pt-32 lg:min-h-screen lg:px-20 lg:pb-20 lg:pt-28"
      >
        <div className="grid w-full grid-cols-1 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left xl:col-span-5">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: d2Ease }}
              className="mb-5 font-body text-[10px] font-medium uppercase tracking-[0.35em] text-white/85 sm:mb-6 sm:text-[11px] sm:tracking-[0.4em]"
            >
              Minimal Interior Design Studio — Bangalore
            </motion.p>

            <h1 className="font-display font-light leading-[0.94] tracking-[0.02em] text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.45)]">
              <span className="block text-[clamp(2.75rem,11vw,5.5rem)] lg:text-[clamp(3.5rem,6.5vw,5.75rem)]">
                <LetterReveal text="DESIGN" delay={0.55} />
              </span>
              <span className="block text-[clamp(2.75rem,11vw,5.5rem)] lg:text-[clamp(3.5rem,6.5vw,5.75rem)]">
                <LetterReveal text="MY" delay={0.85} />
                <span className="inline-block w-[0.35em]" aria-hidden />
                <LetterReveal text="PLACE" delay={1.0} className="italic" />
              </span>
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 1.45, ease: d2Ease }}
              className="mt-7 max-w-md font-body text-[15px] font-light leading-[1.8] text-white/90 sm:mt-8 sm:text-base"
            >
              Luxury residential interiors — grounded in research, emotion, and
              timeless aesthetics.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.65, ease: d2Ease }}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:items-stretch sm:justify-center sm:gap-4 lg:justify-start"
            >
              <PrimaryButton href="/contact">Start Your Project</PrimaryButton>
              <Link
                href="/projects"
                className="group inline-flex h-14 w-full max-w-[420px] shrink-0 items-center justify-center gap-2.5 box-border rounded-[12px] border border-white/60 bg-black/20 px-12 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-[#FAF8F3] hover:text-[#2B2620] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-[320px] sm:min-w-[280px] sm:max-w-[340px]"
              >
                View Portfolio
                <ArrowRight
                  size={16}
                  strokeWidth={1.75}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1.9, ease: d2Ease }}
              className="mt-10 w-full max-w-lg border-t border-white/20 pt-7 sm:mt-12 sm:pt-8 lg:max-w-none"
            >
              <dl className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0">
                {trustStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center px-2 sm:items-start sm:px-4 lg:px-5 ${
                      i > 0 ? 'sm:border-l sm:border-white/15' : ''
                    }`}
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-body text-[1.65rem] font-light leading-none tracking-[-0.03em] text-white sm:text-[1.85rem]">
                      <HeroCountUp
                        value={stat.value}
                        suffix={stat.suffix}
                        delay={reduceMotion ? 0 : 2 + i * 0.08}
                      />
                    </dd>
                    <p className="mt-2 font-body text-[9px] font-medium uppercase tracking-[0.22em] text-white/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Slide caption + indicators */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.15 }}
              className="mt-8 flex w-full max-w-lg flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between lg:max-w-none"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={slide}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.55, ease: d2Ease }}
                  className="font-body text-[10px] uppercase tracking-[0.28em] text-white/70"
                >
                  {slides[slide].caption}
                </motion.span>
              </AnimatePresence>

              <div className="flex items-center gap-2.5" role="tablist" aria-label="Hero slides">
                {slides.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    role="tab"
                    aria-selected={i === slide}
                    onClick={() => setSlide(i)}
                    aria-label={`Show slide ${i + 1} — ${s.caption}`}
                    className="group flex h-8 items-center"
                  >
                    <span className="relative block h-px w-7 overflow-hidden bg-white/25 sm:w-9">
                      {i === slide && (
                        <motion.span
                          key={`progress-${slide}`}
                          className="absolute inset-y-0 left-0 w-full origin-left"
                          style={{ background: d2.gold }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: reduceMotion ? 0 : SLIDE_DURATION_MS / 1000,
                            ease: 'linear',
                          }}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator — bottom center */}
      <motion.a
        href="#about"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.3 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-white/55 transition-colors duration-300 hover:text-white/85 sm:bottom-8"
        aria-label="Scroll to explore"
      >
        <span className="font-body text-[9px] uppercase tracking-[0.35em]">
          Scroll to Explore
        </span>
        <span className="relative flex h-10 w-5 items-start justify-center rounded-full border border-white/30 pt-1.5">
          <motion.span
            className="block h-1.5 w-1 rounded-full bg-white/80"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, 10, 0], opacity: [1, 0.35, 1] }
            }
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  );
}
