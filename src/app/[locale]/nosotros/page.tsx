import Image from 'next/image';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildAlternates, localeUrl } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = '/nosotros';
  const title = locale === 'es'
    ? 'Nosotros · 40 años de Electricidad Ramallo en Núñez'
    : locale === 'pt'
    ? 'Sobre nós · 40 anos da Electricidad Ramallo em Núñez'
    : 'About us · 40 years of Electricidad Ramallo in Núñez';
  const description = locale === 'es'
    ? 'Empresa familiar con más de 40 años en el rubro eléctrico, acompañando obras y construcciones en CABA y AMBA. Distribuidores de ABB, Siemens, Cambre, Philips y Argenplas.'
    : locale === 'pt'
    ? 'Empresa familiar com mais de 40 anos no ramo elétrico, acompanhando obras e construções em Buenos Aires. Distribuidores ABB, Siemens, Cambre, Philips e Argenplas.'
    : 'Family business with over 40 years in the electrical industry, supporting construction in Buenos Aires. ABB, Siemens, Cambre, Philips, Argenplas distributors.';
  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: { title, description, url: localeUrl(locale, path) }
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });

  const values = [
    { title: t('value1Title'), text: t('value1'), icon: '🏛️' },
    { title: t('value2Title'), text: t('value2'), icon: '✅' },
    { title: t('value3Title'), text: t('value3'), icon: '🤝' },
    { title: t('value4Title'), text: t('value4'), icon: '🚚' }
  ];

  return (
    <>
      <section className="bg-cream-100">
        <div className="container py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-eyebrow">{t('eyebrow')}</p>
            <h1 className="section-title">{t('title')}</h1>
            <p className="mt-4 text-lg text-ink-mute">{t('lead')}</p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
            <Image
              src="/FRONT.jpg"
              alt="Local Electricidad Ramallo - Ramallo 2339, Núñez"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl space-y-6 text-ink-mute leading-relaxed text-lg">
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p>{t('p3')}</p>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container">
          <h2 className="section-title text-center">{t('valuesTitle')}</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <div className="text-3xl">{v.icon}</div>
                <h3 className="mt-3 font-display font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-mute">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
