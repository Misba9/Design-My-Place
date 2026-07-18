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
  hero: klassicLandmark('image-00.jpg'),
  living: klassicLandmark('image-01.jpg'),
  dining: klassicLandmark('image-02.jpg'),
  bedroom: klassicLandmark('image-03.jpg'),
  detail: klassicLandmark('image-04.jpg'),
  lounge: klassicLandmark('image-05.jpg'),
  bath: klassicLandmark('image-06.jpg'),
  kitchen: klassicLandmark('image-07.jpg'),
  study: klassicLandmark('image-08.jpg'),
  terrace: klassicLandmark('image-09.jpg'),
  view: klassicLandmark('image-10.jpg'),
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
  PASTEL_PENTHOUSE_IMAGES.view,
] as const;

const flowingTree = (filename: string) => publicImage('Flowing tree', filename);

/** Lakehouse in the Sky — Flowing Tree project imagery */
export const LAKEHOUSE_IMAGES = {
  hero: flowingTree('image-01.jpeg'),
  living: flowingTree('image-02.jpeg'),
  arch: flowingTree('image-03.jpeg'),
  bedroom: flowingTree('image-04.png'),
  dining: flowingTree('image-05.jpeg'),
  detail: flowingTree('image-06.jpeg'),
  view: flowingTree('image-07.jpeg'),
} as const;

export const LAKEHOUSE_GALLERY = [
  LAKEHOUSE_IMAGES.hero,
  LAKEHOUSE_IMAGES.living,
  LAKEHOUSE_IMAGES.arch,
  LAKEHOUSE_IMAGES.bedroom,
  LAKEHOUSE_IMAGES.dining,
  LAKEHOUSE_IMAGES.detail,
  LAKEHOUSE_IMAGES.view,
] as const;

const life77 = (filename: string) => publicImage('77 life', filename);

/** 77 Life project imagery */
export const LIFE_77_IMAGES = {
  hero: life77('image-01.png'),
  living: life77('image-02.png'),
  dining: life77('image-03.png'),
  bedroom: life77('image-04.png'),
  detail: life77('image-05.png'),
} as const;

export const LIFE_77_GALLERY = [
  LIFE_77_IMAGES.hero,
  LIFE_77_IMAGES.living,
  LIFE_77_IMAGES.dining,
  LIFE_77_IMAGES.bedroom,
  LIFE_77_IMAGES.detail,
] as const;

const svasa = (filename: string) => publicImage('Svasa', filename);

/** Svasa Homes project imagery */
export const SVASA_IMAGES = {
  hero: svasa('images-01.png'),
  image02: svasa('images-02.png'),
  image03: svasa('images-03.png'),
  image04: svasa('images-04.png'),
  image05: svasa('images-05.png'),
  image06: svasa('images-06.png'),
  image07: svasa('images-07.png'),
  image08: svasa('images-08.png'),
  image09: svasa('images-09.png'),
  image10: svasa('images-10.png'),
  image11: svasa('images-11.png'),
  image12: svasa('images-12.png'),
} as const;

export const SVASA_GALLERY = [
  SVASA_IMAGES.hero,
  SVASA_IMAGES.image02,
  SVASA_IMAGES.image03,
  SVASA_IMAGES.image04,
  SVASA_IMAGES.image05,
  SVASA_IMAGES.image06,
  SVASA_IMAGES.image07,
  SVASA_IMAGES.image08,
  SVASA_IMAGES.image09,
  SVASA_IMAGES.image10,
  SVASA_IMAGES.image11,
  SVASA_IMAGES.image12,
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
