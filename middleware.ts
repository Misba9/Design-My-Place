import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const emptySourceMap = JSON.stringify({
  version: 3,
  sources: [],
  names: [],
  mappings: '',
});

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 301 Redirects for URL variations and legacy paths
  const lowerPath = pathname.toLowerCase();
  if (
    lowerPath === '/home' ||
    lowerPath === '/home/' ||
    lowerPath === '/index' ||
    lowerPath === '/index/' ||
    lowerPath === '/index.html' ||
    lowerPath === '/default.html'
  ) {
    return NextResponse.redirect(new URL('/', request.url), 301);
  }

  if (lowerPath === '/locations/delhi-ncr' || lowerPath === '/locations/delhi-ncr/') {
    return NextResponse.redirect(new URL('/locations/delhi/', request.url), 301);
  }

  if (lowerPath === '/process' || lowerPath === '/process/') {
    return NextResponse.redirect(new URL('/services/', request.url), 301);
  }

  if (pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
    return NextResponse.json({});
  }

  if (pathname.endsWith('LayoutGroupContext.mjs.map') || pathname.includes('/LayoutGroupContext.mjs.map')) {
    return new NextResponse(emptySourceMap, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|webmanifest|xml|txt)).*)',
  ],
};
