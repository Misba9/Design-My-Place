'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ContentImage } from '@/components/ContentImage';
import { HERO_IMAGE } from '@/lib/images';
import { d2Ease } from '@/components/design2/shared';

type PageHeroProps = {
  label: string;
  title: string;
  titleAccent?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

/**
 * Inner-page hero — starts below the solid navbar (via InternalPageLayout).
 * Never sits underneath the navigation.
 */
export function PageHero({
  label,
  title,
  titleAccent,
  description,
  image = HERO_IMAGE,
  imageAlt,
}: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const altText =
    imageAlt ||
    (titleAccent
      ? `${title} ${titleAccent} — Design My Place luxury interior design`
      : `${title} — Design My Place luxury interior design`);

  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden sm:min-h-[56vh] lg:min-h-[62vh]">
      <div className="absolute inset-0">
        <ContentImage
          src={image}
          alt={altText}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612] via-black/35 to-black/25" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 45% at 15% 80%, rgba(156,111,78,0.18) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-14 pt-10 sm:px-10 sm:pb-16 sm:pt-12 lg:px-20 lg:pb-20 lg:pt-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: d2Ease }}
          className="mb-5 flex items-center gap-4 sm:mb-6"
        >
          <span
            aria-hidden
            className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10"
          />
          <p className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-white/85 sm:text-[11px] sm:tracking-[0.4em]">
            {label}
          </p>
        </motion.div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: reduceMotion ? 0 : 0.08, ease: d2Ease }}
          className="max-w-4xl font-body text-[clamp(2.5rem,7vw,4.75rem)] font-light leading-[1.02] tracking-[-0.02em] text-white text-balance"
        >
          {title}
          {titleAccent ? (
            <>
              {' '}
              <span className="font-display italic font-normal text-[#C4A07A]">
                {titleAccent}
              </span>
            </>
          ) : null}
        </motion.h1>

        {description ? (
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: reduceMotion ? 0 : 0.18, ease: d2Ease }}
            className="mt-5 max-w-2xl font-body text-[15px] font-normal leading-[1.85] text-white/80 sm:mt-6 sm:text-[15.5px]"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
