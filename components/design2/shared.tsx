'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export {
  d2,
  d2Ease,
  d2Viewport,
  d2Section,
  d2SectionWide,
  d2PageBg,
  d2BandBg,
  slideAsset,
  d2BtnPrimary,
  d2BtnOutline,
  d2BtnOnDark,
  d2BtnText,
} from './tokens';

import { d2, d2Ease, d2Viewport } from './tokens';

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
