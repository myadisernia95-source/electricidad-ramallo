import Image from 'next/image';
import { useTranslations } from 'next-intl';

const placeholders = [
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1565636192335-c46e7e2f0c00?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1558449907-8b82b0264682?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1581092335203-d7a07e2b3a4d?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1620283086019-9b6dec7d2bcd?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?auto=format&fit=crop&w=600&q=60'
];

export default function InstagramSection() {
  const t = useTranslations('instagram');
  return (
    <section className="section bg-white" id="instagram">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="section-eyebrow">@electricidadramallo</p>
            <h2 className="section-title">{t('title')}</h2>
            <p className="mt-2 text-ink-mute max-w-xl">{t('subtitle')}</p>
          </div>
          <a
            href="https://www.instagram.com/electricidadramallo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm py-2.5"
          >
            {t('cta')}
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {placeholders.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/electricidadramallo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-cream-100"
            >
              <Image
                src={src}
                alt="Instagram post"
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-mute">
          * Placeholder visual. Cuando conectemos el feed real de Instagram se mostrarán las últimas publicaciones de tu cuenta.
        </p>
      </div>
    </section>
  );
}
