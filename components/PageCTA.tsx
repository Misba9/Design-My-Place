'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PrimaryButton } from '@/components/PrimaryButton';
import {
  d2Ease,
  d2PageBg,
  d2Section,
  d2Viewport,
} from '@/components/design2/shared';

type PageCTAProps = {
  title?: string;
  titleAccent?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

/**
 * Page closer CTA — cream deck language matching homepage Contact intro.
 */
export function PageCTA({
  title = 'Ready to begin',
  titleAccent = 'your project?',
  description = 'Every great design starts with a conversation. Book a consultation and let us bring your vision to life.',
  buttonLabel = 'Book Consultation',
  buttonHref = '/contact',
}: PageCTAProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden text-[#3F3930]"
      style={{ background: d2PageBg }}
    >
      <div className={`${d2Section} text-center`}>
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 0.8, ease: d2Ease }}
          className="mx-auto max-w-3xl font-body text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#3F3930] text-balance"
        >
          {title}{' '}
          <span className="font-display italic font-normal text-[#9C6F4E]">
            {titleAccent}
          </span>
        </motion.h2>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.1, ease: d2Ease }}
          className="mx-auto mt-5 max-w-lg font-body text-[15px] leading-[1.85] text-[#55503F] sm:mt-6"
        >
          {description}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.18, ease: d2Ease }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <PrimaryButton href={buttonHref}>{buttonLabel}</PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
