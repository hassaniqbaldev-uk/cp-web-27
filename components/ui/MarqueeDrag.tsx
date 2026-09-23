"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps a CSS marquee track so it can be held and dragged by hand below 425.
 *
 * The animation itself stays in CSS on the track; this only does the two things
 * CSS cannot. It writes `--play` so the track can pause while a finger is down
 * — `:active` is the CSS equivalent, but iOS Safari only applies it to a
 * non-interactive element when something up the tree carries a touch listener,
 * which is exactly what this adds. And it holds a drag offset, applied as a
 * transform on this wrapper rather than on the track, so the two never fight
 * over one property.
 *
 * The offset wraps at half the track's length. Half is one full copy of the
 * duplicated content, so shifting by that amount is invisible, and the drag can
 * carry on in either direction for ever without running off the end.
 */
const MEDIA_QUERY = "(max-width: 425px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type MarqueeDragProps = {
  children: React.ReactNode;
  className?: string;
};

const MarqueeDrag = ({ children, className = "" }: MarqueeDragProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Refs rather than state: a drag writes on every pointer move, and a render
  // per frame would cost more than the work itself.
  const isEnabled = useRef(false);
  const offset = useRef(0);
  const startX = useRef(0);
  const startOffset = useRef(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const narrow = window.matchMedia(MEDIA_QUERY);

    // Above the breakpoint there is nothing to drag, and under reduced motion
    // the track is a native scroller instead, which a transform would fight.
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY);

    const sync = () => {
      isEnabled.current = narrow.matches && !reduced.matches;

      if (!isEnabled.current) {
        offset.current = 0;
        node.style.transform = "";
        node.style.removeProperty("--play");
      }
    };

    sync();

    narrow.addEventListener("change", sync);
    reduced.addEventListener("change", sync);

    return () => {
      narrow.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isEnabled.current) return;

    const node = ref.current;
    if (!node) return;

    // Capture, so a finger that leaves the element mid-drag keeps sending
    // moves here rather than silently stopping.
    node.setPointerCapture(event.pointerId);

    startX.current = event.clientX;
    startOffset.current = offset.current;

    node.style.setProperty("--play", "paused");
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || !node.hasPointerCapture(event.pointerId)) return;

    const track = node.firstElementChild;
    // Half the track, since the content is there twice over.
    const half = track ? track.scrollWidth / 2 : 0;

    const next = startOffset.current + (event.clientX - startX.current);

    // Modulo keeps the number small and, because the step is exactly one copy,
    // the wrap is invisible. The double modulo is for negative values, which
    // JavaScript's % would otherwise leave negative.
    offset.current = half > 0 ? ((next % half) + half) % half : next;

    node.style.transform = `translateX(${offset.current}px)`;
  };

  const onPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || !node.hasPointerCapture(event.pointerId)) return;

    node.releasePointerCapture(event.pointerId);
    node.style.removeProperty("--play");
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      // pan-y so a vertical swipe still scrolls the page; only the horizontal
      // axis is claimed here.
      className={`max-425:touch-pan-y ${className}`}
    >
      {children}
    </div>
  );
};

export default MarqueeDrag;
