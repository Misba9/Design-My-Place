'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle, ChevronDown, AlertCircle, Link2, Share2, Copy, Check } from 'lucide-react';
import { BUSINESS, STUDIO_ADDRESS, SITE_URL } from '@/lib/site';
import { d2Ease, d2Viewport } from '@/components/design2/shared';
import { PrimaryButton } from '@/components/PrimaryButton';
import { useWeb3Form } from '@/hooks/useWeb3Form';

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

/** Canonical shareable URL for this form section */
const SHARE_URL = `${SITE_URL}/contact#get-in-touch`;
const SHARE_TITLE = 'Book a Free Interior Design Consultation — Design My Place';
const SHARE_TEXT = 'Get a personalised interior design proposal. Fill out this quick form to start your design journey.';

// ─── Share Button ───────────────────────────────────────────────────────────

function ShareFormButton({ theme }: { theme: ContactTheme }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const isDeck = theme === 'deck';

  const share = useCallback(async () => {
    // Native share sheet (mobile / supported desktop)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url: SHARE_URL });
        return;
      } catch {
        // user cancelled — fall through to manual options
      }
    }
    // Desktop fallback: open the mini share panel
    setOpen((v) => !v);
  }, []);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Older browsers
      const el = document.createElement('input');
      el.value = SHARE_URL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const waUrl = `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT}\n${SHARE_URL}`)}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`;

  const pill = isDeck
    ? 'inline-flex items-center gap-1.5 rounded-full border border-[rgba(63,57,48,0.18)] bg-white/60 px-3 py-1.5 text-[11px] font-body text-[#55503F]/70 transition-colors hover:border-[#9C6F4E]/40 hover:text-[#9C6F4E]'
    : 'inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-ivory-400/60 transition-colors hover:border-gold-500/30 hover:text-gold-400';

  return (
    <div className="relative flex flex-col items-end gap-2">
      {/* Share trigger */}
      <button
        type="button"
        onClick={share}
        aria-label="Share this form"
        className={pill}
      >
        <Share2 size={12} aria-hidden />
        Share this form
      </button>

      {/* Manual share panel (desktop fallback) */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className={
            isDeck
              ? 'absolute right-0 top-9 z-10 flex flex-col gap-1 rounded-xl border border-[rgba(63,57,48,0.12)] bg-white p-2 shadow-lg shadow-black/10'
              : 'absolute right-0 top-9 z-10 flex flex-col gap-1 rounded-xl border border-white/10 bg-charcoal-900 p-2 shadow-lg shadow-black/40'
          }
        >
          {/* Copy link */}
          <button
            type="button"
            onClick={() => { copyLink(); }}
            className={
              isDeck
                ? 'flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[12px] font-body text-[#3F3930] transition-colors hover:bg-[#FAF8F5]'
                : 'flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[12px] text-ivory-300/80 transition-colors hover:bg-white/5'
            }
          >
            {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} aria-hidden />}
            {copied ? 'Copied!' : 'Copy link'}
          </button>

          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isDeck
                ? 'flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] font-body text-[#3F3930] transition-colors hover:bg-[#FAF8F5]'
                : 'flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] text-ivory-300/80 transition-colors hover:bg-white/5'
            }
          >
            {/* WhatsApp SVG */}
            <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor" aria-hidden className="text-green-500">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Share on WhatsApp
          </a>

          {/* Facebook */}
          <a
            href={fbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isDeck
                ? 'flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] font-body text-[#3F3930] transition-colors hover:bg-[#FAF8F5]'
                : 'flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] text-ivory-300/80 transition-colors hover:bg-white/5'
            }
          >
            {/* Facebook SVG */}
            <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor" aria-hidden className="text-[#1877F2]">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Share on Facebook
          </a>

          {/* Copy the raw link for ads */}
          <div className={isDeck ? 'mx-2 my-1 border-t border-[rgba(63,57,48,0.08)]' : 'mx-2 my-1 border-t border-white/8'} />
          <div className="px-3 pb-1">
            <p className={isDeck ? 'mb-1 text-[10px] uppercase tracking-wider text-[#55503F]/50' : 'mb-1 text-[10px] uppercase tracking-wider text-ivory-400/40'}>
              For Meta Ads — landing page URL
            </p>
            <div className={
              isDeck
                ? 'flex items-center gap-2 rounded-md bg-[#FAF8F5] px-2.5 py-1.5'
                : 'flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5'
            }>
              <Link2 size={11} aria-hidden className={isDeck ? 'shrink-0 text-[#9C6F4E]' : 'shrink-0 text-gold-500/60'} />
              <code className={isDeck ? 'flex-1 truncate text-[10px] text-[#3F3930]/70' : 'flex-1 truncate text-[10px] text-ivory-300/60'}>
                {SHARE_URL}
              </code>
              <button
                type="button"
                onClick={copyLink}
                className={isDeck ? 'shrink-0 text-[10px] text-[#9C6F4E] hover:underline' : 'shrink-0 text-[10px] text-gold-400 hover:underline'}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

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
              ? `w-full min-w-0 appearance-none border-b border-[rgba(63,57,48,0.18)] bg-transparent py-4 pr-8 font-body text-base transition-colors duration-300 focus:border-[#9C6F4E]/60 focus:outline-none ${value ? 'text-[#3F3930]' : 'text-[#55503F]/45'
              }`
              : `input-luxury bg-transparent w-full ${value ? 'text-ivory-100' : 'text-ivory-400/40'
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isDeck = theme === 'deck';
  const ease = d2Ease;
  const { submitForm } = useWeb3Form({ subject: 'New Project Inquiry — Design My Place' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await submitForm(new FormData(e.currentTarget));

    setIsSubmitting(false);
    if (result.success) {
      setIsSubmitted(true);
    } else {
      setErrorMessage(result.message);
    }
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
            ? 'relative mx-auto w-full max-w-[1440px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]'
            : 'relative container-site'
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
                href={`mailto:${BUSINESS.email}`}
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
                    {BUSINESS.email}
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
                ? 'relative min-w-0 rounded-[20px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-6 shadow-[0_18px_50px_-24px_rgba(63,57,48,0.2)] sm:p-8 md:rounded-3xl lg:p-12'
                : 'relative glass min-w-0 p-6 sm:p-8 lg:p-12'
            }
          >
            {/* Share button — top-right of form card */}
            <div className="absolute right-4 top-4 z-10 sm:right-6 sm:top-5">
              <ShareFormButton theme={theme} />
            </div>
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

                {/* Error message */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={
                      isDeck
                        ? 'flex items-start gap-3 rounded-md border border-red-300/40 bg-red-50 px-4 py-3 text-sm text-red-700'
                        : 'flex items-start gap-3 rounded border border-red-500/30 bg-red-900/20 px-4 py-3 text-sm text-red-300'
                    }
                    role="alert"
                  >
                    <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

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
