'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

type Props = { className?: string; compact?: boolean };

export default function SearchBar({ className = '', compact = false }: Props) {
  const t = useTranslations('search');
  const router = useRouter();
  const [q, setQ] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    router.push(`/buscar?q=${encodeURIComponent(query)}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      role="search"
      className={`relative flex items-center w-full ${className}`}
    >
      <label htmlFor="search-input" className="sr-only">{t('submit')}</label>
      <span className="absolute left-3 inline-flex items-center text-ink-mute pointer-events-none">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
      <input
        id="search-input"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t('placeholder')}
        autoComplete="off"
        className={`w-full bg-white border border-cream-200 rounded-full pl-10 pr-24 ${compact ? 'py-2 text-sm' : 'py-2.5 text-sm'} text-ink placeholder:text-ink-mute focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand`}
      />
      <button
        type="submit"
        className="absolute right-1.5 inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1.5 transition-colors"
      >
        {t('submit')}
      </button>
    </form>
  );
}
