"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// next/link, given motion values, so the magnetic offset rides on the same
// element that handles navigation and prefetching.
const MotionLink = motion.create(Link);

/** How far the button leans towards the pointer, as a fraction of the
 *  distance from its centre. Low enough that it never breaks its layout. */
const MAGNET_STRENGTH = 0.3;

type CircularTextButtonProps = {
  href: string;
  /** Artwork of the label set around a circle. */
  image: string;
  /** Intrinsic size of the asset — next/image needs it to reserve space. */
  imageWidth: number;
  imageHeight: number;
  /**
   * The link's accessible name. The ring is artwork rather than live text, so
   * the name is given here and the image itself left out of the accessibility
   * tree — otherwise it would be announced twice.
   */
  srLabel: string;
  /** Sits in the middle of the ring — an icon, usually. */
  children: React.ReactNode;
  /** All visual styling lives here, including the button's size. */
  className?: string;
  ringClassName?: string;
};

export default function CircularTextButton({
  href,
  image,
  imageWidth,
  imageHeight,
  srLabel,
  children,
  className = "",
  ringClassName = "",
}: CircularTextButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
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
      <Image
        src={image}
        alt=""
        aria-hidden="true"
        width={imageWidth}
        height={imageHeight}
        className={`animate-spin-slow group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused] motion-reduce:animate-none ${ringClassName}`}
      />

      <span aria-hidden="true" className="absolute">
        {children}
      </span>
    </MotionLink>
  );
}
