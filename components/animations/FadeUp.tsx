"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Children,
  Fragment,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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
  ol: motion.ol,
  li: motion.li,
  p: motion.p,
  span: motion.span,
  blockquote: motion.blockquote,
  figure: motion.figure,
};

type Tag = keyof typeof tags;

type RevealProps = {
  as?: Tag;
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before this one starts. */
  delay?: number;
  /**
   * Held hidden while false and played once true, for something that waits
   * on another part of the page rather than on being scrolled to. FadeUp
   * only; a Stagger ignores it.
   */
  play?: boolean;
  "aria-hidden"?: boolean;
};

// Set inside a Stagger. A FadeUp there takes its timing from the group rather
// than watching the viewport itself, which is what makes the items follow on.
const InStagger = createContext(false);

// Cleared by RevealScope, for a shared section that only animates on the pages
// that ask it to. Everything inside then renders as its plain element.
const IsRevealOn = createContext(true);

/**
 * Switches the reveals inside it on or off together. A section used on
 * several pages wraps itself in one, so a page can opt in without the others
 * starting to move.
 */
export function RevealScope({
  enabled,
  children,
}: {
  enabled: boolean;
  children: React.ReactNode;
}) {
  return <IsRevealOn.Provider value={enabled}>{children}</IsRevealOn.Provider>;
}

export default function FadeUp({
  as = "div",
  children,
  className,
  delay = 0,
  play,
  ...rest
}: RevealProps) {
  const isInStagger = useContext(InStagger);
  const isOn = useContext(IsRevealOn);
  const prefersReducedMotion = useReducedMotion();

  if (!isOn) {
    const Plain = as;

    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

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
      {...(play !== undefined
        ? { initial: "hidden", animate: play ? "visible" : "hidden" }
        : !isInStagger && {
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
  // Taken out so it is not passed on to the element: a group plays when it
  // is scrolled to, not on a signal.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  play,
  ...rest
}: RevealProps) {
  const isOn = useContext(IsRevealOn);
  const prefersReducedMotion = useReducedMotion();

  if (!isOn) {
    const Plain = as;

    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

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

/** How far below its place masked text starts, as a share of its own height.
 *  Past 100% so even a one-line title, whose box is barely taller than its
 *  letters, starts wholly out of sight. */
const MASK_DISTANCE = "140%";

/**
 * Text that slides up out of a mask, fully opaque throughout, rather than
 * fading in.
 *
 * It clips nothing itself: the element it sits in is the mask, and has to cut
 * off what falls below its bottom edge. SectionHeading does this with a
 * clip-path rather than overflow-hidden, which would also cut the descenders
 * off a title whose line height is its font size.
 */
export function MaskReveal({
  as = "span",
  className = "block",
  delay = 0,
  playOnMount = false,
  play,
  children,
}: {
  /** A div when what slides is itself a block, such as a list. */
  as?: "span" | "div";
  /** Seconds to wait before it starts, when it is not in a Stagger. */
  delay?: number;
  /**
   * Plays as soon as it mounts rather than when it scrolls into view. For a
   * hero's load sequence: the text starts pushed down below its mask, and
   * near the foot of the screen that push alone can carry it out of view,
   * so waiting to be seen would leave it hidden until the page is scrolled.
   */
  playOnMount?: boolean;
  /**
   * Held hidden while false and played once true, for something that has to
   * wait on another part of the page — a button that follows a paragraph
   * whose line count is only known once it has been measured. Overrides
   * playOnMount and the scroll trigger when given.
   */
  play?: boolean;
  /**
   * Block by default, so it takes the text's full width and the host's
   * alignment still applies to the lines inside it. Flex when it holds a
   * button, so no line box is left beneath it.
   */
  className?: string;
  children: React.ReactNode;
}) {
  const isInStagger = useContext(InStagger);
  const isOn = useContext(IsRevealOn);
  const prefersReducedMotion = useReducedMotion();

  // Left to the scroll, it watches the mask it sits in rather than itself.
  // It starts pushed down out of that mask, and the browser counts what a
  // clip-path hides as out of view, so watching itself it would never be
  // seen and never play.
  const selfRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<Element | null>(null);

  useLayoutEffect(() => {
    maskRef.current = selfRef.current?.parentElement ?? null;
  }, []);

  const isMaskInView = useInView(maskRef as React.RefObject<Element>, VIEWPORT);

  if (!isOn) {
    const Plain = as;

    return <Plain className={className}>{children}</Plain>;
  }

  const Component = (
    as === "div" ? motion.div : motion.span
  ) as typeof motion.div;

  const variants = prefersReducedMotion
    ? { hidden: { y: 0 }, visible: { y: 0 } }
    : {
        hidden: { y: MASK_DISTANCE },
        visible: {
          y: 0,
          transition: { duration: DURATION, ease: EASE, delay },
        },
      };

  return (
    <Component
      ref={selfRef}
      variants={variants}
      {...(play !== undefined
        ? { initial: "hidden", animate: play ? "visible" : "hidden" }
        : playOnMount
          ? { initial: "hidden", animate: "visible" }
          : !isInStagger && {
              initial: "hidden",
              animate: isMaskInView ? "visible" : "hidden",
            })}
      className={className}
    >
      {children}
    </Component>
  );
}

/** Gap between one line and the next in a LineReveal, in seconds. Exported so
 *  whatever follows the text can take the next slot in the same rhythm. */
export const LINE_STAGGER = 0.1;

// The same mask SectionHeading uses: it cuts only below the line's bottom
// edge, with room for descenders.
const LINE_MASK = "[clip-path:inset(-100vh_-100vw_-0.25em_-100vw)]";

type Word = {
  /**
   * Builds the word, wrapped in a copy of every element it sat in. The
   * background, when given, goes on the innermost copy.
   */
  make: (background?: React.CSSProperties) => React.ReactNode;
  /** Whether a space came before it in the source, so a word and the
   *  punctuation or styled span hard against it are never pulled apart. */
  spaceBefore: boolean;
  /** A forced break, from a <br />, rather than a word. */
  isBreak: boolean;
  /** The element it was split out of, if any. Words that share one draw
   *  that element's background between them. */
  group: number | null;
};

type ElementWithChildren = React.ReactElement<{
  children?: React.ReactNode;
  style?: React.CSSProperties;
}>;

/**
 * Breaks text into words. An element with text inside — a coloured or a
 * gradient span — is split too, each of its words wrapped in a copy of it, so
 * a long phrase can still wrap where it did. An element with nothing inside,
 * such as an image, stays whole as a word of its own.
 */
const toWords = (children: React.ReactNode) => {
  const words: Word[] = [];
  let pendingSpace = false;
  let groups = 0;

  const walk = (
    nodes: React.ReactNode,
    wrap: (
      inner: React.ReactNode,
      background?: React.CSSProperties,
    ) => React.ReactNode,
    group: number | null,
  ) => {
    Children.toArray(nodes).forEach((child) => {
      if (typeof child === "string" || typeof child === "number") {
        String(child)
          .split(/(\s+)/)
          .forEach((part) => {
            if (!part) return;

            if (/^\s+$/.test(part)) {
              pendingSpace = true;
              return;
            }

            words.push({
              make: (background) => wrap(part, background),
              spaceBefore: pendingSpace,
              isBreak: false,
              group,
            });
            pendingSpace = false;
          });
        return;
      }

      if (!isValidElement(child)) return;

      if (child.type === "br") {
        words.push({
          make: () => null,
          spaceBefore: false,
          isBreak: true,
          group: null,
        });
        pendingSpace = false;
        return;
      }

      const element = child as ElementWithChildren;
      const inner = element.props.children;

      // A fragment is only a wrapper, with nothing of its own to copy onto
      // each word — and it cannot take the background a copy is given — so
      // its contents are read as if it were not there.
      if (element.type === Fragment) {
        walk(inner, wrap, group);
        return;
      }

      if (inner === undefined || inner === null) {
        words.push({
          make: () => wrap(element),
          spaceBefore: pendingSpace,
          isBreak: false,
          group,
        });
        pendingSpace = false;
        return;
      }

      const ownGroup = groups++;

      // Only the innermost copy takes the background: that is the element
      // whose own background the words are sharing out.
      walk(
        inner,
        (content, background) =>
          wrap(
            cloneElement(
              element,
              background
                ? { style: { ...element.props.style, ...background } }
                : {},
              content,
            ),
          ),
        ownGroup,
      );
    });
  };

  walk(children, (inner) => inner, null);

  return words;
};

type Layout = {
  /** Word indexes, one array per line. */
  lines: number[][];
  /**
   * Per word, the slice of its element's background it draws, so a gradient
   * split across several words still runs across them as one.
   */
  backgrounds: Record<number, React.CSSProperties>;
  /**
   * The width the text was measured at, in pixels, which it is then held to.
   * Broken into lines, text is only as wide as its longest line, so a box
   * that sizes to its content — a heading in an items-start column, or in a
   * centred flex row — would shrink, and every heading in one would no
   * longer sit where it did.
   */
  width: number;
};

/** Reads the lines, and each split element's run, off the laid-out words. */
const measure = (host: HTMLElement, words: Word[]): Layout => {
  const spans = [...host.querySelectorAll<HTMLElement>("[data-word]")];

  const lines: number[][] = [];
  let lastTop = -Infinity;

  spans.forEach((span) => {
    const index = Number(span.dataset.word);

    // A pixel of slack, since subpixel layout can put words on one line a
    // fraction apart.
    if (span.offsetTop > lastTop + 1) {
      lines.push([]);
      lastTop = span.offsetTop;
    }

    lines[lines.length - 1].push(index);
  });

  // A split element's words laid end to end, the gaps between them kept, as
  // an unsplit inline element paints its background across a line wrap.
  const runs = new Map<number, { index: number; offset: number }[]>();
  const widths = new Map<number, number>();

  spans.forEach((span, position) => {
    const index = Number(span.dataset.word);
    const { group } = words[index];

    if (group === null) return;

    const previous = spans[position - 1];
    const sameRunBefore =
      previous && words[Number(previous.dataset.word)].group === group;

    // The gap to the previous word, where it sits on the same line; across a
    // wrap there is no gap to carry over.
    const gap =
      sameRunBefore && previous.offsetTop === span.offsetTop
        ? span.offsetLeft - (previous.offsetLeft + previous.offsetWidth)
        : 0;

    const start = (widths.get(group) ?? 0) + (sameRunBefore ? gap : 0);

    runs.set(group, [...(runs.get(group) ?? []), { index, offset: start }]);
    widths.set(group, start + span.offsetWidth);
  });

  const backgrounds: Record<number, React.CSSProperties> = {};

  runs.forEach((run, group) => {
    const total = widths.get(group) ?? 0;

    run.forEach(({ index, offset }) => {
      backgrounds[index] = {
        backgroundSize: `${total}px 100%`,
        backgroundPosition: `${-offset}px 0`,
        backgroundRepeat: "no-repeat",
      };
    });
  });

  return { lines, backgrounds, width: host.getBoundingClientRect().width };
};

/**
 * Text whose lines slide up out of their own masks one after another.
 *
 * Where a line breaks depends on the width, so it is measured rather than
 * written in: the words are laid out once, unseen, and those that share a
 * top edge become a line. A change of width lays them out and measures them
 * again, and lines rebuilt after the first play arrive in place rather than
 * playing a second time.
 */
export function LineReveal({
  children,
  delay = 0,
  play,
  trigger = "mount",
  onMeasure,
}: {
  children: React.ReactNode;
  /** Seconds before the first line starts. */
  delay?: number;
  /**
   * Held hidden while false and played once true — for a heading that waits
   * to be scrolled to. Left out, the trigger below decides.
   */
  play?: boolean;
  /**
   * When to play, if play is not given. "mount" plays as soon as the text is
   * measured, which is what a hero on screen from the start wants. "view"
   * waits for the text's own box to scroll into view, for text that is not a
   * SectionHeading — the box is never clipped, so it is seen even though the
   * lines inside it start out of sight below their masks.
   */
  trigger?: "mount" | "view";
  /**
   * Told how many lines the text broke into, the first time it is measured,
   * so whatever follows can start in the slot after the last one.
   */
  onMeasure?: (lineCount: number) => void;
}) {
  const isOn = useContext(IsRevealOn);
  const prefersReducedMotion = useReducedMotion();

  const hostRef = useRef<HTMLSpanElement>(null);

  // Null while the words are being laid out to be measured.
  const [layout, setLayout] = useState<Layout | null>(null);

  // Set once the lines have played, so a remeasure does not play them again.
  const [hasPlayed, setHasPlayed] = useState(false);

  // In a ref so an inline callback does not count as a change, and with a
  // flag so it is only told once: a later remeasure comes after the play.
  const onMeasureRef = useRef(onMeasure);
  const hasReported = useRef(false);

  useEffect(() => {
    onMeasureRef.current = onMeasure;
  }, [onMeasure]);

  const words = toWords(children);

  const isHostInView = useInView(hostRef, VIEWPORT);

  const isPlaying = play ?? (trigger === "view" ? isHostInView : true);

  useLayoutEffect(() => {
    const host = hostRef.current;

    if (layout || !host) return;

    const measured = measure(host, words);

    // Measuring has to happen after layout and before paint, which is what
    // this effect is for; the state it sets is the result of that reading.
    setLayout(measured);

    if (!hasReported.current) {
      hasReported.current = true;
      onMeasureRef.current?.(measured.lines.length);
    }
  }, [layout, words]);

  useEffect(() => {
    if (!layout || hasPlayed || !isPlaying) return;

    // After the last line has had time to land.
    const timer = setTimeout(
      () => setHasPlayed(true),
      (delay + layout.lines.length * LINE_STAGGER + DURATION) * 1000,
    );

    return () => clearTimeout(timer);
  }, [layout, hasPlayed, isPlaying, delay]);

  useEffect(() => {
    // Measured again when the window changes width, which is what moves the
    // line breaks. Not when the text's own box changes size: holding it to
    // its measured width is what keeps that box still, and remeasuring on it
    // would only undo that hold and measure again, over and over.
    let viewportWidth = window.innerWidth;

    const onResize = () => {
      if (window.innerWidth === viewportWidth) return;

      viewportWidth = window.innerWidth;
      setLayout(null);
    };

    window.addEventListener("resize", onResize, { passive: true });

    // And once the webfont has arrived, since words set in the fallback font
    // measure differently and would break the lines in the wrong places.
    // Skipped when it was already loaded, as it usually is, so the first
    // measure is not thrown away for nothing.
    let isMounted = true;

    if (document.fonts && document.fonts.status !== "loaded") {
      document.fonts.ready.then(() => {
        if (isMounted) setLayout(null);
      });
    }

    return () => {
      isMounted = false;
      window.removeEventListener("resize", onResize);
    };
  }, []);

  if (!isOn || prefersReducedMotion) return <>{children}</>;

  const renderWords = (indexes: number[], withBreaks: boolean) =>
    indexes.map((index, position) => {
      const word = words[index];

      // A <br /> only matters while the words are laid out to be measured;
      // once they are, every line is a block of its own.
      if (word.isBreak) return withBreaks ? <br key={index} /> : null;

      return (
        <Fragment key={index}>
          {position > 0 && word.spaceBefore && " "}
          <span data-word={index} className="inline-block">
            {word.make(layout?.backgrounds[index])}
          </span>
        </Fragment>
      );
    });

  return (
    <span
      ref={hostRef}
      className="block"
      style={layout ? { width: layout.width } : undefined}
    >
      {layout ? (
        layout.lines.map((line, index) => (
          <span key={index} className={`block ${LINE_MASK}`}>
            <motion.span
              initial={hasPlayed ? false : { y: MASK_DISTANCE }}
              animate={{ y: isPlaying ? 0 : MASK_DISTANCE }}
              transition={{
                duration: DURATION,
                ease: EASE,
                delay: delay + index * LINE_STAGGER,
              }}
              className="block"
            >
              {renderWords(line, false)}
            </motion.span>
          </span>
        ))
      ) : (
        // Unseen until the first play, but still laid out, since that
        // layout is what gets measured.
        <span className={hasPlayed ? "" : "invisible"}>
          {renderWords(
            words.map((_, index) => index),
            true,
          )}
        </span>
      )}
    </span>
  );
}

type HeadingRevealProps = {
  as: "h1" | "h2" | "h3" | "h4";
  titleId?: string;
  label?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  /** Seconds before the label starts, for a hero that waits on the header. */
  delay?: number;
  /** Told how many lines the title broke into, so the page can place what
   *  follows it — a button, a card — in the slots after its last line. */
  onTitleMeasure?: (lineCount: number) => void;
  /** The same for the subtitle, so what follows can come after it instead. */
  onSubtitleMeasure?: (lineCount: number) => void;
};

/**
 * SectionHeading's reveal, once it scrolls into view: the label rises out of
 * its mask, then the title a line at a time, then the subtitle a line at a
 * time, starting in the slot after the title's last line.
 */
export function HeadingReveal({
  as: Heading,
  titleId,
  label,
  title,
  subtitle,
  className,
  labelClassName,
  titleClassName,
  subtitleClassName,
  delay = 0,
  onTitleMeasure,
  onSubtitleMeasure,
}: HeadingRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, VIEWPORT);

  // How many lines the title broke into. The subtitle waits for it, so it can
  // follow the title's last line rather than a guess at it.
  const [titleLines, setTitleLines] = useState<number | null>(null);

  // In refs so inline callbacks from the page do not count as a change.
  const onTitleMeasureRef = useRef(onTitleMeasure);
  const onSubtitleMeasureRef = useRef(onSubtitleMeasure);

  useEffect(() => {
    onTitleMeasureRef.current = onTitleMeasure;
    onSubtitleMeasureRef.current = onSubtitleMeasure;
  }, [onTitleMeasure, onSubtitleMeasure]);

  const titleDelay = delay + (label ? LINE_STAGGER : 0);

  return (
    <div ref={ref} className={className}>
      {label && (
        <p className={`${labelClassName ?? ""} ${LINE_MASK}`}>
          <MaskReveal play={isInView} delay={delay}>
            {label}
          </MaskReveal>
        </p>
      )}

      <Heading id={titleId} className={titleClassName}>
        <LineReveal
          play={isInView}
          delay={titleDelay}
          onMeasure={(lineCount) => {
            setTitleLines(lineCount);
            onTitleMeasureRef.current?.(lineCount);
          }}
        >
          {title}
        </LineReveal>
      </Heading>

      {subtitle && (
        <p className={subtitleClassName}>
          <LineReveal
            play={isInView && titleLines !== null}
            delay={titleDelay + (titleLines ?? 0) * LINE_STAGGER}
            onMeasure={(lineCount) => onSubtitleMeasureRef.current?.(lineCount)}
          >
            {subtitle}
          </LineReveal>
        </p>
      )}
    </div>
  );
}
