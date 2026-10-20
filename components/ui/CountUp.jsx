"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const DURATION = 1.6;

const EASE = "power3.out";

const parse = (value) => {
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

export default function CountUp({ value, duration = DURATION, delay = 0 }) {
  const countRef = useRef(null);

  const parts = parse(value);

  const format = (current) =>
    parts
      ? `${parts.prefix}${String(Math.round(current)).padStart(parts.width, "0")}${parts.suffix}`
      : value;

  useGSAP(
    (context, contextSafe) => {
      const node = countRef.current;

      if (!node || !parts) return;

      if (typeof IntersectionObserver === "undefined") {
        node.textContent = value;
        return;
      }

      const counter = { current: 0 };

      const count = contextSafe(() => {
        gsap.to(counter, {
          current: parts.target,
          duration,
          delay,
          ease: EASE,
          onUpdate() {
            node.textContent = format(counter.current);
          },
        });
      });

      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        count();
      });

      observer.observe(node);

      return () => observer.disconnect();
    },
    {
      dependencies: [value, duration, delay],
      scope: countRef,
      revertOnUpdate: true,
    },
  );

  if (!parts) return <>{value}</>;

  return (
    <>
      <span className="relative inline-block">
        <span className="invisible">{value}</span>

        <span ref={countRef} className="absolute top-0 left-0">
          {format(0)}
        </span>
      </span>
    </>
  );
}
