import type { Transition, Variants } from 'framer-motion';

/** Shared luxury easing used across the site */
export const easeLuxury = [0.25, 0.1, 0.25, 1] as const;

export const viewportOnce = { once: true, margin: '-80px' as const };
export const viewportOnceTight = { once: true, margin: '-50px' as const };

export const transitionBase: Transition = {
  duration: 0.7,
  ease: easeLuxury,
};

export const transitionSlow: Transition = {
  duration: 0.9,
  ease: easeLuxury,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
};

export function staggerDelay(index: number, base = 0.1, step = 0.08) {
  return base + index * step;
}
