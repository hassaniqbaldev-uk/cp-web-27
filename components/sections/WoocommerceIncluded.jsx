import { woocommerceIncluded } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WoocommerceIncluded = () => {
  return (
    <>
      <Section
        id="woocommerce-included"
        className="relative overflow-hidden bg-black bg-[radial-gradient(60%_45%_at_60%_72%,#4A4A4A_0%,rgba(74,74,74,0)_100%)] pt-[120px]"
      >
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                What’s included in a <br />
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  WooCommerce build
                </span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white"
          />

          <ul className="mt-[75px] grid grid-cols-2 gap-x-[30px] gap-y-[45px]">
            {woocommerceIncluded.map(
              ({ id, icon: Icon, iconClassName, title, description }) => (
                <li
                  key={id}
                  className="flex min-h-[184px] items-start gap-[18px] rounded-[20px] bg-white px-[30px] py-[38px]"
                >
                  <span
                    className={`flex size-[62px] shrink-0 items-center justify-center rounded-full text-white ${iconClassName}`}
                  >
                    <Icon size={30} />
                  </span>

                  <div>
                    <h3 className="text-[35px] leading-[42px] font-bold tracking-[-0.06em] text-black">
                      {title}
                    </h3>

                    <p className="text-text-body mt-[12px] max-w-[430px] text-[18px] leading-[24px] tracking-[-0.02em]">
                      {description}
                    </p>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Container>

        <div className="relative mt-[90px] flex justify-center">
          <Image
            src="/images/home/smokey-carter-who-we-help-img.png"
            alt="Smokey Carter website on a laptop"
            width={1920}
            height={722}
            className="h-auto w-[1920px] max-w-none shrink-0"
          />

          <div className="absolute top-[85px] left-1/2 ml-[395px]">
            <CircularTextButton
              href="/work/smokey-carter"
              image="/images/services/circular-text-live-site-ui-ux-process.png"
              imageWidth={130}
              imageHeight={130}
              className="size-[130px]"
              ringClassName="h-auto w-full"
            >
              <ArrowUpRight
                size={30}
                strokeWidth={2.5}
                className="text-white"
              />
            </CircularTextButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WoocommerceIncluded;
