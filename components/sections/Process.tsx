"use client";

import { processSteps } from "@/config/common";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import type { ProcessStep } from "@/types/common";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

type StepProps = {
  step: ProcessStep;
};

const Step = ({
  step: {
    step,
    title,
    description,
    accentClassName,
    borderClassName,
    textClassName,
  },
}: StepProps) => {
  return (
    <li className="gap-sm flex items-stretch">
      <div className="flex w-[1.2rem] shrink-0 flex-col items-center">
        <span
          aria-hidden="true"
          className="bg-text-body/30 relative size-[1.2rem] shrink-0 rounded-full"
        >
          <span
            data-dot
            className={`absolute inset-0 rounded-full opacity-0 ${accentClassName}`}
          />
        </span>

        <span
          aria-hidden="true"
          className="bg-text-body/30 relative w-px flex-1"
        >
          <span
            data-fill
            className={`absolute inset-0 origin-top scale-y-0 ${accentClassName}`}
          />
        </span>
      </div>

      <div className="p-md max-425:p-sm flex-1 rounded-md bg-white">
        <p
          aria-hidden="true"
          className={`text-body-02 max-425:text-[1.4rem] py-xs px-sm inline-flex w-fit rounded-full border font-medium tracking-[-0.02em] ${borderClassName} ${textClassName}`}
        >
          STEP {step}
        </p>

        <h3 className="text-subheading-02 max-425:text-[2.2rem] max-425:mt-sm mt-md font-bold tracking-[-0.07em] text-black">
          {title}
        </h3>

        <p className="text-body-03 max-425:text-[1.4rem] text-text-body mt-xs leading-[2.4rem] tracking-[-0.02em]">
          {description}
        </p>
      </div>
    </li>
  );
};

const DOT_SHARE = 0.15;

const SCRUB = 0.4;

const Process = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = scrollRef.current;
    const track = node?.firstElementChild;

    if (!node || !track) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const dots = gsap.utils.toArray<HTMLElement>("[data-dot]", node);
      const fills = gsap.utils.toArray<HTMLElement>("[data-fill]", node);

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          scroller: node,
          trigger: track,
          start: "top top",
          end: "bottom bottom",
          scrub: prefersReducedMotion ? true : SCRUB,
        },
      });

      fills.forEach((fill, index) => {
        timeline.to(fill, { scaleY: 1, duration: 1 }, index);

        if (dots[index]) {
          timeline.to(dots[index], { opacity: 1, duration: DOT_SHARE }, index);
        }
      });
    }, node);

    return () => context.revert();
  }, [prefersReducedMotion]);

  return (
    <>
      <Section className="max-425:px-[3rem]">
        <Container className="bg-grey/40 max-425:gap-lg max-425:flex-col max-425:pt-[3rem] max-425:px-[2rem] flex justify-between gap-[4rem] rounded-md pt-[6rem] pr-[6rem] pl-[8rem]">
          <div className="max-425:w-full max-425:items-center max-425:text-center flex w-[53rem] flex-col items-start">
            <SectionHeading
              label="The process"
              title={
                <>
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    Your roadmap
                  </span>{" "}
                  from idea to impact
                </>
              }
              subtitle={
                "We've refined our delivery process over 10 years to minimize risk and maximize speed to market."
              }
              labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 max-425:text-[4.5rem] max-425:leading-[4.5rem] mt-xs font-extrabold tracking-[-0.07em] text-black leading-[8rem]"
              subtitleClassName="text-body-02 max-425:text-[1.6rem] max-425:leading-[2.4rem] max-w-[40rem] text-text-body mt-sm leading-[2.8rem] tracking-[-0.02em]"
            />

            <div className="max-425:w-full flex">
              <Button
                href="/contact"
                className="text-body-02 max-425:text-[1.4rem] max-425:w-full max-425:mt-sm px-sm py-xs mt-lg rounded-xl bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Start your project
              </Button>
            </div>
          </div>

          <div className="max-425:w-full relative w-[48rem]">
            <div
              ref={scrollRef}
              tabIndex={0}
              role="region"
              aria-label="Process steps"
              data-lenis-prevent
              className="pb-md max-425:h-[42rem] no-scrollbar h-[50rem] overflow-y-auto"
            >
              <ol className="gap-sm flex flex-col">
                {processSteps.map((processStep) => (
                  <Step key={processStep.id} step={processStep} />
                ))}
              </ol>
            </div>

            <span
              aria-hidden="true"
              className="max-425:h-[6rem] pointer-events-none absolute inset-x-0 top-0 z-10 h-[12rem] bg-linear-to-b from-[#f4f4f4] to-transparent opacity-85"
            />

            <span
              aria-hidden="true"
              className="max-425:h-[6rem] pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[12rem] bg-linear-to-t from-[#f4f4f4] to-transparent opacity-85"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Process;
