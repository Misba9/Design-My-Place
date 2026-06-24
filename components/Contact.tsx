'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle } from 'lucide-react';

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
  '10-25 Lakhs',
  '25-50 Lakhs',
  '50 Lakhs - 1 Crore',
  'Above 1 Crore',
  'Not Sure Yet',
];

export function Contact() {
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
      id="contact"
      ref={containerRef}
      className="py-24 lg:py-32 bg-luxury-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-center">
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
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8"
            >
              Start Your <span className="italic font-light text-gradient-gold-inline">Journey</span>
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

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <a
                href="https://instagram.com/design_my_place"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-ivory-400/70 hover:text-ivory-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-ivory-200/10 flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
                  <Phone size={18} className="text-gold-500/50" />
                </div>
                <div>
                  <p className="text-xs text-ivory-400/50 uppercase tracking-wider mb-1">Call or WhatsApp</p>
                  <p className="text-ivory-300/80">+91 98765 43210</p>
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

              <div className="group flex items-center gap-4 text-ivory-400/70">
                <div className="w-12 h-12 border border-ivory-200/10 flex items-center justify-center">
                  <MapPin size={18} className="text-gold-500/50" />
                </div>
                <div>
                  <p className="text-xs text-ivory-400/50 uppercase tracking-wider mb-1">Studio Location</p>
                  <p className="text-ivory-300/80">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 lg:p-12"
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

                {/* Project Type & Budget - Side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <select
                      name="projectType"
                      required
                      className="input-luxury bg-transparent cursor-pointer appearance-none"
                    >
                      <option value="" className="bg-charcoal-900">
                        What kind of space are we designing?
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-charcoal-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <select
                      name="budget"
                      className="input-luxury bg-transparent cursor-pointer appearance-none"
                    >
                      <option value="" className="bg-charcoal-900">
                        Estimated investment for your project
                      </option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-charcoal-900">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

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
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your dream space, lifestyle, inspirations, or challenges."
                    rows={4}
                    className="input-luxury resize-none"
                  />
                </div>

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
