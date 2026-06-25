'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects, projectTypes, type Project } from '@/lib/projects';

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative bg-luxury-gray/90 border border-white/10 overflow-hidden card-hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative h-80 overflow-hidden img-hover-zoom">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          <div className="absolute top-4 left-4">
            <span className="glass px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/90">
              {project.type}
            </span>
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-gold-400 text-luxury-black px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-semibold">
                Featured
              </span>
            </div>
          )}

          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="btn-gold text-[10px] py-3 px-6">
              View Project
              <ArrowRight size={14} />
            </span>
          </div>
        </div>

        <div className="p-7">
          <h3 className="font-display text-[1.35rem] text-white mb-2">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm flex items-center gap-3">
            <span>{project.location}</span>
            <span className="w-1 h-1 rounded-full bg-gold-400/50" />
            <span>{project.year}</span>
          </p>
        </div>
      </Link>
    </motion.div>
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div ref={containerRef}>
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12 lg:mb-16"
        >
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.14em] font-medium transition-all duration-300 border ${
                activeFilter === type
                  ? 'border-gold-400/70 text-gold-300 bg-gold-400/10'
                  : 'border-white/10 text-gray-400 hover:border-gold-400/40 hover:text-gold-300'
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayed.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {showViewAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center lg:hidden"
        >
          <Link href="/projects" className="btn-outline-gold">
            View All Projects
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
