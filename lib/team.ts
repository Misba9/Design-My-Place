export const teamSection = {
  label: 'Meet Our Team',
  title: 'The People Behind',
  titleAccent: 'Every Space',
  intro:
    'A multidisciplinary studio of designers, visualizers, and project leads — united by a shared commitment to craft, clarity, and client care.',
} as const;

export type TeamGender = 'male' | 'female';

export type TeamImageFit = {
  /** CSS object-position tuned per portrait after trimming letterboxing */
  objectPosition: string;
  width: number;
  height: number;
};

export type TeamMember = {
  name: string;
  role: string;
  /** Profile silhouette gender — used for avatar icons (no photographs) */
  gender: TeamGender;
  /** Optional photo — founder/lead only; team cards use avatar icons */
  image?: string;
  imageFit?: TeamImageFit;
  bio?: string;
  featured?: boolean;
};

/** Public team portraits — lowercase path, no spaces (Vercel/Linux case-sensitive). */
const teamImage = (filename: string) => `/teams/${filename}`;

export const teamLead: TeamMember & {
  image: string;
  imageFit: TeamImageFit;
  gender: TeamGender;
} = {
  name: 'Arushi Goel',
  role: 'CREATIVE DIRECTOR & FOUNDER',
  gender: 'female',
  image: teamImage('founder.webp'),
  imageFit: {
    objectPosition: '50% 18%',
    width: 1023,
    height: 1537,
  },
  featured: true,
  bio: 'An avid admirer of Indian material and design objects. Arushi is forever curious — she informs here work by observation and research while tapping into the potential of form and function. Her design moves beyond the conventional relationship between fashion, art, and design. With a passionate interest in the old and the modern, the traditional and the contemporary, she finds innovative solutions for any little or large spaces. ',
};

export const teamMembers: TeamMember[] = [];

/** @deprecated Use teamLead + teamMembers — kept for any legacy imports */
export const team = [
  {
    name: teamLead.name,
    role: teamLead.role,
    bio: teamLead.bio ?? '',
  },
];
