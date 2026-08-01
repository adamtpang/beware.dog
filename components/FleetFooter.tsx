import { FLEET_HUB, FLEET_SISTERS } from "@/lib/fleet";

// The fleet ring: every product links the hub and two sisters.
export function FleetFooter() {
  return (
    <div className="flex flex-col items-start gap-2 text-xs text-ash-dim sm:flex-row sm:items-center sm:gap-3">
      <span>
        Part of the{" "}
        <a
          href={FLEET_HUB.url}
          className="text-ash transition hover:text-brass"
        >
          {FLEET_HUB.name} fleet
        </a>
      </span>
      {FLEET_SISTERS.map((s) => (
        <span key={s.url} className="flex items-center gap-3">
          <span aria-hidden className="hidden text-brass/50 sm:inline">
            &middot;
          </span>
          <a
            href={s.url}
            title={s.one}
            className="transition hover:text-brass"
          >
            {s.name}
          </a>
        </span>
      ))}
    </div>
  );
}
