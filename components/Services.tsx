'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={containerRef}
      className="section-y bg-luxury-black"
    >
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 sm:mb-16 lg:mb-24 gap-4 sm:gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label-uppercase text-gold-300 mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-fluid-h2 text-white text-balance"
            >
              Design{' '}
              <span className="italic font-light text-gradient-gold-inline">
                Services
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/services" className="btn-outline-gold w-full sm:w-auto lg:inline-flex">
              Explore All Services
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="card-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group glass p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-gold-400/30 hover:bg-white/[0.06]"
            >
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold-400/50 transition-colors duration-500">
                <service.icon
                  size={22}
                  className="text-gray-400 group-hover:text-gold-300 transition-colors duration-500"
                />
              </div>

              <h3 className="font-display text-fluid-h3 text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
