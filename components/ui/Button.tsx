"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Fragment } from "react";

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
// The numbers to change to make the hover faster or slower, in seconds.

/** How long each letter takes to roll up. */
const ROLL_DURATION = 0.35;

/**
 * The whole run of letters starting, first label then second, spread across
 * this long in total — however many letters there are, so a long label
 * finishes as soon as a short one. Raise it for a slower wave.
 */
const ROLL_SPREAD = 0.5;

/** How long the arrow takes to swap. */
const ARROW_DURATION = 0.7;

/** How long the background and text take to swap colour. */
const COLOUR_DURATION = 0.5;

// ────────────────────────────────────────────────────────────────────────────

/** Slow to start and slow to settle, quick through the middle. */
const ROLL_EASE = [0.76, 0, 0.24, 1] as const;

// The arrow and the colour swap stay in CSS. The hover is the button's own
// named group, so a card that is itself a group cannot set them off from
// anywhere inside it. Each rule is a complete, literal class string, since
// Tailwind scans source files for full class names.
const ARROW_MOTION = "transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]";

// White buttons turn black and black ones white. Read off the button's own
// background token, exactly — bg-white/20 and the like are left alone, as is
// any other colour, which keeps whatever hover it already has.
const INVERT_WHITE =
  "hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white";
const INVERT_BLACK =
  "hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black";

const invertFor = (className: string) => {
  if (/(^|\s)bg-white(\s|$)/.test(className)) return INVERT_WHITE;
  if (/(^|\s)bg-black(\s|$)/.test(className)) return INVERT_BLACK;
  return "";
};

/**
 * A label that rolls away a letter at a time on hover, with an identical copy
 * rolling up behind it to take its place: every letter of the label first,
 * then every letter of the copy, as one wave. Leaving plays it backwards, the
 * copy's last letter first.
 *
 * Every letter clips its own roll, so the label still wraps exactly as plain
 * text would; each word is held together so it only breaks at spaces.
 */
const RollingLabel = ({ text }: { text: string }) => {
  const prefersReducedMotion = useReducedMotion();

  // The wave runs through every letter of the label and then every letter of
  // the copy, so it has twice as many places in it as the label has letters.
  const letters = text.replace(/ /g, "").length;
  const places = letters * 2;

  // Where a place starts going in, and coming back out — the same spread,
  // run the other way.
  const startFor = (place: number) =>
    places > 1 ? (place / (places - 1)) * ROLL_SPREAD : 0;

  const rollFor = (place: number) =>
    prefersReducedMotion
      ? { rest: { y: "0%" }, hover: { y: "0%" } }
      : {
          rest: {
            y: "0%",
            transition: {
              duration: ROLL_DURATION,
              ease: ROLL_EASE,
              delay: startFor(places - 1 - place),
            },
          },
          hover: {
            y: "-100%",
            transition: {
              duration: ROLL_DURATION,
              ease: ROLL_EASE,
              delay: startFor(place),
            },
          },
        };

  // Counted across the whole label, so the wave runs left to right through
  // every word rather than restarting at each one.
  let position = 0;

  return (
    <>
      {/* What a screen reader hears: the label, once, as ordinary text. */}
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {text.split(" ").map((word, wordIndex) => (
          <Fragment key={wordIndex}>
            {wordIndex > 0 && " "}
            <span className="whitespace-nowrap">
              {Array.from(word).map((character) => {
                const index = position++;

                return (
                  // align-top, since an inline-block that clips sits on its
                  // bottom edge rather than the text's baseline, and would
                  // otherwise lift every letter.
                  <span
                    key={index}
                    className="relative inline-block overflow-hidden align-top"
                  >
                    {/* The label's letter: its place in the first half of
                        the wave. */}
                    <motion.span
                      variants={rollFor(index)}
                      className="inline-block"
                    >
                      {character}
                    </motion.span>

                    {/* The copy's letter waits directly beneath, and rises
                        into place in the second half of the wave. */}
                    <motion.span
                      variants={rollFor(letters + index)}
                      className="absolute top-full left-0 inline-block"
                    >
                      {character}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          </Fragment>
        ))}
      </span>
    </>
  );
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
      className={`group/button gap-xs inline-flex items-center justify-center transition-colors ${invertFor(className)} ${className}`}
      style={{ transitionDuration: `${COLOUR_DURATION}s` }}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {/* Only a plain string can be split into letters; anything richer is
          drawn as given. */}
      {typeof children === "string" ? (
        <RollingLabel text={children} />
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
            className={`shrink-0 ${ARROW_MOTION} motion-safe:group-hover/button:translate-x-full motion-safe:group-hover/button:-translate-y-full motion-safe:group-focus-visible/button:translate-x-full motion-safe:group-focus-visible/button:-translate-y-full ${iconClassName}`}
          />

          <ArrowUpRight
            style={{ transitionDuration: `${ARROW_DURATION}s` }}
            size={iconSize}
            strokeWidth={2.5}
            className={`absolute inset-0 shrink-0 -translate-x-full translate-y-full ${ARROW_MOTION} motion-safe:group-hover/button:translate-x-0 motion-safe:group-hover/button:translate-y-0 motion-safe:group-focus-visible/button:translate-x-0 motion-safe:group-focus-visible/button:translate-y-0 ${iconClassName}`}
          />
        </span>
      )}
    </MotionLink>
  );
}
