'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProjectsGrid } from '@/components/ProjectsGrid';

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="project-portfolio"
      ref={containerRef}
      className="relative section-y bg-luxury-black overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] aspect-[2/1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(176,141,87,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 sm:mb-16 lg:mb-24 gap-4 sm:gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label-uppercase text-gold-300 mb-4"
            >
              Project Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-fluid-h2 text-white text-balance"
            >
              Featured{' '}
              <span className="italic font-light text-gradient-gold-inline">
                Projects
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/projects" className="btn-outline-gold hidden lg:inline-flex">
              View All Projects
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <ProjectsGrid limit={6} showViewAll />
      </div>
    </section>
  );
}
