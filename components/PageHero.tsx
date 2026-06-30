'use client';

import { motion } from 'framer-motion';
import { ContentImage } from '@/components/ContentImage';
import { HERO_IMAGE } from '@/lib/images';

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
  image = HERO_IMAGE,
  imageAlt,
}: PageHeroProps) {
  const altText =
    imageAlt ||
    (titleAccent
      ? `${title} ${titleAccent} — Design My Place luxury interior design`
      : `${title} — Design My Place luxury interior design`);

  return (
    <section className="relative flex min-h-[38vh] sm:min-h-[42vh] md:min-h-[48vh] lg:min-h-[52vh] items-end pt-20 sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 overflow-hidden">
        <ContentImage
          src={image}
          alt={altText}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AJOk6hp2nWqXNjbxzQtkqwyCP0qK4u7e7t2guoFljP3lYZqKqKKKKAP//Z"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-black/40 to-black/30" />
      </div>

      <div className="relative z-10 w-full container-site pb-10 sm:pb-14 md:pb-16 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label-uppercase text-gold-300 mb-3 sm:mb-4 text-[10px] xs:text-xs"
        >
          {label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-fluid-h1 text-white max-w-4xl text-balance"
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
            className="text-gray-300/90 text-fluid-body font-light max-w-2xl mt-4 sm:mt-6 text-balance"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
