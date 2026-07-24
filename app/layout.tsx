import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { CustomCursor } from '@/components/CustomCursor';
import { Analytics } from '@/components/Analytics';
import { ScrollTracker } from '@/components/ScrollTracker';
import { JsonLd } from '@/components/seo/JsonLd';
import { createPageMetadata, DEFAULT_KEYWORDS, globalSchemas } from '@/seo';
import { BUSINESS, OG_IMAGE, THEME_COLOR } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Luxury Interior Designer Bangalore',
    description:
      'Bespoke luxury interior design for homes & villas above ₹25L in Bangalore, Delhi NCR & India. Premium residential interiors. Book a consultation.',
    path: '/',
    keywords: DEFAULT_KEYWORDS,
  }),
  metadataBase: new URL('https://designmyplace.in'),
  title: {
    default: 'Luxury Interior Designer Bangalore',
    template: '%s | Design My Place',
  },
  authors: [{ name: BUSINESS.legalName }],
  creator: BUSINESS.legalName,
  publisher: BUSINESS.legalName,
  category: 'Interior Design',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://designmyplace.in',
    title: 'Luxury Interior Designer Bangalore | Design My Place',
    description:
      'Bespoke luxury interior design for homes & villas above ₹25L in Bangalore, Delhi NCR & India.',
    siteName: BUSINESS.name,
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
    ],
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfair.variable} overflow-x-clip`}
      suppressHydrationWarning
    >
      <head>
        <Analytics />
      </head>
      <body className="bg-luxury-black text-ivory-100 font-body antialiased overflow-x-hidden">
        <JsonLd data={globalSchemas()} />
        <ScrollTracker />
        <CustomCursor />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
