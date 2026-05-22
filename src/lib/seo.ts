import { locales, defaultLocale, type Locale } from '@/i18n/config';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://electricidadramallo.com.ar';

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
