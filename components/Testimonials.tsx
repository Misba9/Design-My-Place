'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya & Arjun Mehta',
    project: 'Meridian Residence',
    location: 'Mumbai',
    quote: 'Design My Place transformed our vision into a home that feels uniquely ours. Every corner tells our story, and the attention to detail is extraordinary.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 2,
    name: 'Vikram Singh',
    project: 'Canvas Office',
    location: 'Bangalore',
    quote: 'They understood our brand before we did. Our workspace now communicates our values to every visitor. The design process was incredibly thorough.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    project: 'Serenity Spa',
    location: 'Goa',
    quote: 'The spa has become a destination in itself. Guests keep asking about the design. They somehow captured the exact mood we envisioned.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
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
            className="label-uppercase text-gold-400/70 mb-6"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory-100"
          >
            Words from <span className="italic font-light">Clients</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
              }}
              className="group relative glass p-8 lg:p-10 transition-all duration-500 hover:border-gold-400/20"
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
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
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
            <div className="text-center">
              <p className="font-display text-3xl lg:text-4xl text-gold-400">50+</p>
              <p className="label-uppercase text-ivory-400/50 mt-1">Projects</p>
            </div>
            <div className="w-px h-12 bg-ivory-200/10 hidden lg:block" />
            <div className="text-center">
              <p className="font-display text-3xl lg:text-4xl text-gold-400">100%</p>
              <p className="label-uppercase text-ivory-400/50 mt-1">Satisfaction</p>
            </div>
            <div className="w-px h-12 bg-ivory-200/10 hidden lg:block" />
            <div className="text-center">
              <p className="font-display text-3xl lg:text-4xl text-gold-400">5.0</p>
              <p className="label-uppercase text-ivory-400/50 mt-1">Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
