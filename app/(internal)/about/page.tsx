import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { AnimatedSection, Stagger, StaggerItem } from '@/components/AnimatedSection';
import { aboutUsIntro, missionVision, values, milestones } from '@/lib/about';
import { teamLead, teamMembers } from '@/lib/team';
import { d2BtnOutline, d2PageBg } from '@/components/design2/shared';
import { PrimaryButton } from '@/components/PrimaryButton';
import { breadcrumbSchema, buildSchemaGraph, createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'About Us — Luxury Interior Design Studio',
  description:
    'Design My Place LLP — Bengaluru luxury interior designers creating bespoke homes & villas across Bangalore, Delhi NCR & India since 2021.',
  path: '/about',
});

export default function AboutPage() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />

      <PageHero
        label="About Us"
        title="Designing spaces that"
        titleAccent="matter"
        description="We are a Bengaluru-based luxury interior design studio creating meaningful environments for homes, workplaces, and hospitality — across India."
        imageAlt="Design My Place luxury interior design studio in Bangalore"
      />

      {/* Story — editorial 50/50 */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className="mx-auto w-full max-w-[1440px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            {/* Image — 6 cols */}
            <AnimatedSection variant="slideLeft" className="relative lg:col-span-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 hidden rounded-[28px] border border-[rgba(156,111,78,0.28)] sm:-inset-4 sm:rounded-[32px] lg:block"
              />
              <div
                className="
                  group relative overflow-hidden
                  h-[320px] sm:h-[380px] md:h-[420px]
                  lg:h-auto lg:aspect-[4/5] lg:min-h-[32rem] xl:min-h-[36rem]
                  rounded-[20px] md:rounded-3xl
                  border border-[rgba(63,57,48,0.08)]
                  shadow-[0_28px_60px_-20px_rgba(63,57,48,0.35)]
                "
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-3 z-10 rounded-[14px] border border-white/25 md:inset-4 md:rounded-[16px]"
                />
                <Image
                  src="/hero-luxury.jpg"
                  alt="Design My Place interior — a warm, research-led living space"
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </AnimatedSection>

            {/* Copy — 6 cols */}
            <AnimatedSection variant="slideRight" delay={0.12} className="lg:col-span-6">
              <div className="mb-6 flex items-center gap-4 sm:mb-8">
                <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                  {aboutUsIntro.label}
                </p>
              </div>
              <h2 className="max-w-xl font-body font-light text-[clamp(2.25rem,4.2vw,3.5rem)] leading-[1.08] tracking-[-0.02em]">
                {aboutUsIntro.title}{' '}
                <span className="font-display italic font-normal text-[#9C6F4E]">
                  {aboutUsIntro.titleAccent}
                </span>
              </h2>
              <div className="mt-8 flex max-w-xl flex-col gap-6 sm:mt-10">
                {aboutUsIntro.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="font-body text-[15px] leading-[1.85] text-[#55503F]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-[70px] md:px-12 md:pb-[100px] lg:px-20 lg:pb-[140px]">
          <Stagger className="grid gap-6 md:grid-cols-2 md:gap-8">
            <StaggerItem>
              <div className="h-full rounded-[20px] border border-[rgba(63,57,48,0.08)] bg-[rgba(255,255,255,0.55)] p-8 shadow-[0_1px_0_rgba(63,57,48,0.04)] sm:p-10 lg:p-12">
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                  Mission
                </p>
                <p className="mt-5 font-body text-[22px] font-light leading-[1.4] tracking-[-0.01em] text-[#3F3930] sm:text-[26px]">
                  {missionVision.mission}
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-full rounded-[20px] border border-[rgba(63,57,48,0.08)] bg-[rgba(255,255,255,0.55)] p-8 shadow-[0_1px_0_rgba(63,57,48,0.04)] sm:p-10 lg:p-12">
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                  Vision
                </p>
                <p className="mt-5 font-body text-[22px] font-light leading-[1.4] tracking-[-0.01em] text-[#3F3930] sm:text-[26px]">
                  {missionVision.vision}
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Values */}
      <section
        className="relative overflow-hidden text-[#3F3930]"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 10% 20%, rgba(156,111,78,0.06) 0%, transparent 55%), linear-gradient(180deg, #FAF8F5 0%, #F4F0EA 50%, #FAF8F5 100%)',
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]">
          <AnimatedSection className="max-w-2xl">
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              What We Stand For
            </p>
            <h2 className="mt-3 font-body font-light text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
              Our{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">Values</span>
            </h2>
          </AnimatedSection>

          <Stagger className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:gap-7">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div
                  className="
                    group h-full rounded-[20px] border border-[rgba(63,57,48,0.08)]
                    bg-[rgba(255,255,255,0.5)] p-8 shadow-[0_1px_0_rgba(63,57,48,0.03)]
                    transition-all duration-500 hover:-translate-y-1
                    hover:border-[rgba(156,111,78,0.24)] hover:bg-[rgba(255,255,255,0.8)]
                    hover:shadow-[0_20px_40px_-22px_rgba(63,57,48,0.28)]
                    sm:p-9
                  "
                >
                  <h3 className="font-body text-[21px] font-light leading-snug text-[#3F3930] transition-colors duration-300 group-hover:text-[#9C6F4E]">
                    {value.title}
                  </h3>
                  <p className="mt-4 font-body text-[14.5px] leading-[1.8] text-[#55503F]">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className="mx-auto w-full max-w-[1440px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]">
          <AnimatedSection className="max-w-2xl">
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Our Journey
            </p>
            <h2 className="mt-3 font-body font-light text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
              Milestones{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                along the way
              </span>
            </h2>
          </AnimatedSection>

          <Stagger className="mt-12 grid gap-8 sm:mt-14 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-x-12">
            {milestones.map((milestone) => (
              <StaggerItem key={milestone.year}>
                <div className="border-t-2 border-[#9C6F4E]/40 pt-7">
                  <p className="font-body text-[15px] font-light tracking-[-0.01em] text-[#9C6F4E]/70">
                    {milestone.year}
                  </p>
                  <h3 className="mt-2 font-body text-[21px] font-light leading-snug text-[#3F3930]">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] leading-[1.8] text-[#55503F]">
                    {milestone.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="scroll-mt-20 bg-[#FAF8F5] text-[#3F3930]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]">
          <div className="grid grid-cols-1 items-center gap-10 border-t border-[rgba(63,57,48,0.12)] pt-10 md:gap-12 md:pt-12 lg:grid-cols-[minmax(0,38%)_minmax(0,62%)] lg:gap-16 lg:pt-14 xl:gap-20">
            <AnimatedSection variant="scaleIn" className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
              <div className="group relative h-[300px] overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.08)] shadow-[0_18px_50px_-18px_rgba(63,57,48,0.28)] sm:h-[340px] md:aspect-[4/5] md:h-auto md:rounded-3xl">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-3 z-10 rounded-[14px] border border-white/20 md:inset-4 md:rounded-[16px]"
                />
                <Image
                  src={teamLead.image}
                  alt={`${teamLead.name}, ${teamLead.role}`}
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 420px, 100vw"
                  className="object-cover object-[50%_18%] transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="min-w-0">
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                Meet Our Team
              </p>
              <h2 className="mt-3 font-body text-[26px] font-light leading-[1.15] tracking-[-0.01em] sm:text-[32px] lg:text-[38px]">
                {teamLead.name}
              </h2>
              <p className="mt-1 font-display text-[13px] font-medium text-[#9C6F4E]">
                {teamLead.role}
              </p>
              <p className="mt-6 max-w-xl font-body text-[14.5px] leading-[1.85] text-[#55503F]">
                {teamLead.bio}
              </p>

              {/* Compact team strip */}
              <div className="mt-8 flex items-center gap-3 sm:mt-10">
                <div className="flex -space-x-3">
                  {teamMembers.slice(0, 5).map((member) => (
                    <div
                      key={member.name}
                      title={`${member.name} — ${member.role}`}
                      className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#FAF8F5] shadow-[0_4px_10px_rgba(63,57,48,0.18)] sm:h-14 sm:w-14"
                    >
                      <Image
                        src={member.image}
                        alt={`${member.name} — ${member.role} at Design My Place`}
                        fill
                        sizes="56px"
                        quality={85}
                        className="object-cover"
                        style={{ objectPosition: member.imageFit.objectPosition }}
                      />
                    </div>
                  ))}
                </div>
                <p className="font-body text-[13px] leading-tight text-[#55503F]">
                  A multidisciplinary studio of designers,
                  <br className="hidden sm:block" /> visualizers &amp; project leads
                </p>
              </div>

              <div className="mt-8 sm:mt-10">
                <Link href="/studio" className={`group w-full sm:w-auto sm:min-w-[12.5rem] ${d2BtnOutline}`}>
                  <span>Meet The Full Team</span>
                  <ArrowRight
                    size={14}
                    strokeWidth={1.75}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className="mx-auto w-full max-w-[1440px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]">
          <AnimatedSection className="flex flex-col items-start justify-between gap-8 border-t border-[rgba(63,57,48,0.12)] pt-10 sm:flex-row sm:items-center sm:pt-12">
            <div className="max-w-md">
              <div className="flex items-center gap-3">
                <MapPin size={16} strokeWidth={1.75} className="text-[#9C6F4E]" />
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                  The Studio
                </p>
              </div>
              <p className="mt-4 font-body text-[15px] leading-[1.85] text-[#55503F]">
                Visit our Bengaluru studio, or explore how we bring projects to life from
                first sketch to final styling.
              </p>
            </div>
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link href="/studio" className={`group w-full sm:w-auto sm:min-w-[12.5rem] ${d2BtnOutline}`}>
                <span>Our Studio</span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.75}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <PrimaryButton href="/contact">Book Consultation</PrimaryButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
