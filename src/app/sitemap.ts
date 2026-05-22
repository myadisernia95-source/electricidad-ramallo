import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { guidesMetadata } from '@/data/guides';
import { locales, defaultLocale } from '@/i18n/config';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://electricidadramallo.com.ar';

/** Build a locale-prefixed path. Default locale (es) lives at the root. */
function localePath(locale: string, path: string): string {
  const clean = path === '/' ? '' : path;
  if (locale === defaultLocale) return `${SITE_URL}${clean || '/'}`;
  return `${SITE_URL}/${locale}${clean}`;
}

/** Build alternates.languages map for one path across all locales. */
function alternates(path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = localePath(l, path);
  return languages;
}

const STATIC_PATHS: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/',            changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/categorias',  changeFrequency: 'weekly',  priority: 0.9 },
  { path: '/ofertas',     changeFrequency: 'daily',   priority: 0.9 },
  { path: '/guias',       changeFrequency: 'weekly',  priority: 0.8 },
  { path: '/nosotros',    changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contacto',    changeFrequency: 'monthly', priority: 0.7 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static pages — emit one entry per locale
  for (const { path, changeFrequency, priority } of STATIC_PATHS) {
    for (const l of locales) {
      entries.push({
        url: localePath(l, path),
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages: alternates(path) }
      });
    }
  }

  // Category pages
  for (const c of categories) {
    const path = `/categorias/${c.slug}`;
    for (const l of locales) {
      entries.push({
        url: localePath(l, path),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: { languages: alternates(path) }
      });
    }
  }

  // Technical guides
  for (const g of guidesMetadata) {
    const path = `/guias/${g.slug}`;
    for (const l of locales) {
      entries.push({
        url: localePath(l, path),
        lastModified: g.updated ? new Date(g.updated) : new Date(g.published),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages: alternates(path) }
      });
    }
  }

  // Product pages
  for (const p of products) {
    const path = `/producto/${p.slug}`;
    for (const l of locales) {
      entries.push({
        url: localePath(l, path),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: p.offer ? 0.8 : 0.7,
        alternates: { languages: alternates(path) }
      });
    }
  }

  return entries;
}
