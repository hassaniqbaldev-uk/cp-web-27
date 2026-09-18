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

export type Guarantee = {
  id: string;
  title: string;
  description: string;
};

export type GuaranteeCaseStudy = {
  image: string;
  imageAlt: string;
  logo: string;
  logoAlt: string;
  /** Intrinsic size of the logo — next/image needs it to reserve space. */
  logoWidth: number;
  logoHeight: number;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
};

export type ProcessStep = {
  id: string;
  /** Display number, e.g. "01". */
  step: string;
  title: string;
  description: string;
  /**
   * Colour of this step's dot and line fill, its card border and its title.
   * Three fields rather than one name because Tailwind scans source files for
   * complete class names, so a concatenated `border-` plus a colour name would
   * never be generated.
   */
  accentClassName: string;
  borderClassName: string;
  textClassName: string;
};

export type WorkProject = {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  /** Label on the card's link, e.g. "Visit live site". */
  ctaLabel: string;
  /** The live site, so these open in a new tab. */
  href: string;
};

export type ConsultationBenefit = {
  id: string;
  /** Lucide icon component, e.g. `Clock`. */
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export type Testimonial = {
  id: string;
  avatar: string;
  logo: string;
  /** The client's company — the logo's accessible text. */
  logoAlt: string;
  /** Intrinsic size of the logo — next/image needs it to reserve space. */
  logoWidth: number;
  logoHeight: number;
  quote: string;
  name: string;
  /** Role and company, e.g. "Loop, Founder". */
  role: string;
  /** Out of five, e.g. 5 — drives both the stars and the printed figure. */
  rating: number;
};

export type ContactLink = {
  id: string;
  /** Lucide icon component, e.g. `Mail`. */
  icon: LucideIcon;
  label: string;
  /** A mailto:, tel: or page link. */
  href: string;
};

export type ContactTopic = {
  id: string;
  /** Lucide icon component, e.g. `Monitor`. */
  icon: LucideIcon;
  label: string;
  /** Submitted value for this choice. */
  value: string;
  /**
   * Accent for this card — the icon colour, and the border and tint it takes
   * once chosen. Two fields rather than one name because Tailwind scans source
   * files for complete class names, so a concatenated colour would never be
   * generated.
   */
  iconClassName: string;
  selectedClassName: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export type SocialLink = {
  id: string;
  /** Platform name, used as the link's accessible name. */
  label: string;
  href: string;
  /**
   * Path to the icon file. Painted as a CSS mask rather than an <img>, because
   * the assets have their fill baked in and a mask takes its colour from the
   * element, so the icon can invert on hover.
   */
  icon: string;
};

export type FooterNavColumn = {
  id: string;
  /** Column heading, e.g. "Quick links". */
  title: string;
  links: NavChild[];
};

export type Brand = {
  id: string;
  src: string;
  alt: string;
  /** Intrinsic size of the asset — next/image needs it to reserve space. */
  width: number;
  height: number;
  href: string;
};
