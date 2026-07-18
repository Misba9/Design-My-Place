'use client';

import { ContentImage } from '@/components/ContentImage';
import { HERO_IMAGE } from '@/lib/images';

/**
 * Homepage hero — full-screen video only. Starts below the fixed navbar
 * (offsets match the header's measured heights) and fills the remaining
 * viewport exactly.
 */
export function Hero() {
  return (
    <section className="bg-luxury-black pt-[68px] sm:pt-[88px] lg:pt-[116px]">
      <div className="relative h-[calc(100svh-68px)] min-h-[28rem] overflow-hidden sm:h-[calc(100svh-88px)] lg:h-[calc(100svh-116px)]">
        {/* Image fallback — visible until the video is ready */}
        <ContentImage
          src={HERO_IMAGE}
          alt="Luxury interior design by Design My Place — Bangalore and Delhi NCR"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AJOk6hp2nWqXNjbxzQtkqwyCP0qK4u7e7t2guoFljP3lYZqKqKKKKAP//Z"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/hero-section-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
