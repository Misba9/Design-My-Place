import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BrandMarkProps {
  className?: string;
  variant?: 'header' | 'mobile' | 'footer';
}

const variantStyles = {
  header: {
    wrap: 'max-w-[min(100%,26rem)] sm:max-w-[420px]',
    icon: 'h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14',
    nameLine:
      'text-[10px] xs:text-[11px] sm:text-xs lg:text-[13px] tracking-[0.14em] xs:tracking-[0.18em] sm:tracking-[0.2em] lg:tracking-[0.22em]',
    tagline: 'text-[7px] xs:text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.12em] xs:tracking-[0.14em] mt-0.5 xs:mt-1',
    gap: 'gap-2 xs:gap-3 sm:gap-3.5 lg:gap-4',
  },
  mobile: {
    wrap: 'max-w-[min(100%,20rem)]',
    icon: 'h-10 w-10 sm:h-12 sm:w-12',
    nameLine: 'text-xs tracking-[0.2em]',
    tagline: 'text-[9px] tracking-[0.14em] mt-1',
    gap: 'gap-3.5',
  },
  footer: {
    wrap: 'max-w-[320px]',
    icon: 'h-11 w-11 sm:h-12 sm:w-12',
    nameLine: 'text-[11px] tracking-[0.18em]',
    tagline: 'text-[8px] tracking-[0.12em] mt-1',
    gap: 'gap-3',
  },
};

export function BrandMark({ className, variant = 'header' }: BrandMarkProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        'flex items-center shrink-0 group brand-mark',
        styles.gap,
        styles.wrap,
        className
      )}
    >
      <div
        className={cn(
          'relative shrink-0 flex items-center justify-center',
          styles.icon
        )}
      >
        <Image
          src="/icon-512.png"
          alt="Design My Place"
          width={512}
          height={512}
          className={cn(
            'w-full h-full object-contain',
            'transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_16px_rgba(212,175,55,0.4)]'
          )}
          priority={variant === 'header'}
        />
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <span
          className={cn(
            'font-display font-medium text-white uppercase leading-none truncate',
            'transition-colors duration-500 group-hover:text-gold-400/95',
            styles.nameLine
          )}
        >
          Design My Place
        </span>
        <span
          className={cn(
            'font-body font-light text-gold-400/80 uppercase leading-snug truncate',
            'transition-colors duration-500 group-hover:text-gold-400',
            styles.tagline
          )}
        >
          Interiors That Define You
        </span>
      </div>
    </div>
  );
}
