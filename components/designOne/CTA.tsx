'use client';

import { LIFE_77_IMAGES } from '@/lib/images';
import { D1Button, LineReveal, ParallaxImage, Reveal, d1 } from './shared';

export function D1CTA() {
  return (
    <ParallaxImage
      src={LIFE_77_IMAGES.hero}
      alt="77 Life — Art Deco-inspired luxury villa interior by Design My Place"
      className="flex min-h-[90svh] items-center"
      amount={10}
      overlay="linear-gradient(to bottom, rgba(15,13,10,0.6), rgba(15,13,10,0.45) 50%, rgba(15,13,10,0.7))"
    >
      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-6 py-32 text-center sm:px-10 lg:px-16">
        <Reveal y={16}>
          <span
            className="font-body text-[10px] font-medium uppercase tracking-[0.45em]"
            style={{ color: d1.stone }}
          >
            Begin the Journey
          </span>
        </Reveal>

        <h2 className="mx-auto mt-10 max-w-5xl font-display font-light leading-[1.1] text-[#FAF8F3] text-[clamp(2.5rem,6vw,6rem)]">
          <LineReveal delay={0.15}>Let&rsquo;s design your</LineReveal>
          <LineReveal delay={0.3}>
            <span className="italic">dream home</span>
          </LineReveal>
        </h2>

        <Reveal delay={0.5} className="mx-auto mt-10 max-w-md">
          <p className="font-body text-[14px] font-light leading-[2] text-[#F0EAE0]/85">
            Whether you&rsquo;re redesigning a single room or developing a
            complete space from the ground up — we&rsquo;d love to hear from
            you.
          </p>
        </Reveal>

        <Reveal delay={0.65} className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <D1Button href="/contact" variant="light">
            Book Consultation
          </D1Button>
          <D1Button href="/projects" variant="gold">
            View Portfolio
          </D1Button>
        </Reveal>
      </div>
    </ParallaxImage>
  );
}
