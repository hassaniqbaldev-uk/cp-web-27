import type { FooterNavColumn, NavItem } from "@/types/common";

export const mainNavigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    // TODO: replace with the real service list.
    children: [
      { label: "Branding", href: "/services/branding" },
      { label: "Web Design", href: "/services/web-design" },
      { label: "Development", href: "/services/development" },
      { label: "SEO", href: "/services/seo" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    // TODO: replace with the real solution list. The /solutions route does not
    // exist yet, so these links 404 until it is built.
    children: [
      { label: "Solution One", href: "/solutions/solution-one" },
      { label: "Solution Two", href: "/solutions/solution-two" },
      { label: "Solution Three", href: "/solutions/solution-three" },
    ],
  },
  {
    label: "Work",
    href: "/case-studies",
  },
  {
    label: "Industries",
    href: "/blog",
  },
  {
    label: "Blog",
    href: "/taha",
  },
  {
    label: "About",
    href: "/contact",
  },
];

// TODO: replace with the real number.
export const contactPhone = {
  label: "+1 (555) 000-0000",
  href: "tel:+15550000000",
};

// TODO: /solutions and /sitemap do not exist yet, so those links 404 until
// the routes are built.
export const footerNavigation: FooterNavColumn[] = [
  {
    id: "quick-links",
    title: "Quick links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    id: "services",
    title: "Services",
    links: [
      { label: "Web & Ecommerce", href: "/services/web-ecommerce" },
      { label: "Brand & Experience", href: "/services/brand-experience" },
      { label: "Growth & Performance", href: "/services/growth-performance" },
      { label: "AI & Automation", href: "/services/ai-automation" },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { label: "Legal Hub", href: "/legal" },
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Cookies Policy", href: "/legal/cookies-policy" },
    ],
  },
  {
    id: "solution",
    title: "Solution",
    links: [
      { label: "By Sector", href: "/solutions/by-sector" },
      { label: "By Goal", href: "/solutions/by-goal" },
    ],
  },
];
