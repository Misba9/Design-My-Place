'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { d2, d2Ease } from './shared';

const statistics = [
  { value: 25, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 12, suffix: '+', label: 'Cities Served' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.8,
      ease: d2Ease,
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function D2Statistics() {
  return (
    <section
      aria-label="Design My Place statistics"
      style={{ background: d2.bg, color: d2.ink }}
    >
      <div className="mx-auto max-w-[100rem] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div
          className="grid grid-cols-1 border-y sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: d2.line }}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.85, delay: index * 0.1, ease: d2Ease }}
              className="border-b px-6 py-12 last:border-b-0 sm:border-r sm:px-7 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(3)]:border-b-0 lg:border-b-0 lg:px-8 lg:py-16 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
              style={{ borderColor: d2.line }}
            >
              <div className="font-body text-[clamp(3.5rem,5.5vw,5.75rem)] font-light leading-none tracking-[-0.04em]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>

              <div className="mt-7 flex items-center gap-4">
                <span
                  aria-hidden
                  className="h-px w-7 shrink-0"
                  style={{ background: d2.gold }}
                />
                <span
                  className="font-body text-[9px] font-medium uppercase tracking-[0.3em]"
                  style={{ color: d2.body }}
                >
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
