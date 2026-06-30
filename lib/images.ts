/** Encode a path under /public for use in src attributes. */
export function publicImage(...segments: string[]): string {
  return `/${segments.map((segment) => encodeURIComponent(segment)).join('/')}`;
}

export const HERO_IMAGE = '/hero-luxury.jpg';
export const LOGO_IMAGE = '/logo.png';
export const ABOUT_QUOTE_IMAGE = publicImage('As we evolve.png');

const nvt = (filename: string) => publicImage('NVT', filename);

export const NVT_IMAGES = {
  family: nvt('NVT Family.png'),
  dining: nvt('NVT Dining.png'),
  gbr: nvt('NVT GBR1.png'),
  mbr: nvt('NVT MBR.png'),
  mbr2: nvt('NVT MBR 2.png'),
  kids: nvt('NVT Kids.png'),
  kids2: nvt('NVT Kids 2.png'),
  kids3: nvt('NVT Kids 3.png'),
  photo1: nvt('PHOTO-2026-01-23-19-41-35.jpg'),
  photo2: nvt('32c1087a-2599-43d8-8e19-cc0eba754dc6.jpg'),
  photo3: nvt('c4e9e3d2-28bc-42f7-b2e8-80ad23ce186a.jpg'),
} as const;

export const NVT_PROJECT_GALLERY = [
  NVT_IMAGES.family,
  NVT_IMAGES.dining,
  NVT_IMAGES.gbr,
  NVT_IMAGES.mbr,
  NVT_IMAGES.mbr2,
  NVT_IMAGES.kids,
  NVT_IMAGES.kids2,
  NVT_IMAGES.kids3,
] as const;

/** Portfolio imagery for service pages and highlights (local NVT project photos). */
export const PORTFOLIO_IMAGES = {
  living: NVT_IMAGES.family,
  villa: NVT_IMAGES.gbr,
  kitchen: NVT_IMAGES.dining,
  bedroom: NVT_IMAGES.mbr,
  apartment: NVT_IMAGES.kids,
  renovation: NVT_IMAGES.mbr2,
} as const;

/** Sentinel for missing local images — components render a placeholder instead. */
export const MISSING_IMAGE = '';

export function isLocalImage(
  src: string | null | undefined,
): src is string {
  if (!src) return false;
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    return false;
  }
  return src.startsWith('/');
}
