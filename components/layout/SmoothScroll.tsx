"use client";

import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

const OPTIONS = {
  autoRaf: true,
  lerp: 0.1,
  smoothWheel: true,
  syncTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
  orientation: "vertical",
  gestureOrientation: "vertical",
  anchors: { offset: -120 },
} as const;

export default function SmoothScroll() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis(OPTIONS);

    return () => lenis.destroy();
  }, [prefersReducedMotion]);

  return null;
}
