import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/** Signature primary CTA — shared across the site */
export const primaryButtonClassName =
  'group box-border inline-flex h-14 w-full max-w-[420px] items-center justify-between gap-4 rounded-[12px] border border-transparent bg-[#9C6F4E] px-12 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FAF8F5] shadow-[0_12px_28px_-12px_rgba(63,57,48,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8A6144] hover:shadow-[0_18px_36px_-14px_rgba(63,57,48,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C6F4E] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-[320px] sm:min-w-[280px] sm:max-w-[340px]';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  /** Show trailing arrow (default true) */
  showArrow?: boolean;
  /**
   * standard — ~320px desktop, full-width (max 420px) mobile
   * fill — stretch to parent (forms)
   */
  layout?: 'standard' | 'fill';
};

type LinkPrimaryProps = BaseProps & {
  href: string;
  type?: never;
  disabled?: never;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type NativePrimaryProps = BaseProps & {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type PrimaryButtonProps = LinkPrimaryProps | NativePrimaryProps;

function cn(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ');
}

/**
 * Brand primary CTA — identical height, width, type, hover, and arrow
 * treatment on every page.
 */
export function PrimaryButton(props: PrimaryButtonProps) {
  const {
    children,
    className,
    showArrow = true,
    layout = 'standard',
  } = props;

  const classes = cn(
    primaryButtonClassName,
    layout === 'fill' && '!max-w-none sm:!w-full sm:!max-w-none sm:!min-w-0',
    className,
  );

  const content = (
    <>
      <span className="min-w-0 text-left">{children}</span>
      {showArrow ? (
        <ArrowRight
          size={16}
          strokeWidth={1.75}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
          aria-hidden
        />
      ) : null}
    </>
  );

  if (props.href) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as NativePrimaryProps;

  return (
    <button
      type={buttonProps.type ?? 'button'}
      disabled={buttonProps.disabled}
      className={classes}
      onClick={buttonProps.onClick}
    >
      {content}
    </button>
  );
}
