import type { Metadata } from 'next';

export const siteUrl = 'https://katmartinez.fyi';
export const siteName = 'Kat Martinez';
export const siteDescription =
  'Designer, engineer, and writer, living in Tampa, Florida.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: '/og.png',
        width: 800,
        height: 600,
        alt: siteName,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    'Kat Martinez',
    'Katherine Martinez',
    'Design System',
    'Design Systems',
    'DesignOps',
    'Design Operations',
    'Portfolio',
    'Design Engineer',
    'Design Engineering',
    'Engineer',
    'Engineering',
    'Design',
    'Designer',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    site: '@katmartinez08',
    creator: '@katmartinez08',
    card: 'summary_large_image',
    images: [
      {
        url: '/og.png',
        width: 800,
        height: 600,
        alt: siteName,
      },
    ],
  },
} satisfies Metadata;
