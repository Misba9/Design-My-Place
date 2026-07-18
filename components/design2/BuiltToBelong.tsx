'use client';

import { d2, D2ImageReveal, D2Reveal, slideAsset } from './shared';

/**
 * Slide 44 — Built to Belong.
 * Twilight house photo on the left; deep brown panel on the right with
 * the serif title, a small centered interior photo, and a justified
 * paragraph beneath.
 */
export function D2BuiltToBelong() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <D2ImageReveal
          src={slideAsset('belong-house')}
          alt="Warmly lit villa facade at dusk with a courtyard tree"
          className="aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[52rem]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>

      <div
        className="flex flex-col px-6 pb-24 pt-16 sm:px-10 lg:col-span-7 lg:px-16 lg:pb-28 lg:pt-20"
        style={{ background: d2.band }}
      >
        <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center pt-6 lg:pt-0">
          <D2Reveal>
            <h2
              className="text-center font-display text-[clamp(2.5rem,4.5vw,4rem)] font-normal"
              style={{ color: d2.cream }}
            >
              Built to <span className="italic">Belong</span>
            </h2>
          </D2Reveal>

          <D2ImageReveal
            src={slideAsset('belong-interior')}
            alt="Open glass-walled lounge overlooking the landscape"
            className="-mt-4 aspect-[16/9] w-64 sm:w-72"
            sizes="18rem"
            delay={0.15}
          />

          <D2Reveal delay={0.3} className="mt-14">
            <p
              className="text-justify font-body text-[14px] font-normal leading-[1.85]"
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
            </p>
          </D2Reveal>
        </div>
      </div>
    </section>
  );
}
