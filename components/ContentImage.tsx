import Image, { type ImageProps } from 'next/image';
import { isLocalImage } from '@/lib/images';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { cn } from '@/lib/utils';

type ContentImageProps = Omit<ImageProps, 'src'> & {
  src: string | null | undefined;
  placeholderText?: string;
  compactPlaceholder?: boolean;
};

export function ContentImage({
  src,
  alt,
  className,
  placeholderText,
  compactPlaceholder,
  fill,
  ...props
}: ContentImageProps) {
  if (!isLocalImage(src)) {
    return (
      <ImagePlaceholder
        className={cn(fill && 'absolute inset-0', className)}
        text={placeholderText}
        compact={compactPlaceholder}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      {...props}
    />
  );
}
