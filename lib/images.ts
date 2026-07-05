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

const klassicLandmark = (filename: string) =>
  publicImage('Klassic landmark Tarun', filename);

/** Pastel Penthouse — Klassic Landmark project imagery */
export const PASTEL_PENTHOUSE_IMAGES = {
  hero: klassicLandmark('1.jpg'),
  living: klassicLandmark('6.jpg'),
  dining: klassicLandmark('12.jpg'),
  bedroom: klassicLandmark('13.jpg'),
  detail: klassicLandmark('21.jpg'),
  lounge: klassicLandmark('22.jpg'),
  bath: klassicLandmark('24.jpg'),
  kitchen: klassicLandmark('26.jpg'),
  study: klassicLandmark('35.jpg'),
  terrace: klassicLandmark('36.jpg'),
} as const;

export const PASTEL_PENTHOUSE_GALLERY = [
  PASTEL_PENTHOUSE_IMAGES.hero,
  PASTEL_PENTHOUSE_IMAGES.living,
  PASTEL_PENTHOUSE_IMAGES.dining,
  PASTEL_PENTHOUSE_IMAGES.bedroom,
  PASTEL_PENTHOUSE_IMAGES.detail,
  PASTEL_PENTHOUSE_IMAGES.lounge,
  PASTEL_PENTHOUSE_IMAGES.bath,
  PASTEL_PENTHOUSE_IMAGES.kitchen,
  PASTEL_PENTHOUSE_IMAGES.study,
  PASTEL_PENTHOUSE_IMAGES.terrace,
] as const;

const flowingTree = (filename: string) => publicImage('Flowing tree', filename);

/** Lakehouse in the Sky — Flowing Tree project imagery */
export const LAKEHOUSE_IMAGES = {
  hero: flowingTree('43539541-0EF3-47DD-87B1-74CB7A8C729D.JPG'),
  living: flowingTree('IMG_0352.jpg'),
  arch: flowingTree('IMG_1178.jpg'),
  bedroom: flowingTree('IMG_6662.jpg'),
  dining: flowingTree('IMG_1165.jpg'),
  detail: flowingTree('IMG_2257.jpg'),
  light: flowingTree('IMG_1166.jpg'),
  view: flowingTree('013167AC-ABFB-4A5A-A20B-D1F41988B592.JPG'),
  lounge: flowingTree('IMG_1176.jpg'),
  kitchen: flowingTree('IMG_9319.jpg'),
} as const;

export const LAKEHOUSE_GALLERY = [
  LAKEHOUSE_IMAGES.hero,
  LAKEHOUSE_IMAGES.living,
  LAKEHOUSE_IMAGES.arch,
  LAKEHOUSE_IMAGES.bedroom,
  LAKEHOUSE_IMAGES.dining,
  LAKEHOUSE_IMAGES.detail,
  LAKEHOUSE_IMAGES.light,
  LAKEHOUSE_IMAGES.view,
  LAKEHOUSE_IMAGES.lounge,
  LAKEHOUSE_IMAGES.kitchen,
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
