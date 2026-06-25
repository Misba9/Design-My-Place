import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Logo } from '@/components/Logo';
import { Testimonials } from '@/components/Testimonials';
import { STUDIO_ADDRESS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Studio | Design My Place LLP',
  description:
    'Learn about Design My Place — a Bengaluru-based luxury interior design studio creating meaningful spaces across India.',
};

const values = [
  {
    title: 'Research-Led',
    description:
      'Every design begins with deep understanding — of the site, the climate, and the people who will inhabit the space.',
  },
  {
    title: 'Emotionally Grounded',
    description:
      'We design for how spaces make you feel, not just how they look. Comfort, calm, and joy guide every decision.',
  },
  {
    title: 'Timeless Craft',
    description:
      'We favour materials and methods that age beautifully — honest textures, artisan details, and enduring quality.',
  },
  {
    title: 'Collaborative',
    description:
      'Your voice shapes the process. We listen, interpret, and refine until the design feels unmistakably yours.',
  },
];

const stats = [
  { value: '75+', label: 'Projects Delivered' },
  { value: '150+', label: 'Satisfied Clients' },
  { value: '12+', label: 'Cities Served' },
  { value: '5+', label: 'Years of Excellence' },
];

const team = [
  {
    name: 'Design Leadership',
    role: 'Creative Direction',
    bio: 'Guiding every project from concept to completion with a unified design vision.',
  },
  {
    name: 'Project Management',
    role: 'Execution & Coordination',
    bio: 'Ensuring timelines, quality, and seamless communication across all stakeholders.',
  },
  {
    name: 'Styling & Curation',
    role: 'Finishing Touches',
    bio: 'Sourcing furniture, art, and accessories that complete the narrative of each space.',
  },
];

export default function StudioPage() {
  return (
    <>
      <PageHero
        label="About The Studio"
        title="Spaces that hold"
        titleAccent="your story"
        description="At Design My Place, we believe interiors are more than aesthetics. They are the backdrop to life's most meaningful moments."
      />

      <section className="py-24 lg:py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div className="glass p-10 lg:p-14 flex flex-col items-center justify-center min-h-[380px]">
              <Logo size="lg" className="justify-center" imageClassName="object-center mx-auto" />
              <p className="mt-8 text-center text-gray-400 text-sm leading-relaxed max-w-xs">
                Creating interiors that shape how people live, work, and feel.
              </p>
            </div>

            <div>
              <p className="label-uppercase text-gold-300 mb-6">Our Philosophy</p>
              <h2 className="font-display text-3xl lg:text-5xl text-white mb-8 leading-tight">
                Meaningful design,{' '}
                <span className="italic font-light text-gradient-gold-inline">
                  thoughtfully made
                </span>
              </h2>
              <p className="text-gray-300 text-lg font-light mb-6 leading-relaxed">
                Founded in Bengaluru, Design My Place LLP is an ultra-premium interior
                design studio serving discerning clients across India. We combine
                architectural rigour with emotional intelligence to create spaces
                that endure.
              </p>
              <p className="text-gray-400 font-light leading-relaxed mb-10">
                From luxury apartments in Mumbai to wellness retreats in Goa, our work
                spans residential, commercial, and hospitality — united by a commitment
                to research, craft, and the stories of those we design for.
              </p>
              <Link href="/process" className="btn-outline-gold group">
                <span>Our Process</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="label-uppercase text-gold-300 mb-6 text-center">What We Stand For</p>
          <h2 className="font-display text-3xl lg:text-5xl text-white text-center mb-16">
            Our{' '}
            <span className="italic font-light text-gradient-gold-inline">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass p-8 lg:p-10 border border-white/10 hover:border-gold-400/30 transition-colors duration-500"
              >
                <h3 className="font-display text-2xl text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-gold-400/60 pl-5 lg:pl-6">
                <p className="font-display text-3xl lg:text-4xl text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="label-uppercase text-gold-300 mb-6">The Team</p>
          <h2 className="font-display text-3xl lg:text-5xl text-white mb-16">
            How we{' '}
            <span className="italic font-light text-gradient-gold-inline">work</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="border-t border-gold-400/40 pt-8">
                <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300 mb-3">
                  {member.role}
                </p>
                <h3 className="font-display text-2xl text-white mb-4">{member.name}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src="/hero-luxury.jpg"
                alt="Design My Place studio"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div>
              <p className="label-uppercase text-gold-300 mb-6">Visit Us</p>
              <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
                Bengaluru{' '}
                <span className="italic font-light text-gradient-gold-inline">
                  Studio
                </span>
              </h2>
              <a
                href={STUDIO_ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 font-light leading-relaxed hover:text-gold-300 transition-colors block mb-8"
              >
                Design My Place LLP
                <br />
                {STUDIO_ADDRESS.line1}
                <br />
                {STUDIO_ADDRESS.line2}
                <br />
                {STUDIO_ADDRESS.line3}
              </a>
              <Link href="/contact" className="btn-gold group">
                <span>Book a Visit</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <PageCTA />
    </>
  );
}
