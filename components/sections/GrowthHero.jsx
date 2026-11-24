import { customAppHeroHighlights, growthHeroStats } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import LaptopScroll from "../ui/LaptopScroll";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const GrowthHero = () => {
  return (
    <>
      <Section
        id="growth-hero"
        className="relative flex min-h-screen flex-col overflow-hidden bg-black"
      >
        <Image
          src="/images/common/gradient-bg-hero.png"
          alt=""
          fill
          priority
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 my-auto pt-[165px] pb-[64px]">
          <div className="flex items-start justify-between gap-[45px]">
            <div className="flex w-[440px] flex-col items-start">
              <SectionHeading
                as="h1"
                title={
                  <>
                    <span className="mr-[-0.06em] block w-fit bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      Website <br />
                      support
                    </span>
                    that keeps <br />
                    improving.
                  </>
                }
                titleClassName="text-[75px] leading-[75px] font-bold tracking-[-0.06em] text-white"
                subtitle="Updates, security and fixes every month, plus the improvements that make your site, store or app work harder."
                subtitleClassName="mt-[25px] mb-[25px] max-w-[480px] text-[18px] leading-[28px] tracking-[-0.02em] text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Share the site you need supported
                </Button>
              </div>

              <Link
                href="#growth-pricing"
                className="group mt-[30px] inline-flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                See the plans
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="relative mt-[7px] w-[650px] shrink-0">
              <span className="bg-blue pointer-events-none absolute top-[10px] left-[-35px] size-[110px] rounded-full blur-[45px]" />

              <LaptopScroll
                mockup="/images/services/laptop-web-design-hero.png"
                mockupWidth={1301}
                mockupHeight={1081}
                image="/images/services/ivy-duke-screen-growth-hero.png"
                imageAlt="Ivy & Duke dog bed shop website"
                imageWidth={1048}
                imageHeight={7696}
              />

              <Image
                src="/images/services/rocket-growth-hero.png"
                alt=""
                width={119}
                height={171}
                className="pointer-events-none absolute top-[-22px] left-[-45px] z-10 h-auto w-[119px]"
              />

              <div className="gradient-border absolute top-[328px] left-[-57px] z-10 flex w-[229px] flex-col items-center rounded-[15px] bg-white/15 px-[20px] py-[27px] text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]">
                <span className="text-[20px] leading-[26px] font-bold tracking-[-0.05em] text-white">
                  From <span className="text-orange">£300</span> a month.
                </span>

                <span className="mt-[5px] max-w-[165px] text-[12px] leading-[16px] tracking-[-0.02em] text-white">
                  Rolling. Stop with notice. Works with sites we didn’t build.
                </span>
              </div>

              <Image
                src="/images/services/arrow-growth-hero.png"
                alt=""
                width={138}
                height={69}
                className="pointer-events-none absolute top-[432px] left-[499px] z-10 h-auto w-[138px]"
              />
            </div>
          </div>

          <ul className="mt-[80px] flex items-center justify-between gap-[20px]">
            {growthHeroStats.map(
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

                    <p className="mt-[10px] text-[18px] leading-[24px] tracking-[-0.02em] whitespace-nowrap text-white">
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

export default GrowthHero;
