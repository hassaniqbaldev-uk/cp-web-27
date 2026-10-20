"use client";

import { workflowSteps } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const BLUR_LAYERS = [0.7, 1.4, 2.8, 5.6, 11.25, 22.5, 45, 90];

const BLUR_START = 12.45;

const HowWeWorkHero = () => {
  return (
    <>
      <Section
        id="how-we-work-hero"
        className="relative mb-[45px] h-[800px] bg-black"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Starfield className="absolute top-1/2 right-[-50px] z-0 h-[800px] w-[214px] -translate-y-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

          <div className="absolute right-0 bottom-0 w-max">
            <Image
              src="/images/how-we-work/hero-mockup-img.png"
              alt=""
              width={729}
              height={649}
              className="block shrink-0"
            />
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 h-[371px] w-full">
            {BLUR_LAYERS.map((blur, index) => {
              const span = (100 - BLUR_START) / BLUR_LAYERS.length;
              const from = BLUR_START + span * index;
              const mask = `linear-gradient(to bottom, transparent ${from}%, black ${from + span}%, black 100%)`;

              return (
                <span
                  key={blur}
                  className="absolute inset-0"
                  style={{
                    backdropFilter: `blur(${blur}px)`,
                    WebkitBackdropFilter: `blur(${blur}px)`,
                    maskImage: mask,
                    WebkitMaskImage: mask,
                  }}
                />
              );
            })}

            <span className="absolute inset-0 bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%)]" />
          </div>
        </div>

        <Container className="relative z-[20] flex flex-col items-start pt-[180px]">
          <div className="w-[600px]">
            <SectionHeading
              as="h1"
              label="How we work"
              title={
                <>
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    A clear process.
                  </span>{" "}
                  Senior people involved.
                </>
              }
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-white uppercase"
              titleClassName="text-[85px] leading-[90px] font-extrabold tracking-[-0.07em] text-white"
            />

            <p className="text-grey mt-[30px] max-w-[483px] text-[18px] leading-[28px] tracking-[-0.02em]">
              What happens before a proposal, what is fixed before work starts,
              how the build runs, and what we still do after launch. No mystery,
              no six-week silence.
            </p>
          </div>

          <div className="mt-[80px] w-full">
            <ul className="grid w-full grid-cols-4 gap-[10px]">
              {workflowSteps.map(({ id, step, title, details }) => (
                <li
                  key={id}
                  className="bg-grey/70 rounded-[20px] p-[30px] backdrop-blur-[20px]"
                >
                  <p className="inline-flex w-fit rounded-[60px] bg-white px-[20px] py-[10px] text-[22px] font-medium tracking-[-0.02em]">
                    STEP {step}
                  </p>

                  <h2 className="mt-[30px] text-[35px] font-bold tracking-[-0.07em]">
                    {title}
                  </h2>

                  <ul className="mt-[10px] flex flex-col gap-[20px]">
                    {details.map((detail) => (
                      <li key={detail.id}>
                        <p className="text-[14px] font-extrabold">
                          {detail.title}
                        </p>

                        <p className="text-text-body text-[16px] leading-[24px]">
                          {detail.subtitle}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HowWeWorkHero;
