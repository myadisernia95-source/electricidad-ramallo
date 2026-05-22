import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { categories, type CategorySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { buildAlternates, buildOpenGraph, localeUrl } from '@/lib/seo';

const validSlugs = categories.map((c) => c.slug);

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!(validSlugs as string[]).includes(slug)) return {};
  const t = await getTranslations({ locale, namespace: 'categories' });
  const cat = slug as CategorySlug;
  const name = t(`${cat}.name`);
  const desc = t(`${cat}.desc`);
  const path = `/categorias/${cat}`;
  const isEs = locale === 'es';
  const title = isEs
    ? `${name} en Núñez, CABA · Electricidad Ramallo`
    : locale === 'pt'
    ? `${name} em Núñez, Buenos Aires · Electricidad Ramallo`
    : `${name} in Núñez, Buenos Aires · Electricidad Ramallo`;
  const description = isEs
    ? `${desc} Comprá en Electricidad Ramallo, Núñez. Envíos a CABA y AMBA. Consultá precio por WhatsApp.`
    : `${desc} Electricidad Ramallo, Núñez. Delivery across Buenos Aires.`;
  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: buildOpenGraph({ locale, path, title, description })
  };
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!(validSlugs as string[]).includes(slug)) notFound();
  setRequestLocale(locale);

  const category = slug as CategorySlug;
  const t = await getTranslations({ locale, namespace: 'categories' });
  const tnav = await getTranslations({ locale, namespace: 'nav' });
  const products = getProductsByCategory(category);

  const breadcrumbData = breadcrumbJsonLd([
    { name: tnav('home'),          url: localeUrl(locale, '/') },
    { name: tnav('categories'),    url: localeUrl(locale, '/categorias') },
    { name: t(`${category}.name`), url: localeUrl(locale, `/categorias/${category}`) }
  ]);

  return (
    <section className="section">
      <div className="container">
        <nav className="text-xs text-ink-mute flex items-center gap-2 mb-6">
          <Link href="/" className="hover:text-brand">{tnav('home')}</Link>
          <span aria-hidden>›</span>
          <Link href="/categorias" className="hover:text-brand">{tnav('categories')}</Link>
          <span aria-hidden>›</span>
          <span className="text-ink">{t(`${category}.name`)}</span>
        </nav>

        <header className="max-w-2xl">
          <p className="section-eyebrow">{tnav('categories')}</p>
          <h1 className="section-title">{t(`${category}.name`)}</h1>
          <p className="mt-3 text-ink-mute text-lg">{t(`${category}.desc`)}</p>
          <p className="mt-3 text-ink-mute">{t(`${category}.long`)}</p>
        </header>

        {products.length === 0 ? (
          <p className="mt-12 text-ink-mute">No hay productos cargados en esta categoría todavía.</p>
        ) : (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} showOfferBadge />
            ))}
          </div>
        )}
      </div>

      <JsonLd data={breadcrumbData} />
    </section>
  );
}
