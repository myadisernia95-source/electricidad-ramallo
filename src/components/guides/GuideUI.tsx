import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getProduct } from '@/data/products';
import { whatsappLink, productInquiryMessage } from '@/lib/whatsapp';

/** Callout box for tips, warnings, info. Used inline in guides. */
export function Callout({
  tone = 'info',
  title,
  children
}: {
  tone?: 'info' | 'warning' | 'tip' | 'danger';
  title?: string;
  children: React.ReactNode;
}) {
  const styles = {
    info:    { bg: 'bg-cream-100',  border: 'border-cream-300', icon: 'ℹ️',  label: 'Info' },
    tip:     { bg: 'bg-green-50',   border: 'border-green-200', icon: '💡', label: 'Tip' },
    warning: { bg: 'bg-yellow-50',  border: 'border-yellow-200',icon: '⚠️',  label: 'Atención' },
    danger:  { bg: 'bg-brand-50',   border: 'border-brand-200', icon: '🚨', label: 'Importante' }
  }[tone];
  return (
    <aside className={`my-6 rounded-2xl border ${styles.border} ${styles.bg} p-5`}>
      <p className="font-bold text-ink flex items-center gap-2 mb-2">
        <span aria-hidden>{styles.icon}</span>
        <span>{title ?? styles.label}</span>
      </p>
      <div className="text-ink-mute text-[15px] leading-relaxed">{children}</div>
    </aside>
  );
}

/** Inline product card to recommend within a guide body. */
export function ProductInline({ slug }: { slug: string }) {
  const product = getProduct(slug);
  if (!product) return null;
  return (
    <aside className="my-6 card flex flex-col sm:flex-row gap-4 p-4 not-prose">
      <Link
        href={`/producto/${product.slug}`}
        className="relative w-full sm:w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-cream-50"
      >
        <Image
          src={product.image}
          alt={`${product.name} - ${product.brand}`}
          fill
          sizes="120px"
          className="object-cover"
        />
      </Link>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <p className="text-[11px] uppercase tracking-widest text-ink-mute">{product.brand}</p>
        <Link
          href={`/producto/${product.slug}`}
          className="mt-0.5 font-display font-bold text-ink hover:text-brand"
        >
          {product.name}
        </Link>
        <p className="mt-1 text-sm text-ink-mute line-clamp-2">{product.shortDesc}</p>
        <div className="mt-3 flex gap-3 items-center flex-wrap">
          <Link
            href={`/producto/${product.slug}`}
            className="text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-dark"
          >
            Ver producto →
          </Link>
          <a
            href={whatsappLink(productInquiryMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-wider text-ink-mute hover:text-brand"
          >
            Consultar
          </a>
        </div>
      </div>
    </aside>
  );
}

/** Reusable data table with brand-coloured headers. */
export function Table({
  headers,
  rows,
  caption
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
}) {
  return (
    <figure className="my-6 overflow-x-auto rounded-2xl border border-cream-200">
      {caption && (
        <figcaption className="px-4 py-3 bg-cream-100 text-xs font-bold uppercase tracking-widest text-ink-mute">
          {caption}
        </figcaption>
      )}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-brand text-white text-left">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 font-bold uppercase tracking-wider text-xs">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-cream-50'}>
              {r.map((c, ci) => (
                <td key={ci} className="px-4 py-3 align-top border-t border-cream-200">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
