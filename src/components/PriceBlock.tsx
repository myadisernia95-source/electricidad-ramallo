import { useTranslations } from 'next-intl';
import { formatARS, discountPercent } from '@/lib/format';

type Props = {
  regularPrice?: number;
  offerPrice?: number;
  size?: 'sm' | 'lg';
  /** Optional unit label appended to the price, e.g. "metro" → "$1.338 /metro". */
  unit?: 'unidad' | 'metro' | 'rollo' | 'caja';
};

function unitSuffix(unit?: Props['unit']): string {
  if (!unit || unit === 'unidad') return '';
  return ` /${unit}`;
}

export default function PriceBlock({ regularPrice, offerPrice, size = 'sm', unit }: Props) {
  const t = useTranslations('product');
  const suffix = unitSuffix(unit);

  // No prices set → show "consultar"
  if (!regularPrice && !offerPrice) {
    return <p className="text-xs text-ink-mute">{t('noPrice')}</p>;
  }

  // Only one price (no discount)
  if (!regularPrice || !offerPrice || offerPrice >= regularPrice) {
    const single = (offerPrice ?? regularPrice)!;
    return (
      <p
        className={
          size === 'lg'
            ? 'font-display text-3xl font-bold text-ink'
            : 'font-display text-lg font-bold text-ink'
        }
      >
        {formatARS(single)}
        {suffix && <span className="text-sm font-medium text-ink-mute ml-1">{suffix}</span>}
      </p>
    );
  }

  // Regular + offer (discount)
  const pct = discountPercent(regularPrice, offerPrice);
  if (size === 'lg') {
    return (
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-base text-ink-mute line-through">
          {formatARS(regularPrice)}
        </span>
        <span className="font-display text-3xl md:text-4xl font-bold text-brand">
          {formatARS(offerPrice)}
          {suffix && <span className="text-base font-medium text-ink-mute ml-1">{suffix}</span>}
        </span>
        <span className="inline-flex items-center gap-1 bg-brand text-white text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
          {t('offerBadge')} −{pct}%
        </span>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-ink-mute line-through">
        {formatARS(regularPrice)}
      </span>
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="font-display text-lg font-bold text-brand">
          {formatARS(offerPrice)}
          {suffix && <span className="text-xs font-medium text-ink-mute ml-1">{suffix}</span>}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-100 px-1.5 py-0.5 rounded">
          −{pct}%
        </span>
      </div>
    </div>
  );
}
