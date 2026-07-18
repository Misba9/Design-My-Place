'use client';

import { d2, D2ImageReveal, D2Reveal, slideAsset } from './shared';

/** Step copy exactly as it appears in the presentation. */
const firstSteps = [
  { title: 'Meet', description: 'New client meeting\nBrief understanding' },
  { title: 'Research', description: 'Brainstorming and\npreparation' },
];

const secondSteps = [
  { title: 'Concept', description: 'Overall ideas and style\ngeneration' },
  { title: 'Design', description: 'Layout and\nstyle selection' },
  { title: 'Finalize', description: 'Final design details and\npresentation' },
  { title: 'Create', description: 'Project execution\nwithin budget' },
  { title: 'Install', description: 'Installation and\nfinal touches' },
];

function Step({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <D2Reveal delay={delay}>
      <h3
        className="font-display text-[21px] font-medium"
        style={{ color: d2.cream }}
      >
        {title}
      </h3>
      <p
        className="mt-4 whitespace-pre-line font-body text-[14px] font-normal leading-[1.7]"
        style={{ color: d2.creamMuted }}
      >
        {description}
      </p>
    </D2Reveal>
  );
}

/**
 * Slides 39–40 — 05 How We Work.
 * Two consecutive spreads: photo on top, deep brown band below.
 * First band holds the title plus Meet / Research; the second carries
 * the remaining five steps in a row.
 */
export function D2HowWeWork() {
  return (
    <section id="how-we-work" className="scroll-mt-20">
      {/* Spread one */}
      <D2ImageReveal
        src={slideAsset('how-1')}
        alt="Warm timber armchair with stone lantern on a side table"
        className="aspect-[16/9] w-full sm:aspect-[21/9] lg:aspect-[3.4/1]"
        sizes="100vw"
      />
      <div style={{ background: d2.band }}>
        <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-12 px-6 py-20 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:py-28">
          <D2Reveal className="lg:col-span-6 lg:pl-16">
            <h2
              className="font-body font-light leading-none tracking-[-0.01em] text-[clamp(2.5rem,5vw,4.25rem)]"
              style={{ color: d2.cream }}
            >
              05 How We Work
            </h2>
          </D2Reveal>
          <div className="grid grid-cols-2 gap-10 lg:col-span-6">
            {firstSteps.map((step, i) => (
              <Step key={step.title} {...step} delay={0.15 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* Spread two */}
      <D2ImageReveal
        src={slideAsset('how-2')}
        alt="Woven basket with knitted throw against a brick wall"
        className="aspect-[16/9] w-full sm:aspect-[21/9] lg:aspect-[3.4/1]"
        sizes="100vw"
      />
      <div style={{ background: d2.band }}>
        <div className="mx-auto grid max-w-[100rem] grid-cols-2 gap-x-8 gap-y-12 px-6 py-20 sm:grid-cols-3 sm:px-10 lg:grid-cols-5 lg:px-16 lg:py-28">
          {secondSteps.map((step, i) => (
            <Step key={step.title} {...step} delay={0.1 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
