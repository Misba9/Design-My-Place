'use client';

import { aboutQuote } from '@/lib/about';
import { LineReveal, ParallaxImage } from './shared';

export function D1Philosophy() {
  return (
    <ParallaxImage
      src={aboutQuote.image}
      alt={aboutQuote.imageAlt}
      className="flex min-h-[85svh] items-center"
      amount={10}
      overlay="rgba(15,13,10,0.25)"
    >
      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-6 py-32 text-center sm:px-10 lg:px-16">
        <blockquote className="mx-auto max-w-5xl text-[#FAF8F3] text-[clamp(2.25rem,5.5vw,5.5rem)] [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]">
          <LineReveal delay={0.15} className="font-display font-normal leading-[1.1]">
            {aboutQuote.line1}
          </LineReveal>
          <LineReveal delay={0.3} className="font-body font-light leading-[1.12] tracking-wide">
            {aboutQuote.line2}
          </LineReveal>
        </blockquote>
      </div>
    </ParallaxImage>
  );
}
