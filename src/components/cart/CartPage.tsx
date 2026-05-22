'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCart } from './CartProvider';
import { buildCartSummary, buildOrderMessage, type DeliveryMode } from '@/lib/cartMessage';
import { formatARS } from '@/lib/format';
import { whatsappLink } from '@/lib/whatsapp';

export default function CartPage() {
  const t = useTranslations('cart');
  const { items, isHydrated, setQty, remove, clear } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [deliveryMode, setDeliveryMode] = useState<DeliveryMode>('pickup');
  const [shippingAddress, setShippingAddress] = useState('');
  const [notes, setNotes] = useState('');

  const summary = useMemo(() => buildCartSummary(items), [items]);

  if (!isHydrated) {
    return (
      <section className="section">
        <div className="container max-w-4xl">
          <h1 className="section-title">{t('title')}</h1>
          <p className="mt-4 text-ink-mute">{t('loading')}</p>
        </div>
      </section>
    );
  }

  if (summary.lines.length === 0) {
    return (
      <section className="section">
        <div className="container max-w-2xl text-center">
          <div className="text-6xl mb-4" aria-hidden>🛒</div>
          <h1 className="section-title">{t('empty.title')}</h1>
          <p className="mt-3 text-ink-mute text-lg">{t('empty.body')}</p>
          <Link href="/categorias" className="btn-primary mt-8 inline-flex">
            {t('empty.cta')}
          </Link>
        </div>
      </section>
    );
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildOrderMessage(summary, {
      customerName,
      deliveryMode,
      shippingAddress,
      notes
    });
    const url = whatsappLink(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section">
      <div className="container">
        <header className="max-w-2xl">
          <p className="section-eyebrow">{t('eyebrow')}</p>
          <h1 className="section-title">{t('title')}</h1>
          <p className="mt-2 text-ink-mute">{t('subtitle')}</p>
        </header>

        <div className="mt-10 grid lg:grid-cols-3 gap-8 items-start">
          {/* LIST */}
          <div className="lg:col-span-2 space-y-4">
            {summary.lines.map((line) => (
              <article key={line.product.slug} className="card flex flex-col sm:flex-row gap-4 p-4">
                <Link
                  href={`/producto/${line.product.slug}`}
                  className="relative w-full sm:w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-cream-50"
                >
                  <Image
                    src={line.product.image}
                    alt={line.product.name}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-ink-mute">
                    {line.product.brand}
                  </p>
                  <Link
                    href={`/producto/${line.product.slug}`}
                    className="block mt-0.5 font-display font-bold text-ink hover:text-brand"
                  >
                    {line.product.name}
                  </Link>

                  <div className="mt-3 flex flex-wrap items-center gap-4 justify-between">
                    {/* qty */}
                    <div className="inline-flex items-center border border-cream-200 rounded-full overflow-hidden">
                      <button
                        type="button"
                        aria-label={t('decrease')}
                        onClick={() => setQty(line.product.slug, line.qty - 1)}
                        className="px-3 h-9 hover:bg-cream-100 text-lg leading-none disabled:opacity-40"
                        disabled={line.qty <= 1}
                      >
                        −
                      </button>
                      <span className="px-4 font-semibold tabular-nums" aria-live="polite">
                        {line.qty}
                      </span>
                      <button
                        type="button"
                        aria-label={t('increase')}
                        onClick={() => setQty(line.product.slug, line.qty + 1)}
                        className="px-3 h-9 hover:bg-cream-100 text-lg leading-none"
                      >
                        +
                      </button>
                    </div>

                    {/* price */}
                    <div className="text-right">
                      {line.unitPrice != null ? (
                        <>
                          <p className="text-xs text-ink-mute">
                            {line.qty} × {formatARS(line.unitPrice)}
                          </p>
                          <p className="font-display text-lg font-bold text-ink">
                            {formatARS(line.lineTotal!)}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm font-semibold text-ink-mute italic">
                          {t('priceOnRequest')}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => remove(line.product.slug)}
                      className="text-xs font-semibold text-ink-mute hover:text-brand uppercase tracking-wider"
                    >
                      {t('remove')}
                    </button>
                  </div>
                </div>
              </article>
            ))}

            <div className="flex justify-between pt-4">
              <Link href="/categorias" className="text-sm font-semibold text-brand hover:text-brand-dark">
                ← {t('continueShopping')}
              </Link>
              <button
                type="button"
                onClick={clear}
                className="text-xs font-semibold text-ink-mute hover:text-brand uppercase tracking-wider"
              >
                {t('clearAll')}
              </button>
            </div>
          </div>

          {/* SUMMARY + FORM */}
          <aside className="card p-6 lg:sticky lg:top-28">
            <h2 className="font-display text-xl font-bold">{t('summary')}</h2>

            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink-mute">{t('itemsCount')}</dt>
                <dd className="font-semibold">
                  {summary.lines.reduce((s, l) => s + l.qty, 0)}
                </dd>
              </div>
              <div className="flex justify-between text-base pt-2 border-t border-cream-200">
                <dt className="font-semibold">{t('subtotal')}</dt>
                <dd className="font-display text-xl font-bold text-brand">
                  {summary.subtotal > 0 ? formatARS(summary.subtotal) : t('toConfirm')}
                </dd>
              </div>
              {summary.itemsWithoutPriceCount > 0 && (
                <p className="text-xs text-ink-mute pt-1">
                  ℹ️{' '}
                  {t('itemsToConfirm', { count: summary.itemsWithoutPriceCount })}
                </p>
              )}
            </dl>

            <form onSubmit={onSubmit} className="mt-6 pt-6 border-t border-cream-200 space-y-4">
              <div>
                <label htmlFor="cust-name" className="block text-xs font-bold uppercase tracking-widest text-ink-mute mb-1.5">
                  {t('form.name')}
                </label>
                <input
                  id="cust-name"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={t('form.namePlaceholder')}
                  className="w-full bg-white border border-cream-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
              </div>

              <fieldset>
                <legend className="block text-xs font-bold uppercase tracking-widest text-ink-mute mb-1.5">
                  {t('form.delivery')}
                </legend>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={deliveryMode === 'pickup'}
                      onChange={() => setDeliveryMode('pickup')}
                      className="accent-brand"
                    />
                    <span>🏪 {t('form.pickup')}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      value="shipping"
                      checked={deliveryMode === 'shipping'}
                      onChange={() => setDeliveryMode('shipping')}
                      className="accent-brand"
                    />
                    <span>🚚 {t('form.shipping')}</span>
                  </label>
                </div>
              </fieldset>

              {deliveryMode === 'shipping' && (
                <div>
                  <label htmlFor="cust-addr" className="block text-xs font-bold uppercase tracking-widest text-ink-mute mb-1.5">
                    {t('form.address')}
                  </label>
                  <input
                    id="cust-addr"
                    type="text"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    placeholder={t('form.addressPlaceholder')}
                    className="w-full bg-white border border-cream-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
              )}

              <div>
                <label htmlFor="cust-notes" className="block text-xs font-bold uppercase tracking-widest text-ink-mute mb-1.5">
                  {t('form.notes')}
                </label>
                <textarea
                  id="cust-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t('form.notesPlaceholder')}
                  rows={2}
                  className="w-full bg-white border border-cream-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none"
                />
              </div>

              <button type="submit" className="btn-whatsapp w-full text-base py-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.58 5.93L0 24l6.36-1.67a11.83 11.83 0 0 0 5.7 1.45c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44Z" />
                </svg>
                {t('submitOrder')}
              </button>

              <p className="text-[11px] text-ink-mute leading-snug text-center">
                {t('submitHint')}
              </p>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}
