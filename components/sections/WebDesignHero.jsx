import { customAppHeroHighlights, webDesignHeroStats } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import LaptopScroll from "../ui/LaptopScroll";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Desktop shows these in a row; phones scroll them in a drag marquee.
const stats = webDesignHeroStats.map(
  ({ id, icon, iconAlt, iconClassName, value, description, width, height }) => (
    <div key={id} className="flex items-center gap-[20px]">
      <span className="flex size-[100px] shrink-0 items-center justify-center rounded-full bg-white/25 max-sm:size-[80px]">
        <Image
          src={icon}
          width={width}
          height={height}
          alt={iconAlt}
          draggable={false}
          className={`shrink-0 object-contain ${iconClassName}`}
        />
      </span>

      <div className="flex flex-col">
        <span className="text-[35px] font-bold tracking-[-0.07em] whitespace-nowrap text-white max-sm:text-[30px]">
          {value}
        </span>

        <p className="mt-[10px] text-[18px] leading-[24px] tracking-[-0.02em] whitespace-nowrap text-white max-sm:mt-[4px] max-sm:text-[16px] max-sm:leading-[22px]">
          {description}
        </p>
      </div>
    </div>
  ),
);

const WebDesignHero = () => {
  return (
    <>
      <Section
        id="web-design-hero"
        className="relative flex min-h-screen flex-col overflow-hidden bg-black"
      >
        <Image
          src="/images/common/gradient-bg-hero.png"
          alt=""
          fill
          priority
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 my-auto pt-[200px] pb-[64px] max-sm:px-[20px] max-sm:pt-[130px] max-sm:pb-[50px]">
          <div className="flex items-start justify-between gap-[45px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[60px]">
            <div className="flex w-[480px] flex-col items-start max-sm:w-full max-sm:items-center max-sm:text-center">
              <SectionHeading
                as="h1"
                title={
                  <>
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      Web design
                    </span>
                    <br />
                    that has a job to do.
                  </>
                }
                titleClassName="text-[75px] leading-[75px] font-bold tracking-[-0.06em] text-white max-sm:text-[38px] max-sm:leading-[40px]"
                subtitle="Websites built to bring in enquiries and sales. Easy for your team to update, with SEO and the right platform planned from the start."
                subtitleClassName="mt-[25px] mb-[25px] max-w-[480px] text-[18px] leading-[28px] tracking-[-0.02em] text-white max-sm:mt-[20px] max-sm:mb-[30px] max-sm:text-[16px] max-sm:leading-[24px]"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:px-[24px] max-sm:py-[12px] max-sm:text-[15px]"
                >
                  Book a 15-min website call
                </Button>
              </div>

              <Link
                href="/website-review"
                className="group mt-[30px] inline-flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:mt-[20px] max-sm:text-[16px]"
              >
                Show us your current site
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="relative mr-[12px] w-[650px] shrink-0 max-sm:mr-0 max-sm:w-full">
              <LaptopScroll
                mockup="/images/services/laptop-web-design-hero.png"
                mockupWidth={1301}
                mockupHeight={1081}
                image="/images/services/sunbox-screen-web-design-hero.png"
                imageAlt="Campervan Converters in Sussex website"
                imageWidth={522}
                imageHeight={4410}
              />

              <Image
                src="/images/services/figma-icon-web-design-hero.png"
                alt=""
                width={92}
                height={92}
                className="pointer-events-none absolute top-[-25px] left-[-7px] z-10 size-[92px] rounded-[23px] object-contain shadow-[0px_14px_74px_0px_#FFFFFF61] max-sm:top-[-20px] max-sm:left-[-4px] max-sm:size-[50px] max-sm:rounded-[13px]"
              />

              <div className="gradient-border absolute top-[350px] left-[-33px] z-10 flex w-[172px] flex-col items-center rounded-[15px] bg-white/15 px-[15px] py-[20px] text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px] max-sm:top-[55%] max-sm:left-[-8px] max-sm:w-[120px] max-sm:px-[10px] max-sm:py-[12px]">
                <span className="text-[20px] leading-[26px] font-bold tracking-[-0.05em] text-white max-sm:text-[15px] max-sm:leading-[19px]">
                  Websites from <br />
                  <span className="text-orange">£1,500</span>
                </span>

                <span className="mt-[8px] text-[12px] leading-[16px] tracking-[-0.02em] text-white max-sm:mt-[6px] max-sm:text-[10px] max-sm:leading-[13px]">
                  Staged payments. <br />
                  You own the site.
                </span>
              </div>

              <Image
                src="/images/services/wordpress-icon-web-design-hero.png"
                alt=""
                width={82}
                height={82}
                className="pointer-events-none absolute top-[354px] left-[576px] z-10 size-[82px] rounded-full object-contain shadow-[0px_4px_44px_0px_#65D9F399] max-sm:top-[62%] max-sm:right-[-6px] max-sm:left-auto max-sm:size-[46px]"
              />
            </div>
          </div>

          <ul className="mt-[50px] flex items-center justify-between gap-[20px] max-sm:hidden">
            {stats.map((stat) => (
              <li key={stat.key}>{stat}</li>
            ))}
          </ul>

          <DragMarquee
            pauseOnHover
            className="-mx-[20px] mt-[60px] hidden max-sm:block"
            trackClassName="flex w-max items-center"
            slideClassName="shrink-0 pr-[40px]"
          >
            {stats}
          </DragMarquee>
        </Container>

        <div className="relative z-10 bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] py-[15px] max-sm:py-[12px]">
          <DragMarquee
            as="div"
            pauseOnHover
            trackClassName="flex w-max items-center"
            slideClassName="shrink-0"
          >
            {customAppHeroHighlights.map(({ id, icon: Icon, text }) => (
              <span key={id} className="flex items-center">
                <span className="flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:gap-[8px] max-sm:text-[14px]">
                  <Icon size={24} className="shrink-0 max-sm:size-[18px]" />
                  {text}
                </span>

                <span className="mx-[40px] h-[25px] w-px bg-white max-sm:mx-[24px] max-sm:h-[18px]" />
              </span>
            ))}
          </DragMarquee>
        </div>
      </Section>
    </>
  );
};

export default WebDesignHero;
