/** Encode a path under /public for use in src attributes. */
export function publicImage(...segments: string[]): string {
  return `/${segments.map((segment) => encodeURIComponent(segment)).join('/')}`;
}

export const HERO_IMAGE = '/hero-luxury.webp';
export const LOGO_IMAGE = '/icon-512.png';
export const ABOUT_QUOTE_IMAGE = publicImage('As we evolve.webp');

const nvt = (filename: string) => publicImage('nvt', filename);

export const NVT_IMAGES = {
  family: nvt('NVT Family.webp'),
  dining: nvt('NVT Dining.webp'),
  gbr: nvt('NVT GBR1.webp'),
  mbr: nvt('NVT MBR.webp'),
  mbr2: nvt('NVT MBR 2.webp'),
  kids: nvt('NVT Kids.webp'),
  kids2: nvt('NVT Kids 2.webp'),
  kids3: nvt('NVT Kids 3.webp'),
  photo1: nvt('PHOTO-2026-01-23-19-41-35.webp'),
  photo2: nvt('32c1087a-2599-43d8-8e19-cc0eba754dc6.webp'),
  photo3: nvt('c4e9e3d2-28bc-42f7-b2e8-80ad23ce186a.webp'),
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
  publicImage('klassic-landmark-tarun', filename);

/** Pastel Penthouse — Klassic Landmark project imagery */
export const PASTEL_PENTHOUSE_IMAGES = {
  hero: klassicLandmark('image-00.webp'),
  living: klassicLandmark('image-01.webp'),
  dining: klassicLandmark('image-02.webp'),
  bedroom: klassicLandmark('image-03.webp'),
  detail: klassicLandmark('image-04.webp'),
  lounge: klassicLandmark('image-05.webp'),
  bath: klassicLandmark('image-06.webp'),
  kitchen: klassicLandmark('image-07.webp'),
  study: klassicLandmark('image-08.webp'),
  terrace: klassicLandmark('image-09.webp'),
  view: klassicLandmark('image-10.webp'),
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

const flowingTree = (filename: string) => publicImage('flowing-tree', filename);

/** Lakehouse in the Sky — Flowing Tree project imagery */
export const LAKEHOUSE_IMAGES = {
  hero: flowingTree('image-01.webp'),
  living: flowingTree('image-02.webp'),
  arch: flowingTree('image-03.webp'),
  bedroom: flowingTree('image-04.webp'),
  dining: flowingTree('image-05.webp'),
  detail: flowingTree('image-06.webp'),
  view: flowingTree('image-07.webp'),
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

const adarshPalm = (filename: string) => publicImage('adarsh-palm', filename);

/** Adarsh Palm Meadows Villa project imagery */
export const ADARSH_PALM_IMAGES = {
  /** Night exterior — full facade with ramp & terraces */
  hero: adarshPalm('52.webp'),
  /** Day entrance porch */
  entrance: adarshPalm('53.webp'),
  /** Foyer with home lift & staircase */
  foyerLift: adarshPalm('55.webp'),
  /** Entry hallway with feature wall & mirror */
  hallway: adarshPalm('54.webp'),
  /** Formal living with bar */
  livingFormal: adarshPalm('57.webp'),
  /** Living with mural & media wall */
  livingLounge: adarshPalm('60.webp'),
  /** Navy sitting room */
  sittingRoom: adarshPalm('63.webp'),
  /** Kitchen & dining */
  kitchenDining: adarshPalm('58.webp'),
  /** Master bedroom suite */
  masterBedroom: adarshPalm('62.webp'),
  /** Master walk-in closet */
  walkInCloset: adarshPalm('59.webp'),
  /** Secondary bedroom with study */
  bedroomStudy: adarshPalm('61.webp'),
  /** Outdoor patio seating */
  patio: adarshPalm('56.webp'),
  /** Terrace / sunroom lounge */
  terrace: adarshPalm('64.webp'),
} as const;

/** Narrative gallery order: exterior → arrival → living → kitchen → private → outdoor */
export const ADARSH_PALM_GALLERY = [
  ADARSH_PALM_IMAGES.hero,
  ADARSH_PALM_IMAGES.entrance,
  ADARSH_PALM_IMAGES.foyerLift,
  ADARSH_PALM_IMAGES.hallway,
  ADARSH_PALM_IMAGES.livingFormal,
  ADARSH_PALM_IMAGES.livingLounge,
  ADARSH_PALM_IMAGES.sittingRoom,
  ADARSH_PALM_IMAGES.kitchenDining,
  ADARSH_PALM_IMAGES.masterBedroom,
  ADARSH_PALM_IMAGES.walkInCloset,
  ADARSH_PALM_IMAGES.bedroomStudy,
  ADARSH_PALM_IMAGES.patio,
  ADARSH_PALM_IMAGES.terrace,
] as const;

const life77 = (filename: string) => publicImage('77-life', filename);

/** 77 Life project imagery */
export const LIFE_77_IMAGES = {
  hero: life77('image-01.webp'),
  living: life77('image-02.webp'),
  dining: life77('image-03.webp'),
  bedroom: life77('image-04.webp'),
  detail: life77('image-05.webp'),
} as const;

export const LIFE_77_GALLERY = [
  LIFE_77_IMAGES.hero,
  LIFE_77_IMAGES.living,
  LIFE_77_IMAGES.dining,
  LIFE_77_IMAGES.bedroom,
  LIFE_77_IMAGES.detail,
] as const;

const svasa = (filename: string) => publicImage('svasa', filename);

/** Svasa Homes project imagery */
export const SVASA_IMAGES = {
  hero: svasa('images-01.webp'),
  image02: svasa('images-02.webp'),
  image03: svasa('images-03.webp'),
  image04: svasa('images-04.webp'),
  image05: svasa('images-05.webp'),
  image06: svasa('images-06.webp'),
  image07: svasa('images-07.webp'),
  image08: svasa('images-08.webp'),
  image09: svasa('images-09.webp'),
  image10: svasa('images-10.webp'),
  image11: svasa('images-11.webp'),
  image12: svasa('images-12.webp'),
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

const delhiVilla = (filename: string) => publicImage('delhi-villa', filename);

/** Delhi Villa project imagery */
export const DELHI_VILLA_IMAGES = {
  hero: delhiVilla('34.webp'),
  image35: delhiVilla('35.webp'),
  image36: delhiVilla('36.webp'),
  image37: delhiVilla('37.webp'),
  image38: delhiVilla('38.webp'),
  image39: delhiVilla('39.webp'),
  image40: delhiVilla('40.webp'),
  image41: delhiVilla('41.webp'),
  image42: delhiVilla('42.webp'),
  image43: delhiVilla('43.webp'),
  image44: delhiVilla('44.webp'),
  image45: delhiVilla('45.webp'),
  image46: delhiVilla('46.webp'),
  image47: delhiVilla('47.webp'),
  image48: delhiVilla('48.webp'),
  image49: delhiVilla('49.webp'),
  image50: delhiVilla('50.webp'),
  // Aliases for compatibility
  image07: delhiVilla('37.webp'),
  image10: delhiVilla('40.webp'),
  image15: delhiVilla('45.webp'),
} as const;

export const DELHI_VILLA_GALLERY = [
  DELHI_VILLA_IMAGES.hero,
  DELHI_VILLA_IMAGES.image35,
  DELHI_VILLA_IMAGES.image36,
  DELHI_VILLA_IMAGES.image37,
  DELHI_VILLA_IMAGES.image38,
  DELHI_VILLA_IMAGES.image39,
  DELHI_VILLA_IMAGES.image40,
  DELHI_VILLA_IMAGES.image41,
  DELHI_VILLA_IMAGES.image42,
  DELHI_VILLA_IMAGES.image43,
  DELHI_VILLA_IMAGES.image44,
  DELHI_VILLA_IMAGES.image45,
  DELHI_VILLA_IMAGES.image46,
  DELHI_VILLA_IMAGES.image47,
  DELHI_VILLA_IMAGES.image48,
  DELHI_VILLA_IMAGES.image49,
  DELHI_VILLA_IMAGES.image50,
] as const;

const artius = (filename: string) => publicImage('artius', filename);

/** ARTIUS Experience Centre project imagery */
export const ARTIUS_IMAGES = {
  hero: artius('23.webp'),
  image23: artius('23.webp'),
  image24: artius('24.webp'),
  image25: artius('25.webp'),
  image26: artius('26.webp'),
  image27: artius('27.webp'),
  image28: artius('28.webp'),
  image29: artius('29.webp'),
  image30: artius('30.webp'),
  image31: artius('31.webp'),
  image32: artius('32.webp'),
} as const;

export const ARTIUS_GALLERY = [
  ARTIUS_IMAGES.hero,
  ARTIUS_IMAGES.image24,
  ARTIUS_IMAGES.image25,
  ARTIUS_IMAGES.image26,
  ARTIUS_IMAGES.image27,
  ARTIUS_IMAGES.image28,
  ARTIUS_IMAGES.image29,
  ARTIUS_IMAGES.image30,
  ARTIUS_IMAGES.image31,
  ARTIUS_IMAGES.image32,
] as const;

/** Portfolio imagery for service pages and highlights. */
export const PORTFOLIO_IMAGES = {
  living: NVT_IMAGES.family,
  villa: DELHI_VILLA_IMAGES.hero,
  kitchen: NVT_IMAGES.dining,
  bedroom: NVT_IMAGES.mbr,
  apartment: NVT_IMAGES.kids,
  renovation: ARTIUS_IMAGES.hero,
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
