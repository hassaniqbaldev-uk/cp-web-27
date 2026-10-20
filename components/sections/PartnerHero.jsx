"use client";

import { partnerStats } from "@/config/common";
import CountUp from "../ui/CountUp";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const terms = [
  { id: "nda", text: "NDA before the brief", swatchClassName: "bg-dark-pink" },
  {
    id: "client",
    text: "Your client stays yours",
    swatchClassName: "bg-orange",
  },
  { id: "fit", text: "Yes or no on fit in 48h", swatchClassName: "bg-blue" },
  {
    id: "scope",
    text: "Any part, or all of it",
    swatchClassName: "bg-[#6FDC8C]",
  },
];

const BLUR_LAYERS = [0.7, 1.4, 2.8, 5.6, 11.25, 22.5, 45, 90];

const BLUR_START = 12.45;

const PartnerHero = () => {
  return (
    <>
      <Section
        id="partner-hero"
        className="bg-grey/40 relative flex min-h-screen flex-col justify-center pt-[200px] pb-[80px]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 bottom-[80px] w-max">
            <Image
              src="/images/partner-with-us/hero-mockup-img.png"
              alt=""
              width={941}
              height={850}
              className="block shrink-0"
            />
          </div>

          <div className="pointer-events-none absolute bottom-[80px] left-0 h-[371px] w-full">
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

            <span className="absolute inset-0 bg-[linear-gradient(0deg,#F4F4F4_0%,rgba(244,244,244,0)_100%)]" />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="flex w-[565px] flex-col items-start">
            <SectionHeading
              as="h1"
              label="For agencies"
              title={
                <>
                  White-label websites, built{" "}
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    for agencies.
                  </span>
                </>
              }
              subtitle="Your name on the work, ours on nothing. White label web design and development for agencies: we support you with design, development, ecommerce, apps and specialist work under their brand, without competing for the client relationship."
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-[85px] mt-[10px] leading-[90px] font-extrabold tracking-[-0.07em] text-black"
              subtitleClassName="text-[18px] text-text-body mt-[20px] max-w-[700px] leading-[28px] tracking-[-0.02em]"
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

          <ul className="absolute top-[-70px] right-0 flex flex-col gap-[8px] rounded-[20px] bg-white p-[30px]">
            {terms.map(({ id, text, swatchClassName }) => (
              <li key={id} className="flex items-center gap-[10px]">
                <span className={`size-[8px] shrink-0 ${swatchClassName}`} />

                <span className="text-[16px] tracking-[-0.02em] text-black">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-[60px]">
            <ul className="grid grid-cols-4 gap-[6px]">
              {partnerStats.map(({ id, value, label }) => (
                <li
                  key={id}
                  className="flex items-center gap-[20px] rounded-[20px] bg-white p-[20px] select-none"
                >
                  <p className="shrink-0 text-[50px] font-extrabold tracking-[-0.07em] text-black">
                    <CountUp value={value} />
                  </p>

                  <span className="h-[40px] w-px shrink-0 bg-black" />

                  <p className="text-text-body leading-[22px] font-medium tracking-[-0.02em]">
                    {label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PartnerHero;
