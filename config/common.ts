import type {
  AboutHighlight,
  ClientLogo,
  HeroBadge,
  HeroPopover,
  TeamMember,
} from "@/types/common";
import { Compass, Users } from "lucide-react";

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
