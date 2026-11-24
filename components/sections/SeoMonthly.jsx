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
        className="relative overflow-hidden bg-[#EAF1FF] pt-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-seo-monthly.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title="What you get every month"
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />
        </Container>

        <div className="relative z-10 mt-[20px]">
          <Image
            src="/images/services/globe-seo-monthly.png"
            alt=""
            width={819}
            height={251}
            className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-[819px] -translate-x-1/2"
          />

          {/* 3 cards repeated 4 times, 30deg apart, fill the 360deg wheel. */}
          <DragWheel
            radius={768}
            step={30}
            startIndex={1}
            centerY={196}
            pauseOnHover
            className="h-[664px]"
          >
            {seoMonthly.map(({ id, icon: Icon, title, description }, index) => (
              <div
                key={id}
                className="flex h-[308px] w-[343px] flex-col rounded-[20px] bg-white p-[40px]"
              >
                <div className="flex h-[80px] items-start justify-between">
                  <span className="text-blue pt-[5px] text-[35px] leading-[40px] font-medium tracking-[-0.06em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon
                    size={75}
                    strokeWidth={1}
                    className="text-blue shrink-0"
                  />
                </div>

                <h3 className="mt-[25px] text-[22px] leading-[28px] font-bold tracking-[-0.06em] text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[15px] text-[16px] leading-[21px] tracking-[-0.02em]">
                  {description}
                </p>
              </div>
            ))}
          </DragWheel>

          {/* Fade the outer cards out; they reach in to the globe's edges. */}
          <span className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[calc(50%-390px)] bg-[linear-gradient(360deg,#EAF1FF_0%,rgba(234,241,255,0)_100%)] mask-[linear-gradient(to_right,#000_45%,transparent_100%)]" />

          <span className="pointer-events-none absolute right-0 bottom-0 h-[320px] w-[calc(50%-390px)] bg-[linear-gradient(360deg,#EAF1FF_0%,rgba(234,241,255,0)_100%)] mask-[linear-gradient(to_left,#000_45%,transparent_100%)]" />
        </div>
      </Section>
    </>
  );
};

export default SeoMonthly;
