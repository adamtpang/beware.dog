// The hero showpiece: a guard-dog head on a "sonar" watch scene. All motion is
// CSS so it honors prefers-reduced-motion (see globals.css).

export function DogMascot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      className={className}
      role="img"
      aria-label="A guard dog keeping watch, scanning for threats"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="head" cx="50%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#191c25" />
          <stop offset="100%" stopColor="#0a0b11" />
        </radialGradient>
        <filter id="soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* static concentric watch rings */}
      <g stroke="#23262f" fill="none">
        <circle cx="180" cy="180" r="150" />
        <circle cx="180" cy="180" r="112" />
        <circle cx="180" cy="180" r="74" />
      </g>

      {/* crosshair ticks */}
      <g stroke="#f5b301" strokeWidth="2" opacity="0.55">
        <line x1="180" y1="18" x2="180" y2="34" />
        <line x1="180" y1="326" x2="180" y2="342" />
        <line x1="18" y1="180" x2="34" y2="180" />
        <line x1="326" y1="180" x2="342" y2="180" />
      </g>

      {/* sonar pings */}
      <g fill="none" stroke="#f5b301" strokeWidth="1.5">
        <circle className="pulse-ring" cx="180" cy="180" r="70" style={{ transformOrigin: "180px 180px" }} />
        <circle className="pulse-ring pulse-ring-2" cx="180" cy="180" r="70" style={{ transformOrigin: "180px 180px" }} />
      </g>

      {/* guard-dog head */}
      <g filter="url(#soft)">
        <path
          d="M120 96 L180 128 L240 96 L216 150 L226 190 L200 236 L180 258 L160 236 L134 190 L144 150 Z"
          fill="url(#head)"
          stroke="#f5b301"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </g>

      {/* brows: angled inward for an alert, stern read */}
      <g stroke="#f5b301" strokeWidth="3" strokeLinecap="round" opacity="0.85">
        <line x1="146" y1="160" x2="174" y2="170" />
        <line x1="214" y1="160" x2="186" y2="170" />
      </g>

      {/* eyes */}
      <g className="eye-glow" fill="#ffcf5c">
        <polygon points="148,172 168,166 172,184 152,188" />
        <polygon points="212,172 192,166 188,184 208,188" />
      </g>

      {/* snout bridge + nose */}
      <line x1="180" y1="176" x2="180" y2="224" stroke="#2b2f3a" strokeWidth="2" />
      <path d="M168 224 L192 224 L180 244 Z" fill="#f5b301" />
    </svg>
  );
}
