import { Link } from '@/i18n/navigation';
import type { GuideMetadata } from '@/data/guides/types';

export default function GuideCard({ guide }: { guide: GuideMetadata }) {
  return (
    <Link
      href={`/guias/${guide.slug}`}
      className="card p-6 hover:-translate-y-1 transition-transform flex flex-col h-full group"
    >
      <div className="text-4xl" aria-hidden>{guide.icon ?? '📖'}</div>
      <h3 className="mt-3 font-display font-bold text-lg leading-snug text-ink group-hover:text-brand transition-colors">
        {guide.title}
      </h3>
      <p className="mt-2 text-sm text-ink-mute line-clamp-3 flex-1">{guide.excerpt}</p>
      <p className="mt-4 text-xs text-ink-mute uppercase tracking-widest font-bold">
        {guide.readTimeMin} min de lectura
      </p>
    </Link>
  );
}
