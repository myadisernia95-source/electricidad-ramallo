import { useTranslations } from 'next-intl';

export default function ShippingInfo() {
  const t = useTranslations('shipping');
  return (
    <section className="section bg-ink text-cream-100">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-200">
            {t('title')}
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
            {t('shippingTitle')}
          </h2>
          <p className="mt-4 text-cream-100/80 max-w-md">{t('shippingText')}</p>
        </div>
        <div className="bg-cream-100/5 border border-cream-100/10 rounded-2xl p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-200">
            {t('paymentTitle')}
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {[
              { label: 'Mercado Pago', icon: '💳' },
              { label: 'Transferencias', icon: '🏦' },
              { label: 'Tarjetas', icon: '💳' },
              { label: 'Efectivo', icon: '💵' }
            ].map((p) => (
              <li key={p.label} className="flex items-center gap-2 bg-cream-100/5 rounded-xl px-3 py-2.5">
                <span aria-hidden>{p.icon}</span>
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
