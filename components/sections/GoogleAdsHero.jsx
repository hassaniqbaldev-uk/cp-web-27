import { customAppHeroHighlights, googleAdsHeroStats } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const GoogleAdsHero = () => {
  return (
    <>
      <Section
        id="google-ads-hero"
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
                      Google Ads
                    </span>
                    <br />
                    that land on <br />
                    the right page.
                  </>
                }
                titleClassName="text-[75px] leading-[75px] font-bold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle="We run the ads and build the page they land on, then measure enquiries and sales, not clicks."
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
              <span className="pointer-events-none absolute top-[-180px] left-[20px] h-[700px] w-[720px] bg-[radial-gradient(closest-side,rgba(120,120,120,0.5)_0%,rgba(120,120,120,0.2)_50%,rgba(120,120,120,0)_100%)]" />

              {/* Two copies: sharp at the top right, blurring and darkening towards the
                  bottom left. The padding keeps the blur from being clipped. */}
              <div className="pointer-events-none absolute top-[3px] left-[127px] grid w-[402px]">
                <div className="col-start-1 row-start-1 m-[-40px] mask-[linear-gradient(225deg,transparent_42%,#000_64%)] p-[40px]">
                  <Image
                    src="/images/services/google-google-ads-hero.png"
                    alt=""
                    width={402}
                    height={423}
                    priority
                    className="h-auto w-full blur-[10px] brightness-[0.6]"
                  />
                </div>

                <div className="col-start-1 row-start-1 mask-[linear-gradient(225deg,#000_46%,transparent_66%)]">
                  <Image
                    src="/images/services/google-google-ads-hero.png"
                    alt="Google logo"
                    width={402}
                    height={423}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <Image
                src="/images/services/ads-icon-google-ads-hero.png"
                alt="Google Ads"
                width={157}
                height={165}
                className="pointer-events-none absolute top-[-14px] left-[510px] z-10 h-auto w-[157px]"
              />

              <div className="gradient-border absolute top-[322px] left-[470px] z-10 flex h-[150px] w-[159px] flex-col rounded-[15px] bg-white/15 px-[17px] py-[16px] backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]">
                <span className="text-[16px] leading-[24px] tracking-[-0.02em] whitespace-nowrap text-white">
                  Business growth
                </span>

                <span className="text-blue text-[20px] leading-[25px] font-bold tracking-[-0.05em]">
                  +42%
                </span>

                <svg
                  viewBox="0 0 135 80"
                  aria-hidden="true"
                  className="mt-auto h-[74px] w-[129px] overflow-visible"
                >
                  <defs>
                    <linearGradient
                      id="google-ads-hero-chart"
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
                    fill="url(#google-ads-hero-chart)"
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

              <div className="gradient-border absolute top-[295px] left-[40px] z-10 flex w-[246px] flex-col items-center rounded-[15px] bg-white/15 px-[10px] py-[28px] text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]">
                <span className="text-[20px] leading-[26px] font-bold tracking-[-0.05em] whitespace-nowrap text-white">
                  Google Ads <br />
                  management from <br />
                  <span className="text-orange">£500</span> a month + ad <br />
                  spend.
                </span>

                <span className="mt-[8px] text-[12px] leading-[16px] tracking-[-0.02em] text-white">
                  Landing pages built in house.
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-[86px] flex items-center justify-between gap-[20px]">
            {googleAdsHeroStats.map(
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

export default GoogleAdsHero;
