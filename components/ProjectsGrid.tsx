'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects, projectTypes, type Project } from '@/lib/projects';
import {
  d2BtnOutline,
  d2Ease,
  d2Viewport,
} from '@/components/design2/shared';

function ProjectCard({
  project,
  index,
  tall = false,
}: {
  project: Project;
  index: number;
  tall?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={d2Viewport}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : (index % 6) * 0.06,
        ease: d2Ease,
      }}
      className={tall ? 'md:row-span-2' : undefined}
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
          if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
            if (!active) {
              e.preventDefault();
              setActive(true);
            }
          }
        }}
      >
        <div
          className={`relative w-full overflow-hidden ${
            tall
              ? 'aspect-[3/4] min-h-[320px] md:aspect-auto md:h-full md:min-h-[540px]'
              : 'aspect-[4/5] sm:aspect-[5/4]'
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.name} — ${project.type}, ${project.location}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            quality={90}
            loading="lazy"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
          />

          <div
            className={`
              absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent
              transition-opacity duration-500
              ${active ? 'opacity-100' : 'opacity-100 md:opacity-0 md:group-hover:opacity-100'}
            `}
          />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-sm border border-white/20 bg-black/30 px-3 py-1 font-body text-[9px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              {project.type}
            </span>
            {project.featured ? (
              <span className="rounded-sm bg-[#9C6F4E] px-3 py-1 font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-[#FAF8F5]">
                Featured
              </span>
            ) : null}
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <h3 className="font-display text-[20px] font-medium leading-snug text-white sm:text-[22px]">
              {project.name}
            </h3>
            <p className="mt-2 font-body text-[12px] tracking-[0.04em] text-white/70">
              {project.location}
              <span className="mx-2 inline-block h-1 w-1 rounded-full bg-[#9C6F4E]/80 align-middle" />
              {project.year}
            </p>
            <span
              className={`
                mt-4 inline-flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-white
                transition-all duration-300
                ${active ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0'}
              `}
            >
              View Project
              <ArrowRight size={13} strokeWidth={1.75} aria-hidden />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

type ProjectsGridProps = {
  showFilters?: boolean;
  limit?: number;
  showViewAll?: boolean;
};

export function ProjectsGrid({
  showFilters = false,
  limit,
  showViewAll = false,
}: ProjectsGridProps) {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {showFilters ? (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 0.6, ease: d2Ease }}
          className="mb-10 flex flex-wrap gap-2 sm:mb-12 sm:gap-3 lg:mb-14"
          role="tablist"
          aria-label="Filter projects by type"
        >
          {projectTypes.map((type) => {
            const isActive = activeFilter === type;
            return (
              <button
                key={type}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(type)}
                className={`
                  min-h-11 rounded-sm border px-4 py-2.5 font-body text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:px-5
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E]
                  ${
                    isActive
                      ? 'border-[#9C6F4E] bg-[#9C6F4E] text-[#FAF8F5]'
                      : 'border-[rgba(63,57,48,0.18)] bg-transparent text-[#3F3930] hover:border-[#9C6F4E]/50'
                  }
                `}
              >
                {type}
              </button>
            );
          })}
        </motion.div>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
        {displayed.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            tall={index % 5 === 0}
          />
        ))}
      </div>

      {showViewAll ? (
        <div className="mt-12 text-center lg:hidden">
          <Link href="/projects" className={`group ${d2BtnOutline}`}>
            <span>View All Projects</span>
            <ArrowRight size={14} strokeWidth={1.75} aria-hidden />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
