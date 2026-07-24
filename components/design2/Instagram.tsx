'use client';

import { InstagramFeed } from '@/components/InstagramFeed';
import { BUSINESS } from '@/lib/site';
import { d2, D2Reveal } from './shared';

/**
 * Instagram feed — same Elfsight widget as the live homepage.
 * Only the section header and outer spacing are refined.
 */
export function D2Instagram() {
  return (
    <section
      id="instagram"
      className="scroll-mt-20"
      style={{ background: d2.bg, color: d2.ink }}
    >
      <div className="mx-auto max-w-[100rem] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        {/* Header — title block + CTA */}
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="text-center md:text-left lg:col-span-8">
            <D2Reveal>
              <p
                className="mb-3 font-body text-[11px] font-medium uppercase tracking-[0.35em]"
                style={{ color: d2.gold }}
              >
                Follow Us
              </p>
            </D2Reveal>

            <D2Reveal delay={0.08}>
              <h2 className="mx-auto font-body font-light leading-[1.1] tracking-[-0.01em] text-[clamp(1.75rem,3.2vw,2.75rem)] md:mx-0 lg:whitespace-nowrap">
                Follow Our Journey on{' '}
                <span className="font-display italic" style={{ color: d2.gold }}>
                  Instagram
                </span>
              </h2>
            </D2Reveal>

            <D2Reveal delay={0.14}>
              <p
                className="mx-auto mt-4 max-w-md font-body text-[14px] font-normal leading-[1.8] md:mx-0"
                style={{ color: d2.body }}
              >
                Latest interiors, behind-the-scenes work, completed spaces, and
                design inspiration — straight from our studio feed.
              </p>
            </D2Reveal>
          </div>

          <D2Reveal
            delay={0.16}
            className="flex justify-center md:justify-start lg:col-span-4 lg:justify-end lg:pb-1"
          >
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 w-full shrink-0 items-center justify-center gap-2.5 box-border rounded-sm border border-[rgba(63,57,48,0.22)] bg-transparent px-8 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3F3930] transition-all duration-300 hover:border-[#9C6F4E]/50 hover:bg-[#9C6F4E] hover:text-[#FAF8F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E] sm:w-auto sm:min-w-[12.5rem]"
            >
              View Instagram
            </a>
          </D2Reveal>
        </div>

        {/* Feed — unchanged widget */}
        <div className="mt-8 sm:mt-10 lg:mt-10">
          <InstagramFeed />
        </div>
      </div>
    </section>
  );
}
