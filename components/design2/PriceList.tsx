'use client';

import { d2, D2ImageReveal, D2Reveal, slideAsset } from './shared';

/** Fee structures exactly as printed in the presentation. */
const fees = [
  {
    title: 'Hourly',
    description:
      'The client will pay the designer a competitive rate for each hour worked on the project.',
    price: 'INR 3000\nPER HOUR',
  },
  {
    title: 'Square footage',
    description:
      'More commonly, for commercial spaces or new construction, clients pay per square foot.',
    price: 'INR 350\nPER SQ. FT.',
  },
  {
    title: 'Designer fee',
    description:
      'If the budget is established initially, designer fees are paid at an agreed percentage of the budget.',
    price: '15% OF PROJECT\nBUDGET',
  },
];

/**
 * Slide 41 — 06 Price list.
 * Centered title, three fee columns indented to the right half,
 * two-photo strip along the bottom edge.
 */
export function D2PriceList() {
  return (
    <section id="price-list" className="scroll-mt-20" style={{ background: d2.bg, color: d2.ink }}>
      <div className="mx-auto max-w-[100rem] px-6 pt-20 sm:px-10 lg:px-16 lg:pt-28">

        <D2Reveal className="pt-0 lg:pt-0">
          <h2 className="text-center font-body font-light leading-none tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,4.75rem)]">
            Price list
          </h2>
        </D2Reveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 pb-24 pt-16 sm:grid-cols-3 sm:gap-12 lg:pb-32 lg:pt-24">
          {fees.map((fee, i) => (
            <D2Reveal
              key={fee.title}
              delay={0.1 + i * 0.12}
              className="flex flex-col"
            >
              <div
                aria-hidden
                className="mb-8 h-px w-full"
                style={{ background: d2.line }}
              />
              <h3
                className="font-display text-[22px] font-medium"
                style={{ color: d2.gold }}
              >
                {fee.title}
              </h3>
              <p
                className="mt-4 font-body text-[14px] font-normal leading-[1.75]"
                style={{ color: d2.body }}
              >
                {fee.description}
              </p>
              <p
                className="mt-auto whitespace-pre-line pt-10 font-body text-[19px] font-medium leading-[1.5] tracking-[0.01em]"
                style={{ color: d2.ink }}
              >
                {fee.price}
              </p>
            </D2Reveal>
          ))}
        </div>
      </div>

      {/* Bottom photo strip — two panels as on the slide */}
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr]">
        <D2ImageReveal
          src={slideAsset('price-1')}
          alt="Woven pendant detail above a console"
          className="aspect-[16/6] w-full sm:aspect-auto sm:min-h-[14rem]"
          sizes="(min-width: 640px) 40vw, 100vw"
        />
        <D2ImageReveal
          src={slideAsset('price-2')}
          alt="Sheer curtains casting soft shadows across a bedroom wall"
          className="aspect-[16/6] w-full sm:aspect-auto sm:min-h-[14rem]"
          sizes="(min-width: 640px) 60vw, 100vw"
          delay={0.1}
        />
      </div>
    </section>
  );
}
