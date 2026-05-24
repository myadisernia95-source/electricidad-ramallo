import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { whatsappLink, productInquiryMessage } from '@/lib/whatsapp';
import { useTranslations } from 'next-intl';
import type { Product } from '@/data/products';
import PriceBlock from './PriceBlock';
import AddToCartButton from './cart/AddToCartButton';

type Props = { product: Product; showOfferBadge?: boolean };

export default function ProductCard({ product, showOfferBadge }: Props) {
  const t = useTranslations('product');
  const to = useTranslations('offers');
  const isOffer =
    product.offer ||
    (product.regularPrice && product.offerPrice && product.offerPrice < product.regularPrice);

  return (
    <article className="card group flex flex-col h-full">
      <Link
        href={`/producto/${product.slug}`}
        className="relative aspect-square overflow-hidden bg-cream-50"
      >
        <Image
          src={product.image}
          alt={`${product.name} - ${product.brand}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {showOfferBadge && isOffer && (
          <span className="absolute top-3 left-3 bg-brand text-white text-[10px] tracking-widest font-bold uppercase px-2 py-1 rounded-md shadow-sm">
            {to('badge')}
          </span>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-[11px] uppercase tracking-widest text-ink-mute">{product.brand}</p>
        <Link href={`/producto/${product.slug}`}>
          <h3 className="mt-1 font-display font-semibold text-ink leading-snug line-clamp-2 hover:text-brand transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-ink-mute line-clamp-2">{product.shortDesc}</p>

        <div className="mt-4 pt-4 border-t border-cream-200 flex flex-col gap-3 flex-1 justify-end">
          <PriceBlock
            regularPrice={product.regularPrice}
            offerPrice={product.offerPrice}
            unit={product.unit}
            size="sm"
          />

          <AddToCartButton slug={product.slug} size="sm" />

          <a
            href={whatsappLink(productInquiryMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-brand hover:text-brand-dark text-center inline-flex items-center justify-center gap-1.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.58 5.93L0 24l6.36-1.67a11.83 11.83 0 0 0 5.7 1.45c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44Z" />
            </svg>
            {t('consultWhatsapp')}
          </a>
        </div>
      </div>
    </article>
  );
}
