/** Encode a path under /public for use in src attributes. */
export function publicImage(...segments: string[]): string {
  return `/${segments.map((segment) => encodeURIComponent(segment)).join('/')}`;
}

export const HERO_IMAGE = '/hero-luxury.jpg';
export const LOGO_IMAGE = '/icon-512.png';
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

const adarshPalm = (filename: string) => publicImage('Adarsh palm', filename);

/** Adarsh Palm Meadows Villa project imagery */
export const ADARSH_PALM_IMAGES = {
  /** Night exterior — full facade with ramp & terraces */
  hero: adarshPalm('52.png'),
  /** Day entrance porch */
  entrance: adarshPalm('53.png'),
  /** Foyer with home lift & staircase */
  foyerLift: adarshPalm('55.png'),
  /** Entry hallway with feature wall & mirror */
  hallway: adarshPalm('54.png'),
  /** Formal living with bar */
  livingFormal: adarshPalm('57.png'),
  /** Living with mural & media wall */
  livingLounge: adarshPalm('60.png'),
  /** Navy sitting room */
  sittingRoom: adarshPalm('63.png'),
  /** Kitchen & dining */
  kitchenDining: adarshPalm('58.png'),
  /** Master bedroom suite */
  masterBedroom: adarshPalm('62.png'),
  /** Master walk-in closet */
  walkInCloset: adarshPalm('59.png'),
  /** Secondary bedroom with study */
  bedroomStudy: adarshPalm('61.png'),
  /** Outdoor patio seating */
  patio: adarshPalm('56.png'),
  /** Terrace / sunroom lounge */
  terrace: adarshPalm('64.png'),
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

const delhiVilla = (filename: string) => publicImage('Delhi_Villa', filename);

/** Delhi Villa project imagery */
export const DELHI_VILLA_IMAGES = {
  hero: delhiVilla('1.png'),
  image02: delhiVilla('2.png'),
  image03: delhiVilla('3.png'),
  image04: delhiVilla('4.png'),
  image05: delhiVilla('5.png'),
  image06: delhiVilla('6.png'),
  image07: delhiVilla('7.png'),
  image08: delhiVilla('8.png'),
  image09: delhiVilla('9.png'),
  image10: delhiVilla('10.png'),
  image11: delhiVilla('11.png'),
  image12: delhiVilla('12.png'),
  image13: delhiVilla('13.png'),
  image14: delhiVilla('14.png'),
  image15: delhiVilla('15.png'),
  image16: delhiVilla('16.png'),
  image20: delhiVilla('20.png'),
  image21: delhiVilla('21.png'),
  image22: delhiVilla('22.png'),
  image23: delhiVilla('23.png'),
  image24: delhiVilla('24.png'),
} as const;

export const DELHI_VILLA_GALLERY = [
  DELHI_VILLA_IMAGES.hero,
  DELHI_VILLA_IMAGES.image02,
  DELHI_VILLA_IMAGES.image03,
  DELHI_VILLA_IMAGES.image04,
  DELHI_VILLA_IMAGES.image05,
  DELHI_VILLA_IMAGES.image06,
  DELHI_VILLA_IMAGES.image07,
  DELHI_VILLA_IMAGES.image08,
  DELHI_VILLA_IMAGES.image09,
  DELHI_VILLA_IMAGES.image10,
  DELHI_VILLA_IMAGES.image11,
  DELHI_VILLA_IMAGES.image12,
  DELHI_VILLA_IMAGES.image13,
  DELHI_VILLA_IMAGES.image14,
  DELHI_VILLA_IMAGES.image15,
  DELHI_VILLA_IMAGES.image16,
  DELHI_VILLA_IMAGES.image20,
  DELHI_VILLA_IMAGES.image21,
  DELHI_VILLA_IMAGES.image22,
  DELHI_VILLA_IMAGES.image23,
  DELHI_VILLA_IMAGES.image24,
] as const;

const artius = (filename: string) =>
  publicImage('Artius experience centre.pptx', filename);

/** ARTIUS Experience Centre project imagery */
export const ARTIUS_IMAGES = {
  hero: artius('1.png'),
  image10: artius('10.png'),
  image11: artius('11.png'),
  image12: artius('12.png'),
  image14: artius('14.png'),
  image15: artius('15.png'),
  image16: artius('16.png'),
  image17: artius('17.png'),
  image18: artius('18.png'),
  image19: artius('19.png'),
  image20: artius('20.png'),
  image21: artius('21.png'),
  image22: artius('22.png'),
  image24: artius('24.png'),
  image25: artius('25.png'),
  image26: artius('26.png'),
  image27: artius('27.png'),
  image28: artius('28.png'),
  image29: artius('29.png'),
  image30: artius('30.png'),
  image31: artius('31.png'),
  image32: artius('32.png'),
  image33: artius('33.png'),
} as const;

export const ARTIUS_GALLERY = [
  ARTIUS_IMAGES.hero,
  ARTIUS_IMAGES.image10,
  ARTIUS_IMAGES.image11,
  ARTIUS_IMAGES.image12,
  ARTIUS_IMAGES.image14,
  ARTIUS_IMAGES.image15,
  ARTIUS_IMAGES.image16,
  ARTIUS_IMAGES.image17,
  ARTIUS_IMAGES.image18,
  ARTIUS_IMAGES.image19,
  ARTIUS_IMAGES.image20,
  ARTIUS_IMAGES.image21,
  ARTIUS_IMAGES.image22,
  ARTIUS_IMAGES.image24,
  ARTIUS_IMAGES.image25,
  ARTIUS_IMAGES.image26,
  ARTIUS_IMAGES.image27,
  ARTIUS_IMAGES.image28,
  ARTIUS_IMAGES.image29,
  ARTIUS_IMAGES.image30,
  ARTIUS_IMAGES.image31,
  ARTIUS_IMAGES.image32,
  ARTIUS_IMAGES.image33,
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
