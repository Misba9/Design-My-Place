'use client';

import { useEffect } from 'react';

const ELFSIGHT_SCRIPT_SRC = 'https://elfsightcdn.com/platform.js';

export function InstagramFeed() {
  useEffect(() => {
    const existing = document.querySelector(
      `script[src="${ELFSIGHT_SCRIPT_SRC}"]`,
    );
    if (existing) return;

    const script = document.createElement('script');
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-3c45b237-7527-4d22-83fc-5c04793d286d"
      data-elfsight-app-lazy
    />
  );
}
