import Link from 'next/link';
import type { BreadcrumbItem } from '@/seo/breadcrumbs';

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-luxury-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === items.length - 1 ? (
                <span className="text-gold-300/80">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-gold-300 transition-colors">
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
