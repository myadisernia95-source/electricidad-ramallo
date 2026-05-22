import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Electricidad Ramallo · Materiales Eléctricos en Núñez, CABA',
    template: '%s · Electricidad Ramallo'
  },
  description:
    'Materiales eléctricos en Núñez, Buenos Aires. Distribuidor de ABB, Siemens, Cambre, Philips y Argenplas. 40 años abasteciendo obras, edificios y consorcios. Envíos a CABA y AMBA. Atención por WhatsApp.',
  applicationName: 'Electricidad Ramallo',
  authors: [{ name: 'Electricidad Ramallo' }],
  generator: 'Next.js',
  keywords: [
    'materiales eléctricos',
    'electricidad Núñez',
    'electricidad CABA',
    'cables Argenplas',
    'térmicas ABB',
    'disyuntores Siemens',
    'fichas Cambre',
    'lámparas Philips',
    'distribuidor eléctrico Buenos Aires',
    'tablero eléctrico CABA'
  ],
  openGraph: {
    type: 'website',
    siteName: 'Electricidad Ramallo',
    locale: 'es_AR',
    alternateLocale: ['en_US', 'pt_BR'],
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Electricidad Ramallo · Materiales eléctricos en Núñez'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${SITE_URL}/og-image.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 }
  },
  icons: { icon: '/LOGO.png', apple: '/LOGO.png' },
  verification: {
    google: 'EbTy4yqg00KYVR-fniFXvJeqTTZd2eHAPLo5HHlXOIo'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
