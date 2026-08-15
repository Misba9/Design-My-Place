'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TeamPortrait } from '@/components/TeamPortrait';
import { teamLead, teamSection } from '@/lib/team';

type TeamSectionProps = {
  showStudioLink?: boolean;
  className?: string;
};

export function TeamSection({ showStudioLink = true, className }: TeamSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <section
      id="meet-our-team"
      ref={containerRef}
      className={`relative section-y bg-luxury-black overflow-hidden ${className ?? ''}`}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] aspect-[2/1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(176,141,87,0.1) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-full max-w-[500px] aspect-square pointer-events-none translate-x-1/4 translate-y-1/4"
        style={{
          background:
            'radial-gradient(circle, rgba(176,141,87,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="container-site relative">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label-uppercase text-gold-300 mb-4 sm:mb-6"
            >
              {teamSection.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-fluid-h2 text-white text-balance mb-4 sm:mb-5"
            >
              {teamSection.title}{' '}
              <span className="italic font-light text-gradient-gold-inline">
                {teamSection.titleAccent}
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-400 font-light leading-relaxed text-sm sm:text-base"
            >
              {teamSection.intro}
            </motion.p>
          </div>

          {showStudioLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="shrink-0"
            >
              <Link href="/studio" className="btn-outline-gold group w-full sm:w-auto">
                <span>Our Studio</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Featured — CREATIVE DIRECTOR & FOUNDER */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative glass border border-white/10 hover:border-gold-400/30 transition-all duration-700 mb-14 sm:mb-16 lg:mb-20 overflow-hidden"
        >
          {/* Gold accent bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

          <div className="grid lg:grid-cols-12 gap-0 lg:items-stretch">
            {/* Portrait */}
            <div className="lg:col-span-5 relative lg:h-full">
              <TeamPortrait
                member={teamLead}
                variant="lead"
                priority
                className="h-full"
                imageClassName="group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-luxury-black/40 pointer-events-none" />

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-400/40 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-400/40 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="lg:col-span-7 flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-16">
              <p className="label-uppercase text-gold-300 mb-4 sm:mb-5">
                {teamLead.role}
              </p>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-white leading-[1.08] mb-5 sm:mb-6">
                {teamLead.name}
              </h3>

              {teamLead.bio && (
                <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base lg:text-lg max-w-xl">
                  {teamLead.bio}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
