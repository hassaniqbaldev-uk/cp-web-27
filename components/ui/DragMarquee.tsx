"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * A marquee that can be grabbed and thrown.
 *
 * One offset drives everything. The frame loop advances it, a drag adds to it,
 * and a throw decays into it, so the animation and the hand are never fighting
 * over the same transform — which is what made the CSS version jump.
 *
 * The offset is wrapped over half the track. The track holds the content twice,
 * so half is exactly one copy: shifting by that much is invisible, and the
 * offset can grow in either direction for ever without reaching an end.
 *
 * The child must be the track itself — a single element holding both copies —
 * since that is what gets measured.
 */
const MEDIA_QUERY = "(max-width: 425px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Steady travel, in pixels per second. Negative runs leftward. */
const SPEED = -40;

/** What a throw keeps of its speed each frame at 60fps. */
const FRICTION = 0.94;

/** Below this the throw is over, in pixels per second. */
const REST_VELOCITY = 20;

type DragMarqueeProps = {
  children: React.ReactNode;
  className?: string;
};

const DragMarquee = ({ children, className = "" }: DragMarqueeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // The raw offset, unbounded. Rendering wraps it; nothing else needs to.
  const offset = useMotionValue(0);

  const [half, setHalf] = useState(0);

  // State as well as the ref below, because the transform has to be rebuilt
  // when this changes — a ref would leave it reading the old value.
  const [isActive, setIsActive] = useState(false);

  // Refs, not state: these change during a drag, and a render per pointer move
  // would cost more than the move itself.
  const isEnabled = useRef(false);
  const isDragging = useRef(false);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  // Off above the breakpoint, and deliberately not merely "wrapped from zero":
  // the range is half open, so wrap(-half, 0, 0) is -half, which would shift
  // the grid sideways by a whole copy of the track.
  const x = useTransform(offset, (value) =>
    isActive && half > 0 ? wrap(-half, 0, value) : 0,
  );

  // Measured rather than assumed, so it survives a font loading late or the
  // copy changing length.
  useEffect(() => {
    const track = ref.current?.firstElementChild;
    if (!track) return;

    const measure = () => setHalf(track.scrollWidth / 2);

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  // Above the breakpoint the cards are a grid, and under reduced motion the
  // track is a plain scroller. Neither wants a transform.
  useEffect(() => {
    const narrow = window.matchMedia(MEDIA_QUERY);
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY);

    const sync = () => {
      isEnabled.current = narrow.matches && !reduced.matches;
      setIsActive(isEnabled.current);

      if (!isEnabled.current) {
        velocity.current = 0;
        offset.set(0);
      }
    };

    sync();

    narrow.addEventListener("change", sync);
    reduced.addEventListener("change", sync);

    return () => {
      narrow.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, [offset]);

  useAnimationFrame((_, delta) => {
    if (!isEnabled.current || isDragging.current) return;

    // Frames vary, so friction is raised to however many 60fps frames have
    // actually passed. Otherwise a throw dies faster on a slow device.
    if (velocity.current !== 0) {
      velocity.current *= Math.pow(FRICTION, delta / (1000 / 60));

      if (Math.abs(velocity.current) < REST_VELOCITY) velocity.current = 0;
    }

    // The throw rides on top of the steady travel rather than replacing it, so
    // it glides back down to the normal speed instead of stopping dead.
    offset.set(offset.get() + ((SPEED + velocity.current) * delta) / 1000);
  });

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isEnabled.current) return;

    // Capture, so a finger sliding off the element keeps sending moves here
    // rather than dropping the drag halfway.
    ref.current?.setPointerCapture(event.pointerId);

    isDragging.current = true;
    velocity.current = 0;
    lastX.current = event.clientX;
    lastTime.current = event.timeStamp;
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const dx = event.clientX - lastX.current;
    const dt = event.timeStamp - lastTime.current;

    offset.set(offset.get() + dx);

    // Taken from the last move rather than averaged, which is what makes a
    // flick feel like the speed of the flick.
    if (dt > 0) velocity.current = (dx / dt) * 1000;

    lastX.current = event.clientX;
    lastTime.current = event.timeStamp;
  };

  const onPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    // Capture is not released here on purpose. The spec releases it implicitly
    // on both of the events that reach this handler, so calling it again is at
    // best redundant and in Firefox throws, since it reports capture it no
    // longer holds.
    isDragging.current = false;

    // A finger held still before release should not throw.
    if (event.timeStamp - lastTime.current > 100) velocity.current = 0;
  };

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      // pan-y so a vertical swipe still scrolls the page — only the horizontal
      // axis is claimed here.
      className={`max-425:touch-pan-y ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default DragMarquee;
