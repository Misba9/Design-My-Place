'use client';

import { aboutUsIntro } from '@/lib/about';
import { d2, D2ImageReveal, D2Reveal, slideAsset } from './shared';

/**
 * Slide 4 — 01 About Us.
 * Heading top-left, tall snowdrop photo on the right,
 * two justified text columns resting at the bottom left.
 */
export function D2AboutUs() {
  return (
    <section id="about" className="scroll-mt-20" style={{ background: d2.bg, color: d2.ink }}>
      <div className="mx-auto max-w-[100rem] px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-28 lg:pt-28">

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left — heading high, copy low (matches the slide's vertical spread) */}
          <div className="flex flex-col justify-between lg:col-span-8 lg:min-h-[44rem]">
            <D2Reveal>
              <h2 className="font-body font-light leading-none tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,4.75rem)]">
                01 About Us
              </h2>
            </D2Reveal>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-0 lg:max-w-2xl">
              {aboutUsIntro.paragraphs.map((paragraph, i) => (
                <D2Reveal key={i} delay={0.15 + i * 0.15}>
                  <p
                    className="text-justify font-body text-[14px] font-normal leading-[1.9]"
                    style={{ color: d2.body }}
                  >
                    {paragraph}
                  </p>
                </D2Reveal>
              ))}
            </div>
          </div>

          {/* Right — tall portrait photo */}
          <div className="lg:col-span-4">
            <D2ImageReveal
              src={slideAsset('about')}
              alt="Snowdrop flowers by a warm window — quiet natural detail"
              className="aspect-[3/5] w-full lg:min-h-[44rem]"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
