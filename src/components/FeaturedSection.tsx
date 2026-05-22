import { useTranslations } from 'next-intl';
import { getFeatured } from '@/data/products';
import ProductCard from './ProductCard';

export default function FeaturedSection() {
  const t = useTranslations('featured');
  const featured = getFeatured();
  if (featured.length === 0) return null;

  return (
    <section className="section bg-cream-50">
      <div className="container">
        <div className="max-w-xl mb-8">
          <p className="section-eyebrow">{t('subtitle')}</p>
          <h2 className="section-title">{t('title')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
