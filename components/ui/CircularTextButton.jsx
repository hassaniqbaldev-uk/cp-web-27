"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const MAGNET_STRENGTH = 0.3;

const MAGNET_DURATION = 0.45;

const MAGNET_EASE = "power3.out";

export default function CircularTextButton({
  href,
  image,
  imageWidth,
  imageHeight,
  children,
  className = "",
  ringClassName = "",
}) {
  const ref = useRef(null);
  const followX = useRef(null);
  const followY = useRef(null);

  useGSAP(
    () => {
      const node = ref.current;

      const options = { duration: MAGNET_DURATION, ease: MAGNET_EASE };

      followX.current = gsap.quickTo(node, "x", options);
      followY.current = gsap.quickTo(node, "y", options);

      return () => {
        followX.current = null;
        followY.current = null;
      };
    },
    { scope: ref },
  );

  const onMouseMove = (event) => {
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
      <Image
        src={image}
        alt=""
        width={imageWidth}
        height={imageHeight}
        draggable={false}
        className={`animate-spin-slow group-hover:[animation-play-state:paused] ${ringClassName}`}
      />

      <span className="absolute">{children}</span>
    </Link>
  );
}
