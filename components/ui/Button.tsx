"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RollingText from "./RollingText";

// next/link given motion, so the hover state lives on the same element that
// handles navigation and prefetching, and every letter inside can follow it.
const MotionLink = motion.create(Link);

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  /**
   * All visual styling lives here — colour, padding, radius, font size. The
   * component itself only sets layout and motion, so nothing it applies can
   * collide with the utilities passed in.
   */
  className?: string;
  /** Styling for the arrow, e.g. a different colour to the label. */
  iconClassName?: string;
  iconSize?: number;
  /** Set false for a label-only button. */
  showArrow?: boolean;
} & Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  | "href"
  | "className"
  | "children"
  // Taken by framer-motion for its own gestures and animations, with
  // different signatures, so the link's versions cannot be passed through.
  | "onAnimationStart"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
>;

// ─── Hover timing ───────────────────────────────────────────────────────────
// The numbers to change to make the arrow and the colour faster or slower, in
// seconds. The letter roll's own timing lives in RollingText, shared with the
// nav links.

/** How long the arrow takes to swap. */
const ARROW_DURATION = 0.7;

/** How long the background and text take to swap colour. */
const COLOUR_DURATION = 0.5;

// ────────────────────────────────────────────────────────────────────────────

// The arrow and the colour swap stay in CSS. The hover is the button's own
// named group, so a card that is itself a group cannot set them off from
// anywhere inside it. Each rule is a complete, literal class string, since
// Tailwind scans source files for full class names.
const ARROW_MOTION = "transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]";

// White buttons turn black and black ones white. Read off the button's own
// background token, exactly — bg-white/20 and the like are left alone, as is
// any other colour, which keeps whatever hover it already has.
const INVERT_WHITE =
  "hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white active:bg-black active:text-white";
const INVERT_BLACK =
  "hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black active:bg-white active:text-black";

const invertFor = (className: string) => {
  if (/(^|\s)bg-white(\s|$)/.test(className)) return INVERT_WHITE;
  if (/(^|\s)bg-black(\s|$)/.test(className)) return INVERT_BLACK;
  return "";
};

export default function Button({
  href,
  children,
  className = "",
  iconClassName = "",
  iconSize = 18,
  showArrow = true,
  ...props
}: ButtonProps) {
  const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");

  return (
    <MotionLink
      href={href}
      // Hover, and keyboard focus, set every letter inside rolling.
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      // A touch screen has no hover, so a press plays it instead, for as
      // long as the finger is down.
      whileTap="hover"
      className={`group/button gap-xs inline-flex items-center justify-center transition-colors ${invertFor(className)} ${className}`}
      style={{ transitionDuration: `${COLOUR_DURATION}s` }}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {/* Only a plain string can be split into letters; anything richer is
          drawn as given. */}
      {typeof children === "string" ? (
        <RollingText text={children} />
      ) : (
        children
      )}

      {showArrow && (
        // The arrow carries on the way it points, out past the top right,
        // and a fresh one slides in from the bottom left to take its place.
        <span
          aria-hidden="true"
          className="relative inline-flex shrink-0 overflow-hidden"
        >
          <ArrowUpRight
            style={{ transitionDuration: `${ARROW_DURATION}s` }}
            size={iconSize}
            strokeWidth={2.5}
            className={`shrink-0 ${ARROW_MOTION} motion-safe:group-hover/button:translate-x-full motion-safe:group-hover/button:-translate-y-full motion-safe:group-focus-visible/button:translate-x-full motion-safe:group-focus-visible/button:-translate-y-full motion-safe:group-active/button:translate-x-full motion-safe:group-active/button:-translate-y-full ${iconClassName}`}
          />

          <ArrowUpRight
            style={{ transitionDuration: `${ARROW_DURATION}s` }}
            size={iconSize}
            strokeWidth={2.5}
            className={`absolute inset-0 shrink-0 -translate-x-full translate-y-full ${ARROW_MOTION} motion-safe:group-hover/button:translate-x-0 motion-safe:group-hover/button:translate-y-0 motion-safe:group-focus-visible/button:translate-x-0 motion-safe:group-focus-visible/button:translate-y-0 motion-safe:group-active/button:translate-x-0 motion-safe:group-active/button:translate-y-0 ${iconClassName}`}
          />
        </span>
      )}
    </MotionLink>
  );
}
