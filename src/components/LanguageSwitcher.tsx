'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { locales, localeNames, type Locale } from '@/i18n/config';

export default function LanguageSwitcher() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    const segments = pathname.split('/').filter(Boolean);
    const hasLocaleSegment = (locales as readonly string[]).includes(segments[0] ?? '');
    if (hasLocaleSegment) segments.shift();
    const rest = segments.join('/');
    const target = next === 'es' ? `/${rest}` : `/${next}${rest ? '/' + rest : ''}`;
    startTransition(() => router.replace(target || '/'));
  };

  return (
    <div className="relative inline-flex items-center gap-1 text-xs">
      <span className="sr-only">{t('language')}</span>
      {locales.map((lng) => (
        <button
          key={lng}
          type="button"
          aria-label={localeNames[lng]}
          onClick={() => switchTo(lng)}
          disabled={isPending}
          className={`px-2 py-1 rounded-md font-semibold uppercase tracking-wider transition-colors ${
            lng === locale
              ? 'bg-brand text-white'
              : 'text-ink-mute hover:text-ink hover:bg-cream-200'
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
