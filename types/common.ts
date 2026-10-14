import type { LucideIcon } from "lucide-react";

export type HeroPopover = {
  id: string;
  title: string;
  href: string;
  image: string;
  className: string;
  squareClassName: string;
  orientation?: "top" | "bottom" | "left" | "right";
};

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type HeroBadge = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ClientLogo = {
  id: string;
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
  className?: string;
};

export type AboutHighlight = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export type TeamMember = {
  id: string;
  src: string;
  name: string;
  width: number;
  height: number;
};

export type ServiceFeature = {
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  label: string;
  title: string;
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
  icon: LucideIcon;
  title: string;
  categories: string[];
  iconClassName: string;
  dotClassName: string;
  detail: ServiceDetail;
  featured: ServiceFeature;
};

export type ExpertiseCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
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
  logoWidth: number;
  logoHeight: number;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
};

export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
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
  ctaLabel: string;
  href: string;
  category?: string;
};

export type WorkFilter = {
  id: string;
  label: string;
};

export type ConsultationBenefit = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export type Testimonial = {
  id: string;
  avatar: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export type ContactLink = {
  id: string;
  icon: LucideIcon;
  label: string;
  href: string;
};

export type ContactTopic = {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
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
  label: string;
  href: string;
  icon: string;
};

export type FooterNavColumn = {
  id: string;
  title: string;
  links: NavChild[];
};

export type Brand = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
};

export type AboutStat = {
  id: string;
  value: string;
  label: string;
};

export type JourneyStep = {
  id: string;
  step: string;
  title: string;
  description: string;
  borderClassName: string;
  textClassName: string;
};

export type TeamProfile = {
  id: string;
  image: string;
  name: string;
  role: string;
  years: string;
  description: string;
};

export type TeamHandoff = {
  id: string;
  image: string;
  name: string;
  text: string;
};

export type Behaviour = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  hoverClassName: string;
};

export type ReachLocation = {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  clients: string;
  className: string;
};

export type WorkflowDetail = {
  id: string;
  title: string;
  subtitle: string;
};

export type WorkflowStep = {
  id: string;
  step: string;
  title: string;
  details: WorkflowDetail[];
};

export type ProcessCardDetail = {
  id: string;
  icon: LucideIcon;
  iconClassName: string;
  title: string;
  subtitle: string;
};

export type ProcessCard = {
  id: string;
  step: string;
  title: string;
  description: string;
  details: ProcessCardDetail[];
  image: string;
  imageAlt: string;
};

export type AgencyWorkflowIcon = {
  id: string;
  src: string;
  width: number;
  height: number;
};

export type AgencyWorkflowCard = {
  id: string;
  icons: AgencyWorkflowIcon[];
  showPlus?: boolean;
  title: string;
  subtitle: string;
};

export type CostComparisonRow = {
  id: string;
  label: string;
  value: string;
};

export type CostComparisonColumn = {
  id: string;
  title: string;
  rows: CostComparisonRow[];
  totalLabel: string;
  totalValue: string;
  isFeatured?: boolean;
};

export type HandoverCard = {
  id: string;
  icon: LucideIcon;
  iconClassName: string;
  title: string;
  subtitle: string;
};

export type PartnerFitCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  points: string[];
  note?: string;
  isPositive?: boolean;
};

export type ReviewPoint = {
  id: string;
  title: string;
  subtitle: string;
  swatchClassName: string;
};

export type ReviewStep = {
  id: string;
  step: string;
  text: string;
};

export type WorkCaseStudy = {
  id: string;
  image: string;
  imageAlt: string;
  tags: string[];
  title: string;
  description: string;
  role: string;
  platform: string;
  href: string;
  panelClassName: string;
  imagePanelClassName: string;
};
