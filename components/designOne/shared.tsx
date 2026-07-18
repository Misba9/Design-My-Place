'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  type MotionStyle,
} from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Design One — editorial design tokens & motion primitives           */
/* ------------------------------------------------------------------ */

/** Slow, settling ease — nothing bouncy. */
export const d1Ease = [0.22, 1, 0.36, 1] as const;

export const d1 = {
  /** Soft white page ground */
  bg: '#FAF8F3',
  /** Warm beige panel */
  beige: '#F0EAE0',
  /** Stone */
  stone: '#DDD4C1',
  /** Taupe — muted supporting text */
  taupe: '#8A7D6B',
  /** Dark brown — primary ink */
  brown: '#2B2620',
  /** Charcoal — dark sections */
  charcoal: '#191612',
  /** Muted gold accent */
  gold: '#B08D57',
  /** Hairline */
  line: 'rgba(43, 38, 32, 0.14)',
} as const;

export const d1Viewport = { once: true, margin: '-15% 0px' } as const;

/* ------------------------------------------------------------------ */
/*  Reveal — fade + rise on scroll                                     */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  duration = 1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={d1Viewport}
      transition={{ duration, delay, ease: d1Ease }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  LineReveal — text masked and rising from behind a baseline         */
/* ------------------------------------------------------------------ */

export function LineReveal({
  children,
  className,
  delay = 0,
  as: Tag = 'span',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'span' | 'div';
}) {
  return (
    <Tag className={`block overflow-hidden ${className ?? ''}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: '110%' }}
        whileInView={{ y: '0%' }}
        viewport={d1Viewport}
        transition={{ duration: 1.1, delay, ease: d1Ease }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}

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
    <span className={`inline-block overflow-hidden align-bottom ${className ?? ''}`} aria-label={text}>
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
            ease: d1Ease,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  ImageReveal — curtain-mask unveil with a slow settle of scale      */
/* ------------------------------------------------------------------ */

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  sizes = '100vw',
  priority = false,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ''}`}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={d1Viewport}
      transition={{ duration: 1.3, delay, ease: d1Ease }}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={d1Viewport}
        transition={{ duration: 1.9, delay, ease: d1Ease }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className={`object-cover ${imgClassName ?? ''}`}
        />
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  ParallaxImage — image drifting slowly against scroll               */
/* ------------------------------------------------------------------ */

export function ParallaxImage({
  src,
  alt,
  className,
  sizes = '100vw',
  amount = 8,
  overlay,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  /** Percent of drift across the scroll range */
  amount?: number;
  overlay?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.div
        style={{ y } as MotionStyle}
        className="absolute -inset-y-[12%] inset-x-0 will-change-transform"
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </motion.div>
      {overlay ? (
        <div className="absolute inset-0" style={{ background: overlay }} />
      ) : null}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Label — small tracked editorial caption with hairline              */
/* ------------------------------------------------------------------ */

export function D1Label({
  children,
  index,
  light = false,
  className,
}: {
  children: React.ReactNode;
  index?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className} y={16}>
      <div
        className="flex items-baseline gap-4 font-body text-[11px] font-medium uppercase tracking-[0.35em]"
        style={{ color: light ? 'rgba(250,248,243,0.75)' : d1.taupe }}
      >
        {index ? (
          <span style={{ color: d1.gold }} className="tracking-[0.2em]">
            {index}
          </span>
        ) : null}
        <span>{children}</span>
        <motion.span
          aria-hidden
          className="hidden h-px flex-1 origin-left sm:block"
          style={{
            background: light ? 'rgba(250,248,243,0.25)' : d1.line,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={d1Viewport}
          transition={{ duration: 1.4, delay: 0.2, ease: d1Ease }}
        />
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Buttons — thin-bordered, quiet                                     */
/* ------------------------------------------------------------------ */

export function D1Button({
  href,
  children,
  variant = 'dark',
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'gold';
  className?: string;
}) {
  const palette = {
    dark: {
      color: d1.brown,
      border: 'rgba(43,38,32,0.35)',
      hoverBg: d1.brown,
      hoverColor: d1.bg,
    },
    light: {
      color: '#FAF8F3',
      border: 'rgba(250,248,243,0.45)',
      hoverBg: '#FAF8F3',
      hoverColor: d1.brown,
    },
    gold: {
      color: d1.gold,
      border: 'rgba(176,141,87,0.55)',
      hoverBg: d1.gold,
      hoverColor: '#FAF8F3',
    },
  }[variant];

  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-[3.25rem] items-center justify-center gap-3 overflow-hidden border px-9 font-body text-[11px] font-medium uppercase tracking-[0.28em] transition-colors duration-700 ${className ?? ''}`}
      style={{ color: palette.color, borderColor: palette.border }}
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
        style={{ background: palette.hoverBg }}
      />
      <span
        className="relative transition-colors duration-500"
        style={{ ['--hover-c' as string]: palette.hoverColor }}
      >
        <span className="transition-colors duration-500 group-hover:text-[var(--hover-c)]">
          {children}
        </span>
      </span>
    </Link>
  );
}
