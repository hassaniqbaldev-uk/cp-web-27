"use client";

import { useEffect, useRef } from "react";

/**
 * How much of the gap to the target each frame closes, which is what smooths
 * a wheel's steps into a glide. At 1 it follows exactly.
 */
const EASE = 0.12;

/** Below this the ease has arrived, and the frame loop can stop. */
const REST = 0.0005;

const clamp = (value) => Math.min(1, Math.max(0, value));

/**
 * Reports a scroll position as a fraction, 0 to 1, eased towards wherever the
 * scroll has reached.
 *
 * The fraction is handed to a callback rather than held as state: these change
 * on every frame of a scroll, and a render per frame would cost more than the
 * work the callback does. Write to the elements directly from it.
 */
function useProgress(
  /** Reads the fraction from the current scroll position. */
  read,
  onChange,
  /** Scrolls on this element rather than the page, where it has its own box. */
  container,
) {
  // In refs so an inline function from the caller does not re-subscribe the
  // listeners on every render.
  const readRef = useRef(read);
  const onChangeRef = useRef(onChange);

  // At hook scope rather than inside the effect below, so a repaint can be
  // asked for without a scroll to prompt one.
  const current = useRef(0);
  const wanted = useRef(0);

  useEffect(() => {
    readRef.current = read;
  }, [read]);

  // A caller whose painting changes — because a media query has only now been
  // answered, say — is given the position again rather than left waiting for
  // the next scroll.
  useEffect(() => {
    onChangeRef.current = onChange;
    onChange(current.current);
  }, [onChange]);

  useEffect(() => {
    const target = container?.current ?? window;

    current.current = readRef.current() ?? 0;
    wanted.current = current.current;

    let frame = 0;

    onChangeRef.current(current.current);

    const tick = () => {
      current.current += (wanted.current - current.current) * EASE;

      // Snapped home rather than left a fraction short, so the fill reaches
      // its end and the loop has something to stop at.
      if (Math.abs(wanted.current - current.current) < REST) {
        current.current = wanted.current;
      }

      onChangeRef.current(current.current);

      frame =
        current.current === wanted.current ? 0 : requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const next = readRef.current();

      if (next === null || next === wanted.current) return;

      wanted.current = next;

      if (!frame) frame = requestAnimationFrame(tick);
    };

    // Passive, so the listener can never delay the scroll itself.
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);

      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [container]);
}

/**
 * How far an element has passed the viewport: 0 while its top is still below
 * the top of the screen, 1 once its bottom has reached it. Which is the span a
 * sticky stack completes over.
 */
export function useElementProgress(ref, onChange) {
  useProgress(() => {
    const node = ref.current;

    if (!node) return null;

    const { top, height } = node.getBoundingClientRect();

    const travel = height - window.innerHeight;

    return travel > 0 ? clamp(-top / travel) : 0;
  }, onChange);
}
