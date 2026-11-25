import { customAppHeroHighlights, ecommerceHeroStats } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const EcommerceHero = () => {
  return (
    <>
      <Section
        id="ecommerce-hero"
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
            <div className="flex w-[520px] flex-col items-start">
              <SectionHeading
                as="h1"
                title={
                  <>
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      Online stores
                    </span>
                    <br />
                    built for how <br />
                    people buy.
                  </>
                }
                titleClassName="text-[75px] leading-[75px] font-bold tracking-[-0.06em] text-white"
                subtitle="Shopify and WooCommerce stores designed around the product page, basket and checkout, where orders are won or lost."
                subtitleClassName="mt-[25px] mb-[25px] max-w-[480px] text-[18px] leading-[28px] tracking-[-0.02em] text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Talk through your store
                </Button>
              </div>

              <Link
                href="/work"
                className="group mt-[30px] inline-flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                See stores we’ve built
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="relative h-[490px] w-[661px] shrink-0">
              {/* Runs past the Container so the rock reaches the screen edge. */}
              <Image
                src="/images/services/laptop-ecommerce-hero.png"
                alt="Smokey Carter online store on a laptop"
                width={728}
                height={571}
                priority
                className="pointer-events-none absolute top-[-38px] left-[53px] h-auto w-[728px] max-w-none"
              />

              <Image
                src="/images/services/shopify-icon-ecommerce-hero.png"
                alt=""
                width={113}
                height={113}
                className="pointer-events-none absolute top-[-60px] left-[44px] z-10 h-auto w-[113px] rotate-[30deg]"
              />

              <Image
                src="/images/services/wordpress-icon-web-design-hero.png"
                alt=""
                width={110}
                height={110}
                className="pointer-events-none absolute top-[-8px] left-[488px] z-10 size-[110px] rounded-full object-contain shadow-[0px_4px_44px_0px_#65D9F399]"
              />

              <div className="gradient-border absolute top-[351px] left-0 z-10 flex w-[172px] flex-col items-center rounded-[15px] bg-white/15 px-[15px] py-[18px] text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]">
                <span className="text-[20px] leading-[26px] font-bold tracking-[-0.05em] text-white">
                  Online stores <br />
                  <span className="text-orange">from £3,500.</span>
                </span>

                <span className="mt-[8px] text-[12px] leading-[16px] tracking-[-0.02em] text-white">
                  Staged payments. <br />
                  3-month guarantee.
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-[100px] flex items-center justify-between gap-[20px]">
            {ecommerceHeroStats.map(
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

export default EcommerceHero;
