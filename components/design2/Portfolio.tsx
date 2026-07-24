'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects, type Project } from '@/lib/projects';
import { isLocalImage } from '@/lib/images';
import { d2Ease, d2Viewport } from './shared';

const shown = projects.filter((p) => isLocalImage(p.image));
const featured = shown.find((p) => p.featured) ?? shown[0];
const supporting = shown.filter((p) => p.slug !== featured?.slug);

const ease = d2Ease;

function ProjectCard({
  project,
  index,
  featured: isFeatured = false,
  activeSlug,
  onToggle,
}: {
  project: Project;
  index: number;
  featured?: boolean;
  activeSlug: string | null;
  onToggle: (slug: string) => void;
}) {
  const reduceMotion = useReducedMotion();
  const isActive = activeSlug === project.slug;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={d2Viewport}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : (index % 4) * 0.08,
        ease,
      }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="
          group relative block h-full overflow-hidden
          rounded-[20px] md:rounded-3xl
          border border-[rgba(63,57,48,0.08)]
          bg-[#111]
          shadow-[0_18px_40px_-24px_rgba(63,57,48,0.28)]
          transition-all duration-500 ease-out
          hover:-translate-y-1
          hover:shadow-[0_28px_50px_-22px_rgba(63,57,48,0.38)]
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E]
          motion-reduce:transform-none
        "
        onClick={(e) => {
          // Mobile: first tap reveals overlay; second tap follows link
          if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
            if (!isActive) {
              e.preventDefault();
              onToggle(project.slug);
            }
          }
        }}
      >
        <div
          className={`
            relative w-full overflow-hidden
            ${
              isFeatured
                ? 'aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] lg:min-h-[32rem] xl:min-h-[36rem]'
                : 'aspect-[4/5] h-[280px] sm:h-auto sm:min-h-0 md:aspect-[4/5]'
            }
          `}
        >
          <Image
            src={project.image}
            alt={`${project.name} — ${project.type}, ${project.location}`}
            fill
            sizes={
              isFeatured
                ? '(min-width: 1024px) 55vw, 100vw'
                : '(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw'
            }
            quality={90}
            loading="lazy"
            className="
              object-cover transition-transform duration-500 ease-out
              group-hover:scale-105 group-hover:brightness-105
              motion-reduce:transform-none
            "
          />

          {/* Dark luxury overlay */}
          <div
            className={`
              absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10
              transition-opacity duration-500
              ${
                isActive
                  ? 'opacity-100'
                  : 'opacity-70 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100'
              }
            `}
          />

          {/* Project details overlay — bottom left */}
          <div
            className={`
              absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 lg:p-8
              transition-all duration-500 ease-out
              ${
                isActive
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-3 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100'
              }
              motion-reduce:transform-none
            `}
          >
            <p className="font-body text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
              {project.type}
              {project.location ? ` · ${project.location}` : ''}
            </p>
            <h3 className="mt-2 font-display text-[22px] font-normal leading-tight text-white sm:text-[24px] lg:text-[28px]">
              {project.name}
            </h3>
            <p className="mt-1 font-body text-[12px] text-white/55">{project.year}</p>

            <span
              aria-hidden
              className="mt-4 block h-px w-10 origin-left bg-[#9C6F4E] transition-all duration-500 group-hover:w-14"
            />

            <span className="mt-4 inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              View Project
              <ArrowRight
                size={14}
                strokeWidth={1.75}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/**
 * Project Portfolio — luxury editorial showcase.
 * Images, titles, meta, and links are preserved.
 */
export function D2Portfolio() {
  const reduceMotion = useReducedMotion();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  if (!featured) return null;

  const sideProjects = supporting.slice(0, 2);
  const remaining = supporting.slice(2);

  const toggle = (slug: string) => {
    setActiveSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative scroll-mt-20 overflow-hidden text-[#3F3930]"
      style={{
        background: `
          radial-gradient(ellipse 55% 40% at 85% 10%, rgba(156,111,78,0.06) 0%, transparent 55%),
          linear-gradient(180deg, #FAF8F5 0%, #F3EFE8 48%, #FAF8F5 100%)
        `,
      }}
    >
      <div
        className="
          mx-auto w-full max-w-[1600px]
          px-6 py-[70px]
          md:px-12 md:py-[100px]
          lg:px-20 lg:py-[140px]
        "
      >
        {/* Editorial header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            id="portfolio-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={d2Viewport}
            transition={{ duration: 0.7, ease }}
            className="font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.75rem)]"
          >
            Project Portfolio
          </motion.h2>
        </div>

        {/* Featured + side stack */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:gap-7 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <ProjectCard
              project={featured}
              index={0}
              featured
              activeSlug={activeSlug}
              onToggle={toggle}
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-7 lg:col-span-5 lg:gap-8">
            {sideProjects.map((project, i) => (
              <div key={project.slug} className="min-h-0 flex-1">
                <ProjectCard
                  project={project}
                  index={i + 1}
                  activeSlug={activeSlug}
                  onToggle={toggle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Remaining projects */}
        {remaining.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-7 md:gap-7 lg:mt-8 lg:grid-cols-3 lg:gap-8">
            {remaining.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i + 3}
                activeSlug={activeSlug}
                onToggle={toggle}
              />
            ))}
          </div>
        ) : null}

        {/* CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.15, ease }}
          className="mt-14 flex justify-center md:mt-16 lg:mt-20"
        >
          <Link
            href="/projects"
            className="group inline-flex h-12 w-full shrink-0 items-center justify-center gap-2.5 box-border rounded-sm border border-[rgba(63,57,48,0.22)] bg-transparent px-8 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3F3930] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9C6F4E]/50 hover:bg-[#9C6F4E] hover:text-[#FAF8F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E] sm:w-auto sm:min-w-[12.5rem]"
          >
            View All Projects
            <ArrowRight
              size={14}
              strokeWidth={1.75}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
