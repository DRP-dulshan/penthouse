import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { contact, hero, seo } from '@/data/property';
import { absoluteUrl, siteUrl } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: seo.title,
    description: seo.description,
    url: '/',
    siteName: seo.siteName,
    locale: 'en_US',
    images: [
      {
        url: seo.ogImage,
        width: seo.ogImageWidth,
        height: seo.ogImageHeight,
        alt: seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
};

/** RealEstateListing structured data for the single offer on this page. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: 'DIFC Duplex Penthouse — Park Towers',
  description: seo.description,
  url: siteUrl,
  datePosted: new Date().toISOString().split('T')[0],
  image: [absoluteUrl(seo.ogImage), absoluteUrl(hero.image)],
  about: {
    '@type': 'Apartment',
    name: 'DIFC Duplex Penthouse, Park Towers',
    description: hero.subtitle,
    numberOfBedrooms: seo.numberOfBedrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: seo.floorSizeValue,
      unitCode: seo.floorSizeUnitCode,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Park Towers',
      addressLocality: seo.locality,
      addressRegion: seo.region,
      addressCountry: seo.country,
    },
  },
  offers: {
    '@type': 'Offer',
    price: seo.numericPrice,
    priceCurrency: seo.currency,
    availability: 'https://schema.org/InStock',
    url: siteUrl,
    seller: {
      '@type': 'RealEstateAgent',
      name: contact.agentCompany,
      telephone: contact.phoneDisplay,
      email: contact.email,
      url: contact.websiteUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Golden Mile 9, Palm Jumeirah',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <noscript>
          {/* Scroll reveals start hidden; without JavaScript they must not stay that way. */}
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        {children}
        <script
          type="application/ld+json"
          // Structured data is static and author-controlled.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
