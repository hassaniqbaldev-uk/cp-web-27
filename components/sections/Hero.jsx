"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ParticleLogo from "@/components/ui/ParticleLogo";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DragMarquee from "@/components/ui/DragMarquee";
import { clientLogos, heroBadges, heroPopovers } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const openOnHoverOrTap = (open, { reason, event, cancel }) => {
  if (!open || (reason !== "trigger-press" && reason !== "trigger-focus")) {
    return;
  }

  const isTouch =
    event?.pointerType === "touch" ||
    !window.matchMedia("(hover: hover)").matches;

  if (!isTouch) cancel();
};

const Hero = () => {
  return (
    <>
      <Section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        <Container className="relative z-10 pt-[150px] pb-[100px]">
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

              <h1 className="my-[30px] text-[130px] leading-[110px] font-bold tracking-[-0.07em] text-white">
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_74.04%)] bg-clip-text text-transparent">
                  Growth
                </span>{" "}
                Focused<span className="text-dark-pink">.</span>
              </h1>

              <p className="mb-[45px] text-[18px] leading-[28px] font-normal tracking-[-0.02em] text-white">
                We combine strategy, design and technology to help ambitious
                businesses attract, engage and convert more customers.
              </p>

              <div className="flex">
                <Button
                  href="/contact"
                  className="rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
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
                  <Popover key={id} onOpenChange={openOnHoverOrTap}>
                    <div className={`absolute z-[100] ${className}`}>
                      <PopoverTrigger
                        openOnHover
                        delay={0}
                        closeDelay={180}
                        className="relative block cursor-pointer"
                      >
                        <span className="absolute top-1/2 left-1/2 -translate-1/2 animate-ping rounded-full bg-white/50 p-[10px]" />

                        <span className={`relative block ${squareClassName}`} />
                      </PopoverTrigger>
                    </div>

                    <PopoverContent
                      side={orientation}
                      sideOffset={10}
                      className="flex w-[240px] flex-col items-center gap-[20px] rounded-[10px] bg-white/20 px-[10px] pt-[10px] pb-[20px] shadow-none ring-0 backdrop-blur-[20px] duration-350"
                    >
                      <Link href={href} className="contents">
                        <span className="relative block h-[146px] w-[219px] overflow-hidden rounded-[5px]">
                          <Image
                            src={image}
                            alt=""
                            fill
                            sizes="219px"
                            className="object-cover"
                          />
                        </span>

                        <span className="flex w-full items-center justify-between gap-[10px]">
                          <span className="text-[22px] font-medium tracking-[-0.02em] text-white">
                            {title}
                          </span>

                          <ArrowUpRight
                            color="white"
                            strokeWidth={2}
                            size={18}
                            className=""
                          />
                        </span>
                      </Link>
                    </PopoverContent>
                  </Popover>
                ),
              )}

              <ParticleLogo
                svgSrc="/images/common/cp-logo-particle.svg"
                className="aspect-[439/460] w-[min(560px,calc(100vw-96px),calc((100svh-96px)*439/460))]"
              />
            </div>
          </div>

          <div className="mt-[120px] w-full">
            <span className="bg-text-body mb-[45px] block h-px w-full" />

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
                    className="mx-[30px] block opacity-80 transition-opacity duration-300 hover:opacity-100"
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
