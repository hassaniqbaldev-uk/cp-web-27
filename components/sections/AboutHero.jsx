"use client";

import { aboutStats } from "@/config/common";
import CountUp from "../ui/CountUp";
import DragMarquee from "../ui/DragMarquee";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const BLUR_LAYERS = [0.7, 1.4, 2.8, 5.6, 11.25, 22.5, 45, 90];

const BLUR_START = 12.45;

const StatCard = ({ value, label }) => (
  <div className="flex w-full items-center gap-[20px] rounded-[20px] bg-white p-[20px] select-none max-sm:w-[190px] max-sm:flex-col max-sm:items-start max-sm:gap-[6px] max-sm:p-[16px]">
    <p className="shrink-0 text-[65px] font-extrabold tracking-[-0.07em] text-black max-sm:text-[36px] max-sm:leading-[40px]">
      <CountUp value={value} />
    </p>

    <span className="h-[40px] w-px shrink-0 bg-black max-sm:hidden" />

    <p className="text-text-body text-[16px] leading-[24px] font-medium tracking-[-0.02em] max-sm:text-[14px] max-sm:leading-[20px]">
      {label}
    </p>
  </div>
);

const AboutHero = () => {
  return (
    <>
      <Section
        id="about-hero"
        className="bg-grey/40 flex min-h-screen flex-col justify-center pt-[100px] pb-[80px] max-sm:pb-[60px]"
      >
        <Container className="relative max-sm:flex max-sm:flex-col max-sm:px-[20px]">
          <div className="relative z-[12] flex items-center items-start justify-between gap-[45px] pt-[63px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[30px] max-sm:pt-[30px]">
            <div className="flex w-[510px] flex-col items-start max-sm:w-full max-sm:items-center max-sm:text-center">
              <SectionHeading
                as="h1"
                title={
                  <>
                    <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                      Led from Manchester.
                    </span>{" "}
                    Built by our own team.
                  </>
                }
                titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.07em] text-black max-sm:text-[32px] max-sm:leading-[34px]"
                subtitle="A UK agency with a team of [20+] designers and developers, and senior people on every project."
                subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[28px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[15px] max-sm:leading-[22px]"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[30px] rounded-full bg-black px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:mt-[24px]"
                >
                  Book a 15-min call
                </Button>
              </div>

              <Link
                href="#team"
                className="group mt-[30px] inline-flex items-center gap-[8px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:mt-[20px] max-sm:text-[16px]"
              >
                Meet the team
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.5}
                  className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="w-[305px] rounded-[20px] bg-white px-[30px] pt-[30px] pb-[40px] max-sm:w-full max-sm:p-[35px] max-sm:text-center">
              <h2 className="text-text-body text-[25px] font-bold tracking-[-0.07em] max-sm:text-[22px] max-sm:leading-[26px]">
                Strategy, Design &amp; Technology, Together
              </h2>

              <p className="text-text-body mt-[10px] text-[16px] tracking-[-0.02em] max-sm:text-[15px] max-sm:leading-[23px]">
                CreativePixels is a UK digital agency bringing strategy, design
                and technology together across websites, ecommerce, branding,
                growth and custom digital products. Senior people stay involved
                from the first conversation through launch - and beyond.
              </p>
            </div>
          </div>

          <div className="relative z-[12] mt-[140px] max-sm:order-3 max-sm:-mt-[110px]">
            <ul className="grid grid-cols-4 gap-[6px] max-sm:hidden">
              {aboutStats.map((stat) => (
                <li key={stat.id} className="flex">
                  <StatCard {...stat} />
                </li>
              ))}
            </ul>

            {/* Phones: the stats run in a drag marquee, edge to edge. */}
            <DragMarquee
              pauseOnHover
              className="-mx-[20px] hidden max-sm:block"
              trackClassName="flex w-max items-stretch"
              slideClassName="flex shrink-0 pr-[8px]"
            >
              {aboutStats.map((stat) => (
                <StatCard key={stat.id} {...stat} />
              ))}
            </DragMarquee>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-[424px] z-[10] w-max max-sm:static max-sm:order-2 max-sm:mx-auto max-sm:mt-[30px]">
            <Image
              src="/images/about/hassan-hero-img.png"
              alt=""
              width={594}
              height={705}
              className="block max-sm:h-auto max-sm:w-[300px]"
            />
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 z-[11] h-[371px] w-full max-sm:h-[200px]">
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
