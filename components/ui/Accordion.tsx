"use client";

import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import gsap from "gsap";
import { Minus, Plus } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

const DURATION = 0.55;

const EASE = "power3.inOut";

export type AccordionItem = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
  openFirstOnView?: boolean;
  headingLevel?: "h3" | "h4";
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  indicatorClassName?: string;
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
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  const containerRef = useRef<HTMLDivElement>(null);
  const panels = useRef(new Map<string, HTMLDivElement | null>());
  const hasInteracted = useRef(false);
  const isFirstPass = useRef(true);

  const prefersReducedMotion = usePrefersReducedMotion();
  const baseId = `accordion-${useId().replace(/:/g, "")}`;

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

        if (!hasInteracted.current) setOpenId(firstItemId);

        observer.disconnect();
      },
      { rootMargin: "0px 0px -50% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [openFirstOnView, firstItemId]);

  useEffect(() => {
    const duration = isFirstPass.current || prefersReducedMotion ? 0 : DURATION;

    isFirstPass.current = false;

    panels.current.forEach((panel, id) => {
      if (!panel) return;

      const isOpen = id === openId;

      gsap.to(panel, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration,
        ease: EASE,
        overwrite: true,
      });
    });
  }, [openId, prefersReducedMotion]);

  useEffect(() => {
    const current = panels.current;

    return () => {
      current.forEach((panel) => {
        if (panel) gsap.killTweensOf(panel);
      });
    };
  }, []);

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

            <div
              ref={(node) => {
                panels.current.set(id, node);
              }}
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              inert={!isOpen}
              className={`overflow-hidden ${isOpen ? "" : "h-0 opacity-0"}`}
            >
              <div className={contentClassName}>{content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
