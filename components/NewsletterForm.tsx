'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { PrimaryButton } from '@/components/PrimaryButton';
import { useWeb3Form } from '@/hooks/useWeb3Form';

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { submitForm } = useWeb3Form({ subject: 'Newsletter Subscription — Design My Place' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const result = await submitForm(new FormData(e.currentTarget));

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.message);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto flex max-w-md flex-col items-center gap-3 text-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#9C6F4E]/40">
            <CheckCircle size={24} className="text-[#9C6F4E]" />
          </div>
          <p className="font-body text-[15px] leading-relaxed text-[rgba(237,233,224,0.85)]">
            You&apos;re on the list! We&apos;ll send our next guide your way.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          aria-label="Subscribe to the Design My Place journal"
          className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="relative flex-1">
            <Mail
              size={16}
              aria-hidden
              className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              disabled={status === 'submitting'}
              placeholder="Your email address"
              className="w-full border-b border-white/25 bg-transparent py-3 pl-7 font-body text-[15px] text-white placeholder:text-white/40 focus:border-[#9C6F4E]/70 focus:outline-none disabled:opacity-60"
            />
          </div>
          <div className="flex flex-col gap-2 sm:shrink-0">
            <PrimaryButton
              type="submit"
              disabled={status === 'submitting'}
              className="shrink-0"
            >
              {status === 'submitting' ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 size={15} className="animate-spin" />
                  <span>Subscribing…</span>
                </span>
              ) : (
                'Subscribe'
              )}
            </PrimaryButton>

            {status === 'error' && errorMessage && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-xs text-red-400"
                role="alert"
              >
                <AlertCircle size={13} className="shrink-0" aria-hidden />
                {errorMessage}
              </motion.p>
            )}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
