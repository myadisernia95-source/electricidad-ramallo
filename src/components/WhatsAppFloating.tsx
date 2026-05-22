'use client';

import { useTranslations } from 'next-intl';
import { whatsappLink } from '@/lib/whatsapp';

export default function WhatsAppFloating() {
  const t = useTranslations('whatsappWidget');
  return (
    <a
      href={whatsappLink(t('presetMessage'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('label')}
      className="fixed bottom-5 right-5 z-50 group inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-4 py-3"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.58 5.93L0 24l6.36-1.67a11.83 11.83 0 0 0 5.7 1.45h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44ZM17.47 14.22c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.3-1.03 1-1.03 2.43s1.05 2.83 1.2 3.02c.15.2 2.07 3.17 5.01 4.45.7.3 1.25.49 1.67.62.7.22 1.34.19 1.85.12.56-.09 1.75-.71 2-1.4.25-.7.25-1.28.18-1.4-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      <span className="hidden md:inline pr-1 text-sm">{t('label')}</span>
    </a>
  );
}
