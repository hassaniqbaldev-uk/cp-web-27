import { brandingNeeds } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const BrandingNeeds = () => {
  return (
    <>
      <Section id="branding-needs" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                Refresh, rebrand or new brand: <br />
                <span className="text-black/50">which do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[36px] max-sm:leading-[38px]"
          />

          <div className="relative mt-[50px] flex min-h-[510px] items-center justify-between overflow-hidden rounded-[20px] pl-[50px] max-sm:mt-[30px] max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch max-sm:gap-[20px] max-sm:px-[24px] max-sm:pt-[35px]">
            <Image
              src="/images/services/gradient-bg-branding-needs.png"
              alt=""
              fill
              sizes="1200px"
              className="pointer-events-none z-0 object-cover"
            />

            <ul className="relative z-10 flex max-w-[414px] flex-col gap-[35px] max-sm:max-w-none max-sm:gap-[24px]">
              {brandingNeeds.map(({ id, title, description }) => (
                <li key={id}>
                  <h3 className="text-[35px] leading-[40px] font-bold tracking-[-0.06em] text-white max-sm:text-[26px] max-sm:leading-[30px]">
                    {title}
                  </h3>

                  <p className="mt-[5px] text-[18px] leading-[26px] tracking-[-0.02em] text-white max-sm:text-[16px] max-sm:leading-[24px]">
                    {description}
                  </p>
                </li>
              ))}
            </ul>

            <Image
              src="/images/services/stationery-branding-needs.png"
              alt="Brand stationery mockup: posters, notebook, mug, business cards and letterhead"
              width={692}
              height={510}
              className="pointer-events-none relative z-10 shrink-0 object-contain max-sm:-mx-[24px] max-sm:h-auto max-sm:w-[calc(100%+48px)] max-sm:max-w-none"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BrandingNeeds;
