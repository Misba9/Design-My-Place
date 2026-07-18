'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';
import { isLocalImage } from '@/lib/images';
import { D1Button, D1Label, LineReveal, Reveal, d1, d1Ease, d1Viewport } from './shared';

const featured = projects.filter((p) => isLocalImage(p.image)).slice(0, 5);

/** Editorial column layout — alternating widths and vertical offsets. */
const layouts = [
  { span: 'lg:col-span-7', aspect: 'aspect-[4/3]', offset: '' },
  { span: 'lg:col-span-4 lg:col-start-9', aspect: 'aspect-[3/4]', offset: 'lg:mt-40' },
  { span: 'lg:col-span-5', aspect: 'aspect-[3/4]', offset: 'lg:-mt-24' },
  { span: 'lg:col-span-6 lg:col-start-7', aspect: 'aspect-[4/3]', offset: 'lg:mt-24' },
  { span: 'lg:col-span-8 lg:col-start-3', aspect: 'aspect-[16/9]', offset: 'lg:mt-16' },
];

function ProjectTile({
  project,
  layout,
  index,
}: {
  project: (typeof featured)[number];
  layout: (typeof layouts)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={d1Viewport}
      transition={{ duration: 1.1, ease: d1Ease }}
      className={`${layout.span} ${layout.offset} col-span-1`}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className={`relative w-full overflow-hidden ${layout.aspect}`}>
          <Image
            src={project.image}
            alt={`${project.name} — ${project.type}, ${project.location}`}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            loading="lazy"
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/15"
          />
          {/* Hover reveal — view project */}
          <div className="absolute bottom-0 left-0 overflow-hidden">
            <span className="block -translate-y-0 translate-x-[-101%] bg-[#FAF8F3] px-6 py-3 font-body text-[10px] font-medium uppercase tracking-[0.3em] text-[#2B2620] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0">
              View Project
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-baseline justify-between gap-6 border-b pb-5" style={{ borderColor: d1.line }}>
          <div>
            <span
              className="mr-4 font-body text-[10px] tracking-[0.25em]"
              style={{ color: d1.gold }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-display text-xl font-light sm:text-2xl" style={{ color: d1.brown }}>
              {project.name}
            </span>
          </div>
          <span
            className="shrink-0 font-body text-[10px] uppercase tracking-[0.25em]"
            style={{ color: d1.taupe }}
          >
            {project.location} — {project.year}
          </span>
        </div>
        <p
          className="mt-3 font-body text-[11px] uppercase tracking-[0.25em]"
          style={{ color: d1.taupe }}
        >
          {project.type}
        </p>
      </Link>
    </motion.div>
  );
}

export function D1FeaturedProjects() {
  return (
    <section style={{ background: d1.bg, color: d1.brown }}>
      <div className="mx-auto max-w-[100rem] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <D1Label index="03">Project Portfolio</D1Label>

        <div className="mt-14 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display font-light leading-[1.02] text-[clamp(3rem,7vw,7rem)]">
            <LineReveal>Selected</LineReveal>
            <LineReveal delay={0.1}>
              <span className="italic" style={{ color: d1.gold }}>Works</span>
            </LineReveal>
          </h2>
          <Reveal delay={0.3} className="max-w-xs lg:pb-4">
            <p
              className="font-body text-[13.5px] font-light leading-[2]"
              style={{ color: d1.taupe }}
            >
              A curated selection of residences across Bangalore, Mumbai, and
              Delhi — each shaped by the people who live in them.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-20 lg:mt-32 lg:grid-cols-12 lg:gap-y-8">
          {featured.map((project, i) => (
            <ProjectTile
              key={project.slug}
              project={project}
              layout={layouts[i % layouts.length]}
              index={i}
            />
          ))}
        </div>

        <Reveal className="mt-24 flex justify-center lg:mt-32">
          <D1Button href="/projects" variant="dark">
            View All Projects
          </D1Button>
        </Reveal>
      </div>
    </section>
  );
}
