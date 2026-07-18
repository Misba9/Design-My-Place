'use client';

import { aboutUsIntro } from '@/lib/about';
import { NVT_IMAGES } from '@/lib/images';
import { D1Button, D1Label, ImageReveal, LineReveal, Reveal, d1 } from './shared';

export function D1About() {
  return (
    <section style={{ background: d1.beige, color: d1.brown }}>
      <div className="mx-auto max-w-[100rem] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <D1Label index="02">About Design My Place</D1Label>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          {/* Portrait image, offset editorially */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <ImageReveal
              src={NVT_IMAGES.family}
              alt="NVT Symphony of Orchards — family living space with warm wooden rafters"
              className="aspect-[3/4] w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <Reveal y={12} className="mt-5">
              <span
                className="font-body text-[10px] uppercase tracking-[0.3em]"
                style={{ color: d1.taupe }}
              >
                NVT Symphony of Orchards — Premium Apartment
              </span>
            </Reveal>
          </div>

          {/* Two-column typography */}
          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <h3 className="font-display font-light leading-[1.08] text-[clamp(2rem,3.6vw,3.5rem)]">
              <LineReveal>{aboutUsIntro.title}</LineReveal>
              <LineReveal delay={0.1}>
                <span className="italic" style={{ color: d1.gold }}>
                  {aboutUsIntro.titleAccent}
                </span>
              </LineReveal>
            </h3>

            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-16">
              {aboutUsIntro.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={0.2 + i * 0.15}>
                  <p
                    className="font-body text-[13.5px] font-light leading-[2.15]"
                    style={{ color: d1.taupe }}
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5} className="mt-14">
              <D1Button href="/about" variant="dark">
                Our Story
              </D1Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
