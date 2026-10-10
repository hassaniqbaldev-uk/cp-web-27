"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Fragment } from "react";

// ─── Roll timing ────────────────────────────────────────────────────────────
// The numbers to change to make the letter roll faster or slower, in seconds.
// Shared by every button and every nav link, so they always move alike.

/** How long each letter takes to roll up. */
const ROLL_DURATION = 0.25;

/**
 * The whole run of letters starting, first label then second, spread across
 * this long in total — however many letters there are, so a long label
 * finishes as soon as a short one. Raise it for a slower wave.
 */
const ROLL_SPREAD = 0.35;

/** Slow to start and slow to settle, quick through the middle. */
const ROLL_EASE = [0.76, 0, 0.24, 1] as const;

// ────────────────────────────────────────────────────────────────────────────

type RollingTextProps = {
  text: string;
  /**
   * What sets it rolling. "parent", the default, follows the nearest motion
   * element above it with "rest" and "hover" states — a Button, or a
   * RollingLink — so the whole of that element is the hover target. "self"
   * listens for the pointer on the text alone, for a label inside something
   * that is not a motion element, such as a dropdown's trigger.
   */
  trigger?: "parent" | "self";
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
export default function RollingText({
  text,
  trigger = "parent",
}: RollingTextProps) {
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

  const letterSpans = text.split(" ").map((word, wordIndex) => (
    <Fragment key={wordIndex}>
      {wordIndex > 0 && " "}
      <span className="whitespace-nowrap">
        {Array.from(word).map((character) => {
          const index = position++;

          return (
            // align-top, since an inline-block that clips sits on its bottom
            // edge rather than the text's baseline, and would otherwise lift
            // every letter.
            <span
              key={index}
              className="relative inline-block overflow-hidden align-top"
            >
              {/* The label's letter: its place in the first half of the
                  wave. */}
              <motion.span variants={rollFor(index)} className="inline-block">
                {character}
              </motion.span>

              {/* The copy's letter waits directly beneath, and rises into
                  place in the second half of the wave. */}
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
  ));

  return (
    <>
      {/* What a screen reader hears: the label, once, as ordinary text. */}
      <span className="sr-only">{text}</span>

      {trigger === "self" ? (
        <motion.span
          aria-hidden="true"
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          {letterSpans}
        </motion.span>
      ) : (
        <span aria-hidden="true">{letterSpans}</span>
      )}
    </>
  );
}

// next/link given motion, so the hover state lives on the link itself and
// every letter inside can follow it.
const MotionLink = motion.create(Link);

type RollingLinkProps = {
  /** The link's text, which is what rolls. */
  children: string;
} & Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  | "children"
  // Taken by framer-motion for its own gestures and animations, with
  // different signatures, so the link's versions cannot be passed through.
  | "onAnimationStart"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
>;

/**
 * A text link whose label rolls on hover and on keyboard focus, as the
 * buttons do. Styling is passed straight through; it adds none of its own.
 */
export function RollingLink({ children, ...props }: RollingLinkProps) {
  return (
    <MotionLink
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      {...props}
    >
      <RollingText text={children} />
    </MotionLink>
  );
}
