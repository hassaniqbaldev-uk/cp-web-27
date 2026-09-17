import type { LucideIcon } from "lucide-react";

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
  /** Where the logo links to — a case study, or the client's own site. */
  href: string;
  /** Intrinsic size of the asset — next/image needs it to reserve space. */
  width: number;
  height: number;
};

export type AboutHighlight = {
  id: string;
  /** Lucide icon component, e.g. `Compass`. */
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export type TeamMember = {
  id: string;
  src: string;
  /** The person's name — used as the image's accessible text. */
  name: string;
  /** Intrinsic size of the asset — next/image needs it to reserve space. */
  width: number;
  height: number;
};

export type ServiceFeature = {
  image: string;
  imageAlt: string;
  /** Intrinsic size of the asset — next/image needs it to reserve space. */
  width: number;
  height: number;
  label: string;
  title: string;
  /** Only the first two are shown, joined by a dot. */
  categories: string[];
  href: string;
};

export type ServiceDetailHighlight = {
  id: string;
  icon: LucideIcon;
  text: string;
};

export type ServicePrice = {
  id: string;
  label: string;
  price: string;
};

export type ServiceDetail = {
  highlights: ServiceDetailHighlight[];
  title: string;
  subtitle: string;
  features: string[];
  pricing: ServicePrice[];
  cta: { label: string; href: string };
};

export type ServiceDiscipline = {
  id: string;
  /** Lucide icon component, e.g. `Palette`. */
  icon: LucideIcon;
  title: string;
  /** Short tags shown beside the title, joined by dots in the UI. */
  categories: string[];
  /**
   * Accent for this discipline. Keep these as complete, literal class strings —
   * Tailwind scans source files for full class names, so anything built by
   * concatenation will not be generated.
   */
  iconClassName: string;
  dotClassName: string;
  description: string;
  /** Everything in the left column of the open panel. */
  detail: ServiceDetail;
  /** The highlighted piece of work shown beside this discipline. */
  featured: ServiceFeature;
};

export type ExpertiseCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  /**
   * Background and glow applied on hover. Keep these as complete, literal class
   * strings — Tailwind scans source files for full class names, so anything
   * built by concatenation will not be generated.
   */
  hoverClassName: string;
};
