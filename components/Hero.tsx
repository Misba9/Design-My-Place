'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const heroStats = [
  { value: '75+', label: 'Projects Completed' },
  { value: '150+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Experience' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-[600px] h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 ken-burns">
          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury interior design"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Overlay stack */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-luxury-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
          }}
        />
        <div className="absolute inset-0 gold-shimmer" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="label-uppercase text-gold-400 mb-6 lg:mb-8 text-sm"
        >
          Ultra-Premium Interior Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 lg:mb-8 leading-[1.05] tracking-tight"
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
          className="text-gray-300 text-lg font-light max-w-2xl mx-auto mb-10 lg:mb-12 leading-relaxed"
        >
          We create interiors grounded in research, emotion, functionality, and
          timeless aesthetics — spaces that shape how you live, work, and feel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
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
          <div className="flex items-center gap-16 border-t border-white/10 pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold-400 pl-6">
                <p className="font-display text-3xl text-gold-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
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
