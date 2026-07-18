'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

function scrollByPage(direction: 'up' | 'down') {
  const distance = Math.round(window.innerHeight * 0.85);
  window.scrollBy({
    top: direction === 'down' ? distance : -distance,
    behavior: 'smooth',
  });
}

export function ScrollButtons() {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setCanScrollUp(y > 40);
      setCanScrollDown(y < max - 40);
      setVisible(max > 120);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.4 }}
          className="fixed z-40 flex flex-col gap-2 bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10 safe-bottom"
          style={{ paddingLeft: 'max(0px, env(safe-area-inset-left))' }}
        >
          <button
            type="button"
            onClick={() => scrollByPage('up')}
            disabled={!canScrollUp}
            data-cursor-hover
            aria-label="Scroll page up"
            className="touch-target flex items-center justify-center border border-white/15 bg-luxury-black/80 text-gold-300 backdrop-blur-md transition-all duration-300 hover:border-gold-400/50 hover:text-gold-200 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronUp size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => scrollByPage('down')}
            disabled={!canScrollDown}
            data-cursor-hover
            aria-label="Scroll page down"
            className="touch-target flex items-center justify-center border border-white/15 bg-luxury-black/80 text-gold-300 backdrop-blur-md transition-all duration-300 hover:border-gold-400/50 hover:text-gold-200 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronDown size={20} strokeWidth={1.5} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
