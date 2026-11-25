import { shopifyBuild, shopifyBuildPoints } from "@/config/common";
import Image from "next/image";
import { LuCircleCheckBig } from "react-icons/lu";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const ShopifyBuild = () => {
  return (
    <>
      <Section
        id="shopify-build"
        className="overflow-hidden bg-[linear-gradient(90deg,#EFF8E1_60%,#F9FCF3_100%)] pt-[120px]"
      >
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                What we build in{" "}
                <span className="text-[#95BF47]">Shopify.</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <div className="mt-[95px] flex items-start gap-[65px]">
            {/* The store runs off the bottom of the section; the tag overlaps its corner. */}
            <div className="grid w-[450px] shrink-0">
              <div className="col-start-1 row-start-1 h-[645px] overflow-hidden rounded-t-[20px] mask-[linear-gradient(to_bottom,#000_80%,transparent_100%)]">
                <Image
                  src="/images/services/store-shopify-build.png"
                  alt="Superfeet online store homepage"
                  width={450}
                  height={645}
                  className="h-auto w-full"
                />
              </div>

              <Image
                src="/images/services/shopify-icon-ecommerce-hero.png"
                alt=""
                width={150}
                height={150}
                className="col-start-1 row-start-1 mt-[-95px] ml-[-40px] size-[150px] rotate-[-20deg]"
              />
            </div>

            <div className="min-w-0 flex-1 pb-[76px]">
              {/* Runs past the Container to the screen edge. */}
              <div className="mr-[calc((1200px-100vw)/2)] mask-[linear-gradient(to_right,transparent_0%,#000_4%,#000_75%,transparent_100%)]">
                <DragMarquee
                  pauseOnHover
                  trackClassName="flex w-max items-stretch"
                  slideClassName="shrink-0 pr-[15px]"
                >
                  {shopifyBuild.map(
                    ({ id, icon: Icon, title, description }) => (
                      <div
                        key={id}
                        className="flex min-h-[315px] w-[275px] flex-col items-start rounded-[20px] bg-white p-[30px]"
                      >
                        <span className="flex size-[67px] shrink-0 items-center justify-center rounded-full bg-[#22C05B] text-white">
                          <Icon size={30} />
                        </span>

                        <h3 className="mt-[25px] min-h-[58px] text-[25px] leading-[29px] font-bold tracking-[-0.06em] whitespace-pre-line text-black">
                          {title}
                        </h3>

                        <p className="text-text-body mt-[18px] text-[16px] leading-[21px] tracking-[-0.02em]">
                          {description}
                        </p>
                      </div>
                    ),
                  )}
                </DragMarquee>
              </div>

              <ul className="mt-[26px]">
                {shopifyBuildPoints.map((point) => (
                  <li
                    key={point}
                    className="flex h-[57px] items-center gap-[10px] border-b border-black/20 text-[22px] tracking-[-0.02em] text-black last:border-b-0"
                  >
                    <LuCircleCheckBig
                      size={20}
                      className="shrink-0 text-[#22C05B]"
                    />

                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ShopifyBuild;
