import { cn } from '@/lib/utils';

type ImagePlaceholderProps = {
  className?: string;
  text?: string;
  compact?: boolean;
};

export function ImagePlaceholder({
  className,
  text = 'Image Coming Soon',
  compact = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-luxury-gray/80 border border-white/10',
        className,
      )}
      role="img"
      aria-label={text}
    >
      <span
        className={cn(
          'uppercase tracking-[0.18em] text-gray-500 text-center px-4',
          compact ? 'text-[8px] leading-tight' : 'text-[10px]',
        )}
      >
        {text}
      </span>
    </div>
  );
}
