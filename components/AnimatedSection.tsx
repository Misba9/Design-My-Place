'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import {
  fadeIn,
  fadeUp,
  scaleIn,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
  transitionBase,
  transitionSlow,
  viewportOnce,
} from '@/lib/motion';

const variantsMap = {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scaleIn,
} as const;

type MotionVariant = keyof typeof variantsMap;

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  variant?: MotionVariant;
  delay?: number;
  slow?: boolean;
};

export function AnimatedSection({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  slow = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewportOnce);
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variantsMap[variant]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        ...(slow ? transitionSlow : transitionBase),
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewportOnce);
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
