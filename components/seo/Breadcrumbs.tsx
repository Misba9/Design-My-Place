import Link from 'next/link';
import type { BreadcrumbItem } from '@/seo/breadcrumbs';

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

/**
 * Deck-styled breadcrumbs — sits below the solid internal navbar
 * (nav clearance comes from InternalPageLayout).
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-[rgba(63,57,48,0.08)] bg-[#FAF8F5] py-3 sm:py-4"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20">
        <ol className="flex flex-wrap items-center gap-2 font-body text-[11px] tracking-[0.04em] text-[#55503F]/70">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-[#9C6F4E]/50">
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span className="text-[#9C6F4E]">{item.name}</span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-[#9C6F4E]"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
