'use client';

import { motion } from 'framer-motion';
import { ContentImage } from '@/components/ContentImage';
import { HERO_IMAGE } from '@/lib/images';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const heroStats = [
  { value: '25+', label: 'Projects Completed' },
  { value: '5+', label: 'Years Experience' },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] min-h-[28rem] flex-col justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 ken-burns">
          <ContentImage
            src={HERO_IMAGE}
            alt="Luxury interior design by Design My Place — Bangalore and Delhi NCR"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AJOk6hp2nWqXNjbxzQtkqwyCP0qK4u7e7t2guoFljP3lYZqKqKKKKAP//Z"
          />
        </div>
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

      <div className="relative z-10 w-full container-site py-24 sm:py-28 lg:py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="label-uppercase text-gold-300 mb-3 sm:mb-4 lg:mb-5 text-[10px] xs:text-[11px] max-w-md mx-auto"
        >
          Luxury Interior Design · Bangalore & Delhi NCR
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-fluid-hero text-white mb-4 lg:mb-6 text-balance max-w-4xl mx-auto"
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
          className="text-gray-300/95 text-fluid-body font-light max-w-2xl mx-auto mb-8 lg:mb-10 text-balance"
        >
          We create interiors grounded in research, emotion, functionality, and
          timeless aesthetics — spaces that shape how you live, work, and feel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="btn-group max-w-md sm:max-w-none mx-auto"
        >
          <Link href="/contact" className="btn-gold group">
            <span>Book Consultation</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
          <Link href="/projects" className="btn-outline-gold group">
            <span>Explore Projects</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>

      {/* Stats — visible on all screens; compact on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 w-full container-site pb-6 sm:pb-8 lg:pb-10 safe-bottom"
      >
        <div className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-12 border-t border-white/10 pt-6 sm:pt-8">
          {heroStats.map((stat) => (
            <div key={stat.label} className="border-l border-gold-400/60 pl-4 sm:pl-5 text-left">
              <p className="font-display text-2xl sm:text-3xl text-gold-300 mb-0.5 sm:mb-1">
                {stat.value}
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
