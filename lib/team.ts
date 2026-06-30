export const teamSection = {
  number: '06',
  label: 'Meet Our Team',
  title: 'The People Behind',
  titleAccent: 'Every Space',
  intro:
    'A multidisciplinary studio of designers, visualizers, and project leads — united by a shared commitment to craft, clarity, and client care.',
} as const;

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
  featured?: boolean;
};

const teamImage = (filename: string) =>
  `/teams/${encodeURIComponent(filename)}`;

export const teamLead: TeamMember = {
  name: 'Arushi Goel',
  role: 'Chief Designer',
  image: teamImage('Arushi Goel.png'),
  featured: true,
  bio: 'An avid admirer of Indian material and design objects. Arushi is forever curious — she informs here work by observation and research while tapping into the potential of form and function. Her design moves beyond the conventional relationship between fashion, art, and design. With a passionate interest in the old and the modern, the traditional and the contemporary, she finds innovative solutions for any little or large spaces. ',
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Shikha Singh',
    role: 'Project Collaborator',
    image: teamImage('Shikha Singh.png'),
  },
  {
    name: 'Tushar Shukla',
    role: 'Project Manager',
    image: teamImage('Tushar Shukla.png'),
  },
  {
    name: 'Mamta Rathod',
    role: 'Designer',
    image: teamImage('Mamta Rathod.png'),
  },
  {
    name: 'Priyanka Peswani',
    role: '3D Visualizer',
    image: teamImage('Priyanka Peswani.png'),
  },
  {
    name: 'Ishan Vaidwan',
    role: 'Business Development',
    image: teamImage('Ishan Vaidwan.png'),
  },
];

/** @deprecated Use teamLead + teamMembers — kept for any legacy imports */
export const team = [
  {
    name: teamLead.name,
    role: teamLead.role,
    bio: teamLead.bio ?? '',
  },
  ...teamMembers.map((m) => ({
    name: m.name,
    role: m.role,
    bio: '',
  })),
];
