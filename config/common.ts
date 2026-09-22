import type {
  AboutHighlight,
  AboutStat,
  Behaviour,
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
  ProcessCard,
  ProcessStep,
  ReachLocation,
  ServiceDiscipline,
  SocialLink,
  TeamHandoff,
  TeamMember,
  TeamProfile,
  Testimonial,
  WorkProject,
  WorkflowStep,
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
  FileCheck,
  Layers,
  ClipboardList,
  LayoutDashboard,
  LifeBuoy,
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
  Wrench,
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
    categories: ["Websites", "Ecommerce", "Custom Apps"],
    iconClassName: "text-blue",
    dotClassName: "bg-blue",
    detail: {
      highlights: [
        {
          id: "web-ecommerce-payments",
          icon: Clock,
          text: "Staged payments available",
        },
        {
          id: "web-ecommerce-warranty",
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
        { id: "web-ecommerce-web", label: "Web from", price: "£1,500" },
        {
          id: "web-ecommerce-ecommerce",
          label: "Ecommerce from",
          price: "£3,500",
        },
        { id: "web-ecommerce-apps", label: "Apps from", price: "£5,000" },
      ],
      cta: { label: "explore web & ecommerce", href: "/contact" },
    },
    featured: {
      image: "/images/home/casa-work-img.jpg",
      imageAlt: "Web & Ecommerce project",
      width: 440,
      height: 536,
      label: "Featured project",
      title: "Casa botanica Panama",
      categories: ["Web Design", "Wordpress"],
      href: "/case-studies/web-design-project",
    },
  },
  {
    id: "brand-experience",
    icon: LayoutDashboard,
    title: "Brand & Experience",
    categories: ["Branding", "UI/UX Design", "Digital Identity"],
    iconClassName: "text-dark-pink",
    dotClassName: "bg-dark-pink",
    detail: {
      highlights: [
        {
          id: "brand-experience-direction",
          icon: Clock,
          text: "Direction approved before the full build",
        },
      ],
      title: "Brands that look the part and work everywhere.",
      subtitle:
        "Identity systems, interfaces and the small details in between. We design for how a brand behaves on a screen, in print and in the hands of the people who use it every day.",
      features: [
        "Branding",
        "UI/UX Design",
        "Digital Identity",
        "Design systems",
      ],
      pricing: [
        {
          id: "brand-experience-branding",
          label: "Branding from",
          price: "From £1,000",
        },
        {
          id: "brand-experience-uiux",
          label: "UI/UX from",
          price: "From £1,500",
        },
      ],
      cta: { label: "Explore Brand & Experience", href: "/contact" },
    },
    featured: {
      image: "/images/home/ndifo-work-img.jpg",
      imageAlt: "Brand Experience Project",
      width: 440,
      height: 536,
      label: "Featured work",
      title: "Ndifo Safari",
      categories: ["Brand", "UI/UX"],
      href: "/case-studies/web-design-project",
    },
  },
  {
    id: "growth-performance",
    icon: Code2,
    title: "Growth & Performance",
    categories: ["CRO", "SEO", "Paid Media", "Support"],
    iconClassName: "text-orange",
    dotClassName: "bg-orange",
    detail: {
      highlights: [
        {
          id: "growth-performance-contracts",
          icon: Clock,
          text: "Monthly, no long contracts",
        },
      ],
      title: "More of the right traffic, and more of it converting.",
      subtitle:
        "We measure before we start, so you know what 'working' looks like. Then we improve search visibility, paid campaigns and the journeys people take once they land.",
      features: [
        "Conversion rate optimisation",
        "SEO",
        "Paid media",
        "Growth & support",
      ],
      pricing: [
        {
          id: "growth-performance-ongoing",
          label: "Ongoing growth",
          price: "From £300/month",
        },
      ],
      cta: { label: "Explore Growth & Performance", href: "/contact" },
    },
    featured: {
      image: "/images/home/fultons-work-img.jpg",
      imageAlt: "Growth & Performance project",
      width: 440,
      height: 536,
      label: "Featured work",
      title: "Fultons Jewellery",
      categories: ["Ecommerce", "Growth"],
      href: "/case-studies/development-project",
    },
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "AI & Automation",
    categories: ["AI Agents", "Integration", "Workflows"],
    iconClassName: "text-blue",
    dotClassName: "bg-blue",
    detail: {
      highlights: [
        {
          id: "seo-timeline",
          icon: Clock,
          text: "3-month warranty on automation builds",
        },
      ],
      title: "Take the manual work off your team.",
      subtitle:
        "Two hundred reports used to take three days at Biome4Pets. They now take one. We connect the tools you already use and build the agents and workflows that do the repetitive parts.",
      features: [
        "AI agents",
        "System integration",
        "Workflow automation",
        "Reporting pipelines",
      ],
      pricing: [
        {
          id: "seo-starter",
          label: "Focused automation",
          price: "From £1,500",
        },
      ],
      cta: { label: "Explore AI & Automation", href: "/contact" },
    },
    featured: {
      image: "/images/home/ivy-work-img.jpg",
      imageAlt: "AI & Automation project",
      width: 440,
      height: 536,
      label: "Featured work",
      title: "Ivy & Duke",
      categories: ["Ecommerce", "Automation"],
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
    hoverClassName: "hover:bg-orange",
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

// TODO: replace with the real team — names, roles, years, biographies and
// portraits. The first entry is the one shown until someone is picked.
export const teamProfiles: TeamProfile[] = [
  {
    id: "member-01",
    image: "/images/home/team-one.jpg",
    name: "Ahsan Hussain",
    role: "Head of development",
    years: "12+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-02",
    image: "/images/home/team-one.jpg",
    name: "Taha Baig",
    role: "Project lead",
    years: "9+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-03",
    image: "/images/home/team-two.jpg",
    name: "Team Member 03",
    role: "UX designer",
    years: "7+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-04",
    image: "/images/home/team-three.jpg",
    name: "Team Member 04",
    role: "Visual designer",
    years: "11+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-05",
    image: "/images/home/team-four.jpg",
    name: "Team Member 05",
    role: "WordPress developer",
    years: "6+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-06",
    image: "/images/home/team-five.jpg",
    name: "Team Member 06",
    role: "Ecommerce developer",
    years: "12+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-07",
    image: "/images/home/team-six.jpg",
    name: "Team Member 07",
    role: "Application engineer",
    years: "9+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-08",
    image: "/images/home/team-seven.jpg",
    name: "Team Member 08",
    role: "Growth strategist",
    years: "7+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-09",
    image: "/images/home/team-three.jpg",
    name: "Team Member 09",
    role: "Content strategist",
    years: "11+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-10",
    image: "/images/home/team-one.jpg",
    name: "Team Member 10",
    role: "QA engineer",
    years: "6+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-11",
    image: "/images/home/team-two.jpg",
    name: "Team Member 11",
    role: "Head of development",
    years: "12+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-12",
    image: "/images/home/team-three.jpg",
    name: "Team Member 12",
    role: "Project lead",
    years: "9+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-13",
    image: "/images/home/team-four.jpg",
    name: "Team Member 13",
    role: "UX designer",
    years: "7+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-14",
    image: "/images/home/team-five.jpg",
    name: "Team Member 14",
    role: "Visual designer",
    years: "11+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-15",
    image: "/images/home/team-six.jpg",
    name: "Team Member 15",
    role: "WordPress developer",
    years: "6+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-16",
    image: "/images/home/team-seven.jpg",
    name: "Team Member 16",
    role: "Ecommerce developer",
    years: "12+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-17",
    image: "/images/home/team-six.jpg",
    name: "Team Member 17",
    role: "Application engineer",
    years: "9+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-18",
    image: "/images/home/team-one.jpg",
    name: "Team Member 18",
    role: "Growth strategist",
    years: "7+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-19",
    image: "/images/home/team-two.jpg",
    name: "Team Member 19",
    role: "Content strategist",
    years: "11+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
  {
    id: "member-20",
    image: "/images/home/team-three.jpg",
    name: "Team Member 20",
    role: "QA engineer",
    years: "6+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus nibh, hendrerit a turpis eu, aliquet vehicula ipsum. Donec augue orci, condimentum et maximus a, lacinia semper eros. Nam porttitor mi et pharetra mattis. Cras leo dolor, ultricies vel rhoncus vel, euismod a sem.",
  },
];

// TODO: replace with the real people and their part in the handover.
export const teamHandoffs: TeamHandoff[] = [
  {
    id: "scope",
    image: "/images/home/hassan-avatar-img.png",
    name: "Hassan",
    text: "Scopes it with you",
  },
  {
    id: "design",
    image: "/images/home/team-one.jpg",
    name: "Maryam",
    text: "Maps the journey and designs it",
  },
  {
    id: "build",
    image: "/images/home/team-six.jpg",
    name: "Taha",
    text: "Builds the front end alongside",
  },
  {
    id: "launch",
    image: "/images/home/team-three.jpg",
    name: "Ahsan",
    text: "Handles data, portals and integrations",
  },
  {
    id: "grow",
    image: "/images/home/team-four.jpg",
    name: "Afzal",
    text: "Protects search through launch",
  },
];

export const behaviours: Behaviour[] = [
  {
    id: "senior-people",
    icon: Users,
    title: "Senior people stay involved",
    description:
      "Important decisions are made directly, without being passed through multiple layers of account managers or unnecessary communication.",
    hoverClassName: "hover:bg-blue hover:shadow-[0px_4px_84px_0px_#3078FF]",
  },
  {
    id: "design-development",
    icon: Layers,
    title: "Design Meets Development",
    description:
      "Technical constraints and commercial goals are considered while the experience is being designed, not discovered at the end.",
    hoverClassName: "hover:bg-orange hover:shadow-[0px_4px_84px_0px_#EC9122]",
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Tools fit the problem.",
    description:
      "WordPress, Shopify, Webflow, React, Next.js, Laravel and automation platforms are options - not the identity of the agency.",
    hoverClassName:
      "hover:bg-dark-pink hover:shadow-[0px_4px_84px_0px_#EC3593]",
  },
  {
    id: "after-launch",
    icon: LifeBuoy,
    title: "We stay after launch",
    description:
      "Support, development, CRO, SEO, paid media and automation can continue where the business needs an ongoing digital partner.",
    hoverClassName:
      "hover:bg-[#6FDC8C] hover:shadow-[0px_4px_84px_0px_#6FDC8C]",
  },
];

export const reachLocations: ReachLocation[] = [
  {
    id: "uk",
    image: "/images/about/uk-loction.jpg",
    imageAlt: "Big Ben, London",
    title: "United Kingdom",
    clients: "AlertForce, Sorted, Sight for Life, Fultons",
    className: "top-[4.5rem] left-[44rem]",
  },
  {
    id: "us",
    image: "/images/about/us-location.jpg",
    imageAlt: "The Statue of Liberty, New York",
    title: "United States",
    clients: "Teleqo Tech, New Compass",
    className: "top-[30rem] left-[8.4rem]",
  },
  {
    id: "international",
    image: "/images/about/internation-location.jpg",
    imageAlt: "Hands holding a globe",
    title: "International",
    clients: "Casa Botanica, Ndifo Safari, Manzar",
    className: "top-[28rem] right-[7.6rem]",
  },
];

// TODO: replace with the real process copy.
export const workflowSteps: WorkflowStep[] = [
  {
    id: "before-proposal",
    step: "01",
    title: "Understand",
    details: [
      {
        id: "before-proposal-1",
        title: "WE DO",
        subtitle: "Listen, look at what exists",
      },
      {
        id: "before-proposal-2",
        title: "YOU SEE",
        subtitle: "A written summary",
      },
      {
        id: "before-proposal-3",
        title: "YOU APPROVE",
        subtitle: "Whether to proceed",
      },
    ],
  },
  {
    id: "before-work",
    step: "02",
    title: "Scope",
    details: [
      {
        id: "before-work-1",
        title: "WE DO",
        subtitle: "Structure, scope, price",
      },
      {
        id: "before-work-2",
        title: "YOU SEE",
        subtitle: "A proposal with fixed price",
      },
      {
        id: "before-work-3",
        title: "YOU APPROVE",
        subtitle: "Scope and timeline",
      },
    ],
  },
  {
    id: "the-build",
    step: "03",
    title: "Design",
    details: [
      {
        id: "the-build-1",
        title: "WE DO",
        subtitle: "Wireframes, visual direction",
      },
      {
        id: "the-build-2",
        title: "YOU SEE",
        subtitle: "Clickable prototypes",
      },
      {
        id: "the-build-3",
        title: "YOU APPROVE",
        subtitle: "Page system and key journeys",
      },
    ],
  },
  {
    id: "after-launch",
    step: "04",
    title: "Build",
    details: [
      {
        id: "after-launch-1",
        title: "WE DO",
        subtitle: "Development alongside design",
      },
      {
        id: "after-launch-2",
        title: "YOU SEE",
        subtitle: "Staging links every 1-2 weeks",
      },
      {
        id: "after-launch-3",
        title: "YOU APPROVE",
        subtitle: "Each stage before the next",
      },
    ],
  },
];

// TODO: cards two to six are placeholder copy, and the images need alt text.
export const processCards: ProcessCard[] = [
  {
    id: "before-proposal",
    step: "01",
    title: "Before a proposal",
    description:
      "The first conversation is 15 minutes on what you are trying to achieve, what exists today and where the friction is. We need a rough idea of scope, timing and budget range; you do not need a finished brief. Where the project is large or unclear, we suggest a short paid discovery instead of guessing.",
    details: [
      {
        id: "before-proposal-1",
        icon: ClipboardList,
        iconClassName: "text-blue",
        title: "What we need",
        subtitle: "Goal, current site or system, timing, budget range",
      },
      {
        id: "before-proposal-2",
        icon: FileCheck,
        iconClassName: "text-orange",
        title: "What you get",
        subtitle: "A written proposal with fixed scope and price",
      },
    ],
    image: "/images/how-we-work/card-img-1.png",
    imageAlt: "",
  },
  {
    id: "scoping",
    step: "02",
    title: "Scoping",
    description:
      "Structure, content direction, functionality, integrations, timeline and price are agreed before the main work starts. Content responsibilities are written down. What can still change: copy, imagery and detail within the agreed structure. What is fixed: the price for the agreed scope.",
    details: [
      {
        id: "scoping-1",
        icon: ClipboardList,
        iconClassName: "text-blue",
        title: "Fixed",
        subtitle: "Scope, price, timeline, who does what",
      },
      {
        id: "scoping-2",
        icon: FileCheck,
        iconClassName: "text-orange",
        title: "Flexible",
        subtitle: "Copy, imagery, detail inside the scope",
      },
    ],
    image: "/images/how-we-work/card-img-2.png",
    imageAlt: "",
  },
  {
    id: "design",
    step: "03",
    title: "Design and build",
    description:
      "Design and development run together. You see work in progress every week or two in a shared link, not a big reveal at the end. Two rounds of feedback are built into each stage, and technical constraints are raised while the design is being made rather than discovered afterwards.",
    details: [
      {
        id: "design-1",
        icon: ClipboardList,
        iconClassName: "text-blue",
        title: "Reviews",
        subtitle: "Every one to two weeks, live links",
      },
      {
        id: "design-2",
        icon: FileCheck,
        iconClassName: "text-orange",
        title: "Feedback",
        subtitle: "Two rounds per stage, written down",
      },
    ],
    image: "/images/how-we-work/card-img-3.png",
    imageAlt: "",
  },
  {
    id: "build",
    step: "04",
    title: "Payments",
    description:
      "Project work is paid in stages tied to delivery: typically a deposit to start, a payment at design sign-off and the balance at launch. Ongoing work such as Growth & Support, CRO or SEO is billed monthly and can stop with notice.",
    details: [
      {
        id: "build-1",
        icon: ClipboardList,
        iconClassName: "text-blue",
        title: "Projects",
        subtitle: "Staged: start, design sign-off, launch",
      },
      {
        id: "build-2",
        icon: FileCheck,
        iconClassName: "text-orange",
        title: "Ongoing",
        subtitle: "Monthly, rolling",
      },
    ],
    image: "/images/how-we-work/card-img-4.png",
    imageAlt: "",
  },
  {
    id: "launch",
    step: "05",
    title: "Launch",
    description:
      "QA across browsers, devices and the critical journeys. Redirects mapped where URLs change. Analytics and tracking checked. Handover includes training where the team will edit the site, and applicable builds carry a three-month warranty.",
    details: [
      {
        id: "launch-1",
        icon: ClipboardList,
        iconClassName: "text-blue",
        title: "Included",
        subtitle: "QA, redirects, tracking, training, 3-month warranty",
      },
      {
        id: "launch-2",
        icon: FileCheck,
        iconClassName: "text-orange",
        title: "Ownership",
        subtitle: "Code, files and accounts are yours",
      },
    ],
    image: "/images/how-we-work/card-img-5.png",
    imageAlt: "",
  },
  {
    id: "after-launch",
    step: "06",
    title: "After launch",
    description:
      "Launch is where the useful data starts. Growth & Support covers updates, fixes and improvements. CRO, SEO, paid media, development and automation continue where there is a clear commercial reason. Measured against the baseline agreed at the start.",
    details: [
      {
        id: "after-launch-1",
        icon: ClipboardList,
        iconClassName: "text-blue",
        title: "Ongoing",
        subtitle: "Growth & Support from £300/month",
      },
      {
        id: "after-launch-2",
        icon: FileCheck,
        iconClassName: "text-orange",
        title: "Measured",
        subtitle: "Against the baseline agreed at scoping",
      },
    ],
    image: "/images/how-we-work/card-img-6.png",
    imageAlt: "",
  },
];

// TODO: replace with the real questions and answers for this page.
export const howWeWorkFaqs: Faq[] = [
  {
    id: "timeline",
    question: "How long does the whole process take?",
    answer:
      "Most projects run six to twelve weeks from kick off to launch, depending on how much content and functionality is involved.",
  },
  {
    id: "discovery",
    question: "Do I need a finished brief before we talk?",
    answer:
      "No. A rough idea of the goal, the timing and the budget range is enough to start the conversation.",
  },
  {
    id: "paid-discovery",
    question: "When do you recommend a paid discovery?",
    answer:
      "Where the project is large or the scope is unclear, so the proposal is based on findings rather than guesswork.",
  },
  {
    id: "payments",
    question: "How are payments staged?",
    answer:
      "Split across the build against agreed milestones, rather than taken up front.",
  },
  {
    id: "involvement",
    question: "How much of my time will this take?",
    answer:
      "A weekly check in and timely feedback at each milestone. We will always say what we need and by when.",
  },
  {
    id: "changes",
    question: "What happens if the scope changes?",
    answer:
      "We price the change before anything is built, so nothing appears on an invoice that you have not agreed to.",
  },
];
