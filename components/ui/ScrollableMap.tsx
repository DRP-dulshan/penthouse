'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type ScrollableMapProps = {
  children: ReactNode;
  /** Horizontal point of interest in the image, 0-1. */
  focus?: number;
};

/**
 * Horizontal scroller for the branded location map.
 *
 * On phones the map is wider than the screen so its street labels stay legible.
 * Left alone it would open on Palm Jumeirah, with the Park Towers marker --
 * the only part that matters -- off screen, so the initial scroll position is
 * nudged to bring the marker into view. Without JavaScript it simply starts at
 * the left edge and remains scrollable.
 */
export default function ScrollableMap({ children, focus = 0.66 }: ScrollableMapProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;
    el.scrollLeft = Math.min(max, Math.max(0, el.scrollWidth * focus - el.clientWidth / 2));
  }, [focus]);

  return (
    <div ref={ref} className="overflow-x-auto">
      {children}
    </div>
  );
}
