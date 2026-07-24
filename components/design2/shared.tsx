'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Design Two — tokens sampled directly from the company presentation */
/* ------------------------------------------------------------------ */

export const d2 = {
  /** Warm white slide background */
  bg: '#F0EDEB',
  /** Deep brown band used on Introduction / How We Work / Built to Belong */
  band: '#4A4133',
  /** Primary ink on light slides */
  ink: '#3F3930',
  /** Muted body copy — dark enough to stay readable at small sizes */
  body: '#55503F',
  /** Cream text on brown bands */
  cream: '#EDE9E0',
  /** Muted cream for band body copy */
  creamMuted: 'rgba(237,233,224,0.92)',
  /** Terracotta-gold serif accents (Hourly / roles / Fit-Out …) */
  gold: '#9C6F4E',
  /** Hairlines on light slides */
  line: 'rgba(63,57,48,0.18)',
} as const;

export const d2Ease = [0.22, 1, 0.36, 1] as const;
export const d2Viewport = { once: true, margin: '-12% 0px' } as const;

/** Canonical homepage section padding + width */
export const d2Section =
  'relative mx-auto w-full max-w-[1440px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]';

/** Wider band used on portfolio / atmospheric sections */
export const d2SectionWide =
  'relative mx-auto w-full max-w-[1600px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]';

/** Soft cream page background (matches About / Team / Contact deck) */
export const d2PageBg =
  'radial-gradient(ellipse 55% 45% at 92% 18%, rgba(156,111,78,0.07) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 8% 88%, rgba(63,57,48,0.04) 0%, transparent 50%), linear-gradient(180deg, #FAF8F5 0%, #F5F1EB 48%, #FAF8F5 100%)';

/** Deep brown band background */
export const d2BandBg =
  'radial-gradient(ellipse 70% 60% at 20% 20%, rgba(156,111,78,0.12) 0%, transparent 55%), linear-gradient(165deg, #554839 0%, #4A4133 42%, #3A3328 100%)';

/** Deck slide assets live in /public/Deck-images (some keep a .jpg.png suffix). */
const deckExt: Record<string, string> = {
  'belong-interior': 'jpg.png',
  'what-2': 'jpg.png',
  'what-3': 'jpg.png',
  'what-4': 'jpg.png',
};

/** Encoded path to an asset extracted from the presentation. */
export const slideAsset = (name: string) =>
  `/Deck-images/${encodeURIComponent(`${name}.${deckExt[name] ?? 'png'}`)}`;

/* ------------------------------------------------------------------ */
/*  Shared CTA button sizes — keep every home-section button identical */
/* ------------------------------------------------------------------ */

const d2BtnBase =
  'inline-flex items-center justify-center gap-2.5 min-h-12 px-8 font-body text-[11px] font-semibold uppercase tracking-[0.18em] rounded-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

/** @deprecated Prefer `<PrimaryButton />` for primary CTAs */
export const d2BtnPrimary =
  'group box-border inline-flex h-14 w-full max-w-[420px] items-center justify-between gap-4 rounded-[12px] border border-transparent bg-[#9C6F4E] px-12 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FAF8F5] shadow-[0_12px_28px_-12px_rgba(63,57,48,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8A6144] hover:shadow-[0_18px_36px_-14px_rgba(63,57,48,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E] sm:w-[320px] sm:min-w-[280px] sm:max-w-[340px]';

/** Outline CTA on light / cream sections */
export const d2BtnOutline = `${d2BtnBase} border border-[rgba(63,57,48,0.22)] bg-transparent text-[#3F3930] hover:border-[#9C6F4E]/50 hover:bg-[#9C6F4E] hover:text-[#FAF8F5] focus-visible:outline-[#9C6F4E]`;

/** Outline CTA on dark / image heroes */
export const d2BtnOnDark = `${d2BtnBase} border border-white/60 bg-black/20 text-white backdrop-blur-sm hover:border-white hover:bg-[#FAF8F3] hover:text-[#2B2620] focus-visible:outline-white`;

/** Text-link CTA paired with a primary button */
export const d2BtnText = `${d2BtnBase} border-transparent bg-transparent px-2 text-white/90 [text-shadow:0_1px_14px_rgba(0,0,0,0.6)] hover:text-white focus-visible:outline-white`;

/* ------------------------------------------------------------------ */
/*  LetterReveal — per-letter rise, for hero display type              */
/* ------------------------------------------------------------------ */

export function LetterReveal({
  text,
  className,
  delay = 0,
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <span
      className={`inline-block overflow-hidden align-bottom ${className ?? ''}`}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          className="inline-block will-change-transform"
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{
            duration: 1.1,
            delay: delay + i * stagger,
            ease: d2Ease,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal — subtle fade-up                                            */
/* ------------------------------------------------------------------ */

export function D2Reveal({
  children,
  className,
  delay = 0,
  y = 26,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={d2Viewport}
      transition={{ duration: 0.9, delay, ease: d2Ease }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Image reveal — quiet unveil, no zoom bounce                        */
/* ------------------------------------------------------------------ */

export function D2ImageReveal({
  src,
  alt,
  className,
  sizes = '100vw',
  imgClassName,
  delay = 0,
  quality = 90,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  imgClassName?: string;
  delay?: number;
  quality?: number;
  priority?: boolean;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ''}`}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={d2Viewport}
      transition={{ duration: 1.2, delay, ease: d2Ease }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={d2Viewport}
        transition={{ duration: 1.8, delay, ease: d2Ease }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className={`object-cover ${imgClassName ?? ''}`}
        />
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Display heading — the large light sans of the deck                 */
/* ------------------------------------------------------------------ */

export function D2Heading({
  index,
  children,
  light = false,
  className,
  align = 'left',
}: {
  index?: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
  align?: 'left' | 'center';
}) {
  return (
    <D2Reveal className={className}>
      <h2
        className={`font-body font-light leading-[1.05] tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,4.75rem)] ${
          align === 'center' ? 'text-center' : ''
        }`}
        style={{ color: light ? d2.cream : d2.ink }}
      >
        {index ? <span className="mr-4">{index}</span> : null}
        {children}
      </h2>
    </D2Reveal>
  );
}
