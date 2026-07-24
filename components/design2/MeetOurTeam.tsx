'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { teamLead, teamMembers } from '@/lib/team';
import { d2Ease, d2Viewport } from './shared';

const ease = d2Ease;

/**
 * Meet Our Team — editorial luxury layout.
 * All names, roles, bios, and images are preserved.
 */
export function D2MeetOurTeam() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="scroll-mt-20 bg-[#FAF8F5] text-[#3F3930]"
    >
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-6 py-[70px]
          md:px-12 md:py-[100px]
          lg:px-20 lg:py-[140px]
        "
      >
        <motion.h2
          id="team-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={d2Viewport}
          transition={{ duration: 0.7, ease }}
          className="font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.75rem)]"
        >
          Meet Our Team
        </motion.h2>

        {/* Featured founder — 40/60 */}
        <div
          className="
            mt-10 grid grid-cols-1 items-center gap-8
            border-t border-[rgba(63,57,48,0.12)] pt-10
            md:mt-12 md:gap-10 md:pt-12
            lg:mt-14 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:gap-16 lg:pt-14 xl:gap-20
          "
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={d2Viewport}
            transition={{ duration: 0.85, ease }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <div
              className="
                group relative overflow-hidden
                h-[350px] sm:h-[400px]
                md:h-auto md:aspect-[4/5]
                rounded-[20px] md:rounded-3xl
                border border-[rgba(63,57,48,0.08)]
                shadow-[0_18px_50px_-18px_rgba(63,57,48,0.28)]
              "
            >
              {/* Subtle accent frame */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-3 z-10 rounded-[14px] border border-white/20 md:inset-4 md:rounded-[16px]"
              />
              <Image
                src={teamLead.image}
                alt={`${teamLead.name}, ${teamLead.role}`}
                fill
                priority
                quality={100}
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 420px, 100vw"
                className="object-cover object-[50%_18%] transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
              />
            </div>
          </motion.div>

          <div className="flex min-w-0 flex-col justify-center">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.1, ease }}
            >
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                {teamLead.role}
              </p>
              <h3 className="mt-3 font-body text-[28px] font-light leading-[1.15] tracking-[-0.01em] sm:mt-4 sm:text-[34px] lg:text-[40px]">
                {teamLead.name}
              </h3>
            </motion.div>

            {teamLead.bio ? (
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={d2Viewport}
                transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.18, ease }}
                className="mt-6 max-w-xl font-body text-[14.5px] font-normal leading-[1.85] text-[#55503F] sm:mt-8 sm:text-[15px] sm:leading-[1.9]"
              >
                {teamLead.bio}
              </motion.p>
            ) : null}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.28, ease }}
              className="mt-8 sm:mt-10"
            >
              <Link
                href="/studio"
                className="group inline-flex h-12 w-full shrink-0 items-center justify-center gap-2.5 box-border rounded-sm border border-[rgba(63,57,48,0.22)] bg-transparent px-8 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3F3930] transition-all duration-300 hover:border-[#9C6F4E]/50 hover:bg-[#9C6F4E] hover:text-[#FAF8F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E] sm:w-auto sm:min-w-[12.5rem]"
              >
                <span>Our Studio</span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.75}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Team grid */}
        <ul
          role="list"
          className="
            mt-14 grid list-none grid-cols-1 gap-6 p-0
            sm:mt-16 sm:grid-cols-2 sm:gap-7
            md:mt-20 md:gap-8
            lg:mt-24 lg:grid-cols-5 lg:gap-6
          "
        >
          {teamMembers.map((member, i) => (
            <motion.li
              key={member.name}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={d2Viewport}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.06 + i * 0.07,
                ease,
              }}
              className="h-full"
            >
              <Link
                href="/studio"
                className="
                  group flex h-full flex-col overflow-hidden
                  rounded-[20px]
                  border border-[rgba(63,57,48,0.1)]
                  bg-[#FAF8F5]
                  shadow-[0_1px_0_rgba(63,57,48,0.04)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-1
                  hover:border-[rgba(63,57,48,0.16)]
                  hover:shadow-[0_18px_40px_-20px_rgba(63,57,48,0.28)]
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E]
                  motion-reduce:transform-none
                "
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role} at Design My Place`}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                    quality={90}
                    loading="lazy"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
                    style={{ objectPosition: member.imageFit.objectPosition }}
                  />
                </div>
                <div className="flex flex-1 flex-col px-4 py-5 sm:px-5 sm:py-6">
                  <p className="font-body text-[17px] font-light leading-snug text-[#3F3930] transition-colors duration-300 group-hover:text-[#9C6F4E] sm:text-[18px]">
                    {member.name}
                  </p>
                  <p className="mt-1.5 font-display text-[13px] font-medium text-[#9C6F4E] sm:text-[14px]">
                    {member.role}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
