'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { howWeWork, processSteps } from '@/lib/process';

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="how-we-work" ref={containerRef} className="relative section-y bg-luxury-gray overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] aspect-[2/1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(176,141,87,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label-uppercase text-gold-400 mb-4 sm:mb-6"
          >
            {howWeWork.number} — {howWeWork.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-fluid-h2 text-white text-balance"
          >
            Our{' '}
            <span className="italic font-light text-gradient-gold-inline">
              Process
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.06 }}
              className={`group glass border border-white/10 p-6 sm:p-7 hover:border-gold-400/35 hover:bg-white/[0.05] transition-all duration-500 ${
                index === processSteps.length - 1
                  ? 'sm:col-span-2 lg:col-span-1 xl:col-span-1'
                  : ''
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="font-display text-3xl text-gold-500/20 group-hover:text-gold-400/35 transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-white mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
