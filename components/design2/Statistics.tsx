'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { d2, d2Ease, d2Viewport } from './shared';

const statistics = [
  { value: 25, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 12, suffix: '+', label: 'Cities Served' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
] as const;

const ease = d2Ease;

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

/**
 * Statistics — premium trust strip with count-up and soft editorial cards.
 * Numbers and labels are preserved exactly.
 */
export function D2Statistics() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Design My Place statistics"
      className="relative overflow-hidden text-[#3F3930]"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 50% 0%, rgba(156,111,78,0.06) 0%, transparent 55%),
          linear-gradient(180deg, #FAF8F5 0%, #F3EFE8 50%, #FAF8F5 100%)
        `,
      }}
    >
      {/* Thin gold accent lines */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(156,111,78,0.45) 50%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(156,111,78,0.35) 50%, transparent 100%)',
        }}
      />

      <div
        className="
          relative mx-auto w-full max-w-[1440px]
          px-6 py-[70px]
          md:px-12 md:py-20
          lg:px-20 lg:py-[110px]
        "
      >
        <ul
          role="list"
          className="
            m-0 grid list-none grid-cols-2 gap-4 p-0
            sm:gap-5
            md:gap-6
            lg:grid-cols-4 lg:gap-6 xl:gap-8
          "
        >
          {statistics.map((stat, index) => (
            <motion.li
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : index * 0.1,
                ease,
              }}
              className="h-full"
            >
              <article
                className="
                  group relative flex h-full flex-col items-center justify-center
                  overflow-hidden
                  rounded-[16px] md:rounded-[20px]
                  border border-[rgba(63,57,48,0.08)]
                  bg-[rgba(255,255,255,0.45)]
                  px-5 py-8 text-center
                  shadow-[0_1px_0_rgba(63,57,48,0.03)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-1
                  hover:border-[rgba(156,111,78,0.22)]
                  hover:bg-[rgba(255,255,255,0.72)]
                  hover:shadow-[0_20px_40px_-22px_rgba(63,57,48,0.28)]
                  motion-reduce:transform-none
                  sm:px-6 sm:py-10
                  lg:px-7 lg:py-12
                "
              >
                {/* Soft glow behind number */}
                <div
                  aria-hidden
                  className="
                    pointer-events-none absolute left-1/2 top-8 h-24 w-24 -translate-x-1/2 rounded-full
                    bg-[rgba(156,111,78,0.08)] opacity-0 blur-2xl
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                <p
                  className="
                    relative font-body font-light leading-none tracking-[-0.04em]
                    text-[clamp(2.75rem,5vw,4.5rem)] text-[#3F3930]
                    transition-colors duration-500
                    group-hover:text-[#9C6F4E]
                  "
                >
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>

                <span
                  aria-hidden
                  className="
                    relative mt-6 h-px w-8 origin-center
                    transition-all duration-500
                    group-hover:w-12
                    sm:mt-7
                  "
                  style={{ background: d2.gold }}
                />

                <p
                  className="
                    relative mt-5 max-w-[11rem] font-body text-[9px] font-medium
                    uppercase leading-snug tracking-[0.22em] text-[#55503F]
                    sm:mt-6 sm:text-[10px] sm:tracking-[0.26em]
                  "
                >
                  {stat.label}
                </p>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
