'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ContentImage } from '@/components/ContentImage';
import { Logo } from '@/components/Logo';
import { aboutStats, aboutUsIntro } from '@/lib/about';
import { NVT_IMAGES } from '@/lib/images';

const stats = aboutStats;

const referenceImages = [
  { src: NVT_IMAGES.family, alt: 'NVT Symphony of Orchards — living area' },
  { src: NVT_IMAGES.dining, alt: 'NVT Symphony of Orchards — dining space' },
  { src: NVT_IMAGES.gbr, alt: 'NVT Symphony of Orchards — guest bedroom' },
  { src: NVT_IMAGES.mbr, alt: 'NVT Symphony of Orchards — master bedroom' },
  { src: NVT_IMAGES.kids, alt: 'NVT Symphony of Orchards — kids room' },
] as const;

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="who-we-are"
      ref={containerRef}
      className="relative section-y bg-luxury-black overflow-hidden"
    >
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[600px] aspect-square pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(176,141,87,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-2 sm:space-y-3"
          >
            <div className="grid grid-cols-5 gap-2 sm:gap-3 h-44 sm:h-52 lg:h-60">
              <div className="col-span-3 relative h-full overflow-hidden border border-white/10 img-hover-zoom">
                <ContentImage
                  src={referenceImages[0].src}
                  alt={referenceImages[0].alt}
                  fill
                  loading="lazy"
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 60vw, 30vw"
                />
              </div>
              <div className="col-span-2 relative h-full overflow-hidden border border-white/10 img-hover-zoom">
                <ContentImage
                  src={referenceImages[1].src}
                  alt={referenceImages[1].alt}
                  fill
                  loading="lazy"
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
            </div>

            <div className="glass border border-white/10 bg-luxury-black/40 py-10 sm:py-12 lg:py-14 px-6 sm:px-8 flex flex-col items-center justify-center">
              <Logo
                size="xl"
                className="justify-center"
                imageClassName="object-center mx-auto"
              />
              <p className="mt-6 sm:mt-8 text-center text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
                Creating interiors that shape how people live, work, and feel.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 h-40 sm:h-48 lg:h-52">
              {referenceImages.slice(2).map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
                  className="relative h-full overflow-hidden border border-white/10 img-hover-zoom"
                >
                  <ContentImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 33vw, 16vw"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="label-uppercase text-gold-300 mb-6"
            >
              Who We Are
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-fluid-h2 text-white mb-6 sm:mb-8 leading-[1.08] text-balance"
            >
              {aboutUsIntro.title}{' '}
              <span className="italic font-light text-gradient-gold-inline">
                {aboutUsIntro.titleAccent}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-fluid-body font-light mb-6 sm:mb-8 leading-relaxed"
            >
              {aboutUsIntro.paragraphs[0]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-gray-400 text-fluid-body font-light mb-8 sm:mb-10 leading-relaxed"
            >
              {aboutUsIntro.paragraphs[1]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-14"
            >
              <Link href="/about" className="btn-outline-gold group">
                <span>About Us</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="border-l border-gold-400/65 pl-4 lg:pl-6"
                >
                  <p className="font-display text-2xl lg:text-3xl text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
