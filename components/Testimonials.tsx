'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ContentImage } from '@/components/ContentImage';
import { Quote } from 'lucide-react';
import { testimonials, trustBadges, googleReviewsUrl } from '@/lib/testimonials';

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="section-y bg-luxury-gray">
      <div className="container-site">
        <div className="mb-12 sm:mb-16 lg:mb-24 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label-uppercase text-gold-400/70 mb-6"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-fluid-h2 text-ivory-100 text-balance"
          >
            Words from <span className="italic font-light">Clients</span>
          </motion.h2>
        </div>

        <div className="card-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
              }}
              className="group relative glass p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-gold-400/20"
            >
              {/* Quote Icon */}
              <Quote
                size={32}
                className="text-gold-500/20 mb-6"
              />

              {/* Quote Text */}
              <blockquote className="text-ivory-300/80 text-lg leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative border border-ivory-200/10">
                  <ContentImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="56px"
                    compactPlaceholder
                  />
                </div>
                <div>
                  <p className="text-ivory-100 font-body text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-ivory-400/50 text-xs mt-1">
                    {testimonial.project} · {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-ivory-200/5"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {trustBadges.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl lg:text-4xl text-gold-400">{stat.value}</p>
                <p className="label-uppercase text-ivory-400/50 mt-1">{stat.label}</p>
              </div>
            ))}
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-ivory-400/50 hover:text-gold-300 transition-colors"
            >
              Google Reviews →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
