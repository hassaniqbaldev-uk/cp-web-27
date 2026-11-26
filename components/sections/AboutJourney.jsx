import { journeySteps } from "@/config/common";
import Image from "next/image";
import { Fragment } from "react";
import DragMarquee from "../ui/DragMarquee";
import VerticalDragMarquee from "../ui/VerticalDragMarquee";
import Starfield from "../ui/Starfield";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const JourneyCardBody = ({
  step,
  title,
  description,
  borderClassName,
  textClassName,
}) => (
  <>
    <p
      className={`inline-flex w-fit rounded-full border px-[20px] py-[10px] text-[22px] font-medium tracking-[-0.02em] max-sm:px-[16px] max-sm:py-[6px] max-sm:text-[15px] ${borderClassName} ${textClassName}`}
    >
      STEP {step}
    </p>

    <p className="mt-[30px] text-[35px] font-bold tracking-[-0.07em] text-black max-sm:mt-[16px] max-sm:text-[26px] max-sm:leading-[30px]">
      {title}
    </p>

    <p className="text-text-body mt-[10px] text-[16px] leading-[24px] max-sm:text-[15px] max-sm:leading-[22px]">
      {description}
    </p>
  </>
);

const AboutJourney = () => {
  return (
    <>
      <Section
        id="journey"
        className="relative flex h-[560px] items-center overflow-hidden bg-black max-sm:h-auto max-sm:flex-col max-sm:py-[80px]"
      >
        <Image
          src="/images/about/gradient-bg-about-journey.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        <div className="absolute top-0 left-1/2 h-full w-full max-w-[1440px] -translate-x-1/2">
          <Starfield className="absolute bottom-[-50px] left-0 z-0 h-[160px] w-[600px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

          <Starfield className="absolute right-0 bottom-0 bottom-[-50px] z-0 h-[160px] w-[600px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        <div className="group absolute top-1/2 left-1/2 z-20 h-full w-[380px] -translate-x-1/2 -translate-y-1/2 overflow-hidden max-sm:hidden">
          <VerticalDragMarquee
            pauseOnHover
            className="h-full"
            trackClassName="flex flex-col"
            slideClassName="p-[45px] mb-[20px] w-[360px] shrink-0 rounded-[20px] bg-white"
          >
            {journeySteps.map((journeyStep) => (
              <Fragment key={journeyStep.id}>
                <JourneyCardBody {...journeyStep} />
              </Fragment>
            ))}
          </VerticalDragMarquee>
        </div>

        <Container className="relative z-10 max-sm:contents">
          <div className="flex items-center justify-between gap-[45px] max-sm:contents">
            <div className="flex w-[380px] flex-col items-start max-sm:relative max-sm:z-10 max-sm:order-1 max-sm:w-full max-sm:items-center max-sm:px-[20px] max-sm:text-center">
              <SectionHeading
                label="12+ Years"
                title={
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_74.04%)] bg-clip-text pr-[0.07em] text-transparent">
                    Start Building
                  </span>
                }
                labelClassName="text-[22px] font-medium tracking-[-0.02em] text-white uppercase max-sm:text-[16px]"
                titleClassName="text-[90px] leading-[100px] font-bold tracking-[-0.07em] max-sm:text-[48px] max-sm:leading-[54px]"
              />
            </div>

            <p className="w-[380px] text-end text-[90px] leading-[100px] font-bold tracking-[-0.07em] text-white max-sm:relative max-sm:z-10 max-sm:order-2 max-sm:w-full max-sm:px-[20px] max-sm:text-center max-sm:text-[48px] max-sm:leading-[54px]">
              Kept Building
            </p>
          </div>
        </Container>

        <DragMarquee
          pauseOnHover
          className="relative z-10 order-3 mt-[40px] hidden w-full max-sm:block"
          trackClassName="flex w-max items-stretch"
          slideClassName="flex shrink-0 pr-[12px]"
        >
          {journeySteps.map((journeyStep) => (
            <div
              key={journeyStep.id}
              className="flex w-[280px] flex-col rounded-[20px] bg-white p-[24px]"
            >
              <JourneyCardBody {...journeyStep} />
            </div>
          ))}
        </DragMarquee>
      </Section>
    </>
  );
};

export default AboutJourney;
