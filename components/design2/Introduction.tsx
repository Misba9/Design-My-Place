'use client';

import { d2, D2ImageReveal, D2Reveal, slideAsset } from './shared';

/**
 * Slide 2 — Introduction.
 * Brown band with the light sans title and serif intro line,
 * full-width still-life photo underneath.
 */
export function D2Introduction() {
  return (
    <section id="introduction" className="scroll-mt-20" style={{ background: d2.band }}>
      <div className="mx-auto max-w-[100rem] px-6 pb-16 pt-16 sm:px-10 lg:px-16 lg:pb-24 lg:pt-20">
        <div className="grid grid-cols-1 items-start gap-10 pb-6 pt-6 lg:grid-cols-12 lg:pt-10">
          <D2Reveal className="lg:col-span-6 lg:col-start-3">
            <h2
              className="font-body font-light leading-none tracking-[-0.01em] text-[clamp(2.75rem,5.5vw,4.75rem)] lg:text-right"
              style={{ color: d2.cream }}
            >
              Introduction
            </h2>
          </D2Reveal>
          <D2Reveal delay={0.15} className="lg:col-span-3 lg:col-start-9 lg:pt-3">
            <p
              className="max-w-[19rem] font-display text-[17px] font-normal leading-[1.75]"
              style={{ color: 'rgba(224,213,194,1)' }}
            >
              Design My Place is an interior design firm established in 2022 in
              Bangalore, India.
            </p>
          </D2Reveal>
        </div>
      </div>

      {/* Full-width photo, exactly as placed on the slide */}
      <D2ImageReveal
        src={slideAsset('intro')}
        alt="Sepia still life of sculptural forms and soft shadow — Design My Place introduction"
        className="aspect-[16/9] w-full sm:aspect-[21/9] lg:aspect-[3/1]"
        sizes="100vw"
      />
    </section>
  );
}
