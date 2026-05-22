import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { guidesMetadata } from '@/data/guides';
import GuideCard from '@/components/guides/GuideCard';
import { buildAlternates, localeUrl } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = '/guias';
  const title = 'Guías técnicas · Electricidad Ramallo';
  const description =
    'Guías prácticas para electricistas, constructores y usuarios finales: secciones de cable, térmicas, disyuntores, tableros, iluminación LED. Todo lo que necesitás para tu instalación.';
  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: { title, description, url: localeUrl(locale, path) }
  };
}

export default async function GuidesIndex({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="section">
      <div className="container">
        <header className="max-w-2xl">
          <p className="section-eyebrow">Recursos</p>
          <h1 className="section-title">Guías técnicas</h1>
          <p className="mt-3 text-ink-mute text-lg">
            Información práctica para elegir bien los materiales eléctricos de tu obra.
            Escrito por electricistas con experiencia, sin tecnicismos innecesarios.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guidesMetadata.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
