'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle, ChevronDown } from 'lucide-react';
import { BUSINESS, STUDIO_ADDRESS } from '@/lib/site';

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

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[10px] uppercase tracking-[0.14em] text-ivory-400/50 mb-3"
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
}: {
  id: string;
  name: string;
  label?: string;
  defaultOption: string;
  options: string[];
  required?: boolean;
}) {
  const [value, setValue] = useState('');

  return (
    <div>
      {label ? <FieldLabel htmlFor={id}>{label}</FieldLabel> : null}
      <div className="relative min-w-0">
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className={`input-luxury bg-transparent w-full ${
            value ? 'text-ivory-100' : 'text-ivory-400/40'
          }`}
        >
          <option value="" disabled className="bg-charcoal-900">
            {defaultOption}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-charcoal-900">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ivory-400/40"
          aria-hidden
        />
      </div>
    </div>
  );
}

export function Contact({
  className,
  showIntro = true,
}: {
  className?: string;
  showIntro?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="get-in-touch"
      ref={containerRef}
      className={`section-y bg-luxury-black ${className ?? ''}`}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-center">
            {showIntro && (
              <>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="label-uppercase text-gold-400 mb-6"
                >
                  Get In Touch
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-display text-fluid-h2 text-white mb-6 sm:mb-8"
                >
                  Start Your{' '}
                  <span className="italic font-light text-gradient-gold-inline">Journey</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-md"
                >
                  Every great design begins with a conversation. Tell us about your vision
                  and let&apos;s create something extraordinary together.
                </motion.p>
              </>
            )}

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <a
                href={`tel:${BUSINESS.phone}`}
                className="group flex items-center gap-4 text-ivory-400/70 hover:text-ivory-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-ivory-200/10 flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
                  <Phone size={18} className="text-gold-500/50" />
                </div>
                <div>
                  <p className="text-xs text-ivory-400/50 uppercase tracking-wider mb-1">Call or WhatsApp</p>
                  <p className="text-ivory-300/80">{BUSINESS.phoneDisplay}</p>
                </div>
              </a>

              <a
                href="mailto:hello@designmyplace.in"
                className="group flex items-center gap-4 text-ivory-400/70 hover:text-ivory-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-ivory-200/10 flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
                  <Mail size={18} className="text-gold-500/50" />
                </div>
                <div>
                  <p className="text-xs text-ivory-400/50 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-ivory-300/80">hello@designmyplace.in</p>
                </div>
              </a>

              <a
                href={STUDIO_ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 text-ivory-400/70 hover:text-ivory-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-ivory-200/10 flex items-center justify-center flex-shrink-0 group-hover:border-gold-500/30 transition-colors">
                  <MapPin size={18} className="text-gold-500/50" />
                </div>
                <div>
                  <p className="text-xs text-ivory-400/50 uppercase tracking-wider mb-1">Studio Location</p>
                  <p className="text-ivory-300/80 leading-relaxed">
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

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-6 sm:p-8 lg:p-12 min-w-0"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full border border-gold-500/50 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-gold-400" />
                </div>
                <h3 className="font-display text-3xl text-ivory-100 mb-4">
                  Thank You
                </h3>
                <p className="text-ivory-400/60 max-w-sm">
                  We&apos;ve received your inquiry and will get back to you within 24 hours.
                  Looking forward to discussing your project!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="How should we address you?"
                    required
                    className="input-luxury"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Where can we send your design proposal?"
                    required
                    className="input-luxury"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your preferred contact number"
                    className="input-luxury"
                  />
                </div>
                {/* Project Type & Budget */}
                <SelectField
                  id="projectType"
                  name="projectType"
                  defaultOption="What kind of space are we designing?"
                  options={projectTypes}
                  required
                />

                <SelectField
                  id="budget"
                  name="budget"
                  defaultOption="Estimated investment for your project"
                  options={budgetRanges}
                />

                {/* Location */}
                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Where is your project located?"
                    className="input-luxury"
                  />
                </div>

                {/* Message */}
                {/* <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your dream space, lifestyle, inspirations, or challenges."
                    rows={4}
                    className="input-luxury resize-none"
                  />
                </div> */}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-luxury-primary py-5 justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      <span>Start My Design Journey</span>
                      <Send
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
