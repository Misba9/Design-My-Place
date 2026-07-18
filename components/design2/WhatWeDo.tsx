'use client';

import { whatWeDo } from '@/lib/about';
import { d2, D2ImageReveal, D2Reveal, slideAsset } from './shared';

const stripImages = [
  { src: slideAsset('what-1'), alt: 'Warm wooden shelving and round table vignette' },
  { src: slideAsset('what-2'), alt: 'Cream side table with ceramic objects against ochre leather' },
  { src: slideAsset('what-3'), alt: 'Textured stone wall washed in soft daylight' },
  { src: slideAsset('what-4'), alt: 'Dark marble bath with warm timber lighting' },
];

/**
 * Slide 5 — 02 What We Do.
 * Heading left; four serif service titles with sans descriptions on the
 * right; edge-to-edge four-image strip along the bottom.
 */
export function D2WhatWeDo() {
  return (
    <section id="what-we-do" className="scroll-mt-20" style={{ background: d2.bg, color: d2.ink }}>
      <div className="mx-auto max-w-[100rem] px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-28 lg:pt-28">

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <D2Reveal className="lg:col-span-6">
            <h2 className="font-body font-light leading-none tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,4.75rem)]">
              What We Do
            </h2>
          </D2Reveal>

          {/* Service list — serif titles, small sans descriptions, no icons */}
          <div className="lg:col-span-6">
            <dl className="space-y-11 lg:space-y-12">
              {whatWeDo.items.map((item, i) => (
                <D2Reveal key={item.title} delay={0.1 + i * 0.1}>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-10">
                    <dt
                      className="font-display text-[19px] font-medium leading-[1.35]"
                      style={{ color: d2.ink }}
                    >
                      {item.title.replace(' and ', '\u00A0and ')}
                    </dt>
                    <dd
                      className="font-body text-[14px] font-normal leading-[1.75]"
                      style={{ color: d2.body }}
                    >
                      {item.description}
                    </dd>
                  </div>
                </D2Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom image strip — four equal panels, edge to edge */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stripImages.map((image, i) => (
          <D2ImageReveal
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="aspect-[16/10] w-full"
            sizes="(min-width: 1024px) 25vw, 50vw"
            delay={i * 0.08}
          />
        ))}
      </div>
    </section>
  );
}
