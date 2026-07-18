'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/lib/services';
import { D1Label, LineReveal, Reveal, d1, d1Ease, d1Viewport } from './shared';

function ServiceRow({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={d1Viewport}
      transition={{ duration: 0.9, delay: index * 0.06, ease: d1Ease }}
      className="group border-b"
      style={{ borderColor: 'rgba(250,248,243,0.12)' }}
    >
      <Link
        href="/services"
        className="grid grid-cols-1 items-baseline gap-3 py-9 transition-colors duration-500 sm:grid-cols-12 sm:gap-8 lg:py-12"
      >
        <span
          className="font-body text-[11px] tracking-[0.25em] sm:col-span-1"
          style={{ color: d1.gold }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-display text-3xl font-light text-[#FAF8F3] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 sm:col-span-5 sm:text-4xl lg:text-5xl">
          {title}
        </span>
        <span className="font-body text-[13px] font-light leading-[1.9] text-[#DDD4C1]/60 transition-colors duration-500 group-hover:text-[#DDD4C1] sm:col-span-5">
          {description}
        </span>
        <span
          aria-hidden
          className="hidden justify-self-end font-body text-lg text-[#FAF8F3]/0 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#FAF8F3] sm:col-span-1 sm:block"
        >
          →
        </span>
      </Link>
    </motion.li>
  );
}

export function D1Services() {
  return (
    <section style={{ background: d1.charcoal, color: '#FAF8F3' }}>
      <div className="mx-auto max-w-[100rem] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <D1Label light>
          What We Do
        </D1Label>

        <div className="mt-14 lg:mt-20">
          <h2 className="max-w-4xl font-display font-light leading-[1.06] text-[clamp(2.5rem,5vw,4.75rem)]">
            <LineReveal>From first sketch</LineReveal>
            <LineReveal delay={0.1}>
              to <span className="italic" style={{ color: d1.gold }}>final styling</span>
            </LineReveal>
          </h2>
        </div>

        <ul
          className="mt-20 border-t lg:mt-28"
          style={{ borderColor: 'rgba(250,248,243,0.12)' }}
        >
          {services.map((service, i) => (
            <ServiceRow
              key={service.title}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </ul>

        <Reveal className="mt-16 flex justify-end">
          <Link
            href="/services"
            className="group inline-flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-[#DDD4C1] transition-colors duration-500 hover:text-white"
          >
            Explore All Services
            <span
              aria-hidden
              className="block h-px w-10 bg-current transition-all duration-500 group-hover:w-16"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
