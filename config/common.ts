import type {
  AboutHighlight,
  ClientLogo,
  ExpertiseCard,
  HeroBadge,
  HeroPopover,
  ServiceDiscipline,
  TeamMember,
} from "@/types/common";
import {
  Building2,
  Clock,
  Code2,
  Compass,
  LayoutDashboard,
  Palette,
  Rocket,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";

export const heroPopovers: HeroPopover[] = [
  {
    id: "branding",
    title: "Branding",
    href: "/services",
    image: "/images/home/popover.jpg",
    className: "left-[15rem] top-[5rem]",
    squareClassName: "bg-[#FFE400]",
  },
  {
    id: "web-design",
    title: "Web Design",
    href: "/services",
    image: "/images/home/popover.jpg",
    className: "right-[15rem] top-[4rem]",
    squareClassName: "bg-dark-pink",
  },
  {
    id: "casa-botanica",
    title: "Casa Botanica ",
    href: "/case-studies",
    image: "/images/home/casa-popover-img.png",
    className: "right-[7rem] bottom-[29rem]",
    squareClassName: "bg-dark-pink",
  },
  {
    id: "about",
    title: "About Us",
    href: "/about",
    image: "/images/home/popover.jpg",
    className: "left-[7rem] bottom-[29rem]",
    squareClassName: "bg-orange",
  },
];

// TODO: drop the real assets into /public/images/home/ and correct the
// intrinsic width/height to match each file.
export const heroBadges: HeroBadge[] = [
  {
    id: "clutch",
    src: "/images/home/clutch-logo.png",
    alt: "Clutch reviews",
    width: 110,
    height: 30,
  },
  {
    id: "wordpress-partner",
    src: "/images/home/wp-partner-logo.png",
    alt: "WordPress partner",
    width: 95,
    height: 35,
  },
  {
    id: "shopify-partner",
    src: "/images/home/shopify-partner-logo.png",
    alt: "Shopify partner",
    width: 83,
    height: 30,
  },
];

// TODO: replace with the real client logos and correct each intrinsic
// width/height to match the file.
// TODO: point each href at the real case study or client site.
export const clientLogos: ClientLogo[] = [
  {
    id: "client-one",
    src: "/images/home/casa-logo.png",
    alt: "Casabotanica Client",
    href: "/case-studies/casabotanica",
    width: 124,
    height: 71,
  },
  {
    id: "client-two",
    src: "/images/home/ivy-duke-logo.png",
    alt: "Ivy & Duke Client",
    href: "/case-studies/ivy-duke",
    width: 125,
    height: 60,
  },
  {
    id: "client-three",
    src: "/images/home/new-compass-logo.png",
    alt: "New Compass Client",
    href: "/case-studies/new-compass",
    width: 181,
    height: 32,
  },
  {
    id: "client-four",
    src: "/images/home/fultons-logo.png",
    alt: "Fultons Client",
    href: "/case-studies/fultons",
    width: 107,
    height: 26,
  },
  {
    id: "client-five",
    src: "/images/home/game-art-logo.png",
    alt: "Game Art Brain Client",
    href: "/case-studies/game-art-brain",
    width: 92,
    height: 44,
  },
  {
    id: "client-six",
    src: "/images/home/ayoa-logo.png",
    alt: "Ayoa Client",
    href: "/case-studies/ayoa",
    width: 129,
    height: 40,
  },
  {
    id: "client-seven",
    src: "/images/home/peter-jones-logo.png",
    alt: "Peter Jones Foundation Client",
    href: "/case-studies/peter-jones-foundation",
    width: 139,
    height: 43,
  },
];

// TODO: replace with the real copy, and swap the icons for the intended ones.
export const aboutHighlights: AboutHighlight[] = [
  {
    id: "years-experience",
    icon: Compass,
    title: "12 Years",
    subtitle: "Building digital  experiences",
  },
  {
    id: "team-experience",
    icon: Users,
    title: "120 Years",
    subtitle: "Combined team experience",
  },
];

// TODO: replace with the real quote.
export const aboutQuote =
  "I started CreativePixels at 13 to make a difference; that same drive still runs through the team today - creating work that’s, thoughtful and well designed.";

// TODO: replace with the real team photos, names and intrinsic dimensions.
export const teamMembers: TeamMember[] = [
  {
    id: "team-one",
    src: "/images/home/team-one.jpg",
    name: "Team Member One",
    width: 130,
    height: 130,
  },
  {
    id: "team-two",
    src: "/images/home/team-two.jpg",
    name: "Team Member Two",
    width: 130,
    height: 130,
  },
  {
    id: "team-three",
    src: "/images/home/team-three.jpg",
    name: "Team Member Three",
    width: 130,
    height: 130,
  },
  {
    id: "team-four",
    src: "/images/home/team-four.jpg",
    name: "Team Member Four",
    width: 130,
    height: 130,
  },
  {
    id: "team-five",
    src: "/images/home/team-five.jpg",
    name: "Team Member Five",
    width: 130,
    height: 130,
  },
  {
    id: "team-six",
    src: "/images/home/team-six.jpg",
    name: "Team Member Six",
    width: 130,
    height: 130,
  },

  {
    id: "team-seven",
    src: "/images/home/team-seven.jpg",
    name: "Team Member Seven",
    width: 130,
    height: 130,
  },
];

// TODO: replace with the real four disciplines and their descriptions.
export const serviceDisciplines: ServiceDiscipline[] = [
  {
    id: "web-ecommerce",
    icon: Palette,
    title: "Web & Ecommerce",
    categories: ["Branding", "UI/UX Design", "Digital Identity"],
    iconClassName: "text-orange",
    dotClassName: "bg-orange",
    description:
      "Placeholder copy. Replace with the real description for this discipline.",
    detail: {
      highlights: [
        {
          id: "web-ecommerce-timeline",
          icon: Clock,
          text: "Staged payments available",
        },
        {
          id: "web-ecommerce-team",
          icon: Users,
          text: "3-month warranty on applicable builds",
        },
      ],
      title: "Websites, stores and apps built to perform.",
      subtitle:
        "From focused business websites to ecommerce platforms and bespoke applications, we design and build around your customers, goals and systems 0 not a favourite template or technology.",
      features: [
        "Webdesign & Development",
        "Wordpress",
        "Custom App Development",
        "Shopify",
        "Ecommerce",
      ],
      pricing: [
        { id: "web-ecommerce-starter", label: "Web from", price: "£1,500" },
        {
          id: "web-ecommerce-growth",
          label: "Ecommerce from",
          price: "£3,500",
        },
        { id: "web-ecommerce-scale", label: "Apps from", price: "£5,000" },
      ],
      cta: { label: "explore web & ecommerce", href: "/contact" },
    },
    featured: {
      image: "/images/home/web-ecommerce.jpg",
      imageAlt: "Web & Ecommerce project",
      width: 440,
      height: 536,
      label: "Featured project",
      title: "Casa botanica Panama",
      categories: ["Web Design", "Prototyping"],
      href: "/case-studies/web-design-project",
    },
  },
  {
    id: "web-design",
    icon: LayoutDashboard,
    title: "Web Design",
    categories: ["Web Design", "Prototyping", "Design Systems"],
    iconClassName: "text-dark-pink",
    dotClassName: "bg-dark-pink",
    description:
      "Placeholder copy. Replace with the real description for this discipline.",
    detail: {
      highlights: [
        { id: "web-design-timeline", icon: Clock, text: "6-10 week delivery" },
        { id: "web-design-team", icon: Users, text: "Senior team throughout" },
      ],
      title: "Placeholder detail title for this discipline.",
      subtitle:
        "Placeholder copy. Replace with the real supporting paragraph for this discipline.",
      features: [
        "Placeholder feature one",
        "Placeholder feature two",
        "Placeholder feature three",
        "Placeholder feature four",
        "Placeholder feature five",
      ],
      pricing: [
        { id: "web-design-starter", label: "Starter", price: "From £0,000" },
        { id: "web-design-growth", label: "Growth", price: "From £0,000" },
        { id: "web-design-scale", label: "Scale", price: "From £0,000" },
      ],
      cta: { label: "Talk about your project", href: "/contact" },
    },
    featured: {
      image: "/images/home/services/web-design.jpg",
      imageAlt: "Web Design project",
      width: 704,
      height: 560,
      label: "Featured work",
      title: "Web Design Project",
      categories: ["Web Design", "Prototyping"],
      href: "/case-studies/web-design-project",
    },
  },
  {
    id: "development",
    icon: Code2,
    title: "Development",
    categories: ["Web Development", "Ecommerce", "Integrations"],
    iconClassName: "text-blue",
    dotClassName: "bg-blue",
    description:
      "Placeholder copy. Replace with the real description for this discipline.",
    detail: {
      highlights: [
        { id: "development-timeline", icon: Clock, text: "6-10 week delivery" },
        { id: "development-team", icon: Users, text: "Senior team throughout" },
      ],
      title: "Placeholder detail title for this discipline.",
      subtitle:
        "Placeholder copy. Replace with the real supporting paragraph for this discipline.",
      features: [
        "Placeholder feature one",
        "Placeholder feature two",
        "Placeholder feature three",
        "Placeholder feature four",
        "Placeholder feature five",
      ],
      pricing: [
        { id: "development-starter", label: "Starter", price: "From £0,000" },
        { id: "development-growth", label: "Growth", price: "From £0,000" },
        { id: "development-scale", label: "Scale", price: "From £0,000" },
      ],
      cta: { label: "Talk about your project", href: "/contact" },
    },
    featured: {
      image: "/images/home/services/development.jpg",
      imageAlt: "Development project",
      width: 704,
      height: 560,
      label: "Featured work",
      title: "Development Project",
      categories: ["Web Development", "Ecommerce"],
      href: "/case-studies/development-project",
    },
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "SEO",
    categories: ["Technical SEO", "Content", "Analytics"],
    iconClassName: "text-[#FFE400]",
    dotClassName: "bg-[#FFE400]",
    description:
      "Placeholder copy. Replace with the real description for this discipline.",
    detail: {
      highlights: [
        { id: "seo-timeline", icon: Clock, text: "6-10 week delivery" },
        { id: "seo-team", icon: Users, text: "Senior team throughout" },
      ],
      title: "Placeholder detail title for this discipline.",
      subtitle:
        "Placeholder copy. Replace with the real supporting paragraph for this discipline.",
      features: [
        "Placeholder feature one",
        "Placeholder feature two",
        "Placeholder feature three",
        "Placeholder feature four",
        "Placeholder feature five",
      ],
      pricing: [
        { id: "seo-starter", label: "Starter", price: "From £0,000" },
        { id: "seo-growth", label: "Growth", price: "From £0,000" },
        { id: "seo-scale", label: "Scale", price: "From £0,000" },
      ],
      cta: { label: "Talk about your project", href: "/contact" },
    },
    featured: {
      image: "/images/home/services/seo.jpg",
      imageAlt: "SEO project",
      width: 704,
      height: 560,
      label: "Featured work",
      title: "SEO Project",
      categories: ["Technical SEO", "Content"],
      href: "/case-studies/seo-project",
    },
  },
];

// TODO: replace with the real expertise cards, and swap the icons for the
// intended ones.
export const expertiseCards: ExpertiseCard[] = [
  {
    id: "startups",
    icon: Rocket,
    title: "SME Founders",
    description:
      "Grow your business with a website that converts visitors into loyal customers.",
    hoverClassName:
      "hover:bg-orange hover:shadow-[0px_4px_114px_0px_#EC9122B2]",
  },
  {
    id: "scale-ups",
    icon: TrendingUp,
    title: "Ecommerce brands",
    description:
      "Scale sales with high-performance online stores built on Shopify or Woo.",
    hoverClassName:
      "hover:bg-dark-pink hover:shadow-[0px_4px_114px_0px_#EC3593B2]",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "Non-profit & Charity",
    description:
      "Connect with your community through accessible, impactful digital experiences.",
    hoverClassName: "hover:bg-blue hover:shadow-[0px_4px_114px_0px_#3078FFB2]",
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "B2B Services",
    description:
      "Generate qualified leads and build trust with a strategic web presence.",
    hoverClassName:
      "hover:bg-[#FFE400] hover:shadow-[0px_4px_114px_0px_#FFE400B2]",
  },
];
