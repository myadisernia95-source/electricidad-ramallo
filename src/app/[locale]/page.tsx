import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import OffersSection from '@/components/OffersSection';
import FeaturedSection from '@/components/FeaturedSection';
import ShippingInfo from '@/components/ShippingInfo';
import InstagramSection from '@/components/InstagramSection';
import Newsletter from '@/components/Newsletter';
import GuidesPreview from '@/components/GuidesPreview';
import { buildAlternates, buildOpenGraph } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const isPt = locale === 'pt';
  const title = isEs
    ? 'Materiales Eléctricos en Núñez, CABA · Electricidad Ramallo'
    : isPt
    ? 'Materiais Elétricos em Núñez, Buenos Aires · Electricidad Ramallo'
    : 'Electrical Materials in Núñez, Buenos Aires · Electricidad Ramallo';
  const description = isEs
    ? 'Distribuidor de materiales eléctricos en Núñez, CABA. ABB, Siemens, Cambre, Philips, Argenplas. 40 años abasteciendo obras, edificios y consorcios. Envíos a CABA y AMBA. Atención por WhatsApp +54 9 11 3603-0603.'
    : isPt
    ? 'Distribuidor de materiais elétricos em Núñez, Buenos Aires. ABB, Siemens, Cambre, Philips, Argenplas. 40 anos abastecendo obras, prédios e condomínios. Entregas em CABA e AMBA. Atendimento por WhatsApp.'
    : 'Electrical materials distributor in Núñez, Buenos Aires. ABB, Siemens, Cambre, Philips, Argenplas. 40 years supplying construction sites, buildings and associations. Delivery across Buenos Aires. WhatsApp service.';
  return {
    title,
    description,
    alternates: buildAlternates(locale, '/'),
    openGraph: buildOpenGraph({ locale, path: '/', title, description })
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <CategoryGrid />
      <OffersSection />
      <FeaturedSection />
      <ShippingInfo />
      <GuidesPreview />
      <InstagramSection />
      <Newsletter />
    </>
  );
}
