"use client";

import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const MAGNET_STRENGTH = 0.3;

const MAGNET_DURATION = 0.45;

const MAGNET_EASE = "power3.out";

type Follow = ReturnType<typeof gsap.quickTo>;

type CircularTextButtonProps = {
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  srLabel: string;
  children: React.ReactNode;
  className?: string;
  ringClassName?: string;
};

export default function CircularTextButton({
  href,
  image,
  imageWidth,
  imageHeight,
  srLabel,
  children,
  className = "",
  ringClassName = "",
}: CircularTextButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const followX = useRef<Follow | null>(null);
  const followY = useRef<Follow | null>(null);

  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;

    if (!node || prefersReducedMotion) return;

    const context = gsap.context(() => {
      const options = { duration: MAGNET_DURATION, ease: MAGNET_EASE };

      followX.current = gsap.quickTo(node, "x", options);
      followY.current = gsap.quickTo(node, "y", options);
    }, node);

    return () => {
      followX.current = null;
      followY.current = null;
      context.revert();
    };
  }, [prefersReducedMotion]);

  const onMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;

    if (!node || !followX.current || !followY.current) return;

    const { left, top, width, height } = node.getBoundingClientRect();

    followX.current((event.clientX - (left + width / 2)) * MAGNET_STRENGTH);
    followY.current((event.clientY - (top + height / 2)) * MAGNET_STRENGTH);
  };

  const onMouseLeave = () => {
    followX.current?.(0);
    followY.current?.(0);
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`group relative flex items-center justify-center ${className}`}
    >
      <span className="sr-only">{srLabel}</span>

      <Image
        src={image}
        alt=""
        aria-hidden="true"
        width={imageWidth}
        height={imageHeight}
        draggable={false}
        className={`animate-spin-slow group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused] motion-reduce:animate-none ${ringClassName}`}
      />

      <span aria-hidden="true" className="absolute">
        {children}
      </span>
    </Link>
  );
}
