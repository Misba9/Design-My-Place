'use client';

import { motion } from 'framer-motion';
import { d2, d2Ease, D2ImageReveal, D2Reveal, d2Viewport, slideAsset } from './shared';

const contents = [
  { label: 'Who we are', index: '01', href: '#about' },
  { label: 'What we do', index: '02', href: '#what-we-do' },
  { label: 'Project portfolio', index: '03', href: '#portfolio' },
  { label: 'How we work', index: '04', href: '#how-we-work' },
  { label: 'Price list', index: '05', href: '#price-list' },
  { label: 'Meet our team', index: '06', href: '#team' },
  { label: 'Get in touch', index: '07', href: '#contact' },
];

/**
 * Slide 3 — Table Of Contents.
 * Centered title, large still-life photo left, numbered list and
 * research paragraph in the right column.
 */
export function D2TableOfContents() {
  return (
    <section style={{ background: d2.bg, color: d2.ink }}>
      <div className="mx-auto max-w-[100rem] px-6 pb-0 pt-20 sm:px-10 lg:px-16 lg:pt-28">

        <D2Reveal className="pb-16 pt-0 lg:pb-24 lg:pt-0">
          <h2 className="text-center font-body font-light leading-none tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,4.75rem)]">
            Table Of Contents
          </h2>
        </D2Reveal>
      </div>

      <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-12 pl-0 lg:grid-cols-12 lg:gap-0">
        {/* Large photo bleeding to the left edge */}
        <div className="lg:col-span-9">
          <D2ImageReveal
            src={slideAsset('toc')}
            alt="Stone and charcoal objects with a dry branch — studio still life"
            className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[2.3/1]"
            sizes="(min-width: 1024px) 75vw, 100vw"
          />
        </div>

        {/* Right rail — contents list top, paragraph bottom */}
        <div
          className="flex flex-col justify-between gap-14 px-6 pb-16 sm:px-10 lg:col-span-3 lg:border-l lg:px-10 lg:pb-4"
          style={{ borderColor: d2.line }}
        >
          <nav aria-label="Page contents">
            <ul className="space-y-2.5">
              {contents.map((item, i) => (
                <motion.li
                  key={item.index}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={d2Viewport}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: d2Ease }}
                >
                  <a
                    href={item.href}
                    className="group flex items-baseline justify-between gap-6 border-b border-transparent py-1 font-body text-[14px] font-normal transition-colors duration-300 hover:border-[rgba(63,57,48,0.25)]"
                    style={{ color: d2.ink }}
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                    <span style={{ color: d2.gold }}>{item.index}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <D2Reveal delay={0.3}>
            <p
              className="max-w-[15rem] font-body text-[14px] font-normal leading-[1.8]"
              style={{ color: d2.body }}
            >
              A research based process where lessons from the past, traditions
              and your lifestyle combines the minimal, nature-inspired clarity
              of the West with the ultra premium textures, warmth, and
              expressive elegance of Indian Craftsmenship
            </p>
          </D2Reveal>
        </div>
      </div>
    </section>
  );
}
