'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentImage } from '@/components/ContentImage';
import { NVT_IMAGES } from '@/lib/images';

const highlights = [
  {
    id: 1,
    title: 'Inspiration',
    image: NVT_IMAGES.family,
    images: [NVT_IMAGES.family, NVT_IMAGES.gbr, NVT_IMAGES.mbr],
  },
  {
    id: 2,
    title: 'Styling',
    image: NVT_IMAGES.mbr,
    images: [NVT_IMAGES.dining, NVT_IMAGES.kids],
  },
  {
    id: 3,
    title: 'On Site',
    image: NVT_IMAGES.gbr,
    images: [NVT_IMAGES.mbr2, NVT_IMAGES.family],
  },
  {
    id: 4,
    title: 'Sourcing',
    image: NVT_IMAGES.dining,
    images: [NVT_IMAGES.mbr],
  },
  {
    id: 5,
    title: 'My Place',
    image: NVT_IMAGES.kids,
    images: [NVT_IMAGES.gbr, NVT_IMAGES.dining],
  },
];

export function InstagramHighlights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [selectedHighlight, setSelectedHighlight] = useState<(typeof highlights)[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenHighlight = (highlight: (typeof highlights)[0]) => {
    setSelectedHighlight(highlight);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseHighlight = () => {
    setSelectedHighlight(null);
    document.body.style.overflow = '';
  };

  const handleNextImage = () => {
    if (selectedHighlight) {
      setCurrentImageIndex((prev) =>
        prev === selectedHighlight.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedHighlight) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedHighlight.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <section
        ref={containerRef}
        className="section-y bg-luxury-black"
      >
        <div className="container-site">
          {/* Header */}
          <div className="mb-10 sm:mb-16 lg:mb-20 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label-uppercase text-gold-400/70 mb-4 sm:mb-6"
            >
              Behind The Scenes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-fluid-h2 text-ivory-100 text-balance"
            >
              Studio <span className="italic font-light">Highlights</span>
            </motion.h2>
          </div>

          {/* Mobile: horizontal scroll · Desktop: grid */}
          <div className="scroll-snap-x gap-6 pb-4 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-8 lg:gap-12 md:overflow-visible">
            {highlights.map((highlight, index) => (
              <motion.button
                key={highlight.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                }}
                onClick={() => handleOpenHighlight(highlight)}
                className="group flex flex-col items-center gap-3 sm:gap-4 scroll-snap-item w-[5.5rem] sm:w-28 md:w-auto touch-target"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                  {/* Gold ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-gold-500/50 group-hover:border-gold-400 transition-colors duration-300" />
                  {/* Inner padding ring */}
                  <div className="absolute inset-1 rounded-full border-4 border-charcoal-800" />
                  {/* Image container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <ContentImage
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 88px, 120px"
                    />
                  </div>
                </div>

                {/* Title */}
                <span className="label-uppercase text-ivory-400/60 group-hover:text-ivory-100 transition-colors duration-300">
                  {highlight.title}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedHighlight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-charcoal-900/95 backdrop-blur-luxury flex items-center justify-center"
            onClick={handleCloseHighlight}
          >
            {/* Close button */}
            <button
              onClick={handleCloseHighlight}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 touch-target flex items-center justify-center text-ivory-400/60 hover:text-ivory-100 transition-colors z-10"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Title */}
            <p className="absolute top-6 left-6 lg:top-10 lg:left-10 label-uppercase text-ivory-400/60">
              {selectedHighlight.title}
            </p>

            {/* Image */}
            <div className="relative w-full max-w-4xl mx-4 sm:mx-8 aspect-[4/3] sm:aspect-[16/10]" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <ContentImage
                  src={selectedHighlight.images[currentImageIndex]}
                  alt={`${selectedHighlight.title} ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              </motion.div>
            </div>

            {/* Navigation */}
            {selectedHighlight.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute left-4 lg:left-8 p-3 text-ivory-400/60 hover:text-ivory-100 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-4 lg:right-8 p-3 text-ivory-400/60 hover:text-ivory-100 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedHighlight.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-gold-400'
                          : 'bg-ivory-400/30'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
