export type HeroPopover = {
  id: string;
  title: string;
  href: string;
  image: string;
  /**
   * Tailwind position utilities for this popover, e.g. "right-[7rem] bottom-[9rem]".
   * Keep these as complete, literal class strings — Tailwind scans source files for
   * full class names, so anything built by concatenation will not be generated.
   */
  className: string;
  /**
   * Background utility for the square trigger, e.g. "bg-dark-pink". Same rule as
   * `className` — keep it a complete, literal class string.
   */
  squareClassName: string;
};

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  /** Present only on items that open a dropdown. */
  children?: NavChild[];
};

export type HeroBadge = {
  id: string;
  src: string;
  alt: string;
  /** Intrinsic size of the asset — next/image needs it to reserve space. */
  width: number;
  height: number;
};

export type ClientLogo = {
  id: string;
  src: string;
  alt: string;
  /** Intrinsic size of the asset — next/image needs it to reserve space. */
  width: number;
  height: number;
};
