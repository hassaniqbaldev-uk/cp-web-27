import { customAppHeroHighlights, metaAdsHeroStats } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const MetaAdsHero = () => {
  return (
    <>
      <Section
        id="meta-ads-hero"
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
                      Meta ads
                    </span>{" "}
                    that <br />
                    start with the <br />
                    problem.
                  </>
                }
                titleClassName="text-[75px] leading-[75px] font-bold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle="Facebook and Instagram ads built around one clear offer, a page made for the ad, and follow-up that actually happens."
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
                href="/contact"
                className="group mt-[30px] inline-flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Get a free ads review
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="relative h-[490px] w-[661px] shrink-0">
              <span className="pointer-events-none absolute top-[-130px] left-[90px] h-[700px] w-[700px] bg-[radial-gradient(closest-side,rgba(40,70,190,0.55)_0%,rgba(40,70,190,0.2)_50%,rgba(40,70,190,0)_100%)]" />

              <Image
                src="/images/services/meta-meta-ads-hero.png"
                alt="Meta logo"
                width={553}
                height={348}
                priority
                className="pointer-events-none absolute top-[63px] left-[71px] h-auto w-[553px] max-w-none"
              />

              <div className="gradient-border absolute top-[-38px] left-[465px] z-10 flex w-[204px] flex-col items-center rounded-[15px] bg-white/15 px-[10px] py-[28px] text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]">
                <span className="text-[20px] leading-[26px] font-bold tracking-[-0.05em] whitespace-nowrap text-white">
                  Working with <br />
                  businesses in the <br />
                  <span className="text-[#2FB4FF]">
                    UK, US and <br />
                    Australia
                  </span>
                </span>
              </div>

              <div className="gradient-border absolute top-[310px] left-[8px] z-10 flex w-[204px] flex-col items-center rounded-[15px] bg-white/15 px-[10px] py-[28px] text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]">
                <span className="text-[20px] leading-[26px] font-bold tracking-[-0.05em] whitespace-nowrap text-white">
                  Meta ads from <br />
                  <span className="text-orange">£500</span> a month + <br />
                  ad spend.
                </span>

                <span className="mt-[8px] text-[12px] leading-[16px] tracking-[-0.02em] text-white">
                  Creative and copy included.
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-[86px] flex items-center justify-between gap-[20px]">
            {metaAdsHeroStats.map(
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

export default MetaAdsHero;
