import { customAppHeroHighlights, shopifyHeroStats } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag, HiStar } from "react-icons/hi2";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const ShopifyHero = () => {
  return (
    <>
      <Section
        id="shopify-hero"
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
                      Shopify stores
                    </span>
                    <br />
                    that sell and run <br />
                    easily.
                  </>
                }
                titleClassName="text-[75px] leading-[75px] font-bold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle="Custom Shopify design and development, with every app named and costed before you commit."
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
                Get a free store review
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="relative h-[490px] w-[661px] shrink-0">
              <span className="pointer-events-none absolute top-[-108px] left-[6px] h-[620px] w-[660px] bg-[radial-gradient(closest-side,rgba(0,150,0,0.6)_0%,rgba(0,110,0,0.35)_45%,rgba(0,90,0,0)_100%)]" />

              <Image
                src="/images/services/cube-small-shopify-hero.png"
                alt=""
                width={75}
                height={76}
                className="pointer-events-none absolute top-[33px] left-[103px] h-auto w-[75px] opacity-70 blur-[5px]"
              />

              <Image
                src="/images/services/bag-shopify-hero.png"
                alt="Green Shopify shopping bag"
                width={423}
                height={439}
                priority
                className="pointer-events-none absolute top-[-15px] left-[114px] h-auto w-[423px] max-w-none"
              />

              {/* Two copies: sharp at the top, blurring towards the bottom. */}
              <div className="pointer-events-none absolute top-[346px] left-[523px] z-10 grid w-[131px]">
                <div className="col-start-1 row-start-1 mask-[linear-gradient(to_bottom,#000_25%,transparent_70%)]">
                  <Image
                    src="/images/services/cube-large-shopify-hero.png"
                    alt=""
                    width={131}
                    height={123}
                    className="h-auto w-full blur-[1px]"
                  />
                </div>

                <div className="col-start-1 row-start-1 m-[-20px] mask-[linear-gradient(to_bottom,transparent_30%,#000_65%)] p-[20px]">
                  <Image
                    src="/images/services/cube-large-shopify-hero.png"
                    alt=""
                    width={131}
                    height={123}
                    className="h-auto w-full blur-[6px]"
                  />
                </div>
              </div>

              {/* Example product card, decorative only. */}
              <div
                aria-hidden="true"
                className="absolute top-[-10px] left-[476px] z-10 flex w-[170px] flex-col items-center rounded-[15px] bg-white p-[10px] pb-[14px] text-center shadow-[0px_4px_74px_0px_#FFFFFF33]"
              >
                <span className="bg-grey/60 flex h-[92px] w-full items-center justify-center overflow-hidden rounded-[10px]">
                  <Image
                    src="/images/services/insole-shopify-hero.png"
                    alt=""
                    width={97}
                    height={66}
                    className="h-auto w-[97px]"
                  />
                </span>

                <span className="mt-[12px] flex text-[#FFC403]">
                  {Array.from({ length: 5 }, (_, index) => (
                    <HiStar key={index} size={10} />
                  ))}
                </span>

                <span className="mt-[5px] text-[10px] leading-[13px] font-semibold tracking-[-0.02em] text-black">
                  Superfeet All Purpose High <br />
                  Arch Support Insole
                </span>

                <span className="mt-[6px] text-[12px] leading-[16px] font-extrabold tracking-[-0.04em] text-black">
                  £34.99
                </span>

                <span className="mt-[8px] flex h-[28px] w-[140px] items-center justify-center gap-[6px] rounded-full bg-[#0B9A49] text-[8px] font-bold text-white">
                  <HiOutlineShoppingBag size={12} />
                  Add to Cart
                </span>
              </div>

              <div className="gradient-border absolute top-[307px] left-[25px] z-10 flex w-[193px] flex-col items-center rounded-[15px] bg-white/15 px-[10px] py-[18px] text-center backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]">
                <span className="text-[20px] leading-[26px] font-bold tracking-[-0.05em] whitespace-nowrap text-white">
                  Shopify stores <br />
                  from <span className="text-[#3DDC2B]">£3,500.</span>
                </span>

                <span className="mt-[8px] text-[12px] leading-[16px] tracking-[-0.02em] text-white">
                  Migration from WooCommerce, Magento or Squarespace included
                  where needed.
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-[86px] flex items-center justify-between gap-[20px]">
            {shopifyHeroStats.map(
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

export default ShopifyHero;
