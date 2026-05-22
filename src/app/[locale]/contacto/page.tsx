import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { whatsappLink } from '@/lib/whatsapp';
import { buildAlternates, localeUrl } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = '/contacto';
  const title = locale === 'es'
    ? 'Contacto · Ramallo 2339, Núñez CABA · WhatsApp +54 9 11 3603-0603'
    : 'Contact · Ramallo 2339, Núñez Buenos Aires';
  const description = locale === 'es'
    ? 'Visitanos en Ramallo 2339, Núñez CABA. Lunes a viernes de 9 a 17 hs. WhatsApp +54 9 11 3603-0603. Envíos a CABA y AMBA.'
    : 'Visit us at Ramallo 2339, Núñez, Buenos Aires. Mon-Fri 9-17. WhatsApp +54 9 11 3603-0603.';
  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: { title, description, url: localeUrl(locale, path) }
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });
  const tw = await getTranslations({ locale, namespace: 'whatsappWidget' });

  return (
    <section className="section">
      <div className="container">
        <header className="max-w-2xl">
          <p className="section-eyebrow">{t('title')}</p>
          <h1 className="section-title">{t('title')}</h1>
          <p className="mt-3 text-ink-mute text-lg">{t('lead')}</p>
        </header>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <InfoRow label={t('addressLabel')} value={t('address')} icon="📍" />
            <InfoRow label={t('phoneLabel')} value={t('phone')} icon="📱" />
            <InfoRow label={t('hoursLabel')} value={t('hours')} icon="🕒" />
            <a
              href={whatsappLink(tw('presetMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.58 5.93L0 24l6.36-1.67a11.83 11.83 0 0 0 5.7 1.45c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44Z" />
              </svg>
              {tw('label')}
            </a>
          </div>

          <div className="card overflow-hidden">
            <h2 className="px-5 pt-5 font-display font-bold">{t('mapTitle')}</h2>
            <iframe
              title={t('mapTitle')}
              src="https://www.google.com/maps?q=Ramallo+2339,+N%C3%BA%C3%B1ez,+CABA,+Argentina&output=embed"
              className="w-full h-[400px] mt-3 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-50 border border-cream-200">
      <span className="text-2xl" aria-hidden>{icon}</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-brand">{label}</p>
        <p className="mt-1 text-ink font-semibold">{value}</p>
      </div>
    </div>
  );
}
