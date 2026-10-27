"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";

export default function ScrollLink({ href, children, ...props }) {
  const lenis = useLenis();

  const handleClick = (event) => {
    if (!href?.startsWith("#") || !lenis) return;

    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();
    lenis.scrollTo(target, { force: true });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
