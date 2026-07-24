'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { d2, d2Ease, d2Viewport, slideAsset } from './shared';

const ease = d2Ease;

/**
 * Built to Belong — luxury editorial split-screen showcase.
 * All titles, copy, and imagery are preserved.
 */
export function D2BuiltToBelong() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['-4%', '4%'],
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="built-to-belong-heading"
      className="relative overflow-hidden lg:min-h-[90vh]"
    >
      <div
        className="
          mx-auto grid w-full max-w-[1600px] grid-cols-1 items-stretch
          lg:min-h-[90vh] lg:grid-cols-2
        "
      >
        {/* Left — immersive hero image */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={d2Viewport}
          transition={{ duration: 0.9, ease }}
          className="
            relative overflow-hidden
            h-[320px] sm:h-[380px] md:h-[420px]
            lg:h-auto lg:min-h-[90vh]
            lg:rounded-br-[24px] lg:rounded-tr-[24px]
          "
        >
          <motion.div
            style={{ y: parallaxY }}
            className="absolute inset-[-6%] will-change-transform"
          >
            <div className="group absolute inset-0">
              <Image
                src={slideAsset('belong-house')}
                alt="Warmly lit villa facade at dusk with a courtyard tree"
                fill
                quality={95}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
              />
            </div>
          </motion.div>

          {/* Depth gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/5 lg:to-black/35"
          />
        </motion.div>

        {/* Right — editorial content panel */}
        <div
          className="
            relative flex flex-col justify-center
            px-6 py-16
            md:px-12 md:py-[80px]
            lg:px-16 lg:py-20 xl:px-20
          "
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 80% 20%, rgba(156,111,78,0.18) 0%, transparent 55%),
              radial-gradient(ellipse 70% 50% at 10% 90%, rgba(0,0,0,0.25) 0%, transparent 50%),
              linear-gradient(165deg, #554839 0%, ${d2.band} 42%, #3A3328 100%)
            `,
          }}
        >
          <div className="relative mx-auto flex w-full max-w-[520px] flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h2
              id="built-to-belong-heading"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{ duration: 0.7, ease }}
              className="font-display text-[clamp(2.5rem,4.5vw,4rem)] font-normal leading-[1.1] tracking-[-0.01em]"
              style={{ color: d2.cream }}
            >
              Built to <span className="italic">Belong</span>
            </motion.h2>

            {/* Floating editorial inset image */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.12, ease }}
              className="
                group relative z-10 mt-8 w-[min(100%,18rem)]
                -mb-2 sm:mt-10 sm:w-72
                lg:mt-12
              "
            >
              <div
                className="
                  relative aspect-[16/9] w-full overflow-hidden
                  rounded-[18px] md:rounded-[20px]
                  border border-white/10
                  shadow-[0_22px_50px_-16px_rgba(0,0,0,0.55)]
                  transition-transform duration-500 ease-out
                  group-hover:-translate-y-1
                  motion-reduce:transform-none
                "
              >
                <Image
                  src={slideAsset('belong-interior')}
                  alt="Open glass-walled lounge overlooking the landscape"
                  fill
                  quality={95}
                  sizes="288px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
                />
              </div>
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.22, ease }}
              className="mt-10 font-body text-[14.5px] font-normal leading-[1.85] sm:mt-12 sm:text-[15px] sm:leading-[1.9]"
              style={{ color: d2.creamMuted }}
            >
              Scandinavian architecture is defined by its simplicity,
              functionality, and deep connection to nature. Rooted in the
              Nordic landscape and way of life, it emphasizes clean lines,
              minimalism, and natural materials like wood, stone, and glass.
              The style prioritizes light, both natural and spatial, making
              interiors feel open, calm, and airy, even in the darkest months.
              With a focus on sustainability, craftsmanship, and timeless
              design, Scandinavian architecture blends beauty and purpose to
              create spaces that are both enduring and effortlessly livable.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
