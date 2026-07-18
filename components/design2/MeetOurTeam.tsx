'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { teamLead } from '@/lib/team';
import { d2, d2Ease, D2ImageReveal, D2Reveal, d2Viewport, slideAsset } from './shared';

/** Order and roles exactly as on slide 43. */
const members = [
  { role: 'Project Collaborator', name: 'Shikha Singh', image: slideAsset('team-shikha') },
  { role: 'Project Manager', name: 'Tushar Shukla', image: slideAsset('team-tushar') },
  { role: 'Designer', name: 'Mamta Rathod', image: slideAsset('team-mamta') },
  { role: '3d Visualizer', name: 'Priyanka Peswani', image: slideAsset('team-priyanka') },
  { role: 'Business Development', name: 'Ishan Vaidwan', image: slideAsset('team-ishan') },
];

/**
 * Slides 42–43 — 07 Meet Our Team.
 * Spread one: full-height portrait of the chief designer on the left,
 * heading, credit, and justified bio on the right with two small photos.
 * Spread two: five columns of role / name / square portrait.
 */
export function D2MeetOurTeam() {
  return (
    <section id="team" className="scroll-mt-20" style={{ background: d2.bg, color: d2.ink }}>
      {/* Spread one — Arushi */}
      <div className="mx-auto grid max-w-[100rem] grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <D2ImageReveal
            src={slideAsset('arushi')}
            alt="Arushi Goel, Chief Designer, seated on carved stone steps"
            className="aspect-[3/4] w-full lg:aspect-auto lg:h-full lg:min-h-[46rem]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>

        <div className="flex flex-col justify-between gap-16 px-6 pb-20 pt-14 sm:px-10 lg:col-span-8 lg:px-14 lg:py-20">
          <D2Reveal>
            <h2 className="font-body font-light leading-none tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,4.75rem)]">
              Meet Our Team
            </h2>
          </D2Reveal>

          <div
            className="grid grid-cols-1 gap-10 border-t pt-12 md:grid-cols-12 lg:pt-16"
            style={{ borderColor: d2.line }}
          >
            <D2Reveal delay={0.15} className="md:col-span-5">
              <p
                className="font-display text-[15px] font-medium"
                style={{ color: d2.gold }}
              >
                CREATIVE DIRECTOR & FOUNDER
              </p>
              <p className="mt-2 font-body text-[30px] font-light leading-[1.2]">
                {teamLead.name} –
              </p>
            </D2Reveal>
            <D2Reveal delay={0.25} className="md:col-span-7">
              <p
                className="max-w-xl font-body text-[14.5px] font-normal leading-[1.9]"
                style={{ color: d2.body }}
              >
                {teamLead.bio}
              </p>
            </D2Reveal>
          </div>

          {/* Two studio photos anchored bottom-right, as on the slide */}
          <div className="flex items-end justify-between gap-8">
            <D2Reveal delay={0.2} className="hidden md:block">
              <p
                className="max-w-[14rem] font-body text-[12px] font-normal uppercase leading-[1.8] tracking-[0.18em]"
                style={{ color: d2.body }}
              >
                The studio at work — Bangalore
              </p>
            </D2Reveal>
            <div className="flex justify-end gap-5">
              {['team-duo-1', 'team-duo-2'].map((name, i) => (
                <D2ImageReveal
                  key={name}
                  src={slideAsset(name)}
                  alt="Design My Place team collaborating in the studio"
                  className="aspect-[3/4] w-36 sm:w-44"
                  sizes="11rem"
                  delay={0.15 + i * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spread two — the wider team */}
      <div className="mx-auto max-w-[100rem] px-6 pb-24 pt-20 sm:px-10 lg:px-16 lg:pb-32 lg:pt-28">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 lg:grid-cols-5">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{ duration: 0.85, delay: i * 0.08, ease: d2Ease }}
            >
              <p
                className="font-display text-[15px] font-medium"
                style={{ color: d2.gold }}
              >
                {member.role}
              </p>
              <p className="mt-1 font-body text-[17px] font-light lg:text-[19px]">
                {member.name}
              </p>
              <div className="relative mt-6 aspect-square w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role} at Design My Place`}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                  loading="lazy"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
