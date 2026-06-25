'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Building2, Warehouse, Briefcase, Palette, Sofa } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Interiors',
    description: 'Complete home transformations that reflect your lifestyle and aspirations.',
  },
  {
    icon: Building2,
    title: 'Luxury Apartments',
    description: 'Sophisticated urban living spaces designed for modern life.',
  },
  {
    icon: Warehouse,
    title: 'Villa Design',
    description: 'Expansive residences crafted with architectural sensitivity.',
  },
  {
    icon: Briefcase,
    title: 'Commercial Interiors',
    description: 'Workspaces that inspire productivity and reflect brand identity.',
  },
  {
    icon: Palette,
    title: 'Workspace Design',
    description: 'Offices and studios designed for creativity and collaboration.',
  },
  {
    icon: Sofa,
    title: 'Renovation & Styling',
    description: 'Breathing new life into existing spaces with refined touches.',
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-28 lg:py-36 bg-luxury-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
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
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-[-0.015em]"
          >
            Design{' '}
            <span className="italic font-light text-gradient-gold-inline">
              Services
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group glass p-8 lg:p-10 transition-all duration-500 hover:border-gold-400/30 hover:bg-white/[0.06]"
            >
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold-400/50 transition-colors duration-500">
                <service.icon
                  size={22}
                  className="text-gray-400 group-hover:text-gold-300 transition-colors duration-500"
                />
              </div>

              <h3 className="font-display text-[1.3rem] text-white mb-3">
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
