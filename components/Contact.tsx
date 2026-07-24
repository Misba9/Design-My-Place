'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle, ChevronDown } from 'lucide-react';
import { BUSINESS, STUDIO_ADDRESS } from '@/lib/site';
import { d2Ease, d2Viewport } from '@/components/design2/shared';
import { PrimaryButton } from '@/components/PrimaryButton';

const projectTypes = [
  'Residential Interior',
  'Luxury Apartment',
  'Villa Design',
  'Commercial Space',
  'Office/Workspace',
  'Renovation',
  'Other',
];

const budgetRanges = [
  'Under 10 Lakhs',
  '10-20 Lakhs',
  '20-30 Lakhs',
  '30-50 Lakhs',
  '50 Lakhs - 1 Crore',
  'Above 1 Crore',
  'Not Sure Yet',
];

type ContactTheme = 'dark' | 'deck';

function FieldLabel({
  htmlFor,
  children,
  theme,
}: {
  htmlFor: string;
  children: React.ReactNode;
  theme: ContactTheme;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={
        theme === 'deck'
          ? 'mb-3 block font-body text-[10px] uppercase tracking-[0.14em] text-[#55503F]/70'
          : 'mb-3 block text-[10px] uppercase tracking-[0.14em] text-ivory-400/50'
      }
    >
      {children}
    </label>
  );
}

function SelectField({
  id,
  name,
  label,
  defaultOption,
  options,
  required = false,
  theme,
}: {
  id: string;
  name: string;
  label?: string;
  defaultOption: string;
  options: string[];
  required?: boolean;
  theme: ContactTheme;
}) {
  const [value, setValue] = useState('');
  const isDeck = theme === 'deck';

  return (
    <div>
      {label ? (
        <FieldLabel htmlFor={id} theme={theme}>
          {label}
        </FieldLabel>
      ) : null}
      <div className="relative min-w-0">
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className={
            isDeck
              ? `w-full min-w-0 appearance-none border-b border-[rgba(63,57,48,0.18)] bg-transparent py-4 pr-8 font-body text-base transition-colors duration-300 focus:border-[#9C6F4E]/60 focus:outline-none ${
                  value ? 'text-[#3F3930]' : 'text-[#55503F]/45'
                }`
              : `input-luxury bg-transparent w-full ${
                  value ? 'text-ivory-100' : 'text-ivory-400/40'
                }`
          }
        >
          <option
            value=""
            disabled
            className={isDeck ? 'bg-[#FAF8F5] text-[#3F3930]' : 'bg-charcoal-900'}
          >
            {defaultOption}
          </option>
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className={isDeck ? 'bg-[#FAF8F5] text-[#3F3930]' : 'bg-charcoal-900'}
            >
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className={
            isDeck
              ? 'pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#55503F]/45'
              : 'pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ivory-400/40'
          }
          aria-hidden
        />
      </div>
    </div>
  );
}

export function Contact({
  className,
  showIntro = true,
  theme = 'dark',
}: {
  className?: string;
  showIntro?: boolean;
  theme?: ContactTheme;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isDeck = theme === 'deck';
  const ease = d2Ease;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputClass = isDeck
    ? 'w-full min-w-0 border-b border-[rgba(63,57,48,0.18)] bg-transparent py-4 font-body text-base text-[#3F3930] placeholder:text-[#55503F]/45 transition-colors duration-300 focus:border-[#9C6F4E]/60 focus:outline-none'
    : 'input-luxury';

  return (
    <section
      id="get-in-touch"
      ref={containerRef}
      aria-labelledby={showIntro ? 'contact-heading' : undefined}
      className={
        isDeck
          ? `scroll-mt-20 bg-[#FAF8F5] text-[#3F3930] ${className ?? ''}`
          : `section-y bg-luxury-black ${className ?? ''}`
      }
    >
      <div
        className={
          isDeck
            ? 'mx-auto w-full max-w-[1440px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]'
            : 'container-site'
        }
      >
        <div
          className={
            isDeck
              ? 'grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20'
              : 'grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20'
          }
        >
          {/* Left — intro + details */}
          <div className="flex flex-col justify-center">
            {showIntro && (
              <>
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease }}
                  className={
                    isDeck
                      ? 'mb-5 font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:mb-6 sm:text-[15px]'
                      : 'label-uppercase mb-6 text-gold-400'
                  }
                >
                  Get In Touch
                </motion.p>

                <motion.h2
                  id="contact-heading"
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.08, ease }}
                  className={
                    isDeck
                      ? 'mb-6 font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.75rem)] sm:mb-8'
                      : 'font-display text-fluid-h2 mb-6 text-white sm:mb-8'
                  }
                >
                  Start Your{' '}
                  <span
                    className={
                      isDeck
                        ? 'font-display italic font-normal text-[#9C6F4E]'
                        : 'italic font-light text-gradient-gold-inline'
                    }
                  >
                    Journey
                  </span>
                </motion.h2>

                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.16, ease }}
                  className={
                    isDeck
                      ? 'mb-10 max-w-xl font-body text-[15px] font-normal leading-[1.85] text-[#55503F] sm:mb-12 sm:text-[15.5px]'
                      : 'mb-12 max-w-xl text-lg font-light leading-relaxed text-gray-400'
                  }
                >
                  Every great design begins with a conversation. Tell us about your vision
                  and let&apos;s create something extraordinary together.
                </motion.p>

                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2, ease }}
                  className={
                    isDeck
                      ? 'mb-10 max-w-xl font-body text-[14.5px] font-normal leading-[1.85] text-[#55503F] sm:mb-12 sm:text-[15px]'
                      : 'mb-12 max-w-xl text-base font-light leading-relaxed text-gray-400'
                  }
                >
                  Whether you&apos;re redesigning a single room or developing a complete
                  space from the ground up, we&apos;d love to hear from you. At Design My
                  Place, we specialize in thoughtful, functional, and timeless interiors
                  tailored to your vision. Based in Bangalore, we work with clients locally
                  and pan India to bring spaces to life showcasing your way of living with
                  an enhanced and functional design point with aesthetic sensibilities.
                </motion.p>
              </>
            )}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.24, ease }}
              className="space-y-6"
            >
              <a
                href={`tel:${BUSINESS.phone}`}
                className={
                  isDeck
                    ? 'group flex items-center gap-4 text-[#55503F] transition-colors duration-300 hover:text-[#3F3930]'
                    : 'group flex items-center gap-4 text-ivory-400/70 transition-colors duration-300 hover:text-ivory-100'
                }
              >
                <div
                  className={
                    isDeck
                      ? 'flex h-12 w-12 items-center justify-center rounded-sm border border-[rgba(63,57,48,0.14)] transition-colors group-hover:border-[#9C6F4E]/40'
                      : 'flex h-12 w-12 items-center justify-center border border-ivory-200/10 transition-colors group-hover:border-gold-500/30'
                  }
                >
                  <Phone
                    size={18}
                    className={isDeck ? 'text-[#9C6F4E]' : 'text-gold-500/50'}
                  />
                </div>
                <div>
                  <p
                    className={
                      isDeck
                        ? 'mb-1 font-body text-[10px] uppercase tracking-[0.14em] text-[#55503F]/65'
                        : 'mb-1 text-xs uppercase tracking-wider text-ivory-400/50'
                    }
                  >
                    Call or WhatsApp
                  </p>
                  <p className={isDeck ? 'font-body text-[#3F3930]' : 'text-ivory-300/80'}>
                    {BUSINESS.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@designmyplace.in"
                className={
                  isDeck
                    ? 'group flex items-center gap-4 text-[#55503F] transition-colors duration-300 hover:text-[#3F3930]'
                    : 'group flex items-center gap-4 text-ivory-400/70 transition-colors duration-300 hover:text-ivory-100'
                }
              >
                <div
                  className={
                    isDeck
                      ? 'flex h-12 w-12 items-center justify-center rounded-sm border border-[rgba(63,57,48,0.14)] transition-colors group-hover:border-[#9C6F4E]/40'
                      : 'flex h-12 w-12 items-center justify-center border border-ivory-200/10 transition-colors group-hover:border-gold-500/30'
                  }
                >
                  <Mail
                    size={18}
                    className={isDeck ? 'text-[#9C6F4E]' : 'text-gold-500/50'}
                  />
                </div>
                <div>
                  <p
                    className={
                      isDeck
                        ? 'mb-1 font-body text-[10px] uppercase tracking-[0.14em] text-[#55503F]/65'
                        : 'mb-1 text-xs uppercase tracking-wider text-ivory-400/50'
                    }
                  >
                    Email Us
                  </p>
                  <p className={isDeck ? 'font-body text-[#3F3930]' : 'text-ivory-300/80'}>
                    hello@designmyplace.in
                  </p>
                </div>
              </a>

              <a
                href={STUDIO_ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isDeck
                    ? 'group flex items-start gap-4 text-[#55503F] transition-colors duration-300 hover:text-[#3F3930]'
                    : 'group flex items-start gap-4 text-ivory-400/70 transition-colors duration-300 hover:text-ivory-100'
                }
              >
                <div
                  className={
                    isDeck
                      ? 'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-[rgba(63,57,48,0.14)] transition-colors group-hover:border-[#9C6F4E]/40'
                      : 'flex h-12 w-12 flex-shrink-0 items-center justify-center border border-ivory-200/10 transition-colors group-hover:border-gold-500/30'
                  }
                >
                  <MapPin
                    size={18}
                    className={isDeck ? 'text-[#9C6F4E]' : 'text-gold-500/50'}
                  />
                </div>
                <div>
                  <p
                    className={
                      isDeck
                        ? 'mb-1 font-body text-[10px] uppercase tracking-[0.14em] text-[#55503F]/65'
                        : 'mb-1 text-xs uppercase tracking-wider text-ivory-400/50'
                    }
                  >
                    Studio Location
                  </p>
                  <p
                    className={
                      isDeck
                        ? 'font-body leading-relaxed text-[#3F3930]'
                        : 'leading-relaxed text-ivory-300/80'
                    }
                  >
                    {STUDIO_ADDRESS.line1}
                    <br />
                    {STUDIO_ADDRESS.line2}
                    <br />
                    {STUDIO_ADDRESS.line3}
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease }}
            viewport={d2Viewport}
            className={
              isDeck
                ? 'min-w-0 rounded-[20px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-6 shadow-[0_18px_50px_-24px_rgba(63,57,48,0.2)] sm:p-8 md:rounded-3xl lg:p-12'
                : 'glass min-w-0 p-6 sm:p-8 lg:p-12'
            }
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center py-16 text-center"
              >
                <div
                  className={
                    isDeck
                      ? 'mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#9C6F4E]/40'
                      : 'mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/50'
                  }
                >
                  <CheckCircle
                    size={32}
                    className={isDeck ? 'text-[#9C6F4E]' : 'text-gold-400'}
                  />
                </div>
                <h3
                  className={
                    isDeck
                      ? 'mb-4 font-display text-3xl text-[#3F3930]'
                      : 'mb-4 font-display text-3xl text-ivory-100'
                  }
                >
                  Thank You
                </h3>
                <p
                  className={
                    isDeck
                      ? 'max-w-sm font-body text-[#55503F]'
                      : 'max-w-sm text-ivory-400/60'
                  }
                >
                  We&apos;ve received your inquiry and will get back to you within 24 hours.
                  Looking forward to discussing your project!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="How should we address you?"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Where can we send your design proposal?"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your preferred contact number"
                    className={inputClass}
                  />
                </div>

                <SelectField
                  id="projectType"
                  name="projectType"
                  defaultOption="What kind of space are we designing?"
                  options={projectTypes}
                  required
                  theme={theme}
                />

                <SelectField
                  id="budget"
                  name="budget"
                  defaultOption="Estimated investment for your project"
                  options={budgetRanges}
                  theme={theme}
                />

                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Where is your project located?"
                    className={inputClass}
                  />
                </div>

                {isDeck ? (
                  <PrimaryButton
                    type="submit"
                    disabled={isSubmitting}
                    layout="fill"
                    showArrow={!isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex w-full items-center justify-center">
                        <Loader2 size={18} className="animate-spin" />
                      </span>
                    ) : (
                      'Start My Design Journey'
                    )}
                  </PrimaryButton>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury-primary group w-full justify-center py-5 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <>
                        <span>Start My Design Journey</span>
                        <Send
                          size={14}
                          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </button>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
