// Compact guard-dog head mark. Inherits color via currentColor, so it takes on
// whatever text color it sits in (brass in the nav, bone in the footer).

export function DogMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 12 L32 24 L50 12 L42 30 L46 42 L37 55 L32 60 L27 55 L18 42 L22 30 Z"
        fill="currentColor"
      />
      <circle cx="26" cy="34" r="2.6" fill="#0a0b0e" />
      <circle cx="38" cy="34" r="2.6" fill="#0a0b0e" />
      <path d="M28 44 L36 44 L32 50 Z" fill="#0a0b0e" />
    </svg>
  );
}
