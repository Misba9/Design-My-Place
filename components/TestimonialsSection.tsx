'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ContentImage } from '@/components/ContentImage';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="section-y bg-luxury-gray">
      <div className="container-site">
        <div className="mb-10 sm:mb-16 text-center lg:text-left">
          <p className="label-uppercase text-gold-400/70 mb-4 sm:mb-6">Client Stories</p>
          <h2 className="font-display text-fluid-h2 text-ivory-100 text-balance">
            Words from <span className="italic font-light">Clients</span>
          </h2>
        </div>

        <div className="card-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative glass p-6 sm:p-8 lg:p-10"
            >
              <Quote size={32} className="text-gold-500/20 mb-4 sm:mb-6" />
              <blockquote className="text-ivory-300/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-light italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden relative border border-ivory-200/10 shrink-0">
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
                <div className="min-w-0">
                  <p className="text-ivory-100 text-sm truncate">{testimonial.name}</p>
                  <p className="text-ivory-400/50 text-xs mt-1 truncate">
                    {testimonial.project} · {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
