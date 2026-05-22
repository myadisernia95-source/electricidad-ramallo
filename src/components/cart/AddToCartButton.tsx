'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useCart } from './CartProvider';

type Props = {
  slug: string;
  size?: 'sm' | 'md';
  className?: string;
};

export default function AddToCartButton({ slug, size = 'sm', className = '' }: Props) {
  const t = useTranslations('cart');
  const { add, isHydrated } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const onClick = () => {
    add(slug, 1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  };

  const padding = size === 'md' ? 'py-3 px-5' : 'py-2.5 px-4 text-sm';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isHydrated}
      className={`btn-primary ${padding} w-full ${className} ${justAdded ? 'bg-green-600 hover:bg-green-600' : ''}`}
      aria-live="polite"
    >
      {justAdded ? (
        <>
          <CheckIcon className="w-4 h-4" />
          {t('added')}
        </>
      ) : (
        <>
          <CartIcon className="w-4 h-4" />
          {t('add')}
        </>
      )}
    </button>
  );
}

function CartIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
