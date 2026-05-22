import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ProductCard from '@/components/ProductCard';
import { getOffers } from '@/data/products';
import { buildAlternates, localeUrl } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = '/ofertas';
  const title = locale === 'es'
    ? 'Ofertas en Materiales Eléctricos · Electricidad Ramallo Núñez'
    : locale === 'pt'
    ? 'Ofertas em Materiais Elétricos · Electricidad Ramallo Núñez'
    : 'Deals on Electrical Materials · Electricidad Ramallo Núñez';
  const description = locale === 'es'
    ? 'Ofertas relámpago en materiales eléctricos: cables Argenplas, térmicas y disyuntores ABB y Siemens. Precios especiales por tiempo limitado. Consultá por WhatsApp.'
    : 'Flash deals on electrical materials with special prices.';
  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: { title, description, url: localeUrl(locale, path) }
  };
}

export default async function OffersPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'offers' });
  const offers = getOffers();

  return (
    <section className="section">
      <div className="container">
        <header className="max-w-2xl">
          <p className="section-eyebrow">⚡ Flash</p>
          <h1 className="section-title">{t('title')}</h1>
          <p className="mt-3 text-ink-mute">{t('subtitle')}</p>
        </header>

        {offers.length === 0 ? (
          <p className="mt-12 text-ink-mute">No hay ofertas activas en este momento.</p>
        ) : (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {offers.map((p) => (
              <ProductCard key={p.slug} product={p} showOfferBadge />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
