import type { NavItem } from "@/types/common";

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
