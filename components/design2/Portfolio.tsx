'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';
import { isLocalImage } from '@/lib/images';
import { d2, d2Ease, D2Reveal, d2Viewport } from './shared';

const shown = projects.filter((p) => isLocalImage(p.image));

/**
 * Slide 7 — 03 Project Portfolio.
 * Three-column editorial grid; small serif meta (year / name / location)
 * sits above each photo. Current website projects, presentation layout.
 */
export function D2Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20" style={{ background: d2.bg, color: d2.ink }}>
      <div className="mx-auto max-w-[100rem] px-6 pb-24 pt-20 sm:px-10 lg:px-16 lg:pb-32 lg:pt-28">

        <D2Reveal className="pt-0 lg:pt-0">
          <h2 className="text-center font-body font-light leading-none tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,4.75rem)]">
            03 Project Portfolio
          </h2>
        </D2Reveal>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-14 gap-y-16 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-y-20">
          {shown.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: d2Ease }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div
                  className="mb-4 font-display text-[15px] font-medium leading-[1.55]"
                  style={{ color: d2.ink }}
                >
                  {project.year}
                  <br />
                  {project.name}
                  <br />
                  <span style={{ color: d2.body }}>{project.location}</span>
                </div>
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.type}, ${project.location}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <D2Reveal className="mt-20 text-center lg:mt-24">
          <Link
            href="/projects"
            className="inline-block border px-10 py-4 font-body text-[12px] font-medium uppercase tracking-[0.28em] transition-colors duration-500 hover:bg-[#3F3930] hover:text-[#F0EDEB]"
            style={{ borderColor: 'rgba(63,57,48,0.4)', color: d2.ink }}
          >
            View All Projects
          </Link>
        </D2Reveal>
      </div>
    </section>
  );
}
