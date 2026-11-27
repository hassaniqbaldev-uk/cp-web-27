import { seoMonthly } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import DragWheel from "../ui/DragWheel";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const SeoMonthly = () => {
  return (
    <>
      <Section
        id="seo-monthly"
        className="relative overflow-hidden bg-[#EAF1FF] pt-[120px] max-sm:pt-[80px]"
      >
        <Image
          src="/images/services/gradient-bg-seo-monthly.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title="What you get every month"
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[32px] max-sm:leading-[34px] max-sm:text-balance"
          />
        </Container>

        <div className="relative z-10 mt-[20px] max-sm:pb-[90px]">
          <Image
            src="/images/services/globe-seo-monthly.png"
            alt=""
            width={819}
            height={251}
            className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-[819px] -translate-x-1/2 max-sm:w-[400px]"
          />

          {/* 3 cards repeated 4 times, 30deg apart, fill the 360deg wheel (phones:
              6 times, 20deg apart, so the side cards tilt less). */}
          <DragWheel
            radius={768}
            step={30}
            startIndex={1}
            centerY={196}
            phoneRadius={720}
            phoneCenterY={140}
            phoneStep={20}
            pauseOnHover
            className="h-[664px] max-sm:h-[345px]"
          >
            {seoMonthly.map(({ id, icon: Icon, title, description }, index) => (
              <div
                key={id}
                className="flex h-[308px] w-[343px] flex-col rounded-[20px] bg-white p-[40px] max-sm:h-[250px] max-sm:w-[230px] max-sm:p-[20px]"
              >
                <div className="flex h-[80px] items-start justify-between max-sm:h-[48px]">
                  <span className="text-blue pt-[5px] text-[35px] leading-[40px] font-medium tracking-[-0.06em] max-sm:text-[24px] max-sm:leading-[28px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon
                    size={75}
                    strokeWidth={1}
                    className="text-blue shrink-0 max-sm:size-[44px]"
                  />
                </div>

                <h3 className="mt-[25px] text-[22px] leading-[28px] font-bold tracking-[-0.06em] text-black max-sm:mt-[16px] max-sm:text-[18px] max-sm:leading-[22px]">
                  {title}
                </h3>

                <p className="text-text-body mt-[15px] text-[16px] leading-[21px] tracking-[-0.02em] max-sm:mt-[8px] max-sm:text-[14px] max-sm:leading-[19px]">
                  {description}
                </p>
              </div>
            ))}
          </DragWheel>

          {/* Fade the outer cards out; they reach in to the globe's edges. */}
          <span className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[calc(50%-390px)] bg-[linear-gradient(360deg,#EAF1FF_0%,rgba(234,241,255,0)_100%)] mask-[linear-gradient(to_right,#000_45%,transparent_100%)] max-sm:hidden" />

          <span className="pointer-events-none absolute right-0 bottom-0 h-[320px] w-[calc(50%-390px)] bg-[linear-gradient(360deg,#EAF1FF_0%,rgba(234,241,255,0)_100%)] mask-[linear-gradient(to_left,#000_45%,transparent_100%)] max-sm:hidden" />
        </div>
      </Section>
    </>
  );
};

export default SeoMonthly;
