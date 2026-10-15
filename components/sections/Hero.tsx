"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
// import CursorGlow from "@/components/ui/CursorGlow";
import ParticleLogo from "@/components/ui/ParticleLogo";
import Popover from "@/components/ui/Popover";
import DragMarquee from "@/components/ui/DragMarquee";
import { clientLogos, heroBadges, heroPopovers } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <Section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <Image
            src="/images/home/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="max-425:hidden object-cover opacity-40"
          />

          <Image
            src="/images/home/hero-bg-responsive.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="max-425:block hidden object-cover opacity-40"
          />
        </div>

        {/* <CursorGlow
          query="(min-width: 1025px)"
          className="pointer-events-none absolute top-[90rem] left-1/2 z-0 h-[138.6rem] w-[130.3rem] -translate-x-1/2"
        >
          <div className="animate-glow-spin max-1024:animate-none size-full rounded-full bg-[linear-gradient(90deg,#FFE400_0%,#EC9122_45.05%,#EC3593_98.64%)] blur-[30rem] motion-reduce:animate-none" />
        </CursorGlow> */}

        <Container className="max-425:pt-[13rem] max-425:pb-[6rem] relative z-10 pt-[15rem] pb-[10rem]">
          <div className="max-425:flex-col max-425:items-center flex items-end justify-between gap-[4.5rem]">
            <div className="pb-sm max-425:w-full max-425:items-center max-425:text-center max-425:px-[3rem] flex w-[55rem] flex-col items-start">
              <ul className="gap-sm max-425:gap-xs flex items-center">
                {heroBadges.map(({ id, src, alt, width, height }, index) => (
                  <li key={id} className="gap-sm flex items-center">
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      priority
                      className="max-425:h-[2rem] h-[3.5rem] w-auto"
                    />

                    {index < heroBadges.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="bg-text-body max-425:h-[2.2rem] h-[3.5rem] w-px"
                      />
                    )}
                  </li>
                ))}
              </ul>

              <h1 className="text-heading-01 max-425:text-[7.5rem] max-425:my-xs my-md max-425:leading-[7.5rem] max-425:max-w-[30rem] leading-[11rem] font-bold tracking-[-0.07em] text-white">
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_74.04%)] bg-clip-text text-transparent">
                  Growth
                </span>{" "}
                Focused<span className="text-dark-pink">.</span>
              </h1>

              <p className="text-body-02 max-425:text-[1.4rem] max-425:mb-[3.5rem] mb-lg max-425:leading-[2.3rem] max-425:max-w-[32.6rem] leading-[2.8rem] font-normal tracking-[-0.02em] text-white">
                We combine strategy, design and technology to help ambitious
                businesses attract, engage and convert more customers.
              </p>

              <div className="max-425:w-full flex">
                <Button
                  href="/contact"
                  className="text-body-02 max-425:text-[1.4rem] px-sm py-xs max-425:w-full rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Lets Talk about your project
                </Button>
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
                  <Popover
                    key={id}
                    label={title}
                    isOpen={openId === id}
                    onOpenChange={(open) => setOpenId(open ? id : null)}
                    orientation={orientation}
                    className={className}
                    squareClassName={squareClassName}
                    panelClassName="gap-sm w-[24rem] max-425:w-[13.9rem] flex flex-col items-center max-425:rounded-[.5rem] rounded-sm bg-white/20 px-[1rem] max-425:px-[.5rem] max-425:pt-[.5rem] pt-[1rem] pb-[2rem] max-425:pb-[1rem] backdrop-blur-[20px]"
                  >
                    <Link href={href} className="contents">
                      <span className="max-425:h-[8.5rem] max-425:rounded-[.3rem] max-425:w-full relative block h-[14.6rem] w-[21.9rem] overflow-hidden rounded-xs">
                        <Image
                          src={image}
                          alt=""
                          fill
                          sizes="219px"
                          className="object-cover"
                        />
                      </span>

                      <span className="gap-xs flex w-full items-center justify-between">
                        <span className="text-body-01 max-425:text-[1.2rem] font-medium tracking-[-0.02em] text-white">
                          {title}
                        </span>

                        <ArrowUpRight
                          color="white"
                          strokeWidth={2}
                          size={18}
                          className="max-425:size-[1rem]"
                        />
                      </span>
                    </Link>
                  </Popover>
                ),
              )}

              <ParticleLogo
                svgSrc="/images/common/cp-logo-particle.svg"
                label="CP logo formed from square pixels with a four-pixel gap"
                className="aspect-[439/460] w-[min(560px,calc(100vw-96px),calc((100svh-96px)*439/460))]"
              />
            </div>
          </div>

          <div className="mt-3xl max-425:mt-xl w-full">
            <span
              aria-hidden="true"
              className="bg-text-body mb-lg max-425:mb-md block h-px w-full"
            />

            <DragMarquee
              pauseOnHover
              trackClassName="flex w-max items-center"
              slideClassName="shrink-0"
            >
              {clientLogos.map(
                ({ id, src, alt, href, width, height, className }) => (
                  <Link
                    key={id}
                    href={href}
                    draggable={false}
                    className="mx-md max-425:mx-sm block opacity-80 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      draggable={false}
                      className={className}
                    />
                  </Link>
                ),
              )}
            </DragMarquee>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
