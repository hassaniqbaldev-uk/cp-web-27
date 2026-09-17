"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export type AccordionItem = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  /** Item open on first render. Omit to start with everything closed. */
  defaultOpenId?: string;
  /**
   * Opens the first item the first time the accordion scrolls into view. Skipped
   * if the reader has already opened or closed something themselves.
   */
  openFirstOnView?: boolean;
  /**
   * Heading level for the triggers. Each trigger is wrapped in a heading so
   * screen readers can jump between panels, so this has to sit one level below
   * the surrounding section heading.
   */
  headingLevel?: "h3" | "h4";
  /** All visual styling lives in these — the component sets none of its own. */
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  /** The box around the open/close indicator — border, size, radius. */
  indicatorClassName?: string;
  /** The plus glyph itself. */
  iconClassName?: string;
};

export default function Accordion({
  items,
  defaultOpenId,
  openFirstOnView = false,
  headingLevel: Heading = "h3",
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
  indicatorClassName,
  iconClassName,
}: AccordionProps) {
  // A single id rather than per-item state, so opening one closes the rest.
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const baseId = `accordion-${useId().replace(/:/g, "")}`;

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 1, ease: [0.22, 1, 0.36, 1] as const };

  const firstItemId = items[0]?.id;

  useEffect(() => {
    const node = containerRef.current;

    if (
      !openFirstOnView ||
      !firstItemId ||
      !node ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // Opening under the reader would be disorienting, so a choice they
        // have already made always wins.
        if (!hasInteracted.current) setOpenId(firstItemId);

        observer.disconnect();
      },
      // Waits until the accordion has risen into the upper three quarters of
      // the viewport, rather than firing on the first pixel of its top edge.
      { rootMargin: "0px 0px -50% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [openFirstOnView, firstItemId]);

  return (
    <div ref={containerRef} className={className}>
      {items.map(({ id, title, content }) => {
        const isOpen = openId === id;
        const triggerId = `${baseId}-trigger-${id}`;
        const panelId = `${baseId}-panel-${id}`;

        return (
          <div key={id} className={itemClassName}>
            <Heading>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  hasInteracted.current = true;
                  setOpenId(isOpen ? null : id);
                }}
                // `group` lets anything inside the title react to the open
                // state through `group-aria-expanded:`, with no extra prop.
                className={`group flex w-full cursor-pointer items-center justify-between text-left ${triggerClassName ?? ""}`}
              >
                {title}

                <span
                  aria-hidden="true"
                  className={`flex shrink-0 items-center justify-center ${indicatorClassName ?? ""}`}
                >
                  {isOpen ? (
                    <Minus strokeWidth={2} className={iconClassName} />
                  ) : (
                    <Plus strokeWidth={2} className={iconClassName} />
                  )}
                </span>
              </button>
            </Heading>

            <AnimatePresence initial={false}>
              {isOpen && (
                // Unmounted rather than collapsed to zero height: a hidden
                // panel that is still in the DOM keeps its links tabbable.
                <motion.div
                  // AnimatePresence renders its children as a list, so the
                  // panel needs a key of its own — without one it cannot tell
                  // one panel's exit from another's entrance.
                  key={panelId}
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={transition}
                  className="overflow-hidden"
                >
                  <div className={contentClassName}>{content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
