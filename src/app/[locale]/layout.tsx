import { Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import JsonLd from '@/components/JsonLd';
import { CartProvider } from '@/components/cart/CartProvider';
import { localBusinessJsonLd, organizationJsonLd, websiteJsonLd } from '@/lib/jsonld';
import { buildAlternates } from '@/lib/seo';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: buildAlternates(locale, '/') };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();
  setRequestLocale(locale as Locale);
  const messages = await getMessages();

  const ogLocale = locale === 'es' ? 'es-AR' : locale === 'pt' ? 'pt-BR' : 'en-US';

  return (
    <html lang={ogLocale} className={poppins.variable}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloating />
          </CartProvider>
        </NextIntlClientProvider>
        <JsonLd data={localBusinessJsonLd(locale)} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
