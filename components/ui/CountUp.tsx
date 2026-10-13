"use client";

import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const DURATION = 1.6;

const EASE = "power3.out";

const parse = (value: string) => {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);

  if (!match) return null;

  const [, prefix, digits, suffix] = match;

  return {
    prefix,
    suffix,
    target: Number(digits),
    width: digits.startsWith("0") ? digits.length : 0,
  };
};

type CountUpProps = {
  value: string;
  duration?: number;
  delay?: number;
};

export default function CountUp({
  value,
  duration = DURATION,
  delay = 0,
}: CountUpProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const parts = parse(value);

  const format = (current: number) =>
    parts
      ? `${parts.prefix}${String(Math.round(current)).padStart(parts.width, "0")}${parts.suffix}`
      : value;

  useEffect(() => {
    const node = countRef.current;

    if (!node || !parts) return;

    if (prefersReducedMotion) {
      node.textContent = value;
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      node.textContent = value;
      return;
    }

    const counter = { current: 0 };
    let tween: gsap.core.Tween | null = null;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      observer.disconnect();

      tween = gsap.to(counter, {
        current: parts.target,
        duration,
        delay,
        ease: EASE,
        onUpdate() {
          node.textContent = format(counter.current);
        },
      });
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
      tween?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration, delay, prefersReducedMotion]);

  if (!parts) return <>{value}</>;

  return (
    <>
      <span className="sr-only">{value}</span>

      <span aria-hidden="true" className="relative inline-block">
        <span className="invisible">{value}</span>

        <span ref={countRef} className="absolute top-0 left-0">
          {format(0)}
        </span>
      </span>
    </>
  );
}
