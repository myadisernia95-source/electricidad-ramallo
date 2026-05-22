import { useTranslations } from 'next-intl';
import { getOffers } from '@/data/products';
import ProductCard from './ProductCard';

export default function OffersSection() {
  const t = useTranslations('offers');
  const offers = getOffers();
  if (offers.length === 0) return null;

  return (
    <section className="section bg-white" id="ofertas">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div className="max-w-xl">
            <p className="section-eyebrow">⚡ Flash</p>
            <h2 className="section-title">{t('title')}</h2>
            <p className="mt-3 text-ink-mute">{t('subtitle')}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {offers.map((p) => (
            <ProductCard key={p.slug} product={p} showOfferBadge />
          ))}
        </div>
      </div>
    </section>
  );
}
