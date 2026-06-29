'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type PageHeroProps = {
  label: string;
  title: string;
  titleAccent?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  label,
  title,
  titleAccent,
  description,
  image = '/hero-luxury.jpg',
  imageAlt,
}: PageHeroProps) {
  const altText =
    imageAlt ||
    (titleAccent
      ? `${title} ${titleAccent} — Design My Place luxury interior design`
      : `${title} — Design My Place luxury interior design`);

  return (
    <section className="relative min-h-[52vh] flex items-end overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={altText}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AJOk6hp2nWqXNjbxzQtkqwyCP0qK4u7e7t2guoFljP3lYZqKqKKKKAP//Z"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-black/40 to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label-uppercase text-gold-300 mb-4"
        >
          {label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-[-0.02em] max-w-4xl"
        >
          {title}
          {titleAccent && (
            <>
              {' '}
              <span className="italic font-light text-gradient-gold-inline">
                {titleAccent}
              </span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-300/90 text-lg font-light max-w-2xl mt-6 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
