'use client';

import { aboutQuote } from '@/lib/about';
import { LineReveal, ParallaxImage, Reveal, d1 } from './shared';

export function D1Philosophy() {
  return (
    <ParallaxImage
      src={aboutQuote.image}
      alt={aboutQuote.imageAlt}
      className="flex min-h-[85svh] items-center"
      amount={10}
      overlay="linear-gradient(to bottom, rgba(15,13,10,0.55), rgba(15,13,10,0.35) 45%, rgba(15,13,10,0.6))"
    >
      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-6 py-32 sm:px-10 lg:px-16">
        <Reveal y={16}>
          <span
            className="font-body text-[10px] font-medium uppercase tracking-[0.45em]"
            style={{ color: d1.stone }}
          >
            Our Philosophy
          </span>
        </Reveal>

        <blockquote className="mt-10 max-w-5xl font-display font-light leading-[1.15] text-[#FAF8F3] text-[clamp(2.25rem,5.5vw,5.5rem)]">
          <LineReveal delay={0.15}>{aboutQuote.line1}</LineReveal>
          <LineReveal delay={0.3}>
            <span className="italic">{aboutQuote.line2}</span>
          </LineReveal>
        </blockquote>

        <Reveal delay={0.55} className="mt-12 max-w-md">
          <p className="font-body text-[14px] font-light leading-[2] text-[#F0EAE0]/80">
            We design for how spaces make you feel — not just how they look.
            Comfort, calm, and quiet joy guide every decision we make.
          </p>
        </Reveal>
      </div>
    </ParallaxImage>
  );
}
