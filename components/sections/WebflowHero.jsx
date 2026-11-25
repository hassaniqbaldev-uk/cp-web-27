import { customAppHeroHighlights, webflowHeroStats } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebflowHero = () => {
  return (
    <>
      <Section
        id="webflow-hero"
        className="relative flex min-h-screen flex-col overflow-hidden bg-black"
      >
        <Image
          src="/images/common/gradient-bg-hero.png"
          alt=""
          fill
          priority
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 my-auto pt-[205px] pb-[64px]">
          <div className="flex items-start justify-between gap-[45px]">
            <div className="flex w-[520px] min-w-0 flex-col items-start">
              <SectionHeading
                as="h1"
                title={
                  <>
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      Webflow sites
                    </span>
                    <br />
                    your marketing <br />
                    team owns.
                  </>
                }
                titleClassName="text-[75px] leading-[75px] font-bold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle="Custom Webflow design and build, with a CMS your team edits visually and hosting handled for you."
                subtitleClassName="mt-[25px] mb-[25px] max-w-[480px] text-[18px] leading-[28px] tracking-[-0.02em] text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Book a 15-min call
                </Button>
              </div>

              <Link
                href="/website-review"
                className="group mt-[30px] inline-flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Get a free website review
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="relative h-[490px] w-[661px] shrink-0">
              <span className="pointer-events-none absolute top-[-180px] left-[20px] h-[700px] w-[720px] bg-[radial-gradient(closest-side,rgba(120,120,120,0.5)_0%,rgba(120,120,120,0.2)_50%,rgba(120,120,120,0)_100%)]" />

              {/* Runs past the Container so the hand reaches the screen edge. */}
              <Image
                src="/images/services/laptop-webflow-hero.png"
                alt="Webflow website on a laptop held in two hands"
                width={623}
                height={525}
                priority
                className="pointer-events-none absolute top-0 left-[158px] z-20 h-auto w-[623px] max-w-none"
              />

              <Image
                src="/images/services/webflow-icon-webflow-hero.png"
                alt="Webflow"
                width={178}
                height={107}
                className="pointer-events-none absolute top-[-52px] left-[477px] z-20 h-auto w-[178px]"
              />

              <div className="gradient-border absolute top-[-22px] left-[81px] z-10 flex h-[121px] w-[128px] flex-col rounded-[15px] bg-white/15 px-[14px] py-[12px] backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]">
                <span className="text-[13px] leading-[20px] tracking-[-0.02em] whitespace-nowrap text-white">
                  Business growth
                </span>

                <span className="text-blue text-[16px] leading-[20px] font-bold tracking-[-0.05em]">
                  +42%
                </span>

                <svg
                  viewBox="0 0 135 80"
                  aria-hidden="true"
                  className="mt-auto h-[58px] w-[100px] overflow-visible"
                >
                  <defs>
                    <linearGradient
                      id="webflow-hero-chart"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop stopColor="var(--color-blue)" stopOpacity="0.4" />
                      <stop
                        offset="1"
                        stopColor="var(--color-blue)"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M5 73C14 73 14 61 24 59C35 57 38 59 46 50C53 42 58 49 66 45C76 40 74 24 86 22C98 20 108 5 130 5V80H5Z"
                    fill="url(#webflow-hero-chart)"
                  />

                  <path
                    d="M5 73C14 73 14 61 24 59C35 57 38 59 46 50C53 42 58 49 66 45C76 40 74 24 86 22C98 20 108 5 130 5"
                    fill="none"
                    stroke="var(--color-blue)"
                    strokeWidth="2"
                  />

                  <circle cx="5" cy="73" r="5" fill="var(--color-blue)" />
                  <circle cx="130" cy="5" r="5" fill="var(--color-blue)" />
                </svg>
              </div>

              <div className="gradient-border absolute top-[312px] left-[7px] z-20 flex w-[252px] flex-col items-center rounded-[15px] bg-white/15 px-[10px] py-[28px] text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]">
                <span className="text-[20px] leading-[26px] font-bold tracking-[-0.05em] whitespace-nowrap text-white">
                  Webflow sites from <br />
                  <span className="text-orange">£1,500.</span>
                </span>

                <span className="mt-[8px] text-[12px] leading-[16px] tracking-[-0.02em] text-white">
                  WordPress or Squarespace migration <br />
                  included where needed.
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-[86px] flex items-center justify-between gap-[20px]">
            {webflowHeroStats.map(
              ({
                id,
                icon,
                iconAlt,
                iconClassName,
                value,
                description,
                width,
                height,
              }) => (
                <li key={id} className="flex items-center gap-[20px]">
                  <span className="flex size-[100px] shrink-0 items-center justify-center rounded-full bg-white/25">
                    <Image
                      src={icon}
                      width={width}
                      height={height}
                      alt={iconAlt}
                      className={`shrink-0 object-contain ${iconClassName}`}
                    />
                  </span>

                  <div className="flex flex-col">
                    <span className="text-[35px] font-bold tracking-[-0.07em] whitespace-nowrap text-white">
                      {value}
                    </span>

                    <p className="mt-[10px] text-[18px] leading-[24px] tracking-[-0.02em] whitespace-pre text-white">
                      {description}
                    </p>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Container>

        <div className="relative z-10 bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] py-[15px]">
          <DragMarquee
            as="div"
            pauseOnHover
            trackClassName="flex w-max items-center"
            slideClassName="shrink-0"
          >
            {customAppHeroHighlights.map(({ id, icon: Icon, text }) => (
              <span key={id} className="flex items-center">
                <span className="flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase">
                  <Icon size={24} className="shrink-0" />
                  {text}
                </span>

                <span className="mx-[40px] h-[25px] w-px bg-white" />
              </span>
            ))}
          </DragMarquee>
        </div>
      </Section>
    </>
  );
};

export default WebflowHero;
