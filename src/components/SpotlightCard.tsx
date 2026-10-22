"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * SpotlightCard — follows the pointer with a soft accent wash and a 1px
 * glowing ring. Reference implementation follows the React Bits
 * "SpotlightCard" pattern: the pointer position is written to the
 * `--mouse-x` / `--mouse-y` custom properties, and the visual effect is
 * painted by the `.spotlight-card` pseudo-elements in `globals.css`.
 *
 * The wrapper owns the card surface (background, border, radius, shadow and
 * hover transform) so the spotlight travels with the card instead of
 * drifting behind it.
 */
export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
}
