'use client';

import { InstagramFeed } from '@/components/InstagramFeed';
import { BUSINESS } from '@/lib/site';
import { d2, D2Reveal } from './shared';

/**
 * Instagram feed — same Elfsight widget as the live homepage,
 * wrapped in design-2 editorial chrome (warm cream, light sans heading,
 * thin-border CTA).
 */
export function D2Instagram() {
  return (
    <section
      id="instagram"
      className="scroll-mt-20"
      style={{ background: d2.bg, color: d2.ink }}
    >
      <div className="mx-auto max-w-[100rem] px-6 pb-24 pt-20 sm:px-10 lg:px-16 lg:pb-32 lg:pt-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <D2Reveal>
              <p
                className="mb-5 font-body text-[11px] font-medium uppercase tracking-[0.35em]"
                style={{ color: d2.gold }}
              >
                Follow Us
              </p>
            </D2Reveal>

            <D2Reveal delay={0.08}>
              <h2 className="font-body font-light leading-[1.05] tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,4.75rem)]">
                Follow Our Journey on{' '}
                <span className="font-display italic" style={{ color: d2.gold }}>
                  Instagram
                </span>
              </h2>
            </D2Reveal>

            <D2Reveal delay={0.16}>
              <p
                className="mt-6 max-w-md font-body text-[14px] font-normal leading-[1.85]"
                style={{ color: d2.body }}
              >
                Latest interiors, behind-the-scenes work, completed spaces, and
                design inspiration — straight from our studio feed.
              </p>
            </D2Reveal>
          </div>

          <D2Reveal delay={0.2} className="shrink-0">
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border px-10 py-4 font-body text-[12px] font-medium uppercase tracking-[0.28em] transition-colors duration-500 hover:bg-[#3F3930] hover:text-[#F0EDEB]"
              style={{ borderColor: 'rgba(63,57,48,0.4)', color: d2.ink }}
            >
              View Instagram
            </a>
          </D2Reveal>
        </div>

        <D2Reveal delay={0.28} className="mt-14 min-h-[12rem] lg:mt-20">
          <InstagramFeed />
        </D2Reveal>
      </div>
    </section>
  );
}
