"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ParticleLogo from "@/components/ui/ParticleLogo";
import HeroPopover from "@/components/ui/HeroPopover";
import { heroBadges, heroPopovers, heroStats } from "@/config/common";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        <Image
          src="/images/common/gradient-bg-hero.png"
          alt=""
          fill
          priority
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 pt-[150px] pb-[64px]">
          <div className="flex items-end justify-between gap-[45px]">
            <div className="flex w-[550px] flex-col items-start pb-[20px]">
              <ul className="flex items-center gap-[20px]">
                {heroBadges.map(({ id, src, alt, width, height }, index) => (
                  <li key={id} className="flex items-center gap-[20px]">
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      priority
                      className="h-[35px] w-auto"
                    />

                    {index < heroBadges.length - 1 && (
                      <span className="bg-text-body h-[35px] w-px" />
                    )}
                  </li>
                ))}
              </ul>

              <SectionHeading
                as="h1"
                title={
                  <>
                    <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_74.04%)] bg-clip-text text-transparent">
                      Growth
                    </span>{" "}
                    Focused<span className="text-dark-pink">.</span>
                  </>
                }
                titleClassName="my-[30px] text-[130px] leading-[110px] font-bold tracking-[-0.07em] text-white"
                subtitle="We combine strategy, design and technology to help ambitious businesses attract, engage and convert more customers."
                subtitleClassName="mb-[45px] text-[18px] leading-[28px] font-normal tracking-[-0.02em] text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Book a 15-min call
                </Button>
              </div>

              <div className="mt-[20px] inline-flex items-center gap-[10px] rounded-full">
                <Image
                  src="/images/home/hassan-avatar-img.png"
                  alt="Hassan, founder of Creative Pixels"
                  width={25}
                  height={25}
                  className="size-[25px] shrink-0 rounded-full object-cover"
                />

                <span className="text-[14px] leading-[28px] font-normal tracking-[-0.02em] text-white">
                  With Hassan, our founder. No hard sell.
                </span>
              </div>
            </div>

            <div className="relative">
              {heroPopovers.map(
                ({
                  id,
                  title,
                  href,
                  image,
                  className,
                  squareClassName,
                  orientation,
                }) => (
                  <HeroPopover
                    key={id}
                    title={title}
                    href={href}
                    image={image}
                    orientation={orientation}
                    className={className}
                  >
                    <span className={`relative block ${squareClassName}`} />
                  </HeroPopover>
                ),
              )}

              <ParticleLogo
                svgSrc="/images/common/cp-logo-particle.svg"
                className="aspect-[439/460] w-[min(560px,calc(100vw-96px),calc((100svh-96px)*439/460))]"
              />
            </div>
          </div>

          <ul className="mt-[100px] flex items-center justify-between gap-[40px]">
            {heroStats.map(
              ({
                id,
                icon,
                iconAlt,
                iconClassName,
                value,
                description,
                width,
                height,
              }) => (
                <li key={id} className="flex items-center gap-[30px]">
                  <span className="flex size-[100px] shrink-0 items-center justify-center rounded-full bg-white/25">
                    <Image
                      src={icon}
                      width={width}
                      height={height}
                      alt={iconAlt}
                      className={`shrink-0 object-contain ${iconClassName}`}
                    />
                  </span>

                  <div className="flex flex-col">
                    <span className="text-[35px] font-bold tracking-[-0.07em] text-white">
                      {value}
                    </span>

                    <p className="mt-[10px] max-w-[230px] text-[18px] leading-[24px] tracking-[-0.02em] text-white">
                      {description}
                    </p>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
