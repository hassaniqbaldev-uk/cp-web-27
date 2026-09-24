"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Popover from "@/components/ui/Popover";
import Section from "@/components/ui/Section";
import DragMarquee from "@/components/ui/DragMarquee";
import ParticleLogo from "@/components/ui/ParticleLogo";
import { clientLogos, heroBadges, heroPopovers } from "@/config/common";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  // A single id rather than per-popover state, so opening one closes the rest.
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <Section className="flex min-h-screen items-center overflow-hidden bg-black">
        <Container className="max-425:pt-[13rem] max-425:pb-[6rem] pt-[15rem] pb-[10rem]">
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

              <Button
                href="/contact"
                className="text-body-02 max-425:text-[1.4rem] px-sm py-xs max-425:w-full rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                Lets Talk about your project
              </Button>
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
                  panelPositionClassName,
                }) => (
                  <Popover
                    key={id}
                    title={title}
                    href={href}
                    image={image}
                    className={className}
                    squareClassName={squareClassName}
                    panelPositionClassName={panelPositionClassName}
                    isOpen={openId === id}
                    onOpenChange={(open) => setOpenId(open ? id : null)}
                  />
                ),
              )}

              {/* The sizing lives here rather than in the component, which is
                  shared with the other particle fields on the site. */}
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

            {/* Clips the track, which is two copies wide. */}
            <div className="overflow-hidden">
              <DragMarquee query={null} pauseOnHover>
                {/* A list, so the logos announce as a set. The second pass is
                    the copy the loop needs: hidden from assistive tech, and
                    with nothing focusable in it, so no link is duplicated in
                    the tab order. */}
                <ul className="flex w-max items-center">
                  {[false, true].map((isCopy) =>
                    clientLogos.map(
                      ({ id, src, alt, href, width, height, className }) => (
                        <li
                          key={isCopy ? `${id}-copy` : id}
                          {...(isCopy && { "aria-hidden": true })}
                          className="shrink-0"
                        >
                          <Link
                            href={href}
                            tabIndex={isCopy ? -1 : undefined}
                            className="mx-md max-425:mx-sm block opacity-80 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
                          >
                            <Image
                              src={src}
                              alt={isCopy ? "" : alt}
                              width={width}
                              height={height}
                              className={className}
                            />
                          </Link>
                        </li>
                      ),
                    ),
                  )}
                </ul>
              </DragMarquee>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
