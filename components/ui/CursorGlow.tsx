"use client";

import { useMediaQuery, usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const REACH = 1;

const DURATION = 1.2;

const EASE = "power3.out";

type CursorGlowProps = {
  children: React.ReactNode;
  className?: string;
  query?: string | null;
};

export default function CursorGlow({
  children,
  className = "",
  query = null,
}: CursorGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isActive = useMediaQuery(query ?? "all");

  useEffect(() => {
    const node = ref.current;

    if (!node || !isActive || prefersReducedMotion) return;

    const context = gsap.context(() => {
      const followX = gsap.quickTo(node, "x", {
        duration: DURATION,
        ease: EASE,
      });

      const onPointerMove = (event: PointerEvent) => {
        followX((event.clientX - window.innerWidth / 2) * REACH);
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });

      return () => window.removeEventListener("pointermove", onPointerMove);
    }, node);

    return () => context.revert();
  }, [isActive, prefersReducedMotion]);

  return (
    <div ref={ref} aria-hidden="true" className={className}>
      {children}
    </div>
  );
}
