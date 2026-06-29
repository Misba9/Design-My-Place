'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-luxury-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center lg:text-left">
          <p className="label-uppercase text-gold-400/70 mb-6">Client Stories</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory-100">
            Words from <span className="italic font-light">Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative glass p-8 lg:p-10"
            >
              <Quote size={32} className="text-gold-500/20 mb-6" />
              <blockquote className="text-ivory-300/80 text-lg leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative border border-ivory-200/10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-ivory-100 text-sm">{testimonial.name}</p>
                  <p className="text-ivory-400/50 text-xs mt-1">
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
