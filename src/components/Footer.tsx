import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Logo from './Logo';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const tc = useTranslations('contact');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream-100 mt-20">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm text-cream-100/70 max-w-xs">{t('tagline')}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-200 mb-4">
            {t('shop')}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/categorias" className="hover:text-brand-200">{tn('categories')}</Link></li>
            <li><Link href="/ofertas" className="hover:text-brand-200">{tn('offers')}</Link></li>
            <li><Link href="/carrito" className="hover:text-brand-200">{tn('cart')}</Link></li>
            <li><Link href="/categorias/iluminacion" className="hover:text-brand-200">Iluminación</Link></li>
            <li><Link href="/categorias/cables" className="hover:text-brand-200">Cables</Link></li>
            <li><Link href="/categorias/tableros" className="hover:text-brand-200">Tableros</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-200 mb-4">
            {t('company')}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/nosotros" className="hover:text-brand-200">{tn('about')}</Link></li>
            <li><Link href="/guias" className="hover:text-brand-200">{tn('guides')}</Link></li>
            <li><Link href="/contacto" className="hover:text-brand-200">{tn('contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-200 mb-4">
            {t('contact')}
          </h4>
          <ul className="space-y-2 text-sm text-cream-100/85">
            <li>{tc('address')}</li>
            <li>{tc('phone')}</li>
            <li>{tc('hours')}</li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.instagram.com/electricidadramallo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-cream-100/10 hover:bg-brand transition"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.65 5.65 0 0 0-2.05 1.33A5.65 5.65 0 0 0 .76 4.01C.46 4.77.26 5.65.2 6.92.14 8.2.13 8.61.13 11.87s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.75 1.48 1.4 2.13.65.65 1.33 1.09 2.13 1.4.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.31 1.48-.75 2.13-1.4.65-.65 1.09-1.33 1.4-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91A5.65 5.65 0 0 0 22.07 1.96 5.65 5.65 0 0 0 20.01.63C19.25.33 18.37.13 17.1.07 15.82.01 15.41 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Z" />
              </svg>
            </a>
            <a
              href="https://wa.me/5491136030603"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-cream-100/10 hover:bg-[#25D366] transition"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.58 5.93L0 24l6.36-1.67a11.83 11.83 0 0 0 5.7 1.45c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-cream-100/60">
          <span>© {year} Electricidad Ramallo. {t('rights')}</span>
          <span>{t('developedBy')}</span>
        </div>
      </div>
    </footer>
  );
}
