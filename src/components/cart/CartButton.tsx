'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCart } from './CartProvider';

type Props = { className?: string };

export default function CartButton({ className = '' }: Props) {
  const t = useTranslations('cart');
  const { totalCount, isHydrated } = useCart();

  return (
    <Link
      href="/carrito"
      aria-label={t('viewCart')}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream-200 hover:bg-brand-100 transition-colors text-ink ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>
      {isHydrated && totalCount > 0 && (
        <span
          aria-label={`${totalCount} ítems en el carrito`}
          className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-brand text-white text-[10px] font-bold inline-flex items-center justify-center"
        >
          {totalCount > 99 ? '99+' : totalCount}
        </span>
      )}
    </Link>
  );
}
