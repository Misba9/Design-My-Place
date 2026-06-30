'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { priceList, priceListSection } from '@/lib/pricing';

type PriceListProps = {
  className?: string;
  showCta?: boolean;
};

export function PriceList({ className = 'bg-luxury-black', showCta = true }: PriceListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="price-list"
      ref={containerRef}
      className={`section-y ${className}`}
    >
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 sm:mb-16 lg:mb-20 gap-4 sm:gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label-uppercase text-gold-300 mb-4"
            >
              {priceListSection.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-fluid-h2 text-white text-balance"
            >
              {priceListSection.title}{' '}
              <span className="italic font-light text-gradient-gold-inline">
                {priceListSection.titleAccent}
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-400 font-light max-w-md leading-relaxed text-sm sm:text-base"
          >
            {priceListSection.intro}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {priceList.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
              className="group glass p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-gold-400/35 hover:bg-white/[0.04] transition-all duration-500 flex flex-col"
            >
              <p className="label-uppercase text-gold-300/80 mb-4 text-[10px]">
                {tier.title}
              </p>
              <div className="mb-5 sm:mb-6">
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-white leading-none mb-2">
                  {tier.amount}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold-300">
                  {tier.unit}
                </p>
              </div>
              <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base mt-auto">
                {tier.description}
              </p>
            </motion.div>
          ))}
        </div>

        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 sm:mt-12 text-center"
          >
            <Link href="/contact" className="btn-gold group">
              <span>Request a Quote</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
