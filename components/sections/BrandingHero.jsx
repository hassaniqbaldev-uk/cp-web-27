import { brandingHeroStats, customAppHeroHighlights } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineUserGroup } from "react-icons/hi2";
import BackgroundVideo from "../ui/BackgroundVideo";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const glassCardClassName =
  "gradient-border absolute z-10 flex flex-col items-center rounded-[15px] bg-white/15 text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]";

const BrandingHero = () => {
  return (
    <>
      <Section
        id="branding-hero"
        className="relative flex min-h-screen flex-col overflow-hidden bg-black"
      >
        <Image
          src="/images/common/gradient-bg-hero.png"
          alt=""
          fill
          priority
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 my-auto pt-[150px] pb-[64px]">
          <div className="flex items-center justify-between gap-[45px]">
            <div className="flex w-[585px] flex-col items-start">
              <SectionHeading
                as="h1"
                title={
                  <>
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      Brand identity
                    </span>
                    <br />
                    that works everywhere.
                  </>
                }
                titleClassName="text-[75px] leading-[75px] font-bold tracking-[-0.06em] text-white"
                subtitle="Strategy, logo and a full visual system, rolled out across your website, socials and everything your team sends."
                subtitleClassName="mt-[25px] mb-[25px] max-w-[480px] text-[18px] leading-[28px] tracking-[-0.02em] text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Book a 15-min scoping call
                </Button>
              </div>

              <Link
                href="/work"
                className="group mt-[30px] inline-flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                See brands we&apos;ve built
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="relative mr-[45px] shrink-0">
              <div className="h-[430px] w-[560px] overflow-hidden rounded-[20px] bg-white">
                <BackgroundVideo
                  src="/images/services/video-branding-hero.mp4"
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className={`${glassCardClassName} top-[-60px] right-[-70px] w-[170px] px-[20px] py-[20px]`}
              >
                <span className="text-[18px] leading-[22px] font-bold tracking-[-0.05em] text-white">
                  Branding from <span className="text-orange">£1,000.</span>
                </span>

                <span className="mt-[8px] text-[11px] leading-[14px] tracking-[-0.02em] text-white/80">
                  You approve the direction before we build the full system.
                </span>
              </div>

              <div
                className={`${glassCardClassName} bottom-[-35px] left-[-75px] w-[140px] px-[15px] py-[20px]`}
              >
                <span className="bg-orange flex size-[40px] items-center justify-center rounded-full text-white">
                  <HiOutlineUserGroup size={20} />
                </span>

                <span className="mt-[10px] text-[16px] leading-[20px] font-bold tracking-[-0.05em] text-white">
                  Team Collaboration
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-[90px] flex items-center justify-between gap-[40px]">
            {brandingHeroStats.map(
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
                <li key={id} className="flex items-center gap-[30px]">
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
                    <span className="text-[35px] font-bold tracking-[-0.07em] text-white">
                      {value}
                    </span>

                    <p className="mt-[10px] max-w-[230px] text-[18px] leading-[24px] tracking-[-0.02em] text-white">
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

export default BrandingHero;
