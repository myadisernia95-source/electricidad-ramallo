import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getGuide, guides } from '@/data/guides';
import { getProduct } from '@/data/products';
import JsonLd from '@/components/JsonLd';
import { techArticleJsonLd, breadcrumbJsonLd } from '@/lib/jsonld';
import { buildAlternates, localeUrl } from '@/lib/seo';
import ProductCard from '@/components/ProductCard';

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.metadata.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const { metadata: m } = guide;
  const path = `/guias/${m.slug}`;
  const description = m.metaDescription ?? m.excerpt;
  return {
    title: m.title,
    description,
    keywords: m.targetKeywords,
    alternates: buildAlternates(locale, path),
    openGraph: {
      title: m.title,
      description,
      url: localeUrl(locale, path),
      type: 'article',
      publishedTime: m.published,
      modifiedTime: m.updated ?? m.published
    }
  };
}

export default async function GuidePage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  setRequestLocale(locale);

  const { metadata: m, default: Component } = guide;

  const breadcrumbData = breadcrumbJsonLd([
    { name: 'Inicio',          url: localeUrl(locale, '/') },
    { name: 'Guías técnicas',  url: localeUrl(locale, '/guias') },
    { name: m.title,           url: localeUrl(locale, `/guias/${m.slug}`) }
  ]);

  const articleData = techArticleJsonLd({
    title: m.title,
    description: m.metaDescription ?? m.excerpt,
    slug: m.slug,
    published: m.published,
    updated: m.updated,
    keywords: m.targetKeywords,
    locale
  });

  const relatedProducts = (m.relatedProducts ?? [])
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const publishedDate = new Date(m.published).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <article className="section">
        <div className="container max-w-3xl">
          <nav className="text-xs text-ink-mute flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/" className="hover:text-brand">Inicio</Link>
            <span aria-hidden>›</span>
            <Link href="/guias" className="hover:text-brand">Guías técnicas</Link>
            <span aria-hidden>›</span>
            <span className="text-ink">{m.title}</span>
          </nav>

          <header className="mb-10">
            <div className="text-5xl mb-4" aria-hidden>{m.icon ?? '📖'}</div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-ink">
              {m.title}
            </h1>
            <p className="mt-4 text-lg text-ink-mute">{m.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-xs text-ink-mute uppercase tracking-widest font-bold">
              <time dateTime={m.published}>{publishedDate}</time>
              <span aria-hidden>·</span>
              <span>{m.readTimeMin} min de lectura</span>
            </div>
          </header>

          <div className="guide-content text-ink text-[17px] leading-relaxed">
            <Component />
          </div>
        </div>
      </article>

      {relatedProducts.length > 0 && (
        <section className="section bg-cream-50">
          <div className="container">
            <h2 className="section-title">Productos mencionados en esta guía</h2>
            <p className="mt-2 text-ink-mute">Todo lo que necesitás, con envíos a CABA y AMBA.</p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} showOfferBadge />
              ))}
            </div>
          </div>
        </section>
      )}

      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData} />
    </>
  );
}
