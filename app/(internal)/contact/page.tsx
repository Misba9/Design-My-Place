import type { Metadata } from 'next';
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Video } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Contact } from '@/components/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { D2Reveal, d2PageBg, d2Section } from '@/components/design2/shared';
import { BUSINESS, STUDIO_ADDRESS } from '@/lib/site';
import { serviceFaqs } from '@/lib/services';
import { breadcrumbSchema, buildSchemaGraph, createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact — Book Interior Design Consultation',
  description:
    'Book a luxury interior design consultation with Design My Place. Share your vision for your Bangalore or Delhi NCR home. Start your journey today.',
  path: '/contact',
});

const workingHours = [
  { day: 'Monday – Saturday', hours: '10:00 AM – 6:00 PM' },
  { day: 'Sunday', hours: 'By appointment' },
];

const socialLinks = [
  { name: 'Instagram', href: BUSINESS.social.instagram, icon: Instagram },
  { name: 'Facebook', href: BUSINESS.social.facebook, icon: Facebook },
  { name: 'WhatsApp', href: BUSINESS.social.whatsapp, icon: MessageCircle },
  { name: 'Vimeo', href: BUSINESS.social.vimeo, icon: Video },
];

const faqs = serviceFaqs.slice(0, 4);

export default function ContactPage() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <PageHero
        label="Get In Touch"
        title="Start Your"
        titleAccent="Journey"
        description="Whether you're redesigning a single room or developing a complete space from the ground up, we'd love to hear from you. At Design My Place, we specialize in thoughtful, functional, and timeless interiors tailored to your vision. Based in Bangalore, we work with clients locally and pan India to bring spaces to life showcasing your way of living with an enhanced and functional design point with aesthetic sensibilities."
        imageAlt="Contact Design My Place for luxury interior design consultation"
      />

      <Contact theme="deck" showIntro={false} />

      {/* Studio information + map */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2Section}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <D2Reveal>
              <div className="mb-5 flex items-center gap-4 sm:mb-6">
                <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                  Studio Information
                </p>
              </div>
              <h2 className="mb-8 font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.5rem)]">
                Visit the{' '}
                <span className="font-display italic font-normal text-[#9C6F4E]">Studio</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[rgba(63,57,48,0.14)]">
                    <MapPin size={18} className="text-[#9C6F4E]" />
                  </div>
                  <div>
                    <p className="mb-1 font-body text-[10px] uppercase tracking-[0.14em] text-[#55503F]/65">
                      Studio Location
                    </p>
                    <a
                      href={STUDIO_ADDRESS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body leading-relaxed text-[#3F3930] transition-colors hover:text-[#9C6F4E]"
                    >
                      {STUDIO_ADDRESS.line1}
                      <br />
                      {STUDIO_ADDRESS.line2}
                      <br />
                      {STUDIO_ADDRESS.line3}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[rgba(63,57,48,0.14)]">
                    <Phone size={18} className="text-[#9C6F4E]" />
                  </div>
                  <div>
                    <p className="mb-1 font-body text-[10px] uppercase tracking-[0.14em] text-[#55503F]/65">
                      Call or WhatsApp
                    </p>
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="font-body text-[#3F3930] transition-colors hover:text-[#9C6F4E]"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[rgba(63,57,48,0.14)]">
                    <Mail size={18} className="text-[#9C6F4E]" />
                  </div>
                  <div>
                    <p className="mb-1 font-body text-[10px] uppercase tracking-[0.14em] text-[#55503F]/65">
                      Email Us
                    </p>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="font-body text-[#3F3930] transition-colors hover:text-[#9C6F4E]"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[rgba(63,57,48,0.14)]">
                    <Clock size={18} className="text-[#9C6F4E]" />
                  </div>
                  <div>
                    <p className="mb-1 font-body text-[10px] uppercase tracking-[0.14em] text-[#55503F]/65">
                      Working Hours
                    </p>
                    {workingHours.map((slot) => (
                      <p key={slot.day} className="font-body leading-relaxed text-[#3F3930]">
                        <span className="text-[#55503F]">{slot.day}:</span> {slot.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(63,57,48,0.16)] text-[#55503F] transition-colors duration-300 hover:border-[#9C6F4E]/50 hover:bg-[#9C6F4E] hover:text-[#FAF8F5]"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </D2Reveal>

            <D2Reveal
              delay={0.12}
              className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.1)] shadow-[0_18px_50px_-24px_rgba(63,57,48,0.2)] md:rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[420px]"
            >
              <iframe
                src={STUDIO_ADDRESS.mapsEmbedUrl}
                title="Design My Place LLP — Bengaluru studio location"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </D2Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2Section}>
          <D2Reveal className="mb-12 max-w-2xl md:mb-14">
            <div className="mb-5 flex items-center gap-4 sm:mb-6">
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                Before You Reach Out
              </p>
            </div>
            <h2 className="font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.5rem)]">
              A Few{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">Questions</span>
            </h2>
          </D2Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <D2Reveal
                key={faq.question}
                delay={i * 0.06}
                className="rounded-[20px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-8"
              >
                <h3 className="mb-3 font-display text-[18px] font-medium text-[#3F3930]">
                  {faq.question}
                </h3>
                <p className="font-body text-[15px] leading-[1.8] text-[#55503F]">
                  {faq.answer}
                </p>
              </D2Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
