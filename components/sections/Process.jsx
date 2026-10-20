"use client";

import { processSteps } from "@/config/common";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Step = ({
  step: {
    step,
    title,
    description,
    accentClassName,
    borderClassName,
    textClassName,
  },
}) => {
  return (
    <li className="flex items-stretch gap-[20px]">
      <div className="flex w-[12px] shrink-0 flex-col items-center">
        <span className="bg-text-body/30 relative size-[12px] shrink-0 rounded-full">
          <span
            data-dot
            className={`absolute inset-0 rounded-full opacity-0 ${accentClassName}`}
          />
        </span>

        <span className="bg-text-body/30 relative w-px flex-1">
          <span
            data-fill
            className={`absolute inset-0 origin-top scale-y-0 ${accentClassName}`}
          />
        </span>
      </div>

      <div className="flex-1 rounded-[20px] bg-white p-[30px]">
        <p
          className={`inline-flex w-fit rounded-full border px-[20px] py-[10px] text-[18px] font-medium tracking-[-0.02em] ${borderClassName} ${textClassName}`}
        >
          STEP {step}
        </p>

        <h3 className="mt-[30px] text-[35px] font-bold tracking-[-0.07em] text-black">
          {title}
        </h3>

        <p className="text-text-body mt-[10px] text-[16px] leading-[24px] tracking-[-0.02em]">
          {description}
        </p>
      </div>
    </li>
  );
};

const DOT_SHARE = 0.15;

const SCRUB = 0.4;

const Process = () => {
  const scrollRef = useRef(null);

  useGSAP(
    () => {
      const node = scrollRef.current;
      const track = node?.firstElementChild;

      if (!node || !track) return;

      const dots = gsap.utils.toArray("[data-dot]", node);
      const fills = gsap.utils.toArray("[data-fill]", node);

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          scroller: node,
          trigger: track,
          start: "top top",
          end: "bottom bottom",
          scrub: SCRUB,
        },
      });

      fills.forEach((fill, index) => {
        timeline.to(fill, { scaleY: 1, duration: 1 }, index);

        if (dots[index]) {
          timeline.to(dots[index], { opacity: 1, duration: DOT_SHARE }, index);
        }
      });
    },
    { scope: scrollRef },
  );

  return (
    <>
      <Section className="">
        <Container className="bg-grey/40 flex justify-between gap-[40px] rounded-[20px] pt-[60px] pr-[60px] pl-[80px]">
          <div className="flex w-[530px] flex-col items-start">
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
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-[85px] mt-[10px] font-extrabold tracking-[-0.07em] text-black leading-[80px]"
              subtitleClassName="text-[18px] max-w-[400px] text-text-body mt-[20px] leading-[28px] tracking-[-0.02em]"
            />

            <div className="flex">
              <Button
                href="/contact"
                className="mt-[45px] rounded-[60px] bg-black px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Start your project
              </Button>
            </div>
          </div>

          <div className="relative w-[480px]">
            <div
              ref={scrollRef}
              data-lenis-prevent
              className="no-scrollbar h-[500px] overflow-y-auto pb-[30px]"
            >
              <ol className="flex flex-col gap-[20px]">
                {processSteps.map((processStep) => (
                  <Step key={processStep.id} step={processStep} />
                ))}
              </ol>
            </div>

            <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[120px] bg-linear-to-b from-[#f4f4f4] to-transparent opacity-85" />

            <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[120px] bg-linear-to-t from-[#f4f4f4] to-transparent opacity-85" />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Process;
