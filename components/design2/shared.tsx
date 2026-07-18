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

/** Encoded path to an asset extracted from the presentation. */
export const slideAsset = (name: string) => `/design2/${name}.jpg`;

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
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  imgClassName?: string;
  delay?: number;
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
          loading="lazy"
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
