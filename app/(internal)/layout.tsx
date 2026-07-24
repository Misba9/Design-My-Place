import { InternalPageLayout } from '@/components/layouts/InternalPageLayout';

export default function InternalRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <InternalPageLayout>{children}</InternalPageLayout>;
}
