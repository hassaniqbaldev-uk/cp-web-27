import { journeySteps } from "@/config/common";
import { Fragment } from "react";
import VerticalDragMarquee from "../ui/VerticalDragMarquee";
import Starfield from "../ui/Starfield";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AboutJourney = () => {
  return (
    <>
      <Section
        id="journey"
        className="relative flex h-[560px] items-center overflow-hidden bg-black"
      >
        <div className="absolute top-0 left-1/2 h-full w-full max-w-[1440px] -translate-x-1/2">
          <Starfield className="absolute bottom-[-50px] left-0 z-0 h-[160px] w-[600px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

          <Starfield className="absolute right-0 bottom-0 bottom-[-50px] z-0 h-[160px] w-[600px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        <div className="group absolute top-1/2 left-1/2 z-20 h-full w-[380px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <VerticalDragMarquee
            pauseOnHover
            className="h-full"
            trackClassName="flex flex-col"
            slideClassName="p-[45px] mb-[20px] w-[360px] shrink-0 rounded-[20px] bg-white"
          >
            {journeySteps.map(
              ({
                id,
                step,
                title,
                description,
                borderClassName,
                textClassName,
              }) => (
                <Fragment key={id}>
                  <p
                    className={`inline-flex w-fit rounded-full border px-[20px] py-[10px] text-[22px] font-medium tracking-[-0.02em] ${borderClassName} ${textClassName}`}
                  >
                    STEP {step}
                  </p>

                  <p className="mt-[30px] text-[35px] font-bold tracking-[-0.07em] text-black">
                    {title}
                  </p>

                  <p className="text-text-body mt-[10px] text-[16px] leading-[24px]">
                    {description}
                  </p>
                </Fragment>
              ),
            )}
          </VerticalDragMarquee>

          <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[120px] bg-linear-to-b from-black to-transparent" />

          <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[120px] bg-linear-to-t from-black to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="flex items-center justify-between gap-[45px]">
            <div className="flex w-[380px] flex-col items-start">
              <SectionHeading
                label="12+ Years"
                title={
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_74.04%)] bg-clip-text pr-[0.07em] text-transparent">
                    Start Building
                  </span>
                }
                labelClassName="text-[22px] font-medium tracking-[-0.02em] text-white uppercase"
                titleClassName=" text-[110px] leading-[120px] font-bold tracking-[-0.07em]"
              />
            </div>

            <p className="w-[380px] text-end text-[110px] leading-[120px] font-bold tracking-[-0.07em] text-white">
              Kept Building
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutJourney;
