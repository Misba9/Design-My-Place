'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Projects Completed', value: 25, suffix: '+' },
  { label: 'Years of Experience', value: 5, suffix: '+' },
  { label: 'Cities Served', value: 12, suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * value);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
      {displayValue}
      <span className="text-gold-400">{suffix}</span>
    </span>
  );
}

export function Statistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      className="section-y bg-luxury-black relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 30% at 25% 50%, rgba(184, 134, 11, 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="container-site relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="text-center lg:text-left"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
