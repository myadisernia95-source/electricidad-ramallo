'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Newsletter() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  // Honeypot: hidden field. Real users won't fill it, bots will. Sent to the
  // API which silently drops the submission when populated.
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website })
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      setEmail('');
      setWebsite('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section bg-brand text-white">
      <div className="container max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{t('title')}</h2>
        <p className="mt-3 text-white/85">{t('subtitle')}</p>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          {/* Honeypot — invisible to humans, fillable by automated bots. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0 pointer-events-none"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('placeholder')}
            className="flex-1 px-5 py-3 rounded-full text-ink bg-white placeholder:text-ink-mute outline-none focus:ring-4 focus:ring-white/30"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn bg-ink hover:bg-ink-soft text-white disabled:opacity-60"
          >
            {status === 'loading' ? '...' : t('submit')}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-white font-medium">{t('success')}</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-yellow-200 font-medium">{t('error')}</p>
        )}

        <p className="mt-6 text-xs text-white/60">{t('consent')}</p>
      </div>
    </section>
  );
}
