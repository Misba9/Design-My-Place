'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const heroStats = [
  { value: '75+', label: 'Projects Completed' },
  { value: '150+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-[620px] h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 ken-burns">
          <Image
            src="/hero-luxury.jpg"
            alt="Luxury interior design"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Overlay stack */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-luxury-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.04) 35%, rgba(0,0,0,0.35) 100%)',
          }}
        />
        <div className="absolute inset-0 gold-shimmer" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 text-center -translate-y-10 sm:-translate-y-12 lg:-translate-y-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="label-uppercase text-gold-300 mb-4 lg:mb-5 text-[11px]"
        >
          Ultra-Premium Interior Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.3rem] text-white mb-4 lg:mb-6 leading-[1.04] tracking-[-0.02em]"
        >
          Designing{' '}
          <span className="italic font-light text-gradient-gold-inline">
            Meaningful
          </span>
          <br />
          Spaces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300/95 text-lg font-light max-w-2xl mx-auto mb-8 lg:mb-10 leading-relaxed"
        >
          We create interiors grounded in research, emotion, functionality, and
          timeless aesthetics — spaces that shape how you live, work, and feel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link href="#contact" className="btn-gold group">
            <span>Book Consultation</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
          <Link href="#projects" className="btn-outline-gold group">
            <span>Explore Projects</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-10">
          <div className="flex items-center justify-center gap-12 border-t border-white/10 pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-l border-gold-400/60 pl-5">
                <p className="font-display text-3xl text-gold-300 mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
