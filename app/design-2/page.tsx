import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Contact } from '@/components/Contact';
import { D2Introduction } from '@/components/design2/Introduction';
import { D2TableOfContents } from '@/components/design2/TableOfContents';
import { D2AboutUs } from '@/components/design2/AboutUs';
import { D2WhatWeDo } from '@/components/design2/WhatWeDo';
import { D2Evolve } from '@/components/design2/Evolve';
import { D2Portfolio } from '@/components/design2/Portfolio';
import { D2HowWeWork } from '@/components/design2/HowWeWork';
import { D2PriceList } from '@/components/design2/PriceList';
import { D2MeetOurTeam } from '@/components/design2/MeetOurTeam';
import { D2BuiltToBelong } from '@/components/design2/BuiltToBelong';

export const metadata: Metadata = {
  title: 'Design Two — Presentation Concept',
  description:
    'A presentation-style homepage concept for Design My Place — the company deck brought to life as a premium editorial web experience.',
  // Design experiment — keep out of search indexes so it never competes with the live homepage.
  robots: { index: false, follow: false },
};

export default function DesignTwoPage() {
  return (
    <>
      {/* Current website hero — untouched */}
      <Hero />

      {/* Presentation sections, in deck order */}
      <D2Introduction />
      <D2TableOfContents />
      <D2AboutUs />
      <D2WhatWeDo />
      <D2Evolve />
      <D2Portfolio />
      <D2HowWeWork />
      <D2PriceList />
      <D2MeetOurTeam />
      <D2BuiltToBelong />

      {/* Current website contact — untouched (id anchor for the TOC link) */}
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
    </>
  );
}
