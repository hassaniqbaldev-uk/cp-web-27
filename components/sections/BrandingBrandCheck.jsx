import Image from "next/image";
import BrandCheckForm from "../ui/BrandCheckForm";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const BrandingBrandCheck = () => {
  return (
    <>
      <Section
        id="branding-brand-check"
        className="relative overflow-hidden bg-black py-[120px] max-sm:py-[80px]"
      >
        <Image
          src="/images/services/gradient-bg-branding-brand-check.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        <div className="absolute top-0 left-1/2 h-full w-full max-w-[1440px] -translate-x-1/2">
          <Starfield className="absolute right-0 bottom-[-50px] z-0 h-[200px] w-[770px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)] max-sm:w-full" />
        </div>

        <Container className="relative z-10 max-sm:px-[20px]">
          <div className="flex items-center justify-between gap-[45px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[35px]">
            <div className="flex w-[480px] flex-col items-start max-sm:w-full max-sm:items-center max-sm:text-center">
              <SectionHeading
                title={
                  <>
                    Get a free <br />
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      brand check
                    </span>
                  </>
                }
                titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white max-sm:text-[36px] max-sm:leading-[38px]"
                subtitle="Not sure if you need a refresh or a rebrand? Send us your links. We’ll record a short video showing where your brand looks inconsistent and what we’d fix first."
                subtitleClassName="mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em] text-white max-sm:mt-[16px] max-sm:text-[16px] max-sm:leading-[24px]"
              />

              <p className="text-orange mt-[20px] text-[18px] font-extrabold tracking-[-0.02em] uppercase max-sm:mt-[16px] max-sm:text-[14px] max-sm:leading-[20px]">
                Usually within 2 working days. <br className="sm:hidden" />
                No obligation.
              </p>
            </div>

            <div className="w-[585px] rounded-[20px] bg-white p-[45px] max-sm:w-full max-sm:p-[20px]">
              <BrandCheckForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BrandingBrandCheck;
