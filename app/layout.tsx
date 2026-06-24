import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://designmyplace.in'),
  title: 'Design My Place LLP | Luxury Interior Design Studio',
  description: 'Premium interior design studio creating meaningful spaces grounded in research, emotion, functionality, and timeless aesthetics. Residential & commercial design across India.',
  keywords: 'interior design, luxury interiors, residential design, commercial design, villa design, apartment styling, interior architecture, Design My Place',
  authors: [{ name: 'Design My Place LLP' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://designmyplace.in',
    title: 'Design My Place LLP | Luxury Interior Design Studio',
    description: 'We create interiors that shape how people live, work, and feel. Premium residential and commercial design across India.',
    siteName: 'Design My Place',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Design My Place - Luxury Interior Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design My Place LLP | Luxury Interior Design Studio',
    description: 'We create interiors that shape how people live, work, and feel.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="bg-luxury-black text-ivory-100 font-body antialiased overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
