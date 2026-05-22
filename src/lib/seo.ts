import { locales, defaultLocale, type Locale } from '@/i18n/config';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://electricidadramallo.com.ar';

const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: 'Electricidad Ramallo · Materiales eléctricos en Núñez'
};

function ogLocaleFor(locale: string): 'es_AR' | 'en_US' | 'pt_BR' {
  if (locale === 'pt') return 'pt_BR';
  if (locale === 'en') return 'en_US';
  return 'es_AR';
}

/** Build the openGraph metadata object for a page, with the brand OG image. */
export function buildOpenGraph(args: {
  locale: Locale | string;
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
  images?: { url: string; alt?: string }[];
}) {
  return {
    title: args.title,
    description: args.description,
    url: localeUrl(args.locale, args.path),
    type: args.type ?? 'website',
    siteName: 'Electricidad Ramallo',
    locale: ogLocaleFor(args.locale as string),
    images: args.images && args.images.length > 0 ? args.images : [DEFAULT_OG_IMAGE]
  };
}

/** Absolute URL for a path on a given locale (default locale has no prefix). */
export function localeUrl(locale: Locale | string, path: string = '/'): string {
  const clean = path === '/' ? '' : path;
  if (locale === defaultLocale) return `${SITE_URL}${clean || '/'}`;
  return `${SITE_URL}/${locale}${clean}`;
}

/** Build the `alternates` object for a Next.js metadata export. */
export function buildAlternates(locale: Locale | string, path: string = '/') {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = localeUrl(l, path);
  // x-default points to the default-locale URL (best practice for hreflang)
  languages['x-default'] = localeUrl(defaultLocale, path);
  return {
    canonical: localeUrl(locale, path),
    languages
  };
}
