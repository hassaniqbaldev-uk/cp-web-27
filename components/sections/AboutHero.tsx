"use client";

import { aboutStats } from "@/config/common";
import { Fragment } from "react";
import DragMarquee from "../ui/DragMarquee";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const BLUR_LAYERS = [0.7, 1.4, 2.8, 5.6, 11.25, 22.5, 45, 90];

const BLUR_START = 12.45;

const AboutHero = () => {
  return (
    <>
      <Section
        id="about-hero"
        className="bg-grey/40 max-425:min-h-auto max-425:pb-[3rem] max-425:pt-xl flex min-h-screen flex-col justify-center pt-[10rem] pb-[8rem]"
      >
        <Container className="relative">
          <div className="gap-lg max-425:gap-md max-425:px-[3rem] max-425:flex-col max-425:items-center max-425:text-center relative z-[12] flex items-center items-start justify-between pt-[6.3rem]">
            <div className="max-425:items-center max-425:w-full flex w-[51rem] flex-col items-start">
              <SectionHeading
                as="h1"
                label="About Creative Pixels"
                title={
                  <>
                    <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                      Strategy first.
                    </span>{" "}
                    Senior people involved.
                  </>
                }
                labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-heading-02 max-425:mt-[.4rem] max-425:text-[4.5rem] max-425:leading-[4.5rem] max-425:max-w-[27rem] leading-[9rem] font-extrabold tracking-[-0.07em] text-black"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="text-body-03 max-425:text-[1.4rem] px-sm py-xs max-425:mt-[2rem] mt-md rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
                >
                  Tell us what you need
                </Button>
              </div>
            </div>

            <div className="px-md pt-md max-425:w-full max-425:p-[2rem] w-[30.5rem] rounded-md bg-white pb-[4rem]">
              <h2 className="text-subheading-01 max-425:text-[1.6rem] text-text-body font-bold tracking-[-0.07em]">
                Strategy, Design &amp; Technology, Together
              </h2>

              <p className="text-body-03 max-425:text-[1.2rem] text-text-body mt-xs tracking-[-0.02em]">
                CreativePixels is a UK digital agency bringing strategy, design
                and technology together across websites, ecommerce, branding,
                growth and custom digital products. Senior people stay involved
                from the first conversation through launch - and beyond.
              </p>
            </div>
          </div>

          <div className="max-425:overflow-hidden max-425:motion-reduce:overflow-x-auto max-425:mt-[29rem] relative z-[12] mt-[14rem]">
            <DragMarquee
              query="(max-width: 425px)"
              trackClassName="max-425:w-max max-425:flex-nowrap max-425:flex grid grid-cols-4 gap-[.6rem]"
              slideClassName="gap-sm max-425:gap-xs p-sm max-425:w-[20rem] max-425:shrink-0 max-425:rounded-sm flex items-center rounded-md bg-white select-none"
            >
              {aboutStats.map(({ id, value, label }) => (
                <Fragment key={id}>
                  <p className="max-425:text-[3.5rem] shrink-0 text-[6.5rem] font-extrabold tracking-[-0.07em] text-black">
                    {value}
                  </p>

                  <span
                    aria-hidden="true"
                    className="max-425:h-[2rem] h-[4rem] w-px shrink-0 bg-black"
                  />

                  <p className="text-body-03 max-425:text-[1.2rem] text-text-body max-425:leading-[1.8rem] leading-[2.4rem] font-medium tracking-[-0.02em]">
                    {label}
                  </p>
                </Fragment>
              ))}
            </DragMarquee>
          </div>

          <div className="max-425:left-1/2 max-425:-translate-x-1/2 max-425:mt-md pointer-events-none absolute bottom-0 left-[42.4rem] z-[10] w-max">
            <Image
              src="/images/about/hassan-hero-img.png"
              alt=""
              aria-hidden="true"
              width={594}
              height={705}
              className="max-425:h-auto max-425:w-[30rem] block"
            />
          </div>

          <div
            aria-hidden="true"
            className="max-425:h-[16rem] pointer-events-none absolute bottom-0 left-0 z-[11] h-[37.1rem] w-full"
          >
            {BLUR_LAYERS.map((blur, index) => {
              const span = (80 - BLUR_START) / BLUR_LAYERS.length;
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

            <span className="absolute inset-0 bg-[linear-gradient(0deg,#F4F4F4_0%,rgba(244,244,244,0)_100%)]" />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutHero;
