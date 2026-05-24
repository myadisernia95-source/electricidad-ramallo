import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getProduct, products } from '@/data/products';
import { whatsappLink, productInquiryMessage } from '@/lib/whatsapp';
import PriceBlock from '@/components/PriceBlock';
import AddToCartButton from '@/components/cart/AddToCartButton';
import JsonLd from '@/components/JsonLd';
import { productJsonLd, breadcrumbJsonLd } from '@/lib/jsonld';
import { buildAlternates, buildOpenGraph, SITE_URL, localeUrl } from '@/lib/seo';
import { getGuidesForProduct } from '@/data/guides';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const path = `/producto/${product.slug}`;
  const title = `${product.name} · ${product.brand}`;
  const description = `${product.shortDesc} Comprá ${product.name} en Electricidad Ramallo, Núñez CABA. Envíos a CABA y AMBA. Consultá precio por WhatsApp.`;
  const imageUrl = product.image.startsWith('http')
    ? product.image
    : `${SITE_URL}${product.image}`;
  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: buildOpenGraph({
      locale,
      path,
      title,
      description,
      images: [{ url: imageUrl, alt: product.name }]
    })
  };
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'product' });
  const tcat = await getTranslations({ locale, namespace: 'categories' });
  const tnav = await getTranslations({ locale, namespace: 'nav' });

  const breadcrumbData = breadcrumbJsonLd([
    { name: tnav('home'),                       url: localeUrl(locale, '/') },
    { name: tcat(`${product.category}.name`),   url: localeUrl(locale, `/categorias/${product.category}`) },
    { name: product.name,                       url: localeUrl(locale, `/producto/${product.slug}`) }
  ]);

  return (
    <section className="section">
      <div className="container">
        <nav className="text-xs text-ink-mute flex items-center gap-2 mb-6 flex-wrap">
          <Link href="/" className="hover:text-brand">{tnav('home')}</Link>
          <span aria-hidden>›</span>
          <Link href={`/categorias/${product.category}`} className="hover:text-brand">
            {tcat(`${product.category}.name`)}
          </Link>
          <span aria-hidden>›</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="card overflow-hidden">
            <div className="relative aspect-square bg-cream-50">
              <Image
                src={product.image}
                alt={`${product.name} - ${product.brand} - Electricidad Ramallo`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-ink-mute font-semibold">
              {t('brand')}: {product.brand}
            </p>
            <h1 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-ink-mute text-lg">{product.shortDesc}</p>

            <div className="mt-6">
              <PriceBlock
                regularPrice={product.regularPrice}
                offerPrice={product.offerPrice}
                unit={product.unit}
                size="lg"
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="sm:max-w-xs flex-1">
                <AddToCartButton slug={product.slug} size="md" />
              </div>
              <a
                href={whatsappLink(productInquiryMessage(product.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark px-2 py-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.58 5.93L0 24l6.36-1.67a11.83 11.83 0 0 0 5.7 1.45c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44Z" />
                </svg>
                {t('consultWhatsapp')}
              </a>
            </div>

            <div className="mt-10 border-t border-cream-200 pt-6">
              <h2 className="font-display text-lg font-bold">{t('description')}</h2>
              <p className="mt-3 text-ink-mute leading-relaxed whitespace-pre-line">{product.description}</p>
            </div>

            {product.specs && product.specs.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold">{t('specs')}</h2>
                <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.specs.map((s) => (
                    <div key={s.label} className="flex justify-between border-b border-cream-200 py-2 text-sm">
                      <dt className="text-ink-mute">{s.label}</dt>
                      <dd className="font-semibold text-ink">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <Link href={`/categorias/${product.category}`} className="mt-10 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
              ← {t('back')}
            </Link>
          </div>
        </div>
      </div>

      <JsonLd data={productJsonLd(product, locale)} />
      <JsonLd data={breadcrumbData} />

      {(() => {
        const related = getGuidesForProduct(product.slug);
        if (related.length === 0) return null;
        return (
          <aside className="container mt-16">
            <h2 className="section-title">Guías relacionadas</h2>
            <p className="mt-2 text-ink-mute">Información técnica para elegir y usar este producto.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {related.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guias/${g.slug}`}
                    className="card p-5 flex gap-4 items-start hover:-translate-y-0.5 transition-transform"
                  >
                    <span className="text-3xl shrink-0" aria-hidden>{g.icon ?? '📖'}</span>
                    <div>
                      <p className="font-display font-bold text-ink">{g.title}</p>
                      <p className="mt-1 text-sm text-ink-mute line-clamp-2">{g.excerpt}</p>
                      <p className="mt-2 text-xs uppercase tracking-widest text-brand font-bold">
                        Leer guía →
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        );
      })()}
    </section>
  );
}
