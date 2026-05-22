import { Link } from '@/i18n/navigation';
import { guidesMetadata } from '@/data/guides';
import GuideCard from '@/components/guides/GuideCard';

export default function GuidesPreview() {
  const top = guidesMetadata.slice(0, 3);
  if (top.length === 0) return null;
  return (
    <section className="section bg-cream-50">
      <div className="container">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
          <div className="max-w-xl">
            <p className="section-eyebrow">Recursos</p>
            <h2 className="section-title">Guías técnicas</h2>
            <p className="mt-2 text-ink-mute">
              Información práctica de electricistas con experiencia — sin tecnicismos.
            </p>
          </div>
          <Link href="/guias" className="btn-outline text-sm py-2.5">
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {top.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
