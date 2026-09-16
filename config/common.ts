import type { HeroBadge, HeroPopover } from "@/types/common";

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
