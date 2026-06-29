'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/Logo';

const stats = [
  { value: '6+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years of Excellence' },
  { value: '12+', label: 'Cities Served' },
  { value: '100%', label: 'Client Satisfaction' },
];

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="studio"
      ref={containerRef}
      className="relative py-28 lg:py-36 bg-luxury-black overflow-hidden"
    >
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(176,141,87,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Logo glass card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass p-10 lg:p-14 flex flex-col items-center justify-center min-h-[420px] bg-luxury-black/40"
          >
            <Logo size="lg" className="justify-center" imageClassName="object-center mx-auto" />
            <p className="mt-8 text-center text-gray-400 text-sm leading-relaxed max-w-xs">
              Creating interiors that shape how people live, work, and feel.
            </p>
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="label-uppercase text-gold-300 mb-6"
            >
              About The Studio
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.08] tracking-[-0.015em]"
            >
              Spaces that hold{' '}
              <span className="italic font-light text-gradient-gold-inline">
                your
              </span>{' '}
              story
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg font-light mb-10 leading-relaxed"
            >
              At Design My Place, we believe interiors are more than aesthetics.
              They are the backdrop to life&apos;s most meaningful moments. Every
              design decision stems from research, emotion, and timeless
              craftsmanship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-14"
            >
              <Link href="/about" className="btn-outline-gold group">
                <span>About Us</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="border-l border-gold-400/65 pl-4 lg:pl-6"
                >
                  <p className="font-display text-2xl lg:text-3xl text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
