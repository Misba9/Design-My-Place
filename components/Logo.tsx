import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { height: 36, width: 120 },
  md: { height: 48, width: 160 },
  lg: { height: 72, width: 240 },
};

export function Logo({
  className,
  imageClassName,
  showText = false,
  size = 'md',
}: LogoProps) {
  const { height, width } = sizes[size];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Image
        src="/logo.png"
        alt="Design My Place"
        width={width}
        height={height}
        className={cn(
          'h-auto w-auto object-contain transition-transform duration-500 hover:scale-[1.04] hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]',
          imageClassName
        )}
        style={{ maxHeight: height }}
        priority
      />
      {showText && (
        <span className="label-uppercase text-ivory-100 hidden sm:block tracking-[0.35em]">
          Design My Place
        </span>
      )}
    </div>
  );
}
