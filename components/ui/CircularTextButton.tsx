"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { useId, useRef } from "react";

// next/link, given motion values, so the magnetic offset rides on the same
// element that handles navigation and prefetching.
const MotionLink = motion.create(Link);

/** How far the button leans towards the pointer, as a fraction of the
 *  distance from its centre. Low enough that it never breaks its layout. */
const MAGNET_STRENGTH = 0.3;

type CircularTextButtonProps = {
  href: string;
  /** Drawn around the ring. Rendered as an image, not as text. */
  label: string;
  /**
   * The link's accessible name. Separate from `label` because the ring is
   * hidden from assistive tech, and because screen readers spell out strings
   * that are capitalised in the markup.
   */
  srLabel: string;
  /** Sits in the middle of the ring — an icon, usually. */
  children: React.ReactNode;
  /** All visual styling lives here, including the button's size. */
  className?: string;
  labelClassName?: string;
};

export default function CircularTextButton({
  href,
  label,
  srLabel,
  children,
  className = "",
  labelClassName = "",
}: CircularTextButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  // Colons in a generated id are awkward in a fragment reference, so they go.
  const pathId = `ring-${useId().replace(/:/g, "")}`;
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs rather than raw values, so the button eases towards the pointer
  // and glides back on leave instead of snapping.
  const springConfig = { stiffness: 220, damping: 18, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();

    x.set((event.clientX - (left + width / 2)) * MAGNET_STRENGTH);
    y.set((event.clientY - (top + height / 2)) * MAGNET_STRENGTH);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionLink
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative flex items-center justify-center ${className}`}
    >
      <span className="sr-only">{srLabel}</span>

      {/* Only the ring spins, so the icon in the middle stays upright.
          Paused on hover and focus; animation-play-state keeps the ring at
          the angle it reached rather than resetting it. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="animate-spin-slow size-full group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {/* Starts at the top and runs clockwise. textLength pins the string to
            the exact circumference, so the ring always closes however the
            font renders. */}
        <path
          id={pathId}
          fill="none"
          d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
        />

        <text className={labelClassName}>
          <textPath
            href={`#${pathId}`}
            startOffset="50%"
            textAnchor="middle"
            textLength="180"
            lengthAdjust="spacing"
          >
            {label}
          </textPath>
        </text>
      </svg>

      <span aria-hidden="true" className="absolute">
        {children}
      </span>
    </MotionLink>
  );
}
