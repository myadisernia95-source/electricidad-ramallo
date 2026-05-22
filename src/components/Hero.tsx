import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { whatsappLink } from '@/lib/whatsapp';

export default function Hero() {
  const t = useTranslations('hero');
  const tt = useTranslations('trust');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-cream-100">
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-brand-100 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-brand-200 opacity-30 blur-3xl pointer-events-none" />

      <div className="container relative grid lg:grid-cols-12 gap-10 items-center py-16 md:py-24">
        <div className="lg:col-span-7">
          <p className="section-eyebrow">{t('eyebrow')}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-ink">
            {t('title')}
          </h1>
          <p className="mt-6 text-lg text-ink-mute max-w-xl">{t('subtitle')}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink('Hola Electricidad Ramallo, quería hacer una consulta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.58 5.93L0 24l6.36-1.67a11.83 11.83 0 0 0 5.7 1.45c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44Z" />
              </svg>
              {t('ctaPrimary')}
            </a>
            <Link href="/categorias" className="btn-outline">
              {t('ctaSecondary')}
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              { icon: '🏛️', label: tt('years') },
              { icon: '🚚', label: tt('shipping') },
              { icon: '🏷️', label: tt('wholesale') },
              { icon: '🧠', label: tt('advisory') }
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-ink/80">
                <span aria-hidden className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-cream-200 bg-cream-100">
            <Image
              src="/FRONT.jpg"
              alt="Local Electricidad Ramallo - Ramallo 2339, Núñez"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="hidden md:block absolute -left-6 -bottom-6 bg-white rounded-2xl shadow-card px-5 py-4 max-w-[220px]">
            <p className="text-xs uppercase tracking-widest text-brand font-bold">Desde 1986</p>
            <p className="text-sm mt-1 text-ink-mute leading-snug">
              Atención personalizada y stock de las mejores marcas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
