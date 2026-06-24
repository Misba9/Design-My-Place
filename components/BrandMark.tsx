import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BrandMarkProps {
  className?: string;
  variant?: 'header' | 'mobile' | 'footer';
}

const variantStyles = {
  header: {
    wrap: 'max-w-[420px]',
    icon: 'h-[52px] sm:h-14 lg:h-[4.75rem] w-[2.75rem] sm:w-[3rem] lg:w-[3.5rem]',
    nameLine:
      'text-[11px] sm:text-xs lg:text-[13px] tracking-[0.18em] sm:tracking-[0.2em] lg:tracking-[0.22em]',
    tagline: 'text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.14em] mt-1',
    gap: 'gap-3 sm:gap-3.5 lg:gap-4',
  },
  mobile: {
    wrap: 'max-w-[360px]',
    icon: 'h-14 w-[3rem]',
    nameLine: 'text-xs tracking-[0.2em]',
    tagline: 'text-[9px] tracking-[0.14em] mt-1',
    gap: 'gap-3.5',
  },
  footer: {
    wrap: 'max-w-[320px]',
    icon: 'h-12 w-[2.75rem]',
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
          'relative shrink-0 overflow-hidden flex items-center justify-center',
          styles.icon
        )}
      >
        <Image
          src="/logo.png"
          alt="Design My Place"
          width={371}
          height={400}
          className={cn(
            'w-[135%] max-w-none h-auto object-contain object-top',
            'transition-all duration-500 group-hover:opacity-90 group-hover:drop-shadow-[0_0_16px_rgba(212,175,55,0.25)]'
          )}
          priority={variant === 'header'}
        />
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <span
          className={cn(
            'font-display font-medium text-white uppercase whitespace-nowrap leading-none',
            'transition-colors duration-500 group-hover:text-gold-400/95',
            styles.nameLine
          )}
        >
          Design My Place
        </span>
        <span
          className={cn(
            'font-body font-light text-gold-400/80 uppercase whitespace-nowrap leading-snug',
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
