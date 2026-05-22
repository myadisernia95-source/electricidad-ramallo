import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SearchBar from '@/components/SearchBar';
import ProductCard from '@/components/ProductCard';
import { searchProducts } from '@/lib/search';
import { whatsappLink } from '@/lib/whatsapp';
import { buildAlternates } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'search' });
  return {
    title: t('title'),
    // Search results are not canonical content — discourage indexing of query variants
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, '/buscar')
  };
}

export default async function SearchPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  const { q: rawQ } = await searchParams;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'search' });
  const tw = await getTranslations({ locale, namespace: 'whatsappWidget' });

  const q = (rawQ ?? '').trim();
  const results = searchProducts(q);

  const exact = results.filter((r) => r.exact);
  const approx = results.filter((r) => !r.exact);
  const hasExact = exact.length > 0;
  const showApprox = approx.length > 0 && !hasExact;

  return (
    <section className="section">
      <div className="container">
        <header className="max-w-2xl">
          <p className="section-eyebrow">{t('title')}</p>
          <h1 className="section-title">
            {q ? t('exactTitle', { q }) : t('title')}
          </h1>
          <div className="mt-5 max-w-md">
            <SearchBar />
          </div>
        </header>

        {!q && (
          <p className="mt-10 text-ink-mute">{t('noQuery')}</p>
        )}

        {q && results.length === 0 && (
          <div className="mt-10 max-w-xl">
            <p className="text-lg text-ink">{t('noResults', { q })}</p>
            <p className="mt-2 text-ink-mute">{t('noResultsHint')}</p>
            <a
              href={whatsappLink(`Hola, estoy buscando: ${q}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.58 5.93L0 24l6.36-1.67a11.83 11.83 0 0 0 5.7 1.45c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44Z" />
              </svg>
              {tw('label')}
            </a>
          </div>
        )}

        {hasExact && (
          <>
            <p className="mt-6 text-sm text-ink-mute">
              {t('resultsCount', { count: exact.length })}
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {exact.map(({ product }) => (
                <ProductCard key={product.slug} product={product} showOfferBadge />
              ))}
            </div>
          </>
        )}

        {showApprox && (
          <>
            <div className="mt-10 max-w-2xl">
              <h2 className="font-display text-xl font-bold">{t('approxTitle')}</h2>
              <p className="mt-1 text-ink-mute">{t('approxHint')}</p>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {approx.map(({ product }) => (
                <ProductCard key={product.slug} product={product} showOfferBadge />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
