'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: Number(match[1]), suffix: match[2] };
}

type AnimatedCounterProps = {
  value: string;
  className?: string;
  duration?: number;
  delay?: number;
};

export function AnimatedCounter({
  value,
  className,
  duration = 1.6,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReduced = useReducedMotion();
  const { target, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReduced) {
      setDisplay(target);
      return;
    }

    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, target, duration, delay, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
