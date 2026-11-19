import {
  Ban,
  Briefcase,
  CalendarClock,
  CalendarDays,
  CircleArrowUp,
  Clock,
  Code2,
  Compass,
  FileCheck,
  Layers,
  ClipboardList,
  LifeBuoy,
  Mail,
  Monitor,
  MessageSquare,
  Palette,
  Phone,
  TrendingUp,
  UserRoundCheck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

export const heroPopovers = [
  {
    id: "branding",
    title: "Branding",
    href: "/services",
    image: "/images/home/popover.jpg",
    className: "left-[150px] top-[50px]",
    squareClassName: "size-[8px] bg-white",
    orientation: "bottom",
  },
  {
    id: "web-desig",
    title: "Web Design",
    href: "/services",
    image: "/images/home/popover.jpg",
    className: "right-[150px] top-[40px]",
    squareClassName: "size-[8px] bg-white",
    orientation: "bottom",
  },
  {
    id: "casa-botanica",
    title: "Casa Botanica ",
    href: "/work",
    image: "/images/home/casa-popover-img.png",
    className: "right-[70px] bottom-[290px]",
    squareClassName: "size-[8px] bg-white",
    orientation: "bottom",
  },
  {
    id: "about",
    title: "About Us",
    href: "/about",
    image: "/images/home/popover.jpg",
    className: "left-[70px] bottom-[290px]",
    squareClassName: "size-[8px] bg-white",
    orientation: "bottom",
  },
];

export const heroBadges = [
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

export const clientLogos = [
  {
    id: "casabotanica",
    src: "/images/home/casa-logo.png",
    alt: "Casabotanica Client",
    href: "/work/casabotanica",
    width: 141,
    height: 30,
    className: "w-[141px] h-[30px]",
  },
  {
    id: "ivy-duke",
    src: "/images/home/ivy-duke-logo.png",
    alt: "Ivy & Duke Client",
    href: "/work/ivy-duke",
    width: 94,
    height: 45,
    className: "w-[94px] h-[45px]",
  },
  {
    id: "fultons",
    src: "/images/home/fultons-logo.png",
    alt: "Fultons Client",
    href: "/work/fultons",
    width: 91,
    height: 21,
    className: "w-[91px] h-[21px]",
  },
  {
    id: "game-art-brain",
    src: "/images/home/game-art-logo.png",
    alt: "Game Art Brain Client",
    href: "/work/game-art-brain",
    width: 73,
    height: 34,
    className: "w-[73px] h-[34px]",
  },
  {
    id: "ayoa",
    src: "/images/home/ayoa-logo.png",
    alt: "Ayoa Client",
    href: "/work/ayoa",
    width: 95,
    height: 29,
    className: "w-[95px] h-[29px]",
  },
  {
    id: "peter-jones-foundation",
    src: "/images/home/peter-jones-logo.png",
    alt: "Peter Jones Foundation Client",
    href: "/work/peter-jones-foundation",
    width: 113,
    height: 35,
    className: "w-[113px] h-[35px]",
  },
];

export const heroStats = [
  {
    id: "woocommerce",
    icon: "/images/home/ivy-duke-icon.svg",
    iconAlt: "Ivy & Duke",
    width: 72,
    height: 43,
    iconClassName: "h-[43px] w-[72px]",
    value: "+15%",
    description: "First-week revenue after our WooCommerce changes.",
  },
  {
    id: "unicef",
    icon: "/images/home/unicef-icon.svg",
    iconAlt: "Unicef",
    width: 59,
    height: 49,
    iconClassName: "h-[49px] w-[59px]",
    value: "£478k",
    description: "Raised at one event. [What CP built, TBC]",
  },
  {
    id: "teleqo",
    icon: "/images/home/teleco-tech-icon.svg",
    iconAlt: "Teleqo Tech",
    width: 52,
    height: 51,
    iconClassName: "h-[51px] w-[52px]",
    value: "result TBC",
    description: "[confirm the exact wording from the current card]",
  },
];

export const caseStudyMetrics = [
  {
    id: "baseline",
    label: "Baseline",
    labelClassName: "bg-blue",
    value: "9 in 10",
    valueClassName: "text-white",
    description: "Product viewers left without adding anything to the basket",
  },
  {
    id: "change",
    label: "Change",
    labelClassName: "bg-orange",
    value: "49 fixes",
    valueClassName: "text-white",
    description:
      "Across 10 workstreams in about a week: buy box, checkout, speed, reviews, email",
  },
  {
    id: "result",
    label: "Result",
    labelClassName: "bg-dark-pink",
    value: "+15%",
    valueClassName:
      "bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text text-transparent pr-[5px]",
    description: "Revenue in the first full week, with the same sale running",
  },
];

export const caseStudyStats = [
  {
    id: "google-reviews",
    icon: "/images/home/google-icon.svg",
    iconAlt: "Google",
    width: 28,
    height: 30,
    iconBgClassName: "bg-white",
    value: "0 → 146",
    description: "Google review stars",
  },
  {
    id: "homepage-size",
    icon: "/images/home/storage-icon.svg",
    iconAlt: "",
    width: 28,
    height: 26,
    iconBgClassName: "bg-orange",
    value: "9.4 MB → 0.7 MB",
    description: "Homepage",
  },
  {
    id: "add-ons",
    icon: "/images/home/addon-icon.svg",
    iconAlt: "",
    width: 25,
    height: 28,
    iconBgClassName: "bg-blue",
    value: "8.3%",
    description: "of orders now include an add-on",
  },
];

export const brandLogos = [
  {
    id: "game-art-brain",
    src: "/images/home/game-art-brain-logo-dark.png",
    alt: "Game Art Brain",
    href: "/work/game-art-brain",
    width: 73,
    height: 34,
  },
  {
    id: "ayoa",
    src: "/images/home/ayoa-logo-dark.png",
    alt: "Ayoa",
    href: "/work/ayoa",
    width: 95,
    height: 29,
  },
  {
    id: "peter-jones-foundation",
    src: "/images/home/peter-jones-foundation-logo-dark.png",
    alt: "Peter Jones Foundation",
    href: "/work/peter-jones-foundation",
    width: 113,
    height: 35,
  },
  {
    id: "ivy-duke",
    src: "/images/home/ivy-duke-logo-dark.png",
    alt: "Ivy & Duke",
    href: "/work/ivy-duke",
    width: 94,
    height: 45,
  },
  {
    id: "fultons",
    src: "/images/home/fultons-logo-dark.png",
    alt: "Fultons",
    href: "/work/fultons",
    width: 91,
    height: 21,
  },
  {
    id: "casabotanica",
    src: "/images/home/casabotanica-logo-dark.png",
    alt: "Casa Botanica",
    href: "/work/casabotanica",
    width: 141,
    height: 30,
  },
];

export const aboutQuote =
  "I started CreativePixels at 13 to make a difference. That same drive still runs through the team today: creating work that’s thoughtful and well designed.";

export const teamMembers = [
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

export const serviceDisciplines = [
  {
    id: "web-ecommerce",
    triggerIcon: "/images/home/web-ecommerce-icon.svg",
    title: "Web & Ecommerce",
    categories: ["Websites", "Ecommerce", "Custom Apps"],
    iconClassName: "text-[#49B277]",
    dotClassName: "bg-[#49B277]",
    bgClassName: "bg-[#49B277]/10",
    ctaHoverClassName: "hover:bg-[#49B277]",
    detail: {
      highlights: [
        { id: "web-ecommerce-payments", text: "Staged payments" },
        { id: "web-ecommerce-guarantee", text: "3-month guarantee" },
      ],
      title: "Websites, stores and apps built to sell.",
      subtitle:
        "From business websites to online stores and custom software, we design and build around your customers, goals and systems. Not a favourite template or technology.",
      features: [
        "Web Design",
        "WordPress",
        "Ecommerce",
        "WooCommerce",
        "Shopify",
        "Custom Software",
      ],
      pricing: [
        { id: "web-ecommerce-web", label: "Websites from", price: "£1,500" },
        {
          id: "web-ecommerce-stores",
          label: "Stores from",
          price: "£3,500",
        },
        { id: "web-ecommerce-apps", label: "Apps from", price: "£5,000" },
      ],
      cta: { label: "Explore Web & Ecommerce", href: "/contact" },
    },
    featured: {
      image: "/images/home/peter-jones-foundation-service-img.png",
      imageAlt: "Tycoon project",
      width: 440,
      height: 536,
      label: "Featured project",
      title: "Tycoon",
      categories: ["Web Design", "WordPress"],
      href: "/work/tycoon",
    },
  },
  {
    id: "brand-experience",
    triggerIcon: "/images/home/brand-experience-icon.svg",
    title: "Brand & Experience",
    categories: ["Branding", "UI/UX Design", "Digital Identity"],
    iconClassName: "text-[#3078FF]",
    dotClassName: "bg-[#3078FF]",
    bgClassName: "bg-[#3078FF]/10",
    ctaHoverClassName: "hover:bg-[#3078FF]",
    detail: {
      highlights: [
        {
          id: "brand-experience-direction",
          text: "You approve the direction first",
        },
        { id: "brand-experience-files", text: "You own every file" },
      ],
      title: "Brands and journeys people trust.",
      subtitle:
        "We shape how your business looks, sounds and works on screen, from a brand refresh to a full redesign of your site or app. So people get it quickly and want to buy.",
      features: [
        "Brand refresh",
        "Full brand identity",
        "UI/UX redesign",
        "Wireframes and prototypes",
        "Monthly design support",
      ],
      pricing: [
        {
          id: "brand-experience-branding",
          label: "Branding from",
          price: "£1,000",
        },
        {
          id: "brand-experience-identity",
          label: "Full identity from",
          price: "£2,500",
        },
        {
          id: "brand-experience-uiux",
          label: "UI/UX from",
          price: "£1,500",
        },
      ],
      cta: { label: "Explore Brand & Experience", href: "/contact" },
    },
    featured: {
      image: "/images/home/sunbox-service-img.png",
      imageAlt: "Sunbox Campers project",
      width: 440,
      height: 536,
      label: "Featured project",
      title: "Sunbox Campers",
      categories: ["Wordpress"],
      href: "/work/sunbox-campers",
    },
  },
  {
    id: "growth-performance",
    triggerIcon: "/images/home/growth-performance-icon.svg",
    title: "Growth & Performance",
    categories: ["CRO", "SEO", "Paid Media", "Support"],
    iconClassName: "text-[#EC3593]",
    dotClassName: "bg-[#EC3593]",
    bgClassName: "bg-[#EC3593]/10",
    ctaHoverClassName: "hover:bg-[#EC3593]",
    detail: {
      highlights: [
        { id: "growth-performance-monthly", text: "Rolling monthly" },
        {
          id: "growth-performance-contracts",
          text: "No lock-in contracts",
        },
      ],
      title: "More visitors. More of them buying.",
      subtitle:
        "We help the right people find you, turn more of them into customers, and keep your site fast, safe and up to date. Measured against a baseline we agree at the start.",
      features: ["SEO", "CRO", "Growth & Support", "Paid Media"],
      pricing: [
        {
          id: "growth-performance-seo",
          label: "SEO from",
          price: "£500",
          suffix: "a month",
        },
        {
          id: "growth-performance-cro",
          label: "CRO review from",
          price: "£750",
        },
        {
          id: "growth-performance-support",
          label: "Support from",
          price: "£300",
          suffix: "a month",
        },
      ],
      cta: { label: "Explore Growth & Performance", href: "/contact" },
    },
    featured: {
      image: "/images/home/drive-uk-service-img.png",
      imageAlt: "Drive Uk project",
      width: 440,
      height: 536,
      label: "Featured project",
      title: "Drive Uk",
      categories: ["Wordpress"],
      href: "/work/drive-uk",
    },
  },
  {
    id: "ai-automation",
    triggerIcon: "/images/home/ai-automation-icon.svg",
    title: "AI & Automation",
    categories: ["AI Agents", "Integration", "Workflows"],
    iconClassName: "text-[#EC9122]",
    dotClassName: "bg-[#EC9122]",
    bgClassName: "bg-[#EC9122]/10",
    ctaHoverClassName: "hover:bg-[#EC9122]",
    detail: {
      highlights: [
        { id: "ai-automation-workflow", text: "Start with one workflow" },
        { id: "ai-automation-live", text: "Live in 2 to 4 weeks" },
      ],
      title: "Less admin. Fewer mistakes.",
      subtitle:
        "We automate the repetitive work your team does every week, from leads and invoices to reports, and connect the tools you already use. We start with one workflow, so you see results before spending more.",
      features: [
        "Workflow automation",
        "AI agents and assistants",
        "System integrations",
        "Custom software",
      ],
      pricing: [
        {
          id: "ai-automation-first",
          label: "First automation from",
          price: "£1,500",
        },
        {
          id: "ai-automation-apps",
          label: "Custom apps from",
          price: "£5,000",
        },
        {
          id: "ai-automation-support",
          label: "Ongoing support from",
          price: "£300",
          suffix: "a month",
        },
      ],
      cta: { label: "Explore AI & Automation", href: "/contact" },
    },
    featured: {
      image: "/images/home/smokey-carter-service-img.png",
      imageAlt: "Smokey Carter project",
      width: 440,
      height: 536,
      label: "Featured project",
      title: "Smokey Carter",
      categories: ["Woocommerce"],
      href: "/work/smokey-carter",
    },
  },
];

export const whoWeHelpCards = [
  {
    id: "sme-founders",
    icon: "/images/home/sme-founders-icon.svg",
    iconWidth: 59,
    iconHeight: 59,
    title: (
      <>
        SME <br /> Founders
      </>
    ),
    description: "A website that brings in enquiries, not just compliments.",
    hoverClassName: "hover:bg-orange active:bg-orange",
  },
  {
    id: "ecommerce-brands",
    icon: "/images/home/ecommerce-brands-icon.svg",
    iconWidth: 53,
    iconHeight: 60,
    title: (
      <>
        Ecommerce <br /> brands
      </>
    ),
    description: "Shopify and WooCommerce stores built around the checkout.",
    hoverClassName: "hover:bg-dark-pink active:bg-dark-pink",
  },
  {
    id: "non-profit-charity",
    icon: "/images/home/non-profits-icon.svg",
    iconWidth: 59,
    iconHeight: 51,
    title: (
      <>
        Non-profit <br /> and charity
      </>
    ),
    description: "Accessible sites and campaigns that help you raise more.",
    hoverClassName: "hover:bg-blue active:bg-blue",
  },
  {
    id: "b2b-services",
    icon: "/images/home/b2b-services-icon.svg",
    iconWidth: 48,
    iconHeight: 54,
    title: (
      <>
        B2B <br /> services
      </>
    ),
    description: "Sites that turn expertise into qualified leads.",
    hoverClassName: "hover:bg-orange active:bg-orange",
  },
];

export const howWeWorkItems = [
  {
    id: "fixed-price",
    title: "Fixed price before we start",
    description:
      "No open-ended hourly billing. If the scope changes, we tell you first.",
  },
  {
    id: "ownership",
    title: "You own everything",
    description: "Code, files and accounts. No lock-in.",
  },
  {
    id: "honest-fit",
    title: "We'll tell you if it's not a fit",
    description: "Even if that means pointing you somewhere else.",
  },
  {
    id: "guarantee",
    title: "3-month guarantee",
    description:
      "Anything not right is fixed free. Then monthly plans if you want them.",
  },
];

export const howWeWorkCaseStudy = {
  image: "/images/home/unicef-how-we-work-img.jpg",
  imageAlt: "Unicef fundraising campaign",
  logo: "/images/home/unicef-how-we-work-logo.png",
  logoAlt: "Unicef",
  logoWidth: 123,
  logoHeight: 29,
  title: "£478k",
  subtitle: "raised at one event",
  ctaLabel: "View Case Study",
  href: "/work/unicef",
};

export const processSteps = [
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

export const workProjects = [
  {
    id: "casa-botanica",
    category: "web",
    image: "/images/home/casa-work-img.jpg",
    imageAlt: "Casa Botanica website homepage",
    title: "Casa Botanica",
    subtitle: "Luxury safari website redesigned.",
    ctaLabel: "Visit live site",
    href: "https://example.com",
  },
  {
    id: "ivy-and-duke",
    category: "ecommerce",
    image: "/images/home/ivy-work-img.jpg",
    imageAlt: "Ivy & Duke website homepage",
    title: "Ivy & Duke",
    subtitle: "Luxury safari website redesigned.",
    ctaLabel: "Visit live site",
    href: "https://example.com",
  },
  {
    id: "ndifo-safari",
    category: "web",
    image: "/images/home/ndifo-work-img.jpg",
    imageAlt: "Ndifo Safari website homepage",
    title: "Ndifo Safari",
    subtitle: "Luxury safari website redesigned.",
    ctaLabel: "Visit live site",
    href: "https://example.com",
  },
  {
    id: "fultons-jewellery",
    category: "ecommerce",
    image: "/images/home/fultons-work-img.jpg",
    imageAlt: "Fultons Jewellery website homepage",
    title: "Fultons Jewellery",
    subtitle: "Luxury safari website redesigned.",
    ctaLabel: "Visit live site",
    href: "https://example.com",
  },
];

export const homeWorkProjects = [
  {
    id: "peter-jones-foundation",
    image: "/images/home/peter-jones-foundation-work.png",
    imageAlt: "Peter Jones Foundation Tycoon website on a laptop",
    tag: "WordPress",
    title: "Website redesign for the Tycoon enterprise programme",
    ctaLabel: "Case study",
    href: "/work/peter-jones-foundation",
  },
  {
    id: "casabotanica",
    image: "/images/home/casabotanica-work-img.png",
    imageAlt: "Casa Botanica villa website on a laptop",
    tag: "WordPress",
    title: "Boutique villa website with a custom booking system",
    ctaLabel: "Case study",
    href: "/work/casabotanica",
  },
  {
    id: "sunbox",
    image: "/images/home/sunbox-work-img.png",
    imageAlt: "Campervan Converters in Sussex website on a laptop",
    tag: "WordPress",
    title: "Campervan conversion website, with lead tracking into HubSpot",
    ctaLabel: "Case study",
    href: "/work/sunbox",
  },
  {
    id: "smokey-carter",
    image: "/images/home/smokey-carter-work-img.png",
    imageAlt: "Smokey Carter BBQ store website on a monitor",
    tag: "WordPress",
    title: "Complete Website Redesign for BBQ Rubs and Sauces Store",
    ctaLabel: "Case study",
    href: "/work/smokey-carter",
  },
];

export const consultationBenefits = [
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

export const testimonials = [
  {
    id: "loop",
    avatar: "/images/home/loop-testimonials-avatar.png",
    logo: "/images/home/loop-testimonials-logo.png",
    logoAlt: "Loop",
    logoWidth: 192,
    logoHeight: 93,
    quote:
      "CreativePixels did an incredible job helping us to create branding material from scratch. They were extremely flexible, and exceeded our expectations.",
    name: "Alex",
    role: "Loop, Founder",
    rating: 5,
  },
  {
    id: "ayoa",
    avatar: "/images/home/ayoa-testimonials-avatar.png",
    logo: "/images/home/ayoa-testimonials-logo.png",
    logoAlt: "Ayoa",
    logoWidth: 276,
    logoHeight: 83,
    quote:
      "I would highly recommend CreativePixels, they were excellent throughout the process of designing and developing our new website.",
    name: "James Brian",
    role: "Ayoa, Founder",
    rating: 5,
  },
  {
    id: "alert-force",
    avatar: "/images/home/alertforce-testimonials-avatar.png",
    logo: "/images/home/loop-testimonials-logo.png",
    logoAlt: "Alert Force",
    logoWidth: 192,
    logoHeight: 93,
    quote:
      "CreativePixels are a real professional and an absolute pleasure to work with.",
    name: "Brendan Torazzi",
    role: "Alert Force, Founder",
    rating: 5,
  },
];

export const contactLinks = [
  {
    id: "email",
    icon: Mail,
    label: "hello@cp.agency",
    href: "mailto:hello@cp.agency",
  },
  {
    id: "phone",
    icon: Phone,
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

export const contactTopics = [
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

export const faqs = [
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

export const socialLinks = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    icon: "/icons/fb-icon.svg",
    hoverClassName: "hover:bg-[#1877F2]",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: "/icons/ig-icon.svg",
    hoverClassName: "hover:bg-[#E1306C]",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/icons/linkedin-icon.svg",
    hoverClassName: "hover:bg-[#0A66C2]",
  },
  {
    id: "x",
    label: "Twitter",
    href: "https://x.com",
    icon: "/icons/x-icon.svg",
    hoverClassName: "hover:bg-[#1DA1F2]",
  },
];

export const ourBrands = [
  {
    id: "creative-hosting",
    src: "/images/common/creative-hosting-logo.png",
    alt: "Creative Hosting",
    width: 71,
    height: 33,
    href: "https://example.com",
  },
  {
    id: "wp-fixed",
    src: "/images/common/wp-fixed-logo.png",
    alt: "WP Fixed",
    width: 87,
    height: 36,
    href: "https://example.com",
  },
  {
    id: "monthly-designs",
    src: "/images/common/monthly-designs-logo.png",
    alt: "Monthly Designs",
    width: 122,
    height: 21,
    href: "https://example.com",
  },
];

export const aboutStats = [
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

export const journeySteps = [
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

export const teamProfiles = [
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

export const teamHandoffs = [
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

export const behaviours = [
  {
    id: "senior-people",
    icon: Users,
    title: "Senior people stay involved",
    description:
      "Important decisions are made directly, without being passed through multiple layers of account managers or unnecessary communication.",
    hoverClassName:
      "hover:bg-blue hover:shadow-[0px_4px_84px_0px_#3078FF] active:bg-blue active:shadow-[0px_4px_84px_0px_#3078FF]",
  },
  {
    id: "design-development",
    icon: Layers,
    title: "Design Meets Development",
    description:
      "Technical constraints and commercial goals are considered while the experience is being designed, not discovered at the end.",
    hoverClassName:
      "hover:bg-orange hover:shadow-[0px_4px_84px_0px_#EC9122] active:bg-orange active:shadow-[0px_4px_84px_0px_#EC9122]",
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Tools fit the problem.",
    description:
      "WordPress, Shopify, Webflow, React, Next.js, Laravel and automation platforms are options - not the identity of the agency.",
    hoverClassName:
      "hover:bg-dark-pink hover:shadow-[0px_4px_84px_0px_#EC3593] active:bg-dark-pink active:shadow-[0px_4px_84px_0px_#EC3593]",
  },
  {
    id: "after-launch",
    icon: LifeBuoy,
    title: "We stay after launch",
    description:
      "Support, development, CRO, SEO, paid media and automation can continue where the business needs an ongoing digital partner.",
    hoverClassName:
      "hover:bg-[#6FDC8C] hover:shadow-[0px_4px_84px_0px_#6FDC8C] active:bg-[#6FDC8C] active:shadow-[0px_4px_84px_0px_#6FDC8C]",
  },
];

export const reachLocations = [
  {
    id: "uk",
    image: "/images/about/uk-loction.jpg",
    imageAlt: "Big Ben, London",
    title: "United Kingdom",
    clients: "AlertForce, Sorted, Sight for Life, Fultons",
    className: "top-[45px] left-[440px]",
  },
  {
    id: "us",
    image: "/images/about/us-location.jpg",
    imageAlt: "The Statue of Liberty, New York",
    title: "United States",
    clients: "Teleqo Tech, New Compass",
    className: "top-[300px] left-[84px]",
  },
  {
    id: "international",
    image: "/images/about/internation-location.jpg",
    imageAlt: "Hands holding a globe",
    title: "International",
    clients: "Casa Botanica, Ndifo Safari, Manzar",
    className: "top-[280px] right-[76px]",
  },
];

export const workflowSteps = [
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

export const processCards = [
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

export const howWeWorkFaqs = [
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

export const partnerStats = [
  {
    id: "first-partner",
    value: "2014",
    label: "First agency partner",
  },
  {
    id: "projects",
    value: "500+",
    label: "White label projects delivered",
  },
  {
    id: "agencies",
    value: "8+",
    label: "Agencies we work with today",
  },
  {
    id: "countries",
    value: "3",
    label: "Countries: UK, US, Australia",
  },
];

export const agencyWorkflow = [
  {
    id: "channel",
    icons: [
      {
        id: "slack",
        src: "/icons/slack-icon.png",
        width: 30,
        height: 30,
      },
    ],
    showPlus: true,
    title: "Channel",
    subtitle: "Slack Connect or a dedicated thread",
  },
  {
    id: "board",
    icons: [
      {
        id: "notion",
        src: "/icons/notion-icon.png",
        width: 30,
        height: 30,
      },
      {
        id: "asana",
        src: "/icons/asana-icon.png",
        width: 40,
        height: 30,
      },
      {
        id: "trello",
        src: "/icons/trello-icon.png",
        width: 30,
        height: 30,
      },
    ],
    showPlus: true,
    title: "Board",
    subtitle: "Notion, Asana, Trello, ClickUp, yours",
  },
  {
    id: "identity",
    icons: [
      {
        id: "dot-com",
        src: "/icons/dot-com-icon.svg",
        width: 52,
        height: 52,
      },
    ],
    title: "Identity",
    subtitle: "name@youragency.co.uk when needed",
  },
  {
    id: "cadence",
    icons: [
      {
        id: "link",
        src: "/icons/link-icon.svg",
        width: 30,
        height: 30,
      },
    ],
    title: "Cadence",
    subtitle: "Staging links every one to two weeks",
  },
];

export const costComparison = [
  {
    id: "in-house",
    title: "Hire a mid-weight developer",
    rows: [
      { id: "salary", label: "Salary", value: "£45,000" },
      { id: "on-costs", label: "Employer NI, pension, kit", value: "~£8,000" },
      { id: "recruitment", label: "Recruitment", value: "~£6,000" },
      { id: "cover", label: "Holiday and sick cover", value: "6 weeks/yr" },
      { id: "skills", label: "Skills", value: "One stack" },
    ],
    totalLabel: "Year one, before a single project",
    totalValue: "~£59,000",
  },
  {
    id: "partner",
    title: "Partner with CreativePixels",
    rows: [
      { id: "idle", label: "Idle time", value: "£0" },
      { id: "hr", label: "Recruitment, HR, cover", value: "£0" },
      {
        id: "disciplines",
        label: "Design, dev, SEO, strategy",
        value: "All included",
      },
      { id: "capacity", label: "Capacity", value: "Up or down per job" },
      {
        id: "billing",
        label: "Billing",
        value: "Per project or monthly allocation",
      },
    ],
    totalLabel: "Year one",
    totalValue: "Only what you sell",
    isFeatured: true,
  },
];

export const handoverDelivery = [
  {
    id: "strategy",
    icon: Compass,
    iconClassName: "text-dark-pink",
    title: "Strategy & scope",
    subtitle: "We can lead it, or work from yours",
  },
  {
    id: "design",
    icon: Palette,
    iconClassName: "text-orange",
    title: "Design",
    subtitle: "Brand, UI/UX, prototypes in Figma",
  },
  {
    id: "build",
    icon: Code2,
    iconClassName: "text-dark-pink",
    title: "Build",
    subtitle: "WordPress, Shopify, Webflow, React, Next.js, Laravel",
  },
];

export const handoverGrowth = [
  {
    id: "growth",
    icon: TrendingUp,
    iconClassName: "text-blue",
    title: "Growth",
    subtitle: "SEO, CRO, paid, landing pages, reporting in your template",
  },
  {
    id: "automation",
    icon: Workflow,
    iconClassName: "text-blue",
    title: "Automation",
    subtitle: "Workflows, integrations, agents for your clients",
  },
  {
    id: "support",
    icon: LifeBuoy,
    iconClassName: "text-orange",
    title: "Support",
    subtitle: "Maintenance, speed, security, migrations, accessibility",
  },
];

export const partnerFit = [
  {
    id: "good-fit",
    icon: Briefcase,
    title: "Good fit",
    points: [
      "You own the client relationship and want to keep it",
      "You need repeatable delivery, not a one-off rescue",
      "You can give a written brief, or a call and a Figma link",
      'You want straight scoping, including "that will not work"',
    ],
    isPositive: true,
  },
  {
    id: "probably-not",
    icon: Briefcase,
    title: "Probably not",
    points: [
      "Cheapest possible bid on a fixed template",
      "Undisclosed subcontracting where the client is told nobody else is involved and asks",
      "Projects with no decision-maker on your side",
    ],
    note: "A 48-hour yes or no is part of the offer. It saves everyone a month.",
  },
];

export const partnerShowcase = {
  id: "partner-showcase",
  image: "/images/home/ivy-work-img.jpg",
  imageAlt: "An ecommerce storefront built under a partner agency's brand",
  title: "Ivy & Duke",
  subtitle: "Built end to end for a London agency.",
  ctaLabel: "Visit live site",
  href: "https://example.com",
};

export const partnerReview = {
  id: "partner-review",
  avatar: "/images/home/ayoa-client-avatar.png",
  logo: "/images/home/ayoa-client-logo.png",
  logoAlt: "Ayoa",
  logoWidth: 62,
  logoHeight: 23,
  quote:
    "We brought them in on a build our client could not wait for. Staging links every week, no chasing, and nobody ever knew we were not doing it ourselves.",
  name: "Sam",
  role: "Studio director",
  rating: 5,
};

export const partnerFaqs = [
  {
    id: "white-label",
    question: "Does our client ever hear your name?",
    answer:
      "Only if you want them to. We work under your brand, on your domain where it helps, and an NDA is signed before the brief.",
  },
  {
    id: "response",
    question: "How quickly will we know if you can take it?",
    answer:
      "A yes or no on fit within 48 hours, so you are not holding a client while we decide.",
  },
  {
    id: "scope",
    question: "Can you take part of a project rather than all of it?",
    answer:
      "Yes. Strategy, design, build, growth and support are separable — pick the pieces you need on each job.",
  },
  {
    id: "tools",
    question: "Whose project management do we use?",
    answer:
      "Yours, if you have one. Slack Connect or email, your board or ours, the rhythm is the same either way.",
  },
  {
    id: "billing",
    question: "How are we billed?",
    answer:
      "Per project, or as a monthly allocation where the work is continuous. You mark it up as you see fit.",
  },
  {
    id: "clients",
    question: "Will you approach our clients?",
    answer:
      "Never. The client relationship is yours, and we have no interest in competing for it.",
  },
];

export const reviewPoints = [
  {
    id: "clarity",
    title: "Clarity & conversion",
    subtitle: "Can a visitor tell what you do and what to do next?",
    swatchClassName: "bg-dark-pink",
  },
  {
    id: "search",
    title: "Search foundations",
    subtitle: "Structure, titles, speed and the obvious gaps.",
    swatchClassName: "bg-orange",
  },
  {
    id: "ux",
    title: "UX / mobile",
    subtitle: "Where the journey gets awkward on a phone.",
    swatchClassName: "bg-blue",
  },
  {
    id: "performance",
    title: "Performance",
    subtitle: "Technical friction that affects behaviour.",
    swatchClassName: "bg-[#6FDC8C]",
  },
];

export const reviewSteps = [
  { id: "send", step: "01", text: "Send the URL" },
  { id: "review", step: "02", text: "Senior review, recorded" },
  {
    id: "receive",
    step: "03",
    text: "Receive priorities, discuss next step if you want to",
  },
];

export const reviewPriorities = [
  "Improve headline & messaging",
  "Add social proof / trust signals",
  "Make CTA more prominent",
  "Optimise for mobile",
];

export const workCaseStudies = [
  {
    id: "casa-botanica",
    image: "/images/home/casa-work-img.jpg",
    imageAlt: "The Casa Botanica Panama homepage on a laptop",
    tags: ["Featured", "Web", "Wordpress", "Migration"],
    title: "Casa Botanica Panama",
    description:
      "A luxury villa brand moved off Squarespace and rebuilt around the stay, the photography and one clear route to book.",
    role: "Design, build, migration",
    platform: "WordPress",
    href: "/work/casabotanica",
    panelClassName: "bg-orange/10",
    imagePanelClassName: "bg-orange/10",
  },
];

export const workFilters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "brand", label: "Brand" },
  { id: "apps", label: "Apps" },
  { id: "growth", label: "Growth" },
];

export const workShowcase = {
  id: "teleqo-tech",
  image: "/images/website-review/teleqo-tech-project.png",
  imageAlt: "The Teleqo Tech website on a laptop",
  title: "Teleqo Tech",
  subtitle: "Luxury safari website redesigned.",
  ctaLabel: "Visit live site",
  href: "https://example.com",
};

export const workReview = {
  id: "teleqo-tech-review",
  avatar: "/images/home/ayoa-client-avatar.png",
  logo: "/images/home/ayoa-client-logo.png",
  logoAlt: "Teleqo Tech",
  logoWidth: 62,
  logoHeight: 23,
  quote:
    "I would highly recommend CreativePixels, they were excellent throughout the process of designing and developing our new website.",
  name: "James Brian",
  role: "Teleqo Tech, Founder",
  rating: 5,
};
