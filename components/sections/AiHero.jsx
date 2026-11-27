import {
  customAppHeroHighlights,
  aiHeroStats,
  aiHeroTools,
} from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Robot3D from "../ui/robot/Robot3D";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Desktop shows these in a row; phones scroll them in a drag marquee.
const stats = aiHeroStats.map(
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

const AiHero = () => {
  return (
    <>
      <Section
        id="ai-hero"
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
          <div className="flex items-start justify-between gap-[45px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[50px]">
            <div className="flex w-[560px] flex-col items-start max-sm:w-full max-sm:items-center max-sm:text-center">
              <SectionHeading
                as="h1"
                title={
                  <>
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      Automate
                    </span>{" "}
                    the work your team repeats.
                  </>
                }
                titleClassName="text-[75px] leading-[75px] font-bold tracking-[-0.06em] text-white max-sm:text-[40px] max-sm:leading-[42px] max-sm:text-balance"
                subtitle="We connect your tools, automate the repetitive steps and add AI only where it genuinely helps, with a person reviewing what matters."
                subtitleClassName="mt-[25px] mb-[25px] max-w-[480px] text-[18px] leading-[28px] tracking-[-0.02em] text-white max-sm:mt-[20px] max-sm:mb-[30px] max-sm:text-[16px] max-sm:leading-[24px]"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:px-[24px] max-sm:py-[12px] max-sm:text-[15px]"
                >
                  Show us the manual process
                </Button>
              </div>

              <Link
                href="/work"
                className="group mt-[30px] inline-flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:mt-[20px] max-sm:text-[16px]"
              >
                See SEO results
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="relative h-[487px] w-[528px] shrink-0 max-sm:aspect-[528/487] max-sm:h-auto max-sm:w-full">
              {/* Glows sit behind the robot, under each icon. */}
              {aiHeroTools.map(({ id, className, glowClassName }) => (
                <span
                  key={id}
                  className={`pointer-events-none absolute aspect-square rounded-full opacity-80 blur-[35px] ${className} ${glowClassName}`}
                />
              ))}

              <Robot3D
                label="Friendly AI robot"
                className="absolute top-[-70px] left-[62px] h-[600px] w-[440px] max-sm:top-[-14.4%] max-sm:left-[11.7%] max-sm:h-[123%] max-sm:w-[83.3%]"
              />

              {aiHeroTools.map(({ id, image, imageAlt, size, className }) => (
                <Image
                  key={id}
                  src={image}
                  alt={imageAlt}
                  width={size}
                  height={size}
                  className={`pointer-events-none absolute h-auto ${className}`}
                />
              ))}

              <div className="gradient-border absolute top-[319px] left-0 z-10 flex w-[233px] flex-col items-center rounded-[15px] bg-white/15 px-[20px] py-[25px] text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px] max-sm:top-[62%] max-sm:left-[-8px] max-sm:w-[150px] max-sm:px-[10px] max-sm:py-[12px]">
                <span className="text-[20px] leading-[26px] font-bold tracking-[-0.05em] text-white max-sm:text-[14px] max-sm:leading-[18px]">
                  Your first automation <br />
                  <span className="text-orange">from £1,500</span>
                </span>

                <span className="mt-[8px] text-[12px] leading-[16px] tracking-[-0.02em] text-white max-sm:mt-[6px] max-sm:text-[10px] max-sm:leading-[13px]">
                  Scoped around one workflow, live in 2 to 4 weeks.
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

export default AiHero;
