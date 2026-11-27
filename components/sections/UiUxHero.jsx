import {
  customAppHeroHighlights,
  uiUxHeroStats,
  uiUxHeroTools,
} from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Desktop shows these in a row; phones scroll them in a drag marquee.
const stats = uiUxHeroStats.map(
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

const UiUxHero = () => {
  return (
    <>
      <Section
        id="ui-ux-hero"
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
                      UX design
                    </span>{" "}
                    that gets people to the end.
                  </>
                }
                titleClassName="text-[75px] leading-[75px] font-bold tracking-[-0.06em] text-white max-sm:text-[40px] max-sm:leading-[42px] max-sm:text-balance"
                subtitle="We find where visitors get stuck on your site, store or app, then redesign the journey so more of them sign up, book or buy."
                subtitleClassName="mt-[25px] mb-[25px] max-w-[480px] text-[18px] leading-[28px] tracking-[-0.02em] text-white max-sm:mt-[20px] max-sm:mb-[30px] max-sm:text-[16px] max-sm:leading-[24px]"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:px-[24px] max-sm:py-[12px] max-sm:text-[15px]"
                >
                  Get a UX audit
                </Button>
              </div>

              <Link
                href="/work"
                className="group mt-[30px] inline-flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:mt-[20px] max-sm:text-[16px]"
              >
                See UX work
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="relative h-[487px] w-[652px] shrink-0 max-sm:aspect-[652/487] max-sm:h-auto max-sm:w-full">
              <span className="pointer-events-none absolute top-[-130px] left-[60px] size-[450px] rounded-full bg-white/30 blur-[100px] max-sm:top-[-60px] max-sm:left-[30px] max-sm:size-[230px] max-sm:blur-[60px]" />

              <ul className="gradient-border absolute top-[-8px] left-[488px] flex w-[76px] flex-col items-center gap-[7px] rounded-[15px] bg-white/15 py-[11px] backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px] max-sm:top-[-4%] max-sm:left-[74.8%] max-sm:z-10 max-sm:w-[42px] max-sm:gap-[4px] max-sm:rounded-[10px] max-sm:py-[6px]">
                {uiUxHeroTools.map(({ id, icon, iconAlt }) => (
                  <li
                    key={id}
                    className="flex size-[52px] items-center justify-center rounded-[10px] bg-white max-sm:size-[30px] max-sm:rounded-[6px]"
                  >
                    <Image
                      src={icon}
                      alt={iconAlt}
                      width={30}
                      height={30}
                      className="size-[30px] object-contain max-sm:size-[17px]"
                    />
                  </li>
                ))}
              </ul>

              {/* Runs past the Container so the arm reaches the screen edge. */}
              <Image
                src="/images/services/laptop-ui-ux-hero.png"
                alt="Tycoon enterprise dashboard on a laptop"
                width={706}
                height={520}
                priority
                className="pointer-events-none absolute top-[-33px] left-[66px] h-auto w-[706px] max-w-none max-sm:top-[-6.8%] max-sm:left-[10.1%] max-sm:w-[108.3%]"
              />

              <div className="gradient-border absolute top-[300px] left-0 z-10 flex w-[172px] flex-col items-center rounded-[15px] bg-white/15 px-[15px] py-[20px] text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px] max-sm:top-[58%] max-sm:left-[-8px] max-sm:w-[132px] max-sm:px-[10px] max-sm:py-[12px]">
                <span className="text-[20px] leading-[26px] font-bold tracking-[-0.05em] text-white max-sm:text-[14px] max-sm:leading-[18px]">
                  Redesigns from <br />
                  <span className="text-orange">£1,500.</span>
                </span>

                <span className="mt-[8px] text-[12px] leading-[16px] tracking-[-0.02em] text-white max-sm:mt-[6px] max-sm:text-[10px] max-sm:leading-[13px]">
                  Wireframes approved before visual design.
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-[100px] flex items-center justify-between gap-[20px] max-sm:hidden">
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

export default UiUxHero;
