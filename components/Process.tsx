'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '@/lib/process';

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="process"
      ref={containerRef}
      className="py-24 lg:py-32 bg-luxury-gray"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label-uppercase text-gold-400 mb-6"
            >
              How We Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white"
            >
              Our{' '}
              <span className="italic font-light text-gradient-gold-inline">
                Process
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/process" className="btn-outline-gold hidden lg:inline-flex">
              Learn More
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-ivory-200/10 hidden md:block" />

          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.15,
                }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${
                  index % 2 === 0 ? '' : 'lg:text-right'
                }`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'
                  }`}
                >
                  <div className="mb-6 relative inline-block">
                    <span className="text-6xl lg:text-7xl font-display text-gold-500/15">
                      {step.number}
                    </span>
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold-500/60 border-4 border-charcoal-900 z-10 -translate-x-1/2 left-full ml-8" />
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed max-w-lg font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
