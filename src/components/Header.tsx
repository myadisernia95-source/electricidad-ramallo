'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Logo from './Logo';
import SearchBar from './SearchBar';
import CartButton from './cart/CartButton';
import { whatsappLink } from '@/lib/whatsapp';

export default function Header() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: t('home') },
    { href: '/categorias', label: t('categories') },
    { href: '/ofertas', label: t('offers') },
    { href: '/guias', label: t('guides') },
    { href: '/nosotros', label: t('about') },
    { href: '/contacto', label: t('contact') }
  ];

  return (
    <header className="sticky top-0 z-40 bg-cream-50/90 backdrop-blur border-b border-cream-200">
      {/* Top row: logo + search + cart + WhatsApp */}
      <div className="container flex items-center gap-4 h-16 md:h-20">
        <Logo />

        <div className="flex-1 hidden md:flex max-w-xl mx-auto">
          <SearchBar compact />
        </div>

        {/* Desktop right cluster */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <CartButton />
          <a
            href={whatsappLink('Hola Electricidad Ramallo, quería hacer una consulta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm py-2.5"
          >
            <WhatsappIcon className="w-4 h-4" />
            {t('whatsapp')}
          </a>
        </div>

        {/* Mobile right cluster: cart icon + hamburger */}
        <div className="lg:hidden flex items-center gap-2 ml-auto">
          <CartButton />
          <button
            type="button"
            className="p-2 -mr-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Search bar visible on mobile (below logo) */}
      <div className="md:hidden container pb-3">
        <SearchBar compact />
      </div>

      {/* Nav links row (desktop) */}
      <div className="hidden lg:block border-t border-cream-200/60">
        <nav className="container flex items-center gap-6 h-11">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink hover:text-brand transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/carrito"
            className="text-sm font-semibold text-ink hover:text-brand transition-colors"
          >
            {t('cart')}
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-cream-200 bg-cream-50">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-base font-semibold text-ink py-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/carrito"
              className="text-base font-semibold text-ink py-2"
              onClick={() => setOpen(false)}
            >
              {t('cart')}
            </Link>
            <div className="flex items-center justify-end pt-3 border-t border-cream-200">
              <a
                href={whatsappLink('Hola Electricidad Ramallo, quería hacer una consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-2.5"
              >
                <WhatsappIcon className="w-4 h-4" />
                {t('whatsapp')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function WhatsappIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.58 5.93L0 24l6.36-1.67a11.83 11.83 0 0 0 5.7 1.45h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44ZM12.07 21.6h-.01a9.7 9.7 0 0 1-4.95-1.36l-.36-.21-3.78.99 1.01-3.68-.24-.38a9.78 9.78 0 0 1-1.5-5.1c0-5.43 4.42-9.86 9.84-9.86 2.63 0 5.1 1.03 6.96 2.89a9.76 9.76 0 0 1 2.88 6.97c0 5.43-4.42 9.85-9.85 9.85Zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.3-1.03 1-1.03 2.43s1.05 2.83 1.2 3.02c.15.2 2.07 3.17 5.01 4.45.7.3 1.25.49 1.67.62.7.22 1.34.19 1.85.12.56-.09 1.75-.71 2-1.4.25-.7.25-1.28.18-1.4-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}
