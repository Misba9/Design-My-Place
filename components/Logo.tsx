import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'h-10 sm:h-11 w-auto max-w-[120px]',
  md: 'h-14 w-auto max-w-[160px]',
  lg: 'h-32 sm:h-40 w-auto max-w-[280px]',
  xl: 'h-40 sm:h-48 lg:h-56 w-auto max-w-[360px]',
};

export function Logo({
  className,
  imageClassName,
  size = 'md',
}: LogoProps) {
  return (
    <div className={cn('flex items-center shrink-0', className)}>
      <Image
        src="/logo.png"
        alt="Design My Place"
        width={371}
        height={400}
        className={cn(
          'object-contain object-left transition-transform duration-500',
          sizeClasses[size],
          imageClassName
        )}
        priority={size === 'sm'}
      />
    </div>
  );
}
