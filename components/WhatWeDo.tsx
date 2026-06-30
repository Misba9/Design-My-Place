'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ClipboardList,
  MessageSquare,
  MonitorPlay,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import { whatWeDo } from '@/lib/about';

const serviceIcons: LucideIcon[] = [
  MessageSquare,
  ClipboardList,
  Wallet,
  MonitorPlay,
];

export function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="what-we-do"
      ref={containerRef}
      className="relative section-y bg-luxury-gray overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-full max-w-[700px] aspect-square pointer-events-none translate-x-1/4 -translate-y-1/4"
        style={{
          background:
            'radial-gradient(circle, rgba(176,141,87,0.12) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full max-w-[500px] aspect-square pointer-events-none -translate-x-1/3 translate-y-1/3"
        style={{
          background:
            'radial-gradient(circle, rgba(176,141,87,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-start">
          {/* Left — sticky intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 xl:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute -top-6 -left-2 font-display text-[7rem] sm:text-[8rem] leading-none text-gold-500/[0.07] select-none pointer-events-none"
              >
                {whatWeDo.number}
              </span>

              <p className="label-uppercase text-gold-300 mb-4 relative">
                {whatWeDo.number} — {whatWeDo.label}
              </p>
              <h2 className="font-display text-fluid-h2 text-white text-balance mb-5 sm:mb-6 relative">
                What We{' '}
                <span className="italic font-light text-gradient-gold-inline">Do</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base max-w-sm mb-8 relative">
                From first consultation to digital renders — a full-service approach
                to transforming homes and offices across India.
              </p>

              <div className="hidden lg:flex items-center gap-4 relative">
                <Link href="/services" className="btn-outline-gold group">
                  <span>All Services</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-[0.18em] text-gray-500 hover:text-gold-300 transition-colors duration-300"
                >
                  Book consultation →
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right — interactive service list */}
          <div className="lg:col-span-8">
            <div className="space-y-4 sm:space-y-5">
              {whatWeDo.items.map((item, index) => {
                const Icon = serviceIcons[index] ?? MessageSquare;
                const isActive = activeIndex === index;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.12 + index * 0.1 }}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`group relative glass border transition-all duration-500 cursor-default overflow-hidden ${
                      isActive
                        ? 'border-gold-400/40 bg-white/[0.06] shadow-[0_8px_40px_rgba(176,141,87,0.08)]'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Hover gold sweep */}
                    <div
                      className={`absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-gold-400/0 via-gold-400 to-gold-400/0 transition-all duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                      }`}
                    />

                    <div className="p-6 sm:p-8 lg:p-9 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 sm:gap-6 lg:gap-8 items-start">
                      {/* Icon + number */}
                      <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-5">
                        <div
                          className={`relative w-12 h-12 sm:w-14 sm:h-14 border flex items-center justify-center shrink-0 transition-all duration-500 ${
                            isActive
                              ? 'border-gold-400/50 bg-gold-400/10'
                              : 'border-white/10 bg-white/[0.02] group-hover:border-gold-400/30'
                          }`}
                        >
                          <Icon
                            size={22}
                            className={`transition-colors duration-500 ${
                              isActive ? 'text-gold-300' : 'text-gray-500 group-hover:text-gold-400/80'
                            }`}
                          />
                        </div>
                        <span
                          className={`font-display text-3xl sm:text-4xl leading-none transition-colors duration-500 ${
                            isActive ? 'text-gold-400/50' : 'text-white/[0.06] group-hover:text-gold-400/25'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6 mb-3 sm:mb-4">
                          <h3
                            className={`font-display text-xl sm:text-2xl lg:text-[1.65rem] leading-snug transition-colors duration-500 ${
                              isActive ? 'text-white' : 'text-ivory-100/90'
                            }`}
                          >
                            {item.title}
                          </h3>
                          <ArrowRight
                            size={18}
                            className={`hidden sm:block shrink-0 mt-1 transition-all duration-500 ${
                              isActive
                                ? 'text-gold-300 translate-x-0 opacity-100'
                                : 'text-gray-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                            }`}
                          />
                        </div>
                        <p
                          className={`font-light leading-relaxed text-sm sm:text-base transition-colors duration-500 ${
                            isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:hidden"
            >
              <Link href="/services" className="btn-outline-gold group w-full sm:w-auto justify-center">
                <span>All Services</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <Link href="/contact" className="btn-gold group w-full sm:w-auto justify-center">
                <span>Book Consultation</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
