'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { teamLead, teamMembers, teamSection } from '@/lib/team';

type TeamSectionProps = {
  showStudioLink?: boolean;
};

export function TeamSection({ showStudioLink = true }: TeamSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="meet-our-team"
      ref={containerRef}
      className="relative section-y bg-luxury-black overflow-hidden"
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
              {teamSection.number} — {teamSection.label}
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

        {/* Featured — Chief Designer */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative glass border border-white/10 hover:border-gold-400/30 transition-all duration-700 mb-14 sm:mb-16 lg:mb-20 overflow-hidden"
        >
          {/* Gold accent bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

          <div className="grid lg:grid-cols-12 gap-0">
            {/* Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[480px] overflow-hidden">
                <Image
                  src={teamLead.image}
                  alt={teamLead.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-luxury-black/40" />

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-400/40" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-400/40" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-16 relative">
              <span
                aria-hidden
                className="absolute top-6 right-6 sm:top-8 sm:right-8 font-display text-[5rem] sm:text-[6rem] leading-none text-gold-500/[0.06] select-none pointer-events-none"
              >
                01
              </span>

              <p className="label-uppercase text-gold-300 mb-4 sm:mb-5">
                {teamLead.role}
              </p>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-white leading-[1.08] mb-6 sm:mb-8">
                {teamLead.name}
              </h3>

              {teamLead.bio && (
                <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base lg:text-lg max-w-xl mb-8 sm:mb-10">
                  {teamLead.bio}
                </p>
              )}

              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <div className="border-l border-gold-400/60 pl-4">
                  <p className="font-display text-xl sm:text-2xl text-white">6+</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300 mt-0.5">
                    Team Members
                  </p>
                </div>
                <div className="border-l border-gold-400/60 pl-4">
                  <p className="font-display text-xl sm:text-2xl text-white">Bengaluru</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300 mt-0.5">
                    Studio HQ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {teamMembers.map((member, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.35 + index * 0.07 }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`group relative glass border transition-all duration-500 overflow-hidden cursor-default ${
                  isActive
                    ? 'border-gold-400/40 bg-white/[0.06] shadow-[0_8px_40px_rgba(176,141,87,0.1)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Left gold sweep */}
                <div
                  className={`absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-gold-400/0 via-gold-400 to-gold-400/0 transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                />

                {/* Portrait */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover object-top transition-all duration-700 ${
                      isActive ? 'scale-105' : 'group-hover:scale-[1.04]'
                    }`}
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent transition-opacity duration-500 ${
                      isActive ? 'opacity-90' : 'opacity-70 group-hover:opacity-80'
                    }`}
                  />

                  {/* Role overlay on hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 transition-all duration-500 ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-100'
                    }`}
                  >
                    <p
                      className={`label-uppercase text-[9px] sm:text-[10px] mb-1.5 transition-colors duration-500 ${
                        isActive ? 'text-gold-300' : 'text-gold-300/70'
                      }`}
                    >
                      {member.role}
                    </p>
                    <h4 className="font-display text-base sm:text-lg lg:text-xl text-white leading-tight">
                      {member.name}
                    </h4>
                  </div>
                </div>

                {/* Index watermark */}
                <span
                  aria-hidden
                  className={`absolute top-3 right-3 font-display text-lg sm:text-xl leading-none transition-colors duration-500 ${
                    isActive ? 'text-gold-400/40' : 'text-white/[0.08] group-hover:text-gold-400/20'
                  }`}
                >
                  {String(index + 2).padStart(2, '0')}
                </span>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
