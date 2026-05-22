import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CartPage from '@/components/cart/CartPage';
import { buildAlternates, localeUrl } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cart' });
  const path = '/carrito';
  return {
    title: t('title'),
    description: t('metaDescription'),
    // Cart is per-user dynamic content — don't index, but follow links
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, path),
    openGraph: { title: t('title'), url: localeUrl(locale, path) }
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CartPage />;
}
