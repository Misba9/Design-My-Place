'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We begin by understanding you, your lifestyle, aspirations, and how you want to feel in your space.',
  },
  {
    number: '02',
    title: 'Research',
    description: 'Site analysis, spatial studies, material research, and understanding the context of your project.',
  },
  {
    number: '03',
    title: 'Concept',
    description: 'Developing the design direction through mood boards, sketches, and initial spatial planning.',
  },
  {
    number: '04',
    title: 'Design Development',
    description: 'Detailed drawings, 3D visualizations, material selections, and lighting design.',
  },
  {
    number: '05',
    title: 'Execution',
    description: 'Coordinating with contractors, artisans, and suppliers to bring the design to life.',
  },
  {
    number: '06',
    title: 'Styling & Handover',
    description: 'Final styling, furniture placement, art curation, and the moment we hand over your keys.',
  },
];

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
        {/* Header */}
        <div className="mb-16 lg:mb-24 text-center lg:text-left">
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
            Our <span className="italic font-light text-gradient-gold-inline">Process</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-ivory-200/10 hidden md:block" />

          {/* Steps */}
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
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0
                      ? 'lg:pr-16'
                      : 'lg:col-start-2 lg:pl-16'
                  }`}
                >
                  {/* Number */}
                  <div className="mb-6 relative inline-block">
                    <span className="text-6xl lg:text-7xl font-display text-gold-500/15">
                      {step.number}
                    </span>
                    {/* Gold dot marker */}
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold-500/60 border-4 border-charcoal-900 z-10
                      -translate-x-1/2 left-full ml-8" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl lg:text-3xl text-white mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
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
