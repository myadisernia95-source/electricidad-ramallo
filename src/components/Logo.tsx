import Image from 'next/image';
import Link from 'next/link';

type Props = { className?: string; variant?: 'light' | 'dark' };

export default function Logo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? 'text-white' : 'text-ink';
  const accentColor = 'text-brand';
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`} aria-label="Electricidad Ramallo - Inicio">
      <Image
        src="/LOGO.png"
        alt="Electricidad Ramallo"
        width={48}
        height={48}
        className="h-10 w-10 md:h-12 md:w-12 object-contain"
        priority
      />
      <span className="font-display leading-tight">
        <span className={`block text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase ${accentColor}`}>Electricidad</span>
        <span className={`block text-lg md:text-xl font-bold tracking-wide ${textColor}`}>RAMALLO</span>
      </span>
    </Link>
  );
}
