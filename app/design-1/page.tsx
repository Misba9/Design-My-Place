import type { Metadata } from 'next';
import { D1Nav } from '@/components/designOne/Nav';
import { D1Hero } from '@/components/designOne/Hero';
import { D1Introduction } from '@/components/designOne/Introduction';
import { D1About } from '@/components/designOne/About';
import { D1FeaturedProjects } from '@/components/designOne/FeaturedProjects';
import { D1Philosophy } from '@/components/designOne/Philosophy';
import { D1Services } from '@/components/designOne/Services';
import { D1Process } from '@/components/designOne/Process';
import { D1Statistics } from '@/components/designOne/Statistics';
import { D1Testimonials } from '@/components/designOne/Testimonials';
import { D1CTA } from '@/components/designOne/CTA';
import { D1Footer } from '@/components/designOne/Footer';

export const metadata: Metadata = {
  title: 'Design One — Editorial Concept',
  description:
    'A premium editorial homepage concept for Design My Place — luxury residential interiors in Bangalore.',
  // Design experiment — keep out of search indexes so it never competes with the live homepage.
  robots: { index: false, follow: false },
};

export default function DesignOnePage() {
  return (
    <div className="bg-[#FAF8F3]">
      <D1Nav />
      <D1Hero />
      <D1Introduction />
      <D1About />
      <D1FeaturedProjects />
      <D1Philosophy />
      <D1Services />
      <D1Process />
      <D1Statistics />
      <D1Testimonials />
      <D1CTA />
      <D1Footer />
    </div>
  );
}
