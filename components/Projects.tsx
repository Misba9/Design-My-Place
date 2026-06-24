'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'The Meridian Residence',
    location: 'Mumbai',
    type: 'Residential',
    style: 'Contemporary Minimal',
    year: '2024',
    featured: true,
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    name: 'Azure Penthouse',
    location: 'Bangalore',
    type: 'Luxury Apartment',
    style: 'Japandi',
    year: '2024',
    featured: false,
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Verdant Villa',
    location: 'Pune',
    type: 'Villa',
    style: 'Modern Tropical',
    year: '2023',
    featured: true,
    image:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'The Canvas Office',
    location: 'Mumbai',
    type: 'Commercial',
    style: 'Industrial Chic',
    year: '2024',
    featured: false,
    image:
      'https://images.pexels.com/photos/32370580/pexels-photo-32370580.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 5,
    name: 'Serenity Spa',
    location: 'Goa',
    type: 'Hospitality',
    style: 'Coastal Minimal',
    year: '2023',
    featured: false,
    image:
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    name: 'Heritage Revival',
    location: 'Delhi',
    type: 'Renovation',
    style: 'Art Deco Modern',
    year: '2024',
    featured: false,
    image:
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-luxury-gray border border-white/5 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4">
          <span className="glass px-3 py-1 text-[10px] uppercase tracking-widest text-white/90">
            {project.type}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-gold-400 text-luxury-black px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
              Featured
            </span>
          </div>
        )}

        {/* Hover overlay CTA */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="btn-gold text-[10px] py-3 px-6">
            View Project
            <ArrowRight size={14} />
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-white mb-2">{project.name}</h3>
        <p className="text-gray-500 text-sm flex items-center gap-3">
          <span>{project.location}</span>
          <span className="w-1 h-1 rounded-full bg-gold-400/50" />
          <span>{project.year}</span>
        </p>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-luxury-gray overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label-uppercase text-gold-400 mb-4"
            >
              Featured Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white"
            >
              Selected{' '}
              <span className="italic font-light text-gradient-gold-inline">
                Projects
              </span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="btn-outline-gold hidden lg:inline-flex"
          >
            View All Projects
            <ArrowRight size={14} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
