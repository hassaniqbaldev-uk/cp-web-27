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
  ClipboardList,
  LifeBuoy,
  Mail,
  Monitor,
  MessageSquare,
  Palette,
  Phone,
  TrendingUp,
  UserRoundCheck,
  Workflow,
} from "lucide-react";
import {
  HiChartBar,
  HiChatBubbleOvalLeftEllipsis,
  HiCircleStack,
  HiOutlineBookOpen,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCloud,
  HiOutlineCog6Tooth,
  HiOutlineComputerDesktop,
  HiOutlineCurrencyPound,
  HiOutlineDocumentChartBar,
  HiOutlineDocumentDuplicate,
  HiOutlineDocumentText,
  HiOutlineEnvelopeOpen,
  HiOutlineFolder,
  HiOutlineIdentification,
  HiOutlineMapPin,
  HiOutlineNewspaper,
  HiOutlinePrinter,
  HiOutlineShoppingCart,
  HiOutlineSignal,
  HiOutlineUserGroup,
  HiOutlineWrenchScrewdriver,
  HiOutlineXCircle,
  HiShoppingBag,
  HiShoppingCart,
  HiUsers,
  HiWindow,
  HiLink,
} from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaShopify, FaWebflow, FaWordpress } from "react-icons/fa6";
import {
  LuBot,
  LuChartNoAxesCombined,
  LuCircleUserRound,
  LuCoins,
  LuFileText,
  LuFiles,
  LuFolderCode,
  LuLocateFixed,
  LuMailOpen,
  LuMeh,
  LuMonitor,
  LuMonitorPlay,
  LuNavigation,
  LuNotebookText,
  LuPlug,
  LuScrollText,
  LuSearchCheck,
  LuShieldCheck,
  LuSiren,
  LuTarget,
  LuToggleLeft,
  LuTriangleAlert,
} from "react-icons/lu";
import { SiWoo } from "react-icons/si";
import {
  RiFileEditFill,
  RiShieldUserLine,
  RiSuitcaseLine,
} from "react-icons/ri";
import {
  TbArrowAutofitHeight,
  TbChartBarPopular,
  TbCircleSquare,
  TbLayoutDashboardFilled,
  TbMessageCircleStar,
  TbProgressCheck,
  TbRobot,
  TbRouteSquare2,
  TbSend,
  TbSettings,
  TbShare,
  TbStack2,
  TbTargetArrow,
  TbUser,
} from "react-icons/tb";

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

export const workReviewProject = {
  id: "casa-botanica",
  image: "/images/common/casabotanica-work-reviews-img.png",
  imageAlt: "Casa Botanica website homepage",
  title: "Casa Botanica",
  subtitle: "Luxury safari website redesigned.",
  ctaLabel: "Visit live site",
  href: "https://example.com",
};

export const workReviewTestimonial = {
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
};

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

export const customAppHeroStats = [
  {
    id: "price",
    icon: "/images/services/smokey-carter-icon-custom-app-hero.png",
    iconAlt: "Smokey Carter",
    width: 45,
    height: 52,
    iconClassName: "w-[45px] h-[52px]",
    value: "From £5,000",
    description: "First release in 4 to 10 weeks",
  },
  {
    id: "code",
    icon: "/images/services/code-icon-custom-app-hero.png",
    iconAlt: "",
    width: 51,
    height: 50,
    iconClassName: "w-[51px] h-[50px]",
    value: "You own the code",
    description: "Staged payments, no lock-in",
  },
  {
    id: "discovery",
    icon: "/images/services/lola-blake-icon-custom-app-hero.png",
    iconAlt: "Lola Blake",
    width: 54,
    height: 54,
    iconClassName: "w-[54px] h-[54px]",
    value: "Discovery first",
    description: "£750 Sprint, Build-Credited",
  },
];

export const customAppHeroHighlights = [
  { id: "years", icon: HiOutlineCalendarDays, text: "12+ years in business" },
  { id: "own-work", icon: HiOutlineBriefcase, text: "You own the work" },
  {
    id: "fixed-price",
    icon: HiOutlineCurrencyPound,
    text: "Fixed price before we start",
  },
  {
    id: "locations",
    icon: HiOutlineMapPin,
    text: "Working with businesses in the UK, US and Australia",
  },
];

export const webDesignHeroStats = [
  {
    id: "price",
    icon: "/images/services/t-icon-web-design-hero.png",
    iconAlt: "",
    width: 210,
    height: 205,
    iconClassName: "w-[52px] h-auto",
    value: "From £1,500",
    description: "Websites live in 3 to 4 weeks",
  },
  {
    id: "ownership",
    icon: "/images/services/casabotanica-icon-web-design-hero.png",
    iconAlt: "Casa Botanica",
    width: 260,
    height: 152,
    iconClassName: "w-[65px] h-auto",
    value: "You own the site",
    description: "Domain, content and code",
  },
  {
    id: "guarantee",
    icon: "/images/services/ivy-duke-icon-web-design-hero.png",
    iconAlt: "Ivy & Duke",
    width: 272,
    height: 133,
    iconClassName: "w-[68px] h-auto",
    value: "3-month guarantee",
    description: "Anything not right is fixed free",
  },
];

export const webDesignNeeds = [
  {
    id: "redesign",
    title: "A redesign fits when:",
    description:
      "The message is unclear, enquiries go missing, or the platform gets in the way of your team.",
    cta: { label: "Plan a redesign", href: "/contact" },
    image: "/images/services/redesign-web-design-needs.png",
    imageWidth: 758,
    imageHeight: 638,
    imageAlt: "Safari tour website redesign",
    className: "bg-[#F4E6D9]",
  },
  {
    id: "new-site",
    title: "A new site fits when:",
    description:
      "You’re launching a new business, or you’ve outgrown your existing website platform.",
    cta: { label: "Plan a new site", href: "/contact" },
    image: "/images/services/new-site-web-design-needs.png",
    imageWidth: 758,
    imageHeight: 638,
    imageAlt: "Casa Botanica villa website",
    className: "bg-[#D2DBDB]",
  },
  {
    id: "online-store",
    title: "An online store fits when:",
    description:
      "You’re selling online and need a properly built, scalable e-commerce store.",
    cta: { label: "Plan my store", href: "/contact" },
    image: "/images/services/online-store-web-design-needs.png",
    imageWidth: 758,
    imageHeight: 638,
    imageAlt: "Ivy & Duke dog bed shop website",
    className: "bg-[#F2F4E6]",
  },
];

export const webDesignIncluded = [
  {
    id: "strategy",
    title: "Strategy and structure",
    description: "[Answer TBC]",
  },
  {
    id: "ux",
    title: "UX and content hierarchy",
    description: "[Answer TBC]",
  },
  {
    id: "design",
    title: "Custom design",
    description: "[Answer TBC]",
  },
  {
    id: "development",
    title: "Development and CMS",
    description: "[Answer TBC]",
  },
  {
    id: "seo",
    title: "SEO and performance foundations",
    description: "[Answer TBC]",
  },
  {
    id: "integrations",
    title: "Integrations and accessibility",
    description: "[Answer TBC]",
  },
];

export const webDesignProcess = [
  {
    id: "understand",
    icon: HiOutlineMapPin,
    label: "Week 1",
    title: "Understand",
    description:
      "We review your current site, goals & what customers need to find.",
  },
  {
    id: "shape",
    icon: HiOutlineSignal,
    label: "Week 1 to 2",
    title: "Shape",
    description: "Page structure and wireframes, agreed before any design.",
  },
  {
    id: "design-build",
    icon: HiOutlineWrenchScrewdriver,
    label: "Weeks 2 to 6",
    title: "Design & build",
    description:
      "Full design, then a working site you can review as it’s built.",
  },
  {
    id: "launch",
    icon: HiOutlineBookOpen,
    label: "Week 6 to 8",
    title: "Launch",
    description: "Content moved, redirects set, team trained, site live.",
  },
];

export const webDesignPlatforms = [
  {
    id: "wordpress",
    name: "WordPress",
    icon: FaWordpress,
    description:
      "Flexible and widely used, great for content-led sites and teams who edit often. We build with Elementor where your team wants to drag and drop.",
    bestFor: ["Marketing sites.", "Blogs and resources.", "WooCommerce."],
    cta: { label: "Is WordPress right for us?", href: "/contact" },
  },
  {
    id: "shopify",
    name: "Shopify",
    icon: FaShopify,
    description: "[Copy TBC]",
    bestFor: ["[Copy TBC]"],
    cta: { label: "Is Shopify right for us?", href: "/contact" },
  },
  {
    id: "webflow",
    name: "Webflow",
    icon: FaWebflow,
    description: "[Copy TBC]",
    bestFor: ["[Copy TBC]"],
    cta: { label: "Is Webflow right for us?", href: "/contact" },
  },
];

export const webDesignPricingPlans = [
  {
    id: "focused-website",
    name: "Focused website",
    prefix: "From",
    price: "£1,500",
    timeline: "3 to 4 weeks.",
    youGet:
      "Up to 5 pages, mobile-first design, contact forms, SEO setup, training.",
    bestFor: "Small businesses and new launches.",
    ctaLabel: "Get started",
    ctaHref: "/contact",
  },
  {
    id: "business-website",
    name: "Business website",
    prefix: "From",
    price: "£3,500",
    timeline: "6 to 8 weeks.",
    youGet:
      "Custom design, full content structure, blog or case studies, integrations, migration with redirects.",
    bestFor: "Redesigns of growing business sites.",
    ctaLabel: "Get a website quote",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "online-store",
    name: "Online store",
    prefix: "From",
    price: "£3,500",
    timeline: "8 to 12 weeks.",
    youGet:
      "Shopify or WooCommerce, product setup, payments, shipping, email flows.",
    bestFor: "Brands selling online.",
    ctaLabel: "Plan my store",
    ctaHref: "/contact",
  },
];

export const uiUxHeroStats = [
  {
    id: "price",
    icon: "/images/services/t-icon-web-design-hero.png",
    iconAlt: "",
    width: 210,
    height: 205,
    iconClassName: "w-[52px] h-auto",
    value: "From £1,500",
    description: "UX redesigns in 3 to 4 weeks",
  },
  {
    id: "wireframes",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "Wireframes first",
    description: "Approved before visual design",
  },
  {
    id: "delivery",
    icon: "/images/services/ndifo-icon-ui-ux-hero.png",
    iconAlt: "Ndifo Safari",
    width: 264,
    height: 160,
    iconClassName: "w-[66px] h-auto",
    value: "One-Team Delivery",
    description: "No handover gaps",
  },
];

export const uiUxHeroTools = [
  {
    id: "figma",
    icon: "/images/services/figma-icon-ui-ux-hero.png",
    iconAlt: "Figma",
  },
  {
    id: "illustrator",
    icon: "/images/services/illustrator-icon-ui-ux-hero.png",
    iconAlt: "Adobe Illustrator",
  },
  {
    id: "photoshop",
    icon: "/images/services/photoshop-icon-ui-ux-hero.png",
    iconAlt: "Adobe Photoshop",
  },
  {
    id: "affinity",
    icon: "/images/services/affinity-icon-ui-ux-hero.png",
    iconAlt: "Affinity",
  },
  {
    id: "canva",
    icon: "/images/services/canva-icon-ui-ux-hero.png",
    iconAlt: "Canva",
  },
];

export const uiUxNeeds = [
  {
    id: "audit",
    title: "A UX audit fits when:",
    description:
      "Your site or store gets traffic, but people drop out at a step and you don’t know why.",
    cta: { label: "Get a UX audit", href: "/contact" },
  },
  {
    id: "redesign",
    title: "A UX redesign fits when:",
    description:
      "You know which journey is broken (checkout, booking, sign-up) and want it designed properly.",
    cta: { label: "A UX redesign", href: "/contact" },
  },
  {
    id: "product",
    title: "Product UX fits when:",
    description: "You’re building or improving an app, portal or SaaS product.",
    cta: { label: "About product", href: "/contact" },
  },
];

export const uiUxFlowIssues = [
  { id: "value-prop", icon: LuMeh, title: "Unclear\nvalue prop" },
  { id: "cta", icon: LuToggleLeft, title: "Weak\nCTA" },
  { id: "navigation", icon: LuNavigation, title: "Navigation\nconfusion" },
  { id: "dropoff", icon: LuTriangleAlert, title: "High\ndropoff" },
];

export const uiUxIncluded = [
  {
    id: "journeys",
    title: "User journeys and IA",
    description:
      "How people arrive, what they need to decide, and the shortest route to do it.",
  },
  {
    id: "wireframes",
    title: "Wireframes and prototypes",
    description: "[Answer TBC]",
  },
  {
    id: "interface",
    title: "Interface systems",
    description: "[Answer TBC]",
  },
  {
    id: "interaction",
    title: "Interaction and states",
    description: "[Answer TBC]",
  },
];

export const uiUxProcess = [
  {
    id: "review",
    icon: TbMessageCircleStar,
    label: "Week 1",
    title: "Review",
    description:
      "Analytics, heatmaps and session recordings show where people drop out.",
  },
  {
    id: "map",
    icon: HiOutlineMapPin,
    label: "Week 1",
    title: "Map",
    description: "We map the current journey and agree the new one with you.",
  },
  {
    id: "wireframe",
    icon: RiShieldUserLine,
    label: "Week 2",
    title: "Wireframe",
    description: "The new flow in grey boxes, approved before visual design.",
  },
  {
    id: "design",
    icon: TbCircleSquare,
    label: "Weeks 3 to 4",
    title: "Design & hand over",
    description:
      "Final UI with every state, built by our developers or handed to yours.",
  },
];

export const uiUxPricingPlans = [
  {
    id: "ux-audit",
    name: "UX audit",
    prefix: "From",
    price: "£500",
    suffix: "credited against\na redesign.",
    timeline: "1 week.",
    youGet:
      "Review of one key journey, video walkthrough, prioritised fix list.",
    bestFor: "A site or store losing people at one step.",
    ctaLabel: "Get a UX audit",
    ctaHref: "/contact",
  },
  {
    id: "ux-redesign",
    name: "UX redesign",
    prefix: "From",
    price: "£1,500",
    timeline: "3 to 4 weeks.",
    youGet:
      "Journey map, wireframes, UI for the key flows, developer-ready Figma files.",
    bestFor: "Fixing checkout, booking or sign-up flows.",
    ctaLabel: "Plan my UX",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "product-ux",
    name: "Product UX",
    prefix: "From",
    price: "£3,000",
    timeline: "6 to 10 weeks.",
    youGet:
      "Research, user flows, wireframes, full UI, design system, prototype.",
    bestFor: "Apps, portals and SaaS products.",
    ctaLabel: "Talk about my product",
    ctaHref: "/contact",
  },
];

export const seoHeroStats = [
  {
    id: "price",
    icon: "/images/services/t-icon-web-design-hero.png",
    iconAlt: "",
    width: 210,
    height: 205,
    iconClassName: "w-[52px] h-auto",
    value: "£500 a month",
    description: "Rolling monthly, no lock-in",
  },
  {
    id: "rankings",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "Rankings kept",
    description: "Through redesigns and migrations",
  },
  {
    id: "enquiries",
    icon: "/images/services/smokey-carter-icon-custom-app-hero.png",
    iconAlt: "Smokey Carter",
    width: 45,
    height: 52,
    iconClassName: "w-[45px] h-[52px]",
    value: "Enquiry-Focused",
    description: "Not just rankings",
  },
];

export const seoHeroPopovers = [
  {
    id: "aeo",
    title: "AEO",
    href: "/contact",
    image: "/images/services/aeo-popover-seo-hero.png",
    className: "top-[55px] left-[28px]",
    orientation: "bottom",
  },
  {
    id: "geo",
    title: "GEO",
    href: "/contact",
    image: "/images/services/geo-popover-seo-hero.png",
    className: "top-[198px] left-[559px]",
    orientation: "bottom",
  },
  {
    id: "seo",
    title: "SEO",
    href: "/contact",
    image: "/images/services/seo-popover-seo-hero.png",
    className: "top-[458px] left-[552px]",
    orientation: "top",
  },
];

export const seoHeroCards = [
  {
    id: "monthly",
    title: "Monthly SEO from",
    price: "£300.",
    description: "Measured against a baseline we agree at the start",
    className: "top-[-28px] left-[455px]",
  },
  {
    id: "audit",
    title: "SEO audit from",
    price: "£500.",
    description: "Measured against a baseline we agree at the start",
    className: "top-[356px] left-0",
  },
];

export const seoNeeds = [
  {
    id: "audit",
    title: "An SEO audit fits:",
    description:
      "You’re getting little from search and want to know why, with a plan you can act on.",
    cta: { label: "Get an SEO audit", href: "/contact" },
  },
  {
    id: "monthly",
    title: "Monthly SEO fits:",
    description:
      "You know search can bring you work and want steady growth you can measure.",
    cta: { label: "Start monthly SEO", href: "/contact" },
  },
  {
    id: "migration",
    title: "Migration SEO fits:",
    description:
      "You’re getting little from search and want to know why, with a plan you can act on.",
    cta: { label: "Safe migration", href: "/contact" },
  },
];

export const seoMonthly = [
  {
    id: "keyword-map",
    icon: HiOutlineDocumentText,
    title: "Keyword and page map",
    description:
      "Every search mapped to one page, so pages stop competing with each other.",
  },
  {
    id: "tech-audit",
    icon: HiOutlineDocumentText,
    title: "Tech audit with priorities",
    description:
      "What people search, how much, and which searches actually turn into enquiries or sales.",
  },
  {
    id: "performance",
    icon: HiOutlineDocumentText,
    title: "Monthly performance",
    description:
      "What we did, what moved, and the enquiries it brought in. One page, plain English.",
  },
];

export const seoProcess = [
  {
    id: "demand",
    icon: HiOutlineMapPin,
    title: "Demand",
    description:
      "What people search for, how much, and which searches actually turn into work.",
    label: "Month 1",
    className: "",
  },
  {
    id: "architecture",
    icon: HiOutlineMapPin,
    title: "Architecture",
    description:
      "One page per search, with the site structure and internal links to match.",
    label: "Month 1",
    className: "mt-[185px] -ml-[95px]",
  },
  {
    id: "content",
    icon: HiOutlineMapPin,
    title: "Content",
    description:
      "New and improved pages written to answer each search properly.",
    label: "Month 2 onwards",
    className: "mt-[185px] -ml-[20px]",
  },
  {
    id: "measurement",
    icon: HiOutlineMapPin,
    title: "Measurement",
    description:
      "Enquiries and sales from search, tracked against the baseline.",
    label: "Every month",
    className: "-ml-[71px]",
  },
];

export const seoFormServices = [
  "SEO audit",
  "Local SEO",
  "Growth SEO",
  "Ecommerce SEO",
  "Migration SEO",
];

export const seoPricingPlans = [
  {
    id: "local-seo",
    name: "Local SEO",
    prefix: "From",
    price: "£500",
    suffix: "/ Month",
    timeline: "Rolling monthly",
    youGet:
      "Google Business Profile, local pages, citations, reviews plan, monthly report",
    bestFor: "One location, a handful of services",
    ctaLabel: "Start local SEO",
    ctaHref: "/contact",
  },
  {
    id: "growth-seo",
    name: "Growth SEO",
    prefix: "From",
    price: "£750",
    suffix: "/ Month",
    timeline: "Rolling monthly",
    youGet:
      "Page map, technical fixes, new and improved pages each month, AI search, monthly report",
    bestFor: "Service businesses competing nationally",
    ctaLabel: "Get my SEO plan",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "ecommerce-seo",
    name: "Ecommerce SEO",
    prefix: "From",
    price: "£1,000",
    suffix: "/ Month",
    timeline: "Rolling monthly",
    youGet:
      "Category and product page SEO, technical and feed fixes, content, monthly report",
    bestFor: "Shopify and WooCommerce stores",
    ctaLabel: "Grow my store",
    ctaHref: "/contact",
  },
];

export const aiHeroStats = [
  {
    id: "price",
    icon: "/images/services/t-icon-web-design-hero.png",
    iconAlt: "",
    width: 210,
    height: 205,
    iconClassName: "w-[52px] h-auto",
    value: "From £1,500",
    description: "First workflow live in 2 to 4 weeks",
  },
  {
    id: "review",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "Human review",
    description: "Wherever judgement matters",
  },
  {
    id: "ownership",
    icon: "/images/services/smokey-carter-icon-custom-app-hero.png",
    iconAlt: "Smokey Carter",
    width: 45,
    height: 52,
    iconClassName: "w-[45px] h-[52px]",
    value: "Data Ownership",
    description: "In your accounts, documented",
  },
];

export const aiHeroTools = [
  {
    id: "deepseek",
    image: "/images/services/deepseek-icon-ai-hero.png",
    imageAlt: "DeepSeek",
    size: 118,
    className: "top-[37px] left-[14px] w-[118px]",
    glowClassName: "bg-[#3078FF]",
  },
  {
    id: "claude",
    image: "/images/services/claude-icon-ai-hero.png",
    imageAlt: "Claude",
    size: 118,
    className: "top-[20px] left-[408px] w-[118px]",
    glowClassName: "bg-[#D89777]",
  },
  {
    id: "chatgpt",
    image: "/images/services/chatgpt-icon-ai-hero.png",
    imageAlt: "ChatGPT",
    size: 140,
    className: "top-[299px] left-[391px] w-[140px]",
    glowClassName: "bg-[#5C897E]",
  },
];

export const aiNeeds = [
  {
    id: "workflow",
    icon: TbRouteSquare2,
    title: "A workflow fits when:",
    description:
      "Your team repeats the same steps between tools every day: copying, chasing, re‑typing.",
    cta: { label: "Automate one workflow", href: "/contact" },
  },
  {
    id: "agent",
    icon: TbRobot,
    title: "An AI agent fits when:",
    description:
      "The work needs reading or writing: sorting enquiries, drafting replies, answering questions from your documents.",
    cta: { label: "Add an AI agent", href: "/contact" },
    featured: true,
  },
  {
    id: "systems",
    icon: TbShare,
    title: "Connected systems fit when:",
    description:
      "Your team repeats the same steps across tools daily: copying, chasing, re‑typing.",
    cta: { label: "Connect my systems", href: "/contact" },
  },
];

export const aiAutomate = [
  {
    id: "workflow",
    title: "Workflow automation",
    description:
      "Triggers, transforms and deliveries across your tools, using n8n, Make, Zapier or custom code.",
  },
  {
    id: "crm",
    title: "CRM and API integrations",
    description:
      "Orders, leads, invoices and records moving between systems without anyone re‑typing them.",
  },
  {
    id: "agents",
    title: "AI\nagents",
    description:
      "Triage, drafting, classification and answering, with a human review step wherever it matters.",
  },
  {
    id: "knowledge",
    title: "Document and knowledge",
    description:
      "Systems that answer from your own documents, and reports generated from your data.",
  },
];

export const aiResult = {
  tabs: [
    {
      id: "before",
      label: "Before",
      steps: [
        { id: "data", icon: TbStack2, title: "[Copy TBC]", text: "[Copy TBC]" },
        {
          id: "generate",
          icon: TbArrowAutofitHeight,
          title: "[Copy TBC]",
          text: "[Copy TBC]",
        },
        { id: "review", icon: TbUser, title: "[Copy TBC]", text: "[Copy TBC]" },
        {
          id: "reports",
          icon: TbSend,
          title: "[Copy TBC]",
          text: "[Copy TBC]",
        },
      ],
    },
    {
      id: "after",
      label: "After",
      steps: [
        { id: "data", icon: TbStack2, title: "Lab data in", text: "Trigger" },
        {
          id: "generate",
          icon: TbArrowAutofitHeight,
          title: "Auto generate",
          text: "Automated",
        },
        {
          id: "review",
          icon: TbUser,
          title: "Human review",
          text: "Human check",
        },
        {
          id: "reports",
          icon: TbSend,
          title: "Reports out",
          text: "Delivered",
        },
      ],
    },
  ],
  stat: {
    value: "14 hrs / week saved",
    description: "Reports in 1 day, not 3",
  },
  quote: {
    text: "We went from waiting days for reports to having reviewed reports ready in a single day.",
    author: "Alex Carter, Operations Lead, VitaLab",
  },
  cta: { label: "Tell us what’s not being found", href: "/contact" },
};

export const aiSafetyTools = [
  {
    id: "slack",
    icon: "/images/services/slack-icon-ai-safety.png",
    iconAlt: "Slack",
  },
  {
    id: "google-drive",
    icon: "/images/services/google-drive-icon-ai-safety.png",
    iconAlt: "Google Drive",
  },
  {
    id: "notion",
    icon: "/images/services/notion-icon-ai-safety.png",
    iconAlt: "Notion",
  },
];

export const aiSafetySteps = [
  {
    id: "agent",
    icon: LuBot,
    iconClassName: "bg-blue/15 text-blue",
    title: "Agent",
    text: "Suggests",
    className: "",
  },
  {
    id: "human",
    icon: TbUser,
    iconClassName: "bg-dark-pink/15 text-dark-pink",
    title: "Human",
    text: "Reviews",
    className: "ml-[133px]",
  },
  {
    id: "action",
    icon: TbProgressCheck,
    iconClassName: "bg-orange/15 text-orange",
    title: "Action",
    text: "Approved",
    className: "ml-[267px]",
  },
];

export const aiSafetyTiles = [
  {
    id: "claude",
    image: "/images/services/claude-tile-ai-safety.png",
    imageAlt: "Claude",
  },
  {
    id: "chatgpt",
    image: "/images/services/chatgpt-tile-ai-safety.png",
    imageAlt: "ChatGPT",
  },
];

export const aiFormServices = [
  "Workflow automation",
  "CRM and API integrations",
  "AI agents",
  "Document and knowledge",
  "Automation programme",
];

export const aiPricingPlans = [
  {
    id: "first-workflow",
    name: "First workflow",
    prefix: "From",
    price: "£1,500",
    suffix: "/ Month",
    timeline: "2 to 4 weeks",
    youGet:
      "One process mapped and automated across your tools, tested and documented",
    bestFor: "One painful, repetitive job",
    ctaLabel: "Scope my first workflow",
    ctaHref: "/contact",
  },
  {
    id: "ai-agent",
    name: "AI agent or document automation",
    prefix: "From",
    price: "£3,000",
    suffix: "/ Month",
    timeline: "4 to 6 weeks",
    youGet:
      "An agent or RAG system built on your documents, with human review built in",
    bestFor: "Triage, drafting, answering from your knowledge",
    ctaLabel: "Plan an AI agent",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "automation-programme",
    name: "Automation programme",
    prefix: "From",
    price: "£5,000",
    suffix: "all one-off",
    timeline: "Phased over 2 to 3 months",
    youGet: "3 to 5 workflows across a team, plus integrations and reporting",
    bestFor: "A team running on manual work",
    ctaLabel: "Plan a programme",
    ctaHref: "/contact",
  },
];

export const growthHeroStats = [
  {
    id: "price",
    icon: "/images/services/t-icon-web-design-hero.png",
    iconAlt: "",
    width: 210,
    height: 205,
    iconClassName: "w-[52px] h-auto",
    value: "£300 a month",
    description: "Rolling, stop with notice",
  },
  {
    id: "other-sites",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "Other-Built Sites",
    description: "We take them on too",
  },
  {
    id: "rate",
    icon: "/images/services/smokey-carter-icon-custom-app-hero.png",
    iconAlt: "Smokey Carter",
    width: 45,
    height: 52,
    iconClassName: "w-[45px] h-[52px]",
    value: "£75 an hour",
    description: "Clear agency rate on every plan",
  },
];

export const growthNeeds = [
  {
    id: "care",
    icon: TbShare,
    title: "Care fits when:",
    description: "[Copy TBC]",
    cta: { label: "Start with Care", href: "#growth-pricing" },
    image: "/images/services/care-growth-needs.png",
    imageAlt: "Care plan website",
  },
  {
    id: "grow",
    icon: TbShare,
    title: "Grow fits when:",
    description:
      "You want it to get better every month: conversion fixes, new sections, content changes.",
    cta: { label: "Start with Grow", href: "#growth-pricing" },
    image: "/images/services/grow-growth-needs.png",
    imageAlt: "Grow plan website",
  },
  {
    id: "scale",
    icon: TbShare,
    title: "Scale fits when:",
    description: "[Copy TBC]",
    cta: { label: "Start with Scale", href: "#growth-pricing" },
    image: "/images/services/scale-growth-needs.png",
    imageAlt: "Scale plan website",
  },
];

export const growthMonth = [
  {
    id: "review",
    label: "Week 1",
    title: "Review",
    description:
      "Last month’s numbers against where you started. What moved, what didn’t, what we learned.",
  },
  {
    id: "plan",
    label: "Week 1",
    title: "Plan",
    description:
      "The month’s priorities agreed with you: fixes, updates and one or two improvements.",
  },
  {
    id: "ship",
    label: "Weeks 2–3",
    title: "Ship",
    description:
      "Prioritised items built and checked on a staging link before they go live.",
  },
  {
    id: "report",
    label: "Week 4",
    title: "Report",
    description:
      "A one-page report in plain English: what we did, what changed, what’s next.",
  },
];

export const growthChecks = [
  {
    id: "left",
    className: "",
    items: [
      {
        id: "technical",
        icon: LuSearchCheck,
        iconClassName: "bg-dark-pink",
        title: "Technical health check",
      },
      {
        id: "seo",
        icon: LuFolderCode,
        iconClassName: "bg-orange",
        title: "SEO Performance",
      },
    ],
  },
  {
    id: "right",
    className: "mt-[280px] ml-[467px]",
    items: [
      {
        id: "ux",
        icon: LuCircleUserRound,
        iconClassName: "bg-blue",
        title: "UX & Conversion",
      },
      {
        id: "content",
        icon: LuFileText,
        iconClassName: "bg-text-body",
        title: "Content & Competitors",
      },
    ],
  },
];

export const growthTimeline = [
  {
    id: "month-1",
    label: "Month 1",
    text: "Health check, updates and the urgent fixes.",
  },
  {
    id: "month-3",
    label: "Month 3",
    text: "Speed improvements and tracking set up properly.",
  },
  {
    id: "month-6",
    label: "Month 6",
    text: "A new section or landing page.",
  },
  {
    id: "month-9",
    label: "Month 9",
    text: "Conversion changes on the key pages.",
  },
  {
    id: "month-12",
    label: "Month 12",
    text: "Result, e.g. “Enquiries up X% on the same traffic.”",
  },
];

export const growthPricingDetails = [
  { key: "hours", label: "Hours", icon: HiOutlineClock },
  { key: "covered", label: "What’s covered", icon: HiOutlineDocumentText },
  { key: "extras", label: "Extras", icon: HiOutlineUserGroup },
  { key: "response", label: "Urgent response", icon: LuSiren },
];

export const growthPricingPlans = [
  {
    id: "care",
    name: "Care",
    prefix: "From",
    price: "£300",
    suffix: "/ Month",
    hours: "Up to 4",
    covered:
      "Updates, security, backups, uptime and performance monitoring, small fixes.",
    extras: "Monthly report · Priority fixes · Staging reviews.",
    response: "Next working day.",
    ctaLabel: "Start with Care",
    ctaHref: "/contact",
  },
  {
    id: "grow",
    name: "Grow",
    prefix: "From",
    price: "£750",
    suffix: "/ Month",
    hours: "Up to 10",
    covered:
      "Everything in Care, plus conversion improvements, new sections and content changes.",
    extras:
      "CRO changes shipped monthly · Analytics review · Quarterly roadmap.",
    response: "Same working day.",
    ctaLabel: "Start with Grow",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "scale",
    name: "Scale",
    prefix: "From",
    price: "£1,500",
    suffix: "/ Month",
    hours: "From 20",
    covered:
      "A standing development and growth allocation for stores and products that change every month.",
    extras:
      "Named developer · SEO or paid included by scope · Weekly check-ins.",
    response: "Within 4 hours",
    ctaLabel: "Start with Scale",
    ctaHref: "/contact",
  },
];

export const growthFormServices = ["Care plan", "Grow plan", "Scale plan"];

export const croHeroStats = [
  {
    id: "ivy-duke",
    icon: "/images/services/t-icon-web-design-hero.png",
    iconAlt: "",
    width: 210,
    height: 205,
    iconClassName: "w-[52px] h-auto",
    value: "Ivy & Duke",
    description: "Revenue +15% in the first\nfull week after launch",
  },
  {
    id: "implement",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "We implement",
    description: "We put the recommendations\ninto action.",
  },
  {
    id: "price",
    icon: "/images/services/smokey-carter-icon-custom-app-hero.png",
    iconAlt: "Smokey Carter",
    width: 45,
    height: 52,
    iconClassName: "w-[45px] h-[52px]",
    value: "From £750",
    description: "Fixed-price CRO review",
  },
];

export const croHeroCards = [
  {
    id: "conversions",
    icon: HiChartBar,
    title: "Higher\nConversions",
    value: "+46%",
    valueClassName: "text-dark-pink",
    className: "top-[-16px] left-0",
  },
  {
    id: "sales",
    icon: HiShoppingCart,
    title: "More sales\nand traffic",
    value: "+32%",
    valueClassName: "text-orange",
    className: "top-[303px] left-[39px]",
  },
  {
    id: "drop-off",
    icon: HiUsers,
    title: "Lower\nDrop off",
    value: "−28%",
    valueClassName: "text-blue",
    className: "top-[270px] left-[413px]",
  },
];

export const croNeeds = [
  {
    id: "review",
    icon: TbSettings,
    title: "A CRO review\nfits when:",
    description:
      "you have traffic but not enough sales or enquiries, and want to know where they’re lost.",
    className: "",
  },
  {
    id: "ongoing",
    icon: TbSettings,
    title: "Ongoing CRO\nfits when:",
    description:
      "your traffic is steady and you want gains every month, measured against a baseline.",
    className: "mt-[40px]",
  },
  {
    id: "checkout",
    icon: TbSettings,
    title: "A checkout fix\nfits when:",
    description:
      "people reach the basket or checkout and leave, or payments fail.",
    className: "mt-[70px]",
  },
];

export const croProcess = [
  {
    id: "find",
    title: "Find",
    description:
      "Recordings, analytics, forms and the page on a phone show where people drop off.",
  },
  {
    id: "prioritise",
    title: "Prioritise",
    description: "Each fix is ranked by likely impact, confidence and effort.",
  },
  {
    id: "change",
    title: "Change",
    description:
      "We make the changes: layout, messaging, forms, checkout, speed.",
  },
  {
    id: "measure",
    title: "Measure",
    description:
      "Results are read against a baseline agreed before anything changed.",
  },
];

export const croFixes = [
  {
    id: "messaging",
    icon: HiChatBubbleOvalLeftEllipsis,
    iconClassName: "text-orange",
    title: "Messaging\nand hierarchy",
    description:
      "More refined propositions, a clearer and more structured page flow, and stronger, more compelling calls.",
    className: "bg-[#FCEFDE]",
  },
  {
    id: "forms",
    icon: RiFileEditFill,
    iconClassName: "text-dark-pink",
    title: "Forms and\nlead journeys",
    description:
      "Lower effort, clearer fields, better qualification and stronger post-submit flow.",
    className: "bg-[#FCE1EF]",
  },
  {
    id: "ecommerce",
    icon: HiShoppingBag,
    iconClassName: "text-blue",
    title: "Ecommerce\njourneys",
    description:
      "Product, basket and checkout changes that reduce problems without relying on discounts.",
    className: "bg-[#E0EBFF]",
  },
  {
    id: "landing-pages",
    icon: HiWindow,
    iconClassName: "text-[#2FAE6A]",
    title: "Landing\npages",
    description:
      "Better the page saying what the ad promised between ads/search & the destination experience.",
    className: "bg-[#E1F3E8]",
  },
];

export const croCaseStudyStats = [
  {
    id: "google-reviews",
    icon: FcGoogle,
    iconBgClassName: "bg-white/20",
    iconClassName: "",
    value: "0 → 146",
    description: "Google review stars",
  },
  {
    id: "homepage-size",
    icon: HiCircleStack,
    iconBgClassName: "bg-orange/30",
    iconClassName: "text-orange",
    value: "9.4 MB → 0.7 MB",
    description: "Homepage",
  },
  {
    id: "add-ons",
    icon: HiShoppingCart,
    iconBgClassName: "bg-blue/30",
    iconClassName: "text-blue",
    value: "8.3%",
    description: "of orders now include an add-on",
  },
];

export const croFormServices = ["CRO review", "Ongoing CRO", "Checkout fix"];

export const croPricingPlans = [
  {
    id: "cro-review",
    name: "CRO review",
    prefix: "From",
    price: "£750",
    suffix: "fixed",
    timeline: "1 to 2 weeks.",
    youGet:
      "Analytics and recordings review, mobile walk-through, prioritised fix list, a clear report.",
    bestFor: "A second look at a site, checkout or landing page.",
    ctaLabel: "Get a CRO review",
    ctaHref: "/contact",
  },
  {
    id: "ongoing-cro",
    name: "Ongoing CRO",
    prefix: "From",
    price: "£750",
    suffix: "a month, rolling",
    timeline: "Monthly cycles, first measured read at 4 weeks.",
    youGet:
      "Monthly fixes and tests, tracking set up properly, a monthly read against the baseline.",
    bestFor: "Stores and lead-gen sites with steady traffic.",
    ctaLabel: "Start ongoing CRO",
    ctaHref: "/contact",
    featured: true,
  },
];

export const ecommerceHeroStats = [
  {
    id: "ivy-duke",
    icon: "/images/services/ivy-duke-icon-web-design-hero.png",
    iconAlt: "Ivy & Duke",
    width: 272,
    height: 133,
    iconClassName: "w-[68px] h-auto",
    value: "Ivy & Duke",
    description: "Revenue +15% in the first\nweek after our changes",
  },
  {
    id: "trend",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "Trend Furnishings",
    description:
      "Made-to-measure curtains, priced\nlive as customers enter their sizes",
  },
  {
    id: "shopify",
    icon: "/images/services/lola-blake-icon-custom-app-hero.png",
    iconAlt: "Lola Blake",
    width: 54,
    height: 54,
    iconClassName: "size-[54px]",
    value: "Shopify",
    description: "We build both and\nhelp you choose",
  },
];

export const ecommerceNeeds = [
  {
    id: "rebuild",
    icon: TbShare,
    title: "A rebuild fits when:",
    description:
      "Your store works but loses sales: slow, hard to use on a phone, or clumsy to manage.",
    cta: { label: "Plan a rebuild", href: "/contact" },
  },
  {
    id: "migration",
    icon: TbShare,
    title: "A migration fits when:",
    description:
      "You’re outgrowing your platform, or an old build is holding you back.",
    cta: { label: "Plan a migration", href: "/contact" },
  },
];

export const ecommercePlatformRows = [
  { id: "best", label: "Best for" },
  { id: "checkout", label: "Checkout" },
  { id: "logic", label: "Custom product logic" },
  { id: "costs", label: "Running Costs" },
  { id: "recommend", label: "We recommend it when" },
];

export const ecommercePlatforms = [
  {
    id: "shopify",
    name: "Shopify",
    icon: FaShopify,
    iconClassName: "text-[#95BF47]",
    headerClassName: "bg-[linear-gradient(#95BF47_130px,transparent_130px)]",
    buttonClassName: "bg-[#95BF47]",
    values: {
      best: "Brands that want hosting, payments and checkout handled, and a large app ecosystem.",
      checkout:
        "Locked but excellent. Shop Pay, Apple Pay and Google Pay out of the box.",
      logic: "Apps or custom code; some limits on variants.",
      costs: "Monthly plan plus apps and transaction fees.",
      recommend:
        "Speed to market and reliability matter more than deep customisation.",
    },
    cta: { label: "Explore Shopify", href: "/contact" },
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    icon: SiWoo,
    iconClassName: "text-[#9B5C8F]",
    headerClassName: "bg-[linear-gradient(#9B5C8F_130px,transparent_130px)]",
    buttonClassName: "bg-[#9B5C8F]",
    values: {
      best: "Content-heavy stores, unusual product logic, or a business already invested in WordPress.",
      checkout:
        "Fully customisable. Express payments via Stripe and PayPal need setting up properly.",
      logic: "Anything, including measured-to-order pricing and configurators.",
      costs: "Hosting, plugins and maintenance. No platform fee.",
      recommend:
        "The product or content model does not fit a standard catalogue.",
    },
    cta: { label: "Explore WooCommerce", href: "/contact" },
  },
];

// Each option adds points to a platform; the highest total is suggested.
export const platformQuizSteps = [
  {
    id: "products",
    question: "How many products do you sell?",
    optionsClassName: "flex-col",
    options: [
      {
        id: "under-50",
        label: "Under 50",
        className: "flex-none",
        points: { shopify: 1 },
      },
      { id: "50-500", label: "50 to 500", className: "flex-none" },
      {
        id: "500-plus",
        label: "500 to 1000+",
        className: "flex-none",
        points: { woocommerce: 1 },
      },
    ],
  },
  {
    id: "custom",
    question: "Do your products need\ncustom options or pricing?",
    optionsClassName: "flex-col",
    options: [
      {
        id: "yes",
        label: "Yes",
        className: "flex-none uppercase",
        points: { woocommerce: 2 },
      },
      {
        id: "no",
        label: "No",
        className: "flex-none uppercase",
        points: { shopify: 1 },
      },
    ],
  },
  {
    id: "content",
    question: "How much content do you\npublish (blog, guides)?",
    optionsClassName: "",
    options: [
      {
        id: "a-lot",
        label: "A lot",
        className: "uppercase",
        points: { woocommerce: 2 },
      },
      { id: "some", label: "Some", className: "uppercase" },
      {
        id: "very-little",
        label: "Very little",
        className: "uppercase",
        points: { shopify: 1 },
      },
    ],
  },
  {
    id: "hosting",
    question: "Do you want to manage hosting\nand updates yourself?",
    optionsClassName: "flex-col",
    options: [
      {
        id: "happy-to",
        label: "Happy to",
        className: "flex-none uppercase",
        points: { woocommerce: 1 },
      },
      {
        id: "rather-not",
        label: "Rather not",
        className: "flex-none uppercase",
        points: { shopify: 2 },
      },
    ],
  },
];

export const platformQuizResults = [
  {
    id: "shopify",
    icon: FaShopify,
    iconClassName: "text-[#95BF47]",
    title: "We’d suggest Shopify because:",
    text: "It’s easy to set up and manage, great for product-focused stores, handles hosting, updates and security, and scales well as your business grows.",
    cta: { label: "Talk it through with us", href: "/contact" },
  },
  {
    id: "woocommerce",
    icon: SiWoo,
    iconClassName: "text-[#9B5C8F]",
    title: "We’d suggest WooCommerce because:",
    text: "It’s fully customisable, handles unusual product logic and pricing, suits content-heavy stores, and has no platform fee.",
    cta: { label: "Talk it through with us", href: "/contact" },
  },
];

export const ecommerceIncluded = [
  {
    id: "discovery",
    icon: TbLayoutDashboardFilled,
    title: "Product discovery",
    description:
      "Collections, filters, search & merchandising that help people find the right product fast.",
  },
  {
    id: "product-pages",
    icon: TbLayoutDashboardFilled,
    title: "Product pages that convert",
    description:
      "Images, options, sizing, delivery and returns where the buyer needs them, on a phone first.",
  },
  {
    id: "checkout",
    icon: TbLayoutDashboardFilled,
    title: "Basket and checkout",
    description:
      "Express payments, fewer fields, clear delivery costs, and every step tested on real phones.",
  },
];

export const ecommerceFeaturedWork = {
  image: "/images/home/casa-work-img.jpg",
  imageAlt: "The Casa Botanica Panama homepage on a laptop",
  tags: ["Featured", "Web", "Wordpress", "Migration"],
  title: "Casa Botanica Panama",
  description:
    "A luxury villa brand moved off Squarespace and rebuilt around the stay, the photography and one clear route to book.",
  facts: [
    { label: "Role", value: "Design, build, migration" },
    { label: "Platform", value: "WordPress" },
  ],
  cta: { label: "View case study", href: "/work/casabotanica" },
};

export const ecommerceWork = [
  {
    id: "ndifo",
    image: "/images/services/ndifo-custom-app-casestudy.png",
    imageAlt: "The Ndifo Safari website on a laptop",
    title: "Ndifo Safari",
    subtitle: "Luxury safari website redesigned.",
    cta: { label: "Visit live site", href: "/work" },
  },
  {
    id: "fultons",
    image: "/images/services/fultons-custom-app-casestudy.png",
    imageAlt: "The Fultons Jewellery website on a laptop",
    title: "Fultons Jewellery",
    subtitle: "Luxury safari website redesigned.",
    cta: { label: "Visit live site", href: "/work" },
  },
];

export const ecommerceFormServices = [
  "Launch store",
  "Growth store",
  "Store migration",
];

export const ecommercePricingPlans = [
  {
    id: "launch-store",
    name: "Launch store",
    prefix: "From",
    price: "£3,500",
    timeline: "4 to 6 weeks.",
    youGet:
      "Shopify or WooCommerce, up to [X] products, payments, shipping, core emails, training.",
    bestFor: "New brands and small catalogues.",
    ctaLabel: "Plan my store",
    ctaHref: "/contact",
  },
  {
    id: "growth-store",
    name: "Growth store",
    prefix: "From",
    price: "£6,000",
    timeline: "8 to 12 weeks.",
    youGet:
      "Custom design, product filters and discovery, custom product logic, integrations, email flows.",
    bestFor: "Growing stores that need more than a theme.",
    ctaLabel: "Plan a growth",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "store-migration",
    name: "Store migration",
    prefix: "From",
    price: "£2,500",
    timeline: "6 to 10 weeks.",
    youGet:
      "Products, customers, orders and URLs moved, redirects set, rankings protected, then a redesign if needed.",
    bestFor: "Stores leaving another platform or an old build.",
    ctaLabel: "Plan a migration",
    ctaHref: "/contact",
  },
];

export const wordpressHeroStats = [
  {
    id: "no-templates",
    icon: "/images/services/ivy-duke-icon-web-design-hero.png",
    iconAlt: "Ivy & Duke",
    width: 272,
    height: 133,
    iconClassName: "w-[68px] h-auto",
    value: "No Templates",
    description: "Custom design every time",
  },
  {
    id: "easy-edit",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "Easy to edit",
    description: "Elementor or block editor",
  },
  {
    id: "support",
    icon: "/images/services/lola-blake-icon-custom-app-hero.png",
    iconAlt: "Lola Blake",
    width: 54,
    height: 54,
    iconClassName: "size-[54px]",
    value: "3 months support",
    description: "Included with every build",
  },
];

export const wordpressFit = [
  {
    id: "good-fit",
    icon: RiSuitcaseLine,
    title: "Good fit:",
    points: [
      "Content-led marketing sites.",
      "Complex page and content structures.",
      "WooCommerce.",
      "Teams that need familiar editing.",
      "Businesses that value a large ecosystem.",
    ],
    cta: { label: "Discuss your Wordpress site", href: "/contact" },
    featured: true,
  },
  {
    id: "another-route",
    icon: RiSuitcaseLine,
    title: "Consider another route",
    points: [
      "A highly bespoke application workflow may belong in a custom app.",
      "A simple design-led marketing site may be better served by Webflow.",
    ],
    note: "We recommend the route that creates the least long-term problems.",
    cta: {
      label: "See custom software",
      href: "/services/custom-app-development",
    },
  },
];

export const wordpressServices = [
  {
    id: "design-build",
    icon: LuScrollText,
    iconClassName: "text-dark-pink",
    title: "Custom design\nand build",
    description:
      "Original designs built around your content and how your team edits it. No pre-made themes.",
    className: "bg-dark-pink/10",
  },
  {
    id: "woocommerce",
    icon: TbTargetArrow,
    iconClassName: "text-orange",
    title: "WooCommerce\nstore",
    description:
      "Stores with checkout, payments and product setup. See Ecommerce for store pricing.",
    className: "bg-orange/10",
  },
  {
    id: "functionality",
    icon: LuChartNoAxesCombined,
    iconClassName: "text-dark-pink",
    title: "Custom\nfunctionality",
    description:
      "Plugins, custom post types and integrations when off-the-shelf plugins don’t fit.",
    className: "bg-dark-pink/10",
  },
  {
    id: "learndash",
    icon: LuMonitorPlay,
    iconClassName: "text-blue",
    title: "LearnDash and\nmembership",
    description:
      "Courses, member areas and gated content, with payments built in.",
    className: "bg-blue/10",
  },
];

export const wordpressProcess = [
  {
    id: "plan",
    title: "Plan the content\nstructure",
    description: "Pages, content types and how everything links together.",
    className: "col-start-1 row-start-1 justify-end gap-[41px] pr-[176px]",
    cardClassName: "w-[225px]",
    numberClassName: "mt-[49px]",
  },
  {
    id: "build",
    title: "Build the editing\nexperience",
    description:
      "Templates and blocks your team can use without breaking the design.",
    className: "col-start-1 row-start-2 justify-end gap-[60px] pr-[73px]",
    cardClassName: "w-[267px]",
    numberClassName: "mt-[6px]",
  },
  {
    id: "test",
    title: "Test performance\nand integrations",
    description:
      "Speed, forms, tracking and every integration checked before launch.",
    className:
      "col-start-2 row-start-2 flex-row-reverse justify-end gap-[60px] pl-[73px]",
    cardClassName: "w-[262px]",
    numberClassName: "mt-[6px]",
  },
  {
    id: "hand-over",
    title: "Hand over,\nguarantee, support",
    description: "Training, then 3 months of support included after delivery.",
    className:
      "col-start-2 row-start-1 flex-row-reverse justify-end gap-[41px] pl-[176px]",
    cardClassName: "w-[249px]",
    numberClassName: "mt-[49px]",
  },
];

export const wordpressFormServices = [
  "Focused Wordpress site",
  "Custom Wordpress build",
  "Membership / learning site",
];

export const wordpressPricingPlans = [
  {
    id: "focused",
    name: "Focused Wordpress site",
    prefix: "From",
    price: "£1,500",
    timeline: "3 to 4 weeks.",
    youGet:
      "Custom design, up to [X] pages, Elementor or block editor, SEO setup, training.",
    bestFor: "Small business sites.",
    ctaLabel: "Get started",
    ctaHref: "/contact",
  },
  {
    id: "custom",
    name: "Custom Wordpress build",
    prefix: "From",
    price: "£3,500",
    timeline: "6 to 8 weeks.",
    youGet:
      "Full custom design, content structure, custom post types, integrations, migration with redirects.",
    bestFor: "Growing businesses with lots of content.",
    ctaLabel: "Tell us what you need",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "membership",
    name: "Membership / learning site",
    prefix: "From",
    price: "£4,000",
    timeline: "8 to 12 weeks.",
    youGet:
      "LearnDash or membership setup, payments, member areas, course structure.",
    bestFor: "Course creators, clubs, member organisations.",
    ctaLabel: "Plan my membership site",
    ctaHref: "/contact",
  },
];

export const woocommerceHeroStats = [
  {
    id: "trend-furnishings",
    icon: "/images/services/ivy-duke-icon-web-design-hero.png",
    iconAlt: "Ivy & Duke",
    width: 272,
    height: 133,
    iconClassName: "w-[68px] h-auto",
    value: "Trend Furnishings",
    description:
      "Made-to-measure curtains, priced\nlive as customers enter their sizes",
  },
  {
    id: "ivy-duke",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "Ivy & Duke",
    description: "Revenue +15% in the first week\nafter our changes",
  },
  {
    id: "price",
    icon: "/images/services/lola-blake-icon-custom-app-hero.png",
    iconAlt: "Lola Blake",
    width: 54,
    height: 54,
    iconClassName: "size-[54px]",
    value: "From £3,500",
    description: "Stores built around your\nproducts",
  },
];

export const woocommerceFit = [
  {
    id: "good-fit",
    icon: RiSuitcaseLine,
    title: "Good fit",
    points: [
      "Products need configurators, custom sizes or unusual variants.",
      "Trade accounts, memberships or content and commerce on one site.",
      "The business already runs on WordPress.",
      "You want no platform fee and full control of the checkout.",
    ],
  },
  {
    id: "another-route",
    icon: RiSuitcaseLine,
    title: "Consider another route",
    points: [
      "A standard catalogue where speed to market matters.",
      "You want hosting, payments and checkout handled for you.",
      "The team prefers a locked-down admin.",
    ],
    dark: true,
    showNote: true,
  },
];

export const woocommerceChecks = [
  {
    id: "store-url",
    icon: HiLink,
    iconClassName: "bg-blue",
    title: "Enter Your\nstore URL",
  },
  {
    id: "hardest-product",
    icon: LuTarget,
    iconClassName: "bg-dark-pink",
    title: "Hardest\nproduct to sell",
  },
];

export const woocommerceIncluded = [
  {
    id: "product-logic",
    icon: LuTarget,
    iconClassName: "bg-dark-pink",
    title: "Product logic (first)",
    description:
      "Variable products, configurators, made-to-measure pricing, add-ons and trade price tiers.",
  },
  {
    id: "theme",
    icon: LuTarget,
    iconClassName: "bg-orange",
    title: "Custom theme",
    description:
      "Designed for the range, built lean so it stays fast under a large catalogue.",
  },
  {
    id: "checkout",
    icon: LuTarget,
    iconClassName: "bg-blue",
    title: "Checkout and payments",
    description:
      "Stripe, PayPal, Apple Pay and Google Pay set up properly, fewer fields, tested on phones.",
  },
  {
    id: "performance",
    icon: LuTarget,
    iconClassName: "bg-dark-pink",
    title: "Performance and security",
    description:
      "Caching, image handling, updates and backups, so the store stays quick and safe.",
  },
];

export const woocommerceFormServices = [
  "WooCommerce store",
  "Custom product store",
  "Migration to WooCommerce",
];

export const woocommercePricingDetails = [
  { key: "timeline", label: "Timeline", icon: HiOutlineClock },
  { key: "youGet", label: "You get", icon: HiOutlineDocumentText },
];

export const woocommercePricingPlans = [
  {
    id: "store",
    name: "WooCommerce store",
    prefix: "From",
    price: "£3,500",
    timeline: "6 to 8 weeks.",
    youGet:
      "Custom theme, products set up, payments, shipping, core emails, training.",
    ctaLabel: "Talk through your store",
    ctaHref: "/contact",
  },
  {
    id: "custom-product",
    name: "Custom product store",
    prefix: "From",
    price: "£6,000",
    timeline: "8 to 12 weeks.",
    youGet:
      "Everything in the store tier, plus made-to-measure pricing, configurators, add-ons or trade accounts.",
    ctaLabel: "Show hardest product",
    ctaHref: "#woocommerce-check",
    featured: true,
  },
  {
    id: "migration",
    name: "Migration to\nWooCommerce",
    prefix: "From",
    price: "£2,500",
    timeline: "6 to 10 weeks.",
    youGet:
      "Products, customers, orders and URLs moved from Shopify, Magento or Squarespace, redirects set.",
    ctaLabel: "Plan my migration",
    ctaHref: "/contact",
  },
];

export const shopifyHeroStats = [
  {
    id: "price",
    icon: "/images/services/ivy-duke-icon-web-design-hero.png",
    iconAlt: "Ivy & Duke",
    width: 272,
    height: 133,
    iconClassName: "w-[68px] h-auto",
    value: "From £3,500",
    description: "Shopify stores built for your range",
  },
  {
    id: "running-costs",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "Running costs",
    description: "Every app named and costed",
  },
  {
    id: "ownership",
    icon: "/images/services/lola-blake-icon-custom-app-hero.png",
    iconAlt: "Lola Blake",
    width: 54,
    height: 54,
    iconClassName: "size-[54px]",
    value: "You own it",
    description: "Store and theme code are\nyours",
  },
];

export const shopifyBuild = [
  {
    id: "theme",
    icon: RiSuitcaseLine,
    title: "Custom\ntheme design:",
    description:
      "Designed for the range, not adapted from a marketplace theme with the logo swapped.",
  },
  {
    id: "integrations",
    icon: RiSuitcaseLine,
    title: "Integrations:",
    description:
      "Stock, fulfilment, accounting, email and marketplaces connected properly.",
  },
  {
    id: "checkout",
    icon: RiSuitcaseLine,
    title: "Checkout and\npayments:",
    description:
      "Shopify Payments, Shop Pay, express payments and discount logic, tested on real phones.",
  },
];

export const shopifyBuildPoints = [
  "Online Store 2.0 sections your team can edit.",
  "Klaviyo email flows.",
  "Product data and filters.",
  "Apps only where needed.",
];

export const shopifyProjects = [
  {
    id: "superfeet",
    image: "/images/services/superfeet-shopify-projects.png",
    imageWidth: 1120,
    imageHeight: 1026,
    imageAlt: "Superfeet online store pages",
    accent: "#FFB81C",
    points: [
      {
        icon: "problem",
        title: "The problem:",
        description: "[one line, ideally in the client’s words]",
      },
      {
        icon: "built",
        title: "What we built:",
        description: "[one line, ideally in the client’s words]",
      },
    ],
    quote: {
      name: "Peter jones",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus. Vivamus libero diam, hendrerit et elit sit amet, pulvinar blandit",
    },
    ctaLabel: "See all our ecommerce work",
    href: "/work",
  },
  {
    id: "project-2",
    image: "/images/services/project-2-shopify-projects.png",
    imageWidth: 1120,
    imageHeight: 1026,
    imageAlt: "Shopify store project",
    accent: "#FFB81C",
    points: [
      {
        icon: "problem",
        title: "The problem:",
        description: "[one line, ideally in the client’s words]",
      },
      {
        icon: "built",
        title: "What we built:",
        description: "[one line, ideally in the client’s words]",
      },
    ],
    quote: {
      name: "Peter jones",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus. Vivamus libero diam, hendrerit et elit sit amet, pulvinar blandit",
    },
    ctaLabel: "See all our ecommerce work",
    href: "/work",
  },
  {
    id: "project-3",
    image: "/images/services/project-3-shopify-projects.png",
    imageWidth: 1120,
    imageHeight: 1026,
    imageAlt: "Shopify store project",
    accent: "#FFB81C",
    points: [
      {
        icon: "problem",
        title: "The problem:",
        description: "[one line, ideally in the client’s words]",
      },
      {
        icon: "built",
        title: "What we built:",
        description: "[one line, ideally in the client’s words]",
      },
    ],
    quote: {
      name: "Peter jones",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus. Vivamus libero diam, hendrerit et elit sit amet, pulvinar blandit",
    },
    ctaLabel: "See all our ecommerce work",
    href: "/work",
  },
  {
    id: "project-4",
    image: "/images/services/project-4-shopify-projects.png",
    imageWidth: 1120,
    imageHeight: 1026,
    imageAlt: "Shopify store project",
    accent: "#FFB81C",
    points: [
      {
        icon: "problem",
        title: "The problem:",
        description: "[one line, ideally in the client’s words]",
      },
      {
        icon: "built",
        title: "What we built:",
        description: "[one line, ideally in the client’s words]",
      },
    ],
    quote: {
      name: "Peter jones",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus. Vivamus libero diam, hendrerit et elit sit amet, pulvinar blandit",
    },
    ctaLabel: "See all our ecommerce work",
    href: "/work",
  },
];

export const shopifyPricingDetails = [
  { key: "timeline", label: "Timeline", icon: HiOutlineClock },
  { key: "bestFor", label: "For", icon: HiOutlineDocumentText },
  { key: "includes", label: "Includes", icon: HiOutlineUserGroup },
];

export const shopifyPricingPlans = [
  {
    id: "starter",
    name: "Starter store",
    prefix: "From",
    price: "£3,500",
    timeline: "3 to 4 weeks.",
    bestFor: "New brands and smaller ranges.",
    includes:
      "Premium theme set up and styled to your brand · Key pages · Products loaded · Payments and shipping · SEO basics.",
    ctaLabel: "Get started",
    ctaHref: "/contact",
  },
  {
    id: "growth",
    name: "Growth store",
    prefix: "From",
    price: "£6,000",
    timeline: "6 to 8 weeks.",
    bestFor: "Growing brands with a bigger range or custom needs.",
    includes:
      "Custom theme designed for your range · Filters and product data · Integrations · Klaviyo flows · Speed work.",
    ctaLabel: "Tell us what you need",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "migration",
    name: "Migration to Shopify",
    prefix: "From",
    price: "£2,500",
    timeline: "8 to 12 weeks.",
    bestFor: "Stores moving from WooCommerce, Magento or Squarespace.",
    includes:
      "Products, customers, orders, redirects and SEO moved · Theme rebuilt or restyled · Rankings checked after launch.",
    ctaLabel: "Plan my migration",
    ctaHref: "/contact",
  },
];

export const shopifyFormServices = [
  "Starter store",
  "Growth store",
  "Migration to Shopify",
];

export const googleAdsHeroStats = [
  {
    id: "pages",
    icon: "/images/services/ivy-duke-icon-web-design-hero.png",
    iconAlt: "Ivy & Duke",
    width: 272,
    height: 133,
    iconClassName: "w-[68px] h-auto",
    value: "In-House Pages",
    description: "By the same team",
  },
  {
    id: "tracking",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "Tracking in week one",
    description: "Conversions set up properly",
  },
  {
    id: "reporting",
    icon: "/images/services/lola-blake-icon-custom-app-hero.png",
    iconAlt: "Lola Blake",
    width: 54,
    height: 54,
    iconClassName: "size-[54px]",
    value: "Clear Reporting",
    description: "Every month",
  },
];

export const googleAdsFit = [
  {
    id: "good-fit",
    title: "Good fit:",
    description:
      "People already search for what you sell, you can handle more enquiries, and you have at least [£500 to £1,000] a month for ad spend on top of our fee.",
    cta: { label: "Get audit", href: "/contact" },
  },
  {
    id: "also-a-fit",
    title: "Also a fit:",
    description:
      "You’re already running ads, but you’re struggling to understand which campaigns are actually generating quality enquiries and bringing real potential customers.",
    cta: { label: "Get audit", href: "/contact" },
  },
  {
    id: "not-a-fit",
    title: "Not a fit:",
    description:
      "Nobody searches for your product yet, or the budget is under [£500] a month. We’ll suggest SEO or Meta ads instead.",
    cta: { label: "Get audit", href: "/contact" },
  },
];

export const googleAdsProcess = [
  {
    id: "keywords",
    icon: LuNotebookText,
    title: "Keywords\nwith intent",
    description:
      "Searches that mean someone wants to buy or enquire, grouped tightly so each ad group has one clear message.",
  },
  {
    id: "ads",
    icon: LuMonitor,
    title: "Ads that state\nthe offer",
    description:
      "Price, proof and the next step in the ad itself, so the click is already half qualified.",
  },
  {
    id: "landing-page",
    icon: LuFiles,
    title: "A landing page\nper ad group",
    description:
      "Built with the campaign, using the same components as the site. Reduced header, one primary action, short form.",
  },
  {
    id: "tracking",
    icon: LuMailOpen,
    title: "Tracking past\nthe click",
    description:
      "Conversion events tagged with budget, fit and timing where the form captures them, fed back into bidding.",
  },
];

export const googleAdsResults = [
  {
    id: "sunbox",
    image: "/images/services/sunbox-google-ads-results.png",
    imageAlt: "Sunbox Campers website pages",
    title: "Sunbox Campers",
    description:
      "Campervan conversions with search ads and enquiries tracked in HubSpot.",
    stats: [
      {
        id: "conversion",
        icon: LuChartNoAxesCombined,
        value: "37",
        label: "Conversion",
      },
      {
        id: "enquiries",
        icon: LuCircleUserRound,
        value: "142",
        label: "Enquiries",
      },
      {
        id: "result",
        icon: HiOutlineCalendarDays,
        value: "30 Days",
        label: "Result after",
      },
    ],
  },
  {
    id: "casabotanica",
    image: "/images/services/casabotanica-google-ads-results.png",
    imageAlt: "Casa Botanica Panama website pages",
    title: "Casa Botanica Panama",
    description:
      "Casa Botanica Panama Google Ads with bookings tracked end to end.",
    stats: [
      {
        id: "conversion",
        icon: HiOutlineCalendarDays,
        value: "28",
        label: "Conversion",
      },
      {
        id: "enquiries",
        icon: LuCircleUserRound,
        value: "96",
        label: "Enquiries",
      },
      {
        id: "result",
        icon: HiOutlineCalendarDays,
        value: "30 Days",
        label: "Result after",
      },
    ],
  },
];

export const googleAdsChecks = [
  {
    id: "traffic",
    icon: LuLocateFixed,
    iconClassName: "bg-dark-pink",
    title: "More relevant\ntraffic",
  },
  {
    id: "cpc",
    icon: LuCoins,
    iconClassName: "bg-orange",
    title: "Lower CPC",
  },
  {
    id: "conversions",
    icon: TbChartBarPopular,
    iconClassName: "bg-blue",
    title: "Better\nconversions",
  },
  {
    id: "roi",
    icon: LuShieldCheck,
    iconClassName: "bg-[#3A3A36]",
    title: "Higher ROI",
  },
];

export const googleAdsPricingDetails = [
  { key: "adSpend", label: "Ad spend", icon: HiOutlineClock },
  { key: "bestFor", label: "For", icon: HiOutlineDocumentText },
  { key: "includes", label: "Includes", icon: HiOutlineUserGroup },
];

export const googleAdsPricingPlans = [
  {
    id: "starter",
    name: "Starter",
    prefix: "From",
    price: "£500",
    suffix: "a month",
    priceNote: "ad spend up to £2,000 a month",
    adSpend: "Up to [£2,000] a month.",
    bestFor: "Local and niche services.",
    includes:
      "Search campaign · Keyword and negative keyword lists · Conversion tracking · Monthly report.",
    ctaLabel: "Book a 15-min call",
    ctaHref: "/contact",
  },
  {
    id: "growth",
    name: "Growth",
    prefix: "From",
    price: "£750",
    suffix: "a month",
    priceNote: "(up to £5,000)",
    adSpend: "Up to [£5,000] a month.",
    bestFor: "Growing businesses and online stores.",
    includes:
      "Everything in Starter · Shopping or Performance Max · Remarketing · Monthly call.",
    ctaLabel: "Book a 15-min call",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "scale",
    name: "Scale",
    prefix: "From",
    price: "£1,000",
    suffix: "a month",
    priceNote: "(£5,000+)",
    adSpend: "[£5,000+] a month.",
    bestFor: "Bigger budgets, several campaigns.",
    includes:
      "Everything in Growth · Several campaigns and locations · Landing page testing · Fortnightly check-ins.",
    ctaLabel: "Book a 15-min call",
    ctaHref: "/contact",
  },
];

export const googleAdsFormServices = ["Starter", "Growth", "Scale"];

export const metaAdsHeroStats = [
  {
    id: "creative",
    icon: "/images/services/ivy-duke-icon-web-design-hero.png",
    iconAlt: "Ivy & Duke",
    width: 272,
    height: 133,
    iconClassName: "w-[68px] h-auto",
    value: "Creative Included",
    description: "In every plan",
  },
  {
    id: "pages",
    icon: "/images/services/leaf-icon-ui-ux-hero.png",
    iconAlt: "",
    width: 232,
    height: 232,
    iconClassName: "w-[58px] h-auto",
    value: "In-House Pages",
    description: "By the same team",
  },
  {
    id: "reply",
    icon: "/images/services/lola-blake-icon-custom-app-hero.png",
    iconAlt: "Lola Blake",
    width: 54,
    height: 54,
    iconClassName: "size-[54px]",
    value: "Human Reply",
    description: "Within one working day",
  },
];

export const metaAdsProcess = [
  {
    id: "offer",
    title: "One specific offer:",
    description:
      "Something a stranger would genuinely want: a free review, a sample, a practical guide or a first session. A real reason to act, not a generic “get in touch”.",
  },
  {
    id: "creative",
    title: "Creative that names problem:",
    description:
      "We open with the problem your customer has, before we mention what you sell. Static and video ads that feel familiar to them, with founder-led video where it builds trust.",
  },
  {
    id: "page",
    title: "A page that continues the ad:",
    description:
      "Same headline and offer as the ad, so people know they’re in the right place. A short form, three fields at most, on a page built for the campaign instead of your homepage.",
  },
  {
    id: "follow-up",
    title: "Follow-up that happens:",
    description:
      "An instant confirmation email, then a real person replies within one working day. A short email sequence keeps the lead warm until they’re ready to talk.",
  },
];

export const metaAdsFit = [
  {
    id: "worth-it",
    title: "Usually worth it",
    points: [
      "Ecommerce brands with a visual product and a margin that supports paid acquisition.",
      "Local services with a clear first offer: lessons, consultations, clinics.",
      "Lead generation with a specific deliverable, like a review or a guide.",
      "Remarketing to people who visited the site or store.",
    ],
    featured: true,
  },
  {
    id: "not",
    title: "Usually not",
    points: [
      "High-value B2B with a long cycle and no first offer: LinkedIn or search usually does better.",
      "A store with a checkout that leaks: fix that first, then buy traffic.",
      "“Brand awareness” with nothing to measure.",
    ],
    note: "We will tell you which it is before you spend.",
  },
];

export const metaAdsResults = [
  {
    id: "sunbox",
    image: "/images/services/sunbox-meta-ads-results.png",
    imageAlt: "Sunbox Campers website pages",
    title: "Sunbox Campers",
    description:
      "Campervan conversions with search ads and enquiries tracked in HubSpot.",
    stats: [
      {
        id: "conversion",
        icon: LuChartNoAxesCombined,
        value: "37",
        label: "Conversion",
      },
      {
        id: "enquiries",
        icon: LuCircleUserRound,
        value: "142",
        label: "Enquiries",
      },
      {
        id: "result",
        icon: HiOutlineCalendarDays,
        value: "30 Days",
        label: "Result after",
      },
    ],
  },
  {
    id: "casabotanica",
    image: "/images/services/casabotanica-meta-ads-results.png",
    imageAlt: "Casa Botanica Panama website pages",
    title: "Casa Botanica Panama",
    description:
      "Casa Botanica Panama Google Ads with bookings tracked end to end.",
    stats: [
      {
        id: "conversion",
        icon: HiOutlineCalendarDays,
        value: "28",
        label: "Conversion",
      },
      {
        id: "enquiries",
        icon: LuCircleUserRound,
        value: "96",
        label: "Enquiries",
      },
      {
        id: "result",
        icon: HiOutlineCalendarDays,
        value: "30 Days",
        label: "Result after",
      },
    ],
  },
];

export const metaAdsPricingDetails = shopifyPricingDetails;

export const metaAdsPricingPlans = [
  {
    id: "starter",
    name: "Starter",
    prefix: "From",
    price: "£500",
    suffix: "a month",
    timeline: "3 to 4 weeks.",
    bestFor: "Local services with one offer.",
    includes:
      "One campaign · Ad copy and static creative · Pixel and conversion tracking · Monthly report.",
    ctaLabel: "Book a 15-min call",
    ctaHref: "/contact",
  },
  {
    id: "growth",
    name: "Growth",
    prefix: "From",
    price: "£750",
    suffix: "a month",
    timeline: "6 to 8 weeks.",
    bestFor: "Online stores and growing businesses.",
    includes:
      "Everything in Starter · Short video direction · Remarketing · Creative tested weekly · Monthly call.",
    ctaLabel: "Book a 15-min call",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "scale",
    name: "Scale",
    prefix: "From",
    price: "£1,000",
    suffix: "a month",
    timeline: "8 to 12 weeks.",
    bestFor: "Several offers, products or locations.",
    includes:
      "Everything in Growth · Several campaigns · Landing page testing · Fortnightly check-ins.",
    ctaLabel: "Book a 15-min call",
    ctaHref: "/contact",
  },
];

export const metaAdsFormServices = ["Starter", "Growth", "Scale"];

export const brandingHeroStats = [
  {
    id: "price",
    icon: "/images/services/golf-icon-branding-hero.png",
    iconAlt: "Golf client logo",
    width: 147,
    height: 173,
    iconClassName: "w-auto h-[52px]",
    value: "From £1,000",
    description: "Brand refresh in 2 to 3 weeks",
  },
  {
    id: "ownership",
    icon: "/images/services/loop-icon-branding-hero.png",
    iconAlt: "Loop client logo",
    width: 214,
    height: 103,
    iconClassName: "w-[64px] h-auto",
    value: "Full Ownership",
    description: "Logo, guidelines, templates",
  },
  {
    id: "approval",
    icon: "/images/services/h-icon-branding-hero.png",
    iconAlt: "Client monogram logo",
    width: 216,
    height: 220,
    iconClassName: "w-[54px] h-auto",
    value: "Direction Approval",
    description: "Before we build the full system",
  },
];

export const brandingNeeds = [
  {
    id: "refresh",
    title: "A refresh fits when:",
    description:
      "people already recognise your brand, but it looks dated or inconsistent across channels.",
  },
  {
    id: "rebrand",
    title: "A rebrand fits when:",
    description:
      "the business has changed, you’re moving upmarket, or the brand no longer matches who you sell to.",
  },
  {
    id: "new-brand",
    title: "A new brand fits when:",
    description: "you’re launching, or you’ve been getting by with a DIY logo.",
  },
];

export const brandingProcess = [
  {
    id: "positioning",
    icon: HiOutlineMapPin,
    title: "Positioning",
    description:
      "We agree who you’re for, what makes you different and how you should sound.",
    className: "top-[140px] left-[-10px] z-10",
  },
  {
    id: "direction",
    icon: HiOutlineSignal,
    title: "Direction",
    description:
      "You see one or two clear directions and approve one before we go further.",
    className: "top-[320px] left-[245px] z-20",
  },
  {
    id: "system",
    icon: HiOutlineWrenchScrewdriver,
    title: "The system",
    description:
      "Logo, colour, type, imagery, tone of voice and guidelines, built to work together.",
    className: "top-[320px] left-[580px] z-30",
  },
  {
    id: "rollout",
    icon: HiOutlineBookOpen,
    title: "Rollout",
    description:
      "We apply it to your website, socials and key documents so it’s consistent from day one.",
    className: "top-[100px] right-[-15px] z-20",
  },
];

export const brandingCaseStudies = [
  {
    id: "loop",
    image: "/images/services/loop-branding-case-study.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Loop Asset Management brand identity",
    accent: "#62DCC3",
    title: "What we did and where it was rolled out.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus.",
    quote: {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus. Vivamus libero diam, hendrerit et elit sit amet, pulvinar blandit",
    },
    ctaLabel: "See the full project",
    href: "/work/loop",
  },
  {
    id: "project-2",
    image: "/images/services/project-2-branding-case-study.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Brand identity project",
    accent: "#62DCC3",
    title: "What we did and where it was rolled out.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus.",
    quote: {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus. Vivamus libero diam, hendrerit et elit sit amet, pulvinar blandit",
    },
    ctaLabel: "See the full project",
    href: "/work",
  },
  {
    id: "project-3",
    image: "/images/services/project-3-branding-case-study.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Brand identity project",
    accent: "#62DCC3",
    title: "What we did and where it was rolled out.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus.",
    quote: {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus. Vivamus libero diam, hendrerit et elit sit amet, pulvinar blandit",
    },
    ctaLabel: "See the full project",
    href: "/work",
  },
  {
    id: "project-4",
    image: "/images/services/project-4-branding-case-study.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Brand identity project",
    accent: "#62DCC3",
    title: "What we did and where it was rolled out.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus.",
    quote: {
      name: "John Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl erat. Mauris ac condimentum risus. Vivamus libero diam, hendrerit et elit sit amet, pulvinar blandit",
    },
    ctaLabel: "See the full project",
    href: "/work",
  },
];

export const brandingIdentityItems = [
  {
    id: "logo-and-mark",
    type: "image",
    title: "Logo and mark",
    description:
      "A primary logo, a simpler mark and versions for small spaces like favicons and social icons.",
    image: "/images/services/logo-mark-branding-identity.png",
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: "Brand mark in orange",
  },
  {
    id: "typography",
    type: "typography",
    title: "Typography",
    description:
      "One or two typefaces with clear rules for headings, body and buttons.",
  },
  {
    id: "colour-palette",
    type: "palette",
    title: "Colour Palette",
    description:
      "A palette with accessible pairings, ready for screen and print.",
    colours: [
      { id: "white", hex: "FFFFFF", className: "bg-white text-black" },
      { id: "black", hex: "000000", className: "bg-black text-white" },
      { id: "orange", hex: "ED572E", className: "bg-[#ED572E] text-white" },
    ],
  },
  {
    id: "imagery",
    type: "image",
    title: "Imagery",
    description:
      "Photo and illustration direction so every image looks like it belongs.",
    image: "/images/services/imagery-branding-identity.png",
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: "3D brand mark rendered in the brand colour",
  },
  {
    id: "layout",
    type: "image",
    title: "Layout",
    description:
      "Grids and spacing rules so every page and document is built the same way.",
    image: "/images/services/layout-branding-identity.png",
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: "Logo construction grid with spacing measurements",
  },
];

export const brandingRollout = [
  {
    id: "guidelines",
    icon: HiOutlineNewspaper,
    title: "Guidelines",
    description:
      "A PDF & a web page: logo use, type, colour, imagery, tone, dos and don’ts.",
    className: "top-0 left-0",
  },
  {
    id: "website-product",
    icon: HiOutlineComputerDesktop,
    title: "Website and product",
    description:
      "The identity applied to your site, store or app, built by the same team.",
    className: "top-[213px] left-[45px]",
  },
  {
    id: "documents-decks",
    icon: HiOutlineDocumentDuplicate,
    title: "Documents and decks",
    description:
      "Proposal, letterhead and presentation templates the team will use.",
    className: "top-[427px] left-[280px]",
  },
  {
    id: "files",
    icon: HiOutlineFolder,
    title: "Files",
    description:
      "SVG, PNG and PDF logos, font files or licences, colour swatches, templates.",
    className: "top-0 right-0",
  },
  {
    id: "social-email",
    icon: HiOutlineEnvelopeOpen,
    title: "Social and email",
    description: "Profile assets, post templates and an email signature.",
    className: "top-[213px] right-[50px]",
  },
  {
    id: "print-signage",
    icon: HiOutlinePrinter,
    title: "Print and signage",
    description:
      "Business cards, brochures, packaging and signage artwork where you need it.",
    className: "top-[427px] right-[284px]",
  },
];

export const brandingSocialPosts = [
  {
    id: "before",
    label: "Before",
    avatar: "/images/services/driveuk-avatar-branding-social.png",
    name: "DriveUk",
    handle: "Drive UK social",
    image: "/images/services/driveuk-before-branding-social.png",
    imageWidth: 610,
    imageHeight: 610,
    imageAlt: "Drive UK pass post before the redesign",
  },
  {
    id: "after",
    label: "After",
    avatar: "/images/services/driveuk-avatar-branding-social.png",
    name: "DriveUk",
    handle: "Drive UK social",
    image: "/images/services/driveuk-after-branding-social.png",
    imageWidth: 610,
    imageHeight: 610,
    imageAlt: "Drive UK pass post after the redesign, on-brand template",
  },
];

export const brandingPricingPlans = [
  {
    id: "brand-refresh",
    name: "Brand refresh",
    prefix: "From",
    price: "£1,000",
    timeline: "2 to 3 weeks.",
    youGet: "Refined logo, colour and type, short guidelines.",
    bestFor: "A recognisable brand that looks dated.",
    ctaLabel: "Book a discovery sprint",
    ctaHref: "/contact",
  },
  {
    id: "full-brand-identity",
    name: "Full brand identity",
    prefix: "From",
    price: "£2,500",
    timeline: "4 to 6 weeks.",
    youGet:
      "Strategy session, logo suite, colour, type, imagery, tone of voice, full guidelines.",
    bestFor: "A rebrand or a new business.",
    ctaLabel: "Get a first-phase estimate",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "identity-rollout",
    name: "Identity + rollout",
    prefix: "From",
    price: "£3,500",
    timeline: "6 to 10 weeks.",
    youGet:
      "Everything in Full, plus website updates, social templates, documents and decks.",
    bestFor: "Software already in use and growing.",
    ctaLabel: "Talk about a roadmap",
    ctaHref: "/contact",
  },
];

export const customAppPricingPlans = [
  {
    id: "discovery-sprint",
    name: "Discovery sprint",
    price: "£750",
    timeline: "1 to 2 weeks.",
    youGet: "Workflow map, clickable prototype, fixed quote for phase one.",
    bestFor: "Not sure what to build yet.",
    ctaLabel: "Book a discovery sprint",
    ctaHref: "/contact",
  },
  {
    id: "first-release",
    name: "First release",
    badge: "Most Popular",
    price: "£5,000",
    timeline: "4 to 10 weeks.",
    youGet:
      "A working web app with logins, core integrations and team training.",
    bestFor: "A clear process to replace.",
    ctaLabel: "Get a first-phase estimate",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "growing-platform",
    name: "Growing platform",
    price: "£750",
    suffix: "a month",
    timeline: "Ongoing.",
    youGet: "New modules, more integrations, reporting and priority support.",
    bestFor: "Software already in use and growing.",
    ctaLabel: "Talk about a roadmap",
    ctaHref: "/contact",
  },
];

export const customAppTechStack = [
  {
    id: "react",
    label: "React",
    logo: "/images/services/react-logo-custom-app-tech-stack.png",
    logoWidth: 106,
    logoHeight: 36,
  },
  {
    id: "nextjs",
    label: "Next.js",
    logo: "/images/services/next-logo-custom-app-tech-stack.png",
    logoWidth: 103,
    logoHeight: 24,
  },
  {
    id: "laravel",
    label: "Laravel",
    logo: "/images/services/laravel-logo-custom-app-tech-stack.png",
    logoWidth: 122,
    logoHeight: 36,
  },
  {
    id: "graphql",
    label: "GraphQL",
    logo: "/images/services/graphql-logo-custom-app-tech-stack.png",
    logoWidth: 125,
    logoHeight: 36,
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    logo: "/images/services/postgresql-logo-custom-app-tech-stack.png",
    logoWidth: 124,
    logoHeight: 20,
  },
  {
    id: "mysql",
    label: "MySQL",
    logo: "/images/services/mysql-logo-custom-app-tech-stack.png",
    logoWidth: 108,
    logoHeight: 57,
  },
  {
    id: "stripe",
    label: "Stripe",
    logo: "/images/services/stripe-logo-custom-app-tech-stack.png",
    logoWidth: 77,
    logoHeight: 32,
  },
  {
    id: "vercel",
    label: "Vercel",
    logo: "/images/services/vercel-logo-custom-app-tech-stack.png",
    logoWidth: 98,
    logoHeight: 24,
  },
];

export const customAppFit = [
  {
    id: "good-fit",
    title: "Good fit if:",
    icon: HiOutlineCheckCircle,
    iconClassName: "text-blue",
    points: [
      {
        id: "copies-data",
        text: "Your team copies data between 3 or more tools every day.",
      },
      {
        id: "plugin-limits",
        text: "You’ve hit the limits of a plugin or SaaS and keep paying for workarounds.",
      },
      {
        id: "customer-login",
        text: "Customers keep asking for a login to see orders, bookings or reports.",
      },
      {
        id: "spreadsheet",
        text: "A process that makes you money only lives in a spreadsheet or someone’s head.",
      },
    ],
    image: "/images/services/integrations-custom-app-fit.png",
    imageWidth: 495,
    imageHeight: 302,
    imageAlt:
      "Your team's account connected to Slack, Salesforce, HubSpot, Gmail, Excel and Notion",
  },
  {
    id: "not-fit",
    title: "Not a fit if:",
    icon: HiOutlineXCircle,
    iconClassName: "text-dark-pink",
    points: [
      {
        id: "off-the-shelf",
        text: "An off-the-shelf tool at £50 a month already does the job. We’ll tell you which one.",
      },
      {
        id: "everything-at-once",
        text: "You need everything built at once with no first phase. We start small on purpose.",
      },
    ],
    cta: { label: "Book a 15-min scoping call", href: "/contact" },
    image: "/images/services/dashboard-custom-app-fit.png",
    imageWidth: 495,
    imageHeight: 304,
    imageAlt:
      "Custom customer portal with bookings, reports, subscriptions and login areas",
  },
];

export const customAppScopingNeeds = [
  {
    id: "current-process",
    text: "How the work happens today, roughly step by step.",
  },
  {
    id: "users",
    text: "Who uses it and what each person needs to see.",
  },
  {
    id: "integrations",
    text: "The tools it needs to connect to.",
  },
  {
    id: "definition-of-done",
    text: "What “done” looks like for the first release.",
  },
];

export const customAppBuildSteps = [
  {
    id: "discovery",
    week: "Week 1",
    title: "Discovery",
    description:
      "We map how the work happens today, who does it and where time is lost.",
    pillClassName: "bg-blue",
  },
  {
    id: "ux-prototype",
    week: "Week 1 to 2",
    title: "UX & prototype",
    description:
      "You click through the key screens before any code is written.",
    pillClassName: "bg-orange",
  },
  {
    id: "architecture",
    week: "Week 2",
    title: "Architecture",
    description:
      "We choose the right stack, data model and integrations for the first release.",
    pillClassName: "bg-dark-pink",
  },
  {
    id: "build-test",
    week: "Weeks 6",
    title: "Build & test",
    description:
      "We build in short rounds you can review, then launch and train your team.",
    pillClassName: "bg-blue",
  },
];

export const customAppCaseStudies = [
  {
    id: "tycoon",
    image: "/images/services/tycoon-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Tycoon enterprise programme website on a laptop",
    tags: ["WordPress"],
    title: "Website redesign for the Tycoon enterprise programme",
    ctaLabel: "See the full project",
    href: "/work/peter-jones-foundation",
  },
  {
    id: "casabotanica",
    image: "/images/services/casabotanica-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Casa Botanica villa website on a laptop",
    tags: ["WordPress", "Custom booking"],
    title: "Boutique villa website with a custom booking system",
    ctaLabel: "See the full project",
    href: "/work/casabotanica",
  },
  {
    id: "ivy-duke",
    image: "/images/services/ivy-duke-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Ivy & Duke dog bed shop website on a laptop",
    tags: ["WooCommerce"],
    title: "Dog bed shop. Revenue +15% in the first week after our CRO changes",
    ctaLabel: "See the full project",
    href: "/work/ivy-duke",
  },
  {
    id: "trend-furnishings",
    image: "/images/services/trend-furnishing-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Trend Furnishings curtain shop website on a laptop",
    tags: ["WooCommerce"],
    title: "Curtain shop with made-to-measure pricing",
    ctaLabel: "See the full project",
    href: "/work/trend-furnishings",
  },
  {
    id: "fultons",
    image: "/images/services/fultons-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Fultons jewellery shop website on a laptop",
    tags: ["WooCommerce"],
    title: "Website Redesign for a Jewellery Shop in Keswick",
    ctaLabel: "See the full project",
    href: "/work/fultons",
  },
  {
    id: "lola-blake",
    image: "/images/services/lola-blake-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Lola Blake nightwear store website on a laptop",
    tags: ["WooCommerce"],
    title: "Nightwear Store Speed Optimisation & Conversion Rate",
    ctaLabel: "See the full project",
    href: "/work/lola-blake",
  },
  {
    id: "smokey-carter",
    image: "/images/services/smokey-carter-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Smokey Carter BBQ rubs and sauces website on a monitor",
    tags: ["WooCommerce"],
    title: "Complete Website Redesign for BBQ Rubs and Sauces Store",
    ctaLabel: "See the full project",
    href: "/work/smokey-carter",
  },
  {
    id: "sunbox",
    image: "/images/services/sunbox-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Sunbox Campers campervan conversion website on a laptop",
    tags: ["WordPress"],
    title: "Campervan conversion website, with lead tracking into HubSpot",
    ctaLabel: "See the full project",
    href: "/work/sunbox",
  },
  {
    id: "biome",
    image: "/images/services/biome-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Pet microbiome testing portal on a laptop",
    tags: ["Laravel", "Custom software"],
    title: "Custom Pet Microbiome Testing and Reporting Portal",
    ctaLabel: "See the full project",
    href: "/work/biome",
  },
  {
    id: "drive-uk",
    image: "/images/services/driveuk-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Drive UK Services website on a laptop",
    tags: ["WordPress", "SEO"],
    title: "Complete Website Redesign for Drive UK Services",
    ctaLabel: "See the full project",
    href: "/work/drive-uk",
  },
  {
    id: "ndifo",
    image: "/images/services/ndifo-custom-app-casestudy.png",
    imageWidth: 1121,
    imageHeight: 766,
    imageAlt: "Ndifo Safari Experiences website on a laptop",
    tags: ["Shopify"],
    title: "Complete Website Redesign for Ndifo Safari Experiences",
    ctaLabel: "See the full project",
    href: "/work/ndifo",
  },
];

export const wordpressCaseStudies = [
  "sunbox",
  "casabotanica",
  "tycoon",
  "drive-uk",
].map((projectId) => customAppCaseStudies.find(({ id }) => id === projectId));

export const customAppSolutions = [
  {
    id: "customer-portals",
    icon: HiOutlineIdentification,
    iconBgClassName: "bg-dark-pink",
    title: "Customer portals",
    description:
      "Secure logins where your customers see orders, documents, bookings and reports.",
    image: null,
    imageWidth: 0,
    imageHeight: 0,
  },
  {
    id: "internal-tools",
    icon: HiOutlineCog6Tooth,
    iconBgClassName: "bg-blue",
    title: "Internal tools",
    description: "[Description TBC]",
    image: null,
    imageWidth: 0,
    imageHeight: 0,
  },
  {
    id: "dashboards-reporting",
    icon: HiOutlineDocumentChartBar,
    iconBgClassName: "bg-orange",
    title: "Dashboards & reporting",
    description: "[Description TBC]",
    image: null,
    imageWidth: 0,
    imageHeight: 0,
  },
  {
    id: "saas-products",
    icon: HiOutlineCloud,
    iconBgClassName: "bg-dark-pink",
    title: "SaaS & digital products",
    description: "[Description TBC]",
    image: null,
    imageWidth: 0,
    imageHeight: 0,
  },
  {
    id: "marketplaces",
    icon: HiOutlineShoppingCart,
    iconBgClassName: "bg-blue",
    title: "Marketplaces & platforms",
    description: "[Description TBC]",
    image: null,
    imageWidth: 0,
    imageHeight: 0,
  },
  {
    id: "apis-integrations",
    icon: LuPlug,
    iconBgClassName: "bg-orange",
    title: "APIs & integrations",
    description: "[Description TBC]",
    image: null,
    imageWidth: 0,
    imageHeight: 0,
  },
];

export const webDesignFaqs = [
  {
    id: "cost",
    question: "How much does a professional website cost?",
    answer: "[Answer TBC]",
  },
  {
    id: "outside-manchester",
    question: "Do you work with businesses outside Manchester?",
    answer: "[Answer TBC]",
  },
  {
    id: "redesign",
    question: "Can you redesign our existing website?",
    answer: "[Answer TBC]",
  },
  {
    id: "seo",
    question: "Is SEO included in a website build?",
    answer: "[Answer TBC]",
  },
  {
    id: "updates",
    question: "Can we update the website ourselves?",
    answer: "[Answer TBC]",
  },
  {
    id: "after-launch",
    question: "What happens after launch?",
    answer: "[Answer TBC]",
  },
  {
    id: "rankings",
    question: "Will we lose our Google rankings?",
    answer: "[Answer TBC]",
  },
  {
    id: "timeline",
    question: "How long does a website take?",
    answer: "[Answer TBC]",
  },
  {
    id: "ownership",
    question: "Who owns the website?",
    answer: "[Answer TBC]",
  },
];

export const uiUxFaqs = [
  {
    id: "difference",
    question: "What is the difference between UX and UI?",
    answer: "[Answer TBC]",
  },
  {
    id: "developers",
    question: "Can you work with our developers?",
    answer: "[Answer TBC]",
  },
  {
    id: "existing",
    question: "Can you redesign an existing product?",
    answer: "[Answer TBC]",
  },
  {
    id: "testing",
    question: "Do you test with real users?",
    answer: "[Answer TBC]",
  },
  {
    id: "audit",
    question: "What do we get from a UX audit?",
    answer: "[Answer TBC]",
  },
  {
    id: "timeline",
    question: "How long does a UX project take?",
    answer: "[Answer TBC]",
  },
  {
    id: "mobile",
    question: "Do you design mobile apps?",
    answer: "[Answer TBC]",
  },
];

export const seoFaqs = [
  {
    id: "timeline",
    question: "How long does SEO take to work?",
    answer: "[Answer TBC]",
  },
  {
    id: "guarantee",
    question: "Do you guarantee rankings?",
    answer: "[Answer TBC]",
  },
  {
    id: "website-build",
    question: "Is SEO included in a website build?",
    answer: "[Answer TBC]",
  },
  {
    id: "rebuild",
    question: "Can you protect rankings during a rebuild?",
    answer: "[Answer TBC]",
  },
  {
    id: "ai-search",
    question: "What about AI search?",
    answer: "[Answer TBC]",
  },
  {
    id: "local",
    question: "Do you do local SEO?",
    answer: "[Answer TBC]",
  },
  {
    id: "content",
    question: "Do you write the content?",
    answer: "[Answer TBC]",
  },
  {
    id: "cancel",
    question: "Can we cancel?",
    answer: "[Answer TBC]",
  },
];

export const aiFaqs = [
  {
    id: "what",
    question: "What can actually be automated?",
    answer: "[Answer TBC]",
  },
  {
    id: "existing-tools",
    question: "Does it work with our existing CRM and tools?",
    answer: "[Answer TBC]",
  },
  {
    id: "security",
    question: "What about security and data?",
    answer: "[Answer TBC]",
  },
  {
    id: "terms",
    question: "Agents, RAG, what do the words mean?",
    answer: "[Answer TBC]",
  },
  {
    id: "first-project",
    question: "How big is a first project?",
    answer: "[Answer TBC]",
  },
  {
    id: "support",
    question: "Do you support it afterwards?",
    answer: "[Answer TBC]",
  },
  {
    id: "tools",
    question: "Which tools do you work with?",
    answer: "[Answer TBC]",
  },
  {
    id: "breaks",
    question: "What happens if an automation breaks?",
    answer: "[Answer TBC]",
  },
  {
    id: "fees",
    question: "Do we need to pay for n8n, Make or Zapier?",
    answer: "[Answer TBC]",
  },
];

export const growthFaqs = [
  {
    id: "other-sites",
    question: "Can you support a site you didn’t build?",
    answer: "[Answer TBC]",
  },
  {
    id: "minimum-term",
    question: "Is there a minimum term?",
    answer: "[Answer TBC]",
  },
  {
    id: "support-vs-project",
    question: "What counts as support versus a project?",
    answer: "[Answer TBC]",
  },
  {
    id: "monitoring",
    question: "Do you monitor uptime and security?",
    answer: "[Answer TBC]",
  },
  {
    id: "urgent",
    question: "How fast do you respond to urgent issues?",
    answer: "[Answer TBC]",
  },
  {
    id: "rollover",
    question: "Do unused hours roll over?",
    answer: "[Answer TBC]",
  },
  {
    id: "hosting",
    question: "Is hosting included?",
    answer: "[Answer TBC]",
  },
  {
    id: "platforms",
    question: "What platforms do you support?",
    answer: "[Answer TBC]",
  },
  {
    id: "switching",
    question: "Can we switch plans?",
    answer: "[Answer TBC]",
  },
];

export const croFaqs = [
  {
    id: "ab-testing",
    question: "Do we need A/B testing?",
    answer: "[Answer TBC]",
  },
  {
    id: "implement",
    question: "Can you implement the recommendations?",
    answer: "[Answer TBC]",
  },
  {
    id: "ecommerce",
    question: "Do you work on ecommerce conversion?",
    answer: "[Answer TBC]",
  },
  {
    id: "speed",
    question: "How quickly will conversion improve?",
    answer: "[Answer TBC]",
  },
  {
    id: "review",
    question: "What do we get from a CRO review?",
    answer: "[Answer TBC]",
  },
  {
    id: "traffic",
    question: "Do we need lots of traffic?",
    answer: "[Answer TBC]",
  },
  {
    id: "developer",
    question: "Will you work with our developer or theme?",
    answer: "[Answer TBC]",
  },
];

export const ecommerceFaqs = [
  {
    id: "cost",
    question: "How much does an ecommerce website cost?",
    answer: "[Answer TBC]",
  },
  {
    id: "platform",
    question: "Shopify or WooCommerce?",
    answer: "[Answer TBC]",
  },
  {
    id: "migrate",
    question: "Can you migrate our existing store?",
    answer: "[Answer TBC]",
  },
  {
    id: "integrations",
    question: "What integrations do you handle?",
    answer: "[Answer TBC]",
  },
  {
    id: "conversion",
    question: "Do you improve conversion after launch?",
    answer: "[Answer TBC]",
  },
  {
    id: "timeline",
    question: "How long does a store take?",
    answer: "[Answer TBC]",
  },
  {
    id: "rankings",
    question: "Will we lose our Google rankings in a migration?",
    answer: "[Answer TBC]",
  },
  {
    id: "products",
    question: "Can you add our products for us?",
    answer: "[Answer TBC]",
  },
];

export const wordpressFaqs = [
  {
    id: "themes",
    question: "Do you use pre-made WordPress themes?",
    answer: "[Answer TBC]",
  },
  {
    id: "elementor",
    question: "Do you work with Elementor?",
    answer: "[Answer TBC]",
  },
  {
    id: "migrate",
    question: "Can you migrate our existing store?",
    answer: "[Answer TBC]",
  },
  {
    id: "maintenance",
    question: "Do you provide WordPress maintenance?",
    answer: "[Answer TBC]",
  },
  {
    id: "ai",
    question: "Can you integrate AI or automation?",
    answer: "[Answer TBC]",
  },
  {
    id: "speed",
    question: "Will our WordPress site be fast?",
    answer: "[Answer TBC]",
  },
  {
    id: "take-over",
    question: "Can you take over our existing WordPress site?",
    answer: "[Answer TBC]",
  },
  {
    id: "plugins",
    question: "Do you build custom plugins?",
    answer: "[Answer TBC]",
  },
];

export const woocommerceFaqs = [
  {
    id: "cost",
    question: "Is WooCommerce cheaper than Shopify?",
    answer: "[Answer TBC]",
  },
  {
    id: "made-to-measure",
    question: "Can you handle made-to-measure pricing?",
    answer: "[Answer TBC]",
  },
  {
    id: "migrate",
    question: "Can you migrate from Shopify?",
    answer: "[Answer TBC]",
  },
  {
    id: "support",
    question: "Do you support the store afterwards?",
    answer: "[Answer TBC]",
  },
  {
    id: "features",
    question: "Can you build custom WooCommerce features?",
    answer: "[Answer TBC]",
  },
  {
    id: "configurators",
    question: "Do you build product configurators?",
    answer: "[Answer TBC]",
  },
  {
    id: "trade",
    question: "Can WooCommerce handle trade and retail pricing?",
    answer: "[Answer TBC]",
  },
  {
    id: "hosting",
    question: "What hosting do you recommend?",
    answer: "[Answer TBC]",
  },
];

export const shopifyFaqs = [
  {
    id: "theme",
    question: "Custom theme or a marketplace theme?",
    answer: "[Answer TBC]",
  },
  {
    id: "running-cost",
    question: "How much does Shopify cost to run each month?",
    answer: "[Answer TBC]",
  },
  {
    id: "timeline",
    question: "How long does a Shopify build take?",
    answer: "[Answer TBC]",
  },
  {
    id: "migrate",
    question: "Can you migrate from WooCommerce or Magento?",
    answer: "[Answer TBC]",
  },
  {
    id: "rankings",
    question: "Will I lose my Google rankings when I move to Shopify?",
    answer: "[Answer TBC]",
  },
  {
    id: "apps",
    question: "Which apps do you use?",
    answer: "[Answer TBC]",
  },
  {
    id: "team",
    question: "Can my team update the store without a developer?",
    answer: "[Answer TBC]",
  },
  {
    id: "checkout",
    question: "Can you customise Shopify checkout and payments?",
    answer: "[Answer TBC]",
  },
  {
    id: "plus",
    question: "Do you work with Shopify Plus?",
    answer: "[Answer TBC]",
  },
  {
    id: "support",
    question: "Do you offer ongoing support?",
    answer: "[Answer TBC]",
  },
];

export const googleAdsFaqs = [
  {
    id: "budget",
    question: "What budget do we need for Google Ads?",
    answer: "[Answer TBC]",
  },
  {
    id: "results",
    question: "How long before I see results?",
    answer: "[Answer TBC]",
  },
  {
    id: "landing-pages",
    question: "Do you build the landing pages?",
    answer: "[Answer TBC]",
  },
  {
    id: "measure",
    question: "How do you measure results?",
    answer: "[Answer TBC]",
  },
  {
    id: "ownership",
    question: "Do I own the ad account?",
    answer: "[Answer TBC]",
  },
  {
    id: "contract",
    question: "Is there a contract or minimum term?",
    answer: "[Answer TBC]",
  },
  {
    id: "take-over",
    question: "Can you take over an existing account?",
    answer: "[Answer TBC]",
  },
  {
    id: "meta",
    question: "Do you run Meta (Facebook and Instagram) ads?",
    answer: "[Answer TBC]",
  },
  {
    id: "report",
    question: "What’s in the monthly report?",
    answer: "[Answer TBC]",
  },
];

export const metaAdsFaqs = [
  {
    id: "b2b",
    question: "Do Meta ads work for B2B?",
    answer: "[Answer TBC]",
  },
  {
    id: "creative",
    question: "Do you make the creative?",
    answer: "[Answer TBC]",
  },
  {
    id: "tracking",
    question: "What about tracking after iOS changes?",
    answer: "[Answer TBC]",
  },
  {
    id: "budget",
    question: "How much should we spend?",
    answer: "[Answer TBC]",
  },
  {
    id: "results",
    question: "How long before I see results?",
    answer: "[Answer TBC]",
  },
  {
    id: "ownership",
    question: "Do I own the ad account and the creative?",
    answer: "[Answer TBC]",
  },
  {
    id: "contract",
    question: "Is there a contract or minimum term?",
    answer: "[Answer TBC]",
  },
  {
    id: "google-ads",
    question: "Do you run Google Ads too?",
    answer: "[Answer TBC]",
  },
  {
    id: "report",
    question: "What’s in the monthly report?",
    answer: "[Answer TBC]",
  },
];

export const brandingFaqs = [
  {
    id: "cost",
    question: "How much does branding cost?",
    answer: "[Answer TBC]",
  },
  {
    id: "files",
    question: "Do we own the files?",
    answer: "[Answer TBC]",
  },
  {
    id: "website",
    question: "Can you roll the brand onto our website?",
    answer: "[Answer TBC]",
  },
  {
    id: "existing-logo",
    question: "What if we already have a logo we like?",
    answer: "[Answer TBC]",
  },
  {
    id: "timeline",
    question: "How long does a rebrand take?",
    answer: "[Answer TBC]",
  },
  {
    id: "directions",
    question: "How many directions do we see?",
    answer: "[Answer TBC]",
  },
  {
    id: "after",
    question: "What happens after the brand is done?",
    answer: "[Answer TBC]",
  },
];

export const customAppFaqs = [
  {
    id: "cost",
    question: "How much does a custom web app cost?",
    answer: "[Answer TBC]",
  },
  {
    id: "existing",
    question: "Can you improve an existing application?",
    answer: "[Answer TBC]",
  },
  {
    id: "mobile",
    question: "Do you build mobile apps?",
    answer: "[Answer TBC]",
  },
  {
    id: "code-ownership",
    question: "Who owns the code?",
    answer: "[Answer TBC]",
  },
  {
    id: "ai-automation",
    question: "Can you integrate AI or automation?",
    answer: "[Answer TBC]",
  },
  {
    id: "first-release",
    question: "How long does a first release take?",
    answer: "[Answer TBC]",
  },
  {
    id: "data-security",
    question: "Is my data safe?",
    answer: "[Answer TBC]",
  },
  {
    id: "after-launch",
    question: "What happens after launch?",
    answer: "[Answer TBC]",
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
    label: "years building digital products",
  },
  {
    id: "team",
    value: "+20",
    label: "people on the team",
  },
  {
    id: "clients",
    value: "85+",
    label: "Clients in the UK, US and beyond",
  },
  {
    id: "returning-clients",
    value: "94%",
    label: "Clients who came back",
  },
];

export const journeySteps = [
  {
    id: "started-building",
    step: "01",
    title: "Started building",
    description: "Websites for whoever would let me, learning by shipping.",
    borderClassName: "border-dark-pink",
    textClassName: "text-dark-pink",
  },
  {
    id: "cp-established",
    step: "02",
    title: "CP established",
    description:
      "December 2013. A name, a first client list, a habit of staying after launch.",
    borderClassName: "border-blue",
    textClassName: "text-blue",
  },
  {
    id: "specialist-team",
    step: "03",
    title: "A specialist team",
    description:
      "Design, development and growth people who each do one thing well.",
    borderClassName: "border-orange",
    textClassName: "text-orange",
  },
  {
    id: "international-work",
    step: "04",
    title: "International work",
    description:
      "Clients in the US, Panama and East Africa without an office in any of them.",
    borderClassName: "border-dark-pink",
    textClassName: "text-dark-pink",
  },
  {
    id: "today",
    step: "05",
    title: "Today",
    description:
      "Higher-value digital products, automation, and the same care about what happens after launch.",
    borderClassName: "border-blue",
    textClassName: "text-blue",
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
    icon: "/images/about/senior-people-icon.svg",
    iconWidth: 56,
    iconHeight: 56,
    title: "Senior people stay involved",
    description:
      "Important decisions are made directly, without being passed through multiple layers of account managers or unnecessary communication.",
    hoverClassName:
      "hover:bg-blue hover:shadow-[0px_4px_84px_0px_#3078FF] active:bg-blue active:shadow-[0px_4px_84px_0px_#3078FF]",
  },
  {
    id: "design-development",
    icon: "/images/about/design-meets-icon.svg",
    iconWidth: 53,
    iconHeight: 55,
    title: "Design Meets Development",
    description:
      "Technical constraints and commercial goals are considered while the experience is being designed, not discovered at the end.",
    hoverClassName:
      "hover:bg-orange hover:shadow-[0px_4px_84px_0px_#EC9122] active:bg-orange active:shadow-[0px_4px_84px_0px_#EC9122]",
  },
  {
    id: "tools",
    icon: "/images/about/tools-fit-icon.svg",
    iconWidth: 56,
    iconHeight: 55,
    title: "Tools fit the problem.",
    description:
      "WordPress, Shopify, Webflow, React, Next.js, Laravel and automation platforms are options - not the identity of the agency.",
    hoverClassName:
      "hover:bg-dark-pink hover:shadow-[0px_4px_84px_0px_#EC3593] active:bg-dark-pink active:shadow-[0px_4px_84px_0px_#EC3593]",
  },
  {
    id: "after-launch",
    icon: "/images/about/we-stay-icon.svg",
    iconWidth: 50,
    iconHeight: 50,
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
