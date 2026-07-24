import { HomeLayout } from '@/components/layouts/HomeLayout';

export default function HomeRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayout>{children}</HomeLayout>;
}
