import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Contact } from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact | Design My Place LLP',
  description:
    'Book a consultation with Design My Place. Share your vision and start your interior design journey.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Start Your"
        titleAccent="Journey"
        description="Every great design begins with a conversation. Tell us about your vision and let's create something extraordinary together."
      />
      <Contact />
    </>
  );
}
