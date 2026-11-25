import { ecommerceIncluded } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const EcommerceIncluded = () => {
  return (
    <>
      {/* The laptop pokes out above, so only the sparkles are clipped. */}
      <Section
        id="ecommerce-included"
        className="relative bg-[#0D0B10] bg-[radial-gradient(90%_70%_at_50%_100%,#77757A_0%,rgba(119,117,122,0)_100%)] pt-[130px] pb-[200px]"
      >
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Starfield className="absolute bottom-[-50px] left-1/2 h-[242px] w-[1170px] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        <Container className="relative z-10">
          <div className="flex items-start justify-between">
            <SectionHeading
              title={
                <>
                  What’s included in <br />
                  <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                    every store build
                  </span>
                </>
              }
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white"
            />

            <Image
              src="/images/services/laptop-ecommerce-included.png"
              alt="Ivy & Duke online store on a laptop"
              width={569}
              height={342}
              className="mt-[-195px] h-auto w-[569px] shrink-0"
            />
          </div>

          <ul className="mt-[63px] grid grid-cols-3 gap-[30px]">
            {ecommerceIncluded.map(({ id, icon: Icon, title, description }) => (
              <li
                key={id}
                className="flex min-h-[366px] flex-col items-start rounded-[20px] bg-white p-[36px]"
              >
                <span className="bg-dark-pink flex size-[99px] shrink-0 items-center justify-center rounded-full text-white">
                  <Icon size={36} />
                </span>

                <h3 className="mt-[45px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] whitespace-nowrap text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[18px] text-[20px] leading-[33px] tracking-[-0.02em]">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default EcommerceIncluded;
