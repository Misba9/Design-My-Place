'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { testimonials, trustBadges, googleReviewsUrl } from '@/lib/testimonials';
import { d2Ease, d2PageBg, d2Section, d2Viewport } from './shared';

const AUTO_MS = 5500;

/**
 * Sliding client testimonials — editorial deck style for the homepage.
 */
export function D2Testimonials() {
  const reduceMotion = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback((embla: CarouselApi) => {
    if (!embla) return;
    setCurrent(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || reduceMotion || paused) return;
    const id = window.setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [api, reduceMotion, paused, current]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-20 text-[#3F3930]"
      style={{ background: d2PageBg }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className={d2Section}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 0.7, ease: d2Ease }}
          className="max-w-3xl"
        >
          <p className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-[#9C6F4E]">
            Client Stories
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.75rem)]"
          >
            Words from Clients
          </h2>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 0.75, delay: reduceMotion ? 0 : 0.1, ease: d2Ease }}
          className="mt-10 md:mt-14"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
              duration: reduceMotion ? 0 : 28,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.id}
                  className="pl-4 md:basis-4/5 md:pl-6 lg:basis-3/5"
                >
                  <article
                    className="
                      flex h-full flex-col justify-between gap-10
                      border border-[rgba(63,57,48,0.1)]
                      bg-[#FAF8F5]/80
                      px-6 py-8
                      sm:px-8 sm:py-10
                      lg:px-10 lg:py-12
                    "
                  >
                    <div>
                      <Quote
                        size={28}
                        strokeWidth={1.25}
                        className="text-[#9C6F4E]/45"
                        aria-hidden
                      />
                      <blockquote className="mt-5 font-body text-[1.05rem] font-light leading-[1.65] text-[#55503F] sm:text-[1.2rem] sm:leading-[1.7] lg:text-[1.35rem]">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                    </div>

                    <div className="flex items-center gap-4 border-t border-[rgba(63,57,48,0.1)] pt-6">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[rgba(63,57,48,0.12)] sm:h-14 sm:w-14">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-body text-[15px] text-[#3F3930] sm:text-base">
                          {t.name}
                        </p>
                        <p className="mt-1 truncate font-body text-[12px] tracking-[0.02em] text-[#55503F]/75 sm:text-[13px]">
                          {t.project} · {t.location}
                        </p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-between gap-4 sm:mt-10">
              <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Show testimonial from ${t.name}`}
                    onClick={() => api?.scrollTo(i)}
                    className="group relative flex h-8 w-8 items-center justify-center"
                  >
                    <span
                      className={`block h-[2px] rounded-full transition-all duration-500 ${
                        i === current
                          ? 'w-8 bg-[#9C6F4E]'
                          : 'w-4 bg-[rgba(63,57,48,0.22)] group-hover:bg-[rgba(63,57,48,0.4)]'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  aria-label="Previous testimonial"
                  className="
                    flex h-11 w-11 items-center justify-center
                    border border-[rgba(63,57,48,0.18)]
                    text-[#3F3930]
                    transition-colors duration-300
                    hover:border-[#9C6F4E]/50 hover:bg-[#9C6F4E] hover:text-[#FAF8F5]
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E]
                  "
                >
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  aria-label="Next testimonial"
                  className="
                    flex h-11 w-11 items-center justify-center
                    border border-[rgba(63,57,48,0.18)]
                    text-[#3F3930]
                    transition-colors duration-300
                    hover:border-[#9C6F4E]/50 hover:bg-[#9C6F4E] hover:text-[#FAF8F5]
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E]
                  "
                >
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.15, ease: d2Ease }}
          className="mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-[rgba(63,57,48,0.1)] pt-10 md:mt-16"
        >
          <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16">
            {trustBadges.map((stat) => (
              <div key={stat.label}>
                <p className="font-body text-[1.75rem] font-light tracking-[-0.02em] text-[#9C6F4E] sm:text-[2rem]">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-[10px] uppercase tracking-[0.16em] text-[#55503F]/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3F3930] transition-colors hover:text-[#9C6F4E]"
          >
            Google Reviews →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
