import Image from 'next/image';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { categories } from '@/data/categories';
import { buildAlternates, localeUrl } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'categories' });
  const path = '/categorias';
  const title = locale === 'es'
    ? 'Catálogo · Iluminación, Cables, Tableros y Materiales Eléctricos'
    : t('title');
  const description = locale === 'es'
    ? 'Explorá nuestro catálogo de materiales eléctricos: iluminación LED, cables Argenplas, térmicas y disyuntores ABB y Siemens, fichas Cambre. Envíos a CABA y AMBA.'
    : t('subtitle');
  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: { title, description, url: localeUrl(locale, path) }
  };
}

export default async function CategoriesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'categories' });

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-eyebrow">{t('subtitle')}</p>
          <h1 className="section-title">{t('title')}</h1>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categorias/${c.slug}`}
              className="group card hover:-translate-y-1 transition-transform"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.image}
                  alt={t(`${c.slug}.name`)}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                <span className="absolute top-3 left-3 text-2xl">{c.icon}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{t(`${c.slug}.name`)}</h3>
                <p className="mt-1 text-sm text-ink-mute">{t(`${c.slug}.desc`)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
