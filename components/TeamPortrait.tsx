import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { TeamMember } from '@/lib/team';

type TeamPortraitProps = {
  member: TeamMember;
  variant?: 'lead' | 'card';
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

export function TeamPortrait({
  member,
  variant = 'card',
  priority = false,
  sizes,
  className,
  imageClassName,
}: TeamPortraitProps) {
  const { image, name, imageFit } = member;

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-[#111111]',
        variant === 'lead'
          ? 'aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[480px] lg:h-full'
          : 'aspect-[4/5]',
        className,
      )}
    >
      <div
        className={cn(
          'absolute',
          variant === 'lead'
            ? 'inset-3 sm:inset-4 lg:inset-5'
            : 'inset-2 sm:inset-3',
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          sizes={
            sizes ??
            (variant === 'lead'
              ? '(max-width: 1024px) 100vw, 42vw'
              : '(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw')
          }
          className={cn(
            'object-contain object-center transition-transform duration-700',
            imageClassName,
          )}
          style={{ objectPosition: imageFit.objectPosition }}
        />
      </div>
    </div>
  );
}
