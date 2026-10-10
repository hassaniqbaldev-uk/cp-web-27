"use client";

import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/** How long a figure takes to count up, in seconds. */
const COUNT_DURATION = 1.6;

/** Quick off the mark, settling slowly onto the figure. */
const COUNT_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * "12+" to its parts: the text before the number, the number, and the text
 * after it. A figure with no number in it is shown as it is.
 */
const parse = (value: string) => {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);

  if (!match) return null;

  const [, prefix, digits, suffix] = match;

  return {
    prefix,
    suffix,
    target: Number(digits),
    // "03" keeps its leading zero all the way up: 00, 01, 02, 03.
    width: digits.startsWith("0") ? digits.length : 0,
  };
};

type CountUpProps = {
  /** The finished figure, as written, e.g. "12+", "94%" or "03". */
  value: string;
  /** Held at zero while false, and counts up once true. */
  play: boolean;
  /** Seconds to wait once play turns true. */
  delay?: number;
};

/**
 * A figure that counts up from zero to its value, keeping whatever surrounds
 * the number — a plus, a percent — in place throughout.
 *
 * The finished figure sits unseen underneath, holding the width it will end
 * at, so the box around it does not grow as the digits do. A screen reader
 * hears only the finished figure.
 */
export default function CountUp({ value, play, delay = 0 }: CountUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const countRef = useRef<HTMLSpanElement>(null);

  const parts = parse(value);

  const format = (current: number) =>
    parts
      ? `${parts.prefix}${String(Math.round(current)).padStart(parts.width, "0")}${parts.suffix}`
      : value;

  useEffect(() => {
    const node = countRef.current;

    if (!node || !parts || !play) return;

    if (prefersReducedMotion) {
      node.textContent = value;
      return;
    }

    // Written straight to the element on each frame rather than through
    // state, so counting costs no renders.
    const controls = animate(0, parts.target, {
      duration: COUNT_DURATION,
      ease: COUNT_EASE,
      delay,
      onUpdate: (current) => {
        node.textContent = format(current);
      },
    });

    return () => controls.stop();
    // format and parts follow from value, which is listed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, delay, value, prefersReducedMotion]);

  if (!parts) return <>{value}</>;

  return (
    <>
      <span className="sr-only">{value}</span>

      {/* The finished figure holds the width; the count is laid over it,
          from the same left edge. */}
      <span aria-hidden="true" className="relative inline-block">
        <span className="invisible">{value}</span>

        <span ref={countRef} className="absolute top-0 left-0">
          {format(0)}
        </span>
      </span>
    </>
  );
}
