'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { d2Ease, d2Viewport } from '@/components/design2/shared';

type Faq = { question: string; answer: string };

const ease = d2Ease;

/**
 * Deck-styled stacked accordion for FAQs — cream section, gold accents.
 */
export function ServiceFaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="border-t border-[rgba(63,57,48,0.12)]">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <motion.div
            key={faq.question}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={d2Viewport}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : i * 0.06, ease }}
            className="border-b border-[rgba(63,57,48,0.12)]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors duration-300 sm:py-8"
            >
              <span
                className={`font-body text-[17px] font-light leading-snug transition-colors duration-300 sm:text-[19px] ${
                  isOpen ? 'text-[#9C6F4E]' : 'text-[#3F3930] group-hover:text-[#9C6F4E]'
                }`}
              >
                {faq.question}
              </span>
              <span
                aria-hidden
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                  isOpen
                    ? 'rotate-45 border-[#9C6F4E]/50 bg-[#9C6F4E]/10 text-[#9C6F4E]'
                    : 'border-[rgba(63,57,48,0.16)] text-[#9C6F4E] group-hover:border-[#9C6F4E]/40'
                }`}
              >
                <Plus size={16} strokeWidth={1.5} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 font-body text-[15px] leading-[1.85] text-[#55503F] sm:pb-8">
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
