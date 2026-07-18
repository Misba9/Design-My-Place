'use client';

import { D1Label, ImageReveal, LineReveal, Reveal, d1 } from './shared';
import { SVASA_IMAGES } from '@/lib/images';

export function D1Introduction() {
  return (
    <section className="relative" style={{ background: d1.bg, color: d1.brown }}>
      <div className="mx-auto max-w-[100rem] px-6 pb-20 pt-28 sm:px-10 sm:pt-36 lg:px-16 lg:pb-28 lg:pt-44">
        <D1Label>Introduction</D1Label>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          {/* Left — oversized heading */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-light leading-[1.04] tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,5.25rem)]">
              <LineReveal>Interiors that</LineReveal>
              <LineReveal delay={0.1}>
                define <span className="italic" style={{ color: d1.gold }}>you</span>
              </LineReveal>
            </h2>
          </div>

          {/* Right — editorial body copy */}
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <Reveal delay={0.25}>
              <p
                className="font-body text-[15px] font-light leading-[2.1]"
                style={{ color: d1.taupe }}
              >
                Design My Place is a premium interior design studio based in
                Bangalore, creating bespoke residential interiors for new homes
                and renovations. Our work combines the minimal, nature-inspired
                clarity of the West with the ultra-premium textures, warmth, and
                expressive elegance of Indian craftsmanship.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-10">
              <div className="flex items-center gap-5">
                <span className="h-px w-12" style={{ background: d1.gold }} />
                <span
                  className="font-body text-[10px] font-medium uppercase tracking-[0.35em]"
                  style={{ color: d1.taupe }}
                >
                  Est. 2021 — Bangalore, India
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Full-width image */}
      <ImageReveal
        src={SVASA_IMAGES.hero}
        alt="Svasa Homes — warm contemporary living room designed by Design My Place"
        className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]"
        sizes="100vw"
      />

      {/* Caption strip */}
      <div className="mx-auto flex max-w-[100rem] items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Reveal y={12}>
          <span
            className="font-body text-[10px] uppercase tracking-[0.3em]"
            style={{ color: d1.taupe }}
          >
            Svasa Homes — 6 BHK Residence, Bangalore
          </span>
        </Reveal>
        <Reveal y={12} delay={0.1}>
          <span
            className="font-body text-[10px] uppercase tracking-[0.3em]"
            style={{ color: d1.taupe }}
          >
            2025
          </span>
        </Reveal>
      </div>
    </section>
  );
}
