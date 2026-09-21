import type {
  AboutHighlight,
  AboutStat,
  Brand,
  ClientLogo,
  ConsultationBenefit,
  ContactLink,
  ContactTopic,
  ExpertiseCard,
  Faq,
  Guarantee,
  GuaranteeCaseStudy,
  HeroBadge,
  HeroPopover,
  JourneyStep,
  ProcessStep,
  ServiceDiscipline,
  SocialLink,
  TeamMember,
  Testimonial,
  WorkProject,
} from "@/types/common";
import {
  Ban,
  Building2,
  CalendarClock,
  CalendarDays,
  CircleArrowUp,
  Clock,
  Code2,
  Compass,
  LayoutDashboard,
  Mail,
  Monitor,
  MessageSquare,
  Palette,
  Phone,
  Rocket,
  ShoppingBag,
  TrendingUp,
  UserRoundCheck,
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
    id: "web-desig",
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
    id: "sme-founders",
    icon: Rocket,
    title: "SME Founders",
    description:
      "Grow your business with a website that converts visitors into loyal customers.",
    hoverClassName: "hover:bg-orange",
  },
  {
    id: "ecommerce-brands",
    icon: TrendingUp,
    title: "Ecommerce brands",
    description:
      "Scale sales with high-performance online stores built on Shopify or Woo.",
    hoverClassName: "hover:bg-dark-pink",
  },
  {
    id: "non-profit-charity",
    icon: ShoppingBag,
    title: "Non-profit & Charity",
    description:
      "Connect with your community through accessible, impactful digital experiences.",
    hoverClassName: "hover:bg-blue",
  },
  {
    id: "b2b-services",
    icon: Building2,
    title: "B2B Services",
    description:
      "Generate qualified leads and build trust with a strategic web presence.",
    hoverClassName: "hover:bg-[#FFE400] ",
  },
  {
    id: "agencies",
    icon: Building2,
    title: "Agencies",
    description:
      "White-label development and design fulfillment you can trust.",
    hoverClassName: "hover:bg-dark-pink",
  },
  {
    id: "startups-saas",
    icon: Building2,
    title: "Startups & SaaS",
    description:
      "Modern tech stacks (React, Headless) for rapid growth and scalability.",
    hoverClassName: "hover:bg-blue",
  },
];

// TODO: confirm the final wording for each guarantee.
export const guarantees: Guarantee[] = [
  {
    id: "fixed-scope",
    title: "Fixed scope and price before we start",
    description:
      "No open-ended hourly billing. If the scope changes, we test you first.",
  },
  {
    id: "post-launch-support",
    title: "3 months post-launch support",
    description: "We stay around to make sure everything runs smoothly.",
  },
  {
    id: "ownership",
    title: "You own the code, files and accounts",
    description: "No lock-ins. It's all yours, always.",
  },
];

// TODO: point href at the real case study.
export const guaranteeCaseStudy: GuaranteeCaseStudy = {
  image: "/images/home/unicef-thumbnail-img.jpg",
  imageAlt: "Unicef fundraising campaign",
  // TODO: add the logo asset and correct its intrinsic dimensions.
  logo: "/images/home/unicef-logo.png",
  logoAlt: "Unicef",
  logoWidth: 123,
  logoHeight: 29,
  title: "£478k",
  subtitle: "raised at one event",
  ctaLabel: "View case study",
  href: "/case-studies/unicef",
};

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your business goals, audience, and competitors to build a solid strategy.",
    accentClassName: "bg-orange",
    borderClassName: "border-orange",
    textClassName: "text-orange",
  },
  {
    id: "design",
    step: "02",
    title: "Design",
    description:
      "We create high-fidelity prototypes and visual systems that align with your brand identity.",
    accentClassName: "bg-blue",
    borderClassName: "border-blue",
    textClassName: "text-blue",
  },
  {
    id: "develop",
    step: "03",
    title: "Develop",
    description:
      "Our engineers build pixel-perfect, clean code that is fast, secure, and scalable.",
    accentClassName: "bg-dark-pink",
    borderClassName: "border-dark-pink",
    textClassName: "text-dark-pink",
  },
  {
    id: "launch-grow",
    step: "04",
    title: "Launch & Grow",
    description:
      "We deploy your site and provide ongoing support, SEO, and optimisation to ensure growth.",
    accentClassName: "bg-[#6FDC8C]",
    borderClassName: "border-[#6FDC8C]",
    textClassName: "text-[#6FDC8C]",
  },
];

// TODO: write the real alt
// text and point each href at the live site.
export const workProjects: WorkProject[] = [
  {
    id: "casa-botanica",
    image: "/images/home/casa-work-img.jpg",
    imageAlt: "Casa Botanica website homepage",
    title: "Casa Botanica",
    subtitle: "Luxury safari website redesigned.",
    ctaLabel: "Visit live site",
    href: "https://example.com",
  },
  {
    id: "ivy-and-duke",
    image: "/images/home/ivy-work-img.jpg",
    imageAlt: "Ivy & Duke website homepage",
    title: "Ivy & Duke",
    subtitle: "Luxury safari website redesigned.",
    ctaLabel: "Visit live site",
    href: "https://example.com",
  },
  {
    id: "ndifo-safari",
    image: "/images/home/ndifo-work-img.jpg",
    imageAlt: "Ndifo Safari website homepage",
    title: "Ndifo Safari",
    subtitle: "Luxury safari website redesigned.",
    ctaLabel: "Visit live site",
    href: "https://example.com",
  },
  {
    id: "fultons-jewellery",
    image: "/images/home/fultons-work-img.jpg",
    imageAlt: "Fultons Jewellery website homepage",
    title: "Fultons Jewellery",
    subtitle: "Luxury safari website redesigned.",
    ctaLabel: "Visit live site",
    href: "https://example.com",
  },
];

export const consultationBenefits: ConsultationBenefit[] = [
  {
    id: "duration",
    icon: Clock,
    title: "15 minutes",
    subtitle: "No obligation",
  },
  {
    id: "availability",
    icon: CalendarDays,
    title: "Same week",
    subtitle: "Available slots",
  },
  {
    id: "advice",
    icon: UserRoundCheck,
    title: "Expert advice",
    subtitle: "Tailored to you",
  },
  {
    id: "scope",
    icon: MessageSquare,
    title: "Ask anything",
    subtitle: "Design & brand",
  },
];

// TODO: confirm the third client's avatar and logo — Alert Force has neither
// in the assets yet, so it is borrowing Loop's.
export const testimonials: Testimonial[] = [
  {
    id: "loop",
    avatar: "/images/home/loop-client-avatar.png",
    logo: "/images/home/loop-client-logo.png",
    logoAlt: "Loop",
    logoWidth: 47,
    logoHeight: 23,
    quote:
      "CreativePixels did an incredible job helping us to create branding material from scratch. They were extremely flexible, and exceeded our expectations.",
    name: "Alex",
    role: "Loop, Founder",
    rating: 5,
  },
  {
    id: "ayoa",
    avatar: "/images/home/ayoa-client-avatar.png",
    logo: "/images/home/ayoa-client-logo.png",
    logoAlt: "Ayoa",
    logoWidth: 68,
    logoHeight: 20,
    quote:
      "I would highly recommend CreativePixels, they were excellent throughout the process of designing and developing our new website.",
    name: "James Brian",
    role: "Ayoa, Founder",
    rating: 5,
  },
  {
    id: "alert-forces",
    avatar: "/images/home/loop-client-avatar.png",
    logo: "/images/home/loop-client-logo.png",
    logoAlt: "Alert Force",
    logoWidth: 47,
    logoHeight: 23,
    quote:
      "CreativePixels are a real professional and an absolute pleasure to work with.",
    name: "Brendan Torazzi",
    role: "Alert Force, Founder",
    rating: 5,
  },
  {
    id: "alert-force",
    avatar: "/images/home/loop-client-avatar.png",
    logo: "/images/home/loop-client-logo.png",
    logoAlt: "Alert Force",
    logoWidth: 47,
    logoHeight: 23,
    quote:
      "CreativePixels are a real professional and an absolute pleasure to work with.",
    name: "Brendan Torazzi",
    role: "Alert Force, Founder",
    rating: 5,
  },
];

// TODO: point "Schedule a time" at the real booking page.
export const contactLinks: ContactLink[] = [
  {
    id: "email",
    icon: Mail,
    label: "hello@cp.agency",
    href: "mailto:hello@cp.agency",
  },
  {
    id: "phone",
    icon: Phone,
    // tel: strips the spaces, since a dialler cannot read them.
    label: "0161 820 2667",
    href: "tel:+441618202667",
  },
  {
    id: "schedule",
    icon: CalendarClock,
    label: "Schedule a time",
    href: "/contact",
  },
];

export const contactTopics: ContactTopic[] = [
  {
    id: "web",
    icon: Monitor,
    label: "Web & Ecommerce",
    value: "web-ecommerce",
    iconClassName: "text-blue",
    selectedClassName: "has-[:checked]:border-blue has-[:checked]:bg-blue/10",
  },
  {
    id: "brand",
    icon: Palette,
    label: "Brand & Experience",
    value: "brand-experience",
    iconClassName: "text-dark-pink",
    selectedClassName:
      "has-[:checked]:border-dark-pink has-[:checked]:bg-dark-pink/10",
  },
  {
    id: "growth",
    icon: CircleArrowUp,
    label: "Growth & Performance",
    value: "growth-performance",
    iconClassName: "text-orange",
    selectedClassName:
      "has-[:checked]:border-orange has-[:checked]:bg-orange/10",
  },
  {
    id: "unsure",
    icon: Ban,
    label: "Not sure yet",
    value: "not-sure",
    iconClassName: "text-blue",
    selectedClassName: "has-[:checked]:border-blue has-[:checked]:bg-blue/10",
  },
];

// TODO: replace the answers with the real copy.
export const faqs: Faq[] = [
  {
    id: "different",
    question: "What makes CreativePixels different?",
    answer:
      "Strategy, design and build sit in one team, so nothing is handed over and lost in translation.",
  },
  {
    id: "timeline",
    question: "How long does a website take?",
    answer:
      "Most projects run six to twelve weeks, depending on how much content and functionality is involved.",
  },
  {
    id: "start",
    question: "How do you start a new project?",
    answer:
      "With a discovery session covering your goals, audience and competitors, which becomes the brief everything else works to.",
  },
  {
    id: "improve",
    question: "Can you improve an existing website?",
    answer:
      "Yes. We audit what you have, then improve it in place where that is the better value, and rebuild only where it is not.",
  },
  {
    id: "design-and-build",
    question: "Do you design and build websites?",
    answer:
      "Both, in the same team, which is why our designs are always buildable and our builds match the design.",
  },
  {
    id: "support",
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Hosting, maintenance, SEO and optimisation continue after launch for as long as you need them.",
  },
];

// Source artwork for the particle field. Kept as markup rather than a file so
// it can be both hit tested as a path and rasterised for its colours.
export const headsetLogoSvg = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100.004 59.9996C100.004 71.0346 91.0392 79.9996 80.004 79.9996H70.004C68.172 79.9996 66.672 78.4996 66.672 76.6676V43.3316C66.672 41.4996 68.172 39.9996 70.004 39.9996H76.672V33.3316C76.672 18.6326 64.707 6.6636 50.004 6.6636C35.305 6.66751 23.336 18.6326 23.336 33.3316V39.9996H30.004C31.836 39.9996 33.336 41.4996 33.336 43.3316V76.6636C33.336 78.4956 31.836 79.9956 30.004 79.9956H23.336V86.6636C23.336 88.4956 24.836 89.9956 26.668 89.9956H44.27C45.438 88.0308 47.5356 86.6636 50.0044 86.6636C53.6724 86.6636 56.6724 89.6636 56.6724 93.3316C56.6724 96.9996 53.6724 99.9996 50.0044 99.9996C47.5396 99.9996 45.4028 98.6324 44.27 96.6676H26.668C21.168 96.6676 16.668 92.1676 16.668 86.6676V79.7028C7.2344 78.1012 0 69.902 0 60.0038C0 50.1054 7.2344 41.9018 16.668 40.3048V33.34C16.6719 14.965 31.637 0 50.004 0C68.371 0 83.336 14.965 83.336 33.332V40.2968C92.7696 41.8984 100.004 50.0976 100.004 59.9958V59.9996Z" fill="url(#headset-gradient)"/>
  <defs>
    <linearGradient id="headset-gradient" x1="112.083" y1="49.9998" x2="-10.9232" y2="49.9998" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE400"/>
      <stop offset="1" stop-color="#EC3593"/>
    </linearGradient>
  </defs>
</svg>`;

// TODO: point these at the real profiles.
export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: "/icons/ig-icon.svg",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/icons/linkedin-icon.svg",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com",
    icon: "/icons/x-icon.svg",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    icon: "/icons/fb-icon.svg",
  },
];

// TODO: point each href at the real site.
export const ourBrands: Brand[] = [
  {
    id: "creative-hosting",
    src: "/images/common/creative-hosting-logo.png",
    alt: "Creative Hosting",
    width: 54,
    height: 25,
    href: "https://example.com",
  },
  {
    id: "wp-fixed",
    src: "/images/common/wp-fixed-logo.png",
    alt: "WP Fixed",
    width: 60,
    height: 25,
    href: "https://example.com",
  },
  {
    id: "monthly-designs",
    src: "/images/common/monthly-designs-logo.png",
    alt: "Monthly Designs",
    width: 88,
    height: 15,
    href: "https://example.com",
  },
];

export const aboutStats: AboutStat[] = [
  {
    id: "years",
    value: "12+",
    label: "Years building digital products",
  },
  {
    id: "projects",
    value: "250",
    label: "Projects Launched",
  },
  {
    id: "continents",
    value: "03",
    label: "Continents served",
  },
  {
    id: "returning-clients",
    value: "94%",
    label: "Clients who came back",
  },
];

// TODO: replace with the real milestones.
export const journeySteps: JourneyStep[] = [
  {
    id: "first-site",
    step: "01",
    title: "First site at 13",
    description: "A hobby that turned into a habit, then into a craft.",
    borderClassName: "border-orange",
    textClassName: "text-orange",
  },
  {
    id: "freelance",
    step: "02",
    title: "Freelance years",
    description: "Client work that taught us what actually ships and lasts.",
    borderClassName: "border-blue",
    textClassName: "text-blue",
  },
  {
    id: "agency",
    step: "03",
    title: "CreativePixels founded",
    description: "Strategy, design and build brought under one roof.",
    borderClassName: "border-dark-pink",
    textClassName: "text-dark-pink",
  },
  {
    id: "team",
    step: "04",
    title: "A senior team",
    description: "People who stay involved from first call through launch.",
    borderClassName: "border-[#6FDC8C]",
    textClassName: "text-[#6FDC8C]",
  },
];
