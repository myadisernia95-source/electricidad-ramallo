import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { categories } from '@/data/categories';

export default function CategoryGrid() {
  const t = useTranslations('categories');

  return (
    <section className="section bg-cream-50" id="categorias">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-eyebrow">{t('subtitle')}</p>
          <h2 className="section-title">{t('title')}</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categorias/${c.slug}`}
              className="group card hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.image}
                  alt={t(`${c.slug}.name`)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                <span className="absolute top-3 left-3 text-2xl" aria-hidden>{c.icon}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-ink">
                  {t(`${c.slug}.name`)}
                </h3>
                <p className="mt-1 text-sm text-ink-mute line-clamp-2">
                  {t(`${c.slug}.desc`)}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                  {t('viewAll')} <span aria-hidden className="ml-1 group-hover:ml-2 transition-all">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
