'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { aboutStats } from '@/lib/about';
import { D1Label, LineReveal, d1, d1Ease } from './shared';

function parseStat(value: string) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return { prefix: '', target: 0, suffix: value };
  return { prefix: match[1], target: Number(match[2]), suffix: match[3] };
}

function StatNumber({ value }: { value: string }) {
  const { prefix, target, suffix } = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function D1Statistics() {
  return (
    <section style={{ background: d1.beige, color: d1.brown }}>
      <div className="mx-auto max-w-[100rem] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <D1Label index="06">Why Design My Place</D1Label>

        <div className="mt-14 lg:mt-20">
          <h2 className="max-w-3xl font-display font-light leading-[1.06] text-[clamp(2.25rem,4.5vw,4.25rem)]">
            <LineReveal>Measured in trust,</LineReveal>
            <LineReveal delay={0.1}>
              not just <span className="italic" style={{ color: d1.gold }}>numbers</span>
            </LineReveal>
          </h2>
        </div>

        <div
          className="mt-20 grid grid-cols-1 border-t sm:grid-cols-2 lg:mt-28 lg:grid-cols-4"
          style={{ borderColor: d1.line }}
        >
          {aboutStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 1, delay: i * 0.12, ease: d1Ease }}
              className="border-b px-2 py-14 sm:border-r sm:px-8 lg:py-20 lg:last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r"
              style={{ borderColor: d1.line }}
            >
              <div className="font-display font-light leading-none text-[clamp(3.5rem,6vw,6rem)]">
                <StatNumber value={stat.value} />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <span className="h-px w-8" style={{ background: d1.gold }} />
                <span
                  className="font-body text-[11px] uppercase tracking-[0.3em]"
                  style={{ color: d1.taupe }}
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
