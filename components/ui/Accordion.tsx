"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";

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
  const prefersReducedMotion = useReducedMotion();
  const baseId = `accordion-${useId().replace(/:/g, "")}`;

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className={className}>
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
                onClick={() => setOpenId(isOpen ? null : id)}
                className={`flex w-full cursor-pointer items-center justify-between text-left ${triggerClassName ?? ""}`}
              >
                {title}

                {/* Rotating the plus 45 degrees turns it into a close cross,
                    so one glyph covers both states. */}
                <span
                  aria-hidden="true"
                  className={`flex shrink-0 items-center justify-center ${indicatorClassName ?? ""}`}
                >
                  <Plus
                    strokeWidth={2}
                    className={`${isOpen ? "rotate-45" : ""} ${iconClassName ?? ""}`}
                  />
                </span>
              </button>
            </Heading>

            <AnimatePresence initial={false}>
              {isOpen && (
                // Unmounted rather than collapsed to zero height: a hidden
                // panel that is still in the DOM keeps its links tabbable.
                <motion.div
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
