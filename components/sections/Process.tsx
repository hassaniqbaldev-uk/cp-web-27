"use client";

import { processSteps } from "@/config/common";
import type { ProcessStep } from "@/types/common";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

type StepProps = {
  step: ProcessStep;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

/**
 * Its own component because each step derives a motion value with a hook, which
 * cannot be done inside a map callback.
 */
const Step = ({
  step: {
    step,
    title,
    description,
    accentClassName,
    borderClassName,
    textClassName,
  },
  index,
  total,
  progress,
}: StepProps) => {
  // Each step owns an equal slice of the scroll, so its segment fills only
  // while the reader is passing that step. Clamped so it holds at either end
  // instead of running past.
  const start = index / total;

  const fill = useTransform(progress, [start, (index + 1) / total], [0, 1], {
    clamp: true,
  });

  // The dot marks where its step begins, so it colours in over the first
  // fraction of that step's slice rather than easing across the whole of it.
  const dotFill = useTransform(
    progress,
    [start, start + 0.15 / total],
    [0, 1],
    {
      clamp: true,
    },
  );

  return (
    <li className="gap-sm flex items-stretch">
      <div className="flex w-[1.2rem] shrink-0 flex-col items-center">
        {/* Neutral base with the accent fading in over it, so the dot reads as
            unreached before its step and filled once passed. Opacity keeps it
            on the compositor. */}
        <span
          aria-hidden="true"
          className="bg-text-body/30 relative size-[1.2rem] shrink-0 rounded-full"
        >
          <motion.span
            style={{ opacity: dotFill }}
            className={`absolute inset-0 rounded-full ${accentClassName}`}
          />
        </span>

        {/* No top margin, so the line starts flush against the dot and the two
            read as one marker. */}
        <span
          aria-hidden="true"
          className="bg-text-body/30 relative w-px flex-1"
        >
          {/* Scales from the top rather than animating height, so the browser
              keeps it on the compositor instead of laying out every frame. */}
          <motion.span
            style={{ scaleY: fill }}
            className={`absolute inset-0 origin-top ${accentClassName}`}
          />
        </span>
      </div>

      <div className="p-md flex-1 rounded-md bg-white">
        {/* The ordered list already conveys the sequence, so the printed number
            is decoration and would otherwise be read out twice. */}
        <p
          aria-hidden="true"
          className={`text-body-02 py-xs px-sm inline-flex w-fit rounded-full border font-medium tracking-[-0.02em] ${borderClassName} ${textClassName}`}
        >
          STEP {step}
        </p>

        <h3 className="text-subheading-02 mt-md font-bold tracking-[-0.07em] text-black">
          {title}
        </h3>

        <p className="text-body-03 text-text-body mt-xs leading-[2.4rem] tracking-[-0.02em]">
          {description}
        </p>
      </div>
    </li>
  );
};

const Process = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Tracks the steps list's own scrollbar rather than the page's, so the line
  // fills from empty to full exactly across this box.
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // Smoothed so the fill glides instead of snapping frame to frame with the
  // wheel. Damping is high enough that it never overshoots past the head.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Section className="pb-3xl">
        <Container className="bg-grey/40 flex justify-between gap-[4rem] rounded-md pt-[6rem] pr-[6rem] pl-[8rem]">
          <div className="flex w-[52.5rem] flex-col items-start">
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
              labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 mt-xs font-extrabold tracking-[-0.07em] text-black leading-[8rem]"
              subtitleClassName="text-body-02 max-w-[40rem] text-text-body mt-sm leading-[2.8rem] tracking-[-0.02em]"
            />

            <Button
              href="/contact"
              className="text-body-02 px-sm py-xs mt-lg rounded-xl bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
            >
              Start your project
            </Button>
          </div>

          <div className="relative w-[48rem]">
            {/* tabIndex makes the box reachable by keyboard — a scrollable
                region that cannot be focused is unscrollable without a mouse. */}
            <div
              ref={scrollRef}
              tabIndex={0}
              role="region"
              aria-label="Process steps"
              className="pb-md no-scrollbar h-[50rem] overflow-y-auto"
            >
              <ol className="gap-sm flex flex-col">
                {processSteps.map((processStep, index) => (
                  <Step
                    key={processStep.id}
                    step={processStep}
                    index={index}
                    total={processSteps.length}
                    progress={progress}
                  />
                ))}
              </ol>
            </div>

            {/* Sit over the head and foot of the scroll area so the list fades
                in and out rather than being cut off. pointer-events-none keeps
                them from swallowing scrolls and clicks on the cards beneath. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[12rem] bg-linear-to-b from-[#f4f4f4] to-transparent"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[12rem] bg-linear-to-t from-[#f4f4f4] to-transparent"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Process;
