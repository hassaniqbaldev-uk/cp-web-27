"use client";

import { aboutStats } from "@/config/common";
import CountUp from "../ui/CountUp";
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
        className="bg-grey/40 flex min-h-screen flex-col justify-center pt-[100px] pb-[80px]"
      >
        <Container className="relative">
          <div className="relative z-[12] flex items-center items-start justify-between gap-[45px] pt-[63px]">
            <div className="flex w-[510px] flex-col items-start">
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
                labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-[85px] leading-[90px] font-extrabold tracking-[-0.07em] text-black"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[30px] rounded-full bg-black px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
                >
                  Tell us what you need
                </Button>
              </div>
            </div>

            <div className="w-[305px] rounded-[20px] bg-white px-[30px] pt-[30px] pb-[40px]">
              <h2 className="text-text-body text-[25px] font-bold tracking-[-0.07em]">
                Strategy, Design &amp; Technology, Together
              </h2>

              <p className="text-text-body mt-[10px] text-[16px] tracking-[-0.02em]">
                CreativePixels is a UK digital agency bringing strategy, design
                and technology together across websites, ecommerce, branding,
                growth and custom digital products. Senior people stay involved
                from the first conversation through launch - and beyond.
              </p>
            </div>
          </div>

          <div className="relative z-[12] mt-[140px]">
            <ul className="grid grid-cols-4 gap-[6px]">
              {aboutStats.map(({ id, value, label }) => (
                <li
                  key={id}
                  className="flex items-center gap-[20px] rounded-[20px] bg-white p-[20px] select-none"
                >
                  <p className="shrink-0 text-[65px] font-extrabold tracking-[-0.07em] text-black">
                    <CountUp value={value} />
                  </p>

                  <span className="h-[40px] w-px shrink-0 bg-black" />

                  <p className="text-text-body text-[16px] leading-[24px] font-medium tracking-[-0.02em]">
                    {label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-[424px] z-[10] w-max">
            <Image
              src="/images/about/hassan-hero-img.png"
              alt=""
              width={594}
              height={705}
              className="block"
            />
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 z-[11] h-[371px] w-full">
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
