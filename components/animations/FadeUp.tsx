"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createContext, useContext } from "react";

/**
 * Scroll reveals. Anything wrapped in FadeUp rises into place and fades in the
 * first time it enters the viewport; wrapped in a Stagger, a run of them
 * follows one after another instead of arriving at once.
 */

/** How far below its place an element starts, in pixels. */
const DISTANCE = 60;

const DURATION = 0.8;

/** The accordion's curve, so everything on the site eases the same way. */
const EASE = [0.22, 1, 0.36, 1] as const;

/** Gap between one item and the next in a Stagger, in seconds. */
const STAGGER = 0.12;

// Once only, so scrolling back up does not replay it, and not until a quarter
// of the element is showing, so it plays where it can be seen rather than on
// its first pixel.
const VIEWPORT = { once: true, amount: 0.25 } as const;

// The tags these can render as. Kept to a short list rather than any element,
// since each one has to be a motion component.
const tags = {
  div: motion.div,
  ul: motion.ul,
  li: motion.li,
  p: motion.p,
  span: motion.span,
  blockquote: motion.blockquote,
};

type Tag = keyof typeof tags;

type RevealProps = {
  as?: Tag;
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before this one starts. */
  delay?: number;
  "aria-hidden"?: boolean;
};

// Set inside a Stagger. A FadeUp there takes its timing from the group rather
// than watching the viewport itself, which is what makes the items follow on.
const InStagger = createContext(false);

export default function FadeUp({
  as = "div",
  children,
  className,
  delay = 0,
  ...rest
}: RevealProps) {
  const isInStagger = useContext(InStagger);
  const prefersReducedMotion = useReducedMotion();

  // Cast to one concrete motion component: the props are the same for every
  // tag in the list, and a union of them is more than TypeScript will unify.
  const Component = tags[as] as typeof motion.div;

  // Under reduced motion both states are the finished one, so nothing moves
  // and nothing is ever hidden.
  const variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: DISTANCE },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATION, ease: EASE, delay },
        },
      };

  return (
    <Component
      variants={variants}
      {...(!isInStagger && {
        initial: "hidden",
        whileInView: "visible",
        viewport: VIEWPORT,
      })}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}

/**
 * Plays the FadeUps inside it in order, one after another, once the group
 * scrolls into view. They need not be its direct children.
 */
export function Stagger({
  as = "div",
  children,
  className,
  delay = 0,
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const Component = tags[as] as typeof motion.div;

  return (
    <InStagger.Provider value={true}>
      <Component
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: prefersReducedMotion ? 0 : STAGGER,
              delayChildren: delay,
            },
          },
        }}
        className={className}
        {...rest}
      >
        {children}
      </Component>
    </InStagger.Provider>
  );
}
