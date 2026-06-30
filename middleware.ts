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
    '/.well-known/appspecific/com.chrome.devtools.json',
    '/_next/static/chunks/app/LayoutGroupContext.mjs.map',
    '/_next/static/chunks/app/:path*/LayoutGroupContext.mjs.map',
  ],
};
