import type { TeamGender } from '@/lib/team';

type TeamAvatarProps = {
  gender: TeamGender;
  name: string;
  /** `card` fills the 4/5 photo area; `compact` is for small circular strips */
  variant?: 'card' | 'compact';
  className?: string;
};

/**
 * Premium gender-specific profile silhouettes — no photographs.
 * Male / female bust icons for the Meet Our Team cards.
 */
export function TeamAvatar({
  gender,
  name,
  variant = 'card',
  className = '',
}: TeamAvatarProps) {
  const label = `${name} profile icon`;

  if (variant === 'compact') {
    return (
      <div
        role="img"
        aria-label={label}
        className={`flex h-full w-full items-center justify-center bg-[#F3EFE8] text-[#9C6F4E] ${className}`}
      >
        <AvatarSilhouette gender={gender} className="h-[62%] w-[62%]" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`
        relative flex h-full w-full items-center justify-center
        bg-[#F3EFE8]
        ${className}
      `}
    >
      {/* Soft vignette for depth without looking like a photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(156,111,78,0.08) 0%, transparent 68%)',
        }}
      />
      <AvatarSilhouette
        gender={gender}
        className="relative z-[1] h-[46%] w-[46%] max-h-[7.5rem] max-w-[7.5rem] text-[#8A6B52] sm:h-[48%] sm:w-[48%] sm:max-h-[8.5rem] sm:max-w-[8.5rem]"
      />
    </div>
  );
}

function AvatarSilhouette({
  gender,
  className,
}: {
  gender: TeamGender;
  className?: string;
}) {
  if (gender === 'female') {
    return (
      <svg
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        {/* Longer hair mass */}
        <path
          d="M48 10c-14.5 0-24 10.2-24 24.5 0 4.2.9 8.1 2.4 11.5-1.8 1.4-3.6 3.4-4.8 6.2-2.2 5.1-1.6 10.4.4 14.2 1.2 2.3 3.1 4 5.4 5.1C24.6 78.2 34.2 84 48 84s23.4-5.8 20.6-12.5c2.3-1.1 4.2-2.8 5.4-5.1 2-3.8 2.6-9.1.4-14.2-1.2-2.8-3-4.8-4.8-6.2 1.5-3.4 2.4-7.3 2.4-11.5C72 20.2 62.5 10 48 10Z"
          fill="currentColor"
          opacity="0.22"
        />
        {/* Head */}
        <circle cx="48" cy="34" r="16" fill="currentColor" opacity="0.92" />
        {/* Soft hair fringe over head */}
        <path
          d="M32.5 30c1.2-8.8 8.2-14.5 15.5-14.5S62.3 21.2 63.5 30c.4 2.8-.2 5.2-1.4 7.1-1.8-5.6-6.4-9.4-14.1-9.4s-12.3 3.8-14.1 9.4c-1.2-1.9-1.8-4.3-1.4-7.1Z"
          fill="currentColor"
        />
        {/* Shoulders / bust */}
        <path
          d="M48 52c-13.8 0-25.5 7.8-30.2 19.2C16.2 75.4 20.8 84 30.5 84h35c9.7 0 14.3-8.6 12.7-12.8C73.5 59.8 61.8 52 48 52Z"
          fill="currentColor"
          opacity="0.92"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Short hair cap */}
      <path
        d="M31 30.5c1.4-9.2 8.6-15.5 17-15.5s15.6 6.3 17 15.5c.3 1.8.2 3.4-.2 4.9-2.4-6.4-8.2-10.4-16.8-10.4S33.6 29 31.2 35.4c-.4-1.5-.5-3.1-.2-4.9Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Head */}
      <circle cx="48" cy="35" r="15.5" fill="currentColor" opacity="0.92" />
      {/* Broader shoulders */}
      <path
        d="M48 53c-15.2 0-28.2 8.6-33.2 20.8C13.2 78.2 18.4 84 28.8 84h38.4c10.4 0 15.6-5.8 14-10.2C76.2 61.6 63.2 53 48 53Z"
        fill="currentColor"
        opacity="0.92"
      />
    </svg>
  );
}
