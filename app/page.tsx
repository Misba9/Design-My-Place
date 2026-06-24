import { Hero } from '@/components/Hero';
import { Story } from '@/components/Story';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { Statistics } from '@/components/Statistics';
import { InstagramHighlights } from '@/components/InstagramHighlights';
import { LeadGeneration } from '@/components/LeadGeneration';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Projects />
      <Services />
      <Process />
      <Testimonials />
      <Statistics />
      <InstagramHighlights />
      <LeadGeneration />
      <Contact />
    </>
  );
}
